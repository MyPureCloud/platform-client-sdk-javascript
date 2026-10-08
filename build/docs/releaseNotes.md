Platform API version: 10857




# Major Changes (4 changes)

**GET /api/v2/authorization/subjects/me** (1 change)

* Parameter includeFullRoles was added

**GET /api/v2/authorization/subjects/{subjectId}** (1 change)

* Parameter includeFullRoles was added

**Case** (1 change)

* Property name was removed

**ActivityPlanJobResponse** (1 change)

* Enum value MaximizeOccurrence was removed from property type


# Minor Changes (32 changes)

**ViewFilter** (1 change)

* Enum value LinkedIn was added to property socialChannels

**ChecklistTransferConfig** (1 change)

* Model was added

**SummaryTransferConfig** (1 change)

* Model was added

**RoleSettings** (1 change)

* Optional property genesysOrgPolicyBypass was added

**ConversationContentThumbnail** (1 change)

* Model was added

**MessageData** (1 change)

* Enum value linkedin was added to property messengerType

**SocialMediaMessageData** (1 change)

* Enum value linkedin was added to property messengerType

**OpenContentAttachment** (1 change)

* Optional property thumbnail was added

**OpenContentThumbnail** (1 change)

* Model was added

**MessagingIntegration** (1 change)

* Enum value linkedin was added to property messengerType

**ConversationThreadingWindowSetting** (1 change)

* Enum value linkedin was added to property messengerType

**WhatsAppEmbeddedSignupIntegrationActivationRequest** (1 change)

* name is no longer readonly

**SuggestionContext** (1 change)

* Optional property language was added

**SummarySettingParticipantLabels** (1 change)

* Optional property virtualAgent was added

**CustomConversationAttributeOutput** (1 change)

* Model was added

**CustomConversationAttributeUpdate** (1 change)

* Model was added

**GuideSessionTurnResponse** (1 change)

* Optional property context was added

**GuideSessionTurnResponseContext** (1 change)

* Model was added

**CustomConversationAttributeInput** (1 change)

* Model was added

**GuideSessionMessage** (1 change)

* Model was added

**GuideSessionTurnRequest** (1 change)

* Optional property context was added

**GuideSessionTurnRequestContext** (1 change)

* Model was added

**TtsVoiceEntity** (2 changes)

* Enum value LongForm was added to property voiceType
* Enum value Unknown was added to property voiceType

**Recipient** (1 change)

* Enum value linkedin was added to property messengerType

**ActivityPlanJobResponse** (1 change)

* Enum value RunOccurrence was added to property type

**AlternativeShiftTradeResponse** (1 change)

* Optional property reviewNote was added

**CreateAlternativeShiftTradeRequest** (1 change)

* Optional property reviewNote was added

**AgentUpdateAlternativeShiftTradeRequest** (1 change)

* Optional property reviewNote was added

**ShiftTradeInitiatingSideResponseItem** (1 change)

* Optional property reviewNote was added

**AddShiftTradeJobRequest** (1 change)

* Optional property reviewNote was added

**UpdateShiftTradeJobRequest** (1 change)

* Optional property reviewNote was added


# Point Changes (3 changes)

**PATCH /api/v2/conversations/messaging/integrations/whatsapp/embeddedsignup/{integrationId}** (1 change)

* Description was changed

**GET /api/v2/orphanrecordings** (2 changes)

* Summary was changed
* Description was changed for parameter hasConversation
