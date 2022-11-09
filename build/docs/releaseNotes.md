Platform API version: 6309


# Major Changes (16 changes)

**/api/v2/gamification/metrics/{metricId}** (1 change)

* Path /api/v2/gamification/metrics/{metricId} was removed

**GET /api/v2/analytics/botflows/{botFlowId}/reportingturns** (1 change)

* Parameter language was added

**GET /api/v2/conversations/messaging/integrations** (2 changes)

* Parameter expand was changed from string to array
* Parameter messagingSetting.id was added

**GET /api/v2/conversations/messaging/integrations/facebook** (1 change)

* Parameter messagingSetting.id was added

**GET /api/v2/conversations/messaging/integrations/line** (1 change)

* Parameter messagingSetting.id was added

**GET /api/v2/conversations/messaging/integrations/open** (1 change)

* Parameter messagingSetting.id was added

**GET /api/v2/conversations/messaging/integrations/twitter** (1 change)

* Parameter messagingSetting.id was added

**GET /api/v2/conversations/messaging/integrations/whatsapp** (1 change)

* Parameter messagingSetting.id was added

**GET /api/v2/flows/datatables/{datatableId}/rows** (1 change)

* Parameter sortOrder was added

**GET /api/v2/knowledge/guest/sessions/{sessionId}/documents** (1 change)

* Parameter pageSize was changed from string to integer

**KnowledgeExportJobResponse** (1 change)

* Required property fileType was added

**KnowledgeExportJobRequest** (1 change)

* Required property fileType was added

**KnowledgeDocumentSearchRequest** (3 changes)

* Enum value ASC was removed from property sortOrder
* Enum value DESC was removed from property sortOrder
* Enum value SCORE was removed from property sortOrder


# Minor Changes (62 changes)

**/api/v2/analytics/actions/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/routing/skillgroups/{skillGroupId}/members/divisions** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/routing/skillgroups/{skillGroupId}/members** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/skillgroups/{skillGroupId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/routing/skillgroups** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**CommunicationEndedEvent** (2 changes)

* Enum value TransferACD was added to property disconnectType
* Enum value TransferUser was added to property disconnectType

**ActionAggregateDataContainer** (1 change)

* Model was added

**ActionAggregateQueryResponse** (1 change)

* Model was added

**ActionAggregateQueryClause** (1 change)

* Model was added

**ActionAggregateQueryFilter** (1 change)

* Model was added

**ActionAggregateQueryPredicate** (1 change)

* Model was added

**ActionAggregationQuery** (1 change)

* Model was added

**ActionAggregationView** (1 change)

* Model was added

**ReportingTurnAction** (2 changes)

* Enum value FindQueueAction was added to property actionType
* Enum value FindQueueByIdAction was added to property actionType

**ViewFilter** (1 change)

* Optional property integrationIds was added

**AuditLogMessage** (3 changes)

* Enum value Group was added to property entityType
* Enum value Public was added to property entityType
* Enum value Tag was added to property entityType

**EntityChange** (3 changes)

* Enum value Group was added to property entityType
* Enum value Public was added to property entityType
* Enum value Tag was added to property entityType

**AuditQueryEntity** (3 changes)

* Enum value Group was added to property name
* Enum value Public was added to property name
* Enum value Tag was added to property name

**ExternalMetricDataProcessedItem** (3 changes)

* Optional property type was added
* Optional property totalValue was added
* Optional property totalCount was added

**ExternalMetricDataUnprocessedItem** (1 change)

* Optional property type was added

**ExternalMetricDataItem** (1 change)

* Optional property type was added

**KnowledgeImportJobResponse** (1 change)

* Enum value Xlsx was added to property fileType

**KnowledgeImportJobRequest** (1 change)

* Enum value Xlsx was added to property fileType

**KnowledgeDocumentSearchRequest** (2 changes)

* Enum value Asc was added to property sortOrder
* Enum value Desc was added to property sortOrder

**IntentDefinition** (1 change)

* Optional property id was added

**NluUtterance** (1 change)

* Optional property id was added

**LimitChangeRequestDetails** (1 change)

* Enum value secondary.automation.testing was added to property namespace

**StatusChange** (1 change)

* Enum value secondary.automation.testing was added to property namespace

**NluInfo** (1 change)

* Optional property nluData was added

**Predictor** (1 change)

* Optional property models was added

**PredictorModelBrief** (1 change)

* Model was added

**PredictorModelRetrainingError** (1 change)

* Model was added

**SkillGroupMemberDivisions** (1 change)

* Model was added

**SkillGroupMemberDivisionList** (1 change)

* Model was added

**SkillGroupMemberEntityListing** (1 change)

* Model was added

**SkillGroup** (1 change)

* Model was added

**SkillGroupCondition** (1 change)

* Model was added

**SkillGroupLanguageCondition** (1 change)

* Model was added

**SkillGroupRoutingCondition** (1 change)

* Model was added

**SkillGroupEntityListing** (1 change)

* Model was added

**TextBotFlowLaunchRequest** (1 change)

* Optional property language was added

**VoicemailGroupPolicy** (1 change)

* Optional property includeEmailTranscriptions was added


# Point Changes (3 changes)

**GET /api/v2/flows/datatables/divisionviews** (1 change)

* Description was changed for parameter name

**GET /api/v2/flows/datatables** (1 change)

* Description was changed for parameter name

**GET /api/v2/knowledge/guest/sessions/{sessionId}/documents** (1 change)

* Description was changed for parameter includeSubcategories
