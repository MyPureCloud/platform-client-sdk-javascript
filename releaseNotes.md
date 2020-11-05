Platform API version: 4309


# Major Changes (5 changes)

**GET /api/v2/authorization/permissions** (2 changes)

* Parameter queryType was added
* Parameter query was added

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings** (1 change)

* Parameter knowledgeDocumentsState was added

**KnowledgeBase** (1 change)

* faqCount has been made readonly

**KnowledgeTraining** (1 change)

* Property name was removed


# Minor Changes (100 changes)

**/api/v2/journey/externalcontacts/{externalContactId}/segments** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/journey/customers/{customerIdType}/{customerId}/segments** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}/copy** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/journey/sessions/{sessionId}/segments** (2 changes)

* Path was added
* Operation GET was added

**KnowledgeBase** (1 change)

* Optional property dateDocumentLastModified was added

**FlowAggregateQueryPredicate** (2 changes)

* Enum value assignerId was added to property dimension
* Enum value firstQueue was added to property dimension

**FlowAggregationQuery** (2 changes)

* Enum value assignerId was added to property groupBy
* Enum value firstQueue was added to property groupBy

**SegmentAssignmentsUpdate** (1 change)

* Model was added

**SegmentAssignment** (1 change)

* Model was added

**SegmentAssignmentListing** (1 change)

* Model was added

**SegmentAssignmentSegment** (1 change)

* Model was added

**SegmentAssignmentSession** (1 change)

* Model was added

**AuditQueryExecutionStatusResponse** (2 changes)

* Enum value Architect was added to property serviceName
* Enum value Groups was added to property serviceName

**AuditQueryRequest** (2 changes)

* Enum value Architect was added to property serviceName
* Enum value Groups was added to property serviceName

**AuditLogMessage** (18 changes)

* Enum value Architect was added to property serviceName
* Enum value Groups was added to property serviceName
* Enum value Upload was added to property action
* Enum value Activate was added to property action
* Enum value Checkin was added to property action
* Enum value Checkout was added to property action
* Enum value Deactivate was added to property action
* Enum value Debug was added to property action
* Enum value Save was added to property action
* Enum value Revert was added to property action
* Enum value Transcode was added to property action
* Enum value DependencyTrackingBuild was added to property entityType
* Enum value Flow was added to property entityType
* Enum value Prompt was added to property entityType
* Enum value PromptResource was added to property entityType
* Enum value FlowOutcome was added to property entityType
* Enum value FlowMilestone was added to property entityType
* Enum value Team was added to property entityType

**AuditRealtimeQueryRequest** (2 changes)

* Enum value Architect was added to property serviceName
* Enum value Groups was added to property serviceName

**AuditQueryEntity** (16 changes)

* Enum value DependencyTrackingBuild was added to property name
* Enum value Flow was added to property name
* Enum value Prompt was added to property name
* Enum value PromptResource was added to property name
* Enum value FlowOutcome was added to property name
* Enum value FlowMilestone was added to property name
* Enum value Team was added to property name
* Enum value Upload was added to property actions
* Enum value Activate was added to property actions
* Enum value Checkin was added to property actions
* Enum value Checkout was added to property actions
* Enum value Deactivate was added to property actions
* Enum value Debug was added to property actions
* Enum value Save was added to property actions
* Enum value Revert was added to property actions
* Enum value Transcode was added to property actions

**AuditQueryService** (2 changes)

* Enum value Architect was added to property name
* Enum value Groups was added to property name

**SurveyAggregateQueryPredicate** (1 change)

* Enum value teamId was added to property dimension

**SurveyAggregationQuery** (1 change)

* Enum value teamId was added to property groupBy

**LocationSearchCriteria** (1 change)

* Optional property dateFormat was added

**GroupSearchCriteria** (1 change)

* Optional property dateFormat was added

**VoicemailSearchCriteria** (1 change)

* Optional property dateFormat was added

**DocumentationSearchCriteria** (1 change)

* Optional property dateFormat was added

**NluDomain** (1 change)

* Optional property language was added

**SuggestSearchCriteria** (1 change)

* Optional property dateFormat was added

**SearchCriteria** (1 change)

* Optional property dateFormat was added

**DateRangeWithOptionalEnd** (1 change)

* Model was added

**WorkPlanPatternResponse** (1 change)

* Model was added

**WorkPlanRotationAgentResponse** (1 change)

* Model was added

**WorkPlanRotationResponse** (1 change)

* Model was added

**UpdateWorkPlanRotationAgentRequest** (1 change)

* Model was added

**UpdateWorkPlanRotationRequest** (1 change)

* Model was added

**WorkPlanPatternRequest** (1 change)

* Model was added

**WorkPlanRotationListResponse** (1 change)

* Model was added

**AddWorkPlanRotationAgentRequest** (1 change)

* Model was added

**AddWorkPlanRotationRequest** (1 change)

* Model was added

**CopyWorkPlanRotationRequest** (1 change)

* Model was added

**AnalyticsSession** (2 changes)

* Optional property assignerId was added
* Optional property acwSkipped was added

**ConversationAggregateQueryPredicate** (2 changes)

* Enum value assignerId was added to property dimension
* Enum value firstQueue was added to property dimension

**ConversationAggregationQuery** (2 changes)

* Enum value assignerId was added to property groupBy
* Enum value firstQueue was added to property groupBy

**UserSearchCriteria** (1 change)

* Optional property dateFormat was added

**ContentQuickReply** (1 change)

* Optional property payload was added

**EvaluationAggregateQueryPredicate** (1 change)

* Enum value teamId was added to property dimension

**EvaluationAggregationQuery** (1 change)

* Enum value teamId was added to property groupBy

**GKNDocumentationSearchCriteria** (1 change)

* Optional property dateFormat was added

**TranscriptConversationDetailSearchCriteria** (1 change)

* Optional property dateFormat was added


# Point Changes (1 change)

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings** (1 change)

* Summary was changed
