Platform API version: 4382


# Major Changes (10 changes)

**PUT /api/v2/telephony/providers/edges/dids/{didId}** (1 change)

* Has been deprecated

**PUT /api/v2/telephony/providers/edges/extensions/{extensionId}** (1 change)

* Has been deprecated

**GET /api/v2/telephony/providers/edges/{edgeId}/lines** (1 change)

* Has been deprecated

**GET /api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}** (1 change)

* Has been deprecated

**PUT /api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}** (1 change)

* Has been deprecated

**EntityListing** (5 changes)

* Property pageSize was removed
* Property pageNumber was removed
* Property total was removed
* Property pageCount was removed
* Property entities was changed from DataTableImportJob[] to object[]


# Minor Changes (69 changes)

**/api/v2/conversations/messaging/integrations/twitter/{integrationId}** (1 change)

* Operation patch was added. Summary: Update Twitter messaging integration

**/api/v2/recording/crossplatform/mediaretentionpolicies/{policyId}** (5 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added
* Operation PATCH was added

**PUT /api/v2/flows/milestones/{milestoneId}** (1 change)

* Response 409 was added

**/api/v2/recording/crossplatform/mediaretentionpolicies** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation DELETE was added

**MediaType** (1 change)

* Model was added

**MediaTypeAccess** (1 change)

* Model was added

**MediaTypes** (1 change)

* Model was added

**SupportedContent** (1 change)

* Model was added

**StatisticalSummary** (2 changes)

* Optional property countNegative was added
* Optional property countPositive was added

**JourneyAggregationQuery** (1 change)

* Enum value nWebActionsFrequencyCapReached was added to property metrics

**JourneyAggregationView** (1 change)

* Enum value nWebActionsFrequencyCapReached was added to property target

**Dependency** (2 changes)

* Enum value BOTCONNECTORBOT was added to property type
* Enum value BOTCONNECTORBOTVERSION was added to property type

**DependencyObject** (2 changes)

* Enum value BOTCONNECTORBOT was added to property type
* Enum value BOTCONNECTORBOTVERSION was added to property type

**ReportingExportJobResponse** (4 changes)

* Enum value CONTENT_SEARCH_VIEW was added to property viewType
* Enum value LANDING_PAGE was added to property viewType
* Enum value DASHBOARD_SUMMARY was added to property viewType
* Enum value DASHBOARD_DETAIL was added to property viewType

**Transcripts** (1 change)

* Model was added

**ViewFilter** (6 changes)

* Optional property transcripts was added
* Optional property transcriptLanguages was added
* Optional property participantPurposes was added
* Optional property showFirstQueue was added
* Optional property teamIds was added
* Optional property filterUsersByTeamIds was added

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value Presence was added to property serviceName

**AuditLogMessage** (7 changes)

* Optional property userHomeOrgId was added
* Enum value Presence was added to property serviceName
* Enum value Revoke was added to property action
* Enum value UserPresence was added to property entityType
* Enum value MaxOrgRoutingUtilizationCapacity was added to property entityType
* Enum value OrganizationAuthorizationTrust was added to property entityType
* Enum value OrganizationAuthorizationUserTrust was added to property entityType

**AuditQueryEntity** (5 changes)

* Enum value UserPresence was added to property name
* Enum value MaxOrgRoutingUtilizationCapacity was added to property name
* Enum value OrganizationAuthorizationTrust was added to property name
* Enum value OrganizationAuthorizationUserTrust was added to property name
* Enum value Revoke was added to property actions

**AuditQueryService** (1 change)

* Enum value Presence was added to property name

**AuditQueryRequest** (1 change)

* Enum value Presence was added to property serviceName

**AuditRealtimeQueryRequest** (1 change)

* Enum value Presence was added to property serviceName

**ReportingExportJobRequest** (4 changes)

* Enum value CONTENT_SEARCH_VIEW was added to property viewType
* Enum value LANDING_PAGE was added to property viewType
* Enum value DASHBOARD_SUMMARY was added to property viewType
* Enum value DASHBOARD_DETAIL was added to property viewType

**CrossPlatformCallMediaPolicy** (1 change)

* Model was added

**CrossPlatformChatMediaPolicy** (1 change)

* Model was added

**CrossPlatformEmailMediaPolicy** (1 change)

* Model was added

**CrossPlatformMediaPolicies** (1 change)

* Model was added

**CrossPlatformMessageMediaPolicy** (1 change)

* Model was added

**CrossPlatformPolicy** (1 change)

* Model was added

**CrossPlatformPolicyActions** (1 change)

* Model was added

**FacebookIntegrationUpdateRequest** (3 changes)

* Optional property id was added
* Optional property name was added
* Optional property selfUri was added

**CrossPlatformPolicyCreate** (1 change)

* Model was added

**ReportingExportMetadataJobResponse** (4 changes)

* Enum value CONTENT_SEARCH_VIEW was added to property viewType
* Enum value LANDING_PAGE was added to property viewType
* Enum value DASHBOARD_SUMMARY was added to property viewType
* Enum value DASHBOARD_DETAIL was added to property viewType


# Point Changes (3 changes)

**PATCH /api/v2/conversations/messaging/integrations/whatsapp/{integrationId}** (1 change)

* Summary was changed

**GET /api/v2/routing/wrapupcodes** (1 change)

* Description was changed for parameter name

**GET /api/v2/authorization/divisions/{divisionId}/grants** (1 change)

* Description was changed
