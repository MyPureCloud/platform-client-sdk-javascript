Platform API version: 5677


# Major Changes (13 changes)

**/api/v2/gamification/profiles/{performanceProfileId}** (1 change)

* Path /api/v2/gamification/profiles/{performanceProfileId} was removed

**/api/v2/gamification/profiles/{performanceProfileId}/activate** (1 change)

* Path /api/v2/gamification/profiles/{performanceProfileId}/activate was removed

**/api/v2/gamification/profiles/{performanceProfileId}/deactivate** (1 change)

* Path /api/v2/gamification/profiles/{performanceProfileId}/deactivate was removed

**GET /api/v2/integrations/actions/drafts** (1 change)

* Parameter ids was added

**GET /api/v2/integrations/actions** (1 change)

* Parameter ids was added

**GET /api/v2/routing/email/domains** (1 change)

* Parameter excludeStatus was added

**ConversationCardAction** (1 change)

* Model ConversationCardAction was removed

**Calibration** (1 change)

* Property conversation was changed from Conversation to ConversationReference

**Evaluation** (1 change)

* Property conversation was changed from Conversation to ConversationReference

**ConversationContentCard** (2 changes)

* Property defaultAction was changed from ConversationCardAction to ConversationContentCardAction
* Property actions was changed from ConversationCardAction[] to ConversationContentCardAction[]

**CalibrationCreate** (1 change)

* Property conversation was changed from Conversation to ConversationReference

**CardAction** (1 change)

* Property selected was removed


# Minor Changes (45 changes)

**/api/v2/recording/keyconfigurations/{keyConfigurationId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/recording/keyconfigurations** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/recording/keyconfigurations/validate** (2 changes)

* Path was added
* Operation POST was added

**POST /api/v2/conversations/messaging/integrations/whatsapp** (1 change)

* Response 202 was added

**/api/v2/gamification/profiles/{profileId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/gamification/profiles/{profileId}/activate** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/gamification/profiles/{profileId}/deactivate** (2 changes)

* Path was added
* Operation POST was added

**ReportingExportJobResponse** (1 change)

* Enum value PREDICTIVE_ROUTING_MODEL_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (1 change)

* Enum value PREDICTIVE_ROUTING_MODEL_VIEW was added to property viewType

**ReportingExportJobRequest** (1 change)

* Enum value PREDICTIVE_ROUTING_MODEL_VIEW was added to property viewType

**MemberGroup** (1 change)

* Enum value SKILLGROUP was added to property type

**RecordingEncryptionConfiguration** (1 change)

* Model was added

**RecordingEncryptionConfigurationListing** (1 change)

* Model was added

**MessageDetails** (1 change)

* Optional property errorInfo was added

**DynamicContactQueueingSettings** (1 change)

* Model was added

**ConversationContentCardAction** (1 change)

* Model was added

**WhatsAppAvailablePhoneNumberDetails** (1 change)

* Model was added

**WhatsAppAvailablePhoneNumberDetailsListing** (1 change)

* Model was added

**WhatsAppIntegration** (1 change)

* Optional property availablePhoneNumbers was added

**WhatsAppIntegrationUpdateRequest** (2 changes)

* name is no longer readonly
* Optional property phoneNumber was added

**ContentCard** (1 change)

* Model was added

**ContentCardAction** (1 change)

* Model was added

**ContentCarousel** (1 change)

* Model was added

**ContentStory** (1 change)

* Model was added

**MessageContent** (6 changes)

* Enum value Story was added to property contentType
* Enum value Card was added to property contentType
* Enum value Carousel was added to property contentType
* Optional property story was added
* Optional property card was added
* Optional property carousel was added

**MessagingRecipient** (1 change)

* Optional property additionalIds was added

**CardAction** (1 change)

* Optional property isSelected was added

**UserScheduleAdherence** (1 change)

* Enum value Explained was added to property adherenceState

**AdherenceExplanationNotification** (2 changes)

* Optional property managementUnit was added
* Optional property businessUnit was added


# Point Changes (10 changes)

**PATCH /api/v2/conversations/messaging/integrations/whatsapp/{integrationId}** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/integrations/actions/drafts** (3 changes)

* Description was changed for parameter category
* Description was changed for parameter name
* Description was changed for parameter secure

**GET /api/v2/integrations/actions** (3 changes)

* Description was changed for parameter category
* Description was changed for parameter name
* Description was changed for parameter secure

**POST /api/v2/recording/jobs** (2 changes)

* Description was changed
* Summary was changed
