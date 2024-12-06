Platform API version: 8669




# Major Changes (9 changes)

**/api/v2/routing/sms/phonenumbers/{addressId}** (1 change)

* Path /api/v2/routing/sms/phonenumbers/{addressId} was removed

**GET /api/v2/knowledge/integrations/{integrationId}/options** (1 change)

* Parameter knowledgeBaseIds was added

**GET /api/v2/routing/queues/{queueId}/mediatypes/{mediaType}/estimatedwaittime** (1 change)

* Parameter labelId was added

**GET /api/v2/quality/agents/activity** (1 change)

* Parameter userState was added

**GET /api/v2/quality/evaluations/query** (1 change)

* Parameter includeDeletedUsers was added

**CampaignSchedule** (1 change)

* Property campaign was changed from DomainEntityRef to DivisionedDomainEntityRef

**EmailCampaignSchedule** (1 change)

* Property emailCampaign was changed from DomainEntityRef to DivisionedDomainEntityRef

**MessagingCampaignSchedule** (1 change)

* Property messagingCampaign was changed from DomainEntityRef to DivisionedDomainEntityRef

**ValidationServiceRequest** (1 change)

* Property fileName was removed


# Minor Changes (119 changes)

**/api/v2/usage/events/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/usage/events/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**POST /api/v2/routing/email/domains/{domainName}/routes** (1 change)

* Response 202 was added

**/api/v2/routing/sms/phonenumbers/{phoneNumberId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**GET /api/v2/voicemail/me/mailbox** (1 change)

* Response 502 was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}** (5 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}/versions/{dataIngestionRuleVersion}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}/versions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}** (5 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}/versions/{dataIngestionRuleVersion}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}/versions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/open** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}** (5 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}/versions/{dataIngestionRuleVersion}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}/versions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/socialmedia/topics/{topicId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/socialmedia/topics** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**OrgAuthSettings** (1 change)

* Optional property inactivityTimeoutExclusions was added

**AgentCopilotAggregateQueryPredicate** (1 change)

* Enum value hasAnswerHighlight was added to property dimension

**AgentCopilotAggregationQuery** (1 change)

* Enum value hasAnswerHighlight was added to property groupBy

**ViewFilter** (2 changes)

* Enum value apple was added to property messageTypes
* Optional property conferenced was added

**ReportingExportJobResponse** (1 change)

* Enum value AGENT_COPILOT_PERFORMANCE_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (1 change)

* Enum value AGENT_COPILOT_PERFORMANCE_VIEW was added to property viewType

**ReportingExportJobRequest** (1 change)

* Enum value AGENT_COPILOT_PERFORMANCE_VIEW was added to property viewType

**EvaluationForm** (1 change)

* Optional property evaluationSettings was added

**EvaluationSettings** (4 changes)

* Optional property revisionsEnabled was added
* Optional property disputesEnabled was added
* Optional property disputesAllowedPerEvaluation was added
* Optional property disputesAssignees was added

**EvaluationSettingsAssignee** (2 changes)

* Optional property user was added
* Optional property type was added

**WrapupCode** (1 change)

* Optional property description was added

**Session** (1 change)

* Optional property divisionIds was added

**ConversationEventTyping** (1 change)

* duration is no longer readonly

**MessagingIntegration** (1 change)

* Enum value Failed was added to property status

**OpenMessagingIdentityResolutionConfig** (1 change)

* Model was added

**WhatsAppIntegration** (1 change)

* Enum value Failed was added to property status

**CampaignRuleCondition** (1 change)

* Enum value campaignContactsMessaged was added to property conditionType

**CampaignRuleWarningParameters** (1 change)

* Enum value campaignContactsMessaged was added to property conditionType

**DivisionedDomainEntityRef** (1 change)

* Model was added

**JourneyViewElement** (1 change)

* Optional property displayAttributes was added

**JourneyViewElementDisplayAttributes** (1 change)

* Model was added

**KnowledgeIntegrationFilter** (1 change)

* Optional property action was added

**KnowledgeExportJobDocumentsFilter** (1 change)

* Optional property includeDocumentsWithFileBody was added

**Miner** (1 change)

* Enum value nl-nl was added to property language

**KnowledgeGuestSession** (1 change)

* Optional property journeySessionId was added

**EventQueryResponse** (1 change)

* Model was added

**OperationalEvent** (1 change)

* Model was added

**EventQueryRequest** (1 change)

* Model was added

**EventAggregatesResponse** (1 change)

* Model was added

**EventDefinitionAggregates** (1 change)

* Model was added

**EventAggregatesQueryRequest** (1 change)

* Model was added

**PredictionResults** (1 change)

* Optional property label was added

**BatchDownloadJobStatusResult** (1 change)

* Optional property status was added

**EvaluationFormResponse** (1 change)

* Optional property evaluationSettings was added

**WrapupCodeRequest** (1 change)

* Optional property description was added

**ScimV2EnterpriseUser** (1 change)

* Optional property dateHire was added

**UserMe** (1 change)

* Optional property autoAnswerSettings was added

**ArchitectJobStateResponse** (1 change)

* Enum value Export was added to property command

**SupportCenterLabelFilter** (1 change)

* Model was added

**SupportCenterSettings** (1 change)

* Optional property labelFilter was added

**WorkitemScriptReference** (1 change)

* Model was added

**WorkitemOnAttributeChangeRule** (1 change)

* Enum value Date was added to property type

**WorkitemOnCreateRule** (1 change)

* Enum value Date was added to property type

**AgentCopilotAsyncAggregationQuery** (1 change)

* Enum value hasAnswerHighlight was added to property groupBy

**FacebookDataIngestionRuleResponse** (1 change)

* Model was added

**DataIngestionRuleStatusPatchRequest** (1 change)

* Model was added

**FacebookDataIngestionRuleRequest** (1 change)

* Model was added

**FacebookDataIngestionRuleVersionResponse** (1 change)

* Model was added

**FacebookDataIngestionRuleVersionResponseEntityListing** (1 change)

* Model was added

**OpenDataIngestionRuleResponse** (1 change)

* Model was added

**OpenDataIngestionRuleRequest** (1 change)

* Model was added

**OpenDataIngestionRuleVersionResponse** (1 change)

* Model was added

**OpenDataIngestionRuleVersionResponseEntityListing** (1 change)

* Model was added

**TwitterDataIngestionRuleResponse** (1 change)

* Model was added

**TwitterDataIngestionRuleRequest** (1 change)

* Model was added

**TwitterDataIngestionRuleVersionResponse** (1 change)

* Model was added

**TwitterDataIngestionRuleVersionResponseEntityListing** (1 change)

* Model was added

**DataIngestionRules** (1 change)

* Model was added

**SocialTopicResponse** (1 change)

* Model was added

**SocialTopicPatchRequest** (1 change)

* Model was added

**SocialTopicRequest** (1 change)

* Model was added

**SocialTopicResponseEntityListing** (1 change)

* Model was added

**WorkitemDelta** (1 change)

* Optional property scriptId was added

**WorktypeDelta** (1 change)

* Optional property defaultScriptId was added


# Point Changes (10 changes)

**GET /api/v2/analytics/botflows/{botFlowId}/divisions/reportingturns** (1 change)

* Description was changed

**GET /api/v2/analytics/botflows/{botFlowId}/reportingturns** (1 change)

* Description was changed

**GET /api/v2/analytics/botflows/{botFlowId}/sessions** (1 change)

* Description was changed

**POST /api/v2/routing/email/domains/{domainName}/routes** (1 change)

* Response 200 was changed from successful operation to Route create completed.

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/search** (1 change)

* Description was changed for parameter weekDateId

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades** (1 change)

* Description was changed for parameter weekDateId

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades** (1 change)

* Description was changed for parameter weekDateId

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/state/bulk** (1 change)

* Description was changed for parameter weekDateId

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId}** (1 change)

* Description was changed for parameter weekDateId

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId}/match** (1 change)

* Description was changed for parameter weekDateId
