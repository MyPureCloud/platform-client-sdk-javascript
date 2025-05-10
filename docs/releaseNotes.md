Platform API version: 9215




# Major Changes (8 changes)

**GET /api/v2/chats/rooms/{roomJid}/participants** (1 change)

* Parameter notify was added

**GET /api/v2/routing/queues/{queueId}** (1 change)

* Parameter expand was added

**GET /api/v2/routing/queues** (1 change)

* Parameter expand was added

**GET /api/v2/routing/email/domains/{domainName}/routes/{routeId}** (1 change)

* Parameter expand was added

**GET /api/v2/routing/email/domains/{domainName}/routes** (1 change)

* Parameter expand was added

**GET /api/v2/routing/sms/phonenumbers** (1 change)

* Parameter expand was added

**GET /api/v2/architect/ivrs** (1 change)

* Parameter expand was added

**SpeechTextAnalyticsConversationSummary** (1 change)

* Property agentId was removed


# Minor Changes (176 changes)

**/api/v2/conversations/{conversationId}/summaries/{summaryId}/engagements** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/externalcontacts/settings** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/billing/contracts/{contractId}/billingperiods/{billingPeriodId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/billing/contracts/{contractId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/billing/contracts** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/billing/contracts/invoices/{invoiceId}/document** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/billing/contracts/invoices/{invoiceId}/lines** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/billing/contracts/invoices** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/businessrules/decisiontables/{tableId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/businessrules/decisiontables/{tableId}/execute** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/copy** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/execute** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/publish** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/sync** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/businessrules/decisiontables/{tableId}/versions** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/businessrules/decisiontables** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/businessrules/decisiontables/search** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/{rowId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/search** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/businessrules/schemas/coretypes/{coreTypeName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/businessrules/schemas/coretypes** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/businessrules/schemas/{schemaId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/businessrules/schemas** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**AnalyticsConversationWithoutAttributes** (1 change)

* Optional property originatingSocialMediaPublic was added

**AnalyticsConversation** (1 change)

* Optional property originatingSocialMediaPublic was added

**ReportingTurnAction** (5 changes)

* Enum value CallGuideAction was added to property actionType
* Enum value PromoteExternalContactAction was added to property actionType
* Enum value TransferUserAction was added to property actionType
* Enum value TransferGroupAction was added to property actionType
* Enum value TransferExternalAction was added to property actionType

**BotFlowSession** (6 changes)

* Enum value TransferToUser was added to property botResult
* Enum value TransferToGroup was added to property botResult
* Enum value TransferToNumber was added to property botResult
* Enum value TransferToUserVoicemail was added to property botResult
* Enum value TransferToGroupVoicemail was added to property botResult
* Enum value TransferToACDVoicemail was added to property botResult

**ViewFilter** (7 changes)

* Enum value TransferToUser was added to property botResultList
* Enum value TransferToGroup was added to property botResultList
* Enum value TransferToNumber was added to property botResultList
* Enum value TransferToUserVoicemail was added to property botResultList
* Enum value TransferToGroupVoicemail was added to property botResultList
* Enum value TransferToACDVoicemail was added to property botResultList
* Optional property socialRatings was added

**ChartColumn** (1 change)

* Model was added

**ReportingExportJobResponse** (1 change)

* Optional property chartColumns was added

**ReportingExportJobRequest** (1 change)

* Optional property chartColumns was added

**Limit** (1 change)

* Enum value guides was added to property namespace

**UserChatSettings** (1 change)

* Model was added

**ExternalOrganization** (2 changes)

* Optional property identifiers was added
* Optional property externalIds was added

**ContactImportJobResponse** (1 change)

* Optional property division was added

**ContactImportJobRequest** (1 change)

* Optional property division was added

**CsvJobRequest** (1 change)

* Optional property division was added

**Campaign** (1 change)

* Optional property diagnosticsSettings was added

**DiagnosticsSettings** (1 change)

* Optional property reportLowMaxCallsPerAgentAlert was added

**RestErrorDetail** (1 change)

* Optional property userParams was added

**ConversationEventPresence** (2 changes)

* Enum value AuthenticateFailure was added to property type
* Enum value AuthenticateCancel was added to property type

**WhatsAppCallingConfigurationResponse** (1 change)

* Model was added

**WhatsAppCallingConfigurationRequest** (1 change)

* Model was added

**EngagementRequest** (1 change)

* Model was added

**CampaignDiagnostics** (6 changes)

* Optional property idleAgents was added
* Optional property effectiveIdleAgents was added
* Optional property linesUtilization was added
* Optional property numberOfContactsCalled was added
* Optional property totalNumberOfContacts was added
* Optional property campaignErrors was added

**ContactBulkSearchParameters** (1 change)

* Optional property generateDownloadURI was added

**ContactBulkEditRequest** (1 change)

* Optional property generateDownloadURI was added

**ApprovalNamespace** (1 change)

* Enum value guides was added to property namespace

**LimitChangeRequestDetails** (1 change)

* Enum value guides was added to property namespace

**StatusChange** (1 change)

* Enum value guides was added to property namespace

**RecordingMetadata** (1 change)

* Optional property region was added

**UpdatedSettingsResponse** (1 change)

* Model was added

**SocialMediaAsyncAggregationQuery** (1 change)

* Enum value nSocialReviewRating was added to property metrics

**SocialMediaStatisticalSummary** (1 change)

* Optional property average was added

**SpeechTextAnalyticsConversationSummary** (2 changes)

* Enum value VirtualAgent was added to property summaryType
* Optional property sourceId was added

**Dependency** (1 change)

* Enum value DIVISION was added to property type

**DependencyObject** (1 change)

* Enum value DIVISION was added to property type

**WebMessagingButtonResponse** (1 change)

* Enum value DatePicker was added to property type

**WebMessagingContent** (2 changes)

* Enum value DatePicker was added to property contentType
* Optional property datePicker was added

**BillingCharge** (1 change)

* Model was added

**BillingContractPeriodDetail** (1 change)

* Model was added

**BillingProduct** (1 change)

* Model was added

**BillingWallet** (1 change)

* Model was added

**BillingContract** (1 change)

* Model was added

**BillingContractPeriod** (1 change)

* Model was added

**BillingPlan** (1 change)

* Model was added

**BillingPlanItem** (1 change)

* Model was added

**Customer** (1 change)

* Model was added

**BillingContractListing** (1 change)

* Model was added

**BillingInvoiceItem** (1 change)

* Model was added

**BillingInvoiceItemListing** (1 change)

* Model was added

**BillingInvoice** (1 change)

* Model was added

**BillingInvoiceListing** (1 change)

* Model was added

**InvoiceAddress** (1 change)

* Model was added

**Contractual** (1 change)

* Model was added

**DecisionTable** (1 change)

* Model was added

**DecisionTableColumnDefaultRowValue** (1 change)

* Model was added

**DecisionTableColumns** (1 change)

* Model was added

**DecisionTableContract** (1 change)

* Model was added

**DecisionTableInputColumn** (1 change)

* Model was added

**DecisionTableInputColumnExpression** (1 change)

* Model was added

**DecisionTableOutputColumn** (1 change)

* Model was added

**DecisionTableVersionEntity** (1 change)

* Model was added

**Definition** (1 change)

* Model was added

**JsonSchemaWithDefinitions** (1 change)

* Model was added

**OutputValue** (1 change)

* Model was added

**PropertyDefinition** (1 change)

* Model was added

**DecisionTableInputColumnRequest** (1 change)

* Model was added

**DecisionTableOutputColumnRequest** (1 change)

* Model was added

**UpdateDecisionTableColumnsRequest** (1 change)

* Model was added

**UpdateDecisionTableRequest** (1 change)

* Model was added

**DecisionTableExecutionResponse** (1 change)

* Model was added

**DecisionTableRowExecutionOutput** (1 change)

* Model was added

**DecisionTableExecutionRequest** (1 change)

* Model was added

**DecisionTableVersion** (1 change)

* Model was added

**UpdateDecisionTableVersionRequest** (1 change)

* Model was added

**UpdateRowIndexRequest** (1 change)

* Model was added

**CopyDecisionTableRequest** (1 change)

* Model was added

**DecisionTableVersionListing** (1 change)

* Model was added

**CreateDecisionTableColumnsRequest** (1 change)

* Model was added

**CreateDecisionTableRequest** (1 change)

* Model was added

**DecisionTableListing** (1 change)

* Model was added

**DecisionTableRow** (1 change)

* Model was added

**DecisionTableRowParameterValue** (1 change)

* Model was added

**Literal** (1 change)

* Model was added

**UpdateDecisionTableRowRequest** (1 change)

* Model was added

**CreateDecisionTableRowRequest** (1 change)

* Model was added

**DecisionTableRowListing** (1 change)

* Model was added

**RowSearchFilter** (1 change)

* Model was added

**RowSearchPredicate** (1 change)

* Model was added

**SearchDecisionTableRowsRequest** (1 change)

* Model was added


# Point Changes (0 changes)
