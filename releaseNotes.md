Platform API version: 7538




# Major Changes (22 changes)

**GET /api/v2/alerting/alerts/active** (1 change)

* Has been deprecated

**GET /api/v2/alerting/interactionstats/alerts/{alertId}** (1 change)

* Has been deprecated

**PUT /api/v2/alerting/interactionstats/alerts/{alertId}** (1 change)

* Has been deprecated

**DELETE /api/v2/alerting/interactionstats/alerts/{alertId}** (1 change)

* Has been deprecated

**GET /api/v2/alerting/interactionstats/alerts** (1 change)

* Has been deprecated

**GET /api/v2/alerting/interactionstats/rules/{ruleId}** (1 change)

* Has been deprecated

**PUT /api/v2/alerting/interactionstats/rules/{ruleId}** (1 change)

* Has been deprecated

**DELETE /api/v2/alerting/interactionstats/rules/{ruleId}** (1 change)

* Has been deprecated

**GET /api/v2/alerting/interactionstats/rules** (1 change)

* Has been deprecated

**POST /api/v2/alerting/interactionstats/rules** (1 change)

* Has been deprecated

**GET /api/v2/alerting/interactionstats/alerts/unread** (1 change)

* Has been deprecated

**PUT /api/v2/analytics/reporting/schedules/{scheduleId}** (1 change)

* Has been deprecated

**POST /api/v2/analytics/reporting/schedules** (1 change)

* Has been deprecated

**POST /api/v2/analytics/reporting/schedules/{scheduleId}/runreport** (1 change)

* Has been deprecated

**GET /api/v2/quality/agents/activity** (1 change)

* Parameter agentTeamId was added

**GET /api/v2/quality/evaluations/query** (1 change)

* Parameter agentTeamId was added

**GET /api/v2/quality/evaluators/activity** (1 change)

* Parameter agentTeamId was added

**GET /api/v2/learning/modules** (1 change)

* Parameter externalIds was added

**Workitem** (1 change)

* Property queue was changed from QueueReference to WorkitemQueueReference

**WorkitemVersion** (1 change)

* Property queue was changed from QueueReference to WorkitemQueueReference

**Worktype** (1 change)

* Property defaultQueue was changed from QueueReference to WorkitemQueueReference

**WorktypeVersion** (1 change)

* Property defaultQueue was changed from QueueReference to WorkitemQueueReference


# Minor Changes (50 changes)

**/api/v2/analytics/botflows/{botFlowId}/sessions** (2 changes)

* Path was added
* Operation GET was added

**GET /api/v2/journey/deployments/{deploymentId}/customers/{customerCookieId}/ping** (1 change)

* Parameter sessionId was made optional

**/api/v2/learning/modules/{moduleId}/users/{userId}/assignments** (2 changes)

* Path was added
* Operation PATCH was added

**BotChannel** (1 change)

* Model was added

**BotFlowSession** (1 change)

* Model was added

**SessionsResponse** (1 change)

* Model was added

**Queue** (1 change)

* Optional property enableAudioMonitoring was added

**CallMediaPolicyConditions** (1 change)

* Optional property teams was added

**ChatMediaPolicyConditions** (1 change)

* Optional property teams was added

**EmailMediaPolicyConditions** (1 change)

* Optional property teams was added

**MessageMediaPolicyConditions** (1 change)

* Optional property teams was added

**PolicyConditions** (1 change)

* Optional property teams was added

**PhoneNumber** (1 change)

* Optional property normalizationCountryCode was added

**ExternalOrganizationTrustorLink** (2 changes)

* Optional property id was added
* Optional property selfUri was added

**Evaluation** (1 change)

* Optional property agentTeam was added

**EvaluationQuestionGroupScore** (1 change)

* Optional property systemMarkedNA was added

**EvaluationQuestionScore** (1 change)

* Optional property systemMarkedNA was added

**EventMessage** (3 changes)

* Enum value IMPORT_NO_LISTS_CREATED_NO_CONTACTS_MATCH_FILTER was added to property code
* Enum value IMPORT_TARGET_CONTACT_LIST_NAME_EXISTS was added to property code
* Enum value IMPORT_CONTACT_LIST_NAME_LENGTH_EXCEEDED was added to property code

**KnowledgeBase** (1 change)

* Enum value ar-AE was added to property coreLanguage

**KnowledgeCategory** (1 change)

* Enum value ar-AE was added to property languageCode

**KnowledgeSearchDocument** (1 change)

* Enum value ar-AE was added to property languageCode

**KnowledgeExtendedCategory** (1 change)

* Enum value ar-AE was added to property languageCode

**KnowledgeImport** (1 change)

* Enum value ar-AE was added to property languageCode

**KnowledgeDocument** (1 change)

* Enum value ar-AE was added to property languageCode

**KnowledgeBaseCreateRequest** (1 change)

* Enum value ar-AE was added to property coreLanguage

**SurveyQuestionGroupScore** (1 change)

* Optional property systemMarkedNA was added

**SurveyQuestionScore** (1 change)

* Optional property systemMarkedNA was added

**EvaluationResponse** (1 change)

* Optional property agentTeam was added

**Survey** (1 change)

* Optional property agentTeam was added

**QueueRequest** (1 change)

* Optional property enableAudioMonitoring was added

**UserQueue** (1 change)

* Optional property enableAudioMonitoring was added

**CreateQueueRequest** (1 change)

* Optional property enableAudioMonitoring was added

**Dependency** (1 change)

* Enum value UTILIZATIONLABEL was added to property type

**DependencyObject** (1 change)

* Enum value UTILIZATIONLABEL was added to property type

**LearningAssignment** (1 change)

* Optional property lengthInMinutes was added

**LearningModule** (2 changes)

* Optional property excludedFromCatalog was added
* Optional property lengthInMinutes was added

**LearningAssignmentCreate** (1 change)

* Optional property lengthInMinutes was added

**LearningModuleRequest** (3 changes)

* Optional property lengthInMinutes was added
* Optional property excludedFromCatalog was added
* Optional property externalId was added

**AssignedLearningModule** (2 changes)

* Optional property excludedFromCatalog was added
* Optional property lengthInMinutes was added

**LearningAssignmentExternalUpdate** (1 change)

* Model was added

**WorkitemQueueReference** (1 change)

* Model was added


# Point Changes (23 changes)

**GET /api/v2/alerting/alerts/active** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/alerting/interactionstats/alerts/{alertId}** (1 change)

* Description was changed

**PUT /api/v2/alerting/interactionstats/alerts/{alertId}** (1 change)

* Description was changed

**DELETE /api/v2/alerting/interactionstats/alerts/{alertId}** (1 change)

* Description was changed

**GET /api/v2/alerting/interactionstats/alerts** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/alerting/interactionstats/rules/{ruleId}** (2 changes)

* Description was changed
* Summary was changed

**PUT /api/v2/alerting/interactionstats/rules/{ruleId}** (1 change)

* Description was changed

**DELETE /api/v2/alerting/interactionstats/rules/{ruleId}** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/alerting/interactionstats/rules** (2 changes)

* Description was changed
* Summary was changed

**POST /api/v2/alerting/interactionstats/rules** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/alerting/interactionstats/alerts/unread** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/analytics/botflows/{botFlowId}/reportingturns** (1 change)

* Description was changed

**PUT /api/v2/analytics/reporting/schedules/{scheduleId}** (1 change)

* Description was changed

**POST /api/v2/analytics/reporting/schedules** (1 change)

* Description was changed

**POST /api/v2/analytics/reporting/schedules/{scheduleId}/runreport** (1 change)

* Description was changed

**POST /api/v2/integrations/actions** (1 change)

* Summary was changed
