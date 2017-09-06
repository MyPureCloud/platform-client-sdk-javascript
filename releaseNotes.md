Platform API version: 1464


# Major Changes (6 changes)

**GET /api/v2/workforcemanagement/managementunits** (2 changes)

* Parameter selector was removed
* Response 200 type was changed from ManagementUnit[] to ManagementUnitListing

**GET /api/v2/architect/ivrs** (1 change)

* Parameter name was added

**GET /api/v2/architect/schedules** (1 change)

* Parameter name was added

**GET /api/v2/architect/schedulegroups** (1 change)

* Parameter name was added

**ManagementUnit** (1 change)

* Property timezone was removed


# Minor Changes (71 changes)

**/api/v2/outbound/contactlists** (1 change)

* Operation delete was added. Summary: Delete multiple contact lists.

**/api/v2/integrations/actions/{actionId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/integrations/actions/{actionId}/test** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/integrations/actions/{actionId}/schemas/{fileName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/actions/{actionId}/templates/{fileName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/actions/{actionId}/execute** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/integrations/actions** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/conversations/{conversationId}/recordingmetadata** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/{conversationId}/recordingmetadata/{recordingId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/actions/categories** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/actions/{actionId}/draft** (5 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/integrations/actions/{actionId}/draft/schemas/{fileName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/actions/{actionId}/draft/templates/{fileName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/actions/{actionId}/draft/publish** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/integrations/actions/{actionId}/draft/validation** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/actions/{actionId}/draft/test** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/integrations/actions/drafts** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/alerting/alerts/active** (2 changes)

* Path was added
* Operation GET was added

**Flow** (1 change)

* Enum value INBOUNDSHORTMESSAGE was added to property type

**Action** (1 change)

* Model was added

**ActionConfig** (1 change)

* Model was added

**ActionContract** (1 change)

* Model was added

**ActionInput** (1 change)

* Model was added

**ActionOutput** (1 change)

* Model was added

**RequestConfig** (1 change)

* Model was added

**ResponseConfig** (1 change)

* Model was added

**TestExecutionOperationResult** (1 change)

* Model was added

**TestExecutionResult** (1 change)

* Model was added

**UpdateActionInput** (1 change)

* Model was added

**ActionContractInput** (1 change)

* Model was added

**PostActionInput** (1 change)

* Model was added

**PostInputContract** (1 change)

* Model was added

**PostOutputContract** (1 change)

* Model was added

**ActionEntityListing** (1 change)

* Model was added

**InteractionStatsAlert** (1 change)

* Enum value callback was added to property mediaType

**Condition** (1 change)

* Enum value IN was added to property operator

**Dependency** (1 change)

* Enum value INBOUNDSHORTMESSAGE was added to property type

**ManagementUnit** (1 change)

* Optional property timeZone was added

**ManagementUnitListing** (1 change)

* Model was added

**InteractionStatsRule** (1 change)

* Enum value callback was added to property mediaType

**DependencyObject** (1 change)

* Enum value INBOUNDSHORTMESSAGE was added to property type

**Category** (1 change)

* Model was added

**CategoryEntityListing** (1 change)

* Model was added

**PublishDraftInput** (1 change)

* Model was added

**UpdateDraftInput** (1 change)

* Model was added

**DraftValidationResult** (1 change)

* Model was added

**ActiveAlertCount** (1 change)

* Model was added


# Point Changes (5 changes)

**GET /api/v2/architect/dependencytracking/consumedresources** (1 change)

* Description was changed for parameter objectType

**GET /api/v2/architect/dependencytracking/consumingresources** (2 changes)

* Description was changed for parameter objectType
* Description was changed for parameter resourceType

**POST /api/v2/conversations/calls/{conversationId}** (1 change)

* Summary was changed

**GET /api/v2/flows/{flowId}/history/{historyId}** (1 change)

* Description was changed for parameter action
