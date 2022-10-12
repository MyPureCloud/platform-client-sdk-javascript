Platform API version: 6216


# Major Changes (9 changes)

**GET /api/v2/conversations/messages/{messageId}/details** (1 change)

* Parameter useNormalizedMessage was added

**POST /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages** (1 change)

* Parameter useNormalizedMessage was added

**POST /api/v2/conversations/messages/{conversationId}/messages/bulk** (1 change)

* Parameter useNormalizedMessage was added

**GET /api/v2/conversations/messages/{conversationId}/messages/{messageId}** (1 change)

* Parameter useNormalizedMessage was added

**GET /api/v2/webdeployments/deployments** (1 change)

* Response 200 type was changed from WebDeploymentEntityListing to ExpandableWebDeploymentEntityListing

**IntegrationConfigurationCredential** (1 change)

* Model IntegrationConfigurationCredential was removed

**WebDeploymentEntityListing** (1 change)

* Model WebDeploymentEntityListing was removed

**IntegrationConfiguration** (1 change)

* Property credentials was changed from Map<object, IntegrationConfigurationCredential> to Map<object, CredentialInfo>

**WebDeployment** (1 change)

* Property configuration was changed from WebDeploymentConfigurationVersion to WebDeploymentConfigurationVersionEntityRef


# Minor Changes (165 changes)

**/api/v2/events/conversations** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/events/users/routingstatus** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/events/users/presence** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/bulk/contacts/unresolved** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/contacts/{contactId}/promotion** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/contacts/{contactId}/identifiers** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/externalcontacts/merge/contacts** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/identifierlookup** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/contacts/{contactId}/unresolved** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/emails/agentless** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/downloads/{downloadId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/presence/sources/{sourceId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/presence/sources** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/presence/users/{userId}/primarysource** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/routing/email/outbound/domains/{domainId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/routing/email/outbound/domains/{domainId}/search** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/email/outbound/domains/{domainId}/activation** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/routing/email/outbound/domains** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/routing/email/outbound/domains/simulated** (2 changes)

* Path was added
* Operation POST was added

**BatchEventResponse** (1 change)

* Model was added

**EventError** (1 change)

* Model was added

**AudioState** (1 change)

* Model was added

**AudioUpdatedEvent** (1 change)

* Model was added

**BatchConversationEventRequest** (1 change)

* Model was added

**CommunicationAnsweredEvent** (1 change)

* Model was added

**CommunicationDispositionAppliedEvent** (1 change)

* Model was added

**CommunicationEndedEvent** (1 change)

* Model was added

**ConsultTransferEvent** (1 change)

* Model was added

**EndConsultTransferEvent** (1 change)

* Model was added

**EndTransferEvent** (1 change)

* Model was added

**ExternalEstablishedEvent** (1 change)

* Model was added

**HoldUpdatedEvent** (1 change)

* Model was added

**InitialConfiguration** (1 change)

* Model was added

**IvrEstablishedEvent** (1 change)

* Model was added

**PhoneEstablishedEvent** (1 change)

* Model was added

**PhoneTransferEvent** (1 change)

* Model was added

**ProgressConsultTransferEvent** (1 change)

* Model was added

**ProgressTransferEvent** (1 change)

* Model was added

**RoutingEstablishedEvent** (1 change)

* Model was added

**RoutingTransferEvent** (1 change)

* Model was added

**SourceConfiguration** (1 change)

* Model was added

**UserEstablishedEvent** (1 change)

* Model was added

**UserTransferEvent** (1 change)

* Model was added

**BatchUserRoutingStatusEventRequest** (1 change)

* Model was added

**UserRoutingStatusEvent** (1 change)

* Model was added

**BatchUserPresenceEventRequest** (1 change)

* Model was added

**UserPresenceEvent** (1 change)

* Model was added

**StatisticalSummary** (2 changes)

* Optional property p95 was added
* Optional property p99 was added

**AnalyticsSession** (2 changes)

* Optional property bcc was added
* Optional property cc was added

**ConversationQuery** (1 change)

* Enum value unordered was added to property order

**AsyncConversationQuery** (1 change)

* Enum value unordered was added to property order

**UserDetailsQuery** (1 change)

* Enum value unordered was added to property order

**AsyncUserDetailsQuery** (1 change)

* Enum value unordered was added to property order

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value AgentConfig was added to property serviceName

**AuditQueryRequest** (1 change)

* Enum value AgentConfig was added to property serviceName

**AuditLogMessage** (10 changes)

* Enum value AgentConfig was added to property serviceName
* Enum value DefaultPanelSettings was added to property entityType
* Enum value DirectoryGroup was added to property entityType
* Enum value GdprRequest was added to property entityType
* Enum value KnowledgeLabel was added to property entityType
* Enum value SkillsGroup was added to property entityType
* Optional property application was added
* Optional property initiatingAction was added
* Optional property transactionInitiator was added
* Optional property entityChanges was added

**EntityChange** (1 change)

* Model was added

**InitiatingAction** (1 change)

* Model was added

**AuditRealtimeQueryRequest** (1 change)

* Enum value AgentConfig was added to property serviceName

**AuditQueryEntity** (5 changes)

* Enum value DefaultPanelSettings was added to property name
* Enum value DirectoryGroup was added to property name
* Enum value GdprRequest was added to property name
* Enum value KnowledgeLabel was added to property name
* Enum value SkillsGroup was added to property name

**AuditQueryService** (1 change)

* Enum value AgentConfig was added to property name

**InboundRoute** (1 change)

* Optional property signature was added

**Signature** (1 change)

* Model was added

**ContactIdentifier** (1 change)

* Model was added

**IdentifierClaimRequest** (1 change)

* Model was added

**MergeRequest** (1 change)

* Model was added

**ConversationMessageMetadata** (1 change)

* Enum value Message was added to property type

**ConversationMessageMetadataContent** (2 changes)

* Enum value Text was added to property contentType
* Enum value QuickReplyV2 was added to property contentType

**AgentlessEmailSendResponseDto** (1 change)

* Model was added

**AgentlessEmailSendRequestDto** (1 change)

* Model was added

**ConversationContentQuickReplyV2** (1 change)

* Model was added

**ConversationContentText** (1 change)

* Model was added

**ConversationMessageContent** (4 changes)

* Enum value Text was added to property contentType
* Enum value QuickReplyV2 was added to property contentType
* Optional property text was added
* Optional property quickReplyV2 was added

**ConversationNormalizedMessage** (1 change)

* Enum value Message was added to property type

**EmailColumn** (1 change)

* Optional property contactableTimeColumn was added

**MessagingCampaign** (1 change)

* Optional property ruleSets was added

**DocumentQuery** (1 change)

* Model was added

**DocumentQueryClause** (1 change)

* Model was added

**DocumentQueryInterval** (1 change)

* Model was added

**DocumentQueryPredicate** (1 change)

* Model was added

**KnowledgeDocumentSearchRequest** (4 changes)

* Optional property interval was added
* Optional property filter was added
* Optional property sortOrder was added
* Optional property sortBy was added

**KnowledgeDocumentSuggestionRequest** (2 changes)

* Optional property interval was added
* Optional property filter was added

**ContentQuickReplyV2** (1 change)

* Model was added

**ContentText** (1 change)

* Model was added

**MessageContent** (4 changes)

* Enum value Text was added to property contentType
* Enum value QuickReplyV2 was added to property contentType
* Optional property text was added
* Optional property quickReplyV2 was added

**KnowledgeGuestDocumentSuggestionRequest** (1 change)

* Model was added

**Source** (1 change)

* Model was added

**SourceEntityListing** (1 change)

* Model was added

**UserPrimarySource** (1 change)

* Model was added

**RecordingJobsQuery** (2 changes)

* Optional property includeRecordingsWithSensitiveData was added
* Optional property clearExport was added

**VerificationResult** (1 change)

* Model was added

**OutboundDomain** (1 change)

* Model was added

**DnsRecordEntry** (1 change)

* Model was added

**EmailOutboundDomainResult** (1 change)

* Model was added

**OutboundDomainEntityListing** (1 change)

* Model was added

**PostTextMessage** (1 change)

* Enum value Message was added to property type

**VoicemailGroupPolicy** (1 change)

* Optional property languagePreference was added

**VoicemailOrganizationPolicy** (1 change)

* Optional property includeEmailTranscriptions was added

**WebDeploymentConfigurationVersion** (1 change)

* Optional property headlessMode was added

**WebDeploymentHeadlessMode** (1 change)

* Model was added

**WebDeploymentConfigurationVersionEntityRef** (1 change)

* Model was added

**ExpandableWebDeployment** (1 change)

* Model was added

**ExpandableWebDeploymentEntityListing** (1 change)

* Model was added

**WebDeploymentConfigurationVersionResponse** (1 change)

* Model was added

**WebMessagingAttachment** (1 change)

* Enum value Link was added to property mediaType

**WebMessagingRecipient** (1 change)

* Optional property image was added

**ScheduleActivity** (1 change)

* Enum value Learning was added to property externalActivityType

**LearningModuleJobRequest** (3 changes)

* Enum value GracefulArchive was added to property action
* Enum value ImmediateArchive was added to property action
* Enum value Unarchive was added to property action

**BuAgentScheduleActivity** (1 change)

* Enum value Learning was added to property externalActivityType


# Point Changes (1 change)

**POST /api/v2/recording/jobs** (1 change)

* Description was changed
