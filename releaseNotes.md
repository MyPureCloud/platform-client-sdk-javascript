Platform API version: 3279


# Major Changes (9 changes)

**GET /api/v2/architect/dependencytracking/consumingresources** (1 change)

* Parameter flowFilter was added

**GET /api/v2/scripts/published** (1 change)

* Parameter scriptId was removed

**/api/v2/license/organization** (1 change)

* Operation GET was removed

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules** (3 changes)

* Parameter includeOnlyPublished was added
* Parameter earliestWeekDate was added
* Parameter latestWeekDate was added

**AddressableEntityUser** (1 change)

* Model AddressableEntityUser was removed

**LicenseOrganization** (1 change)

* Model LicenseOrganization was removed

**Agent** (1 change)

* Property stage was removed


# Minor Changes (63 changes)

**/api/v2/users/externalid/{authorityName}/{externalKey}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/{userId}/externalid/{authorityName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/{userId}/externalid** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/users/{userId}/externalid/{authorityName}/{externalKey}** (2 changes)

* Path was added
* Operation DELETE was added

**LocationDefinition** (1 change)

* Optional property notes was added

**Trunk** (9 changes)

* Optional property logicalInterface was added
* Optional property connectedStatus was added
* Optional property optionsStatus was added
* Optional property registersStatus was added
* Optional property ipStatus was added
* Optional property optionsEnabledStatus was added
* Optional property registersEnabledStatus was added
* Optional property family was added
* Optional property proxyAddressList was added

**PhoneCapabilities** (1 change)

* Optional property mediaCodecs was added

**Agent** (2 changes)

* Optional property id was added
* Optional property selfUri was added

**ConversationRoutingData** (1 change)

* Model was added

**FlowDiagnosticInfo** (1 change)

* Model was added

**Participant** (1 change)

* Optional property conversationRoutingData was added

**ScoredAgent** (1 change)

* Model was added

**Skill** (1 change)

* Model was added

**Survey** (1 change)

* Optional property surveyErrorDetails was added

**SurveyErrorDetails** (1 change)

* Model was added

**CallbackMediaParticipant** (1 change)

* Optional property conversationRoutingData was added

**AnalyticsQueryPredicate** (3 changes)

* Enum value scoredAgentId was added to property dimension
* Enum value agentScore was added to property dimension
* Enum value provider was added to property dimension

**ChatMessage** (2 changes)

* Optional property senderCommunicationId was added
* Optional property participantPurpose was added

**Recording** (2 changes)

* Optional property outputDurationMs was added
* Optional property outputSizeInBytes was added

**BusinessUnitReference** (1 change)

* Model was added

**ManagementUnit** (1 change)

* Optional property businessUnit was added

**Manager** (1 change)

* Optional property externalId was added

**ScimV2User** (1 change)

* Optional property externalId was added

**ScimV2CreateUser** (1 change)

* Optional property externalId was added

**AggregationQuery** (3 changes)

* Enum value scoredAgentId was added to property groupBy
* Enum value agentScore was added to property groupBy
* Enum value provider was added to property groupBy

**AnalyticsConversationSegment** (1 change)

* Optional property scoredAgents was added

**AnalyticsScoredAgent** (1 change)

* Model was added

**AnalyticsSession** (1 change)

* Optional property provider was added

**SystemPromptAsset** (1 change)

* Enum value transcodeFailed was added to property uploadStatus

**ObservationValue** (1 change)

* Optional property scoredAgents was added

**EmailMediaParticipant** (1 change)

* Optional property conversationRoutingData was added

**MessageMediaParticipant** (1 change)

* Optional property conversationRoutingData was added

**TimeOffRequestNotification** (1 change)

* Model was added

**WfmUserNotification** (2 changes)

* Enum value TimeOffRequest was added to property type
* Optional property timeOffRequest was added

**CallMediaParticipant** (1 change)

* Optional property conversationRoutingData was added

**ReportingExportJobResponse** (2 changes)

* Enum value REACHED_MAXIMUM_ATTEMPT_OF_RETRY was added to property exportErrorMessagesType
* Enum value FAILED_LONG_RUNNING_EXPORT was added to property exportErrorMessagesType

**ChatMediaParticipant** (1 change)

* Optional property conversationRoutingData was added

**UserExternalIdentifier** (1 change)

* Model was added

**CobrowseMediaParticipant** (1 change)

* Optional property conversationRoutingData was added

**ParticipantBasic** (1 change)

* Optional property conversationRoutingData was added

**LocationUpdateDefinition** (1 change)

* Optional property notes was added


# Point Changes (0 changes)
