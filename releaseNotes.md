Platform API version: 1924


# Major Changes (3 changes)

**/api/v2/webchat/settings** (1 change)

* Operation POST was removed

**PublishForm** (2 changes)

* Property contextId was removed
* Required property id was added


# Minor Changes (31 changes)

**/api/v2/users/{userId}/password** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/flows/datatables** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/flows/datatables/{datatableId}/rows** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**POST /api/v2/webchat/deployments** (1 change)

* Response 409 was added

**/api/v2/flows/datatables/{datatableId}/rows/{rowId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/flows/datatables/{datatableId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/users/me/password** (2 changes)

* Path was added
* Operation POST was added

**JsonSchemaDocument** (1 change)

* Optional property additionalProperties was added

**ExternalOrganization** (1 change)

* Optional property externalSystemUrl was added

**PolicyActions** (1 change)

* Optional property assignSurveys was added

**SurveyAssignment** (1 change)

* Model was added

**SurveyFormUriReference** (1 change)

* Model was added

**EventMessage** (1 change)

* Enum value IMPORT_MISSING_CUSTOM_ID was added to property code

**ChangePasswordRequest** (1 change)

* Model was added

**Metabase** (1 change)

* Optional property type was added

**CallHistoryConversation** (3 changes)

* Optional property wasCallback was added
* Optional property hadScreenShare was added
* Optional property hadCobrowse was added

**ChangeMyPasswordRequest** (1 change)

* Model was added


# Point Changes (2 changes)

**POST /api/v2/quality/publishedforms/evaluations** (1 change)

* Description was changed for parameter body

**POST /api/v2/quality/publishedforms** (1 change)

* Description was changed for parameter body
