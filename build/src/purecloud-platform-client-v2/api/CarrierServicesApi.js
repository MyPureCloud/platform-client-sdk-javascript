import ApiClient from '../ApiClient.js';


class CarrierServicesApi {
	/**
	 * CarrierServices service.
	 * @module purecloud-platform-client-v2/api/CarrierServicesApi
	 * @version 178.2.0
	 */

	/**
	 * Constructs a new CarrierServicesApi. 
	 * @alias module:purecloud-platform-client-v2/api/CarrierServicesApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete effective number rates
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 */
	deleteCarrierservicesBillingNumberrates(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/billing/numberrates', 
			'DELETE', 
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
	 * Update effective usageRateRegions
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 */
	deleteCarrierservicesBillingUsagerateregions(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/billing/usagerateregions', 
			'DELETE', 
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
	 * Deletes a specific service for a given carrier (i.e. OUTBOUND, INBOUND...)
	 * 
	 * @param {String} carrierId Carrier ID
	 * @param {String} serviceId Service ID
	 */
	deleteCarrierservicesCarrierService(carrierId, serviceId) { 
		// verify the required parameter 'carrierId' is set
		if (carrierId === undefined || carrierId === null) {
			throw 'Missing the required parameter "carrierId" when calling deleteCarrierservicesCarrierService';
		}
		// verify the required parameter 'serviceId' is set
		if (serviceId === undefined || serviceId === null) {
			throw 'Missing the required parameter "serviceId" when calling deleteCarrierservicesCarrierService';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/carriers/{carrierId}/services/{serviceId}', 
			'DELETE', 
			{ 'carrierId': carrierId,'serviceId': serviceId },
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
	 * Deletes a CSV schema for a carrier.
	 * 
	 * @param {String} carrierId Carrier ID
	 * @param {String} schemaName Schema name
	 */
	deleteCarrierservicesCsvschemaNameSchemaName(carrierId, schemaName) { 
		// verify the required parameter 'carrierId' is set
		if (carrierId === undefined || carrierId === null) {
			throw 'Missing the required parameter "carrierId" when calling deleteCarrierservicesCsvschemaNameSchemaName';
		}
		// verify the required parameter 'schemaName' is set
		if (schemaName === undefined || schemaName === null) {
			throw 'Missing the required parameter "schemaName" when calling deleteCarrierservicesCsvschemaNameSchemaName';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/csvschemas/{carrierId}/name/{schemaName}', 
			'DELETE', 
			{ 'carrierId': carrierId,'schemaName': schemaName },
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
	 * Clear current emergency location for the logged in user
	 * 
	 */
	deleteCarrierservicesIntegrationsEmergencylocationsMe() { 

		return this.apiClient.callApi(
			'/api/v2/carrierservices/integrations/emergencylocations/me', 
			'DELETE', 
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
	 * Disconnect the number purchased in a particular order.  The order record remains (in the deleted state) for record keeping.
	 * 
	 * @param {String} orderId Phone Number Order ID
	 */
	deleteCarrierservicesNumberpurchaseOrder(orderId) { 
		// verify the required parameter 'orderId' is set
		if (orderId === undefined || orderId === null) {
			throw 'Missing the required parameter "orderId" when calling deleteCarrierservicesNumberpurchaseOrder';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/orders/{orderId}', 
			'DELETE', 
			{ 'orderId': orderId },
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
	 * Cancel a specific reservation, making the number available for other users, again.
	 * 
	 * @param {String} reservationId Phone Number Reservation ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.phoneNumberType Phone Number Type
	 */
	deleteCarrierservicesNumberpurchaseReservedReservationId(reservationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'reservationId' is set
		if (reservationId === undefined || reservationId === null) {
			throw 'Missing the required parameter "reservationId" when calling deleteCarrierservicesNumberpurchaseReservedReservationId';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/reserved/{reservationId}', 
			'DELETE', 
			{ 'reservationId': reservationId },
			{ 'phoneNumberType': opts['phoneNumberType'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete template by id
	 * 
	 * @param {String} templateId Template ID
	 */
	deleteCarrierservicesTemplate(templateId) { 
		// verify the required parameter 'templateId' is set
		if (templateId === undefined || templateId === null) {
			throw 'Missing the required parameter "templateId" when calling deleteCarrierservicesTemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/templates/{templateId}', 
			'DELETE', 
			{ 'templateId': templateId },
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
	 * Delete an existing Endpoint plan for uploaded Transforms
	 * 
	 * @param {String} endpointId Endpoint ID
	 */
	deleteCarrierservicesTransformendpoint(endpointId) { 
		// verify the required parameter 'endpointId' is set
		if (endpointId === undefined || endpointId === null) {
			throw 'Missing the required parameter "endpointId" when calling deleteCarrierservicesTransformendpoint';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/transformendpoints/{endpointId}', 
			'DELETE', 
			{ 'endpointId': endpointId },
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
	 * Delete an existing transform plan for uploaded spreadsheets
	 * 
	 * @param {String} transformId Transform ID
	 */
	deleteCarrierservicesUploadtransformSpreadsheet(transformId) { 
		// verify the required parameter 'transformId' is set
		if (transformId === undefined || transformId === null) {
			throw 'Missing the required parameter "transformId" when calling deleteCarrierservicesUploadtransformSpreadsheet';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/uploadtransform/spreadsheets/{transformId}', 
			'DELETE', 
			{ 'transformId': transformId },
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
	 * Delete an existing transform plan for uploaded delimited text tables
	 * 
	 * @param {String} transformId Transform ID
	 */
	deleteCarrierservicesUploadtransformTexttable(transformId) { 
		// verify the required parameter 'transformId' is set
		if (transformId === undefined || transformId === null) {
			throw 'Missing the required parameter "transformId" when calling deleteCarrierservicesUploadtransformTexttable';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/uploadtransform/texttables/{transformId}', 
			'DELETE', 
			{ 'transformId': transformId },
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
	 * Deletes a XLSX schema for a carrier.
	 * 
	 * @param {String} carrierId Carrier ID
	 * @param {String} schemaName Schema name
	 */
	deleteCarrierservicesXlsxschemaNameSchemaName(carrierId, schemaName) { 
		// verify the required parameter 'carrierId' is set
		if (carrierId === undefined || carrierId === null) {
			throw 'Missing the required parameter "carrierId" when calling deleteCarrierservicesXlsxschemaNameSchemaName';
		}
		// verify the required parameter 'schemaName' is set
		if (schemaName === undefined || schemaName === null) {
			throw 'Missing the required parameter "schemaName" when calling deleteCarrierservicesXlsxschemaNameSchemaName';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/xlsxschemas/{carrierId}/name/{schemaName}', 
			'DELETE', 
			{ 'carrierId': carrierId,'schemaName': schemaName },
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
	 * Gets the bandwidth currency pricing for the given currency
	 * 
	 * @param {Object} currencyName currency
	 * @param {Object} opts Optional parameters
	 * @param {Date} opts.effectiveDate Effective date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Object} opts.bandwidthPricingType Bandwidth pricing type.
	 */
	getCarrierservicesBillingBandwidthcurrencypricingCurrencyName(currencyName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'currencyName' is set
		if (currencyName === undefined || currencyName === null) {
			throw 'Missing the required parameter "currencyName" when calling getCarrierservicesBillingBandwidthcurrencypricingCurrencyName';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/billing/bandwidthcurrencypricing/{currencyName}', 
			'GET', 
			{ 'currencyName': currencyName },
			{ 'effectiveDate': opts['effectiveDate'],'bandwidthPricingType': opts['bandwidthPricingType'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Gets the bandwidth pricing for the given customerId
	 * 
	 * @param {String} customerId customer ID
	 * @param {Object} opts Optional parameters
	 * @param {Date} opts.effectiveDate Effective date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Object} opts.bandwidthPricingType Bandwidth pricing type.
	 */
	getCarrierservicesBillingBandwidthpricingCustomerId(customerId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'customerId' is set
		if (customerId === undefined || customerId === null) {
			throw 'Missing the required parameter "customerId" when calling getCarrierservicesBillingBandwidthpricingCustomerId';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/billing/bandwidthpricing/{customerId}', 
			'GET', 
			{ 'customerId': customerId },
			{ 'effectiveDate': opts['effectiveDate'],'bandwidthPricingType': opts['bandwidthPricingType'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get updated task status for the bill generation
	 * Responds with the generation status for the bill with the given ID. When the status is completed, the bill is part of the response.
	 * @param {String} billId monthly non-recurring cost query ID
	 */
	getCarrierservicesBillingBill(billId) { 
		// verify the required parameter 'billId' is set
		if (billId === undefined || billId === null) {
			throw 'Missing the required parameter "billId" when calling getCarrierservicesBillingBill';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/billing/bills/{billId}', 
			'GET', 
			{ 'billId': billId },
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
	 * Get updated task status for monthly recurring cost (MRC) line items
	 * Responds with the generation status of the report with the given ID. When the status is completed, the report is part of the response.
	 * @param {String} mrcId monthly recurring cost query ID
	 */
	getCarrierservicesBillingMonthlyrecurringcostMrcId(mrcId) { 
		// verify the required parameter 'mrcId' is set
		if (mrcId === undefined || mrcId === null) {
			throw 'Missing the required parameter "mrcId" when calling getCarrierservicesBillingMonthlyrecurringcostMrcId';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/billing/monthlyrecurringcost/{mrcId}', 
			'GET', 
			{ 'mrcId': mrcId },
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
	 * Get updated task status for non-recurring cost (NRC) line items
	 * Responds with the generation status of the report with the given ID. When the status is completed, the report is part of the response.
	 * @param {String} nrcId monthly non-recurring cost query ID
	 */
	getCarrierservicesBillingNonrecurringcostNrcId(nrcId) { 
		// verify the required parameter 'nrcId' is set
		if (nrcId === undefined || nrcId === null) {
			throw 'Missing the required parameter "nrcId" when calling getCarrierservicesBillingNonrecurringcostNrcId';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/billing/nonrecurringcost/{nrcId}', 
			'GET', 
			{ 'nrcId': nrcId },
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
	 * View effective number rates.
	 * 
	 * @param {Boolean} porting Indicates if this number was ported, or purchased through the portal.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.purchaseGroup Prefix or geographical grouping of numbers for pricing purposes
	 * @param {Object} opts.domain Country where org has assigned number
	 * @param {Date} opts.effectiveDate Effective Date for prices. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {String} opts.orgId Organization ID, only used for searching org-specific rates. Leave empty otherwise
	 */
	getCarrierservicesBillingNumberrates(porting, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'porting' is set
		if (porting === undefined || porting === null) {
			throw 'Missing the required parameter "porting" when calling getCarrierservicesBillingNumberrates';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/billing/numberrates', 
			'GET', 
			{  },
			{ 'purchaseGroup': opts['purchaseGroup'],'domain': opts['domain'],'porting': porting,'effectiveDate': opts['effectiveDate'],'orgId': opts['orgId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * View effective usageRateRegions.
	 * 
	 * @param {String} pcvZone Country of recipient's end of the call
	 * @param {Object} opts Optional parameters
	 * @param {Date} opts.effectiveDate Effective Date for prices. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Object} opts.usageCountry Country of other end of the call (not client's end)
	 * @param {Object} opts.domain Country of client's end of the call
	 * @param {Object} opts.dialerType Dialer campaign type
	 */
	getCarrierservicesBillingUsagerateregions(pcvZone, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'pcvZone' is set
		if (pcvZone === undefined || pcvZone === null) {
			throw 'Missing the required parameter "pcvZone" when calling getCarrierservicesBillingUsagerateregions';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/billing/usagerateregions', 
			'GET', 
			{  },
			{ 'effectiveDate': opts['effectiveDate'],'usageCountry': opts['usageCountry'],'domain': opts['domain'],'pcvZone': pcvZone,'dialerType': opts['dialerType'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get specified carrier by its carrier id
	 * 
	 * @param {String} carrierId Carrier ID
	 */
	getCarrierservicesCarrier(carrierId) { 
		// verify the required parameter 'carrierId' is set
		if (carrierId === undefined || carrierId === null) {
			throw 'Missing the required parameter "carrierId" when calling getCarrierservicesCarrier';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/carriers/{carrierId}', 
			'GET', 
			{ 'carrierId': carrierId },
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
	 * Retrieves a specific service for a given carrier (i.e. OUTBOUND, INBOUND...)
	 * 
	 * @param {String} carrierId Carrier ID
	 * @param {String} serviceId Service ID
	 */
	getCarrierservicesCarrierService(carrierId, serviceId) { 
		// verify the required parameter 'carrierId' is set
		if (carrierId === undefined || carrierId === null) {
			throw 'Missing the required parameter "carrierId" when calling getCarrierservicesCarrierService';
		}
		// verify the required parameter 'serviceId' is set
		if (serviceId === undefined || serviceId === null) {
			throw 'Missing the required parameter "serviceId" when calling getCarrierservicesCarrierService';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/carriers/{carrierId}/services/{serviceId}', 
			'GET', 
			{ 'carrierId': carrierId,'serviceId': serviceId },
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
	 * Retrieves all services for a given carrier (i.e. OUTBOUND, INBOUND...)
	 * 
	 * @param {String} carrierId Carrier ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.filter Filter
	 */
	getCarrierservicesCarrierServices(carrierId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'carrierId' is set
		if (carrierId === undefined || carrierId === null) {
			throw 'Missing the required parameter "carrierId" when calling getCarrierservicesCarrierServices';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/carriers/{carrierId}/services', 
			'GET', 
			{ 'carrierId': carrierId },
			{ 'filter': opts['filter'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the list of carriers, optionally filtered by inventory status
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.inventory Inventory
	 */
	getCarrierservicesCarriers(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/carriers', 
			'GET', 
			{  },
			{ 'inventory': opts['inventory'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Gets a the result from manually backing up CDRs.
	 * 
	 * @param {String} resultId The result ID
	 */
	getCarrierservicesCdrsBackupResultId(resultId) { 
		// verify the required parameter 'resultId' is set
		if (resultId === undefined || resultId === null) {
			throw 'Missing the required parameter "resultId" when calling getCarrierservicesCdrsBackupResultId';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/cdrs/backup/{resultId}', 
			'GET', 
			{ 'resultId': resultId },
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
	 * Gets a the result from listing backed up CDRs.
	 * 
	 * @param {String} resultId The result ID
	 */
	getCarrierservicesCdrsBackupsListResultId(resultId) { 
		// verify the required parameter 'resultId' is set
		if (resultId === undefined || resultId === null) {
			throw 'Missing the required parameter "resultId" when calling getCarrierservicesCdrsBackupsListResultId';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/cdrs/backups/list/{resultId}', 
			'GET', 
			{ 'resultId': resultId },
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
	 * Get all CSV schemas for a given carrier.
	 * 
	 * @param {String} carrierId Carrier ID
	 */
	getCarrierservicesCsvschema(carrierId) { 
		// verify the required parameter 'carrierId' is set
		if (carrierId === undefined || carrierId === null) {
			throw 'Missing the required parameter "carrierId" when calling getCarrierservicesCsvschema';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/csvschemas/{carrierId}', 
			'GET', 
			{ 'carrierId': carrierId },
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
	 * Get all CSV schemas for a given carrier and name.
	 * 
	 * @param {String} carrierId Carrier ID
	 * @param {String} schemaName Schema name
	 */
	getCarrierservicesCsvschemaNameSchemaName(carrierId, schemaName) { 
		// verify the required parameter 'carrierId' is set
		if (carrierId === undefined || carrierId === null) {
			throw 'Missing the required parameter "carrierId" when calling getCarrierservicesCsvschemaNameSchemaName';
		}
		// verify the required parameter 'schemaName' is set
		if (schemaName === undefined || schemaName === null) {
			throw 'Missing the required parameter "schemaName" when calling getCarrierservicesCsvschemaNameSchemaName';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/csvschemas/{carrierId}/name/{schemaName}', 
			'GET', 
			{ 'carrierId': carrierId,'schemaName': schemaName },
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
	 * Get all CSV schemas available.
	 * 
	 */
	getCarrierservicesCsvschemas() { 

		return this.apiClient.callApi(
			'/api/v2/carrierservices/csvschemas', 
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
	 * Get location for the logged in user
	 * 
	 * @param {String} phoneNumber Phone number in E164 format
	 */
	getCarrierservicesIntegrationsEmergencylocationsMe(phoneNumber) { 
		// verify the required parameter 'phoneNumber' is set
		if (phoneNumber === undefined || phoneNumber === null) {
			throw 'Missing the required parameter "phoneNumber" when calling getCarrierservicesIntegrationsEmergencylocationsMe';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/integrations/emergencylocations/me', 
			'GET', 
			{  },
			{ 'phoneNumber': phoneNumber },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get an InventoryNumber
	 * 
	 * @param {String} phoneNumberId Phone Number
	 */
	getCarrierservicesNumberinventoryInventorynumber(phoneNumberId) { 
		// verify the required parameter 'phoneNumberId' is set
		if (phoneNumberId === undefined || phoneNumberId === null) {
			throw 'Missing the required parameter "phoneNumberId" when calling getCarrierservicesNumberinventoryInventorynumber';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberinventory/inventorynumbers/{phoneNumberId}', 
			'GET', 
			{ 'phoneNumberId': phoneNumberId },
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
	 * Get all InventoryNumbers. Filtering is supported.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Sort By Field (default to phoneNumber)
	 * @param {Object} opts.sortOrder Sort Order (default to ascending)
	 * @param {String} opts.phoneNumber Phone number filter
	 * @param {String} opts.city City filter
	 * @param {Object} opts.numberType Number type filter
	 * @param {Object} opts.status Status filter
	 * @param {Object} opts.addressStatus Address status filter
	 * @param {Date} opts.carrierReservationExpiryStart Carrier reservation expiry range filter start. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Date} opts.carrierReservationExpiryStop Carrier reservation expiry range filter stop. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Date} opts.customerReservationExpiryStart Customer reservation expiry range filter start. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Date} opts.customerReservationExpiryStop Customer reservation expiry range filter stop. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 */
	getCarrierservicesNumberinventoryInventorynumbers(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberinventory/inventorynumbers', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'phoneNumber': opts['phoneNumber'],'city': opts['city'],'numberType': opts['numberType'],'status': opts['status'],'addressStatus': opts['addressStatus'],'carrierReservationExpiryStart': opts['carrierReservationExpiryStart'],'carrierReservationExpiryStop': opts['carrierReservationExpiryStop'],'customerReservationExpiryStart': opts['customerReservationExpiryStart'],'customerReservationExpiryStop': opts['customerReservationExpiryStop'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get available InventoryNumbers.
	 * 
	 * @param {String} prefix Filter prefix
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.sortBy Sort By Field (default to phoneNumber)
	 * @param {String} opts.sortOrder Sort Order (default to asc)
	 * @param {Boolean} opts.excludeCarrierExpired Exclude Carrier Expired (default to false)
	 * @param {String} opts.numberType Number Type (default to DID)
	 */
	getCarrierservicesNumberinventoryInventorynumbersAvailable(prefix, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'prefix' is set
		if (prefix === undefined || prefix === null) {
			throw 'Missing the required parameter "prefix" when calling getCarrierservicesNumberinventoryInventorynumbersAvailable';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberinventory/inventorynumbers/available', 
			'GET', 
			{  },
			{ 'prefix': prefix,'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'excludeCarrierExpired': opts['excludeCarrierExpired'],'numberType': opts['numberType'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get all available service capabilities
	 * 
	 */
	getCarrierservicesNumberinventoryServicecapabilities() { 

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberinventory/servicecapabilities', 
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
	 * Get all available service capabilities and descriptions
	 * 
	 */
	getCarrierservicesNumberinventoryServicecapabilitiesDescriptions() { 

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberinventory/servicecapabilities/descriptions', 
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
	 * Retrieve results from async port requests update task.
	 * 
	 * @param {String} taskId Task id
	 */
	getCarrierservicesNumbermanagementPortrequestTaskResults(taskId) { 
		// verify the required parameter 'taskId' is set
		if (taskId === undefined || taskId === null) {
			throw 'Missing the required parameter "taskId" when calling getCarrierservicesNumbermanagementPortrequestTaskResults';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numbermanagement/portrequest/tasks/{taskId}/results', 
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
	 * Retrieve a port request update task to check its state
	 * 
	 * @param {String} taskId Task id
	 */
	getCarrierservicesNumbermanagementPortrequestTaskStatus(taskId) { 
		// verify the required parameter 'taskId' is set
		if (taskId === undefined || taskId === null) {
			throw 'Missing the required parameter "taskId" when calling getCarrierservicesNumbermanagementPortrequestTaskStatus';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numbermanagement/portrequest/tasks/{taskId}/status', 
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
	 * Retrieve a port request delete task to check its state
	 * 
	 * @param {String} taskId Task id
	 */
	getCarrierservicesNumbermanagementPortrequestsDisconnectTask(taskId) { 
		// verify the required parameter 'taskId' is set
		if (taskId === undefined || taskId === null) {
			throw 'Missing the required parameter "taskId" when calling getCarrierservicesNumbermanagementPortrequestsDisconnectTask';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numbermanagement/portrequests/disconnect/tasks/{taskId}', 
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
	 * Retrieve results from async port requests delete task.
	 * 
	 * @param {String} taskId Task id
	 */
	getCarrierservicesNumbermanagementPortrequestsDisconnectTaskResults(taskId) { 
		// verify the required parameter 'taskId' is set
		if (taskId === undefined || taskId === null) {
			throw 'Missing the required parameter "taskId" when calling getCarrierservicesNumbermanagementPortrequestsDisconnectTaskResults';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numbermanagement/portrequests/disconnect/tasks/{taskId}/results', 
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
	 * Retrieve a port request task to check its state
	 * 
	 * @param {String} taskId Task id
	 */
	getCarrierservicesNumbermanagementPortrequestsTask(taskId) { 
		// verify the required parameter 'taskId' is set
		if (taskId === undefined || taskId === null) {
			throw 'Missing the required parameter "taskId" when calling getCarrierservicesNumbermanagementPortrequestsTask';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numbermanagement/portrequests/tasks/{taskId}', 
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
	 * Retrieve a list of number orders for a port request by their completed taskId
	 * 
	 * @param {String} taskId Task id
	 */
	getCarrierservicesNumbermanagementPortrequestsTaskResults(taskId) { 
		// verify the required parameter 'taskId' is set
		if (taskId === undefined || taskId === null) {
			throw 'Missing the required parameter "taskId" when calling getCarrierservicesNumbermanagementPortrequestsTaskResults';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numbermanagement/portrequests/tasks/{taskId}/results', 
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
	 * Retrieve search result status for previous search.
	 * 
	 * @param {String} taskId Search result task id
	 */
	getCarrierservicesNumberpurchase20160715AvailableTaskId(taskId) { 
		// verify the required parameter 'taskId' is set
		if (taskId === undefined || taskId === null) {
			throw 'Missing the required parameter "taskId" when calling getCarrierservicesNumberpurchase20160715AvailableTaskId';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/20160715/available/{taskId}', 
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
	 * Retrieve search result status for previous search.
	 * 
	 * @param {String} taskId Search result task id
	 */
	getCarrierservicesNumberpurchase20180810AvailableTaskId(taskId) { 
		// verify the required parameter 'taskId' is set
		if (taskId === undefined || taskId === null) {
			throw 'Missing the required parameter "taskId" when calling getCarrierservicesNumberpurchase20180810AvailableTaskId';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/20180810/available/{taskId}', 
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
	 * Retrieve a number orders task to check its state
	 * 
	 * @param {String} taskId Task id
	 */
	getCarrierservicesNumberpurchase20190107DisconnectTask(taskId) { 
		// verify the required parameter 'taskId' is set
		if (taskId === undefined || taskId === null) {
			throw 'Missing the required parameter "taskId" when calling getCarrierservicesNumberpurchase20190107DisconnectTask';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/20190107/disconnect/tasks/{taskId}', 
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
	 * Retrieve the results task of a number orders tasks by its completed taskId
	 * 
	 * @param {String} taskId Task id
	 */
	getCarrierservicesNumberpurchase20190107DisconnectTaskResults(taskId) { 
		// verify the required parameter 'taskId' is set
		if (taskId === undefined || taskId === null) {
			throw 'Missing the required parameter "taskId" when calling getCarrierservicesNumberpurchase20190107DisconnectTaskResults';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/20190107/disconnect/tasks/{taskId}/results', 
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
	 * Retrieve a number order export task to check its state
	 * 
	 * @param {String} taskId Task id
	 */
	getCarrierservicesNumberpurchase20190107ExportTask(taskId) { 
		// verify the required parameter 'taskId' is set
		if (taskId === undefined || taskId === null) {
			throw 'Missing the required parameter "taskId" when calling getCarrierservicesNumberpurchase20190107ExportTask';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/20190107/export/tasks/{taskId}', 
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
	 * Retrieve the results task of a number order export tasks by its completed taskId
	 * 
	 * @param {String} taskId Task id
	 */
	getCarrierservicesNumberpurchase20190107ExportTaskResult(taskId) { 
		// verify the required parameter 'taskId' is set
		if (taskId === undefined || taskId === null) {
			throw 'Missing the required parameter "taskId" when calling getCarrierservicesNumberpurchase20190107ExportTaskResult';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/20190107/export/tasks/{taskId}/result', 
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
	 * Retrieve a reservation task to check its state
	 * 
	 * @param {String} taskId Task id
	 */
	getCarrierservicesNumberpurchase20200902ReservationsTask(taskId) { 
		// verify the required parameter 'taskId' is set
		if (taskId === undefined || taskId === null) {
			throw 'Missing the required parameter "taskId" when calling getCarrierservicesNumberpurchase20200902ReservationsTask';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/20200902/reservations/tasks/{taskId}', 
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
	 * Retrieve a list of reservations by their completed taskId
	 * 
	 * @param {String} taskId Task id
	 */
	getCarrierservicesNumberpurchase20200902ReservationsTaskResults(taskId) { 
		// verify the required parameter 'taskId' is set
		if (taskId === undefined || taskId === null) {
			throw 'Missing the required parameter "taskId" when calling getCarrierservicesNumberpurchase20200902ReservationsTaskResults';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/20200902/reservations/tasks/{taskId}/results', 
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
	 * View all number orders for the organization of a listing of phone number types or a status, or a combination thereof.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.phoneNumberType Comma separated list of Phone Number Types to be queried on
	 * @param {Object} opts.status Status or the number order. Cannot be used in combination with 'excludedStatuses'
	 * @param {String} opts.excludedStatuses Comma separated list of order statuses to be excluded. This parameter cannot be used together with 'status'
	 * @param {String} opts.startE164 e164 formatted lower bound phone number of a range query (inclusive)
	 * @param {String} opts.endE164 e164 formatted upper bound phone number of a range query (exclusive)
	 * @param {String} opts.locationId Optional location ID to filter by.
	 * @param {Boolean} opts.emergencyCapable Optional emergency capable filter. If set to true, only number orders that have emergency capabilities are returned
	 * @param {String} opts.lastId Index for paged queries. To get the next page, this has to be the ID of the last number order, and the direction has to be NEXT. To get the previous page, this has to be the ID of the first item, and the direction has to be PREVIOUS
	 * @param {Object} opts.direction The direction indicates if the NEXT or PREVIOUS page should be returned (default to NEXT)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getCarrierservicesNumberpurchase20210520Orders(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/20210520/orders', 
			'GET', 
			{  },
			{ 'phoneNumberType': opts['phoneNumberType'],'status': opts['status'],'excludedStatuses': opts['excludedStatuses'],'startE164': opts['startE164'],'endE164': opts['endE164'],'locationId': opts['locationId'],'emergencyCapable': opts['emergencyCapable'],'lastId': opts['lastId'],'direction': opts['direction'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * View all a number order record.  Some vendor apis have side effects when viewing records with pending operations.  This method also manages the side effects and updates ININ-side data stores to reflect any changes.
	 * 
	 * @param {String} orderId Phone Number Order ID
	 */
	getCarrierservicesNumberpurchaseOrder(orderId) { 
		// verify the required parameter 'orderId' is set
		if (orderId === undefined || orderId === null) {
			throw 'Missing the required parameter "orderId" when calling getCarrierservicesNumberpurchaseOrder';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/orders/{orderId}', 
			'GET', 
			{ 'orderId': orderId },
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
	 * View all number orders for the organization of a phone number type or a status, or a combination thereof.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.phoneNumberType Phone Number Type
	 * @param {Object} opts.status Status or the number order. Cannot be used in combination with 'excludeDisconnected'
	 * @param {Boolean} opts.excludeDisconnected Exclude disconnected numbers. Cannot be used in combination with 'status'
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.sortBy Sort by
	 * @param {Object} opts.sortOrder Sort order
	 */
	getCarrierservicesNumberpurchaseOrders(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/orders', 
			'GET', 
			{  },
			{ 'phoneNumberType': opts['phoneNumberType'],'status': opts['status'],'excludeDisconnected': opts['excludeDisconnected'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Check if a number is PCV number. This would return 200 if there is an order with this number, and the status is COMPLETE. Otherwise a 404 is returned.
	 * 
	 * @param {String} did The DID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.findActive Find active orders only (default to false)
	 */
	getCarrierservicesNumberpurchaseOrdersDidDid(did, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'did' is set
		if (did === undefined || did === null) {
			throw 'Missing the required parameter "did" when calling getCarrierservicesNumberpurchaseOrdersDidDid';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/orders/did/{did}', 
			'GET', 
			{ 'did': did },
			{ 'findActive': opts['findActive'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get details of a specific port request.
	 * 
	 * @param {String} portRequestId Port request id
	 */
	getCarrierservicesNumberpurchasePortrequest(portRequestId) { 
		// verify the required parameter 'portRequestId' is set
		if (portRequestId === undefined || portRequestId === null) {
			throw 'Missing the required parameter "portRequestId" when calling getCarrierservicesNumberpurchasePortrequest';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/portrequests/{portRequestId}', 
			'GET', 
			{ 'portRequestId': portRequestId },
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
	 * View all number orders for a given port request in an organization.
	 * 
	 * @param {String} portRequestId Port Request to retrieve number orders from
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page Number (default to 1)
	 * @param {Number} opts.pageSize Page Size (default to 25)
	 */
	getCarrierservicesNumberpurchasePortrequestOrders(portRequestId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'portRequestId' is set
		if (portRequestId === undefined || portRequestId === null) {
			throw 'Missing the required parameter "portRequestId" when calling getCarrierservicesNumberpurchasePortrequestOrders';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/portrequests/{portRequestId}/orders', 
			'GET', 
			{ 'portRequestId': portRequestId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * View all port requests for an organization.
	 * 
	 */
	getCarrierservicesNumberpurchasePortrequests() { 

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/portrequests', 
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
	 * All port requests with the transitive property added.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page Number (default to 1)
	 * @param {Number} opts.pageSize Page Size (default to 25)
	 */
	getCarrierservicesNumberpurchasePortrequestsTransitive(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/portrequests/transitive', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * View a specific reservation.
	 * 
	 * @param {String} reservationId Phone Number Reservation ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.phoneNumberType Phone Number Type
	 */
	getCarrierservicesNumberpurchaseReservedReservationId(reservationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'reservationId' is set
		if (reservationId === undefined || reservationId === null) {
			throw 'Missing the required parameter "reservationId" when calling getCarrierservicesNumberpurchaseReservedReservationId';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/reserved/{reservationId}', 
			'GET', 
			{ 'reservationId': reservationId },
			{ 'phoneNumberType': opts['phoneNumberType'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Find supported countries based on country (US, CA, PR, etc.) and if the number is Tollfree or DID
	 * 
	 * @param {String} country country
	 * @param {Boolean} tollfree Is numbertype tollfree
	 */
	getCarrierservicesNumberpurchaseSupportedcountries(country, tollfree) { 
		// verify the required parameter 'country' is set
		if (country === undefined || country === null) {
			throw 'Missing the required parameter "country" when calling getCarrierservicesNumberpurchaseSupportedcountries';
		}
		// verify the required parameter 'tollfree' is set
		if (tollfree === undefined || tollfree === null) {
			throw 'Missing the required parameter "tollfree" when calling getCarrierservicesNumberpurchaseSupportedcountries';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/supportedcountries', 
			'GET', 
			{  },
			{ 'country': country,'tollfree': tollfree },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get effective number rate.
	 * 
	 * @param {String} purchaseGroup Prefix or geographical grouping of numbers for pricing purposes
	 * @param {Object} currency Currency of the rate.
	 * @param {Object} opts Optional parameters
	 * @param {Date} opts.effectiveDate Effective Date for prices. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {String} opts.orgId Organization ID.
	 */
	getCarrierservicesPricingNumberrate(purchaseGroup, currency, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'purchaseGroup' is set
		if (purchaseGroup === undefined || purchaseGroup === null) {
			throw 'Missing the required parameter "purchaseGroup" when calling getCarrierservicesPricingNumberrate';
		}
		// verify the required parameter 'currency' is set
		if (currency === undefined || currency === null) {
			throw 'Missing the required parameter "currency" when calling getCarrierservicesPricingNumberrate';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/pricing/numberrate', 
			'GET', 
			{  },
			{ 'effectiveDate': opts['effectiveDate'],'purchaseGroup': purchaseGroup,'currency': currency,'orgId': opts['orgId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get ratesheet upload progress for a user.
	 * 
	 */
	getCarrierservicesProgress() { 

		return this.apiClient.callApi(
			'/api/v2/carrierservices/progress', 
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
	 * Get updated task status for fee line items
	 * Responds with the generation status of the report with the given ID. When the status is completed, the report is part of the response.
	 * @param {String} feesId Fees report ID
	 */
	getCarrierservicesReportLineitemsFee(feesId) { 
		// verify the required parameter 'feesId' is set
		if (feesId === undefined || feesId === null) {
			throw 'Missing the required parameter "feesId" when calling getCarrierservicesReportLineitemsFee';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/report/lineitems/fees/{feesId}', 
			'GET', 
			{ 'feesId': feesId },
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
	 * Get updated task status for usage line items
	 * Responds with the generation status of the report with the given ID. When the status is completed, the report is part of the response.
	 * @param {String} usageId Usage report ID
	 */
	getCarrierservicesReportLineitemsUsageUsageId(usageId) { 
		// verify the required parameter 'usageId' is set
		if (usageId === undefined || usageId === null) {
			throw 'Missing the required parameter "usageId" when calling getCarrierservicesReportLineitemsUsageUsageId';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/report/lineitems/usage/{usageId}', 
			'GET', 
			{ 'usageId': usageId },
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
	 * Get all task statuses
	 * 
	 */
	getCarrierservicesReportUsageCallsCsv() { 

		return this.apiClient.callApi(
			'/api/v2/carrierservices/report/usage/calls/csv', 
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
	 * Get updated task status
	 * 
	 * @param {String} csvId CSV ID
	 */
	getCarrierservicesReportUsageCallsCsvCsvId(csvId) { 
		// verify the required parameter 'csvId' is set
		if (csvId === undefined || csvId === null) {
			throw 'Missing the required parameter "csvId" when calling getCarrierservicesReportUsageCallsCsvCsvId';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/report/usage/calls/csv/{csvId}', 
			'GET', 
			{ 'csvId': csvId },
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
	 * Retrieve a signature task to check its state
	 * 
	 * @param {String} taskId Task id
	 */
	getCarrierservicesSignaturesTask(taskId) { 
		// verify the required parameter 'taskId' is set
		if (taskId === undefined || taskId === null) {
			throw 'Missing the required parameter "taskId" when calling getCarrierservicesSignaturesTask';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/signatures/tasks/{taskId}', 
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
	 * Retrieve signature task by their completed taskId
	 * 
	 * @param {String} taskId Task id
	 */
	getCarrierservicesSignaturesTaskResults(taskId) { 
		// verify the required parameter 'taskId' is set
		if (taskId === undefined || taskId === null) {
			throw 'Missing the required parameter "taskId" when calling getCarrierservicesSignaturesTaskResults';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/signatures/tasks/{taskId}/results', 
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
	 * Get all SIP Dns data for the current region.
	 * 
	 */
	getCarrierservicesSipdnsdetails() { 

		return this.apiClient.callApi(
			'/api/v2/carrierservices/sipdnsdetails', 
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
	 * Get service type sort weight limits and defaults.
	 * 
	 */
	getCarrierservicesSortweightsInfo() { 

		return this.apiClient.callApi(
			'/api/v2/carrierservices/sortweights/info', 
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
	 * Get all supported countries for PureCloud Voice.  These are returned in their ISO 3166-1 form.
	 * 
	 */
	getCarrierservicesSupportedcountries() { 

		return this.apiClient.callApi(
			'/api/v2/carrierservices/supportedcountries', 
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
	 * Check if country is supported for PureCloud Voice.
	 * 
	 * @param {String} countryCode ISO 3166-1 country code for the supported countries
	 */
	getCarrierservicesSupportedcountry(countryCode) { 
		// verify the required parameter 'countryCode' is set
		if (countryCode === undefined || countryCode === null) {
			throw 'Missing the required parameter "countryCode" when calling getCarrierservicesSupportedcountry';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/supportedcountries/{countryCode}', 
			'GET', 
			{ 'countryCode': countryCode },
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
	 * Get template by id
	 * 
	 * @param {String} templateId Template ID
	 */
	getCarrierservicesTemplate(templateId) { 
		// verify the required parameter 'templateId' is set
		if (templateId === undefined || templateId === null) {
			throw 'Missing the required parameter "templateId" when calling getCarrierservicesTemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/templates/{templateId}', 
			'GET', 
			{ 'templateId': templateId },
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
	 * Get all templates
	 * 
	 */
	getCarrierservicesTemplates() { 

		return this.apiClient.callApi(
			'/api/v2/carrierservices/templates', 
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
	 * Get a stored Endpoint plan for uploaded Transforms
	 * 
	 * @param {String} endpointId Endpoint ID
	 */
	getCarrierservicesTransformendpoint(endpointId) { 
		// verify the required parameter 'endpointId' is set
		if (endpointId === undefined || endpointId === null) {
			throw 'Missing the required parameter "endpointId" when calling getCarrierservicesTransformendpoint';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/transformendpoints/{endpointId}', 
			'GET', 
			{ 'endpointId': endpointId },
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
	 * Get a stored transform plan for uploaded spreadsheets
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.filter Filter
	 * @param {String} opts.pageSize Page size
	 * @param {String} opts.lastEntry Last entry
	 */
	getCarrierservicesTransformendpoints(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/transformendpoints', 
			'GET', 
			{  },
			{ 'filter': opts['filter'],'pageSize': opts['pageSize'],'lastEntry': opts['lastEntry'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * The progress report for an upload
	 * 
	 * @param {String} progressId Upload Progress ID
	 */
	getCarrierservicesTransformprogres(progressId) { 
		// verify the required parameter 'progressId' is set
		if (progressId === undefined || progressId === null) {
			throw 'Missing the required parameter "progressId" when calling getCarrierservicesTransformprogres';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/transformprogress/{progressId}', 
			'GET', 
			{ 'progressId': progressId },
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
	 * Get The progress report for transforming uploaded documents
	 * 
	 * @param {String} serviceName Service Name
	 */
	getCarrierservicesTransformprogressSearchServiceName(serviceName) { 
		// verify the required parameter 'serviceName' is set
		if (serviceName === undefined || serviceName === null) {
			throw 'Missing the required parameter "serviceName" when calling getCarrierservicesTransformprogressSearchServiceName';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/transformprogress/search/{serviceName}', 
			'GET', 
			{ 'serviceName': serviceName },
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
	 * Get The progress report for transforming uploaded documents
	 * 
	 * @param {String} serviceName Service Name
	 * @param {String} modelType Model Type
	 */
	getCarrierservicesTransformprogressSearchServiceNameModelType(serviceName, modelType) { 
		// verify the required parameter 'serviceName' is set
		if (serviceName === undefined || serviceName === null) {
			throw 'Missing the required parameter "serviceName" when calling getCarrierservicesTransformprogressSearchServiceNameModelType';
		}
		// verify the required parameter 'modelType' is set
		if (modelType === undefined || modelType === null) {
			throw 'Missing the required parameter "modelType" when calling getCarrierservicesTransformprogressSearchServiceNameModelType';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/transformprogress/search/{serviceName}/{modelType}', 
			'GET', 
			{ 'serviceName': serviceName,'modelType': modelType },
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
	 * Get The progress report for transforming uploaded documents
	 * 
	 * @param {String} serviceName Service Name
	 * @param {String} modelType Model Type
	 * @param {String} modelId Model ID
	 */
	getCarrierservicesTransformprogressSearchServiceNameModelTypeModelId(serviceName, modelType, modelId) { 
		// verify the required parameter 'serviceName' is set
		if (serviceName === undefined || serviceName === null) {
			throw 'Missing the required parameter "serviceName" when calling getCarrierservicesTransformprogressSearchServiceNameModelTypeModelId';
		}
		// verify the required parameter 'modelType' is set
		if (modelType === undefined || modelType === null) {
			throw 'Missing the required parameter "modelType" when calling getCarrierservicesTransformprogressSearchServiceNameModelTypeModelId';
		}
		// verify the required parameter 'modelId' is set
		if (modelId === undefined || modelId === null) {
			throw 'Missing the required parameter "modelId" when calling getCarrierservicesTransformprogressSearchServiceNameModelTypeModelId';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/transformprogress/search/{serviceName}/{modelType}/{modelId}', 
			'GET', 
			{ 'serviceName': serviceName,'modelType': modelType,'modelId': modelId },
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
	 * Get a stored transform plan for uploaded spreadsheets
	 * 
	 * @param {String} transformId Transform ID
	 */
	getCarrierservicesUploadtransformSpreadsheet(transformId) { 
		// verify the required parameter 'transformId' is set
		if (transformId === undefined || transformId === null) {
			throw 'Missing the required parameter "transformId" when calling getCarrierservicesUploadtransformSpreadsheet';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/uploadtransform/spreadsheets/{transformId}', 
			'GET', 
			{ 'transformId': transformId },
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
	 * Get a stored transform plan for uploaded spreadsheets
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.filter Filter
	 * @param {String} opts.pageSize Page size
	 * @param {String} opts.lastEntry Last entry
	 */
	getCarrierservicesUploadtransformSpreadsheets(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/uploadtransform/spreadsheets', 
			'GET', 
			{  },
			{ 'filter': opts['filter'],'pageSize': opts['pageSize'],'lastEntry': opts['lastEntry'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a stored transform plan for uploaded delimited text tables
	 * 
	 * @param {String} transformId Transform ID
	 */
	getCarrierservicesUploadtransformTexttable(transformId) { 
		// verify the required parameter 'transformId' is set
		if (transformId === undefined || transformId === null) {
			throw 'Missing the required parameter "transformId" when calling getCarrierservicesUploadtransformTexttable';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/uploadtransform/texttables/{transformId}', 
			'GET', 
			{ 'transformId': transformId },
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
	 * Get a stored transform plan for uploaded delimited text tables
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.filter Filter
	 */
	getCarrierservicesUploadtransformTexttables(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/uploadtransform/texttables', 
			'GET', 
			{  },
			{ 'filter': opts['filter'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get all XLSX schemas for a given carrier.
	 * 
	 * @param {String} carrierId Carrier ID
	 */
	getCarrierservicesXlsxschema(carrierId) { 
		// verify the required parameter 'carrierId' is set
		if (carrierId === undefined || carrierId === null) {
			throw 'Missing the required parameter "carrierId" when calling getCarrierservicesXlsxschema';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/xlsxschemas/{carrierId}', 
			'GET', 
			{ 'carrierId': carrierId },
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
	 * Get all XLSX schemas for a given carrier and name.
	 * 
	 * @param {String} carrierId Carrier ID
	 * @param {String} schemaName Schema name
	 */
	getCarrierservicesXlsxschemaNameSchemaName(carrierId, schemaName) { 
		// verify the required parameter 'carrierId' is set
		if (carrierId === undefined || carrierId === null) {
			throw 'Missing the required parameter "carrierId" when calling getCarrierservicesXlsxschemaNameSchemaName';
		}
		// verify the required parameter 'schemaName' is set
		if (schemaName === undefined || schemaName === null) {
			throw 'Missing the required parameter "schemaName" when calling getCarrierservicesXlsxschemaNameSchemaName';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/xlsxschemas/{carrierId}/name/{schemaName}', 
			'GET', 
			{ 'carrierId': carrierId,'schemaName': schemaName },
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
	 * Get all available XLSX schemas.
	 * 
	 */
	getCarrierservicesXlsxschemas() { 

		return this.apiClient.callApi(
			'/api/v2/carrierservices/xlsxschemas', 
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
	 * Partial update or patch of an InventoryNumber.
	 * 
	 * @param {String} phoneNumberId Phone Number
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body InventoryNumber
	 */
	patchCarrierservicesNumberinventoryInventorynumber(phoneNumberId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'phoneNumberId' is set
		if (phoneNumberId === undefined || phoneNumberId === null) {
			throw 'Missing the required parameter "phoneNumberId" when calling patchCarrierservicesNumberinventoryInventorynumber';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberinventory/inventorynumbers/{phoneNumberId}', 
			'PATCH', 
			{ 'phoneNumberId': phoneNumberId },
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
	 * Partial update or patch of many InventoryNumbers.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<String, Object>} opts.body InventoryNumbers Patch Map
	 */
	patchCarrierservicesNumberinventoryInventorynumbersBulk(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberinventory/inventorynumbers/bulk', 
			'PATCH', 
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
	 * Patches individual properties of a number order record.  Not all fields will be allowed to be modified.  Only defaultLocationId and phoneNumberType are currently allowed to be modified .
	 * 
	 * @param {String} orderId Phone Number Order ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchCarrierservicesNumberpurchaseOrder(orderId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'orderId' is set
		if (orderId === undefined || orderId === null) {
			throw 'Missing the required parameter "orderId" when calling patchCarrierservicesNumberpurchaseOrder';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/orders/{orderId}', 
			'PATCH', 
			{ 'orderId': orderId },
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
	 * Creates bandwidth currency pricing
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 */
	postCarrierservicesBillingBandwidthcurrencypricing(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/billing/bandwidthcurrencypricing', 
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
	 * Creates bandwidth pricing
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postCarrierservicesBillingBandwidthpricing(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/billing/bandwidthpricing', 
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
	 * Initiate bill generation
	 * Initiates the generation of a bill. A report ID is returned, it can be used to query the status of the creation, which also returns the bill in the end.
	 * @param {Object} opts Optional parameters
	 * @param {Date} opts.from Start date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Date} opts.to End date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Boolean} opts.breakout Breakout.
	 * @param {Number} opts.shortDurationMinCalls Short duration min. calls.
	 */
	postCarrierservicesBillingBills(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/billing/bills', 
			'POST', 
			{  },
			{ 'from': opts['from'],'to': opts['to'],'breakout': opts['breakout'],'shortDurationMinCalls': opts['shortDurationMinCalls'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Initiate monthly recurring cost (MRC) line items report generation
	 * Initiates the generation of the monthly recurring cost (MRC) report. A report ID is returned, it can be used to query the status of the creation, which also returns the report in the end.
	 * @param {Object} opts Optional parameters
	 * @param {Date} opts.from Start date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Date} opts.to End date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Boolean} opts.breakout Breakout.
	 */
	postCarrierservicesBillingMonthlyrecurringcost(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/billing/monthlyrecurringcost', 
			'POST', 
			{  },
			{ 'from': opts['from'],'to': opts['to'],'breakout': opts['breakout'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Initiate non-recurring cost (NRC) line items report generation
	 * Initiates the generation of the non-recurring cost (NRC) report. A report ID is returned, it can be used to query the status of the creation, which also returns the report in the end.
	 * @param {Object} opts Optional parameters
	 * @param {Date} opts.from Start date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Date} opts.to End date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Boolean} opts.breakout Breakout.
	 */
	postCarrierservicesBillingNonrecurringcost(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/billing/nonrecurringcost', 
			'POST', 
			{  },
			{ 'from': opts['from'],'to': opts['to'],'breakout': opts['breakout'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create effective number rates
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 */
	postCarrierservicesBillingNumberrates(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/billing/numberrates', 
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
	 * Queries a single usage pricing
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postCarrierservicesBillingUsagepricingQuery(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/billing/usagepricing/query', 
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
	 * Create effective usageRateRegions
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 */
	postCarrierservicesBillingUsagerateregions(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/billing/usagerateregions', 
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
	 * Creates a carrier service of a specified type (i.e. OUTBOUND, INBOUND...)
	 * 
	 * @param {String} carrierId Carrier ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postCarrierservicesCarrierServices(carrierId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'carrierId' is set
		if (carrierId === undefined || carrierId === null) {
			throw 'Missing the required parameter "carrierId" when calling postCarrierservicesCarrierServices';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/carriers/{carrierId}/services', 
			'POST', 
			{ 'carrierId': carrierId },
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
	 * Create a carrier
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body Carrier data
	 */
	postCarrierservicesCarriers(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/carriers', 
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
	 * Manually backs up CDRs with a given prefix, and within a given time frame.
	 * 
	 * @param {String} prefix Prefix
	 * @param {Date} startDate Date range start. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Date} endDate Date range end. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 */
	postCarrierservicesCdrsBackup(prefix, startDate, endDate) { 
		// verify the required parameter 'prefix' is set
		if (prefix === undefined || prefix === null) {
			throw 'Missing the required parameter "prefix" when calling postCarrierservicesCdrsBackup';
		}
		// verify the required parameter 'startDate' is set
		if (startDate === undefined || startDate === null) {
			throw 'Missing the required parameter "startDate" when calling postCarrierservicesCdrsBackup';
		}
		// verify the required parameter 'endDate' is set
		if (endDate === undefined || endDate === null) {
			throw 'Missing the required parameter "endDate" when calling postCarrierservicesCdrsBackup';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/cdrs/backup', 
			'POST', 
			{  },
			{ 'prefix': prefix,'startDate': startDate,'endDate': endDate },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Initiates asynchronously getting a list of backed up CDRs. The response contains a resultId for obtaining the result.
	 * 
	 * @param {String} prefix prefix
	 * @param {Date} startDate Date range start. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Date} endDate Date range end. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.showVersions Show versions
	 */
	postCarrierservicesCdrsBackupsList(prefix, startDate, endDate, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'prefix' is set
		if (prefix === undefined || prefix === null) {
			throw 'Missing the required parameter "prefix" when calling postCarrierservicesCdrsBackupsList';
		}
		// verify the required parameter 'startDate' is set
		if (startDate === undefined || startDate === null) {
			throw 'Missing the required parameter "startDate" when calling postCarrierservicesCdrsBackupsList';
		}
		// verify the required parameter 'endDate' is set
		if (endDate === undefined || endDate === null) {
			throw 'Missing the required parameter "endDate" when calling postCarrierservicesCdrsBackupsList';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/cdrs/backups/list', 
			'POST', 
			{  },
			{ 'showVersions': opts['showVersions'],'prefix': prefix,'startDate': startDate,'endDate': endDate },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Triggers a job that generates mock CDR data and stores it in the appropriate S3 bucket.
	 * 
	 */
	postCarrierservicesCdrsGenerateFiles() { 

		return this.apiClient.callApi(
			'/api/v2/carrierservices/cdrs/generate/files', 
			'POST', 
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
	 * Restores a backed up CDR.
	 * 
	 * @param {String} sourcePrefix Source prefix
	 * @param {String} key Key of CDR
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.targetBucket Target S3 bucket, if different from original bucket
	 * @param {String} opts.targetPrefix Target prefix, if different from original prefix
	 * @param {String} opts.versionId Version ID
	 */
	postCarrierservicesCdrsRestore(sourcePrefix, key, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sourcePrefix' is set
		if (sourcePrefix === undefined || sourcePrefix === null) {
			throw 'Missing the required parameter "sourcePrefix" when calling postCarrierservicesCdrsRestore';
		}
		// verify the required parameter 'key' is set
		if (key === undefined || key === null) {
			throw 'Missing the required parameter "key" when calling postCarrierservicesCdrsRestore';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/cdrs/restore', 
			'POST', 
			{  },
			{ 'sourcePrefix': sourcePrefix,'key': key,'targetBucket': opts['targetBucket'],'targetPrefix': opts['targetPrefix'],'versionId': opts['versionId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Set current location for the logged in user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postCarrierservicesIntegrationsEmergencylocationsMe(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/integrations/emergencylocations/me', 
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
	 * Verify that phone number supports user location .
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Number to validate 
	 */
	postCarrierservicesIntegrationsEmergencylocationsVerifyphonenumber(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/integrations/emergencylocations/verifyphonenumber', 
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
	 * Create InventoryNumber
	 * 
	 * @param {Object} body InventoryNumber
	 */
	postCarrierservicesNumberinventoryInventorynumbers(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postCarrierservicesNumberinventoryInventorynumbers';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberinventory/inventorynumbers', 
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
	 * Create many InventoryNumbers
	 * 
	 * @param {Array.<Object>} body InventoryNumbers
	 */
	postCarrierservicesNumberinventoryInventorynumbersBulk(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postCarrierservicesNumberinventoryInventorynumbersBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberinventory/inventorynumbers/bulk', 
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
	 * Starts a task that updates the effective start date of the associated pending number orders of the port request
	 * 
	 * @param {String} portRequestId Port Request id
	 * @param {Object} opts Optional parameters
	 * @param {Date} opts.body Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 */
	postCarrierservicesNumbermanagementPortrequestTaskEffectivedate(portRequestId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'portRequestId' is set
		if (portRequestId === undefined || portRequestId === null) {
			throw 'Missing the required parameter "portRequestId" when calling postCarrierservicesNumbermanagementPortrequestTaskEffectivedate';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numbermanagement/portrequest/tasks/{portRequestId}/effectivedate', 
			'POST', 
			{ 'portRequestId': portRequestId },
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
	 * Start a task that deletes all given port requests and associated number orders
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.body 
	 */
	postCarrierservicesNumbermanagementPortrequestsDisconnectTasks(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numbermanagement/portrequests/disconnect/tasks', 
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
	 * Start a task to port numbers
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 */
	postCarrierservicesNumbermanagementPortrequestsTasks(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numbermanagement/portrequests/tasks', 
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
	 * Search for available numbers.
	 * 
	 * @param {Object} body Search result parameters
	 */
	postCarrierservicesNumberpurchase20160715Available(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postCarrierservicesNumberpurchase20160715Available';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/20160715/available', 
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
	 * Purchase numbers.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 */
	postCarrierservicesNumberpurchase20160715Orders(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/20160715/orders', 
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
	 * Start a task to disconnect the numbers purchased in the given orders.  The orders record remain in the deleted state for record keeping.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.body 
	 */
	postCarrierservicesNumberpurchase20190107DisconnectTasks(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/20190107/disconnect/tasks', 
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
	 * Exports number orders for the organization of one or more statuses, a phone number range, or a combination thereof, in CSV format.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postCarrierservicesNumberpurchase20190107ExportTasks(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/20190107/export/tasks', 
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
	 * Start a task to reserve available numbers, making them ready for purchase and preventing other users from accessing them.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 */
	postCarrierservicesNumberpurchase20200902ReservationsTasks(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/20200902/reservations/tasks', 
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
	 * Purchase numbers.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postCarrierservicesNumberpurchaseOrders(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/orders', 
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
	 * Initiate fee line items report generation
	 * Initiates the generation of the fee line items report. A report ID is returned, it can be used to query the status of the creation, which also returns the report in the end.
	 * @param {Object} opts Optional parameters
	 * @param {Date} opts.from Start date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Date} opts.to End date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Number} opts.shortDurationMinCalls Short duration min. calls.
	 */
	postCarrierservicesReportLineitemsFees(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/report/lineitems/fees', 
			'POST', 
			{  },
			{ 'from': opts['from'],'to': opts['to'],'shortDurationMinCalls': opts['shortDurationMinCalls'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Initiate usage line items report generation
	 * Initiates the generation of the usage line items report. A report ID is returned, it can be used to query the status of the creation, which also returns the report in the end.
	 * @param {Object} opts Optional parameters
	 * @param {Date} opts.from Start date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Date} opts.to End date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Number} opts.shortDurationMinCalls Short duration min. calls.
	 */
	postCarrierservicesReportLineitemsUsage(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/report/lineitems/usage', 
			'POST', 
			{  },
			{ 'from': opts['from'],'to': opts['to'],'shortDurationMinCalls': opts['shortDurationMinCalls'] },
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
	 */
	postCarrierservicesReportUsageCallsCsv(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/report/usage/calls/csv', 
			'POST', 
			{  },
			{ 'from': opts['from'],'to': opts['to'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get View Url
	 * Provides url of a hosted DocuSign view/document, allowing user to sign document electronically
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postCarrierservicesSignature(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/signature', 
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
	 * Start task to get url of a hosted DocuSign view/document, allowing user to sign document electronically
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postCarrierservicesSignaturesTasks(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/signatures/tasks', 
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
	 * Create template
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Template data
	 */
	postCarrierservicesTemplates(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/templates', 
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
	 * Add a new transform plan for uploaded spreadsheets
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postCarrierservicesTransformendpoints(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/transformendpoints', 
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
	 * Add a new transform plan for uploaded spreadsheets
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postCarrierservicesUploadtransformSpreadsheets(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/uploadtransform/spreadsheets', 
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
	 * Add a new transform plan for uploaded delimited text tables
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postCarrierservicesUploadtransformTexttables(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/uploadtransform/texttables', 
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
	 * Updates bandwidth currency pricing
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 */
	putCarrierservicesBillingBandwidthcurrencypricing(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/billing/bandwidthcurrencypricing', 
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

	/**
	 * Updates bandwidth pricing
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	putCarrierservicesBillingBandwidthpricing(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/billing/bandwidthpricing', 
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

	/**
	 * Update effective number rates
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 */
	putCarrierservicesBillingNumberrates(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/billing/numberrates', 
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

	/**
	 * Update effective usageRateRegions
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 */
	putCarrierservicesBillingUsagerateregions(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/billing/usagerateregions', 
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

	/**
	 * Update a carrier.
	 * 
	 * @param {String} carrierId Carrier ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Carrier data
	 */
	putCarrierservicesCarrier(carrierId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'carrierId' is set
		if (carrierId === undefined || carrierId === null) {
			throw 'Missing the required parameter "carrierId" when calling putCarrierservicesCarrier';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/carriers/{carrierId}', 
			'PUT', 
			{ 'carrierId': carrierId },
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
	 * Updates a specific service for a given carrier (i.e. OUTBOUND, INBOUND...)
	 * 
	 * @param {String} carrierId Carrier ID
	 * @param {String} serviceId Service ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	putCarrierservicesCarrierService(carrierId, serviceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'carrierId' is set
		if (carrierId === undefined || carrierId === null) {
			throw 'Missing the required parameter "carrierId" when calling putCarrierservicesCarrierService';
		}
		// verify the required parameter 'serviceId' is set
		if (serviceId === undefined || serviceId === null) {
			throw 'Missing the required parameter "serviceId" when calling putCarrierservicesCarrierService';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/carriers/{carrierId}/services/{serviceId}', 
			'PUT', 
			{ 'carrierId': carrierId,'serviceId': serviceId },
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
	 * [20190123] Update a carrier
	 * 
	 * @param {String} carrierId Carrier ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Carrier data
	 */
	putCarrierservicesCarriers20190123Carrier(carrierId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'carrierId' is set
		if (carrierId === undefined || carrierId === null) {
			throw 'Missing the required parameter "carrierId" when calling putCarrierservicesCarriers20190123Carrier';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/carriers/20190123/carriers/{carrierId}', 
			'PUT', 
			{ 'carrierId': carrierId },
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
	 * [20190123] Update a service for a carrier
	 * 
	 * @param {String} carrierId Carrier ID
	 * @param {String} serviceId Service ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	putCarrierservicesCarriers20190123CarrierService(carrierId, serviceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'carrierId' is set
		if (carrierId === undefined || carrierId === null) {
			throw 'Missing the required parameter "carrierId" when calling putCarrierservicesCarriers20190123CarrierService';
		}
		// verify the required parameter 'serviceId' is set
		if (serviceId === undefined || serviceId === null) {
			throw 'Missing the required parameter "serviceId" when calling putCarrierservicesCarriers20190123CarrierService';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/carriers/20190123/carriers/{carrierId}/services/{serviceId}', 
			'PUT', 
			{ 'carrierId': carrierId,'serviceId': serviceId },
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
	 * Updates or creates a CSV schema for a carrier.
	 * 
	 * @param {String} carrierId Carrier ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Schema data
	 */
	putCarrierservicesCsvschema(carrierId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'carrierId' is set
		if (carrierId === undefined || carrierId === null) {
			throw 'Missing the required parameter "carrierId" when calling putCarrierservicesCsvschema';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/csvschemas/{carrierId}', 
			'PUT', 
			{ 'carrierId': carrierId },
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
	 * Update an InventoryNumber
	 * 
	 * @param {String} phoneNumberId Phone Number
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body InventoryNumber
	 */
	putCarrierservicesNumberinventoryInventorynumber(phoneNumberId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'phoneNumberId' is set
		if (phoneNumberId === undefined || phoneNumberId === null) {
			throw 'Missing the required parameter "phoneNumberId" when calling putCarrierservicesNumberinventoryInventorynumber';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberinventory/inventorynumbers/{phoneNumberId}', 
			'PUT', 
			{ 'phoneNumberId': phoneNumberId },
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
	 * Update many InventoryNumbers
	 * 
	 * @param {Array.<Object>} body InventoryNumbers
	 */
	putCarrierservicesNumberinventoryInventorynumbersBulk(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putCarrierservicesNumberinventoryInventorynumbersBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberinventory/inventorynumbers/bulk', 
			'PUT', 
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
	 * Updates a number order record.  Not all fields will be allowed to be modified.  Only effectiveStartDate currently is allowed to be modified at the moment.
	 * 
	 * @param {String} orderId Phone Number Order ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	putCarrierservicesNumberpurchaseOrder(orderId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'orderId' is set
		if (orderId === undefined || orderId === null) {
			throw 'Missing the required parameter "orderId" when calling putCarrierservicesNumberpurchaseOrder';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/orders/{orderId}', 
			'PUT', 
			{ 'orderId': orderId },
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
	 * Edit details of a specific port request.  You may only edit the company name, billing address, and contact info for the port request.  Editing is also only allowed before 30 minutes of activating time.
	 * 
	 * @param {String} portRequestId Port request id
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	putCarrierservicesNumberpurchasePortrequest(portRequestId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'portRequestId' is set
		if (portRequestId === undefined || portRequestId === null) {
			throw 'Missing the required parameter "portRequestId" when calling putCarrierservicesNumberpurchasePortrequest';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/numberpurchase/portrequests/{portRequestId}', 
			'PUT', 
			{ 'portRequestId': portRequestId },
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
	 * Update template
	 * 
	 * @param {String} templateId Template ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Template data
	 */
	putCarrierservicesTemplate(templateId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'templateId' is set
		if (templateId === undefined || templateId === null) {
			throw 'Missing the required parameter "templateId" when calling putCarrierservicesTemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/templates/{templateId}', 
			'PUT', 
			{ 'templateId': templateId },
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
	 * Update an existing Endpoint plan for uploaded Transforms
	 * 
	 * @param {String} endpointId Endpoint ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	putCarrierservicesTransformendpoint(endpointId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'endpointId' is set
		if (endpointId === undefined || endpointId === null) {
			throw 'Missing the required parameter "endpointId" when calling putCarrierservicesTransformendpoint';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/transformendpoints/{endpointId}', 
			'PUT', 
			{ 'endpointId': endpointId },
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
	 * Update an existing transform plan for uploaded spreadsheets
	 * 
	 * @param {String} transformId Transform ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	putCarrierservicesUploadtransformSpreadsheet(transformId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'transformId' is set
		if (transformId === undefined || transformId === null) {
			throw 'Missing the required parameter "transformId" when calling putCarrierservicesUploadtransformSpreadsheet';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/uploadtransform/spreadsheets/{transformId}', 
			'PUT', 
			{ 'transformId': transformId },
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
	 * Update an existing transform plan for uploaded delimited text tables
	 * 
	 * @param {String} transformId Transform ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	putCarrierservicesUploadtransformTexttable(transformId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'transformId' is set
		if (transformId === undefined || transformId === null) {
			throw 'Missing the required parameter "transformId" when calling putCarrierservicesUploadtransformTexttable';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/uploadtransform/texttables/{transformId}', 
			'PUT', 
			{ 'transformId': transformId },
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
	 * Updates or creates a XLSX schema for a carrier.
	 * 
	 * @param {String} carrierId Carrier ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Schema data
	 */
	putCarrierservicesXlsxschema(carrierId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'carrierId' is set
		if (carrierId === undefined || carrierId === null) {
			throw 'Missing the required parameter "carrierId" when calling putCarrierservicesXlsxschema';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/xlsxschemas/{carrierId}', 
			'PUT', 
			{ 'carrierId': carrierId },
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


export default CarrierServicesApi;
