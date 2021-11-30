import ApiClient from '../ApiClient.js';


class GeolocationApi {
	/**
	 * Geolocation service.
	 * @module purecloud-platform-client-v2/api/GeolocationApi
	 * @version 126.1.0
	 */

	/**
	 * Constructs a new GeolocationApi. 
	 * @alias module:purecloud-platform-client-v2/api/GeolocationApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get a organization&#39;s GeolocationSettings
	 * 
	 */
	getGeolocationsSettings() { 

		return this.apiClient.callApi(
			'/api/v2/geolocations/settings', 
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
	 * Get a user&#39;s Geolocation
	 * 
	 * @param {String} userId user Id
	 * @param {String} clientId client Id
	 */
	getUserGeolocation(userId, clientId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserGeolocation';
		}
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null) {
			throw 'Missing the required parameter "clientId" when calling getUserGeolocation';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/geolocations/{clientId}', 
			'GET', 
			{ 'userId': userId,'clientId': clientId }, 
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
	 * Patch a organization&#39;s GeolocationSettings
	 * 
	 * @param {Object} body Geolocation settings
	 */
	patchGeolocationsSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchGeolocationsSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/geolocations/settings', 
			'PATCH', 
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
	 * Patch a user&#39;s Geolocation
	 * The geolocation object can be patched one of three ways. Option 1: Set the &#39;primary&#39; property to true. This will set the client as the user&#39;s primary geolocation source.  Option 2: Provide the &#39;latitude&#39; and &#39;longitude&#39; values.  This will enqueue an asynchronous update of the &#39;city&#39;, &#39;region&#39;, and &#39;country&#39;, generating a notification. A subsequent GET operation will include the new values for &#39;city&#39;, &#39;region&#39; and &#39;country&#39;.  Option 3:  Provide the &#39;city&#39;, &#39;region&#39;, &#39;country&#39; values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.
	 * @param {String} userId user Id
	 * @param {String} clientId client Id
	 * @param {Object} body Geolocation
	 */
	patchUserGeolocation(userId, clientId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling patchUserGeolocation';
		}
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null) {
			throw 'Missing the required parameter "clientId" when calling patchUserGeolocation';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchUserGeolocation';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/geolocations/{clientId}', 
			'PATCH', 
			{ 'userId': userId,'clientId': clientId }, 
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


export default GeolocationApi;