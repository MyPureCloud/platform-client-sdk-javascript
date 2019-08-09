Platform API version: 3373


# Major Changes (44 changes)

**GET /api/v2/scim/v2/users** (1 change)

* Response 200 type was changed from ScimListResponse to ScimUserListResponse

**GET /api/v2/scim/users** (1 change)

* Response 200 type was changed from ScimListResponse to ScimUserListResponse

**GET /api/v2/profiles/users** (1 change)

* Parameter state was removed

**GET /api/v2/scim/v2/groups** (1 change)

* Response 200 type was changed from ScimListResponse to ScimGroupListResponse

**GET /api/v2/scim/groups** (1 change)

* Response 200 type was changed from ScimListResponse to ScimGroupListResponse

**ScimListResponse** (1 change)

* Model ScimListResponse was removed

**ScimResource** (1 change)

* Model ScimResource was removed

**Meta** (1 change)

* Model Meta was removed

**PatchOperation** (1 change)

* Model PatchOperation was removed

**PatchRequest** (1 change)

* Model PatchRequest was removed

**Path** (1 change)

* Model Path was removed

**Manager** (12 changes)

* Property displayName was removed
* Property active was removed
* Property userName was removed
* Property password was removed
* Property title was removed
* Property phoneNumbers was removed
* Property emails was removed
* Property photos was removed
* Property externalId was removed
* Property groups was removed
* Property meta was removed
* Property urn:ietf:params:scim:schemas:extension:enterprise:2.0:User was removed

**ScimV2GroupReference** (2 changes)

* Property displayName was removed
* meta has been made readonly

**ScimV2User** (1 change)

* meta has been made readonly

**PromptAsset** (6 changes)

* promptId has been made readonly
* language has been made readonly
* mediaUri has been made readonly
* uploadStatus has been made readonly
* uploadUri has been made readonly
* languageDefault has been made readonly

**BatchDownloadJobStatusResult** (1 change)

* Property name was removed

**BatchDownloadJobSubmissionResult** (1 change)

* Property name was removed

**RecordingJob** (1 change)

* Property name was removed

**PromptAssetCreate** (5 changes)

* promptId has been made readonly
* mediaUri has been made readonly
* uploadStatus has been made readonly
* uploadUri has been made readonly
* languageDefault has been made readonly

**ScimV2Group** (2 changes)

* displayName has been made readonly
* meta has been made readonly

**ScimV2MemberReference** (2 changes)

* Property displayName was removed
* meta has been made readonly


# Minor Changes (34 changes)

**/api/v2/speechandtextanalytics/programs/{programId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/locations/{locationId}/sublocations** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/speechandtextanalytics/topics** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/speechandtextanalytics/topics/{topicId}** (2 changes)

* Path was added
* Operation GET was added

**PhoneCapabilities** (1 change)

* Enum value audio/g729 was added to property mediaCodecs

**ScimV2GroupReference** (1 change)

* value is no longer readonly

**ScimUserListResponse** (1 change)

* Model was added

**ViewFilter** (4 changes)

* Enum value RETURN_TO_AGENT was added to property flowDestinationTypes
* Enum value commonmodule was added to property flowTypes
* Optional property oauthClientIds was added
* Optional property apiOperations was added

**BaseTopicEntitiy** (1 change)

* Model was added

**Program** (1 change)

* Model was added

**DomainLogicalInterface** (3 changes)

* Optional property traceEnabled was added
* Optional property startDate was added
* Optional property endDate was added

**Dependency** (1 change)

* Enum value COMMONMODULEFLOW was added to property type

**DependencyObject** (1 change)

* Enum value COMMONMODULEFLOW was added to property type

**Flow** (1 change)

* Enum value COMMONMODULE was added to property type

**Station** (1 change)

* Optional property webRtcForceTurn was added

**BaseProgramEntity** (1 change)

* Model was added

**Phrase** (1 change)

* Model was added

**Topic** (1 change)

* Model was added

**CreateTopicRequest** (1 change)

* Model was added

**FlowDivisionView** (1 change)

* Enum value COMMONMODULE was added to property type

**AnalyticsFlow** (1 change)

* Enum value COMMONMODULE was added to property flowType

**Campaign** (2 changes)

* Enum value forced_off was added to property campaignStatus
* Enum value forced_stopping was added to property campaignStatus

**ScimV2MemberReference** (1 change)

* value is no longer readonly

**ScimGroupListResponse** (1 change)

* Model was added


# Point Changes (25 changes)

**GET /api/v2/scim/v2/users/{userId}** (1 change)

* Description was changed for parameter If-None-Match

**PUT /api/v2/scim/v2/users/{userId}** (2 changes)

* Description was changed for parameter If-Match
* Description was changed for parameter body

**DELETE /api/v2/scim/v2/users/{userId}** (1 change)

* Description was changed for parameter If-Match

**PATCH /api/v2/scim/v2/users/{userId}** (2 changes)

* Description was changed for parameter If-Match
* Description was changed for parameter body

**POST /api/v2/scim/v2/users** (1 change)

* Description was changed for parameter body

**GET /api/v2/scim/users/{userId}** (1 change)

* Description was changed for parameter If-None-Match

**PUT /api/v2/scim/users/{userId}** (2 changes)

* Description was changed for parameter If-Match
* Description was changed for parameter body

**DELETE /api/v2/scim/users/{userId}** (1 change)

* Description was changed for parameter If-Match

**PATCH /api/v2/scim/users/{userId}** (2 changes)

* Description was changed for parameter If-Match
* Description was changed for parameter body

**POST /api/v2/scim/users** (1 change)

* Description was changed for parameter body

**GET /api/v2/scim/v2/serviceproviderconfig** (1 change)

* Description was changed for parameter If-None-Match

**GET /api/v2/scim/v2/groups/{groupId}** (1 change)

* Description was changed for parameter If-None-Match

**PUT /api/v2/scim/v2/groups/{groupId}** (2 changes)

* Description was changed for parameter If-Match
* Description was changed for parameter body

**PATCH /api/v2/scim/v2/groups/{groupId}** (2 changes)

* Description was changed for parameter If-Match
* Description was changed for parameter body

**GET /api/v2/scim/groups/{groupId}** (1 change)

* Description was changed for parameter If-None-Match

**PUT /api/v2/scim/groups/{groupId}** (2 changes)

* Description was changed for parameter If-Match
* Description was changed for parameter body

**PATCH /api/v2/scim/groups/{groupId}** (2 changes)

* Description was changed for parameter If-Match
* Description was changed for parameter body
