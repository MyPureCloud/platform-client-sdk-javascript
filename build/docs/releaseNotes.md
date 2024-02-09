Platform API version: 7756




# Major Changes (33 changes)

**GET /api/v2/authorization/divisions** (1 change)

* Parameter id was added

**GET /api/v2/outbound/importtemplates/{importTemplateId}** (1 change)

* Parameter includeImportStatus was added

**GET /api/v2/outbound/importtemplates** (1 change)

* Parameter includeImportStatus was added

**GET /api/v2/outbound/schedules/emailcampaigns** (1 change)

* Response 200 type was changed from MessagingCampaignScheduleEntityListing to EmailCampaignScheduleEntityListing

**GET /api/v2/speechandtextanalytics/topics** (1 change)

* Parameter dialects was added

**POST /api/v2/flows/instances/query** (1 change)

* Parameter pageSize was added

**SegmentAssignedEvent** (1 change)

* Model SegmentAssignedEvent was removed

**SegmentAssignedEventSegment** (1 change)

* Model SegmentAssignedEventSegment was removed

**ConversationAggregateQueryPredicate** (1 change)

* Enum value reoffered was removed from property dimension

**ConversationAggregationQuery** (1 change)

* Enum value reoffered was removed from property groupBy

**FlowAggregateQueryPredicate** (1 change)

* Enum value reoffered was removed from property dimension

**FlowAggregationQuery** (1 change)

* Enum value reoffered was removed from property groupBy

**WhatsAppIntegrationUpdateRequest** (4 changes)

* Property action was removed
* Property authenticationMethod was removed
* Property confirmationCode was removed
* Property phoneNumber was removed

**PatchOutcome** (7 changes)

* Property id was removed
* Property selfUri was removed
* Property createdDate was removed
* Property modifiedDate was removed
* Property context was changed from Context to PatchContext
* Property journey was changed from Journey to PatchJourney
* Property associatedValueField was changed from AssociatedValueField to PatchAssociatedValueField

**PatchSegment** (6 changes)

* Property id was removed
* Property selfUri was removed
* Property createdDate was removed
* Property modifiedDate was removed
* Property context was changed from Context to PatchContext
* Property journey was changed from Journey to PatchJourney

**AppEventRequest** (1 change)

* Property device was changed from Device to RequestDevice

**ConversationAsyncAggregationQuery** (1 change)

* Enum value reoffered was removed from property groupBy

**FlowAsyncAggregationQuery** (1 change)

* Enum value reoffered was removed from property groupBy

**Event** (1 change)

* Property segmentAssignedEvent was removed


# Minor Changes (80 changes)

**/api/v2/analytics/ratelimits/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/outbound/contactlistfilters/bulk/retrieve** (2 changes)

* Path was added
* Operation POST was added

**PUT /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}** (1 change)

* Response 409 was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/uploads/urls/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/uploads/urls/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/parse/jobs/{parseJobId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/parse/jobs/{parseJobId}/import** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/parse/jobs** (2 changes)

* Path was added
* Operation POST was added

**AnalyticsFlow** (1 change)

* Enum value VOICESURVEY was added to property flowType

**RateLimitAggregateDataContainer** (1 change)

* Model was added

**RateLimitAggregateQueryResponse** (1 change)

* Model was added

**RateLimitAggregateQueryClause** (1 change)

* Model was added

**RateLimitAggregateQueryFilter** (1 change)

* Model was added

**RateLimitAggregateQueryPredicate** (1 change)

* Model was added

**RateLimitAggregationQuery** (1 change)

* Model was added

**RateLimitAggregationView** (1 change)

* Model was added

**ViewFilter** (1 change)

* Enum value voicesurvey was added to property flowTypes

**CallbackMediaSettings** (3 changes)

* Optional property enableAutoDialAndEnd was added
* Optional property autoDialDelaySeconds was added
* Optional property autoEndDelaySeconds was added

**AchievedOutcome** (1 change)

* id is no longer readonly

**AssignedSegment** (1 change)

* id is no longer readonly

**Session** (1 change)

* id is no longer readonly

**SessionLastEvent** (1 change)

* id is no longer readonly

**ContactListFilterBulkRetrieveBody** (1 change)

* Model was added

**ImportTemplate** (1 change)

* Optional property importStatus was added

**EmailCampaignScheduleEntityListing** (1 change)

* Model was added

**Outcome** (1 change)

* id is no longer readonly

**PatchAssociatedValueField** (1 change)

* Model was added

**PatchContext** (1 change)

* Model was added

**PatchContextPattern** (1 change)

* Model was added

**PatchCriteria** (1 change)

* Model was added

**PatchEntityTypeCriteria** (1 change)

* Model was added

**PatchJourney** (1 change)

* Model was added

**PatchJourneyPattern** (1 change)

* Model was added

**OutcomeRequest** (1 change)

* Model was added

**RequestContext** (1 change)

* Model was added

**RequestContextPattern** (1 change)

* Model was added

**RequestCriteria** (1 change)

* Model was added

**RequestEntityTypeCriteria** (1 change)

* Model was added

**RequestJourney** (1 change)

* Model was added

**RequestJourneyPattern** (1 change)

* Model was added

**JourneySegment** (1 change)

* id is no longer readonly

**JourneySegmentRequest** (1 change)

* Model was added

**RequestExternalSegment** (1 change)

* Model was added

**KnowledgeExportJobResponse** (1 change)

* Optional property jsonFileVersion was added

**KnowledgeExportJobRequest** (1 change)

* Optional property jsonFileVersion was added

**RequestDevice** (1 change)

* Model was added

**AppEventResponseSession** (1 change)

* id is no longer readonly

**Flow** (2 changes)

* Enum value VOICESURVEY was added to property type
* Enum value VOICESURVEY was added to property compatibleFlowTypes

**FlowVersion** (1 change)

* Enum value VOICESURVEY was added to property compatibleFlowTypes

**WrapupCodeRequest** (1 change)

* Optional property division was added

**Dependency** (1 change)

* Enum value VOICESURVEYFLOW was added to property type

**DependencyObject** (1 change)

* Enum value VOICESURVEYFLOW was added to property type

**FlowDivisionView** (1 change)

* Enum value VOICESURVEY was added to property type

**FlowActivityEntityData** (1 change)

* Enum value VOICESURVEY was added to property flowType

**TaskManagementAggregationQuery** (1 change)

* Enum value oWorkitemsServiceLevel was added to property metrics

**TaskManagementAggregationView** (1 change)

* Enum value oWorkitemsServiceLevel was added to property target

**TaskManagementAsyncAggregationQuery** (1 change)

* Enum value oWorkitemsServiceLevel was added to property metrics

**FlowsQueryCriteriaResponse** (1 change)

* Enum value voicesurvey was added to property flowTypes

**FlowExecutionDataQueryResult** (1 change)

* Enum value voicesurvey was added to property flowType

**Event** (1 change)

* correlationId is no longer readonly

**GetUploadSourceUrlJobStatusResponse** (1 change)

* Model was added

**CreateUploadSourceUrlJobResponse** (1 change)

* Model was added

**CreateUploadSourceUrlJobRequest** (1 change)

* Model was added

**KnowledgeParseJobRequestPatch** (1 change)

* Model was added

**KnowledgeParseJobRequestImport** (1 change)

* Model was added

**KnowledgeParseRecord** (1 change)

* Model was added

**KnowledgeParseImportResult** (1 change)

* Model was added

**KnowledgeParseJobResponse** (1 change)

* Model was added

**KnowledgeParseJobRequest** (1 change)

* Model was added


# Point Changes (3 changes)

**PATCH /api/v2/conversations/messaging/integrations/whatsapp/{integrationId}** (3 changes)

* Description was changed
* Summary was changed
* Response 202 was changed from Processing Request - If request was to Activate, do a GET checking for activationStatus set to CodeSent. 
If request was to Confirm, do a GET checking for the integration status set to Active to Processing Request
