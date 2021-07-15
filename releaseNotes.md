Platform API version: 4837


# Major Changes (31 changes)

**GET /api/v2/flows/datatables/{datatableId}/import/jobs** (1 change)

* Response 200 type was changed from EntityListing to DataTableImportEntityListing

**GET /api/v2/gamification/metrics/{metricId}** (3 changes)

* Parameter performance profile id was removed
* Parameter workday was added
* Parameter performanceProfileId was added

**PUT /api/v2/gamification/metrics/{metricId}** (2 changes)

* Parameter performance profile id was removed
* Parameter performanceProfileId was added

**GET /api/v2/gamification/metrics** (3 changes)

* Parameter performance profile id was removed
* Parameter performanceProfileId was added
* Parameter workday was added

**GET /api/v2/organizations/limits/namespaces** (1 change)

* Response 200 type was changed from LimitsEntityListing to PagedNamespaceListing

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}** (1 change)

* Parameter includeOnly was added

**EntityListing** (1 change)

* Model EntityListing was removed

**Leaderboard** (1 change)

* Property metric was changed from Metric to AddressableEntityRef

**ScimV2SchemaAttribute** (18 changes)

* Enum value STRING was removed from property type
* Enum value BOOLEAN was removed from property type
* Enum value DECIMAL was removed from property type
* Enum value INTEGER was removed from property type
* Enum value DATE_TIME was removed from property type
* Enum value REFERENCE was removed from property type
* Enum value COMPLEX was removed from property type
* Enum value ALWAYS was removed from property returned
* Enum value NEVER was removed from property returned
* Enum value DEFAULT was removed from property returned
* Enum value REQUEST was removed from property returned
* Enum value NONE was removed from property uniqueness
* Enum value SERVER was removed from property uniqueness
* Enum value GLOBAL was removed from property uniqueness
* Enum value USER was removed from property referenceTypes
* Enum value GROUP was removed from property referenceTypes
* Enum value EXTERNAL was removed from property referenceTypes
* Enum value URI was removed from property referenceTypes


# Minor Changes (119 changes)

**/api/v2/integrations/botconnector/{integrationId}/bots** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/integrations/botconnector/{integrationId}/bots/{botId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/botconnector/{integrationId}/bots/summaries** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/botconnector/{integrationId}/bots/{botId}/versions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/languageunderstanding/miners/{minerId}/drafts/{draftId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/languageunderstanding/miners/{minerId}/drafts** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/languageunderstanding/miners/{minerId}/intents** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/languageunderstanding/miners/{minerId}/intents/{intentId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/languageunderstanding/miners/{minerId}/execute** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/languageunderstanding/miners/{minerId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/languageunderstanding/miners** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/languageunderstanding/miners/{minerId}/uploads** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/organizations/limits/namespaces/{namespaceName}/defaults** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/calendar/data/ics** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/notifications/channels/{channelId}** (2 changes)

* Path was added
* Operation HEAD was added

**/api/v2/tokens/me** (1 change)

* Operation head was added. Summary: Verify user token

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups** (1 change)

* Response 201 was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates** (1 change)

* Response 201 was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/state/bulk** (1 change)

* Response 202 was added

**/api/v2/workforcemanagement/calendar/url/ics** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation DELETE was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules** (1 change)

* Response 201 was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/generate** (1 change)

* Response 202 was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/copy** (2 changes)

* Response 201 was added
* Response 202 was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/reschedule** (1 change)

* Response 202 was added

**AnalyticsSession** (1 change)

* Enum value unknown was added to property mediaType

**ViewFilter** (11 changes)

* Enum value unknown was added to property mediaTypes
* Optional property botIds was added
* Optional property botVersions was added
* Optional property botMessageTypes was added
* Optional property botProviderList was added
* Optional property botProductList was added
* Optional property botRecognitionFailureReasonList was added
* Optional property botIntentList was added
* Optional property botFinalIntentList was added
* Optional property botSlotList was added
* Optional property botResultList was added

**DataTableImportEntityListing** (1 change)

* Model was added

**EventMessage** (2 changes)

* Enum value CAMPAIGN_EMAIL_BODY_CHARACTER_LIMIT_EXCEEDED was added to property code
* Enum value CAMPAIGN_EMAIL_SUBJECT_CHARACTER_LIMIT_EXCEEDED was added to property code

**OutboundSettings** (1 change)

* Optional property automaticTimeZoneMapping was added

**EmailConfig** (1 change)

* Model was added

**FromEmailAddress** (1 change)

* Model was added

**ReplyToEmailAddress** (1 change)

* Model was added

**Metric** (4 changes)

* Optional property linkedMetric was added
* Optional property dateCreated was added
* Optional property dateUnlinked was added
* Optional property sourcePerformanceProfile was added

**BotConnectorBot** (1 change)

* Model was added

**BotConnectorBotVersion** (1 change)

* Model was added

**BotIntent** (1 change)

* Model was added

**BotList** (1 change)

* Model was added

**BotSlot** (1 change)

* Model was added

**BotConnectorBotSummaryEntityListing** (1 change)

* Model was added

**BotSummary** (1 change)

* Model was added

**BotConnectorBotVersionSummaryEntityListing** (1 change)

* Model was added

**BotVersionSummary** (1 change)

* Model was added

**Draft** (1 change)

* Model was added

**DraftIntents** (1 change)

* Model was added

**Miner** (1 change)

* Model was added

**DraftRequest** (1 change)

* Model was added

**DraftListing** (1 change)

* Model was added

**MinedIntentsListing** (1 change)

* Model was added

**MinerIntent** (1 change)

* Model was added

**Utterance** (1 change)

* Model was added

**MinerExecuteRequest** (1 change)

* Model was added

**MinerListing** (1 change)

* Model was added

**PagedNamespaceListing** (1 change)

* Model was added

**AvailableTopic** (1 change)

* Optional property requiresAnyValidator was added

**PermissionDetails** (1 change)

* Enum value requiresUserBeConversationParticipant was added to property type

**ScimV2SchemaAttribute** (18 changes)

* Enum value string was added to property type
* Enum value boolean was added to property type
* Enum value decimal was added to property type
* Enum value integer was added to property type
* Enum value dateTime was added to property type
* Enum value reference was added to property type
* Enum value complex was added to property type
* Enum value always was added to property returned
* Enum value never was added to property returned
* Enum value default was added to property returned
* Enum value request was added to property returned
* Enum value none was added to property uniqueness
* Enum value server was added to property uniqueness
* Enum value global was added to property uniqueness
* Enum value User was added to property referenceTypes
* Enum value Group was added to property referenceTypes
* Enum value external was added to property referenceTypes
* Enum value uri was added to property referenceTypes

**PostTextResponse** (1 change)

* Optional property nuanceMixDlg was added

**NuanceMixDlgSettings** (1 change)

* Model was added

**PostTextRequest** (1 change)

* Optional property nuanceMixDlg was added

**BuForecastTimeSeriesResult** (1 change)

* Enum value Ensemble was added to property forecastingMethod

**WorkPlan** (1 change)

* Optional property agentCount was added

**WorkPlanValidationRequest** (1 change)

* Optional property agentCount was added

**CalendarUrlResponse** (1 change)

* Model was added


# Point Changes (13 changes)

**POST /api/v2/recording/crossplatform/mediaretentionpolicies** (1 change)

* Description was changed

**PUT /api/v2/recording/crossplatform/mediaretentionpolicies/{policyId}** (1 change)

* Description was changed

**POST /api/v2/recording/mediaretentionpolicies** (1 change)

* Description was changed

**PUT /api/v2/recording/mediaretentionpolicies/{policyId}** (1 change)

* Description was changed

**GET /api/v2/integrations/actions/categories** (1 change)

* Description was changed for parameter sortBy

**GET /api/v2/journey/actiontargets** (1 change)

* Description was changed for parameter pageSize

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

**GET /api/v2/routing/predictors** (1 change)

* Description was changed for parameter limit

**DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}** (1 change)

* Response 202 was changed from The schedule is being deleted to The schedule is being deleted and updates will be sent by notification
