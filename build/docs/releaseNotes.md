Platform API version: 7019


# Major Changes (40 changes)

**POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/search** (1 change)

* Has been deprecated

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories** (1 change)

* Has been deprecated

**POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories** (1 change)

* Has been deprecated

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId}** (1 change)

* Has been deprecated

**DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId}** (1 change)

* Has been deprecated

**PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId}** (1 change)

* Has been deprecated

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports/{importId}** (1 change)

* Has been deprecated

**DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports/{importId}** (1 change)

* Has been deprecated

**PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports/{importId}** (1 change)

* Has been deprecated

**POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports** (1 change)

* Has been deprecated

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}** (1 change)

* Has been deprecated

**DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}** (1 change)

* Has been deprecated

**PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}** (1 change)

* Has been deprecated

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents** (1 change)

* Has been deprecated

**POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents** (1 change)

* Has been deprecated

**PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents** (1 change)

* Has been deprecated

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings/{trainingId}** (1 change)

* Has been deprecated

**POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings/{trainingId}/promote** (1 change)

* Has been deprecated

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings** (1 change)

* Has been deprecated

**POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings** (1 change)

* Has been deprecated

**GET /api/v2/messaging/supportedcontent/{supportedContentId}** (1 change)

* Has been deprecated

**DELETE /api/v2/messaging/supportedcontent/{supportedContentId}** (1 change)

* Has been deprecated

**PATCH /api/v2/messaging/supportedcontent/{supportedContentId}** (1 change)

* Has been deprecated

**GET /api/v2/messaging/supportedcontent** (1 change)

* Has been deprecated

**POST /api/v2/messaging/supportedcontent** (1 change)

* Has been deprecated

**GET /api/v2/organizations/embeddedintegration** (1 change)

* Has been deprecated

**PUT /api/v2/organizations/embeddedintegration** (1 change)

* Has been deprecated

**GET /api/v2/organizations/ipaddressauthentication** (1 change)

* Has been deprecated

**PUT /api/v2/organizations/ipaddressauthentication** (1 change)

* Has been deprecated

**ApiUsageQuery** (1 change)

* Model ApiUsageQuery was removed

**TextMessageListing** (9 changes)

* Property pageSize was removed
* Property pageNumber was removed
* Property total was removed
* Property firstUri was removed
* Property pageCount was removed
* Property lastUri was removed
* Property selfUri was removed
* Property nextUri was removed
* Property previousUri was removed

**DocumentBodyListBlock** (1 change)

* Property blocks was changed from DocumentContentBlock[] to DocumentListContentBlock[]


# Minor Changes (77 changes)

**/api/v2/organizations/authentication/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/speechandtextanalytics/topics/general/status** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/usage/simplesearch** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/usage/simplesearch/{executionId}/results** (2 changes)

* Path was added
* Operation GET was added

**ConversationAggregationQuery** (2 changes)

* Enum value tActiveCallback was added to property metrics
* Enum value tActiveCallbackComplete was added to property metrics

**ConversationAggregationView** (2 changes)

* Enum value tActiveCallback was added to property target
* Enum value tActiveCallbackComplete was added to property target

**ConversationDetailQueryPredicate** (2 changes)

* Enum value tActiveCallback was added to property metric
* Enum value tActiveCallbackComplete was added to property metric

**ViewFilter** (2 changes)

* Enum value NoInputDisambiguation was added to property botRecognitionFailureReasonList
* Enum value NoMatchDisambiguation was added to property botRecognitionFailureReasonList

**ReportingExportJobResponse** (3 changes)

* Enum value AGENT_ASSIST_PERFORMANCE_VIEW was added to property viewType
* Enum value CONTACT_CENTER_PERFORMANCE_VIEW was added to property viewType
* Optional property durationFormat was added

**ReportingExportMetadataJobResponse** (2 changes)

* Enum value AGENT_ASSIST_PERFORMANCE_VIEW was added to property viewType
* Enum value CONTACT_CENTER_PERFORMANCE_VIEW was added to property viewType

**ReportingExportJobRequest** (3 changes)

* Enum value AGENT_ASSIST_PERFORMANCE_VIEW was added to property viewType
* Enum value CONTACT_CENTER_PERFORMANCE_VIEW was added to property viewType
* Optional property durationFormat was added

**AuthorizationSettings** (2 changes)

* analysisEnabled is no longer readonly
* analysisDays is no longer readonly

**QueueMessagingAddresses** (1 change)

* Optional property openMessagingRecipient was added

**AdjustableLiveSpeakerDetection** (1 change)

* Model was added

**Call** (1 change)

* Optional property disposition was added

**Disposition** (1 change)

* Model was added

**DispositionParameters** (1 change)

* Model was added

**Settings** (2 changes)

* Optional property completeAcwWhenAgentTransitionsOffline was added
* Optional property totalActiveCallback was added

**CreateOutboundMessagingConversationRequest** (1 change)

* Enum value open was added to property toAddressMessengerType

**CallBasic** (1 change)

* Optional property disposition was added

**DocumentBodyImage** (1 change)

* Optional property properties was added

**DocumentBodyImageProperties** (1 change)

* Model was added

**DocumentBodyList** (1 change)

* Optional property properties was added

**DocumentBodyListBlock** (1 change)

* Optional property properties was added

**DocumentBodyListBlockProperties** (1 change)

* Model was added

**DocumentBodyListItemProperties** (1 change)

* Model was added

**DocumentBodyParagraph** (1 change)

* Optional property properties was added

**DocumentBodyParagraphProperties** (1 change)

* Model was added

**DocumentBodyVideo** (1 change)

* Optional property properties was added

**DocumentBodyVideoProperties** (1 change)

* Model was added

**DocumentListContentBlock** (1 change)

* Model was added

**DocumentText** (4 changes)

* Enum value Strikethrough was added to property marks
* Enum value Subscript was added to property marks
* Enum value Superscript was added to property marks
* Optional property properties was added

**DocumentTextProperties** (1 change)

* Model was added

**Miner** (2 changes)

* Enum value pt-pt was added to property language
* Enum value pt-br was added to property language

**ApprovalNamespace** (1 change)

* Enum value usage was added to property namespace

**LimitChangeRequestDetails** (1 change)

* Enum value usage was added to property namespace

**StatusChange** (1 change)

* Enum value usage was added to property namespace

**ApiUsageClientQuery** (1 change)

* Model was added

**OrgAuthSettings** (1 change)

* Model was added

**PasswordRequirements** (1 change)

* Model was added

**EventPresence** (1 change)

* Enum value Clear was added to property type

**ComparisonPeriod** (1 change)

* Optional property percentageBenefit was added

**KpiResult** (1 change)

* Optional property percentageBenefit was added

**FlowVersion** (2 changes)

* Optional property datePublished was added
* Optional property datePublishedEnd was added

**GeneralProgramJobRequest** (7 changes)

* Enum value ar-001 was added to property dialect
* Enum value ar-AE was added to property dialect
* Enum value ar-BH was added to property dialect
* Enum value ar-EG was added to property dialect
* Enum value ar-IL was added to property dialect
* Enum value ar-SA was added to property dialect
* Enum value ar-TN was added to property dialect

**UnifiedGeneralTopic** (1 change)

* Model was added

**UnifiedGeneralTopicEntityListing** (1 change)

* Model was added

**ApiUsageOrganizationQuery** (1 change)

* Model was added

**ApiUsageSimpleSearch** (1 change)

* Model was added

**LearningModuleInformStepRequest** (1 change)

* Enum value GenesysBuiltInCourse was added to property type


# Point Changes (14 changes)

**POST /api/v2/conversations/messages/agentless** (1 change)

* Description was changed

**GET /api/v2/knowledge/knowledgebases** (2 changes)

* Description was changed for parameter limit
* Description was changed for parameter pageSize

**GET /api/v2/messaging/supportedcontent/{supportedContentId}** (1 change)

* Description was changed

**DELETE /api/v2/messaging/supportedcontent/{supportedContentId}** (1 change)

* Description was changed

**PATCH /api/v2/messaging/supportedcontent/{supportedContentId}** (1 change)

* Description was changed

**GET /api/v2/messaging/supportedcontent** (1 change)

* Description was changed

**POST /api/v2/messaging/supportedcontent** (1 change)

* Description was changed

**GET /api/v2/organizations/embeddedintegration** (1 change)

* Description was changed

**PUT /api/v2/organizations/embeddedintegration** (1 change)

* Description was changed

**GET /api/v2/organizations/ipaddressauthentication** (1 change)

* Description was changed

**PUT /api/v2/organizations/ipaddressauthentication** (1 change)

* Description was changed

**GET /api/v2/organizations/whitelist** (1 change)

* Summary was changed

**PUT /api/v2/organizations/whitelist** (1 change)

* Summary was changed
