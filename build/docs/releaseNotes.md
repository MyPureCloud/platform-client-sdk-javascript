Platform API version: 7067


# Major Changes (19 changes)

**/api/v2/journey/customers/{customerIdType}/{customerId}/sessions** (1 change)

* Path /api/v2/journey/customers/{customerIdType}/{customerId}/sessions was removed

**POST /api/v2/contentmanagement/auditquery** (1 change)

* Has been deprecated

**GET /api/v2/contentmanagement/documents/{documentId}/audits** (1 change)

* Has been deprecated

**POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/replace** (1 change)

* Has been deprecated

**POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult** (1 change)

* Has been deprecated

**POST /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/replace** (1 change)

* Has been deprecated

**POST /api/v2/conversations/chats/{conversationId}/participants/{participantId}/replace** (1 change)

* Has been deprecated

**POST /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/replace** (1 change)

* Has been deprecated

**POST /api/v2/conversations/emails/{conversationId}/participants/{participantId}/replace** (1 change)

* Has been deprecated

**POST /api/v2/conversations/messages/{conversationId}/participants/{participantId}/replace** (1 change)

* Has been deprecated

**POST /api/v2/conversations/{conversationId}/participants/{participantId}/replace** (1 change)

* Has been deprecated

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents** (1 change)

* Parameter externalIds was added

**GET /api/v2/taskmanagement/workitems/{workitemId}** (1 change)

* Parameter expands was added

**CategoryRequest** (1 change)

* Model CategoryRequest was removed

**GuestCategoryResponse** (1 change)

* Model GuestCategoryResponse was removed

**BuForecastModification** (1 change)

* Model BuForecastModification was removed

**Limit** (1 change)

* Property value was changed from number to integer

**GuestCategoryResponseListing** (1 change)

* Property entities was changed from GuestCategoryResponse[] to GuestResponseCategory[]

**BuShortTermForecast** (1 change)

* Property modifications was changed from BuForecastModification[] to BuForecastModificationResponse[]


# Minor Changes (73 changes)

**/api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult/agent** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult/queue** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult/external** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/messaging/integrations/instagram/{integrationId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/conversations/messaging/integrations/instagram** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/conversations/{conversationId}/participants/{participantId}/replace/agent** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/{conversationId}/participants/{participantId}/replace/queue** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/{conversationId}/participants/{participantId}/replace/external** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/users/presences/purecloud/bulk** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/presences/{sourceId}/bulk** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/unifiedcommunications/{ucIntegrationId}/thirdpartypresences** (2 changes)

* Path was added
* Operation PUT was added

**ViewFilter** (2 changes)

* Optional property assistantIds was added
* Optional property knowledgeBaseIds was added

**Queue** (1 change)

* Optional property conditionalGroupRouting was added

**QueueMessagingAddresses** (1 change)

* Optional property whatsAppRecipient was added

**ErrorBody** (1 change)

* Optional property limit was added

**Limit** (3 changes)

* key is no longer readonly
* Optional property namespace was added
* value is no longer readonly

**CallMediaParticipant** (1 change)

* Optional property disposition was added

**ConsultTransfer** (1 change)

* Optional property consultingUserId was added

**ConsultTransferToAgent** (1 change)

* Model was added

**ConsultTransferToQueue** (1 change)

* Model was added

**ConsultTransferToExternal** (1 change)

* Model was added

**ConsultTransferUpdate** (1 change)

* Optional property consultingUserId was added

**SendAgentlessOutboundMessageResponse** (1 change)

* Optional property message was added

**InstagramIntegration** (1 change)

* Model was added

**InstagramIntegrationUpdateRequest** (1 change)

* Model was added

**InstagramIntegrationEntityListing** (1 change)

* Model was added

**InstagramIntegrationRequest** (1 change)

* Model was added

**TransferToAgentRequest** (1 change)

* Model was added

**TransferToQueueRequest** (1 change)

* Model was added

**TransferToExternalRequest** (1 change)

* Model was added

**CategoryResponse** (6 changes)

* Optional property externalId was added
* dateCreated is no longer readonly
* dateModified is no longer readonly
* parentCategory is no longer readonly
* documentCount is no longer readonly
* knowledgeBase is no longer readonly

**CategoryCreateRequest** (1 change)

* Model was added

**CategoryUpdateRequest** (1 change)

* Model was added

**LabelResponse** (1 change)

* Optional property externalId was added

**LabelUpdateRequest** (1 change)

* Optional property externalId was added

**LabelCreateRequest** (1 change)

* Optional property externalId was added

**DocumentBodyListBlockProperties** (2 changes)

* Enum value None was added to property unorderedType
* Enum value None was added to property orderedType

**KnowledgeDocumentResponse** (1 change)

* Optional property externalId was added

**KnowledgeDocumentReq** (1 change)

* Optional property externalId was added

**DocumentQueryPredicate** (2 changes)

* Enum value visible was added to property fields
* Enum value state was added to property fields

**KnowledgeImportJobError** (1 change)

* Optional property limit was added

**GuestResponseCategory** (1 change)

* Model was added

**UcUserPresence** (1 change)

* Model was added

**QueueRequest** (1 change)

* Optional property conditionalGroupRouting was added

**UserQueue** (1 change)

* Optional property conditionalGroupRouting was added

**CreateQueueRequest** (1 change)

* Optional property conditionalGroupRouting was added

**GeneralProgramJobRequest** (1 change)

* Enum value ReplaceMerge was added to property mode

**UCThirdPartyPresence** (1 change)

* Model was added

**BuForecastModificationResponse** (1 change)

* Model was added


# Point Changes (3 changes)

**POST /api/v2/contentmanagement/auditquery** (1 change)

* Description was changed

**GET /api/v2/contentmanagement/documents/{documentId}/audits** (1 change)

* Description was changed

**GET /api/v2/telephony/providers/edges/phones** (1 change)

* Description was changed for parameter name
