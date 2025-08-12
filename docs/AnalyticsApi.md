# AnalyticsApi

# platformClient.AnalyticsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAnalyticsActionsAggregatesJob**](AnalyticsApi#deleteAnalyticsActionsAggregatesJob) | **DELETE** /api/v2/analytics/actions/aggregates/jobs/{jobId} | Delete/cancel an async request for action aggregates
[**deleteAnalyticsAgentcopilotsAggregatesJob**](AnalyticsApi#deleteAnalyticsAgentcopilotsAggregatesJob) | **DELETE** /api/v2/analytics/agentcopilots/aggregates/jobs/{jobId} | Delete/cancel an async request for agent copilot aggregates
[**deleteAnalyticsBotsAggregatesJob**](AnalyticsApi#deleteAnalyticsBotsAggregatesJob) | **DELETE** /api/v2/analytics/bots/aggregates/jobs/{jobId} | Delete/cancel an async request for bot aggregates
[**deleteAnalyticsConversationsAggregatesJob**](AnalyticsApi#deleteAnalyticsConversationsAggregatesJob) | **DELETE** /api/v2/analytics/conversations/aggregates/jobs/{jobId} | Delete/cancel an async request for conversation aggregates
[**deleteAnalyticsConversationsDetailsJob**](AnalyticsApi#deleteAnalyticsConversationsDetailsJob) | **DELETE** /api/v2/analytics/conversations/details/jobs/{jobId} | Delete/cancel an async details job
[**deleteAnalyticsEvaluationsAggregatesJob**](AnalyticsApi#deleteAnalyticsEvaluationsAggregatesJob) | **DELETE** /api/v2/analytics/evaluations/aggregates/jobs/{jobId} | Delete/cancel an async request for evaluation aggregates
[**deleteAnalyticsFlowexecutionsAggregatesJob**](AnalyticsApi#deleteAnalyticsFlowexecutionsAggregatesJob) | **DELETE** /api/v2/analytics/flowexecutions/aggregates/jobs/{jobId} | Delete/cancel an async request for flow execution aggregates
[**deleteAnalyticsFlowsAggregatesJob**](AnalyticsApi#deleteAnalyticsFlowsAggregatesJob) | **DELETE** /api/v2/analytics/flows/aggregates/jobs/{jobId} | Delete/cancel an async request for flow aggregates
[**deleteAnalyticsJourneysAggregatesJob**](AnalyticsApi#deleteAnalyticsJourneysAggregatesJob) | **DELETE** /api/v2/analytics/journeys/aggregates/jobs/{jobId} | Delete/cancel an async request for journey aggregates
[**deleteAnalyticsKnowledgeAggregatesJob**](AnalyticsApi#deleteAnalyticsKnowledgeAggregatesJob) | **DELETE** /api/v2/analytics/knowledge/aggregates/jobs/{jobId} | Delete/cancel an async request for knowledge aggregates
[**deleteAnalyticsResolutionsAggregatesJob**](AnalyticsApi#deleteAnalyticsResolutionsAggregatesJob) | **DELETE** /api/v2/analytics/resolutions/aggregates/jobs/{jobId} | Delete/cancel an async request for resolution aggregates
[**deleteAnalyticsSummariesAggregatesJob**](AnalyticsApi#deleteAnalyticsSummariesAggregatesJob) | **DELETE** /api/v2/analytics/summaries/aggregates/jobs/{jobId} | Delete/cancel an async request for summary aggregates
[**deleteAnalyticsSurveysAggregatesJob**](AnalyticsApi#deleteAnalyticsSurveysAggregatesJob) | **DELETE** /api/v2/analytics/surveys/aggregates/jobs/{jobId} | Delete/cancel an async request for survey aggregates
[**deleteAnalyticsTaskmanagementAggregatesJob**](AnalyticsApi#deleteAnalyticsTaskmanagementAggregatesJob) | **DELETE** /api/v2/analytics/taskmanagement/aggregates/jobs/{jobId} | Delete/cancel an async request for task management aggregates
[**deleteAnalyticsTranscriptsAggregatesJob**](AnalyticsApi#deleteAnalyticsTranscriptsAggregatesJob) | **DELETE** /api/v2/analytics/transcripts/aggregates/jobs/{jobId} | Delete/cancel an async request for transcript aggregates
[**deleteAnalyticsUsersAggregatesJob**](AnalyticsApi#deleteAnalyticsUsersAggregatesJob) | **DELETE** /api/v2/analytics/users/aggregates/jobs/{jobId} | Delete/cancel an async request for user aggregates
[**deleteAnalyticsUsersDetailsJob**](AnalyticsApi#deleteAnalyticsUsersDetailsJob) | **DELETE** /api/v2/analytics/users/details/jobs/{jobId} | Delete/cancel an async request
[**getAnalyticsActionsAggregatesJob**](AnalyticsApi#getAnalyticsActionsAggregatesJob) | **GET** /api/v2/analytics/actions/aggregates/jobs/{jobId} | Get status for async query for action aggregates
[**getAnalyticsActionsAggregatesJobResults**](AnalyticsApi#getAnalyticsActionsAggregatesJobResults) | **GET** /api/v2/analytics/actions/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsAgentStatus**](AnalyticsApi#getAnalyticsAgentStatus) | **GET** /api/v2/analytics/agents/{userId}/status | Get an agent and their active sessions by user ID
[**getAnalyticsAgentcopilotsAggregatesJob**](AnalyticsApi#getAnalyticsAgentcopilotsAggregatesJob) | **GET** /api/v2/analytics/agentcopilots/aggregates/jobs/{jobId} | Get status for async query for agent copilot aggregates
[**getAnalyticsAgentcopilotsAggregatesJobResults**](AnalyticsApi#getAnalyticsAgentcopilotsAggregatesJobResults) | **GET** /api/v2/analytics/agentcopilots/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsBotflowDivisionsReportingturns**](AnalyticsApi#getAnalyticsBotflowDivisionsReportingturns) | **GET** /api/v2/analytics/botflows/{botFlowId}/divisions/reportingturns | Get Reporting Turns (division aware).
[**getAnalyticsBotflowReportingturns**](AnalyticsApi#getAnalyticsBotflowReportingturns) | **GET** /api/v2/analytics/botflows/{botFlowId}/reportingturns | Get Reporting Turns.
[**getAnalyticsBotflowSessions**](AnalyticsApi#getAnalyticsBotflowSessions) | **GET** /api/v2/analytics/botflows/{botFlowId}/sessions | Get Bot Flow Sessions.
[**getAnalyticsBotsAggregatesJob**](AnalyticsApi#getAnalyticsBotsAggregatesJob) | **GET** /api/v2/analytics/bots/aggregates/jobs/{jobId} | Get status for async query for bot aggregates
[**getAnalyticsBotsAggregatesJobResults**](AnalyticsApi#getAnalyticsBotsAggregatesJobResults) | **GET** /api/v2/analytics/bots/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsConversationDetails**](AnalyticsApi#getAnalyticsConversationDetails) | **GET** /api/v2/analytics/conversations/{conversationId}/details | Get a conversation by id
[**getAnalyticsConversationsAggregatesJob**](AnalyticsApi#getAnalyticsConversationsAggregatesJob) | **GET** /api/v2/analytics/conversations/aggregates/jobs/{jobId} | Get status for async query for conversation aggregates
[**getAnalyticsConversationsAggregatesJobResults**](AnalyticsApi#getAnalyticsConversationsAggregatesJobResults) | **GET** /api/v2/analytics/conversations/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsConversationsDetails**](AnalyticsApi#getAnalyticsConversationsDetails) | **GET** /api/v2/analytics/conversations/details | Gets multiple conversations by id
[**getAnalyticsConversationsDetailsJob**](AnalyticsApi#getAnalyticsConversationsDetailsJob) | **GET** /api/v2/analytics/conversations/details/jobs/{jobId} | Get status for async query for conversation details
[**getAnalyticsConversationsDetailsJobResults**](AnalyticsApi#getAnalyticsConversationsDetailsJobResults) | **GET** /api/v2/analytics/conversations/details/jobs/{jobId}/results | Fetch a page of results for an async details job
[**getAnalyticsConversationsDetailsJobsAvailability**](AnalyticsApi#getAnalyticsConversationsDetailsJobsAvailability) | **GET** /api/v2/analytics/conversations/details/jobs/availability | Lookup the datalake availability date and time
[**getAnalyticsDataretentionSettings**](AnalyticsApi#getAnalyticsDataretentionSettings) | **GET** /api/v2/analytics/dataretention/settings | Get analytics data retention setting
[**getAnalyticsEvaluationsAggregatesJob**](AnalyticsApi#getAnalyticsEvaluationsAggregatesJob) | **GET** /api/v2/analytics/evaluations/aggregates/jobs/{jobId} | Get status for async query for evaluation aggregates
[**getAnalyticsEvaluationsAggregatesJobResults**](AnalyticsApi#getAnalyticsEvaluationsAggregatesJobResults) | **GET** /api/v2/analytics/evaluations/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsFlowexecutionsAggregatesJob**](AnalyticsApi#getAnalyticsFlowexecutionsAggregatesJob) | **GET** /api/v2/analytics/flowexecutions/aggregates/jobs/{jobId} | Get status for async query for flow execution aggregates
[**getAnalyticsFlowexecutionsAggregatesJobResults**](AnalyticsApi#getAnalyticsFlowexecutionsAggregatesJobResults) | **GET** /api/v2/analytics/flowexecutions/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsFlowsAggregatesJob**](AnalyticsApi#getAnalyticsFlowsAggregatesJob) | **GET** /api/v2/analytics/flows/aggregates/jobs/{jobId} | Get status for async query for Flow aggregates
[**getAnalyticsFlowsAggregatesJobResults**](AnalyticsApi#getAnalyticsFlowsAggregatesJobResults) | **GET** /api/v2/analytics/flows/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsJourneysAggregatesJob**](AnalyticsApi#getAnalyticsJourneysAggregatesJob) | **GET** /api/v2/analytics/journeys/aggregates/jobs/{jobId} | Get status for async query for journey aggregates
[**getAnalyticsJourneysAggregatesJobResults**](AnalyticsApi#getAnalyticsJourneysAggregatesJobResults) | **GET** /api/v2/analytics/journeys/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsKnowledgeAggregatesJob**](AnalyticsApi#getAnalyticsKnowledgeAggregatesJob) | **GET** /api/v2/analytics/knowledge/aggregates/jobs/{jobId} | Get status for async query for knowledge aggregates
[**getAnalyticsKnowledgeAggregatesJobResults**](AnalyticsApi#getAnalyticsKnowledgeAggregatesJobResults) | **GET** /api/v2/analytics/knowledge/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsReportingDashboardsUser**](AnalyticsApi#getAnalyticsReportingDashboardsUser) | **GET** /api/v2/analytics/reporting/dashboards/users/{userId} | Get dashboards summary for a user
[**getAnalyticsReportingDashboardsUsers**](AnalyticsApi#getAnalyticsReportingDashboardsUsers) | **GET** /api/v2/analytics/reporting/dashboards/users | Get dashboards summary for users in a org
[**getAnalyticsReportingExports**](AnalyticsApi#getAnalyticsReportingExports) | **GET** /api/v2/analytics/reporting/exports | Get all view export requests for a user
[**getAnalyticsReportingExportsMetadata**](AnalyticsApi#getAnalyticsReportingExportsMetadata) | **GET** /api/v2/analytics/reporting/exports/metadata | Get all export metadata
[**getAnalyticsReportingSettings**](AnalyticsApi#getAnalyticsReportingSettings) | **GET** /api/v2/analytics/reporting/settings | Get AnalyticsReportingSettings for an organization
[**getAnalyticsReportingSettingsDashboardsQuery**](AnalyticsApi#getAnalyticsReportingSettingsDashboardsQuery) | **GET** /api/v2/analytics/reporting/settings/dashboards/query | Get list of dashboard configurations
[**getAnalyticsReportingSettingsUserDashboards**](AnalyticsApi#getAnalyticsReportingSettingsUserDashboards) | **GET** /api/v2/analytics/reporting/settings/users/{userId}/dashboards | Get list of dashboards for an user
[**getAnalyticsResolutionsAggregatesJob**](AnalyticsApi#getAnalyticsResolutionsAggregatesJob) | **GET** /api/v2/analytics/resolutions/aggregates/jobs/{jobId} | Get status for async query for resolution aggregates
[**getAnalyticsResolutionsAggregatesJobResults**](AnalyticsApi#getAnalyticsResolutionsAggregatesJobResults) | **GET** /api/v2/analytics/resolutions/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsSummariesAggregatesJob**](AnalyticsApi#getAnalyticsSummariesAggregatesJob) | **GET** /api/v2/analytics/summaries/aggregates/jobs/{jobId} | Get status for async query for summary aggregates
[**getAnalyticsSummariesAggregatesJobResults**](AnalyticsApi#getAnalyticsSummariesAggregatesJobResults) | **GET** /api/v2/analytics/summaries/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsSurveysAggregatesJob**](AnalyticsApi#getAnalyticsSurveysAggregatesJob) | **GET** /api/v2/analytics/surveys/aggregates/jobs/{jobId} | Get status for async query for survey aggregates
[**getAnalyticsSurveysAggregatesJobResults**](AnalyticsApi#getAnalyticsSurveysAggregatesJobResults) | **GET** /api/v2/analytics/surveys/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsTaskmanagementAggregatesJob**](AnalyticsApi#getAnalyticsTaskmanagementAggregatesJob) | **GET** /api/v2/analytics/taskmanagement/aggregates/jobs/{jobId} | Get status for async query for task management aggregates
[**getAnalyticsTaskmanagementAggregatesJobResults**](AnalyticsApi#getAnalyticsTaskmanagementAggregatesJobResults) | **GET** /api/v2/analytics/taskmanagement/aggregates/jobs/{jobId}/results | Fetch a page of results for an async task management query
[**getAnalyticsTranscriptsAggregatesJob**](AnalyticsApi#getAnalyticsTranscriptsAggregatesJob) | **GET** /api/v2/analytics/transcripts/aggregates/jobs/{jobId} | Get status for async query for transcript aggregates
[**getAnalyticsTranscriptsAggregatesJobResults**](AnalyticsApi#getAnalyticsTranscriptsAggregatesJobResults) | **GET** /api/v2/analytics/transcripts/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsUsersAggregatesJob**](AnalyticsApi#getAnalyticsUsersAggregatesJob) | **GET** /api/v2/analytics/users/aggregates/jobs/{jobId} | Get status for async query for user aggregates
[**getAnalyticsUsersAggregatesJobResults**](AnalyticsApi#getAnalyticsUsersAggregatesJobResults) | **GET** /api/v2/analytics/users/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsUsersDetailsJob**](AnalyticsApi#getAnalyticsUsersDetailsJob) | **GET** /api/v2/analytics/users/details/jobs/{jobId} | Get status for async query for user details
[**getAnalyticsUsersDetailsJobResults**](AnalyticsApi#getAnalyticsUsersDetailsJobResults) | **GET** /api/v2/analytics/users/details/jobs/{jobId}/results | Fetch a page of results for an async query
[**getAnalyticsUsersDetailsJobsAvailability**](AnalyticsApi#getAnalyticsUsersDetailsJobsAvailability) | **GET** /api/v2/analytics/users/details/jobs/availability | Lookup the datalake availability date and time
[**patchAnalyticsReportingSettings**](AnalyticsApi#patchAnalyticsReportingSettings) | **PATCH** /api/v2/analytics/reporting/settings | Patch AnalyticsReportingSettings values for an organization
[**postAnalyticsActionsAggregatesJobs**](AnalyticsApi#postAnalyticsActionsAggregatesJobs) | **POST** /api/v2/analytics/actions/aggregates/jobs | Query for action aggregates asynchronously
[**postAnalyticsActionsAggregatesQuery**](AnalyticsApi#postAnalyticsActionsAggregatesQuery) | **POST** /api/v2/analytics/actions/aggregates/query | Query for action aggregates
[**postAnalyticsAgentcopilotsAggregatesJobs**](AnalyticsApi#postAnalyticsAgentcopilotsAggregatesJobs) | **POST** /api/v2/analytics/agentcopilots/aggregates/jobs | Query for agent copilot aggregates asynchronously
[**postAnalyticsAgentcopilotsAggregatesQuery**](AnalyticsApi#postAnalyticsAgentcopilotsAggregatesQuery) | **POST** /api/v2/analytics/agentcopilots/aggregates/query | Query for agent copilot aggregates
[**postAnalyticsAgentsStatusCounts**](AnalyticsApi#postAnalyticsAgentsStatusCounts) | **POST** /api/v2/analytics/agents/status/counts | Count agents by different groupings
[**postAnalyticsAgentsStatusQuery**](AnalyticsApi#postAnalyticsAgentsStatusQuery) | **POST** /api/v2/analytics/agents/status/query | Retrieve the top 50 agents matching the query filters
[**postAnalyticsBotsAggregatesJobs**](AnalyticsApi#postAnalyticsBotsAggregatesJobs) | **POST** /api/v2/analytics/bots/aggregates/jobs | Query for bot aggregates asynchronously
[**postAnalyticsBotsAggregatesQuery**](AnalyticsApi#postAnalyticsBotsAggregatesQuery) | **POST** /api/v2/analytics/bots/aggregates/query | Query for bot aggregates
[**postAnalyticsConversationDetailsProperties**](AnalyticsApi#postAnalyticsConversationDetailsProperties) | **POST** /api/v2/analytics/conversations/{conversationId}/details/properties | Index conversation properties
[**postAnalyticsConversationsActivityQuery**](AnalyticsApi#postAnalyticsConversationsActivityQuery) | **POST** /api/v2/analytics/conversations/activity/query | Query for conversation activity observations
[**postAnalyticsConversationsAggregatesJobs**](AnalyticsApi#postAnalyticsConversationsAggregatesJobs) | **POST** /api/v2/analytics/conversations/aggregates/jobs | Query for conversation aggregates asynchronously
[**postAnalyticsConversationsAggregatesQuery**](AnalyticsApi#postAnalyticsConversationsAggregatesQuery) | **POST** /api/v2/analytics/conversations/aggregates/query | Query for conversation aggregates
[**postAnalyticsConversationsDetailsJobs**](AnalyticsApi#postAnalyticsConversationsDetailsJobs) | **POST** /api/v2/analytics/conversations/details/jobs | Query for conversation details asynchronously
[**postAnalyticsConversationsDetailsQuery**](AnalyticsApi#postAnalyticsConversationsDetailsQuery) | **POST** /api/v2/analytics/conversations/details/query | Query for conversation details
[**postAnalyticsEvaluationsAggregatesJobs**](AnalyticsApi#postAnalyticsEvaluationsAggregatesJobs) | **POST** /api/v2/analytics/evaluations/aggregates/jobs | Query for evaluation aggregates asynchronously
[**postAnalyticsEvaluationsAggregatesQuery**](AnalyticsApi#postAnalyticsEvaluationsAggregatesQuery) | **POST** /api/v2/analytics/evaluations/aggregates/query | Query for evaluation aggregates
[**postAnalyticsFlowexecutionsAggregatesJobs**](AnalyticsApi#postAnalyticsFlowexecutionsAggregatesJobs) | **POST** /api/v2/analytics/flowexecutions/aggregates/jobs | Query for flow execution aggregates asynchronously
[**postAnalyticsFlowexecutionsAggregatesQuery**](AnalyticsApi#postAnalyticsFlowexecutionsAggregatesQuery) | **POST** /api/v2/analytics/flowexecutions/aggregates/query | Query for flow execution aggregates
[**postAnalyticsFlowsActivityQuery**](AnalyticsApi#postAnalyticsFlowsActivityQuery) | **POST** /api/v2/analytics/flows/activity/query | Query for flow activity observations
[**postAnalyticsFlowsAggregatesJobs**](AnalyticsApi#postAnalyticsFlowsAggregatesJobs) | **POST** /api/v2/analytics/flows/aggregates/jobs | Query for flow aggregates asynchronously
[**postAnalyticsFlowsAggregatesQuery**](AnalyticsApi#postAnalyticsFlowsAggregatesQuery) | **POST** /api/v2/analytics/flows/aggregates/query | Query for flow aggregates
[**postAnalyticsFlowsObservationsQuery**](AnalyticsApi#postAnalyticsFlowsObservationsQuery) | **POST** /api/v2/analytics/flows/observations/query | Query for flow observations
[**postAnalyticsJourneysAggregatesJobs**](AnalyticsApi#postAnalyticsJourneysAggregatesJobs) | **POST** /api/v2/analytics/journeys/aggregates/jobs | Query for journey aggregates asynchronously
[**postAnalyticsJourneysAggregatesQuery**](AnalyticsApi#postAnalyticsJourneysAggregatesQuery) | **POST** /api/v2/analytics/journeys/aggregates/query | Query for journey aggregates
[**postAnalyticsKnowledgeAggregatesJobs**](AnalyticsApi#postAnalyticsKnowledgeAggregatesJobs) | **POST** /api/v2/analytics/knowledge/aggregates/jobs | Query for knowledge aggregates asynchronously
[**postAnalyticsKnowledgeAggregatesQuery**](AnalyticsApi#postAnalyticsKnowledgeAggregatesQuery) | **POST** /api/v2/analytics/knowledge/aggregates/query | Query for knowledge aggregates
[**postAnalyticsQueuesObservationsQuery**](AnalyticsApi#postAnalyticsQueuesObservationsQuery) | **POST** /api/v2/analytics/queues/observations/query | Query for queue observations
[**postAnalyticsRatelimitsAggregatesQuery**](AnalyticsApi#postAnalyticsRatelimitsAggregatesQuery) | **POST** /api/v2/analytics/ratelimits/aggregates/query | Query for limits rate limit aggregates. Data populated when limits reach 90% of the maximum. Not a source of truth for limits hit but a best effort estimate.
[**postAnalyticsReportingDashboardsUsersBulkRemove**](AnalyticsApi#postAnalyticsReportingDashboardsUsersBulkRemove) | **POST** /api/v2/analytics/reporting/dashboards/users/bulk/remove | Bulk soft delete dashboards owned by other user(s)
[**postAnalyticsReportingExports**](AnalyticsApi#postAnalyticsReportingExports) | **POST** /api/v2/analytics/reporting/exports | Generate a view export request
[**postAnalyticsReportingSettingsDashboardsBulkRemove**](AnalyticsApi#postAnalyticsReportingSettingsDashboardsBulkRemove) | **POST** /api/v2/analytics/reporting/settings/dashboards/bulk/remove | Bulk soft delete dashboard configurations
[**postAnalyticsReportingSettingsDashboardsQuery**](AnalyticsApi#postAnalyticsReportingSettingsDashboardsQuery) | **POST** /api/v2/analytics/reporting/settings/dashboards/query | Query dashboard configurations
[**postAnalyticsResolutionsAggregatesJobs**](AnalyticsApi#postAnalyticsResolutionsAggregatesJobs) | **POST** /api/v2/analytics/resolutions/aggregates/jobs | Query for resolution aggregates asynchronously
[**postAnalyticsResolutionsAggregatesQuery**](AnalyticsApi#postAnalyticsResolutionsAggregatesQuery) | **POST** /api/v2/analytics/resolutions/aggregates/query | Query for resolution aggregates
[**postAnalyticsRoutingActivityQuery**](AnalyticsApi#postAnalyticsRoutingActivityQuery) | **POST** /api/v2/analytics/routing/activity/query | Query for user activity observations
[**postAnalyticsSummariesAggregatesJobs**](AnalyticsApi#postAnalyticsSummariesAggregatesJobs) | **POST** /api/v2/analytics/summaries/aggregates/jobs | Query for summary aggregates asynchronously
[**postAnalyticsSummariesAggregatesQuery**](AnalyticsApi#postAnalyticsSummariesAggregatesQuery) | **POST** /api/v2/analytics/summaries/aggregates/query | Query for summary aggregates
[**postAnalyticsSurveysAggregatesJobs**](AnalyticsApi#postAnalyticsSurveysAggregatesJobs) | **POST** /api/v2/analytics/surveys/aggregates/jobs | Query for survey aggregates asynchronously
[**postAnalyticsSurveysAggregatesQuery**](AnalyticsApi#postAnalyticsSurveysAggregatesQuery) | **POST** /api/v2/analytics/surveys/aggregates/query | Query for survey aggregates
[**postAnalyticsTaskmanagementAggregatesJobs**](AnalyticsApi#postAnalyticsTaskmanagementAggregatesJobs) | **POST** /api/v2/analytics/taskmanagement/aggregates/jobs | Query for task management aggregates asynchronously
[**postAnalyticsTaskmanagementAggregatesQuery**](AnalyticsApi#postAnalyticsTaskmanagementAggregatesQuery) | **POST** /api/v2/analytics/taskmanagement/aggregates/query | Query for task management aggregates
[**postAnalyticsTeamsActivityQuery**](AnalyticsApi#postAnalyticsTeamsActivityQuery) | **POST** /api/v2/analytics/teams/activity/query | Query for team activity observations
[**postAnalyticsTranscriptsAggregatesJobs**](AnalyticsApi#postAnalyticsTranscriptsAggregatesJobs) | **POST** /api/v2/analytics/transcripts/aggregates/jobs | Query for transcript aggregates asynchronously
[**postAnalyticsTranscriptsAggregatesQuery**](AnalyticsApi#postAnalyticsTranscriptsAggregatesQuery) | **POST** /api/v2/analytics/transcripts/aggregates/query | Query for transcript aggregates
[**postAnalyticsUsersActivityQuery**](AnalyticsApi#postAnalyticsUsersActivityQuery) | **POST** /api/v2/analytics/users/activity/query | Query for user activity observations
[**postAnalyticsUsersAggregatesJobs**](AnalyticsApi#postAnalyticsUsersAggregatesJobs) | **POST** /api/v2/analytics/users/aggregates/jobs | Query for user aggregates asynchronously
[**postAnalyticsUsersAggregatesQuery**](AnalyticsApi#postAnalyticsUsersAggregatesQuery) | **POST** /api/v2/analytics/users/aggregates/query | Query for user aggregates
[**postAnalyticsUsersDetailsJobs**](AnalyticsApi#postAnalyticsUsersDetailsJobs) | **POST** /api/v2/analytics/users/details/jobs | Query for user details asynchronously
[**postAnalyticsUsersDetailsQuery**](AnalyticsApi#postAnalyticsUsersDetailsQuery) | **POST** /api/v2/analytics/users/details/query | Query for user details
[**postAnalyticsUsersObservationsQuery**](AnalyticsApi#postAnalyticsUsersObservationsQuery) | **POST** /api/v2/analytics/users/observations/query | Query for user observations
[**putAnalyticsDataretentionSettings**](AnalyticsApi#putAnalyticsDataretentionSettings) | **PUT** /api/v2/analytics/dataretention/settings | Update analytics data retention setting



## deleteAnalyticsActionsAggregatesJob

> void deleteAnalyticsActionsAggregatesJob(jobId)


DELETE /api/v2/analytics/actions/aggregates/jobs/{jobId}

Delete/cancel an async request for action aggregates

deleteAnalyticsActionsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsActionsAggregatesJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsActionsAggregatesJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsActionsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteAnalyticsAgentcopilotsAggregatesJob

> void deleteAnalyticsAgentcopilotsAggregatesJob(jobId)


DELETE /api/v2/analytics/agentcopilots/aggregates/jobs/{jobId}

Delete/cancel an async request for agent copilot aggregates

deleteAnalyticsAgentcopilotsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:agentCopilotAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsAgentcopilotsAggregatesJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsAgentcopilotsAggregatesJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsAgentcopilotsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteAnalyticsBotsAggregatesJob

> void deleteAnalyticsBotsAggregatesJob(jobId)


DELETE /api/v2/analytics/bots/aggregates/jobs/{jobId}

Delete/cancel an async request for bot aggregates

deleteAnalyticsBotsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:botAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsBotsAggregatesJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsBotsAggregatesJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsBotsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteAnalyticsConversationsAggregatesJob

> void deleteAnalyticsConversationsAggregatesJob(jobId)


DELETE /api/v2/analytics/conversations/aggregates/jobs/{jobId}

Delete/cancel an async request for conversation aggregates

deleteAnalyticsConversationsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:conversationAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsConversationsAggregatesJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsConversationsAggregatesJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsConversationsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteAnalyticsConversationsDetailsJob

> void deleteAnalyticsConversationsDetailsJob(jobId)


DELETE /api/v2/analytics/conversations/details/jobs/{jobId}

Delete/cancel an async details job

Requires ANY permissions:

* analytics:conversationDetail:view
* analytics:agentConversationDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsConversationsDetailsJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsConversationsDetailsJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsConversationsDetailsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteAnalyticsEvaluationsAggregatesJob

> void deleteAnalyticsEvaluationsAggregatesJob(jobId)


DELETE /api/v2/analytics/evaluations/aggregates/jobs/{jobId}

Delete/cancel an async request for evaluation aggregates

deleteAnalyticsEvaluationsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:evaluationAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsEvaluationsAggregatesJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsEvaluationsAggregatesJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsEvaluationsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteAnalyticsFlowexecutionsAggregatesJob

> void deleteAnalyticsFlowexecutionsAggregatesJob(jobId)


DELETE /api/v2/analytics/flowexecutions/aggregates/jobs/{jobId}

Delete/cancel an async request for flow execution aggregates

deleteAnalyticsFlowexecutionsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:flowExecutionAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsFlowexecutionsAggregatesJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsFlowexecutionsAggregatesJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsFlowexecutionsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteAnalyticsFlowsAggregatesJob

> void deleteAnalyticsFlowsAggregatesJob(jobId)


DELETE /api/v2/analytics/flows/aggregates/jobs/{jobId}

Delete/cancel an async request for flow aggregates

deleteAnalyticsFlowsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:flowAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsFlowsAggregatesJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsFlowsAggregatesJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsFlowsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteAnalyticsJourneysAggregatesJob

> void deleteAnalyticsJourneysAggregatesJob(jobId)


DELETE /api/v2/analytics/journeys/aggregates/jobs/{jobId}

Delete/cancel an async request for journey aggregates

deleteAnalyticsJourneysAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:journeyAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsJourneysAggregatesJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsJourneysAggregatesJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsJourneysAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteAnalyticsKnowledgeAggregatesJob

> void deleteAnalyticsKnowledgeAggregatesJob(jobId)


DELETE /api/v2/analytics/knowledge/aggregates/jobs/{jobId}

Delete/cancel an async request for knowledge aggregates

deleteAnalyticsKnowledgeAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:knowledgeAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsKnowledgeAggregatesJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsKnowledgeAggregatesJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsKnowledgeAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteAnalyticsResolutionsAggregatesJob

> void deleteAnalyticsResolutionsAggregatesJob(jobId)


DELETE /api/v2/analytics/resolutions/aggregates/jobs/{jobId}

Delete/cancel an async request for resolution aggregates

deleteAnalyticsResolutionsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:resolutionAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsResolutionsAggregatesJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsResolutionsAggregatesJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsResolutionsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteAnalyticsSummariesAggregatesJob

> void deleteAnalyticsSummariesAggregatesJob(jobId)


DELETE /api/v2/analytics/summaries/aggregates/jobs/{jobId}

Delete/cancel an async request for summary aggregates

deleteAnalyticsSummariesAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:summaryAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsSummariesAggregatesJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsSummariesAggregatesJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsSummariesAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteAnalyticsSurveysAggregatesJob

> void deleteAnalyticsSurveysAggregatesJob(jobId)


DELETE /api/v2/analytics/surveys/aggregates/jobs/{jobId}

Delete/cancel an async request for survey aggregates

deleteAnalyticsSurveysAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:surveyAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsSurveysAggregatesJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsSurveysAggregatesJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsSurveysAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteAnalyticsTaskmanagementAggregatesJob

> void deleteAnalyticsTaskmanagementAggregatesJob(jobId)


DELETE /api/v2/analytics/taskmanagement/aggregates/jobs/{jobId}

Delete/cancel an async request for task management aggregates

deleteAnalyticsTaskmanagementAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:taskManagementAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsTaskmanagementAggregatesJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsTaskmanagementAggregatesJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsTaskmanagementAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteAnalyticsTranscriptsAggregatesJob

> void deleteAnalyticsTranscriptsAggregatesJob(jobId)


DELETE /api/v2/analytics/transcripts/aggregates/jobs/{jobId}

Delete/cancel an async request for transcript aggregates

deleteAnalyticsTranscriptsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:speechAndTextAnalyticsAggregates:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsTranscriptsAggregatesJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsTranscriptsAggregatesJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsTranscriptsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteAnalyticsUsersAggregatesJob

> void deleteAnalyticsUsersAggregatesJob(jobId)


DELETE /api/v2/analytics/users/aggregates/jobs/{jobId}

Delete/cancel an async request for user aggregates

deleteAnalyticsUsersAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:userAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsUsersAggregatesJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsUsersAggregatesJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsUsersAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteAnalyticsUsersDetailsJob

> void deleteAnalyticsUsersDetailsJob(jobId)


DELETE /api/v2/analytics/users/details/jobs/{jobId}

Delete/cancel an async request

Requires ANY permissions:

* analytics:userDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsUsersDetailsJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsUsersDetailsJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsUsersDetailsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## getAnalyticsActionsAggregatesJob

> AsyncQueryStatus getAnalyticsActionsAggregatesJob(jobId)


GET /api/v2/analytics/actions/aggregates/jobs/{jobId}

Get status for async query for action aggregates

getAnalyticsActionsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsActionsAggregatesJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsActionsAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsActionsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsActionsAggregatesJobResults

> ActionAsyncAggregateQueryResponse getAnalyticsActionsAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/actions/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

getAnalyticsActionsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getAnalyticsActionsAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsActionsAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsActionsAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |

### Return type

**ActionAsyncAggregateQueryResponse**


## getAnalyticsAgentStatus

> AnalyticsAgentStateAgentResponse getAnalyticsAgentStatus(userId)


GET /api/v2/analytics/agents/{userId}/status

Get an agent and their active sessions by user ID

Requires ANY permissions:

* analytics:agentState:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let userId = "userId_example"; // String | userId

apiInstance.getAnalyticsAgentStatus(userId)
  .then((data) => {
    console.log(`getAnalyticsAgentStatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsAgentStatus');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | userId |  |

### Return type

**AnalyticsAgentStateAgentResponse**


## getAnalyticsAgentcopilotsAggregatesJob

> AsyncQueryStatus getAnalyticsAgentcopilotsAggregatesJob(jobId)


GET /api/v2/analytics/agentcopilots/aggregates/jobs/{jobId}

Get status for async query for agent copilot aggregates

getAnalyticsAgentcopilotsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:agentCopilotAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsAgentcopilotsAggregatesJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsAgentcopilotsAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsAgentcopilotsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsAgentcopilotsAggregatesJobResults

> AgentCopilotAsyncAggregateQueryResponse getAnalyticsAgentcopilotsAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/agentcopilots/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

getAnalyticsAgentcopilotsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:agentCopilotAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getAnalyticsAgentcopilotsAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsAgentcopilotsAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsAgentcopilotsAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |

### Return type

**AgentCopilotAsyncAggregateQueryResponse**


## getAnalyticsBotflowDivisionsReportingturns

> ReportingTurnsResponse getAnalyticsBotflowDivisionsReportingturns(botFlowId, opts)


GET /api/v2/analytics/botflows/{botFlowId}/divisions/reportingturns

Get Reporting Turns (division aware).

Returns the reporting turns for the specified flow, filtered by the clients divisions and grouped by session, in reverse chronological order from the date the session was created, with the reporting turns from the most recent session appearing at the start of the list. It is expected that the client will URL encode the request URI once only. For pagination, clients should keep sending requests using the value of nextUri in the response, until its no longer present, only then have all items have been returned. The nextUri value in the response is already URL encoded (so it doesnt need to be encoded again). Note: resources returned by this endpoint are not persisted indefinitely, as they are deleted after approximately, but not before, 10 days.

Requires ANY permissions:

* analytics:botFlowDivisionAwareReportingTurn:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let botFlowId = "botFlowId_example"; // String | ID of the bot flow.
let opts = { 
  'after': "after_example", // String | The cursor that points to the ID of the last item in the list of entities that has been returned.
  'pageSize': "50", // String | Max number of entities to return. Maximum of 250
  'interval': 2023-07-17T08:15:44.586Z/2023-07-26T09:22:33.111Z, // String | Date range filter based on the date the individual resources were completed. UTC is the default if no TZ is supplied, however alternate timezones can be used e.g: '2022-11-22T09:11:11.111+08:00/2022-11-30T07:17:44.586-07'. . Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'actionId': "actionId_example", // String | Optional action ID to get the reporting turns associated to a particular flow action
  'sessionId': "sessionId_example", // String | Optional session ID to get the reporting turns for a particular session. Specifying a session ID alongside an action ID or a language or any ask action results is not allowed.
  'language': en-us, // String | Optional language code to get the reporting turns for a particular language
  'askActionResults': "askActionResults_example" // String | Optional case-insensitive comma separated list of ask action results to filter the reporting turns.
};

apiInstance.getAnalyticsBotflowDivisionsReportingturns(botFlowId, opts)
  .then((data) => {
    console.log(`getAnalyticsBotflowDivisionsReportingturns success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsBotflowDivisionsReportingturns');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **botFlowId** | **String** | ID of the bot flow. |  |
 **after** | **String** | The cursor that points to the ID of the last item in the list of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Max number of entities to return. Maximum of 250 | [optional] [default to 50] |
 **interval** | **String** | Date range filter based on the date the individual resources were completed. UTC is the default if no TZ is supplied, however alternate timezones can be used e.g: '2022-11-22T09:11:11.111+08:00/2022-11-30T07:17:44.586-07'. . Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **actionId** | **String** | Optional action ID to get the reporting turns associated to a particular flow action | [optional]  |
 **sessionId** | **String** | Optional session ID to get the reporting turns for a particular session. Specifying a session ID alongside an action ID or a language or any ask action results is not allowed. | [optional]  |
 **language** | **String** | Optional language code to get the reporting turns for a particular language | [optional]  |
 **askActionResults** | **String** | Optional case-insensitive comma separated list of ask action results to filter the reporting turns. | [optional] <br />**Values**: AgentRequestedByUser, ConfirmationRequired, DisambiguationRequired, Error, ExpressionError, NoInputCollection, NoInputConfirmation, NoInputDisambiguation, NoMatchCollection, NoMatchConfirmation, NoMatchDisambiguation, SuccessCollection, SkippedCollection, SuccessConfirmationNo, SuccessConfirmationYes, SuccessDisambiguation, SuccessDisambiguationNone |

### Return type

**ReportingTurnsResponse**


## getAnalyticsBotflowReportingturns

> ReportingTurnsResponse getAnalyticsBotflowReportingturns(botFlowId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/analytics/botflows/{botFlowId}/reportingturns

Get Reporting Turns.

Deprecated: Please use GET /analytics/botflows/{botFlowId}/divisions/reportingturns instead. Returns the reporting turns grouped by session, in reverse chronological order from the date the session was created, with the reporting turns from the most recent session appearing at the start of the list. It is expected that the client will URL encode the request URI once only. For pagination, clients should keep sending requests using the value of nextUri in the response, until its no longer present, only then have all items have been returned. The nextUri value in the response is already URL encoded (so it doesnt need to be encoded again). Note: resources returned by this endpoint are not persisted indefinitely, as they are deleted after approximately, but not before, 10 days.

Requires ANY permissions:

* analytics:botFlowReportingTurn:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let botFlowId = "botFlowId_example"; // String | ID of the bot flow.
let opts = { 
  'after': "after_example", // String | The cursor that points to the ID of the last item in the list of entities that has been returned.
  'pageSize': "50", // String | Max number of entities to return. Maximum of 250
  'interval': 2023-07-17T08:15:44.586Z/2023-07-26T09:22:33.111Z, // String | Date range filter based on the date the individual resources were completed. UTC is the default if no TZ is supplied, however alternate timezones can be used e.g: '2022-11-22T09:11:11.111+08:00/2022-11-30T07:17:44.586-07'. . Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'actionId': "actionId_example", // String | Optional action ID to get the reporting turns associated to a particular flow action
  'sessionId': "sessionId_example", // String | Optional session ID to get the reporting turns for a particular session. Specifying a session ID alongside an action ID or a language or any ask action results is not allowed.
  'language': en-us, // String | Optional language code to get the reporting turns for a particular language
  'askActionResults': "askActionResults_example" // String | Optional case-insensitive comma separated list of ask action results to filter the reporting turns.
};

apiInstance.getAnalyticsBotflowReportingturns(botFlowId, opts)
  .then((data) => {
    console.log(`getAnalyticsBotflowReportingturns success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsBotflowReportingturns');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **botFlowId** | **String** | ID of the bot flow. |  |
 **after** | **String** | The cursor that points to the ID of the last item in the list of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Max number of entities to return. Maximum of 250 | [optional] [default to 50] |
 **interval** | **String** | Date range filter based on the date the individual resources were completed. UTC is the default if no TZ is supplied, however alternate timezones can be used e.g: '2022-11-22T09:11:11.111+08:00/2022-11-30T07:17:44.586-07'. . Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **actionId** | **String** | Optional action ID to get the reporting turns associated to a particular flow action | [optional]  |
 **sessionId** | **String** | Optional session ID to get the reporting turns for a particular session. Specifying a session ID alongside an action ID or a language or any ask action results is not allowed. | [optional]  |
 **language** | **String** | Optional language code to get the reporting turns for a particular language | [optional]  |
 **askActionResults** | **String** | Optional case-insensitive comma separated list of ask action results to filter the reporting turns. | [optional] <br />**Values**: AgentRequestedByUser, ConfirmationRequired, DisambiguationRequired, Error, ExpressionError, NoInputCollection, NoInputConfirmation, NoInputDisambiguation, NoMatchCollection, NoMatchConfirmation, NoMatchDisambiguation, SuccessCollection, SkippedCollection, SuccessConfirmationNo, SuccessConfirmationYes, SuccessDisambiguation, SuccessDisambiguationNone |

### Return type

**ReportingTurnsResponse**


## getAnalyticsBotflowSessions

> SessionsResponse getAnalyticsBotflowSessions(botFlowId, opts)


GET /api/v2/analytics/botflows/{botFlowId}/sessions

Get Bot Flow Sessions.

Returns the bot flow sessions in reverse chronological order from the date they were created. It is expected that the client will URL encode the request URI once only. For pagination, clients should keep sending requests using the value of nextUri in the response, until its no longer present, only then have all items have been returned. The nextUri value in the response is already URL encoded (so it doesnt need to be encoded again). Note: resources returned by this endpoint are not persisted indefinitely, as they are deleted after approximately, but not before, 10 days.

Requires ANY permissions:

* analytics:botFlowSession:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let botFlowId = "botFlowId_example"; // String | ID of the bot flow.
let opts = { 
  'after': "after_example", // String | The cursor that points to the ID of the last item in the list of entities that has been returned.
  'pageSize': "50", // String | Max number of entities to return. Maximum of 250
  'interval': 2023-07-17T08:15:44.586Z/2023-07-26T09:22:33.111Z, // String | Date range filter based on the date the individual resources were completed. UTC is the default if no TZ is supplied, however alternate timezones can be used e.g: '2022-11-22T09:11:11.111+08:00/2022-11-30T07:17:44.586-07'. . Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'botResultCategories': "botResultCategories_example", // String | Optional case-insensitive comma separated list of Bot Result Categories to filter sessions by.
  'endLanguage': "endLanguage_example" // String | Optional case-insensitive language code to filter sessions by the language the sessions ended in.
};

apiInstance.getAnalyticsBotflowSessions(botFlowId, opts)
  .then((data) => {
    console.log(`getAnalyticsBotflowSessions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsBotflowSessions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **botFlowId** | **String** | ID of the bot flow. |  |
 **after** | **String** | The cursor that points to the ID of the last item in the list of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Max number of entities to return. Maximum of 250 | [optional] [default to 50] |
 **interval** | **String** | Date range filter based on the date the individual resources were completed. UTC is the default if no TZ is supplied, however alternate timezones can be used e.g: '2022-11-22T09:11:11.111+08:00/2022-11-30T07:17:44.586-07'. . Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **botResultCategories** | **String** | Optional case-insensitive comma separated list of Bot Result Categories to filter sessions by. | [optional] <br />**Values**: Unknown, UserExit, BotExit, Error, RecognitionFailure, UserDisconnect, BotDisconnect, SessionExpired, Transfer |
 **endLanguage** | **String** | Optional case-insensitive language code to filter sessions by the language the sessions ended in. | [optional]  |

### Return type

**SessionsResponse**


## getAnalyticsBotsAggregatesJob

> AsyncQueryStatus getAnalyticsBotsAggregatesJob(jobId)


GET /api/v2/analytics/bots/aggregates/jobs/{jobId}

Get status for async query for bot aggregates

getAnalyticsBotsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:botAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsBotsAggregatesJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsBotsAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsBotsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsBotsAggregatesJobResults

> BotAsyncAggregateQueryResponse getAnalyticsBotsAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/bots/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

getAnalyticsBotsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:botAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getAnalyticsBotsAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsBotsAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsBotsAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |

### Return type

**BotAsyncAggregateQueryResponse**


## getAnalyticsConversationDetails

> AnalyticsConversationWithoutAttributes getAnalyticsConversationDetails(conversationId)


GET /api/v2/analytics/conversations/{conversationId}/details

Get a conversation by id

Requires ANY permissions:

* analytics:conversationDetail:view
* analytics:agentConversationDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let conversationId = "conversationId_example"; // String | conversationId

apiInstance.getAnalyticsConversationDetails(conversationId)
  .then((data) => {
    console.log(`getAnalyticsConversationDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsConversationDetails');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |

### Return type

**AnalyticsConversationWithoutAttributes**


## getAnalyticsConversationsAggregatesJob

> AsyncQueryStatus getAnalyticsConversationsAggregatesJob(jobId)


GET /api/v2/analytics/conversations/aggregates/jobs/{jobId}

Get status for async query for conversation aggregates

getAnalyticsConversationsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:conversationAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsConversationsAggregatesJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsConversationsAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsConversationsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsConversationsAggregatesJobResults

> ConversationAsyncAggregateQueryResponse getAnalyticsConversationsAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/conversations/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

getAnalyticsConversationsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:conversationAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getAnalyticsConversationsAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsConversationsAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsConversationsAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |

### Return type

**ConversationAsyncAggregateQueryResponse**


## getAnalyticsConversationsDetails

> AnalyticsConversationWithoutAttributesMultiGetResponse getAnalyticsConversationsDetails(opts)


GET /api/v2/analytics/conversations/details

Gets multiple conversations by id

Requires ANY permissions:

* analytics:conversationDetail:view
* analytics:agentConversationDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let opts = { 
  'id': ["id_example"] // [String] | Comma-separated conversation ids
};

apiInstance.getAnalyticsConversationsDetails(opts)
  .then((data) => {
    console.log(`getAnalyticsConversationsDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsConversationsDetails');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **[String]** | Comma-separated conversation ids | [optional]  |

### Return type

**AnalyticsConversationWithoutAttributesMultiGetResponse**


## getAnalyticsConversationsDetailsJob

> AsyncQueryStatus getAnalyticsConversationsDetailsJob(jobId)


GET /api/v2/analytics/conversations/details/jobs/{jobId}

Get status for async query for conversation details

Requires ANY permissions:

* analytics:conversationDetail:view
* analytics:agentConversationDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsConversationsDetailsJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsConversationsDetailsJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsConversationsDetailsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsConversationsDetailsJobResults

> AnalyticsConversationAsyncQueryResponse getAnalyticsConversationsDetailsJobResults(jobId, opts)


GET /api/v2/analytics/conversations/details/jobs/{jobId}/results

Fetch a page of results for an async details job

Requires ANY permissions:

* analytics:conversationDetail:view
* analytics:agentConversationDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example", // String | Indicates where to resume query results (not required for first page)
  'pageSize': 3.4 // Number | The desired maximum number of results
};

apiInstance.getAnalyticsConversationsDetailsJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsConversationsDetailsJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsConversationsDetailsJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page) | [optional]  |
 **pageSize** | **Number** | The desired maximum number of results | [optional]  |

### Return type

**AnalyticsConversationAsyncQueryResponse**


## getAnalyticsConversationsDetailsJobsAvailability

> DataAvailabilityResponse getAnalyticsConversationsDetailsJobsAvailability()


GET /api/v2/analytics/conversations/details/jobs/availability

Lookup the datalake availability date and time

Requires ANY permissions:

* analytics:conversationDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

apiInstance.getAnalyticsConversationsDetailsJobsAvailability()
  .then((data) => {
    console.log(`getAnalyticsConversationsDetailsJobsAvailability success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsConversationsDetailsJobsAvailability');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**DataAvailabilityResponse**


## getAnalyticsDataretentionSettings

> AnalyticsDataRetentionResponse getAnalyticsDataretentionSettings()


GET /api/v2/analytics/dataretention/settings

Get analytics data retention setting

Requires ANY permissions:

* analytics:dataRetention:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

apiInstance.getAnalyticsDataretentionSettings()
  .then((data) => {
    console.log(`getAnalyticsDataretentionSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsDataretentionSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**AnalyticsDataRetentionResponse**


## getAnalyticsEvaluationsAggregatesJob

> AsyncQueryStatus getAnalyticsEvaluationsAggregatesJob(jobId)


GET /api/v2/analytics/evaluations/aggregates/jobs/{jobId}

Get status for async query for evaluation aggregates

getAnalyticsEvaluationsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:evaluationAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsEvaluationsAggregatesJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsEvaluationsAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsEvaluationsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsEvaluationsAggregatesJobResults

> EvaluationAsyncAggregateQueryResponse getAnalyticsEvaluationsAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/evaluations/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

getAnalyticsEvaluationsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:evaluationAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getAnalyticsEvaluationsAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsEvaluationsAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsEvaluationsAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |

### Return type

**EvaluationAsyncAggregateQueryResponse**


## getAnalyticsFlowexecutionsAggregatesJob

> AsyncQueryStatus getAnalyticsFlowexecutionsAggregatesJob(jobId)


GET /api/v2/analytics/flowexecutions/aggregates/jobs/{jobId}

Get status for async query for flow execution aggregates

getAnalyticsFlowexecutionsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:flowExecutionAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsFlowexecutionsAggregatesJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsFlowexecutionsAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsFlowexecutionsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsFlowexecutionsAggregatesJobResults

> FlowExecutionAsyncAggregateQueryResponse getAnalyticsFlowexecutionsAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/flowexecutions/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

getAnalyticsFlowexecutionsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:flowExecutionAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getAnalyticsFlowexecutionsAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsFlowexecutionsAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsFlowexecutionsAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |

### Return type

**FlowExecutionAsyncAggregateQueryResponse**


## getAnalyticsFlowsAggregatesJob

> AsyncQueryStatus getAnalyticsFlowsAggregatesJob(jobId)


GET /api/v2/analytics/flows/aggregates/jobs/{jobId}

Get status for async query for Flow aggregates

getAnalyticsFlowsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:flowAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsFlowsAggregatesJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsFlowsAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsFlowsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsFlowsAggregatesJobResults

> FlowAsyncAggregateQueryResponse getAnalyticsFlowsAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/flows/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

getAnalyticsFlowsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:flowAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getAnalyticsFlowsAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsFlowsAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsFlowsAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |

### Return type

**FlowAsyncAggregateQueryResponse**


## getAnalyticsJourneysAggregatesJob

> AsyncQueryStatus getAnalyticsJourneysAggregatesJob(jobId)


GET /api/v2/analytics/journeys/aggregates/jobs/{jobId}

Get status for async query for journey aggregates

getAnalyticsJourneysAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:journeyAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsJourneysAggregatesJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsJourneysAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsJourneysAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsJourneysAggregatesJobResults

> JourneyAsyncAggregateQueryResponse getAnalyticsJourneysAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/journeys/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

getAnalyticsJourneysAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:journeyAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getAnalyticsJourneysAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsJourneysAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsJourneysAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |

### Return type

**JourneyAsyncAggregateQueryResponse**


## getAnalyticsKnowledgeAggregatesJob

> AsyncQueryStatus getAnalyticsKnowledgeAggregatesJob(jobId)


GET /api/v2/analytics/knowledge/aggregates/jobs/{jobId}

Get status for async query for knowledge aggregates

getAnalyticsKnowledgeAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:knowledgeAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsKnowledgeAggregatesJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsKnowledgeAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsKnowledgeAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsKnowledgeAggregatesJobResults

> KnowledgeAsyncAggregateQueryResponse getAnalyticsKnowledgeAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/knowledge/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

getAnalyticsKnowledgeAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:knowledgeAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getAnalyticsKnowledgeAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsKnowledgeAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsKnowledgeAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |

### Return type

**KnowledgeAsyncAggregateQueryResponse**


## getAnalyticsReportingDashboardsUser

> DashboardUser getAnalyticsReportingDashboardsUser(userId)


GET /api/v2/analytics/reporting/dashboards/users/{userId}

Get dashboards summary for a user

Requires ALL permissions:

* analytics:dashboardConfigurations:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let userId = "userId_example"; // String | User ID

apiInstance.getAnalyticsReportingDashboardsUser(userId)
  .then((data) => {
    console.log(`getAnalyticsReportingDashboardsUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingDashboardsUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |

### Return type

**DashboardUser**


## getAnalyticsReportingDashboardsUsers

> DashboardUserListing getAnalyticsReportingDashboardsUsers(opts)


GET /api/v2/analytics/reporting/dashboards/users

Get dashboards summary for users in a org

Requires ALL permissions:

* analytics:dashboardConfigurations:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let opts = { 
  'sortBy': "asc", // String | 
  'pageNumber': 1, // Number | 
  'pageSize': 25, // Number | 
  'id': ["id_example"], // [String] | A list of user IDs to fetch by bulk
  'state': "state_example", // String | Only list users of this state
  'deletedOnly': true // Boolean | Only list users with deleted dashboards
};

apiInstance.getAnalyticsReportingDashboardsUsers(opts)
  .then((data) => {
    console.log(`getAnalyticsReportingDashboardsUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingDashboardsUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sortBy** | **String** |  | [optional] [default to asc] |
 **pageNumber** | **Number** |  | [optional] [default to 1] |
 **pageSize** | **Number** |  | [optional] [default to 25] |
 **id** | **[String]** | A list of user IDs to fetch by bulk | [optional]  |
 **state** | **String** | Only list users of this state | [optional] <br />**Values**: active, inactive |
 **deletedOnly** | **Boolean** | Only list users with deleted dashboards | [optional]  |

### Return type

**DashboardUserListing**


## getAnalyticsReportingExports

> ReportingExportJobListing getAnalyticsReportingExports(opts)


GET /api/v2/analytics/reporting/exports

Get all view export requests for a user

Requires ALL permissions:

* analytics:dataExport:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getAnalyticsReportingExports(opts)
  .then((data) => {
    console.log(`getAnalyticsReportingExports success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingExports');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |

### Return type

**ReportingExportJobListing**


## getAnalyticsReportingExportsMetadata

> ReportingExportMetadataJobListing getAnalyticsReportingExportsMetadata()


GET /api/v2/analytics/reporting/exports/metadata

Get all export metadata

Requires ALL permissions:

* analytics:dataExport:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

apiInstance.getAnalyticsReportingExportsMetadata()
  .then((data) => {
    console.log(`getAnalyticsReportingExportsMetadata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingExportsMetadata');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**ReportingExportMetadataJobListing**


## getAnalyticsReportingSettings

> AnalyticsReportingSettings getAnalyticsReportingSettings()


GET /api/v2/analytics/reporting/settings

Get AnalyticsReportingSettings for an organization

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

apiInstance.getAnalyticsReportingSettings()
  .then((data) => {
    console.log(`getAnalyticsReportingSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**AnalyticsReportingSettings**


## getAnalyticsReportingSettingsDashboardsQuery

> DashboardConfigurationListing getAnalyticsReportingSettingsDashboardsQuery(dashboardType, dashboardAccessFilter, opts)


GET /api/v2/analytics/reporting/settings/dashboards/query

Get list of dashboard configurations

Requires ALL permissions:

* analytics:dashboardConfigurations:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let dashboardType = "dashboardType_example"; // String | List dashboard of given type
let dashboardAccessFilter = "dashboardAccessFilter_example"; // String | Filter dashboard based on the owner of dashboard
let opts = { 
  'name': "name_example", // String | name of the dashboard
  'dashboardState': "Active", // String | List dashboard of given state
  'sortBy': "desc", // String | 
  'pageNumber': 1, // Number | 
  'pageSize': 9 // Number | 
};

apiInstance.getAnalyticsReportingSettingsDashboardsQuery(dashboardType, dashboardAccessFilter, opts)
  .then((data) => {
    console.log(`getAnalyticsReportingSettingsDashboardsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingSettingsDashboardsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dashboardType** | **String** | List dashboard of given type | <br />**Values**: All, Public, Private, Shared, Favorites |
 **dashboardAccessFilter** | **String** | Filter dashboard based on the owner of dashboard | <br />**Values**: OwnedByMe, OwnedByAnyone, NotOwnedByMe |
 **name** | **String** | name of the dashboard | [optional]  |
 **dashboardState** | **String** | List dashboard of given state | [optional] [default to Active]<br />**Values**: Active, Deleted |
 **sortBy** | **String** |  | [optional] [default to desc] |
 **pageNumber** | **Number** |  | [optional] [default to 1] |
 **pageSize** | **Number** |  | [optional] [default to 9] |

### Return type

**DashboardConfigurationListing**


## getAnalyticsReportingSettingsUserDashboards

> DashboardConfigurationListing getAnalyticsReportingSettingsUserDashboards(userId, opts)


GET /api/v2/analytics/reporting/settings/users/{userId}/dashboards

Get list of dashboards for an user

Requires ALL permissions:

* analytics:dashboardConfigurations:viewPrivate

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'sortBy': "asc", // String | 
  'pageNumber': 1, // Number | 
  'pageSize': 50, // Number | 
  'publicOnly': true, // Boolean | If true, retrieve only public dashboards
  'favoriteOnly': true, // Boolean | If true, retrieve only favorite dashboards
  'deletedOnly': true, // Boolean | If true, retrieve only deleted dashboards that are still recoverable
  'name': "name_example" // String | retrieve dashboards that match with given name
};

apiInstance.getAnalyticsReportingSettingsUserDashboards(userId, opts)
  .then((data) => {
    console.log(`getAnalyticsReportingSettingsUserDashboards success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingSettingsUserDashboards');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **sortBy** | **String** |  | [optional] [default to asc] |
 **pageNumber** | **Number** |  | [optional] [default to 1] |
 **pageSize** | **Number** |  | [optional] [default to 50] |
 **publicOnly** | **Boolean** | If true, retrieve only public dashboards | [optional]  |
 **favoriteOnly** | **Boolean** | If true, retrieve only favorite dashboards | [optional]  |
 **deletedOnly** | **Boolean** | If true, retrieve only deleted dashboards that are still recoverable | [optional]  |
 **name** | **String** | retrieve dashboards that match with given name | [optional]  |

### Return type

**DashboardConfigurationListing**


## getAnalyticsResolutionsAggregatesJob

> AsyncQueryStatus getAnalyticsResolutionsAggregatesJob(jobId)


GET /api/v2/analytics/resolutions/aggregates/jobs/{jobId}

Get status for async query for resolution aggregates

getAnalyticsResolutionsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:resolutionAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsResolutionsAggregatesJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsResolutionsAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsResolutionsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsResolutionsAggregatesJobResults

> ResolutionAsyncAggregateQueryResponse getAnalyticsResolutionsAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/resolutions/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

getAnalyticsResolutionsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:resolutionAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getAnalyticsResolutionsAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsResolutionsAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsResolutionsAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |

### Return type

**ResolutionAsyncAggregateQueryResponse**


## getAnalyticsSummariesAggregatesJob

> AsyncQueryStatus getAnalyticsSummariesAggregatesJob(jobId)


GET /api/v2/analytics/summaries/aggregates/jobs/{jobId}

Get status for async query for summary aggregates

getAnalyticsSummariesAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:summaryAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsSummariesAggregatesJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsSummariesAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsSummariesAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsSummariesAggregatesJobResults

> SummaryAsyncAggregateQueryResponse getAnalyticsSummariesAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/summaries/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

getAnalyticsSummariesAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:summaryAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getAnalyticsSummariesAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsSummariesAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsSummariesAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |

### Return type

**SummaryAsyncAggregateQueryResponse**


## getAnalyticsSurveysAggregatesJob

> AsyncQueryStatus getAnalyticsSurveysAggregatesJob(jobId)


GET /api/v2/analytics/surveys/aggregates/jobs/{jobId}

Get status for async query for survey aggregates

getAnalyticsSurveysAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:surveyAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsSurveysAggregatesJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsSurveysAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsSurveysAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsSurveysAggregatesJobResults

> SurveyAsyncAggregateQueryResponse getAnalyticsSurveysAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/surveys/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

getAnalyticsSurveysAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:surveyAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getAnalyticsSurveysAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsSurveysAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsSurveysAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |

### Return type

**SurveyAsyncAggregateQueryResponse**


## getAnalyticsTaskmanagementAggregatesJob

> AsyncQueryStatus getAnalyticsTaskmanagementAggregatesJob(jobId)


GET /api/v2/analytics/taskmanagement/aggregates/jobs/{jobId}

Get status for async query for task management aggregates

getAnalyticsTaskmanagementAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:taskManagementAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsTaskmanagementAggregatesJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsTaskmanagementAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsTaskmanagementAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsTaskmanagementAggregatesJobResults

> TaskManagementAsyncAggregateQueryResponse getAnalyticsTaskmanagementAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/taskmanagement/aggregates/jobs/{jobId}/results

Fetch a page of results for an async task management query

getAnalyticsTaskmanagementAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:taskManagementAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getAnalyticsTaskmanagementAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsTaskmanagementAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsTaskmanagementAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |

### Return type

**TaskManagementAsyncAggregateQueryResponse**


## getAnalyticsTranscriptsAggregatesJob

> AsyncQueryStatus getAnalyticsTranscriptsAggregatesJob(jobId)


GET /api/v2/analytics/transcripts/aggregates/jobs/{jobId}

Get status for async query for transcript aggregates

getAnalyticsTranscriptsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:speechAndTextAnalyticsAggregates:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsTranscriptsAggregatesJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsTranscriptsAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsTranscriptsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsTranscriptsAggregatesJobResults

> TranscriptAsyncAggregateQueryResponse getAnalyticsTranscriptsAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/transcripts/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

getAnalyticsTranscriptsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:speechAndTextAnalyticsAggregates:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getAnalyticsTranscriptsAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsTranscriptsAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsTranscriptsAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |

### Return type

**TranscriptAsyncAggregateQueryResponse**


## getAnalyticsUsersAggregatesJob

> AsyncQueryStatus getAnalyticsUsersAggregatesJob(jobId)


GET /api/v2/analytics/users/aggregates/jobs/{jobId}

Get status for async query for user aggregates

getAnalyticsUsersAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:userAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsUsersAggregatesJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsUsersAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsUsersAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsUsersAggregatesJobResults

> UserAsyncAggregateQueryResponse getAnalyticsUsersAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/users/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

getAnalyticsUsersAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:userAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getAnalyticsUsersAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsUsersAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsUsersAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |

### Return type

**UserAsyncAggregateQueryResponse**


## getAnalyticsUsersDetailsJob

> AsyncQueryStatus getAnalyticsUsersDetailsJob(jobId)


GET /api/v2/analytics/users/details/jobs/{jobId}

Get status for async query for user details

Requires ANY permissions:

* analytics:userDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsUsersDetailsJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsUsersDetailsJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsUsersDetailsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsUsersDetailsJobResults

> AnalyticsUserDetailsAsyncQueryResponse getAnalyticsUsersDetailsJobResults(jobId, opts)


GET /api/v2/analytics/users/details/jobs/{jobId}/results

Fetch a page of results for an async query

Requires ANY permissions:

* analytics:userDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example", // String | Indicates where to resume query results (not required for first page)
  'pageSize': 3.4 // Number | The desired maximum number of results
};

apiInstance.getAnalyticsUsersDetailsJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsUsersDetailsJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsUsersDetailsJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page) | [optional]  |
 **pageSize** | **Number** | The desired maximum number of results | [optional]  |

### Return type

**AnalyticsUserDetailsAsyncQueryResponse**


## getAnalyticsUsersDetailsJobsAvailability

> DataAvailabilityResponse getAnalyticsUsersDetailsJobsAvailability()


GET /api/v2/analytics/users/details/jobs/availability

Lookup the datalake availability date and time

Requires ANY permissions:

* analytics:userDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

apiInstance.getAnalyticsUsersDetailsJobsAvailability()
  .then((data) => {
    console.log(`getAnalyticsUsersDetailsJobsAvailability success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsUsersDetailsJobsAvailability');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**DataAvailabilityResponse**


## patchAnalyticsReportingSettings

> AnalyticsReportingSettings patchAnalyticsReportingSettings(body)


PATCH /api/v2/analytics/reporting/settings

Patch AnalyticsReportingSettings values for an organization

Requires ANY permissions:

* analytics:reportingSettings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | AnalyticsReportingSettingsRequest

apiInstance.patchAnalyticsReportingSettings(body)
  .then((data) => {
    console.log(`patchAnalyticsReportingSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchAnalyticsReportingSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | AnalyticsReportingSettingsRequest |  |

### Return type

**AnalyticsReportingSettings**


## postAnalyticsActionsAggregatesJobs

> AsyncQueryResponse postAnalyticsActionsAggregatesJobs(body)


POST /api/v2/analytics/actions/aggregates/jobs

Query for action aggregates asynchronously

postAnalyticsActionsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsActionsAggregatesJobs(body)
  .then((data) => {
    console.log(`postAnalyticsActionsAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsActionsAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsActionsAggregatesQuery

> ActionAggregateQueryResponse postAnalyticsActionsAggregatesQuery(body)


POST /api/v2/analytics/actions/aggregates/query

Query for action aggregates

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsActionsAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsActionsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsActionsAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**ActionAggregateQueryResponse**


## postAnalyticsAgentcopilotsAggregatesJobs

> AsyncQueryResponse postAnalyticsAgentcopilotsAggregatesJobs(body)


POST /api/v2/analytics/agentcopilots/aggregates/jobs

Query for agent copilot aggregates asynchronously

postAnalyticsAgentcopilotsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:agentCopilotAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsAgentcopilotsAggregatesJobs(body)
  .then((data) => {
    console.log(`postAnalyticsAgentcopilotsAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsAgentcopilotsAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsAgentcopilotsAggregatesQuery

> AgentCopilotAggregateQueryResponse postAnalyticsAgentcopilotsAggregatesQuery(body)


POST /api/v2/analytics/agentcopilots/aggregates/query

Query for agent copilot aggregates

Requires ANY permissions:

* analytics:agentCopilotAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsAgentcopilotsAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsAgentcopilotsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsAgentcopilotsAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AgentCopilotAggregateQueryResponse**


## postAnalyticsAgentsStatusCounts

> AnalyticsAgentStateCountsResponse postAnalyticsAgentsStatusCounts(body)


POST /api/v2/analytics/agents/status/counts

Count agents by different groupings

Requires ANY permissions:

* analytics:agentState:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsAgentsStatusCounts(body)
  .then((data) => {
    console.log(`postAnalyticsAgentsStatusCounts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsAgentsStatusCounts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AnalyticsAgentStateCountsResponse**


## postAnalyticsAgentsStatusQuery

> AnalyticsAgentStateQueryResponse postAnalyticsAgentsStatusQuery(body)


POST /api/v2/analytics/agents/status/query

Retrieve the top 50 agents matching the query filters

Requires ANY permissions:

* analytics:agentState:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsAgentsStatusQuery(body)
  .then((data) => {
    console.log(`postAnalyticsAgentsStatusQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsAgentsStatusQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AnalyticsAgentStateQueryResponse**


## postAnalyticsBotsAggregatesJobs

> AsyncQueryResponse postAnalyticsBotsAggregatesJobs(body)


POST /api/v2/analytics/bots/aggregates/jobs

Query for bot aggregates asynchronously

postAnalyticsBotsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:botAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsBotsAggregatesJobs(body)
  .then((data) => {
    console.log(`postAnalyticsBotsAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsBotsAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsBotsAggregatesQuery

> BotAggregateQueryResponse postAnalyticsBotsAggregatesQuery(body)


POST /api/v2/analytics/bots/aggregates/query

Query for bot aggregates

Requires ANY permissions:

* analytics:botAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsBotsAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsBotsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsBotsAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**BotAggregateQueryResponse**


## postAnalyticsConversationDetailsProperties

> PropertyIndexRequest postAnalyticsConversationDetailsProperties(conversationId, body)


POST /api/v2/analytics/conversations/{conversationId}/details/properties

Index conversation properties

Requires ANY permissions:

* analytics:conversationProperties:index

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | request

apiInstance.postAnalyticsConversationDetailsProperties(conversationId, body)
  .then((data) => {
    console.log(`postAnalyticsConversationDetailsProperties success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsConversationDetailsProperties');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | request |  |

### Return type

**PropertyIndexRequest**


## postAnalyticsConversationsActivityQuery

> ConversationActivityResponse postAnalyticsConversationsActivityQuery(body, opts)


POST /api/v2/analytics/conversations/activity/query

Query for conversation activity observations

Requires ANY permissions:

* analytics:queueObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query
let opts = { 
  'pageSize': 3.4, // Number | The desired page size
  'pageNumber': 3.4 // Number | The desired page number
};

apiInstance.postAnalyticsConversationsActivityQuery(body, opts)
  .then((data) => {
    console.log(`postAnalyticsConversationsActivityQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsConversationsActivityQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
 **pageSize** | **Number** | The desired page size | [optional]  |
 **pageNumber** | **Number** | The desired page number | [optional]  |

### Return type

**ConversationActivityResponse**


## postAnalyticsConversationsAggregatesJobs

> AsyncQueryResponse postAnalyticsConversationsAggregatesJobs(body)


POST /api/v2/analytics/conversations/aggregates/jobs

Query for conversation aggregates asynchronously

postAnalyticsConversationsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:conversationAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsConversationsAggregatesJobs(body)
  .then((data) => {
    console.log(`postAnalyticsConversationsAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsConversationsAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsConversationsAggregatesQuery

> ConversationAggregateQueryResponse postAnalyticsConversationsAggregatesQuery(body)


POST /api/v2/analytics/conversations/aggregates/query

Query for conversation aggregates

Requires ANY permissions:

* analytics:conversationAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsConversationsAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsConversationsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsConversationsAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**ConversationAggregateQueryResponse**


## postAnalyticsConversationsDetailsJobs

> AsyncQueryResponse postAnalyticsConversationsDetailsJobs(body)


POST /api/v2/analytics/conversations/details/jobs

Query for conversation details asynchronously

Requires ANY permissions:

* analytics:conversationDetail:view
* analytics:agentConversationDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsConversationsDetailsJobs(body)
  .then((data) => {
    console.log(`postAnalyticsConversationsDetailsJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsConversationsDetailsJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsConversationsDetailsQuery

> AnalyticsConversationQueryResponse postAnalyticsConversationsDetailsQuery(body)


POST /api/v2/analytics/conversations/details/query

Query for conversation details

Requires ANY permissions:

* analytics:conversationDetail:view
* analytics:agentConversationDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsConversationsDetailsQuery(body)
  .then((data) => {
    console.log(`postAnalyticsConversationsDetailsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsConversationsDetailsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AnalyticsConversationQueryResponse**


## postAnalyticsEvaluationsAggregatesJobs

> AsyncQueryResponse postAnalyticsEvaluationsAggregatesJobs(body)


POST /api/v2/analytics/evaluations/aggregates/jobs

Query for evaluation aggregates asynchronously

postAnalyticsEvaluationsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:evaluationAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsEvaluationsAggregatesJobs(body)
  .then((data) => {
    console.log(`postAnalyticsEvaluationsAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsEvaluationsAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsEvaluationsAggregatesQuery

> EvaluationAggregateQueryResponse postAnalyticsEvaluationsAggregatesQuery(body)


POST /api/v2/analytics/evaluations/aggregates/query

Query for evaluation aggregates

Requires ANY permissions:

* analytics:evaluationAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsEvaluationsAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsEvaluationsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsEvaluationsAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**EvaluationAggregateQueryResponse**


## postAnalyticsFlowexecutionsAggregatesJobs

> AsyncQueryResponse postAnalyticsFlowexecutionsAggregatesJobs(body)


POST /api/v2/analytics/flowexecutions/aggregates/jobs

Query for flow execution aggregates asynchronously

postAnalyticsFlowexecutionsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:flowExecutionAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsFlowexecutionsAggregatesJobs(body)
  .then((data) => {
    console.log(`postAnalyticsFlowexecutionsAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsFlowexecutionsAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsFlowexecutionsAggregatesQuery

> FlowExecutionAggregateQueryResponse postAnalyticsFlowexecutionsAggregatesQuery(body)


POST /api/v2/analytics/flowexecutions/aggregates/query

Query for flow execution aggregates

Requires ANY permissions:

* analytics:flowExecutionAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsFlowexecutionsAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsFlowexecutionsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsFlowexecutionsAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**FlowExecutionAggregateQueryResponse**


## postAnalyticsFlowsActivityQuery

> FlowActivityResponse postAnalyticsFlowsActivityQuery(body, opts)


POST /api/v2/analytics/flows/activity/query

Query for flow activity observations

Requires ANY permissions:

* analytics:flowObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query
let opts = { 
  'pageSize': 3.4, // Number | The desired page size
  'pageNumber': 3.4 // Number | The desired page number
};

apiInstance.postAnalyticsFlowsActivityQuery(body, opts)
  .then((data) => {
    console.log(`postAnalyticsFlowsActivityQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsFlowsActivityQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
 **pageSize** | **Number** | The desired page size | [optional]  |
 **pageNumber** | **Number** | The desired page number | [optional]  |

### Return type

**FlowActivityResponse**


## postAnalyticsFlowsAggregatesJobs

> AsyncQueryResponse postAnalyticsFlowsAggregatesJobs(body)


POST /api/v2/analytics/flows/aggregates/jobs

Query for flow aggregates asynchronously

postAnalyticsFlowsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:flowAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsFlowsAggregatesJobs(body)
  .then((data) => {
    console.log(`postAnalyticsFlowsAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsFlowsAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsFlowsAggregatesQuery

> FlowAggregateQueryResponse postAnalyticsFlowsAggregatesQuery(body)


POST /api/v2/analytics/flows/aggregates/query

Query for flow aggregates

Requires ANY permissions:

* analytics:flowAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsFlowsAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsFlowsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsFlowsAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**FlowAggregateQueryResponse**


## postAnalyticsFlowsObservationsQuery

> FlowObservationQueryResponse postAnalyticsFlowsObservationsQuery(body)


POST /api/v2/analytics/flows/observations/query

Query for flow observations

Requires ANY permissions:

* analytics:flowObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsFlowsObservationsQuery(body)
  .then((data) => {
    console.log(`postAnalyticsFlowsObservationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsFlowsObservationsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**FlowObservationQueryResponse**


## postAnalyticsJourneysAggregatesJobs

> AsyncQueryResponse postAnalyticsJourneysAggregatesJobs(body)


POST /api/v2/analytics/journeys/aggregates/jobs

Query for journey aggregates asynchronously

postAnalyticsJourneysAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:journeyAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsJourneysAggregatesJobs(body)
  .then((data) => {
    console.log(`postAnalyticsJourneysAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsJourneysAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsJourneysAggregatesQuery

> JourneyAggregateQueryResponse postAnalyticsJourneysAggregatesQuery(body)


POST /api/v2/analytics/journeys/aggregates/query

Query for journey aggregates

Requires ANY permissions:

* analytics:journeyAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsJourneysAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsJourneysAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsJourneysAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**JourneyAggregateQueryResponse**


## postAnalyticsKnowledgeAggregatesJobs

> AsyncQueryResponse postAnalyticsKnowledgeAggregatesJobs(body)


POST /api/v2/analytics/knowledge/aggregates/jobs

Query for knowledge aggregates asynchronously

postAnalyticsKnowledgeAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:knowledgeAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsKnowledgeAggregatesJobs(body)
  .then((data) => {
    console.log(`postAnalyticsKnowledgeAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsKnowledgeAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsKnowledgeAggregatesQuery

> KnowledgeAggregateQueryResponse postAnalyticsKnowledgeAggregatesQuery(body)


POST /api/v2/analytics/knowledge/aggregates/query

Query for knowledge aggregates

Requires ANY permissions:

* analytics:knowledgeAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsKnowledgeAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsKnowledgeAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsKnowledgeAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**KnowledgeAggregateQueryResponse**


## postAnalyticsQueuesObservationsQuery

> QueueObservationQueryResponse postAnalyticsQueuesObservationsQuery(body)


POST /api/v2/analytics/queues/observations/query

Query for queue observations

Requires ANY permissions:

* analytics:queueObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsQueuesObservationsQuery(body)
  .then((data) => {
    console.log(`postAnalyticsQueuesObservationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsQueuesObservationsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**QueueObservationQueryResponse**


## postAnalyticsRatelimitsAggregatesQuery

> RateLimitAggregateQueryResponse postAnalyticsRatelimitsAggregatesQuery(body)


POST /api/v2/analytics/ratelimits/aggregates/query

Query for limits rate limit aggregates. Data populated when limits reach 90% of the maximum. Not a source of truth for limits hit but a best effort estimate.

The max property can be used to determine estimated rate limit value hit. See https://developer.genesys.cloud/organization/organization/limits#available-limits for limits that are trackable (Operational Events Enabled).

Requires ANY permissions:

* analytics:rateLimitAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsRatelimitsAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsRatelimitsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsRatelimitsAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**RateLimitAggregateQueryResponse**


## postAnalyticsReportingDashboardsUsersBulkRemove

> void postAnalyticsReportingDashboardsUsersBulkRemove(body)


POST /api/v2/analytics/reporting/dashboards/users/bulk/remove

Bulk soft delete dashboards owned by other user(s)

Requires ANY permissions:

* analytics:dashboardConfigurations:deleteActive
* analytics:dashboardConfigurations:deleteInactive

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = ["body_example"]; // [String] | List of userIds

apiInstance.postAnalyticsReportingDashboardsUsersBulkRemove(body)
  .then(() => {
    console.log('postAnalyticsReportingDashboardsUsersBulkRemove returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsReportingDashboardsUsersBulkRemove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **[String]** | List of userIds |  |

### Return type

void (no response body)


## postAnalyticsReportingExports

> ReportingExportJobResponse postAnalyticsReportingExports(body)


POST /api/v2/analytics/reporting/exports

Generate a view export request

This API creates a reporting export but the desired way to export analytics data is to use the analytics query APIs instead

Requires ALL permissions:

* analytics:dataExport:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | ReportingExportJobRequest

apiInstance.postAnalyticsReportingExports(body)
  .then((data) => {
    console.log(`postAnalyticsReportingExports success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsReportingExports');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ReportingExportJobRequest |  |

### Return type

**ReportingExportJobResponse**


## postAnalyticsReportingSettingsDashboardsBulkRemove

> void postAnalyticsReportingSettingsDashboardsBulkRemove(body)


POST /api/v2/analytics/reporting/settings/dashboards/bulk/remove

Bulk soft delete dashboard configurations

Requires ALL permissions:

* analytics:dashboardConfigurations:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | 

apiInstance.postAnalyticsReportingSettingsDashboardsBulkRemove(body)
  .then(() => {
    console.log('postAnalyticsReportingSettingsDashboardsBulkRemove returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsReportingSettingsDashboardsBulkRemove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |

### Return type

void (no response body)


## postAnalyticsReportingSettingsDashboardsQuery

> DashboardConfigurationListing postAnalyticsReportingSettingsDashboardsQuery(body)


POST /api/v2/analytics/reporting/settings/dashboards/query

Query dashboard configurations

Requires ALL permissions:

* analytics:dashboardConfigurations:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | 

apiInstance.postAnalyticsReportingSettingsDashboardsQuery(body)
  .then((data) => {
    console.log(`postAnalyticsReportingSettingsDashboardsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsReportingSettingsDashboardsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |

### Return type

**DashboardConfigurationListing**


## postAnalyticsResolutionsAggregatesJobs

> AsyncQueryResponse postAnalyticsResolutionsAggregatesJobs(body)


POST /api/v2/analytics/resolutions/aggregates/jobs

Query for resolution aggregates asynchronously

postAnalyticsResolutionsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:resolutionAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsResolutionsAggregatesJobs(body)
  .then((data) => {
    console.log(`postAnalyticsResolutionsAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsResolutionsAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsResolutionsAggregatesQuery

> ResolutionAggregateQueryResponse postAnalyticsResolutionsAggregatesQuery(body)


POST /api/v2/analytics/resolutions/aggregates/query

Query for resolution aggregates

Requires ANY permissions:

* analytics:resolutionAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsResolutionsAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsResolutionsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsResolutionsAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**ResolutionAggregateQueryResponse**


## postAnalyticsRoutingActivityQuery

> RoutingActivityResponse postAnalyticsRoutingActivityQuery(body, opts)


POST /api/v2/analytics/routing/activity/query

Query for user activity observations

Requires ANY permissions:

* analytics:queueObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query
let opts = { 
  'pageSize': 3.4, // Number | The desired page size
  'pageNumber': 3.4 // Number | The desired page number
};

apiInstance.postAnalyticsRoutingActivityQuery(body, opts)
  .then((data) => {
    console.log(`postAnalyticsRoutingActivityQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsRoutingActivityQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
 **pageSize** | **Number** | The desired page size | [optional]  |
 **pageNumber** | **Number** | The desired page number | [optional]  |

### Return type

**RoutingActivityResponse**


## postAnalyticsSummariesAggregatesJobs

> AsyncQueryResponse postAnalyticsSummariesAggregatesJobs(body)


POST /api/v2/analytics/summaries/aggregates/jobs

Query for summary aggregates asynchronously

postAnalyticsSummariesAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:summaryAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsSummariesAggregatesJobs(body)
  .then((data) => {
    console.log(`postAnalyticsSummariesAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsSummariesAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsSummariesAggregatesQuery

> SummaryAggregateQueryResponse postAnalyticsSummariesAggregatesQuery(body)


POST /api/v2/analytics/summaries/aggregates/query

Query for summary aggregates

Requires ANY permissions:

* analytics:summaryAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsSummariesAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsSummariesAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsSummariesAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**SummaryAggregateQueryResponse**


## postAnalyticsSurveysAggregatesJobs

> AsyncQueryResponse postAnalyticsSurveysAggregatesJobs(body)


POST /api/v2/analytics/surveys/aggregates/jobs

Query for survey aggregates asynchronously

postAnalyticsSurveysAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:surveyAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsSurveysAggregatesJobs(body)
  .then((data) => {
    console.log(`postAnalyticsSurveysAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsSurveysAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsSurveysAggregatesQuery

> SurveyAggregateQueryResponse postAnalyticsSurveysAggregatesQuery(body)


POST /api/v2/analytics/surveys/aggregates/query

Query for survey aggregates

Requires ANY permissions:

* analytics:surveyAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsSurveysAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsSurveysAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsSurveysAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**SurveyAggregateQueryResponse**


## postAnalyticsTaskmanagementAggregatesJobs

> AsyncQueryResponse postAnalyticsTaskmanagementAggregatesJobs(body)


POST /api/v2/analytics/taskmanagement/aggregates/jobs

Query for task management aggregates asynchronously

postAnalyticsTaskmanagementAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:taskManagementAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsTaskmanagementAggregatesJobs(body)
  .then((data) => {
    console.log(`postAnalyticsTaskmanagementAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsTaskmanagementAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsTaskmanagementAggregatesQuery

> TaskManagementAggregateQueryResponse postAnalyticsTaskmanagementAggregatesQuery(body)


POST /api/v2/analytics/taskmanagement/aggregates/query

Query for task management aggregates

Requires ANY permissions:

* analytics:taskManagementAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsTaskmanagementAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsTaskmanagementAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsTaskmanagementAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**TaskManagementAggregateQueryResponse**


## postAnalyticsTeamsActivityQuery

> TeamActivityResponse postAnalyticsTeamsActivityQuery(body, opts)


POST /api/v2/analytics/teams/activity/query

Query for team activity observations

Requires ANY permissions:

* analytics:teamObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query
let opts = { 
  'pageSize': 3.4, // Number | The desired page size
  'pageNumber': 3.4 // Number | The desired page number
};

apiInstance.postAnalyticsTeamsActivityQuery(body, opts)
  .then((data) => {
    console.log(`postAnalyticsTeamsActivityQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsTeamsActivityQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
 **pageSize** | **Number** | The desired page size | [optional]  |
 **pageNumber** | **Number** | The desired page number | [optional]  |

### Return type

**TeamActivityResponse**


## postAnalyticsTranscriptsAggregatesJobs

> AsyncQueryResponse postAnalyticsTranscriptsAggregatesJobs(body)


POST /api/v2/analytics/transcripts/aggregates/jobs

Query for transcript aggregates asynchronously

postAnalyticsTranscriptsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:speechAndTextAnalyticsAggregates:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsTranscriptsAggregatesJobs(body)
  .then((data) => {
    console.log(`postAnalyticsTranscriptsAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsTranscriptsAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsTranscriptsAggregatesQuery

> TranscriptAggregateQueryResponse postAnalyticsTranscriptsAggregatesQuery(body)


POST /api/v2/analytics/transcripts/aggregates/query

Query for transcript aggregates

Requires ANY permissions:

* analytics:speechAndTextAnalyticsAggregates:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsTranscriptsAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsTranscriptsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsTranscriptsAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**TranscriptAggregateQueryResponse**


## postAnalyticsUsersActivityQuery

> UserActivityResponse postAnalyticsUsersActivityQuery(body, opts)


POST /api/v2/analytics/users/activity/query

Query for user activity observations

Requires ANY permissions:

* analytics:userObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query
let opts = { 
  'pageSize': 3.4, // Number | The desired page size
  'pageNumber': 3.4 // Number | The desired page number
};

apiInstance.postAnalyticsUsersActivityQuery(body, opts)
  .then((data) => {
    console.log(`postAnalyticsUsersActivityQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsUsersActivityQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
 **pageSize** | **Number** | The desired page size | [optional]  |
 **pageNumber** | **Number** | The desired page number | [optional]  |

### Return type

**UserActivityResponse**


## postAnalyticsUsersAggregatesJobs

> AsyncQueryResponse postAnalyticsUsersAggregatesJobs(body)


POST /api/v2/analytics/users/aggregates/jobs

Query for user aggregates asynchronously

postAnalyticsUsersAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:userAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsUsersAggregatesJobs(body)
  .then((data) => {
    console.log(`postAnalyticsUsersAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsUsersAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsUsersAggregatesQuery

> UserAggregateQueryResponse postAnalyticsUsersAggregatesQuery(body)


POST /api/v2/analytics/users/aggregates/query

Query for user aggregates

Requires ANY permissions:

* analytics:userAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsUsersAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsUsersAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsUsersAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**UserAggregateQueryResponse**


## postAnalyticsUsersDetailsJobs

> AsyncQueryResponse postAnalyticsUsersDetailsJobs(body)


POST /api/v2/analytics/users/details/jobs

Query for user details asynchronously

Requires ANY permissions:

* analytics:userDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsUsersDetailsJobs(body)
  .then((data) => {
    console.log(`postAnalyticsUsersDetailsJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsUsersDetailsJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsUsersDetailsQuery

> AnalyticsUserDetailsQueryResponse postAnalyticsUsersDetailsQuery(body)


POST /api/v2/analytics/users/details/query

Query for user details

Requires ANY permissions:

* analytics:userDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsUsersDetailsQuery(body)
  .then((data) => {
    console.log(`postAnalyticsUsersDetailsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsUsersDetailsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AnalyticsUserDetailsQueryResponse**


## postAnalyticsUsersObservationsQuery

> UserObservationQueryResponse postAnalyticsUsersObservationsQuery(body)


POST /api/v2/analytics/users/observations/query

Query for user observations

Requires ANY permissions:

* analytics:userObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsUsersObservationsQuery(body)
  .then((data) => {
    console.log(`postAnalyticsUsersObservationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsUsersObservationsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**UserObservationQueryResponse**


## putAnalyticsDataretentionSettings

> AnalyticsDataRetentionResponse putAnalyticsDataretentionSettings(body)


PUT /api/v2/analytics/dataretention/settings

Update analytics data retention setting

Requires ANY permissions:

* analytics:dataRetention:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | retentionDays

apiInstance.putAnalyticsDataretentionSettings(body)
  .then((data) => {
    console.log(`putAnalyticsDataretentionSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAnalyticsDataretentionSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | retentionDays |  |

### Return type

**AnalyticsDataRetentionResponse**


_purecloud-platform-client-v2@229.1.0_
