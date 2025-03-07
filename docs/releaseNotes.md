Platform API version: 8952




# Major Changes (71 changes)

**/api/v2/alerting/alerts/active** (1 change)

* Path /api/v2/alerting/alerts/active was removed

**/api/v2/alerting/interactionstats/alerts/{alertId}** (1 change)

* Path /api/v2/alerting/interactionstats/alerts/{alertId} was removed

**/api/v2/alerting/interactionstats/alerts** (1 change)

* Path /api/v2/alerting/interactionstats/alerts was removed

**/api/v2/alerting/interactionstats/rules/{ruleId}** (1 change)

* Path /api/v2/alerting/interactionstats/rules/{ruleId} was removed

**/api/v2/alerting/interactionstats/rules** (1 change)

* Path /api/v2/alerting/interactionstats/rules was removed

**/api/v2/alerting/interactionstats/alerts/unread** (1 change)

* Path /api/v2/alerting/interactionstats/alerts/unread was removed

**/api/v2/recordings/screensessions** (1 change)

* Path /api/v2/recordings/screensessions was removed

**POST /api/v2/authorization/divisions/{divisionId}/restore** (1 change)

* Parameter body was made required

**GET /api/v2/externalcontacts/contacts** (1 change)

* Parameter divisionIds was added

**GET /api/v2/externalcontacts/scan/contacts** (1 change)

* Parameter divisionId was added

**GET /api/v2/externalcontacts/organizations** (1 change)

* Parameter divisionIds was added

**GET /api/v2/externalcontacts/scan/organizations** (1 change)

* Parameter divisionId was added

**GET /api/v2/externalcontacts/scan/notes** (1 change)

* Parameter divisionId was added

**GET /api/v2/externalcontacts/scan/relationships** (1 change)

* Parameter divisionId was added

**GET /api/v2/externalcontacts/reversewhitepageslookup** (1 change)

* Parameter divisionId was added

**PUT /api/v2/conversations/cobrowsesessions/{conversationId}/recordingstate** (1 change)

* Has been deprecated

**PUT /api/v2/outbound/campaigns/{campaignId}** (1 change)

* Parameter useMaxCallsPerAgentDecimal was added

**POST /api/v2/outbound/campaigns** (1 change)

* Parameter useMaxCallsPerAgentDecimal was added

**PATCH /api/v2/outbound/settings** (1 change)

* Parameter useMaxCallsPerAgentDecimal was added

**GET /api/v2/integrations/actions/{actionId}/draft** (1 change)

* Parameter flatten was added

**GET /api/v2/integrations/actions/{actionId}** (1 change)

* Parameter flatten was added

**POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/salesforce/{sourceId}/sync** (1 change)

* Parameter body was added

**POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/servicenow/{sourceId}/sync** (1 change)

* Parameter body was added

**GET /api/v2/organizations/limits/namespaces/{namespaceName}/limits/{limitName}/counts** (1 change)

* Has been deprecated

**GET /api/v2/organizations/limits/namespaces/{namespaceName}/counts** (1 change)

* Has been deprecated

**GET /api/v2/conversations/{conversationId}/recordings** (1 change)

* Parameter locale was added

**PUT /api/v2/alerting/alerts/{alertId}** (1 change)

* Response 200 type was changed from UnreadStatus to AlertingUnreadStatus

**ActiveAlertCount** (1 change)

* Model ActiveAlertCount was removed

**InteractionStatsAlert** (1 change)

* Model InteractionStatsAlert was removed

**UnreadStatus** (1 change)

* Model UnreadStatus was removed

**InteractionStatsAlertContainer** (1 change)

* Model InteractionStatsAlertContainer was removed

**InteractionStatsRule** (1 change)

* Model InteractionStatsRule was removed

**InteractionStatsRuleContainer** (1 change)

* Model InteractionStatsRuleContainer was removed

**UnreadMetric** (1 change)

* Model UnreadMetric was removed

**BulkErrorExternalContact** (1 change)

* Model BulkErrorExternalContact was removed

**BulkResponseResultExternalContactExternalContact** (1 change)

* Model BulkResponseResultExternalContactExternalContact was removed

**BulkErrorEntity** (1 change)

* Model BulkErrorEntity was removed

**BulkResponseResultVoidEntity** (1 change)

* Model BulkResponseResultVoidEntity was removed

**BulkResponseResultExternalContactEntity** (1 change)

* Model BulkResponseResultExternalContactEntity was removed

**BulkResponseResultNoteEntity** (1 change)

* Model BulkResponseResultNoteEntity was removed

**BulkErrorNote** (1 change)

* Model BulkErrorNote was removed

**BulkResponseResultNoteNote** (1 change)

* Model BulkResponseResultNoteNote was removed

**BulkErrorExternalOrganization** (1 change)

* Model BulkErrorExternalOrganization was removed

**BulkResponseResultExternalOrganizationExternalOrganization** (1 change)

* Model BulkResponseResultExternalOrganizationExternalOrganization was removed

**BulkResponseResultExternalOrganizationEntity** (1 change)

* Model BulkResponseResultExternalOrganizationEntity was removed

**BulkErrorRelationship** (1 change)

* Model BulkErrorRelationship was removed

**BulkResponseResultRelationshipRelationship** (1 change)

* Model BulkResponseResultRelationshipRelationship was removed

**BulkResponseResultRelationshipEntity** (1 change)

* Model BulkResponseResultRelationshipEntity was removed

**KnowledgeDocumentVersionVariationReference** (1 change)

* Model KnowledgeDocumentVersionVariationReference was removed

**ContentLocation** (1 change)

* Model ContentLocation was removed

**ScreenRecordingSession** (1 change)

* Model ScreenRecordingSession was removed

**ScreenRecordingSessionListing** (1 change)

* Model ScreenRecordingSessionListing was removed

**IdentityProviderEntityListing** (1 change)

* Property entities was changed from CustomProvider[] to SAMLProvider[]

**QueueMediaSettings** (1 change)

* Property message was changed from MediaSettings to MessageMediaSettings

**BulkContactsResponse** (1 change)

* Property results was changed from BulkResponseResultExternalContactExternalContact[] to BulkResponseResultExternalContactExternalContactBulkEntityErrorExternalContact[]

**BulkDeleteResponse** (1 change)

* Property results was changed from BulkResponseResultVoidEntity[] to BulkResponseResultVoidEntityBulkEntityErrorEntity[]

**BulkFetchContactsResponse** (1 change)

* Property results was changed from BulkResponseResultExternalContactEntity[] to BulkResponseResultExternalContactEntityBulkEntityErrorEntity[]

**BulkFetchNotesResponse** (1 change)

* Property results was changed from BulkResponseResultNoteEntity[] to BulkResponseResultNoteEntityBulkEntityErrorEntity[]

**BulkNotesResponse** (1 change)

* Property results was changed from BulkResponseResultNoteNote[] to BulkResponseResultNoteNoteBulkEntityErrorNote[]

**BulkOrganizationsResponse** (1 change)

* Property results was changed from BulkResponseResultExternalOrganizationExternalOrganization[] to BulkResponseResultExternalOrganizationExternalOrganizationBulkEntityErrorExternalOrganization[]

**BulkFetchOrganizationsResponse** (1 change)

* Property results was changed from BulkResponseResultExternalOrganizationEntity[] to BulkResponseResultExternalOrganizationEntityBulkEntityErrorEntity[]

**BulkRelationshipsResponse** (1 change)

* Property results was changed from BulkResponseResultRelationshipRelationship[] to BulkResponseResultRelationshipRelationshipBulkEntityErrorRelationship[]

**BulkFetchRelationshipsResponse** (1 change)

* Property results was changed from BulkResponseResultRelationshipEntity[] to BulkResponseResultRelationshipEntityBulkEntityErrorEntity[]

**ActionOutput** (2 changes)

* Property successSchemaFlattened was changed from JsonSchemaDocument to FlattenedJsonSchemaDocument
* Property errorSchemaFlattened was changed from object to FlattenedJsonSchemaDocument

**FlowPathsElement** (1 change)

* Enum value TransferToUnknown was removed from property type

**JourneyViewJob** (1 change)

* Required property dateCompletionEstimated was added

**KnowledgeDocumentPresentation** (1 change)

* Property documents was changed from KnowledgeDocumentVersionVariationReference[] to PresentedKnowledgeDocument[]

**MessageContent** (2 changes)

* Property location was removed
* Enum value Location was removed from property contentType

**KnowledgeGuestDocumentPresentation** (1 change)

* Property documents was changed from KnowledgeDocumentVersionVariationReference[] to PresentedKnowledgeDocument[]


# Minor Changes (219 changes)

**/api/v2/flows/export/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/flows/export/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/bulk/contacts/divisionviews** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/bulk/organizations/divisionviews** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/scan/contacts/divisionviews/all** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/scan/organizations/divisionviews/all** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/scan/notes/divisionviews/all** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/scan/relationships/divisionviews/all** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messaging/identityresolution/integrations/facebook/{integrationId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/conversations/messaging/identityresolution/integrations/open/{integrationId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/conversations/messaging/identityresolution/integrations/whatsapp/{integrationId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/routing/queues/{queueId}/identityresolution** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/routing/email/domains/{domainName}/routes/{routeId}/identityresolution** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/routing/sms/identityresolution/phonenumbers/{addressId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/architect/ivrs/{ivrId}/identityresolution** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/webdeployments/deployments/{deploymentId}/identityresolution** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**BatchConversationEventRequest** (14 changes)

* Optional property emailBeginTransmittingEvents was added
* Optional property emailCommunicationEndedEvents was added
* Optional property emailExternalEstablishedEvents was added
* Optional property emailFlowEstablishedEvents was added
* Optional property emailRoutingEstablishedEvents was added
* Optional property emailUserEstablishedEvents was added
* Optional property emailCommunicationAnsweredEvents was added
* Optional property emailCommunicationDispositionAppliedEvents was added
* Optional property emailCommunicationSentMessageEvents was added
* Optional property emailHoldUpdatedEvents was added
* Optional property emailEndTransferEvents was added
* Optional property emailProgressTransferEvents was added
* Optional property emailRoutingTransferEvents was added
* Optional property emailUserTransferEvents was added

**ADFS** (6 changes)

* Optional property logoImageData was added
* Optional property nameIdentifierFormat was added
* Optional property ssoBinding was added
* Optional property signAuthnRequests was added
* Optional property providerName was added
* Optional property displayOnLogin was added

**CustomerInteractionCenter** (6 changes)

* Optional property logoImageData was added
* Optional property nameIdentifierFormat was added
* Optional property ssoBinding was added
* Optional property signAuthnRequests was added
* Optional property providerName was added
* Optional property displayOnLogin was added

**GSuite** (6 changes)

* Optional property logoImageData was added
* Optional property nameIdentifierFormat was added
* Optional property ssoBinding was added
* Optional property signAuthnRequests was added
* Optional property providerName was added
* Optional property displayOnLogin was added

**GenericSAML** (4 changes)

* Optional property ssoBinding was added
* Optional property signAuthnRequests was added
* Optional property providerName was added
* Optional property displayOnLogin was added

**IdentityNow** (6 changes)

* Optional property logoImageData was added
* Optional property nameIdentifierFormat was added
* Optional property ssoBinding was added
* Optional property signAuthnRequests was added
* Optional property providerName was added
* Optional property displayOnLogin was added

**SAMLProvider** (1 change)

* Model was added

**Okta** (6 changes)

* Optional property logoImageData was added
* Optional property nameIdentifierFormat was added
* Optional property ssoBinding was added
* Optional property signAuthnRequests was added
* Optional property providerName was added
* Optional property displayOnLogin was added

**OneLogin** (6 changes)

* Optional property logoImageData was added
* Optional property nameIdentifierFormat was added
* Optional property ssoBinding was added
* Optional property signAuthnRequests was added
* Optional property providerName was added
* Optional property displayOnLogin was added

**PingIdentity** (6 changes)

* Optional property logoImageData was added
* Optional property nameIdentifierFormat was added
* Optional property ssoBinding was added
* Optional property signAuthnRequests was added
* Optional property providerName was added
* Optional property displayOnLogin was added

**PureEngage** (6 changes)

* Optional property logoImageData was added
* Optional property nameIdentifierFormat was added
* Optional property ssoBinding was added
* Optional property signAuthnRequests was added
* Optional property providerName was added
* Optional property displayOnLogin was added

**Salesforce** (6 changes)

* Optional property logoImageData was added
* Optional property nameIdentifierFormat was added
* Optional property ssoBinding was added
* Optional property signAuthnRequests was added
* Optional property providerName was added
* Optional property displayOnLogin was added

**BotAggregateQueryPredicate** (2 changes)

* Enum value botName was added to property dimension
* Enum value botSlotMechanism was added to property dimension

**BotAggregationQuery** (2 changes)

* Enum value botName was added to property groupBy
* Enum value botSlotMechanism was added to property groupBy

**ConversationAggregationQuery** (4 changes)

* Enum value tAverageAgentResponseTime was added to property metrics
* Enum value tAverageCustomerResponseTime was added to property metrics
* Enum value tFirstEngagement was added to property metrics
* Enum value tFirstResponse was added to property metrics

**ConversationAggregationView** (4 changes)

* Enum value tAverageAgentResponseTime was added to property target
* Enum value tAverageCustomerResponseTime was added to property target
* Enum value tFirstEngagement was added to property target
* Enum value tFirstResponse was added to property target

**ConversationDetailQueryPredicate** (4 changes)

* Enum value tAverageAgentResponseTime was added to property metric
* Enum value tAverageCustomerResponseTime was added to property metric
* Enum value tFirstEngagement was added to property metric
* Enum value tFirstResponse was added to property metric

**KnowledgeAggregateQueryPredicate** (1 change)

* Enum value botFlowId was added to property dimension

**KnowledgeAggregationQuery** (1 change)

* Enum value botFlowId was added to property groupBy

**ResolutionAggregateQueryPredicate** (1 change)

* Enum value externalContactId was added to property dimension

**ResolutionAggregationQuery** (1 change)

* Enum value externalContactId was added to property groupBy

**TextBotUserAgent** (1 change)

* Enum value Apple was added to property name

**ViewFilter** (4 changes)

* Optional property assignedSkillIds was added
* Optional property assignedLanguageIds was added
* Optional property acw was added
* Optional property segmentTypes was added

**Widget** (2 changes)

* Enum value AGENT_ACTIVITY was added to property type
* Optional property selectedSegmentTypes was added

**IdentityResolutionConfig** (1 change)

* Optional property division was added

**MessageMediaSettings** (1 change)

* Model was added

**Limit** (1 change)

* Enum value external.events.data.ingestion was added to property namespace

**BulkEntityErrorExternalContact** (1 change)

* Model was added

**BulkResponseResultExternalContactExternalContactBulkEntityErrorExternalContact** (1 change)

* Model was added

**ContactIdentifier** (1 change)

* Optional property division was added

**ExternalContact** (1 change)

* Optional property division was added

**ExternalOrganization** (1 change)

* Optional property division was added

**ExternalOrganizationIdentifier** (1 change)

* Optional property division was added

**BulkEntityErrorEntity** (1 change)

* Model was added

**BulkResponseResultVoidEntityBulkEntityErrorEntity** (1 change)

* Model was added

**BulkResponseResultExternalContactEntityBulkEntityErrorEntity** (1 change)

* Model was added

**BulkResponseResultNoteEntityBulkEntityErrorEntity** (1 change)

* Model was added

**Note** (1 change)

* Optional property division was added

**BulkEntityErrorNote** (1 change)

* Model was added

**BulkResponseResultNoteNoteBulkEntityErrorNote** (1 change)

* Model was added

**BulkEntityErrorExternalOrganization** (1 change)

* Model was added

**BulkResponseResultExternalOrganizationExternalOrganizationBulkEntityErrorExternalOrganization** (1 change)

* Model was added

**BulkResponseResultExternalOrganizationEntityBulkEntityErrorEntity** (1 change)

* Model was added

**BulkEntityErrorRelationship** (1 change)

* Model was added

**BulkResponseResultRelationshipRelationshipBulkEntityErrorRelationship** (1 change)

* Model was added

**Relationship** (1 change)

* Optional property division was added

**BulkResponseResultRelationshipEntityBulkEntityErrorEntity** (1 change)

* Model was added

**ExternalOrganizationTrustorLink** (1 change)

* Optional property division was added

**ConversationMessageMetadataEvent** (1 change)

* Enum value SessionExpired was added to property subType

**Campaign** (1 change)

* Optional property maxCallsPerAgentDecimal was added

**CreateEmailRequest** (1 change)

* Optional property utilizationLabel was added

**ConversationContentNotificationTemplate** (1 change)

* Optional property buttons was added

**ConversationEventPresence** (1 change)

* Enum value SessionExpired was added to property type

**OpenMessagingIdentityResolutionConfig** (1 change)

* Optional property division was added

**EventMessage** (3 changes)

* Enum value CAMPAIGN_CALLS_PER_AGENT_LOW was added to property code
* Enum value CAMPAIGN_SCRIPT_STAGE_MISSING was added to property code
* Enum value CAMPAIGN_WEIGHT_ZERO was added to property code

**OutboundSettings** (1 change)

* Optional property maxCallsPerAgentDecimal was added

**FlattenedJsonSchemaDocument** (1 change)

* Model was added

**KnowledgeSyncRequest** (1 change)

* Model was added

**KnowledgeDocumentReq** (1 change)

* Optional property externalUrl was added

**KnowledgeDocumentCreateRequest** (1 change)

* Optional property externalUrl was added

**PresentedKnowledgeDocument** (1 change)

* Model was added

**ApprovalNamespace** (1 change)

* Enum value external.events.data.ingestion was added to property namespace

**LimitChangeRequestDetails** (1 change)

* Enum value external.events.data.ingestion was added to property namespace

**StatusChange** (1 change)

* Enum value external.events.data.ingestion was added to property namespace

**ContentDatePicker** (1 change)

* Model was added

**ContentDatePickerAvailableTime** (1 change)

* Model was added

**ContentNotificationTemplate** (1 change)

* Optional property buttons was added

**MessageContent** (2 changes)

* Enum value DatePicker was added to property contentType
* Optional property datePicker was added

**NotificationTemplateButton** (1 change)

* Model was added

**OperationalEvent** (1 change)

* Optional property entityToken was added

**RecordingMessagingMessage** (2 changes)

* Optional property notificationTemplate was added
* Optional property events was added

**EventPresence** (1 change)

* Enum value SessionExpired was added to property type

**MessageEvent** (2 changes)

* Enum value Reactions was added to property eventType
* Optional property reactions was added

**PostTextRequest** (1 change)

* Enum value Apple was added to property messagingPlatformType

**GroupEmailPolicy** (1 change)

* Model was added

**VoicemailGroupPolicy** (1 change)

* Optional property emailPolicy was added

**RegisterArchitectExportJobResponse** (1 change)

* Model was added

**ArchitectFlowReference** (1 change)

* Model was added

**ExportDetails** (1 change)

* Model was added

**RegisterArchitectExportJob** (1 change)

* Model was added

**ArchitectExportJobStateResponse** (1 change)

* Model was added

**WebMessagingEventPresence** (1 change)

* Enum value SessionExpired was added to property type

**SchedulingSettingsResponse** (1 change)

* Optional property monthlyPlanningPeriod was added

**SchedulingSettingsRequest** (1 change)

* Optional property monthlyPlanningPeriod was added

**CoachingAppointmentResponse** (2 changes)

* Optional property location was added
* Optional property shareInsightsData was added

**UpdateCoachingAppointmentRequest** (2 changes)

* Optional property location was added
* Optional property shareInsightsData was added

**CreateCoachingAppointmentRequest** (2 changes)

* Optional property location was added
* Optional property shareInsightsData was added

**BotAsyncAggregationQuery** (2 changes)

* Enum value botName was added to property groupBy
* Enum value botSlotMechanism was added to property groupBy

**ConversationAsyncAggregationQuery** (4 changes)

* Enum value tAverageAgentResponseTime was added to property metrics
* Enum value tAverageCustomerResponseTime was added to property metrics
* Enum value tFirstEngagement was added to property metrics
* Enum value tFirstResponse was added to property metrics

**KnowledgeAsyncAggregationQuery** (1 change)

* Enum value botFlowId was added to property groupBy

**ResolutionAsyncAggregationQuery** (1 change)

* Enum value externalContactId was added to property groupBy


# Point Changes (4 changes)

**DELETE /api/v2/authorization/divisions/{divisionId}** (1 change)

* Description was changed for parameter force

**GET /api/v2/analytics/reporting/dashboards/users** (1 change)

* Description was changed for parameter deletedOnly

**PUT /api/v2/conversations/cobrowsesessions/{conversationId}/recordingstate** (1 change)

* Description was changed

**GET /api/v2/conversations/{conversationId}/recordings/{recordingId}** (1 change)

* Description was changed for parameter locale
