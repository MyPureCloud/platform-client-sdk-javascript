# ConversationsApi

# platformClient.ConversationsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAnalyticsConversationsAggregatesJob**](ConversationsApi#deleteAnalyticsConversationsAggregatesJob) | **DELETE** /api/v2/analytics/conversations/aggregates/jobs/{jobId} | Delete/cancel an async request for conversation aggregates
[**deleteAnalyticsConversationsDetailsJob**](ConversationsApi#deleteAnalyticsConversationsDetailsJob) | **DELETE** /api/v2/analytics/conversations/details/jobs/{jobId} | Delete/cancel an async details job
[**deleteConversationParticipantCode**](ConversationsApi#deleteConversationParticipantCode) | **DELETE** /api/v2/conversations/{conversationId}/participants/{participantId}/codes/{addCommunicationCode} | Delete a code used to add a communication to this participant
[**deleteConversationParticipantFlaggedreason**](ConversationsApi#deleteConversationParticipantFlaggedreason) | **DELETE** /api/v2/conversations/{conversationId}/participants/{participantId}/flaggedreason | Remove flagged reason from conversation participant.
[**deleteConversationsCallParticipantConsult**](ConversationsApi#deleteConversationsCallParticipantConsult) | **DELETE** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult | Cancel the transfer
[**deleteConversationsEmailMessagesDraftAttachment**](ConversationsApi#deleteConversationsEmailMessagesDraftAttachment) | **DELETE** /api/v2/conversations/emails/{conversationId}/messages/draft/attachments/{attachmentId} | Delete attachment from draft
[**deleteConversationsMessagesCachedmediaCachedMediaItemId**](ConversationsApi#deleteConversationsMessagesCachedmediaCachedMediaItemId) | **DELETE** /api/v2/conversations/messages/cachedmedia/{cachedMediaItemId} | Remove a cached media item asychronously
[**deleteConversationsMessagingIntegrationsFacebookIntegrationId**](ConversationsApi#deleteConversationsMessagingIntegrationsFacebookIntegrationId) | **DELETE** /api/v2/conversations/messaging/integrations/facebook/{integrationId} | Delete a Facebook messaging integration
[**deleteConversationsMessagingIntegrationsInstagramIntegrationId**](ConversationsApi#deleteConversationsMessagingIntegrationsInstagramIntegrationId) | **DELETE** /api/v2/conversations/messaging/integrations/instagram/{integrationId} | Delete Instagram messaging integration
[**deleteConversationsMessagingIntegrationsOpenIntegrationId**](ConversationsApi#deleteConversationsMessagingIntegrationsOpenIntegrationId) | **DELETE** /api/v2/conversations/messaging/integrations/open/{integrationId} | Delete an Open messaging integration
[**deleteConversationsMessagingIntegrationsTwitterIntegrationId**](ConversationsApi#deleteConversationsMessagingIntegrationsTwitterIntegrationId) | **DELETE** /api/v2/conversations/messaging/integrations/twitter/{integrationId} | Delete Twitter messaging integration
[**deleteConversationsMessagingIntegrationsWhatsappIntegrationId**](ConversationsApi#deleteConversationsMessagingIntegrationsWhatsappIntegrationId) | **DELETE** /api/v2/conversations/messaging/integrations/whatsapp/{integrationId} | Delete a WhatsApp messaging integration
[**deleteConversationsMessagingSetting**](ConversationsApi#deleteConversationsMessagingSetting) | **DELETE** /api/v2/conversations/messaging/settings/{messageSettingId} | Delete a messaging setting
[**deleteConversationsMessagingSettingsDefault**](ConversationsApi#deleteConversationsMessagingSettingsDefault) | **DELETE** /api/v2/conversations/messaging/settings/default | Delete the organization's default setting, a global default will be applied to integrations without settings
[**deleteConversationsMessagingSupportedcontentSupportedContentId**](ConversationsApi#deleteConversationsMessagingSupportedcontentSupportedContentId) | **DELETE** /api/v2/conversations/messaging/supportedcontent/{supportedContentId} | Delete a supported content profile
[**getAnalyticsConversationDetails**](ConversationsApi#getAnalyticsConversationDetails) | **GET** /api/v2/analytics/conversations/{conversationId}/details | Get a conversation by id
[**getAnalyticsConversationsAggregatesJob**](ConversationsApi#getAnalyticsConversationsAggregatesJob) | **GET** /api/v2/analytics/conversations/aggregates/jobs/{jobId} | Get status for async query for conversation aggregates
[**getAnalyticsConversationsAggregatesJobResults**](ConversationsApi#getAnalyticsConversationsAggregatesJobResults) | **GET** /api/v2/analytics/conversations/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsConversationsDetails**](ConversationsApi#getAnalyticsConversationsDetails) | **GET** /api/v2/analytics/conversations/details | Gets multiple conversations by id
[**getAnalyticsConversationsDetailsJob**](ConversationsApi#getAnalyticsConversationsDetailsJob) | **GET** /api/v2/analytics/conversations/details/jobs/{jobId} | Get status for async query for conversation details
[**getAnalyticsConversationsDetailsJobResults**](ConversationsApi#getAnalyticsConversationsDetailsJobResults) | **GET** /api/v2/analytics/conversations/details/jobs/{jobId}/results | Fetch a page of results for an async details job
[**getAnalyticsConversationsDetailsJobsAvailability**](ConversationsApi#getAnalyticsConversationsDetailsJobsAvailability) | **GET** /api/v2/analytics/conversations/details/jobs/availability | Lookup the datalake availability date and time
[**getConversation**](ConversationsApi#getConversation) | **GET** /api/v2/conversations/{conversationId} | Get conversation
[**getConversationCommunicationInternalmessage**](ConversationsApi#getConversationCommunicationInternalmessage) | **GET** /api/v2/conversations/{conversationId}/communications/{communicationId}/internalmessages/{messageId} | Get message
[**getConversationCommunicationInternalmessages**](ConversationsApi#getConversationCommunicationInternalmessages) | **GET** /api/v2/conversations/{conversationId}/communications/{communicationId}/internalmessages | Get messages for communication
[**getConversationParticipantSecureivrsession**](ConversationsApi#getConversationParticipantSecureivrsession) | **GET** /api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions/{secureSessionId} | Fetch info on a secure session
[**getConversationParticipantSecureivrsessions**](ConversationsApi#getConversationParticipantSecureivrsessions) | **GET** /api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions | Get a list of secure sessions for this participant.
[**getConversationParticipantWrapup**](ConversationsApi#getConversationParticipantWrapup) | **GET** /api/v2/conversations/{conversationId}/participants/{participantId}/wrapup | Get the wrap-up for this conversation participant. 
[**getConversationParticipantWrapupcodes**](ConversationsApi#getConversationParticipantWrapupcodes) | **GET** /api/v2/conversations/{conversationId}/participants/{participantId}/wrapupcodes | Get list of wrapup codes for this conversation participant
[**getConversationSecureattributes**](ConversationsApi#getConversationSecureattributes) | **GET** /api/v2/conversations/{conversationId}/secureattributes | Get the secure attributes on a conversation.
[**getConversationSuggestion**](ConversationsApi#getConversationSuggestion) | **GET** /api/v2/conversations/{conversationId}/suggestions/{suggestionId} | Get Suggestion.
[**getConversationSuggestions**](ConversationsApi#getConversationSuggestions) | **GET** /api/v2/conversations/{conversationId}/suggestions | Get all suggestions for a conversation.
[**getConversationSummaries**](ConversationsApi#getConversationSummaries) | **GET** /api/v2/conversations/{conversationId}/summaries | Get the summaries of the conversation.
[**getConversations**](ConversationsApi#getConversations) | **GET** /api/v2/conversations | Get active conversations for the logged in user
[**getConversationsCall**](ConversationsApi#getConversationsCall) | **GET** /api/v2/conversations/calls/{conversationId} | Get call conversation
[**getConversationsCallParticipantCommunicationWrapup**](ConversationsApi#getConversationsCallParticipantCommunicationWrapup) | **GET** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup | Get the wrap-up for this conversation communication. 
[**getConversationsCallParticipantWrapup**](ConversationsApi#getConversationsCallParticipantWrapup) | **GET** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapup | Get the wrap-up for this conversation participant. 
[**getConversationsCallParticipantWrapupcodes**](ConversationsApi#getConversationsCallParticipantWrapupcodes) | **GET** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapupcodes | Get list of wrapup codes for this conversation participant
[**getConversationsCallback**](ConversationsApi#getConversationsCallback) | **GET** /api/v2/conversations/callbacks/{conversationId} | Get callback conversation
[**getConversationsCallbackParticipantCommunicationWrapup**](ConversationsApi#getConversationsCallbackParticipantCommunicationWrapup) | **GET** /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup | Get the wrap-up for this conversation communication. 
[**getConversationsCallbackParticipantWrapup**](ConversationsApi#getConversationsCallbackParticipantWrapup) | **GET** /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapup | Get the wrap-up for this conversation participant. 
[**getConversationsCallbackParticipantWrapupcodes**](ConversationsApi#getConversationsCallbackParticipantWrapupcodes) | **GET** /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapupcodes | Get list of wrapup codes for this conversation participant
[**getConversationsCallbacks**](ConversationsApi#getConversationsCallbacks) | **GET** /api/v2/conversations/callbacks | Get active callback conversations for the logged in user
[**getConversationsCalls**](ConversationsApi#getConversationsCalls) | **GET** /api/v2/conversations/calls | Get active call conversations for the logged in user
[**getConversationsCallsHistory**](ConversationsApi#getConversationsCallsHistory) | **GET** /api/v2/conversations/calls/history | Get call history
[**getConversationsCallsMaximumconferenceparties**](ConversationsApi#getConversationsCallsMaximumconferenceparties) | **GET** /api/v2/conversations/calls/maximumconferenceparties | Get the maximum number of participants that this user can have on a conference
[**getConversationsChat**](ConversationsApi#getConversationsChat) | **GET** /api/v2/conversations/chats/{conversationId} | Get chat conversation
[**getConversationsChatMessage**](ConversationsApi#getConversationsChatMessage) | **GET** /api/v2/conversations/chats/{conversationId}/messages/{messageId} | Get a web chat conversation message
[**getConversationsChatMessages**](ConversationsApi#getConversationsChatMessages) | **GET** /api/v2/conversations/chats/{conversationId}/messages | Get the messages of a chat conversation.
[**getConversationsChatParticipantCommunicationWrapup**](ConversationsApi#getConversationsChatParticipantCommunicationWrapup) | **GET** /api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup | Get the wrap-up for this conversation communication. 
[**getConversationsChatParticipantWrapup**](ConversationsApi#getConversationsChatParticipantWrapup) | **GET** /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapup | Get the wrap-up for this conversation participant. 
[**getConversationsChatParticipantWrapupcodes**](ConversationsApi#getConversationsChatParticipantWrapupcodes) | **GET** /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapupcodes | Get list of wrapup codes for this conversation participant
[**getConversationsChats**](ConversationsApi#getConversationsChats) | **GET** /api/v2/conversations/chats | Get active chat conversations for the logged in user
[**getConversationsCobrowsesession**](ConversationsApi#getConversationsCobrowsesession) | **GET** /api/v2/conversations/cobrowsesessions/{conversationId} | Get cobrowse conversation
[**getConversationsCobrowsesessionParticipantCommunicationWrapup**](ConversationsApi#getConversationsCobrowsesessionParticipantCommunicationWrapup) | **GET** /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup | Get the wrap-up for this conversation communication. 
[**getConversationsCobrowsesessionParticipantWrapup**](ConversationsApi#getConversationsCobrowsesessionParticipantWrapup) | **GET** /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapup | Get the wrap-up for this conversation participant. 
[**getConversationsCobrowsesessionParticipantWrapupcodes**](ConversationsApi#getConversationsCobrowsesessionParticipantWrapupcodes) | **GET** /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapupcodes | Get list of wrapup codes for this conversation participant
[**getConversationsCobrowsesessions**](ConversationsApi#getConversationsCobrowsesessions) | **GET** /api/v2/conversations/cobrowsesessions | Get active cobrowse conversations for the logged in user
[**getConversationsEmail**](ConversationsApi#getConversationsEmail) | **GET** /api/v2/conversations/emails/{conversationId} | Get email conversation
[**getConversationsEmailMessage**](ConversationsApi#getConversationsEmailMessage) | **GET** /api/v2/conversations/emails/{conversationId}/messages/{messageId} | Get conversation message
[**getConversationsEmailMessages**](ConversationsApi#getConversationsEmailMessages) | **GET** /api/v2/conversations/emails/{conversationId}/messages | Get conversation messages
[**getConversationsEmailMessagesDraft**](ConversationsApi#getConversationsEmailMessagesDraft) | **GET** /api/v2/conversations/emails/{conversationId}/messages/draft | Get conversation draft reply
[**getConversationsEmailParticipantCommunicationWrapup**](ConversationsApi#getConversationsEmailParticipantCommunicationWrapup) | **GET** /api/v2/conversations/emails/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup | Get the wrap-up for this conversation communication. 
[**getConversationsEmailParticipantWrapup**](ConversationsApi#getConversationsEmailParticipantWrapup) | **GET** /api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapup | Get the wrap-up for this conversation participant. 
[**getConversationsEmailParticipantWrapupcodes**](ConversationsApi#getConversationsEmailParticipantWrapupcodes) | **GET** /api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapupcodes | Get list of wrapup codes for this conversation participant
[**getConversationsEmailSettings**](ConversationsApi#getConversationsEmailSettings) | **GET** /api/v2/conversations/emails/{conversationId}/settings | Get emails settings for a given conversation
[**getConversationsEmails**](ConversationsApi#getConversationsEmails) | **GET** /api/v2/conversations/emails | Get active email conversations for the logged in user
[**getConversationsInternalmessage**](ConversationsApi#getConversationsInternalmessage) | **GET** /api/v2/conversations/internalmessages/{conversationId} | Get internal message conversation
[**getConversationsInternalmessages**](ConversationsApi#getConversationsInternalmessages) | **GET** /api/v2/conversations/internalmessages | Get active internal message conversations for the logged in user
[**getConversationsKeyconfiguration**](ConversationsApi#getConversationsKeyconfiguration) | **GET** /api/v2/conversations/keyconfigurations/{keyconfigurationsId} | Get the encryption key configurations
[**getConversationsKeyconfigurations**](ConversationsApi#getConversationsKeyconfigurations) | **GET** /api/v2/conversations/keyconfigurations | Get a list of key configurations data
[**getConversationsMessage**](ConversationsApi#getConversationsMessage) | **GET** /api/v2/conversations/messages/{conversationId} | Get message conversation
[**getConversationsMessageCommunicationMessagesMediaMediaId**](ConversationsApi#getConversationsMessageCommunicationMessagesMediaMediaId) | **GET** /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media/{mediaId} | Get media
[**getConversationsMessageDetails**](ConversationsApi#getConversationsMessageDetails) | **GET** /api/v2/conversations/messages/{messageId}/details | Get message
[**getConversationsMessageMessage**](ConversationsApi#getConversationsMessageMessage) | **GET** /api/v2/conversations/messages/{conversationId}/messages/{messageId} | Get conversation message
[**getConversationsMessageParticipantCommunicationWrapup**](ConversationsApi#getConversationsMessageParticipantCommunicationWrapup) | **GET** /api/v2/conversations/messages/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup | Get the wrap-up for this conversation communication. 
[**getConversationsMessageParticipantWrapup**](ConversationsApi#getConversationsMessageParticipantWrapup) | **GET** /api/v2/conversations/messages/{conversationId}/participants/{participantId}/wrapup | Get the wrap-up for this conversation participant. 
[**getConversationsMessageParticipantWrapupcodes**](ConversationsApi#getConversationsMessageParticipantWrapupcodes) | **GET** /api/v2/conversations/messages/{conversationId}/participants/{participantId}/wrapupcodes | Get list of wrapup codes for this conversation participant
[**getConversationsMessages**](ConversationsApi#getConversationsMessages) | **GET** /api/v2/conversations/messages | Get active message conversations for the logged in user
[**getConversationsMessagesCachedmedia**](ConversationsApi#getConversationsMessagesCachedmedia) | **GET** /api/v2/conversations/messages/cachedmedia | Get a list of cached media items
[**getConversationsMessagesCachedmediaCachedMediaItemId**](ConversationsApi#getConversationsMessagesCachedmediaCachedMediaItemId) | **GET** /api/v2/conversations/messages/cachedmedia/{cachedMediaItemId} | Get a cached media item
[**getConversationsMessagingFacebookApp**](ConversationsApi#getConversationsMessagingFacebookApp) | **GET** /api/v2/conversations/messaging/facebook/app | Get Genesys Facebook App Id
[**getConversationsMessagingFacebookPermissions**](ConversationsApi#getConversationsMessagingFacebookPermissions) | **GET** /api/v2/conversations/messaging/facebook/permissions | Get a list of Facebook Permissions
[**getConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId**](ConversationsApi#getConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId) | **GET** /api/v2/conversations/messaging/identityresolution/integrations/apple/{integrationId} | Get Apple messaging integration identity resolution settings
[**getConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId**](ConversationsApi#getConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId) | **GET** /api/v2/conversations/messaging/identityresolution/integrations/facebook/{integrationId} | Get Facebook messaging integration identity resolution settings
[**getConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId**](ConversationsApi#getConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId) | **GET** /api/v2/conversations/messaging/identityresolution/integrations/instagram/{integrationId} | Get an Instagram integration identity resolution settings
[**getConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId**](ConversationsApi#getConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId) | **GET** /api/v2/conversations/messaging/identityresolution/integrations/open/{integrationId} | Get an open messaging integration Identity Resolution settings
[**getConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId**](ConversationsApi#getConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId) | **GET** /api/v2/conversations/messaging/identityresolution/integrations/twitter/{integrationId} | Get X (Formally Twitter) messaging integration identity resolution settings
[**getConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId**](ConversationsApi#getConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId) | **GET** /api/v2/conversations/messaging/identityresolution/integrations/whatsapp/{integrationId} | Get a whatsApp integration Identity Resolution settings
[**getConversationsMessagingIntegrationTwitterOauthSettings**](ConversationsApi#getConversationsMessagingIntegrationTwitterOauthSettings) | **GET** /api/v2/conversations/messaging/integrations/{integrationId}/twitter/oauth/settings | Get twitter oauth settings to patch an integration
[**getConversationsMessagingIntegrations**](ConversationsApi#getConversationsMessagingIntegrations) | **GET** /api/v2/conversations/messaging/integrations | Get a list of Integrations
[**getConversationsMessagingIntegrationsFacebook**](ConversationsApi#getConversationsMessagingIntegrationsFacebook) | **GET** /api/v2/conversations/messaging/integrations/facebook | Get a list of Facebook Integrations
[**getConversationsMessagingIntegrationsFacebookIntegrationId**](ConversationsApi#getConversationsMessagingIntegrationsFacebookIntegrationId) | **GET** /api/v2/conversations/messaging/integrations/facebook/{integrationId} | Get a Facebook messaging integration
[**getConversationsMessagingIntegrationsInstagram**](ConversationsApi#getConversationsMessagingIntegrationsInstagram) | **GET** /api/v2/conversations/messaging/integrations/instagram | Get a list of Instagram Integrations
[**getConversationsMessagingIntegrationsInstagramIntegrationId**](ConversationsApi#getConversationsMessagingIntegrationsInstagramIntegrationId) | **GET** /api/v2/conversations/messaging/integrations/instagram/{integrationId} | Get Instagram messaging integration
[**getConversationsMessagingIntegrationsOpen**](ConversationsApi#getConversationsMessagingIntegrationsOpen) | **GET** /api/v2/conversations/messaging/integrations/open | Get a list of Open messaging integrations
[**getConversationsMessagingIntegrationsOpenIntegrationId**](ConversationsApi#getConversationsMessagingIntegrationsOpenIntegrationId) | **GET** /api/v2/conversations/messaging/integrations/open/{integrationId} | Get an Open messaging integration
[**getConversationsMessagingIntegrationsTwitter**](ConversationsApi#getConversationsMessagingIntegrationsTwitter) | **GET** /api/v2/conversations/messaging/integrations/twitter | Get a list of Twitter Integrations
[**getConversationsMessagingIntegrationsTwitterIntegrationId**](ConversationsApi#getConversationsMessagingIntegrationsTwitterIntegrationId) | **GET** /api/v2/conversations/messaging/integrations/twitter/{integrationId} | Get Twitter messaging integration
[**getConversationsMessagingIntegrationsTwitterOauthSettings**](ConversationsApi#getConversationsMessagingIntegrationsTwitterOauthSettings) | **GET** /api/v2/conversations/messaging/integrations/twitter/oauth/settings | Get twitter oauth settings
[**getConversationsMessagingIntegrationsWhatsapp**](ConversationsApi#getConversationsMessagingIntegrationsWhatsapp) | **GET** /api/v2/conversations/messaging/integrations/whatsapp | Get a list of WhatsApp Integrations
[**getConversationsMessagingIntegrationsWhatsappIntegrationId**](ConversationsApi#getConversationsMessagingIntegrationsWhatsappIntegrationId) | **GET** /api/v2/conversations/messaging/integrations/whatsapp/{integrationId} | Get a WhatsApp messaging integration
[**getConversationsMessagingSetting**](ConversationsApi#getConversationsMessagingSetting) | **GET** /api/v2/conversations/messaging/settings/{messageSettingId} | Get a messaging setting
[**getConversationsMessagingSettings**](ConversationsApi#getConversationsMessagingSettings) | **GET** /api/v2/conversations/messaging/settings | Get a list of messaging settings
[**getConversationsMessagingSettingsDefault**](ConversationsApi#getConversationsMessagingSettingsDefault) | **GET** /api/v2/conversations/messaging/settings/default | Get the organization's default settings that will be used as the default when creating an integration.
[**getConversationsMessagingSupportedcontent**](ConversationsApi#getConversationsMessagingSupportedcontent) | **GET** /api/v2/conversations/messaging/supportedcontent | Get a list of Supported Content profiles
[**getConversationsMessagingSupportedcontentDefault**](ConversationsApi#getConversationsMessagingSupportedcontentDefault) | **GET** /api/v2/conversations/messaging/supportedcontent/default | Get the organization's default supported content profile that will be used as the default when creating an integration.
[**getConversationsMessagingSupportedcontentSupportedContentId**](ConversationsApi#getConversationsMessagingSupportedcontentSupportedContentId) | **GET** /api/v2/conversations/messaging/supportedcontent/{supportedContentId} | Get a supported content profile
[**getConversationsMessagingThreadingtimeline**](ConversationsApi#getConversationsMessagingThreadingtimeline) | **GET** /api/v2/conversations/messaging/threadingtimeline | Get conversation threading window timeline for each messaging type
[**getConversationsScreenshareParticipantCommunicationWrapup**](ConversationsApi#getConversationsScreenshareParticipantCommunicationWrapup) | **GET** /api/v2/conversations/screenshares/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup | Get the wrap-up for this conversation communication. 
[**getConversationsSettings**](ConversationsApi#getConversationsSettings) | **GET** /api/v2/conversations/settings | Get Settings
[**getConversationsSocialParticipantCommunicationWrapup**](ConversationsApi#getConversationsSocialParticipantCommunicationWrapup) | **GET** /api/v2/conversations/socials/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup | Get the wrap-up for this conversation communication. 
[**getConversationsVideoDetails**](ConversationsApi#getConversationsVideoDetails) | **GET** /api/v2/conversations/videos/{conferenceId}/details | Get video conference details (e.g. the current number of active participants).
[**getConversationsVideoParticipantCommunicationWrapup**](ConversationsApi#getConversationsVideoParticipantCommunicationWrapup) | **GET** /api/v2/conversations/videos/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup | Get the wrap-up for this conversation communication. 
[**getConversationsVideosMeeting**](ConversationsApi#getConversationsVideosMeeting) | **GET** /api/v2/conversations/videos/meetings/{meetingId} | Gets a record for a given meetingId
[**patchConversationParticipant**](ConversationsApi#patchConversationParticipant) | **PATCH** /api/v2/conversations/{conversationId}/participants/{participantId} | Update a participant.
[**patchConversationParticipantAttributes**](ConversationsApi#patchConversationParticipantAttributes) | **PATCH** /api/v2/conversations/{conversationId}/participants/{participantId}/attributes | Update the attributes on a conversation participant.
[**patchConversationSecureattributes**](ConversationsApi#patchConversationSecureattributes) | **PATCH** /api/v2/conversations/{conversationId}/secureattributes | Update the secure attributes on a conversation.
[**patchConversationSummaryEngagements**](ConversationsApi#patchConversationSummaryEngagements) | **PATCH** /api/v2/conversations/{conversationId}/summaries/{summaryId}/engagements | Update agent's engagement for the summary.
[**patchConversationSummaryFeedback**](ConversationsApi#patchConversationSummaryFeedback) | **PATCH** /api/v2/conversations/{conversationId}/summaries/{summaryId}/feedback | Update the feedback for the summary.
[**patchConversationUtilizationlabel**](ConversationsApi#patchConversationUtilizationlabel) | **PATCH** /api/v2/conversations/{conversationId}/utilizationlabel | Update the utilization label on a conversation. When there is no value provided, the system default label is applied
[**patchConversationsAftercallworkConversationIdParticipantCommunication**](ConversationsApi#patchConversationsAftercallworkConversationIdParticipantCommunication) | **PATCH** /api/v2/conversations/aftercallwork/{conversationId}/participants/{participantId}/communications/{communicationId} | Update after-call work for this conversation communication.
[**patchConversationsCall**](ConversationsApi#patchConversationsCall) | **PATCH** /api/v2/conversations/calls/{conversationId} | Update a conversation by setting its recording state, merging in other conversations to create a conference, or disconnecting all of the participants
[**patchConversationsCallParticipant**](ConversationsApi#patchConversationsCallParticipant) | **PATCH** /api/v2/conversations/calls/{conversationId}/participants/{participantId} | Update conversation participant
[**patchConversationsCallParticipantAttributes**](ConversationsApi#patchConversationsCallParticipantAttributes) | **PATCH** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/attributes | Update the attributes on a conversation participant.
[**patchConversationsCallParticipantCommunication**](ConversationsApi#patchConversationsCallParticipantCommunication) | **PATCH** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId} | Update conversation participant's communication by disconnecting it. This endpoint does not update wrapup.
[**patchConversationsCallParticipantConsult**](ConversationsApi#patchConversationsCallParticipantConsult) | **PATCH** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult | Change who can speak
[**patchConversationsCallback**](ConversationsApi#patchConversationsCallback) | **PATCH** /api/v2/conversations/callbacks/{conversationId} | Update a conversation by disconnecting all of the participants
[**patchConversationsCallbackParticipant**](ConversationsApi#patchConversationsCallbackParticipant) | **PATCH** /api/v2/conversations/callbacks/{conversationId}/participants/{participantId} | Update conversation participant
[**patchConversationsCallbackParticipantAttributes**](ConversationsApi#patchConversationsCallbackParticipantAttributes) | **PATCH** /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/attributes | Update the attributes on a conversation participant.
[**patchConversationsCallbackParticipantCommunication**](ConversationsApi#patchConversationsCallbackParticipantCommunication) | **PATCH** /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/communications/{communicationId} | Update conversation participant's communication by disconnecting it.
[**patchConversationsCallbacks**](ConversationsApi#patchConversationsCallbacks) | **PATCH** /api/v2/conversations/callbacks | Update a scheduled callback
[**patchConversationsChat**](ConversationsApi#patchConversationsChat) | **PATCH** /api/v2/conversations/chats/{conversationId} | Update a conversation by disconnecting all of the participants
[**patchConversationsChatParticipant**](ConversationsApi#patchConversationsChatParticipant) | **PATCH** /api/v2/conversations/chats/{conversationId}/participants/{participantId} | Update conversation participant
[**patchConversationsChatParticipantAttributes**](ConversationsApi#patchConversationsChatParticipantAttributes) | **PATCH** /api/v2/conversations/chats/{conversationId}/participants/{participantId}/attributes | Update the attributes on a conversation participant.
[**patchConversationsChatParticipantCommunication**](ConversationsApi#patchConversationsChatParticipantCommunication) | **PATCH** /api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId} | Update conversation participant's communication by disconnecting it. This endpoint does not update wrapup.
[**patchConversationsCobrowsesession**](ConversationsApi#patchConversationsCobrowsesession) | **PATCH** /api/v2/conversations/cobrowsesessions/{conversationId} | Update a conversation by disconnecting all of the participants
[**patchConversationsCobrowsesessionParticipant**](ConversationsApi#patchConversationsCobrowsesessionParticipant) | **PATCH** /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId} | Update conversation participant
[**patchConversationsCobrowsesessionParticipantAttributes**](ConversationsApi#patchConversationsCobrowsesessionParticipantAttributes) | **PATCH** /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/attributes | Update the attributes on a conversation participant.
[**patchConversationsCobrowsesessionParticipantCommunication**](ConversationsApi#patchConversationsCobrowsesessionParticipantCommunication) | **PATCH** /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId} | Update conversation participant's communication by disconnecting it.
[**patchConversationsEmail**](ConversationsApi#patchConversationsEmail) | **PATCH** /api/v2/conversations/emails/{conversationId} | Update a conversation by disconnecting all of the participants
[**patchConversationsEmailMessagesDraft**](ConversationsApi#patchConversationsEmailMessagesDraft) | **PATCH** /api/v2/conversations/emails/{conversationId}/messages/draft | Reset conversation draft to its initial state and/or auto-fill draft content
[**patchConversationsEmailParticipant**](ConversationsApi#patchConversationsEmailParticipant) | **PATCH** /api/v2/conversations/emails/{conversationId}/participants/{participantId} | Update conversation participant
[**patchConversationsEmailParticipantAttributes**](ConversationsApi#patchConversationsEmailParticipantAttributes) | **PATCH** /api/v2/conversations/emails/{conversationId}/participants/{participantId}/attributes | Update the attributes on a conversation participant.
[**patchConversationsEmailParticipantCommunication**](ConversationsApi#patchConversationsEmailParticipantCommunication) | **PATCH** /api/v2/conversations/emails/{conversationId}/participants/{participantId}/communications/{communicationId} | Update conversation participant's communication by disconnecting it. This endpoint does not update wrapup.
[**patchConversationsEmailParticipantParkingstate**](ConversationsApi#patchConversationsEmailParticipantParkingstate) | **PATCH** /api/v2/conversations/emails/{conversationId}/participants/{participantId}/parkingstate | Update conversation by setting its parking state
[**patchConversationsMessage**](ConversationsApi#patchConversationsMessage) | **PATCH** /api/v2/conversations/messages/{conversationId} | Update a conversation by disconnecting all of the participants
[**patchConversationsMessageParticipant**](ConversationsApi#patchConversationsMessageParticipant) | **PATCH** /api/v2/conversations/messages/{conversationId}/participants/{participantId} | Update conversation participant
[**patchConversationsMessageParticipantAttributes**](ConversationsApi#patchConversationsMessageParticipantAttributes) | **PATCH** /api/v2/conversations/messages/{conversationId}/participants/{participantId}/attributes | Update the attributes on a conversation participant.
[**patchConversationsMessageParticipantCommunication**](ConversationsApi#patchConversationsMessageParticipantCommunication) | **PATCH** /api/v2/conversations/messages/{conversationId}/participants/{participantId}/communications/{communicationId} | Update conversation participant's communication by disconnecting it. This endpoint does not update wrapup.
[**patchConversationsMessagingIntegrationsFacebookIntegrationId**](ConversationsApi#patchConversationsMessagingIntegrationsFacebookIntegrationId) | **PATCH** /api/v2/conversations/messaging/integrations/facebook/{integrationId} | Update Facebook messaging integration
[**patchConversationsMessagingIntegrationsInstagramIntegrationId**](ConversationsApi#patchConversationsMessagingIntegrationsInstagramIntegrationId) | **PATCH** /api/v2/conversations/messaging/integrations/instagram/{integrationId} | Update Instagram messaging integration
[**patchConversationsMessagingIntegrationsOpenIntegrationId**](ConversationsApi#patchConversationsMessagingIntegrationsOpenIntegrationId) | **PATCH** /api/v2/conversations/messaging/integrations/open/{integrationId} | Update an Open messaging integration
[**patchConversationsMessagingIntegrationsTwitterIntegrationId**](ConversationsApi#patchConversationsMessagingIntegrationsTwitterIntegrationId) | **PATCH** /api/v2/conversations/messaging/integrations/twitter/{integrationId} | Update a Twitter messaging integration
[**patchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId**](ConversationsApi#patchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId) | **PATCH** /api/v2/conversations/messaging/integrations/whatsapp/embeddedsignup/{integrationId} | Activate a WhatsApp messaging integration created using the WhatsApp embedded signup flow
[**patchConversationsMessagingIntegrationsWhatsappIntegrationId**](ConversationsApi#patchConversationsMessagingIntegrationsWhatsappIntegrationId) | **PATCH** /api/v2/conversations/messaging/integrations/whatsapp/{integrationId} | Update a WhatsApp messaging integration
[**patchConversationsMessagingSetting**](ConversationsApi#patchConversationsMessagingSetting) | **PATCH** /api/v2/conversations/messaging/settings/{messageSettingId} | Update a messaging setting
[**patchConversationsMessagingSupportedcontentSupportedContentId**](ConversationsApi#patchConversationsMessagingSupportedcontentSupportedContentId) | **PATCH** /api/v2/conversations/messaging/supportedcontent/{supportedContentId} | Update a supported content profile
[**patchConversationsSettings**](ConversationsApi#patchConversationsSettings) | **PATCH** /api/v2/conversations/settings | Update Settings
[**postAnalyticsConversationDetailsProperties**](ConversationsApi#postAnalyticsConversationDetailsProperties) | **POST** /api/v2/analytics/conversations/{conversationId}/details/properties | Index conversation properties
[**postAnalyticsConversationsActivityQuery**](ConversationsApi#postAnalyticsConversationsActivityQuery) | **POST** /api/v2/analytics/conversations/activity/query | Query for conversation activity observations
[**postAnalyticsConversationsAggregatesJobs**](ConversationsApi#postAnalyticsConversationsAggregatesJobs) | **POST** /api/v2/analytics/conversations/aggregates/jobs | Query for conversation aggregates asynchronously
[**postAnalyticsConversationsAggregatesQuery**](ConversationsApi#postAnalyticsConversationsAggregatesQuery) | **POST** /api/v2/analytics/conversations/aggregates/query | Query for conversation aggregates
[**postAnalyticsConversationsDetailsJobs**](ConversationsApi#postAnalyticsConversationsDetailsJobs) | **POST** /api/v2/analytics/conversations/details/jobs | Query for conversation details asynchronously
[**postAnalyticsConversationsDetailsQuery**](ConversationsApi#postAnalyticsConversationsDetailsQuery) | **POST** /api/v2/analytics/conversations/details/query | Query for conversation details
[**postConversationAssign**](ConversationsApi#postConversationAssign) | **POST** /api/v2/conversations/{conversationId}/assign | Attempts to manually assign a specified conversation to a specified user.  Ignores bullseye ring, PAR score, skills, and languages.
[**postConversationBarge**](ConversationsApi#postConversationBarge) | **POST** /api/v2/conversations/{conversationId}/barge | Barge a conversation creating a barged in conference of connected participants.
[**postConversationCobrowse**](ConversationsApi#postConversationCobrowse) | **POST** /api/v2/conversations/{conversationId}/cobrowse | Creates a cobrowse session. Requires conversation:cobrowse:add (for web messaging) or conversation:cobrowsevoice:add permission.
[**postConversationCommunicationInternalmessages**](ConversationsApi#postConversationCommunicationInternalmessages) | **POST** /api/v2/conversations/{conversationId}/communications/{communicationId}/internalmessages | Send internal message
[**postConversationDisconnect**](ConversationsApi#postConversationDisconnect) | **POST** /api/v2/conversations/{conversationId}/disconnect | Performs a full conversation teardown. Issues disconnect requests for any connected media. Applies a system wrap-up code to any participants that are pending wrap-up. This is not intended to be the normal way of ending interactions but is available in the event of problems with the application to allow a resynchronization of state across all components. It is recommended that users submit a support case if they are relying on this endpoint systematically as there is likely something that needs investigation.
[**postConversationParticipantCallbacks**](ConversationsApi#postConversationParticipantCallbacks) | **POST** /api/v2/conversations/{conversationId}/participants/{participantId}/callbacks | Create a new callback for the specified participant on the conversation.
[**postConversationParticipantDigits**](ConversationsApi#postConversationParticipantDigits) | **POST** /api/v2/conversations/{conversationId}/participants/{participantId}/digits | Sends DTMF to the participant
[**postConversationParticipantInternalmessagesUsersCommunications**](ConversationsApi#postConversationParticipantInternalmessagesUsersCommunications) | **POST** /api/v2/conversations/{conversationId}/participants/{participantId}/internalmessages/users/communications | Setup internal message communication with user
[**postConversationParticipantReplace**](ConversationsApi#postConversationParticipantReplace) | **POST** /api/v2/conversations/{conversationId}/participants/{participantId}/replace | Replace this participant with the specified user and/or address
[**postConversationParticipantReplaceAgent**](ConversationsApi#postConversationParticipantReplaceAgent) | **POST** /api/v2/conversations/{conversationId}/participants/{participantId}/replace/agent | Replace this participant with the specified agent
[**postConversationParticipantReplaceContactExternal**](ConversationsApi#postConversationParticipantReplaceContactExternal) | **POST** /api/v2/conversations/{conversationId}/participants/{participantId}/replace/contact/external | Replace this participant with the an external contact
[**postConversationParticipantReplaceExternal**](ConversationsApi#postConversationParticipantReplaceExternal) | **POST** /api/v2/conversations/{conversationId}/participants/{participantId}/replace/external | Replace this participant with the an external contact
[**postConversationParticipantReplaceQueue**](ConversationsApi#postConversationParticipantReplaceQueue) | **POST** /api/v2/conversations/{conversationId}/participants/{participantId}/replace/queue | Replace this participant with the specified queue
[**postConversationParticipantSecureivrsessions**](ConversationsApi#postConversationParticipantSecureivrsessions) | **POST** /api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions | Create secure IVR session. Only a participant in the conversation can invoke a secure IVR.
[**postConversationParticipantTransfer**](ConversationsApi#postConversationParticipantTransfer) | **POST** /api/v2/conversations/{conversationId}/participants/{participantId}/transfer | Replace this participant by another one using the address of the destination.
[**postConversationSuggestionEngagement**](ConversationsApi#postConversationSuggestionEngagement) | **POST** /api/v2/conversations/{conversationId}/suggestions/{suggestionId}/engagement | Save an engagement on the suggestion.
[**postConversationSuggestionsFeedback**](ConversationsApi#postConversationSuggestionsFeedback) | **POST** /api/v2/conversations/{conversationId}/suggestions/feedback | Suggestion feedback.
[**postConversationSummaryFeedback**](ConversationsApi#postConversationSummaryFeedback) | **POST** /api/v2/conversations/{conversationId}/summaries/{summaryId}/feedback | Submit feedback for the summary.
[**postConversationsCall**](ConversationsApi#postConversationsCall) | **POST** /api/v2/conversations/calls/{conversationId} | Place a new call as part of a callback conversation.
[**postConversationsCallParticipantBarge**](ConversationsApi#postConversationsCallParticipantBarge) | **POST** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/barge | Barge a given participant's call creating a barged in conference of connected participants.
[**postConversationsCallParticipantCoach**](ConversationsApi#postConversationsCallParticipantCoach) | **POST** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/coach | Listen in on the conversation from the point of view of a given participant while speaking to just the given participant.
[**postConversationsCallParticipantCommunicationWrapup**](ConversationsApi#postConversationsCallParticipantCommunicationWrapup) | **POST** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup | Apply wrap-up for this conversation communication
[**postConversationsCallParticipantConsult**](ConversationsApi#postConversationsCallParticipantConsult) | **POST** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult | Initiate and update consult transfer
[**postConversationsCallParticipantConsultAgent**](ConversationsApi#postConversationsCallParticipantConsultAgent) | **POST** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult/agent | Initiate a consult transfer to an agent
[**postConversationsCallParticipantConsultContactExternal**](ConversationsApi#postConversationsCallParticipantConsultContactExternal) | **POST** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult/contact/external | Initiate a consult transfer to an external contact
[**postConversationsCallParticipantConsultExternal**](ConversationsApi#postConversationsCallParticipantConsultExternal) | **POST** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult/external | Initiate a consult transfer to an external contact
[**postConversationsCallParticipantConsultQueue**](ConversationsApi#postConversationsCallParticipantConsultQueue) | **POST** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult/queue | Initiate a consult transfer to a queue
[**postConversationsCallParticipantMonitor**](ConversationsApi#postConversationsCallParticipantMonitor) | **POST** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/monitor | Listen in on the conversation from the point of view of a given participant.
[**postConversationsCallParticipantReplace**](ConversationsApi#postConversationsCallParticipantReplace) | **POST** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/replace | Replace this participant with the specified user and/or address
[**postConversationsCallParticipantVoiceConsult**](ConversationsApi#postConversationsCallParticipantVoiceConsult) | **POST** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/voice/consult | Initiate voice consult transfer
[**postConversationsCallParticipants**](ConversationsApi#postConversationsCallParticipants) | **POST** /api/v2/conversations/calls/{conversationId}/participants | Add participants to a conversation
[**postConversationsCallbackParticipantCommunicationWrapup**](ConversationsApi#postConversationsCallbackParticipantCommunicationWrapup) | **POST** /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup | Apply wrap-up for this conversation communication
[**postConversationsCallbackParticipantReplace**](ConversationsApi#postConversationsCallbackParticipantReplace) | **POST** /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/replace | Replace this participant with the specified user and/or address
[**postConversationsCallbacks**](ConversationsApi#postConversationsCallbacks) | **POST** /api/v2/conversations/callbacks | Create a Callback
[**postConversationsCallbacksBulkDisconnect**](ConversationsApi#postConversationsCallbacksBulkDisconnect) | **POST** /api/v2/conversations/callbacks/bulk/disconnect | Disconnect multiple scheduled callbacks
[**postConversationsCallbacksBulkUpdate**](ConversationsApi#postConversationsCallbacksBulkUpdate) | **POST** /api/v2/conversations/callbacks/bulk/update | Update multiple scheduled callbacks
[**postConversationsCalls**](ConversationsApi#postConversationsCalls) | **POST** /api/v2/conversations/calls | Create a call conversation
[**postConversationsChatCommunicationMessages**](ConversationsApi#postConversationsChatCommunicationMessages) | **POST** /api/v2/conversations/chats/{conversationId}/communications/{communicationId}/messages | Send a message on behalf of a communication in a chat conversation.
[**postConversationsChatCommunicationTyping**](ConversationsApi#postConversationsChatCommunicationTyping) | **POST** /api/v2/conversations/chats/{conversationId}/communications/{communicationId}/typing | Send a typing-indicator on behalf of a communication in a chat conversation.
[**postConversationsChatParticipantCommunicationWrapup**](ConversationsApi#postConversationsChatParticipantCommunicationWrapup) | **POST** /api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup | Apply wrap-up for this conversation communication
[**postConversationsChatParticipantReplace**](ConversationsApi#postConversationsChatParticipantReplace) | **POST** /api/v2/conversations/chats/{conversationId}/participants/{participantId}/replace | Replace this participant with the specified user and/or address
[**postConversationsChats**](ConversationsApi#postConversationsChats) | **POST** /api/v2/conversations/chats | Create a web chat conversation
[**postConversationsCobrowsesessionParticipantCommunicationWrapup**](ConversationsApi#postConversationsCobrowsesessionParticipantCommunicationWrapup) | **POST** /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup | Apply wrap-up for this conversation communication
[**postConversationsCobrowsesessionParticipantReplace**](ConversationsApi#postConversationsCobrowsesessionParticipantReplace) | **POST** /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/replace | Replace this participant with the specified user and/or address
[**postConversationsEmailInboundmessages**](ConversationsApi#postConversationsEmailInboundmessages) | **POST** /api/v2/conversations/emails/{conversationId}/inboundmessages | Send an email to an external conversation. An external conversation is one where the provider is not PureCloud based. This endpoint allows the sender of the external email to reply or send a new message to the existing conversation. The new message will be treated as part of the existing conversation and chained to it.
[**postConversationsEmailMessages**](ConversationsApi#postConversationsEmailMessages) | **POST** /api/v2/conversations/emails/{conversationId}/messages | Send an email reply
[**postConversationsEmailMessagesDraftAttachmentsCopy**](ConversationsApi#postConversationsEmailMessagesDraftAttachmentsCopy) | **POST** /api/v2/conversations/emails/{conversationId}/messages/draft/attachments/copy | Copy attachments from an email message to the current draft.
[**postConversationsEmailParticipantCommunicationWrapup**](ConversationsApi#postConversationsEmailParticipantCommunicationWrapup) | **POST** /api/v2/conversations/emails/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup | Apply wrap-up for this conversation communication
[**postConversationsEmailParticipantReplace**](ConversationsApi#postConversationsEmailParticipantReplace) | **POST** /api/v2/conversations/emails/{conversationId}/participants/{participantId}/replace | Replace this participant with the specified user and/or address
[**postConversationsEmailReconnect**](ConversationsApi#postConversationsEmailReconnect) | **POST** /api/v2/conversations/emails/{conversationId}/reconnect | Reconnect the user to the most recently disconnected customer on a fully disconnected email conversation
[**postConversationsEmails**](ConversationsApi#postConversationsEmails) | **POST** /api/v2/conversations/emails | Create an email conversation
[**postConversationsEmailsAgentless**](ConversationsApi#postConversationsEmailsAgentless) | **POST** /api/v2/conversations/emails/agentless | Create an email conversation, per API
[**postConversationsFaxes**](ConversationsApi#postConversationsFaxes) | **POST** /api/v2/conversations/faxes | Create Fax Conversation
[**postConversationsKeyconfigurations**](ConversationsApi#postConversationsKeyconfigurations) | **POST** /api/v2/conversations/keyconfigurations | Setup configurations for encryption key creation
[**postConversationsKeyconfigurationsValidate**](ConversationsApi#postConversationsKeyconfigurationsValidate) | **POST** /api/v2/conversations/keyconfigurations/validate | Validate encryption key configurations without saving it
[**postConversationsMessageCommunicationMessages**](ConversationsApi#postConversationsMessageCommunicationMessages) | **POST** /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages | Send message
[**postConversationsMessageCommunicationMessagesMedia**](ConversationsApi#postConversationsMessageCommunicationMessagesMedia) | **POST** /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media | Create media
[**postConversationsMessageCommunicationMessagesMediaUploads**](ConversationsApi#postConversationsMessageCommunicationMessagesMediaUploads) | **POST** /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media/uploads | Create a URL to upload a message media file
[**postConversationsMessageCommunicationSocialmediaMessages**](ConversationsApi#postConversationsMessageCommunicationSocialmediaMessages) | **POST** /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/socialmedia/messages | Send a social media message
[**postConversationsMessageCommunicationTyping**](ConversationsApi#postConversationsMessageCommunicationTyping) | **POST** /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/typing | Send message typing event
[**postConversationsMessageInboundOpenEvent**](ConversationsApi#postConversationsMessageInboundOpenEvent) | **POST** /api/v2/conversations/messages/{integrationId}/inbound/open/event | Send an inbound Open Event Message
[**postConversationsMessageInboundOpenMessage**](ConversationsApi#postConversationsMessageInboundOpenMessage) | **POST** /api/v2/conversations/messages/{integrationId}/inbound/open/message | Send inbound Open Message
[**postConversationsMessageInboundOpenReceipt**](ConversationsApi#postConversationsMessageInboundOpenReceipt) | **POST** /api/v2/conversations/messages/{integrationId}/inbound/open/receipt | Send an inbound Open Receipt Message
[**postConversationsMessageInboundOpenStructuredResponse**](ConversationsApi#postConversationsMessageInboundOpenStructuredResponse) | **POST** /api/v2/conversations/messages/{integrationId}/inbound/open/structured/response | Send inbound Open Response
[**postConversationsMessageMessagesBulk**](ConversationsApi#postConversationsMessageMessagesBulk) | **POST** /api/v2/conversations/messages/{conversationId}/messages/bulk | Get messages in batch
[**postConversationsMessageParticipantCommunicationWrapup**](ConversationsApi#postConversationsMessageParticipantCommunicationWrapup) | **POST** /api/v2/conversations/messages/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup | Apply wrap-up for this conversation communication
[**postConversationsMessageParticipantMonitor**](ConversationsApi#postConversationsMessageParticipantMonitor) | **POST** /api/v2/conversations/messages/{conversationId}/participants/{participantId}/monitor | Listen in on the conversation from the point of view of a given participant.
[**postConversationsMessageParticipantReplace**](ConversationsApi#postConversationsMessageParticipantReplace) | **POST** /api/v2/conversations/messages/{conversationId}/participants/{participantId}/replace | Replace this participant with the specified user and/or address
[**postConversationsMessages**](ConversationsApi#postConversationsMessages) | **POST** /api/v2/conversations/messages | Create an outbound messaging conversation.
[**postConversationsMessagesAgentless**](ConversationsApi#postConversationsMessagesAgentless) | **POST** /api/v2/conversations/messages/agentless | Send an agentless outbound message
[**postConversationsMessagesInboundOpen**](ConversationsApi#postConversationsMessagesInboundOpen) | **POST** /api/v2/conversations/messages/inbound/open | Send an inbound Open Message
[**postConversationsMessagingIntegrationsFacebook**](ConversationsApi#postConversationsMessagingIntegrationsFacebook) | **POST** /api/v2/conversations/messaging/integrations/facebook | Create a Facebook Integration
[**postConversationsMessagingIntegrationsInstagram**](ConversationsApi#postConversationsMessagingIntegrationsInstagram) | **POST** /api/v2/conversations/messaging/integrations/instagram | Create Instagram Integration
[**postConversationsMessagingIntegrationsOpen**](ConversationsApi#postConversationsMessagingIntegrationsOpen) | **POST** /api/v2/conversations/messaging/integrations/open | Create an Open messaging integration
[**postConversationsMessagingIntegrationsTwitter**](ConversationsApi#postConversationsMessagingIntegrationsTwitter) | **POST** /api/v2/conversations/messaging/integrations/twitter | Create Twitter Integration
[**postConversationsMessagingIntegrationsWhatsapp**](ConversationsApi#postConversationsMessagingIntegrationsWhatsapp) | **POST** /api/v2/conversations/messaging/integrations/whatsapp | [This API is deprecated. Use POST /api/v2/conversations/messaging/integrations/whatsapp/embeddedsignup instead] Create a WhatsApp Integration
[**postConversationsMessagingIntegrationsWhatsappEmbeddedsignup**](ConversationsApi#postConversationsMessagingIntegrationsWhatsappEmbeddedsignup) | **POST** /api/v2/conversations/messaging/integrations/whatsapp/embeddedsignup | Create a WhatsApp Integration using the WhatsApp embedded signup flow
[**postConversationsMessagingSettings**](ConversationsApi#postConversationsMessagingSettings) | **POST** /api/v2/conversations/messaging/settings | Create a messaging setting
[**postConversationsMessagingSupportedcontent**](ConversationsApi#postConversationsMessagingSupportedcontent) | **POST** /api/v2/conversations/messaging/supportedcontent | Create a Supported Content profile
[**postConversationsParticipantsAttributesSearch**](ConversationsApi#postConversationsParticipantsAttributesSearch) | **POST** /api/v2/conversations/participants/attributes/search | Search conversations
[**postConversationsScreenshareParticipantCommunicationWrapup**](ConversationsApi#postConversationsScreenshareParticipantCommunicationWrapup) | **POST** /api/v2/conversations/screenshares/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup | Apply wrap-up for this conversation communication
[**postConversationsSocialParticipantCommunicationWrapup**](ConversationsApi#postConversationsSocialParticipantCommunicationWrapup) | **POST** /api/v2/conversations/socials/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup | Apply wrap-up for this conversation communication
[**postConversationsVideoAgentconferenceCommunication**](ConversationsApi#postConversationsVideoAgentconferenceCommunication) | **POST** /api/v2/conversations/videos/{conversationId}/agentconference/communications/{communicationId} | Create an Agent-Type video conference and assign an agent to it
[**postConversationsVideoParticipantCommunicationWrapup**](ConversationsApi#postConversationsVideoParticipantCommunicationWrapup) | **POST** /api/v2/conversations/videos/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup | Apply wrap-up for this conversation communication
[**postConversationsVideosMeetings**](ConversationsApi#postConversationsVideosMeetings) | **POST** /api/v2/conversations/videos/meetings | Generate a meetingId for a given conferenceId
[**putConversationParticipantFlaggedreason**](ConversationsApi#putConversationParticipantFlaggedreason) | **PUT** /api/v2/conversations/{conversationId}/participants/{participantId}/flaggedreason | Set flagged reason on conversation participant to indicate bad conversation quality.
[**putConversationSecureattributes**](ConversationsApi#putConversationSecureattributes) | **PUT** /api/v2/conversations/{conversationId}/secureattributes | Set the secure attributes on a conversation.
[**putConversationTags**](ConversationsApi#putConversationTags) | **PUT** /api/v2/conversations/{conversationId}/tags | Update the tags on a conversation.
[**putConversationsCallParticipantCommunicationUuidata**](ConversationsApi#putConversationsCallParticipantCommunicationUuidata) | **PUT** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/uuidata | Set uuiData to be sent on future commands.
[**putConversationsCallRecordingstate**](ConversationsApi#putConversationsCallRecordingstate) | **PUT** /api/v2/conversations/calls/{conversationId}/recordingstate | Update a conversation by setting its recording state
[**putConversationsCallbackRecordingstate**](ConversationsApi#putConversationsCallbackRecordingstate) | **PUT** /api/v2/conversations/callbacks/{conversationId}/recordingstate | Update a conversation by setting its recording state
[**putConversationsChatRecordingstate**](ConversationsApi#putConversationsChatRecordingstate) | **PUT** /api/v2/conversations/chats/{conversationId}/recordingstate | Update a conversation by setting its recording state
[**putConversationsCobrowsesessionRecordingstate**](ConversationsApi#putConversationsCobrowsesessionRecordingstate) | **PUT** /api/v2/conversations/cobrowsesessions/{conversationId}/recordingstate | Update a conversation by setting its recording state
[**putConversationsEmailMessagesDraft**](ConversationsApi#putConversationsEmailMessagesDraft) | **PUT** /api/v2/conversations/emails/{conversationId}/messages/draft | Update conversation draft reply
[**putConversationsEmailRecordingstate**](ConversationsApi#putConversationsEmailRecordingstate) | **PUT** /api/v2/conversations/emails/{conversationId}/recordingstate | Update a conversation by setting its recording state
[**putConversationsKeyconfiguration**](ConversationsApi#putConversationsKeyconfiguration) | **PUT** /api/v2/conversations/keyconfigurations/{keyconfigurationsId} | Update the encryption key configurations
[**putConversationsMessageRecordingstate**](ConversationsApi#putConversationsMessageRecordingstate) | **PUT** /api/v2/conversations/messages/{conversationId}/recordingstate | Update a conversation by setting its recording state
[**putConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId**](ConversationsApi#putConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId) | **PUT** /api/v2/conversations/messaging/identityresolution/integrations/apple/{integrationId} | Create an identity resolution settings for a Apple messaging integration
[**putConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId**](ConversationsApi#putConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId) | **PUT** /api/v2/conversations/messaging/identityresolution/integrations/facebook/{integrationId} | Create an identity resolution settings for a Facebook messaging integration
[**putConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId**](ConversationsApi#putConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId) | **PUT** /api/v2/conversations/messaging/identityresolution/integrations/instagram/{integrationId} | Create identity resolution settings for an Instagram messaging integration
[**putConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId**](ConversationsApi#putConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId) | **PUT** /api/v2/conversations/messaging/identityresolution/integrations/open/{integrationId} | Update an open messaging integration Identity Resolution settings
[**putConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId**](ConversationsApi#putConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId) | **PUT** /api/v2/conversations/messaging/identityresolution/integrations/twitter/{integrationId} | Create an identity resolution settings for an X (Formally Twitter) messaging integration
[**putConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId**](ConversationsApi#putConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId) | **PUT** /api/v2/conversations/messaging/identityresolution/integrations/whatsapp/{integrationId} | Update a whatsApp integration Identity Resolution settings
[**putConversationsMessagingSettingsDefault**](ConversationsApi#putConversationsMessagingSettingsDefault) | **PUT** /api/v2/conversations/messaging/settings/default | Set the organization's default setting that may be applied to to integrations without settings
[**putConversationsMessagingSupportedcontentDefault**](ConversationsApi#putConversationsMessagingSupportedcontentDefault) | **PUT** /api/v2/conversations/messaging/supportedcontent/default | Set the organization's default supported content profile that may be assigned to an integration when it is created.
[**putConversationsMessagingThreadingtimeline**](ConversationsApi#putConversationsMessagingThreadingtimeline) | **PUT** /api/v2/conversations/messaging/threadingtimeline | Update conversation threading window timeline for each messaging type
[**putConversationsScreenshareRecordingstate**](ConversationsApi#putConversationsScreenshareRecordingstate) | **PUT** /api/v2/conversations/screenshares/{conversationId}/recordingstate | Update a conversation by setting its recording state
[**putConversationsSocialRecordingstate**](ConversationsApi#putConversationsSocialRecordingstate) | **PUT** /api/v2/conversations/socials/{conversationId}/recordingstate | Update a conversation by setting its recording state
[**putConversationsVideoRecordingstate**](ConversationsApi#putConversationsVideoRecordingstate) | **PUT** /api/v2/conversations/videos/{conversationId}/recordingstate | Update a conversation by setting its recording state



## deleteAnalyticsConversationsAggregatesJob

> void deleteAnalyticsConversationsAggregatesJob(jobId)


DELETE /api/v2/analytics/conversations/aggregates/jobs/{jobId}

Delete/cancel an async request for conversation aggregates

deleteAnalyticsConversationsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:conversationAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsConversationsAggregatesJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsConversationsAggregatesJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsConversationsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteAnalyticsConversationsDetailsJob

> void deleteAnalyticsConversationsDetailsJob(jobId)


DELETE /api/v2/analytics/conversations/details/jobs/{jobId}

Delete/cancel an async details job

Requires ANY permissions:

* analytics:conversationDetail:view
* analytics:agentConversationDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsConversationsDetailsJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsConversationsDetailsJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsConversationsDetailsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteConversationParticipantCode

> void deleteConversationParticipantCode(conversationId, participantId, addCommunicationCode)


DELETE /api/v2/conversations/{conversationId}/participants/{participantId}/codes/{addCommunicationCode}

Delete a code used to add a communication to this participant

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let participantId = "participantId_example"; // String | participant ID
let addCommunicationCode = "addCommunicationCode_example"; // String | addCommunicationCode

apiInstance.deleteConversationParticipantCode(conversationId, participantId, addCommunicationCode)
  .then(() => {
    console.log('deleteConversationParticipantCode returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteConversationParticipantCode');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **addCommunicationCode** | **String** | addCommunicationCode |  |

### Return type

void (no response body)


## deleteConversationParticipantFlaggedreason

> void deleteConversationParticipantFlaggedreason(conversationId, participantId)


DELETE /api/v2/conversations/{conversationId}/participants/{participantId}/flaggedreason

Remove flagged reason from conversation participant.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let participantId = "participantId_example"; // String | participant ID

apiInstance.deleteConversationParticipantFlaggedreason(conversationId, participantId)
  .then(() => {
    console.log('deleteConversationParticipantFlaggedreason returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteConversationParticipantFlaggedreason');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |

### Return type

void (no response body)


## deleteConversationsCallParticipantConsult

> void deleteConversationsCallParticipantConsult(conversationId, participantId)


DELETE /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult

Cancel the transfer

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId

apiInstance.deleteConversationsCallParticipantConsult(conversationId, participantId)
  .then(() => {
    console.log('deleteConversationsCallParticipantConsult returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteConversationsCallParticipantConsult');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |

### Return type

void (no response body)


## deleteConversationsEmailMessagesDraftAttachment

> void deleteConversationsEmailMessagesDraftAttachment(conversationId, attachmentId)


DELETE /api/v2/conversations/emails/{conversationId}/messages/draft/attachments/{attachmentId}

Delete attachment from draft

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let attachmentId = "attachmentId_example"; // String | attachmentId

apiInstance.deleteConversationsEmailMessagesDraftAttachment(conversationId, attachmentId)
  .then(() => {
    console.log('deleteConversationsEmailMessagesDraftAttachment returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteConversationsEmailMessagesDraftAttachment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **attachmentId** | **String** | attachmentId |  |

### Return type

void (no response body)


## deleteConversationsMessagesCachedmediaCachedMediaItemId

> void deleteConversationsMessagesCachedmediaCachedMediaItemId(cachedMediaItemId)


DELETE /api/v2/conversations/messages/cachedmedia/{cachedMediaItemId}

Remove a cached media item asychronously

Requires ANY permissions:

* conversation:cachedMedia:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let cachedMediaItemId = "cachedMediaItemId_example"; // String | cachedMediaItemId

apiInstance.deleteConversationsMessagesCachedmediaCachedMediaItemId(cachedMediaItemId)
  .then(() => {
    console.log('deleteConversationsMessagesCachedmediaCachedMediaItemId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteConversationsMessagesCachedmediaCachedMediaItemId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **cachedMediaItemId** | **String** | cachedMediaItemId |  |

### Return type

void (no response body)


## deleteConversationsMessagingIntegrationsFacebookIntegrationId

> void deleteConversationsMessagingIntegrationsFacebookIntegrationId(integrationId)


DELETE /api/v2/conversations/messaging/integrations/facebook/{integrationId}

Delete a Facebook messaging integration

Requires ALL permissions:

* messaging:integration:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.deleteConversationsMessagingIntegrationsFacebookIntegrationId(integrationId)
  .then(() => {
    console.log('deleteConversationsMessagingIntegrationsFacebookIntegrationId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteConversationsMessagingIntegrationsFacebookIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |

### Return type

void (no response body)


## deleteConversationsMessagingIntegrationsInstagramIntegrationId

> void deleteConversationsMessagingIntegrationsInstagramIntegrationId(integrationId)


DELETE /api/v2/conversations/messaging/integrations/instagram/{integrationId}

Delete Instagram messaging integration

Requires ALL permissions:

* messaging:integration:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.deleteConversationsMessagingIntegrationsInstagramIntegrationId(integrationId)
  .then(() => {
    console.log('deleteConversationsMessagingIntegrationsInstagramIntegrationId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteConversationsMessagingIntegrationsInstagramIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |

### Return type

void (no response body)


## deleteConversationsMessagingIntegrationsOpenIntegrationId

> void deleteConversationsMessagingIntegrationsOpenIntegrationId(integrationId)


DELETE /api/v2/conversations/messaging/integrations/open/{integrationId}

Delete an Open messaging integration

See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.

Requires ALL permissions:

* messaging:integration:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.deleteConversationsMessagingIntegrationsOpenIntegrationId(integrationId)
  .then(() => {
    console.log('deleteConversationsMessagingIntegrationsOpenIntegrationId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteConversationsMessagingIntegrationsOpenIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |

### Return type

void (no response body)


## deleteConversationsMessagingIntegrationsTwitterIntegrationId

> void deleteConversationsMessagingIntegrationsTwitterIntegrationId(integrationId)


DELETE /api/v2/conversations/messaging/integrations/twitter/{integrationId}

Delete Twitter messaging integration

Requires ALL permissions:

* messaging:integration:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.deleteConversationsMessagingIntegrationsTwitterIntegrationId(integrationId)
  .then(() => {
    console.log('deleteConversationsMessagingIntegrationsTwitterIntegrationId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteConversationsMessagingIntegrationsTwitterIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |

### Return type

void (no response body)


## deleteConversationsMessagingIntegrationsWhatsappIntegrationId

> WhatsAppIntegration deleteConversationsMessagingIntegrationsWhatsappIntegrationId(integrationId)


DELETE /api/v2/conversations/messaging/integrations/whatsapp/{integrationId}

Delete a WhatsApp messaging integration

Requires ALL permissions:

* messaging:integration:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.deleteConversationsMessagingIntegrationsWhatsappIntegrationId(integrationId)
  .then((data) => {
    console.log(`deleteConversationsMessagingIntegrationsWhatsappIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteConversationsMessagingIntegrationsWhatsappIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |

### Return type

**WhatsAppIntegration**


## deleteConversationsMessagingSetting

> void deleteConversationsMessagingSetting(messageSettingId)


DELETE /api/v2/conversations/messaging/settings/{messageSettingId}

Delete a messaging setting

Requires ALL permissions:

* messaging:setting:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let messageSettingId = "messageSettingId_example"; // String | Message Setting ID

apiInstance.deleteConversationsMessagingSetting(messageSettingId)
  .then(() => {
    console.log('deleteConversationsMessagingSetting returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteConversationsMessagingSetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageSettingId** | **String** | Message Setting ID |  |

### Return type

void (no response body)


## deleteConversationsMessagingSettingsDefault

> void deleteConversationsMessagingSettingsDefault()


DELETE /api/v2/conversations/messaging/settings/default

Delete the organization's default setting, a global default will be applied to integrations without settings

When an integration is created a settings ID may be assigned to it. If the settings ID is not supplied, the default settings will be assigned to it.

Requires ALL permissions:

* messaging:setting:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

apiInstance.deleteConversationsMessagingSettingsDefault()
  .then(() => {
    console.log('deleteConversationsMessagingSettingsDefault returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteConversationsMessagingSettingsDefault');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

void (no response body)


## deleteConversationsMessagingSupportedcontentSupportedContentId

> void deleteConversationsMessagingSupportedcontentSupportedContentId(supportedContentId)


DELETE /api/v2/conversations/messaging/supportedcontent/{supportedContentId}

Delete a supported content profile

Requires ALL permissions:

* messaging:supportedContent:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let supportedContentId = "supportedContentId_example"; // String | Supported Content ID

apiInstance.deleteConversationsMessagingSupportedcontentSupportedContentId(supportedContentId)
  .then(() => {
    console.log('deleteConversationsMessagingSupportedcontentSupportedContentId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteConversationsMessagingSupportedcontentSupportedContentId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **supportedContentId** | **String** | Supported Content ID |  |

### Return type

void (no response body)


## getAnalyticsConversationDetails

> AnalyticsConversationWithoutAttributes getAnalyticsConversationDetails(conversationId)


GET /api/v2/analytics/conversations/{conversationId}/details

Get a conversation by id

Requires ANY permissions:

* analytics:conversationDetail:view
* analytics:agentConversationDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId

apiInstance.getAnalyticsConversationDetails(conversationId)
  .then((data) => {
    console.log(`getAnalyticsConversationDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsConversationDetails');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |

### Return type

**AnalyticsConversationWithoutAttributes**


## getAnalyticsConversationsAggregatesJob

> AsyncQueryStatus getAnalyticsConversationsAggregatesJob(jobId)


GET /api/v2/analytics/conversations/aggregates/jobs/{jobId}

Get status for async query for conversation aggregates

getAnalyticsConversationsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:conversationAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsConversationsAggregatesJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsConversationsAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsConversationsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsConversationsAggregatesJobResults

> ConversationAsyncAggregateQueryResponse getAnalyticsConversationsAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/conversations/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

getAnalyticsConversationsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:conversationAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getAnalyticsConversationsAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsConversationsAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsConversationsAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |

### Return type

**ConversationAsyncAggregateQueryResponse**


## getAnalyticsConversationsDetails

> AnalyticsConversationWithoutAttributesMultiGetResponse getAnalyticsConversationsDetails(opts)


GET /api/v2/analytics/conversations/details

Gets multiple conversations by id

Requires ANY permissions:

* analytics:conversationDetail:view
* analytics:agentConversationDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let opts = { 
  'id': ["id_example"] // [String] | Comma-separated conversation ids
};

apiInstance.getAnalyticsConversationsDetails(opts)
  .then((data) => {
    console.log(`getAnalyticsConversationsDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsConversationsDetails');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **[String]** | Comma-separated conversation ids | [optional]  |

### Return type

**AnalyticsConversationWithoutAttributesMultiGetResponse**


## getAnalyticsConversationsDetailsJob

> AsyncQueryStatus getAnalyticsConversationsDetailsJob(jobId)


GET /api/v2/analytics/conversations/details/jobs/{jobId}

Get status for async query for conversation details

Requires ANY permissions:

* analytics:conversationDetail:view
* analytics:agentConversationDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsConversationsDetailsJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsConversationsDetailsJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsConversationsDetailsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsConversationsDetailsJobResults

> AnalyticsConversationAsyncQueryResponse getAnalyticsConversationsDetailsJobResults(jobId, opts)


GET /api/v2/analytics/conversations/details/jobs/{jobId}/results

Fetch a page of results for an async details job

Requires ANY permissions:

* analytics:conversationDetail:view
* analytics:agentConversationDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example", // String | Indicates where to resume query results (not required for first page)
  'pageSize': 3.4 // Number | The desired maximum number of results
};

apiInstance.getAnalyticsConversationsDetailsJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsConversationsDetailsJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsConversationsDetailsJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page) | [optional]  |
 **pageSize** | **Number** | The desired maximum number of results | [optional]  |

### Return type

**AnalyticsConversationAsyncQueryResponse**


## getAnalyticsConversationsDetailsJobsAvailability

> DataAvailabilityResponse getAnalyticsConversationsDetailsJobsAvailability()


GET /api/v2/analytics/conversations/details/jobs/availability

Lookup the datalake availability date and time

Requires ANY permissions:

* analytics:conversationDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

apiInstance.getAnalyticsConversationsDetailsJobsAvailability()
  .then((data) => {
    console.log(`getAnalyticsConversationsDetailsJobsAvailability success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsConversationsDetailsJobsAvailability');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**DataAvailabilityResponse**


## getConversation

> Conversation getConversation(conversationId)


GET /api/v2/conversations/{conversationId}

Get conversation

Requires ANY permissions:

* conversation:communication:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID

apiInstance.getConversation(conversationId)
  .then((data) => {
    console.log(`getConversation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |

### Return type

**Conversation**


## getConversationCommunicationInternalmessage

> InternalMessageData getConversationCommunicationInternalmessage(conversationId, communicationId, messageId)


GET /api/v2/conversations/{conversationId}/communications/{communicationId}/internalmessages/{messageId}

Get message

getConversationCommunicationInternalmessage is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* conversation:internalMessaging:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let communicationId = "communicationId_example"; // String | communicationId
let messageId = "messageId_example"; // String | messageId

apiInstance.getConversationCommunicationInternalmessage(conversationId, communicationId, messageId)
  .then((data) => {
    console.log(`getConversationCommunicationInternalmessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationCommunicationInternalmessage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **communicationId** | **String** | communicationId |  |
 **messageId** | **String** | messageId |  |

### Return type

**InternalMessageData**


## getConversationCommunicationInternalmessages

> InternalMessageDataEntityListing getConversationCommunicationInternalmessages(conversationId, communicationId, opts)


GET /api/v2/conversations/{conversationId}/communications/{communicationId}/internalmessages

Get messages for communication

getConversationCommunicationInternalmessages is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* conversation:internalMessaging:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let communicationId = "communicationId_example"; // String | communicationId
let opts = { 
  'pageSize': 25, // Number | Indicates maximum number of results in response. Default page size is 25 results. The maximum page size is 200.
  'pageNumber': 1 // Number | Page number
};

apiInstance.getConversationCommunicationInternalmessages(conversationId, communicationId, opts)
  .then((data) => {
    console.log(`getConversationCommunicationInternalmessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationCommunicationInternalmessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **communicationId** | **String** | communicationId |  |
 **pageSize** | **Number** | Indicates maximum number of results in response. Default page size is 25 results. The maximum page size is 200. | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |

### Return type

**InternalMessageDataEntityListing**


## getConversationParticipantSecureivrsession

> SecureSession getConversationParticipantSecureivrsession(conversationId, participantId, secureSessionId)


GET /api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions/{secureSessionId}

Fetch info on a secure session

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let participantId = "participantId_example"; // String | participant ID
let secureSessionId = "secureSessionId_example"; // String | secure IVR session ID

apiInstance.getConversationParticipantSecureivrsession(conversationId, participantId, secureSessionId)
  .then((data) => {
    console.log(`getConversationParticipantSecureivrsession success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationParticipantSecureivrsession');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **secureSessionId** | **String** | secure IVR session ID |  |

### Return type

**SecureSession**


## getConversationParticipantSecureivrsessions

> SecureSessionEntityListing getConversationParticipantSecureivrsessions(conversationId, participantId)


GET /api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions

Get a list of secure sessions for this participant.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let participantId = "participantId_example"; // String | participant ID

apiInstance.getConversationParticipantSecureivrsessions(conversationId, participantId)
  .then((data) => {
    console.log(`getConversationParticipantSecureivrsessions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationParticipantSecureivrsessions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |

### Return type

**SecureSessionEntityListing**


## getConversationParticipantWrapup

> AssignedWrapupCode getConversationParticipantWrapup(conversationId, participantId, opts)


GET /api/v2/conversations/{conversationId}/participants/{participantId}/wrapup

Get the wrap-up for this conversation participant. 

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let participantId = "participantId_example"; // String | participant ID
let opts = { 
  'provisional': false // Boolean | Indicates if the wrap-up code is provisional.
};

apiInstance.getConversationParticipantWrapup(conversationId, participantId, opts)
  .then((data) => {
    console.log(`getConversationParticipantWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationParticipantWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **provisional** | **Boolean** | Indicates if the wrap-up code is provisional. | [optional] [default to false] |

### Return type

**AssignedWrapupCode**


## getConversationParticipantWrapupcodes

> [WrapupCode] getConversationParticipantWrapupcodes(conversationId, participantId)


GET /api/v2/conversations/{conversationId}/participants/{participantId}/wrapupcodes

Get list of wrapup codes for this conversation participant

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let participantId = "participantId_example"; // String | participant ID

apiInstance.getConversationParticipantWrapupcodes(conversationId, participantId)
  .then((data) => {
    console.log(`getConversationParticipantWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationParticipantWrapupcodes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |

### Return type

**[WrapupCode]**


## getConversationSecureattributes

> ConversationSecureAttributes getConversationSecureattributes(conversationId)


GET /api/v2/conversations/{conversationId}/secureattributes

Get the secure attributes on a conversation.

Requires ANY permissions:

* conversation:participant:attributesview

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID

apiInstance.getConversationSecureattributes(conversationId)
  .then((data) => {
    console.log(`getConversationSecureattributes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationSecureattributes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |

### Return type

**ConversationSecureAttributes**


## getConversationSuggestion

> Suggestion getConversationSuggestion(conversationId, suggestionId)


GET /api/v2/conversations/{conversationId}/suggestions/{suggestionId}

Get Suggestion.

Requires ALL permissions:

* conversation:suggestion:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let suggestionId = "suggestionId_example"; // String | Suggestion ID

apiInstance.getConversationSuggestion(conversationId, suggestionId)
  .then((data) => {
    console.log(`getConversationSuggestion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationSuggestion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **suggestionId** | **String** | Suggestion ID |  |

### Return type

**Suggestion**


## getConversationSuggestions

> SuggestionListing getConversationSuggestions(conversationId, opts)


GET /api/v2/conversations/{conversationId}/suggestions

Get all suggestions for a conversation.

Requires ALL permissions:

* conversation:suggestion:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'type': "type_example", // String | Suggestion type to filter by.
  'state': "state_example" // String | Suggestion state to filter Copilot suggestions.
};

apiInstance.getConversationSuggestions(conversationId, opts)
  .then((data) => {
    console.log(`getConversationSuggestions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationSuggestions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **type** | **String** | Suggestion type to filter by. | [optional] <br />**Values**: Faq, Article, KnowledgeArticle, KnowledgeSearch, CannedResponse, Script |
 **state** | **String** | Suggestion state to filter Copilot suggestions. | [optional] <br />**Values**: Suggested, Accepted, Dismissed, Failed, Rated |

### Return type

**SuggestionListing**


## getConversationSummaries

> ConversationSummariesGetResponse getConversationSummaries(conversationId)


GET /api/v2/conversations/{conversationId}/summaries

Get the summaries of the conversation.

Requires ALL permissions:

* conversation:summary:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | Conversation ID

apiInstance.getConversationSummaries(conversationId)
  .then((data) => {
    console.log(`getConversationSummaries success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationSummaries');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |

### Return type

**ConversationSummariesGetResponse**


## getConversations

> ConversationEntityListing getConversations(opts)


GET /api/v2/conversations

Get active conversations for the logged in user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let opts = { 
  'communicationType': "communicationType_example" // String | Call or Chat communication filtering
};

apiInstance.getConversations(opts)
  .then((data) => {
    console.log(`getConversations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **communicationType** | **String** | Call or Chat communication filtering | [optional]  |

### Return type

**ConversationEntityListing**


## getConversationsCall

> CallConversation getConversationsCall(conversationId)


GET /api/v2/conversations/calls/{conversationId}

Get call conversation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId

apiInstance.getConversationsCall(conversationId)
  .then((data) => {
    console.log(`getConversationsCall success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsCall');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |

### Return type

**CallConversation**


## getConversationsCallParticipantCommunicationWrapup

> AssignedWrapupCode getConversationsCallParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)


GET /api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup

Get the wrap-up for this conversation communication. 

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let opts = { 
  'provisional': false // Boolean | Indicates whether or not to fetch provisional wrap-up code.
};

apiInstance.getConversationsCallParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)
  .then((data) => {
    console.log(`getConversationsCallParticipantCommunicationWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsCallParticipantCommunicationWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **provisional** | **Boolean** | Indicates whether or not to fetch provisional wrap-up code. | [optional] [default to false] |

### Return type

**AssignedWrapupCode**


## getConversationsCallParticipantWrapup

> AssignedWrapupCode getConversationsCallParticipantWrapup(conversationId, participantId, opts)


GET /api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapup

Get the wrap-up for this conversation participant. 

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let opts = { 
  'provisional': false // Boolean | Indicates whether or not to fetch provisional wrap-up code.
};

apiInstance.getConversationsCallParticipantWrapup(conversationId, participantId, opts)
  .then((data) => {
    console.log(`getConversationsCallParticipantWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsCallParticipantWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **provisional** | **Boolean** | Indicates whether or not to fetch provisional wrap-up code. | [optional] [default to false] |

### Return type

**AssignedWrapupCode**


## getConversationsCallParticipantWrapupcodes

> [WrapupCode] getConversationsCallParticipantWrapupcodes(conversationId, participantId)


GET /api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapupcodes

Get list of wrapup codes for this conversation participant

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId

apiInstance.getConversationsCallParticipantWrapupcodes(conversationId, participantId)
  .then((data) => {
    console.log(`getConversationsCallParticipantWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsCallParticipantWrapupcodes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |

### Return type

**[WrapupCode]**


## getConversationsCallback

> CallbackConversation getConversationsCallback(conversationId)


GET /api/v2/conversations/callbacks/{conversationId}

Get callback conversation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId

apiInstance.getConversationsCallback(conversationId)
  .then((data) => {
    console.log(`getConversationsCallback success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsCallback');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |

### Return type

**CallbackConversation**


## getConversationsCallbackParticipantCommunicationWrapup

> AssignedWrapupCode getConversationsCallbackParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)


GET /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup

Get the wrap-up for this conversation communication. 

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let opts = { 
  'provisional': false // Boolean | Indicates whether or not to fetch provisional wrap-up code.
};

apiInstance.getConversationsCallbackParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)
  .then((data) => {
    console.log(`getConversationsCallbackParticipantCommunicationWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsCallbackParticipantCommunicationWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **provisional** | **Boolean** | Indicates whether or not to fetch provisional wrap-up code. | [optional] [default to false] |

### Return type

**AssignedWrapupCode**


## getConversationsCallbackParticipantWrapup

> AssignedWrapupCode getConversationsCallbackParticipantWrapup(conversationId, participantId, opts)


GET /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapup

Get the wrap-up for this conversation participant. 

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let opts = { 
  'provisional': false // Boolean | Indicates whether or not to fetch provisional wrap-up code.
};

apiInstance.getConversationsCallbackParticipantWrapup(conversationId, participantId, opts)
  .then((data) => {
    console.log(`getConversationsCallbackParticipantWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsCallbackParticipantWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **provisional** | **Boolean** | Indicates whether or not to fetch provisional wrap-up code. | [optional] [default to false] |

### Return type

**AssignedWrapupCode**


## getConversationsCallbackParticipantWrapupcodes

> [WrapupCode] getConversationsCallbackParticipantWrapupcodes(conversationId, participantId)


GET /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapupcodes

Get list of wrapup codes for this conversation participant

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId

apiInstance.getConversationsCallbackParticipantWrapupcodes(conversationId, participantId)
  .then((data) => {
    console.log(`getConversationsCallbackParticipantWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsCallbackParticipantWrapupcodes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |

### Return type

**[WrapupCode]**


## getConversationsCallbacks

> CallbackConversationEntityListing getConversationsCallbacks()


GET /api/v2/conversations/callbacks

Get active callback conversations for the logged in user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

apiInstance.getConversationsCallbacks()
  .then((data) => {
    console.log(`getConversationsCallbacks success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsCallbacks');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**CallbackConversationEntityListing**


## getConversationsCalls

> CallConversationEntityListing getConversationsCalls()


GET /api/v2/conversations/calls

Get active call conversations for the logged in user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

apiInstance.getConversationsCalls()
  .then((data) => {
    console.log(`getConversationsCalls success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsCalls');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**CallConversationEntityListing**


## getConversationsCallsHistory

> CallHistoryConversationEntityListing getConversationsCallsHistory(opts)


GET /api/v2/conversations/calls/history

Get call history

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let opts = { 
  'pageSize': 25, // Number | Page size, maximum 50
  'pageNumber': 1, // Number | Page number
  'interval': "interval_example", // String | Interval string; format is ISO-8601. Separate start and end times with forward slash '/'
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};

apiInstance.getConversationsCallsHistory(opts)
  .then((data) => {
    console.log(`getConversationsCallsHistory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsCallsHistory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size, maximum 50 | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **interval** | **String** | Interval string; format is ISO-8601. Separate start and end times with forward slash '/' | [optional]  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: externalorganization, externalcontact, user, queue, group |

### Return type

**CallHistoryConversationEntityListing**


## getConversationsCallsMaximumconferenceparties

> MaxParticipants getConversationsCallsMaximumconferenceparties()


GET /api/v2/conversations/calls/maximumconferenceparties

Get the maximum number of participants that this user can have on a conference

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

apiInstance.getConversationsCallsMaximumconferenceparties()
  .then((data) => {
    console.log(`getConversationsCallsMaximumconferenceparties success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsCallsMaximumconferenceparties');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**MaxParticipants**


## getConversationsChat

> ChatConversation getConversationsChat(conversationId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/conversations/chats/{conversationId}

Get chat conversation

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId

apiInstance.getConversationsChat(conversationId)
  .then((data) => {
    console.log(`getConversationsChat success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsChat');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |

### Return type

**ChatConversation**


## getConversationsChatMessage

> WebChatMessage getConversationsChatMessage(conversationId, messageId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/conversations/chats/{conversationId}/messages/{messageId}

Get a web chat conversation message

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/. The current user must be involved with the conversation to get its messages.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let messageId = "messageId_example"; // String | messageId

apiInstance.getConversationsChatMessage(conversationId, messageId)
  .then((data) => {
    console.log(`getConversationsChatMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsChatMessage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **messageId** | **String** | messageId |  |

### Return type

**WebChatMessage**


## getConversationsChatMessages

> WebChatMessageEntityList getConversationsChatMessages(conversationId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/conversations/chats/{conversationId}/messages

Get the messages of a chat conversation.

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/. The current user must be involved with the conversation to get its messages.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let opts = { 
  'after': "after_example", // String | If specified, get the messages chronologically after the id of this message
  'before': "before_example", // String | If specified, get the messages chronologically before the id of this message
  'sortOrder': "ascending", // String | Sort order
  'maxResults': 100 // Number | Limit the returned number of messages, up to a maximum of 100
};

apiInstance.getConversationsChatMessages(conversationId, opts)
  .then((data) => {
    console.log(`getConversationsChatMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsChatMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **after** | **String** | If specified, get the messages chronologically after the id of this message | [optional]  |
 **before** | **String** | If specified, get the messages chronologically before the id of this message | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] [default to ascending]<br />**Values**: ascending, descending |
 **maxResults** | **Number** | Limit the returned number of messages, up to a maximum of 100 | [optional] [default to 100] |

### Return type

**WebChatMessageEntityList**


## getConversationsChatParticipantCommunicationWrapup

> AssignedWrapupCode getConversationsChatParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup

Get the wrap-up for this conversation communication. 

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let opts = { 
  'provisional': false // Boolean | Indicates whether or not to fetch provisional wrap-up code.
};

apiInstance.getConversationsChatParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)
  .then((data) => {
    console.log(`getConversationsChatParticipantCommunicationWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsChatParticipantCommunicationWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **provisional** | **Boolean** | Indicates whether or not to fetch provisional wrap-up code. | [optional] [default to false] |

### Return type

**AssignedWrapupCode**


## getConversationsChatParticipantWrapup

> AssignedWrapupCode getConversationsChatParticipantWrapup(conversationId, participantId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapup

Get the wrap-up for this conversation participant. 

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let opts = { 
  'provisional': false // Boolean | Indicates whether or not to fetch provisional wrap-up code.
};

apiInstance.getConversationsChatParticipantWrapup(conversationId, participantId, opts)
  .then((data) => {
    console.log(`getConversationsChatParticipantWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsChatParticipantWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **provisional** | **Boolean** | Indicates whether or not to fetch provisional wrap-up code. | [optional] [default to false] |

### Return type

**AssignedWrapupCode**


## getConversationsChatParticipantWrapupcodes

> [WrapupCode] getConversationsChatParticipantWrapupcodes(conversationId, participantId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapupcodes

Get list of wrapup codes for this conversation participant

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId

apiInstance.getConversationsChatParticipantWrapupcodes(conversationId, participantId)
  .then((data) => {
    console.log(`getConversationsChatParticipantWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsChatParticipantWrapupcodes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |

### Return type

**[WrapupCode]**


## getConversationsChats

> ChatConversationEntityListing getConversationsChats()

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/conversations/chats

Get active chat conversations for the logged in user

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

apiInstance.getConversationsChats()
  .then((data) => {
    console.log(`getConversationsChats success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsChats');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**ChatConversationEntityListing**


## getConversationsCobrowsesession

> CobrowseConversation getConversationsCobrowsesession(conversationId)


GET /api/v2/conversations/cobrowsesessions/{conversationId}

Get cobrowse conversation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId

apiInstance.getConversationsCobrowsesession(conversationId)
  .then((data) => {
    console.log(`getConversationsCobrowsesession success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsCobrowsesession');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |

### Return type

**CobrowseConversation**


## getConversationsCobrowsesessionParticipantCommunicationWrapup

> AssignedWrapupCode getConversationsCobrowsesessionParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup

Get the wrap-up for this conversation communication. 

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let opts = { 
  'provisional': false // Boolean | Indicates whether or not to fetch provisional wrap-up code.
};

apiInstance.getConversationsCobrowsesessionParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)
  .then((data) => {
    console.log(`getConversationsCobrowsesessionParticipantCommunicationWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsCobrowsesessionParticipantCommunicationWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **provisional** | **Boolean** | Indicates whether or not to fetch provisional wrap-up code. | [optional] [default to false] |

### Return type

**AssignedWrapupCode**


## getConversationsCobrowsesessionParticipantWrapup

> AssignedWrapupCode getConversationsCobrowsesessionParticipantWrapup(conversationId, participantId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapup

Get the wrap-up for this conversation participant. 

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let opts = { 
  'provisional': false // Boolean | Indicates whether or not to fetch provisional wrap-up code.
};

apiInstance.getConversationsCobrowsesessionParticipantWrapup(conversationId, participantId, opts)
  .then((data) => {
    console.log(`getConversationsCobrowsesessionParticipantWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsCobrowsesessionParticipantWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **provisional** | **Boolean** | Indicates whether or not to fetch provisional wrap-up code. | [optional] [default to false] |

### Return type

**AssignedWrapupCode**


## getConversationsCobrowsesessionParticipantWrapupcodes

> [WrapupCode] getConversationsCobrowsesessionParticipantWrapupcodes(conversationId, participantId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapupcodes

Get list of wrapup codes for this conversation participant

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId

apiInstance.getConversationsCobrowsesessionParticipantWrapupcodes(conversationId, participantId)
  .then((data) => {
    console.log(`getConversationsCobrowsesessionParticipantWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsCobrowsesessionParticipantWrapupcodes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |

### Return type

**[WrapupCode]**


## getConversationsCobrowsesessions

> CobrowseConversationEntityListing getConversationsCobrowsesessions()


GET /api/v2/conversations/cobrowsesessions

Get active cobrowse conversations for the logged in user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

apiInstance.getConversationsCobrowsesessions()
  .then((data) => {
    console.log(`getConversationsCobrowsesessions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsCobrowsesessions');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**CobrowseConversationEntityListing**


## getConversationsEmail

> EmailConversation getConversationsEmail(conversationId)


GET /api/v2/conversations/emails/{conversationId}

Get email conversation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId

apiInstance.getConversationsEmail(conversationId)
  .then((data) => {
    console.log(`getConversationsEmail success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsEmail');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |

### Return type

**EmailConversation**


## getConversationsEmailMessage

> EmailMessage getConversationsEmailMessage(conversationId, messageId)


GET /api/v2/conversations/emails/{conversationId}/messages/{messageId}

Get conversation message

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let messageId = "messageId_example"; // String | messageId

apiInstance.getConversationsEmailMessage(conversationId, messageId)
  .then((data) => {
    console.log(`getConversationsEmailMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsEmailMessage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **messageId** | **String** | messageId |  |

### Return type

**EmailMessage**


## getConversationsEmailMessages

> EmailMessagePreviewListing getConversationsEmailMessages(conversationId)


GET /api/v2/conversations/emails/{conversationId}/messages

Get conversation messages

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId

apiInstance.getConversationsEmailMessages(conversationId)
  .then((data) => {
    console.log(`getConversationsEmailMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsEmailMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |

### Return type

**EmailMessagePreviewListing**


## getConversationsEmailMessagesDraft

> EmailMessage getConversationsEmailMessagesDraft(conversationId)


GET /api/v2/conversations/emails/{conversationId}/messages/draft

Get conversation draft reply

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId

apiInstance.getConversationsEmailMessagesDraft(conversationId)
  .then((data) => {
    console.log(`getConversationsEmailMessagesDraft success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsEmailMessagesDraft');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |

### Return type

**EmailMessage**


## getConversationsEmailParticipantCommunicationWrapup

> AssignedWrapupCode getConversationsEmailParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)


GET /api/v2/conversations/emails/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup

Get the wrap-up for this conversation communication. 

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let opts = { 
  'provisional': false // Boolean | Indicates whether or not to fetch provisional wrap-up code.
};

apiInstance.getConversationsEmailParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)
  .then((data) => {
    console.log(`getConversationsEmailParticipantCommunicationWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsEmailParticipantCommunicationWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **provisional** | **Boolean** | Indicates whether or not to fetch provisional wrap-up code. | [optional] [default to false] |

### Return type

**AssignedWrapupCode**


## getConversationsEmailParticipantWrapup

> AssignedWrapupCode getConversationsEmailParticipantWrapup(conversationId, participantId, opts)


GET /api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapup

Get the wrap-up for this conversation participant. 

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let opts = { 
  'provisional': false // Boolean | Indicates whether or not to fetch provisional wrap-up code.
};

apiInstance.getConversationsEmailParticipantWrapup(conversationId, participantId, opts)
  .then((data) => {
    console.log(`getConversationsEmailParticipantWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsEmailParticipantWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **provisional** | **Boolean** | Indicates whether or not to fetch provisional wrap-up code. | [optional] [default to false] |

### Return type

**AssignedWrapupCode**


## getConversationsEmailParticipantWrapupcodes

> [WrapupCode] getConversationsEmailParticipantWrapupcodes(conversationId, participantId)


GET /api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapupcodes

Get list of wrapup codes for this conversation participant

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId

apiInstance.getConversationsEmailParticipantWrapupcodes(conversationId, participantId)
  .then((data) => {
    console.log(`getConversationsEmailParticipantWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsEmailParticipantWrapupcodes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |

### Return type

**[WrapupCode]**


## getConversationsEmailSettings

> EmailsSettings getConversationsEmailSettings(conversationId)


GET /api/v2/conversations/emails/{conversationId}/settings

Get emails settings for a given conversation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId

apiInstance.getConversationsEmailSettings(conversationId)
  .then((data) => {
    console.log(`getConversationsEmailSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsEmailSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |

### Return type

**EmailsSettings**


## getConversationsEmails

> EmailConversationEntityListing getConversationsEmails()


GET /api/v2/conversations/emails

Get active email conversations for the logged in user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

apiInstance.getConversationsEmails()
  .then((data) => {
    console.log(`getConversationsEmails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsEmails');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**EmailConversationEntityListing**


## getConversationsInternalmessage

> InternalMessageConversation getConversationsInternalmessage(conversationId)


GET /api/v2/conversations/internalmessages/{conversationId}

Get internal message conversation

getConversationsInternalmessage is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* conversation:internalMessaging:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId

apiInstance.getConversationsInternalmessage(conversationId)
  .then((data) => {
    console.log(`getConversationsInternalmessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsInternalmessage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |

### Return type

**InternalMessageConversation**


## getConversationsInternalmessages

> InternalMessageConversationEntityListing getConversationsInternalmessages()


GET /api/v2/conversations/internalmessages

Get active internal message conversations for the logged in user

getConversationsInternalmessages is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* conversation:internalMessaging:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

apiInstance.getConversationsInternalmessages()
  .then((data) => {
    console.log(`getConversationsInternalmessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsInternalmessages');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**InternalMessageConversationEntityListing**


## getConversationsKeyconfiguration

> ConversationEncryptionConfiguration getConversationsKeyconfiguration(keyconfigurationsId)


GET /api/v2/conversations/keyconfigurations/{keyconfigurationsId}

Get the encryption key configurations

Requires ANY permissions:

* conversation:encryptionKey:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let keyconfigurationsId = "keyconfigurationsId_example"; // String | Key Configurations Id

apiInstance.getConversationsKeyconfiguration(keyconfigurationsId)
  .then((data) => {
    console.log(`getConversationsKeyconfiguration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsKeyconfiguration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **keyconfigurationsId** | **String** | Key Configurations Id |  |

### Return type

**ConversationEncryptionConfiguration**


## getConversationsKeyconfigurations

> ConversationEncryptionConfigurationListing getConversationsKeyconfigurations()


GET /api/v2/conversations/keyconfigurations

Get a list of key configurations data

Requires ANY permissions:

* conversation:encryptionKey:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

apiInstance.getConversationsKeyconfigurations()
  .then((data) => {
    console.log(`getConversationsKeyconfigurations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsKeyconfigurations');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**ConversationEncryptionConfigurationListing**


## getConversationsMessage

> MessageConversation getConversationsMessage(conversationId)


GET /api/v2/conversations/messages/{conversationId}

Get message conversation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId

apiInstance.getConversationsMessage(conversationId)
  .then((data) => {
    console.log(`getConversationsMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |

### Return type

**MessageConversation**


## getConversationsMessageCommunicationMessagesMediaMediaId

> MessageMediaData getConversationsMessageCommunicationMessagesMediaMediaId(conversationId, communicationId, mediaId)


GET /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media/{mediaId}

Get media

See https://developer.genesys.cloud/api/rest/v2/conversations/messaging-media-upload for example usage.

Requires ANY permissions:

* conversation:message:view
* conversation:webmessaging:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let communicationId = "communicationId_example"; // String | communicationId
let mediaId = "mediaId_example"; // String | mediaId

apiInstance.getConversationsMessageCommunicationMessagesMediaMediaId(conversationId, communicationId, mediaId)
  .then((data) => {
    console.log(`getConversationsMessageCommunicationMessagesMediaMediaId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessageCommunicationMessagesMediaMediaId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **communicationId** | **String** | communicationId |  |
 **mediaId** | **String** | mediaId |  |

### Return type

**MessageMediaData**


## getConversationsMessageDetails

> MessageData getConversationsMessageDetails(messageId, opts)


GET /api/v2/conversations/messages/{messageId}/details

Get message

Requires ANY permissions:

* conversation:message:view
* conversation:webmessaging:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let messageId = "messageId_example"; // String | messageId
let opts = { 
  'useNormalizedMessage': false // Boolean | If true, response removes deprecated fields (textBody, media)
};

apiInstance.getConversationsMessageDetails(messageId, opts)
  .then((data) => {
    console.log(`getConversationsMessageDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessageDetails');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageId** | **String** | messageId |  |
 **useNormalizedMessage** | **Boolean** | If true, response removes deprecated fields (textBody, media) | [optional] [default to false] |

### Return type

**MessageData**


## getConversationsMessageMessage

> MessageData getConversationsMessageMessage(conversationId, messageId, opts)


GET /api/v2/conversations/messages/{conversationId}/messages/{messageId}

Get conversation message

Requires ANY permissions:

* conversation:message:view
* conversation:webmessaging:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let messageId = "messageId_example"; // String | messageId
let opts = { 
  'useNormalizedMessage': false // Boolean | If true, response removes deprecated fields (textBody, media)
};

apiInstance.getConversationsMessageMessage(conversationId, messageId, opts)
  .then((data) => {
    console.log(`getConversationsMessageMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessageMessage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **messageId** | **String** | messageId |  |
 **useNormalizedMessage** | **Boolean** | If true, response removes deprecated fields (textBody, media) | [optional] [default to false] |

### Return type

**MessageData**


## getConversationsMessageParticipantCommunicationWrapup

> AssignedWrapupCode getConversationsMessageParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)


GET /api/v2/conversations/messages/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup

Get the wrap-up for this conversation communication. 

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let opts = { 
  'provisional': false // Boolean | Indicates whether or not to fetch provisional wrap-up code.
};

apiInstance.getConversationsMessageParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)
  .then((data) => {
    console.log(`getConversationsMessageParticipantCommunicationWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessageParticipantCommunicationWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **provisional** | **Boolean** | Indicates whether or not to fetch provisional wrap-up code. | [optional] [default to false] |

### Return type

**AssignedWrapupCode**


## getConversationsMessageParticipantWrapup

> AssignedWrapupCode getConversationsMessageParticipantWrapup(conversationId, participantId, opts)


GET /api/v2/conversations/messages/{conversationId}/participants/{participantId}/wrapup

Get the wrap-up for this conversation participant. 

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let opts = { 
  'provisional': false // Boolean | Indicates whether or not to fetch provisional wrap-up code.
};

apiInstance.getConversationsMessageParticipantWrapup(conversationId, participantId, opts)
  .then((data) => {
    console.log(`getConversationsMessageParticipantWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessageParticipantWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **provisional** | **Boolean** | Indicates whether or not to fetch provisional wrap-up code. | [optional] [default to false] |

### Return type

**AssignedWrapupCode**


## getConversationsMessageParticipantWrapupcodes

> [WrapupCode] getConversationsMessageParticipantWrapupcodes(conversationId, participantId)


GET /api/v2/conversations/messages/{conversationId}/participants/{participantId}/wrapupcodes

Get list of wrapup codes for this conversation participant

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId

apiInstance.getConversationsMessageParticipantWrapupcodes(conversationId, participantId)
  .then((data) => {
    console.log(`getConversationsMessageParticipantWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessageParticipantWrapupcodes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |

### Return type

**[WrapupCode]**


## getConversationsMessages

> MessageConversationEntityListing getConversationsMessages()


GET /api/v2/conversations/messages

Get active message conversations for the logged in user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

apiInstance.getConversationsMessages()
  .then((data) => {
    console.log(`getConversationsMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessages');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**MessageConversationEntityListing**


## getConversationsMessagesCachedmedia

> CachedMediaItemEntityListing getConversationsMessagesCachedmedia(opts)


GET /api/v2/conversations/messages/cachedmedia

Get a list of cached media items

Requires ANY permissions:

* conversation:cachedMedia:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'url': "url_example" // String | URL to search for
};

apiInstance.getConversationsMessagesCachedmedia(opts)
  .then((data) => {
    console.log(`getConversationsMessagesCachedmedia success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagesCachedmedia');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **url** | **String** | URL to search for | [optional]  |

### Return type

**CachedMediaItemEntityListing**


## getConversationsMessagesCachedmediaCachedMediaItemId

> CachedMediaItem getConversationsMessagesCachedmediaCachedMediaItemId(cachedMediaItemId)


GET /api/v2/conversations/messages/cachedmedia/{cachedMediaItemId}

Get a cached media item

Requires ANY permissions:

* conversation:cachedMedia:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let cachedMediaItemId = "cachedMediaItemId_example"; // String | cachedMediaItemId

apiInstance.getConversationsMessagesCachedmediaCachedMediaItemId(cachedMediaItemId)
  .then((data) => {
    console.log(`getConversationsMessagesCachedmediaCachedMediaItemId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagesCachedmediaCachedMediaItemId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **cachedMediaItemId** | **String** | cachedMediaItemId |  |

### Return type

**CachedMediaItem**


## getConversationsMessagingFacebookApp

> FacebookAppCredentials getConversationsMessagingFacebookApp()


GET /api/v2/conversations/messaging/facebook/app

Get Genesys Facebook App Id

Requires ALL permissions:

* messaging:integration:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

apiInstance.getConversationsMessagingFacebookApp()
  .then((data) => {
    console.log(`getConversationsMessagingFacebookApp success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingFacebookApp');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**FacebookAppCredentials**


## getConversationsMessagingFacebookPermissions

> FacebookPermissionEntityListing getConversationsMessagingFacebookPermissions()


GET /api/v2/conversations/messaging/facebook/permissions

Get a list of Facebook Permissions

Requires ANY permissions:

* messaging:integration:add
* messaging:integration:edit
* messaging:conversationInstagramIntegration:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

apiInstance.getConversationsMessagingFacebookPermissions()
  .then((data) => {
    console.log(`getConversationsMessagingFacebookPermissions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingFacebookPermissions');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**FacebookPermissionEntityListing**


## getConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId

> IdentityResolutionConfig getConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId(integrationId)


GET /api/v2/conversations/messaging/identityresolution/integrations/apple/{integrationId}

Get Apple messaging integration identity resolution settings

getConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* messaging:integration:view
* messaging:identityResolutionApple:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.getConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId(integrationId)
  .then((data) => {
    console.log(`getConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |

### Return type

**IdentityResolutionConfig**


## getConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId

> IdentityResolutionConfig getConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId(integrationId)


GET /api/v2/conversations/messaging/identityresolution/integrations/facebook/{integrationId}

Get Facebook messaging integration identity resolution settings

Requires ALL permissions:

* messaging:integration:view
* messaging:identityResolutionFacebook:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.getConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId(integrationId)
  .then((data) => {
    console.log(`getConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |

### Return type

**IdentityResolutionConfig**


## getConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId

> IdentityResolutionConfig getConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId(integrationId)


GET /api/v2/conversations/messaging/identityresolution/integrations/instagram/{integrationId}

Get an Instagram integration identity resolution settings

Requires ALL permissions:

* messaging:integration:view
* messaging:identityResolutionInstagram:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.getConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId(integrationId)
  .then((data) => {
    console.log(`getConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |

### Return type

**IdentityResolutionConfig**


## getConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId

> OpenMessagingIdentityResolutionConfig getConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId(integrationId)


GET /api/v2/conversations/messaging/identityresolution/integrations/open/{integrationId}

Get an open messaging integration Identity Resolution settings

Requires ALL permissions:

* messaging:integration:view
* messaging:identityResolutionOpen:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.getConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId(integrationId)
  .then((data) => {
    console.log(`getConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |

### Return type

**OpenMessagingIdentityResolutionConfig**


## getConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId

> IdentityResolutionConfig getConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId(integrationId)


GET /api/v2/conversations/messaging/identityresolution/integrations/twitter/{integrationId}

Get X (Formally Twitter) messaging integration identity resolution settings

Requires ALL permissions:

* messaging:integration:view
* messaging:identityResolutionX:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration Id

apiInstance.getConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId(integrationId)
  .then((data) => {
    console.log(`getConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration Id |  |

### Return type

**IdentityResolutionConfig**


## getConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId

> IdentityResolutionConfig getConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId(integrationId)


GET /api/v2/conversations/messaging/identityresolution/integrations/whatsapp/{integrationId}

Get a whatsApp integration Identity Resolution settings

Requires ALL permissions:

* messaging:integration:view
* messaging:identityResolutionWhatsApp:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.getConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId(integrationId)
  .then((data) => {
    console.log(`getConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |

### Return type

**IdentityResolutionConfig**


## getConversationsMessagingIntegrationTwitterOauthSettings

> TwitterOAuthSettings getConversationsMessagingIntegrationTwitterOauthSettings(integrationId)


GET /api/v2/conversations/messaging/integrations/{integrationId}/twitter/oauth/settings

Get twitter oauth settings to patch an integration

Requires ALL permissions:

* messaging:XIntegration:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration Id of an existing integration that needs to be patched with new oauth settings

apiInstance.getConversationsMessagingIntegrationTwitterOauthSettings(integrationId)
  .then((data) => {
    console.log(`getConversationsMessagingIntegrationTwitterOauthSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIntegrationTwitterOauthSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration Id of an existing integration that needs to be patched with new oauth settings |  |

### Return type

**TwitterOAuthSettings**


## getConversationsMessagingIntegrations

> MessagingIntegrationEntityListing getConversationsMessagingIntegrations(opts)


GET /api/v2/conversations/messaging/integrations

Get a list of Integrations

Requires ALL permissions:

* messaging:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'expand': ["expand_example"], // [String] | Expand instructions for the return value.
  'supportedContentId': "supportedContentId_example", // String | Filter integrations returned based on the supported content ID
  'messagingSettingId': "messagingSettingId_example" // String | Filter integrations returned based on the setting ID
};

apiInstance.getConversationsMessagingIntegrations(opts)
  .then((data) => {
    console.log(`getConversationsMessagingIntegrations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIntegrations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **expand** | **[String]** | Expand instructions for the return value. | [optional] <br />**Values**: supportedContent, messagingSetting, identityresolution |
 **supportedContentId** | **String** | Filter integrations returned based on the supported content ID | [optional]  |
 **messagingSettingId** | **String** | Filter integrations returned based on the setting ID | [optional]  |

### Return type

**MessagingIntegrationEntityListing**


## getConversationsMessagingIntegrationsFacebook

> FacebookIntegrationEntityListing getConversationsMessagingIntegrationsFacebook(opts)


GET /api/v2/conversations/messaging/integrations/facebook

Get a list of Facebook Integrations

Requires ALL permissions:

* messaging:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'expand': "expand_example", // String | Expand instructions for the return value.
  'supportedContentId': "supportedContentId_example", // String | Filter integrations returned based on the supported content ID
  'messagingSettingId': "messagingSettingId_example" // String | Filter integrations returned based on the setting ID
};

apiInstance.getConversationsMessagingIntegrationsFacebook(opts)
  .then((data) => {
    console.log(`getConversationsMessagingIntegrationsFacebook success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIntegrationsFacebook');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: supportedContent, messagingSetting, identityresolution |
 **supportedContentId** | **String** | Filter integrations returned based on the supported content ID | [optional]  |
 **messagingSettingId** | **String** | Filter integrations returned based on the setting ID | [optional]  |

### Return type

**FacebookIntegrationEntityListing**


## getConversationsMessagingIntegrationsFacebookIntegrationId

> FacebookIntegration getConversationsMessagingIntegrationsFacebookIntegrationId(integrationId, opts)


GET /api/v2/conversations/messaging/integrations/facebook/{integrationId}

Get a Facebook messaging integration

Requires ALL permissions:

* messaging:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID
let opts = { 
  'expand': "expand_example" // String | Expand instructions for the return value.
};

apiInstance.getConversationsMessagingIntegrationsFacebookIntegrationId(integrationId, opts)
  .then((data) => {
    console.log(`getConversationsMessagingIntegrationsFacebookIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIntegrationsFacebookIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: supportedContent, messagingSetting, identityresolution |

### Return type

**FacebookIntegration**


## getConversationsMessagingIntegrationsInstagram

> InstagramIntegrationEntityListing getConversationsMessagingIntegrationsInstagram(opts)


GET /api/v2/conversations/messaging/integrations/instagram

Get a list of Instagram Integrations

Requires ALL permissions:

* messaging:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'expand': "expand_example", // String | Expand instructions for the return value.
  'supportedContentId': "supportedContentId_example", // String | Filter integrations returned based on the supported content ID
  'messagingSettingId': "messagingSettingId_example" // String | Filter integrations returned based on the setting ID
};

apiInstance.getConversationsMessagingIntegrationsInstagram(opts)
  .then((data) => {
    console.log(`getConversationsMessagingIntegrationsInstagram success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIntegrationsInstagram');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: supportedContent, messagingSetting, identityresolution |
 **supportedContentId** | **String** | Filter integrations returned based on the supported content ID | [optional]  |
 **messagingSettingId** | **String** | Filter integrations returned based on the setting ID | [optional]  |

### Return type

**InstagramIntegrationEntityListing**


## getConversationsMessagingIntegrationsInstagramIntegrationId

> InstagramIntegration getConversationsMessagingIntegrationsInstagramIntegrationId(integrationId, opts)


GET /api/v2/conversations/messaging/integrations/instagram/{integrationId}

Get Instagram messaging integration

Requires ALL permissions:

* messaging:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID
let opts = { 
  'expand': "expand_example" // String | Expand instructions for the return value.
};

apiInstance.getConversationsMessagingIntegrationsInstagramIntegrationId(integrationId, opts)
  .then((data) => {
    console.log(`getConversationsMessagingIntegrationsInstagramIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIntegrationsInstagramIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: supportedContent, messagingSetting, identityresolution |

### Return type

**InstagramIntegration**


## getConversationsMessagingIntegrationsOpen

> OpenIntegrationEntityListing getConversationsMessagingIntegrationsOpen(opts)


GET /api/v2/conversations/messaging/integrations/open

Get a list of Open messaging integrations

See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.

Requires ALL permissions:

* messaging:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'expand': "expand_example", // String | Expand instructions for the return value.
  'supportedContentId': "supportedContentId_example", // String | Filter integrations returned based on the supported content ID
  'messagingSettingId': "messagingSettingId_example" // String | Filter integrations returned based on the setting ID
};

apiInstance.getConversationsMessagingIntegrationsOpen(opts)
  .then((data) => {
    console.log(`getConversationsMessagingIntegrationsOpen success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIntegrationsOpen');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: supportedContent, messagingSetting, identityresolution |
 **supportedContentId** | **String** | Filter integrations returned based on the supported content ID | [optional]  |
 **messagingSettingId** | **String** | Filter integrations returned based on the setting ID | [optional]  |

### Return type

**OpenIntegrationEntityListing**


## getConversationsMessagingIntegrationsOpenIntegrationId

> OpenIntegration getConversationsMessagingIntegrationsOpenIntegrationId(integrationId, opts)


GET /api/v2/conversations/messaging/integrations/open/{integrationId}

Get an Open messaging integration

See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.

Requires ALL permissions:

* messaging:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID
let opts = { 
  'expand': "expand_example" // String | Expand instructions for the return value.
};

apiInstance.getConversationsMessagingIntegrationsOpenIntegrationId(integrationId, opts)
  .then((data) => {
    console.log(`getConversationsMessagingIntegrationsOpenIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIntegrationsOpenIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: supportedContent, messagingSetting, identityresolution |

### Return type

**OpenIntegration**


## getConversationsMessagingIntegrationsTwitter

> TwitterIntegrationEntityListing getConversationsMessagingIntegrationsTwitter(opts)


GET /api/v2/conversations/messaging/integrations/twitter

Get a list of Twitter Integrations

Requires ALL permissions:

* messaging:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'expand': "expand_example", // String | Expand instructions for the return value.
  'supportedContentId': "supportedContentId_example", // String | Filter integrations returned based on the supported content ID
  'messagingSettingId': "messagingSettingId_example" // String | Filter integrations returned based on the setting ID
};

apiInstance.getConversationsMessagingIntegrationsTwitter(opts)
  .then((data) => {
    console.log(`getConversationsMessagingIntegrationsTwitter success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIntegrationsTwitter');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: supportedContent, messagingSetting, identityresolution |
 **supportedContentId** | **String** | Filter integrations returned based on the supported content ID | [optional]  |
 **messagingSettingId** | **String** | Filter integrations returned based on the setting ID | [optional]  |

### Return type

**TwitterIntegrationEntityListing**


## getConversationsMessagingIntegrationsTwitterIntegrationId

> TwitterIntegration getConversationsMessagingIntegrationsTwitterIntegrationId(integrationId, opts)


GET /api/v2/conversations/messaging/integrations/twitter/{integrationId}

Get Twitter messaging integration

Requires ALL permissions:

* messaging:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID
let opts = { 
  'expand': "expand_example" // String | Expand instructions for the return value.
};

apiInstance.getConversationsMessagingIntegrationsTwitterIntegrationId(integrationId, opts)
  .then((data) => {
    console.log(`getConversationsMessagingIntegrationsTwitterIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIntegrationsTwitterIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: supportedContent, messagingSetting, identityresolution |

### Return type

**TwitterIntegration**


## getConversationsMessagingIntegrationsTwitterOauthSettings

> TwitterSignupOAuthSettings getConversationsMessagingIntegrationsTwitterOauthSettings()


GET /api/v2/conversations/messaging/integrations/twitter/oauth/settings

Get twitter oauth settings

Requires ALL permissions:

* messaging:XIntegration:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

apiInstance.getConversationsMessagingIntegrationsTwitterOauthSettings()
  .then((data) => {
    console.log(`getConversationsMessagingIntegrationsTwitterOauthSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIntegrationsTwitterOauthSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**TwitterSignupOAuthSettings**


## getConversationsMessagingIntegrationsWhatsapp

> WhatsAppIntegrationEntityListing getConversationsMessagingIntegrationsWhatsapp(opts)


GET /api/v2/conversations/messaging/integrations/whatsapp

Get a list of WhatsApp Integrations

Requires ALL permissions:

* messaging:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'expand': "expand_example", // String | Expand instructions for the return value.
  'supportedContentId': "supportedContentId_example", // String | Filter integrations returned based on the supported content ID
  'messagingSettingId': "messagingSettingId_example" // String | Filter integrations returned based on the setting ID
};

apiInstance.getConversationsMessagingIntegrationsWhatsapp(opts)
  .then((data) => {
    console.log(`getConversationsMessagingIntegrationsWhatsapp success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIntegrationsWhatsapp');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: supportedContent, messagingSetting, identityresolution |
 **supportedContentId** | **String** | Filter integrations returned based on the supported content ID | [optional]  |
 **messagingSettingId** | **String** | Filter integrations returned based on the setting ID | [optional]  |

### Return type

**WhatsAppIntegrationEntityListing**


## getConversationsMessagingIntegrationsWhatsappIntegrationId

> WhatsAppIntegration getConversationsMessagingIntegrationsWhatsappIntegrationId(integrationId, opts)


GET /api/v2/conversations/messaging/integrations/whatsapp/{integrationId}

Get a WhatsApp messaging integration

Requires ALL permissions:

* messaging:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID
let opts = { 
  'expand': "expand_example" // String | Expand instructions for the return value.
};

apiInstance.getConversationsMessagingIntegrationsWhatsappIntegrationId(integrationId, opts)
  .then((data) => {
    console.log(`getConversationsMessagingIntegrationsWhatsappIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIntegrationsWhatsappIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: supportedContent, messagingSetting, identityresolution |

### Return type

**WhatsAppIntegration**


## getConversationsMessagingSetting

> MessagingSetting getConversationsMessagingSetting(messageSettingId)


GET /api/v2/conversations/messaging/settings/{messageSettingId}

Get a messaging setting

Requires ALL permissions:

* messaging:setting:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let messageSettingId = "messageSettingId_example"; // String | Message Setting ID

apiInstance.getConversationsMessagingSetting(messageSettingId)
  .then((data) => {
    console.log(`getConversationsMessagingSetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingSetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageSettingId** | **String** | Message Setting ID |  |

### Return type

**MessagingSetting**


## getConversationsMessagingSettings

> MessagingConfigListing getConversationsMessagingSettings(opts)


GET /api/v2/conversations/messaging/settings

Get a list of messaging settings

Requires ALL permissions:

* messaging:setting:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getConversationsMessagingSettings(opts)
  .then((data) => {
    console.log(`getConversationsMessagingSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |

### Return type

**MessagingConfigListing**


## getConversationsMessagingSettingsDefault

> MessagingSetting getConversationsMessagingSettingsDefault()


GET /api/v2/conversations/messaging/settings/default

Get the organization's default settings that will be used as the default when creating an integration.

When an integration is created a settings ID may be assigned to it. If the settings ID is not supplied, the default settings will be assigned to it.

Requires ALL permissions:

* messaging:setting:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

apiInstance.getConversationsMessagingSettingsDefault()
  .then((data) => {
    console.log(`getConversationsMessagingSettingsDefault success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingSettingsDefault');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**MessagingSetting**


## getConversationsMessagingSupportedcontent

> SupportedContentListing getConversationsMessagingSupportedcontent(opts)


GET /api/v2/conversations/messaging/supportedcontent

Get a list of Supported Content profiles

Requires ALL permissions:

* messaging:supportedContent:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getConversationsMessagingSupportedcontent(opts)
  .then((data) => {
    console.log(`getConversationsMessagingSupportedcontent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingSupportedcontent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |

### Return type

**SupportedContentListing**


## getConversationsMessagingSupportedcontentDefault

> SupportedContent getConversationsMessagingSupportedcontentDefault()


GET /api/v2/conversations/messaging/supportedcontent/default

Get the organization's default supported content profile that will be used as the default when creating an integration.

When an integration is created a supported content ID may be assigned to it. If the supported content ID is not supplied, the default supported content profile will be assigned to it.

Requires ALL permissions:

* messaging:supportedContent:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

apiInstance.getConversationsMessagingSupportedcontentDefault()
  .then((data) => {
    console.log(`getConversationsMessagingSupportedcontentDefault success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingSupportedcontentDefault');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**SupportedContent**


## getConversationsMessagingSupportedcontentSupportedContentId

> SupportedContent getConversationsMessagingSupportedcontentSupportedContentId(supportedContentId)


GET /api/v2/conversations/messaging/supportedcontent/{supportedContentId}

Get a supported content profile

Requires ALL permissions:

* messaging:supportedContent:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let supportedContentId = "supportedContentId_example"; // String | Supported Content ID

apiInstance.getConversationsMessagingSupportedcontentSupportedContentId(supportedContentId)
  .then((data) => {
    console.log(`getConversationsMessagingSupportedcontentSupportedContentId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingSupportedcontentSupportedContentId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **supportedContentId** | **String** | Supported Content ID |  |

### Return type

**SupportedContent**


## getConversationsMessagingThreadingtimeline

> ConversationThreadingWindow getConversationsMessagingThreadingtimeline()


GET /api/v2/conversations/messaging/threadingtimeline

Get conversation threading window timeline for each messaging type

Conversation messaging threading timeline is a setting defined for each messenger type in your organization. This setting will dictate whether a new message is added to the most recent existing conversation, or creates a new Conversation. If the existing Conversation is still in a connected state the threading timeline setting will never play a role. After the conversation is disconnected, if an inbound message is received or an outbound message is sent after the setting for threading timeline expires, a new conversation is created.

Requires ALL permissions:

* conversation:threadingTimeline:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

apiInstance.getConversationsMessagingThreadingtimeline()
  .then((data) => {
    console.log(`getConversationsMessagingThreadingtimeline success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingThreadingtimeline');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**ConversationThreadingWindow**


## getConversationsScreenshareParticipantCommunicationWrapup

> AssignedWrapupCode getConversationsScreenshareParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/conversations/screenshares/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup

Get the wrap-up for this conversation communication. 

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let opts = { 
  'provisional': false // Boolean | Indicates whether or not to fetch provisional wrap-up code.
};

apiInstance.getConversationsScreenshareParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)
  .then((data) => {
    console.log(`getConversationsScreenshareParticipantCommunicationWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsScreenshareParticipantCommunicationWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **provisional** | **Boolean** | Indicates whether or not to fetch provisional wrap-up code. | [optional] [default to false] |

### Return type

**AssignedWrapupCode**


## getConversationsSettings

> Settings getConversationsSettings()


GET /api/v2/conversations/settings

Get Settings

Requires ANY permissions:

* conversation:settings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

apiInstance.getConversationsSettings()
  .then((data) => {
    console.log(`getConversationsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Settings**


## getConversationsSocialParticipantCommunicationWrapup

> AssignedWrapupCode getConversationsSocialParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)


GET /api/v2/conversations/socials/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup

Get the wrap-up for this conversation communication. 

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let opts = { 
  'provisional': false // Boolean | Indicates whether or not to fetch provisional wrap-up code.
};

apiInstance.getConversationsSocialParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)
  .then((data) => {
    console.log(`getConversationsSocialParticipantCommunicationWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsSocialParticipantCommunicationWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **provisional** | **Boolean** | Indicates whether or not to fetch provisional wrap-up code. | [optional] [default to false] |

### Return type

**AssignedWrapupCode**


## getConversationsVideoDetails

> VideoConferenceDetails getConversationsVideoDetails(conferenceId)


GET /api/v2/conversations/videos/{conferenceId}/details

Get video conference details (e.g. the current number of active participants).

getConversationsVideoDetails is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* video:video:access

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conferenceId = "conferenceId_example"; // String | conferenceId

apiInstance.getConversationsVideoDetails(conferenceId)
  .then((data) => {
    console.log(`getConversationsVideoDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsVideoDetails');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conferenceId** | **String** | conferenceId |  |

### Return type

**VideoConferenceDetails**


## getConversationsVideoParticipantCommunicationWrapup

> AssignedWrapupCode getConversationsVideoParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)


GET /api/v2/conversations/videos/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup

Get the wrap-up for this conversation communication. 

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let opts = { 
  'provisional': false // Boolean | Indicates whether or not to fetch provisional wrap-up code.
};

apiInstance.getConversationsVideoParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)
  .then((data) => {
    console.log(`getConversationsVideoParticipantCommunicationWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsVideoParticipantCommunicationWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **provisional** | **Boolean** | Indicates whether or not to fetch provisional wrap-up code. | [optional] [default to false] |

### Return type

**AssignedWrapupCode**


## getConversationsVideosMeeting

> MeetingIdRecord getConversationsVideosMeeting(meetingId)


GET /api/v2/conversations/videos/meetings/{meetingId}

Gets a record for a given meetingId

getConversationsVideosMeeting is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* video:video:access

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let meetingId = "meetingId_example"; // String | meetingId

apiInstance.getConversationsVideosMeeting(meetingId)
  .then((data) => {
    console.log(`getConversationsVideosMeeting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsVideosMeeting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **meetingId** | **String** | meetingId |  |

### Return type

**MeetingIdRecord**


## patchConversationParticipant

> void patchConversationParticipant(conversationId, participantId, body)


PATCH /api/v2/conversations/{conversationId}/participants/{participantId}

Update a participant.

Update conversation participant.

Requires ANY permissions:

* conversation:participant:wrapup
* conversation:call:record
* conversation:communication:disconnect

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let participantId = "participantId_example"; // String | participant ID
let body = {}; // Object | Update request

apiInstance.patchConversationParticipant(conversationId, participantId, body)
  .then(() => {
    console.log('patchConversationParticipant returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationParticipant');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **Object** | Update request |  |

### Return type

void (no response body)


## patchConversationParticipantAttributes

> void patchConversationParticipantAttributes(conversationId, participantId, body)


PATCH /api/v2/conversations/{conversationId}/participants/{participantId}/attributes

Update the attributes on a conversation participant.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let participantId = "participantId_example"; // String | participant ID
let body = {}; // Object | Participant attributes

apiInstance.patchConversationParticipantAttributes(conversationId, participantId, body)
  .then(() => {
    console.log('patchConversationParticipantAttributes returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationParticipantAttributes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **Object** | Participant attributes |  |

### Return type

void (no response body)


## patchConversationSecureattributes

> **&#39;String&#39;** patchConversationSecureattributes(conversationId, body)


PATCH /api/v2/conversations/{conversationId}/secureattributes

Update the secure attributes on a conversation.

Requires ANY permissions:

* conversation:participant:attributesedit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let body = {}; // Object | Conversation Secure Attributes

apiInstance.patchConversationSecureattributes(conversationId, body)
  .then((data) => {
    console.log(`patchConversationSecureattributes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationSecureattributes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **body** | **Object** | Conversation Secure Attributes |  |

### Return type

**&#39;String&#39;**


## patchConversationSummaryEngagements

> void patchConversationSummaryEngagements(conversationId, summaryId, opts)


PATCH /api/v2/conversations/{conversationId}/summaries/{summaryId}/engagements

Update agent's engagement for the summary.

Requires ALL permissions:

* conversation:summaryEngagement:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let summaryId = "summaryId_example"; // String | Summary ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchConversationSummaryEngagements(conversationId, summaryId, opts)
  .then(() => {
    console.log('patchConversationSummaryEngagements returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationSummaryEngagements');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **summaryId** | **String** | Summary ID |  |
 **body** | **Object** |  | [optional]  |

### Return type

void (no response body)


## patchConversationSummaryFeedback

> void patchConversationSummaryFeedback(conversationId, summaryId, opts)


PATCH /api/v2/conversations/{conversationId}/summaries/{summaryId}/feedback

Update the feedback for the summary.

Requires ALL permissions:

* conversation:summaryFeedback:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let summaryId = "summaryId_example"; // String | Summary ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchConversationSummaryFeedback(conversationId, summaryId, opts)
  .then(() => {
    console.log('patchConversationSummaryFeedback returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationSummaryFeedback');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **summaryId** | **String** | Summary ID |  |
 **body** | **Object** |  | [optional]  |

### Return type

void (no response body)


## patchConversationUtilizationlabel

> **&#39;String&#39;** patchConversationUtilizationlabel(conversationId, body)


PATCH /api/v2/conversations/{conversationId}/utilizationlabel

Update the utilization label on a conversation. When there is no value provided, the system default label is applied

Requires ANY permissions:

* conversation:utilizationLabel:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let body = {}; // Object | Conversation Utilization Label

apiInstance.patchConversationUtilizationlabel(conversationId, body)
  .then((data) => {
    console.log(`patchConversationUtilizationlabel success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationUtilizationlabel');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **body** | **Object** | Conversation Utilization Label |  |

### Return type

**&#39;String&#39;**


## patchConversationsAftercallworkConversationIdParticipantCommunication

> AfterCallWorkUpdate patchConversationsAftercallworkConversationIdParticipantCommunication(conversationId, participantId, communicationId, body)


PATCH /api/v2/conversations/aftercallwork/{conversationId}/participants/{participantId}/communications/{communicationId}

Update after-call work for this conversation communication.

Requires ANY permissions:

* conversation:participant:wrapup

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let body = {}; // Object | AfterCallWorkUpdate

apiInstance.patchConversationsAftercallworkConversationIdParticipantCommunication(conversationId, participantId, communicationId, body)
  .then((data) => {
    console.log(`patchConversationsAftercallworkConversationIdParticipantCommunication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsAftercallworkConversationIdParticipantCommunication');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | AfterCallWorkUpdate |  |

### Return type

**AfterCallWorkUpdate**


## patchConversationsCall

> Conversation patchConversationsCall(conversationId, body)


PATCH /api/v2/conversations/calls/{conversationId}

Update a conversation by setting its recording state, merging in other conversations to create a conference, or disconnecting all of the participants

Requires ANY permissions:

* conversation:communication:disconnect

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | Conversation

apiInstance.patchConversationsCall(conversationId, body)
  .then((data) => {
    console.log(`patchConversationsCall success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsCall');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Conversation |  |

### Return type

**Conversation**


## patchConversationsCallParticipant

> void patchConversationsCallParticipant(conversationId, participantId, body)


PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}

Update conversation participant

Requires ANY permissions:

* conversation:participant:wrapup
* conversation:call:record
* conversation:communication:disconnect

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let body = {}; // Object | Participant request

apiInstance.patchConversationsCallParticipant(conversationId, participantId, body)
  .then(() => {
    console.log('patchConversationsCallParticipant returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsCallParticipant');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Participant request |  |

### Return type

void (no response body)


## patchConversationsCallParticipantAttributes

> ParticipantAttributes patchConversationsCallParticipantAttributes(conversationId, participantId, body)


PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}/attributes

Update the attributes on a conversation participant.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let body = {}; // Object | Participant attributes

apiInstance.patchConversationsCallParticipantAttributes(conversationId, participantId, body)
  .then((data) => {
    console.log(`patchConversationsCallParticipantAttributes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsCallParticipantAttributes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Participant attributes |  |

### Return type

**ParticipantAttributes**


## patchConversationsCallParticipantCommunication

> **Object** patchConversationsCallParticipantCommunication(conversationId, participantId, communicationId, body)


PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}

Update conversation participant's communication by disconnecting it. This endpoint does not update wrapup.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let body = {}; // Object | Participant

apiInstance.patchConversationsCallParticipantCommunication(conversationId, participantId, communicationId, body)
  .then((data) => {
    console.log(`patchConversationsCallParticipantCommunication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsCallParticipantCommunication');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Participant |  |

### Return type

**Object**


## patchConversationsCallParticipantConsult

> ConsultTransferResponse patchConversationsCallParticipantConsult(conversationId, participantId, body)


PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult

Change who can speak

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let body = {}; // Object | new speak to

apiInstance.patchConversationsCallParticipantConsult(conversationId, participantId, body)
  .then((data) => {
    console.log(`patchConversationsCallParticipantConsult success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsCallParticipantConsult');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | new speak to |  |

### Return type

**ConsultTransferResponse**


## patchConversationsCallback

> Conversation patchConversationsCallback(conversationId, body)


PATCH /api/v2/conversations/callbacks/{conversationId}

Update a conversation by disconnecting all of the participants

Requires ANY permissions:

* conversation:communication:disconnect

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | Conversation

apiInstance.patchConversationsCallback(conversationId, body)
  .then((data) => {
    console.log(`patchConversationsCallback success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsCallback');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Conversation |  |

### Return type

**Conversation**


## patchConversationsCallbackParticipant

> void patchConversationsCallbackParticipant(conversationId, participantId, body)


PATCH /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}

Update conversation participant

Requires ANY permissions:

* conversation:participant:wrapup
* conversation:call:record
* conversation:communication:disconnect

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let body = {}; // Object | Participant

apiInstance.patchConversationsCallbackParticipant(conversationId, participantId, body)
  .then(() => {
    console.log('patchConversationsCallbackParticipant returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsCallbackParticipant');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Participant |  |

### Return type

void (no response body)


## patchConversationsCallbackParticipantAttributes

> ParticipantAttributes patchConversationsCallbackParticipantAttributes(conversationId, participantId, body)


PATCH /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/attributes

Update the attributes on a conversation participant.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let body = {}; // Object | Attributes

apiInstance.patchConversationsCallbackParticipantAttributes(conversationId, participantId, body)
  .then((data) => {
    console.log(`patchConversationsCallbackParticipantAttributes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsCallbackParticipantAttributes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Attributes |  |

### Return type

**ParticipantAttributes**


## patchConversationsCallbackParticipantCommunication

> **Object** patchConversationsCallbackParticipantCommunication(conversationId, participantId, communicationId, body)


PATCH /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/communications/{communicationId}

Update conversation participant's communication by disconnecting it.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let body = {}; // Object | Participant

apiInstance.patchConversationsCallbackParticipantCommunication(conversationId, participantId, communicationId, body)
  .then((data) => {
    console.log(`patchConversationsCallbackParticipantCommunication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsCallbackParticipantCommunication');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Participant |  |

### Return type

**Object**


## patchConversationsCallbacks

> PatchCallbackResponse patchConversationsCallbacks(body)


PATCH /api/v2/conversations/callbacks

Update a scheduled callback

Requires ANY permissions:

* conversation:callback:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | PatchCallbackRequest

apiInstance.patchConversationsCallbacks(body)
  .then((data) => {
    console.log(`patchConversationsCallbacks success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsCallbacks');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | PatchCallbackRequest |  |

### Return type

**PatchCallbackResponse**


## patchConversationsChat

> Conversation patchConversationsChat(conversationId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PATCH /api/v2/conversations/chats/{conversationId}

Update a conversation by disconnecting all of the participants

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.

Requires ANY permissions:

* conversation:communication:disconnect

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | Conversation

apiInstance.patchConversationsChat(conversationId, body)
  .then((data) => {
    console.log(`patchConversationsChat success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsChat');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Conversation |  |

### Return type

**Conversation**


## patchConversationsChatParticipant

> void patchConversationsChatParticipant(conversationId, participantId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}

Update conversation participant

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.

Requires ANY permissions:

* conversation:participant:wrapup
* conversation:call:record
* conversation:communication:disconnect

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let body = {}; // Object | Update request

apiInstance.patchConversationsChatParticipant(conversationId, participantId, body)
  .then(() => {
    console.log('patchConversationsChatParticipant returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsChatParticipant');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Update request |  |

### Return type

void (no response body)


## patchConversationsChatParticipantAttributes

> ParticipantAttributes patchConversationsChatParticipantAttributes(conversationId, participantId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}/attributes

Update the attributes on a conversation participant.

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let body = {}; // Object | Participant attributes

apiInstance.patchConversationsChatParticipantAttributes(conversationId, participantId, body)
  .then((data) => {
    console.log(`patchConversationsChatParticipantAttributes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsChatParticipantAttributes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Participant attributes |  |

### Return type

**ParticipantAttributes**


## patchConversationsChatParticipantCommunication

> **Object** patchConversationsChatParticipantCommunication(conversationId, participantId, communicationId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}

Update conversation participant's communication by disconnecting it. This endpoint does not update wrapup.

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let body = {}; // Object | Participant

apiInstance.patchConversationsChatParticipantCommunication(conversationId, participantId, communicationId, body)
  .then((data) => {
    console.log(`patchConversationsChatParticipantCommunication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsChatParticipantCommunication');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Participant |  |

### Return type

**Object**


## patchConversationsCobrowsesession

> Conversation patchConversationsCobrowsesession(conversationId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PATCH /api/v2/conversations/cobrowsesessions/{conversationId}

Update a conversation by disconnecting all of the participants

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/

Requires ANY permissions:

* conversation:communication:disconnect

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | Conversation

apiInstance.patchConversationsCobrowsesession(conversationId, body)
  .then((data) => {
    console.log(`patchConversationsCobrowsesession success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsCobrowsesession');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Conversation |  |

### Return type

**Conversation**


## patchConversationsCobrowsesessionParticipant

> void patchConversationsCobrowsesessionParticipant(conversationId, participantId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}

Update conversation participant

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/

Requires ANY permissions:

* conversation:participant:wrapup
* conversation:call:record
* conversation:communication:disconnect

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchConversationsCobrowsesessionParticipant(conversationId, participantId, opts)
  .then(() => {
    console.log('patchConversationsCobrowsesessionParticipant returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsCobrowsesessionParticipant');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** |  | [optional]  |

### Return type

void (no response body)


## patchConversationsCobrowsesessionParticipantAttributes

> ParticipantAttributes patchConversationsCobrowsesessionParticipantAttributes(conversationId, participantId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/attributes

Update the attributes on a conversation participant.

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchConversationsCobrowsesessionParticipantAttributes(conversationId, participantId, opts)
  .then((data) => {
    console.log(`patchConversationsCobrowsesessionParticipantAttributes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsCobrowsesessionParticipantAttributes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** |  | [optional]  |

### Return type

**ParticipantAttributes**


## patchConversationsCobrowsesessionParticipantCommunication

> **Object** patchConversationsCobrowsesessionParticipantCommunication(conversationId, participantId, communicationId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}

Update conversation participant's communication by disconnecting it.

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let body = {}; // Object | Participant

apiInstance.patchConversationsCobrowsesessionParticipantCommunication(conversationId, participantId, communicationId, body)
  .then((data) => {
    console.log(`patchConversationsCobrowsesessionParticipantCommunication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsCobrowsesessionParticipantCommunication');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Participant |  |

### Return type

**Object**


## patchConversationsEmail

> Conversation patchConversationsEmail(conversationId, body)


PATCH /api/v2/conversations/emails/{conversationId}

Update a conversation by disconnecting all of the participants

Requires ANY permissions:

* conversation:communication:disconnect

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | Conversation

apiInstance.patchConversationsEmail(conversationId, body)
  .then((data) => {
    console.log(`patchConversationsEmail success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsEmail');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Conversation |  |

### Return type

**Conversation**


## patchConversationsEmailMessagesDraft

> EmailMessage patchConversationsEmailMessagesDraft(conversationId, opts)


PATCH /api/v2/conversations/emails/{conversationId}/messages/draft

Reset conversation draft to its initial state and/or auto-fill draft content

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let opts = { 
  'autoFill': true, // Boolean | autoFill
  'discard': true, // Boolean | discard
  'body': {} // Object | Draft Manipulation Request
};

apiInstance.patchConversationsEmailMessagesDraft(conversationId, opts)
  .then((data) => {
    console.log(`patchConversationsEmailMessagesDraft success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsEmailMessagesDraft');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **autoFill** | **Boolean** | autoFill | [optional]  |
 **discard** | **Boolean** | discard | [optional]  |
 **body** | **Object** | Draft Manipulation Request | [optional]  |

### Return type

**EmailMessage**


## patchConversationsEmailParticipant

> void patchConversationsEmailParticipant(conversationId, participantId, body)


PATCH /api/v2/conversations/emails/{conversationId}/participants/{participantId}

Update conversation participant

Requires ANY permissions:

* conversation:participant:wrapup
* conversation:call:record
* conversation:communication:disconnect
* conversation:email:park

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let body = {}; // Object | Update request

apiInstance.patchConversationsEmailParticipant(conversationId, participantId, body)
  .then(() => {
    console.log('patchConversationsEmailParticipant returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsEmailParticipant');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Update request |  |

### Return type

void (no response body)


## patchConversationsEmailParticipantAttributes

> ParticipantAttributes patchConversationsEmailParticipantAttributes(conversationId, participantId, body)


PATCH /api/v2/conversations/emails/{conversationId}/participants/{participantId}/attributes

Update the attributes on a conversation participant.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let body = {}; // Object | Participant attributes

apiInstance.patchConversationsEmailParticipantAttributes(conversationId, participantId, body)
  .then((data) => {
    console.log(`patchConversationsEmailParticipantAttributes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsEmailParticipantAttributes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Participant attributes |  |

### Return type

**ParticipantAttributes**


## patchConversationsEmailParticipantCommunication

> **Object** patchConversationsEmailParticipantCommunication(conversationId, participantId, communicationId, body)


PATCH /api/v2/conversations/emails/{conversationId}/participants/{participantId}/communications/{communicationId}

Update conversation participant's communication by disconnecting it. This endpoint does not update wrapup.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let body = {}; // Object | Participant

apiInstance.patchConversationsEmailParticipantCommunication(conversationId, participantId, communicationId, body)
  .then((data) => {
    console.log(`patchConversationsEmailParticipantCommunication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsEmailParticipantCommunication');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Participant |  |

### Return type

**Object**


## patchConversationsEmailParticipantParkingstate

> void patchConversationsEmailParticipantParkingstate(conversationId, participantId, body)


PATCH /api/v2/conversations/emails/{conversationId}/participants/{participantId}/parkingstate

Update conversation by setting its parking state

Requires ANY permissions:

* conversation:email:park

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let body = {}; // Object | Parking update request

apiInstance.patchConversationsEmailParticipantParkingstate(conversationId, participantId, body)
  .then(() => {
    console.log('patchConversationsEmailParticipantParkingstate returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsEmailParticipantParkingstate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Parking update request |  |

### Return type

void (no response body)


## patchConversationsMessage

> Conversation patchConversationsMessage(conversationId, body)


PATCH /api/v2/conversations/messages/{conversationId}

Update a conversation by disconnecting all of the participants

Requires ANY permissions:

* conversation:communication:disconnect

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | Conversation

apiInstance.patchConversationsMessage(conversationId, body)
  .then((data) => {
    console.log(`patchConversationsMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsMessage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Conversation |  |

### Return type

**Conversation**


## patchConversationsMessageParticipant

> void patchConversationsMessageParticipant(conversationId, participantId, opts)


PATCH /api/v2/conversations/messages/{conversationId}/participants/{participantId}

Update conversation participant

Requires ANY permissions:

* conversation:participant:wrapup
* conversation:call:record
* conversation:communication:disconnect

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchConversationsMessageParticipant(conversationId, participantId, opts)
  .then(() => {
    console.log('patchConversationsMessageParticipant returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsMessageParticipant');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** |  | [optional]  |

### Return type

void (no response body)


## patchConversationsMessageParticipantAttributes

> ParticipantAttributes patchConversationsMessageParticipantAttributes(conversationId, participantId, opts)


PATCH /api/v2/conversations/messages/{conversationId}/participants/{participantId}/attributes

Update the attributes on a conversation participant.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchConversationsMessageParticipantAttributes(conversationId, participantId, opts)
  .then((data) => {
    console.log(`patchConversationsMessageParticipantAttributes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsMessageParticipantAttributes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** |  | [optional]  |

### Return type

**ParticipantAttributes**


## patchConversationsMessageParticipantCommunication

> **Object** patchConversationsMessageParticipantCommunication(conversationId, participantId, communicationId, body)


PATCH /api/v2/conversations/messages/{conversationId}/participants/{participantId}/communications/{communicationId}

Update conversation participant's communication by disconnecting it. This endpoint does not update wrapup.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let body = {}; // Object | Participant

apiInstance.patchConversationsMessageParticipantCommunication(conversationId, participantId, communicationId, body)
  .then((data) => {
    console.log(`patchConversationsMessageParticipantCommunication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsMessageParticipantCommunication');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Participant |  |

### Return type

**Object**


## patchConversationsMessagingIntegrationsFacebookIntegrationId

> FacebookIntegration patchConversationsMessagingIntegrationsFacebookIntegrationId(integrationId, body)


PATCH /api/v2/conversations/messaging/integrations/facebook/{integrationId}

Update Facebook messaging integration

Requires ALL permissions:

* messaging:integration:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID
let body = {}; // Object | FacebookIntegrationUpdateRequest

apiInstance.patchConversationsMessagingIntegrationsFacebookIntegrationId(integrationId, body)
  .then((data) => {
    console.log(`patchConversationsMessagingIntegrationsFacebookIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsMessagingIntegrationsFacebookIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **body** | **Object** | FacebookIntegrationUpdateRequest |  |

### Return type

**FacebookIntegration**


## patchConversationsMessagingIntegrationsInstagramIntegrationId

> InstagramIntegration patchConversationsMessagingIntegrationsInstagramIntegrationId(integrationId, body)


PATCH /api/v2/conversations/messaging/integrations/instagram/{integrationId}

Update Instagram messaging integration

Requires ALL permissions:

* messaging:integration:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID
let body = {}; // Object | InstagramIntegrationUpdateRequest

apiInstance.patchConversationsMessagingIntegrationsInstagramIntegrationId(integrationId, body)
  .then((data) => {
    console.log(`patchConversationsMessagingIntegrationsInstagramIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsMessagingIntegrationsInstagramIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **body** | **Object** | InstagramIntegrationUpdateRequest |  |

### Return type

**InstagramIntegration**


## patchConversationsMessagingIntegrationsOpenIntegrationId

> OpenIntegration patchConversationsMessagingIntegrationsOpenIntegrationId(integrationId, body)


PATCH /api/v2/conversations/messaging/integrations/open/{integrationId}

Update an Open messaging integration

See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.

Requires ALL permissions:

* messaging:integration:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID
let body = {}; // Object | OpenIntegrationUpdateRequest

apiInstance.patchConversationsMessagingIntegrationsOpenIntegrationId(integrationId, body)
  .then((data) => {
    console.log(`patchConversationsMessagingIntegrationsOpenIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsMessagingIntegrationsOpenIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **body** | **Object** | OpenIntegrationUpdateRequest |  |

### Return type

**OpenIntegration**


## patchConversationsMessagingIntegrationsTwitterIntegrationId

> TwitterIntegration patchConversationsMessagingIntegrationsTwitterIntegrationId(integrationId, body)


PATCH /api/v2/conversations/messaging/integrations/twitter/{integrationId}

Update a Twitter messaging integration

Requires ALL permissions:

* messaging:XIntegration:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID
let body = {}; // Object | TwitterIntegrationUpdateRequest

apiInstance.patchConversationsMessagingIntegrationsTwitterIntegrationId(integrationId, body)
  .then((data) => {
    console.log(`patchConversationsMessagingIntegrationsTwitterIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsMessagingIntegrationsTwitterIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **body** | **Object** | TwitterIntegrationUpdateRequest |  |

### Return type

**TwitterIntegration**


## patchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId

> WhatsAppIntegration patchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId(integrationId, body)


PATCH /api/v2/conversations/messaging/integrations/whatsapp/embeddedsignup/{integrationId}

Activate a WhatsApp messaging integration created using the WhatsApp embedded signup flow

Please specify the phone number to associate with this WhatsApp integration from the list of available phone numbers returned to you in the GET call on the integration with a createStatus of Completed. You can then run a GET on the integration to check if its status has been updated to Active.

Requires ALL permissions:

* messaging:integration:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID
let body = {}; // Object | WhatsAppEmbeddedSignupIntegrationActivationRequest

apiInstance.patchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId(integrationId, body)
  .then((data) => {
    console.log(`patchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **body** | **Object** | WhatsAppEmbeddedSignupIntegrationActivationRequest |  |

### Return type

**WhatsAppIntegration**


## patchConversationsMessagingIntegrationsWhatsappIntegrationId

> WhatsAppIntegration patchConversationsMessagingIntegrationsWhatsappIntegrationId(integrationId, body)


PATCH /api/v2/conversations/messaging/integrations/whatsapp/{integrationId}

Update a WhatsApp messaging integration

Requires ALL permissions:

* messaging:integration:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID
let body = {}; // Object | WhatsAppIntegrationUpdateRequest

apiInstance.patchConversationsMessagingIntegrationsWhatsappIntegrationId(integrationId, body)
  .then((data) => {
    console.log(`patchConversationsMessagingIntegrationsWhatsappIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsMessagingIntegrationsWhatsappIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **body** | **Object** | WhatsAppIntegrationUpdateRequest |  |

### Return type

**WhatsAppIntegration**


## patchConversationsMessagingSetting

> MessagingSetting patchConversationsMessagingSetting(messageSettingId, body)


PATCH /api/v2/conversations/messaging/settings/{messageSettingId}

Update a messaging setting

Requires ALL permissions:

* messaging:setting:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let messageSettingId = "messageSettingId_example"; // String | Message Setting ID
let body = {}; // Object | MessagingSetting

apiInstance.patchConversationsMessagingSetting(messageSettingId, body)
  .then((data) => {
    console.log(`patchConversationsMessagingSetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsMessagingSetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageSettingId** | **String** | Message Setting ID |  |
 **body** | **Object** | MessagingSetting |  |

### Return type

**MessagingSetting**


## patchConversationsMessagingSupportedcontentSupportedContentId

> SupportedContent patchConversationsMessagingSupportedcontentSupportedContentId(supportedContentId, body)


PATCH /api/v2/conversations/messaging/supportedcontent/{supportedContentId}

Update a supported content profile

Requires ALL permissions:

* messaging:supportedContent:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let supportedContentId = "supportedContentId_example"; // String | Supported Content ID
let body = {}; // Object | SupportedContent

apiInstance.patchConversationsMessagingSupportedcontentSupportedContentId(supportedContentId, body)
  .then((data) => {
    console.log(`patchConversationsMessagingSupportedcontentSupportedContentId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsMessagingSupportedcontentSupportedContentId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **supportedContentId** | **String** | Supported Content ID |  |
 **body** | **Object** | SupportedContent |  |

### Return type

**SupportedContent**


## patchConversationsSettings

> void patchConversationsSettings(body)


PATCH /api/v2/conversations/settings

Update Settings

Requires ANY permissions:

* conversation:settings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | Settings

apiInstance.patchConversationsSettings(body)
  .then(() => {
    console.log('patchConversationsSettings returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchConversationsSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Settings |  |

### Return type

void (no response body)


## postAnalyticsConversationDetailsProperties

> PropertyIndexRequest postAnalyticsConversationDetailsProperties(conversationId, body)


POST /api/v2/analytics/conversations/{conversationId}/details/properties

Index conversation properties

Requires ANY permissions:

* analytics:conversationProperties:index

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | request

apiInstance.postAnalyticsConversationDetailsProperties(conversationId, body)
  .then((data) => {
    console.log(`postAnalyticsConversationDetailsProperties success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsConversationDetailsProperties');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | request |  |

### Return type

**PropertyIndexRequest**


## postAnalyticsConversationsActivityQuery

> ConversationActivityResponse postAnalyticsConversationsActivityQuery(body, opts)


POST /api/v2/analytics/conversations/activity/query

Query for conversation activity observations

Requires ANY permissions:

* analytics:queueObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | query
let opts = { 
  'pageSize': 3.4, // Number | The desired page size
  'pageNumber': 3.4 // Number | The desired page number
};

apiInstance.postAnalyticsConversationsActivityQuery(body, opts)
  .then((data) => {
    console.log(`postAnalyticsConversationsActivityQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsConversationsActivityQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
 **pageSize** | **Number** | The desired page size | [optional]  |
 **pageNumber** | **Number** | The desired page number | [optional]  |

### Return type

**ConversationActivityResponse**


## postAnalyticsConversationsAggregatesJobs

> AsyncQueryResponse postAnalyticsConversationsAggregatesJobs(body)


POST /api/v2/analytics/conversations/aggregates/jobs

Query for conversation aggregates asynchronously

postAnalyticsConversationsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:conversationAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsConversationsAggregatesJobs(body)
  .then((data) => {
    console.log(`postAnalyticsConversationsAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsConversationsAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsConversationsAggregatesQuery

> ConversationAggregateQueryResponse postAnalyticsConversationsAggregatesQuery(body)


POST /api/v2/analytics/conversations/aggregates/query

Query for conversation aggregates

Requires ANY permissions:

* analytics:conversationAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsConversationsAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsConversationsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsConversationsAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**ConversationAggregateQueryResponse**


## postAnalyticsConversationsDetailsJobs

> AsyncQueryResponse postAnalyticsConversationsDetailsJobs(body)


POST /api/v2/analytics/conversations/details/jobs

Query for conversation details asynchronously

Requires ANY permissions:

* analytics:conversationDetail:view
* analytics:agentConversationDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsConversationsDetailsJobs(body)
  .then((data) => {
    console.log(`postAnalyticsConversationsDetailsJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsConversationsDetailsJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsConversationsDetailsQuery

> AnalyticsConversationQueryResponse postAnalyticsConversationsDetailsQuery(body)


POST /api/v2/analytics/conversations/details/query

Query for conversation details

Requires ANY permissions:

* analytics:conversationDetail:view
* analytics:agentConversationDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsConversationsDetailsQuery(body)
  .then((data) => {
    console.log(`postAnalyticsConversationsDetailsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsConversationsDetailsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AnalyticsConversationQueryResponse**


## postConversationAssign

> **&#39;String&#39;** postConversationAssign(conversationId, body)


POST /api/v2/conversations/{conversationId}/assign

Attempts to manually assign a specified conversation to a specified user.  Ignores bullseye ring, PAR score, skills, and languages.

Requires ANY permissions:

* conversation:call:pull
* conversation:call:assign
* conversation:callback:pull
* conversation:callback:assign
* conversation:webchat:pull
* conversation:webchat:assign
* conversation:email:pull
* conversation:email:assign
* conversation:message:pull
* conversation:message:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let body = {}; // Object | Targeted user

apiInstance.postConversationAssign(conversationId, body)
  .then((data) => {
    console.log(`postConversationAssign success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationAssign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **body** | **Object** | Targeted user |  |

### Return type

**&#39;String&#39;**


## postConversationBarge

> void postConversationBarge(conversationId)


POST /api/v2/conversations/{conversationId}/barge

Barge a conversation creating a barged in conference of connected participants.

Requires ANY permissions:

* conversation:call:barge

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID

apiInstance.postConversationBarge(conversationId)
  .then(() => {
    console.log('postConversationBarge returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationBarge');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |

### Return type

void (no response body)


## postConversationCobrowse

> CobrowseWebMessagingSession postConversationCobrowse(conversationId)


POST /api/v2/conversations/{conversationId}/cobrowse

Creates a cobrowse session. Requires conversation:cobrowse:add (for web messaging) or conversation:cobrowsevoice:add permission.

Requires ANY permissions:

* conversation:cobrowse:add
* conversation:cobrowseVoice:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | Conversation ID

apiInstance.postConversationCobrowse(conversationId)
  .then((data) => {
    console.log(`postConversationCobrowse success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationCobrowse');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |

### Return type

**CobrowseWebMessagingSession**


## postConversationCommunicationInternalmessages

> InternalMessageData postConversationCommunicationInternalmessages(conversationId, communicationId, body)


POST /api/v2/conversations/{conversationId}/communications/{communicationId}/internalmessages

Send internal message

Send a new internal message for an existing communication.

postConversationCommunicationInternalmessages is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* conversation:internalMessaging:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let communicationId = "communicationId_example"; // String | communicationId
let body = {}; // Object | Message

apiInstance.postConversationCommunicationInternalmessages(conversationId, communicationId, body)
  .then((data) => {
    console.log(`postConversationCommunicationInternalmessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationCommunicationInternalmessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Message |  |

### Return type

**InternalMessageData**


## postConversationDisconnect

> **&#39;String&#39;** postConversationDisconnect(conversationId)


POST /api/v2/conversations/{conversationId}/disconnect

Performs a full conversation teardown. Issues disconnect requests for any connected media. Applies a system wrap-up code to any participants that are pending wrap-up. This is not intended to be the normal way of ending interactions but is available in the event of problems with the application to allow a resynchronization of state across all components. It is recommended that users submit a support case if they are relying on this endpoint systematically as there is likely something that needs investigation.

Requires ANY permissions:

* conversation:communication:disconnect

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID

apiInstance.postConversationDisconnect(conversationId)
  .then((data) => {
    console.log(`postConversationDisconnect success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationDisconnect');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |

### Return type

**&#39;String&#39;**


## postConversationParticipantCallbacks

> void postConversationParticipantCallbacks(conversationId, participantId, opts)


POST /api/v2/conversations/{conversationId}/participants/{participantId}/callbacks

Create a new callback for the specified participant on the conversation.

Requires ALL permissions:

* conversation:callback:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let participantId = "participantId_example"; // String | participant ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.postConversationParticipantCallbacks(conversationId, participantId, opts)
  .then(() => {
    console.log('postConversationParticipantCallbacks returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationParticipantCallbacks');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **Object** |  | [optional]  |

### Return type

void (no response body)


## postConversationParticipantDigits

> void postConversationParticipantDigits(conversationId, participantId, opts)


POST /api/v2/conversations/{conversationId}/participants/{participantId}/digits

Sends DTMF to the participant

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let participantId = "participantId_example"; // String | participant ID
let opts = { 
  'body': {} // Object | Digits
};

apiInstance.postConversationParticipantDigits(conversationId, participantId, opts)
  .then(() => {
    console.log('postConversationParticipantDigits returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationParticipantDigits');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **Object** | Digits | [optional]  |

### Return type

void (no response body)


## postConversationParticipantInternalmessagesUsersCommunications

> MessagingConferResponse postConversationParticipantInternalmessagesUsersCommunications(conversationId, participantId, body)


POST /api/v2/conversations/{conversationId}/participants/{participantId}/internalmessages/users/communications

Setup internal message communication with user

The target user of the digital consultation must have the `conversation:internalMessaging:accept` permission.

postConversationParticipantInternalmessagesUsersCommunications is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* conversation:internalMessaging:setupWithUser

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let participantId = "participantId_example"; // String | participant ID
let body = {}; // Object | Confer request

apiInstance.postConversationParticipantInternalmessagesUsersCommunications(conversationId, participantId, body)
  .then((data) => {
    console.log(`postConversationParticipantInternalmessagesUsersCommunications success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationParticipantInternalmessagesUsersCommunications');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **Object** | Confer request |  |

### Return type

**MessagingConferResponse**


## postConversationParticipantReplace

> void postConversationParticipantReplace(conversationId, participantId, body)


POST /api/v2/conversations/{conversationId}/participants/{participantId}/replace

Replace this participant with the specified user and/or address

Requires ANY permissions:

* conversation:communication:blindTransfer

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let participantId = "participantId_example"; // String | participant ID
let body = {}; // Object | Transfer request

apiInstance.postConversationParticipantReplace(conversationId, participantId, body)
  .then(() => {
    console.log('postConversationParticipantReplace returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationParticipantReplace');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **Object** | Transfer request |  |

### Return type

void (no response body)


## postConversationParticipantReplaceAgent

> void postConversationParticipantReplaceAgent(conversationId, participantId, body)


POST /api/v2/conversations/{conversationId}/participants/{participantId}/replace/agent

Replace this participant with the specified agent

Requires ANY permissions:

* conversation:communication:blindTransfer
* conversation:communication:blindTransferAgent

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let participantId = "participantId_example"; // String | participant ID
let body = {}; // Object | Transfer request

apiInstance.postConversationParticipantReplaceAgent(conversationId, participantId, body)
  .then(() => {
    console.log('postConversationParticipantReplaceAgent returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationParticipantReplaceAgent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **Object** | Transfer request |  |

### Return type

void (no response body)


## postConversationParticipantReplaceContactExternal

> void postConversationParticipantReplaceContactExternal(conversationId, participantId, body)


POST /api/v2/conversations/{conversationId}/participants/{participantId}/replace/contact/external

Replace this participant with the an external contact

postConversationParticipantReplaceContactExternal is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* conversation:communication:blindTransfer
* conversation:communication:blindTransferExternalContact

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let participantId = "participantId_example"; // String | participant ID
let body = {}; // Object | Transfer request

apiInstance.postConversationParticipantReplaceContactExternal(conversationId, participantId, body)
  .then(() => {
    console.log('postConversationParticipantReplaceContactExternal returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationParticipantReplaceContactExternal');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **Object** | Transfer request |  |

### Return type

void (no response body)


## postConversationParticipantReplaceExternal

> void postConversationParticipantReplaceExternal(conversationId, participantId, body)


POST /api/v2/conversations/{conversationId}/participants/{participantId}/replace/external

Replace this participant with the an external contact

Requires ANY permissions:

* conversation:communication:blindTransfer
* conversation:communication:blindTransferExternal

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let participantId = "participantId_example"; // String | participant ID
let body = {}; // Object | Transfer request

apiInstance.postConversationParticipantReplaceExternal(conversationId, participantId, body)
  .then(() => {
    console.log('postConversationParticipantReplaceExternal returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationParticipantReplaceExternal');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **Object** | Transfer request |  |

### Return type

void (no response body)


## postConversationParticipantReplaceQueue

> void postConversationParticipantReplaceQueue(conversationId, participantId, body)


POST /api/v2/conversations/{conversationId}/participants/{participantId}/replace/queue

Replace this participant with the specified queue

Requires ANY permissions:

* conversation:communication:blindTransfer
* conversation:communication:blindTransferQueue

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let participantId = "participantId_example"; // String | participant ID
let body = {}; // Object | Transfer request

apiInstance.postConversationParticipantReplaceQueue(conversationId, participantId, body)
  .then(() => {
    console.log('postConversationParticipantReplaceQueue returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationParticipantReplaceQueue');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **Object** | Transfer request |  |

### Return type

void (no response body)


## postConversationParticipantSecureivrsessions

> SecureSession postConversationParticipantSecureivrsessions(conversationId, participantId, opts)


POST /api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions

Create secure IVR session. Only a participant in the conversation can invoke a secure IVR.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let participantId = "participantId_example"; // String | participant ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.postConversationParticipantSecureivrsessions(conversationId, participantId, opts)
  .then((data) => {
    console.log(`postConversationParticipantSecureivrsessions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationParticipantSecureivrsessions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **Object** |  | [optional]  |

### Return type

**SecureSession**


## postConversationParticipantTransfer

> void postConversationParticipantTransfer(conversationId, participantId, body)


POST /api/v2/conversations/{conversationId}/participants/{participantId}/transfer

Replace this participant by another one using the address of the destination.

postConversationParticipantTransfer is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* conversation:communication:blindTransfer

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let participantId = "participantId_example"; // String | participant ID
let body = {}; // Object | Transfer request

apiInstance.postConversationParticipantTransfer(conversationId, participantId, body)
  .then(() => {
    console.log('postConversationParticipantTransfer returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationParticipantTransfer');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **Object** | Transfer request |  |

### Return type

void (no response body)


## postConversationSuggestionEngagement

> SuggestionEngagement postConversationSuggestionEngagement(conversationId, suggestionId, body)


POST /api/v2/conversations/{conversationId}/suggestions/{suggestionId}/engagement

Save an engagement on the suggestion.

Requires ALL permissions:

* conversation:suggestionEngagement:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let suggestionId = "suggestionId_example"; // String | Suggestion ID
let body = {}; // Object | 

apiInstance.postConversationSuggestionEngagement(conversationId, suggestionId, body)
  .then((data) => {
    console.log(`postConversationSuggestionEngagement success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationSuggestionEngagement');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **suggestionId** | **String** | Suggestion ID |  |
 **body** | **Object** |  |  |

### Return type

**SuggestionEngagement**


## postConversationSuggestionsFeedback

> void postConversationSuggestionsFeedback(conversationId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/conversations/{conversationId}/suggestions/feedback

Suggestion feedback.

Google Agent Assist offering within Genesys will no longer be supported

Requires ANY permissions:

* conversation:suggestionFeedback:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let body = {}; // Object | SuggestionFeedback

apiInstance.postConversationSuggestionsFeedback(conversationId, body)
  .then(() => {
    console.log('postConversationSuggestionsFeedback returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationSuggestionsFeedback');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **body** | **Object** | SuggestionFeedback |  |

### Return type

void (no response body)


## postConversationSummaryFeedback

> void postConversationSummaryFeedback(conversationId, summaryId, opts)


POST /api/v2/conversations/{conversationId}/summaries/{summaryId}/feedback

Submit feedback for the summary.

Requires ALL permissions:

* conversation:summaryFeedback:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let summaryId = "summaryId_example"; // String | Summary ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.postConversationSummaryFeedback(conversationId, summaryId, opts)
  .then(() => {
    console.log('postConversationSummaryFeedback returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationSummaryFeedback');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **summaryId** | **String** | Summary ID |  |
 **body** | **Object** |  | [optional]  |

### Return type

void (no response body)


## postConversationsCall

> Conversation postConversationsCall(conversationId, body)


POST /api/v2/conversations/calls/{conversationId}

Place a new call as part of a callback conversation.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | Conversation

apiInstance.postConversationsCall(conversationId, body)
  .then((data) => {
    console.log(`postConversationsCall success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCall');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Conversation |  |

### Return type

**Conversation**


## postConversationsCallParticipantBarge

> void postConversationsCallParticipantBarge(conversationId, participantId)


POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/barge

Barge a given participant's call creating a barged in conference of connected participants.

Requires ANY permissions:

* conversation:call:barge

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId

apiInstance.postConversationsCallParticipantBarge(conversationId, participantId)
  .then(() => {
    console.log('postConversationsCallParticipantBarge returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCallParticipantBarge');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |

### Return type

void (no response body)


## postConversationsCallParticipantCoach

> void postConversationsCallParticipantCoach(conversationId, participantId)


POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/coach

Listen in on the conversation from the point of view of a given participant while speaking to just the given participant.

Requires ANY permissions:

* conversation:call:coach

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId

apiInstance.postConversationsCallParticipantCoach(conversationId, participantId)
  .then(() => {
    console.log('postConversationsCallParticipantCoach returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCallParticipantCoach');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |

### Return type

void (no response body)


## postConversationsCallParticipantCommunicationWrapup

> void postConversationsCallParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)


POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup

Apply wrap-up for this conversation communication

Requires ANY permissions:

* conversation:participant:wrapup

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let opts = { 
  'body': {} // Object | Wrap-up
};

apiInstance.postConversationsCallParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)
  .then(() => {
    console.log('postConversationsCallParticipantCommunicationWrapup returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCallParticipantCommunicationWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Wrap-up | [optional]  |

### Return type

void (no response body)


## postConversationsCallParticipantConsult

> ConsultTransferResponse postConversationsCallParticipantConsult(conversationId, participantId, body)


POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult

Initiate and update consult transfer

Requires ANY permissions:

* conversation:communication:consultTransfer

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let body = {}; // Object | Destination address and initial speak to

apiInstance.postConversationsCallParticipantConsult(conversationId, participantId, body)
  .then((data) => {
    console.log(`postConversationsCallParticipantConsult success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCallParticipantConsult');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Destination address and initial speak to |  |

### Return type

**ConsultTransferResponse**


## postConversationsCallParticipantConsultAgent

> ConsultTransferResponse postConversationsCallParticipantConsultAgent(conversationId, participantId, body)


POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult/agent

Initiate a consult transfer to an agent

Requires ANY permissions:

* conversation:communication:consultTransfer
* conversation:communication:consultTransferAgent

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let body = {}; // Object | Destination agent and initial speak to

apiInstance.postConversationsCallParticipantConsultAgent(conversationId, participantId, body)
  .then((data) => {
    console.log(`postConversationsCallParticipantConsultAgent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCallParticipantConsultAgent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Destination agent and initial speak to |  |

### Return type

**ConsultTransferResponse**


## postConversationsCallParticipantConsultContactExternal

> ConsultTransferResponse postConversationsCallParticipantConsultContactExternal(conversationId, participantId, body)


POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult/contact/external

Initiate a consult transfer to an external contact

postConversationsCallParticipantConsultContactExternal is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* conversation:communication:consultTransfer
* conversation:communication:consultTransferExternalContact

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let body = {}; // Object | Destination address and initial speak to

apiInstance.postConversationsCallParticipantConsultContactExternal(conversationId, participantId, body)
  .then((data) => {
    console.log(`postConversationsCallParticipantConsultContactExternal success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCallParticipantConsultContactExternal');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Destination address and initial speak to |  |

### Return type

**ConsultTransferResponse**


## postConversationsCallParticipantConsultExternal

> ConsultTransferResponse postConversationsCallParticipantConsultExternal(conversationId, participantId, body)


POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult/external

Initiate a consult transfer to an external contact

Requires ANY permissions:

* conversation:communication:consultTransfer
* conversation:communication:consultTransferExternal

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let body = {}; // Object | Destination address and initial speak to

apiInstance.postConversationsCallParticipantConsultExternal(conversationId, participantId, body)
  .then((data) => {
    console.log(`postConversationsCallParticipantConsultExternal success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCallParticipantConsultExternal');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Destination address and initial speak to |  |

### Return type

**ConsultTransferResponse**


## postConversationsCallParticipantConsultQueue

> ConsultTransferResponse postConversationsCallParticipantConsultQueue(conversationId, participantId, body)


POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult/queue

Initiate a consult transfer to a queue

Requires ANY permissions:

* conversation:communication:consultTransfer
* conversation:communication:consultTransferQueue

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let body = {}; // Object | Destination queue and initial speak to

apiInstance.postConversationsCallParticipantConsultQueue(conversationId, participantId, body)
  .then((data) => {
    console.log(`postConversationsCallParticipantConsultQueue success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCallParticipantConsultQueue');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Destination queue and initial speak to |  |

### Return type

**ConsultTransferResponse**


## postConversationsCallParticipantMonitor

> void postConversationsCallParticipantMonitor(conversationId, participantId)


POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/monitor

Listen in on the conversation from the point of view of a given participant.

Requires ANY permissions:

* conversation:call:monitor

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId

apiInstance.postConversationsCallParticipantMonitor(conversationId, participantId)
  .then(() => {
    console.log('postConversationsCallParticipantMonitor returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCallParticipantMonitor');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |

### Return type

void (no response body)


## postConversationsCallParticipantReplace

> void postConversationsCallParticipantReplace(conversationId, participantId, body)


POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/replace

Replace this participant with the specified user and/or address

Requires ANY permissions:

* conversation:communication:blindTransfer

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let body = {}; // Object | Transfer request

apiInstance.postConversationsCallParticipantReplace(conversationId, participantId, body)
  .then(() => {
    console.log('postConversationsCallParticipantReplace returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCallParticipantReplace');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Transfer request |  |

### Return type

void (no response body)


## postConversationsCallParticipantVoiceConsult

> ConsultTransferResponse postConversationsCallParticipantVoiceConsult(conversationId, participantId, body)


POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/voice/consult

Initiate voice consult transfer

postConversationsCallParticipantVoiceConsult is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* conversation:communication:consultTransfer

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let body = {}; // Object | Destination address and initial speak to

apiInstance.postConversationsCallParticipantVoiceConsult(conversationId, participantId, body)
  .then((data) => {
    console.log(`postConversationsCallParticipantVoiceConsult success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCallParticipantVoiceConsult');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Destination address and initial speak to |  |

### Return type

**ConsultTransferResponse**


## postConversationsCallParticipants

> Conversation postConversationsCallParticipants(conversationId, body)


POST /api/v2/conversations/calls/{conversationId}/participants

Add participants to a conversation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | Conversation

apiInstance.postConversationsCallParticipants(conversationId, body)
  .then((data) => {
    console.log(`postConversationsCallParticipants success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCallParticipants');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Conversation |  |

### Return type

**Conversation**


## postConversationsCallbackParticipantCommunicationWrapup

> void postConversationsCallbackParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)


POST /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup

Apply wrap-up for this conversation communication

Requires ANY permissions:

* conversation:participant:wrapup

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let opts = { 
  'body': {} // Object | Wrap-up
};

apiInstance.postConversationsCallbackParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)
  .then(() => {
    console.log('postConversationsCallbackParticipantCommunicationWrapup returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCallbackParticipantCommunicationWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Wrap-up | [optional]  |

### Return type

void (no response body)


## postConversationsCallbackParticipantReplace

> void postConversationsCallbackParticipantReplace(conversationId, participantId, body)


POST /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/replace

Replace this participant with the specified user and/or address

Requires ANY permissions:

* conversation:communication:blindTransfer

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let body = {}; // Object | Transfer request

apiInstance.postConversationsCallbackParticipantReplace(conversationId, participantId, body)
  .then(() => {
    console.log('postConversationsCallbackParticipantReplace returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCallbackParticipantReplace');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Transfer request |  |

### Return type

void (no response body)


## postConversationsCallbacks

> CreateCallbackResponse postConversationsCallbacks(body)


POST /api/v2/conversations/callbacks

Create a Callback

Requires ALL permissions:

* conversation:callback:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | Callback

apiInstance.postConversationsCallbacks(body)
  .then((data) => {
    console.log(`postConversationsCallbacks success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCallbacks');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Callback |  |

### Return type

**CreateCallbackResponse**


## postConversationsCallbacksBulkDisconnect

> void postConversationsCallbacksBulkDisconnect(body)


POST /api/v2/conversations/callbacks/bulk/disconnect

Disconnect multiple scheduled callbacks

Requires ANY permissions:

* conversation:communication:disconnect

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | BulkCallbackDisconnectRequest

apiInstance.postConversationsCallbacksBulkDisconnect(body)
  .then(() => {
    console.log('postConversationsCallbacksBulkDisconnect returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCallbacksBulkDisconnect');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | BulkCallbackDisconnectRequest |  |

### Return type

void (no response body)


## postConversationsCallbacksBulkUpdate

> BulkCallbackPatchResponse postConversationsCallbacksBulkUpdate(body)


POST /api/v2/conversations/callbacks/bulk/update

Update multiple scheduled callbacks

Requires ANY permissions:

* conversation:callback:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | BulkCallbackPatchRequest

apiInstance.postConversationsCallbacksBulkUpdate(body)
  .then((data) => {
    console.log(`postConversationsCallbacksBulkUpdate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCallbacksBulkUpdate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | BulkCallbackPatchRequest |  |

### Return type

**BulkCallbackPatchResponse**


## postConversationsCalls

> CreateCallResponse postConversationsCalls(body)


POST /api/v2/conversations/calls

Create a call conversation

Requires ANY permissions:

* conversation:conference:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | Call request

apiInstance.postConversationsCalls(body)
  .then((data) => {
    console.log(`postConversationsCalls success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCalls');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Call request |  |

### Return type

**CreateCallResponse**


## postConversationsChatCommunicationMessages

> WebChatMessage postConversationsChatCommunicationMessages(conversationId, communicationId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/conversations/chats/{conversationId}/communications/{communicationId}/messages

Send a message on behalf of a communication in a chat conversation.

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let communicationId = "communicationId_example"; // String | communicationId
let body = {}; // Object | Message

apiInstance.postConversationsChatCommunicationMessages(conversationId, communicationId, body)
  .then((data) => {
    console.log(`postConversationsChatCommunicationMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsChatCommunicationMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Message |  |

### Return type

**WebChatMessage**


## postConversationsChatCommunicationTyping

> WebChatTyping postConversationsChatCommunicationTyping(conversationId, communicationId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/conversations/chats/{conversationId}/communications/{communicationId}/typing

Send a typing-indicator on behalf of a communication in a chat conversation.

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let communicationId = "communicationId_example"; // String | communicationId

apiInstance.postConversationsChatCommunicationTyping(conversationId, communicationId)
  .then((data) => {
    console.log(`postConversationsChatCommunicationTyping success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsChatCommunicationTyping');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **communicationId** | **String** | communicationId |  |

### Return type

**WebChatTyping**


## postConversationsChatParticipantCommunicationWrapup

> void postConversationsChatParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup

Apply wrap-up for this conversation communication

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.

Requires ANY permissions:

* conversation:participant:wrapup

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let opts = { 
  'body': {} // Object | Wrap-up
};

apiInstance.postConversationsChatParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)
  .then(() => {
    console.log('postConversationsChatParticipantCommunicationWrapup returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsChatParticipantCommunicationWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Wrap-up | [optional]  |

### Return type

void (no response body)


## postConversationsChatParticipantReplace

> void postConversationsChatParticipantReplace(conversationId, participantId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/conversations/chats/{conversationId}/participants/{participantId}/replace

Replace this participant with the specified user and/or address

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.

Requires ANY permissions:

* conversation:communication:blindTransfer

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let body = {}; // Object | Transfer request

apiInstance.postConversationsChatParticipantReplace(conversationId, participantId, body)
  .then(() => {
    console.log('postConversationsChatParticipantReplace returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsChatParticipantReplace');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Transfer request |  |

### Return type

void (no response body)


## postConversationsChats

> ChatConversation postConversationsChats(body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/conversations/chats

Create a web chat conversation

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.

Requires ALL permissions:

* conversation:webchat:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | Create web chat request

apiInstance.postConversationsChats(body)
  .then((data) => {
    console.log(`postConversationsChats success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsChats');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Create web chat request |  |

### Return type

**ChatConversation**


## postConversationsCobrowsesessionParticipantCommunicationWrapup

> void postConversationsCobrowsesessionParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup

Apply wrap-up for this conversation communication

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/

Requires ANY permissions:

* conversation:participant:wrapup

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let opts = { 
  'body': {} // Object | Wrap-up
};

apiInstance.postConversationsCobrowsesessionParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)
  .then(() => {
    console.log('postConversationsCobrowsesessionParticipantCommunicationWrapup returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCobrowsesessionParticipantCommunicationWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Wrap-up | [optional]  |

### Return type

void (no response body)


## postConversationsCobrowsesessionParticipantReplace

> void postConversationsCobrowsesessionParticipantReplace(conversationId, participantId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/replace

Replace this participant with the specified user and/or address

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/

Requires ANY permissions:

* conversation:communication:blindTransfer

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let opts = { 
  'body': {} // Object | 
};

apiInstance.postConversationsCobrowsesessionParticipantReplace(conversationId, participantId, opts)
  .then(() => {
    console.log('postConversationsCobrowsesessionParticipantReplace returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCobrowsesessionParticipantReplace');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** |  | [optional]  |

### Return type

void (no response body)


## postConversationsEmailInboundmessages

> EmailConversation postConversationsEmailInboundmessages(conversationId, body)


POST /api/v2/conversations/emails/{conversationId}/inboundmessages

Send an email to an external conversation. An external conversation is one where the provider is not PureCloud based. This endpoint allows the sender of the external email to reply or send a new message to the existing conversation. The new message will be treated as part of the existing conversation and chained to it.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | Send external email reply

apiInstance.postConversationsEmailInboundmessages(conversationId, body)
  .then((data) => {
    console.log(`postConversationsEmailInboundmessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsEmailInboundmessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Send external email reply |  |

### Return type

**EmailConversation**


## postConversationsEmailMessages

> EmailMessageReply postConversationsEmailMessages(conversationId, body)


POST /api/v2/conversations/emails/{conversationId}/messages

Send an email reply

Requires ANY permissions:

* conversation:email:send

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | Reply

apiInstance.postConversationsEmailMessages(conversationId, body)
  .then((data) => {
    console.log(`postConversationsEmailMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsEmailMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Reply |  |

### Return type

**EmailMessageReply**


## postConversationsEmailMessagesDraftAttachmentsCopy

> EmailMessage postConversationsEmailMessagesDraftAttachmentsCopy(conversationId, body)


POST /api/v2/conversations/emails/{conversationId}/messages/draft/attachments/copy

Copy attachments from an email message to the current draft.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | Copy Attachment Request

apiInstance.postConversationsEmailMessagesDraftAttachmentsCopy(conversationId, body)
  .then((data) => {
    console.log(`postConversationsEmailMessagesDraftAttachmentsCopy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsEmailMessagesDraftAttachmentsCopy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Copy Attachment Request |  |

### Return type

**EmailMessage**


## postConversationsEmailParticipantCommunicationWrapup

> void postConversationsEmailParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)


POST /api/v2/conversations/emails/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup

Apply wrap-up for this conversation communication

Requires ANY permissions:

* conversation:participant:wrapup

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let opts = { 
  'body': {} // Object | Wrap-up
};

apiInstance.postConversationsEmailParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)
  .then(() => {
    console.log('postConversationsEmailParticipantCommunicationWrapup returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsEmailParticipantCommunicationWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Wrap-up | [optional]  |

### Return type

void (no response body)


## postConversationsEmailParticipantReplace

> void postConversationsEmailParticipantReplace(conversationId, participantId, body)


POST /api/v2/conversations/emails/{conversationId}/participants/{participantId}/replace

Replace this participant with the specified user and/or address

Requires ANY permissions:

* conversation:communication:blindTransfer

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let body = {}; // Object | Transfer request

apiInstance.postConversationsEmailParticipantReplace(conversationId, participantId, body)
  .then(() => {
    console.log('postConversationsEmailParticipantReplace returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsEmailParticipantReplace');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Transfer request |  |

### Return type

void (no response body)


## postConversationsEmailReconnect

> void postConversationsEmailReconnect(conversationId)


POST /api/v2/conversations/emails/{conversationId}/reconnect

Reconnect the user to the most recently disconnected customer on a fully disconnected email conversation

Requires ANY permissions:

* conversation:communication:reconnect

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId

apiInstance.postConversationsEmailReconnect(conversationId)
  .then(() => {
    console.log('postConversationsEmailReconnect returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsEmailReconnect');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |

### Return type

void (no response body)


## postConversationsEmails

> EmailConversation postConversationsEmails(body)


POST /api/v2/conversations/emails

Create an email conversation

If the direction of the request is INBOUND, this will create an external conversation with a third party provider. If the direction of the the request is OUTBOUND, this will create a conversation to send outbound emails on behalf of a queue.

Requires ANY permissions:

* conversation:email:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | Create email request

apiInstance.postConversationsEmails(body)
  .then((data) => {
    console.log(`postConversationsEmails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsEmails');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Create email request |  |

### Return type

**EmailConversation**


## postConversationsEmailsAgentless

> AgentlessEmailSendResponseDto postConversationsEmailsAgentless(body)


POST /api/v2/conversations/emails/agentless

Create an email conversation, per API

Requires ANY permissions:

* conversation:email:create
* conversation:agentlessEmail:send

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | Create agentless email request

apiInstance.postConversationsEmailsAgentless(body)
  .then((data) => {
    console.log(`postConversationsEmailsAgentless success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsEmailsAgentless');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Create agentless email request |  |

### Return type

**AgentlessEmailSendResponseDto**


## postConversationsFaxes

> FaxSendResponse postConversationsFaxes(body)


POST /api/v2/conversations/faxes

Create Fax Conversation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | Fax

apiInstance.postConversationsFaxes(body)
  .then((data) => {
    console.log(`postConversationsFaxes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsFaxes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Fax |  |

### Return type

**FaxSendResponse**


## postConversationsKeyconfigurations

> ConversationEncryptionConfiguration postConversationsKeyconfigurations(body)


POST /api/v2/conversations/keyconfigurations

Setup configurations for encryption key creation

Requires ANY permissions:

* conversation:encryptionKey:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | Encryption Configuration

apiInstance.postConversationsKeyconfigurations(body)
  .then((data) => {
    console.log(`postConversationsKeyconfigurations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsKeyconfigurations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Encryption Configuration |  |

### Return type

**ConversationEncryptionConfiguration**


## postConversationsKeyconfigurationsValidate

> ConversationEncryptionConfiguration postConversationsKeyconfigurationsValidate(body)


POST /api/v2/conversations/keyconfigurations/validate

Validate encryption key configurations without saving it

Requires ANY permissions:

* conversation:encryptionKey:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | Encryption Configuration

apiInstance.postConversationsKeyconfigurationsValidate(body)
  .then((data) => {
    console.log(`postConversationsKeyconfigurationsValidate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsKeyconfigurationsValidate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Encryption Configuration |  |

### Return type

**ConversationEncryptionConfiguration**


## postConversationsMessageCommunicationMessages

> MessageData postConversationsMessageCommunicationMessages(conversationId, communicationId, body, opts)


POST /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages

Send message

Send message on existing conversation/communication. Only one message body field can be accepted, per request. Example: 1 textBody, 1 mediaId, or 1 messageTemplate.

Requires ANY permissions:

* conversation:message:create
* conversation:webmessaging:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let communicationId = "communicationId_example"; // String | communicationId
let body = {}; // Object | Message
let opts = { 
  'useNormalizedMessage': false // Boolean | If true, response removes deprecated fields (textBody, media)
};

apiInstance.postConversationsMessageCommunicationMessages(conversationId, communicationId, body, opts)
  .then((data) => {
    console.log(`postConversationsMessageCommunicationMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessageCommunicationMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Message |  |
 **useNormalizedMessage** | **Boolean** | If true, response removes deprecated fields (textBody, media) | [optional] [default to false] |

### Return type

**MessageData**


## postConversationsMessageCommunicationMessagesMedia

> MessageMediaData postConversationsMessageCommunicationMessagesMedia(conversationId, communicationId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media

Create media

See https://developer.genesys.cloud/api/rest/v2/conversations/messaging-media-upload for example usage.

Requires ANY permissions:

* conversation:message:create
* conversation:webmessaging:create
* conversation:socialmedia:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let communicationId = "communicationId_example"; // String | communicationId

apiInstance.postConversationsMessageCommunicationMessagesMedia(conversationId, communicationId)
  .then((data) => {
    console.log(`postConversationsMessageCommunicationMessagesMedia success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessageCommunicationMessagesMedia');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **communicationId** | **String** | communicationId |  |

### Return type

**MessageMediaData**


## postConversationsMessageCommunicationMessagesMediaUploads

> MessageMediaUploadData postConversationsMessageCommunicationMessagesMediaUploads(conversationId, communicationId, body)


POST /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media/uploads

Create a URL to upload a message media file

See https://developer.genesys.cloud/api/rest/v2/conversations/messaging-media-upload for example usage.

Requires ANY permissions:

* conversation:message:create
* conversation:webmessaging:create
* conversation:socialmedia:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let communicationId = "communicationId_example"; // String | communicationId
let body = {}; // Object | request

apiInstance.postConversationsMessageCommunicationMessagesMediaUploads(conversationId, communicationId, body)
  .then((data) => {
    console.log(`postConversationsMessageCommunicationMessagesMediaUploads success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessageCommunicationMessagesMediaUploads');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | request |  |

### Return type

**MessageMediaUploadData**


## postConversationsMessageCommunicationSocialmediaMessages

> SocialMediaMessageData postConversationsMessageCommunicationSocialmediaMessages(conversationId, communicationId, body)


POST /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/socialmedia/messages

Send a social media message

Send a social media message on existing conversation/communication.

Requires ANY permissions:

* conversation:socialmedia:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let communicationId = "communicationId_example"; // String | communicationId
let body = {}; // Object | Message

apiInstance.postConversationsMessageCommunicationSocialmediaMessages(conversationId, communicationId, body)
  .then((data) => {
    console.log(`postConversationsMessageCommunicationSocialmediaMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessageCommunicationSocialmediaMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Message |  |

### Return type

**SocialMediaMessageData**


## postConversationsMessageCommunicationTyping

> void postConversationsMessageCommunicationTyping(conversationId, communicationId, body)


POST /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/typing

Send message typing event

Send message typing event for existing conversation/communication.

Requires ANY permissions:

* conversation:message:create
* conversation:webmessaging:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let communicationId = "communicationId_example"; // String | communicationId
let body = {}; // Object | MessageTypingEvent

apiInstance.postConversationsMessageCommunicationTyping(conversationId, communicationId, body)
  .then(() => {
    console.log('postConversationsMessageCommunicationTyping returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessageCommunicationTyping');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | MessageTypingEvent |  |

### Return type

void (no response body)


## postConversationsMessageInboundOpenEvent

> OpenEventNormalizedMessage postConversationsMessageInboundOpenEvent(integrationId, body)


POST /api/v2/conversations/messages/{integrationId}/inbound/open/event

Send an inbound Open Event Message

Send an inbound event message to an Open Messaging integration. In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least messaging scope. This will either generate a new Conversation, or be a part of an existing conversation. See https://developer.genesys.cloud/api/digital/openmessaging/ for example usage.

Requires ALL permissions:

* conversation:message:receive

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | integrationId
let body = {}; // Object | NormalizedMessage

apiInstance.postConversationsMessageInboundOpenEvent(integrationId, body)
  .then((data) => {
    console.log(`postConversationsMessageInboundOpenEvent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessageInboundOpenEvent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | integrationId |  |
 **body** | **Object** | NormalizedMessage |  |

### Return type

**OpenEventNormalizedMessage**


## postConversationsMessageInboundOpenMessage

> OpenMessageNormalizedMessage postConversationsMessageInboundOpenMessage(integrationId, body, opts)


POST /api/v2/conversations/messages/{integrationId}/inbound/open/message

Send inbound Open Message

Send an inbound message to an Open Messaging integration. In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least messaging scope. This will either generate a new Conversation, or be a part of an existing conversation. See https://developer.genesys.cloud/api/digital/openmessaging/ for example usage.

Requires ALL permissions:

* conversation:message:receive

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | integrationId
let body = {}; // Object | NormalizedMessage
let opts = { 
  'prefetchConversationId': false // Boolean | Indicates whether or not to prefetch conversationId
};

apiInstance.postConversationsMessageInboundOpenMessage(integrationId, body, opts)
  .then((data) => {
    console.log(`postConversationsMessageInboundOpenMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessageInboundOpenMessage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | integrationId |  |
 **body** | **Object** | NormalizedMessage |  |
 **prefetchConversationId** | **Boolean** | Indicates whether or not to prefetch conversationId | [optional] [default to false] |

### Return type

**OpenMessageNormalizedMessage**


## postConversationsMessageInboundOpenReceipt

> OpenReceiptNormalizedMessage postConversationsMessageInboundOpenReceipt(integrationId, body)


POST /api/v2/conversations/messages/{integrationId}/inbound/open/receipt

Send an inbound Open Receipt Message

Send an inbound open Receipt to an Open Messaging integration. In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least messaging scope. This will either generate a new Conversation, or be a part of an existing conversation. See https://developer.genesys.cloud/api/digital/openmessaging/ for example usage.

Requires ALL permissions:

* conversation:message:receive

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | integrationId
let body = {}; // Object | NormalizedMessage

apiInstance.postConversationsMessageInboundOpenReceipt(integrationId, body)
  .then((data) => {
    console.log(`postConversationsMessageInboundOpenReceipt success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessageInboundOpenReceipt');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | integrationId |  |
 **body** | **Object** | NormalizedMessage |  |

### Return type

**OpenReceiptNormalizedMessage**


## postConversationsMessageInboundOpenStructuredResponse

> OpenStructuredResponseNormalizedMessage postConversationsMessageInboundOpenStructuredResponse(integrationId, body)


POST /api/v2/conversations/messages/{integrationId}/inbound/open/structured/response

Send inbound Open Response

Send an inbound response for a structured message to an Open Messaging integration. In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least messaging scope. This will be a part of an existing conversation. See https://developer.genesys.cloud/api/digital/openmessaging/ for example usage.

Requires ALL permissions:

* conversation:message:receive

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | integrationId
let body = {}; // Object | OpenInboundStructuredResponseMessage

apiInstance.postConversationsMessageInboundOpenStructuredResponse(integrationId, body)
  .then((data) => {
    console.log(`postConversationsMessageInboundOpenStructuredResponse success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessageInboundOpenStructuredResponse');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | integrationId |  |
 **body** | **Object** | OpenInboundStructuredResponseMessage |  |

### Return type

**OpenStructuredResponseNormalizedMessage**


## postConversationsMessageMessagesBulk

> TextMessageListing postConversationsMessageMessagesBulk(conversationId, opts)


POST /api/v2/conversations/messages/{conversationId}/messages/bulk

Get messages in batch

The path parameter [conversationId] should contain the conversationId of the conversation being filtered. The body should contain the messageId(s) of messages being requested. For example: ["a3069a33b-bbb1-4703-9d68-061d9e9db96e", "55bc6be3-078c-4a49-a4e6-1e05776ed7e8"]

Requires ANY permissions:

* conversation:message:view
* conversation:webmessaging:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | 
let opts = { 
  'useNormalizedMessage': false, // Boolean | If true, response removes deprecated fields (textBody, media)
  'body': ["body_example"] // [String] | messageIds
};

apiInstance.postConversationsMessageMessagesBulk(conversationId, opts)
  .then((data) => {
    console.log(`postConversationsMessageMessagesBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessageMessagesBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** |  |  |
 **useNormalizedMessage** | **Boolean** | If true, response removes deprecated fields (textBody, media) | [optional] [default to false] |
 **body** | **[String]** | messageIds | [optional]  |

### Return type

**TextMessageListing**


## postConversationsMessageParticipantCommunicationWrapup

> void postConversationsMessageParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)


POST /api/v2/conversations/messages/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup

Apply wrap-up for this conversation communication

Requires ANY permissions:

* conversation:participant:wrapup

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let opts = { 
  'body': {} // Object | Wrap-up
};

apiInstance.postConversationsMessageParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)
  .then(() => {
    console.log('postConversationsMessageParticipantCommunicationWrapup returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessageParticipantCommunicationWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Wrap-up | [optional]  |

### Return type

void (no response body)


## postConversationsMessageParticipantMonitor

> void postConversationsMessageParticipantMonitor(conversationId, participantId)


POST /api/v2/conversations/messages/{conversationId}/participants/{participantId}/monitor

Listen in on the conversation from the point of view of a given participant.

Requires ANY permissions:

* conversation:message:monitor

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId

apiInstance.postConversationsMessageParticipantMonitor(conversationId, participantId)
  .then(() => {
    console.log('postConversationsMessageParticipantMonitor returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessageParticipantMonitor');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |

### Return type

void (no response body)


## postConversationsMessageParticipantReplace

> void postConversationsMessageParticipantReplace(conversationId, participantId, body)


POST /api/v2/conversations/messages/{conversationId}/participants/{participantId}/replace

Replace this participant with the specified user and/or address

Requires ANY permissions:

* conversation:communication:blindTransfer

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let body = {}; // Object | Transfer request

apiInstance.postConversationsMessageParticipantReplace(conversationId, participantId, body)
  .then(() => {
    console.log('postConversationsMessageParticipantReplace returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessageParticipantReplace');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Transfer request |  |

### Return type

void (no response body)


## postConversationsMessages

> CreateOutboundMessagingConversationResponse postConversationsMessages(body)


POST /api/v2/conversations/messages

Create an outbound messaging conversation.

If there is an existing conversation between the remote address and the address associated with the queue specified in createOutboundRequest then the result of this request depends on the state of that conversation and the useExistingConversation field of createOutboundRequest. If the existing conversation is in alerting or connected state, then the request will fail. If the existing conversation is disconnected but still within the conversation window then the request will fail unless useExistingConversation is set to true.

Requires ALL permissions:

* conversation:message:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | Create outbound messaging conversation

apiInstance.postConversationsMessages(body)
  .then((data) => {
    console.log(`postConversationsMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Create outbound messaging conversation |  |

### Return type

**CreateOutboundMessagingConversationResponse**


## postConversationsMessagesAgentless

> SendAgentlessOutboundMessageResponse postConversationsMessagesAgentless(body, opts)


POST /api/v2/conversations/messages/agentless

Send an agentless outbound message

Send an agentless (api participant) outbound message using a client credential grant. In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least messaging scope. If there is already a connected conversation between the fromAddress and toAddress specified, the useExistingActiveConversation param can be used to barge in to the ongoing conversation.

Requires ALL permissions:

* conversation:message:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | Create agentless outbound messaging request
let opts = { 
  'useNormalizedMessage': false // Boolean | If true, response removes deprecated fields (textBody, messagingTemplate)
};

apiInstance.postConversationsMessagesAgentless(body, opts)
  .then((data) => {
    console.log(`postConversationsMessagesAgentless success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessagesAgentless');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Create agentless outbound messaging request |  |
 **useNormalizedMessage** | **Boolean** | If true, response removes deprecated fields (textBody, messagingTemplate) | [optional] [default to false] |

### Return type

**SendAgentlessOutboundMessageResponse**


## postConversationsMessagesInboundOpen

> OpenNormalizedMessage postConversationsMessagesInboundOpen(body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/conversations/messages/inbound/open

Send an inbound Open Message

[This API is deprecated. Instead, use 1. POST /api/v2/conversations/messages/{integrationId}/inbound/open/event, if you want to send an inbound Open Event Message 2. POST /api/v2/conversations/messages/{integrationId}/inbound/open/message, if you want to send an inbound Open Message 3. POST /api/v2/conversations/messages/{integrationId}/inbound/open/receipt, to send an inbound Open Receipt Message]  In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least messaging scope. This will either generate a new Conversation, or be a part of an existing conversation. See https://developer.genesys.cloud/api/digital/openmessaging/ for example usage.

Requires ALL permissions:

* conversation:message:receive

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | NormalizedMessage

apiInstance.postConversationsMessagesInboundOpen(body)
  .then((data) => {
    console.log(`postConversationsMessagesInboundOpen success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessagesInboundOpen');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | NormalizedMessage |  |

### Return type

**OpenNormalizedMessage**


## postConversationsMessagingIntegrationsFacebook

> FacebookIntegration postConversationsMessagingIntegrationsFacebook(body)


POST /api/v2/conversations/messaging/integrations/facebook

Create a Facebook Integration

Requires ALL permissions:

* messaging:integration:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | FacebookIntegrationRequest

apiInstance.postConversationsMessagingIntegrationsFacebook(body)
  .then((data) => {
    console.log(`postConversationsMessagingIntegrationsFacebook success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessagingIntegrationsFacebook');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | FacebookIntegrationRequest |  |

### Return type

**FacebookIntegration**


## postConversationsMessagingIntegrationsInstagram

> InstagramIntegration postConversationsMessagingIntegrationsInstagram(body)


POST /api/v2/conversations/messaging/integrations/instagram

Create Instagram Integration

Requires ALL permissions:

* messaging:conversationInstagramIntegration:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | InstagramIntegrationRequest

apiInstance.postConversationsMessagingIntegrationsInstagram(body)
  .then((data) => {
    console.log(`postConversationsMessagingIntegrationsInstagram success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessagingIntegrationsInstagram');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | InstagramIntegrationRequest |  |

### Return type

**InstagramIntegration**


## postConversationsMessagingIntegrationsOpen

> OpenIntegration postConversationsMessagingIntegrationsOpen(body)


POST /api/v2/conversations/messaging/integrations/open

Create an Open messaging integration

See https://developer.genesys.cloud/api/digital/openmessaging/ for more information.

Requires ALL permissions:

* messaging:integration:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | OpenIntegrationRequest

apiInstance.postConversationsMessagingIntegrationsOpen(body)
  .then((data) => {
    console.log(`postConversationsMessagingIntegrationsOpen success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessagingIntegrationsOpen');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | OpenIntegrationRequest |  |

### Return type

**OpenIntegration**


## postConversationsMessagingIntegrationsTwitter

> TwitterIntegration postConversationsMessagingIntegrationsTwitter(body)


POST /api/v2/conversations/messaging/integrations/twitter

Create Twitter Integration

Requires ALL permissions:

* messaging:XIntegration:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | TwitterIntegrationRequest

apiInstance.postConversationsMessagingIntegrationsTwitter(body)
  .then((data) => {
    console.log(`postConversationsMessagingIntegrationsTwitter success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessagingIntegrationsTwitter');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | TwitterIntegrationRequest |  |

### Return type

**TwitterIntegration**


## postConversationsMessagingIntegrationsWhatsapp

> WhatsAppIntegration postConversationsMessagingIntegrationsWhatsapp(body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/conversations/messaging/integrations/whatsapp

[This API is deprecated. Use POST /api/v2/conversations/messaging/integrations/whatsapp/embeddedsignup instead] Create a WhatsApp Integration

[This API is deprecated. Use POST /api/v2/conversations/messaging/integrations/whatsapp/embeddedsignup instead] You must be approved by WhatsApp to use this feature. Your approved e164-formatted phone number and valid WhatsApp certificate for your number are required. Your WhatsApp certificate must have valid base64 encoding. Please paste carefully and do not add any leading or trailing spaces. Do not alter any characters. An integration must be activated within 7 days of certificate generation. If you cannot complete the addition and activation of the number within 7 days, please obtain a new certificate before creating the integration. Integrations created with an invalid number or certificate may immediately incur additional integration fees. Please carefully enter your number and certificate as described.

Requires ALL permissions:

* messaging:whatsappIntegration:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | WhatsAppIntegrationRequest

apiInstance.postConversationsMessagingIntegrationsWhatsapp(body)
  .then((data) => {
    console.log(`postConversationsMessagingIntegrationsWhatsapp success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessagingIntegrationsWhatsapp');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | WhatsAppIntegrationRequest |  |

### Return type

**WhatsAppIntegration**


## postConversationsMessagingIntegrationsWhatsappEmbeddedsignup

> WhatsAppIntegration postConversationsMessagingIntegrationsWhatsappEmbeddedsignup(body)


POST /api/v2/conversations/messaging/integrations/whatsapp/embeddedsignup

Create a WhatsApp Integration using the WhatsApp embedded signup flow

Use the access token returned from the embedded signup flow to obtain a list of available phone numbers that can be associated with the created integration. The returned WhatsApp integration will initially have a createStatus of Initiated until the list of available phone numbers can be obtained from the provider. Please run a GET on the created integration until it returns a createStatus of Completed, and the list of available phone numbers obtained from the provider. You can then specify one of the available phone numbers in the PATCH call on the integration to activate it.

Requires ALL permissions:

* messaging:whatsappIntegration:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | WhatsAppEmbeddedSignupIntegrationRequest

apiInstance.postConversationsMessagingIntegrationsWhatsappEmbeddedsignup(body)
  .then((data) => {
    console.log(`postConversationsMessagingIntegrationsWhatsappEmbeddedsignup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessagingIntegrationsWhatsappEmbeddedsignup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | WhatsAppEmbeddedSignupIntegrationRequest |  |

### Return type

**WhatsAppIntegration**


## postConversationsMessagingSettings

> MessagingSetting postConversationsMessagingSettings(body)


POST /api/v2/conversations/messaging/settings

Create a messaging setting

Requires ALL permissions:

* messaging:setting:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | MessagingSetting

apiInstance.postConversationsMessagingSettings(body)
  .then((data) => {
    console.log(`postConversationsMessagingSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessagingSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | MessagingSetting |  |

### Return type

**MessagingSetting**


## postConversationsMessagingSupportedcontent

> SupportedContent postConversationsMessagingSupportedcontent(body)


POST /api/v2/conversations/messaging/supportedcontent

Create a Supported Content profile

Requires ANY permissions:

* messaging:supportedContent:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | SupportedContent

apiInstance.postConversationsMessagingSupportedcontent(body)
  .then((data) => {
    console.log(`postConversationsMessagingSupportedcontent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessagingSupportedcontent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | SupportedContent |  |

### Return type

**SupportedContent**


## postConversationsParticipantsAttributesSearch

> JsonCursorSearchResponse postConversationsParticipantsAttributesSearch(body)


POST /api/v2/conversations/participants/attributes/search

Search conversations

Requires ANY permissions:

* conversation:participant:attributesview

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | Search request options

apiInstance.postConversationsParticipantsAttributesSearch(body)
  .then((data) => {
    console.log(`postConversationsParticipantsAttributesSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsParticipantsAttributesSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |

### Return type

**JsonCursorSearchResponse**


## postConversationsScreenshareParticipantCommunicationWrapup

> void postConversationsScreenshareParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/conversations/screenshares/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup

Apply wrap-up for this conversation communication

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/

Requires ANY permissions:

* conversation:participant:wrapup

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let opts = { 
  'body': {} // Object | Wrap-up
};

apiInstance.postConversationsScreenshareParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)
  .then(() => {
    console.log('postConversationsScreenshareParticipantCommunicationWrapup returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsScreenshareParticipantCommunicationWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Wrap-up | [optional]  |

### Return type

void (no response body)


## postConversationsSocialParticipantCommunicationWrapup

> void postConversationsSocialParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)


POST /api/v2/conversations/socials/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup

Apply wrap-up for this conversation communication

Requires ANY permissions:

* conversation:participant:wrapup

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let opts = { 
  'body': {} // Object | Wrap-up
};

apiInstance.postConversationsSocialParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)
  .then(() => {
    console.log('postConversationsSocialParticipantCommunicationWrapup returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsSocialParticipantCommunicationWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Wrap-up | [optional]  |

### Return type

void (no response body)


## postConversationsVideoAgentconferenceCommunication

> VideoConferenceDetails postConversationsVideoAgentconferenceCommunication(conversationId, communicationId)


POST /api/v2/conversations/videos/{conversationId}/agentconference/communications/{communicationId}

Create an Agent-Type video conference and assign an agent to it

postConversationsVideoAgentconferenceCommunication is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* conversation:video:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let communicationId = "communicationId_example"; // String | communicationId

apiInstance.postConversationsVideoAgentconferenceCommunication(conversationId, communicationId)
  .then((data) => {
    console.log(`postConversationsVideoAgentconferenceCommunication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsVideoAgentconferenceCommunication');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **communicationId** | **String** | communicationId |  |

### Return type

**VideoConferenceDetails**


## postConversationsVideoParticipantCommunicationWrapup

> void postConversationsVideoParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)


POST /api/v2/conversations/videos/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup

Apply wrap-up for this conversation communication

Requires ANY permissions:

* conversation:participant:wrapup

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let opts = { 
  'body': {} // Object | Wrap-up
};

apiInstance.postConversationsVideoParticipantCommunicationWrapup(conversationId, participantId, communicationId, opts)
  .then(() => {
    console.log('postConversationsVideoParticipantCommunicationWrapup returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsVideoParticipantCommunicationWrapup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Wrap-up | [optional]  |

### Return type

void (no response body)


## postConversationsVideosMeetings

> MeetingIdRecord postConversationsVideosMeetings(body)


POST /api/v2/conversations/videos/meetings

Generate a meetingId for a given conferenceId

postConversationsVideosMeetings is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* video:video:access

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | MeetingIdRequest

apiInstance.postConversationsVideosMeetings(body)
  .then((data) => {
    console.log(`postConversationsVideosMeetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsVideosMeetings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | MeetingIdRequest |  |

### Return type

**MeetingIdRecord**


## putConversationParticipantFlaggedreason

> void putConversationParticipantFlaggedreason(conversationId, participantId)


PUT /api/v2/conversations/{conversationId}/participants/{participantId}/flaggedreason

Set flagged reason on conversation participant to indicate bad conversation quality.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let participantId = "participantId_example"; // String | participant ID

apiInstance.putConversationParticipantFlaggedreason(conversationId, participantId)
  .then(() => {
    console.log('putConversationParticipantFlaggedreason returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationParticipantFlaggedreason');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |

### Return type

void (no response body)


## putConversationSecureattributes

> **&#39;String&#39;** putConversationSecureattributes(conversationId, body)


PUT /api/v2/conversations/{conversationId}/secureattributes

Set the secure attributes on a conversation.

Requires ANY permissions:

* conversation:participant:attributesedit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let body = {}; // Object | Conversation Secure Attributes

apiInstance.putConversationSecureattributes(conversationId, body)
  .then((data) => {
    console.log(`putConversationSecureattributes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationSecureattributes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **body** | **Object** | Conversation Secure Attributes |  |

### Return type

**&#39;String&#39;**


## putConversationTags

> **&#39;String&#39;** putConversationTags(conversationId, body)


PUT /api/v2/conversations/{conversationId}/tags

Update the tags on a conversation.

Requires ANY permissions:

* conversation:externalTag:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversation ID
let body = {}; // Object | Conversation Tags

apiInstance.putConversationTags(conversationId, body)
  .then((data) => {
    console.log(`putConversationTags success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationTags');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **body** | **Object** | Conversation Tags |  |

### Return type

**&#39;String&#39;**


## putConversationsCallParticipantCommunicationUuidata

> **Object** putConversationsCallParticipantCommunicationUuidata(conversationId, participantId, communicationId, body)


PUT /api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/uuidata

Set uuiData to be sent on future commands.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let participantId = "participantId_example"; // String | participantId
let communicationId = "communicationId_example"; // String | communicationId
let body = {}; // Object | UUIData Request

apiInstance.putConversationsCallParticipantCommunicationUuidata(conversationId, participantId, communicationId, body)
  .then((data) => {
    console.log(`putConversationsCallParticipantCommunicationUuidata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsCallParticipantCommunicationUuidata');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | UUIData Request |  |

### Return type

**Object**


## putConversationsCallRecordingstate

> **&#39;String&#39;** putConversationsCallRecordingstate(conversationId, body)


PUT /api/v2/conversations/calls/{conversationId}/recordingstate

Update a conversation by setting its recording state

Requires ANY permissions:

* conversation:recording:pauseOthers

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | SetRecordingState

apiInstance.putConversationsCallRecordingstate(conversationId, body)
  .then((data) => {
    console.log(`putConversationsCallRecordingstate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsCallRecordingstate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | SetRecordingState |  |

### Return type

**&#39;String&#39;**


## putConversationsCallbackRecordingstate

> **&#39;String&#39;** putConversationsCallbackRecordingstate(conversationId, body)


PUT /api/v2/conversations/callbacks/{conversationId}/recordingstate

Update a conversation by setting its recording state

Requires ANY permissions:

* conversation:recording:pauseOthers

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | SetRecordingState

apiInstance.putConversationsCallbackRecordingstate(conversationId, body)
  .then((data) => {
    console.log(`putConversationsCallbackRecordingstate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsCallbackRecordingstate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | SetRecordingState |  |

### Return type

**&#39;String&#39;**


## putConversationsChatRecordingstate

> **&#39;String&#39;** putConversationsChatRecordingstate(conversationId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PUT /api/v2/conversations/chats/{conversationId}/recordingstate

Update a conversation by setting its recording state

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/.

Requires ANY permissions:

* conversation:recording:pauseOthers

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | SetRecordingState

apiInstance.putConversationsChatRecordingstate(conversationId, body)
  .then((data) => {
    console.log(`putConversationsChatRecordingstate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsChatRecordingstate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | SetRecordingState |  |

### Return type

**&#39;String&#39;**


## putConversationsCobrowsesessionRecordingstate

> **&#39;String&#39;** putConversationsCobrowsesessionRecordingstate(conversationId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PUT /api/v2/conversations/cobrowsesessions/{conversationId}/recordingstate

Update a conversation by setting its recording state

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/

Requires ANY permissions:

* conversation:recording:pauseOthers

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | SetRecordingState

apiInstance.putConversationsCobrowsesessionRecordingstate(conversationId, body)
  .then((data) => {
    console.log(`putConversationsCobrowsesessionRecordingstate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsCobrowsesessionRecordingstate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | SetRecordingState |  |

### Return type

**&#39;String&#39;**


## putConversationsEmailMessagesDraft

> EmailMessage putConversationsEmailMessagesDraft(conversationId, body)


PUT /api/v2/conversations/emails/{conversationId}/messages/draft

Update conversation draft reply

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | Draft

apiInstance.putConversationsEmailMessagesDraft(conversationId, body)
  .then((data) => {
    console.log(`putConversationsEmailMessagesDraft success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsEmailMessagesDraft');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Draft |  |

### Return type

**EmailMessage**


## putConversationsEmailRecordingstate

> **&#39;String&#39;** putConversationsEmailRecordingstate(conversationId, body)


PUT /api/v2/conversations/emails/{conversationId}/recordingstate

Update a conversation by setting its recording state

Requires ANY permissions:

* conversation:recording:pauseOthers

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | SetRecordingState

apiInstance.putConversationsEmailRecordingstate(conversationId, body)
  .then((data) => {
    console.log(`putConversationsEmailRecordingstate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsEmailRecordingstate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | SetRecordingState |  |

### Return type

**&#39;String&#39;**


## putConversationsKeyconfiguration

> ConversationEncryptionConfiguration putConversationsKeyconfiguration(keyconfigurationsId, body)


PUT /api/v2/conversations/keyconfigurations/{keyconfigurationsId}

Update the encryption key configurations

Requires ANY permissions:

* conversation:encryptionKey:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let keyconfigurationsId = "keyconfigurationsId_example"; // String | Key Configurations Id
let body = {}; // Object | Encryption key configuration metadata

apiInstance.putConversationsKeyconfiguration(keyconfigurationsId, body)
  .then((data) => {
    console.log(`putConversationsKeyconfiguration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsKeyconfiguration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **keyconfigurationsId** | **String** | Key Configurations Id |  |
 **body** | **Object** | Encryption key configuration metadata |  |

### Return type

**ConversationEncryptionConfiguration**


## putConversationsMessageRecordingstate

> **&#39;String&#39;** putConversationsMessageRecordingstate(conversationId, body)


PUT /api/v2/conversations/messages/{conversationId}/recordingstate

Update a conversation by setting its recording state

Requires ANY permissions:

* conversation:recording:pauseOthers

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | SetRecordingState

apiInstance.putConversationsMessageRecordingstate(conversationId, body)
  .then((data) => {
    console.log(`putConversationsMessageRecordingstate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsMessageRecordingstate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | SetRecordingState |  |

### Return type

**&#39;String&#39;**


## putConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId

> IdentityResolutionConfig putConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId(integrationId, body)


PUT /api/v2/conversations/messaging/identityresolution/integrations/apple/{integrationId}

Create an identity resolution settings for a Apple messaging integration

putConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* messaging:integration:edit
* messaging:identityResolutionApple:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID
let body = {}; // Object | IdentityResolutionConfig

apiInstance.putConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId(integrationId, body)
  .then((data) => {
    console.log(`putConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **body** | **Object** | IdentityResolutionConfig |  |

### Return type

**IdentityResolutionConfig**


## putConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId

> IdentityResolutionConfig putConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId(integrationId, body)


PUT /api/v2/conversations/messaging/identityresolution/integrations/facebook/{integrationId}

Create an identity resolution settings for a Facebook messaging integration

Requires ALL permissions:

* messaging:integration:edit
* messaging:identityResolutionFacebook:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID
let body = {}; // Object | IdentityResolutionConfig

apiInstance.putConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId(integrationId, body)
  .then((data) => {
    console.log(`putConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **body** | **Object** | IdentityResolutionConfig |  |

### Return type

**IdentityResolutionConfig**


## putConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId

> IdentityResolutionConfig putConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId(integrationId, body)


PUT /api/v2/conversations/messaging/identityresolution/integrations/instagram/{integrationId}

Create identity resolution settings for an Instagram messaging integration

Requires ALL permissions:

* messaging:integration:edit
* messaging:identityResolutionInstagram:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID
let body = {}; // Object | IdentityResolutionConfig

apiInstance.putConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId(integrationId, body)
  .then((data) => {
    console.log(`putConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **body** | **Object** | IdentityResolutionConfig |  |

### Return type

**IdentityResolutionConfig**


## putConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId

> OpenMessagingIdentityResolutionConfig putConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId(integrationId, body)


PUT /api/v2/conversations/messaging/identityresolution/integrations/open/{integrationId}

Update an open messaging integration Identity Resolution settings

Requires ALL permissions:

* messaging:integration:edit
* messaging:identityResolutionOpen:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID
let body = {}; // Object | 

apiInstance.putConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId(integrationId, body)
  .then((data) => {
    console.log(`putConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **body** | **Object** |  |  |

### Return type

**OpenMessagingIdentityResolutionConfig**


## putConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId

> IdentityResolutionConfig putConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId(integrationId, body)


PUT /api/v2/conversations/messaging/identityresolution/integrations/twitter/{integrationId}

Create an identity resolution settings for an X (Formally Twitter) messaging integration

Requires ALL permissions:

* messaging:XIntegration:edit
* messaging:identityResolutionX:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration Id
let body = {}; // Object | IdentityResolutionConfig

apiInstance.putConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId(integrationId, body)
  .then((data) => {
    console.log(`putConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration Id |  |
 **body** | **Object** | IdentityResolutionConfig |  |

### Return type

**IdentityResolutionConfig**


## putConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId

> IdentityResolutionConfig putConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId(integrationId, body)


PUT /api/v2/conversations/messaging/identityresolution/integrations/whatsapp/{integrationId}

Update a whatsApp integration Identity Resolution settings

Requires ALL permissions:

* messaging:integration:edit
* messaging:identityResolutionWhatsApp:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let integrationId = "integrationId_example"; // String | Integration ID
let body = {}; // Object | 

apiInstance.putConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId(integrationId, body)
  .then((data) => {
    console.log(`putConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **body** | **Object** |  |  |

### Return type

**IdentityResolutionConfig**


## putConversationsMessagingSettingsDefault

> MessagingSetting putConversationsMessagingSettingsDefault(body)


PUT /api/v2/conversations/messaging/settings/default

Set the organization's default setting that may be applied to to integrations without settings

When an integration is created a settings ID may be assigned to it. If the settings ID is not supplied, the default settings will be assigned to it.

Requires ALL permissions:

* messaging:setting:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | MessagingSetting

apiInstance.putConversationsMessagingSettingsDefault(body)
  .then((data) => {
    console.log(`putConversationsMessagingSettingsDefault success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsMessagingSettingsDefault');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | MessagingSetting |  |

### Return type

**MessagingSetting**


## putConversationsMessagingSupportedcontentDefault

> SupportedContent putConversationsMessagingSupportedcontentDefault(body)


PUT /api/v2/conversations/messaging/supportedcontent/default

Set the organization's default supported content profile that may be assigned to an integration when it is created.

When an integration is created a supported content ID may be assigned to it. If the supported content ID is not supplied, the default supported content profile will be assigned to it.

Requires ALL permissions:

* messaging:supportedContent:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | SupportedContent

apiInstance.putConversationsMessagingSupportedcontentDefault(body)
  .then((data) => {
    console.log(`putConversationsMessagingSupportedcontentDefault success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsMessagingSupportedcontentDefault');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | SupportedContent |  |

### Return type

**SupportedContent**


## putConversationsMessagingThreadingtimeline

> ConversationThreadingWindow putConversationsMessagingThreadingtimeline(body)


PUT /api/v2/conversations/messaging/threadingtimeline

Update conversation threading window timeline for each messaging type

PUT Conversation messaging threading timeline is intended to set the conversation threading settings for ALL messengerTypes. If you omit a messengerType in the request body then the setting for that messengerType will use the platform default value. The PUT replaces the existing setting(s) that were previously set for each messengerType.

Requires ALL permissions:

* conversation:threadingTimeline:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let body = {}; // Object | ConversationThreadingWindowRequest

apiInstance.putConversationsMessagingThreadingtimeline(body)
  .then((data) => {
    console.log(`putConversationsMessagingThreadingtimeline success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsMessagingThreadingtimeline');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ConversationThreadingWindowRequest |  |

### Return type

**ConversationThreadingWindow**


## putConversationsScreenshareRecordingstate

> **&#39;String&#39;** putConversationsScreenshareRecordingstate(conversationId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PUT /api/v2/conversations/screenshares/{conversationId}/recordingstate

Update a conversation by setting its recording state

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/

Requires ANY permissions:

* conversation:recording:pauseOthers

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | SetRecordingState

apiInstance.putConversationsScreenshareRecordingstate(conversationId, body)
  .then((data) => {
    console.log(`putConversationsScreenshareRecordingstate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsScreenshareRecordingstate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | SetRecordingState |  |

### Return type

**&#39;String&#39;**


## putConversationsSocialRecordingstate

> **&#39;String&#39;** putConversationsSocialRecordingstate(conversationId, body)


PUT /api/v2/conversations/socials/{conversationId}/recordingstate

Update a conversation by setting its recording state

Requires ANY permissions:

* conversation:recording:pauseOthers

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | SetRecordingState

apiInstance.putConversationsSocialRecordingstate(conversationId, body)
  .then((data) => {
    console.log(`putConversationsSocialRecordingstate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsSocialRecordingstate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | SetRecordingState |  |

### Return type

**&#39;String&#39;**


## putConversationsVideoRecordingstate

> **&#39;String&#39;** putConversationsVideoRecordingstate(conversationId, body)


PUT /api/v2/conversations/videos/{conversationId}/recordingstate

Update a conversation by setting its recording state

Requires ANY permissions:

* conversation:recording:pauseOthers

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ConversationsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | SetRecordingState

apiInstance.putConversationsVideoRecordingstate(conversationId, body)
  .then((data) => {
    console.log(`putConversationsVideoRecordingstate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsVideoRecordingstate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | SetRecordingState |  |

### Return type

**&#39;String&#39;**


_purecloud-platform-client-v2@229.1.0_
