Platform API version: 2745


# Major Changes (663 changes)

**GET /api/v2/users/{userId}/presences/{sourceId}** (1 change)

* Operation operationId was changed from getUsersUserIdPresencesSourceId to getUserPresence

**PATCH /api/v2/users/{userId}/presences/{sourceId}** (1 change)

* Operation operationId was changed from patchUsersUserIdPresencesSourceId to patchUserPresence

**GET /api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions** (1 change)

* Operation operationId was changed from getConversationsConversationIdParticipantsParticipantIdSecureivrsessions to getConversationParticipantSecureivrsessions

**POST /api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions** (1 change)

* Operation operationId was changed from postConversationsConversationIdParticipantsParticipantIdSecureivrsessions to postConversationParticipantSecureivrsessions

**GET /api/v2/architect/prompts/{promptId}/resources** (1 change)

* Operation operationId was changed from getArchitectPromptsPromptIdResources to getArchitectPromptResources

**POST /api/v2/architect/prompts/{promptId}/resources** (1 change)

* Operation operationId was changed from postArchitectPromptsPromptIdResources to postArchitectPromptResources

**GET /api/v2/groups/{groupId}/greetings** (1 change)

* Operation operationId was changed from getGroupsGroupIdGreetings to getGroupGreetings

**POST /api/v2/groups/{groupId}/greetings** (1 change)

* Operation operationId was changed from postGroupsGroupIdGreetings to postGroupGreetings

**GET /api/v2/orgauthorization/trustees/{trusteeOrgId}** (1 change)

* Operation operationId was changed from getOrgauthorizationTrusteesTrusteeorgId to getOrgauthorizationTrustee

**PUT /api/v2/orgauthorization/trustees/{trusteeOrgId}** (1 change)

* Operation operationId was changed from putOrgauthorizationTrusteesTrusteeorgId to putOrgauthorizationTrustee

**DELETE /api/v2/orgauthorization/trustees/{trusteeOrgId}** (1 change)

* Operation operationId was changed from deleteOrgauthorizationTrusteesTrusteeorgId to deleteOrgauthorizationTrustee

**GET /api/v2/integrations/actions/{actionId}/draft/validation** (1 change)

* Operation operationId was changed from getIntegrationsActionsActionIdDraftValidation to getIntegrationsActionDraftValidation

**POST /api/v2/integrations/actions/{actionId}/draft/test** (1 change)

* Operation operationId was changed from postIntegrationsActionsActionIdDraftTest to postIntegrationsActionDraftTest

**GET /api/v2/integrations/actions/{actionId}/draft** (1 change)

* Operation operationId was changed from getIntegrationsActionsActionIdDraft to getIntegrationsActionDraft

**POST /api/v2/integrations/actions/{actionId}/draft** (1 change)

* Operation operationId was changed from postIntegrationsActionsActionIdDraft to postIntegrationsActionDraft

**DELETE /api/v2/integrations/actions/{actionId}/draft** (1 change)

* Operation operationId was changed from deleteIntegrationsActionsActionIdDraft to deleteIntegrationsActionDraft

**PATCH /api/v2/integrations/actions/{actionId}/draft** (1 change)

* Operation operationId was changed from patchIntegrationsActionsActionIdDraft to patchIntegrationsActionDraft

**GET /api/v2/integrations/actions/{actionId}/draft/schemas/{fileName}** (1 change)

* Operation operationId was changed from getIntegrationsActionsActionIdDraftSchemasFilename to getIntegrationsActionDraftSchema

**GET /api/v2/integrations/actions/{actionId}/draft/templates/{fileName}** (1 change)

* Operation operationId was changed from getIntegrationsActionsActionIdDraftTemplatesFilename to getIntegrationsActionDraftTemplate

**POST /api/v2/integrations/actions/{actionId}/draft/publish** (1 change)

* Operation operationId was changed from postIntegrationsActionsActionIdDraftPublish to postIntegrationsActionDraftPublish

**GET /api/v2/orgauthorization/pairings/{pairingId}** (1 change)

* Operation operationId was changed from getOrgauthorizationPairingsPairingId to getOrgauthorizationPairing

**GET /api/v2/attributes/{attributeId}** (1 change)

* Operation operationId was changed from getAttributesAttributeId to getAttribute

**PUT /api/v2/attributes/{attributeId}** (1 change)

* Operation operationId was changed from putAttributesAttributeId to putAttribute

**DELETE /api/v2/attributes/{attributeId}** (1 change)

* Operation operationId was changed from deleteAttributesAttributeId to deleteAttribute

**GET /api/v2/users/{userId}/profile** (1 change)

* Operation operationId was changed from getUsersUserIdProfile to getUserProfile

**GET /api/v2/quality/forms/surveys/{formId}** (1 change)

* Operation operationId was changed from getQualityFormsSurveysFormId to getQualityFormsSurvey

**PUT /api/v2/quality/forms/surveys/{formId}** (1 change)

* Operation operationId was changed from putQualityFormsSurveysFormId to putQualityFormsSurvey

**DELETE /api/v2/quality/forms/surveys/{formId}** (1 change)

* Operation operationId was changed from deleteQualityFormsSurveysFormId to deleteQualityFormsSurvey

**PATCH /api/v2/quality/forms/surveys/{formId}** (1 change)

* Operation operationId was changed from patchQualityFormsSurveysFormId to patchQualityFormsSurvey

**GET /api/v2/outbound/contactlists/{contactListId}/importstatus** (1 change)

* Operation operationId was changed from getOutboundContactlistsContactlistIdImportstatus to getOutboundContactlistImportstatus

**GET /api/v2/scripts/uploads/{uploadId}/status** (1 change)

* Operation operationId was changed from getScriptsUploadsUploadIdStatus to getScriptsUploadStatus

**GET /api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Operation operationId was changed from getConversationsEmailsConversationIdParticipantsParticipantIdWrapupcodes to getConversationsEmailParticipantWrapupcodes

**GET /api/v2/conversations/emails/{conversationId}** (1 change)

* Operation operationId was changed from getConversationsEmailsConversationId to getConversationsEmail

**PATCH /api/v2/conversations/emails/{conversationId}** (1 change)

* Operation operationId was changed from patchConversationsEmailsConversationId to patchConversationsEmail

**GET /api/v2/conversations/emails/{conversationId}/messages** (1 change)

* Operation operationId was changed from getConversationsEmailsConversationIdMessages to getConversationsEmailMessages

**POST /api/v2/conversations/emails/{conversationId}/messages** (1 change)

* Operation operationId was changed from postConversationsEmailsConversationIdMessages to postConversationsEmailMessages

**PATCH /api/v2/conversations/emails/{conversationId}/participants/{participantId}/attributes** (1 change)

* Operation operationId was changed from patchConversationsEmailsConversationIdParticipantsParticipantIdAttributes to patchConversationsEmailParticipantAttributes

**GET /api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Operation operationId was changed from getConversationsEmailsConversationIdParticipantsParticipantIdWrapup to getConversationsEmailParticipantWrapup

**DELETE /api/v2/conversations/emails/{conversationId}/messages/draft/attachments/{attachmentId}** (1 change)

* Operation operationId was changed from deleteConversationsEmailsConversationIdMessagesDraftAttachmentsAttachmentId to deleteConversationsEmailMessagesDraftAttachment

**GET /api/v2/conversations/emails/{conversationId}/messages/draft** (1 change)

* Operation operationId was changed from getConversationsEmailsConversationIdMessagesDraft to getConversationsEmailMessagesDraft

**PUT /api/v2/conversations/emails/{conversationId}/messages/draft** (1 change)

* Operation operationId was changed from putConversationsEmailsConversationIdMessagesDraft to putConversationsEmailMessagesDraft

**POST /api/v2/conversations/emails/{conversationId}/inboundmessages** (1 change)

* Operation operationId was changed from postConversationsEmailsConversationIdInboundmessages to postConversationsEmailInboundmessages

**PATCH /api/v2/conversations/emails/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Operation operationId was changed from patchConversationsEmailsConversationIdParticipantsParticipantIdCommunicationsCommunicationId to patchConversationsEmailParticipantCommunication

**PATCH /api/v2/conversations/emails/{conversationId}/participants/{participantId}** (1 change)

* Operation operationId was changed from patchConversationsEmailsConversationIdParticipantsParticipantId to patchConversationsEmailParticipant

**POST /api/v2/conversations/emails/{conversationId}/participants/{participantId}/replace** (1 change)

* Operation operationId was changed from postConversationsEmailsConversationIdParticipantsParticipantIdReplace to postConversationsEmailParticipantReplace

**GET /api/v2/conversations/emails/{conversationId}/messages/{messageId}** (1 change)

* Operation operationId was changed from getConversationsEmailsConversationIdMessagesMessageId to getConversationsEmailMessage

**GET /api/v2/outbound/attemptlimits/{attemptLimitsId}** (1 change)

* Operation operationId was changed from getOutboundAttemptlimitsAttemptlimitsId to getOutboundAttemptlimit

**PUT /api/v2/outbound/attemptlimits/{attemptLimitsId}** (1 change)

* Operation operationId was changed from putOutboundAttemptlimitsAttemptlimitsId to putOutboundAttemptlimit

**DELETE /api/v2/outbound/attemptlimits/{attemptLimitsId}** (1 change)

* Operation operationId was changed from deleteOutboundAttemptlimitsAttemptlimitsId to deleteOutboundAttemptlimit

**GET /api/v2/workforcemanagement/managementunits/{muId}/activitycodes** (1 change)

* Operation operationId was changed from getWorkforcemanagementManagementunitsMuIdActivitycodes to getWorkforcemanagementManagementunitActivitycodes

**POST /api/v2/workforcemanagement/managementunits/{muId}/activitycodes** (1 change)

* Operation operationId was changed from postWorkforcemanagementManagementunitsMuIdActivitycodes to postWorkforcemanagementManagementunitActivitycodes

**GET /api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId}** (1 change)

* Operation operationId was changed from getWorkforcemanagementManagementunitsMuIdActivitycodesAcId to getWorkforcemanagementManagementunitActivitycode

**DELETE /api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId}** (1 change)

* Operation operationId was changed from deleteWorkforcemanagementManagementunitsMuIdActivitycodesAcId to deleteWorkforcemanagementManagementunitActivitycode

**PATCH /api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId}** (1 change)

* Operation operationId was changed from patchWorkforcemanagementManagementunitsMuIdActivitycodesAcId to patchWorkforcemanagementManagementunitActivitycode

**GET /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}** (1 change)

* Operation operationId was changed from getAuthorizationRolesLeftroleIdComparedefaultRightroleId to getAuthorizationRoleComparedefaultRightRoleId

**POST /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}** (1 change)

* Operation operationId was changed from postAuthorizationRolesLeftroleIdComparedefaultRightroleId to postAuthorizationRoleComparedefaultRightRoleId

**POST /api/v2/outbound/campaigns/{campaignId}/callback/schedule** (1 change)

* Operation operationId was changed from postOutboundCampaignsCampaignIdCallbackSchedule to postOutboundCampaignCallbackSchedule

**GET /api/v2/telephony/providers/edges/{edgeId}/softwareversions** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesEdgeIdSoftwareversions to getTelephonyProvidersEdgeSoftwareversions

**GET /api/v2/integrations/{integrationId}** (1 change)

* Operation operationId was changed from getIntegrationsIntegrationId to getIntegration

**DELETE /api/v2/integrations/{integrationId}** (1 change)

* Operation operationId was changed from deleteIntegrationsIntegrationId to deleteIntegration

**PATCH /api/v2/integrations/{integrationId}** (1 change)

* Operation operationId was changed from patchIntegrationsIntegrationId to patchIntegration

**GET /api/v2/userrecordings/{recordingId}** (1 change)

* Operation operationId was changed from getUserrecordingsRecordingId to getUserrecording

**PUT /api/v2/userrecordings/{recordingId}** (1 change)

* Operation operationId was changed from putUserrecordingsRecordingId to putUserrecording

**DELETE /api/v2/userrecordings/{recordingId}** (1 change)

* Operation operationId was changed from deleteUserrecordingsRecordingId to deleteUserrecording

**GET /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles** (1 change)

* Operation operationId was changed from getOrgauthorizationTrusteesTrusteeorgIdUsersTrusteeuserIdRoles to getOrgauthorizationTrusteeUserRoles

**PUT /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles** (1 change)

* Operation operationId was changed from putOrgauthorizationTrusteesTrusteeorgIdUsersTrusteeuserIdRoles to putOrgauthorizationTrusteeUserRoles

**DELETE /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles** (1 change)

* Operation operationId was changed from deleteOrgauthorizationTrusteesTrusteeorgIdUsersTrusteeuserIdRoles to deleteOrgauthorizationTrusteeUserRoles

**GET /api/v2/telephony/providers/edges/phones/{phoneId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesPhonesPhoneId to getTelephonyProvidersEdgesPhone

**PUT /api/v2/telephony/providers/edges/phones/{phoneId}** (1 change)

* Operation operationId was changed from putTelephonyProvidersEdgesPhonesPhoneId to putTelephonyProvidersEdgesPhone

**DELETE /api/v2/telephony/providers/edges/phones/{phoneId}** (1 change)

* Operation operationId was changed from deleteTelephonyProvidersEdgesPhonesPhoneId to deleteTelephonyProvidersEdgesPhone

**GET /api/v2/quality/forms/evaluations/{formId}/versions** (1 change)

* Operation operationId was changed from getQualityFormsEvaluationsFormIdVersions to getQualityFormsEvaluationVersions

**POST /api/v2/telephony/providers/edges/{edgeId}/unpair** (1 change)

* Operation operationId was changed from postTelephonyProvidersEdgesEdgeIdUnpair to postTelephonyProvidersEdgeUnpair

**PUT /api/v2/authorization/roles/{roleId}/users/remove** (1 change)

* Operation operationId was changed from putAuthorizationRolesRoleIdUsersRemove to putAuthorizationRoleUsersRemove

**GET /api/v2/authorization/roles/{roleId}/users** (1 change)

* Operation operationId was changed from getAuthorizationRolesRoleIdUsers to getAuthorizationRoleUsers

**PUT /api/v2/authorization/roles/{roleId}/users/add** (1 change)

* Operation operationId was changed from putAuthorizationRolesRoleIdUsersAdd to putAuthorizationRoleUsersAdd

**GET /api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesEdgeIdPhysicalinterfaces to getTelephonyProvidersEdgePhysicalinterfaces

**GET /api/v2/outbound/contactlists/{contactListId}** (1 change)

* Operation operationId was changed from getOutboundContactlistsContactlistId to getOutboundContactlist

**PUT /api/v2/outbound/contactlists/{contactListId}** (1 change)

* Operation operationId was changed from putOutboundContactlistsContactlistId to putOutboundContactlist

**DELETE /api/v2/outbound/contactlists/{contactListId}** (1 change)

* Operation operationId was changed from deleteOutboundContactlistsContactlistId to deleteOutboundContactlist

**GET /api/v2/outbound/contactlists/{contactListId}/timezonemappingpreview** (1 change)

* Operation operationId was changed from getOutboundContactlistsContactlistIdTimezonemappingpreview to getOutboundContactlistTimezonemappingpreview

**GET /api/v2/users/{userId}/routingstatus** (1 change)

* Operation operationId was changed from getUsersUserIdRoutingstatus to getUserRoutingstatus

**PUT /api/v2/users/{userId}/routingstatus** (1 change)

* Operation operationId was changed from putUsersUserIdRoutingstatus to putUserRoutingstatus

**POST /api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests/fetchdetails** (1 change)

* Operation operationId was changed from postWorkforcemanagementManagementunitsMuIdTimeoffrequestsFetchdetails to postWorkforcemanagementManagementunitTimeoffrequestsFetchdetails

**GET /api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests/{timeOffRequestId}** (1 change)

* Operation operationId was changed from getWorkforcemanagementManagementunitsMuIdUsersUserIdTimeoffrequestsTimeoffrequestId to getWorkforcemanagementManagementunitUserTimeoffrequest

**PATCH /api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests/{timeOffRequestId}** (1 change)

* Operation operationId was changed from patchWorkforcemanagementManagementunitsMuIdUsersUserIdTimeoffrequestsTimeoffrequestId to patchWorkforcemanagementManagementunitUserTimeoffrequest

**POST /api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests** (1 change)

* Operation operationId was changed from postWorkforcemanagementManagementunitsMuIdTimeoffrequests to postWorkforcemanagementManagementunitTimeoffrequests

**POST /api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests/query** (1 change)

* Operation operationId was changed from postWorkforcemanagementManagementunitsMuIdTimeoffrequestsQuery to postWorkforcemanagementManagementunitTimeoffrequestsQuery

**GET /api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests** (1 change)

* Operation operationId was changed from getWorkforcemanagementManagementunitsMuIdUsersUserIdTimeoffrequests to getWorkforcemanagementManagementunitUserTimeoffrequests

**GET /api/v2/fax/documents/{documentId}** (1 change)

* Operation operationId was changed from getFaxDocumentsDocumentId to getFaxDocument

**PUT /api/v2/fax/documents/{documentId}** (1 change)

* Operation operationId was changed from putFaxDocumentsDocumentId to putFaxDocument

**DELETE /api/v2/fax/documents/{documentId}** (1 change)

* Operation operationId was changed from deleteFaxDocumentsDocumentId to deleteFaxDocument

**GET /api/v2/conversations/{conversationId}/recordings/{recordingId}** (1 change)

* Operation operationId was changed from getConversationsConversationIdRecordingsRecordingId to getConversationRecording

**PUT /api/v2/conversations/{conversationId}/recordings/{recordingId}** (1 change)

* Operation operationId was changed from putConversationsConversationIdRecordingsRecordingId to putConversationRecording

**PUT /api/v2/outbound/campaigns/{campaignId}/agents/{userId}** (1 change)

* Operation operationId was changed from putOutboundCampaignsCampaignIdAgentsUserId to putOutboundCampaignAgent

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId}** (1 change)

* Operation operationId was changed from getWorkforcemanagementManagementunitsManagementunitIdAgentsAgentId to getWorkforcemanagementManagementunitAgent

**GET /api/v2/orgauthorization/trustors/{trustorOrgId}/users** (1 change)

* Operation operationId was changed from getOrgauthorizationTrustorsTrustororgIdUsers to getOrgauthorizationTrustorUsers

**GET /api/v2/users/{userId}** (1 change)

* Operation operationId was changed from getUsersUserId to getUser

**DELETE /api/v2/users/{userId}** (1 change)

* Operation operationId was changed from deleteUsersUserId to deleteUser

**PATCH /api/v2/users/{userId}** (1 change)

* Operation operationId was changed from patchUsersUserId to patchUser

**POST /api/v2/users/{userId}/invite** (1 change)

* Operation operationId was changed from postUsersUserIdInvite to postUserInvite

**GET /api/v2/recording/mediaretentionpolicies/{policyId}** (1 change)

* Operation operationId was changed from getRecordingMediaretentionpoliciesPolicyId to getRecordingMediaretentionpolicy

**PUT /api/v2/recording/mediaretentionpolicies/{policyId}** (1 change)

* Operation operationId was changed from putRecordingMediaretentionpoliciesPolicyId to putRecordingMediaretentionpolicy

**DELETE /api/v2/recording/mediaretentionpolicies/{policyId}** (1 change)

* Operation operationId was changed from deleteRecordingMediaretentionpoliciesPolicyId to deleteRecordingMediaretentionpolicy

**PATCH /api/v2/recording/mediaretentionpolicies/{policyId}** (1 change)

* Operation operationId was changed from patchRecordingMediaretentionpoliciesPolicyId to patchRecordingMediaretentionpolicy

**POST /api/v2/quality/conversations/{conversationId}/evaluations** (1 change)

* Operation operationId was changed from postQualityConversationsConversationIdEvaluations to postQualityConversationEvaluations

**GET /api/v2/license/users/{userId}** (1 change)

* Operation operationId was changed from getLicenseUsersUserId to getLicenseUser

**GET /api/v2/outbound/dnclists/{dncListId}/importstatus** (1 change)

* Operation operationId was changed from getOutboundDnclistsDnclistIdImportstatus to getOutboundDnclistImportstatus

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/contacts** (1 change)

* Operation operationId was changed from getExternalcontactsOrganizationsExternalorganizationIdContacts to getExternalcontactsOrganizationContacts

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules** (1 change)

* Operation operationId was changed from getWorkforcemanagementManagementunitsManagementunitIdWeeksWeekIdSchedules to getWorkforcemanagementManagementunitWeekSchedules

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules** (1 change)

* Operation operationId was changed from postWorkforcemanagementManagementunitsManagementunitIdWeeksWeekIdSchedules to postWorkforcemanagementManagementunitWeekSchedules

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}** (1 change)

* Operation operationId was changed from getWorkforcemanagementManagementunitsManagementunitIdWeeksWeekIdSchedulesScheduleId to getWorkforcemanagementManagementunitWeekSchedule

**DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}** (1 change)

* Operation operationId was changed from deleteWorkforcemanagementManagementunitsManagementunitIdWeeksWeekIdSchedulesScheduleId to deleteWorkforcemanagementManagementunitWeekSchedule

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}** (1 change)

* Operation operationId was changed from patchWorkforcemanagementManagementunitsManagementunitIdWeeksWeekIdSchedulesScheduleId to patchWorkforcemanagementManagementunitWeekSchedule

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/generationresults** (1 change)

* Operation operationId was changed from getWorkforcemanagementManagementunitsManagementunitIdWeeksWeekIdSchedulesScheduleIdGenerationresults to getWorkforcemanagementManagementunitWeekScheduleGenerationresults

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/reschedule** (1 change)

* Operation operationId was changed from postWorkforcemanagementManagementunitsManagementunitIdWeeksWeekIdSchedulesScheduleIdReschedule to postWorkforcemanagementManagementunitWeekScheduleReschedule

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/copy** (1 change)

* Operation operationId was changed from postWorkforcemanagementManagementunitsManagementunitIdWeeksWeekIdSchedulesScheduleIdCopy to postWorkforcemanagementManagementunitWeekScheduleCopy

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/partialupload** (1 change)

* Operation operationId was changed from postWorkforcemanagementManagementunitsManagementunitIdWeeksWeekIdSchedulesPartialupload to postWorkforcemanagementManagementunitWeekSchedulesPartialupload

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/generate** (1 change)

* Operation operationId was changed from postWorkforcemanagementManagementunitsManagementunitIdWeeksWeekIdSchedulesGenerate to postWorkforcemanagementManagementunitWeekSchedulesGenerate

**POST /api/v2/users/{userId}/password** (1 change)

* Operation operationId was changed from postUsersUserIdPassword to postUserPassword

**GET /api/v2/voicemail/groups/{groupId}/policy** (1 change)

* Operation operationId was changed from getVoicemailGroupsGroupIdPolicy to getVoicemailGroupPolicy

**PATCH /api/v2/voicemail/groups/{groupId}/policy** (1 change)

* Operation operationId was changed from patchVoicemailGroupsGroupIdPolicy to patchVoicemailGroupPolicy

**GET /api/v2/telephony/providers/edges/trunks/{trunkId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesTrunksTrunkId to getTelephonyProvidersEdgesTrunk

**GET /api/v2/outbound/dnclists/{dncListId}/export** (1 change)

* Operation operationId was changed from getOutboundDnclistsDnclistIdExport to getOutboundDnclistExport

**POST /api/v2/outbound/dnclists/{dncListId}/export** (1 change)

* Operation operationId was changed from postOutboundDnclistsDnclistIdExport to postOutboundDnclistExport

**GET /api/v2/outbound/dnclists** (2 changes)

* Parameter dncSourceType was added
* Parameter divisionId was added

**GET /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesPhonebasesettingsPhonebaseId to getTelephonyProvidersEdgesPhonebasesetting

**PUT /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}** (1 change)

* Operation operationId was changed from putTelephonyProvidersEdgesPhonebasesettingsPhonebaseId to putTelephonyProvidersEdgesPhonebasesetting

**DELETE /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}** (1 change)

* Operation operationId was changed from deleteTelephonyProvidersEdgesPhonebasesettingsPhonebaseId to deleteTelephonyProvidersEdgesPhonebasesetting

**GET /api/v2/quality/publishedforms/surveys/{formId}** (1 change)

* Operation operationId was changed from getQualityPublishedformsSurveysFormId to getQualityPublishedformsSurvey

**GET /api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesEdgegroupsEdgegroupId to getTelephonyProvidersEdgesEdgegroup

**PUT /api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}** (1 change)

* Operation operationId was changed from putTelephonyProvidersEdgesEdgegroupsEdgegroupId to putTelephonyProvidersEdgesEdgegroup

**DELETE /api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}** (1 change)

* Operation operationId was changed from deleteTelephonyProvidersEdgesEdgegroupsEdgegroupId to deleteTelephonyProvidersEdgesEdgegroup

**GET /api/v2/telephony/providers/edges/{edgeId}/softwareupdate** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesEdgeIdSoftwareupdate to getTelephonyProvidersEdgeSoftwareupdate

**POST /api/v2/telephony/providers/edges/{edgeId}/softwareupdate** (1 change)

* Operation operationId was changed from postTelephonyProvidersEdgesEdgeIdSoftwareupdate to postTelephonyProvidersEdgeSoftwareupdate

**DELETE /api/v2/telephony/providers/edges/{edgeId}/softwareupdate** (1 change)

* Operation operationId was changed from deleteTelephonyProvidersEdgesEdgeIdSoftwareupdate to deleteTelephonyProvidersEdgeSoftwareupdate

**GET /api/v2/externalcontacts/relationships/{relationshipId}** (1 change)

* Operation operationId was changed from getExternalcontactsRelationshipsRelationshipId to getExternalcontactsRelationship

**PUT /api/v2/externalcontacts/relationships/{relationshipId}** (1 change)

* Operation operationId was changed from putExternalcontactsRelationshipsRelationshipId to putExternalcontactsRelationship

**DELETE /api/v2/externalcontacts/relationships/{relationshipId}** (1 change)

* Operation operationId was changed from deleteExternalcontactsRelationshipsRelationshipId to deleteExternalcontactsRelationship

**GET /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues** (1 change)

* Operation operationId was changed from getContentmanagementWorkspacesWorkspaceIdTagvalues to getContentmanagementWorkspaceTagvalues

**POST /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues** (1 change)

* Operation operationId was changed from postContentmanagementWorkspacesWorkspaceIdTagvalues to postContentmanagementWorkspaceTagvalues

**POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/monitor** (1 change)

* Operation operationId was changed from postConversationsCallsConversationIdParticipantsParticipantIdMonitor to postConversationsCallParticipantMonitor

**POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult** (1 change)

* Operation operationId was changed from postConversationsCallsConversationIdParticipantsParticipantIdConsult to postConversationsCallParticipantConsult

**DELETE /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult** (1 change)

* Operation operationId was changed from deleteConversationsCallsConversationIdParticipantsParticipantIdConsult to deleteConversationsCallParticipantConsult

**PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult** (1 change)

* Operation operationId was changed from patchConversationsCallsConversationIdParticipantsParticipantIdConsult to patchConversationsCallParticipantConsult

**GET /api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Operation operationId was changed from getConversationsCallsConversationIdParticipantsParticipantIdWrapupcodes to getConversationsCallParticipantWrapupcodes

**GET /api/v2/conversations/calls/{conversationId}** (1 change)

* Operation operationId was changed from getConversationsCallsConversationId to getConversationsCall

**POST /api/v2/conversations/calls/{conversationId}** (1 change)

* Operation operationId was changed from postConversationsCallsConversationId to postConversationsCall

**PATCH /api/v2/conversations/calls/{conversationId}** (1 change)

* Operation operationId was changed from patchConversationsCallsConversationId to patchConversationsCall

**PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}/attributes** (1 change)

* Operation operationId was changed from patchConversationsCallsConversationIdParticipantsParticipantIdAttributes to patchConversationsCallParticipantAttributes

**PUT /api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/uuidata** (1 change)

* Operation operationId was changed from putConversationsCallsConversationIdParticipantsParticipantIdCommunicationsCommunicationIdUuidata to putConversationsCallParticipantCommunicationUuidata

**GET /api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Operation operationId was changed from getConversationsCallsConversationIdParticipantsParticipantIdWrapup to getConversationsCallParticipantWrapup

**POST /api/v2/conversations/calls/{conversationId}/participants** (1 change)

* Operation operationId was changed from postConversationsCallsConversationIdParticipants to postConversationsCallParticipants

**PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Operation operationId was changed from patchConversationsCallsConversationIdParticipantsParticipantIdCommunicationsCommunicationId to patchConversationsCallParticipantCommunication

**PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}** (1 change)

* Operation operationId was changed from patchConversationsCallsConversationIdParticipantsParticipantId to patchConversationsCallParticipant

**POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/replace** (1 change)

* Operation operationId was changed from postConversationsCallsConversationIdParticipantsParticipantIdReplace to postConversationsCallParticipantReplace

**POST /api/v2/outbound/dnclists/{dncListId}/phonenumbers** (1 change)

* Operation operationId was changed from postOutboundDnclistsDnclistIdPhonenumbers to postOutboundDnclistPhonenumbers

**DELETE /api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor** (1 change)

* Operation operationId was changed from deleteExternalcontactsOrganizationsExternalorganizationIdTrustor to deleteExternalcontactsOrganizationTrustor

**POST /api/v2/outbound/conversations/{conversationId}/dnc** (1 change)

* Operation operationId was changed from postOutboundConversationsConversationIdDnc to postOutboundConversationDnc

**GET /api/v2/architect/prompts/{promptId}** (1 change)

* Operation operationId was changed from getArchitectPromptsPromptId to getArchitectPrompt

**PUT /api/v2/architect/prompts/{promptId}** (1 change)

* Operation operationId was changed from putArchitectPromptsPromptId to putArchitectPrompt

**DELETE /api/v2/architect/prompts/{promptId}** (1 change)

* Operation operationId was changed from deleteArchitectPromptsPromptId to deleteArchitectPrompt

**POST /api/v2/architect/prompts/{promptId}/history** (1 change)

* Operation operationId was changed from postArchitectPromptsPromptIdHistory to postArchitectPromptHistory

**GET /api/v2/architect/prompts/{promptId}/history/{historyId}** (1 change)

* Operation operationId was changed from getArchitectPromptsPromptIdHistoryHistoryId to getArchitectPromptHistoryHistoryId

**GET /api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}** (1 change)

* Operation operationId was changed from getConfigurationSchemasEdgesVnextSchemacategorySchematype to getConfigurationSchemasEdgesVnextSchemaCategorySchemaType

**GET /api/v2/configuration/schemas/edges/vnext/{schemaCategory}** (1 change)

* Operation operationId was changed from getConfigurationSchemasEdgesVnextSchemacategory to getConfigurationSchemasEdgesVnextSchemaCategory

**GET /api/v2/orgauthorization/trustees/{trusteeOrgId}/users** (1 change)

* Operation operationId was changed from getOrgauthorizationTrusteesTrusteeorgIdUsers to getOrgauthorizationTrusteeUsers

**POST /api/v2/orgauthorization/trustees/{trusteeOrgId}/users** (1 change)

* Operation operationId was changed from postOrgauthorizationTrusteesTrusteeorgIdUsers to postOrgauthorizationTrusteeUsers

**GET /api/v2/recording/batchrequests/{jobId}** (1 change)

* Operation operationId was changed from getRecordingBatchrequestsJobId to getRecordingBatchrequest

**POST /api/v2/telephony/providers/edges/sites/{siteId}/rebalance** (1 change)

* Operation operationId was changed from postTelephonyProvidersEdgesSitesSiteIdRebalance to postTelephonyProvidersEdgesSiteRebalance

**GET /api/v2/routing/email/domains/{domainName}/routes/{routeId}** (1 change)

* Operation operationId was changed from getRoutingEmailDomainsDomainnameRoutesRouteId to getRoutingEmailDomainRoute

**PUT /api/v2/routing/email/domains/{domainName}/routes/{routeId}** (1 change)

* Operation operationId was changed from putRoutingEmailDomainsDomainnameRoutesRouteId to putRoutingEmailDomainRoute

**DELETE /api/v2/routing/email/domains/{domainName}/routes/{routeId}** (1 change)

* Operation operationId was changed from deleteRoutingEmailDomainsDomainnameRoutesRouteId to deleteRoutingEmailDomainRoute

**GET /api/v2/telephony/providers/edges/{edgeId}/setuppackage** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesEdgeIdSetuppackage to getTelephonyProvidersEdgeSetuppackage

**GET /api/v2/outbound/rulesets/{ruleSetId}** (1 change)

* Operation operationId was changed from getOutboundRulesetsRulesetId to getOutboundRuleset

**PUT /api/v2/outbound/rulesets/{ruleSetId}** (1 change)

* Operation operationId was changed from putOutboundRulesetsRulesetId to putOutboundRuleset

**DELETE /api/v2/outbound/rulesets/{ruleSetId}** (1 change)

* Operation operationId was changed from deleteOutboundRulesetsRulesetId to deleteOutboundRuleset

**GET /api/v2/quality/publishedforms/{formId}** (1 change)

* Operation operationId was changed from getQualityPublishedformsFormId to getQualityPublishedform

**GET /api/v2/outbound/campaigns/{campaignId}** (1 change)

* Operation operationId was changed from getOutboundCampaignsCampaignId to getOutboundCampaign

**PUT /api/v2/outbound/campaigns/{campaignId}** (1 change)

* Operation operationId was changed from putOutboundCampaignsCampaignId to putOutboundCampaign

**DELETE /api/v2/outbound/campaigns/{campaignId}** (1 change)

* Operation operationId was changed from deleteOutboundCampaignsCampaignId to deleteOutboundCampaign

**GET /api/v2/outbound/campaigns/{campaignId}/diagnostics** (1 change)

* Operation operationId was changed from getOutboundCampaignsCampaignIdDiagnostics to getOutboundCampaignDiagnostics

**GET /api/v2/outbound/campaigns/{campaignId}/progress** (1 change)

* Operation operationId was changed from getOutboundCampaignsCampaignIdProgress to getOutboundCampaignProgress

**DELETE /api/v2/outbound/campaigns/{campaignId}/progress** (1 change)

* Operation operationId was changed from deleteOutboundCampaignsCampaignIdProgress to deleteOutboundCampaignProgress

**GET /api/v2/routing/queues/{queueId}/wrapupcodes** (1 change)

* Operation operationId was changed from getRoutingQueuesQueueIdWrapupcodes to getRoutingQueueWrapupcodes

**POST /api/v2/routing/queues/{queueId}/wrapupcodes** (1 change)

* Operation operationId was changed from postRoutingQueuesQueueIdWrapupcodes to postRoutingQueueWrapupcodes

**DELETE /api/v2/routing/queues/{queueId}/wrapupcodes/{codeId}** (1 change)

* Operation operationId was changed from deleteRoutingQueuesQueueIdWrapupcodesCodeId to deleteRoutingQueueWrapupcode

**GET /api/v2/architect/systemprompts/{promptId}/resources/{languageCode}** (1 change)

* Operation operationId was changed from getArchitectSystempromptsPromptIdResourcesLanguagecode to getArchitectSystempromptResource

**PUT /api/v2/architect/systemprompts/{promptId}/resources/{languageCode}** (1 change)

* Operation operationId was changed from putArchitectSystempromptsPromptIdResourcesLanguagecode to putArchitectSystempromptResource

**DELETE /api/v2/architect/systemprompts/{promptId}/resources/{languageCode}** (1 change)

* Operation operationId was changed from deleteArchitectSystempromptsPromptIdResourcesLanguagecode to deleteArchitectSystempromptResource

**GET /api/v2/routing/email/domains/{domainId}** (1 change)

* Operation operationId was changed from getRoutingEmailDomainsDomainId to getRoutingEmailDomain

**DELETE /api/v2/routing/email/domains/{domainId}** (1 change)

* Operation operationId was changed from deleteRoutingEmailDomainsDomainId to deleteRoutingEmailDomain

**GET /api/v2/telephony/providers/edges/linebasesettings/{lineBaseId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesLinebasesettingsLinebaseId to getTelephonyProvidersEdgesLinebasesetting

**GET /api/v2/users/{userId}/greetings** (1 change)

* Operation operationId was changed from getUsersUserIdGreetings to getUserGreetings

**POST /api/v2/users/{userId}/greetings** (1 change)

* Operation operationId was changed from postUsersUserIdGreetings to postUserGreetings

**GET /api/v2/contentmanagement/workspaces/{workspaceId}** (1 change)

* Operation operationId was changed from getContentmanagementWorkspacesWorkspaceId to getContentmanagementWorkspace

**PUT /api/v2/contentmanagement/workspaces/{workspaceId}** (1 change)

* Operation operationId was changed from putContentmanagementWorkspacesWorkspaceId to putContentmanagementWorkspace

**DELETE /api/v2/contentmanagement/workspaces/{workspaceId}** (1 change)

* Operation operationId was changed from deleteContentmanagementWorkspacesWorkspaceId to deleteContentmanagementWorkspace

**GET /api/v2/scripts/{scriptId}/pages** (1 change)

* Operation operationId was changed from getScriptsScriptIdPages to getScriptPages

**GET /api/v2/quality/forms/{formId}** (1 change)

* Operation operationId was changed from getQualityFormsFormId to getQualityForm

**PUT /api/v2/quality/forms/{formId}** (1 change)

* Operation operationId was changed from putQualityFormsFormId to putQualityForm

**DELETE /api/v2/quality/forms/{formId}** (1 change)

* Operation operationId was changed from deleteQualityFormsFormId to deleteQualityForm

**GET /api/v2/quality/forms/evaluations/{formId}** (1 change)

* Operation operationId was changed from getQualityFormsEvaluationsFormId to getQualityFormsEvaluation

**PUT /api/v2/quality/forms/evaluations/{formId}** (1 change)

* Operation operationId was changed from putQualityFormsEvaluationsFormId to putQualityFormsEvaluation

**DELETE /api/v2/quality/forms/evaluations/{formId}** (1 change)

* Operation operationId was changed from deleteQualityFormsEvaluationsFormId to deleteQualityFormsEvaluation

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}** (1 change)

* Operation operationId was changed from getExternalcontactsOrganizationsExternalorganizationIdNotesNoteId to getExternalcontactsOrganizationNote

**PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}** (1 change)

* Operation operationId was changed from putExternalcontactsOrganizationsExternalorganizationIdNotesNoteId to putExternalcontactsOrganizationNote

**DELETE /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}** (1 change)

* Operation operationId was changed from deleteExternalcontactsOrganizationsExternalorganizationIdNotesNoteId to deleteExternalcontactsOrganizationNote

**GET /api/v2/flows/{flowId}/versions/{versionId}** (1 change)

* Operation operationId was changed from getFlowsFlowIdVersionsVersionId to getFlowVersion

**GET /api/v2/flows/{flowId}/versions/{versionId}/configuration** (1 change)

* Operation operationId was changed from getFlowsFlowIdVersionsVersionIdConfiguration to getFlowVersionConfiguration

**GET /api/v2/telephony/providers/edges/lines/{lineId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesLinesLineId to getTelephonyProvidersEdgesLine

**GET /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}** (1 change)

* Operation operationId was changed from getContentmanagementWorkspacesWorkspaceIdTagvaluesTagId to getContentmanagementWorkspaceTagvalue

**PUT /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}** (1 change)

* Operation operationId was changed from putContentmanagementWorkspacesWorkspaceIdTagvaluesTagId to putContentmanagementWorkspaceTagvalue

**DELETE /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}** (1 change)

* Operation operationId was changed from deleteContentmanagementWorkspacesWorkspaceIdTagvaluesTagId to deleteContentmanagementWorkspaceTagvalue

**GET /api/v2/outbound/campaigns/{campaignId}/stats** (1 change)

* Operation operationId was changed from getOutboundCampaignsCampaignIdStats to getOutboundCampaignStats

**GET /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}** (1 change)

* Operation operationId was changed from getConversationsConversationIdRecordingsRecordingIdAnnotationsAnnotationId to getConversationRecordingAnnotation

**PUT /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}** (1 change)

* Operation operationId was changed from putConversationsConversationIdRecordingsRecordingIdAnnotationsAnnotationId to putConversationRecordingAnnotation

**DELETE /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}** (1 change)

* Operation operationId was changed from deleteConversationsConversationIdRecordingsRecordingIdAnnotationsAnnotationId to deleteConversationRecordingAnnotation

**GET /api/v2/externalcontacts/contacts/{contactId}/notes** (1 change)

* Operation operationId was changed from getExternalcontactsContactsContactIdNotes to getExternalcontactsContactNotes

**POST /api/v2/externalcontacts/contacts/{contactId}/notes** (1 change)

* Operation operationId was changed from postExternalcontactsContactsContactIdNotes to postExternalcontactsContactNotes

**GET /api/v2/workforcemanagement/managementunits/{muId}/settings** (1 change)

* Operation operationId was changed from getWorkforcemanagementManagementunitsMuIdSettings to getWorkforcemanagementManagementunitSettings

**PATCH /api/v2/workforcemanagement/managementunits/{muId}/settings** (1 change)

* Operation operationId was changed from patchWorkforcemanagementManagementunitsMuIdSettings to patchWorkforcemanagementManagementunitSettings

**GET /api/v2/workforcemanagement/managementunits/{muId}** (1 change)

* Operation operationId was changed from getWorkforcemanagementManagementunitsMuId to getWorkforcemanagementManagementunit

**DELETE /api/v2/workforcemanagement/managementunits/{muId}** (1 change)

* Operation operationId was changed from deleteWorkforcemanagementManagementunitsMuId to deleteWorkforcemanagementManagementunit

**GET /api/v2/quality/forms/{formId}/versions** (1 change)

* Operation operationId was changed from getQualityFormsFormIdVersions to getQualityFormVersions

**GET /api/v2/routing/skills/{skillId}** (1 change)

* Operation operationId was changed from getRoutingSkillsSkillId to getRoutingSkill

**DELETE /api/v2/routing/skills/{skillId}** (1 change)

* Operation operationId was changed from deleteRoutingSkillsSkillId to deleteRoutingSkill

**GET /api/v2/users/{userId}/routingskills** (1 change)

* Operation operationId was changed from getUsersUserIdRoutingskills to getUserRoutingskills

**POST /api/v2/users/{userId}/routingskills** (1 change)

* Operation operationId was changed from postUsersUserIdRoutingskills to postUserRoutingskills

**PATCH /api/v2/users/{userId}/routingskills/bulk** (1 change)

* Operation operationId was changed from patchUsersUserIdRoutingskillsBulk to patchUserRoutingskillsBulk

**PUT /api/v2/users/{userId}/routingskills/{skillId}** (1 change)

* Operation operationId was changed from putUsersUserIdRoutingskillsSkillId to putUserRoutingskill

**DELETE /api/v2/users/{userId}/routingskills/{skillId}** (1 change)

* Operation operationId was changed from deleteUsersUserIdRoutingskillsSkillId to deleteUserRoutingskill

**GET /api/v2/userrecordings/{recordingId}/media** (1 change)

* Operation operationId was changed from getUserrecordingsRecordingIdMedia to getUserrecordingMedia

**GET /api/v2/languages/translations/users/{userId}** (1 change)

* Operation operationId was changed from getLanguagesTranslationsUsersUserId to getLanguagesTranslationsUser

**GET /api/v2/telephony/providers/edges/endpoints/{endpointId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesEndpointsEndpointId to getTelephonyProvidersEdgesEndpoint

**PUT /api/v2/telephony/providers/edges/endpoints/{endpointId}** (1 change)

* Operation operationId was changed from putTelephonyProvidersEdgesEndpointsEndpointId to putTelephonyProvidersEdgesEndpoint

**DELETE /api/v2/telephony/providers/edges/endpoints/{endpointId}** (1 change)

* Operation operationId was changed from deleteTelephonyProvidersEdgesEndpointsEndpointId to deleteTelephonyProvidersEdgesEndpoint

**GET /api/v2/voicemail/userpolicies/{userId}** (1 change)

* Operation operationId was changed from getVoicemailUserpoliciesUserId to getVoicemailUserpolicy

**PATCH /api/v2/voicemail/userpolicies/{userId}** (1 change)

* Operation operationId was changed from patchVoicemailUserpoliciesUserId to patchVoicemailUserpolicy

**GET /api/v2/authorization/divisions/{divisionId}** (1 change)

* Operation operationId was changed from getAuthorizationDivisionsDivisionId to getAuthorizationDivision

**PUT /api/v2/authorization/divisions/{divisionId}** (1 change)

* Operation operationId was changed from putAuthorizationDivisionsDivisionId to putAuthorizationDivision

**DELETE /api/v2/authorization/divisions/{divisionId}** (1 change)

* Operation operationId was changed from deleteAuthorizationDivisionsDivisionId to deleteAuthorizationDivision

**POST /api/v2/authorization/divisions/{divisionId}/objects/{objectType}** (1 change)

* Operation operationId was changed from postAuthorizationDivisionsDivisionIdObjectsObjecttype to postAuthorizationDivisionObject

**GET /api/v2/groups/{groupId}/profile** (1 change)

* Operation operationId was changed from getGroupsGroupIdProfile to getGroupProfile

**GET /api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces/{interfaceId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesEdgeIdPhysicalinterfacesInterfaceId to getTelephonyProvidersEdgePhysicalinterface

**GET /api/v2/routing/queues/{queueId}/mediatypes/{mediaType}/estimatedwaittime** (1 change)

* Operation operationId was changed from getRoutingQueuesQueueIdMediatypesMediatypeEstimatedwaittime to getRoutingQueueMediatypeEstimatedwaittime

**GET /api/v2/flows/datatables/{datatableId}** (1 change)

* Operation operationId was changed from getFlowsDatatablesDatatableId to getFlowsDatatable

**PUT /api/v2/flows/datatables/{datatableId}** (1 change)

* Operation operationId was changed from putFlowsDatatablesDatatableId to putFlowsDatatable

**DELETE /api/v2/flows/datatables/{datatableId}** (1 change)

* Operation operationId was changed from deleteFlowsDatatablesDatatableId to deleteFlowsDatatable

**GET /api/v2/authorization/roles/{roleId}/subjectgrants** (1 change)

* Operation operationId was changed from getAuthorizationRolesRoleIdSubjectgrants to getAuthorizationRoleSubjectgrants

**GET /api/v2/notifications/channels/{channelId}/subscriptions** (1 change)

* Operation operationId was changed from getNotificationsChannelsChannelIdSubscriptions to getNotificationsChannelSubscriptions

**POST /api/v2/notifications/channels/{channelId}/subscriptions** (1 change)

* Operation operationId was changed from postNotificationsChannelsChannelIdSubscriptions to postNotificationsChannelSubscriptions

**PUT /api/v2/notifications/channels/{channelId}/subscriptions** (1 change)

* Operation operationId was changed from putNotificationsChannelsChannelIdSubscriptions to putNotificationsChannelSubscriptions

**DELETE /api/v2/notifications/channels/{channelId}/subscriptions** (1 change)

* Operation operationId was changed from deleteNotificationsChannelsChannelIdSubscriptions to deleteNotificationsChannelSubscriptions

**GET /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}** (1 change)

* Operation operationId was changed from getOutboundContactlistsContactlistIdContactsContactId to getOutboundContactlistContact

**PUT /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}** (1 change)

* Operation operationId was changed from putOutboundContactlistsContactlistIdContactsContactId to putOutboundContactlistContact

**DELETE /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}** (1 change)

* Operation operationId was changed from deleteOutboundContactlistsContactlistIdContactsContactId to deleteOutboundContactlistContact

**GET /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations** (1 change)

* Operation operationId was changed from getConversationsConversationIdRecordingsRecordingIdAnnotations to getConversationRecordingAnnotations

**POST /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations** (1 change)

* Operation operationId was changed from postConversationsConversationIdRecordingsRecordingIdAnnotations to postConversationRecordingAnnotations

**GET /api/v2/quality/calibrations/{calibrationId}** (1 change)

* Operation operationId was changed from getQualityCalibrationsCalibrationId to getQualityCalibration

**PUT /api/v2/quality/calibrations/{calibrationId}** (1 change)

* Operation operationId was changed from putQualityCalibrationsCalibrationId to putQualityCalibration

**DELETE /api/v2/quality/calibrations/{calibrationId}** (1 change)

* Operation operationId was changed from deleteQualityCalibrationsCalibrationId to deleteQualityCalibration

**GET /api/v2/architect/schedules/{scheduleId}** (1 change)

* Operation operationId was changed from getArchitectSchedulesScheduleId to getArchitectSchedule

**PUT /api/v2/architect/schedules/{scheduleId}** (1 change)

* Operation operationId was changed from putArchitectSchedulesScheduleId to putArchitectSchedule

**DELETE /api/v2/architect/schedules/{scheduleId}** (1 change)

* Operation operationId was changed from deleteArchitectSchedulesScheduleId to deleteArchitectSchedule

**GET /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesSitesSiteIdOutboundroutesOutboundrouteId to getTelephonyProvidersEdgesSiteOutboundroute

**PUT /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}** (1 change)

* Operation operationId was changed from putTelephonyProvidersEdgesSitesSiteIdOutboundroutesOutboundrouteId to putTelephonyProvidersEdgesSiteOutboundroute

**DELETE /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}** (1 change)

* Operation operationId was changed from deleteTelephonyProvidersEdgesSitesSiteIdOutboundroutesOutboundrouteId to deleteTelephonyProvidersEdgesSiteOutboundroute

**GET /api/v2/routing/queues/{queueId}/estimatedwaittime** (1 change)

* Operation operationId was changed from getRoutingQueuesQueueIdEstimatedwaittime to getRoutingQueueEstimatedwaittime

**GET /api/v2/architect/dependencytracking/types/{typeId}** (1 change)

* Operation operationId was changed from getArchitectDependencytrackingTypesTypeId to getArchitectDependencytrackingType

**GET /api/v2/outbound/events/{eventId}** (1 change)

* Operation operationId was changed from getOutboundEventsEventId to getOutboundEvent

**GET /api/v2/users/{userId}/callforwarding** (1 change)

* Operation operationId was changed from getUsersUserIdCallforwarding to getUserCallforwarding

**PUT /api/v2/users/{userId}/callforwarding** (1 change)

* Operation operationId was changed from putUsersUserIdCallforwarding to putUserCallforwarding

**PATCH /api/v2/users/{userId}/callforwarding** (1 change)

* Operation operationId was changed from patchUsersUserIdCallforwarding to patchUserCallforwarding

**GET /api/v2/routing/message/recipients/{recipientId}** (1 change)

* Operation operationId was changed from getRoutingMessageRecipientsRecipientId to getRoutingMessageRecipient

**PUT /api/v2/routing/message/recipients/{recipientId}** (1 change)

* Operation operationId was changed from putRoutingMessageRecipientsRecipientId to putRoutingMessageRecipient

**PUT /api/v2/externalcontacts/conversations/{conversationId}** (1 change)

* Operation operationId was changed from putExternalcontactsConversationsConversationId to putExternalcontactsConversation

**GET /api/v2/telephony/providers/edges/{edgeId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesEdgeId to getTelephonyProvidersEdge

**PUT /api/v2/telephony/providers/edges/{edgeId}** (1 change)

* Operation operationId was changed from putTelephonyProvidersEdgesEdgeId to putTelephonyProvidersEdge

**DELETE /api/v2/telephony/providers/edges/{edgeId}** (1 change)

* Operation operationId was changed from deleteTelephonyProvidersEdgesEdgeId to deleteTelephonyProvidersEdge

**GET /api/v2/contentmanagement/securityprofiles/{securityProfileId}** (1 change)

* Operation operationId was changed from getContentmanagementSecurityprofilesSecurityprofileId to getContentmanagementSecurityprofile

**GET /api/v2/conversations/{conversationId}/recordings** (1 change)

* Operation operationId was changed from getConversationsConversationIdRecordings to getConversationRecordings

**GET /api/v2/users/{userId}/outofoffice** (1 change)

* Operation operationId was changed from getUsersUserIdOutofoffice to getUserOutofoffice

**PUT /api/v2/users/{userId}/outofoffice** (1 change)

* Operation operationId was changed from putUsersUserIdOutofoffice to putUserOutofoffice

**GET /api/v2/contentmanagement/shares/{shareId}** (1 change)

* Operation operationId was changed from getContentmanagementSharesShareId to getContentmanagementShare

**DELETE /api/v2/contentmanagement/shares/{shareId}** (1 change)

* Operation operationId was changed from deleteContentmanagementSharesShareId to deleteContentmanagementShare

**GET /api/v2/contentmanagement/documents/{documentId}/content** (1 change)

* Operation operationId was changed from getContentmanagementDocumentsDocumentIdContent to getContentmanagementDocumentContent

**POST /api/v2/contentmanagement/documents/{documentId}/content** (1 change)

* Operation operationId was changed from postContentmanagementDocumentsDocumentIdContent to postContentmanagementDocumentContent

**GET /api/v2/telephony/providers/edges/trunks/{trunkId}/metrics** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesTrunksTrunkIdMetrics to getTelephonyProvidersEdgesTrunkMetrics

**GET /api/v2/greetings/{greetingId}/media** (1 change)

* Operation operationId was changed from getGreetingsGreetingIdMedia to getGreetingMedia

**POST /api/v2/workforcemanagement/managementunits/{muId}/schedules/search** (1 change)

* Operation operationId was changed from postWorkforcemanagementManagementunitsMuIdSchedulesSearch to postWorkforcemanagementManagementunitSchedulesSearch

**GET /api/v2/integrations/credentials/{credentialId}** (1 change)

* Operation operationId was changed from getIntegrationsCredentialsCredentialId to getIntegrationsCredential

**PUT /api/v2/integrations/credentials/{credentialId}** (1 change)

* Operation operationId was changed from putIntegrationsCredentialsCredentialId to putIntegrationsCredential

**DELETE /api/v2/integrations/credentials/{credentialId}** (1 change)

* Operation operationId was changed from deleteIntegrationsCredentialsCredentialId to deleteIntegrationsCredential

**GET /api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}** (1 change)

* Operation operationId was changed from getConfigurationSchemasEdgesVnextSchemacategorySchematypeSchemaId to getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaId

**GET /api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}/{extensionType}/{metadataId}** (1 change)

* Operation operationId was changed from getConfigurationSchemasEdgesVnextSchemacategorySchematypeSchemaIdExtensiontypeMetadataId to getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId

**GET /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}** (1 change)

* Operation operationId was changed from getExternalcontactsContactsContactIdNotesNoteId to getExternalcontactsContactNote

**PUT /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}** (1 change)

* Operation operationId was changed from putExternalcontactsContactsContactIdNotesNoteId to putExternalcontactsContactNote

**DELETE /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}** (1 change)

* Operation operationId was changed from deleteExternalcontactsContactsContactIdNotesNoteId to deleteExternalcontactsContactNote

**GET /api/v2/telephony/providers/edges/extensions/{extensionId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesExtensionsExtensionId to getTelephonyProvidersEdgesExtension

**PUT /api/v2/telephony/providers/edges/extensions/{extensionId}** (1 change)

* Operation operationId was changed from putTelephonyProvidersEdgesExtensionsExtensionId to putTelephonyProvidersEdgesExtension

**GET /api/v2/outbound/dnclists/{dncListId}** (1 change)

* Operation operationId was changed from getOutboundDnclistsDnclistId to getOutboundDnclist

**PUT /api/v2/outbound/dnclists/{dncListId}** (1 change)

* Operation operationId was changed from putOutboundDnclistsDnclistId to putOutboundDnclist

**DELETE /api/v2/outbound/dnclists/{dncListId}** (1 change)

* Operation operationId was changed from deleteOutboundDnclistsDnclistId to deleteOutboundDnclist

**GET /api/v2/users/{userId}/trustors** (1 change)

* Operation operationId was changed from getUsersUserIdTrustors to getUserTrustors

**GET /api/v2/contentmanagement/documents/{documentId}/audits** (1 change)

* Operation operationId was changed from getContentmanagementDocumentsDocumentIdAudits to getContentmanagementDocumentAudits

**PATCH /api/v2/users/{userId}/queues/{queueId}** (1 change)

* Operation operationId was changed from patchUsersUserIdQueuesQueueId to patchUserQueue

**GET /api/v2/telephony/providers/edges/certificateauthorities/{certificateId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesCertificateauthoritiesCertificateId to getTelephonyProvidersEdgesCertificateauthority

**PUT /api/v2/telephony/providers/edges/certificateauthorities/{certificateId}** (1 change)

* Operation operationId was changed from putTelephonyProvidersEdgesCertificateauthoritiesCertificateId to putTelephonyProvidersEdgesCertificateauthority

**DELETE /api/v2/telephony/providers/edges/certificateauthorities/{certificateId}** (1 change)

* Operation operationId was changed from deleteTelephonyProvidersEdgesCertificateauthoritiesCertificateId to deleteTelephonyProvidersEdgesCertificateauthority

**GET /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesEdgeIdLogicalinterfacesInterfaceId to getTelephonyProvidersEdgeLogicalinterface

**PUT /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}** (1 change)

* Operation operationId was changed from putTelephonyProvidersEdgesEdgeIdLogicalinterfacesInterfaceId to putTelephonyProvidersEdgeLogicalinterface

**DELETE /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}** (1 change)

* Operation operationId was changed from deleteTelephonyProvidersEdgesEdgeIdLogicalinterfacesInterfaceId to deleteTelephonyProvidersEdgeLogicalinterface

**GET /api/v2/groups/{groupId}/members** (1 change)

* Operation operationId was changed from getGroupsGroupIdMembers to getGroupMembers

**POST /api/v2/groups/{groupId}/members** (1 change)

* Operation operationId was changed from postGroupsGroupIdMembers to postGroupMembers

**DELETE /api/v2/groups/{groupId}/members** (1 change)

* Operation operationId was changed from deleteGroupsGroupIdMembers to deleteGroupMembers

**GET /api/v2/routing/wrapupcodes/{codeId}** (1 change)

* Operation operationId was changed from getRoutingWrapupcodesCodeId to getRoutingWrapupcode

**PUT /api/v2/routing/wrapupcodes/{codeId}** (1 change)

* Operation operationId was changed from putRoutingWrapupcodesCodeId to putRoutingWrapupcode

**DELETE /api/v2/routing/wrapupcodes/{codeId}** (1 change)

* Operation operationId was changed from deleteRoutingWrapupcodesCodeId to deleteRoutingWrapupcode

**POST /api/v2/workforcemanagement/managementunits/{muId}/historicaladherencequery** (1 change)

* Operation operationId was changed from postWorkforcemanagementManagementunitsMuIdHistoricaladherencequery to postWorkforcemanagementManagementunitHistoricaladherencequery

**GET /api/v2/routing/queues/{queueId}** (1 change)

* Operation operationId was changed from getRoutingQueuesQueueId to getRoutingQueue

**PUT /api/v2/routing/queues/{queueId}** (1 change)

* Operation operationId was changed from putRoutingQueuesQueueId to putRoutingQueue

**DELETE /api/v2/routing/queues/{queueId}** (1 change)

* Operation operationId was changed from deleteRoutingQueuesQueueId to deleteRoutingQueue

**GET /api/v2/analytics/reporting/schedules/{scheduleId}/history/{runId}** (1 change)

* Operation operationId was changed from getAnalyticsReportingSchedulesScheduleIdHistoryRunId to getAnalyticsReportingScheduleHistoryRunId

**GET /api/v2/flows/{flowId}/versions** (1 change)

* Operation operationId was changed from getFlowsFlowIdVersions to getFlowVersions

**POST /api/v2/flows/{flowId}/versions** (1 change)

* Operation operationId was changed from postFlowsFlowIdVersions to postFlowVersions

**GET /api/v2/telephony/providers/edges/sites/{siteId}/numberplans** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesSitesSiteIdNumberplans to getTelephonyProvidersEdgesSiteNumberplans

**PUT /api/v2/telephony/providers/edges/sites/{siteId}/numberplans** (1 change)

* Operation operationId was changed from putTelephonyProvidersEdgesSitesSiteIdNumberplans to putTelephonyProvidersEdgesSiteNumberplans

**POST /api/v2/outbound/contactlists/{contactListId}/contacts** (1 change)

* Operation operationId was changed from postOutboundContactlistsContactlistIdContacts to postOutboundContactlistContacts

**DELETE /api/v2/outbound/contactlists/{contactListId}/contacts** (1 change)

* Operation operationId was changed from deleteOutboundContactlistsContactlistIdContacts to deleteOutboundContactlistContacts

**GET /api/v2/telephony/providers/edges/sites/{siteId}/numberplans/classifications** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesSitesSiteIdNumberplansClassifications to getTelephonyProvidersEdgesSiteNumberplansClassifications

**GET /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesExtensionpoolsExtensionpoolId to getTelephonyProvidersEdgesExtensionpool

**PUT /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}** (1 change)

* Operation operationId was changed from putTelephonyProvidersEdgesExtensionpoolsExtensionpoolId to putTelephonyProvidersEdgesExtensionpool

**DELETE /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}** (1 change)

* Operation operationId was changed from deleteTelephonyProvidersEdgesExtensionpoolsExtensionpoolId to deleteTelephonyProvidersEdgesExtensionpool

**GET /api/v2/groups/{groupId}/individuals** (1 change)

* Operation operationId was changed from getGroupsGroupIdIndividuals to getGroupIndividuals

**GET /api/v2/voicemail/messages/{messageId}** (1 change)

* Operation operationId was changed from getVoicemailMessagesMessageId to getVoicemailMessage

**PUT /api/v2/voicemail/messages/{messageId}** (1 change)

* Operation operationId was changed from putVoicemailMessagesMessageId to putVoicemailMessage

**DELETE /api/v2/voicemail/messages/{messageId}** (1 change)

* Operation operationId was changed from deleteVoicemailMessagesMessageId to deleteVoicemailMessage

**PATCH /api/v2/voicemail/messages/{messageId}** (1 change)

* Operation operationId was changed from patchVoicemailMessagesMessageId to patchVoicemailMessage

**GET /api/v2/voicemail/messages/{messageId}/media** (1 change)

* Operation operationId was changed from getVoicemailMessagesMessageIdMedia to getVoicemailMessageMedia

**GET /api/v2/authorization/subjects/{subjectId}** (1 change)

* Operation operationId was changed from getAuthorizationSubjectsSubjectId to getAuthorizationSubject

**POST /api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId}** (1 change)

* Operation operationId was changed from postAuthorizationSubjectsSubjectIdDivisionsDivisionIdRolesRoleId to postAuthorizationSubjectDivisionRole

**DELETE /api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId}** (1 change)

* Operation operationId was changed from deleteAuthorizationSubjectsSubjectIdDivisionsDivisionIdRolesRoleId to deleteAuthorizationSubjectDivisionRole

**PATCH /api/v2/users/{userId}/routinglanguages/bulk** (1 change)

* Operation operationId was changed from patchUsersUserIdRoutinglanguagesBulk to patchUserRoutinglanguagesBulk

**GET /api/v2/users/{userId}/routinglanguages** (1 change)

* Operation operationId was changed from getUsersUserIdRoutinglanguages to getUserRoutinglanguages

**POST /api/v2/users/{userId}/routinglanguages** (1 change)

* Operation operationId was changed from postUsersUserIdRoutinglanguages to postUserRoutinglanguages

**DELETE /api/v2/users/{userId}/routinglanguages/{languageId}** (1 change)

* Operation operationId was changed from deleteUsersUserIdRoutinglanguagesLanguageId to deleteUserRoutinglanguage

**PATCH /api/v2/users/{userId}/routinglanguages/{languageId}** (1 change)

* Operation operationId was changed from patchUsersUserIdRoutinglanguagesLanguageId to patchUserRoutinglanguage

**GET /api/v2/responsemanagement/libraries/{libraryId}** (1 change)

* Operation operationId was changed from getResponsemanagementLibrariesLibraryId to getResponsemanagementLibrary

**PUT /api/v2/responsemanagement/libraries/{libraryId}** (1 change)

* Operation operationId was changed from putResponsemanagementLibrariesLibraryId to putResponsemanagementLibrary

**DELETE /api/v2/responsemanagement/libraries/{libraryId}** (1 change)

* Operation operationId was changed from deleteResponsemanagementLibrariesLibraryId to deleteResponsemanagementLibrary

**GET /api/v2/responsemanagement/responses/{responseId}** (1 change)

* Operation operationId was changed from getResponsemanagementResponsesResponseId to getResponsemanagementResponse

**PUT /api/v2/responsemanagement/responses/{responseId}** (1 change)

* Operation operationId was changed from putResponsemanagementResponsesResponseId to putResponsemanagementResponse

**DELETE /api/v2/responsemanagement/responses/{responseId}** (1 change)

* Operation operationId was changed from deleteResponsemanagementResponsesResponseId to deleteResponsemanagementResponse

**GET /api/v2/architect/ivrs/{ivrId}** (1 change)

* Operation operationId was changed from getArchitectIvrsIvrId to getArchitectIvr

**PUT /api/v2/architect/ivrs/{ivrId}** (1 change)

* Operation operationId was changed from putArchitectIvrsIvrId to putArchitectIvr

**DELETE /api/v2/architect/ivrs/{ivrId}** (1 change)

* Operation operationId was changed from deleteArchitectIvrsIvrId to deleteArchitectIvr

**GET /api/v2/conversations/{conversationId}** (1 change)

* Operation operationId was changed from getConversationsConversationId to getConversation

**POST /api/v2/conversations/{conversationId}/disconnect** (1 change)

* Operation operationId was changed from postConversationsConversationIdDisconnect to postConversationDisconnect

**GET /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Operation operationId was changed from getConversationsChatsConversationIdParticipantsParticipantIdWrapupcodes to getConversationsChatParticipantWrapupcodes

**GET /api/v2/conversations/chats/{conversationId}** (1 change)

* Operation operationId was changed from getConversationsChatsConversationId to getConversationsChat

**PATCH /api/v2/conversations/chats/{conversationId}** (1 change)

* Operation operationId was changed from patchConversationsChatsConversationId to patchConversationsChat

**PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}/attributes** (1 change)

* Operation operationId was changed from patchConversationsChatsConversationIdParticipantsParticipantIdAttributes to patchConversationsChatParticipantAttributes

**GET /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Operation operationId was changed from getConversationsChatsConversationIdParticipantsParticipantIdWrapup to getConversationsChatParticipantWrapup

**PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Operation operationId was changed from patchConversationsChatsConversationIdParticipantsParticipantIdCommunicationsCommunicationId to patchConversationsChatParticipantCommunication

**PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}** (1 change)

* Operation operationId was changed from patchConversationsChatsConversationIdParticipantsParticipantId to patchConversationsChatParticipant

**POST /api/v2/conversations/chats/{conversationId}/participants/{participantId}/replace** (1 change)

* Operation operationId was changed from postConversationsChatsConversationIdParticipantsParticipantIdReplace to postConversationsChatParticipantReplace

**GET /api/v2/languages/{languageId}** (1 change)

* Operation operationId was changed from getLanguagesLanguageId to getLanguage

**DELETE /api/v2/languages/{languageId}** (1 change)

* Operation operationId was changed from deleteLanguagesLanguageId to deleteLanguage

**GET /api/v2/outbound/campaignrules/{campaignRuleId}** (1 change)

* Operation operationId was changed from getOutboundCampaignrulesCampaignruleId to getOutboundCampaignrule

**PUT /api/v2/outbound/campaignrules/{campaignRuleId}** (1 change)

* Operation operationId was changed from putOutboundCampaignrulesCampaignruleId to putOutboundCampaignrule

**DELETE /api/v2/outbound/campaignrules/{campaignRuleId}** (1 change)

* Operation operationId was changed from deleteOutboundCampaignrulesCampaignruleId to deleteOutboundCampaignrule

**PUT /api/v2/users/{userId}/station/associatedstation/{stationId}** (1 change)

* Operation operationId was changed from putUsersUserIdStationAssociatedstationStationId to putUserStationAssociatedstationStationId

**DELETE /api/v2/users/{userId}/station/associatedstation** (1 change)

* Operation operationId was changed from deleteUsersUserIdStationAssociatedstation to deleteUserStationAssociatedstation

**PUT /api/v2/users/{userId}/station/defaultstation/{stationId}** (1 change)

* Operation operationId was changed from putUsersUserIdStationDefaultstationStationId to putUserStationDefaultstationStationId

**DELETE /api/v2/users/{userId}/station/defaultstation** (1 change)

* Operation operationId was changed from deleteUsersUserIdStationDefaultstation to deleteUserStationDefaultstation

**GET /api/v2/users/{userId}/station** (1 change)

* Operation operationId was changed from getUsersUserIdStation to getUserStation

**GET /api/v2/contentmanagement/workspaces/{workspaceId}/documents** (1 change)

* Operation operationId was changed from getContentmanagementWorkspacesWorkspaceIdDocuments to getContentmanagementWorkspaceDocuments

**GET /api/v2/routing/queues/{queueId}/users** (1 change)

* Operation operationId was changed from getRoutingQueuesQueueIdUsers to getRoutingQueueUsers

**POST /api/v2/routing/queues/{queueId}/users** (1 change)

* Operation operationId was changed from postRoutingQueuesQueueIdUsers to postRoutingQueueUsers

**PATCH /api/v2/routing/queues/{queueId}/users** (1 change)

* Operation operationId was changed from patchRoutingQueuesQueueIdUsers to patchRoutingQueueUsers

**GET /api/v2/architect/emergencygroups/{emergencyGroupId}** (1 change)

* Operation operationId was changed from getArchitectEmergencygroupsEmergencygroupId to getArchitectEmergencygroup

**PUT /api/v2/architect/emergencygroups/{emergencyGroupId}** (1 change)

* Operation operationId was changed from putArchitectEmergencygroupsEmergencygroupId to putArchitectEmergencygroup

**DELETE /api/v2/architect/emergencygroups/{emergencyGroupId}** (1 change)

* Operation operationId was changed from deleteArchitectEmergencygroupsEmergencygroupId to deleteArchitectEmergencygroup

**GET /api/v2/telephony/providers/edges/sites/{siteId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesSitesSiteId to getTelephonyProvidersEdgesSite

**PUT /api/v2/telephony/providers/edges/sites/{siteId}** (1 change)

* Operation operationId was changed from putTelephonyProvidersEdgesSitesSiteId to putTelephonyProvidersEdgesSite

**DELETE /api/v2/telephony/providers/edges/sites/{siteId}** (1 change)

* Operation operationId was changed from deleteTelephonyProvidersEdgesSitesSiteId to deleteTelephonyProvidersEdgesSite

**PATCH /api/v2/organizations/features/{featureName}** (1 change)

* Operation operationId was changed from patchOrganizationsFeaturesFeaturename to patchOrganizationsFeature

**GET /api/v2/outbound/contactlistfilters/{contactListFilterId}** (1 change)

* Operation operationId was changed from getOutboundContactlistfiltersContactlistfilterId to getOutboundContactlistfilter

**PUT /api/v2/outbound/contactlistfilters/{contactListFilterId}** (1 change)

* Operation operationId was changed from putOutboundContactlistfiltersContactlistfilterId to putOutboundContactlistfilter

**DELETE /api/v2/outbound/contactlistfilters/{contactListFilterId}** (1 change)

* Operation operationId was changed from deleteOutboundContactlistfiltersContactlistfilterId to deleteOutboundContactlistfilter

**GET /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}** (1 change)

* Operation operationId was changed from getOrgauthorizationTrustorsTrustororgIdUsersTrusteeuserId to getOrgauthorizationTrustorUser

**PUT /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}** (1 change)

* Operation operationId was changed from putOrgauthorizationTrustorsTrustororgIdUsersTrusteeuserId to putOrgauthorizationTrustorUser

**DELETE /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}** (1 change)

* Operation operationId was changed from deleteOrgauthorizationTrustorsTrustororgIdUsersTrusteeuserId to deleteOrgauthorizationTrustorUser

**GET /api/v2/scripts/{scriptId}/pages/{pageId}** (1 change)

* Operation operationId was changed from getScriptsScriptIdPagesPageId to getScriptPage

**GET /api/v2/contentmanagement/documents/{documentId}** (1 change)

* Operation operationId was changed from getContentmanagementDocumentsDocumentId to getContentmanagementDocument

**POST /api/v2/contentmanagement/documents/{documentId}** (1 change)

* Operation operationId was changed from postContentmanagementDocumentsDocumentId to postContentmanagementDocument

**DELETE /api/v2/contentmanagement/documents/{documentId}** (1 change)

* Operation operationId was changed from deleteContentmanagementDocumentsDocumentId to deleteContentmanagementDocument

**GET /api/v2/workforcemanagement/managementunits/{muId}/users** (1 change)

* Operation operationId was changed from getWorkforcemanagementManagementunitsMuIdUsers to getWorkforcemanagementManagementunitUsers

**GET /api/v2/users/{userId}/geolocations/{clientId}** (1 change)

* Operation operationId was changed from getUsersUserIdGeolocationsClientId to getUserGeolocation

**PATCH /api/v2/users/{userId}/geolocations/{clientId}** (1 change)

* Operation operationId was changed from patchUsersUserIdGeolocationsClientId to patchUserGeolocation

**GET /api/v2/flows/datatables/{datatableId}/rows** (1 change)

* Operation operationId was changed from getFlowsDatatablesDatatableIdRows to getFlowsDatatableRows

**POST /api/v2/flows/datatables/{datatableId}/rows** (1 change)

* Operation operationId was changed from postFlowsDatatablesDatatableIdRows to postFlowsDatatableRows

**GET /api/v2/authorization/roles/{roleId}** (1 change)

* Operation operationId was changed from getAuthorizationRolesRoleId to getAuthorizationRole

**POST /api/v2/authorization/roles/{roleId}** (1 change)

* Operation operationId was changed from postAuthorizationRolesRoleId to postAuthorizationRole

**PUT /api/v2/authorization/roles/{roleId}** (1 change)

* Operation operationId was changed from putAuthorizationRolesRoleId to putAuthorizationRole

**DELETE /api/v2/authorization/roles/{roleId}** (1 change)

* Operation operationId was changed from deleteAuthorizationRolesRoleId to deleteAuthorizationRole

**PATCH /api/v2/authorization/roles/{roleId}** (1 change)

* Operation operationId was changed from patchAuthorizationRolesRoleId to patchAuthorizationRole

**GET /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}** (1 change)

* Operation operationId was changed from getOutboundCallanalysisresponsesetsCallanalysissetId to getOutboundCallanalysisresponseset

**PUT /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}** (1 change)

* Operation operationId was changed from putOutboundCallanalysisresponsesetsCallanalysissetId to putOutboundCallanalysisresponseset

**DELETE /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}** (1 change)

* Operation operationId was changed from deleteOutboundCallanalysisresponsesetsCallanalysissetId to deleteOutboundCallanalysisresponseset

**GET /api/v2/voicemail/groups/{groupId}/mailbox** (1 change)

* Operation operationId was changed from getVoicemailGroupsGroupIdMailbox to getVoicemailGroupMailbox

**DELETE /api/v2/conversations/{conversationId}/participants/{participantId}/codes/{addCommunicationCode}** (1 change)

* Operation operationId was changed from deleteConversationsConversationIdParticipantsParticipantIdCodesAddcommunicationcode to deleteConversationParticipantCode

**GET /api/v2/scripts/published/{scriptId}/pages/{pageId}** (1 change)

* Operation operationId was changed from getScriptsPublishedScriptIdPagesPageId to getScriptsPublishedScriptIdPage

**POST /api/v2/analytics/conversations/{conversationId}/details/properties** (1 change)

* Operation operationId was changed from postAnalyticsConversationsConversationIdDetailsProperties to postAnalyticsConversationDetailsProperties

**GET /api/v2/analytics/conversations/{conversationId}/details** (1 change)

* Operation operationId was changed from getAnalyticsConversationsConversationIdDetails to getAnalyticsConversationDetails

**GET /api/v2/integrations/types/{typeId}/configschemas/{configType}** (1 change)

* Operation operationId was changed from getIntegrationsTypesTypeIdConfigschemasConfigtype to getIntegrationsTypeConfigschema

**GET /api/v2/externalcontacts/contacts/{contactId}** (1 change)

* Operation operationId was changed from getExternalcontactsContactsContactId to getExternalcontactsContact

**PUT /api/v2/externalcontacts/contacts/{contactId}** (1 change)

* Operation operationId was changed from putExternalcontactsContactsContactId to putExternalcontactsContact

**DELETE /api/v2/externalcontacts/contacts/{contactId}** (1 change)

* Operation operationId was changed from deleteExternalcontactsContactsContactId to deleteExternalcontactsContact

**GET /api/v2/messaging/stickers/{messengerType}** (1 change)

* Operation operationId was changed from getMessagingStickersMessengertype to getMessagingSticker

**POST /api/v2/oauth/clients/{clientId}/secret** (1 change)

* Operation operationId was changed from postOauthClientsClientIdSecret to postOauthClientSecret

**GET /api/v2/oauth/clients/{clientId}** (1 change)

* Operation operationId was changed from getOauthClientsClientId to getOauthClient

**PUT /api/v2/oauth/clients/{clientId}** (1 change)

* Operation operationId was changed from putOauthClientsClientId to putOauthClient

**DELETE /api/v2/oauth/clients/{clientId}** (1 change)

* Operation operationId was changed from deleteOauthClientsClientId to deleteOauthClient

**DELETE /api/v2/routing/queues/{queueId}/users/{memberId}** (1 change)

* Operation operationId was changed from deleteRoutingQueuesQueueIdUsersMemberId to deleteRoutingQueueUser

**PATCH /api/v2/routing/queues/{queueId}/users/{memberId}** (1 change)

* Operation operationId was changed from patchRoutingQueuesQueueIdUsersMemberId to patchRoutingQueueUser

**GET /api/v2/fax/documents/{documentId}/content** (1 change)

* Operation operationId was changed from getFaxDocumentsDocumentIdContent to getFaxDocumentContent

**GET /api/v2/outbound/sequences/{sequenceId}** (1 change)

* Operation operationId was changed from getOutboundSequencesSequenceId to getOutboundSequence

**PUT /api/v2/outbound/sequences/{sequenceId}** (1 change)

* Operation operationId was changed from putOutboundSequencesSequenceId to putOutboundSequence

**DELETE /api/v2/outbound/sequences/{sequenceId}** (1 change)

* Operation operationId was changed from deleteOutboundSequencesSequenceId to deleteOutboundSequence

**GET /api/v2/orgauthorization/trustors/{trustorOrgId}** (1 change)

* Operation operationId was changed from getOrgauthorizationTrustorsTrustororgId to getOrgauthorizationTrustor

**DELETE /api/v2/orgauthorization/trustors/{trustorOrgId}** (1 change)

* Operation operationId was changed from deleteOrgauthorizationTrustorsTrustororgId to deleteOrgauthorizationTrustor

**GET /api/v2/telephony/providers/edges/dids/{didId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesDidsDidId to getTelephonyProvidersEdgesDid

**PUT /api/v2/telephony/providers/edges/dids/{didId}** (1 change)

* Operation operationId was changed from putTelephonyProvidersEdgesDidsDidId to putTelephonyProvidersEdgesDid

**GET /api/v2/users/{userId}/queues** (1 change)

* Operation operationId was changed from getUsersUserIdQueues to getUserQueues

**PATCH /api/v2/users/{userId}/queues** (1 change)

* Operation operationId was changed from patchUsersUserIdQueues to patchUserQueues

**GET /api/v2/recording/localkeys/settings/{settingsId}** (1 change)

* Operation operationId was changed from getRecordingLocalkeysSettingsSettingsId to getRecordingLocalkeysSetting

**PUT /api/v2/recording/localkeys/settings/{settingsId}** (1 change)

* Operation operationId was changed from putRecordingLocalkeysSettingsSettingsId to putRecordingLocalkeysSetting

**GET /api/v2/architect/prompts/{promptId}/resources/{languageCode}** (1 change)

* Operation operationId was changed from getArchitectPromptsPromptIdResourcesLanguagecode to getArchitectPromptResource

**PUT /api/v2/architect/prompts/{promptId}/resources/{languageCode}** (1 change)

* Operation operationId was changed from putArchitectPromptsPromptIdResourcesLanguagecode to putArchitectPromptResource

**DELETE /api/v2/architect/prompts/{promptId}/resources/{languageCode}** (1 change)

* Operation operationId was changed from deleteArchitectPromptsPromptIdResourcesLanguagecode to deleteArchitectPromptResource

**PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor/{trustorId}** (1 change)

* Operation operationId was changed from putExternalcontactsOrganizationsExternalorganizationIdTrustorTrustorId to putExternalcontactsOrganizationTrustorTrustorId

**GET /api/v2/outbound/callabletimesets/{callableTimeSetId}** (1 change)

* Operation operationId was changed from getOutboundCallabletimesetsCallabletimesetId to getOutboundCallabletimeset

**PUT /api/v2/outbound/callabletimesets/{callableTimeSetId}** (1 change)

* Operation operationId was changed from putOutboundCallabletimesetsCallabletimesetId to putOutboundCallabletimeset

**DELETE /api/v2/outbound/callabletimesets/{callableTimeSetId}** (1 change)

* Operation operationId was changed from deleteOutboundCallabletimesetsCallabletimesetId to deleteOutboundCallabletimeset

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts** (1 change)

* Operation operationId was changed from getWorkforcemanagementManagementunitsManagementunitIdWeeksWeekdateIdShorttermforecasts to getWorkforcemanagementManagementunitWeekShorttermforecasts

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts** (1 change)

* Operation operationId was changed from postWorkforcemanagementManagementunitsManagementunitIdWeeksWeekdateIdShorttermforecasts to postWorkforcemanagementManagementunitWeekShorttermforecasts

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/partialupload** (1 change)

* Operation operationId was changed from postWorkforcemanagementManagementunitsManagementunitIdWeeksWeekdateIdShorttermforecastsPartialupload to postWorkforcemanagementManagementunitWeekShorttermforecastsPartialupload

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/generate** (1 change)

* Operation operationId was changed from postWorkforcemanagementManagementunitsManagementunitIdWeeksWeekdateIdShorttermforecastsGenerate to postWorkforcemanagementManagementunitWeekShorttermforecastsGenerate

**DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}** (1 change)

* Operation operationId was changed from deleteWorkforcemanagementManagementunitsManagementunitIdWeeksWeekdateIdShorttermforecastsForecastId to deleteWorkforcemanagementManagementunitWeekShorttermforecast

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/final** (1 change)

* Operation operationId was changed from getWorkforcemanagementManagementunitsManagementunitIdWeeksWeekdateIdShorttermforecastsForecastIdFinal to getWorkforcemanagementManagementunitWeekShorttermforecastFinal

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/copy** (1 change)

* Operation operationId was changed from postWorkforcemanagementManagementunitsManagementunitIdWeeksWeekdateIdShorttermforecastsForecastIdCopy to postWorkforcemanagementManagementunitWeekShorttermforecastCopy

**GET /api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesEdgegroupsEdgegroupIdEdgetrunkbasesEdgetrunkbaseId to getTelephonyProvidersEdgesEdgegroupEdgetrunkbase

**PUT /api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId}** (1 change)

* Operation operationId was changed from putTelephonyProvidersEdgesEdgegroupsEdgegroupIdEdgetrunkbasesEdgetrunkbaseId to putTelephonyProvidersEdgesEdgegroupEdgetrunkbase

**GET /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Operation operationId was changed from getConversationsCallbacksConversationIdParticipantsParticipantIdWrapupcodes to getConversationsCallbackParticipantWrapupcodes

**GET /api/v2/conversations/callbacks/{conversationId}** (1 change)

* Operation operationId was changed from getConversationsCallbacksConversationId to getConversationsCallback

**PATCH /api/v2/conversations/callbacks/{conversationId}** (1 change)

* Operation operationId was changed from patchConversationsCallbacksConversationId to patchConversationsCallback

**PATCH /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/attributes** (1 change)

* Operation operationId was changed from patchConversationsCallbacksConversationIdParticipantsParticipantIdAttributes to patchConversationsCallbackParticipantAttributes

**GET /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Operation operationId was changed from getConversationsCallbacksConversationIdParticipantsParticipantIdWrapup to getConversationsCallbackParticipantWrapup

**PATCH /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Operation operationId was changed from patchConversationsCallbacksConversationIdParticipantsParticipantIdCommunicationsCommunicationId to patchConversationsCallbackParticipantCommunication

**PATCH /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}** (1 change)

* Operation operationId was changed from patchConversationsCallbacksConversationIdParticipantsParticipantId to patchConversationsCallbackParticipant

**POST /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/replace** (1 change)

* Operation operationId was changed from postConversationsCallbacksConversationIdParticipantsParticipantIdReplace to postConversationsCallbackParticipantReplace

**GET /api/v2/conversations/{conversationId}/recordingmetadata** (1 change)

* Operation operationId was changed from getConversationsConversationIdRecordingmetadata to getConversationRecordingmetadata

**POST /api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}/upload** (1 change)

* Operation operationId was changed from postTelephonyProvidersEdgesEdgeIdLogsJobsJobIdUpload to postTelephonyProvidersEdgeLogsJobUpload

**GET /api/v2/license/definitions/{licenseId}** (1 change)

* Operation operationId was changed from getLicenseDefinitionsLicenseId to getLicenseDefinition

**GET /api/v2/orphanrecordings/{orphanId}/media** (1 change)

* Operation operationId was changed from getOrphanrecordingsOrphanIdMedia to getOrphanrecordingMedia

**PATCH /api/v2/recordings/screensessions/{recordingSessionId}** (1 change)

* Operation operationId was changed from patchRecordingsScreensessionsRecordingsessionId to patchRecordingsScreensession

**GET /api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}** (1 change)

* Operation operationId was changed from getWorkforcemanagementTimeoffrequestsTimeoffrequestId to getWorkforcemanagementTimeoffrequest

**PATCH /api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}** (1 change)

* Operation operationId was changed from patchWorkforcemanagementTimeoffrequestsTimeoffrequestId to patchWorkforcemanagementTimeoffrequest

**GET /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesSitesSiteIdOutboundroutes to getTelephonyProvidersEdgesSiteOutboundroutes

**POST /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes** (1 change)

* Operation operationId was changed from postTelephonyProvidersEdgesSitesSiteIdOutboundroutes to postTelephonyProvidersEdgesSiteOutboundroutes

**GET /api/v2/outbound/contactlists/{contactListId}/export** (1 change)

* Operation operationId was changed from getOutboundContactlistsContactlistIdExport to getOutboundContactlistExport

**POST /api/v2/outbound/contactlists/{contactListId}/export** (1 change)

* Operation operationId was changed from postOutboundContactlistsContactlistIdExport to postOutboundContactlistExport

**GET /api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesEdgeIdLinesLineId to getTelephonyProvidersEdgeLine

**PUT /api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}** (1 change)

* Operation operationId was changed from putTelephonyProvidersEdgesEdgeIdLinesLineId to putTelephonyProvidersEdgeLine

**GET /api/v2/groups/{groupId}/greetings/defaults** (1 change)

* Operation operationId was changed from getGroupsGroupIdGreetingsDefaults to getGroupGreetingsDefaults

**PUT /api/v2/groups/{groupId}/greetings/defaults** (1 change)

* Operation operationId was changed from putGroupsGroupIdGreetingsDefaults to putGroupGreetingsDefaults

**GET /api/v2/voicemail/queues/{queueId}/messages** (1 change)

* Operation operationId was changed from getVoicemailQueuesQueueIdMessages to getVoicemailQueueMessages

**POST /api/v2/telephony/providers/edges/{edgeId}/logs/jobs** (1 change)

* Operation operationId was changed from postTelephonyProvidersEdgesEdgeIdLogsJobs to postTelephonyProvidersEdgeLogsJobs

**GET /api/v2/users/{userId}/adjacents** (1 change)

* Operation operationId was changed from getUsersUserIdAdjacents to getUserAdjacents

**GET /api/v2/users/{userId}/superiors** (1 change)

* Operation operationId was changed from getUsersUserIdSuperiors to getUserSuperiors

**GET /api/v2/users/{userId}/directreports** (1 change)

* Operation operationId was changed from getUsersUserIdDirectreports to getUserDirectreports

**GET /api/v2/users/{userId}/favorites** (1 change)

* Operation operationId was changed from getUsersUserIdFavorites to getUserFavorites

**GET /api/v2/gdpr/requests/{requestId}** (1 change)

* Operation operationId was changed from getGdprRequestsRequestId to getGdprRequest

**GET /api/v2/orphanrecordings/{orphanId}** (1 change)

* Operation operationId was changed from getOrphanrecordingsOrphanId to getOrphanrecording

**PUT /api/v2/orphanrecordings/{orphanId}** (1 change)

* Operation operationId was changed from putOrphanrecordingsOrphanId to putOrphanrecording

**DELETE /api/v2/orphanrecordings/{orphanId}** (1 change)

* Operation operationId was changed from deleteOrphanrecordingsOrphanId to deleteOrphanrecording

**GET /api/v2/outbound/campaigns/{campaignId}/interactions** (1 change)

* Operation operationId was changed from getOutboundCampaignsCampaignIdInteractions to getOutboundCampaignInteractions

**GET /api/v2/locations/{locationId}** (1 change)

* Operation operationId was changed from getLocationsLocationId to getLocation

**POST /api/v2/analytics/reporting/schedules/{scheduleId}/runreport** (1 change)

* Operation operationId was changed from postAnalyticsReportingSchedulesScheduleIdRunreport to postAnalyticsReportingScheduleRunreport

**GET /api/v2/workforcemanagement/managementunits/{muId}/intraday/queues** (1 change)

* Operation operationId was changed from getWorkforcemanagementManagementunitsMuIdIntradayQueues to getWorkforcemanagementManagementunitIntradayQueues

**POST /api/v2/workforcemanagement/managementunits/{muId}/intraday** (1 change)

* Operation operationId was changed from postWorkforcemanagementManagementunitsMuIdIntraday to postWorkforcemanagementManagementunitIntraday

**GET /api/v2/quality/publishedforms/evaluations/{formId}** (1 change)

* Operation operationId was changed from getQualityPublishedformsEvaluationsFormId to getQualityPublishedformsEvaluation

**GET /api/v2/presencedefinitions/{presenceId}** (1 change)

* Operation operationId was changed from getPresencedefinitionsPresenceId to getPresencedefinition

**PUT /api/v2/presencedefinitions/{presenceId}** (1 change)

* Operation operationId was changed from putPresencedefinitionsPresenceId to putPresencedefinition

**DELETE /api/v2/presencedefinitions/{presenceId}** (1 change)

* Operation operationId was changed from deletePresencedefinitionsPresenceId to deletePresencedefinition

**GET /api/v2/quality/conversations/{conversationId}/audits** (1 change)

* Operation operationId was changed from getQualityConversationsConversationIdAudits to getQualityConversationAudits

**GET /api/v2/conversations/{conversationId}/recordingmetadata/{recordingId}** (1 change)

* Operation operationId was changed from getConversationsConversationIdRecordingmetadataRecordingId to getConversationRecordingmetadataRecordingId

**POST /api/v2/telephony/providers/edges/{edgeId}/reboot** (1 change)

* Operation operationId was changed from postTelephonyProvidersEdgesEdgeIdReboot to postTelephonyProvidersEdgeReboot

**GET /api/v2/groups/{groupId}** (1 change)

* Operation operationId was changed from getGroupsGroupId to getGroup

**PUT /api/v2/groups/{groupId}** (1 change)

* Operation operationId was changed from putGroupsGroupId to putGroup

**DELETE /api/v2/groups/{groupId}** (1 change)

* Operation operationId was changed from deleteGroupsGroupId to deleteGroup

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/copy** (1 change)

* Operation operationId was changed from postWorkforcemanagementManagementunitsManagementunitIdWorkplansWorkplanIdCopy to postWorkforcemanagementManagementunitWorkplanCopy

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}** (1 change)

* Operation operationId was changed from getWorkforcemanagementManagementunitsManagementunitIdWorkplansWorkplanId to getWorkforcemanagementManagementunitWorkplan

**DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}** (1 change)

* Operation operationId was changed from deleteWorkforcemanagementManagementunitsManagementunitIdWorkplansWorkplanId to deleteWorkforcemanagementManagementunitWorkplan

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}** (1 change)

* Operation operationId was changed from patchWorkforcemanagementManagementunitsManagementunitIdWorkplansWorkplanId to patchWorkforcemanagementManagementunitWorkplan

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans** (2 changes)

* Operation operationId was changed from getWorkforcemanagementManagementunitsManagementunitIdWorkplans to getWorkforcemanagementManagementunitWorkplans
* Parameter expand was changed from string to array

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans** (1 change)

* Operation operationId was changed from postWorkforcemanagementManagementunitsManagementunitIdWorkplans to postWorkforcemanagementManagementunitWorkplans

**GET /api/v2/scripts/{scriptId}** (1 change)

* Operation operationId was changed from getScriptsScriptId to getScript

**GET /api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesOutboundroutesOutboundrouteId to getTelephonyProvidersEdgesOutboundroute

**PUT /api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}** (1 change)

* Operation operationId was changed from putTelephonyProvidersEdgesOutboundroutesOutboundrouteId to putTelephonyProvidersEdgesOutboundroute

**DELETE /api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}** (1 change)

* Operation operationId was changed from deleteTelephonyProvidersEdgesOutboundroutesOutboundrouteId to deleteTelephonyProvidersEdgesOutboundroute

**GET /api/v2/alerting/interactionstats/alerts/{alertId}** (1 change)

* Operation operationId was changed from getAlertingInteractionstatsAlertsAlertId to getAlertingInteractionstatsAlert

**PUT /api/v2/alerting/interactionstats/alerts/{alertId}** (1 change)

* Operation operationId was changed from putAlertingInteractionstatsAlertsAlertId to putAlertingInteractionstatsAlert

**DELETE /api/v2/alerting/interactionstats/alerts/{alertId}** (1 change)

* Operation operationId was changed from deleteAlertingInteractionstatsAlertsAlertId to deleteAlertingInteractionstatsAlert

**GET /api/v2/webchat/deployments/{deploymentId}** (1 change)

* Operation operationId was changed from getWebchatDeploymentsDeploymentId to getWebchatDeployment

**PUT /api/v2/webchat/deployments/{deploymentId}** (1 change)

* Operation operationId was changed from putWebchatDeploymentsDeploymentId to putWebchatDeployment

**DELETE /api/v2/webchat/deployments/{deploymentId}** (1 change)

* Operation operationId was changed from deleteWebchatDeploymentsDeploymentId to deleteWebchatDeployment

**GET /api/v2/telephony/providers/edges/sites/{siteId}/numberplans/{numberPlanId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesSitesSiteIdNumberplansNumberplanId to getTelephonyProvidersEdgesSiteNumberplan

**GET /api/v2/analytics/reporting/schedules/{scheduleId}/history** (1 change)

* Operation operationId was changed from getAnalyticsReportingSchedulesScheduleIdHistory to getAnalyticsReportingScheduleHistory

**GET /api/v2/analytics/reporting/schedules/{scheduleId}/history/latest** (1 change)

* Operation operationId was changed from getAnalyticsReportingSchedulesScheduleIdHistoryLatest to getAnalyticsReportingScheduleHistoryLatest

**GET /api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesEdgeIdLogsJobsJobId to getTelephonyProvidersEdgeLogsJob

**GET /api/v2/greetings/{greetingId}** (1 change)

* Operation operationId was changed from getGreetingsGreetingId to getGreeting

**PUT /api/v2/greetings/{greetingId}** (1 change)

* Operation operationId was changed from putGreetingsGreetingId to putGreeting

**DELETE /api/v2/greetings/{greetingId}** (1 change)

* Operation operationId was changed from deleteGreetingsGreetingId to deleteGreeting

**POST /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/query** (1 change)

* Operation operationId was changed from postContentmanagementWorkspacesWorkspaceIdTagvaluesQuery to postContentmanagementWorkspaceTagvaluesQuery

**GET /api/v2/architect/schedulegroups/{scheduleGroupId}** (1 change)

* Operation operationId was changed from getArchitectSchedulegroupsSchedulegroupId to getArchitectSchedulegroup

**PUT /api/v2/architect/schedulegroups/{scheduleGroupId}** (1 change)

* Operation operationId was changed from putArchitectSchedulegroupsSchedulegroupId to putArchitectSchedulegroup

**DELETE /api/v2/architect/schedulegroups/{scheduleGroupId}** (1 change)

* Operation operationId was changed from deleteArchitectSchedulegroupsSchedulegroupId to deleteArchitectSchedulegroup

**GET /api/v2/license/toggles/{featureName}** (1 change)

* Operation operationId was changed from getLicenseTogglesFeaturename to getLicenseToggle

**POST /api/v2/license/toggles/{featureName}** (1 change)

* Operation operationId was changed from postLicenseTogglesFeaturename to postLicenseToggle

**POST /api/v2/outbound/contactlists/{contactListId}/contacts/bulk** (1 change)

* Operation operationId was changed from postOutboundContactlistsContactlistIdContactsBulk to postOutboundContactlistContactsBulk

**GET /api/v2/alerting/interactionstats/rules/{ruleId}** (1 change)

* Operation operationId was changed from getAlertingInteractionstatsRulesRuleId to getAlertingInteractionstatsRule

**PUT /api/v2/alerting/interactionstats/rules/{ruleId}** (1 change)

* Operation operationId was changed from putAlertingInteractionstatsRulesRuleId to putAlertingInteractionstatsRule

**DELETE /api/v2/alerting/interactionstats/rules/{ruleId}** (1 change)

* Operation operationId was changed from deleteAlertingInteractionstatsRulesRuleId to deleteAlertingInteractionstatsRule

**GET /api/v2/flows/datatables/{datatableId}/rows/{rowId}** (1 change)

* Operation operationId was changed from getFlowsDatatablesDatatableIdRowsRowId to getFlowsDatatableRow

**PUT /api/v2/flows/datatables/{datatableId}/rows/{rowId}** (1 change)

* Operation operationId was changed from putFlowsDatatablesDatatableIdRowsRowId to putFlowsDatatableRow

**DELETE /api/v2/flows/datatables/{datatableId}/rows/{rowId}** (1 change)

* Operation operationId was changed from deleteFlowsDatatablesDatatableIdRowsRowId to deleteFlowsDatatableRow

**GET /api/v2/integrations/types/{typeId}** (1 change)

* Operation operationId was changed from getIntegrationsTypesTypeId to getIntegrationsType

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs** (1 change)

* Operation operationId was changed from getWorkforcemanagementManagementunitsManagementunitIdSchedulingRuns to getWorkforcemanagementManagementunitSchedulingRuns

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}** (1 change)

* Operation operationId was changed from getWorkforcemanagementManagementunitsManagementunitIdSchedulingRunsRunId to getWorkforcemanagementManagementunitSchedulingRun

**DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}** (1 change)

* Operation operationId was changed from deleteWorkforcemanagementManagementunitsManagementunitIdSchedulingRunsRunId to deleteWorkforcemanagementManagementunitSchedulingRun

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}** (1 change)

* Operation operationId was changed from patchWorkforcemanagementManagementunitsManagementunitIdSchedulingRunsRunId to patchWorkforcemanagementManagementunitSchedulingRun

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}/result** (1 change)

* Operation operationId was changed from getWorkforcemanagementManagementunitsManagementunitIdSchedulingRunsRunIdResult to getWorkforcemanagementManagementunitSchedulingRunResult

**GET /api/v2/quality/forms/surveys/{formId}/versions** (1 change)

* Operation operationId was changed from getQualityFormsSurveysFormIdVersions to getQualityFormsSurveyVersions

**GET /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}** (1 change)

* Operation operationId was changed from getQualityConversationsConversationIdEvaluationsEvaluationId to getQualityConversationEvaluation

**PUT /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}** (1 change)

* Operation operationId was changed from putQualityConversationsConversationIdEvaluationsEvaluationId to putQualityConversationEvaluation

**DELETE /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}** (1 change)

* Operation operationId was changed from deleteQualityConversationsConversationIdEvaluationsEvaluationId to deleteQualityConversationEvaluation

**POST /api/v2/telephony/providers/edges/phones/{phoneId}/reboot** (1 change)

* Operation operationId was changed from postTelephonyProvidersEdgesPhonesPhoneIdReboot to postTelephonyProvidersEdgesPhoneReboot

**GET /api/v2/conversations/messages/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Operation operationId was changed from getConversationsMessagesConversationIdParticipantsParticipantIdWrapupcodes to getConversationsMessageParticipantWrapupcodes

**GET /api/v2/conversations/messages/{conversationId}** (1 change)

* Operation operationId was changed from getConversationsMessagesConversationId to getConversationsMessage

**PATCH /api/v2/conversations/messages/{conversationId}** (1 change)

* Operation operationId was changed from patchConversationsMessagesConversationId to patchConversationsMessage

**POST /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages** (1 change)

* Operation operationId was changed from postConversationsMessagesConversationIdCommunicationsCommunicationIdMessages to postConversationsMessageCommunicationMessages

**POST /api/v2/conversations/messages/{conversationId}/messages/bulk** (1 change)

* Operation operationId was changed from postConversationsMessagesConversationIdMessagesBulk to postConversationsMessageMessagesBulk

**PATCH /api/v2/conversations/messages/{conversationId}/participants/{participantId}/attributes** (1 change)

* Operation operationId was changed from patchConversationsMessagesConversationIdParticipantsParticipantIdAttributes to patchConversationsMessageParticipantAttributes

**GET /api/v2/conversations/messages/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Operation operationId was changed from getConversationsMessagesConversationIdParticipantsParticipantIdWrapup to getConversationsMessageParticipantWrapup

**POST /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media** (1 change)

* Operation operationId was changed from postConversationsMessagesConversationIdCommunicationsCommunicationIdMessagesMedia to postConversationsMessageCommunicationMessagesMedia

**GET /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media/{mediaId}** (1 change)

* Operation operationId was changed from getConversationsMessagesConversationIdCommunicationsCommunicationIdMessagesMediaMediaId to getConversationsMessageCommunicationMessagesMediaMediaId

**PATCH /api/v2/conversations/messages/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Operation operationId was changed from patchConversationsMessagesConversationIdParticipantsParticipantIdCommunicationsCommunicationId to patchConversationsMessageParticipantCommunication

**PATCH /api/v2/conversations/messages/{conversationId}/participants/{participantId}** (1 change)

* Operation operationId was changed from patchConversationsMessagesConversationIdParticipantsParticipantId to patchConversationsMessageParticipant

**POST /api/v2/conversations/messages/{conversationId}/participants/{participantId}/replace** (1 change)

* Operation operationId was changed from postConversationsMessagesConversationIdParticipantsParticipantIdReplace to postConversationsMessageParticipantReplace

**GET /api/v2/conversations/messages/{conversationId}/messages/{messageId}** (1 change)

* Operation operationId was changed from getConversationsMessagesConversationIdMessagesMessageId to getConversationsMessageMessage

**GET /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesEdgeIdLogicalinterfaces to getTelephonyProvidersEdgeLogicalinterfaces

**POST /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces** (1 change)

* Operation operationId was changed from postTelephonyProvidersEdgesEdgeIdLogicalinterfaces to postTelephonyProvidersEdgeLogicalinterfaces

**GET /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesTrunkbasesettingsTrunkbasesettingsId to getTelephonyProvidersEdgesTrunkbasesetting

**PUT /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}** (1 change)

* Operation operationId was changed from putTelephonyProvidersEdgesTrunkbasesettingsTrunkbasesettingsId to putTelephonyProvidersEdgesTrunkbasesetting

**DELETE /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}** (1 change)

* Operation operationId was changed from deleteTelephonyProvidersEdgesTrunkbasesettingsTrunkbasesettingsId to deleteTelephonyProvidersEdgesTrunkbasesetting

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}** (1 change)

* Operation operationId was changed from getExternalcontactsOrganizationsExternalorganizationId to getExternalcontactsOrganization

**PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}** (1 change)

* Operation operationId was changed from putExternalcontactsOrganizationsExternalorganizationId to putExternalcontactsOrganization

**DELETE /api/v2/externalcontacts/organizations/{externalOrganizationId}** (1 change)

* Operation operationId was changed from deleteExternalcontactsOrganizationsExternalorganizationId to deleteExternalcontactsOrganization

**GET /api/v2/stations/{stationId}** (1 change)

* Operation operationId was changed from getStationsStationId to getStation

**DELETE /api/v2/stations/{stationId}/associateduser** (1 change)

* Operation operationId was changed from deleteStationsStationIdAssociateduser to deleteStationAssociateduser

**GET /api/v2/analytics/reporting/schedules/{scheduleId}** (1 change)

* Operation operationId was changed from getAnalyticsReportingSchedulesScheduleId to getAnalyticsReportingSchedule

**PUT /api/v2/analytics/reporting/schedules/{scheduleId}** (1 change)

* Operation operationId was changed from putAnalyticsReportingSchedulesScheduleId to putAnalyticsReportingSchedule

**DELETE /api/v2/analytics/reporting/schedules/{scheduleId}** (1 change)

* Operation operationId was changed from deleteAnalyticsReportingSchedulesScheduleId to deleteAnalyticsReportingSchedule

**GET /api/v2/telephony/providers/edges/{edgeId}/lines** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesEdgeIdLines to getTelephonyProvidersEdgeLines

**GET /api/v2/routing/sms/phonenumbers/{addressId}** (1 change)

* Operation operationId was changed from getRoutingSmsPhonenumbersAddressId to getRoutingSmsPhonenumber

**PUT /api/v2/routing/sms/phonenumbers/{addressId}** (1 change)

* Operation operationId was changed from putRoutingSmsPhonenumbersAddressId to putRoutingSmsPhonenumber

**DELETE /api/v2/routing/sms/phonenumbers/{addressId}** (1 change)

* Operation operationId was changed from deleteRoutingSmsPhonenumbersAddressId to deleteRoutingSmsPhonenumber

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/relationships** (1 change)

* Operation operationId was changed from getExternalcontactsOrganizationsExternalorganizationIdRelationships to getExternalcontactsOrganizationRelationships

**GET /api/v2/contentmanagement/workspaces/{workspaceId}/members** (1 change)

* Operation operationId was changed from getContentmanagementWorkspacesWorkspaceIdMembers to getContentmanagementWorkspaceMembers

**GET /api/v2/integrations/actions/{actionId}** (1 change)

* Operation operationId was changed from getIntegrationsActionsActionId to getIntegrationsAction

**DELETE /api/v2/integrations/actions/{actionId}** (1 change)

* Operation operationId was changed from deleteIntegrationsActionsActionId to deleteIntegrationsAction

**PATCH /api/v2/integrations/actions/{actionId}** (1 change)

* Operation operationId was changed from patchIntegrationsActionsActionId to patchIntegrationsAction

**POST /api/v2/integrations/actions/{actionId}/test** (1 change)

* Operation operationId was changed from postIntegrationsActionsActionIdTest to postIntegrationsActionTest

**GET /api/v2/integrations/actions/{actionId}/schemas/{fileName}** (1 change)

* Operation operationId was changed from getIntegrationsActionsActionIdSchemasFilename to getIntegrationsActionSchema

**GET /api/v2/integrations/actions/{actionId}/templates/{fileName}** (1 change)

* Operation operationId was changed from getIntegrationsActionsActionIdTemplatesFilename to getIntegrationsActionTemplate

**POST /api/v2/integrations/actions/{actionId}/execute** (1 change)

* Operation operationId was changed from postIntegrationsActionsActionIdExecute to postIntegrationsActionExecute

**POST /api/v2/telephony/providers/edges/{edgeId}/statuscode** (1 change)

* Operation operationId was changed from postTelephonyProvidersEdgesEdgeIdStatuscode to postTelephonyProvidersEdgeStatuscode

**GET /api/v2/telephony/providers/edges/{edgeId}/metrics** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesEdgeIdMetrics to getTelephonyProvidersEdgeMetrics

**GET /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Operation operationId was changed from getConversationsCobrowsesessionsConversationIdParticipantsParticipantIdWrapupcodes to getConversationsCobrowsesessionParticipantWrapupcodes

**GET /api/v2/conversations/cobrowsesessions/{conversationId}** (1 change)

* Operation operationId was changed from getConversationsCobrowsesessionsConversationId to getConversationsCobrowsesession

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}** (1 change)

* Operation operationId was changed from patchConversationsCobrowsesessionsConversationId to patchConversationsCobrowsesession

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/attributes** (1 change)

* Operation operationId was changed from patchConversationsCobrowsesessionsConversationIdParticipantsParticipantIdAttributes to patchConversationsCobrowsesessionParticipantAttributes

**GET /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Operation operationId was changed from getConversationsCobrowsesessionsConversationIdParticipantsParticipantIdWrapup to getConversationsCobrowsesessionParticipantWrapup

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Operation operationId was changed from patchConversationsCobrowsesessionsConversationIdParticipantsParticipantIdCommunicationsCommunicationId to patchConversationsCobrowsesessionParticipantCommunication

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}** (1 change)

* Operation operationId was changed from patchConversationsCobrowsesessionsConversationIdParticipantsParticipantId to patchConversationsCobrowsesessionParticipant

**POST /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/replace** (1 change)

* Operation operationId was changed from postConversationsCobrowsesessionsConversationIdParticipantsParticipantIdReplace to postConversationsCobrowsesessionParticipantReplace

**GET /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}** (1 change)

* Operation operationId was changed from getContentmanagementWorkspacesWorkspaceIdMembersMemberId to getContentmanagementWorkspaceMember

**PUT /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}** (1 change)

* Operation operationId was changed from putContentmanagementWorkspacesWorkspaceIdMembersMemberId to putContentmanagementWorkspaceMember

**DELETE /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}** (1 change)

* Operation operationId was changed from deleteContentmanagementWorkspacesWorkspaceIdMembersMemberId to deleteContentmanagementWorkspaceMember

**GET /api/v2/outbound/schedules/sequences/{sequenceId}** (1 change)

* Operation operationId was changed from getOutboundSchedulesSequencesSequenceId to getOutboundSchedulesSequence

**PUT /api/v2/outbound/schedules/sequences/{sequenceId}** (1 change)

* Operation operationId was changed from putOutboundSchedulesSequencesSequenceId to putOutboundSchedulesSequence

**DELETE /api/v2/outbound/schedules/sequences/{sequenceId}** (1 change)

* Operation operationId was changed from deleteOutboundSchedulesSequencesSequenceId to deleteOutboundSchedulesSequence

**GET /api/v2/routing/email/domains/{domainName}/routes** (1 change)

* Operation operationId was changed from getRoutingEmailDomainsDomainnameRoutes to getRoutingEmailDomainRoutes

**POST /api/v2/routing/email/domains/{domainName}/routes** (1 change)

* Operation operationId was changed from postRoutingEmailDomainsDomainnameRoutes to postRoutingEmailDomainRoutes

**GET /api/v2/flows/{flowId}** (1 change)

* Operation operationId was changed from getFlowsFlowId to getFlow

**PUT /api/v2/flows/{flowId}** (1 change)

* Operation operationId was changed from putFlowsFlowId to putFlow

**DELETE /api/v2/flows/{flowId}** (1 change)

* Operation operationId was changed from deleteFlowsFlowId to deleteFlow

**GET /api/v2/flows/{flowId}/latestconfiguration** (1 change)

* Operation operationId was changed from getFlowsFlowIdLatestconfiguration to getFlowLatestconfiguration

**GET /api/v2/flows/{flowId}/history/{historyId}** (1 change)

* Operation operationId was changed from getFlowsFlowIdHistoryHistoryId to getFlowHistoryHistoryId

**POST /api/v2/scripts/{scriptId}/export** (1 change)

* Operation operationId was changed from postScriptsScriptIdExport to postScriptExport

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups** (1 change)

* Operation operationId was changed from getWorkforcemanagementManagementunitsManagementunitIdServicegoalgroups to getWorkforcemanagementManagementunitServicegoalgroups

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups** (1 change)

* Operation operationId was changed from postWorkforcemanagementManagementunitsManagementunitIdServicegoalgroups to postWorkforcemanagementManagementunitServicegoalgroups

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}** (1 change)

* Operation operationId was changed from getWorkforcemanagementManagementunitsManagementunitIdServicegoalgroupsServicegoalgroupId to getWorkforcemanagementManagementunitServicegoalgroup

**DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}** (1 change)

* Operation operationId was changed from deleteWorkforcemanagementManagementunitsManagementunitIdServicegoalgroupsServicegoalgroupId to deleteWorkforcemanagementManagementunitServicegoalgroup

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}** (1 change)

* Operation operationId was changed from patchWorkforcemanagementManagementunitsManagementunitIdServicegoalgroupsServicegoalgroupId to patchWorkforcemanagementManagementunitServicegoalgroup

**GET /api/v2/mobiledevices/{deviceId}** (1 change)

* Operation operationId was changed from getMobiledevicesDeviceId to getMobiledevice

**PUT /api/v2/mobiledevices/{deviceId}** (1 change)

* Operation operationId was changed from putMobiledevicesDeviceId to putMobiledevice

**DELETE /api/v2/mobiledevices/{deviceId}** (1 change)

* Operation operationId was changed from deleteMobiledevicesDeviceId to deleteMobiledevice

**GET /api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions/{secureSessionId}** (1 change)

* Operation operationId was changed from getConversationsConversationIdParticipantsParticipantIdSecureivrsessionsSecuresessionId to getConversationParticipantSecureivrsession

**GET /api/v2/conversations/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Operation operationId was changed from getConversationsConversationIdParticipantsParticipantIdWrapupcodes to getConversationParticipantWrapupcodes

**POST /api/v2/conversations/{conversationId}/participants/{participantId}/callbacks** (1 change)

* Operation operationId was changed from postConversationsConversationIdParticipantsParticipantIdCallbacks to postConversationParticipantCallbacks

**PATCH /api/v2/conversations/{conversationId}/participants/{participantId}/attributes** (1 change)

* Operation operationId was changed from patchConversationsConversationIdParticipantsParticipantIdAttributes to patchConversationParticipantAttributes

**GET /api/v2/conversations/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Operation operationId was changed from getConversationsConversationIdParticipantsParticipantIdWrapup to getConversationParticipantWrapup

**PATCH /api/v2/conversations/{conversationId}/participants/{participantId}** (1 change)

* Operation operationId was changed from patchConversationsConversationIdParticipantsParticipantId to patchConversationParticipant

**POST /api/v2/conversations/{conversationId}/participants/{participantId}/replace** (1 change)

* Operation operationId was changed from postConversationsConversationIdParticipantsParticipantIdReplace to postConversationParticipantReplace

**POST /api/v2/conversations/{conversationId}/participants/{participantId}/digits** (1 change)

* Operation operationId was changed from postConversationsConversationIdParticipantsParticipantIdDigits to postConversationParticipantDigits

**GET /api/v2/users/{userId}/greetings/defaults** (1 change)

* Operation operationId was changed from getUsersUserIdGreetingsDefaults to getUserGreetingsDefaults

**PUT /api/v2/users/{userId}/greetings/defaults** (1 change)

* Operation operationId was changed from putUsersUserIdGreetingsDefaults to putUserGreetingsDefaults

**GET /api/v2/voicemail/groups/{groupId}/messages** (1 change)

* Operation operationId was changed from getVoicemailGroupsGroupIdMessages to getVoicemailGroupMessages

**GET /api/v2/telephony/providers/edges/didpools/{didPoolId}** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesDidpoolsDidpoolId to getTelephonyProvidersEdgesDidpool

**PUT /api/v2/telephony/providers/edges/didpools/{didPoolId}** (1 change)

* Operation operationId was changed from putTelephonyProvidersEdgesDidpoolsDidpoolId to putTelephonyProvidersEdgesDidpool

**DELETE /api/v2/telephony/providers/edges/didpools/{didPoolId}** (1 change)

* Operation operationId was changed from deleteTelephonyProvidersEdgesDidpoolsDidpoolId to deleteTelephonyProvidersEdgesDidpool

**GET /api/v2/quality/keywordsets/{keywordSetId}** (1 change)

* Operation operationId was changed from getQualityKeywordsetsKeywordsetId to getQualityKeywordset

**PUT /api/v2/quality/keywordsets/{keywordSetId}** (1 change)

* Operation operationId was changed from putQualityKeywordsetsKeywordsetId to putQualityKeywordset

**DELETE /api/v2/quality/keywordsets/{keywordSetId}** (1 change)

* Operation operationId was changed from deleteQualityKeywordsetsKeywordsetId to deleteQualityKeywordset

**GET /api/v2/integrations/{integrationId}/config/current** (1 change)

* Operation operationId was changed from getIntegrationsIntegrationIdConfigCurrent to getIntegrationConfigCurrent

**PUT /api/v2/integrations/{integrationId}/config/current** (1 change)

* Operation operationId was changed from putIntegrationsIntegrationIdConfigCurrent to putIntegrationConfigCurrent

**GET /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}** (1 change)

* Operation operationId was changed from getOrgauthorizationTrusteesTrusteeorgIdUsersTrusteeuserId to getOrgauthorizationTrusteeUser

**DELETE /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}** (1 change)

* Operation operationId was changed from deleteOrgauthorizationTrusteesTrusteeorgIdUsersTrusteeuserId to deleteOrgauthorizationTrusteeUser

**GET /api/v2/outbound/schedules/campaigns/{campaignId}** (1 change)

* Operation operationId was changed from getOutboundSchedulesCampaignsCampaignId to getOutboundSchedulesCampaign

**PUT /api/v2/outbound/schedules/campaigns/{campaignId}** (1 change)

* Operation operationId was changed from putOutboundSchedulesCampaignsCampaignId to putOutboundSchedulesCampaign

**DELETE /api/v2/outbound/schedules/campaigns/{campaignId}** (1 change)

* Operation operationId was changed from deleteOutboundSchedulesCampaignsCampaignId to deleteOutboundSchedulesCampaign

**GET /api/v2/architect/systemprompts/{promptId}/history/{historyId}** (1 change)

* Operation operationId was changed from getArchitectSystempromptsPromptIdHistoryHistoryId to getArchitectSystempromptHistoryHistoryId

**POST /api/v2/architect/systemprompts/{promptId}/history** (1 change)

* Operation operationId was changed from postArchitectSystempromptsPromptIdHistory to postArchitectSystempromptHistory

**GET /api/v2/architect/systemprompts/{promptId}** (1 change)

* Operation operationId was changed from getArchitectSystempromptsPromptId to getArchitectSystemprompt

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes** (1 change)

* Operation operationId was changed from getExternalcontactsOrganizationsExternalorganizationIdNotes to getExternalcontactsOrganizationNotes

**POST /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes** (1 change)

* Operation operationId was changed from postExternalcontactsOrganizationsExternalorganizationIdNotes to postExternalcontactsOrganizationNotes

**GET /api/v2/users/{userId}/profileskills** (1 change)

* Operation operationId was changed from getUsersUserIdProfileskills to getUserProfileskills

**PUT /api/v2/users/{userId}/profileskills** (1 change)

* Operation operationId was changed from putUsersUserIdProfileskills to putUserProfileskills

**GET /api/v2/users/{userId}/roles** (1 change)

* Operation operationId was changed from getUsersUserIdRoles to getUserRoles

**PUT /api/v2/users/{userId}/roles** (1 change)

* Operation operationId was changed from putUsersUserIdRoles to putUserRoles

**DELETE /api/v2/users/{userId}/roles** (1 change)

* Operation operationId was changed from deleteUsersUserIdRoles to deleteUserRoles

**GET /api/v2/telephony/providers/edges/{edgeId}/trunks** (1 change)

* Operation operationId was changed from getTelephonyProvidersEdgesEdgeIdTrunks to getTelephonyProvidersEdgeTrunks

**GET /api/v2/architect/systemprompts/{promptId}/resources** (1 change)

* Operation operationId was changed from getArchitectSystempromptsPromptIdResources to getArchitectSystempromptResources

**POST /api/v2/architect/systemprompts/{promptId}/resources** (1 change)

* Operation operationId was changed from postArchitectSystempromptsPromptIdResources to postArchitectSystempromptResources

**GET /api/v2/routing/languages/{languageId}** (1 change)

* Operation operationId was changed from getRoutingLanguagesLanguageId to getRoutingLanguage

**DELETE /api/v2/routing/languages/{languageId}** (1 change)

* Operation operationId was changed from deleteRoutingLanguagesLanguageId to deleteRoutingLanguage

**AnalyticsSurvey** (1 change)

* Property surveyCompletedTime was removed

**ReportingExportJobResponse** (1 change)

* Required property percentageComplete was added


# Minor Changes (61 changes)

**/api/v2/quality/forms/surveys/bulk** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/outbound/contactlists/divisionviews** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/queues/me** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/outbound/contactlists/{contactListId}/clear** (2 changes)

* Path was added
* Operation POST was added

**MessageDetails** (3 changes)

* Enum value delivery-success was added to property messageStatus
* Enum value delivery-failed was added to property messageStatus
* Enum value read was added to property messageStatus

**HelpLink** (1 change)

* Model was added

**IntegrationType** (8 changes)

* Optional property vendorName was added
* Optional property vendorWebsiteUri was added
* Optional property marketplaceUri was added
* Optional property faqUri was added
* Optional property privacyPolicyUri was added
* Optional property supportContactUri was added
* Optional property salesContactUri was added
* Optional property helpLinks was added

**AggregateMetricData** (3 changes)

* Enum value nBlindTransferred was added to property metric
* Enum value nConsultTransferred was added to property metric
* Enum value nConsult was added to property metric

**AggregationQuery** (5 changes)

* Enum value surveyPromoterScore was added to property groupBy
* Enum value surveyCompletedDate was added to property groupBy
* Enum value nBlindTransferred was added to property metrics
* Enum value nConsultTransferred was added to property metrics
* Enum value nConsult was added to property metrics

**AnalyticsQueryPredicate** (5 changes)

* Enum value surveyPromoterScore was added to property dimension
* Enum value surveyCompletedDate was added to property dimension
* Enum value nBlindTransferred was added to property metric
* Enum value nConsultTransferred was added to property metric
* Enum value nConsult was added to property metric

**ObservationQuery** (3 changes)

* Enum value nBlindTransferred was added to property metrics
* Enum value nConsultTransferred was added to property metrics
* Enum value nConsult was added to property metrics

**DocumentAudit** (1 change)

* Enum value WARNING was added to property status

**AnalyticsSurvey** (2 changes)

* Optional property eventTime was added
* Optional property getsurveyCompletedDate was added

**ContactListDivisionView** (1 change)

* Model was added

**ContactListDivisionViewListing** (1 change)

* Model was added

**ReportingExportJobResponse** (2 changes)

* Enum value CANCELLING was added to property status
* Enum value CANCELLED was added to property status

**WorkPlan** (2 changes)

* Optional property constrainPaidTimeGranularity was added
* Optional property paidTimeGranularityMinutes was added

**WorkPlanListItemResponse** (11 changes)

* Optional property constrainWeeklyPaidTime was added
* Optional property flexibleWeeklyPaidTime was added
* Optional property weeklyExactPaidMinutes was added
* Optional property constrainPaidTimeGranularity was added
* Optional property paidTimeGranularityMinutes was added
* Optional property constrainMinimumTimeBetweenShifts was added
* Optional property minimumTimeBetweenShiftsMinutes was added
* Optional property optionalDays was added
* Optional property shiftStartVariances was added
* Optional property shifts was added
* Optional property agents was added

**CreateWorkPlan** (2 changes)

* Optional property constrainPaidTimeGranularity was added
* Optional property paidTimeGranularityMinutes was added

**MessageData** (3 changes)

* Enum value delivery-success was added to property status
* Enum value delivery-failed was added to property status
* Enum value read was added to property status


# Point Changes (0 changes)
