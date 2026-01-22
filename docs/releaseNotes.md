Platform API version: 9959




# Major Changes (5 changes)

**GET /api/v2/speechandtextanalytics/dictionaryfeedback** (1 change)

* Parameter transcriptionEngine was added

**GET /api/v2/speechandtextanalytics/programs** (3 changes)

* Parameter name was added
* Parameter sortBy was added
* Parameter sortOrder was added

**GET /api/v2/users/rules** (1 change)

* Parameter enabled was added


# Minor Changes (45 changes)

**/api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/postflowaction** (3 changes)

* Path was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/quality/forms/evaluations/bulk** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/quality/evaluations/search** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/quality/surveys** (2 changes)

* Path was added
* Operation POST was added

**EvaluationForm** (1 change)

* Optional property latestVersionFormName was added

**MandatoryPostCallActionInput** (1 change)

* Model was added

**ConversationRecipientAdditionalIdentifier** (1 change)

* Enum value PhoneNumber was added to property type

**EvaluationFormResponse** (1 change)

* Optional property latestVersionFormName was added

**EvaluationResponse** (3 changes)

* Optional property createdDate was added
* Optional property submittedDate was added
* Optional property divisionIds was added

**EvaluationSearchAggregationBucket** (1 change)

* Model was added

**EvaluationSearchAggregationResponse** (1 change)

* Model was added

**EvaluationSearchResponse** (1 change)

* Model was added

**EvaluationSearchAggregationDTO** (1 change)

* Model was added

**EvaluationSearchCriteriaDTO** (1 change)

* Model was added

**EvaluationSearchRequestDTO** (1 change)

* Model was added

**EvaluationSearchSubAggregationDTO** (1 change)

* Model was added

**QueryApiSearchAggregationRange** (1 change)

* Model was added

**CreateSurveyRequest** (1 change)

* Model was added

**AlertRequest** (1 change)

* Enum value Close was added to property type

**CommonAlertBulkUpdateRequest** (1 change)

* Enum value Close was added to property type

**CommonAllAlertUpdateRequest** (1 change)

* Enum value Close was added to property type

**CreateRoutingSkill** (1 change)

* Model was added

**OpenSocialMediaRecipientAdditionalIdentifier** (1 change)

* Enum value PhoneNumber was added to property type

**DictionaryFeedback** (3 changes)

* Optional property transcriptionEngine was added
* Optional property status was added
* Optional property displayAs was added

**ListedDictionaryFeedback** (3 changes)

* Optional property transcriptionEngine was added
* Optional property status was added
* Optional property displayAs was added

**BuCopyScheduleRequest** (1 change)

* Optional property includeForecast was added

**UpdateCoachingAppointmentRequest** (1 change)

* Optional property addToSchedule was added

**CreateCoachingAppointmentRequest** (1 change)

* Optional property addToSchedule was added

**LearningModule** (1 change)

* Optional property autoAssign was added

**LearningAssignmentCreate** (1 change)

* Optional property addToSchedule was added

**LearningAssignmentReschedule** (1 change)

* Optional property addToSchedule was added

**LearningAssignmentReassign** (1 change)

* Optional property addToSchedule was added

**AssignedLearningModule** (1 change)

* Optional property autoAssign was added

**LearningModuleRequest** (1 change)

* Optional property autoAssign was added


# Point Changes (1 change)

**GET /api/v2/externalcontacts/contacts/{contactId}/notes** (1 change)

* Description was changed for parameter expand
