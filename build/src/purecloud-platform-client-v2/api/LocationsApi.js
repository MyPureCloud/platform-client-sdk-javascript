import ApiClient from '../ApiClient.js';


class LocationsApi {
	/**
	 * Locations service.
	 * @module purecloud-platform-client-v2/api/LocationsApi
	 * @version 39.0.0
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
	 * Get Location by ID.
	 * 
	 * @param {String} locationId Location ID
	 */
	getLocation(locationId) { 
		// verify the required parameter 'locationId' is set
		if (locationId === undefined || locationId === null) {
			throw 'Missing the required parameter "locationId" when calling getLocation';
		}

		return this.apiClient.callApi(
			'/api/v2/locations/{locationId}', 
			'GET', 
			{ 'locationId': locationId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud Auth'], 
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
	 * @param {Object} opts.sortOrder Sort order
	 */
	getLocations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/locations', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud Auth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Search locations using the q64 value returned from a previous search
	 * 
	 * @param {String} q64 q64
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand expand
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
			['PureCloud Auth'], 
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
			['PureCloud Auth'], 
			['application/json'], 
			['application/json']
		);
	}

}


export default LocationsApi;