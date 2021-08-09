Platform API version: 4879


# Major Changes (20 changes)

**/api/v2/routing/email/outbound/domains/{domainId}** (1 change)

* Path /api/v2/routing/email/outbound/domains/{domainId} was removed

**/api/v2/telephony/providers/edges/autoscalinggroups/{asgId}/capacity** (1 change)

* Path /api/v2/telephony/providers/edges/autoscalinggroups/{asgId}/capacity was removed

**GET /api/v2/routing/queues/me** (1 change)

* Parameter sortBy was removed

**GET /api/v2/routing/queues** (2 changes)

* Parameter sortBy was removed
* Parameter sortOrder was added

**PATCH /api/v2/routing/conversations/{conversationId}** (1 change)

* Response 200 type was changed from RoutingConversationAttributes to RoutingConversationAttributesResponse

**GET /api/v2/routing/queues/{queueId}/members** (3 changes)

* Parameter sortBy was removed
* Parameter sortOrder was added
* Parameter memberBy was added

**GET /api/v2/routing/queues/{queueId}/users** (2 changes)

* Parameter sortBy was removed
* Parameter sortOrder was added

**GET /api/v2/speechandtextanalytics/topics** (3 changes)

* Parameter state was added
* Parameter name was added
* Parameter ids was added

**RoutingConversationAttributes** (1 change)

* Model RoutingConversationAttributes was removed

**VerificationResult** (1 change)

* Model VerificationResult was removed

**OutboundDomain** (1 change)

* Model OutboundDomain was removed

**ScaleASGResponse** (1 change)

* Model ScaleASGResponse was removed

**AsgScaleRequest** (1 change)

* Model AsgScaleRequest was removed

**WorkdayValuesMetricItem** (1 change)

* Property metricDefinition was changed from MetricDefinition to DomainEntityRef


# Minor Changes (60 changes)

**DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}** (2 changes)

* Response 409 was added
* Response 424 was added

**/uploads/v1/publicassets/{subResources}** (2 changes)

* Path was added
* Operation GET was added

**/webdeployments/v1/{subResources}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/textbots/botflows/sessions/{sessionId}/turns** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/textbots/botflows/sessions** (2 changes)

* Path was added
* Operation POST was added

**TranscriptAggregationQuery** (1 change)

* Enum value oSentimentScore was added to property metrics

**TranscriptAggregationView** (1 change)

* Enum value oSentimentScore was added to property target

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value Learning was added to property serviceName

**AuditQueryRequest** (1 change)

* Enum value Learning was added to property serviceName

**AuditLogMessage** (7 changes)

* Enum value Learning was added to property serviceName
* Enum value Promote was added to property action
* Enum value Assignment was added to property entityType
* Enum value KnowledgeSearchFeedback was added to property entityType
* Enum value KnowledgeTraining was added to property entityType
* Enum value Module was added to property entityType
* Enum value Rule was added to property entityType

**AuditRealtimeQueryRequest** (1 change)

* Enum value Learning was added to property serviceName

**AuditQueryEntity** (6 changes)

* Enum value Assignment was added to property name
* Enum value KnowledgeSearchFeedback was added to property name
* Enum value KnowledgeTraining was added to property name
* Enum value Module was added to property name
* Enum value Rule was added to property name
* Enum value Promote was added to property actions

**AuditQueryService** (1 change)

* Enum value Learning was added to property name

**AgentOwnedRouting** (1 change)

* Model was added

**FacebookIntegration** (2 changes)

* Optional property pageName was added
* Optional property pageProfileImageUrl was added

**CommonCampaignDivisionView** (1 change)

* Enum value email was added to property mediaType

**CommonCampaign** (1 change)

* Enum value email was added to property mediaType

**GamificationStatus** (1 change)

* Optional property automaticUserAssignment was added

**RoutingConversationAttributesResponse** (1 change)

* Model was added

**RoutingConversationAttributesRequest** (1 change)

* Model was added

**Format** (1 change)

* Model was added

**TextBotDisconnectAction** (1 change)

* Model was added

**TextBotExitAction** (1 change)

* Model was added

**TextBotFlowLocation** (1 change)

* Model was added

**TextBotFlowTurnResponse** (1 change)

* Model was added

**TextBotInputOutputData** (1 change)

* Model was added

**TextBotModeConstraints** (1 change)

* Model was added

**TextBotModeOutputPrompts** (1 change)

* Model was added

**TextBotOutputPrompts** (1 change)

* Model was added

**TextBotPromptSegment** (1 change)

* Model was added

**TextBotTextModeConstraints** (1 change)

* Model was added

**TextBotTurnReference** (1 change)

* Model was added

**TextBotWaitForInputAction** (1 change)

* Model was added

**TextBotErrorInputEvent** (1 change)

* Model was added

**TextBotFlowTurnRequest** (1 change)

* Model was added

**TextBotTranscript** (1 change)

* Model was added

**TextBotUserInputAlternative** (1 change)

* Model was added

**TextBotUserInputEvent** (1 change)

* Model was added

**TextBotFlowLaunchResponse** (1 change)

* Model was added

**TextBotChannel** (1 change)

* Model was added

**TextBotFlow** (1 change)

* Model was added

**TextBotFlowLaunchRequest** (1 change)

* Model was added

**TextBotUserAgent** (1 change)

* Model was added


# Point Changes (15 changes)

**POST /api/v2/audits/query/realtime** (1 change)

* Summary was changed

**GET /api/v2/routing/queues/me** (2 changes)

* Description was changed for parameter joined
* Description was changed for parameter sortOrder

**GET /api/v2/routing/queues** (3 changes)

* Description was changed for parameter name
* Description was changed for parameter id
* Description was changed for parameter divisionId

**PATCH /api/v2/routing/conversations/{conversationId}** (1 change)

* Description was changed

**GET /api/v2/routing/queues/{queueId}/members** (2 changes)

* Description was changed for parameter pageNumber
* Description was changed for parameter pageSize

**GET /api/v2/routing/queues/{queueId}/users** (2 changes)

* Description was changed for parameter pageNumber
* Description was changed for parameter pageSize

**GET /api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}** (1 change)

* Description was changed

**PUT /api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}** (1 change)

* Description was changed

**DELETE /api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}** (1 change)

* Description was changed

**POST /api/v2/telephony/providers/edges/outboundroutes** (1 change)

* Description was changed
