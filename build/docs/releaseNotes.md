Platform API version: 8698




# Major Changes (8 changes)

**GET /api/v2/externalcontacts/contacts/{contactId}/identifiers** (1 change)

* Response 200 type was changed from EntityListing to ContactIdentifierListing

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests** (1 change)

* Parameter recentlyReviewed was removed

**GET /api/v2/workforcemanagement/timeoffrequests** (1 change)

* Parameter recentlyReviewed was removed

**QuestionGroupSettings** (1 change)

* Property questionGroupIndex was removed

**QuestionSettings** (1 change)

* Property questionIndex was removed

**BatchDownloadJobResult** (3 changes)

* Property id was removed
* Property name was removed
* Property selfUri was removed


# Minor Changes (53 changes)

**/api/v2/externalcontacts/import/jobs/{jobId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/externalcontacts/import/jobs** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/externalcontacts/import/settings/{settingsId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/externalcontacts/import/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/dataprivacy/maskingrules/{ruleId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/dataprivacy/maskingrules** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/dataprivacy/maskingrules/validate** (2 changes)

* Path was added
* Operation POST was added

**PUT /api/v2/routing/email/domains/{domainName}/routes/{routeId}** (1 change)

* Response 202 was added

**DELETE /api/v2/routing/email/domains/{domainName}/routes/{routeId}** (1 change)

* Response 202 was added

**ContactIdentifierListing** (1 change)

* Model was added

**ContactImportJobStatusUpdateResponse** (1 change)

* Model was added

**ContactImportJobStatusUpdateRequest** (1 change)

* Model was added

**ContactImportJobMetadata** (1 change)

* Model was added

**ContactImportJobResponse** (1 change)

* Model was added

**ContactImportJobRequest** (1 change)

* Model was added

**ContactImportJobEntityListing** (1 change)

* Model was added

**ContactImportField** (1 change)

* Model was added

**ContactImportSettings** (1 change)

* Model was added

**ContactImportSettingsEntityListing** (1 change)

* Model was added

**ConversationMessageMetadataContent** (1 change)

* Enum value DatePicker was added to property contentType

**ConversationContentButtonResponse** (1 change)

* Enum value DatePicker was added to property type

**ConversationContentDatePicker** (1 change)

* Model was added

**ConversationContentDatePickerAvailableTime** (1 change)

* Model was added

**ConversationMessageContent** (1 change)

* Enum value DatePicker was added to property contentType

**MaskingRule** (1 change)

* Model was added

**MaskingRuleListing** (1 change)

* Model was added

**MaskingRuleValidateResponse** (1 change)

* Model was added

**MaskingRuleValidateRequest** (1 change)

* Model was added

**KnowledgeIntegrationDefaultSettings** (1 change)

* Model was added

**SalesforceSettings** (1 change)

* Optional property baseUrl was added

**ServiceNowSettings** (1 change)

* Optional property baseUrl was added

**RegionTimeZone** (1 change)

* Optional property canonicalId was added

**Dependency** (1 change)

* Enum value SMSPHONENUMBER was added to property type

**DependencyObject** (1 change)

* Enum value SMSPHONENUMBER was added to property type

**CobrowseSettings** (1 change)

* Optional property allowDraw was added

**WorkitemDelta** (1 change)

* Optional property wrapup was added

**WorkitemsAttributeChangeWrapupDelta** (1 change)

* Model was added

**WrapupDelta** (1 change)

* Model was added


# Point Changes (10 changes)

**GET /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/latest** (1 change)

* Description was changed

**GET /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/{jobId}** (1 change)

* Description was changed

**PATCH /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/{jobId}** (1 change)

* Description was changed

**POST /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs** (1 change)

* Description was changed

**GET /api/v2/journey/views/{viewId}/versions/{journeyViewVersion}/jobs/{jobId}/results** (1 change)

* Description was changed

**GET /api/v2/journey/views/{viewId}/schedules** (1 change)

* Description was changed

**PUT /api/v2/journey/views/{viewId}/schedules** (1 change)

* Description was changed

**DELETE /api/v2/journey/views/{viewId}/schedules** (1 change)

* Description was changed

**PUT /api/v2/routing/email/domains/{domainName}/routes/{routeId}** (1 change)

* Response 200 was changed from successful operation to Route update completed.

**DELETE /api/v2/routing/email/domains/{domainName}/routes/{routeId}** (1 change)

* Response 200 was changed from Operation was successful. to Route deletion completed.
