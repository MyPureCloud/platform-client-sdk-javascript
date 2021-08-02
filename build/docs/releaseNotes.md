Platform API version: 4857


# Major Changes (6 changes)

**GET /api/v2/flows/datatables** (1 change)

* Parameter name was added

**ButtonComponent** (2 changes)

* Property id was removed
* Property text was removed

**ContentActions** (2 changes)

* Property commandName was removed
* Property context was removed

**ContentGeneric** (1 change)

* Property id was removed


# Minor Changes (84 changes)

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports/{importId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/documentuploads** (2 changes)

* Path was added
* Operation POST was added

**AnalyticsFlow** (1 change)

* Enum value VOICEMAIL was added to property flowType

**AnalyticsSession** (4 changes)

* Optional property deliveryStatus was added
* Optional property deliveryStatusChangeDate was added
* Optional property eligibleAgentCounts was added
* Optional property waitingInteractionCounts was added

**ConversationAggregateQueryPredicate** (3 changes)

* Enum value deliveryStatus was added to property dimension
* Enum value eligibleAgentCount was added to property dimension
* Enum value waitingInteractionCount was added to property dimension

**ConversationAggregationQuery** (3 changes)

* Enum value deliveryStatus was added to property groupBy
* Enum value eligibleAgentCount was added to property groupBy
* Enum value waitingInteractionCount was added to property groupBy

**SegmentDetailQueryPredicate** (1 change)

* Enum value deliveryStatus was added to property dimension

**FlowAggregateQueryPredicate** (3 changes)

* Enum value deliveryStatus was added to property dimension
* Enum value eligibleAgentCount was added to property dimension
* Enum value waitingInteractionCount was added to property dimension

**FlowAggregationQuery** (3 changes)

* Enum value deliveryStatus was added to property groupBy
* Enum value eligibleAgentCount was added to property groupBy
* Enum value waitingInteractionCount was added to property groupBy

**ViewFilter** (2 changes)

* Enum value voicemail was added to property flowTypes
* Optional property blockedReasons was added

**ReportingExportJobResponse** (2 changes)

* Enum value ACTION_MAP_BLOCKED_CONSTRAINTS_DETAIL_VIEW was added to property viewType
* Enum value ACTION_MAP_BLOCKED_CONSTRAINTS_INTERVAL_DETAIL_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (2 changes)

* Enum value ACTION_MAP_BLOCKED_CONSTRAINTS_DETAIL_VIEW was added to property viewType
* Enum value ACTION_MAP_BLOCKED_CONSTRAINTS_INTERVAL_DETAIL_VIEW was added to property viewType

**ReportingExportJobRequest** (2 changes)

* Enum value ACTION_MAP_BLOCKED_CONSTRAINTS_DETAIL_VIEW was added to property viewType
* Enum value ACTION_MAP_BLOCKED_CONSTRAINTS_INTERVAL_DETAIL_VIEW was added to property viewType

**AuditQueryEntity** (3 changes)

* Enum value KnowledgeBase was added to property name
* Enum value KnowledgeCategory was added to property name
* Enum value KnowledgeDocument was added to property name

**AuditQueryService** (2 changes)

* Enum value Knowledge was added to property name
* Enum value ProcessAutomation was added to property name

**AuditLogMessage** (5 changes)

* Enum value Knowledge was added to property serviceName
* Enum value ProcessAutomation was added to property serviceName
* Enum value KnowledgeBase was added to property entityType
* Enum value KnowledgeCategory was added to property entityType
* Enum value KnowledgeDocument was added to property entityType

**AuditRealtimeQueryRequest** (2 changes)

* Enum value Knowledge was added to property serviceName
* Enum value ProcessAutomation was added to property serviceName

**AuditQueryExecutionStatusResponse** (2 changes)

* Enum value Knowledge was added to property serviceName
* Enum value ProcessAutomation was added to property serviceName

**AuditQueryRequest** (2 changes)

* Enum value Knowledge was added to property serviceName
* Enum value ProcessAutomation was added to property serviceName

**CallMediaParticipant** (1 change)

* Optional property coachedParticipantId was added

**ImportError** (1 change)

* Model was added

**ImportReport** (1 change)

* Model was added

**KnowledgeImport** (1 change)

* Model was added

**ResultCounters** (1 change)

* Model was added

**ImportStatusRequest** (1 change)

* Model was added

**NluDomain** (1 change)

* Optional property engineVersion was added

**ADFS** (2 changes)

* Optional property sloURI was added
* Optional property sloBinding was added

**CustomerInteractionCenter** (2 changes)

* Optional property sloURI was added
* Optional property sloBinding was added

**GSuite** (2 changes)

* Optional property sloURI was added
* Optional property sloBinding was added

**GenericSAML** (2 changes)

* Optional property sloURI was added
* Optional property sloBinding was added

**IdentityNow** (2 changes)

* Optional property sloURI was added
* Optional property sloBinding was added

**Okta** (2 changes)

* Optional property sloURI was added
* Optional property sloBinding was added

**OneLogin** (2 changes)

* Optional property sloURI was added
* Optional property sloBinding was added

**PingIdentity** (2 changes)

* Optional property sloURI was added
* Optional property sloBinding was added

**PureEngage** (2 changes)

* Optional property sloURI was added
* Optional property sloBinding was added

**Salesforce** (2 changes)

* Optional property sloURI was added
* Optional property sloBinding was added

**Response** (1 change)

* Optional property assets was added

**Flow** (2 changes)

* Enum value VOICEMAIL was added to property type
* Enum value VOICEMAIL was added to property compatibleFlowTypes

**FlowVersion** (1 change)

* Enum value VOICEMAIL was added to property compatibleFlowTypes

**Dependency** (1 change)

* Enum value VOICEMAILFLOW was added to property type

**DependencyObject** (1 change)

* Enum value VOICEMAILFLOW was added to property type

**FlowDivisionView** (1 change)

* Enum value VOICEMAIL was added to property type


# Point Changes (0 changes)
