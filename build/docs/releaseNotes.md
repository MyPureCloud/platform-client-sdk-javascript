Platform API version: 6814


# Major Changes (10 changes)

**POST /api/v2/oauth/clients/{clientId}/usage/query** (1 change)

* Tag Usage was added

**GET /api/v2/oauth/clients/{clientId}/usage/summary** (1 change)

* Tag Usage was added

**GET /api/v2/oauth/clients/{clientId}/usage/query/results/{executionId}** (1 change)

* Tag Usage was added

**GET /api/v2/routing/wrapupcodes** (1 change)

* Parameter id was added

**ExtendedWrapup** (1 change)

* Model ExtendedWrapup was removed

**JourneyAggregateQueryPredicate** (2 changes)

* Enum value journeyCustomerId was removed from property dimension
* Enum value journeyCustomerIdType was removed from property dimension

**JourneyAggregationQuery** (2 changes)

* Enum value journeyCustomerId was removed from property groupBy
* Enum value journeyCustomerIdType was removed from property groupBy

**MediaParticipantRequest** (1 change)

* Property wrapup was changed from ExtendedWrapup to WrapupInput


# Minor Changes (37 changes)

**/api/v2/conversations/aftercallwork/{conversationId}/participants/{participantId}/communications/{communicationId}** (2 changes)

* Path was added
* Operation PATCH was added

**AnalyticsEvaluation** (1 change)

* Optional property assigneeId was added

**EvaluationDetailQueryPredicate** (1 change)

* Enum value assigneeId was added to property dimension

**ViewFilter** (4 changes)

* Optional property isAnalyzedForSensitiveData was added
* Optional property hasSensitiveData was added
* Optional property subPath was added
* Optional property userState was added

**AuditLogMessage** (4 changes)

* Enum value Grammar was added to property entityType
* Enum value GrammarLanguage was added to property entityType
* Enum value SkillGroupDefinition was added to property entityType
* Enum value StaffingGroup was added to property entityType

**EntityChange** (4 changes)

* Enum value Grammar was added to property entityType
* Enum value GrammarLanguage was added to property entityType
* Enum value SkillGroupDefinition was added to property entityType
* Enum value StaffingGroup was added to property entityType

**AuditQueryEntity** (4 changes)

* Enum value Grammar was added to property name
* Enum value GrammarLanguage was added to property name
* Enum value SkillGroupDefinition was added to property name
* Enum value StaffingGroup was added to property name

**UserReferenceWithName** (1 change)

* id is no longer readonly

**Evaluation** (1 change)

* Optional property assigned was added

**EvaluationReference** (1 change)

* Model was added

**Message** (1 change)

* Optional property byoSmsIntegrationId was added

**AfterCallWorkUpdate** (1 change)

* Model was added

**WrapupInput** (1 change)

* Model was added

**ConversationNormalizedMessage** (1 change)

* Optional property byoSmsIntegrationId was added

**MessageMediaParticipant** (1 change)

* Optional property monitoredParticipantId was added

**DigitalCondition** (1 change)

* Optional property dataActionConditionSettings was added

**OrganizationPresenceDefinition** (1 change)

* Model was added

**EvaluationResponse** (1 change)

* Optional property assigned was added

**UserMe** (1 change)

* Optional property divisionedPresenceDefinitions was added

**FileUploadSettings** (2 changes)

* Optional property enableAttachments was added
* Optional property useSupportedContentProfile was added

**SupportedContentProfile** (1 change)

* Model was added

**WebDeployment** (1 change)

* Optional property supportedContentProfile was added

**ExpandableWebDeployment** (1 change)

* Optional property supportedContentProfile was added


# Point Changes (1 change)

**GET /api/v2/audits/query/{transactionId}/results** (1 change)

* Description was changed for parameter pageSize
