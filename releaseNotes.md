Platform API version: 6926


# Major Changes (7 changes)

**/api/v2/stations/settings** (1 change)

* Path /api/v2/stations/settings was removed

**GET /api/v2/responsemanagement/libraries** (1 change)

* Parameter libraryPrefix was added

**GET /api/v2/infrastructureascode/jobs** (3 changes)

* Parameter acceleratorId was added
* Parameter submittedBy was added
* Parameter status was added

**FreeSeatingConfiguration** (1 change)

* Model FreeSeatingConfiguration was removed

**StationSettings** (1 change)

* Model StationSettings was removed


# Minor Changes (64 changes)

**/api/v2/carrierservices/integrations/emergencylocations/me** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/conversations/emails/{conversationId}/messages/draft** (1 change)

* Operation patch was added. Summary: Reset conversation draft to its initial state and/or auto-fill draft content

**/api/v2/outbound/messagingcampaigns/{messagingCampaignId}/diagnostics** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/infrastructureascode/accelerators/{acceleratorId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/infrastructureascode/accelerators** (2 changes)

* Path was added
* Operation GET was added

**BotAggregateQueryPredicate** (1 change)

* Enum value languageCode was added to property dimension

**BotAggregationQuery** (1 change)

* Enum value languageCode was added to property groupBy

**AnalyticsConversationWithoutAttributes** (1 change)

* Optional property conferenceStart was added

**EvaluationDetailQueryPredicate** (1 change)

* Enum value evaluationStatus was added to property dimension

**AnalyticsConversation** (1 change)

* Optional property conferenceStart was added

**EvaluationAggregateQueryPredicate** (2 changes)

* Enum value assigneeId was added to property dimension
* Enum value evaluationContextId was added to property dimension

**EvaluationAggregationQuery** (2 changes)

* Enum value assigneeId was added to property groupBy
* Enum value evaluationContextId was added to property groupBy

**JourneyAggregateQueryPredicate** (2 changes)

* Enum value touchpointRequestedRouting was added to property dimension
* Enum value touchpointUsedRouting was added to property dimension

**JourneyAggregationQuery** (2 changes)

* Enum value touchpointRequestedRouting was added to property groupBy
* Enum value touchpointUsedRouting was added to property groupBy

**ViewFilter** (2 changes)

* Enum value TransferToACD was added to property botResultList
* Optional property isClearedByCustomer was added

**ReportingExportJobResponse** (2 changes)

* Enum value DASHBOARD_USERS was added to property viewType
* Optional property includeDurationFormatInHeader was added

**ReportingExportMetadataJobResponse** (1 change)

* Enum value DASHBOARD_USERS was added to property viewType

**ReportingExportJobRequest** (2 changes)

* Enum value DASHBOARD_USERS was added to property viewType
* Optional property includeDurationFormatInHeader was added

**EmergencyLocation** (1 change)

* Model was added

**ConversationMessageMetadataEvent** (1 change)

* Enum value Clear was added to property subType

**TransferResponse** (1 change)

* Optional property modifiedBy was added

**TransferResponseModifiedBy** (1 change)

* Model was added

**Settings** (1 change)

* Optional property allowCallbackQueueSelection was added

**DraftManipulationRequest** (1 change)

* Model was added

**HistoryHeadersTranslation** (1 change)

* Model was added

**ConversationEventPresence** (1 change)

* Enum value Clear was added to property type

**CampaignDiagnostics** (1 change)

* Optional property timeZoneRescheduledCallsCount was added

**CampaignStats** (1 change)

* Optional property timeZoneRescheduledCalls was added

**EventMessage** (1 change)

* Enum value DIGITAL_RULE_ERROR_SKIPPED was added to property code

**OutboundSettings** (1 change)

* Optional property rescheduleTimeZoneSkippedContacts was added

**MessagingCampaignDiagnostics** (1 change)

* Model was added

**ActionMap** (1 change)

* Optional property triggerWithOutcomePercentileConditions was added

**OutcomePercentileCondition** (1 change)

* Model was added

**PatchActionMap** (1 change)

* Optional property triggerWithOutcomePercentileConditions was added

**EvaluationAggregationQueryMe** (2 changes)

* Enum value assigneeId was added to property groupBy
* Enum value evaluationContextId was added to property groupBy

**AcceleratorSpecification** (1 change)

* Model was added

**MetadataDocumentation** (1 change)

* Model was added

**MetadataPresentation** (1 change)

* Model was added

**MetadataProperty** (1 change)

* Model was added

**MetadataResultEntity** (1 change)

* Model was added

**MetadataResults** (1 change)

* Model was added

**MetadataSchema** (1 change)

* Model was added

**AcceleratorList** (1 change)

* Model was added

**AcceleratorMetadata** (1 change)

* Model was added

**InfrastructureascodeJob** (1 change)

* Optional property acceleratorId was added

**ConversationAppSettings** (1 change)

* Optional property conversationClear was added

**ConversationClearSettings** (1 change)

* Model was added

**LearningModuleInformStep** (2 changes)

* Optional property displayName was added
* Optional property description was added

**LearningModuleInformStepRequest** (2 changes)

* Optional property displayName was added
* Optional property description was added


# Point Changes (3 changes)

**POST /api/v2/externalcontacts/merge/contacts** (1 change)

* Description was changed

**PUT /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}** (1 change)

* Description was changed for parameter expand

**GET /api/v2/conversations/{conversationId}/recordingmetadata** (1 change)

* Summary was changed
