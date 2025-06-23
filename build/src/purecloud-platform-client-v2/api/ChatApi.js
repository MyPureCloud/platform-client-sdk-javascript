import ApiClient from '../ApiClient.js';


class ChatApi {
	/**
	 * Chat service.
	 * @module purecloud-platform-client-v2/api/ChatApi
	 * @version 225.0.0
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
	 */
	deleteChatsRoomMessage(roomJid, messageId) { 
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null || roomJid === '') {
			throw 'Missing the required parameter "roomJid" when calling deleteChatsRoomMessage';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null || messageId === '') {
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
	 * Remove a pinned message from a room
	 * 
	 * @param {String} roomJid roomJid
	 * @param {String} pinnedMessageId pinnedMessageId
	 */
	deleteChatsRoomMessagesPin(roomJid, pinnedMessageId) { 
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null || roomJid === '') {
			throw 'Missing the required parameter "roomJid" when calling deleteChatsRoomMessagesPin';
		}
		// verify the required parameter 'pinnedMessageId' is set
		if (pinnedMessageId === undefined || pinnedMessageId === null || pinnedMessageId === '') {
			throw 'Missing the required parameter "pinnedMessageId" when calling deleteChatsRoomMessagesPin';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/rooms/{roomJid}/messages/pins/{pinnedMessageId}', 
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
	 * Remove a user from a room.
	 * 
	 * @param {String} roomJid roomJid
	 * @param {String} userId userId
	 */
	deleteChatsRoomParticipant(roomJid, userId) { 
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null || roomJid === '') {
			throw 'Missing the required parameter "roomJid" when calling deleteChatsRoomParticipant';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
	 * Delete a message to a user
	 * 
	 * @param {String} userId userId
	 * @param {String} messageId messageId
	 */
	deleteChatsUserMessage(userId, messageId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling deleteChatsUserMessage';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null || messageId === '') {
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
	 * Remove a pinned message from a 1on1
	 * 
	 * @param {String} userId userId
	 * @param {String} pinnedMessageId pinnedMessageId
	 */
	deleteChatsUserMessagesPin(userId, pinnedMessageId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling deleteChatsUserMessagesPin';
		}
		// verify the required parameter 'pinnedMessageId' is set
		if (pinnedMessageId === undefined || pinnedMessageId === null || pinnedMessageId === '') {
			throw 'Missing the required parameter "pinnedMessageId" when calling deleteChatsUserMessagesPin';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/users/{userId}/messages/pins/{pinnedMessageId}', 
			'DELETE', 
			{ 'userId': userId,'pinnedMessageId': pinnedMessageId },
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
	 */
	getChatsMessage(messageId) { 
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null || messageId === '') {
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
	 */
	getChatsRoom(roomJid) { 
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null || roomJid === '') {
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
	 */
	getChatsRoomMessage(roomJid, messageIds) { 
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null || roomJid === '') {
			throw 'Missing the required parameter "roomJid" when calling getChatsRoomMessage';
		}
		// verify the required parameter 'messageIds' is set
		if (messageIds === undefined || messageIds === null || messageIds === '') {
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
	 */
	getChatsRoomMessages(roomJid, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null || roomJid === '') {
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
	 * Get a room participant
	 * 
	 * @param {String} roomJid roomJid
	 * @param {String} participantJid participantJid
	 */
	getChatsRoomParticipant(roomJid, participantJid) { 
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null || roomJid === '') {
			throw 'Missing the required parameter "roomJid" when calling getChatsRoomParticipant';
		}
		// verify the required parameter 'participantJid' is set
		if (participantJid === undefined || participantJid === null || participantJid === '') {
			throw 'Missing the required parameter "participantJid" when calling getChatsRoomParticipant';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/rooms/{roomJid}/participants/{participantJid}', 
			'GET', 
			{ 'roomJid': roomJid,'participantJid': participantJid },
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
	 * Get room participants in a room
	 * 
	 * @param {String} roomJid roomJid
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.notify Whether to get users to notify
	 */
	getChatsRoomParticipants(roomJid, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null || roomJid === '') {
			throw 'Missing the required parameter "roomJid" when calling getChatsRoomParticipants';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/rooms/{roomJid}/participants', 
			'GET', 
			{ 'roomJid': roomJid },
			{ 'notify': opts['notify'] },
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
	 */
	getChatsThreadMessages(threadId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'threadId' is set
		if (threadId === undefined || threadId === null || threadId === '') {
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
	 * Get information for a 1on1
	 * 
	 * @param {String} userId userId
	 */
	getChatsUser(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getChatsUser';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/users/{userId}', 
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
	 * Get messages by id(s) from a 1on1
	 * 
	 * @param {String} userId userId
	 * @param {String} messageIds messageIds, comma separated
	 */
	getChatsUserMessage(userId, messageIds) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getChatsUserMessage';
		}
		// verify the required parameter 'messageIds' is set
		if (messageIds === undefined || messageIds === null || messageIds === '') {
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
	 */
	getChatsUserMessages(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
	 */
	getChatsUserSettings(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
	 * Get a user's chat settings
	 * 
	 */
	getChatsUsersMeSettings() { 

		return this.apiClient.callApi(
			'/api/v2/chats/users/me/settings', 
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
	 * Set properties for a room
	 * 
	 * @param {String} roomJid roomJid
	 * @param {Object} body Room properties
	 */
	patchChatsRoom(roomJid, body) { 
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null || roomJid === '') {
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
	 */
	patchChatsRoomMessage(roomJid, messageId, body) { 
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null || roomJid === '') {
			throw 'Missing the required parameter "roomJid" when calling patchChatsRoomMessage';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null || messageId === '') {
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
	 */
	patchChatsUserMessage(userId, messageId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling patchChatsUserMessage';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null || messageId === '') {
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
	 */
	patchChatsUserSettings(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
	 * Update a user's chat settings
	 * 
	 * @param {Object} body 
	 */
	patchChatsUsersMeSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchChatsUsersMeSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/users/me/settings', 
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
	 * Send a message to a room
	 * 
	 * @param {String} roomJid roomId
	 * @param {Object} body messageBody
	 */
	postChatsRoomMessages(roomJid, body) { 
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null || roomJid === '') {
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
	 * Add pinned messages for a room, up to a maximum of 5 pinned messages
	 * 
	 * @param {String} roomJid roomJid
	 * @param {Object} body Pinned Message Ids
	 */
	postChatsRoomMessagesPins(roomJid, body) { 
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null || roomJid === '') {
			throw 'Missing the required parameter "roomJid" when calling postChatsRoomMessagesPins';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postChatsRoomMessagesPins';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/rooms/{roomJid}/messages/pins', 
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
	 */
	postChatsRoomParticipant(roomJid, userId) { 
		// verify the required parameter 'roomJid' is set
		if (roomJid === undefined || roomJid === null || roomJid === '') {
			throw 'Missing the required parameter "roomJid" when calling postChatsRoomParticipant';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
	 * Create an adhoc room
	 * 
	 * @param {Object} body Room properties
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
	 */
	postChatsUserMessages(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
	 * Add pinned messages for a 1on1, up to a maximum of 5 pinned messages
	 * 
	 * @param {String} userId userId
	 * @param {Object} body Pinned Message Ids
	 */
	postChatsUserMessagesPins(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling postChatsUserMessagesPins';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postChatsUserMessagesPins';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/users/{userId}/messages/pins', 
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
	 * Update reactions to a message
	 * 
	 * @param {String} messageId messageId
	 * @param {Object} body reactionUpdate
	 */
	putChatsMessageReactions(messageId, body) { 
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null || messageId === '') {
			throw 'Missing the required parameter "messageId" when calling putChatsMessageReactions';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putChatsMessageReactions';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/messages/{messageId}/reactions', 
			'PUT', 
			{ 'messageId': messageId },
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
