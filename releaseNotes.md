Platform API version: 2842


# Major Changes (19 changes)

**DELETE /api/v2/outbound/contactlists/{contactListId}/contacts** (1 change)

* Response 204 was removed

**GET /api/v2/outbound/contactlists** (1 change)

* Parameter divisionId was added

**Question** (1 change)

* Model Question was removed

**QuestionGroup** (1 change)

* Model QuestionGroup was removed

**EvaluationForm** (1 change)

* Property questionGroups was changed from QuestionGroup[] to EvaluationQuestionGroup[]

**AggregateMetricData** (1 change)

* Enum value nSurveysBounced was removed from property metric

**AggregationQuery** (1 change)

* Enum value nSurveysBounced was removed from property metrics

**AnalyticsQueryPredicate** (1 change)

* Enum value nSurveysBounced was removed from property metric

**SurveyForm** (1 change)

* Property questionGroups was changed from QuestionGroup[] to SurveyQuestionGroup[]

**ObservationDataContainer** (1 change)

* Property data was changed from AggregateMetricData[] to ObservationMetricData[]

**ObservationQuery** (1 change)

* Enum value nSurveysBounced was removed from property metrics

**AnalyticsEvaluation** (2 changes)

* Property getoTotalScore was removed
* Property getoTotalCriticalScore was removed

**AnalyticsSurvey** (6 changes)

* Property status was removed
* Property getoSurveyTotalScore was removed
* Property getsurveyCompletedDate was removed
* Property mediaTypes was removed
* Property languageIds was removed
* Property skillIds was removed


# Minor Changes (60 changes)

**/api/v2/billing/trusteebillingoverview/{trustorOrgId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/outbound/contactlists/{contactListId}/clear** (2 changes)

* Path was added
* Operation POST was added

**DELETE /api/v2/outbound/contactlists/{contactListId}/contacts** (1 change)

* Response 200 was added

**EvaluationQuestion** (1 change)

* Model was added

**EvaluationQuestionGroup** (1 change)

* Model was added

**DataSchema** (1 change)

* Model was added

**AggregateMetricData** (2 changes)

* Enum value nSurveyErrors was added to property metric
* Enum value nFlowOutcomeFailed was added to property metric

**AggregationQuery** (10 changes)

* Enum value surveyFormName was added to property groupBy
* Enum value surveyErrorReason was added to property groupBy
* Enum value surveyPreviousStatus was added to property groupBy
* Enum value surveyStatus was added to property groupBy
* Enum value minMos was added to property groupBy
* Enum value mediaStatsMinConversationMos was added to property groupBy
* Enum value minRFactor was added to property groupBy
* Enum value mediaStatsMinConversationRFactor was added to property groupBy
* Enum value nSurveyErrors was added to property metrics
* Enum value nFlowOutcomeFailed was added to property metrics

**AnalyticsQueryPredicate** (10 changes)

* Enum value surveyFormName was added to property dimension
* Enum value surveyErrorReason was added to property dimension
* Enum value surveyPreviousStatus was added to property dimension
* Enum value surveyStatus was added to property dimension
* Enum value minMos was added to property dimension
* Enum value mediaStatsMinConversationMos was added to property dimension
* Enum value minRFactor was added to property dimension
* Enum value mediaStatsMinConversationRFactor was added to property dimension
* Enum value nSurveyErrors was added to property metric
* Enum value nFlowOutcomeFailed was added to property metric

**Entity** (1 change)

* Model was added

**SubscriptionOverviewUsage** (1 change)

* Model was added

**TrusteeBillingOverview** (1 change)

* Model was added

**Dependency** (1 change)

* id is no longer readonly

**SurveyQuestion** (1 change)

* Model was added

**SurveyQuestionGroup** (1 change)

* Model was added

**ViewFilter** (3 changes)

* Optional property mos was added
* Optional property surveyQuestionGroupScore was added
* Optional property surveyPromoterScore was added

**SystemPrompt** (1 change)

* id is no longer readonly

**ObservationMetricData** (1 change)

* Model was added

**ObservationQuery** (2 changes)

* Enum value nSurveyErrors was added to property metrics
* Enum value nFlowOutcomeFailed was added to property metrics

**DependencyObject** (1 change)

* id is no longer readonly

**Flow** (1 change)

* id is no longer readonly

**FlowVersion** (1 change)

* id is no longer readonly

**Prompt** (1 change)

* id is no longer readonly

**DependencyType** (1 change)

* id is no longer readonly

**AnalyticsConversation** (2 changes)

* Optional property mediaStatsMinConversationMos was added
* Optional property mediaStatsMinConversationRFactor was added

**AnalyticsEvaluation** (2 changes)

* Optional property oTotalScore was added
* Optional property oTotalCriticalScore was added

**AnalyticsMediaEndpointStat** (1 change)

* Model was added

**AnalyticsSession** (1 change)

* Optional property mediaEndpointStats was added

**AnalyticsSurvey** (4 changes)

* Optional property surveyFormName was added
* Optional property surveyStatus was added
* Optional property surveyCompletedDate was added
* Optional property oSurveyTotalScore was added

**ConversationQuery** (1 change)

* Optional property mediaEndpointStatFilters was added

**FlowDivisionView** (1 change)

* id is no longer readonly


# Point Changes (0 changes)
