Platform API version: 4219


# Major Changes (2 changes)

**EntityListing** (1 change)

* Property entities was changed from object[] to DataTableImportJob[]

**WfmHistoricalAdherenceQueryForUsers** (1 change)

* Required property teamIds was added


# Minor Changes (51 changes)

**/api/v2/users/development/activities/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/users/development/activities/me** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/development/activities** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/development/activities/{activityId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/flows/milestones** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/flows/milestones/{milestoneId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**KnowledgeBase** (1 change)

* Enum value de-DE was added to property coreLanguage

**AvailableTopic** (1 change)

* Optional property publicApiTemplateUriPaths was added

**WfmHistoricalAdherenceQuery** (1 change)

* Optional property teamIds was added

**FlowAggregateQueryPredicate** (1 change)

* Enum value flowMilestoneId was added to property dimension

**FlowAggregationQuery** (3 changes)

* Enum value flowMilestoneId was added to property groupBy
* Enum value nFlowMilestone was added to property metrics
* Enum value oFlowMilestone was added to property metrics

**FlowAggregationView** (2 changes)

* Enum value nFlowMilestone was added to property target
* Enum value oFlowMilestone was added to property target

**ConversationDetailQueryPredicate** (2 changes)

* Enum value nFlowMilestone was added to property metric
* Enum value oFlowMilestone was added to property metric

**Dependency** (1 change)

* Enum value FLOWMILESTONE was added to property type

**DependencyObject** (1 change)

* Enum value FLOWMILESTONE was added to property type

**KnowledgeCategory** (1 change)

* Enum value de-DE was added to property languageCode

**KnowledgeDocument** (1 change)

* Enum value de-DE was added to property languageCode

**KnowledgeSearchDocument** (1 change)

* Enum value de-DE was added to property languageCode

**EntityListing** (4 changes)

* Optional property pageSize was added
* Optional property pageNumber was added
* Optional property total was added
* Optional property pageCount was added

**DevelopmentActivityAggregateQueryResponseData** (1 change)

* Model was added

**DevelopmentActivityAggregateQueryResponseGroupedData** (1 change)

* Model was added

**DevelopmentActivityAggregateQueryResponseMetric** (1 change)

* Model was added

**DevelopmentActivityAggregateQueryResponseStatistics** (1 change)

* Model was added

**DevelopmentActivityAggregateResponse** (1 change)

* Model was added

**DevelopmentActivityAggregateParam** (1 change)

* Model was added

**DevelopmentActivityAggregateQueryRequestClause** (1 change)

* Model was added

**DevelopmentActivityAggregateQueryRequestFilter** (1 change)

* Model was added

**DevelopmentActivityAggregateQueryRequestPredicate** (1 change)

* Model was added

**ReportingExportJobResponse** (2 changes)

* Enum value FAILED_AS_EXPORT_FILE_SIZE_IS_GREATER_THAN_10MB was added to property exportErrorMessagesType
* Optional property emailErrorDescription was added

**DevelopmentActivity** (1 change)

* Model was added

**DevelopmentActivityListing** (1 change)

* Model was added

**FlowMilestone** (1 change)

* Model was added

**FlowMilestoneListing** (1 change)

* Model was added

**KnowledgeExtendedCategory** (1 change)

* Enum value de-DE was added to property languageCode


# Point Changes (0 changes)
