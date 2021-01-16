Platform API version: 4430


# Major Changes (66 changes)

**EntityListing** (5 changes)

* Property pageSize was removed
* Property pageNumber was removed
* Property total was removed
* Property pageCount was removed
* Property entities was changed from DataTableImportJob[] to object[]

**UserAggregateQueryPredicate** (3 changes)

* Enum value organizationPresenceId was removed from property dimension
* Enum value routingStatus was removed from property dimension
* Enum value systemPresence was removed from property dimension

**UserAggregationQuery** (3 changes)

* Enum value organizationPresenceId was removed from property groupBy
* Enum value routingStatus was removed from property groupBy
* Enum value systemPresence was removed from property groupBy

**ConversationAggregationQuery** (2 changes)

* Enum value oInteracting was removed from property metrics
* Enum value oWaiting was removed from property metrics

**ConversationAggregationView** (2 changes)

* Enum value oInteracting was removed from property target
* Enum value oWaiting was removed from property target

**ConversationDetailQueryPredicate** (1 change)

* Enum value mediaStatsMinConversationRFactor was removed from property dimension

**MediaEndpointStatDetailQueryPredicate** (2 changes)

* Enum value minMos was removed from property dimension
* Enum value minRFactor was removed from property dimension

**SegmentDetailQueryPredicate** (43 changes)

* Enum value addressOther was removed from property dimension
* Enum value addressSelf was removed from property dimension
* Enum value agentRank was removed from property dimension
* Enum value agentScore was removed from property dimension
* Enum value audioMuted was removed from property dimension
* Enum value callbackUserName was removed from property dimension
* Enum value cobrowseRole was removed from property dimension
* Enum value cobrowseRoomId was removed from property dimension
* Enum value destinationSessionId was removed from property dimension
* Enum value dispositionAnalyzer was removed from property dimension
* Enum value dispositionName was removed from property dimension
* Enum value endingLanguage was removed from property dimension
* Enum value entryReason was removed from property dimension
* Enum value entryType was removed from property dimension
* Enum value flowOutcomeEndTimestamp was removed from property dimension
* Enum value flowOutcomeStartTimestamp was removed from property dimension
* Enum value flowType was removed from property dimension
* Enum value issuedCallback was removed from property dimension
* Enum value journeyActionMapVersion was removed from property dimension
* Enum value journeyCustomerSessionIdType was removed from property dimension
* Enum value journeySegmentScope was removed from property dimension
* Enum value mediaBridgeId was removed from property dimension
* Enum value participantId was removed from property dimension
* Enum value peerId was removed from property dimension
* Enum value proposedAgentId was removed from property dimension
* Enum value q850ResponseCode was removed from property dimension
* Enum value requestedRoutingUserId was removed from property dimension
* Enum value roomId was removed from property dimension
* Enum value screenShareAddressSelf was removed from property dimension
* Enum value screenShareRoomId was removed from property dimension
* Enum value selectedAgentId was removed from property dimension
* Enum value selectedAgentRank was removed from property dimension
* Enum value sessionId was removed from property dimension
* Enum value sharingScreen was removed from property dimension
* Enum value skipEnabled was removed from property dimension
* Enum value sourceConversationId was removed from property dimension
* Enum value sourceSessionId was removed from property dimension
* Enum value startingLanguage was removed from property dimension
* Enum value timeoutSeconds was removed from property dimension
* Enum value videoAddressSelf was removed from property dimension
* Enum value videoMuted was removed from property dimension
* Enum value videoRoomId was removed from property dimension
* Enum value wrapUpTag was removed from property dimension

**SurveyDetailQueryPredicate** (1 change)

* Enum value surveyFormName was removed from property dimension

**EvaluationAggregateQueryPredicate** (1 change)

* Enum value rescind was removed from property dimension

**EvaluationAggregationQuery** (1 change)

* Enum value rescind was removed from property groupBy

**FlowAggregationQuery** (1 change)

* Enum value oFlow was removed from property metrics

**FlowAggregationView** (1 change)

* Enum value oFlow was removed from property target


# Minor Changes (28 changes)

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/history/agents/{agentId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/segments/{segmentId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/journey/segments** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**ViewFilter** (4 changes)

* Optional property journeyActionMapIds was added
* Optional property journeyOutcomeIds was added
* Optional property journeySegmentIds was added
* Optional property journeyActionMapTypes was added

**Context** (1 change)

* Model was added

**ContextPattern** (1 change)

* Model was added

**Criteria** (1 change)

* Model was added

**EntityTypeCriteria** (1 change)

* Model was added

**Journey** (1 change)

* Model was added

**JourneyPattern** (1 change)

* Model was added

**BuAgentScheduleHistoryChange** (1 change)

* Model was added

**BuAgentScheduleHistoryChangeMetadata** (1 change)

* Model was added

**BuAgentScheduleHistoryDeletedChange** (1 change)

* Model was added

**BuAgentScheduleHistoryDroppedChange** (1 change)

* Model was added

**BuAgentScheduleHistoryResponse** (1 change)

* Model was added

**JourneySegment** (1 change)

* Model was added

**PatchSegment** (1 change)

* Model was added

**ScimPhoneNumber** (1 change)

* Enum value ringcentral was added to property type

**SegmentListing** (1 change)

* Model was added


# Point Changes (0 changes)
