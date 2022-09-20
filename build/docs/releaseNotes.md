Platform API version: 6135


# Major Changes (23 changes)

**/api/v2/gamification/metrics** (1 change)

* Path /api/v2/gamification/metrics was removed

**/api/v2/integrations/eventlog** (1 change)

* Path /api/v2/integrations/eventlog was removed

**/api/v2/integrations/eventlog/{eventId}** (1 change)

* Path /api/v2/integrations/eventlog/{eventId} was removed

**/api/v2/integrations/workforcemanagement/vendorconnection** (1 change)

* Path /api/v2/integrations/workforcemanagement/vendorconnection was removed

**GET /api/v2/profiles/groups** (1 change)

* Parameter jabberId was added

**GET /api/v2/userrecordings/{recordingId}/media** (1 change)

* Parameter async was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}** (1 change)

* Response 200 type was changed from BusinessUnit to BusinessUnitResponse

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}** (1 change)

* Response 200 type was changed from BusinessUnit to BusinessUnitResponse

**POST /api/v2/workforcemanagement/businessunits** (2 changes)

* Response 200 type was changed from BusinessUnit to BusinessUnitResponse
* Response 201 type was changed from BusinessUnit to BusinessUnitResponse

**UserActionCategory** (1 change)

* Model UserActionCategory was removed

**UserActionCategoryEntityListing** (1 change)

* Model UserActionCategoryEntityListing was removed

**EventEntity** (1 change)

* Model EventEntity was removed

**IntegrationEvent** (1 change)

* Model IntegrationEvent was removed

**IntegrationEventEntityListing** (1 change)

* Model IntegrationEventEntityListing was removed

**VendorConnectionRequest** (1 change)

* Model VendorConnectionRequest was removed

**BuSchedulingSettings** (1 change)

* Model BuSchedulingSettings was removed

**BusinessUnit** (1 change)

* Model BusinessUnit was removed

**BusinessUnitSettings** (1 change)

* Model BusinessUnitSettings was removed

**UpdateBusinessUnitSettings** (1 change)

* Model UpdateBusinessUnitSettings was removed

**CreateBusinessUnitSettings** (1 change)

* Model CreateBusinessUnitSettings was removed

**UpdateBusinessUnitRequest** (1 change)

* Property settings was changed from UpdateBusinessUnitSettings to UpdateBusinessUnitSettingsRequest

**CreateBusinessUnitRequest** (1 change)

* Property settings was changed from CreateBusinessUnitSettings to CreateBusinessUnitSettingsRequest


# Minor Changes (83 changes)

**/api/v2/journey/actionmaps/estimates/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/actionmaps/estimates/jobs/{jobId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/actionmaps/estimates/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/processautomation/triggers/topics/{topicName}/test** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/processautomation/triggers/topics** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/processautomation/triggers/{triggerId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/processautomation/triggers/{triggerId}/test** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/processautomation/triggers** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**GET /api/v2/userrecordings/{recordingId}/media** (1 change)

* Response 202 was added

**POST /api/v2/learning/assignments/{assignmentId}/reset** (1 change)

* Response 409 was added

**POST /api/v2/learning/assignments/{assignmentId}/reassign** (1 change)

* Response 409 was added

**ConversationAggregationQuery** (2 changes)

* Enum value tFirstConnect was added to property metrics
* Enum value tFirstDial was added to property metrics

**ConversationAggregationView** (2 changes)

* Enum value tFirstConnect was added to property target
* Enum value tFirstDial was added to property target

**ConversationDetailQueryPredicate** (2 changes)

* Enum value tFirstConnect was added to property metric
* Enum value tFirstDial was added to property metric

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value LogCapture was added to property serviceName

**AuditQueryRequest** (1 change)

* Enum value LogCapture was added to property serviceName

**AuditLogMessage** (6 changes)

* Enum value LogCapture was added to property serviceName
* Enum value EnableCapture was added to property action
* Enum value DownloadCapture was added to property action
* Enum value DigitalRuleSet was added to property entityType
* Enum value EmailCampaignSchedule was added to property entityType
* Enum value MessagingCampaignSchedule was added to property entityType

**AuditRealtimeQueryRequest** (1 change)

* Enum value LogCapture was added to property serviceName

**AuditQueryEntity** (5 changes)

* Enum value DigitalRuleSet was added to property name
* Enum value EmailCampaignSchedule was added to property name
* Enum value MessagingCampaignSchedule was added to property name
* Enum value EnableCapture was added to property actions
* Enum value DownloadCapture was added to property actions

**AuditQueryService** (1 change)

* Enum value LogCapture was added to property name

**DialerContact** (1 change)

* Optional property contactableStatus was added

**WritableDialerContact** (1 change)

* Optional property contactableStatus was added

**ActionTemplate** (1 change)

* Optional property version was added

**PatchActionTemplate** (1 change)

* Optional property version was added

**ActionMapEstimateResult** (1 change)

* Model was added

**SegmentEstimateCount** (1 change)

* Model was added

**EstimateJobAsyncResponse** (1 change)

* Model was added

**ActionMapEstimateOutcomeCriteria** (1 change)

* Model was added

**ActionMapEstimateRequest** (1 change)

* Model was added

**LimitChangeRequestDetails** (1 change)

* Enum value skills was added to property namespace

**StatusChange** (1 change)

* Enum value skills was added to property namespace

**TestMatchesEventOperation** (1 change)

* Model was added

**TestModeEventResults** (1 change)

* Model was added

**TestModeTrigger** (1 change)

* Model was added

**TestSchemaOperation** (1 change)

* Model was added

**TopicCursorEntityListing** (1 change)

* Model was added

**MatchCriteria** (1 change)

* Model was added

**Trigger** (1 change)

* Model was added

**TriggerTarget** (1 change)

* Model was added

**UpdateTriggerRequest** (1 change)

* Model was added

**MatchCriteriaTestResult** (1 change)

* Model was added

**MatchTestResult** (1 change)

* Model was added

**TestMatchesOperation** (1 change)

* Model was added

**TestModeResults** (1 change)

* Model was added

**TestTargetOperation** (1 change)

* Model was added

**TriggerEntityListing** (1 change)

* Model was added

**CreateTriggerRequest** (1 change)

* Model was added

**SearchCriteria** (1 change)

* Enum value REGEX was added to property type

**LearningAssignment** (1 change)

* Enum value InvalidSchedule was added to property state

**LearningModule** (1 change)

* Optional property archivalMode was added

**LearningAssignmentUpdate** (1 change)

* Enum value InvalidSchedule was added to property state

**LearningAssignmentReassign** (1 change)

* Model was added

**AssignedLearningModule** (1 change)

* Optional property archivalMode was added

**BuSchedulingSettingsResponse** (1 change)

* Model was added

**BusinessUnitResponse** (1 change)

* Model was added

**BusinessUnitSettingsResponse** (1 change)

* Model was added

**BuSchedulingSettingsRequest** (1 change)

* Model was added

**SetWrapperSyncTimeOffProperty** (1 change)

* Model was added

**UpdateBusinessUnitSettingsRequest** (1 change)

* Model was added

**CreateBusinessUnitSettingsRequest** (1 change)

* Model was added


# Point Changes (1 change)

**GET /api/v2/userrecordings/{recordingId}/media** (1 change)

* Response 200 was changed from successful operation to Operation was successful
