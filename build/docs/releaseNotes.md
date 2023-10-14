Platform API version: 7413




# Major Changes (6 changes)

**POST /api/v2/chats/rooms** (1 change)

* Parameter body was made required

**DirectRoutingCallMediaSettings** (1 change)

* Model DirectRoutingCallMediaSettings was removed

**DirectRouting** (1 change)

* Property callMediaSettings was changed from DirectRoutingCallMediaSettings to DirectRoutingMediaSettings

**DirectRoutingMediaSettings** (2 changes)

* Property enabled was removed
* Property inboundFlow was removed

**MediaEndpointStatistics** (1 change)

* Property trunk was changed from NamedEntity to MediaStatisticsTrunkInfo


# Minor Changes (24 changes)

**/api/v2/telephony/sipmessages/conversations/{conversationId}/headers** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/sipmessages/conversations/{conversationId}** (2 changes)

* Path was added
* Operation GET was added

**ReportingExportJobResponse** (1 change)

* Enum value DASHBOARD_USERS_DETAIL was added to property viewType

**ReportingExportMetadataJobResponse** (1 change)

* Enum value DASHBOARD_USERS_DETAIL was added to property viewType

**ReportingExportJobRequest** (1 change)

* Enum value DASHBOARD_USERS_DETAIL was added to property viewType

**DirectRoutingMediaSettings** (1 change)

* Optional property useAgentAddressOutbound was added

**ConversationMessageMetadataEvent** (1 change)

* Enum value SignIn was added to property subType

**ConversationEventPresence** (1 change)

* Enum value SignIn was added to property type

**ActionMapEstimateOutcomeCriteria** (2 changes)

* Optional property quantile was added
* Optional property maxQuantile was added

**AlertRuleProperties** (1 change)

* Enum value WorkforceManagement was added to property type

**CommonRulePredicate** (1 change)

* Enum value tAdherenceStatus was added to property metric

**CommonRule** (1 change)

* Enum value WorkforceManagement was added to property type

**SkillGroup** (1 change)

* Optional property status was added

**SkillGroupWithMemberDivisions** (1 change)

* Optional property status was added

**ConversationMetrics** (1 change)

* Optional property empathyScores was added

**SpeechTextAnalyticsSettingsResponse** (1 change)

* Optional property agentEmpathyEnabled was added

**SpeechTextAnalyticsSettingsRequest** (1 change)

* Optional property agentEmpathyEnabled was added

**CreateRoomRequest** (1 change)

* Optional property userIds was added

**Callheader** (1 change)

* Model was added

**Callmessage** (1 change)

* Model was added

**MediaStatisticsTrunkInfo** (1 change)

* Model was added


# Point Changes (0 changes)
