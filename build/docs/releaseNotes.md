Platform API version: 9375




# Major Changes (23 changes)

**/api/v2/workforcemanagement/historicaldata/deletejob** (1 change)

* Path /api/v2/workforcemanagement/historicaldata/deletejob was removed

**GET /api/v2/integrations/credentials** (1 change)

* Has been deprecated

**GET /api/v2/routing/queues/{queueId}/wrapupcodes** (1 change)

* Parameter name was added

**ContentAttachment** (1 change)

* Model ContentAttachment was removed

**ContentGeneric** (1 change)

* Model ContentGeneric was removed

**ContentList** (1 change)

* Model ContentList was removed

**ContentLocation** (1 change)

* Model ContentLocation was removed

**ContentNotificationTemplate** (1 change)

* Model ContentNotificationTemplate was removed

**ContentPostback** (1 change)

* Model ContentPostback was removed

**ContentQuickReply** (1 change)

* Model ContentQuickReply was removed

**ContentQuickReplyV2** (1 change)

* Model ContentQuickReplyV2 was removed

**ContentStory** (1 change)

* Model ContentStory was removed

**ContentText** (1 change)

* Model ContentText was removed

**ListItemComponent** (1 change)

* Model ListItemComponent was removed

**MessageContent** (1 change)

* Model MessageContent was removed

**MessagingRecipient** (1 change)

* Model MessagingRecipient was removed

**NotificationTemplateBody** (1 change)

* Model NotificationTemplateBody was removed

**NotificationTemplateButton** (1 change)

* Model NotificationTemplateButton was removed

**NotificationTemplateFooter** (1 change)

* Model NotificationTemplateFooter was removed

**NotificationTemplateHeader** (1 change)

* Model NotificationTemplateHeader was removed

**NotificationTemplateParameter** (1 change)

* Model NotificationTemplateParameter was removed

**HistoricalImportDeleteJobResponse** (1 change)

* Model HistoricalImportDeleteJobResponse was removed

**TextBotPromptSegment** (1 change)

* Property content was changed from MessageContent[] to ConversationMessageContent[]


# Minor Changes (45 changes)

**/api/v2/conversations/calls/{conversationId}/participants/{participantId}/voice/consult** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult/contact/external** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/{conversationId}/participants/{participantId}/transfer** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/{conversationId}/participants/{participantId}/replace/contact/external** (2 changes)

* Path was added
* Operation POST was added

**AnalyticsConversationWithoutAttributes** (1 change)

* Optional property inactivityTimeout was added

**AnalyticsConversation** (1 change)

* Optional property inactivityTimeout was added

**ViewFilter** (2 changes)

* Enum value INBOUND_AUDIO_COUNT was added to property viewMetrics
* Enum value OUTBOUND_AUDIO_COUNT was added to property viewMetrics

**Widget** (2 changes)

* Enum value INBOUND_AUDIO_COUNT was added to property metrics
* Enum value OUTBOUND_AUDIO_COUNT was added to property metrics

**ConversationMessageMetadataContent** (1 change)

* Enum value RoadsideAssistance was added to property contentType

**ConversationContentRoadsideAssistance** (1 change)

* Model was added

**ConversationMessageContent** (1 change)

* Enum value RoadsideAssistance was added to property contentType

**ContestUserRank** (1 change)

* Optional property score was added

**ContestWinners** (1 change)

* Optional property winnersCount was added

**ButtonResponse** (1 change)

* Optional property originatingMessageId was added

**DatePicker** (2 changes)

* Optional property id was added
* Optional property dateSelected was added

**ListPicker** (1 change)

* Optional property id was added

**ReceivedReplyMessage** (1 change)

* Model was added

**RecordingForm** (1 change)

* Model was added

**RecordingFormPage** (1 change)

* Model was added

**RecordingFormPageComponent** (1 change)

* Model was added

**RecordingFormResponseComponent** (1 change)

* Model was added

**RecordingFormResponseContent** (1 change)

* Model was added

**RecordingInput** (1 change)

* Model was added

**RecordingIntroduction** (1 change)

* Model was added

**RecordingMessagingMessage** (1 change)

* Enum value Form was added to property contentType

**RecordingWheelPicker** (1 change)

* Model was added

**RecordingWheelPickerItem** (1 change)

* Model was added

**VoicemailMailboxInfo** (3 changes)

* Optional property id was added
* Optional property ownerType was added
* Optional property selfUri was added

**LearningModuleAutoAssignResponse** (1 change)

* Model was added

**UsersRulesRuleReference** (1 change)

* Model was added

**LearningModuleAutoAssignRequest** (1 change)

* Model was added

**LearningModuleJobRequest** (1 change)

* Enum value Assign was added to property action

**ConsultTransferToAddress** (1 change)

* Model was added

**ConsultTransferToExternalContact** (1 change)

* Model was added

**TransferToAddressRequest** (1 change)

* Model was added

**TransferToExternalContactRequest** (1 change)

* Model was added


# Point Changes (1 change)

**GET /api/v2/integrations/credentials** (1 change)

* Description was changed
