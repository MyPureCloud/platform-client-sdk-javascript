Platform API version: 8835




# Major Changes (2 changes)

**/api/v2/routing/sms/phonenumbers/{phoneNumberId}** (1 change)

* Operation PUT was removed

**IdentityProviderEntityListing** (1 change)

* Property entities was changed from IdentityProvider[] to CustomProvider[]


# Minor Changes (45 changes)

**/api/v2/alerting/alerts/all** (3 changes)

* Path was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/speechandtextanalytics/conversations/{conversationId}/summaries** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/speechandtextanalytics/programs/{programId}/settings/insights** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/speechandtextanalytics/programs/settings/insights** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/externalid/{authorityName}/{externalKey}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/{userId}/externalid/{authorityName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/{userId}/externalid** (1 change)

* Operation get was added. Summary: Get the external identifiers for a user.

**/api/v2/users/{userId}/externalid/{authorityName}/{externalKey}** (2 changes)

* Path was added
* Operation DELETE was added

**CustomProvider** (1 change)

* Optional property displayOnLogin was added

**AnalyticsSession** (1 change)

* Enum value DeliveryPushed was added to property deliveryStatus

**ViewFilter** (3 changes)

* Enum value DeliveryPushed was added to property emailDeliveryStatusList
* Optional property evaluationRole was added
* Optional property comparisonQueueIds was added

**ReportingExportJobResponse** (1 change)

* Enum value AGENT_ASSIGNED_EVALUATION_ME_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (1 change)

* Enum value AGENT_ASSIGNED_EVALUATION_ME_VIEW was added to property viewType

**ReportingExportJobRequest** (1 change)

* Enum value AGENT_ASSIGNED_EVALUATION_ME_VIEW was added to property viewType

**ChatSettings** (1 change)

* Optional property reactionsEnabled was added

**CampaignRule** (1 change)

* Optional property warnings was added

**CampaignRuleActionEntities** (2 changes)

* Optional property emailCampaigns was added
* Optional property smsCampaigns was added

**CampaignRuleEntities** (2 changes)

* Optional property emailCampaigns was added
* Optional property smsCampaigns was added

**CampaignRuleParameters** (2 changes)

* Optional property smsMessagesPerMinute was added
* Optional property emailMessagesPerMinute was added

**CommonAllAlertUpdateRequest** (1 change)

* Model was added

**SpeechTextAnalyticsConversationSummary** (1 change)

* Model was added

**SpeechTextAnalyticsConversationSummaryListing** (1 change)

* Model was added

**ProgramInsightsSettings** (1 change)

* Model was added

**InsightsSettingsRequest** (1 change)

* Model was added

**ProgramInsightsSettingsEntityListing** (1 change)

* Model was added

**ShiftTradeMatchViolation** (6 changes)

* Enum value InitiatingAgentMinimumTimeBetweenShifts was added to property type
* Enum value InitiatingPlanningPeriodMaxPaidTime was added to property type
* Enum value InitiatingPlanningPeriodMinPaidTime was added to property type
* Enum value ReceivingAgentMinimumTimeBetweenShifts was added to property type
* Enum value ReceivingPlanningPeriodMaxPaidTime was added to property type
* Enum value ReceivingPlanningPeriodMinPaidTime was added to property type


# Point Changes (0 changes)
