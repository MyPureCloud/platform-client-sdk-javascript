import ApiClient from '../ApiClient.js';


class ConversationsApi {
	/**
	 * Conversations service.
	 * @module purecloud-platform-client-v2/api/ConversationsApi
	 * @version 126.1.0
	 */

	/**
	 * Constructs a new ConversationsApi. 
	 * @alias module:purecloud-platform-client-v2/api/ConversationsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete/cancel an async request
	 * 
	 * @param {String} jobId jobId
	 */
	deleteAnalyticsConversationsDetailsJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
			throw 'Missing the required parameter "jobId" when calling deleteAnalyticsConversationsDetailsJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/details/jobs/{jobId}', 
			'DELETE', 
			{ 'jobId': jobId }, 
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
	 * Delete a code used to add a communication to this participant
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {String} addCommunicationCode addCommunicationCode
	 */
	deleteConversationParticipantCode(conversationId, participantId, addCommunicationCode) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling deleteConversationParticipantCode';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling deleteConversationParticipantCode';
		}
		// verify the required parameter 'addCommunicationCode' is set
		if (addCommunicationCode === undefined || addCommunicationCode === null) {
			throw 'Missing the required parameter "addCommunicationCode" when calling deleteConversationParticipantCode';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}/codes/{addCommunicationCode}', 
			'DELETE', 
			{ 'conversationId': conversationId,'participantId': participantId,'addCommunicationCode': addCommunicationCode }, 
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
	 * Remove flagged reason from conversation participant.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 */
	deleteConversationParticipantFlaggedreason(conversationId, participantId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling deleteConversationParticipantFlaggedreason';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling deleteConversationParticipantFlaggedreason';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}/flaggedreason', 
			'DELETE', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Cancel the transfer
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 */
	deleteConversationsCallParticipantConsult(conversationId, participantId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling deleteConversationsCallParticipantConsult';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling deleteConversationsCallParticipantConsult';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult', 
			'DELETE', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Delete attachment from draft
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} attachmentId attachmentId
	 */
	deleteConversationsEmailMessagesDraftAttachment(conversationId, attachmentId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling deleteConversationsEmailMessagesDraftAttachment';
		}
		// verify the required parameter 'attachmentId' is set
		if (attachmentId === undefined || attachmentId === null) {
			throw 'Missing the required parameter "attachmentId" when calling deleteConversationsEmailMessagesDraftAttachment';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/messages/draft/attachments/{attachmentId}', 
			'DELETE', 
			{ 'conversationId': conversationId,'attachmentId': attachmentId }, 
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
	 * Delete a Facebook messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 */
	deleteConversationsMessagingIntegrationsFacebookIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling deleteConversationsMessagingIntegrationsFacebookIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/facebook/{integrationId}', 
			'DELETE', 
			{ 'integrationId': integrationId }, 
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
	 * Delete a LINE messenger integration
	 * 
	 * @param {String} integrationId Integration ID
	 */
	deleteConversationsMessagingIntegrationsLineIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling deleteConversationsMessagingIntegrationsLineIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/line/{integrationId}', 
			'DELETE', 
			{ 'integrationId': integrationId }, 
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
	 * Delete an Open messaging integration
	 * See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.
	 * @param {String} integrationId Integration ID
	 */
	deleteConversationsMessagingIntegrationsOpenIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling deleteConversationsMessagingIntegrationsOpenIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/open/{integrationId}', 
			'DELETE', 
			{ 'integrationId': integrationId }, 
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
	 * Delete a Twitter messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 */
	deleteConversationsMessagingIntegrationsTwitterIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling deleteConversationsMessagingIntegrationsTwitterIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/twitter/{integrationId}', 
			'DELETE', 
			{ 'integrationId': integrationId }, 
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
	 * Delete a WhatsApp messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 */
	deleteConversationsMessagingIntegrationsWhatsappIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling deleteConversationsMessagingIntegrationsWhatsappIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/whatsapp/{integrationId}', 
			'DELETE', 
			{ 'integrationId': integrationId }, 
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
	 * Get a conversation by id
	 * 
	 * @param {String} conversationId conversationId
	 */
	getAnalyticsConversationDetails(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getAnalyticsConversationDetails';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/{conversationId}/details', 
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
	 * Gets multiple conversations by id
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.id Comma-separated conversation ids
	 */
	getAnalyticsConversationsDetails(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/details', 
			'GET', 
			{  }, 
			{ 'id': this.apiClient.buildCollectionParam(opts['id'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get status for async query for conversation details
	 * 
	 * @param {String} jobId jobId
	 */
	getAnalyticsConversationsDetailsJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsConversationsDetailsJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/details/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId }, 
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
	 * Fetch a page of results for an async query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page)
	 * @param {Number} opts.pageSize The desired maximum number of results
	 */
	getAnalyticsConversationsDetailsJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsConversationsDetailsJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/details/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId }, 
			{ 'cursor': opts['cursor'],'pageSize': opts['pageSize'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Lookup the datalake availability date and time
	 * 
	 */
	getAnalyticsConversationsDetailsJobsAvailability() { 

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/details/jobs/availability', 
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
	 * Get conversation
	 * 
	 * @param {String} conversationId conversation ID
	 */
	getConversation(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversation';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}', 
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
	 * Fetch info on a secure session
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {String} secureSessionId secure IVR session ID
	 */
	getConversationParticipantSecureivrsession(conversationId, participantId, secureSessionId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationParticipantSecureivrsession';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling getConversationParticipantSecureivrsession';
		}
		// verify the required parameter 'secureSessionId' is set
		if (secureSessionId === undefined || secureSessionId === null) {
			throw 'Missing the required parameter "secureSessionId" when calling getConversationParticipantSecureivrsession';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions/{secureSessionId}', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId,'secureSessionId': secureSessionId }, 
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
	 * Get a list of secure sessions for this participant.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 */
	getConversationParticipantSecureivrsessions(conversationId, participantId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationParticipantSecureivrsessions';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling getConversationParticipantSecureivrsessions';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Get the wrap-up for this conversation participant. 
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates if the wrap-up code is provisional. (default to false)
	 */
	getConversationParticipantWrapup(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationParticipantWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling getConversationParticipantWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}/wrapup', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
			{ 'provisional': opts['provisional'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get list of wrapup codes for this conversation participant
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 */
	getConversationParticipantWrapupcodes(conversationId, participantId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationParticipantWrapupcodes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling getConversationParticipantWrapupcodes';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}/wrapupcodes', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Get active conversations for the logged in user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.communicationType Call or Chat communication filtering
	 */
	getConversations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations', 
			'GET', 
			{  }, 
			{ 'communicationType': opts['communicationType'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get call conversation
	 * 
	 * @param {String} conversationId conversationId
	 */
	getConversationsCall(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsCall';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}', 
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
	 * Get the wrap-up for this conversation participant. 
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates if the wrap-up code is provisional. (default to false)
	 */
	getConversationsCallParticipantWrapup(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsCallParticipantWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling getConversationsCallParticipantWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapup', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
			{ 'provisional': opts['provisional'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get list of wrapup codes for this conversation participant
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 */
	getConversationsCallParticipantWrapupcodes(conversationId, participantId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsCallParticipantWrapupcodes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling getConversationsCallParticipantWrapupcodes';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapupcodes', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Get callback conversation
	 * 
	 * @param {String} conversationId conversationId
	 */
	getConversationsCallback(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsCallback';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/callbacks/{conversationId}', 
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
	 * Get the wrap-up for this conversation participant. 
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates if the wrap-up code is provisional. (default to false)
	 */
	getConversationsCallbackParticipantWrapup(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsCallbackParticipantWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling getConversationsCallbackParticipantWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapup', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
			{ 'provisional': opts['provisional'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get list of wrapup codes for this conversation participant
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 */
	getConversationsCallbackParticipantWrapupcodes(conversationId, participantId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsCallbackParticipantWrapupcodes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling getConversationsCallbackParticipantWrapupcodes';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapupcodes', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Get active callback conversations for the logged in user
	 * 
	 */
	getConversationsCallbacks() { 

		return this.apiClient.callApi(
			'/api/v2/conversations/callbacks', 
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
	 * Get active call conversations for the logged in user
	 * 
	 */
	getConversationsCalls() { 

		return this.apiClient.callApi(
			'/api/v2/conversations/calls', 
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
	 * Get call history
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size, maximum 50 (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.interval Interval string; format is ISO-8601. Separate start and end times with forward slash &#39;/&#39;
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 */
	getConversationsCallsHistory(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/history', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'interval': opts['interval'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the maximum number of participants that this user can have on a conference
	 * 
	 */
	getConversationsCallsMaximumconferenceparties() { 

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/maximumconferenceparties', 
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
	 * Get chat conversation
	 * 
	 * @param {String} conversationId conversationId
	 */
	getConversationsChat(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsChat';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/chats/{conversationId}', 
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
	 * Get a web chat conversation message
	 * The current user must be involved with the conversation to get its messages.
	 * @param {String} conversationId conversationId
	 * @param {String} messageId messageId
	 */
	getConversationsChatMessage(conversationId, messageId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsChatMessage';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling getConversationsChatMessage';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/chats/{conversationId}/messages/{messageId}', 
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
	 * The current user must be involved with the conversation to get its messages.
	 * @param {String} conversationId conversationId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after If specified, get the messages chronologically after the id of this message
	 * @param {String} opts.before If specified, get the messages chronologically before the id of this message
	 * @param {Object} opts.sortOrder Sort order (default to ascending)
	 * @param {Number} opts.maxResults Limit the returned number of messages, up to a maximum of 100 (default to 100)
	 */
	getConversationsChatMessages(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsChatMessages';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/chats/{conversationId}/messages', 
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
	 * Get the wrap-up for this conversation participant. 
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates if the wrap-up code is provisional. (default to false)
	 */
	getConversationsChatParticipantWrapup(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsChatParticipantWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling getConversationsChatParticipantWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapup', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
			{ 'provisional': opts['provisional'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get list of wrapup codes for this conversation participant
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 */
	getConversationsChatParticipantWrapupcodes(conversationId, participantId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsChatParticipantWrapupcodes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling getConversationsChatParticipantWrapupcodes';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapupcodes', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Get active chat conversations for the logged in user
	 * 
	 */
	getConversationsChats() { 

		return this.apiClient.callApi(
			'/api/v2/conversations/chats', 
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
	 * Get cobrowse conversation
	 * 
	 * @param {String} conversationId conversationId
	 */
	getConversationsCobrowsesession(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsCobrowsesession';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/cobrowsesessions/{conversationId}', 
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
	 * Get the wrap-up for this conversation participant. 
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates if the wrap-up code is provisional. (default to false)
	 */
	getConversationsCobrowsesessionParticipantWrapup(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsCobrowsesessionParticipantWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling getConversationsCobrowsesessionParticipantWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapup', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
			{ 'provisional': opts['provisional'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get list of wrapup codes for this conversation participant
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 */
	getConversationsCobrowsesessionParticipantWrapupcodes(conversationId, participantId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsCobrowsesessionParticipantWrapupcodes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling getConversationsCobrowsesessionParticipantWrapupcodes';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapupcodes', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Get active cobrowse conversations for the logged in user
	 * 
	 */
	getConversationsCobrowsesessions() { 

		return this.apiClient.callApi(
			'/api/v2/conversations/cobrowsesessions', 
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
	 * Get email conversation
	 * 
	 * @param {String} conversationId conversationId
	 */
	getConversationsEmail(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsEmail';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}', 
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
	 * Get conversation message
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} messageId messageId
	 */
	getConversationsEmailMessage(conversationId, messageId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsEmailMessage';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling getConversationsEmailMessage';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/messages/{messageId}', 
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
	 * Get conversation messages
	 * 
	 * @param {String} conversationId conversationId
	 */
	getConversationsEmailMessages(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsEmailMessages';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/messages', 
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
	 * Get conversation draft reply
	 * 
	 * @param {String} conversationId conversationId
	 */
	getConversationsEmailMessagesDraft(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsEmailMessagesDraft';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/messages/draft', 
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
	 * Get the wrap-up for this conversation participant. 
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates if the wrap-up code is provisional. (default to false)
	 */
	getConversationsEmailParticipantWrapup(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsEmailParticipantWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling getConversationsEmailParticipantWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapup', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
			{ 'provisional': opts['provisional'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get list of wrapup codes for this conversation participant
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 */
	getConversationsEmailParticipantWrapupcodes(conversationId, participantId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsEmailParticipantWrapupcodes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling getConversationsEmailParticipantWrapupcodes';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapupcodes', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Get active email conversations for the logged in user
	 * 
	 */
	getConversationsEmails() { 

		return this.apiClient.callApi(
			'/api/v2/conversations/emails', 
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
	 * Get message conversation
	 * 
	 * @param {String} conversationId conversationId
	 */
	getConversationsMessage(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsMessage';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}', 
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
	 * Get media
	 * See https://developer.genesys.cloud/api/rest/v2/conversations/messaging-media-upload for example usage.
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {String} mediaId mediaId
	 */
	getConversationsMessageCommunicationMessagesMediaMediaId(conversationId, communicationId, mediaId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsMessageCommunicationMessagesMediaMediaId';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null) {
			throw 'Missing the required parameter "communicationId" when calling getConversationsMessageCommunicationMessagesMediaMediaId';
		}
		// verify the required parameter 'mediaId' is set
		if (mediaId === undefined || mediaId === null) {
			throw 'Missing the required parameter "mediaId" when calling getConversationsMessageCommunicationMessagesMediaMediaId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media/{mediaId}', 
			'GET', 
			{ 'conversationId': conversationId,'communicationId': communicationId,'mediaId': mediaId }, 
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
	 * Get message
	 * 
	 * @param {String} messageId messageId
	 */
	getConversationsMessageDetails(messageId) { 
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling getConversationsMessageDetails';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{messageId}/details', 
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
	 * Get conversation message
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} messageId messageId
	 */
	getConversationsMessageMessage(conversationId, messageId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsMessageMessage';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling getConversationsMessageMessage';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}/messages/{messageId}', 
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
	 * Get the wrap-up for this conversation participant. 
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates if the wrap-up code is provisional. (default to false)
	 */
	getConversationsMessageParticipantWrapup(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsMessageParticipantWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling getConversationsMessageParticipantWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}/participants/{participantId}/wrapup', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
			{ 'provisional': opts['provisional'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get list of wrapup codes for this conversation participant
	 * 
	 * @param {String} conversationId  conversationId
	 * @param {String} participantId participantId
	 */
	getConversationsMessageParticipantWrapupcodes(conversationId, participantId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getConversationsMessageParticipantWrapupcodes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling getConversationsMessageParticipantWrapupcodes';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}/participants/{participantId}/wrapupcodes', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Get active message conversations for the logged in user
	 * 
	 */
	getConversationsMessages() { 

		return this.apiClient.callApi(
			'/api/v2/conversations/messages', 
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
	 * Get Genesys Facebook App Id
	 * 
	 */
	getConversationsMessagingFacebookApp() { 

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/facebook/app', 
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
	 * Get a list of Integrations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @param {String} opts.supportedContentId Filter integrations returned based on the supported content ID
	 */
	getConversationsMessagingIntegrations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'supportedContent.id': opts['supportedContentId'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a list of Facebook Integrations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @param {String} opts.supportedContentId Filter integrations returned based on the supported content ID
	 */
	getConversationsMessagingIntegrationsFacebook(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/facebook', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'supportedContent.id': opts['supportedContentId'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a Facebook messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 */
	getConversationsMessagingIntegrationsFacebookIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getConversationsMessagingIntegrationsFacebookIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/facebook/{integrationId}', 
			'GET', 
			{ 'integrationId': integrationId }, 
			{ 'expand': opts['expand'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a list of LINE messenger Integrations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @param {String} opts.supportedContentId Filter integrations returned based on the supported content ID
	 */
	getConversationsMessagingIntegrationsLine(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/line', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'supportedContent.id': opts['supportedContentId'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a LINE messenger integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 */
	getConversationsMessagingIntegrationsLineIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getConversationsMessagingIntegrationsLineIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/line/{integrationId}', 
			'GET', 
			{ 'integrationId': integrationId }, 
			{ 'expand': opts['expand'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a list of Open messaging integrations
	 * See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @param {String} opts.supportedContentId Filter integrations returned based on the supported content ID
	 */
	getConversationsMessagingIntegrationsOpen(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/open', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'supportedContent.id': opts['supportedContentId'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get an Open messaging integration
	 * See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 */
	getConversationsMessagingIntegrationsOpenIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getConversationsMessagingIntegrationsOpenIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/open/{integrationId}', 
			'GET', 
			{ 'integrationId': integrationId }, 
			{ 'expand': opts['expand'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a list of Twitter Integrations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @param {String} opts.supportedContentId Filter integrations returned based on the supported content ID
	 */
	getConversationsMessagingIntegrationsTwitter(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/twitter', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'supportedContent.id': opts['supportedContentId'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a Twitter messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 */
	getConversationsMessagingIntegrationsTwitterIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getConversationsMessagingIntegrationsTwitterIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/twitter/{integrationId}', 
			'GET', 
			{ 'integrationId': integrationId }, 
			{ 'expand': opts['expand'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a list of WhatsApp Integrations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @param {String} opts.supportedContentId Filter integrations returned based on the supported content ID
	 */
	getConversationsMessagingIntegrationsWhatsapp(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/whatsapp', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'supportedContent.id': opts['supportedContentId'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a WhatsApp messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 */
	getConversationsMessagingIntegrationsWhatsappIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getConversationsMessagingIntegrationsWhatsappIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/whatsapp/{integrationId}', 
			'GET', 
			{ 'integrationId': integrationId }, 
			{ 'expand': opts['expand'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a list of Messaging Stickers
	 * 
	 * @param {String} messengerType Messenger Type
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getConversationsMessagingSticker(messengerType, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'messengerType' is set
		if (messengerType === undefined || messengerType === null) {
			throw 'Missing the required parameter "messengerType" when calling getConversationsMessagingSticker';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/stickers/{messengerType}', 
			'GET', 
			{ 'messengerType': messengerType }, 
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
	 * Get conversation threading window timeline for each messaging type
	 * Conversation messaging threading timeline is a setting defined for each messenger type in your organization. This setting will dictate whether a new message is added to the most recent existing conversation, or creates a new Conversation. If the existing Conversation is still in a connected state the threading timeline setting will never play a role. After the conversation is disconnected, if an inbound message is received or an outbound message is sent after the setting for threading timeline expires, a new conversation is created.
	 */
	getConversationsMessagingThreadingtimeline() { 

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/threadingtimeline', 
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
	 * Update a participant.
	 * Update conversation participant.
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} body Update request
	 */
	patchConversationParticipant(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationParticipant';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling patchConversationParticipant';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationParticipant';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Update the attributes on a conversation participant.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} body Participant attributes
	 */
	patchConversationParticipantAttributes(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationParticipantAttributes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling patchConversationParticipantAttributes';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationParticipantAttributes';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}/attributes', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Update a conversation by setting it&#39;s recording state, merging in other conversations to create a conference, or disconnecting all of the participants
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Conversation
	 */
	patchConversationsCall(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCall';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsCall';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}', 
			'PATCH', 
			{ 'conversationId': conversationId }, 
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
	 * Update conversation participant
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Participant request
	 */
	patchConversationsCallParticipant(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCallParticipant';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling patchConversationsCallParticipant';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsCallParticipant';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Update the attributes on a conversation participant.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Participant attributes
	 */
	patchConversationsCallParticipantAttributes(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCallParticipantAttributes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling patchConversationsCallParticipantAttributes';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsCallParticipantAttributes';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/attributes', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Update conversation participant&#39;s communication by disconnecting it.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Participant
	 */
	patchConversationsCallParticipantCommunication(conversationId, participantId, communicationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCallParticipantCommunication';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling patchConversationsCallParticipantCommunication';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null) {
			throw 'Missing the required parameter "communicationId" when calling patchConversationsCallParticipantCommunication';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsCallParticipantCommunication';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId }, 
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
	 * Change who can speak
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body new speak to
	 */
	patchConversationsCallParticipantConsult(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCallParticipantConsult';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling patchConversationsCallParticipantConsult';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsCallParticipantConsult';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Update a conversation by disconnecting all of the participants
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Conversation
	 */
	patchConversationsCallback(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCallback';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsCallback';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/callbacks/{conversationId}', 
			'PATCH', 
			{ 'conversationId': conversationId }, 
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
	 * Update conversation participant
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Participant
	 */
	patchConversationsCallbackParticipant(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCallbackParticipant';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling patchConversationsCallbackParticipant';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsCallbackParticipant';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/callbacks/{conversationId}/participants/{participantId}', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Update the attributes on a conversation participant.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Attributes
	 */
	patchConversationsCallbackParticipantAttributes(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCallbackParticipantAttributes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling patchConversationsCallbackParticipantAttributes';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsCallbackParticipantAttributes';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/attributes', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Update conversation participant&#39;s communication by disconnecting it.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Participant
	 */
	patchConversationsCallbackParticipantCommunication(conversationId, participantId, communicationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCallbackParticipantCommunication';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling patchConversationsCallbackParticipantCommunication';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null) {
			throw 'Missing the required parameter "communicationId" when calling patchConversationsCallbackParticipantCommunication';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsCallbackParticipantCommunication';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/communications/{communicationId}', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId }, 
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
	 * Update a conversation by disconnecting all of the participants
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Conversation
	 */
	patchConversationsChat(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsChat';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsChat';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/chats/{conversationId}', 
			'PATCH', 
			{ 'conversationId': conversationId }, 
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
	 * Update conversation participant
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Update request
	 */
	patchConversationsChatParticipant(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsChatParticipant';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling patchConversationsChatParticipant';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsChatParticipant';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/chats/{conversationId}/participants/{participantId}', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Update the attributes on a conversation participant.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Participant attributes
	 */
	patchConversationsChatParticipantAttributes(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsChatParticipantAttributes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling patchConversationsChatParticipantAttributes';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsChatParticipantAttributes';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/chats/{conversationId}/participants/{participantId}/attributes', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Update conversation participant&#39;s communication by disconnecting it.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Participant
	 */
	patchConversationsChatParticipantCommunication(conversationId, participantId, communicationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsChatParticipantCommunication';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling patchConversationsChatParticipantCommunication';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null) {
			throw 'Missing the required parameter "communicationId" when calling patchConversationsChatParticipantCommunication';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsChatParticipantCommunication';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId }, 
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
	 * Update a conversation by disconnecting all of the participants
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Conversation
	 */
	patchConversationsCobrowsesession(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCobrowsesession';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsCobrowsesession';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/cobrowsesessions/{conversationId}', 
			'PATCH', 
			{ 'conversationId': conversationId }, 
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
	 * Update conversation participant
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchConversationsCobrowsesessionParticipant(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCobrowsesessionParticipant';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling patchConversationsCobrowsesessionParticipant';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Update the attributes on a conversation participant.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchConversationsCobrowsesessionParticipantAttributes(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCobrowsesessionParticipantAttributes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling patchConversationsCobrowsesessionParticipantAttributes';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/attributes', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Update conversation participant&#39;s communication by disconnecting it.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Participant
	 */
	patchConversationsCobrowsesessionParticipantCommunication(conversationId, participantId, communicationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCobrowsesessionParticipantCommunication';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling patchConversationsCobrowsesessionParticipantCommunication';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null) {
			throw 'Missing the required parameter "communicationId" when calling patchConversationsCobrowsesessionParticipantCommunication';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsCobrowsesessionParticipantCommunication';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId }, 
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
	 * Update a conversation by disconnecting all of the participants
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Conversation
	 */
	patchConversationsEmail(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsEmail';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsEmail';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}', 
			'PATCH', 
			{ 'conversationId': conversationId }, 
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
	 * Update conversation participant
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Update request
	 */
	patchConversationsEmailParticipant(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsEmailParticipant';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling patchConversationsEmailParticipant';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsEmailParticipant';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/participants/{participantId}', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Update the attributes on a conversation participant.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Participant attributes
	 */
	patchConversationsEmailParticipantAttributes(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsEmailParticipantAttributes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling patchConversationsEmailParticipantAttributes';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsEmailParticipantAttributes';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/participants/{participantId}/attributes', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Update conversation participant&#39;s communication by disconnecting it.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Participant
	 */
	patchConversationsEmailParticipantCommunication(conversationId, participantId, communicationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsEmailParticipantCommunication';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling patchConversationsEmailParticipantCommunication';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null) {
			throw 'Missing the required parameter "communicationId" when calling patchConversationsEmailParticipantCommunication';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsEmailParticipantCommunication';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/participants/{participantId}/communications/{communicationId}', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId }, 
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
	 * Update a conversation by disconnecting all of the participants
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Conversation
	 */
	patchConversationsMessage(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsMessage';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsMessage';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}', 
			'PATCH', 
			{ 'conversationId': conversationId }, 
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
	 * Update conversation participant
	 * 
	 * @param {String} conversationId  conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchConversationsMessageParticipant(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsMessageParticipant';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling patchConversationsMessageParticipant';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}/participants/{participantId}', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Update the attributes on a conversation participant.
	 * 
	 * @param {String} conversationId  conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchConversationsMessageParticipantAttributes(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsMessageParticipantAttributes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling patchConversationsMessageParticipantAttributes';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}/participants/{participantId}/attributes', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Update conversation participant&#39;s communication by disconnecting it.
	 * 
	 * @param {String} conversationId  conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Participant
	 */
	patchConversationsMessageParticipantCommunication(conversationId, participantId, communicationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsMessageParticipantCommunication';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling patchConversationsMessageParticipantCommunication';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null) {
			throw 'Missing the required parameter "communicationId" when calling patchConversationsMessageParticipantCommunication';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsMessageParticipantCommunication';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}/participants/{participantId}/communications/{communicationId}', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId }, 
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
	 * Update Facebook messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body FacebookIntegrationUpdateRequest
	 */
	patchConversationsMessagingIntegrationsFacebookIntegrationId(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling patchConversationsMessagingIntegrationsFacebookIntegrationId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsMessagingIntegrationsFacebookIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/facebook/{integrationId}', 
			'PATCH', 
			{ 'integrationId': integrationId }, 
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
	 * Update an Open messaging integration
	 * See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.
	 * @param {String} integrationId Integration ID
	 * @param {Object} body OpenIntegrationUpdateRequest
	 */
	patchConversationsMessagingIntegrationsOpenIntegrationId(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling patchConversationsMessagingIntegrationsOpenIntegrationId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsMessagingIntegrationsOpenIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/open/{integrationId}', 
			'PATCH', 
			{ 'integrationId': integrationId }, 
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
	 * Update Twitter messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body TwitterIntegrationRequest
	 */
	patchConversationsMessagingIntegrationsTwitterIntegrationId(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling patchConversationsMessagingIntegrationsTwitterIntegrationId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsMessagingIntegrationsTwitterIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/twitter/{integrationId}', 
			'PATCH', 
			{ 'integrationId': integrationId }, 
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
	 * Update or activate a WhatsApp messaging integration.
	 * The following steps are required in order to fully activate a Whatsapp Integration: Initially, you will need to get an activation code by sending: an action set to Activate, and an authenticationMethod choosing from Sms or Voice. Finally, once you have been informed of an activation code on selected authenticationMethod, you will need to confirm the code by sending: an action set to Confirm, and the confirmationCode you have received from Whatsapp.
	 * @param {String} integrationId Integration ID
	 * @param {Object} body WhatsAppIntegrationUpdateRequest
	 */
	patchConversationsMessagingIntegrationsWhatsappIntegrationId(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling patchConversationsMessagingIntegrationsWhatsappIntegrationId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsMessagingIntegrationsWhatsappIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/whatsapp/{integrationId}', 
			'PATCH', 
			{ 'integrationId': integrationId }, 
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
	 * Index conversation properties
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body request
	 */
	postAnalyticsConversationDetailsProperties(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postAnalyticsConversationDetailsProperties';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsConversationDetailsProperties';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/{conversationId}/details/properties', 
			'POST', 
			{ 'conversationId': conversationId }, 
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
	 * Query for conversation aggregates
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsConversationsAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsConversationsAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/aggregates/query', 
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
	 * Query for conversation details asynchronously
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsConversationsDetailsJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsConversationsDetailsJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/details/jobs', 
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
	 * Query for conversation details
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsConversationsDetailsQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsConversationsDetailsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/details/query', 
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
	 * Attempts to manually assign a specified conversation to a specified user.  Ignores bullseye ring, PAR score, skills, and languages.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} body Targeted user
	 */
	postConversationAssign(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationAssign';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationAssign';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/assign', 
			'POST', 
			{ 'conversationId': conversationId }, 
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
	 * Performs a full conversation teardown. Issues disconnect requests for any connected media. Applies a system wrap-up code to any participants that are pending wrap-up. This is not intended to be the normal way of ending interactions but is available in the event of problems with the application to allow a resynchronization of state across all components. It is recommended that users submit a support case if they are relying on this endpoint systematically as there is likely something that needs investigation.
	 * 
	 * @param {String} conversationId conversation ID
	 */
	postConversationDisconnect(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationDisconnect';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/disconnect', 
			'POST', 
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
	 * Create a new callback for the specified participant on the conversation.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postConversationParticipantCallbacks(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationParticipantCallbacks';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling postConversationParticipantCallbacks';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}/callbacks', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Sends DTMF to the participant
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Digits
	 */
	postConversationParticipantDigits(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationParticipantDigits';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling postConversationParticipantDigits';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}/digits', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Replace this participant with the specified user and/or address
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} body Transfer request
	 */
	postConversationParticipantReplace(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationParticipantReplace';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling postConversationParticipantReplace';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationParticipantReplace';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}/replace', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Create secure IVR session. Only a participant in the conversation can invoke a secure IVR.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postConversationParticipantSecureivrsessions(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationParticipantSecureivrsessions';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling postConversationParticipantSecureivrsessions';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Place a new call as part of a callback conversation.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Conversation
	 */
	postConversationsCall(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCall';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsCall';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}', 
			'POST', 
			{ 'conversationId': conversationId }, 
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
	 * Listen in on the conversation from the point of view of a given participant while speaking to just the given participant.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 */
	postConversationsCallParticipantCoach(conversationId, participantId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCallParticipantCoach';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling postConversationsCallParticipantCoach';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/coach', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Initiate and update consult transfer
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Destination address &amp; initial speak to
	 */
	postConversationsCallParticipantConsult(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCallParticipantConsult';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling postConversationsCallParticipantConsult';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsCallParticipantConsult';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Listen in on the conversation from the point of view of a given participant.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 */
	postConversationsCallParticipantMonitor(conversationId, participantId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCallParticipantMonitor';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling postConversationsCallParticipantMonitor';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/monitor', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Replace this participant with the specified user and/or address
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Transfer request
	 */
	postConversationsCallParticipantReplace(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCallParticipantReplace';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling postConversationsCallParticipantReplace';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsCallParticipantReplace';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/replace', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Add participants to a conversation
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Conversation
	 */
	postConversationsCallParticipants(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCallParticipants';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsCallParticipants';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants', 
			'POST', 
			{ 'conversationId': conversationId }, 
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
	 * Replace this participant with the specified user and/or address
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Transfer request
	 */
	postConversationsCallbackParticipantReplace(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCallbackParticipantReplace';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling postConversationsCallbackParticipantReplace';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsCallbackParticipantReplace';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/replace', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Create a Callback
	 * 
	 * @param {Object} body Callback
	 */
	postConversationsCallbacks(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsCallbacks';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/callbacks', 
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
	 * Create a call conversation
	 * 
	 * @param {Object} body Call request
	 */
	postConversationsCalls(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsCalls';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls', 
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
	 * Send a message on behalf of a communication in a chat conversation.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Message
	 */
	postConversationsChatCommunicationMessages(conversationId, communicationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationsChatCommunicationMessages';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null) {
			throw 'Missing the required parameter "communicationId" when calling postConversationsChatCommunicationMessages';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsChatCommunicationMessages';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/chats/{conversationId}/communications/{communicationId}/messages', 
			'POST', 
			{ 'conversationId': conversationId,'communicationId': communicationId }, 
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
	 * Send a typing-indicator on behalf of a communication in a chat conversation.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 */
	postConversationsChatCommunicationTyping(conversationId, communicationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationsChatCommunicationTyping';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null) {
			throw 'Missing the required parameter "communicationId" when calling postConversationsChatCommunicationTyping';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/chats/{conversationId}/communications/{communicationId}/typing', 
			'POST', 
			{ 'conversationId': conversationId,'communicationId': communicationId }, 
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
	 * Replace this participant with the specified user and/or address
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Transfer request
	 */
	postConversationsChatParticipantReplace(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationsChatParticipantReplace';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling postConversationsChatParticipantReplace';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsChatParticipantReplace';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/chats/{conversationId}/participants/{participantId}/replace', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Create a web chat conversation
	 * 
	 * @param {Object} body Create web chat request
	 */
	postConversationsChats(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsChats';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/chats', 
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
	 * Replace this participant with the specified user and/or address
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postConversationsCobrowsesessionParticipantReplace(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCobrowsesessionParticipantReplace';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling postConversationsCobrowsesessionParticipantReplace';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/replace', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Send an email to an external conversation. An external conversation is one where the provider is not PureCloud based. This endpoint allows the sender of the external email to reply or send a new message to the existing conversation. The new message will be treated as part of the existing conversation and chained to it.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Send external email reply
	 */
	postConversationsEmailInboundmessages(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationsEmailInboundmessages';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsEmailInboundmessages';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/inboundmessages', 
			'POST', 
			{ 'conversationId': conversationId }, 
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
	 * Send an email reply
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Reply
	 */
	postConversationsEmailMessages(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationsEmailMessages';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsEmailMessages';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/messages', 
			'POST', 
			{ 'conversationId': conversationId }, 
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
	 * Copy attachments from an email message to the current draft.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Copy Attachment Request
	 */
	postConversationsEmailMessagesDraftAttachmentsCopy(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationsEmailMessagesDraftAttachmentsCopy';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsEmailMessagesDraftAttachmentsCopy';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/messages/draft/attachments/copy', 
			'POST', 
			{ 'conversationId': conversationId }, 
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
	 * Replace this participant with the specified user and/or address
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Transfer request
	 */
	postConversationsEmailParticipantReplace(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationsEmailParticipantReplace';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling postConversationsEmailParticipantReplace';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsEmailParticipantReplace';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/participants/{participantId}/replace', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Create an email conversation
	 * If the direction of the request is INBOUND, this will create an external conversation with a third party provider. If the direction of the the request is OUTBOUND, this will create a conversation to send outbound emails on behalf of a queue.
	 * @param {Object} body Create email request
	 */
	postConversationsEmails(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsEmails';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails', 
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
	 * Create Fax Conversation
	 * 
	 * @param {Object} body Fax
	 */
	postConversationsFaxes(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsFaxes';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/faxes', 
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
	 * Send message
	 * Send message on existing conversation/communication. Only one message body field can be accepted, per request. Example: 1 textBody, 1 mediaId, 1 stickerId, or 1 messageTemplate.
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Message
	 */
	postConversationsMessageCommunicationMessages(conversationId, communicationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationsMessageCommunicationMessages';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null) {
			throw 'Missing the required parameter "communicationId" when calling postConversationsMessageCommunicationMessages';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessageCommunicationMessages';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages', 
			'POST', 
			{ 'conversationId': conversationId,'communicationId': communicationId }, 
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
	 * Create media
	 * See https://developer.genesys.cloud/api/rest/v2/conversations/messaging-media-upload for example usage.
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 */
	postConversationsMessageCommunicationMessagesMedia(conversationId, communicationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationsMessageCommunicationMessagesMedia';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null) {
			throw 'Missing the required parameter "communicationId" when calling postConversationsMessageCommunicationMessagesMedia';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media', 
			'POST', 
			{ 'conversationId': conversationId,'communicationId': communicationId }, 
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
	 * Get messages in batch
	 * The path parameter [conversationId] should contain the conversationId of the conversation being filtered. The body should contain the messageId(s) of messages being requested. For example: [\&quot;a3069a33b-bbb1-4703-9d68-061d9e9db96e\&quot;, \&quot;55bc6be3-078c-4a49-a4e6-1e05776ed7e8\&quot;]
	 * @param {String} conversationId 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body messageIds
	 */
	postConversationsMessageMessagesBulk(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationsMessageMessagesBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}/messages/bulk', 
			'POST', 
			{ 'conversationId': conversationId }, 
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
	 * Replace this participant with the specified user and/or address
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Transfer request
	 */
	postConversationsMessageParticipantReplace(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postConversationsMessageParticipantReplace';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling postConversationsMessageParticipantReplace';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessageParticipantReplace';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}/participants/{participantId}/replace', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Create an outbound messaging conversation.
	 * If there is an existing conversation between the remote address and the address associated with the queue specified in createOutboundRequest then the result of this request depends on the state of that conversation and the useExistingConversation field of createOutboundRequest. If the existing conversation is in alerting or connected state, then the request will fail. If the existing conversation is disconnected but still within the conversation window then the request will fail unless useExistingConversation is set to true.
	 * @param {Object} body Create outbound messaging conversation
	 */
	postConversationsMessages(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessages';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages', 
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
	 * Send an agentless outbound message
	 * Send an agentlesss (api participant) outbound message using a client credential grant. In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least messaging scope. This will generate a new Conversation, if there is an existing active Conversation between the fromAddress and toAddress already, then this POST will fail.
	 * @param {Object} body Create agentless outbound messaging request
	 */
	postConversationsMessagesAgentless(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessagesAgentless';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/agentless', 
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
	 * Send an inbound Open Message
	 * Send an inbound message to an Open Messaging integration. In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least messaging scope. This will either generate a new Conversation, or be a part of an existing conversation. See https://developer.genesys.cloud/api/digital/openmessaging/ for example usage.
	 * @param {Object} body NormalizedMessage
	 */
	postConversationsMessagesInboundOpen(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessagesInboundOpen';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/inbound/open', 
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
	 * Create a Facebook Integration
	 * 
	 * @param {Object} body FacebookIntegrationRequest
	 */
	postConversationsMessagingIntegrationsFacebook(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessagingIntegrationsFacebook';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/facebook', 
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
	 * Create a LINE messenger Integration
	 * 
	 * @param {Object} body LineIntegrationRequest
	 */
	postConversationsMessagingIntegrationsLine(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessagingIntegrationsLine';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/line', 
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
	 * Create an Open messaging integration
	 * See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.
	 * @param {Object} body OpenIntegrationRequest
	 */
	postConversationsMessagingIntegrationsOpen(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessagingIntegrationsOpen';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/open', 
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
	 * Create a Twitter Integration
	 * 
	 * @param {Object} body TwitterIntegrationRequest
	 */
	postConversationsMessagingIntegrationsTwitter(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessagingIntegrationsTwitter';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/twitter', 
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
	 * Create a WhatsApp Integration
	 * You must be approved by WhatsApp to use this feature. Your approved e164-formatted phone number and valid WhatsApp certificate for your number are required. Your WhatsApp certificate must have valid base64 encoding. Please paste carefully and do not add any leading or trailing spaces. Do not alter any characters. An integration must be activated within 7 days of certificate generation. If you cannot complete the addition and activation of the number within 7 days, please obtain a new certificate before creating the integration. Integrations created with an invalid number or certificate may immediately incur additional integration fees. Please carefully enter your number and certificate as described.
	 * @param {Object} body WhatsAppIntegrationRequest
	 */
	postConversationsMessagingIntegrationsWhatsapp(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessagingIntegrationsWhatsapp';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/whatsapp', 
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
	 * Set flagged reason on conversation participant to indicate bad conversation quality.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 */
	putConversationParticipantFlaggedreason(conversationId, participantId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling putConversationParticipantFlaggedreason';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling putConversationParticipantFlaggedreason';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}/flaggedreason', 
			'PUT', 
			{ 'conversationId': conversationId,'participantId': participantId }, 
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
	 * Update the tags on a conversation.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} body Conversation Tags
	 */
	putConversationTags(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling putConversationTags';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationTags';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/tags', 
			'PUT', 
			{ 'conversationId': conversationId }, 
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
	 * Set uuiData to be sent on future commands.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body UUIData Request
	 */
	putConversationsCallParticipantCommunicationUuidata(conversationId, participantId, communicationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling putConversationsCallParticipantCommunicationUuidata';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null) {
			throw 'Missing the required parameter "participantId" when calling putConversationsCallParticipantCommunicationUuidata';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null) {
			throw 'Missing the required parameter "communicationId" when calling putConversationsCallParticipantCommunicationUuidata';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsCallParticipantCommunicationUuidata';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/uuidata', 
			'PUT', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId }, 
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
	 * Update conversation draft reply
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Draft
	 */
	putConversationsEmailMessagesDraft(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling putConversationsEmailMessagesDraft';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsEmailMessagesDraft';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/messages/draft', 
			'PUT', 
			{ 'conversationId': conversationId }, 
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
	 * Update a LINE messenger integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body LineIntegrationRequest
	 */
	putConversationsMessagingIntegrationsLineIntegrationId(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling putConversationsMessagingIntegrationsLineIntegrationId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsMessagingIntegrationsLineIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/line/{integrationId}', 
			'PUT', 
			{ 'integrationId': integrationId }, 
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
	 * Update conversation threading window timeline for each messaging type
	 * PUT Conversation messaging threading timeline is intended to set the conversation threading settings for ALL messengerTypes. If you omit a messengerType in the request body then the setting for that messengerType will use the platform default value. The PUT replaces the existing setting(s) that were previously set for each messengerType.
	 * @param {Object} body ConversationThreadingWindowRequest
	 */
	putConversationsMessagingThreadingtimeline(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsMessagingThreadingtimeline';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/threadingtimeline', 
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


export default ConversationsApi;