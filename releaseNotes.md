Platform API version: 1374


# Major Changes (8 changes)

**GET /api/v2/authorization/roles** (1 change)

* Parameter name was added

**HistoryEntry** (1 change)

* Model HistoryEntry was removed

**ScreenRecordingSession** (1 change)

* Property participantId was removed

**HistoryListing** (5 changes)

* Property entities was removed
* Property pageSize was removed
* Property pageNumber was removed
* Property total was removed
* Property pageCount was removed


# Minor Changes (109 changes)

**/api/v2/orgauthorization/trustees/{trusteeOrgId}/users** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/architect/schedulegroups/{scheduleGroupId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/architect/schedulegroups** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/architect/ivrs/{ivrId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/architect/ivrs** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/orgauthorization/trustors/{trustorOrgId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/architect/schedules** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/orgauthorization/trustors** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/orgauthorization/trustor/audits** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/uuidata** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/orgauthorization/pairings/{pairingId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/orgauthorization/trustees/{trusteeOrgId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/orgauthorization/trustors/{trustorOrgId}/users** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/orgauthorization/pairings** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/orgauthorization/trustees/audits** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/orgauthorization/trustees** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/architect/schedules/{scheduleId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**TrustUser** (1 change)

* Model was added

**TrustUserDetails** (1 change)

* Model was added

**TrustUserEntityListing** (1 change)

* Model was added

**TrustUserCreate** (1 change)

* Model was added

**Call** (1 change)

* Optional property uuiData was added

**ConversationChat** (1 change)

* Optional property scriptId was added

**Email** (2 changes)

* Optional property scriptId was added
* Optional property messageId was added

**Participant** (1 change)

* Optional property screenRecordingState was added

**SocialExpression** (1 change)

* Optional property scriptId was added

**ScreenRecordingSession** (1 change)

* Optional property communicationId was added

**ScheduleGroup** (1 change)

* Model was added

**SearchRequest** (1 change)

* Optional property sort was added

**SearchSort** (1 change)

* Model was added

**ScheduleGroupEntityListing** (1 change)

* Model was added

**GroupSearchRequest** (1 change)

* Optional property sort was added

**IVR** (1 change)

* Model was added

**LocationSearchRequest** (1 change)

* Optional property sort was added

**CreateCallbackOnConversationCommand** (1 change)

* Model was added

**IVREntityListing** (1 change)

* Model was added

**UserSearchRequest** (1 change)

* Optional property sort was added

**Schedule** (1 change)

* Model was added

**ScheduleEntityListing** (1 change)

* Model was added

**TrustorEntityListing** (1 change)

* Model was added

**AuditQueryResponse** (1 change)

* Model was added

**Facet** (1 change)

* Model was added

**Filter** (1 change)

* Model was added

**TrustorAuditQueryRequest** (1 change)

* Model was added

**SetUuiDataRequest** (1 change)

* Model was added

**CallBasic** (1 change)

* Optional property uuiData was added

**ParticipantBasic** (1 change)

* Optional property screenRecordingState was added

**TrustRequest** (1 change)

* Model was added

**Trustee** (1 change)

* Model was added

**VoicemailSearchRequest** (1 change)

* Optional property sort was added

**TrustRequestCreate** (1 change)

* Model was added

**TrusteeAuditQueryRequest** (1 change)

* Model was added

**UserMe** (1 change)

* Optional property trustors was added

**TrustEntityListing** (1 change)

* Model was added

**TrustCreate** (1 change)

* Model was added

**DocumentationSearchRequest** (1 change)

* Optional property sort was added

**HistoryListing** (10 changes)

* Optional property complete was added
* Optional property user was added
* Optional property errorMessage was added
* Optional property errorCode was added
* Optional property errorDetails was added
* Optional property errorMessageParams was added
* Optional property actionName was added
* Optional property actionStatus was added
* Optional property started was added
* Optional property completed was added


# Point Changes (1 change)

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/contacts** (1 change)

* Description was changed for parameter expand
