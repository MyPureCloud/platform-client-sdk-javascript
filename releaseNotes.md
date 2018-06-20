Platform API version: 2373


# Major Changes (25 changes)

**PUT /api/v2/architect/schedulegroups/{scheduleGroupId}** (1 change)

* Parameter body was made required

**PUT /api/v2/architect/emergencygroups/{emergencyGroupId}** (1 change)

* Parameter body was made required

**PUT /api/v2/architect/prompts/{promptId}** (1 change)

* Parameter body was made required

**GET /api/v2/workforcemanagement/managementunits** (2 changes)

* Parameter feature was added
* Parameter divisionId was added

**POST /api/v2/flows/{flowId}/versions** (1 change)

* Parameter body was made required

**PUT /api/v2/architect/schedules/{scheduleId}** (1 change)

* Parameter body was made required

**POST /api/v2/architect/schedules** (1 change)

* Parameter body was made required

**PUT /api/v2/flows/{flowId}** (1 change)

* Parameter body was made required

**POST /api/v2/architect/prompts/{promptId}/resources** (1 change)

* Parameter body was made required

**PUT /api/v2/architect/ivrs/{ivrId}** (1 change)

* Parameter body was made required

**POST /api/v2/architect/schedulegroups** (1 change)

* Parameter body was made required

**POST /api/v2/architect/prompts** (1 change)

* Parameter body was made required

**PUT /api/v2/architect/systemprompts/{promptId}/resources/{languageCode}** (1 change)

* Parameter body was made required

**POST /api/v2/architect/emergencygroups** (1 change)

* Parameter body was made required

**POST /api/v2/architect/systemprompts/{promptId}/resources** (1 change)

* Parameter body was made required

**POST /api/v2/flows** (1 change)

* Parameter body was made required

**POST /api/v2/architect/ivrs** (1 change)

* Parameter body was made required

**PUT /api/v2/architect/prompts/{promptId}/resources/{languageCode}** (1 change)

* Parameter body was made required

**Queue** (1 change)

* Property division was changed from UriReference to Division

**CampaignDivisionView** (1 change)

* Property division was changed from UriReference to Division

**CreateQueueRequest** (1 change)

* Property division was changed from UriReference to Division

**UserQueue** (1 change)

* Property division was changed from UriReference to Division

**Flow** (1 change)

* Property division was changed from UriReference to Division

**FreeSeatingConfiguration** (1 change)

* Property enabled was removed


# Minor Changes (25 changes)

**/api/v2/routing/queues/search** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media/{mediaId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media** (2 changes)

* Path was added
* Operation POST was added

**Division** (1 change)

* Model was added

**MessageDetails** (1 change)

* Optional property stickers was added

**MessageMedia** (3 changes)

* Optional property contentLengthBytes was added
* Optional property name was added
* Optional property id was added

**MessageSticker** (1 change)

* Model was added

**SurveyForm** (2 changes)

* Optional property headerImageId was added
* Optional property headerImageUrl was added

**ManagementUnit** (1 change)

* Optional property division was added

**FreeSeatingConfiguration** (1 change)

* Optional property freeSeatingState was added

**FlowDivisionView** (1 change)

* Optional property division was added

**OutboundSettings** (1 change)

* Optional property maxConfigurableCallsPerAgent was added

**EventMessage** (3 changes)

* Enum value CONTACT_COLUMNS_LIMIT_EXCEEDED was added to property code
* Enum value CONTACT_COLUMN_LENGTH_LIMIT_EXCEEDED was added to property code
* Enum value CONTACT_DATUM_LENGTH_LIMIT_EXCEEDED was added to property code

**MessageMediaData** (1 change)

* Model was added

**MessageData** (1 change)

* Optional property stickers was added

**AdditionalMessage** (2 changes)

* Optional property mediaIds was added
* Optional property stickerIds was added


# Point Changes (0 changes)
