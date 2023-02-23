Platform API version: 6640


# Major Changes (6 changes)

**GET /api/v2/knowledge/guest/sessions/{sessionId}/documents** (1 change)

* Parameter includeSubcategories was removed

**GET /api/v2/quality/evaluations/query** (1 change)

* Parameter assigneeUserId was added

**GET /api/v2/telephony/providers/edges** (1 change)

* Parameter showCloudMedia was added

**ApprovalNamespace** (1 change)

* Enum value contacts was removed from property namespace

**LimitChangeRequestDetails** (1 change)

* Enum value contacts was removed from property namespace

**StatusChange** (1 change)

* Enum value contacts was removed from property namespace


# Minor Changes (45 changes)

**POST /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages** (1 change)

* Response 409 was added

**POST /api/v2/conversations/messages/agentless** (1 change)

* Response 409 was added

**/api/v2/journey/outcomes/predictors/{predictorId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/journey/outcomes/predictors** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**Station** (1 change)

* Optional property webRtcRequireMediaHelper was added

**AuditLogMessage** (2 changes)

* Enum value RestoreAll was added to property action
* Enum value RestoreDeleted was added to property action

**InitiatingAction** (2 changes)

* Enum value RestoreAll was added to property actionContext
* Enum value RestoreDeleted was added to property actionContext

**AuditQueryEntity** (2 changes)

* Enum value RestoreAll was added to property actions
* Enum value RestoreDeleted was added to property actions

**InboundRoute** (1 change)

* Optional property allowMultipleActions was added

**Conversation** (1 change)

* Optional property recentTransfers was added

**Evaluation** (2 changes)

* Optional property assignee was added
* Optional property evaluationSource was added

**EvaluationScoringSet** (1 change)

* Optional property privateComments was added

**EvaluationSource** (1 change)

* Model was added

**TransferDestination** (1 change)

* Model was added

**TransferInitiator** (1 change)

* Model was added

**TransferResponse** (1 change)

* Model was added

**CallConversation** (1 change)

* Optional property recentTransfers was added

**TransferRequest** (1 change)

* Optional property transferType was added

**CallbackConversation** (1 change)

* Optional property recentTransfers was added

**ChatConversation** (1 change)

* Optional property recentTransfers was added

**CobrowseConversation** (1 change)

* Optional property recentTransfers was added

**EmailMessage** (2 changes)

* Enum value Edited was added to property state
* Optional property draftType was added

**EmailConversation** (1 change)

* Optional property recentTransfers was added

**MessageConversation** (1 change)

* Optional property recentTransfers was added

**DialerAction** (1 change)

* Enum value APPEND_CUSTOM_ENTRY_TO_DNC_LIST was added to property actionTypeName

**OutcomePredictor** (1 change)

* Model was added

**OutcomeRef** (1 change)

* Model was added

**OutcomePredictorRequest** (1 change)

* Model was added

**OutcomeRefRequest** (1 change)

* Model was added

**OutcomePredictorListing** (1 change)

* Model was added

**EvaluationResponse** (2 changes)

* Optional property assignee was added
* Optional property evaluationSource was added

**OrphanRecording** (3 changes)

* Enum value ap-east-1 was added to property region
* Enum value ap-southeast-3 was added to property region
* Enum value eu-west-3 was added to property region

**Check** (1 change)

* Enum value SalesAmountValue was added to property type


# Point Changes (4 changes)

**POST /api/v2/conversations/{conversationId}/cobrowse** (1 change)

* Summary was changed

**GET /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}** (1 change)

* Description was changed for parameter expand

**GET /api/v2/quality/evaluations/query** (1 change)

* Description was changed

**POST /api/v2/recording/jobs** (1 change)

* Description was changed
