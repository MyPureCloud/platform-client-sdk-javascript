Platform API version: 2960


# Major Changes (6 changes)

**/api/v2/attributes** (1 change)

* Path /api/v2/attributes was removed

**/api/v2/attributes/query** (1 change)

* Path /api/v2/attributes/query was removed

**/api/v2/attributes/{attributeId}** (1 change)

* Path /api/v2/attributes/{attributeId} was removed

**GET /api/v2/locations** (1 change)

* Parameter id was added

**AttributeEntityListing** (1 change)

* Model AttributeEntityListing was removed

**AttributeQueryRequest** (1 change)

* Model AttributeQueryRequest was removed


# Minor Changes (58 changes)

**/api/v2/locations** (1 change)

* Operation post was added. Summary: Create a location

**/api/v2/locations/{locationId}** (2 changes)

* Operation delete was added. Summary: Delete a location
* Operation patch was added. Summary: Update a location

**ViewFilter** (9 changes)

* Optional property flowIds was added
* Optional property flowOutcomeIds was added
* Optional property flowOutcomeValues was added
* Optional property flowDestinationTypes was added
* Optional property flowDisconnectReasons was added
* Optional property flowTypes was added
* Optional property flowEntryTypes was added
* Optional property flowEntryReasons was added
* Optional property groupIds was added

**WebChatDeployment** (1 change)

* Optional property allowedDomains was added

**ExternalContact** (1 change)

* Optional property whatsAppId was added

**WhatsAppId** (1 change)

* Model was added

**LocationUpdateDefinition** (1 change)

* Model was added

**OrgOAuthClient** (1 change)

* Optional property roleDivisions was added

**RoleDivision** (1 change)

* Model was added

**OAuthClient** (1 change)

* Optional property roleDivisions was added

**AggregationQuery** (9 changes)

* Enum value entryReason was added to property groupBy
* Enum value entryType was added to property groupBy
* Enum value journeyCustomerId was added to property groupBy
* Enum value journeyCustomerIdType was added to property groupBy
* Enum value journeyCustomerSessionId was added to property groupBy
* Enum value journeyCustomerSessionIdType was added to property groupBy
* Enum value journeyActionId was added to property groupBy
* Enum value journeyActionMapId was added to property groupBy
* Enum value journeyActionMapVersion was added to property groupBy

**AnalyticsQueryPredicate** (9 changes)

* Enum value entryReason was added to property dimension
* Enum value entryType was added to property dimension
* Enum value journeyCustomerId was added to property dimension
* Enum value journeyCustomerIdType was added to property dimension
* Enum value journeyCustomerSessionId was added to property dimension
* Enum value journeyCustomerSessionIdType was added to property dimension
* Enum value journeyActionId was added to property dimension
* Enum value journeyActionMapId was added to property dimension
* Enum value journeyActionMapVersion was added to property dimension

**ReportingExportJobResponse** (5 changes)

* Enum value FLOW_OUTCOME_SUMMARY_VIEW was added to property viewType
* Enum value FLOW_OUTCOME_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value FLOW_OUTCOME_PERFORMANCE_INTERVAL_DETAIL_VIEW was added to property viewType
* Enum value FLOW_DESTINATION_SUMMARY_VIEW was added to property viewType
* Enum value FLOW_DESTINATION_DETAIL_VIEW was added to property viewType

**ReportingExportJobRequest** (5 changes)

* Enum value FLOW_OUTCOME_SUMMARY_VIEW was added to property viewType
* Enum value FLOW_OUTCOME_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value FLOW_OUTCOME_PERFORMANCE_INTERVAL_DETAIL_VIEW was added to property viewType
* Enum value FLOW_DESTINATION_SUMMARY_VIEW was added to property viewType
* Enum value FLOW_DESTINATION_DETAIL_VIEW was added to property viewType

**SubjectDivisionGrants** (1 change)

* Enum value PC_OAUTH_CLIENT was added to property type

**OAuthClientListing** (1 change)

* Optional property roleDivisions was added

**AnalyticsFlow** (2 changes)

* Optional property entryReason was added
* Optional property entryType was added

**AnalyticsSession** (7 changes)

* Optional property journeyCustomerId was added
* Optional property journeyCustomerIdType was added
* Optional property journeyCustomerSessionId was added
* Optional property journeyCustomerSessionIdType was added
* Optional property journeyActionId was added
* Optional property journeyActionMapId was added
* Optional property journeyActionMapVersion was added


# Point Changes (0 changes)
