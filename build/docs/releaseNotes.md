Platform API version: 7944




# Major Changes (11 changes)

**GET /api/v2/knowledge/guest/sessions/{sessionId}/documents/{documentId}** (1 change)

* Response 200 type was changed from KnowledgeGuestDocument to KnowledgeGuestDocumentResponse

**GET /api/v2/recordings/screensessions** (1 change)

* Has been deprecated

**KnowledgeSearchDocument** (1 change)

* Model KnowledgeSearchDocument was removed

**KnowledgeGuestDocument** (1 change)

* Model KnowledgeGuestDocument was removed

**ContactsExportRequest** (1 change)

* Property searchCriteria was removed

**KnowledgeSearchResponse** (1 change)

* Property results was changed from KnowledgeSearchDocument[] to KnowledgeSearchDocumentV1[]

**KnowledgeDocumentSearchResult** (1 change)

* Property document was changed from KnowledgeDocumentResponse to KnowledgeSearchDocumentResponse

**KnowledgeGuestDocumentResponseListing** (1 change)

* Property entities was changed from KnowledgeGuestDocument[] to KnowledgeGuestDocumentResponse[]

**KnowledgeDocumentGuestSearchResult** (1 change)

* Property document was changed from KnowledgeGuestDocument to KnowledgeGuestSearchDocumentResponse

**FileUploadSettings** (1 change)

* Property useSupportedContentProfile was removed

**FlowLogLevelCharacteristicsDefinitions** (1 change)

* characteristics has been made readonly


# Minor Changes (71 changes)

**/api/v2/analytics/reporting/settings/dashboards/bulk/remove** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/reporting/settings/dashboards/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/reporting/dashboards/users/{userId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/analytics/reporting/dashboards/users** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/analytics/reporting/dashboards/users/bulk/remove** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/reporting/settings/users/{userId}/dashboards** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messaging/facebook/permissions** (2 changes)

* Path was added
* Operation GET was added

**POST /api/v2/outbound/campaigns** (1 change)

* Response 409 was added

**/api/v2/responsemanagement/libraries/bulk** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/routing/sms/phonenumbers/alphanumeric** (2 changes)

* Path was added
* Operation POST was added

**DashboardConfiguration** (1 change)

* Model was added

**Warning** (1 change)

* Model was added

**Widget** (1 change)

* Model was added

**DashboardConfigurationBulkRequest** (1 change)

* Model was added

**DashboardConfigurationListing** (1 change)

* Model was added

**DashboardConfigurationQueryRequest** (1 change)

* Model was added

**DashboardUser** (1 change)

* Model was added

**DashboardUserListing** (1 change)

* Model was added

**Limit** (2 changes)

* Enum value workforce.management.forecast was added to property namespace
* Enum value system was added to property namespace

**DialerPreview** (1 change)

* Optional property callbackAutoAnswer was added

**DynamicLineBalancingSettings** (1 change)

* Model was added

**FacebookPermission** (1 change)

* Model was added

**FacebookPermissionEntityListing** (1 change)

* Model was added

**ContactsExportRequest** (1 change)

* Optional property criteria was added

**KnowledgeSearchDocumentV1** (1 change)

* Model was added

**DocumentBodyBlockWithHighlight** (1 change)

* Model was added

**DocumentBodyParagraphWithHighlight** (1 change)

* Model was added

**DocumentBodyWithHighlight** (1 change)

* Model was added

**DocumentContentBlockWithHighlight** (1 change)

* Model was added

**DocumentContentHighlightIndex** (1 change)

* Model was added

**DocumentVariationAnswer** (1 change)

* Model was added

**KnowledgeSearchDocumentResponse** (1 change)

* Model was added

**KnowledgeDocumentSearchRequest** (1 change)

* Optional property answerHighlightTopResults was added

**ApprovalNamespace** (3 changes)

* Enum value workforce.management.forecast was added to property namespace
* Enum value system was added to property namespace
* Enum value System was added to property type

**LimitChangeRequestDetails** (2 changes)

* Enum value workforce.management.forecast was added to property namespace
* Enum value system was added to property namespace

**StatusChange** (2 changes)

* Enum value workforce.management.forecast was added to property namespace
* Enum value system was added to property namespace

**KnowledgeGuestDocumentVariationAnswer** (1 change)

* Model was added

**KnowledgeGuestDocumentResponse** (1 change)

* Model was added

**KnowledgeGuestSearchDocumentResponse** (1 change)

* Model was added

**KnowledgeDocumentGuestSearchRequest** (1 change)

* Optional property answerHighlightTopResults was added

**Recording** (2 changes)

* Optional property mediaSubtype was added
* Optional property mediaSubject was added

**OrphanRecording** (2 changes)

* Optional property mediaSubtype was added
* Optional property mediaSubject was added

**RecordingMetadata** (2 changes)

* Optional property mediaSubtype was added
* Optional property mediaSubject was added

**LibraryBatchRequest** (1 change)

* Model was added

**SmsPhoneNumber** (1 change)

* Enum value alphanumeric was added to property phoneNumberType

**SmsAvailablePhoneNumber** (1 change)

* Enum value alphanumeric was added to property phoneNumberType

**AlternativeShiftNotification** (1 change)

* Model was added

**WfmUserNotification** (2 changes)

* Enum value AlternativeShift was added to property type
* Optional property alternativeShift was added

**FlowLogLevelCharacteristicsDefinitions** (1 change)

* Optional property logLevels was added

**JourneyViewChart** (1 change)

* Model was added

**JourneyViewChartGroupByAttribute** (1 change)

* Model was added

**JourneyViewChartMetric** (1 change)

* Model was added

**SmsAlphanumericProvision** (1 change)

* Model was added


# Point Changes (4 changes)

**GET /api/v2/recordings/screensessions** (1 change)

* Description was changed

**POST /api/v2/usage/simplesearch** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/usage/simplesearch/{executionId}/results** (1 change)

* Summary was changed
