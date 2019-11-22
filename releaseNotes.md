Platform API version: 3616


# Major Changes (19 changes)

**/api/v2/users/{userId}/externalid/{authorityName}** (1 change)

* Path /api/v2/users/{userId}/externalid/{authorityName} was removed

**/api/v2/users/{userId}/externalid** (1 change)

* Path /api/v2/users/{userId}/externalid was removed

**/api/v2/users/{userId}/externalid/{authorityName}/{externalKey}** (1 change)

* Path /api/v2/users/{userId}/externalid/{authorityName}/{externalKey} was removed

**/api/v2/users/externalid/{authorityName}/{externalKey}** (1 change)

* Path /api/v2/users/externalid/{authorityName}/{externalKey} was removed

**GET /api/v2/flows/divisionviews** (1 change)

* Parameter includeSchemas was added

**GET /api/v2/routing/queues** (1 change)

* Parameter active was removed

**LocationCreateUpdateDefinition** (1 change)

* Model LocationCreateUpdateDefinition was removed

**UserExternalIdentifier** (1 change)

* Model UserExternalIdentifier was removed

**EvaluationAggregationQuery** (11 changes)

* Enum value calibrationId was removed from property alternateTimeDimension
* Enum value contextId was removed from property alternateTimeDimension
* Enum value conversationId was removed from property alternateTimeDimension
* Enum value divisionId was removed from property alternateTimeDimension
* Enum value evaluationId was removed from property alternateTimeDimension
* Enum value evaluatorId was removed from property alternateTimeDimension
* Enum value formId was removed from property alternateTimeDimension
* Enum value queueId was removed from property alternateTimeDimension
* Enum value rescind was removed from property alternateTimeDimension
* Enum value rescored was removed from property alternateTimeDimension
* Enum value userId was removed from property alternateTimeDimension


# Minor Changes (39 changes)

**/api/v2/recordings/deletionprotection** (3 changes)

* Path was added
* Operation POST was added
* Operation PUT was added

**DomainLogicalInterface** (3 changes)

* Optional property useForIndirectEdgeCommunication was added
* Optional property useForCloudProxyEdgeCommunication was added
* Optional property publicNatIpAddress was added

**Participant** (2 changes)

* Optional property startAcwTime was added
* Optional property endAcwTime was added

**MessageEvaluation** (1 change)

* Model was added

**ConversationAggregationQuery** (1 change)

* Optional property alternateTimeDimension was added

**SurveyAggregationQuery** (1 change)

* Optional property alternateTimeDimension was added

**CallbackMediaParticipant** (2 changes)

* Optional property startAcwTime was added
* Optional property endAcwTime was added

**ReportingExportJobResponse** (1 change)

* Optional property selectedColumns was added

**SelectedColumns** (1 change)

* Model was added

**ReportingExportJobRequest** (1 change)

* Optional property selectedColumns was added

**ChatMediaParticipant** (2 changes)

* Optional property startAcwTime was added
* Optional property endAcwTime was added

**EvaluationAggregationQuery** (1 change)

* Enum value eventTime was added to property alternateTimeDimension

**ParticipantBasic** (2 changes)

* Optional property startAcwTime was added
* Optional property endAcwTime was added

**SubscriptionOverviewUsage** (2 changes)

* Optional property bundleQuantity was added
* Optional property isThirdParty was added

**UserAggregationQuery** (1 change)

* Optional property alternateTimeDimension was added

**ConversationDeletionProtectionQuery** (1 change)

* Model was added

**CobrowseMediaParticipant** (2 changes)

* Optional property startAcwTime was added
* Optional property endAcwTime was added

**FlowDivisionView** (2 changes)

* Optional property inputSchema was added
* Optional property outputSchema was added

**SmsPhoneNumber** (1 change)

* Optional property capabilities was added

**EmailMediaParticipant** (2 changes)

* Optional property startAcwTime was added
* Optional property endAcwTime was added

**MessageMediaParticipant** (2 changes)

* Optional property startAcwTime was added
* Optional property endAcwTime was added

**CallMediaParticipant** (2 changes)

* Optional property startAcwTime was added
* Optional property endAcwTime was added

**LocationCreateDefinition** (1 change)

* Model was added

**FlowAggregationQuery** (1 change)

* Optional property alternateTimeDimension was added

**LocationUpdateDefinition** (1 change)

* Model was added


# Point Changes (3 changes)

**PUT /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}** (1 change)

* Description was changed

**GET /api/v2/quality/conversations/{conversationId}/audits** (1 change)

* Description was changed

**PUT /api/v2/conversations/{conversationId}/recordings/{recordingId}** (1 change)

* Description was changed
