---
title: AnalyticsApi
---
# platformClient.AnalyticsApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAnalyticsConversationsDetailsJob**](AnalyticsApi.html#deleteAnalyticsConversationsDetailsJob) | **DELETE** /api/v2/analytics/conversations/details/jobs/{jobId} | Delete/cancel an async details job
[**deleteAnalyticsReportingExport**](AnalyticsApi.html#deleteAnalyticsReportingExport) | **DELETE** /api/v2/analytics/reporting/exports/{exportId} | Delete a view export request for a user
[**deleteAnalyticsReportingExportHistoryRunId**](AnalyticsApi.html#deleteAnalyticsReportingExportHistoryRunId) | **DELETE** /api/v2/analytics/reporting/exports/{exportId}/history/{runId} | Delete a view export job history request for a user
[**deleteAnalyticsReportingExportSchedule**](AnalyticsApi.html#deleteAnalyticsReportingExportSchedule) | **DELETE** /api/v2/analytics/reporting/exports/{exportId}/schedule | Delete a view schedule export request for a user
[**deleteAnalyticsReportingSchedule**](AnalyticsApi.html#deleteAnalyticsReportingSchedule) | **DELETE** /api/v2/analytics/reporting/schedules/{scheduleId} | Delete a scheduled report job.
[**deleteAnalyticsReportingSettingsDashboard**](AnalyticsApi.html#deleteAnalyticsReportingSettingsDashboard) | **DELETE** /api/v2/analytics/reporting/settings/dashboards/{dashboardId} | Delete a dashboard configuration
[**deleteAnalyticsReportingSettingsTabconfiguration**](AnalyticsApi.html#deleteAnalyticsReportingSettingsTabconfiguration) | **DELETE** /api/v2/analytics/reporting/settings/tabconfigurations/{tabId} | Delete a tab configuration
[**deleteAnalyticsReportingSettingsViewconfiguration**](AnalyticsApi.html#deleteAnalyticsReportingSettingsViewconfiguration) | **DELETE** /api/v2/analytics/reporting/settings/viewconfigurations/{viewId} | Delete a view configuration
[**deleteAnalyticsUsersDetailsJob**](AnalyticsApi.html#deleteAnalyticsUsersDetailsJob) | **DELETE** /api/v2/analytics/users/details/jobs/{jobId} | Delete/cancel an async request
[**getAnalyticsActionsAggregatesJob**](AnalyticsApi.html#getAnalyticsActionsAggregatesJob) | **GET** /api/v2/analytics/actions/aggregates/jobs/{jobId} | Get status for async query for action aggregates
[**getAnalyticsActionsAggregatesJobResults**](AnalyticsApi.html#getAnalyticsActionsAggregatesJobResults) | **GET** /api/v2/analytics/actions/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsBotflowReportingturns**](AnalyticsApi.html#getAnalyticsBotflowReportingturns) | **GET** /api/v2/analytics/botflows/{botFlowId}/reportingturns | Get Reporting Turns.
[**getAnalyticsBotflowSessions**](AnalyticsApi.html#getAnalyticsBotflowSessions) | **GET** /api/v2/analytics/botflows/{botFlowId}/sessions | Get Bot Flow Sessions.
[**getAnalyticsBotsAggregatesJob**](AnalyticsApi.html#getAnalyticsBotsAggregatesJob) | **GET** /api/v2/analytics/bots/aggregates/jobs/{jobId} | Get status for async query for bot aggregates
[**getAnalyticsBotsAggregatesJobResults**](AnalyticsApi.html#getAnalyticsBotsAggregatesJobResults) | **GET** /api/v2/analytics/bots/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsConversationDetails**](AnalyticsApi.html#getAnalyticsConversationDetails) | **GET** /api/v2/analytics/conversations/{conversationId}/details | Get a conversation by id
[**getAnalyticsConversationsAggregatesJob**](AnalyticsApi.html#getAnalyticsConversationsAggregatesJob) | **GET** /api/v2/analytics/conversations/aggregates/jobs/{jobId} | Get status for async query for conversation aggregates
[**getAnalyticsConversationsAggregatesJobResults**](AnalyticsApi.html#getAnalyticsConversationsAggregatesJobResults) | **GET** /api/v2/analytics/conversations/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsConversationsDetails**](AnalyticsApi.html#getAnalyticsConversationsDetails) | **GET** /api/v2/analytics/conversations/details | Gets multiple conversations by id
[**getAnalyticsConversationsDetailsJob**](AnalyticsApi.html#getAnalyticsConversationsDetailsJob) | **GET** /api/v2/analytics/conversations/details/jobs/{jobId} | Get status for async query for conversation details
[**getAnalyticsConversationsDetailsJobResults**](AnalyticsApi.html#getAnalyticsConversationsDetailsJobResults) | **GET** /api/v2/analytics/conversations/details/jobs/{jobId}/results | Fetch a page of results for an async details job
[**getAnalyticsConversationsDetailsJobsAvailability**](AnalyticsApi.html#getAnalyticsConversationsDetailsJobsAvailability) | **GET** /api/v2/analytics/conversations/details/jobs/availability | Lookup the datalake availability date and time
[**getAnalyticsDataretentionSettings**](AnalyticsApi.html#getAnalyticsDataretentionSettings) | **GET** /api/v2/analytics/dataretention/settings | Get analytics data retention setting
[**getAnalyticsEvaluationsAggregatesJob**](AnalyticsApi.html#getAnalyticsEvaluationsAggregatesJob) | **GET** /api/v2/analytics/evaluations/aggregates/jobs/{jobId} | Get status for async query for evaluation aggregates
[**getAnalyticsEvaluationsAggregatesJobResults**](AnalyticsApi.html#getAnalyticsEvaluationsAggregatesJobResults) | **GET** /api/v2/analytics/evaluations/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsFlowexecutionsAggregatesJob**](AnalyticsApi.html#getAnalyticsFlowexecutionsAggregatesJob) | **GET** /api/v2/analytics/flowexecutions/aggregates/jobs/{jobId} | Get status for async query for flow execution aggregates
[**getAnalyticsFlowexecutionsAggregatesJobResults**](AnalyticsApi.html#getAnalyticsFlowexecutionsAggregatesJobResults) | **GET** /api/v2/analytics/flowexecutions/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsFlowsAggregatesJob**](AnalyticsApi.html#getAnalyticsFlowsAggregatesJob) | **GET** /api/v2/analytics/flows/aggregates/jobs/{jobId} | Get status for async query for Flow aggregates
[**getAnalyticsFlowsAggregatesJobResults**](AnalyticsApi.html#getAnalyticsFlowsAggregatesJobResults) | **GET** /api/v2/analytics/flows/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsJourneysAggregatesJob**](AnalyticsApi.html#getAnalyticsJourneysAggregatesJob) | **GET** /api/v2/analytics/journeys/aggregates/jobs/{jobId} | Get status for async query for journey aggregates
[**getAnalyticsJourneysAggregatesJobResults**](AnalyticsApi.html#getAnalyticsJourneysAggregatesJobResults) | **GET** /api/v2/analytics/journeys/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsKnowledgeAggregatesJob**](AnalyticsApi.html#getAnalyticsKnowledgeAggregatesJob) | **GET** /api/v2/analytics/knowledge/aggregates/jobs/{jobId} | Get status for async query for knowledge aggregates
[**getAnalyticsKnowledgeAggregatesJobResults**](AnalyticsApi.html#getAnalyticsKnowledgeAggregatesJobResults) | **GET** /api/v2/analytics/knowledge/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsReportingDashboardsUser**](AnalyticsApi.html#getAnalyticsReportingDashboardsUser) | **GET** /api/v2/analytics/reporting/dashboards/users/{userId} | Get dashboards summary for a user
[**getAnalyticsReportingDashboardsUsers**](AnalyticsApi.html#getAnalyticsReportingDashboardsUsers) | **GET** /api/v2/analytics/reporting/dashboards/users | Get dashboards summary for users in a org
[**getAnalyticsReportingExport**](AnalyticsApi.html#getAnalyticsReportingExport) | **GET** /api/v2/analytics/reporting/exports/{exportId} | Get a single view export request for a user
[**getAnalyticsReportingExportHistory**](AnalyticsApi.html#getAnalyticsReportingExportHistory) | **GET** /api/v2/analytics/reporting/exports/{exportId}/history | Get a list of all scheduled runs for an export schedule
[**getAnalyticsReportingExportHistoryLatest**](AnalyticsApi.html#getAnalyticsReportingExportHistoryLatest) | **GET** /api/v2/analytics/reporting/exports/{exportId}/history/latest | Get most recently scheduled run for an export schedule
[**getAnalyticsReportingExportHistoryRunId**](AnalyticsApi.html#getAnalyticsReportingExportHistoryRunId) | **GET** /api/v2/analytics/reporting/exports/{exportId}/history/{runId} | A scheduled run for an export schedule
[**getAnalyticsReportingExports**](AnalyticsApi.html#getAnalyticsReportingExports) | **GET** /api/v2/analytics/reporting/exports | Get all view export requests for a user
[**getAnalyticsReportingExportsAll**](AnalyticsApi.html#getAnalyticsReportingExportsAll) | **GET** /api/v2/analytics/reporting/exports/all | Get all view export job histories requests for a user
[**getAnalyticsReportingExportsMetadata**](AnalyticsApi.html#getAnalyticsReportingExportsMetadata) | **GET** /api/v2/analytics/reporting/exports/metadata | Get all export metadata
[**getAnalyticsReportingExportsSchedule**](AnalyticsApi.html#getAnalyticsReportingExportsSchedule) | **GET** /api/v2/analytics/reporting/exports/schedule | Get all view schedule export requests for a user
[**getAnalyticsReportingExportsScheduleSummary**](AnalyticsApi.html#getAnalyticsReportingExportsScheduleSummary) | **GET** /api/v2/analytics/reporting/exports/schedule/summary | Gets the count of expiring and expired scheduled exports
[**getAnalyticsReportingMetadata**](AnalyticsApi.html#getAnalyticsReportingMetadata) | **GET** /api/v2/analytics/reporting/metadata | Get list of reporting metadata.
[**getAnalyticsReportingReportIdMetadata**](AnalyticsApi.html#getAnalyticsReportingReportIdMetadata) | **GET** /api/v2/analytics/reporting/{reportId}/metadata | Get a reporting metadata.
[**getAnalyticsReportingReportformats**](AnalyticsApi.html#getAnalyticsReportingReportformats) | **GET** /api/v2/analytics/reporting/reportformats | Get a list of report formats
[**getAnalyticsReportingSchedule**](AnalyticsApi.html#getAnalyticsReportingSchedule) | **GET** /api/v2/analytics/reporting/schedules/{scheduleId} | Get a scheduled report job.
[**getAnalyticsReportingScheduleHistory**](AnalyticsApi.html#getAnalyticsReportingScheduleHistory) | **GET** /api/v2/analytics/reporting/schedules/{scheduleId}/history | Get list of completed scheduled report jobs.
[**getAnalyticsReportingScheduleHistoryLatest**](AnalyticsApi.html#getAnalyticsReportingScheduleHistoryLatest) | **GET** /api/v2/analytics/reporting/schedules/{scheduleId}/history/latest | Get most recently completed scheduled report job.
[**getAnalyticsReportingScheduleHistoryRunId**](AnalyticsApi.html#getAnalyticsReportingScheduleHistoryRunId) | **GET** /api/v2/analytics/reporting/schedules/{scheduleId}/history/{runId} | A completed scheduled report job
[**getAnalyticsReportingSchedules**](AnalyticsApi.html#getAnalyticsReportingSchedules) | **GET** /api/v2/analytics/reporting/schedules | Get a list of scheduled report jobs
[**getAnalyticsReportingSettings**](AnalyticsApi.html#getAnalyticsReportingSettings) | **GET** /api/v2/analytics/reporting/settings | Get AnalyticsReportingSettings for an organization
[**getAnalyticsReportingSettingsDashboard**](AnalyticsApi.html#getAnalyticsReportingSettingsDashboard) | **GET** /api/v2/analytics/reporting/settings/dashboards/{dashboardId} | Get a dashboard configuration
[**getAnalyticsReportingSettingsDashboards**](AnalyticsApi.html#getAnalyticsReportingSettingsDashboards) | **GET** /api/v2/analytics/reporting/settings/dashboards | Get list of dashboard configuration
[**getAnalyticsReportingSettingsInsights**](AnalyticsApi.html#getAnalyticsReportingSettingsInsights) | **GET** /api/v2/analytics/reporting/settings/insights | Get an insight configurations
[**getAnalyticsReportingSettingsTabconfiguration**](AnalyticsApi.html#getAnalyticsReportingSettingsTabconfiguration) | **GET** /api/v2/analytics/reporting/settings/tabconfigurations/{tabId} | Get a tab configuration
[**getAnalyticsReportingSettingsTabconfigurations**](AnalyticsApi.html#getAnalyticsReportingSettingsTabconfigurations) | **GET** /api/v2/analytics/reporting/settings/tabconfigurations | Get a list of tab configurations
[**getAnalyticsReportingSettingsUserDashboards**](AnalyticsApi.html#getAnalyticsReportingSettingsUserDashboards) | **GET** /api/v2/analytics/reporting/settings/users/{userId}/dashboards | Get list of dashboards for an user
[**getAnalyticsReportingSettingsViewconfiguration**](AnalyticsApi.html#getAnalyticsReportingSettingsViewconfiguration) | **GET** /api/v2/analytics/reporting/settings/viewconfigurations/{viewId} | Get a view configuration
[**getAnalyticsReportingSettingsViewconfigurations**](AnalyticsApi.html#getAnalyticsReportingSettingsViewconfigurations) | **GET** /api/v2/analytics/reporting/settings/viewconfigurations | Get list of configurations
[**getAnalyticsReportingTimeperiods**](AnalyticsApi.html#getAnalyticsReportingTimeperiods) | **GET** /api/v2/analytics/reporting/timeperiods | Get a list of report time periods.
[**getAnalyticsResolutionsAggregatesJob**](AnalyticsApi.html#getAnalyticsResolutionsAggregatesJob) | **GET** /api/v2/analytics/resolutions/aggregates/jobs/{jobId} | Get status for async query for resolution aggregates
[**getAnalyticsResolutionsAggregatesJobResults**](AnalyticsApi.html#getAnalyticsResolutionsAggregatesJobResults) | **GET** /api/v2/analytics/resolutions/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsSurveysAggregatesJob**](AnalyticsApi.html#getAnalyticsSurveysAggregatesJob) | **GET** /api/v2/analytics/surveys/aggregates/jobs/{jobId} | Get status for async query for survey aggregates
[**getAnalyticsSurveysAggregatesJobResults**](AnalyticsApi.html#getAnalyticsSurveysAggregatesJobResults) | **GET** /api/v2/analytics/surveys/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsTaskmanagementAggregatesJob**](AnalyticsApi.html#getAnalyticsTaskmanagementAggregatesJob) | **GET** /api/v2/analytics/taskmanagement/aggregates/jobs/{jobId} | Get status for async query for task management aggregates
[**getAnalyticsTaskmanagementAggregatesJobResults**](AnalyticsApi.html#getAnalyticsTaskmanagementAggregatesJobResults) | **GET** /api/v2/analytics/taskmanagement/aggregates/jobs/{jobId}/results | Fetch a page of results for an async task management query
[**getAnalyticsTranscriptsAggregatesJob**](AnalyticsApi.html#getAnalyticsTranscriptsAggregatesJob) | **GET** /api/v2/analytics/transcripts/aggregates/jobs/{jobId} | Get status for async query for transcript aggregates
[**getAnalyticsTranscriptsAggregatesJobResults**](AnalyticsApi.html#getAnalyticsTranscriptsAggregatesJobResults) | **GET** /api/v2/analytics/transcripts/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsUsersAggregatesJob**](AnalyticsApi.html#getAnalyticsUsersAggregatesJob) | **GET** /api/v2/analytics/users/aggregates/jobs/{jobId} | Get status for async query for user aggregates
[**getAnalyticsUsersAggregatesJobResults**](AnalyticsApi.html#getAnalyticsUsersAggregatesJobResults) | **GET** /api/v2/analytics/users/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsUsersDetailsJob**](AnalyticsApi.html#getAnalyticsUsersDetailsJob) | **GET** /api/v2/analytics/users/details/jobs/{jobId} | Get status for async query for user details
[**getAnalyticsUsersDetailsJobResults**](AnalyticsApi.html#getAnalyticsUsersDetailsJobResults) | **GET** /api/v2/analytics/users/details/jobs/{jobId}/results | Fetch a page of results for an async query
[**getAnalyticsUsersDetailsJobsAvailability**](AnalyticsApi.html#getAnalyticsUsersDetailsJobsAvailability) | **GET** /api/v2/analytics/users/details/jobs/availability | Lookup the datalake availability date and time
[**patchAnalyticsReportingExport**](AnalyticsApi.html#patchAnalyticsReportingExport) | **PATCH** /api/v2/analytics/reporting/exports/{exportId} | Updates only provided values for a view export request for a user
[**patchAnalyticsReportingExportHistoryRunId**](AnalyticsApi.html#patchAnalyticsReportingExportHistoryRunId) | **PATCH** /api/v2/analytics/reporting/exports/{exportId}/history/{runId} | Updates only provided values for marking the completed runs as read for an schedule
[**patchAnalyticsReportingExportSchedule**](AnalyticsApi.html#patchAnalyticsReportingExportSchedule) | **PATCH** /api/v2/analytics/reporting/exports/{exportId}/schedule | Enable/Disable for a view schedule export request for a user
[**patchAnalyticsReportingSettings**](AnalyticsApi.html#patchAnalyticsReportingSettings) | **PATCH** /api/v2/analytics/reporting/settings | Patch AnalyticsReportingSettings values for an organization
[**patchAnalyticsReportingSettingsDashboard**](AnalyticsApi.html#patchAnalyticsReportingSettingsDashboard) | **PATCH** /api/v2/analytics/reporting/settings/dashboards/{dashboardId} | Favorite or Unfavorite a dashboard configuration
[**postAnalyticsActionsAggregatesJobs**](AnalyticsApi.html#postAnalyticsActionsAggregatesJobs) | **POST** /api/v2/analytics/actions/aggregates/jobs | Query for action aggregates asynchronously
[**postAnalyticsActionsAggregatesQuery**](AnalyticsApi.html#postAnalyticsActionsAggregatesQuery) | **POST** /api/v2/analytics/actions/aggregates/query | Query for action aggregates
[**postAnalyticsBotsAggregatesJobs**](AnalyticsApi.html#postAnalyticsBotsAggregatesJobs) | **POST** /api/v2/analytics/bots/aggregates/jobs | Query for bot aggregates asynchronously
[**postAnalyticsBotsAggregatesQuery**](AnalyticsApi.html#postAnalyticsBotsAggregatesQuery) | **POST** /api/v2/analytics/bots/aggregates/query | Query for bot aggregates
[**postAnalyticsConversationDetailsProperties**](AnalyticsApi.html#postAnalyticsConversationDetailsProperties) | **POST** /api/v2/analytics/conversations/{conversationId}/details/properties | Index conversation properties
[**postAnalyticsConversationsActivityQuery**](AnalyticsApi.html#postAnalyticsConversationsActivityQuery) | **POST** /api/v2/analytics/conversations/activity/query | Query for conversation activity observations
[**postAnalyticsConversationsAggregatesJobs**](AnalyticsApi.html#postAnalyticsConversationsAggregatesJobs) | **POST** /api/v2/analytics/conversations/aggregates/jobs | Query for conversation aggregates asynchronously
[**postAnalyticsConversationsAggregatesQuery**](AnalyticsApi.html#postAnalyticsConversationsAggregatesQuery) | **POST** /api/v2/analytics/conversations/aggregates/query | Query for conversation aggregates
[**postAnalyticsConversationsDetailsJobs**](AnalyticsApi.html#postAnalyticsConversationsDetailsJobs) | **POST** /api/v2/analytics/conversations/details/jobs | Query for conversation details asynchronously
[**postAnalyticsConversationsDetailsQuery**](AnalyticsApi.html#postAnalyticsConversationsDetailsQuery) | **POST** /api/v2/analytics/conversations/details/query | Query for conversation details
[**postAnalyticsConversationsTranscriptsQuery**](AnalyticsApi.html#postAnalyticsConversationsTranscriptsQuery) | **POST** /api/v2/analytics/conversations/transcripts/query | Search resources.
[**postAnalyticsEvaluationsAggregatesJobs**](AnalyticsApi.html#postAnalyticsEvaluationsAggregatesJobs) | **POST** /api/v2/analytics/evaluations/aggregates/jobs | Query for evaluation aggregates asynchronously
[**postAnalyticsEvaluationsAggregatesQuery**](AnalyticsApi.html#postAnalyticsEvaluationsAggregatesQuery) | **POST** /api/v2/analytics/evaluations/aggregates/query | Query for evaluation aggregates
[**postAnalyticsFlowexecutionsAggregatesJobs**](AnalyticsApi.html#postAnalyticsFlowexecutionsAggregatesJobs) | **POST** /api/v2/analytics/flowexecutions/aggregates/jobs | Query for flow execution aggregates asynchronously
[**postAnalyticsFlowexecutionsAggregatesQuery**](AnalyticsApi.html#postAnalyticsFlowexecutionsAggregatesQuery) | **POST** /api/v2/analytics/flowexecutions/aggregates/query | Query for flow execution aggregates
[**postAnalyticsFlowsActivityQuery**](AnalyticsApi.html#postAnalyticsFlowsActivityQuery) | **POST** /api/v2/analytics/flows/activity/query | Query for flow activity observations
[**postAnalyticsFlowsAggregatesJobs**](AnalyticsApi.html#postAnalyticsFlowsAggregatesJobs) | **POST** /api/v2/analytics/flows/aggregates/jobs | Query for flow aggregates asynchronously
[**postAnalyticsFlowsAggregatesQuery**](AnalyticsApi.html#postAnalyticsFlowsAggregatesQuery) | **POST** /api/v2/analytics/flows/aggregates/query | Query for flow aggregates
[**postAnalyticsFlowsObservationsQuery**](AnalyticsApi.html#postAnalyticsFlowsObservationsQuery) | **POST** /api/v2/analytics/flows/observations/query | Query for flow observations
[**postAnalyticsJourneysAggregatesJobs**](AnalyticsApi.html#postAnalyticsJourneysAggregatesJobs) | **POST** /api/v2/analytics/journeys/aggregates/jobs | Query for journey aggregates asynchronously
[**postAnalyticsJourneysAggregatesQuery**](AnalyticsApi.html#postAnalyticsJourneysAggregatesQuery) | **POST** /api/v2/analytics/journeys/aggregates/query | Query for journey aggregates
[**postAnalyticsKnowledgeAggregatesJobs**](AnalyticsApi.html#postAnalyticsKnowledgeAggregatesJobs) | **POST** /api/v2/analytics/knowledge/aggregates/jobs | Query for knowledge aggregates asynchronously
[**postAnalyticsKnowledgeAggregatesQuery**](AnalyticsApi.html#postAnalyticsKnowledgeAggregatesQuery) | **POST** /api/v2/analytics/knowledge/aggregates/query | Query for knowledge aggregates
[**postAnalyticsQueuesObservationsQuery**](AnalyticsApi.html#postAnalyticsQueuesObservationsQuery) | **POST** /api/v2/analytics/queues/observations/query | Query for queue observations
[**postAnalyticsRatelimitsAggregatesQuery**](AnalyticsApi.html#postAnalyticsRatelimitsAggregatesQuery) | **POST** /api/v2/analytics/ratelimits/aggregates/query | Query for outer limits rate limit aggregates
[**postAnalyticsReportingDashboardsUsersBulkRemove**](AnalyticsApi.html#postAnalyticsReportingDashboardsUsersBulkRemove) | **POST** /api/v2/analytics/reporting/dashboards/users/bulk/remove | Bulk delete dashboards owned by other user(s)
[**postAnalyticsReportingExportExecute**](AnalyticsApi.html#postAnalyticsReportingExportExecute) | **POST** /api/v2/analytics/reporting/exports/{exportId}/execute | Generate a export run now request
[**postAnalyticsReportingExports**](AnalyticsApi.html#postAnalyticsReportingExports) | **POST** /api/v2/analytics/reporting/exports | Generate a view export request
[**postAnalyticsReportingScheduleRunreport**](AnalyticsApi.html#postAnalyticsReportingScheduleRunreport) | **POST** /api/v2/analytics/reporting/schedules/{scheduleId}/runreport | Place a scheduled report immediately into the reporting queue
[**postAnalyticsReportingSchedules**](AnalyticsApi.html#postAnalyticsReportingSchedules) | **POST** /api/v2/analytics/reporting/schedules | Create a scheduled report job
[**postAnalyticsReportingSettingsDashboards**](AnalyticsApi.html#postAnalyticsReportingSettingsDashboards) | **POST** /api/v2/analytics/reporting/settings/dashboards | Create a dashboard configuration
[**postAnalyticsReportingSettingsDashboardsBulkRemove**](AnalyticsApi.html#postAnalyticsReportingSettingsDashboardsBulkRemove) | **POST** /api/v2/analytics/reporting/settings/dashboards/bulk/remove | Bulk remove dashboard configurations
[**postAnalyticsReportingSettingsDashboardsQuery**](AnalyticsApi.html#postAnalyticsReportingSettingsDashboardsQuery) | **POST** /api/v2/analytics/reporting/settings/dashboards/query | Query dashboard configurations
[**postAnalyticsReportingSettingsTabconfigurations**](AnalyticsApi.html#postAnalyticsReportingSettingsTabconfigurations) | **POST** /api/v2/analytics/reporting/settings/tabconfigurations | Create a tab configuration
[**postAnalyticsReportingSettingsTabconfigurationsBulk**](AnalyticsApi.html#postAnalyticsReportingSettingsTabconfigurationsBulk) | **POST** /api/v2/analytics/reporting/settings/tabconfigurations/bulk | Create a list of tab configurations
[**postAnalyticsReportingSettingsTabconfigurationsBulkRemove**](AnalyticsApi.html#postAnalyticsReportingSettingsTabconfigurationsBulkRemove) | **POST** /api/v2/analytics/reporting/settings/tabconfigurations/bulk/remove | Bulk remove tab configurations
[**postAnalyticsReportingSettingsViewconfigurations**](AnalyticsApi.html#postAnalyticsReportingSettingsViewconfigurations) | **POST** /api/v2/analytics/reporting/settings/viewconfigurations | Create a view configuration
[**postAnalyticsResolutionsAggregatesJobs**](AnalyticsApi.html#postAnalyticsResolutionsAggregatesJobs) | **POST** /api/v2/analytics/resolutions/aggregates/jobs | Query for resolution aggregates asynchronously
[**postAnalyticsResolutionsAggregatesQuery**](AnalyticsApi.html#postAnalyticsResolutionsAggregatesQuery) | **POST** /api/v2/analytics/resolutions/aggregates/query | Query for resolution aggregates
[**postAnalyticsRoutingActivityQuery**](AnalyticsApi.html#postAnalyticsRoutingActivityQuery) | **POST** /api/v2/analytics/routing/activity/query | Query for user activity observations
[**postAnalyticsSurveysAggregatesJobs**](AnalyticsApi.html#postAnalyticsSurveysAggregatesJobs) | **POST** /api/v2/analytics/surveys/aggregates/jobs | Query for survey aggregates asynchronously
[**postAnalyticsSurveysAggregatesQuery**](AnalyticsApi.html#postAnalyticsSurveysAggregatesQuery) | **POST** /api/v2/analytics/surveys/aggregates/query | Query for survey aggregates
[**postAnalyticsTaskmanagementAggregatesJobs**](AnalyticsApi.html#postAnalyticsTaskmanagementAggregatesJobs) | **POST** /api/v2/analytics/taskmanagement/aggregates/jobs | Query for task management aggregates asynchronously
[**postAnalyticsTaskmanagementAggregatesQuery**](AnalyticsApi.html#postAnalyticsTaskmanagementAggregatesQuery) | **POST** /api/v2/analytics/taskmanagement/aggregates/query | Query for task management aggregates
[**postAnalyticsTeamsActivityQuery**](AnalyticsApi.html#postAnalyticsTeamsActivityQuery) | **POST** /api/v2/analytics/teams/activity/query | Query for team activity observations
[**postAnalyticsTranscriptsAggregatesJobs**](AnalyticsApi.html#postAnalyticsTranscriptsAggregatesJobs) | **POST** /api/v2/analytics/transcripts/aggregates/jobs | Query for transcript aggregates asynchronously
[**postAnalyticsTranscriptsAggregatesQuery**](AnalyticsApi.html#postAnalyticsTranscriptsAggregatesQuery) | **POST** /api/v2/analytics/transcripts/aggregates/query | Query for transcript aggregates
[**postAnalyticsUsersActivityQuery**](AnalyticsApi.html#postAnalyticsUsersActivityQuery) | **POST** /api/v2/analytics/users/activity/query | Query for user activity observations
[**postAnalyticsUsersAggregatesJobs**](AnalyticsApi.html#postAnalyticsUsersAggregatesJobs) | **POST** /api/v2/analytics/users/aggregates/jobs | Query for user aggregates asynchronously
[**postAnalyticsUsersAggregatesQuery**](AnalyticsApi.html#postAnalyticsUsersAggregatesQuery) | **POST** /api/v2/analytics/users/aggregates/query | Query for user aggregates
[**postAnalyticsUsersDetailsJobs**](AnalyticsApi.html#postAnalyticsUsersDetailsJobs) | **POST** /api/v2/analytics/users/details/jobs | Query for user details asynchronously
[**postAnalyticsUsersDetailsQuery**](AnalyticsApi.html#postAnalyticsUsersDetailsQuery) | **POST** /api/v2/analytics/users/details/query | Query for user details
[**postAnalyticsUsersObservationsQuery**](AnalyticsApi.html#postAnalyticsUsersObservationsQuery) | **POST** /api/v2/analytics/users/observations/query | Query for user observations
[**putAnalyticsDataretentionSettings**](AnalyticsApi.html#putAnalyticsDataretentionSettings) | **PUT** /api/v2/analytics/dataretention/settings | Update analytics data retention setting
[**putAnalyticsReportingExport**](AnalyticsApi.html#putAnalyticsReportingExport) | **PUT** /api/v2/analytics/reporting/exports/{exportId} | Replaces view export request for a user
[**putAnalyticsReportingSchedule**](AnalyticsApi.html#putAnalyticsReportingSchedule) | **PUT** /api/v2/analytics/reporting/schedules/{scheduleId} | Update a scheduled report job.
[**putAnalyticsReportingSettingsDashboard**](AnalyticsApi.html#putAnalyticsReportingSettingsDashboard) | **PUT** /api/v2/analytics/reporting/settings/dashboards/{dashboardId} | Update a dashboard configuration
[**putAnalyticsReportingSettingsInsights**](AnalyticsApi.html#putAnalyticsReportingSettingsInsights) | **PUT** /api/v2/analytics/reporting/settings/insights | Update an insight configurations
[**putAnalyticsReportingSettingsTabconfiguration**](AnalyticsApi.html#putAnalyticsReportingSettingsTabconfiguration) | **PUT** /api/v2/analytics/reporting/settings/tabconfigurations/{tabId} | Update a tab configuration
[**putAnalyticsReportingSettingsTabconfigurationsBulk**](AnalyticsApi.html#putAnalyticsReportingSettingsTabconfigurationsBulk) | **PUT** /api/v2/analytics/reporting/settings/tabconfigurations/bulk | Update a list of tab configurations
[**putAnalyticsReportingSettingsViewconfiguration**](AnalyticsApi.html#putAnalyticsReportingSettingsViewconfiguration) | **PUT** /api/v2/analytics/reporting/settings/viewconfigurations/{viewId} | Update a view configuration
{: class="table table-striped"}

<a name="deleteAnalyticsConversationsDetailsJob"></a>

# void deleteAnalyticsConversationsDetailsJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteAnalyticsReportingExport"></a>

# **Object** deleteAnalyticsReportingExport(exportId)


DELETE /api/v2/analytics/reporting/exports/{exportId}

Delete a view export request for a user

Requires ALL permissions:

* analytics:dataExport:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let exportId = "exportId_example"; // String | Export ID

apiInstance.deleteAnalyticsReportingExport(exportId)
  .then((data) => {
    console.log(`deleteAnalyticsReportingExport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsReportingExport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **exportId** | **String** | Export ID |  |
{: class="table table-striped"}

### Return type

**Object**

<a name="deleteAnalyticsReportingExportHistoryRunId"></a>

# void deleteAnalyticsReportingExportHistoryRunId(runId, exportId)


DELETE /api/v2/analytics/reporting/exports/{exportId}/history/{runId}

Delete a view export job history request for a user

Requires ALL permissions:

* analytics:dataExport:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let runId = "runId_example"; // String | Export Schedule Run ID
let exportId = "exportId_example"; // String | Export Schedule ID

apiInstance.deleteAnalyticsReportingExportHistoryRunId(runId, exportId)
  .then(() => {
    console.log('deleteAnalyticsReportingExportHistoryRunId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsReportingExportHistoryRunId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **runId** | **String** | Export Schedule Run ID |  |
 **exportId** | **String** | Export Schedule ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteAnalyticsReportingExportSchedule"></a>

# void deleteAnalyticsReportingExportSchedule(exportId)


DELETE /api/v2/analytics/reporting/exports/{exportId}/schedule

Delete a view schedule export request for a user

Requires ALL permissions:

* analytics:dataExport:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let exportId = "exportId_example"; // String | Export ID

apiInstance.deleteAnalyticsReportingExportSchedule(exportId)
  .then(() => {
    console.log('deleteAnalyticsReportingExportSchedule returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsReportingExportSchedule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **exportId** | **String** | Export ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteAnalyticsReportingSchedule"></a>

# void deleteAnalyticsReportingSchedule(scheduleId)


DELETE /api/v2/analytics/reporting/schedules/{scheduleId}

Delete a scheduled report job.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.deleteAnalyticsReportingSchedule(scheduleId)
  .then(() => {
    console.log('deleteAnalyticsReportingSchedule returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsReportingSchedule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String** | Schedule ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteAnalyticsReportingSettingsDashboard"></a>

# **Object** deleteAnalyticsReportingSettingsDashboard(dashboardId)


DELETE /api/v2/analytics/reporting/settings/dashboards/{dashboardId}

Delete a dashboard configuration

Requires ALL permissions:

* analytics:dashboardConfigurations:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let dashboardId = "dashboardId_example"; // String | Dashboard Configuration ID

apiInstance.deleteAnalyticsReportingSettingsDashboard(dashboardId)
  .then((data) => {
    console.log(`deleteAnalyticsReportingSettingsDashboard success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsReportingSettingsDashboard');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dashboardId** | **String** | Dashboard Configuration ID |  |
{: class="table table-striped"}

### Return type

**Object**

<a name="deleteAnalyticsReportingSettingsTabconfiguration"></a>

# **Object** deleteAnalyticsReportingSettingsTabconfiguration(tabId)


DELETE /api/v2/analytics/reporting/settings/tabconfigurations/{tabId}

Delete a tab configuration

Requires ALL permissions:

* analytics:tabConfigurations:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let tabId = "tabId_example"; // String | Tab Configuration ID

apiInstance.deleteAnalyticsReportingSettingsTabconfiguration(tabId)
  .then((data) => {
    console.log(`deleteAnalyticsReportingSettingsTabconfiguration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsReportingSettingsTabconfiguration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tabId** | **String** | Tab Configuration ID |  |
{: class="table table-striped"}

### Return type

**Object**

<a name="deleteAnalyticsReportingSettingsViewconfiguration"></a>

# **Object** deleteAnalyticsReportingSettingsViewconfiguration(viewId)


DELETE /api/v2/analytics/reporting/settings/viewconfigurations/{viewId}

Delete a view configuration

Requires ALL permissions:

* analytics:viewConfigurations:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let viewId = "viewId_example"; // String | View Configuration ID

apiInstance.deleteAnalyticsReportingSettingsViewconfiguration(viewId)
  .then((data) => {
    console.log(`deleteAnalyticsReportingSettingsViewconfiguration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsReportingSettingsViewconfiguration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **viewId** | **String** | View Configuration ID |  |
{: class="table table-striped"}

### Return type

**Object**

<a name="deleteAnalyticsUsersDetailsJob"></a>

# void deleteAnalyticsUsersDetailsJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getAnalyticsActionsAggregatesJob"></a>

# AsyncQueryStatus getAnalyticsActionsAggregatesJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryStatus**

<a name="getAnalyticsActionsAggregatesJobResults"></a>

# ActionAsyncAggregateQueryResponse getAnalyticsActionsAggregatesJobResults(jobId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**ActionAsyncAggregateQueryResponse**

<a name="getAnalyticsBotflowReportingturns"></a>

# ReportingTurnsResponse getAnalyticsBotflowReportingturns(botFlowId, opts)


GET /api/v2/analytics/botflows/{botFlowId}/reportingturns

Get Reporting Turns.

Returns the reporting turns grouped by session, in reverse chronological order from the date the session was created, with the reporting turns from the most recent session appearing at the start of the list. For pagination, clients should keep sending requests using the value of nextUri in the response, until its no longer present, only then have all items have been returned. Note: resources returned by this endpoint do not persist indefinitely, as they auto delete after a predefined period.

Requires ANY permissions:

* analytics:botFlowReportingTurn:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
 **askActionResults** | **String** | Optional case-insensitive comma separated list of ask action results to filter the reporting turns. | [optional] <br />**Values**: AgentRequestedByUser, ConfirmationRequired, DisambiguationRequired, Error, ExpressionError, NoInputCollection, NoInputConfirmation, NoInputDisambiguation, NoMatchCollection, NoMatchConfirmation, NoMatchDisambiguation, SuccessCollection, SuccessConfirmationNo, SuccessConfirmationYes, SuccessDisambiguation, SuccessDisambiguationNone |
{: class="table table-striped"}

### Return type

**ReportingTurnsResponse**

<a name="getAnalyticsBotflowSessions"></a>

# SessionsResponse getAnalyticsBotflowSessions(botFlowId, opts)


GET /api/v2/analytics/botflows/{botFlowId}/sessions

Get Bot Flow Sessions.

Returns the bot flow sessions in reverse chronological order from the date they were created. For pagination, clients should keep sending requests using the value of nextUri in the response, until its no longer present, only then have all items have been returned. Note: resources returned by this endpoint do not persist indefinitely, as they auto delete after a predefined period.

Requires ANY permissions:

* analytics:botFlowSession:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**SessionsResponse**

<a name="getAnalyticsBotsAggregatesJob"></a>

# AsyncQueryStatus getAnalyticsBotsAggregatesJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryStatus**

<a name="getAnalyticsBotsAggregatesJobResults"></a>

# BotAsyncAggregateQueryResponse getAnalyticsBotsAggregatesJobResults(jobId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**BotAsyncAggregateQueryResponse**

<a name="getAnalyticsConversationDetails"></a>

# AnalyticsConversationWithoutAttributes getAnalyticsConversationDetails(conversationId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AnalyticsConversationWithoutAttributes**

<a name="getAnalyticsConversationsAggregatesJob"></a>

# AsyncQueryStatus getAnalyticsConversationsAggregatesJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryStatus**

<a name="getAnalyticsConversationsAggregatesJobResults"></a>

# ConversationAsyncAggregateQueryResponse getAnalyticsConversationsAggregatesJobResults(jobId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**ConversationAsyncAggregateQueryResponse**

<a name="getAnalyticsConversationsDetails"></a>

# AnalyticsConversationWithoutAttributesMultiGetResponse getAnalyticsConversationsDetails(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AnalyticsConversationWithoutAttributesMultiGetResponse**

<a name="getAnalyticsConversationsDetailsJob"></a>

# AsyncQueryStatus getAnalyticsConversationsDetailsJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryStatus**

<a name="getAnalyticsConversationsDetailsJobResults"></a>

# AnalyticsConversationAsyncQueryResponse getAnalyticsConversationsDetailsJobResults(jobId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AnalyticsConversationAsyncQueryResponse**

<a name="getAnalyticsConversationsDetailsJobsAvailability"></a>

# DataAvailabilityResponse getAnalyticsConversationsDetailsJobsAvailability()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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

<a name="getAnalyticsDataretentionSettings"></a>

# AnalyticsDataRetentionResponse getAnalyticsDataretentionSettings()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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

<a name="getAnalyticsEvaluationsAggregatesJob"></a>

# AsyncQueryStatus getAnalyticsEvaluationsAggregatesJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryStatus**

<a name="getAnalyticsEvaluationsAggregatesJobResults"></a>

# EvaluationAsyncAggregateQueryResponse getAnalyticsEvaluationsAggregatesJobResults(jobId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**EvaluationAsyncAggregateQueryResponse**

<a name="getAnalyticsFlowexecutionsAggregatesJob"></a>

# AsyncQueryStatus getAnalyticsFlowexecutionsAggregatesJob(jobId)


GET /api/v2/analytics/flowexecutions/aggregates/jobs/{jobId}

Get status for async query for flow execution aggregates

Requires ANY permissions:

* analytics:flowExecutionAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryStatus**

<a name="getAnalyticsFlowexecutionsAggregatesJobResults"></a>

# FlowExecutionAsyncAggregateQueryResponse getAnalyticsFlowexecutionsAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/flowexecutions/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

Requires ANY permissions:

* analytics:flowExecutionAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**FlowExecutionAsyncAggregateQueryResponse**

<a name="getAnalyticsFlowsAggregatesJob"></a>

# AsyncQueryStatus getAnalyticsFlowsAggregatesJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryStatus**

<a name="getAnalyticsFlowsAggregatesJobResults"></a>

# FlowAsyncAggregateQueryResponse getAnalyticsFlowsAggregatesJobResults(jobId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**FlowAsyncAggregateQueryResponse**

<a name="getAnalyticsJourneysAggregatesJob"></a>

# AsyncQueryStatus getAnalyticsJourneysAggregatesJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryStatus**

<a name="getAnalyticsJourneysAggregatesJobResults"></a>

# JourneyAsyncAggregateQueryResponse getAnalyticsJourneysAggregatesJobResults(jobId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**JourneyAsyncAggregateQueryResponse**

<a name="getAnalyticsKnowledgeAggregatesJob"></a>

# AsyncQueryStatus getAnalyticsKnowledgeAggregatesJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryStatus**

<a name="getAnalyticsKnowledgeAggregatesJobResults"></a>

# KnowledgeAsyncAggregateQueryResponse getAnalyticsKnowledgeAggregatesJobResults(jobId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**KnowledgeAsyncAggregateQueryResponse**

<a name="getAnalyticsReportingDashboardsUser"></a>

# DashboardUser getAnalyticsReportingDashboardsUser(userId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**DashboardUser**

<a name="getAnalyticsReportingDashboardsUsers"></a>

# DashboardUserListing getAnalyticsReportingDashboardsUsers(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let opts = { 
  'sortBy': "asc", // String | 
  'pageNumber': 1, // Number | 
  'pageSize': 25, // Number | 
  'id': ["id_example"], // [String] | A list of user IDs to fetch by bulk
  'state': "state_example" // String | Only list users of this state
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
{: class="table table-striped"}

### Return type

**DashboardUserListing**

<a name="getAnalyticsReportingExport"></a>

# ReportingExportJobResponse getAnalyticsReportingExport(exportId)


GET /api/v2/analytics/reporting/exports/{exportId}

Get a single view export request for a user

Requires ALL permissions:

* analytics:dataExport:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let exportId = "exportId_example"; // String | Export ID

apiInstance.getAnalyticsReportingExport(exportId)
  .then((data) => {
    console.log(`getAnalyticsReportingExport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingExport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **exportId** | **String** | Export ID |  |
{: class="table table-striped"}

### Return type

**ReportingExportJobResponse**

<a name="getAnalyticsReportingExportHistory"></a>

# ReportingExportJobHistoryListing getAnalyticsReportingExportHistory(exportId, opts)


GET /api/v2/analytics/reporting/exports/{exportId}/history

Get a list of all scheduled runs for an export schedule

Requires ALL permissions:

* analytics:dataExport:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let exportId = "exportId_example"; // String | Export Schedule ID
let opts = { 
  'pageNumber': 1, // Number | 
  'pageSize': 25 // Number | 
};

apiInstance.getAnalyticsReportingExportHistory(exportId, opts)
  .then((data) => {
    console.log(`getAnalyticsReportingExportHistory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingExportHistory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **exportId** | **String** | Export Schedule ID |  |
 **pageNumber** | **Number** |  | [optional] [default to 1] |
 **pageSize** | **Number** |  | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**ReportingExportJobHistoryListing**

<a name="getAnalyticsReportingExportHistoryLatest"></a>

# ReportingExportJobResponse getAnalyticsReportingExportHistoryLatest(exportId)


GET /api/v2/analytics/reporting/exports/{exportId}/history/latest

Get most recently scheduled run for an export schedule

Requires ALL permissions:

* analytics:dataExport:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let exportId = "exportId_example"; // String | Export Schedule ID

apiInstance.getAnalyticsReportingExportHistoryLatest(exportId)
  .then((data) => {
    console.log(`getAnalyticsReportingExportHistoryLatest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingExportHistoryLatest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **exportId** | **String** | Export Schedule ID |  |
{: class="table table-striped"}

### Return type

**ReportingExportJobResponse**

<a name="getAnalyticsReportingExportHistoryRunId"></a>

# ReportingExportJobResponse getAnalyticsReportingExportHistoryRunId(runId, exportId)


GET /api/v2/analytics/reporting/exports/{exportId}/history/{runId}

A scheduled run for an export schedule

A scheduled run for an export schedule

Requires ALL permissions:

* analytics:dataExport:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let runId = "runId_example"; // String | Export Schedule Run ID
let exportId = "exportId_example"; // String | Export Schedule ID

apiInstance.getAnalyticsReportingExportHistoryRunId(runId, exportId)
  .then((data) => {
    console.log(`getAnalyticsReportingExportHistoryRunId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingExportHistoryRunId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **runId** | **String** | Export Schedule Run ID |  |
 **exportId** | **String** | Export Schedule ID |  |
{: class="table table-striped"}

### Return type

**ReportingExportJobResponse**

<a name="getAnalyticsReportingExports"></a>

# ReportingExportJobListing getAnalyticsReportingExports(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**ReportingExportJobListing**

<a name="getAnalyticsReportingExportsAll"></a>

# ReportingExportJobListing getAnalyticsReportingExportsAll(opts)


GET /api/v2/analytics/reporting/exports/all

Get all view export job histories requests for a user

Requires ALL permissions:

* analytics:dataExport:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getAnalyticsReportingExportsAll(opts)
  .then((data) => {
    console.log(`getAnalyticsReportingExportsAll success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingExportsAll');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**ReportingExportJobListing**

<a name="getAnalyticsReportingExportsMetadata"></a>

# ReportingExportMetadataJobListing getAnalyticsReportingExportsMetadata()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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

<a name="getAnalyticsReportingExportsSchedule"></a>

# ReportingExportJobListing getAnalyticsReportingExportsSchedule(opts)


GET /api/v2/analytics/reporting/exports/schedule

Get all view schedule export requests for a user

Requires ALL permissions:

* analytics:dataExport:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let opts = { 
  'enabled': "Any", // String | Specifies if disabled schedules, enabled schedules, or all schedules are returned. If not specified, all schedules are returned
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getAnalyticsReportingExportsSchedule(opts)
  .then((data) => {
    console.log(`getAnalyticsReportingExportsSchedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingExportsSchedule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **enabled** | **String** | Specifies if disabled schedules, enabled schedules, or all schedules are returned. If not specified, all schedules are returned | [optional] [default to Any]<br />**Values**: True, False, Any |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**ReportingExportJobListing**

<a name="getAnalyticsReportingExportsScheduleSummary"></a>

# ReportingScheduleExportSummaryResponse getAnalyticsReportingExportsScheduleSummary()


GET /api/v2/analytics/reporting/exports/schedule/summary

Gets the count of expiring and expired scheduled exports

Requires ALL permissions:

* analytics:dataExport:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

apiInstance.getAnalyticsReportingExportsScheduleSummary()
  .then((data) => {
    console.log(`getAnalyticsReportingExportsScheduleSummary success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingExportsScheduleSummary');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**ReportingScheduleExportSummaryResponse**

<a name="getAnalyticsReportingMetadata"></a>

# ReportMetaDataEntityListing getAnalyticsReportingMetadata(opts)


GET /api/v2/analytics/reporting/metadata

Get list of reporting metadata.

Requires ANY permissions:

* reporting:acd:view, reporting:status:view, reporting:interactions:view, reporting:outbound:view, reporting:quality:view, employee

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'locale': "locale_example" // String | Locale
};

apiInstance.getAnalyticsReportingMetadata(opts)
  .then((data) => {
    console.log(`getAnalyticsReportingMetadata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingMetadata');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **locale** | **String** | Locale | [optional]  |
{: class="table table-striped"}

### Return type

**ReportMetaDataEntityListing**

<a name="getAnalyticsReportingReportIdMetadata"></a>

# ReportMetaData getAnalyticsReportingReportIdMetadata(reportId, opts)


GET /api/v2/analytics/reporting/{reportId}/metadata

Get a reporting metadata.

Requires ANY permissions:

* reporting:acd:view, reporting:status:view, reporting:interactions:view, reporting:outbound:view, reporting:quality:view, employee

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let reportId = "reportId_example"; // String | Report ID
let opts = { 
  'locale': "locale_example" // String | Locale
};

apiInstance.getAnalyticsReportingReportIdMetadata(reportId, opts)
  .then((data) => {
    console.log(`getAnalyticsReportingReportIdMetadata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingReportIdMetadata');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **reportId** | **String** | Report ID |  |
 **locale** | **String** | Locale | [optional]  |
{: class="table table-striped"}

### Return type

**ReportMetaData**

<a name="getAnalyticsReportingReportformats"></a>

# **[&#39;String&#39;]** getAnalyticsReportingReportformats()


GET /api/v2/analytics/reporting/reportformats

Get a list of report formats

Get a list of report formats.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

apiInstance.getAnalyticsReportingReportformats()
  .then((data) => {
    console.log(`getAnalyticsReportingReportformats success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingReportformats');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**[&#39;String&#39;]**

<a name="getAnalyticsReportingSchedule"></a>

# ReportSchedule getAnalyticsReportingSchedule(scheduleId)


GET /api/v2/analytics/reporting/schedules/{scheduleId}

Get a scheduled report job.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.getAnalyticsReportingSchedule(scheduleId)
  .then((data) => {
    console.log(`getAnalyticsReportingSchedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingSchedule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String** | Schedule ID |  |
{: class="table table-striped"}

### Return type

**ReportSchedule**

<a name="getAnalyticsReportingScheduleHistory"></a>

# ReportRunEntryEntityDomainListing getAnalyticsReportingScheduleHistory(scheduleId, opts)


GET /api/v2/analytics/reporting/schedules/{scheduleId}/history

Get list of completed scheduled report jobs.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let scheduleId = "scheduleId_example"; // String | Schedule ID
let opts = { 
  'pageNumber': 1, // Number | 
  'pageSize': 25 // Number | 
};

apiInstance.getAnalyticsReportingScheduleHistory(scheduleId, opts)
  .then((data) => {
    console.log(`getAnalyticsReportingScheduleHistory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingScheduleHistory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String** | Schedule ID |  |
 **pageNumber** | **Number** |  | [optional] [default to 1] |
 **pageSize** | **Number** |  | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**ReportRunEntryEntityDomainListing**

<a name="getAnalyticsReportingScheduleHistoryLatest"></a>

# ReportRunEntry getAnalyticsReportingScheduleHistoryLatest(scheduleId)


GET /api/v2/analytics/reporting/schedules/{scheduleId}/history/latest

Get most recently completed scheduled report job.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.getAnalyticsReportingScheduleHistoryLatest(scheduleId)
  .then((data) => {
    console.log(`getAnalyticsReportingScheduleHistoryLatest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingScheduleHistoryLatest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String** | Schedule ID |  |
{: class="table table-striped"}

### Return type

**ReportRunEntry**

<a name="getAnalyticsReportingScheduleHistoryRunId"></a>

# ReportRunEntry getAnalyticsReportingScheduleHistoryRunId(runId, scheduleId)


GET /api/v2/analytics/reporting/schedules/{scheduleId}/history/{runId}

A completed scheduled report job

A completed scheduled report job.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let runId = "runId_example"; // String | Run ID
let scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.getAnalyticsReportingScheduleHistoryRunId(runId, scheduleId)
  .then((data) => {
    console.log(`getAnalyticsReportingScheduleHistoryRunId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingScheduleHistoryRunId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **runId** | **String** | Run ID |  |
 **scheduleId** | **String** | Schedule ID |  |
{: class="table table-striped"}

### Return type

**ReportRunEntry**

<a name="getAnalyticsReportingSchedules"></a>

# ReportScheduleEntityListing getAnalyticsReportingSchedules(opts)


GET /api/v2/analytics/reporting/schedules

Get a list of scheduled report jobs

Get a list of scheduled report jobs.

Requires ANY permissions:

* reporting:acd:view, reporting:status:view, reporting:interactions:view, reporting:outbound:view, reporting:quality:view, employee

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getAnalyticsReportingSchedules(opts)
  .then((data) => {
    console.log(`getAnalyticsReportingSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingSchedules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**ReportScheduleEntityListing**

<a name="getAnalyticsReportingSettings"></a>

# AnalyticsReportingSettings getAnalyticsReportingSettings()


GET /api/v2/analytics/reporting/settings

Get AnalyticsReportingSettings for an organization

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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

<a name="getAnalyticsReportingSettingsDashboard"></a>

# DashboardConfiguration getAnalyticsReportingSettingsDashboard(dashboardId)


GET /api/v2/analytics/reporting/settings/dashboards/{dashboardId}

Get a dashboard configuration

Requires ALL permissions:

* analytics:dashboardConfigurations:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let dashboardId = "dashboardId_example"; // String | Dashboard Configuration ID

apiInstance.getAnalyticsReportingSettingsDashboard(dashboardId)
  .then((data) => {
    console.log(`getAnalyticsReportingSettingsDashboard success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingSettingsDashboard');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dashboardId** | **String** | Dashboard Configuration ID |  |
{: class="table table-striped"}

### Return type

**DashboardConfiguration**

<a name="getAnalyticsReportingSettingsDashboards"></a>

# DashboardConfigurationListing getAnalyticsReportingSettingsDashboards(opts)


GET /api/v2/analytics/reporting/settings/dashboards

Get list of dashboard configuration

There is a limit of 5 dashboard configurations per user/organization combination.

Requires ALL permissions:

* analytics:dashboardConfigurations:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let opts = { 
  'name': "name_example", // String | name of the dashboard
  'publicOnly': true, // Boolean | public or private dashboard
  'favoriteOnly': true, // Boolean | favorite or unfavorite status of a dashboard
  'mine': true, // Boolean | dashboard which is been owned by the user
  'sortBy': "desc", // String | 
  'pageNumber': 1, // Number | 
  'pageSize': 9 // Number | 
};

apiInstance.getAnalyticsReportingSettingsDashboards(opts)
  .then((data) => {
    console.log(`getAnalyticsReportingSettingsDashboards success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingSettingsDashboards');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **name** | **String** | name of the dashboard | [optional]  |
 **publicOnly** | **Boolean** | public or private dashboard | [optional]  |
 **favoriteOnly** | **Boolean** | favorite or unfavorite status of a dashboard | [optional]  |
 **mine** | **Boolean** | dashboard which is been owned by the user | [optional]  |
 **sortBy** | **String** |  | [optional] [default to desc] |
 **pageNumber** | **Number** |  | [optional] [default to 1] |
 **pageSize** | **Number** |  | [optional] [default to 9] |
{: class="table table-striped"}

### Return type

**DashboardConfigurationListing**

<a name="getAnalyticsReportingSettingsInsights"></a>

# InsightConfigurations getAnalyticsReportingSettingsInsights()


GET /api/v2/analytics/reporting/settings/insights

Get an insight configurations

Requires ALL permissions:

* analytics:insightConfigurations:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

apiInstance.getAnalyticsReportingSettingsInsights()
  .then((data) => {
    console.log(`getAnalyticsReportingSettingsInsights success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingSettingsInsights');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**InsightConfigurations**

<a name="getAnalyticsReportingSettingsTabconfiguration"></a>

# TabConfiguration getAnalyticsReportingSettingsTabconfiguration(tabId)


GET /api/v2/analytics/reporting/settings/tabconfigurations/{tabId}

Get a tab configuration

Requires ALL permissions:

* analytics:tabConfigurations:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let tabId = "tabId_example"; // String | Tab Configuration ID

apiInstance.getAnalyticsReportingSettingsTabconfiguration(tabId)
  .then((data) => {
    console.log(`getAnalyticsReportingSettingsTabconfiguration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingSettingsTabconfiguration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tabId** | **String** | Tab Configuration ID |  |
{: class="table table-striped"}

### Return type

**TabConfiguration**

<a name="getAnalyticsReportingSettingsTabconfigurations"></a>

# TabConfigurationListing getAnalyticsReportingSettingsTabconfigurations()


GET /api/v2/analytics/reporting/settings/tabconfigurations

Get a list of tab configurations

Requires ALL permissions:

* analytics:tabConfigurations:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

apiInstance.getAnalyticsReportingSettingsTabconfigurations()
  .then((data) => {
    console.log(`getAnalyticsReportingSettingsTabconfigurations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingSettingsTabconfigurations');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**TabConfigurationListing**

<a name="getAnalyticsReportingSettingsUserDashboards"></a>

# DashboardConfigurationListing getAnalyticsReportingSettingsUserDashboards(userId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'sortBy': "asc", // String | 
  'pageNumber': 1, // Number | 
  'pageSize': 50 // Number | 
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
{: class="table table-striped"}

### Return type

**DashboardConfigurationListing**

<a name="getAnalyticsReportingSettingsViewconfiguration"></a>

# ViewConfigurations getAnalyticsReportingSettingsViewconfiguration(viewId)


GET /api/v2/analytics/reporting/settings/viewconfigurations/{viewId}

Get a view configuration

Requires ALL permissions:

* analytics:viewConfigurations:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let viewId = "viewId_example"; // String | View Configuration ID

apiInstance.getAnalyticsReportingSettingsViewconfiguration(viewId)
  .then((data) => {
    console.log(`getAnalyticsReportingSettingsViewconfiguration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingSettingsViewconfiguration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **viewId** | **String** | View Configuration ID |  |
{: class="table table-striped"}

### Return type

**ViewConfigurations**

<a name="getAnalyticsReportingSettingsViewconfigurations"></a>

# ViewConfigurationsListing getAnalyticsReportingSettingsViewconfigurations()


GET /api/v2/analytics/reporting/settings/viewconfigurations

Get list of configurations

Requires ALL permissions:

* analytics:viewConfigurations:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

apiInstance.getAnalyticsReportingSettingsViewconfigurations()
  .then((data) => {
    console.log(`getAnalyticsReportingSettingsViewconfigurations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingSettingsViewconfigurations');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**ViewConfigurationsListing**

<a name="getAnalyticsReportingTimeperiods"></a>

# **[&#39;String&#39;]** getAnalyticsReportingTimeperiods()


GET /api/v2/analytics/reporting/timeperiods

Get a list of report time periods.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

apiInstance.getAnalyticsReportingTimeperiods()
  .then((data) => {
    console.log(`getAnalyticsReportingTimeperiods success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingTimeperiods');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**[&#39;String&#39;]**

<a name="getAnalyticsResolutionsAggregatesJob"></a>

# AsyncQueryStatus getAnalyticsResolutionsAggregatesJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryStatus**

<a name="getAnalyticsResolutionsAggregatesJobResults"></a>

# ResolutionAsyncAggregateQueryResponse getAnalyticsResolutionsAggregatesJobResults(jobId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**ResolutionAsyncAggregateQueryResponse**

<a name="getAnalyticsSurveysAggregatesJob"></a>

# AsyncQueryStatus getAnalyticsSurveysAggregatesJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryStatus**

<a name="getAnalyticsSurveysAggregatesJobResults"></a>

# SurveyAsyncAggregateQueryResponse getAnalyticsSurveysAggregatesJobResults(jobId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**SurveyAsyncAggregateQueryResponse**

<a name="getAnalyticsTaskmanagementAggregatesJob"></a>

# AsyncQueryStatus getAnalyticsTaskmanagementAggregatesJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryStatus**

<a name="getAnalyticsTaskmanagementAggregatesJobResults"></a>

# TaskManagementAsyncAggregateQueryResponse getAnalyticsTaskmanagementAggregatesJobResults(jobId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**TaskManagementAsyncAggregateQueryResponse**

<a name="getAnalyticsTranscriptsAggregatesJob"></a>

# AsyncQueryStatus getAnalyticsTranscriptsAggregatesJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryStatus**

<a name="getAnalyticsTranscriptsAggregatesJobResults"></a>

# TranscriptAsyncAggregateQueryResponse getAnalyticsTranscriptsAggregatesJobResults(jobId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**TranscriptAsyncAggregateQueryResponse**

<a name="getAnalyticsUsersAggregatesJob"></a>

# AsyncQueryStatus getAnalyticsUsersAggregatesJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryStatus**

<a name="getAnalyticsUsersAggregatesJobResults"></a>

# UserAsyncAggregateQueryResponse getAnalyticsUsersAggregatesJobResults(jobId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**UserAsyncAggregateQueryResponse**

<a name="getAnalyticsUsersDetailsJob"></a>

# AsyncQueryStatus getAnalyticsUsersDetailsJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryStatus**

<a name="getAnalyticsUsersDetailsJobResults"></a>

# AnalyticsUserDetailsAsyncQueryResponse getAnalyticsUsersDetailsJobResults(jobId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AnalyticsUserDetailsAsyncQueryResponse**

<a name="getAnalyticsUsersDetailsJobsAvailability"></a>

# DataAvailabilityResponse getAnalyticsUsersDetailsJobsAvailability()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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

<a name="patchAnalyticsReportingExport"></a>

# ReportingExportJobResponse patchAnalyticsReportingExport(exportId, body)


PATCH /api/v2/analytics/reporting/exports/{exportId}

Updates only provided values for a view export request for a user

Requires ALL permissions:

* analytics:dataExport:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let exportId = "exportId_example"; // String | Export ID
let body = {}; // Object | ReportingExportJobRequest

apiInstance.patchAnalyticsReportingExport(exportId, body)
  .then((data) => {
    console.log(`patchAnalyticsReportingExport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchAnalyticsReportingExport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **exportId** | **String** | Export ID |  |
 **body** | **Object** | ReportingExportJobRequest |  |
{: class="table table-striped"}

### Return type

**ReportingExportJobResponse**

<a name="patchAnalyticsReportingExportHistoryRunId"></a>

# ReportingExportJobResponse patchAnalyticsReportingExportHistoryRunId(runId, exportId, body)


PATCH /api/v2/analytics/reporting/exports/{exportId}/history/{runId}

Updates only provided values for marking the completed runs as read for an schedule

Requires ALL permissions:

* analytics:dataExport:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let runId = "runId_example"; // String | Export Schedule Run ID
let exportId = "exportId_example"; // String | Export Schedule ID
let body = {}; // Object | ExportJobHistoryUpdate

apiInstance.patchAnalyticsReportingExportHistoryRunId(runId, exportId, body)
  .then((data) => {
    console.log(`patchAnalyticsReportingExportHistoryRunId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchAnalyticsReportingExportHistoryRunId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **runId** | **String** | Export Schedule Run ID |  |
 **exportId** | **String** | Export Schedule ID |  |
 **body** | **Object** | ExportJobHistoryUpdate |  |
{: class="table table-striped"}

### Return type

**ReportingExportJobResponse**

<a name="patchAnalyticsReportingExportSchedule"></a>

# ReportingExportJobResponse patchAnalyticsReportingExportSchedule(exportId, body)


PATCH /api/v2/analytics/reporting/exports/{exportId}/schedule

Enable/Disable for a view schedule export request for a user

Requires ALL permissions:

* analytics:dataExport:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let exportId = "exportId_example"; // String | Export ID
let body = {}; // Object | ReportingScheduleExportJobRequest

apiInstance.patchAnalyticsReportingExportSchedule(exportId, body)
  .then((data) => {
    console.log(`patchAnalyticsReportingExportSchedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchAnalyticsReportingExportSchedule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **exportId** | **String** | Export ID |  |
 **body** | **Object** | ReportingScheduleExportJobRequest |  |
{: class="table table-striped"}

### Return type

**ReportingExportJobResponse**

<a name="patchAnalyticsReportingSettings"></a>

# AnalyticsReportingSettings patchAnalyticsReportingSettings(body)


PATCH /api/v2/analytics/reporting/settings

Patch AnalyticsReportingSettings values for an organization

Requires ANY permissions:

* recording:recordingSegment:view
* analytics:conversationDetail:view
* analytics:conversationAggregate:view
* analytics:dashboardConfigurations:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AnalyticsReportingSettings**

<a name="patchAnalyticsReportingSettingsDashboard"></a>

# DashboardConfiguration patchAnalyticsReportingSettingsDashboard(dashboardId, favorite)


PATCH /api/v2/analytics/reporting/settings/dashboards/{dashboardId}

Favorite or Unfavorite a dashboard configuration

Requires ANY permissions:

* analytics:dashboardConfigurations:edit
* analytics:dashboardConfigurations:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let dashboardId = "dashboardId_example"; // String | Dashboard Configuration ID
let favorite = true; // Boolean | favorite or unfavorite a dashboard

apiInstance.patchAnalyticsReportingSettingsDashboard(dashboardId, favorite)
  .then((data) => {
    console.log(`patchAnalyticsReportingSettingsDashboard success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchAnalyticsReportingSettingsDashboard');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dashboardId** | **String** | Dashboard Configuration ID |  |
 **favorite** | **Boolean** | favorite or unfavorite a dashboard |  |
{: class="table table-striped"}

### Return type

**DashboardConfiguration**

<a name="postAnalyticsActionsAggregatesJobs"></a>

# AsyncQueryResponse postAnalyticsActionsAggregatesJobs(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryResponse**

<a name="postAnalyticsActionsAggregatesQuery"></a>

# ActionAggregateQueryResponse postAnalyticsActionsAggregatesQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**ActionAggregateQueryResponse**

<a name="postAnalyticsBotsAggregatesJobs"></a>

# AsyncQueryResponse postAnalyticsBotsAggregatesJobs(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryResponse**

<a name="postAnalyticsBotsAggregatesQuery"></a>

# BotAggregateQueryResponse postAnalyticsBotsAggregatesQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**BotAggregateQueryResponse**

<a name="postAnalyticsConversationDetailsProperties"></a>

# PropertyIndexRequest postAnalyticsConversationDetailsProperties(conversationId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**PropertyIndexRequest**

<a name="postAnalyticsConversationsActivityQuery"></a>

# ConversationActivityResponse postAnalyticsConversationsActivityQuery(body, opts)


POST /api/v2/analytics/conversations/activity/query

Query for conversation activity observations

postAnalyticsConversationsActivityQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:queueObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**ConversationActivityResponse**

<a name="postAnalyticsConversationsAggregatesJobs"></a>

# AsyncQueryResponse postAnalyticsConversationsAggregatesJobs(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryResponse**

<a name="postAnalyticsConversationsAggregatesQuery"></a>

# ConversationAggregateQueryResponse postAnalyticsConversationsAggregatesQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**ConversationAggregateQueryResponse**

<a name="postAnalyticsConversationsDetailsJobs"></a>

# AsyncQueryResponse postAnalyticsConversationsDetailsJobs(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryResponse**

<a name="postAnalyticsConversationsDetailsQuery"></a>

# AnalyticsConversationQueryResponse postAnalyticsConversationsDetailsQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AnalyticsConversationQueryResponse**

<a name="postAnalyticsConversationsTranscriptsQuery"></a>

# AnalyticsConversationWithoutAttributesMultiGetResponse postAnalyticsConversationsTranscriptsQuery(body)


POST /api/v2/analytics/conversations/transcripts/query

Search resources.

Requires ANY permissions:

* analytics:conversationDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | Search request options

apiInstance.postAnalyticsConversationsTranscriptsQuery(body)
  .then((data) => {
    console.log(`postAnalyticsConversationsTranscriptsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsConversationsTranscriptsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
{: class="table table-striped"}

### Return type

**AnalyticsConversationWithoutAttributesMultiGetResponse**

<a name="postAnalyticsEvaluationsAggregatesJobs"></a>

# AsyncQueryResponse postAnalyticsEvaluationsAggregatesJobs(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryResponse**

<a name="postAnalyticsEvaluationsAggregatesQuery"></a>

# EvaluationAggregateQueryResponse postAnalyticsEvaluationsAggregatesQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**EvaluationAggregateQueryResponse**

<a name="postAnalyticsFlowexecutionsAggregatesJobs"></a>

# AsyncQueryResponse postAnalyticsFlowexecutionsAggregatesJobs(body)


POST /api/v2/analytics/flowexecutions/aggregates/jobs

Query for flow execution aggregates asynchronously

Requires ANY permissions:

* analytics:flowExecutionAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryResponse**

<a name="postAnalyticsFlowexecutionsAggregatesQuery"></a>

# FlowExecutionAggregateQueryResponse postAnalyticsFlowexecutionsAggregatesQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**FlowExecutionAggregateQueryResponse**

<a name="postAnalyticsFlowsActivityQuery"></a>

# FlowActivityResponse postAnalyticsFlowsActivityQuery(body, opts)


POST /api/v2/analytics/flows/activity/query

Query for flow activity observations

postAnalyticsFlowsActivityQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:flowObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**FlowActivityResponse**

<a name="postAnalyticsFlowsAggregatesJobs"></a>

# AsyncQueryResponse postAnalyticsFlowsAggregatesJobs(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryResponse**

<a name="postAnalyticsFlowsAggregatesQuery"></a>

# FlowAggregateQueryResponse postAnalyticsFlowsAggregatesQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**FlowAggregateQueryResponse**

<a name="postAnalyticsFlowsObservationsQuery"></a>

# FlowObservationQueryResponse postAnalyticsFlowsObservationsQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**FlowObservationQueryResponse**

<a name="postAnalyticsJourneysAggregatesJobs"></a>

# AsyncQueryResponse postAnalyticsJourneysAggregatesJobs(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryResponse**

<a name="postAnalyticsJourneysAggregatesQuery"></a>

# JourneyAggregateQueryResponse postAnalyticsJourneysAggregatesQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**JourneyAggregateQueryResponse**

<a name="postAnalyticsKnowledgeAggregatesJobs"></a>

# AsyncQueryResponse postAnalyticsKnowledgeAggregatesJobs(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryResponse**

<a name="postAnalyticsKnowledgeAggregatesQuery"></a>

# KnowledgeAggregateQueryResponse postAnalyticsKnowledgeAggregatesQuery(body)


POST /api/v2/analytics/knowledge/aggregates/query

Query for knowledge aggregates

postAnalyticsKnowledgeAggregatesQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:knowledgeAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**KnowledgeAggregateQueryResponse**

<a name="postAnalyticsQueuesObservationsQuery"></a>

# QueueObservationQueryResponse postAnalyticsQueuesObservationsQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**QueueObservationQueryResponse**

<a name="postAnalyticsRatelimitsAggregatesQuery"></a>

# RateLimitAggregateQueryResponse postAnalyticsRatelimitsAggregatesQuery(body)


POST /api/v2/analytics/ratelimits/aggregates/query

Query for outer limits rate limit aggregates

Requires ANY permissions:

* analytics:rateLimitAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**RateLimitAggregateQueryResponse**

<a name="postAnalyticsReportingDashboardsUsersBulkRemove"></a>

# void postAnalyticsReportingDashboardsUsersBulkRemove(body)


POST /api/v2/analytics/reporting/dashboards/users/bulk/remove

Bulk delete dashboards owned by other user(s)

Requires ANY permissions:

* analytics:dashboardConfigurations:deleteActive
* analytics:dashboardConfigurations:deleteInactive

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postAnalyticsReportingExportExecute"></a>

# ReportingExportRunNowResponse postAnalyticsReportingExportExecute(exportId, opts)


POST /api/v2/analytics/reporting/exports/{exportId}/execute

Generate a export run now request

This API creates a new scheduled export  when runId is not passed and reruns a failed run when runId param is passed

Requires ALL permissions:

* analytics:dataExport:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let exportId = "exportId_example"; // String | Export ID
let opts = { 
  'runId': "runId_example" // String | runId
};

apiInstance.postAnalyticsReportingExportExecute(exportId, opts)
  .then((data) => {
    console.log(`postAnalyticsReportingExportExecute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsReportingExportExecute');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **exportId** | **String** | Export ID |  |
 **runId** | **String** | runId | [optional]  |
{: class="table table-striped"}

### Return type

**ReportingExportRunNowResponse**

<a name="postAnalyticsReportingExports"></a>

# ReportingExportJobResponse postAnalyticsReportingExports(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**ReportingExportJobResponse**

<a name="postAnalyticsReportingScheduleRunreport"></a>

# RunNowResponse postAnalyticsReportingScheduleRunreport(scheduleId)


POST /api/v2/analytics/reporting/schedules/{scheduleId}/runreport

Place a scheduled report immediately into the reporting queue

Requires ANY permissions:

* reporting:acd:view, reporting:status:view, reporting:interactions:view, reporting:outbound:view, reporting:quality:view, employee

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.postAnalyticsReportingScheduleRunreport(scheduleId)
  .then((data) => {
    console.log(`postAnalyticsReportingScheduleRunreport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsReportingScheduleRunreport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String** | Schedule ID |  |
{: class="table table-striped"}

### Return type

**RunNowResponse**

<a name="postAnalyticsReportingSchedules"></a>

# ReportSchedule postAnalyticsReportingSchedules(body)


POST /api/v2/analytics/reporting/schedules

Create a scheduled report job

Create a scheduled report job.

Requires ANY permissions:

* reporting:acd:view, reporting:status:view, reporting:interactions:view, reporting:outbound:view, reporting:quality:view, employee

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | ReportSchedule

apiInstance.postAnalyticsReportingSchedules(body)
  .then((data) => {
    console.log(`postAnalyticsReportingSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsReportingSchedules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ReportSchedule |  |
{: class="table table-striped"}

### Return type

**ReportSchedule**

<a name="postAnalyticsReportingSettingsDashboards"></a>

# DashboardConfiguration postAnalyticsReportingSettingsDashboards(body)


POST /api/v2/analytics/reporting/settings/dashboards

Create a dashboard configuration

Requires ALL permissions:

* analytics:dashboardConfigurations:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | DashboardConfigurationRequest

apiInstance.postAnalyticsReportingSettingsDashboards(body)
  .then((data) => {
    console.log(`postAnalyticsReportingSettingsDashboards success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsReportingSettingsDashboards');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | DashboardConfigurationRequest |  |
{: class="table table-striped"}

### Return type

**DashboardConfiguration**

<a name="postAnalyticsReportingSettingsDashboardsBulkRemove"></a>

# void postAnalyticsReportingSettingsDashboardsBulkRemove(body)


POST /api/v2/analytics/reporting/settings/dashboards/bulk/remove

Bulk remove dashboard configurations

Requires ALL permissions:

* analytics:dashboardConfigurations:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postAnalyticsReportingSettingsDashboardsQuery"></a>

# DashboardConfigurationListing postAnalyticsReportingSettingsDashboardsQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**DashboardConfigurationListing**

<a name="postAnalyticsReportingSettingsTabconfigurations"></a>

# TabConfiguration postAnalyticsReportingSettingsTabconfigurations(body)


POST /api/v2/analytics/reporting/settings/tabconfigurations

Create a tab configuration

Requires ALL permissions:

* analytics:tabConfigurations:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | TabConfigurationRequest

apiInstance.postAnalyticsReportingSettingsTabconfigurations(body)
  .then((data) => {
    console.log(`postAnalyticsReportingSettingsTabconfigurations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsReportingSettingsTabconfigurations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | TabConfigurationRequest |  |
{: class="table table-striped"}

### Return type

**TabConfiguration**

<a name="postAnalyticsReportingSettingsTabconfigurationsBulk"></a>

# TabConfigurationListing postAnalyticsReportingSettingsTabconfigurationsBulk(body)


POST /api/v2/analytics/reporting/settings/tabconfigurations/bulk

Create a list of tab configurations

Requires ALL permissions:

* analytics:tabConfigurations:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = [{}]; // Object | TabConfigurationRequest

apiInstance.postAnalyticsReportingSettingsTabconfigurationsBulk(body)
  .then((data) => {
    console.log(`postAnalyticsReportingSettingsTabconfigurationsBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsReportingSettingsTabconfigurationsBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | TabConfigurationRequest |  |
{: class="table table-striped"}

### Return type

**TabConfigurationListing**

<a name="postAnalyticsReportingSettingsTabconfigurationsBulkRemove"></a>

# void postAnalyticsReportingSettingsTabconfigurationsBulkRemove(body)


POST /api/v2/analytics/reporting/settings/tabconfigurations/bulk/remove

Bulk remove tab configurations

Requires ALL permissions:

* analytics:tabConfigurations:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | 

apiInstance.postAnalyticsReportingSettingsTabconfigurationsBulkRemove(body)
  .then(() => {
    console.log('postAnalyticsReportingSettingsTabconfigurationsBulkRemove returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsReportingSettingsTabconfigurationsBulkRemove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postAnalyticsReportingSettingsViewconfigurations"></a>

# ViewConfigurations postAnalyticsReportingSettingsViewconfigurations(body)


POST /api/v2/analytics/reporting/settings/viewconfigurations

Create a view configuration

Requires ALL permissions:

* analytics:viewConfigurations:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | ViewConfigurationsRequest

apiInstance.postAnalyticsReportingSettingsViewconfigurations(body)
  .then((data) => {
    console.log(`postAnalyticsReportingSettingsViewconfigurations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsReportingSettingsViewconfigurations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ViewConfigurationsRequest |  |
{: class="table table-striped"}

### Return type

**ViewConfigurations**

<a name="postAnalyticsResolutionsAggregatesJobs"></a>

# AsyncQueryResponse postAnalyticsResolutionsAggregatesJobs(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryResponse**

<a name="postAnalyticsResolutionsAggregatesQuery"></a>

# ResolutionAggregateQueryResponse postAnalyticsResolutionsAggregatesQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**ResolutionAggregateQueryResponse**

<a name="postAnalyticsRoutingActivityQuery"></a>

# RoutingActivityResponse postAnalyticsRoutingActivityQuery(body, opts)


POST /api/v2/analytics/routing/activity/query

Query for user activity observations

postAnalyticsRoutingActivityQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:queueObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**RoutingActivityResponse**

<a name="postAnalyticsSurveysAggregatesJobs"></a>

# AsyncQueryResponse postAnalyticsSurveysAggregatesJobs(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryResponse**

<a name="postAnalyticsSurveysAggregatesQuery"></a>

# SurveyAggregateQueryResponse postAnalyticsSurveysAggregatesQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**SurveyAggregateQueryResponse**

<a name="postAnalyticsTaskmanagementAggregatesJobs"></a>

# AsyncQueryResponse postAnalyticsTaskmanagementAggregatesJobs(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryResponse**

<a name="postAnalyticsTaskmanagementAggregatesQuery"></a>

# TaskManagementAggregateQueryResponse postAnalyticsTaskmanagementAggregatesQuery(body)


POST /api/v2/analytics/taskmanagement/aggregates/query

Query for task management aggregates

postAnalyticsTaskmanagementAggregatesQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:taskManagementAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**TaskManagementAggregateQueryResponse**

<a name="postAnalyticsTeamsActivityQuery"></a>

# TeamActivityResponse postAnalyticsTeamsActivityQuery(body, opts)


POST /api/v2/analytics/teams/activity/query

Query for team activity observations

postAnalyticsTeamsActivityQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:teamObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**TeamActivityResponse**

<a name="postAnalyticsTranscriptsAggregatesJobs"></a>

# AsyncQueryResponse postAnalyticsTranscriptsAggregatesJobs(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryResponse**

<a name="postAnalyticsTranscriptsAggregatesQuery"></a>

# TranscriptAggregateQueryResponse postAnalyticsTranscriptsAggregatesQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**TranscriptAggregateQueryResponse**

<a name="postAnalyticsUsersActivityQuery"></a>

# UserActivityResponse postAnalyticsUsersActivityQuery(body, opts)


POST /api/v2/analytics/users/activity/query

Query for user activity observations

postAnalyticsUsersActivityQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:userObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**UserActivityResponse**

<a name="postAnalyticsUsersAggregatesJobs"></a>

# AsyncQueryResponse postAnalyticsUsersAggregatesJobs(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryResponse**

<a name="postAnalyticsUsersAggregatesQuery"></a>

# UserAggregateQueryResponse postAnalyticsUsersAggregatesQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**UserAggregateQueryResponse**

<a name="postAnalyticsUsersDetailsJobs"></a>

# AsyncQueryResponse postAnalyticsUsersDetailsJobs(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AsyncQueryResponse**

<a name="postAnalyticsUsersDetailsQuery"></a>

# AnalyticsUserDetailsQueryResponse postAnalyticsUsersDetailsQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AnalyticsUserDetailsQueryResponse**

<a name="postAnalyticsUsersObservationsQuery"></a>

# UserObservationQueryResponse postAnalyticsUsersObservationsQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**UserObservationQueryResponse**

<a name="putAnalyticsDataretentionSettings"></a>

# AnalyticsDataRetentionResponse putAnalyticsDataretentionSettings(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**AnalyticsDataRetentionResponse**

<a name="putAnalyticsReportingExport"></a>

# ReportingExportJobResponse putAnalyticsReportingExport(exportId, body)


PUT /api/v2/analytics/reporting/exports/{exportId}

Replaces view export request for a user

Requires ALL permissions:

* analytics:dataExport:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let exportId = "exportId_example"; // String | Export ID
let body = {}; // Object | ReportingExportJobRequest

apiInstance.putAnalyticsReportingExport(exportId, body)
  .then((data) => {
    console.log(`putAnalyticsReportingExport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAnalyticsReportingExport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **exportId** | **String** | Export ID |  |
 **body** | **Object** | ReportingExportJobRequest |  |
{: class="table table-striped"}

### Return type

**ReportingExportJobResponse**

<a name="putAnalyticsReportingSchedule"></a>

# ReportSchedule putAnalyticsReportingSchedule(scheduleId, body)


PUT /api/v2/analytics/reporting/schedules/{scheduleId}

Update a scheduled report job.

Requires ANY permissions:

* reporting:acd:view, reporting:status:view, reporting:interactions:view, reporting:outbound:view, reporting:quality:view, employee

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let scheduleId = "scheduleId_example"; // String | Schedule ID
let body = {}; // Object | ReportSchedule

apiInstance.putAnalyticsReportingSchedule(scheduleId, body)
  .then((data) => {
    console.log(`putAnalyticsReportingSchedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAnalyticsReportingSchedule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String** | Schedule ID |  |
 **body** | **Object** | ReportSchedule |  |
{: class="table table-striped"}

### Return type

**ReportSchedule**

<a name="putAnalyticsReportingSettingsDashboard"></a>

# DashboardConfiguration putAnalyticsReportingSettingsDashboard(dashboardId, body)


PUT /api/v2/analytics/reporting/settings/dashboards/{dashboardId}

Update a dashboard configuration

Requires ALL permissions:

* analytics:dashboardConfigurations:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let dashboardId = "dashboardId_example"; // String | Dashboard Configuration ID
let body = {}; // Object | DashboardConfigurationRequest

apiInstance.putAnalyticsReportingSettingsDashboard(dashboardId, body)
  .then((data) => {
    console.log(`putAnalyticsReportingSettingsDashboard success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAnalyticsReportingSettingsDashboard');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dashboardId** | **String** | Dashboard Configuration ID |  |
 **body** | **Object** | DashboardConfigurationRequest |  |
{: class="table table-striped"}

### Return type

**DashboardConfiguration**

<a name="putAnalyticsReportingSettingsInsights"></a>

# InsightConfigurations putAnalyticsReportingSettingsInsights(body)


PUT /api/v2/analytics/reporting/settings/insights

Update an insight configurations

Requires ALL permissions:

* analytics:insightConfigurations:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | InsightConfigurations

apiInstance.putAnalyticsReportingSettingsInsights(body)
  .then((data) => {
    console.log(`putAnalyticsReportingSettingsInsights success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAnalyticsReportingSettingsInsights');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | InsightConfigurations |  |
{: class="table table-striped"}

### Return type

**InsightConfigurations**

<a name="putAnalyticsReportingSettingsTabconfiguration"></a>

# TabConfiguration putAnalyticsReportingSettingsTabconfiguration(tabId, body)


PUT /api/v2/analytics/reporting/settings/tabconfigurations/{tabId}

Update a tab configuration

Requires ALL permissions:

* analytics:tabConfigurations:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let tabId = "tabId_example"; // String | Tab Configuration ID
let body = {}; // Object | TabConfigurationRequest

apiInstance.putAnalyticsReportingSettingsTabconfiguration(tabId, body)
  .then((data) => {
    console.log(`putAnalyticsReportingSettingsTabconfiguration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAnalyticsReportingSettingsTabconfiguration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tabId** | **String** | Tab Configuration ID |  |
 **body** | **Object** | TabConfigurationRequest |  |
{: class="table table-striped"}

### Return type

**TabConfiguration**

<a name="putAnalyticsReportingSettingsTabconfigurationsBulk"></a>

# TabConfigurationListing putAnalyticsReportingSettingsTabconfigurationsBulk(body)


PUT /api/v2/analytics/reporting/settings/tabconfigurations/bulk

Update a list of tab configurations

Requires ALL permissions:

* analytics:tabConfigurations:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let body = [{}]; // Object | TabConfigurationRequest

apiInstance.putAnalyticsReportingSettingsTabconfigurationsBulk(body)
  .then((data) => {
    console.log(`putAnalyticsReportingSettingsTabconfigurationsBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAnalyticsReportingSettingsTabconfigurationsBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | TabConfigurationRequest |  |
{: class="table table-striped"}

### Return type

**TabConfigurationListing**

<a name="putAnalyticsReportingSettingsViewconfiguration"></a>

# ViewConfigurations putAnalyticsReportingSettingsViewconfiguration(viewId, body)


PUT /api/v2/analytics/reporting/settings/viewconfigurations/{viewId}

Update a view configuration

Requires ALL permissions:

* analytics:viewConfigurations:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let viewId = "viewId_example"; // String | View Configuration ID
let body = {}; // Object | ViewConfigurationsRequest

apiInstance.putAnalyticsReportingSettingsViewconfiguration(viewId, body)
  .then((data) => {
    console.log(`putAnalyticsReportingSettingsViewconfiguration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAnalyticsReportingSettingsViewconfiguration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **viewId** | **String** | View Configuration ID |  |
 **body** | **Object** | ViewConfigurationsRequest |  |
{: class="table table-striped"}

### Return type

**ViewConfigurations**

