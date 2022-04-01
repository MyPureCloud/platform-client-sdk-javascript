Platform API version: 5567


# Major Changes (9 changes)

**/api/v2/uploads/workforcemanagement/historicaldata/json** (1 change)

* Path /api/v2/uploads/workforcemanagement/historicaldata/json was removed

**GET /api/v2/oauth/authorizations/{clientId}** (1 change)

* Parameter Accept-Language was added

**GET /api/v2/oauth/authorizations** (1 change)

* Parameter Accept-Language was added

**ViewFilter** (1 change)

* Property conversationInitiator was removed

**AnswerOption** (1 change)

* assistanceConditions has been made readonly

**AssistanceCondition** (2 changes)

* operator has been made readonly
* topicIds has been made readonly

**HistoricalAdherenceExceptionInfo** (2 changes)

* Property routingStatus was changed from RoutingStatus to string
* Values are now constrained by enum members


# Minor Changes (94 changes)

**/api/v2/conversations/callbacks/bulk/update** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/callbacks/bulk/disconnect** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/callbacks** (1 change)

* Operation patch was added. Summary: Update a scheduled callback

**/api/v2/responsemanagement/responseassets/{responseAssetId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/responsemanagement/responseassets/status/{statusId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/responsemanagement/responseassets/uploads** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/responsemanagement/responseassets/search** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/import/uploadurl** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/import** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/import/uploadurl** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/import** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/update/uploadurl** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/update** (2 changes)

* Path was added
* Operation POST was added

**ReportingTurnAction** (1 change)

* Enum value JumpToTaskAction was added to property actionType

**ViewFilter** (2 changes)

* Enum value digitalbot was added to property flowTypes
* Optional property conversationInitiators was added

**AuditLogMessage** (9 changes)

* Enum value Copy was added to property action
* Enum value Fax was added to property action
* Enum value VersionCreate was added to property action
* Enum value ShareAdd was added to property action
* Enum value ShareRemove was added to property action
* Enum value TagAdd was added to property action
* Enum value TagRemove was added to property action
* Enum value TagUpdate was added to property action
* Enum value NumberOrder was added to property entityType

**AuditQueryEntity** (9 changes)

* Enum value NumberOrder was added to property name
* Enum value Copy was added to property actions
* Enum value Fax was added to property actions
* Enum value VersionCreate was added to property actions
* Enum value ShareAdd was added to property actions
* Enum value ShareRemove was added to property actions
* Enum value TagAdd was added to property actions
* Enum value TagRemove was added to property actions
* Enum value TagUpdate was added to property actions

**EncryptionKey** (1 change)

* Optional property kmsKeyArn was added

**BulkError** (1 change)

* Model was added

**BulkCallbackPatchResponse** (1 change)

* Model was added

**BulkResult** (1 change)

* Model was added

**BulkCallbackPatchRequest** (1 change)

* Model was added

**PatchCallbackRequest** (1 change)

* Model was added

**BulkCallbackDisconnectRequest** (1 change)

* Model was added

**CallbackDisconnectIdentifier** (1 change)

* Model was added

**PatchCallbackResponse** (1 change)

* Model was added

**ConversationEventPresence** (1 change)

* Model was added

**ConversationMessageEvent** (3 changes)

* Enum value Presence was added to property eventType
* Enum value Unknown was added to property eventType
* Optional property presence was added

**ConversationMessagingFromRecipient** (1 change)

* Optional property additionalIds was added

**ConversationMessagingToRecipient** (1 change)

* Optional property additionalIds was added

**ConversationRecipientAdditionalIdentifier** (1 change)

* Model was added

**OAuthAuthorization** (2 changes)

* Optional property roles was added
* Optional property state was added

**ResponseAsset** (1 change)

* Model was added

**ResponseAssetRequest** (1 change)

* Model was added

**ResponseAssetStatus** (1 change)

* Model was added

**CreateResponseAssetResponse** (1 change)

* Model was added

**CreateResponseAssetRequest** (1 change)

* Model was added

**ResponseAssetSearchResults** (1 change)

* Model was added

**ResponseAssetFilter** (1 change)

* Model was added

**ResponseAssetSearchRequest** (1 change)

* Model was added

**GeneralProgramJobRequest** (1 change)

* Enum value pt-PT was added to property dialect

**RecipientAdditionalIdentifier** (1 change)

* Model was added

**WebMessagingEvent** (2 changes)

* Enum value Presence was added to property eventType
* Optional property presence was added

**WebMessagingEventPresence** (1 change)

* Model was added

**WebMessagingRecipient** (1 change)

* Optional property additionalIds was added

**BuImportShortTermForecastSchema** (1 change)

* Model was added

**ImportForecastUploadResponse** (1 change)

* Model was added

**UploadUrlRequestBody** (1 change)

* Model was added

**ImportForecastResponse** (1 change)

* Model was added

**WfmProcessUploadRequest** (1 change)

* Model was added

**BuImportAgentScheduleUploadSchema** (1 change)

* Model was added

**ImportScheduleUploadResponse** (1 change)

* Model was added

**ImportScheduleUploadSchema** (1 change)

* Model was added

**ListWrapperString** (1 change)

* Model was added

**ScheduleUploadProcessingResponse** (1 change)

* Model was added

**BuUpdateAgentScheduleUploadSchema** (1 change)

* Model was added

**UpdateScheduleUploadResponse** (1 change)

* Model was added

**UpdateScheduleUploadSchema** (1 change)

* Model was added

**ProcessScheduleUpdateUploadRequest** (1 change)

* Model was added


# Point Changes (1 change)

**GET /api/v2/oauth/authorizations** (1 change)

* Summary was changed
