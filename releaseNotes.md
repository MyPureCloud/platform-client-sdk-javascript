Platform API version: 2887


# Major Changes (6 changes)

**POST /api/v2/authorization/roles/{roleId}** (1 change)

* Parameter subjectType was added

**AggregateMetricData** (1 change)

* Enum value tFlowHangUp was removed from property metric

**AggregationQuery** (1 change)

* Enum value tFlowHangUp was removed from property metrics

**AnalyticsQueryPredicate** (1 change)

* Enum value tFlowHangUp was removed from property metric

**ObservationMetricData** (1 change)

* Enum value tFlowHangUp was removed from property metric

**ObservationQuery** (1 change)

* Enum value tFlowHangUp was removed from property metrics


# Minor Changes (48 changes)

**/api/v2/gmsc/tokens** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/quality/conversations/{conversationId}/surveys** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/analytics/surveys/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/quality/surveys/scorable** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/routing/queues/divisionviews/all** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/quality/surveys/scoring** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/quality/surveys/{surveyId}** (2 changes)

* Path was added
* Operation GET was added

**User** (1 change)

* Optional property languagePreference was added

**OrgUser** (1 change)

* Optional property languagePreference was added

**Token** (1 change)

* Model was added

**TrustUser** (1 change)

* Optional property languagePreference was added

**AggregateMetricData** (1 change)

* Enum value tFlowDisconnect was added to property metric

**AggregationQuery** (1 change)

* Enum value tFlowDisconnect was added to property metrics

**AnalyticsQueryPredicate** (1 change)

* Enum value tFlowDisconnect was added to property metric

**ObservationMetricData** (1 change)

* Enum value tFlowDisconnect was added to property metric

**ObservationQuery** (1 change)

* Enum value tFlowDisconnect was added to property metrics

**Survey** (1 change)

* Model was added

**SurveyQuestionGroupScore** (1 change)

* Model was added

**SurveyQuestionScore** (1 change)

* Model was added

**SurveyScoringSet** (1 change)

* Model was added

**UserMe** (1 change)

* Optional property languagePreference was added

**ConversationProperties** (1 change)

* Model was added

**ViewFilter** (13 changes)

* Optional property surveyFormContextIds was added
* Optional property conversationIds was added
* Optional property isEnded was added
* Optional property isSurveyed was added
* Optional property surveyScores was added
* Optional property promoterScores was added
* Optional property isCampaign was added
* Optional property surveyStatuses was added
* Optional property conversationProperties was added
* Optional property isBlindTransferred was added
* Optional property isConsulted was added
* Optional property isConsultTransferred was added
* Optional property remoteParticipants was added

**ScorableSurvey** (1 change)

* Model was added

**SurveyFormAndScoringSet** (1 change)

* Model was added

**Condition** (1 change)

* Enum value dataActionCondition was added to property type

**ContactColumnToDataActionFieldMapping** (1 change)

* Model was added

**DataActionConditionPredicate** (1 change)

* Model was added


# Point Changes (7 changes)

**PATCH /api/v2/routing/queues/{queueId}/users/{memberId}** (2 changes)

* Summary was changed
* Response 202 was changed from User ring number change has been accepted to User update has been accepted

**GET /api/v2/routing/queues/divisionviews** (3 changes)

* Summary was changed
* Description was changed for parameter pageSize
* Description was changed for parameter pageNumber

**GET /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}** (1 change)

* Summary was changed

**POST /api/v2/outbound/contactlists/{contactListId}/contacts** (1 change)

* Description was changed for parameter doNotQueue
