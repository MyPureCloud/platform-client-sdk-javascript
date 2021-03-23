Platform API version: 4544


# Major Changes (9 changes)

**GET /api/v2/telephony/providers/edges/phones** (2 changes)

* Parameter status.operationalStatus was added
* Parameter secondaryStatus.operationalStatus was added

**MediaEndpointStatDetailQueryClause** (1 change)

* Model MediaEndpointStatDetailQueryClause was removed

**MediaEndpointStatDetailQueryFilter** (1 change)

* Model MediaEndpointStatDetailQueryFilter was removed

**MediaEndpointStatDetailQueryPredicate** (1 change)

* Model MediaEndpointStatDetailQueryPredicate was removed

**ViewFilter** (1 change)

* Enum value general was removed from property messageTypes

**AsyncConversationQuery** (1 change)

* Property mediaEndpointStatFilters was removed

**ConversationQuery** (1 change)

* Property mediaEndpointStatFilters was removed

**TranscriptAggregationQuery** (1 change)

* Enum value resultsBy was removed from property groupBy


# Minor Changes (20 changes)

**Message** (1 change)

* Enum value open was added to property type

**Flow** (1 change)

* Optional property compatibleFlowTypes was added

**FlowVersion** (1 change)

* Optional property compatibleFlowTypes was added

**ViewFilter** (1 change)

* Enum value open was added to property messageTypes

**EmailColumn** (1 change)

* Model was added

**ReportingExportJobResponse** (3 changes)

* Enum value AGENT_SCORECARD_VIEW was added to property viewType
* Enum value AGENT_SCORECARD_ME_VIEW was added to property viewType
* Enum value AGENT_GAMIFICATION_LEADERSHIP_VIEW was added to property viewType

**MessageMediaParticipant** (1 change)

* Enum value open was added to property type

**PhoneStatus** (1 change)

* Enum value UNKNOWN was added to property operationalStatus

**ConfigurationOverrides** (1 change)

* Model was added

**DialerContact** (1 change)

* Optional property configurationOverrides was added

**AuditLogMessage** (1 change)

* Enum value WorkPlan was added to property entityType

**AuditQueryEntity** (1 change)

* Enum value WorkPlan was added to property name

**ReportingExportJobRequest** (3 changes)

* Enum value AGENT_SCORECARD_VIEW was added to property viewType
* Enum value AGENT_SCORECARD_ME_VIEW was added to property viewType
* Enum value AGENT_GAMIFICATION_LEADERSHIP_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (3 changes)

* Enum value AGENT_SCORECARD_VIEW was added to property viewType
* Enum value AGENT_SCORECARD_ME_VIEW was added to property viewType
* Enum value AGENT_GAMIFICATION_LEADERSHIP_VIEW was added to property viewType


# Point Changes (1 change)

**GET /api/v2/telephony/providers/edges/phones** (1 change)

* Description was changed for parameter sortBy
