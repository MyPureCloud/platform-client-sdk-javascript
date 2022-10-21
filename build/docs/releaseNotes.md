Platform API version: 6265


# Major Changes (6 changes)

**GET /api/v2/presence/sources** (2 changes)

* Parameter deleted was removed
* Parameter deactivated was added

**ComparisonPeriod** (4 changes)

* Property kpiTotalOn was removed
* Property kpiTotalOff was removed
* Property interactionCountOn was removed
* Property interactionCountOff was removed


# Minor Changes (48 changes)

**/api/v2/externalcontacts/contacts/{contactId}/journey/sessions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messages/{conversationId}/communications/{communicationId}/typing** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/teams/{teamId}/members** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation DELETE was added

**/api/v2/users/search/teams/assign** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId}/timeoffbalance/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffbalance/jobs** (2 changes)

* Path was added
* Operation POST was added

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value Emails was added to property serviceName

**AuditQueryRequest** (1 change)

* Enum value Emails was added to property serviceName

**AuditLogMessage** (5 changes)

* Enum value Emails was added to property serviceName
* Enum value InboundDomain was added to property entityType
* Enum value InboundRoute was added to property entityType
* Enum value OrganizationLimits was added to property entityType
* Enum value OutboundDomain was added to property entityType

**EntityChange** (4 changes)

* Enum value InboundDomain was added to property entityType
* Enum value InboundRoute was added to property entityType
* Enum value OrganizationLimits was added to property entityType
* Enum value OutboundDomain was added to property entityType

**AuditRealtimeQueryRequest** (1 change)

* Enum value Emails was added to property serviceName

**AuditQueryEntity** (4 changes)

* Enum value InboundDomain was added to property name
* Enum value InboundRoute was added to property name
* Enum value OrganizationLimits was added to property name
* Enum value OutboundDomain was added to property name

**AuditQueryService** (1 change)

* Enum value Emails was added to property name

**SessionListing** (1 change)

* Model was added

**MessageTypingEventRequest** (1 change)

* Model was added

**KnowledgeSearchClientApplication** (1 change)

* Model was added

**KnowledgeDocumentSearch** (1 change)

* Optional property application was added

**KnowledgeDocumentSearchRequest** (1 change)

* Optional property application was added

**PredictorWorkloadBalancing** (2 changes)

* Optional property minimumOccupancy was added
* Optional property maximumOccupancy was added

**UserReferenceWithName** (1 change)

* Model was added

**TeamAddMemberFailure** (1 change)

* Model was added

**TeamMemberAddListingResponse** (1 change)

* Model was added

**TeamMembers** (1 change)

* Model was added

**TeamMemberEntityListing** (1 change)

* Model was added

**HrisTimeOffType** (1 change)

* Model was added

**TimeOffBalanceJobReference** (1 change)

* Model was added

**TimeOffBalanceResponse** (1 change)

* Model was added

**TimeOffBalancesResponse** (1 change)

* Model was added

**TimeOffBalanceRequest** (1 change)

* Model was added


# Point Changes (3 changes)

**GET /api/v2/processautomation/triggers/{triggerId}** (1 change)

* Summary was changed

**GET /api/v2/processautomation/triggers** (2 changes)

* Summary was changed
* Description was changed for parameter topicName
