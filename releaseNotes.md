Platform API version: 10596




# Major Changes (6 changes)

**/api/v2/integrations/clientapps/unifiedcommunications** (1 change)

* Path /api/v2/integrations/clientapps/unifiedcommunications was removed

**POST /api/v2/businessrules/decisiontables/{tableId}/versions** (1 change)

* Parameter body was added

**UCIntegration** (1 change)

* Model UCIntegration was removed

**UCIntegrationListing** (1 change)

* Model UCIntegrationListing was removed

**Case** (2 changes)

* Property owner was changed from UserReference to CaseUserReference
* Property modifiedBy was changed from UserReference to CaseUserReference


# Minor Changes (146 changes)

**/api/v2/externalcontacts/notes/exports/{exportId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/notes/exports** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/externalcontacts/organizations/exports/{exportId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/organizations/exports** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/externalcontacts/relationships/exports/{exportId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/relationships/exports** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/conversations/emails/{conversationId}/messages/draft/attachments/uploads** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/sources/{sourceId}/synchronizations/{synchronizationId}/deletions/{fileId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/knowledge/sources/{sourceId}/synchronizations/{synchronizationId}/deletions** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/knowledge/sources/{sourceId}/synchronizations/{synchronizationId}/uploads/{fileId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/knowledge/sources/{sourceId}/synchronizations/{synchronizationId}/uploads** (1 change)

* Operation get was added. Summary: Get file upload entries associated with the synchronization

**/api/v2/conversations/{conversationId}/accessattributes** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**Limit** (2 changes)

* Enum value mcp.analytics.aggregates was added to property namespace
* Enum value workforce.management.adherence was added to property namespace

**AgentCopilotAggregationSort** (1 change)

* Enum value nDistinctConversations was added to property name

**ConversationAggregationQuery** (1 change)

* Enum value tCallbackVirtualWait was added to property metrics

**ConversationAggregationSort** (1 change)

* Enum value tCallbackVirtualWait was added to property name

**ConversationAggregationView** (1 change)

* Enum value tCallbackVirtualWait was added to property target

**ConversationAsyncAggregationQuery** (1 change)

* Enum value tCallbackVirtualWait was added to property metrics

**ConversationDetailQueryPredicate** (4 changes)

* Enum value tCallbackAbandon was added to property metric
* Enum value tCallbackConnect was added to property metric
* Enum value tCallbackNotReached was added to property metric
* Enum value tCallbackVirtualWait was added to property metric

**ReportingTurnAction** (1 change)

* Enum value AgenticAskForIntentAction was added to property actionType

**ViewFilter** (1 change)

* Optional property socialPostTypes was added

**DecisionTableSnapshot** (1 change)

* Model was added

**CreateDecisionTableVersionRequest** (1 change)

* Model was added

**CustomerIntentReference** (1 change)

* Optional property name was added

**CaseplanFilter** (1 change)

* Model was added

**CaseplanQueryRequest** (2 changes)

* Optional property filters was added
* Optional property attributes was added

**CaseExternalContactReference** (2 changes)

* Optional property firstName was added
* Optional property lastName was added

**CaseUserReference** (1 change)

* Model was added

**Step** (1 change)

* Optional property workitemActivity was added

**WorkitemActivityReference** (1 change)

* Model was added

**ContactsExportFieldFilter** (3 changes)

* Enum value ExternalSourceId was added to property field
* Enum value SchemaId was added to property field
* Enum value SchemaVersion was added to property field

**ContactsExportFieldListFilter** (3 changes)

* Enum value ExternalSourceId was added to property field
* Enum value SchemaId was added to property field
* Enum value SchemaVersion was added to property field

**NotesExport** (1 change)

* Model was added

**NotesExportComparisonFieldFilter** (1 change)

* Model was added

**NotesExportFieldFilter** (1 change)

* Model was added

**NotesExportFieldListFilter** (1 change)

* Model was added

**NotesExportFilter** (1 change)

* Model was added

**NotesExportQueryConditions** (1 change)

* Model was added

**NotesExportListing** (1 change)

* Model was added

**OrganizationsExport** (1 change)

* Model was added

**OrganizationsExportComparisonFieldFilter** (1 change)

* Model was added

**OrganizationsExportFieldFilter** (1 change)

* Model was added

**OrganizationsExportFieldListFilter** (1 change)

* Model was added

**OrganizationsExportFilter** (1 change)

* Model was added

**OrganizationsExportQueryConditions** (1 change)

* Model was added

**OrganizationsExportListing** (1 change)

* Model was added

**RelationshipsExport** (1 change)

* Model was added

**RelationshipsExportComparisonFieldFilter** (1 change)

* Model was added

**RelationshipsExportFieldFilter** (1 change)

* Model was added

**RelationshipsExportFieldListFilter** (1 change)

* Model was added

**RelationshipsExportFilter** (1 change)

* Model was added

**RelationshipsExportQueryConditions** (1 change)

* Model was added

**RelationshipsExportListing** (1 change)

* Model was added

**Evaluation** (6 changes)

* Optional property disputeCount was added
* Optional property version was added
* Optional property versionHistory was added
* Optional property declinedReview was added
* Optional property evaluationContextId was added
* Optional property retractedEvaluation was added

**UploadAttachmentResponse** (1 change)

* Model was added

**UploadAttachmentRequest** (1 change)

* Model was added

**EventLog** (1 change)

* Enum value RETENTION_POLICY was added to property category

**EventMessage** (16 changes)

* Enum value IMPORT_INVALID_RETENTION_TYPE was added to property code
* Enum value IMPORT_INVALID_RETENTION_DAYS_MUST_BE_SET was added to property code
* Enum value IMPORT_INVALID_RETENTION_DAYS_MUST_NOT_BE_SET was added to property code
* Enum value IMPORT_INVALID_RETENTION_DAYS_MUST_BE_POSITIVE was added to property code
* Enum value IMPORT_INVALID_RETENTION_DAYS_EXCEEDS_LIMIT was added to property code
* Enum value IMPORT_INVALID_RETENTION_EXPIRATION_DATE_MUST_BE_SET was added to property code
* Enum value IMPORT_INVALID_RETENTION_EXPIRATION_DATE_MUST_NOT_BE_SET was added to property code
* Enum value IMPORT_INVALID_RETENTION_EXPIRATION_DATE_INVALID_FORMAT was added to property code
* Enum value IMPORT_INVALID_RETENTION_EXPIRATION_DATE_NO_SECONDS was added to property code
* Enum value IMPORT_INVALID_RETENTION_EXPIRATION_DATE_EXCEEDS_LIMIT was added to property code
* Enum value IMPORT_INVALID_RETENTION_MISSING_TYPE was added to property code
* Enum value IMPORT_INVALID_RETENTION_MISSING_PREFERRED_TIMEZONE was added to property code
* Enum value IMPORT_INVALID_RETENTION_EXPIRATION_IN_PAST was added to property code
* Enum value FAILED_TO_DELETE_CONTACT_LIST was added to property code
* Enum value RESOURCE_NOT_FOUND was added to property code
* Enum value INVALID_CONTACT_UPDATE was added to property code

**JourneyViewChart** (1 change)

* Optional property rank was added

**V3SynchronizationDeletion** (1 change)

* Model was added

**V3SynchronizationFileDeletionRequest** (1 change)

* Model was added

**V3SynchronizationDeletionListing** (1 change)

* Model was added

**V3SynchronizationUpload** (1 change)

* Model was added

**V3SynchronizationUploadListing** (1 change)

* Model was added

**ApprovalNamespace** (2 changes)

* Enum value mcp.analytics.aggregates was added to property namespace
* Enum value workforce.management.adherence was added to property namespace

**LimitChangeRequestDetails** (2 changes)

* Enum value mcp.analytics.aggregates was added to property namespace
* Enum value workforce.management.adherence was added to property namespace

**StatusChange** (2 changes)

* Enum value mcp.analytics.aggregates was added to property namespace
* Enum value workforce.management.adherence was added to property namespace

**EvaluationResponse** (6 changes)

* Optional property disputeCount was added
* Optional property version was added
* Optional property versionHistory was added
* Optional property declinedReview was added
* Optional property evaluationContextId was added
* Optional property retractedEvaluation was added

**EvaluationSearchItemResponse** (6 changes)

* Optional property disputeCount was added
* Optional property version was added
* Optional property versionHistory was added
* Optional property declinedReview was added
* Optional property evaluationContextId was added
* Optional property retractedEvaluation was added

**RecordingSettings** (1 change)

* Optional property stopRecordingWhenOnlyExternalParticipants was added

**TranscriptSearchCriteria** (1 change)

* Enum value REQUIRED_FIELDS was added to property type

**AudioFormat** (1 change)

* Model was added

**PromptAsset** (1 change)

* Optional property audioFormat was added

**PromptAssetCreate** (1 change)

* Optional property audioFormat was added

**SystemPromptAsset** (1 change)

* Optional property audioFormat was added

**ActivityPlanListItem** (1 change)

* Optional property initialSchedulePeriod was added

**ActivityPlanResponse** (1 change)

* Optional property startTimeIncrementMinutes was added

**CreateActivityPlanRequest** (1 change)

* Optional property startTimeIncrementMinutes was added

**UpdateActivityPlanRequest** (5 changes)

* Optional property activityCodeId was added
* Optional property type was added
* Optional property lengthMinutes was added
* Optional property countsAsPaidTime was added
* Optional property recurrenceSettings was added

**ConversationAccessAttributesUpdate** (1 change)

* Model was added

**ConversationAccessAttributesResponse** (1 change)

* Model was added


# Point Changes (2 changes)

**POST /api/v2/businessrules/decisiontables/{tableId}/versions** (1 change)

* Summary was changed

**POST /api/v2/casemanagement/caseplans/query** (1 change)

* Description was changed
