Platform API version: 6586


# Major Changes (4 changes)

**POST /api/v2/conversations/emails/{conversationId}/messages** (1 change)

* Response 200 type was changed from EmailMessage to EmailMessageReply

**GET /api/v2/languageunderstanding/domains/{domainId}/feedback** (1 change)

* Parameter includeTrainingUtterances was added

**GET /api/v2/stations/settings** (1 change)

* Has been deprecated

**PATCH /api/v2/stations/settings** (1 change)

* Has been deprecated


# Minor Changes (102 changes)

**/api/v2/conversations/{conversationId}/cobrowse** (2 changes)

* Path was added
* Operation POST was added

**POST /api/v2/conversations/messaging/integrations/whatsapp** (1 change)

* Response 409 was added

**/api/v2/webdeployments/deployments/{deploymentId}/cobrowse/{sessionId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/orgauthorization/trustees/{trusteeOrgId}/groups/{trusteeGroupId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/orgauthorization/trustees/{trusteeOrgId}/groups/{trusteeGroupId}/roledivisions** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/orgauthorization/trustees/{trusteeOrgId}/groups/{trusteeGroupId}/roles** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/orgauthorization/trustees/{trusteeOrgId}/groups** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/orgauthorization/trustors/{trustorOrgId}/groups/{trustorGroupId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/orgauthorization/trustors/{trustorOrgId}/groups** (2 changes)

* Path was added
* Operation GET was added

**AnalyticsEvaluation** (1 change)

* Optional property evaluationStatus was added

**JourneyAggregateQueryPredicate** (10 changes)

* Enum value journeyIpGeolocationCountry was added to property dimension
* Enum value touchpointAgentId was added to property dimension
* Enum value touchpointAttributionScope was added to property dimension
* Enum value touchpointChannelMessageType was added to property dimension
* Enum value touchpointChannelPlatform was added to property dimension
* Enum value touchpointChannelType was added to property dimension
* Enum value touchpointConversationId was added to property dimension
* Enum value touchpointInteractionType was added to property dimension
* Enum value touchpointQueueId was added to property dimension
* Enum value touchpointWrapupCode was added to property dimension

**JourneyAggregationView** (1 change)

* Enum value oJourneyOutcomeTouchpointValue was added to property target

**JourneyAggregationQuery** (11 changes)

* Enum value journeyIpGeolocationCountry was added to property groupBy
* Enum value touchpointAgentId was added to property groupBy
* Enum value touchpointAttributionScope was added to property groupBy
* Enum value touchpointChannelMessageType was added to property groupBy
* Enum value touchpointChannelPlatform was added to property groupBy
* Enum value touchpointChannelType was added to property groupBy
* Enum value touchpointConversationId was added to property groupBy
* Enum value touchpointInteractionType was added to property groupBy
* Enum value touchpointQueueId was added to property groupBy
* Enum value touchpointWrapupCode was added to property groupBy
* Enum value oJourneyOutcomeTouchpointValue was added to property metrics

**ReportingExportJobResponse** (1 change)

* Enum value INTERACTION_DETAIL_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (1 change)

* Enum value INTERACTION_DETAIL_VIEW was added to property viewType

**ReportingExportJobRequest** (1 change)

* Enum value INTERACTION_DETAIL_VIEW was added to property viewType

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value Scripter was added to property serviceName

**AuditQueryRequest** (1 change)

* Enum value Scripter was added to property serviceName

**AuditLogMessage** (7 changes)

* Enum value Scripter was added to property serviceName
* Enum value ComposerPage was added to property entityType
* Enum value ComposerScript was added to property entityType
* Enum value ComposerPublishedScript was added to property entityType
* Enum value ComposerTemplate was added to property entityType
* Enum value IntentMiner was added to property entityType
* Enum value TopicMiner was added to property entityType

**EntityChange** (6 changes)

* Enum value ComposerPage was added to property entityType
* Enum value ComposerScript was added to property entityType
* Enum value ComposerPublishedScript was added to property entityType
* Enum value ComposerTemplate was added to property entityType
* Enum value IntentMiner was added to property entityType
* Enum value TopicMiner was added to property entityType

**AuditRealtimeQueryRequest** (1 change)

* Enum value Scripter was added to property serviceName

**AuditQueryEntity** (6 changes)

* Enum value ComposerPage was added to property name
* Enum value ComposerScript was added to property name
* Enum value ComposerPublishedScript was added to property name
* Enum value ComposerTemplate was added to property name
* Enum value IntentMiner was added to property name
* Enum value TopicMiner was added to property name

**AuditQueryService** (1 change)

* Enum value Scripter was added to property name

**CobrowseWebMessagingSession** (1 change)

* Model was added

**Participant** (1 change)

* Optional property mediaRoles was added

**CallMediaParticipant** (1 change)

* Optional property mediaRoles was added

**CallbackMediaParticipant** (1 change)

* Optional property mediaRoles was added

**ChatMediaParticipant** (1 change)

* Optional property mediaRoles was added

**CobrowseMediaParticipant** (1 change)

* Optional property mediaRoles was added

**EmailMessage** (1 change)

* Optional property state was added

**EmailMediaParticipant** (1 change)

* Optional property mediaRoles was added

**EmailMessageReply** (1 change)

* Model was added

**MessageMediaParticipant** (1 change)

* Optional property mediaRoles was added

**ParticipantBasic** (1 change)

* Optional property mediaRoles was added

**Metric** (2 changes)

* Optional property precision was added
* Optional property timeDisplayUnit was added

**CreateMetric** (2 changes)

* Optional property precision was added
* Optional property timeDisplayUnit was added

**DocumentQueryPredicate** (1 change)

* Enum value documentId was added to property fields

**TrustGroupEntityListing** (1 change)

* Model was added

**Compliance** (1 change)

* Model was added

**ComplianceResponse** (1 change)

* Model was added

**HelpSettings** (1 change)

* Model was added

**OptInSettings** (1 change)

* Model was added

**SmsPhoneNumber** (2 changes)

* Optional property integration was added
* Optional property compliance was added

**StopSettings** (1 change)

* Model was added

**KeyPerformanceIndicator** (4 changes)

* Enum value SalesValue was added to property kpiType
* Enum value Outcome was added to property source
* Enum value None was added to property source
* Optional property outcomeConfig was added

**OutcomeConfig** (1 change)

* Model was added


# Point Changes (4 changes)

**GET /api/v2/stations/settings** (1 change)

* Description was changed

**PATCH /api/v2/stations/settings** (1 change)

* Description was changed

**GET /api/v2/learning/assignments** (1 change)

* Description was changed for parameter types

**GET /api/v2/learning/assignments/me** (1 change)

* Description was changed for parameter types
