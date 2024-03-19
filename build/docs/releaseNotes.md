Platform API version: 7915




# Major Changes (10 changes)

**GET /api/v2/conversations/messaging/integrations/twitter/{integrationId}** (1 change)

* Has been deprecated

**DELETE /api/v2/conversations/messaging/integrations/twitter/{integrationId}** (1 change)

* Has been deprecated

**PATCH /api/v2/conversations/messaging/integrations/twitter/{integrationId}** (1 change)

* Has been deprecated

**GET /api/v2/conversations/messaging/integrations/twitter** (1 change)

* Has been deprecated

**POST /api/v2/conversations/messaging/integrations/twitter** (1 change)

* Has been deprecated

**GET /api/v2/organizations/limits/docs** (1 change)

* Response 200 type was changed from UrlResponse to LimitDocumentation

**GET /api/v2/routing/queues** (1 change)

* Parameter cannedResponseLibraryId was added

**AnalyticsConversationSegment** (2 changes)

* Enum value endpointDnd was removed from property disconnectType
* Enum value transferDnd was removed from property disconnectType

**ConversationAppSettings** (1 change)

* Property autoStartType was removed


# Minor Changes (132 changes)

**/api/v2/chats/messages/{messageId}/reactions** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/chats/rooms/{roomJid}/participants/{participantJid}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/chats/rooms/{roomJid}/participants** (2 changes)

* Path was added
* Operation GET was added

**POST /api/v2/journey/deployments/{deploymentId}/appevents** (1 change)

* Response 422 was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/{staffingGroupId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/{timeOffLimitId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/{timeOffLimitId}/values** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/values/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeoffplans** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeoffplans/{timeOffPlanId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/journey/views/encodings/validate** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/journey/views/eventdefinitions/{eventDefinitionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/views/eventdefinitions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/latest** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/journey/views/{viewId}/versions/{journeyViewVersion}/jobs/{jobId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/recordings/screensessions/details** (2 changes)

* Path was added
* Operation GET was added

**AnalyticsConversationWithoutAttributes** (1 change)

* Enum value voicesurveyflow was added to property conversationInitiator

**AnalyticsParticipantWithoutAttributes** (1 change)

* Enum value voicesurveyflow was added to property purpose

**AnalyticsSurvey** (2 changes)

* Optional property surveyPartialResponse was added
* Optional property surveyType was added

**SurveyDetailQueryPredicate** (2 changes)

* Enum value surveyPartialResponse was added to property dimension
* Enum value surveyType was added to property dimension

**AnalyticsConversation** (1 change)

* Enum value voicesurveyflow was added to property conversationInitiator

**AnalyticsParticipant** (1 change)

* Enum value voicesurveyflow was added to property purpose

**SurveyAggregateQueryPredicate** (2 changes)

* Enum value surveyPartialResponse was added to property dimension
* Enum value surveyType was added to property dimension

**SurveyAggregationQuery** (6 changes)

* Enum value surveyPartialResponse was added to property groupBy
* Enum value surveyType was added to property groupBy
* Enum value nSurveyFullResponses was added to property metrics
* Enum value nSurveyPartialResponses was added to property metrics
* Enum value nVoiceSurveys was added to property metrics
* Enum value nWebSurveys was added to property metrics

**SurveyAggregationView** (4 changes)

* Enum value nSurveyFullResponses was added to property target
* Enum value nSurveyPartialResponses was added to property target
* Enum value nVoiceSurveys was added to property target
* Enum value nWebSurveys was added to property target

**ChatReactionUpdate** (1 change)

* Model was added

**RoomParticipant** (1 change)

* Model was added

**RoomParticipantResponse** (1 change)

* Model was added

**RoomParticipantsResponse** (1 change)

* Model was added

**Email** (3 changes)

* Enum value parked was added to property state
* Enum value parked was added to property initialState
* Optional property resumeTimestamp was added

**Campaign** (1 change)

* Optional property callbackAutoAnswer was added

**Alteration** (1 change)

* Model was added

**Pattern** (1 change)

* Model was added

**Range** (1 change)

* Model was added

**Reoccurrence** (1 change)

* Model was added

**DocumentVariation** (2 changes)

* Optional property priority was added
* Optional property name was added

**KnowledgeDocumentVersionVariation** (2 changes)

* Optional property priority was added
* Optional property name was added

**DocumentQueryPredicate** (1 change)

* Enum value variationId was added to property fields

**LimitDocs** (1 change)

* Model was added

**LimitDocumentation** (1 change)

* Model was added

**NamespaceDocs** (1 change)

* Model was added

**StaffingGroupListing** (1 change)

* Model was added

**StaffingGroupResponse** (1 change)

* Model was added

**CreateStaffingGroupRequest** (1 change)

* Model was added

**UpdateStaffingGroupRequest** (1 change)

* Model was added

**StaffingGroupReference** (1 change)

* Model was added

**UserStaffingGroupListing** (1 change)

* Model was added

**UserStaffingGroupResponse** (1 change)

* Model was added

**QueryUserStaffingGroupListRequest** (1 change)

* Model was added

**BuTimeOffLimitListing** (1 change)

* Model was added

**BuTimeOffLimitResponse** (1 change)

* Model was added

**BuCreateTimeOffLimitRequest** (1 change)

* Model was added

**BuSetTimeOffLimitValuesRequest** (1 change)

* Model was added

**BuTimeOffLimitRange** (1 change)

* Model was added

**BuTimeOffLimitReference** (1 change)

* Model was added

**BuTimeOffLimitValueRange** (1 change)

* Model was added

**BuTimeOffLimitValuesResponse** (1 change)

* Model was added

**BuTimeOffPlanListing** (1 change)

* Model was added

**BuTimeOffPlanResponse** (1 change)

* Model was added

**TimeOffPlanBusinessUnitAssociation** (1 change)

* Model was added

**TimeOffPlanManagementUnitAssociation** (1 change)

* Model was added

**BuCreateTimeOffPlanRequest** (1 change)

* Model was added

**CreateTimeOffPlanBusinessUnitAssociation** (1 change)

* Model was added

**CreateTimeOffPlanManagementUnitAssociation** (1 change)

* Model was added

**BuUpdateTimeOffPlanRequest** (1 change)

* Model was added

**UpdateTimeOffPlanBusinessUnitAssociation** (1 change)

* Model was added

**UpdateTimeOffPlanManagementUnitAssociation** (1 change)

* Model was added

**SurveyAsyncAggregationQuery** (6 changes)

* Enum value surveyPartialResponse was added to property groupBy
* Enum value surveyType was added to property groupBy
* Enum value nSurveyFullResponses was added to property metrics
* Enum value nSurveyPartialResponses was added to property metrics
* Enum value nVoiceSurveys was added to property metrics
* Enum value nWebSurveys was added to property metrics

**Label** (1 change)

* Model was added

**JourneyEventDefinition** (1 change)

* Model was added

**JourneyEventDefinitionListing** (1 change)

* Model was added

**JourneyViewJob** (1 change)

* Model was added

**JourneyViewResult** (1 change)

* Model was added

**JourneyViewResultElement** (1 change)

* Model was added

**JourneyViewResultLink** (1 change)

* Model was added

**JourneyViewResultMetrics** (1 change)

* Model was added

**ScreenRecordingActiveSessions** (1 change)

* Model was added

**AutoStatusTransitionDetail** (1 change)

* Optional property errorDetails was added

**TaskManagementErrorDetails** (1 change)

* Model was added


# Point Changes (13 changes)

**GET /api/v2/conversations/messaging/integrations/twitter/{integrationId}** (2 changes)

* Description was changed
* Summary was changed

**DELETE /api/v2/conversations/messaging/integrations/twitter/{integrationId}** (1 change)

* Description was changed

**PATCH /api/v2/conversations/messaging/integrations/twitter/{integrationId}** (1 change)

* Description was changed

**GET /api/v2/conversations/messaging/integrations/twitter** (2 changes)

* Description was changed
* Summary was changed

**POST /api/v2/conversations/messaging/integrations/twitter** (1 change)

* Description was changed

**GET /api/v2/organizations/limits/docs** (1 change)

* Summary was changed

**GET /api/v2/routing/queues** (5 changes)

* Description was changed for parameter name
* Description was changed for parameter id
* Description was changed for parameter divisionId
* Description was changed for parameter peerId
* Description was changed for parameter hasPeer
