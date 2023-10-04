import ApiClient from '../ApiClient.js';


class BadgesApi {
	/**
	 * Badges service.
	 * @module purecloud-platform-client-v2/api/BadgesApi
	 * @version 178.2.0
	 */

	/**
	 * Constructs a new BadgesApi. 
	 * @alias module:purecloud-platform-client-v2/api/BadgesApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Clear the unread chat notification badge count from a user
	 * 
	 * @param {String} jabberId jabberId of the entity from which the unread message(s) originated
	 */
	deleteBadgesChat(jabberId) { 
		// verify the required parameter 'jabberId' is set
		if (jabberId === undefined || jabberId === null) {
			throw 'Missing the required parameter "jabberId" when calling deleteBadgesChat';
		}

		return this.apiClient.callApi(
			'/api/v2/badges/chats/{jabberId}', 
			'DELETE', 
			{ 'jabberId': jabberId },
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
	 * Get unread chat notification badges
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getBadgesChats(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/badges/chats', 
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

}


export default BadgesApi;
