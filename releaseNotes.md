Platform API version: 9484




# Major Changes (31 changes)

**/api/v2/analytics/conversations/transcripts/query** (1 change)

* Path /api/v2/analytics/conversations/transcripts/query was removed

**GET /api/v2/chats/rooms/{roomJid}/messages** (1 change)

* Parameter excludeMetadata was added

**GET /api/v2/chats/users/{userId}/messages** (1 change)

* Parameter excludeMetadata was added

**GET /api/v2/chats/threads/{threadId}/messages** (1 change)

* Parameter excludeMetadata was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}** (1 change)

* Parameter includeSchedulingDefaultMessageSeverities was added

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}** (1 change)

* Parameter includeSchedulingDefaultMessageSeverities was added

**POST /api/v2/workforcemanagement/businessunits** (1 change)

* Parameter includeSchedulingDefaultMessageSeverities was added

**GET /api/v2/taskmanagement/workitems/{workitemId}/users/{userId}/wrapups** (1 change)

* Response 200 type was changed from WorkitemWrapup to WorkitemWrapupEntityListing

**GET /api/v2/businessrules/decisiontables/{tableId}/versions** (1 change)

* Parameter divisionIds was removed

**GET /api/v2/businessrules/decisiontables** (1 change)

* Parameter name was added

**/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/{rowId}** (1 change)

* Operation PATCH was removed

**BaseMediaSettings** (1 change)

* Model BaseMediaSettings was removed

**TranscriptConversationDetailSearchCriteria** (1 change)

* Model TranscriptConversationDetailSearchCriteria was removed

**TranscriptConversationDetailSearchRequest** (1 change)

* Model TranscriptConversationDetailSearchRequest was removed

**UpdateDecisionTableRowRequest** (1 change)

* Model UpdateDecisionTableRowRequest was removed

**CallbackMediaSettings** (1 change)

* Property subTypeSettings was removed

**EmailMediaSettings** (1 change)

* Property subTypeSettings was removed

**MediaSettings** (1 change)

* Property subTypeSettings was removed

**MessageMediaSettings** (1 change)

* Property subTypeSettings was changed from Map<object, BaseMediaSettings> to Map<object, MessageSubtypeSettings>

**KnowledgeDocumentQueryResponse** (1 change)

* Property results was changed from KnowledgeDocumentResponse[] to KnowledgeDocumentQueryResult[]

**KnowledgeSearchDocumentResponse** (1 change)

* Property variations was changed from DocumentVariationAnswer[] to KnowledgeDocumentSearchVariation[]

**NluDomain** (2 changes)

* Property draftVersion was changed from NluDomainVersion to NluDomainVersionReference
* Property lastPublishedVersion was changed from NluDomainVersion to NluDomainVersionReference

**ActivityCode** (1 change)

* Enum value Unscheduled was removed from property category

**BusinessUnitActivityCode** (1 change)

* Enum value Unscheduled was removed from property category

**CreateActivityCodeRequest** (1 change)

* Enum value Unscheduled was removed from property category

**UpdateActivityCodeRequest** (1 change)

* Enum value Unscheduled was removed from property category

**BuScheduleNotificationsCategorySettings** (1 change)

* Enum value Unscheduled was removed from property activityCategory

**IgnoredActivityCategories** (1 change)

* Enum value Unscheduled was removed from property values

**ShiftTradeActivityRule** (1 change)

* Enum value Unscheduled was removed from property activityCategory

**SnapshotInfo** (1 change)

* Property sessionId was removed


# Minor Changes (242 changes)

**/api/v2/externalcontacts/contacts/{contactId}/journey/segments** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/outbound/schedules/whatsappcampaigns/{whatsAppCampaignId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/outbound/schedules/whatsappcampaigns** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/chunks/search** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/speechandtextanalytics/conversations/{conversationId}/sentiments** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/usage/client/{clientId}/aggregates/query/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/usage/client/{clientId}/aggregates/query/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/usage/aggregates/query/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/usage/aggregates/query/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/planninggroups/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/bulk/remove** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/staffinggroupallocations** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/staffingrequirements** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/copy** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/requirement/generate** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/staffinggroupallocationshistory/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/staffinggroupallocationshistory** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplanning/longtermrequirements/automaticbestmethod/weeks/{weekDateId}/forecasts/{forecastId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplanning/longtermrequirements/automaticbestmethod/weeks/{weekDateId}/forecasts/{forecastId}/forceregenerate** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/actions/aggregates/jobs/{jobId}** (1 change)

* Operation delete was added. Summary: Delete/cancel an async request for action aggregates

**/api/v2/analytics/agentcopilots/aggregates/jobs/{jobId}** (1 change)

* Operation delete was added. Summary: Delete/cancel an async request for agent copilot aggregates

**/api/v2/analytics/bots/aggregates/jobs/{jobId}** (1 change)

* Operation delete was added. Summary: Delete/cancel an async request for bot aggregates

**/api/v2/analytics/conversations/aggregates/jobs/{jobId}** (1 change)

* Operation delete was added. Summary: Delete/cancel an async request for conversation aggregates

**/api/v2/analytics/evaluations/aggregates/jobs/{jobId}** (1 change)

* Operation delete was added. Summary: Delete/cancel an async request for evaluation aggregates

**/api/v2/analytics/flowexecutions/aggregates/jobs/{jobId}** (1 change)

* Operation delete was added. Summary: Delete/cancel an async request for flow execution aggregates

**/api/v2/analytics/flows/aggregates/jobs/{jobId}** (1 change)

* Operation delete was added. Summary: Delete/cancel an async request for flow aggregates

**/api/v2/analytics/journeys/aggregates/jobs/{jobId}** (1 change)

* Operation delete was added. Summary: Delete/cancel an async request for journey aggregates

**/api/v2/analytics/knowledge/aggregates/jobs/{jobId}** (1 change)

* Operation delete was added. Summary: Delete/cancel an async request for knowledge aggregates

**/api/v2/analytics/resolutions/aggregates/jobs/{jobId}** (1 change)

* Operation delete was added. Summary: Delete/cancel an async request for resolution aggregates

**/api/v2/analytics/summaries/aggregates/jobs/{jobId}** (1 change)

* Operation delete was added. Summary: Delete/cancel an async request for summary aggregates

**/api/v2/analytics/surveys/aggregates/jobs/{jobId}** (1 change)

* Operation delete was added. Summary: Delete/cancel an async request for survey aggregates

**/api/v2/analytics/taskmanagement/aggregates/jobs/{jobId}** (1 change)

* Operation delete was added. Summary: Delete/cancel an async request for task management aggregates

**/api/v2/analytics/transcripts/aggregates/jobs/{jobId}** (1 change)

* Operation delete was added. Summary: Delete/cancel an async request for transcript aggregates

**/api/v2/analytics/users/aggregates/jobs/{jobId}** (1 change)

* Operation delete was added. Summary: Delete/cancel an async request for user aggregates

**/api/v2/guides/{guideId}** (1 change)

* Operation patch was added. Summary: Update a guide.

**/api/v2/speechandtextanalytics/reprocessing/jobs/{jobId}/interactions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/speechandtextanalytics/reprocessing/jobs/{jobId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/speechandtextanalytics/reprocessing/jobs** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/telephony/agents/{agentId}/greetings** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/telephony/agents/greetings/me** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**TokenInfo** (1 change)

* Optional property dateTokenIdles was added

**ReportingTurnAction** (2 changes)

* Enum value AskForAuthenticationAction was added to property actionType
* Enum value AskForPaymentAction was added to property actionType

**Transcripts** (1 change)

* Optional property notSimilarTo was added

**ViewFilter** (3 changes)

* Optional property empathyScoreCategories was added
* Optional property sentimentScoreCategories was added
* Optional property sentimentTrendCategories was added

**DomainOrganizationRole** (3 changes)

* Optional property baseLicense was added
* Optional property addonLicenses was added
* Optional property dateLicenseLastUpdated was added

**InactivityTimeoutSettings** (1 change)

* Model was added

**MessageSubtypeSettings** (1 change)

* Model was added

**Queue** (1 change)

* Optional property conditionalGroupActivation was added

**DomainOrganizationRoleUpdate** (3 changes)

* Optional property baseLicense was added
* Optional property addonLicenses was added
* Optional property dateLicenseLastUpdated was added

**DomainOrganizationRoleCreate** (3 changes)

* Optional property baseLicense was added
* Optional property addonLicenses was added
* Optional property dateLicenseLastUpdated was added

**Limit** (1 change)

* Enum value workforce.management.agent.availability was added to property namespace

**AnswerOption** (1 change)

* Optional property contextId was added

**DefaultAnswer** (1 change)

* Model was added

**DefaultAnswersTo** (1 change)

* Model was added

**SegmentAssignment** (1 change)

* Model was added

**SegmentAssignmentListing** (1 change)

* Model was added

**SegmentAssignmentSegment** (1 change)

* Model was added

**SegmentAssignmentSession** (1 change)

* Model was added

**SegmentAssignments** (1 change)

* Model was added

**SegmentForAssignment** (1 change)

* Model was added

**SegmentForUnassignment** (1 change)

* Model was added

**SegmentUnassignments** (1 change)

* Model was added

**UnprocessedSegmentAssignments** (1 change)

* Model was added

**UpdateSegmentAssignmentResponse** (1 change)

* Model was added

**UpdateSegmentAssignmentRequest** (1 change)

* Model was added

**ConversationMessageMetadataEvent** (3 changes)

* Enum value Authenticate was added to property subType
* Enum value AuthenticateFailure was added to property subType
* Enum value AuthenticateCancel was added to property subType

**Evaluation** (1 change)

* Optional property divisionIds was added

**Duration** (1 change)

* Model was added

**TemporalUnit** (1 change)

* Model was added

**WhatsAppCampaignSchedule** (1 change)

* Model was added

**WhatsAppCampaignScheduleEntityListing** (1 change)

* Model was added

**DocumentChunkBlock** (1 change)

* Model was added

**DocumentChunkReference** (1 change)

* Model was added

**KnowledgeDocumentChunkResponse** (1 change)

* Model was added

**DocumentQueryPredicate** (1 change)

* Enum value chunkId was added to property fields

**KnowledgeDocumentChunkRequest** (1 change)

* Model was added

**DocumentVariationQueryChunkBlock** (1 change)

* Model was added

**KnowledgeDocumentQueryResponse** (1 change)

* results is no longer readonly

**KnowledgeDocumentQueryResult** (1 change)

* Model was added

**KnowledgeDocumentQueryVariation** (1 change)

* Model was added

**DocumentVariationSearchChunkBlock** (1 change)

* Model was added

**KnowledgeDocumentSearchVariation** (1 change)

* Model was added

**IntentReference** (1 change)

* Model was added

**NluDomainVersionReference** (1 change)

* Model was added

**ApprovalNamespace** (1 change)

* Enum value workforce.management.agent.availability was added to property namespace

**LimitChangeRequestDetails** (1 change)

* Enum value workforce.management.agent.availability was added to property namespace

**StatusChange** (1 change)

* Enum value workforce.management.agent.availability was added to property namespace

**SurveyQuestion** (1 change)

* Optional property contextId was added

**SurveyQuestionGroup** (1 change)

* Optional property contextId was added

**RecordingLocation** (1 change)

* Model was added

**RecordingMessagingMessage** (2 changes)

* Optional property datePicker was added
* Enum value RoadsideAssistance was added to property contentType

**RecordingRoadsideAssistance** (1 change)

* Model was added

**Library** (1 change)

* Enum value Form was added to property responseType

**Form** (1 change)

* Model was added

**FormDatePicker** (1 change)

* Model was added

**FormIntroduction** (1 change)

* Model was added

**FormListPicker** (1 change)

* Model was added

**FormListPickerItem** (1 change)

* Model was added

**FormListPickerSection** (1 change)

* Model was added

**FormMessage** (1 change)

* Model was added

**FormPage** (1 change)

* Model was added

**FormPageComponent** (1 change)

* Model was added

**Input** (1 change)

* Model was added

**Response** (1 change)

* Enum value Form was added to property responseType

**WheelPicker** (1 change)

* Model was added

**WheelPickerItem** (1 change)

* Model was added

**QueueRequest** (1 change)

* Optional property conditionalGroupActivation was added

**UserQueue** (1 change)

* Optional property conditionalGroupActivation was added

**CreateQueueRequest** (1 change)

* Optional property conditionalGroupActivation was added

**Flow** (1 change)

* Optional property agenticVirtualAgentEnabled was added

**FlowVersion** (1 change)

* Optional property agenticVirtualAgentEnabled was added

**SentimentData** (1 change)

* Model was added

**SentimentInsightEntry** (1 change)

* Model was added

**SentimentInsights** (1 change)

* Model was added

**ClientUsageQueryResponse** (1 change)

* Model was added

**ClientPublicApiUsageQueryRequest** (1 change)

* Model was added

**UsageQuerySortBy** (1 change)

* Model was added

**ClientPublicApiUsage** (1 change)

* Model was added

**ClientPublicApiUsageResultsResponse** (1 change)

* Model was added

**OrganizationUsageQueryResponse** (1 change)

* Model was added

**OrganizationPublicApiUsageQueryRequest** (1 change)

* Model was added

**OrganizationPublicApiUsage** (1 change)

* Model was added

**OrganizationPublicApiUsageResultsResponse** (1 change)

* Model was added

**Dependency** (1 change)

* Enum value CONVERSATIONCUSTOMATTRIBUTESCHEMA was added to property type

**DependencyObject** (1 change)

* Enum value CONVERSATIONCUSTOMATTRIBUTESCHEMA was added to property type

**HistoryEntry** (1 change)

* Optional property agenticVirtualAgentEnabled was added

**IpFilter** (1 change)

* Model was added

**JourneyEventsSettings** (1 change)

* Optional property trackingSettings was added

**TrackingSettings** (1 change)

* Model was added

**WebMessagingButtonResponse** (1 change)

* Enum value ListPicker was added to property type

**WebMessagingContent** (2 changes)

* Enum value ListPicker was added to property contentType
* Optional property listPicker was added

**StaffingGroupResponse** (1 change)

* Optional property planningGroups was added

**CreateStaffingGroupRequest** (1 change)

* Optional property planningGroupIds was added

**UpdateStaffingGroupRequest** (1 change)

* Optional property planningGroupIds was added

**PlanningGroupToStaffingGroupsListing** (1 change)

* Model was added

**PlanningGroupToStaffingGroupsResponse** (1 change)

* Model was added

**QueryPlanningGroupToStaffingGroupsRequest** (1 change)

* Model was added

**WorkPlanShift** (1 change)

* Optional property planningPeriodConstraints was added

**WorkPlanValidationRequest** (2 changes)

* Optional property constrainMaximumWorkingWeekendsPerPlanningPeriod was added
* Optional property maximumWorkingWeekendsPerPlanningPeriod was added

**WorkPlan** (2 changes)

* Optional property constrainMaximumWorkingWeekendsPerPlanningPeriod was added
* Optional property maximumWorkingWeekendsPerPlanningPeriod was added

**WorkPlanListItemResponse** (2 changes)

* Optional property constrainMaximumWorkingWeekendsPerPlanningPeriod was added
* Optional property maximumWorkingWeekendsPerPlanningPeriod was added

**CreateWorkPlan** (2 changes)

* Optional property constrainMaximumWorkingWeekendsPerPlanningPeriod was added
* Optional property maximumWorkingWeekendsPerPlanningPeriod was added

**CreateWorkPlanShift** (1 change)

* Optional property planningPeriodConstraints was added

**CapacityPlanListItem** (1 change)

* Model was added

**CapacityPlanMetadata** (1 change)

* Model was added

**CapacityPlansListResponse** (1 change)

* Model was added

**CapacityPlanResponse** (1 change)

* Model was added

**CapacityPlanRequest** (1 change)

* Model was added

**CreateStaffingGroupAllocation** (1 change)

* Model was added

**CapacityPlanDeleteRequest** (1 change)

* Model was added

**CapacityPlanReference** (1 change)

* Model was added

**CapacityPlanStaffingGroupAllocationsResponse** (1 change)

* Model was added

**StaffingGroupAllocation** (1 change)

* Model was added

**StaffingGroupAllocationsResponseTemplate** (1 change)

* Model was added

**CapacityPlanStaffingRequirementResult** (1 change)

* Model was added

**LongTermRequirementsErrorDetail** (1 change)

* Model was added

**LongTermRequirementsServiceGoal** (1 change)

* Model was added

**LongTermRequirementsServiceGoalDetail** (1 change)

* Model was added

**PlanningGroupRequirementOutput** (1 change)

* Model was added

**StaffingRequirementResultResponseTemplate** (1 change)

* Model was added

**UpdateCapacityPlanRequest** (1 change)

* Model was added

**ValueWrapperBuShortTermForecastReference** (1 change)

* Model was added

**CopyCapacityPlanRequest** (1 change)

* Model was added

**CapacityPlanStaffingGroupMetricChangeResponse** (1 change)

* Model was added

**CreateCapacityPlanStaffingGroupMetricChangeRequest** (1 change)

* Model was added

**CapacityPlanStaffingGroupMetricChangeHistoryListResponse** (1 change)

* Model was added

**StaffingGroupMetricChangeResponse** (1 change)

* Model was added

**QueryCapacityPlanStaffingGroupMetricChangeHistory** (1 change)

* Model was added

**ForecastMetadata** (1 change)

* Model was added

**LongTermRequirements** (1 change)

* Model was added

**LongTermRequirementsResponse** (1 change)

* Model was added

**BuAgentScheduleShift** (2 changes)

* Optional property workPlanId was added
* Optional property workPlanShiftId was added

**BuAgentScheduleShiftRequest** (2 changes)

* Optional property workPlanId was added
* Optional property workPlanShiftId was added

**BuUpdateAgentScheduleShift** (2 changes)

* Optional property workPlanId was added
* Optional property workPlanShiftId was added

**AssessmentFormQuestion** (1 change)

* Optional property contextId was added

**AssessmentFormQuestionGroup** (1 change)

* Optional property contextId was added

**UpdateGuide** (1 change)

* Model was added

**ReprocessInteractionsByJobIdResponse** (1 change)

* Model was added

**ReprocessJobResponse** (1 change)

* Model was added

**CreateReprocessJobRequest** (1 change)

* Model was added

**ReprocessJobEntityListingResponse** (1 change)

* Model was added

**AgentGreeting** (1 change)

* Model was added

**SelfAgentGreeting** (1 change)

* Model was added

**SnapshotInfo** (1 change)

* Optional property dateSnapshot was added


# Point Changes (50 changes)

**PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Summary was changed

**GET /api/v2/conversations/chats/{conversationId}/messages/{messageId}** (1 change)

* Description was changed

**GET /api/v2/conversations/chats/{conversationId}/messages** (1 change)

* Description was changed

**POST /api/v2/conversations/chats/{conversationId}/communications/{communicationId}/messages** (1 change)

* Description was changed

**POST /api/v2/conversations/chats/{conversationId}/communications/{communicationId}/typing** (1 change)

* Description was changed

**GET /api/v2/conversations/chats** (1 change)

* Description was changed

**POST /api/v2/conversations/chats** (1 change)

* Description was changed

**POST /api/v2/conversations/chats/{conversationId}/participants/{participantId}/replace** (1 change)

* Description was changed

**GET /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Description was changed

**GET /api/v2/conversations/chats/{conversationId}** (1 change)

* Description was changed

**PATCH /api/v2/conversations/chats/{conversationId}** (1 change)

* Description was changed

**PUT /api/v2/conversations/chats/{conversationId}/recordingstate** (1 change)

* Description was changed

**PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}/attributes** (1 change)

* Description was changed

**GET /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Description was changed

**PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}** (1 change)

* Description was changed

**PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup** (1 change)

* Description was changed

**POST /api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup** (1 change)

* Description was changed

**POST /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/replace** (1 change)

* Description was changed

**GET /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Description was changed

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}** (1 change)

* Description was changed

**PUT /api/v2/conversations/cobrowsesessions/{conversationId}/recordingstate** (1 change)

* Description was changed

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/attributes** (1 change)

* Description was changed

**GET /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Description was changed

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Description was changed

**GET /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup** (1 change)

* Description was changed

**POST /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup** (1 change)

* Description was changed

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}** (1 change)

* Description was changed

**PATCH /api/v2/conversations/emails/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Summary was changed

**PATCH /api/v2/conversations/messages/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Summary was changed

**PUT /api/v2/conversations/screenshares/{conversationId}/recordingstate** (1 change)

* Description was changed

**GET /api/v2/conversations/screenshares/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup** (1 change)

* Description was changed

**POST /api/v2/conversations/screenshares/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup** (1 change)

* Description was changed

**POST /api/v2/webchat/guest/conversations** (1 change)

* Description was changed

**GET /api/v2/webchat/guest/conversations/{conversationId}/mediarequests/{mediaRequestId}** (1 change)

* Description was changed

**PATCH /api/v2/webchat/guest/conversations/{conversationId}/mediarequests/{mediaRequestId}** (1 change)

* Description was changed

**GET /api/v2/webchat/guest/conversations/{conversationId}/mediarequests** (1 change)

* Description was changed

**POST /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}/messages** (1 change)

* Description was changed

**POST /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}/typing** (1 change)

* Description was changed

**GET /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}** (1 change)

* Description was changed

**DELETE /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}** (1 change)

* Description was changed

**GET /api/v2/webchat/guest/conversations/{conversationId}/members** (1 change)

* Description was changed

**GET /api/v2/webchat/guest/conversations/{conversationId}/messages/{messageId}** (1 change)

* Description was changed

**GET /api/v2/webchat/guest/conversations/{conversationId}/messages** (1 change)

* Description was changed

**GET /api/v2/widgets/deployments/{deploymentId}** (1 change)

* Description was changed

**PUT /api/v2/widgets/deployments/{deploymentId}** (1 change)

* Description was changed

**DELETE /api/v2/widgets/deployments/{deploymentId}** (1 change)

* Description was changed

**GET /api/v2/widgets/deployments** (1 change)

* Description was changed

**POST /api/v2/widgets/deployments** (1 change)

* Description was changed
