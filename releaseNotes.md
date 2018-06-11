Platform API version: 2334


# Major Changes (25 changes)

**PUT /api/v2/externalcontacts/conversations/{conversationId}** (1 change)

* Parameter body was made required

**POST /api/v2/externalcontacts/relationships** (1 change)

* Parameter body was made required

**GET /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Response 200 type was changed from Wrapup to AssignedWrapupCode

**PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}** (1 change)

* Parameter body was made required

**GET /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Response 200 type was changed from Wrapup to AssignedWrapupCode

**GET /api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Response 200 type was changed from Wrapup to AssignedWrapupCode

**GET /api/v2/flows** (1 change)

* Parameter divisionId was added

**GET /api/v2/conversations/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Response 200 type was changed from WrapupCode to AssignedWrapupCode

**POST /api/v2/externalcontacts/contacts** (1 change)

* Parameter body was made required

**POST /api/v2/externalcontacts/contacts/{contactId}/notes** (1 change)

* Parameter body was made required

**PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}** (1 change)

* Parameter body was made required

**POST /api/v2/externalcontacts/organizations** (1 change)

* Parameter body was made required

**GET /api/v2/flows/divisionviews** (1 change)

* Parameter divisionId was added

**GET /api/v2/routing/queues** (1 change)

* Parameter divisionId was added

**GET /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Response 200 type was changed from Wrapup to AssignedWrapupCode

**GET /api/v2/conversations/messages/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Response 200 type was changed from Wrapup to AssignedWrapupCode

**POST /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes** (1 change)

* Parameter body was made required

**GET /api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Response 200 type was changed from Wrapup to AssignedWrapupCode

**GET /api/v2/users/{userId}/queues** (1 change)

* Parameter divisionId was added

**PATCH /api/v2/users/{userId}/queues** (1 change)

* Parameter divisionId was added

**PUT /api/v2/externalcontacts/contacts/{contactId}** (1 change)

* Parameter body was made required

**PUT /api/v2/externalcontacts/relationships/{relationshipId}** (1 change)

* Parameter body was made required

**PUT /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}** (1 change)

* Parameter body was made required

**AuthzDivision** (1 change)

* Model AuthzDivision was removed

**Flow** (1 change)

* Property division was changed from AuthzDivision to UriReference


# Minor Changes (7 changes)

**/api/v2/outbound/campaigns/divisionviews** (2 changes)

* Path was added
* Operation GET was added

**AssignedWrapupCode** (1 change)

* Model was added

**WebChatConfig** (1 change)

* Model was added

**WebChatDeployment** (1 change)

* Optional property webChatConfig was added

**CampaignDivisionView** (1 change)

* Model was added

**CampaignDivisionViewListing** (1 change)

* Model was added


# Point Changes (1 change)

**PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor/{trustorId}** (1 change)

* Summary was changed
