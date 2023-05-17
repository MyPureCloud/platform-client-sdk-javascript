import ApiClient from '../ApiClient.js';


class WebChatApi {
	/**
	 * WebChat service.
	 * @module purecloud-platform-client-v2/api/WebChatApi
	 * @version 168.2.0
	 */

	/**
	 * Constructs a new WebChatApi. 
	 * @alias module:purecloud-platform-client-v2/api/WebChatApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a WebChat deployment
	 * 
	 * @param {String} deploymentId Deployment Id
     	 * @deprecated
	 */
	deleteWebchatDeployment(deploymentId) { 
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null) {
			throw 'Missing the required parameter "deploymentId" when calling deleteWebchatDeployment';
		}

		return this.apiClient.callApi(
			'/api/v2/webchat/deployments/{deploymentId}', 
			'DELETE', 
			{ 'deploymentId': deploymentId },
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
	 * Remove a member from a chat conversation
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} memberId memberId
	 */
	deleteWebchatGuestConversationMember(conversationId, memberId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling deleteWebchatGuestConversationMember';
		}
		// verify the required parameter 'memberId' is set
		if (memberId === undefined || memberId === null) {
			throw 'Missing the required parameter "memberId" when calling deleteWebchatGuestConversationMember';
		}

		return this.apiClient.callApi(
			'/api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}', 
			'DELETE', 
			{ 'conversationId': conversationId,'memberId': memberId },
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
	 * Remove WebChat deployment settings
	 * 
	 */
	deleteWebchatSettings() { 

		return this.apiClient.callApi(
			'/api/v2/webchat/settings', 
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
	 * Get a WebChat deployment
	 * 
	 * @param {String} deploymentId Deployment Id
     	 * @deprecated
	 */
	getWebchatDeployment(deploymentId) { 
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null) {
			throw 'Missing the required parameter "deploymentId" when calling getWebchatDeployment';
		}

		return this.apiClient.callApi(
			'/api/v2/webchat/deployments/{deploymentId}', 
			'GET', 
			{ 'deploymentId': deploymentId },
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
	 * List WebChat deployments
	 * 
     	 * @deprecated
	 */
	getWebchatDeployments() { 

		return this.apiClient.callApi(
			'/api/v2/webchat/deployments', 
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
	 * Get a media request in the conversation
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} mediaRequestId mediaRequestId
	 */
	getWebchatGuestConversationMediarequest(conversationId, mediaRequestId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getWebchatGuestConversationMediarequest';
		}
		// verify the required parameter 'mediaRequestId' is set
		if (mediaRequestId === undefined || mediaRequestId === null) {
			throw 'Missing the required parameter "mediaRequestId" when calling getWebchatGuestConversationMediarequest';
		}

		return this.apiClient.callApi(
			'/api/v2/webchat/guest/conversations/{conversationId}/mediarequests/{mediaRequestId}', 
			'GET', 
			{ 'conversationId': conversationId,'mediaRequestId': mediaRequestId },
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
	 * Get all media requests to the guest in the conversation
	 * 
	 * @param {String} conversationId conversationId
	 */
	getWebchatGuestConversationMediarequests(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getWebchatGuestConversationMediarequests';
		}

		return this.apiClient.callApi(
			'/api/v2/webchat/guest/conversations/{conversationId}/mediarequests', 
			'GET', 
			{ 'conversationId': conversationId },
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
	 * Get a web chat conversation member
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} memberId memberId
	 */
	getWebchatGuestConversationMember(conversationId, memberId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getWebchatGuestConversationMember';
		}
		// verify the required parameter 'memberId' is set
		if (memberId === undefined || memberId === null) {
			throw 'Missing the required parameter "memberId" when calling getWebchatGuestConversationMember';
		}

		return this.apiClient.callApi(
			'/api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}', 
			'GET', 
			{ 'conversationId': conversationId,'memberId': memberId },
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
	 * Get the members of a chat conversation.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The number of entries to return per page, or omitted for the default. (default to 25)
	 * @param {Number} opts.pageNumber The page number to return, or omitted for the first page. (default to 1)
	 * @param {Boolean} opts.excludeDisconnectedMembers If true, the results will not contain members who have a DISCONNECTED state. (default to false)
	 */
	getWebchatGuestConversationMembers(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getWebchatGuestConversationMembers';
		}

		return this.apiClient.callApi(
			'/api/v2/webchat/guest/conversations/{conversationId}/members', 
			'GET', 
			{ 'conversationId': conversationId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'excludeDisconnectedMembers': opts['excludeDisconnectedMembers'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a web chat conversation message
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} messageId messageId
	 */
	getWebchatGuestConversationMessage(conversationId, messageId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getWebchatGuestConversationMessage';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling getWebchatGuestConversationMessage';
		}

		return this.apiClient.callApi(
			'/api/v2/webchat/guest/conversations/{conversationId}/messages/{messageId}', 
			'GET', 
			{ 'conversationId': conversationId,'messageId': messageId },
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
	 * Get the messages of a chat conversation.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after If available, get the messages chronologically after the id of this message
	 * @param {String} opts.before If available, get the messages chronologically before the id of this message
	 * @param {Object} opts.sortOrder Sort order (default to ascending)
	 * @param {Number} opts.maxResults Limit the returned number of messages, up to a maximum of 100 (default to 100)
	 */
	getWebchatGuestConversationMessages(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getWebchatGuestConversationMessages';
		}

		return this.apiClient.callApi(
			'/api/v2/webchat/guest/conversations/{conversationId}/messages', 
			'GET', 
			{ 'conversationId': conversationId },
			{ 'after': opts['after'],'before': opts['before'],'sortOrder': opts['sortOrder'],'maxResults': opts['maxResults'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get WebChat deployment settings
	 * 
	 */
	getWebchatSettings() { 

		return this.apiClient.callApi(
			'/api/v2/webchat/settings', 
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
	 * Update a media request in the conversation, setting the state to ACCEPTED/DECLINED/ERRORED
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} mediaRequestId mediaRequestId
	 * @param {Object} body Request
	 */
	patchWebchatGuestConversationMediarequest(conversationId, mediaRequestId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchWebchatGuestConversationMediarequest';
		}
		// verify the required parameter 'mediaRequestId' is set
		if (mediaRequestId === undefined || mediaRequestId === null) {
			throw 'Missing the required parameter "mediaRequestId" when calling patchWebchatGuestConversationMediarequest';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWebchatGuestConversationMediarequest';
		}

		return this.apiClient.callApi(
			'/api/v2/webchat/guest/conversations/{conversationId}/mediarequests/{mediaRequestId}', 
			'PATCH', 
			{ 'conversationId': conversationId,'mediaRequestId': mediaRequestId },
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
	 * Create WebChat deployment
	 * 
	 * @param {Object} body Deployment
     	 * @deprecated
	 */
	postWebchatDeployments(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWebchatDeployments';
		}

		return this.apiClient.callApi(
			'/api/v2/webchat/deployments', 
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
	 * Send a message in a chat conversation.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} memberId memberId
	 * @param {Object} body Message
	 */
	postWebchatGuestConversationMemberMessages(conversationId, memberId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postWebchatGuestConversationMemberMessages';
		}
		// verify the required parameter 'memberId' is set
		if (memberId === undefined || memberId === null) {
			throw 'Missing the required parameter "memberId" when calling postWebchatGuestConversationMemberMessages';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWebchatGuestConversationMemberMessages';
		}

		return this.apiClient.callApi(
			'/api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}/messages', 
			'POST', 
			{ 'conversationId': conversationId,'memberId': memberId },
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
	 * Send a typing-indicator in a chat conversation.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} memberId memberId
	 */
	postWebchatGuestConversationMemberTyping(conversationId, memberId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postWebchatGuestConversationMemberTyping';
		}
		// verify the required parameter 'memberId' is set
		if (memberId === undefined || memberId === null) {
			throw 'Missing the required parameter "memberId" when calling postWebchatGuestConversationMemberTyping';
		}

		return this.apiClient.callApi(
			'/api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}/typing', 
			'POST', 
			{ 'conversationId': conversationId,'memberId': memberId },
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
	 * Create an ACD chat conversation from an external customer.
	 * This endpoint will create a new ACD Chat conversation under the specified Chat Deployment.  The conversation will begin with a guest member in it (with a role=CUSTOMER) according to the customer information that is supplied. If the guest member is authenticated, the memberAuthToken field should include his JWT as generated by the POST /api/v2/signeddata resource; if the guest member is anonymous (and the Deployment permits it) this field can be omitted.  The returned data includes the IDs of the conversation created, along with a newly-create JWT token that you can supply to all future endpoints as authentication to perform operations against that conversation. After successfully creating a conversation, you should connect a websocket to the event stream named in the eventStreamUri field of the response; the conversation is not routed until the event stream is attached.
	 * @param {Object} body CreateConversationRequest
	 */
	postWebchatGuestConversations(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWebchatGuestConversations';
		}

		return this.apiClient.callApi(
			'/api/v2/webchat/guest/conversations', 
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
	 * Update a WebChat deployment
	 * 
	 * @param {String} deploymentId Deployment Id
	 * @param {Object} body Deployment
     	 * @deprecated
	 */
	putWebchatDeployment(deploymentId, body) { 
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null) {
			throw 'Missing the required parameter "deploymentId" when calling putWebchatDeployment';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putWebchatDeployment';
		}

		return this.apiClient.callApi(
			'/api/v2/webchat/deployments/{deploymentId}', 
			'PUT', 
			{ 'deploymentId': deploymentId },
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
	 * Update WebChat deployment settings
	 * 
	 * @param {Object} body webChatSettings
	 */
	putWebchatSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putWebchatSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/webchat/settings', 
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


export default WebChatApi;
