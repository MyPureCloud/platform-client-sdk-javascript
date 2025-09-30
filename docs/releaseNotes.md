Platform API version: 9635


## Release Notes
The Platform API SDK for JavaScript was ignoring (filtering out) query parameters of type boolean when the value is false, and query parameters of type integer/number when the value is 0.
API endpoints with a boolean query parameter whose default value is not false (or has no default specified) are impacted.
Examples:
    Impacted: getDownload – issueRedirect default value is true
    Not impacted: getOutboundDnclistExport – download default value is false
This behavior will be corrected in future versions of the Platform API SDK for JavaScript.

Given that this issue has existed for a long time and could affect applications that rely on such parameters (set to false or 0), the following approach is being taken:
The SDK will initially continue the legacy filtering behavior (ignoring boolean false and integer/number 0 values).
A new property is introduced at the ApiClient level to control this behavior.
When UseLegacyParameterFilter is true (default), the SDK applies the legacy filter.
This default facilitates a safe transition to modern, accurate filtering without risking unintended behavior changes in existing applications.
To enable accurate filtering, set UseLegacyParameterFilter to false.

# Major Changes (13 changes)

**GET /api/v2/authorization/permissions** (1 change)

* Response 200 type was changed from DomainPermissionEntityListing to PermissionCollectionEntityListing

**GET /api/v2/integrations** (3 changes)

* Parameter ids was added
* Parameter integrationType was added
* Parameter reportedState was added

**GET /api/v2/routing/predictors** (2 changes)

* Parameter kpiId was added
* Parameter state was added

**GET /api/v2/routing/queues/{queueId}/assistant** (1 change)

* Parameter expand was changed from string to array

**GET /api/v2/webchat/settings** (1 change)

* Has been deprecated

**PUT /api/v2/webchat/settings** (1 change)

* Has been deprecated

**DELETE /api/v2/webchat/settings** (1 change)

* Has been deprecated

**PUT /api/v2/learning/modules/{moduleId}/rule** (1 change)

* Parameter assign was added

**DomainPermissionCollectionDomainPermission** (1 change)

* Model DomainPermissionCollectionDomainPermission was removed

**DomainPermissionEntityListing** (1 change)

* Model DomainPermissionEntityListing was removed


# Minor Changes (93 changes)

**/api/v2/assistants/copilot/featuresupport** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messaging/integrations/apple/{integrationId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/conversations/messaging/integrations/apple** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/conversations/messaging/oauth/apple/callback** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/agentschedules/managementunits/mine** (2 changes)

* Path was added
* Operation POST was added

**DomainPermissionCollection** (1 change)

* Model was added

**PermissionCollectionEntityListing** (1 change)

* Model was added

**AnalyticsConversationSegment** (1 change)

* Enum value sessionExpired was added to property disconnectType

**AnalyticsSession** (1 change)

* Optional property engagementSource was added

**ConversationDetailQueryPredicate** (1 change)

* Enum value nConversations was added to property metric

**SegmentDetailQueryPredicate** (1 change)

* Enum value engagementSource was added to property dimension

**ConversationAggregationQuery** (1 change)

* Enum value nConversations was added to property metrics

**ConversationAggregationView** (1 change)

* Enum value nConversations was added to property target

**ViewFilter** (1 change)

* Optional property contentModerationFlags was added

**Limit** (2 changes)

* Enum value audiohook.monitor was added to property namespace
* Enum value screen.monitoring was added to property namespace

**KnowledgeBaseWithDialectReference** (2 changes)

* Enum value cs-CZ was added to property languageCode
* Enum value hu-HU was added to property languageCode

**FeatureSupport** (1 change)

* Model was added

**LanguageSupportInfoRecord** (1 change)

* Model was added

**LanguageSupportResponse** (1 change)

* Model was added

**Session** (1 change)

* Enum value SessionExpired was added to property lastUserDisconnectType

**Disposition** (2 changes)

* Optional property amdTimeout was added
* Optional property silentCallTimeout was added

**DispositionAmdTimeout** (1 change)

* Model was added

**DispositionSilentCallTimeout** (1 change)

* Model was added

**Message** (4 changes)

* Enum value parked was added to property state
* Enum value parked was added to property initialState
* Enum value session.expired was added to property disconnectType
* Optional property engagementSource was added

**CallMediaParticipant** (1 change)

* Enum value session.expired was added to property disconnectType

**CallHistoryParticipant** (1 change)

* Enum value session.expired was added to property disconnectType

**CallbackMediaParticipant** (1 change)

* Enum value session.expired was added to property disconnectType

**ChatMediaParticipant** (1 change)

* Enum value session.expired was added to property disconnectType

**CobrowseMediaParticipant** (1 change)

* Enum value session.expired was added to property disconnectType

**EmailMediaParticipant** (1 change)

* Enum value session.expired was added to property disconnectType

**ConversationMessageContent** (6 changes)

* Optional property datePicker was added
* Optional property interactiveApplication was added
* Optional property listPicker was added
* Optional property paymentRequest was added
* Optional property paymentResponse was added
* Optional property form was added

**MessageMediaParticipant** (1 change)

* Enum value session.expired was added to property disconnectType

**AppleAuthentication** (1 change)

* Model was added

**AppleIMessageApp** (1 change)

* Model was added

**AppleIntegration** (1 change)

* Model was added

**ApplePay** (1 change)

* Model was added

**AppleIntegrationUpdateRequest** (1 change)

* Model was added

**AppleIntegrationEntityListing** (1 change)

* Model was added

**AppleIntegrationRequest** (1 change)

* Model was added

**MaskingRule** (1 change)

* Optional property direction was added

**DocumentChunkReference** (1 change)

* Optional property selfUri was added

**SearchUpdateRequest** (1 change)

* Optional property selectedAnswers was added

**Miner** (8 changes)

* Enum value hi-in was added to property language
* Enum value ar-001 was added to property language
* Enum value ar-ae was added to property language
* Enum value ar-bh was added to property language
* Enum value ar-eg was added to property language
* Enum value ar-il was added to property language
* Enum value ar-sa was added to property language
* Enum value ar-tn was added to property language

**ApprovalNamespace** (2 changes)

* Enum value audiohook.monitor was added to property namespace
* Enum value screen.monitoring was added to property namespace

**LimitChangeRequestDetails** (2 changes)

* Enum value audiohook.monitor was added to property namespace
* Enum value screen.monitoring was added to property namespace

**StatusChange** (2 changes)

* Enum value audiohook.monitor was added to property namespace
* Enum value screen.monitoring was added to property namespace

**OAuthAppleAuthorizationResponse** (1 change)

* Model was added

**OAuthAppleAuthorizationResponseError** (1 change)

* Model was added

**RecordingMessagingMessage** (1 change)

* Optional property interactiveApplication was added

**ContentModeration** (1 change)

* Optional property categories was added

**GeneralProgramJobRequest** (3 changes)

* Enum value zh-CN was added to property dialect
* Enum value zh-HK was added to property dialect
* Enum value zh-TW was added to property dialect

**Topic** (1 change)

* Optional property matchingType was added

**ListedTopic** (1 change)

* Optional property matchingType was added

**AgentMuQueryResponse** (1 change)

* Model was added

**AgentMuScheduleItem** (1 change)

* Model was added

**AgentMuScheduleResult** (1 change)

* Model was added

**AgentMuScheduleShift** (1 change)

* Model was added

**AgentScheduleShiftActivity** (1 change)

* Model was added

**AgentMuScheduleQuery** (1 change)

* Model was added

**ConversationAsyncAggregationQuery** (1 change)

* Enum value nConversations was added to property metrics

**RowSearchPredicate** (1 change)

* Enum value ContainsItem was added to property operator

**InternalMessageMediaParticipant** (1 change)

* Enum value session.expired was added to property disconnectType


# Point Changes (5 changes)

**POST /api/v2/conversations/calls/{conversationId}/participants/user/{userId}** (1 change)

* Summary was changed

**GET /api/v2/quality/evaluators/activity** (1 change)

* Summary was changed

**GET /api/v2/webchat/settings** (1 change)

* Description was changed

**PUT /api/v2/webchat/settings** (1 change)

* Description was changed

**DELETE /api/v2/webchat/settings** (1 change)

* Description was changed
