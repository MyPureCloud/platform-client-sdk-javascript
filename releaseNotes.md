Platform API version: 3578


# Major Changes (13 changes)

**GET /api/v2/flows** (1 change)

* Parameter lockedByClientId was added

**GET /api/v2/scim/v2/users** (2 changes)

* Parameter attributes was added
* Parameter excludedAttributes was added

**GET /api/v2/scim/v2/users/{userId}** (2 changes)

* Parameter attributes was added
* Parameter excludedAttributes was added

**GET /api/v2/scim/users** (2 changes)

* Parameter attributes was added
* Parameter excludedAttributes was added

**GET /api/v2/scim/users/{userId}** (2 changes)

* Parameter attributes was added
* Parameter excludedAttributes was added

**LocationDefinition** (3 changes)

* path has been made readonly
* floorplanImage has been made readonly
* addressVerified has been made readonly

**WfmForecastModificationIntervalOffsetValue** (1 change)

* Property value was changed from integer to number


# Minor Changes (41 changes)

**PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor/{trustorId}** (1 change)

* Response 422 was added

**DELETE /api/v2/users/{userId}/routingskills/{skillId}** (1 change)

* Response 409 was added

**DELETE /api/v2/architect/ivrs/{ivrId}** (1 change)

* Response 409 was added

**POST /api/v2/conversations/emails/{conversationId}/messages** (1 change)

* Response 409 was added

**/api/v2/authorization/subjects/{subjectId}/bulkadd** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/authorization/subjects/{subjectId}/bulkremove** (2 changes)

* Path was added
* Operation POST was added

**PUT /api/v2/integrations/{integrationId}/config/current** (1 change)

* Response 409 was added

**GET /api/v2/scim/v2/users** (1 change)

* Parameter filter was made optional

**PATCH /api/v2/locations/{locationId}** (1 change)

* Response 409 was added

**GET /api/v2/scim/users** (1 change)

* Parameter filter was made optional

**POST /api/v2/users** (1 change)

* Response 409 was added

**LocationAddressVerificationDetails** (1 change)

* Model was added

**LocationDefinition** (3 changes)

* Optional property addressVerificationDetails was added
* Optional property addressStored was added
* Optional property images was added

**Dependency** (1 change)

* Enum value WORKFLOW was added to property type

**Flow** (1 change)

* Enum value WORKFLOW was added to property type

**ViewFilter** (1 change)

* Enum value workflow was added to property flowTypes

**RoleDivisionGrants** (1 change)

* Model was added

**RoleDivisionPair** (1 change)

* Model was added

**DependencyObject** (1 change)

* Enum value WORKFLOW was added to property type

**IntegrationType** (1 change)

* Optional property vendorOAuthClientIds was added

**TimeOffRequestLookup** (13 changes)

* Optional property isFullDayRequest was added
* Optional property markedAsRead was added
* Optional property activityCodeId was added
* Optional property status was added
* Optional property partialDayStartDateTimes was added
* Optional property fullDayManagementUnitDates was added
* Optional property dailyDurationMinutes was added
* Optional property notes was added
* Optional property submittedBy was added
* Optional property submittedDate was added
* Optional property reviewedBy was added
* Optional property reviewedDate was added
* Optional property metadata was added

**ConversationAggregationQuery** (1 change)

* Enum value tShortAbandon was added to property metrics

**ConversationAggregationView** (1 change)

* Enum value tShortAbandon was added to property target

**AnalyticsFlow** (1 change)

* Enum value WORKFLOW was added to property flowType

**FlowDivisionView** (1 change)

* Enum value WORKFLOW was added to property type


# Point Changes (5 changes)

**POST /api/v2/notifications/channels** (1 change)

* Description was changed

**GET /api/v2/scim/v2/users** (2 changes)

* Description was changed
* Description was changed for parameter filter

**GET /api/v2/scim/users** (2 changes)

* Description was changed
* Description was changed for parameter filter
