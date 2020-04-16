Platform API version: 3884


# Major Changes (16 changes)

**/api/v2/messaging/stickers/{messengerType}** (1 change)

* Path /api/v2/messaging/stickers/{messengerType} was removed

**DELETE /api/v2/externalcontacts/relationships/{relationshipId}** (1 change)

* Response default was removed

**DELETE /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}** (1 change)

* Response default was removed

**DELETE /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}** (1 change)

* Response default was removed

**GET /api/v2/responsemanagement/libraries** (1 change)

* Parameter messagingTemplateFilter was added

**DELETE /api/v2/externalcontacts/organizations/{externalOrganizationId}** (1 change)

* Response default was removed

**DELETE /api/v2/externalcontacts/contacts/{contactId}** (1 change)

* Response default was removed

**GET /api/v2/authorization/divisionspermitted/paged/{subjectId}** (1 change)

* Has been deprecated

**EntityListing** (5 changes)

* Property pageSize was removed
* Property pageNumber was removed
* Property total was removed
* Property pageCount was removed
* Property entities was changed from DataTableImportJob[] to object[]

**MessagingTemplate** (3 changes)

* Property name was removed
* Property namespace was removed
* Property language was removed


# Minor Changes (30 changes)

**DELETE /api/v2/externalcontacts/relationships/{relationshipId}** (1 change)

* Response 200 was added

**DELETE /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}** (1 change)

* Response 200 was added

**DELETE /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}** (1 change)

* Response 200 was added

**DELETE /api/v2/externalcontacts/organizations/{externalOrganizationId}** (1 change)

* Response 200 was added

**DELETE /api/v2/externalcontacts/contacts/{contactId}** (1 change)

* Response 200 was added

**ViewFilter** (4 changes)

* Optional property answered was added
* Enum value bot was added to property flowTypes
* Optional property flowOutTypes was added
* Optional property providerList was added

**FlowDivisionView** (1 change)

* Enum value BOT was added to property type

**MessagingTemplate** (1 change)

* Optional property whatsApp was added

**Response** (1 change)

* responseType is no longer readonly

**WhatsAppDefinition** (1 change)

* Model was added

**Flow** (1 change)

* Enum value BOT was added to property type

**Dependency** (3 changes)

* Enum value BOTFLOW was added to property type
* Enum value FLOWACTION was added to property type
* Enum value FLOWDATATYPE was added to property type

**DependencyObject** (3 changes)

* Enum value BOTFLOW was added to property type
* Enum value FLOWACTION was added to property type
* Enum value FLOWDATATYPE was added to property type

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value PredictiveEngagement was added to property serviceName

**AuditLogMessage** (7 changes)

* Enum value PredictiveEngagement was added to property serviceName
* Enum value ApplyProtection was added to property action
* Enum value RevokeProtection was added to property action
* Enum value UpdateRetention was added to property action
* Enum value Segment was added to property entityType
* Enum value Outcome was added to property entityType
* Enum value ClickstreamSettings was added to property entityType

**AuditQueryRequest** (1 change)

* Enum value PredictiveEngagement was added to property serviceName

**AnalyticsFlow** (1 change)

* Enum value BOT was added to property flowType


# Point Changes (1 change)

**GET /api/v2/authorization/divisionspermitted/paged/{subjectId}** (1 change)

* Description was changed
