Platform API version: 9591




# Major Changes (13 changes)

**/api/v2/userrecordings/{recordingId}/media** (1 change)

* Path /api/v2/userrecordings/{recordingId}/media was removed

**GET /api/v2/routing/email/domains/{domainId}** (1 change)

* Parameter expand was added

**GET /api/v2/routing/email/domains** (1 change)

* Parameter expand was added

**GET /api/v2/routing/email/outbound/domains/{domainId}** (1 change)

* Parameter expand was added

**GET /api/v2/routing/email/outbound/domains** (1 change)

* Parameter expand was added

**OutboundDomainRequest** (1 change)

* Model OutboundDomainRequest was removed

**CallMediaPolicyConditions** (1 change)

* Property forUsers was changed from User[] to PolicyUser[]

**ChatMediaPolicyConditions** (1 change)

* Property forUsers was changed from User[] to PolicyUser[]

**EmailMediaPolicyConditions** (1 change)

* Property forUsers was changed from User[] to PolicyUser[]

**MessageMediaPolicyConditions** (1 change)

* Property forUsers was changed from User[] to PolicyUser[]

**PolicyConditions** (1 change)

* Property forUsers was changed from User[] to PolicyUser[]

**UserRecording** (1 change)

* Property contentUri was removed

**MediaStatisticsPostRequest** (1 change)

* Required property dateCreated was added


# Minor Changes (159 changes)

**/api/v2/conversations/calls/user/{userId}** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/calls/{conversationId}/participants/user/{userId}** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/summaries/preview** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/summaries/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/conversations/summaries/settings/{summarySettingId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/journey/views/jobs/me** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/languageunderstanding/ignorephrases/{languageCode}** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/languageunderstanding/ignorephrases/{languageCode}/remove** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/languageunderstanding/ignoretopics/{languageCode}** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/languageunderstanding/ignoretopics/{languageCode}/remove** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/instagram/{instagramIngestionRuleId}** (5 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/instagram/{instagramIngestionRuleId}/versions/{dataIngestionRuleVersion}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/instagram/{instagramIngestionRuleId}/versions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/instagram** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/dataextraction/downloads/metadata** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/analytics/dataextraction/downloads/{downloadId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/analytics/dataextraction/downloads/bulk** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/quality/publishedforms/evaluations/divisionviews/{evaluationFormId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/quality/publishedforms/evaluations/divisionviews** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/quality/publishedforms/surveys/divisionviews/{surveyFormId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/quality/publishedforms/surveys/divisionviews** (2 changes)

* Path was added
* Operation GET was added

**ReportingTurnAction** (2 changes)

* Enum value CallBotFlowAction was added to property actionType
* Enum value CallDigitalBotFlowAction was added to property actionType

**ReportingExportJobResponse** (6 changes)

* Enum value QUEUE_WORKITEM_ACTIVITY_SUMMARY_VIEW was added to property viewType
* Enum value QUEUE_WORKITEM_ACTIVITY_DETAIL_VIEW was added to property viewType
* Enum value DIGITAL_ADOPTION_VIEW was added to property viewType
* Enum value DIGITAL_INTENT_VIEW was added to property viewType
* Enum value DIGITAL_PERFORMANCE_VIEW was added to property viewType
* Enum value COPILOT_USAGE_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (6 changes)

* Enum value QUEUE_WORKITEM_ACTIVITY_SUMMARY_VIEW was added to property viewType
* Enum value QUEUE_WORKITEM_ACTIVITY_DETAIL_VIEW was added to property viewType
* Enum value DIGITAL_ADOPTION_VIEW was added to property viewType
* Enum value DIGITAL_INTENT_VIEW was added to property viewType
* Enum value DIGITAL_PERFORMANCE_VIEW was added to property viewType
* Enum value COPILOT_USAGE_VIEW was added to property viewType

**ReportingExportJobRequest** (6 changes)

* Enum value QUEUE_WORKITEM_ACTIVITY_SUMMARY_VIEW was added to property viewType
* Enum value QUEUE_WORKITEM_ACTIVITY_DETAIL_VIEW was added to property viewType
* Enum value DIGITAL_ADOPTION_VIEW was added to property viewType
* Enum value DIGITAL_INTENT_VIEW was added to property viewType
* Enum value DIGITAL_PERFORMANCE_VIEW was added to property viewType
* Enum value COPILOT_USAGE_VIEW was added to property viewType

**AutoSearchConfig** (1 change)

* Model was added

**ManualSearchConfig** (1 change)

* Model was added

**DataSchema** (1 change)

* Enum value USER_CUSTOM_ATTRIBUTES was added to property appliesTo

**PolicyUser** (1 change)

* Model was added

**AiScoring** (1 change)

* Enum value DuplicateAutomatedFormWithCopiedScore was added to property failureType

**ConversationReason** (1 change)

* Enum value DataFiltered was added to property code

**SummarySetting** (1 change)

* Model was added

**SummarySettingCustomEntity** (1 change)

* Model was added

**SummarySettingPII** (1 change)

* Model was added

**SummarySettingParticipantLabels** (1 change)

* Model was added

**SummarySettingWithTranscript** (1 change)

* Model was added

**SummarySettingEntityListing** (1 change)

* Model was added

**CampaignRuleWarning** (2 changes)

* Enum value ConditionsWaitingForLinesOnlyPreviewOrExternal was added to property code
* Enum value ConditionsWaitingForAgentsOnlyAgentless was added to property code

**NluDomainVersion** (1 change)

* Optional property languageVersions was added

**Miner** (2 changes)

* Enum value ja-jp was added to property language
* Enum value ko-kr was added to property language

**IgnoredMinedEntity** (1 change)

* Model was added

**IgnoredMinedPhraseListing** (1 change)

* Model was added

**RemoveEntitiesRequest** (1 change)

* Model was added

**RemoveEntity** (1 change)

* Model was added

**IgnorePhrasesResponse** (1 change)

* Model was added

**IgnorePhrase** (1 change)

* Model was added

**IgnorePhrasesRequest** (1 change)

* Model was added

**IgnoredMinedTopicListing** (1 change)

* Model was added

**IgnoreTopicsResponse** (1 change)

* Model was added

**IgnoreTopic** (1 change)

* Model was added

**IgnoreTopicsRequest** (1 change)

* Model was added

**Reason** (1 change)

* Enum value DataFiltered was added to property code

**IpAddressRange** (1 change)

* Enum value byo-smpp was added to property service

**Recording** (1 change)

* Enum value Snippet was added to property mediaSubtype

**OrphanRecording** (2 changes)

* Enum value Snippet was added to property mediaSubtype
* Enum value mx-central-1 was added to property region

**RecordingMetadata** (2 changes)

* Enum value Snippet was added to property mediaSubtype
* Enum value mx-central-1 was added to property region

**AuthorizedDomains** (1 change)

* Model was added

**Domains** (1 change)

* Model was added

**EmailSetting** (1 change)

* Model was added

**InboundDomain** (1 change)

* Optional property emailSetting was added

**EmailSettingReference** (1 change)

* Model was added

**InboundDomainPatchRequest** (1 change)

* Optional property emailSetting was added

**InboundDomainCreateRequest** (1 change)

* Model was added

**OutboundDomain** (1 change)

* Optional property emailSetting was added

**EmailOutboundDomainResult** (1 change)

* Optional property emailSetting was added

**OutboundDomainCreateRequest** (1 change)

* Model was added

**ContentModeration** (1 change)

* Model was added

**SocialMediaDetailMessageContainer** (1 change)

* Optional property contentModeration was added

**InstagramDataIngestionRuleResponse** (1 change)

* Model was added

**InstagramDataIngestionRuleRequest** (1 change)

* Model was added

**InstagramDataIngestionRuleVersionResponse** (1 change)

* Model was added

**InstagramDataIngestionRuleVersionResponseEntityListing** (1 change)

* Model was added

**Phone** (1 change)

* Optional property standAlone was added

**SchedulerMessageTypeSeverity** (10 changes)

* Enum value UnableToScheduleMaxActivityLengthFromShiftEndFromDst was added to property type
* Enum value UnableToScheduleMaxActivityLengthFromShiftEndFromTimeOff was added to property type
* Enum value UnableToScheduleMaxShiftStartAndPaidDurationVarianceFromTimeOff was added to property type
* Enum value UnableToScheduleMaxShiftStartTimeVarianceFromDst was added to property type
* Enum value UnableToScheduleMaxShiftStartTimeVarianceFromTimeOff was added to property type
* Enum value UnableToScheduleMinActivityLengthFromShiftEndFromDst was added to property type
* Enum value UnableToScheduleMinActivityLengthFromShiftStartFromDst was added to property type
* Enum value UnableToSchedulePlanningPeriodMaxShiftStartAndPaidDurationVarianceFromTimeOff was added to property type
* Enum value UnableToSchedulePlanningPeriodMaxShiftStartTimeVarianceFromDst was added to property type
* Enum value UnableToSchedulePlanningPeriodMaxShiftStartTimeVarianceFromTimeOff was added to property type

**ScheduleGenerationMessage** (10 changes)

* Enum value UnableToScheduleMaxActivityLengthFromShiftEndFromDst was added to property type
* Enum value UnableToScheduleMaxActivityLengthFromShiftEndFromTimeOff was added to property type
* Enum value UnableToScheduleMaxShiftStartAndPaidDurationVarianceFromTimeOff was added to property type
* Enum value UnableToScheduleMaxShiftStartTimeVarianceFromDst was added to property type
* Enum value UnableToScheduleMaxShiftStartTimeVarianceFromTimeOff was added to property type
* Enum value UnableToScheduleMinActivityLengthFromShiftEndFromDst was added to property type
* Enum value UnableToScheduleMinActivityLengthFromShiftStartFromDst was added to property type
* Enum value UnableToSchedulePlanningPeriodMaxShiftStartAndPaidDurationVarianceFromTimeOff was added to property type
* Enum value UnableToSchedulePlanningPeriodMaxShiftStartTimeVarianceFromDst was added to property type
* Enum value UnableToSchedulePlanningPeriodMaxShiftStartTimeVarianceFromTimeOff was added to property type

**DataExtractionFileSchema** (1 change)

* Model was added

**DataExtractionFileSchemaListing** (1 change)

* Model was added

**DataExtractionFileUrl** (1 change)

* Model was added

**DataExtractionFileUrlListing** (1 change)

* Model was added

**DownloadServiceRequest** (1 change)

* Model was added

**DecisionTableInputColumnExpression** (6 changes)

* Enum value ContainsSequence was added to property comparator
* Enum value NotContainsSequence was added to property comparator
* Enum value IsSubset was added to property comparator
* Enum value NotIsSubset was added to property comparator
* Enum value IsSubsequence was added to property comparator
* Enum value NotIsSubsequence was added to property comparator

**EvaluationFormDivisionView** (1 change)

* Model was added

**EvaluationFormDivisionViewListing** (1 change)

* Model was added

**SurveyFormDivisionView** (1 change)

* Model was added

**SurveyFormDivisionViewListing** (1 change)

* Model was added

**MediaEndpointStatistics** (2 changes)

* Optional property dateCreated was added
* Optional property dateProcessed was added


# Point Changes (3 changes)

**PUT /api/v2/recording/mediaretentionpolicies/{policyId}** (1 change)

* Description was changed

**POST /api/v2/conversations/emails/{conversationId}/reconnect** (1 change)

* Description was changed

**PUT /api/v2/recording/jobs/{jobId}** (1 change)

* Description was changed
