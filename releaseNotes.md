Platform API version: 3733


# Major Changes (18 changes)

**/api/v2/messaging/integrations/twitter/{integrationId}** (1 change)

* Path /api/v2/messaging/integrations/twitter/{integrationId} was removed

**/api/v2/messaging/integrations/facebook/{integrationId}** (1 change)

* Path /api/v2/messaging/integrations/facebook/{integrationId} was removed

**/api/v2/messaging/integrations/line** (1 change)

* Path /api/v2/messaging/integrations/line was removed

**/api/v2/messaging/stickers/{messengerType}** (1 change)

* Path /api/v2/messaging/stickers/{messengerType} was removed

**/api/v2/messaging/integrations** (1 change)

* Path /api/v2/messaging/integrations was removed

**/api/v2/gmsc/tokens** (1 change)

* Path /api/v2/gmsc/tokens was removed

**/api/v2/messaging/integrations/facebook** (1 change)

* Path /api/v2/messaging/integrations/facebook was removed

**/api/v2/messaging/integrations/line/{integrationId}** (1 change)

* Path /api/v2/messaging/integrations/line/{integrationId} was removed

**/api/v2/messaging/integrations/twitter** (1 change)

* Path /api/v2/messaging/integrations/twitter was removed

**GET /api/v2/analytics/conversations/details** (1 change)

* Response 200 type was changed from AnalyticsConversationMultiGetResponse to AnalyticsConversationWithoutAttributesMultiGetResponse

**GET /api/v2/analytics/conversations/{conversationId}/details** (1 change)

* Response 200 type was changed from AnalyticsConversation to AnalyticsConversationWithoutAttributes

**GET /api/v2/users/{userId}/queues** (1 change)

* Tag Routing was added

**PATCH /api/v2/users/{userId}/queues** (1 change)

* Tag Routing was added

**PATCH /api/v2/users/{userId}/queues/{queueId}** (1 change)

* Tag Routing was added

**Token** (1 change)

* Model Token was removed

**AnalyticsConversationMultiGetResponse** (1 change)

* Model AnalyticsConversationMultiGetResponse was removed

**OrgMediaUtilization** (1 change)

* Model OrgMediaUtilization was removed

**Utilization** (1 change)

* Property utilization was changed from Map<object, OrgMediaUtilization> to Map<object, MediaUtilization>


# Minor Changes (32 changes)

**OAuthLastTokenIssued** (1 change)

* Model was added

**User** (1 change)

* Optional property lastTokenIssued was added

**Flow** (1 change)

* Optional property debugVersion was added

**FlowVersion** (3 changes)

* Optional property debug was added
* Optional property inputSchema was added
* Optional property outputSchema was added

**OrgUser** (1 change)

* Optional property lastTokenIssued was added

**ConversationAggregationQuery** (2 changes)

* Enum value oExternalMediaCount was added to property metrics
* Enum value oMediaCount was added to property metrics

**ConversationAggregationView** (2 changes)

* Enum value oExternalMediaCount was added to property target
* Enum value oMediaCount was added to property target

**ConversationDetailQueryPredicate** (4 changes)

* Enum value nOverSla was added to property metric
* Enum value oExternalMediaCount was added to property metric
* Enum value oMediaCount was added to property metric
* Enum value tShortAbandon was added to property metric

**AnalyticsConversationWithoutAttributes** (1 change)

* Model was added

**AnalyticsConversationWithoutAttributesMultiGetResponse** (1 change)

* Model was added

**AnalyticsParticipantWithoutAttributes** (1 change)

* Model was added

**ConversationProperties** (1 change)

* Optional property isMonitored was added

**ViewFilter** (8 changes)

* Optional property externalContactIds was added
* Optional property externalOrgIds was added
* Optional property acdDurationsMilliseconds was added
* Optional property talkDurationsMilliseconds was added
* Optional property acwDurationsMilliseconds was added
* Optional property handleDurationsMilliseconds was added
* Optional property holdDurationsMilliseconds was added
* Optional property abandonDurationsMilliseconds was added

**WfmHistoricalAdherenceResponse** (1 change)

* Optional property downloadUrls was added

**TrustUser** (1 change)

* Optional property lastTokenIssued was added

**PolicyActions** (1 change)

* Optional property integrationExport was added

**MediaUtilization** (1 change)

* Model was added

**UserMe** (1 change)

* Optional property lastTokenIssued was added


# Point Changes (3 changes)

**GET /api/v2/routing/utilization** (1 change)

* Summary was changed

**PUT /api/v2/routing/utilization** (1 change)

* Summary was changed

**DELETE /api/v2/routing/utilization** (1 change)

* Summary was changed
