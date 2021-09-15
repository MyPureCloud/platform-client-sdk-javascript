Platform API version: 5002


# Major Changes (14 changes)

**PUT /api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/uuidata** (1 change)

* Response 204 was removed

**GET /api/v2/gamification/scorecards/values/trends** (1 change)

* Parameter referenceWorkday was added

**HEAD /api/v2/notifications/channels/{channelId}** (1 change)

* Response 200 was removed

**GET /api/v2/speechandtextanalytics/topics** (2 changes)

* Parameter sortBy was added
* Parameter sortOrder was added

**AssignmentGroup** (1 change)

* Model AssignmentGroup was removed

**Metric** (1 change)

* Property dateCreated was changed from string to integer

**PerformanceProfile** (1 change)

* active has been made readonly

**DevelopmentActivityAggregateQueryResponseStatistics** (3 changes)

* Property min was changed from integer to number
* Property max was changed from integer to number
* Property sum was changed from integer to number

**LearningAssignmentAggregateQueryResponseStats** (3 changes)

* Property min was changed from integer to number
* Property max was changed from integer to number
* Property sum was changed from integer to number


# Minor Changes (93 changes)

**/api/v2/analytics/reporting/settings** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/conversations/messages/{messageId}/details** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/flows/datatables/divisionviews/{datatableId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/flows/datatables/divisionviews** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/profiles** (1 change)

* Operation post was added. Summary: Create a new custom performance profile

**/api/v2/journey/sessions/{sessionId}/outcomescores** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/sessions/{sessionId}** (2 changes)

* Path was added
* Operation GET was added

**HEAD /api/v2/notifications/channels/{channelId}** (1 change)

* Response default was added

**POST /api/v2/users/development/activities/aggregates/query** (1 change)

* Response 501 was added

**POST /api/v2/learning/assignments/aggregates/query** (1 change)

* Response 501 was added

**ReportingTurnAction** (1 change)

* Enum value GetExternalOrganizationAction was added to property actionType

**AnalyticsReportingSettings** (1 change)

* Model was added

**ViewFilter** (4 changes)

* Enum value Assessment was added to property developmentTypeList
* Enum value AssessedContent was added to property developmentTypeList
* Optional property isAgentOwnedCallback was added
* Optional property agentCallbackOwnerIds was added

**ReportingExportJobResponse** (2 changes)

* Enum value FLOW_MILESTONE_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value FLOW_MILESTONE_PERFORMANCE_INTERVAL_DETAIL_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (2 changes)

* Enum value FLOW_MILESTONE_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value FLOW_MILESTONE_PERFORMANCE_INTERVAL_DETAIL_VIEW was added to property viewType

**ReportingExportJobRequest** (2 changes)

* Enum value FLOW_MILESTONE_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value FLOW_MILESTONE_PERFORMANCE_INTERVAL_DETAIL_VIEW was added to property viewType

**FieldList** (1 change)

* Optional property gdpr was added

**AuditLogMessage** (2 changes)

* Enum value Verify was added to property action
* Enum value Location was added to property entityType

**AuditQueryEntity** (2 changes)

* Enum value Location was added to property name
* Enum value Verify was added to property actions

**MemberGroup** (1 change)

* Model was added

**Queue** (2 changes)

* Optional property emailInQueueFlow was added
* Optional property messageInQueueFlow was added

**DataSchema** (1 change)

* id is no longer readonly

**Message** (2 changes)

* Optional property authenticated was added
* Optional property agentAssistantId was added

**ConversationReason** (1 change)

* Enum value RecipientOptedOut was added to property code

**MessageData** (1 change)

* Optional property conversationId was added

**MessageMediaParticipant** (1 change)

* Optional property authenticated was added

**PerformanceProfile** (1 change)

* Optional property memberCount was added

**Metrics** (4 changes)

* Optional property linkedMetric was added
* Optional property dateCreated was added
* Optional property dateUnlinked was added
* Optional property sourcePerformanceProfile was added

**CreatePerformanceProfile** (1 change)

* Model was added

**CustomEventAttribute** (1 change)

* Model was added

**CustomEventAttributeList** (1 change)

* Model was added

**Browser** (1 change)

* Model was added

**Device** (1 change)

* Model was added

**JourneyCampaign** (1 change)

* Model was added

**JourneyGeolocation** (1 change)

* Model was added

**JourneyPage** (1 change)

* Model was added

**Referrer** (1 change)

* Model was added

**OutcomeEventScore** (1 change)

* Model was added

**OutcomeScoresResult** (1 change)

* Model was added

**AchievedOutcome** (1 change)

* Model was added

**AssignedSegment** (1 change)

* Model was added

**ConnectedQueue** (1 change)

* Model was added

**ConnectedUser** (1 change)

* Model was added

**ConversationChannel** (1 change)

* Model was added

**ConversationUserDisposition** (1 change)

* Model was added

**OutcomeAchievement** (1 change)

* Model was added

**Session** (1 change)

* Model was added

**SessionLastEvent** (1 change)

* Model was added

**SessionSegmentAssignment** (1 change)

* Model was added

**CustomerInteractionCenter** (1 change)

* Optional property relyingPartyIdentifier was added

**Okta** (1 change)

* Optional property relyingPartyIdentifier was added

**OneLogin** (1 change)

* Optional property relyingPartyIdentifier was added

**PureEngage** (1 change)

* Optional property relyingPartyIdentifier was added

**Salesforce** (1 change)

* Optional property relyingPartyIdentifier was added

**QueueRequest** (2 changes)

* Optional property emailInQueueFlow was added
* Optional property messageInQueueFlow was added

**UserQueue** (2 changes)

* Optional property emailInQueueFlow was added
* Optional property messageInQueueFlow was added

**CreateQueueRequest** (2 changes)

* Optional property emailInQueueFlow was added
* Optional property messageInQueueFlow was added

**Predictor** (1 change)

* Optional property errorCode was added

**PredictorSchedule** (1 change)

* Enum value OngoingValueMonitoring was added to property scheduleType

**GeneralProgramJobRequest** (5 changes)

* Enum value fr-FR was added to property dialect
* Enum value fr-CA was added to property dialect
* Enum value it-IT was added to property dialect
* Enum value de-DE was added to property dialect
* Enum value pt-BR was added to property dialect

**TopicsEntityListing** (1 change)

* Optional property total was added

**TextBotPromptSegment** (2 changes)

* Enum value RichMedia was added to property type
* Optional property content was added

**CobrowseSettings** (1 change)

* Model was added

**WebDeploymentConfigurationVersion** (1 change)

* Optional property cobrowse was added

**DevelopmentActivityAggregateQueryRequestPredicate** (1 change)

* Enum value isPassed was added to property dimension

**LearningAssignmentAggregateQueryRequestPredicate** (1 change)

* Enum value isPassed was added to property dimension


# Point Changes (7 changes)

**GET /api/v2/conversations/messages/{conversationId}/messages/{messageId}** (1 change)

* Summary was changed

**GET /api/v2/gamification/scorecards/points/average** (1 change)

* Summary was changed

**GET /api/v2/gamification/scorecards/values/average** (1 change)

* Summary was changed

**GET /api/v2/gamification/scorecards/users/{userId}/values/trends** (1 change)

* Summary was changed

**HEAD /api/v2/notifications/channels/{channelId}** (1 change)

* Description was changed

**GET /api/v2/speechandtextanalytics/topics** (1 change)

* Description was changed for parameter state

**GET /api/v2/users** (1 change)

* Description was changed for parameter integrationPresenceSource
