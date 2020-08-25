Platform API version: 4158


# Major Changes (5 changes)

**GET /api/v2/coaching/notifications/{notificationId}** (1 change)

* Parameter expand was added

**GET /api/v2/coaching/notifications** (1 change)

* Parameter expand was added

**AnalyticsParticipantWithoutAttributes** (1 change)

* Property agentAssistantIds was removed

**AnalyticsParticipant** (1 change)

* Property agentAssistantIds was removed

**CoachingNotification** (1 change)

* Property appointment was changed from CoachingAppointmentReference to CoachingAppointmentResponse


# Minor Changes (15 changes)

**/api/v2/speechandtextanalytics/conversations/{conversationId}/communications/{communicationId}/transcripturl** (2 changes)

* Path was added
* Operation GET was added

**IntentFeedback** (1 change)

* Enum value Disabled was added to property assessment

**ScimConfigResourceType** (1 change)

* Optional property meta was added

**ScimMetadata** (1 change)

* Model was added

**Recording** (1 change)

* Optional property recordingFileRole was added

**TranscriptUrl** (1 change)

* Model was added

**ScimV2SchemaDefinition** (1 change)

* Optional property meta was added

**AvailableTopic** (1 change)

* Optional property transports was added

**ScimServiceProviderConfig** (1 change)

* Optional property meta was added

**ViewFilter** (2 changes)

* Optional property usedRoutingTypes was added
* Optional property requestedRoutingTypes was added

**ScimV2User** (1 change)

* Optional property meta was added

**ScimV2Group** (1 change)

* Optional property meta was added

**ScheduleGenerationMessage** (1 change)

* Enum value UnableToProduceAgentSchedule was added to property type


# Point Changes (5 changes)

**GET /api/v2/integrations/actions/categories** (1 change)

* Description was changed for parameter sortBy

**GET /api/v2/users/{userId}/presences/purecloud** (2 changes)

* Description was changed
* Summary was changed

**PATCH /api/v2/users/{userId}/presences/purecloud** (1 change)

* Summary was changed

**GET /api/v2/users/{userId}/presences/microsoftteams** (1 change)

* Description was changed
