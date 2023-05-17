import ApiClient from '../ApiClient.js';


class NotificationsApi {
	/**
	 * Notifications service.
	 * @module purecloud-platform-client-v2/api/NotificationsApi
	 * @version 168.2.0
	 */

	/**
	 * Constructs a new NotificationsApi. 
	 * @alias module:purecloud-platform-client-v2/api/NotificationsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Remove all subscriptions
	 * 
	 * @param {String} channelId Channel ID
	 */
	deleteNotificationsChannelSubscriptions(channelId) { 
		// verify the required parameter 'channelId' is set
		if (channelId === undefined || channelId === null) {
			throw 'Missing the required parameter "channelId" when calling deleteNotificationsChannelSubscriptions';
		}

		return this.apiClient.callApi(
			'/api/v2/notifications/channels/{channelId}/subscriptions', 
			'DELETE', 
			{ 'channelId': channelId },
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
	 * Get available notification topics.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Boolean} opts.includePreview Whether or not to include Preview topics (default to true)
	 */
	getNotificationsAvailabletopics(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/notifications/availabletopics', 
			'GET', 
			{  },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'includePreview': opts['includePreview'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * The list of all subscriptions for this channel
	 * 
	 * @param {String} channelId Channel ID
	 */
	getNotificationsChannelSubscriptions(channelId) { 
		// verify the required parameter 'channelId' is set
		if (channelId === undefined || channelId === null) {
			throw 'Missing the required parameter "channelId" when calling getNotificationsChannelSubscriptions';
		}

		return this.apiClient.callApi(
			'/api/v2/notifications/channels/{channelId}/subscriptions', 
			'GET', 
			{ 'channelId': channelId },
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
	 * The list of existing channels
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.includechannels Show user's channels for this specific token or across all tokens for this user and app.  Channel Ids for other access tokens will not be shown, but will be presented to show their existence. (default to token)
	 */
	getNotificationsChannels(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/notifications/channels', 
			'GET', 
			{  },
			{ 'includechannels': opts['includechannels'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Verify a channel still exists and is valid
	 * Returns a 200 OK if channel exists, and a 404 Not Found if it doesnt
	 * @param {String} channelId Channel ID
	 */
	headNotificationsChannel(channelId) { 
		// verify the required parameter 'channelId' is set
		if (channelId === undefined || channelId === null) {
			throw 'Missing the required parameter "channelId" when calling headNotificationsChannel';
		}

		return this.apiClient.callApi(
			'/api/v2/notifications/channels/{channelId}', 
			'HEAD', 
			{ 'channelId': channelId },
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
	 * Add a list of subscriptions to the existing list of subscriptions
	 * 
	 * @param {String} channelId Channel ID
	 * @param {Array.<Object>} body Body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.ignoreErrors Optionally prevent throwing of errors for failed permissions checks. (default to false)
	 */
	postNotificationsChannelSubscriptions(channelId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'channelId' is set
		if (channelId === undefined || channelId === null) {
			throw 'Missing the required parameter "channelId" when calling postNotificationsChannelSubscriptions';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postNotificationsChannelSubscriptions';
		}

		return this.apiClient.callApi(
			'/api/v2/notifications/channels/{channelId}/subscriptions', 
			'POST', 
			{ 'channelId': channelId },
			{ 'ignoreErrors': opts['ignoreErrors'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a new channel
	 * There is a limit of 20 channels per user/app combination. Creating a 21st channel will remove the channel with oldest last used date. Channels without an active connection will be removed first.
	 */
	postNotificationsChannels() { 

		return this.apiClient.callApi(
			'/api/v2/notifications/channels', 
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
	 * Replace the current list of subscriptions with a new list.
	 * 
	 * @param {String} channelId Channel ID
	 * @param {Array.<Object>} body Body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.ignoreErrors Optionally prevent throwing of errors for failed permissions checks. (default to false)
	 */
	putNotificationsChannelSubscriptions(channelId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'channelId' is set
		if (channelId === undefined || channelId === null) {
			throw 'Missing the required parameter "channelId" when calling putNotificationsChannelSubscriptions';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putNotificationsChannelSubscriptions';
		}

		return this.apiClient.callApi(
			'/api/v2/notifications/channels/{channelId}/subscriptions', 
			'PUT', 
			{ 'channelId': channelId },
			{ 'ignoreErrors': opts['ignoreErrors'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default NotificationsApi;
