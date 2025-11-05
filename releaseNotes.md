Platform API version: 9727




# Major Changes (17 changes)

**/api/v2/quality/publishedforms/evaluations/divisionviews/{evaluationFormId}** (1 change)

* Path /api/v2/quality/publishedforms/evaluations/divisionviews/{evaluationFormId} was removed

**/api/v2/quality/publishedforms/evaluations/divisionviews** (1 change)

* Path /api/v2/quality/publishedforms/evaluations/divisionviews was removed

**/api/v2/quality/publishedforms/surveys/divisionviews/{surveyFormId}** (1 change)

* Path /api/v2/quality/publishedforms/surveys/divisionviews/{surveyFormId} was removed

**/api/v2/quality/publishedforms/surveys/divisionviews** (1 change)

* Path /api/v2/quality/publishedforms/surveys/divisionviews was removed

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/staffingrequirement** (1 change)

* Parameter expand was added

**EvaluationFormDivisionView** (1 change)

* Model EvaluationFormDivisionView was removed

**EvaluationFormDivisionViewListing** (1 change)

* Model EvaluationFormDivisionViewListing was removed

**SurveyFormDivisionView** (1 change)

* Model SurveyFormDivisionView was removed

**SurveyFormDivisionViewListing** (1 change)

* Model SurveyFormDivisionViewListing was removed

**RecordingEmailMessage** (1 change)

* Property replyTo was removed

**BillingCharge** (4 changes)

* Property getprepaidQuantity was removed
* Property getfairuseQuantity was removed
* Property getactualQuantity was removed
* Property getoverageQuantity was removed

**BillingContract** (1 change)

* Property getpurchaseOrderNumbers was removed

**InvoiceAddress** (2 changes)

* Property getdateEffective was removed
* Property getcitySubdivision1 was removed


# Minor Changes (72 changes)

**/api/v2/gamification/insights/managers** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/coaching/scheduleslots/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/coaching/scheduleslots/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/learning/scheduleslots/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/learning/scheduleslots/jobs** (2 changes)

* Path was added
* Operation POST was added

**CopilotAction** (1 change)

* Enum value ThirdPartyAction was added to property actionType

**CopilotFallbackAction** (1 change)

* Enum value ThirdPartyAction was added to property actionType

**ConversationAttributeFilter** (1 change)

* Model was added

**ConversationSchemaAttribute** (1 change)

* Model was added

**ConversationSchemaData** (1 change)

* Model was added

**ConversationSchemaReference** (1 change)

* Model was added

**KnowledgeSetting** (1 change)

* Model was added

**KnowledgeSuggestionConfig** (1 change)

* Enum value GenesysKnowledgeV3 was added to property vendorName

**UserCustomAttributes** (1 change)

* Model was added

**EvaluationQuestion** (1 change)

* Optional property defaultAnswer was added

**EvaluationQuestionGroup** (1 change)

* Optional property defaultAnswersTo was added

**EvaluationSource** (1 change)

* Enum value Program was added to property type

**PhoneNumberColumn** (1 change)

* Optional property callableTimeColumnName was added

**SuggestedSearchChunk** (1 change)

* Model was added

**Suggestion** (1 change)

* Enum value SuggestedKnowledgeAnswer was added to property type

**SuggestionGeneratedKnowledgeAnswer** (1 change)

* Model was added

**ReplacementTerm** (2 changes)

* Enum value APPLE_MESSAGES was added to property type
* Enum value EXTERNAL_ID was added to property type

**SocialHandle** (1 change)

* Enum value APPLE_MESSAGES was added to property type

**DependencyStatus** (1 change)

* Enum value BUILDQUEUED was added to property status

**IpFilter** (2 changes)

* Optional property ipAddress was added
* Optional property name was added

**TrackingSettings** (4 changes)

* Optional property excludedQueryParameters was added
* Optional property shouldKeepUrlFragment was added
* Optional property searchQueryParameters was added
* Optional property ipFilters was added

**DeploymentIdentityResolutionConfig** (2 changes)

* Optional property externalSource was added
* Optional property automerge was added

**StaffingRequirementsPlanningGroupData** (2 changes)

* Optional property minimumStaffPerInterval was added
* Optional property effectiveStaffPerInterval was added

**TimeOffSettingsResponse** (2 changes)

* Optional property submissionRangeType was added
* Optional property submissionLatestDate was added

**TimeOffSettingsRequest** (2 changes)

* Optional property submissionRangeType was added
* Optional property submissionLatestDate was added

**CapacityPlanStaffingGroupMetricChangeResponse** (2 changes)

* Enum value TransfersFullTimeEquivalentCount was added to property metric
* Enum value ExtraTimeUnderTimeFullTimeEquivalentCount was added to property metric

**TransfersFullTimeEquivalent** (1 change)

* Model was added

**CreateCapacityPlanStaffingGroupMetricChangeRequest** (2 changes)

* Enum value TransfersFullTimeEquivalentCount was added to property metric
* Enum value ExtraTimeUnderTimeFullTimeEquivalentCount was added to property metric

**StaffingGroupMetricChangeResponse** (2 changes)

* Enum value TransfersFullTimeEquivalentCount was added to property metric
* Enum value ExtraTimeUnderTimeFullTimeEquivalentCount was added to property metric

**CoachingScheduleSlotsJobResponse** (1 change)

* Model was added

**CoachingScheduleSlotsJobResult** (1 change)

* Model was added

**CoachingScheduleSlotsJobSchedule** (1 change)

* Model was added

**CoachingScheduleSlotsJobSlot** (1 change)

* Model was added

**CoachingScheduleSlotsJobRequest** (1 change)

* Model was added

**LearningScheduleSlotsJobResponse** (1 change)

* Model was added

**LearningScheduleSlotsJobResult** (1 change)

* Model was added

**LearningScheduleSlotsJobSchedule** (1 change)

* Model was added

**LearningScheduleSlotsJobSlot** (1 change)

* Model was added

**LearningScheduleSlotsJobRequest** (1 change)

* Model was added

**BillingCharge** (4 changes)

* Optional property prepaidQuantity was added
* Optional property fairuseQuantity was added
* Optional property actualQuantity was added
* Optional property overageQuantity was added

**BillingContract** (1 change)

* Optional property purchaseOrderNumbers was added

**InvoiceAddress** (2 changes)

* Optional property dateEffective was added
* Optional property citySubdivision1 was added

**AgentGreeting** (2 changes)

* Optional property inboundPromptDefaultLanguage was added
* Optional property outboundPromptDefaultLanguage was added

**SelfAgentGreeting** (2 changes)

* Optional property inboundPromptDefaultLanguage was added
* Optional property outboundPromptDefaultLanguage was added


# Point Changes (1 change)

**POST /api/v2/conversations/messages/{conversationId}/messages/bulk** (1 change)

* Description was changed
