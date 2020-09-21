Platform API version: 4206


# Major Changes (3 changes)

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId}** (1 change)

* Parameter excludeCapabilities was added

**WfmTimeZone** (1 change)

* Model WfmTimeZone was removed

**WfmAgent** (1 change)

* Property timeZone was removed


# Minor Changes (42 changes)

**/api/v2/conversations/{conversationId}/assign** (2 changes)

* Path was added
* Operation POST was added

**Queue** (2 changes)

* Optional property enableTranscription was added
* Optional property enableManualAssignment was added

**Call** (2 changes)

* Optional property afterCallWorkRequired was added
* Optional property agentAssistantId was added

**Callback** (1 change)

* Optional property afterCallWorkRequired was added

**Cobrowsesession** (1 change)

* Optional property afterCallWorkRequired was added

**ConversationChat** (1 change)

* Optional property afterCallWorkRequired was added

**Email** (1 change)

* Optional property afterCallWorkRequired was added

**Message** (1 change)

* Optional property afterCallWorkRequired was added

**Screenshare** (1 change)

* Optional property afterCallWorkRequired was added

**SocialExpression** (1 change)

* Optional property afterCallWorkRequired was added

**Video** (1 change)

* Optional property afterCallWorkRequired was added

**ViewFilter** (1 change)

* Optional property hasAgentAssistId was added

**UserQueue** (2 changes)

* Optional property enableTranscription was added
* Optional property enableManualAssignment was added

**CallBasic** (2 changes)

* Optional property afterCallWorkRequired was added
* Optional property agentAssistantId was added

**CallbackBasic** (1 change)

* Optional property afterCallWorkRequired was added

**QueueObservationQuery** (2 changes)

* Enum value oAlerting was added to property metrics
* Enum value oAlerting was added to property detailMetrics

**WfmAgent** (1 change)

* Optional property workPlanRotation was added

**WorkPlanRotationReference** (1 change)

* Model was added

**QueueRequest** (2 changes)

* Optional property enableTranscription was added
* Optional property enableManualAssignment was added

**BuAgentScheduleRescheduleResponse** (1 change)

* Optional property workPlansPerWeek was added

**ConversationUser** (1 change)

* Model was added

**CreateQueueRequest** (2 changes)

* Optional property enableTranscription was added
* Optional property enableManualAssignment was added

**BuAgentScheduleQueryResponse** (1 change)

* Optional property workPlansPerWeek was added

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value ResponseManagement was added to property serviceName

**AuditQueryRequest** (1 change)

* Enum value ResponseManagement was added to property serviceName

**AuditLogMessage** (4 changes)

* Enum value ResponseManagement was added to property serviceName
* Enum value SessionType was added to property entityType
* Enum value EventType was added to property entityType
* Enum value Response was added to property entityType

**AuditRealtimeQueryRequest** (1 change)

* Enum value ResponseManagement was added to property serviceName

**AuditQueryEntity** (3 changes)

* Enum value SessionType was added to property name
* Enum value EventType was added to property name
* Enum value Response was added to property name

**AuditQueryService** (1 change)

* Enum value ResponseManagement was added to property name


# Point Changes (0 changes)
