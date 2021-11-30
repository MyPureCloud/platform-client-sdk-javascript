import ApiClient from '../ApiClient.js';


class TelephonyProvidersEdgeApi {
	/**
	 * TelephonyProvidersEdge service.
	 * @module purecloud-platform-client-v2/api/TelephonyProvidersEdgeApi
	 * @version 126.1.0
	 */

	/**
	 * Constructs a new TelephonyProvidersEdgeApi. 
	 * @alias module:purecloud-platform-client-v2/api/TelephonyProvidersEdgeApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a edge.
	 * 
	 * @param {String} edgeId Edge ID
	 */
	deleteTelephonyProvidersEdge(edgeId) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling deleteTelephonyProvidersEdge';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}', 
			'DELETE', 
			{ 'edgeId': edgeId }, 
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
	 * Delete an edge logical interface
	 * 
	 * @param {String} edgeId Edge ID
	 * @param {String} interfaceId Interface ID
	 */
	deleteTelephonyProvidersEdgeLogicalinterface(edgeId, interfaceId) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling deleteTelephonyProvidersEdgeLogicalinterface';
		}
		// verify the required parameter 'interfaceId' is set
		if (interfaceId === undefined || interfaceId === null) {
			throw 'Missing the required parameter "interfaceId" when calling deleteTelephonyProvidersEdgeLogicalinterface';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}', 
			'DELETE', 
			{ 'edgeId': edgeId,'interfaceId': interfaceId }, 
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
	 * Cancels any in-progress update for this edge.
	 * 
	 * @param {String} edgeId Edge ID
	 */
	deleteTelephonyProvidersEdgeSoftwareupdate(edgeId) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling deleteTelephonyProvidersEdgeSoftwareupdate';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/softwareupdate', 
			'DELETE', 
			{ 'edgeId': edgeId }, 
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
	 * Delete a certificate authority.
	 * 
	 * @param {String} certificateId Certificate ID
	 */
	deleteTelephonyProvidersEdgesCertificateauthority(certificateId) { 
		// verify the required parameter 'certificateId' is set
		if (certificateId === undefined || certificateId === null) {
			throw 'Missing the required parameter "certificateId" when calling deleteTelephonyProvidersEdgesCertificateauthority';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/certificateauthorities/{certificateId}', 
			'DELETE', 
			{ 'certificateId': certificateId }, 
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
	 * Delete a DID Pool by ID.
	 * 
	 * @param {String} didPoolId DID pool ID
	 */
	deleteTelephonyProvidersEdgesDidpool(didPoolId) { 
		// verify the required parameter 'didPoolId' is set
		if (didPoolId === undefined || didPoolId === null) {
			throw 'Missing the required parameter "didPoolId" when calling deleteTelephonyProvidersEdgesDidpool';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/didpools/{didPoolId}', 
			'DELETE', 
			{ 'didPoolId': didPoolId }, 
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
	 * Delete an edge group.
	 * 
	 * @param {String} edgeGroupId Edge group ID
	 */
	deleteTelephonyProvidersEdgesEdgegroup(edgeGroupId) { 
		// verify the required parameter 'edgeGroupId' is set
		if (edgeGroupId === undefined || edgeGroupId === null) {
			throw 'Missing the required parameter "edgeGroupId" when calling deleteTelephonyProvidersEdgesEdgegroup';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}', 
			'DELETE', 
			{ 'edgeGroupId': edgeGroupId }, 
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
	 * Delete an extension pool by ID
	 * 
	 * @param {String} extensionPoolId Extension pool ID
	 */
	deleteTelephonyProvidersEdgesExtensionpool(extensionPoolId) { 
		// verify the required parameter 'extensionPoolId' is set
		if (extensionPoolId === undefined || extensionPoolId === null) {
			throw 'Missing the required parameter "extensionPoolId" when calling deleteTelephonyProvidersEdgesExtensionpool';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}', 
			'DELETE', 
			{ 'extensionPoolId': extensionPoolId }, 
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
	 * Delete Outbound Route
	 * This route is deprecated, use /telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId} instead.
	 * @param {String} outboundRouteId Outbound route ID
	 */
	deleteTelephonyProvidersEdgesOutboundroute(outboundRouteId) { 
		// verify the required parameter 'outboundRouteId' is set
		if (outboundRouteId === undefined || outboundRouteId === null) {
			throw 'Missing the required parameter "outboundRouteId" when calling deleteTelephonyProvidersEdgesOutboundroute';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}', 
			'DELETE', 
			{ 'outboundRouteId': outboundRouteId }, 
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
	 * Delete a Phone by ID
	 * 
	 * @param {String} phoneId Phone ID
	 */
	deleteTelephonyProvidersEdgesPhone(phoneId) { 
		// verify the required parameter 'phoneId' is set
		if (phoneId === undefined || phoneId === null) {
			throw 'Missing the required parameter "phoneId" when calling deleteTelephonyProvidersEdgesPhone';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/phones/{phoneId}', 
			'DELETE', 
			{ 'phoneId': phoneId }, 
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
	 * Delete a Phone Base Settings by ID
	 * 
	 * @param {String} phoneBaseId Phone base ID
	 */
	deleteTelephonyProvidersEdgesPhonebasesetting(phoneBaseId) { 
		// verify the required parameter 'phoneBaseId' is set
		if (phoneBaseId === undefined || phoneBaseId === null) {
			throw 'Missing the required parameter "phoneBaseId" when calling deleteTelephonyProvidersEdgesPhonebasesetting';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}', 
			'DELETE', 
			{ 'phoneBaseId': phoneBaseId }, 
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
	 * Delete a Site by ID
	 * 
	 * @param {String} siteId Site ID
	 */
	deleteTelephonyProvidersEdgesSite(siteId) { 
		// verify the required parameter 'siteId' is set
		if (siteId === undefined || siteId === null) {
			throw 'Missing the required parameter "siteId" when calling deleteTelephonyProvidersEdgesSite';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/sites/{siteId}', 
			'DELETE', 
			{ 'siteId': siteId }, 
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
	 * Delete Outbound Route
	 * 
	 * @param {String} siteId Site ID
	 * @param {String} outboundRouteId Outbound route ID
	 */
	deleteTelephonyProvidersEdgesSiteOutboundroute(siteId, outboundRouteId) { 
		// verify the required parameter 'siteId' is set
		if (siteId === undefined || siteId === null) {
			throw 'Missing the required parameter "siteId" when calling deleteTelephonyProvidersEdgesSiteOutboundroute';
		}
		// verify the required parameter 'outboundRouteId' is set
		if (outboundRouteId === undefined || outboundRouteId === null) {
			throw 'Missing the required parameter "outboundRouteId" when calling deleteTelephonyProvidersEdgesSiteOutboundroute';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}', 
			'DELETE', 
			{ 'siteId': siteId,'outboundRouteId': outboundRouteId }, 
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
	 * Delete a Trunk Base Settings object by ID
	 * 
	 * @param {String} trunkBaseSettingsId Trunk Base ID
	 */
	deleteTelephonyProvidersEdgesTrunkbasesetting(trunkBaseSettingsId) { 
		// verify the required parameter 'trunkBaseSettingsId' is set
		if (trunkBaseSettingsId === undefined || trunkBaseSettingsId === null) {
			throw 'Missing the required parameter "trunkBaseSettingsId" when calling deleteTelephonyProvidersEdgesTrunkbasesetting';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}', 
			'DELETE', 
			{ 'trunkBaseSettingsId': trunkBaseSettingsId }, 
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
	 * Lists available schema categories (Deprecated)
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getConfigurationSchemasEdgesVnext(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/configuration/schemas/edges/vnext', 
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
	 * List schemas of a specific category (Deprecated)
	 * 
	 * @param {String} schemaCategory Schema category
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getConfigurationSchemasEdgesVnextSchemaCategory(schemaCategory, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaCategory' is set
		if (schemaCategory === undefined || schemaCategory === null) {
			throw 'Missing the required parameter "schemaCategory" when calling getConfigurationSchemasEdgesVnextSchemaCategory';
		}

		return this.apiClient.callApi(
			'/api/v2/configuration/schemas/edges/vnext/{schemaCategory}', 
			'GET', 
			{ 'schemaCategory': schemaCategory }, 
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
	 * List schemas of a specific category (Deprecated)
	 * 
	 * @param {String} schemaCategory Schema category
	 * @param {String} schemaType Schema type
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getConfigurationSchemasEdgesVnextSchemaCategorySchemaType(schemaCategory, schemaType, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaCategory' is set
		if (schemaCategory === undefined || schemaCategory === null) {
			throw 'Missing the required parameter "schemaCategory" when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaType';
		}
		// verify the required parameter 'schemaType' is set
		if (schemaType === undefined || schemaType === null) {
			throw 'Missing the required parameter "schemaType" when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaType';
		}

		return this.apiClient.callApi(
			'/api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}', 
			'GET', 
			{ 'schemaCategory': schemaCategory,'schemaType': schemaType }, 
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
	 * Get a json schema (Deprecated)
	 * 
	 * @param {String} schemaCategory Schema category
	 * @param {String} schemaType Schema type
	 * @param {String} schemaId Schema ID
	 */
	getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaId(schemaCategory, schemaType, schemaId) { 
		// verify the required parameter 'schemaCategory' is set
		if (schemaCategory === undefined || schemaCategory === null) {
			throw 'Missing the required parameter "schemaCategory" when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaId';
		}
		// verify the required parameter 'schemaType' is set
		if (schemaType === undefined || schemaType === null) {
			throw 'Missing the required parameter "schemaType" when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaId';
		}
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null) {
			throw 'Missing the required parameter "schemaId" when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaId';
		}

		return this.apiClient.callApi(
			'/api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}', 
			'GET', 
			{ 'schemaCategory': schemaCategory,'schemaType': schemaType,'schemaId': schemaId }, 
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
	 * Get metadata for a schema (Deprecated)
	 * 
	 * @param {String} schemaCategory Schema category
	 * @param {String} schemaType Schema type
	 * @param {String} schemaId Schema ID
	 * @param {String} extensionType extension
	 * @param {String} metadataId Metadata ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.type Type
	 */
	getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId(schemaCategory, schemaType, schemaId, extensionType, metadataId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaCategory' is set
		if (schemaCategory === undefined || schemaCategory === null) {
			throw 'Missing the required parameter "schemaCategory" when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId';
		}
		// verify the required parameter 'schemaType' is set
		if (schemaType === undefined || schemaType === null) {
			throw 'Missing the required parameter "schemaType" when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId';
		}
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null) {
			throw 'Missing the required parameter "schemaId" when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId';
		}
		// verify the required parameter 'extensionType' is set
		if (extensionType === undefined || extensionType === null) {
			throw 'Missing the required parameter "extensionType" when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId';
		}
		// verify the required parameter 'metadataId' is set
		if (metadataId === undefined || metadataId === null) {
			throw 'Missing the required parameter "metadataId" when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId';
		}

		return this.apiClient.callApi(
			'/api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}/{extensionType}/{metadataId}', 
			'GET', 
			{ 'schemaCategory': schemaCategory,'schemaType': schemaType,'schemaId': schemaId,'extensionType': extensionType,'metadataId': metadataId }, 
			{ 'type': opts['type'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get edge.
	 * 
	 * @param {String} edgeId Edge ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Fields to expand in the response, comma-separated
	 */
	getTelephonyProvidersEdge(edgeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling getTelephonyProvidersEdge';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}', 
			'GET', 
			{ 'edgeId': edgeId }, 
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get networking-related information from an Edge for a target IP or host.
	 * 
	 * @param {String} edgeId Edge Id
	 */
	getTelephonyProvidersEdgeDiagnosticNslookup(edgeId) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling getTelephonyProvidersEdgeDiagnosticNslookup';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/diagnostic/nslookup', 
			'GET', 
			{ 'edgeId': edgeId }, 
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
	 * Get networking-related information from an Edge for a target IP or host.
	 * 
	 * @param {String} edgeId Edge Id
	 */
	getTelephonyProvidersEdgeDiagnosticPing(edgeId) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling getTelephonyProvidersEdgeDiagnosticPing';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/diagnostic/ping', 
			'GET', 
			{ 'edgeId': edgeId }, 
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
	 * Get networking-related information from an Edge for a target IP or host.
	 * 
	 * @param {String} edgeId Edge Id
	 */
	getTelephonyProvidersEdgeDiagnosticRoute(edgeId) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling getTelephonyProvidersEdgeDiagnosticRoute';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/diagnostic/route', 
			'GET', 
			{ 'edgeId': edgeId }, 
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
	 * Get networking-related information from an Edge for a target IP or host.
	 * 
	 * @param {String} edgeId Edge Id
	 */
	getTelephonyProvidersEdgeDiagnosticTracepath(edgeId) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling getTelephonyProvidersEdgeDiagnosticTracepath';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/diagnostic/tracepath', 
			'GET', 
			{ 'edgeId': edgeId }, 
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
	 * Get line
	 * 
	 * @param {String} edgeId Edge ID
	 * @param {String} lineId Line ID
	 */
	getTelephonyProvidersEdgeLine(edgeId, lineId) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling getTelephonyProvidersEdgeLine';
		}
		// verify the required parameter 'lineId' is set
		if (lineId === undefined || lineId === null) {
			throw 'Missing the required parameter "lineId" when calling getTelephonyProvidersEdgeLine';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}', 
			'GET', 
			{ 'edgeId': edgeId,'lineId': lineId }, 
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
	 * Get the list of lines.
	 * 
	 * @param {String} edgeId Edge ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getTelephonyProvidersEdgeLines(edgeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling getTelephonyProvidersEdgeLines';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/lines', 
			'GET', 
			{ 'edgeId': edgeId }, 
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
	 * Get an edge logical interface
	 * 
	 * @param {String} edgeId Edge ID
	 * @param {String} interfaceId Interface ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Field to expand in the response
	 */
	getTelephonyProvidersEdgeLogicalinterface(edgeId, interfaceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling getTelephonyProvidersEdgeLogicalinterface';
		}
		// verify the required parameter 'interfaceId' is set
		if (interfaceId === undefined || interfaceId === null) {
			throw 'Missing the required parameter "interfaceId" when calling getTelephonyProvidersEdgeLogicalinterface';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}', 
			'GET', 
			{ 'edgeId': edgeId,'interfaceId': interfaceId }, 
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get edge logical interfaces.
	 * Retrieve a list of all configured logical interfaces from a specific edge.
	 * @param {String} edgeId Edge ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Field to expand in the response
	 */
	getTelephonyProvidersEdgeLogicalinterfaces(edgeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling getTelephonyProvidersEdgeLogicalinterfaces';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces', 
			'GET', 
			{ 'edgeId': edgeId }, 
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get an Edge logs job.
	 * 
	 * @param {String} edgeId Edge ID
	 * @param {String} jobId Job ID
	 */
	getTelephonyProvidersEdgeLogsJob(edgeId, jobId) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling getTelephonyProvidersEdgeLogsJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
			throw 'Missing the required parameter "jobId" when calling getTelephonyProvidersEdgeLogsJob';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}', 
			'GET', 
			{ 'edgeId': edgeId,'jobId': jobId }, 
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
	 * Get the edge metrics.
	 * 
	 * @param {String} edgeId Edge Id
	 */
	getTelephonyProvidersEdgeMetrics(edgeId) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling getTelephonyProvidersEdgeMetrics';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/metrics', 
			'GET', 
			{ 'edgeId': edgeId }, 
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
	 * Get edge physical interface.
	 * Retrieve a physical interface from a specific edge.
	 * @param {String} edgeId Edge ID
	 * @param {String} interfaceId Interface ID
	 */
	getTelephonyProvidersEdgePhysicalinterface(edgeId, interfaceId) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling getTelephonyProvidersEdgePhysicalinterface';
		}
		// verify the required parameter 'interfaceId' is set
		if (interfaceId === undefined || interfaceId === null) {
			throw 'Missing the required parameter "interfaceId" when calling getTelephonyProvidersEdgePhysicalinterface';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces/{interfaceId}', 
			'GET', 
			{ 'edgeId': edgeId,'interfaceId': interfaceId }, 
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
	 * Retrieve a list of all configured physical interfaces from a specific edge.
	 * 
	 * @param {String} edgeId Edge ID
	 */
	getTelephonyProvidersEdgePhysicalinterfaces(edgeId) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling getTelephonyProvidersEdgePhysicalinterfaces';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces', 
			'GET', 
			{ 'edgeId': edgeId }, 
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
	 * Get the setup package for a locally deployed edge device. This is needed to complete the setup process for the virtual edge.
	 * 
	 * @param {String} edgeId Edge ID
	 */
	getTelephonyProvidersEdgeSetuppackage(edgeId) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling getTelephonyProvidersEdgeSetuppackage';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/setuppackage', 
			'GET', 
			{ 'edgeId': edgeId }, 
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
	 * Gets software update status information about any edge.
	 * 
	 * @param {String} edgeId Edge ID
	 */
	getTelephonyProvidersEdgeSoftwareupdate(edgeId) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling getTelephonyProvidersEdgeSoftwareupdate';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/softwareupdate', 
			'GET', 
			{ 'edgeId': edgeId }, 
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
	 * Gets all the available software versions for this edge.
	 * 
	 * @param {String} edgeId Edge ID
	 */
	getTelephonyProvidersEdgeSoftwareversions(edgeId) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling getTelephonyProvidersEdgeSoftwareversions';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/softwareversions', 
			'GET', 
			{ 'edgeId': edgeId }, 
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
	 * Get the list of available trunks for the given Edge.
	 * Trunks are created by assigning trunk base settings to an Edge or Edge Group.
	 * @param {String} edgeId Edge ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Value by which to sort (default to name)
	 * @param {String} opts.sortOrder Sort order (default to ASC)
	 * @param {String} opts.trunkBaseId Filter by Trunk Base Ids
	 * @param {Object} opts.trunkType Filter by a Trunk type
	 */
	getTelephonyProvidersEdgeTrunks(edgeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling getTelephonyProvidersEdgeTrunks';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/trunks', 
			'GET', 
			{ 'edgeId': edgeId }, 
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'trunkBase.id': opts['trunkBaseId'],'trunkType': opts['trunkType'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the list of edges.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.name Name
	 * @param {String} opts.siteId Filter by site.id
	 * @param {String} opts.edgeGroupId Filter by edgeGroup.id
	 * @param {String} opts.sortBy Sort by (default to name)
	 * @param {Boolean} opts.managed Filter by managed
	 */
	getTelephonyProvidersEdges(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'site.id': opts['siteId'],'edgeGroup.id': opts['edgeGroupId'],'sortBy': opts['sortBy'],'managed': opts['managed'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the list of available languages.
	 * 
	 */
	getTelephonyProvidersEdgesAvailablelanguages() { 

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/availablelanguages', 
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
	 * Get the list of certificate authorities.
	 * 
	 */
	getTelephonyProvidersEdgesCertificateauthorities() { 

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/certificateauthorities', 
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
	 * Get a certificate authority.
	 * 
	 * @param {String} certificateId Certificate ID
	 */
	getTelephonyProvidersEdgesCertificateauthority(certificateId) { 
		// verify the required parameter 'certificateId' is set
		if (certificateId === undefined || certificateId === null) {
			throw 'Missing the required parameter "certificateId" when calling getTelephonyProvidersEdgesCertificateauthority';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/certificateauthorities/{certificateId}', 
			'GET', 
			{ 'certificateId': certificateId }, 
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
	 * Get a DID by ID.
	 * 
	 * @param {String} didId DID ID
	 */
	getTelephonyProvidersEdgesDid(didId) { 
		// verify the required parameter 'didId' is set
		if (didId === undefined || didId === null) {
			throw 'Missing the required parameter "didId" when calling getTelephonyProvidersEdgesDid';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/dids/{didId}', 
			'GET', 
			{ 'didId': didId }, 
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
	 * Get a DID Pool by ID.
	 * 
	 * @param {String} didPoolId DID pool ID
	 */
	getTelephonyProvidersEdgesDidpool(didPoolId) { 
		// verify the required parameter 'didPoolId' is set
		if (didPoolId === undefined || didPoolId === null) {
			throw 'Missing the required parameter "didPoolId" when calling getTelephonyProvidersEdgesDidpool';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/didpools/{didPoolId}', 
			'GET', 
			{ 'didPoolId': didPoolId }, 
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
	 * Get a listing of DID Pools
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.sortBy Sort by (default to number)
	 * @param {Array.<String>} opts.id Filter by a specific list of ID&#39;s
	 */
	getTelephonyProvidersEdgesDidpools(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/didpools', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a listing of unassigned and/or assigned numbers in a set of DID Pools.
	 * 
	 * @param {Object} type The type of numbers to return.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.id Filter by a specific list of DID Pools.  If this is not provided, numbers from all DID Pools will be returned.
	 * @param {String} opts.numberMatch A number to filter the results by.
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.sortOrder Sort order (default to ascending)
	 */
	getTelephonyProvidersEdgesDidpoolsDids(type, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'type' is set
		if (type === undefined || type === null) {
			throw 'Missing the required parameter "type" when calling getTelephonyProvidersEdgesDidpoolsDids';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/didpools/dids', 
			'GET', 
			{  }, 
			{ 'type': type,'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'numberMatch': opts['numberMatch'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a listing of DIDs
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.sortBy Sort by (default to number)
	 * @param {String} opts.sortOrder Sort order (default to ASC)
	 * @param {String} opts.phoneNumber Filter by phoneNumber
	 * @param {String} opts.ownerId Filter by the owner of a phone number
	 * @param {String} opts.didPoolId Filter by the DID Pool assignment
	 * @param {Array.<String>} opts.id Filter by a specific list of ID&#39;s
	 */
	getTelephonyProvidersEdgesDids(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/dids', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'phoneNumber': opts['phoneNumber'],'owner.id': opts['ownerId'],'didPool.id': opts['didPoolId'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get edge group.
	 * 
	 * @param {String} edgeGroupId Edge group ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Fields to expand in the response
	 */
	getTelephonyProvidersEdgesEdgegroup(edgeGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'edgeGroupId' is set
		if (edgeGroupId === undefined || edgeGroupId === null) {
			throw 'Missing the required parameter "edgeGroupId" when calling getTelephonyProvidersEdgesEdgegroup';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}', 
			'GET', 
			{ 'edgeGroupId': edgeGroupId }, 
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Gets the edge trunk base associated with the edge group
	 * 
	 * @param {String} edgegroupId Edge Group ID
	 * @param {String} edgetrunkbaseId Edge Trunk Base ID
	 */
	getTelephonyProvidersEdgesEdgegroupEdgetrunkbase(edgegroupId, edgetrunkbaseId) { 
		// verify the required parameter 'edgegroupId' is set
		if (edgegroupId === undefined || edgegroupId === null) {
			throw 'Missing the required parameter "edgegroupId" when calling getTelephonyProvidersEdgesEdgegroupEdgetrunkbase';
		}
		// verify the required parameter 'edgetrunkbaseId' is set
		if (edgetrunkbaseId === undefined || edgetrunkbaseId === null) {
			throw 'Missing the required parameter "edgetrunkbaseId" when calling getTelephonyProvidersEdgesEdgegroupEdgetrunkbase';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId}', 
			'GET', 
			{ 'edgegroupId': edgegroupId,'edgetrunkbaseId': edgetrunkbaseId }, 
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
	 * Get the list of edge groups.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.name Name
	 * @param {String} opts.sortBy Sort by (default to name)
	 * @param {Boolean} opts.managed Filter by managed
	 */
	getTelephonyProvidersEdgesEdgegroups(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/edgegroups', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'sortBy': opts['sortBy'],'managed': opts['managed'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the edge version report.
	 * The report will not have consistent data about the edge version(s) until all edges have been reset.
	 */
	getTelephonyProvidersEdgesEdgeversionreport() { 

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/edgeversionreport', 
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
	 * Get an extension by ID.
	 * 
	 * @param {String} extensionId Extension ID
	 */
	getTelephonyProvidersEdgesExtension(extensionId) { 
		// verify the required parameter 'extensionId' is set
		if (extensionId === undefined || extensionId === null) {
			throw 'Missing the required parameter "extensionId" when calling getTelephonyProvidersEdgesExtension';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/extensions/{extensionId}', 
			'GET', 
			{ 'extensionId': extensionId }, 
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
	 * Get an extension pool by ID
	 * 
	 * @param {String} extensionPoolId Extension pool ID
	 */
	getTelephonyProvidersEdgesExtensionpool(extensionPoolId) { 
		// verify the required parameter 'extensionPoolId' is set
		if (extensionPoolId === undefined || extensionPoolId === null) {
			throw 'Missing the required parameter "extensionPoolId" when calling getTelephonyProvidersEdgesExtensionpool';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}', 
			'GET', 
			{ 'extensionPoolId': extensionPoolId }, 
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
	 * Get a listing of extension pools
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.sortBy Sort by (default to startNumber)
	 * @param {String} opts._number Number
	 */
	getTelephonyProvidersEdgesExtensionpools(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/extensionpools', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'number': opts['_number'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a listing of extensions
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.sortBy Sort by (default to number)
	 * @param {String} opts.sortOrder Sort order (default to ASC)
	 * @param {String} opts._number Filter by number
	 */
	getTelephonyProvidersEdgesExtensions(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/extensions', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'number': opts['_number'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a Line by ID
	 * 
	 * @param {String} lineId Line ID
	 */
	getTelephonyProvidersEdgesLine(lineId) { 
		// verify the required parameter 'lineId' is set
		if (lineId === undefined || lineId === null) {
			throw 'Missing the required parameter "lineId" when calling getTelephonyProvidersEdgesLine';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/lines/{lineId}', 
			'GET', 
			{ 'lineId': lineId }, 
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
	 * Get a line base settings object by ID
	 * 
	 * @param {String} lineBaseId Line base ID
	 */
	getTelephonyProvidersEdgesLinebasesetting(lineBaseId) { 
		// verify the required parameter 'lineBaseId' is set
		if (lineBaseId === undefined || lineBaseId === null) {
			throw 'Missing the required parameter "lineBaseId" when calling getTelephonyProvidersEdgesLinebasesetting';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/linebasesettings/{lineBaseId}', 
			'GET', 
			{ 'lineBaseId': lineBaseId }, 
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
	 * Get a listing of line base settings objects
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Value by which to sort (default to name)
	 * @param {String} opts.sortOrder Sort order (default to ASC)
	 * @param {Array.<String>} opts.expand Fields to expand in the response, comma-separated
	 */
	getTelephonyProvidersEdgesLinebasesettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/linebasesettings', 
			'GET', 
			{  }, 
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a list of Lines
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.name Name
	 * @param {String} opts.sortBy Value by which to sort (default to name)
	 * @param {Array.<String>} opts.expand Fields to expand in the response, comma-separated
	 */
	getTelephonyProvidersEdgesLines(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/lines', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a Line instance template based on a Line Base Settings object. This object can then be modified and saved as a new Line instance
	 * 
	 * @param {String} lineBaseSettingsId The id of a Line Base Settings object upon which to base this Line
	 */
	getTelephonyProvidersEdgesLinesTemplate(lineBaseSettingsId) { 
		// verify the required parameter 'lineBaseSettingsId' is set
		if (lineBaseSettingsId === undefined || lineBaseSettingsId === null) {
			throw 'Missing the required parameter "lineBaseSettingsId" when calling getTelephonyProvidersEdgesLinesTemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/lines/template', 
			'GET', 
			{  }, 
			{ 'lineBaseSettingsId': lineBaseSettingsId }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get edge logical interfaces.
	 * Retrieve the configured logical interfaces for a list edges. Only 100 edges can be requested at a time.
	 * @param {String} edgeIds Comma separated list of Edge Id&#39;s
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Field to expand in the response
	 */
	getTelephonyProvidersEdgesLogicalinterfaces(edgeIds, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'edgeIds' is set
		if (edgeIds === undefined || edgeIds === null) {
			throw 'Missing the required parameter "edgeIds" when calling getTelephonyProvidersEdgesLogicalinterfaces';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/logicalinterfaces', 
			'GET', 
			{  }, 
			{ 'edgeIds': edgeIds,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the metrics for a list of edges.
	 * 
	 * @param {String} edgeIds Comma separated list of Edge Id&#39;s
	 */
	getTelephonyProvidersEdgesMetrics(edgeIds) { 
		// verify the required parameter 'edgeIds' is set
		if (edgeIds === undefined || edgeIds === null) {
			throw 'Missing the required parameter "edgeIds" when calling getTelephonyProvidersEdgesMetrics';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/metrics', 
			'GET', 
			{  }, 
			{ 'edgeIds': edgeIds }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get outbound route
	 * This route is deprecated, use /telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId} instead.
	 * @param {String} outboundRouteId Outbound route ID
	 */
	getTelephonyProvidersEdgesOutboundroute(outboundRouteId) { 
		// verify the required parameter 'outboundRouteId' is set
		if (outboundRouteId === undefined || outboundRouteId === null) {
			throw 'Missing the required parameter "outboundRouteId" when calling getTelephonyProvidersEdgesOutboundroute';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}', 
			'GET', 
			{ 'outboundRouteId': outboundRouteId }, 
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
	 * Get outbound routes
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.name Name
	 * @param {String} opts.siteId Filter by site.id
	 * @param {String} opts.externalTrunkBasesIds Filter by externalTrunkBases.ids
	 * @param {String} opts.sortBy Sort by (default to name)
	 */
	getTelephonyProvidersEdgesOutboundroutes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/outboundroutes', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'site.id': opts['siteId'],'externalTrunkBases.ids': opts['externalTrunkBasesIds'],'sortBy': opts['sortBy'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a Phone by ID
	 * 
	 * @param {String} phoneId Phone ID
	 */
	getTelephonyProvidersEdgesPhone(phoneId) { 
		// verify the required parameter 'phoneId' is set
		if (phoneId === undefined || phoneId === null) {
			throw 'Missing the required parameter "phoneId" when calling getTelephonyProvidersEdgesPhone';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/phones/{phoneId}', 
			'GET', 
			{ 'phoneId': phoneId }, 
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
	 * Get a Phone Base Settings object by ID
	 * 
	 * @param {String} phoneBaseId Phone base ID
	 */
	getTelephonyProvidersEdgesPhonebasesetting(phoneBaseId) { 
		// verify the required parameter 'phoneBaseId' is set
		if (phoneBaseId === undefined || phoneBaseId === null) {
			throw 'Missing the required parameter "phoneBaseId" when calling getTelephonyProvidersEdgesPhonebasesetting';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}', 
			'GET', 
			{ 'phoneBaseId': phoneBaseId }, 
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
	 * Get a list of Phone Base Settings objects
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.sortBy Value by which to sort (default to name)
	 * @param {String} opts.sortOrder Sort order (default to ASC)
	 * @param {Array.<String>} opts.expand Fields to expand in the response, comma-separated
	 * @param {String} opts.name Name
	 */
	getTelephonyProvidersEdgesPhonebasesettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/phonebasesettings', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'name': opts['name'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a list of available makes and models to create a new Phone Base Settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/phonebasesettings/availablemetabases', 
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
	 * Get a Phone Base Settings instance template from a given make and model. This object can then be modified and saved as a new Phone Base Settings instance
	 * 
	 * @param {String} phoneMetabaseId The id of a metabase object upon which to base this Phone Base Settings
	 */
	getTelephonyProvidersEdgesPhonebasesettingsTemplate(phoneMetabaseId) { 
		// verify the required parameter 'phoneMetabaseId' is set
		if (phoneMetabaseId === undefined || phoneMetabaseId === null) {
			throw 'Missing the required parameter "phoneMetabaseId" when calling getTelephonyProvidersEdgesPhonebasesettingsTemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/phonebasesettings/template', 
			'GET', 
			{  }, 
			{ 'phoneMetabaseId': phoneMetabaseId }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a list of Phone Instances
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object} opts.sortBy The field to sort by (default to name)
	 * @param {String} opts.sortOrder Sort order (default to ASC)
	 * @param {String} opts.siteId Filter by site.id
	 * @param {String} opts.webRtcUserId Filter by webRtcUser.id
	 * @param {String} opts.phoneBaseSettingsId Filter by phoneBaseSettings.id
	 * @param {String} opts.linesLoggedInUserId Filter by lines.loggedInUser.id
	 * @param {String} opts.linesDefaultForUserId Filter by lines.defaultForUser.id
	 * @param {String} opts.phoneHardwareId Filter by phone_hardwareId
	 * @param {String} opts.linesId Filter by lines.id
	 * @param {String} opts.linesName Filter by lines.name
	 * @param {String} opts.name Name of the Phone to filter by
	 * @param {String} opts.statusOperationalStatus The primary status to filter by
	 * @param {String} opts.secondaryStatusOperationalStatus The secondary status to filter by
	 * @param {Array.<String>} opts.expand Fields to expand in the response, comma-separated
	 * @param {Array.<String>} opts.fields Fields and properties to get, comma-separated
	 */
	getTelephonyProvidersEdgesPhones(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/phones', 
			'GET', 
			{  }, 
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'site.id': opts['siteId'],'webRtcUser.id': opts['webRtcUserId'],'phoneBaseSettings.id': opts['phoneBaseSettingsId'],'lines.loggedInUser.id': opts['linesLoggedInUserId'],'lines.defaultForUser.id': opts['linesDefaultForUserId'],'phone_hardwareId': opts['phoneHardwareId'],'lines.id': opts['linesId'],'lines.name': opts['linesName'],'name': opts['name'],'status.operationalStatus': opts['statusOperationalStatus'],'secondaryStatus.operationalStatus': opts['secondaryStatusOperationalStatus'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a Phone instance template based on a Phone Base Settings object. This object can then be modified and saved as a new Phone instance
	 * 
	 * @param {String} phoneBaseSettingsId The id of a Phone Base Settings object upon which to base this Phone
	 */
	getTelephonyProvidersEdgesPhonesTemplate(phoneBaseSettingsId) { 
		// verify the required parameter 'phoneBaseSettingsId' is set
		if (phoneBaseSettingsId === undefined || phoneBaseSettingsId === null) {
			throw 'Missing the required parameter "phoneBaseSettingsId" when calling getTelephonyProvidersEdgesPhonesTemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/phones/template', 
			'GET', 
			{  }, 
			{ 'phoneBaseSettingsId': phoneBaseSettingsId }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get physical interfaces for edges.
	 * Retrieves a list of all configured physical interfaces for a list of edges. Only 100 edges can be requested at a time.
	 * @param {String} edgeIds Comma separated list of Edge Id&#39;s
	 */
	getTelephonyProvidersEdgesPhysicalinterfaces(edgeIds) { 
		// verify the required parameter 'edgeIds' is set
		if (edgeIds === undefined || edgeIds === null) {
			throw 'Missing the required parameter "edgeIds" when calling getTelephonyProvidersEdgesPhysicalinterfaces';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/physicalinterfaces', 
			'GET', 
			{  }, 
			{ 'edgeIds': edgeIds }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a Site by ID.
	 * 
	 * @param {String} siteId Site ID
	 */
	getTelephonyProvidersEdgesSite(siteId) { 
		// verify the required parameter 'siteId' is set
		if (siteId === undefined || siteId === null) {
			throw 'Missing the required parameter "siteId" when calling getTelephonyProvidersEdgesSite';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/sites/{siteId}', 
			'GET', 
			{ 'siteId': siteId }, 
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
	 * Get a Number Plan by ID.
	 * 
	 * @param {String} siteId Site ID
	 * @param {String} numberPlanId Number Plan ID
	 */
	getTelephonyProvidersEdgesSiteNumberplan(siteId, numberPlanId) { 
		// verify the required parameter 'siteId' is set
		if (siteId === undefined || siteId === null) {
			throw 'Missing the required parameter "siteId" when calling getTelephonyProvidersEdgesSiteNumberplan';
		}
		// verify the required parameter 'numberPlanId' is set
		if (numberPlanId === undefined || numberPlanId === null) {
			throw 'Missing the required parameter "numberPlanId" when calling getTelephonyProvidersEdgesSiteNumberplan';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/sites/{siteId}/numberplans/{numberPlanId}', 
			'GET', 
			{ 'siteId': siteId,'numberPlanId': numberPlanId }, 
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
	 * Get the list of Number Plans for this Site. Only fetches the first 200 records.
	 * 
	 * @param {String} siteId Site ID
	 */
	getTelephonyProvidersEdgesSiteNumberplans(siteId) { 
		// verify the required parameter 'siteId' is set
		if (siteId === undefined || siteId === null) {
			throw 'Missing the required parameter "siteId" when calling getTelephonyProvidersEdgesSiteNumberplans';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/sites/{siteId}/numberplans', 
			'GET', 
			{ 'siteId': siteId }, 
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
	 * Get a list of Classifications for this Site
	 * 
	 * @param {String} siteId Site ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.classification Classification
	 */
	getTelephonyProvidersEdgesSiteNumberplansClassifications(siteId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'siteId' is set
		if (siteId === undefined || siteId === null) {
			throw 'Missing the required parameter "siteId" when calling getTelephonyProvidersEdgesSiteNumberplansClassifications';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/sites/{siteId}/numberplans/classifications', 
			'GET', 
			{ 'siteId': siteId }, 
			{ 'classification': opts['classification'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get an outbound route
	 * 
	 * @param {String} siteId Site ID
	 * @param {String} outboundRouteId Outbound route ID
	 */
	getTelephonyProvidersEdgesSiteOutboundroute(siteId, outboundRouteId) { 
		// verify the required parameter 'siteId' is set
		if (siteId === undefined || siteId === null) {
			throw 'Missing the required parameter "siteId" when calling getTelephonyProvidersEdgesSiteOutboundroute';
		}
		// verify the required parameter 'outboundRouteId' is set
		if (outboundRouteId === undefined || outboundRouteId === null) {
			throw 'Missing the required parameter "outboundRouteId" when calling getTelephonyProvidersEdgesSiteOutboundroute';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}', 
			'GET', 
			{ 'siteId': siteId,'outboundRouteId': outboundRouteId }, 
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
	 * Get outbound routes
	 * 
	 * @param {String} siteId Site ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.name Name
	 * @param {String} opts.externalTrunkBasesIds externalTrunkBases.ids
	 * @param {String} opts.sortBy Sort by (default to name)
	 */
	getTelephonyProvidersEdgesSiteOutboundroutes(siteId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'siteId' is set
		if (siteId === undefined || siteId === null) {
			throw 'Missing the required parameter "siteId" when calling getTelephonyProvidersEdgesSiteOutboundroutes';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes', 
			'GET', 
			{ 'siteId': siteId }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'externalTrunkBases.ids': opts['externalTrunkBasesIds'],'sortBy': opts['sortBy'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the list of Sites.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.sortBy Sort by (default to name)
	 * @param {String} opts.sortOrder Sort order (default to ASC)
	 * @param {String} opts.name Name
	 * @param {String} opts.locationId Location Id
	 * @param {Boolean} opts.managed Filter by managed
	 */
	getTelephonyProvidersEdgesSites(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/sites', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'],'location.id': opts['locationId'],'managed': opts['managed'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a list of Edge-compatible time zones
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 1000)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getTelephonyProvidersEdgesTimezones(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/timezones', 
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
	 * Get a Trunk by ID
	 * 
	 * @param {String} trunkId Trunk ID
	 */
	getTelephonyProvidersEdgesTrunk(trunkId) { 
		// verify the required parameter 'trunkId' is set
		if (trunkId === undefined || trunkId === null) {
			throw 'Missing the required parameter "trunkId" when calling getTelephonyProvidersEdgesTrunk';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/trunks/{trunkId}', 
			'GET', 
			{ 'trunkId': trunkId }, 
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
	 * Get the trunk metrics.
	 * 
	 * @param {String} trunkId Trunk Id
	 */
	getTelephonyProvidersEdgesTrunkMetrics(trunkId) { 
		// verify the required parameter 'trunkId' is set
		if (trunkId === undefined || trunkId === null) {
			throw 'Missing the required parameter "trunkId" when calling getTelephonyProvidersEdgesTrunkMetrics';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/trunks/{trunkId}/metrics', 
			'GET', 
			{ 'trunkId': trunkId }, 
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
	 * Get a Trunk Base Settings object by ID
	 * Managed properties will not be returned unless the user is assigned the internal:trunk:edit permission.
	 * @param {String} trunkBaseSettingsId Trunk Base ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.ignoreHidden Set this to true to not receive trunk properties that are meant to be hidden or for internal system usage only.
	 */
	getTelephonyProvidersEdgesTrunkbasesetting(trunkBaseSettingsId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trunkBaseSettingsId' is set
		if (trunkBaseSettingsId === undefined || trunkBaseSettingsId === null) {
			throw 'Missing the required parameter "trunkBaseSettingsId" when calling getTelephonyProvidersEdgesTrunkbasesetting';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}', 
			'GET', 
			{ 'trunkBaseSettingsId': trunkBaseSettingsId }, 
			{ 'ignoreHidden': opts['ignoreHidden'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get Trunk Base Settings listing
	 * Managed properties will not be returned unless the user is assigned the internal:trunk:edit permission.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Value by which to sort (default to name)
	 * @param {String} opts.sortOrder Sort order (default to ASC)
	 * @param {Boolean} opts.recordingEnabled Filter trunks by recording enabled
	 * @param {Boolean} opts.ignoreHidden Set this to true to not receive trunk properties that are meant to be hidden or for internal system usage only.
	 * @param {Boolean} opts.managed Filter by managed
	 * @param {Array.<String>} opts.expand Fields to expand in the response, comma-separated
	 * @param {String} opts.name Name of the TrunkBase to filter by
	 */
	getTelephonyProvidersEdgesTrunkbasesettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/trunkbasesettings', 
			'GET', 
			{  }, 
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'recordingEnabled': opts['recordingEnabled'],'ignoreHidden': opts['ignoreHidden'],'managed': opts['managed'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'name': opts['name'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a list of available makes and models to create a new Trunk Base Settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.type 
	 * @param {Number} opts.pageSize  (default to 25)
	 * @param {Number} opts.pageNumber  (default to 1)
	 */
	getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/trunkbasesettings/availablemetabases', 
			'GET', 
			{  }, 
			{ 'type': opts['type'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a Trunk Base Settings instance template from a given make and model. This object can then be modified and saved as a new Trunk Base Settings instance
	 * 
	 * @param {String} trunkMetabaseId The id of a metabase object upon which to base this Trunk Base Settings
	 */
	getTelephonyProvidersEdgesTrunkbasesettingsTemplate(trunkMetabaseId) { 
		// verify the required parameter 'trunkMetabaseId' is set
		if (trunkMetabaseId === undefined || trunkMetabaseId === null) {
			throw 'Missing the required parameter "trunkMetabaseId" when calling getTelephonyProvidersEdgesTrunkbasesettingsTemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/trunkbasesettings/template', 
			'GET', 
			{  }, 
			{ 'trunkMetabaseId': trunkMetabaseId }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the list of available trunks.
	 * Trunks are created by assigning trunk base settings to an Edge or Edge Group.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Value by which to sort (default to name)
	 * @param {String} opts.sortOrder Sort order (default to ASC)
	 * @param {String} opts.edgeId Filter by Edge Ids
	 * @param {String} opts.trunkBaseId Filter by Trunk Base Ids
	 * @param {Object} opts.trunkType Filter by a Trunk type
	 */
	getTelephonyProvidersEdgesTrunks(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/trunks', 
			'GET', 
			{  }, 
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'edge.id': opts['edgeId'],'trunkBase.id': opts['trunkBaseId'],'trunkType': opts['trunkType'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the metrics for a list of trunks.
	 * 
	 * @param {String} trunkIds Comma separated list of Trunk Id&#39;s
	 */
	getTelephonyProvidersEdgesTrunksMetrics(trunkIds) { 
		// verify the required parameter 'trunkIds' is set
		if (trunkIds === undefined || trunkIds === null) {
			throw 'Missing the required parameter "trunkIds" when calling getTelephonyProvidersEdgesTrunksMetrics';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/trunks/metrics', 
			'GET', 
			{  }, 
			{ 'trunkIds': trunkIds }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get Counts of trunks that have recording disabled or enabled
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.trunkType The type of this trunk base.
	 */
	getTelephonyProvidersEdgesTrunkswithrecording(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/trunkswithrecording', 
			'GET', 
			{  }, 
			{ 'trunkType': opts['trunkType'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Nslookup request command to collect networking-related information from an Edge for a target IP or host.
	 * 
	 * @param {String} edgeId Edge Id
	 * @param {Object} body request payload to get network diagnostic
	 */
	postTelephonyProvidersEdgeDiagnosticNslookup(edgeId, body) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling postTelephonyProvidersEdgeDiagnosticNslookup';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdgeDiagnosticNslookup';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/diagnostic/nslookup', 
			'POST', 
			{ 'edgeId': edgeId }, 
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
	 * Ping Request command to collect networking-related information from an Edge for a target IP or host.
	 * 
	 * @param {String} edgeId Edge Id
	 * @param {Object} body request payload to get network diagnostic
	 */
	postTelephonyProvidersEdgeDiagnosticPing(edgeId, body) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling postTelephonyProvidersEdgeDiagnosticPing';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdgeDiagnosticPing';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/diagnostic/ping', 
			'POST', 
			{ 'edgeId': edgeId }, 
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
	 * Route request command to collect networking-related information from an Edge for a target IP or host.
	 * 
	 * @param {String} edgeId Edge Id
	 * @param {Object} body request payload to get network diagnostic
	 */
	postTelephonyProvidersEdgeDiagnosticRoute(edgeId, body) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling postTelephonyProvidersEdgeDiagnosticRoute';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdgeDiagnosticRoute';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/diagnostic/route', 
			'POST', 
			{ 'edgeId': edgeId }, 
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
	 * Tracepath request command to collect networking-related information from an Edge for a target IP or host.
	 * 
	 * @param {String} edgeId Edge Id
	 * @param {Object} body request payload to get network diagnostic
	 */
	postTelephonyProvidersEdgeDiagnosticTracepath(edgeId, body) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling postTelephonyProvidersEdgeDiagnosticTracepath';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdgeDiagnosticTracepath';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/diagnostic/tracepath', 
			'POST', 
			{ 'edgeId': edgeId }, 
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
	 * Create an edge logical interface.
	 * Create
	 * @param {String} edgeId Edge ID
	 * @param {Object} body Logical interface
	 */
	postTelephonyProvidersEdgeLogicalinterfaces(edgeId, body) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling postTelephonyProvidersEdgeLogicalinterfaces';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdgeLogicalinterfaces';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces', 
			'POST', 
			{ 'edgeId': edgeId }, 
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
	 * Request that the specified fileIds be uploaded from the Edge.
	 * 
	 * @param {String} edgeId Edge ID
	 * @param {String} jobId Job ID
	 * @param {Object} body Log upload request
	 */
	postTelephonyProvidersEdgeLogsJobUpload(edgeId, jobId, body) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling postTelephonyProvidersEdgeLogsJobUpload';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
			throw 'Missing the required parameter "jobId" when calling postTelephonyProvidersEdgeLogsJobUpload';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdgeLogsJobUpload';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}/upload', 
			'POST', 
			{ 'edgeId': edgeId,'jobId': jobId }, 
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
	 * Create a job to upload a list of Edge logs.
	 * 
	 * @param {String} edgeId Edge ID
	 * @param {Object} body EdgeLogsJobRequest
	 */
	postTelephonyProvidersEdgeLogsJobs(edgeId, body) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling postTelephonyProvidersEdgeLogsJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdgeLogsJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/logs/jobs', 
			'POST', 
			{ 'edgeId': edgeId }, 
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
	 * Reboot an Edge
	 * 
	 * @param {String} edgeId Edge ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Parameters for the edge reboot
	 */
	postTelephonyProvidersEdgeReboot(edgeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling postTelephonyProvidersEdgeReboot';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/reboot', 
			'POST', 
			{ 'edgeId': edgeId }, 
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
	 * Starts a software update for this edge.
	 * 
	 * @param {String} edgeId Edge ID
	 * @param {Object} body Software update request
	 */
	postTelephonyProvidersEdgeSoftwareupdate(edgeId, body) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling postTelephonyProvidersEdgeSoftwareupdate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdgeSoftwareupdate';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/softwareupdate', 
			'POST', 
			{ 'edgeId': edgeId }, 
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
	 * Take an Edge in or out of service
	 * 
	 * @param {String} edgeId Edge ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Edge Service State
	 */
	postTelephonyProvidersEdgeStatuscode(edgeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling postTelephonyProvidersEdgeStatuscode';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/statuscode', 
			'POST', 
			{ 'edgeId': edgeId }, 
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
	 * Unpair an Edge
	 * 
	 * @param {String} edgeId Edge Id
	 */
	postTelephonyProvidersEdgeUnpair(edgeId) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling postTelephonyProvidersEdgeUnpair';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/unpair', 
			'POST', 
			{ 'edgeId': edgeId }, 
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
	 * Create an edge.
	 * 
	 * @param {Object} body Edge
	 */
	postTelephonyProvidersEdges(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdges';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges', 
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
	 * Validates a street address
	 * 
	 * @param {Object} body Address
	 */
	postTelephonyProvidersEdgesAddressvalidation(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdgesAddressvalidation';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/addressvalidation', 
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
	 * Create a certificate authority.
	 * 
	 * @param {Object} body CertificateAuthority
	 */
	postTelephonyProvidersEdgesCertificateauthorities(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdgesCertificateauthorities';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/certificateauthorities', 
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
	 * Create a new DID pool
	 * 
	 * @param {Object} body DID pool
	 */
	postTelephonyProvidersEdgesDidpools(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdgesDidpools';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/didpools', 
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
	 * Create an edge group.
	 * 
	 * @param {Object} body EdgeGroup
	 */
	postTelephonyProvidersEdgesEdgegroups(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdgesEdgegroups';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/edgegroups', 
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
	 * Create a new extension pool
	 * 
	 * @param {Object} body ExtensionPool
	 */
	postTelephonyProvidersEdgesExtensionpools(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdgesExtensionpools';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/extensionpools', 
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
	 * Create outbound rule
	 * This route is deprecated, use /telephony/providers/edges/sites/{siteId}/outboundroutes instead.
	 * @param {Object} body OutboundRoute
	 */
	postTelephonyProvidersEdgesOutboundroutes(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdgesOutboundroutes';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/outboundroutes', 
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
	 * Reboot a Phone
	 * 
	 * @param {String} phoneId Phone Id
	 */
	postTelephonyProvidersEdgesPhoneReboot(phoneId) { 
		// verify the required parameter 'phoneId' is set
		if (phoneId === undefined || phoneId === null) {
			throw 'Missing the required parameter "phoneId" when calling postTelephonyProvidersEdgesPhoneReboot';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/phones/{phoneId}/reboot', 
			'POST', 
			{ 'phoneId': phoneId }, 
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
	 * Create a new Phone Base Settings object
	 * 
	 * @param {Object} body Phone base settings
	 */
	postTelephonyProvidersEdgesPhonebasesettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdgesPhonebasesettings';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/phonebasesettings', 
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
	 * Create a new Phone
	 * 
	 * @param {Object} body Phone
	 */
	postTelephonyProvidersEdgesPhones(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdgesPhones';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/phones', 
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
	 * Reboot Multiple Phones
	 * 
	 * @param {Object} body Phones
	 */
	postTelephonyProvidersEdgesPhonesReboot(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdgesPhonesReboot';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/phones/reboot', 
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
	 * Create outbound route
	 * 
	 * @param {String} siteId Site ID
	 * @param {Object} body OutboundRoute
	 */
	postTelephonyProvidersEdgesSiteOutboundroutes(siteId, body) { 
		// verify the required parameter 'siteId' is set
		if (siteId === undefined || siteId === null) {
			throw 'Missing the required parameter "siteId" when calling postTelephonyProvidersEdgesSiteOutboundroutes';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdgesSiteOutboundroutes';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes', 
			'POST', 
			{ 'siteId': siteId }, 
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
	 * Triggers the rebalance operation.
	 * 
	 * @param {String} siteId Site ID
	 */
	postTelephonyProvidersEdgesSiteRebalance(siteId) { 
		// verify the required parameter 'siteId' is set
		if (siteId === undefined || siteId === null) {
			throw 'Missing the required parameter "siteId" when calling postTelephonyProvidersEdgesSiteRebalance';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/sites/{siteId}/rebalance', 
			'POST', 
			{ 'siteId': siteId }, 
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
	 * Create a Site.
	 * 
	 * @param {Object} body Site
	 */
	postTelephonyProvidersEdgesSites(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdgesSites';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/sites', 
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
	 * Create a Trunk Base Settings object
	 * 
	 * @param {Object} body Trunk base settings
	 */
	postTelephonyProvidersEdgesTrunkbasesettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdgesTrunkbasesettings';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/trunkbasesettings', 
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
	 * Update a edge.
	 * 
	 * @param {String} edgeId Edge ID
	 * @param {Object} body Edge
	 */
	putTelephonyProvidersEdge(edgeId, body) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling putTelephonyProvidersEdge';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putTelephonyProvidersEdge';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}', 
			'PUT', 
			{ 'edgeId': edgeId }, 
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
	 * Update a line.
	 * 
	 * @param {String} edgeId Edge ID
	 * @param {String} lineId Line ID
	 * @param {Object} body Line
	 */
	putTelephonyProvidersEdgeLine(edgeId, lineId, body) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling putTelephonyProvidersEdgeLine';
		}
		// verify the required parameter 'lineId' is set
		if (lineId === undefined || lineId === null) {
			throw 'Missing the required parameter "lineId" when calling putTelephonyProvidersEdgeLine';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putTelephonyProvidersEdgeLine';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}', 
			'PUT', 
			{ 'edgeId': edgeId,'lineId': lineId }, 
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
	 * Update an edge logical interface.
	 * 
	 * @param {String} edgeId Edge ID
	 * @param {String} interfaceId Interface ID
	 * @param {Object} body Logical interface
	 */
	putTelephonyProvidersEdgeLogicalinterface(edgeId, interfaceId, body) { 
		// verify the required parameter 'edgeId' is set
		if (edgeId === undefined || edgeId === null) {
			throw 'Missing the required parameter "edgeId" when calling putTelephonyProvidersEdgeLogicalinterface';
		}
		// verify the required parameter 'interfaceId' is set
		if (interfaceId === undefined || interfaceId === null) {
			throw 'Missing the required parameter "interfaceId" when calling putTelephonyProvidersEdgeLogicalinterface';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putTelephonyProvidersEdgeLogicalinterface';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}', 
			'PUT', 
			{ 'edgeId': edgeId,'interfaceId': interfaceId }, 
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
	 * Update a certificate authority.
	 * 
	 * @param {String} certificateId Certificate ID
	 * @param {Object} body Certificate authority
	 */
	putTelephonyProvidersEdgesCertificateauthority(certificateId, body) { 
		// verify the required parameter 'certificateId' is set
		if (certificateId === undefined || certificateId === null) {
			throw 'Missing the required parameter "certificateId" when calling putTelephonyProvidersEdgesCertificateauthority';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putTelephonyProvidersEdgesCertificateauthority';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/certificateauthorities/{certificateId}', 
			'PUT', 
			{ 'certificateId': certificateId }, 
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
	 * Update a DID by ID.
	 * 
	 * @param {String} didId DID ID
	 * @param {Object} body DID
	 */
	putTelephonyProvidersEdgesDid(didId, body) { 
		// verify the required parameter 'didId' is set
		if (didId === undefined || didId === null) {
			throw 'Missing the required parameter "didId" when calling putTelephonyProvidersEdgesDid';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putTelephonyProvidersEdgesDid';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/dids/{didId}', 
			'PUT', 
			{ 'didId': didId }, 
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
	 * Update a DID Pool by ID.
	 * 
	 * @param {String} didPoolId DID pool ID
	 * @param {Object} body DID pool
	 */
	putTelephonyProvidersEdgesDidpool(didPoolId, body) { 
		// verify the required parameter 'didPoolId' is set
		if (didPoolId === undefined || didPoolId === null) {
			throw 'Missing the required parameter "didPoolId" when calling putTelephonyProvidersEdgesDidpool';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putTelephonyProvidersEdgesDidpool';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/didpools/{didPoolId}', 
			'PUT', 
			{ 'didPoolId': didPoolId }, 
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
	 * Update an edge group.
	 * 
	 * @param {String} edgeGroupId Edge group ID
	 * @param {Object} body EdgeGroup
	 */
	putTelephonyProvidersEdgesEdgegroup(edgeGroupId, body) { 
		// verify the required parameter 'edgeGroupId' is set
		if (edgeGroupId === undefined || edgeGroupId === null) {
			throw 'Missing the required parameter "edgeGroupId" when calling putTelephonyProvidersEdgesEdgegroup';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putTelephonyProvidersEdgesEdgegroup';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}', 
			'PUT', 
			{ 'edgeGroupId': edgeGroupId }, 
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
	 * Update the edge trunk base associated with the edge group
	 * 
	 * @param {String} edgegroupId Edge Group ID
	 * @param {String} edgetrunkbaseId Edge Trunk Base ID
	 * @param {Object} body EdgeTrunkBase
	 */
	putTelephonyProvidersEdgesEdgegroupEdgetrunkbase(edgegroupId, edgetrunkbaseId, body) { 
		// verify the required parameter 'edgegroupId' is set
		if (edgegroupId === undefined || edgegroupId === null) {
			throw 'Missing the required parameter "edgegroupId" when calling putTelephonyProvidersEdgesEdgegroupEdgetrunkbase';
		}
		// verify the required parameter 'edgetrunkbaseId' is set
		if (edgetrunkbaseId === undefined || edgetrunkbaseId === null) {
			throw 'Missing the required parameter "edgetrunkbaseId" when calling putTelephonyProvidersEdgesEdgegroupEdgetrunkbase';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putTelephonyProvidersEdgesEdgegroupEdgetrunkbase';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId}', 
			'PUT', 
			{ 'edgegroupId': edgegroupId,'edgetrunkbaseId': edgetrunkbaseId }, 
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
	 * Update an extension by ID.
	 * 
	 * @param {String} extensionId Extension ID
	 * @param {Object} body Extension
	 */
	putTelephonyProvidersEdgesExtension(extensionId, body) { 
		// verify the required parameter 'extensionId' is set
		if (extensionId === undefined || extensionId === null) {
			throw 'Missing the required parameter "extensionId" when calling putTelephonyProvidersEdgesExtension';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putTelephonyProvidersEdgesExtension';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/extensions/{extensionId}', 
			'PUT', 
			{ 'extensionId': extensionId }, 
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
	 * Update an extension pool by ID
	 * 
	 * @param {String} extensionPoolId Extension pool ID
	 * @param {Object} body ExtensionPool
	 */
	putTelephonyProvidersEdgesExtensionpool(extensionPoolId, body) { 
		// verify the required parameter 'extensionPoolId' is set
		if (extensionPoolId === undefined || extensionPoolId === null) {
			throw 'Missing the required parameter "extensionPoolId" when calling putTelephonyProvidersEdgesExtensionpool';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putTelephonyProvidersEdgesExtensionpool';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}', 
			'PUT', 
			{ 'extensionPoolId': extensionPoolId }, 
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
	 * Update outbound route
	 * This route is deprecated, use /telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId} instead.
	 * @param {String} outboundRouteId Outbound route ID
	 * @param {Object} body OutboundRoute
	 */
	putTelephonyProvidersEdgesOutboundroute(outboundRouteId, body) { 
		// verify the required parameter 'outboundRouteId' is set
		if (outboundRouteId === undefined || outboundRouteId === null) {
			throw 'Missing the required parameter "outboundRouteId" when calling putTelephonyProvidersEdgesOutboundroute';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putTelephonyProvidersEdgesOutboundroute';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}', 
			'PUT', 
			{ 'outboundRouteId': outboundRouteId }, 
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
	 * Update a Phone by ID
	 * 
	 * @param {String} phoneId Phone ID
	 * @param {Object} body Phone
	 */
	putTelephonyProvidersEdgesPhone(phoneId, body) { 
		// verify the required parameter 'phoneId' is set
		if (phoneId === undefined || phoneId === null) {
			throw 'Missing the required parameter "phoneId" when calling putTelephonyProvidersEdgesPhone';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putTelephonyProvidersEdgesPhone';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/phones/{phoneId}', 
			'PUT', 
			{ 'phoneId': phoneId }, 
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
	 * Update a Phone Base Settings by ID
	 * 
	 * @param {String} phoneBaseId Phone base ID
	 * @param {Object} body Phone base settings
	 */
	putTelephonyProvidersEdgesPhonebasesetting(phoneBaseId, body) { 
		// verify the required parameter 'phoneBaseId' is set
		if (phoneBaseId === undefined || phoneBaseId === null) {
			throw 'Missing the required parameter "phoneBaseId" when calling putTelephonyProvidersEdgesPhonebasesetting';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putTelephonyProvidersEdgesPhonebasesetting';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}', 
			'PUT', 
			{ 'phoneBaseId': phoneBaseId }, 
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
	 * Update a Site by ID.
	 * 
	 * @param {String} siteId Site ID
	 * @param {Object} body Site
	 */
	putTelephonyProvidersEdgesSite(siteId, body) { 
		// verify the required parameter 'siteId' is set
		if (siteId === undefined || siteId === null) {
			throw 'Missing the required parameter "siteId" when calling putTelephonyProvidersEdgesSite';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putTelephonyProvidersEdgesSite';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/sites/{siteId}', 
			'PUT', 
			{ 'siteId': siteId }, 
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
	 * Update the list of Number Plans. A user can update maximum 200 number plans at a time.
	 * 
	 * @param {String} siteId Site ID
	 * @param {Array.<Object>} body List of number plans
	 */
	putTelephonyProvidersEdgesSiteNumberplans(siteId, body) { 
		// verify the required parameter 'siteId' is set
		if (siteId === undefined || siteId === null) {
			throw 'Missing the required parameter "siteId" when calling putTelephonyProvidersEdgesSiteNumberplans';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putTelephonyProvidersEdgesSiteNumberplans';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/sites/{siteId}/numberplans', 
			'PUT', 
			{ 'siteId': siteId }, 
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
	 * Update outbound route
	 * 
	 * @param {String} siteId Site ID
	 * @param {String} outboundRouteId Outbound route ID
	 * @param {Object} body OutboundRoute
	 */
	putTelephonyProvidersEdgesSiteOutboundroute(siteId, outboundRouteId, body) { 
		// verify the required parameter 'siteId' is set
		if (siteId === undefined || siteId === null) {
			throw 'Missing the required parameter "siteId" when calling putTelephonyProvidersEdgesSiteOutboundroute';
		}
		// verify the required parameter 'outboundRouteId' is set
		if (outboundRouteId === undefined || outboundRouteId === null) {
			throw 'Missing the required parameter "outboundRouteId" when calling putTelephonyProvidersEdgesSiteOutboundroute';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putTelephonyProvidersEdgesSiteOutboundroute';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}', 
			'PUT', 
			{ 'siteId': siteId,'outboundRouteId': outboundRouteId }, 
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
	 * Update a Trunk Base Settings object by ID
	 * 
	 * @param {String} trunkBaseSettingsId Trunk Base ID
	 * @param {Object} body Trunk base settings
	 */
	putTelephonyProvidersEdgesTrunkbasesetting(trunkBaseSettingsId, body) { 
		// verify the required parameter 'trunkBaseSettingsId' is set
		if (trunkBaseSettingsId === undefined || trunkBaseSettingsId === null) {
			throw 'Missing the required parameter "trunkBaseSettingsId" when calling putTelephonyProvidersEdgesTrunkbasesetting';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putTelephonyProvidersEdgesTrunkbasesetting';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}', 
			'PUT', 
			{ 'trunkBaseSettingsId': trunkBaseSettingsId }, 
			{  }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

}


export default TelephonyProvidersEdgeApi;