Platform API version: 5828


# Major Changes (13 changes)

**/api/v2/gamification/profiles/{performanceProfileId}/members** (1 change)

* Path /api/v2/gamification/profiles/{performanceProfileId}/members was removed

**/api/v2/gamification/profiles/{performanceProfileId}/members/validate** (1 change)

* Path /api/v2/gamification/profiles/{performanceProfileId}/members/validate was removed

**GET /api/v2/gamification/profiles/{profileId}/metrics** (1 change)

* Parameter metricIds was added

**PUT /api/v2/routing/sms/phonenumbers/{addressId}** (2 changes)

* Parameter async was removed
* Response 501 was removed

**DELETE /api/v2/routing/sms/phonenumbers/{addressId}** (2 changes)

* Parameter async was removed
* Response 501 was removed

**POST /api/v2/routing/sms/phonenumbers** (2 changes)

* Parameter async was removed
* Response 501 was removed

**UCIntegration** (1 change)

* Required property badgeIcons was added

**UserScheduleAdherence** (3 changes)

* Property businessUnit was changed from BusinessUnit to BusinessUnitReference
* Property managementUnit was changed from ManagementUnit to ManagementUnitReference
* Property team was changed from Team to TeamReference


# Minor Changes (96 changes)

**/api/v2/conversations/calls/{conversationId}/recordingstate** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/conversations/callbacks/{conversationId}/recordingstate** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/conversations/chats/{conversationId}/recordingstate** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/conversations/cobrowsesessions/{conversationId}/recordingstate** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/conversations/emails/{conversationId}/recordingstate** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/conversations/messages/{conversationId}/recordingstate** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/conversations/screenshares/{conversationId}/recordingstate** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/conversations/socials/{conversationId}/recordingstate** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/conversations/videos/{conversationId}/recordingstate** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/gamification/profiles/{profileId}/members** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/gamification/profiles/{profileId}/members/validate** (2 changes)

* Path was added
* Operation POST was added

**Condition** (1 change)

* Enum value systemDispositionCondition was added to property type

**ViewFilter** (7 changes)

* Optional property hasFax was added
* Optional property dataActionIds was added
* Optional property actionCategoryName was added
* Optional property responseStatuses was added
* Optional property availableDashboard was added
* Optional property favouriteDashboard was added
* Optional property myDashboard was added

**ReportingExportJobResponse** (6 changes)

* Enum value AGENT_TIMELINE_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_TIMELINE_DETAIL_VIEW was added to property viewType
* Enum value AGENT_LOGIN_LOGOUT_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_LOGIN_LOGOUT_DETAIL_VIEW was added to property viewType
* Enum value CAMPAIGN_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value CAMPAIGN_PERFORMANCE_DETAIL_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (6 changes)

* Enum value AGENT_TIMELINE_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_TIMELINE_DETAIL_VIEW was added to property viewType
* Enum value AGENT_LOGIN_LOGOUT_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_LOGIN_LOGOUT_DETAIL_VIEW was added to property viewType
* Enum value CAMPAIGN_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value CAMPAIGN_PERFORMANCE_DETAIL_VIEW was added to property viewType

**ReportingExportJobRequest** (6 changes)

* Enum value AGENT_TIMELINE_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_TIMELINE_DETAIL_VIEW was added to property viewType
* Enum value AGENT_LOGIN_LOGOUT_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_LOGIN_LOGOUT_DETAIL_VIEW was added to property viewType
* Enum value CAMPAIGN_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value CAMPAIGN_PERFORMANCE_DETAIL_VIEW was added to property viewType

**AuditLogMessage** (1 change)

* Enum value Unarchive was added to property action

**AuditQueryEntity** (1 change)

* Enum value Unarchive was added to property actions

**DataSchema** (1 change)

* Enum value WORKITEM was added to property appliesTo

**Call** (1 change)

* Optional property initialState was added

**Callback** (1 change)

* Optional property initialState was added

**Cobrowsesession** (1 change)

* Optional property initialState was added

**ConversationChat** (1 change)

* Optional property initialState was added

**ConversationMessageMetadata** (1 change)

* Model was added

**ConversationMessageMetadataContent** (1 change)

* Model was added

**ConversationMessageMetadataEvent** (1 change)

* Model was added

**Email** (1 change)

* Optional property initialState was added

**Message** (1 change)

* Optional property initialState was added

**MessageDetails** (1 change)

* Optional property messageMetadata was added

**Screenshare** (1 change)

* Optional property initialState was added

**Video** (1 change)

* Optional property initialState was added

**SetRecordingState** (1 change)

* Model was added

**ConversationMessageContent** (5 changes)

* Enum value ListTemplate was added to property contentType
* Enum value Postback was added to property contentType
* Enum value Reactions was added to property contentType
* Enum value Mention was added to property contentType
* Enum value Unknown was added to property contentType

**ConversationNormalizedMessage** (1 change)

* Enum value Unknown was added to property type

**CallBasic** (1 change)

* Optional property initialState was added

**CallbackBasic** (1 change)

* Optional property initialState was added

**ColumnDataTypeSpecification** (1 change)

* Model was added

**EventLog** (1 change)

* Enum value DIGITAL_RULE was added to property category

**EventMessage** (4 changes)

* Enum value DIGITAL_RULE_EVALUATION_FAILED was added to property code
* Enum value DIGITAL_RULE_INTERNAL_ERROR was added to property code
* Enum value DIGITAL_RULE_NO_DNC_LISTS_CONFIGURED was added to property code
* Enum value DIGITAL_RULE_UPDATED_CONTACT_ADDRESS was added to property code

**TranscriptionSettings** (1 change)

* Optional property lowLatencyTranscriptionEnabled was added

**ScimPhoneNumber** (1 change)

* Enum value eighbyeight was added to property type

**GeneralProgramJobRequest** (1 change)

* Enum value ko-KR was added to property dialect

**Format** (11 changes)

* Enum value CaseArticle was added to property flags
* Enum value CaseAccusative was added to property flags
* Enum value CaseDative was added to property flags
* Enum value CaseGenitive was added to property flags
* Enum value CaseNominative was added to property flags
* Enum value QuantityPlural was added to property flags
* Enum value QuantitySingular was added to property flags
* Enum value GenderCommon was added to property flags
* Enum value GenderFeminine was added to property flags
* Enum value GenderMasculine was added to property flags
* Enum value GenderNeuter was added to property flags

**UCIntegration** (1 change)

* Enum value EightByEight was added to property integrationPresenceSource

**UserSearchRequest** (1 change)

* Enum value EightByEight was added to property integrationPresenceSource

**TeamReference** (1 change)

* Model was added


# Point Changes (9 changes)

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories** (1 change)

* Description was changed for parameter limit

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents** (1 change)

* Description was changed for parameter limit

**GET /api/v2/knowledge/knowledgebases** (1 change)

* Description was changed for parameter limit

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings** (1 change)

* Description was changed for parameter limit

**GET /api/v2/routing/assessments** (1 change)

* Description was changed for parameter limit

**PUT /api/v2/routing/sms/phonenumbers/{addressId}** (1 change)

* Response 202 was changed from Accepted - If async is true, the phone number update is in progress. to Accepted - The phone number update is in progress.

**DELETE /api/v2/routing/sms/phonenumbers/{addressId}** (1 change)

* Response 202 was changed from Accepted - If async is true, the phone number delete is in progress. to Accepted -The phone number delete is in progress.

**POST /api/v2/routing/sms/phonenumbers** (1 change)

* Response 202 was changed from Accepted - If async is true, the phone number create is in progress. to Accepted - the phone number create is in progress.

**GET /api/v2/routing/predictors** (1 change)

* Description was changed for parameter limit
