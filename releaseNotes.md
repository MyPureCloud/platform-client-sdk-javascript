Platform API version: 1880


# Major Changes (4 changes)

**GET /api/v2/scripts/published/{scriptId}/pages** (1 change)

* Parameter foo was removed

**Queue** (1 change)

* Property whisper was removed

**UserQueue** (1 change)

* Property whisper was removed

**CreateQueueRequest** (1 change)

* Property whisper was removed


# Minor Changes (94 changes)

**PUT /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}** (1 change)

* Response 409 was added

**DELETE /api/v2/outbound/contactlists** (1 change)

* Response 409 was added

**DELETE /api/v2/routing/email/domains/{domainName}/routes/{routeId}** (1 change)

* Response 409 was added

**GET /api/v2/flows** (1 change)

* Response 405 was added

**POST /api/v2/flows** (2 changes)

* Response 405 was added
* Response 409 was added

**DELETE /api/v2/flows** (1 change)

* Response 409 was added

**DELETE /api/v2/quality/forms/{formId}** (1 change)

* Response 409 was added

**PUT /api/v2/outbound/rulesets/{ruleSetId}** (1 change)

* Response 409 was added

**PUT /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}** (1 change)

* Response 409 was added

**DELETE /api/v2/architect/schedulegroups/{scheduleGroupId}** (1 change)

* Response 409 was added

**PUT /api/v2/voicemail/messages/{messageId}** (1 change)

* Response 409 was added

**PATCH /api/v2/voicemail/messages/{messageId}** (1 change)

* Response 409 was added

**PUT /api/v2/outbound/contactlists/{contactListId}** (1 change)

* Response 409 was added

**PUT /api/v2/telephony/providers/edges/{edgeId}** (1 change)

* Response 409 was added

**PUT /api/v2/architect/prompts/{promptId}/resources/{languageCode}** (1 change)

* Response 409 was added

**DELETE /api/v2/architect/prompts/{promptId}/resources/{languageCode}** (2 changes)

* Response 409 was added
* Response 410 was added

**PUT /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}** (1 change)

* Response 409 was added

**DELETE /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}** (1 change)

* Response 409 was added

**POST /api/v2/architect/dependencytracking/build** (1 change)

* Response 409 was added

**POST /api/v2/architect/prompts/{promptId}/resources** (1 change)

* Response 409 was added

**POST /api/v2/telephony/providers/edges/extensionpools** (1 change)

* Response 409 was added

**PATCH /api/v2/outbound/settings** (1 change)

* Response 409 was added

**PUT /api/v2/users/{userId}/station/associatedstation/{stationId}** (2 changes)

* Response 409 was added
* Response 424 was added

**PUT /api/v2/outbound/callabletimesets/{callableTimeSetId}** (1 change)

* Response 409 was added

**DELETE /api/v2/architect/schedules/{scheduleId}** (1 change)

* Response 409 was added

**PUT /api/v2/users/{userId}/callforwarding** (1 change)

* Response 409 was added

**PATCH /api/v2/users/{userId}/callforwarding** (1 change)

* Response 409 was added

**POST /api/v2/telephony/providers/edges/didpools** (1 change)

* Response 409 was added

**GET /api/v2/flows/{flowId}/versions/{versionId}** (1 change)

* Response 410 was added

**DELETE /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}** (1 change)

* Response 409 was added

**GET /api/v2/architect/dependencytracking/consumedresources** (1 change)

* Response 410 was added

**POST /api/v2/architect/prompts** (1 change)

* Response 409 was added

**DELETE /api/v2/architect/prompts** (1 change)

* Response 409 was added

**PUT /api/v2/outbound/wrapupcodemappings** (1 change)

* Response 409 was added

**POST /api/v2/telephony/providers/edges/{edgeId}/unpair** (1 change)

* Response 409 was added

**PUT /api/v2/telephony/providers/edges/didpools/{didPoolId}** (1 change)

* Response 409 was added

**DELETE /api/v2/telephony/providers/edges/didpools/{didPoolId}** (1 change)

* Response 409 was added

**PUT /api/v2/architect/systemprompts/{promptId}/resources/{languageCode}** (1 change)

* Response 409 was added

**DELETE /api/v2/architect/systemprompts/{promptId}/resources/{languageCode}** (1 change)

* Response 409 was added

**PUT /api/v2/outbound/campaignrules/{campaignRuleId}** (1 change)

* Response 409 was added

**DELETE /api/v2/telephony/providers/edges/sites/{siteId}** (1 change)

* Response 409 was added

**POST /api/v2/voicemail/messages** (1 change)

* Response 409 was added

**/api/v2/scripts/{scriptId}/export** (2 changes)

* Path was added
* Operation POST was added

**POST /api/v2/flows/actions/unlock** (1 change)

* Response 405 was added

**POST /api/v2/flows/actions/publish** (3 changes)

* Response 405 was added
* Response 409 was added
* Response 410 was added

**POST /api/v2/flows/actions/checkin** (1 change)

* Response 405 was added

**POST /api/v2/flows/actions/checkout** (3 changes)

* Response 405 was added
* Response 409 was added
* Response 410 was added

**POST /api/v2/flows/actions/deactivate** (3 changes)

* Response 405 was added
* Response 409 was added
* Response 410 was added

**POST /api/v2/flows/actions/revert** (3 changes)

* Response 405 was added
* Response 409 was added
* Response 410 was added

**GET /api/v2/flows/{flowId}/versions** (1 change)

* Response 410 was added

**POST /api/v2/flows/{flowId}/versions** (3 changes)

* Response 405 was added
* Response 409 was added
* Response 410 was added

**PUT /api/v2/outbound/dnclists/{dncListId}** (1 change)

* Response 409 was added

**GET /api/v2/flows/{flowId}** (2 changes)

* Response 405 was added
* Response 410 was added

**PUT /api/v2/flows/{flowId}** (3 changes)

* Response 405 was added
* Response 409 was added
* Response 410 was added

**DELETE /api/v2/flows/{flowId}** (3 changes)

* Response 405 was added
* Response 409 was added
* Response 410 was added

**GET /api/v2/flows/{flowId}/latestconfiguration** (1 change)

* Response 405 was added

**GET /api/v2/architect/dependencytracking/object** (1 change)

* Response 410 was added

**PUT /api/v2/outbound/sequences/{sequenceId}** (1 change)

* Response 409 was added

**POST /api/v2/architect/systemprompts/{promptId}/resources** (1 change)

* Response 409 was added

**POST /api/v2/routing/skills** (1 change)

* Response 409 was added

**PUT /api/v2/architect/prompts/{promptId}** (1 change)

* Response 409 was added

**DELETE /api/v2/architect/prompts/{promptId}** (2 changes)

* Response 409 was added
* Response 410 was added

**GET /api/v2/architect/dependencytracking/consumingresources** (1 change)

* Response 410 was added

**AggregationQuery** (1 change)

* Enum value divisionId was added to property groupBy

**AnalyticsQueryPredicate** (1 change)

* Enum value divisionId was added to property dimension

**Queue** (1 change)

* Optional property whisperPrompt was added

**UserReference** (1 change)

* id is no longer readonly

**EventLog** (1 change)

* Enum value CONTACT was added to property category

**EventMessage** (1 change)

* Enum value AUTOMATIC_TIME_ZONE_ZIP_CODE_INVALID was added to property code

**AnalyticsConversation** (1 change)

* Optional property divisionIds was added

**UserQueue** (1 change)

* Optional property whisperPrompt was added

**ExportScriptResponse** (1 change)

* Model was added

**ExportScriptRequest** (1 change)

* Model was added

**CreateQueueRequest** (1 change)

* Optional property whisperPrompt was added


# Point Changes (2 changes)

**POST /api/v2/recording/batchrequests** (1 change)

* Summary was changed

**GET /api/v2/conversations/{conversationId}/recordings** (1 change)

* Description was changed for parameter formatId
