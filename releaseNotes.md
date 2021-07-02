Platform API version: 4806


# Major Changes (11 changes)

**GET /api/v2/knowledge/knowledgebases** (1 change)

* Parameter published was added

**GET /api/v2/fieldconfig** (1 change)

* Has been deprecated

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value Performance was removed from property serviceName

**AuditLogMessage** (3 changes)

* Enum value Performance was removed from property serviceName
* Enum value ExternalMetricData was removed from property entityType
* Enum value ExternalMetricDefinition was removed from property entityType

**AuditQueryRequest** (1 change)

* Enum value Performance was removed from property serviceName

**AuditRealtimeQueryRequest** (1 change)

* Enum value Performance was removed from property serviceName

**AuditQueryEntity** (2 changes)

* Enum value ExternalMetricData was removed from property name
* Enum value ExternalMetricDefinition was removed from property name

**AuditQueryService** (1 change)

* Enum value Performance was removed from property name


# Minor Changes (98 changes)

**/api/v2/telephony/providers/edges/autoscalinggroups/{asgId}/capacity** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/authorization/divisions/{divisionId}/restore** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/routing/email/outbound/domains/{domainId}** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/longtermforecastdata** (2 changes)

* Path was added
* Operation GET was added

**Contact** (1 change)

* Optional property integration was added

**SegmentDetailQueryPredicate** (1 change)

* Enum value agentOwned was added to property dimension

**KnowledgeBase** (1 change)

* Optional property published was added

**ContentAttachment** (1 change)

* Enum value Link was added to property mediaType

**ScaleASGResponse** (1 change)

* Model was added

**AsgScaleRequest** (1 change)

* Model was added

**AnalyticsParticipantWithoutAttributes** (1 change)

* Enum value botflow was added to property purpose

**AnalyticsSession** (1 change)

* Optional property agentOwned was added

**Dependency** (3 changes)

* Enum value DIALOGFLOWCXAGENT was added to property type
* Enum value NUANCEMIXBOT was added to property type
* Enum value NUANCEMIXINTEGRATION was added to property type

**DependencyObject** (3 changes)

* Enum value DIALOGFLOWCXAGENT was added to property type
* Enum value NUANCEMIXBOT was added to property type
* Enum value NUANCEMIXINTEGRATION was added to property type

**AuditQueryExecutionStatusResponse** (2 changes)

* Enum value EmployeePerformance was added to property serviceName
* Enum value Supportability was added to property serviceName

**AuditLogMessage** (26 changes)

* Enum value EmployeePerformance was added to property serviceName
* Enum value Supportability was added to property serviceName
* Enum value Replace was added to property action
* Enum value UpdateInService was added to property action
* Enum value UpdateOutOfService was added to property action
* Enum value Cycle was added to property action
* Enum value Scale was added to property action
* Enum value IpAllowlistClear was added to property action
* Enum value AddPairingRole was added to property action
* Enum value Add was added to property action
* Enum value ActionMap was added to property entityType
* Enum value ActionTemplate was added to property entityType
* Enum value EdgeLog was added to property entityType
* Enum value EdgeLogZip was added to property entityType
* Enum value EdgePcaps was added to property entityType
* Enum value EdgePreferences was added to property entityType
* Enum value EdgeTraceLevel was added to property entityType
* Enum value ExternalMetricsData was added to property entityType
* Enum value ExternalMetricsDefinition was added to property entityType
* Enum value MediaDiagnosticsTraceFile was added to property entityType
* Enum value OrganizationFeature was added to property entityType
* Enum value OrganizationIntegrationsAccess was added to property entityType
* Enum value Pcaps was added to property entityType
* Enum value Product was added to property entityType
* Enum value SupportFile was added to property entityType
* Enum value User was added to property entityType

**AuditQueryRequest** (2 changes)

* Enum value EmployeePerformance was added to property serviceName
* Enum value Supportability was added to property serviceName

**AuditRealtimeQueryRequest** (2 changes)

* Enum value EmployeePerformance was added to property serviceName
* Enum value Supportability was added to property serviceName

**AuditQueryEntity** (24 changes)

* Enum value ActionMap was added to property name
* Enum value ActionTemplate was added to property name
* Enum value EdgeLog was added to property name
* Enum value EdgeLogZip was added to property name
* Enum value EdgePcaps was added to property name
* Enum value EdgePreferences was added to property name
* Enum value EdgeTraceLevel was added to property name
* Enum value ExternalMetricsData was added to property name
* Enum value ExternalMetricsDefinition was added to property name
* Enum value MediaDiagnosticsTraceFile was added to property name
* Enum value OrganizationFeature was added to property name
* Enum value OrganizationIntegrationsAccess was added to property name
* Enum value Pcaps was added to property name
* Enum value Product was added to property name
* Enum value SupportFile was added to property name
* Enum value User was added to property name
* Enum value Replace was added to property actions
* Enum value UpdateInService was added to property actions
* Enum value UpdateOutOfService was added to property actions
* Enum value Cycle was added to property actions
* Enum value Scale was added to property actions
* Enum value IpAllowlistClear was added to property actions
* Enum value AddPairingRole was added to property actions
* Enum value Add was added to property actions

**AuditQueryService** (2 changes)

* Enum value EmployeePerformance was added to property name
* Enum value Supportability was added to property name

**EventMessage** (1 change)

* Enum value IMPORT_INVALID_PHONE_NUMBERS was added to property code

**OutboundDomain** (1 change)

* Model was added

**VerificationResult** (1 change)

* Model was added

**ConversationContentAttachment** (1 change)

* Enum value Link was added to property mediaType

**ConversationAggregateQueryPredicate** (1 change)

* Enum value agentOwned was added to property dimension

**ConversationAggregationQuery** (1 change)

* Enum value agentOwned was added to property groupBy

**AnalyticsParticipant** (1 change)

* Enum value botflow was added to property purpose

**FlowAggregateQueryPredicate** (1 change)

* Enum value agentOwned was added to property dimension

**FlowAggregationQuery** (1 change)

* Enum value agentOwned was added to property groupBy

**ConversationThreadingWindow** (1 change)

* Optional property defaultTimeoutMinutes was added

**EmailMessage** (1 change)

* Optional property replyTo was added

**BuShortTermForecastListItem** (1 change)

* Optional property canUseForScheduling was added

**BuForecastTimeSeriesResult** (1 change)

* Optional property forecastType was added

**BuShortTermForecast** (1 change)

* Optional property canUseForScheduling was added

**GenerateBuForecastRequest** (1 change)

* Optional property canUseForScheduling was added

**LongTermForecastPlanningGroupData** (1 change)

* Model was added

**LongTermForecastResult** (1 change)

* Model was added

**LongTermForecastResultResponse** (1 change)

* Model was added


# Point Changes (3 changes)

**GET /api/v2/knowledge/knowledgebases** (2 changes)

* Description was changed for parameter name
* Description was changed for parameter coreLanguage

**GET /api/v2/journey/actiontargets** (1 change)

* Description was changed for parameter pageSize
