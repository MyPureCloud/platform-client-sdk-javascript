Platform API version: 10727




# Major Changes (11 changes)

**GET /api/v2/businessrules/decisiontables/{tableId}/versions** (2 changes)

* Parameter status was added
* Parameter hasSnapshot was added

**GET /api/v2/conversations/messages/{messageId}/details** (1 change)

* Parameter useNormalizedMessage was removed

**GET /api/v2/conversations/messages/{conversationId}/messages/{messageId}** (1 change)

* Parameter useNormalizedMessage was removed

**POST /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages** (1 change)

* Parameter useNormalizedMessage was removed

**POST /api/v2/conversations/messages/{conversationId}/messages/bulk** (1 change)

* Parameter useNormalizedMessage was removed

**POST /api/v2/conversations/messages/agentless** (1 change)

* Parameter useNormalizedMessage was removed

**MessageData** (2 changes)

* Property textBody was removed
* Property media was removed

**SendAgentlessOutboundMessageResponse** (2 changes)

* Property textBody was removed
* Property messagingTemplate was removed


# Minor Changes (111 changes)

**/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rollback** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/snapshot** (3 changes)

* Path was added
* Operation POST was added
* Operation DELETE was added

**/api/v2/businessrules/schemas/{schemaId}/versions/{schemaVersion}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/businessrules/schemas/{schemaId}/versions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/prefixes** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/prefixes/bulk** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/telephony/prefixes/simulate/call** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/fax/{faxId}/status** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/providers/edges/{edgeId}/offlineconfiguration** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/telephony/providers/edges/trunkbasesettings/site/{siteId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/providers/edges/trunkbasesettings/search** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/telephony/providers/edges/trunks/search** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/graphs/clusterscans/{scanId}/clusters/{clusterId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/graphs/clusterscans/{scanId}/clusters** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/graphs/clusterscans/{scanId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/graphs/clusterscans/{scanId}/statistics** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/graphs/clusterscans** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/graphs/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/externalcontacts/graphs/clusterscans/latest** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/graphs/clusterscans/latest/statistics** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/graphs/clusterscans/{scanId}/clusters/{clusterId}/merge** (2 changes)

* Path was added
* Operation PUT was added

**CopilotCondition** (1 change)

* Enum value Sentiment was added to property conditionType

**CopilotSentimentSettings** (1 change)

* Model was added

**Group** (1 change)

* Optional property email was added

**DecisionTable** (1 change)

* Optional property snapshotCount was added

**DecisionTableVersion** (2 changes)

* Optional property rollbackReason was added
* Optional property snapshot was added

**RollbackDecisionTableVersionRequest** (1 change)

* Model was added

**CreateDecisionTableSnapshotRequest** (1 change)

* Model was added

**PrefixListing** (1 change)

* Model was added

**PrefixListingItem** (1 change)

* Model was added

**BulkEntityErrorPrefix** (1 change)

* Model was added

**BulkPrefixesResponse** (1 change)

* Model was added

**BulkResponseResultPrefixPrefixBulkEntityErrorPrefix** (1 change)

* Model was added

**Prefix** (1 change)

* Model was added

**BulkPrefixesRequest** (1 change)

* Model was added

**CallSimulationResult** (1 change)

* Model was added

**SuggestionContext** (1 change)

* Optional property participantType was added

**Duration** (1 change)

* Optional property positive was added

**GroupUpdate** (1 change)

* Optional property email was added

**GroupCreate** (1 change)

* Optional property email was added

**OutboundFaxStatus** (1 change)

* Model was added

**TrustGroup** (1 change)

* Optional property email was added

**AlertRuleProperties** (1 change)

* Enum value Anomaly was added to property type

**CommonRulePredicate** (1 change)

* Optional property characteristic was added

**GetAlertQuery** (3 changes)

* Enum value WorkforceManagement was added to property ruleType
* Enum value OperationalConsole was added to property ruleType
* Enum value Anomaly was added to property ruleType

**CommonRule** (1 change)

* Enum value Anomaly was added to property type

**GetRulesQuery** (3 changes)

* Enum value WorkforceManagement was added to property ruleType
* Enum value OperationalConsole was added to property ruleType
* Enum value Anomaly was added to property ruleType

**DataIngestionRuleCriteria** (1 change)

* Enum value LinkedIn was added to property effectivePlatform

**EdgeOfflineConfigurationResponse** (1 change)

* Model was added

**EdgeOfflineConfiguration** (1 change)

* Model was added

**EdgeOfflineConfigurationInterface** (1 change)

* Model was added

**EdgeOfflineConfigurationNetwork** (1 change)

* Model was added

**TrunkBasesSearchResponse** (1 change)

* Model was added

**TelephonySearchCriteria** (1 change)

* Model was added

**TelephonySearchRequest** (1 change)

* Model was added

**TrunkInstanceSearchResponse** (1 change)

* Model was added

**SchedulingSettingsResponse** (1 change)

* Optional property scheduleVisibility was added

**SchedulingSettingsRequest** (1 change)

* Optional property scheduleVisibility was added

**UserStaffingGroupResponse** (2 changes)

* Optional property startDate was added
* Optional property endDate was added

**ActivityPlanJobException** (6 changes)

* Enum value InvalidUserIds was added to property exceptionType
* Enum value InvalidFacilitatorId was added to property exceptionType
* Enum value RuleError was added to property exceptionType
* Enum value InvalidOccurrence was added to property exceptionType
* Enum value NoScheduleFound was added to property exceptionType
* Enum value SessionUsersNotRemoved was added to property exceptionType

**CapacityPlanImportedForecast** (1 change)

* Model was added

**CapacityPlanImportedForecastRequest** (1 change)

* Model was added

**ValueWrapperCapacityPlanImportedForecastRequest** (1 change)

* Model was added

**Cluster** (1 change)

* Model was added

**ClusterScan** (1 change)

* Model was added

**ClusterScanStatistics** (1 change)

* Model was added

**ClusterStatistics** (1 change)

* Model was added

**ContactVertex** (1 change)

* Model was added

**Graph** (1 change)

* Model was added

**GraphEdge** (1 change)

* Model was added

**GraphVertices** (1 change)

* Model was added

**IdentifierVertex** (1 change)

* Model was added

**MergeError** (1 change)

* Model was added

**MergeInfo** (1 change)

* Model was added

**ClusterList** (1 change)

* Model was added

**ClusterScanList** (1 change)

* Model was added

**GraphSettings** (1 change)

* Model was added


# Point Changes (2 changes)

**PATCH /api/v2/alerting/alerts/{alertId}** (2 changes)

* Description was changed
* Summary was changed
