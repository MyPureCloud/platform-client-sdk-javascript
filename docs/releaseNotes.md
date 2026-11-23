Platform API version: 11033




# Major Changes (1 change)

**CopilotSentimentSettings** (1 change)

* Model CopilotSentimentSettings was removed


# Minor Changes (268 changes)

**/api/v2/authorization/customattributes/itemtypes/{itemType}** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation DELETE was added

**/api/v2/analytics/agenticvirtualagents/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/agenticvirtualagents/aggregates/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/agenticvirtualagents/aggregates/jobs/{jobId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/analytics/agenticvirtualagents/aggregates/jobs/{jobId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/analytics/kpiattributions/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/kpiattributions/aggregates/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/kpiattributions/aggregates/jobs/{jobId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/analytics/kpiattributions/aggregates/jobs/{jobId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/signals/anomalydetection/queues/{queueId}/analysis** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/signals/anomalydetection/queues/available** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/signals/anomalydetection/queues/monitored** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/signals/anomalydetection/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/signals/anomalydetection/queue/anomalies/{anomalyId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/signals/anomalydetection/queue/anomalies/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/signals/anomalydetection/queue/anomalies/summary** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/signals/anomalydetection/queue/anomalies/exports/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/signals/anomalydetection/queue/anomalies/exports/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/authorization/subjects/{subjectId}/divisions/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/casemanagement/cases/{caseId}/stages/{stageId}** (1 change)

* Operation patch was added. Summary: Update the attributes of a Stage.

**/api/v2/conversations/emails/{conversationId}/draft** (4 changes)

* Path was added
* Operation POST was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/guides/transcripts/discovery/{snapshotId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/guides/transcripts/discovery** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/guides/transcripts/snapshots/{snapshotId}/generate** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/recording/snippets/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/architect/capabilities** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/timeoffrequests/evaluate/jobs/{jobId}/status** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/workforcemanagement/timeoffrequests/evaluate/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/evaluate/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/users/me/trustors** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/taskmanagement/workitems/{workitemId}/accessattributes** (2 changes)

* Path was added
* Operation PUT was added

**AuthzDefaultSearchResponse** (1 change)

* Model was added

**AuthzDefaultSearchRequest** (1 change)

* Model was added

**TokenInfo** (1 change)

* Optional property amr was added

**Limit** (2 changes)

* Enum value ai.inference was added to property namespace
* Enum value video was added to property namespace

**AgenticVirtualAgentBuiltinInputInstruction** (1 change)

* Model was added

**AgenticVirtualAgentTypeDefinition** (1 change)

* Enum value McpError was added to property type

**AgenticVirtualAgentAggregateDataContainer** (1 change)

* Model was added

**AgenticVirtualAgentAggregateQueryResponse** (1 change)

* Model was added

**AgenticVirtualAgentAggregateQueryClause** (1 change)

* Model was added

**AgenticVirtualAgentAggregateQueryFilter** (1 change)

* Model was added

**AgenticVirtualAgentAggregateQueryPredicate** (1 change)

* Model was added

**AgenticVirtualAgentAggregationQuery** (1 change)

* Model was added

**AgenticVirtualAgentAggregationSort** (1 change)

* Model was added

**AgenticVirtualAgentAggregationView** (1 change)

* Model was added

**AgenticVirtualAgentAsyncAggregationQuery** (1 change)

* Model was added

**AgenticVirtualAgentAsyncAggregateQueryResponse** (1 change)

* Model was added

**KpiAttributionAggregateDataContainer** (1 change)

* Model was added

**KpiAttributionAggregateQueryResponse** (1 change)

* Model was added

**KpiAttributionAggregateQueryClause** (1 change)

* Model was added

**KpiAttributionAggregateQueryFilter** (1 change)

* Model was added

**KpiAttributionAggregateQueryPredicate** (1 change)

* Model was added

**KpiAttributionAggregationQuery** (1 change)

* Model was added

**KpiAttributionAggregationSort** (1 change)

* Model was added

**KpiAttributionAggregationView** (1 change)

* Model was added

**KpiAttributionAsyncAggregationQuery** (1 change)

* Model was added

**KpiAttributionAsyncAggregateQueryResponse** (1 change)

* Model was added

**SummaryAggregateQueryPredicate** (1 change)

* Enum value wrapupCodesEnabled was added to property dimension

**SummaryAggregationQuery** (1 change)

* Enum value wrapupCodesEnabled was added to property groupBy

**SummaryAsyncAggregationQuery** (1 change)

* Enum value wrapupCodesEnabled was added to property groupBy

**AnomalyDetectionQueueAnalysis** (1 change)

* Model was added

**AnomalyDetectionQueueAnalysisResponse** (1 change)

* Model was added

**AnomalyDetectionTimeIntervalData** (1 change)

* Model was added

**AnomalyDetectionAvailableQueue** (1 change)

* Model was added

**AnomalyDetectionAvailableQueueListing** (1 change)

* Model was added

**AnomalyDetectionMonitoredQueue** (1 change)

* Model was added

**AnomalyDetectionMonitoredQueueListing** (1 change)

* Model was added

**AnomalyDetectionMonitoredQueuesUpdateRequest** (1 change)

* Model was added

**AnomalyDetectionMonitoringQueueOperation** (1 change)

* Model was added

**AnomalyDetectionSettingsResponse** (1 change)

* Model was added

**AnomalyDetectionSettingsRequest** (1 change)

* Model was added

**AnomalyConsensusAnalysis** (1 change)

* Model was added

**QueueAnomalyResponse** (1 change)

* Model was added

**QueueAnomalyUpdateRequest** (1 change)

* Model was added

**QueueAnomalyQueryListing** (1 change)

* Model was added

**AnomalyQueryClause** (1 change)

* Model was added

**AnomalyQueryFilters** (1 change)

* Model was added

**AnomalyQueryPredicate** (1 change)

* Model was added

**AnomalyQueryRequest** (1 change)

* Model was added

**AnomalySummary** (1 change)

* Model was added

**AnomalySummaryResponse** (1 change)

* Model was added

**AnomalySummaryRequest** (1 change)

* Model was added

**AnomalySummarySettings** (1 change)

* Model was added

**QueueAnomalyExport** (1 change)

* Model was added

**QueueAnomalyExportJob** (1 change)

* Model was added

**QueueAnomalyExportJobTemplate** (1 change)

* Model was added

**AnomalyFilterRequest** (1 change)

* Model was added

**DomainUserDivisionsResult** (1 change)

* Model was added

**DomainUserDivisionsResultListing** (1 change)

* Model was added

**CallbackMediaSettings** (2 changes)

* Optional property enableAgentReservation was added
* Optional property maxCallbackDelayHours was added

**OperatingScheduleGroup** (1 change)

* Model was added

**VideoMediaSettings** (1 change)

* Model was added

**MeteredAssignmentByAgent** (3 changes)

* Optional property percentage was added
* Optional property minimum was added
* Optional property agentConnectedTimeCriteria was added

**ActivationTrigger** (2 changes)

* Enum value ConversationTransfer was added to property triggerType
* Enum value ConsultJoin was added to property triggerType

**ChecklistActivationPayload** (2 changes)

* Enum value ConversationTransfer was added to property activationTriggerType
* Enum value ConsultJoin was added to property activationTriggerType

**TransferRequest** (1 change)

* Optional property agentIndicatedAddress was added

**CreateCallRequest** (1 change)

* Optional property agentIndicatedAddress was added

**ConsultTransfer** (1 change)

* Optional property agentIndicatedAddress was added

**ConsultTransferToAddress** (1 change)

* Optional property agentIndicatedAddress was added

**ConsultTransferToAgent** (1 change)

* Optional property agentIndicatedAddress was added

**ConsultTransferToExternal** (1 change)

* Optional property agentIndicatedAddress was added

**ConsultTransferToExternalContact** (1 change)

* Optional property agentIndicatedAddress was added

**CreateCallbackResponse** (1 change)

* Optional property scheduleEvaluationResult was added

**PatchCallbackResponse** (1 change)

* Optional property scheduleEvaluationResult was added

**EmailMessage** (1 change)

* Optional property overrideHeaders was added

**PatchDraftRequest** (1 change)

* Model was added

**CreateDraftRequest** (1 change)

* Model was added

**FacebookAppCredentials** (1 change)

* Optional property configurationId was added

**WhatsAppIntegration** (2 changes)

* Optional property phoneNumberId was added
* Optional property businessPortfolioId was added

**WhatsAppEmbeddedSignupIntegrationRequest** (4 changes)

* Optional property embeddedSignupTokenCode was added
* Optional property whatsAppBusinessAccountId was added
* Optional property phoneNumberId was added
* Optional property businessPortfolioId was added

**TransferToAddressRequest** (1 change)

* Optional property agentIndicatedAddress was added

**TransferToAgentRequest** (1 change)

* Optional property agentIndicatedAddress was added

**TransferToExternalRequest** (1 change)

* Optional property agentIndicatedAddress was added

**TransferToExternalContactRequest** (1 change)

* Optional property agentIndicatedAddress was added

**Suggestion** (1 change)

* Enum value Sentiment was added to property triggerType

**GetDiscoveryResponse** (1 change)

* Model was added

**RfcMetadata** (1 change)

* Model was added

**DiscoveryResponse** (1 change)

* Model was added

**DiscoveryRequest** (1 change)

* Model was added

**GenerateEntryResponse** (1 change)

* Model was added

**GenerateEntryRequest** (1 change)

* Model was added

**GetGenerationResponse** (1 change)

* Model was added

**TestExecutionOperationResult** (1 change)

* Optional property durationMs was added

**TestExecutionResult** (1 change)

* Optional property durationMs was added

**JourneyViewElementFilterPredicate** (1 change)

* Optional property arrayOperator was added

**ApprovalNamespace** (2 changes)

* Enum value ai.inference was added to property namespace
* Enum value video was added to property namespace

**LimitChangeRequestDetails** (2 changes)

* Enum value ai.inference was added to property namespace
* Enum value video was added to property namespace

**StatusChange** (2 changes)

* Enum value ai.inference was added to property namespace
* Enum value video was added to property namespace

**Recording** (1 change)

* Enum value Video was added to property mediaSubtype

**OrphanRecording** (1 change)

* Enum value Video was added to property mediaSubtype

**RecordingMetadata** (1 change)

* Enum value Video was added to property mediaSubtype

**SnippetRecordingSettings** (1 change)

* Model was added

**GenericDataIngestionRuleResponse** (7 changes)

* Optional property nonOwnedAccount was added
* Optional property hashtags was added
* Optional property integrationId was added
* Optional property searchTerms was added
* Optional property messageTypes was added
* Optional property pageId was added
* Optional property externalSource was added

**TestTopicPhraseJobs** (2 changes)

* Optional property processedTranscriptsCount was added
* Optional property matchedTranscriptsCount was added

**CapabilitiesIntentDetectionSettings** (1 change)

* Model was added

**CapabilitiesNluSettings** (1 change)

* Model was added

**CapabilitiesNluSupport** (1 change)

* Model was added

**CapabilitiesNluSupportedLanguage** (1 change)

* Model was added

**Capabilities** (1 change)

* Model was added

**CapabilitiesAction** (1 change)

* Model was added

**CapabilitiesActionLimitInfo** (1 change)

* Model was added

**CapabilitiesAvailability** (1 change)

* Model was added

**CapabilitiesCategoryInfo** (1 change)

* Model was added

**CapabilitiesCopilot** (1 change)

* Model was added

**CapabilitiesDataType** (1 change)

* Model was added

**CapabilitiesDataTypeCharacteristicModel** (1 change)

* Model was added

**CapabilitiesDataTypeCharacteristicsModel** (1 change)

* Model was added

**CapabilitiesDataTypeDirectionByObject** (1 change)

* Model was added

**CapabilitiesDataTypeFacetsLimit** (1 change)

* Model was added

**CapabilitiesDataTypeFacetsModel** (1 change)

* Model was added

**CapabilitiesDataTypeInputOutputInfo** (1 change)

* Model was added

**CapabilitiesDataTypeProperty** (1 change)

* Model was added

**CapabilitiesDependencyType** (1 change)

* Model was added

**CapabilitiesFeatureSupport** (1 change)

* Model was added

**CapabilitiesFlowComponent** (1 change)

* Model was added

**CapabilitiesFlowType** (1 change)

* Model was added

**CapabilitiesFlowTypeLanguageSupport** (1 change)

* Model was added

**CapabilitiesFlowTypeLimitInfo** (1 change)

* Model was added

**CapabilitiesFlowTypeUserVariableLimits** (1 change)

* Model was added

**CapabilitiesFlowTypesAvailability** (1 change)

* Model was added

**CapabilitiesFuncOpOverloadIdModel** (1 change)

* Model was added

**CapabilitiesFunction** (1 change)

* Model was added

**CapabilitiesGrammarsSupport** (1 change)

* Model was added

**CapabilitiesKnowledgeBase** (1 change)

* Model was added

**CapabilitiesLanguage** (1 change)

* Model was added

**CapabilitiesLanguageContextsModel** (1 change)

* Model was added

**CapabilitiesLanguageFeatures** (1 change)

* Model was added

**CapabilitiesLanguageTTS** (1 change)

* Model was added

**CapabilitiesLanguageTTSEngine** (1 change)

* Model was added

**CapabilitiesLanguageTTSEngineVoice** (1 change)

* Model was added

**CapabilitiesLimitCondition** (1 change)

* Model was added

**CapabilitiesLimitValue** (1 change)

* Model was added

**CapabilitiesNavigatorSupport** (1 change)

* Model was added

**CapabilitiesOrganization** (1 change)

* Model was added

**CapabilitiesSTTConfiguration** (1 change)

* Model was added

**CapabilitiesSTTEngine** (1 change)

* Model was added

**CapabilitiesSTTLanguageOverride** (1 change)

* Model was added

**CapabilitiesSTTSettings** (1 change)

* Model was added

**CapabilitiesTTSConfiguration** (1 change)

* Model was added

**CapabilitiesTTSEngine** (1 change)

* Model was added

**CapabilitiesTTSVoice** (1 change)

* Model was added

**CapabilitiesUnavailableReason** (1 change)

* Model was added

**CapabilitiesWorkitemEvent** (1 change)

* Model was added

**CapabilitiesWorkitemsSupport** (1 change)

* Model was added

**Dependency** (1 change)

* Enum value EXTERNALMCPTOOL was added to property type

**DependencyObject** (1 change)

* Enum value EXTERNALMCPTOOL was added to property type

**LocalizedLabels** (2 changes)

* Enum value VideoRecordingConsentDisclaimer was added to property key
* Enum value VideoRecordingConsentAcceptance was added to property key

**VideoRecordingSettings** (1 change)

* Model was added

**VideoSettings** (1 change)

* Optional property recording was added

**EvaluateTimeOffJobReference** (1 change)

* Model was added

**EvaluateTimeOffJobResponse** (1 change)

* Model was added

**UpdateEvaluateTimeOffJobStatus** (1 change)

* Model was added

**EvaluateTimeOffResponse** (1 change)

* Model was added

**TimeOffRequestBulkEvaluateResult** (1 change)

* Model was added

**TimeOffRequestBulkEvaluateTemplateItem** (1 change)

* Model was added

**EvaluateTimeOffAutoApproval** (1 change)

* Model was added

**EvaluateTimeOffRequest** (1 change)

* Model was added

**WorkitemsAttributeChangeExternalContactDivisionAccess** (1 change)

* Model was added

**BillingProduct** (4 changes)

* Optional property category was added
* Optional property capability was added
* Optional property platform was added
* Optional property family was added

**BillingContract** (1 change)

* Optional property billingFrequency was added

**BillingContractSummary** (1 change)

* Optional property billingFrequency was added

**StageUpdate** (1 change)

* Model was added

**WorkitemAccessAttributesUpdate** (1 change)

* Model was added


# Point Changes (4 changes)

**GET /api/v2/billing/contracts** (2 changes)

* Description was changed for parameter dateStart
* Description was changed for parameter dateEnd

**GET /api/v2/billing/contracts/invoices** (2 changes)

* Description was changed for parameter dateStart
* Description was changed for parameter dateEnd
