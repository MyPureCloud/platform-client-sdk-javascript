import ApiClient from '../ApiClient.js';


class ChatApi {
	/**
	 * Chat service.
	 * @module purecloud-platform-client-v2/api/ChatApi
	 * @version 189.1.0
	 */

	/**
	 * Constructs a new ChatApi. 
	 * @alias module:purecloud-platform-client-v2/api/ChatApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a message in a room
	 * 
	 * @param {String} roomJid roomId
	 * @param {String} messageId messageId
	 * deleteChatsRoomMessage is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteChatsRoomMessage(roomJid, messageId) { 
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null) {
			throw 'Missing the required parameter "roomJid" when calling deleteChatsRoomMessage';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling deleteChatsRoomMessage';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/rooms/{roomJid}/messages/{messageId}', 
			'DELETE', 
			{ 'roomJid': roomJid,'messageId': messageId },
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
	 * Remove a user from a room.
	 * 
	 * @param {String} roomJid roomJid
	 * @param {String} userId userId
	 * deleteChatsRoomParticipant is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteChatsRoomParticipant(roomJid, userId) { 
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null) {
			throw 'Missing the required parameter "roomJid" when calling deleteChatsRoomParticipant';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling deleteChatsRoomParticipant';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/rooms/{roomJid}/participants/{userId}', 
			'DELETE', 
			{ 'roomJid': roomJid,'userId': userId },
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
	 * Remove a pinned message from a room
	 * 
	 * @param {String} roomJid roomJid
	 * @param {String} pinnedMessageId pinnedMessageId
	 * deleteChatsRoomPinnedmessage is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteChatsRoomPinnedmessage(roomJid, pinnedMessageId) { 
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null) {
			throw 'Missing the required parameter "roomJid" when calling deleteChatsRoomPinnedmessage';
		}
		// verify the required parameter 'pinnedMessageId' is set
		if (pinnedMessageId === undefined || pinnedMessageId === null) {
			throw 'Missing the required parameter "pinnedMessageId" when calling deleteChatsRoomPinnedmessage';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/rooms/{roomJid}/pinnedmessages/{pinnedMessageId}', 
			'DELETE', 
			{ 'roomJid': roomJid,'pinnedMessageId': pinnedMessageId },
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
	 * Delete a message to a user
	 * 
	 * @param {String} userId userId
	 * @param {String} messageId messageId
	 * deleteChatsUserMessage is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteChatsUserMessage(userId, messageId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling deleteChatsUserMessage';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling deleteChatsUserMessage';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/users/{userId}/messages/{messageId}', 
			'DELETE', 
			{ 'userId': userId,'messageId': messageId },
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
	 * Get a message
	 * 
	 * @param {String} messageId messageId
	 * getChatsMessage is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getChatsMessage(messageId) { 
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling getChatsMessage';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/messages/{messageId}', 
			'GET', 
			{ 'messageId': messageId },
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
	 * Get a room
	 * 
	 * @param {String} roomJid roomJid
	 * getChatsRoom is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getChatsRoom(roomJid) { 
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null) {
			throw 'Missing the required parameter "roomJid" when calling getChatsRoom';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/rooms/{roomJid}', 
			'GET', 
			{ 'roomJid': roomJid },
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
	 * Get messages by id(s) from a room
	 * 
	 * @param {String} roomJid roomJid
	 * @param {String} messageIds messageIds, comma separated
	 * getChatsRoomMessage is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getChatsRoomMessage(roomJid, messageIds) { 
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null) {
			throw 'Missing the required parameter "roomJid" when calling getChatsRoomMessage';
		}
		// verify the required parameter 'messageIds' is set
		if (messageIds === undefined || messageIds === null) {
			throw 'Missing the required parameter "messageIds" when calling getChatsRoomMessage';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/rooms/{roomJid}/messages/{messageIds}', 
			'GET', 
			{ 'roomJid': roomJid,'messageIds': messageIds },
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
	 * Get a room's message history
	 * 
	 * @param {String} roomJid roomJid
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.limit The maximum number of messages to retrieve
	 * @param {String} opts.before The cutoff date for messages to retrieve
	 * @param {String} opts.after The beginning date for messages to retrieve
	 * getChatsRoomMessages is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getChatsRoomMessages(roomJid, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null) {
			throw 'Missing the required parameter "roomJid" when calling getChatsRoomMessages';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/rooms/{roomJid}/messages', 
			'GET', 
			{ 'roomJid': roomJid },
			{ 'limit': opts['limit'],'before': opts['before'],'after': opts['after'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get Chat Settings.
	 * 
	 */
	getChatsSettings() { 

		return this.apiClient.callApi(
			'/api/v2/chats/settings', 
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
	 * Get history by thread
	 * 
	 * @param {String} threadId threadId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.limit The maximum number of messages to retrieve
	 * @param {String} opts.before The cutoff date for messages to retrieve
	 * @param {String} opts.after The beginning date for messages to retrieve
	 * getChatsThreadMessages is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getChatsThreadMessages(threadId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'threadId' is set
		if (threadId === undefined || threadId === null) {
			throw 'Missing the required parameter "threadId" when calling getChatsThreadMessages';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/threads/{threadId}/messages', 
			'GET', 
			{ 'threadId': threadId },
			{ 'limit': opts['limit'],'before': opts['before'],'after': opts['after'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get messages by id(s) from a 1on1
	 * 
	 * @param {String} userId userId
	 * @param {String} messageIds messageIds, comma separated
	 * getChatsUserMessage is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getChatsUserMessage(userId, messageIds) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getChatsUserMessage';
		}
		// verify the required parameter 'messageIds' is set
		if (messageIds === undefined || messageIds === null) {
			throw 'Missing the required parameter "messageIds" when calling getChatsUserMessage';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/users/{userId}/messages/{messageIds}', 
			'GET', 
			{ 'userId': userId,'messageIds': messageIds },
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
	 * Get 1on1 History between a user
	 * 
	 * @param {String} userId userId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.limit The maximum number of messages to retrieve
	 * @param {String} opts.before The cutoff date for messages to retrieve
	 * @param {String} opts.after The beginning date for messages to retrieve
	 * getChatsUserMessages is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getChatsUserMessages(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getChatsUserMessages';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/users/{userId}/messages', 
			'GET', 
			{ 'userId': userId },
			{ 'limit': opts['limit'],'before': opts['before'],'after': opts['after'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a user's chat settings
	 * 
	 * @param {String} userId User ID
	 * getChatsUserSettings is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getChatsUserSettings(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getChatsUserSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/users/{userId}/settings', 
			'GET', 
			{ 'userId': userId },
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
	 * Set properties for a room
	 * 
	 * @param {String} roomJid roomJid
	 * @param {Object} body Room properties
	 * patchChatsRoom is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchChatsRoom(roomJid, body) { 
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null) {
			throw 'Missing the required parameter "roomJid" when calling patchChatsRoom';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchChatsRoom';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/rooms/{roomJid}', 
			'PATCH', 
			{ 'roomJid': roomJid },
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
	 * Edit a message in a room
	 * 
	 * @param {String} roomJid roomId
	 * @param {String} messageId messageId
	 * @param {Object} body messageBody
	 * patchChatsRoomMessage is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchChatsRoomMessage(roomJid, messageId, body) { 
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null) {
			throw 'Missing the required parameter "roomJid" when calling patchChatsRoomMessage';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling patchChatsRoomMessage';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchChatsRoomMessage';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/rooms/{roomJid}/messages/{messageId}', 
			'PATCH', 
			{ 'roomJid': roomJid,'messageId': messageId },
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
	 * Patch Chat Settings.
	 * 
	 * @param {Object} body Chat
	 */
	patchChatsSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchChatsSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/settings', 
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
	 * Edit a message to a user
	 * 
	 * @param {String} userId userId
	 * @param {String} messageId messageId
	 * @param {Object} body message body
	 * patchChatsUserMessage is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchChatsUserMessage(userId, messageId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling patchChatsUserMessage';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling patchChatsUserMessage';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchChatsUserMessage';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/users/{userId}/messages/{messageId}', 
			'PATCH', 
			{ 'userId': userId,'messageId': messageId },
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
	 * Update a user's chat settings
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body 
	 * patchChatsUserSettings is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchChatsUserSettings(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling patchChatsUserSettings';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchChatsUserSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/users/{userId}/settings', 
			'PATCH', 
			{ 'userId': userId },
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
	 * Send a message to a room
	 * 
	 * @param {String} roomJid roomId
	 * @param {Object} body messageBody
	 * postChatsRoomMessages is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postChatsRoomMessages(roomJid, body) { 
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null) {
			throw 'Missing the required parameter "roomJid" when calling postChatsRoomMessages';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postChatsRoomMessages';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/rooms/{roomJid}/messages', 
			'POST', 
			{ 'roomJid': roomJid },
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
	 * Join a room
	 * 
	 * @param {String} roomJid roomJid
	 * @param {String} userId userId
	 * postChatsRoomParticipant is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postChatsRoomParticipant(roomJid, userId) { 
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null) {
			throw 'Missing the required parameter "roomJid" when calling postChatsRoomParticipant';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling postChatsRoomParticipant';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/rooms/{roomJid}/participants/{userId}', 
			'POST', 
			{ 'roomJid': roomJid,'userId': userId },
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
	 * Add pinned messages for a room, up to a maximum of 5 pinned messages
	 * 
	 * @param {String} roomJid roomJid
	 * @param {Object} body Pinned Message Ids
	 * postChatsRoomPinnedmessages is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postChatsRoomPinnedmessages(roomJid, body) { 
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null) {
			throw 'Missing the required parameter "roomJid" when calling postChatsRoomPinnedmessages';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postChatsRoomPinnedmessages';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/rooms/{roomJid}/pinnedmessages', 
			'POST', 
			{ 'roomJid': roomJid },
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
	 * Create an adhoc room
	 * 
	 * @param {Object} body Room properties
	 * postChatsRooms is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postChatsRooms(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postChatsRooms';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/rooms', 
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
	 * Send a message to a user
	 * 
	 * @param {String} userId userId
	 * @param {Object} body message body
	 * postChatsUserMessages is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postChatsUserMessages(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling postChatsUserMessages';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postChatsUserMessages';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/users/{userId}/messages', 
			'POST', 
			{ 'userId': userId },
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
	 * Update Chat Settings.
	 * 
	 * @param {Object} body Chat
	 */
	putChatsSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putChatsSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/settings', 
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

}


export default ChatApi;
