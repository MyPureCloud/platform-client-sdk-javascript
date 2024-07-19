Platform API version: 8289




# Major Changes (6 changes)

**GET /api/v2/audits/query/{transactionId}/results** (1 change)

* Parameter allowRedirect was added

**PATCH /api/v2/recordings/screensessions/{recordingSessionId}** (1 change)

* Has been deprecated

**GET /api/v2/journey/views** (4 changes)

* Parameter pageNumber was added
* Parameter pageSize was added
* Parameter nameOrCreatedBy was added
* Parameter expand was added


# Minor Changes (42 changes)

**GET /api/v2/audits/query/{transactionId}/results** (1 change)

* Response 302 was added

**/api/v2/routing/directroutingbackup/settings/me** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/routing/users/{userId}/directroutingbackup/settings** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**ReportingTurnAction** (1 change)

* Enum value SetWrapupCodeAction was added to property actionType

**AuditQueryExecutionLargeResultsResponse** (1 change)

* Model was added

**CreateOutboundMessagingConversationRequest** (1 change)

* Optional property useUserFromAddress was added

**EventMessage** (4 changes)

* Enum value ANOTHER_CAMPAIGN_STARTING was added to property code
* Enum value QUEUE_NOT_FOUND was added to property code
* Enum value SMS_CONTENT_TEMPLATE_NOT_FOUND was added to property code
* Enum value VERSION_CONFLICT was added to property code

**AgentDirectRoutingBackupSettings** (1 change)

* Model was added

**VoicemailMessage** (1 change)

* Optional property transcription was added

**IdentityResolutionConfig** (1 change)

* Model was added

**TimeOffPlan** (2 changes)

* Enum value CheckActivityCodes was added to property autoApprovalRule
* Enum value CheckLimitsAndActivityCodes was added to property autoApprovalRule

**CreateTimeOffPlanRequest** (2 changes)

* Enum value CheckActivityCodes was added to property autoApprovalRule
* Enum value CheckLimitsAndActivityCodes was added to property autoApprovalRule

**UpdateTimeOffPlanRequest** (2 changes)

* Enum value CheckActivityCodes was added to property autoApprovalRule
* Enum value CheckLimitsAndActivityCodes was added to property autoApprovalRule

**TimeOffRequestResponse** (1 change)

* Enum value OverlapsRestrictedActivityCode was added to property substatus

**TimeOffRequest** (1 change)

* Enum value OverlapsRestrictedActivityCode was added to property substatus

**TimeOffRequestQueryBody** (1 change)

* Enum value OverlapsRestrictedActivityCode was added to property substatuses

**ActivityCodesReference** (1 change)

* Model was added

**BuTimeOffPlanResponse** (2 changes)

* Enum value CheckActivityCodes was added to property autoApprovalRule
* Enum value CheckLimitsAndActivityCodes was added to property autoApprovalRule

**BuCreateTimeOffPlanRequest** (2 changes)

* Enum value CheckActivityCodes was added to property autoApprovalRule
* Enum value CheckLimitsAndActivityCodes was added to property autoApprovalRule

**BuUpdateTimeOffPlanRequest** (2 changes)

* Enum value CheckActivityCodes was added to property autoApprovalRule
* Enum value CheckLimitsAndActivityCodes was added to property autoApprovalRule

**JourneyViewListing** (7 changes)

* Optional property pageSize was added
* Optional property pageNumber was added
* Optional property lastUri was added
* Optional property firstUri was added
* Optional property nextUri was added
* Optional property previousUri was added
* Optional property pageCount was added


# Point Changes (1 change)

**PATCH /api/v2/recordings/screensessions/{recordingSessionId}** (1 change)

* Description was changed
