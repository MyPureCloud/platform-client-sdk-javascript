Platform API version: 10494




# Major Changes (17 changes)

**ParticipantDataProperties** (1 change)

* Model ParticipantDataProperties was removed

**ContentFileResponse** (1 change)

* Model ContentFileResponse was removed

**DocumentBodyResponse** (1 change)

* Model DocumentBodyResponse was removed

**KnowledgeDocumentDescriptor** (1 change)

* Model KnowledgeDocumentDescriptor was removed

**KnowledgeDocumentCreateRequest** (1 change)

* Model KnowledgeDocumentCreateRequest was removed

**ContentFileRequest** (1 change)

* Model ContentFileRequest was removed

**DocumentBodyRequest** (1 change)

* Model DocumentBodyRequest was removed

**CopilotContextValue** (2 changes)

* Property participantDataProperties was removed
* Enum value ParticipantData was removed from property type

**DocumentVariationResponse** (1 change)

* Property body was changed from DocumentBodyResponse to DocumentBody

**DocumentVariationRequest** (1 change)

* Property body was changed from DocumentBodyRequest to DocumentBody

**KnowledgeDocumentVersionVariation** (1 change)

* Property body was changed from DocumentBodyResponse to DocumentBody

**KnowledgeDocumentQueryVariation** (1 change)

* Property body was changed from DocumentBodyResponse to DocumentBody

**KnowledgeExportJobDocumentsFilter** (1 change)

* Property includeDocumentsWithFileBody was removed

**KnowledgeGuestDocumentVariation** (1 change)

* Property body was changed from DocumentBodyResponse to DocumentBody

**WorkPlanBid** (2 changes)

* Required property bidType was added
* Required property endOverridesAndRotations was added


# Minor Changes (142 changes)

**/api/v2/workforcemanagement/schedulebids** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/schedulebids/{bidId}/preference** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/workforcemanagement/schedulebids/{bidId}/schedulesets** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids/{bidId}/groups/{bidGroupId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids/{bidId}/groups/summary** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids/{bidId}/groups** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids/{bidId}/groups/{bidGroupId}/preferences** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids/{bidId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids/{bidId}/copy** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids/effectiveschedulesets** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/flows/validate/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/flows/validate/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**OrgAuthSettings** (1 change)

* Optional property universalLogout was added

**AgentStateActivityCategoryCount** (1 change)

* Enum value Unknown was added to property activityCategory

**CaseManagementAggregateQueryPredicate** (5 changes)

* Enum value associationType was added to property dimension
* Enum value conversationId was added to property dimension
* Enum value stageId was added to property dimension
* Enum value stepId was added to property dimension
* Enum value workitemId was added to property dimension

**CaseManagementAggregationQuery** (7 changes)

* Enum value associationType was added to property groupBy
* Enum value conversationId was added to property groupBy
* Enum value stageId was added to property groupBy
* Enum value stepId was added to property groupBy
* Enum value workitemId was added to property groupBy
* Enum value nCaseAssociationsCreated was added to property metrics
* Enum value nCasesDeleted was added to property metrics

**CaseManagementAggregationSort** (2 changes)

* Enum value nCaseAssociationsCreated was added to property name
* Enum value nCasesDeleted was added to property name

**CaseManagementAggregationView** (2 changes)

* Enum value nCaseAssociationsCreated was added to property target
* Enum value nCasesDeleted was added to property target

**CaseManagementAsyncAggregationQuery** (7 changes)

* Enum value associationType was added to property groupBy
* Enum value conversationId was added to property groupBy
* Enum value stageId was added to property groupBy
* Enum value stepId was added to property groupBy
* Enum value workitemId was added to property groupBy
* Enum value nCaseAssociationsCreated was added to property metrics
* Enum value nCasesDeleted was added to property metrics

**AnalyticsSession** (1 change)

* Optional property errorCodeDescription was added

**ReportingExportJobResponse** (1 change)

* Enum value AGENTIC_VIRTUAL_AGENT_PERFORMANCE_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (1 change)

* Enum value AGENTIC_VIRTUAL_AGENT_PERFORMANCE_VIEW was added to property viewType

**ReportingExportJobRequest** (1 change)

* Enum value AGENTIC_VIRTUAL_AGENT_PERFORMANCE_VIEW was added to property viewType

**QueryProcessingConfig** (1 change)

* Model was added

**CaseplanQueryRequest** (1 change)

* Optional property nameSearchType was added

**ContactIdentifier** (1 change)

* Enum value SocialWhatsappBsuid was added to property type

**WhatsAppBusinessScopedId** (1 change)

* Model was added

**ContactsExport** (2 changes)

* Optional property dateCompletion was added
* Optional property resultRowCount was added

**ContactsExportComparisonFieldFilter** (1 change)

* Model was added

**ContactsExportFilter** (2 changes)

* Optional property lte was added
* Optional property gte was added

**DisconnectReason** (1 change)

* Optional property reason was added

**ConversationSummaryEditedBy** (1 change)

* Model was added

**ConversationSummaryTriggerSource** (1 change)

* Model was added

**CallableTime** (1 change)

* Optional property name was added

**ContactPhoneNumberColumn** (1 change)

* Optional property callableTimeColumnName was added

**EmailColumn** (1 change)

* Optional property contactableTimeColumnName was added

**WhatsAppColumn** (2 changes)

* Optional property contactableTimeColumnName was added
* Optional property contactableTimeColumn was added

**OperationalEvent** (2 changes)

* Optional property phoneNumber was added
* Optional property externalContactId was added

**RecordingNotificationTemplate** (1 change)

* Optional property carousel was added

**MessageHeader** (1 change)

* Enum value Document was added to property type

**RatingFilter** (1 change)

* Model was added

**OpenSocialMediaPublicMetadata** (2 changes)

* Optional property mentionIds was added
* Optional property tagIds was added

**DictionaryFeedback** (2 changes)

* Enum value Invalid was added to property status
* Optional property invalidReason was added

**ListedDictionaryFeedback** (2 changes)

* Enum value Invalid was added to property status
* Optional property invalidReason was added

**ArchitectExportJobStateResponse** (1 change)

* Enum value Validate was added to property command

**ArchitectJobStateResponse** (1 change)

* Enum value Validate was added to property command

**AgentScheduleBid** (1 change)

* Model was added

**AgentScheduleBids** (1 change)

* Model was added

**AgentScheduleBiddingPreferencePriority** (1 change)

* Model was added

**AgentScheduleBiddingPreferenceResponse** (1 change)

* Model was added

**UpdateAgentScheduleBiddingPreference** (1 change)

* Model was added

**AgentScheduleBidScheduleSetResponse** (1 change)

* Model was added

**BidGroupScheduleSet** (1 change)

* Model was added

**ScheduleBidScheduledActivity** (1 change)

* Model was added

**ScheduleBidScheduledShift** (1 change)

* Model was added

**ShiftSet** (1 change)

* Model was added

**ShiftSetEffectiveWorkPlan** (1 change)

* Model was added

**AgentWorkPlanBid** (1 change)

* Optional property bidType was added

**BidGroupWorkPlanRotationResponse** (1 change)

* Model was added

**ScheduleBidGroup** (1 change)

* Model was added

**ScheduleBidGroupResponse** (1 change)

* Model was added

**ScheduleBidGroupSummary** (1 change)

* Model was added

**ScheduleBidGroupSummaryList** (1 change)

* Model was added

**ScheduleSetError** (1 change)

* Model was added

**BidGroupWorkPlanRotationRequest** (1 change)

* Model was added

**ScheduleBidGroupCreate** (1 change)

* Model was added

**ListWrapperBidGroupWorkPlanRotationRequest** (1 change)

* Model was added

**ListWrapperScheduleSetRequest** (1 change)

* Model was added

**ScheduleBidGroupUpdate** (1 change)

* Model was added

**ScheduleSetRequest** (1 change)

* Model was added

**AdminAgentScheduleBidBiddingPreference** (1 change)

* Model was added

**AdminAgentScheduleBidPreferenceResponse** (1 change)

* Model was added

**AdminAgentScheduleSetPreferences** (1 change)

* Model was added

**ScheduleBidGroupReference** (1 change)

* Model was added

**ScheduleBidReference** (1 change)

* Model was added

**AgentBidScheduleSetOverrideRequest** (1 change)

* Model was added

**AgentsBidAssignedScheduleSetOverrideRequest** (1 change)

* Model was added

**ScheduleBid** (1 change)

* Model was added

**CreateScheduleBid** (1 change)

* Model was added

**CopyScheduleBid** (1 change)

* Model was added

**ScheduleBidListResponse** (1 change)

* Model was added

**AgentAssignedScheduleSetList** (1 change)

* Model was added

**AgentAssignedShiftSet** (1 change)

* Model was added

**AgentEffectiveBid** (1 change)

* Model was added

**AgentsEffectiveScheduleSetResponse** (1 change)

* Model was added

**AssignedAgentDetails** (1 change)

* Model was added

**QueryEffectiveScheduleSetsRequest** (1 change)

* Model was added

**UpdateScheduleBid** (1 change)

* Model was added

**CreateWorkPlanBid** (1 change)

* Optional property endOverridesAndRotations was added

**UpdateWorkPlanBid** (1 change)

* Optional property endOverridesAndRotations was added

**BillingCharge** (2 changes)

* Optional property convertedTokenCount was added
* Optional property tokenConversionRate was added

**RegisterArchitectValidateJobResponse** (1 change)

* Model was added

**RegisterArchitectValidateJob** (1 change)

* Model was added

**ValidateDetails** (1 change)

* Model was added

**ArchitectValidateJobStateResponse** (1 change)

* Model was added


# Point Changes (2 changes)

**GET /api/v2/externalcontacts/contacts/exports** (1 change)

* Summary was changed

**GET /api/v2/speechandtextanalytics/dictionaryfeedback** (1 change)

* Description was changed for parameter pageSize
