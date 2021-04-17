Platform API version: 4631


# Major Changes (22 changes)

**PATCH /api/v2/routing/queues/{queueId}/members/{memberId}** (1 change)

* Response 200 was removed

**PATCH /api/v2/routing/queues/{queueId}/users/{memberId}** (1 change)

* Response 200 was removed

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents** (1 change)

* Parameter documentIds was added

**Relationship** (1 change)

* Property name was removed

**ViewFilter** (1 change)

* Property developmentKeyType was removed

**BusinessUnitListItem** (1 change)

* Property division was changed from Division to DivisionReference

**ManagementUnit** (1 change)

* Property division was changed from Division to DivisionReference

**WfmHistoricalAdherenceQuery** (1 change)

* Property teamIds was removed

**AnalyticsResolution** (1 change)

* Property getnNextContactAvoided was removed

**AnalyticsSession** (3 changes)

* Property bullseyeRing was removed
* Property routingRule was removed
* Property journeyActionMapVersion was changed from string to integer

**BusinessUnit** (1 change)

* Property division was changed from Division to DivisionReference

**BuQueryAgentSchedulesRequest** (1 change)

* Property teamIds was removed

**FlowAggregateQueryPredicate** (2 changes)

* Enum value bullseyeRing was removed from property dimension
* Enum value routingRule was removed from property dimension

**FlowAggregationQuery** (2 changes)

* Enum value bullseyeRing was removed from property groupBy
* Enum value routingRule was removed from property groupBy

**ConversationAggregateQueryPredicate** (2 changes)

* Enum value bullseyeRing was removed from property dimension
* Enum value routingRule was removed from property dimension

**ConversationAggregationQuery** (2 changes)

* Enum value bullseyeRing was removed from property groupBy
* Enum value routingRule was removed from property groupBy


# Minor Changes (58 changes)

**/api/v2/authorization/subjects/{subjectId}/bulkreplace** (2 changes)

* Path was added
* Operation POST was added

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value Integrations was added to property serviceName

**AuditLogMessage** (2 changes)

* Enum value Integrations was added to property serviceName
* Enum value Integration was added to property entityType

**AuditQueryRequest** (1 change)

* Enum value Integrations was added to property serviceName

**AuditRealtimeQueryRequest** (1 change)

* Enum value Integrations was added to property serviceName

**AuditQueryEntity** (1 change)

* Enum value Integration was added to property name

**AuditQueryService** (1 change)

* Enum value Integrations was added to property name

**ReportingExportJobResponse** (3 changes)

* Enum value BOT_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value BOT_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value SCHEDULED_EXPORTS_VIEW was added to property viewType

**ViewFilter** (4 changes)

* Optional property customerSentimentScore was added
* Optional property customerSentimentTrend was added
* Optional property flowTransferTargets was added
* Optional property developmentName was added

**DivisionReference** (1 change)

* Model was added

**EventMessage** (1 change)

* Enum value INVALID_AGENT was added to property code

**Trustee** (1 change)

* Optional property usesDefaultRole was added

**AnalyticsConversationWithoutAttributes** (1 change)

* Optional property externalTag was added

**AnalyticsFlow** (1 change)

* Optional property recognitionFailureReason was added

**AnalyticsMediaEndpointStat** (1 change)

* Optional property eventTime was added

**AnalyticsResolution** (2 changes)

* Optional property eventTime was added
* Optional property nNextContactAvoided was added

**AnalyticsSession** (3 changes)

* Optional property authenticated was added
* Values are no longer constrained by enum members
* Optional property routingRing was added

**PostTextResponse** (1 change)

* Optional property genesysBotConnector was added

**ConversationDetailQueryPredicate** (1 change)

* Enum value externalTag was added to property dimension

**SegmentDetailQueryPredicate** (1 change)

* Enum value authenticated was added to property dimension

**Dependency** (2 changes)

* Enum value LEXV2BOT was added to property type
* Enum value LEXV2BOTALIAS was added to property type

**DependencyObject** (2 changes)

* Enum value LEXV2BOT was added to property type
* Enum value LEXV2BOTALIAS was added to property type

**GDPRSubject** (1 change)

* Optional property externalId was added

**ReportingExportJobRequest** (3 changes)

* Enum value BOT_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value BOT_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value SCHEDULED_EXPORTS_VIEW was added to property viewType

**DevelopmentActivity** (2 changes)

* Enum value AssessedContent was added to property type
* Enum value Questionnaire was added to property type

**ReportingExportMetadataJobResponse** (3 changes)

* Enum value BOT_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value BOT_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value SCHEDULED_EXPORTS_VIEW was added to property viewType

**FlowAggregateQueryPredicate** (4 changes)

* Enum value authenticated was added to property dimension
* Enum value externalTag was added to property dimension
* Enum value recognitionFailureReason was added to property dimension
* Enum value routingRing was added to property dimension

**FlowAggregationQuery** (4 changes)

* Enum value authenticated was added to property groupBy
* Enum value externalTag was added to property groupBy
* Enum value recognitionFailureReason was added to property groupBy
* Enum value routingRing was added to property groupBy

**ConversationAggregateQueryPredicate** (3 changes)

* Enum value authenticated was added to property dimension
* Enum value externalTag was added to property dimension
* Enum value routingRing was added to property dimension

**ConversationAggregationQuery** (3 changes)

* Enum value authenticated was added to property groupBy
* Enum value externalTag was added to property groupBy
* Enum value routingRing was added to property groupBy

**AnalyticsConversation** (1 change)

* Optional property externalTag was added


# Point Changes (4 changes)

**DELETE /api/v2/tokens/me** (1 change)

* Summary was changed

**POST /api/v2/outbound/dnclists/{dncListId}/phonenumbers** (1 change)

* Summary was changed

**GET /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media/{mediaId}** (1 change)

* Description was changed

**POST /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media** (1 change)

* Description was changed
