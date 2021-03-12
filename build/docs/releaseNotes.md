Platform API version: 4532


# Major Changes (11 changes)

**EntityListing** (5 changes)

* Property pageSize was removed
* Property pageNumber was removed
* Property total was removed
* Property pageCount was removed
* Property entities was changed from DataTableImportJob[] to object[]

**AuditLogMessage** (1 change)

* Enum value OrganizationProperties was removed from property entityType

**AuditQueryEntity** (1 change)

* Enum value OrganizationProperties was removed from property name

**Dependency** (1 change)

* Enum value BOTCONNECTORBOTVERSION was removed from property type

**DependencyObject** (1 change)

* Enum value BOTCONNECTORBOTVERSION was removed from property type

**TranscriptAggregationQuery** (1 change)

* Enum value nTopicSegments was removed from property metrics

**TranscriptAggregationView** (1 change)

* Enum value nTopicSegments was removed from property target


# Minor Changes (167 changes)

**GET /api/v2/externalcontacts/scan/notes** (1 change)

* Response 422 was added

**/api/v2/routing/conversations/{conversationId}** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/gamification/leaderboard/bestpoints** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/leaderboard/all** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/leaderboard/all/bestpoints** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/leaderboard** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/profiles/{performanceProfileId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/externalcontacts/bulk/contacts/remove** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/bulk/contacts** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/bulk/contacts/update** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/bulk/contacts/add** (2 changes)

* Path was added
* Operation POST was added

**GET /api/v2/externalcontacts/scan/organizations** (1 change)

* Response 422 was added

**/api/v2/analytics/bots/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/gamification/metrics** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/gamification/status** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/externalcontacts/bulk/organizations/add** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/bulk/organizations/remove** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/bulk/organizations** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/bulk/organizations/update** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/gamification/metricdefinitions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/templates** (2 changes)

* Path was added
* Operation GET was added

**GET /api/v2/externalcontacts/scan/contacts** (1 change)

* Response 422 was added

**/api/v2/gamification/metrics/{metricId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/gamification/profiles** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/scorecards/values/trends** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/scorecards/points/trends** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/scorecards** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/scorecards/bestpoints** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/scorecards/attendance** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/scorecards/points/alltime** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/scorecards/points/average** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/scorecards/values/average** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/metricdefinitions/{metricDefinitionId}** (2 changes)

* Path was added
* Operation GET was added

**GET /api/v2/externalcontacts/scan/relationships** (1 change)

* Response 422 was added

**/api/v2/gamification/scorecards/users/values/average** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/scorecards/users/{userId}/points/alltime** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/scorecards/users/{userId}/values/trends** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/scorecards/users/points/average** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/scorecards/users/{userId}/bestpoints** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/scorecards/users/values/trends** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/scorecards/users/{userId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/scorecards/users/{userId}/attendance** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/scorecards/users/{userId}/points/trends** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/templates/{templateId}** (2 changes)

* Path was added
* Operation GET was added

**MessagingSticker** (1 change)

* Enum value open was added to property messengerType

**Response** (1 change)

* Enum value CampaignEmailTemplate was added to property responseType

**RoutingConversationAttributes** (1 change)

* Model was added

**MessagingIntegration** (1 change)

* Enum value open was added to property messengerType

**Library** (1 change)

* Enum value CampaignEmailTemplate was added to property responseType

**OverallBestPoints** (1 change)

* Model was added

**OverallBestPointsItem** (1 change)

* Model was added

**Leaderboard** (1 change)

* Model was added

**LeaderboardItem** (1 change)

* Model was added

**Metric** (1 change)

* Model was added

**Objective** (1 change)

* Model was added

**ObjectiveZone** (1 change)

* Model was added

**Recipient** (1 change)

* Enum value open was added to property messengerType

**PerformanceProfile** (1 change)

* Model was added

**AuditLogMessage** (3 changes)

* Enum value VoicemailPolicy was added to property entityType
* Enum value OrganizationSettings was added to property entityType
* Enum value RoutingTranscriptionSettings was added to property entityType

**AuditQueryEntity** (3 changes)

* Enum value VoicemailPolicy was added to property name
* Enum value OrganizationSettings was added to property name
* Enum value RoutingTranscriptionSettings was added to property name

**BulkDeleteResponse** (1 change)

* Model was added

**BulkErrorDetail** (1 change)

* Model was added

**BulkErrorEntity** (1 change)

* Model was added

**BulkResponseResultVoidEntity** (1 change)

* Model was added

**Void** (1 change)

* Model was added

**BulkIdsRequest** (1 change)

* Model was added

**BulkFetchContactsResponse** (1 change)

* Model was added

**BulkResponseResultExternalContactEntity** (1 change)

* Model was added

**BulkContactsResponse** (1 change)

* Model was added

**BulkErrorExternalContact** (1 change)

* Model was added

**BulkResponseResultExternalContactExternalContact** (1 change)

* Model was added

**BulkContactsRequest** (1 change)

* Model was added

**MessageData** (1 change)

* Enum value open was added to property messengerType

**CreateOutboundMessagingConversationRequest** (1 change)

* Enum value open was added to property toAddressMessengerType

**SendAgentlessOutboundMessageResponse** (1 change)

* Enum value open was added to property messengerType

**SendAgentlessOutboundMessageRequest** (1 change)

* Enum value open was added to property toAddressMessengerType

**BotAggregateDataContainer** (1 change)

* Model was added

**BotAggregateQueryResponse** (1 change)

* Model was added

**BotAggregateQueryClause** (1 change)

* Model was added

**BotAggregateQueryFilter** (1 change)

* Model was added

**BotAggregateQueryPredicate** (1 change)

* Model was added

**BotAggregationQuery** (1 change)

* Model was added

**BotAggregationView** (1 change)

* Model was added

**GetMetricsResponse** (1 change)

* Model was added

**Metrics** (1 change)

* Model was added

**EventMessage** (1 change)

* Enum value EXCEEDED_DNC_PHONE_NUMBER_LENGTH was added to property code

**GamificationStatus** (1 change)

* Model was added

**Dependency** (1 change)

* Enum value BOTCONNECTORINTEGRATION was added to property type

**BulkErrorExternalOrganization** (1 change)

* Model was added

**BulkOrganizationsResponse** (1 change)

* Model was added

**BulkResponseResultExternalOrganizationExternalOrganization** (1 change)

* Model was added

**BulkOrganizationsRequest** (1 change)

* Model was added

**BulkFetchOrganizationsResponse** (1 change)

* Model was added

**BulkResponseResultExternalOrganizationEntity** (1 change)

* Model was added

**DefaultObjective** (1 change)

* Model was added

**GetMetricDefinitionsResponse** (1 change)

* Model was added

**MetricDefinition** (1 change)

* Model was added

**GetTemplatesResponse** (1 change)

* Model was added

**ObjectiveTemplate** (1 change)

* Model was added

**DependencyObject** (1 change)

* Enum value BOTCONNECTORINTEGRATION was added to property type

**MessagingRecipient** (1 change)

* Optional property idType was added

**GetProfilesResponse** (1 change)

* Model was added

**WorkdayValuesMetricItem** (1 change)

* Model was added

**WorkdayValuesTrend** (1 change)

* Model was added

**WorkdayValuesTrendItem** (1 change)

* Model was added

**WorkdayPointsTrend** (1 change)

* Model was added

**WorkdayPointsTrendItem** (1 change)

* Model was added

**PunctualityEvent** (1 change)

* Model was added

**WorkdayMetric** (1 change)

* Model was added

**WorkdayMetricListing** (1 change)

* Model was added

**UserBestPoints** (1 change)

* Model was added

**UserBestPointsItem** (1 change)

* Model was added

**AttendanceStatus** (1 change)

* Model was added

**AttendanceStatusListing** (1 change)

* Model was added

**AllTimePoints** (1 change)

* Model was added

**SingleWorkdayAveragePoints** (1 change)

* Model was added

**SingleWorkdayAverageValues** (1 change)

* Model was added

**TranscriptAggregateQueryPredicate** (1 change)

* Enum value resultsBy was added to property dimension

**TranscriptAggregationQuery** (1 change)

* Enum value resultsBy was added to property groupBy


# Point Changes (3 changes)

**GET /api/v2/conversations/{conversationId}/recordings** (1 change)

* Description was changed for parameter formatId

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/query** (2 changes)

* Description was changed
* Summary was changed
