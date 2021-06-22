Platform API version: 4784


# Release notes

* Forcing a major release to ensure SDKs align with API definition

# Major Changes (39 changes)

**GET /api/v2/journey/actiontemplates** (2 changes)

* Parameter queryFields was added
* Parameter queryValue was added

**GET /api/v2/telephony/providers/edges/linebasesettings** (1 change)

* Parameter expand was added

**GET /api/v2/journey/outcomes** (2 changes)

* Parameter queryFields was added
* Parameter queryValue was added

**GET /api/v2/quality/conversations/{conversationId}/audits** (1 change)

* Has been deprecated

**GET /api/v2/outbound/dnclists/divisionviews** (1 change)

* Parameter dncSourceType was added

**GET /api/v2/journey/segments** (2 changes)

* Parameter queryFields was added
* Parameter queryValue was added

**POST /api/v2/learning/assignments/bulkremove** (1 change)

* Response 204 was removed

**GET /api/v2/journey/actionmaps** (2 changes)

* Parameter queryFields was added
* Parameter queryValue was added

**GET /api/v2/gamification/metrics/{metricId}** (1 change)

* Parameter performance profile id was added

**PUT /api/v2/gamification/metrics/{metricId}** (1 change)

* Parameter performance profile id was added

**GET /api/v2/knowledge/knowledgebases** (1 change)

* Parameter coreLanguage was added

**POST /api/v2/flows** (1 change)

* Parameter language was added

**GET /api/v2/architect/schedulegroups** (1 change)

* Parameter divisionId was added

**GET /api/v2/architect/schedules** (1 change)

* Parameter divisionId was added

**GET /api/v2/users/{userId}/favorites** (1 change)

* Has been deprecated

**PUT /api/v2/quality/surveys/scorable** (1 change)

* Parameter customerSurveyUrl was made required

**ContentReaction** (1 change)

* Enum value None was removed from property reactionType

**AnalyticsEvaluation** (2 changes)

* Property getoTotalCriticalScore was removed
* Property getoTotalScore was removed

**AnalyticsResolution** (1 change)

* Property getnNextContactAvoided was removed

**AnalyticsSurvey** (1 change)

* Property getoSurveyTotalScore was removed

**DataTable** (1 change)

* Property division was changed from Division to WritableDivision

**JourneyAggregateQueryPredicate** (4 changes)

* Enum value greaterThanCondition was removed from property dimension
* Enum value greaterThanOrEqualCondition was removed from property dimension
* Enum value lessThanCondition was removed from property dimension
* Enum value lessThanOrEqualCondition was removed from property dimension

**JourneyAggregationQuery** (4 changes)

* Enum value greaterThanCondition was removed from property groupBy
* Enum value greaterThanOrEqualCondition was removed from property groupBy
* Enum value lessThanCondition was removed from property groupBy
* Enum value lessThanOrEqualCondition was removed from property groupBy

**EntityListing** (5 changes)

* Property pageSize was removed
* Property pageNumber was removed
* Property total was removed
* Property pageCount was removed
* Property entities was changed from DataTableImportJob[] to object[]


# Minor Changes (1909 changes)

**GET /api/v2/analytics/reporting/metadata** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}/upload** (1 change)

* Response 408 was added

**GET /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Response 408 was added

**GET /api/v2/conversations/cobrowsesessions** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/attributes** (1 change)

* Response 408 was added

**GET /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Response 408 was added

**GET /api/v2/conversations/cobrowsesessions/{conversationId}** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}** (1 change)

* Response 408 was added

**POST /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/replace** (1 change)

* Response 408 was added

**GET /api/v2/contentmanagement/status/{statusId}** (1 change)

* Response 408 was added

**DELETE /api/v2/contentmanagement/status/{statusId}** (1 change)

* Response 408 was added

**GET /api/v2/organizations/ipaddressauthentication** (1 change)

* Response 408 was added

**PUT /api/v2/organizations/ipaddressauthentication** (1 change)

* Response 408 was added

**POST /api/v2/license/infer** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}** (1 change)

* Response 408 was added

**PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}** (1 change)

* Response 408 was added

**DELETE /api/v2/externalcontacts/organizations/{externalOrganizationId}** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/contacts/{contactId}** (1 change)

* Response 408 was added

**PUT /api/v2/externalcontacts/contacts/{contactId}** (1 change)

* Response 408 was added

**DELETE /api/v2/externalcontacts/contacts/{contactId}** (1 change)

* Response 408 was added

**GET /api/v2/outbound/wrapupcodemappings** (1 change)

* Response 408 was added

**PUT /api/v2/outbound/wrapupcodemappings** (1 change)

* Response 408 was added

**GET /api/v2/coaching/appointments/{appointmentId}** (1 change)

* Response 408 was added

**DELETE /api/v2/coaching/appointments/{appointmentId}** (1 change)

* Response 408 was added

**PATCH /api/v2/coaching/appointments/{appointmentId}** (1 change)

* Response 408 was added

**POST /api/v2/coaching/appointments/{appointmentId}/conversations** (1 change)

* Response 408 was added

**GET /api/v2/scripts/published/{scriptId}** (1 change)

* Response 408 was added

**GET /api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions** (1 change)

* Response 408 was added

**POST /api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions** (1 change)

* Response 408 was added

**GET /api/v2/webchat/deployments** (1 change)

* Response 408 was added

**POST /api/v2/webchat/deployments** (1 change)

* Response 408 was added

**GET /api/v2/analytics/reporting/timeperiods** (1 change)

* Response 408 was added

**GET /api/v2/outbound/campaigns/{campaignId}/stats** (1 change)

* Response 408 was added

**GET /api/v2/integrations/clientapps** (1 change)

* Response 408 was added

**GET /api/v2/quality/forms/surveys/bulk** (1 change)

* Response 408 was added

**GET /api/v2/quality/forms/surveys/bulk/contexts** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}** (1 change)

* Response 408 was added

**PUT /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}** (1 change)

* Response 408 was added

**DELETE /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}** (1 change)

* Response 408 was added

**GET /api/v2/integrations** (1 change)

* Response 408 was added

**POST /api/v2/integrations** (1 change)

* Response 408 was added

**GET /api/v2/outbound/contactlists/{contactListId}/export** (1 change)

* Response 408 was added

**POST /api/v2/outbound/contactlists/{contactListId}/export** (1 change)

* Response 408 was added

**GET /api/v2/contentmanagement/workspaces/{workspaceId}** (1 change)

* Response 408 was added

**PUT /api/v2/contentmanagement/workspaces/{workspaceId}** (1 change)

* Response 408 was added

**DELETE /api/v2/contentmanagement/workspaces/{workspaceId}** (1 change)

* Response 408 was added

**GET /api/v2/presencedefinitions** (1 change)

* Response 408 was added

**POST /api/v2/presencedefinitions** (1 change)

* Response 408 was added

**POST /api/v2/uploads/workforcemanagement/historicaldata/json** (1 change)

* Response 408 was added

**POST /api/v2/uploads/workforcemanagement/historicaldata/csv** (1 change)

* Response 408 was added

**POST /api/v2/analytics/users/aggregates/query** (1 change)

* Response 408 was added

**POST /api/v2/analytics/users/details/query** (1 change)

* Response 408 was added

**POST /api/v2/analytics/users/observations/query** (1 change)

* Response 408 was added

**POST /api/v2/analytics/users/details/jobs** (1 change)

* Response 408 was added

**GET /api/v2/analytics/users/details/jobs/{jobId}** (1 change)

* Response 408 was added

**DELETE /api/v2/analytics/users/details/jobs/{jobId}** (1 change)

* Response 408 was added

**GET /api/v2/analytics/users/details/jobs/{jobId}/results** (1 change)

* Response 408 was added

**GET /api/v2/analytics/users/details/jobs/availability** (1 change)

* Response 408 was added

**GET /api/v2/identityproviders/pureengage** (1 change)

* Response 408 was added

**PUT /api/v2/identityproviders/pureengage** (1 change)

* Response 408 was added

**DELETE /api/v2/identityproviders/pureengage** (1 change)

* Response 408 was added

**PATCH /api/v2/users/bulk** (1 change)

* Response 408 was added

**POST /api/v2/oauth/clients/{clientId}/secret** (1 change)

* Response 408 was added

**GET /api/v2/oauth/clients/{clientId}** (1 change)

* Response 408 was added

**PUT /api/v2/oauth/clients/{clientId}** (1 change)

* Response 408 was added

**DELETE /api/v2/oauth/clients/{clientId}** (1 change)

* Response 408 was added

**GET /api/v2/journey/actiontemplates** (1 change)

* Response 408 was added

**POST /api/v2/journey/actiontemplates** (1 change)

* Response 408 was added

**POST /api/v2/certificate/details** (1 change)

* Response 408 was added

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings** (1 change)

* Response 408 was added

**POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings** (1 change)

* Response 408 was added

**POST /api/v2/analytics/flows/aggregates/query** (1 change)

* Response 408 was added

**POST /api/v2/analytics/flows/observations/query** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/didpools/{didPoolId}** (1 change)

* Response 408 was added

**PUT /api/v2/telephony/providers/edges/didpools/{didPoolId}** (1 change)

* Response 408 was added

**DELETE /api/v2/telephony/providers/edges/didpools/{didPoolId}** (1 change)

* Response 408 was added

**GET /api/v2/languageunderstanding/domains** (1 change)

* Response 408 was added

**POST /api/v2/languageunderstanding/domains** (1 change)

* Response 408 was added

**GET /api/v2/voicemail/groups/{groupId}/messages** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/users** (1 change)

* Response 408 was added

**GET /api/v2/flows/{flowId}/versions/{versionId}/configuration** (1 change)

* Response 408 was added

**GET /api/v2/flows/{flowId}/versions/{versionId}** (1 change)

* Response 408 was added

**POST /api/v2/analytics/conversations/aggregates/query** (1 change)

* Response 408 was added

**POST /api/v2/analytics/conversations/details/query** (1 change)

* Response 408 was added

**GET /api/v2/analytics/conversations/{conversationId}/details** (1 change)

* Response 408 was added

**GET /api/v2/analytics/conversations/details** (1 change)

* Response 408 was added

**POST /api/v2/analytics/conversations/{conversationId}/details/properties** (1 change)

* Response 408 was added

**POST /api/v2/analytics/conversations/details/jobs** (1 change)

* Response 408 was added

**GET /api/v2/analytics/conversations/details/jobs/{jobId}** (1 change)

* Response 408 was added

**DELETE /api/v2/analytics/conversations/details/jobs/{jobId}** (1 change)

* Response 408 was added

**GET /api/v2/analytics/conversations/details/jobs/{jobId}/results** (1 change)

* Response 408 was added

**GET /api/v2/analytics/conversations/details/jobs/availability** (1 change)

* Response 408 was added

**GET /api/v2/flows/datatables** (1 change)

* Response 408 was added

**POST /api/v2/flows/datatables** (1 change)

* Response 408 was added

**GET /api/v2/fax/documents/{documentId}** (1 change)

* Response 408 was added

**PUT /api/v2/fax/documents/{documentId}** (1 change)

* Response 408 was added

**DELETE /api/v2/fax/documents/{documentId}** (1 change)

* Response 408 was added

**POST /api/v2/outbound/campaigns/progress** (1 change)

* Response 408 was added

**POST /api/v2/analytics/queues/observations/query** (1 change)

* Response 408 was added

**/api/v2/routing/predictors** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**GET /api/v2/profiles/users** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/historicaldata/deletejob** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/historicaldata/deletejob** (1 change)

* Response 408 was added

**GET /api/v2/userrecordings/{recordingId}/media** (1 change)

* Response 408 was added

**GET /api/v2/outbound/messagingcampaigns** (1 change)

* Response 408 was added

**POST /api/v2/outbound/messagingcampaigns** (1 change)

* Response 408 was added

**GET /api/v2/architect/emergencygroups** (1 change)

* Response 408 was added

**POST /api/v2/architect/emergencygroups** (1 change)

* Response 408 was added

**PUT /api/v2/externalcontacts/conversations/{conversationId}** (1 change)

* Response 408 was added

**GET /api/v2/routing/wrapupcodes** (1 change)

* Response 408 was added

**POST /api/v2/routing/wrapupcodes** (1 change)

* Response 408 was added

**GET /api/v2/license/users** (1 change)

* Response 408 was added

**POST /api/v2/license/users** (1 change)

* Response 408 was added

**GET /api/v2/gdpr/requests/{requestId}** (1 change)

* Response 408 was added

**GET /api/v2/alerting/alerts/active** (1 change)

* Response 408 was added

**GET /api/v2/groups/{groupId}/profile** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/{edgeId}/lines** (1 change)

* Response 408 was added

**GET /api/v2/notifications/availabletopics** (1 change)

* Response 408 was added

**GET /api/v2/identityproviders/generic** (1 change)

* Response 408 was added

**PUT /api/v2/identityproviders/generic** (1 change)

* Response 408 was added

**DELETE /api/v2/identityproviders/generic** (1 change)

* Response 408 was added

**GET /api/v2/outbound/campaigns/{campaignId}** (1 change)

* Response 408 was added

**PUT /api/v2/outbound/campaigns/{campaignId}** (1 change)

* Response 408 was added

**DELETE /api/v2/outbound/campaigns/{campaignId}** (1 change)

* Response 408 was added

**GET /api/v2/outbound/campaigns/{campaignId}/agentownedmappingpreview/results** (1 change)

* Response 408 was added

**POST /api/v2/outbound/campaigns/{campaignId}/agentownedmappingpreview** (1 change)

* Response 408 was added

**GET /api/v2/outbound/campaigns/{campaignId}/diagnostics** (1 change)

* Response 408 was added

**GET /api/v2/outbound/campaigns/{campaignId}/progress** (1 change)

* Response 408 was added

**DELETE /api/v2/outbound/campaigns/{campaignId}/progress** (1 change)

* Response 408 was added

**GET /api/v2/outbound/events** (1 change)

* Response 408 was added

**GET /api/v2/contentmanagement/documents** (1 change)

* Response 408 was added

**POST /api/v2/contentmanagement/documents** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/copy** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}** (1 change)

* Response 408 was added

**DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}** (1 change)

* Response 408 was added

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/validate** (1 change)

* Response 408 was added

**GET /api/v2/quality/surveys/{surveyId}** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/linebasesettings** (1 change)

* Response 408 was added

**GET /api/v2/outbound/dnclists/{dncListId}/importstatus** (1 change)

* Response 408 was added

**GET /api/v2/outbound/contactlistfilters/{contactListFilterId}** (1 change)

* Response 408 was added

**PUT /api/v2/outbound/contactlistfilters/{contactListFilterId}** (1 change)

* Response 408 was added

**DELETE /api/v2/outbound/contactlistfilters/{contactListFilterId}** (1 change)

* Response 408 was added

**GET /api/v2/responsemanagement/responses/{responseId}** (1 change)

* Response 408 was added

**PUT /api/v2/responsemanagement/responses/{responseId}** (1 change)

* Response 408 was added

**DELETE /api/v2/responsemanagement/responses/{responseId}** (1 change)

* Response 408 was added

**GET /api/v2/quality/evaluations/query** (1 change)

* Response 408 was added

**GET /api/v2/alerting/interactionstats/rules** (1 change)

* Response 408 was added

**POST /api/v2/alerting/interactionstats/rules** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes** (1 change)

* Response 408 was added

**POST /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/{edgeId}/softwareupdate** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/{edgeId}/softwareupdate** (1 change)

* Response 408 was added

**DELETE /api/v2/telephony/providers/edges/{edgeId}/softwareupdate** (1 change)

* Response 408 was added

**GET /api/v2/outbound/schedules/sequences** (1 change)

* Response 408 was added

**GET /api/v2/identityproviders/gsuite** (1 change)

* Response 408 was added

**PUT /api/v2/identityproviders/gsuite** (1 change)

* Response 408 was added

**DELETE /api/v2/identityproviders/gsuite** (1 change)

* Response 408 was added

**GET /api/v2/responsemanagement/libraries/{libraryId}** (1 change)

* Response 408 was added

**PUT /api/v2/responsemanagement/libraries/{libraryId}** (1 change)

* Response 408 was added

**DELETE /api/v2/responsemanagement/libraries/{libraryId}** (1 change)

* Response 408 was added

**GET /api/v2/conversations/messaging/integrations/whatsapp** (1 change)

* Response 408 was added

**POST /api/v2/conversations/messaging/integrations/whatsapp** (1 change)

* Response 408 was added

**GET /api/v2/recording/crossplatform/mediaretentionpolicies** (1 change)

* Response 408 was added

**POST /api/v2/recording/crossplatform/mediaretentionpolicies** (1 change)

* Response 408 was added

**DELETE /api/v2/recording/crossplatform/mediaretentionpolicies** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/{edgeId}/statuscode** (1 change)

* Response 408 was added

**GET /api/v2/orgauthorization/trustors/{trustorOrgId}/users** (1 change)

* Response 408 was added

**GET /api/v2/gamification/leaderboard** (1 change)

* Response 408 was added

**GET /api/v2/gamification/leaderboard/bestpoints** (1 change)

* Response 408 was added

**GET /api/v2/gamification/leaderboard/all** (1 change)

* Response 408 was added

**GET /api/v2/gamification/leaderboard/all/bestpoints** (1 change)

* Response 408 was added

**POST /api/v2/users/{userId}/password** (1 change)

* Response 408 was added

**GET /api/v2/contentmanagement/workspaces/{workspaceId}/documents** (1 change)

* Response 408 was added

**GET /api/v2/timezones** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/phonebasesettings/availablemetabases** (1 change)

* Response 408 was added

**GET /api/v2/flows/outcomes** (1 change)

* Response 408 was added

**POST /api/v2/flows/outcomes** (1 change)

* Response 408 was added

**POST /api/v2/outbound/campaigns/{campaignId}/callback/schedule** (1 change)

* Response 408 was added

**GET /api/v2/architect/systemprompts** (1 change)

* Response 408 was added

**GET /api/v2/billing/trusteebillingoverview/{trustorOrgId}** (1 change)

* Response 408 was added

**GET /api/v2/users/development/activities/{activityId}** (1 change)

* Response 408 was added

**GET /api/v2/users/development/activities** (1 change)

* Response 408 was added

**GET /api/v2/users/development/activities/me** (1 change)

* Response 408 was added

**GET /api/v2/contentmanagement/workspaces** (1 change)

* Response 408 was added

**POST /api/v2/contentmanagement/workspaces** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/timeoffrequests** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/timeoffrequests** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}** (1 change)

* Response 408 was added

**PATCH /api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/certificateauthorities/{certificateId}** (1 change)

* Response 408 was added

**PUT /api/v2/telephony/providers/edges/certificateauthorities/{certificateId}** (1 change)

* Response 408 was added

**DELETE /api/v2/telephony/providers/edges/certificateauthorities/{certificateId}** (1 change)

* Response 408 was added

**GET /api/v2/alerting/interactionstats/rules/{ruleId}** (1 change)

* Response 408 was added

**PUT /api/v2/alerting/interactionstats/rules/{ruleId}** (1 change)

* Response 408 was added

**DELETE /api/v2/alerting/interactionstats/rules/{ruleId}** (1 change)

* Response 408 was added

**GET /api/v2/authorization/roles/{roleId}/subjectgrants** (1 change)

* Response 408 was added

**GET /api/v2/orgauthorization/trustees** (1 change)

* Response 408 was added

**POST /api/v2/orgauthorization/trustees** (1 change)

* Response 408 was added

**GET /api/v2/widgets/deployments** (1 change)

* Response 408 was added

**POST /api/v2/widgets/deployments** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/sites/{siteId}/numberplans/classifications** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/geolocations/{clientId}** (1 change)

* Response 408 was added

**PATCH /api/v2/users/{userId}/geolocations/{clientId}** (1 change)

* Response 408 was added

**GET /api/v2/scim/v2/resourcetypes/{resourceType}** (1 change)

* Response 408 was added

**GET /api/v2/scim/v2/resourcetypes** (1 change)

* Response 408 was added

**GET /api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}** (1 change)

* Response 408 was added

**GET /api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}/{extensionType}/{metadataId}** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/relationships** (1 change)

* Response 408 was added

**GET /api/v2/webchat/guest/conversations/{conversationId}/messages** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/contacts/{contactId}/notes** (1 change)

* Response 408 was added

**POST /api/v2/externalcontacts/contacts/{contactId}/notes** (1 change)

* Response 408 was added

**GET /api/v2/routing/queues/{queueId}/users** (1 change)

* Response 408 was added

**POST /api/v2/routing/queues/{queueId}/users** (1 change)

* Response 408 was added

**PATCH /api/v2/routing/queues/{queueId}/users** (1 change)

* Response 408 was added

**GET /api/v2/journey/outcomes** (1 change)

* Response 408 was added

**POST /api/v2/journey/outcomes** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/queues** (1 change)

* Response 408 was added

**PATCH /api/v2/users/{userId}/queues** (1 change)

* Response 408 was added

**GET /api/v2/flows/milestones/{milestoneId}** (1 change)

* Response 408 was added

**PUT /api/v2/flows/milestones/{milestoneId}** (1 change)

* Response 408 was added

**DELETE /api/v2/flows/milestones/{milestoneId}** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/organizations/schemas/{schemaId}/versions** (1 change)

* Response 408 was added

**GET /api/v2/languageunderstanding/domains/{domainId}** (1 change)

* Response 408 was added

**DELETE /api/v2/languageunderstanding/domains/{domainId}** (1 change)

* Response 408 was added

**PATCH /api/v2/languageunderstanding/domains/{domainId}** (1 change)

* Response 408 was added

**GET /api/v2/quality/conversations/{conversationId}/surveys** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces** (1 change)

* Response 408 was added

**GET /api/v2/groups/{groupId}/members** (1 change)

* Response 408 was added

**POST /api/v2/groups/{groupId}/members** (1 change)

* Response 408 was added

**DELETE /api/v2/groups/{groupId}/members** (1 change)

* Response 408 was added

**GET /api/v2/routing/email/domains/{domainId}** (1 change)

* Response 408 was added

**DELETE /api/v2/routing/email/domains/{domainId}** (1 change)

* Response 408 was added

**PATCH /api/v2/routing/email/domains/{domainId}** (1 change)

* Response 408 was added

**POST /api/v2/routing/email/domains/{domainId}/testconnection** (1 change)

* Response 408 was added

**PATCH /api/v2/routing/email/domains/{domainId}/validate** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/physicalinterfaces** (1 change)

* Response 408 was added

**/api/v2/quality/conversations/audits/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/quality/conversations/audits/query/{transactionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/quality/conversations/audits/query/{transactionId}/results** (2 changes)

* Path was added
* Operation GET was added

**GET /api/v2/oauth/clients/{clientId}/usage/query/results/{executionId}** (1 change)

* Response 408 was added

**GET /api/v2/outbound/contactlists** (1 change)

* Response 408 was added

**POST /api/v2/outbound/contactlists** (1 change)

* Response 408 was added

**DELETE /api/v2/outbound/contactlists** (1 change)

* Response 408 was added

**POST /api/v2/webchat/guest/conversations** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/divisionviews** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/organizations** (1 change)

* Response 408 was added

**POST /api/v2/externalcontacts/organizations** (1 change)

* Response 408 was added

**/api/v2/conversations/messaging/threadingtimeline** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor/{trustorId}** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/shifttrades/users** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/shifttrades/matched** (1 change)

* Response 408 was added

**GET /api/v2/quality/conversations/{conversationId}/audits** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/linebasesettings/{lineBaseId}** (1 change)

* Response 408 was added

**GET /api/v2/dataextensions/limits** (1 change)

* Response 408 was added

**GET /api/v2/routing/queues/divisionviews/all** (1 change)

* Response 408 was added

**GET /api/v2/outbound/attemptlimits** (1 change)

* Response 408 was added

**POST /api/v2/outbound/attemptlimits** (1 change)

* Response 408 was added

**GET /api/v2/conversations** (1 change)

* Response 408 was added

**GET /api/v2/architect/prompts/{promptId}/history/{historyId}** (1 change)

* Response 408 was added

**POST /api/v2/architect/prompts/{promptId}/history** (1 change)

* Response 408 was added

**GET /api/v2/architect/prompts/{promptId}** (1 change)

* Response 408 was added

**PUT /api/v2/architect/prompts/{promptId}** (1 change)

* Response 408 was added

**DELETE /api/v2/architect/prompts/{promptId}** (1 change)

* Response 408 was added

**GET /api/v2/architect/dependencytracking/types** (1 change)

* Response 408 was added

**GET /api/v2/speechandtextanalytics/topics/publishjobs/{jobId}** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId}** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId}/shifttrades** (1 change)

* Response 408 was added

**GET /api/v2/integrations/userapps** (1 change)

* Response 408 was added

**GET /api/v2/integrations/speech/tts/engines/{engineId}/voices** (1 change)

* Response 408 was added

**GET /api/v2/quality/forms/surveys/{formId}/versions** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/notifications** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/notifications/update** (1 change)

* Response 408 was added

**GET /api/v2/recording/recordingkeys/rotationschedule** (1 change)

* Response 408 was added

**PUT /api/v2/recording/recordingkeys/rotationschedule** (1 change)

* Response 408 was added

**GET /api/v2/outbound/callabletimesets** (1 change)

* Response 408 was added

**POST /api/v2/outbound/callabletimesets** (1 change)

* Response 408 was added

**GET /api/v2/chat/settings** (1 change)

* Response 408 was added

**PUT /api/v2/chat/settings** (1 change)

* Response 408 was added

**PATCH /api/v2/chat/settings** (1 change)

* Response 408 was added

**GET /api/v2/outbound/dnclists** (1 change)

* Response 408 was added

**POST /api/v2/outbound/dnclists** (1 change)

* Response 408 was added

**/api/v2/routing/assessments/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**GET /api/v2/telephony/providers/edges/extensions/{extensionId}** (1 change)

* Response 408 was added

**PUT /api/v2/telephony/providers/edges/extensions/{extensionId}** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/phones** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/managementunits** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/managementunits** (1 change)

* Response 408 was added

**GET /api/v2/authorization/divisions** (1 change)

* Response 408 was added

**POST /api/v2/authorization/divisions** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/phones/{phoneId}/reboot** (1 change)

* Response 408 was added

**GET /api/v2/outbound/attemptlimits/{attemptLimitsId}** (1 change)

* Response 408 was added

**PUT /api/v2/outbound/attemptlimits/{attemptLimitsId}** (1 change)

* Response 408 was added

**DELETE /api/v2/outbound/attemptlimits/{attemptLimitsId}** (1 change)

* Response 408 was added

**GET /api/v2/analytics/reporting/reportformats** (1 change)

* Response 408 was added

**GET /api/v2/authorization/divisions/home** (1 change)

* Response 408 was added

**/api/v2/conversations/messaging/integrations/open** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**GET /api/v2/telephony/siptraces/download/{downloadId}** (1 change)

* Response 408 was added

**GET /api/v2/telephony/siptraces** (1 change)

* Response 408 was added

**POST /api/v2/telephony/siptraces/download** (1 change)

* Response 408 was added

**GET /api/v2/billing/reports/billableusage** (1 change)

* Response 408 was added

**GET /api/v2/languages** (1 change)

* Response 408 was added

**POST /api/v2/languages** (1 change)

* Response 408 was added

**GET /api/v2/routing/message/recipients/{recipientId}** (1 change)

* Response 408 was added

**PUT /api/v2/routing/message/recipients/{recipientId}** (1 change)

* Response 408 was added

**GET /api/v2/oauth/clients** (1 change)

* Response 408 was added

**POST /api/v2/oauth/clients** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/relationships/{relationshipId}** (1 change)

* Response 408 was added

**PUT /api/v2/externalcontacts/relationships/{relationshipId}** (1 change)

* Response 408 was added

**DELETE /api/v2/externalcontacts/relationships/{relationshipId}** (1 change)

* Response 408 was added

**GET /api/v2/users/search** (1 change)

* Response 408 was added

**POST /api/v2/users/search** (1 change)

* Response 408 was added

**GET /api/v2/outbound/schedules/campaigns** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/outboundroutes** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/outboundroutes** (1 change)

* Response 408 was added

**GET /api/v2/coaching/appointments/{appointmentId}/annotations** (1 change)

* Response 408 was added

**POST /api/v2/coaching/appointments/{appointmentId}/annotations** (1 change)

* Response 408 was added

**GET /api/v2/gamification/metrics** (1 change)

* Response 408 was added

**POST /api/v2/gamification/metrics** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/timezones** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}** (1 change)

* Response 408 was added

**PUT /api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}** (1 change)

* Response 408 was added

**DELETE /api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}** (1 change)

* Response 408 was added

**GET /api/v2/integrations/actions/categories** (1 change)

* Response 408 was added

**/api/v2/speechandtextanalytics/programs/{programId}/mappings** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**GET /api/v2/authorization/subjects/{subjectId}** (1 change)

* Response 408 was added

**POST /api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId}** (1 change)

* Response 408 was added

**DELETE /api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId}** (1 change)

* Response 408 was added

**POST /api/v2/authorization/subjects/{subjectId}/bulkremove** (1 change)

* Response 408 was added

**POST /api/v2/authorization/subjects/{subjectId}/bulkadd** (1 change)

* Response 408 was added

**POST /api/v2/authorization/subjects/{subjectId}/bulkreplace** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/sites/{siteId}/rebalance** (1 change)

* Response 408 was added

**POST /api/v2/orgauthorization/trustees/audits** (1 change)

* Response 408 was added

**POST /api/v2/textbots/bots/execute** (1 change)

* Response 408 was added

**GET /api/v2/license/users/{userId}** (1 change)

* Response 408 was added

**GET /api/v2/outbound/dnclists/divisionviews/{dncListId}** (1 change)

* Response 408 was added

**GET /api/v2/groups/search** (1 change)

* Response 408 was added

**POST /api/v2/groups/search** (1 change)

* Response 408 was added

**GET /api/v2/scripts/uploads/{uploadId}/status** (1 change)

* Response 408 was added

**GET /api/v2/conversations/{conversationId}/recordings** (1 change)

* Response 408 was added

**GET /api/v2/usage/query/{executionId}/results** (1 change)

* Response 408 was added

**GET /api/v2/flows/datatables/{datatableId}** (1 change)

* Response 408 was added

**PUT /api/v2/flows/datatables/{datatableId}** (1 change)

* Response 408 was added

**DELETE /api/v2/flows/datatables/{datatableId}** (1 change)

* Response 408 was added

**POST /api/v2/outbound/conversations/{conversationId}/dnc** (1 change)

* Response 408 was added

**POST /api/v2/analytics/reporting/schedules/{scheduleId}/runreport** (1 change)

* Response 408 was added

**GET /api/v2/routing/users/{userId}/utilization** (1 change)

* Response 408 was added

**PUT /api/v2/routing/users/{userId}/utilization** (1 change)

* Response 408 was added

**DELETE /api/v2/routing/users/{userId}/utilization** (1 change)

* Response 408 was added

**GET /api/v2/quality/forms/evaluations** (1 change)

* Response 408 was added

**POST /api/v2/quality/forms/evaluations** (1 change)

* Response 408 was added

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}** (1 change)

* Response 408 was added

**DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}** (1 change)

* Response 408 was added

**PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}** (1 change)

* Response 408 was added

**GET /api/v2/languageunderstanding/domains/{domainId}/feedback** (1 change)

* Response 408 was added

**POST /api/v2/languageunderstanding/domains/{domainId}/feedback** (1 change)

* Response 408 was added

**GET /api/v2/identityproviders/ping** (1 change)

* Response 408 was added

**PUT /api/v2/identityproviders/ping** (1 change)

* Response 408 was added

**DELETE /api/v2/identityproviders/ping** (1 change)

* Response 408 was added

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}** (1 change)

* Response 408 was added

**DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}** (1 change)

* Response 408 was added

**PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/contacts/schemas** (1 change)

* Response 408 was added

**POST /api/v2/externalcontacts/contacts/schemas** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/agentschedules/search** (1 change)

* Response 408 was added

**GET /api/v2/gamification/templates/{templateId}** (1 change)

* Response 408 was added

**GET /api/v2/languageunderstanding/domains/{domainId}/feedback/{feedbackId}** (1 change)

* Response 408 was added

**DELETE /api/v2/languageunderstanding/domains/{domainId}/feedback/{feedbackId}** (1 change)

* Response 408 was added

**GET /api/v2/conversations/messages/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Response 408 was added

**GET /api/v2/conversations/messages** (1 change)

* Response 408 was added

**POST /api/v2/conversations/messages** (1 change)

* Response 408 was added

**POST /api/v2/conversations/messages/{conversationId}/messages/bulk** (1 change)

* Response 408 was added

**POST /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/messages/{conversationId}/participants/{participantId}/attributes** (1 change)

* Response 408 was added

**GET /api/v2/conversations/messages/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Response 408 was added

**GET /api/v2/conversations/messages/{conversationId}** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/messages/{conversationId}** (1 change)

* Response 408 was added

**POST /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media** (1 change)

* Response 408 was added

**GET /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media/{mediaId}** (1 change)

* Response 408 was added

**POST /api/v2/conversations/messages/agentless** (1 change)

* Response 408 was added

**/api/v2/conversations/messages/inbound/open** (2 changes)

* Path was added
* Operation POST was added

**PATCH /api/v2/conversations/messages/{conversationId}/participants/{participantId}** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/messages/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Response 408 was added

**POST /api/v2/conversations/messages/{conversationId}/participants/{participantId}/replace** (1 change)

* Response 408 was added

**GET /api/v2/conversations/messages/{conversationId}/messages/{messageId}** (1 change)

* Response 408 was added

**GET /api/v2/coaching/appointments/me** (1 change)

* Response 408 was added

**GET /api/v2/notifications/channels/{channelId}/subscriptions** (1 change)

* Response 408 was added

**POST /api/v2/notifications/channels/{channelId}/subscriptions** (1 change)

* Response 408 was added

**PUT /api/v2/notifications/channels/{channelId}/subscriptions** (1 change)

* Response 408 was added

**DELETE /api/v2/notifications/channels/{channelId}/subscriptions** (1 change)

* Response 408 was added

**GET /api/v2/conversations/{conversationId}/recordings/{recordingId}** (1 change)

* Response 408 was added

**PUT /api/v2/conversations/{conversationId}/recordings/{recordingId}** (1 change)

* Response 408 was added

**GET /api/v2/coaching/notifications/{notificationId}** (1 change)

* Response 408 was added

**PATCH /api/v2/coaching/notifications/{notificationId}** (1 change)

* Response 408 was added

**GET /api/v2/analytics/reporting/{reportId}/metadata** (1 change)

* Response 408 was added

**GET /api/v2/speechandtextanalytics/programs/general/jobs/{jobId}** (1 change)

* Response 408 was added

**GET /api/v2/voicemail/queues/{queueId}/messages** (1 change)

* Response 408 was added

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents** (1 change)

* Response 408 was added

**POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents** (1 change)

* Response 408 was added

**PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/adherence/historical** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/extensionpools** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/extensionpools** (1 change)

* Response 408 was added

**GET /api/v2/analytics/reporting/schedules/{scheduleId}/history/{runId}** (1 change)

* Response 408 was added

**GET /api/v2/outbound/campaigns/all** (1 change)

* Response 408 was added

**GET /api/v2/dataextensions/coretypes/{coretypeName}** (1 change)

* Response 408 was added

**POST /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}/typing** (1 change)

* Response 408 was added

**POST /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}/messages** (1 change)

* Response 408 was added

**GET /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}** (1 change)

* Response 408 was added

**DELETE /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}** (1 change)

* Response 408 was added

**GET /api/v2/speechandtextanalytics/programs** (1 change)

* Response 408 was added

**POST /api/v2/speechandtextanalytics/programs** (1 change)

* Response 408 was added

**GET /api/v2/gamification/profiles** (1 change)

* Response 408 was added

**GET /api/v2/integrations/eventlog** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId}** (1 change)

* Response 408 was added

**DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId}** (1 change)

* Response 408 was added

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId}** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/didpools** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/didpools** (1 change)

* Response 408 was added

**GET /api/v2/quality/publishedforms/surveys** (1 change)

* Response 408 was added

**POST /api/v2/quality/publishedforms/surveys** (1 change)

* Response 408 was added

**GET /api/v2/identityproviders/purecloud** (1 change)

* Response 408 was added

**PUT /api/v2/identityproviders/purecloud** (1 change)

* Response 408 was added

**DELETE /api/v2/identityproviders/purecloud** (1 change)

* Response 408 was added

**GET /api/v2/quality/calibrations/{calibrationId}** (1 change)

* Response 408 was added

**PUT /api/v2/quality/calibrations/{calibrationId}** (1 change)

* Response 408 was added

**DELETE /api/v2/quality/calibrations/{calibrationId}** (1 change)

* Response 408 was added

**/api/v2/routing/queues/{queueId}/comparisonperiods/{comparisonPeriodId}** (2 changes)

* Path was added
* Operation GET was added

**GET /api/v2/outbound/schedules/sequences/{sequenceId}** (1 change)

* Response 408 was added

**PUT /api/v2/outbound/schedules/sequences/{sequenceId}** (1 change)

* Response 408 was added

**DELETE /api/v2/outbound/schedules/sequences/{sequenceId}** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/dids/{didId}** (1 change)

* Response 408 was added

**PUT /api/v2/telephony/providers/edges/dids/{didId}** (1 change)

* Response 408 was added

**GET /api/v2/journey/actiontargets/{actionTargetId}** (1 change)

* Response 408 was added

**PATCH /api/v2/journey/actiontargets/{actionTargetId}** (1 change)

* Response 408 was added

**GET /api/v2/voicemail/messages** (1 change)

* Response 408 was added

**POST /api/v2/voicemail/messages** (1 change)

* Response 408 was added

**DELETE /api/v2/voicemail/messages** (1 change)

* Response 408 was added

**GET /api/v2/recording/mediaretentionpolicies** (1 change)

* Response 408 was added

**POST /api/v2/recording/mediaretentionpolicies** (1 change)

* Response 408 was added

**DELETE /api/v2/recording/mediaretentionpolicies** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/agentschedules/mine** (1 change)

* Response 408 was added

**GET /api/v2/authorization/divisions/limit** (1 change)

* Response 408 was added

**GET /api/v2/scripts/published** (1 change)

* Response 408 was added

**GET /api/v2/integrations/speech/tts/engines** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/trunks/{trunkId}** (1 change)

* Response 408 was added

**GET /api/v2/recording/jobs** (1 change)

* Response 408 was added

**POST /api/v2/recording/jobs** (1 change)

* Response 408 was added

**POST /api/v2/contentmanagement/auditquery** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/phonebasesettings** (1 change)

* Response 408 was added

**GET /api/v2/userrecordings** (1 change)

* Response 408 was added

**GET /api/v2/outbound/dnclists/divisionviews** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/lines** (1 change)

* Response 408 was added

**POST /api/v2/speechandtextanalytics/transcripts/search** (1 change)

* Response 408 was added

**GET /api/v2/gamification/status** (1 change)

* Response 408 was added

**PUT /api/v2/gamification/status** (1 change)

* Response 408 was added

**GET /api/v2/outbound/callanalysisresponsesets** (1 change)

* Response 408 was added

**POST /api/v2/outbound/callanalysisresponsesets** (1 change)

* Response 408 was added

**GET /api/v2/flows/outcomes/{flowOutcomeId}** (1 change)

* Response 408 was added

**PUT /api/v2/flows/outcomes/{flowOutcomeId}** (1 change)

* Response 408 was added

**GET /api/v2/date** (1 change)

* Response 408 was added

**GET /api/v2/integrations/{integrationId}/config/current** (1 change)

* Response 408 was added

**PUT /api/v2/integrations/{integrationId}/config/current** (1 change)

* Response 408 was added

**GET /api/v2/conversations/messaging/integrations** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/scan/notes** (1 change)

* Response 408 was added

**GET /api/v2/flows/outcomes/divisionviews** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/organizations/schemas/{schemaId}/versions/{versionId}** (1 change)

* Response 408 was added

**GET /api/v2/routing/queues/{queueId}/mediatypes/{mediaType}/estimatedwaittime** (1 change)

* Response 408 was added

**GET /api/v2/integrations/speech/tts/settings** (1 change)

* Response 408 was added

**PUT /api/v2/integrations/speech/tts/settings** (1 change)

* Response 408 was added

**GET /api/v2/webchat/deployments/{deploymentId}** (1 change)

* Response 408 was added

**PUT /api/v2/webchat/deployments/{deploymentId}** (1 change)

* Response 408 was added

**DELETE /api/v2/webchat/deployments/{deploymentId}** (1 change)

* Response 408 was added

**POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/search** (1 change)

* Response 408 was added

**/api/v2/externalcontacts/bulk/notes** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/bulk/notes/update** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/bulk/notes/add** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/bulk/notes/remove** (2 changes)

* Path was added
* Operation POST was added

**GET /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}** (1 change)

* Response 408 was added

**DELETE /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}** (1 change)

* Response 408 was added

**GET /api/v2/webchat/guest/conversations/{conversationId}/mediarequests/{mediaRequestId}** (1 change)

* Response 408 was added

**PATCH /api/v2/webchat/guest/conversations/{conversationId}/mediarequests/{mediaRequestId}** (1 change)

* Response 408 was added

**PATCH /api/v2/organizations/features/{featureName}** (1 change)

* Response 408 was added

**GET /api/v2/ipranges** (1 change)

* Response 408 was added

**GET /api/v2/architect/prompts** (1 change)

* Response 408 was added

**POST /api/v2/architect/prompts** (1 change)

* Response 408 was added

**DELETE /api/v2/architect/prompts** (1 change)

* Response 408 was added

**GET /api/v2/gamification/templates** (1 change)

* Response 408 was added

**GET /api/v2/outbound/dnclists/{dncListId}** (1 change)

* Response 408 was added

**PUT /api/v2/outbound/dnclists/{dncListId}** (1 change)

* Response 408 was added

**DELETE /api/v2/outbound/dnclists/{dncListId}** (1 change)

* Response 408 was added

**GET /api/v2/userrecordings/summary** (1 change)

* Response 408 was added

**GET /api/v2/identityproviders** (1 change)

* Response 408 was added

**GET /api/v2/oauth/authorizations** (1 change)

* Response 408 was added

**GET /api/v2/orphanrecordings** (1 change)

* Response 408 was added

**GET /api/v2/alerting/interactionstats/alerts/{alertId}** (1 change)

* Response 408 was added

**PUT /api/v2/alerting/interactionstats/alerts/{alertId}** (1 change)

* Response 408 was added

**DELETE /api/v2/alerting/interactionstats/alerts/{alertId}** (1 change)

* Response 408 was added

**GET /api/v2/documentation/gkn/search** (1 change)

* Response 408 was added

**POST /api/v2/documentation/gkn/search** (1 change)

* Response 408 was added

**GET /api/v2/speechandtextanalytics/programs/unpublished** (1 change)

* Response 408 was added

**GET /api/v2/integrations/actions** (1 change)

* Response 408 was added

**POST /api/v2/integrations/actions** (1 change)

* Response 408 was added

**GET /api/v2/routing/languages** (1 change)

* Response 408 was added

**POST /api/v2/routing/languages** (1 change)

* Response 408 was added

**GET /api/v2/journey/segments/{segmentId}** (1 change)

* Response 408 was added

**DELETE /api/v2/journey/segments/{segmentId}** (1 change)

* Response 408 was added

**PATCH /api/v2/journey/segments/{segmentId}** (1 change)

* Response 408 was added

**GET /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}** (1 change)

* Response 408 was added

**PUT /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}** (1 change)

* Response 408 was added

**DELETE /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}** (1 change)

* Response 408 was added

**GET /api/v2/authorization/roles/{roleId}/users** (1 change)

* Response 408 was added

**PUT /api/v2/authorization/roles/{roleId}/users/add** (1 change)

* Response 408 was added

**PUT /api/v2/authorization/roles/{roleId}/users/remove** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/contacts/schemas/{schemaId}/versions/{versionId}** (1 change)

* Response 408 was added

**GET /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/attributes** (1 change)

* Response 408 was added

**GET /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Response 408 was added

**GET /api/v2/conversations/callbacks** (1 change)

* Response 408 was added

**POST /api/v2/conversations/callbacks** (1 change)

* Response 408 was added

**GET /api/v2/conversations/callbacks/{conversationId}** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/callbacks/{conversationId}** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Response 408 was added

**POST /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/replace** (1 change)

* Response 408 was added

**GET /api/v2/quality/forms/{formId}** (1 change)

* Response 408 was added

**PUT /api/v2/quality/forms/{formId}** (1 change)

* Response 408 was added

**DELETE /api/v2/quality/forms/{formId}** (1 change)

* Response 408 was added

**GET /api/v2/authorization/subjects/rolecounts** (1 change)

* Response 408 was added

**GET /api/v2/architect/systemprompts/{promptId}/resources/{languageCode}** (1 change)

* Response 408 was added

**PUT /api/v2/architect/systemprompts/{promptId}/resources/{languageCode}** (1 change)

* Response 408 was added

**DELETE /api/v2/architect/systemprompts/{promptId}/resources/{languageCode}** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/trunks/metrics** (1 change)

* Response 408 was added

**GET /api/v2/webchat/guest/conversations/{conversationId}/messages/{messageId}** (1 change)

* Response 408 was added

**GET /api/v2/scripts/{scriptId}/pages/{pageId}** (1 change)

* Response 408 was added

**GET /api/v2/conversations/messaging/integrations/twitter** (1 change)

* Response 408 was added

**POST /api/v2/conversations/messaging/integrations/twitter** (1 change)

* Response 408 was added

**GET /api/v2/gamification/metricdefinitions/{metricDefinitionId}** (1 change)

* Response 408 was added

**POST /api/v2/recordings/deletionprotection** (1 change)

* Response 408 was added

**PUT /api/v2/recordings/deletionprotection** (1 change)

* Response 408 was added

**GET /api/v2/languageunderstanding/domains/{domainId}/versions** (1 change)

* Response 408 was added

**POST /api/v2/languageunderstanding/domains/{domainId}/versions** (1 change)

* Response 408 was added

**GET /api/v2/routing/sms/addresses/{addressId}** (1 change)

* Response 408 was added

**DELETE /api/v2/routing/sms/addresses/{addressId}** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/shifttrades** (1 change)

* Response 408 was added

**GET /api/v2/outbound/contactlists/divisionviews/{contactListId}** (1 change)

* Response 408 was added

**GET /api/v2/journey/outcomes/{outcomeId}** (1 change)

* Response 408 was added

**DELETE /api/v2/journey/outcomes/{outcomeId}** (1 change)

* Response 408 was added

**PATCH /api/v2/journey/outcomes/{outcomeId}** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges** (1 change)

* Response 408 was added

**GET /api/v2/voicemail/messages/{messageId}** (1 change)

* Response 408 was added

**PUT /api/v2/voicemail/messages/{messageId}** (1 change)

* Response 408 was added

**DELETE /api/v2/voicemail/messages/{messageId}** (1 change)

* Response 408 was added

**PATCH /api/v2/voicemail/messages/{messageId}** (1 change)

* Response 408 was added

**GET /api/v2/voicemail/messages/{messageId}/media** (1 change)

* Response 408 was added

**GET /api/v2/speechandtextanalytics/topics/general** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/{edgeId}/setuppackage** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/{edgeId}/reboot** (1 change)

* Response 408 was added

**GET /api/v2/contentmanagement/workspaces/{workspaceId}/members** (1 change)

* Response 408 was added

**GET /api/v2/outbound/rulesets** (1 change)

* Response 408 was added

**POST /api/v2/outbound/rulesets** (1 change)

* Response 408 was added

**GET /api/v2/identityproviders/identitynow** (1 change)

* Response 408 was added

**PUT /api/v2/identityproviders/identitynow** (1 change)

* Response 408 was added

**DELETE /api/v2/identityproviders/identitynow** (1 change)

* Response 408 was added

**GET /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations** (1 change)

* Response 408 was added

**POST /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations** (1 change)

* Response 408 was added

**GET /api/v2/conversations/messaging/integrations/whatsapp/{integrationId}** (1 change)

* Response 408 was added

**DELETE /api/v2/conversations/messaging/integrations/whatsapp/{integrationId}** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/messaging/integrations/whatsapp/{integrationId}** (1 change)

* Response 408 was added

**GET /api/v2/quality/forms** (1 change)

* Response 408 was added

**POST /api/v2/quality/forms** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/trunks/{trunkId}/metrics** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/phones/reboot** (1 change)

* Response 408 was added

**GET /api/v2/authorization/subjects/me** (1 change)

* Response 408 was added

**GET /api/v2/scripts/published/{scriptId}/pages/{pageId}** (1 change)

* Response 408 was added

**GET /api/v2/webchat/guest/conversations/{conversationId}/mediarequests** (1 change)

* Response 408 was added

**PATCH /api/v2/users/{userId}/queues/{queueId}** (1 change)

* Response 408 was added

**/api/v2/speechandtextanalytics/programs/mappings** (2 changes)

* Path was added
* Operation GET was added

**GET /api/v2/quality/agents/activity** (1 change)

* Response 408 was added

**GET /api/v2/integrations/types/{typeId}/configschemas/{configType}** (1 change)

* Response 408 was added

**GET /api/v2/speechandtextanalytics/conversations/{conversationId}** (1 change)

* Response 408 was added

**PATCH /api/v2/users/{userId}/routinglanguages/bulk** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/routinglanguages** (1 change)

* Response 408 was added

**POST /api/v2/users/{userId}/routinglanguages** (1 change)

* Response 408 was added

**DELETE /api/v2/users/{userId}/routinglanguages/{languageId}** (1 change)

* Response 408 was added

**PATCH /api/v2/users/{userId}/routinglanguages/{languageId}** (1 change)

* Response 408 was added

**GET /api/v2/flows/datatables/{datatableId}/rows** (1 change)

* Response 408 was added

**POST /api/v2/flows/datatables/{datatableId}/rows** (1 change)

* Response 408 was added

**GET /api/v2/orgauthorization/trustors** (1 change)

* Response 408 was added

**GET /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Response 408 was added

**GET /api/v2/conversations/chats** (1 change)

* Response 408 was added

**POST /api/v2/conversations/chats** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}/attributes** (1 change)

* Response 408 was added

**GET /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Response 408 was added

**GET /api/v2/conversations/chats/{conversationId}** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/chats/{conversationId}** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Response 408 was added

**POST /api/v2/conversations/chats/{conversationId}/participants/{participantId}/replace** (1 change)

* Response 408 was added

**GET /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}** (1 change)

* Response 408 was added

**PUT /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}** (1 change)

* Response 408 was added

**DELETE /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}** (1 change)

* Response 408 was added

**GET /api/v2/conversations/messaging/integrations/line/{integrationId}** (1 change)

* Response 408 was added

**PUT /api/v2/conversations/messaging/integrations/line/{integrationId}** (1 change)

* Response 408 was added

**DELETE /api/v2/conversations/messaging/integrations/line/{integrationId}** (1 change)

* Response 408 was added

**GET /api/v2/integrations/credentials/{credentialId}** (1 change)

* Response 408 was added

**PUT /api/v2/integrations/credentials/{credentialId}** (1 change)

* Response 408 was added

**DELETE /api/v2/integrations/credentials/{credentialId}** (1 change)

* Response 408 was added

**GET /api/v2/speechandtextanalytics/programs/publishjobs/{jobId}** (1 change)

* Response 408 was added

**GET /api/v2/flows/datatables/{datatableId}/import/jobs/{importJobId}** (1 change)

* Response 408 was added

**GET /api/v2/routing/sms/phonenumbers/{addressId}** (1 change)

* Response 408 was added

**PUT /api/v2/routing/sms/phonenumbers/{addressId}** (1 change)

* Response 408 was added

**DELETE /api/v2/routing/sms/phonenumbers/{addressId}** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}** (1 change)

* Response 408 was added

**PUT /api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}** (1 change)

* Response 408 was added

**DELETE /api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}** (1 change)

* Response 408 was added

**GET /api/v2/responsemanagement/libraries** (1 change)

* Response 408 was added

**POST /api/v2/responsemanagement/libraries** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}** (1 change)

* Response 408 was added

**DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}** (1 change)

* Response 408 was added

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}/copy** (1 change)

* Response 408 was added

**GET /api/v2/quality/evaluators/activity** (1 change)

* Response 408 was added

**GET /api/v2/architect/dependencytracking/consumedresources** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/lines/template** (1 change)

* Response 408 was added

**GET /api/v2/speechandtextanalytics/conversations/{conversationId}/communications/{communicationId}/transcripturl** (1 change)

* Response 408 was added

**GET /api/v2/identityproviders/adfs** (1 change)

* Response 408 was added

**PUT /api/v2/identityproviders/adfs** (1 change)

* Response 408 was added

**DELETE /api/v2/identityproviders/adfs** (1 change)

* Response 408 was added

**GET /api/v2/recording/localkeys/settings** (1 change)

* Response 408 was added

**POST /api/v2/recording/localkeys/settings** (1 change)

* Response 408 was added

**GET /api/v2/outbound/callabletimesets/{callableTimeSetId}** (1 change)

* Response 408 was added

**PUT /api/v2/outbound/callabletimesets/{callableTimeSetId}** (1 change)

* Response 408 was added

**DELETE /api/v2/outbound/callabletimesets/{callableTimeSetId}** (1 change)

* Response 408 was added

**POST /api/v2/externalcontacts/relationships** (1 change)

* Response 408 was added

**GET /api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Response 408 was added

**GET /api/v2/conversations/emails** (1 change)

* Response 408 was added

**POST /api/v2/conversations/emails** (1 change)

* Response 408 was added

**GET /api/v2/conversations/emails/{conversationId}/messages** (1 change)

* Response 408 was added

**POST /api/v2/conversations/emails/{conversationId}/messages** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/emails/{conversationId}/participants/{participantId}/attributes** (1 change)

* Response 408 was added

**GET /api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Response 408 was added

**GET /api/v2/conversations/emails/{conversationId}** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/emails/{conversationId}** (1 change)

* Response 408 was added

**DELETE /api/v2/conversations/emails/{conversationId}/messages/draft/attachments/{attachmentId}** (1 change)

* Response 408 was added

**POST /api/v2/conversations/emails/{conversationId}/messages/draft/attachments/copy** (1 change)

* Response 408 was added

**GET /api/v2/conversations/emails/{conversationId}/messages/draft** (1 change)

* Response 408 was added

**PUT /api/v2/conversations/emails/{conversationId}/messages/draft** (1 change)

* Response 408 was added

**POST /api/v2/conversations/emails/{conversationId}/inboundmessages** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/emails/{conversationId}/participants/{participantId}** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/emails/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Response 408 was added

**POST /api/v2/conversations/emails/{conversationId}/participants/{participantId}/replace** (1 change)

* Response 408 was added

**GET /api/v2/conversations/emails/{conversationId}/messages/{messageId}** (1 change)

* Response 408 was added

**GET /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues** (1 change)

* Response 408 was added

**POST /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues** (1 change)

* Response 408 was added

**POST /api/v2/analytics/evaluations/aggregates/query** (1 change)

* Response 408 was added

**GET /api/v2/identityproviders/salesforce** (1 change)

* Response 408 was added

**PUT /api/v2/identityproviders/salesforce** (1 change)

* Response 408 was added

**DELETE /api/v2/identityproviders/salesforce** (1 change)

* Response 408 was added

**GET /api/v2/outbound/sequences/{sequenceId}** (1 change)

* Response 408 was added

**PUT /api/v2/outbound/sequences/{sequenceId}** (1 change)

* Response 408 was added

**DELETE /api/v2/outbound/sequences/{sequenceId}** (1 change)

* Response 408 was added

**GET /api/v2/routing/queues/divisionviews** (1 change)

* Response 408 was added

**GET /api/v2/architect/ivrs/{ivrId}** (1 change)

* Response 408 was added

**PUT /api/v2/architect/ivrs/{ivrId}** (1 change)

* Response 408 was added

**DELETE /api/v2/architect/ivrs/{ivrId}** (1 change)

* Response 408 was added

**GET /api/v2/contentmanagement/documents/{documentId}/audits** (1 change)

* Response 408 was added

**GET /api/v2/organizations/me** (1 change)

* Response 408 was added

**PUT /api/v2/organizations/me** (1 change)

* Response 408 was added

**GET /api/v2/integrations/speech/dialogflow/agents** (1 change)

* Response 408 was added

**GET /api/v2/journey/segments** (1 change)

* Response 408 was added

**POST /api/v2/journey/segments** (1 change)

* Response 408 was added

**POST /api/v2/outbound/audits** (1 change)

* Response 408 was added

**GET /api/v2/recording/settings** (1 change)

* Response 408 was added

**PUT /api/v2/recording/settings** (1 change)

* Response 408 was added

**GET /api/v2/voicemail/groups/{groupId}/policy** (1 change)

* Response 408 was added

**PATCH /api/v2/voicemail/groups/{groupId}/policy** (1 change)

* Response 408 was added

**GET /api/v2/authorization/divisions/{divisionId}** (1 change)

* Response 408 was added

**PUT /api/v2/authorization/divisions/{divisionId}** (1 change)

* Response 408 was added

**DELETE /api/v2/authorization/divisions/{divisionId}** (1 change)

* Response 408 was added

**POST /api/v2/authorization/divisions/{divisionId}/objects/{objectType}** (1 change)

* Response 408 was added

**GET /api/v2/scim/groups** (1 change)

* Response 408 was added

**GET /api/v2/scim/groups/{groupId}** (1 change)

* Response 408 was added

**PUT /api/v2/scim/groups/{groupId}** (1 change)

* Response 408 was added

**PATCH /api/v2/scim/groups/{groupId}** (1 change)

* Response 408 was added

**GET /api/v2/oauth/scopes** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}** (1 change)

* Response 408 was added

**PUT /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}** (1 change)

* Response 408 was added

**DELETE /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/edgeversionreport** (1 change)

* Response 408 was added

**GET /api/v2/gdpr/requests** (1 change)

* Response 408 was added

**POST /api/v2/gdpr/requests** (1 change)

* Response 408 was added

**GET /api/v2/routing/skills/{skillId}** (1 change)

* Response 408 was added

**DELETE /api/v2/routing/skills/{skillId}** (1 change)

* Response 408 was added

**GET /api/v2/integrations/actions/{actionId}** (1 change)

* Response 408 was added

**DELETE /api/v2/integrations/actions/{actionId}** (1 change)

* Response 408 was added

**PATCH /api/v2/integrations/actions/{actionId}** (1 change)

* Response 408 was added

**POST /api/v2/integrations/actions/{actionId}/test** (1 change)

* Response 408 was added

**GET /api/v2/integrations/actions/{actionId}/schemas/{fileName}** (1 change)

* Response 408 was added

**GET /api/v2/integrations/actions/{actionId}/templates/{fileName}** (1 change)

* Response 408 was added

**POST /api/v2/integrations/actions/{actionId}/execute** (1 change)

* Response 408 was added

**GET /api/v2/flows/{flowId}/versions** (1 change)

* Response 408 was added

**POST /api/v2/flows/{flowId}/versions** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}** (1 change)

* Response 408 was added

**DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}** (1 change)

* Response 408 was added

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}/result** (1 change)

* Response 408 was added

**GET /api/v2/locations/search** (1 change)

* Response 408 was added

**POST /api/v2/locations/search** (1 change)

* Response 408 was added

**GET /api/v2/speechandtextanalytics/topics** (1 change)

* Response 408 was added

**POST /api/v2/speechandtextanalytics/topics** (1 change)

* Response 408 was added

**GET /api/v2/outbound/campaigns/{campaignId}/interactions** (1 change)

* Response 408 was added

**POST /api/v2/orgauthorization/trustor/audits** (1 change)

* Response 408 was added

**GET /api/v2/routing/email/setup** (1 change)

* Response 408 was added

**GET /api/v2/scripts/{scriptId}** (1 change)

* Response 408 was added

**GET /api/v2/integrations/types** (1 change)

* Response 408 was added

**GET /api/v2/identityproviders/onelogin** (1 change)

* Response 408 was added

**PUT /api/v2/identityproviders/onelogin** (1 change)

* Response 408 was added

**DELETE /api/v2/identityproviders/onelogin** (1 change)

* Response 408 was added

**GET /api/v2/conversations/messaging/integrations/line** (1 change)

* Response 408 was added

**POST /api/v2/conversations/messaging/integrations/line** (1 change)

* Response 408 was added

**GET /api/v2/architect/dependencytracking/object** (1 change)

* Response 408 was added

**POST /api/v2/quality/conversations/{conversationId}/evaluations** (1 change)

* Response 408 was added

**GET /api/v2/organizations/embeddedintegration** (1 change)

* Response 408 was added

**PUT /api/v2/organizations/embeddedintegration** (1 change)

* Response 408 was added

**GET /api/v2/orgauthorization/trustors/{trustorOrgId}** (1 change)

* Response 408 was added

**DELETE /api/v2/orgauthorization/trustors/{trustorOrgId}** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/reversewhitepageslookup** (1 change)

* Response 408 was added

**GET /api/v2/routing/queues** (1 change)

* Response 408 was added

**POST /api/v2/routing/queues** (1 change)

* Response 408 was added

**/api/v2/externalcontacts/bulk/relationships/add** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/bulk/relationships/remove** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/bulk/relationships** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/bulk/relationships/update** (2 changes)

* Path was added
* Operation POST was added

**GET /api/v2/outbound/dnclists/{dncListId}/export** (1 change)

* Response 408 was added

**POST /api/v2/outbound/dnclists/{dncListId}/export** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces** (1 change)

* Response 408 was added

**GET /api/v2/profiles/groups** (1 change)

* Response 408 was added

**DELETE /api/v2/routing/queues/{queueId}/members/{memberId}** (1 change)

* Response 408 was added

**PATCH /api/v2/routing/queues/{queueId}/members/{memberId}** (1 change)

* Response 408 was added

**GET /api/v2/integrations/speech/tts/engines/{engineId}/voices/{voiceId}** (1 change)

* Response 408 was added

**POST /api/v2/flows/actions/publish** (1 change)

* Response 408 was added

**POST /api/v2/flows/actions/checkin** (1 change)

* Response 408 was added

**POST /api/v2/flows/actions/checkout** (1 change)

* Response 408 was added

**POST /api/v2/flows/actions/deactivate** (1 change)

* Response 408 was added

**POST /api/v2/flows/actions/revert** (1 change)

* Response 408 was added

**POST /api/v2/flows/actions/unlock** (1 change)

* Response 408 was added

**GET /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles** (1 change)

* Response 408 was added

**PUT /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles** (1 change)

* Response 408 was added

**DELETE /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/greetings/defaults** (1 change)

* Response 408 was added

**PUT /api/v2/users/{userId}/greetings/defaults** (1 change)

* Response 408 was added

**GET /api/v2/quality/publishedforms** (1 change)

* Response 408 was added

**POST /api/v2/quality/publishedforms** (1 change)

* Response 408 was added

**GET /api/v2/learning/modules/{moduleId}/rule** (1 change)

* Response 408 was added

**PUT /api/v2/learning/modules/{moduleId}/rule** (1 change)

* Response 408 was added

**GET /api/v2/routing/settings/transcription** (1 change)

* Response 408 was added

**PUT /api/v2/routing/settings/transcription** (1 change)

* Response 408 was added

**GET /api/v2/routing/settings/contactcenter** (1 change)

* Response 408 was added

**PATCH /api/v2/routing/settings/contactcenter** (1 change)

* Response 408 was added

**GET /api/v2/routing/settings** (1 change)

* Response 408 was added

**PUT /api/v2/routing/settings** (1 change)

* Response 408 was added

**DELETE /api/v2/routing/settings** (1 change)

* Response 408 was added

**GET /api/v2/integrations/types/{typeId}** (1 change)

* Response 408 was added

**POST /api/v2/outbound/contactlists/{contactListId}/contacts/bulk** (1 change)

* Response 408 was added

**GET /api/v2/voicemail/mailbox** (1 change)

* Response 408 was added

**GET /api/v2/voicemail/me/mailbox** (1 change)

* Response 408 was added

**GET /api/v2/voicemail/groups/{groupId}/mailbox** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/metrics** (1 change)

* Response 408 was added

**GET /api/v2/widgets/deployments/{deploymentId}** (1 change)

* Response 408 was added

**PUT /api/v2/widgets/deployments/{deploymentId}** (1 change)

* Response 408 was added

**DELETE /api/v2/widgets/deployments/{deploymentId}** (1 change)

* Response 408 was added

**GET /api/v2/gamification/scorecards/users/{userId}/bestpoints** (1 change)

* Response 408 was added

**GET /api/v2/gamification/scorecards/users/{userId}** (1 change)

* Response 408 was added

**GET /api/v2/gamification/scorecards/users/{userId}/attendance** (1 change)

* Response 408 was added

**GET /api/v2/gamification/scorecards/users/{userId}/points/trends** (1 change)

* Response 408 was added

**GET /api/v2/gamification/scorecards/users/{userId}/points/alltime** (1 change)

* Response 408 was added

**GET /api/v2/gamification/scorecards/users/{userId}/values/trends** (1 change)

* Response 408 was added

**GET /api/v2/gamification/scorecards/users/points/average** (1 change)

* Response 408 was added

**GET /api/v2/gamification/scorecards/users/values/average** (1 change)

* Response 408 was added

**GET /api/v2/gamification/scorecards/users/values/trends** (1 change)

* Response 408 was added

**GET /api/v2/identityproviders/okta** (1 change)

* Response 408 was added

**PUT /api/v2/identityproviders/okta** (1 change)

* Response 408 was added

**DELETE /api/v2/identityproviders/okta** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/trunks** (1 change)

* Response 408 was added

**POST /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/publish** (1 change)

* Response 408 was added

**GET /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/report** (1 change)

* Response 408 was added

**POST /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/train** (1 change)

* Response 408 was added

**POST /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/detect** (1 change)

* Response 408 was added

**GET /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}** (1 change)

* Response 408 was added

**PUT /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}** (1 change)

* Response 408 was added

**DELETE /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/outofoffice** (1 change)

* Response 408 was added

**PUT /api/v2/users/{userId}/outofoffice** (1 change)

* Response 408 was added

**GET /api/v2/flows/datatables/{datatableId}/export/jobs/{exportJobId}** (1 change)

* Response 408 was added

**GET /api/v2/fax/documents/{documentId}/content** (1 change)

* Response 408 was added

**POST /api/v2/uploads/publicassets/images** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}** (1 change)

* Response 408 was added

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories** (1 change)

* Response 408 was added

**POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories** (1 change)

* Response 408 was added

**GET /api/v2/contentmanagement/usage** (1 change)

* Response 408 was added

**GET /api/v2/voicemail/me/policy** (1 change)

* Response 408 was added

**PATCH /api/v2/voicemail/me/policy** (1 change)

* Response 408 was added

**GET /api/v2/responsemanagement/responses** (1 change)

* Response 408 was added

**POST /api/v2/responsemanagement/responses** (1 change)

* Response 408 was added

**PATCH /api/v2/routing/conversations/{conversationId}** (1 change)

* Response 408 was added

**GET /api/v2/conversations/{conversationId}/recordingmetadata/{recordingId}** (1 change)

* Response 408 was added

**GET /api/v2/users/me** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/managementunits** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}** (1 change)

* Response 408 was added

**DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}** (1 change)

* Response 408 was added

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}** (1 change)

* Response 408 was added

**GET /api/v2/voicemail/me/messages** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/generationresults** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/generate** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}** (1 change)

* Response 408 was added

**DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/planninggroups** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/data** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/copy** (1 change)

* Response 408 was added

**GET /api/v2/languages/{languageId}** (1 change)

* Response 408 was added

**DELETE /api/v2/languages/{languageId}** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}** (1 change)

* Response 408 was added

**PUT /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}** (1 change)

* Response 408 was added

**DELETE /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}** (1 change)

* Response 408 was added

**GET /api/v2/outbound/sequences** (1 change)

* Response 408 was added

**POST /api/v2/outbound/sequences** (1 change)

* Response 408 was added

**GET /api/v2/analytics/reporting/exports** (1 change)

* Response 408 was added

**POST /api/v2/analytics/reporting/exports** (1 change)

* Response 408 was added

**GET /api/v2/contentmanagement/query** (1 change)

* Response 408 was added

**POST /api/v2/contentmanagement/query** (1 change)

* Response 408 was added

**GET /api/v2/architect/prompts/{promptId}/resources** (1 change)

* Response 408 was added

**POST /api/v2/architect/prompts/{promptId}/resources** (1 change)

* Response 408 was added

**GET /api/v2/architect/dependencytracking/consumingresources** (1 change)

* Response 408 was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/move** (1 change)

* Response 408 was added

**GET /api/v2/alerting/interactionstats/alerts** (1 change)

* Response 408 was added

**POST /api/v2/orgauthorization/pairings** (1 change)

* Response 408 was added

**GET /api/v2/journey/actiontemplates/{actionTemplateId}** (1 change)

* Response 408 was added

**DELETE /api/v2/journey/actiontemplates/{actionTemplateId}** (1 change)

* Response 408 was added

**PATCH /api/v2/journey/actiontemplates/{actionTemplateId}** (1 change)

* Response 408 was added

**/api/v2/routing/predictors/{predictorId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**GET /api/v2/telephony/providers/edges/availablelanguages** (1 change)

* Response 408 was added

**GET /api/v2/integrations/speech/dialogflow/agents/{agentId}** (1 change)

* Response 408 was added

**GET /api/v2/voicemail/search** (1 change)

* Response 408 was added

**POST /api/v2/voicemail/search** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/routingstatus** (1 change)

* Response 408 was added

**PUT /api/v2/users/{userId}/routingstatus** (1 change)

* Response 408 was added

**GET /api/v2/architect/prompts/{promptId}/resources/{languageCode}** (1 change)

* Response 408 was added

**PUT /api/v2/architect/prompts/{promptId}/resources/{languageCode}** (1 change)

* Response 408 was added

**DELETE /api/v2/architect/prompts/{promptId}/resources/{languageCode}** (1 change)

* Response 408 was added

**DELETE /api/v2/architect/prompts/{promptId}/resources/{languageCode}/audio** (1 change)

* Response 408 was added

**GET /api/v2/authorization/roles/{roleId}** (1 change)

* Response 408 was added

**POST /api/v2/authorization/roles/{roleId}** (1 change)

* Response 408 was added

**PUT /api/v2/authorization/roles/{roleId}** (1 change)

* Response 408 was added

**DELETE /api/v2/authorization/roles/{roleId}** (1 change)

* Response 408 was added

**PATCH /api/v2/authorization/roles/{roleId}** (1 change)

* Response 408 was added

**GET /api/v2/languages/translations** (1 change)

* Response 408 was added

**GET /api/v2/languages/translations/builtin** (1 change)

* Response 408 was added

**GET /api/v2/languages/translations/organization** (1 change)

* Response 408 was added

**GET /api/v2/languages/translations/users/{userId}** (1 change)

* Response 408 was added

**/api/v2/routing/predictors/keyperformanceindicators** (2 changes)

* Path was added
* Operation GET was added

**GET /api/v2/telephony/providers/edges/sites/{siteId}/numberplans/{numberPlanId}** (1 change)

* Response 408 was added

**GET /api/v2/orgauthorization/trustees/{trusteeOrgId}** (1 change)

* Response 408 was added

**PUT /api/v2/orgauthorization/trustees/{trusteeOrgId}** (1 change)

* Response 408 was added

**DELETE /api/v2/orgauthorization/trustees/{trusteeOrgId}** (1 change)

* Response 408 was added

**POST /api/v2/conversations/faxes** (1 change)

* Response 408 was added

**GET /api/v2/recording/crossplatform/mediaretentionpolicies/{policyId}** (1 change)

* Response 408 was added

**PUT /api/v2/recording/crossplatform/mediaretentionpolicies/{policyId}** (1 change)

* Response 408 was added

**DELETE /api/v2/recording/crossplatform/mediaretentionpolicies/{policyId}** (1 change)

* Response 408 was added

**PATCH /api/v2/recording/crossplatform/mediaretentionpolicies/{policyId}** (1 change)

* Response 408 was added

**GET /api/v2/organizations/limits/changerequests** (1 change)

* Response 408 was added

**POST /api/v2/analytics/bots/aggregates/query** (1 change)

* Response 408 was added

**GET /api/v2/routing/skills** (1 change)

* Response 408 was added

**POST /api/v2/routing/skills** (1 change)

* Response 408 was added

**DELETE /api/v2/conversations/{conversationId}/participants/{participantId}/codes/{addCommunicationCode}** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/trunkswithrecording** (1 change)

* Response 408 was added

**GET /api/v2/learning/modules/{moduleId}** (1 change)

* Response 408 was added

**PUT /api/v2/learning/modules/{moduleId}** (1 change)

* Response 408 was added

**DELETE /api/v2/learning/modules/{moduleId}** (1 change)

* Response 408 was added

**GET /api/v2/learning/modules/{moduleId}/versions/{versionId}** (1 change)

* Response 408 was added

**GET /api/v2/learning/modules** (1 change)

* Response 408 was added

**POST /api/v2/learning/modules** (1 change)

* Response 408 was added

**POST /api/v2/learning/modules/{moduleId}/publish** (1 change)

* Response 408 was added

**GET /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}** (1 change)

* Response 408 was added

**PUT /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}** (1 change)

* Response 408 was added

**DELETE /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}** (1 change)

* Response 408 was added

**GET /api/v2/architect/dependencytracking/deletedresourceconsumers** (1 change)

* Response 408 was added

**DELETE /api/v2/routing/queues/{queueId}/users/{memberId}** (1 change)

* Response 408 was added

**PATCH /api/v2/routing/queues/{queueId}/users/{memberId}** (1 change)

* Response 408 was added

**GET /api/v2/journey/actiontargets** (1 change)

* Response 408 was added

**GET /api/v2/architect/dependencytracking** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/historicaladherencequery** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes/{activityCodeId}** (1 change)

* Response 408 was added

**DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes/{activityCodeId}** (1 change)

* Response 408 was added

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes/{activityCodeId}** (1 change)

* Response 408 was added

**GET /api/v2/greetings/defaults** (1 change)

* Response 408 was added

**PUT /api/v2/greetings/defaults** (1 change)

* Response 408 was added

**POST /api/v2/analytics/journeys/aggregates/query** (1 change)

* Response 408 was added

**GET /api/v2/gamification/metricdefinitions** (1 change)

* Response 408 was added

**GET /api/v2/outbound/settings** (1 change)

* Response 408 was added

**PATCH /api/v2/outbound/settings** (1 change)

* Response 408 was added

**GET /api/v2/authorization/roles** (1 change)

* Response 408 was added

**POST /api/v2/authorization/roles** (1 change)

* Response 408 was added

**GET /api/v2/flows/milestones** (1 change)

* Response 408 was added

**POST /api/v2/flows/milestones** (1 change)

* Response 408 was added

**GET /api/v2/webchat/settings** (1 change)

* Response 408 was added

**PUT /api/v2/webchat/settings** (1 change)

* Response 408 was added

**DELETE /api/v2/webchat/settings** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/{edgeId}/trunks** (1 change)

* Response 408 was added

**GET /api/v2/systempresences** (1 change)

* Response 408 was added

**GET /api/v2/gdpr/subjects** (1 change)

* Response 408 was added

**GET /api/v2/routing/queues/{queueId}/members** (1 change)

* Response 408 was added

**POST /api/v2/routing/queues/{queueId}/members** (1 change)

* Response 408 was added

**PATCH /api/v2/routing/queues/{queueId}/members** (1 change)

* Response 408 was added

**GET /api/v2/integrations/speech/lex/bot/alias/{aliasId}** (1 change)

* Response 408 was added

**GET /api/v2/routing/sms/addresses** (1 change)

* Response 408 was added

**POST /api/v2/routing/sms/addresses** (1 change)

* Response 408 was added

**GET /api/v2/orphanrecordings/{orphanId}/media** (1 change)

* Response 408 was added

**GET /api/v2/contentmanagement/shares/{shareId}** (1 change)

* Response 408 was added

**DELETE /api/v2/contentmanagement/shares/{shareId}** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/scan/relationships** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/phonebasesettings/template** (1 change)

* Response 408 was added

**GET /api/v2/architect/systemprompts/{promptId}** (1 change)

* Response 408 was added

**POST /api/v2/architect/systemprompts/{promptId}/history** (1 change)

* Response 408 was added

**GET /api/v2/architect/systemprompts/{promptId}/history/{historyId}** (1 change)

* Response 408 was added

**GET /api/v2/authorization/divisionspermitted/paged/{subjectId}** (1 change)

* Response 408 was added

**GET /api/v2/recording/localkeys/settings/{settingsId}** (1 change)

* Response 408 was added

**PUT /api/v2/recording/localkeys/settings/{settingsId}** (1 change)

* Response 408 was added

**GET /api/v2/coaching/appointments** (1 change)

* Response 408 was added

**POST /api/v2/coaching/appointments** (1 change)

* Response 408 was added

**GET /api/v2/learning/assignments/{assignmentId}** (1 change)

* Response 408 was added

**DELETE /api/v2/learning/assignments/{assignmentId}** (1 change)

* Response 408 was added

**PATCH /api/v2/learning/assignments/{assignmentId}** (1 change)

* Response 408 was added

**GET /api/v2/learning/assignments** (1 change)

* Response 408 was added

**POST /api/v2/learning/assignments** (1 change)

* Response 408 was added

**GET /api/v2/learning/assignments/me** (1 change)

* Response 408 was added

**POST /api/v2/learning/assignments/bulkadd** (1 change)

* Response 408 was added

**POST /api/v2/learning/assignments/bulkremove** (2 changes)

* Response 200 was added
* Response 408 was added

**GET /api/v2/flows/datatables/{datatableId}/rows/{rowId}** (1 change)

* Response 408 was added

**PUT /api/v2/flows/datatables/{datatableId}/rows/{rowId}** (1 change)

* Response 408 was added

**DELETE /api/v2/flows/datatables/{datatableId}/rows/{rowId}** (1 change)

* Response 408 was added

**GET /api/v2/outbound/contactlists/{contactListId}/importstatus** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/trustors** (1 change)

* Response 408 was added

**GET /api/v2/outbound/contactlistfilters** (1 change)

* Response 408 was added

**POST /api/v2/outbound/contactlistfilters** (1 change)

* Response 408 was added

**/api/v2/routing/assessments/{assessmentId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**GET /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}** (1 change)

* Response 408 was added

**PUT /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}** (1 change)

* Response 408 was added

**DELETE /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}** (1 change)

* Response 408 was added

**GET /api/v2/mobiledevices/{deviceId}** (1 change)

* Response 408 was added

**PUT /api/v2/mobiledevices/{deviceId}** (1 change)

* Response 408 was added

**DELETE /api/v2/mobiledevices/{deviceId}** (1 change)

* Response 408 was added

**GET /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}** (1 change)

* Response 408 was added

**PUT /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}** (1 change)

* Response 408 was added

**DELETE /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}** (1 change)

* Response 408 was added

**GET /api/v2/conversations/chats/{conversationId}/messages** (1 change)

* Response 408 was added

**GET /api/v2/integrations/credentials** (1 change)

* Response 408 was added

**POST /api/v2/integrations/credentials** (1 change)

* Response 408 was added

**GET /api/v2/contentmanagement/status** (1 change)

* Response 408 was added

**GET /api/v2/scripts/published/{scriptId}/variables** (1 change)

* Response 408 was added

**GET /api/v2/flows/datatables/{datatableId}/import/jobs** (1 change)

* Response 408 was added

**POST /api/v2/flows/datatables/{datatableId}/import/jobs** (1 change)

* Response 408 was added

**GET /api/v2/journey/actionmaps** (1 change)

* Response 408 was added

**POST /api/v2/journey/actionmaps** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/logicalinterfaces** (1 change)

* Response 408 was added

**GET /api/v2/fax/documents** (1 change)

* Response 408 was added

**POST /api/v2/conversations/chats/{conversationId}/communications/{communicationId}/typing** (1 change)

* Response 408 was added

**POST /api/v2/conversations/chats/{conversationId}/communications/{communicationId}/messages** (1 change)

* Response 408 was added

**GET /api/v2/outbound/messagingcampaigns/divisionviews** (1 change)

* Response 408 was added

**/api/v2/routing/assessments/jobs** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**GET /api/v2/scripts** (1 change)

* Response 408 was added

**POST /api/v2/speechandtextanalytics/programs/publishjobs** (1 change)

* Response 408 was added

**POST /api/v2/flows/datatables/{datatableId}/export/jobs** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/profile** (1 change)

* Response 408 was added

**GET /api/v2/routing/queues/{queueId}/wrapupcodes** (1 change)

* Response 408 was added

**POST /api/v2/routing/queues/{queueId}/wrapupcodes** (1 change)

* Response 408 was added

**DELETE /api/v2/routing/queues/{queueId}/wrapupcodes/{codeId}** (1 change)

* Response 408 was added

**GET /api/v2/outbound/schedules/campaigns/{campaignId}** (1 change)

* Response 408 was added

**PUT /api/v2/outbound/schedules/campaigns/{campaignId}** (1 change)

* Response 408 was added

**DELETE /api/v2/outbound/schedules/campaigns/{campaignId}** (1 change)

* Response 408 was added

**GET /api/v2/license/definitions/{licenseId}** (1 change)

* Response 408 was added

**POST /api/v2/responsemanagement/responses/query** (1 change)

* Response 408 was added

**GET /api/v2/oauth/scopes/{scopeId}** (1 change)

* Response 408 was added

**DELETE /api/v2/tokens/{userId}** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/sites/{siteId}/numberplans** (1 change)

* Response 408 was added

**PUT /api/v2/telephony/providers/edges/sites/{siteId}/numberplans** (1 change)

* Response 408 was added

**GET /api/v2/quality/forms/surveys/{formId}** (1 change)

* Response 408 was added

**PUT /api/v2/quality/forms/surveys/{formId}** (1 change)

* Response 408 was added

**DELETE /api/v2/quality/forms/surveys/{formId}** (1 change)

* Response 408 was added

**PATCH /api/v2/quality/forms/surveys/{formId}** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/scan/organizations** (1 change)

* Response 408 was added

**GET /api/v2/greetings/{greetingId}** (1 change)

* Response 408 was added

**PUT /api/v2/greetings/{greetingId}** (1 change)

* Response 408 was added

**DELETE /api/v2/greetings/{greetingId}** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/{edgeId}/metrics** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/{edgeId}/diagnostic/ping** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/{edgeId}/diagnostic/ping** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/{edgeId}/diagnostic/tracepath** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/{edgeId}/diagnostic/tracepath** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/{edgeId}/diagnostic/nslookup** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/{edgeId}/diagnostic/nslookup** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/{edgeId}/diagnostic/route** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/{edgeId}/diagnostic/route** (1 change)

* Response 408 was added

**GET /api/v2/speechandtextanalytics/settings** (1 change)

* Response 408 was added

**/api/v2/speechandtextanalytics/settings** (1 change)

* Operation put was added. Summary: Update Speech And Text Analytics Settings

**PATCH /api/v2/speechandtextanalytics/settings** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/profileskills** (1 change)

* Response 408 was added

**PUT /api/v2/users/{userId}/profileskills** (1 change)

* Response 408 was added

**GET /api/v2/outbound/campaigns/divisionviews** (1 change)

* Response 408 was added

**GET /api/v2/outbound/rulesets/{ruleSetId}** (1 change)

* Response 408 was added

**PUT /api/v2/outbound/rulesets/{ruleSetId}** (1 change)

* Response 408 was added

**DELETE /api/v2/outbound/rulesets/{ruleSetId}** (1 change)

* Response 408 was added

**/api/v2/learning/assignments/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**GET /api/v2/architect/dependencytracking/build** (1 change)

* Response 408 was added

**POST /api/v2/architect/dependencytracking/build** (1 change)

* Response 408 was added

**GET /api/v2/gamification/metrics/{metricId}** (1 change)

* Response 408 was added

**PUT /api/v2/gamification/metrics/{metricId}** (1 change)

* Response 408 was added

**/api/v2/routing/assessments** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**PUT /api/v2/telephony/providers/edges/phones/{phoneId}** (1 change)

* Response 408 was added

**DELETE /api/v2/telephony/providers/edges/phones/{phoneId}** (1 change)

* Response 408 was added

**GET /api/v2/architect/ivrs** (1 change)

* Response 408 was added

**POST /api/v2/architect/ivrs** (1 change)

* Response 408 was added

**GET /api/v2/groups/{groupId}/individuals** (1 change)

* Response 408 was added

**GET /api/v2/scim/v2/schemas** (1 change)

* Response 408 was added

**GET /api/v2/scim/v2/schemas/{schemaId}** (1 change)

* Response 408 was added

**PUT /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roledivisions** (1 change)

* Response 408 was added

**GET /api/v2/users** (1 change)

* Response 408 was added

**POST /api/v2/users** (1 change)

* Response 408 was added

**GET /api/v2/quality/forms/{formId}/versions** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/{edgeId}/unpair** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/contacts/schemas/{schemaId}/versions** (1 change)

* Response 408 was added

**PUT /api/v2/users/presences/bulk** (1 change)

* Response 408 was added

**GET /api/v2/oauth/authorizations/{clientId}** (1 change)

* Response 408 was added

**GET /api/v2/contentmanagement/documents/{documentId}** (1 change)

* Response 408 was added

**POST /api/v2/contentmanagement/documents/{documentId}** (1 change)

* Response 408 was added

**DELETE /api/v2/contentmanagement/documents/{documentId}** (1 change)

* Response 408 was added

**PUT /api/v2/outbound/campaigns/{campaignId}/agents/{userId}** (1 change)

* Response 408 was added

**GET /api/v2/outbound/campaigns** (1 change)

* Response 408 was added

**POST /api/v2/outbound/campaigns** (1 change)

* Response 408 was added

**GET /api/v2/geolocations/settings** (1 change)

* Response 408 was added

**PATCH /api/v2/geolocations/settings** (1 change)

* Response 408 was added

**POST /api/v2/quality/surveys/scoring** (1 change)

* Response 408 was added

**GET /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}** (1 change)

* Response 408 was added

**POST /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}** (1 change)

* Response 408 was added

**GET /api/v2/knowledge/knowledgebases** (1 change)

* Response 408 was added

**POST /api/v2/knowledge/knowledgebases** (1 change)

* Response 408 was added

**GET /api/v2/recording/batchrequests/{jobId}** (1 change)

* Response 408 was added

**POST /api/v2/recording/batchrequests** (1 change)

* Response 408 was added

**GET /api/v2/license/definitions** (1 change)

* Response 408 was added

**GET /api/v2/scim/v2/serviceproviderconfig** (1 change)

* Response 408 was added

**GET /api/v2/flows** (1 change)

* Response 408 was added

**POST /api/v2/flows** (1 change)

* Response 408 was added

**DELETE /api/v2/flows** (1 change)

* Response 408 was added

**GET /api/v2/scim/resourcetypes/{resourceType}** (1 change)

* Response 408 was added

**GET /api/v2/scim/resourcetypes** (1 change)

* Response 408 was added

**GET /api/v2/speechandtextanalytics/topics/{topicId}** (1 change)

* Response 408 was added

**PUT /api/v2/speechandtextanalytics/topics/{topicId}** (1 change)

* Response 408 was added

**DELETE /api/v2/speechandtextanalytics/topics/{topicId}** (1 change)

* Response 408 was added

**GET /api/v2/gamification/scorecards** (1 change)

* Response 408 was added

**GET /api/v2/gamification/scorecards/bestpoints** (1 change)

* Response 408 was added

**GET /api/v2/gamification/scorecards/attendance** (1 change)

* Response 408 was added

**GET /api/v2/gamification/scorecards/points/alltime** (1 change)

* Response 408 was added

**GET /api/v2/gamification/scorecards/points/average** (1 change)

* Response 408 was added

**GET /api/v2/gamification/scorecards/points/trends** (1 change)

* Response 408 was added

**GET /api/v2/gamification/scorecards/values/trends** (1 change)

* Response 408 was added

**GET /api/v2/gamification/scorecards/values/average** (1 change)

* Response 408 was added

**POST /api/v2/outbound/dnclists/{dncListId}/phonenumbers** (1 change)

* Response 408 was added

**GET /api/v2/organizations/whitelist** (1 change)

* Response 408 was added

**PUT /api/v2/organizations/whitelist** (1 change)

* Response 408 was added

**GET /api/v2/routing/email/domains/{domainName}/routes/{routeId}** (1 change)

* Response 408 was added

**PUT /api/v2/routing/email/domains/{domainName}/routes/{routeId}** (1 change)

* Response 408 was added

**DELETE /api/v2/routing/email/domains/{domainName}/routes/{routeId}** (1 change)

* Response 408 was added

**GET /api/v2/routing/queues/me** (1 change)

* Response 408 was added

**POST /api/v2/coaching/scheduleslots/query** (1 change)

* Response 408 was added

**GET /api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}** (1 change)

* Response 408 was added

**GET /api/v2/configuration/schemas/edges/vnext/{schemaCategory}** (1 change)

* Response 408 was added

**GET /api/v2/routing/sms/phonenumbers** (1 change)

* Response 408 was added

**POST /api/v2/routing/sms/phonenumbers** (1 change)

* Response 408 was added

**POST /api/v2/users/me/password** (1 change)

* Response 408 was added

**GET /api/v2/routing/languages/{languageId}** (1 change)

* Response 408 was added

**DELETE /api/v2/routing/languages/{languageId}** (1 change)

* Response 408 was added

**GET /api/v2/presencedefinitions/{presenceId}** (1 change)

* Response 408 was added

**PUT /api/v2/presencedefinitions/{presenceId}** (1 change)

* Response 408 was added

**DELETE /api/v2/presencedefinitions/{presenceId}** (1 change)

* Response 408 was added

**GET /api/v2/routing/email/domains** (1 change)

* Response 408 was added

**POST /api/v2/routing/email/domains** (1 change)

* Response 408 was added

**GET /api/v2/outbound/messagingcampaigns/{messagingCampaignId}/progress** (1 change)

* Response 408 was added

**GET /api/v2/outbound/messagingcampaigns/{messagingCampaignId}** (1 change)

* Response 408 was added

**PUT /api/v2/outbound/messagingcampaigns/{messagingCampaignId}** (1 change)

* Response 408 was added

**DELETE /api/v2/outbound/messagingcampaigns/{messagingCampaignId}** (1 change)

* Response 408 was added

**GET /api/v2/oauth/clients/{clientId}/usage/summary** (1 change)

* Response 408 was added

**POST /api/v2/oauth/clients/{clientId}/usage/query** (1 change)

* Response 408 was added

**GET /api/v2/groups/{groupId}/greetings** (1 change)

* Response 408 was added

**POST /api/v2/groups/{groupId}/greetings** (1 change)

* Response 408 was added

**GET /api/v2/scim/serviceproviderconfig** (1 change)

* Response 408 was added

**GET /api/v2/authorization/permissions** (1 change)

* Response 408 was added

**GET /api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions/{secureSessionId}** (1 change)

* Response 408 was added

**GET /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}** (1 change)

* Response 408 was added

**PUT /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}** (1 change)

* Response 408 was added

**DELETE /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}** (1 change)

* Response 408 was added

**GET /api/v2/analytics/reporting/schedules** (1 change)

* Response 408 was added

**POST /api/v2/analytics/reporting/schedules** (1 change)

* Response 408 was added

**GET /api/v2/scim/schemas** (1 change)

* Response 408 was added

**GET /api/v2/scim/schemas/{schemaId}** (1 change)

* Response 408 was added

**GET /api/v2/integrations/{integrationId}** (1 change)

* Response 408 was added

**DELETE /api/v2/integrations/{integrationId}** (1 change)

* Response 408 was added

**PATCH /api/v2/integrations/{integrationId}** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/greetings** (1 change)

* Response 408 was added

**POST /api/v2/users/{userId}/greetings** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes** (1 change)

* Response 408 was added

**GET /api/v2/fax/summary** (1 change)

* Response 408 was added

**GET /api/v2/flows/executions/{flowExecutionId}** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/contacts** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/phones/template** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/agentschedules/search** (1 change)

* Response 408 was added

**GET /api/v2/quality/forms/evaluations/{formId}/versions** (1 change)

* Response 408 was added

**POST /api/v2/integrations/workforcemanagement/vendorconnection** (1 change)

* Response 408 was added

**GET /api/v2/recording/mediaretentionpolicies/{policyId}** (1 change)

* Response 408 was added

**PUT /api/v2/recording/mediaretentionpolicies/{policyId}** (1 change)

* Response 408 was added

**DELETE /api/v2/recording/mediaretentionpolicies/{policyId}** (1 change)

* Response 408 was added

**PATCH /api/v2/recording/mediaretentionpolicies/{policyId}** (1 change)

* Response 408 was added

**GET /api/v2/authorization/divisionspermitted/me** (1 change)

* Response 408 was added

**GET /api/v2/integrations/speech/tts/engines/{engineId}** (1 change)

* Response 408 was added

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId}** (1 change)

* Response 408 was added

**DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId}** (1 change)

* Response 408 was added

**PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId}** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/trunkbasesettings/availablemetabases** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/presences/purecloud** (1 change)

* Response 408 was added

**PATCH /api/v2/users/{userId}/presences/purecloud** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/presences/microsoftteams** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/presences/zoomphone** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/presences/{sourceId}** (1 change)

* Response 408 was added

**PATCH /api/v2/users/{userId}/presences/{sourceId}** (1 change)

* Response 408 was added

**GET /api/v2/conversations/{conversationId}** (1 change)

* Response 408 was added

**POST /api/v2/conversations/{conversationId}/disconnect** (1 change)

* Response 408 was added

**POST /api/v2/conversations/{conversationId}/assign** (1 change)

* Response 408 was added

**GET /api/v2/routing/sms/availablephonenumbers** (1 change)

* Response 408 was added

**GET /api/v2/locations/{locationId}/sublocations** (1 change)

* Response 408 was added

**GET /api/v2/locations/{locationId}** (1 change)

* Response 408 was added

**DELETE /api/v2/locations/{locationId}** (1 change)

* Response 408 was added

**PATCH /api/v2/locations/{locationId}** (1 change)

* Response 408 was added

**PUT /api/v2/users/{userId}/station/associatedstation/{stationId}** (1 change)

* Response 408 was added

**DELETE /api/v2/users/{userId}/station/associatedstation** (1 change)

* Response 408 was added

**PUT /api/v2/users/{userId}/station/defaultstation/{stationId}** (1 change)

* Response 408 was added

**DELETE /api/v2/users/{userId}/station/defaultstation** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/station** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/certificateauthorities** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/certificateauthorities** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/routingskills** (1 change)

* Response 408 was added

**POST /api/v2/users/{userId}/routingskills** (1 change)

* Response 408 was added

**PUT /api/v2/users/{userId}/routingskills/bulk** (1 change)

* Response 408 was added

**PATCH /api/v2/users/{userId}/routingskills/bulk** (1 change)

* Response 408 was added

**PUT /api/v2/users/{userId}/routingskills/{skillId}** (1 change)

* Response 408 was added

**DELETE /api/v2/users/{userId}/routingskills/{skillId}** (1 change)

* Response 408 was added

**GET /api/v2/orgauthorization/trustees/{trusteeOrgId}/users** (1 change)

* Response 408 was added

**POST /api/v2/orgauthorization/trustees/{trusteeOrgId}/users** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/sites/{siteId}** (1 change)

* Response 408 was added

**PUT /api/v2/telephony/providers/edges/sites/{siteId}** (1 change)

* Response 408 was added

**DELETE /api/v2/telephony/providers/edges/sites/{siteId}** (1 change)

* Response 408 was added

**GET /api/v2/greetings/{greetingId}/media** (1 change)

* Response 408 was added

**GET /api/v2/quality/publishedforms/surveys/{formId}** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/contacts/schemas/{schemaId}** (1 change)

* Response 408 was added

**PUT /api/v2/externalcontacts/contacts/schemas/{schemaId}** (1 change)

* Response 408 was added

**DELETE /api/v2/externalcontacts/contacts/schemas/{schemaId}** (1 change)

* Response 408 was added

**DELETE /api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/organizations/schemas/{schemaId}** (1 change)

* Response 408 was added

**PUT /api/v2/externalcontacts/organizations/schemas/{schemaId}** (1 change)

* Response 408 was added

**GET /api/v2/authorization/divisionspermitted/paged/me** (1 change)

* Response 408 was added

**POST /api/v2/learning/rules/query** (1 change)

* Response 408 was added

**POST /api/v2/usage/query** (1 change)

* Response 408 was added

**POST /api/v2/quality/evaluations/scoring** (1 change)

* Response 408 was added

**GET /api/v2/license/toggles/{featureName}** (1 change)

* Response 408 was added

**POST /api/v2/license/toggles/{featureName}** (1 change)

* Response 408 was added

**GET /api/v2/quality/forms/surveys** (1 change)

* Response 408 was added

**POST /api/v2/quality/forms/surveys** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/extensions** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/managementunits/divisionviews** (1 change)

* Response 408 was added

**GET /api/v2/architect/schedules/{scheduleId}** (1 change)

* Response 408 was added

**PUT /api/v2/architect/schedules/{scheduleId}** (1 change)

* Response 408 was added

**DELETE /api/v2/architect/schedules/{scheduleId}** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/adherence** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/schedules** (1 change)

* Response 408 was added

**GET /api/v2/architect/schedulegroups** (1 change)

* Response 408 was added

**POST /api/v2/architect/schedulegroups** (1 change)

* Response 408 was added

**GET /api/v2/groups** (1 change)

* Response 408 was added

**POST /api/v2/groups** (1 change)

* Response 408 was added

**/api/v2/conversations/messaging/integrations/open/{integrationId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**GET /api/v2/telephony/providers/edges/didpools/dids** (1 change)

* Response 408 was added

**GET /api/v2/quality/forms/evaluations/{formId}** (1 change)

* Response 408 was added

**PUT /api/v2/quality/forms/evaluations/{formId}** (1 change)

* Response 408 was added

**DELETE /api/v2/quality/forms/evaluations/{formId}** (1 change)

* Response 408 was added

**GET /api/v2/flows/{flowId}** (1 change)

* Response 408 was added

**PUT /api/v2/flows/{flowId}** (1 change)

* Response 408 was added

**DELETE /api/v2/flows/{flowId}** (1 change)

* Response 408 was added

**GET /api/v2/flows/{flowId}/latestconfiguration** (1 change)

* Response 408 was added

**/api/v2/flows/{flowId}/history** (2 changes)

* Path was added
* Operation POST was added

**GET /api/v2/flows/{flowId}/history/{historyId}** (1 change)

* Response 408 was added

**POST /api/v2/speechandtextanalytics/programs/general/jobs** (1 change)

* Response 408 was added

**POST /api/v2/externalcontacts/bulk/organizations/update** (1 change)

* Response 408 was added

**POST /api/v2/externalcontacts/bulk/organizations/add** (1 change)

* Response 408 was added

**POST /api/v2/externalcontacts/bulk/organizations/remove** (1 change)

* Response 408 was added

**POST /api/v2/externalcontacts/bulk/organizations** (1 change)

* Response 408 was added

**POST /api/v2/analytics/conversations/transcripts/query** (1 change)

* Response 408 was added

**GET /api/v2/dataextensions/coretypes** (1 change)

* Response 408 was added

**GET /api/v2/conversations/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Response 408 was added

**POST /api/v2/conversations/{conversationId}/participants/{participantId}/callbacks** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/{conversationId}/participants/{participantId}/attributes** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/{conversationId}/participants/{participantId}** (1 change)

* Response 408 was added

**GET /api/v2/conversations/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Response 408 was added

**PUT /api/v2/conversations/{conversationId}/participants/{participantId}/flaggedreason** (1 change)

* Response 408 was added

**DELETE /api/v2/conversations/{conversationId}/participants/{participantId}/flaggedreason** (1 change)

* Response 408 was added

**POST /api/v2/conversations/{conversationId}/participants/{participantId}/replace** (1 change)

* Response 408 was added

**POST /api/v2/conversations/{conversationId}/participants/{participantId}/digits** (1 change)

* Response 408 was added

**GET /api/v2/flows/milestones/divisionviews** (1 change)

* Response 408 was added

**GET /api/v2/integrations/actions/{actionId}/draft** (1 change)

* Response 408 was added

**POST /api/v2/integrations/actions/{actionId}/draft** (1 change)

* Response 408 was added

**DELETE /api/v2/integrations/actions/{actionId}/draft** (1 change)

* Response 408 was added

**PATCH /api/v2/integrations/actions/{actionId}/draft** (1 change)

* Response 408 was added

**GET /api/v2/integrations/actions/{actionId}/draft/schemas/{fileName}** (1 change)

* Response 408 was added

**GET /api/v2/integrations/actions/{actionId}/draft/templates/{fileName}** (1 change)

* Response 408 was added

**POST /api/v2/integrations/actions/{actionId}/draft/publish** (1 change)

* Response 408 was added

**GET /api/v2/integrations/actions/{actionId}/draft/validation** (1 change)

* Response 408 was added

**POST /api/v2/integrations/actions/{actionId}/draft/test** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/trunkbasesettings** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/trunkbasesettings** (1 change)

* Response 408 was added

**GET /api/v2/outbound/messagingcampaigns/divisionviews/{messagingCampaignId}** (1 change)

* Response 408 was added

**GET /api/v2/contentmanagement/shared/{sharedId}** (1 change)

* Response 408 was added

**POST /api/v2/recording/localkeys** (1 change)

* Response 408 was added

**POST /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/query** (1 change)

* Response 408 was added

**GET /api/v2/outbound/campaignrules** (1 change)

* Response 408 was added

**POST /api/v2/outbound/campaignrules** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}** (1 change)

* Response 408 was added

**GET /api/v2/recordings/screensessions** (1 change)

* Response 408 was added

**PATCH /api/v2/recordings/screensessions/{recordingSessionId}** (1 change)

* Response 408 was added

**/api/v2/recordings/screensessions/acknowledge** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/recordings/screensessions/metadata** (2 changes)

* Path was added
* Operation POST was added

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}** (1 change)

* Response 408 was added

**PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}** (1 change)

* Response 408 was added

**DELETE /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/{edgeId}/softwareversions** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}** (1 change)

* Response 408 was added

**PUT /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}** (1 change)

* Response 408 was added

**DELETE /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}** (1 change)

* Response 408 was added

**GET /api/v2/quality/publishedforms/{formId}** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/scan/contacts** (1 change)

* Response 408 was added

**GET /api/v2/integrations/actions/drafts** (1 change)

* Response 408 was added

**POST /api/v2/integrations/actions/drafts** (1 change)

* Response 408 was added

**GET /api/v2/contentmanagement/securityprofiles/{securityProfileId}** (1 change)

* Response 408 was added

**GET /api/v2/analytics/reporting/exports/metadata** (1 change)

* Response 408 was added

**POST /api/v2/outbound/contactlists/{contactListId}/clear** (1 change)

* Response 408 was added

**GET /api/v2/routing/wrapupcodes/{codeId}** (1 change)

* Response 408 was added

**PUT /api/v2/routing/wrapupcodes/{codeId}** (1 change)

* Response 408 was added

**DELETE /api/v2/routing/wrapupcodes/{codeId}** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/lines/{lineId}** (1 change)

* Response 408 was added

**POST /api/v2/speechandtextanalytics/topics/publishjobs** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/adherence** (1 change)

* Response 408 was added

**GET /api/v2/authorization/divisions/{divisionId}/grants** (1 change)

* Response 408 was added

**GET /api/v2/conversations/messaging/facebook/app** (1 change)

* Response 408 was added

**GET /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}** (1 change)

* Response 408 was added

**PUT /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}** (1 change)

* Response 408 was added

**DELETE /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces/{interfaceId}** (1 change)

* Response 408 was added

**GET /api/v2/routing/queues/{queueId}** (1 change)

* Response 408 was added

**PUT /api/v2/routing/queues/{queueId}** (1 change)

* Response 408 was added

**DELETE /api/v2/routing/queues/{queueId}** (1 change)

* Response 408 was added

**GET /api/v2/integrations/credentials/types** (1 change)

* Response 408 was added

**GET /api/v2/contentmanagement/shares** (1 change)

* Response 408 was added

**POST /api/v2/contentmanagement/shares** (1 change)

* Response 408 was added

**GET /api/v2/architect/emergencygroups/{emergencyGroupId}** (1 change)

* Response 408 was added

**PUT /api/v2/architect/emergencygroups/{emergencyGroupId}** (1 change)

* Response 408 was added

**DELETE /api/v2/architect/emergencygroups/{emergencyGroupId}** (1 change)

* Response 408 was added

**GET /api/v2/scripts/published/{scriptId}/pages** (1 change)

* Response 408 was added

**GET /api/v2/conversations/messaging/integrations/facebook/{integrationId}** (1 change)

* Response 408 was added

**DELETE /api/v2/conversations/messaging/integrations/facebook/{integrationId}** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/messaging/integrations/facebook/{integrationId}** (1 change)

* Response 408 was added

**POST /api/v2/uploads/recordings** (1 change)

* Response 408 was added

**GET /api/v2/orphanrecordings/{orphanId}** (1 change)

* Response 408 was added

**PUT /api/v2/orphanrecordings/{orphanId}** (1 change)

* Response 408 was added

**DELETE /api/v2/orphanrecordings/{orphanId}** (1 change)

* Response 408 was added

**GET /api/v2/conversations/{conversationId}/recordingmetadata** (1 change)

* Response 408 was added

**GET /api/v2/conversations/messaging/integrations/facebook** (1 change)

* Response 408 was added

**POST /api/v2/conversations/messaging/integrations/facebook** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}** (1 change)

* Response 408 was added

**PUT /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}** (1 change)

* Response 408 was added

**DELETE /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/search** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/state/bulk** (1 change)

* Response 408 was added

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId}** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId}/match** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/schedulingjobs/{jobId}** (1 change)

* Response 408 was added

**GET /api/v2/contentmanagement/documents/{documentId}/content** (1 change)

* Response 408 was added

**POST /api/v2/contentmanagement/documents/{documentId}/content** (1 change)

* Response 408 was added

**POST /api/v2/analytics/surveys/aggregates/query** (1 change)

* Response 408 was added

**GET /api/v2/voicemail/policy** (1 change)

* Response 408 was added

**PUT /api/v2/voicemail/policy** (1 change)

* Response 408 was added

**GET /api/v2/tokens/me** (1 change)

* Response 408 was added

**DELETE /api/v2/tokens/me** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/{edgeId}** (1 change)

* Response 408 was added

**PUT /api/v2/telephony/providers/edges/{edgeId}** (1 change)

* Response 408 was added

**DELETE /api/v2/telephony/providers/edges/{edgeId}** (1 change)

* Response 408 was added

**GET /api/v2/quality/publishedforms/evaluations/{formId}** (1 change)

* Response 408 was added

**/api/v2/routing/queues/{queueId}/comparisonperiods** (2 changes)

* Path was added
* Operation GET was added

**GET /api/v2/groups/{groupId}** (1 change)

* Response 408 was added

**PUT /api/v2/groups/{groupId}** (1 change)

* Response 408 was added

**DELETE /api/v2/groups/{groupId}** (1 change)

* Response 408 was added

**GET /api/v2/alerting/interactionstats/alerts/unread** (1 change)

* Response 408 was added

**GET /api/v2/journey/actionmaps/{actionMapId}** (1 change)

* Response 408 was added

**DELETE /api/v2/journey/actionmaps/{actionMapId}** (1 change)

* Response 408 was added

**PATCH /api/v2/journey/actionmaps/{actionMapId}** (1 change)

* Response 408 was added

**GET /api/v2/architect/schedulegroups/{scheduleGroupId}** (1 change)

* Response 408 was added

**PUT /api/v2/architect/schedulegroups/{scheduleGroupId}** (1 change)

* Response 408 was added

**DELETE /api/v2/architect/schedulegroups/{scheduleGroupId}** (1 change)

* Response 408 was added

**GET /api/v2/webchat/guest/conversations/{conversationId}/members** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/callforwarding** (1 change)

* Response 408 was added

**PUT /api/v2/users/{userId}/callforwarding** (1 change)

* Response 408 was added

**PATCH /api/v2/users/{userId}/callforwarding** (1 change)

* Response 408 was added

**GET /api/v2/conversations/messaging/stickers/{messengerType}** (1 change)

* Response 408 was added

**GET /api/v2/integrations/eventlog/{eventId}** (1 change)

* Response 408 was added

**GET /api/v2/quality/publishedforms/evaluations** (1 change)

* Response 408 was added

**POST /api/v2/quality/publishedforms/evaluations** (1 change)

* Response 408 was added

**GET /api/v2/mobiledevices** (1 change)

* Response 408 was added

**POST /api/v2/mobiledevices** (1 change)

* Response 408 was added

**GET /api/v2/architect/schedules** (1 change)

* Response 408 was added

**POST /api/v2/architect/schedules** (1 change)

* Response 408 was added

**GET /api/v2/orgauthorization/pairings/{pairingId}** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/organizations/schemas** (1 change)

* Response 408 was added

**POST /api/v2/externalcontacts/organizations/schemas** (1 change)

* Response 408 was added

**GET /api/v2/search** (1 change)

* Response 408 was added

**POST /api/v2/search** (1 change)

* Response 408 was added

**GET /api/v2/search/suggest** (1 change)

* Response 408 was added

**POST /api/v2/search/suggest** (1 change)

* Response 408 was added

**GET /api/v2/architect/systemprompts/{promptId}/resources** (1 change)

* Response 408 was added

**POST /api/v2/architect/systemprompts/{promptId}/resources** (1 change)

* Response 408 was added

**GET /api/v2/coaching/appointments/{appointmentId}/statuses** (1 change)

* Response 408 was added

**PATCH /api/v2/coaching/appointments/{appointmentId}/status** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/query** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId}** (1 change)

* Response 408 was added

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId}** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests** (1 change)

* Response 408 was added

**POST /api/v2/license/organization** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/favorites** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/adjacents** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/superiors** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/directreports** (1 change)

* Response 408 was added

**GET /api/v2/identityproviders/cic** (1 change)

* Response 408 was added

**PUT /api/v2/identityproviders/cic** (1 change)

* Response 408 was added

**DELETE /api/v2/identityproviders/cic** (1 change)

* Response 408 was added

**GET /api/v2/flows/divisionviews** (1 change)

* Response 408 was added

**GET /api/v2/externalcontacts/contacts** (1 change)

* Response 408 was added

**POST /api/v2/externalcontacts/contacts** (1 change)

* Response 408 was added

**GET /api/v2/scripts/{scriptId}/pages** (1 change)

* Response 408 was added

**/api/v2/workforcemanagement/agents/{agentId}/managementunit** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/agents/me/managementunit** (2 changes)

* Path was added
* Operation GET was added

**GET /api/v2/architect/dependencytracking/types/{typeId}** (1 change)

* Response 408 was added

**GET /api/v2/routing/message/recipients** (1 change)

* Response 408 was added

**GET /api/v2/notifications/channels** (1 change)

* Response 408 was added

**POST /api/v2/notifications/channels** (1 change)

* Response 408 was added

**GET /api/v2/recording/recordingkeys** (1 change)

* Response 408 was added

**POST /api/v2/recording/recordingkeys** (1 change)

* Response 408 was added

**POST /api/v2/externalcontacts/bulk/contacts/add** (1 change)

* Response 408 was added

**POST /api/v2/externalcontacts/bulk/contacts/remove** (1 change)

* Response 408 was added

**POST /api/v2/externalcontacts/bulk/contacts** (1 change)

* Response 408 was added

**POST /api/v2/externalcontacts/bulk/contacts/update** (1 change)

* Response 408 was added

**GET /api/v2/quality/surveys/scorable** (1 change)

* Response 408 was added

**PUT /api/v2/quality/surveys/scorable** (1 change)

* Response 408 was added

**POST /api/v2/outbound/contactlists/{contactListId}/contacts** (1 change)

* Response 408 was added

**DELETE /api/v2/outbound/contactlists/{contactListId}/contacts** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/{edgeId}/logs/jobs** (1 change)

* Response 408 was added

**GET /api/v2/gamification/profiles/{performanceProfileId}** (1 change)

* Response 408 was added

**PUT /api/v2/gamification/profiles/{performanceProfileId}** (1 change)

* Response 408 was added

**GET /api/v2/scim/users/{userId}** (1 change)

* Response 408 was added

**PUT /api/v2/scim/users/{userId}** (1 change)

* Response 408 was added

**DELETE /api/v2/scim/users/{userId}** (1 change)

* Response 408 was added

**PATCH /api/v2/scim/users/{userId}** (1 change)

* Response 408 was added

**GET /api/v2/scim/users** (1 change)

* Response 408 was added

**POST /api/v2/scim/users** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId}** (1 change)

* Response 408 was added

**PUT /api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId}** (1 change)

* Response 408 was added

**POST /api/v2/users/development/activities/aggregates/query** (1 change)

* Response 408 was added

**GET /api/v2/outbound/campaigns/all/divisionviews** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId}** (1 change)

* Response 408 was added

**DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId}** (1 change)

* Response 408 was added

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId}** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups** (1 change)

* Response 408 was added

**POST /api/v2/outbound/contactlistfilters/preview** (1 change)

* Response 408 was added

**GET /api/v2/scim/v2/groups** (1 change)

* Response 408 was added

**GET /api/v2/scim/v2/groups/{groupId}** (1 change)

* Response 408 was added

**PUT /api/v2/scim/v2/groups/{groupId}** (1 change)

* Response 408 was added

**PATCH /api/v2/scim/v2/groups/{groupId}** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/businessunits** (1 change)

* Response 408 was added

**GET /api/v2/stations/settings** (1 change)

* Response 408 was added

**PATCH /api/v2/stations/settings** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/sites** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/sites** (1 change)

* Response 408 was added

**GET /api/v2/recording/jobs/{jobId}** (1 change)

* Response 408 was added

**PUT /api/v2/recording/jobs/{jobId}** (1 change)

* Response 408 was added

**DELETE /api/v2/recording/jobs/{jobId}** (1 change)

* Response 408 was added

**POST /api/v2/authorization/roles/default** (1 change)

* Response 408 was added

**PUT /api/v2/authorization/roles/default** (1 change)

* Response 408 was added

**GET /api/v2/organizations/limits/docs** (1 change)

* Response 408 was added

**GET /api/v2/organizations/limits/namespaces** (1 change)

* Response 408 was added

**GET /api/v2/organizations/limits/namespaces/{namespaceName}** (1 change)

* Response 408 was added

**GET /api/v2/contentmanagement/securityprofiles** (1 change)

* Response 408 was added

**GET /api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Response 408 was added

**POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult** (1 change)

* Response 408 was added

**DELETE /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult** (1 change)

* Response 408 was added

**GET /api/v2/conversations/calls** (1 change)

* Response 408 was added

**POST /api/v2/conversations/calls** (1 change)

* Response 408 was added

**POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/monitor** (1 change)

* Response 408 was added

**GET /api/v2/conversations/calls/history** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}/attributes** (1 change)

* Response 408 was added

**GET /api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Response 408 was added

**GET /api/v2/conversations/calls/{conversationId}** (1 change)

* Response 408 was added

**POST /api/v2/conversations/calls/{conversationId}** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/calls/{conversationId}** (1 change)

* Response 408 was added

**GET /api/v2/conversations/calls/maximumconferenceparties** (1 change)

* Response 408 was added

**POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/coach** (1 change)

* Response 408 was added

**POST /api/v2/conversations/calls/{conversationId}/participants** (1 change)

* Response 408 was added

**PUT /api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/uuidata** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}** (1 change)

* Response 408 was added

**POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/replace** (1 change)

* Response 408 was added

**GET /api/v2/quality/calibrations** (1 change)

* Response 408 was added

**POST /api/v2/quality/calibrations** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/activitycodes** (1 change)

* Response 408 was added

**GET /api/v2/groups/{groupId}/greetings/defaults** (1 change)

* Response 408 was added

**PUT /api/v2/groups/{groupId}/greetings/defaults** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}/roles** (1 change)

* Response 408 was added

**PUT /api/v2/users/{userId}/roles** (1 change)

* Response 408 was added

**GET /api/v2/coaching/notifications** (1 change)

* Response 408 was added

**GET /api/v2/users/{userId}** (1 change)

* Response 408 was added

**DELETE /api/v2/users/{userId}** (1 change)

* Response 408 was added

**PATCH /api/v2/users/{userId}** (1 change)

* Response 408 was added

**POST /api/v2/users/{userId}/invite** (1 change)

* Response 408 was added

**GET /api/v2/outbound/campaigns/divisionviews/{campaignId}** (1 change)

* Response 408 was added

**POST /api/v2/scripts/{scriptId}/export** (1 change)

* Response 408 was added

**GET /api/v2/analytics/reporting/schedules/{scheduleId}** (1 change)

* Response 408 was added

**PUT /api/v2/analytics/reporting/schedules/{scheduleId}** (1 change)

* Response 408 was added

**DELETE /api/v2/analytics/reporting/schedules/{scheduleId}** (1 change)

* Response 408 was added

**GET /api/v2/routing/utilization** (1 change)

* Response 408 was added

**PUT /api/v2/routing/utilization** (1 change)

* Response 408 was added

**DELETE /api/v2/routing/utilization** (1 change)

* Response 408 was added

**GET /api/v2/integrations/speech/lex/bots** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}** (1 change)

* Response 408 was added

**PUT /api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}** (1 change)

* Response 408 was added

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings/{trainingId}** (1 change)

* Response 408 was added

**POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings/{trainingId}/promote** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/historicaldata/validate** (1 change)

* Response 408 was added

**GET /api/v2/fieldconfig** (1 change)

* Response 408 was added

**POST /api/v2/audits/query** (1 change)

* Response 408 was added

**GET /api/v2/audits/query/{transactionId}** (1 change)

* Response 408 was added

**GET /api/v2/audits/query/{transactionId}/results** (1 change)

* Response 408 was added

**POST /api/v2/audits/query/realtime** (1 change)

* Response 408 was added

**GET /api/v2/audits/query/servicemapping** (1 change)

* Response 408 was added

**GET /api/v2/audits/query/realtime/servicemapping** (1 change)

* Response 408 was added

**GET /api/v2/architect/dependencytracking/updatedresourceconsumers** (1 change)

* Response 408 was added

**GET /api/v2/analytics/reporting/schedules/{scheduleId}/history/latest** (1 change)

* Response 408 was added

**GET /api/v2/analytics/reporting/schedules/{scheduleId}/history** (1 change)

* Response 408 was added

**GET /api/v2/outbound/events/{eventId}** (1 change)

* Response 408 was added

**POST /api/v2/coaching/appointments/aggregates/query** (1 change)

* Response 408 was added

**GET /api/v2/outbound/campaignrules/{campaignRuleId}** (1 change)

* Response 408 was added

**PUT /api/v2/outbound/campaignrules/{campaignRuleId}** (1 change)

* Response 408 was added

**DELETE /api/v2/outbound/campaignrules/{campaignRuleId}** (1 change)

* Response 408 was added

**GET /api/v2/outbound/contactlists/{contactListId}** (1 change)

* Response 408 was added

**PUT /api/v2/outbound/contactlists/{contactListId}** (1 change)

* Response 408 was added

**DELETE /api/v2/outbound/contactlists/{contactListId}** (1 change)

* Response 408 was added

**GET /api/v2/outbound/contactlists/{contactListId}/timezonemappingpreview** (1 change)

* Response 408 was added

**GET /api/v2/conversations/chats/{conversationId}/messages/{messageId}** (1 change)

* Response 408 was added

**GET /api/v2/coaching/appointments/{appointmentId}/annotations/{annotationId}** (1 change)

* Response 408 was added

**DELETE /api/v2/coaching/appointments/{appointmentId}/annotations/{annotationId}** (1 change)

* Response 408 was added

**PATCH /api/v2/coaching/appointments/{appointmentId}/annotations/{annotationId}** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/trunkbasesettings/template** (1 change)

* Response 408 was added

**POST /api/v2/analytics/transcripts/aggregates/query** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}** (1 change)

* Response 408 was added

**PUT /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}** (1 change)

* Response 408 was added

**DELETE /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}** (1 change)

* Response 408 was added

**GET /api/v2/speechandtextanalytics/dialects** (1 change)

* Response 408 was added

**GET /api/v2/routing/queues/{queueId}/estimatedwaittime** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/historicaldata/importstatus** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/intraday/planninggroups** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/intraday** (1 change)

* Response 408 was added

**GET /api/v2/speechandtextanalytics/programs/{programId}** (1 change)

* Response 408 was added

**PUT /api/v2/speechandtextanalytics/programs/{programId}** (1 change)

* Response 408 was added

**DELETE /api/v2/speechandtextanalytics/programs/{programId}** (1 change)

* Response 408 was added

**GET /api/v2/organizations/limits/changerequests/{requestId}** (1 change)

* Response 408 was added

**GET /api/v2/conversations/messaging/integrations/twitter/{integrationId}** (1 change)

* Response 408 was added

**DELETE /api/v2/conversations/messaging/integrations/twitter/{integrationId}** (1 change)

* Response 408 was added

**PATCH /api/v2/conversations/messaging/integrations/twitter/{integrationId}** (1 change)

* Response 408 was added

**GET /api/v2/stations/{stationId}** (1 change)

* Response 408 was added

**DELETE /api/v2/stations/{stationId}/associateduser** (1 change)

* Response 408 was added

**POST /api/v2/flows/executions** (1 change)

* Response 408 was added

**GET /api/v2/outbound/contactlists/divisionviews** (1 change)

* Response 408 was added

**GET /api/v2/authorization/products** (1 change)

* Response 408 was added

**GET /api/v2/integrations/speech/lex/bot/{botId}/aliases** (1 change)

* Response 408 was added

**GET /api/v2/greetings** (1 change)

* Response 408 was added

**POST /api/v2/greetings** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/addressvalidation** (1 change)

* Response 408 was added

**GET /api/v2/locations** (1 change)

* Response 408 was added

**POST /api/v2/locations** (1 change)

* Response 408 was added

**GET /api/v2/voicemail/userpolicies/{userId}** (1 change)

* Response 408 was added

**PATCH /api/v2/voicemail/userpolicies/{userId}** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/adhocmodelingjobs/{jobId}** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/edgegroups** (1 change)

* Response 408 was added

**POST /api/v2/telephony/providers/edges/edgegroups** (1 change)

* Response 408 was added

**GET /api/v2/configuration/schemas/edges/vnext** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/copy** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}** (1 change)

* Response 408 was added

**DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/generationresults** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/headcountforecast** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/agentschedules/query** (1 change)

* Response 408 was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/history/agents/{agentId}** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/reschedule** (1 change)

* Response 408 was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/generate** (1 change)

* Response 408 was added

**GET /api/v2/scim/v2/users/{userId}** (1 change)

* Response 408 was added

**PUT /api/v2/scim/v2/users/{userId}** (1 change)

* Response 408 was added

**DELETE /api/v2/scim/v2/users/{userId}** (1 change)

* Response 408 was added

**PATCH /api/v2/scim/v2/users/{userId}** (1 change)

* Response 408 was added

**GET /api/v2/scim/v2/users** (1 change)

* Response 408 was added

**POST /api/v2/scim/v2/users** (1 change)

* Response 408 was added

**GET /api/v2/routing/email/domains/{domainName}/routes** (1 change)

* Response 408 was added

**POST /api/v2/routing/email/domains/{domainName}/routes** (1 change)

* Response 408 was added

**POST /api/v2/outbound/messagingcampaigns/progress** (1 change)

* Response 408 was added

**GET /api/v2/userrecordings/{recordingId}** (1 change)

* Response 408 was added

**PUT /api/v2/userrecordings/{recordingId}** (1 change)

* Response 408 was added

**DELETE /api/v2/userrecordings/{recordingId}** (1 change)

* Response 408 was added

**GET /api/v2/documentation/search** (1 change)

* Response 408 was added

**POST /api/v2/documentation/search** (1 change)

* Response 408 was added

**Callback** (2 changes)

* Optional property callerId was added
* Optional property callerIdName was added

**Team** (1 change)

* Optional property division was added

**ActionMapAction** (1 change)

* Optional property webMessagingOfferFields was added

**WebMessagingOfferFields** (1 change)

* Model was added

**KnowledgeBase** (1 change)

* Optional property articleCount was added

**FlowVersion** (3 changes)

* Enum value INQUEUEEMAIL was added to property compatibleFlowTypes
* Enum value INQUEUESHORTMESSAGE was added to property compatibleFlowTypes
* Enum value WORKITEM was added to property compatibleFlowTypes

**NluInfo** (1 change)

* Optional property version was added

**AnalyticsEvaluation** (2 changes)

* Optional property oTotalCriticalScore was added
* Optional property oTotalScore was added

**AnalyticsFlow** (3 changes)

* Enum value INQUEUEEMAIL was added to property flowType
* Enum value INQUEUESHORTMESSAGE was added to property flowType
* Enum value WORKITEM was added to property flowType

**AnalyticsResolution** (1 change)

* Optional property nNextContactAvoided was added

**AnalyticsSurvey** (1 change)

* Optional property oSurveyTotalScore was added

**Predictor** (1 change)

* Model was added

**PredictorListing** (1 change)

* Model was added

**PredictorSchedule** (1 change)

* Model was added

**PredictorWorkloadBalancing** (1 change)

* Model was added

**CreatePredictorRequest** (1 change)

* Model was added

**ArticleContent** (1 change)

* Model was added

**ArticleContentBody** (1 change)

* Model was added

**DocumentArticle** (1 change)

* Model was added

**KnowledgeSearchDocument** (2 changes)

* Enum value Article was added to property type
* Optional property article was added

**ViewFilter** (8 changes)

* Enum value instagram was added to property messageTypes
* Enum value inqueueshortmessage was added to property flowTypes
* Enum value inqueueemail was added to property flowTypes
* Enum value workitem was added to property flowTypes
* Optional property topicIds was added
* Optional property externalTags was added
* Optional property isNotResponding was added
* Optional property isAuthenticated was added

**ConnectedEdge** (1 change)

* Model was added

**EdgeConnectionInfo** (1 change)

* Model was added

**Site** (2 changes)

* coreSite is no longer readonly
* Optional property siteConnections was added

**SiteConnection** (1 change)

* Model was added

**EventMessage** (3 changes)

* Enum value IMPORT_INVALID_EMAIL_ADDRESSES was added to property code
* Enum value IMPORT_INVALID_EXPIRATION_DATE was added to property code
* Enum value IMPORT_EXPIRATION_DATE_EXCEEDS_MAX_DAYS was added to property code

**WorkPlan** (1 change)

* Optional property valid was added

**WorkPlanActivity** (1 change)

* Optional property validationId was added

**WorkPlanShift** (1 change)

* Optional property validationId was added

**WorkPlanListItemResponse** (1 change)

* Optional property valid was added

**WorkPlanValidationRequest** (1 change)

* Optional property valid was added

**Leaderboard** (1 change)

* Optional property userRank was added

**DevelopmentActivity** (1 change)

* Enum value Assessment was added to property type

**Trustee** (1 change)

* Optional property dateExpired was added

**TrustCreate** (1 change)

* Optional property dateExpired was added

**QualityAuditQueryExecutionStatusResponse** (1 change)

* Model was added

**QualityAuditQueryFilter** (1 change)

* Model was added

**QMAuditQueryRequest** (1 change)

* Model was added

**QualityAuditLogMessage** (1 change)

* Model was added

**QualityAuditQueryExecutionResultsResponse** (1 change)

* Model was added

**ConversationThreadingWindow** (1 change)

* Model was added

**ConversationThreadingWindowSetting** (1 change)

* Model was added

**BenefitAssessmentJob** (1 change)

* Model was added

**OpenIntegration** (1 change)

* Model was added

**OpenIntegrationEntityListing** (1 change)

* Model was added

**OpenIntegrationRequest** (1 change)

* Model was added

**Flow** (6 changes)

* Enum value INQUEUEEMAIL was added to property type
* Enum value INQUEUESHORTMESSAGE was added to property type
* Enum value WORKITEM was added to property type
* Enum value INQUEUEEMAIL was added to property compatibleFlowTypes
* Enum value INQUEUESHORTMESSAGE was added to property compatibleFlowTypes
* Enum value WORKITEM was added to property compatibleFlowTypes

**ProgramMappings** (1 change)

* Model was added

**ProgramMappingsRequest** (1 change)

* Model was added

**ButtonResponse** (1 change)

* Model was added

**QuickReply** (1 change)

* Model was added

**KnowledgeDocument** (2 changes)

* Enum value Article was added to property type
* Optional property article was added

**KnowledgeDocumentRequest** (2 changes)

* Enum value Article was added to property type
* Optional property article was added

**ConversationContentAttachment** (1 change)

* Model was added

**ConversationContentButtonResponse** (1 change)

* Model was added

**ConversationContentNotificationTemplate** (1 change)

* Model was added

**ConversationContentQuickReply** (1 change)

* Model was added

**ConversationMessageContent** (1 change)

* Model was added

**ConversationMessagingChannel** (1 change)

* Model was added

**ConversationMessagingFromRecipient** (1 change)

* Model was added

**ConversationMessagingToRecipient** (1 change)

* Model was added

**ConversationNormalizedMessage** (1 change)

* Model was added

**ConversationNotificationTemplateBody** (1 change)

* Model was added

**ConversationNotificationTemplateFooter** (1 change)

* Model was added

**ConversationNotificationTemplateHeader** (1 change)

* Model was added

**ConversationNotificationTemplateParameter** (1 change)

* Model was added

**ConversationReason** (1 change)

* Model was added

**OpenMessageContent** (1 change)

* Model was added

**OpenMessagingChannel** (1 change)

* Model was added

**OpenMessagingFromRecipient** (1 change)

* Model was added

**OpenMessagingToRecipient** (1 change)

* Model was added

**OpenNormalizedMessage** (1 change)

* Model was added

**KnowledgeDocumentBulkRequest** (2 changes)

* Enum value Article was added to property type
* Optional property article was added

**PerformanceProfile** (5 changes)

* Optional property division was added
* Optional property dateCreated was added
* Optional property reportingIntervals was added
* Optional property active was added
* Optional property maxLeaderboardRankSize was added

**ReportingInterval** (1 change)

* Model was added

**ComparisonPeriod** (1 change)

* Model was added

**KnowledgeSearchRequest** (1 change)

* Enum value Article was added to property documentType

**BulkFetchNotesResponse** (1 change)

* Model was added

**BulkResponseResultNoteEntity** (1 change)

* Model was added

**BulkErrorNote** (1 change)

* Model was added

**BulkNotesResponse** (1 change)

* Model was added

**BulkResponseResultNoteNote** (1 change)

* Model was added

**BulkNotesRequest** (1 change)

* Model was added

**CreateCallbackCommand** (2 changes)

* Optional property callerId was added
* Optional property callerIdName was added

**ProgramsMappingsEntityListing** (1 change)

* Model was added

**Dependency** (4 changes)

* Enum value INQUEUEEMAILFLOW was added to property type
* Enum value INQUEUESHORTMESSAGEFLOW was added to property type
* Enum value KNOWLEDGEBASE was added to property type
* Enum value WORKITEMFLOW was added to property type

**ReportingExportJobResponse** (2 changes)

* Enum value TOPIC_TREND_SUMMARY_VIEW was added to property viewType
* Enum value TOPIC_TREND_DETAIL_VIEW was added to property viewType

**ReportingExportJobRequest** (2 changes)

* Enum value TOPIC_TREND_SUMMARY_VIEW was added to property viewType
* Enum value TOPIC_TREND_DETAIL_VIEW was added to property viewType

**VoicemailGroupPolicy** (1 change)

* Optional property disableEmailPii was added

**CallbackBasic** (2 changes)

* Optional property callerId was added
* Optional property callerIdName was added

**DependencyObject** (4 changes)

* Enum value INQUEUEEMAILFLOW was added to property type
* Enum value INQUEUESHORTMESSAGEFLOW was added to property type
* Enum value KNOWLEDGEBASE was added to property type
* Enum value WORKITEMFLOW was added to property type

**BulkErrorRelationship** (1 change)

* Model was added

**BulkRelationshipsResponse** (1 change)

* Model was added

**BulkResponseResultRelationshipRelationship** (1 change)

* Model was added

**BulkRelationshipsRequest** (1 change)

* Model was added

**BulkFetchRelationshipsResponse** (1 change)

* Model was added

**BulkResponseResultRelationshipEntity** (1 change)

* Model was added

**BuForecastTimeSeriesResult** (1 change)

* Enum value Theta was added to property forecastingMethod

**ManagementUnitSettingsRequest** (1 change)

* Model was added

**UpdateManagementUnitRequest** (1 change)

* Model was added

**PatchPredictorRequest** (1 change)

* Model was added

**KeyPerformanceIndicator** (1 change)

* Model was added

**TrustUpdate** (1 change)

* Model was added

**CrossPlatformPolicyUpdate** (1 change)

* Model was added

**JourneyAggregateQueryPredicate** (1 change)

* Enum value journeyBlockingEmergencyScheduleGroupId was added to property dimension

**JourneyAggregationQuery** (2 changes)

* Enum value journeyBlockingEmergencyScheduleGroupId was added to property groupBy
* Enum value nDistinctJourneySessions was added to property metrics

**JourneyAggregationView** (1 change)

* Enum value nDistinctJourneySessions was added to property target

**DisallowedEntityLearningAssignmentReference** (1 change)

* Model was added

**LearningAssignmentBulkRemoveResponse** (1 change)

* Model was added

**LearningAssignmentEntity** (1 change)

* Model was added

**LearningAssignmentReference** (1 change)

* Model was added

**BenefitAssessment** (1 change)

* Model was added

**Check** (1 change)

* Model was added

**KeyPerformanceIndicatorAssessment** (1 change)

* Model was added

**AssessmentJobListing** (1 change)

* Model was added

**CreateBenefitAssessmentJobRequest** (1 change)

* Model was added

**LearningAssignmentAggregateQueryResponseData** (1 change)

* Model was added

**LearningAssignmentAggregateQueryResponseGroupedData** (1 change)

* Model was added

**LearningAssignmentAggregateQueryResponseMetric** (1 change)

* Model was added

**LearningAssignmentAggregateQueryResponseStats** (1 change)

* Model was added

**LearningAssignmentAggregateResponse** (1 change)

* Model was added

**LearningAssignmentAggregateParam** (1 change)

* Model was added

**LearningAssignmentAggregateQueryRequestClause** (1 change)

* Model was added

**LearningAssignmentAggregateQueryRequestFilter** (1 change)

* Model was added

**LearningAssignmentAggregateQueryRequestPredicate** (1 change)

* Model was added

**AssessmentListing** (1 change)

* Model was added

**CreateBenefitAssessmentRequest** (1 change)

* Model was added

**PolicyUpdate** (1 change)

* Model was added

**OpenIntegrationUpdateRequest** (1 change)

* Model was added

**GeneralProgramJobRequest** (3 changes)

* Enum value en-ZA was added to property dialect
* Enum value es-ES was added to property dialect
* Enum value en-IN was added to property dialect

**CreateCallbackOnConversationCommand** (2 changes)

* Optional property callerId was added
* Optional property callerIdName was added

**AcknowledgeScreenRecordingRequest** (1 change)

* Model was added

**ScreenRecordingMetaData** (1 change)

* Model was added

**ScreenRecordingMetaDataRequest** (1 change)

* Model was added

**ReportingExportMetadataJobResponse** (2 changes)

* Enum value TOPIC_TREND_SUMMARY_VIEW was added to property viewType
* Enum value TOPIC_TREND_DETAIL_VIEW was added to property viewType

**VoicemailOrganizationPolicy** (1 change)

* Optional property disableEmailPii was added

**ComparisonPeriodListing** (1 change)

* Model was added

**PatchAction** (1 change)

* Optional property webMessagingOfferFields was added

**FlowDivisionView** (3 changes)

* Enum value INQUEUEEMAIL was added to property type
* Enum value INQUEUESHORTMESSAGE was added to property type
* Enum value WORKITEM was added to property type

**AgentManagementUnitReference** (1 change)

* Model was added

**AuditQueryExecutionStatusResponse** (8 changes)

* Enum value AnalyticsReporting was added to property serviceName
* Enum value Coaching was added to property serviceName
* Enum value Datatables was added to property serviceName
* Enum value Gamification was added to property serviceName
* Enum value Performance was added to property serviceName
* Enum value WebDeployments was added to property serviceName
* Enum value Webhooks was added to property serviceName
* Enum value Messaging was added to property serviceName

**AuditQueryRequest** (8 changes)

* Enum value AnalyticsReporting was added to property serviceName
* Enum value Coaching was added to property serviceName
* Enum value Datatables was added to property serviceName
* Enum value Gamification was added to property serviceName
* Enum value Performance was added to property serviceName
* Enum value WebDeployments was added to property serviceName
* Enum value Webhooks was added to property serviceName
* Enum value Messaging was added to property serviceName

**AuditLogMessage** (50 changes)

* Enum value AnalyticsReporting was added to property serviceName
* Enum value Coaching was added to property serviceName
* Enum value Datatables was added to property serviceName
* Enum value Gamification was added to property serviceName
* Enum value Performance was added to property serviceName
* Enum value WebDeployments was added to property serviceName
* Enum value Webhooks was added to property serviceName
* Enum value Messaging was added to property serviceName
* Enum value Abandon was added to property action
* Enum value Archive was added to property action
* Enum value RestoreRequest was added to property action
* Enum value RestoreComplete was added to property action
* Enum value Write was added to property action
* Enum value Purge was added to property action
* Enum value Processed was added to property action
* Enum value Annotation was added to property entityType
* Enum value Appointment was added to property entityType
* Enum value Bulk was added to property entityType
* Enum value Calibration was added to property entityType
* Enum value Configuration was added to property entityType
* Enum value ConfigurationVersion was added to property entityType
* Enum value Deployment was added to property entityType
* Enum value DashboardSettings was added to property entityType
* Enum value Evaluation was added to property entityType
* Enum value EvaluationForm was added to property entityType
* Enum value Exports was added to property entityType
* Enum value ExternalMetricData was added to property entityType
* Enum value ExternalMetricDefinition was added to property entityType
* Enum value Forecast was added to property entityType
* Enum value HistoricalData was added to property entityType
* Enum value InsightSettings was added to property entityType
* Enum value Metric was added to property entityType
* Enum value OrphanedRecording was added to property entityType
* Enum value Policy was added to property entityType
* Enum value RecordingAnnotation was added to property entityType
* Enum value RecordingSettings was added to property entityType
* Enum value Row was added to property entityType
* Enum value ScheduledExports was added to property entityType
* Enum value Schema was added to property entityType
* Enum value ScreenRecording was added to property entityType
* Enum value Status was added to property entityType
* Enum value Survey was added to property entityType
* Enum value SurveyForm was added to property entityType
* Enum value Webhook was added to property entityType
* Enum value ConversationPhoneNumber was added to property entityType
* Enum value ConversationRecipient was added to property entityType
* Enum value ConversationAccount was added to property entityType
* Enum value ConversationDefaultSupportedContent was added to property entityType
* Enum value ConversationThreadingWindow was added to property entityType
* Enum value SupportedContent was added to property entityType

**AuditRealtimeQueryRequest** (8 changes)

* Enum value AnalyticsReporting was added to property serviceName
* Enum value Coaching was added to property serviceName
* Enum value Datatables was added to property serviceName
* Enum value Gamification was added to property serviceName
* Enum value Performance was added to property serviceName
* Enum value WebDeployments was added to property serviceName
* Enum value Webhooks was added to property serviceName
* Enum value Messaging was added to property serviceName

**AuditQueryEntity** (42 changes)

* Enum value Annotation was added to property name
* Enum value Appointment was added to property name
* Enum value Bulk was added to property name
* Enum value Calibration was added to property name
* Enum value Configuration was added to property name
* Enum value ConfigurationVersion was added to property name
* Enum value Deployment was added to property name
* Enum value DashboardSettings was added to property name
* Enum value Evaluation was added to property name
* Enum value EvaluationForm was added to property name
* Enum value Exports was added to property name
* Enum value ExternalMetricData was added to property name
* Enum value ExternalMetricDefinition was added to property name
* Enum value Forecast was added to property name
* Enum value HistoricalData was added to property name
* Enum value InsightSettings was added to property name
* Enum value Metric was added to property name
* Enum value OrphanedRecording was added to property name
* Enum value Policy was added to property name
* Enum value RecordingAnnotation was added to property name
* Enum value RecordingSettings was added to property name
* Enum value Row was added to property name
* Enum value ScheduledExports was added to property name
* Enum value Schema was added to property name
* Enum value ScreenRecording was added to property name
* Enum value Status was added to property name
* Enum value Survey was added to property name
* Enum value SurveyForm was added to property name
* Enum value Webhook was added to property name
* Enum value ConversationPhoneNumber was added to property name
* Enum value ConversationRecipient was added to property name
* Enum value ConversationAccount was added to property name
* Enum value ConversationDefaultSupportedContent was added to property name
* Enum value ConversationThreadingWindow was added to property name
* Enum value SupportedContent was added to property name
* Enum value Abandon was added to property actions
* Enum value Archive was added to property actions
* Enum value RestoreRequest was added to property actions
* Enum value RestoreComplete was added to property actions
* Enum value Write was added to property actions
* Enum value Purge was added to property actions
* Enum value Processed was added to property actions

**AuditQueryService** (8 changes)

* Enum value AnalyticsReporting was added to property name
* Enum value Coaching was added to property name
* Enum value Datatables was added to property name
* Enum value Gamification was added to property name
* Enum value Performance was added to property name
* Enum value WebDeployments was added to property name
* Enum value Webhooks was added to property name
* Enum value Messaging was added to property name


# Point Changes (1559 changes)

**GET /api/v2/analytics/reporting/metadata** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}/upload** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/cobrowsesessions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/attributes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/cobrowsesessions/{conversationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/replace** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/contentmanagement/status/{statusId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/contentmanagement/status/{statusId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/organizations/ipaddressauthentication** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/organizations/ipaddressauthentication** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/license/infer** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/externalcontacts/organizations/{externalOrganizationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/contacts/{contactId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/externalcontacts/contacts/{contactId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/externalcontacts/contacts/{contactId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/wrapupcodemappings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/outbound/wrapupcodemappings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/coaching/appointments/{appointmentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/coaching/appointments/{appointmentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/coaching/appointments/{appointmentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/coaching/appointments/{appointmentId}/conversations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scripts/published/{scriptId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/webchat/deployments** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/webchat/deployments** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/analytics/reporting/timeperiods** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/campaigns/{campaignId}/stats** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/clientapps** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/forms/surveys/bulk** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/forms/surveys/bulk/contexts** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/integrations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/contactlists/{contactListId}/export** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/contactlists/{contactListId}/export** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/contentmanagement/workspaces/{workspaceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/contentmanagement/workspaces/{workspaceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/contentmanagement/workspaces/{workspaceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/presencedefinitions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/presencedefinitions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/uploads/workforcemanagement/historicaldata/json** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/uploads/workforcemanagement/historicaldata/csv** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/analytics/users/aggregates/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/analytics/users/details/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/analytics/users/observations/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/analytics/users/details/jobs** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/analytics/users/details/jobs/{jobId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/analytics/users/details/jobs/{jobId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/analytics/users/details/jobs/{jobId}/results** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/analytics/users/details/jobs/availability** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/identityproviders/pureengage** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/identityproviders/pureengage** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/identityproviders/pureengage** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/users/bulk** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/oauth/clients/{clientId}/secret** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/oauth/clients/{clientId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/oauth/clients/{clientId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/oauth/clients/{clientId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/journey/actiontemplates** (2 changes)

* Description was changed for parameter state
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/journey/actiontemplates** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/certificate/details** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/analytics/flows/aggregates/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/analytics/flows/observations/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/didpools/{didPoolId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/telephony/providers/edges/didpools/{didPoolId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/telephony/providers/edges/didpools/{didPoolId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/languageunderstanding/domains** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/languageunderstanding/domains** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/voicemail/groups/{groupId}/messages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/users** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows/{flowId}/versions/{versionId}/configuration** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows/{flowId}/versions/{versionId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/analytics/conversations/aggregates/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/analytics/conversations/details/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/analytics/conversations/{conversationId}/details** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/analytics/conversations/details** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/analytics/conversations/{conversationId}/details/properties** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/analytics/conversations/details/jobs** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/analytics/conversations/details/jobs/{jobId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/analytics/conversations/details/jobs/{jobId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/analytics/conversations/details/jobs/{jobId}/results** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/analytics/conversations/details/jobs/availability** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows/datatables** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/flows/datatables** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/fax/documents/{documentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/fax/documents/{documentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/fax/documents/{documentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/campaigns/progress** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/analytics/queues/observations/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/profiles/users** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/historicaldata/deletejob** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/historicaldata/deletejob** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/userrecordings/{recordingId}/media** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/messagingcampaigns** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/messagingcampaigns** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/emergencygroups** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/architect/emergencygroups** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/externalcontacts/conversations/{conversationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/wrapupcodes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/routing/wrapupcodes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/license/users** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/license/users** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gdpr/requests/{requestId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/alerting/alerts/active** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/stations** (2 changes)

* Response 408 was changed from Request Timeout to The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads.
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/groups/{groupId}/profile** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/{edgeId}/lines** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/notifications/availabletopics** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/identityproviders/generic** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/identityproviders/generic** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/identityproviders/generic** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/campaigns/{campaignId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/outbound/campaigns/{campaignId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/outbound/campaigns/{campaignId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/campaigns/{campaignId}/agentownedmappingpreview/results** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/campaigns/{campaignId}/agentownedmappingpreview** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/campaigns/{campaignId}/diagnostics** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/campaigns/{campaignId}/progress** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/outbound/campaigns/{campaignId}/progress** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/events** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/contentmanagement/documents** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/contentmanagement/documents** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/copy** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans** (2 changes)

* Description was changed
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/validate** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/surveys/{surveyId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/linebasesettings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/dnclists/{dncListId}/importstatus** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/contactlistfilters/{contactListFilterId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/outbound/contactlistfilters/{contactListFilterId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/outbound/contactlistfilters/{contactListFilterId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/responsemanagement/responses/{responseId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/responsemanagement/responses/{responseId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/responsemanagement/responses/{responseId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/evaluations/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/alerting/interactionstats/rules** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/alerting/interactionstats/rules** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/{edgeId}/softwareupdate** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/{edgeId}/softwareupdate** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/telephony/providers/edges/{edgeId}/softwareupdate** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/schedules/sequences** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/identityproviders/gsuite** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/identityproviders/gsuite** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/identityproviders/gsuite** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/responsemanagement/libraries/{libraryId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/responsemanagement/libraries/{libraryId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/responsemanagement/libraries/{libraryId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/messaging/integrations/whatsapp** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/messaging/integrations/whatsapp** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/recording/crossplatform/mediaretentionpolicies** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/recording/crossplatform/mediaretentionpolicies** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/recording/crossplatform/mediaretentionpolicies** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/{edgeId}/statuscode** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/orgauthorization/trustors/{trustorOrgId}/users** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/leaderboard** (2 changes)

* Summary was changed
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/leaderboard/bestpoints** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/leaderboard/all** (2 changes)

* Summary was changed
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/leaderboard/all/bestpoints** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/users/{userId}/password** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/contentmanagement/workspaces/{workspaceId}/documents** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/timezones** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/phonebasesettings/availablemetabases** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows/outcomes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/flows/outcomes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/campaigns/{campaignId}/callback/schedule** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/systemprompts** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/billing/trusteebillingoverview/{trustorOrgId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/development/activities/{activityId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/development/activities** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/development/activities/me** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/contentmanagement/workspaces** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/contentmanagement/workspaces** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/timeoffrequests** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/timeoffrequests** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/certificateauthorities/{certificateId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/telephony/providers/edges/certificateauthorities/{certificateId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/telephony/providers/edges/certificateauthorities/{certificateId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/alerting/interactionstats/rules/{ruleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/alerting/interactionstats/rules/{ruleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/alerting/interactionstats/rules/{ruleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/authorization/roles/{roleId}/subjectgrants** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/orgauthorization/trustees** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/orgauthorization/trustees** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/widgets/deployments** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/widgets/deployments** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/sites/{siteId}/numberplans/classifications** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/geolocations/{clientId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/users/{userId}/geolocations/{clientId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scim/v2/resourcetypes/{resourceType}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scim/v2/resourcetypes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}/{extensionType}/{metadataId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/relationships** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/webchat/guest/conversations/{conversationId}/messages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/contacts/{contactId}/notes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/externalcontacts/contacts/{contactId}/notes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/queues/{queueId}/users** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/routing/queues/{queueId}/users** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/routing/queues/{queueId}/users** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/journey/outcomes** (2 changes)

* Description was changed for parameter outcomeIds
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/journey/outcomes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/queues** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/users/{userId}/queues** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows/milestones/{milestoneId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/flows/milestones/{milestoneId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/flows/milestones/{milestoneId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/organizations/schemas/{schemaId}/versions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/languageunderstanding/domains/{domainId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/languageunderstanding/domains/{domainId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/languageunderstanding/domains/{domainId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/conversations/{conversationId}/surveys** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/groups/{groupId}/members** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/groups/{groupId}/members** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/groups/{groupId}/members** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/email/domains/{domainId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/routing/email/domains/{domainId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/routing/email/domains/{domainId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/routing/email/domains/{domainId}/testconnection** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/routing/email/domains/{domainId}/validate** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/physicalinterfaces** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/oauth/clients/{clientId}/usage/query/results/{executionId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/contactlists** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/contactlists** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/outbound/contactlists** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/webchat/guest/conversations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/divisionviews** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/organizations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/externalcontacts/organizations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor/{trustorId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/shifttrades/users** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/shifttrades/matched** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/conversations/{conversationId}/audits** (2 changes)

* Description was changed
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/linebasesettings/{lineBaseId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/dataextensions/limits** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/queues/divisionviews/all** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/attemptlimits** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/attemptlimits** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/prompts/{promptId}/history/{historyId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/architect/prompts/{promptId}/history** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/prompts/{promptId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/architect/prompts/{promptId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/architect/prompts/{promptId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/dependencytracking/types** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/speechandtextanalytics/topics/publishjobs/{jobId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId}/shifttrades** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/userapps** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/speech/tts/engines/{engineId}/voices** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/forms/surveys/{formId}/versions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/notifications** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/notifications/update** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/recording/recordingkeys/rotationschedule** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/recording/recordingkeys/rotationschedule** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/callabletimesets** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/callabletimesets** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/chat/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/chat/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/chat/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/dnclists** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/dnclists** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/extensions/{extensionId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/telephony/providers/edges/extensions/{extensionId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/phones** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/phones** (2 changes)

* Response 408 was changed from Request Timeout to The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads.
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/managementunits** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/managementunits** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/authorization/divisions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/authorization/divisions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/phones/{phoneId}/reboot** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/attemptlimits/{attemptLimitsId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/outbound/attemptlimits/{attemptLimitsId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/outbound/attemptlimits/{attemptLimitsId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/analytics/reporting/reportformats** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/authorization/divisions/home** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/siptraces/download/{downloadId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/siptraces** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/siptraces/download** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/billing/reports/billableusage** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/languages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/languages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/message/recipients/{recipientId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/routing/message/recipients/{recipientId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/oauth/clients** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/oauth/clients** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/relationships/{relationshipId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/externalcontacts/relationships/{relationshipId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/externalcontacts/relationships/{relationshipId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/search** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/users/search** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/schedules/campaigns** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/outboundroutes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/outboundroutes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/coaching/appointments/{appointmentId}/annotations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/coaching/appointments/{appointmentId}/annotations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/metrics** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/gamification/metrics** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/timezones** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/actions/categories** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/authorization/subjects/{subjectId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/authorization/subjects/{subjectId}/bulkremove** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/authorization/subjects/{subjectId}/bulkadd** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/authorization/subjects/{subjectId}/bulkreplace** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/sites/{siteId}/rebalance** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/orgauthorization/trustees/audits** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/textbots/bots/execute** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/license/users/{userId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/dnclists/divisionviews/{dncListId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/groups/search** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/groups/search** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scripts/uploads/{uploadId}/status** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/{conversationId}/recordings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/usage/query/{executionId}/results** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows/datatables/{datatableId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/flows/datatables/{datatableId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/flows/datatables/{datatableId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/conversations/{conversationId}/dnc** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/analytics/reporting/schedules/{scheduleId}/runreport** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/users/{userId}/utilization** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/routing/users/{userId}/utilization** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/routing/users/{userId}/utilization** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/forms/evaluations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/quality/forms/evaluations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/languageunderstanding/domains/{domainId}/feedback** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/languageunderstanding/domains/{domainId}/feedback** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/identityproviders/ping** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/identityproviders/ping** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/identityproviders/ping** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/contacts/schemas** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/externalcontacts/contacts/schemas** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/schedules/search** (2 changes)

* Response 408 was changed from Request Timeout to The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads.
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/agentschedules/search** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/templates/{templateId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/languageunderstanding/domains/{domainId}/feedback/{feedbackId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/languageunderstanding/domains/{domainId}/feedback/{feedbackId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/messages/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/messages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/messages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/messages/{conversationId}/messages/bulk** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/messages/{conversationId}/participants/{participantId}/attributes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/messages/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/messages/{conversationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/messages/{conversationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media/{mediaId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/messages/agentless** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/messages/{conversationId}/participants/{participantId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/messages/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/messages/{conversationId}/participants/{participantId}/replace** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/messages/{conversationId}/messages/{messageId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/coaching/appointments/me** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/notifications/channels/{channelId}/subscriptions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/notifications/channels/{channelId}/subscriptions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/notifications/channels/{channelId}/subscriptions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/notifications/channels/{channelId}/subscriptions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/{conversationId}/recordings/{recordingId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/conversations/{conversationId}/recordings/{recordingId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/coaching/notifications/{notificationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/coaching/notifications/{notificationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/analytics/reporting/{reportId}/metadata** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/speechandtextanalytics/programs/general/jobs/{jobId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/voicemail/queues/{queueId}/messages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/adherence/historical** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/extensionpools** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/extensionpools** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/analytics/reporting/schedules/{scheduleId}/history/{runId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/campaigns/all** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/dataextensions/coretypes/{coretypeName}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}/typing** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}/messages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/speechandtextanalytics/programs** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/speechandtextanalytics/programs** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/profiles** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/eventlog** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/didpools** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/didpools** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/publishedforms/surveys** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/quality/publishedforms/surveys** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/identityproviders/purecloud** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/identityproviders/purecloud** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/identityproviders/purecloud** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/calibrations/{calibrationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/quality/calibrations/{calibrationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/quality/calibrations/{calibrationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/schedules/sequences/{sequenceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/outbound/schedules/sequences/{sequenceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/outbound/schedules/sequences/{sequenceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/dids/{didId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/telephony/providers/edges/dids/{didId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/journey/actiontargets/{actionTargetId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/journey/actiontargets/{actionTargetId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/voicemail/messages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/voicemail/messages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/voicemail/messages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/recording/mediaretentionpolicies** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/recording/mediaretentionpolicies** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/recording/mediaretentionpolicies** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/agentschedules/mine** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/dids** (2 changes)

* Response 408 was changed from Request Timeout to The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads.
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/authorization/divisions/limit** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scripts/published** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/speech/tts/engines** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/trunks/{trunkId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/recording/jobs** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/recording/jobs** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/contentmanagement/auditquery** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/phonebasesettings** (2 changes)

* Response 408 was changed from Request Timeout to The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads.
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/phonebasesettings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/userrecordings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/dnclists/divisionviews** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/lines** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/speechandtextanalytics/transcripts/search** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/status** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/gamification/status** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/callanalysisresponsesets** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/callanalysisresponsesets** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows/outcomes/{flowOutcomeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/flows/outcomes/{flowOutcomeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/date** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/{integrationId}/config/current** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/integrations/{integrationId}/config/current** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/messaging/integrations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/scan/notes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows/outcomes/divisionviews** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/organizations/schemas/{schemaId}/versions/{versionId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/queues/{queueId}/mediatypes/{mediaType}/estimatedwaittime** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/speech/tts/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/integrations/speech/tts/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/webchat/deployments/{deploymentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/webchat/deployments/{deploymentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/webchat/deployments/{deploymentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/search** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/webchat/guest/conversations/{conversationId}/mediarequests/{mediaRequestId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/webchat/guest/conversations/{conversationId}/mediarequests/{mediaRequestId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/organizations/features/{featureName}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/ipranges** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/prompts** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/architect/prompts** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/architect/prompts** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/templates** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/dnclists/{dncListId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/outbound/dnclists/{dncListId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/outbound/dnclists/{dncListId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/userrecordings/summary** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/identityproviders** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/oauth/authorizations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/orphanrecordings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/alerting/interactionstats/alerts/{alertId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/alerting/interactionstats/alerts/{alertId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/alerting/interactionstats/alerts/{alertId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/documentation/gkn/search** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/documentation/gkn/search** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/speechandtextanalytics/programs/unpublished** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/actions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/integrations/actions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/languages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/routing/languages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/journey/segments/{segmentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/journey/segments/{segmentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/journey/segments/{segmentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/authorization/roles/{roleId}/users** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/authorization/roles/{roleId}/users/add** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/authorization/roles/{roleId}/users/remove** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/contacts/schemas/{schemaId}/versions/{versionId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/attributes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/callbacks** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/callbacks** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/callbacks/{conversationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/callbacks/{conversationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/replace** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/forms/{formId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/quality/forms/{formId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/quality/forms/{formId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/authorization/subjects/rolecounts** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/systemprompts/{promptId}/resources/{languageCode}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/architect/systemprompts/{promptId}/resources/{languageCode}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/architect/systemprompts/{promptId}/resources/{languageCode}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/trunks/metrics** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/webchat/guest/conversations/{conversationId}/messages/{messageId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scripts/{scriptId}/pages/{pageId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/messaging/integrations/twitter** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/messaging/integrations/twitter** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/metricdefinitions/{metricDefinitionId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/recordings/deletionprotection** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/recordings/deletionprotection** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/languageunderstanding/domains/{domainId}/versions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/languageunderstanding/domains/{domainId}/versions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/sms/addresses/{addressId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/routing/sms/addresses/{addressId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/shifttrades** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/contactlists/divisionviews/{contactListId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/journey/outcomes/{outcomeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/journey/outcomes/{outcomeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/journey/outcomes/{outcomeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges** (2 changes)

* Response 408 was changed from Request Timeout to The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads.
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/voicemail/messages/{messageId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/voicemail/messages/{messageId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/voicemail/messages/{messageId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/voicemail/messages/{messageId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/voicemail/messages/{messageId}/media** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/speechandtextanalytics/topics/general** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/{edgeId}/setuppackage** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/{edgeId}/reboot** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/contentmanagement/workspaces/{workspaceId}/members** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/rulesets** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/rulesets** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/identityproviders/identitynow** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/identityproviders/identitynow** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/identityproviders/identitynow** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/messaging/integrations/whatsapp/{integrationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/conversations/messaging/integrations/whatsapp/{integrationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/messaging/integrations/whatsapp/{integrationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/forms** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/quality/forms** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/trunks/{trunkId}/metrics** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/phones/reboot** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/authorization/subjects/me** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scripts/published/{scriptId}/pages/{pageId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/webchat/guest/conversations/{conversationId}/mediarequests** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/users/{userId}/queues/{queueId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/agents/activity** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/types/{typeId}/configschemas/{configType}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/speechandtextanalytics/conversations/{conversationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/users/{userId}/routinglanguages/bulk** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/routinglanguages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/users/{userId}/routinglanguages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/users/{userId}/routinglanguages/{languageId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/users/{userId}/routinglanguages/{languageId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows/datatables/{datatableId}/rows** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/flows/datatables/{datatableId}/rows** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/orgauthorization/trustors** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/chats** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/chats** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}/attributes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/chats/{conversationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/chats/{conversationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/chats/{conversationId}/participants/{participantId}/replace** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/messaging/integrations/line/{integrationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/conversations/messaging/integrations/line/{integrationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/conversations/messaging/integrations/line/{integrationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/credentials/{credentialId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/integrations/credentials/{credentialId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/integrations/credentials/{credentialId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/speechandtextanalytics/programs/publishjobs/{jobId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows/datatables/{datatableId}/import/jobs/{importJobId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/sms/phonenumbers/{addressId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/routing/sms/phonenumbers/{addressId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/routing/sms/phonenumbers/{addressId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/responsemanagement/libraries** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/responsemanagement/libraries** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}/copy** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/evaluators/activity** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/dependencytracking/consumedresources** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/lines/template** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/speechandtextanalytics/conversations/{conversationId}/communications/{communicationId}/transcripturl** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/identityproviders/adfs** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/identityproviders/adfs** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/identityproviders/adfs** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/recording/localkeys/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/recording/localkeys/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/callabletimesets/{callableTimeSetId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/outbound/callabletimesets/{callableTimeSetId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/outbound/callabletimesets/{callableTimeSetId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/externalcontacts/relationships** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/emails** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/emails** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/emails/{conversationId}/messages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/emails/{conversationId}/messages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/emails/{conversationId}/participants/{participantId}/attributes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/emails/{conversationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/emails/{conversationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/conversations/emails/{conversationId}/messages/draft/attachments/{attachmentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/emails/{conversationId}/messages/draft/attachments/copy** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/emails/{conversationId}/messages/draft** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/conversations/emails/{conversationId}/messages/draft** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/emails/{conversationId}/inboundmessages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/emails/{conversationId}/participants/{participantId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/emails/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/emails/{conversationId}/participants/{participantId}/replace** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/emails/{conversationId}/messages/{messageId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/analytics/evaluations/aggregates/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/identityproviders/salesforce** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/identityproviders/salesforce** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/identityproviders/salesforce** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/sequences/{sequenceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/outbound/sequences/{sequenceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/outbound/sequences/{sequenceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/queues/divisionviews** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/ivrs/{ivrId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/architect/ivrs/{ivrId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/architect/ivrs/{ivrId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/contentmanagement/documents/{documentId}/audits** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/organizations/me** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/organizations/me** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/speech/dialogflow/agents** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/journey/segments** (2 changes)

* Description was changed for parameter segmentIds
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/journey/segments** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/audits** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/recording/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/recording/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/voicemail/groups/{groupId}/policy** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/voicemail/groups/{groupId}/policy** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/authorization/divisions/{divisionId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/authorization/divisions/{divisionId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/authorization/divisions/{divisionId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/authorization/divisions/{divisionId}/objects/{objectType}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scim/groups** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scim/groups/{groupId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/scim/groups/{groupId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/scim/groups/{groupId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/oauth/scopes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/edgeversionreport** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gdpr/requests** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/gdpr/requests** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/skills/{skillId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/routing/skills/{skillId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/actions/{actionId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/integrations/actions/{actionId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/integrations/actions/{actionId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/integrations/actions/{actionId}/test** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/actions/{actionId}/schemas/{fileName}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/actions/{actionId}/templates/{fileName}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/integrations/actions/{actionId}/execute** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows/{flowId}/versions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/flows/{flowId}/versions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}/result** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/locations/search** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/locations/search** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/speechandtextanalytics/topics** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/speechandtextanalytics/topics** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/campaigns/{campaignId}/interactions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/orgauthorization/trustor/audits** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/email/setup** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scripts/{scriptId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/types** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/identityproviders/onelogin** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/identityproviders/onelogin** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/identityproviders/onelogin** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/messaging/integrations/line** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/messaging/integrations/line** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/dependencytracking/object** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/quality/conversations/{conversationId}/evaluations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/organizations/embeddedintegration** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/organizations/embeddedintegration** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/orgauthorization/trustors/{trustorOrgId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/orgauthorization/trustors/{trustorOrgId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/reversewhitepageslookup** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/queues** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/routing/queues** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/dnclists/{dncListId}/export** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/dnclists/{dncListId}/export** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/profiles/groups** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/routing/queues/{queueId}/members/{memberId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/routing/queues/{queueId}/members/{memberId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/speech/tts/engines/{engineId}/voices/{voiceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/flows/actions/publish** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/flows/actions/checkin** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/flows/actions/checkout** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/flows/actions/deactivate** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/flows/actions/revert** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/flows/actions/unlock** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/greetings/defaults** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/users/{userId}/greetings/defaults** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/publishedforms** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/quality/publishedforms** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/learning/modules/{moduleId}/rule** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/learning/modules/{moduleId}/rule** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/settings/transcription** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/routing/settings/transcription** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/settings/contactcenter** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/routing/settings/contactcenter** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/routing/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/routing/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/types/{typeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/contactlists/{contactListId}/contacts/bulk** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/voicemail/mailbox** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/voicemail/me/mailbox** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/voicemail/groups/{groupId}/mailbox** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/metrics** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/widgets/deployments/{deploymentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/widgets/deployments/{deploymentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/widgets/deployments/{deploymentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/scorecards/users/{userId}/bestpoints** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/scorecards/users/{userId}** (2 changes)

* Description was changed for parameter workday
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/scorecards/users/{userId}/attendance** (3 changes)

* Description was changed for parameter startWorkday
* Description was changed for parameter endWorkday
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/scorecards/users/{userId}/points/trends** (3 changes)

* Description was changed for parameter startWorkday
* Description was changed for parameter endWorkday
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/scorecards/users/{userId}/points/alltime** (2 changes)

* Description was changed for parameter endWorkday
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/scorecards/users/{userId}/values/trends** (3 changes)

* Description was changed for parameter startWorkday
* Description was changed for parameter endWorkday
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/scorecards/users/points/average** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/scorecards/users/values/average** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/scorecards/users/values/trends** (3 changes)

* Description was changed for parameter startWorkday
* Description was changed for parameter endWorkday
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/identityproviders/okta** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/identityproviders/okta** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/identityproviders/okta** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/trunks** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/publish** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/report** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/train** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/detect** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/outofoffice** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/users/{userId}/outofoffice** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows/datatables/{datatableId}/export/jobs/{exportJobId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/fax/documents/{documentId}/content** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/uploads/publicassets/images** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/contentmanagement/usage** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/voicemail/me/policy** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/voicemail/me/policy** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/responsemanagement/responses** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/responsemanagement/responses** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/routing/conversations/{conversationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/{conversationId}/recordingmetadata/{recordingId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/me** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/managementunits** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/voicemail/me/messages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/generationresults** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/generate** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/planninggroups** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/data** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/copy** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/languages/{languageId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/languages/{languageId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/sequences** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/sequences** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/analytics/reporting/exports** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/analytics/reporting/exports** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/contentmanagement/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/contentmanagement/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/prompts/{promptId}/resources** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/architect/prompts/{promptId}/resources** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/dependencytracking/consumingresources** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/move** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/alerting/interactionstats/alerts** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/orgauthorization/pairings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/journey/actiontemplates/{actionTemplateId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/journey/actiontemplates/{actionTemplateId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/journey/actiontemplates/{actionTemplateId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/availablelanguages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/speech/dialogflow/agents/{agentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/voicemail/search** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/voicemail/search** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/routingstatus** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/users/{userId}/routingstatus** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/prompts/{promptId}/resources/{languageCode}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/architect/prompts/{promptId}/resources/{languageCode}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/architect/prompts/{promptId}/resources/{languageCode}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/architect/prompts/{promptId}/resources/{languageCode}/audio** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/authorization/roles/{roleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/authorization/roles/{roleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/authorization/roles/{roleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/authorization/roles/{roleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/authorization/roles/{roleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/languages/translations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/languages/translations/builtin** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/languages/translations/organization** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/languages/translations/users/{userId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/sites/{siteId}/numberplans/{numberPlanId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/orgauthorization/trustees/{trusteeOrgId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/orgauthorization/trustees/{trusteeOrgId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/orgauthorization/trustees/{trusteeOrgId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/faxes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/recording/crossplatform/mediaretentionpolicies/{policyId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/recording/crossplatform/mediaretentionpolicies/{policyId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/recording/crossplatform/mediaretentionpolicies/{policyId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/recording/crossplatform/mediaretentionpolicies/{policyId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/organizations/limits/changerequests** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/analytics/bots/aggregates/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/skills** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/routing/skills** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/conversations/{conversationId}/participants/{participantId}/codes/{addCommunicationCode}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/trunkswithrecording** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/learning/modules/{moduleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/learning/modules/{moduleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/learning/modules/{moduleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/learning/modules/{moduleId}/versions/{versionId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/learning/modules** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/learning/modules** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/learning/modules/{moduleId}/publish** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/dependencytracking/deletedresourceconsumers** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/routing/queues/{queueId}/users/{memberId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/routing/queues/{queueId}/users/{memberId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/journey/actiontargets** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/dependencytracking** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/historicaladherencequery** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes/{activityCodeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes/{activityCodeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes/{activityCodeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/greetings/defaults** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/greetings/defaults** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/analytics/journeys/aggregates/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/metricdefinitions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/outbound/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/authorization/roles** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/authorization/roles** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows/milestones** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/flows/milestones** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/webchat/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/webchat/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/webchat/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/{edgeId}/trunks** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/systempresences** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gdpr/subjects** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/queues/{queueId}/members** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/routing/queues/{queueId}/members** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/routing/queues/{queueId}/members** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/speech/lex/bot/alias/{aliasId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/sms/addresses** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/routing/sms/addresses** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/orphanrecordings/{orphanId}/media** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/contentmanagement/shares/{shareId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/contentmanagement/shares/{shareId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/scan/relationships** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/phonebasesettings/template** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/systemprompts/{promptId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/architect/systemprompts/{promptId}/history** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/systemprompts/{promptId}/history/{historyId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/authorization/divisionspermitted/paged/{subjectId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/recording/localkeys/settings/{settingsId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/recording/localkeys/settings/{settingsId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/coaching/appointments** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/coaching/appointments** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/learning/assignments/{assignmentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/learning/assignments/{assignmentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/learning/assignments/{assignmentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/learning/assignments** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/learning/assignments** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/learning/assignments/me** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/learning/assignments/bulkadd** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/learning/assignments/bulkremove** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows/datatables/{datatableId}/rows/{rowId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/flows/datatables/{datatableId}/rows/{rowId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/flows/datatables/{datatableId}/rows/{rowId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/contactlists/{contactListId}/importstatus** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/trustors** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/contactlistfilters** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/contactlistfilters** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/mobiledevices/{deviceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/mobiledevices/{deviceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/mobiledevices/{deviceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/chats/{conversationId}/messages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/credentials** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/integrations/credentials** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/contentmanagement/status** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scripts/published/{scriptId}/variables** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows/datatables/{datatableId}/import/jobs** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/flows/datatables/{datatableId}/import/jobs** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/journey/actionmaps** (2 changes)

* Description was changed for parameter actionMapIds
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/journey/actionmaps** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/logicalinterfaces** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/fax/documents** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/chats/{conversationId}/communications/{communicationId}/typing** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/chats/{conversationId}/communications/{communicationId}/messages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/messagingcampaigns/divisionviews** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scripts** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/speechandtextanalytics/programs/publishjobs** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/flows/datatables/{datatableId}/export/jobs** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/profile** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/queues/{queueId}/wrapupcodes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/routing/queues/{queueId}/wrapupcodes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/routing/queues/{queueId}/wrapupcodes/{codeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/schedules/campaigns/{campaignId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/outbound/schedules/campaigns/{campaignId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/outbound/schedules/campaigns/{campaignId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/license/definitions/{licenseId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/responsemanagement/responses/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/oauth/scopes/{scopeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/tokens/{userId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/sites/{siteId}/numberplans** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/telephony/providers/edges/sites/{siteId}/numberplans** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/forms/surveys/{formId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/quality/forms/surveys/{formId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/quality/forms/surveys/{formId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/quality/forms/surveys/{formId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/scan/organizations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/greetings/{greetingId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/greetings/{greetingId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/greetings/{greetingId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/{edgeId}/metrics** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/{edgeId}/diagnostic/ping** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/{edgeId}/diagnostic/ping** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/{edgeId}/diagnostic/tracepath** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/{edgeId}/diagnostic/tracepath** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/{edgeId}/diagnostic/nslookup** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/{edgeId}/diagnostic/nslookup** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/{edgeId}/diagnostic/route** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/{edgeId}/diagnostic/route** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/speechandtextanalytics/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/speechandtextanalytics/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/profileskills** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/users/{userId}/profileskills** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/campaigns/divisionviews** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/rulesets/{ruleSetId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/outbound/rulesets/{ruleSetId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/outbound/rulesets/{ruleSetId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/dependencytracking/build** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/architect/dependencytracking/build** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/metrics/{metricId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/gamification/metrics/{metricId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/phones/{phoneId}** (2 changes)

* Response 408 was changed from Request Timeout to The client did not produce a request within the server timeout limit. This can be caused by a slow network connection and/or large payloads.
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/telephony/providers/edges/phones/{phoneId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/telephony/providers/edges/phones/{phoneId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/ivrs** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/architect/ivrs** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/groups/{groupId}/individuals** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scim/v2/schemas** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scim/v2/schemas/{schemaId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roledivisions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/users** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/forms/{formId}/versions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/{edgeId}/unpair** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/contacts/schemas/{schemaId}/versions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/users/presences/bulk** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/oauth/authorizations/{clientId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/contentmanagement/documents/{documentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/contentmanagement/documents/{documentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/contentmanagement/documents/{documentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/outbound/campaigns/{campaignId}/agents/{userId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/campaigns** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/campaigns** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/geolocations/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/geolocations/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/quality/surveys/scoring** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/knowledge/knowledgebases** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/knowledge/knowledgebases** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/recording/batchrequests/{jobId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/recording/batchrequests** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/license/definitions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scim/v2/serviceproviderconfig** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/flows** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/flows** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scim/resourcetypes/{resourceType}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scim/resourcetypes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/speechandtextanalytics/topics/{topicId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/speechandtextanalytics/topics/{topicId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/speechandtextanalytics/topics/{topicId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/scorecards** (2 changes)

* Description was changed for parameter workday
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/scorecards/bestpoints** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/scorecards/attendance** (3 changes)

* Description was changed for parameter startWorkday
* Description was changed for parameter endWorkday
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/scorecards/points/alltime** (2 changes)

* Description was changed for parameter endWorkday
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/scorecards/points/average** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/scorecards/points/trends** (3 changes)

* Description was changed for parameter startWorkday
* Description was changed for parameter endWorkday
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/scorecards/values/trends** (3 changes)

* Description was changed for parameter startWorkday
* Description was changed for parameter endWorkday
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/scorecards/values/average** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/dnclists/{dncListId}/phonenumbers** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/organizations/whitelist** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/organizations/whitelist** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/email/domains/{domainName}/routes/{routeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/routing/email/domains/{domainName}/routes/{routeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/routing/email/domains/{domainName}/routes/{routeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/queues/me** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/coaching/scheduleslots/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/configuration/schemas/edges/vnext/{schemaCategory}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/sms/phonenumbers** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/routing/sms/phonenumbers** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/users/me/password** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/languages/{languageId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/routing/languages/{languageId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/presencedefinitions/{presenceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/presencedefinitions/{presenceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/presencedefinitions/{presenceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/email/domains** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/routing/email/domains** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/messagingcampaigns/{messagingCampaignId}/progress** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/messagingcampaigns/{messagingCampaignId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/outbound/messagingcampaigns/{messagingCampaignId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/outbound/messagingcampaigns/{messagingCampaignId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/oauth/clients/{clientId}/usage/summary** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/oauth/clients/{clientId}/usage/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/groups/{groupId}/greetings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/groups/{groupId}/greetings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scim/serviceproviderconfig** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/authorization/permissions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions/{secureSessionId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/analytics/reporting/schedules** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/analytics/reporting/schedules** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scim/schemas** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scim/schemas/{schemaId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/{integrationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/integrations/{integrationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/integrations/{integrationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/greetings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/users/{userId}/greetings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/fax/summary** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows/executions/{flowExecutionId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/contacts** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/phones/template** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/agentschedules/search** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/forms/evaluations/{formId}/versions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/integrations/workforcemanagement/vendorconnection** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/recording/mediaretentionpolicies/{policyId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/recording/mediaretentionpolicies/{policyId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/recording/mediaretentionpolicies/{policyId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/recording/mediaretentionpolicies/{policyId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/authorization/divisionspermitted/me** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/speech/tts/engines/{engineId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/trunkbasesettings/availablemetabases** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/presences/purecloud** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/users/{userId}/presences/purecloud** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/presences/microsoftteams** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/presences/zoomphone** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/presences/{sourceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/users/{userId}/presences/{sourceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/{conversationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/{conversationId}/disconnect** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/{conversationId}/assign** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/sms/availablephonenumbers** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/locations/{locationId}/sublocations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/locations/{locationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/locations/{locationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/locations/{locationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/users/{userId}/station/associatedstation/{stationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/users/{userId}/station/associatedstation** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/users/{userId}/station/defaultstation/{stationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/users/{userId}/station/defaultstation** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/station** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/certificateauthorities** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/certificateauthorities** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/routingskills** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/users/{userId}/routingskills** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/users/{userId}/routingskills/bulk** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/users/{userId}/routingskills/bulk** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/users/{userId}/routingskills/{skillId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/users/{userId}/routingskills/{skillId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/orgauthorization/trustees/{trusteeOrgId}/users** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/orgauthorization/trustees/{trusteeOrgId}/users** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/sites/{siteId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/telephony/providers/edges/sites/{siteId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/telephony/providers/edges/sites/{siteId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/greetings/{greetingId}/media** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/publishedforms/surveys/{formId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/contacts/schemas/{schemaId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/externalcontacts/contacts/schemas/{schemaId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/externalcontacts/contacts/schemas/{schemaId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/organizations/schemas/{schemaId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/externalcontacts/organizations/schemas/{schemaId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/authorization/divisionspermitted/paged/me** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/learning/rules/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/usage/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/quality/evaluations/scoring** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/license/toggles/{featureName}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/license/toggles/{featureName}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/forms/surveys** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/quality/forms/surveys** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/extensions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/managementunits/divisionviews** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/schedules/{scheduleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/architect/schedules/{scheduleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/architect/schedules/{scheduleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/adherence** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/schedules** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/schedulegroups** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/architect/schedulegroups** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/groups** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/groups** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/didpools/dids** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/forms/evaluations/{formId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/quality/forms/evaluations/{formId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/quality/forms/evaluations/{formId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows/{flowId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/flows/{flowId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/flows/{flowId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows/{flowId}/latestconfiguration** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows/{flowId}/history/{historyId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/speechandtextanalytics/programs/general/jobs** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/externalcontacts/bulk/organizations/update** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/externalcontacts/bulk/organizations/add** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/externalcontacts/bulk/organizations/remove** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/externalcontacts/bulk/organizations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/analytics/conversations/transcripts/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/dataextensions/coretypes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/{conversationId}/participants/{participantId}/callbacks** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/{conversationId}/participants/{participantId}/attributes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/{conversationId}/participants/{participantId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/conversations/{conversationId}/participants/{participantId}/flaggedreason** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/conversations/{conversationId}/participants/{participantId}/flaggedreason** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/{conversationId}/participants/{participantId}/replace** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/{conversationId}/participants/{participantId}/digits** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows/milestones/divisionviews** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/actions/{actionId}/draft** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/integrations/actions/{actionId}/draft** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/integrations/actions/{actionId}/draft** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/integrations/actions/{actionId}/draft** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/actions/{actionId}/draft/schemas/{fileName}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/actions/{actionId}/draft/templates/{fileName}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/integrations/actions/{actionId}/draft/publish** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/actions/{actionId}/draft/validation** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/integrations/actions/{actionId}/draft/test** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/trunkbasesettings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/trunkbasesettings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/messagingcampaigns/divisionviews/{messagingCampaignId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/contentmanagement/shared/{sharedId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/recording/localkeys** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/campaignrules** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/campaignrules** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/recordings/screensessions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/recordings/screensessions/{recordingSessionId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/{edgeId}/softwareversions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/publishedforms/{formId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/scan/contacts** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/actions/drafts** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/integrations/actions/drafts** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/contentmanagement/securityprofiles/{securityProfileId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/analytics/reporting/exports/metadata** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/contactlists/{contactListId}/clear** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/wrapupcodes/{codeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/routing/wrapupcodes/{codeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/routing/wrapupcodes/{codeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/lines/{lineId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/speechandtextanalytics/topics/publishjobs** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/adherence** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/authorization/divisions/{divisionId}/grants** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/messaging/facebook/app** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces/{interfaceId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/queues/{queueId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/routing/queues/{queueId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/routing/queues/{queueId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/credentials/types** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/contentmanagement/shares** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/contentmanagement/shares** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/emergencygroups/{emergencyGroupId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/architect/emergencygroups/{emergencyGroupId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/architect/emergencygroups/{emergencyGroupId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scripts/published/{scriptId}/pages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/messaging/integrations/facebook/{integrationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/conversations/messaging/integrations/facebook/{integrationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/messaging/integrations/facebook/{integrationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/uploads/recordings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/orphanrecordings/{orphanId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/orphanrecordings/{orphanId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/orphanrecordings/{orphanId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/{conversationId}/recordingmetadata** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/messaging/integrations/facebook** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/messaging/integrations/facebook** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/search** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/state/bulk** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId}/match** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/schedulingjobs/{jobId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/contentmanagement/documents/{documentId}/content** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/contentmanagement/documents/{documentId}/content** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/analytics/surveys/aggregates/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/voicemail/policy** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/voicemail/policy** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/tokens/me** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/tokens/me** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/{edgeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/telephony/providers/edges/{edgeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/telephony/providers/edges/{edgeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/publishedforms/evaluations/{formId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/groups/{groupId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/groups/{groupId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/groups/{groupId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/alerting/interactionstats/alerts/unread** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/journey/actionmaps/{actionMapId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/journey/actionmaps/{actionMapId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/journey/actionmaps/{actionMapId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/schedulegroups/{scheduleGroupId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/architect/schedulegroups/{scheduleGroupId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/architect/schedulegroups/{scheduleGroupId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/webchat/guest/conversations/{conversationId}/members** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/callforwarding** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/users/{userId}/callforwarding** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/users/{userId}/callforwarding** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/messaging/stickers/{messengerType}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/eventlog/{eventId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/publishedforms/evaluations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/quality/publishedforms/evaluations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/mobiledevices** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/mobiledevices** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/schedules** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/architect/schedules** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/orgauthorization/pairings/{pairingId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/organizations/schemas** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/externalcontacts/organizations/schemas** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/search** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/search** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/search/suggest** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/search/suggest** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/systemprompts/{promptId}/resources** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/architect/systemprompts/{promptId}/resources** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/coaching/appointments/{appointmentId}/statuses** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/coaching/appointments/{appointmentId}/status** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/license/organization** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/favorites** (2 changes)

* Summary was changed
* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/adjacents** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/superiors** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/directreports** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/identityproviders/cic** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/identityproviders/cic** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/identityproviders/cic** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/flows/divisionviews** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/externalcontacts/contacts** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/externalcontacts/contacts** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scripts/{scriptId}/pages** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/dependencytracking/types/{typeId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/message/recipients** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/notifications/channels** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/notifications/channels** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/recording/recordingkeys** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/recording/recordingkeys** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/externalcontacts/bulk/contacts/add** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/externalcontacts/bulk/contacts/remove** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/externalcontacts/bulk/contacts** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/externalcontacts/bulk/contacts/update** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/surveys/scorable** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/quality/surveys/scorable** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/contactlists/{contactListId}/contacts** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/outbound/contactlists/{contactListId}/contacts** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/{edgeId}/logs/jobs** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/gamification/profiles/{performanceProfileId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/gamification/profiles/{performanceProfileId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scim/users/{userId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/scim/users/{userId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/scim/users/{userId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/scim/users/{userId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scim/users** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/scim/users** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/users/development/activities/aggregates/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/campaigns/all/divisionviews** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/contactlistfilters/preview** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scim/v2/groups** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scim/v2/groups/{groupId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/scim/v2/groups/{groupId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/scim/v2/groups/{groupId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/businessunits** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/stations/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/stations/settings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/sites** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/sites** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/recording/jobs/{jobId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/recording/jobs/{jobId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/recording/jobs/{jobId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/authorization/roles/default** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/authorization/roles/default** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/organizations/limits/docs** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/organizations/limits/namespaces** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/organizations/limits/namespaces/{namespaceName}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/contentmanagement/securityprofiles** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/calls** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/calls** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/monitor** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/calls/history** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}/attributes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/calls/{conversationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/calls/{conversationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/calls/{conversationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/calls/maximumconferenceparties** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/coach** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/calls/{conversationId}/participants** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/uuidata** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/replace** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/quality/calibrations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/quality/calibrations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/activitycodes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/groups/{groupId}/greetings/defaults** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/groups/{groupId}/greetings/defaults** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}/roles** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/users/{userId}/roles** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/coaching/notifications** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/users/{userId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/users/{userId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/users/{userId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/users/{userId}/invite** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/campaigns/divisionviews/{campaignId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/scripts/{scriptId}/export** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/analytics/reporting/schedules/{scheduleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/analytics/reporting/schedules/{scheduleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/analytics/reporting/schedules/{scheduleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/utilization** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/routing/utilization** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/routing/utilization** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/speech/lex/bots** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings/{trainingId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings/{trainingId}/promote** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/historicaldata/validate** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/fieldconfig** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/audits/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/audits/query/{transactionId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/audits/query/{transactionId}/results** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/audits/query/realtime** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/audits/query/servicemapping** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/audits/query/realtime/servicemapping** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/architect/dependencytracking/updatedresourceconsumers** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/analytics/reporting/schedules/{scheduleId}/history/latest** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/analytics/reporting/schedules/{scheduleId}/history** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/events/{eventId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/coaching/appointments/aggregates/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/campaignrules/{campaignRuleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/outbound/campaignrules/{campaignRuleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/outbound/campaignrules/{campaignRuleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/contactlists/{contactListId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/outbound/contactlists/{contactListId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/outbound/contactlists/{contactListId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/contactlists/{contactListId}/timezonemappingpreview** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/chats/{conversationId}/messages/{messageId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/coaching/appointments/{appointmentId}/annotations/{annotationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/coaching/appointments/{appointmentId}/annotations/{annotationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/coaching/appointments/{appointmentId}/annotations/{annotationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/trunkbasesettings/template** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/analytics/transcripts/aggregates/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/speechandtextanalytics/dialects** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/queues/{queueId}/estimatedwaittime** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/historicaldata/importstatus** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/intraday/planninggroups** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/intraday** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/speechandtextanalytics/programs/{programId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/speechandtextanalytics/programs/{programId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/speechandtextanalytics/programs/{programId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/organizations/limits/changerequests/{requestId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/conversations/messaging/integrations/twitter/{integrationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/conversations/messaging/integrations/twitter/{integrationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/conversations/messaging/integrations/twitter/{integrationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/stations/{stationId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/stations/{stationId}/associateduser** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/flows/executions** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/outbound/contactlists/divisionviews** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/authorization/products** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/integrations/speech/lex/bot/{botId}/aliases** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/greetings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/greetings** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/addressvalidation** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/locations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/locations** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/voicemail/userpolicies/{userId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/voicemail/userpolicies/{userId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/adhocmodelingjobs/{jobId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/telephony/providers/edges/edgegroups** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/telephony/providers/edges/edgegroups** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/configuration/schemas/edges/vnext** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/copy** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/generationresults** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/headcountforecast** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/agentschedules/query** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/history/agents/{agentId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/reschedule** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/generate** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scim/v2/users/{userId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/scim/v2/users/{userId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/scim/v2/users/{userId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PATCH /api/v2/scim/v2/users/{userId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/scim/v2/users** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/scim/v2/users** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/routing/email/domains/{domainName}/routes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/routing/email/domains/{domainName}/routes** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/outbound/messagingcampaigns/progress** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/userrecordings/{recordingId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**PUT /api/v2/userrecordings/{recordingId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**DELETE /api/v2/userrecordings/{recordingId}** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**GET /api/v2/documentation/search** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds

**POST /api/v2/documentation/search** (1 change)

* Response 429 was changed from Rate limit exceeded the maximum [%s] requests within [%s] seconds to Rate limit exceeded the maximum. Retry the request in [%s] seconds
