Platform API version: 4182


# Major Changes (11 changes)

**GET /api/v2/coaching/appointments** (3 changes)

* Parameter relationships was added
* Parameter completionInterval was added
* Parameter overdue was added

**GET /api/v2/coaching/appointments/me** (3 changes)

* Parameter relationships was added
* Parameter completionInterval was added
* Parameter overdue was added

**ReportingExportJobResponse** (1 change)

* Required property runId was added

**Permissions** (2 changes)

* Property id was removed
* Property name was removed

**ExternalOrganizationTrustorLink** (2 changes)

* Property id was removed
* Property selfUri was removed


# Minor Changes (69 changes)

**/api/v2/audits/query/realtime/servicemapping** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/speechandtextanalytics/conversations/{conversationId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/coaching/appointments/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**AcwSettings** (1 change)

* Enum value AGENT_REQUESTED was added to property wrapupPrompt

**UserScheduleAdherence** (1 change)

* Optional property team was added

**ViewFilter** (1 change)

* Enum value webmessaging was added to property messageTypes

**Recipient** (1 change)

* Enum value webmessaging was added to property messengerType

**Message** (2 changes)

* Enum value unknown was added to property type
* Enum value webmessaging was added to property type

**Participant** (1 change)

* Enum value agentRequested was added to property wrapupPrompt

**FlowAggregateQueryPredicate** (2 changes)

* Enum value agentRank was added to property dimension
* Enum value proposedAgentId was added to property dimension

**FlowAggregationQuery** (2 changes)

* Enum value agentRank was added to property groupBy
* Enum value proposedAgentId was added to property groupBy

**MessagingIntegration** (1 change)

* Enum value webmessaging was added to property messengerType

**IpAddressRange** (1 change)

* Enum value smtp was added to property service

**OAuthClientListing** (1 change)

* Optional property dateToDelete was added

**OAuthClient** (1 change)

* Optional property dateToDelete was added

**OAuthClientRequest** (1 change)

* Optional property dateToDelete was added

**AuditQueryEntity** (3 changes)

* Enum value Trigger was added to property name
* Enum value Enable was added to property actions
* Enum value Disable was added to property actions

**AuditQueryService** (1 change)

* Enum value Triggers was added to property name

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value Triggers was added to property serviceName

**AuditQueryRequest** (1 change)

* Enum value Triggers was added to property serviceName

**AuditLogMessage** (4 changes)

* Enum value Triggers was added to property serviceName
* Enum value Enable was added to property action
* Enum value Disable was added to property action
* Enum value Trigger was added to property entityType

**AuditRealtimeQueryRequest** (1 change)

* Enum value Triggers was added to property serviceName

**MessagingSticker** (1 change)

* Enum value webmessaging was added to property messengerType

**MessageMediaParticipant** (2 changes)

* Enum value unknown was added to property type
* Enum value webmessaging was added to property type

**CreateOutboundMessagingConversationRequest** (1 change)

* Enum value webmessaging was added to property toAddressMessengerType

**SendAgentlessOutboundMessageResponse** (1 change)

* Enum value webmessaging was added to property messengerType

**SendAgentlessOutboundMessageRequest** (1 change)

* Enum value webmessaging was added to property toAddressMessengerType

**MessageData** (1 change)

* Enum value webmessaging was added to property messengerType

**WfmBusinessUnitReference** (1 change)

* id is no longer readonly

**WfmScheduleReference** (1 change)

* id is no longer readonly

**AnalyticsProposedAgent** (1 change)

* Model was added

**AnalyticsSession** (2 changes)

* Optional property agentAssistantId was added
* Optional property proposedAgents was added

**ConversationAggregateQueryPredicate** (2 changes)

* Enum value agentRank was added to property dimension
* Enum value proposedAgentId was added to property dimension

**ConversationAggregationQuery** (2 changes)

* Enum value agentRank was added to property groupBy
* Enum value proposedAgentId was added to property groupBy

**SegmentDetailQueryPredicate** (2 changes)

* Enum value agentRank was added to property dimension
* Enum value proposedAgentId was added to property dimension

**CoachingAppointmentResponse** (1 change)

* Optional property isOverdue was added

**OrgOAuthClient** (1 change)

* Optional property dateToDelete was added

**ParticipantBasic** (1 change)

* Enum value agentRequested was added to property wrapupPrompt

**ConversationMetrics** (1 change)

* Model was added

**EventMessage** (2 changes)

* Enum value CAMPAIGN_CONTENT_TEMPLATE_SUBSTITUTION_MISMATCH was added to property code
* Enum value CAMPAIGN_MESSAGE_CHARACTER_LIMIT_EXCEEDED was added to property code

**BuAgentSchedulesQueryResponse** (1 change)

* Optional property businessUnitTimeZone was added

**UserSearchRequest** (1 change)

* Optional property enforcePermissions was added

**ExternalOrganizationTrustorLink** (1 change)

* Optional property externalOrganizationUri was added

**CoachingAppointmentAggregateResponse** (1 change)

* Model was added

**QueryResponseData** (1 change)

* Model was added

**QueryResponseGroupedData** (1 change)

* Model was added

**QueryResponseMetric** (1 change)

* Model was added

**QueryResponseStats** (1 change)

* Model was added

**CoachingAppointmentAggregateRequest** (1 change)

* Model was added

**QueryRequestClause** (1 change)

* Model was added

**QueryRequestFilter** (1 change)

* Model was added

**QueryRequestPredicate** (1 change)

* Model was added


# Point Changes (0 changes)
