Platform API version: 7466




# Major Changes (10 changes)

**/api/v2/chat/settings** (1 change)

* Path /api/v2/chat/settings was removed

**POST /api/v2/conversations/messaging/integrations/whatsapp** (1 change)

* Has been deprecated

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes** (1 change)

* Parameter forceDownloadService was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/query** (1 change)

* Parameter forceDownloadService was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/search** (1 change)

* Parameter forceDownloadService was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades** (1 change)

* Parameter forceDownloadService was added

**GET /api/v2/presence/definitions/{definitionId}** (1 change)

* Parameter localeCode was added

**GET /api/v2/presence/definitions** (1 change)

* Parameter localeCode was added

**AppEventRequestSession** (1 change)

* Model AppEventRequestSession was removed

**AppEventRequest** (1 change)

* Property session was removed


# Minor Changes (74 changes)

**/api/v2/conversations/messaging/integrations/whatsapp/embeddedsignup/{integrationId}** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/conversations/messaging/integrations/whatsapp/embeddedsignup** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/users/{userId}/verifiers** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/{userId}/verifiers/{verifierId}** (3 changes)

* Path was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/journey/deployments/{deploymentId}/actionevent** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/journey/deployments/{deploymentId}/customers/{customerCookieId}/ping** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/usage/events/definitions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/usage/events/definitions/{eventDefinitionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/providers/edges/sites/{siteId}/siteconnections** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation PATCH was added

**ConversationAggregationQuery** (2 changes)

* Enum value tPark was added to property metrics
* Enum value tParkComplete was added to property metrics

**ConversationAggregationView** (2 changes)

* Enum value tPark was added to property target
* Enum value tParkComplete was added to property target

**AnalyticsConversationSegment** (1 change)

* Enum value parked was added to property segmentType

**ConversationDetailQueryPredicate** (2 changes)

* Enum value tPark was added to property metric
* Enum value tParkComplete was added to property metric

**ReportingExportJobResponse** (1 change)

* Enum value CIRCUIT_BREAKER_OPEN_FOR_VIEW_TYPE was added to property exportErrorMessagesType

**DomainOrganizationRole** (1 change)

* id is no longer readonly

**DomainOrganizationRoleUpdate** (1 change)

* id is no longer readonly

**DomainOrganizationRoleCreate** (1 change)

* id is no longer readonly

**Evaluation** (1 change)

* Optional property revisionCreatedDate was added

**WhatsAppEmbeddedSignupIntegrationActivationRequest** (1 change)

* Model was added

**WhatsAppEmbeddedSignupIntegrationRequest** (1 change)

* Model was added

**KnowledgeBase** (1 change)

* Enum value ja-JP was added to property coreLanguage

**KnowledgeCategory** (1 change)

* Enum value ja-JP was added to property languageCode

**KnowledgeSearchDocument** (1 change)

* Enum value ja-JP was added to property languageCode

**KnowledgeExtendedCategory** (1 change)

* Enum value ja-JP was added to property languageCode

**KnowledgeImport** (1 change)

* Enum value ja-JP was added to property languageCode

**KnowledgeDocument** (1 change)

* Enum value ja-JP was added to property languageCode

**KnowledgeBaseCreateRequest** (1 change)

* Enum value ja-JP was added to property coreLanguage

**Verifier** (1 change)

* Model was added

**VerifierEntityListing** (1 change)

* Model was added

**UpdateVerifierRequest** (1 change)

* Model was added

**ActionEventRequest** (1 change)

* Model was added

**DeploymentPing** (1 change)

* Model was added

**DeploymentWebAction** (1 change)

* Model was added

**OpenActionProperties** (1 change)

* Model was added

**WebMessagingOfferProperties** (1 change)

* Model was added

**EventDefinition** (1 change)

* Model was added

**EventDefinitionListing** (1 change)

* Model was added

**MutableUserPresence** (1 change)

* Model was added

**EvaluationResponse** (1 change)

* Optional property revisionCreatedDate was added

**TrunkBase** (2 changes)

* Optional property site was added
* Optional property inboundSite was added

**EdgeTrunkBase** (2 changes)

* Optional property site was added
* Optional property inboundSite was added

**SiteConnections** (1 change)

* Model was added

**DisableSiteConnectionsRequest** (1 change)

* Model was added

**Dependency** (1 change)

* Enum value AUDIOCONNECTORBOT was added to property type

**DependencyObject** (1 change)

* Enum value AUDIOCONNECTORBOT was added to property type

**WebMessagingEventPresence** (2 changes)

* Enum value Clear was added to property type
* Enum value SignIn was added to property type

**BusinessUnitActivityCodeListing** (1 change)

* Optional property downloadUrl was added

**PlanningGroupList** (1 change)

* Optional property metadata was added

**ServiceGoalTemplateList** (1 change)

* Optional property metadata was added

**TimeOffPlan** (1 change)

* Optional property hrisTimeOffType was added

**AdminTimeOffRequestPatch** (1 change)

* Optional property paid was added

**TimeOffRequestListing** (1 change)

* Optional property downloadUrl was added

**SearchShiftTradesResponse** (1 change)

* Optional property downloadUrl was added

**WeekShiftTradeListResponse** (1 change)

* Optional property downloadUrl was added

**ConversationAsyncAggregationQuery** (2 changes)

* Enum value tPark was added to property metrics
* Enum value tParkComplete was added to property metrics


# Point Changes (4 changes)

**POST /api/v2/conversations/messaging/integrations/whatsapp** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/quality/forms/evaluations** (1 change)

* Description was changed

**PATCH /api/v2/users/bulk** (1 change)

* Summary was changed
