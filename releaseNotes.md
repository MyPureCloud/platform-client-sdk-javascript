Platform API version: 3448


# Major Changes (200 changes)

**GET /api/v2/authorization/roles/{roleId}** (1 change)

* Parameter expand was added

**POST /api/v2/outbound/dnclists/{dncListId}/export** (1 change)

* Response 200 type was changed from UriReference to DomainEntityRef

**GET /api/v2/routing/queues** (1 change)

* Parameter id was added

**POST /api/v2/outbound/contactlists/{contactListId}/export** (1 change)

* Response 200 type was changed from UriReference to DomainEntityRef

**UriReference** (1 change)

* Model UriReference was removed

**DataSchema** (1 change)

* Property createdBy was changed from UriReference to DomainEntityRef

**IVR** (4 changes)

* Property openHoursFlow was changed from UriReference to DomainEntityRef
* Property closedHoursFlow was changed from UriReference to DomainEntityRef
* Property holidayHoursFlow was changed from UriReference to DomainEntityRef
* Property scheduleGroup was changed from UriReference to DomainEntityRef

**SecureSession** (1 change)

* Property flow was changed from UriReference to DomainEntityRef

**MessagingIntegration** (3 changes)

* Property recipient was changed from UriReference to DomainEntityRef
* Property createdBy was changed from UriReference to DomainEntityRef
* Property modifiedBy was changed from UriReference to DomainEntityRef

**InboundRoute** (5 changes)

* Property queue was changed from UriReference to DomainEntityRef
* Property skills was changed from UriReference[] to DomainEntityRef[]
* Property language was changed from UriReference to DomainEntityRef
* Property flow was changed from UriReference to DomainEntityRef
* Property spamFlow was changed from UriReference to DomainEntityRef

**Queue** (2 changes)

* Property queueFlow was changed from UriReference to DomainEntityRef
* Property whisperPrompt was changed from UriReference to DomainEntityRef

**QueueEmailAddress** (1 change)

* Property domain was changed from UriReference to DomainEntityRef

**QueueMessagingAddresses** (1 change)

* Property smsAddress was changed from UriReference to DomainEntityRef

**Workspace** (1 change)

* Property user was changed from UriReference to DomainEntityRef

**ReplaceResponse** (1 change)

* Property uploadStatus was changed from UriReference to DomainEntityRef

**LineBase** (1 change)

* Property lineMetaBase was changed from UriReference to DomainEntityRef

**ConversationDivisionMembership** (2 changes)

* Property division was changed from UriReference to DomainEntityRef
* Property entities was changed from UriReference[] to DomainEntityRef[]

**EmailMediaParticipant** (5 changes)

* Property user was changed from UriReference to DomainEntityRef
* Property queue was changed from UriReference to DomainEntityRef
* Property script was changed from UriReference to DomainEntityRef
* Property externalContact was changed from UriReference to DomainEntityRef
* Property externalOrganization was changed from UriReference to DomainEntityRef

**GDPRRequest** (1 change)

* Property createdBy was changed from UriReference to DomainEntityRef

**CallbackMediaParticipant** (5 changes)

* Property user was changed from UriReference to DomainEntityRef
* Property queue was changed from UriReference to DomainEntityRef
* Property script was changed from UriReference to DomainEntityRef
* Property externalContact was changed from UriReference to DomainEntityRef
* Property externalOrganization was changed from UriReference to DomainEntityRef

**CreateCallbackResponse** (1 change)

* Property conversation was changed from UriReference to DomainEntityRef

**ChatMediaParticipant** (5 changes)

* Property user was changed from UriReference to DomainEntityRef
* Property queue was changed from UriReference to DomainEntityRef
* Property script was changed from UriReference to DomainEntityRef
* Property externalContact was changed from UriReference to DomainEntityRef
* Property externalOrganization was changed from UriReference to DomainEntityRef

**ContactListFilter** (1 change)

* Property contactList was changed from UriReference to DomainEntityRef

**EdgeInterface** (1 change)

* Property endpoints was changed from UriReference[] to DomainEntityRef[]

**Site** (2 changes)

* Property primarySites was changed from UriReference[] to DomainEntityRef[]
* Property secondarySites was changed from UriReference[] to DomainEntityRef[]

**TrunkBase** (1 change)

* Property trunkMetabase was changed from UriReference to DomainEntityRef

**TwitterIntegration** (3 changes)

* Property recipient was changed from UriReference to DomainEntityRef
* Property createdBy was changed from UriReference to DomainEntityRef
* Property modifiedBy was changed from UriReference to DomainEntityRef

**OAuthClient** (2 changes)

* Property createdBy was changed from UriReference to DomainEntityRef
* Property modifiedBy was changed from UriReference to DomainEntityRef

**EventLog** (2 changes)

* Property errorEntity was changed from UriReference to DomainEntityRef
* Property relatedEntity was changed from UriReference to DomainEntityRef

**IntegrationExport** (1 change)

* Property integration was changed from UriReference to DomainEntityRef

**SurveyAssignment** (1 change)

* Property flow was changed from UriReference to DomainEntityRef

**UserQueue** (2 changes)

* Property queueFlow was changed from UriReference to DomainEntityRef
* Property whisperPrompt was changed from UriReference to DomainEntityRef

**OutboundRoute** (1 change)

* Property externalTrunkBases was changed from UriReference[] to DomainEntityRef[]

**UserRecording** (2 changes)

* Property workspace was changed from UriReference to DomainEntityRef
* Property createdBy was changed from UriReference to DomainEntityRef

**LineIntegration** (3 changes)

* Property recipient was changed from UriReference to DomainEntityRef
* Property createdBy was changed from UriReference to DomainEntityRef
* Property modifiedBy was changed from UriReference to DomainEntityRef

**EmergencyCallFlow** (2 changes)

* Property emergencyFlow was changed from UriReference to DomainEntityRef
* Property ivrs was changed from UriReference[] to DomainEntityRef[]

**Trunk** (5 changes)

* Property edge was changed from UriReference to DomainEntityRef
* Property trunkBase was changed from UriReference to DomainEntityRef
* Property trunkMetabase was changed from UriReference to DomainEntityRef
* Property edgeGroup was changed from UriReference to DomainEntityRef
* Property logicalInterface was changed from UriReference to DomainEntityRef

**EdgeLine** (1 change)

* Property schema was changed from UriReference to DomainEntityRef

**Endpoint** (2 changes)

* Property schema was changed from UriReference to DomainEntityRef
* Property site was changed from UriReference to DomainEntityRef

**MessageMediaParticipant** (5 changes)

* Property user was changed from UriReference to DomainEntityRef
* Property queue was changed from UriReference to DomainEntityRef
* Property script was changed from UriReference to DomainEntityRef
* Property externalContact was changed from UriReference to DomainEntityRef
* Property externalOrganization was changed from UriReference to DomainEntityRef

**WidgetDeployment** (1 change)

* Property flow was changed from UriReference to DomainEntityRef

**ScimV2GroupReference** (1 change)

* Property meta was removed

**ScimV2CreateUser** (1 change)

* Property meta was removed

**Attribute** (2 changes)

* Property createdBy was changed from UriReference to DomainEntityRef
* Property modifiedBy was changed from UriReference to DomainEntityRef

**Document** (4 changes)

* Property workspace was changed from UriReference to DomainEntityRef
* Property createdBy was changed from UriReference to DomainEntityRef
* Property uploadedBy was changed from UriReference to DomainEntityRef
* Property uploadStatus was changed from UriReference to DomainEntityRef

**LockInfo** (1 change)

* Property lockedBy was changed from UriReference to DomainEntityRef

**SequenceSchedule** (1 change)

* Property sequence was changed from UriReference to DomainEntityRef

**TrunkMetrics** (2 changes)

* Property logicalInterface was changed from UriReference to DomainEntityRef
* Property trunk was changed from UriReference to DomainEntityRef

**Line** (6 changes)

* Property edgeGroup was changed from UriReference to DomainEntityRef
* Property template was changed from UriReference to DomainEntityRef
* Property site was changed from UriReference to DomainEntityRef
* Property lineBaseSettings was changed from UriReference to DomainEntityRef
* Property loggedInUser was changed from UriReference to DomainEntityRef
* Property defaultForUser was changed from UriReference to DomainEntityRef

**Phone** (5 changes)

* Property site was changed from UriReference to DomainEntityRef
* Property phoneBaseSettings was changed from UriReference to DomainEntityRef
* Property lineBaseSettings was changed from UriReference to DomainEntityRef
* Property phoneMetaBase was changed from UriReference to DomainEntityRef
* Property webRtcUser was changed from UriReference to DomainEntityRef

**PhoneStatus** (1 change)

* Property edge was changed from UriReference to DomainEntityRef

**Station** (2 changes)

* Property primaryEdge was changed from UriReference to DomainEntityRef
* Property secondaryEdge was changed from UriReference to DomainEntityRef

**Share** (4 changes)

* Property sharedEntity was changed from UriReference to DomainEntityRef
* Property member was changed from UriReference to DomainEntityRef
* Property sharedBy was changed from UriReference to DomainEntityRef
* Property workspace was changed from UriReference to DomainEntityRef

**FacebookIntegration** (3 changes)

* Property recipient was changed from UriReference to DomainEntityRef
* Property createdBy was changed from UriReference to DomainEntityRef
* Property modifiedBy was changed from UriReference to DomainEntityRef

**OrgOAuthClient** (2 changes)

* Property createdBy was changed from UriReference to DomainEntityRef
* Property modifiedBy was changed from UriReference to DomainEntityRef

**Campaign** (11 changes)

* Property contactList was changed from UriReference to DomainEntityRef
* Property queue was changed from UriReference to DomainEntityRef
* Property script was changed from UriReference to DomainEntityRef
* Property edgeGroup was changed from UriReference to DomainEntityRef
* Property site was changed from UriReference to DomainEntityRef
* Property dncLists was changed from UriReference[] to DomainEntityRef[]
* Property callableTimeSet was changed from UriReference to DomainEntityRef
* Property callAnalysisResponseSet was changed from UriReference to DomainEntityRef
* Property ruleSets was changed from UriReference[] to DomainEntityRef[]
* Property contactListFilters was changed from UriReference[] to DomainEntityRef[]
* Property division was changed from UriReference to DomainEntityRef

**CallableContactsDiagnostic** (4 changes)

* Property attemptLimits was changed from UriReference to DomainEntityRef
* Property dncLists was changed from UriReference[] to DomainEntityRef[]
* Property callableTimeSet was changed from UriReference to DomainEntityRef
* Property ruleSets was changed from UriReference[] to DomainEntityRef[]

**QueueUtilizationDiagnostic** (1 change)

* Property queue was changed from UriReference to DomainEntityRef

**RuleSetDiagnostic** (1 change)

* Property ruleSet was changed from UriReference to DomainEntityRef

**CampaignProgress** (2 changes)

* Property campaign was changed from UriReference to DomainEntityRef
* Property contactList was changed from UriReference to DomainEntityRef

**Survey** (1 change)

* Property agent was changed from UriReference to DomainEntityRef

**CampaignInteraction** (6 changes)

* Property campaign was changed from UriReference to DomainEntityRef
* Property agent was changed from UriReference to DomainEntityRef
* Property contact was changed from UriReference to DomainEntityRef
* Property queue was changed from UriReference to DomainEntityRef
* Property script was changed from UriReference to DomainEntityRef
* Property skills was changed from UriReference[] to DomainEntityRef[]

**CampaignInteractions** (1 change)

* Property campaign was changed from UriReference to DomainEntityRef

**DncList** (1 change)

* Property division was changed from UriReference to DomainEntityRef

**CreateQueueRequest** (2 changes)

* Property queueFlow was changed from UriReference to DomainEntityRef
* Property whisperPrompt was changed from UriReference to DomainEntityRef

**ContactList** (2 changes)

* Property division was changed from UriReference to DomainEntityRef
* Property attemptLimits was changed from UriReference to DomainEntityRef

**Extension** (2 changes)

* Property owner was changed from UriReference to DomainEntityRef
* Property extensionPool was changed from UriReference to DomainEntityRef

**WebChatDeployment** (1 change)

* Property flow was changed from UriReference to DomainEntityRef

**OAuthClientListing** (2 changes)

* Property createdBy was changed from UriReference to DomainEntityRef
* Property modifiedBy was changed from UriReference to DomainEntityRef

**WorkspaceMember** (2 changes)

* Property workspace was changed from UriReference to DomainEntityRef
* Property member was changed from UriReference to DomainEntityRef

**Response** (1 change)

* Property libraries was changed from UriReference[] to DomainEntityRef[]

**OutboundRouteBase** (1 change)

* Property externalTrunkBases was changed from UriReference[] to DomainEntityRef[]

**ScheduleGroup** (3 changes)

* Property openSchedules was changed from UriReference[] to DomainEntityRef[]
* Property closedSchedules was changed from UriReference[] to DomainEntityRef[]
* Property holidaySchedules was changed from UriReference[] to DomainEntityRef[]

**CampaignSequence** (1 change)

* Property campaigns was changed from UriReference[] to DomainEntityRef[]

**CampaignSchedule** (1 change)

* Property campaign was changed from UriReference to DomainEntityRef

**EdgeTrunkBase** (1 change)

* Property trunkMetabase was changed from UriReference to DomainEntityRef

**FaxDocument** (2 changes)

* Property workspace was changed from UriReference to DomainEntityRef
* Property createdBy was changed from UriReference to DomainEntityRef

**RuleSet** (2 changes)

* Property contactList was changed from UriReference to DomainEntityRef
* Property queue was changed from UriReference to DomainEntityRef

**DID** (2 changes)

* Property didPool was changed from UriReference to DomainEntityRef
* Property owner was changed from UriReference to DomainEntityRef

**EdgeMetrics** (1 change)

* Property edge was changed from UriReference to DomainEntityRef

**CampaignRuleActionEntities** (2 changes)

* Property campaigns was changed from UriReference[] to DomainEntityRef[]
* Property sequences was changed from UriReference[] to DomainEntityRef[]

**CampaignRuleEntities** (2 changes)

* Property campaigns was changed from UriReference[] to DomainEntityRef[]
* Property sequences was changed from UriReference[] to DomainEntityRef[]

**CreateShareResponse** (4 changes)

* Property sharedEntity was changed from UriReference to DomainEntityRef
* Property member was changed from UriReference to DomainEntityRef
* Property sharedBy was changed from UriReference to DomainEntityRef
* Property workspace was changed from UriReference to DomainEntityRef

**ScimV2MemberReference** (1 change)

* Property meta was removed

**PhoneBase** (1 change)

* Property phoneMetaBase was changed from UriReference to DomainEntityRef

**TimeZoneMappingPreview** (1 change)

* Property contactList was changed from UriReference to DomainEntityRef

**CallMediaParticipant** (6 changes)

* Property user was changed from UriReference to DomainEntityRef
* Property queue was changed from UriReference to DomainEntityRef
* Property script was changed from UriReference to DomainEntityRef
* Property externalContact was changed from UriReference to DomainEntityRef
* Property externalOrganization was changed from UriReference to DomainEntityRef
* Property group was changed from UriReference to DomainEntityRef

**DocumentUpload** (1 change)

* Property workspace was changed from UriReference to DomainEntityRef

**DncListCreate** (1 change)

* Property division was changed from UriReference to DomainEntityRef

**DocumentAudit** (2 changes)

* Property user was changed from UriReference to DomainEntityRef
* Property workspace was changed from UriReference to DomainEntityRef

**QueueRequest** (2 changes)

* Property queueFlow was changed from UriReference to DomainEntityRef
* Property whisperPrompt was changed from UriReference to DomainEntityRef

**CobrowseMediaParticipant** (5 changes)

* Property user was changed from UriReference to DomainEntityRef
* Property queue was changed from UriReference to DomainEntityRef
* Property script was changed from UriReference to DomainEntityRef
* Property externalContact was changed from UriReference to DomainEntityRef
* Property externalOrganization was changed from UriReference to DomainEntityRef


# Minor Changes (32 changes)

**/api/v2/analytics/conversations/details/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/conversations/details/jobs/{jobId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/analytics/conversations/details/jobs/{jobId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/{conversationId}/transcriptproperties/{communicationId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messaging/integrations/whatsapp/{integrationId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/conversations/messaging/integrations/whatsapp** (2 changes)

* Path was added
* Operation GET was added

**AggregationQuery** (1 change)

* Enum value flowOutType was added to property groupBy

**AnalyticsQueryPredicate** (1 change)

* Enum value flowOutType was added to property dimension

**DomainEntityRef** (1 change)

* Model was added

**UserAuthorization** (1 change)

* Optional property unusedRoles was added

**Edge** (1 change)

* Enum value INITIALIZING was added to property statusCode

**AsyncQueryResponse** (1 change)

* Model was added

**AsyncQueryStatus** (1 change)

* Model was added

**AnalyticsConversationAsyncQueryResponse** (1 change)

* Model was added

**DomainOrganizationRole** (1 change)

* Optional property unusedPermissions was added

**DomainOrganizationRoleCreate** (1 change)

* Optional property unusedPermissions was added

**TranscriptProperty** (1 change)

* Model was added

**DomainOrganizationRoleUpdate** (1 change)

* Optional property unusedPermissions was added

**WhatsAppIntegration** (1 change)

* Model was added

**WhatsAppIntegrationEntityListing** (1 change)

* Model was added

**WhatsAppIntegrationUpdateRequest** (1 change)

* Model was added

**RecordingJobsQuery** (1 change)

* Optional property includeScreenRecordings was added

**CreateUser** (1 change)

* Optional property state was added

**BillingUsageReport** (1 change)

* Optional property status was added


# Point Changes (2 changes)

**GET /api/v2/billing/reports/billableusage** (2 changes)

* Description was changed
* Summary was changed
