Platform API version: 6877


# Major Changes (8 changes)

**GET /api/v2/routing/predictors/keyperformanceindicators** (1 change)

* Parameter expand was added

**/api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}** (2 changes)

* Operation PUT was removed
* Operation DELETE was removed

**/api/v2/telephony/providers/edges/outboundroutes** (1 change)

* Operation POST was removed

**DialerContact** (1 change)

* Property data was changed from Map<object, object> to Map<object, string>

**WritableDialerContact** (1 change)

* Property data was changed from Map<object, object> to Map<object, string>

**KnowledgeDocumentGuestSearchRequest** (1 change)

* Property app was removed

**SkillGroupEntityListing** (1 change)

* Property entities was changed from SkillGroup[] to SkillGroupDefinition[]


# Minor Changes (76 changes)

**/api/v2/gamification/profiles/users/me/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/gamification/profiles/users/{userId}/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/gamification/insights/details** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/insights/users/{userId}/details** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/insights/members** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/insights/groups/trends** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/insights/groups/trends/all** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/insights** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/insights/trends** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/insights/users/{userId}/trends** (2 changes)

* Path was added
* Operation GET was added

**ViewFilter** (5 changes)

* Optional property workbinIds was added
* Optional property worktypeIds was added
* Optional property workitemIds was added
* Optional property workitemAssigneeIds was added
* Optional property workitemStatuses was added

**AuditQueryExecutionStatusResponse** (1 change)

* Values are no longer constrained by enum members

**AuditQueryRequest** (1 change)

* Values are no longer constrained by enum members

**AuditLogMessage** (3 changes)

* Values are no longer constrained by enum members
* Values are no longer constrained by enum members
* Values are no longer constrained by enum members

**EntityChange** (1 change)

* Values are no longer constrained by enum members

**InitiatingAction** (1 change)

* Values are no longer constrained by enum members

**AuditRealtimeQueryRequest** (1 change)

* Values are no longer constrained by enum members

**AuditQueryEntity** (2 changes)

* Values are no longer constrained by enum members
* Values are no longer constrained by enum members

**AuditQueryService** (1 change)

* Values are no longer constrained by enum members

**PredictiveRouting** (1 change)

* Optional property enableConversationScoreBiasing was added

**Call** (1 change)

* Optional property securePause was added

**Conversation** (1 change)

* Optional property securePause was added

**Evaluation** (1 change)

* Optional property dateAssigneeChanged was added

**CallConversation** (1 change)

* Optional property securePause was added

**CallMediaParticipant** (1 change)

* Optional property securePause was added

**CallBasic** (1 change)

* Optional property securePause was added

**ConversationBasic** (1 change)

* Optional property securePause was added

**EventMessage** (1 change)

* Enum value DIGITAL_RULE_SMS_PHONE_NUMBER_TYPE_MISMATCH was added to property code

**ProfileWithDateRange** (1 change)

* Model was added

**UserProfilesInDateRange** (1 change)

* Model was added

**UserProfilesInDateRangeRequest** (1 change)

* Model was added

**InsightsDetails** (1 change)

* Model was added

**InsightsDetailsMetricItem** (1 change)

* Model was added

**InsightsDetailsMetricPeriodPoints** (1 change)

* Model was added

**InsightsDetailsOverallItem** (1 change)

* Model was added

**InsightsDetailsOverallPeriodPoints** (1 change)

* Model was added

**WorkdayPeriod** (1 change)

* Model was added

**InsightsAgentItem** (1 change)

* Model was added

**InsightsAgents** (1 change)

* Model was added

**InsightsTrend** (1 change)

* Model was added

**InsightsTrendMetricItem** (1 change)

* Model was added

**InsightsTrendTotalItem** (1 change)

* Model was added

**InsightsTrends** (1 change)

* Model was added

**TrendData** (1 change)

* Model was added

**InsightsSummary** (1 change)

* Model was added

**InsightsSummaryMetricItem** (1 change)

* Model was added

**InsightsSummaryMetricPeriodPoints** (1 change)

* Model was added

**InsightsSummaryOverallItem** (1 change)

* Model was added

**InsightsSummaryOverallPeriodPoints** (1 change)

* Model was added

**InsightsSummaryUserItem** (1 change)

* Model was added

**UserInsightsTrend** (1 change)

* Model was added

**QualityEvaluationScoreItem** (1 change)

* Model was added

**KnowledgeDocumentResponse** (1 change)

* Optional property dateImported was added

**KnowledgeGuestDocument** (1 change)

* Optional property dateImported was added

**EvaluationResponse** (1 change)

* Optional property dateAssigneeChanged was added

**RecordingSettings** (1 change)

* Optional property regionalRecordingStorageEnabled was added

**KeyPerformanceIndicator** (1 change)

* Optional property queues was added

**SkillGroupDefinition** (1 change)

* Model was added

**SupportCenterModuleSetting** (1 change)

* Enum value TopViewedArticles was added to property type


# Point Changes (3 changes)

**POST /api/v2/audits/query** (1 change)

* Description was changed

**POST /api/v2/audits/query/realtime** (1 change)

* Description was changed

**POST /api/v2/workforcemanagement/adherence/historical** (1 change)

* Summary was changed
