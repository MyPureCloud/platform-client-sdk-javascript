import platformClient = require('purecloud-platform-client-v2');

declare module 'purecloud-platform-client-v2' {
	export const ApiClient: ApiClientClass;
}

declare class ApiClientClass {
	instance: ApiClientClass;
	proxy: ProxyConfig;
	superagent: any;

	callApi(path: string, httpMethod: string, pathParams: { [key: string]: string; }, queryParams: { [key: string]: object; }, headerParams: { [key: string]: object; }, formParams: { [key: string]: object; }, bodyParam: any, authNames: Array<string>, contentTypes: Array<string>, accepts: Array<string>): Promise<any>;
	loginClientCredentialsGrant(clientId: string, clientSecret: string): Promise<AuthData>;
	loginImplicitGrant(clientId: string, redirectUri: string, opts?: LoginImplicitGrantOptions): Promise<AuthData>;
	logout(logoutRedirectUri: string): void;
	setAccessToken(token: string): void;
	setDebugLog(debugLog: any, maxLines: number): void;
	setEnvironment(environment: string): void;
	setPersistSettings(doPersist: boolean, prefix?: string): void;
	setReturnExtendedResponses(returnExtended: boolean): void;
	setStorageKey(storageKey: string): void;
}

declare class LoginImplicitGrantOptions {
	state?: string;
}

declare class AuthData {
	accessToken: string;
	state?: string;
	tokenExpiryTime: number;
	tokenExpiryTimeString: string;
}

declare class ProxyConfig {
	host: string;
	port: number;
	protocol: string;
}

declare class AlertingApi {  
  	deleteAlertingInteractionstatsAlert(alertId: string): Promise<void>; 
  	deleteAlertingInteractionstatsRule(ruleId: string): Promise<void>; 
  	getAlertingAlertsActive(): Promise<Models.ActiveAlertCount>; 
  	getAlertingInteractionstatsAlert(alertId: string, opts?: AlertingApi.getAlertingInteractionstatsAlertOptions): Promise<Models.InteractionStatsAlert>; 
  	getAlertingInteractionstatsAlerts(opts?: AlertingApi.getAlertingInteractionstatsAlertsOptions): Promise<Models.InteractionStatsAlertContainer>; 
  	getAlertingInteractionstatsAlertsUnread(): Promise<Models.UnreadMetric>; 
  	getAlertingInteractionstatsRule(ruleId: string, opts?: AlertingApi.getAlertingInteractionstatsRuleOptions): Promise<Models.InteractionStatsRule>; 
  	getAlertingInteractionstatsRules(opts?: AlertingApi.getAlertingInteractionstatsRulesOptions): Promise<Models.InteractionStatsRuleContainer>; 
  	postAlertingInteractionstatsRules(body: Models.InteractionStatsRule, opts?: AlertingApi.postAlertingInteractionstatsRulesOptions): Promise<Models.InteractionStatsRule>; 
  	putAlertingInteractionstatsAlert(alertId: string, body: Models.UnreadStatus, opts?: AlertingApi.putAlertingInteractionstatsAlertOptions): Promise<Models.UnreadStatus>; 
  	putAlertingInteractionstatsRule(ruleId: string, body: Models.InteractionStatsRule, opts?: AlertingApi.putAlertingInteractionstatsRuleOptions): Promise<Models.InteractionStatsRule>;
}

declare namespace AlertingApi { 
	export interface getAlertingInteractionstatsAlertOptions { 
		"expand"?: Array<string>;
	}
	export interface getAlertingInteractionstatsAlertsOptions { 
		"expand"?: Array<string>;
	}
	export interface getAlertingInteractionstatsRuleOptions { 
		"expand"?: Array<string>;
	}
	export interface getAlertingInteractionstatsRulesOptions { 
		"expand"?: Array<string>;
	}
	export interface postAlertingInteractionstatsRulesOptions { 
		"expand"?: Array<string>;
	}
	export interface putAlertingInteractionstatsAlertOptions { 
		"expand"?: Array<string>;
	}
	export interface putAlertingInteractionstatsRuleOptions { 
		"expand"?: Array<string>;
	}
}

declare class AnalyticsApi {  
  	deleteAnalyticsConversationsDetailsJob(jobId: string): Promise<void>; 
  	deleteAnalyticsReportingSchedule(scheduleId: string): Promise<void>; 
  	deleteAnalyticsUsersDetailsJob(jobId: string): Promise<void>; 
  	getAnalyticsConversationDetails(conversationId: string): Promise<Models.AnalyticsConversationWithoutAttributes>; 
  	getAnalyticsConversationsDetails(opts?: AnalyticsApi.getAnalyticsConversationsDetailsOptions): Promise<Models.AnalyticsConversationWithoutAttributesMultiGetResponse>; 
  	getAnalyticsConversationsDetailsJob(jobId: string): Promise<Models.AsyncQueryStatus>; 
  	getAnalyticsConversationsDetailsJobResults(jobId: string, opts?: AnalyticsApi.getAnalyticsConversationsDetailsJobResultsOptions): Promise<Models.AnalyticsConversationAsyncQueryResponse>; 
  	getAnalyticsReportingExports(): Promise<Models.ReportingExportJobListing>; 
  	getAnalyticsReportingExportsMetadata(): Promise<Models.ReportingExportMetadataJobListing>; 
  	getAnalyticsReportingMetadata(opts?: AnalyticsApi.getAnalyticsReportingMetadataOptions): Promise<Models.ReportMetaDataEntityListing>; 
  	getAnalyticsReportingReportIdMetadata(reportId: string, opts?: AnalyticsApi.getAnalyticsReportingReportIdMetadataOptions): Promise<Models.ReportMetaData>; 
  	getAnalyticsReportingReportformats(): Promise<Array<string>>; 
  	getAnalyticsReportingSchedule(scheduleId: string): Promise<Models.ReportSchedule>; 
  	getAnalyticsReportingScheduleHistory(scheduleId: string, opts?: AnalyticsApi.getAnalyticsReportingScheduleHistoryOptions): Promise<Models.ReportRunEntryEntityDomainListing>; 
  	getAnalyticsReportingScheduleHistoryLatest(scheduleId: string): Promise<Models.ReportRunEntry>; 
  	getAnalyticsReportingScheduleHistoryRunId(runId: string, scheduleId: string): Promise<Models.ReportRunEntry>; 
  	getAnalyticsReportingSchedules(opts?: AnalyticsApi.getAnalyticsReportingSchedulesOptions): Promise<Models.ReportScheduleEntityListing>; 
  	getAnalyticsReportingTimeperiods(): Promise<Array<string>>; 
  	getAnalyticsUsersDetailsJob(jobId: string): Promise<Models.AsyncQueryStatus>; 
  	getAnalyticsUsersDetailsJobResults(jobId: string, opts?: AnalyticsApi.getAnalyticsUsersDetailsJobResultsOptions): Promise<Models.AnalyticsUserDetailsAsyncQueryResponse>; 
  	postAnalyticsConversationDetailsProperties(conversationId: string, body: Models.PropertyIndexRequest): Promise<Models.PropertyIndexRequest>; 
  	postAnalyticsConversationsAggregatesQuery(body: Models.ConversationAggregationQuery): Promise<Models.ConversationAggregateQueryResponse>; 
  	postAnalyticsConversationsDetailsJobs(body: Models.AsyncConversationQuery): Promise<Models.AsyncQueryResponse>; 
  	postAnalyticsConversationsDetailsQuery(body: Models.ConversationQuery): Promise<Models.AnalyticsConversationQueryResponse>; 
  	postAnalyticsEvaluationsAggregatesQuery(body: Models.EvaluationAggregationQuery): Promise<Models.EvaluationAggregateQueryResponse>; 
  	postAnalyticsFlowsAggregatesQuery(body: Models.FlowAggregationQuery): Promise<Models.FlowAggregateQueryResponse>; 
  	postAnalyticsFlowsObservationsQuery(body: Models.FlowObservationQuery): Promise<Models.FlowObservationQueryResponse>; 
  	postAnalyticsQueuesObservationsQuery(body: Models.QueueObservationQuery): Promise<Models.QueueObservationQueryResponse>; 
  	postAnalyticsReportingExports(body: Models.ReportingExportJobRequest): Promise<Models.ReportingExportJobResponse>; 
  	postAnalyticsReportingScheduleRunreport(scheduleId: string): Promise<Models.RunNowResponse>; 
  	postAnalyticsReportingSchedules(body: Models.ReportSchedule): Promise<Models.ReportSchedule>; 
  	postAnalyticsSurveysAggregatesQuery(body: Models.SurveyAggregationQuery): Promise<Models.SurveyAggregateQueryResponse>; 
  	postAnalyticsUsersAggregatesQuery(body: Models.UserAggregationQuery): Promise<Models.UserAggregateQueryResponse>; 
  	postAnalyticsUsersDetailsJobs(body: Models.AsyncUserDetailsQuery): Promise<Models.AsyncQueryResponse>; 
  	postAnalyticsUsersDetailsQuery(body: Models.UserDetailsQuery): Promise<Models.AnalyticsUserDetailsQueryResponse>; 
  	postAnalyticsUsersObservationsQuery(body: Models.UserObservationQuery): Promise<Models.UserObservationQueryResponse>; 
  	putAnalyticsReportingSchedule(scheduleId: string, body: Models.ReportSchedule): Promise<Models.ReportSchedule>;
}

declare namespace AnalyticsApi { 
	export interface getAnalyticsConversationsDetailsOptions { 
		"id"?: Array<string>;
	}
	export interface getAnalyticsConversationsDetailsJobResultsOptions { 
		"cursor"?: string;
		"pageSize"?: number;
	}
	export interface getAnalyticsReportingMetadataOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"locale"?: string;
	}
	export interface getAnalyticsReportingReportIdMetadataOptions { 
		"locale"?: string;
	}
	export interface getAnalyticsReportingScheduleHistoryOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
	}
	export interface getAnalyticsReportingSchedulesOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
	}
	export interface getAnalyticsUsersDetailsJobResultsOptions { 
		"cursor"?: string;
		"pageSize"?: number;
	}
}

declare class ArchitectApi {  
  	deleteArchitectEmergencygroup(emergencyGroupId: string): Promise<void>; 
  	deleteArchitectIvr(ivrId: string): Promise<void>; 
  	deleteArchitectPrompt(promptId: string, opts?: ArchitectApi.deleteArchitectPromptOptions): Promise<void>; 
  	deleteArchitectPromptResource(promptId: string, languageCode: string): Promise<void>; 
  	deleteArchitectPromptResourceAudio(promptId: string, languageCode: string): Promise<void>; 
  	deleteArchitectPrompts(id: Array<string>): Promise<Models.Operation>; 
  	deleteArchitectSchedule(scheduleId: string): Promise<void>; 
  	deleteArchitectSchedulegroup(scheduleGroupId: string): Promise<void>; 
  	deleteArchitectSystempromptResource(promptId: string, languageCode: string): Promise<void>; 
  	deleteFlow(flowId: string): Promise<void>; 
  	deleteFlows(id: Array<string>): Promise<Models.Operation>; 
  	deleteFlowsDatatable(datatableId: string, opts?: ArchitectApi.deleteFlowsDatatableOptions): Promise<void>; 
  	deleteFlowsDatatableRow(datatableId: string, rowId: string): Promise<void>; 
  	getArchitectDependencytracking(name: string, opts?: ArchitectApi.getArchitectDependencytrackingOptions): Promise<Models.DependencyObjectEntityListing>; 
  	getArchitectDependencytrackingBuild(): Promise<Models.DependencyStatus>; 
  	getArchitectDependencytrackingConsumedresources(id: string, version: string, objectType: string, opts?: ArchitectApi.getArchitectDependencytrackingConsumedresourcesOptions): Promise<Models.ConsumedResourcesEntityListing>; 
  	getArchitectDependencytrackingConsumingresources(id: string, objectType: string, opts?: ArchitectApi.getArchitectDependencytrackingConsumingresourcesOptions): Promise<Models.ConsumingResourcesEntityListing>; 
  	getArchitectDependencytrackingDeletedresourceconsumers(opts?: ArchitectApi.getArchitectDependencytrackingDeletedresourceconsumersOptions): Promise<Models.DependencyObjectEntityListing>; 
  	getArchitectDependencytrackingObject(id: string, opts?: ArchitectApi.getArchitectDependencytrackingObjectOptions): Promise<Models.DependencyObject>; 
  	getArchitectDependencytrackingType(typeId: string): Promise<Models.DependencyType>; 
  	getArchitectDependencytrackingTypes(opts?: ArchitectApi.getArchitectDependencytrackingTypesOptions): Promise<Models.DependencyTypeEntityListing>; 
  	getArchitectDependencytrackingUpdatedresourceconsumers(opts?: ArchitectApi.getArchitectDependencytrackingUpdatedresourceconsumersOptions): Promise<Models.DependencyObjectEntityListing>; 
  	getArchitectEmergencygroup(emergencyGroupId: string): Promise<Models.EmergencyGroup>; 
  	getArchitectEmergencygroups(opts?: ArchitectApi.getArchitectEmergencygroupsOptions): Promise<Models.EmergencyGroupListing>; 
  	getArchitectIvr(ivrId: string): Promise<Models.IVR>; 
  	getArchitectIvrs(opts?: ArchitectApi.getArchitectIvrsOptions): Promise<Models.IVREntityListing>; 
  	getArchitectPrompt(promptId: string): Promise<Models.Prompt>; 
  	getArchitectPromptHistoryHistoryId(promptId: string, historyId: string, opts?: ArchitectApi.getArchitectPromptHistoryHistoryIdOptions): Promise<Models.HistoryListing>; 
  	getArchitectPromptResource(promptId: string, languageCode: string): Promise<Models.PromptAsset>; 
  	getArchitectPromptResources(promptId: string, opts?: ArchitectApi.getArchitectPromptResourcesOptions): Promise<Models.PromptAssetEntityListing>; 
  	getArchitectPrompts(opts?: ArchitectApi.getArchitectPromptsOptions): Promise<Models.PromptEntityListing>; 
  	getArchitectSchedule(scheduleId: string): Promise<Models.Schedule>; 
  	getArchitectSchedulegroup(scheduleGroupId: string): Promise<Models.ScheduleGroup>; 
  	getArchitectSchedulegroups(opts?: ArchitectApi.getArchitectSchedulegroupsOptions): Promise<Models.ScheduleGroupEntityListing>; 
  	getArchitectSchedules(opts?: ArchitectApi.getArchitectSchedulesOptions): Promise<Models.ScheduleEntityListing>; 
  	getArchitectSystemprompt(promptId: string): Promise<Models.SystemPrompt>; 
  	getArchitectSystempromptHistoryHistoryId(promptId: string, historyId: string, opts?: ArchitectApi.getArchitectSystempromptHistoryHistoryIdOptions): Promise<Models.HistoryListing>; 
  	getArchitectSystempromptResource(promptId: string, languageCode: string): Promise<Models.SystemPromptAsset>; 
  	getArchitectSystempromptResources(promptId: string, opts?: ArchitectApi.getArchitectSystempromptResourcesOptions): Promise<Models.SystemPromptAssetEntityListing>; 
  	getArchitectSystemprompts(opts?: ArchitectApi.getArchitectSystempromptsOptions): Promise<Models.SystemPromptEntityListing>; 
  	getFlow(flowId: string, opts?: ArchitectApi.getFlowOptions): Promise<Models.Flow>; 
  	getFlowHistoryHistoryId(flowId: string, historyId: string, opts?: ArchitectApi.getFlowHistoryHistoryIdOptions): Promise<Models.HistoryListing>; 
  	getFlowLatestconfiguration(flowId: string, opts?: ArchitectApi.getFlowLatestconfigurationOptions): Promise<object>; 
  	getFlowVersion(flowId: string, versionId: string, opts?: ArchitectApi.getFlowVersionOptions): Promise<Models.FlowVersion>; 
  	getFlowVersionConfiguration(flowId: string, versionId: string, opts?: ArchitectApi.getFlowVersionConfigurationOptions): Promise<object>; 
  	getFlowVersions(flowId: string, opts?: ArchitectApi.getFlowVersionsOptions): Promise<Models.FlowVersionEntityListing>; 
  	getFlows(opts?: ArchitectApi.getFlowsOptions): Promise<Models.FlowEntityListing>; 
  	getFlowsDatatable(datatableId: string, opts?: ArchitectApi.getFlowsDatatableOptions): Promise<Models.DataTable>; 
  	getFlowsDatatableExportJob(datatableId: string, exportJobId: string): Promise<Models.DataTableExportJob>; 
  	getFlowsDatatableImportJob(datatableId: string, importJobId: string): Promise<Models.DataTableImportJob>; 
  	getFlowsDatatableImportJobs(datatableId: string, opts?: ArchitectApi.getFlowsDatatableImportJobsOptions): Promise<Models.EntityListing>; 
  	getFlowsDatatableRow(datatableId: string, rowId: string, opts?: ArchitectApi.getFlowsDatatableRowOptions): Promise<{ [key: string]: object; }>; 
  	getFlowsDatatableRows(datatableId: string, opts?: ArchitectApi.getFlowsDatatableRowsOptions): Promise<Models.DataTableRowEntityListing>; 
  	getFlowsDatatables(opts?: ArchitectApi.getFlowsDatatablesOptions): Promise<Models.DataTablesDomainEntityListing>; 
  	getFlowsDivisionviews(opts?: ArchitectApi.getFlowsDivisionviewsOptions): Promise<Models.FlowDivisionViewEntityListing>; 
  	getFlowsOutcome(flowOutcomeId: string): Promise<Models.FlowOutcome>; 
  	getFlowsOutcomes(opts?: ArchitectApi.getFlowsOutcomesOptions): Promise<Models.FlowOutcomeListing>; 
  	postArchitectDependencytrackingBuild(): Promise<void>; 
  	postArchitectEmergencygroups(body: Models.EmergencyGroup): Promise<Models.EmergencyGroup>; 
  	postArchitectIvrs(body: Models.IVR): Promise<Models.IVR>; 
  	postArchitectPromptHistory(promptId: string): Promise<Models.Operation>; 
  	postArchitectPromptResources(promptId: string, body: Models.PromptAssetCreate): Promise<Models.PromptAsset>; 
  	postArchitectPrompts(body: Models.Prompt): Promise<Models.Prompt>; 
  	postArchitectSchedulegroups(body: Models.ScheduleGroup): Promise<Models.ScheduleGroup>; 
  	postArchitectSchedules(body: Models.Schedule): Promise<Models.Schedule>; 
  	postArchitectSystempromptHistory(promptId: string): Promise<Models.Operation>; 
  	postArchitectSystempromptResources(promptId: string, body: Models.SystemPromptAsset): Promise<Models.SystemPromptAsset>; 
  	postFlowVersions(flowId: string, body: object): Promise<Models.FlowVersion>; 
  	postFlows(body: Models.Flow): Promise<Models.Flow>; 
  	postFlowsActionsCheckin(flow: string): Promise<Models.Operation>; 
  	postFlowsActionsCheckout(flow: string): Promise<Models.Flow>; 
  	postFlowsActionsDeactivate(flow: string): Promise<Models.Flow>; 
  	postFlowsActionsPublish(flow: string, opts?: ArchitectApi.postFlowsActionsPublishOptions): Promise<Models.Operation>; 
  	postFlowsActionsRevert(flow: string): Promise<Models.Flow>; 
  	postFlowsActionsUnlock(flow: string): Promise<Models.Flow>; 
  	postFlowsDatatableExportJobs(datatableId: string): Promise<Models.DataTableExportJob>; 
  	postFlowsDatatableImportJobs(datatableId: string, body: Models.DataTableImportJob): Promise<Models.DataTableImportJob>; 
  	postFlowsDatatableRows(datatableId: string, dataTableRow: object): Promise<{ [key: string]: object; }>; 
  	postFlowsDatatables(body: Models.DataTable): Promise<Models.DataTable>; 
  	postFlowsOutcomes(opts?: ArchitectApi.postFlowsOutcomesOptions): Promise<Models.FlowOutcome>; 
  	putArchitectEmergencygroup(emergencyGroupId: string, body: Models.EmergencyGroup): Promise<Models.EmergencyGroup>; 
  	putArchitectIvr(ivrId: string, body: Models.IVR): Promise<Models.IVR>; 
  	putArchitectPrompt(promptId: string, body: Models.Prompt): Promise<Models.Prompt>; 
  	putArchitectPromptResource(promptId: string, languageCode: string, body: Models.PromptAsset): Promise<Models.PromptAsset>; 
  	putArchitectSchedule(scheduleId: string, body: Models.Schedule): Promise<Models.Schedule>; 
  	putArchitectSchedulegroup(scheduleGroupId: string, body: Models.ScheduleGroup): Promise<Models.ScheduleGroup>; 
  	putArchitectSystempromptResource(promptId: string, languageCode: string, body: Models.SystemPromptAsset): Promise<Models.SystemPromptAsset>; 
  	putFlow(flowId: string, body: Models.Flow): Promise<Models.Flow>; 
  	putFlowsDatatable(datatableId: string, opts?: ArchitectApi.putFlowsDatatableOptions): Promise<Models.DataTable>; 
  	putFlowsDatatableRow(datatableId: string, rowId: string, opts?: ArchitectApi.putFlowsDatatableRowOptions): Promise<{ [key: string]: object; }>; 
  	putFlowsOutcome(flowOutcomeId: string, opts?: ArchitectApi.putFlowsOutcomeOptions): Promise<Models.Operation>;
}

declare namespace ArchitectApi { 
	export interface deleteArchitectPromptOptions { 
		"allResources"?: boolean;
	}
	export interface deleteFlowsDatatableOptions { 
		"force"?: boolean;
	}
	export interface getArchitectDependencytrackingOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"objectType"?: Array<string>;
		"consumedResources"?: boolean;
		"consumingResources"?: boolean;
		"consumedResourceType"?: Array<string>;
		"consumingResourceType"?: Array<string>;
	}
	export interface getArchitectDependencytrackingConsumedresourcesOptions { 
		"resourceType"?: Array<string>;
		"pageNumber"?: number;
		"pageSize"?: number;
	}
	export interface getArchitectDependencytrackingConsumingresourcesOptions { 
		"resourceType"?: Array<string>;
		"pageNumber"?: number;
		"pageSize"?: number;
		"flowFilter"?: string;
	}
	export interface getArchitectDependencytrackingDeletedresourceconsumersOptions { 
		"name"?: string;
		"objectType"?: Array<string>;
		"flowFilter"?: string;
		"consumedResources"?: boolean;
		"consumedResourceType"?: Array<string>;
		"pageNumber"?: number;
		"pageSize"?: number;
	}
	export interface getArchitectDependencytrackingObjectOptions { 
		"version"?: string;
		"objectType"?: string;
		"consumedResources"?: boolean;
		"consumingResources"?: boolean;
		"consumedResourceType"?: Array<string>;
		"consumingResourceType"?: Array<string>;
	}
	export interface getArchitectDependencytrackingTypesOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
	}
	export interface getArchitectDependencytrackingUpdatedresourceconsumersOptions { 
		"name"?: string;
		"objectType"?: Array<string>;
		"consumedResources"?: boolean;
		"consumedResourceType"?: Array<string>;
		"pageNumber"?: number;
		"pageSize"?: number;
	}
	export interface getArchitectEmergencygroupsOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
		"name"?: string;
	}
	export interface getArchitectIvrsOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
		"name"?: string;
	}
	export interface getArchitectPromptHistoryHistoryIdOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"sortOrder"?: string;
		"sortBy"?: string;
		"action"?: Array<string>;
	}
	export interface getArchitectPromptResourcesOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
	}
	export interface getArchitectPromptsOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"name"?: Array<string>;
		"description"?: string;
		"nameOrDescription"?: string;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface getArchitectSchedulegroupsOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
		"name"?: string;
	}
	export interface getArchitectSchedulesOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
		"name"?: string;
	}
	export interface getArchitectSystempromptHistoryHistoryIdOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"sortOrder"?: string;
		"sortBy"?: string;
		"action"?: Array<string>;
	}
	export interface getArchitectSystempromptResourcesOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface getArchitectSystempromptsOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
		"name"?: string;
		"description"?: string;
		"nameOrDescription"?: string;
	}
	export interface getFlowOptions { 
		"deleted"?: boolean;
	}
	export interface getFlowHistoryHistoryIdOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"sortOrder"?: string;
		"sortBy"?: string;
		"action"?: Array<string>;
	}
	export interface getFlowLatestconfigurationOptions { 
		"deleted"?: boolean;
	}
	export interface getFlowVersionOptions { 
		"deleted"?: string;
	}
	export interface getFlowVersionConfigurationOptions { 
		"deleted"?: string;
	}
	export interface getFlowVersionsOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"deleted"?: boolean;
	}
	export interface getFlowsOptions { 
		"type"?: Array<string>;
		"pageNumber"?: number;
		"pageSize"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
		"id"?: Array<string>;
		"name"?: string;
		"description"?: string;
		"nameOrDescription"?: string;
		"publishVersionId"?: string;
		"editableBy"?: string;
		"lockedBy"?: string;
		"lockedByClientId"?: string;
		"secure"?: string;
		"deleted"?: boolean;
		"includeSchemas"?: boolean;
		"publishedAfter"?: string;
		"publishedBefore"?: string;
		"divisionId"?: Array<string>;
	}
	export interface getFlowsDatatableOptions { 
		"expand"?: string;
	}
	export interface getFlowsDatatableImportJobsOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
	}
	export interface getFlowsDatatableRowOptions { 
		"showbrief"?: boolean;
	}
	export interface getFlowsDatatableRowsOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"showbrief"?: boolean;
	}
	export interface getFlowsDatatablesOptions { 
		"expand"?: string;
		"pageNumber"?: number;
		"pageSize"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface getFlowsDivisionviewsOptions { 
		"type"?: Array<string>;
		"pageNumber"?: number;
		"pageSize"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
		"id"?: Array<string>;
		"name"?: string;
		"publishVersionId"?: string;
		"publishedAfter"?: string;
		"publishedBefore"?: string;
		"divisionId"?: Array<string>;
		"includeSchemas"?: boolean;
	}
	export interface getFlowsOutcomesOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
		"id"?: Array<string>;
		"name"?: string;
		"description"?: string;
		"nameOrDescription"?: string;
	}
	export interface postFlowsActionsPublishOptions { 
		"version"?: string;
	}
	export interface postFlowsOutcomesOptions { 
		"body"?: Models.FlowOutcome;
	}
	export interface putFlowsDatatableOptions { 
		"expand"?: string;
		"body"?: Models.DataTable;
	}
	export interface putFlowsDatatableRowOptions { 
		"body"?: object;
	}
	export interface putFlowsOutcomeOptions { 
		"body"?: Models.FlowOutcome;
	}
}

declare class AuditApi {  
  	getAuditsQueryTransactionId(transactionId: string): Promise<Models.AuditQueryExecutionStatusResponse>; 
  	getAuditsQueryTransactionIdResults(transactionId: string, opts?: AuditApi.getAuditsQueryTransactionIdResultsOptions): Promise<Models.AuditQueryExecutionResultsResponse>; 
  	postAuditsQuery(body: Models.AuditQueryRequest): Promise<Models.AuditQueryExecutionStatusResponse>;
}

declare namespace AuditApi { 
	export interface getAuditsQueryTransactionIdResultsOptions { 
		"cursor"?: string;
		"pageSize"?: number;
		"expand"?: Array<string>;
	}
}

declare class AuthorizationApi {  
  	deleteAuthorizationDivision(divisionId: string, opts?: AuthorizationApi.deleteAuthorizationDivisionOptions): Promise<void>; 
  	deleteAuthorizationRole(roleId: string): Promise<void>; 
  	deleteAuthorizationSubjectDivisionRole(subjectId: string, divisionId: string, roleId: string): Promise<void>; 
  	getAuthorizationDivision(divisionId: string, opts?: AuthorizationApi.getAuthorizationDivisionOptions): Promise<Models.AuthzDivision>; 
  	getAuthorizationDivisions(opts?: AuthorizationApi.getAuthorizationDivisionsOptions): Promise<Models.AuthzDivisionEntityListing>; 
  	getAuthorizationDivisionsHome(): Promise<Models.AuthzDivision>; 
  	getAuthorizationDivisionsLimit(): Promise<number>; 
  	getAuthorizationDivisionspermittedMe(permission: string, opts?: AuthorizationApi.getAuthorizationDivisionspermittedMeOptions): Promise<Array<Models.AuthzDivision>>; 
  	getAuthorizationDivisionspermittedPagedMe(permission: string, opts?: AuthorizationApi.getAuthorizationDivisionspermittedPagedMeOptions): Promise<Models.DivsPermittedEntityListing>; 
  	getAuthorizationDivisionspermittedPagedSubjectId(subjectId: string, permission: string, opts?: AuthorizationApi.getAuthorizationDivisionspermittedPagedSubjectIdOptions): Promise<Models.DivsPermittedEntityListing>; 
  	getAuthorizationDivisionspermittedSubjectId(subjectId: string, permission: string, opts?: AuthorizationApi.getAuthorizationDivisionspermittedSubjectIdOptions): Promise<Array<Models.AuthzDivision>>; 
  	getAuthorizationPermissions(opts?: AuthorizationApi.getAuthorizationPermissionsOptions): Promise<Models.PermissionCollectionEntityListing>; 
  	getAuthorizationProducts(): Promise<Models.OrganizationProductEntityListing>; 
  	getAuthorizationRole(roleId: string, opts?: AuthorizationApi.getAuthorizationRoleOptions): Promise<Models.DomainOrganizationRole>; 
  	getAuthorizationRoleComparedefaultRightRoleId(leftRoleId: string, rightRoleId: string): Promise<Models.DomainOrgRoleDifference>; 
  	getAuthorizationRoleSubjectgrants(roleId: string, opts?: AuthorizationApi.getAuthorizationRoleSubjectgrantsOptions): Promise<Models.SubjectDivisionGrantsEntityListing>; 
  	getAuthorizationRoleUsers(roleId: string, opts?: AuthorizationApi.getAuthorizationRoleUsersOptions): Promise<Models.UserEntityListing>; 
  	getAuthorizationRoles(opts?: AuthorizationApi.getAuthorizationRolesOptions): Promise<Models.OrganizationRoleEntityListing>; 
  	getAuthorizationSubject(subjectId: string): Promise<Models.AuthzSubject>; 
  	getAuthorizationSubjectsMe(): Promise<Models.AuthzSubject>; 
  	getAuthorizationSubjectsRolecounts(opts?: AuthorizationApi.getAuthorizationSubjectsRolecountsOptions): Promise<{ [key: string]: object; }>; 
  	getUserRoles(userId: string): Promise<Models.UserAuthorization>; 
  	patchAuthorizationRole(roleId: string, body: Models.DomainOrganizationRole): Promise<Models.DomainOrganizationRole>; 
  	postAuthorizationDivisionObject(divisionId: string, objectType: string, body: Array<string>): Promise<void>; 
  	postAuthorizationDivisions(body: Models.AuthzDivision): Promise<Models.AuthzDivision>; 
  	postAuthorizationRole(roleId: string, body: Models.SubjectDivisions, opts?: AuthorizationApi.postAuthorizationRoleOptions): Promise<void>; 
  	postAuthorizationRoleComparedefaultRightRoleId(leftRoleId: string, rightRoleId: string, body: Models.DomainOrganizationRole): Promise<Models.DomainOrgRoleDifference>; 
  	postAuthorizationRoles(body: Models.DomainOrganizationRoleCreate): Promise<Models.DomainOrganizationRole>; 
  	postAuthorizationRolesDefault(opts?: AuthorizationApi.postAuthorizationRolesDefaultOptions): Promise<Models.OrganizationRoleEntityListing>; 
  	postAuthorizationSubjectBulkadd(subjectId: string, body: Models.RoleDivisionGrants, opts?: AuthorizationApi.postAuthorizationSubjectBulkaddOptions): Promise<void>; 
  	postAuthorizationSubjectBulkremove(subjectId: string, body: Models.RoleDivisionGrants): Promise<void>; 
  	postAuthorizationSubjectDivisionRole(subjectId: string, divisionId: string, roleId: string, opts?: AuthorizationApi.postAuthorizationSubjectDivisionRoleOptions): Promise<void>; 
  	putAuthorizationDivision(divisionId: string, body: Models.AuthzDivision): Promise<Models.AuthzDivision>; 
  	putAuthorizationRole(roleId: string, body: Models.DomainOrganizationRoleUpdate): Promise<Models.DomainOrganizationRole>; 
  	putAuthorizationRoleUsersAdd(roleId: string, body: Array<string>): Promise<Array<string>>; 
  	putAuthorizationRoleUsersRemove(roleId: string, body: Array<string>): Promise<Array<string>>; 
  	putAuthorizationRolesDefault(body: Array<Models.DomainOrganizationRole>): Promise<Models.OrganizationRoleEntityListing>; 
  	putUserRoles(userId: string, body: Array<string>): Promise<Models.UserAuthorization>;
}

declare namespace AuthorizationApi { 
	export interface deleteAuthorizationDivisionOptions { 
		"force"?: boolean;
	}
	export interface getAuthorizationDivisionOptions { 
		"objectCount"?: boolean;
	}
	export interface getAuthorizationDivisionsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"expand"?: Array<string>;
		"nextPage"?: string;
		"previousPage"?: string;
		"objectCount"?: boolean;
		"id"?: Array<string>;
		"name"?: string;
	}
	export interface getAuthorizationDivisionspermittedMeOptions { 
		"name"?: string;
	}
	export interface getAuthorizationDivisionspermittedPagedMeOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
	}
	export interface getAuthorizationDivisionspermittedPagedSubjectIdOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
	}
	export interface getAuthorizationDivisionspermittedSubjectIdOptions { 
		"name"?: string;
	}
	export interface getAuthorizationPermissionsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getAuthorizationRoleOptions { 
		"expand"?: Array<string>;
	}
	export interface getAuthorizationRoleSubjectgrantsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"expand"?: Array<string>;
		"nextPage"?: string;
		"previousPage"?: string;
	}
	export interface getAuthorizationRoleUsersOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getAuthorizationRolesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"expand"?: Array<string>;
		"nextPage"?: string;
		"previousPage"?: string;
		"name"?: string;
		"permission"?: Array<string>;
		"defaultRoleId"?: Array<string>;
		"userCount"?: boolean;
		"id"?: Array<string>;
	}
	export interface getAuthorizationSubjectsRolecountsOptions { 
		"id"?: Array<string>;
	}
	export interface postAuthorizationRoleOptions { 
		"subjectType"?: string;
	}
	export interface postAuthorizationRolesDefaultOptions { 
		"force"?: boolean;
	}
	export interface postAuthorizationSubjectBulkaddOptions { 
		"subjectType"?: string;
	}
	export interface postAuthorizationSubjectDivisionRoleOptions { 
		"subjectType"?: string;
	}
}

declare class BillingApi {  
  	getBillingReportsBillableusage(startDate: string, endDate: string): Promise<Models.BillingUsageReport>; 
  	getBillingTrusteebillingoverviewTrustorOrgId(trustorOrgId: string, opts?: BillingApi.getBillingTrusteebillingoverviewTrustorOrgIdOptions): Promise<Models.TrusteeBillingOverview>;
}

declare namespace BillingApi { 
	export interface getBillingTrusteebillingoverviewTrustorOrgIdOptions { 
		"billingPeriodIndex"?: number;
	}
}

declare class ContentManagementApi {  
  	deleteContentmanagementDocument(documentId: string, opts?: ContentManagementApi.deleteContentmanagementDocumentOptions): Promise<void>; 
  	deleteContentmanagementShare(shareId: string): Promise<void>; 
  	deleteContentmanagementStatusStatusId(statusId: string): Promise<void>; 
  	deleteContentmanagementWorkspace(workspaceId: string, opts?: ContentManagementApi.deleteContentmanagementWorkspaceOptions): Promise<void>; 
  	deleteContentmanagementWorkspaceMember(workspaceId: string, memberId: string): Promise<void>; 
  	deleteContentmanagementWorkspaceTagvalue(workspaceId: string, tagId: string): Promise<void>; 
  	getContentmanagementDocument(documentId: string, opts?: ContentManagementApi.getContentmanagementDocumentOptions): Promise<Models.Document>; 
  	getContentmanagementDocumentAudits(documentId: string, opts?: ContentManagementApi.getContentmanagementDocumentAuditsOptions): Promise<Models.DocumentAuditEntityListing>; 
  	getContentmanagementDocumentContent(documentId: string, opts?: ContentManagementApi.getContentmanagementDocumentContentOptions): Promise<Models.DownloadResponse>; 
  	getContentmanagementDocuments(workspaceId: string, opts?: ContentManagementApi.getContentmanagementDocumentsOptions): Promise<Models.DocumentEntityListing>; 
  	getContentmanagementQuery(queryPhrase: string, opts?: ContentManagementApi.getContentmanagementQueryOptions): Promise<Models.QueryResults>; 
  	getContentmanagementSecurityprofile(securityProfileId: string): Promise<Models.SecurityProfile>; 
  	getContentmanagementSecurityprofiles(): Promise<Models.SecurityProfileEntityListing>; 
  	getContentmanagementShare(shareId: string, opts?: ContentManagementApi.getContentmanagementShareOptions): Promise<Models.Share>; 
  	getContentmanagementSharedSharedId(sharedId: string, opts?: ContentManagementApi.getContentmanagementSharedSharedIdOptions): Promise<Models.SharedResponse>; 
  	getContentmanagementShares(opts?: ContentManagementApi.getContentmanagementSharesOptions): Promise<Models.ShareEntityListing>; 
  	getContentmanagementStatus(opts?: ContentManagementApi.getContentmanagementStatusOptions): Promise<Models.CommandStatusEntityListing>; 
  	getContentmanagementStatusStatusId(statusId: string): Promise<Models.CommandStatus>; 
  	getContentmanagementUsage(): Promise<Models.Usage>; 
  	getContentmanagementWorkspace(workspaceId: string, opts?: ContentManagementApi.getContentmanagementWorkspaceOptions): Promise<Models.Workspace>; 
  	getContentmanagementWorkspaceDocuments(workspaceId: string, opts?: ContentManagementApi.getContentmanagementWorkspaceDocumentsOptions): Promise<Models.DocumentEntityListing>; 
  	getContentmanagementWorkspaceMember(workspaceId: string, memberId: string, opts?: ContentManagementApi.getContentmanagementWorkspaceMemberOptions): Promise<Models.WorkspaceMember>; 
  	getContentmanagementWorkspaceMembers(workspaceId: string, opts?: ContentManagementApi.getContentmanagementWorkspaceMembersOptions): Promise<Models.WorkspaceMemberEntityListing>; 
  	getContentmanagementWorkspaceTagvalue(workspaceId: string, tagId: string, opts?: ContentManagementApi.getContentmanagementWorkspaceTagvalueOptions): Promise<Models.TagValue>; 
  	getContentmanagementWorkspaceTagvalues(workspaceId: string, opts?: ContentManagementApi.getContentmanagementWorkspaceTagvaluesOptions): Promise<Models.TagValueEntityListing>; 
  	getContentmanagementWorkspaces(opts?: ContentManagementApi.getContentmanagementWorkspacesOptions): Promise<Models.WorkspaceEntityListing>; 
  	postContentmanagementAuditquery(body: Models.ContentQueryRequest): Promise<Models.QueryResults>; 
  	postContentmanagementDocument(documentId: string, body: Models.DocumentUpdate, opts?: ContentManagementApi.postContentmanagementDocumentOptions): Promise<Models.Document>; 
  	postContentmanagementDocumentContent(documentId: string, body: Models.ReplaceRequest, opts?: ContentManagementApi.postContentmanagementDocumentContentOptions): Promise<Models.ReplaceResponse>; 
  	postContentmanagementDocuments(body: Models.DocumentUpload, opts?: ContentManagementApi.postContentmanagementDocumentsOptions): Promise<Models.Document>; 
  	postContentmanagementQuery(body: Models.QueryRequest, opts?: ContentManagementApi.postContentmanagementQueryOptions): Promise<Models.QueryResults>; 
  	postContentmanagementShares(body: Models.CreateShareRequest): Promise<Models.CreateShareResponse>; 
  	postContentmanagementWorkspaceTagvalues(workspaceId: string, body: Models.TagValue): Promise<Models.TagValue>; 
  	postContentmanagementWorkspaceTagvaluesQuery(workspaceId: string, body: Models.TagQueryRequest, opts?: ContentManagementApi.postContentmanagementWorkspaceTagvaluesQueryOptions): Promise<Models.TagValueEntityListing>; 
  	postContentmanagementWorkspaces(body: Models.WorkspaceCreate): Promise<Models.Workspace>; 
  	putContentmanagementWorkspace(workspaceId: string, body: Models.Workspace): Promise<Models.Workspace>; 
  	putContentmanagementWorkspaceMember(workspaceId: string, memberId: string, body: Models.WorkspaceMember): Promise<Models.WorkspaceMember>; 
  	putContentmanagementWorkspaceTagvalue(workspaceId: string, tagId: string, body: Models.TagValue): Promise<Models.TagValue>;
}

declare namespace ContentManagementApi { 
	export interface deleteContentmanagementDocumentOptions { 
		"override"?: boolean;
	}
	export interface deleteContentmanagementWorkspaceOptions { 
		"moveChildrenToWorkspaceId"?: string;
	}
	export interface getContentmanagementDocumentOptions { 
		"expand"?: Array<string>;
	}
	export interface getContentmanagementDocumentAuditsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"transactionFilter"?: string;
		"level"?: string;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface getContentmanagementDocumentContentOptions { 
		"disposition"?: string;
		"contentType"?: string;
	}
	export interface getContentmanagementDocumentsOptions { 
		"name"?: string;
		"expand"?: Array<string>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface getContentmanagementQueryOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
		"expand"?: Array<string>;
	}
	export interface getContentmanagementShareOptions { 
		"expand"?: Array<string>;
	}
	export interface getContentmanagementSharedSharedIdOptions { 
		"redirect"?: boolean;
		"disposition"?: string;
		"contentType"?: string;
		"expand"?: string;
	}
	export interface getContentmanagementSharesOptions { 
		"entityId"?: string;
		"expand"?: Array<string>;
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getContentmanagementStatusOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getContentmanagementWorkspaceOptions { 
		"expand"?: Array<string>;
	}
	export interface getContentmanagementWorkspaceDocumentsOptions { 
		"expand"?: Array<string>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface getContentmanagementWorkspaceMemberOptions { 
		"expand"?: Array<string>;
	}
	export interface getContentmanagementWorkspaceMembersOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"expand"?: Array<string>;
	}
	export interface getContentmanagementWorkspaceTagvalueOptions { 
		"expand"?: Array<string>;
	}
	export interface getContentmanagementWorkspaceTagvaluesOptions { 
		"value"?: string;
		"pageSize"?: number;
		"pageNumber"?: number;
		"expand"?: Array<string>;
	}
	export interface getContentmanagementWorkspacesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"access"?: Array<string>;
		"expand"?: Array<string>;
	}
	export interface postContentmanagementDocumentOptions { 
		"expand"?: string;
		"override"?: boolean;
	}
	export interface postContentmanagementDocumentContentOptions { 
		"override"?: boolean;
	}
	export interface postContentmanagementDocumentsOptions { 
		"copySource"?: string;
		"moveSource"?: string;
		"override"?: boolean;
	}
	export interface postContentmanagementQueryOptions { 
		"expand"?: string;
	}
	export interface postContentmanagementWorkspaceTagvaluesQueryOptions { 
		"expand"?: Array<string>;
	}
}

declare class ConversationsApi {  
  	deleteAnalyticsConversationsDetailsJob(jobId: string): Promise<void>; 
  	deleteConversationParticipantCode(conversationId: string, participantId: string, addCommunicationCode: string): Promise<void>; 
  	deleteConversationParticipantFlaggedreason(conversationId: string, participantId: string): Promise<void>; 
  	deleteConversationsCallParticipantConsult(conversationId: string, participantId: string): Promise<void>; 
  	deleteConversationsEmailMessagesDraftAttachment(conversationId: string, attachmentId: string): Promise<void>; 
  	deleteConversationsMessagingIntegrationsFacebookIntegrationId(integrationId: string): Promise<void>; 
  	deleteConversationsMessagingIntegrationsLineIntegrationId(integrationId: string): Promise<void>; 
  	deleteConversationsMessagingIntegrationsTwitterIntegrationId(integrationId: string): Promise<void>; 
  	deleteConversationsMessagingIntegrationsWhatsappIntegrationId(integrationId: string): Promise<Models.WhatsAppIntegration>; 
  	getAnalyticsConversationDetails(conversationId: string): Promise<Models.AnalyticsConversationWithoutAttributes>; 
  	getAnalyticsConversationsDetails(opts?: ConversationsApi.getAnalyticsConversationsDetailsOptions): Promise<Models.AnalyticsConversationWithoutAttributesMultiGetResponse>; 
  	getAnalyticsConversationsDetailsJob(jobId: string): Promise<Models.AsyncQueryStatus>; 
  	getAnalyticsConversationsDetailsJobResults(jobId: string, opts?: ConversationsApi.getAnalyticsConversationsDetailsJobResultsOptions): Promise<Models.AnalyticsConversationAsyncQueryResponse>; 
  	getConversation(conversationId: string): Promise<Models.Conversation>; 
  	getConversationParticipantSecureivrsession(conversationId: string, participantId: string, secureSessionId: string): Promise<Models.SecureSession>; 
  	getConversationParticipantSecureivrsessions(conversationId: string, participantId: string): Promise<Models.SecureSessionEntityListing>; 
  	getConversationParticipantWrapup(conversationId: string, participantId: string, opts?: ConversationsApi.getConversationParticipantWrapupOptions): Promise<Models.AssignedWrapupCode>; 
  	getConversationParticipantWrapupcodes(conversationId: string, participantId: string): Promise<Array<Models.WrapupCode>>; 
  	getConversations(opts?: ConversationsApi.getConversationsOptions): Promise<Models.ConversationEntityListing>; 
  	getConversationsCall(conversationId: string): Promise<Models.CallConversation>; 
  	getConversationsCallParticipantWrapup(conversationId: string, participantId: string, opts?: ConversationsApi.getConversationsCallParticipantWrapupOptions): Promise<Models.AssignedWrapupCode>; 
  	getConversationsCallParticipantWrapupcodes(conversationId: string, participantId: string): Promise<Array<Models.WrapupCode>>; 
  	getConversationsCallback(conversationId: string): Promise<Models.CallbackConversation>; 
  	getConversationsCallbackParticipantWrapup(conversationId: string, participantId: string, opts?: ConversationsApi.getConversationsCallbackParticipantWrapupOptions): Promise<Models.AssignedWrapupCode>; 
  	getConversationsCallbackParticipantWrapupcodes(conversationId: string, participantId: string): Promise<Array<Models.WrapupCode>>; 
  	getConversationsCallbacks(): Promise<Models.CallbackConversationEntityListing>; 
  	getConversationsCalls(): Promise<Models.CallConversationEntityListing>; 
  	getConversationsCallsHistory(opts?: ConversationsApi.getConversationsCallsHistoryOptions): Promise<Models.CallHistoryConversationEntityListing>; 
  	getConversationsCallsMaximumconferenceparties(): Promise<Models.MaxParticipants>; 
  	getConversationsChat(conversationId: string): Promise<Models.ChatConversation>; 
  	getConversationsChatMessage(conversationId: string, messageId: string): Promise<Models.WebChatMessage>; 
  	getConversationsChatMessages(conversationId: string, opts?: ConversationsApi.getConversationsChatMessagesOptions): Promise<Models.WebChatMessageEntityList>; 
  	getConversationsChatParticipantWrapup(conversationId: string, participantId: string, opts?: ConversationsApi.getConversationsChatParticipantWrapupOptions): Promise<Models.AssignedWrapupCode>; 
  	getConversationsChatParticipantWrapupcodes(conversationId: string, participantId: string): Promise<Array<Models.WrapupCode>>; 
  	getConversationsChats(): Promise<Models.ChatConversationEntityListing>; 
  	getConversationsCobrowsesession(conversationId: string): Promise<Models.CobrowseConversation>; 
  	getConversationsCobrowsesessionParticipantWrapup(conversationId: string, participantId: string, opts?: ConversationsApi.getConversationsCobrowsesessionParticipantWrapupOptions): Promise<Models.AssignedWrapupCode>; 
  	getConversationsCobrowsesessionParticipantWrapupcodes(conversationId: string, participantId: string): Promise<Array<Models.WrapupCode>>; 
  	getConversationsCobrowsesessions(): Promise<Models.CobrowseConversationEntityListing>; 
  	getConversationsEmail(conversationId: string): Promise<Models.EmailConversation>; 
  	getConversationsEmailMessage(conversationId: string, messageId: string): Promise<Models.EmailMessage>; 
  	getConversationsEmailMessages(conversationId: string): Promise<Models.EmailMessageListing>; 
  	getConversationsEmailMessagesDraft(conversationId: string): Promise<Models.EmailMessage>; 
  	getConversationsEmailParticipantWrapup(conversationId: string, participantId: string, opts?: ConversationsApi.getConversationsEmailParticipantWrapupOptions): Promise<Models.AssignedWrapupCode>; 
  	getConversationsEmailParticipantWrapupcodes(conversationId: string, participantId: string): Promise<Array<Models.WrapupCode>>; 
  	getConversationsEmails(): Promise<Models.EmailConversationEntityListing>; 
  	getConversationsMessage(conversationId: string): Promise<Models.MessageConversation>; 
  	getConversationsMessageCommunicationMessagesMediaMediaId(conversationId: string, communicationId: string, mediaId: string): Promise<Models.MessageMediaData>; 
  	getConversationsMessageMessage(conversationId: string, messageId: string): Promise<Models.MessageData>; 
  	getConversationsMessageParticipantWrapup(conversationId: string, participantId: string, opts?: ConversationsApi.getConversationsMessageParticipantWrapupOptions): Promise<Models.AssignedWrapupCode>; 
  	getConversationsMessageParticipantWrapupcodes(conversationId: string, participantId: string): Promise<Array<Models.WrapupCode>>; 
  	getConversationsMessages(): Promise<Models.MessageConversationEntityListing>; 
  	getConversationsMessagingIntegrations(opts?: ConversationsApi.getConversationsMessagingIntegrationsOptions): Promise<Models.MessagingIntegrationEntityListing>; 
  	getConversationsMessagingIntegrationsFacebook(opts?: ConversationsApi.getConversationsMessagingIntegrationsFacebookOptions): Promise<Models.FacebookIntegrationEntityListing>; 
  	getConversationsMessagingIntegrationsFacebookIntegrationId(integrationId: string): Promise<Models.FacebookIntegration>; 
  	getConversationsMessagingIntegrationsLine(opts?: ConversationsApi.getConversationsMessagingIntegrationsLineOptions): Promise<Models.LineIntegrationEntityListing>; 
  	getConversationsMessagingIntegrationsLineIntegrationId(integrationId: string): Promise<Models.LineIntegration>; 
  	getConversationsMessagingIntegrationsTwitter(opts?: ConversationsApi.getConversationsMessagingIntegrationsTwitterOptions): Promise<Models.TwitterIntegrationEntityListing>; 
  	getConversationsMessagingIntegrationsTwitterIntegrationId(integrationId: string): Promise<Models.TwitterIntegration>; 
  	getConversationsMessagingIntegrationsWhatsapp(opts?: ConversationsApi.getConversationsMessagingIntegrationsWhatsappOptions): Promise<Models.WhatsAppIntegrationEntityListing>; 
  	getConversationsMessagingIntegrationsWhatsappIntegrationId(integrationId: string): Promise<Models.WhatsAppIntegration>; 
  	getConversationsMessagingSticker(messengerType: string, opts?: ConversationsApi.getConversationsMessagingStickerOptions): Promise<Models.MessagingStickerEntityListing>; 
  	patchConversationParticipant(conversationId: string, participantId: string, body: Models.MediaParticipantRequest): Promise<void>; 
  	patchConversationParticipantAttributes(conversationId: string, participantId: string, body: Models.ParticipantAttributes): Promise<void>; 
  	patchConversationsCall(conversationId: string, body: Models.Conversation): Promise<Models.Conversation>; 
  	patchConversationsCallParticipant(conversationId: string, participantId: string, body: Models.MediaParticipantRequest): Promise<void>; 
  	patchConversationsCallParticipantAttributes(conversationId: string, participantId: string, body: Models.ParticipantAttributes): Promise<void>; 
  	patchConversationsCallParticipantCommunication(conversationId: string, participantId: string, communicationId: string, body: Models.MediaParticipantRequest): Promise<Models.Empty>; 
  	patchConversationsCallParticipantConsult(conversationId: string, participantId: string, body: Models.ConsultTransferUpdate): Promise<Models.ConsultTransferResponse>; 
  	patchConversationsCallback(conversationId: string, body: Models.Conversation): Promise<Models.Conversation>; 
  	patchConversationsCallbackParticipant(conversationId: string, participantId: string, body: Models.MediaParticipantRequest): Promise<void>; 
  	patchConversationsCallbackParticipantAttributes(conversationId: string, participantId: string, body: Models.ParticipantAttributes): Promise<void>; 
  	patchConversationsCallbackParticipantCommunication(conversationId: string, participantId: string, communicationId: string, body: Models.MediaParticipantRequest): Promise<Models.Empty>; 
  	patchConversationsChat(conversationId: string, body: Models.Conversation): Promise<Models.Conversation>; 
  	patchConversationsChatParticipant(conversationId: string, participantId: string, body: Models.MediaParticipantRequest): Promise<void>; 
  	patchConversationsChatParticipantAttributes(conversationId: string, participantId: string, body: Models.ParticipantAttributes): Promise<void>; 
  	patchConversationsChatParticipantCommunication(conversationId: string, participantId: string, communicationId: string, body: Models.MediaParticipantRequest): Promise<Models.Empty>; 
  	patchConversationsCobrowsesession(conversationId: string, body: Models.Conversation): Promise<Models.Conversation>; 
  	patchConversationsCobrowsesessionParticipant(conversationId: string, participantId: string, opts?: ConversationsApi.patchConversationsCobrowsesessionParticipantOptions): Promise<void>; 
  	patchConversationsCobrowsesessionParticipantAttributes(conversationId: string, participantId: string, opts?: ConversationsApi.patchConversationsCobrowsesessionParticipantAttributesOptions): Promise<void>; 
  	patchConversationsCobrowsesessionParticipantCommunication(conversationId: string, participantId: string, communicationId: string, body: Models.MediaParticipantRequest): Promise<Models.Empty>; 
  	patchConversationsEmail(conversationId: string, body: Models.Conversation): Promise<Models.Conversation>; 
  	patchConversationsEmailParticipant(conversationId: string, participantId: string, body: Models.MediaParticipantRequest): Promise<void>; 
  	patchConversationsEmailParticipantAttributes(conversationId: string, participantId: string, body: Models.ParticipantAttributes): Promise<void>; 
  	patchConversationsEmailParticipantCommunication(conversationId: string, participantId: string, communicationId: string, body: Models.MediaParticipantRequest): Promise<Models.Empty>; 
  	patchConversationsMessage(conversationId: string, body: Models.Conversation): Promise<Models.Conversation>; 
  	patchConversationsMessageParticipant(conversationId: string, participantId: string, opts?: ConversationsApi.patchConversationsMessageParticipantOptions): Promise<void>; 
  	patchConversationsMessageParticipantAttributes(conversationId: string, participantId: string, opts?: ConversationsApi.patchConversationsMessageParticipantAttributesOptions): Promise<void>; 
  	patchConversationsMessageParticipantCommunication(conversationId: string, participantId: string, communicationId: string, body: Models.MediaParticipantRequest): Promise<Models.Empty>; 
  	patchConversationsMessagingIntegrationsWhatsappIntegrationId(integrationId: string, body: Models.WhatsAppIntegrationUpdateRequest): Promise<Models.WhatsAppIntegration>; 
  	postAnalyticsConversationDetailsProperties(conversationId: string, body: Models.PropertyIndexRequest): Promise<Models.PropertyIndexRequest>; 
  	postAnalyticsConversationsAggregatesQuery(body: Models.ConversationAggregationQuery): Promise<Models.ConversationAggregateQueryResponse>; 
  	postAnalyticsConversationsDetailsJobs(body: Models.AsyncConversationQuery): Promise<Models.AsyncQueryResponse>; 
  	postAnalyticsConversationsDetailsQuery(body: Models.ConversationQuery): Promise<Models.AnalyticsConversationQueryResponse>; 
  	postConversationDisconnect(conversationId: string): Promise<string>; 
  	postConversationParticipantCallbacks(conversationId: string, participantId: string, opts?: ConversationsApi.postConversationParticipantCallbacksOptions): Promise<void>; 
  	postConversationParticipantDigits(conversationId: string, participantId: string, opts?: ConversationsApi.postConversationParticipantDigitsOptions): Promise<void>; 
  	postConversationParticipantReplace(conversationId: string, participantId: string, body: Models.TransferRequest): Promise<void>; 
  	postConversationParticipantSecureivrsessions(conversationId: string, participantId: string, opts?: ConversationsApi.postConversationParticipantSecureivrsessionsOptions): Promise<Models.SecureSession>; 
  	postConversationsCall(conversationId: string, body: Models.CallCommand): Promise<Models.Conversation>; 
  	postConversationsCallParticipantConsult(conversationId: string, participantId: string, body: Models.ConsultTransfer): Promise<Models.ConsultTransferResponse>; 
  	postConversationsCallParticipantMonitor(conversationId: string, participantId: string): Promise<void>; 
  	postConversationsCallParticipantReplace(conversationId: string, participantId: string, body: Models.TransferRequest): Promise<void>; 
  	postConversationsCallParticipants(conversationId: string, body: Models.Conversation): Promise<Models.Conversation>; 
  	postConversationsCallbackParticipantReplace(conversationId: string, participantId: string, body: Models.TransferRequest): Promise<void>; 
  	postConversationsCallbacks(body: Models.CreateCallbackCommand): Promise<Models.CreateCallbackResponse>; 
  	postConversationsCalls(body: Models.CreateCallRequest): Promise<Models.CreateCallResponse>; 
  	postConversationsChatCommunicationMessages(conversationId: string, communicationId: string, body: Models.CreateWebChatMessageRequest): Promise<Models.WebChatMessage>; 
  	postConversationsChatCommunicationTyping(conversationId: string, communicationId: string): Promise<Models.WebChatTyping>; 
  	postConversationsChatParticipantReplace(conversationId: string, participantId: string, body: Models.TransferRequest): Promise<void>; 
  	postConversationsChats(body: Models.CreateWebChatRequest): Promise<Models.ChatConversation>; 
  	postConversationsCobrowsesessionParticipantReplace(conversationId: string, participantId: string, opts?: ConversationsApi.postConversationsCobrowsesessionParticipantReplaceOptions): Promise<void>; 
  	postConversationsEmailInboundmessages(conversationId: string, body: Models.InboundMessageRequest): Promise<Models.EmailConversation>; 
  	postConversationsEmailMessages(conversationId: string, body: Models.EmailMessage): Promise<Models.EmailMessage>; 
  	postConversationsEmailMessagesDraftAttachmentsCopy(conversationId: string, body: Models.CopyAttachmentsRequest): Promise<Models.EmailMessage>; 
  	postConversationsEmailParticipantReplace(conversationId: string, participantId: string, body: Models.TransferRequest): Promise<void>; 
  	postConversationsEmails(body: Models.CreateEmailRequest): Promise<Models.EmailConversation>; 
  	postConversationsFaxes(body: Models.FaxSendRequest): Promise<Models.FaxSendResponse>; 
  	postConversationsMessageCommunicationMessages(conversationId: string, communicationId: string, body: Models.AdditionalMessage): Promise<Models.MessageData>; 
  	postConversationsMessageCommunicationMessagesMedia(conversationId: string, communicationId: string): Promise<Models.MessageMediaData>; 
  	postConversationsMessageMessagesBulk(conversationId: string, opts?: ConversationsApi.postConversationsMessageMessagesBulkOptions): Promise<Models.TextMessageListing>; 
  	postConversationsMessageParticipantReplace(conversationId: string, participantId: string, body: Models.TransferRequest): Promise<void>; 
  	postConversationsMessages(body: Models.CreateOutboundMessagingConversationRequest): Promise<Models.MessageConversation>; 
  	postConversationsMessagesAgentless(body: Models.SendAgentlessOutboundMessageRequest): Promise<Models.SendAgentlessOutboundMessageResponse>; 
  	postConversationsMessagingIntegrationsFacebook(body: Models.FacebookIntegrationRequest): Promise<Models.FacebookIntegration>; 
  	postConversationsMessagingIntegrationsLine(body: Models.LineIntegrationRequest): Promise<Models.LineIntegration>; 
  	postConversationsMessagingIntegrationsTwitter(body: Models.TwitterIntegrationRequest): Promise<Models.TwitterIntegration>; 
  	postConversationsMessagingIntegrationsWhatsapp(body: Models.WhatsAppIntegrationRequest): Promise<Models.WhatsAppIntegration>; 
  	putConversationParticipantFlaggedreason(conversationId: string, participantId: string): Promise<void>; 
  	putConversationsCallParticipantCommunicationUuidata(conversationId: string, participantId: string, communicationId: string, body: Models.SetUuiDataRequest): Promise<Models.Empty>; 
  	putConversationsEmailMessagesDraft(conversationId: string, body: Models.EmailMessage): Promise<Models.EmailMessage>; 
  	putConversationsMessagingIntegrationsLineIntegrationId(integrationId: string, body: Models.LineIntegrationRequest): Promise<Models.LineIntegration>;
}

declare namespace ConversationsApi { 
	export interface getAnalyticsConversationsDetailsOptions { 
		"id"?: Array<string>;
	}
	export interface getAnalyticsConversationsDetailsJobResultsOptions { 
		"cursor"?: string;
		"pageSize"?: number;
	}
	export interface getConversationParticipantWrapupOptions { 
		"provisional"?: boolean;
	}
	export interface getConversationsOptions { 
		"communicationType"?: string;
	}
	export interface getConversationsCallParticipantWrapupOptions { 
		"provisional"?: boolean;
	}
	export interface getConversationsCallbackParticipantWrapupOptions { 
		"provisional"?: boolean;
	}
	export interface getConversationsCallsHistoryOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"interval"?: string;
		"expand"?: Array<string>;
	}
	export interface getConversationsChatMessagesOptions { 
		"after"?: string;
		"before"?: string;
		"sortOrder"?: string;
		"maxResults"?: number;
	}
	export interface getConversationsChatParticipantWrapupOptions { 
		"provisional"?: boolean;
	}
	export interface getConversationsCobrowsesessionParticipantWrapupOptions { 
		"provisional"?: boolean;
	}
	export interface getConversationsEmailParticipantWrapupOptions { 
		"provisional"?: boolean;
	}
	export interface getConversationsMessageParticipantWrapupOptions { 
		"provisional"?: boolean;
	}
	export interface getConversationsMessagingIntegrationsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getConversationsMessagingIntegrationsFacebookOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getConversationsMessagingIntegrationsLineOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getConversationsMessagingIntegrationsTwitterOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getConversationsMessagingIntegrationsWhatsappOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getConversationsMessagingStickerOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface patchConversationsCobrowsesessionParticipantOptions { 
		"body"?: Models.MediaParticipantRequest;
	}
	export interface patchConversationsCobrowsesessionParticipantAttributesOptions { 
		"body"?: Models.ParticipantAttributes;
	}
	export interface patchConversationsMessageParticipantOptions { 
		"body"?: Models.MediaParticipantRequest;
	}
	export interface patchConversationsMessageParticipantAttributesOptions { 
		"body"?: Models.ParticipantAttributes;
	}
	export interface postConversationParticipantCallbacksOptions { 
		"body"?: Models.CreateCallbackOnConversationCommand;
	}
	export interface postConversationParticipantDigitsOptions { 
		"body"?: Models.Digits;
	}
	export interface postConversationParticipantSecureivrsessionsOptions { 
		"body"?: Models.CreateSecureSession;
	}
	export interface postConversationsCobrowsesessionParticipantReplaceOptions { 
		"body"?: Models.TransferRequest;
	}
	export interface postConversationsMessageMessagesBulkOptions { 
		"body"?: Array<string>;
	}
}

declare class ExternalContactsApi {  
  	deleteExternalcontactsContact(contactId: string): Promise<Models.Empty>; 
  	deleteExternalcontactsContactNote(contactId: string, noteId: string): Promise<Models.Empty>; 
  	deleteExternalcontactsOrganization(externalOrganizationId: string): Promise<Models.Empty>; 
  	deleteExternalcontactsOrganizationNote(externalOrganizationId: string, noteId: string): Promise<Models.Empty>; 
  	deleteExternalcontactsOrganizationTrustor(externalOrganizationId: string): Promise<void>; 
  	deleteExternalcontactsRelationship(relationshipId: string): Promise<Models.Empty>; 
  	getExternalcontactsContact(contactId: string, opts?: ExternalContactsApi.getExternalcontactsContactOptions): Promise<Models.ExternalContact>; 
  	getExternalcontactsContactNote(contactId: string, noteId: string, opts?: ExternalContactsApi.getExternalcontactsContactNoteOptions): Promise<Models.Note>; 
  	getExternalcontactsContactNotes(contactId: string, opts?: ExternalContactsApi.getExternalcontactsContactNotesOptions): Promise<Models.NoteListing>; 
  	getExternalcontactsContacts(opts?: ExternalContactsApi.getExternalcontactsContactsOptions): Promise<Models.ContactListing>; 
  	getExternalcontactsOrganization(externalOrganizationId: string, opts?: ExternalContactsApi.getExternalcontactsOrganizationOptions): Promise<Models.ExternalOrganization>; 
  	getExternalcontactsOrganizationContacts(externalOrganizationId: string, opts?: ExternalContactsApi.getExternalcontactsOrganizationContactsOptions): Promise<Models.ContactListing>; 
  	getExternalcontactsOrganizationNote(externalOrganizationId: string, noteId: string, opts?: ExternalContactsApi.getExternalcontactsOrganizationNoteOptions): Promise<Models.Note>; 
  	getExternalcontactsOrganizationNotes(externalOrganizationId: string, opts?: ExternalContactsApi.getExternalcontactsOrganizationNotesOptions): Promise<Models.NoteListing>; 
  	getExternalcontactsOrganizationRelationships(externalOrganizationId: string, opts?: ExternalContactsApi.getExternalcontactsOrganizationRelationshipsOptions): Promise<Models.RelationshipListing>; 
  	getExternalcontactsOrganizations(opts?: ExternalContactsApi.getExternalcontactsOrganizationsOptions): Promise<Models.ExternalOrganizationListing>; 
  	getExternalcontactsRelationship(relationshipId: string, opts?: ExternalContactsApi.getExternalcontactsRelationshipOptions): Promise<Models.Relationship>; 
  	getExternalcontactsReversewhitepageslookup(lookupVal: string, opts?: ExternalContactsApi.getExternalcontactsReversewhitepageslookupOptions): Promise<Models.ReverseWhitepagesLookupResult>; 
  	postExternalcontactsContactNotes(contactId: string, body: Models.Note): Promise<Models.Note>; 
  	postExternalcontactsContacts(body: Models.ExternalContact): Promise<Models.ExternalContact>; 
  	postExternalcontactsOrganizationNotes(externalOrganizationId: string, body: Models.Note): Promise<Models.Note>; 
  	postExternalcontactsOrganizations(body: Models.ExternalOrganization): Promise<Models.ExternalOrganization>; 
  	postExternalcontactsRelationships(body: Models.Relationship): Promise<Models.Relationship>; 
  	putExternalcontactsContact(contactId: string, body: Models.ExternalContact): Promise<Models.ExternalContact>; 
  	putExternalcontactsContactNote(contactId: string, noteId: string, body: Models.Note): Promise<Models.Note>; 
  	putExternalcontactsConversation(conversationId: string, body: Models.ConversationAssociation): Promise<void>; 
  	putExternalcontactsOrganization(externalOrganizationId: string, body: Models.ExternalOrganization): Promise<Models.ExternalOrganization>; 
  	putExternalcontactsOrganizationNote(externalOrganizationId: string, noteId: string, body: Models.Note): Promise<Models.Note>; 
  	putExternalcontactsOrganizationTrustorTrustorId(externalOrganizationId: string, trustorId: string): Promise<Models.ExternalOrganization>; 
  	putExternalcontactsRelationship(relationshipId: string, body: Models.Relationship): Promise<Models.Relationship>;
}

declare namespace ExternalContactsApi { 
	export interface getExternalcontactsContactOptions { 
		"expand"?: Array<string>;
	}
	export interface getExternalcontactsContactNoteOptions { 
		"expand"?: Array<string>;
	}
	export interface getExternalcontactsContactNotesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortOrder"?: string;
		"expand"?: Array<string>;
	}
	export interface getExternalcontactsContactsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"q"?: string;
		"sortOrder"?: string;
		"expand"?: Array<string>;
	}
	export interface getExternalcontactsOrganizationOptions { 
		"expand"?: string;
		"includeTrustors"?: boolean;
	}
	export interface getExternalcontactsOrganizationContactsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"q"?: string;
		"sortOrder"?: string;
		"expand"?: Array<string>;
	}
	export interface getExternalcontactsOrganizationNoteOptions { 
		"expand"?: Array<string>;
	}
	export interface getExternalcontactsOrganizationNotesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortOrder"?: string;
		"expand"?: Array<string>;
	}
	export interface getExternalcontactsOrganizationRelationshipsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"expand"?: string;
		"sortOrder"?: string;
	}
	export interface getExternalcontactsOrganizationsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"q"?: string;
		"trustorId"?: Array<string>;
		"sortOrder"?: string;
		"expand"?: Array<string>;
		"includeTrustors"?: boolean;
	}
	export interface getExternalcontactsRelationshipOptions { 
		"expand"?: string;
	}
	export interface getExternalcontactsReversewhitepageslookupOptions { 
		"expand"?: Array<string>;
	}
}

declare class FaxApi {  
  	deleteFaxDocument(documentId: string): Promise<void>; 
  	getFaxDocument(documentId: string): Promise<Models.FaxDocument>; 
  	getFaxDocumentContent(documentId: string): Promise<Models.DownloadResponse>; 
  	getFaxDocuments(opts?: FaxApi.getFaxDocumentsOptions): Promise<Models.FaxDocumentEntityListing>; 
  	getFaxSummary(): Promise<Models.FaxSummary>; 
  	putFaxDocument(documentId: string, body: Models.FaxDocument): Promise<Models.FaxDocument>;
}

declare namespace FaxApi { 
	export interface getFaxDocumentsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
}

declare class FlowsApi {  
  	postAnalyticsFlowsAggregatesQuery(body: Models.FlowAggregationQuery): Promise<Models.FlowAggregateQueryResponse>; 
  	postAnalyticsFlowsObservationsQuery(body: Models.FlowObservationQuery): Promise<Models.FlowObservationQueryResponse>;
}

declare namespace FlowsApi { 
}

declare class GeneralDataProtectionRegulationApi {  
  	getGdprRequest(requestId: string): Promise<Models.GDPRRequest>; 
  	getGdprRequests(opts?: GeneralDataProtectionRegulationApi.getGdprRequestsOptions): Promise<Models.GDPRRequestEntityListing>; 
  	getGdprSubjects(searchType: string, searchValue: string): Promise<Models.GDPRSubjectEntityListing>; 
  	postGdprRequests(body: Models.GDPRRequest, opts?: GeneralDataProtectionRegulationApi.postGdprRequestsOptions): Promise<Models.GDPRRequest>;
}

declare namespace GeneralDataProtectionRegulationApi { 
	export interface getGdprRequestsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface postGdprRequestsOptions { 
		"deleteConfirmed"?: boolean;
	}
}

declare class GeolocationApi {  
  	getGeolocationsSettings(): Promise<Models.GeolocationSettings>; 
  	getUserGeolocation(userId: string, clientId: string): Promise<Models.Geolocation>; 
  	patchGeolocationsSettings(body: Models.GeolocationSettings): Promise<Models.GeolocationSettings>; 
  	patchUserGeolocation(userId: string, clientId: string, body: Models.Geolocation): Promise<Models.Geolocation>;
}

declare namespace GeolocationApi { 
}

declare class GreetingsApi {  
  	deleteGreeting(greetingId: string): Promise<void>; 
  	getGreeting(greetingId: string): Promise<Models.Greeting>; 
  	getGreetingMedia(greetingId: string, opts?: GreetingsApi.getGreetingMediaOptions): Promise<Models.GreetingMediaInfo>; 
  	getGreetings(opts?: GreetingsApi.getGreetingsOptions): Promise<Models.DomainEntityListing>; 
  	getGreetingsDefaults(): Promise<Models.DefaultGreetingList>; 
  	getGroupGreetings(groupId: string, opts?: GreetingsApi.getGroupGreetingsOptions): Promise<Models.GreetingListing>; 
  	getGroupGreetingsDefaults(groupId: string): Promise<Models.DefaultGreetingList>; 
  	getUserGreetings(userId: string, opts?: GreetingsApi.getUserGreetingsOptions): Promise<Models.DomainEntityListing>; 
  	getUserGreetingsDefaults(userId: string): Promise<Models.DefaultGreetingList>; 
  	postGreetings(body: Models.Greeting): Promise<Models.Greeting>; 
  	postGroupGreetings(groupId: string, body: Models.Greeting): Promise<Models.Greeting>; 
  	postUserGreetings(userId: string, body: Models.Greeting): Promise<Models.Greeting>; 
  	putGreeting(greetingId: string, body: Models.Greeting): Promise<Models.Greeting>; 
  	putGreetingsDefaults(body: Models.DefaultGreetingList): Promise<Models.DefaultGreetingList>; 
  	putGroupGreetingsDefaults(groupId: string, body: Models.DefaultGreetingList): Promise<Models.DefaultGreetingList>; 
  	putUserGreetingsDefaults(userId: string, body: Models.DefaultGreetingList): Promise<Models.DefaultGreetingList>;
}

declare namespace GreetingsApi { 
	export interface getGreetingMediaOptions { 
		"formatId"?: string;
	}
	export interface getGreetingsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getGroupGreetingsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getUserGreetingsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
}

declare class GroupsApi {  
  	deleteGroup(groupId: string): Promise<void>; 
  	deleteGroupMembers(groupId: string, ids: string): Promise<Models.Empty>; 
  	getFieldconfig(type: string): Promise<Models.FieldConfig>; 
  	getGroup(groupId: string): Promise<Models.Group>; 
  	getGroupIndividuals(groupId: string): Promise<Models.UserEntityListing>; 
  	getGroupMembers(groupId: string, opts?: GroupsApi.getGroupMembersOptions): Promise<Models.UserEntityListing>; 
  	getGroupProfile(groupId: string, opts?: GroupsApi.getGroupProfileOptions): Promise<Models.GroupProfile>; 
  	getGroups(opts?: GroupsApi.getGroupsOptions): Promise<Models.GroupEntityListing>; 
  	getGroupsSearch(q64: string, opts?: GroupsApi.getGroupsSearchOptions): Promise<Models.GroupsSearchResponse>; 
  	getProfilesGroups(opts?: GroupsApi.getProfilesGroupsOptions): Promise<Models.GroupProfileEntityListing>; 
  	postGroupMembers(groupId: string, body: Models.GroupMembersUpdate): Promise<Models.Empty>; 
  	postGroups(body: Models.GroupCreate): Promise<Models.Group>; 
  	postGroupsSearch(body: Models.GroupSearchRequest): Promise<Models.GroupsSearchResponse>; 
  	putGroup(groupId: string, opts?: GroupsApi.putGroupOptions): Promise<Models.Group>;
}

declare namespace GroupsApi { 
	export interface getGroupMembersOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortOrder"?: string;
		"expand"?: Array<string>;
	}
	export interface getGroupProfileOptions { 
		"fields"?: string;
	}
	export interface getGroupsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"id"?: Array<string>;
		"jabberId"?: Array<string>;
		"sortOrder"?: string;
	}
	export interface getGroupsSearchOptions { 
		"expand"?: Array<string>;
	}
	export interface getProfilesGroupsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"id"?: Array<string>;
		"sortOrder"?: string;
	}
	export interface putGroupOptions { 
		"body"?: Models.GroupUpdate;
	}
}

declare class IdentityProviderApi {  
  	deleteIdentityprovidersAdfs(): Promise<Models.Empty>; 
  	deleteIdentityprovidersCic(): Promise<Models.Empty>; 
  	deleteIdentityprovidersGsuite(): Promise<Models.Empty>; 
  	deleteIdentityprovidersIdentitynow(): Promise<Models.Empty>; 
  	deleteIdentityprovidersOkta(): Promise<Models.Empty>; 
  	deleteIdentityprovidersOnelogin(): Promise<Models.Empty>; 
  	deleteIdentityprovidersPing(): Promise<Models.Empty>; 
  	deleteIdentityprovidersPurecloud(): Promise<Models.Empty>; 
  	deleteIdentityprovidersPureengage(): Promise<Models.Empty>; 
  	deleteIdentityprovidersSalesforce(): Promise<Models.Empty>; 
  	getIdentityproviders(): Promise<Models.OAuthProviderEntityListing>; 
  	getIdentityprovidersAdfs(): Promise<Models.ADFS>; 
  	getIdentityprovidersCic(): Promise<Models.CustomerInteractionCenter>; 
  	getIdentityprovidersGsuite(): Promise<Models.GSuite>; 
  	getIdentityprovidersIdentitynow(): Promise<Models.IdentityNow>; 
  	getIdentityprovidersOkta(): Promise<Models.Okta>; 
  	getIdentityprovidersOnelogin(): Promise<Models.OneLogin>; 
  	getIdentityprovidersPing(): Promise<Models.PingIdentity>; 
  	getIdentityprovidersPurecloud(): Promise<Models.PureCloud>; 
  	getIdentityprovidersPureengage(): Promise<Models.PureEngage>; 
  	getIdentityprovidersSalesforce(): Promise<Models.Salesforce>; 
  	putIdentityprovidersAdfs(body: Models.ADFS): Promise<Models.OAuthProvider>; 
  	putIdentityprovidersCic(body: Models.CustomerInteractionCenter): Promise<Models.OAuthProvider>; 
  	putIdentityprovidersGsuite(body: Models.GSuite): Promise<Models.OAuthProvider>; 
  	putIdentityprovidersIdentitynow(body: Models.IdentityNow): Promise<Models.IdentityNow>; 
  	putIdentityprovidersOkta(body: Models.Okta): Promise<Models.OAuthProvider>; 
  	putIdentityprovidersOnelogin(body: Models.OneLogin): Promise<Models.OAuthProvider>; 
  	putIdentityprovidersPing(body: Models.PingIdentity): Promise<Models.OAuthProvider>; 
  	putIdentityprovidersPurecloud(body: Models.PureCloud): Promise<Models.OAuthProvider>; 
  	putIdentityprovidersPureengage(body: Models.PureEngage): Promise<Models.OAuthProvider>; 
  	putIdentityprovidersSalesforce(body: Models.Salesforce): Promise<Models.OAuthProvider>;
}

declare namespace IdentityProviderApi { 
}

declare class IntegrationsApi {  
  	deleteIntegration(integrationId: string): Promise<Models.Integration>; 
  	deleteIntegrationsAction(actionId: string): Promise<void>; 
  	deleteIntegrationsActionDraft(actionId: string): Promise<void>; 
  	deleteIntegrationsCredential(credentialId: string): Promise<void>; 
  	getIntegration(integrationId: string, opts?: IntegrationsApi.getIntegrationOptions): Promise<Models.Integration>; 
  	getIntegrationConfigCurrent(integrationId: string): Promise<Models.IntegrationConfiguration>; 
  	getIntegrations(opts?: IntegrationsApi.getIntegrationsOptions): Promise<Models.IntegrationEntityListing>; 
  	getIntegrationsAction(actionId: string, opts?: IntegrationsApi.getIntegrationsActionOptions): Promise<Models.Action>; 
  	getIntegrationsActionDraft(actionId: string, opts?: IntegrationsApi.getIntegrationsActionDraftOptions): Promise<Models.Action>; 
  	getIntegrationsActionDraftSchema(actionId: string, fileName: string): Promise<Models.JsonSchemaDocument>; 
  	getIntegrationsActionDraftTemplate(actionId: string, fileName: string): Promise<string>; 
  	getIntegrationsActionDraftValidation(actionId: string): Promise<Models.DraftValidationResult>; 
  	getIntegrationsActionSchema(actionId: string, fileName: string): Promise<Models.JsonSchemaDocument>; 
  	getIntegrationsActionTemplate(actionId: string, fileName: string): Promise<string>; 
  	getIntegrationsActions(opts?: IntegrationsApi.getIntegrationsActionsOptions): Promise<Models.ActionEntityListing>; 
  	getIntegrationsActionsCategories(opts?: IntegrationsApi.getIntegrationsActionsCategoriesOptions): Promise<Models.CategoryEntityListing>; 
  	getIntegrationsActionsDrafts(opts?: IntegrationsApi.getIntegrationsActionsDraftsOptions): Promise<Models.ActionEntityListing>; 
  	getIntegrationsClientapps(opts?: IntegrationsApi.getIntegrationsClientappsOptions): Promise<Models.ClientAppEntityListing>; 
  	getIntegrationsCredential(credentialId: string): Promise<Models.Credential>; 
  	getIntegrationsCredentials(opts?: IntegrationsApi.getIntegrationsCredentialsOptions): Promise<Models.CredentialInfoListing>; 
  	getIntegrationsCredentialsTypes(): Promise<Models.CredentialTypeListing>; 
  	getIntegrationsEventlog(opts?: IntegrationsApi.getIntegrationsEventlogOptions): Promise<Models.IntegrationEventEntityListing>; 
  	getIntegrationsEventlogEventId(eventId: string): Promise<Models.IntegrationEvent>; 
  	getIntegrationsSpeechDialogflowAgent(agentId: string): Promise<Models.DialogflowAgent>; 
  	getIntegrationsSpeechDialogflowAgents(opts?: IntegrationsApi.getIntegrationsSpeechDialogflowAgentsOptions): Promise<Models.DialogflowAgentSummaryEntityListing>; 
  	getIntegrationsSpeechLexBotAlias(aliasId: string): Promise<Models.LexBotAlias>; 
  	getIntegrationsSpeechLexBotBotIdAliases(botId: string, opts?: IntegrationsApi.getIntegrationsSpeechLexBotBotIdAliasesOptions): Promise<Models.LexBotAliasEntityListing>; 
  	getIntegrationsSpeechLexBots(opts?: IntegrationsApi.getIntegrationsSpeechLexBotsOptions): Promise<Models.LexBotEntityListing>; 
  	getIntegrationsSpeechTtsEngine(engineId: string, opts?: IntegrationsApi.getIntegrationsSpeechTtsEngineOptions): Promise<Models.TtsEngineEntity>; 
  	getIntegrationsSpeechTtsEngineVoice(engineId: string, voiceId: string): Promise<Models.TtsVoiceEntity>; 
  	getIntegrationsSpeechTtsEngineVoices(engineId: string, opts?: IntegrationsApi.getIntegrationsSpeechTtsEngineVoicesOptions): Promise<Models.TtsVoiceEntityListing>; 
  	getIntegrationsSpeechTtsEngines(opts?: IntegrationsApi.getIntegrationsSpeechTtsEnginesOptions): Promise<Models.TtsEngineEntityListing>; 
  	getIntegrationsSpeechTtsSettings(): Promise<Models.TtsSettings>; 
  	getIntegrationsType(typeId: string): Promise<Models.IntegrationType>; 
  	getIntegrationsTypeConfigschema(typeId: string, configType: string): Promise<Models.JsonSchemaDocument>; 
  	getIntegrationsTypes(opts?: IntegrationsApi.getIntegrationsTypesOptions): Promise<Models.IntegrationTypeEntityListing>; 
  	patchIntegration(integrationId: string, opts?: IntegrationsApi.patchIntegrationOptions): Promise<Models.Integration>; 
  	patchIntegrationsAction(actionId: string, body: Models.UpdateActionInput): Promise<Models.Action>; 
  	patchIntegrationsActionDraft(actionId: string, body: Models.UpdateDraftInput): Promise<Models.Action>; 
  	postIntegrations(opts?: IntegrationsApi.postIntegrationsOptions): Promise<Models.Integration>; 
  	postIntegrationsActionDraft(actionId: string): Promise<Models.Action>; 
  	postIntegrationsActionDraftPublish(actionId: string, body: Models.PublishDraftInput): Promise<Models.Action>; 
  	postIntegrationsActionDraftTest(actionId: string, body: object): Promise<Models.TestExecutionResult>; 
  	postIntegrationsActionExecute(actionId: string, body: object): Promise<object>; 
  	postIntegrationsActionTest(actionId: string, body: object): Promise<Models.TestExecutionResult>; 
  	postIntegrationsActions(body: Models.PostActionInput): Promise<Models.Action>; 
  	postIntegrationsActionsDrafts(body: Models.PostActionInput): Promise<Models.Action>; 
  	postIntegrationsCredentials(opts?: IntegrationsApi.postIntegrationsCredentialsOptions): Promise<Models.CredentialInfo>; 
  	postIntegrationsWorkforcemanagementVendorconnection(opts?: IntegrationsApi.postIntegrationsWorkforcemanagementVendorconnectionOptions): Promise<Models.UserActionCategoryEntityListing>; 
  	putIntegrationConfigCurrent(integrationId: string, opts?: IntegrationsApi.putIntegrationConfigCurrentOptions): Promise<Models.IntegrationConfiguration>; 
  	putIntegrationsCredential(credentialId: string, opts?: IntegrationsApi.putIntegrationsCredentialOptions): Promise<Models.CredentialInfo>; 
  	putIntegrationsSpeechTtsSettings(body: Models.TtsSettings): Promise<Models.TtsSettings>;
}

declare namespace IntegrationsApi { 
	export interface getIntegrationOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"expand"?: Array<string>;
		"nextPage"?: string;
		"previousPage"?: string;
	}
	export interface getIntegrationsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"expand"?: Array<string>;
		"nextPage"?: string;
		"previousPage"?: string;
	}
	export interface getIntegrationsActionOptions { 
		"expand"?: string;
		"includeConfig"?: boolean;
	}
	export interface getIntegrationsActionDraftOptions { 
		"expand"?: string;
		"includeConfig"?: boolean;
	}
	export interface getIntegrationsActionsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"nextPage"?: string;
		"previousPage"?: string;
		"sortBy"?: string;
		"sortOrder"?: string;
		"category"?: string;
		"name"?: string;
		"secure"?: string;
		"includeAuthActions"?: string;
	}
	export interface getIntegrationsActionsCategoriesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"nextPage"?: string;
		"previousPage"?: string;
		"sortBy"?: string;
		"sortOrder"?: string;
		"secure"?: string;
	}
	export interface getIntegrationsActionsDraftsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"nextPage"?: string;
		"previousPage"?: string;
		"sortBy"?: string;
		"sortOrder"?: string;
		"category"?: string;
		"name"?: string;
		"secure"?: string;
		"includeAuthActions"?: string;
	}
	export interface getIntegrationsClientappsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"expand"?: Array<string>;
		"nextPage"?: string;
		"previousPage"?: string;
	}
	export interface getIntegrationsCredentialsOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
	}
	export interface getIntegrationsEventlogOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
		"entityId"?: string;
	}
	export interface getIntegrationsSpeechDialogflowAgentsOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"name"?: string;
	}
	export interface getIntegrationsSpeechLexBotBotIdAliasesOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"status"?: string;
		"name"?: string;
	}
	export interface getIntegrationsSpeechLexBotsOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"name"?: string;
	}
	export interface getIntegrationsSpeechTtsEngineOptions { 
		"includeVoices"?: boolean;
	}
	export interface getIntegrationsSpeechTtsEngineVoicesOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
	}
	export interface getIntegrationsSpeechTtsEnginesOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"includeVoices"?: boolean;
		"name"?: string;
		"language"?: string;
	}
	export interface getIntegrationsTypesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"expand"?: Array<string>;
		"nextPage"?: string;
		"previousPage"?: string;
	}
	export interface patchIntegrationOptions { 
		"body"?: Models.Integration;
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"expand"?: Array<string>;
		"nextPage"?: string;
		"previousPage"?: string;
	}
	export interface postIntegrationsOptions { 
		"body"?: Models.CreateIntegrationRequest;
	}
	export interface postIntegrationsCredentialsOptions { 
		"body"?: Models.Credential;
	}
	export interface postIntegrationsWorkforcemanagementVendorconnectionOptions { 
		"body"?: Models.VendorConnectionRequest;
	}
	export interface putIntegrationConfigCurrentOptions { 
		"body"?: Models.IntegrationConfiguration;
	}
	export interface putIntegrationsCredentialOptions { 
		"body"?: Models.Credential;
	}
}

declare class LanguagesApi {  
  	deleteLanguage(languageId: string): Promise<void>; 
  	deleteRoutingLanguage(languageId: string): Promise<void>; 
  	getLanguage(languageId: string): Promise<Models.Language>; 
  	getLanguages(opts?: LanguagesApi.getLanguagesOptions): Promise<Models.LanguageEntityListing>; 
  	getLanguagesTranslations(): Promise<Models.AvailableTranslations>; 
  	getLanguagesTranslationsBuiltin(language: string): Promise<{ [key: string]: object; }>; 
  	getLanguagesTranslationsOrganization(language: string): Promise<{ [key: string]: object; }>; 
  	getLanguagesTranslationsUser(userId: string): Promise<{ [key: string]: object; }>; 
  	getRoutingLanguage(languageId: string): Promise<Models.Language>; 
  	postLanguages(body: Models.Language): Promise<Models.Language>;
}

declare namespace LanguagesApi { 
	export interface getLanguagesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortOrder"?: string;
		"name"?: string;
	}
}

declare class LicenseApi {  
  	getLicenseDefinition(licenseId: string): Promise<Models.LicenseDefinition>; 
  	getLicenseDefinitions(): Promise<Array<Models.LicenseDefinition>>; 
  	getLicenseToggle(featureName: string): Promise<Models.LicenseOrgToggle>; 
  	getLicenseUser(userId: string): Promise<Models.LicenseUser>; 
  	getLicenseUsers(opts?: LicenseApi.getLicenseUsersOptions): Promise<Models.UserLicensesEntityListing>; 
  	postLicenseInfer(opts?: LicenseApi.postLicenseInferOptions): Promise<Array<string>>; 
  	postLicenseOrganization(opts?: LicenseApi.postLicenseOrganizationOptions): Promise<Array<Models.LicenseUpdateStatus>>; 
  	postLicenseToggle(featureName: string): Promise<Models.LicenseOrgToggle>; 
  	postLicenseUsers(opts?: LicenseApi.postLicenseUsersOptions): Promise<{ [key: string]: object; }>;
}

declare namespace LicenseApi { 
	export interface getLicenseUsersOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface postLicenseInferOptions { 
		"body"?: Array<string>;
	}
	export interface postLicenseOrganizationOptions { 
		"body"?: Models.LicenseBatchAssignmentRequest;
	}
	export interface postLicenseUsersOptions { 
		"body"?: Array<string>;
	}
}

declare class LocationsApi {  
  	deleteLocation(locationId: string): Promise<void>; 
  	getLocation(locationId: string, opts?: LocationsApi.getLocationOptions): Promise<Models.LocationDefinition>; 
  	getLocationSublocations(locationId: string): Promise<Models.LocationEntityListing>; 
  	getLocations(opts?: LocationsApi.getLocationsOptions): Promise<Models.LocationEntityListing>; 
  	getLocationsSearch(q64: string, opts?: LocationsApi.getLocationsSearchOptions): Promise<Models.LocationsSearchResponse>; 
  	patchLocation(locationId: string, body: Models.LocationUpdateDefinition): Promise<Models.LocationDefinition>; 
  	postLocations(body: Models.LocationCreateDefinition): Promise<Models.LocationDefinition>; 
  	postLocationsSearch(body: Models.LocationSearchRequest): Promise<Models.LocationsSearchResponse>;
}

declare namespace LocationsApi { 
	export interface getLocationOptions { 
		"expand"?: Array<string>;
	}
	export interface getLocationsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"id"?: Array<string>;
		"sortOrder"?: string;
	}
	export interface getLocationsSearchOptions { 
		"expand"?: Array<string>;
	}
}

declare class MobileDevicesApi {  
  	deleteMobiledevice(deviceId: string): Promise<void>; 
  	getMobiledevice(deviceId: string): Promise<Models.UserDevice>; 
  	getMobiledevices(opts?: MobileDevicesApi.getMobiledevicesOptions): Promise<Models.DirectoryUserDevicesListing>; 
  	postMobiledevices(body: Models.UserDevice): Promise<Models.UserDevice>; 
  	putMobiledevice(deviceId: string, opts?: MobileDevicesApi.putMobiledeviceOptions): Promise<Models.UserDevice>;
}

declare namespace MobileDevicesApi { 
	export interface getMobiledevicesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortOrder"?: string;
	}
	export interface putMobiledeviceOptions { 
		"body"?: Models.UserDevice;
	}
}

declare class NotificationsApi {  
  	deleteNotificationsChannelSubscriptions(channelId: string): Promise<void>; 
  	getNotificationsAvailabletopics(opts?: NotificationsApi.getNotificationsAvailabletopicsOptions): Promise<Models.AvailableTopicEntityListing>; 
  	getNotificationsChannelSubscriptions(channelId: string): Promise<Models.ChannelTopicEntityListing>; 
  	getNotificationsChannels(opts?: NotificationsApi.getNotificationsChannelsOptions): Promise<Models.ChannelEntityListing>; 
  	postNotificationsChannelSubscriptions(channelId: string, body: Array<Models.ChannelTopic>): Promise<Models.ChannelTopicEntityListing>; 
  	postNotificationsChannels(): Promise<Models.Channel>; 
  	putNotificationsChannelSubscriptions(channelId: string, body: Array<Models.ChannelTopic>): Promise<Models.ChannelTopicEntityListing>;
}

declare namespace NotificationsApi { 
	export interface getNotificationsAvailabletopicsOptions { 
		"expand"?: Array<string>;
	}
	export interface getNotificationsChannelsOptions { 
		"includechannels"?: string;
	}
}

declare class OAuthApi {  
  	deleteOauthClient(clientId: string): Promise<void>; 
  	getOauthAuthorization(clientId: string): Promise<Models.OAuthAuthorization>; 
  	getOauthAuthorizations(): Promise<Models.OAuthAuthorizationListing>; 
  	getOauthClient(clientId: string): Promise<Models.OAuthClient>; 
  	getOauthClients(): Promise<Models.OAuthClientEntityListing>; 
  	getOauthScope(scopeId: string, opts?: OAuthApi.getOauthScopeOptions): Promise<Models.OAuthScope>; 
  	getOauthScopes(opts?: OAuthApi.getOauthScopesOptions): Promise<Models.OAuthScopeListing>; 
  	postOauthClientSecret(clientId: string): Promise<Models.OAuthClient>; 
  	postOauthClients(body: Models.OAuthClientRequest): Promise<Models.OAuthClient>; 
  	putOauthClient(clientId: string, body: Models.OAuthClientRequest): Promise<Models.OAuthClient>;
}

declare namespace OAuthApi { 
	export interface getOauthScopeOptions { 
		"acceptLanguage"?: string;
	}
	export interface getOauthScopesOptions { 
		"acceptLanguage"?: string;
	}
}

declare class ObjectsApi {  
  	deleteAuthorizationDivision(divisionId: string, opts?: ObjectsApi.deleteAuthorizationDivisionOptions): Promise<void>; 
  	getAuthorizationDivision(divisionId: string, opts?: ObjectsApi.getAuthorizationDivisionOptions): Promise<Models.AuthzDivision>; 
  	getAuthorizationDivisions(opts?: ObjectsApi.getAuthorizationDivisionsOptions): Promise<Models.AuthzDivisionEntityListing>; 
  	getAuthorizationDivisionsHome(): Promise<Models.AuthzDivision>; 
  	getAuthorizationDivisionsLimit(): Promise<number>; 
  	postAuthorizationDivisionObject(divisionId: string, objectType: string, body: Array<string>): Promise<void>; 
  	postAuthorizationDivisions(body: Models.AuthzDivision): Promise<Models.AuthzDivision>; 
  	putAuthorizationDivision(divisionId: string, body: Models.AuthzDivision): Promise<Models.AuthzDivision>;
}

declare namespace ObjectsApi { 
	export interface deleteAuthorizationDivisionOptions { 
		"force"?: boolean;
	}
	export interface getAuthorizationDivisionOptions { 
		"objectCount"?: boolean;
	}
	export interface getAuthorizationDivisionsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"expand"?: Array<string>;
		"nextPage"?: string;
		"previousPage"?: string;
		"objectCount"?: boolean;
		"id"?: Array<string>;
		"name"?: string;
	}
}

declare class OrganizationApi {  
  	getFieldconfig(type: string): Promise<Models.FieldConfig>; 
  	getOrganizationsEmbeddedintegration(): Promise<Models.EmbeddedIntegration>; 
  	getOrganizationsMe(): Promise<Models.Organization>; 
  	getOrganizationsWhitelist(): Promise<Models.OrgWhitelistSettings>; 
  	patchOrganizationsFeature(featureName: string, enabled: Models.FeatureState): Promise<Models.OrganizationFeatures>; 
  	putOrganizationsEmbeddedintegration(body: Models.EmbeddedIntegration): Promise<Models.EmbeddedIntegration>; 
  	putOrganizationsMe(opts?: OrganizationApi.putOrganizationsMeOptions): Promise<Models.Organization>; 
  	putOrganizationsWhitelist(body: Models.OrgWhitelistSettings): Promise<Models.OrgWhitelistSettings>;
}

declare namespace OrganizationApi { 
	export interface putOrganizationsMeOptions { 
		"body"?: Models.Organization;
	}
}

declare class OrganizationAuthorizationApi {  
  	deleteOrgauthorizationTrustee(trusteeOrgId: string): Promise<void>; 
  	deleteOrgauthorizationTrusteeUser(trusteeOrgId: string, trusteeUserId: string): Promise<void>; 
  	deleteOrgauthorizationTrusteeUserRoles(trusteeOrgId: string, trusteeUserId: string): Promise<void>; 
  	deleteOrgauthorizationTrustor(trustorOrgId: string): Promise<void>; 
  	deleteOrgauthorizationTrustorUser(trustorOrgId: string, trusteeUserId: string): Promise<void>; 
  	getOrgauthorizationPairing(pairingId: string): Promise<Models.TrustRequest>; 
  	getOrgauthorizationTrustee(trusteeOrgId: string): Promise<Models.Trustee>; 
  	getOrgauthorizationTrusteeUser(trusteeOrgId: string, trusteeUserId: string): Promise<Models.TrustUser>; 
  	getOrgauthorizationTrusteeUserRoles(trusteeOrgId: string, trusteeUserId: string): Promise<Models.UserAuthorization>; 
  	getOrgauthorizationTrusteeUsers(trusteeOrgId: string, opts?: OrganizationAuthorizationApi.getOrgauthorizationTrusteeUsersOptions): Promise<Models.TrustUserEntityListing>; 
  	getOrgauthorizationTrustees(opts?: OrganizationAuthorizationApi.getOrgauthorizationTrusteesOptions): Promise<Models.TrustEntityListing>; 
  	getOrgauthorizationTrustor(trustorOrgId: string): Promise<Models.Trustor>; 
  	getOrgauthorizationTrustorUser(trustorOrgId: string, trusteeUserId: string): Promise<Models.TrustUser>; 
  	getOrgauthorizationTrustorUsers(trustorOrgId: string, opts?: OrganizationAuthorizationApi.getOrgauthorizationTrustorUsersOptions): Promise<Models.TrustUserEntityListing>; 
  	getOrgauthorizationTrustors(opts?: OrganizationAuthorizationApi.getOrgauthorizationTrustorsOptions): Promise<Models.TrustorEntityListing>; 
  	postOrgauthorizationPairings(body: Models.TrustRequestCreate): Promise<Models.TrustRequest>; 
  	postOrgauthorizationTrusteeUsers(trusteeOrgId: string, body: Models.TrustMemberCreate): Promise<Models.TrustUser>; 
  	postOrgauthorizationTrustees(body: Models.TrustCreate): Promise<Models.Trustee>; 
  	postOrgauthorizationTrusteesAudits(body: Models.TrusteeAuditQueryRequest, opts?: OrganizationAuthorizationApi.postOrgauthorizationTrusteesAuditsOptions): Promise<Models.AuditQueryResponse>; 
  	postOrgauthorizationTrustorAudits(body: Models.TrustorAuditQueryRequest, opts?: OrganizationAuthorizationApi.postOrgauthorizationTrustorAuditsOptions): Promise<Models.AuditQueryResponse>; 
  	putOrgauthorizationTrustee(trusteeOrgId: string, body: Models.Trustee): Promise<Models.Trustee>; 
  	putOrgauthorizationTrusteeUserRoledivisions(trusteeOrgId: string, trusteeUserId: string, body: Models.RoleDivisionGrants): Promise<Models.UserAuthorization>; 
  	putOrgauthorizationTrusteeUserRoles(trusteeOrgId: string, trusteeUserId: string, body: Array<string>): Promise<Models.UserAuthorization>; 
  	putOrgauthorizationTrustorUser(trustorOrgId: string, trusteeUserId: string): Promise<Models.TrustUser>;
}

declare namespace OrganizationAuthorizationApi { 
	export interface getOrgauthorizationTrusteeUsersOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getOrgauthorizationTrusteesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getOrgauthorizationTrustorUsersOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getOrgauthorizationTrustorsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface postOrgauthorizationTrusteesAuditsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface postOrgauthorizationTrustorAuditsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
}

declare class OutboundApi {  
  	deleteOutboundAttemptlimit(attemptLimitsId: string): Promise<void>; 
  	deleteOutboundCallabletimeset(callableTimeSetId: string): Promise<void>; 
  	deleteOutboundCallanalysisresponseset(callAnalysisSetId: string): Promise<void>; 
  	deleteOutboundCampaign(campaignId: string): Promise<Models.Campaign>; 
  	deleteOutboundCampaignProgress(campaignId: string): Promise<void>; 
  	deleteOutboundCampaignrule(campaignRuleId: string): Promise<void>; 
  	deleteOutboundContactlist(contactListId: string): Promise<void>; 
  	deleteOutboundContactlistContact(contactListId: string, contactId: string): Promise<void>; 
  	deleteOutboundContactlistContacts(contactListId: string, contactIds: Array<string>): Promise<void>; 
  	deleteOutboundContactlistfilter(contactListFilterId: string): Promise<void>; 
  	deleteOutboundContactlists(id: Array<string>): Promise<void>; 
  	deleteOutboundDnclist(dncListId: string): Promise<void>; 
  	deleteOutboundRuleset(ruleSetId: string): Promise<void>; 
  	deleteOutboundSchedulesCampaign(campaignId: string): Promise<void>; 
  	deleteOutboundSchedulesSequence(sequenceId: string): Promise<void>; 
  	deleteOutboundSequence(sequenceId: string): Promise<void>; 
  	getOutboundAttemptlimit(attemptLimitsId: string): Promise<Models.AttemptLimits>; 
  	getOutboundAttemptlimits(opts?: OutboundApi.getOutboundAttemptlimitsOptions): Promise<Models.AttemptLimitsEntityListing>; 
  	getOutboundCallabletimeset(callableTimeSetId: string): Promise<Models.CallableTimeSet>; 
  	getOutboundCallabletimesets(opts?: OutboundApi.getOutboundCallabletimesetsOptions): Promise<Models.CallableTimeSetEntityListing>; 
  	getOutboundCallanalysisresponseset(callAnalysisSetId: string): Promise<Models.ResponseSet>; 
  	getOutboundCallanalysisresponsesets(opts?: OutboundApi.getOutboundCallanalysisresponsesetsOptions): Promise<Models.ResponseSetEntityListing>; 
  	getOutboundCampaign(campaignId: string): Promise<Models.Campaign>; 
  	getOutboundCampaignDiagnostics(campaignId: string): Promise<Models.CampaignDiagnostics>; 
  	getOutboundCampaignInteractions(campaignId: string): Promise<Models.CampaignInteractions>; 
  	getOutboundCampaignProgress(campaignId: string): Promise<Models.CampaignProgress>; 
  	getOutboundCampaignStats(campaignId: string): Promise<Models.CampaignStats>; 
  	getOutboundCampaignrule(campaignRuleId: string): Promise<Models.CampaignRule>; 
  	getOutboundCampaignrules(opts?: OutboundApi.getOutboundCampaignrulesOptions): Promise<Models.CampaignRuleEntityListing>; 
  	getOutboundCampaigns(opts?: OutboundApi.getOutboundCampaignsOptions): Promise<Models.CampaignEntityListing>; 
  	getOutboundCampaignsDivisionview(campaignId: string): Promise<Models.CampaignDivisionView>; 
  	getOutboundCampaignsDivisionviews(opts?: OutboundApi.getOutboundCampaignsDivisionviewsOptions): Promise<Models.CampaignDivisionViewListing>; 
  	getOutboundContactlist(contactListId: string, opts?: OutboundApi.getOutboundContactlistOptions): Promise<Models.ContactList>; 
  	getOutboundContactlistContact(contactListId: string, contactId: string): Promise<Models.DialerContact>; 
  	getOutboundContactlistExport(contactListId: string, opts?: OutboundApi.getOutboundContactlistExportOptions): Promise<Models.ExportUri>; 
  	getOutboundContactlistImportstatus(contactListId: string): Promise<Models.ImportStatus>; 
  	getOutboundContactlistTimezonemappingpreview(contactListId: string): Promise<Models.TimeZoneMappingPreview>; 
  	getOutboundContactlistfilter(contactListFilterId: string): Promise<Models.ContactListFilter>; 
  	getOutboundContactlistfilters(opts?: OutboundApi.getOutboundContactlistfiltersOptions): Promise<Models.ContactListFilterEntityListing>; 
  	getOutboundContactlists(opts?: OutboundApi.getOutboundContactlistsOptions): Promise<Models.ContactListEntityListing>; 
  	getOutboundContactlistsDivisionview(contactListId: string, opts?: OutboundApi.getOutboundContactlistsDivisionviewOptions): Promise<Models.ContactListDivisionView>; 
  	getOutboundContactlistsDivisionviews(opts?: OutboundApi.getOutboundContactlistsDivisionviewsOptions): Promise<Models.ContactListDivisionViewListing>; 
  	getOutboundDnclist(dncListId: string, opts?: OutboundApi.getOutboundDnclistOptions): Promise<Models.DncList>; 
  	getOutboundDnclistExport(dncListId: string, opts?: OutboundApi.getOutboundDnclistExportOptions): Promise<Models.ExportUri>; 
  	getOutboundDnclistImportstatus(dncListId: string): Promise<Models.ImportStatus>; 
  	getOutboundDnclists(opts?: OutboundApi.getOutboundDnclistsOptions): Promise<Models.DncListEntityListing>; 
  	getOutboundDnclistsDivisionview(dncListId: string, opts?: OutboundApi.getOutboundDnclistsDivisionviewOptions): Promise<Models.DncListDivisionView>; 
  	getOutboundDnclistsDivisionviews(opts?: OutboundApi.getOutboundDnclistsDivisionviewsOptions): Promise<Models.DncListDivisionViewListing>; 
  	getOutboundEvent(eventId: string): Promise<Models.EventLog>; 
  	getOutboundEvents(opts?: OutboundApi.getOutboundEventsOptions): Promise<Models.DialerEventEntityListing>; 
  	getOutboundRuleset(ruleSetId: string): Promise<Models.RuleSet>; 
  	getOutboundRulesets(opts?: OutboundApi.getOutboundRulesetsOptions): Promise<Models.RuleSetEntityListing>; 
  	getOutboundSchedulesCampaign(campaignId: string): Promise<Models.CampaignSchedule>; 
  	getOutboundSchedulesCampaigns(): Promise<Array<Models.CampaignSchedule>>; 
  	getOutboundSchedulesSequence(sequenceId: string): Promise<Models.SequenceSchedule>; 
  	getOutboundSchedulesSequences(): Promise<Array<Models.SequenceSchedule>>; 
  	getOutboundSequence(sequenceId: string): Promise<Models.CampaignSequence>; 
  	getOutboundSequences(opts?: OutboundApi.getOutboundSequencesOptions): Promise<Models.CampaignSequenceEntityListing>; 
  	getOutboundSettings(): Promise<Models.OutboundSettings>; 
  	getOutboundWrapupcodemappings(): Promise<Models.WrapUpCodeMapping>; 
  	patchOutboundSettings(body: Models.OutboundSettings): Promise<void>; 
  	postOutboundAttemptlimits(body: Models.AttemptLimits): Promise<Models.AttemptLimits>; 
  	postOutboundAudits(body: Models.DialerAuditRequest, opts?: OutboundApi.postOutboundAuditsOptions): Promise<Models.AuditSearchResult>; 
  	postOutboundCallabletimesets(body: Models.CallableTimeSet): Promise<Models.CallableTimeSet>; 
  	postOutboundCallanalysisresponsesets(body: Models.ResponseSet): Promise<Models.ResponseSet>; 
  	postOutboundCampaignCallbackSchedule(campaignId: string, body: Models.ContactCallbackRequest): Promise<Models.ContactCallbackRequest>; 
  	postOutboundCampaignrules(body: Models.CampaignRule): Promise<Models.CampaignRule>; 
  	postOutboundCampaigns(body: Models.Campaign): Promise<Models.Campaign>; 
  	postOutboundCampaignsProgress(body: Array<string>): Promise<Array<Models.CampaignProgress>>; 
  	postOutboundContactlistClear(contactListId: string): Promise<void>; 
  	postOutboundContactlistContacts(contactListId: string, body: Array<Models.WritableDialerContact>, opts?: OutboundApi.postOutboundContactlistContactsOptions): Promise<Array<Models.DialerContact>>; 
  	postOutboundContactlistContactsBulk(contactListId: string, body: Array<string>): Promise<Array<Models.DialerContact>>; 
  	postOutboundContactlistExport(contactListId: string): Promise<Models.DomainEntityRef>; 
  	postOutboundContactlistfilters(body: Models.ContactListFilter): Promise<Models.ContactListFilter>; 
  	postOutboundContactlistfiltersPreview(body: Models.ContactListFilter): Promise<Models.FilterPreviewResponse>; 
  	postOutboundContactlists(body: Models.ContactList): Promise<Models.ContactList>; 
  	postOutboundConversationDnc(conversationId: string): Promise<void>; 
  	postOutboundDnclistExport(dncListId: string): Promise<Models.DomainEntityRef>; 
  	postOutboundDnclistPhonenumbers(dncListId: string, body: Array<string>): Promise<void>; 
  	postOutboundDnclists(body: Models.DncListCreate): Promise<Models.DncList>; 
  	postOutboundRulesets(body: Models.RuleSet): Promise<Models.RuleSet>; 
  	postOutboundSequences(body: Models.CampaignSequence): Promise<Models.CampaignSequence>; 
  	putOutboundAttemptlimit(attemptLimitsId: string, body: Models.AttemptLimits): Promise<Models.AttemptLimits>; 
  	putOutboundCallabletimeset(callableTimeSetId: string, body: Models.CallableTimeSet): Promise<Models.CallableTimeSet>; 
  	putOutboundCallanalysisresponseset(callAnalysisSetId: string, body: Models.ResponseSet): Promise<Models.ResponseSet>; 
  	putOutboundCampaign(campaignId: string, body: Models.Campaign): Promise<Models.Campaign>; 
  	putOutboundCampaignAgent(campaignId: string, userId: string, body: Models.Agent): Promise<string>; 
  	putOutboundCampaignrule(campaignRuleId: string, body: Models.CampaignRule): Promise<Models.CampaignRule>; 
  	putOutboundContactlist(contactListId: string, body: Models.ContactList): Promise<Models.ContactList>; 
  	putOutboundContactlistContact(contactListId: string, contactId: string, body: Models.DialerContact): Promise<Models.DialerContact>; 
  	putOutboundContactlistfilter(contactListFilterId: string, body: Models.ContactListFilter): Promise<Models.ContactListFilter>; 
  	putOutboundDnclist(dncListId: string, body: Models.DncList): Promise<Models.DncList>; 
  	putOutboundRuleset(ruleSetId: string, body: Models.RuleSet): Promise<Models.RuleSet>; 
  	putOutboundSchedulesCampaign(campaignId: string, body: Models.CampaignSchedule): Promise<Models.CampaignSchedule>; 
  	putOutboundSchedulesSequence(sequenceId: string, body: Models.SequenceSchedule): Promise<Models.SequenceSchedule>; 
  	putOutboundSequence(sequenceId: string, body: Models.CampaignSequence): Promise<Models.CampaignSequence>; 
  	putOutboundWrapupcodemappings(body: Models.WrapUpCodeMapping): Promise<Models.WrapUpCodeMapping>;
}

declare namespace OutboundApi { 
	export interface getOutboundAttemptlimitsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"filterType"?: string;
		"name"?: string;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface getOutboundCallabletimesetsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"filterType"?: string;
		"name"?: string;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface getOutboundCallanalysisresponsesetsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"filterType"?: string;
		"name"?: string;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface getOutboundCampaignrulesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"filterType"?: string;
		"name"?: string;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface getOutboundCampaignsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"filterType"?: string;
		"name"?: string;
		"id"?: Array<string>;
		"contactListId"?: string;
		"dncListIds"?: string;
		"distributionQueueId"?: string;
		"edgeGroupId"?: string;
		"callAnalysisResponseSetId"?: string;
		"divisionId"?: Array<string>;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface getOutboundCampaignsDivisionviewsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"filterType"?: string;
		"name"?: string;
		"id"?: Array<string>;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface getOutboundContactlistOptions { 
		"includeImportStatus"?: boolean;
		"includeSize"?: boolean;
	}
	export interface getOutboundContactlistExportOptions { 
		"download"?: string;
	}
	export interface getOutboundContactlistfiltersOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"filterType"?: string;
		"name"?: string;
		"sortBy"?: string;
		"sortOrder"?: string;
		"contactListId"?: string;
	}
	export interface getOutboundContactlistsOptions { 
		"includeImportStatus"?: boolean;
		"includeSize"?: boolean;
		"pageSize"?: number;
		"pageNumber"?: number;
		"filterType"?: string;
		"name"?: string;
		"id"?: Array<string>;
		"divisionId"?: Array<string>;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface getOutboundContactlistsDivisionviewOptions { 
		"includeImportStatus"?: boolean;
		"includeSize"?: boolean;
	}
	export interface getOutboundContactlistsDivisionviewsOptions { 
		"includeImportStatus"?: boolean;
		"includeSize"?: boolean;
		"pageSize"?: number;
		"pageNumber"?: number;
		"filterType"?: string;
		"name"?: string;
		"id"?: Array<string>;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface getOutboundDnclistOptions { 
		"includeImportStatus"?: boolean;
		"includeSize"?: boolean;
	}
	export interface getOutboundDnclistExportOptions { 
		"download"?: string;
	}
	export interface getOutboundDnclistsOptions { 
		"includeImportStatus"?: boolean;
		"includeSize"?: boolean;
		"pageSize"?: number;
		"pageNumber"?: number;
		"filterType"?: string;
		"name"?: string;
		"dncSourceType"?: string;
		"divisionId"?: Array<string>;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface getOutboundDnclistsDivisionviewOptions { 
		"includeImportStatus"?: boolean;
		"includeSize"?: boolean;
	}
	export interface getOutboundDnclistsDivisionviewsOptions { 
		"includeImportStatus"?: boolean;
		"includeSize"?: boolean;
		"pageSize"?: number;
		"pageNumber"?: number;
		"filterType"?: string;
		"name"?: string;
		"id"?: Array<string>;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface getOutboundEventsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"filterType"?: string;
		"category"?: string;
		"level"?: string;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface getOutboundRulesetsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"filterType"?: string;
		"name"?: string;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface getOutboundSequencesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"filterType"?: string;
		"name"?: string;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface postOutboundAuditsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
		"facetsOnly"?: boolean;
	}
	export interface postOutboundContactlistContactsOptions { 
		"priority"?: boolean;
		"clearSystemData"?: boolean;
		"doNotQueue"?: boolean;
	}
}

declare class PresenceApi {  
  	deletePresencedefinition(presenceId: string): Promise<void>; 
  	getPresencedefinition(presenceId: string, opts?: PresenceApi.getPresencedefinitionOptions): Promise<Models.OrganizationPresence>; 
  	getPresencedefinitions(opts?: PresenceApi.getPresencedefinitionsOptions): Promise<Models.OrganizationPresenceEntityListing>; 
  	getSystempresences(): Promise<Array<Models.SystemPresence>>; 
  	getUserPresence(userId: string, sourceId: string): Promise<Models.UserPresence>; 
  	patchUserPresence(userId: string, sourceId: string, body: Models.UserPresence): Promise<Models.UserPresence>; 
  	postPresencedefinitions(body: Models.OrganizationPresence): Promise<Models.OrganizationPresence>; 
  	putPresencedefinition(presenceId: string, body: Models.OrganizationPresence): Promise<Models.OrganizationPresence>; 
  	putUsersPresencesBulk(body: Array<Models.UserPresence>): Promise<Array<Models.UserPresence>>;
}

declare namespace PresenceApi { 
	export interface getPresencedefinitionOptions { 
		"localeCode"?: string;
	}
	export interface getPresencedefinitionsOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"deleted"?: string;
		"localeCode"?: string;
	}
}

declare class QualityApi {  
  	deleteQualityCalibration(calibrationId: string, calibratorId: string): Promise<Models.Calibration>; 
  	deleteQualityConversationEvaluation(conversationId: string, evaluationId: string, opts?: QualityApi.deleteQualityConversationEvaluationOptions): Promise<Models.Evaluation>; 
  	deleteQualityForm(formId: string): Promise<void>; 
  	deleteQualityFormsEvaluation(formId: string): Promise<void>; 
  	deleteQualityFormsSurvey(formId: string): Promise<void>; 
  	deleteQualityKeywordset(keywordSetId: string): Promise<void>; 
  	deleteQualityKeywordsets(ids: string): Promise<void>; 
  	getQualityAgentsActivity(opts?: QualityApi.getQualityAgentsActivityOptions): Promise<Models.AgentActivityEntityListing>; 
  	getQualityCalibration(calibrationId: string, opts?: QualityApi.getQualityCalibrationOptions): Promise<Models.Calibration>; 
  	getQualityCalibrations(calibratorId: string, opts?: QualityApi.getQualityCalibrationsOptions): Promise<Models.CalibrationEntityListing>; 
  	getQualityConversationAudits(conversationId: string, opts?: QualityApi.getQualityConversationAuditsOptions): Promise<Models.QualityAuditPage>; 
  	getQualityConversationEvaluation(conversationId: string, evaluationId: string, opts?: QualityApi.getQualityConversationEvaluationOptions): Promise<Models.Evaluation>; 
  	getQualityConversationSurveys(conversationId: string): Promise<Array<Models.Survey>>; 
  	getQualityEvaluationsQuery(opts?: QualityApi.getQualityEvaluationsQueryOptions): Promise<Models.EvaluationEntityListing>; 
  	getQualityEvaluatorsActivity(opts?: QualityApi.getQualityEvaluatorsActivityOptions): Promise<Models.EvaluatorActivityEntityListing>; 
  	getQualityForm(formId: string): Promise<Models.EvaluationForm>; 
  	getQualityFormVersions(formId: string, opts?: QualityApi.getQualityFormVersionsOptions): Promise<Models.EvaluationFormEntityListing>; 
  	getQualityForms(opts?: QualityApi.getQualityFormsOptions): Promise<Models.EvaluationFormEntityListing>; 
  	getQualityFormsEvaluation(formId: string): Promise<Models.EvaluationForm>; 
  	getQualityFormsEvaluationVersions(formId: string, opts?: QualityApi.getQualityFormsEvaluationVersionsOptions): Promise<Models.EvaluationFormEntityListing>; 
  	getQualityFormsEvaluations(opts?: QualityApi.getQualityFormsEvaluationsOptions): Promise<Models.EvaluationFormEntityListing>; 
  	getQualityFormsSurvey(formId: string): Promise<Models.SurveyForm>; 
  	getQualityFormsSurveyVersions(formId: string, opts?: QualityApi.getQualityFormsSurveyVersionsOptions): Promise<Models.SurveyFormEntityListing>; 
  	getQualityFormsSurveys(opts?: QualityApi.getQualityFormsSurveysOptions): Promise<Models.SurveyFormEntityListing>; 
  	getQualityFormsSurveysBulk(id: Array<string>): Promise<Models.SurveyFormEntityListing>; 
  	getQualityFormsSurveysBulkContexts(contextId: Array<string>, opts?: QualityApi.getQualityFormsSurveysBulkContextsOptions): Promise<Models.SurveyFormEntityListing>; 
  	getQualityKeywordset(keywordSetId: string): Promise<Models.KeywordSet>; 
  	getQualityKeywordsets(opts?: QualityApi.getQualityKeywordsetsOptions): Promise<Models.KeywordSetEntityListing>; 
  	getQualityPublishedform(formId: string): Promise<Models.EvaluationForm>; 
  	getQualityPublishedforms(opts?: QualityApi.getQualityPublishedformsOptions): Promise<Models.EvaluationFormEntityListing>; 
  	getQualityPublishedformsEvaluation(formId: string): Promise<Models.EvaluationForm>; 
  	getQualityPublishedformsEvaluations(opts?: QualityApi.getQualityPublishedformsEvaluationsOptions): Promise<Models.EvaluationFormEntityListing>; 
  	getQualityPublishedformsSurvey(formId: string): Promise<Models.SurveyForm>; 
  	getQualityPublishedformsSurveys(opts?: QualityApi.getQualityPublishedformsSurveysOptions): Promise<Models.SurveyFormEntityListing>; 
  	getQualitySurvey(surveyId: string): Promise<Models.Survey>; 
  	getQualitySurveysScorable(customerSurveyUrl: string): Promise<Models.ScorableSurvey>; 
  	patchQualityFormsSurvey(formId: string, body: Models.SurveyForm): Promise<Models.SurveyForm>; 
  	postAnalyticsEvaluationsAggregatesQuery(body: Models.EvaluationAggregationQuery): Promise<Models.EvaluationAggregateQueryResponse>; 
  	postAnalyticsSurveysAggregatesQuery(body: Models.SurveyAggregationQuery): Promise<Models.SurveyAggregateQueryResponse>; 
  	postQualityCalibrations(body: Models.CalibrationCreate, opts?: QualityApi.postQualityCalibrationsOptions): Promise<Models.Calibration>; 
  	postQualityConversationEvaluations(conversationId: string, body: Models.Evaluation, opts?: QualityApi.postQualityConversationEvaluationsOptions): Promise<Models.Evaluation>; 
  	postQualityEvaluationsScoring(body: Models.EvaluationFormAndScoringSet): Promise<Models.EvaluationScoringSet>; 
  	postQualityForms(body: Models.EvaluationForm): Promise<Models.EvaluationForm>; 
  	postQualityFormsEvaluations(body: Models.EvaluationForm): Promise<Models.EvaluationForm>; 
  	postQualityFormsSurveys(body: Models.SurveyForm): Promise<Models.SurveyForm>; 
  	postQualityKeywordsets(body: Models.KeywordSet, opts?: QualityApi.postQualityKeywordsetsOptions): Promise<Models.KeywordSet>; 
  	postQualityPublishedforms(body: Models.PublishForm): Promise<Models.EvaluationForm>; 
  	postQualityPublishedformsEvaluations(body: Models.PublishForm): Promise<Models.EvaluationForm>; 
  	postQualityPublishedformsSurveys(body: Models.PublishForm): Promise<Models.SurveyForm>; 
  	postQualitySpotability(opts?: QualityApi.postQualitySpotabilityOptions): Promise<Models.KeywordSet>; 
  	postQualitySurveysScoring(body: Models.SurveyFormAndScoringSet): Promise<Models.SurveyScoringSet>; 
  	putQualityCalibration(calibrationId: string, body: Models.Calibration): Promise<Models.Calibration>; 
  	putQualityConversationEvaluation(conversationId: string, evaluationId: string, body: Models.Evaluation, opts?: QualityApi.putQualityConversationEvaluationOptions): Promise<Models.Evaluation>; 
  	putQualityForm(formId: string, body: Models.EvaluationForm): Promise<Models.EvaluationForm>; 
  	putQualityFormsEvaluation(formId: string, body: Models.EvaluationForm): Promise<Models.EvaluationForm>; 
  	putQualityFormsSurvey(formId: string, body: Models.SurveyForm): Promise<Models.SurveyForm>; 
  	putQualityKeywordset(keywordSetId: string, body: Models.KeywordSet): Promise<Models.KeywordSet>; 
  	putQualitySurveysScorable(body: Models.ScorableSurvey, opts?: QualityApi.putQualitySurveysScorableOptions): Promise<Models.ScorableSurvey>;
}

declare namespace QualityApi { 
	export interface deleteQualityConversationEvaluationOptions { 
		"expand"?: string;
	}
	export interface getQualityAgentsActivityOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"expand"?: Array<string>;
		"nextPage"?: string;
		"previousPage"?: string;
		"startTime"?: string;
		"endTime"?: string;
		"agentUserId"?: Array<string>;
		"evaluatorUserId"?: string;
		"name"?: string;
		"group"?: string;
	}
	export interface getQualityCalibrationOptions { 
		"calibratorId"?: string;
		"conversationId"?: string;
	}
	export interface getQualityCalibrationsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"expand"?: Array<string>;
		"nextPage"?: string;
		"previousPage"?: string;
		"conversationId"?: string;
		"startTime"?: string;
		"endTime"?: string;
	}
	export interface getQualityConversationAuditsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"expand"?: Array<string>;
		"nextPage"?: string;
		"previousPage"?: string;
		"recordingId"?: string;
		"entityType"?: string;
	}
	export interface getQualityConversationEvaluationOptions { 
		"expand"?: string;
	}
	export interface getQualityEvaluationsQueryOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"expand"?: Array<string>;
		"nextPage"?: string;
		"previousPage"?: string;
		"conversationId"?: string;
		"agentUserId"?: string;
		"evaluatorUserId"?: string;
		"queueId"?: string;
		"startTime"?: string;
		"endTime"?: string;
		"evaluationState"?: Array<string>;
		"isReleased"?: boolean;
		"agentHasRead"?: boolean;
		"expandAnswerTotalScores"?: boolean;
		"maximum"?: number;
		"sortOrder"?: string;
	}
	export interface getQualityEvaluatorsActivityOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"expand"?: Array<string>;
		"nextPage"?: string;
		"previousPage"?: string;
		"startTime"?: string;
		"endTime"?: string;
		"name"?: string;
		"permission"?: Array<string>;
		"group"?: string;
	}
	export interface getQualityFormVersionsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getQualityFormsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"nextPage"?: string;
		"previousPage"?: string;
		"expand"?: string;
		"name"?: string;
		"sortOrder"?: string;
	}
	export interface getQualityFormsEvaluationVersionsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getQualityFormsEvaluationsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"nextPage"?: string;
		"previousPage"?: string;
		"expand"?: string;
		"name"?: string;
		"sortOrder"?: string;
	}
	export interface getQualityFormsSurveyVersionsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getQualityFormsSurveysOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"nextPage"?: string;
		"previousPage"?: string;
		"expand"?: string;
		"name"?: string;
		"sortOrder"?: string;
	}
	export interface getQualityFormsSurveysBulkContextsOptions { 
		"published"?: boolean;
	}
	export interface getQualityKeywordsetsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"expand"?: Array<string>;
		"nextPage"?: string;
		"previousPage"?: string;
		"name"?: string;
		"queueId"?: string;
		"agentId"?: string;
		"operator"?: string;
	}
	export interface getQualityPublishedformsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"name"?: string;
		"onlyLatestPerContext"?: boolean;
	}
	export interface getQualityPublishedformsEvaluationsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"name"?: string;
		"onlyLatestPerContext"?: boolean;
	}
	export interface getQualityPublishedformsSurveysOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"name"?: string;
		"onlyLatestEnabledPerContext"?: boolean;
	}
	export interface postQualityCalibrationsOptions { 
		"expand"?: string;
	}
	export interface postQualityConversationEvaluationsOptions { 
		"expand"?: string;
	}
	export interface postQualityKeywordsetsOptions { 
		"expand"?: string;
	}
	export interface postQualitySpotabilityOptions { 
		"body"?: Models.KeywordSet;
	}
	export interface putQualityConversationEvaluationOptions { 
		"expand"?: string;
	}
	export interface putQualitySurveysScorableOptions { 
		"customerSurveyUrl"?: string;
	}
}

declare class RecordingApi {  
  	deleteConversationRecordingAnnotation(conversationId: string, recordingId: string, annotationId: string): Promise<void>; 
  	deleteOrphanrecording(orphanId: string): Promise<Models.OrphanRecording>; 
  	deleteRecordingJob(jobId: string): Promise<void>; 
  	deleteRecordingMediaretentionpolicies(ids: string): Promise<void>; 
  	deleteRecordingMediaretentionpolicy(policyId: string): Promise<void>; 
  	getConversationRecording(conversationId: string, recordingId: string, opts?: RecordingApi.getConversationRecordingOptions): Promise<Models.Recording>; 
  	getConversationRecordingAnnotation(conversationId: string, recordingId: string, annotationId: string): Promise<Models.Annotation>; 
  	getConversationRecordingAnnotations(conversationId: string, recordingId: string): Promise<Array<Models.Annotation>>; 
  	getConversationRecordingmetadata(conversationId: string): Promise<Array<Models.Recording>>; 
  	getConversationRecordingmetadataRecordingId(conversationId: string, recordingId: string): Promise<Models.RecordingMetadata>; 
  	getConversationRecordings(conversationId: string, opts?: RecordingApi.getConversationRecordingsOptions): Promise<Array<Models.Recording>>; 
  	getOrphanrecording(orphanId: string): Promise<Models.OrphanRecording>; 
  	getOrphanrecordingMedia(orphanId: string, opts?: RecordingApi.getOrphanrecordingMediaOptions): Promise<Models.Recording>; 
  	getOrphanrecordings(opts?: RecordingApi.getOrphanrecordingsOptions): Promise<Models.OrphanRecordingListing>; 
  	getRecordingBatchrequest(jobId: string): Promise<Models.BatchDownloadJobStatusResult>; 
  	getRecordingJob(jobId: string): Promise<Models.RecordingJob>; 
  	getRecordingJobs(opts?: RecordingApi.getRecordingJobsOptions): Promise<Models.RecordingJobEntityListing>; 
  	getRecordingLocalkeysSetting(settingsId: string): Promise<Models.LocalEncryptionConfiguration>; 
  	getRecordingLocalkeysSettings(): Promise<Models.LocalEncryptionConfigurationListing>; 
  	getRecordingMediaretentionpolicies(opts?: RecordingApi.getRecordingMediaretentionpoliciesOptions): Promise<Models.PolicyEntityListing>; 
  	getRecordingMediaretentionpolicy(policyId: string): Promise<Models.Policy>; 
  	getRecordingRecordingkeys(opts?: RecordingApi.getRecordingRecordingkeysOptions): Promise<Models.EncryptionKeyEntityListing>; 
  	getRecordingRecordingkeysRotationschedule(): Promise<Models.KeyRotationSchedule>; 
  	getRecordingSettings(opts?: RecordingApi.getRecordingSettingsOptions): Promise<Models.RecordingSettings>; 
  	getRecordingsScreensessions(opts?: RecordingApi.getRecordingsScreensessionsOptions): Promise<Models.ScreenRecordingSessionListing>; 
  	patchRecordingMediaretentionpolicy(policyId: string, body: Models.Policy): Promise<Models.Policy>; 
  	patchRecordingsScreensession(recordingSessionId: string, opts?: RecordingApi.patchRecordingsScreensessionOptions): Promise<void>; 
  	postConversationRecordingAnnotations(conversationId: string, recordingId: string, body: Models.Annotation): Promise<Models.Annotation>; 
  	postRecordingBatchrequests(body: Models.BatchDownloadJobSubmission): Promise<Models.BatchDownloadJobSubmissionResult>; 
  	postRecordingJobs(body: Models.RecordingJobsQuery): Promise<Models.RecordingJob>; 
  	postRecordingLocalkeys(body: Models.LocalEncryptionKeyRequest): Promise<Models.EncryptionKey>; 
  	postRecordingLocalkeysSettings(body: Models.LocalEncryptionConfiguration): Promise<Models.LocalEncryptionConfiguration>; 
  	postRecordingMediaretentionpolicies(body: Models.PolicyCreate): Promise<Models.Policy>; 
  	postRecordingRecordingkeys(): Promise<Models.EncryptionKey>; 
  	putConversationRecording(conversationId: string, recordingId: string, body: Models.Recording): Promise<Models.Recording>; 
  	putConversationRecordingAnnotation(conversationId: string, recordingId: string, annotationId: string, body: Models.Annotation): Promise<Models.Annotation>; 
  	putOrphanrecording(orphanId: string, opts?: RecordingApi.putOrphanrecordingOptions): Promise<Models.Recording>; 
  	putRecordingJob(jobId: string, body: Models.ExecuteRecordingJobsQuery): Promise<Models.RecordingJob>; 
  	putRecordingLocalkeysSetting(settingsId: string, body: Models.LocalEncryptionConfiguration): Promise<Models.LocalEncryptionConfiguration>; 
  	putRecordingMediaretentionpolicy(policyId: string, body: Models.Policy): Promise<Models.Policy>; 
  	putRecordingRecordingkeysRotationschedule(body: Models.KeyRotationSchedule): Promise<Models.KeyRotationSchedule>; 
  	putRecordingSettings(body: Models.RecordingSettings): Promise<Models.RecordingSettings>;
}

declare namespace RecordingApi { 
	export interface getConversationRecordingOptions { 
		"formatId"?: string;
		"download"?: boolean;
		"fileName"?: string;
	}
	export interface getConversationRecordingsOptions { 
		"maxWaitMs"?: number;
		"formatId"?: string;
	}
	export interface getOrphanrecordingMediaOptions { 
		"formatId"?: string;
		"download"?: boolean;
		"fileName"?: string;
	}
	export interface getOrphanrecordingsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"expand"?: Array<string>;
		"nextPage"?: string;
		"previousPage"?: string;
		"hasConversation"?: boolean;
		"media"?: string;
	}
	export interface getRecordingJobsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"state"?: string;
		"showOnlyMyJobs"?: boolean;
		"jobType"?: string;
	}
	export interface getRecordingMediaretentionpoliciesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"expand"?: Array<string>;
		"nextPage"?: string;
		"previousPage"?: string;
		"name"?: string;
		"enabled"?: boolean;
		"summary"?: boolean;
		"hasErrors"?: boolean;
	}
	export interface getRecordingRecordingkeysOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getRecordingSettingsOptions { 
		"createDefault"?: boolean;
	}
	export interface getRecordingsScreensessionsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface patchRecordingsScreensessionOptions { 
		"body"?: Models.ScreenRecordingSessionRequest;
	}
	export interface putOrphanrecordingOptions { 
		"body"?: Models.OrphanUpdateRequest;
	}
}

declare class ResponseManagementApi {  
  	deleteResponsemanagementLibrary(libraryId: string): Promise<void>; 
  	deleteResponsemanagementResponse(responseId: string): Promise<void>; 
  	getResponsemanagementLibraries(opts?: ResponseManagementApi.getResponsemanagementLibrariesOptions): Promise<Models.LibraryEntityListing>; 
  	getResponsemanagementLibrary(libraryId: string): Promise<Models.Library>; 
  	getResponsemanagementResponse(responseId: string, opts?: ResponseManagementApi.getResponsemanagementResponseOptions): Promise<Models.Response>; 
  	getResponsemanagementResponses(libraryId: string, opts?: ResponseManagementApi.getResponsemanagementResponsesOptions): Promise<Models.ResponseEntityListing>; 
  	postResponsemanagementLibraries(body: Models.Library): Promise<Models.Library>; 
  	postResponsemanagementResponses(body: Models.Response, opts?: ResponseManagementApi.postResponsemanagementResponsesOptions): Promise<Models.Response>; 
  	postResponsemanagementResponsesQuery(body: Models.ResponseQueryRequest): Promise<Models.ResponseQueryResults>; 
  	putResponsemanagementLibrary(libraryId: string, body: Models.Library): Promise<Models.Library>; 
  	putResponsemanagementResponse(responseId: string, body: Models.Response, opts?: ResponseManagementApi.putResponsemanagementResponseOptions): Promise<Models.Response>;
}

declare namespace ResponseManagementApi { 
	export interface getResponsemanagementLibrariesOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"messagingTemplateFilter"?: string;
	}
	export interface getResponsemanagementResponseOptions { 
		"expand"?: string;
	}
	export interface getResponsemanagementResponsesOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"expand"?: string;
	}
	export interface postResponsemanagementResponsesOptions { 
		"expand"?: string;
	}
	export interface putResponsemanagementResponseOptions { 
		"expand"?: string;
	}
}

declare class RoutingApi {  
  	deleteRoutingEmailDomain(domainId: string): Promise<void>; 
  	deleteRoutingEmailDomainRoute(domainName: string, routeId: string): Promise<void>; 
  	deleteRoutingQueue(queueId: string, opts?: RoutingApi.deleteRoutingQueueOptions): Promise<void>; 
  	deleteRoutingQueueUser(queueId: string, memberId: string): Promise<void>; 
  	deleteRoutingQueueWrapupcode(queueId: string, codeId: string): Promise<void>; 
  	deleteRoutingSettings(): Promise<void>; 
  	deleteRoutingSkill(skillId: string): Promise<void>; 
  	deleteRoutingSmsPhonenumber(addressId: string): Promise<void>; 
  	deleteRoutingUserUtilization(userId: string): Promise<void>; 
  	deleteRoutingUtilization(): Promise<void>; 
  	deleteRoutingWrapupcode(codeId: string): Promise<void>; 
  	deleteUserRoutinglanguage(userId: string, languageId: string): Promise<void>; 
  	deleteUserRoutingskill(userId: string, skillId: string): Promise<void>; 
  	getRoutingEmailDomain(domainId: string): Promise<Models.InboundDomain>; 
  	getRoutingEmailDomainRoute(domainName: string, routeId: string): Promise<Models.InboundRoute>; 
  	getRoutingEmailDomainRoutes(domainName: string, opts?: RoutingApi.getRoutingEmailDomainRoutesOptions): Promise<Models.InboundRouteEntityListing>; 
  	getRoutingEmailDomains(): Promise<Models.InboundDomainEntityListing>; 
  	getRoutingEmailSetup(): Promise<Models.EmailSetup>; 
  	getRoutingLanguages(opts?: RoutingApi.getRoutingLanguagesOptions): Promise<Models.LanguageEntityListing>; 
  	getRoutingMessageRecipient(recipientId: string): Promise<Models.Recipient>; 
  	getRoutingMessageRecipients(opts?: RoutingApi.getRoutingMessageRecipientsOptions): Promise<Models.RecipientListing>; 
  	getRoutingQueue(queueId: string): Promise<Models.Queue>; 
  	getRoutingQueueEstimatedwaittime(queueId: string, opts?: RoutingApi.getRoutingQueueEstimatedwaittimeOptions): Promise<Models.EstimatedWaitTimePredictions>; 
  	getRoutingQueueMediatypeEstimatedwaittime(queueId: string, mediaType: string): Promise<Models.EstimatedWaitTimePredictions>; 
  	getRoutingQueueUsers(queueId: string, opts?: RoutingApi.getRoutingQueueUsersOptions): Promise<Models.QueueMemberEntityListing>; 
  	getRoutingQueueWrapupcodes(queueId: string, opts?: RoutingApi.getRoutingQueueWrapupcodesOptions): Promise<Models.WrapupCodeEntityListing>; 
  	getRoutingQueues(opts?: RoutingApi.getRoutingQueuesOptions): Promise<Models.QueueEntityListing>; 
  	getRoutingQueuesDivisionviews(opts?: RoutingApi.getRoutingQueuesDivisionviewsOptions): Promise<Models.QueueEntityListing>; 
  	getRoutingQueuesDivisionviewsAll(opts?: RoutingApi.getRoutingQueuesDivisionviewsAllOptions): Promise<Models.QueueEntityListing>; 
  	getRoutingQueuesMe(opts?: RoutingApi.getRoutingQueuesMeOptions): Promise<Models.UserQueueEntityListing>; 
  	getRoutingSettings(): Promise<Models.RoutingSettings>; 
  	getRoutingSettingsContactcenter(): Promise<Models.ContactCenterSettings>; 
  	getRoutingSettingsTranscription(): Promise<Models.TranscriptionSettings>; 
  	getRoutingSkill(skillId: string): Promise<Models.RoutingSkill>; 
  	getRoutingSkills(opts?: RoutingApi.getRoutingSkillsOptions): Promise<Models.SkillEntityListing>; 
  	getRoutingSmsAddress(addressId: string): Promise<Models.SmsAddress>; 
  	getRoutingSmsAddresses(opts?: RoutingApi.getRoutingSmsAddressesOptions): Promise<Models.SmsAddressEntityListing>; 
  	getRoutingSmsAvailablephonenumbers(countryCode: string, phoneNumberType: string, opts?: RoutingApi.getRoutingSmsAvailablephonenumbersOptions): Promise<Models.SMSAvailablePhoneNumberEntityListing>; 
  	getRoutingSmsPhonenumber(addressId: string): Promise<Models.SmsPhoneNumber>; 
  	getRoutingSmsPhonenumbers(opts?: RoutingApi.getRoutingSmsPhonenumbersOptions): Promise<Models.SmsPhoneNumberEntityListing>; 
  	getRoutingUserUtilization(userId: string): Promise<Models.Utilization>; 
  	getRoutingUtilization(): Promise<Models.Utilization>; 
  	getRoutingWrapupcode(codeId: string): Promise<Models.WrapupCode>; 
  	getRoutingWrapupcodes(opts?: RoutingApi.getRoutingWrapupcodesOptions): Promise<Models.WrapupCodeEntityListing>; 
  	getUserQueues(userId: string, opts?: RoutingApi.getUserQueuesOptions): Promise<Models.UserQueueEntityListing>; 
  	getUserRoutinglanguages(userId: string, opts?: RoutingApi.getUserRoutinglanguagesOptions): Promise<Models.UserLanguageEntityListing>; 
  	getUserRoutingskills(userId: string, opts?: RoutingApi.getUserRoutingskillsOptions): Promise<Models.UserSkillEntityListing>; 
  	patchRoutingQueueUser(queueId: string, memberId: string, body: Models.QueueMember): Promise<Models.QueueMember>; 
  	patchRoutingQueueUsers(queueId: string, body: Array<Models.QueueMember>): Promise<Models.QueueMemberEntityListing>; 
  	patchRoutingSettingsContactcenter(body: Models.ContactCenterSettings): Promise<void>; 
  	patchUserQueue(queueId: string, userId: string, body: Models.UserQueue): Promise<Models.UserQueue>; 
  	patchUserQueues(userId: string, body: Array<Models.UserQueue>, opts?: RoutingApi.patchUserQueuesOptions): Promise<Models.UserQueueEntityListing>; 
  	patchUserRoutinglanguage(userId: string, languageId: string, body: Models.UserRoutingLanguage): Promise<Models.UserRoutingLanguage>; 
  	patchUserRoutinglanguagesBulk(userId: string, body: Array<Models.UserRoutingLanguagePost>): Promise<Models.UserLanguageEntityListing>; 
  	patchUserRoutingskillsBulk(userId: string, body: Array<Models.UserRoutingSkillPost>): Promise<Models.UserSkillEntityListing>; 
  	postAnalyticsQueuesObservationsQuery(body: Models.QueueObservationQuery): Promise<Models.QueueObservationQueryResponse>; 
  	postRoutingEmailDomainRoutes(domainName: string, body: Models.InboundRoute): Promise<Models.InboundRoute>; 
  	postRoutingEmailDomains(body: Models.InboundDomain): Promise<Models.InboundDomain>; 
  	postRoutingLanguages(body: Models.Language): Promise<Models.Language>; 
  	postRoutingQueueUsers(queueId: string, body: Array<Models.WritableEntity>, opts?: RoutingApi.postRoutingQueueUsersOptions): Promise<string>; 
  	postRoutingQueueWrapupcodes(queueId: string, body: Array<Models.WrapUpCodeReference>): Promise<Array<Models.WrapupCode>>; 
  	postRoutingQueues(body: Models.CreateQueueRequest): Promise<Models.Queue>; 
  	postRoutingSkills(body: Models.RoutingSkill): Promise<Models.RoutingSkill>; 
  	postRoutingSmsAddresses(body: Models.SmsAddressProvision): Promise<Models.SmsAddress>; 
  	postRoutingSmsPhonenumbers(body: Models.SmsPhoneNumberProvision): Promise<Models.SmsPhoneNumber>; 
  	postRoutingWrapupcodes(body: Models.WrapupCode): Promise<Models.WrapupCode>; 
  	postUserRoutinglanguages(userId: string, body: Models.UserRoutingLanguagePost): Promise<Models.UserRoutingLanguage>; 
  	postUserRoutingskills(userId: string, body: Models.UserRoutingSkillPost): Promise<Models.UserRoutingSkill>; 
  	putRoutingEmailDomainRoute(domainName: string, routeId: string, body: Models.InboundRoute): Promise<Models.InboundRoute>; 
  	putRoutingMessageRecipient(recipientId: string, body: Models.Recipient): Promise<Models.Recipient>; 
  	putRoutingQueue(queueId: string, body: Models.QueueRequest): Promise<Models.Queue>; 
  	putRoutingSettings(body: Models.RoutingSettings): Promise<Models.RoutingSettings>; 
  	putRoutingSettingsTranscription(body: Models.TranscriptionSettings): Promise<Models.TranscriptionSettings>; 
  	putRoutingSmsPhonenumber(addressId: string, body: Models.SmsPhoneNumber): Promise<Models.SmsPhoneNumber>; 
  	putRoutingUserUtilization(userId: string, body: Models.Utilization): Promise<Models.Utilization>; 
  	putRoutingUtilization(body: Models.Utilization): Promise<Models.Utilization>; 
  	putRoutingWrapupcode(codeId: string, body: Models.WrapupCode): Promise<Models.WrapupCode>; 
  	putUserRoutingskill(userId: string, skillId: string, body: Models.UserRoutingSkill): Promise<Models.UserRoutingSkill>; 
  	putUserRoutingskillsBulk(userId: string, body: Array<Models.UserRoutingSkillPost>): Promise<Models.UserSkillEntityListing>;
}

declare namespace RoutingApi { 
	export interface deleteRoutingQueueOptions { 
		"forceDelete"?: boolean;
	}
	export interface getRoutingEmailDomainRoutesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"pattern"?: string;
	}
	export interface getRoutingLanguagesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortOrder"?: string;
		"name"?: string;
		"id"?: Array<string>;
	}
	export interface getRoutingMessageRecipientsOptions { 
		"messengerType"?: string;
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getRoutingQueueEstimatedwaittimeOptions { 
		"conversationId"?: string;
	}
	export interface getRoutingQueueUsersOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"expand"?: Array<string>;
		"joined"?: boolean;
		"name"?: string;
		"profileSkills"?: Array<string>;
		"skills"?: Array<string>;
		"languages"?: Array<string>;
		"routingStatus"?: Array<string>;
		"presence"?: Array<string>;
	}
	export interface getRoutingQueueWrapupcodesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getRoutingQueuesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"name"?: string;
		"id"?: Array<string>;
		"divisionId"?: Array<string>;
	}
	export interface getRoutingQueuesDivisionviewsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
		"name"?: string;
		"id"?: Array<string>;
		"divisionId"?: Array<string>;
	}
	export interface getRoutingQueuesDivisionviewsAllOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface getRoutingQueuesMeOptions { 
		"joined"?: boolean;
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface getRoutingSkillsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"name"?: string;
		"id"?: Array<string>;
	}
	export interface getRoutingSmsAddressesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getRoutingSmsAvailablephonenumbersOptions { 
		"region"?: string;
		"city"?: string;
		"areaCode"?: string;
		"pattern"?: string;
		"addressRequirement"?: string;
	}
	export interface getRoutingSmsPhonenumbersOptions { 
		"phoneNumber"?: string;
		"phoneNumberType"?: string;
		"phoneNumberStatus"?: string;
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getRoutingWrapupcodesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"name"?: string;
	}
	export interface getUserQueuesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"joined"?: boolean;
		"divisionId"?: Array<string>;
	}
	export interface getUserRoutinglanguagesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortOrder"?: string;
	}
	export interface getUserRoutingskillsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortOrder"?: string;
	}
	export interface patchUserQueuesOptions { 
		"divisionId"?: Array<string>;
	}
	export interface postRoutingQueueUsersOptions { 
		"_delete"?: boolean;
	}
}

declare class SCIMApi {  
  	deleteScimGroup(groupId: string, opts?: SCIMApi.deleteScimGroupOptions): Promise<void>; 
  	deleteScimUser(userId: string, opts?: SCIMApi.deleteScimUserOptions): Promise<Models.Empty>; 
  	deleteScimV2Group(groupId: string, opts?: SCIMApi.deleteScimV2GroupOptions): Promise<void>; 
  	deleteScimV2User(userId: string, opts?: SCIMApi.deleteScimV2UserOptions): Promise<Models.Empty>; 
  	getScimGroup(groupId: string, opts?: SCIMApi.getScimGroupOptions): Promise<Models.ScimV2Group>; 
  	getScimGroups(opts?: SCIMApi.getScimGroupsOptions): Promise<Models.ScimGroupListResponse>; 
  	getScimResourcetype(resourceType: string): Promise<Models.ScimConfigResourceType>; 
  	getScimResourcetypes(): Promise<Models.ScimConfigResourceTypesListResponse>; 
  	getScimSchema(schemaId: string): Promise<Models.ScimConfigResourceType>; 
  	getScimSchemas(opts?: SCIMApi.getScimSchemasOptions): Promise<Models.ScimConfigResourceTypesListResponse>; 
  	getScimServiceproviderconfig(opts?: SCIMApi.getScimServiceproviderconfigOptions): Promise<Models.ScimServiceProviderConfig>; 
  	getScimUser(userId: string, opts?: SCIMApi.getScimUserOptions): Promise<Models.ScimV2User>; 
  	getScimUsers(opts?: SCIMApi.getScimUsersOptions): Promise<Models.ScimUserListResponse>; 
  	getScimV2Group(groupId: string, opts?: SCIMApi.getScimV2GroupOptions): Promise<Models.ScimV2Group>; 
  	getScimV2Groups(filter: string, opts?: SCIMApi.getScimV2GroupsOptions): Promise<Models.ScimGroupListResponse>; 
  	getScimV2Resourcetype(resourceType: string): Promise<Models.ScimConfigResourceType>; 
  	getScimV2Resourcetypes(): Promise<Models.ScimConfigResourceTypesListResponse>; 
  	getScimV2Schema(schemaId: string): Promise<Models.ScimV2SchemaDefinition>; 
  	getScimV2Schemas(opts?: SCIMApi.getScimV2SchemasOptions): Promise<Models.ScimV2SchemaListResponse>; 
  	getScimV2Serviceproviderconfig(opts?: SCIMApi.getScimV2ServiceproviderconfigOptions): Promise<Models.ScimServiceProviderConfig>; 
  	getScimV2User(userId: string, opts?: SCIMApi.getScimV2UserOptions): Promise<Models.ScimV2User>; 
  	getScimV2Users(opts?: SCIMApi.getScimV2UsersOptions): Promise<Models.ScimUserListResponse>; 
  	patchScimGroup(groupId: string, body: Models.ScimV2PatchRequest, opts?: SCIMApi.patchScimGroupOptions): Promise<Models.ScimV2Group>; 
  	patchScimUser(userId: string, body: Models.ScimV2PatchRequest, opts?: SCIMApi.patchScimUserOptions): Promise<Models.ScimV2User>; 
  	patchScimV2Group(groupId: string, body: Models.ScimV2PatchRequest, opts?: SCIMApi.patchScimV2GroupOptions): Promise<Models.ScimV2Group>; 
  	patchScimV2User(userId: string, body: Models.ScimV2PatchRequest, opts?: SCIMApi.patchScimV2UserOptions): Promise<Models.ScimV2User>; 
  	postScimGroups(body: Models.ScimV2Group): Promise<Models.ScimV2Group>; 
  	postScimUsers(body: Models.ScimV2CreateUser): Promise<Models.ScimV2User>; 
  	postScimV2Groups(body: Models.ScimV2Group): Promise<Models.ScimV2Group>; 
  	postScimV2Users(body: Models.ScimV2CreateUser): Promise<Models.ScimV2User>; 
  	putScimGroup(groupId: string, body: Models.ScimV2Group, opts?: SCIMApi.putScimGroupOptions): Promise<Models.ScimV2Group>; 
  	putScimUser(userId: string, body: Models.ScimV2User, opts?: SCIMApi.putScimUserOptions): Promise<Models.ScimV2User>; 
  	putScimV2Group(groupId: string, body: Models.ScimV2Group, opts?: SCIMApi.putScimV2GroupOptions): Promise<Models.ScimV2Group>; 
  	putScimV2User(userId: string, body: Models.ScimV2User, opts?: SCIMApi.putScimV2UserOptions): Promise<Models.ScimV2User>;
}

declare namespace SCIMApi { 
	export interface deleteScimGroupOptions { 
		"ifMatch"?: string;
	}
	export interface deleteScimUserOptions { 
		"ifMatch"?: string;
	}
	export interface deleteScimV2GroupOptions { 
		"ifMatch"?: string;
	}
	export interface deleteScimV2UserOptions { 
		"ifMatch"?: string;
	}
	export interface getScimGroupOptions { 
		"attributes"?: Array<string>;
		"excludedAttributes"?: Array<string>;
		"ifNoneMatch"?: string;
	}
	export interface getScimGroupsOptions { 
		"startIndex"?: number;
		"count"?: number;
		"attributes"?: Array<string>;
		"excludedAttributes"?: Array<string>;
		"filter"?: string;
	}
	export interface getScimSchemasOptions { 
		"filter"?: string;
	}
	export interface getScimServiceproviderconfigOptions { 
		"ifNoneMatch"?: string;
	}
	export interface getScimUserOptions { 
		"attributes"?: Array<string>;
		"excludedAttributes"?: Array<string>;
		"ifNoneMatch"?: string;
	}
	export interface getScimUsersOptions { 
		"startIndex"?: number;
		"count"?: number;
		"attributes"?: Array<string>;
		"excludedAttributes"?: Array<string>;
		"filter"?: string;
	}
	export interface getScimV2GroupOptions { 
		"attributes"?: Array<string>;
		"excludedAttributes"?: Array<string>;
		"ifNoneMatch"?: string;
	}
	export interface getScimV2GroupsOptions { 
		"startIndex"?: number;
		"count"?: number;
		"attributes"?: Array<string>;
		"excludedAttributes"?: Array<string>;
	}
	export interface getScimV2SchemasOptions { 
		"filter"?: string;
	}
	export interface getScimV2ServiceproviderconfigOptions { 
		"ifNoneMatch"?: string;
	}
	export interface getScimV2UserOptions { 
		"attributes"?: Array<string>;
		"excludedAttributes"?: Array<string>;
		"ifNoneMatch"?: string;
	}
	export interface getScimV2UsersOptions { 
		"startIndex"?: number;
		"count"?: number;
		"attributes"?: Array<string>;
		"excludedAttributes"?: Array<string>;
		"filter"?: string;
	}
	export interface patchScimGroupOptions { 
		"ifMatch"?: string;
	}
	export interface patchScimUserOptions { 
		"ifMatch"?: string;
	}
	export interface patchScimV2GroupOptions { 
		"ifMatch"?: string;
	}
	export interface patchScimV2UserOptions { 
		"ifMatch"?: string;
	}
	export interface putScimGroupOptions { 
		"ifMatch"?: string;
	}
	export interface putScimUserOptions { 
		"ifMatch"?: string;
	}
	export interface putScimV2GroupOptions { 
		"ifMatch"?: string;
	}
	export interface putScimV2UserOptions { 
		"ifMatch"?: string;
	}
}

declare class ScriptsApi {  
  	getScript(scriptId: string): Promise<Models.Script>; 
  	getScriptPage(scriptId: string, pageId: string, opts?: ScriptsApi.getScriptPageOptions): Promise<Models.Page>; 
  	getScriptPages(scriptId: string, opts?: ScriptsApi.getScriptPagesOptions): Promise<Array<Models.Page>>; 
  	getScripts(opts?: ScriptsApi.getScriptsOptions): Promise<Models.ScriptEntityListing>; 
  	getScriptsPublished(opts?: ScriptsApi.getScriptsPublishedOptions): Promise<Models.ScriptEntityListing>; 
  	getScriptsPublishedScriptId(scriptId: string, opts?: ScriptsApi.getScriptsPublishedScriptIdOptions): Promise<Models.Script>; 
  	getScriptsPublishedScriptIdPage(scriptId: string, pageId: string, opts?: ScriptsApi.getScriptsPublishedScriptIdPageOptions): Promise<Models.Page>; 
  	getScriptsPublishedScriptIdPages(scriptId: string, opts?: ScriptsApi.getScriptsPublishedScriptIdPagesOptions): Promise<Array<Models.Page>>; 
  	getScriptsPublishedScriptIdVariables(scriptId: string, opts?: ScriptsApi.getScriptsPublishedScriptIdVariablesOptions): Promise<object>; 
  	getScriptsUploadStatus(uploadId: string, opts?: ScriptsApi.getScriptsUploadStatusOptions): Promise<Models.ImportScriptStatusResponse>; 
  	postScriptExport(scriptId: string, opts?: ScriptsApi.postScriptExportOptions): Promise<Models.ExportScriptResponse>;
}

declare namespace ScriptsApi { 
	export interface getScriptPageOptions { 
		"scriptDataVersion"?: string;
	}
	export interface getScriptPagesOptions { 
		"scriptDataVersion"?: string;
	}
	export interface getScriptsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"expand"?: string;
		"name"?: string;
		"feature"?: string;
		"flowId"?: string;
		"sortBy"?: string;
		"sortOrder"?: string;
		"scriptDataVersion"?: string;
	}
	export interface getScriptsPublishedOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"expand"?: string;
		"name"?: string;
		"feature"?: string;
		"flowId"?: string;
		"scriptDataVersion"?: string;
	}
	export interface getScriptsPublishedScriptIdOptions { 
		"scriptDataVersion"?: string;
	}
	export interface getScriptsPublishedScriptIdPageOptions { 
		"scriptDataVersion"?: string;
	}
	export interface getScriptsPublishedScriptIdPagesOptions { 
		"scriptDataVersion"?: string;
	}
	export interface getScriptsPublishedScriptIdVariablesOptions { 
		"input"?: string;
		"output"?: string;
		"type"?: string;
		"scriptDataVersion"?: string;
	}
	export interface getScriptsUploadStatusOptions { 
		"longPoll"?: boolean;
	}
	export interface postScriptExportOptions { 
		"body"?: Models.ExportScriptRequest;
	}
}

declare class SearchApi {  
  	getDocumentationGknSearch(q64: string): Promise<Models.GKNDocumentationSearchResponse>; 
  	getDocumentationSearch(q64: string): Promise<Models.DocumentationSearchResponse>; 
  	getGroupsSearch(q64: string, opts?: SearchApi.getGroupsSearchOptions): Promise<Models.GroupsSearchResponse>; 
  	getLocationsSearch(q64: string, opts?: SearchApi.getLocationsSearchOptions): Promise<Models.LocationsSearchResponse>; 
  	getSearch(q64: string, opts?: SearchApi.getSearchOptions): Promise<Models.JsonNodeSearchResponse>; 
  	getSearchSuggest(q64: string, opts?: SearchApi.getSearchSuggestOptions): Promise<Models.JsonNodeSearchResponse>; 
  	getUsersSearch(q64: string, opts?: SearchApi.getUsersSearchOptions): Promise<Models.UsersSearchResponse>; 
  	getVoicemailSearch(q64: string, opts?: SearchApi.getVoicemailSearchOptions): Promise<Models.VoicemailsSearchResponse>; 
  	postDocumentationGknSearch(body: Models.GKNDocumentationSearchRequest): Promise<Models.GKNDocumentationSearchResponse>; 
  	postDocumentationSearch(body: Models.DocumentationSearchRequest): Promise<Models.DocumentationSearchResponse>; 
  	postGroupsSearch(body: Models.GroupSearchRequest): Promise<Models.GroupsSearchResponse>; 
  	postLocationsSearch(body: Models.LocationSearchRequest): Promise<Models.LocationsSearchResponse>; 
  	postSearch(body: Models.SearchRequest, opts?: SearchApi.postSearchOptions): Promise<Models.JsonNodeSearchResponse>; 
  	postSearchSuggest(body: Models.SuggestSearchRequest, opts?: SearchApi.postSearchSuggestOptions): Promise<Models.JsonNodeSearchResponse>; 
  	postUsersSearch(body: Models.UserSearchRequest): Promise<Models.UsersSearchResponse>; 
  	postVoicemailSearch(body: Models.VoicemailSearchRequest): Promise<Models.VoicemailsSearchResponse>;
}

declare namespace SearchApi { 
	export interface getGroupsSearchOptions { 
		"expand"?: Array<string>;
	}
	export interface getLocationsSearchOptions { 
		"expand"?: Array<string>;
	}
	export interface getSearchOptions { 
		"expand"?: Array<string>;
		"profile"?: boolean;
	}
	export interface getSearchSuggestOptions { 
		"expand"?: Array<string>;
		"profile"?: boolean;
	}
	export interface getUsersSearchOptions { 
		"expand"?: Array<string>;
	}
	export interface getVoicemailSearchOptions { 
		"expand"?: Array<string>;
	}
	export interface postSearchOptions { 
		"profile"?: boolean;
	}
	export interface postSearchSuggestOptions { 
		"profile"?: boolean;
	}
}

declare class SpeechTextAnalyticsApi {  
  	getConversationTranscriptproperty(conversationId: string, communicationId: string): Promise<Models.TranscriptProperty>;
}

declare namespace SpeechTextAnalyticsApi { 
}

declare class StationsApi {  
  	deleteStationAssociateduser(stationId: string): Promise<void>; 
  	getStation(stationId: string): Promise<Models.Station>; 
  	getStations(opts?: StationsApi.getStationsOptions): Promise<Models.StationEntityListing>; 
  	getStationsSettings(): Promise<Models.StationSettings>; 
  	patchStationsSettings(body: Models.StationSettings): Promise<Models.StationSettings>;
}

declare namespace StationsApi { 
	export interface getStationsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"name"?: string;
		"userSelectable"?: string;
		"webRtcUserId"?: string;
		"id"?: string;
		"lineAppearanceId"?: string;
	}
}

declare class SuggestApi {  
  	getSearch(q64: string, opts?: SuggestApi.getSearchOptions): Promise<Models.JsonNodeSearchResponse>; 
  	getSearchSuggest(q64: string, opts?: SuggestApi.getSearchSuggestOptions): Promise<Models.JsonNodeSearchResponse>; 
  	postSearch(body: Models.SearchRequest, opts?: SuggestApi.postSearchOptions): Promise<Models.JsonNodeSearchResponse>; 
  	postSearchSuggest(body: Models.SuggestSearchRequest, opts?: SuggestApi.postSearchSuggestOptions): Promise<Models.JsonNodeSearchResponse>;
}

declare namespace SuggestApi { 
	export interface getSearchOptions { 
		"expand"?: Array<string>;
		"profile"?: boolean;
	}
	export interface getSearchSuggestOptions { 
		"expand"?: Array<string>;
		"profile"?: boolean;
	}
	export interface postSearchOptions { 
		"profile"?: boolean;
	}
	export interface postSearchSuggestOptions { 
		"profile"?: boolean;
	}
}

declare class TelephonyApi {  
  	getTelephonySiptraces(dateStart: string, dateEnd: string, opts?: TelephonyApi.getTelephonySiptracesOptions): Promise<Models.SipSearchResult>; 
  	getTelephonySiptracesDownloadDownloadId(downloadId: string): Promise<Models.SignedUrlResponse>; 
  	postTelephonySiptracesDownload(sIPSearchPublicRequest: Models.SIPSearchPublicRequest): Promise<Models.SipDownloadResponse>;
}

declare namespace TelephonyApi { 
	export interface getTelephonySiptracesOptions { 
		"callId"?: string;
		"toUser"?: string;
		"fromUser"?: string;
		"conversationId"?: string;
	}
}

declare class TelephonyProvidersEdgeApi {  
  	deleteTelephonyProvidersEdge(edgeId: string): Promise<void>; 
  	deleteTelephonyProvidersEdgeLogicalinterface(edgeId: string, interfaceId: string): Promise<void>; 
  	deleteTelephonyProvidersEdgeSoftwareupdate(edgeId: string): Promise<void>; 
  	deleteTelephonyProvidersEdgesCertificateauthority(certificateId: string): Promise<void>; 
  	deleteTelephonyProvidersEdgesDidpool(didPoolId: string): Promise<void>; 
  	deleteTelephonyProvidersEdgesEdgegroup(edgeGroupId: string): Promise<void>; 
  	deleteTelephonyProvidersEdgesExtensionpool(extensionPoolId: string): Promise<void>; 
  	deleteTelephonyProvidersEdgesOutboundroute(outboundRouteId: string): Promise<void>; 
  	deleteTelephonyProvidersEdgesPhone(phoneId: string): Promise<void>; 
  	deleteTelephonyProvidersEdgesPhonebasesetting(phoneBaseId: string): Promise<void>; 
  	deleteTelephonyProvidersEdgesSite(siteId: string): Promise<void>; 
  	deleteTelephonyProvidersEdgesSiteOutboundroute(siteId: string, outboundRouteId: string): Promise<void>; 
  	deleteTelephonyProvidersEdgesTrunkbasesetting(trunkBaseSettingsId: string): Promise<void>; 
  	getConfigurationSchemasEdgesVnext(opts?: TelephonyProvidersEdgeApi.getConfigurationSchemasEdgesVnextOptions): Promise<Models.SchemaCategoryEntityListing>; 
  	getConfigurationSchemasEdgesVnextSchemaCategory(schemaCategory: string, opts?: TelephonyProvidersEdgeApi.getConfigurationSchemasEdgesVnextSchemaCategoryOptions): Promise<Models.SchemaReferenceEntityListing>; 
  	getConfigurationSchemasEdgesVnextSchemaCategorySchemaType(schemaCategory: string, schemaType: string, opts?: TelephonyProvidersEdgeApi.getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeOptions): Promise<Models.SchemaReferenceEntityListing>; 
  	getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaId(schemaCategory: string, schemaType: string, schemaId: string): Promise<Models.Organization>; 
  	getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId(schemaCategory: string, schemaType: string, schemaId: string, extensionType: string, metadataId: string, opts?: TelephonyProvidersEdgeApi.getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataIdOptions): Promise<Models.Organization>; 
  	getTelephonyProvidersEdge(edgeId: string, opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgeOptions): Promise<Models.Edge>; 
  	getTelephonyProvidersEdgeDiagnosticNslookup(edgeId: string): Promise<Models.EdgeNetworkDiagnosticResponse>; 
  	getTelephonyProvidersEdgeDiagnosticPing(edgeId: string): Promise<Models.EdgeNetworkDiagnosticResponse>; 
  	getTelephonyProvidersEdgeDiagnosticRoute(edgeId: string): Promise<Models.EdgeNetworkDiagnosticResponse>; 
  	getTelephonyProvidersEdgeDiagnosticTracepath(edgeId: string): Promise<Models.EdgeNetworkDiagnosticResponse>; 
  	getTelephonyProvidersEdgeLine(edgeId: string, lineId: string): Promise<Models.EdgeLine>; 
  	getTelephonyProvidersEdgeLines(edgeId: string, opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgeLinesOptions): Promise<Models.EdgeLineEntityListing>; 
  	getTelephonyProvidersEdgeLogicalinterface(edgeId: string, interfaceId: string, opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgeLogicalinterfaceOptions): Promise<Models.DomainLogicalInterface>; 
  	getTelephonyProvidersEdgeLogicalinterfaces(edgeId: string, opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgeLogicalinterfacesOptions): Promise<Models.LogicalInterfaceEntityListing>; 
  	getTelephonyProvidersEdgeLogsJob(edgeId: string, jobId: string): Promise<Models.EdgeLogsJob>; 
  	getTelephonyProvidersEdgeMetrics(edgeId: string): Promise<Models.EdgeMetrics>; 
  	getTelephonyProvidersEdgePhysicalinterface(edgeId: string, interfaceId: string): Promise<Models.DomainPhysicalInterface>; 
  	getTelephonyProvidersEdgePhysicalinterfaces(edgeId: string): Promise<Models.PhysicalInterfaceEntityListing>; 
  	getTelephonyProvidersEdgeSetuppackage(edgeId: string): Promise<Models.VmPairingInfo>; 
  	getTelephonyProvidersEdgeSoftwareupdate(edgeId: string): Promise<Models.DomainEdgeSoftwareUpdateDto>; 
  	getTelephonyProvidersEdgeSoftwareversions(edgeId: string): Promise<Models.DomainEdgeSoftwareVersionDtoEntityListing>; 
  	getTelephonyProvidersEdgeTrunks(edgeId: string, opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgeTrunksOptions): Promise<Models.TrunkEntityListing>; 
  	getTelephonyProvidersEdges(opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesOptions): Promise<Models.EdgeEntityListing>; 
  	getTelephonyProvidersEdgesAvailablelanguages(): Promise<Models.AvailableLanguageList>; 
  	getTelephonyProvidersEdgesCertificateauthorities(): Promise<Models.CertificateAuthorityEntityListing>; 
  	getTelephonyProvidersEdgesCertificateauthority(certificateId: string): Promise<Models.DomainCertificateAuthority>; 
  	getTelephonyProvidersEdgesDid(didId: string): Promise<Models.DID>; 
  	getTelephonyProvidersEdgesDidpool(didPoolId: string): Promise<Models.DIDPool>; 
  	getTelephonyProvidersEdgesDidpools(opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesDidpoolsOptions): Promise<Models.DIDPoolEntityListing>; 
  	getTelephonyProvidersEdgesDids(opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesDidsOptions): Promise<Models.DIDEntityListing>; 
  	getTelephonyProvidersEdgesEdgegroup(edgeGroupId: string, opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesEdgegroupOptions): Promise<Models.EdgeGroup>; 
  	getTelephonyProvidersEdgesEdgegroupEdgetrunkbase(edgegroupId: string, edgetrunkbaseId: string): Promise<Models.EdgeTrunkBase>; 
  	getTelephonyProvidersEdgesEdgegroups(opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesEdgegroupsOptions): Promise<Models.EdgeGroupEntityListing>; 
  	getTelephonyProvidersEdgesEdgeversionreport(): Promise<Models.EdgeVersionReport>; 
  	getTelephonyProvidersEdgesExtension(extensionId: string): Promise<Models.Extension>; 
  	getTelephonyProvidersEdgesExtensionpool(extensionPoolId: string): Promise<Models.ExtensionPool>; 
  	getTelephonyProvidersEdgesExtensionpools(opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesExtensionpoolsOptions): Promise<Models.ExtensionPoolEntityListing>; 
  	getTelephonyProvidersEdgesExtensions(opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesExtensionsOptions): Promise<Models.ExtensionEntityListing>; 
  	getTelephonyProvidersEdgesLine(lineId: string): Promise<Models.Line>; 
  	getTelephonyProvidersEdgesLinebasesetting(lineBaseId: string): Promise<Models.LineBase>; 
  	getTelephonyProvidersEdgesLinebasesettings(opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesLinebasesettingsOptions): Promise<Models.LineBaseEntityListing>; 
  	getTelephonyProvidersEdgesLines(opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesLinesOptions): Promise<Models.LineEntityListing>; 
  	getTelephonyProvidersEdgesLinesTemplate(lineBaseSettingsId: string): Promise<Models.Line>; 
  	getTelephonyProvidersEdgesLogicalinterfaces(edgeIds: string, opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesLogicalinterfacesOptions): Promise<Models.LogicalInterfaceEntityListing>; 
  	getTelephonyProvidersEdgesMetrics(edgeIds: string): Promise<Array<Models.EdgeMetrics>>; 
  	getTelephonyProvidersEdgesOutboundroute(outboundRouteId: string): Promise<Models.OutboundRoute>; 
  	getTelephonyProvidersEdgesOutboundroutes(opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesOutboundroutesOptions): Promise<Models.OutboundRouteEntityListing>; 
  	getTelephonyProvidersEdgesPhone(phoneId: string): Promise<Models.Phone>; 
  	getTelephonyProvidersEdgesPhonebasesetting(phoneBaseId: string): Promise<Models.PhoneBase>; 
  	getTelephonyProvidersEdgesPhonebasesettings(opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesPhonebasesettingsOptions): Promise<Models.PhoneBaseEntityListing>; 
  	getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases(opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabasesOptions): Promise<Models.PhoneMetaBaseEntityListing>; 
  	getTelephonyProvidersEdgesPhonebasesettingsTemplate(phoneMetabaseId: string): Promise<Models.PhoneBase>; 
  	getTelephonyProvidersEdgesPhones(opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesPhonesOptions): Promise<Models.PhoneEntityListing>; 
  	getTelephonyProvidersEdgesPhonesTemplate(phoneBaseSettingsId: string): Promise<Models.Phone>; 
  	getTelephonyProvidersEdgesPhysicalinterfaces(edgeIds: string): Promise<Models.PhysicalInterfaceEntityListing>; 
  	getTelephonyProvidersEdgesSite(siteId: string): Promise<Models.Site>; 
  	getTelephonyProvidersEdgesSiteNumberplan(siteId: string, numberPlanId: string): Promise<Models.NumberPlan>; 
  	getTelephonyProvidersEdgesSiteNumberplans(siteId: string): Promise<Array<Models.NumberPlan>>; 
  	getTelephonyProvidersEdgesSiteNumberplansClassifications(siteId: string, opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesSiteNumberplansClassificationsOptions): Promise<Array<string>>; 
  	getTelephonyProvidersEdgesSiteOutboundroute(siteId: string, outboundRouteId: string): Promise<Models.OutboundRouteBase>; 
  	getTelephonyProvidersEdgesSiteOutboundroutes(siteId: string, opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesSiteOutboundroutesOptions): Promise<Models.OutboundRouteBaseEntityListing>; 
  	getTelephonyProvidersEdgesSites(opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesSitesOptions): Promise<Models.SiteEntityListing>; 
  	getTelephonyProvidersEdgesTimezones(opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesTimezonesOptions): Promise<Models.TimeZoneEntityListing>; 
  	getTelephonyProvidersEdgesTrunk(trunkId: string): Promise<Models.Trunk>; 
  	getTelephonyProvidersEdgesTrunkMetrics(trunkId: string): Promise<Models.TrunkMetrics>; 
  	getTelephonyProvidersEdgesTrunkbasesetting(trunkBaseSettingsId: string, opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesTrunkbasesettingOptions): Promise<Models.TrunkBase>; 
  	getTelephonyProvidersEdgesTrunkbasesettings(opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesTrunkbasesettingsOptions): Promise<Models.TrunkBaseEntityListing>; 
  	getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases(opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabasesOptions): Promise<Models.TrunkMetabaseEntityListing>; 
  	getTelephonyProvidersEdgesTrunkbasesettingsTemplate(trunkMetabaseId: string): Promise<Models.TrunkBase>; 
  	getTelephonyProvidersEdgesTrunks(opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesTrunksOptions): Promise<Models.TrunkEntityListing>; 
  	getTelephonyProvidersEdgesTrunksMetrics(trunkIds: string): Promise<Array<Models.TrunkMetrics>>; 
  	getTelephonyProvidersEdgesTrunkswithrecording(opts?: TelephonyProvidersEdgeApi.getTelephonyProvidersEdgesTrunkswithrecordingOptions): Promise<Models.TrunkRecordingEnabledCount>; 
  	postTelephonyProvidersEdgeDiagnosticNslookup(edgeId: string, body: Models.EdgeNetworkDiagnosticRequest): Promise<Models.EdgeNetworkDiagnostic>; 
  	postTelephonyProvidersEdgeDiagnosticPing(edgeId: string, body: Models.EdgeNetworkDiagnosticRequest): Promise<Models.EdgeNetworkDiagnostic>; 
  	postTelephonyProvidersEdgeDiagnosticRoute(edgeId: string, body: Models.EdgeNetworkDiagnosticRequest): Promise<Models.EdgeNetworkDiagnostic>; 
  	postTelephonyProvidersEdgeDiagnosticTracepath(edgeId: string, body: Models.EdgeNetworkDiagnosticRequest): Promise<Models.EdgeNetworkDiagnostic>; 
  	postTelephonyProvidersEdgeLogicalinterfaces(edgeId: string, body: Models.DomainLogicalInterface): Promise<Models.DomainLogicalInterface>; 
  	postTelephonyProvidersEdgeLogsJobUpload(edgeId: string, jobId: string, body: Models.EdgeLogsJobUploadRequest): Promise<void>; 
  	postTelephonyProvidersEdgeLogsJobs(edgeId: string, body: Models.EdgeLogsJobRequest): Promise<Models.EdgeLogsJobResponse>; 
  	postTelephonyProvidersEdgeReboot(edgeId: string, opts?: TelephonyProvidersEdgeApi.postTelephonyProvidersEdgeRebootOptions): Promise<string>; 
  	postTelephonyProvidersEdgeSoftwareupdate(edgeId: string, body: Models.DomainEdgeSoftwareUpdateDto): Promise<Models.DomainEdgeSoftwareUpdateDto>; 
  	postTelephonyProvidersEdgeStatuscode(edgeId: string, opts?: TelephonyProvidersEdgeApi.postTelephonyProvidersEdgeStatuscodeOptions): Promise<string>; 
  	postTelephonyProvidersEdgeUnpair(edgeId: string): Promise<string>; 
  	postTelephonyProvidersEdges(body: Models.Edge): Promise<Models.Edge>; 
  	postTelephonyProvidersEdgesAddressvalidation(body: Models.ValidateAddressRequest): Promise<Models.ValidateAddressResponse>; 
  	postTelephonyProvidersEdgesCertificateauthorities(body: Models.DomainCertificateAuthority): Promise<Models.DomainCertificateAuthority>; 
  	postTelephonyProvidersEdgesDidpools(body: Models.DIDPool): Promise<Models.DIDPool>; 
  	postTelephonyProvidersEdgesEdgegroups(body: Models.EdgeGroup): Promise<Models.EdgeGroup>; 
  	postTelephonyProvidersEdgesExtensionpools(body: Models.ExtensionPool): Promise<Models.ExtensionPool>; 
  	postTelephonyProvidersEdgesOutboundroutes(body: Models.OutboundRoute): Promise<Models.OutboundRoute>; 
  	postTelephonyProvidersEdgesPhoneReboot(phoneId: string): Promise<void>; 
  	postTelephonyProvidersEdgesPhonebasesettings(body: Models.PhoneBase): Promise<Models.PhoneBase>; 
  	postTelephonyProvidersEdgesPhones(body: Models.Phone): Promise<Models.Phone>; 
  	postTelephonyProvidersEdgesPhonesReboot(body: Models.PhonesReboot): Promise<void>; 
  	postTelephonyProvidersEdgesSiteOutboundroutes(siteId: string, body: Models.OutboundRouteBase): Promise<Models.OutboundRouteBase>; 
  	postTelephonyProvidersEdgesSiteRebalance(siteId: string): Promise<void>; 
  	postTelephonyProvidersEdgesSites(body: Models.Site): Promise<Models.Site>; 
  	postTelephonyProvidersEdgesTrunkbasesettings(body: Models.TrunkBase): Promise<Models.TrunkBase>; 
  	putTelephonyProvidersEdge(edgeId: string, body: Models.Edge): Promise<Models.Edge>; 
  	putTelephonyProvidersEdgeLine(edgeId: string, lineId: string, body: Models.EdgeLine): Promise<Models.EdgeLine>; 
  	putTelephonyProvidersEdgeLogicalinterface(edgeId: string, interfaceId: string, body: Models.DomainLogicalInterface): Promise<Models.DomainLogicalInterface>; 
  	putTelephonyProvidersEdgesCertificateauthority(certificateId: string, body: Models.DomainCertificateAuthority): Promise<Models.DomainCertificateAuthority>; 
  	putTelephonyProvidersEdgesDid(didId: string, body: Models.DID): Promise<Models.DID>; 
  	putTelephonyProvidersEdgesDidpool(didPoolId: string, body: Models.DIDPool): Promise<Models.DIDPool>; 
  	putTelephonyProvidersEdgesEdgegroup(edgeGroupId: string, body: Models.EdgeGroup): Promise<Models.EdgeGroup>; 
  	putTelephonyProvidersEdgesEdgegroupEdgetrunkbase(edgegroupId: string, edgetrunkbaseId: string, body: Models.EdgeTrunkBase): Promise<Models.EdgeTrunkBase>; 
  	putTelephonyProvidersEdgesExtension(extensionId: string, body: Models.Extension): Promise<Models.Extension>; 
  	putTelephonyProvidersEdgesExtensionpool(extensionPoolId: string, body: Models.ExtensionPool): Promise<Models.ExtensionPool>; 
  	putTelephonyProvidersEdgesOutboundroute(outboundRouteId: string, body: Models.OutboundRoute): Promise<Models.OutboundRoute>; 
  	putTelephonyProvidersEdgesPhone(phoneId: string, body: Models.Phone): Promise<Models.Phone>; 
  	putTelephonyProvidersEdgesPhonebasesetting(phoneBaseId: string, body: Models.PhoneBase): Promise<Models.PhoneBase>; 
  	putTelephonyProvidersEdgesSite(siteId: string, body: Models.Site): Promise<Models.Site>; 
  	putTelephonyProvidersEdgesSiteNumberplans(siteId: string, body: Array<Models.NumberPlan>): Promise<Array<Models.NumberPlan>>; 
  	putTelephonyProvidersEdgesSiteOutboundroute(siteId: string, outboundRouteId: string, body: Models.OutboundRouteBase): Promise<Models.OutboundRouteBase>; 
  	putTelephonyProvidersEdgesTrunkbasesetting(trunkBaseSettingsId: string, body: Models.TrunkBase): Promise<Models.TrunkBase>;
}

declare namespace TelephonyProvidersEdgeApi { 
	export interface getConfigurationSchemasEdgesVnextOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getConfigurationSchemasEdgesVnextSchemaCategoryOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataIdOptions { 
		"type"?: string;
	}
	export interface getTelephonyProvidersEdgeOptions { 
		"expand"?: Array<string>;
	}
	export interface getTelephonyProvidersEdgeLinesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getTelephonyProvidersEdgeLogicalinterfaceOptions { 
		"expand"?: Array<string>;
	}
	export interface getTelephonyProvidersEdgeLogicalinterfacesOptions { 
		"expand"?: Array<string>;
	}
	export interface getTelephonyProvidersEdgeTrunksOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
		"trunkBaseId"?: string;
		"trunkType"?: string;
	}
	export interface getTelephonyProvidersEdgesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"name"?: string;
		"siteId"?: string;
		"edgeGroupId"?: string;
		"sortBy"?: string;
		"managed"?: boolean;
	}
	export interface getTelephonyProvidersEdgesDidpoolsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
	}
	export interface getTelephonyProvidersEdgesDidsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
		"phoneNumber"?: string;
		"ownerId"?: string;
		"didPoolId"?: string;
	}
	export interface getTelephonyProvidersEdgesEdgegroupOptions { 
		"expand"?: Array<string>;
	}
	export interface getTelephonyProvidersEdgesEdgegroupsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"name"?: string;
		"sortBy"?: string;
		"managed"?: boolean;
	}
	export interface getTelephonyProvidersEdgesExtensionpoolsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"_number"?: string;
	}
	export interface getTelephonyProvidersEdgesExtensionsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
		"_number"?: string;
	}
	export interface getTelephonyProvidersEdgesLinebasesettingsOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
	}
	export interface getTelephonyProvidersEdgesLinesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"name"?: string;
		"sortBy"?: string;
		"expand"?: Array<string>;
	}
	export interface getTelephonyProvidersEdgesLogicalinterfacesOptions { 
		"expand"?: Array<string>;
	}
	export interface getTelephonyProvidersEdgesOutboundroutesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"name"?: string;
		"siteId"?: string;
		"externalTrunkBasesIds"?: string;
		"sortBy"?: string;
	}
	export interface getTelephonyProvidersEdgesPhonebasesettingsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
		"expand"?: Array<string>;
		"name"?: string;
	}
	export interface getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabasesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getTelephonyProvidersEdgesPhonesOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
		"siteId"?: string;
		"webRtcUserId"?: string;
		"phoneBaseSettingsId"?: string;
		"linesLoggedInUserId"?: string;
		"linesDefaultForUserId"?: string;
		"phoneHardwareId"?: string;
		"linesId"?: string;
		"linesName"?: string;
		"name"?: string;
		"expand"?: Array<string>;
		"fields"?: Array<string>;
	}
	export interface getTelephonyProvidersEdgesSiteNumberplansClassificationsOptions { 
		"classification"?: string;
	}
	export interface getTelephonyProvidersEdgesSiteOutboundroutesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"name"?: string;
		"externalTrunkBasesIds"?: string;
		"sortBy"?: string;
	}
	export interface getTelephonyProvidersEdgesSitesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
		"name"?: string;
		"locationId"?: string;
		"managed"?: boolean;
	}
	export interface getTelephonyProvidersEdgesTimezonesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getTelephonyProvidersEdgesTrunkbasesettingOptions { 
		"ignoreHidden"?: boolean;
	}
	export interface getTelephonyProvidersEdgesTrunkbasesettingsOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
		"recordingEnabled"?: boolean;
		"ignoreHidden"?: boolean;
		"managed"?: boolean;
		"expand"?: Array<string>;
		"name"?: string;
	}
	export interface getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabasesOptions { 
		"type"?: string;
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getTelephonyProvidersEdgesTrunksOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"sortBy"?: string;
		"sortOrder"?: string;
		"edgeId"?: string;
		"trunkBaseId"?: string;
		"trunkType"?: string;
	}
	export interface getTelephonyProvidersEdgesTrunkswithrecordingOptions { 
		"trunkType"?: string;
	}
	export interface postTelephonyProvidersEdgeRebootOptions { 
		"body"?: Models.EdgeRebootParameters;
	}
	export interface postTelephonyProvidersEdgeStatuscodeOptions { 
		"body"?: Models.EdgeServiceStateRequest;
	}
}

declare class TokensApi {  
  	deleteToken(userId: string): Promise<void>; 
  	deleteTokensMe(): Promise<void>; 
  	getTokensMe(): Promise<Models.TokenInfo>;
}

declare namespace TokensApi { 
}

declare class UserRecordingsApi {  
  	deleteUserrecording(recordingId: string): Promise<void>; 
  	getUserrecording(recordingId: string, opts?: UserRecordingsApi.getUserrecordingOptions): Promise<Models.UserRecording>; 
  	getUserrecordingMedia(recordingId: string, opts?: UserRecordingsApi.getUserrecordingMediaOptions): Promise<Models.DownloadResponse>; 
  	getUserrecordings(opts?: UserRecordingsApi.getUserrecordingsOptions): Promise<Models.UserRecordingEntityListing>; 
  	getUserrecordingsSummary(): Promise<Models.FaxSummary>; 
  	putUserrecording(recordingId: string, body: Models.UserRecording, opts?: UserRecordingsApi.putUserrecordingOptions): Promise<Models.UserRecording>;
}

declare namespace UserRecordingsApi { 
	export interface getUserrecordingOptions { 
		"expand"?: Array<string>;
	}
	export interface getUserrecordingMediaOptions { 
		"formatId"?: string;
	}
	export interface getUserrecordingsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"expand"?: Array<string>;
	}
	export interface putUserrecordingOptions { 
		"expand"?: Array<string>;
	}
}

declare class UsersApi {  
  	deleteAnalyticsUsersDetailsJob(jobId: string): Promise<void>; 
  	deleteAuthorizationSubjectDivisionRole(subjectId: string, divisionId: string, roleId: string): Promise<void>; 
  	deleteRoutingUserUtilization(userId: string): Promise<void>; 
  	deleteUser(userId: string): Promise<Models.Empty>; 
  	deleteUserRoutinglanguage(userId: string, languageId: string): Promise<void>; 
  	deleteUserRoutingskill(userId: string, skillId: string): Promise<void>; 
  	deleteUserStationAssociatedstation(userId: string): Promise<void>; 
  	deleteUserStationDefaultstation(userId: string): Promise<void>; 
  	getAnalyticsUsersDetailsJob(jobId: string): Promise<Models.AsyncQueryStatus>; 
  	getAnalyticsUsersDetailsJobResults(jobId: string, opts?: UsersApi.getAnalyticsUsersDetailsJobResultsOptions): Promise<Models.AnalyticsUserDetailsAsyncQueryResponse>; 
  	getAuthorizationDivisionspermittedMe(permission: string, opts?: UsersApi.getAuthorizationDivisionspermittedMeOptions): Promise<Array<Models.AuthzDivision>>; 
  	getAuthorizationDivisionspermittedPagedMe(permission: string, opts?: UsersApi.getAuthorizationDivisionspermittedPagedMeOptions): Promise<Models.DivsPermittedEntityListing>; 
  	getAuthorizationDivisionspermittedPagedSubjectId(subjectId: string, permission: string, opts?: UsersApi.getAuthorizationDivisionspermittedPagedSubjectIdOptions): Promise<Models.DivsPermittedEntityListing>; 
  	getAuthorizationDivisionspermittedSubjectId(subjectId: string, permission: string, opts?: UsersApi.getAuthorizationDivisionspermittedSubjectIdOptions): Promise<Array<Models.AuthzDivision>>; 
  	getAuthorizationSubject(subjectId: string): Promise<Models.AuthzSubject>; 
  	getAuthorizationSubjectsMe(): Promise<Models.AuthzSubject>; 
  	getFieldconfig(type: string): Promise<Models.FieldConfig>; 
  	getProfilesUsers(opts?: UsersApi.getProfilesUsersOptions): Promise<Models.UserProfileEntityListing>; 
  	getRoutingUserUtilization(userId: string): Promise<Models.Utilization>; 
  	getUser(userId: string, opts?: UsersApi.getUserOptions): Promise<Models.User>; 
  	getUserAdjacents(userId: string, opts?: UsersApi.getUserAdjacentsOptions): Promise<Models.Adjacents>; 
  	getUserCallforwarding(userId: string): Promise<Models.CallForwarding>; 
  	getUserDirectreports(userId: string, opts?: UsersApi.getUserDirectreportsOptions): Promise<Array<Models.User>>; 
  	getUserFavorites(userId: string, opts?: UsersApi.getUserFavoritesOptions): Promise<Models.UserEntityListing>; 
  	getUserGeolocation(userId: string, clientId: string): Promise<Models.Geolocation>; 
  	getUserOutofoffice(userId: string): Promise<Models.OutOfOffice>; 
  	getUserProfile(userId: string, opts?: UsersApi.getUserProfileOptions): Promise<Models.UserProfile>; 
  	getUserProfileskills(userId: string): Promise<Array<string>>; 
  	getUserQueues(userId: string, opts?: UsersApi.getUserQueuesOptions): Promise<Models.UserQueueEntityListing>; 
  	getUserRoles(userId: string): Promise<Models.UserAuthorization>; 
  	getUserRoutinglanguages(userId: string, opts?: UsersApi.getUserRoutinglanguagesOptions): Promise<Models.UserLanguageEntityListing>; 
  	getUserRoutingskills(userId: string, opts?: UsersApi.getUserRoutingskillsOptions): Promise<Models.UserSkillEntityListing>; 
  	getUserRoutingstatus(userId: string): Promise<Models.RoutingStatus>; 
  	getUserStation(userId: string): Promise<Models.UserStations>; 
  	getUserSuperiors(userId: string, opts?: UsersApi.getUserSuperiorsOptions): Promise<Array<Models.User>>; 
  	getUserTrustors(userId: string, opts?: UsersApi.getUserTrustorsOptions): Promise<Models.TrustorEntityListing>; 
  	getUsers(opts?: UsersApi.getUsersOptions): Promise<Models.UserEntityListing>; 
  	getUsersMe(opts?: UsersApi.getUsersMeOptions): Promise<Models.UserMe>; 
  	getUsersSearch(q64: string, opts?: UsersApi.getUsersSearchOptions): Promise<Models.UsersSearchResponse>; 
  	patchUser(userId: string, body: Models.UpdateUser): Promise<Models.User>; 
  	patchUserCallforwarding(userId: string, body: Models.CallForwarding): Promise<Models.CallForwarding>; 
  	patchUserGeolocation(userId: string, clientId: string, body: Models.Geolocation): Promise<Models.Geolocation>; 
  	patchUserQueue(queueId: string, userId: string, body: Models.UserQueue): Promise<Models.UserQueue>; 
  	patchUserQueues(userId: string, body: Array<Models.UserQueue>, opts?: UsersApi.patchUserQueuesOptions): Promise<Models.UserQueueEntityListing>; 
  	patchUserRoutinglanguage(userId: string, languageId: string, body: Models.UserRoutingLanguage): Promise<Models.UserRoutingLanguage>; 
  	patchUserRoutinglanguagesBulk(userId: string, body: Array<Models.UserRoutingLanguagePost>): Promise<Models.UserLanguageEntityListing>; 
  	patchUserRoutingskillsBulk(userId: string, body: Array<Models.UserRoutingSkillPost>): Promise<Models.UserSkillEntityListing>; 
  	patchUsersBulk(body: Array<Models.PatchUser>): Promise<Models.UserEntityListing>; 
  	postAnalyticsUsersAggregatesQuery(body: Models.UserAggregationQuery): Promise<Models.UserAggregateQueryResponse>; 
  	postAnalyticsUsersDetailsJobs(body: Models.AsyncUserDetailsQuery): Promise<Models.AsyncQueryResponse>; 
  	postAnalyticsUsersDetailsQuery(body: Models.UserDetailsQuery): Promise<Models.AnalyticsUserDetailsQueryResponse>; 
  	postAnalyticsUsersObservationsQuery(body: Models.UserObservationQuery): Promise<Models.UserObservationQueryResponse>; 
  	postAuthorizationSubjectBulkadd(subjectId: string, body: Models.RoleDivisionGrants, opts?: UsersApi.postAuthorizationSubjectBulkaddOptions): Promise<void>; 
  	postAuthorizationSubjectBulkremove(subjectId: string, body: Models.RoleDivisionGrants): Promise<void>; 
  	postAuthorizationSubjectDivisionRole(subjectId: string, divisionId: string, roleId: string, opts?: UsersApi.postAuthorizationSubjectDivisionRoleOptions): Promise<void>; 
  	postUserInvite(userId: string, opts?: UsersApi.postUserInviteOptions): Promise<void>; 
  	postUserPassword(userId: string, body: Models.ChangePasswordRequest): Promise<void>; 
  	postUserRoutinglanguages(userId: string, body: Models.UserRoutingLanguagePost): Promise<Models.UserRoutingLanguage>; 
  	postUserRoutingskills(userId: string, body: Models.UserRoutingSkillPost): Promise<Models.UserRoutingSkill>; 
  	postUsers(body: Models.CreateUser): Promise<Models.User>; 
  	postUsersMePassword(body: Models.ChangeMyPasswordRequest): Promise<void>; 
  	postUsersSearch(body: Models.UserSearchRequest): Promise<Models.UsersSearchResponse>; 
  	putRoutingUserUtilization(userId: string, body: Models.Utilization): Promise<Models.Utilization>; 
  	putUserCallforwarding(userId: string, body: Models.CallForwarding): Promise<Models.CallForwarding>; 
  	putUserOutofoffice(userId: string, body: Models.OutOfOffice): Promise<Models.OutOfOffice>; 
  	putUserProfileskills(userId: string, body: Array<string>): Promise<Array<string>>; 
  	putUserRoles(userId: string, body: Array<string>): Promise<Models.UserAuthorization>; 
  	putUserRoutingskill(userId: string, skillId: string, body: Models.UserRoutingSkill): Promise<Models.UserRoutingSkill>; 
  	putUserRoutingskillsBulk(userId: string, body: Array<Models.UserRoutingSkillPost>): Promise<Models.UserSkillEntityListing>; 
  	putUserRoutingstatus(userId: string, body: Models.RoutingStatus): Promise<Models.RoutingStatus>; 
  	putUserStationAssociatedstationStationId(userId: string, stationId: string): Promise<void>; 
  	putUserStationDefaultstationStationId(userId: string, stationId: string): Promise<void>;
}

declare namespace UsersApi { 
	export interface getAnalyticsUsersDetailsJobResultsOptions { 
		"cursor"?: string;
		"pageSize"?: number;
	}
	export interface getAuthorizationDivisionspermittedMeOptions { 
		"name"?: string;
	}
	export interface getAuthorizationDivisionspermittedPagedMeOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
	}
	export interface getAuthorizationDivisionspermittedPagedSubjectIdOptions { 
		"pageNumber"?: number;
		"pageSize"?: number;
	}
	export interface getAuthorizationDivisionspermittedSubjectIdOptions { 
		"name"?: string;
	}
	export interface getProfilesUsersOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"id"?: Array<string>;
		"jid"?: Array<string>;
		"sortOrder"?: string;
		"expand"?: Array<string>;
	}
	export interface getUserOptions { 
		"expand"?: Array<string>;
		"state"?: string;
	}
	export interface getUserAdjacentsOptions { 
		"expand"?: Array<string>;
	}
	export interface getUserDirectreportsOptions { 
		"expand"?: Array<string>;
	}
	export interface getUserFavoritesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortOrder"?: string;
		"expand"?: Array<string>;
	}
	export interface getUserProfileOptions { 
		"expand"?: Array<string>;
	}
	export interface getUserQueuesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"joined"?: boolean;
		"divisionId"?: Array<string>;
	}
	export interface getUserRoutinglanguagesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortOrder"?: string;
	}
	export interface getUserRoutingskillsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"sortOrder"?: string;
	}
	export interface getUserSuperiorsOptions { 
		"expand"?: Array<string>;
	}
	export interface getUserTrustorsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getUsersOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"id"?: Array<string>;
		"jabberId"?: Array<string>;
		"sortOrder"?: string;
		"expand"?: Array<string>;
		"state"?: string;
	}
	export interface getUsersMeOptions { 
		"expand"?: Array<string>;
	}
	export interface getUsersSearchOptions { 
		"expand"?: Array<string>;
	}
	export interface patchUserQueuesOptions { 
		"divisionId"?: Array<string>;
	}
	export interface postAuthorizationSubjectBulkaddOptions { 
		"subjectType"?: string;
	}
	export interface postAuthorizationSubjectDivisionRoleOptions { 
		"subjectType"?: string;
	}
	export interface postUserInviteOptions { 
		"force"?: boolean;
	}
}

declare class UtilitiesApi {  
  	getDate(): Promise<Models.ServerDate>; 
  	getIpranges(): Promise<Models.IpAddressRangeListing>; 
  	getTimezones(opts?: UtilitiesApi.getTimezonesOptions): Promise<Models.TimeZoneEntityListing>; 
  	postCertificateDetails(body: Models.Certificate): Promise<Models.ParsedCertificate>;
}

declare namespace UtilitiesApi { 
	export interface getTimezonesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
}

declare class VoicemailApi {  
  	deleteVoicemailMessage(messageId: string): Promise<void>; 
  	deleteVoicemailMessages(): Promise<void>; 
  	getVoicemailGroupMailbox(groupId: string): Promise<Models.VoicemailMailboxInfo>; 
  	getVoicemailGroupMessages(groupId: string, opts?: VoicemailApi.getVoicemailGroupMessagesOptions): Promise<Models.VoicemailMessageEntityListing>; 
  	getVoicemailGroupPolicy(groupId: string): Promise<Models.VoicemailGroupPolicy>; 
  	getVoicemailMailbox(): Promise<Models.VoicemailMailboxInfo>; 
  	getVoicemailMeMailbox(): Promise<Models.VoicemailMailboxInfo>; 
  	getVoicemailMeMessages(opts?: VoicemailApi.getVoicemailMeMessagesOptions): Promise<Models.VoicemailMessageEntityListing>; 
  	getVoicemailMePolicy(): Promise<Models.VoicemailUserPolicy>; 
  	getVoicemailMessage(messageId: string, opts?: VoicemailApi.getVoicemailMessageOptions): Promise<Models.VoicemailMessage>; 
  	getVoicemailMessageMedia(messageId: string, opts?: VoicemailApi.getVoicemailMessageMediaOptions): Promise<Models.VoicemailMediaInfo>; 
  	getVoicemailMessages(opts?: VoicemailApi.getVoicemailMessagesOptions): Promise<Models.VoicemailMessageEntityListing>; 
  	getVoicemailPolicy(): Promise<Models.VoicemailOrganizationPolicy>; 
  	getVoicemailQueueMessages(queueId: string, opts?: VoicemailApi.getVoicemailQueueMessagesOptions): Promise<Models.VoicemailMessageEntityListing>; 
  	getVoicemailSearch(q64: string, opts?: VoicemailApi.getVoicemailSearchOptions): Promise<Models.VoicemailsSearchResponse>; 
  	getVoicemailUserpolicy(userId: string): Promise<Models.VoicemailUserPolicy>; 
  	patchVoicemailGroupPolicy(groupId: string, body: Models.VoicemailGroupPolicy): Promise<Models.VoicemailGroupPolicy>; 
  	patchVoicemailMePolicy(body: Models.VoicemailUserPolicy): Promise<Models.VoicemailUserPolicy>; 
  	patchVoicemailMessage(messageId: string, body: Models.VoicemailMessage): Promise<Models.VoicemailMessage>; 
  	patchVoicemailUserpolicy(userId: string, body: Models.VoicemailUserPolicy): Promise<Models.VoicemailUserPolicy>; 
  	postVoicemailMessages(opts?: VoicemailApi.postVoicemailMessagesOptions): Promise<Models.VoicemailMessage>; 
  	postVoicemailSearch(body: Models.VoicemailSearchRequest): Promise<Models.VoicemailsSearchResponse>; 
  	putVoicemailMessage(messageId: string, body: Models.VoicemailMessage): Promise<Models.VoicemailMessage>; 
  	putVoicemailPolicy(body: Models.VoicemailOrganizationPolicy): Promise<Models.VoicemailOrganizationPolicy>;
}

declare namespace VoicemailApi { 
	export interface getVoicemailGroupMessagesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getVoicemailMeMessagesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getVoicemailMessageOptions { 
		"expand"?: Array<string>;
	}
	export interface getVoicemailMessageMediaOptions { 
		"formatId"?: string;
	}
	export interface getVoicemailMessagesOptions { 
		"ids"?: string;
		"expand"?: Array<string>;
	}
	export interface getVoicemailQueueMessagesOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
	}
	export interface getVoicemailSearchOptions { 
		"expand"?: Array<string>;
	}
	export interface postVoicemailMessagesOptions { 
		"body"?: Models.CopyVoicemailMessage;
	}
}

declare class WebChatApi {  
  	deleteWebchatDeployment(deploymentId: string): Promise<void>; 
  	deleteWebchatGuestConversationMember(conversationId: string, memberId: string): Promise<void>; 
  	deleteWebchatSettings(): Promise<void>; 
  	getWebchatDeployment(deploymentId: string): Promise<Models.WebChatDeployment>; 
  	getWebchatDeployments(): Promise<Models.WebChatDeploymentEntityListing>; 
  	getWebchatGuestConversationMediarequest(conversationId: string, mediaRequestId: string): Promise<Models.WebChatGuestMediaRequest>; 
  	getWebchatGuestConversationMediarequests(conversationId: string): Promise<Models.WebChatGuestMediaRequestEntityList>; 
  	getWebchatGuestConversationMember(conversationId: string, memberId: string): Promise<Models.WebChatMemberInfo>; 
  	getWebchatGuestConversationMembers(conversationId: string, opts?: WebChatApi.getWebchatGuestConversationMembersOptions): Promise<Models.WebChatMemberInfoEntityList>; 
  	getWebchatGuestConversationMessage(conversationId: string, messageId: string): Promise<Models.WebChatMessage>; 
  	getWebchatGuestConversationMessages(conversationId: string, opts?: WebChatApi.getWebchatGuestConversationMessagesOptions): Promise<Models.WebChatMessageEntityList>; 
  	getWebchatSettings(): Promise<Models.WebChatSettings>; 
  	patchWebchatGuestConversationMediarequest(conversationId: string, mediaRequestId: string, body: Models.WebChatGuestMediaRequest): Promise<Models.WebChatGuestMediaRequest>; 
  	postWebchatDeployments(body: Models.WebChatDeployment): Promise<Models.WebChatDeployment>; 
  	postWebchatGuestConversationMemberMessages(conversationId: string, memberId: string, body: Models.CreateWebChatMessageRequest): Promise<Models.WebChatMessage>; 
  	postWebchatGuestConversationMemberTyping(conversationId: string, memberId: string): Promise<Models.WebChatTyping>; 
  	postWebchatGuestConversations(body: Models.CreateWebChatConversationRequest): Promise<Models.CreateWebChatConversationResponse>; 
  	putWebchatDeployment(deploymentId: string, body: Models.WebChatDeployment): Promise<Models.WebChatDeployment>; 
  	putWebchatSettings(body: Models.WebChatSettings): Promise<Models.WebChatSettings>;
}

declare namespace WebChatApi { 
	export interface getWebchatGuestConversationMembersOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"excludeDisconnectedMembers"?: boolean;
	}
	export interface getWebchatGuestConversationMessagesOptions { 
		"after"?: string;
		"before"?: string;
		"sortOrder"?: string;
		"maxResults"?: number;
	}
}

declare class WidgetsApi {  
  	deleteWidgetsDeployment(deploymentId: string): Promise<void>; 
  	getWidgetsDeployment(deploymentId: string): Promise<Models.WidgetDeployment>; 
  	getWidgetsDeployments(): Promise<Models.WidgetDeploymentEntityListing>; 
  	postWidgetsDeployments(body: Models.WidgetDeployment): Promise<Models.WidgetDeployment>; 
  	putWidgetsDeployment(deploymentId: string, body: Models.WidgetDeployment): Promise<Models.WidgetDeployment>;
}

declare namespace WidgetsApi { 
}

declare class WorkforceManagementApi {  
  	deleteWorkforcemanagementManagementunit(muId: string): Promise<void>; 
  	deleteWorkforcemanagementManagementunitActivitycode(muId: string, acId: string): Promise<void>; 
  	deleteWorkforcemanagementManagementunitSchedulingRun(managementUnitId: string, runId: string): Promise<void>; 
  	deleteWorkforcemanagementManagementunitServicegoalgroup(managementUnitId: string, serviceGoalGroupId: string): Promise<void>; 
  	deleteWorkforcemanagementManagementunitWeekSchedule(managementUnitId: string, weekId: string, scheduleId: string): Promise<void>; 
  	deleteWorkforcemanagementManagementunitWeekShorttermforecast(managementUnitId: string, weekDateId: string, forecastId: string): Promise<void>; 
  	deleteWorkforcemanagementManagementunitWorkplan(managementUnitId: string, workPlanId: string): Promise<void>; 
  	getWorkforcemanagementAdherence(userId: Array<string>): Promise<Array<Models.UserScheduleAdherence>>; 
  	getWorkforcemanagementAdhocmodelingjob(jobId: string): Promise<Models.ModelingStatusResponse>; 
  	getWorkforcemanagementManagementunit(muId: string, opts?: WorkforceManagementApi.getWorkforcemanagementManagementunitOptions): Promise<Models.ManagementUnit>; 
  	getWorkforcemanagementManagementunitActivitycode(muId: string, acId: string): Promise<Models.ActivityCode>; 
  	getWorkforcemanagementManagementunitActivitycodes(muId: string): Promise<Models.ActivityCodeContainer>; 
  	getWorkforcemanagementManagementunitAgent(managementUnitId: string, agentId: string): Promise<Models.WfmAgent>; 
  	getWorkforcemanagementManagementunitIntradayQueues(muId: string, _date: string): Promise<Models.WfmIntradayQueueListing>; 
  	getWorkforcemanagementManagementunitSchedulingRun(managementUnitId: string, runId: string): Promise<Models.SchedulingRunResponse>; 
  	getWorkforcemanagementManagementunitSchedulingRunResult(managementUnitId: string, runId: string): Promise<Models.RescheduleResult>; 
  	getWorkforcemanagementManagementunitSchedulingRuns(managementUnitId: string): Promise<Models.SchedulingRunListResponse>; 
  	getWorkforcemanagementManagementunitServicegoalgroup(managementUnitId: string, serviceGoalGroupId: string): Promise<Models.ServiceGoalGroup>; 
  	getWorkforcemanagementManagementunitServicegoalgroups(managementUnitId: string): Promise<Models.ServiceGoalGroupList>; 
  	getWorkforcemanagementManagementunitSettings(muId: string): Promise<Models.ManagementUnitSettingsResponse>; 
  	getWorkforcemanagementManagementunitShifttradesMatched(muId: string): Promise<Models.ShiftTradeMatchesSummaryResponse>; 
  	getWorkforcemanagementManagementunitShifttradesUsers(muId: string): Promise<Models.WfmUserEntityListing>; 
  	getWorkforcemanagementManagementunitUserTimeoffrequest(muId: string, userId: string, timeOffRequestId: string): Promise<Models.TimeOffRequestResponse>; 
  	getWorkforcemanagementManagementunitUserTimeoffrequests(muId: string, userId: string, opts?: WorkforceManagementApi.getWorkforcemanagementManagementunitUserTimeoffrequestsOptions): Promise<Models.TimeOffRequestList>; 
  	getWorkforcemanagementManagementunitUsers(muId: string): Promise<Models.WfmUserEntityListing>; 
  	getWorkforcemanagementManagementunitWeekSchedule(managementUnitId: string, weekId: string, scheduleId: string, opts?: WorkforceManagementApi.getWorkforcemanagementManagementunitWeekScheduleOptions): Promise<Models.WeekScheduleResponse>; 
  	getWorkforcemanagementManagementunitWeekScheduleGenerationresults(managementUnitId: string, weekId: string, scheduleId: string): Promise<Models.WeekScheduleGenerationResult>; 
  	getWorkforcemanagementManagementunitWeekSchedules(managementUnitId: string, weekId: string, opts?: WorkforceManagementApi.getWorkforcemanagementManagementunitWeekSchedulesOptions): Promise<Models.WeekScheduleListResponse>; 
  	getWorkforcemanagementManagementunitWeekShorttermforecastFinal(managementUnitId: string, weekDateId: string, forecastId: string, opts?: WorkforceManagementApi.getWorkforcemanagementManagementunitWeekShorttermforecastFinalOptions): Promise<Models.ForecastResultResponse>; 
  	getWorkforcemanagementManagementunitWeekShorttermforecasts(managementUnitId: string, weekDateId: string): Promise<Models.ShortTermForecastListResponse>; 
  	getWorkforcemanagementManagementunitWorkplan(managementUnitId: string, workPlanId: string): Promise<Models.WorkPlan>; 
  	getWorkforcemanagementManagementunitWorkplans(managementUnitId: string, opts?: WorkforceManagementApi.getWorkforcemanagementManagementunitWorkplansOptions): Promise<Models.WorkPlanListResponse>; 
  	getWorkforcemanagementManagementunits(opts?: WorkforceManagementApi.getWorkforcemanagementManagementunitsOptions): Promise<Models.ManagementUnitListing>; 
  	getWorkforcemanagementManagementunitsDivisionviews(opts?: WorkforceManagementApi.getWorkforcemanagementManagementunitsDivisionviewsOptions): Promise<Models.ManagementUnitListing>; 
  	getWorkforcemanagementNotifications(): Promise<Models.NotificationsResponse>; 
  	getWorkforcemanagementSchedulingjob(jobId: string): Promise<Models.SchedulingStatusResponse>; 
  	getWorkforcemanagementShifttrades(): Promise<Models.ShiftTradeListResponse>; 
  	getWorkforcemanagementTimeoffrequest(timeOffRequestId: string): Promise<Models.TimeOffRequestResponse>; 
  	getWorkforcemanagementTimeoffrequests(opts?: WorkforceManagementApi.getWorkforcemanagementTimeoffrequestsOptions): Promise<Models.TimeOffRequestList>; 
  	patchWorkforcemanagementManagementunit(muId: string, opts?: WorkforceManagementApi.patchWorkforcemanagementManagementunitOptions): Promise<Models.ManagementUnit>; 
  	patchWorkforcemanagementManagementunitActivitycode(muId: string, acId: string, opts?: WorkforceManagementApi.patchWorkforcemanagementManagementunitActivitycodeOptions): Promise<Models.ActivityCode>; 
  	patchWorkforcemanagementManagementunitSchedulingRun(managementUnitId: string, runId: string, opts?: WorkforceManagementApi.patchWorkforcemanagementManagementunitSchedulingRunOptions): Promise<Models.RescheduleResult>; 
  	patchWorkforcemanagementManagementunitServicegoalgroup(managementUnitId: string, serviceGoalGroupId: string, opts?: WorkforceManagementApi.patchWorkforcemanagementManagementunitServicegoalgroupOptions): Promise<Models.ServiceGoalGroup>; 
  	patchWorkforcemanagementManagementunitSettings(muId: string, opts?: WorkforceManagementApi.patchWorkforcemanagementManagementunitSettingsOptions): Promise<Models.ManagementUnitSettingsResponse>; 
  	patchWorkforcemanagementManagementunitUserTimeoffrequest(muId: string, userId: string, timeOffRequestId: string, opts?: WorkforceManagementApi.patchWorkforcemanagementManagementunitUserTimeoffrequestOptions): Promise<Models.TimeOffRequestResponse>; 
  	patchWorkforcemanagementManagementunitWeekSchedule(managementUnitId: string, weekId: string, scheduleId: string, opts?: WorkforceManagementApi.patchWorkforcemanagementManagementunitWeekScheduleOptions): Promise<Models.AsyncWeekScheduleResponse>; 
  	patchWorkforcemanagementManagementunitWorkplan(managementUnitId: string, workPlanId: string, opts?: WorkforceManagementApi.patchWorkforcemanagementManagementunitWorkplanOptions): Promise<Models.WorkPlan>; 
  	patchWorkforcemanagementTimeoffrequest(timeOffRequestId: string, opts?: WorkforceManagementApi.patchWorkforcemanagementTimeoffrequestOptions): Promise<Models.TimeOffRequestResponse>; 
  	postWorkforcemanagementAdherenceHistorical(opts?: WorkforceManagementApi.postWorkforcemanagementAdherenceHistoricalOptions): Promise<Models.WfmHistoricalAdherenceResponse>; 
  	postWorkforcemanagementManagementunitActivitycodes(muId: string, opts?: WorkforceManagementApi.postWorkforcemanagementManagementunitActivitycodesOptions): Promise<Models.ActivityCode>; 
  	postWorkforcemanagementManagementunitAgentschedulesSearch(muId: string, opts?: WorkforceManagementApi.postWorkforcemanagementManagementunitAgentschedulesSearchOptions): Promise<Models.BuAsyncAgentSchedulesSearchResponse>; 
  	postWorkforcemanagementManagementunitHistoricaladherencequery(muId: string, opts?: WorkforceManagementApi.postWorkforcemanagementManagementunitHistoricaladherencequeryOptions): Promise<Models.WfmHistoricalAdherenceResponse>; 
  	postWorkforcemanagementManagementunitIntraday(muId: string, opts?: WorkforceManagementApi.postWorkforcemanagementManagementunitIntradayOptions): Promise<Models.IntradayResponse>; 
  	postWorkforcemanagementManagementunitMove(muId: string, opts?: WorkforceManagementApi.postWorkforcemanagementManagementunitMoveOptions): Promise<Models.MoveManagementUnitResponse>; 
  	postWorkforcemanagementManagementunitSchedulesSearch(muId: string, opts?: WorkforceManagementApi.postWorkforcemanagementManagementunitSchedulesSearchOptions): Promise<Models.UserScheduleContainer>; 
  	postWorkforcemanagementManagementunitServicegoalgroups(managementUnitId: string, opts?: WorkforceManagementApi.postWorkforcemanagementManagementunitServicegoalgroupsOptions): Promise<Models.ServiceGoalGroup>; 
  	postWorkforcemanagementManagementunitTimeoffrequests(muId: string, opts?: WorkforceManagementApi.postWorkforcemanagementManagementunitTimeoffrequestsOptions): Promise<Models.TimeOffRequestList>; 
  	postWorkforcemanagementManagementunitTimeoffrequestsFetchdetails(muId: string, opts?: WorkforceManagementApi.postWorkforcemanagementManagementunitTimeoffrequestsFetchdetailsOptions): Promise<Models.TimeOffRequestEntityList>; 
  	postWorkforcemanagementManagementunitTimeoffrequestsQuery(muId: string, opts?: WorkforceManagementApi.postWorkforcemanagementManagementunitTimeoffrequestsQueryOptions): Promise<Models.TimeOffRequestLookupList>; 
  	postWorkforcemanagementManagementunitWeekScheduleCopy(managementUnitId: string, weekId: string, scheduleId: string, opts?: WorkforceManagementApi.postWorkforcemanagementManagementunitWeekScheduleCopyOptions): Promise<Models.AsyncWeekScheduleResponse>; 
  	postWorkforcemanagementManagementunitWeekScheduleReschedule(managementUnitId: string, weekId: string, scheduleId: string, opts?: WorkforceManagementApi.postWorkforcemanagementManagementunitWeekScheduleRescheduleOptions): Promise<Models.AsyncWeekScheduleResponse>; 
  	postWorkforcemanagementManagementunitWeekSchedules(managementUnitId: string, weekId: string, opts?: WorkforceManagementApi.postWorkforcemanagementManagementunitWeekSchedulesOptions): Promise<Models.AsyncWeekScheduleResponse>; 
  	postWorkforcemanagementManagementunitWeekSchedulesGenerate(managementUnitId: string, weekId: string, opts?: WorkforceManagementApi.postWorkforcemanagementManagementunitWeekSchedulesGenerateOptions): Promise<Models.GenerateWeekScheduleResponse>; 
  	postWorkforcemanagementManagementunitWeekSchedulesPartialupload(managementUnitId: string, weekId: string, opts?: WorkforceManagementApi.postWorkforcemanagementManagementunitWeekSchedulesPartialuploadOptions): Promise<Models.PartialUploadResponse>; 
  	postWorkforcemanagementManagementunitWeekShorttermforecastCopy(managementUnitId: string, weekDateId: string, forecastId: string, body: Models.CopyShortTermForecastRequest, opts?: WorkforceManagementApi.postWorkforcemanagementManagementunitWeekShorttermforecastCopyOptions): Promise<Models.ShortTermForecastResponse>; 
  	postWorkforcemanagementManagementunitWeekShorttermforecasts(managementUnitId: string, weekDateId: string, body: Models.ImportShortTermForecastRequest, opts?: WorkforceManagementApi.postWorkforcemanagementManagementunitWeekShorttermforecastsOptions): Promise<Models.ShortTermForecastResponse>; 
  	postWorkforcemanagementManagementunitWeekShorttermforecastsGenerate(managementUnitId: string, weekDateId: string, body: Models.GenerateShortTermForecastRequest, opts?: WorkforceManagementApi.postWorkforcemanagementManagementunitWeekShorttermforecastsGenerateOptions): Promise<Models.GenerateShortTermForecastResponse>; 
  	postWorkforcemanagementManagementunitWeekShorttermforecastsPartialupload(managementUnitId: string, weekDateId: string, body: Models.RouteGroupList): Promise<Models.PartialUploadResponse>; 
  	postWorkforcemanagementManagementunitWorkplanCopy(managementUnitId: string, workPlanId: string, opts?: WorkforceManagementApi.postWorkforcemanagementManagementunitWorkplanCopyOptions): Promise<Models.WorkPlan>; 
  	postWorkforcemanagementManagementunitWorkplans(managementUnitId: string, opts?: WorkforceManagementApi.postWorkforcemanagementManagementunitWorkplansOptions): Promise<Models.WorkPlan>; 
  	postWorkforcemanagementManagementunits(opts?: WorkforceManagementApi.postWorkforcemanagementManagementunitsOptions): Promise<Models.ManagementUnit>; 
  	postWorkforcemanagementNotificationsUpdate(opts?: WorkforceManagementApi.postWorkforcemanagementNotificationsUpdateOptions): Promise<Models.UpdateNotificationsResponse>; 
  	postWorkforcemanagementSchedules(opts?: WorkforceManagementApi.postWorkforcemanagementSchedulesOptions): Promise<Models.UserScheduleContainer>; 
  	postWorkforcemanagementTimeoffrequests(opts?: WorkforceManagementApi.postWorkforcemanagementTimeoffrequestsOptions): Promise<Models.TimeOffRequestResponse>;
}

declare namespace WorkforceManagementApi { 
	export interface getWorkforcemanagementManagementunitOptions { 
		"expand"?: Array<string>;
	}
	export interface getWorkforcemanagementManagementunitUserTimeoffrequestsOptions { 
		"recentlyReviewed"?: boolean;
	}
	export interface getWorkforcemanagementManagementunitWeekScheduleOptions { 
		"expand"?: string;
		"forceDownloadService"?: boolean;
	}
	export interface getWorkforcemanagementManagementunitWeekSchedulesOptions { 
		"includeOnlyPublished"?: boolean;
		"earliestWeekDate"?: string;
		"latestWeekDate"?: string;
	}
	export interface getWorkforcemanagementManagementunitWeekShorttermforecastFinalOptions { 
		"forceDownloadService"?: boolean;
	}
	export interface getWorkforcemanagementManagementunitWorkplansOptions { 
		"expand"?: Array<string>;
	}
	export interface getWorkforcemanagementManagementunitsOptions { 
		"pageSize"?: number;
		"pageNumber"?: number;
		"expand"?: string;
		"feature"?: string;
		"divisionId"?: string;
	}
	export interface getWorkforcemanagementManagementunitsDivisionviewsOptions { 
		"divisionId"?: Array<string>;
	}
	export interface getWorkforcemanagementTimeoffrequestsOptions { 
		"recentlyReviewed"?: boolean;
	}
	export interface patchWorkforcemanagementManagementunitOptions { 
		"body"?: Models.UpdateManagementUnitRequest;
	}
	export interface patchWorkforcemanagementManagementunitActivitycodeOptions { 
		"body"?: Models.UpdateActivityCodeRequest;
	}
	export interface patchWorkforcemanagementManagementunitSchedulingRunOptions { 
		"body"?: Models.UpdateSchedulingRunRequest;
	}
	export interface patchWorkforcemanagementManagementunitServicegoalgroupOptions { 
		"body"?: Models.ServiceGoalGroup;
	}
	export interface patchWorkforcemanagementManagementunitSettingsOptions { 
		"body"?: Models.ManagementUnitSettingsRequest;
	}
	export interface patchWorkforcemanagementManagementunitUserTimeoffrequestOptions { 
		"body"?: Models.AdminTimeOffRequestPatch;
	}
	export interface patchWorkforcemanagementManagementunitWeekScheduleOptions { 
		"forceAsync"?: boolean;
		"forceDownloadService"?: boolean;
		"body"?: Models.UpdateWeekScheduleRequest;
	}
	export interface patchWorkforcemanagementManagementunitWorkplanOptions { 
		"body"?: Models.WorkPlan;
	}
	export interface patchWorkforcemanagementTimeoffrequestOptions { 
		"body"?: Models.AgentTimeOffRequestPatch;
	}
	export interface postWorkforcemanagementAdherenceHistoricalOptions { 
		"body"?: Models.WfmHistoricalAdherenceQueryForUsers;
	}
	export interface postWorkforcemanagementManagementunitActivitycodesOptions { 
		"body"?: Models.CreateActivityCodeRequest;
	}
	export interface postWorkforcemanagementManagementunitAgentschedulesSearchOptions { 
		"body"?: Models.BuSearchAgentSchedulesRequest;
		"forceAsync"?: boolean;
		"forceDownloadService"?: boolean;
	}
	export interface postWorkforcemanagementManagementunitHistoricaladherencequeryOptions { 
		"body"?: Models.WfmHistoricalAdherenceQuery;
	}
	export interface postWorkforcemanagementManagementunitIntradayOptions { 
		"body"?: Models.IntradayQueryDataCommand;
	}
	export interface postWorkforcemanagementManagementunitMoveOptions { 
		"body"?: Models.MoveManagementUnitRequest;
	}
	export interface postWorkforcemanagementManagementunitSchedulesSearchOptions { 
		"body"?: Models.UserListScheduleRequestBody;
	}
	export interface postWorkforcemanagementManagementunitServicegoalgroupsOptions { 
		"body"?: Models.CreateServiceGoalGroupRequest;
	}
	export interface postWorkforcemanagementManagementunitTimeoffrequestsOptions { 
		"body"?: Models.CreateAdminTimeOffRequest;
	}
	export interface postWorkforcemanagementManagementunitTimeoffrequestsFetchdetailsOptions { 
		"body"?: Models.TimeOffRequestLookupList;
	}
	export interface postWorkforcemanagementManagementunitTimeoffrequestsQueryOptions { 
		"body"?: Models.TimeOffRequestQueryBody;
	}
	export interface postWorkforcemanagementManagementunitWeekScheduleCopyOptions { 
		"forceAsync"?: boolean;
		"forceDownloadService"?: boolean;
		"body"?: Models.CopyWeekScheduleRequest;
	}
	export interface postWorkforcemanagementManagementunitWeekScheduleRescheduleOptions { 
		"body"?: Models.RescheduleRequest;
	}
	export interface postWorkforcemanagementManagementunitWeekSchedulesOptions { 
		"forceAsync"?: boolean;
		"forceDownloadService"?: boolean;
		"body"?: Models.ImportWeekScheduleRequest;
	}
	export interface postWorkforcemanagementManagementunitWeekSchedulesGenerateOptions { 
		"body"?: Models.GenerateWeekScheduleRequest;
	}
	export interface postWorkforcemanagementManagementunitWeekSchedulesPartialuploadOptions { 
		"body"?: Models.UserSchedulesPartialUploadRequest;
	}
	export interface postWorkforcemanagementManagementunitWeekShorttermforecastCopyOptions { 
		"forceAsync"?: boolean;
	}
	export interface postWorkforcemanagementManagementunitWeekShorttermforecastsOptions { 
		"forceAsync"?: boolean;
	}
	export interface postWorkforcemanagementManagementunitWeekShorttermforecastsGenerateOptions { 
		"forceAsync"?: boolean;
	}
	export interface postWorkforcemanagementManagementunitWorkplanCopyOptions { 
		"body"?: Models.CopyWorkPlan;
	}
	export interface postWorkforcemanagementManagementunitWorkplansOptions { 
		"body"?: Models.CreateWorkPlan;
	}
	export interface postWorkforcemanagementManagementunitsOptions { 
		"body"?: Models.CreateManagementUnitApiRequest;
	}
	export interface postWorkforcemanagementNotificationsUpdateOptions { 
		"body"?: Models.UpdateNotificationsRequest;
	}
	export interface postWorkforcemanagementSchedulesOptions { 
		"body"?: Models.CurrentUserScheduleRequestBody;
	}
	export interface postWorkforcemanagementTimeoffrequestsOptions { 
		"body"?: Models.CreateAgentTimeOffRequest;
	}
}

declare namespace Models { 
	export interface ADFS { 
		"id"?: string;
		"name"?: string;
		"relyingPartyIdentifier"?: string;
		"certificate"?: string;
		"ssoTargetURI"?: string;
		"issuerURI"?: string;
		"disabled"?: boolean;
		"selfUri"?: string;
	}
	
	export interface Action { 
		"id"?: string;
		"name"?: string;
		"integrationId"?: string;
		"category"?: string;
		"contract"?: Models.ActionContract;
		"version"?: number;
		"secure"?: boolean;
		"config"?: Models.ActionConfig;
		"selfUri"?: string;
	}
	
	export interface ActionConfig { 
		"request"?: Models.RequestConfig;
		"response"?: Models.ResponseConfig;
	}
	
	export interface ActionContract { 
		"output"?: Models.ActionOutput;
		"input"?: Models.ActionInput;
	}
	
	export interface ActionContractInput { 
		"input": Models.PostInputContract;
		"output": Models.PostOutputContract;
	}
	
	export interface ActionEntityListing { 
		"entities"?: Array<Models.Action>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ActionInput { 
		"inputSchema"?: Models.JsonSchemaDocument;
		"inputSchemaFlattened"?: Models.JsonSchemaDocument;
		"inputSchemaUri"?: string;
	}
	
	export interface ActionOutput { 
		"successSchema"?: Models.JsonSchemaDocument;
		"successSchemaUri"?: string;
		"errorSchema"?: Models.JsonSchemaDocument;
		"errorSchemaUri"?: string;
		"successSchemaFlattened"?: Models.JsonSchemaDocument;
		"errorSchemaFlattened"?: object;
	}
	
	export interface Actions { 
		"skillsToRemove"?: Array<Models.SkillsToRemove>;
	}
	
	export interface ActiveAlertCount { 
		"count"?: number;
	}
	
	export interface ActivityCode { 
		"id"?: string;
		"selfUri"?: string;
		"name"?: string;
		"isActive"?: boolean;
		"isDefault"?: boolean;
		"category"?: string;
		"lengthInMinutes"?: number;
		"countsAsPaidTime"?: boolean;
		"countsAsWorkTime"?: boolean;
		"agentTimeOffSelectable"?: boolean;
		"metadata": Models.WfmVersionedEntityMetadata;
	}
	
	export interface ActivityCodeContainer { 
		"activityCodes"?: { [key: string]: Models.ActivityCode; };
		"metadata": Models.WfmVersionedEntityMetadata;
	}
	
	export interface AcwSettings { 
		"wrapupPrompt"?: string;
		"timeoutMs"?: number;
	}
	
	export interface AdditionalMessage { 
		"textBody": string;
		"mediaIds"?: Array<string>;
		"stickerIds"?: Array<string>;
	}
	
	export interface Address { 
		"name"?: string;
		"nameRaw"?: string;
		"addressNormalized"?: string;
		"addressRaw"?: string;
		"addressDisplayable"?: string;
	}
	
	export interface AddressableEntityRef { 
		"id"?: string;
		"selfUri"?: string;
	}
	
	export interface AddressableLicenseDefinition { 
		"id"?: string;
		"selfUri"?: string;
	}
	
	export interface AdherenceSettings { 
		"severeAlertThresholdMinutes"?: number;
		"adherenceTargetPercent"?: number;
		"adherenceExceptionThresholdSeconds"?: number;
		"nonOnQueueActivitiesEquivalent"?: boolean;
		"trackOnQueueActivity"?: boolean;
		"ignoredActivityCategories"?: Models.IgnoredActivityCategories;
	}
	
	export interface AdhocRecordingTopicConversationData { 
		"id"?: string;
	}
	
	export interface AdhocRecordingTopicLockData { 
		"lockedBy"?: Models.AdhocRecordingTopicUserData;
		"dateCreated"?: string;
		"dateExpires"?: string;
	}
	
	export interface AdhocRecordingTopicRecordingDataV2 { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"workspace"?: Models.AdhocRecordingTopicWorkspaceData;
		"createdBy"?: Models.AdhocRecordingTopicUserData;
		"contentType"?: string;
		"contentLength"?: number;
		"filename"?: string;
		"changeNumber"?: number;
		"dateUploaded"?: string;
		"uploadedBy"?: Models.AdhocRecordingTopicUserData;
		"lockInfo"?: Models.AdhocRecordingTopicLockData;
		"selfUri"?: string;
		"durationMillieconds"?: number;
		"conversation"?: Models.AdhocRecordingTopicConversationData;
		"read"?: boolean;
	}
	
	export interface AdhocRecordingTopicUserData { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface AdhocRecordingTopicWorkspaceData { 
		"id"?: string;
	}
	
	export interface Adjacents { 
		"superiors"?: Array<Models.User>;
		"siblings"?: Array<Models.User>;
		"directReports"?: Array<Models.User>;
	}
	
	export interface AdminTimeOffRequestPatch { 
		"status"?: string;
		"activityCodeId"?: string;
		"notes"?: string;
		"fullDayManagementUnitDates"?: Array<string>;
		"partialDayStartDateTimes"?: Array<string>;
		"dailyDurationMinutes"?: number;
		"metadata": Models.WfmVersionedEntityMetadata;
	}
	
	export interface Agent { 
		"stage"?: string;
	}
	
	export interface AgentActivity { 
		"id"?: string;
		"name"?: string;
		"agent"?: Models.User;
		"numEvaluations"?: number;
		"averageEvaluationScore"?: number;
		"numCriticalEvaluations"?: number;
		"averageCriticalScore"?: number;
		"highestEvaluationScore"?: number;
		"lowestEvaluationScore"?: number;
		"highestCriticalScore"?: number;
		"lowestCriticalScore"?: number;
		"agentEvaluatorActivityList"?: Array<Models.AgentEvaluatorActivity>;
		"selfUri"?: string;
	}
	
	export interface AgentActivityChangedTopicAgentActivity { 
		"id"?: string;
		"routingStatus"?: Models.AgentActivityChangedTopicRoutingStatus;
		"presence"?: Models.AgentActivityChangedTopicPresence;
		"outOfOffice"?: Models.AgentActivityChangedTopicOutOfOffice;
		"activeQueueIds"?: Array<string>;
		"dateActiveQueuesChanged"?: string;
	}
	
	export interface AgentActivityChangedTopicOrganizationPresence { 
		"id"?: string;
		"systemPresence"?: string;
	}
	
	export interface AgentActivityChangedTopicOutOfOffice { 
		"active"?: boolean;
		"modifiedDate"?: string;
	}
	
	export interface AgentActivityChangedTopicPresence { 
		"presenceDefinition"?: Models.AgentActivityChangedTopicOrganizationPresence;
		"presenceMessage"?: string;
		"modifiedDate"?: string;
	}
	
	export interface AgentActivityChangedTopicRoutingStatus { 
		"status"?: string;
		"startTime"?: string;
	}
	
	export interface AgentActivityEntityListing { 
		"entities"?: Array<Models.AgentActivity>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface AgentEvaluatorActivity { 
		"id"?: string;
		"name"?: string;
		"agent"?: Models.User;
		"evaluator"?: Models.User;
		"numEvaluations"?: number;
		"averageEvaluationScore"?: number;
		"selfUri"?: string;
	}
	
	export interface AgentTimeOffRequestPatch { 
		"markedAsRead"?: boolean;
		"status"?: string;
		"notes"?: string;
	}
	
	export interface AggregateMetricData { 
		"metric"?: string;
		"qualifier"?: string;
		"stats"?: Models.StatisticalSummary;
	}
	
	export interface AggregateViewData { 
		"name"?: string;
		"stats"?: Models.StatisticalSummary;
	}
	
	export interface AggregationRange { 
		"gte"?: number;
		"lt"?: number;
	}
	
	export interface AggregationResult { 
		"type"?: string;
		"dimension"?: string;
		"metric"?: string;
		"count"?: number;
		"results"?: Array<Models.AggregationResultEntry>;
	}
	
	export interface AggregationResultEntry { 
		"count"?: number;
		"value"?: string;
		"gte"?: number;
		"lt"?: number;
	}
	
	export interface AnalyticsConversation { 
		"conversationId"?: string;
		"conversationStart"?: string;
		"conversationEnd"?: string;
		"mediaStatsMinConversationMos"?: number;
		"mediaStatsMinConversationRFactor"?: number;
		"originatingDirection"?: string;
		"evaluations"?: Array<Models.AnalyticsEvaluation>;
		"surveys"?: Array<Models.AnalyticsSurvey>;
		"divisionIds"?: Array<string>;
		"participants"?: Array<Models.AnalyticsParticipant>;
	}
	
	export interface AnalyticsConversationAsyncQueryResponse { 
		"cursor"?: string;
		"conversations"?: Array<Models.AnalyticsConversation>;
	}
	
	export interface AnalyticsConversationQueryResponse { 
		"aggregations"?: Array<Models.AggregationResult>;
		"conversations"?: Array<Models.AnalyticsConversationWithoutAttributes>;
	}
	
	export interface AnalyticsConversationSegment { 
		"segmentStart"?: string;
		"segmentEnd"?: string;
		"queueId"?: string;
		"wrapUpCode"?: string;
		"wrapUpNote"?: string;
		"wrapUpTags"?: Array<string>;
		"errorCode"?: string;
		"disconnectType"?: string;
		"segmentType"?: string;
		"requestedRoutingUserIds"?: Array<string>;
		"requestedRoutingSkillIds"?: Array<string>;
		"requestedLanguageId"?: string;
		"scoredAgents"?: Array<Models.AnalyticsScoredAgent>;
		"properties"?: Array<Models.AnalyticsProperty>;
		"sourceConversationId"?: string;
		"destinationConversationId"?: string;
		"sourceSessionId"?: string;
		"destinationSessionId"?: string;
		"sipResponseCodes"?: Array<number>;
		"q850ResponseCodes"?: Array<number>;
		"conference"?: boolean;
		"groupId"?: string;
		"subject"?: string;
		"audioMuted"?: boolean;
		"videoMuted"?: boolean;
	}
	
	export interface AnalyticsConversationWithoutAttributes { 
		"conversationId"?: string;
		"conversationStart"?: string;
		"conversationEnd"?: string;
		"mediaStatsMinConversationMos"?: number;
		"mediaStatsMinConversationRFactor"?: number;
		"originatingDirection"?: string;
		"evaluations"?: Array<Models.AnalyticsEvaluation>;
		"surveys"?: Array<Models.AnalyticsSurvey>;
		"divisionIds"?: Array<string>;
		"participants"?: Array<Models.AnalyticsParticipantWithoutAttributes>;
	}
	
	export interface AnalyticsConversationWithoutAttributesMultiGetResponse { 
		"conversations"?: Array<Models.AnalyticsConversationWithoutAttributes>;
	}
	
	export interface AnalyticsEvaluation { 
		"evaluationId"?: string;
		"evaluatorId"?: string;
		"userId"?: string;
		"eventTime"?: string;
		"queueId"?: string;
		"formId"?: string;
		"contextId"?: string;
		"formName"?: string;
		"calibrationId"?: string;
		"rescored"?: boolean;
		"deleted"?: boolean;
		"oTotalCriticalScore"?: number;
		"oTotalScore"?: number;
	}
	
	export interface AnalyticsFlow { 
		"flowId"?: string;
		"flowName"?: string;
		"flowVersion"?: string;
		"flowType"?: string;
		"exitReason"?: string;
		"entryReason"?: string;
		"entryType"?: string;
		"transferType"?: string;
		"transferTargetName"?: string;
		"transferTargetAddress"?: string;
		"issuedCallback"?: boolean;
		"startingLanguage"?: string;
		"endingLanguage"?: string;
		"outcomes"?: Array<Models.AnalyticsFlowOutcome>;
	}
	
	export interface AnalyticsFlowOutcome { 
		"flowOutcomeId"?: string;
		"flowOutcomeValue"?: string;
		"flowOutcome"?: string;
		"flowOutcomeStartTimestamp"?: string;
		"flowOutcomeEndTimestamp"?: string;
	}
	
	export interface AnalyticsMediaEndpointStat { 
		"codecs"?: Array<string>;
		"minMos"?: number;
		"minRFactor"?: number;
		"maxLatencyMs"?: number;
		"receivedPackets"?: number;
		"invalidPackets"?: number;
		"discardedPackets"?: number;
		"duplicatePackets"?: number;
		"overrunPackets"?: number;
		"underrunPackets"?: number;
	}
	
	export interface AnalyticsParticipant { 
		"participantId"?: string;
		"participantName"?: string;
		"userId"?: string;
		"purpose"?: string;
		"externalContactId"?: string;
		"externalOrganizationId"?: string;
		"flaggedReason"?: string;
		"teamId"?: string;
		"sessions"?: Array<Models.AnalyticsSession>;
		"attributes"?: { [key: string]: string; };
	}
	
	export interface AnalyticsParticipantWithoutAttributes { 
		"participantId"?: string;
		"participantName"?: string;
		"userId"?: string;
		"purpose"?: string;
		"externalContactId"?: string;
		"externalOrganizationId"?: string;
		"flaggedReason"?: string;
		"teamId"?: string;
		"sessions"?: Array<Models.AnalyticsSession>;
	}
	
	export interface AnalyticsProperty { 
		"propertyType": string;
		"property": string;
		"value": string;
	}
	
	export interface AnalyticsQueryAggregation { 
		"type"?: string;
		"dimension"?: string;
		"metric"?: string;
		"size"?: number;
		"ranges"?: Array<Models.AggregationRange>;
	}
	
	export interface AnalyticsRoutingStatusRecord { 
		"startTime"?: string;
		"endTime"?: string;
		"routingStatus"?: string;
	}
	
	export interface AnalyticsScoredAgent { 
		"scoredAgentId"?: string;
		"agentScore"?: number;
	}
	
	export interface AnalyticsSession { 
		"mediaType"?: string;
		"sessionId"?: string;
		"addressOther"?: string;
		"addressSelf"?: string;
		"addressFrom"?: string;
		"addressTo"?: string;
		"messageType"?: string;
		"ani"?: string;
		"direction"?: string;
		"dnis"?: string;
		"sessionDnis"?: string;
		"outboundCampaignId"?: string;
		"outboundContactId"?: string;
		"outboundContactListId"?: string;
		"dispositionAnalyzer"?: string;
		"dispositionName"?: string;
		"edgeId"?: string;
		"remoteNameDisplayable"?: string;
		"roomId"?: string;
		"monitoredSessionId"?: string;
		"monitoredParticipantId"?: string;
		"callbackUserName"?: string;
		"callbackNumbers"?: Array<string>;
		"callbackScheduledTime"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"skipEnabled"?: boolean;
		"timeoutSeconds"?: number;
		"cobrowseRole"?: string;
		"cobrowseRoomId"?: string;
		"mediaBridgeId"?: string;
		"screenShareAddressSelf"?: string;
		"sharingScreen"?: boolean;
		"screenShareRoomId"?: string;
		"videoRoomId"?: string;
		"videoAddressSelf"?: string;
		"segments"?: Array<Models.AnalyticsConversationSegment>;
		"metrics"?: Array<Models.AnalyticsSessionMetric>;
		"flow"?: Models.AnalyticsFlow;
		"mediaEndpointStats"?: Array<Models.AnalyticsMediaEndpointStat>;
		"recording"?: boolean;
		"journeyCustomerId"?: string;
		"journeyCustomerIdType"?: string;
		"journeyCustomerSessionId"?: string;
		"journeyCustomerSessionIdType"?: string;
		"journeyActionId"?: string;
		"journeyActionMapId"?: string;
		"journeyActionMapVersion"?: string;
		"protocolCallId"?: string;
		"provider"?: string;
		"remote"?: string;
		"mediaCount"?: number;
		"flowOutType"?: string;
	}
	
	export interface AnalyticsSessionMetric { 
		"name": string;
		"value": number;
		"emitDate": string;
	}
	
	export interface AnalyticsSurvey { 
		"surveyId"?: string;
		"surveyFormId"?: string;
		"surveyFormName"?: string;
		"surveyFormContextId"?: string;
		"eventTime"?: string;
		"userId"?: string;
		"queueId"?: string;
		"surveyStatus"?: string;
		"surveyPromoterScore"?: number;
		"surveyCompletedDate"?: string;
		"oSurveyTotalScore"?: number;
	}
	
	export interface AnalyticsUserDetail { 
		"userId"?: string;
		"primaryPresence"?: Array<Models.AnalyticsUserPresenceRecord>;
		"routingStatus"?: Array<Models.AnalyticsRoutingStatusRecord>;
	}
	
	export interface AnalyticsUserDetailsAsyncQueryResponse { 
		"userDetails"?: Array<Models.AnalyticsUserDetail>;
		"cursor"?: string;
	}
	
	export interface AnalyticsUserDetailsQueryResponse { 
		"userDetails"?: Array<Models.AnalyticsUserDetail>;
		"aggregations"?: Array<Models.AggregationResult>;
	}
	
	export interface AnalyticsUserPresenceRecord { 
		"startTime"?: string;
		"endTime"?: string;
		"systemPresence"?: string;
		"organizationPresenceId"?: string;
	}
	
	export interface Annotation { 
		"id"?: string;
		"name"?: string;
		"type"?: string;
		"location"?: number;
		"durationMs"?: number;
		"absoluteLocation"?: number;
		"absoluteDurationMs"?: number;
		"recordingLocation"?: number;
		"recordingDurationMs"?: number;
		"user"?: Models.User;
		"description"?: string;
		"keywordName"?: string;
		"confidence"?: number;
		"keywordSetId"?: string;
		"keywordSetName"?: string;
		"utterance"?: string;
		"timeBegin"?: string;
		"timeEnd"?: string;
		"keywordConfidenceThreshold"?: string;
		"agentScoreModifier": string;
		"customerScoreModifier": string;
		"selfUri"?: string;
	}
	
	export interface AnswerOption { 
		"id"?: string;
		"text"?: string;
		"value"?: number;
	}
	
	export interface ArchitectDependencyTrackingBuildNotificationClient { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface ArchitectDependencyTrackingBuildNotificationDependencyTrackingBuildNotification { 
		"status"?: string;
		"user"?: Models.ArchitectDependencyTrackingBuildNotificationUser;
		"client"?: Models.ArchitectDependencyTrackingBuildNotificationClient;
		"startTime"?: string;
	}
	
	export interface ArchitectDependencyTrackingBuildNotificationHomeOrganization { 
		"id"?: string;
		"name"?: string;
		"thirdPartyOrgName"?: string;
	}
	
	export interface ArchitectDependencyTrackingBuildNotificationUser { 
		"id"?: string;
		"name"?: string;
		"homeOrg"?: Models.ArchitectDependencyTrackingBuildNotificationHomeOrganization;
	}
	
	export interface ArchitectFlowNotificationArchitectOperation { 
		"id"?: string;
		"complete"?: boolean;
		"user"?: Models.ArchitectFlowNotificationUser;
		"client"?: Models.ArchitectFlowNotificationClient;
		"actionName"?: string;
		"actionStatus"?: string;
		"errorMessage"?: string;
		"errorCode"?: string;
		"errorMessageParams"?: Models.ArchitectFlowNotificationErrorMessageParams;
		"errorDetails"?: Array<Models.ArchitectFlowNotificationErrorDetail>;
	}
	
	export interface ArchitectFlowNotificationClient { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface ArchitectFlowNotificationErrorDetail { 
		"errorCode"?: string;
		"entityId"?: string;
		"entityName"?: string;
		"fieldName"?: string;
	}
	
	export interface ArchitectFlowNotificationErrorMessageParams { 
		"additionalProperties"?: { [key: string]: string; };
	}
	
	export interface ArchitectFlowNotificationFlowNotification { 
		"id"?: string;
		"name"?: string;
		"description"?: string;
		"deleted"?: boolean;
		"checkedInVersion"?: Models.ArchitectFlowNotificationFlowVersion;
		"savedVersion"?: Models.ArchitectFlowNotificationFlowVersion;
		"publishedVersion"?: Models.ArchitectFlowNotificationFlowVersion;
		"currentOperation"?: Models.ArchitectFlowNotificationArchitectOperation;
	}
	
	export interface ArchitectFlowNotificationFlowVersion { 
		"id"?: string;
	}
	
	export interface ArchitectFlowNotificationHomeOrganization { 
		"id"?: string;
		"name"?: string;
		"thirdPartyOrgName"?: string;
	}
	
	export interface ArchitectFlowNotificationUser { 
		"id"?: string;
		"name"?: string;
		"homeOrg"?: Models.ArchitectFlowNotificationHomeOrganization;
	}
	
	export interface ArchitectFlowOutcomeNotificationArchitectOperation { 
		"id"?: string;
		"complete"?: boolean;
		"user"?: Models.ArchitectFlowOutcomeNotificationUser;
		"client"?: Models.ArchitectFlowOutcomeNotificationClient;
		"actionName"?: string;
		"actionStatus"?: string;
		"errorMessage"?: string;
		"errorCode"?: string;
		"errorMessageParams"?: Models.ArchitectFlowOutcomeNotificationErrorMessageParams;
		"errorDetails"?: Array<Models.ArchitectFlowOutcomeNotificationErrorDetail>;
	}
	
	export interface ArchitectFlowOutcomeNotificationClient { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface ArchitectFlowOutcomeNotificationErrorDetail { 
		"errorCode"?: string;
		"entityId"?: string;
		"entityName"?: string;
		"fieldName"?: string;
	}
	
	export interface ArchitectFlowOutcomeNotificationErrorMessageParams { 
		"additionalProperties"?: { [key: string]: string; };
	}
	
	export interface ArchitectFlowOutcomeNotificationFlowOutcomeNotification { 
		"id"?: string;
		"name"?: string;
		"description"?: string;
		"currentOperation"?: Models.ArchitectFlowOutcomeNotificationArchitectOperation;
	}
	
	export interface ArchitectFlowOutcomeNotificationHomeOrganization { 
		"id"?: string;
		"name"?: string;
		"thirdPartyOrgName"?: string;
	}
	
	export interface ArchitectFlowOutcomeNotificationUser { 
		"id"?: string;
		"name"?: string;
		"homeOrg"?: Models.ArchitectFlowOutcomeNotificationHomeOrganization;
	}
	
	export interface ArchitectPromptNotificationArchitectOperation { 
		"id"?: string;
		"complete"?: boolean;
		"user"?: Models.ArchitectPromptNotificationUser;
		"client"?: Models.ArchitectPromptNotificationClient;
		"actionName"?: string;
		"actionStatus"?: string;
		"errorMessage"?: string;
		"errorCode"?: string;
		"errorMessageParams"?: Models.ArchitectPromptNotificationErrorMessageParams;
		"errorDetails"?: Array<Models.ArchitectPromptNotificationErrorDetail>;
	}
	
	export interface ArchitectPromptNotificationClient { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface ArchitectPromptNotificationErrorDetail { 
		"errorCode"?: string;
		"entityId"?: string;
		"entityName"?: string;
		"fieldName"?: string;
	}
	
	export interface ArchitectPromptNotificationErrorMessageParams { 
		"additionalProperties"?: { [key: string]: string; };
	}
	
	export interface ArchitectPromptNotificationHomeOrganization { 
		"id"?: string;
		"name"?: string;
		"thirdPartyOrgName"?: string;
	}
	
	export interface ArchitectPromptNotificationPromptNotification { 
		"id"?: string;
		"name"?: string;
		"description"?: string;
		"currentOperation"?: Models.ArchitectPromptNotificationArchitectOperation;
	}
	
	export interface ArchitectPromptNotificationUser { 
		"id"?: string;
		"name"?: string;
		"homeOrg"?: Models.ArchitectPromptNotificationHomeOrganization;
	}
	
	export interface ArchitectPromptResourceNotificationPromptResourceNotification { 
		"promptId"?: string;
		"id"?: string;
		"language"?: string;
		"mediaUri"?: string;
		"uploadStatus"?: string;
		"durationSeconds"?: number;
	}
	
	export interface ArchitectSystemPromptResourceNotificationSystemPromptResourceNotification { 
		"promptId"?: string;
		"id"?: string;
		"language"?: string;
		"mediaUri"?: string;
		"uploadStatus"?: string;
		"durationSeconds"?: number;
	}
	
	export interface ArchiveRetention { 
		"days"?: number;
		"storageMedium"?: string;
	}
	
	export interface ArrayNode { 
		"nodeType"?: string;
		"float"?: boolean;
		"number"?: boolean;
		"boolean"?: boolean;
		"object"?: boolean;
		"valueNode"?: boolean;
		"containerNode"?: boolean;
		"missingNode"?: boolean;
		"integralNumber"?: boolean;
		"floatingPointNumber"?: boolean;
		"short"?: boolean;
		"int"?: boolean;
		"long"?: boolean;
		"double"?: boolean;
		"bigDecimal"?: boolean;
		"bigInteger"?: boolean;
		"textual"?: boolean;
		"binary"?: boolean;
		"pojo"?: boolean;
		"array"?: boolean;
		"null"?: boolean;
	}
	
	export interface AssignedWrapupCode { 
		"code"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
	}
	
	export interface AsyncConversationQuery { 
		"interval": string;
		"conversationFilters"?: Array<Models.ConversationDetailQueryFilter>;
		"segmentFilters"?: Array<Models.SegmentDetailQueryFilter>;
		"evaluationFilters"?: Array<Models.EvaluationDetailQueryFilter>;
		"mediaEndpointStatFilters"?: Array<Models.MediaEndpointStatDetailQueryFilter>;
		"surveyFilters"?: Array<Models.SurveyDetailQueryFilter>;
		"order"?: string;
		"orderBy"?: string;
		"limit"?: number;
		"startOfDayIntervalMatching"?: boolean;
	}
	
	export interface AsyncQueryResponse { 
		"jobId"?: string;
	}
	
	export interface AsyncQueryStatus { 
		"state"?: string;
		"errorMessage"?: string;
		"expirationDate"?: string;
		"submissionDate"?: string;
		"completionDate"?: string;
	}
	
	export interface AsyncUserDetailsQuery { 
		"interval": string;
		"userFilters"?: Array<Models.UserDetailQueryFilter>;
		"presenceFilters"?: Array<Models.PresenceDetailQueryFilter>;
		"routingStatusFilters"?: Array<Models.RoutingStatusDetailQueryFilter>;
		"order"?: string;
		"limit"?: number;
	}
	
	export interface AsyncWeekScheduleResponse { 
		"result"?: Models.WeekSchedule;
		"downloadUrl"?: string;
		"status"?: string;
		"operationId"?: string;
	}
	
	export interface Attachment { 
		"attachmentId"?: string;
		"name"?: string;
		"contentUri"?: string;
		"contentType"?: string;
		"contentLength"?: number;
		"inlineImage"?: boolean;
	}
	
	export interface AttemptLimits { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"maxAttemptsPerContact"?: number;
		"maxAttemptsPerNumber"?: number;
		"timeZoneId"?: string;
		"resetPeriod"?: string;
		"recallEntries"?: { [key: string]: Models.RecallEntry; };
		"selfUri"?: string;
	}
	
	export interface AttemptLimitsEntityListing { 
		"entities"?: Array<Models.AttemptLimits>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface Attribute { 
		"id"?: string;
		"name": string;
		"version"?: number;
		"description"?: string;
		"createdBy"?: Models.DomainEntityRef;
		"dateCreated"?: string;
		"modifiedBy"?: Models.DomainEntityRef;
		"dateModified"?: string;
		"selfUri"?: string;
	}
	
	export interface AttributeFilterItem { 
		"id"?: string;
		"operator"?: string;
		"values"?: Array<string>;
	}
	
	export interface AtzmTimeSlot { 
		"earliestCallableTime"?: string;
		"latestCallableTime"?: string;
	}
	
	export interface AtzmTimeSlotWithTimeZone { 
		"earliestCallableTime"?: string;
		"latestCallableTime"?: string;
		"timeZoneId"?: string;
	}
	
	export interface AuditChange { 
		"property"?: string;
		"entity"?: Models.AuditEntityReference;
		"oldValues"?: Array<string>;
		"newValues"?: Array<string>;
	}
	
	export interface AuditEntity { 
		"type": string;
		"id"?: string;
		"name"?: string;
		"selfUri"?: string;
	}
	
	export interface AuditEntityReference { 
		"id"?: string;
		"name"?: string;
		"selfUri"?: string;
		"type"?: string;
		"action"?: string;
	}
	
	export interface AuditFacet { 
		"name": string;
		"type": string;
	}
	
	export interface AuditFilter { 
		"name": string;
		"type": string;
		"operator": string;
		"values": Array<string>;
	}
	
	export interface AuditLogMessage { 
		"id"?: string;
		"user"?: Models.DomainEntityRef;
		"client"?: Models.AddressableEntityRef;
		"remoteIp"?: Array<string>;
		"serviceName"?: string;
		"eventDate"?: string;
		"message"?: Models.MessageInfo;
		"action"?: string;
		"entity"?: Models.AddressableEntityRef;
		"entityType"?: string;
		"propertyChanges"?: Array<Models.PropertyChange>;
		"context"?: { [key: string]: string; };
	}
	
	export interface AuditMessage { 
		"id": string;
		"user"?: Models.AuditUser;
		"correlationId"?: string;
		"transactionId"?: string;
		"transactionInitiator"?: boolean;
		"application"?: string;
		"serviceName": string;
		"level": string;
		"timestamp"?: string;
		"receivedTimestamp": string;
		"status": string;
		"actionContext"?: string;
		"action"?: string;
		"changes"?: Array<Models.Change>;
		"entity"?: Models.AuditEntity;
		"serviceContext"?: Models.ServiceContext;
	}
	
	export interface AuditQueryExecutionResultsResponse { 
		"id"?: string;
		"pageSize"?: number;
		"cursor"?: string;
		"entities"?: Array<Models.AuditLogMessage>;
	}
	
	export interface AuditQueryExecutionStatusResponse { 
		"id"?: string;
		"state"?: string;
		"startDate"?: string;
		"interval"?: string;
		"serviceName"?: string;
		"filters"?: Array<Models.AuditQueryFilter>;
	}
	
	export interface AuditQueryFilter { 
		"property": string;
		"value": string;
	}
	
	export interface AuditQueryRequest { 
		"interval": string;
		"serviceName": string;
		"filters"?: Array<Models.AuditQueryFilter>;
	}
	
	export interface AuditQueryResponse { 
	}
	
	export interface AuditSearchResult { 
		"pageNumber"?: number;
		"pageSize"?: number;
		"total"?: number;
		"pageCount"?: number;
		"facetInfo"?: Array<Models.FacetInfo>;
		"auditMessages"?: Array<Models.AuditMessage>;
	}
	
	export interface AuditUser { 
		"id": string;
		"name"?: string;
		"display"?: string;
	}
	
	export interface AuthzDivision { 
		"id"?: string;
		"name"?: string;
		"description": string;
		"homeDivision"?: boolean;
		"objectCounts"?: { [key: string]: number; };
		"selfUri"?: string;
	}
	
	export interface AuthzDivisionEntityListing { 
		"entities"?: Array<Models.AuthzDivision>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface AuthzGrant { 
		"subjectId"?: string;
		"division"?: Models.AuthzDivision;
		"role"?: Models.AuthzGrantRole;
		"grantMadeAt"?: string;
	}
	
	export interface AuthzGrantPolicy { 
		"actions"?: Array<string>;
		"condition"?: string;
		"domain"?: string;
		"entityName"?: string;
	}
	
	export interface AuthzGrantRole { 
		"id"?: string;
		"name"?: string;
		"description"?: string;
		"policies"?: Array<Models.AuthzGrantPolicy>;
		"default"?: boolean;
		"selfUri"?: string;
	}
	
	export interface AuthzSubject { 
		"id"?: string;
		"name"?: string;
		"grants"?: Array<Models.AuthzGrant>;
		"version"?: number;
		"selfUri"?: string;
	}
	
	export interface AutomaticTimeZoneMappingSettings { 
		"callableWindows"?: Array<Models.CallableWindow>;
	}
	
	export interface AvailableLanguageList { 
		"languages"?: Array<string>;
	}
	
	export interface AvailableTopic { 
		"description"?: string;
		"id"?: string;
		"requiresPermissions"?: Array<string>;
		"schema"?: { [key: string]: object; };
		"requiresCurrentUser"?: boolean;
		"requiresCurrentUserOrPermission"?: boolean;
	}
	
	export interface AvailableTopicEntityListing { 
		"entities"?: Array<Models.AvailableTopic>;
	}
	
	export interface AvailableTranslations { 
		"orgSpecific"?: Array<string>;
		"builtin"?: Array<string>;
	}
	
	export interface BatchDownloadJobResult { 
		"id"?: string;
		"name"?: string;
		"conversationId"?: string;
		"recordingId"?: string;
		"resultUrl"?: string;
		"contentType"?: string;
		"errorMsg"?: string;
		"selfUri"?: string;
	}
	
	export interface BatchDownloadJobStatusResult { 
		"id"?: string;
		"jobId"?: string;
		"expectedResultCount"?: number;
		"resultCount"?: number;
		"errorCount"?: number;
		"results"?: Array<Models.BatchDownloadJobResult>;
		"selfUri"?: string;
	}
	
	export interface BatchDownloadJobSubmission { 
		"batchDownloadRequestList": Array<Models.BatchDownloadRequest>;
	}
	
	export interface BatchDownloadJobSubmissionResult { 
		"id"?: string;
		"selfUri"?: string;
	}
	
	export interface BatchDownloadRequest { 
		"conversationId"?: string;
		"recordingId"?: string;
	}
	
	export interface BillingUsage { 
		"name": string;
		"totalUsage": string;
		"resources": Array<Models.BillingUsageResource>;
	}
	
	export interface BillingUsageReport { 
		"id"?: string;
		"name"?: string;
		"startDate": string;
		"endDate": string;
		"status"?: string;
		"usages": Array<Models.BillingUsage>;
		"selfUri"?: string;
	}
	
	export interface BillingUsageResource { 
		"name": string;
		"date": string;
	}
	
	export interface Biography { 
		"biography"?: string;
		"interests"?: Array<string>;
		"hobbies"?: Array<string>;
		"spouse"?: string;
	}
	
	export interface BuAgentScheduleActivity { 
		"startDate"?: string;
		"lengthMinutes"?: number;
		"description"?: string;
		"activityCodeId"?: string;
		"paid"?: boolean;
		"timeOffRequestId"?: string;
	}
	
	export interface BuAgentSchedulePublishedScheduleReference { 
		"id"?: string;
		"weekDate"?: string;
		"weekCount"?: number;
		"selfUri"?: string;
	}
	
	export interface BuAgentScheduleSearchResponse { 
		"user"?: Models.UserReference;
		"shifts"?: Array<Models.BuAgentScheduleShift>;
		"fullDayTimeOffMarkers"?: Array<Models.BuFullDayTimeOffMarker>;
	}
	
	export interface BuAgentScheduleShift { 
		"id"?: string;
		"startDate"?: string;
		"lengthMinutes"?: number;
		"activities"?: Array<Models.BuAgentScheduleActivity>;
		"manuallyEdited"?: boolean;
		"schedule"?: Models.BuScheduleReference;
	}
	
	export interface BuAgentSchedulesSearchResponse { 
		"agentSchedules"?: Array<Models.BuAgentScheduleSearchResponse>;
		"businessUnitTimeZone"?: string;
		"publishedSchedules"?: Array<Models.BuAgentSchedulePublishedScheduleReference>;
	}
	
	export interface BuAsyncAgentSchedulesSearchResponse { 
		"status"?: string;
		"operationId"?: string;
		"result"?: Models.BuAgentSchedulesSearchResponse;
		"progress"?: number;
		"downloadUrl"?: string;
	}
	
	export interface BuFullDayTimeOffMarker { 
		"businessUnitDate"?: string;
		"lengthMinutes"?: number;
		"description"?: string;
		"activityCodeId"?: string;
		"paid"?: boolean;
		"timeOffRequestId"?: string;
	}
	
	export interface BuScheduleReference { 
		"id"?: string;
		"weekDate"?: string;
		"selfUri"?: string;
	}
	
	export interface BuSearchAgentSchedulesRequest { 
		"startDate": string;
		"endDate": string;
		"userIds"?: Array<string>;
	}
	
	export interface Bullseye { 
		"rings"?: Array<Models.Ring>;
	}
	
	export interface BusinessUnitReference { 
		"id"?: string;
		"selfUri"?: string;
	}
	
	export interface Calibration { 
		"id"?: string;
		"name"?: string;
		"calibrator"?: Models.User;
		"agent"?: Models.User;
		"conversation"?: Models.Conversation;
		"evaluationForm"?: Models.EvaluationForm;
		"contextId"?: string;
		"averageScore"?: number;
		"highScore"?: number;
		"lowScore"?: number;
		"createdDate"?: string;
		"evaluations"?: Array<Models.Evaluation>;
		"evaluators"?: Array<Models.User>;
		"scoringIndex"?: Models.Evaluation;
		"expertEvaluator"?: Models.User;
		"selfUri"?: string;
	}
	
	export interface CalibrationAssignment { 
		"calibrator"?: Models.User;
		"evaluators"?: Array<Models.User>;
		"evaluationForm"?: Models.EvaluationForm;
		"expertEvaluator"?: Models.User;
	}
	
	export interface CalibrationCreate { 
		"id"?: string;
		"name"?: string;
		"calibrator"?: Models.User;
		"agent"?: Models.User;
		"conversation": Models.Conversation;
		"evaluationForm"?: Models.EvaluationForm;
		"contextId"?: string;
		"averageScore"?: number;
		"highScore"?: number;
		"lowScore"?: number;
		"createdDate"?: string;
		"evaluations"?: Array<Models.Evaluation>;
		"evaluators"?: Array<Models.User>;
		"scoringIndex"?: Models.Evaluation;
		"expertEvaluator"?: Models.User;
		"selfUri"?: string;
	}
	
	export interface CalibrationEntityListing { 
		"entities"?: Array<Models.Calibration>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface Call { 
		"state"?: string;
		"id"?: string;
		"direction"?: string;
		"recording"?: boolean;
		"recordingState"?: string;
		"muted"?: boolean;
		"confined"?: boolean;
		"held"?: boolean;
		"recordingId"?: string;
		"segments"?: Array<Models.Segment>;
		"errorInfo"?: Models.ErrorInfo;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"documentId"?: string;
		"startAlertingTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"disconnectReasons"?: Array<Models.DisconnectReason>;
		"faxStatus"?: Models.FaxStatus;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"uuiData"?: string;
		"self"?: Models.Address;
		"other"?: Models.Address;
	}
	
	export interface CallBasic { 
		"state"?: string;
		"id"?: string;
		"direction"?: string;
		"recording"?: boolean;
		"recordingState"?: string;
		"muted"?: boolean;
		"confined"?: boolean;
		"held"?: boolean;
		"recordingId"?: string;
		"segments"?: Array<Models.Segment>;
		"errorInfo"?: Models.ErrorInfo;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"documentId"?: string;
		"startAlertingTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"disconnectReasons"?: Array<Models.DisconnectReason>;
		"faxStatus"?: Models.FaxStatus;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"uuiData"?: string;
		"self"?: Models.Address;
		"other"?: Models.Address;
	}
	
	export interface CallCommand { 
		"callNumber": string;
		"phoneColumn"?: string;
	}
	
	export interface CallConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.CallMediaParticipant>;
		"otherMediaUris"?: Array<string>;
		"recordingState"?: string;
		"maxParticipants"?: number;
		"selfUri"?: string;
	}
	
	export interface CallConversationEntityListing { 
		"entities"?: Array<Models.CallConversation>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface CallForwarding { 
		"id"?: string;
		"name"?: string;
		"user"?: Models.User;
		"enabled"?: boolean;
		"phoneNumber"?: string;
		"calls"?: Array<Models.CallRoute>;
		"voicemail"?: string;
		"modifiedDate"?: string;
		"selfUri"?: string;
	}
	
	export interface CallForwardingEventCall { 
		"targets"?: Array<Models.CallForwardingEventTarget>;
	}
	
	export interface CallForwardingEventCallForwarding { 
		"user"?: Models.CallForwardingEventUser;
		"enabled"?: boolean;
		"calls"?: Array<Models.CallForwardingEventCall>;
		"voicemail"?: string;
		"modifiedDate"?: string;
	}
	
	export interface CallForwardingEventTarget { 
		"type"?: string;
		"value"?: string;
	}
	
	export interface CallForwardingEventUser { 
		"id"?: string;
	}
	
	export interface CallHistoryConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.CallHistoryParticipant>;
		"direction"?: string;
		"wentToVoicemail"?: boolean;
		"missedCall"?: boolean;
		"startTime"?: string;
		"wasConference"?: boolean;
		"wasCallback"?: boolean;
		"hadScreenShare"?: boolean;
		"hadCobrowse"?: boolean;
		"wasOutboundCampaign"?: boolean;
		"selfUri"?: string;
	}
	
	export interface CallHistoryConversationEntityListing { 
		"entities"?: Array<Models.CallHistoryConversation>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface CallHistoryParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"endTime"?: string;
		"purpose"?: string;
		"direction"?: string;
		"ani"?: string;
		"dnis"?: string;
		"user"?: Models.User;
		"queue"?: Models.Queue;
		"group"?: Models.Group;
		"disconnectType"?: string;
		"externalContact"?: Models.ExternalContact;
		"externalOrganization"?: Models.ExternalOrganization;
		"didInteract"?: boolean;
		"sipResponseCodes"?: Array<number>;
		"flaggedReason"?: string;
		"outboundCampaign"?: Models.Campaign;
	}
	
	export interface CallMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.DomainEntityRef;
		"queue"?: Models.DomainEntityRef;
		"team"?: Models.DomainEntityRef;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.ErrorInfo;
		"script"?: Models.DomainEntityRef;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.DomainEntityRef;
		"externalOrganization"?: Models.DomainEntityRef;
		"wrapup"?: Models.Wrapup;
		"peer"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.JourneyContext;
		"conversationRoutingData"?: Models.ConversationRoutingData;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"muted"?: boolean;
		"confined"?: boolean;
		"recording"?: boolean;
		"recordingState"?: string;
		"group"?: Models.DomainEntityRef;
		"ani"?: string;
		"dnis"?: string;
		"documentId"?: string;
		"faxStatus"?: Models.FaxStatus;
		"monitoredParticipantId"?: string;
		"consultParticipantId"?: string;
		"uuiData"?: string;
	}
	
	export interface CallMediaPolicy { 
		"actions"?: Models.PolicyActions;
		"conditions"?: Models.CallMediaPolicyConditions;
	}
	
	export interface CallMediaPolicyConditions { 
		"forUsers"?: Array<Models.User>;
		"dateRanges"?: Array<string>;
		"forQueues"?: Array<Models.Queue>;
		"wrapupCodes"?: Array<Models.WrapupCode>;
		"languages"?: Array<Models.Language>;
		"timeAllowed"?: Models.TimeAllowed;
		"directions"?: Array<string>;
		"duration"?: Models.DurationCondition;
	}
	
	export interface CallRecord { 
		"lastAttempt"?: string;
		"lastResult"?: string;
	}
	
	export interface CallRoute { 
		"targets"?: Array<Models.CallTarget>;
	}
	
	export interface CallTarget { 
		"type"?: string;
		"value"?: string;
	}
	
	export interface CallableContactsDiagnostic { 
		"attemptLimits"?: Models.DomainEntityRef;
		"dncLists"?: Array<Models.DomainEntityRef>;
		"callableTimeSet"?: Models.DomainEntityRef;
		"ruleSets"?: Array<Models.DomainEntityRef>;
	}
	
	export interface CallableTime { 
		"timeSlots": Array<Models.CampaignTimeSlot>;
		"timeZoneId": string;
	}
	
	export interface CallableTimeSet { 
		"id"?: string;
		"name": string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"callableTimes": Array<Models.CallableTime>;
		"selfUri"?: string;
	}
	
	export interface CallableTimeSetEntityListing { 
		"entities"?: Array<Models.CallableTimeSet>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface CallableWindow { 
		"mapped"?: Models.AtzmTimeSlot;
		"unmapped"?: Models.AtzmTimeSlotWithTimeZone;
	}
	
	export interface Callback { 
		"state"?: string;
		"id"?: string;
		"segments"?: Array<Models.Segment>;
		"direction"?: string;
		"held"?: boolean;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"dialerPreview"?: Models.DialerPreview;
		"voicemail"?: Models.Voicemail;
		"callbackNumbers"?: Array<string>;
		"callbackUserName"?: string;
		"scriptId"?: string;
		"skipEnabled"?: boolean;
		"timeoutSeconds"?: number;
		"startAlertingTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"callbackScheduledTime"?: string;
		"automatedCallbackConfigId"?: string;
		"provider"?: string;
		"peerId"?: string;
	}
	
	export interface CallbackBasic { 
		"state"?: string;
		"id"?: string;
		"segments"?: Array<Models.Segment>;
		"direction"?: string;
		"held"?: boolean;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"dialerPreview"?: Models.DialerPreview;
		"voicemail"?: Models.Voicemail;
		"callbackNumbers"?: Array<string>;
		"callbackUserName"?: string;
		"scriptId"?: string;
		"skipEnabled"?: boolean;
		"timeoutSeconds"?: number;
		"startAlertingTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"callbackScheduledTime"?: string;
		"automatedCallbackConfigId"?: string;
		"provider"?: string;
		"peerId"?: string;
	}
	
	export interface CallbackConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.CallbackMediaParticipant>;
		"otherMediaUris"?: Array<string>;
		"selfUri"?: string;
	}
	
	export interface CallbackConversationEntityListing { 
		"entities"?: Array<Models.CallbackConversation>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface CallbackIdentifier { 
		"type": string;
		"id": string;
	}
	
	export interface CallbackMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.DomainEntityRef;
		"queue"?: Models.DomainEntityRef;
		"team"?: Models.DomainEntityRef;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.ErrorInfo;
		"script"?: Models.DomainEntityRef;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.DomainEntityRef;
		"externalOrganization"?: Models.DomainEntityRef;
		"wrapup"?: Models.Wrapup;
		"peer"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.JourneyContext;
		"conversationRoutingData"?: Models.ConversationRoutingData;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"outboundPreview"?: Models.DialerPreview;
		"voicemail"?: Models.Voicemail;
		"callbackNumbers"?: Array<string>;
		"callbackUserName"?: string;
		"skipEnabled"?: boolean;
		"timeoutSeconds"?: number;
		"automatedCallbackConfigId"?: string;
		"callbackScheduledTime"?: string;
	}
	
	export interface Campaign { 
		"id"?: string;
		"name": string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"contactList": Models.DomainEntityRef;
		"queue"?: Models.DomainEntityRef;
		"dialingMode": string;
		"script"?: Models.DomainEntityRef;
		"edgeGroup"?: Models.DomainEntityRef;
		"site"?: Models.DomainEntityRef;
		"campaignStatus"?: string;
		"phoneColumns": Array<Models.PhoneColumn>;
		"abandonRate"?: number;
		"dncLists"?: Array<Models.DomainEntityRef>;
		"callableTimeSet"?: Models.DomainEntityRef;
		"callAnalysisResponseSet"?: Models.DomainEntityRef;
		"errors"?: Array<Models.RestErrorDetail>;
		"callerName": string;
		"callerAddress": string;
		"outboundLineCount"?: number;
		"ruleSets"?: Array<Models.DomainEntityRef>;
		"skipPreviewDisabled"?: boolean;
		"previewTimeOutSeconds"?: number;
		"alwaysRunning"?: boolean;
		"contactSort"?: Models.ContactSort;
		"contactSorts"?: Array<Models.ContactSort>;
		"noAnswerTimeout"?: number;
		"callAnalysisLanguage"?: string;
		"priority"?: number;
		"contactListFilters"?: Array<Models.DomainEntityRef>;
		"division"?: Models.DomainEntityRef;
		"selfUri"?: string;
	}
	
	export interface CampaignDiagnostics { 
		"callableContacts"?: Models.CallableContactsDiagnostic;
		"queueUtilizationDiagnostic"?: Models.QueueUtilizationDiagnostic;
		"ruleSetDiagnostics"?: Array<Models.RuleSetDiagnostic>;
		"outstandingInteractionsCount"?: number;
		"scheduledInteractionsCount"?: number;
	}
	
	export interface CampaignDivisionView { 
		"id"?: string;
		"name"?: string;
		"division"?: Models.Division;
		"selfUri"?: string;
	}
	
	export interface CampaignDivisionViewListing { 
		"entities"?: Array<Models.CampaignDivisionView>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface CampaignEntityListing { 
		"entities"?: Array<Models.Campaign>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface CampaignInteraction { 
		"id"?: string;
		"campaign"?: Models.DomainEntityRef;
		"agent"?: Models.DomainEntityRef;
		"contact"?: Models.DomainEntityRef;
		"destinationAddress"?: string;
		"activePreviewCall"?: boolean;
		"lastActivePreviewWrapupTime"?: string;
		"creationTime"?: string;
		"callPlacedTime"?: string;
		"callRoutedTime"?: string;
		"previewConnectedTime"?: string;
		"queue"?: Models.DomainEntityRef;
		"script"?: Models.DomainEntityRef;
		"disposition"?: string;
		"callerName"?: string;
		"callerAddress"?: string;
		"previewPopDeliveredTime"?: string;
		"conversation"?: Models.ConversationBasic;
		"dialerSystemParticipantId"?: string;
		"dialingMode"?: string;
		"skills"?: Array<Models.DomainEntityRef>;
	}
	
	export interface CampaignInteractions { 
		"campaign"?: Models.DomainEntityRef;
		"pendingInteractions"?: Array<Models.CampaignInteraction>;
		"proceedingInteractions"?: Array<Models.CampaignInteraction>;
		"previewingInteractions"?: Array<Models.CampaignInteraction>;
		"interactingInteractions"?: Array<Models.CampaignInteraction>;
		"scheduledInteractions"?: Array<Models.CampaignInteraction>;
	}
	
	export interface CampaignProgress { 
		"campaign": Models.DomainEntityRef;
		"contactList": Models.DomainEntityRef;
		"numberOfContactsCalled"?: number;
		"numberOfContactsMessaged"?: number;
		"totalNumberOfContacts"?: number;
		"percentage"?: number;
	}
	
	export interface CampaignRule { 
		"id"?: string;
		"name": string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"campaignRuleEntities": Models.CampaignRuleEntities;
		"campaignRuleConditions": Array<Models.CampaignRuleCondition>;
		"campaignRuleActions": Array<Models.CampaignRuleAction>;
		"matchAnyConditions"?: boolean;
		"enabled"?: boolean;
		"selfUri"?: string;
	}
	
	export interface CampaignRuleAction { 
		"id"?: string;
		"parameters"?: Models.CampaignRuleParameters;
		"actionType": string;
		"campaignRuleActionEntities": Models.CampaignRuleActionEntities;
	}
	
	export interface CampaignRuleActionEntities { 
		"campaigns"?: Array<Models.DomainEntityRef>;
		"sequences"?: Array<Models.DomainEntityRef>;
		"useTriggeringEntity"?: boolean;
	}
	
	export interface CampaignRuleCondition { 
		"id"?: string;
		"parameters": Models.CampaignRuleParameters;
		"conditionType": string;
	}
	
	export interface CampaignRuleEntities { 
		"campaigns"?: Array<Models.DomainEntityRef>;
		"sequences"?: Array<Models.DomainEntityRef>;
	}
	
	export interface CampaignRuleEntityListing { 
		"entities"?: Array<Models.CampaignRule>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface CampaignRuleParameters { 
		"operator"?: string;
		"value"?: string;
		"priority"?: string;
		"dialingMode"?: string;
	}
	
	export interface CampaignSchedule { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"intervals": Array<Models.ScheduleInterval>;
		"timeZone": string;
		"campaign": Models.DomainEntityRef;
		"selfUri"?: string;
	}
	
	export interface CampaignSequence { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"campaigns": Array<Models.DomainEntityRef>;
		"currentCampaign": number;
		"status": string;
		"stopMessage"?: string;
		"repeat"?: boolean;
		"selfUri"?: string;
	}
	
	export interface CampaignSequenceEntityListing { 
		"entities"?: Array<Models.CampaignSequence>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface CampaignStats { 
		"contactRate"?: Models.ConnectRate;
		"idleAgents"?: number;
		"effectiveIdleAgents"?: number;
		"adjustedCallsPerAgent"?: number;
		"outstandingCalls"?: number;
		"scheduledCalls"?: number;
	}
	
	export interface CampaignTimeSlot { 
		"startTime": string;
		"stopTime": string;
		"day": number;
	}
	
	export interface Category { 
		"name"?: string;
	}
	
	export interface CategoryEntityListing { 
		"entities"?: Array<Models.Category>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"pageCount"?: number;
	}
	
	export interface Certificate { 
		"certificate": string;
	}
	
	export interface CertificateAuthorityEntityListing { 
		"entities"?: Array<Models.DomainCertificateAuthority>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface CertificateDetails { 
		"issuer"?: string;
		"subject"?: string;
		"expirationDate"?: string;
		"issueDate"?: string;
		"expired"?: boolean;
		"signatureValid"?: boolean;
		"valid"?: boolean;
	}
	
	export interface Change { 
		"entity"?: Models.AuditEntity;
		"property"?: string;
		"oldValues"?: Array<string>;
		"newValues"?: Array<string>;
	}
	
	export interface ChangeMyPasswordRequest { 
		"newPassword": string;
		"oldPassword": string;
	}
	
	export interface ChangePasswordRequest { 
		"newPassword": string;
	}
	
	export interface Channel { 
		"connectUri"?: string;
		"id"?: string;
		"expires"?: string;
	}
	
	export interface ChannelEntityListing { 
		"entities"?: Array<Models.Channel>;
	}
	
	export interface ChannelTopic { 
		"id"?: string;
		"selfUri"?: string;
	}
	
	export interface ChannelTopicEntityListing { 
		"entities"?: Array<Models.ChannelTopic>;
	}
	
	export interface Chat { 
		"jabberId"?: string;
	}
	
	export interface ChatBadgeTopicBadgeEntity { 
		"jabberId"?: string;
	}
	
	export interface ChatBadgeTopicChatBadge { 
		"entity"?: Models.ChatBadgeTopicBadgeEntity;
		"unreadCount"?: number;
		"lastUnreadNotificationDate"?: string;
	}
	
	export interface ChatConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.ChatMediaParticipant>;
		"otherMediaUris"?: Array<string>;
		"selfUri"?: string;
	}
	
	export interface ChatConversationEntityListing { 
		"entities"?: Array<Models.ChatConversation>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ChatMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.DomainEntityRef;
		"queue"?: Models.DomainEntityRef;
		"team"?: Models.DomainEntityRef;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.ErrorInfo;
		"script"?: Models.DomainEntityRef;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.DomainEntityRef;
		"externalOrganization"?: Models.DomainEntityRef;
		"wrapup"?: Models.Wrapup;
		"peer"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.JourneyContext;
		"conversationRoutingData"?: Models.ConversationRoutingData;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"roomId"?: string;
		"avatarImageUrl"?: string;
	}
	
	export interface ChatMediaPolicy { 
		"actions"?: Models.PolicyActions;
		"conditions"?: Models.ChatMediaPolicyConditions;
	}
	
	export interface ChatMediaPolicyConditions { 
		"forUsers"?: Array<Models.User>;
		"dateRanges"?: Array<string>;
		"forQueues"?: Array<Models.Queue>;
		"wrapupCodes"?: Array<Models.WrapupCode>;
		"languages"?: Array<Models.Language>;
		"timeAllowed"?: Models.TimeAllowed;
		"duration"?: Models.DurationCondition;
	}
	
	export interface ChatMessage { 
		"body"?: string;
		"id"?: string;
		"to"?: string;
		"from"?: string;
		"utc"?: string;
		"chat"?: string;
		"message"?: string;
		"type"?: string;
		"bodyType"?: string;
		"senderCommunicationId"?: string;
		"participantPurpose"?: string;
		"user"?: Models.ChatMessageUser;
	}
	
	export interface ChatMessageUser { 
		"id"?: string;
		"name"?: string;
		"displayName"?: string;
		"username"?: string;
		"images"?: Array<Models.UserImage>;
	}
	
	export interface ClientApp { 
		"id"?: string;
		"name"?: string;
		"integrationType"?: Models.IntegrationType;
		"notes"?: string;
		"intendedState": string;
		"config"?: Models.ClientAppConfigurationInfo;
		"reportedState"?: Models.IntegrationStatusInfo;
		"attributes"?: { [key: string]: string; };
		"selfUri"?: string;
	}
	
	export interface ClientAppConfigurationInfo { 
		"current"?: Models.IntegrationConfiguration;
		"effective"?: Models.EffectiveConfiguration;
	}
	
	export interface ClientAppEntityListing { 
		"entities"?: Array<Models.ClientApp>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface CobrowseConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.CobrowseMediaParticipant>;
		"otherMediaUris"?: Array<string>;
		"selfUri"?: string;
	}
	
	export interface CobrowseConversationEntityListing { 
		"entities"?: Array<Models.CobrowseConversation>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface CobrowseMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.DomainEntityRef;
		"queue"?: Models.DomainEntityRef;
		"team"?: Models.DomainEntityRef;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.ErrorInfo;
		"script"?: Models.DomainEntityRef;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.DomainEntityRef;
		"externalOrganization"?: Models.DomainEntityRef;
		"wrapup"?: Models.Wrapup;
		"peer"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.JourneyContext;
		"conversationRoutingData"?: Models.ConversationRoutingData;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"cobrowseSessionId"?: string;
		"cobrowseRole"?: string;
		"controlling"?: Array<string>;
		"viewerUrl"?: string;
		"providerEventTime"?: string;
	}
	
	export interface Cobrowsesession { 
		"state"?: string;
		"id"?: string;
		"disconnectType"?: string;
		"self"?: Models.Address;
		"cobrowseSessionId"?: string;
		"cobrowseRole"?: string;
		"controlling"?: Array<string>;
		"viewerUrl"?: string;
		"providerEventTime"?: string;
		"startAlertingTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"provider"?: string;
		"peerId"?: string;
		"segments"?: Array<Models.Segment>;
	}
	
	export interface CommandStatus { 
		"id"?: string;
		"name"?: string;
		"expiration"?: string;
		"userId"?: string;
		"statusCode"?: string;
		"commandType"?: string;
		"document"?: Models.Document;
		"selfUri"?: string;
	}
	
	export interface CommandStatusEntityListing { 
		"entities"?: Array<Models.CommandStatus>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface Condition { 
		"type"?: string;
		"inverted"?: boolean;
		"attributeName"?: string;
		"value"?: string;
		"valueType"?: string;
		"operator"?: string;
		"codes"?: Array<string>;
		"property"?: string;
		"propertyType"?: string;
	}
	
	export interface ConnectRate { 
		"attempts"?: number;
		"connects"?: number;
		"connectRatio"?: number;
	}
	
	export interface ConsultTransfer { 
		"speakTo"?: string;
		"destination": Models.Destination;
	}
	
	export interface ConsultTransferResponse { 
		"destinationParticipantId": string;
	}
	
	export interface ConsultTransferUpdate { 
		"speakTo": string;
	}
	
	export interface ConsumedResourcesEntityListing { 
		"entities"?: Array<Models.Dependency>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ConsumingResourcesEntityListing { 
		"entities"?: Array<Models.Dependency>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface Contact { 
		"address"?: string;
		"display"?: string;
		"mediaType"?: string;
		"type"?: string;
		"extension"?: string;
	}
	
	export interface ContactAddress { 
		"address1"?: string;
		"address2"?: string;
		"city"?: string;
		"state"?: string;
		"postalCode"?: string;
		"countryCode"?: string;
	}
	
	export interface ContactCallbackRequest { 
		"campaignId": string;
		"contactListId": string;
		"contactId": string;
		"phoneColumn": string;
		"schedule": string;
	}
	
	export interface ContactCenterSettings { 
		"removeSkillsFromBlindTransfer"?: boolean;
	}
	
	export interface ContactColumnTimeZone { 
		"timeZone"?: string;
		"columnType"?: string;
	}
	
	export interface ContactColumnToDataActionFieldMapping { 
	}
	
	export interface ContactList { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"division"?: Models.DomainEntityRef;
		"columnNames": Array<string>;
		"phoneColumns": Array<Models.ContactPhoneNumberColumn>;
		"importStatus"?: Models.ImportStatus;
		"previewModeColumnName"?: string;
		"previewModeAcceptedValues"?: Array<string>;
		"size"?: number;
		"attemptLimits"?: Models.DomainEntityRef;
		"automaticTimeZoneMapping"?: boolean;
		"zipCodeColumnName"?: string;
		"selfUri"?: string;
	}
	
	export interface ContactListDivisionView { 
		"id"?: string;
		"name"?: string;
		"division"?: Models.Division;
		"columnNames": Array<string>;
		"phoneColumns": Array<Models.ContactPhoneNumberColumn>;
		"importStatus"?: Models.ImportStatus;
		"size"?: number;
		"selfUri"?: string;
	}
	
	export interface ContactListDivisionViewListing { 
		"entities"?: Array<Models.ContactListDivisionView>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ContactListEntityListing { 
		"entities"?: Array<Models.ContactList>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ContactListFilter { 
		"id"?: string;
		"name": string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"contactList": Models.DomainEntityRef;
		"clauses"?: Array<Models.ContactListFilterClause>;
		"filterType"?: string;
		"selfUri"?: string;
	}
	
	export interface ContactListFilterClause { 
		"filterType"?: string;
		"predicates"?: Array<Models.ContactListFilterPredicate>;
	}
	
	export interface ContactListFilterEntityListing { 
		"entities"?: Array<Models.ContactListFilter>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ContactListFilterPredicate { 
		"column"?: string;
		"columnType"?: string;
		"operator"?: string;
		"value"?: string;
		"range"?: Models.ContactListFilterRange;
		"inverted"?: boolean;
	}
	
	export interface ContactListFilterRange { 
		"min"?: string;
		"max"?: string;
		"minInclusive"?: boolean;
		"maxInclusive"?: boolean;
		"inSet"?: Array<string>;
	}
	
	export interface ContactListing { 
		"entities"?: Array<Models.ExternalContact>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ContactPhoneNumberColumn { 
		"columnName": string;
		"type": string;
		"callableTimeColumn"?: string;
	}
	
	export interface ContactSort { 
		"fieldName"?: string;
		"direction"?: string;
		"numeric"?: boolean;
	}
	
	export interface ContactlistDownloadReadyExportUri { 
		"uri"?: string;
		"exportTimestamp"?: string;
		"additionalProperties"?: object;
	}
	
	export interface ContactlistImportStatusImportStatus { 
		"importState"?: string;
		"totalRecords"?: number;
		"completedRecords"?: number;
		"percentageComplete"?: number;
		"failureReason"?: string;
		"additionalProperties"?: object;
	}
	
	export interface ContentAttributeFilterItem { 
		"id"?: string;
		"operator"?: string;
		"values"?: Array<string>;
	}
	
	export interface ContentFacetFilterItem { 
		"name"?: string;
		"type"?: string;
		"operator"?: string;
		"values"?: Array<string>;
	}
	
	export interface ContentFilterItem { 
		"name"?: string;
		"type"?: string;
		"operator"?: string;
		"values"?: Array<string>;
	}
	
	export interface ContentManagementSingleDocumentTopicDocumentDataV2 { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"workspace"?: Models.ContentManagementSingleDocumentTopicWorkspaceData;
		"createdBy"?: Models.ContentManagementSingleDocumentTopicUserData;
		"contentType"?: string;
		"contentLength"?: number;
		"filename"?: string;
		"changeNumber"?: number;
		"dateUploaded"?: string;
		"uploadedBy"?: Models.ContentManagementSingleDocumentTopicUserData;
		"lockInfo"?: Models.ContentManagementSingleDocumentTopicLockData;
		"selfUri"?: string;
	}
	
	export interface ContentManagementSingleDocumentTopicLockData { 
		"lockedBy"?: Models.ContentManagementSingleDocumentTopicUserData;
		"dateCreated"?: string;
		"dateExpires"?: string;
	}
	
	export interface ContentManagementSingleDocumentTopicUserData { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface ContentManagementSingleDocumentTopicWorkspaceData { 
		"id"?: string;
	}
	
	export interface ContentManagementWorkspaceDocumentsTopicDocumentDataV2 { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"workspace"?: Models.ContentManagementWorkspaceDocumentsTopicWorkspaceData;
		"createdBy"?: Models.ContentManagementWorkspaceDocumentsTopicUserData;
		"contentType"?: string;
		"contentLength"?: number;
		"filename"?: string;
		"changeNumber"?: number;
		"dateUploaded"?: string;
		"uploadedBy"?: Models.ContentManagementWorkspaceDocumentsTopicUserData;
		"lockInfo"?: Models.ContentManagementWorkspaceDocumentsTopicLockData;
		"selfUri"?: string;
	}
	
	export interface ContentManagementWorkspaceDocumentsTopicLockData { 
		"lockedBy"?: Models.ContentManagementWorkspaceDocumentsTopicUserData;
		"dateCreated"?: string;
		"dateExpires"?: string;
	}
	
	export interface ContentManagementWorkspaceDocumentsTopicUserData { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface ContentManagementWorkspaceDocumentsTopicWorkspaceData { 
		"id"?: string;
	}
	
	export interface ContentQueryRequest { 
		"queryPhrase"?: string;
		"pageNumber"?: number;
		"pageSize"?: number;
		"facetNameRequests"?: Array<string>;
		"sort"?: Array<Models.ContentSortItem>;
		"filters"?: Array<Models.ContentFacetFilterItem>;
		"attributeFilters"?: Array<Models.ContentAttributeFilterItem>;
		"includeShares"?: boolean;
	}
	
	export interface ContentSortItem { 
		"name"?: string;
		"ascending"?: boolean;
	}
	
	export interface Conversation { 
		"id"?: string;
		"name"?: string;
		"startTime": string;
		"endTime"?: string;
		"address"?: string;
		"participants": Array<Models.Participant>;
		"conversationIds"?: Array<string>;
		"maxParticipants"?: number;
		"recordingState"?: string;
		"state"?: string;
		"divisions"?: Array<Models.ConversationDivisionMembership>;
		"selfUri"?: string;
	}
	
	export interface ConversationAggregateDataContainer { 
		"group"?: { [key: string]: string; };
		"data"?: Array<Models.StatisticalResponse>;
	}
	
	export interface ConversationAggregateQueryClause { 
		"type": string;
		"predicates": Array<Models.ConversationAggregateQueryPredicate>;
	}
	
	export interface ConversationAggregateQueryFilter { 
		"type": string;
		"clauses"?: Array<Models.ConversationAggregateQueryClause>;
		"predicates"?: Array<Models.ConversationAggregateQueryPredicate>;
	}
	
	export interface ConversationAggregateQueryPredicate { 
		"type"?: string;
		"dimension"?: string;
		"operator"?: string;
		"value"?: string;
		"range"?: Models.NumericRange;
	}
	
	export interface ConversationAggregateQueryResponse { 
		"results"?: Array<Models.ConversationAggregateDataContainer>;
	}
	
	export interface ConversationAggregationQuery { 
		"interval": string;
		"granularity"?: string;
		"timeZone"?: string;
		"groupBy"?: Array<string>;
		"filter"?: Models.ConversationAggregateQueryFilter;
		"metrics"?: Array<string>;
		"flattenMultivaluedDimensions"?: boolean;
		"views"?: Array<Models.ConversationAggregationView>;
		"alternateTimeDimension"?: string;
	}
	
	export interface ConversationAggregationView { 
		"target": string;
		"name": string;
		"function": string;
		"range"?: Models.AggregationRange;
	}
	
	export interface ConversationAssociation { 
		"externalContactId"?: string;
		"conversationId": string;
		"communicationId": string;
		"mediaType": string;
	}
	
	export interface ConversationBasic { 
		"id"?: string;
		"name"?: string;
		"startTime": string;
		"endTime"?: string;
		"divisions"?: Array<Models.ConversationDivisionMembership>;
		"selfUri"?: string;
		"participants"?: Array<Models.ParticipantBasic>;
	}
	
	export interface ConversationCallEventTopicCallConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.ConversationCallEventTopicCallMediaParticipant>;
		"otherMediaUris"?: Array<string>;
		"recordingState"?: string;
		"maxParticipants"?: number;
	}
	
	export interface ConversationCallEventTopicCallMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.ConversationCallEventTopicUriReference;
		"queue"?: Models.ConversationCallEventTopicUriReference;
		"team"?: Models.ConversationCallEventTopicUriReference;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.ConversationCallEventTopicErrorBody;
		"script"?: Models.ConversationCallEventTopicUriReference;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.ConversationCallEventTopicUriReference;
		"externalOrganization"?: Models.ConversationCallEventTopicUriReference;
		"wrapup"?: Models.ConversationCallEventTopicWrapup;
		"conversationRoutingData"?: Models.ConversationCallEventTopicConversationRoutingData;
		"peer"?: string;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.ConversationCallEventTopicJourneyContext;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"muted"?: boolean;
		"confined"?: boolean;
		"recording"?: boolean;
		"recordingState"?: string;
		"group"?: Models.ConversationCallEventTopicUriReference;
		"ani"?: string;
		"dnis"?: string;
		"documentId"?: string;
		"monitoredParticipantId"?: string;
		"consultParticipantId"?: string;
		"faxStatus"?: Models.ConversationCallEventTopicFaxStatus;
	}
	
	export interface ConversationCallEventTopicConversationRoutingData { 
		"queue"?: Models.ConversationCallEventTopicUriReference;
		"language"?: Models.ConversationCallEventTopicUriReference;
		"priority"?: number;
		"skills"?: Array<Models.ConversationCallEventTopicUriReference>;
		"scoredAgents"?: Array<Models.ConversationCallEventTopicScoredAgent>;
	}
	
	export interface ConversationCallEventTopicDetail { 
		"errorCode"?: string;
		"fieldName"?: string;
		"entityId"?: string;
		"entityName"?: string;
	}
	
	export interface ConversationCallEventTopicErrorBody { 
		"status"?: number;
		"code"?: string;
		"entityId"?: string;
		"entityName"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"contextId"?: string;
		"details"?: Array<Models.ConversationCallEventTopicDetail>;
		"errors"?: Array<Models.ConversationCallEventTopicErrorBody>;
	}
	
	export interface ConversationCallEventTopicFaxStatus { 
		"direction"?: string;
		"expectedPages"?: number;
		"activePage"?: number;
		"linesTransmitted"?: number;
		"bytesTransmitted"?: number;
		"dataRate"?: number;
		"pageErrors"?: number;
		"lineErrors"?: number;
	}
	
	export interface ConversationCallEventTopicJourneyAction { 
		"id"?: string;
		"actionMap"?: Models.ConversationCallEventTopicJourneyActionMap;
	}
	
	export interface ConversationCallEventTopicJourneyActionMap { 
		"id"?: string;
		"version"?: number;
	}
	
	export interface ConversationCallEventTopicJourneyContext { 
		"customer"?: Models.ConversationCallEventTopicJourneyCustomer;
		"customerSession"?: Models.ConversationCallEventTopicJourneyCustomerSession;
		"triggeringAction"?: Models.ConversationCallEventTopicJourneyAction;
	}
	
	export interface ConversationCallEventTopicJourneyCustomer { 
		"id"?: string;
		"idType"?: string;
	}
	
	export interface ConversationCallEventTopicJourneyCustomerSession { 
		"id"?: string;
		"type"?: string;
	}
	
	export interface ConversationCallEventTopicScoredAgent { 
		"agent"?: Models.ConversationCallEventTopicUriReference;
		"score"?: number;
	}
	
	export interface ConversationCallEventTopicUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface ConversationCallEventTopicWrapup { 
		"code"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface ConversationCallbackEventTopicCallbackConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.ConversationCallbackEventTopicCallbackMediaParticipant>;
		"otherMediaUris"?: Array<string>;
	}
	
	export interface ConversationCallbackEventTopicCallbackMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.ConversationCallbackEventTopicUriReference;
		"queue"?: Models.ConversationCallbackEventTopicUriReference;
		"team"?: Models.ConversationCallbackEventTopicUriReference;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.ConversationCallbackEventTopicErrorBody;
		"script"?: Models.ConversationCallbackEventTopicUriReference;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.ConversationCallbackEventTopicUriReference;
		"externalOrganization"?: Models.ConversationCallbackEventTopicUriReference;
		"wrapup"?: Models.ConversationCallbackEventTopicWrapup;
		"conversationRoutingData"?: Models.ConversationCallbackEventTopicConversationRoutingData;
		"peer"?: string;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.ConversationCallbackEventTopicJourneyContext;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"outboundPreview"?: Models.ConversationCallbackEventTopicDialerPreview;
		"voicemail"?: Models.ConversationCallbackEventTopicVoicemail;
		"callbackNumbers"?: Array<string>;
		"callbackUserName"?: string;
		"skipEnabled"?: boolean;
		"timeoutSeconds"?: number;
		"callbackScheduledTime"?: string;
		"automatedCallbackConfigId"?: string;
	}
	
	export interface ConversationCallbackEventTopicConversationRoutingData { 
		"queue"?: Models.ConversationCallbackEventTopicUriReference;
		"language"?: Models.ConversationCallbackEventTopicUriReference;
		"priority"?: number;
		"skills"?: Array<Models.ConversationCallbackEventTopicUriReference>;
		"scoredAgents"?: Array<Models.ConversationCallbackEventTopicScoredAgent>;
	}
	
	export interface ConversationCallbackEventTopicDetail { 
		"errorCode"?: string;
		"fieldName"?: string;
		"entityId"?: string;
		"entityName"?: string;
	}
	
	export interface ConversationCallbackEventTopicDialerPreview { 
		"id"?: string;
		"contactId"?: string;
		"contactListId"?: string;
		"campaignId"?: string;
		"phoneNumberColumns"?: Array<Models.ConversationCallbackEventTopicPhoneNumberColumn>;
		"additionalProperties"?: object;
	}
	
	export interface ConversationCallbackEventTopicErrorBody { 
		"status"?: number;
		"code"?: string;
		"entityId"?: string;
		"entityName"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"contextId"?: string;
		"details"?: Array<Models.ConversationCallbackEventTopicDetail>;
		"errors"?: Array<Models.ConversationCallbackEventTopicErrorBody>;
	}
	
	export interface ConversationCallbackEventTopicJourneyAction { 
		"id"?: string;
		"actionMap"?: Models.ConversationCallbackEventTopicJourneyActionMap;
	}
	
	export interface ConversationCallbackEventTopicJourneyActionMap { 
		"id"?: string;
		"version"?: number;
	}
	
	export interface ConversationCallbackEventTopicJourneyContext { 
		"customer"?: Models.ConversationCallbackEventTopicJourneyCustomer;
		"customerSession"?: Models.ConversationCallbackEventTopicJourneyCustomerSession;
		"triggeringAction"?: Models.ConversationCallbackEventTopicJourneyAction;
	}
	
	export interface ConversationCallbackEventTopicJourneyCustomer { 
		"id"?: string;
		"idType"?: string;
	}
	
	export interface ConversationCallbackEventTopicJourneyCustomerSession { 
		"id"?: string;
		"type"?: string;
	}
	
	export interface ConversationCallbackEventTopicPhoneNumberColumn { 
		"columnName"?: string;
		"type"?: string;
		"additionalProperties"?: object;
	}
	
	export interface ConversationCallbackEventTopicScoredAgent { 
		"agent"?: Models.ConversationCallbackEventTopicUriReference;
		"score"?: number;
	}
	
	export interface ConversationCallbackEventTopicUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface ConversationCallbackEventTopicVoicemail { 
		"id"?: string;
		"uploadStatus"?: string;
	}
	
	export interface ConversationCallbackEventTopicWrapup { 
		"code"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface ConversationChat { 
		"state"?: string;
		"id"?: string;
		"roomId"?: string;
		"recordingId"?: string;
		"segments"?: Array<Models.Segment>;
		"held"?: boolean;
		"direction"?: string;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"startAlertingTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"avatarImageUrl"?: string;
		"journeyContext"?: Models.JourneyContext;
	}
	
	export interface ConversationChatEventTopicChatConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.ConversationChatEventTopicChatMediaParticipant>;
		"otherMediaUris"?: Array<string>;
	}
	
	export interface ConversationChatEventTopicChatMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.ConversationChatEventTopicUriReference;
		"queue"?: Models.ConversationChatEventTopicUriReference;
		"team"?: Models.ConversationChatEventTopicUriReference;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.ConversationChatEventTopicErrorBody;
		"script"?: Models.ConversationChatEventTopicUriReference;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.ConversationChatEventTopicUriReference;
		"externalOrganization"?: Models.ConversationChatEventTopicUriReference;
		"wrapup"?: Models.ConversationChatEventTopicWrapup;
		"conversationRoutingData"?: Models.ConversationChatEventTopicConversationRoutingData;
		"peer"?: string;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.ConversationChatEventTopicJourneyContext;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"roomId"?: string;
		"avatarImageUrl"?: string;
	}
	
	export interface ConversationChatEventTopicConversationRoutingData { 
		"queue"?: Models.ConversationChatEventTopicUriReference;
		"language"?: Models.ConversationChatEventTopicUriReference;
		"priority"?: number;
		"skills"?: Array<Models.ConversationChatEventTopicUriReference>;
		"scoredAgents"?: Array<Models.ConversationChatEventTopicScoredAgent>;
	}
	
	export interface ConversationChatEventTopicDetail { 
		"errorCode"?: string;
		"fieldName"?: string;
		"entityId"?: string;
		"entityName"?: string;
	}
	
	export interface ConversationChatEventTopicErrorBody { 
		"status"?: number;
		"code"?: string;
		"entityId"?: string;
		"entityName"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"contextId"?: string;
		"details"?: Array<Models.ConversationChatEventTopicDetail>;
		"errors"?: Array<Models.ConversationChatEventTopicErrorBody>;
	}
	
	export interface ConversationChatEventTopicJourneyAction { 
		"id"?: string;
		"actionMap"?: Models.ConversationChatEventTopicJourneyActionMap;
	}
	
	export interface ConversationChatEventTopicJourneyActionMap { 
		"id"?: string;
		"version"?: number;
	}
	
	export interface ConversationChatEventTopicJourneyContext { 
		"customer"?: Models.ConversationChatEventTopicJourneyCustomer;
		"customerSession"?: Models.ConversationChatEventTopicJourneyCustomerSession;
		"triggeringAction"?: Models.ConversationChatEventTopicJourneyAction;
	}
	
	export interface ConversationChatEventTopicJourneyCustomer { 
		"id"?: string;
		"idType"?: string;
	}
	
	export interface ConversationChatEventTopicJourneyCustomerSession { 
		"id"?: string;
		"type"?: string;
	}
	
	export interface ConversationChatEventTopicScoredAgent { 
		"agent"?: Models.ConversationChatEventTopicUriReference;
		"score"?: number;
	}
	
	export interface ConversationChatEventTopicUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface ConversationChatEventTopicWrapup { 
		"code"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface ConversationCobrowseEventTopicCobrowseConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.ConversationCobrowseEventTopicCobrowseMediaParticipant>;
		"otherMediaUris"?: Array<string>;
	}
	
	export interface ConversationCobrowseEventTopicCobrowseMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.ConversationCobrowseEventTopicUriReference;
		"queue"?: Models.ConversationCobrowseEventTopicUriReference;
		"team"?: Models.ConversationCobrowseEventTopicUriReference;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.ConversationCobrowseEventTopicErrorBody;
		"script"?: Models.ConversationCobrowseEventTopicUriReference;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.ConversationCobrowseEventTopicUriReference;
		"externalOrganization"?: Models.ConversationCobrowseEventTopicUriReference;
		"wrapup"?: Models.ConversationCobrowseEventTopicWrapup;
		"conversationRoutingData"?: Models.ConversationCobrowseEventTopicConversationRoutingData;
		"peer"?: string;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.ConversationCobrowseEventTopicJourneyContext;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"cobrowseSessionId"?: string;
		"cobrowseRole"?: string;
		"viewerUrl"?: string;
		"providerEventTime"?: string;
		"controlling"?: Array<string>;
	}
	
	export interface ConversationCobrowseEventTopicConversationRoutingData { 
		"queue"?: Models.ConversationCobrowseEventTopicUriReference;
		"language"?: Models.ConversationCobrowseEventTopicUriReference;
		"priority"?: number;
		"skills"?: Array<Models.ConversationCobrowseEventTopicUriReference>;
		"scoredAgents"?: Array<Models.ConversationCobrowseEventTopicScoredAgent>;
	}
	
	export interface ConversationCobrowseEventTopicDetail { 
		"errorCode"?: string;
		"fieldName"?: string;
		"entityId"?: string;
		"entityName"?: string;
	}
	
	export interface ConversationCobrowseEventTopicErrorBody { 
		"status"?: number;
		"code"?: string;
		"entityId"?: string;
		"entityName"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"contextId"?: string;
		"details"?: Array<Models.ConversationCobrowseEventTopicDetail>;
		"errors"?: Array<Models.ConversationCobrowseEventTopicErrorBody>;
	}
	
	export interface ConversationCobrowseEventTopicJourneyAction { 
		"id"?: string;
		"actionMap"?: Models.ConversationCobrowseEventTopicJourneyActionMap;
	}
	
	export interface ConversationCobrowseEventTopicJourneyActionMap { 
		"id"?: string;
		"version"?: number;
	}
	
	export interface ConversationCobrowseEventTopicJourneyContext { 
		"customer"?: Models.ConversationCobrowseEventTopicJourneyCustomer;
		"customerSession"?: Models.ConversationCobrowseEventTopicJourneyCustomerSession;
		"triggeringAction"?: Models.ConversationCobrowseEventTopicJourneyAction;
	}
	
	export interface ConversationCobrowseEventTopicJourneyCustomer { 
		"id"?: string;
		"idType"?: string;
	}
	
	export interface ConversationCobrowseEventTopicJourneyCustomerSession { 
		"id"?: string;
		"type"?: string;
	}
	
	export interface ConversationCobrowseEventTopicScoredAgent { 
		"agent"?: Models.ConversationCobrowseEventTopicUriReference;
		"score"?: number;
	}
	
	export interface ConversationCobrowseEventTopicUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface ConversationCobrowseEventTopicWrapup { 
		"code"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface ConversationDetailQueryClause { 
		"type": string;
		"predicates": Array<Models.ConversationDetailQueryPredicate>;
	}
	
	export interface ConversationDetailQueryFilter { 
		"type": string;
		"clauses"?: Array<Models.ConversationDetailQueryClause>;
		"predicates"?: Array<Models.ConversationDetailQueryPredicate>;
	}
	
	export interface ConversationDetailQueryPredicate { 
		"type"?: string;
		"dimension"?: string;
		"metric"?: string;
		"operator"?: string;
		"value"?: string;
		"range"?: Models.NumericRange;
	}
	
	export interface ConversationDivisionMembership { 
		"division"?: Models.DomainEntityRef;
		"entities"?: Array<Models.DomainEntityRef>;
	}
	
	export interface ConversationEmailEventTopicAttachment { 
		"attachmentId"?: string;
		"name"?: string;
		"contentUri"?: string;
		"contentType"?: string;
		"contentLength"?: number;
		"additionalProperties"?: object;
	}
	
	export interface ConversationEmailEventTopicConversationRoutingData { 
		"queue"?: Models.ConversationEmailEventTopicUriReference;
		"language"?: Models.ConversationEmailEventTopicUriReference;
		"priority"?: number;
		"skills"?: Array<Models.ConversationEmailEventTopicUriReference>;
		"scoredAgents"?: Array<Models.ConversationEmailEventTopicScoredAgent>;
	}
	
	export interface ConversationEmailEventTopicDetail { 
		"errorCode"?: string;
		"fieldName"?: string;
		"entityId"?: string;
		"entityName"?: string;
	}
	
	export interface ConversationEmailEventTopicEmailConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.ConversationEmailEventTopicEmailMediaParticipant>;
		"otherMediaUris"?: Array<string>;
	}
	
	export interface ConversationEmailEventTopicEmailMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.ConversationEmailEventTopicUriReference;
		"queue"?: Models.ConversationEmailEventTopicUriReference;
		"team"?: Models.ConversationEmailEventTopicUriReference;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.ConversationEmailEventTopicErrorBody;
		"script"?: Models.ConversationEmailEventTopicUriReference;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.ConversationEmailEventTopicUriReference;
		"externalOrganization"?: Models.ConversationEmailEventTopicUriReference;
		"wrapup"?: Models.ConversationEmailEventTopicWrapup;
		"conversationRoutingData"?: Models.ConversationEmailEventTopicConversationRoutingData;
		"peer"?: string;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.ConversationEmailEventTopicJourneyContext;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"subject"?: string;
		"messagesSent"?: number;
		"autoGenerated"?: boolean;
		"messageId"?: string;
		"draftAttachments"?: Array<Models.ConversationEmailEventTopicAttachment>;
		"spam"?: boolean;
	}
	
	export interface ConversationEmailEventTopicErrorBody { 
		"status"?: number;
		"code"?: string;
		"entityId"?: string;
		"entityName"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"contextId"?: string;
		"details"?: Array<Models.ConversationEmailEventTopicDetail>;
		"errors"?: Array<Models.ConversationEmailEventTopicErrorBody>;
	}
	
	export interface ConversationEmailEventTopicJourneyAction { 
		"id"?: string;
		"actionMap"?: Models.ConversationEmailEventTopicJourneyActionMap;
	}
	
	export interface ConversationEmailEventTopicJourneyActionMap { 
		"id"?: string;
		"version"?: number;
	}
	
	export interface ConversationEmailEventTopicJourneyContext { 
		"customer"?: Models.ConversationEmailEventTopicJourneyCustomer;
		"customerSession"?: Models.ConversationEmailEventTopicJourneyCustomerSession;
		"triggeringAction"?: Models.ConversationEmailEventTopicJourneyAction;
	}
	
	export interface ConversationEmailEventTopicJourneyCustomer { 
		"id"?: string;
		"idType"?: string;
	}
	
	export interface ConversationEmailEventTopicJourneyCustomerSession { 
		"id"?: string;
		"type"?: string;
	}
	
	export interface ConversationEmailEventTopicScoredAgent { 
		"agent"?: Models.ConversationEmailEventTopicUriReference;
		"score"?: number;
	}
	
	export interface ConversationEmailEventTopicUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface ConversationEmailEventTopicWrapup { 
		"code"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface ConversationEntityListing { 
		"entities"?: Array<Models.Conversation>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ConversationEventTopicAddress { 
		"name"?: string;
		"nameRaw"?: string;
		"addressNormalized"?: string;
		"addressRaw"?: string;
		"addressDisplayable"?: string;
		"additionalProperties"?: object;
	}
	
	export interface ConversationEventTopicAttachment { 
		"attachmentId"?: string;
		"name"?: string;
		"contentUri"?: string;
		"contentType"?: string;
		"contentLength"?: number;
		"additionalProperties"?: object;
	}
	
	export interface ConversationEventTopicCall { 
		"id"?: string;
		"state"?: string;
		"recording"?: boolean;
		"recordingState"?: string;
		"muted"?: boolean;
		"confined"?: boolean;
		"held"?: boolean;
		"errorInfo"?: Models.ConversationEventTopicErrorDetails;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"direction"?: string;
		"documentId"?: string;
		"self"?: Models.ConversationEventTopicAddress;
		"other"?: Models.ConversationEventTopicAddress;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"disconnectReasons"?: Array<Models.ConversationEventTopicDisconnectReason>;
		"faxStatus"?: Models.ConversationEventTopicFaxStatus;
		"uuiData"?: string;
		"additionalProperties"?: object;
	}
	
	export interface ConversationEventTopicCallback { 
		"state"?: string;
		"id"?: string;
		"direction"?: string;
		"held"?: boolean;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"dialerPreview"?: Models.ConversationEventTopicDialerPreview;
		"voicemail"?: Models.ConversationEventTopicVoicemail;
		"callbackNumbers"?: Array<string>;
		"callbackUserName"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"skipEnabled"?: boolean;
		"provider"?: string;
		"timeoutSeconds"?: number;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"callbackScheduledTime"?: string;
		"automatedCallbackConfigId"?: string;
		"additionalProperties"?: object;
	}
	
	export interface ConversationEventTopicChat { 
		"state"?: string;
		"id"?: string;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"roomId"?: string;
		"avatarImageUrl"?: string;
		"held"?: boolean;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"journeyContext"?: Models.ConversationEventTopicJourneyContext;
		"additionalProperties"?: object;
	}
	
	export interface ConversationEventTopicCobrowse { 
		"state"?: string;
		"disconnectType"?: string;
		"id"?: string;
		"self"?: Models.ConversationEventTopicAddress;
		"roomId"?: string;
		"cobrowseSessionId"?: string;
		"cobrowseRole"?: string;
		"controlling"?: Array<string>;
		"viewerUrl"?: string;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"providerEventTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface ConversationEventTopicConversation { 
		"id"?: string;
		"maxParticipants"?: number;
		"participants"?: Array<Models.ConversationEventTopicParticipant>;
		"recordingState"?: string;
		"address"?: string;
	}
	
	export interface ConversationEventTopicConversationRoutingData { 
		"queue"?: Models.ConversationEventTopicUriReference;
		"language"?: Models.ConversationEventTopicUriReference;
		"priority"?: number;
		"skills"?: Array<Models.ConversationEventTopicUriReference>;
		"scoredAgents"?: Array<Models.ConversationEventTopicScoredAgent>;
	}
	
	export interface ConversationEventTopicDialerPreview { 
		"id"?: string;
		"contactId"?: string;
		"contactListId"?: string;
		"campaignId"?: string;
		"phoneNumberColumns"?: Array<Models.ConversationEventTopicPhoneNumberColumn>;
		"additionalProperties"?: object;
	}
	
	export interface ConversationEventTopicDisconnectReason { 
		"type"?: string;
		"code"?: number;
		"phrase"?: string;
	}
	
	export interface ConversationEventTopicEmail { 
		"id"?: string;
		"state"?: string;
		"held"?: boolean;
		"autoGenerated"?: boolean;
		"subject"?: string;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"messagesSent"?: number;
		"errorInfo"?: Models.ConversationEventTopicErrorDetails;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"messageId"?: string;
		"direction"?: string;
		"draftAttachments"?: Array<Models.ConversationEventTopicAttachment>;
		"spam"?: boolean;
		"additionalProperties"?: object;
	}
	
	export interface ConversationEventTopicErrorDetails { 
		"status"?: number;
		"code"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"contextId"?: string;
		"uri"?: string;
		"additionalProperties"?: object;
	}
	
	export interface ConversationEventTopicFaxStatus { 
		"direction"?: string;
		"expectedPages"?: number;
		"activePage"?: number;
		"linesTransmitted"?: number;
		"bytesTransmitted"?: number;
		"baudRate"?: number;
		"pageErrors"?: number;
		"lineErrors"?: number;
	}
	
	export interface ConversationEventTopicJourneyAction { 
		"id"?: string;
		"actionMap"?: Models.ConversationEventTopicJourneyActionMap;
	}
	
	export interface ConversationEventTopicJourneyActionMap { 
		"id"?: string;
		"version"?: number;
	}
	
	export interface ConversationEventTopicJourneyContext { 
		"customer"?: Models.ConversationEventTopicJourneyCustomer;
		"customerSession"?: Models.ConversationEventTopicJourneyCustomerSession;
		"triggeringAction"?: Models.ConversationEventTopicJourneyAction;
	}
	
	export interface ConversationEventTopicJourneyCustomer { 
		"id"?: string;
		"idType"?: string;
	}
	
	export interface ConversationEventTopicJourneyCustomerSession { 
		"id"?: string;
		"type"?: string;
	}
	
	export interface ConversationEventTopicMessage { 
		"id"?: string;
		"state"?: string;
		"held"?: boolean;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"toAddress"?: Models.ConversationEventTopicAddress;
		"fromAddress"?: Models.ConversationEventTopicAddress;
		"messages"?: Array<Models.ConversationEventTopicMessageDetails>;
		"messagesTranscriptUri"?: string;
		"type"?: string;
		"recipientCountry"?: string;
		"recipientType"?: string;
		"additionalProperties"?: object;
	}
	
	export interface ConversationEventTopicMessageDetails { 
		"messageId"?: string;
		"messageTime"?: string;
		"messageStatus"?: string;
		"messageSegmentCount"?: number;
		"media"?: Array<Models.ConversationEventTopicMessageMedia>;
		"stickers"?: Array<Models.ConversationEventTopicMessageSticker>;
	}
	
	export interface ConversationEventTopicMessageMedia { 
		"url"?: string;
		"mediaType"?: string;
		"contentLengthBytes"?: number;
		"name"?: string;
		"id"?: string;
	}
	
	export interface ConversationEventTopicMessageSticker { 
		"url"?: string;
		"id"?: string;
	}
	
	export interface ConversationEventTopicParticipant { 
		"id"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"userId"?: string;
		"externalContactId"?: string;
		"externalOrganizationId"?: string;
		"name"?: string;
		"queueId"?: string;
		"groupId"?: string;
		"teamId"?: string;
		"purpose"?: string;
		"consultParticipantId"?: string;
		"address"?: string;
		"wrapupRequired"?: boolean;
		"wrapupExpected"?: boolean;
		"wrapupPrompt"?: string;
		"wrapupTimeoutMs"?: number;
		"wrapup"?: Models.ConversationEventTopicWrapup;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"conversationRoutingData"?: Models.ConversationEventTopicConversationRoutingData;
		"alertingTimeoutMs"?: number;
		"monitoredParticipantId"?: string;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"attributes"?: { [key: string]: string; };
		"calls"?: Array<Models.ConversationEventTopicCall>;
		"callbacks"?: Array<Models.ConversationEventTopicCallback>;
		"chats"?: Array<Models.ConversationEventTopicChat>;
		"cobrowsesessions"?: Array<Models.ConversationEventTopicCobrowse>;
		"emails"?: Array<Models.ConversationEventTopicEmail>;
		"messages"?: Array<Models.ConversationEventTopicMessage>;
		"screenshares"?: Array<Models.ConversationEventTopicScreenshare>;
		"socialExpressions"?: Array<Models.ConversationEventTopicSocialExpression>;
		"videos"?: Array<Models.ConversationEventTopicVideo>;
		"additionalProperties"?: object;
	}
	
	export interface ConversationEventTopicPhoneNumberColumn { 
		"columnName"?: string;
		"type"?: string;
		"additionalProperties"?: object;
	}
	
	export interface ConversationEventTopicScoredAgent { 
		"agent"?: Models.ConversationEventTopicUriReference;
		"score"?: number;
	}
	
	export interface ConversationEventTopicScreenshare { 
		"state"?: string;
		"self"?: Models.ConversationEventTopicAddress;
		"id"?: string;
		"context"?: string;
		"sharing"?: boolean;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"disconnectType"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface ConversationEventTopicSocialExpression { 
		"state"?: string;
		"id"?: string;
		"socialMediaId"?: string;
		"socialMediaHub"?: string;
		"socialUserName"?: string;
		"previewText"?: string;
		"recordingId"?: string;
		"held"?: boolean;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface ConversationEventTopicUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface ConversationEventTopicVideo { 
		"state"?: string;
		"self"?: Models.ConversationEventTopicAddress;
		"id"?: string;
		"context"?: string;
		"audioMuted"?: boolean;
		"videoMuted"?: boolean;
		"sharingScreen"?: boolean;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"disconnectType"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"msids"?: Array<string>;
		"additionalProperties"?: object;
	}
	
	export interface ConversationEventTopicVoicemail { 
		"id"?: string;
		"uploadStatus"?: string;
	}
	
	export interface ConversationEventTopicWrapup { 
		"code"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface ConversationMessageEventTopicConversationRoutingData { 
		"queue"?: Models.ConversationMessageEventTopicUriReference;
		"language"?: Models.ConversationMessageEventTopicUriReference;
		"priority"?: number;
		"skills"?: Array<Models.ConversationMessageEventTopicUriReference>;
		"scoredAgents"?: Array<Models.ConversationMessageEventTopicScoredAgent>;
	}
	
	export interface ConversationMessageEventTopicDetail { 
		"errorCode"?: string;
		"fieldName"?: string;
		"entityId"?: string;
		"entityName"?: string;
	}
	
	export interface ConversationMessageEventTopicErrorBody { 
		"status"?: number;
		"code"?: string;
		"entityId"?: string;
		"entityName"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"contextId"?: string;
		"details"?: Array<Models.ConversationMessageEventTopicDetail>;
		"errors"?: Array<Models.ConversationMessageEventTopicErrorBody>;
	}
	
	export interface ConversationMessageEventTopicJourneyAction { 
		"id"?: string;
		"actionMap"?: Models.ConversationMessageEventTopicJourneyActionMap;
	}
	
	export interface ConversationMessageEventTopicJourneyActionMap { 
		"id"?: string;
		"version"?: number;
	}
	
	export interface ConversationMessageEventTopicJourneyContext { 
		"customer"?: Models.ConversationMessageEventTopicJourneyCustomer;
		"customerSession"?: Models.ConversationMessageEventTopicJourneyCustomerSession;
		"triggeringAction"?: Models.ConversationMessageEventTopicJourneyAction;
	}
	
	export interface ConversationMessageEventTopicJourneyCustomer { 
		"id"?: string;
		"idType"?: string;
	}
	
	export interface ConversationMessageEventTopicJourneyCustomerSession { 
		"id"?: string;
		"type"?: string;
	}
	
	export interface ConversationMessageEventTopicMessageConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.ConversationMessageEventTopicMessageMediaParticipant>;
		"otherMediaUris"?: Array<string>;
	}
	
	export interface ConversationMessageEventTopicMessageDetails { 
		"message"?: Models.ConversationMessageEventTopicUriReference;
		"messageTime"?: string;
		"messageSegmentCount"?: number;
		"messageStatus"?: string;
		"media"?: Array<Models.ConversationMessageEventTopicMessageMedia>;
		"stickers"?: Array<Models.ConversationMessageEventTopicMessageSticker>;
	}
	
	export interface ConversationMessageEventTopicMessageMedia { 
		"url"?: string;
		"mediaType"?: string;
		"contentLengthBytes"?: number;
		"name"?: string;
		"id"?: string;
	}
	
	export interface ConversationMessageEventTopicMessageMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.ConversationMessageEventTopicUriReference;
		"queue"?: Models.ConversationMessageEventTopicUriReference;
		"team"?: Models.ConversationMessageEventTopicUriReference;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.ConversationMessageEventTopicErrorBody;
		"script"?: Models.ConversationMessageEventTopicUriReference;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.ConversationMessageEventTopicUriReference;
		"externalOrganization"?: Models.ConversationMessageEventTopicUriReference;
		"wrapup"?: Models.ConversationMessageEventTopicWrapup;
		"conversationRoutingData"?: Models.ConversationMessageEventTopicConversationRoutingData;
		"peer"?: string;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.ConversationMessageEventTopicJourneyContext;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"messages"?: Array<Models.ConversationMessageEventTopicMessageDetails>;
		"type"?: string;
		"recipientCountry"?: string;
		"recipientType"?: string;
	}
	
	export interface ConversationMessageEventTopicMessageSticker { 
		"url"?: string;
		"id"?: string;
	}
	
	export interface ConversationMessageEventTopicScoredAgent { 
		"agent"?: Models.ConversationMessageEventTopicUriReference;
		"score"?: number;
	}
	
	export interface ConversationMessageEventTopicUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface ConversationMessageEventTopicWrapup { 
		"code"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface ConversationProperties { 
		"isWaiting"?: boolean;
		"isActive"?: boolean;
		"isAcd"?: boolean;
		"isPreferred"?: boolean;
		"isScreenshare"?: boolean;
		"isCobrowse"?: boolean;
		"isVoicemail"?: boolean;
		"isFlagged"?: boolean;
		"isMonitored"?: boolean;
		"filterWrapUpNotes"?: boolean;
		"matchAll"?: boolean;
	}
	
	export interface ConversationQuery { 
		"interval": string;
		"conversationFilters"?: Array<Models.ConversationDetailQueryFilter>;
		"segmentFilters"?: Array<Models.SegmentDetailQueryFilter>;
		"evaluationFilters"?: Array<Models.EvaluationDetailQueryFilter>;
		"mediaEndpointStatFilters"?: Array<Models.MediaEndpointStatDetailQueryFilter>;
		"surveyFilters"?: Array<Models.SurveyDetailQueryFilter>;
		"order"?: string;
		"orderBy"?: string;
		"aggregations"?: Array<Models.AnalyticsQueryAggregation>;
		"paging"?: Models.PagingSpec;
	}
	
	export interface ConversationRoutingData { 
		"queue"?: Models.AddressableEntityRef;
		"language"?: Models.AddressableEntityRef;
		"priority"?: number;
		"skills"?: Array<Models.AddressableEntityRef>;
		"scoredAgents"?: Array<Models.ScoredAgent>;
	}
	
	export interface ConversationScreenShareEventTopicConversationRoutingData { 
		"queue"?: Models.ConversationScreenShareEventTopicUriReference;
		"language"?: Models.ConversationScreenShareEventTopicUriReference;
		"priority"?: number;
		"skills"?: Array<Models.ConversationScreenShareEventTopicUriReference>;
		"scoredAgents"?: Array<Models.ConversationScreenShareEventTopicScoredAgent>;
	}
	
	export interface ConversationScreenShareEventTopicDetail { 
		"errorCode"?: string;
		"fieldName"?: string;
		"entityId"?: string;
		"entityName"?: string;
	}
	
	export interface ConversationScreenShareEventTopicErrorBody { 
		"status"?: number;
		"code"?: string;
		"entityId"?: string;
		"entityName"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"contextId"?: string;
		"details"?: Array<Models.ConversationScreenShareEventTopicDetail>;
		"errors"?: Array<Models.ConversationScreenShareEventTopicErrorBody>;
	}
	
	export interface ConversationScreenShareEventTopicJourneyAction { 
		"id"?: string;
		"actionMap"?: Models.ConversationScreenShareEventTopicJourneyActionMap;
	}
	
	export interface ConversationScreenShareEventTopicJourneyActionMap { 
		"id"?: string;
		"version"?: number;
	}
	
	export interface ConversationScreenShareEventTopicJourneyContext { 
		"customer"?: Models.ConversationScreenShareEventTopicJourneyCustomer;
		"customerSession"?: Models.ConversationScreenShareEventTopicJourneyCustomerSession;
		"triggeringAction"?: Models.ConversationScreenShareEventTopicJourneyAction;
	}
	
	export interface ConversationScreenShareEventTopicJourneyCustomer { 
		"id"?: string;
		"idType"?: string;
	}
	
	export interface ConversationScreenShareEventTopicJourneyCustomerSession { 
		"id"?: string;
		"type"?: string;
	}
	
	export interface ConversationScreenShareEventTopicScoredAgent { 
		"agent"?: Models.ConversationScreenShareEventTopicUriReference;
		"score"?: number;
	}
	
	export interface ConversationScreenShareEventTopicScreenShareConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.ConversationScreenShareEventTopicScreenShareMediaParticipant>;
		"otherMediaUris"?: Array<string>;
	}
	
	export interface ConversationScreenShareEventTopicScreenShareMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.ConversationScreenShareEventTopicUriReference;
		"queue"?: Models.ConversationScreenShareEventTopicUriReference;
		"team"?: Models.ConversationScreenShareEventTopicUriReference;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.ConversationScreenShareEventTopicErrorBody;
		"script"?: Models.ConversationScreenShareEventTopicUriReference;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.ConversationScreenShareEventTopicUriReference;
		"externalOrganization"?: Models.ConversationScreenShareEventTopicUriReference;
		"wrapup"?: Models.ConversationScreenShareEventTopicWrapup;
		"conversationRoutingData"?: Models.ConversationScreenShareEventTopicConversationRoutingData;
		"peer"?: string;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.ConversationScreenShareEventTopicJourneyContext;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"context"?: string;
		"peerCount"?: number;
		"sharing"?: boolean;
	}
	
	export interface ConversationScreenShareEventTopicUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface ConversationScreenShareEventTopicWrapup { 
		"code"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface ConversationSocialExpressionEventTopicConversationRoutingData { 
		"queue"?: Models.ConversationSocialExpressionEventTopicUriReference;
		"language"?: Models.ConversationSocialExpressionEventTopicUriReference;
		"priority"?: number;
		"skills"?: Array<Models.ConversationSocialExpressionEventTopicUriReference>;
		"scoredAgents"?: Array<Models.ConversationSocialExpressionEventTopicScoredAgent>;
	}
	
	export interface ConversationSocialExpressionEventTopicDetail { 
		"errorCode"?: string;
		"fieldName"?: string;
		"entityId"?: string;
		"entityName"?: string;
	}
	
	export interface ConversationSocialExpressionEventTopicErrorBody { 
		"status"?: number;
		"code"?: string;
		"entityId"?: string;
		"entityName"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"contextId"?: string;
		"details"?: Array<Models.ConversationSocialExpressionEventTopicDetail>;
		"errors"?: Array<Models.ConversationSocialExpressionEventTopicErrorBody>;
	}
	
	export interface ConversationSocialExpressionEventTopicJourneyAction { 
		"id"?: string;
		"actionMap"?: Models.ConversationSocialExpressionEventTopicJourneyActionMap;
	}
	
	export interface ConversationSocialExpressionEventTopicJourneyActionMap { 
		"id"?: string;
		"version"?: number;
	}
	
	export interface ConversationSocialExpressionEventTopicJourneyContext { 
		"customer"?: Models.ConversationSocialExpressionEventTopicJourneyCustomer;
		"customerSession"?: Models.ConversationSocialExpressionEventTopicJourneyCustomerSession;
		"triggeringAction"?: Models.ConversationSocialExpressionEventTopicJourneyAction;
	}
	
	export interface ConversationSocialExpressionEventTopicJourneyCustomer { 
		"id"?: string;
		"idType"?: string;
	}
	
	export interface ConversationSocialExpressionEventTopicJourneyCustomerSession { 
		"id"?: string;
		"type"?: string;
	}
	
	export interface ConversationSocialExpressionEventTopicScoredAgent { 
		"agent"?: Models.ConversationSocialExpressionEventTopicUriReference;
		"score"?: number;
	}
	
	export interface ConversationSocialExpressionEventTopicSocialConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.ConversationSocialExpressionEventTopicSocialMediaParticipant>;
		"otherMediaUris"?: Array<string>;
	}
	
	export interface ConversationSocialExpressionEventTopicSocialMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.ConversationSocialExpressionEventTopicUriReference;
		"queue"?: Models.ConversationSocialExpressionEventTopicUriReference;
		"team"?: Models.ConversationSocialExpressionEventTopicUriReference;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.ConversationSocialExpressionEventTopicErrorBody;
		"script"?: Models.ConversationSocialExpressionEventTopicUriReference;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.ConversationSocialExpressionEventTopicUriReference;
		"externalOrganization"?: Models.ConversationSocialExpressionEventTopicUriReference;
		"wrapup"?: Models.ConversationSocialExpressionEventTopicWrapup;
		"conversationRoutingData"?: Models.ConversationSocialExpressionEventTopicConversationRoutingData;
		"peer"?: string;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.ConversationSocialExpressionEventTopicJourneyContext;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"socialMediaId"?: string;
		"socialMediaHub"?: string;
		"socialUserName"?: string;
		"previewText"?: string;
	}
	
	export interface ConversationSocialExpressionEventTopicUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface ConversationSocialExpressionEventTopicWrapup { 
		"code"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface ConversationVideoEventTopicConversationRoutingData { 
		"queue"?: Models.ConversationVideoEventTopicUriReference;
		"language"?: Models.ConversationVideoEventTopicUriReference;
		"priority"?: number;
		"skills"?: Array<Models.ConversationVideoEventTopicUriReference>;
		"scoredAgents"?: Array<Models.ConversationVideoEventTopicScoredAgent>;
	}
	
	export interface ConversationVideoEventTopicDetail { 
		"errorCode"?: string;
		"fieldName"?: string;
		"entityId"?: string;
		"entityName"?: string;
	}
	
	export interface ConversationVideoEventTopicErrorBody { 
		"status"?: number;
		"code"?: string;
		"entityId"?: string;
		"entityName"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"contextId"?: string;
		"details"?: Array<Models.ConversationVideoEventTopicDetail>;
		"errors"?: Array<Models.ConversationVideoEventTopicErrorBody>;
	}
	
	export interface ConversationVideoEventTopicJourneyAction { 
		"id"?: string;
		"actionMap"?: Models.ConversationVideoEventTopicJourneyActionMap;
	}
	
	export interface ConversationVideoEventTopicJourneyActionMap { 
		"id"?: string;
		"version"?: number;
	}
	
	export interface ConversationVideoEventTopicJourneyContext { 
		"customer"?: Models.ConversationVideoEventTopicJourneyCustomer;
		"customerSession"?: Models.ConversationVideoEventTopicJourneyCustomerSession;
		"triggeringAction"?: Models.ConversationVideoEventTopicJourneyAction;
	}
	
	export interface ConversationVideoEventTopicJourneyCustomer { 
		"id"?: string;
		"idType"?: string;
	}
	
	export interface ConversationVideoEventTopicJourneyCustomerSession { 
		"id"?: string;
		"type"?: string;
	}
	
	export interface ConversationVideoEventTopicScoredAgent { 
		"agent"?: Models.ConversationVideoEventTopicUriReference;
		"score"?: number;
	}
	
	export interface ConversationVideoEventTopicUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface ConversationVideoEventTopicVideoConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.ConversationVideoEventTopicVideoMediaParticipant>;
		"otherMediaUris"?: Array<string>;
	}
	
	export interface ConversationVideoEventTopicVideoMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.ConversationVideoEventTopicUriReference;
		"queue"?: Models.ConversationVideoEventTopicUriReference;
		"team"?: Models.ConversationVideoEventTopicUriReference;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.ConversationVideoEventTopicErrorBody;
		"script"?: Models.ConversationVideoEventTopicUriReference;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.ConversationVideoEventTopicUriReference;
		"externalOrganization"?: Models.ConversationVideoEventTopicUriReference;
		"wrapup"?: Models.ConversationVideoEventTopicWrapup;
		"conversationRoutingData"?: Models.ConversationVideoEventTopicConversationRoutingData;
		"peer"?: string;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.ConversationVideoEventTopicJourneyContext;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"audioMuted"?: boolean;
		"videoMuted"?: boolean;
		"sharingScreen"?: boolean;
		"peerCount"?: number;
		"context"?: string;
		"msids"?: Array<string>;
	}
	
	export interface ConversationVideoEventTopicWrapup { 
		"code"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface CopyAttachmentsRequest { 
		"sourceMessage": Models.DomainEntityRef;
		"attachments": Array<Models.Attachment>;
	}
	
	export interface CopyShortTermForecastRequest { 
		"weekDate": string;
		"description": string;
	}
	
	export interface CopyVoicemailMessage { 
		"voicemailMessageId": string;
		"userId"?: string;
		"groupId"?: string;
	}
	
	export interface CopyWeekScheduleRequest { 
		"description": string;
		"weekDate": string;
	}
	
	export interface CopyWorkPlan { 
		"name": string;
	}
	
	export interface CoverSheet { 
		"notes"?: string;
		"locale"?: string;
	}
	
	export interface CreateActivityCodeRequest { 
		"name": string;
		"category": string;
		"lengthInMinutes"?: number;
		"countsAsPaidTime"?: boolean;
		"countsAsWorkTime"?: boolean;
		"agentTimeOffSelectable"?: boolean;
	}
	
	export interface CreateAdminTimeOffRequest { 
		"status": string;
		"users": Array<Models.UserReference>;
		"activityCodeId": string;
		"notes"?: string;
		"fullDayManagementUnitDates"?: Array<string>;
		"partialDayStartDateTimes"?: Array<string>;
		"dailyDurationMinutes": number;
	}
	
	export interface CreateAgentTimeOffRequest { 
		"activityCodeId": string;
		"notes"?: string;
		"fullDayManagementUnitDates"?: Array<string>;
		"partialDayStartDateTimes"?: Array<string>;
		"dailyDurationMinutes": number;
	}
	
	export interface CreateCallRequest { 
		"phoneNumber"?: string;
		"callerId"?: string;
		"callerIdName"?: string;
		"callFromQueueId"?: string;
		"callQueueId"?: string;
		"callUserId"?: string;
		"priority"?: number;
		"languageId"?: string;
		"routingSkillsIds"?: Array<string>;
		"conversationIds"?: Array<string>;
		"participants"?: Array<Models.Destination>;
		"uuiData"?: string;
	}
	
	export interface CreateCallResponse { 
		"id"?: string;
		"name"?: string;
		"selfUri"?: string;
	}
	
	export interface CreateCallbackCommand { 
		"scriptId"?: string;
		"queueId"?: string;
		"routingData"?: Models.RoutingData;
		"callbackUserName"?: string;
		"callbackNumbers": Array<string>;
		"callbackScheduledTime"?: string;
		"countryCode"?: string;
		"validateCallbackNumbers"?: boolean;
		"data"?: { [key: string]: string; };
	}
	
	export interface CreateCallbackOnConversationCommand { 
		"scriptId"?: string;
		"queueId"?: string;
		"routingData"?: Models.RoutingData;
		"callbackUserName"?: string;
		"callbackNumbers": Array<string>;
		"callbackScheduledTime"?: string;
		"countryCode"?: string;
		"validateCallbackNumbers"?: boolean;
		"data"?: { [key: string]: string; };
	}
	
	export interface CreateCallbackResponse { 
		"conversation": Models.DomainEntityRef;
		"callbackIdentifiers": Array<Models.CallbackIdentifier>;
	}
	
	export interface CreateEmailRequest { 
		"queueId"?: string;
		"flowId"?: string;
		"provider": string;
		"skillIds"?: Array<string>;
		"languageId"?: string;
		"priority"?: number;
		"attributes"?: { [key: string]: string; };
		"toAddress"?: string;
		"toName"?: string;
		"fromAddress"?: string;
		"fromName"?: string;
		"subject"?: string;
		"direction"?: string;
		"htmlBody"?: string;
		"textBody"?: string;
	}
	
	export interface CreateIntegrationRequest { 
		"id"?: string;
		"name": string;
		"integrationType": Models.IntegrationType;
		"selfUri"?: string;
	}
	
	export interface CreateManagementUnitApiRequest { 
		"name": string;
		"timeZone"?: string;
		"startDayOfWeek"?: string;
		"settings"?: Models.CreateManagementUnitSettingsRequest;
		"divisionId"?: string;
		"businessUnitId": string;
	}
	
	export interface CreateManagementUnitSettingsRequest { 
		"adherence"?: Models.AdherenceSettings;
		"shortTermForecasting"?: Models.ShortTermForecastingSettings;
		"timeOff"?: Models.TimeOffRequestSettings;
		"scheduling"?: Models.SchedulingSettingsRequest;
		"shiftTrading"?: Models.ShiftTradeSettings;
	}
	
	export interface CreateOutboundMessagingConversationRequest { 
		"queueId": string;
		"toAddress": string;
		"toAddressMessengerType": string;
		"useExistingConversation"?: boolean;
		"externalContactId"?: string;
		"externalOrganizationId"?: string;
	}
	
	export interface CreateQueueMediaAssociationRequest { 
		"id"?: string;
		"queue"?: Models.QueueReference;
		"mediaTypes"?: Array<string>;
	}
	
	export interface CreateQueueRequest { 
		"id"?: string;
		"name": string;
		"division"?: Models.WritableDivision;
		"description"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"memberCount"?: number;
		"mediaSettings"?: { [key: string]: Models.MediaSetting; };
		"bullseye"?: Models.Bullseye;
		"acwSettings"?: Models.AcwSettings;
		"skillEvaluationMethod"?: string;
		"queueFlow"?: Models.DomainEntityRef;
		"whisperPrompt"?: Models.DomainEntityRef;
		"autoAnswerOnly"?: boolean;
		"callingPartyName"?: string;
		"callingPartyNumber"?: string;
		"defaultScripts"?: { [key: string]: Models.Script; };
		"outboundMessagingAddresses"?: Models.QueueMessagingAddresses;
		"outboundEmailAddress"?: Models.QueueEmailAddress;
		"sourceQueueId"?: string;
		"selfUri"?: string;
	}
	
	export interface CreateSecureSession { 
		"sourceParticipantId"?: string;
		"flowId": string;
		"userData": string;
		"disconnect"?: boolean;
	}
	
	export interface CreateServiceGoalGroupRequest { 
		"name": string;
		"goals"?: Models.ServiceGoalGroupGoals;
		"queueMediaAssociations"?: Array<Models.CreateQueueMediaAssociationRequest>;
	}
	
	export interface CreateShareRequest { 
		"sharedEntityType": string;
		"sharedEntity": Models.SharedEntity;
		"memberType"?: string;
		"member"?: Models.SharedEntity;
		"members"?: Array<Models.CreateShareRequestMember>;
	}
	
	export interface CreateShareRequestMember { 
		"memberType"?: string;
		"member"?: Models.MemberEntity;
	}
	
	export interface CreateShareResponse { 
		"id"?: string;
		"name"?: string;
		"sharedEntityType"?: string;
		"sharedEntity"?: Models.DomainEntityRef;
		"memberType"?: string;
		"member"?: Models.DomainEntityRef;
		"sharedBy"?: Models.DomainEntityRef;
		"workspace"?: Models.DomainEntityRef;
		"succeeded"?: Array<Models.Share>;
		"failed"?: Array<Models.Share>;
		"selfUri"?: string;
	}
	
	export interface CreateUser { 
		"name": string;
		"department"?: string;
		"email": string;
		"addresses"?: Array<Models.Contact>;
		"title"?: string;
		"password": string;
		"divisionId": string;
		"state"?: string;
	}
	
	export interface CreateWebChatConversationRequest { 
		"organizationId": string;
		"deploymentId": string;
		"routingTarget": Models.WebChatRoutingTarget;
		"memberInfo": Models.GuestMemberInfo;
		"memberAuthToken"?: string;
		"journeyContext"?: Models.JourneyContext;
	}
	
	export interface CreateWebChatConversationResponse { 
		"id"?: string;
		"jwt"?: string;
		"eventStreamUri"?: string;
		"member"?: Models.WebChatMemberInfo;
	}
	
	export interface CreateWebChatMessageRequest { 
		"body": string;
		"bodyType"?: string;
	}
	
	export interface CreateWebChatRequest { 
		"queueId": string;
		"provider": string;
		"skillIds"?: Array<string>;
		"languageId"?: string;
		"priority"?: number;
		"attributes"?: { [key: string]: string; };
		"customerName"?: string;
	}
	
	export interface CreateWorkPlan { 
		"name": string;
		"enabled"?: boolean;
		"constrainWeeklyPaidTime"?: boolean;
		"flexibleWeeklyPaidTime"?: boolean;
		"weeklyExactPaidMinutes"?: number;
		"weeklyMinimumPaidMinutes"?: number;
		"weeklyMaximumPaidMinutes"?: number;
		"constrainPaidTimeGranularity"?: boolean;
		"paidTimeGranularityMinutes"?: number;
		"constrainMinimumTimeBetweenShifts"?: boolean;
		"minimumTimeBetweenShiftsMinutes"?: number;
		"maximumDays"?: number;
		"minimumWorkingDaysPerWeek"?: number;
		"optionalDays"?: Models.SetWrapperDayOfWeek;
		"shiftStartVariances"?: Models.ListWrapperShiftStartVariance;
		"shifts"?: Array<Models.CreateWorkPlanShift>;
		"agents"?: Array<Models.UserReference>;
	}
	
	export interface CreateWorkPlanActivity { 
		"activityCodeId"?: string;
		"description"?: string;
		"lengthMinutes"?: number;
		"startTimeIsRelativeToShiftStart"?: boolean;
		"flexibleStartTime"?: boolean;
		"earliestStartTimeMinutes"?: number;
		"latestStartTimeMinutes"?: number;
		"exactStartTimeMinutes"?: number;
		"startTimeIncrementMinutes"?: number;
		"countsAsPaidTime"?: boolean;
		"countsAsContiguousWorkTime"?: boolean;
	}
	
	export interface CreateWorkPlanShift { 
		"name": string;
		"days"?: Models.SetWrapperDayOfWeek;
		"flexibleStartTime"?: boolean;
		"exactStartTimeMinutesFromMidnight"?: number;
		"earliestStartTimeMinutesFromMidnight"?: number;
		"latestStartTimeMinutesFromMidnight"?: number;
		"constrainStopTime"?: boolean;
		"constrainLatestStopTime"?: boolean;
		"latestStopTimeMinutesFromMidnight"?: number;
		"startIncrementMinutes"?: number;
		"flexiblePaidTime"?: boolean;
		"exactPaidTimeMinutes"?: number;
		"minimumPaidTimeMinutes"?: number;
		"maximumPaidTimeMinutes"?: number;
		"constrainContiguousWorkTime"?: boolean;
		"minimumContiguousWorkTimeMinutes"?: number;
		"maximumContiguousWorkTimeMinutes"?: number;
		"activities"?: Array<Models.CreateWorkPlanActivity>;
	}
	
	export interface Credential { 
		"id"?: string;
		"name"?: string;
		"type": Models.CredentialType;
		"credentialFields"?: { [key: string]: string; };
		"selfUri"?: string;
	}
	
	export interface CredentialInfo { 
		"id"?: string;
		"name"?: string;
		"createdDate"?: string;
		"modifiedDate"?: string;
		"type"?: Models.CredentialType;
		"selfUri"?: string;
	}
	
	export interface CredentialInfoListing { 
		"entities"?: Array<Models.CredentialInfo>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface CredentialSpecification { 
		"required"?: boolean;
		"title"?: string;
		"credentialTypes"?: Array<string>;
	}
	
	export interface CredentialType { 
		"id"?: string;
		"name"?: string;
		"properties"?: object;
		"displayOrder"?: Array<string>;
		"required"?: Array<string>;
	}
	
	export interface CredentialTypeListing { 
		"entities"?: Array<Models.CredentialType>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface CurrentUserScheduleRequestBody { 
		"startDate": string;
		"endDate": string;
		"loadFullWeeks"?: boolean;
	}
	
	export interface CustomerInteractionCenter { 
		"id"?: string;
		"name"?: string;
		"certificate"?: string;
		"ssoTargetURI"?: string;
		"issuerURI"?: string;
		"disabled"?: boolean;
		"selfUri"?: string;
	}
	
	export interface DID { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"phoneNumber"?: string;
		"didPool"?: Models.DomainEntityRef;
		"owner"?: Models.DomainEntityRef;
		"ownerType"?: string;
		"selfUri"?: string;
	}
	
	export interface DIDEntityListing { 
		"entities"?: Array<Models.DID>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface DIDPool { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"startPhoneNumber": string;
		"endPhoneNumber": string;
		"comments"?: string;
		"provider"?: string;
		"selfUri"?: string;
	}
	
	export interface DIDPoolEntityListing { 
		"entities"?: Array<Models.DIDPool>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface DataActionConditionPredicate { 
	}
	
	export interface DataSchema { 
		"id"?: string;
		"name"?: string;
		"version": number;
		"appliesTo"?: Array<string>;
		"enabled"?: boolean;
		"createdBy"?: Models.DomainEntityRef;
		"dateCreated"?: string;
		"jsonSchema": Models.JsonSchemaDocument;
		"selfUri"?: string;
	}
	
	export interface DataTable { 
		"id"?: string;
		"name"?: string;
		"description"?: string;
		"schema"?: Models.JsonSchemaDocument;
		"selfUri"?: string;
	}
	
	export interface DataTableExportJob { 
		"id"?: string;
		"name"?: string;
		"owner"?: Models.AddressableEntityRef;
		"status": string;
		"dateCreated"?: string;
		"dateCompleted"?: string;
		"downloadURI"?: string;
		"errorInformation"?: Models.ErrorBody;
		"countRecordsProcessed"?: number;
		"selfUri"?: string;
	}
	
	export interface DataTableImportJob { 
		"id"?: string;
		"name"?: string;
		"owner"?: Models.AddressableEntityRef;
		"status": string;
		"dateCreated"?: string;
		"dateCompleted"?: string;
		"uploadURI"?: string;
		"importMode"?: string;
		"errorInformation"?: Models.ErrorBody;
		"countRecordsUpdated"?: number;
		"countRecordsDeleted"?: number;
		"countRecordsFailed"?: number;
		"selfUri"?: string;
	}
	
	export interface DataTableRowEntityListing { 
		"entities"?: Array<{ [key: string]: object; }>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface DataTablesDomainEntityListing { 
		"entities"?: Array<Models.DataTable>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface DateRange { 
		"startDate"?: string;
		"endDate"?: string;
	}
	
	export interface DefaultGreetingList { 
		"id"?: string;
		"name"?: string;
		"owner"?: Models.GreetingOwner;
		"ownerType"?: string;
		"greetings"?: { [key: string]: Models.Greeting; };
		"createdDate"?: string;
		"createdBy"?: string;
		"modifiedDate"?: string;
		"modifiedBy"?: string;
		"selfUri"?: string;
	}
	
	export interface DeletableUserReference { 
		"id"?: string;
		"delete"?: boolean;
		"selfUri"?: string;
	}
	
	export interface DeleteRetention { 
		"days"?: number;
	}
	
	export interface Dependency { 
		"id"?: string;
		"name"?: string;
		"version"?: string;
		"type"?: string;
		"deleted"?: boolean;
		"updated"?: boolean;
		"stateUnknown"?: boolean;
		"selfUri"?: string;
	}
	
	export interface DependencyObject { 
		"id"?: string;
		"name"?: string;
		"version"?: string;
		"type"?: string;
		"deleted"?: boolean;
		"updated"?: boolean;
		"stateUnknown"?: boolean;
		"consumedResources"?: Array<Models.Dependency>;
		"consumingResources"?: Array<Models.Dependency>;
		"selfUri"?: string;
	}
	
	export interface DependencyObjectEntityListing { 
		"entities"?: Array<Models.DependencyObject>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface DependencyStatus { 
		"id"?: string;
		"name"?: string;
		"user"?: Models.User;
		"client"?: Models.DomainEntityRef;
		"buildId"?: string;
		"dateStarted"?: string;
		"dateCompleted"?: string;
		"status"?: string;
		"failedObjects"?: Array<Models.FailedObject>;
		"selfUri"?: string;
	}
	
	export interface DependencyType { 
		"id"?: string;
		"name"?: string;
		"versioned"?: boolean;
		"selfUri"?: string;
	}
	
	export interface DependencyTypeEntityListing { 
		"entities"?: Array<Models.DependencyType>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface Destination { 
		"address": string;
		"name"?: string;
		"userId"?: string;
		"queueId"?: string;
	}
	
	export interface Detail { 
		"errorCode"?: string;
		"fieldName"?: string;
		"entityId"?: string;
		"entityName"?: string;
	}
	
	export interface DialerAction { 
		"type": string;
		"actionTypeName": string;
		"updateOption"?: string;
		"properties"?: { [key: string]: string; };
	}
	
	export interface DialerAttemptLimitsConfigChangeAttemptLimits { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"maxAttemptsPerContact"?: number;
		"maxAttemptsPerNumber"?: number;
		"timeZoneId"?: string;
		"resetPeriod"?: string;
		"recallEntries"?: { [key: string]: Models.DialerAttemptLimitsConfigChangeRecallEntry; };
		"breadthFirstRecalls"?: boolean;
		"additionalProperties"?: object;
	}
	
	export interface DialerAttemptLimitsConfigChangeRecallEntry { 
		"nbrAttempts"?: number;
		"minutesBetweenAttempts"?: number;
		"additionalProperties"?: object;
	}
	
	export interface DialerAuditRequest { 
		"queryPhrase"?: string;
		"queryFields"?: Array<string>;
		"facets"?: Array<Models.AuditFacet>;
		"filters"?: Array<Models.AuditFilter>;
	}
	
	export interface DialerCallabletimesetConfigChangeCallableTime { 
		"timeSlots"?: Array<Models.DialerCallabletimesetConfigChangeTimeSlot>;
		"timeZoneId"?: string;
		"additionalProperties"?: object;
	}
	
	export interface DialerCallabletimesetConfigChangeCallableTimeSet { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"callableTimes"?: Array<Models.DialerCallabletimesetConfigChangeCallableTime>;
		"additionalProperties"?: object;
	}
	
	export interface DialerCallabletimesetConfigChangeTimeSlot { 
		"startTime"?: string;
		"stopTime"?: string;
		"day"?: number;
		"additionalProperties"?: object;
	}
	
	export interface DialerCampaignConfigChangeCampaign { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"contactList"?: Models.DialerCampaignConfigChangeUriReference;
		"queue"?: Models.DialerCampaignConfigChangeUriReference;
		"dialingMode"?: string;
		"script"?: Models.DialerCampaignConfigChangeUriReference;
		"edgeGroup"?: Models.DialerCampaignConfigChangeUriReference;
		"site"?: Models.DialerCampaignConfigChangeUriReference;
		"campaignStatus"?: string;
		"phoneColumns"?: Array<Models.DialerCampaignConfigChangePhoneColumn>;
		"abandonRate"?: number;
		"dncLists"?: Array<Models.DialerCampaignConfigChangeUriReference>;
		"callableTimeSet"?: Models.DialerCampaignConfigChangeUriReference;
		"callAnalysisResponseSet"?: Models.DialerCampaignConfigChangeUriReference;
		"callerName"?: string;
		"callerAddress"?: string;
		"outboundLineCount"?: number;
		"errors"?: Array<Models.DialerCampaignConfigChangeRestErrorDetail>;
		"ruleSets"?: Array<Models.DialerCampaignConfigChangeUriReference>;
		"skipPreviewDisabled"?: boolean;
		"previewTimeOutSeconds"?: number;
		"singleNumberPreview"?: boolean;
		"contactSort"?: Models.DialerCampaignConfigChangeContactSort;
		"contactSorts"?: Array<Models.DialerCampaignConfigChangeContactSort>;
		"noAnswerTimeout"?: number;
		"callAnalysisLanguage"?: string;
		"priority"?: number;
		"contactListFilters"?: Array<Models.DialerCampaignConfigChangeUriReference>;
		"division"?: Models.DialerCampaignConfigChangeUriReference;
		"agentOwnedColumn"?: string;
		"additionalProperties"?: object;
	}
	
	export interface DialerCampaignConfigChangeContactSort { 
		"fieldName"?: string;
		"direction"?: string;
		"numeric"?: boolean;
		"additionalProperties"?: object;
	}
	
	export interface DialerCampaignConfigChangePhoneColumn { 
		"columnName"?: string;
		"type"?: string;
		"additionalProperties"?: object;
	}
	
	export interface DialerCampaignConfigChangeRestErrorDetail { 
		"error"?: string;
		"details"?: string;
		"additionalProperties"?: object;
	}
	
	export interface DialerCampaignConfigChangeUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface DialerCampaignProgressEventCampaignProgress { 
		"campaign"?: Models.DialerCampaignProgressEventUriReference;
		"numberOfContactsCalled"?: number;
		"numberOfContactsMessaged"?: number;
		"totalNumberOfContacts"?: number;
		"percentage"?: number;
		"additionalProperties"?: object;
	}
	
	export interface DialerCampaignProgressEventUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface DialerCampaignRuleConfigChangeCampaignRule { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"campaignRuleEntities"?: Models.DialerCampaignRuleConfigChangeCampaignRuleEntities;
		"campaignRuleConditions"?: Array<Models.DialerCampaignRuleConfigChangeCampaignRuleCondition>;
		"campaignRuleActions"?: Array<Models.DialerCampaignRuleConfigChangeCampaignRuleAction>;
		"matchAnyConditions"?: boolean;
		"enabled"?: boolean;
		"additionalProperties"?: object;
	}
	
	export interface DialerCampaignRuleConfigChangeCampaignRuleAction { 
		"id"?: string;
		"parameters"?: { [key: string]: string; };
		"actionType"?: string;
		"campaignRuleActionEntities"?: Models.DialerCampaignRuleConfigChangeCampaignRuleActionEntities;
		"additionalProperties"?: object;
	}
	
	export interface DialerCampaignRuleConfigChangeCampaignRuleActionEntities { 
		"campaigns"?: Array<Models.DialerCampaignRuleConfigChangeUriReference>;
		"sequences"?: Array<Models.DialerCampaignRuleConfigChangeUriReference>;
		"useTriggeringEntity"?: boolean;
		"additionalProperties"?: object;
	}
	
	export interface DialerCampaignRuleConfigChangeCampaignRuleCondition { 
		"id"?: string;
		"parameters"?: { [key: string]: string; };
		"conditionType"?: string;
		"additionalProperties"?: object;
	}
	
	export interface DialerCampaignRuleConfigChangeCampaignRuleEntities { 
		"campaigns"?: Array<Models.DialerCampaignRuleConfigChangeUriReference>;
		"sequences"?: Array<Models.DialerCampaignRuleConfigChangeUriReference>;
	}
	
	export interface DialerCampaignRuleConfigChangeUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface DialerCampaignScheduleConfigChangeCampaignSchedule { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"intervals"?: Array<Models.DialerCampaignScheduleConfigChangeScheduleInterval>;
		"timeZone"?: string;
		"campaign"?: Models.DialerCampaignScheduleConfigChangeUriReference;
		"additionalProperties"?: object;
	}
	
	export interface DialerCampaignScheduleConfigChangeScheduleInterval { 
		"start"?: string;
		"end"?: string;
		"additionalProperties"?: object;
	}
	
	export interface DialerCampaignScheduleConfigChangeUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface DialerContact { 
		"id"?: string;
		"name"?: string;
		"contactListId": string;
		"data": { [key: string]: object; };
		"callRecords"?: { [key: string]: Models.CallRecord; };
		"callable"?: boolean;
		"phoneNumberStatus"?: { [key: string]: Models.PhoneNumberStatus; };
		"contactColumnTimeZones"?: { [key: string]: Models.ContactColumnTimeZone; };
		"selfUri"?: string;
	}
	
	export interface DialerContactId { 
		"id"?: string;
		"contactListId"?: string;
	}
	
	export interface DialerContactlistConfigChangeContactList { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"columnNames"?: Array<string>;
		"phoneColumns"?: Array<Models.DialerContactlistConfigChangeContactPhoneNumberColumn>;
		"importStatus"?: Models.DialerContactlistConfigChangeImportStatus;
		"previewModeColumnName"?: string;
		"previewModeAcceptedValues"?: Array<string>;
		"size"?: number;
		"attemptLimits"?: Models.DialerContactlistConfigChangeUriReference;
		"automaticTimeZoneMapping"?: boolean;
		"zipCodeColumnName"?: string;
		"division"?: Models.DialerContactlistConfigChangeUriReference;
		"additionalProperties"?: object;
	}
	
	export interface DialerContactlistConfigChangeContactPhoneNumberColumn { 
		"columnName"?: string;
		"type"?: string;
		"callableTimeColumn"?: string;
		"additionalProperties"?: object;
	}
	
	export interface DialerContactlistConfigChangeImportStatus { 
		"importState"?: string;
		"totalRecords"?: number;
		"completedRecords"?: number;
		"percentageComplete"?: number;
		"failureReason"?: string;
		"additionalProperties"?: object;
	}
	
	export interface DialerContactlistConfigChangeUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface DialerContactlistfilterConfigChangeContactListFilter { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"contactList"?: Models.DialerContactlistfilterConfigChangeUriReference;
		"contactListColumns"?: Array<string>;
		"clauses"?: Array<Models.DialerContactlistfilterConfigChangeFilterClause>;
		"filterType"?: string;
		"additionalProperties"?: object;
	}
	
	export interface DialerContactlistfilterConfigChangeFilterClause { 
		"filterType"?: string;
		"predicates"?: Array<Models.DialerContactlistfilterConfigChangeFilterPredicate>;
		"additionalProperties"?: object;
	}
	
	export interface DialerContactlistfilterConfigChangeFilterPredicate { 
		"column"?: string;
		"columnType"?: string;
		"operator"?: string;
		"value"?: string;
		"range"?: Models.DialerContactlistfilterConfigChangeRange;
		"inverted"?: boolean;
		"additionalProperties"?: object;
	}
	
	export interface DialerContactlistfilterConfigChangeRange { 
		"min"?: string;
		"max"?: string;
		"minInclusive"?: boolean;
		"maxInclusive"?: boolean;
		"inSet"?: Array<string>;
		"additionalProperties"?: object;
	}
	
	export interface DialerContactlistfilterConfigChangeUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface DialerDnclistConfigChangeDncList { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"importStatus"?: Models.DialerDnclistConfigChangeImportStatus;
		"size"?: number;
		"dncSourceType"?: string;
		"loginId"?: string;
		"dncCodes"?: Array<string>;
		"licenseId"?: string;
		"division"?: Models.DialerDnclistConfigChangeUriReference;
		"additionalProperties"?: object;
	}
	
	export interface DialerDnclistConfigChangeImportStatus { 
		"importState"?: string;
		"totalRecords"?: number;
		"completedRecords"?: number;
		"percentageComplete"?: number;
		"failureReason"?: string;
		"additionalProperties"?: object;
	}
	
	export interface DialerDnclistConfigChangeUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface DialerEventEntityListing { 
		"entities"?: Array<Models.EventLog>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface DialerOutboundSettingsConfigChangeAtzmTimeSlot { 
		"earliestCallableTime"?: string;
		"latestCallableTime"?: string;
	}
	
	export interface DialerOutboundSettingsConfigChangeAtzmTimeSlotWithTimeZone { 
		"earliestCallableTime"?: string;
		"latestCallableTime"?: string;
		"timeZoneId"?: string;
	}
	
	export interface DialerOutboundSettingsConfigChangeAutomaticTimeZoneMappingSettings { 
		"callableWindows"?: Array<Models.DialerOutboundSettingsConfigChangeCallableWindow>;
	}
	
	export interface DialerOutboundSettingsConfigChangeCallableWindow { 
		"mapped"?: Models.DialerOutboundSettingsConfigChangeAtzmTimeSlot;
		"unmapped"?: Models.DialerOutboundSettingsConfigChangeAtzmTimeSlotWithTimeZone;
	}
	
	export interface DialerOutboundSettingsConfigChangeOutboundSettings { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"maxCallsPerAgent"?: number;
		"maxLineUtilization"?: number;
		"abandonSeconds"?: number;
		"complianceAbandonRateDenominator"?: string;
		"automaticTimeZoneMapping"?: Models.DialerOutboundSettingsConfigChangeAutomaticTimeZoneMappingSettings;
	}
	
	export interface DialerPreview { 
		"id"?: string;
		"contactId"?: string;
		"contactListId"?: string;
		"campaignId"?: string;
		"phoneNumberColumns"?: Array<Models.PhoneNumberColumn>;
	}
	
	export interface DialerResponsesetConfigChangeReaction { 
		"data"?: string;
		"name"?: string;
		"reactionType"?: string;
		"additionalProperties"?: object;
	}
	
	export interface DialerResponsesetConfigChangeResponseSet { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"responses"?: { [key: string]: Models.DialerResponsesetConfigChangeReaction; };
		"beepDetectionEnabled"?: boolean;
		"additionalProperties"?: object;
	}
	
	export interface DialerRule { 
		"id"?: string;
		"name": string;
		"order"?: number;
		"category": string;
		"conditions": Array<Models.Condition>;
		"actions"?: Array<Models.DialerAction>;
	}
	
	export interface DialerRulesetConfigChangeAction { 
		"type"?: string;
		"actionTypeName"?: string;
		"updateOption"?: string;
		"properties"?: { [key: string]: string; };
		"additionalProperties"?: object;
	}
	
	export interface DialerRulesetConfigChangeCondition { 
		"type"?: string;
		"inverted"?: boolean;
		"attributeName"?: string;
		"value"?: string;
		"valueType"?: string;
		"operator"?: string;
		"codes"?: Array<string>;
		"propertyType"?: string;
		"property"?: string;
		"dataNotFoundResolution"?: boolean;
		"contactIdField"?: string;
		"callAnalysisResultField"?: string;
		"agentWrapupField"?: string;
		"contactColumnToDataActionFieldMappings"?: Array<Models.DialerRulesetConfigChangeContactColumnToDataActionFieldMapping>;
		"predicates"?: Array<Models.DialerRulesetConfigChangeDataActionConditionPredicate>;
		"dataAction"?: Models.DialerRulesetConfigChangeUriReference;
		"additionalProperties"?: object;
	}
	
	export interface DialerRulesetConfigChangeContactColumnToDataActionFieldMapping { 
		"contactColumnName"?: string;
		"dataActionField"?: string;
		"additionalProperties"?: object;
	}
	
	export interface DialerRulesetConfigChangeDataActionConditionPredicate { 
		"outputField"?: string;
		"outputOperator"?: string;
		"comparisonValue"?: string;
		"outputFieldMissingResolution"?: boolean;
		"inverted"?: boolean;
		"additionalProperties"?: object;
	}
	
	export interface DialerRulesetConfigChangeRule { 
		"id"?: string;
		"name"?: string;
		"order"?: number;
		"category"?: string;
		"actions"?: Array<Models.DialerRulesetConfigChangeAction>;
		"conditions"?: Array<Models.DialerRulesetConfigChangeCondition>;
		"additionalProperties"?: object;
	}
	
	export interface DialerRulesetConfigChangeRuleSet { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"contactList"?: Models.DialerRulesetConfigChangeUriReference;
		"queue"?: Models.DialerRulesetConfigChangeUriReference;
		"rules"?: Array<Models.DialerRulesetConfigChangeRule>;
		"additionalProperties"?: object;
	}
	
	export interface DialerRulesetConfigChangeUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface DialerSequenceConfigChangeCampaignSequence { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"campaigns"?: Array<Models.DialerSequenceConfigChangeUriReference>;
		"currentCampaign"?: number;
		"status"?: string;
		"stopMessage"?: string;
		"repeat"?: boolean;
		"additionalProperties"?: object;
	}
	
	export interface DialerSequenceConfigChangeUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface DialerSequenceScheduleConfigChangeScheduleInterval { 
		"start"?: string;
		"end"?: string;
		"additionalProperties"?: object;
	}
	
	export interface DialerSequenceScheduleConfigChangeSequenceSchedule { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"intervals"?: Array<Models.DialerSequenceScheduleConfigChangeScheduleInterval>;
		"timeZone"?: string;
		"sequence"?: Models.DialerSequenceScheduleConfigChangeUriReference;
		"additionalProperties"?: object;
	}
	
	export interface DialerSequenceScheduleConfigChangeUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface DialerWrapupcodemappingConfigChangeWrapUpCodeMapping { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"defaultSet"?: Array<string>;
		"mapping"?: { [key: string]: Array<string>; };
	}
	
	export interface DialogflowAgent { 
		"id"?: string;
		"name"?: string;
		"project"?: Models.DialogflowProject;
		"languages"?: Array<string>;
		"intents"?: Array<Models.DialogflowIntent>;
		"selfUri"?: string;
	}
	
	export interface DialogflowAgentSummary { 
		"id"?: string;
		"name"?: string;
		"project"?: Models.DialogflowProject;
		"description"?: string;
		"selfUri"?: string;
	}
	
	export interface DialogflowAgentSummaryEntityListing { 
		"entities"?: Array<Models.DialogflowAgentSummary>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface DialogflowIntent { 
		"name": string;
		"parameters": { [key: string]: Models.DialogflowParameter; };
	}
	
	export interface DialogflowParameter { 
		"name": string;
		"type": string;
	}
	
	export interface DialogflowProject { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface DigitLength { 
		"start"?: string;
		"end"?: string;
	}
	
	export interface Digits { 
		"digits"?: string;
	}
	
	export interface DirectoryUserDevicesListing { 
		"entities"?: Array<Models.UserDevice>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface DisconnectReason { 
		"type"?: string;
		"code"?: number;
		"phrase"?: string;
	}
	
	export interface Division { 
		"id"?: string;
		"name"?: string;
		"selfUri"?: string;
	}
	
	export interface DivsPermittedEntityListing { 
		"entities"?: Array<Models.AuthzDivision>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"allDivsPermitted"?: boolean;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface DncList { 
		"id"?: string;
		"name": string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"importStatus"?: Models.ImportStatus;
		"size"?: number;
		"dncSourceType": string;
		"loginId"?: string;
		"dncCodes"?: Array<string>;
		"licenseId"?: string;
		"division"?: Models.DomainEntityRef;
		"selfUri"?: string;
	}
	
	export interface DncListCreate { 
		"id"?: string;
		"name": string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"importStatus"?: Models.ImportStatus;
		"size"?: number;
		"dncSourceType": string;
		"loginId"?: string;
		"dncCodes"?: Array<string>;
		"licenseId"?: string;
		"division"?: Models.DomainEntityRef;
		"selfUri"?: string;
	}
	
	export interface DncListDivisionView { 
		"id"?: string;
		"name"?: string;
		"division"?: Models.Division;
		"importStatus"?: Models.ImportStatus;
		"size"?: number;
		"selfUri"?: string;
	}
	
	export interface DncListDivisionViewListing { 
		"entities"?: Array<Models.DncListDivisionView>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface DncListEntityListing { 
		"entities"?: Array<Models.DncList>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface DnclistDownloadReadyExportUri { 
		"uri"?: string;
		"exportTimestamp"?: string;
		"additionalProperties"?: object;
	}
	
	export interface DnclistImportStatusImportStatus { 
		"importState"?: string;
		"totalRecords"?: number;
		"completedRecords"?: number;
		"percentageComplete"?: number;
		"failureReason"?: string;
		"additionalProperties"?: object;
	}
	
	export interface Document { 
		"id"?: string;
		"name"?: string;
		"changeNumber"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"dateUploaded"?: string;
		"contentUri"?: string;
		"workspace"?: Models.DomainEntityRef;
		"createdBy"?: Models.DomainEntityRef;
		"uploadedBy"?: Models.DomainEntityRef;
		"contentType"?: string;
		"contentLength"?: number;
		"systemType"?: string;
		"filename"?: string;
		"pageCount"?: number;
		"read"?: boolean;
		"callerAddress"?: string;
		"receiverAddress"?: string;
		"tags"?: Array<string>;
		"tagValues"?: Array<Models.TagValue>;
		"attributes"?: Array<Models.DocumentAttribute>;
		"thumbnails"?: Array<Models.DocumentThumbnail>;
		"uploadStatus"?: Models.DomainEntityRef;
		"uploadDestinationUri"?: string;
		"uploadMethod"?: string;
		"lockInfo"?: Models.LockInfo;
		"acl"?: Array<string>;
		"sharingStatus"?: string;
		"sharingUri"?: string;
		"downloadSharingUri"?: string;
		"selfUri"?: string;
	}
	
	export interface DocumentAttribute { 
		"attribute"?: Models.Attribute;
		"values"?: Array<string>;
	}
	
	export interface DocumentAudit { 
		"id"?: string;
		"name"?: string;
		"user"?: Models.DomainEntityRef;
		"workspace"?: Models.DomainEntityRef;
		"transactionId"?: string;
		"transactionInitiator"?: boolean;
		"application"?: string;
		"serviceName"?: string;
		"level"?: string;
		"timestamp"?: string;
		"status"?: string;
		"actionContext"?: string;
		"action"?: string;
		"entity"?: Models.AuditEntityReference;
		"changes"?: Array<Models.AuditChange>;
		"selfUri"?: string;
	}
	
	export interface DocumentAuditEntityListing { 
		"entities"?: Array<Models.DocumentAudit>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface DocumentEntityListing { 
		"entities"?: Array<Models.Document>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface DocumentThumbnail { 
		"resolution"?: string;
		"imageUri"?: string;
		"height"?: number;
		"width"?: number;
	}
	
	export interface DocumentUpdate { 
		"changeNumber"?: number;
		"name": string;
		"read"?: boolean;
		"addTags"?: Array<string>;
		"removeTags"?: Array<string>;
		"addTagIds"?: Array<string>;
		"removeTagIds"?: Array<string>;
		"updateAttributes"?: Array<Models.DocumentAttribute>;
		"removeAttributes"?: Array<string>;
	}
	
	export interface DocumentUpload { 
		"name": string;
		"workspace": Models.DomainEntityRef;
		"tags"?: Array<string>;
		"tagIds"?: Array<string>;
	}
	
	export interface DocumentationResult { 
		"id": number;
		"categories"?: Array<number>;
		"description"?: string;
		"content"?: string;
		"excerpt"?: string;
		"link"?: string;
		"modified"?: string;
		"name"?: string;
		"service"?: Array<number>;
		"slug"?: string;
		"title"?: string;
		"get_type"?: string;
		"facet_feature"?: Array<number>;
		"facet_role"?: Array<number>;
		"facet_service"?: Array<number>;
		"faq_categories"?: Array<number>;
		"releasenote_category"?: Array<number>;
		"releasenote_tag"?: Array<number>;
		"service-area"?: Array<number>;
		"video_categories"?: Array<number>;
	}
	
	export interface DocumentationSearchCriteria { 
		"endValue"?: string;
		"values"?: Array<string>;
		"startValue"?: string;
		"fields"?: Array<string>;
		"value"?: string;
		"operator"?: string;
		"group"?: Array<Models.DocumentationSearchCriteria>;
		"type": string;
	}
	
	export interface DocumentationSearchRequest { 
		"sortOrder"?: string;
		"sortBy"?: string;
		"pageSize"?: number;
		"pageNumber"?: number;
		"sort"?: Array<Models.SearchSort>;
		"query"?: Array<Models.DocumentationSearchCriteria>;
	}
	
	export interface DocumentationSearchResponse { 
		"total": number;
		"pageCount": number;
		"pageSize": number;
		"pageNumber": number;
		"previousPage"?: string;
		"currentPage"?: string;
		"nextPage"?: string;
		"types": Array<string>;
		"results": Array<Models.DocumentationResult>;
	}
	
	export interface DomainCapabilities { 
		"enabled"?: boolean;
		"dhcp"?: boolean;
		"metric"?: number;
		"autoMetric"?: boolean;
		"supportsMetric"?: boolean;
		"pingEnabled"?: boolean;
	}
	
	export interface DomainCertificateAuthority { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"certificate": string;
		"type": string;
		"services": Array<string>;
		"certificateDetails"?: Array<Models.CertificateDetails>;
		"selfUri"?: string;
	}
	
	export interface DomainEdgeSoftwareUpdateDto { 
		"version": Models.DomainEdgeSoftwareVersionDto;
		"maxDownloadRate"?: number;
		"downloadStartTime"?: string;
		"executeStartTime"?: string;
		"executeStopTime"?: string;
		"executeOnIdle"?: boolean;
		"status"?: string;
		"edgeUri"?: string;
		"callDrainingWaitTimeSeconds"?: number;
		"current"?: boolean;
	}
	
	export interface DomainEdgeSoftwareVersionDto { 
		"id"?: string;
		"name"?: string;
		"edgeVersion"?: string;
		"publishDate"?: string;
		"edgeUri"?: string;
		"latestRelease"?: boolean;
		"current"?: boolean;
		"selfUri"?: string;
	}
	
	export interface DomainEdgeSoftwareVersionDtoEntityListing { 
		"entities"?: Array<Models.DomainEdgeSoftwareVersionDto>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface DomainEntity { 
		"id"?: string;
		"name"?: string;
		"selfUri"?: string;
	}
	
	export interface DomainEntityListing { 
		"entities"?: Array<Models.DomainEntity>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface DomainEntityListingEvaluationForm { 
		"entities"?: Array<Models.EvaluationForm>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface DomainEntityListingQueryResult { 
		"entities"?: Array<Models.QueryResult>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface DomainEntityListingSurveyForm { 
		"entities"?: Array<Models.SurveyForm>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface DomainEntityRef { 
		"id"?: string;
		"name"?: string;
		"selfUri"?: string;
	}
	
	export interface DomainLogicalInterface { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"edgeUri"?: string;
		"edgeAssignedId"?: string;
		"friendlyName": string;
		"vlanTagId"?: number;
		"hardwareAddress": string;
		"physicalAdapterId": string;
		"ifStatus"?: string;
		"interfaceType"?: string;
		"publicNatAddressIpV4"?: string;
		"publicNatAddressIpV6"?: string;
		"routes"?: Array<Models.DomainNetworkRoute>;
		"addresses"?: Array<Models.DomainNetworkAddress>;
		"ipv4Capabilities"?: Models.DomainCapabilities;
		"ipv6Capabilities"?: Models.DomainCapabilities;
		"currentState"?: string;
		"lastModifiedUserId"?: string;
		"lastModifiedCorrelationId"?: string;
		"commandResponses"?: Array<Models.DomainNetworkCommandResponse>;
		"inheritPhoneTrunkBasesIPv4"?: boolean;
		"inheritPhoneTrunkBasesIPv6"?: boolean;
		"useForInternalEdgeCommunication"?: boolean;
		"useForIndirectEdgeCommunication"?: boolean;
		"useForCloudProxyEdgeCommunication"?: boolean;
		"externalTrunkBaseAssignments"?: Array<Models.TrunkBaseAssignment>;
		"phoneTrunkBaseAssignments"?: Array<Models.TrunkBaseAssignment>;
		"traceEnabled"?: boolean;
		"startDate"?: string;
		"endDate"?: string;
		"selfUri"?: string;
	}
	
	export interface DomainNetworkAddress { 
		"type"?: string;
		"address"?: string;
		"persistent"?: boolean;
		"family"?: number;
	}
	
	export interface DomainNetworkCommandResponse { 
		"correlationId"?: string;
		"commandName"?: string;
		"acknowledged"?: boolean;
		"errorInfo"?: Models.ErrorDetails;
	}
	
	export interface DomainNetworkRoute { 
		"prefix"?: string;
		"nexthop"?: string;
		"persistent"?: boolean;
		"metric"?: number;
		"family"?: number;
	}
	
	export interface DomainOrgRoleDifference { 
		"removedPermissionPolicies"?: Array<Models.DomainPermissionPolicy>;
		"addedPermissionPolicies"?: Array<Models.DomainPermissionPolicy>;
		"samePermissionPolicies"?: Array<Models.DomainPermissionPolicy>;
		"userOrgRole"?: Models.DomainOrganizationRole;
		"roleFromDefault"?: Models.DomainOrganizationRole;
	}
	
	export interface DomainOrganizationProduct { 
		"id"?: string;
	}
	
	export interface DomainOrganizationRole { 
		"id"?: string;
		"name"?: string;
		"description"?: string;
		"defaultRoleId"?: string;
		"permissions"?: Array<string>;
		"unusedPermissions"?: Array<string>;
		"permissionPolicies"?: Array<Models.DomainPermissionPolicy>;
		"userCount"?: number;
		"roleNeedsUpdate"?: boolean;
		"default"?: boolean;
		"base"?: boolean;
		"selfUri"?: string;
	}
	
	export interface DomainOrganizationRoleCreate { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"defaultRoleId"?: string;
		"permissions"?: Array<string>;
		"unusedPermissions"?: Array<string>;
		"permissionPolicies"?: Array<Models.DomainPermissionPolicy>;
		"userCount"?: number;
		"roleNeedsUpdate"?: boolean;
		"default"?: boolean;
		"base"?: boolean;
		"selfUri"?: string;
	}
	
	export interface DomainOrganizationRoleUpdate { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"defaultRoleId"?: string;
		"permissions"?: Array<string>;
		"unusedPermissions"?: Array<string>;
		"permissionPolicies"?: Array<Models.DomainPermissionPolicy>;
		"userCount"?: number;
		"roleNeedsUpdate"?: boolean;
		"default"?: boolean;
		"base"?: boolean;
		"selfUri"?: string;
	}
	
	export interface DomainPermission { 
		"domain"?: string;
		"entityType"?: string;
		"action"?: string;
		"label"?: string;
		"allowsConditions"?: boolean;
		"divisionAware"?: boolean;
	}
	
	export interface DomainPermissionCollection { 
		"id"?: string;
		"name"?: string;
		"domain"?: string;
		"permissionMap"?: { [key: string]: Array<Models.DomainPermission>; };
		"selfUri"?: string;
	}
	
	export interface DomainPermissionPolicy { 
		"domain"?: string;
		"entityName"?: string;
		"policyName"?: string;
		"policyDescription"?: string;
		"actionSet"?: Array<string>;
		"namedResources"?: Array<string>;
		"allowConditions"?: boolean;
		"resourceConditionNode"?: Models.DomainResourceConditionNode;
	}
	
	export interface DomainPhysicalCapabilities { 
		"vlan"?: boolean;
		"team"?: boolean;
	}
	
	export interface DomainPhysicalInterface { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"edgeUri"?: string;
		"friendlyName"?: string;
		"hardwareAddress"?: string;
		"portLabel"?: string;
		"physicalCapabilities"?: Models.DomainPhysicalCapabilities;
		"selfUri"?: string;
	}
	
	export interface DomainResourceConditionNode { 
		"variableName"?: string;
		"operator"?: string;
		"operands"?: Array<Models.DomainResourceConditionValue>;
		"conjunction"?: string;
		"terms"?: Array<Models.DomainResourceConditionNode>;
	}
	
	export interface DomainResourceConditionValue { 
		"user"?: Models.User;
		"queue"?: Models.Queue;
		"value"?: string;
		"type"?: string;
	}
	
	export interface DomainRole { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface DomainSchemaReference { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"selfUri"?: string;
	}
	
	export interface DownloadResponse { 
		"contentLocationUri"?: string;
		"imageUri"?: string;
		"thumbnails"?: Array<Models.DocumentThumbnail>;
	}
	
	export interface DraftValidationResult { 
		"valid"?: boolean;
		"errors"?: Array<Models.ErrorBody>;
	}
	
	export interface DurationCondition { 
		"durationTarget"?: string;
		"durationOperator"?: string;
		"durationRange"?: string;
	}
	
	export interface Edge { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"interfaces"?: Array<Models.EdgeInterface>;
		"make"?: string;
		"model"?: string;
		"apiVersion"?: string;
		"softwareVersion"?: string;
		"softwareVersionTimestamp"?: string;
		"softwareVersionPlatform"?: string;
		"softwareVersionConfiguration"?: string;
		"fullSoftwareVersion"?: string;
		"pairingId"?: string;
		"fingerprint"?: string;
		"fingerprintHint"?: string;
		"currentVersion"?: string;
		"stagedVersion"?: string;
		"patch"?: string;
		"statusCode"?: string;
		"edgeGroup"?: Models.EdgeGroup;
		"site"?: Models.Site;
		"softwareStatus"?: Models.DomainEdgeSoftwareUpdateDto;
		"onlineStatus"?: string;
		"serialNumber"?: string;
		"physicalEdge"?: boolean;
		"managed"?: boolean;
		"edgeDeploymentType"?: string;
		"callDrainingState"?: string;
		"conversationCount"?: number;
		"proxy"?: string;
		"offlineConfigCalled"?: boolean;
		"osName"?: string;
		"selfUri"?: string;
	}
	
	export interface EdgeAutoUpdateConfig { 
		"timeZone"?: string;
		"rrule"?: string;
		"start"?: string;
		"end"?: string;
	}
	
	export interface EdgeEntityListing { 
		"entities"?: Array<Models.Edge>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface EdgeGroup { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"managed"?: boolean;
		"edgeTrunkBaseAssignment": Models.TrunkBaseAssignment;
		"phoneTrunkBases": Array<Models.TrunkBase>;
		"selfUri"?: string;
	}
	
	export interface EdgeGroupEntityListing { 
		"entities"?: Array<Models.EdgeGroup>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface EdgeInterface { 
		"type"?: string;
		"ipAddress"?: string;
		"name"?: string;
		"macAddress"?: string;
		"ifName"?: string;
		"endpoints"?: Array<Models.DomainEntityRef>;
		"lineTypes"?: Array<string>;
		"addressFamilyId"?: string;
	}
	
	export interface EdgeLine { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"schema"?: Models.DomainEntityRef;
		"properties"?: { [key: string]: object; };
		"edge"?: Models.Edge;
		"edgeGroup"?: Models.EdgeGroup;
		"lineType"?: string;
		"endpoint"?: Models.Endpoint;
		"ipAddress"?: string;
		"logicalInterfaceId"?: string;
		"selfUri"?: string;
	}
	
	export interface EdgeLineEntityListing { 
		"entities"?: Array<Models.EdgeLine>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface EdgeLogsJob { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"files"?: Array<Models.EdgeLogsJobFile>;
		"selfUri"?: string;
	}
	
	export interface EdgeLogsJobFile { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"timeCreated"?: string;
		"timeModified"?: string;
		"sizeBytes"?: number;
		"uploadStatus"?: string;
		"edgePath"?: string;
		"downloadId"?: string;
		"selfUri"?: string;
	}
	
	export interface EdgeLogsJobRequest { 
		"path"?: string;
		"query"?: string;
		"recurse"?: boolean;
	}
	
	export interface EdgeLogsJobResponse { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"selfUri"?: string;
	}
	
	export interface EdgeLogsJobUploadRequest { 
		"fileIds": Array<string>;
	}
	
	export interface EdgeMetrics { 
		"edge"?: Models.DomainEntityRef;
		"eventTime"?: string;
		"upTimeMsec"?: number;
		"processors"?: Array<Models.EdgeMetricsProcessor>;
		"memory"?: Array<Models.EdgeMetricsMemory>;
		"disks"?: Array<Models.EdgeMetricsDisk>;
		"subsystems"?: Array<Models.EdgeMetricsSubsystem>;
		"networks"?: Array<Models.EdgeMetricsNetwork>;
	}
	
	export interface EdgeMetricsDisk { 
		"availableBytes"?: number;
		"partitionName"?: string;
		"totalBytes"?: number;
	}
	
	export interface EdgeMetricsMemory { 
		"availableBytes"?: number;
		"type"?: string;
		"totalBytes"?: number;
	}
	
	export interface EdgeMetricsNetwork { 
		"ifname"?: string;
		"sentBytesPerSec"?: number;
		"receivedBytesPerSec"?: number;
		"bandwidthBitsPerSec"?: number;
		"utilizationPct"?: number;
	}
	
	export interface EdgeMetricsProcessor { 
		"activeTimePct"?: number;
		"cpuId"?: string;
		"idleTimePct"?: number;
		"privilegedTimePct"?: number;
		"userTimePct"?: number;
	}
	
	export interface EdgeMetricsSubsystem { 
		"delayMs"?: number;
		"processName"?: string;
		"mediaSubsystem"?: Models.EdgeMetricsSubsystem;
	}
	
	export interface EdgeNetworkDiagnostic { 
		"id"?: string;
		"selfUri"?: string;
	}
	
	export interface EdgeNetworkDiagnosticRequest { 
		"host": string;
	}
	
	export interface EdgeNetworkDiagnosticResponse { 
		"commandCorrelationId"?: string;
		"diagnostics"?: string;
	}
	
	export interface EdgeRebootParameters { 
		"callDrainingWaitTimeSeconds"?: number;
	}
	
	export interface EdgeServiceStateRequest { 
		"inService": boolean;
		"callDrainingWaitTimeSeconds"?: number;
	}
	
	export interface EdgeTrunkBase { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"trunkMetabase": Models.DomainEntityRef;
		"properties"?: { [key: string]: object; };
		"trunkType": string;
		"selfUri"?: string;
	}
	
	export interface EdgeVersionInformation { 
		"softwareVersion"?: string;
	}
	
	export interface EdgeVersionReport { 
		"oldestVersion"?: Models.EdgeVersionInformation;
		"newestVersion"?: Models.EdgeVersionInformation;
	}
	
	export interface EffectiveConfiguration { 
		"properties": { [key: string]: object; };
		"advanced": { [key: string]: object; };
		"name": string;
		"notes": string;
		"credentials": { [key: string]: Models.CredentialInfo; };
	}
	
	export interface Email { 
		"state"?: string;
		"id"?: string;
		"held"?: boolean;
		"subject"?: string;
		"messagesSent"?: number;
		"segments"?: Array<Models.Segment>;
		"direction"?: string;
		"recordingId"?: string;
		"errorInfo"?: Models.ErrorBody;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"startAlertingTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"autoGenerated"?: boolean;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"messageId"?: string;
		"draftAttachments"?: Array<Models.Attachment>;
		"spam"?: boolean;
	}
	
	export interface EmailAddress { 
		"email"?: string;
		"name"?: string;
	}
	
	export interface EmailAttachment { 
		"name"?: string;
		"contentPath"?: string;
		"contentType"?: string;
		"attachmentId"?: string;
		"contentLength"?: number;
	}
	
	export interface EmailConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.EmailMediaParticipant>;
		"otherMediaUris"?: Array<string>;
		"selfUri"?: string;
	}
	
	export interface EmailConversationEntityListing { 
		"entities"?: Array<Models.EmailConversation>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface EmailMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.DomainEntityRef;
		"queue"?: Models.DomainEntityRef;
		"team"?: Models.DomainEntityRef;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.ErrorInfo;
		"script"?: Models.DomainEntityRef;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.DomainEntityRef;
		"externalOrganization"?: Models.DomainEntityRef;
		"wrapup"?: Models.Wrapup;
		"peer"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.JourneyContext;
		"conversationRoutingData"?: Models.ConversationRoutingData;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"subject"?: string;
		"messagesSent"?: number;
		"autoGenerated"?: boolean;
		"draftAttachments"?: Array<Models.Attachment>;
		"spam"?: boolean;
		"messageId"?: string;
	}
	
	export interface EmailMediaPolicy { 
		"actions"?: Models.PolicyActions;
		"conditions"?: Models.EmailMediaPolicyConditions;
	}
	
	export interface EmailMediaPolicyConditions { 
		"forUsers"?: Array<Models.User>;
		"dateRanges"?: Array<string>;
		"forQueues"?: Array<Models.Queue>;
		"wrapupCodes"?: Array<Models.WrapupCode>;
		"languages"?: Array<Models.Language>;
		"timeAllowed"?: Models.TimeAllowed;
	}
	
	export interface EmailMessage { 
		"id"?: string;
		"name"?: string;
		"to": Array<Models.EmailAddress>;
		"cc"?: Array<Models.EmailAddress>;
		"bcc"?: Array<Models.EmailAddress>;
		"from": Models.EmailAddress;
		"subject"?: string;
		"attachments"?: Array<Models.Attachment>;
		"textBody": string;
		"htmlBody"?: string;
		"time"?: string;
		"historyIncluded"?: boolean;
		"selfUri"?: string;
	}
	
	export interface EmailMessageListing { 
		"entities"?: Array<Models.EmailMessage>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface EmailSetup { 
		"rootDomain"?: string;
	}
	
	export interface EmbeddedIntegration { 
		"enableWhitelist"?: boolean;
		"domainWhitelist"?: Array<string>;
	}
	
	export interface EmergencyCallFlow { 
		"emergencyFlow"?: Models.DomainEntityRef;
		"ivrs"?: Array<Models.DomainEntityRef>;
	}
	
	export interface EmergencyGroup { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"enabled"?: boolean;
		"emergencyCallFlows"?: Array<Models.EmergencyCallFlow>;
		"selfUri"?: string;
	}
	
	export interface EmergencyGroupListing { 
		"entities"?: Array<Models.EmergencyGroup>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface EmployerInfo { 
		"officialName"?: string;
		"employeeId"?: string;
		"employeeType"?: string;
		"dateHire"?: string;
	}
	
	export interface Empty { 
	}
	
	export interface EncryptionKey { 
		"id"?: string;
		"name"?: string;
		"createDate"?: string;
		"keydataSummary"?: string;
		"user"?: Models.User;
		"localEncryptionConfiguration"?: Models.LocalEncryptionConfiguration;
		"selfUri"?: string;
	}
	
	export interface EncryptionKeyEntityListing { 
		"entities"?: Array<Models.EncryptionKey>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface Endpoint { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"count"?: number;
		"properties"?: { [key: string]: object; };
		"schema": Models.DomainEntityRef;
		"enabled"?: boolean;
		"site"?: Models.DomainEntityRef;
		"dids"?: Array<string>;
		"selfUri"?: string;
	}
	
	export interface EntityListing { 
		"entities"?: Array<object>;
	}
	
	export interface Entry { 
		"value"?: string;
		"count"?: number;
	}
	
	export interface ErrorBody { 
		"message"?: string;
		"code"?: string;
		"status"?: number;
		"entityId"?: string;
		"entityName"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"contextId"?: string;
		"details"?: Array<Models.Detail>;
		"errors"?: Array<Models.ErrorBody>;
	}
	
	export interface ErrorDetails { 
		"status"?: number;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"code"?: string;
		"contextId"?: string;
		"nested"?: Models.ErrorDetails;
		"details"?: string;
	}
	
	export interface ErrorInfo { 
		"message"?: string;
		"code"?: string;
	}
	
	export interface EstimatedWaitTimePredictions { 
		"results": Array<Models.PredictionResults>;
	}
	
	export interface Evaluation { 
		"id"?: string;
		"name"?: string;
		"conversation"?: Models.Conversation;
		"evaluationForm"?: Models.EvaluationForm;
		"evaluator"?: Models.User;
		"agent"?: Models.User;
		"calibration"?: Models.Calibration;
		"status"?: string;
		"answers"?: Models.EvaluationScoringSet;
		"agentHasRead"?: boolean;
		"releaseDate"?: string;
		"assignedDate"?: string;
		"changedDate"?: string;
		"queue"?: Models.Queue;
		"mediaType"?: Array<string>;
		"rescore"?: boolean;
		"conversationDate"?: string;
		"conversationEndDate"?: string;
		"neverRelease"?: boolean;
		"resourceId"?: string;
		"resourceType"?: string;
		"redacted"?: boolean;
		"isScoringIndex"?: boolean;
		"selfUri"?: string;
	}
	
	export interface EvaluationAggregateDataContainer { 
		"group"?: { [key: string]: string; };
		"data"?: Array<Models.StatisticalResponse>;
	}
	
	export interface EvaluationAggregateQueryClause { 
		"type": string;
		"predicates": Array<Models.EvaluationAggregateQueryPredicate>;
	}
	
	export interface EvaluationAggregateQueryFilter { 
		"type": string;
		"clauses"?: Array<Models.EvaluationAggregateQueryClause>;
		"predicates"?: Array<Models.EvaluationAggregateQueryPredicate>;
	}
	
	export interface EvaluationAggregateQueryPredicate { 
		"type"?: string;
		"dimension"?: string;
		"operator"?: string;
		"value"?: string;
		"range"?: Models.NumericRange;
	}
	
	export interface EvaluationAggregateQueryResponse { 
		"results"?: Array<Models.EvaluationAggregateDataContainer>;
	}
	
	export interface EvaluationAggregationQuery { 
		"interval": string;
		"granularity"?: string;
		"timeZone"?: string;
		"groupBy"?: Array<string>;
		"filter"?: Models.EvaluationAggregateQueryFilter;
		"metrics"?: Array<string>;
		"flattenMultivaluedDimensions"?: boolean;
		"views"?: Array<Models.EvaluationAggregationView>;
		"alternateTimeDimension"?: string;
	}
	
	export interface EvaluationAggregationView { 
		"target": string;
		"name": string;
		"function": string;
		"range"?: Models.AggregationRange;
	}
	
	export interface EvaluationAssignment { 
		"evaluationForm"?: Models.EvaluationForm;
		"user"?: Models.User;
	}
	
	export interface EvaluationDetailQueryClause { 
		"type": string;
		"predicates": Array<Models.EvaluationDetailQueryPredicate>;
	}
	
	export interface EvaluationDetailQueryFilter { 
		"type": string;
		"clauses"?: Array<Models.EvaluationDetailQueryClause>;
		"predicates"?: Array<Models.EvaluationDetailQueryPredicate>;
	}
	
	export interface EvaluationDetailQueryPredicate { 
		"type"?: string;
		"dimension"?: string;
		"metric"?: string;
		"operator"?: string;
		"value"?: string;
		"range"?: Models.NumericRange;
	}
	
	export interface EvaluationEntityListing { 
		"entities"?: Array<Models.Evaluation>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface EvaluationForm { 
		"id"?: string;
		"name": string;
		"modifiedDate"?: string;
		"published"?: boolean;
		"contextId"?: string;
		"questionGroups": Array<Models.EvaluationQuestionGroup>;
		"publishedVersions"?: Models.DomainEntityListingEvaluationForm;
		"selfUri"?: string;
	}
	
	export interface EvaluationFormAndScoringSet { 
		"evaluationForm"?: Models.EvaluationForm;
		"answers"?: Models.EvaluationScoringSet;
	}
	
	export interface EvaluationFormEntityListing { 
		"entities"?: Array<Models.EvaluationForm>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface EvaluationQuestion { 
		"id"?: string;
		"text"?: string;
		"helpText"?: string;
		"type"?: string;
		"naEnabled"?: boolean;
		"commentsRequired"?: boolean;
		"visibilityCondition"?: Models.VisibilityCondition;
		"answerOptions"?: Array<Models.AnswerOption>;
		"isKill"?: boolean;
		"isCritical"?: boolean;
	}
	
	export interface EvaluationQuestionGroup { 
		"id"?: string;
		"name"?: string;
		"type"?: string;
		"defaultAnswersToHighest"?: boolean;
		"defaultAnswersToNA"?: boolean;
		"naEnabled"?: boolean;
		"weight"?: number;
		"manualWeight"?: boolean;
		"questions"?: Array<Models.EvaluationQuestion>;
		"visibilityCondition"?: Models.VisibilityCondition;
	}
	
	export interface EvaluationQuestionGroupScore { 
		"questionGroupId"?: string;
		"totalScore"?: number;
		"maxTotalScore"?: number;
		"markedNA"?: boolean;
		"totalCriticalScore"?: number;
		"maxTotalCriticalScore"?: number;
		"totalNonCriticalScore"?: number;
		"maxTotalNonCriticalScore"?: number;
		"totalScoreUnweighted"?: number;
		"maxTotalScoreUnweighted"?: number;
		"totalCriticalScoreUnweighted"?: number;
		"maxTotalCriticalScoreUnweighted"?: number;
		"totalNonCriticalScoreUnweighted"?: number;
		"maxTotalNonCriticalScoreUnweighted"?: number;
		"questionScores"?: Array<Models.EvaluationQuestionScore>;
	}
	
	export interface EvaluationQuestionScore { 
		"questionId"?: string;
		"answerId"?: string;
		"score"?: number;
		"markedNA"?: boolean;
		"failedKillQuestion"?: boolean;
		"comments"?: string;
	}
	
	export interface EvaluationScoringSet { 
		"totalScore"?: number;
		"totalCriticalScore"?: number;
		"totalNonCriticalScore"?: number;
		"questionGroupScores"?: Array<Models.EvaluationQuestionGroupScore>;
		"anyFailedKillQuestions"?: boolean;
		"comments"?: string;
		"agentComments"?: string;
	}
	
	export interface EvaluatorActivity { 
		"id"?: string;
		"name"?: string;
		"evaluator"?: Models.User;
		"numEvaluationsAssigned"?: number;
		"numEvaluationsStarted"?: number;
		"numEvaluationsCompleted"?: number;
		"numCalibrationsAssigned"?: number;
		"numCalibrationsStarted"?: number;
		"numCalibrationsCompleted"?: number;
		"selfUri"?: string;
	}
	
	export interface EvaluatorActivityEntityListing { 
		"entities"?: Array<Models.EvaluatorActivity>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface EventEntity { 
		"entityType"?: string;
		"id"?: string;
	}
	
	export interface EventLog { 
		"id"?: string;
		"name"?: string;
		"errorEntity"?: Models.DomainEntityRef;
		"relatedEntity"?: Models.DomainEntityRef;
		"timestamp"?: string;
		"level"?: string;
		"category"?: string;
		"correlationId"?: string;
		"eventMessage"?: Models.EventMessage;
		"selfUri"?: string;
	}
	
	export interface EventMessage { 
		"code"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: object; };
		"documentationUri"?: string;
		"resourceURIs"?: Array<string>;
	}
	
	export interface ExecuteRecordingJobsQuery { 
		"state": string;
	}
	
	export interface ExpansionCriterium { 
		"type"?: string;
		"threshold"?: number;
	}
	
	export interface ExportScriptRequest { 
		"fileName"?: string;
		"versionId"?: string;
	}
	
	export interface ExportScriptResponse { 
		"url"?: string;
	}
	
	export interface ExportUri { 
		"uri"?: string;
		"exportTimestamp"?: string;
	}
	
	export interface Extension { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"number"?: string;
		"owner"?: Models.DomainEntityRef;
		"extensionPool"?: Models.DomainEntityRef;
		"ownerType"?: string;
		"selfUri"?: string;
	}
	
	export interface ExtensionEntityListing { 
		"entities"?: Array<Models.Extension>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ExtensionPool { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"startNumber"?: string;
		"endNumber"?: string;
		"selfUri"?: string;
	}
	
	export interface ExtensionPoolEntityListing { 
		"entities"?: Array<Models.ExtensionPool>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ExternalContact { 
		"id"?: string;
		"firstName": string;
		"middleName"?: string;
		"lastName": string;
		"salutation"?: string;
		"title"?: string;
		"workPhone"?: Models.PhoneNumber;
		"cellPhone"?: Models.PhoneNumber;
		"homePhone"?: Models.PhoneNumber;
		"otherPhone"?: Models.PhoneNumber;
		"workEmail"?: string;
		"personalEmail"?: string;
		"otherEmail"?: string;
		"address"?: Models.ContactAddress;
		"twitterId"?: Models.TwitterId;
		"lineId"?: Models.LineId;
		"whatsAppId"?: Models.WhatsAppId;
		"facebookId"?: Models.FacebookId;
		"modifyDate"?: string;
		"createDate"?: string;
		"externalOrganization"?: Models.ExternalOrganization;
		"surveyOptOut"?: boolean;
		"externalSystemUrl"?: string;
		"externalDataSources"?: Array<Models.ExternalDataSource>;
		"selfUri"?: string;
	}
	
	export interface ExternalDataSource { 
		"platform"?: string;
		"url"?: string;
	}
	
	export interface ExternalOrganization { 
		"id"?: string;
		"name": string;
		"companyType"?: string;
		"industry"?: string;
		"primaryContactId"?: string;
		"address"?: Models.ContactAddress;
		"phoneNumber"?: Models.PhoneNumber;
		"faxNumber"?: Models.PhoneNumber;
		"employeeCount"?: number;
		"revenue"?: number;
		"tags"?: Array<string>;
		"websites"?: Array<string>;
		"tickers"?: Array<Models.Ticker>;
		"twitterId"?: Models.TwitterId;
		"externalSystemUrl"?: string;
		"modifyDate"?: string;
		"createDate"?: string;
		"trustor"?: Models.Trustor;
		"externalDataSources"?: Array<Models.ExternalDataSource>;
		"selfUri"?: string;
	}
	
	export interface ExternalOrganizationListing { 
		"entities"?: Array<Models.ExternalOrganization>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface FacebookId { 
		"ids"?: Array<Models.FacebookScopedId>;
		"displayName"?: string;
	}
	
	export interface FacebookIntegration { 
		"id": string;
		"name": string;
		"appId": string;
		"pageId"?: string;
		"status"?: string;
		"recipient"?: Models.DomainEntityRef;
		"dateCreated"?: string;
		"dateModified"?: string;
		"createdBy"?: Models.DomainEntityRef;
		"modifiedBy"?: Models.DomainEntityRef;
		"version": number;
		"selfUri"?: string;
	}
	
	export interface FacebookIntegrationEntityListing { 
		"entities"?: Array<Models.FacebookIntegration>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface FacebookIntegrationRequest { 
		"id"?: string;
		"name": string;
		"pageAccessToken"?: string;
		"userAccessToken"?: string;
		"pageId"?: string;
		"appId"?: string;
		"appSecret"?: string;
		"selfUri"?: string;
	}
	
	export interface FacebookScopedId { 
		"scopedId"?: string;
	}
	
	export interface Facet { 
		"name": string;
		"type": string;
	}
	
	export interface FacetEntry { 
		"attribute"?: Models.TermAttribute;
		"statistics"?: Models.FacetStatistics;
		"other"?: number;
		"total"?: number;
		"missing"?: number;
		"termCount"?: number;
		"termType"?: string;
		"terms"?: Array<Models.FacetTerm>;
	}
	
	export interface FacetInfo { 
		"name"?: string;
		"entries"?: Array<Models.Entry>;
	}
	
	export interface FacetKeyAttribute { 
		"id"?: string;
		"name"?: string;
		"count"?: number;
	}
	
	export interface FacetStatistics { 
		"count"?: number;
		"min"?: number;
		"max"?: number;
		"mean"?: number;
		"stdDeviation"?: number;
		"dateMin"?: string;
		"dateMax"?: string;
	}
	
	export interface FacetTerm { 
		"term"?: string;
		"key"?: number;
		"id"?: string;
		"name"?: string;
		"count"?: number;
		"time"?: string;
	}
	
	export interface FailedObject { 
		"id"?: string;
		"version"?: string;
		"name"?: string;
		"errorCode"?: string;
	}
	
	export interface FaxDocument { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"contentUri"?: string;
		"workspace"?: Models.DomainEntityRef;
		"createdBy"?: Models.DomainEntityRef;
		"contentType"?: string;
		"contentLength"?: number;
		"filename"?: string;
		"read"?: boolean;
		"pageCount"?: number;
		"callerAddress"?: string;
		"receiverAddress"?: string;
		"thumbnails"?: Array<Models.DocumentThumbnail>;
		"sharingUri"?: string;
		"downloadSharingUri"?: string;
		"selfUri"?: string;
	}
	
	export interface FaxDocumentEntityListing { 
		"entities"?: Array<Models.FaxDocument>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface FaxSendRequest { 
		"id"?: string;
		"name"?: string;
		"addresses": Array<string>;
		"documentId"?: string;
		"contentType"?: string;
		"workspace"?: Models.Workspace;
		"coverSheet"?: Models.CoverSheet;
		"timeZoneOffsetMinutes"?: number;
		"selfUri"?: string;
	}
	
	export interface FaxSendResponse { 
		"id"?: string;
		"name"?: string;
		"uploadDestinationUri"?: string;
		"uploadMethodType"?: string;
		"selfUri"?: string;
	}
	
	export interface FaxStatus { 
		"direction"?: string;
		"expectedPages"?: number;
		"activePage"?: number;
		"linesTransmitted"?: number;
		"bytesTransmitted"?: number;
		"baudRate"?: number;
		"pageErrors"?: number;
		"lineErrors"?: number;
	}
	
	export interface FaxSummary { 
		"readCount"?: number;
		"unreadCount"?: number;
		"totalCount"?: number;
	}
	
	export interface FaxTopicFaxDataV2 { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"workspace"?: Models.FaxTopicWorkspaceData;
		"createdBy"?: Models.FaxTopicUserData;
		"contentType"?: string;
		"contentLength"?: number;
		"filename"?: string;
		"changeNumber"?: number;
		"dateUploaded"?: string;
		"uploadedBy"?: Models.FaxTopicUserData;
		"lockInfo"?: Models.FaxTopicLockData;
		"selfUri"?: string;
		"callerAddress"?: string;
		"receiverAddress"?: string;
		"read"?: boolean;
	}
	
	export interface FaxTopicLockData { 
		"lockedBy"?: Models.FaxTopicUserData;
		"dateCreated"?: string;
		"dateExpires"?: string;
	}
	
	export interface FaxTopicUserData { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface FaxTopicWorkspaceData { 
		"id"?: string;
	}
	
	export interface FeatureState { 
		"enabled"?: boolean;
	}
	
	export interface FieldConfig { 
		"id"?: string;
		"name"?: string;
		"entityType"?: string;
		"state"?: string;
		"sections"?: Array<Models.Section>;
		"version"?: string;
		"schemaVersion"?: string;
		"selfUri"?: string;
	}
	
	export interface FieldConfigs { 
		"org"?: Models.FieldConfig;
		"person"?: Models.FieldConfig;
		"group"?: Models.FieldConfig;
		"externalContact"?: Models.FieldConfig;
	}
	
	export interface FieldList { 
		"customLabels"?: boolean;
		"instructionText"?: string;
		"key"?: string;
		"labelKeys"?: Array<string>;
		"params"?: { [key: string]: object; };
		"repeatable"?: boolean;
		"state"?: string;
		"type"?: string;
		"required"?: boolean;
	}
	
	export interface Filter { 
		"name": string;
		"type": string;
		"operator": string;
		"values": Array<string>;
	}
	
	export interface FilterPreviewResponse { 
		"filteredContacts"?: number;
		"totalContacts"?: number;
		"preview"?: Array<Models.DialerContact>;
	}
	
	export interface Flow { 
		"id"?: string;
		"name": string;
		"division"?: Models.WritableDivision;
		"description"?: string;
		"type"?: string;
		"lockedUser"?: Models.User;
		"lockedClient"?: Models.DomainEntityRef;
		"active"?: boolean;
		"system"?: boolean;
		"deleted"?: boolean;
		"publishedVersion"?: Models.FlowVersion;
		"savedVersion"?: Models.FlowVersion;
		"inputSchema"?: object;
		"outputSchema"?: object;
		"checkedInVersion"?: Models.FlowVersion;
		"debugVersion"?: Models.FlowVersion;
		"publishedBy"?: Models.User;
		"currentOperation"?: Models.Operation;
		"selfUri"?: string;
	}
	
	export interface FlowAggregateDataContainer { 
		"group"?: { [key: string]: string; };
		"data"?: Array<Models.StatisticalResponse>;
	}
	
	export interface FlowAggregateQueryClause { 
		"type": string;
		"predicates": Array<Models.FlowAggregateQueryPredicate>;
	}
	
	export interface FlowAggregateQueryFilter { 
		"type": string;
		"clauses"?: Array<Models.FlowAggregateQueryClause>;
		"predicates"?: Array<Models.FlowAggregateQueryPredicate>;
	}
	
	export interface FlowAggregateQueryPredicate { 
		"type"?: string;
		"dimension"?: string;
		"operator"?: string;
		"value"?: string;
		"range"?: Models.NumericRange;
	}
	
	export interface FlowAggregateQueryResponse { 
		"results"?: Array<Models.FlowAggregateDataContainer>;
	}
	
	export interface FlowAggregationQuery { 
		"interval": string;
		"granularity"?: string;
		"timeZone"?: string;
		"groupBy"?: Array<string>;
		"filter"?: Models.FlowAggregateQueryFilter;
		"metrics"?: Array<string>;
		"flattenMultivaluedDimensions"?: boolean;
		"views"?: Array<Models.FlowAggregationView>;
		"alternateTimeDimension"?: string;
	}
	
	export interface FlowAggregationView { 
		"target": string;
		"name": string;
		"function": string;
		"range"?: Models.AggregationRange;
	}
	
	export interface FlowDiagnosticInfo { 
		"lastActionId"?: number;
	}
	
	export interface FlowDivisionView { 
		"id"?: string;
		"name": string;
		"division"?: Models.WritableDivision;
		"type"?: string;
		"inputSchema"?: Models.JsonSchemaDocument;
		"outputSchema"?: Models.JsonSchemaDocument;
		"selfUri"?: string;
	}
	
	export interface FlowDivisionViewEntityListing { 
		"entities"?: Array<Models.FlowDivisionView>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface FlowEntityListing { 
		"entities"?: Array<Models.Flow>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface FlowObservationDataContainer { 
		"group"?: { [key: string]: string; };
		"data"?: Array<Models.ObservationMetricData>;
	}
	
	export interface FlowObservationQuery { 
		"filter": Models.FlowObservationQueryFilter;
		"metrics"?: Array<string>;
		"detailMetrics"?: Array<string>;
	}
	
	export interface FlowObservationQueryClause { 
		"type": string;
		"predicates": Array<Models.FlowObservationQueryPredicate>;
	}
	
	export interface FlowObservationQueryFilter { 
		"type": string;
		"clauses"?: Array<Models.FlowObservationQueryClause>;
		"predicates"?: Array<Models.FlowObservationQueryPredicate>;
	}
	
	export interface FlowObservationQueryPredicate { 
		"type"?: string;
		"dimension"?: string;
		"operator"?: string;
		"value"?: string;
		"range"?: Models.NumericRange;
	}
	
	export interface FlowObservationQueryResponse { 
		"results"?: Array<Models.FlowObservationDataContainer>;
	}
	
	export interface FlowOutcome { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"currentOperation"?: Models.Operation;
		"selfUri"?: string;
	}
	
	export interface FlowOutcomeListing { 
		"entities"?: Array<Models.FlowOutcome>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface FlowVersion { 
		"id"?: string;
		"name"?: string;
		"commitVersion"?: string;
		"configurationVersion"?: string;
		"type"?: string;
		"secure"?: boolean;
		"debug"?: boolean;
		"createdBy"?: Models.User;
		"createdByClient"?: Models.DomainEntityRef;
		"configurationUri"?: string;
		"dateCreated"?: number;
		"generationId"?: string;
		"publishResultUri"?: string;
		"inputSchema"?: Models.JsonSchemaDocument;
		"outputSchema"?: Models.JsonSchemaDocument;
		"selfUri"?: string;
	}
	
	export interface FlowVersionEntityListing { 
		"entities"?: Array<Models.FlowVersion>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ForecastGenerationResult { 
		"routeGroupResults"?: Array<Models.ForecastGenerationRouteGroupResult>;
	}
	
	export interface ForecastGenerationRouteGroupResult { 
		"routeGroup"?: Models.RouteGroupAttributes;
		"metricResults"?: Array<Models.ForecastTimeSeriesResult>;
	}
	
	export interface ForecastResultResponse { 
		"result"?: Models.RouteGroupList;
		"downloadUrl"?: string;
	}
	
	export interface ForecastSourceDayPointer { 
		"dayOfWeek"?: string;
		"weight"?: number;
		"date"?: string;
		"fileName"?: string;
		"dataKey"?: string;
	}
	
	export interface ForecastTimeSeriesResult { 
		"metric"?: string;
		"forecastingMethod"?: string;
	}
	
	export interface FreeSeatingConfiguration { 
		"freeSeatingState"?: string;
		"ttlMinutes"?: number;
	}
	
	export interface GDPRJourneyCustomer { 
		"type"?: string;
		"id"?: string;
	}
	
	export interface GDPRRequest { 
		"id"?: string;
		"name"?: string;
		"createdBy": Models.DomainEntityRef;
		"replacementTerms"?: Array<Models.ReplacementTerm>;
		"requestType": string;
		"createdDate": string;
		"status": string;
		"subject": Models.GDPRSubject;
		"resultsUrl"?: string;
		"selfUri"?: string;
	}
	
	export interface GDPRRequestEntityListing { 
		"entities"?: Array<Models.GDPRRequest>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface GDPRSubject { 
		"name"?: string;
		"userId"?: string;
		"externalContactId"?: string;
		"dialerContactId"?: Models.DialerContactId;
		"journeyCustomer"?: Models.GDPRJourneyCustomer;
		"socialHandle"?: Models.SocialHandle;
		"addresses"?: Array<string>;
		"phoneNumbers"?: Array<string>;
		"emailAddresses"?: Array<string>;
	}
	
	export interface GDPRSubjectEntityListing { 
		"entities"?: Array<Models.GDPRSubject>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface GKNDocumentationResult { 
		"content"?: string;
		"link"?: string;
		"title"?: string;
		"_type": string;
	}
	
	export interface GKNDocumentationSearchCriteria { 
		"endValue"?: string;
		"values"?: Array<string>;
		"startValue"?: string;
		"fields"?: Array<string>;
		"value"?: string;
		"operator"?: string;
		"group"?: Array<Models.GKNDocumentationSearchCriteria>;
		"type": string;
	}
	
	export interface GKNDocumentationSearchRequest { 
		"sortOrder"?: string;
		"sortBy"?: string;
		"pageSize"?: number;
		"pageNumber"?: number;
		"sort"?: Array<Models.SearchSort>;
		"query"?: Array<Models.GKNDocumentationSearchCriteria>;
	}
	
	export interface GKNDocumentationSearchResponse { 
		"total": number;
		"pageCount": number;
		"pageSize": number;
		"pageNumber": number;
		"previousPage"?: string;
		"currentPage"?: string;
		"nextPage"?: string;
		"types": Array<string>;
		"results": Array<Models.GKNDocumentationResult>;
	}
	
	export interface GSuite { 
		"id"?: string;
		"name"?: string;
		"relyingPartyIdentifier"?: string;
		"certificate"?: string;
		"ssoTargetURI"?: string;
		"issuerURI"?: string;
		"disabled"?: boolean;
		"selfUri"?: string;
	}
	
	export interface GenerateShortTermForecastRequest { 
		"description": string;
	}
	
	export interface GenerateShortTermForecastResponse { 
		"status"?: string;
		"result"?: Models.ShortTermForecast;
		"operationId"?: string;
		"progress"?: number;
	}
	
	export interface GenerateWeekScheduleRequest { 
		"description": string;
		"shortTermForecastId": string;
	}
	
	export interface GenerateWeekScheduleResponse { 
		"downloadUrl"?: string;
		"status"?: string;
		"operationId"?: string;
	}
	
	export interface Geolocation { 
		"id"?: string;
		"name"?: string;
		"type"?: string;
		"primary"?: boolean;
		"latitude"?: number;
		"longitude"?: number;
		"country"?: string;
		"region"?: string;
		"city"?: string;
		"locations"?: Array<Models.LocationDefinition>;
		"selfUri"?: string;
	}
	
	export interface GeolocationEventGeolocation { 
		"userId"?: string;
		"type"?: string;
		"country"?: string;
		"region"?: string;
		"city"?: string;
	}
	
	export interface GeolocationSettings { 
		"id"?: string;
		"name"?: string;
		"enabled"?: boolean;
		"mapboxKey"?: string;
		"selfUri"?: string;
	}
	
	export interface Greeting { 
		"id"?: string;
		"name"?: string;
		"type": string;
		"ownerType": string;
		"owner": Models.DomainEntity;
		"audioFile"?: Models.GreetingAudioFile;
		"audioTTS"?: string;
		"createdDate"?: string;
		"createdBy"?: string;
		"modifiedDate"?: string;
		"modifiedBy"?: string;
		"selfUri"?: string;
	}
	
	export interface GreetingAudioFile { 
		"durationMilliseconds"?: number;
		"sizeBytes"?: number;
		"selfUri"?: string;
	}
	
	export interface GreetingListing { 
		"entities"?: Array<Models.Greeting>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface GreetingMediaInfo { 
		"id"?: string;
		"mediaFileUri"?: string;
		"mediaImageUri"?: string;
	}
	
	export interface GreetingOwner { 
		"id"?: string;
		"name"?: string;
		"selfUri"?: string;
	}
	
	export interface Group { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"dateModified"?: string;
		"memberCount"?: number;
		"state"?: string;
		"version"?: number;
		"type": string;
		"images"?: Array<Models.UserImage>;
		"addresses"?: Array<Models.GroupContact>;
		"rulesVisible": boolean;
		"visibility": string;
		"owners"?: Array<Models.User>;
		"selfUri"?: string;
	}
	
	export interface GroupContact { 
		"address": string;
		"extension"?: string;
		"display"?: string;
		"type": string;
		"mediaType": string;
	}
	
	export interface GroupCreate { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"dateModified"?: string;
		"memberCount"?: number;
		"state"?: string;
		"version"?: number;
		"type": string;
		"images"?: Array<Models.UserImage>;
		"addresses"?: Array<Models.GroupContact>;
		"rulesVisible": boolean;
		"visibility": string;
		"ownerIds"?: Array<string>;
		"selfUri"?: string;
	}
	
	export interface GroupEntityListing { 
		"entities"?: Array<Models.Group>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface GroupGreetingEventGreeting { 
		"id"?: string;
		"name"?: string;
		"type"?: string;
		"ownerType"?: string;
		"owner"?: Models.GroupGreetingEventGreetingOwner;
		"greetingAudioFile"?: Models.GroupGreetingEventGreetingAudioFile;
		"audioTTS"?: string;
	}
	
	export interface GroupGreetingEventGreetingAudioFile { 
		"durationMilliseconds"?: number;
		"sizeBytes"?: number;
	}
	
	export interface GroupGreetingEventGreetingOwner { 
		"id"?: string;
	}
	
	export interface GroupMembersUpdate { 
		"memberIds": Array<string>;
		"version": number;
	}
	
	export interface GroupProfile { 
		"id"?: string;
		"name"?: string;
		"state"?: string;
		"dateModified"?: string;
		"version": number;
		"selfUri"?: string;
	}
	
	export interface GroupProfileEntityListing { 
		"entities"?: Array<Models.GroupProfile>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface GroupSearchCriteria { 
		"endValue"?: string;
		"values"?: Array<string>;
		"startValue"?: string;
		"fields"?: Array<string>;
		"value"?: string;
		"operator"?: string;
		"group"?: Array<Models.GroupSearchCriteria>;
		"type": string;
	}
	
	export interface GroupSearchRequest { 
		"sortOrder"?: string;
		"sortBy"?: string;
		"pageSize"?: number;
		"pageNumber"?: number;
		"sort"?: Array<Models.SearchSort>;
		"query"?: Array<Models.GroupSearchCriteria>;
	}
	
	export interface GroupUpdate { 
		"id"?: string;
		"name"?: string;
		"description"?: string;
		"state"?: string;
		"version": number;
		"images"?: Array<Models.UserImage>;
		"addresses"?: Array<Models.GroupContact>;
		"rulesVisible"?: boolean;
		"visibility"?: string;
		"ownerIds"?: Array<string>;
		"selfUri"?: string;
	}
	
	export interface GroupsSearchResponse { 
		"total": number;
		"pageCount": number;
		"pageSize": number;
		"pageNumber": number;
		"previousPage"?: string;
		"currentPage"?: string;
		"nextPage"?: string;
		"types": Array<string>;
		"results": Array<Models.Group>;
	}
	
	export interface GuestMemberInfo { 
		"displayName": string;
		"avatarImageUrl"?: string;
		"customFields"?: { [key: string]: string; };
	}
	
	export interface HeadcountForecast { 
		"required": Array<Models.HeadcountInterval>;
		"requiredWithoutShrinkage": Array<Models.HeadcountInterval>;
	}
	
	export interface HeadcountInterval { 
		"interval": string;
		"value": number;
	}
	
	export interface HelpLink { 
		"uri"?: string;
		"title"?: string;
		"description"?: string;
	}
	
	export interface HistoryEntry { 
		"action"?: string;
		"resource"?: string;
		"timestamp"?: string;
		"user"?: Models.User;
		"client"?: Models.DomainEntityRef;
		"version"?: string;
		"secure"?: boolean;
	}
	
	export interface HistoryListing { 
		"id"?: string;
		"complete"?: boolean;
		"user"?: Models.User;
		"client"?: Models.DomainEntityRef;
		"errorMessage"?: string;
		"errorCode"?: string;
		"errorDetails"?: Array<Models.Detail>;
		"errorMessageParams"?: { [key: string]: string; };
		"actionName"?: string;
		"actionStatus"?: string;
		"name"?: string;
		"description"?: string;
		"system"?: boolean;
		"started"?: string;
		"completed"?: string;
		"entities"?: Array<Models.HistoryEntry>;
		"total"?: number;
		"pageSize"?: number;
		"pageNumber"?: number;
		"pageCount"?: number;
	}
	
	export interface HomerRecord { 
		"id"?: string;
		"name"?: string;
		"date"?: string;
		"milliTs"?: string;
		"microTs"?: string;
		"method"?: string;
		"replyReason"?: string;
		"ruri"?: string;
		"ruriUser"?: string;
		"ruriDomain"?: string;
		"fromUser"?: string;
		"fromDomain"?: string;
		"fromTag"?: string;
		"toUser"?: string;
		"toDomain"?: string;
		"toTag"?: string;
		"pidUser"?: string;
		"contactUser"?: string;
		"authUser"?: string;
		"callid"?: string;
		"callidAleg"?: string;
		"via1"?: string;
		"via1Branch"?: string;
		"cseq"?: string;
		"diversion"?: string;
		"reason"?: string;
		"contentType"?: string;
		"auth"?: string;
		"userAgent"?: string;
		"sourceIp"?: string;
		"sourcePort"?: string;
		"destinationIp"?: string;
		"destinationPort"?: string;
		"contactIp"?: string;
		"contactPort"?: string;
		"originatorIp"?: string;
		"originatorPort"?: string;
		"correlationId"?: string;
		"proto"?: string;
		"family"?: string;
		"rtpStat"?: string;
		"type"?: string;
		"node"?: string;
		"trans"?: string;
		"dbnode"?: string;
		"msg"?: string;
		"sourceAlias"?: string;
		"destinationAlias"?: string;
		"conversationId"?: string;
		"participantId"?: string;
		"selfUri"?: string;
	}
	
	export interface IVR { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"dnis"?: Array<string>;
		"openHoursFlow"?: Models.DomainEntityRef;
		"closedHoursFlow"?: Models.DomainEntityRef;
		"holidayHoursFlow"?: Models.DomainEntityRef;
		"scheduleGroup"?: Models.DomainEntityRef;
		"selfUri"?: string;
	}
	
	export interface IVREntityListing { 
		"entities"?: Array<Models.IVR>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface IdentityNow { 
		"id"?: string;
		"name"?: string;
		"relyingPartyIdentifier"?: string;
		"certificate"?: string;
		"ssoTargetURI"?: string;
		"issuerURI"?: string;
		"disabled"?: boolean;
		"selfUri"?: string;
	}
	
	export interface IgnoredActivityCategories { 
		"values"?: Array<string>;
	}
	
	export interface ImportScriptStatusResponse { 
		"url"?: string;
		"succeeded"?: boolean;
		"message"?: string;
	}
	
	export interface ImportShortTermForecastRequest { 
		"fileName"?: string;
		"description": string;
		"routeGroupList": Models.RouteGroupList;
		"partialUploadIds"?: Array<string>;
	}
	
	export interface ImportStatus { 
		"state": string;
		"totalRecords": number;
		"completedRecords": number;
		"percentComplete": number;
		"failureReason"?: string;
	}
	
	export interface ImportWeekScheduleRequest { 
		"description": string;
		"userSchedules"?: { [key: string]: Models.UserSchedule; };
		"published"?: boolean;
		"shortTermForecastId"?: string;
		"partialUploadIds"?: Array<string>;
	}
	
	export interface InboundDomain { 
		"id"?: string;
		"name"?: string;
		"mxRecordStatus": string;
		"subDomain"?: boolean;
		"mailFromSettings"?: Models.MailFromResult;
		"customSMTPServer"?: Models.DomainEntityRef;
		"selfUri"?: string;
	}
	
	export interface InboundDomainEntityListing { 
		"entities"?: Array<Models.InboundDomain>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface InboundMessageRequest { 
		"queueId"?: string;
		"flowId"?: string;
		"provider": string;
		"skillIds"?: Array<string>;
		"languageId"?: string;
		"priority"?: number;
		"attributes"?: { [key: string]: string; };
		"toAddress"?: string;
		"toName"?: string;
		"fromAddress"?: string;
		"fromName"?: string;
		"subject"?: string;
	}
	
	export interface InboundRoute { 
		"id"?: string;
		"name"?: string;
		"pattern": string;
		"queue"?: Models.DomainEntityRef;
		"priority"?: number;
		"skills"?: Array<Models.DomainEntityRef>;
		"language"?: Models.DomainEntityRef;
		"fromName": string;
		"fromEmail": string;
		"flow"?: Models.DomainEntityRef;
		"replyEmailAddress"?: Models.QueueEmailAddress;
		"autoBcc"?: Array<Models.EmailAddress>;
		"spamFlow"?: Models.DomainEntityRef;
		"selfUri"?: string;
	}
	
	export interface InboundRouteEntityListing { 
		"entities"?: Array<Models.InboundRoute>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface InitiateScreenRecording { 
		"recordACW"?: boolean;
		"archiveRetention"?: Models.ArchiveRetention;
		"deleteRetention"?: Models.DeleteRetention;
	}
	
	export interface Integration { 
		"id"?: string;
		"name"?: string;
		"integrationType"?: Models.IntegrationType;
		"notes"?: string;
		"intendedState": string;
		"config"?: Models.IntegrationConfigurationInfo;
		"reportedState"?: Models.IntegrationStatusInfo;
		"attributes"?: { [key: string]: string; };
		"selfUri"?: string;
	}
	
	export interface IntegrationConfiguration { 
		"id"?: string;
		"name": string;
		"version": number;
		"properties": object;
		"advanced": object;
		"notes": string;
		"credentials": { [key: string]: Models.CredentialInfo; };
		"selfUri"?: string;
	}
	
	export interface IntegrationConfigurationInfo { 
		"current"?: Models.IntegrationConfiguration;
	}
	
	export interface IntegrationEntityListing { 
		"entities"?: Array<Models.Integration>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface IntegrationEvent { 
		"id"?: string;
		"selfUri"?: string;
		"correlationId"?: string;
		"timestamp"?: string;
		"level"?: string;
		"eventCode"?: string;
		"message"?: Models.MessageInfo;
		"entities"?: Array<Models.EventEntity>;
		"contextAttributes"?: { [key: string]: string; };
		"detailMessage"?: Models.MessageInfo;
		"user"?: Models.User;
	}
	
	export interface IntegrationEventEntityListing { 
		"entities"?: Array<Models.IntegrationEvent>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface IntegrationExport { 
		"integration": Models.DomainEntityRef;
		"shouldExportScreenRecordings"?: boolean;
	}
	
	export interface IntegrationStatusInfo { 
		"code"?: string;
		"effective"?: string;
		"detail"?: Models.MessageInfo;
		"lastUpdated"?: string;
	}
	
	export interface IntegrationType { 
		"id": string;
		"name"?: string;
		"description"?: string;
		"provider"?: string;
		"category"?: string;
		"images"?: Array<Models.UserImage>;
		"configPropertiesSchemaUri"?: string;
		"configAdvancedSchemaUri"?: string;
		"helpUri"?: string;
		"termsOfServiceUri"?: string;
		"vendorName"?: string;
		"vendorWebsiteUri"?: string;
		"marketplaceUri"?: string;
		"faqUri"?: string;
		"privacyPolicyUri"?: string;
		"supportContactUri"?: string;
		"salesContactUri"?: string;
		"helpLinks"?: Array<Models.HelpLink>;
		"credentials"?: { [key: string]: Models.CredentialSpecification; };
		"nonInstallable"?: boolean;
		"maxInstances"?: number;
		"userPermissions"?: Array<string>;
		"vendorOAuthClientIds"?: Array<string>;
		"selfUri"?: string;
	}
	
	export interface IntegrationTypeEntityListing { 
		"entities"?: Array<Models.IntegrationType>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface InteractionStatsAlert { 
		"id"?: string;
		"name": string;
		"dimension": string;
		"dimensionValue": string;
		"metric": string;
		"mediaType": string;
		"numericRange": string;
		"statistic": string;
		"value": number;
		"ruleId": string;
		"unread": boolean;
		"startDate": string;
		"endDate"?: string;
		"notificationUsers": Array<Models.User>;
		"alertTypes": Array<string>;
		"ruleUri"?: string;
		"selfUri"?: string;
	}
	
	export interface InteractionStatsAlertContainer { 
		"entities"?: Array<Models.InteractionStatsAlert>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface InteractionStatsRule { 
		"id"?: string;
		"name": string;
		"dimension": string;
		"dimensionValue": string;
		"metric": string;
		"mediaType": string;
		"numericRange": string;
		"statistic": string;
		"value": number;
		"enabled": boolean;
		"inAlarm"?: boolean;
		"notificationUsers": Array<Models.User>;
		"alertTypes": Array<string>;
		"selfUri"?: string;
	}
	
	export interface InteractionStatsRuleContainer { 
		"entities"?: Array<Models.InteractionStatsRule>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface IntradayDataGroup { 
		"mediaType"?: string;
		"forecastDataPerInterval"?: Array<Models.IntradayForecastData>;
		"scheduleDataPerInterval"?: Array<Models.IntradayScheduleData>;
		"historicalAgentDataPerInterval"?: Array<Models.IntradayHistoricalAgentData>;
		"historicalQueueDataPerInterval"?: Array<Models.IntradayHistoricalQueueData>;
		"performancePredictionAgentDataPerInterval"?: Array<Models.IntradayPerformancePredictionAgentData>;
		"performancePredictionQueueDataPerInterval"?: Array<Models.IntradayPerformancePredictionQueueData>;
	}
	
	export interface IntradayForecastData { 
		"offered"?: number;
		"averageTalkTimeSeconds"?: number;
		"averageAfterCallWorkSeconds"?: number;
	}
	
	export interface IntradayHistoricalAgentData { 
		"onQueueTimeSeconds"?: number;
		"interactingTimeSeconds"?: number;
	}
	
	export interface IntradayHistoricalQueueData { 
		"offered"?: number;
		"completed"?: number;
		"answered"?: number;
		"abandoned"?: number;
		"averageTalkTimeSeconds"?: number;
		"averageAfterCallWorkSeconds"?: number;
		"serviceLevelPercent"?: number;
		"averageSpeedOfAnswerSeconds"?: number;
	}
	
	export interface IntradayMetric { 
		"category"?: string;
		"version"?: string;
	}
	
	export interface IntradayPerformancePredictionAgentData { 
		"interactingTimeSeconds"?: number;
	}
	
	export interface IntradayPerformancePredictionQueueData { 
		"serviceLevelPercent"?: number;
		"averageSpeedOfAnswerSeconds"?: number;
		"numberOfInteractions"?: number;
	}
	
	export interface IntradayQueryDataCommand { 
		"startDate": string;
		"endDate": string;
		"metrics": Array<Models.IntradayMetric>;
		"queueIds"?: Array<string>;
		"intervalLengthMinutes"?: number;
	}
	
	export interface IntradayQueue { 
		"id"?: string;
		"name"?: string;
		"mediaTypes"?: Array<string>;
	}
	
	export interface IntradayResponse { 
		"startDate"?: string;
		"endDate"?: string;
		"intervalLengthMinutes"?: number;
		"numberOfIntervals"?: number;
		"metrics"?: Array<Models.IntradayMetric>;
		"noDataReason"?: string;
		"queueIds"?: Array<string>;
		"intradayDataGroupings"?: Array<Models.IntradayDataGroup>;
	}
	
	export interface IntradayScheduleData { 
		"onQueueTimeSeconds"?: number;
		"scheduledTimeSeconds"?: number;
	}
	
	export interface IpAddressRange { 
		"cidr"?: string;
		"service"?: string;
		"region"?: string;
	}
	
	export interface IpAddressRangeListing { 
		"entities"?: Array<Models.IpAddressRange>;
	}
	
	export interface JourneyAction { 
		"id": string;
		"actionMap": Models.JourneyActionMap;
	}
	
	export interface JourneyActionMap { 
		"id": string;
		"version": number;
	}
	
	export interface JourneyContext { 
		"customer": Models.JourneyCustomer;
		"customerSession"?: Models.JourneyCustomerSession;
		"triggeringAction"?: Models.JourneyAction;
	}
	
	export interface JourneyCustomer { 
		"id": string;
		"idType": string;
	}
	
	export interface JourneyCustomerSession { 
		"id": string;
		"type": string;
	}
	
	export interface JsonNode { 
		"nodeType"?: string;
		"float"?: boolean;
		"number"?: boolean;
		"boolean"?: boolean;
		"object"?: boolean;
		"valueNode"?: boolean;
		"containerNode"?: boolean;
		"missingNode"?: boolean;
		"integralNumber"?: boolean;
		"floatingPointNumber"?: boolean;
		"short"?: boolean;
		"int"?: boolean;
		"long"?: boolean;
		"double"?: boolean;
		"bigDecimal"?: boolean;
		"bigInteger"?: boolean;
		"textual"?: boolean;
		"binary"?: boolean;
		"pojo"?: boolean;
		"array"?: boolean;
		"null"?: boolean;
	}
	
	export interface JsonNodeSearchResponse { 
		"total": number;
		"pageCount": number;
		"pageSize": number;
		"pageNumber": number;
		"previousPage"?: string;
		"currentPage"?: string;
		"nextPage"?: string;
		"types": Array<string>;
		"results": Models.ArrayNode;
		"aggregations"?: Models.ArrayNode;
	}
	
	export interface JsonSchemaDocument { 
		"id"?: string;
		"$schema"?: string;
		"title"?: string;
		"description"?: string;
		"type"?: string;
		"required"?: Array<string>;
		"properties"?: { [key: string]: object; };
		"additionalProperties"?: object;
	}
	
	export interface KeyRotationSchedule { 
		"id"?: string;
		"name"?: string;
		"period": string;
		"selfUri"?: string;
	}
	
	export interface Keyword { 
		"id"?: string;
		"name"?: string;
		"phrase": string;
		"confidence": number;
		"agentScoreModifier": number;
		"customerScoreModifier": number;
		"alternateSpellings"?: Array<string>;
		"pronunciations"?: Array<string>;
		"antiWords"?: Array<string>;
		"antiPronunciations"?: Array<string>;
		"spotabilityIndex"?: number;
		"marginOfError"?: number;
		"pronunciation"?: string;
	}
	
	export interface KeywordSet { 
		"id"?: string;
		"name"?: string;
		"description"?: string;
		"queues"?: Array<Models.Queue>;
		"language": string;
		"agents"?: Array<Models.User>;
		"keywords": Array<Models.Keyword>;
		"participantPurposes": Array<string>;
		"selfUri"?: string;
	}
	
	export interface KeywordSetEntityListing { 
		"entities"?: Array<Models.KeywordSet>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface KlaxonHeartBeatAlertsTopicHeartBeatAlert { 
		"id"?: string;
		"name"?: string;
		"senderId"?: string;
		"heartBeatTimeoutInMinutes"?: number;
		"ruleId"?: string;
		"startDate"?: string;
		"endDate"?: string;
		"notificationUsers"?: Array<Models.KlaxonHeartBeatAlertsTopicNotificationUser>;
		"alertTypes"?: Array<string>;
		"ruleType"?: string;
	}
	
	export interface KlaxonHeartBeatAlertsTopicNotificationUser { 
		"id"?: string;
		"displayName"?: string;
	}
	
	export interface KlaxonHeartBeatRulesTopicHeartBeatRule { 
		"id"?: string;
		"name"?: string;
		"senderId"?: string;
		"heartBeatTimeoutInMinutes"?: number;
		"enabled"?: boolean;
		"inAlarm"?: boolean;
		"notificationUsers"?: Array<Models.KlaxonHeartBeatRulesTopicNotificationUser>;
		"alertTypes"?: Array<string>;
		"ruleType"?: string;
	}
	
	export interface KlaxonHeartBeatRulesTopicNotificationUser { 
		"id"?: string;
		"displayName"?: string;
	}
	
	export interface KlaxonInteractionStatsAlertsTopicInteractionStatAlert { 
		"id"?: string;
		"name"?: string;
		"ruleId"?: string;
		"dimension"?: string;
		"dimensionValue"?: string;
		"dimensionValueName"?: string;
		"metric"?: string;
		"mediaType"?: string;
		"numericRange"?: string;
		"statistic"?: string;
		"value"?: number;
		"unread"?: boolean;
		"startDate"?: string;
		"endDate"?: string;
		"notificationUsers"?: Array<Models.KlaxonInteractionStatsAlertsTopicNotificationUser>;
		"alertTypes"?: Array<string>;
	}
	
	export interface KlaxonInteractionStatsAlertsTopicNotificationUser { 
		"id"?: string;
		"displayName"?: string;
	}
	
	export interface KlaxonInteractionStatsRulesTopicInteractionStatRule { 
		"id"?: string;
		"name"?: string;
		"dimension"?: string;
		"dimensionValue"?: string;
		"dimensionValueName"?: string;
		"metric"?: string;
		"mediaType"?: string;
		"numericRange"?: string;
		"statistic"?: string;
		"value"?: number;
		"inAlarm"?: boolean;
		"enabled"?: boolean;
		"notificationUsers"?: Array<Models.KlaxonInteractionStatsRulesTopicNotificationUser>;
		"alertTypes"?: Array<string>;
	}
	
	export interface KlaxonInteractionStatsRulesTopicNotificationUser { 
		"id"?: string;
		"displayName"?: string;
	}
	
	export interface Language { 
		"id"?: string;
		"name": string;
		"dateModified"?: string;
		"state"?: string;
		"version"?: string;
		"selfUri"?: string;
	}
	
	export interface LanguageEntityListing { 
		"entities"?: Array<Models.Language>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface LanguageOverride { 
		"language": string;
		"engine": string;
		"voice": string;
	}
	
	export interface LanguageReference { 
		"id"?: string;
		"selfUri"?: string;
	}
	
	export interface LexBot { 
		"id"?: string;
		"name"?: string;
		"description"?: string;
		"selfUri"?: string;
	}
	
	export interface LexBotAlias { 
		"id"?: string;
		"name"?: string;
		"bot"?: Models.LexBot;
		"botVersion"?: string;
		"status": string;
		"failureReason"?: string;
		"language"?: string;
		"intents"?: Array<Models.LexIntent>;
		"selfUri"?: string;
	}
	
	export interface LexBotAliasEntityListing { 
		"entities"?: Array<Models.LexBotAlias>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface LexBotEntityListing { 
		"entities"?: Array<Models.LexBot>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface LexIntent { 
		"name": string;
		"description"?: string;
		"slots": { [key: string]: Models.LexSlot; };
		"version": string;
	}
	
	export interface LexSlot { 
		"name": string;
		"description"?: string;
		"type": string;
		"priority"?: number;
	}
	
	export interface Library { 
		"id"?: string;
		"name": string;
		"version"?: number;
		"createdBy"?: Models.User;
		"dateCreated"?: string;
		"responseType"?: string;
		"selfUri"?: string;
	}
	
	export interface LibraryEntityListing { 
		"entities"?: Array<Models.Library>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface LicenseAssignmentRequest { 
		"licenseId": string;
		"userIdsAdd": Array<string>;
		"userIdsRemove": Array<string>;
	}
	
	export interface LicenseBatchAssignmentRequest { 
		"assignments": Array<Models.LicenseAssignmentRequest>;
	}
	
	export interface LicenseDefinition { 
		"id"?: string;
		"description"?: string;
		"permissions"?: Models.Permissions;
		"prerequisites"?: Array<Models.AddressableLicenseDefinition>;
		"comprises"?: Array<Models.LicenseDefinition>;
		"selfUri"?: string;
	}
	
	export interface LicenseOrgToggle { 
		"featureName"?: string;
		"enabled"?: boolean;
	}
	
	export interface LicenseUpdateStatus { 
		"userId"?: string;
		"licenseId"?: string;
		"result"?: string;
	}
	
	export interface LicenseUser { 
		"id"?: string;
		"licenses"?: Array<Models.LicenseDefinition>;
		"selfUri"?: string;
	}
	
	export interface Line { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"properties"?: { [key: string]: object; };
		"edgeGroup"?: Models.DomainEntityRef;
		"template"?: Models.DomainEntityRef;
		"site"?: Models.DomainEntityRef;
		"lineBaseSettings"?: Models.DomainEntityRef;
		"primaryEdge"?: Models.Edge;
		"secondaryEdge"?: Models.Edge;
		"loggedInUser"?: Models.DomainEntityRef;
		"defaultForUser"?: Models.DomainEntityRef;
		"selfUri"?: string;
	}
	
	export interface LineBase { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"lineMetaBase"?: Models.DomainEntityRef;
		"properties"?: { [key: string]: object; };
		"selfUri"?: string;
	}
	
	export interface LineBaseEntityListing { 
		"entities"?: Array<Models.LineBase>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface LineEntityListing { 
		"entities"?: Array<Models.Line>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface LineId { 
		"ids"?: Array<Models.LineUserId>;
		"displayName"?: string;
	}
	
	export interface LineIntegration { 
		"id": string;
		"name": string;
		"channelId": string;
		"webhookUri": string;
		"status"?: string;
		"recipient"?: Models.DomainEntityRef;
		"dateCreated"?: string;
		"dateModified"?: string;
		"createdBy"?: Models.DomainEntityRef;
		"modifiedBy"?: Models.DomainEntityRef;
		"version": number;
		"selfUri"?: string;
	}
	
	export interface LineIntegrationEntityListing { 
		"entities"?: Array<Models.LineIntegration>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface LineIntegrationRequest { 
		"id"?: string;
		"name": string;
		"channelId"?: string;
		"channelSecret"?: string;
		"switcherSecret"?: string;
		"serviceCode"?: string;
		"selfUri"?: string;
	}
	
	export interface LineStatus { 
		"id"?: string;
		"reachable"?: boolean;
		"addressOfRecord"?: string;
		"contactAddresses"?: Array<string>;
		"reachableStateTime"?: string;
	}
	
	export interface LineUserId { 
		"userId"?: string;
	}
	
	export interface ListWrapperForecastSourceDayPointer { 
		"values"?: Array<Models.ForecastSourceDayPointer>;
	}
	
	export interface ListWrapperShiftStartVariance { 
		"values"?: Array<Models.ShiftStartVariance>;
	}
	
	export interface ListWrapperWfmForecastModification { 
		"values"?: Array<Models.WfmForecastModification>;
	}
	
	export interface LocalEncryptionConfiguration { 
		"id"?: string;
		"name"?: string;
		"url": string;
		"apiId": string;
		"apiKey": string;
		"selfUri"?: string;
	}
	
	export interface LocalEncryptionConfigurationListing { 
		"total"?: number;
		"entities"?: Array<Models.LocalEncryptionConfiguration>;
		"selfUri"?: string;
	}
	
	export interface LocalEncryptionKeyRequest { 
		"configId": string;
		"publicKey": string;
		"keypairId": string;
	}
	
	export interface Location { 
		"id"?: string;
		"floorplanId"?: string;
		"coordinates"?: { [key: string]: number; };
		"notes"?: string;
		"locationDefinition"?: Models.LocationDefinition;
	}
	
	export interface LocationAddress { 
		"city"?: string;
		"country"?: string;
		"countryName"?: string;
		"state"?: string;
		"street1"?: string;
		"street2"?: string;
		"zipcode"?: string;
	}
	
	export interface LocationAddressVerificationDetails { 
		"status"?: string;
		"dateFinished"?: string;
		"dateStarted"?: string;
		"service"?: string;
	}
	
	export interface LocationCreateDefinition { 
		"name": string;
		"version"?: number;
		"state"?: string;
		"path"?: Array<string>;
		"notes"?: string;
		"contactUser"?: string;
		"emergencyNumber"?: Models.LocationEmergencyNumber;
		"address"?: Models.LocationAddress;
	}
	
	export interface LocationDefinition { 
		"id"?: string;
		"name"?: string;
		"contactUser"?: Models.AddressableEntityRef;
		"emergencyNumber"?: Models.LocationEmergencyNumber;
		"address"?: Models.LocationAddress;
		"state"?: string;
		"notes"?: string;
		"version"?: number;
		"path"?: Array<string>;
		"profileImage"?: Array<Models.LocationImage>;
		"floorplanImage"?: Array<Models.LocationImage>;
		"addressVerificationDetails"?: Models.LocationAddressVerificationDetails;
		"addressVerified"?: boolean;
		"addressStored"?: boolean;
		"images"?: string;
		"selfUri"?: string;
	}
	
	export interface LocationEmergencyNumber { 
		"e164"?: string;
		"number"?: string;
		"type"?: string;
	}
	
	export interface LocationEntityListing { 
		"entities"?: Array<Models.LocationDefinition>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface LocationImage { 
		"resolution"?: string;
		"imageUri"?: string;
	}
	
	export interface LocationSearchCriteria { 
		"endValue"?: string;
		"values"?: Array<string>;
		"startValue"?: string;
		"fields"?: Array<string>;
		"value"?: string;
		"operator"?: string;
		"group"?: Array<Models.LocationSearchCriteria>;
		"type": string;
	}
	
	export interface LocationSearchRequest { 
		"sortOrder"?: string;
		"sortBy"?: string;
		"pageSize"?: number;
		"pageNumber"?: number;
		"sort"?: Array<Models.SearchSort>;
		"expand"?: Array<string>;
		"query"?: Array<Models.LocationSearchCriteria>;
	}
	
	export interface LocationUpdateDefinition { 
		"name": string;
		"version": number;
		"state"?: string;
		"path"?: Array<string>;
		"notes"?: string;
		"contactUser"?: string;
		"emergencyNumber"?: Models.LocationEmergencyNumber;
		"address"?: Models.LocationAddress;
	}
	
	export interface LocationsSearchResponse { 
		"total": number;
		"pageCount": number;
		"pageSize": number;
		"pageNumber": number;
		"previousPage"?: string;
		"currentPage"?: string;
		"nextPage"?: string;
		"types": Array<string>;
		"results": Array<Models.LocationDefinition>;
	}
	
	export interface LockInfo { 
		"lockedBy"?: Models.DomainEntityRef;
		"dateCreated"?: string;
		"dateExpires"?: string;
		"action"?: string;
	}
	
	export interface LogicalInterfaceEntityListing { 
		"entities"?: Array<Models.DomainLogicalInterface>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface MailFromResult { 
		"status"?: string;
		"records"?: Array<Models.Record>;
		"mailFromDomain": string;
	}
	
	export interface ManagementUnit { 
		"id"?: string;
		"name"?: string;
		"division"?: Models.Division;
		"startDayOfWeek"?: string;
		"timeZone"?: string;
		"settings"?: Models.ManagementUnitSettingsResponse;
		"metadata"?: Models.WfmVersionedEntityMetadata;
		"version"?: number;
		"modifiedBy"?: Models.UserReference;
		"dateModified"?: string;
		"selfUri"?: string;
	}
	
	export interface ManagementUnitListing { 
		"entities"?: Array<Models.ManagementUnit>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"nextUri"?: string;
		"pageCount"?: number;
		"lastUri"?: string;
		"previousUri"?: string;
		"selfUri"?: string;
	}
	
	export interface ManagementUnitReference { 
		"id"?: string;
		"selfUri"?: string;
	}
	
	export interface ManagementUnitSettingsRequest { 
		"adherence"?: Models.AdherenceSettings;
		"shortTermForecasting"?: Models.ShortTermForecastingSettings;
		"timeOff"?: Models.TimeOffRequestSettings;
		"scheduling"?: Models.SchedulingSettingsRequest;
		"shiftTrading"?: Models.ShiftTradeSettings;
		"metadata": Models.WfmVersionedEntityMetadata;
	}
	
	export interface ManagementUnitSettingsResponse { 
		"adherence"?: Models.AdherenceSettings;
		"shortTermForecasting"?: Models.ShortTermForecastingSettings;
		"timeOff"?: Models.TimeOffRequestSettings;
		"scheduling"?: Models.SchedulingSettingsResponse;
		"shiftTrading"?: Models.ShiftTradeSettings;
		"metadata": Models.WfmVersionedEntityMetadata;
	}
	
	export interface Manager { 
		"value"?: string;
		"$ref"?: string;
	}
	
	export interface MaxParticipants { 
		"maxParticipants"?: number;
	}
	
	export interface MediaEndpointStatDetailQueryClause { 
		"type": string;
		"predicates": Array<Models.MediaEndpointStatDetailQueryPredicate>;
	}
	
	export interface MediaEndpointStatDetailQueryFilter { 
		"type": string;
		"clauses"?: Array<Models.MediaEndpointStatDetailQueryClause>;
		"predicates"?: Array<Models.MediaEndpointStatDetailQueryPredicate>;
	}
	
	export interface MediaEndpointStatDetailQueryPredicate { 
		"type"?: string;
		"dimension"?: string;
		"operator"?: string;
		"value"?: string;
		"range"?: Models.NumericRange;
	}
	
	export interface MediaParticipantRequest { 
		"wrapup"?: Models.Wrapup;
		"state"?: string;
		"recording"?: boolean;
		"muted"?: boolean;
		"confined"?: boolean;
		"held"?: boolean;
		"wrapupSkipped"?: boolean;
	}
	
	export interface MediaPolicies { 
		"callPolicy"?: Models.CallMediaPolicy;
		"chatPolicy"?: Models.ChatMediaPolicy;
		"emailPolicy"?: Models.EmailMediaPolicy;
		"messagePolicy"?: Models.MessageMediaPolicy;
	}
	
	export interface MediaResult { 
		"mediaUri"?: string;
		"waveformData"?: Array<number>;
	}
	
	export interface MediaSetting { 
		"alertingTimeoutSeconds"?: number;
		"serviceLevel"?: Models.ServiceLevel;
	}
	
	export interface MediaSummary { 
		"contactCenter"?: Models.MediaSummaryDetail;
		"enterprise"?: Models.MediaSummaryDetail;
	}
	
	export interface MediaSummaryDetail { 
		"active"?: number;
		"acw"?: number;
	}
	
	export interface MediaTranscription { 
		"displayName"?: string;
		"transcriptionProvider"?: string;
		"integrationId"?: string;
	}
	
	export interface MediaUtilization { 
		"maximumCapacity"?: number;
		"interruptableMediaTypes"?: Array<string>;
		"includeNonAcd"?: boolean;
	}
	
	export interface MemberEntity { 
		"id"?: string;
	}
	
	export interface Message { 
		"state"?: string;
		"id"?: string;
		"held"?: boolean;
		"segments"?: Array<Models.Segment>;
		"direction"?: string;
		"recordingId"?: string;
		"errorInfo"?: Models.ErrorBody;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"startAlertingTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"provider"?: string;
		"type"?: string;
		"recipientCountry"?: string;
		"recipientType"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"toAddress"?: Models.Address;
		"fromAddress"?: Models.Address;
		"messages"?: Array<Models.MessageDetails>;
	}
	
	export interface MessageConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.MessageMediaParticipant>;
		"otherMediaUris"?: Array<string>;
		"selfUri"?: string;
	}
	
	export interface MessageConversationEntityListing { 
		"entities"?: Array<Models.EmailConversation>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface MessageData { 
		"id"?: string;
		"name"?: string;
		"providerMessageId"?: string;
		"timestamp": string;
		"fromAddress"?: string;
		"toAddress"?: string;
		"direction"?: string;
		"messengerType"?: string;
		"textBody": string;
		"status": string;
		"media"?: Array<Models.MessageMedia>;
		"stickers"?: Array<Models.MessageSticker>;
		"createdBy"?: Models.User;
		"selfUri"?: string;
	}
	
	export interface MessageDetails { 
		"messageId"?: string;
		"messageURI"?: string;
		"messageStatus"?: string;
		"messageSegmentCount"?: number;
		"messageTime"?: string;
		"media"?: Array<Models.MessageMedia>;
		"stickers"?: Array<Models.MessageSticker>;
	}
	
	export interface MessageEvaluation { 
		"contactColumn"?: string;
		"contactAddress"?: string;
		"wrapupCodeId"?: string;
		"timestamp"?: string;
	}
	
	export interface MessageInfo { 
		"localizableMessageCode"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
	}
	
	export interface MessageMedia { 
		"url"?: string;
		"mediaType"?: string;
		"contentLengthBytes"?: number;
		"name"?: string;
		"id"?: string;
	}
	
	export interface MessageMediaAttachment { 
		"url"?: string;
		"mediaType"?: string;
		"contentLength"?: number;
		"name"?: string;
		"id"?: string;
	}
	
	export interface MessageMediaData { 
		"id"?: string;
		"name"?: string;
		"url"?: string;
		"mediaType"?: string;
		"contentLengthBytes"?: number;
		"uploadUrl"?: string;
		"status"?: string;
		"selfUri"?: string;
	}
	
	export interface MessageMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.DomainEntityRef;
		"queue"?: Models.DomainEntityRef;
		"team"?: Models.DomainEntityRef;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.ErrorInfo;
		"script"?: Models.DomainEntityRef;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.DomainEntityRef;
		"externalOrganization"?: Models.DomainEntityRef;
		"wrapup"?: Models.Wrapup;
		"peer"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.JourneyContext;
		"conversationRoutingData"?: Models.ConversationRoutingData;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"toAddress"?: Models.Address;
		"fromAddress"?: Models.Address;
		"messages"?: Array<Models.MessageDetails>;
		"type"?: string;
		"recipientCountry"?: string;
		"recipientType"?: string;
	}
	
	export interface MessageMediaPolicy { 
		"actions"?: Models.PolicyActions;
		"conditions"?: Models.MessageMediaPolicyConditions;
	}
	
	export interface MessageMediaPolicyConditions { 
		"forUsers"?: Array<Models.User>;
		"dateRanges"?: Array<string>;
		"forQueues"?: Array<Models.Queue>;
		"wrapupCodes"?: Array<Models.WrapupCode>;
		"languages"?: Array<Models.Language>;
		"timeAllowed"?: Models.TimeAllowed;
	}
	
	export interface MessageSticker { 
		"url"?: string;
		"id"?: string;
	}
	
	export interface MessageStickerAttachment { 
		"url"?: string;
		"id"?: string;
	}
	
	export interface MessagingIntegration { 
		"id": string;
		"name": string;
		"status"?: string;
		"messengerType": string;
		"recipient"?: Models.DomainEntityRef;
		"dateCreated"?: string;
		"dateModified"?: string;
		"createdBy"?: Models.DomainEntityRef;
		"modifiedBy"?: Models.DomainEntityRef;
		"version": number;
		"selfUri"?: string;
	}
	
	export interface MessagingIntegrationEntityListing { 
		"entities"?: Array<Models.MessagingIntegration>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface MessagingSticker { 
		"id"?: string;
		"name"?: string;
		"providerStickerId": number;
		"providerPackageId"?: number;
		"packageName"?: string;
		"messengerType": string;
		"stickerType": string;
		"providerVersion"?: number;
		"uriLocation"?: string;
		"selfUri"?: string;
	}
	
	export interface MessagingStickerEntityListing { 
		"entities"?: Array<Models.MessagingSticker>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface MessagingTemplate { 
		"whatsApp"?: Models.WhatsAppDefinition;
	}
	
	export interface MetaData { 
		"pairing-token"?: string;
		"pairing-trust"?: Array<string>;
		"pairing-url"?: string;
	}
	
	export interface Metabase { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"type"?: string;
		"selfUri"?: string;
	}
	
	export interface MeteredAssignmentByAgent { 
		"evaluationContextId"?: string;
		"evaluators"?: Array<Models.User>;
		"maxNumberEvaluations"?: number;
		"evaluationForm"?: Models.EvaluationForm;
		"timeInterval"?: Models.TimeInterval;
		"timeZone"?: string;
	}
	
	export interface MeteredEvaluationAssignment { 
		"evaluationContextId"?: string;
		"evaluators"?: Array<Models.User>;
		"maxNumberEvaluations"?: number;
		"evaluationForm"?: Models.EvaluationForm;
		"assignToActiveUser"?: boolean;
		"timeInterval"?: Models.TimeInterval;
	}
	
	export interface ModelNumber { 
		"start"?: string;
		"end"?: string;
	}
	
	export interface ModelingProcessingError { 
		"internalErrorCode"?: string;
		"description"?: string;
	}
	
	export interface ModelingStatusResponse { 
		"id"?: string;
		"status"?: string;
		"errorDetails"?: Array<Models.ModelingProcessingError>;
		"modelingResultUri"?: string;
	}
	
	export interface MoveManagementUnitRequest { 
		"businessUnitId": string;
	}
	
	export interface MoveManagementUnitResponse { 
		"businessUnit"?: Models.BusinessUnitReference;
		"status"?: string;
	}
	
	export interface NTPSettings { 
		"servers"?: Array<string>;
	}
	
	export interface NamedEntity { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface Note { 
		"id"?: string;
		"name"?: string;
		"noteText"?: string;
		"modifyDate"?: string;
		"createDate"?: string;
		"createdBy": Models.User;
		"externalDataSources"?: Array<Models.ExternalDataSource>;
		"selfUri"?: string;
	}
	
	export interface NoteListing { 
		"entities"?: Array<Models.Note>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface NotificationsResponse { 
		"entities"?: Array<Models.WfmUserNotification>;
	}
	
	export interface NumberPlan { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"match"?: string;
		"normalizedFormat"?: string;
		"priority"?: number;
		"numbers"?: Array<Models.ModelNumber>;
		"digitLength"?: Models.DigitLength;
		"classification"?: string;
		"matchType"?: string;
		"selfUri"?: string;
	}
	
	export interface NumericRange { 
		"gt"?: number;
		"gte"?: number;
		"lt"?: number;
		"lte"?: number;
	}
	
	export interface OAuthAuthorization { 
		"client"?: Models.OAuthClient;
		"scope"?: Array<string>;
		"resourceOwner"?: Models.DomainEntityRef;
		"dateCreated"?: string;
		"dateModified"?: string;
		"createdBy"?: Models.DomainEntityRef;
		"modifiedBy"?: Models.DomainEntityRef;
		"selfUri"?: string;
	}
	
	export interface OAuthAuthorizationListing { 
		"entities"?: Array<Models.OAuthAuthorization>;
		"selfUri"?: string;
	}
	
	export interface OAuthClient { 
		"id"?: string;
		"name": string;
		"accessTokenValiditySeconds"?: number;
		"description"?: string;
		"registeredRedirectUri"?: Array<string>;
		"secret"?: string;
		"roleIds"?: Array<string>;
		"dateCreated"?: string;
		"dateModified"?: string;
		"createdBy"?: Models.DomainEntityRef;
		"modifiedBy"?: Models.DomainEntityRef;
		"authorizedGrantType": string;
		"scope"?: Array<string>;
		"roleDivisions"?: Array<Models.RoleDivision>;
		"selfUri"?: string;
	}
	
	export interface OAuthClientEntityListing { 
		"entities"?: Array<Models.OAuthClientListing>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface OAuthClientListing { 
		"id"?: string;
		"name": string;
		"accessTokenValiditySeconds"?: number;
		"description"?: string;
		"registeredRedirectUri"?: Array<string>;
		"secret"?: string;
		"roleIds"?: Array<string>;
		"dateCreated"?: string;
		"dateModified"?: string;
		"createdBy"?: Models.DomainEntityRef;
		"modifiedBy"?: Models.DomainEntityRef;
		"scope"?: Array<string>;
		"roleDivisions"?: Array<Models.RoleDivision>;
		"selfUri"?: string;
	}
	
	export interface OAuthClientRequest { 
		"name": string;
		"accessTokenValiditySeconds"?: number;
		"description"?: string;
		"registeredRedirectUri"?: Array<string>;
		"roleIds"?: Array<string>;
		"authorizedGrantType": string;
		"scope"?: Array<string>;
		"roleDivisions"?: Array<Models.RoleDivision>;
	}
	
	export interface OAuthLastTokenIssued { 
		"dateIssued"?: string;
	}
	
	export interface OAuthProvider { 
		"id"?: string;
		"name"?: string;
		"disabled"?: boolean;
		"selfUri"?: string;
	}
	
	export interface OAuthProviderEntityListing { 
		"entities"?: Array<Models.OAuthProvider>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface OAuthScope { 
		"id"?: string;
		"description"?: string;
		"selfUri"?: string;
	}
	
	export interface OAuthScopeListing { 
		"entities"?: Array<Models.OAuthScope>;
		"selfUri"?: string;
	}
	
	export interface ObservationMetricData { 
		"metric"?: string;
		"qualifier"?: string;
		"stats"?: Models.StatisticalSummary;
		"truncated"?: boolean;
		"observations"?: Array<Models.ObservationValue>;
	}
	
	export interface ObservationValue { 
		"observationDate": string;
		"conversationId"?: string;
		"sessionId"?: string;
		"requestedRoutingSkillIds"?: Array<string>;
		"requestedLanguageId"?: string;
		"routingPriority"?: number;
		"participantName"?: string;
		"userId"?: string;
		"direction"?: string;
		"convertedFrom"?: string;
		"convertedTo"?: string;
		"addressFrom"?: string;
		"addressTo"?: string;
		"ani"?: string;
		"dnis"?: string;
		"teamId"?: string;
		"scoredAgents"?: Array<Models.AnalyticsScoredAgent>;
	}
	
	export interface Okta { 
		"id"?: string;
		"name"?: string;
		"certificate"?: string;
		"ssoTargetURI"?: string;
		"issuerURI"?: string;
		"disabled"?: boolean;
		"selfUri"?: string;
	}
	
	export interface OneLogin { 
		"id"?: string;
		"name"?: string;
		"certificate"?: string;
		"ssoTargetURI"?: string;
		"issuerURI"?: string;
		"disabled"?: boolean;
		"selfUri"?: string;
	}
	
	export interface Operation { 
		"id"?: string;
		"complete"?: boolean;
		"user"?: Models.User;
		"client"?: Models.DomainEntityRef;
		"errorMessage"?: string;
		"errorCode"?: string;
		"errorDetails"?: Array<Models.Detail>;
		"errorMessageParams"?: { [key: string]: string; };
		"actionName"?: string;
		"actionStatus"?: string;
	}
	
	export interface OrgOAuthClient { 
		"id"?: string;
		"name": string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"createdBy"?: Models.DomainEntityRef;
		"modifiedBy"?: Models.DomainEntityRef;
		"authorizedGrantType": string;
		"scope"?: Array<string>;
		"roleDivisions"?: Array<Models.RoleDivision>;
		"organization"?: Models.NamedEntity;
	}
	
	export interface OrgUser { 
		"id"?: string;
		"name"?: string;
		"division"?: Models.Division;
		"chat"?: Models.Chat;
		"department"?: string;
		"email"?: string;
		"primaryContactInfo"?: Array<Models.Contact>;
		"addresses"?: Array<Models.Contact>;
		"state"?: string;
		"title"?: string;
		"username"?: string;
		"manager"?: Models.User;
		"images"?: Array<Models.UserImage>;
		"version": number;
		"certifications"?: Array<string>;
		"biography"?: Models.Biography;
		"employerInfo"?: Models.EmployerInfo;
		"routingStatus"?: Models.RoutingStatus;
		"presence"?: Models.UserPresence;
		"conversationSummary"?: Models.UserConversationSummary;
		"outOfOffice"?: Models.OutOfOffice;
		"geolocation"?: Models.Geolocation;
		"station"?: Models.UserStations;
		"authorization"?: Models.UserAuthorization;
		"profileSkills"?: Array<string>;
		"locations"?: Array<Models.Location>;
		"groups"?: Array<Models.Group>;
		"team"?: Models.Team;
		"skills"?: Array<Models.UserRoutingSkill>;
		"languages"?: Array<Models.UserRoutingLanguage>;
		"acdAutoAnswer"?: boolean;
		"languagePreference"?: string;
		"lastTokenIssued"?: Models.OAuthLastTokenIssued;
		"organization"?: Models.Organization;
	}
	
	export interface OrgWhitelistSettings { 
		"enableWhitelist"?: boolean;
		"domainWhitelist"?: Array<string>;
	}
	
	export interface Organization { 
		"id"?: string;
		"name"?: string;
		"defaultLanguage"?: string;
		"defaultCountryCode"?: string;
		"thirdPartyOrgName"?: string;
		"thirdPartyURI"?: string;
		"domain"?: string;
		"version": number;
		"state"?: string;
		"defaultSiteId"?: string;
		"supportURI"?: string;
		"voicemailEnabled"?: boolean;
		"productPlatform"?: string;
		"selfUri"?: string;
		"features"?: { [key: string]: boolean; };
	}
	
	export interface OrganizationFeatures { 
		"realtimeCIC"?: boolean;
		"purecloud"?: boolean;
		"hipaa"?: boolean;
		"ucEnabled"?: boolean;
		"pci"?: boolean;
		"purecloudVoice"?: boolean;
		"xmppFederation"?: boolean;
		"chat"?: boolean;
		"informalPhotos"?: boolean;
		"directory"?: boolean;
		"contactCenter"?: boolean;
		"unifiedCommunications"?: boolean;
		"custserv"?: boolean;
	}
	
	export interface OrganizationPresence { 
		"id"?: string;
		"name"?: string;
		"languageLabels": { [key: string]: string; };
		"systemPresence"?: string;
		"deactivated"?: boolean;
		"primary"?: boolean;
		"createdBy"?: Models.User;
		"createdDate"?: string;
		"modifiedBy"?: Models.User;
		"modifiedDate"?: string;
		"selfUri"?: string;
	}
	
	export interface OrganizationPresenceEntityListing { 
		"entities"?: Array<Models.OrganizationPresence>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface OrganizationProductEntityListing { 
		"entities"?: Array<Models.DomainOrganizationProduct>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"pageCount"?: number;
	}
	
	export interface OrganizationRoleEntityListing { 
		"entities"?: Array<Models.DomainOrganizationRole>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface OrphanRecording { 
		"id"?: string;
		"name"?: string;
		"createdTime"?: string;
		"recoveredTime"?: string;
		"providerType"?: string;
		"mediaSizeBytes"?: number;
		"mediaType"?: string;
		"fileState"?: string;
		"providerEndpoint"?: Models.Endpoint;
		"recording"?: Models.Recording;
		"orphanStatus"?: string;
		"selfUri"?: string;
	}
	
	export interface OrphanRecordingListing { 
		"entities"?: Array<Models.OrphanRecording>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface OrphanUpdateRequest { 
		"archiveDate"?: string;
		"deleteDate"?: string;
		"conversationId"?: string;
	}
	
	export interface OutOfOffice { 
		"id"?: string;
		"name"?: string;
		"user"?: Models.User;
		"startDate"?: string;
		"endDate"?: string;
		"active"?: boolean;
		"indefinite"?: boolean;
		"selfUri"?: string;
	}
	
	export interface OutOfOfficeEventOutOfOffice { 
		"user"?: Models.OutOfOfficeEventUser;
		"active"?: boolean;
		"indefinite"?: boolean;
		"startDate"?: string;
		"endDate"?: string;
	}
	
	export interface OutOfOfficeEventUser { 
		"id"?: string;
	}
	
	export interface OutboundMessagingMessagingCampaignProgressEventCampaignProgress { 
		"campaign"?: Models.OutboundMessagingMessagingCampaignProgressEventUriReference;
		"numberOfContactsCalled"?: number;
		"numberOfContactsMessaged"?: number;
		"totalNumberOfContacts"?: number;
		"percentage"?: number;
		"additionalProperties"?: object;
	}
	
	export interface OutboundMessagingMessagingCampaignProgressEventUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface OutboundRoute { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"classificationTypes": Array<string>;
		"enabled"?: boolean;
		"distribution"?: string;
		"externalTrunkBases"?: Array<Models.DomainEntityRef>;
		"site"?: Models.Site;
		"managed"?: boolean;
		"selfUri"?: string;
	}
	
	export interface OutboundRouteBase { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"classificationTypes": Array<string>;
		"enabled"?: boolean;
		"distribution"?: string;
		"externalTrunkBases"?: Array<Models.DomainEntityRef>;
		"selfUri"?: string;
	}
	
	export interface OutboundRouteBaseEntityListing { 
		"entities"?: Array<Models.OutboundRouteBase>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface OutboundRouteEntityListing { 
		"entities"?: Array<Models.OutboundRoute>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface OutboundSettings { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"maxCallsPerAgent"?: number;
		"maxConfigurableCallsPerAgent"?: number;
		"maxLineUtilization"?: number;
		"abandonSeconds"?: number;
		"complianceAbandonRateDenominator"?: string;
		"selfUri"?: string;
	}
	
	export interface PINConfiguration { 
		"minimumLength"?: number;
		"maximumLength"?: number;
	}
	
	export interface Page { 
		"id"?: string;
		"name"?: string;
		"versionId"?: string;
		"createdDate"?: string;
		"modifiedDate"?: string;
		"rootContainer"?: { [key: string]: object; };
		"properties"?: { [key: string]: object; };
		"selfUri"?: string;
	}
	
	export interface PagingSpec { 
		"pageSize": number;
		"pageNumber": number;
	}
	
	export interface Parameter { 
		"name"?: string;
		"parameterType"?: string;
		"domain"?: string;
		"required"?: boolean;
	}
	
	export interface ParsedCertificate { 
		"certificateDetails"?: Array<Models.CertificateDetails>;
	}
	
	export interface PartialUploadResponse { 
		"id"?: string;
	}
	
	export interface Participant { 
		"id"?: string;
		"startTime"?: string;
		"endTime"?: string;
		"connectedTime"?: string;
		"name"?: string;
		"userUri"?: string;
		"userId"?: string;
		"externalContactId"?: string;
		"externalOrganizationId"?: string;
		"queueId"?: string;
		"groupId"?: string;
		"teamId"?: string;
		"queueName"?: string;
		"purpose"?: string;
		"participantType"?: string;
		"consultParticipantId"?: string;
		"address"?: string;
		"ani"?: string;
		"aniName"?: string;
		"dnis"?: string;
		"locale"?: string;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"wrapup"?: Models.Wrapup;
		"conversationRoutingData"?: Models.ConversationRoutingData;
		"alertingTimeoutMs"?: number;
		"monitoredParticipantId"?: string;
		"attributes"?: { [key: string]: string; };
		"calls"?: Array<Models.Call>;
		"callbacks"?: Array<Models.Callback>;
		"chats"?: Array<Models.ConversationChat>;
		"cobrowsesessions"?: Array<Models.Cobrowsesession>;
		"emails"?: Array<Models.Email>;
		"messages"?: Array<Models.Message>;
		"screenshares"?: Array<Models.Screenshare>;
		"socialExpressions"?: Array<Models.SocialExpression>;
		"videos"?: Array<Models.Video>;
		"evaluations"?: Array<Models.Evaluation>;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
	}
	
	export interface ParticipantAttributes { 
		"attributes"?: { [key: string]: string; };
	}
	
	export interface ParticipantBasic { 
		"id"?: string;
		"startTime"?: string;
		"endTime"?: string;
		"connectedTime"?: string;
		"name"?: string;
		"userUri"?: string;
		"userId"?: string;
		"externalContactId"?: string;
		"externalOrganizationId"?: string;
		"queueId"?: string;
		"groupId"?: string;
		"teamId"?: string;
		"queueName"?: string;
		"purpose"?: string;
		"participantType"?: string;
		"consultParticipantId"?: string;
		"address"?: string;
		"ani"?: string;
		"aniName"?: string;
		"dnis"?: string;
		"locale"?: string;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"wrapup"?: Models.Wrapup;
		"conversationRoutingData"?: Models.ConversationRoutingData;
		"alertingTimeoutMs"?: number;
		"monitoredParticipantId"?: string;
		"attributes"?: { [key: string]: string; };
		"calls"?: Array<Models.CallBasic>;
		"callbacks"?: Array<Models.CallbackBasic>;
		"chats"?: Array<Models.ConversationChat>;
		"cobrowsesessions"?: Array<Models.Cobrowsesession>;
		"emails"?: Array<Models.Email>;
		"messages"?: Array<Models.Message>;
		"screenshares"?: Array<Models.Screenshare>;
		"socialExpressions"?: Array<Models.SocialExpression>;
		"videos"?: Array<Models.Video>;
		"evaluations"?: Array<Models.Evaluation>;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
	}
	
	export interface PatchUser { 
		"id"?: string;
		"acdAutoAnswer"?: boolean;
		"certifications"?: Array<string>;
		"biography"?: Models.Biography;
		"employerInfo"?: Models.EmployerInfo;
	}
	
	export interface PermissionCollectionEntityListing { 
		"entities"?: Array<Models.DomainPermissionCollection>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface Permissions { 
		"id"?: string;
		"name"?: string;
		"ids": Array<string>;
	}
	
	export interface Phone { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"site": Models.DomainEntityRef;
		"phoneBaseSettings": Models.DomainEntityRef;
		"lineBaseSettings"?: Models.DomainEntityRef;
		"phoneMetaBase"?: Models.DomainEntityRef;
		"lines": Array<Models.Line>;
		"status"?: Models.PhoneStatus;
		"secondaryStatus"?: Models.PhoneStatus;
		"userAgentInfo"?: Models.UserAgentInfo;
		"properties"?: { [key: string]: object; };
		"capabilities"?: Models.PhoneCapabilities;
		"webRtcUser"?: Models.DomainEntityRef;
		"primaryEdge"?: Models.Edge;
		"secondaryEdge"?: Models.Edge;
		"selfUri"?: string;
	}
	
	export interface PhoneBase { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"phoneMetaBase": Models.DomainEntityRef;
		"lines": Array<Models.LineBase>;
		"properties"?: { [key: string]: object; };
		"capabilities"?: Models.PhoneCapabilities;
		"selfUri"?: string;
	}
	
	export interface PhoneBaseEntityListing { 
		"entities"?: Array<Models.PhoneBase>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface PhoneCapabilities { 
		"provisions"?: boolean;
		"registers"?: boolean;
		"dualRegisters"?: boolean;
		"hardwareIdType"?: string;
		"allowReboot"?: boolean;
		"noRebalance"?: boolean;
		"noCloudProvisioning"?: boolean;
		"mediaCodecs"?: Array<string>;
	}
	
	export interface PhoneColumn { 
		"columnName": string;
		"type": string;
	}
	
	export interface PhoneEntityListing { 
		"entities"?: Array<Models.Phone>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface PhoneMetaBaseEntityListing { 
		"entities"?: Array<Models.Metabase>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface PhoneNumber { 
		"display"?: string;
		"extension"?: number;
		"acceptsSMS"?: boolean;
		"userInput"?: string;
		"e164"?: string;
		"countryCode"?: string;
	}
	
	export interface PhoneNumberColumn { 
		"columnName"?: string;
		"type"?: string;
	}
	
	export interface PhoneNumberStatus { 
		"callable"?: boolean;
	}
	
	export interface PhoneStatus { 
		"id"?: string;
		"name"?: string;
		"operationalStatus"?: string;
		"edgesStatus"?: string;
		"eventCreationTime"?: string;
		"provision"?: Models.ProvisionInfo;
		"lineStatuses"?: Array<Models.LineStatus>;
		"phoneAssignmentToEdgeType"?: string;
		"edge"?: Models.DomainEntityRef;
		"selfUri"?: string;
	}
	
	export interface PhonesReboot { 
		"phoneIds"?: Array<string>;
		"siteId"?: string;
	}
	
	export interface PhysicalInterfaceEntityListing { 
		"entities"?: Array<Models.DomainPhysicalInterface>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface PingIdentity { 
		"id"?: string;
		"name"?: string;
		"relyingPartyIdentifier"?: string;
		"certificate"?: string;
		"ssoTargetURI"?: string;
		"issuerURI"?: string;
		"disabled"?: boolean;
		"selfUri"?: string;
	}
	
	export interface PlanningPeriodSettings { 
		"weekCount": number;
		"startDate": string;
	}
	
	export interface Policy { 
		"id"?: string;
		"name"?: string;
		"modifiedDate"?: string;
		"createdDate"?: string;
		"order"?: number;
		"description"?: string;
		"enabled"?: boolean;
		"mediaPolicies"?: Models.MediaPolicies;
		"conditions"?: Models.PolicyConditions;
		"actions"?: Models.PolicyActions;
		"policyErrors"?: Models.PolicyErrors;
		"selfUri"?: string;
	}
	
	export interface PolicyActions { 
		"retainRecording"?: boolean;
		"deleteRecording"?: boolean;
		"alwaysDelete"?: boolean;
		"assignEvaluations"?: Array<Models.EvaluationAssignment>;
		"assignMeteredEvaluations"?: Array<Models.MeteredEvaluationAssignment>;
		"assignMeteredAssignmentByAgent"?: Array<Models.MeteredAssignmentByAgent>;
		"assignCalibrations"?: Array<Models.CalibrationAssignment>;
		"assignSurveys"?: Array<Models.SurveyAssignment>;
		"retentionDuration"?: Models.RetentionDuration;
		"initiateScreenRecording"?: Models.InitiateScreenRecording;
		"mediaTranscriptions"?: Array<Models.MediaTranscription>;
		"integrationExport"?: Models.IntegrationExport;
	}
	
	export interface PolicyConditions { 
		"forUsers"?: Array<Models.User>;
		"directions"?: Array<string>;
		"dateRanges"?: Array<string>;
		"mediaTypes"?: Array<string>;
		"forQueues"?: Array<Models.Queue>;
		"duration"?: Models.DurationCondition;
		"wrapupCodes"?: Array<Models.WrapupCode>;
		"timeAllowed"?: Models.TimeAllowed;
	}
	
	export interface PolicyCreate { 
		"id"?: string;
		"name": string;
		"modifiedDate"?: string;
		"createdDate"?: string;
		"order"?: number;
		"description"?: string;
		"enabled"?: boolean;
		"mediaPolicies"?: Models.MediaPolicies;
		"conditions"?: Models.PolicyConditions;
		"actions"?: Models.PolicyActions;
		"policyErrors"?: Models.PolicyErrors;
		"selfUri"?: string;
	}
	
	export interface PolicyEntityListing { 
		"entities"?: Array<Models.Policy>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface PolicyErrorMessage { 
		"statusCode"?: number;
		"userMessage"?: object;
		"userParamsMessage"?: string;
		"errorCode"?: string;
		"correlationId"?: string;
		"userParams"?: Array<Models.UserParam>;
		"insertDate"?: string;
	}
	
	export interface PolicyErrors { 
		"policyErrorMessages"?: Array<Models.PolicyErrorMessage>;
	}
	
	export interface PostActionInput { 
		"category": string;
		"name": string;
		"integrationId": string;
		"config": Models.ActionConfig;
		"contract": Models.ActionContractInput;
		"secure"?: boolean;
	}
	
	export interface PostInputContract { 
		"inputSchema": Models.JsonSchemaDocument;
	}
	
	export interface PostOutputContract { 
		"successSchema": Models.JsonSchemaDocument;
	}
	
	export interface PredictionResults { 
		"intent"?: string;
		"formula": string;
		"estimatedWaitTimeSeconds": number;
	}
	
	export interface PresenceDefinition { 
		"id"?: string;
		"systemPresence"?: string;
		"selfUri"?: string;
	}
	
	export interface PresenceDetailQueryClause { 
		"type": string;
		"predicates": Array<Models.PresenceDetailQueryPredicate>;
	}
	
	export interface PresenceDetailQueryFilter { 
		"type": string;
		"clauses"?: Array<Models.PresenceDetailQueryClause>;
		"predicates"?: Array<Models.PresenceDetailQueryPredicate>;
	}
	
	export interface PresenceDetailQueryPredicate { 
		"type"?: string;
		"dimension"?: string;
		"operator"?: string;
		"value"?: string;
		"range"?: Models.NumericRange;
	}
	
	export interface PresenceEventOrganizationPresence { 
		"id"?: string;
		"systemPresence"?: string;
	}
	
	export interface PresenceEventUserPresence { 
		"source"?: string;
		"presenceDefinition"?: Models.PresenceEventOrganizationPresence;
		"primary"?: boolean;
		"message"?: string;
		"modifiedDate"?: string;
	}
	
	export interface Prompt { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"resources"?: Array<Models.PromptAsset>;
		"currentOperation"?: Models.Operation;
		"selfUri"?: string;
	}
	
	export interface PromptAsset { 
		"id"?: string;
		"name"?: string;
		"promptId"?: string;
		"language"?: string;
		"mediaUri"?: string;
		"ttsString"?: string;
		"text"?: string;
		"uploadStatus"?: string;
		"uploadUri"?: string;
		"languageDefault"?: boolean;
		"tags"?: { [key: string]: Array<string>; };
		"durationSeconds"?: number;
		"selfUri"?: string;
	}
	
	export interface PromptAssetCreate { 
		"id"?: string;
		"name"?: string;
		"promptId"?: string;
		"language": string;
		"mediaUri"?: string;
		"ttsString"?: string;
		"text"?: string;
		"uploadStatus"?: string;
		"uploadUri"?: string;
		"languageDefault"?: boolean;
		"tags"?: { [key: string]: Array<string>; };
		"durationSeconds"?: number;
		"selfUri"?: string;
	}
	
	export interface PromptAssetEntityListing { 
		"entities"?: Array<Models.PromptAsset>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface PromptEntityListing { 
		"entities"?: Array<Models.Prompt>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface PropertyChange { 
		"property"?: string;
		"oldValues"?: Array<string>;
		"newValues"?: Array<string>;
	}
	
	export interface PropertyIndexRequest { 
		"sessionId": string;
		"targetDate": string;
		"properties": Array<Models.AnalyticsProperty>;
	}
	
	export interface ProvisionInfo { 
		"time"?: string;
		"source"?: string;
		"errorInfo"?: string;
	}
	
	export interface PublishDraftInput { 
		"version": number;
	}
	
	export interface PublishForm { 
		"published": boolean;
		"id": string;
	}
	
	export interface PublishedSurveyFormReference { 
		"id"?: string;
		"name"?: string;
		"contextId"?: string;
		"selfUri"?: string;
	}
	
	export interface PureCloud { 
		"id"?: string;
		"name"?: string;
		"disabled"?: boolean;
		"selfUri"?: string;
	}
	
	export interface PureEngage { 
		"id"?: string;
		"name"?: string;
		"autoProvisionUsers"?: boolean;
		"certificate"?: string;
		"ssoTargetURI"?: string;
		"issuerURI"?: string;
		"disabled"?: boolean;
		"selfUri"?: string;
	}
	
	export interface QualityAudit { 
		"id"?: string;
		"name"?: string;
		"user"?: Models.User;
		"jobId"?: string;
		"level"?: string;
		"entity"?: Models.AuditEntity;
		"timestamp"?: string;
		"action"?: string;
		"status"?: string;
		"changes"?: Array<Models.Change>;
		"entityType"?: string;
		"selfUri"?: string;
	}
	
	export interface QualityAuditPage { 
		"entities"?: Array<Models.QualityAudit>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface QueryDivision { 
	}
	
	export interface QueryFacetInfo { 
		"attributes"?: Array<Models.FacetKeyAttribute>;
		"facets"?: Array<Models.FacetEntry>;
	}
	
	export interface QueryRequest { 
		"queryPhrase"?: string;
		"pageNumber"?: number;
		"pageSize"?: number;
		"facetNameRequests"?: Array<string>;
		"sort"?: Array<Models.SortItem>;
		"filters"?: Array<Models.ContentFilterItem>;
		"attributeFilters"?: Array<Models.AttributeFilterItem>;
		"includeShares"?: boolean;
	}
	
	export interface QueryResult { 
		"id"?: string;
		"name"?: string;
		"body"?: Models.DomainEntity;
		"selfUri"?: string;
	}
	
	export interface QueryResults { 
		"results"?: Models.DomainEntityListingQueryResult;
		"facetInfo"?: Models.QueryFacetInfo;
	}
	
	export interface Queue { 
		"id"?: string;
		"name"?: string;
		"division"?: Models.Division;
		"description"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"memberCount"?: number;
		"mediaSettings"?: { [key: string]: Models.MediaSetting; };
		"bullseye"?: Models.Bullseye;
		"acwSettings"?: Models.AcwSettings;
		"skillEvaluationMethod"?: string;
		"queueFlow"?: Models.DomainEntityRef;
		"whisperPrompt"?: Models.DomainEntityRef;
		"autoAnswerOnly"?: boolean;
		"callingPartyName"?: string;
		"callingPartyNumber"?: string;
		"defaultScripts"?: { [key: string]: Models.Script; };
		"outboundMessagingAddresses"?: Models.QueueMessagingAddresses;
		"outboundEmailAddress"?: Models.QueueEmailAddress;
		"selfUri"?: string;
	}
	
	export interface QueueConversationCallEventTopicCallConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.QueueConversationCallEventTopicCallMediaParticipant>;
		"otherMediaUris"?: Array<string>;
		"recordingState"?: string;
		"maxParticipants"?: number;
	}
	
	export interface QueueConversationCallEventTopicCallMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.QueueConversationCallEventTopicUriReference;
		"queue"?: Models.QueueConversationCallEventTopicUriReference;
		"team"?: Models.QueueConversationCallEventTopicUriReference;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.QueueConversationCallEventTopicErrorBody;
		"script"?: Models.QueueConversationCallEventTopicUriReference;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.QueueConversationCallEventTopicUriReference;
		"externalOrganization"?: Models.QueueConversationCallEventTopicUriReference;
		"wrapup"?: Models.QueueConversationCallEventTopicWrapup;
		"conversationRoutingData"?: Models.QueueConversationCallEventTopicConversationRoutingData;
		"peer"?: string;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.QueueConversationCallEventTopicJourneyContext;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"muted"?: boolean;
		"confined"?: boolean;
		"recording"?: boolean;
		"recordingState"?: string;
		"group"?: Models.QueueConversationCallEventTopicUriReference;
		"ani"?: string;
		"dnis"?: string;
		"documentId"?: string;
		"monitoredParticipantId"?: string;
		"consultParticipantId"?: string;
		"faxStatus"?: Models.QueueConversationCallEventTopicFaxStatus;
	}
	
	export interface QueueConversationCallEventTopicConversationRoutingData { 
		"queue"?: Models.QueueConversationCallEventTopicUriReference;
		"language"?: Models.QueueConversationCallEventTopicUriReference;
		"priority"?: number;
		"skills"?: Array<Models.QueueConversationCallEventTopicUriReference>;
		"scoredAgents"?: Array<Models.QueueConversationCallEventTopicScoredAgent>;
	}
	
	export interface QueueConversationCallEventTopicDetail { 
		"errorCode"?: string;
		"fieldName"?: string;
		"entityId"?: string;
		"entityName"?: string;
	}
	
	export interface QueueConversationCallEventTopicErrorBody { 
		"status"?: number;
		"code"?: string;
		"entityId"?: string;
		"entityName"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"contextId"?: string;
		"details"?: Array<Models.QueueConversationCallEventTopicDetail>;
		"errors"?: Array<Models.QueueConversationCallEventTopicErrorBody>;
	}
	
	export interface QueueConversationCallEventTopicFaxStatus { 
		"direction"?: string;
		"expectedPages"?: number;
		"activePage"?: number;
		"linesTransmitted"?: number;
		"bytesTransmitted"?: number;
		"dataRate"?: number;
		"pageErrors"?: number;
		"lineErrors"?: number;
	}
	
	export interface QueueConversationCallEventTopicJourneyAction { 
		"id"?: string;
		"actionMap"?: Models.QueueConversationCallEventTopicJourneyActionMap;
	}
	
	export interface QueueConversationCallEventTopicJourneyActionMap { 
		"id"?: string;
		"version"?: number;
	}
	
	export interface QueueConversationCallEventTopicJourneyContext { 
		"customer"?: Models.QueueConversationCallEventTopicJourneyCustomer;
		"customerSession"?: Models.QueueConversationCallEventTopicJourneyCustomerSession;
		"triggeringAction"?: Models.QueueConversationCallEventTopicJourneyAction;
	}
	
	export interface QueueConversationCallEventTopicJourneyCustomer { 
		"id"?: string;
		"idType"?: string;
	}
	
	export interface QueueConversationCallEventTopicJourneyCustomerSession { 
		"id"?: string;
		"type"?: string;
	}
	
	export interface QueueConversationCallEventTopicScoredAgent { 
		"agent"?: Models.QueueConversationCallEventTopicUriReference;
		"score"?: number;
	}
	
	export interface QueueConversationCallEventTopicUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface QueueConversationCallEventTopicWrapup { 
		"code"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationCallbackEventTopicCallbackConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.QueueConversationCallbackEventTopicCallbackMediaParticipant>;
		"otherMediaUris"?: Array<string>;
	}
	
	export interface QueueConversationCallbackEventTopicCallbackMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.QueueConversationCallbackEventTopicUriReference;
		"queue"?: Models.QueueConversationCallbackEventTopicUriReference;
		"team"?: Models.QueueConversationCallbackEventTopicUriReference;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.QueueConversationCallbackEventTopicErrorBody;
		"script"?: Models.QueueConversationCallbackEventTopicUriReference;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.QueueConversationCallbackEventTopicUriReference;
		"externalOrganization"?: Models.QueueConversationCallbackEventTopicUriReference;
		"wrapup"?: Models.QueueConversationCallbackEventTopicWrapup;
		"conversationRoutingData"?: Models.QueueConversationCallbackEventTopicConversationRoutingData;
		"peer"?: string;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.QueueConversationCallbackEventTopicJourneyContext;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"outboundPreview"?: Models.QueueConversationCallbackEventTopicDialerPreview;
		"voicemail"?: Models.QueueConversationCallbackEventTopicVoicemail;
		"callbackNumbers"?: Array<string>;
		"callbackUserName"?: string;
		"skipEnabled"?: boolean;
		"timeoutSeconds"?: number;
		"callbackScheduledTime"?: string;
		"automatedCallbackConfigId"?: string;
	}
	
	export interface QueueConversationCallbackEventTopicConversationRoutingData { 
		"queue"?: Models.QueueConversationCallbackEventTopicUriReference;
		"language"?: Models.QueueConversationCallbackEventTopicUriReference;
		"priority"?: number;
		"skills"?: Array<Models.QueueConversationCallbackEventTopicUriReference>;
		"scoredAgents"?: Array<Models.QueueConversationCallbackEventTopicScoredAgent>;
	}
	
	export interface QueueConversationCallbackEventTopicDetail { 
		"errorCode"?: string;
		"fieldName"?: string;
		"entityId"?: string;
		"entityName"?: string;
	}
	
	export interface QueueConversationCallbackEventTopicDialerPreview { 
		"id"?: string;
		"contactId"?: string;
		"contactListId"?: string;
		"campaignId"?: string;
		"phoneNumberColumns"?: Array<Models.QueueConversationCallbackEventTopicPhoneNumberColumn>;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationCallbackEventTopicErrorBody { 
		"status"?: number;
		"code"?: string;
		"entityId"?: string;
		"entityName"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"contextId"?: string;
		"details"?: Array<Models.QueueConversationCallbackEventTopicDetail>;
		"errors"?: Array<Models.QueueConversationCallbackEventTopicErrorBody>;
	}
	
	export interface QueueConversationCallbackEventTopicJourneyAction { 
		"id"?: string;
		"actionMap"?: Models.QueueConversationCallbackEventTopicJourneyActionMap;
	}
	
	export interface QueueConversationCallbackEventTopicJourneyActionMap { 
		"id"?: string;
		"version"?: number;
	}
	
	export interface QueueConversationCallbackEventTopicJourneyContext { 
		"customer"?: Models.QueueConversationCallbackEventTopicJourneyCustomer;
		"customerSession"?: Models.QueueConversationCallbackEventTopicJourneyCustomerSession;
		"triggeringAction"?: Models.QueueConversationCallbackEventTopicJourneyAction;
	}
	
	export interface QueueConversationCallbackEventTopicJourneyCustomer { 
		"id"?: string;
		"idType"?: string;
	}
	
	export interface QueueConversationCallbackEventTopicJourneyCustomerSession { 
		"id"?: string;
		"type"?: string;
	}
	
	export interface QueueConversationCallbackEventTopicPhoneNumberColumn { 
		"columnName"?: string;
		"type"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationCallbackEventTopicScoredAgent { 
		"agent"?: Models.QueueConversationCallbackEventTopicUriReference;
		"score"?: number;
	}
	
	export interface QueueConversationCallbackEventTopicUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface QueueConversationCallbackEventTopicVoicemail { 
		"id"?: string;
		"uploadStatus"?: string;
	}
	
	export interface QueueConversationCallbackEventTopicWrapup { 
		"code"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationChatEventTopicChatConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.QueueConversationChatEventTopicChatMediaParticipant>;
		"otherMediaUris"?: Array<string>;
	}
	
	export interface QueueConversationChatEventTopicChatMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.QueueConversationChatEventTopicUriReference;
		"queue"?: Models.QueueConversationChatEventTopicUriReference;
		"team"?: Models.QueueConversationChatEventTopicUriReference;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.QueueConversationChatEventTopicErrorBody;
		"script"?: Models.QueueConversationChatEventTopicUriReference;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.QueueConversationChatEventTopicUriReference;
		"externalOrganization"?: Models.QueueConversationChatEventTopicUriReference;
		"wrapup"?: Models.QueueConversationChatEventTopicWrapup;
		"conversationRoutingData"?: Models.QueueConversationChatEventTopicConversationRoutingData;
		"peer"?: string;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.QueueConversationChatEventTopicJourneyContext;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"roomId"?: string;
		"avatarImageUrl"?: string;
	}
	
	export interface QueueConversationChatEventTopicConversationRoutingData { 
		"queue"?: Models.QueueConversationChatEventTopicUriReference;
		"language"?: Models.QueueConversationChatEventTopicUriReference;
		"priority"?: number;
		"skills"?: Array<Models.QueueConversationChatEventTopicUriReference>;
		"scoredAgents"?: Array<Models.QueueConversationChatEventTopicScoredAgent>;
	}
	
	export interface QueueConversationChatEventTopicDetail { 
		"errorCode"?: string;
		"fieldName"?: string;
		"entityId"?: string;
		"entityName"?: string;
	}
	
	export interface QueueConversationChatEventTopicErrorBody { 
		"status"?: number;
		"code"?: string;
		"entityId"?: string;
		"entityName"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"contextId"?: string;
		"details"?: Array<Models.QueueConversationChatEventTopicDetail>;
		"errors"?: Array<Models.QueueConversationChatEventTopicErrorBody>;
	}
	
	export interface QueueConversationChatEventTopicJourneyAction { 
		"id"?: string;
		"actionMap"?: Models.QueueConversationChatEventTopicJourneyActionMap;
	}
	
	export interface QueueConversationChatEventTopicJourneyActionMap { 
		"id"?: string;
		"version"?: number;
	}
	
	export interface QueueConversationChatEventTopicJourneyContext { 
		"customer"?: Models.QueueConversationChatEventTopicJourneyCustomer;
		"customerSession"?: Models.QueueConversationChatEventTopicJourneyCustomerSession;
		"triggeringAction"?: Models.QueueConversationChatEventTopicJourneyAction;
	}
	
	export interface QueueConversationChatEventTopicJourneyCustomer { 
		"id"?: string;
		"idType"?: string;
	}
	
	export interface QueueConversationChatEventTopicJourneyCustomerSession { 
		"id"?: string;
		"type"?: string;
	}
	
	export interface QueueConversationChatEventTopicScoredAgent { 
		"agent"?: Models.QueueConversationChatEventTopicUriReference;
		"score"?: number;
	}
	
	export interface QueueConversationChatEventTopicUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface QueueConversationChatEventTopicWrapup { 
		"code"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationCobrowseEventTopicCobrowseConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.QueueConversationCobrowseEventTopicCobrowseMediaParticipant>;
		"otherMediaUris"?: Array<string>;
	}
	
	export interface QueueConversationCobrowseEventTopicCobrowseMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.QueueConversationCobrowseEventTopicUriReference;
		"queue"?: Models.QueueConversationCobrowseEventTopicUriReference;
		"team"?: Models.QueueConversationCobrowseEventTopicUriReference;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.QueueConversationCobrowseEventTopicErrorBody;
		"script"?: Models.QueueConversationCobrowseEventTopicUriReference;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.QueueConversationCobrowseEventTopicUriReference;
		"externalOrganization"?: Models.QueueConversationCobrowseEventTopicUriReference;
		"wrapup"?: Models.QueueConversationCobrowseEventTopicWrapup;
		"conversationRoutingData"?: Models.QueueConversationCobrowseEventTopicConversationRoutingData;
		"peer"?: string;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.QueueConversationCobrowseEventTopicJourneyContext;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"cobrowseSessionId"?: string;
		"cobrowseRole"?: string;
		"viewerUrl"?: string;
		"providerEventTime"?: string;
		"controlling"?: Array<string>;
	}
	
	export interface QueueConversationCobrowseEventTopicConversationRoutingData { 
		"queue"?: Models.QueueConversationCobrowseEventTopicUriReference;
		"language"?: Models.QueueConversationCobrowseEventTopicUriReference;
		"priority"?: number;
		"skills"?: Array<Models.QueueConversationCobrowseEventTopicUriReference>;
		"scoredAgents"?: Array<Models.QueueConversationCobrowseEventTopicScoredAgent>;
	}
	
	export interface QueueConversationCobrowseEventTopicDetail { 
		"errorCode"?: string;
		"fieldName"?: string;
		"entityId"?: string;
		"entityName"?: string;
	}
	
	export interface QueueConversationCobrowseEventTopicErrorBody { 
		"status"?: number;
		"code"?: string;
		"entityId"?: string;
		"entityName"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"contextId"?: string;
		"details"?: Array<Models.QueueConversationCobrowseEventTopicDetail>;
		"errors"?: Array<Models.QueueConversationCobrowseEventTopicErrorBody>;
	}
	
	export interface QueueConversationCobrowseEventTopicJourneyAction { 
		"id"?: string;
		"actionMap"?: Models.QueueConversationCobrowseEventTopicJourneyActionMap;
	}
	
	export interface QueueConversationCobrowseEventTopicJourneyActionMap { 
		"id"?: string;
		"version"?: number;
	}
	
	export interface QueueConversationCobrowseEventTopicJourneyContext { 
		"customer"?: Models.QueueConversationCobrowseEventTopicJourneyCustomer;
		"customerSession"?: Models.QueueConversationCobrowseEventTopicJourneyCustomerSession;
		"triggeringAction"?: Models.QueueConversationCobrowseEventTopicJourneyAction;
	}
	
	export interface QueueConversationCobrowseEventTopicJourneyCustomer { 
		"id"?: string;
		"idType"?: string;
	}
	
	export interface QueueConversationCobrowseEventTopicJourneyCustomerSession { 
		"id"?: string;
		"type"?: string;
	}
	
	export interface QueueConversationCobrowseEventTopicScoredAgent { 
		"agent"?: Models.QueueConversationCobrowseEventTopicUriReference;
		"score"?: number;
	}
	
	export interface QueueConversationCobrowseEventTopicUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface QueueConversationCobrowseEventTopicWrapup { 
		"code"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationEmailEventTopicAttachment { 
		"attachmentId"?: string;
		"name"?: string;
		"contentUri"?: string;
		"contentType"?: string;
		"contentLength"?: number;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationEmailEventTopicConversationRoutingData { 
		"queue"?: Models.QueueConversationEmailEventTopicUriReference;
		"language"?: Models.QueueConversationEmailEventTopicUriReference;
		"priority"?: number;
		"skills"?: Array<Models.QueueConversationEmailEventTopicUriReference>;
		"scoredAgents"?: Array<Models.QueueConversationEmailEventTopicScoredAgent>;
	}
	
	export interface QueueConversationEmailEventTopicDetail { 
		"errorCode"?: string;
		"fieldName"?: string;
		"entityId"?: string;
		"entityName"?: string;
	}
	
	export interface QueueConversationEmailEventTopicEmailConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.QueueConversationEmailEventTopicEmailMediaParticipant>;
		"otherMediaUris"?: Array<string>;
	}
	
	export interface QueueConversationEmailEventTopicEmailMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.QueueConversationEmailEventTopicUriReference;
		"queue"?: Models.QueueConversationEmailEventTopicUriReference;
		"team"?: Models.QueueConversationEmailEventTopicUriReference;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.QueueConversationEmailEventTopicErrorBody;
		"script"?: Models.QueueConversationEmailEventTopicUriReference;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.QueueConversationEmailEventTopicUriReference;
		"externalOrganization"?: Models.QueueConversationEmailEventTopicUriReference;
		"wrapup"?: Models.QueueConversationEmailEventTopicWrapup;
		"conversationRoutingData"?: Models.QueueConversationEmailEventTopicConversationRoutingData;
		"peer"?: string;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.QueueConversationEmailEventTopicJourneyContext;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"subject"?: string;
		"messagesSent"?: number;
		"autoGenerated"?: boolean;
		"messageId"?: string;
		"draftAttachments"?: Array<Models.QueueConversationEmailEventTopicAttachment>;
		"spam"?: boolean;
	}
	
	export interface QueueConversationEmailEventTopicErrorBody { 
		"status"?: number;
		"code"?: string;
		"entityId"?: string;
		"entityName"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"contextId"?: string;
		"details"?: Array<Models.QueueConversationEmailEventTopicDetail>;
		"errors"?: Array<Models.QueueConversationEmailEventTopicErrorBody>;
	}
	
	export interface QueueConversationEmailEventTopicJourneyAction { 
		"id"?: string;
		"actionMap"?: Models.QueueConversationEmailEventTopicJourneyActionMap;
	}
	
	export interface QueueConversationEmailEventTopicJourneyActionMap { 
		"id"?: string;
		"version"?: number;
	}
	
	export interface QueueConversationEmailEventTopicJourneyContext { 
		"customer"?: Models.QueueConversationEmailEventTopicJourneyCustomer;
		"customerSession"?: Models.QueueConversationEmailEventTopicJourneyCustomerSession;
		"triggeringAction"?: Models.QueueConversationEmailEventTopicJourneyAction;
	}
	
	export interface QueueConversationEmailEventTopicJourneyCustomer { 
		"id"?: string;
		"idType"?: string;
	}
	
	export interface QueueConversationEmailEventTopicJourneyCustomerSession { 
		"id"?: string;
		"type"?: string;
	}
	
	export interface QueueConversationEmailEventTopicScoredAgent { 
		"agent"?: Models.QueueConversationEmailEventTopicUriReference;
		"score"?: number;
	}
	
	export interface QueueConversationEmailEventTopicUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface QueueConversationEmailEventTopicWrapup { 
		"code"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationEventTopicAddress { 
		"name"?: string;
		"nameRaw"?: string;
		"addressNormalized"?: string;
		"addressRaw"?: string;
		"addressDisplayable"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationEventTopicAttachment { 
		"attachmentId"?: string;
		"name"?: string;
		"contentUri"?: string;
		"contentType"?: string;
		"contentLength"?: number;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationEventTopicCall { 
		"id"?: string;
		"state"?: string;
		"recording"?: boolean;
		"recordingState"?: string;
		"muted"?: boolean;
		"confined"?: boolean;
		"held"?: boolean;
		"errorInfo"?: Models.QueueConversationEventTopicErrorDetails;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"direction"?: string;
		"documentId"?: string;
		"self"?: Models.QueueConversationEventTopicAddress;
		"other"?: Models.QueueConversationEventTopicAddress;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"disconnectReasons"?: Array<Models.QueueConversationEventTopicDisconnectReason>;
		"faxStatus"?: Models.QueueConversationEventTopicFaxStatus;
		"uuiData"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationEventTopicCallback { 
		"state"?: string;
		"id"?: string;
		"direction"?: string;
		"held"?: boolean;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"dialerPreview"?: Models.QueueConversationEventTopicDialerPreview;
		"voicemail"?: Models.QueueConversationEventTopicVoicemail;
		"callbackNumbers"?: Array<string>;
		"callbackUserName"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"skipEnabled"?: boolean;
		"provider"?: string;
		"timeoutSeconds"?: number;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"callbackScheduledTime"?: string;
		"automatedCallbackConfigId"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationEventTopicChat { 
		"state"?: string;
		"id"?: string;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"roomId"?: string;
		"avatarImageUrl"?: string;
		"held"?: boolean;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"journeyContext"?: Models.QueueConversationEventTopicJourneyContext;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationEventTopicCobrowse { 
		"state"?: string;
		"disconnectType"?: string;
		"id"?: string;
		"self"?: Models.QueueConversationEventTopicAddress;
		"roomId"?: string;
		"cobrowseSessionId"?: string;
		"cobrowseRole"?: string;
		"controlling"?: Array<string>;
		"viewerUrl"?: string;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"providerEventTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationEventTopicConversation { 
		"id"?: string;
		"maxParticipants"?: number;
		"participants"?: Array<Models.QueueConversationEventTopicParticipant>;
		"recordingState"?: string;
		"address"?: string;
	}
	
	export interface QueueConversationEventTopicConversationRoutingData { 
		"queue"?: Models.QueueConversationEventTopicUriReference;
		"language"?: Models.QueueConversationEventTopicUriReference;
		"priority"?: number;
		"skills"?: Array<Models.QueueConversationEventTopicUriReference>;
		"scoredAgents"?: Array<Models.QueueConversationEventTopicScoredAgent>;
	}
	
	export interface QueueConversationEventTopicDialerPreview { 
		"id"?: string;
		"contactId"?: string;
		"contactListId"?: string;
		"campaignId"?: string;
		"phoneNumberColumns"?: Array<Models.QueueConversationEventTopicPhoneNumberColumn>;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationEventTopicDisconnectReason { 
		"type"?: string;
		"code"?: number;
		"phrase"?: string;
	}
	
	export interface QueueConversationEventTopicEmail { 
		"id"?: string;
		"state"?: string;
		"held"?: boolean;
		"autoGenerated"?: boolean;
		"subject"?: string;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"messagesSent"?: number;
		"errorInfo"?: Models.QueueConversationEventTopicErrorDetails;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"messageId"?: string;
		"direction"?: string;
		"draftAttachments"?: Array<Models.QueueConversationEventTopicAttachment>;
		"spam"?: boolean;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationEventTopicErrorDetails { 
		"status"?: number;
		"code"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"contextId"?: string;
		"uri"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationEventTopicFaxStatus { 
		"direction"?: string;
		"expectedPages"?: number;
		"activePage"?: number;
		"linesTransmitted"?: number;
		"bytesTransmitted"?: number;
		"baudRate"?: number;
		"pageErrors"?: number;
		"lineErrors"?: number;
	}
	
	export interface QueueConversationEventTopicJourneyAction { 
		"id"?: string;
		"actionMap"?: Models.QueueConversationEventTopicJourneyActionMap;
	}
	
	export interface QueueConversationEventTopicJourneyActionMap { 
		"id"?: string;
		"version"?: number;
	}
	
	export interface QueueConversationEventTopicJourneyContext { 
		"customer"?: Models.QueueConversationEventTopicJourneyCustomer;
		"customerSession"?: Models.QueueConversationEventTopicJourneyCustomerSession;
		"triggeringAction"?: Models.QueueConversationEventTopicJourneyAction;
	}
	
	export interface QueueConversationEventTopicJourneyCustomer { 
		"id"?: string;
		"idType"?: string;
	}
	
	export interface QueueConversationEventTopicJourneyCustomerSession { 
		"id"?: string;
		"type"?: string;
	}
	
	export interface QueueConversationEventTopicMessage { 
		"id"?: string;
		"state"?: string;
		"held"?: boolean;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"toAddress"?: Models.QueueConversationEventTopicAddress;
		"fromAddress"?: Models.QueueConversationEventTopicAddress;
		"messages"?: Array<Models.QueueConversationEventTopicMessageDetails>;
		"messagesTranscriptUri"?: string;
		"type"?: string;
		"recipientCountry"?: string;
		"recipientType"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationEventTopicMessageDetails { 
		"messageId"?: string;
		"messageTime"?: string;
		"messageStatus"?: string;
		"messageSegmentCount"?: number;
		"media"?: Array<Models.QueueConversationEventTopicMessageMedia>;
		"stickers"?: Array<Models.QueueConversationEventTopicMessageSticker>;
	}
	
	export interface QueueConversationEventTopicMessageMedia { 
		"url"?: string;
		"mediaType"?: string;
		"contentLengthBytes"?: number;
		"name"?: string;
		"id"?: string;
	}
	
	export interface QueueConversationEventTopicMessageSticker { 
		"url"?: string;
		"id"?: string;
	}
	
	export interface QueueConversationEventTopicParticipant { 
		"id"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"userId"?: string;
		"externalContactId"?: string;
		"externalOrganizationId"?: string;
		"name"?: string;
		"queueId"?: string;
		"groupId"?: string;
		"teamId"?: string;
		"purpose"?: string;
		"consultParticipantId"?: string;
		"address"?: string;
		"wrapupRequired"?: boolean;
		"wrapupExpected"?: boolean;
		"wrapupPrompt"?: string;
		"wrapupTimeoutMs"?: number;
		"wrapup"?: Models.QueueConversationEventTopicWrapup;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"conversationRoutingData"?: Models.QueueConversationEventTopicConversationRoutingData;
		"alertingTimeoutMs"?: number;
		"monitoredParticipantId"?: string;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"attributes"?: { [key: string]: string; };
		"calls"?: Array<Models.QueueConversationEventTopicCall>;
		"callbacks"?: Array<Models.QueueConversationEventTopicCallback>;
		"chats"?: Array<Models.QueueConversationEventTopicChat>;
		"cobrowsesessions"?: Array<Models.QueueConversationEventTopicCobrowse>;
		"emails"?: Array<Models.QueueConversationEventTopicEmail>;
		"messages"?: Array<Models.QueueConversationEventTopicMessage>;
		"screenshares"?: Array<Models.QueueConversationEventTopicScreenshare>;
		"socialExpressions"?: Array<Models.QueueConversationEventTopicSocialExpression>;
		"videos"?: Array<Models.QueueConversationEventTopicVideo>;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationEventTopicPhoneNumberColumn { 
		"columnName"?: string;
		"type"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationEventTopicScoredAgent { 
		"agent"?: Models.QueueConversationEventTopicUriReference;
		"score"?: number;
	}
	
	export interface QueueConversationEventTopicScreenshare { 
		"state"?: string;
		"self"?: Models.QueueConversationEventTopicAddress;
		"id"?: string;
		"context"?: string;
		"sharing"?: boolean;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"disconnectType"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationEventTopicSocialExpression { 
		"state"?: string;
		"id"?: string;
		"socialMediaId"?: string;
		"socialMediaHub"?: string;
		"socialUserName"?: string;
		"previewText"?: string;
		"recordingId"?: string;
		"held"?: boolean;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationEventTopicUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface QueueConversationEventTopicVideo { 
		"state"?: string;
		"self"?: Models.QueueConversationEventTopicAddress;
		"id"?: string;
		"context"?: string;
		"audioMuted"?: boolean;
		"videoMuted"?: boolean;
		"sharingScreen"?: boolean;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"disconnectType"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"msids"?: Array<string>;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationEventTopicVoicemail { 
		"id"?: string;
		"uploadStatus"?: string;
	}
	
	export interface QueueConversationEventTopicWrapup { 
		"code"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationMessageEventTopicConversationRoutingData { 
		"queue"?: Models.QueueConversationMessageEventTopicUriReference;
		"language"?: Models.QueueConversationMessageEventTopicUriReference;
		"priority"?: number;
		"skills"?: Array<Models.QueueConversationMessageEventTopicUriReference>;
		"scoredAgents"?: Array<Models.QueueConversationMessageEventTopicScoredAgent>;
	}
	
	export interface QueueConversationMessageEventTopicDetail { 
		"errorCode"?: string;
		"fieldName"?: string;
		"entityId"?: string;
		"entityName"?: string;
	}
	
	export interface QueueConversationMessageEventTopicErrorBody { 
		"status"?: number;
		"code"?: string;
		"entityId"?: string;
		"entityName"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"contextId"?: string;
		"details"?: Array<Models.QueueConversationMessageEventTopicDetail>;
		"errors"?: Array<Models.QueueConversationMessageEventTopicErrorBody>;
	}
	
	export interface QueueConversationMessageEventTopicJourneyAction { 
		"id"?: string;
		"actionMap"?: Models.QueueConversationMessageEventTopicJourneyActionMap;
	}
	
	export interface QueueConversationMessageEventTopicJourneyActionMap { 
		"id"?: string;
		"version"?: number;
	}
	
	export interface QueueConversationMessageEventTopicJourneyContext { 
		"customer"?: Models.QueueConversationMessageEventTopicJourneyCustomer;
		"customerSession"?: Models.QueueConversationMessageEventTopicJourneyCustomerSession;
		"triggeringAction"?: Models.QueueConversationMessageEventTopicJourneyAction;
	}
	
	export interface QueueConversationMessageEventTopicJourneyCustomer { 
		"id"?: string;
		"idType"?: string;
	}
	
	export interface QueueConversationMessageEventTopicJourneyCustomerSession { 
		"id"?: string;
		"type"?: string;
	}
	
	export interface QueueConversationMessageEventTopicMessageConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.QueueConversationMessageEventTopicMessageMediaParticipant>;
		"otherMediaUris"?: Array<string>;
	}
	
	export interface QueueConversationMessageEventTopicMessageDetails { 
		"message"?: Models.QueueConversationMessageEventTopicUriReference;
		"messageTime"?: string;
		"messageSegmentCount"?: number;
		"messageStatus"?: string;
		"media"?: Array<Models.QueueConversationMessageEventTopicMessageMedia>;
		"stickers"?: Array<Models.QueueConversationMessageEventTopicMessageSticker>;
	}
	
	export interface QueueConversationMessageEventTopicMessageMedia { 
		"url"?: string;
		"mediaType"?: string;
		"contentLengthBytes"?: number;
		"name"?: string;
		"id"?: string;
	}
	
	export interface QueueConversationMessageEventTopicMessageMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.QueueConversationMessageEventTopicUriReference;
		"queue"?: Models.QueueConversationMessageEventTopicUriReference;
		"team"?: Models.QueueConversationMessageEventTopicUriReference;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.QueueConversationMessageEventTopicErrorBody;
		"script"?: Models.QueueConversationMessageEventTopicUriReference;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.QueueConversationMessageEventTopicUriReference;
		"externalOrganization"?: Models.QueueConversationMessageEventTopicUriReference;
		"wrapup"?: Models.QueueConversationMessageEventTopicWrapup;
		"conversationRoutingData"?: Models.QueueConversationMessageEventTopicConversationRoutingData;
		"peer"?: string;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.QueueConversationMessageEventTopicJourneyContext;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"messages"?: Array<Models.QueueConversationMessageEventTopicMessageDetails>;
		"type"?: string;
		"recipientCountry"?: string;
		"recipientType"?: string;
	}
	
	export interface QueueConversationMessageEventTopicMessageSticker { 
		"url"?: string;
		"id"?: string;
	}
	
	export interface QueueConversationMessageEventTopicScoredAgent { 
		"agent"?: Models.QueueConversationMessageEventTopicUriReference;
		"score"?: number;
	}
	
	export interface QueueConversationMessageEventTopicUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface QueueConversationMessageEventTopicWrapup { 
		"code"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationScreenShareEventTopicConversationRoutingData { 
		"queue"?: Models.QueueConversationScreenShareEventTopicUriReference;
		"language"?: Models.QueueConversationScreenShareEventTopicUriReference;
		"priority"?: number;
		"skills"?: Array<Models.QueueConversationScreenShareEventTopicUriReference>;
		"scoredAgents"?: Array<Models.QueueConversationScreenShareEventTopicScoredAgent>;
	}
	
	export interface QueueConversationScreenShareEventTopicDetail { 
		"errorCode"?: string;
		"fieldName"?: string;
		"entityId"?: string;
		"entityName"?: string;
	}
	
	export interface QueueConversationScreenShareEventTopicErrorBody { 
		"status"?: number;
		"code"?: string;
		"entityId"?: string;
		"entityName"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"contextId"?: string;
		"details"?: Array<Models.QueueConversationScreenShareEventTopicDetail>;
		"errors"?: Array<Models.QueueConversationScreenShareEventTopicErrorBody>;
	}
	
	export interface QueueConversationScreenShareEventTopicJourneyAction { 
		"id"?: string;
		"actionMap"?: Models.QueueConversationScreenShareEventTopicJourneyActionMap;
	}
	
	export interface QueueConversationScreenShareEventTopicJourneyActionMap { 
		"id"?: string;
		"version"?: number;
	}
	
	export interface QueueConversationScreenShareEventTopicJourneyContext { 
		"customer"?: Models.QueueConversationScreenShareEventTopicJourneyCustomer;
		"customerSession"?: Models.QueueConversationScreenShareEventTopicJourneyCustomerSession;
		"triggeringAction"?: Models.QueueConversationScreenShareEventTopicJourneyAction;
	}
	
	export interface QueueConversationScreenShareEventTopicJourneyCustomer { 
		"id"?: string;
		"idType"?: string;
	}
	
	export interface QueueConversationScreenShareEventTopicJourneyCustomerSession { 
		"id"?: string;
		"type"?: string;
	}
	
	export interface QueueConversationScreenShareEventTopicScoredAgent { 
		"agent"?: Models.QueueConversationScreenShareEventTopicUriReference;
		"score"?: number;
	}
	
	export interface QueueConversationScreenShareEventTopicScreenShareConversation { 
		"id"?: string;
		"name"?: string;
		"participants"?: Array<Models.QueueConversationScreenShareEventTopicScreenShareMediaParticipant>;
		"otherMediaUris"?: Array<string>;
	}
	
	export interface QueueConversationScreenShareEventTopicScreenShareMediaParticipant { 
		"id"?: string;
		"name"?: string;
		"address"?: string;
		"startTime"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"startHoldTime"?: string;
		"purpose"?: string;
		"state"?: string;
		"direction"?: string;
		"disconnectType"?: string;
		"held"?: boolean;
		"wrapupRequired"?: boolean;
		"wrapupPrompt"?: string;
		"user"?: Models.QueueConversationScreenShareEventTopicUriReference;
		"queue"?: Models.QueueConversationScreenShareEventTopicUriReference;
		"team"?: Models.QueueConversationScreenShareEventTopicUriReference;
		"attributes"?: { [key: string]: string; };
		"errorInfo"?: Models.QueueConversationScreenShareEventTopicErrorBody;
		"script"?: Models.QueueConversationScreenShareEventTopicUriReference;
		"wrapupTimeoutMs"?: number;
		"wrapupSkipped"?: boolean;
		"alertingTimeoutMs"?: number;
		"provider"?: string;
		"externalContact"?: Models.QueueConversationScreenShareEventTopicUriReference;
		"externalOrganization"?: Models.QueueConversationScreenShareEventTopicUriReference;
		"wrapup"?: Models.QueueConversationScreenShareEventTopicWrapup;
		"conversationRoutingData"?: Models.QueueConversationScreenShareEventTopicConversationRoutingData;
		"peer"?: string;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"journeyContext"?: Models.QueueConversationScreenShareEventTopicJourneyContext;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"context"?: string;
		"peerCount"?: number;
		"sharing"?: boolean;
	}
	
	export interface QueueConversationScreenShareEventTopicUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface QueueConversationScreenShareEventTopicWrapup { 
		"code"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationSocialExpressionEventTopicAddress { 
		"name"?: string;
		"nameRaw"?: string;
		"addressNormalized"?: string;
		"addressRaw"?: string;
		"addressDisplayable"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationSocialExpressionEventTopicAttachment { 
		"attachmentId"?: string;
		"name"?: string;
		"contentUri"?: string;
		"contentType"?: string;
		"contentLength"?: number;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationSocialExpressionEventTopicCall { 
		"id"?: string;
		"state"?: string;
		"recording"?: boolean;
		"recordingState"?: string;
		"muted"?: boolean;
		"confined"?: boolean;
		"held"?: boolean;
		"errorInfo"?: Models.QueueConversationSocialExpressionEventTopicErrorDetails;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"direction"?: string;
		"documentId"?: string;
		"self"?: Models.QueueConversationSocialExpressionEventTopicAddress;
		"other"?: Models.QueueConversationSocialExpressionEventTopicAddress;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"disconnectReasons"?: Array<Models.QueueConversationSocialExpressionEventTopicDisconnectReason>;
		"faxStatus"?: Models.QueueConversationSocialExpressionEventTopicFaxStatus;
		"uuiData"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationSocialExpressionEventTopicCallback { 
		"state"?: string;
		"id"?: string;
		"direction"?: string;
		"held"?: boolean;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"dialerPreview"?: Models.QueueConversationSocialExpressionEventTopicDialerPreview;
		"voicemail"?: Models.QueueConversationSocialExpressionEventTopicVoicemail;
		"callbackNumbers"?: Array<string>;
		"callbackUserName"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"skipEnabled"?: boolean;
		"provider"?: string;
		"timeoutSeconds"?: number;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"callbackScheduledTime"?: string;
		"automatedCallbackConfigId"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationSocialExpressionEventTopicChat { 
		"state"?: string;
		"id"?: string;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"roomId"?: string;
		"avatarImageUrl"?: string;
		"held"?: boolean;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"journeyContext"?: Models.QueueConversationSocialExpressionEventTopicJourneyContext;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationSocialExpressionEventTopicCobrowse { 
		"state"?: string;
		"disconnectType"?: string;
		"id"?: string;
		"self"?: Models.QueueConversationSocialExpressionEventTopicAddress;
		"roomId"?: string;
		"cobrowseSessionId"?: string;
		"cobrowseRole"?: string;
		"controlling"?: Array<string>;
		"viewerUrl"?: string;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"providerEventTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationSocialExpressionEventTopicConversation { 
		"id"?: string;
		"maxParticipants"?: number;
		"participants"?: Array<Models.QueueConversationSocialExpressionEventTopicParticipant>;
		"recordingState"?: string;
		"address"?: string;
	}
	
	export interface QueueConversationSocialExpressionEventTopicConversationRoutingData { 
		"queue"?: Models.QueueConversationSocialExpressionEventTopicUriReference;
		"language"?: Models.QueueConversationSocialExpressionEventTopicUriReference;
		"priority"?: number;
		"skills"?: Array<Models.QueueConversationSocialExpressionEventTopicUriReference>;
		"scoredAgents"?: Array<Models.QueueConversationSocialExpressionEventTopicScoredAgent>;
	}
	
	export interface QueueConversationSocialExpressionEventTopicDialerPreview { 
		"id"?: string;
		"contactId"?: string;
		"contactListId"?: string;
		"campaignId"?: string;
		"phoneNumberColumns"?: Array<Models.QueueConversationSocialExpressionEventTopicPhoneNumberColumn>;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationSocialExpressionEventTopicDisconnectReason { 
		"type"?: string;
		"code"?: number;
		"phrase"?: string;
	}
	
	export interface QueueConversationSocialExpressionEventTopicEmail { 
		"id"?: string;
		"state"?: string;
		"held"?: boolean;
		"autoGenerated"?: boolean;
		"subject"?: string;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"messagesSent"?: number;
		"errorInfo"?: Models.QueueConversationSocialExpressionEventTopicErrorDetails;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"messageId"?: string;
		"direction"?: string;
		"draftAttachments"?: Array<Models.QueueConversationSocialExpressionEventTopicAttachment>;
		"spam"?: boolean;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationSocialExpressionEventTopicErrorDetails { 
		"status"?: number;
		"code"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"contextId"?: string;
		"uri"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationSocialExpressionEventTopicFaxStatus { 
		"direction"?: string;
		"expectedPages"?: number;
		"activePage"?: number;
		"linesTransmitted"?: number;
		"bytesTransmitted"?: number;
		"baudRate"?: number;
		"pageErrors"?: number;
		"lineErrors"?: number;
	}
	
	export interface QueueConversationSocialExpressionEventTopicJourneyAction { 
		"id"?: string;
		"actionMap"?: Models.QueueConversationSocialExpressionEventTopicJourneyActionMap;
	}
	
	export interface QueueConversationSocialExpressionEventTopicJourneyActionMap { 
		"id"?: string;
		"version"?: number;
	}
	
	export interface QueueConversationSocialExpressionEventTopicJourneyContext { 
		"customer"?: Models.QueueConversationSocialExpressionEventTopicJourneyCustomer;
		"customerSession"?: Models.QueueConversationSocialExpressionEventTopicJourneyCustomerSession;
		"triggeringAction"?: Models.QueueConversationSocialExpressionEventTopicJourneyAction;
	}
	
	export interface QueueConversationSocialExpressionEventTopicJourneyCustomer { 
		"id"?: string;
		"idType"?: string;
	}
	
	export interface QueueConversationSocialExpressionEventTopicJourneyCustomerSession { 
		"id"?: string;
		"type"?: string;
	}
	
	export interface QueueConversationSocialExpressionEventTopicMessage { 
		"id"?: string;
		"state"?: string;
		"held"?: boolean;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"toAddress"?: Models.QueueConversationSocialExpressionEventTopicAddress;
		"fromAddress"?: Models.QueueConversationSocialExpressionEventTopicAddress;
		"messages"?: Array<Models.QueueConversationSocialExpressionEventTopicMessageDetails>;
		"messagesTranscriptUri"?: string;
		"type"?: string;
		"recipientCountry"?: string;
		"recipientType"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationSocialExpressionEventTopicMessageDetails { 
		"messageId"?: string;
		"messageTime"?: string;
		"messageStatus"?: string;
		"messageSegmentCount"?: number;
		"media"?: Array<Models.QueueConversationSocialExpressionEventTopicMessageMedia>;
		"stickers"?: Array<Models.QueueConversationSocialExpressionEventTopicMessageSticker>;
	}
	
	export interface QueueConversationSocialExpressionEventTopicMessageMedia { 
		"url"?: string;
		"mediaType"?: string;
		"contentLengthBytes"?: number;
		"name"?: string;
		"id"?: string;
	}
	
	export interface QueueConversationSocialExpressionEventTopicMessageSticker { 
		"url"?: string;
		"id"?: string;
	}
	
	export interface QueueConversationSocialExpressionEventTopicParticipant { 
		"id"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"userId"?: string;
		"externalContactId"?: string;
		"externalOrganizationId"?: string;
		"name"?: string;
		"queueId"?: string;
		"groupId"?: string;
		"teamId"?: string;
		"purpose"?: string;
		"consultParticipantId"?: string;
		"address"?: string;
		"wrapupRequired"?: boolean;
		"wrapupExpected"?: boolean;
		"wrapupPrompt"?: string;
		"wrapupTimeoutMs"?: number;
		"wrapup"?: Models.QueueConversationSocialExpressionEventTopicWrapup;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"conversationRoutingData"?: Models.QueueConversationSocialExpressionEventTopicConversationRoutingData;
		"alertingTimeoutMs"?: number;
		"monitoredParticipantId"?: string;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"attributes"?: { [key: string]: string; };
		"calls"?: Array<Models.QueueConversationSocialExpressionEventTopicCall>;
		"callbacks"?: Array<Models.QueueConversationSocialExpressionEventTopicCallback>;
		"chats"?: Array<Models.QueueConversationSocialExpressionEventTopicChat>;
		"cobrowsesessions"?: Array<Models.QueueConversationSocialExpressionEventTopicCobrowse>;
		"emails"?: Array<Models.QueueConversationSocialExpressionEventTopicEmail>;
		"messages"?: Array<Models.QueueConversationSocialExpressionEventTopicMessage>;
		"screenshares"?: Array<Models.QueueConversationSocialExpressionEventTopicScreenshare>;
		"socialExpressions"?: Array<Models.QueueConversationSocialExpressionEventTopicSocialExpression>;
		"videos"?: Array<Models.QueueConversationSocialExpressionEventTopicVideo>;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationSocialExpressionEventTopicPhoneNumberColumn { 
		"columnName"?: string;
		"type"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationSocialExpressionEventTopicScoredAgent { 
		"agent"?: Models.QueueConversationSocialExpressionEventTopicUriReference;
		"score"?: number;
	}
	
	export interface QueueConversationSocialExpressionEventTopicScreenshare { 
		"state"?: string;
		"self"?: Models.QueueConversationSocialExpressionEventTopicAddress;
		"id"?: string;
		"context"?: string;
		"sharing"?: boolean;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"disconnectType"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationSocialExpressionEventTopicSocialExpression { 
		"state"?: string;
		"id"?: string;
		"socialMediaId"?: string;
		"socialMediaHub"?: string;
		"socialUserName"?: string;
		"previewText"?: string;
		"recordingId"?: string;
		"held"?: boolean;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationSocialExpressionEventTopicUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface QueueConversationSocialExpressionEventTopicVideo { 
		"state"?: string;
		"self"?: Models.QueueConversationSocialExpressionEventTopicAddress;
		"id"?: string;
		"context"?: string;
		"audioMuted"?: boolean;
		"videoMuted"?: boolean;
		"sharingScreen"?: boolean;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"disconnectType"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"msids"?: Array<string>;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationSocialExpressionEventTopicVoicemail { 
		"id"?: string;
		"uploadStatus"?: string;
	}
	
	export interface QueueConversationSocialExpressionEventTopicWrapup { 
		"code"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationVideoEventTopicAddress { 
		"name"?: string;
		"nameRaw"?: string;
		"addressNormalized"?: string;
		"addressRaw"?: string;
		"addressDisplayable"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationVideoEventTopicAttachment { 
		"attachmentId"?: string;
		"name"?: string;
		"contentUri"?: string;
		"contentType"?: string;
		"contentLength"?: number;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationVideoEventTopicCall { 
		"id"?: string;
		"state"?: string;
		"recording"?: boolean;
		"recordingState"?: string;
		"muted"?: boolean;
		"confined"?: boolean;
		"held"?: boolean;
		"errorInfo"?: Models.QueueConversationVideoEventTopicErrorDetails;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"direction"?: string;
		"documentId"?: string;
		"self"?: Models.QueueConversationVideoEventTopicAddress;
		"other"?: Models.QueueConversationVideoEventTopicAddress;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"disconnectReasons"?: Array<Models.QueueConversationVideoEventTopicDisconnectReason>;
		"faxStatus"?: Models.QueueConversationVideoEventTopicFaxStatus;
		"uuiData"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationVideoEventTopicCallback { 
		"state"?: string;
		"id"?: string;
		"direction"?: string;
		"held"?: boolean;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"dialerPreview"?: Models.QueueConversationVideoEventTopicDialerPreview;
		"voicemail"?: Models.QueueConversationVideoEventTopicVoicemail;
		"callbackNumbers"?: Array<string>;
		"callbackUserName"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"skipEnabled"?: boolean;
		"provider"?: string;
		"timeoutSeconds"?: number;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"callbackScheduledTime"?: string;
		"automatedCallbackConfigId"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationVideoEventTopicChat { 
		"state"?: string;
		"id"?: string;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"roomId"?: string;
		"avatarImageUrl"?: string;
		"held"?: boolean;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"journeyContext"?: Models.QueueConversationVideoEventTopicJourneyContext;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationVideoEventTopicCobrowse { 
		"state"?: string;
		"disconnectType"?: string;
		"id"?: string;
		"self"?: Models.QueueConversationVideoEventTopicAddress;
		"roomId"?: string;
		"cobrowseSessionId"?: string;
		"cobrowseRole"?: string;
		"controlling"?: Array<string>;
		"viewerUrl"?: string;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"providerEventTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationVideoEventTopicConversation { 
		"id"?: string;
		"maxParticipants"?: number;
		"participants"?: Array<Models.QueueConversationVideoEventTopicParticipant>;
		"recordingState"?: string;
		"address"?: string;
	}
	
	export interface QueueConversationVideoEventTopicConversationRoutingData { 
		"queue"?: Models.QueueConversationVideoEventTopicUriReference;
		"language"?: Models.QueueConversationVideoEventTopicUriReference;
		"priority"?: number;
		"skills"?: Array<Models.QueueConversationVideoEventTopicUriReference>;
		"scoredAgents"?: Array<Models.QueueConversationVideoEventTopicScoredAgent>;
	}
	
	export interface QueueConversationVideoEventTopicDialerPreview { 
		"id"?: string;
		"contactId"?: string;
		"contactListId"?: string;
		"campaignId"?: string;
		"phoneNumberColumns"?: Array<Models.QueueConversationVideoEventTopicPhoneNumberColumn>;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationVideoEventTopicDisconnectReason { 
		"type"?: string;
		"code"?: number;
		"phrase"?: string;
	}
	
	export interface QueueConversationVideoEventTopicEmail { 
		"id"?: string;
		"state"?: string;
		"held"?: boolean;
		"autoGenerated"?: boolean;
		"subject"?: string;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"messagesSent"?: number;
		"errorInfo"?: Models.QueueConversationVideoEventTopicErrorDetails;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"messageId"?: string;
		"direction"?: string;
		"draftAttachments"?: Array<Models.QueueConversationVideoEventTopicAttachment>;
		"spam"?: boolean;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationVideoEventTopicErrorDetails { 
		"status"?: number;
		"code"?: string;
		"message"?: string;
		"messageWithParams"?: string;
		"messageParams"?: { [key: string]: string; };
		"contextId"?: string;
		"uri"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationVideoEventTopicFaxStatus { 
		"direction"?: string;
		"expectedPages"?: number;
		"activePage"?: number;
		"linesTransmitted"?: number;
		"bytesTransmitted"?: number;
		"baudRate"?: number;
		"pageErrors"?: number;
		"lineErrors"?: number;
	}
	
	export interface QueueConversationVideoEventTopicJourneyAction { 
		"id"?: string;
		"actionMap"?: Models.QueueConversationVideoEventTopicJourneyActionMap;
	}
	
	export interface QueueConversationVideoEventTopicJourneyActionMap { 
		"id"?: string;
		"version"?: number;
	}
	
	export interface QueueConversationVideoEventTopicJourneyContext { 
		"customer"?: Models.QueueConversationVideoEventTopicJourneyCustomer;
		"customerSession"?: Models.QueueConversationVideoEventTopicJourneyCustomerSession;
		"triggeringAction"?: Models.QueueConversationVideoEventTopicJourneyAction;
	}
	
	export interface QueueConversationVideoEventTopicJourneyCustomer { 
		"id"?: string;
		"idType"?: string;
	}
	
	export interface QueueConversationVideoEventTopicJourneyCustomerSession { 
		"id"?: string;
		"type"?: string;
	}
	
	export interface QueueConversationVideoEventTopicMessage { 
		"id"?: string;
		"state"?: string;
		"held"?: boolean;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"toAddress"?: Models.QueueConversationVideoEventTopicAddress;
		"fromAddress"?: Models.QueueConversationVideoEventTopicAddress;
		"messages"?: Array<Models.QueueConversationVideoEventTopicMessageDetails>;
		"messagesTranscriptUri"?: string;
		"type"?: string;
		"recipientCountry"?: string;
		"recipientType"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationVideoEventTopicMessageDetails { 
		"messageId"?: string;
		"messageTime"?: string;
		"messageStatus"?: string;
		"messageSegmentCount"?: number;
		"media"?: Array<Models.QueueConversationVideoEventTopicMessageMedia>;
		"stickers"?: Array<Models.QueueConversationVideoEventTopicMessageSticker>;
	}
	
	export interface QueueConversationVideoEventTopicMessageMedia { 
		"url"?: string;
		"mediaType"?: string;
		"contentLengthBytes"?: number;
		"name"?: string;
		"id"?: string;
	}
	
	export interface QueueConversationVideoEventTopicMessageSticker { 
		"url"?: string;
		"id"?: string;
	}
	
	export interface QueueConversationVideoEventTopicParticipant { 
		"id"?: string;
		"connectedTime"?: string;
		"endTime"?: string;
		"userId"?: string;
		"externalContactId"?: string;
		"externalOrganizationId"?: string;
		"name"?: string;
		"queueId"?: string;
		"groupId"?: string;
		"teamId"?: string;
		"purpose"?: string;
		"consultParticipantId"?: string;
		"address"?: string;
		"wrapupRequired"?: boolean;
		"wrapupExpected"?: boolean;
		"wrapupPrompt"?: string;
		"wrapupTimeoutMs"?: number;
		"wrapup"?: Models.QueueConversationVideoEventTopicWrapup;
		"startAcwTime"?: string;
		"endAcwTime"?: string;
		"conversationRoutingData"?: Models.QueueConversationVideoEventTopicConversationRoutingData;
		"alertingTimeoutMs"?: number;
		"monitoredParticipantId"?: string;
		"screenRecordingState"?: string;
		"flaggedReason"?: string;
		"attributes"?: { [key: string]: string; };
		"calls"?: Array<Models.QueueConversationVideoEventTopicCall>;
		"callbacks"?: Array<Models.QueueConversationVideoEventTopicCallback>;
		"chats"?: Array<Models.QueueConversationVideoEventTopicChat>;
		"cobrowsesessions"?: Array<Models.QueueConversationVideoEventTopicCobrowse>;
		"emails"?: Array<Models.QueueConversationVideoEventTopicEmail>;
		"messages"?: Array<Models.QueueConversationVideoEventTopicMessage>;
		"screenshares"?: Array<Models.QueueConversationVideoEventTopicScreenshare>;
		"socialExpressions"?: Array<Models.QueueConversationVideoEventTopicSocialExpression>;
		"videos"?: Array<Models.QueueConversationVideoEventTopicVideo>;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationVideoEventTopicPhoneNumberColumn { 
		"columnName"?: string;
		"type"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationVideoEventTopicScoredAgent { 
		"agent"?: Models.QueueConversationVideoEventTopicUriReference;
		"score"?: number;
	}
	
	export interface QueueConversationVideoEventTopicScreenshare { 
		"state"?: string;
		"self"?: Models.QueueConversationVideoEventTopicAddress;
		"id"?: string;
		"context"?: string;
		"sharing"?: boolean;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"disconnectType"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationVideoEventTopicSocialExpression { 
		"state"?: string;
		"id"?: string;
		"socialMediaId"?: string;
		"socialMediaHub"?: string;
		"socialUserName"?: string;
		"previewText"?: string;
		"recordingId"?: string;
		"held"?: boolean;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationVideoEventTopicUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface QueueConversationVideoEventTopicVideo { 
		"state"?: string;
		"self"?: Models.QueueConversationVideoEventTopicAddress;
		"id"?: string;
		"context"?: string;
		"audioMuted"?: boolean;
		"videoMuted"?: boolean;
		"sharingScreen"?: boolean;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
		"disconnectType"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"msids"?: Array<string>;
		"additionalProperties"?: object;
	}
	
	export interface QueueConversationVideoEventTopicVoicemail { 
		"id"?: string;
		"uploadStatus"?: string;
	}
	
	export interface QueueConversationVideoEventTopicWrapup { 
		"code"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
		"additionalProperties"?: object;
	}
	
	export interface QueueEmailAddress { 
		"domain"?: Models.DomainEntityRef;
		"route"?: Models.InboundRoute;
	}
	
	export interface QueueEntityListing { 
		"entities"?: Array<Models.Queue>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface QueueMediaAssociation { 
		"id"?: string;
		"queue"?: Models.QueueReference;
		"mediaTypes"?: Array<string>;
		"delete"?: boolean;
	}
	
	export interface QueueMember { 
		"id"?: string;
		"name"?: string;
		"user"?: Models.User;
		"ringNumber"?: number;
		"joined"?: boolean;
		"memberBy"?: string;
		"routingStatus"?: Models.RoutingStatus;
		"selfUri"?: string;
	}
	
	export interface QueueMemberEntityListing { 
		"entities"?: Array<Models.QueueMember>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface QueueMessagingAddresses { 
		"smsAddress"?: Models.DomainEntityRef;
	}
	
	export interface QueueObservationDataContainer { 
		"group"?: { [key: string]: string; };
		"data"?: Array<Models.ObservationMetricData>;
	}
	
	export interface QueueObservationQuery { 
		"filter": Models.QueueObservationQueryFilter;
		"metrics"?: Array<string>;
		"detailMetrics"?: Array<string>;
	}
	
	export interface QueueObservationQueryClause { 
		"type": string;
		"predicates": Array<Models.QueueObservationQueryPredicate>;
	}
	
	export interface QueueObservationQueryFilter { 
		"type": string;
		"clauses"?: Array<Models.QueueObservationQueryClause>;
		"predicates"?: Array<Models.QueueObservationQueryPredicate>;
	}
	
	export interface QueueObservationQueryPredicate { 
		"type"?: string;
		"dimension"?: string;
		"operator"?: string;
		"value"?: string;
		"range"?: Models.NumericRange;
	}
	
	export interface QueueObservationQueryResponse { 
		"systemToOrganizationMappings"?: { [key: string]: Array<string>; };
		"results"?: Array<Models.QueueObservationDataContainer>;
	}
	
	export interface QueueReference { 
		"id"?: string;
		"selfUri"?: string;
	}
	
	export interface QueueRequest { 
		"id"?: string;
		"name": string;
		"division"?: Models.WritableDivision;
		"description"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"memberCount"?: number;
		"mediaSettings"?: { [key: string]: Models.MediaSetting; };
		"bullseye"?: Models.Bullseye;
		"acwSettings"?: Models.AcwSettings;
		"skillEvaluationMethod"?: string;
		"queueFlow"?: Models.DomainEntityRef;
		"whisperPrompt"?: Models.DomainEntityRef;
		"autoAnswerOnly"?: boolean;
		"callingPartyName"?: string;
		"callingPartyNumber"?: string;
		"defaultScripts"?: { [key: string]: Models.Script; };
		"outboundMessagingAddresses"?: Models.QueueMessagingAddresses;
		"outboundEmailAddress"?: Models.QueueEmailAddress;
		"selfUri"?: string;
	}
	
	export interface QueueUserEventTopicQueueMember { 
		"id"?: string;
		"user"?: Models.QueueUserEventTopicUserReference;
		"queueId"?: string;
		"joined"?: boolean;
		"additionalProperties"?: object;
	}
	
	export interface QueueUserEventTopicUserReference { 
		"id"?: string;
	}
	
	export interface QueueUtilizationDiagnostic { 
		"queue"?: Models.DomainEntityRef;
		"usersInQueue"?: number;
		"activeUsersInQueue"?: number;
		"usersOnQueue"?: number;
		"usersNotUtilized"?: number;
		"usersOnQueueWithStation"?: number;
		"usersOnACampaignCall"?: number;
		"usersOnDifferentEdgeGroup"?: number;
		"usersOnANonCampaignCall"?: number;
	}
	
	export interface Reaction { 
		"data"?: string;
		"name"?: string;
		"reactionType": string;
	}
	
	export interface RecallEntry { 
		"nbrAttempts"?: number;
		"minutesBetweenAttempts"?: number;
	}
	
	export interface Recipient { 
		"id"?: string;
		"name"?: string;
		"flow"?: Models.Flow;
		"dateCreated"?: string;
		"dateModified"?: string;
		"createdBy"?: Models.User;
		"modifiedBy"?: Models.User;
		"messengerType"?: string;
		"selfUri"?: string;
	}
	
	export interface RecipientListing { 
		"entities"?: Array<Models.Recipient>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface Record { 
		"name": string;
		"type": string;
		"value": string;
	}
	
	export interface Recording { 
		"id"?: string;
		"name"?: string;
		"conversationId"?: string;
		"path"?: string;
		"startTime"?: string;
		"endTime"?: string;
		"media"?: string;
		"annotations"?: Array<Models.Annotation>;
		"transcript"?: Array<Models.ChatMessage>;
		"emailTranscript"?: Array<Models.RecordingEmailMessage>;
		"messagingTranscript"?: Array<Models.RecordingMessagingMessage>;
		"fileState"?: string;
		"restoreExpirationTime"?: string;
		"mediaUris"?: { [key: string]: Models.MediaResult; };
		"estimatedTranscodeTimeMs"?: number;
		"actualTranscodeTimeMs"?: number;
		"archiveDate"?: string;
		"archiveMedium"?: string;
		"deleteDate"?: string;
		"exportDate"?: string;
		"exportedDate"?: string;
		"outputDurationMs"?: number;
		"outputSizeInBytes"?: number;
		"maxAllowedRestorationsForOrg"?: number;
		"remainingRestorationsAllowedForOrg"?: number;
		"sessionId"?: string;
		"users"?: Array<Models.User>;
		"selfUri"?: string;
	}
	
	export interface RecordingEmailMessage { 
		"htmlBody"?: string;
		"textBody"?: string;
		"id"?: string;
		"to"?: Array<Models.EmailAddress>;
		"cc"?: Array<Models.EmailAddress>;
		"bcc"?: Array<Models.EmailAddress>;
		"from"?: Models.EmailAddress;
		"subject"?: string;
		"attachments"?: Array<Models.EmailAttachment>;
		"time"?: string;
	}
	
	export interface RecordingJob { 
		"id"?: string;
		"state": string;
		"recordingJobsQuery"?: Models.RecordingJobsQuery;
		"dateCreated"?: string;
		"totalConversations"?: number;
		"totalRecordings"?: number;
		"totalProcessedRecordings"?: number;
		"percentProgress"?: number;
		"errorMessage"?: string;
		"selfUri"?: string;
		"user"?: Models.AddressableEntityRef;
	}
	
	export interface RecordingJobEntityListing { 
		"entities"?: Array<Models.RecordingJob>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface RecordingJobsQuery { 
		"action": string;
		"actionDate": string;
		"integrationId"?: string;
		"includeScreenRecordings"?: boolean;
		"conversationQuery": Models.AsyncConversationQuery;
	}
	
	export interface RecordingMessagingMessage { 
		"from"?: string;
		"fromUser"?: Models.User;
		"fromExternalContact"?: Models.ExternalContact;
		"to"?: string;
		"timestamp"?: string;
		"id"?: string;
		"messageText"?: string;
		"messageMediaAttachments"?: Array<Models.MessageMediaAttachment>;
		"messageStickerAttachments"?: Array<Models.MessageStickerAttachment>;
	}
	
	export interface RecordingMetadata { 
		"id"?: string;
		"name"?: string;
		"conversationId"?: string;
		"path"?: string;
		"startTime"?: string;
		"endTime"?: string;
		"media"?: string;
		"annotations"?: Array<Models.Annotation>;
		"fileState"?: string;
		"restoreExpirationTime"?: string;
		"archiveDate"?: string;
		"archiveMedium"?: string;
		"deleteDate"?: string;
		"exportDate"?: string;
		"exportedDate"?: string;
		"maxAllowedRestorationsForOrg"?: number;
		"remainingRestorationsAllowedForOrg"?: number;
		"sessionId"?: string;
		"selfUri"?: string;
	}
	
	export interface RecordingSettings { 
		"maxSimultaneousStreams"?: number;
	}
	
	export interface RegionTimeZone { 
		"id"?: string;
		"name"?: string;
		"offset"?: number;
		"selfUri"?: string;
	}
	
	export interface Relationship { 
		"id"?: string;
		"name"?: string;
		"user": Models.User;
		"externalOrganization": Models.ExternalOrganization;
		"relationship": string;
		"externalDataSources"?: Array<Models.ExternalDataSource>;
		"selfUri"?: string;
	}
	
	export interface RelationshipListing { 
		"entities"?: Array<Models.Relationship>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ReplaceRequest { 
		"changeNumber"?: number;
		"name"?: string;
		"authToken"?: string;
	}
	
	export interface ReplaceResponse { 
		"id"?: string;
		"name"?: string;
		"changeNumber"?: number;
		"uploadStatus"?: Models.DomainEntityRef;
		"uploadDestinationUri"?: string;
		"uploadMethod"?: string;
	}
	
	export interface ReplacementTerm { 
		"type"?: string;
		"existingValue"?: string;
		"updatedValue"?: string;
	}
	
	export interface ReportMetaData { 
		"id"?: string;
		"name"?: string;
		"title"?: string;
		"description"?: string;
		"keywords"?: Array<string>;
		"availableLocales"?: Array<string>;
		"parameters"?: Array<Models.Parameter>;
		"exampleUrl"?: string;
		"selfUri"?: string;
	}
	
	export interface ReportMetaDataEntityListing { 
		"entities"?: Array<Models.ReportMetaData>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ReportRunEntry { 
		"id"?: string;
		"name"?: string;
		"reportId"?: string;
		"runTime"?: string;
		"runStatus"?: string;
		"errorMessage"?: string;
		"runDurationMsec"?: number;
		"reportUrl"?: string;
		"reportFormat"?: string;
		"scheduleUri"?: string;
		"selfUri"?: string;
	}
	
	export interface ReportRunEntryEntityDomainListing { 
		"entities"?: Array<Models.ReportRunEntry>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ReportSchedule { 
		"id"?: string;
		"name"?: string;
		"quartzCronExpression": string;
		"nextFireTime"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"description"?: string;
		"timeZone"?: string;
		"timePeriod"?: string;
		"interval": string;
		"reportFormat"?: string;
		"locale"?: string;
		"enabled"?: boolean;
		"reportId": string;
		"parameters"?: { [key: string]: object; };
		"lastRun"?: Models.ReportRunEntry;
		"selfUri"?: string;
	}
	
	export interface ReportScheduleEntityListing { 
		"entities"?: Array<Models.ReportSchedule>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ReportingDataExportTopicDataExportNotification { 
		"id"?: string;
		"name"?: string;
		"status"?: string;
		"exportFormat"?: string;
		"downloadUrl"?: string;
		"viewType"?: string;
		"exportErrorMessagesType"?: string;
		"read"?: boolean;
		"createdDateTime"?: string;
		"modifiedDateTime"?: string;
		"percentageComplete"?: number;
	}
	
	export interface ReportingExportJobListing { 
		"entities"?: Array<Models.ReportingExportJobResponse>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ReportingExportJobRequest { 
		"name": string;
		"timeZone": string;
		"exportFormat": string;
		"interval": string;
		"period": string;
		"viewType": string;
		"filter": Models.ViewFilter;
		"read"?: boolean;
		"locale": string;
		"hasFormatDurations"?: boolean;
		"hasSplitFilters"?: boolean;
		"selectedColumns"?: Array<Models.SelectedColumns>;
		"hasCustomParticipantAttributes"?: boolean;
	}
	
	export interface ReportingExportJobResponse { 
		"id"?: string;
		"name"?: string;
		"status": string;
		"timeZone": string;
		"exportFormat": string;
		"interval": string;
		"downloadUrl"?: string;
		"viewType": string;
		"exportErrorMessagesType"?: string;
		"period": string;
		"filter": Models.ViewFilter;
		"read": boolean;
		"createdDateTime": string;
		"modifiedDateTime": string;
		"locale": string;
		"percentageComplete": number;
		"hasFormatDurations"?: boolean;
		"hasSplitFilters"?: boolean;
		"selectedColumns"?: Array<Models.SelectedColumns>;
		"hasCustomParticipantAttributes"?: boolean;
		"selfUri"?: string;
	}
	
	export interface ReportingExportMetadataJobListing { 
		"entities"?: Array<Models.ReportingExportMetadataJobResponse>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ReportingExportMetadataJobResponse { 
		"id"?: string;
		"name"?: string;
		"viewType"?: string;
		"dateLimitations"?: string;
		"requiredFilters"?: Array<string>;
		"supportedFilters"?: Array<string>;
		"requiredColumnIds"?: Array<string>;
		"dependentColumnIds"?: { [key: string]: Array<string>; };
		"availableColumnIds"?: Array<string>;
		"selfUri"?: string;
	}
	
	export interface RequestConfig { 
		"requestUrlTemplate"?: string;
		"requestTemplate"?: string;
		"requestTemplateUri"?: string;
		"requestType"?: string;
		"headers"?: { [key: string]: string; };
	}
	
	export interface RescheduleRequest { 
		"startDate": string;
		"endDate": string;
		"agentIds"?: Array<string>;
		"activityCodeIds"?: Array<string>;
		"doNotChangeWeeklyPaidTime": boolean;
		"doNotChangeDailyPaidTime": boolean;
		"doNotChangeShiftStartTimes": boolean;
		"doNotChangeManuallyEditedShifts": boolean;
	}
	
	export interface RescheduleResult { 
		"downloadUrl"?: string;
	}
	
	export interface ReschedulingOptionsResponse { 
		"startDate": string;
		"endDate": string;
		"agentIds"?: Array<string>;
		"activityCodeIds"?: Array<string>;
		"doNotChangeWeeklyPaidTime": boolean;
		"doNotChangeDailyPaidTime": boolean;
		"doNotChangeShiftStartTimes": boolean;
		"doNotChangeManuallyEditedShifts": boolean;
		"existingScheduleId"?: string;
		"existingScheduleVersion"?: number;
	}
	
	export interface ResourceConditionNode { 
		"variableName"?: string;
		"conjunction"?: string;
		"operator"?: string;
		"operands"?: Array<Models.ResourceConditionValue>;
		"terms"?: Array<Models.ResourceConditionNode>;
	}
	
	export interface ResourceConditionValue { 
		"type"?: string;
		"value"?: string;
	}
	
	export interface ResourcePermissionPolicy { 
		"id"?: string;
		"domain"?: string;
		"entityName"?: string;
		"policyName"?: string;
		"policyDescription"?: string;
		"actionSetKey"?: string;
		"allowConditions"?: boolean;
		"resourceConditionNode"?: Models.ResourceConditionNode;
		"namedResources"?: Array<string>;
		"resourceCondition"?: string;
		"actionSet"?: Array<string>;
	}
	
	export interface Response { 
		"id"?: string;
		"name"?: string;
		"version"?: number;
		"libraries": Array<Models.DomainEntityRef>;
		"texts": Array<Models.ResponseText>;
		"createdBy"?: Models.User;
		"dateCreated"?: string;
		"interactionType"?: string;
		"substitutions"?: Array<Models.ResponseSubstitution>;
		"substitutionsSchema"?: Models.JsonSchemaDocument;
		"responseType"?: string;
		"messagingTemplate"?: Models.MessagingTemplate;
		"selfUri"?: string;
	}
	
	export interface ResponseConfig { 
		"translationMap"?: { [key: string]: string; };
		"translationMapDefaults"?: { [key: string]: string; };
		"successTemplate"?: string;
		"successTemplateUri"?: string;
	}
	
	export interface ResponseEntityList { 
		"entities"?: Array<Models.Response>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ResponseEntityListing { 
		"entities"?: Array<Models.Response>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ResponseFilter { 
		"name": string;
		"operator": string;
		"values": Array<string>;
	}
	
	export interface ResponseQueryRequest { 
		"queryPhrase"?: string;
		"pageSize"?: number;
		"filters"?: Array<Models.ResponseFilter>;
	}
	
	export interface ResponseQueryResults { 
		"results": Models.ResponseEntityList;
	}
	
	export interface ResponseSet { 
		"id"?: string;
		"name": string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"responses": { [key: string]: Models.Reaction; };
		"selfUri"?: string;
	}
	
	export interface ResponseSetEntityListing { 
		"entities"?: Array<Models.ResponseSet>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ResponseSubstitution { 
		"id": string;
		"description"?: string;
		"defaultValue"?: string;
	}
	
	export interface ResponseText { 
		"content": string;
		"contentType"?: string;
	}
	
	export interface RestErrorDetail { 
		"error": string;
		"details"?: string;
	}
	
	export interface RetentionDuration { 
		"archiveRetention"?: Models.ArchiveRetention;
		"deleteRetention"?: Models.DeleteRetention;
	}
	
	export interface ReverseWhitepagesLookupResult { 
		"contacts"?: Array<Models.ExternalContact>;
		"externalOrganizations"?: Array<Models.ExternalOrganization>;
	}
	
	export interface Ring { 
		"expansionCriteria"?: Array<Models.ExpansionCriterium>;
		"actions"?: Models.Actions;
	}
	
	export interface RoleDivision { 
		"roleId": string;
		"divisionId": string;
	}
	
	export interface RoleDivisionGrants { 
		"grants": Array<Models.RoleDivisionPair>;
	}
	
	export interface RoleDivisionPair { 
		"roleId": string;
		"divisionId": string;
	}
	
	export interface RouteGroup { 
		"attributes": Models.RouteGroupAttributes;
		"offeredPerInterval": Array<number>;
		"averageTalkTimeSecondsPerInterval": Array<number>;
		"averageAfterCallWorkSecondsPerInterval": Array<number>;
		"completedPerInterval"?: Array<number>;
		"abandonedPerInterval"?: Array<number>;
	}
	
	export interface RouteGroupAttributes { 
		"queue": Models.QueueReference;
		"mediaType": string;
		"language"?: Models.LanguageReference;
		"skills"?: Array<Models.RoutingSkillReference>;
	}
	
	export interface RouteGroupList { 
		"startDate"?: string;
		"routeGroups": Array<Models.RouteGroup>;
	}
	
	export interface RoutingData { 
		"queueId": string;
		"languageId"?: string;
		"priority"?: number;
		"skillIds"?: Array<string>;
		"preferredAgentIds"?: Array<string>;
	}
	
	export interface RoutingRule { 
		"operator"?: string;
		"threshold"?: number;
		"waitSeconds"?: number;
	}
	
	export interface RoutingSettings { 
		"resetAgentScoreOnPresenceChange"?: boolean;
	}
	
	export interface RoutingSkill { 
		"id"?: string;
		"name": string;
		"dateModified"?: string;
		"state"?: string;
		"version"?: string;
		"selfUri"?: string;
	}
	
	export interface RoutingSkillReference { 
		"id"?: string;
		"selfUri"?: string;
	}
	
	export interface RoutingStatus { 
		"userId"?: string;
		"status"?: string;
		"startTime"?: string;
	}
	
	export interface RoutingStatusDetailQueryClause { 
		"type": string;
		"predicates": Array<Models.RoutingStatusDetailQueryPredicate>;
	}
	
	export interface RoutingStatusDetailQueryFilter { 
		"type": string;
		"clauses"?: Array<Models.RoutingStatusDetailQueryClause>;
		"predicates"?: Array<Models.RoutingStatusDetailQueryPredicate>;
	}
	
	export interface RoutingStatusDetailQueryPredicate { 
		"type"?: string;
		"dimension"?: string;
		"operator"?: string;
		"value"?: string;
		"range"?: Models.NumericRange;
	}
	
	export interface RuleSet { 
		"id"?: string;
		"name": string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"contactList"?: Models.DomainEntityRef;
		"queue"?: Models.DomainEntityRef;
		"rules": Array<Models.DialerRule>;
		"selfUri"?: string;
	}
	
	export interface RuleSetDiagnostic { 
		"ruleSet"?: Models.DomainEntityRef;
		"warnings"?: Array<string>;
	}
	
	export interface RuleSetEntityListing { 
		"entities"?: Array<Models.RuleSet>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface RunNowResponse { 
		"id"?: string;
		"name"?: string;
		"selfUri"?: string;
	}
	
	export interface SIPSearchPublicRequest { 
		"id"?: string;
		"name"?: string;
		"callId"?: string;
		"toUser"?: string;
		"fromUser"?: string;
		"conversationId"?: string;
		"participantId"?: string;
		"dateStart": string;
		"dateEnd": string;
		"selfUri"?: string;
	}
	
	export interface SMSAvailablePhoneNumberEntityListing { 
		"entities"?: Array<Models.SmsAvailablePhoneNumber>;
	}
	
	export interface Salesforce { 
		"id"?: string;
		"name"?: string;
		"certificate"?: string;
		"ssoTargetURI"?: string;
		"issuerURI"?: string;
		"disabled"?: boolean;
		"selfUri"?: string;
	}
	
	export interface Schedule { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"start": string;
		"end": string;
		"rrule": string;
		"selfUri"?: string;
	}
	
	export interface ScheduleEntityListing { 
		"entities"?: Array<Models.Schedule>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ScheduleGenerationWarning { 
		"userId"?: string;
		"userNotLicensed"?: boolean;
		"unableToMeetMaxDays"?: boolean;
		"unableToScheduleRequiredDays"?: Array<string>;
		"unableToMeetMinPaidForTheWeek"?: boolean;
		"unableToMeetMaxPaidForTheWeek"?: boolean;
		"noNeedDays"?: Array<string>;
		"shiftsTooCloseTogether"?: boolean;
	}
	
	export interface ScheduleGroup { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"timeZone"?: string;
		"openSchedules"?: Array<Models.DomainEntityRef>;
		"closedSchedules"?: Array<Models.DomainEntityRef>;
		"holidaySchedules"?: Array<Models.DomainEntityRef>;
		"selfUri"?: string;
	}
	
	export interface ScheduleGroupEntityListing { 
		"entities"?: Array<Models.ScheduleGroup>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ScheduleInterval { 
		"start": string;
		"end": string;
	}
	
	export interface SchedulingProcessingError { 
		"internalErrorCode"?: string;
		"description"?: string;
	}
	
	export interface SchedulingRunListResponse { 
		"entities"?: Array<Models.SchedulingRunResponse>;
	}
	
	export interface SchedulingRunResponse { 
		"runId"?: string;
		"schedulerRunId"?: string;
		"intradayRescheduling"?: boolean;
		"state"?: string;
		"percentComplete"?: number;
		"targetWeek"?: string;
		"scheduleId"?: string;
		"scheduleDescription"?: string;
		"schedulingStartTime"?: string;
		"schedulingStartedBy"?: Models.UserReference;
		"schedulingCanceledBy"?: Models.UserReference;
		"schedulingCompletedTime"?: string;
		"reschedulingOptions"?: Models.ReschedulingOptionsResponse;
		"reschedulingResultExpiration"?: string;
		"applied"?: boolean;
		"unscheduledAgents"?: Array<Models.UnscheduledAgentWarning>;
	}
	
	export interface SchedulingSettingsRequest { 
		"maxOccupancyPercentForDeferredWork"?: number;
		"defaultShrinkagePercent"?: number;
		"shrinkageOverrides"?: Models.ShrinkageOverrides;
	}
	
	export interface SchedulingSettingsResponse { 
		"maxOccupancyPercentForDeferredWork"?: number;
		"defaultShrinkagePercent"?: number;
		"shrinkageOverrides"?: Models.ShrinkageOverrides;
	}
	
	export interface SchedulingStatusResponse { 
		"id"?: string;
		"status"?: string;
		"errorDetails"?: Array<Models.SchedulingProcessingError>;
		"schedulingResultUri"?: string;
		"percentComplete"?: number;
	}
	
	export interface SchemaCategory { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"selfUri"?: string;
	}
	
	export interface SchemaCategoryEntityListing { 
		"entities"?: Array<Models.SchemaCategory>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface SchemaReferenceEntityListing { 
		"entities"?: Array<Models.DomainSchemaReference>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ScimConfigResourceType { 
		"id"?: string;
		"schemas"?: Array<string>;
		"name"?: string;
		"description"?: string;
		"schema"?: string;
		"schemaExtensions"?: Array<Models.ScimConfigResourceTypeSchemaExtension>;
		"endpoint"?: string;
		"meta"?: Models.ScimMetadata;
	}
	
	export interface ScimConfigResourceTypeSchemaExtension { 
		"schema"?: string;
		"required"?: boolean;
	}
	
	export interface ScimConfigResourceTypesListResponse { 
		"totalResults"?: number;
		"startIndex"?: number;
		"itemsPerPage"?: number;
		"Resources"?: Array<Models.ScimConfigResourceType>;
		"schemas"?: Array<string>;
	}
	
	export interface ScimEmail { 
		"value"?: string;
		"type"?: string;
		"primary"?: boolean;
	}
	
	export interface ScimError { 
		"status"?: string;
		"scimType"?: string;
		"detail"?: string;
		"schemas"?: Array<string>;
	}
	
	export interface ScimGroupListResponse { 
		"totalResults"?: number;
		"startIndex"?: number;
		"itemsPerPage"?: number;
		"Resources"?: Array<Models.ScimV2Group>;
		"schemas"?: Array<string>;
	}
	
	export interface ScimMetadata { 
		"resourceType"?: string;
		"lastModified"?: string;
		"location"?: string;
		"version"?: string;
	}
	
	export interface ScimPhoneNumber { 
		"value"?: string;
		"type"?: string;
		"primary"?: boolean;
	}
	
	export interface ScimServiceProviderConfig { 
		"schemas"?: Array<string>;
		"documentationUri"?: string;
		"patch"?: Models.ScimServiceProviderConfigSimpleFeature;
		"filter"?: Models.ScimServiceProviderConfigFilterFeature;
		"etag"?: Models.ScimServiceProviderConfigSimpleFeature;
		"sort"?: Models.ScimServiceProviderConfigSimpleFeature;
		"bulk"?: Models.ScimServiceProviderConfigBulkFeature;
		"changePassword"?: Models.ScimServiceProviderConfigSimpleFeature;
		"authenticationSchemes"?: Array<Models.ScimServiceProviderConfigAuthenticationScheme>;
		"meta"?: Models.ScimMetadata;
	}
	
	export interface ScimServiceProviderConfigAuthenticationScheme { 
		"name": string;
		"description": string;
		"specUri"?: string;
		"documentationUri"?: string;
		"type": string;
		"primary"?: boolean;
	}
	
	export interface ScimServiceProviderConfigBulkFeature { 
		"supported"?: boolean;
		"maxOperations"?: number;
		"maxPayloadSize"?: number;
	}
	
	export interface ScimServiceProviderConfigFilterFeature { 
		"supported"?: boolean;
		"maxResults"?: number;
	}
	
	export interface ScimServiceProviderConfigSimpleFeature { 
		"supported"?: boolean;
	}
	
	export interface ScimUserExtensions { 
		"routingSkills"?: Array<Models.ScimUserRoutingSkill>;
		"routingLanguages"?: Array<Models.ScimUserRoutingLanguage>;
	}
	
	export interface ScimUserListResponse { 
		"totalResults"?: number;
		"startIndex"?: number;
		"itemsPerPage"?: number;
		"Resources"?: Array<Models.ScimV2User>;
		"schemas"?: Array<string>;
	}
	
	export interface ScimUserRole { 
		"value"?: string;
	}
	
	export interface ScimUserRoutingLanguage { 
		"name": string;
		"proficiency"?: number;
	}
	
	export interface ScimUserRoutingSkill { 
		"name": string;
		"proficiency"?: number;
	}
	
	export interface ScimV2CreateUser { 
		"schemas"?: Array<string>;
		"active"?: boolean;
		"userName": string;
		"displayName": string;
		"password"?: string;
		"title"?: string;
		"phoneNumbers"?: Array<Models.ScimPhoneNumber>;
		"emails"?: Array<Models.ScimEmail>;
		"externalId"?: string;
		"groups"?: Array<Models.ScimV2GroupReference>;
		"roles"?: Array<Models.ScimUserRole>;
		"urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"?: Models.ScimV2EnterpriseUser;
		"urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User"?: Models.ScimUserExtensions;
	}
	
	export interface ScimV2EnterpriseUser { 
		"division"?: string;
		"department"?: string;
		"manager"?: Models.Manager;
	}
	
	export interface ScimV2Group { 
		"id"?: string;
		"schemas"?: Array<string>;
		"displayName": string;
		"externalId"?: string;
		"members"?: Array<Models.ScimV2MemberReference>;
		"meta"?: Models.ScimMetadata;
	}
	
	export interface ScimV2GroupReference { 
		"type"?: string;
		"value"?: string;
		"$ref"?: string;
	}
	
	export interface ScimV2MemberReference { 
		"type"?: string;
		"value"?: string;
		"$ref"?: string;
	}
	
	export interface ScimV2PatchOperation { 
		"op": string;
		"path"?: string;
		"value"?: Models.JsonNode;
	}
	
	export interface ScimV2PatchRequest { 
		"schemas": Array<string>;
		"Operations"?: Array<Models.ScimV2PatchOperation>;
	}
	
	export interface ScimV2SchemaAttribute { 
		"name"?: string;
		"type"?: string;
		"subAttributes"?: Array<Models.ScimV2SchemaAttribute>;
		"multiValued"?: boolean;
		"description"?: string;
		"required"?: boolean;
		"canonicalValues"?: Array<string>;
		"caseExact"?: boolean;
		"mutability"?: string;
		"returned"?: string;
		"uniqueness"?: string;
		"referenceTypes"?: Array<string>;
	}
	
	export interface ScimV2SchemaDefinition { 
		"id"?: string;
		"name"?: string;
		"description"?: string;
		"attributes"?: Array<Models.ScimV2SchemaAttribute>;
		"meta"?: Models.ScimMetadata;
	}
	
	export interface ScimV2SchemaListResponse { 
		"totalResults"?: number;
		"startIndex"?: number;
		"itemsPerPage"?: number;
		"Resources"?: Array<Models.ScimV2SchemaDefinition>;
		"schemas"?: Array<string>;
	}
	
	export interface ScimV2User { 
		"id"?: string;
		"schemas"?: Array<string>;
		"active"?: boolean;
		"userName"?: string;
		"displayName"?: string;
		"password"?: string;
		"title"?: string;
		"phoneNumbers"?: Array<Models.ScimPhoneNumber>;
		"emails"?: Array<Models.ScimEmail>;
		"externalId"?: string;
		"groups"?: Array<Models.ScimV2GroupReference>;
		"roles"?: Array<Models.ScimUserRole>;
		"urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"?: Models.ScimV2EnterpriseUser;
		"urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User"?: Models.ScimUserExtensions;
		"meta"?: Models.ScimMetadata;
	}
	
	export interface ScorableSurvey { 
		"id"?: string;
		"name"?: string;
		"surveyForm"?: Models.SurveyForm;
		"status"?: string;
		"answers"?: Models.SurveyScoringSet;
		"selfUri"?: string;
	}
	
	export interface ScoredAgent { 
		"agent"?: Models.AddressableEntityRef;
		"score"?: number;
	}
	
	export interface ScreenRecordingSession { 
		"id"?: string;
		"name"?: string;
		"user"?: Models.User;
		"communicationId"?: string;
		"conversation"?: Models.Conversation;
		"startTime"?: string;
		"selfUri"?: string;
	}
	
	export interface ScreenRecordingSessionListing { 
		"entities"?: Array<Models.ScreenRecordingSession>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface ScreenRecordingSessionRequest { 
		"state"?: string;
		"archiveDate"?: string;
		"deleteDate"?: string;
	}
	
	export interface Screenshare { 
		"state"?: string;
		"id"?: string;
		"context"?: string;
		"sharing"?: boolean;
		"peerCount"?: number;
		"disconnectType"?: string;
		"startAlertingTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"provider"?: string;
		"peerId"?: string;
		"segments"?: Array<Models.Segment>;
	}
	
	export interface Script { 
		"id"?: string;
		"name"?: string;
		"versionId"?: string;
		"createdDate"?: string;
		"modifiedDate"?: string;
		"publishedDate"?: string;
		"versionDate"?: string;
		"startPageId"?: string;
		"startPageName"?: string;
		"features"?: object;
		"variables"?: object;
		"customActions"?: object;
		"pages"?: Array<Models.Page>;
		"selfUri"?: string;
	}
	
	export interface ScriptEntityListing { 
		"entities"?: Array<Models.Script>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface SearchAggregation { 
		"field"?: string;
		"name"?: string;
		"type"?: string;
		"value"?: string;
		"size"?: number;
		"order"?: Array<string>;
	}
	
	export interface SearchCriteria { 
		"endValue"?: string;
		"values"?: Array<string>;
		"startValue"?: string;
		"fields"?: Array<string>;
		"value"?: string;
		"operator"?: string;
		"group"?: Array<Models.SearchCriteria>;
		"type"?: string;
	}
	
	export interface SearchRequest { 
		"sortOrder"?: string;
		"sortBy"?: string;
		"pageSize"?: number;
		"pageNumber"?: number;
		"sort"?: Array<Models.SearchSort>;
		"returnFields"?: Array<string>;
		"expand"?: Array<string>;
		"types": Array<string>;
		"query"?: Array<Models.SearchCriteria>;
		"aggregations"?: Array<Models.SearchAggregation>;
	}
	
	export interface SearchSort { 
		"sortOrder"?: string;
		"sortBy"?: string;
	}
	
	export interface Section { 
		"fieldList"?: Array<Models.FieldList>;
		"instructionText"?: string;
		"key"?: string;
		"state"?: string;
	}
	
	export interface SecureSession { 
		"id"?: string;
		"flow": Models.DomainEntityRef;
		"userData"?: string;
		"state": string;
		"sourceParticipantId"?: string;
		"disconnect"?: boolean;
		"selfUri"?: string;
	}
	
	export interface SecureSessionEntityListing { 
		"entities"?: Array<Models.SecureSession>;
	}
	
	export interface SecurityProfile { 
		"id"?: string;
		"name"?: string;
		"permissions"?: Array<string>;
		"selfUri"?: string;
	}
	
	export interface SecurityProfileEntityListing { 
		"entities"?: Array<Models.SecurityProfile>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface Segment { 
		"startTime": string;
		"endTime": string;
		"type"?: string;
		"howEnded"?: string;
		"disconnectType"?: string;
	}
	
	export interface SegmentDetailQueryClause { 
		"type": string;
		"predicates": Array<Models.SegmentDetailQueryPredicate>;
	}
	
	export interface SegmentDetailQueryFilter { 
		"type": string;
		"clauses"?: Array<Models.SegmentDetailQueryClause>;
		"predicates"?: Array<Models.SegmentDetailQueryPredicate>;
	}
	
	export interface SegmentDetailQueryPredicate { 
		"type"?: string;
		"dimension"?: string;
		"propertyType"?: string;
		"property"?: string;
		"metric"?: string;
		"operator"?: string;
		"value"?: string;
		"range"?: Models.NumericRange;
	}
	
	export interface SelectedColumns { 
		"columnOrder"?: number;
		"columnName"?: string;
	}
	
	export interface SendAgentlessOutboundMessageRequest { 
		"fromAddress": string;
		"toAddress": string;
		"toAddressMessengerType": string;
		"textBody": string;
	}
	
	export interface SendAgentlessOutboundMessageResponse { 
		"id"?: string;
		"conversationId"?: string;
		"fromAddress"?: string;
		"toAddress"?: string;
		"messengerType"?: string;
		"textBody"?: string;
		"timestamp"?: string;
		"selfUri"?: string;
		"user"?: Models.AddressableEntityRef;
	}
	
	export interface SequenceSchedule { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"intervals": Array<Models.ScheduleInterval>;
		"timeZone": string;
		"sequence": Models.DomainEntityRef;
		"selfUri"?: string;
	}
	
	export interface ServerDate { 
		"currentDate"?: string;
	}
	
	export interface ServiceContext { 
		"name"?: string;
	}
	
	export interface ServiceGoalGroup { 
		"id"?: string;
		"name"?: string;
		"goals"?: Models.ServiceGoalGroupGoals;
		"queueMediaAssociations"?: Array<Models.QueueMediaAssociation>;
		"metadata": Models.WfmVersionedEntityMetadata;
		"selfUri"?: string;
	}
	
	export interface ServiceGoalGroupGoals { 
		"serviceLevel": Models.WfmServiceLevel;
		"averageSpeedOfAnswer": Models.WfmAverageSpeedOfAnswer;
		"abandonRate"?: Models.WfmAbandonRate;
	}
	
	export interface ServiceGoalGroupList { 
		"entities"?: Array<Models.ServiceGoalGroup>;
		"metadata"?: Models.WfmVersionedEntityMetadata;
	}
	
	export interface ServiceLevel { 
		"percentage"?: number;
		"durationMs"?: number;
	}
	
	export interface SetUuiDataRequest { 
		"uuiData"?: string;
	}
	
	export interface SetWrapperDayOfWeek { 
		"values"?: Array<string>;
	}
	
	export interface Share { 
		"id"?: string;
		"name"?: string;
		"sharedEntityType"?: string;
		"sharedEntity"?: Models.DomainEntityRef;
		"memberType"?: string;
		"member"?: Models.DomainEntityRef;
		"sharedBy"?: Models.DomainEntityRef;
		"workspace"?: Models.DomainEntityRef;
		"user"?: Models.User;
		"group"?: Models.Group;
		"selfUri"?: string;
	}
	
	export interface ShareEntityListing { 
		"entities"?: Array<Models.Share>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface SharedEntity { 
		"id"?: string;
	}
	
	export interface SharedResponse { 
		"id"?: string;
		"downloadUri"?: string;
		"viewUri"?: string;
		"document"?: Models.Document;
		"share"?: Models.Share;
	}
	
	export interface ShiftStartVariance { 
		"applicableDays": Array<string>;
		"maxShiftStartVarianceMinutes": number;
	}
	
	export interface ShiftTradeActivityRule { 
		"activityCategory": string;
		"action": string;
		"activityCodeIdReplacement"?: string;
	}
	
	export interface ShiftTradeListResponse { 
		"entities"?: Array<Models.ShiftTradeResponse>;
	}
	
	export interface ShiftTradeMatchesSummaryResponse { 
		"entities"?: Array<Models.WeekShiftTradeMatchesSummaryResponse>;
	}
	
	export interface ShiftTradeNotification { 
		"weekDate"?: string;
		"tradeId"?: string;
		"oneSided"?: boolean;
		"newState"?: string;
		"initiatingUser"?: Models.UserReference;
		"initiatingShiftDate"?: string;
		"receivingUser"?: Models.UserReference;
		"receivingShiftDate"?: string;
	}
	
	export interface ShiftTradeResponse { 
		"id"?: string;
		"weekDate"?: string;
		"schedule"?: Models.WeekScheduleReference;
		"state"?: string;
		"initiatingUser"?: Models.UserReference;
		"initiatingShiftId"?: string;
		"initiatingShiftStart"?: string;
		"initiatingShiftEnd"?: string;
		"receivingUser"?: Models.UserReference;
		"receivingShiftId"?: string;
		"receivingShiftStart"?: string;
		"receivingShiftEnd"?: string;
		"expiration"?: string;
		"oneSided"?: boolean;
		"acceptableIntervals"?: Array<string>;
		"reviewedBy"?: Models.UserReference;
		"reviewedDate"?: string;
		"metadata"?: Models.WfmVersionedEntityMetadata;
	}
	
	export interface ShiftTradeSettings { 
		"enabled"?: boolean;
		"autoReview"?: boolean;
		"allowDirectTrades"?: boolean;
		"minHoursInFuture"?: number;
		"unequalPaid"?: string;
		"oneSided"?: string;
		"weeklyMinPaidViolations"?: string;
		"weeklyMaxPaidViolations"?: string;
		"requiresMatchingQueues"?: boolean;
		"requiresMatchingLanguages"?: boolean;
		"requiresMatchingSkills"?: boolean;
		"requiresMatchingPlanningGroups"?: boolean;
		"activityCategoryRules"?: Array<Models.ShiftTradeActivityRule>;
	}
	
	export interface ShortTermForecast { 
		"id"?: string;
		"selfUri"?: string;
		"weekDate": string;
		"description"?: string;
		"creationMethod"?: string;
		"metadata": Models.WfmVersionedEntityMetadata;
		"sourceData"?: Models.ListWrapperForecastSourceDayPointer;
		"referenceStartDate"?: string;
		"modifications"?: Models.ListWrapperWfmForecastModification;
		"generationResults"?: Models.ForecastGenerationResult;
	}
	
	export interface ShortTermForecastListItemResponse { 
		"id"?: string;
		"selfUri"?: string;
		"weekDate": string;
		"description"?: string;
		"creationMethod"?: string;
		"metadata": Models.WfmVersionedEntityMetadata;
	}
	
	export interface ShortTermForecastListResponse { 
		"entities"?: Array<Models.ShortTermForecastListItemResponse>;
	}
	
	export interface ShortTermForecastReference { 
		"id"?: string;
		"selfUri"?: string;
		"weekDate": string;
		"description"?: string;
	}
	
	export interface ShortTermForecastResponse { 
		"status"?: string;
		"result"?: Models.ShortTermForecast;
		"operationId"?: string;
	}
	
	export interface ShortTermForecastingSettings { 
		"defaultHistoryWeeks"?: number;
	}
	
	export interface ShrinkageOverride { 
		"intervalIndex": number;
		"shrinkagePercent"?: number;
	}
	
	export interface ShrinkageOverrides { 
		"clear"?: boolean;
		"values"?: Array<Models.ShrinkageOverride>;
	}
	
	export interface SignedUrlResponse { 
		"id"?: string;
		"name"?: string;
		"url"?: string;
		"selfUri"?: string;
	}
	
	export interface SipDownloadResponse { 
		"downloadId"?: string;
		"documentId"?: string;
	}
	
	export interface SipSearchResult { 
		"id"?: string;
		"status"?: number;
		"sid"?: string;
		"auth"?: string;
		"message"?: string;
		"data"?: Array<Models.HomerRecord>;
		"count"?: number;
		"selfUri"?: string;
	}
	
	export interface Site { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"primarySites"?: Array<Models.DomainEntityRef>;
		"secondarySites"?: Array<Models.DomainEntityRef>;
		"primaryEdges"?: Array<Models.Edge>;
		"secondaryEdges"?: Array<Models.Edge>;
		"addresses"?: Array<Models.Contact>;
		"edges"?: Array<Models.Edge>;
		"edgeAutoUpdateConfig"?: Models.EdgeAutoUpdateConfig;
		"mediaRegionsUseLatencyBased"?: boolean;
		"location": Models.LocationDefinition;
		"managed"?: boolean;
		"ntpSettings"?: Models.NTPSettings;
		"selfUri"?: string;
	}
	
	export interface SiteEntityListing { 
		"entities"?: Array<Models.Site>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface SkillEntityListing { 
		"entities"?: Array<Models.RoutingSkill>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface SkillsToRemove { 
		"name"?: string;
		"id"?: string;
		"selfUri"?: string;
	}
	
	export interface SmsAddress { 
		"id"?: string;
		"name"?: string;
		"street"?: string;
		"city"?: string;
		"region"?: string;
		"postalCode"?: string;
		"countryCode"?: string;
		"validated"?: boolean;
		"selfUri"?: string;
	}
	
	export interface SmsAddressEntityListing { 
		"entities"?: Array<Models.SmsAddress>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface SmsAddressProvision { 
		"id"?: string;
		"name": string;
		"street": string;
		"city": string;
		"region": string;
		"postalCode": string;
		"countryCode": string;
		"autoCorrectAddress"?: boolean;
		"selfUri"?: string;
	}
	
	export interface SmsAvailablePhoneNumber { 
		"id"?: string;
		"name"?: string;
		"phoneNumber"?: string;
		"countryCode"?: string;
		"region"?: string;
		"city"?: string;
		"capabilities"?: Array<string>;
		"phoneNumberType"?: string;
		"addressRequirement"?: string;
		"selfUri"?: string;
	}
	
	export interface SmsPhoneNumber { 
		"id"?: string;
		"name"?: string;
		"phoneNumber": string;
		"phoneNumberType"?: string;
		"provisionedThroughPureCloud"?: boolean;
		"phoneNumberStatus"?: string;
		"capabilities"?: Array<string>;
		"countryCode"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"createdBy"?: Models.User;
		"modifiedBy"?: Models.User;
		"version": number;
		"purchaseDate"?: string;
		"cancellationDate"?: string;
		"renewalDate"?: string;
		"autoRenewable"?: string;
		"addressId"?: Models.SmsAddress;
		"shortCodeBillingType"?: string;
		"selfUri"?: string;
	}
	
	export interface SmsPhoneNumberEntityListing { 
		"entities"?: Array<Models.SmsPhoneNumber>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface SmsPhoneNumberProvision { 
		"id"?: string;
		"name"?: string;
		"phoneNumber": string;
		"phoneNumberType": string;
		"countryCode": string;
		"addressId"?: string;
		"selfUri"?: string;
	}
	
	export interface SocialExpression { 
		"state"?: string;
		"id"?: string;
		"socialMediaId"?: string;
		"socialMediaHub"?: string;
		"socialUserName"?: string;
		"previewText"?: string;
		"recordingId"?: string;
		"segments"?: Array<Models.Segment>;
		"held"?: boolean;
		"disconnectType"?: string;
		"startHoldTime"?: string;
		"startAlertingTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"provider"?: string;
		"scriptId"?: string;
		"peerId"?: string;
	}
	
	export interface SocialHandle { 
		"type"?: string;
		"value"?: string;
	}
	
	export interface SortItem { 
		"name"?: string;
		"ascending"?: boolean;
	}
	
	export interface StatEventCampaignTopicDatum { 
		"interval"?: string;
		"metrics"?: Array<Models.StatEventCampaignTopicMetric>;
	}
	
	export interface StatEventCampaignTopicMetric { 
		"metric"?: string;
		"qualifier"?: string;
		"stats"?: { [key: string]: number; };
	}
	
	export interface StatEventCampaignTopicStatsNotification { 
		"group"?: { [key: string]: string; };
		"data"?: Array<Models.StatEventCampaignTopicDatum>;
	}
	
	export interface StatEventQueueTopicDatum { 
		"interval"?: string;
		"metrics"?: Array<Models.StatEventQueueTopicMetric>;
	}
	
	export interface StatEventQueueTopicMetric { 
		"metric"?: string;
		"qualifier"?: string;
		"stats"?: { [key: string]: number; };
	}
	
	export interface StatEventQueueTopicStatsNotification { 
		"group"?: { [key: string]: string; };
		"data"?: Array<Models.StatEventQueueTopicDatum>;
	}
	
	export interface StatEventUserTopicDatum { 
		"interval"?: string;
		"metrics"?: Array<Models.StatEventUserTopicMetric>;
	}
	
	export interface StatEventUserTopicMetric { 
		"metric"?: string;
		"qualifier"?: string;
		"stats"?: { [key: string]: number; };
	}
	
	export interface StatEventUserTopicStatsNotification { 
		"group"?: { [key: string]: string; };
		"data"?: Array<Models.StatEventUserTopicDatum>;
	}
	
	export interface Station { 
		"id"?: string;
		"name"?: string;
		"description"?: string;
		"status"?: string;
		"userId"?: string;
		"webRtcUserId"?: string;
		"primaryEdge"?: Models.DomainEntityRef;
		"secondaryEdge"?: Models.DomainEntityRef;
		"type"?: string;
		"lineAppearanceId"?: string;
		"webRtcMediaDscp"?: number;
		"webRtcPersistentEnabled"?: boolean;
		"webRtcForceTurn"?: boolean;
		"selfUri"?: string;
	}
	
	export interface StationEntityListing { 
		"entities"?: Array<Models.Station>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface StationSettings { 
		"freeSeatingConfiguration"?: Models.FreeSeatingConfiguration;
	}
	
	export interface StatisticalResponse { 
		"interval"?: string;
		"metrics"?: Array<Models.AggregateMetricData>;
		"views"?: Array<Models.AggregateViewData>;
	}
	
	export interface StatisticalSummary { 
		"max"?: number;
		"min"?: number;
		"count"?: number;
		"sum"?: number;
		"current"?: number;
		"ratio"?: number;
		"numerator"?: number;
		"denominator"?: number;
		"target"?: number;
	}
	
	export interface StreetAddress { 
		"country": string;
		"A1": string;
		"A3": string;
		"RD"?: string;
		"HNO"?: string;
		"LOC"?: string;
		"NAM"?: string;
		"PC"?: string;
	}
	
	export interface SubjectDivisionGrants { 
		"id"?: string;
		"name"?: string;
		"divisions"?: Array<Models.Division>;
		"type"?: string;
		"selfUri"?: string;
	}
	
	export interface SubjectDivisionGrantsEntityListing { 
		"entities"?: Array<Models.SubjectDivisionGrants>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface SubjectDivisions { 
		"subjectIds": Array<string>;
		"divisionIds": Array<string>;
	}
	
	export interface SubscriberResponse { 
		"messageReturned"?: Array<string>;
		"status": string;
	}
	
	export interface SubscriptionOverviewUsage { 
		"name": string;
		"partNumber": string;
		"grouping": string;
		"unitOfMeasureType": string;
		"usageQuantity": string;
		"overagePrice"?: string;
		"prepayQuantity": string;
		"prepayPrice"?: string;
		"usageNotes"?: string;
		"isCancellable"?: boolean;
		"bundleQuantity"?: string;
		"isThirdParty"?: boolean;
	}
	
	export interface SuggestSearchCriteria { 
		"endValue"?: string;
		"values"?: Array<string>;
		"startValue"?: string;
		"fields"?: Array<string>;
		"value"?: string;
		"operator"?: string;
		"group"?: Array<Models.SuggestSearchCriteria>;
	}
	
	export interface SuggestSearchRequest { 
		"expand"?: Array<string>;
		"types": Array<string>;
		"query": Array<Models.SuggestSearchCriteria>;
	}
	
	export interface Survey { 
		"id"?: string;
		"name"?: string;
		"conversation"?: Models.Conversation;
		"surveyForm"?: Models.SurveyForm;
		"agent"?: Models.DomainEntityRef;
		"status"?: string;
		"queue"?: Models.QueueReference;
		"answers"?: Models.SurveyScoringSet;
		"completedDate"?: string;
		"surveyErrorDetails"?: Models.SurveyErrorDetails;
		"selfUri"?: string;
	}
	
	export interface SurveyAggregateDataContainer { 
		"group"?: { [key: string]: string; };
		"data"?: Array<Models.StatisticalResponse>;
	}
	
	export interface SurveyAggregateQueryClause { 
		"type": string;
		"predicates": Array<Models.SurveyAggregateQueryPredicate>;
	}
	
	export interface SurveyAggregateQueryFilter { 
		"type": string;
		"clauses"?: Array<Models.SurveyAggregateQueryClause>;
		"predicates"?: Array<Models.SurveyAggregateQueryPredicate>;
	}
	
	export interface SurveyAggregateQueryPredicate { 
		"type"?: string;
		"dimension"?: string;
		"operator"?: string;
		"value"?: string;
		"range"?: Models.NumericRange;
	}
	
	export interface SurveyAggregateQueryResponse { 
		"results"?: Array<Models.SurveyAggregateDataContainer>;
	}
	
	export interface SurveyAggregationQuery { 
		"interval": string;
		"granularity"?: string;
		"timeZone"?: string;
		"groupBy"?: Array<string>;
		"filter"?: Models.SurveyAggregateQueryFilter;
		"metrics"?: Array<string>;
		"flattenMultivaluedDimensions"?: boolean;
		"views"?: Array<Models.SurveyAggregationView>;
		"alternateTimeDimension"?: string;
	}
	
	export interface SurveyAggregationView { 
		"target": string;
		"name": string;
		"function": string;
		"range"?: Models.AggregationRange;
	}
	
	export interface SurveyAssignment { 
		"surveyForm"?: Models.PublishedSurveyFormReference;
		"flow"?: Models.DomainEntityRef;
		"inviteTimeInterval"?: string;
		"sendingUser"?: string;
		"sendingDomain": string;
	}
	
	export interface SurveyDetailQueryClause { 
		"type": string;
		"predicates": Array<Models.SurveyDetailQueryPredicate>;
	}
	
	export interface SurveyDetailQueryFilter { 
		"type": string;
		"clauses"?: Array<Models.SurveyDetailQueryClause>;
		"predicates"?: Array<Models.SurveyDetailQueryPredicate>;
	}
	
	export interface SurveyDetailQueryPredicate { 
		"type"?: string;
		"dimension"?: string;
		"metric"?: string;
		"operator"?: string;
		"value"?: string;
		"range"?: Models.NumericRange;
	}
	
	export interface SurveyErrorDetails { 
		"flowDiagnosticInfo"?: Models.FlowDiagnosticInfo;
		"surveyErrorReason"?: string;
	}
	
	export interface SurveyForm { 
		"id"?: string;
		"name": string;
		"modifiedDate"?: string;
		"published"?: boolean;
		"disabled"?: boolean;
		"contextId": string;
		"language": string;
		"headerImageId"?: string;
		"headerImageUrl"?: string;
		"header"?: string;
		"footer"?: string;
		"questionGroups": Array<Models.SurveyQuestionGroup>;
		"publishedVersions"?: Models.DomainEntityListingSurveyForm;
		"selfUri"?: string;
	}
	
	export interface SurveyFormAndScoringSet { 
		"surveyForm"?: Models.SurveyForm;
		"answers"?: Models.SurveyScoringSet;
	}
	
	export interface SurveyFormEntityListing { 
		"entities"?: Array<Models.SurveyForm>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface SurveyQuestion { 
		"id"?: string;
		"text"?: string;
		"helpText"?: string;
		"type"?: string;
		"naEnabled"?: boolean;
		"visibilityCondition"?: Models.VisibilityCondition;
		"answerOptions"?: Array<Models.AnswerOption>;
		"maxResponseCharacters"?: number;
		"explanationPrompt"?: string;
	}
	
	export interface SurveyQuestionGroup { 
		"id"?: string;
		"name"?: string;
		"type"?: string;
		"naEnabled"?: boolean;
		"questions"?: Array<Models.SurveyQuestion>;
		"visibilityCondition"?: Models.VisibilityCondition;
	}
	
	export interface SurveyQuestionGroupScore { 
		"questionGroupId"?: string;
		"totalScore"?: number;
		"maxTotalScore"?: number;
		"markedNA"?: boolean;
		"questionScores"?: Array<Models.SurveyQuestionScore>;
	}
	
	export interface SurveyQuestionScore { 
		"questionId"?: string;
		"answerId"?: string;
		"score"?: number;
		"markedNA"?: boolean;
		"npsScore"?: number;
		"npsTextAnswer"?: string;
		"freeTextAnswer"?: string;
	}
	
	export interface SurveyScoringSet { 
		"totalScore"?: number;
		"npsScore"?: number;
		"questionGroupScores"?: Array<Models.SurveyQuestionGroupScore>;
	}
	
	export interface SystemMessageSystemMessage { 
		"channelId"?: string;
		"systemTopicType"?: string;
		"correlationId"?: string;
		"organizationId"?: string;
		"userId"?: string;
		"oauthClientId"?: string;
		"reason"?: string;
		"message"?: string;
		"data"?: object;
	}
	
	export interface SystemPresence { 
		"id"?: string;
		"name"?: string;
		"selfUri"?: string;
	}
	
	export interface SystemPrompt { 
		"id"?: string;
		"name"?: string;
		"description"?: string;
		"resources"?: Array<Models.SystemPromptAsset>;
		"selfUri"?: string;
	}
	
	export interface SystemPromptAsset { 
		"id"?: string;
		"name"?: string;
		"promptId"?: string;
		"language": string;
		"durationSeconds"?: number;
		"mediaUri"?: string;
		"ttsString"?: string;
		"text"?: string;
		"uploadUri"?: string;
		"uploadStatus"?: string;
		"hasDefault"?: boolean;
		"languageDefault"?: boolean;
		"tags"?: { [key: string]: Array<string>; };
		"selfUri"?: string;
	}
	
	export interface SystemPromptAssetEntityListing { 
		"entities"?: Array<Models.SystemPromptAsset>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface SystemPromptEntityListing { 
		"entities"?: Array<Models.SystemPrompt>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface TagQueryRequest { 
		"query"?: string;
		"pageNumber"?: number;
		"pageSize"?: number;
	}
	
	export interface TagValue { 
		"id"?: string;
		"name": string;
		"inUse"?: boolean;
		"acl"?: Array<string>;
		"selfUri"?: string;
	}
	
	export interface TagValueEntityListing { 
		"entities"?: Array<Models.TagValue>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface Team { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"dateModified"?: string;
		"memberCount"?: number;
		"selfUri"?: string;
	}
	
	export interface TermAttribute { 
		"id"?: string;
		"name"?: string;
		"type"?: string;
	}
	
	export interface TestExecutionOperationResult { 
		"step"?: number;
		"name"?: string;
		"success"?: boolean;
		"result"?: object;
		"error"?: Models.ErrorBody;
	}
	
	export interface TestExecutionResult { 
		"operations"?: Array<Models.TestExecutionOperationResult>;
		"error"?: Models.ErrorBody;
		"finalResult"?: object;
		"success"?: boolean;
	}
	
	export interface TextMessageListing { 
		"entities"?: Array<Models.MessageData>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface Ticker { 
		"symbol": string;
		"exchange": string;
	}
	
	export interface TimeAllowed { 
		"timeSlots"?: Array<Models.TimeSlot>;
		"timeZoneId"?: string;
		"empty"?: boolean;
	}
	
	export interface TimeInterval { 
		"months"?: number;
		"weeks"?: number;
		"days"?: number;
		"hours"?: number;
	}
	
	export interface TimeOffRequestEntityList { 
		"entities"?: Array<Models.TimeOffRequestResponse>;
	}
	
	export interface TimeOffRequestList { 
		"id"?: string;
		"name"?: string;
		"timeOffRequests"?: Array<Models.TimeOffRequestResponse>;
		"selfUri"?: string;
	}
	
	export interface TimeOffRequestLookup { 
		"id": string;
		"user": Models.UserReference;
		"isFullDayRequest"?: boolean;
		"markedAsRead"?: boolean;
		"activityCodeId"?: string;
		"status"?: string;
		"partialDayStartDateTimes"?: Array<string>;
		"fullDayManagementUnitDates"?: Array<string>;
		"dailyDurationMinutes"?: number;
		"notes"?: string;
		"submittedBy"?: Models.UserReference;
		"submittedDate"?: string;
		"reviewedBy"?: Models.UserReference;
		"reviewedDate"?: string;
		"metadata"?: Models.WfmVersionedEntityMetadata;
		"selfUri"?: string;
	}
	
	export interface TimeOffRequestLookupList { 
		"entities": Array<Models.TimeOffRequestLookup>;
	}
	
	export interface TimeOffRequestNotification { 
		"timeOffRequestId"?: string;
		"user"?: Models.UserReference;
		"isFullDayRequest"?: boolean;
		"status"?: string;
		"partialDayStartDateTimes"?: Array<string>;
		"fullDayManagementUnitDates"?: Array<string>;
	}
	
	export interface TimeOffRequestQueryBody { 
		"userIds"?: Array<string>;
		"statuses"?: Array<string>;
		"dateRange"?: Models.DateRange;
	}
	
	export interface TimeOffRequestResponse { 
		"id"?: string;
		"user"?: Models.UserReference;
		"isFullDayRequest"?: boolean;
		"markedAsRead"?: boolean;
		"activityCodeId"?: string;
		"status"?: string;
		"partialDayStartDateTimes"?: Array<string>;
		"fullDayManagementUnitDates"?: Array<string>;
		"dailyDurationMinutes"?: number;
		"notes"?: string;
		"submittedBy"?: Models.UserReference;
		"submittedDate"?: string;
		"reviewedBy"?: Models.UserReference;
		"reviewedDate"?: string;
		"modifiedBy"?: Models.UserReference;
		"modifiedDate"?: string;
		"metadata"?: Models.WfmVersionedEntityMetadata;
		"selfUri"?: string;
	}
	
	export interface TimeOffRequestSettings { 
		"submissionRangeEnforced"?: boolean;
		"submissionEarliestDaysFromNow"?: number;
		"submissionLatestDaysFromNow"?: number;
	}
	
	export interface TimeSlot { 
		"startTime"?: string;
		"stopTime"?: string;
		"day"?: number;
	}
	
	export interface TimeZoneEntityListing { 
		"entities"?: Array<Models.RegionTimeZone>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface TimeZoneMappingPreview { 
		"contactList"?: Models.DomainEntityRef;
		"contactsPerTimeZone"?: { [key: string]: number; };
		"contactsMappedUsingZipCode"?: { [key: string]: number; };
		"contactsMappedToASingleZone"?: number;
		"contactsMappedToASingleZoneUsingZipCode"?: number;
		"contactsMappedToMultipleZones"?: number;
		"contactsMappedToMultipleZonesUsingZipCode"?: number;
		"contactsInDefaultWindow"?: number;
		"contactListSize"?: number;
	}
	
	export interface TokenInfo { 
		"organization"?: Models.NamedEntity;
		"homeOrganization"?: Models.NamedEntity;
		"authorizedScope"?: Array<string>;
		"OAuthClient"?: Models.OrgOAuthClient;
	}
	
	export interface TranscriptProperty { 
		"url"?: string;
		"conversation"?: Models.AddressableEntityRef;
		"communicationId"?: string;
	}
	
	export interface TranscriptionSettings { 
		"transcription": string;
		"transcriptionConfidenceThreshold": number;
	}
	
	export interface TransferRequest { 
		"userId"?: string;
		"address"?: string;
		"userName"?: string;
		"queueId"?: string;
		"voicemail"?: boolean;
	}
	
	export interface Trunk { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"trunkType"?: string;
		"edge"?: Models.DomainEntityRef;
		"trunkBase"?: Models.DomainEntityRef;
		"trunkMetabase"?: Models.DomainEntityRef;
		"edgeGroup"?: Models.DomainEntityRef;
		"inService"?: boolean;
		"enabled"?: boolean;
		"logicalInterface"?: Models.DomainEntityRef;
		"connectedStatus"?: Models.TrunkConnectedStatus;
		"optionsStatus"?: Array<Models.TrunkMetricsOptions>;
		"registersStatus"?: Array<Models.TrunkMetricsRegisters>;
		"ipStatus"?: Models.TrunkMetricsNetworkTypeIp;
		"optionsEnabledStatus"?: string;
		"registersEnabledStatus"?: string;
		"family"?: number;
		"proxyAddressList"?: Array<string>;
		"selfUri"?: string;
	}
	
	export interface TrunkBase { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"version"?: number;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"state"?: string;
		"modifiedByApp"?: string;
		"createdByApp"?: string;
		"trunkMetabase": Models.DomainEntityRef;
		"properties"?: { [key: string]: object; };
		"trunkType": string;
		"managed"?: boolean;
		"selfUri"?: string;
	}
	
	export interface TrunkBaseAssignment { 
		"family"?: number;
		"trunkBase"?: Models.TrunkBase;
	}
	
	export interface TrunkBaseEntityListing { 
		"entities"?: Array<Models.TrunkBase>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface TrunkConnectedStatus { 
		"connected"?: boolean;
		"connectedStateTime"?: string;
	}
	
	export interface TrunkEntityListing { 
		"entities"?: Array<Models.Trunk>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface TrunkErrorInfo { 
		"text"?: string;
		"code"?: string;
		"details"?: Models.TrunkErrorInfoDetails;
	}
	
	export interface TrunkErrorInfoDetails { 
		"code"?: string;
		"message"?: string;
		"hostname"?: string;
	}
	
	export interface TrunkMetabaseEntityListing { 
		"entities"?: Array<Models.Metabase>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface TrunkMetrics { 
		"eventTime"?: string;
		"logicalInterface"?: Models.DomainEntityRef;
		"trunk"?: Models.DomainEntityRef;
		"calls"?: Models.TrunkMetricsCalls;
		"qos"?: Models.TrunkMetricsQoS;
	}
	
	export interface TrunkMetricsCalls { 
		"inboundCallCount"?: number;
		"outboundCallCount"?: number;
	}
	
	export interface TrunkMetricsNetworkTypeIp { 
		"address"?: string;
		"errorInfo"?: Models.TrunkErrorInfo;
	}
	
	export interface TrunkMetricsOptions { 
		"proxyAddress"?: string;
		"optionState"?: boolean;
		"optionStateTime"?: string;
		"errorInfo"?: Models.TrunkErrorInfo;
	}
	
	export interface TrunkMetricsQoS { 
		"mismatchCount": number;
	}
	
	export interface TrunkMetricsRegisters { 
		"proxyAddress"?: string;
		"registerState"?: boolean;
		"registerStateTime"?: string;
		"errorInfo"?: Models.TrunkErrorInfo;
	}
	
	export interface TrunkRecordingEnabledCount { 
		"enabledCount"?: number;
		"disabledCount"?: number;
	}
	
	export interface TrustCreate { 
		"pairingId": string;
		"enabled": boolean;
		"users"?: Array<Models.TrustMemberCreate>;
		"groups"?: Array<Models.TrustMemberCreate>;
	}
	
	export interface TrustEntityListing { 
		"entities"?: Array<Models.Trustee>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface TrustGroup { 
		"id"?: string;
		"name": string;
		"description"?: string;
		"dateModified"?: string;
		"memberCount"?: number;
		"state"?: string;
		"version"?: number;
		"type": string;
		"images"?: Array<Models.UserImage>;
		"addresses"?: Array<Models.GroupContact>;
		"rulesVisible": boolean;
		"visibility": string;
		"owners"?: Array<Models.User>;
		"dateCreated"?: string;
		"createdBy"?: Models.OrgUser;
	}
	
	export interface TrustMemberCreate { 
		"id": string;
		"roleIds"?: Array<string>;
		"roleDivisions"?: Models.RoleDivisionGrants;
	}
	
	export interface TrustRequest { 
		"id"?: string;
		"createdBy"?: Models.OrgUser;
		"dateCreated"?: string;
		"trustee": Models.Organization;
		"users"?: Array<Models.OrgUser>;
		"groups"?: Array<Models.TrustGroup>;
		"selfUri"?: string;
	}
	
	export interface TrustRequestCreate { 
		"userIds"?: Array<string>;
		"groupIds"?: Array<string>;
	}
	
	export interface TrustUser { 
		"id"?: string;
		"name"?: string;
		"division"?: Models.Division;
		"chat"?: Models.Chat;
		"department"?: string;
		"email"?: string;
		"primaryContactInfo"?: Array<Models.Contact>;
		"addresses"?: Array<Models.Contact>;
		"state"?: string;
		"title"?: string;
		"username"?: string;
		"manager"?: Models.User;
		"images"?: Array<Models.UserImage>;
		"version": number;
		"certifications"?: Array<string>;
		"biography"?: Models.Biography;
		"employerInfo"?: Models.EmployerInfo;
		"routingStatus"?: Models.RoutingStatus;
		"presence"?: Models.UserPresence;
		"conversationSummary"?: Models.UserConversationSummary;
		"outOfOffice"?: Models.OutOfOffice;
		"geolocation"?: Models.Geolocation;
		"station"?: Models.UserStations;
		"authorization"?: Models.UserAuthorization;
		"profileSkills"?: Array<string>;
		"locations"?: Array<Models.Location>;
		"groups"?: Array<Models.Group>;
		"team"?: Models.Team;
		"skills"?: Array<Models.UserRoutingSkill>;
		"languages"?: Array<Models.UserRoutingLanguage>;
		"acdAutoAnswer"?: boolean;
		"languagePreference"?: string;
		"lastTokenIssued"?: Models.OAuthLastTokenIssued;
		"trustUserDetails"?: Models.TrustUserDetails;
	}
	
	export interface TrustUserDetails { 
		"dateCreated"?: string;
		"createdBy"?: Models.OrgUser;
	}
	
	export interface TrustUserEntityListing { 
		"entities"?: Array<Models.TrustUser>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface Trustee { 
		"id"?: string;
		"enabled": boolean;
		"dateCreated"?: string;
		"createdBy"?: Models.OrgUser;
		"organization"?: Models.Organization;
		"selfUri"?: string;
	}
	
	export interface TrusteeAuditQueryRequest { 
		"trusteeOrganizationIds": Array<string>;
		"trusteeUserIds": Array<string>;
		"startDate"?: string;
		"endDate"?: string;
		"queryPhrase"?: string;
		"facets"?: Array<Models.Facet>;
		"filters"?: Array<Models.Filter>;
	}
	
	export interface TrusteeAuthorization { 
		"permissions"?: Array<string>;
	}
	
	export interface TrusteeBillingOverview { 
		"id"?: string;
		"name"?: string;
		"organization": Models.NamedEntity;
		"currency": string;
		"enabledProducts": Array<string>;
		"subscriptionType": string;
		"rampPeriodStartDate"?: string;
		"rampPeriodEndDate"?: string;
		"billingPeriodStartDate"?: string;
		"billingPeriodEndDate"?: string;
		"usages": Array<Models.SubscriptionOverviewUsage>;
		"contractAmendmentDate"?: string;
		"contractEffectiveDate"?: string;
		"contractEndDate"?: string;
		"minimumMonthlyAmount"?: string;
		"inRampPeriod"?: boolean;
		"selfUri"?: string;
	}
	
	export interface Trustor { 
		"id"?: string;
		"enabled": boolean;
		"dateCreated"?: string;
		"createdBy"?: Models.OrgUser;
		"organization"?: Models.Organization;
		"authorization"?: Models.TrusteeAuthorization;
		"selfUri"?: string;
	}
	
	export interface TrustorAuditQueryRequest { 
		"trustorOrganizationId": string;
		"trusteeUserIds": Array<string>;
		"startDate"?: string;
		"endDate"?: string;
		"queryPhrase"?: string;
		"facets"?: Array<Models.Facet>;
		"filters"?: Array<Models.Filter>;
	}
	
	export interface TrustorEntityListing { 
		"entities"?: Array<Models.Trustor>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface TtsEngineEntity { 
		"id"?: string;
		"name"?: string;
		"languages": Array<string>;
		"outputFormats": Array<string>;
		"voices"?: Array<Models.TtsVoiceEntity>;
		"isDefault"?: boolean;
		"isSecure"?: boolean;
		"selfUri"?: string;
	}
	
	export interface TtsEngineEntityListing { 
		"entities"?: Array<Models.TtsEngineEntity>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface TtsSettings { 
		"defaultEngine": string;
		"languageOverrides": Array<Models.LanguageOverride>;
	}
	
	export interface TtsVoiceEntity { 
		"id"?: string;
		"name"?: string;
		"gender": string;
		"language": string;
		"engine": Models.TtsEngineEntity;
		"isDefault"?: boolean;
		"selfUri"?: string;
	}
	
	export interface TtsVoiceEntityListing { 
		"entities"?: Array<Models.TtsVoiceEntity>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface TwitterId { 
		"id"?: string;
		"name"?: string;
		"screenName"?: string;
		"verified"?: boolean;
		"profileUrl"?: string;
	}
	
	export interface TwitterIntegration { 
		"id": string;
		"name": string;
		"accessTokenKey": string;
		"consumerKey": string;
		"username"?: string;
		"userId"?: string;
		"status"?: string;
		"tier": string;
		"envName"?: string;
		"recipient"?: Models.DomainEntityRef;
		"dateCreated"?: string;
		"dateModified"?: string;
		"createdBy"?: Models.DomainEntityRef;
		"modifiedBy"?: Models.DomainEntityRef;
		"version": number;
		"selfUri"?: string;
	}
	
	export interface TwitterIntegrationEntityListing { 
		"entities"?: Array<Models.TwitterIntegration>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface TwitterIntegrationRequest { 
		"id"?: string;
		"name": string;
		"accessTokenKey": string;
		"accessTokenSecret": string;
		"consumerKey": string;
		"consumerSecret": string;
		"tier": string;
		"envName"?: string;
		"selfUri"?: string;
	}
	
	export interface UnreadMetric { 
		"count"?: number;
	}
	
	export interface UnreadStatus { 
		"unread"?: boolean;
	}
	
	export interface UnscheduledAgentWarning { 
		"agent"?: Models.UserReference;
		"unscheduledReason"?: string;
	}
	
	export interface UpdateActionInput { 
		"category"?: string;
		"name"?: string;
		"config"?: Models.ActionConfig;
		"version": number;
	}
	
	export interface UpdateActivityCodeRequest { 
		"name"?: string;
		"category"?: string;
		"lengthInMinutes"?: number;
		"countsAsPaidTime"?: boolean;
		"countsAsWorkTime"?: boolean;
		"agentTimeOffSelectable"?: boolean;
		"metadata": Models.WfmVersionedEntityMetadata;
	}
	
	export interface UpdateDraftInput { 
		"category"?: string;
		"name"?: string;
		"config"?: Models.ActionConfig;
		"contract"?: Models.ActionContractInput;
		"secure"?: boolean;
		"version": number;
	}
	
	export interface UpdateManagementUnitRequest { 
		"name"?: string;
		"divisionId"?: string;
		"settings"?: Models.ManagementUnitSettingsRequest;
	}
	
	export interface UpdateNotificationResponse { 
		"mutableGroupId"?: string;
		"id"?: string;
	}
	
	export interface UpdateNotificationsRequest { 
		"entities": Array<Models.WfmUserNotification>;
	}
	
	export interface UpdateNotificationsResponse { 
		"entities"?: Array<Models.UpdateNotificationResponse>;
	}
	
	export interface UpdateSchedulingRunRequest { 
		"applied"?: boolean;
	}
	
	export interface UpdateUser { 
		"id"?: string;
		"name"?: string;
		"chat"?: Models.Chat;
		"department"?: string;
		"email"?: string;
		"primaryContactInfo"?: Array<Models.Contact>;
		"addresses"?: Array<Models.Contact>;
		"title"?: string;
		"username"?: string;
		"manager"?: string;
		"images"?: Array<Models.UserImage>;
		"version": number;
		"profileSkills"?: Array<string>;
		"locations"?: Array<Models.Location>;
		"groups"?: Array<Models.Group>;
		"state"?: string;
		"acdAutoAnswer"?: boolean;
		"certifications"?: Array<string>;
		"biography"?: Models.Biography;
		"employerInfo"?: Models.EmployerInfo;
		"selfUri"?: string;
	}
	
	export interface UpdateWeekScheduleRequest { 
		"description"?: string;
		"published"?: boolean;
		"userSchedules"?: { [key: string]: Models.UserSchedule; };
		"partialUploadIds"?: Array<string>;
		"metadata": Models.WfmVersionedEntityMetadata;
		"agentSchedulesVersion": number;
		"shortTermForecast"?: Models.ShortTermForecastReference;
		"headcountForecast"?: Models.HeadcountForecast;
		"agentUpdateFilter"?: string;
	}
	
	export interface Usage { 
		"types"?: Array<Models.UsageItem>;
	}
	
	export interface UsageItem { 
		"type"?: string;
		"totalDocumentByteCount"?: number;
		"totalDocumentCount"?: number;
	}
	
	export interface User { 
		"id"?: string;
		"name"?: string;
		"division"?: Models.Division;
		"chat"?: Models.Chat;
		"department"?: string;
		"email"?: string;
		"primaryContactInfo"?: Array<Models.Contact>;
		"addresses"?: Array<Models.Contact>;
		"state"?: string;
		"title"?: string;
		"username"?: string;
		"manager"?: Models.User;
		"images"?: Array<Models.UserImage>;
		"version": number;
		"certifications"?: Array<string>;
		"biography"?: Models.Biography;
		"employerInfo"?: Models.EmployerInfo;
		"routingStatus"?: Models.RoutingStatus;
		"presence"?: Models.UserPresence;
		"conversationSummary"?: Models.UserConversationSummary;
		"outOfOffice"?: Models.OutOfOffice;
		"geolocation"?: Models.Geolocation;
		"station"?: Models.UserStations;
		"authorization"?: Models.UserAuthorization;
		"profileSkills"?: Array<string>;
		"locations"?: Array<Models.Location>;
		"groups"?: Array<Models.Group>;
		"team"?: Models.Team;
		"skills"?: Array<Models.UserRoutingSkill>;
		"languages"?: Array<Models.UserRoutingLanguage>;
		"acdAutoAnswer"?: boolean;
		"languagePreference"?: string;
		"lastTokenIssued"?: Models.OAuthLastTokenIssued;
		"selfUri"?: string;
	}
	
	export interface UserActionCategory { 
		"id"?: string;
		"name"?: string;
		"selfUri"?: string;
	}
	
	export interface UserActionCategoryEntityListing { 
		"entities"?: Array<Models.UserActionCategory>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface UserAgentInfo { 
		"firmwareVersion"?: string;
		"manufacturer"?: string;
		"model"?: string;
	}
	
	export interface UserAggregateDataContainer { 
		"group"?: { [key: string]: string; };
		"data"?: Array<Models.StatisticalResponse>;
	}
	
	export interface UserAggregateQueryClause { 
		"type": string;
		"predicates": Array<Models.UserAggregateQueryPredicate>;
	}
	
	export interface UserAggregateQueryFilter { 
		"type": string;
		"clauses"?: Array<Models.UserAggregateQueryClause>;
		"predicates"?: Array<Models.UserAggregateQueryPredicate>;
	}
	
	export interface UserAggregateQueryPredicate { 
		"type"?: string;
		"dimension"?: string;
		"operator"?: string;
		"value"?: string;
		"range"?: Models.NumericRange;
	}
	
	export interface UserAggregateQueryResponse { 
		"systemToOrganizationMappings"?: { [key: string]: Array<string>; };
		"results"?: Array<Models.UserAggregateDataContainer>;
	}
	
	export interface UserAggregationQuery { 
		"interval": string;
		"granularity"?: string;
		"timeZone"?: string;
		"groupBy"?: Array<string>;
		"filter"?: Models.UserAggregateQueryFilter;
		"metrics"?: Array<string>;
		"flattenMultivaluedDimensions"?: boolean;
		"views"?: Array<Models.UserAggregationView>;
		"alternateTimeDimension"?: string;
	}
	
	export interface UserAggregationView { 
		"target": string;
		"name": string;
		"function": string;
		"range"?: Models.AggregationRange;
	}
	
	export interface UserAuthorization { 
		"roles"?: Array<Models.DomainRole>;
		"unusedRoles"?: Array<Models.DomainRole>;
		"permissions"?: Array<string>;
		"permissionPolicies"?: Array<Models.ResourcePermissionPolicy>;
	}
	
	export interface UserConversationSummary { 
		"userId"?: string;
		"call"?: Models.MediaSummary;
		"callback"?: Models.MediaSummary;
		"email"?: Models.MediaSummary;
		"message"?: Models.MediaSummary;
		"chat"?: Models.MediaSummary;
		"socialExpression"?: Models.MediaSummary;
		"video"?: Models.MediaSummary;
	}
	
	export interface UserConversationsEventMediaSummary { 
		"contactCenter"?: Models.UserConversationsEventMediaSummaryDetail;
		"enterprise"?: Models.UserConversationsEventMediaSummaryDetail;
	}
	
	export interface UserConversationsEventMediaSummaryDetail { 
		"active"?: number;
		"acw"?: number;
	}
	
	export interface UserConversationsEventUserConversationSummary { 
		"userId"?: string;
		"call"?: Models.UserConversationsEventMediaSummary;
		"callback"?: Models.UserConversationsEventMediaSummary;
		"email"?: Models.UserConversationsEventMediaSummary;
		"message"?: Models.UserConversationsEventMediaSummary;
		"chat"?: Models.UserConversationsEventMediaSummary;
		"socialExpression"?: Models.UserConversationsEventMediaSummary;
		"video"?: Models.UserConversationsEventMediaSummary;
	}
	
	export interface UserDetailQueryClause { 
		"type": string;
		"predicates": Array<Models.UserDetailQueryPredicate>;
	}
	
	export interface UserDetailQueryFilter { 
		"type": string;
		"clauses"?: Array<Models.UserDetailQueryClause>;
		"predicates"?: Array<Models.UserDetailQueryPredicate>;
	}
	
	export interface UserDetailQueryPredicate { 
		"type"?: string;
		"dimension"?: string;
		"operator"?: string;
		"value"?: string;
		"range"?: Models.NumericRange;
	}
	
	export interface UserDetailsQuery { 
		"interval": string;
		"userFilters"?: Array<Models.UserDetailQueryFilter>;
		"presenceFilters"?: Array<Models.PresenceDetailQueryFilter>;
		"routingStatusFilters"?: Array<Models.RoutingStatusDetailQueryFilter>;
		"order"?: string;
		"presenceAggregations"?: Array<Models.AnalyticsQueryAggregation>;
		"routingStatusAggregations"?: Array<Models.AnalyticsQueryAggregation>;
		"paging"?: Models.PagingSpec;
	}
	
	export interface UserDevice { 
		"id"?: string;
		"name"?: string;
		"deviceToken": string;
		"notificationId": string;
		"make": string;
		"model": string;
		"acceptNotifications": boolean;
		"type": string;
		"sessionHash"?: string;
		"selfUri"?: string;
	}
	
	export interface UserEntityListing { 
		"entities"?: Array<Models.User>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface UserExpands { 
		"routingStatus"?: Models.RoutingStatus;
		"presence"?: Models.UserPresence;
		"conversationSummary"?: Models.UserConversationSummary;
		"outOfOffice"?: Models.OutOfOffice;
		"geolocation"?: Models.Geolocation;
		"station"?: Models.UserStations;
		"authorization"?: Models.UserAuthorization;
	}
	
	export interface UserGreetingEventGreeting { 
		"id"?: string;
		"name"?: string;
		"type"?: string;
		"ownerType"?: string;
		"owner"?: Models.UserGreetingEventGreetingOwner;
		"greetingAudioFile"?: Models.UserGreetingEventGreetingAudioFile;
		"audioTTS"?: string;
	}
	
	export interface UserGreetingEventGreetingAudioFile { 
		"durationMilliseconds"?: number;
		"sizeBytes"?: number;
	}
	
	export interface UserGreetingEventGreetingOwner { 
		"id"?: string;
	}
	
	export interface UserImage { 
		"resolution"?: string;
		"imageUri"?: string;
	}
	
	export interface UserLanguageEntityListing { 
		"entities"?: Array<Models.UserRoutingLanguage>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface UserLicenses { 
		"id"?: string;
		"licenses"?: Array<string>;
		"selfUri"?: string;
	}
	
	export interface UserLicensesEntityListing { 
		"entities"?: Array<Models.UserLicenses>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"pageCount"?: number;
	}
	
	export interface UserListScheduleRequestBody { 
		"userIds": Array<string>;
		"startDate": string;
		"endDate": string;
		"loadFullWeeks"?: boolean;
	}
	
	export interface UserMe { 
		"id"?: string;
		"name"?: string;
		"division"?: Models.Division;
		"chat"?: Models.Chat;
		"department"?: string;
		"email"?: string;
		"primaryContactInfo"?: Array<Models.Contact>;
		"addresses"?: Array<Models.Contact>;
		"state"?: string;
		"title"?: string;
		"username"?: string;
		"manager"?: Models.User;
		"images"?: Array<Models.UserImage>;
		"version": number;
		"certifications"?: Array<string>;
		"biography"?: Models.Biography;
		"employerInfo"?: Models.EmployerInfo;
		"routingStatus"?: Models.RoutingStatus;
		"presence"?: Models.UserPresence;
		"conversationSummary"?: Models.UserConversationSummary;
		"outOfOffice"?: Models.OutOfOffice;
		"geolocation"?: Models.Geolocation;
		"station"?: Models.UserStations;
		"authorization"?: Models.UserAuthorization;
		"profileSkills"?: Array<string>;
		"locations"?: Array<Models.Location>;
		"groups"?: Array<Models.Group>;
		"team"?: Models.Team;
		"skills"?: Array<Models.UserRoutingSkill>;
		"languages"?: Array<Models.UserRoutingLanguage>;
		"acdAutoAnswer"?: boolean;
		"languagePreference"?: string;
		"lastTokenIssued"?: Models.OAuthLastTokenIssued;
		"date"?: Models.ServerDate;
		"geolocationSettings"?: Models.GeolocationSettings;
		"organization"?: Models.Organization;
		"presenceDefinitions"?: Array<Models.OrganizationPresence>;
		"locationDefinitions"?: Array<Models.LocationDefinition>;
		"orgAuthorization"?: Array<Models.DomainOrganizationRole>;
		"favorites"?: Array<Models.User>;
		"superiors"?: Array<Models.User>;
		"directReports"?: Array<Models.User>;
		"adjacents"?: Models.Adjacents;
		"routingSkills"?: Array<Models.RoutingSkill>;
		"fieldConfigs"?: Models.FieldConfigs;
		"token"?: Models.TokenInfo;
		"trustors"?: Array<Models.Trustor>;
		"orgProducts"?: Array<Models.DomainOrganizationProduct>;
		"selfUri"?: string;
	}
	
	export interface UserObservationDataContainer { 
		"group"?: { [key: string]: string; };
		"data"?: Array<Models.ObservationMetricData>;
	}
	
	export interface UserObservationQuery { 
		"filter": Models.UserObservationQueryFilter;
		"metrics"?: Array<string>;
		"detailMetrics"?: Array<string>;
	}
	
	export interface UserObservationQueryClause { 
		"type": string;
		"predicates": Array<Models.UserObservationQueryPredicate>;
	}
	
	export interface UserObservationQueryFilter { 
		"type": string;
		"clauses"?: Array<Models.UserObservationQueryClause>;
		"predicates"?: Array<Models.UserObservationQueryPredicate>;
	}
	
	export interface UserObservationQueryPredicate { 
		"type"?: string;
		"dimension"?: string;
		"operator"?: string;
		"value"?: string;
		"range"?: Models.NumericRange;
	}
	
	export interface UserObservationQueryResponse { 
		"results"?: Array<Models.UserObservationDataContainer>;
	}
	
	export interface UserParam { 
		"key"?: string;
		"value"?: string;
	}
	
	export interface UserPresence { 
		"id"?: string;
		"name"?: string;
		"source"?: string;
		"primary"?: boolean;
		"presenceDefinition"?: Models.PresenceDefinition;
		"message"?: string;
		"modifiedDate"?: string;
		"selfUri"?: string;
	}
	
	export interface UserProfile { 
		"id"?: string;
		"name"?: string;
		"state"?: string;
		"dateModified"?: string;
		"version": number;
		"expands"?: Models.UserExpands;
		"selfUri"?: string;
	}
	
	export interface UserProfileEntityListing { 
		"entities"?: Array<Models.UserProfile>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface UserQueue { 
		"id"?: string;
		"name"?: string;
		"division"?: Models.Division;
		"description"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"memberCount"?: number;
		"mediaSettings"?: { [key: string]: Models.MediaSetting; };
		"bullseye"?: Models.Bullseye;
		"acwSettings"?: Models.AcwSettings;
		"skillEvaluationMethod"?: string;
		"queueFlow"?: Models.DomainEntityRef;
		"whisperPrompt"?: Models.DomainEntityRef;
		"callingPartyName"?: string;
		"callingPartyNumber"?: string;
		"defaultScripts"?: { [key: string]: Models.Script; };
		"outboundMessagingAddresses"?: Models.QueueMessagingAddresses;
		"outboundEmailAddress"?: Models.QueueEmailAddress;
		"joined"?: boolean;
		"selfUri"?: string;
	}
	
	export interface UserQueueEntityListing { 
		"entities"?: Array<Models.UserQueue>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface UserRecording { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"contentUri"?: string;
		"workspace"?: Models.DomainEntityRef;
		"createdBy"?: Models.DomainEntityRef;
		"conversation"?: Models.Conversation;
		"contentLength"?: number;
		"durationMilliseconds"?: number;
		"thumbnails"?: Array<Models.DocumentThumbnail>;
		"read"?: boolean;
		"selfUri"?: string;
	}
	
	export interface UserRecordingEntityListing { 
		"entities"?: Array<Models.UserRecording>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface UserReference { 
		"id"?: string;
		"selfUri"?: string;
	}
	
	export interface UserRoutingLanguage { 
		"id"?: string;
		"name"?: string;
		"proficiency"?: number;
		"state"?: string;
		"languageUri"?: string;
		"selfUri"?: string;
	}
	
	export interface UserRoutingLanguagePost { 
		"id": string;
		"proficiency": number;
		"languageUri"?: string;
		"selfUri"?: string;
	}
	
	export interface UserRoutingSkill { 
		"id"?: string;
		"name"?: string;
		"proficiency"?: number;
		"state"?: string;
		"skillUri"?: string;
		"selfUri"?: string;
	}
	
	export interface UserRoutingSkillPost { 
		"id": string;
		"proficiency": number;
		"skillUri"?: string;
		"selfUri"?: string;
	}
	
	export interface UserRoutingStatusErrorInfo { 
		"errorCode"?: string;
		"status"?: number;
		"correlationId"?: string;
		"userMessage"?: string;
		"userParamsMessage"?: string;
		"userParams"?: Array<Models.UserRoutingStatusUserParam>;
	}
	
	export interface UserRoutingStatusRoutingStatus { 
		"status"?: string;
		"startTime"?: string;
	}
	
	export interface UserRoutingStatusUserParam { 
		"key"?: string;
		"value"?: string;
		"additionalProperties"?: object;
	}
	
	export interface UserRoutingStatusUserRoutingStatus { 
		"routingStatus"?: Models.UserRoutingStatusRoutingStatus;
		"errorInfo"?: Models.UserRoutingStatusErrorInfo;
	}
	
	export interface UserSchedule { 
		"shifts"?: Array<Models.UserScheduleShift>;
		"fullDayTimeOffMarkers"?: Array<Models.UserScheduleFullDayTimeOffMarker>;
		"delete"?: boolean;
		"metadata": Models.WfmVersionedEntityMetadata;
		"workPlanId"?: string;
	}
	
	export interface UserScheduleActivity { 
		"activityCodeId"?: string;
		"startDate"?: string;
		"lengthInMinutes"?: number;
		"description"?: string;
		"countsAsPaidTime"?: boolean;
		"isDstFallback"?: boolean;
		"timeOffRequestId"?: string;
	}
	
	export interface UserScheduleAdherence { 
		"id"?: string;
		"name"?: string;
		"user"?: Models.UserReference;
		"managementUnit"?: Models.ManagementUnit;
		"scheduledActivityCategory"?: string;
		"systemPresence"?: string;
		"organizationSecondaryPresenceId"?: string;
		"routingStatus"?: string;
		"actualActivityCategory"?: string;
		"isOutOfOffice"?: boolean;
		"adherenceState"?: string;
		"impact"?: string;
		"timeOfAdherenceChange"?: string;
		"presenceUpdateTime"?: string;
		"activeQueues"?: Array<Models.QueueReference>;
		"activeQueuesModifiedTime"?: string;
		"removedFromManagementUnit"?: boolean;
		"selfUri"?: string;
	}
	
	export interface UserScheduleContainer { 
		"managementUnitTimeZone"?: string;
		"publishedSchedules"?: Array<Models.WeekScheduleReference>;
		"userSchedules"?: { [key: string]: Models.UserSchedule; };
	}
	
	export interface UserScheduleFullDayTimeOffMarker { 
		"managementUnitDate"?: string;
		"activityCodeId"?: string;
		"isPaid"?: boolean;
		"lengthInMinutes"?: number;
		"description"?: string;
		"delete"?: boolean;
	}
	
	export interface UserScheduleShift { 
		"weekSchedule"?: Models.WeekScheduleReference;
		"id"?: string;
		"startDate"?: string;
		"lengthInMinutes"?: number;
		"activities"?: Array<Models.UserScheduleActivity>;
		"delete"?: boolean;
		"manuallyEdited"?: boolean;
	}
	
	export interface UserSchedulesPartialUploadRequest { 
		"userSchedules": { [key: string]: Models.UserSchedule; };
	}
	
	export interface UserSearchCriteria { 
		"endValue"?: string;
		"values"?: Array<string>;
		"startValue"?: string;
		"fields"?: Array<string>;
		"value"?: string;
		"operator"?: string;
		"group"?: Array<Models.UserSearchCriteria>;
		"type": string;
	}
	
	export interface UserSearchRequest { 
		"sortOrder"?: string;
		"sortBy"?: string;
		"pageSize"?: number;
		"pageNumber"?: number;
		"sort"?: Array<Models.SearchSort>;
		"expand"?: Array<string>;
		"query"?: Array<Models.UserSearchCriteria>;
	}
	
	export interface UserSkillEntityListing { 
		"entities"?: Array<Models.UserRoutingSkill>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface UserStation { 
		"id"?: string;
		"name"?: string;
		"type"?: string;
		"associatedUser"?: Models.User;
		"associatedDate"?: string;
		"defaultUser"?: Models.User;
		"providerInfo"?: { [key: string]: string; };
	}
	
	export interface UserStationChangeTopicUser { 
		"id"?: string;
	}
	
	export interface UserStationChangeTopicUserStation { 
		"id"?: string;
		"name"?: string;
		"associatedUser"?: Models.UserStationChangeTopicUser;
	}
	
	export interface UserStationChangeTopicUserStations { 
		"associatedStation"?: Models.UserStationChangeTopicUserStation;
	}
	
	export interface UserStations { 
		"associatedStation"?: Models.UserStation;
		"effectiveStation"?: Models.UserStation;
		"defaultStation"?: Models.UserStation;
		"lastAssociatedStation"?: Models.UserStation;
	}
	
	export interface UserTokensTopicTokenNotification { 
		"user"?: Models.UserTokensTopicUriReference;
		"ipAddress"?: string;
		"dateCreated"?: string;
		"tokenExpirationDate"?: string;
		"sessionId"?: string;
		"clientId"?: string;
		"tokenHash"?: string;
	}
	
	export interface UserTokensTopicUriReference { 
		"id"?: string;
		"name"?: string;
	}
	
	export interface UsersSearchResponse { 
		"total": number;
		"pageCount": number;
		"pageSize": number;
		"pageNumber": number;
		"previousPage"?: string;
		"currentPage"?: string;
		"nextPage"?: string;
		"types": Array<string>;
		"results": Array<Models.User>;
	}
	
	export interface Utilization { 
		"utilization"?: { [key: string]: Models.MediaUtilization; };
	}
	
	export interface ValidateAddressRequest { 
		"address"?: Models.StreetAddress;
	}
	
	export interface ValidateAddressResponse { 
		"valid": boolean;
		"response"?: Models.SubscriberResponse;
	}
	
	export interface ValueWrapperPlanningPeriodSettings { 
		"value"?: Models.PlanningPeriodSettings;
	}
	
	export interface VendorConnectionRequest { 
		"publisher": string;
		"type": string;
		"name": string;
	}
	
	export interface Video { 
		"state"?: string;
		"id"?: string;
		"context"?: string;
		"audioMuted"?: boolean;
		"videoMuted"?: boolean;
		"sharingScreen"?: boolean;
		"peerCount"?: number;
		"disconnectType"?: string;
		"startAlertingTime"?: string;
		"connectedTime"?: string;
		"disconnectedTime"?: string;
		"provider"?: string;
		"peerId"?: string;
		"msids"?: Array<string>;
		"self"?: Models.Address;
	}
	
	export interface ViewFilter { 
		"mediaTypes"?: Array<string>;
		"queueIds"?: Array<string>;
		"skillIds"?: Array<string>;
		"skillGroups"?: Array<string>;
		"languageIds"?: Array<string>;
		"languageGroups"?: Array<string>;
		"directions"?: Array<string>;
		"originatingDirections"?: Array<string>;
		"wrapUpCodes"?: Array<string>;
		"dnisList"?: Array<string>;
		"sessionDnisList"?: Array<string>;
		"filterQueuesByUserIds"?: Array<string>;
		"filterUsersByQueueIds"?: Array<string>;
		"userIds"?: Array<string>;
		"addressTos"?: Array<string>;
		"addressFroms"?: Array<string>;
		"outboundCampaignIds"?: Array<string>;
		"outboundContactListIds"?: Array<string>;
		"contactIds"?: Array<string>;
		"externalContactIds"?: Array<string>;
		"externalOrgIds"?: Array<string>;
		"aniList"?: Array<string>;
		"durationsMilliseconds"?: Array<Models.NumericRange>;
		"acdDurationsMilliseconds"?: Array<Models.NumericRange>;
		"talkDurationsMilliseconds"?: Array<Models.NumericRange>;
		"acwDurationsMilliseconds"?: Array<Models.NumericRange>;
		"handleDurationsMilliseconds"?: Array<Models.NumericRange>;
		"holdDurationsMilliseconds"?: Array<Models.NumericRange>;
		"abandonDurationsMilliseconds"?: Array<Models.NumericRange>;
		"evaluationScore"?: Models.NumericRange;
		"evaluationCriticalScore"?: Models.NumericRange;
		"evaluationFormIds"?: Array<string>;
		"evaluatedAgentIds"?: Array<string>;
		"evaluatorIds"?: Array<string>;
		"transferred"?: boolean;
		"abandoned"?: boolean;
		"answered"?: boolean;
		"messageTypes"?: Array<string>;
		"divisionIds"?: Array<string>;
		"surveyFormIds"?: Array<string>;
		"surveyTotalScore"?: Models.NumericRange;
		"surveyNpsScore"?: Models.NumericRange;
		"mos"?: Models.NumericRange;
		"surveyQuestionGroupScore"?: Models.NumericRange;
		"surveyPromoterScore"?: Models.NumericRange;
		"surveyFormContextIds"?: Array<string>;
		"conversationIds"?: Array<string>;
		"sipCallIds"?: Array<string>;
		"isEnded"?: boolean;
		"isSurveyed"?: boolean;
		"surveyScores"?: Array<Models.NumericRange>;
		"promoterScores"?: Array<Models.NumericRange>;
		"isCampaign"?: boolean;
		"surveyStatuses"?: Array<string>;
		"conversationProperties"?: Models.ConversationProperties;
		"isBlindTransferred"?: boolean;
		"isConsulted"?: boolean;
		"isConsultTransferred"?: boolean;
		"remoteParticipants"?: Array<string>;
		"flowIds"?: Array<string>;
		"flowOutcomeIds"?: Array<string>;
		"flowOutcomeValues"?: Array<string>;
		"flowDestinationTypes"?: Array<string>;
		"flowDisconnectReasons"?: Array<string>;
		"flowTypes"?: Array<string>;
		"flowEntryTypes"?: Array<string>;
		"flowEntryReasons"?: Array<string>;
		"flowVersions"?: Array<string>;
		"groupIds"?: Array<string>;
		"hasJourneyCustomerId"?: boolean;
		"hasJourneyActionMapId"?: boolean;
		"hasJourneyVisitId"?: boolean;
		"hasMedia"?: boolean;
		"roleIds"?: Array<string>;
		"reportsTos"?: Array<string>;
		"locationIds"?: Array<string>;
		"flowOutTypes"?: Array<string>;
		"providerList"?: Array<string>;
	}
	
	export interface VisibilityCondition { 
		"combiningOperation"?: string;
		"predicates"?: Array<object>;
	}
	
	export interface VmPairingInfo { 
		"meta-data"?: Models.MetaData;
		"edge-id"?: string;
		"auth-token"?: string;
		"org-id"?: string;
	}
	
	export interface Voicemail { 
		"id"?: string;
		"uploadStatus"?: string;
	}
	
	export interface VoicemailCopyRecord { 
		"user"?: Models.User;
		"group"?: Models.Group;
		"date"?: string;
	}
	
	export interface VoicemailGroupPolicy { 
		"name"?: string;
		"group"?: Models.Group;
		"enabled"?: boolean;
		"sendEmailNotifications"?: boolean;
		"rotateCallsSecs"?: number;
		"stopRingingAfterRotations"?: number;
		"overflowGroupId"?: string;
		"groupAlertType"?: string;
	}
	
	export interface VoicemailMailboxInfo { 
		"usageSizeBytes"?: number;
		"totalCount"?: number;
		"unreadCount"?: number;
		"deletedCount"?: number;
		"createdDate"?: string;
		"modifiedDate"?: string;
	}
	
	export interface VoicemailMediaInfo { 
		"id"?: string;
		"mediaFileUri"?: string;
		"mediaImageUri"?: string;
		"waveformData"?: Array<number>;
	}
	
	export interface VoicemailMessage { 
		"id"?: string;
		"conversation"?: Models.Conversation;
		"read"?: boolean;
		"audioRecordingDurationSeconds"?: number;
		"audioRecordingSizeBytes"?: number;
		"createdDate"?: string;
		"modifiedDate"?: string;
		"deletedDate"?: string;
		"callerAddress"?: string;
		"callerName"?: string;
		"callerUser"?: Models.User;
		"deleted"?: boolean;
		"note"?: string;
		"user"?: Models.User;
		"group"?: Models.Group;
		"queue"?: Models.Queue;
		"copiedFrom"?: Models.VoicemailCopyRecord;
		"copiedTo"?: Array<Models.VoicemailCopyRecord>;
		"deleteRetentionPolicy"?: Models.VoicemailRetentionPolicy;
		"selfUri"?: string;
	}
	
	export interface VoicemailMessageEntityListing { 
		"entities"?: Array<Models.VoicemailMessage>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface VoicemailMessagesTopicVoicemailMessage { 
		"id"?: string;
		"read"?: boolean;
		"audioRecordingDurationSeconds"?: number;
		"audioRecordingSizeBytes"?: number;
		"createdDate"?: string;
		"modifiedDate"?: string;
		"callerAddress"?: string;
		"callerName"?: string;
		"action"?: string;
		"note"?: string;
		"deleted"?: boolean;
		"modifiedByUserId"?: string;
	}
	
	export interface VoicemailOrganizationPolicy { 
		"enabled"?: boolean;
		"alertTimeoutSeconds"?: number;
		"pinConfiguration"?: Models.PINConfiguration;
		"voicemailExtension"?: string;
		"pinRequired"?: boolean;
		"sendEmailNotifications"?: boolean;
		"modifiedDate"?: string;
	}
	
	export interface VoicemailRetentionPolicy { 
		"voicemailRetentionPolicyType"?: string;
		"numberOfDays"?: number;
	}
	
	export interface VoicemailSearchCriteria { 
		"endValue"?: string;
		"values"?: Array<string>;
		"startValue"?: string;
		"fields"?: Array<string>;
		"value"?: string;
		"operator"?: string;
		"group"?: Array<Models.VoicemailSearchCriteria>;
		"type": string;
	}
	
	export interface VoicemailSearchRequest { 
		"sortOrder"?: string;
		"sortBy"?: string;
		"pageSize"?: number;
		"pageNumber"?: number;
		"sort"?: Array<Models.SearchSort>;
		"expand"?: Array<string>;
		"query"?: Array<Models.VoicemailSearchCriteria>;
	}
	
	export interface VoicemailUserPolicy { 
		"enabled"?: boolean;
		"alertTimeoutSeconds"?: number;
		"pin"?: string;
		"modifiedDate"?: string;
	}
	
	export interface VoicemailsSearchResponse { 
		"total": number;
		"pageCount": number;
		"pageSize": number;
		"pageNumber": number;
		"previousPage"?: string;
		"currentPage"?: string;
		"nextPage"?: string;
		"types": Array<string>;
		"results": Array<Models.VoicemailMessage>;
	}
	
	export interface WebChatConfig { 
		"webChatSkin"?: string;
	}
	
	export interface WebChatConversation { 
		"id"?: string;
		"name"?: string;
		"member"?: Models.WebChatMemberInfo;
		"selfUri"?: string;
	}
	
	export interface WebChatDeployment { 
		"id"?: string;
		"name"?: string;
		"description"?: string;
		"authenticationRequired"?: boolean;
		"authenticationUrl"?: string;
		"disabled"?: boolean;
		"webChatConfig"?: Models.WebChatConfig;
		"allowedDomains"?: Array<string>;
		"flow"?: Models.DomainEntityRef;
		"selfUri"?: string;
	}
	
	export interface WebChatDeploymentEntityListing { 
		"total"?: number;
		"entities"?: Array<Models.WebChatDeployment>;
		"selfUri"?: string;
	}
	
	export interface WebChatGuestMediaRequest { 
		"id"?: string;
		"name"?: string;
		"types": Array<string>;
		"state": string;
		"communicationId"?: string;
		"securityKey"?: string;
		"selfUri"?: string;
	}
	
	export interface WebChatGuestMediaRequestEntityList { 
		"entities"?: Array<Models.WebChatGuestMediaRequest>;
	}
	
	export interface WebChatMemberInfo { 
		"id"?: string;
		"displayName"?: string;
		"avatarImageUrl"?: string;
		"role": string;
		"joinDate"?: string;
		"leaveDate"?: string;
		"authenticatedGuest"?: boolean;
		"customFields"?: { [key: string]: string; };
		"state"?: string;
	}
	
	export interface WebChatMemberInfoEntityList { 
		"entities"?: Array<Models.WebChatMemberInfo>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface WebChatMessage { 
		"id"?: string;
		"name"?: string;
		"conversation": Models.WebChatConversation;
		"sender": Models.WebChatMemberInfo;
		"body": string;
		"bodyType": string;
		"timestamp": string;
		"selfUri"?: string;
	}
	
	export interface WebChatMessageEntityList { 
		"pageSize"?: number;
		"entities"?: Array<Models.WebChatMessage>;
		"previousPage"?: string;
		"next"?: string;
		"selfUri"?: string;
	}
	
	export interface WebChatRoutingTarget { 
		"targetType": string;
		"targetAddress": string;
		"skills"?: Array<string>;
		"language"?: string;
		"priority"?: number;
	}
	
	export interface WebChatSettings { 
		"requireDeployment"?: boolean;
	}
	
	export interface WebChatTyping { 
		"id": string;
		"conversation": Models.WebChatConversation;
		"sender": Models.WebChatMemberInfo;
		"timestamp": string;
	}
	
	export interface WeekSchedule { 
		"id"?: string;
		"selfUri"?: string;
		"weekDate"?: string;
		"description"?: string;
		"published"?: boolean;
		"generationResults"?: Models.WeekScheduleGenerationResult;
		"shortTermForecast"?: Models.ShortTermForecastReference;
		"metadata"?: Models.WfmVersionedEntityMetadata;
		"userSchedules"?: { [key: string]: Models.UserSchedule; };
		"headcountForecast"?: Models.HeadcountForecast;
		"agentSchedulesVersion"?: number;
	}
	
	export interface WeekScheduleGenerationResult { 
		"failed"?: boolean;
		"runId"?: string;
		"agentWarnings"?: Array<Models.ScheduleGenerationWarning>;
		"agentWarningCount"?: number;
	}
	
	export interface WeekScheduleListItemResponse { 
		"id"?: string;
		"selfUri"?: string;
		"weekDate"?: string;
		"description"?: string;
		"published"?: boolean;
		"generationResults"?: Models.WeekScheduleGenerationResult;
		"shortTermForecast"?: Models.ShortTermForecastReference;
		"metadata"?: Models.WfmVersionedEntityMetadata;
	}
	
	export interface WeekScheduleListResponse { 
		"entities"?: Array<Models.WeekScheduleListItemResponse>;
	}
	
	export interface WeekScheduleReference { 
		"id"?: string;
		"selfUri"?: string;
		"weekDate"?: string;
	}
	
	export interface WeekScheduleResponse { 
		"result"?: Models.WeekSchedule;
		"downloadUrl"?: string;
	}
	
	export interface WeekShiftTradeMatchesSummaryResponse { 
		"weekDate"?: string;
		"count"?: number;
	}
	
	export interface WemCoachingAppointmentTopicCoachingAppointmentConversation { 
		"id"?: string;
		"action"?: string;
	}
	
	export interface WemCoachingAppointmentTopicCoachingAppointmentDocument { 
		"id"?: string;
		"action"?: string;
	}
	
	export interface WemCoachingAppointmentTopicCoachingAppointmentNotification { 
		"id"?: string;
		"name"?: string;
		"dateStart"?: string;
		"lengthInMinutes"?: number;
		"status"?: string;
		"facilitator"?: Models.WemCoachingAppointmentTopicUserReference;
		"attendees"?: Array<Models.WemCoachingAppointmentTopicUserReference>;
		"createdBy"?: Models.WemCoachingAppointmentTopicUserReference;
		"dateCreated"?: string;
		"modifiedBy"?: Models.WemCoachingAppointmentTopicUserReference;
		"dateModified"?: string;
		"conversations"?: Array<Models.WemCoachingAppointmentTopicCoachingAppointmentConversation>;
		"documents"?: Array<Models.WemCoachingAppointmentTopicCoachingAppointmentDocument>;
		"changeType"?: string;
	}
	
	export interface WemCoachingAppointmentTopicUserReference { 
		"id"?: string;
	}
	
	export interface WfmAbandonRate { 
		"include": boolean;
		"percent"?: number;
	}
	
	export interface WfmAgent { 
		"id"?: string;
		"user"?: Models.UserReference;
		"workPlan"?: Models.WorkPlanReference;
		"timeZone"?: Models.WfmTimeZone;
		"acceptDirectShiftTrades"?: boolean;
		"metadata"?: Models.WfmVersionedEntityMetadata;
		"queues"?: Array<Models.QueueReference>;
		"languages"?: Array<Models.LanguageReference>;
		"skills"?: Array<Models.RoutingSkillReference>;
		"schedulable"?: boolean;
		"selfUri"?: string;
	}
	
	export interface WfmAgentScheduleUpdateTopicUserReference { 
		"id"?: string;
	}
	
	export interface WfmAgentScheduleUpdateTopicWfmAgentScheduleUpdate { 
		"updateType"?: string;
		"shiftStartDates"?: Array<string>;
	}
	
	export interface WfmAgentScheduleUpdateTopicWfmAgentScheduleUpdateNotification { 
		"user"?: Models.WfmAgentScheduleUpdateTopicUserReference;
		"startDate"?: string;
		"endDate"?: string;
		"shifts"?: Array<Models.WfmAgentScheduleUpdateTopicWfmScheduleShift>;
		"fullDayTimeOffMarkers"?: Array<Models.WfmAgentScheduleUpdateTopicWfmFullDayTimeOffMarker>;
		"updates"?: Array<Models.WfmAgentScheduleUpdateTopicWfmAgentScheduleUpdate>;
	}
	
	export interface WfmAgentScheduleUpdateTopicWfmFullDayTimeOffMarker { 
		"timeOffRequestId"?: string;
		"managementUnitDate"?: string;
		"activityCodeId"?: string;
		"isPaid"?: boolean;
		"lengthInMinutes"?: number;
		"description"?: string;
		"paid"?: boolean;
	}
	
	export interface WfmAgentScheduleUpdateTopicWfmScheduleActivity { 
		"activityCodeId"?: string;
		"startDate"?: string;
		"countsAsPaidTime"?: boolean;
		"lengthInMinutes"?: number;
		"timeOffRequestId"?: string;
		"description"?: string;
	}
	
	export interface WfmAgentScheduleUpdateTopicWfmScheduleShift { 
		"weekDate"?: string;
		"weekScheduleId"?: string;
		"id"?: string;
		"startDate"?: string;
		"lengthInMinutes"?: number;
		"activities"?: Array<Models.WfmAgentScheduleUpdateTopicWfmScheduleActivity>;
	}
	
	export interface WfmAverageSpeedOfAnswer { 
		"include": boolean;
		"seconds"?: number;
	}
	
	export interface WfmBuIntradayDataUpdateTopicBuIntradayDataGroup { 
		"mediaType"?: string;
		"forecastDataSummary"?: Models.WfmBuIntradayDataUpdateTopicBuIntradayForecastData;
		"forecastDataPerInterval"?: Array<Models.WfmBuIntradayDataUpdateTopicBuIntradayForecastData>;
		"scheduleDataSummary"?: Models.WfmBuIntradayDataUpdateTopicBuIntradayScheduleData;
		"scheduleDataPerInterval"?: Array<Models.WfmBuIntradayDataUpdateTopicBuIntradayScheduleData>;
		"performancePredictionDataSummary"?: Models.WfmBuIntradayDataUpdateTopicIntradayPerformancePredictionData;
		"performancePredictionDataPerInterval"?: Array<Models.WfmBuIntradayDataUpdateTopicIntradayPerformancePredictionData>;
	}
	
	export interface WfmBuIntradayDataUpdateTopicBuIntradayForecastData { 
		"offered"?: number;
		"averageHandleTimeSeconds"?: number;
	}
	
	export interface WfmBuIntradayDataUpdateTopicBuIntradayNotification { 
		"operationId"?: string;
		"result"?: Models.WfmBuIntradayDataUpdateTopicBuIntradayResult;
	}
	
	export interface WfmBuIntradayDataUpdateTopicBuIntradayResult { 
		"startDate"?: string;
		"endDate"?: string;
		"intervalLengthMinutes"?: number;
		"intradayDataGroupings"?: Array<Models.WfmBuIntradayDataUpdateTopicBuIntradayDataGroup>;
		"categories"?: Array<string>;
		"noDataReason"?: string;
		"schedule"?: Models.WfmBuIntradayDataUpdateTopicBuScheduleReference;
		"shortTermForecast"?: Models.WfmBuIntradayDataUpdateTopicBuShortTermForecastReference;
	}
	
	export interface WfmBuIntradayDataUpdateTopicBuIntradayScheduleData { 
		"onQueueTimeSeconds"?: number;
	}
	
	export interface WfmBuIntradayDataUpdateTopicBuScheduleReference { 
		"id"?: string;
		"weekDate"?: Models.WfmBuIntradayDataUpdateTopicLocalDate;
	}
	
	export interface WfmBuIntradayDataUpdateTopicBuShortTermForecastReference { 
		"id"?: string;
		"weekDate"?: string;
		"description"?: string;
	}
	
	export interface WfmBuIntradayDataUpdateTopicIntradayPerformancePredictionData { 
		"serviceLevelPercent"?: number;
		"averageSpeedOfAnswerSeconds"?: number;
		"occupancyPercent"?: number;
	}
	
	export interface WfmBuIntradayDataUpdateTopicLocalDate { 
		"year"?: number;
		"month"?: number;
		"day"?: number;
		"leapYear"?: boolean;
	}
	
	export interface WfmBuScheduleQueryResultTopicBuScheduleSearchResultNotification { 
		"operationId"?: string;
		"businessUnitId"?: string;
		"downloadUrl"?: string;
	}
	
	export interface WfmBuScheduleRunTopicBuScheduleReference { 
		"id"?: string;
		"weekDate"?: Models.WfmBuScheduleRunTopicLocalDate;
	}
	
	export interface WfmBuScheduleRunTopicBuScheduleRun { 
		"id"?: string;
		"percentComplete"?: number;
		"intradayRescheduling"?: boolean;
		"state"?: string;
		"weekCount"?: number;
		"schedule"?: Models.WfmBuScheduleRunTopicBuScheduleReference;
		"schedulingCanceledBy"?: Models.WfmBuScheduleRunTopicUserReference;
		"schedulingCompletedTime"?: string;
		"messageCount"?: number;
	}
	
	export interface WfmBuScheduleRunTopicBuSchedulingRunProgressNotification { 
		"status"?: string;
		"operationId"?: string;
		"result"?: Models.WfmBuScheduleRunTopicBuScheduleRun;
	}
	
	export interface WfmBuScheduleRunTopicLocalDate { 
		"year"?: number;
		"month"?: number;
		"day"?: number;
		"leapYear"?: boolean;
	}
	
	export interface WfmBuScheduleRunTopicUserReference { 
		"id"?: string;
	}
	
	export interface WfmBuScheduleSearchResultTopicBuScheduleSearchResultNotification { 
		"operationId"?: string;
		"businessUnitId"?: string;
		"downloadUrl"?: string;
	}
	
	export interface WfmBuScheduleTopicBuManagementUnitScheduleSummary { 
		"managementUnit"?: Models.WfmBuScheduleTopicManagementUnit;
		"startDate"?: string;
		"endDate"?: string;
		"agents"?: Array<Models.WfmBuScheduleTopicUserReference>;
		"agentCount"?: number;
	}
	
	export interface WfmBuScheduleTopicBuScheduleGenerationResultSummary { 
		"failed"?: boolean;
		"runId"?: string;
		"messageCount"?: number;
	}
	
	export interface WfmBuScheduleTopicBuScheduleMetadata { 
		"id"?: string;
		"weekDate"?: Models.WfmBuScheduleTopicLocalDate;
		"weekCount"?: number;
		"description"?: string;
		"published"?: boolean;
		"shortTermForecast"?: Models.WfmBuScheduleTopicBuShortTermForecastReference;
		"managementUnits"?: Array<Models.WfmBuScheduleTopicBuManagementUnitScheduleSummary>;
		"generationResults"?: Models.WfmBuScheduleTopicBuScheduleGenerationResultSummary;
		"metadata"?: Models.WfmBuScheduleTopicWfmVersionedEntityMetadata;
	}
	
	export interface WfmBuScheduleTopicBuScheduleNotification { 
		"status"?: string;
		"operationId"?: string;
		"eventType"?: string;
		"result"?: Models.WfmBuScheduleTopicBuScheduleMetadata;
	}
	
	export interface WfmBuScheduleTopicBuShortTermForecastReference { 
		"id"?: string;
		"weekDate"?: string;
		"description"?: string;
	}
	
	export interface WfmBuScheduleTopicLocalDate { 
		"year"?: number;
		"month"?: number;
		"day"?: number;
		"leapYear"?: boolean;
	}
	
	export interface WfmBuScheduleTopicManagementUnit { 
		"id"?: string;
	}
	
	export interface WfmBuScheduleTopicUserReference { 
		"id"?: string;
	}
	
	export interface WfmBuScheduleTopicWfmVersionedEntityMetadata { 
		"version"?: number;
		"modifiedBy"?: Models.WfmBuScheduleTopicUserReference;
		"dateModified"?: string;
	}
	
	export interface WfmBulkShiftTradeStateUpdateNotificationTopicBulkShiftTradeStateUpdateNotification { 
		"status"?: string;
		"operationId"?: string;
		"result"?: Models.WfmBulkShiftTradeStateUpdateNotificationTopicBulkShiftTradeStateUpdateResultListing;
		"weekDate"?: Models.WfmBulkShiftTradeStateUpdateNotificationTopicLocalDate;
	}
	
	export interface WfmBulkShiftTradeStateUpdateNotificationTopicBulkShiftTradeStateUpdateResult { 
		"id"?: string;
		"state"?: string;
		"reviewedBy"?: Models.WfmBulkShiftTradeStateUpdateNotificationTopicUserReference;
		"reviewedDate"?: string;
		"failureReason"?: string;
		"metadata"?: Models.WfmBulkShiftTradeStateUpdateNotificationTopicWfmVersionedEntityMetadata;
	}
	
	export interface WfmBulkShiftTradeStateUpdateNotificationTopicBulkShiftTradeStateUpdateResultListing { 
		"entities"?: Array<Models.WfmBulkShiftTradeStateUpdateNotificationTopicBulkShiftTradeStateUpdateResult>;
	}
	
	export interface WfmBulkShiftTradeStateUpdateNotificationTopicLocalDate { 
		"year"?: number;
		"month"?: number;
		"day"?: number;
		"leapYear"?: boolean;
	}
	
	export interface WfmBulkShiftTradeStateUpdateNotificationTopicUserReference { 
		"id"?: string;
	}
	
	export interface WfmBulkShiftTradeStateUpdateNotificationTopicWfmVersionedEntityMetadata { 
		"version"?: number;
		"modifiedBy"?: Models.WfmBulkShiftTradeStateUpdateNotificationTopicUserReference;
		"dateModified"?: string;
	}
	
	export interface WfmForecastModification { 
		"type": string;
		"startIntervalIndex"?: number;
		"endIntervalIndex"?: number;
		"metric": string;
		"value"?: number;
		"values"?: Array<Models.WfmForecastModificationIntervalOffsetValue>;
		"enabled": boolean;
		"attributes": Models.WfmForecastModificationAttributes;
	}
	
	export interface WfmForecastModificationAttributes { 
		"queues"?: Array<Models.QueueReference>;
		"mediaTypes"?: Array<string>;
		"languages"?: Array<Models.LanguageReference>;
		"skillSets"?: Array<Array<Models.RoutingSkillReference>>;
	}
	
	export interface WfmForecastModificationIntervalOffsetValue { 
		"intervalIndex": number;
		"value": number;
	}
	
	export interface WfmHistoricalAdherenceCalculationsCompleteTopicWfmHistoricalAdherenceCalculationsCompleteNotice { 
		"id"?: string;
		"downloadUrl"?: string;
		"downloadUrls"?: Array<string>;
		"queryState"?: string;
	}
	
	export interface WfmHistoricalAdherenceQuery { 
		"startDate": string;
		"endDate"?: string;
		"timeZone"?: string;
		"userIds"?: Array<string>;
		"includeExceptions"?: boolean;
	}
	
	export interface WfmHistoricalAdherenceQueryForUsers { 
		"startDate": string;
		"endDate"?: string;
		"timeZone": string;
		"userIds": Array<string>;
		"includeExceptions"?: boolean;
	}
	
	export interface WfmHistoricalAdherenceResponse { 
		"id"?: string;
		"downloadUrl"?: string;
		"downloadUrls"?: Array<string>;
		"queryState"?: string;
	}
	
	export interface WfmIntradayDataUpdateTopicIntradayDataGroup { 
		"mediaType"?: string;
		"forecastDataPerInterval"?: Array<Models.WfmIntradayDataUpdateTopicIntradayForecastData>;
		"scheduleDataPerInterval"?: Array<Models.WfmIntradayDataUpdateTopicIntradayScheduleData>;
		"historicalAgentDataPerInterval"?: Array<Models.WfmIntradayDataUpdateTopicIntradayHistoricalAgentData>;
		"historicalQueueDataPerInterval"?: Array<Models.WfmIntradayDataUpdateTopicIntradayHistoricalQueueData>;
		"performancePredictionAgentDataPerInterval"?: Array<Models.WfmIntradayDataUpdateTopicIntradayPerformancePredictionAgentData>;
		"performancePredictionQueueDataPerInterval"?: Array<Models.WfmIntradayDataUpdateTopicIntradayPerformancePredictionQueueData>;
	}
	
	export interface WfmIntradayDataUpdateTopicIntradayDataUpdate { 
		"startDate"?: string;
		"endDate"?: string;
		"intervalLengthMinutes"?: number;
		"numberOfIntervals"?: number;
		"metrics"?: Array<Models.WfmIntradayDataUpdateTopicIntradayMetric>;
		"queueIds"?: Array<string>;
		"intradayDataGroupings"?: Array<Models.WfmIntradayDataUpdateTopicIntradayDataGroup>;
	}
	
	export interface WfmIntradayDataUpdateTopicIntradayForecastData { 
		"offered"?: number;
		"averageTalkTimeSeconds"?: number;
		"averageAfterCallWorkSeconds"?: number;
	}
	
	export interface WfmIntradayDataUpdateTopicIntradayHistoricalAgentData { 
		"onQueueTimeSeconds"?: number;
		"interactingTimeSeconds"?: number;
	}
	
	export interface WfmIntradayDataUpdateTopicIntradayHistoricalQueueData { 
		"offered"?: number;
		"completed"?: number;
		"answered"?: number;
		"abandoned"?: number;
		"averageTalkTimeSeconds"?: number;
		"averageAfterCallWorkSeconds"?: number;
		"serviceLevelPercent"?: number;
		"averageSpeedOfAnswerSeconds"?: number;
	}
	
	export interface WfmIntradayDataUpdateTopicIntradayMetric { 
		"category"?: string;
		"version"?: string;
	}
	
	export interface WfmIntradayDataUpdateTopicIntradayPerformancePredictionAgentData { 
		"interactingTimeSeconds"?: number;
	}
	
	export interface WfmIntradayDataUpdateTopicIntradayPerformancePredictionQueueData { 
		"serviceLevelPercent"?: number;
		"averageSpeedOfAnswerSeconds"?: number;
		"numberOfInteractions"?: number;
	}
	
	export interface WfmIntradayDataUpdateTopicIntradayScheduleData { 
		"onQueueTimeSeconds"?: number;
		"scheduledTimeSeconds"?: number;
	}
	
	export interface WfmIntradayQueueListing { 
		"entities"?: Array<Models.IntradayQueue>;
		"noDataReason"?: string;
	}
	
	export interface WfmMoveAgentsCompleteTopicManagementUnit { 
		"id"?: string;
	}
	
	export interface WfmMoveAgentsCompleteTopicUserReference { 
		"id"?: string;
	}
	
	export interface WfmMoveAgentsCompleteTopicWfmMoveAgentData { 
		"user"?: Models.WfmMoveAgentsCompleteTopicUserReference;
		"result"?: string;
	}
	
	export interface WfmMoveAgentsCompleteTopicWfmMoveAgentsComplete { 
		"requestingUser"?: Models.WfmMoveAgentsCompleteTopicUserReference;
		"destinationManagementUnit"?: Models.WfmMoveAgentsCompleteTopicManagementUnit;
		"results"?: Array<Models.WfmMoveAgentsCompleteTopicWfmMoveAgentData>;
	}
	
	export interface WfmMoveManagementUnitTopicBusinessUnit { 
		"id"?: string;
	}
	
	export interface WfmMoveManagementUnitTopicMoveManagementUnitNotification { 
		"businessUnit"?: Models.WfmMoveManagementUnitTopicBusinessUnit;
		"status"?: string;
	}
	
	export interface WfmScheduleTopicWfmScheduleNotification { 
		"status"?: string;
		"operationId"?: string;
		"downloadUrl"?: string;
		"percentComplete"?: number;
		"eventType"?: string;
	}
	
	export interface WfmServiceLevel { 
		"include": boolean;
		"percent"?: number;
		"seconds"?: number;
	}
	
	export interface WfmTimeOffRequestUpdateTopicTimeOffRequestUpdate { 
		"id"?: string;
		"user"?: Models.WfmTimeOffRequestUpdateTopicUserReference;
		"isFullDayRequest"?: boolean;
		"markedAsRead"?: boolean;
		"activityCodeId"?: string;
		"status"?: string;
		"partialDayStartDateTimes"?: Array<string>;
		"fullDayManagementUnitDates"?: Array<string>;
		"dailyDurationMinutes"?: number;
		"notes"?: string;
		"reviewedDate"?: string;
		"reviewedBy"?: string;
		"submittedDate"?: string;
		"submittedBy"?: string;
		"modifiedDate"?: string;
		"modifiedBy"?: string;
	}
	
	export interface WfmTimeOffRequestUpdateTopicUserReference { 
		"id"?: string;
	}
	
	export interface WfmTimeZone { 
		"id"?: string;
	}
	
	export interface WfmUpdateAgentDetailsTopicWfmUpdateAgentDetailsComplete { 
		"status"?: string;
	}
	
	export interface WfmUserEntityListing { 
		"entities"?: Array<Models.User>;
	}
	
	export interface WfmUserNotification { 
		"id": string;
		"mutableGroupId": string;
		"timestamp"?: string;
		"type"?: string;
		"shiftTrade"?: Models.ShiftTradeNotification;
		"timeOffRequest"?: Models.TimeOffRequestNotification;
		"markedAsRead": boolean;
		"agentNotification"?: boolean;
		"otherNotificationIdsInGroup"?: Array<string>;
	}
	
	export interface WfmUserNotificationTopicShiftTradeNotification { 
		"weekDate"?: string;
		"tradeId"?: string;
		"oneSided"?: boolean;
		"newState"?: string;
		"initiatingUser"?: Models.WfmUserNotificationTopicUserReference;
		"initiatingShiftDate"?: string;
		"receivingUser"?: Models.WfmUserNotificationTopicUserReference;
		"receivingShiftDate"?: string;
	}
	
	export interface WfmUserNotificationTopicTimeOffRequestNotification { 
		"timeOffRequestId"?: string;
		"user"?: Models.WfmUserNotificationTopicUserReference;
		"isFullDayRequest"?: boolean;
		"status"?: string;
		"partialDayStartDateTimes"?: Array<string>;
		"fullDayManagementUnitDates"?: Array<string>;
	}
	
	export interface WfmUserNotificationTopicUserReference { 
		"id"?: string;
	}
	
	export interface WfmUserNotificationTopicWfmUserNotification { 
		"id"?: string;
		"mutableGroupId"?: string;
		"timestamp"?: string;
		"type"?: string;
		"shiftTrade"?: Models.WfmUserNotificationTopicShiftTradeNotification;
		"timeOffRequest"?: Models.WfmUserNotificationTopicTimeOffRequestNotification;
		"agentNotification"?: boolean;
		"otherNotificationIdsInGroup"?: Array<string>;
		"markedAsRead"?: boolean;
	}
	
	export interface WfmUserScheduleAdherenceUpdatedMuTopicQueueReference { 
		"id"?: string;
	}
	
	export interface WfmUserScheduleAdherenceUpdatedMuTopicUserReference { 
		"id"?: string;
	}
	
	export interface WfmUserScheduleAdherenceUpdatedMuTopicUserScheduleAdherenceUpdate { 
		"user"?: Models.WfmUserScheduleAdherenceUpdatedMuTopicUserReference;
		"managementUnitId"?: string;
		"scheduledActivityCategory"?: string;
		"systemPresence"?: string;
		"organizationSecondaryPresenceId"?: string;
		"routingStatus"?: string;
		"actualActivityCategory"?: string;
		"isOutOfOffice"?: boolean;
		"adherenceState"?: string;
		"impact"?: string;
		"adherenceChangeTime"?: string;
		"presenceUpdateTime"?: string;
		"activeQueues"?: Array<Models.WfmUserScheduleAdherenceUpdatedMuTopicQueueReference>;
		"activeQueuesModifiedTime"?: string;
		"removedFromManagementUnit"?: boolean;
	}
	
	export interface WfmUserScheduleAdherenceUpdatedTopicQueueReference { 
		"id"?: string;
	}
	
	export interface WfmUserScheduleAdherenceUpdatedTopicUserReference { 
		"id"?: string;
	}
	
	export interface WfmUserScheduleAdherenceUpdatedTopicUserScheduleAdherenceUpdate { 
		"user"?: Models.WfmUserScheduleAdherenceUpdatedTopicUserReference;
		"managementUnitId"?: string;
		"scheduledActivityCategory"?: string;
		"systemPresence"?: string;
		"organizationSecondaryPresenceId"?: string;
		"routingStatus"?: string;
		"actualActivityCategory"?: string;
		"isOutOfOffice"?: boolean;
		"adherenceState"?: string;
		"impact"?: string;
		"adherenceChangeTime"?: string;
		"presenceUpdateTime"?: string;
		"activeQueues"?: Array<Models.WfmUserScheduleAdherenceUpdatedTopicQueueReference>;
		"activeQueuesModifiedTime"?: string;
		"removedFromManagementUnit"?: boolean;
	}
	
	export interface WfmVersionedEntityMetadata { 
		"version": number;
		"modifiedBy"?: Models.UserReference;
		"dateModified"?: string;
	}
	
	export interface WhatsAppDefinition { 
		"name": string;
		"namespace": string;
		"language": string;
	}
	
	export interface WhatsAppId { 
		"phoneNumber"?: Models.PhoneNumber;
		"displayName"?: string;
	}
	
	export interface WhatsAppIntegration { 
		"id": string;
		"name": string;
		"phoneNumber": string;
		"status"?: string;
		"recipient"?: Models.DomainEntityRef;
		"dateCreated"?: string;
		"dateModified"?: string;
		"createdBy"?: Models.DomainEntityRef;
		"modifiedBy"?: Models.DomainEntityRef;
		"version": number;
		"activationStatusCode"?: string;
		"activationErrorInfo"?: Models.ErrorBody;
		"selfUri"?: string;
	}
	
	export interface WhatsAppIntegrationEntityListing { 
		"entities"?: Array<Models.WhatsAppIntegration>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface WhatsAppIntegrationRequest { 
		"id"?: string;
		"name": string;
		"phoneNumber": string;
		"wabaCertificate": string;
		"selfUri"?: string;
	}
	
	export interface WhatsAppIntegrationUpdateRequest { 
		"id"?: string;
		"name"?: string;
		"action": string;
		"authenticationMethod"?: string;
		"confirmationCode"?: string;
		"selfUri"?: string;
	}
	
	export interface WidgetClientConfig { 
		"v1"?: Models.WidgetClientConfigV1;
		"v2"?: Models.WidgetClientConfigV2;
		"v1-http"?: Models.WidgetClientConfigV1Http;
		"third-party"?: Models.WidgetClientConfigThirdParty;
	}
	
	export interface WidgetClientConfigThirdParty { 
	}
	
	export interface WidgetClientConfigV1 { 
		"webChatSkin"?: string;
		"authenticationUrl"?: string;
	}
	
	export interface WidgetClientConfigV1Http { 
		"webChatSkin"?: string;
		"authenticationUrl"?: string;
	}
	
	export interface WidgetClientConfigV2 { 
	}
	
	export interface WidgetDeployment { 
		"id"?: string;
		"name"?: string;
		"description"?: string;
		"authenticationRequired"?: boolean;
		"disabled"?: boolean;
		"flow"?: Models.DomainEntityRef;
		"allowedDomains"?: Array<string>;
		"clientType"?: string;
		"clientConfig"?: Models.WidgetClientConfig;
		"selfUri"?: string;
	}
	
	export interface WidgetDeploymentEntityListing { 
		"total"?: number;
		"entities"?: Array<Models.WidgetDeployment>;
		"selfUri"?: string;
	}
	
	export interface WorkPlan { 
		"id"?: string;
		"name"?: string;
		"enabled"?: boolean;
		"constrainWeeklyPaidTime"?: boolean;
		"flexibleWeeklyPaidTime"?: boolean;
		"weeklyExactPaidMinutes"?: number;
		"weeklyMinimumPaidMinutes"?: number;
		"weeklyMaximumPaidMinutes"?: number;
		"constrainPaidTimeGranularity"?: boolean;
		"paidTimeGranularityMinutes"?: number;
		"constrainMinimumTimeBetweenShifts"?: boolean;
		"minimumTimeBetweenShiftsMinutes"?: number;
		"maximumDays"?: number;
		"minimumWorkingDaysPerWeek"?: number;
		"optionalDays"?: Models.SetWrapperDayOfWeek;
		"shiftStartVariances"?: Models.ListWrapperShiftStartVariance;
		"shifts"?: Array<Models.WorkPlanShift>;
		"agents"?: Array<Models.DeletableUserReference>;
		"metadata": Models.WfmVersionedEntityMetadata;
		"selfUri"?: string;
	}
	
	export interface WorkPlanActivity { 
		"activityCodeId"?: string;
		"description"?: string;
		"lengthMinutes"?: number;
		"startTimeIsRelativeToShiftStart"?: boolean;
		"flexibleStartTime"?: boolean;
		"earliestStartTimeMinutes"?: number;
		"latestStartTimeMinutes"?: number;
		"exactStartTimeMinutes"?: number;
		"startTimeIncrementMinutes"?: number;
		"countsAsPaidTime"?: boolean;
		"countsAsContiguousWorkTime"?: boolean;
		"id"?: string;
		"delete"?: boolean;
	}
	
	export interface WorkPlanListItemResponse { 
		"id"?: string;
		"name"?: string;
		"enabled"?: boolean;
		"constrainWeeklyPaidTime"?: boolean;
		"flexibleWeeklyPaidTime"?: boolean;
		"weeklyExactPaidMinutes"?: number;
		"weeklyMinimumPaidMinutes"?: number;
		"weeklyMaximumPaidMinutes"?: number;
		"constrainPaidTimeGranularity"?: boolean;
		"paidTimeGranularityMinutes"?: number;
		"constrainMinimumTimeBetweenShifts"?: boolean;
		"minimumTimeBetweenShiftsMinutes"?: number;
		"maximumDays"?: number;
		"minimumWorkingDaysPerWeek"?: number;
		"optionalDays"?: Models.SetWrapperDayOfWeek;
		"shiftStartVariances"?: Models.ListWrapperShiftStartVariance;
		"shifts"?: Array<Models.WorkPlanShift>;
		"agents"?: Array<Models.DeletableUserReference>;
		"metadata": Models.WfmVersionedEntityMetadata;
		"agentCount"?: number;
		"selfUri"?: string;
	}
	
	export interface WorkPlanListResponse { 
		"entities"?: Array<Models.WorkPlanListItemResponse>;
	}
	
	export interface WorkPlanReference { 
		"id"?: string;
		"managementUnit"?: Models.ManagementUnitReference;
		"selfUri"?: string;
	}
	
	export interface WorkPlanShift { 
		"name": string;
		"days"?: Models.SetWrapperDayOfWeek;
		"flexibleStartTime"?: boolean;
		"exactStartTimeMinutesFromMidnight"?: number;
		"earliestStartTimeMinutesFromMidnight"?: number;
		"latestStartTimeMinutesFromMidnight"?: number;
		"constrainStopTime"?: boolean;
		"constrainLatestStopTime"?: boolean;
		"latestStopTimeMinutesFromMidnight"?: number;
		"startIncrementMinutes"?: number;
		"flexiblePaidTime"?: boolean;
		"exactPaidTimeMinutes"?: number;
		"minimumPaidTimeMinutes"?: number;
		"maximumPaidTimeMinutes"?: number;
		"constrainContiguousWorkTime"?: boolean;
		"minimumContiguousWorkTimeMinutes"?: number;
		"maximumContiguousWorkTimeMinutes"?: number;
		"activities"?: Array<Models.WorkPlanActivity>;
		"id"?: string;
		"delete"?: boolean;
	}
	
	export interface Workspace { 
		"id"?: string;
		"name": string;
		"type"?: string;
		"isCurrentUserWorkspace"?: boolean;
		"user"?: Models.DomainEntityRef;
		"bucket"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"summary"?: Models.WorkspaceSummary;
		"acl"?: Array<string>;
		"description"?: string;
		"selfUri"?: string;
	}
	
	export interface WorkspaceCreate { 
		"name": string;
		"bucket"?: string;
		"description"?: string;
	}
	
	export interface WorkspaceEntityListing { 
		"entities"?: Array<Models.Workspace>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface WorkspaceMember { 
		"id"?: string;
		"name"?: string;
		"workspace"?: Models.DomainEntityRef;
		"memberType": string;
		"member"?: Models.DomainEntityRef;
		"user"?: Models.User;
		"group"?: Models.Group;
		"securityProfile"?: Models.SecurityProfile;
		"selfUri"?: string;
	}
	
	export interface WorkspaceMemberEntityListing { 
		"entities"?: Array<Models.WorkspaceMember>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface WorkspaceSummary { 
		"totalDocumentCount"?: number;
		"totalDocumentByteCount"?: number;
	}
	
	export interface WrapUpCodeMapping { 
		"id"?: string;
		"name"?: string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"version"?: number;
		"defaultSet"?: Array<string>;
		"mapping"?: { [key: string]: Array<string>; };
		"selfUri"?: string;
	}
	
	export interface WrapUpCodeReference { 
		"id"?: string;
	}
	
	export interface Wrapup { 
		"code"?: string;
		"name"?: string;
		"notes"?: string;
		"tags"?: Array<string>;
		"durationSeconds"?: number;
		"endTime"?: string;
		"provisional"?: boolean;
	}
	
	export interface WrapupCode { 
		"id"?: string;
		"name": string;
		"dateCreated"?: string;
		"dateModified"?: string;
		"modifiedBy"?: string;
		"createdBy"?: string;
		"selfUri"?: string;
	}
	
	export interface WrapupCodeEntityListing { 
		"entities"?: Array<Models.WrapupCode>;
		"pageSize"?: number;
		"pageNumber"?: number;
		"total"?: number;
		"firstUri"?: string;
		"selfUri"?: string;
		"nextUri"?: string;
		"lastUri"?: string;
		"previousUri"?: string;
		"pageCount"?: number;
	}
	
	export interface WritableDialerContact { 
		"id"?: string;
		"contactListId": string;
		"data": { [key: string]: object; };
		"callable"?: boolean;
		"phoneNumberStatus"?: { [key: string]: Models.PhoneNumberStatus; };
	}
	
	export interface WritableDivision { 
		"id"?: string;
		"name"?: string;
		"selfUri"?: string;
	}
	
	export interface WritableEntity { 
		"id"?: string;
	}
	
}
