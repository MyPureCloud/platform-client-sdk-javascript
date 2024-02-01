Platform API version: 7719




# Major Changes (64 changes)

**/api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}** (1 change)

* Path /api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId} was removed

**/api/v2/journey/sessions/{sessionId}/segments** (1 change)

* Path /api/v2/journey/sessions/{sessionId}/segments was removed

**POST /api/v2/conversations/messaging/integrations/line** (1 change)

* Has been deprecated

**PUT /api/v2/identityproviders/adfs** (1 change)

* Response 200 type was changed from OAuthProvider to IdentityProvider

**PUT /api/v2/identityproviders/cic** (1 change)

* Response 200 type was changed from OAuthProvider to IdentityProvider

**PUT /api/v2/identityproviders/gsuite** (1 change)

* Response 200 type was changed from OAuthProvider to IdentityProvider

**PUT /api/v2/identityproviders/generic** (1 change)

* Response 200 type was changed from OAuthProvider to IdentityProvider

**GET /api/v2/identityproviders** (1 change)

* Response 200 type was changed from OAuthProviderEntityListing to IdentityProviderEntityListing

**PUT /api/v2/identityproviders/okta** (1 change)

* Response 200 type was changed from OAuthProvider to IdentityProvider

**PUT /api/v2/identityproviders/onelogin** (1 change)

* Response 200 type was changed from OAuthProvider to IdentityProvider

**PUT /api/v2/identityproviders/ping** (1 change)

* Response 200 type was changed from OAuthProvider to IdentityProvider

**PUT /api/v2/identityproviders/purecloud** (1 change)

* Response 200 type was changed from OAuthProvider to IdentityProvider

**PUT /api/v2/identityproviders/pureengage** (1 change)

* Response 200 type was changed from OAuthProvider to IdentityProvider

**PUT /api/v2/identityproviders/salesforce** (1 change)

* Response 200 type was changed from OAuthProvider to IdentityProvider

**GET /api/v2/presencedefinitions/{presenceId}** (1 change)

* Has been deprecated

**PUT /api/v2/presencedefinitions/{presenceId}** (1 change)

* Has been deprecated

**DELETE /api/v2/presencedefinitions/{presenceId}** (1 change)

* Has been deprecated

**GET /api/v2/presencedefinitions** (1 change)

* Has been deprecated

**POST /api/v2/presencedefinitions** (1 change)

* Has been deprecated

**GET /api/v2/architect/prompts/{promptId}** (3 changes)

* Parameter includeMediaUris was added
* Parameter includeResources was added
* Parameter language was added

**GET /api/v2/architect/prompts** (3 changes)

* Parameter includeMediaUris was added
* Parameter includeResources was added
* Parameter language was added

**GET /api/v2/architect/systemprompts/{promptId}** (3 changes)

* Parameter includeMediaUris was added
* Parameter includeResources was added
* Parameter language was added

**GET /api/v2/architect/systemprompts** (3 changes)

* Parameter includeMediaUris was added
* Parameter includeResources was added
* Parameter language was added

**GET /api/v2/chats/rooms/{roomJid}/messages** (6 changes)

* Parameter pageSize was removed
* Parameter pageNumber was removed
* Parameter sortBy was removed
* Parameter expand was removed
* Parameter nextPage was removed
* Parameter previousPage was removed

**GET /api/v2/chats/users/{userId}/messages** (6 changes)

* Parameter pageSize was removed
* Parameter pageNumber was removed
* Parameter sortBy was removed
* Parameter expand was removed
* Parameter nextPage was removed
* Parameter previousPage was removed

**GET /api/v2/chats/threads/{threadId}/messages** (6 changes)

* Parameter pageSize was removed
* Parameter pageNumber was removed
* Parameter sortBy was removed
* Parameter expand was removed
* Parameter nextPage was removed
* Parameter previousPage was removed

**OAuthProvider** (1 change)

* Model OAuthProvider was removed

**OAuthProviderEntityListing** (1 change)

* Model OAuthProviderEntityListing was removed

**SegmentAssignment** (1 change)

* Model SegmentAssignment was removed

**SegmentAssignmentListing** (1 change)

* Model SegmentAssignmentListing was removed

**SegmentAssignmentSegment** (1 change)

* Model SegmentAssignmentSegment was removed

**SegmentAssignmentSession** (1 change)

* Model SegmentAssignmentSession was removed

**ConversationAggregationQuery** (2 changes)

* Enum value tCallback was removed from property metrics
* Enum value tCallbackComplete was removed from property metrics

**ConversationAggregationView** (2 changes)

* Enum value tCallback was removed from property target
* Enum value tCallbackComplete was removed from property target

**ConversationDetailQueryPredicate** (2 changes)

* Enum value tCallback was removed from property metric
* Enum value tCallbackComplete was removed from property metric

**GetAlertQuery** (1 change)

* Property activeStatus was removed

**ConversationAsyncAggregationQuery** (2 changes)

* Enum value tCallback was removed from property metrics
* Enum value tCallbackComplete was removed from property metrics


# Minor Changes (168 changes)

**/api/v2/screenrecording/token** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/{conversationId}/summaries/{summaryId}/feedback** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/outbound/contactlisttemplates/bulk/retrieve** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/outbound/filespecificationtemplates/bulk** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/outbound/filespecificationtemplates** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/outbound/filespecificationtemplates/{fileSpecificationTemplateId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/identityproviders** (1 change)

* Operation post was added. Summary: Create Identity Provider

**/api/v2/identityproviders/{providerId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**GET /api/v2/architect/prompts/{promptId}** (1 change)

* Response 206 was added

**GET /api/v2/architect/prompts** (1 change)

* Response 206 was added

**GET /api/v2/architect/systemprompts/{promptId}** (1 change)

* Response 206 was added

**GET /api/v2/architect/systemprompts** (1 change)

* Response 206 was added

**/api/v2/integrations/actions/{actionId}/draft/function** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/integrations/actions/{actionId}/draft/function/upload** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/integrations/actions/{actionId}/function** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/actions/functions/runtimes** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/operations** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/operations/users/query** (2 changes)

* Path was added
* Operation GET was added

**EmailBeginTransmittingEvent** (1 change)

* Model was added

**EmailCommunicationAnsweredEvent** (1 change)

* Model was added

**EmailCommunicationDispositionAppliedEvent** (1 change)

* Model was added

**EmailCommunicationEndedEvent** (1 change)

* Model was added

**EmailCommunicationRepliedEvent** (1 change)

* Model was added

**EmailEndTransferEvent** (1 change)

* Model was added

**EmailExternalEstablishedEvent** (1 change)

* Model was added

**EmailFlowEstablishedEvent** (1 change)

* Model was added

**EmailHoldUpdatedEvent** (1 change)

* Model was added

**EmailInitialConfiguration** (1 change)

* Model was added

**EmailProgressTransferEvent** (1 change)

* Model was added

**EmailRoutingEstablishedEvent** (1 change)

* Model was added

**EmailRoutingTransferEvent** (1 change)

* Model was added

**EmailUserEstablishedEvent** (1 change)

* Model was added

**EmailUserTransferEvent** (1 change)

* Model was added

**Group** (1 change)

* Optional property rolesEnabled was added

**UserPresence** (1 change)

* Optional property sourceId was added

**WorkPlanBidRanks** (1 change)

* Model was added

**ReportingTurnAction** (4 changes)

* Enum value ClearUtilizationLabelAction was added to property actionType
* Enum value FindGrammarByIdAction was added to property actionType
* Enum value FindUtilizationLabelAction was added to property actionType
* Enum value SetUtilizationLabelAction was added to property actionType

**ScreenRecordingUserAuthenticatedInfo** (1 change)

* Model was added

**FeedbackAddRequest** (1 change)

* Model was added

**ContactListTemplateBulkRetrieveBody** (1 change)

* Model was added

**Column** (1 change)

* Model was added

**FileSpecificationTemplate** (1 change)

* Model was added

**PreprocessingRule** (1 change)

* Model was added

**FileSpecificationTemplateEntityListing** (1 change)

* Model was added

**GroupUpdate** (1 change)

* Optional property rolesEnabled was added

**GroupCreate** (1 change)

* Optional property rolesEnabled was added

**IdentityProvider** (1 change)

* Model was added

**IdentityProviderEntityListing** (1 change)

* Model was added

**CustomProvider** (1 change)

* Model was added

**TrustGroup** (1 change)

* Optional property rolesEnabled was added

**UcUserPresence** (1 change)

* Optional property sourceId was added

**MutableUserPresence** (1 change)

* Optional property sourceId was added

**GetAlertQuery** (1 change)

* Optional property alertStatus was added

**PhoneBaseEntityListing** (1 change)

* Optional property totalNumberOfEntities was added

**PhoneMetaBaseEntityListing** (1 change)

* Optional property totalNumberOfEntities was added

**PhoneStatus** (1 change)

* selfUri is no longer readonly

**TrunkMetabaseEntityListing** (1 change)

* Optional property totalNumberOfEntities was added

**MetadataProperty** (1 change)

* Optional property displayname was added

**AuthenticationSettings** (1 change)

* Optional property allowSessionUpgrade was added

**TaskManagementAggregationQuery** (24 changes)

* Enum value nWorkitemsAcdCancelled was added to property metrics
* Enum value nWorkitemsAcdExpired was added to property metrics
* Enum value nWorkitemsAcdStarted was added to property metrics
* Enum value nWorkitemsAgentTransferred was added to property metrics
* Enum value nWorkitemsDeclined was added to property metrics
* Enum value nWorkitemsDisconnected was added to property metrics
* Enum value nWorkitemsOverSla was added to property metrics
* Enum value nWorkitemsQueueTransferred was added to property metrics
* Enum value nWorkitemsTerminated was added to property metrics
* Enum value nWorkitemsTimedout was added to property metrics
* Enum value nWorkitemsTransferred was added to property metrics
* Enum value nWorkitemsWrapupAdded was added to property metrics
* Enum value nWorkitemsWrapupRemoved was added to property metrics
* Enum value tWorkitemsAlert was added to property metrics
* Enum value tWorkitemsAnswered was added to property metrics
* Enum value tWorkitemsDirectAnswered was added to property metrics
* Enum value tWorkitemsFocus was added to property metrics
* Enum value tWorkitemsFocusComplete was added to property metrics
* Enum value tWorkitemsHandled was added to property metrics
* Enum value tWorkitemsHeld was added to property metrics
* Enum value tWorkitemsHeldComplete was added to property metrics
* Enum value tWorkitemsNotResponding was added to property metrics
* Enum value tWorkitemsParked was added to property metrics
* Enum value tWorkitemsQueueAnswered was added to property metrics

**TaskManagementAggregationView** (24 changes)

* Enum value nWorkitemsAcdCancelled was added to property target
* Enum value nWorkitemsAcdExpired was added to property target
* Enum value nWorkitemsAcdStarted was added to property target
* Enum value nWorkitemsAgentTransferred was added to property target
* Enum value nWorkitemsDeclined was added to property target
* Enum value nWorkitemsDisconnected was added to property target
* Enum value nWorkitemsOverSla was added to property target
* Enum value nWorkitemsQueueTransferred was added to property target
* Enum value nWorkitemsTerminated was added to property target
* Enum value nWorkitemsTimedout was added to property target
* Enum value nWorkitemsTransferred was added to property target
* Enum value nWorkitemsWrapupAdded was added to property target
* Enum value nWorkitemsWrapupRemoved was added to property target
* Enum value tWorkitemsAlert was added to property target
* Enum value tWorkitemsAnswered was added to property target
* Enum value tWorkitemsDirectAnswered was added to property target
* Enum value tWorkitemsFocus was added to property target
* Enum value tWorkitemsFocusComplete was added to property target
* Enum value tWorkitemsHandled was added to property target
* Enum value tWorkitemsHeld was added to property target
* Enum value tWorkitemsHeldComplete was added to property target
* Enum value tWorkitemsNotResponding was added to property target
* Enum value tWorkitemsParked was added to property target
* Enum value tWorkitemsQueueAnswered was added to property target

**TaskManagementAsyncAggregationQuery** (24 changes)

* Enum value nWorkitemsAcdCancelled was added to property metrics
* Enum value nWorkitemsAcdExpired was added to property metrics
* Enum value nWorkitemsAcdStarted was added to property metrics
* Enum value nWorkitemsAgentTransferred was added to property metrics
* Enum value nWorkitemsDeclined was added to property metrics
* Enum value nWorkitemsDisconnected was added to property metrics
* Enum value nWorkitemsOverSla was added to property metrics
* Enum value nWorkitemsQueueTransferred was added to property metrics
* Enum value nWorkitemsTerminated was added to property metrics
* Enum value nWorkitemsTimedout was added to property metrics
* Enum value nWorkitemsTransferred was added to property metrics
* Enum value nWorkitemsWrapupAdded was added to property metrics
* Enum value nWorkitemsWrapupRemoved was added to property metrics
* Enum value tWorkitemsAlert was added to property metrics
* Enum value tWorkitemsAnswered was added to property metrics
* Enum value tWorkitemsDirectAnswered was added to property metrics
* Enum value tWorkitemsFocus was added to property metrics
* Enum value tWorkitemsFocusComplete was added to property metrics
* Enum value tWorkitemsHandled was added to property metrics
* Enum value tWorkitemsHeld was added to property metrics
* Enum value tWorkitemsHeldComplete was added to property metrics
* Enum value tWorkitemsNotResponding was added to property metrics
* Enum value tWorkitemsParked was added to property metrics
* Enum value tWorkitemsQueueAnswered was added to property metrics

**Function** (1 change)

* Model was added

**FunctionConfig** (1 change)

* Model was added

**FunctionZipConfig** (1 change)

* Model was added

**FunctionUploadResponse** (1 change)

* Model was added

**FunctionUploadRequest** (1 change)

* Model was added

**FunctionRuntime** (1 change)

* Model was added

**OperationListing** (1 change)

* Model was added

**OperationResponse** (1 change)

* Model was added

**OperationCreatorUserResponse** (1 change)

* Model was added

**Workitem** (1 change)

* Optional property utilizationLabel was added

**WorkitemUtilizationLabelReference** (1 change)

* Model was added

**WorkitemCreate** (1 change)

* Optional property utilizationLabelId was added

**WorkitemUpdate** (1 change)

* Optional property utilizationLabelId was added

**WorkitemVersion** (1 change)

* Optional property utilizationLabel was added

**WorkitemDelta** (1 change)

* Optional property utilizationLabelId was added


# Point Changes (7 changes)

**POST /api/v2/conversations/messaging/integrations/line** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/presencedefinitions/{presenceId}** (1 change)

* Summary was changed

**PUT /api/v2/presencedefinitions/{presenceId}** (1 change)

* Summary was changed

**DELETE /api/v2/presencedefinitions/{presenceId}** (1 change)

* Summary was changed

**GET /api/v2/presencedefinitions** (1 change)

* Summary was changed

**POST /api/v2/presencedefinitions** (1 change)

* Summary was changed
