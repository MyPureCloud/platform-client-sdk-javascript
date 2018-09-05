Platform API version: 2627


# Major Changes (7 changes)

**PATCH /api/v2/conversations/emails/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Response 202 was removed

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Response 202 was removed

**PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Response 202 was removed

**PATCH /api/v2/conversations/messages/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Response 202 was removed

**PATCH /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Response 202 was removed

**PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Response 202 was removed

**WebChatConfig** (1 change)

* Values are now constrained by enum members


# Minor Changes (110 changes)

**/api/v2/authorization/divisionspermitted/{subjectId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/authorization/divisions/{divisionId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/authorization/divisions/{divisionId}/objects/{objectType}** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/users/{userId}/routingskills/bulk** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/messaging/integrations/line/{integrationId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/analytics/flows/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/authorization/subjects/me** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/messaging/integrations/facebook/{integrationId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/messaging/integrations/line** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/divisionviews** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/authorization/divisions** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/users/presences/bulk** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/authorization/divisions/limit** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/{userId}/routinglanguages/bulk** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/authorization/roles/{roleId}/users** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/messaging/integrations/twitter** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**PUT /api/v2/voicemail/policy** (2 changes)

* Response 409 was added
* Response 424 was added

**/api/v2/messaging/integrations/twitter/{integrationId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/authorization/divisions/home** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/documentation/gkn/search** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/authorization/divisionspermitted/me** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/messaging/stickers/{messengerType}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/authorization/roles/{roleId}** (1 change)

* Operation post was added. Summary: Bulk-grant subjects and divisions with an organization role.

**/api/v2/messaging/integrations/line/webhook/{integrationId}** (2 changes)

* Path was added
* Operation POST was added

**POST /api/v2/analytics/conversations/details/query** (1 change)

* Response 413 was added

**/api/v2/messaging/integrations/facebook** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/authorization/subjects/{subjectId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId}** (3 changes)

* Path was added
* Operation POST was added
* Operation DELETE was added

**OrgUser** (2 changes)

* Optional property skills was added
* Optional property languages was added

**User** (2 changes)

* Optional property skills was added
* Optional property languages was added

**ResponseConfig** (1 change)

* Optional property translationMapDefaults was added

**TrustUser** (2 changes)

* Optional property skills was added
* Optional property languages was added

**SystemPromptAsset** (1 change)

* Optional property text was added

**PromptAsset** (1 change)

* Optional property text was added

**AuthzDivision** (1 change)

* Model was added

**LineIntegration** (1 change)

* Model was added

**LineIntegrationRequest** (1 change)

* Model was added

**AuthzGrant** (1 change)

* Model was added

**AuthzGrantPolicy** (1 change)

* Model was added

**AuthzGrantRole** (1 change)

* Model was added

**AuthzSubject** (1 change)

* Model was added

**FacebookIntegration** (1 change)

* Model was added

**LineIntegrationEntityListing** (1 change)

* Model was added

**AuthzDivisionEntityListing** (1 change)

* Model was added

**UpdateWeekScheduleRequest** (1 change)

* Optional property agentUpdateFilter was added

**CreateCallbackOnConversationCommand** (1 change)

* Optional property validateCallbackNumbers was added

**CreateCallbackCommand** (1 change)

* Optional property validateCallbackNumbers was added

**ForecastTimeSeriesResult** (1 change)

* Enum value DynamicHarmonicRegression was added to property forecastingMethod

**TwitterIntegration** (1 change)

* Model was added

**TwitterIntegrationEntityListing** (1 change)

* Model was added

**TwitterIntegrationRequest** (1 change)

* Model was added

**UserMe** (2 changes)

* Optional property skills was added
* Optional property languages was added

**WritableDialerContact** (1 change)

* Model was added

**GKNDocumentationResult** (1 change)

* Model was added

**GKNDocumentationSearchResponse** (1 change)

* Model was added

**GKNDocumentationSearchCriteria** (1 change)

* Model was added

**GKNDocumentationSearchRequest** (1 change)

* Model was added

**MessagingSticker** (1 change)

* Model was added

**MessagingStickerEntityListing** (1 change)

* Model was added

**SubjectDivisions** (1 change)

* Model was added

**PromptAssetCreate** (1 change)

* Optional property text was added

**AnalyticsSession** (3 changes)

* Enum value facebook was added to property messageType
* Enum value twitter was added to property messageType
* Enum value line was added to property messageType

**AnalyticsSurvey** (1 change)

* Optional property getoSurveyTotalScore was added

**ConversationQuery** (1 change)

* Optional property surveyFilters was added

**FacebookIntegrationEntityListing** (1 change)

* Model was added

**FacebookIntegrationRequest** (1 change)

* Model was added


# Point Changes (0 changes)
