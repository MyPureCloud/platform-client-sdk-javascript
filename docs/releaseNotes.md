Platform API version: 10112




# Major Changes (3 changes)

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/staffinggroupallocations** (1 change)

* Parameter granularity was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplanning/longtermrequirements/automaticbestmethod/weeks/{weekDateId}/forecasts/{forecastId}** (1 change)

* Parameter granularity was added

**JourneyEventDefinition** (1 change)

* Enum value Custom was removed from property source


# Minor Changes (42 changes)

**/api/v2/knowledge/search** (2 changes)

* Path was added
* Operation POST was added

**ConversationAggregationQuery** (1 change)

* Enum value nTakeover was added to property metrics

**ConversationAggregationSort** (1 change)

* Enum value nTakeover was added to property name

**ConversationAggregationView** (1 change)

* Enum value nTakeover was added to property target

**ConversationDetailQueryPredicate** (1 change)

* Enum value nTakeover was added to property metric

**KnowledgeAggregationSort** (1 change)

* Enum value nKnowledgeV3Search was added to property name

**DynamicUtilizationRule** (1 change)

* Model was added

**InboundRoute** (2 changes)

* Optional property mailboxFolders was added
* Optional property status was added

**Variable** (1 change)

* Enum value GuideOnly was added to property scope

**JourneyEventDefinition** (1 change)

* Enum value External was added to property source

**KnowledgeSourcesSearchResponse** (1 change)

* Model was added

**KnowledgeV3ConversationContextResponse** (1 change)

* Model was added

**V3KnowledgeSearchClientApplication** (1 change)

* Model was added

**KnowledgeSourcesSearchRequest** (1 change)

* Model was added

**KnowledgeV3ConversationContext** (1 change)

* Model was added

**InboundDomain** (2 changes)

* Optional property imapSettings was added
* Optional property graphApiSettings was added

**InboundDomainPatchRequest** (1 change)

* Optional property graphApiSettings was added

**InboundDomainCreateRequest** (2 changes)

* Optional property imapSettings was added
* Optional property graphApiSettings was added

**SocialMediaAsyncAggregationQuery** (1 change)

* Enum value sourceType was added to property groupBy

**SocialMediaQueryPredicate** (1 change)

* Enum value sourceType was added to property dimension

**RecurrenceSettingsBase** (1 change)

* Model was added

**SchedulingPeriodBase** (1 change)

* Model was added

**StaffingGroupAllocation** (8 changes)

* Optional property baseStartingFullTimeEquivalentCount was added
* Optional property attritionFullTimeEquivalentCount was added
* Optional property staffingGroupPlannedFullTimeEquivalentCount was added
* Optional property endOfMonthPlannedFullTimeEquivalentCount was added
* Optional property shrinkageFullTimeEquivalentCount was added
* Optional property netFullTimeEquivalentCount was added
* Optional property extraTimeUnderTimeFullTimeEquivalentCount was added
* Optional property transfersFullTimeEquivalentCount was added

**StaffingGroupAllocationsResponseTemplate** (3 changes)

* Optional property months was added
* Optional property planningGroupAllocations was added
* Optional property capacityPlanMetricsSummary was added

**CapacityPlanStaffingGroupMetricChangeResponse** (1 change)

* Optional property transfersFullTimeEquivalent was added

**CreateCapacityPlanStaffingGroupMetricChangeRequest** (1 change)

* Optional property transfersFullTimeEquivalent was added

**StaffingGroupMetricChangeResponse** (1 change)

* Optional property transfersFullTimeEquivalent was added

**LongTermRequirements** (1 change)

* Optional property months was added

**ConversationAsyncAggregationQuery** (1 change)

* Enum value nTakeover was added to property metrics


# Point Changes (11 changes)

**GET /api/v2/conversations/calls** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/conversations/callbacks** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/conversations/emails** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/conversations/internalmessages** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/conversations/messages** (2 changes)

* Description was changed
* Summary was changed

**POST /api/v2/taskmanagement/workitems/query** (1 change)

* Description was changed
