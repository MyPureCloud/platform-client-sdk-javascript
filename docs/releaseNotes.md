Platform API version: 10912


## Release Notes

A restoreSavedAccess() method is added at ApiClient level. The method attempts to retrieve an existing token from storage, test its validity, sets it as the ApiClient token and return (throws an error otherwise).


# Major Changes (22 changes)

**/api/v2/mobiledevices/{deviceId}** (1 change)

* Path /api/v2/mobiledevices/{deviceId} was removed

**/api/v2/mobiledevices** (1 change)

* Path /api/v2/mobiledevices was removed

**GET /api/v2/externalcontacts/graphs/clusterscans/latest** (1 change)

* Response 200 type was changed from ClusterScan to LatestClusterScan

**POST /api/v2/oauth/clients/{clientId}/usage/query** (1 change)

* Has been deprecated

**GET /api/v2/oauth/clients/{clientId}/usage/summary** (1 change)

* Has been deprecated

**GET /api/v2/oauth/clients/{clientId}/usage/query/results/{executionId}** (1 change)

* Has been deprecated

**GET /api/v2/routing/queues/{queueId}** (1 change)

* Parameter forceMemberRecount was added

**POST /api/v2/usage/query** (1 change)

* Has been deprecated

**GET /api/v2/usage/query/{executionId}/results** (1 change)

* Has been deprecated

**POST /api/v2/usage/simplesearch** (1 change)

* Has been deprecated

**GET /api/v2/usage/simplesearch/{executionId}/results** (1 change)

* Has been deprecated

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans** (1 change)

* Parameter forceDownloadService was added

**UserDevice** (1 change)

* Model UserDevice was removed

**DirectoryUserDevicesListing** (1 change)

* Model DirectoryUserDevicesListing was removed

**ExtensionPool** (1 change)

* Property division was changed from Division to WritableDivision

**ReschedulingOptionsRunResponse** (3 changes)

* Required property activitySmoothingType was added
* Required property induceScheduleVariability was added
* Required property useUnavailableTimesSnapshot was added

**WorkitemOnAttributeChangeCondition** (2 changes)

* Property value was removed
* Enum value wrapup was removed from property attribute

**WorkitemOnAttributeChangeConditionUpdate** (2 changes)

* Property value was removed
* Enum value wrapup was removed from property attribute


# Minor Changes (112 changes)

**/api/v2/knowledge/sources/files/counts** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/sources/tags** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/sources/tags/grouped** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/selfschedule/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/workforcemanagement/selfschedule/activitymoves/{activityMoveId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/selfschedule/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/selfschedule/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/selfschedule/offers/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/selfschedule/offers/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/selfschedule/query** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/selfschedule/settings** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/intents/categories/similar** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/intents/customerintents/similar** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/search/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/search/settings/contentsearch** (2 changes)

* Path was added
* Operation PATCH was added

**MessagingInitialConfiguration** (1 change)

* Enum value LinkedIn was added to property messageType

**Limit** (1 change)

* Enum value agentic.intent.classifier was added to property namespace

**AgenticVirtualAgentTypeDefinition** (1 change)

* Enum value A2AError was added to property type

**AgentStateSegmentTypeCount** (1 change)

* Enum value video was added to property segmentType

**AnalyticsAgentStateAgentSessionResult** (1 change)

* Enum value video was added to property segmentType

**AnalyticsConversationSegment** (1 change)

* Enum value video was added to property segmentType

**ConversationAggregationQuery** (1 change)

* Enum value tActiveVideo was added to property metrics

**ConversationAggregationSort** (1 change)

* Enum value tActiveVideo was added to property name

**ConversationAggregationView** (1 change)

* Enum value tActiveVideo was added to property target

**ConversationAsyncAggregationQuery** (1 change)

* Enum value tActiveVideo was added to property metrics

**ConversationDetailQueryPredicate** (1 change)

* Enum value tActiveVideo was added to property metric

**ReportingTurnKnowledgeMetadata** (1 change)

* Enum value DelegatedToAgenticVirtualAgent was added to property answerGenerationStatus

**ViewFilter** (2 changes)

* Enum value YouTube was added to property socialChannels
* Enum value video was added to property segmentTypes

**Widget** (1 change)

* Enum value video was added to property selectedSegmentTypes

**CaseplanFilter** (1 change)

* Enum value EQ was added to property operator

**CaseQueryJobCreate** (3 changes)

* Optional property filterGroups was added
* Enum value externalId was added to property attributes
* Enum value description was added to property attributes

**CaseQueryJobFilter** (1 change)

* Optional property caseSensitive was added

**CaseQueryJobFilterGroup** (1 change)

* Model was added

**InitiateVideoChatRecording** (1 change)

* Model was added

**ClusterScanGraphSettings** (1 change)

* Model was added

**LatestClusterScan** (1 change)

* Model was added

**CsvMappingEntry** (1 change)

* Optional property valueFormat was added

**ActivationTrigger** (1 change)

* Enum value Sentiment was added to property triggerType

**ChecklistActivationPayload** (1 change)

* Enum value Sentiment was added to property activationTriggerType

**ConversationCustomAttributesSearchRequest** (2 changes)

* Optional property queryReservedFields was added
* Optional property queryCustomAttributes was added

**EmailMessage** (1 change)

* Optional property recipientWarnings was added

**RecipientWarning** (1 change)

* Model was added

**EmailMessagePreview** (1 change)

* Optional property recipientWarnings was added

**EmailMessageReply** (1 change)

* Optional property recipientWarnings was added

**ConversationNormalizedMessage** (1 change)

* Enum value Modified was added to property status

**OpenNormalizedMessage** (1 change)

* Enum value Modified was added to property status

**AttemptLimits** (1 change)

* Optional property phoneTypeRecallEntries was added

**V3SourceTagResponse** (1 change)

* Model was added

**V3SourceFileCountEntry** (1 change)

* Model was added

**V3SourceFileCountsResponse** (1 change)

* Model was added

**V3SourceFileCountsRequest** (1 change)

* Model was added

**OrgV3SourcesTagsResponse** (1 change)

* Model was added

**V3SourceTagsGroupedEntry** (1 change)

* Model was added

**V3SourceTagsGroupedResponse** (1 change)

* Model was added

**ApprovalNamespace** (1 change)

* Enum value agentic.intent.classifier was added to property namespace

**LimitChangeRequestDetails** (1 change)

* Enum value agentic.intent.classifier was added to property namespace

**StatusChange** (1 change)

* Enum value agentic.intent.classifier was added to property namespace

**RecordingMessageReceipt** (1 change)

* Enum value Modified was added to property status

**RecordingSettings** (1 change)

* Optional property hierarchyAccessControlEnabled was added

**DataIngestionRuleCriteria** (1 change)

* Enum value YouTube was added to property effectivePlatform

**ExportDetails** (1 change)

* Enum value FlowInfoSpec was added to property exportType

**Dependency** (1 change)

* Enum value EXTERNALMCPSERVERINTEGRATION was added to property type

**DependencyObject** (1 change)

* Enum value EXTERNALMCPSERVERINTEGRATION was added to property type

**WorkPlanListResponse** (1 change)

* Optional property downloadUrl was added

**SelfScheduleManagementUnitSettings** (1 change)

* Model was added

**SelfScheduleManagementUnitSettingsRequest** (1 change)

* Model was added

**SetWrapperActivityCategory** (1 change)

* Model was added

**SelfScheduleActivityMoveListItem** (1 change)

* Model was added

**SelfScheduleJob** (1 change)

* Model was added

**SelfScheduleActivityMoveRequestItem** (1 change)

* Model was added

**SelfScheduleJobRequest** (1 change)

* Model was added

**SelfScheduleOffersActivityMoveTemplate** (1 change)

* Model was added

**SelfScheduleOffersJob** (1 change)

* Model was added

**SelfScheduleOffersResultTemplate** (1 change)

* Model was added

**SelfScheduleOffersJobRequest** (1 change)

* Model was added

**SelfScheduleQuery** (1 change)

* Model was added

**SelfScheduleAgentManagementUnitSettings** (1 change)

* Model was added

**WorkitemOnAttributeChangeConditionGroup** (1 change)

* Model was added

**WorkitemOnAttributeChangeMatch** (1 change)

* Model was added

**WorkitemOnAttributeChangeRule** (1 change)

* Optional property match was added

**WorkitemOnAttributeChangeRuleUpdate** (1 change)

* Optional property match was added

**WorkitemOnAttributeChangeRuleCreate** (1 change)

* Optional property match was added

**SimilarCategoriesResponse** (1 change)

* Model was added

**SimilarCategoryResult** (1 change)

* Model was added

**SimilarCustomerIntentResult** (1 change)

* Model was added

**SimilarCustomerIntentsResponse** (1 change)

* Model was added

**SimilarEntityRef** (1 change)

* Model was added

**SimilarCustomerIntentsRequest** (1 change)

* Model was added

**OrgSettings** (1 change)

* Model was added

**ContentSearchSetting** (1 change)

* Model was added

**AgentSchedulingPreferencesTiebreaker** (1 change)

* Model was added


# Point Changes (7 changes)

**POST /api/v2/oauth/clients/{clientId}/usage/query** (1 change)

* Description was changed

**GET /api/v2/oauth/clients/{clientId}/usage/summary** (1 change)

* Description was changed

**GET /api/v2/oauth/clients/{clientId}/usage/query/results/{executionId}** (1 change)

* Description was changed

**POST /api/v2/usage/query** (1 change)

* Description was changed

**GET /api/v2/usage/query/{executionId}/results** (1 change)

* Description was changed

**POST /api/v2/usage/simplesearch** (1 change)

* Description was changed

**GET /api/v2/usage/simplesearch/{executionId}/results** (1 change)

* Description was changed
