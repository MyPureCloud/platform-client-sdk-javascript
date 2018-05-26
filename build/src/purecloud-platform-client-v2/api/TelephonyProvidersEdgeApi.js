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
    root.platformClient.TelephonyProvidersEdgeApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * TelephonyProvidersEdge service.
   * @module purecloud-platform-client-v2/api/TelephonyProvidersEdgeApi
   * @version 27.0.0
   */

  /**
   * Constructs a new TelephonyProvidersEdgeApi. 
   * @alias module:purecloud-platform-client-v2/api/TelephonyProvidersEdgeApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a edge.
     * 
     * @param {String} edgeId Edge ID
     */
    this.deleteTelephonyProvidersEdge = function(edgeId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling deleteTelephonyProvidersEdge";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}', 
        'DELETE', 
        { 'edgeId': edgeId }, 
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
     * Delete an edge logical interface
     * 
     * @param {String} edgeId Edge ID
     * @param {String} interfaceId Interface ID
     */
    this.deleteTelephonyProvidersEdgeLogicalinterface = function(edgeId, interfaceId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling deleteTelephonyProvidersEdgeLogicalinterface";
      }

      // verify the required parameter 'interfaceId' is set
      if (interfaceId === undefined || interfaceId === null) {
        throw "Missing the required parameter 'interfaceId' when calling deleteTelephonyProvidersEdgeLogicalinterface";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}', 
        'DELETE', 
        { 'edgeId': edgeId,'interfaceId': interfaceId }, 
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
     * Cancels any in-progress update for this edge.
     * 
     * @param {String} edgeId Edge ID
     */
    this.deleteTelephonyProvidersEdgeSoftwareupdate = function(edgeId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling deleteTelephonyProvidersEdgeSoftwareupdate";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/softwareupdate', 
        'DELETE', 
        { 'edgeId': edgeId }, 
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
     * Delete a certificate authority.
     * 
     * @param {String} certificateId Certificate ID
     */
    this.deleteTelephonyProvidersEdgesCertificateauthority = function(certificateId) { 

      // verify the required parameter 'certificateId' is set
      if (certificateId === undefined || certificateId === null) {
        throw "Missing the required parameter 'certificateId' when calling deleteTelephonyProvidersEdgesCertificateauthority";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/certificateauthorities/{certificateId}', 
        'DELETE', 
        { 'certificateId': certificateId }, 
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
     * Delete a DID Pool by ID.
     * 
     * @param {String} didPoolId DID pool ID
     */
    this.deleteTelephonyProvidersEdgesDidpool = function(didPoolId) { 

      // verify the required parameter 'didPoolId' is set
      if (didPoolId === undefined || didPoolId === null) {
        throw "Missing the required parameter 'didPoolId' when calling deleteTelephonyProvidersEdgesDidpool";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/didpools/{didPoolId}', 
        'DELETE', 
        { 'didPoolId': didPoolId }, 
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
     * Delete an edge group.
     * 
     * @param {String} edgeGroupId Edge group ID
     */
    this.deleteTelephonyProvidersEdgesEdgegroup = function(edgeGroupId) { 

      // verify the required parameter 'edgeGroupId' is set
      if (edgeGroupId === undefined || edgeGroupId === null) {
        throw "Missing the required parameter 'edgeGroupId' when calling deleteTelephonyProvidersEdgesEdgegroup";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}', 
        'DELETE', 
        { 'edgeGroupId': edgeGroupId }, 
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
     * Delete endpoint
     * 
     * @param {String} endpointId Endpoint ID
     */
    this.deleteTelephonyProvidersEdgesEndpoint = function(endpointId) { 

      // verify the required parameter 'endpointId' is set
      if (endpointId === undefined || endpointId === null) {
        throw "Missing the required parameter 'endpointId' when calling deleteTelephonyProvidersEdgesEndpoint";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/endpoints/{endpointId}', 
        'DELETE', 
        { 'endpointId': endpointId }, 
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
     * Delete an extension pool by ID
     * 
     * @param {String} extensionPoolId Extension pool ID
     */
    this.deleteTelephonyProvidersEdgesExtensionpool = function(extensionPoolId) { 

      // verify the required parameter 'extensionPoolId' is set
      if (extensionPoolId === undefined || extensionPoolId === null) {
        throw "Missing the required parameter 'extensionPoolId' when calling deleteTelephonyProvidersEdgesExtensionpool";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}', 
        'DELETE', 
        { 'extensionPoolId': extensionPoolId }, 
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
     * Delete Outbound Route
     * 
     * @param {String} outboundRouteId Outbound route ID
     */
    this.deleteTelephonyProvidersEdgesOutboundroute = function(outboundRouteId) { 

      // verify the required parameter 'outboundRouteId' is set
      if (outboundRouteId === undefined || outboundRouteId === null) {
        throw "Missing the required parameter 'outboundRouteId' when calling deleteTelephonyProvidersEdgesOutboundroute";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}', 
        'DELETE', 
        { 'outboundRouteId': outboundRouteId }, 
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
     * Delete a Phone by ID
     * 
     * @param {String} phoneId Phone ID
     */
    this.deleteTelephonyProvidersEdgesPhone = function(phoneId) { 

      // verify the required parameter 'phoneId' is set
      if (phoneId === undefined || phoneId === null) {
        throw "Missing the required parameter 'phoneId' when calling deleteTelephonyProvidersEdgesPhone";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phones/{phoneId}', 
        'DELETE', 
        { 'phoneId': phoneId }, 
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
     * Delete a Phone Base Settings by ID
     * 
     * @param {String} phoneBaseId Phone base ID
     */
    this.deleteTelephonyProvidersEdgesPhonebasesetting = function(phoneBaseId) { 

      // verify the required parameter 'phoneBaseId' is set
      if (phoneBaseId === undefined || phoneBaseId === null) {
        throw "Missing the required parameter 'phoneBaseId' when calling deleteTelephonyProvidersEdgesPhonebasesetting";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}', 
        'DELETE', 
        { 'phoneBaseId': phoneBaseId }, 
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
     * Delete a Site by ID
     * 
     * @param {String} siteId Site ID
     */
    this.deleteTelephonyProvidersEdgesSite = function(siteId) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling deleteTelephonyProvidersEdgesSite";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}', 
        'DELETE', 
        { 'siteId': siteId }, 
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
     * Delete Outbound Route
     * 
     * @param {String} siteId Site ID
     * @param {String} outboundRouteId Outbound route ID
     */
    this.deleteTelephonyProvidersEdgesSiteOutboundroute = function(siteId, outboundRouteId) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling deleteTelephonyProvidersEdgesSiteOutboundroute";
      }

      // verify the required parameter 'outboundRouteId' is set
      if (outboundRouteId === undefined || outboundRouteId === null) {
        throw "Missing the required parameter 'outboundRouteId' when calling deleteTelephonyProvidersEdgesSiteOutboundroute";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}', 
        'DELETE', 
        { 'siteId': siteId,'outboundRouteId': outboundRouteId }, 
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
     * Delete a Trunk Base Settings object by ID
     * 
     * @param {String} trunkBaseSettingsId Trunk Base ID
     */
    this.deleteTelephonyProvidersEdgesTrunkbasesetting = function(trunkBaseSettingsId) { 

      // verify the required parameter 'trunkBaseSettingsId' is set
      if (trunkBaseSettingsId === undefined || trunkBaseSettingsId === null) {
        throw "Missing the required parameter 'trunkBaseSettingsId' when calling deleteTelephonyProvidersEdgesTrunkbasesetting";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}', 
        'DELETE', 
        { 'trunkBaseSettingsId': trunkBaseSettingsId }, 
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
     * Lists available schema categories (Deprecated)
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getConfigurationSchemasEdgesVnext = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/configuration/schemas/edges/vnext', 
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
     * List schemas of a specific category (Deprecated)
     * 
     * @param {String} schemaCategory Schema category
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getConfigurationSchemasEdgesVnextSchemaCategory = function(schemaCategory, opts) { 
      opts = opts || {};

      // verify the required parameter 'schemaCategory' is set
      if (schemaCategory === undefined || schemaCategory === null) {
        throw "Missing the required parameter 'schemaCategory' when calling getConfigurationSchemasEdgesVnextSchemaCategory";
      }


      return this.apiClient.callApi(
        '/api/v2/configuration/schemas/edges/vnext/{schemaCategory}', 
        'GET', 
        { 'schemaCategory': schemaCategory }, 
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
     * List schemas of a specific category (Deprecated)
     * 
     * @param {String} schemaCategory Schema category
     * @param {String} schemaType Schema type
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getConfigurationSchemasEdgesVnextSchemaCategorySchemaType = function(schemaCategory, schemaType, opts) { 
      opts = opts || {};

      // verify the required parameter 'schemaCategory' is set
      if (schemaCategory === undefined || schemaCategory === null) {
        throw "Missing the required parameter 'schemaCategory' when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaType";
      }

      // verify the required parameter 'schemaType' is set
      if (schemaType === undefined || schemaType === null) {
        throw "Missing the required parameter 'schemaType' when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaType";
      }


      return this.apiClient.callApi(
        '/api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}', 
        'GET', 
        { 'schemaCategory': schemaCategory,'schemaType': schemaType }, 
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
     * Get a json schema (Deprecated)
     * 
     * @param {String} schemaCategory Schema category
     * @param {String} schemaType Schema type
     * @param {String} schemaId Schema ID
     */
    this.getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaId = function(schemaCategory, schemaType, schemaId) { 

      // verify the required parameter 'schemaCategory' is set
      if (schemaCategory === undefined || schemaCategory === null) {
        throw "Missing the required parameter 'schemaCategory' when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaId";
      }

      // verify the required parameter 'schemaType' is set
      if (schemaType === undefined || schemaType === null) {
        throw "Missing the required parameter 'schemaType' when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaId";
      }

      // verify the required parameter 'schemaId' is set
      if (schemaId === undefined || schemaId === null) {
        throw "Missing the required parameter 'schemaId' when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaId";
      }


      return this.apiClient.callApi(
        '/api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}', 
        'GET', 
        { 'schemaCategory': schemaCategory,'schemaType': schemaType,'schemaId': schemaId }, 
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
    this.getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId = function(schemaCategory, schemaType, schemaId, extensionType, metadataId, opts) { 
      opts = opts || {};

      // verify the required parameter 'schemaCategory' is set
      if (schemaCategory === undefined || schemaCategory === null) {
        throw "Missing the required parameter 'schemaCategory' when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId";
      }

      // verify the required parameter 'schemaType' is set
      if (schemaType === undefined || schemaType === null) {
        throw "Missing the required parameter 'schemaType' when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId";
      }

      // verify the required parameter 'schemaId' is set
      if (schemaId === undefined || schemaId === null) {
        throw "Missing the required parameter 'schemaId' when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId";
      }

      // verify the required parameter 'extensionType' is set
      if (extensionType === undefined || extensionType === null) {
        throw "Missing the required parameter 'extensionType' when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId";
      }

      // verify the required parameter 'metadataId' is set
      if (metadataId === undefined || metadataId === null) {
        throw "Missing the required parameter 'metadataId' when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId";
      }


      return this.apiClient.callApi(
        '/api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}/{extensionType}/{metadataId}', 
        'GET', 
        { 'schemaCategory': schemaCategory,'schemaType': schemaType,'schemaId': schemaId,'extensionType': extensionType,'metadataId': metadataId }, 
        { 'type': opts['type'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get edge.
     * 
     * @param {String} edgeId Edge ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Fields to expand in the response, comma-separated
     */
    this.getTelephonyProvidersEdge = function(edgeId, opts) { 
      opts = opts || {};

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdge";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}', 
        'GET', 
        { 'edgeId': edgeId }, 
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
     * Get line
     * 
     * @param {String} edgeId Edge ID
     * @param {String} lineId Line ID
     */
    this.getTelephonyProvidersEdgeLine = function(edgeId, lineId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgeLine";
      }

      // verify the required parameter 'lineId' is set
      if (lineId === undefined || lineId === null) {
        throw "Missing the required parameter 'lineId' when calling getTelephonyProvidersEdgeLine";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}', 
        'GET', 
        { 'edgeId': edgeId,'lineId': lineId }, 
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
     * Get the list of lines.
     * 
     * @param {String} edgeId Edge ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getTelephonyProvidersEdgeLines = function(edgeId, opts) { 
      opts = opts || {};

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgeLines";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/lines', 
        'GET', 
        { 'edgeId': edgeId }, 
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
     * Get an edge logical interface
     * 
     * @param {String} edgeId Edge ID
     * @param {String} interfaceId Interface ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Field to expand in the response
     */
    this.getTelephonyProvidersEdgeLogicalinterface = function(edgeId, interfaceId, opts) { 
      opts = opts || {};

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgeLogicalinterface";
      }

      // verify the required parameter 'interfaceId' is set
      if (interfaceId === undefined || interfaceId === null) {
        throw "Missing the required parameter 'interfaceId' when calling getTelephonyProvidersEdgeLogicalinterface";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}', 
        'GET', 
        { 'edgeId': edgeId,'interfaceId': interfaceId }, 
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
     * Get edge logical interfaces.
     * Retrieve a list of all configured logical interfaces from a specific edge.
     * @param {String} edgeId Edge ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Field to expand in the response
     */
    this.getTelephonyProvidersEdgeLogicalinterfaces = function(edgeId, opts) { 
      opts = opts || {};

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgeLogicalinterfaces";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces', 
        'GET', 
        { 'edgeId': edgeId }, 
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
     * Get an Edge logs job.
     * 
     * @param {String} edgeId Edge ID
     * @param {String} jobId Job ID
     */
    this.getTelephonyProvidersEdgeLogsJob = function(edgeId, jobId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgeLogsJob";
      }

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw "Missing the required parameter 'jobId' when calling getTelephonyProvidersEdgeLogsJob";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}', 
        'GET', 
        { 'edgeId': edgeId,'jobId': jobId }, 
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
     * Get the edge metrics.
     * 
     * @param {String} edgeId Edge Id
     */
    this.getTelephonyProvidersEdgeMetrics = function(edgeId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgeMetrics";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/metrics', 
        'GET', 
        { 'edgeId': edgeId }, 
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
     * Get edge physical interface.
     * Retrieve a physical interface from a specific edge.
     * @param {String} edgeId Edge ID
     * @param {String} interfaceId Interface ID
     */
    this.getTelephonyProvidersEdgePhysicalinterface = function(edgeId, interfaceId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgePhysicalinterface";
      }

      // verify the required parameter 'interfaceId' is set
      if (interfaceId === undefined || interfaceId === null) {
        throw "Missing the required parameter 'interfaceId' when calling getTelephonyProvidersEdgePhysicalinterface";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces/{interfaceId}', 
        'GET', 
        { 'edgeId': edgeId,'interfaceId': interfaceId }, 
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
     * Retrieve a list of all configured physical interfaces from a specific edge.
     * 
     * @param {String} edgeId Edge ID
     */
    this.getTelephonyProvidersEdgePhysicalinterfaces = function(edgeId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgePhysicalinterfaces";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces', 
        'GET', 
        { 'edgeId': edgeId }, 
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
     * Get the setup package for a locally deployed edge device. This is needed to complete the setup process for the virtual edge.
     * 
     * @param {String} edgeId Edge ID
     */
    this.getTelephonyProvidersEdgeSetuppackage = function(edgeId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgeSetuppackage";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/setuppackage', 
        'GET', 
        { 'edgeId': edgeId }, 
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
     * Gets software update status information about any edge.
     * 
     * @param {String} edgeId Edge ID
     */
    this.getTelephonyProvidersEdgeSoftwareupdate = function(edgeId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgeSoftwareupdate";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/softwareupdate', 
        'GET', 
        { 'edgeId': edgeId }, 
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
     * Gets all the available software versions for this edge.
     * 
     * @param {String} edgeId Edge ID
     */
    this.getTelephonyProvidersEdgeSoftwareversions = function(edgeId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgeSoftwareversions";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/softwareversions', 
        'GET', 
        { 'edgeId': edgeId }, 
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
    this.getTelephonyProvidersEdgeTrunks = function(edgeId, opts) { 
      opts = opts || {};

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgeTrunks";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/trunks', 
        'GET', 
        { 'edgeId': edgeId }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'trunkBase.id': opts['trunkBaseId'],'trunkType': opts['trunkType'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


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
    this.getTelephonyProvidersEdges = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'site.id': opts['siteId'],'edgeGroup.id': opts['edgeGroupId'],'sortBy': opts['sortBy'],'managed': opts['managed'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of available languages.
     * 
     */
    this.getTelephonyProvidersEdgesAvailablelanguages = function() { 


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/availablelanguages', 
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
     * Get the list of certificate authorities.
     * 
     */
    this.getTelephonyProvidersEdgesCertificateauthorities = function() { 


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/certificateauthorities', 
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
     * Get a certificate authority.
     * 
     * @param {String} certificateId Certificate ID
     */
    this.getTelephonyProvidersEdgesCertificateauthority = function(certificateId) { 

      // verify the required parameter 'certificateId' is set
      if (certificateId === undefined || certificateId === null) {
        throw "Missing the required parameter 'certificateId' when calling getTelephonyProvidersEdgesCertificateauthority";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/certificateauthorities/{certificateId}', 
        'GET', 
        { 'certificateId': certificateId }, 
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
     * Get a DID by ID.
     * 
     * @param {String} didId DID ID
     */
    this.getTelephonyProvidersEdgesDid = function(didId) { 

      // verify the required parameter 'didId' is set
      if (didId === undefined || didId === null) {
        throw "Missing the required parameter 'didId' when calling getTelephonyProvidersEdgesDid";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/dids/{didId}', 
        'GET', 
        { 'didId': didId }, 
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
     * Get a DID Pool by ID.
     * 
     * @param {String} didPoolId DID pool ID
     */
    this.getTelephonyProvidersEdgesDidpool = function(didPoolId) { 

      // verify the required parameter 'didPoolId' is set
      if (didPoolId === undefined || didPoolId === null) {
        throw "Missing the required parameter 'didPoolId' when calling getTelephonyProvidersEdgesDidpool";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/didpools/{didPoolId}', 
        'GET', 
        { 'didPoolId': didPoolId }, 
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
     * Get a listing of DID Pools
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Sort by (default to number)
     */
    this.getTelephonyProvidersEdgesDidpools = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/didpools', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a listing of DIDs
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Sort by (default to number)
     * @param {String} opts.sortOrder Sort order (default to ASC)
     * @param {String} opts.phoneNumber Filter by phoneNumber
     */
    this.getTelephonyProvidersEdgesDids = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/dids', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'phoneNumber': opts['phoneNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get edge group.
     * 
     * @param {String} edgeGroupId Edge group ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Fields to expand in the response
     */
    this.getTelephonyProvidersEdgesEdgegroup = function(edgeGroupId, opts) { 
      opts = opts || {};

      // verify the required parameter 'edgeGroupId' is set
      if (edgeGroupId === undefined || edgeGroupId === null) {
        throw "Missing the required parameter 'edgeGroupId' when calling getTelephonyProvidersEdgesEdgegroup";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}', 
        'GET', 
        { 'edgeGroupId': edgeGroupId }, 
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
     * Gets the edge trunk base associated with the edge group
     * 
     * @param {String} edgegroupId Edge Group ID
     * @param {String} edgetrunkbaseId Edge Trunk Base ID
     */
    this.getTelephonyProvidersEdgesEdgegroupEdgetrunkbase = function(edgegroupId, edgetrunkbaseId) { 

      // verify the required parameter 'edgegroupId' is set
      if (edgegroupId === undefined || edgegroupId === null) {
        throw "Missing the required parameter 'edgegroupId' when calling getTelephonyProvidersEdgesEdgegroupEdgetrunkbase";
      }

      // verify the required parameter 'edgetrunkbaseId' is set
      if (edgetrunkbaseId === undefined || edgetrunkbaseId === null) {
        throw "Missing the required parameter 'edgetrunkbaseId' when calling getTelephonyProvidersEdgesEdgegroupEdgetrunkbase";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId}', 
        'GET', 
        { 'edgegroupId': edgegroupId,'edgetrunkbaseId': edgetrunkbaseId }, 
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
     * Get the list of edge groups.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by (default to name)
     * @param {Boolean} opts.managed Filter by managed
     */
    this.getTelephonyProvidersEdgesEdgegroups = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/edgegroups', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'sortBy': opts['sortBy'],'managed': opts['managed'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the edge version report.
     * The report will not have consistent data about the edge version(s) until all edges have been reset.
     */
    this.getTelephonyProvidersEdgesEdgeversionreport = function() { 


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/edgeversionreport', 
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
     * Get endpoint
     * 
     * @param {String} endpointId Endpoint ID
     */
    this.getTelephonyProvidersEdgesEndpoint = function(endpointId) { 

      // verify the required parameter 'endpointId' is set
      if (endpointId === undefined || endpointId === null) {
        throw "Missing the required parameter 'endpointId' when calling getTelephonyProvidersEdgesEndpoint";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/endpoints/{endpointId}', 
        'GET', 
        { 'endpointId': endpointId }, 
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
     * Get endpoints
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by (default to name)
     */
    this.getTelephonyProvidersEdgesEndpoints = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/endpoints', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'sortBy': opts['sortBy'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an extension by ID.
     * 
     * @param {String} extensionId Extension ID
     */
    this.getTelephonyProvidersEdgesExtension = function(extensionId) { 

      // verify the required parameter 'extensionId' is set
      if (extensionId === undefined || extensionId === null) {
        throw "Missing the required parameter 'extensionId' when calling getTelephonyProvidersEdgesExtension";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/extensions/{extensionId}', 
        'GET', 
        { 'extensionId': extensionId }, 
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
     * Get an extension pool by ID
     * 
     * @param {String} extensionPoolId Extension pool ID
     */
    this.getTelephonyProvidersEdgesExtensionpool = function(extensionPoolId) { 

      // verify the required parameter 'extensionPoolId' is set
      if (extensionPoolId === undefined || extensionPoolId === null) {
        throw "Missing the required parameter 'extensionPoolId' when calling getTelephonyProvidersEdgesExtensionpool";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}', 
        'GET', 
        { 'extensionPoolId': extensionPoolId }, 
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
     * Get a listing of extension pools
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Sort by (default to startNumber)
     * @param {String} opts._number Number
     */
    this.getTelephonyProvidersEdgesExtensionpools = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/extensionpools', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'number': opts['_number'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


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
    this.getTelephonyProvidersEdgesExtensions = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/extensions', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'number': opts['_number'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Line by ID
     * 
     * @param {String} lineId Line ID
     */
    this.getTelephonyProvidersEdgesLine = function(lineId) { 

      // verify the required parameter 'lineId' is set
      if (lineId === undefined || lineId === null) {
        throw "Missing the required parameter 'lineId' when calling getTelephonyProvidersEdgesLine";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/lines/{lineId}', 
        'GET', 
        { 'lineId': lineId }, 
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
     * Get a line base settings object by ID
     * 
     * @param {String} lineBaseId Line base ID
     */
    this.getTelephonyProvidersEdgesLinebasesetting = function(lineBaseId) { 

      // verify the required parameter 'lineBaseId' is set
      if (lineBaseId === undefined || lineBaseId === null) {
        throw "Missing the required parameter 'lineBaseId' when calling getTelephonyProvidersEdgesLinebasesetting";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/linebasesettings/{lineBaseId}', 
        'GET', 
        { 'lineBaseId': lineBaseId }, 
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
     * Get a listing of line base settings objects
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.sortBy Value by which to sort (default to name)
     * @param {String} opts.sortOrder Sort order (default to ASC)
     */
    this.getTelephonyProvidersEdgesLinebasesettings = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/linebasesettings', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


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
    this.getTelephonyProvidersEdgesLines = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/lines', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Line instance template based on a Line Base Settings object. This object can then be modified and saved as a new Line instance
     * 
     * @param {String} lineBaseSettingsId The id of a Line Base Settings object upon which to base this Line
     */
    this.getTelephonyProvidersEdgesLinesTemplate = function(lineBaseSettingsId) { 

      // verify the required parameter 'lineBaseSettingsId' is set
      if (lineBaseSettingsId === undefined || lineBaseSettingsId === null) {
        throw "Missing the required parameter 'lineBaseSettingsId' when calling getTelephonyProvidersEdgesLinesTemplate";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/lines/template', 
        'GET', 
        {  }, 
        { 'lineBaseSettingsId': lineBaseSettingsId }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get edge logical interfaces.
     * Retrieve the configured logical interfaces for a list edges. Only 100 edges can be requested at a time.
     * @param {String} edgeIds Comma separated list of Edge Id&#39;s
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Field to expand in the response
     */
    this.getTelephonyProvidersEdgesLogicalinterfaces = function(edgeIds, opts) { 
      opts = opts || {};

      // verify the required parameter 'edgeIds' is set
      if (edgeIds === undefined || edgeIds === null) {
        throw "Missing the required parameter 'edgeIds' when calling getTelephonyProvidersEdgesLogicalinterfaces";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/logicalinterfaces', 
        'GET', 
        {  }, 
        { 'edgeIds': edgeIds,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the metrics for a list of edges.
     * 
     * @param {String} edgeIds Comma separated list of Edge Id&#39;s
     */
    this.getTelephonyProvidersEdgesMetrics = function(edgeIds) { 

      // verify the required parameter 'edgeIds' is set
      if (edgeIds === undefined || edgeIds === null) {
        throw "Missing the required parameter 'edgeIds' when calling getTelephonyProvidersEdgesMetrics";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/metrics', 
        'GET', 
        {  }, 
        { 'edgeIds': edgeIds }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get outbound route
     * 
     * @param {String} outboundRouteId Outbound route ID
     */
    this.getTelephonyProvidersEdgesOutboundroute = function(outboundRouteId) { 

      // verify the required parameter 'outboundRouteId' is set
      if (outboundRouteId === undefined || outboundRouteId === null) {
        throw "Missing the required parameter 'outboundRouteId' when calling getTelephonyProvidersEdgesOutboundroute";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}', 
        'GET', 
        { 'outboundRouteId': outboundRouteId }, 
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
     * Get outbound routes
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.name Name
     * @param {String} opts.siteId Filter by site.id
     * @param {String} opts.sortBy Sort by (default to name)
     */
    this.getTelephonyProvidersEdgesOutboundroutes = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/outboundroutes', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'site.id': opts['siteId'],'sortBy': opts['sortBy'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Phone by ID
     * 
     * @param {String} phoneId Phone ID
     */
    this.getTelephonyProvidersEdgesPhone = function(phoneId) { 

      // verify the required parameter 'phoneId' is set
      if (phoneId === undefined || phoneId === null) {
        throw "Missing the required parameter 'phoneId' when calling getTelephonyProvidersEdgesPhone";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phones/{phoneId}', 
        'GET', 
        { 'phoneId': phoneId }, 
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
     * Get a Phone Base Settings object by ID
     * 
     * @param {String} phoneBaseId Phone base ID
     */
    this.getTelephonyProvidersEdgesPhonebasesetting = function(phoneBaseId) { 

      // verify the required parameter 'phoneBaseId' is set
      if (phoneBaseId === undefined || phoneBaseId === null) {
        throw "Missing the required parameter 'phoneBaseId' when calling getTelephonyProvidersEdgesPhonebasesetting";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}', 
        'GET', 
        { 'phoneBaseId': phoneBaseId }, 
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
    this.getTelephonyProvidersEdgesPhonebasesettings = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phonebasesettings', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'name': opts['name'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of available makes and models to create a new Phone Base Settings
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phonebasesettings/availablemetabases', 
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
     * Get a Phone Base Settings instance template from a given make and model. This object can then be modified and saved as a new Phone Base Settings instance
     * 
     * @param {String} phoneMetabaseId The id of a metabase object upon which to base this Phone Base Settings
     */
    this.getTelephonyProvidersEdgesPhonebasesettingsTemplate = function(phoneMetabaseId) { 

      // verify the required parameter 'phoneMetabaseId' is set
      if (phoneMetabaseId === undefined || phoneMetabaseId === null) {
        throw "Missing the required parameter 'phoneMetabaseId' when calling getTelephonyProvidersEdgesPhonebasesettingsTemplate";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phonebasesettings/template', 
        'GET', 
        {  }, 
        { 'phoneMetabaseId': phoneMetabaseId }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of Phone Instances
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.sortBy Value by which to sort (default to name)
     * @param {String} opts.sortOrder Sort order (default to ASC)
     * @param {String} opts.siteId Filter by site.id
     * @param {String} opts.webRtcUserId Filter by webRtcUser.id
     * @param {String} opts.phoneBaseSettingsId Filter by phoneBaseSettings.id
     * @param {String} opts.linesLoggedInUserId Filter by lines.loggedInUser.id
     * @param {String} opts.linesDefaultForUserId Filter by lines.defaultForUser.id
     * @param {String} opts.phoneHardwareId Filter by phone_hardwareId
     * @param {String} opts.linesId Filter by lines.id
     * @param {String} opts.linesName Filter by lines.name
     * @param {Array.<String>} opts.expand Fields to expand in the response, comma-separated
     * @param {Array.<String>} opts.fields Fields and properties to get, comma-separated
     */
    this.getTelephonyProvidersEdgesPhones = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phones', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'site.id': opts['siteId'],'webRtcUser.id': opts['webRtcUserId'],'phoneBaseSettings.id': opts['phoneBaseSettingsId'],'lines.loggedInUser.id': opts['linesLoggedInUserId'],'lines.defaultForUser.id': opts['linesDefaultForUserId'],'phone_hardwareId': opts['phoneHardwareId'],'lines.id': opts['linesId'],'lines.name': opts['linesName'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Phone instance template based on a Phone Base Settings object. This object can then be modified and saved as a new Phone instance
     * 
     * @param {String} phoneBaseSettingsId The id of a Phone Base Settings object upon which to base this Phone
     */
    this.getTelephonyProvidersEdgesPhonesTemplate = function(phoneBaseSettingsId) { 

      // verify the required parameter 'phoneBaseSettingsId' is set
      if (phoneBaseSettingsId === undefined || phoneBaseSettingsId === null) {
        throw "Missing the required parameter 'phoneBaseSettingsId' when calling getTelephonyProvidersEdgesPhonesTemplate";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phones/template', 
        'GET', 
        {  }, 
        { 'phoneBaseSettingsId': phoneBaseSettingsId }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get physical interfaces for edges.
     * Retrieves a list of all configured physical interfaces for a list of edges. Only 100 edges can be requested at a time.
     * @param {String} edgeIds Comma separated list of Edge Id&#39;s
     */
    this.getTelephonyProvidersEdgesPhysicalinterfaces = function(edgeIds) { 

      // verify the required parameter 'edgeIds' is set
      if (edgeIds === undefined || edgeIds === null) {
        throw "Missing the required parameter 'edgeIds' when calling getTelephonyProvidersEdgesPhysicalinterfaces";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/physicalinterfaces', 
        'GET', 
        {  }, 
        { 'edgeIds': edgeIds }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Site by ID.
     * 
     * @param {String} siteId Site ID
     */
    this.getTelephonyProvidersEdgesSite = function(siteId) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling getTelephonyProvidersEdgesSite";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}', 
        'GET', 
        { 'siteId': siteId }, 
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
     * Gets the basic information about an asg in a specified site
     * 
     * @param {String} siteId Site id associated with the asg
     */
    this.getTelephonyProvidersEdgesSiteAutoscalinggroups = function(siteId) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling getTelephonyProvidersEdgesSiteAutoscalinggroups";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/autoscalinggroups', 
        'GET', 
        { 'siteId': siteId }, 
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
     * Get a Number Plan by ID.
     * 
     * @param {String} siteId Site ID
     * @param {String} numberPlanId Number Plan ID
     */
    this.getTelephonyProvidersEdgesSiteNumberplan = function(siteId, numberPlanId) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling getTelephonyProvidersEdgesSiteNumberplan";
      }

      // verify the required parameter 'numberPlanId' is set
      if (numberPlanId === undefined || numberPlanId === null) {
        throw "Missing the required parameter 'numberPlanId' when calling getTelephonyProvidersEdgesSiteNumberplan";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/numberplans/{numberPlanId}', 
        'GET', 
        { 'siteId': siteId,'numberPlanId': numberPlanId }, 
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
     * Get the list of Number Plans for this Site.
     * 
     * @param {String} siteId Site ID
     */
    this.getTelephonyProvidersEdgesSiteNumberplans = function(siteId) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling getTelephonyProvidersEdgesSiteNumberplans";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/numberplans', 
        'GET', 
        { 'siteId': siteId }, 
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
     * Get a list of Classifications for this Site
     * 
     * @param {String} siteId Site ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.classification Classification
     */
    this.getTelephonyProvidersEdgesSiteNumberplansClassifications = function(siteId, opts) { 
      opts = opts || {};

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling getTelephonyProvidersEdgesSiteNumberplansClassifications";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/numberplans/classifications', 
        'GET', 
        { 'siteId': siteId }, 
        { 'classification': opts['classification'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an outbound route
     * 
     * @param {String} siteId Site ID
     * @param {String} outboundRouteId Outbound route ID
     */
    this.getTelephonyProvidersEdgesSiteOutboundroute = function(siteId, outboundRouteId) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling getTelephonyProvidersEdgesSiteOutboundroute";
      }

      // verify the required parameter 'outboundRouteId' is set
      if (outboundRouteId === undefined || outboundRouteId === null) {
        throw "Missing the required parameter 'outboundRouteId' when calling getTelephonyProvidersEdgesSiteOutboundroute";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}', 
        'GET', 
        { 'siteId': siteId,'outboundRouteId': outboundRouteId }, 
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
     * Get outbound routes
     * 
     * @param {String} siteId Site ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by (default to name)
     */
    this.getTelephonyProvidersEdgesSiteOutboundroutes = function(siteId, opts) { 
      opts = opts || {};

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling getTelephonyProvidersEdgesSiteOutboundroutes";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes', 
        'GET', 
        { 'siteId': siteId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'sortBy': opts['sortBy'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


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
    this.getTelephonyProvidersEdgesSites = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'],'location.id': opts['locationId'],'managed': opts['managed'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of Edge-compatible time zones
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 1000)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getTelephonyProvidersEdgesTimezones = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/timezones', 
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
     * Get a Trunk by ID
     * 
     * @param {String} trunkId Trunk ID
     */
    this.getTelephonyProvidersEdgesTrunk = function(trunkId) { 

      // verify the required parameter 'trunkId' is set
      if (trunkId === undefined || trunkId === null) {
        throw "Missing the required parameter 'trunkId' when calling getTelephonyProvidersEdgesTrunk";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunks/{trunkId}', 
        'GET', 
        { 'trunkId': trunkId }, 
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
     * Get the trunk metrics.
     * 
     * @param {String} trunkId Trunk Id
     */
    this.getTelephonyProvidersEdgesTrunkMetrics = function(trunkId) { 

      // verify the required parameter 'trunkId' is set
      if (trunkId === undefined || trunkId === null) {
        throw "Missing the required parameter 'trunkId' when calling getTelephonyProvidersEdgesTrunkMetrics";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunks/{trunkId}/metrics', 
        'GET', 
        { 'trunkId': trunkId }, 
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
     * Get a Trunk Base Settings object by ID
     * Managed properties will not be returned unless the user is assigned the managed:all:all permission.
     * @param {String} trunkBaseSettingsId Trunk Base ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ignoreHidden Set this to true to not receive trunk properties that are meant to be hidden or for internal system usage only.
     */
    this.getTelephonyProvidersEdgesTrunkbasesetting = function(trunkBaseSettingsId, opts) { 
      opts = opts || {};

      // verify the required parameter 'trunkBaseSettingsId' is set
      if (trunkBaseSettingsId === undefined || trunkBaseSettingsId === null) {
        throw "Missing the required parameter 'trunkBaseSettingsId' when calling getTelephonyProvidersEdgesTrunkbasesetting";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}', 
        'GET', 
        { 'trunkBaseSettingsId': trunkBaseSettingsId }, 
        { 'ignoreHidden': opts['ignoreHidden'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Trunk Base Settings listing
     * Managed properties will not be returned unless the user is assigned the managed:all:all permission.
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
    this.getTelephonyProvidersEdgesTrunkbasesettings = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunkbasesettings', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'recordingEnabled': opts['recordingEnabled'],'ignoreHidden': opts['ignoreHidden'],'managed': opts['managed'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'name': opts['name'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of available makes and models to create a new Trunk Base Settings
     * 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.type 
     * @param {Number} opts.pageSize  (default to 25)
     * @param {Number} opts.pageNumber  (default to 1)
     */
    this.getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunkbasesettings/availablemetabases', 
        'GET', 
        {  }, 
        { 'type': opts['type'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Trunk Base Settings instance template from a given make and model. This object can then be modified and saved as a new Trunk Base Settings instance
     * 
     * @param {String} trunkMetabaseId The id of a metabase object upon which to base this Trunk Base Settings
     */
    this.getTelephonyProvidersEdgesTrunkbasesettingsTemplate = function(trunkMetabaseId) { 

      // verify the required parameter 'trunkMetabaseId' is set
      if (trunkMetabaseId === undefined || trunkMetabaseId === null) {
        throw "Missing the required parameter 'trunkMetabaseId' when calling getTelephonyProvidersEdgesTrunkbasesettingsTemplate";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunkbasesettings/template', 
        'GET', 
        {  }, 
        { 'trunkMetabaseId': trunkMetabaseId }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


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
    this.getTelephonyProvidersEdgesTrunks = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunks', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'edge.id': opts['edgeId'],'trunkBase.id': opts['trunkBaseId'],'trunkType': opts['trunkType'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the metrics for a list of trunks.
     * 
     * @param {String} trunkIds Comma separated list of Trunk Id&#39;s
     */
    this.getTelephonyProvidersEdgesTrunksMetrics = function(trunkIds) { 

      // verify the required parameter 'trunkIds' is set
      if (trunkIds === undefined || trunkIds === null) {
        throw "Missing the required parameter 'trunkIds' when calling getTelephonyProvidersEdgesTrunksMetrics";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunks/metrics', 
        'GET', 
        {  }, 
        { 'trunkIds': trunkIds }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Counts of trunks that have recording disabled or enabled
     * 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.trunkType The type of this trunk base.
     */
    this.getTelephonyProvidersEdgesTrunkswithrecording = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunkswithrecording', 
        'GET', 
        {  }, 
        { 'trunkType': opts['trunkType'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create an edge logical interface.
     * Create
     * @param {String} edgeId Edge ID
     * @param {Object} body Logical interface
     */
    this.postTelephonyProvidersEdgeLogicalinterfaces = function(edgeId, body) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling postTelephonyProvidersEdgeLogicalinterfaces";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgeLogicalinterfaces";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces', 
        'POST', 
        { 'edgeId': edgeId }, 
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
     * Request that the specified fileIds be uploaded from the Edge.
     * 
     * @param {String} edgeId Edge ID
     * @param {String} jobId Job ID
     * @param {Object} body Log upload request
     */
    this.postTelephonyProvidersEdgeLogsJobUpload = function(edgeId, jobId, body) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling postTelephonyProvidersEdgeLogsJobUpload";
      }

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw "Missing the required parameter 'jobId' when calling postTelephonyProvidersEdgeLogsJobUpload";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgeLogsJobUpload";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}/upload', 
        'POST', 
        { 'edgeId': edgeId,'jobId': jobId }, 
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
     * Create a job to upload a list of Edge logs.
     * 
     * @param {String} edgeId Edge ID
     * @param {Object} body EdgeLogsJobRequest
     */
    this.postTelephonyProvidersEdgeLogsJobs = function(edgeId, body) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling postTelephonyProvidersEdgeLogsJobs";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgeLogsJobs";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/logs/jobs', 
        'POST', 
        { 'edgeId': edgeId }, 
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
     * Reboot an Edge
     * 
     * @param {String} edgeId Edge ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body Parameters for the edge reboot
     */
    this.postTelephonyProvidersEdgeReboot = function(edgeId, opts) { 
      opts = opts || {};

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling postTelephonyProvidersEdgeReboot";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/reboot', 
        'POST', 
        { 'edgeId': edgeId }, 
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
     * Starts a software update for this edge.
     * 
     * @param {String} edgeId Edge ID
     * @param {Object} body Software update request
     */
    this.postTelephonyProvidersEdgeSoftwareupdate = function(edgeId, body) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling postTelephonyProvidersEdgeSoftwareupdate";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgeSoftwareupdate";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/softwareupdate', 
        'POST', 
        { 'edgeId': edgeId }, 
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
     * Take an Edge in or out of service
     * 
     * @param {String} edgeId Edge ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body Edge Service State
     */
    this.postTelephonyProvidersEdgeStatuscode = function(edgeId, opts) { 
      opts = opts || {};

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling postTelephonyProvidersEdgeStatuscode";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/statuscode', 
        'POST', 
        { 'edgeId': edgeId }, 
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
     * Unpair an Edge
     * 
     * @param {String} edgeId Edge Id
     */
    this.postTelephonyProvidersEdgeUnpair = function(edgeId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling postTelephonyProvidersEdgeUnpair";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/unpair', 
        'POST', 
        { 'edgeId': edgeId }, 
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
     * Create an edge.
     * 
     * @param {Object} body Edge
     */
    this.postTelephonyProvidersEdges = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdges";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges', 
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
     * Validates a street address
     * 
     * @param {Object} body Address
     */
    this.postTelephonyProvidersEdgesAddressvalidation = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesAddressvalidation";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/addressvalidation', 
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
     * Create a certificate authority.
     * 
     * @param {Object} body CertificateAuthority
     */
    this.postTelephonyProvidersEdgesCertificateauthorities = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesCertificateauthorities";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/certificateauthorities', 
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
     * Create a new DID pool
     * 
     * @param {Object} body DID pool
     */
    this.postTelephonyProvidersEdgesDidpools = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesDidpools";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/didpools', 
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
     * Create an edge group.
     * 
     * @param {Object} body EdgeGroup
     */
    this.postTelephonyProvidersEdgesEdgegroups = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesEdgegroups";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/edgegroups', 
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
     * Create endpoint
     * 
     * @param {Object} body EndpointTemplate
     */
    this.postTelephonyProvidersEdgesEndpoints = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesEndpoints";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/endpoints', 
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
     * Create a new extension pool
     * 
     * @param {Object} body ExtensionPool
     */
    this.postTelephonyProvidersEdgesExtensionpools = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesExtensionpools";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/extensionpools', 
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
     * Create outbound rule
     * 
     * @param {Object} body OutboundRoute
     */
    this.postTelephonyProvidersEdgesOutboundroutes = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesOutboundroutes";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/outboundroutes', 
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
     * Reboot a Phone
     * 
     * @param {String} phoneId Phone Id
     */
    this.postTelephonyProvidersEdgesPhoneReboot = function(phoneId) { 

      // verify the required parameter 'phoneId' is set
      if (phoneId === undefined || phoneId === null) {
        throw "Missing the required parameter 'phoneId' when calling postTelephonyProvidersEdgesPhoneReboot";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phones/{phoneId}/reboot', 
        'POST', 
        { 'phoneId': phoneId }, 
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
     * Create a new Phone Base Settings object
     * 
     * @param {Object} body Phone base settings
     */
    this.postTelephonyProvidersEdgesPhonebasesettings = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesPhonebasesettings";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phonebasesettings', 
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
     * Create a new Phone
     * 
     * @param {Object} body Phone
     */
    this.postTelephonyProvidersEdgesPhones = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesPhones";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phones', 
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
     * Reboot Multiple Phones
     * 
     * @param {Object} body Phones
     */
    this.postTelephonyProvidersEdgesPhonesReboot = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesPhonesReboot";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phones/reboot', 
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
     * Creates an ASG for the specified site
     * 
     * @param {String} siteId Site that will be associated with the asg
     * @param {Object} body CreateAsgRequest
     */
    this.postTelephonyProvidersEdgesSiteAutoscalinggroups = function(siteId, body) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling postTelephonyProvidersEdgesSiteAutoscalinggroups";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesSiteAutoscalinggroups";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/autoscalinggroups', 
        'POST', 
        { 'siteId': siteId }, 
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
     * Create outbound route
     * 
     * @param {String} siteId Site ID
     * @param {Object} body OutboundRoute
     */
    this.postTelephonyProvidersEdgesSiteOutboundroutes = function(siteId, body) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling postTelephonyProvidersEdgesSiteOutboundroutes";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesSiteOutboundroutes";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes', 
        'POST', 
        { 'siteId': siteId }, 
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
     * Triggers the rebalance operation.
     * 
     * @param {String} siteId Site ID
     */
    this.postTelephonyProvidersEdgesSiteRebalance = function(siteId) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling postTelephonyProvidersEdgesSiteRebalance";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/rebalance', 
        'POST', 
        { 'siteId': siteId }, 
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
     * Create a Site.
     * 
     * @param {Object} body Site
     */
    this.postTelephonyProvidersEdgesSites = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesSites";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites', 
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
     * Create a Trunk Base Settings object
     * 
     * @param {Object} body Trunk base settings
     */
    this.postTelephonyProvidersEdgesTrunkbasesettings = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesTrunkbasesettings";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunkbasesettings', 
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
     * Update a edge.
     * 
     * @param {String} edgeId Edge ID
     * @param {Object} body Edge
     */
    this.putTelephonyProvidersEdge = function(edgeId, body) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling putTelephonyProvidersEdge";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdge";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}', 
        'PUT', 
        { 'edgeId': edgeId }, 
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
     * Update a line.
     * 
     * @param {String} edgeId Edge ID
     * @param {String} lineId Line ID
     * @param {Object} body Line
     */
    this.putTelephonyProvidersEdgeLine = function(edgeId, lineId, body) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling putTelephonyProvidersEdgeLine";
      }

      // verify the required parameter 'lineId' is set
      if (lineId === undefined || lineId === null) {
        throw "Missing the required parameter 'lineId' when calling putTelephonyProvidersEdgeLine";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgeLine";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}', 
        'PUT', 
        { 'edgeId': edgeId,'lineId': lineId }, 
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
     * Update an edge logical interface.
     * 
     * @param {String} edgeId Edge ID
     * @param {String} interfaceId Interface ID
     * @param {Object} body Logical interface
     */
    this.putTelephonyProvidersEdgeLogicalinterface = function(edgeId, interfaceId, body) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling putTelephonyProvidersEdgeLogicalinterface";
      }

      // verify the required parameter 'interfaceId' is set
      if (interfaceId === undefined || interfaceId === null) {
        throw "Missing the required parameter 'interfaceId' when calling putTelephonyProvidersEdgeLogicalinterface";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgeLogicalinterface";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}', 
        'PUT', 
        { 'edgeId': edgeId,'interfaceId': interfaceId }, 
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
     * Update a certificate authority.
     * 
     * @param {String} certificateId Certificate ID
     * @param {Object} body Certificate authority
     */
    this.putTelephonyProvidersEdgesCertificateauthority = function(certificateId, body) { 

      // verify the required parameter 'certificateId' is set
      if (certificateId === undefined || certificateId === null) {
        throw "Missing the required parameter 'certificateId' when calling putTelephonyProvidersEdgesCertificateauthority";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesCertificateauthority";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/certificateauthorities/{certificateId}', 
        'PUT', 
        { 'certificateId': certificateId }, 
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
     * Update a DID by ID.
     * 
     * @param {String} didId DID ID
     * @param {Object} body DID
     */
    this.putTelephonyProvidersEdgesDid = function(didId, body) { 

      // verify the required parameter 'didId' is set
      if (didId === undefined || didId === null) {
        throw "Missing the required parameter 'didId' when calling putTelephonyProvidersEdgesDid";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesDid";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/dids/{didId}', 
        'PUT', 
        { 'didId': didId }, 
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
     * Update a DID Pool by ID.
     * 
     * @param {String} didPoolId DID pool ID
     * @param {Object} body DID pool
     */
    this.putTelephonyProvidersEdgesDidpool = function(didPoolId, body) { 

      // verify the required parameter 'didPoolId' is set
      if (didPoolId === undefined || didPoolId === null) {
        throw "Missing the required parameter 'didPoolId' when calling putTelephonyProvidersEdgesDidpool";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesDidpool";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/didpools/{didPoolId}', 
        'PUT', 
        { 'didPoolId': didPoolId }, 
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
     * Update an edge group.
     * 
     * @param {String} edgeGroupId Edge group ID
     * @param {Object} body EdgeGroup
     */
    this.putTelephonyProvidersEdgesEdgegroup = function(edgeGroupId, body) { 

      // verify the required parameter 'edgeGroupId' is set
      if (edgeGroupId === undefined || edgeGroupId === null) {
        throw "Missing the required parameter 'edgeGroupId' when calling putTelephonyProvidersEdgesEdgegroup";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesEdgegroup";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}', 
        'PUT', 
        { 'edgeGroupId': edgeGroupId }, 
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
     * Update the edge trunk base associated with the edge group
     * 
     * @param {String} edgegroupId Edge Group ID
     * @param {String} edgetrunkbaseId Edge Trunk Base ID
     * @param {Object} body EdgeTrunkBase
     */
    this.putTelephonyProvidersEdgesEdgegroupEdgetrunkbase = function(edgegroupId, edgetrunkbaseId, body) { 

      // verify the required parameter 'edgegroupId' is set
      if (edgegroupId === undefined || edgegroupId === null) {
        throw "Missing the required parameter 'edgegroupId' when calling putTelephonyProvidersEdgesEdgegroupEdgetrunkbase";
      }

      // verify the required parameter 'edgetrunkbaseId' is set
      if (edgetrunkbaseId === undefined || edgetrunkbaseId === null) {
        throw "Missing the required parameter 'edgetrunkbaseId' when calling putTelephonyProvidersEdgesEdgegroupEdgetrunkbase";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesEdgegroupEdgetrunkbase";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId}', 
        'PUT', 
        { 'edgegroupId': edgegroupId,'edgetrunkbaseId': edgetrunkbaseId }, 
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
     * Update endpoint
     * 
     * @param {String} endpointId Endpoint ID
     * @param {Object} body EndpointTemplate
     */
    this.putTelephonyProvidersEdgesEndpoint = function(endpointId, body) { 

      // verify the required parameter 'endpointId' is set
      if (endpointId === undefined || endpointId === null) {
        throw "Missing the required parameter 'endpointId' when calling putTelephonyProvidersEdgesEndpoint";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesEndpoint";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/endpoints/{endpointId}', 
        'PUT', 
        { 'endpointId': endpointId }, 
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
     * Update an extension by ID.
     * 
     * @param {String} extensionId Extension ID
     * @param {Object} body Extension
     */
    this.putTelephonyProvidersEdgesExtension = function(extensionId, body) { 

      // verify the required parameter 'extensionId' is set
      if (extensionId === undefined || extensionId === null) {
        throw "Missing the required parameter 'extensionId' when calling putTelephonyProvidersEdgesExtension";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesExtension";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/extensions/{extensionId}', 
        'PUT', 
        { 'extensionId': extensionId }, 
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
     * Update an extension pool by ID
     * 
     * @param {String} extensionPoolId Extension pool ID
     * @param {Object} body ExtensionPool
     */
    this.putTelephonyProvidersEdgesExtensionpool = function(extensionPoolId, body) { 

      // verify the required parameter 'extensionPoolId' is set
      if (extensionPoolId === undefined || extensionPoolId === null) {
        throw "Missing the required parameter 'extensionPoolId' when calling putTelephonyProvidersEdgesExtensionpool";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesExtensionpool";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}', 
        'PUT', 
        { 'extensionPoolId': extensionPoolId }, 
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
     * Update outbound route
     * 
     * @param {String} outboundRouteId Outbound route ID
     * @param {Object} body OutboundRoute
     */
    this.putTelephonyProvidersEdgesOutboundroute = function(outboundRouteId, body) { 

      // verify the required parameter 'outboundRouteId' is set
      if (outboundRouteId === undefined || outboundRouteId === null) {
        throw "Missing the required parameter 'outboundRouteId' when calling putTelephonyProvidersEdgesOutboundroute";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesOutboundroute";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}', 
        'PUT', 
        { 'outboundRouteId': outboundRouteId }, 
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
     * Update a Phone by ID
     * 
     * @param {String} phoneId Phone ID
     * @param {Object} body Phone
     */
    this.putTelephonyProvidersEdgesPhone = function(phoneId, body) { 

      // verify the required parameter 'phoneId' is set
      if (phoneId === undefined || phoneId === null) {
        throw "Missing the required parameter 'phoneId' when calling putTelephonyProvidersEdgesPhone";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesPhone";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phones/{phoneId}', 
        'PUT', 
        { 'phoneId': phoneId }, 
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
     * Update a Phone Base Settings by ID
     * 
     * @param {String} phoneBaseId Phone base ID
     * @param {Object} body Phone base settings
     */
    this.putTelephonyProvidersEdgesPhonebasesetting = function(phoneBaseId, body) { 

      // verify the required parameter 'phoneBaseId' is set
      if (phoneBaseId === undefined || phoneBaseId === null) {
        throw "Missing the required parameter 'phoneBaseId' when calling putTelephonyProvidersEdgesPhonebasesetting";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesPhonebasesetting";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}', 
        'PUT', 
        { 'phoneBaseId': phoneBaseId }, 
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
     * Update a Site by ID.
     * 
     * @param {String} siteId Site ID
     * @param {Object} body Site
     */
    this.putTelephonyProvidersEdgesSite = function(siteId, body) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling putTelephonyProvidersEdgesSite";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesSite";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}', 
        'PUT', 
        { 'siteId': siteId }, 
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
     * Update the list of Number Plans.
     * 
     * @param {String} siteId Site ID
     * @param {Array.<Object>} body List of number plans
     */
    this.putTelephonyProvidersEdgesSiteNumberplans = function(siteId, body) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling putTelephonyProvidersEdgesSiteNumberplans";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesSiteNumberplans";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/numberplans', 
        'PUT', 
        { 'siteId': siteId }, 
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
     * Update outbound route
     * 
     * @param {String} siteId Site ID
     * @param {String} outboundRouteId Outbound route ID
     * @param {Object} body OutboundRoute
     */
    this.putTelephonyProvidersEdgesSiteOutboundroute = function(siteId, outboundRouteId, body) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling putTelephonyProvidersEdgesSiteOutboundroute";
      }

      // verify the required parameter 'outboundRouteId' is set
      if (outboundRouteId === undefined || outboundRouteId === null) {
        throw "Missing the required parameter 'outboundRouteId' when calling putTelephonyProvidersEdgesSiteOutboundroute";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesSiteOutboundroute";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}', 
        'PUT', 
        { 'siteId': siteId,'outboundRouteId': outboundRouteId }, 
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
     * Update a Trunk Base Settings object by ID
     * 
     * @param {String} trunkBaseSettingsId Trunk Base ID
     * @param {Object} body Trunk base settings
     */
    this.putTelephonyProvidersEdgesTrunkbasesetting = function(trunkBaseSettingsId, body) { 

      // verify the required parameter 'trunkBaseSettingsId' is set
      if (trunkBaseSettingsId === undefined || trunkBaseSettingsId === null) {
        throw "Missing the required parameter 'trunkBaseSettingsId' when calling putTelephonyProvidersEdgesTrunkbasesetting";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesTrunkbasesetting";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}', 
        'PUT', 
        { 'trunkBaseSettingsId': trunkBaseSettingsId }, 
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
