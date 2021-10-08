Platform API version: 5088


# Major Changes (9 changes)

**PUT /api/v2/flows/datatables/{datatableId}** (1 change)

* Parameter body was made required

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents** (2 changes)

* Parameter sortBy was added
* Parameter sortOrder was added

**GET /api/v2/knowledge/knowledgebases** (2 changes)

* Parameter sortBy was added
* Parameter sortOrder was added

**GET /api/v2/quality/forms/surveys/bulk/contexts** (1 change)

* Response 200 type was changed from SurveyFormEntityListing to SurveyForm[]

**ConversationMessageContent** (1 change)

* Property generic was changed from ContentGeneric to ConversationContentGeneric

**BuAgentScheduleShift** (2 changes)

* startDate has been made readonly
* lengthMinutes has been made readonly


# Minor Changes (104 changes)

**POST /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/publish** (1 change)

* Response 409 was added

**POST /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/train** (1 change)

* Response 409 was added

**PUT /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}** (1 change)

* Response 409 was added

**DELETE /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}** (1 change)

* Response 409 was added

**/api/v2/webmessaging/messages** (2 changes)

* Path was added
* Operation GET was added

**AnalyticsConversationSegment** (1 change)

* Enum value monitoring was added to property segmentType

**TranscriptTopics** (1 change)

* Model was added

**ViewFilter** (1 change)

* Optional property transcriptTopics was added

**ConversationButtonComponent** (1 change)

* Model was added

**ConversationContentActions** (1 change)

* Model was added

**ConversationContentGeneric** (1 change)

* Model was added

**ConversationContentLocation** (1 change)

* Model was added

**ConversationMessageContent** (2 changes)

* Enum value Location was added to property contentType
* Optional property location was added

**ConversationMessagingChannel** (1 change)

* Enum value Instagram was added to property platform

**MessageData** (1 change)

* Enum value instagram was added to property messengerType

**OpenMessagingFromRecipient** (2 changes)

* Optional property image was added
* Optional property email was added

**OpenMessagingToRecipient** (2 changes)

* Optional property image was added
* Optional property email was added

**OpenNormalizedMessage** (5 changes)

* Enum value Receipt was added to property type
* Optional property status was added
* Optional property reasons was added
* Optional property isFinalReceipt was added
* Optional property metadata was added

**Reason** (1 change)

* Model was added

**CreateOutboundMessagingConversationRequest** (1 change)

* Enum value instagram was added to property toAddressMessengerType

**SendAgentlessOutboundMessageResponse** (1 change)

* Enum value instagram was added to property messengerType

**SendAgentlessOutboundMessageRequest** (1 change)

* Enum value instagram was added to property toAddressMessengerType

**MessagingIntegration** (1 change)

* Enum value instagram was added to property messengerType

**MessagingSticker** (1 change)

* Enum value instagram was added to property messengerType

**ConversationThreadingWindowSetting** (1 change)

* Enum value instagram was added to property messengerType

**DialerAction** (2 changes)

* Enum value dataActionBehavior was added to property type
* Enum value DATA_ACTION was added to property actionTypeName

**Leaderboard** (1 change)

* Optional property performanceProfile was added

**OverallBestPoints** (1 change)

* Optional property performanceProfile was added

**SingleWorkdayAveragePoints** (1 change)

* Optional property performanceProfile was added

**WorkdayValuesTrend** (1 change)

* Optional property performanceProfile was added

**SingleWorkdayAverageValues** (1 change)

* Optional property performanceProfile was added

**WebMessagingOfferFields** (1 change)

* Optional property architectFlow was added

**KnowledgeBase** (2 changes)

* Enum value en-UK was added to property coreLanguage
* Enum value en-AU was added to property coreLanguage

**KnowledgeCategory** (2 changes)

* Enum value en-UK was added to property languageCode
* Enum value en-AU was added to property languageCode

**KnowledgeSearchDocument** (2 changes)

* Enum value en-UK was added to property languageCode
* Enum value en-AU was added to property languageCode

**KnowledgeExtendedCategory** (2 changes)

* Enum value en-UK was added to property languageCode
* Enum value en-AU was added to property languageCode

**KnowledgeImport** (2 changes)

* Enum value en-UK was added to property languageCode
* Enum value en-AU was added to property languageCode

**KnowledgeDocument** (2 changes)

* Enum value en-UK was added to property languageCode
* Enum value en-AU was added to property languageCode

**Miner** (4 changes)

* Enum value en-gb was added to property language
* Enum value en-au was added to property language
* Enum value en-in was added to property language
* Enum value en-za was added to property language

**AvailableTopic** (1 change)

* Optional property topicParameters was added

**Endpoint** (1 change)

* Optional property division was added

**Recipient** (1 change)

* Enum value instagram was added to property messengerType

**DomainCertificateAuthority** (1 change)

* Optional property division was added

**Edge** (1 change)

* Optional property division was added

**EdgeGroup** (1 change)

* Optional property division was added

**Site** (1 change)

* Optional property division was added

**TrunkBase** (1 change)

* Optional property division was added

**DomainLogicalInterface** (1 change)

* Optional property division was added

**DomainPhysicalInterface** (1 change)

* Optional property division was added

**SchemaCategory** (1 change)

* Optional property division was added

**DomainSchemaReference** (1 change)

* Optional property division was added

**DIDPool** (1 change)

* Optional property division was added

**DID** (1 change)

* Optional property division was added

**EdgeTrunkBase** (1 change)

* Optional property division was added

**ExtensionPool** (1 change)

* Optional property division was added

**Extension** (1 change)

* Optional property division was added

**EdgeLine** (1 change)

* Optional property division was added

**LineBase** (1 change)

* Optional property division was added

**Line** (1 change)

* Optional property division was added

**EdgeLogsJob** (1 change)

* Optional property division was added

**EdgeLogsJobFile** (1 change)

* Optional property division was added

**EdgeLogsJobResponse** (1 change)

* Optional property division was added

**NumberPlan** (1 change)

* Optional property division was added

**OutboundRoute** (1 change)

* Optional property division was added

**PhoneBase** (1 change)

* Optional property division was added

**Metabase** (1 change)

* Optional property division was added

**Phone** (1 change)

* Optional property division was added

**OutboundRouteBase** (1 change)

* Optional property division was added

**Trunk** (1 change)

* Optional property division was added

**VoicemailGroupPolicy** (1 change)

* Optional property interactiveResponsePromptId was added

**VoicemailOrganizationPolicy** (1 change)

* Optional property interactiveResponseRequired was added

**EmergencyGroup** (1 change)

* Optional property division was added

**IVR** (1 change)

* Optional property division was added

**ScheduleGroup** (1 change)

* Optional property division was added

**Schedule** (1 change)

* Optional property division was added

**WebMessagingAttachment** (1 change)

* Model was added

**WebMessagingButtonResponse** (1 change)

* Model was added

**WebMessagingChannel** (1 change)

* Model was added

**WebMessagingContent** (1 change)

* Model was added

**WebMessagingGeneric** (1 change)

* Model was added

**WebMessagingMessage** (1 change)

* Model was added

**WebMessagingMessageEntityList** (1 change)

* Model was added

**WebMessagingQuickReply** (1 change)

* Model was added

**WebMessagingRecipient** (1 change)

* Model was added

**BuAgentScheduleShift** (1 change)

* id is no longer readonly

**ValidationServiceRequest** (1 change)

* Optional property uploadKey was added


# Point Changes (1 change)

**POST /api/v2/conversations/{conversationId}/assign** (1 change)

* Summary was changed
