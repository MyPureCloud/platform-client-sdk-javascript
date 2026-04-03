import ApiClient from '../ApiClient.js';


class ConversationsApi {
	/**
	 * Conversations service.
	 * @module purecloud-platform-client-v2/api/ConversationsApi
	 * @version 250.0.0
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
	 * Delete/cancel an async request for conversation aggregates
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * deleteAnalyticsConversationsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteAnalyticsConversationsAggregatesJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling deleteAnalyticsConversationsAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/aggregates/jobs/{jobId}', 
			'DELETE', 
			{ 'jobId': jobId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete/cancel an async details job
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteAnalyticsConversationsDetailsJob(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a conversation by disconnecting all of the participants
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteConversation(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling deleteConversation';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}', 
			'DELETE', 
			{ 'conversationId': conversationId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a custom attributes record.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} attributesId attributesId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteConversationCustomattribute(conversationId, attributesId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling deleteConversationCustomattribute';
		}
		// verify the required parameter 'attributesId' is set
		if (attributesId === undefined || attributesId === null || attributesId === '') {
			throw 'Missing the required parameter "attributesId" when calling deleteConversationCustomattribute';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/customattributes/{attributesId}', 
			'DELETE', 
			{ 'conversationId': conversationId,'attributesId': attributesId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a code used to add a communication to this participant
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {String} addCommunicationCode addCommunicationCode
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteConversationParticipantCode(conversationId, participantId, addCommunicationCode, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Remove flagged reason from conversation participant.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteConversationParticipantFlaggedreason(conversationId, participantId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Remove mandatory post call actions.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteConversationsCallParticipantCommunicationPostflowaction(conversationId, participantId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling deleteConversationsCallParticipantCommunicationPostflowaction';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling deleteConversationsCallParticipantCommunicationPostflowaction';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling deleteConversationsCallParticipantCommunicationPostflowaction';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/postflowaction', 
			'DELETE', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Cancel the transfer
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteConversationsCallParticipantConsult(conversationId, participantId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete attachment from draft
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} attachmentId attachmentId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteConversationsEmailMessagesDraftAttachment(conversationId, attachmentId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Remove a cached media item asychronously
	 * 
	 * @param {String} cachedMediaItemId cachedMediaItemId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteConversationsMessagesCachedmediaCachedMediaItemId(cachedMediaItemId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete an Apple messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteConversationsMessagingIntegrationsAppleIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling deleteConversationsMessagingIntegrationsAppleIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/apple/{integrationId}', 
			'DELETE', 
			{ 'integrationId': integrationId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a Facebook messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteConversationsMessagingIntegrationsFacebookIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete Instagram messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteConversationsMessagingIntegrationsInstagramIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete an Open messaging integration with the Google Business Profile extension
	 * See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * deleteConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofileIntegrationId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofileIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling deleteConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofileIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/open/extensions/googlebusinessprofile/{integrationId}', 
			'DELETE', 
			{ 'integrationId': integrationId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete an Open messaging integration
	 * See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteConversationsMessagingIntegrationsOpenIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete Twitter messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteConversationsMessagingIntegrationsTwitterIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a WhatsApp messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteConversationsMessagingIntegrationsWhatsappIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a messaging setting
	 * 
	 * @param {String} messageSettingId Message Setting ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteConversationsMessagingSetting(messageSettingId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete the organization's default setting, a global default will be applied to integrations without settings
	 * When an integration is created a settings ID may be assigned to it. If the settings ID is not supplied, the default settings will be assigned to it.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteConversationsMessagingSettingsDefault(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a supported content profile
	 * 
	 * @param {String} supportedContentId Supported Content ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteConversationsMessagingSupportedcontentSupportedContentId(supportedContentId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a conversation by id
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getAnalyticsConversationDetails(conversationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get status for async query for conversation aggregates
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getAnalyticsConversationsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsConversationsAggregatesJob(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Fetch a page of results for an async aggregates query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets multiple conversations by id
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.id Comma-separated conversation ids
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get status for async query for conversation details
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getAnalyticsConversationsDetailsJob(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Fetch a page of results for an async details job
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page)
	 * @param {Number} opts.pageSize The desired maximum number of results
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Lookup the datalake availability date and time
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getAnalyticsConversationsDetailsJobsAvailability(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get conversation
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversation(conversationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get checklist info for a single checklist.
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} communicationId Communication ID
	 * @param {String} agentChecklistId Agent Checklist ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationCommunicationAgentchecklist(conversationId, communicationId, agentChecklistId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationCommunicationAgentchecklist';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling getConversationCommunicationAgentchecklist';
		}
		// verify the required parameter 'agentChecklistId' is set
		if (agentChecklistId === undefined || agentChecklistId === null || agentChecklistId === '') {
			throw 'Missing the required parameter "agentChecklistId" when calling getConversationCommunicationAgentchecklist';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/communications/{communicationId}/agentchecklists/{agentChecklistId}', 
			'GET', 
			{ 'conversationId': conversationId,'communicationId': communicationId,'agentChecklistId': agentChecklistId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get inference job status
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} communicationId Communication ID
	 * @param {String} agentChecklistId Agent Checklist ID
	 * @param {String} jobId Inference Job ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationCommunicationAgentchecklistJob(conversationId, communicationId, agentChecklistId, jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationCommunicationAgentchecklistJob';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling getConversationCommunicationAgentchecklistJob';
		}
		// verify the required parameter 'agentChecklistId' is set
		if (agentChecklistId === undefined || agentChecklistId === null || agentChecklistId === '') {
			throw 'Missing the required parameter "agentChecklistId" when calling getConversationCommunicationAgentchecklistJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getConversationCommunicationAgentchecklistJob';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/communications/{communicationId}/agentchecklists/{agentChecklistId}/jobs/{jobId}', 
			'GET', 
			{ 'conversationId': conversationId,'communicationId': communicationId,'agentChecklistId': agentChecklistId,'jobId': jobId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get information of all checklists associated with a conversation.
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} communicationId Communication ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationCommunicationAgentchecklists(conversationId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationCommunicationAgentchecklists';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling getConversationCommunicationAgentchecklists';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/communications/{communicationId}/agentchecklists', 
			'GET', 
			{ 'conversationId': conversationId,'communicationId': communicationId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get message
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {String} messageId messageId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationCommunicationInternalmessage(conversationId, communicationId, messageId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get custom attributes by id
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} attributesId attributesId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationCustomattribute(conversationId, attributesId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationCustomattribute';
		}
		// verify the required parameter 'attributesId' is set
		if (attributesId === undefined || attributesId === null || attributesId === '') {
			throw 'Missing the required parameter "attributesId" when calling getConversationCustomattribute';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/customattributes/{attributesId}', 
			'GET', 
			{ 'conversationId': conversationId,'attributesId': attributesId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of custom attributes for a conversation.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationCustomattributes(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationCustomattributes';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/customattributes', 
			'GET', 
			{ 'conversationId': conversationId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Fetch info on a secure session
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {String} secureSessionId secure IVR session ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationParticipantSecureivrsession(conversationId, participantId, secureSessionId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of secure sessions for this participant.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationParticipantSecureivrsessions(conversationId, participantId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the wrap-up for this conversation participant. 
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates if the wrap-up code is provisional. (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get list of wrapup codes for this conversation participant
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationParticipantWrapupcodes(conversationId, participantId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the secure attributes on a conversation.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationSecureattributes(conversationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Suggestion.
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} suggestionId Suggestion ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationSuggestion(conversationId, suggestionId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the summaries of the conversation.
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationSummaries(conversationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get active conversations for the logged in user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.communicationType Call or Chat communication filtering
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get call conversation
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsCall(conversationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the wrap-up for this conversation participant. 
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get list of wrapup codes for this conversation participant
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsCallParticipantWrapupcodes(conversationId, participantId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get callback conversation
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsCallback(conversationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the wrap-up for this conversation participant. 
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get list of wrapup codes for this conversation participant
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsCallbackParticipantWrapupcodes(conversationId, participantId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the logged-in user's active conversations and their Callback participants state.
	 * This endpoint answers three questions:- Is the user involved in any active conversation? - Does that active conversation include Callbacks?  - Is the user directly participating in a Callback within that conversation?
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsCallbacks(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the logged-in user's active conversations and their Call participants state.
	 * This endpoint answers three questions:- Is the user involved in any active conversation? - Does that active conversation include Calls?  - Is the user directly participating in a Call within that conversation?
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsCalls(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the maximum number of participants that this user can have on a conference
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsCallsMaximumconferenceparties(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get chat conversation
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getConversationsChat(conversationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a web chat conversation message
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/. The current user must be involved with the conversation to get its messages.
	 * @param {String} conversationId conversationId
	 * @param {String} messageId messageId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getConversationsChatMessage(conversationId, messageId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the messages of a chat conversation.
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/. The current user must be involved with the conversation to get its messages.
	 * @param {String} conversationId conversationId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after If specified, get the messages chronologically after the id of this message
	 * @param {String} opts.before If specified, get the messages chronologically before the id of this message
	 * @param {Object} opts.sortOrder Sort order (default to ascending)
	 * @param {Number} opts.maxResults Limit the returned number of messages, up to a maximum of 100 (default to 100)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the wrap-up for this conversation communication. 
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the wrap-up for this conversation participant. 
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get list of wrapup codes for this conversation participant
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getConversationsChatParticipantWrapupcodes(conversationId, participantId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get active chat conversations for the logged in user
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getConversationsChats(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get cobrowse conversation
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsCobrowsesession(conversationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the wrap-up for this conversation communication. 
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the wrap-up for this conversation participant. 
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get list of wrapup codes for this conversation participant
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getConversationsCobrowsesessionParticipantWrapupcodes(conversationId, participantId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get active cobrowse conversations for the logged in user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsCobrowsesessions(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsCustomattributesSchema(schemaId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling getConversationsCustomattributesSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/customattributes/schemas/{schemaId}', 
			'GET', 
			{ 'schemaId': schemaId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a specific version of a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {String} versionId Schema version
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsCustomattributesSchemaVersion(schemaId, versionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling getConversationsCustomattributesSchemaVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getConversationsCustomattributesSchemaVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/customattributes/schemas/{schemaId}/versions/{versionId}', 
			'GET', 
			{ 'schemaId': schemaId,'versionId': versionId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get all versions of a CCA schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsCustomattributesSchemaVersions(schemaId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling getConversationsCustomattributesSchemaVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/customattributes/schemas/{schemaId}/versions', 
			'GET', 
			{ 'schemaId': schemaId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of schemas.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsCustomattributesSchemas(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/customattributes/schemas', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the core types from which all schemas are built.
	 * 
	 * @param {String} coreTypeName Name of the core type
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsCustomattributesSchemasCoretype(coreTypeName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'coreTypeName' is set
		if (coreTypeName === undefined || coreTypeName === null || coreTypeName === '') {
			throw 'Missing the required parameter "coreTypeName" when calling getConversationsCustomattributesSchemasCoretype';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/customattributes/schemas/coretypes/{coreTypeName}', 
			'GET', 
			{ 'coreTypeName': coreTypeName },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the list of core types enabled for a specific namespace.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsCustomattributesSchemasCoretypes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/customattributes/schemas/coretypes', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get quantitative limits on schemas
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsCustomattributesSchemasLimits(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/customattributes/schemas/limits', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get email conversation
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsEmail(conversationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get conversation message
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} messageId messageId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsEmailMessage(conversationId, messageId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get conversation messages
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeAgentlessStitchedMessages Whether to include Agentless 'api' type of messages, on stitched conversations. If you provide a conversationId in the agentless email request (/api/v2/conversations/emails/agentless) that matches an existing conversation, then that's a stitched agentless message. (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsEmailMessages(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsEmailMessages';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/emails/{conversationId}/messages', 
			'GET', 
			{ 'conversationId': conversationId },
			{ 'includeAgentlessStitchedMessages': opts['includeAgentlessStitchedMessages'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get conversation draft reply
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsEmailMessagesDraft(conversationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the wrap-up for this conversation participant. 
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get list of wrapup codes for this conversation participant
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsEmailParticipantWrapupcodes(conversationId, participantId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get emails settings for a given conversation
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsEmailSettings(conversationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the logged-in user's active conversations and their Email participants state.
	 * This endpoint answers three questions:- Is the user involved in any active conversation? - Does that active conversation include Emails?  - Is the user directly participating in an Email within that conversation?
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsEmails(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get internal message conversation
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsInternalmessage(conversationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the logged-in user's active conversations and their InternalMessage participants state.
	 * This endpoint answers three questions:- Is the user involved in any active conversation? - Does that active conversation include InternalMessages?  - Is the user directly participating in an InternalMessage within that conversation?
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsInternalmessages(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the encryption key configurations
	 * 
	 * @param {String} keyconfigurationsId Key Configurations Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsKeyconfiguration(keyconfigurationsId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of key configurations data
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsKeyconfigurations(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get message conversation
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessage(conversationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get message media list by status
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.status The status on which to filter the response.
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessageCommunicationMessagesMedia(conversationId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationsMessageCommunicationMessagesMedia';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling getConversationsMessageCommunicationMessagesMedia';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media', 
			'GET', 
			{ 'conversationId': conversationId,'communicationId': communicationId },
			{ 'status': opts['status'],'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get media
	 * See https://developer.genesys.cloud/commdigital/digital/messagemediaupload/ for example usage.
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {String} mediaId mediaId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessageCommunicationMessagesMediaMediaId(conversationId, communicationId, mediaId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get message
	 * 
	 * @param {String} messageId messageId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.useNormalizedMessage If true, response removes deprecated fields (textBody, media) (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get conversation message
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} messageId messageId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.useNormalizedMessage If true, response removes deprecated fields (textBody, media) (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the wrap-up for this conversation participant. 
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get list of wrapup codes for this conversation participant
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessageParticipantWrapupcodes(conversationId, participantId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the logged-in user's active conversations and their Message participants state.
	 * This endpoint answers three questions:- Is the user involved in any active conversation? - Does that active conversation include Messages?  - Is the user directly participating in a Message within that conversation?
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessages(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of cached media items
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.url URL to search for
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a cached media item
	 * 
	 * @param {String} cachedMediaItemId cachedMediaItemId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessagesCachedmediaCachedMediaItemId(cachedMediaItemId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Genesys Facebook App Id
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessagingFacebookApp(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of Facebook Permissions
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessagingFacebookPermissions(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Apple messaging integration identity resolution settings
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Facebook messaging integration identity resolution settings
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get an Instagram integration identity resolution settings
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get an open messaging integration Identity Resolution settings
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get X (Formally Twitter) messaging integration identity resolution settings
	 * 
	 * @param {String} integrationId Integration Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a whatsApp integration Identity Resolution settings
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get twitter oauth settings to patch an integration
	 * 
	 * @param {String} integrationId Integration Id of an existing integration that needs to be patched with new oauth settings
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessagingIntegrationTwitterOauthSettings(integrationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of Apple Integrations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @param {String} opts.supportedContentId Filter integrations returned based on the supported content ID
	 * @param {String} opts.messagingSettingId Filter integrations returned based on the setting ID
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessagingIntegrationsApple(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/apple', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'supportedContent.id': opts['supportedContentId'],'messagingSetting.id': opts['messagingSettingId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get an Apple messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessagingIntegrationsAppleIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling getConversationsMessagingIntegrationsAppleIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/apple/{integrationId}', 
			'GET', 
			{ 'integrationId': integrationId },
			{ 'expand': opts['expand'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a Facebook messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Instagram messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get an Open messaging integration with the Google Business Profile extension
	 * See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofileIntegrationId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofileIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling getConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofileIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/open/extensions/googlebusinessprofile/{integrationId}', 
			'GET', 
			{ 'integrationId': integrationId },
			{ 'expand': opts['expand'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Google Business Profile OAuth 2 settings
	 * See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofileOauthSettings is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofileOauthSettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/open/extensions/googlebusinessprofile/oauth/settings', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a Google Auth Token
	 * See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.
	 * @param {String} tokenId Token ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofileToken is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofileToken(tokenId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tokenId' is set
		if (tokenId === undefined || tokenId === null || tokenId === '') {
			throw 'Missing the required parameter "tokenId" when calling getConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofileToken';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/open/extensions/googlebusinessprofile/tokens/{tokenId}', 
			'GET', 
			{ 'tokenId': tokenId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Google Business Profile accounts
	 * See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.
	 * @param {String} tokenId Token ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofileTokenAccounts is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofileTokenAccounts(tokenId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tokenId' is set
		if (tokenId === undefined || tokenId === null || tokenId === '') {
			throw 'Missing the required parameter "tokenId" when calling getConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofileTokenAccounts';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/open/extensions/googlebusinessprofile/tokens/{tokenId}/accounts', 
			'GET', 
			{ 'tokenId': tokenId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get an Open messaging integration
	 * See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Twitter messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get twitter oauth settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessagingIntegrationsTwitterOauthSettings(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a WhatsApp messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Call Authentication provider callback to validate state and code
	 * 
	 * @param {String} code The authorization code to be sent to the authentication server during the token request.
	 * @param {String} state The state/nonce value generated by Genesys Auth-Client Service.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.error Error parameter from OAuth provider
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessagingOauthAppleCallback(code, state, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'code' is set
		if (code === undefined || code === null) {
			throw 'Missing the required parameter "code" when calling getConversationsMessagingOauthAppleCallback';
		}
		// verify the required parameter 'state' is set
		if (state === undefined || state === null) {
			throw 'Missing the required parameter "state" when calling getConversationsMessagingOauthAppleCallback';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/oauth/apple/callback', 
			'GET', 
			{  },
			{ 'code': code,'state': state,'error': opts['error'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a messaging setting
	 * 
	 * @param {String} messageSettingId Message Setting ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessagingSetting(messageSettingId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of messaging settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the organization's default settings that will be used as the default when creating an integration.
	 * When an integration is created a settings ID may be assigned to it. If the settings ID is not supplied, the default settings will be assigned to it.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessagingSettingsDefault(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of Supported Content profiles
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the organization's default supported content profile that will be used as the default when creating an integration.
	 * When an integration is created a supported content ID may be assigned to it. If the supported content ID is not supplied, the default supported content profile will be assigned to it.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessagingSupportedcontentDefault(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a supported content profile
	 * 
	 * @param {String} supportedContentId Supported Content ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessagingSupportedcontentSupportedContentId(supportedContentId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get conversation threading window timeline for each messaging type
	 * Conversation messaging threading timeline is a setting defined for each messenger type in your organization. This setting will dictate whether a new message is added to the most recent existing conversation, or creates a new Conversation. If the existing Conversation is still in a connected state the threading timeline setting will never play a role. After the conversation is disconnected, if an inbound message is received or an outbound message is sent after the setting for threading timeline expires, a new conversation is created.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsMessagingThreadingtimeline(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the wrap-up for this conversation communication. 
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.provisional Indicates whether or not to fetch provisional wrap-up code. (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsSettings(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get video conference details (e.g. the current number of active participants).
	 * 
	 * @param {String} conferenceId conferenceId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getConversationsVideoDetails is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getConversationsVideoDetails(conferenceId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets a record for a given meetingId
	 * 
	 * @param {String} meetingId meetingId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsVideosMeeting(meetingId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a single custom attributes record by amending the data with only the provided fields.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationCustomattributes(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationCustomattributes';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/customattributes', 
			'PATCH', 
			{ 'conversationId': conversationId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a list of custom attributes record by amending the data with only the provided fields.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationCustomattributesBulk(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationCustomattributesBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/customattributes/bulk', 
			'PATCH', 
			{ 'conversationId': conversationId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a participant.
	 * Update conversation participant.
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} body Update request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationParticipant(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update the attributes on a conversation participant.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} body Participant attributes
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationParticipantAttributes(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a conversation by setting its recording state
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} body SetRecordingState
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationRecordingstate(conversationId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationRecordingstate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationRecordingstate';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/recordingstate', 
			'PATCH', 
			{ 'conversationId': conversationId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update the secure attributes on a conversation.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} body Conversation Secure Attributes
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationSecureattributes(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update agent's engagement for the summary.
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} summaryId Summary ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update the feedback for the summary.
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} summaryId Summary ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update the utilization label on a conversation. When there is no value provided, the system default label is applied
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} body Conversation Utilization Label
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationUtilizationlabel(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update after-call work for this conversation communication.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body AfterCallWorkUpdate
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsAftercallworkConversationIdParticipantCommunication(conversationId, participantId, communicationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a conversation by setting its recording state, merging in other conversations to create a conference, or disconnecting all of the participants
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Conversation
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsCall(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a conversation by merging in other conversations to create a conference
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body UpdateConferenceRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsCallConference(conversationId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCallConference';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsCallConference';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/conference', 
			'PATCH', 
			{ 'conversationId': conversationId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update conversation participant
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Participant request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsCallParticipant(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update the attributes on a conversation participant.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Participant attributes
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsCallParticipantAttributes(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update conversation participant's communication by disconnecting it. This endpoint does not update wrapup.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Participant
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsCallParticipantCommunication(conversationId, participantId, communicationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Set mandatory post call actions.  If both values are null or blank error will occur.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Action
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsCallParticipantCommunicationPostflowaction(conversationId, participantId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCallParticipantCommunicationPostflowaction';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling patchConversationsCallParticipantCommunicationPostflowaction';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling patchConversationsCallParticipantCommunicationPostflowaction';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/postflowaction', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Change who can speak
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body new speak to
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsCallParticipantConsult(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update conversation participant on behalf of a user
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} userId userId
	 * @param {Object} body Participant request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsCallParticipantUserUserId(conversationId, participantId, userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchConversationsCallParticipantUserUserId';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling patchConversationsCallParticipantUserUserId';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling patchConversationsCallParticipantUserUserId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsCallParticipantUserUserId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/user/{userId}', 
			'PATCH', 
			{ 'conversationId': conversationId,'participantId': participantId,'userId': userId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a conversation by disconnecting all of the participants
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Conversation
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsCallback(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update conversation participant
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Participant
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsCallbackParticipant(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update the attributes on a conversation participant.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Attributes
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsCallbackParticipantAttributes(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update conversation participant's communication by disconnecting it.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Participant
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsCallbackParticipantCommunication(conversationId, participantId, communicationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a scheduled callback
	 * 
	 * @param {Object} body PatchCallbackRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsCallbacks(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a conversation by disconnecting all of the participants
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {Object} body Conversation
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	patchConversationsChat(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update conversation participant
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Update request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	patchConversationsChatParticipant(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update the attributes on a conversation participant.
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Participant attributes
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	patchConversationsChatParticipantAttributes(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update conversation participant's communication by disconnecting it. This endpoint does not update wrapup.
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Participant
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	patchConversationsChatParticipantCommunication(conversationId, participantId, communicationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a conversation by disconnecting all of the participants
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {Object} body Conversation
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	patchConversationsCobrowsesession(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update conversation participant
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update the attributes on a conversation participant.
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update conversation participant's communication by disconnecting it.
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Participant
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	patchConversationsCobrowsesessionParticipantCommunication(conversationId, participantId, communicationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a conversation by disconnecting all of the participants
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Conversation
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsEmail(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update conversation participant
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Update request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsEmailParticipant(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update the attributes on a conversation participant.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Participant attributes
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsEmailParticipantAttributes(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update conversation participant's communication by disconnecting it. This endpoint does not update wrapup.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Participant
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsEmailParticipantCommunication(conversationId, participantId, communicationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update conversation by setting its parking state
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Parking update request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsEmailParticipantParkingstate(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a conversation by disconnecting all of the participants
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Conversation
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsMessage(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update conversation participant
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update the attributes on a conversation participant.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update conversation participant's communication by disconnecting it. This endpoint does not update wrapup.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Participant
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsMessageParticipantCommunication(conversationId, participantId, communicationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update an Apple messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body AppleIntegrationUpdateRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsMessagingIntegrationsAppleIntegrationId(integrationId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling patchConversationsMessagingIntegrationsAppleIntegrationId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsMessagingIntegrationsAppleIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/apple/{integrationId}', 
			'PATCH', 
			{ 'integrationId': integrationId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update Facebook messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body FacebookIntegrationUpdateRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsMessagingIntegrationsFacebookIntegrationId(integrationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update Instagram messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body InstagramIntegrationUpdateRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsMessagingIntegrationsInstagramIntegrationId(integrationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update an Open messaging integration with the Google Business Profile extension
	 * See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.
	 * @param {String} integrationId Integration ID
	 * @param {Object} body GoogleBusinessProfileOpenIntegrationUpdateRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * patchConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofileIntegrationId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofileIntegrationId(integrationId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling patchConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofileIntegrationId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofileIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/open/extensions/googlebusinessprofile/{integrationId}', 
			'PATCH', 
			{ 'integrationId': integrationId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update an Open messaging integration
	 * See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.
	 * @param {String} integrationId Integration ID
	 * @param {Object} body OpenIntegrationUpdateRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsMessagingIntegrationsOpenIntegrationId(integrationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a Twitter messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body TwitterIntegrationUpdateRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsMessagingIntegrationsTwitterIntegrationId(integrationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Activate a WhatsApp messaging integration created using the WhatsApp embedded signup flow
	 * Please specify the phone number to associate with this WhatsApp integration from the list of available phone numbers returned to you in the GET call on the integration with a createStatus of Completed. You can then run a GET on the integration to check if its status has been updated to Active.
	 * @param {String} integrationId Integration ID
	 * @param {Object} body WhatsAppEmbeddedSignupIntegrationActivationRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId(integrationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a WhatsApp messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body WhatsAppIntegrationUpdateRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsMessagingIntegrationsWhatsappIntegrationId(integrationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a messaging setting
	 * 
	 * @param {String} messageSettingId Message Setting ID
	 * @param {Object} body MessagingSetting
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsMessagingSetting(messageSettingId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a supported content profile
	 * 
	 * @param {String} supportedContentId Supported Content ID
	 * @param {Object} body SupportedContent
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsMessagingSupportedcontentSupportedContentId(supportedContentId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update Settings
	 * 
	 * @param {Object} body Settings
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchConversationsSettings(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Index conversation properties
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAnalyticsConversationDetailsProperties(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query for conversation activity observations
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The desired page size
	 * @param {Number} opts.pageNumber The desired page number
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query for conversation aggregates asynchronously
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * postAnalyticsConversationsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postAnalyticsConversationsAggregatesJobs(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query for conversation aggregates
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAnalyticsConversationsAggregatesQuery(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query for conversation details asynchronously
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAnalyticsConversationsDetailsJobs(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query for conversation details
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAnalyticsConversationsDetailsQuery(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Attempts to manually assign a specified conversation to a specified user.  Ignores bullseye ring, PAR score, skills, and languages.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} body Targeted user
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationAssign(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Barge a conversation creating a barged in conference of connected participants.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationBarge(conversationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Creates a cobrowse session. Requires conversation:cobrowse:add (for web messaging) or conversation:cobrowsevoice:add permission.
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationCobrowse(conversationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Agent Checklist activation API
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} communicationId Communication ID
	 * @param {String} agentChecklistId Agent Checklist ID
	 * @param {Object} body Agent checklist activation payload
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationCommunicationAgentchecklist(conversationId, communicationId, agentChecklistId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationCommunicationAgentchecklist';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling postConversationCommunicationAgentchecklist';
		}
		// verify the required parameter 'agentChecklistId' is set
		if (agentChecklistId === undefined || agentChecklistId === null || agentChecklistId === '') {
			throw 'Missing the required parameter "agentChecklistId" when calling postConversationCommunicationAgentchecklist';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationCommunicationAgentchecklist';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/communications/{communicationId}/agentchecklists/{agentChecklistId}', 
			'POST', 
			{ 'conversationId': conversationId,'communicationId': communicationId,'agentChecklistId': agentChecklistId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * API invoked to capture an agent action.
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} communicationId Communication ID
	 * @param {String} agentChecklistId Agent Checklist ID
	 * @param {Object} body Agent action payload
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationCommunicationAgentchecklistAgentaction(conversationId, communicationId, agentChecklistId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationCommunicationAgentchecklistAgentaction';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling postConversationCommunicationAgentchecklistAgentaction';
		}
		// verify the required parameter 'agentChecklistId' is set
		if (agentChecklistId === undefined || agentChecklistId === null || agentChecklistId === '') {
			throw 'Missing the required parameter "agentChecklistId" when calling postConversationCommunicationAgentchecklistAgentaction';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationCommunicationAgentchecklistAgentaction';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/communications/{communicationId}/agentchecklists/{agentChecklistId}/agentaction', 
			'POST', 
			{ 'conversationId': conversationId,'communicationId': communicationId,'agentChecklistId': agentChecklistId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create inference job
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} communicationId Communication ID
	 * @param {String} agentChecklistId Agent Checklist ID
	 * @param {Object} body Agent checklist inference job payload
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationCommunicationAgentchecklistJobs(conversationId, communicationId, agentChecklistId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationCommunicationAgentchecklistJobs';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling postConversationCommunicationAgentchecklistJobs';
		}
		// verify the required parameter 'agentChecklistId' is set
		if (agentChecklistId === undefined || agentChecklistId === null || agentChecklistId === '') {
			throw 'Missing the required parameter "agentChecklistId" when calling postConversationCommunicationAgentchecklistJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationCommunicationAgentchecklistJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/communications/{communicationId}/agentchecklists/{agentChecklistId}/jobs', 
			'POST', 
			{ 'conversationId': conversationId,'communicationId': communicationId,'agentChecklistId': agentChecklistId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * API invoked to finalize agent checklist evaluation.
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} communicationId Communication ID
	 * @param {Object} body Agent checklist finalize payload
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationCommunicationAgentchecklistsFinalize(conversationId, communicationId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationCommunicationAgentchecklistsFinalize';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling postConversationCommunicationAgentchecklistsFinalize';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationCommunicationAgentchecklistsFinalize';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/communications/{communicationId}/agentchecklists/finalize', 
			'POST', 
			{ 'conversationId': conversationId,'communicationId': communicationId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Send internal message
	 * Send a new internal message for an existing communication.
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Message
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationCommunicationInternalmessages(conversationId, communicationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Performs a full conversation teardown. Issues disconnect requests for any connected media. Applies a system wrap-up code to any participants that are pending wrap-up. This is not intended to be the normal way of ending interactions but is available in the event of problems with the application to allow a resynchronization of state across all components. It is recommended that users submit a support case if they are relying on this endpoint systematically as there is likely something that needs investigation.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationDisconnect(conversationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a new callback for the specified participant on the conversation.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Sends DTMF to the participant
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Digits
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Setup internal message communication with user
	 * The target user of the digital consultation must have the `conversation:internalMessaging:accept` permission.
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} body Confer request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationParticipantInternalmessagesUsersCommunications(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Replace this participant (Deprecated)
	 * This endpoint is deprecated. Use one of the following endpoints instead: /transfer, /replace/agent, /replace/queue, or /replace/contact/external.
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} body Transfer request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postConversationParticipantReplace(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Replace this participant with the specified agent
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} body Transfer request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationParticipantReplaceAgent(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Replace this participant with the an external contact
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} body Transfer request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationParticipantReplaceContactExternal(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Replace this participant with the an external contact (Deprecated)
	 * This endpoint is deprecated. Use /replace/contact/external endpoint instead.
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} body Transfer request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postConversationParticipantReplaceExternal(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Replace this participant with the specified queue
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} body Transfer request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationParticipantReplaceQueue(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create secure IVR session. Only a participant in the conversation can invoke a secure IVR.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Replace this participant by another one using the address of the destination.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} body Transfer request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationParticipantTransfer(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Save an engagement on the suggestion.
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} suggestionId Suggestion ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationSuggestionEngagement(conversationId, suggestionId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Suggestion feedback.
	 * Google Agent Assist offering within Genesys will no longer be supported
	 * @param {String} conversationId Conversation ID
	 * @param {Object} body SuggestionFeedback
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postConversationSuggestionsFeedback(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Submit feedback for the summary.
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} summaryId Summary ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Place a new call as part of a callback conversation.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Conversation
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsCall(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Barge a given participant's call creating a barged in conference of connected participants.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsCallParticipantBarge(conversationId, participantId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Listen in on the conversation from the point of view of a given participant while speaking to just the given participant.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsCallParticipantCoach(conversationId, participantId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Initiate and update consult transfer (Deprecated)
	 * This endpoint is deprecated. Use one of the following endpoints instead: /voice/consult, /consult/agent, /consult/queue, or /consult/contact/external.
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Destination address and initial speak to
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postConversationsCallParticipantConsult(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Initiate a consult transfer to an agent
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Destination agent and initial speak to
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsCallParticipantConsultAgent(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Initiate a consult transfer to an external contact
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Destination address and initial speak to
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsCallParticipantConsultContactExternal(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Initiate a consult transfer to an external contact (Deprecated)
	 * This endpoint is deprecated. Use /consult/contact/external endpoints instead.
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Destination address and initial speak to
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postConversationsCallParticipantConsultExternal(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Initiate a consult transfer to a queue
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Destination queue and initial speak to
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsCallParticipantConsultQueue(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Listen in on the conversation from the point of view of a given participant.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsCallParticipantMonitor(conversationId, participantId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Replace this participant with the specified user and/or address
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Transfer request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsCallParticipantReplace(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Start/stop the snippet recording for a participant
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body snippetRecordingRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsCallParticipantSnippetRecord(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCallParticipantSnippetRecord';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationsCallParticipantSnippetRecord';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsCallParticipantSnippetRecord';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/{participantId}/snippet/record', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Initiate voice consult transfer
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Destination address and initial speak to
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsCallParticipantVoiceConsult(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Add participants to a conversation
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Conversation
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsCallParticipants(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Add participants to a conversation on behalf of a user
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} userId userId
	 * @param {Object} body Conversation
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsCallParticipantsUserUserId(conversationId, userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationsCallParticipantsUserUserId';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling postConversationsCallParticipantsUserUserId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsCallParticipantsUserUserId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/{conversationId}/participants/user/{userId}', 
			'POST', 
			{ 'conversationId': conversationId,'userId': userId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Replace this participant with the specified user and/or address
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Transfer request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsCallbackParticipantReplace(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a Callback
	 * 
	 * @param {Object} body Callback
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsCallbacks(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Disconnect multiple scheduled callbacks
	 * 
	 * @param {Object} body BulkCallbackDisconnectRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsCallbacksBulkDisconnect(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update multiple scheduled callbacks
	 * 
	 * @param {Object} body BulkCallbackPatchRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsCallbacksBulkUpdate(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a call conversation
	 * 
	 * @param {Object} body Call request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsCalls(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a call conversation on behalf of a user
	 * 
	 * @param {String} userId userId
	 * @param {Object} body Call request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsCallsUserUserId(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling postConversationsCallsUserUserId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsCallsUserUserId';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/calls/user/{userId}', 
			'POST', 
			{ 'userId': userId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Send a message on behalf of a communication in a chat conversation.
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Message
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postConversationsChatCommunicationMessages(conversationId, communicationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Send a typing-indicator on behalf of a communication in a chat conversation.
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postConversationsChatCommunicationTyping(conversationId, communicationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Apply wrap-up for this conversation communication
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Wrap-up
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Replace this participant with the specified user and/or address
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Transfer request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postConversationsChatParticipantReplace(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a web chat conversation
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {Object} body Create web chat request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postConversationsChats(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Apply wrap-up for this conversation communication
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Wrap-up
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Replace this participant with the specified user and/or address
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a schema
	 * 
	 * @param {Object} body Schema create request body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsCustomattributesSchemas(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsCustomattributesSchemas';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/customattributes/schemas', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Search resources.
	 * 
	 * @param {Object} body Search request options
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsCustomattributesSearch(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsCustomattributesSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/customattributes/search', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Send an email to an external conversation. An external conversation is one where the provider is not PureCloud based. This endpoint allows the sender of the external email to reply or send a new message to the existing conversation. The new message will be treated as part of the existing conversation and chained to it.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Send external email reply
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsEmailInboundmessages(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Send an email reply
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Reply
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsEmailMessages(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Copy attachments from an email message to the current draft.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Copy Attachment Request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsEmailMessagesDraftAttachmentsCopy(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Replace this participant with the specified user and/or address
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Transfer request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsEmailParticipantReplace(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Reconnect the user to the most recently disconnected customer on a fully disconnected email conversation
	 * This request is not valid when using the Client Credentials OAuth grant.
	 * @param {String} conversationId conversationId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsEmailReconnect(conversationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create an email conversation
	 * If the direction of the request is INBOUND, this will create an external conversation with a third party provider. If the direction of the the request is OUTBOUND, this will create a conversation to send outbound emails on behalf of a queue.
	 * @param {Object} body Create email request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsEmails(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create an email conversation, per API
	 * 
	 * @param {Object} body Create agentless email request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsEmailsAgentless(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create Fax Conversation
	 * 
	 * @param {Object} body Fax
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsFaxes(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Setup configurations for encryption key creation
	 * 
	 * @param {Object} body Encryption Configuration
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsKeyconfigurations(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Validate encryption key configurations without saving it
	 * 
	 * @param {Object} body Encryption Configuration
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsKeyconfigurationsValidate(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create media
	 * See https://developer.genesys.cloud/api/rest/v2/conversations/messaging-media-upload for example usage.
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postConversationsMessageCommunicationMessagesMedia(conversationId, communicationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a URL to upload a message media file
	 * See https://developer.genesys.cloud/commdigital/digital/messagemediaupload/ for example usage.
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {Object} body request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsMessageCommunicationMessagesMediaUploads(conversationId, communicationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Send a social media message
	 * Send a social media message on existing conversation/communication.
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {Object} body Message
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsMessageCommunicationSocialmediaMessages(conversationId, communicationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Send message typing event
	 * Send message typing event for existing conversation/communication.
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {Object} body MessageTypingEvent
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsMessageCommunicationTyping(conversationId, communicationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Send an inbound Open Event Message
	 * Send an inbound event message to an Open Messaging integration. In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least messaging scope. This will either generate a new Conversation, or be a part of an existing conversation. See https://developer.genesys.cloud/api/digital/openmessaging/ for example usage.
	 * @param {String} integrationId integrationId
	 * @param {Object} body NormalizedMessage
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsMessageInboundOpenEvent(integrationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Send inbound Open Message
	 * Send an inbound message to an Open Messaging integration. In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least messaging scope. This will either generate a new Conversation, or be a part of an existing conversation. See https://developer.genesys.cloud/api/digital/openmessaging/ for example usage.
	 * @param {String} integrationId integrationId
	 * @param {Object} body NormalizedMessage
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.prefetchConversationId Indicates whether or not to prefetch conversationId (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Send an inbound Open Receipt Message
	 * Send an inbound open Receipt to an Open Messaging integration. In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least messaging scope. This will either generate a new Conversation, or be a part of an existing conversation. See https://developer.genesys.cloud/api/digital/openmessaging/ for example usage.
	 * @param {String} integrationId integrationId
	 * @param {Object} body NormalizedMessage
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsMessageInboundOpenReceipt(integrationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Send inbound Open Response
	 * Send an inbound response for a structured message to an Open Messaging integration. In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least messaging scope. This will be a part of an existing conversation. See https://developer.genesys.cloud/api/digital/openmessaging/ for example usage.
	 * @param {String} integrationId integrationId
	 * @param {Object} body OpenInboundStructuredResponseMessage
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsMessageInboundOpenStructuredResponse(integrationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get messages in batch
	 * The path parameter [conversationId] should contain the conversationId of the conversation being filtered. The body should contain the messageId(s) of messages being requested. For example: ["a3069a33b-bbb1-4703-9d68-061d9e9db96e", "55bc6be3-078c-4a49-a4e6-1e05776ed7e8"]. The max messages you can request in the body is 1,000. Best practice is to limit to only the messages you need in each request, rather than request large batches by default.
	 * @param {String} conversationId 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.useNormalizedMessage If true, response removes deprecated fields (textBody, media) (default to false)
	 * @param {Array.<String>} opts.body messageIds
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Listen in on the conversation from the point of view of a given participant.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsMessageParticipantMonitor(conversationId, participantId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Replace this participant with the specified user and/or address
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {Object} body Transfer request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsMessageParticipantReplace(conversationId, participantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create an outbound messaging conversation.
	 * If there is an existing conversation between the remote address and the address associated with the queue specified in createOutboundRequest then the result of this request depends on the state of that conversation and the useExistingConversation field of createOutboundRequest. If the existing conversation is in alerting or connected state, then the request will fail. If the existing conversation is disconnected but still within the conversation window then the request will fail unless useExistingConversation is set to true.
	 * @param {Object} body Create outbound messaging conversation
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsMessages(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Send an agentless outbound message
	 * Send an agentless (api participant) outbound message using a client credential grant. In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least messaging scope. If there is already a connected conversation between the fromAddress and toAddress specified, the useExistingActiveConversation param can be used to barge in to the ongoing conversation.
	 * @param {Object} body Create agentless outbound messaging request
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.useNormalizedMessage If true, response removes deprecated fields (textBody, messagingTemplate) (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Send an inbound Open Message
	 * [This API is deprecated. Instead, use 1. POST /api/v2/conversations/messages/{integrationId}/inbound/open/event, if you want to send an inbound Open Event Message 2. POST /api/v2/conversations/messages/{integrationId}/inbound/open/message, if you want to send an inbound Open Message 3. POST /api/v2/conversations/messages/{integrationId}/inbound/open/receipt, to send an inbound Open Receipt Message]  In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least messaging scope. This will either generate a new Conversation, or be a part of an existing conversation. See https://developer.genesys.cloud/api/digital/openmessaging/ for example usage.
	 * @param {Object} body NormalizedMessage
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postConversationsMessagesInboundOpen(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create Apple Integration
	 * 
	 * @param {Object} body AppleIntegrationRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsMessagingIntegrationsApple(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessagingIntegrationsApple';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/apple', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a Facebook Integration
	 * 
	 * @param {Object} body FacebookIntegrationRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsMessagingIntegrationsFacebook(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create Instagram Integration
	 * 
	 * @param {Object} body InstagramIntegrationRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsMessagingIntegrationsInstagram(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create an Open messaging integration
	 * See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.
	 * @param {Object} body OpenIntegrationRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsMessagingIntegrationsOpen(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create an Open messaging integration with the Google Business Profile extension
	 * See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.
	 * @param {Object} body GoogleBusinessProfileOpenIntegrationRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * postConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofile is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofile(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofile';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/open/extensions/googlebusinessprofile', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a Google Auth Token by exchanging the one-time auth code retrieved from Google
	 * See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.
	 * @param {Object} body GoogleAuthTokenRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * postConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofileTokens is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofileTokens(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsMessagingIntegrationsOpenExtensionsGooglebusinessprofileTokens';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/messaging/integrations/open/extensions/googlebusinessprofile/tokens', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create Twitter Integration
	 * 
	 * @param {Object} body TwitterIntegrationRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsMessagingIntegrationsTwitter(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * [This API is deprecated. Use POST /api/v2/conversations/messaging/integrations/whatsapp/embeddedsignup instead] Create a WhatsApp Integration
	 * [This API is deprecated. Use POST /api/v2/conversations/messaging/integrations/whatsapp/embeddedsignup instead] You must be approved by WhatsApp to use this feature. Your approved e164-formatted phone number and valid WhatsApp certificate for your number are required. Your WhatsApp certificate must have valid base64 encoding. Please paste carefully and do not add any leading or trailing spaces. Do not alter any characters. An integration must be activated within 7 days of certificate generation. If you cannot complete the addition and activation of the number within 7 days, please obtain a new certificate before creating the integration. Integrations created with an invalid number or certificate may immediately incur additional integration fees. Please carefully enter your number and certificate as described.
	 * @param {Object} body WhatsAppIntegrationRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postConversationsMessagingIntegrationsWhatsapp(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a WhatsApp Integration using the WhatsApp embedded signup flow
	 * Use the access token returned from the embedded signup flow to obtain a list of available phone numbers that can be associated with the created integration. The returned WhatsApp integration will initially have a createStatus of Initiated until the list of available phone numbers can be obtained from the provider. Please run a GET on the created integration until it returns a createStatus of Completed, and the list of available phone numbers obtained from the provider. You can then specify one of the available phone numbers in the PATCH call on the integration to activate it.
	 * @param {Object} body WhatsAppEmbeddedSignupIntegrationRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsMessagingIntegrationsWhatsappEmbeddedsignup(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a messaging setting
	 * 
	 * @param {Object} body MessagingSetting
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsMessagingSettings(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a Supported Content profile
	 * 
	 * @param {Object} body SupportedContent
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsMessagingSupportedcontent(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Search conversations
	 * 
	 * @param {Object} body Search request options
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsParticipantsAttributesSearch(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Apply wrap-up for this conversation communication
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Wrap-up
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create an Agent-Type video conference and assign an agent to it
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} communicationId communicationId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * postConversationsVideoAgentconferenceCommunication is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postConversationsVideoAgentconferenceCommunication(conversationId, communicationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Generate a meetingId for a given conferenceId
	 * 
	 * @param {Object} body MeetingIdRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsVideosMeetings(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create or update a single custom attributes record. Updating replaces all data with the provided fields.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationCustomattributes(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling putConversationCustomattributes';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/customattributes', 
			'PUT', 
			{ 'conversationId': conversationId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create or update a list of custom attributes records. Updating replaces all data with the provided fields.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationCustomattributesBulk(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling putConversationCustomattributesBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/customattributes/bulk', 
			'PUT', 
			{ 'conversationId': conversationId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Set flagged reason on conversation participant to indicate bad conversation quality.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {String} participantId participant ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationParticipantFlaggedreason(conversationId, participantId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Set the secure attributes on a conversation.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} body Conversation Secure Attributes
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationSecureattributes(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update the tags on a conversation.
	 * 
	 * @param {String} conversationId conversation ID
	 * @param {Object} body Conversation Tags
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationTags(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Set uuiData to be sent on future commands.
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} participantId participantId
	 * @param {String} communicationId communicationId
	 * @param {Object} body UUIData Request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationsCallParticipantCommunicationUuidata(conversationId, participantId, communicationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a conversation by setting its recording state
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body SetRecordingState
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationsCallRecordingstate(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a conversation by setting its recording state
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body SetRecordingState
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationsCallbackRecordingstate(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a conversation by setting its recording state
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.
	 * @param {String} conversationId conversationId
	 * @param {Object} body SetRecordingState
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	putConversationsChatRecordingstate(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a conversation by setting its recording state
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {Object} body SetRecordingState
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	putConversationsCobrowsesessionRecordingstate(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} body Schema update request body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationsCustomattributesSchema(schemaId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling putConversationsCustomattributesSchema';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsCustomattributesSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/customattributes/schemas/{schemaId}', 
			'PUT', 
			{ 'schemaId': schemaId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update conversation draft reply
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body Draft
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationsEmailMessagesDraft(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a conversation by setting its recording state
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body SetRecordingState
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationsEmailRecordingstate(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update the encryption key configurations
	 * 
	 * @param {String} keyconfigurationsId Key Configurations Id
	 * @param {Object} body Encryption key configuration metadata
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationsKeyconfiguration(keyconfigurationsId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a conversation by setting its recording state
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body SetRecordingState
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationsMessageRecordingstate(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create an identity resolution settings for a Apple messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body IdentityResolutionConfig
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId(integrationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create an identity resolution settings for a Facebook messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body IdentityResolutionConfig
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId(integrationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create identity resolution settings for an Instagram messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body IdentityResolutionConfig
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId(integrationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update an open messaging integration Identity Resolution settings
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId(integrationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create an identity resolution settings for an X (Formally Twitter) messaging integration
	 * 
	 * @param {String} integrationId Integration Id
	 * @param {Object} body IdentityResolutionConfig
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId(integrationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a whatsApp integration Identity Resolution settings
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId(integrationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Set the organization's default setting that may be applied to to integrations without settings
	 * When an integration is created a settings ID may be assigned to it. If the settings ID is not supplied, the default settings will be assigned to it.
	 * @param {Object} body MessagingSetting
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationsMessagingSettingsDefault(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Set the organization's default supported content profile that may be assigned to an integration when it is created.
	 * When an integration is created a supported content ID may be assigned to it. If the supported content ID is not supplied, the default supported content profile will be assigned to it.
	 * @param {Object} body Reference to supported content profile
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationsMessagingSupportedcontentDefault(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update conversation threading window timeline for each messaging type
	 * PUT Conversation messaging threading timeline is intended to set the conversation threading settings for ALL messengerTypes. If you omit a messengerType in the request body then the setting for that messengerType will use the platform default value. The PUT replaces the existing setting(s) that were previously set for each messengerType.
	 * @param {Object} body ConversationThreadingWindowRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationsMessagingThreadingtimeline(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a conversation by setting its recording state
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/
	 * @param {String} conversationId conversationId
	 * @param {Object} body SetRecordingState
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	putConversationsScreenshareRecordingstate(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a conversation by setting its recording state
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body SetRecordingState
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationsSocialRecordingstate(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a conversation by setting its recording state
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body SetRecordingState
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationsVideoRecordingstate(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

}


export default ConversationsApi;
