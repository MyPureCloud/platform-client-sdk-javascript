Platform API version: 2097


# Major Changes (0 changes)


# Minor Changes (45 changes)

**POST /api/v2/conversations/calls** (1 change)

* Response 409 was added

**/api/v2/conversations/{conversationId}/disconnect** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/users/{userId}/routinglanguages** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/users/{userId}/routinglanguages/{languageId}** (3 changes)

* Path was added
* Operation DELETE was added
* Operation PATCH was added

**ReportingExportJobResponse** (11 changes)

* Enum value INTERACTION_SEARCH_VIEW was added to property viewType
* Enum value AGENT_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value AGENT_STATUS_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_STATUS_DETAIL_VIEW was added to property viewType
* Enum value AGENT_EVALUATION_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_EVALUATION_DETAIL_VIEW was added to property viewType
* Enum value AGENT_QUEUE_DETAIL_VIEW was added to property viewType
* Enum value AGENT_INTERACTION_DETAIL_VIEW was added to property viewType
* Enum value ABANDON_INSIGHTS_VIEW was added to property viewType
* Enum value SKILLS_PERFORMANCE_VIEW was added to property viewType

**ViewFilter** (11 changes)

* Optional property addressFroms was added
* Optional property contactIds was added
* Optional property aniList was added
* Optional property durationMilliseconds was added
* Optional property evaluationScore was added
* Optional property evaluationCriticalScore was added
* Optional property evaluationFormIds was added
* Optional property evaluatedAgentIds was added
* Optional property evaluatorIds was added
* Optional property transferred was added
* Optional property abandoned was added

**ReportingExportJobRequest** (11 changes)

* Enum value INTERACTION_SEARCH_VIEW was added to property viewType
* Enum value AGENT_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value AGENT_STATUS_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_STATUS_DETAIL_VIEW was added to property viewType
* Enum value AGENT_EVALUATION_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_EVALUATION_DETAIL_VIEW was added to property viewType
* Enum value AGENT_QUEUE_DETAIL_VIEW was added to property viewType
* Enum value AGENT_INTERACTION_DETAIL_VIEW was added to property viewType
* Enum value ABANDON_INSIGHTS_VIEW was added to property viewType
* Enum value SKILLS_PERFORMANCE_VIEW was added to property viewType

**UserLanguageEntityListing** (1 change)

* Model was added

**UserRoutingLanguage** (1 change)

* Model was added

**UserRoutingLanguagePost** (1 change)

* Model was added


# Point Changes (7 changes)

**POST /api/v2/workforcemanagement/managementunits/{muId}/historicaladherencequery** (1 change)

* Description was changed for parameter muId

**GET /api/v2/workforcemanagement/managementunits/{muId}/intraday/queues** (1 change)

* Description was changed for parameter muId

**GET /api/v2/workforcemanagement/managementunits/{muId}/users** (1 change)

* Description was changed for parameter muId

**POST /api/v2/workforcemanagement/managementunits/{muId}/schedules/search** (1 change)

* Description was changed for parameter muId

**GET /api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests/{timeOffRequestId}** (1 change)

* Description was changed for parameter muId

**GET /api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests** (1 change)

* Description was changed for parameter muId

**POST /api/v2/workforcemanagement/managementunits/{muId}/intraday** (1 change)

* Description was changed for parameter muId
