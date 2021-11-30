import ApiClient from '../ApiClient.js';


class LocationsApi {
	/**
	 * Locations service.
	 * @module purecloud-platform-client-v2/api/LocationsApi
	 * @version 126.1.0
	 */

	/**
	 * Constructs a new LocationsApi. 
	 * @alias module:purecloud-platform-client-v2/api/LocationsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a location
	 * 
	 * @param {String} locationId Location ID
	 */
	deleteLocation(locationId) { 
		// verify the required parameter 'locationId' is set
		if (locationId === undefined || locationId === null) {
			throw 'Missing the required parameter "locationId" when calling deleteLocation';
		}

		return this.apiClient.callApi(
			'/api/v2/locations/{locationId}', 
			'DELETE', 
			{ 'locationId': locationId }, 
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
	 * Get Location by ID.
	 * 
	 * @param {String} locationId Location ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 */
	getLocation(locationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'locationId' is set
		if (locationId === undefined || locationId === null) {
			throw 'Missing the required parameter "locationId" when calling getLocation';
		}

		return this.apiClient.callApi(
			'/api/v2/locations/{locationId}', 
			'GET', 
			{ 'locationId': locationId }, 
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
	 * Get sublocations for location ID.
	 * 
	 * @param {String} locationId Location ID
	 */
	getLocationSublocations(locationId) { 
		// verify the required parameter 'locationId' is set
		if (locationId === undefined || locationId === null) {
			throw 'Missing the required parameter "locationId" when calling getLocationSublocations';
		}

		return this.apiClient.callApi(
			'/api/v2/locations/{locationId}/sublocations', 
			'GET', 
			{ 'locationId': locationId }, 
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
	 * Get a list of all locations.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Array.<String>} opts.id id
	 * @param {Object} opts.sortOrder Sort order
	 */
	getLocations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/locations', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'sortOrder': opts['sortOrder'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Search locations using the q64 value returned from a previous search
	 * 
	 * @param {String} q64 q64
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Provides more details about a specified resource
	 */
	getLocationsSearch(q64, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'q64' is set
		if (q64 === undefined || q64 === null) {
			throw 'Missing the required parameter "q64" when calling getLocationsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/locations/search', 
			'GET', 
			{  }, 
			{ 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Update a location
	 * 
	 * @param {String} locationId Location ID
	 * @param {Object} body Location
	 */
	patchLocation(locationId, body) { 
		// verify the required parameter 'locationId' is set
		if (locationId === undefined || locationId === null) {
			throw 'Missing the required parameter "locationId" when calling patchLocation';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchLocation';
		}

		return this.apiClient.callApi(
			'/api/v2/locations/{locationId}', 
			'PATCH', 
			{ 'locationId': locationId }, 
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
	 * Create a location
	 * 
	 * @param {Object} body Location
	 */
	postLocations(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postLocations';
		}

		return this.apiClient.callApi(
			'/api/v2/locations', 
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
	 * Search locations
	 * 
	 * @param {Object} body Search request options
	 */
	postLocationsSearch(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postLocationsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/locations/search', 
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

}


export default LocationsApi;