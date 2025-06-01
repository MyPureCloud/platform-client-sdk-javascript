Platform API version: 9298




# Major Changes (82 changes)

**GET /api/v2/assistants** (1 change)

* Parameter expand was added

**POST /api/v2/diagnostics/logcapture/browser/entries/query** (1 change)

* Parameter before was removed

**GET /api/v2/diagnostics/logcapture/browser/users** (1 change)

* Response 200 type was changed from PagelessEntityListing to LogCaptureUserConfigurationListing

**GET /api/v2/diagnostics/logcapture/browser/users/{userId}** (1 change)

* Response 200 type was changed from LogCaptureUserConfiguration to LogCaptureUserConfigurationResponse

**GET /api/v2/speechandtextanalytics/topics/general/status** (1 change)

* Response 405 was removed

**POST /api/v2/workforcemanagement/timeoffrequests/estimate** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes/{activityCodeId}** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/intraday** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/businessunits** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/move** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/managementunits** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/workplans/query** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/workplans/bulk** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId}** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId}** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/{staffingGroupId}** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/{timeOffLimitId}** (1 change)

* Parameter body was made required

**PUT /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/{timeOffLimitId}/values** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/values/query** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans/{timeOffPlanId}** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/estimate** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/integrationstatus/query** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/{timeOffRequestId}/users/{userId}/integrationstatus** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId}** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/query** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/waitlistpositions/query** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/query** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/agents** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/validate** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/copy** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}/copy** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/adherence/historical/bulk** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/historicaladherencequery** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/teams/{teamId}/adherence/historical** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/alternativeshifts/settings** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/alternativeshifts/trades/{tradeId}** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/timeofflimits/available/query** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/timeoffrequests** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/workplanbids/{bidId}/preferences** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/agentschedules/mine** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/timeoffrequests/integrationstatus/query** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/notifications/update** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/historicaldata/bulk/remove/jobs** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/historicaldata/validate** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/agents/integrations/hris/query** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions/recalculations/uploadurl** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions/recalculations** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/agentschedules/search** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/agentschedules/search** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/schedules/search** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/shrinkage/jobs** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/teams/{teamId}/shrinkage/jobs** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits** (1 change)

* Parameter body was made required

**PUT /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/{timeOffLimitId}/values** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/values/query** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeoffplans** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeoffplans/{timeOffPlanId}** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/{bidGroupId}** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/{bidGroupId}/preferences** (1 change)

* Parameter body was made required

**PATCH /api/v2/workforcemanagement/users/{userId}/workplanbidranks** (1 change)

* Parameter body was made required

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids** (1 change)

* Parameter body was made required

**GET /api/v2/businessrules/decisiontables/search** (1 change)

* Parameter before was removed

**AddressableEntity** (1 change)

* Model AddressableEntity was removed

**PagelessEntityListing** (1 change)

* Model PagelessEntityListing was removed

**LogCaptureQueryResponse** (1 change)

* Property previousUri was removed


# Minor Changes (106 changes)

**/api/v2/conversations/messages/{conversationId}/communications/{communicationId}/socialmedia/messages** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{ruleId}/reactions/bulk** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{ruleId}/messages/bulk** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/speechandtextanalytics/topics/testphrase/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/speechandtextanalytics/topics/testphrase/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/integrations/botconnectors/{integrationId}/bots/{botId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/botconnectors/{integrationId}/bots/summaries** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/botconnectors/{integrationId}/bots** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/botconnectors/incoming/messages** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/integrations/botconnectors/outgoing/messages** (2 changes)

* Path was added
* Operation POST was added

**StatisticalSummary** (1 change)

* Optional property calculatedMetricValue was added

**ConversationActivityEntityData** (2 changes)

* Enum value oLongestInteracting was added to property metric
* Enum value oLongestWaiting was added to property metric

**ConversationActivityMetricValue** (3 changes)

* Enum value oLongestInteracting was added to property metric
* Enum value oLongestWaiting was added to property metric
* Optional property calculatedMetricValue was added

**ConversationActivityQueryMetric** (2 changes)

* Enum value oLongestInteracting was added to property metric
* Enum value oLongestWaiting was added to property metric

**QueueObservationQuery** (2 changes)

* Enum value oLongestInteracting was added to property metrics
* Enum value oLongestWaiting was added to property metrics

**TranscriptAggregateQueryPredicate** (1 change)

* Enum value categoryId was added to property dimension

**TranscriptAggregationQuery** (2 changes)

* Enum value categoryId was added to property groupBy
* Enum value nSpeechTextAnalyzedConversations was added to property metrics

**TranscriptAggregationView** (1 change)

* Enum value nSpeechTextAnalyzedConversations was added to property target

**Limit** (2 changes)

* Enum value analytics.data.extraction was added to property namespace
* Enum value users.rules was added to property namespace

**AutomatedAnswer** (1 change)

* Model was added

**ConversationMessageMetadataContent** (1 change)

* Enum value Form was added to property contentType

**ConversationContentButtonResponse** (1 change)

* Enum value Form was added to property type

**ConversationContentDatePicker** (2 changes)

* Optional property id was added
* Optional property dateDisplayFormat was added

**ConversationContentForm** (1 change)

* Model was added

**ConversationContentInput** (1 change)

* Model was added

**ConversationContentIntroduction** (1 change)

* Model was added

**ConversationContentListPicker** (1 change)

* Optional property id was added

**ConversationContentQuickReply** (1 change)

* Optional property summaryText was added

**ConversationContentWheelPicker** (1 change)

* Model was added

**ConversationContentWheelPickerItem** (1 change)

* Model was added

**ConversationFormPage** (1 change)

* Model was added

**ConversationFormPageComponent** (1 change)

* Model was added

**ConversationFormResponseComponent** (1 change)

* Model was added

**ConversationFormResponseContent** (1 change)

* Model was added

**ConversationMessageContent** (1 change)

* Enum value Form was added to property contentType

**SocialMediaMessageData** (1 change)

* Model was added

**AdditionalSocialMediaMessage** (1 change)

* Model was added

**KnowledgeDocumentSearch** (1 change)

* Optional property preprocessQuery was added

**KnowledgeDocumentSearchRequest** (1 change)

* Optional property preprocessQuery was added

**ApprovalNamespace** (2 changes)

* Enum value analytics.data.extraction was added to property namespace
* Enum value users.rules was added to property namespace

**LimitChangeRequestDetails** (2 changes)

* Enum value analytics.data.extraction was added to property namespace
* Enum value users.rules was added to property namespace

**StatusChange** (2 changes)

* Enum value analytics.data.extraction was added to property namespace
* Enum value users.rules was added to property namespace

**LogCaptureUserConfigurationListing** (1 change)

* Model was added

**LogCaptureUserConfigurationResponse** (1 change)

* Model was added

**ButtonResponse** (2 changes)

* Enum value ListPicker was added to property type
* Enum value Form was added to property type

**ListPicker** (1 change)

* Model was added

**ListPickerItem** (1 change)

* Model was added

**ListPickerSection** (1 change)

* Model was added

**RecordingMessagingMessage** (1 change)

* Enum value ListPicker was added to property contentType

**OpenSocialMediaReactionsChannel** (1 change)

* Model was added

**OpenSocialMediaReactionsEvent** (1 change)

* Model was added

**OpenSocialMediaReactionsNormalizedEvent** (1 change)

* Model was added

**OpenSocialMediaRecipient** (1 change)

* Model was added

**OpenSocialMediaRecipientAdditionalIdentifier** (1 change)

* Model was added

**OpenSocialReactionsNormalizedEventEntityListing** (1 change)

* Model was added

**OpenSocialMediaReactionsRequest** (1 change)

* Model was added

**OpenSocialMediaChannel** (1 change)

* Model was added

**OpenSocialMediaMessageContent** (1 change)

* Model was added

**OpenSocialMediaNormalizedMessage** (1 change)

* Model was added

**OpenSocialMediaPublicMetadata** (1 change)

* Model was added

**OpenSocialNormalizedMessageEntityListing** (1 change)

* Model was added

**TestTopicPhraseJob** (1 change)

* Model was added

**TestTopicPhraseJobs** (1 change)

* Model was added

**TestTopicPhraseJobRequest** (1 change)

* Model was added

**TestTopicPhrasePhrase** (1 change)

* Model was added

**TestTopicPhraseTopic** (1 change)

* Model was added

**TranscriptsFilters** (1 change)

* Model was added

**TranscriptAsyncAggregationQuery** (2 changes)

* Enum value categoryId was added to property groupBy
* Enum value nSpeechTextAnalyzedConversations was added to property metrics

**Bot** (1 change)

* Model was added

**BotConnectorIntent** (1 change)

* Model was added

**BotEntity** (1 change)

* Model was added

**BotVersion** (1 change)

* Model was added

**BotConnectorSummary** (1 change)

* Model was added

**BotConnectorVersionSummary** (1 change)

* Model was added

**BotSummaryEntityListing** (1 change)

* Model was added

**BotListing** (1 change)

* Model was added

**IncomingMessageResponse** (1 change)

* Model was added

**IncomingMessageRequest** (1 change)

* Model was added

**InputMessage** (1 change)

* Model was added

**OutgoingMessageResponse** (1 change)

* Model was added

**BotEntityValue** (1 change)

* Model was added

**OutgoingMessageRequest** (1 change)

* Model was added

**ReplyMessage** (1 change)

* Model was added


# Point Changes (3 changes)

**GET /api/v2/businessrules/decisiontables/{tableId}/versions** (1 change)

* Description was changed for parameter pageSize

**GET /api/v2/businessrules/decisiontables** (1 change)

* Description was changed for parameter pageSize

**GET /api/v2/businessrules/decisiontables/search** (1 change)

* Description was changed for parameter pageSize
