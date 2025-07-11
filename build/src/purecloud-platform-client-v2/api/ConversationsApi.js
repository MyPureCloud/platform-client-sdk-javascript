import ApiClient from '../ApiClient.js';


class ConversationsApi {
	/**
	 * Conversations service.
	 * @module purecloud-platform-client-v2/api/ConversationsApi
	 * @version 227.0.0
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
	 * Delete/cancel an async details job
	 * 
	 * @param {String} jobId jobId
	 */
	deleteAnalyticsConversationsDetailsJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling deleteConversationParticipantCode';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling deleteConversationParticipantCode';
		}
		// verify the required parameter 'addCommunicationCode' is set
		if (addCommunicationCode === undefined || addCommunicationCode === null || addCommunicationCode === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling deleteConversationParticipantFlaggedreason';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling deleteConversationsCallParticipantConsult';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling deleteConversationsEmailMessagesDraftAttachment';
		}
		// verify the required parameter 'attachmentId' is set
		if (attachmentId === undefined || attachmentId === null || attachmentId === '') {
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
	 * Remove a cached media item asychronously
	 * 
	 * @param {String} cachedMediaItemId cachedMediaItemId
	 */
	deleteConversationsMessagesCachedmediaCachedMediaItemId(cachedMediaItemId) { 
		// verify the required parameter 'cachedMediaItemId' is set
		if (cachedMediaItemId === undefined || cachedMediaItemId === null || cachedMediaItemId === '') {
			throw 'Missing the required parameter "cachedMediaItemId" when calling deleteConversationsMessagesCachedmediaCachedMediaItemId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/cachedmedia/{cachedMediaItemId}', 
			'DELETE', 
			{ 'cachedMediaItemId': cachedMediaItemId },
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
		if (integrationId === undefined || integrationId === null || integrationId === '') {
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
	 * Delete Instagram messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 */
	deleteConversationsMessagingIntegrationsInstagramIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling deleteConversationsMessagingIntegrationsInstagramIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/instagram/{integrationId}', 
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
		if (integrationId === undefined || integrationId === null || integrationId === '') {
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
	 * Delete Twitter messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 */
	deleteConversationsMessagingIntegrationsTwitterIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
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
		if (integrationId === undefined || integrationId === null || integrationId === '') {
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
	 * Delete a messaging setting
	 * 
	 * @param {String} messageSettingId Message Setting ID
	 */
	deleteConversationsMessagingSetting(messageSettingId) { 
		// verify the required parameter 'messageSettingId' is set
		if (messageSettingId === undefined || messageSettingId === null || messageSettingId === '') {
			throw 'Missing the required parameter "messageSettingId" when calling deleteConversationsMessagingSetting';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/settings/{messageSettingId}', 
			'DELETE', 
			{ 'messageSettingId': messageSettingId },
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
	 * Delete the organization's default setting, a global default will be applied to integrations without settings
	 * When an integration is created a settings ID may be assigned to it. If the settings ID is not supplied, the default settings will be assigned to it.
	 */
	deleteConversationsMessagingSettingsDefault() { 

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/settings/default', 
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
	 * Delete a supported content profile
	 * 
	 * @param {String} supportedContentId Supported Content ID
	 */
	deleteConversationsMessagingSupportedcontentSupportedContentId(supportedContentId) { 
		// verify the required parameter 'supportedContentId' is set
		if (supportedContentId === undefined || supportedContentId === null || supportedContentId === '') {
			throw 'Missing the required parameter "supportedContentId" when calling deleteConversationsMessagingSupportedcontentSupportedContentId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/supportedcontent/{supportedContentId}', 
			'DELETE', 
			{ 'supportedContentId': supportedContentId },
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
	 * Get status for async query for conversation aggregates
	 * 
	 * @param {String} jobId jobId
	 * getAnalyticsConversationsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsConversationsAggregatesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsConversationsAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/aggregates/jobs/{jobId}', 
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
	 * Fetch a page of results for an async aggregates query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 * getAnalyticsConversationsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsConversationsAggregatesJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsConversationsAggregatesJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/aggregates/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId },
			{ 'cursor': opts['cursor'] },
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
		if (jobId === undefined || jobId === null || jobId === '') {
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
	 * Fetch a page of results for an async details job
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page)
	 * @param {Number} opts.pageSize The desired maximum number of results
	 */
	getAnalyticsConversationsDetailsJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
	 * Get message
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {String} messageId messageId
	 * getConversationCommunicationInternalmessage is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getConversationCommunicationInternalmessage(conversationId, communicationId, messageId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationCommunicationInternalmessage';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling getConversationCommunicationInternalmessage';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null || messageId === '') {
			throw 'Missing the required parameter "messageId" when calling getConversationCommunicationInternalmessage';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/communications/{communicationId}/internalmessages/{messageId}', 
			'GET', 
			{ 'conversationId': conversationId,'communicationId': communicationId,'messageId': messageId },
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
	 * Get messages for communication
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Indicates maximum number of results in response. Default page size is 25 results. The maximum page size is 200. (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * getConversationCommunicationInternalmessages is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getConversationCommunicationInternalmessages(conversationId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationCommunicationInternalmessages';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling getConversationCommunicationInternalmessages';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/communications/{communicationId}/internalmessages', 
			'GET', 
			{ 'conversationId': conversationId,'communicationId': communicationId },
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
	 * Fetch info on a secure session
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {String} secureSessionId secure IVR session ID
	 */
	getConversationParticipantSecureivrsession(conversationId, participantId, secureSessionId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationParticipantSecureivrsession';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling getConversationParticipantSecureivrsession';
		}
		// verify the required parameter 'secureSessionId' is set
		if (secureSessionId === undefined || secureSessionId === null || secureSessionId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationParticipantSecureivrsessions';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationParticipantWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationParticipantWrapupcodes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * Get the secure attributes on a conversation.
	 * 
	 * @param {String} conversationId conversation ID
	 */
	getConversationSecureattributes(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationSecureattributes';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/secureattributes', 
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
	 * Get Suggestion.
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} suggestionId Suggestion ID
	 */
	getConversationSuggestion(conversationId, suggestionId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationSuggestion';
		}
		// verify the required parameter 'suggestionId' is set
		if (suggestionId === undefined || suggestionId === null || suggestionId === '') {
			throw 'Missing the required parameter "suggestionId" when calling getConversationSuggestion';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/suggestions/{suggestionId}', 
			'GET', 
			{ 'conversationId': conversationId,'suggestionId': suggestionId },
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
	 * Get all suggestions for a conversation.
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Object} opts.type Suggestion type to filter by.
	 * @param {Object} opts.state Suggestion state to filter Copilot suggestions.
	 */
	getConversationSuggestions(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationSuggestions';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/suggestions', 
			'GET', 
			{ 'conversationId': conversationId },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'],'type': opts['type'],'state': opts['state'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the summaries of the conversation.
	 * 
	 * @param {String} conversationId Conversation ID
	 */
	getConversationSummaries(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationSummaries';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/summaries', 
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
	 * Get the wrap-up for this conversation communication. 
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 */
	getConversationsCallParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsCallParticipantCommunicationWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling getConversationsCallParticipantCommunicationWrapup';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling getConversationsCallParticipantCommunicationWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId },
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
	 * Get the wrap-up for this conversation participant. 
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 */
	getConversationsCallParticipantWrapup(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsCallParticipantWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsCallParticipantWrapupcodes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
	 * Get the wrap-up for this conversation communication. 
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 */
	getConversationsCallbackParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsCallbackParticipantCommunicationWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling getConversationsCallbackParticipantCommunicationWrapup';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling getConversationsCallbackParticipantCommunicationWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId },
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
	 * Get the wrap-up for this conversation participant. 
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 */
	getConversationsCallbackParticipantWrapup(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsCallbackParticipantWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsCallbackParticipantWrapupcodes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * @param {String} opts.interval Interval string; format is ISO-8601. Separate start and end times with forward slash '/'
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
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @deprecated
	 */
	getConversationsChat(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-removal-of-acd-web-chat-version-2/. The current user must be involved with the conversation to get its messages.
	 * @param {String} conversationId conversationId
	 * @param {String} messageId messageId
	 * @deprecated
	 */
	getConversationsChatMessage(conversationId, messageId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsChatMessage';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null || messageId === '') {
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
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-removal-of-acd-web-chat-version-2/. The current user must be involved with the conversation to get its messages.
	 * @param {String} conversationId conversationId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after If specified, get the messages chronologically after the id of this message
	 * @param {String} opts.before If specified, get the messages chronologically before the id of this message
	 * @param {Object} opts.sortOrder Sort order (default to ascending)
	 * @param {Number} opts.maxResults Limit the returned number of messages, up to a maximum of 100 (default to 100)
	 * @deprecated
	 */
	getConversationsChatMessages(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
	 * Get the wrap-up for this conversation communication. 
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 * @deprecated
	 */
	getConversationsChatParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsChatParticipantCommunicationWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling getConversationsChatParticipantCommunicationWrapup';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling getConversationsChatParticipantCommunicationWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId },
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
	 * Get the wrap-up for this conversation participant. 
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 * @deprecated
	 */
	getConversationsChatParticipantWrapup(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsChatParticipantWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @deprecated
	 */
	getConversationsChatParticipantWrapupcodes(conversationId, participantId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsChatParticipantWrapupcodes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @deprecated
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
	 * Get the wrap-up for this conversation communication. 
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 * @deprecated
	 */
	getConversationsCobrowsesessionParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsCobrowsesessionParticipantCommunicationWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling getConversationsCobrowsesessionParticipantCommunicationWrapup';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling getConversationsCobrowsesessionParticipantCommunicationWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId },
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
	 * Get the wrap-up for this conversation participant. 
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 * @deprecated
	 */
	getConversationsCobrowsesessionParticipantWrapup(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsCobrowsesessionParticipantWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @deprecated
	 */
	getConversationsCobrowsesessionParticipantWrapupcodes(conversationId, participantId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsCobrowsesessionParticipantWrapupcodes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsEmailMessage';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null || messageId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
	 * Get the wrap-up for this conversation communication. 
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 */
	getConversationsEmailParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsEmailParticipantCommunicationWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling getConversationsEmailParticipantCommunicationWrapup';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling getConversationsEmailParticipantCommunicationWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId },
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
	 * Get the wrap-up for this conversation participant. 
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 */
	getConversationsEmailParticipantWrapup(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsEmailParticipantWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsEmailParticipantWrapupcodes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * Get emails settings for a given conversation
	 * 
	 * @param {String} conversationId conversationId
	 */
	getConversationsEmailSettings(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsEmailSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/settings', 
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
	 * Get internal message conversation
	 * 
	 * @param {String} conversationId conversationId
	 * getConversationsInternalmessage is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getConversationsInternalmessage(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsInternalmessage';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/internalmessages/{conversationId}', 
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
	 * Get active internal message conversations for the logged in user
	 * 
	 * getConversationsInternalmessages is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getConversationsInternalmessages() { 

		return this.apiClient.callApi(
			'/api/v2/conversations/internalmessages', 
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
	 * Get the encryption key configurations
	 * 
	 * @param {String} keyconfigurationsId Key Configurations Id
	 */
	getConversationsKeyconfiguration(keyconfigurationsId) { 
		// verify the required parameter 'keyconfigurationsId' is set
		if (keyconfigurationsId === undefined || keyconfigurationsId === null || keyconfigurationsId === '') {
			throw 'Missing the required parameter "keyconfigurationsId" when calling getConversationsKeyconfiguration';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/keyconfigurations/{keyconfigurationsId}', 
			'GET', 
			{ 'keyconfigurationsId': keyconfigurationsId },
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
	 * Get a list of key configurations data
	 * 
	 */
	getConversationsKeyconfigurations() { 

		return this.apiClient.callApi(
			'/api/v2/conversations/keyconfigurations', 
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsMessageCommunicationMessagesMediaMediaId';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling getConversationsMessageCommunicationMessagesMediaMediaId';
		}
		// verify the required parameter 'mediaId' is set
		if (mediaId === undefined || mediaId === null || mediaId === '') {
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
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.useNormalizedMessage If true, response removes deprecated fields (textBody, media) (default to false)
	 */
	getConversationsMessageDetails(messageId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null || messageId === '') {
			throw 'Missing the required parameter "messageId" when calling getConversationsMessageDetails';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{messageId}/details', 
			'GET', 
			{ 'messageId': messageId },
			{ 'useNormalizedMessage': opts['useNormalizedMessage'] },
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
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.useNormalizedMessage If true, response removes deprecated fields (textBody, media) (default to false)
	 */
	getConversationsMessageMessage(conversationId, messageId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsMessageMessage';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null || messageId === '') {
			throw 'Missing the required parameter "messageId" when calling getConversationsMessageMessage';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}/messages/{messageId}', 
			'GET', 
			{ 'conversationId': conversationId,'messageId': messageId },
			{ 'useNormalizedMessage': opts['useNormalizedMessage'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the wrap-up for this conversation communication. 
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 */
	getConversationsMessageParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsMessageParticipantCommunicationWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling getConversationsMessageParticipantCommunicationWrapup';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling getConversationsMessageParticipantCommunicationWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId },
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
	 * Get the wrap-up for this conversation participant. 
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 */
	getConversationsMessageParticipantWrapup(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsMessageParticipantWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 */
	getConversationsMessageParticipantWrapupcodes(conversationId, participantId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsMessageParticipantWrapupcodes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * Get a list of cached media items
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.url URL to search for
	 */
	getConversationsMessagesCachedmedia(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/cachedmedia', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'url': opts['url'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a cached media item
	 * 
	 * @param {String} cachedMediaItemId cachedMediaItemId
	 */
	getConversationsMessagesCachedmediaCachedMediaItemId(cachedMediaItemId) { 
		// verify the required parameter 'cachedMediaItemId' is set
		if (cachedMediaItemId === undefined || cachedMediaItemId === null || cachedMediaItemId === '') {
			throw 'Missing the required parameter "cachedMediaItemId" when calling getConversationsMessagesCachedmediaCachedMediaItemId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/cachedmedia/{cachedMediaItemId}', 
			'GET', 
			{ 'cachedMediaItemId': cachedMediaItemId },
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
	 * Get a list of Facebook Permissions
	 * 
	 */
	getConversationsMessagingFacebookPermissions() { 

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/facebook/permissions', 
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
	 * Get Apple messaging integration identity resolution settings
	 * 
	 * @param {String} integrationId Integration ID
	 * getConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling getConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/identityresolution/integrations/apple/{integrationId}', 
			'GET', 
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
	 * Get Facebook messaging integration identity resolution settings
	 * 
	 * @param {String} integrationId Integration ID
	 */
	getConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling getConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/identityresolution/integrations/facebook/{integrationId}', 
			'GET', 
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
	 * Get an Instagram integration identity resolution settings
	 * 
	 * @param {String} integrationId Integration ID
	 */
	getConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling getConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/identityresolution/integrations/instagram/{integrationId}', 
			'GET', 
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
	 * Get an open messaging integration Identity Resolution settings
	 * 
	 * @param {String} integrationId Integration ID
	 */
	getConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling getConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/identityresolution/integrations/open/{integrationId}', 
			'GET', 
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
	 * Get X (Formally Twitter) messaging integration identity resolution settings
	 * 
	 * @param {String} integrationId Integration Id
	 */
	getConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling getConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/identityresolution/integrations/twitter/{integrationId}', 
			'GET', 
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
	 * Get a whatsApp integration Identity Resolution settings
	 * 
	 * @param {String} integrationId Integration ID
	 */
	getConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling getConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/identityresolution/integrations/whatsapp/{integrationId}', 
			'GET', 
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
	 * Get twitter oauth settings to patch an integration
	 * 
	 * @param {String} integrationId Integration Id of an existing integration that needs to be patched with new oauth settings
	 */
	getConversationsMessagingIntegrationTwitterOauthSettings(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling getConversationsMessagingIntegrationTwitterOauthSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/{integrationId}/twitter/oauth/settings', 
			'GET', 
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
	 * Get a list of Integrations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Array.<String>} opts.expand Expand instructions for the return value.
	 * @param {String} opts.supportedContentId Filter integrations returned based on the supported content ID
	 * @param {String} opts.messagingSettingId Filter integrations returned based on the setting ID
	 */
	getConversationsMessagingIntegrations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'supportedContent.id': opts['supportedContentId'],'messagingSetting.id': opts['messagingSettingId'] },
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
	 * @param {String} opts.messagingSettingId Filter integrations returned based on the setting ID
	 */
	getConversationsMessagingIntegrationsFacebook(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/facebook', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'supportedContent.id': opts['supportedContentId'],'messagingSetting.id': opts['messagingSettingId'] },
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
		if (integrationId === undefined || integrationId === null || integrationId === '') {
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
	 * Get a list of Instagram Integrations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @param {String} opts.supportedContentId Filter integrations returned based on the supported content ID
	 * @param {String} opts.messagingSettingId Filter integrations returned based on the setting ID
	 */
	getConversationsMessagingIntegrationsInstagram(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/instagram', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'supportedContent.id': opts['supportedContentId'],'messagingSetting.id': opts['messagingSettingId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get Instagram messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 */
	getConversationsMessagingIntegrationsInstagramIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling getConversationsMessagingIntegrationsInstagramIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/instagram/{integrationId}', 
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
	 * @param {String} opts.messagingSettingId Filter integrations returned based on the setting ID
	 */
	getConversationsMessagingIntegrationsOpen(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/open', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'supportedContent.id': opts['supportedContentId'],'messagingSetting.id': opts['messagingSettingId'] },
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
		if (integrationId === undefined || integrationId === null || integrationId === '') {
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
	 * @param {String} opts.messagingSettingId Filter integrations returned based on the setting ID
	 */
	getConversationsMessagingIntegrationsTwitter(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/twitter', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'supportedContent.id': opts['supportedContentId'],'messagingSetting.id': opts['messagingSettingId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get Twitter messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 */
	getConversationsMessagingIntegrationsTwitterIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
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
	 * Get twitter oauth settings
	 * 
	 */
	getConversationsMessagingIntegrationsTwitterOauthSettings() { 

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/twitter/oauth/settings', 
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
	 * Get a list of WhatsApp Integrations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @param {String} opts.supportedContentId Filter integrations returned based on the supported content ID
	 * @param {String} opts.messagingSettingId Filter integrations returned based on the setting ID
	 */
	getConversationsMessagingIntegrationsWhatsapp(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/whatsapp', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'supportedContent.id': opts['supportedContentId'],'messagingSetting.id': opts['messagingSettingId'] },
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
		if (integrationId === undefined || integrationId === null || integrationId === '') {
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
	 * Get a messaging setting
	 * 
	 * @param {String} messageSettingId Message Setting ID
	 */
	getConversationsMessagingSetting(messageSettingId) { 
		// verify the required parameter 'messageSettingId' is set
		if (messageSettingId === undefined || messageSettingId === null || messageSettingId === '') {
			throw 'Missing the required parameter "messageSettingId" when calling getConversationsMessagingSetting';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/settings/{messageSettingId}', 
			'GET', 
			{ 'messageSettingId': messageSettingId },
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
	 * Get a list of messaging settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getConversationsMessagingSettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/settings', 
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

	/**
	 * Get the organization's default settings that will be used as the default when creating an integration.
	 * When an integration is created a settings ID may be assigned to it. If the settings ID is not supplied, the default settings will be assigned to it.
	 */
	getConversationsMessagingSettingsDefault() { 

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/settings/default', 
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
	 * Get a list of Supported Content profiles
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getConversationsMessagingSupportedcontent(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/supportedcontent', 
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

	/**
	 * Get the organization's default supported content profile that will be used as the default when creating an integration.
	 * When an integration is created a supported content ID may be assigned to it. If the supported content ID is not supplied, the default supported content profile will be assigned to it.
	 */
	getConversationsMessagingSupportedcontentDefault() { 

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/supportedcontent/default', 
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
	 * Get a supported content profile
	 * 
	 * @param {String} supportedContentId Supported Content ID
	 */
	getConversationsMessagingSupportedcontentSupportedContentId(supportedContentId) { 
		// verify the required parameter 'supportedContentId' is set
		if (supportedContentId === undefined || supportedContentId === null || supportedContentId === '') {
			throw 'Missing the required parameter "supportedContentId" when calling getConversationsMessagingSupportedcontentSupportedContentId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/supportedcontent/{supportedContentId}', 
			'GET', 
			{ 'supportedContentId': supportedContentId },
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
	 * Get the wrap-up for this conversation communication. 
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 * @deprecated
	 */
	getConversationsScreenshareParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsScreenshareParticipantCommunicationWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling getConversationsScreenshareParticipantCommunicationWrapup';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling getConversationsScreenshareParticipantCommunicationWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/screenshares/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId },
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
	 * Get Settings
	 * 
	 */
	getConversationsSettings() { 

		return this.apiClient.callApi(
			'/api/v2/conversations/settings', 
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
	 * Get the wrap-up for this conversation communication. 
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 */
	getConversationsSocialParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsSocialParticipantCommunicationWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling getConversationsSocialParticipantCommunicationWrapup';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling getConversationsSocialParticipantCommunicationWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/socials/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId },
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
	 * Get video conference details (e.g. the current number of active participants).
	 * 
	 * @param {String} conferenceId conferenceId
	 * getConversationsVideoDetails is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getConversationsVideoDetails(conferenceId) { 
		// verify the required parameter 'conferenceId' is set
		if (conferenceId === undefined || conferenceId === null || conferenceId === '') {
			throw 'Missing the required parameter "conferenceId" when calling getConversationsVideoDetails';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/videos/{conferenceId}/details', 
			'GET', 
			{ 'conferenceId': conferenceId },
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
	 * Get the wrap-up for this conversation communication. 
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 */
	getConversationsVideoParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsVideoParticipantCommunicationWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling getConversationsVideoParticipantCommunicationWrapup';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling getConversationsVideoParticipantCommunicationWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/videos/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId },
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
	 * Gets a record for a given meetingId
	 * 
	 * @param {String} meetingId meetingId
	 * getConversationsVideosMeeting is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getConversationsVideosMeeting(meetingId) { 
		// verify the required parameter 'meetingId' is set
		if (meetingId === undefined || meetingId === null || meetingId === '') {
			throw 'Missing the required parameter "meetingId" when calling getConversationsVideosMeeting';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/videos/meetings/{meetingId}', 
			'GET', 
			{ 'meetingId': meetingId },
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationParticipant';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationParticipantAttributes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * Update the secure attributes on a conversation.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} body Conversation Secure Attributes
	 */
	patchConversationSecureattributes(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationSecureattributes';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationSecureattributes';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/secureattributes', 
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
	 * Update agent's engagement for the summary.
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} summaryId Summary ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchConversationSummaryEngagements(conversationId, summaryId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationSummaryEngagements';
		}
		// verify the required parameter 'summaryId' is set
		if (summaryId === undefined || summaryId === null || summaryId === '') {
			throw 'Missing the required parameter "summaryId" when calling patchConversationSummaryEngagements';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/summaries/{summaryId}/engagements', 
			'PATCH', 
			{ 'conversationId': conversationId,'summaryId': summaryId },
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
	 * Update the feedback for the summary.
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} summaryId Summary ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchConversationSummaryFeedback(conversationId, summaryId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationSummaryFeedback';
		}
		// verify the required parameter 'summaryId' is set
		if (summaryId === undefined || summaryId === null || summaryId === '') {
			throw 'Missing the required parameter "summaryId" when calling patchConversationSummaryFeedback';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/summaries/{summaryId}/feedback', 
			'PATCH', 
			{ 'conversationId': conversationId,'summaryId': summaryId },
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
	 * Update the utilization label on a conversation. When there is no value provided, the system default label is applied
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} body Conversation Utilization Label
	 */
	patchConversationUtilizationlabel(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationUtilizationlabel';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationUtilizationlabel';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/utilizationlabel', 
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
	 * Update after-call work for this conversation communication.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body AfterCallWorkUpdate
	 */
	patchConversationsAftercallworkConversationIdParticipantCommunication(conversationId, participantId, communicationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsAftercallworkConversationIdParticipantCommunication';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling patchConversationsAftercallworkConversationIdParticipantCommunication';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling patchConversationsAftercallworkConversationIdParticipantCommunication';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsAftercallworkConversationIdParticipantCommunication';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/aftercallwork/{conversationId}/participants/{participantId}/communications/{communicationId}', 
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
	 * Update a conversation by setting its recording state, merging in other conversations to create a conference, or disconnecting all of the participants
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Conversation
	 */
	patchConversationsCall(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCallParticipant';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCallParticipantAttributes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * Update conversation participant's communication by disconnecting it.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Participant
	 */
	patchConversationsCallParticipantCommunication(conversationId, participantId, communicationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCallParticipantCommunication';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling patchConversationsCallParticipantCommunication';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCallParticipantConsult';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCallbackParticipant';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCallbackParticipantAttributes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * Update conversation participant's communication by disconnecting it.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Participant
	 */
	patchConversationsCallbackParticipantCommunication(conversationId, participantId, communicationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCallbackParticipantCommunication';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling patchConversationsCallbackParticipantCommunication';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
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
	 * Update a scheduled callback
	 * 
	 * @param {Object} body PatchCallbackRequest
	 */
	patchConversationsCallbacks(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsCallbacks';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/callbacks', 
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
	 * Update a conversation by disconnecting all of the participants
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {Object} body Conversation
	 * @deprecated
	 */
	patchConversationsChat(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Update request
	 * @deprecated
	 */
	patchConversationsChatParticipant(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsChatParticipant';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Participant attributes
	 * @deprecated
	 */
	patchConversationsChatParticipantAttributes(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsChatParticipantAttributes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * Update conversation participant's communication by disconnecting it.
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Participant
	 * @deprecated
	 */
	patchConversationsChatParticipantCommunication(conversationId, participantId, communicationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsChatParticipantCommunication';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling patchConversationsChatParticipantCommunication';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
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
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {Object} body Conversation
	 * @deprecated
	 */
	patchConversationsCobrowsesession(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @deprecated
	 */
	patchConversationsCobrowsesessionParticipant(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCobrowsesessionParticipant';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @deprecated
	 */
	patchConversationsCobrowsesessionParticipantAttributes(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCobrowsesessionParticipantAttributes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * Update conversation participant's communication by disconnecting it.
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Participant
	 * @deprecated
	 */
	patchConversationsCobrowsesessionParticipantCommunication(conversationId, participantId, communicationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCobrowsesessionParticipantCommunication';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling patchConversationsCobrowsesessionParticipantCommunication';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
	 * Reset conversation draft to its initial state and/or auto-fill draft content
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.autoFill autoFill
	 * @param {Boolean} opts.discard discard
	 * @param {Object} opts.body Draft Manipulation Request
	 */
	patchConversationsEmailMessagesDraft(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsEmailMessagesDraft';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/messages/draft', 
			'PATCH', 
			{ 'conversationId': conversationId },
			{ 'autoFill': opts['autoFill'],'discard': opts['discard'] },
			{  },
			{  },
			opts['body'], 
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsEmailParticipant';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsEmailParticipantAttributes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * Update conversation participant's communication by disconnecting it.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Participant
	 */
	patchConversationsEmailParticipantCommunication(conversationId, participantId, communicationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsEmailParticipantCommunication';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling patchConversationsEmailParticipantCommunication';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
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
	 * Update conversation by setting its parking state
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Parking update request
	 */
	patchConversationsEmailParticipantParkingstate(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsEmailParticipantParkingstate';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling patchConversationsEmailParticipantParkingstate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsEmailParticipantParkingstate';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/participants/{participantId}/parkingstate', 
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
	patchConversationsMessage(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchConversationsMessageParticipant(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsMessageParticipant';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchConversationsMessageParticipantAttributes(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsMessageParticipantAttributes';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * Update conversation participant's communication by disconnecting it.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Participant
	 */
	patchConversationsMessageParticipantCommunication(conversationId, participantId, communicationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsMessageParticipantCommunication';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling patchConversationsMessageParticipantCommunication';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
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
		if (integrationId === undefined || integrationId === null || integrationId === '') {
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
	 * Update Instagram messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body InstagramIntegrationUpdateRequest
	 */
	patchConversationsMessagingIntegrationsInstagramIntegrationId(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling patchConversationsMessagingIntegrationsInstagramIntegrationId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsMessagingIntegrationsInstagramIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/instagram/{integrationId}', 
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
		if (integrationId === undefined || integrationId === null || integrationId === '') {
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
	 * Update a Twitter messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body TwitterIntegrationUpdateRequest
	 */
	patchConversationsMessagingIntegrationsTwitterIntegrationId(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
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
	 * Activate a WhatsApp messaging integration created using the WhatsApp embedded signup flow
	 * Please specify the phone number to associate with this WhatsApp integration from the list of available phone numbers returned to you in the GET call on the integration with a createStatus of Completed. You can then run a GET on the integration to check if its status has been updated to Active.
	 * @param {String} integrationId Integration ID
	 * @param {Object} body WhatsAppEmbeddedSignupIntegrationActivationRequest
	 */
	patchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling patchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/whatsapp/embeddedsignup/{integrationId}', 
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
	 * Update a WhatsApp messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body WhatsAppIntegrationUpdateRequest
	 */
	patchConversationsMessagingIntegrationsWhatsappIntegrationId(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
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
	 * Update a messaging setting
	 * 
	 * @param {String} messageSettingId Message Setting ID
	 * @param {Object} body MessagingSetting
	 */
	patchConversationsMessagingSetting(messageSettingId, body) { 
		// verify the required parameter 'messageSettingId' is set
		if (messageSettingId === undefined || messageSettingId === null || messageSettingId === '') {
			throw 'Missing the required parameter "messageSettingId" when calling patchConversationsMessagingSetting';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsMessagingSetting';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/settings/{messageSettingId}', 
			'PATCH', 
			{ 'messageSettingId': messageSettingId },
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
	 * Update a supported content profile
	 * 
	 * @param {String} supportedContentId Supported Content ID
	 * @param {Object} body SupportedContent
	 */
	patchConversationsMessagingSupportedcontentSupportedContentId(supportedContentId, body) { 
		// verify the required parameter 'supportedContentId' is set
		if (supportedContentId === undefined || supportedContentId === null || supportedContentId === '') {
			throw 'Missing the required parameter "supportedContentId" when calling patchConversationsMessagingSupportedcontentSupportedContentId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsMessagingSupportedcontentSupportedContentId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/supportedcontent/{supportedContentId}', 
			'PATCH', 
			{ 'supportedContentId': supportedContentId },
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
	 * Update Settings
	 * 
	 * @param {Object} body Settings
	 */
	patchConversationsSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/settings', 
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
	 * Index conversation properties
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body request
	 */
	postAnalyticsConversationDetailsProperties(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
	 * Query for conversation activity observations
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The desired page size
	 * @param {Number} opts.pageNumber The desired page number
	 */
	postAnalyticsConversationsActivityQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsConversationsActivityQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/activity/query', 
			'POST', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Query for conversation aggregates asynchronously
	 * 
	 * @param {Object} body query
	 * postAnalyticsConversationsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postAnalyticsConversationsAggregatesJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsConversationsAggregatesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/aggregates/jobs', 
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
	 * Barge a conversation creating a barged in conference of connected participants.
	 * 
	 * @param {String} conversationId conversation ID
	 */
	postConversationBarge(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationBarge';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/barge', 
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
	 * Creates a cobrowse session. Requires conversation:cobrowse:add (for web messaging) or conversation:cobrowsevoice:add permission.
	 * 
	 * @param {String} conversationId Conversation ID
	 */
	postConversationCobrowse(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationCobrowse';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/cobrowse', 
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
	 * Send internal message
	 * Send a new internal message for an existing communication.
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Message
	 * postConversationCommunicationInternalmessages is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postConversationCommunicationInternalmessages(conversationId, communicationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationCommunicationInternalmessages';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling postConversationCommunicationInternalmessages';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationCommunicationInternalmessages';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/communications/{communicationId}/internalmessages', 
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
	 * Performs a full conversation teardown. Issues disconnect requests for any connected media. Applies a system wrap-up code to any participants that are pending wrap-up. This is not intended to be the normal way of ending interactions but is available in the event of problems with the application to allow a resynchronization of state across all components. It is recommended that users submit a support case if they are relying on this endpoint systematically as there is likely something that needs investigation.
	 * 
	 * @param {String} conversationId conversation ID
	 */
	postConversationDisconnect(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationParticipantCallbacks';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationParticipantDigits';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * Setup internal message communication with user
	 * The target user of the digital consultation must have the `conversation:internalMessaging:accept` permission.
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} body Confer request
	 * postConversationParticipantInternalmessagesUsersCommunications is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postConversationParticipantInternalmessagesUsersCommunications(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationParticipantInternalmessagesUsersCommunications';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationParticipantInternalmessagesUsersCommunications';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationParticipantInternalmessagesUsersCommunications';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}/internalmessages/users/communications', 
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
	 * Replace this participant with the specified user and/or address
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} body Transfer request
	 */
	postConversationParticipantReplace(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationParticipantReplace';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * Replace this participant with the specified agent
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} body Transfer request
	 */
	postConversationParticipantReplaceAgent(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationParticipantReplaceAgent';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationParticipantReplaceAgent';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationParticipantReplaceAgent';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}/replace/agent', 
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
	 * Replace this participant with the an external contact
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} body Transfer request
	 * postConversationParticipantReplaceContactExternal is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postConversationParticipantReplaceContactExternal(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationParticipantReplaceContactExternal';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationParticipantReplaceContactExternal';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationParticipantReplaceContactExternal';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}/replace/contact/external', 
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
	 * Replace this participant with the an external contact
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} body Transfer request
	 */
	postConversationParticipantReplaceExternal(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationParticipantReplaceExternal';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationParticipantReplaceExternal';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationParticipantReplaceExternal';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}/replace/external', 
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
	 * Replace this participant with the specified queue
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} body Transfer request
	 */
	postConversationParticipantReplaceQueue(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationParticipantReplaceQueue';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationParticipantReplaceQueue';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationParticipantReplaceQueue';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}/replace/queue', 
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationParticipantSecureivrsessions';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * Replace this participant by another one using the address of the destination.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} body Transfer request
	 * postConversationParticipantTransfer is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postConversationParticipantTransfer(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationParticipantTransfer';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationParticipantTransfer';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationParticipantTransfer';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}/transfer', 
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
	 * Save an engagement on the suggestion.
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} suggestionId Suggestion ID
	 * @param {Object} body 
	 */
	postConversationSuggestionEngagement(conversationId, suggestionId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationSuggestionEngagement';
		}
		// verify the required parameter 'suggestionId' is set
		if (suggestionId === undefined || suggestionId === null || suggestionId === '') {
			throw 'Missing the required parameter "suggestionId" when calling postConversationSuggestionEngagement';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationSuggestionEngagement';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/suggestions/{suggestionId}/engagement', 
			'POST', 
			{ 'conversationId': conversationId,'suggestionId': suggestionId },
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
	 * Suggestion feedback.
	 * Google Agent Assist offering within Genesys will no longer be supported
	 * @param {String} conversationId Conversation ID
	 * @param {Object} body SuggestionFeedback
	 * @deprecated
	 */
	postConversationSuggestionsFeedback(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationSuggestionsFeedback';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationSuggestionsFeedback';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/suggestions/feedback', 
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
	 * Submit feedback for the summary.
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} summaryId Summary ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postConversationSummaryFeedback(conversationId, summaryId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationSummaryFeedback';
		}
		// verify the required parameter 'summaryId' is set
		if (summaryId === undefined || summaryId === null || summaryId === '') {
			throw 'Missing the required parameter "summaryId" when calling postConversationSummaryFeedback';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/summaries/{summaryId}/feedback', 
			'POST', 
			{ 'conversationId': conversationId,'summaryId': summaryId },
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
	 * Barge a given participant's call creating a barged in conference of connected participants.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 */
	postConversationsCallParticipantBarge(conversationId, participantId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCallParticipantBarge';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationsCallParticipantBarge';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/barge', 
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
	 * Listen in on the conversation from the point of view of a given participant while speaking to just the given participant.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 */
	postConversationsCallParticipantCoach(conversationId, participantId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCallParticipantCoach';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * Apply wrap-up for this conversation communication
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Wrap-up
	 */
	postConversationsCallParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCallParticipantCommunicationWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationsCallParticipantCommunicationWrapup';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling postConversationsCallParticipantCommunicationWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId },
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
	 * Initiate and update consult transfer
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Destination address and initial speak to
	 */
	postConversationsCallParticipantConsult(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCallParticipantConsult';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * Initiate a consult transfer to an agent
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Destination agent and initial speak to
	 */
	postConversationsCallParticipantConsultAgent(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCallParticipantConsultAgent';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationsCallParticipantConsultAgent';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsCallParticipantConsultAgent';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult/agent', 
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
	 * Initiate a consult transfer to an external contact
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Destination address and initial speak to
	 * postConversationsCallParticipantConsultContactExternal is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postConversationsCallParticipantConsultContactExternal(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCallParticipantConsultContactExternal';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationsCallParticipantConsultContactExternal';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsCallParticipantConsultContactExternal';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult/contact/external', 
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
	 * Initiate a consult transfer to an external contact
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Destination address and initial speak to
	 */
	postConversationsCallParticipantConsultExternal(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCallParticipantConsultExternal';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationsCallParticipantConsultExternal';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsCallParticipantConsultExternal';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult/external', 
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
	 * Initiate a consult transfer to a queue
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Destination queue and initial speak to
	 */
	postConversationsCallParticipantConsultQueue(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCallParticipantConsultQueue';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationsCallParticipantConsultQueue';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsCallParticipantConsultQueue';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult/queue', 
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCallParticipantMonitor';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCallParticipantReplace';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * Initiate voice consult transfer
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Destination address and initial speak to
	 * postConversationsCallParticipantVoiceConsult is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postConversationsCallParticipantVoiceConsult(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCallParticipantVoiceConsult';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationsCallParticipantVoiceConsult';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsCallParticipantVoiceConsult';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/voice/consult', 
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
	 * Apply wrap-up for this conversation communication
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Wrap-up
	 */
	postConversationsCallbackParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCallbackParticipantCommunicationWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationsCallbackParticipantCommunicationWrapup';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling postConversationsCallbackParticipantCommunicationWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId },
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
	postConversationsCallbackParticipantReplace(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCallbackParticipantReplace';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * Disconnect multiple scheduled callbacks
	 * 
	 * @param {Object} body BulkCallbackDisconnectRequest
	 */
	postConversationsCallbacksBulkDisconnect(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsCallbacksBulkDisconnect';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/callbacks/bulk/disconnect', 
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
	 * Update multiple scheduled callbacks
	 * 
	 * @param {Object} body BulkCallbackPatchRequest
	 */
	postConversationsCallbacksBulkUpdate(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsCallbacksBulkUpdate';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/callbacks/bulk/update', 
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
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Message
	 * @deprecated
	 */
	postConversationsChatCommunicationMessages(conversationId, communicationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsChatCommunicationMessages';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
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
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @deprecated
	 */
	postConversationsChatCommunicationTyping(conversationId, communicationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsChatCommunicationTyping';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
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
	 * Apply wrap-up for this conversation communication
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Wrap-up
	 * @deprecated
	 */
	postConversationsChatParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsChatParticipantCommunicationWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationsChatParticipantCommunicationWrapup';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling postConversationsChatParticipantCommunicationWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId },
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
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Transfer request
	 * @deprecated
	 */
	postConversationsChatParticipantReplace(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsChatParticipantReplace';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {Object} body Create web chat request
	 * @deprecated
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
	 * Apply wrap-up for this conversation communication
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Wrap-up
	 * @deprecated
	 */
	postConversationsCobrowsesessionParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCobrowsesessionParticipantCommunicationWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationsCobrowsesessionParticipantCommunicationWrapup';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling postConversationsCobrowsesessionParticipantCommunicationWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId },
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
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @deprecated
	 */
	postConversationsCobrowsesessionParticipantReplace(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCobrowsesessionParticipantReplace';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
	 * Apply wrap-up for this conversation communication
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Wrap-up
	 */
	postConversationsEmailParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsEmailParticipantCommunicationWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationsEmailParticipantCommunicationWrapup';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling postConversationsEmailParticipantCommunicationWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId },
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
	postConversationsEmailParticipantReplace(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsEmailParticipantReplace';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * Reconnect the user to the most recently disconnected customer on a fully disconnected email conversation
	 * 
	 * @param {String} conversationId conversationId
	 */
	postConversationsEmailReconnect(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsEmailReconnect';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/reconnect', 
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
	 * Create an email conversation, per API
	 * 
	 * @param {Object} body Create agentless email request
	 */
	postConversationsEmailsAgentless(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsEmailsAgentless';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/agentless', 
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
	 * Setup configurations for encryption key creation
	 * 
	 * @param {Object} body Encryption Configuration
	 */
	postConversationsKeyconfigurations(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsKeyconfigurations';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/keyconfigurations', 
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
	 * Validate encryption key configurations without saving it
	 * 
	 * @param {Object} body Encryption Configuration
	 */
	postConversationsKeyconfigurationsValidate(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsKeyconfigurationsValidate';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/keyconfigurations/validate', 
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
	 * Send message on existing conversation/communication. Only one message body field can be accepted, per request. Example: 1 textBody, 1 mediaId, or 1 messageTemplate.
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Message
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.useNormalizedMessage If true, response removes deprecated fields (textBody, media) (default to false)
	 */
	postConversationsMessageCommunicationMessages(conversationId, communicationId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsMessageCommunicationMessages';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
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
			{ 'useNormalizedMessage': opts['useNormalizedMessage'] },
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
	 * @deprecated
	 */
	postConversationsMessageCommunicationMessagesMedia(conversationId, communicationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsMessageCommunicationMessagesMedia';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
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
	 * Create a URL to upload a message media file
	 * See https://developer.genesys.cloud/api/rest/v2/conversations/messaging-media-upload for example usage.
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {Object} body request
	 */
	postConversationsMessageCommunicationMessagesMediaUploads(conversationId, communicationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsMessageCommunicationMessagesMediaUploads';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling postConversationsMessageCommunicationMessagesMediaUploads';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessageCommunicationMessagesMediaUploads';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media/uploads', 
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
	 * Send a social media message
	 * Send a social media message on existing conversation/communication.
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Message
	 */
	postConversationsMessageCommunicationSocialmediaMessages(conversationId, communicationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsMessageCommunicationSocialmediaMessages';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling postConversationsMessageCommunicationSocialmediaMessages';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessageCommunicationSocialmediaMessages';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}/communications/{communicationId}/socialmedia/messages', 
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
	 * Send message typing event
	 * Send message typing event for existing conversation/communication.
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {Object} body MessageTypingEvent
	 */
	postConversationsMessageCommunicationTyping(conversationId, communicationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsMessageCommunicationTyping';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling postConversationsMessageCommunicationTyping';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessageCommunicationTyping';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}/communications/{communicationId}/typing', 
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
	 * Send an inbound Open Event Message
	 * Send an inbound event message to an Open Messaging integration. In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least messaging scope. This will either generate a new Conversation, or be a part of an existing conversation. See https://developer.genesys.cloud/api/digital/openmessaging/ for example usage.
	 * @param {String} integrationId integrationId
	 * @param {Object} body NormalizedMessage
	 */
	postConversationsMessageInboundOpenEvent(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling postConversationsMessageInboundOpenEvent';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessageInboundOpenEvent';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{integrationId}/inbound/open/event', 
			'POST', 
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
	 * Send inbound Open Message
	 * Send an inbound message to an Open Messaging integration. In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least messaging scope. This will either generate a new Conversation, or be a part of an existing conversation. See https://developer.genesys.cloud/api/digital/openmessaging/ for example usage.
	 * @param {String} integrationId integrationId
	 * @param {Object} body NormalizedMessage
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.prefetchConversationId Indicates whether or not to prefetch conversationId (default to false)
	 */
	postConversationsMessageInboundOpenMessage(integrationId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling postConversationsMessageInboundOpenMessage';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessageInboundOpenMessage';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{integrationId}/inbound/open/message', 
			'POST', 
			{ 'integrationId': integrationId },
			{ 'prefetchConversationId': opts['prefetchConversationId'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Send an inbound Open Receipt Message
	 * Send an inbound open Receipt to an Open Messaging integration. In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least messaging scope. This will either generate a new Conversation, or be a part of an existing conversation. See https://developer.genesys.cloud/api/digital/openmessaging/ for example usage.
	 * @param {String} integrationId integrationId
	 * @param {Object} body NormalizedMessage
	 */
	postConversationsMessageInboundOpenReceipt(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling postConversationsMessageInboundOpenReceipt';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessageInboundOpenReceipt';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{integrationId}/inbound/open/receipt', 
			'POST', 
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
	 * Send inbound Open Response
	 * Send an inbound response for a structured message to an Open Messaging integration. In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least messaging scope. This will be a part of an existing conversation. See https://developer.genesys.cloud/api/digital/openmessaging/ for example usage.
	 * @param {String} integrationId integrationId
	 * @param {Object} body OpenInboundStructuredResponseMessage
	 */
	postConversationsMessageInboundOpenStructuredResponse(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling postConversationsMessageInboundOpenStructuredResponse';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessageInboundOpenStructuredResponse';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{integrationId}/inbound/open/structured/response', 
			'POST', 
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
	 * Get messages in batch
	 * The path parameter [conversationId] should contain the conversationId of the conversation being filtered. The body should contain the messageId(s) of messages being requested. For example: ["a3069a33b-bbb1-4703-9d68-061d9e9db96e", "55bc6be3-078c-4a49-a4e6-1e05776ed7e8"]
	 * @param {String} conversationId 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.useNormalizedMessage If true, response removes deprecated fields (textBody, media) (default to false)
	 * @param {Array.<String>} opts.body messageIds
	 */
	postConversationsMessageMessagesBulk(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsMessageMessagesBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}/messages/bulk', 
			'POST', 
			{ 'conversationId': conversationId },
			{ 'useNormalizedMessage': opts['useNormalizedMessage'] },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Apply wrap-up for this conversation communication
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Wrap-up
	 */
	postConversationsMessageParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsMessageParticipantCommunicationWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationsMessageParticipantCommunicationWrapup';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling postConversationsMessageParticipantCommunicationWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId },
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
	 * Listen in on the conversation from the point of view of a given participant.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 */
	postConversationsMessageParticipantMonitor(conversationId, participantId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsMessageParticipantMonitor';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationsMessageParticipantMonitor';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}/participants/{participantId}/monitor', 
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
	postConversationsMessageParticipantReplace(conversationId, participantId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsMessageParticipantReplace';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * Send an agentless (api participant) outbound message using a client credential grant. In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least messaging scope. If there is already a connected conversation between the fromAddress and toAddress specified, the useExistingActiveConversation param can be used to barge in to the ongoing conversation.
	 * @param {Object} body Create agentless outbound messaging request
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.useNormalizedMessage If true, response removes deprecated fields (textBody, messagingTemplate) (default to false)
	 */
	postConversationsMessagesAgentless(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessagesAgentless';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/agentless', 
			'POST', 
			{  },
			{ 'useNormalizedMessage': opts['useNormalizedMessage'] },
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
	 * [This API is deprecated. Instead, use 1. POST /api/v2/conversations/messages/{integrationId}/inbound/open/event, if you want to send an inbound Open Event Message 2. POST /api/v2/conversations/messages/{integrationId}/inbound/open/message, if you want to send an inbound Open Message 3. POST /api/v2/conversations/messages/{integrationId}/inbound/open/receipt, to send an inbound Open Receipt Message]  In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least messaging scope. This will either generate a new Conversation, or be a part of an existing conversation. See https://developer.genesys.cloud/api/digital/openmessaging/ for example usage.
	 * @param {Object} body NormalizedMessage
	 * @deprecated
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
	 * Create Instagram Integration
	 * 
	 * @param {Object} body InstagramIntegrationRequest
	 */
	postConversationsMessagingIntegrationsInstagram(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessagingIntegrationsInstagram';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/instagram', 
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
	 * Create Twitter Integration
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
	 * [This API is deprecated. Use POST /api/v2/conversations/messaging/integrations/whatsapp/embeddedsignup instead] Create a WhatsApp Integration
	 * [This API is deprecated. Use POST /api/v2/conversations/messaging/integrations/whatsapp/embeddedsignup instead] You must be approved by WhatsApp to use this feature. Your approved e164-formatted phone number and valid WhatsApp certificate for your number are required. Your WhatsApp certificate must have valid base64 encoding. Please paste carefully and do not add any leading or trailing spaces. Do not alter any characters. An integration must be activated within 7 days of certificate generation. If you cannot complete the addition and activation of the number within 7 days, please obtain a new certificate before creating the integration. Integrations created with an invalid number or certificate may immediately incur additional integration fees. Please carefully enter your number and certificate as described.
	 * @param {Object} body WhatsAppIntegrationRequest
	 * @deprecated
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
	 * Create a WhatsApp Integration using the WhatsApp embedded signup flow
	 * Use the access token returned from the embedded signup flow to obtain a list of available phone numbers that can be associated with the created integration. The returned WhatsApp integration will initially have a createStatus of Initiated until the list of available phone numbers can be obtained from the provider. Please run a GET on the created integration until it returns a createStatus of Completed, and the list of available phone numbers obtained from the provider. You can then specify one of the available phone numbers in the PATCH call on the integration to activate it.
	 * @param {Object} body WhatsAppEmbeddedSignupIntegrationRequest
	 */
	postConversationsMessagingIntegrationsWhatsappEmbeddedsignup(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessagingIntegrationsWhatsappEmbeddedsignup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/whatsapp/embeddedsignup', 
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
	 * Create a messaging setting
	 * 
	 * @param {Object} body MessagingSetting
	 */
	postConversationsMessagingSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessagingSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/settings', 
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
	 * Create a Supported Content profile
	 * 
	 * @param {Object} body SupportedContent
	 */
	postConversationsMessagingSupportedcontent(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessagingSupportedcontent';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/supportedcontent', 
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
	 * Search conversations
	 * 
	 * @param {Object} body Search request options
	 */
	postConversationsParticipantsAttributesSearch(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsParticipantsAttributesSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/participants/attributes/search', 
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
	 * Apply wrap-up for this conversation communication
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Wrap-up
	 * @deprecated
	 */
	postConversationsScreenshareParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsScreenshareParticipantCommunicationWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationsScreenshareParticipantCommunicationWrapup';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling postConversationsScreenshareParticipantCommunicationWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/screenshares/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId },
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
	 * Apply wrap-up for this conversation communication
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Wrap-up
	 */
	postConversationsSocialParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsSocialParticipantCommunicationWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationsSocialParticipantCommunicationWrapup';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling postConversationsSocialParticipantCommunicationWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/socials/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId },
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
	 * Create an Agent-Type video conference and assign an agent to it
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * postConversationsVideoAgentconferenceCommunication is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postConversationsVideoAgentconferenceCommunication(conversationId, communicationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsVideoAgentconferenceCommunication';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling postConversationsVideoAgentconferenceCommunication';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/videos/{conversationId}/agentconference/communications/{communicationId}', 
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
	 * Apply wrap-up for this conversation communication
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Wrap-up
	 */
	postConversationsVideoParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsVideoParticipantCommunicationWrapup';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationsVideoParticipantCommunicationWrapup';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling postConversationsVideoParticipantCommunicationWrapup';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/videos/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId },
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
	 * Generate a meetingId for a given conferenceId
	 * 
	 * @param {Object} body MeetingIdRequest
	 * postConversationsVideosMeetings is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postConversationsVideosMeetings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsVideosMeetings';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/videos/meetings', 
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling putConversationParticipantFlaggedreason';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
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
	 * Set the secure attributes on a conversation.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} body Conversation Secure Attributes
	 */
	putConversationSecureattributes(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling putConversationSecureattributes';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationSecureattributes';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/secureattributes', 
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
	 * Update the tags on a conversation.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} body Conversation Tags
	 */
	putConversationTags(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling putConversationsCallParticipantCommunicationUuidata';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling putConversationsCallParticipantCommunicationUuidata';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
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
	 * Update a conversation by setting its recording state
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body SetRecordingState
	 */
	putConversationsCallRecordingstate(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling putConversationsCallRecordingstate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsCallRecordingstate';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/recordingstate', 
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
	 * Update a conversation by setting its recording state
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body SetRecordingState
	 */
	putConversationsCallbackRecordingstate(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling putConversationsCallbackRecordingstate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsCallbackRecordingstate';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/callbacks/{conversationId}/recordingstate', 
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
	 * Update a conversation by setting its recording state
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {Object} body SetRecordingState
	 * @deprecated
	 */
	putConversationsChatRecordingstate(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling putConversationsChatRecordingstate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsChatRecordingstate';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/chats/{conversationId}/recordingstate', 
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
	 * Update a conversation by setting its recording state
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {Object} body SetRecordingState
	 * @deprecated
	 */
	putConversationsCobrowsesessionRecordingstate(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling putConversationsCobrowsesessionRecordingstate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsCobrowsesessionRecordingstate';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/cobrowsesessions/{conversationId}/recordingstate', 
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
	 * Update conversation draft reply
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Draft
	 */
	putConversationsEmailMessagesDraft(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
	 * Update a conversation by setting its recording state
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body SetRecordingState
	 */
	putConversationsEmailRecordingstate(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling putConversationsEmailRecordingstate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsEmailRecordingstate';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/recordingstate', 
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
	 * Update the encryption key configurations
	 * 
	 * @param {String} keyconfigurationsId Key Configurations Id
	 * @param {Object} body Encryption key configuration metadata
	 */
	putConversationsKeyconfiguration(keyconfigurationsId, body) { 
		// verify the required parameter 'keyconfigurationsId' is set
		if (keyconfigurationsId === undefined || keyconfigurationsId === null || keyconfigurationsId === '') {
			throw 'Missing the required parameter "keyconfigurationsId" when calling putConversationsKeyconfiguration';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsKeyconfiguration';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/keyconfigurations/{keyconfigurationsId}', 
			'PUT', 
			{ 'keyconfigurationsId': keyconfigurationsId },
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
	 * Update a conversation by setting its recording state
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body SetRecordingState
	 */
	putConversationsMessageRecordingstate(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling putConversationsMessageRecordingstate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsMessageRecordingstate';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}/recordingstate', 
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
	 * Create an identity resolution settings for a Apple messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body IdentityResolutionConfig
	 * putConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	putConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling putConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/identityresolution/integrations/apple/{integrationId}', 
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
	 * Create an identity resolution settings for a Facebook messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body IdentityResolutionConfig
	 */
	putConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling putConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/identityresolution/integrations/facebook/{integrationId}', 
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
	 * Create identity resolution settings for an Instagram messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body IdentityResolutionConfig
	 */
	putConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling putConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/identityresolution/integrations/instagram/{integrationId}', 
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
	 * Update an open messaging integration Identity Resolution settings
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body 
	 */
	putConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling putConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/identityresolution/integrations/open/{integrationId}', 
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
	 * Create an identity resolution settings for an X (Formally Twitter) messaging integration
	 * 
	 * @param {String} integrationId Integration Id
	 * @param {Object} body IdentityResolutionConfig
	 */
	putConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling putConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/identityresolution/integrations/twitter/{integrationId}', 
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
	 * Update a whatsApp integration Identity Resolution settings
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body 
	 */
	putConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling putConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/identityresolution/integrations/whatsapp/{integrationId}', 
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
	 * Set the organization's default setting that may be applied to to integrations without settings
	 * When an integration is created a settings ID may be assigned to it. If the settings ID is not supplied, the default settings will be assigned to it.
	 * @param {Object} body MessagingSetting
	 */
	putConversationsMessagingSettingsDefault(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsMessagingSettingsDefault';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/settings/default', 
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

	/**
	 * Set the organization's default supported content profile that may be assigned to an integration when it is created.
	 * When an integration is created a supported content ID may be assigned to it. If the supported content ID is not supplied, the default supported content profile will be assigned to it.
	 * @param {Object} body SupportedContent
	 */
	putConversationsMessagingSupportedcontentDefault(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsMessagingSupportedcontentDefault';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/supportedcontent/default', 
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

	/**
	 * Update a conversation by setting its recording state
	 * This endpoint is deprecated. Please see the article https://help.mypurecloud.com/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {Object} body SetRecordingState
	 * @deprecated
	 */
	putConversationsScreenshareRecordingstate(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling putConversationsScreenshareRecordingstate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsScreenshareRecordingstate';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/screenshares/{conversationId}/recordingstate', 
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
	 * Update a conversation by setting its recording state
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body SetRecordingState
	 */
	putConversationsSocialRecordingstate(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling putConversationsSocialRecordingstate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsSocialRecordingstate';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/socials/{conversationId}/recordingstate', 
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
	 * Update a conversation by setting its recording state
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body SetRecordingState
	 */
	putConversationsVideoRecordingstate(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling putConversationsVideoRecordingstate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsVideoRecordingstate';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/videos/{conversationId}/recordingstate', 
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

}


export default ConversationsApi;
