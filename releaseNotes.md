Platform API version: 7379




# Major Changes (52 changes)

**GET /api/v2/users/{subjectId}/roles** (2 changes)

* Parameter enforceLicenses was added
* Parameter lookupGroups was added

**POST /api/v2/recording/crossplatform/mediaretentionpolicies** (1 change)

* Parameter expand was added

**GET /api/v2/recording/crossplatform/mediaretentionpolicies/{policyId}** (1 change)

* Parameter expand was added

**PUT /api/v2/recording/crossplatform/mediaretentionpolicies/{policyId}** (1 change)

* Parameter expand was added

**PATCH /api/v2/recording/crossplatform/mediaretentionpolicies/{policyId}** (1 change)

* Parameter expand was added

**POST /api/v2/recording/mediaretentionpolicies** (1 change)

* Parameter expand was added

**GET /api/v2/recording/mediaretentionpolicies/{policyId}** (1 change)

* Parameter expand was added

**PUT /api/v2/recording/mediaretentionpolicies/{policyId}** (1 change)

* Parameter expand was added

**PATCH /api/v2/recording/mediaretentionpolicies/{policyId}** (1 change)

* Parameter expand was added

**DELETE /api/v2/externalcontacts/contacts/schemas/{schemaId}** (1 change)

* Parameter hardDelete was added

**GET /api/v2/outbound/contactlistfilters** (1 change)

* Parameter sourceType was added

**GET /api/v2/outbound/dnclists/divisionviews** (1 change)

* Parameter contactMethod was added

**POST /api/v2/outbound/dnclists/{dncListId}/emailaddresses** (1 change)

* Parameter expirationDateTime was added

**GET /api/v2/outbound/dnclists** (1 change)

* Parameter contactMethod was added

**GET /api/v2/outbound/messagingcampaigns/divisionviews** (2 changes)

* Parameter contentTemplateId was added
* Parameter campaignStatus was added

**GET /api/v2/outbound/messagingcampaigns** (2 changes)

* Parameter contentTemplateId was added
* Parameter campaignStatus was added

**GET /api/v2/knowledge/guest/sessions/{sessionId}/documents/{documentId}** (1 change)

* Parameter useContext was added

**GET /api/v2/knowledge/guest/sessions/{sessionId}/documents** (7 changes)

* Parameter before was added
* Parameter after was added
* Parameter pageNumber was added
* Parameter sortBy was added
* Parameter sortOrder was added
* Parameter useContext was added
* Parameter expand was added

**GET /api/v2/notifications/channels** (1 change)

* Parameter connectionType was added

**POST /api/v2/notifications/channels** (1 change)

* Parameter connectionType was added

**GET /api/v2/quality/agents/activity** (1 change)

* Parameter agentTeamId was added

**GET /api/v2/quality/evaluations/query** (1 change)

* Parameter agentTeamId was added

**GET /api/v2/quality/evaluators/activity** (1 change)

* Parameter agentTeamId was added

**DELETE /api/v2/routing/wrapupcodes/{codeId}** (1 change)

* Parameter hardDelete was added

**GET /api/v2/speechandtextanalytics/topics** (1 change)

* Parameter dialects was added

**GET /api/v2/telephony/providers/edges/extensionpools** (1 change)

* Parameter divisionId was added

**GET /api/v2/telephony/providers/edges/extensions** (1 change)

* Parameter divisionId was added

**GET /api/v2/architect/emergencygroups** (1 change)

* Parameter divisionId was added

**GET /api/v2/architect/ivrs** (1 change)

* Parameter divisionId was added

**POST /api/v2/learning/assignments/{assignmentId}/reassign** (1 change)

* Parameter body was added

**GET /api/v2/learning/modules** (1 change)

* Parameter externalIds was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes** (1 change)

* Parameter forceDownloadService was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/intraday** (1 change)

* Parameter useMockExternalData was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/data** (1 change)

* Parameter doNotApplyModifications was added

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/longtermforecastdata** (1 change)

* Parameter doNotApplyModifications was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/query** (1 change)

* Parameter forceDownloadService was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades** (1 change)

* Parameter forceDownloadService was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/search** (1 change)

* Parameter forceDownloadService was added

**DirectRoutingCallMediaSettings** (1 change)

* Model DirectRoutingCallMediaSettings was removed

**DirectRouting** (1 change)

* Property callMediaSettings was changed from DirectRoutingCallMediaSettings to DirectRoutingMediaSettings

**DirectRoutingMediaSettings** (2 changes)

* Property enabled was removed
* Property inboundFlow was removed

**MediaEndpointStatistics** (1 change)

* Property trunk was changed from NamedEntity to MediaStatisticsTrunkInfo


# Minor Changes (2891 changes)

**/api/v2/authorization/policies/targets/{targetName}** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation PUT was added

**/api/v2/authorization/policies/targets/{targetName}/validate** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/authorization/policies/targets/{targetName}/subject/{subjectId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/authorization/policies** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/authorization/policies/subject/{subjectId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/authorization/policies/{policyId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/authorization/policies/targets** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/featuretoggles** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/settings** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/apps/agentui/agents/autoanswer/{agentId}/settings** (5 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/apps/agentui/panels/settings** (5 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/apps/agentui/panels** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/apps/agentui/panels/queues/{queueId}/settings** (5 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/analytics/flowexecutions/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/flowexecutions/aggregates/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/flowexecutions/aggregates/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/analytics/flowexecutions/aggregates/jobs/{jobId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/analytics/ratelimits/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/resolutions/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/botflows/{botFlowId}/sessions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/analytics/reporting/settings/dashboards/{dashboardId}** (5 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/analytics/reporting/settings/dashboards/bulk/remove** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/reporting/settings/dashboards/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/reporting/settings/dashboards** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/analytics/reporting/dashboards/users/{userId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/analytics/reporting/dashboards/users/bulk/remove** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/reporting/dashboards/users** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/analytics/reporting/settings/insights** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/analytics/reporting/settings/tabconfigurations/{tabId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/analytics/reporting/settings/tabconfigurations/bulk** (3 changes)

* Path was added
* Operation POST was added
* Operation PUT was added

**/api/v2/analytics/reporting/settings/tabconfigurations/bulk/remove** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/reporting/settings/tabconfigurations** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/analytics/reporting/settings/users/{userId}/dashboards** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/analytics/reporting/settings/viewconfigurations/{viewId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/analytics/reporting/settings/viewconfigurations** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/analytics/reporting/exports/{exportId}/history** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/analytics/reporting/exports/{exportId}/history/latest** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/analytics/reporting/exports/{exportId}/history/{runId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/analytics/reporting/exports/all** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/analytics/reporting/exports/{exportId}** (5 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/analytics/reporting/exports/{exportId}/schedule** (3 changes)

* Path was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/analytics/reporting/exports/{exportId}/execute** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/reporting/exports/schedule** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/analytics/reporting/exports/schedule/summary** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/apps/permissionbundles** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/apps/legacy/images/{imageId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/apps/legacy/images/hash/{imageHashId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/apps/legacy/images** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/apps/legacy/images/{imageId}/link/{entityType}/{entityId}/{targetField}** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/apps/legacy/session** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/apps/session** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/apps/users/{userId}/logout** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/assistants/{assistantId}/queues/{queueId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/assistants/{assistantId}/queues** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/assistants/{assistantId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/assistants** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/assistants/queues** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/audits/query/realtime/trustor/{trustorOrgId}** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/authorization/products/{productId}** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/authorization/roles/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/processautomation/flows/instances/commands/search** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/processautomation/flows/instances/{instanceId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/processautomation/flows/definitions/{flowId}/versions/{versionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/screenrecording/token** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/badges/chats** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/badges/chats/{jabberId}** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/billing/accounts/{accountId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/billing/reports/billableusagedata/{reportId}/csv** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/billing/activations/{billingActivationJobId}** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/billing/periods** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/billing/tasks/{taskId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/billing/reports/concurrentusagedata/{reportId}/csv** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/billing/account** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/billing/freetrial** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/billing/reports/hourlylicenseusagedata/{reportId}/csv** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/billing/invoices/{invoiceId}/pdf** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/billing/invoices/{invoiceId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/billing/invoices** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/billing/premise/uploadurl** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/billing/premise/licensestatus** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/billing/premiumapplistings/{appId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/billing/premiumapptrials** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/billing/carrierservices/usage/calls/csv** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/billing/carrierservices/usage/calls** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/billing/reports/resourcesusagedata/{reportId}/csv** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/billing/subscriptionoverview** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/billing/subscriptionproductactivations** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/billing/subscriptionproductcancellations** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/billing/vendorusage/organizations/{organizationId}** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/billing/vendorusage/organizations** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/bridge/useractions/categories** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/bridge/useractions/metadata/{actionName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/bridge/useractions/metadata** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/sortweights/info** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/supportedcountries/{countryCode}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/supportedcountries** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/billing/bandwidthcurrencypricing/{currencyName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/billing/bandwidthcurrencypricing** (3 changes)

* Path was added
* Operation POST was added
* Operation PUT was added

**/api/v2/carrierservices/billing/bandwidthpricing/{customerId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/billing/bandwidthpricing** (3 changes)

* Path was added
* Operation POST was added
* Operation PUT was added

**/api/v2/carrierservices/billing/monthlyrecurringcost/{mrcId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/billing/nonrecurringcost** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/carrierservices/billing/nonrecurringcost/{nrcId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/billing/bills** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/carrierservices/billing/bills/{billId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/billing/monthlyrecurringcost** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/carrierservices/billing/numberrates** (5 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/carrierservices/billing/usagepricing/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/carrierservices/billing/usagerateregions** (5 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/carrierservices/carriers/{carrierId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/carrierservices/carriers/20190123/carriers/{carrierId}** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/carrierservices/carriers** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/carrierservices/carriers/{carrierId}/services/{serviceId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/carrierservices/carriers/20190123/carriers/{carrierId}/services/{serviceId}** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/carrierservices/carriers/{carrierId}/services** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/carrierservices/cdrs/generate/files** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/carrierservices/cdrs/backups/list** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/carrierservices/cdrs/backups/list/{resultId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/cdrs/backup** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/carrierservices/cdrs/backup/{resultId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/cdrs/restore** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/carrierservices/integrations/emergencylocations/me** (1 change)

* Operation delete was added. Summary: Clear current emergency location for the logged in user

**/api/v2/carrierservices/integrations/emergencylocations/verifyphonenumber** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/carrierservices/numberinventory/inventorynumbers/available** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numberinventory/inventorynumbers/bulk** (4 changes)

* Path was added
* Operation POST was added
* Operation PUT was added
* Operation PATCH was added

**/api/v2/carrierservices/numberinventory/inventorynumbers/{phoneNumberId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation PATCH was added

**/api/v2/carrierservices/numberinventory/servicecapabilities/descriptions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numberinventory/servicecapabilities** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numberinventory/inventorynumbers** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/carrierservices/numberpurchase/portrequests/{portRequestId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/carrierservices/numbermanagement/portrequests/tasks/{taskId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numbermanagement/portrequests/tasks/{taskId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numbermanagement/portrequests/tasks** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/carrierservices/numbermanagement/portrequests/disconnect/tasks** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/carrierservices/numbermanagement/portrequests/disconnect/tasks/{taskId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numbermanagement/portrequests/disconnect/tasks/{taskId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numbermanagement/portrequest/tasks/{portRequestId}/effectivedate** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/carrierservices/numbermanagement/portrequest/tasks/{taskId}/status** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numbermanagement/portrequest/tasks/{taskId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numberpurchase/portrequests** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numberpurchase/portrequests/{portRequestId}/orders** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numberpurchase/portrequests/transitive** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numberpurchase/20160715/available** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/carrierservices/numberpurchase/20160715/available/{taskId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numberpurchase/20180810/available/{taskId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numberpurchase/orders/{orderId}** (5 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/carrierservices/numberpurchase/orders** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/carrierservices/numberpurchase/orders/did/{did}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numberpurchase/20160715/orders** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/carrierservices/numberpurchase/20190107/disconnect/tasks/{taskId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numberpurchase/20190107/disconnect/tasks/{taskId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numberpurchase/20190107/export/tasks/{taskId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numberpurchase/20190107/export/tasks/{taskId}/result** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numberpurchase/20190107/disconnect/tasks** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/carrierservices/numberpurchase/20190107/export/tasks** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/carrierservices/numberpurchase/20210520/orders** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numberpurchase/reserved/{reservationId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/carrierservices/numberpurchase/20200902/reservations/tasks/{taskId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numberpurchase/20200902/reservations/tasks/{taskId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/numberpurchase/20200902/reservations/tasks** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/carrierservices/numberpurchase/supportedcountries** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/pricing/numberrate** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/report/lineitems/fees** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/carrierservices/report/lineitems/fees/{feesId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/report/lineitems/usage** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/carrierservices/report/lineitems/usage/{usageId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/report/usage/calls/csv** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/carrierservices/report/usage/calls/csv/{csvId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/templates/{templateId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/carrierservices/templates** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/carrierservices/signature** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/carrierservices/signatures/tasks/{taskId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/signatures/tasks/{taskId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/signatures/tasks** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/carrierservices/sipdnsdetails** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/uploadtransform/spreadsheets/{transformId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/carrierservices/uploadtransform/spreadsheets** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/carrierservices/uploadtransform/texttables/{transformId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/carrierservices/uploadtransform/texttables** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/carrierservices/transformendpoints/{endpointId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/carrierservices/transformendpoints** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/carrierservices/transformprogress/search/{serviceName}/{modelType}/{modelId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/transformprogress/search/{serviceName}/{modelType}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/transformprogress/search/{serviceName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/transformprogress/{progressId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/csvschemas/{carrierId}/name/{schemaName}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/carrierservices/csvschemas/{carrierId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/carrierservices/csvschemas** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/progress** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/xlsxschemas/{carrierId}/name/{schemaName}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/carrierservices/xlsxschemas** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/carrierservices/xlsxschemas/{carrierId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/chats/users/{userId}/rooms** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/chat/rooms/{roomJid}/participants/{participantJid}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/chats/rooms/{roomJid}/participants/{participantJid}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/cobrowse/deployments** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/cobrowse/deployments/{deploymentId}** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation DELETE was added

**/api/v2/cobrowse/session/{cobrowseSessionId}/activationfailure** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/outbound/compliancedata/deviceinfo** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/outbound/compliancedata** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/scripts/{scriptId}/pages/{pageId}** (2 changes)

* Operation put was added. Summary: Update a page.
* Operation delete was added. Summary: Delete a page.

**/api/v2/scripts/{scriptId}/pages** (1 change)

* Operation post was added. Summary: Create a page.

**/api/v2/scripts/published/divisionviews/{scriptId}/variables** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/scripts/{scriptId}** (2 changes)

* Operation put was added. Summary: Update a script.
* Operation delete was added. Summary: Delete a script.

**/api/v2/scripts/templates** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/scripts** (1 change)

* Operation post was added. Summary: Create a script.

**/api/v2/scripts/templates/{scriptId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/scripts/templates/{scriptId}/pages/{pageId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/evaluations/favoritetemplates/{templateId}** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/evaluations/favoritetemplates** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/evaluations/templates/{templateId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/evaluations/templates** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/scripter/favoritetemplates/{templateId}** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/scripter/favoritetemplates** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/scripter/templates/{templateId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/scripter/templates** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/externalcontacts/contacts** (1 change)

* Operation patch was added. Summary: Stitch an external contact

**/api/v2/externalcontacts/contacts/suggestions** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/organizations/{externalOrganizationId}/churn** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/organizations/{externalOrganizationId}/churn/latest** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/organizations/schemas/{schemaId}** (1 change)

* Operation delete was added. Summary: Delete a schema

**/api/v2/externalcontacts/contacts/{contactId}/journey/segments** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/billing/signup/freetrial** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/codes** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversationexport** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/chats/memberauthtoken** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/chats/{conversationId}/mediarequests/{mediaRequestId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/conversations/chats/{conversationId}/mediarequests** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/emails/settings/threading** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/conversations/screenshares/{conversationId}/participants/{participantId}/wrapupcodes** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/screenshares** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/screenshares/{conversationId}/participants/{participantId}/attributes** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/conversations/screenshares/{conversationId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/conversations/screenshares/{conversationId}/participants/{participantId}/wrapup** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/screenshares/{conversationId}/participants/{participantId}** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/conversations/screenshares/{conversationId}/participants/{participantId}/communications/{communicationId}** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/conversations/screenshares/{conversationId}/participants/{participantId}/replace** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/socials/{conversationId}/participants/{participantId}/wrapupcodes** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/socials** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/socials/{conversationId}/participants/{participantId}/attributes** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/conversations/socials/{conversationId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/conversations/socials/{conversationId}/participants/{participantId}/wrapup** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/socials/{conversationId}/participants/{participantId}** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/conversations/socials/{conversationId}/participants/{participantId}/communications/{communicationId}** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/conversations/socials/{conversationId}/participants/{participantId}/replace** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/videos/{conversationId}/participants/{participantId}/wrapupcodes** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/videos** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/conversations/videos/{conversationId}/participants/{participantId}/pin** (3 changes)

* Path was added
* Operation POST was added
* Operation DELETE was added

**/api/v2/conversations/videos/{conversationId}/participants/{participantId}/attributes** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/conversations/videos/{conversationId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/conversations/videos/{conversationId}/participants/{participantId}/wrapup** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/videos/{conversationId}/participants/{participantId}** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/conversations/videos/{conversationId}/participants/{participantId}/communications/{communicationId}** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/conversations/videos/{conversationId}/participants/{participantId}/replace** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/messaging/facebook/permissions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messaging/integrations/whatsapp/embeddedsignup/{integrationId}** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/conversations/messaging/integrations/whatsapp/embeddedsignup** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/{conversationId}/participants/{participantId}/codes** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/{conversationId}/participants/{participantId}/disconnect** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/{conversationId}/participants/{participantId}** (1 change)

* Operation post was added. Summary: Create a wrap-up for this conversation participant.

**/api/v2/conversations/{conversationId}/suggestions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/{conversationId}/suggestions/{suggestionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/{conversationId}/suggestions/feedback** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/{conversationId}/summaries/{summaryId}/feedback** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/historicaldata/multipartuploads/csv** (3 changes)

* Path was added
* Operation POST was added
* Operation PUT was added

**/api/v2/dataprivacy/maskingrules** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/dataprivacy/maskingrules/validate** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/dataprivacy/maskingrules/{ruleId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/diagnostics/support** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/diagnostics/trace** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/diagnostics** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/diagnostics/trace/backgroundassistant** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/outbound/contactlisttemplates/{contactListTemplateId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/outbound/contactlisttemplates** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation DELETE was added

**/api/v2/outbound/contactlisttemplates/bulk/add** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/outbound/importtemplates/{importTemplateId}/importstatus** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/outbound/importtemplates/{importTemplateId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/outbound/importtemplates** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation DELETE was added

**/api/v2/outbound/importtemplates/bulk/add** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/outbound/messaging/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/dialog/bots/{botId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/dialog/bots** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/dialog/bots/{botId}/sessions/{sessionId}/turns** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/dialog/bots/{botId}/sessions/{sessionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/dialog/bots/{botId}/sessions** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/dialog/bots/{botId}/versions/{versionId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/dialog/bots/{botId}/versions** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/dialog/integrations/bots/{botId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/dialog/integrations/bots/{botId}/versions/{versionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/dialog/integrations/bots** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/groups/{groupId}/images/{imageId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/groups/{groupId}/images** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/groups/{groupId}/profile** (1 change)

* Operation put was added. Summary: Update group profile

**/api/v2/groups/bulk/deleted** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/organizations/me** (1 change)

* Operation delete was added. Summary: Delete the organization.

**/api/v2/organizations** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/apps/legacy/translations** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/apps/legacy/translations/builtin/{languageName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/apps/legacy/translations/{languageName}** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/apps/legacy/availabletranslations** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/{userId}/profile** (1 change)

* Operation put was added. Summary: Update user profile

**/api/v2/bots/instances/{instanceId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/bots/instances/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/bots/instances/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/bots/instances/querycapabilities** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/bots/instances/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/fax/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/gamification/insights/rankings** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/actions/schemas/{providerName}/{fileName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/actions/metrics/queries/executioncount** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/integrations/actions/metrics/queries/executioncount/{queryId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/actions/metrics/queries/executioncount/{queryId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/actions/metrics/queries/responsecode** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/integrations/actions/metrics/queries/responsecode/{queryId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/actions/metrics/queries/responsecode/{queryId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/actions/metrics/queries/duration** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/integrations/actions/metrics/queries/duration/{queryId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/actions/metrics/queries/duration/{queryId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/salesforce/servicecloudvoice/login** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/integrations/salesforce/servicecloudvoice/logout** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/integrations/salesforce/servicecloudvoice/voicecallrecord/update** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/integrations/salesforce/servicecloudvoice/voicecallrecord/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/salesforce/servicecloudvoice/voicecallrecord** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/integrations/speech/dialogflowcx/agents/{agentId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/speech/dialogflowcx/agents** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/speech/lexv2/bot/alias/{aliasId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/speech/lexv2/bot/{botId}/aliases** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/speech/lexv2/bots** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/speech/stt/engines/{engineId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/speech/stt/engines** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/webhooks/{webhookId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/integrations/webhooks** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/journey/actiontargets/bulk** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/journey/eventtypes/{eventTypeId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/journey/eventtypes** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/journey/openactions/{openActionId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/journey/openactions/schemas/{schemaId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/journey/openactions/schemas/{schemaId}/versions/{versionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/openactions/schemas/{schemaId}/versions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/openactions/schemas** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/journey/openactions** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/journey/externalcontacts/{externalContactId}/segments** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/journey/sessions/{sessionType}/recent** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/settings/clickstream** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/journey/settings/webactions** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/journey/views/{viewId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/journey/views/{viewId}/versions** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/journey/views** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/journey/views/eventdefinitions/{eventDefinitionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/views/eventdefinitions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/latest** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/journey/views/{viewId}/versions/{journeyViewVersion}/jobs/{jobId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/feedback/approvals/bulk** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/feedback/approvals/bulk** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/feedback/{feedbackId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/feedback** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation PATCH was added

**/api/v2/knowledge/knowledgebases/feedback** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/trainings** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/uploads/urls/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/uploads/urls/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/contexts/{contextId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/contexts** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/contexts/{contextId}/values/{contextValueId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/contexts/{contextId}/values** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/copies** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/presentations** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/feedback/{feedbackId}** (1 change)

* Operation patch was added. Summary: Update feedback on a document

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/operations** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/operations/users/query** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/parse/jobs/{parseJobId}/import** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/parse/jobs/{parseJobId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/parse/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/organizations/limits/changerequests/{requestId}** (1 change)

* Operation patch was added. Summary: Update a limit change request

**/api/v2/organizations/limits/changerequests** (1 change)

* Operation post was added. Summary: Create a limit change request

**/api/v2/diagnostics/logcapture/browser/entries/download/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/diagnostics/logcapture/browser/entries/download/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/diagnostics/logcapture/browser/entries/download** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/diagnostics/logcapture/browser/entries** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/diagnostics/logcapture/browser/entries/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/diagnostics/logcapture/browser/users** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/diagnostics/logcapture/browser/users/{userId}** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation DELETE was added

**/api/v2/marketplace/ads/{platformName}/{adType}** (3 changes)

* Path was added
* Operation POST was added
* Operation DELETE was added

**/api/v2/marketplace/ads/{platformName}/{adType}/targeturl** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/marketplace/listings** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/marketplace/listings/{listingId}/media/{fileName}** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/marketplace/listings/{listingId}/media** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/marketplace/listings/{listingId}/media/order** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/marketplace/listings/{listingId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/marketplace/listings/{listingId}/categories** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/marketplace/listings/{listingId}/metadata** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/marketplace/documents/navigations/{navigationId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/marketplace/documents/navigations** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/marketplace/documents** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/marketplace/documents/{documentId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/marketplace/documents/images/{documentId}** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/marketplace/enterpriseagreements** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/marketplace/enterpriseagreements/{enterpriseAgreementId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/marketplace/enterpriseagreements/search** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/marketplace/partners** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/marketplace/partners/{partnerId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/marketplace/resellers/organizations/{organizationId}** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation PUT was added

**/api/v2/marketplace/resellers/partners/{partnerId}** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/marketplace/resellers/{resellerId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/marketplace/resellers** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/marketplace/resellers/listings** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/meetings/{meetingId}/occurrences/{occurrenceId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/meetings/{meetingId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/meetings** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/users/{userId}/meetings** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/messaging/integrations/{integrationId}/messages/{messageId}/action** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/messaging/integrations/{integrationId}/messages/{messageId}/replies/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/messaging/integrations/{integrationId}/messages/{messageId}/replies/query/{queryId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/messaging/integrations/{integrationId}/messages/{messageId}/replies/query/{queryId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/messaging/integrations/{integrationId}/messages/{messageId}/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/messaging/integrations/{integrationId}/messages/{messageId}/query/{queryId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/messaging/integrations/{integrationId}/messages/{messageId}/query/{queryId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/messaging/integrations/{integrationId}/messages** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/messaging/integrations** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/messaging/integrations/uploads** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/messaging/email** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/messaging/email/bulk** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/messaging/facebook/app** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/messaging/integrations/facebook/{integrationId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/messaging/integrations/facebook** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/messaging/integrations/line/{integrationId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/messaging/integrations/line** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/messaging/messages/inbound/open** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/messaging/integrations/open/{integrationId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/messaging/integrations/open** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/messaging/sms/bulk** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/messaging/sms** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/messaging/sms/provisioning/longcodes/available** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/messaging/sms/provisioning/longcodes** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/messaging/sms/provisioning/longcodes/portin** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/messaging/sms/provisioning/longcodes/{longCode}** (3 changes)

* Path was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/messaging/sms/provisioning/orders/{orderId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/messaging/sms/provisioning/simulated/{senderId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/messaging/sms/provisioning/simulated** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/messaging/sms/provisioning/tollfreenumbers** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/messaging/sms/provisioning/tollfreenumbers/portin** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/messaging/sms/provisioning/tollfreenumbers/{tollfreeNumberCode}** (3 changes)

* Path was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/messaging/sms/provisioning/tollfreenumbers/available** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/messaging/integrations/twitter/{integrationId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/messaging/integrations/twitter** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/messaging/integrations/whatsapp/{integrationId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/messaging/integrations/whatsapp** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/users/{userId}/verifiers/{verifierId}** (3 changes)

* Path was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/users/{userId}/verifiers** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/organizations/migrations/{migrationName}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/organizations/migrations/{migrationName}/state** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/organizations/migrations** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/diagnostics/newrelic/insights/backgroundassistant** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/diagnostics/newrelic/insights** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/apps/downloads/{downloadId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/downloads/callback** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/apps/globalfeaturetoggles** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/health/check/dc5ea213-b829-40c8-ab65-b1eb2b583ff7/services/{serviceName}** (3 changes)

* Path was added
* Operation GET was added
* Operation HEAD was added

**/api/v2/health/check** (3 changes)

* Path was added
* Operation GET was added
* Operation HEAD was added

**/health/check** (3 changes)

* Path was added
* Operation GET was added
* Operation HEAD was added

**/health/check/dc5ea213-b829-40c8-ab65-b1eb2b583ff7/services/{serviceName}** (3 changes)

* Path was added
* Operation GET was added
* Operation HEAD was added

**/api/v2/integrations/webhooks/{tokenId}/events** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/integrations/webhooks/{webhookId}/schema** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/journey/deployments/{deploymentId}/actionevent** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/journey/deployments/{deploymentId}/appevents/bulk** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/journey/deployments/{deploymentId}/customers/{customerCookieId}/beacons** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/journey/deployments/{deploymentId}/customers/{customerCookieId}/ping** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/websites/{websiteId}/customers/{customerCookieId}/beacons** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/journey/websites/{websiteId}/customers/{customerCookieId}/ping** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/guest/sessions/{sessionId}/documents/{documentId}/views** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/guest/sessions/{sessionId}/documents/presentations** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/guest/sessions/{sessionId}/documents/{documentId}/copies** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/marketplace/ads** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/marketplace/ads/{platformName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/marketplace/categories** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/marketplace/listings/search** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/marketplace/listings/vendors/{vendorId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/marketplace/documents/search** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/marketplace/reviews/{reviewId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/marketplace/partners/{partnerType}/organizations/{organizationId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/marketplace/partners/search** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/billing/signup/freetrial/staging** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/billing/signup/freetrial/staging/{freeTrialId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/billing/signup/freetrial/staging/{freeTrialId}/otp** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/onboarding/invites/{inviteId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/onboarding/joincodes/{joinCodeId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/onboarding/activations/{activationId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/onboarding/activations/{activationId}/apply** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/onboarding/orgprovisionings/{provisioningId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/onboarding/orgprovisionings/{provisioningId}/complete** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/onboarding/orgprovisionings** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/onboarding/organizations/{organizationId}/users** (2 changes)

* Path was added
* Operation HEAD was added

**/api/v2/billing/signup/provisioning/{provisioningId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/billing/signup/provisioning** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/billing/signup/provisioning/{provisioningId}/otp** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/onboarding/users** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/onboarding/users/stage** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/onboarding/users/joinexistingorgs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/telephony/phonehome/phoneconfiguration/{hardwareId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/notifications/availabletopics/{topicName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/notifications/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/oauth/authorizations/{clientId}** (2 changes)

* Operation put was added. Summary: Authorize a client for the resource owner
* Operation delete was added. Summary: Delete an authorization for a client

**/api/v2/oauth/clients/{clientId}/usage/datatransfer/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/onboarding/invites** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/onboarding/joincodes** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/usage/events/definitions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/usage/events/definitions/{eventDefinitionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/organizations/enforcescopes** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/organizations/passwordrequirements** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/telephony/providers/edges/sites/{siteId}/schedulereboot** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/telephony/phone/{phoneId}/settings** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/notifications/push/registrations/{registrationId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/notifications/push/registrations** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation DELETE was added

**/api/v2/recording/jobs** (1 change)

* Operation delete was added. Summary: Clear the jobs in org by state specified.

**/api/v2/recordings/screensessions/metadata/backgroundassistant** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/alerting/alerts/all** (3 changes)

* Path was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/routing/comparisonperiods** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/settings/transcription** (1 change)

* Operation patch was added. Summary: Patch Transcription Settings

**/api/v2/routing/utilization/labels/{labelId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/routing/utilization/labels/{labelId}/agents** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/utilization/labels** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/routing/queues/{queueId}/conversations/calls** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/queues/{queueId}/conversations/callbacks** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/queues/{queueId}/conversations/chats** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/queues/{queueId}/conversations/emails** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/queues/{queueId}/conversations** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/email/domains/{domainId}/dkim** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/routing/email/domains/{domainId}/verification** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/routing/email/domains/{domainId}/mailfrom** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/routing/predictors/interactionscores** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/routing/predictors/userscores** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/routing/predictors/keyperformanceindicators/{kpiId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/routing/predictors/keyperformanceindicatortypes** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/predictors/keyperformanceindicators** (1 change)

* Operation post was added. Summary: Create a custom Key Performance Indicator.

**/api/v2/routing/queues/{queueId}/assistant** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/comparisonreports/summary** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/routing/comparisonreports/details** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/routing/directroutingbackup/settings/me** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/routing/users/{userId}/directroutingbackup/settings** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/routing/wrapupcodes/divisionviews/{codeId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/wrapupcodes/divisionviews** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/scim/groups/{groupId}** (1 change)

* Operation delete was added. Summary: Delete a group

**/api/v2/scim/groups** (1 change)

* Operation post was added. Summary: Create a group

**/api/v2/scim/v2/groups** (1 change)

* Operation post was added. Summary: Create a group

**/api/v2/scim/v2/groups/{groupId}** (1 change)

* Operation delete was added. Summary: Delete a group

**/api/v2/settings/webrtc/users** (5 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/signeddata** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/speechandtextanalytics/categories** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/speechandtextanalytics/categories/{categoryId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/docs/swagger** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/docs/swaggerpreview** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/docs/swaggerall** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/sipmessages/conversations/{conversationId}/headers** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/sipmessages/conversations/{conversationId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/providers/edges/{edgeId}/offlineconfiguration** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/telephony/providers/edges/dialtargets** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/telephony/providers/edges/files/volumes/tasks/{taskId}/status** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/providers/edges/files/volumes/tasks** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/telephony/providers/edges/files/volumes/tasks/{taskId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/providers/edges/files/volumes/{volumeId}/tasks** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/telephony/providers/edges/files/volumes/recovered/tasks/{taskId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/providers/edges/files/volumes/{volumeId}** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation DELETE was added

**/api/v2/telephony/providers/edges/files/volumes** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/providers/edges/files/volumes/verify** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/telephony/providers/edges/hybridcompatibility** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/providers/edges/provisioning/amis/{amiId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/providers/edges/sites/{siteId}/autoscalinggroups/{autoScalingGroupId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/providers/edges/sites/{siteId}/autoscalinggroups** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/telephony/providers/edges/sites/{siteId}/autoscalinggroups/upgrade** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/telephony/providers/edges/autoscalinggroups/images/current/tiers/{tierName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/providers/edges/sites/{siteId}/provisioning/decommissioning** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/providers/edges/sites/{siteId}/provisioning** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/telephony/providers/edges/autoscalinggroups/{autoScalingGroupId}/edges/{edgeId}** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/telephony/providers/edges/autoscalinggroups/{asgId}/capacity** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/telephony/providers/edges/provisioning/upgraderule** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation DELETE was added

**/api/v2/telephony/providers/edges/sites/{siteId}/siteconnections** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation PATCH was added

**/api/v2/telephony/providers/edges/sites/search** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/telephony/providers/edges/tiers** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/telephony/providers/edges/trunkbasesettings/site/{siteId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/providers/edges/trunkbasesettings/search** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/telephony/providers/edges/trunks/search** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/testautomation/existingresources/users/checkin** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/testautomation/existingresources/users/checkout** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/testautomation/existingresources/environments/{environmentName}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/testautomation/existingresources/environments/{environmentName}/users/{userId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/testautomation/existingresources/environments/{environmentName}/users** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/testautomation/existingresources/environments** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/testautomation/existingresources/oauthclients/{environmentName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/testautomation/existingresources/oauthclients** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/testautomation/existingresources/organizations/{organizationId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/testautomation/existingresources/organizations/{organizationId}/users** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/testautomation/existingresources/organizations** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/integrations/unifiedcommunications/email** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/integrations/unifiedcommunications/{ucIntegrationId}/auth** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation DELETE was added

**/api/v2/integrations/unifiedcommunications/{ucIntegrationId}/presences** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/unifiedcommunications/clientapps/{ucIntegrationId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/unifiedcommunications/clientapps** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/unifiedcommunications/{ucIntegrationId}/meetings** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/integrations/unifiedcommunications/{ucIntegrationId}/meetings/{meetingId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/microsoftteams/auth** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation DELETE was added

**/api/v2/integrations/zoom/auth** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation DELETE was added

**/api/v2/integrations/zoom/202004/meetings/{meetingId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/zoom/202004/meetings/{meetingId}/signature** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/integrations/zoom/202004/users/{userId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/zoom/202004/users/{userId}/settings** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/zoom/202004/users/{userId}/meetings** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/usage/datatransfer/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/usage/datatransfer/aggregates/query/results/{executionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/externalid/{authorityName}/{externalKey}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/{userId}/externalid/{authorityName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/{userId}/externalid** (1 change)

* Operation get was added. Summary: Get the external identifiers for a user.

**/api/v2/users/{userId}/externalid/{authorityName}/{externalKey}** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/voicebots/bot/connection** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/voicemail/messages/create** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/architect/audits** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/architect/me** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/architect/configuration** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/architect/capabilities** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/flows/actions/checkinsync** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/flows/actions/validate** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/flows/actions/debug** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/flows/{flowId}/validate/{operationId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/learning/assignments/{assignmentId}/steps/{stepId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/learning/modules/{moduleId}/archive** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/learning/modules/{moduleId}/publishedversions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/learning/modules/{moduleId}/users/{userId}/assignments** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/learning/scorm/{scormId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/learning/scorm** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts** (1 change)

* Operation post was added. Summary: Create a blank short term forecast

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/generate/legacyweightedaverage** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/compute** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}** (1 change)

* Operation patch was added. Summary: Update a short term forecast

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/staffingrequirement** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/sourcedata/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/sourcedata** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/decisions/downloads/search** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/decisions/downloads/{downloadId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/agents** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/sync** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/history/versions/{planningGroupVersion}/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/{staffingGroupId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/agents/v2/managementunits** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/teams/{teamId}/adherence** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/alternativeshifts/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/workforcemanagement/agents/me** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/workforcemanagement/forecasts/adhoc** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/forecasts/adhoc/{forecastId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/historicaldata/availability** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/historicaldata/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions/recalculations/uploadurl** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions/recalculations** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions/recalculations/{recalculationId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/{timeOffLimitId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/{timeOffLimitId}/values** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/values/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeoffplans/{timeOffPlanId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeoffplans** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**AuthorizationPolicy** (1 change)

* Model was added

**Subject** (1 change)

* Model was added

**TypedAttribute** (1 change)

* Model was added

**ValidationError** (1 change)

* Model was added

**ValidationErrorListing** (1 change)

* Model was added

**AuthorizationPolicyEntityListing** (1 change)

* Model was added

**PolicyAttribute** (1 change)

* Model was added

**TargetAttributes** (1 change)

* Model was added

**AutoAnswerSetting** (1 change)

* Model was added

**AutoAnswerSettings** (1 change)

* Model was added

**PanelSetting** (1 change)

* Model was added

**PanelSettings** (1 change)

* Model was added

**Panel** (1 change)

* Model was added

**Group** (1 change)

* Optional property chat was added

**ConversationAggregationQuery** (1 change)

* Optional property divisionIds was added

**QueryDivision** (2 changes)

* Optional property divisionId was added
* Optional property homeDivision was added

**ConversationAsyncAggregationQuery** (1 change)

* Optional property divisionIds was added

**ConversationActivityResponse** (2 changes)

* Optional property subscriptions was added
* Optional property subscriptionExpirationDate was added

**ConversationActivityQuery** (2 changes)

* Optional property subscribe was added
* Optional property peekAtLast was added

**ConversationQuery** (1 change)

* Optional property divisionIds was added

**AsyncConversationQuery** (1 change)

* Optional property divisionIds was added

**EvaluationAggregationQuery** (1 change)

* Optional property divisionIds was added

**EvaluationAsyncAggregationQuery** (1 change)

* Optional property divisionIds was added

**FlowExecutionAggregateDataContainer** (1 change)

* Model was added

**FlowExecutionAggregateQueryResponse** (1 change)

* Model was added

**FlowExecutionAggregateQueryClause** (1 change)

* Model was added

**FlowExecutionAggregateQueryFilter** (1 change)

* Model was added

**FlowExecutionAggregateQueryPredicate** (1 change)

* Model was added

**FlowExecutionAggregationQuery** (1 change)

* Model was added

**FlowExecutionAggregationView** (1 change)

* Model was added

**FlowExecutionAsyncAggregationQuery** (1 change)

* Model was added

**FlowExecutionAsyncAggregateQueryResponse** (1 change)

* Model was added

**FlowActivityResponse** (2 changes)

* Optional property subscriptions was added
* Optional property subscriptionExpirationDate was added

**FlowActivityQuery** (2 changes)

* Optional property subscribe was added
* Optional property peekAtLast was added

**FlowAggregationQuery** (1 change)

* Optional property divisionIds was added

**FlowAsyncAggregationQuery** (1 change)

* Optional property divisionIds was added

**RateLimitAggregateDataContainer** (1 change)

* Model was added

**RateLimitAggregateQueryResponse** (1 change)

* Model was added

**RateLimitAggregateQueryClause** (1 change)

* Model was added

**RateLimitAggregateQueryFilter** (1 change)

* Model was added

**RateLimitAggregateQueryPredicate** (1 change)

* Model was added

**RateLimitAggregationQuery** (1 change)

* Model was added

**RateLimitAggregationView** (1 change)

* Model was added

**ResolutionAggregateQueryResponse** (1 change)

* Model was added

**ResolutionAggregationQuery** (1 change)

* Model was added

**RoutingActivityResponse** (2 changes)

* Optional property subscriptions was added
* Optional property subscriptionExpirationDate was added

**RoutingActivityQuery** (2 changes)

* Optional property subscribe was added
* Optional property peekAtLast was added

**SurveyAsyncAggregationQuery** (1 change)

* Optional property divisionIds was added

**SurveyAggregationQuery** (1 change)

* Optional property divisionIds was added

**TaskManagementAsyncAggregationQuery** (1 change)

* Optional property divisionIds was added

**TaskManagementAggregationQuery** (1 change)

* Optional property divisionIds was added

**TeamActivityResponse** (2 changes)

* Optional property subscriptions was added
* Optional property subscriptionExpirationDate was added

**TeamActivityQuery** (2 changes)

* Optional property subscribe was added
* Optional property peekAtLast was added

**TranscriptAsyncAggregationQuery** (1 change)

* Optional property divisionIds was added

**TranscriptAggregationQuery** (1 change)

* Optional property divisionIds was added

**UserAggregationQuery** (1 change)

* Optional property divisionIds was added

**UserAsyncAggregationQuery** (1 change)

* Optional property divisionIds was added

**UserDetailsQuery** (1 change)

* Optional property divisionIds was added

**UserActivityResponse** (2 changes)

* Optional property subscriptions was added
* Optional property subscriptionExpirationDate was added

**UserActivityQuery** (2 changes)

* Optional property subscribe was added
* Optional property peekAtLast was added

**AsyncUserDetailsQuery** (1 change)

* Optional property divisionIds was added

**BotChannel** (1 change)

* Model was added

**BotFlowSession** (1 change)

* Model was added

**SessionsResponse** (1 change)

* Model was added

**DashboardConfiguration** (1 change)

* Model was added

**ViewFilter** (11 changes)

* Optional property showSecondaryStatus was added
* Optional property agentDurationSortOrder was added
* Optional property waitingDurationSortOrder was added
* Optional property interactingDurationSortOrder was added
* Optional property agentName was added
* Optional property skillsList was added
* Optional property languageList was added
* Optional property statusList was added
* Optional property oauthClientIds was added
* Optional property apiOperations was added
* Optional property dashboardIds was added

**Warning** (1 change)

* Model was added

**Widget** (1 change)

* Model was added

**DashboardConfigurationBulkRequest** (1 change)

* Model was added

**DashboardConfigurationListing** (1 change)

* Model was added

**DashboardConfigurationQueryRequest** (1 change)

* Model was added

**DashboardUser** (1 change)

* Model was added

**DashboardUserListing** (1 change)

* Model was added

**InsightConfiguration** (1 change)

* Model was added

**InsightConfigurations** (1 change)

* Model was added

**TabConfiguration** (1 change)

* Model was added

**TableConfiguration** (1 change)

* Model was added

**TabConfigurationListing** (1 change)

* Model was added

**TabConfigurationsDeleteRequest** (1 change)

* Model was added

**ViewConfigurations** (1 change)

* Model was added

**ViewConfigurationsListing** (1 change)

* Model was added

**ReportingExportHistory** (1 change)

* Model was added

**ReportingExportJobHistoryListing** (1 change)

* Model was added

**ReportingExportJobResponse** (14 changes)

* Enum value DASHBOARD_USERS_DETAIL was added to property viewType
* Optional property description was added
* Optional property scheduleExpression was added
* Optional property timePeriod was added
* Optional property recurrence was added
* Optional property dateNextExecution was added
* Optional property dateLastDownload was added
* Optional property dateLastConfirmed was added
* Optional property intervalKeyType was added
* Optional property requestedColumnIds was added
* Optional property sortOrder was added
* Optional property sortKey was added
* Optional property scheduleHasStaticLink was added
* Optional property scheduleStaticLinkUrl was added

**ExportJobHistoryUpdate** (1 change)

* Model was added

**ReportingExportMetadataJobResponse** (1 change)

* Enum value DASHBOARD_USERS_DETAIL was added to property viewType

**ReportingExportJobRequest** (11 changes)

* Enum value DASHBOARD_USERS_DETAIL was added to property viewType
* Optional property description was added
* Optional property isEnabled was added
* Optional property scheduleExpression was added
* Optional property timePeriod was added
* Optional property recurrence was added
* Optional property intervalKeyType was added
* Optional property requestedColumnIds was added
* Optional property sortOrder was added
* Optional property sortKey was added
* Optional property scheduleHasStaticLink was added

**ReportingScheduleExportJobRequest** (1 change)

* Model was added

**ReportingExportRunNowResponse** (1 change)

* Model was added

**ReportingScheduleExportSummaryResponse** (1 change)

* Model was added

**PermissionBundle** (1 change)

* Model was added

**PermissionBundleListing** (1 change)

* Model was added

**Dimensions** (1 change)

* Model was added

**DirectoryLegacyImageUploadResponse** (1 change)

* Model was added

**DirectoryLegacyImageUploadRequest** (1 change)

* Model was added

**BoundingBox** (1 change)

* Model was added

**DirectoryLegacyImage** (1 change)

* Model was added

**DirectoryLegacyImageLink** (1 change)

* Model was added

**DirectoryLegacyImageLinkResponse** (1 change)

* Model was added

**DirectoryLegacyImageRel** (1 change)

* Model was added

**DirectoryLegacyImageSize** (1 change)

* Model was added

**DirectoryLegacyImageLinkRequest** (1 change)

* Model was added

**AppLegacy** (1 change)

* Model was added

**Apps** (1 change)

* Model was added

**ChatLegacy** (1 change)

* Model was added

**ClientVersions** (1 change)

* Model was added

**ContactInfo** (1 change)

* Model was added

**Department** (1 change)

* Model was added

**DirectReportCount** (1 change)

* Model was added

**DirectoryGroupFieldConfig** (1 change)

* Model was added

**DirectoryOrgFieldConfig** (1 change)

* Model was added

**DirectoryOrganization** (1 change)

* Model was added

**DirectoryPersonFieldConfig** (1 change)

* Model was added

**DirectorySession** (1 change)

* Model was added

**DirectorySessionResponse** (1 change)

* Model was added

**EmailLegacy** (1 change)

* Model was added

**EmailMain** (1 change)

* Model was added

**FieldConfigs_** (1 change)

* Model was added

**General** (1 change)

* Model was added

**GeneralLegacy** (1 change)

* Model was added

**GroupLegacy** (1 change)

* Model was added

**Images** (1 change)

* Model was added

**LocationLegacy** (1 change)

* Model was added

**ManagerLegacy** (1 change)

* Model was added

**MessageLegacy** (1 change)

* Model was added

**NameLegacy** (1 change)

* Model was added

**Orgspan** (1 change)

* Model was added

**Person** (1 change)

* Model was added

**Person_** (1 change)

* Model was added

**PhoneCell** (1 change)

* Model was added

**PhoneHome** (1 change)

* Model was added

**Presence** (1 change)

* Model was added

**PrimaryContactInfo** (1 change)

* Model was added

**Profile** (1 change)

* Model was added

**Ref** (1 change)

* Model was added

**Ref_** (1 change)

* Model was added

**Ref__** (1 change)

* Model was added

**Ref___** (1 change)

* Model was added

**Rel** (1 change)

* Model was added

**Rel_** (1 change)

* Model was added

**Relationships** (1 change)

* Model was added

**Section_** (1 change)

* Model was added

**ShortName** (1 change)

* Model was added

**Skill** (1 change)

* Model was added

**Skills** (1 change)

* Model was added

**Sm** (1 change)

* Model was added

**Statu** (1 change)

* Model was added

**Status** (1 change)

* Model was added

**Status_** (1 change)

* Model was added

**SupportURus** (1 change)

* Model was added

**Title** (1 change)

* Model was added

**Uploads** (1 change)

* Model was added

**UserLegacy** (1 change)

* Model was added

**Value** (1 change)

* Model was added

**Value_** (1 change)

* Model was added

**Value__** (1 change)

* Model was added

**Value___** (1 change)

* Model was added

**Value____** (1 change)

* Model was added

**Value_____** (1 change)

* Model was added

**Value______** (1 change)

* Model was added

**Value_______** (1 change)

* Model was added

**Voice** (1 change)

* Model was added

**DirectorySessionPreferredLanguage** (1 change)

* Model was added

**Assistant** (1 change)

* Model was added

**AssistantQueue** (1 change)

* Model was added

**ConversationProfile** (1 change)

* Model was added

**GoogleDialogflowConfig** (1 change)

* Model was added

**KnowledgeBaseWithDialectReference** (1 change)

* Model was added

**KnowledgeSuggestionConfig** (1 change)

* Model was added

**TranscriptionConfig** (1 change)

* Model was added

**AssistantQueueListing** (1 change)

* Model was added

**AssistantListing** (1 change)

* Model was added

**RoleSettings** (1 change)

* Model was added

**CallbackMediaSettings** (3 changes)

* Optional property enableAutoDialAndEnd was added
* Optional property autoDialDelaySeconds was added
* Optional property autoEndDelaySeconds was added

**DirectRoutingMediaSettings** (1 change)

* Optional property useAgentAddressOutbound was added

**Queue** (1 change)

* Optional property predictiveRouting was added

**QueueMediaSettings** (1 change)

* Optional property workitem was added

**DataValue** (1 change)

* Model was added

**FacetResult** (1 change)

* Model was added

**FacetResultItem** (1 change)

* Model was added

**FlowConfigId** (1 change)

* Model was added

**FlowDetails** (1 change)

* Model was added

**FlowDetailsSearchResult** (1 change)

* Model was added

**FlowSearchCriteria** (1 change)

* Model was added

**FlowSearchRequest** (1 change)

* Model was added

**FlowVersionConfigMetaData** (1 change)

* Model was added

**ScreenRecordingUserAuthenticatedInfo** (1 change)

* Model was added

**BadgeEntity** (1 change)

* Model was added

**ChatBadge** (1 change)

* Model was added

**ChatBadgeEntityListing** (1 change)

* Model was added

**Account** (1 change)

* Model was added

**BillingTaskResult** (1 change)

* Model was added

**UrlRequest** (1 change)

* Model was added

**BillingPeriod** (1 change)

* Model was added

**DomainBillingPeriodEntityListing** (1 change)

* Model was added

**BillingAddress** (1 change)

* Model was added

**CustomerAccount** (1 change)

* Model was added

**FreeTrial** (1 change)

* Model was added

**Invoice** (1 change)

* Model was added

**DomainInvoiceEntityListing** (1 change)

* Model was added

**SignedBillingData** (1 change)

* Model was added

**PremiumAppListing** (1 change)

* Model was added

**PremiumAppOffering** (1 change)

* Model was added

**PremiumAppTrial** (1 change)

* Model was added

**BillingPendingTask** (1 change)

* Model was added

**SubscriptionOverview** (1 change)

* Model was added

**SubscriptionProductActivation** (1 change)

* Model was added

**SubscriptionProductCancellation** (1 change)

* Model was added

**MeteredAppContract** (1 change)

* Model was added

**MeteredAppOrganizationDetail** (1 change)

* Model was added

**MeteredAppOrganizationUsageDetail** (1 change)

* Model was added

**MeteredAppUsageCreate** (1 change)

* Model was added

**MeteredAppOrganizationList** (1 change)

* Model was added

**MeteredAppOrganizationUsageSummary** (1 change)

* Model was added

**UserActionCategory** (1 change)

* Model was added

**UserActionCategoryEntityListing** (1 change)

* Model was added

**UserActionMetadata** (1 change)

* Model was added

**UserActionMetadataEntityListing** (1 change)

* Model was added

**UserActionMetadataRequest** (1 change)

* Model was added

**SortWeightInfo** (1 change)

* Model was added

**BandwidthCurrencyPricing** (1 change)

* Model was added

**BandwidthPricing** (1 change)

* Model was added

**BandwidthListPricing** (1 change)

* Model was added

**BillingLineItemAsynchronousTask** (1 change)

* Model was added

**LineItemRequest** (1 change)

* Model was added

**ResourceInfoProvider** (1 change)

* Model was added

**CDRLineItem** (1 change)

* Model was added

**FeeLineItem** (1 change)

* Model was added

**MRCLineItem** (1 change)

* Model was added

**NRCLineItem** (1 change)

* Model was added

**PCVBill** (1 change)

* Model was added

**PCVBillAsynchronousTask** (1 change)

* Model was added

**PCVBillRequest** (1 change)

* Model was added

**PurchaseGroupDisplay** (1 change)

* Model was added

**UsageGroup** (1 change)

* Model was added

**ListedNumberRate** (1 change)

* Model was added

**NumberRate** (1 change)

* Model was added

**NumberRateEntityListing** (1 change)

* Model was added

**UsagePricing** (1 change)

* Model was added

**UsagePricingQuery** (1 change)

* Model was added

**UsageRate** (1 change)

* Model was added

**UsageRateRegion** (1 change)

* Model was added

**UsageRateRegionEntityListing** (1 change)

* Model was added

**AccountManager** (1 change)

* Model was added

**Btn** (1 change)

* Model was added

**Carrier** (1 change)

* Model was added

**CarrierAddress** (1 change)

* Model was added

**Dns** (1 change)

* Model was added

**Gateway** (1 change)

* Model was added

**NocSupport** (1 change)

* Model was added

**Service** (1 change)

* Model was added

**ServiceType** (1 change)

* Model was added

**Support** (1 change)

* Model was added

**Vpn** (1 change)

* Model was added

**CarrierEntityListing** (1 change)

* Model was added

**ServiceEntityListing** (1 change)

* Model was added

**CDRError** (1 change)

* Model was added

**CDRsLambdaResponse** (1 change)

* Model was added

**CDREntry** (1 change)

* Model was added

**CDRVersion** (1 change)

* Model was added

**ListCDRsAsyncResponse** (1 change)

* Model was added

**ListCDRsProperties** (1 change)

* Model was added

**ListCDRsResult** (1 change)

* Model was added

**ManualBackupCDRsAsyncResponse** (1 change)

* Model was added

**ManualBackupCDRsProperties** (1 change)

* Model was added

**ManualBackupCDRsResponse** (1 change)

* Model was added

**RestoreCDRAsyncResponse** (1 change)

* Model was added

**RestoreCDRProperties** (1 change)

* Model was added

**RestoreCDRResponseBody** (1 change)

* Model was added

**EnhancedEmergencyServices** (1 change)

* Model was added

**InventoryNumber** (1 change)

* Model was added

**InventoryNumbersEntityListing** (1 change)

* Model was added

**PCVLocation** (1 change)

* Model was added

**InventoryNumberResponse** (1 change)

* Model was added

**InventoryNumberPatch** (1 change)

* Model was added

**DetailedInventoryNumber** (1 change)

* Model was added

**Organization** (2 changes)

* Optional property thirdPartyOrgId was added
* Optional property deletable was added

**ServiceCapabilitiesDescriptionMapping** (1 change)

* Model was added

**ServiceCapabilitiesListing** (1 change)

* Model was added

**NumberPortRequest** (1 change)

* Model was added

**PortBillingAddress** (1 change)

* Model was added

**PortContact** (1 change)

* Model was added

**NumberOrder** (1 change)

* Model was added

**RespOrg** (1 change)

* Model was added

**PortTask** (1 change)

* Model was added

**PortRequestTask** (1 change)

* Model was added

**PortUpdateTask** (1 change)

* Model was added

**NumberPortRequestListing** (1 change)

* Model was added

**SearchResult** (1 change)

* Model was added

**SearchResultTask** (1 change)

* Model was added

**TelephoneNumberDetail** (1 change)

* Model was added

**CarrierSearchRequestV2** (1 change)

* Model was added

**AvailableNumber** (1 change)

* Model was added

**SearchResultTaskV2** (1 change)

* Model was added

**NumberOrderPatch** (1 change)

* Model was added

**NumberOrderEntityListing** (1 change)

* Model was added

**NumberOrderRequest** (1 change)

* Model was added

**OrderTask** (1 change)

* Model was added

**ExportTask** (1 change)

* Model was added

**NumberOrderExportRequest** (1 change)

* Model was added

**NumberOrderLinkedPagedEntityListing** (1 change)

* Model was added

**Reservation** (1 change)

* Model was added

**PurchasingTask** (1 change)

* Model was added

**LineItemAsynchronousTask** (1 change)

* Model was added

**UrlResponseAsynchronousTask** (1 change)

* Model was added

**UrlResponseAsynchronousTaskEntityListing** (1 change)

* Model was added

**DocusignTemplateMapping** (1 change)

* Model was added

**EmbeddedSignatureView** (1 change)

* Model was added

**View** (1 change)

* Model was added

**AdditionalPortingFields** (1 change)

* Model was added

**PhoneNumberAndType** (1 change)

* Model was added

**SignatureDocumentInfo** (1 change)

* Model was added

**SignatureTask** (1 change)

* Model was added

**SipDnsResolver** (1 change)

* Model was added

**BasicTransform** (1 change)

* Model was added

**ClientSpreadsheetTransform** (1 change)

* Model was added

**ColumnCollapse** (1 change)

* Model was added

**IndexedTransform** (1 change)

* Model was added

**SheetTransform** (1 change)

* Model was added

**SpreadsheetTransform** (1 change)

* Model was added

**TableTransform** (1 change)

* Model was added

**TagModel** (1 change)

* Model was added

**TransformEndpoint** (1 change)

* Model was added

**TransformLens** (1 change)

* Model was added

**UnpivotColumns** (1 change)

* Model was added

**SpreadsheetTransformEntityListing** (1 change)

* Model was added

**TextTableTransform** (1 change)

* Model was added

**TextTableTransformEntityListing** (1 change)

* Model was added

**ClientTransformModel** (1 change)

* Model was added

**ProgressModel** (1 change)

* Model was added

**TransformModel** (1 change)

* Model was added

**TransformProgress** (1 change)

* Model was added

**CsvSchema** (1 change)

* Model was added

**UploadProgress** (1 change)

* Model was added

**SheetSchema** (1 change)

* Model was added

**XlsxSchema** (1 change)

* Model was added

**ChatMessageResponse** (1 change)

* Optional property metadata was added

**SendMessageBody** (1 change)

* Optional property metadata was added

**RoomEntityListing** (1 change)

* Model was added

**RoomJid** (1 change)

* Model was added

**RoomParticipant** (1 change)

* Model was added

**Deployment** (1 change)

* Model was added

**DeploymentEntityListing** (1 change)

* Model was added

**ActivationFailureRequest** (1 change)

* Model was added

**ComplianceDataDeviceInfoEntity** (1 change)

* Model was added

**DeviceInfo** (1 change)

* Model was added

**ComplianceFileEntity** (1 change)

* Model was added

**PageCreate** (1 change)

* Model was added

**ComposerTemplate** (1 change)

* Model was added

**CreateTemplateFromScriptRequestData** (1 change)

* Model was added

**FavoriteTemplateRequestData** (1 change)

* Model was added

**TemplateEntityListing** (1 change)

* Model was added

**CallMediaPolicyConditions** (1 change)

* Optional property teams was added

**ChatMediaPolicyConditions** (1 change)

* Optional property teams was added

**EmailMediaPolicyConditions** (1 change)

* Optional property teams was added

**EvaluationForm** (2 changes)

* Optional property weightMode was added
* Optional property evaluationSettings was added

**EvaluationSettings** (4 changes)

* Optional property revisionsEnabled was added
* Optional property disputesEnabled was added
* Optional property disputesAllowedPerEvaluation was added
* Optional property disputesAssignees was added

**EvaluationSettingsAssignee** (2 changes)

* Optional property user was added
* Optional property type was added

**MessageMediaPolicyConditions** (1 change)

* Optional property teams was added

**MeteredAssignmentByAgent** (3 changes)

* Optional property percentage was added
* Optional property minimum was added
* Optional property agentConnectedTimeCriteria was added

**PolicyConditions** (1 change)

* Optional property teams was added

**BulkErrorObject** (1 change)

* Model was added

**BulkResponseResult** (1 change)

* Model was added

**DataSchema** (1 change)

* Optional property deleted was added

**ExternalContact** (1 change)

* Optional property instagramId was added

**PhoneNumber** (1 change)

* Optional property normalizationCountryCode was added

**StitchingRequest** (1 change)

* Model was added

**UserDetails** (1 change)

* Model was added

**SuggestionResult** (1 change)

* Model was added

**SuggestionRequest** (1 change)

* Model was added

**Prediction** (1 change)

* Model was added

**PredictionListing** (1 change)

* Model was added

**SegmentAssignmentsUpdate** (1 change)

* Model was added

**Session** (1 change)

* Optional property divisionIds was added

**SignupFreeTrial** (1 change)

* Model was added

**Call** (1 change)

* Optional property bargedTime was added

**CodeResponse** (1 change)

* Model was added

**ConversationMessageMetadataEvent** (1 change)

* Enum value SignIn was added to property subType

**Evaluation** (7 changes)

* Optional property agentTeam was added
* Optional property disputeCount was added
* Optional property version was added
* Optional property versionHistory was added
* Optional property declinedReview was added
* Optional property evaluationContextId was added
* Optional property retractedEvaluation was added

**EvaluationVersion** (3 changes)

* Optional property submittedDate was added
* Optional property version was added
* Optional property status was added

**PagelessDomainEntityListing** (1 change)

* Model was added

**CodesRequest** (1 change)

* Model was added

**CallMediaParticipant** (1 change)

* Optional property screenRecordingState was added

**Campaign** (2 changes)

* Optional property agentOwnedColumn was added
* Optional property skillColumns was added

**CallbackMediaParticipant** (1 change)

* Optional property screenRecordingState was added

**ChatMemberAuthenticationInfo** (1 change)

* Model was added

**WebChatMediaRequest** (1 change)

* Model was added

**WebChatMediaRequestEntityList** (1 change)

* Model was added

**ChatMediaParticipant** (1 change)

* Optional property screenRecordingState was added

**CobrowseMediaParticipant** (1 change)

* Optional property screenRecordingState was added

**EmailMediaParticipant** (1 change)

* Optional property screenRecordingState was added

**EmailThreadingSettings** (1 change)

* Model was added

**MessageMediaParticipant** (1 change)

* Optional property screenRecordingState was added

**ConversationChannelMetadata** (1 change)

* Optional property customAttributes was added

**ConversationEventPresence** (1 change)

* Enum value SignIn was added to property type

**ConversationMessagingChannel** (1 change)

* Optional property metadata was added

**CreateOutboundMessagingConversationRequest** (1 change)

* Optional property useUserFromAddress was added

**ScreenShareConversation** (1 change)

* Model was added

**ScreenShareConversationEntityListing** (1 change)

* Model was added

**ScreenShareMediaParticipant** (1 change)

* Model was added

**SocialConversation** (1 change)

* Model was added

**SocialConversationEntityListing** (1 change)

* Model was added

**SocialMediaParticipant** (1 change)

* Model was added

**VideoConversation** (1 change)

* Model was added

**VideoConversationEntityListing** (1 change)

* Model was added

**VideoMediaParticipant** (1 change)

* Model was added

**VideoPinRequest** (1 change)

* Model was added

**CreateJoinVideoResponse** (1 change)

* Model was added

**CreateJoinVideoRequest** (1 change)

* Model was added

**FacebookPermission** (1 change)

* Model was added

**FacebookPermissionEntityListing** (1 change)

* Model was added

**WhatsAppEmbeddedSignupIntegrationActivationRequest** (1 change)

* Model was added

**WhatsAppEmbeddedSignupIntegrationRequest** (1 change)

* Model was added

**CodeCommand** (1 change)

* Model was added

**CreateCallbackOnConversationCommand** (1 change)

* Optional property voicemailId was added

**Article** (1 change)

* Model was added

**Faq** (1 change)

* Model was added

**MetadataAttribute** (1 change)

* Model was added

**Suggestion** (1 change)

* Model was added

**SuggestionListing** (1 change)

* Model was added

**SuggestionFeedback** (1 change)

* Model was added

**FeedbackAddRequest** (1 change)

* Model was added

**CompleteMultipartUploadRequest** (1 change)

* Model was added

**MultipartUploadUrlInfo** (1 change)

* Model was added

**MultipartUploadUrlResponse** (1 change)

* Model was added

**MultipartUploadUrlRequest** (1 change)

* Model was added

**UploadUrlResponse** (1 change)

* Optional property fileUrl was added

**LearningCoverArtUploadUrlRequest** (1 change)

* Optional property tags was added

**UploadUrlRequest** (1 change)

* Optional property tags was added

**MaskingRule** (1 change)

* Model was added

**MaskingRuleListing** (1 change)

* Model was added

**MaskingRuleValidateResponse** (1 change)

* Model was added

**MaskingRuleValidateRequest** (1 change)

* Model was added

**DiagnosticEmail** (1 change)

* Model was added

**App** (1 change)

* Model was added

**Trace** (1 change)

* Model was added

**TraceList** (1 change)

* Model was added

**ResponseSet** (1 change)

* Optional property liveSpeakerDetectionMode was added

**CallBasic** (1 change)

* Optional property bargedTime was added

**ImportStatus** (2 changes)

* Optional property targetContactListIds was added
* Optional property listNamePrefix was added

**ContactListFilter** (2 changes)

* Optional property contactListTemplate was added
* Optional property sourceType was added

**ContactListTemplate** (1 change)

* Model was added

**ContactListTemplateEntityListing** (1 change)

* Model was added

**ImportTemplate** (1 change)

* Model was added

**SplittingInformation** (1 change)

* Model was added

**ImportTemplateEntityListing** (1 change)

* Model was added

**OutboundMessagingSettings** (1 change)

* Model was added

**LastAttemptByColumnConditionSettings** (1 change)

* Optional property voiceColumnName was added

**LastResultByColumnConditionSettings** (2 changes)

* Optional property voiceColumnName was added
* Optional property voiceWrapupCodes was added

**LastResultOverallConditionSettings** (1 change)

* Optional property voiceWrapupCodes was added

**SmsConfig** (1 change)

* Optional property phoneColumns was added

**Bot** (1 change)

* Model was added

**BotUpdate** (1 change)

* Model was added

**BotListing** (1 change)

* Model was added

**BotCreate** (1 change)

* Model was added

**Alternative** (1 change)

* Model was added

**BotVersionKnowledgebaseVersion** (1 change)

* Model was added

**BotVersionNluDomainVersion** (1 change)

* Model was added

**Slot** (1 change)

* Model was added

**Turn** (1 change)

* Model was added

**TurnInput** (1 change)

* Model was added

**TurnOutput** (1 change)

* Model was added

**TurnOutputIntent** (1 change)

* Model was added

**TurnOutputIntentBase** (1 change)

* Model was added

**TurnOutputKnowledgeAnswer** (1 change)

* Model was added

**TurnOutputKnowledgeAnswerBase** (1 change)

* Model was added

**BotDialogSession** (1 change)

* Model was added

**BotReference** (1 change)

* Model was added

**BotVersionReference** (1 change)

* Model was added

**DialogContext** (1 change)

* Model was added

**DialogContextIntent** (1 change)

* Model was added

**BotVersion** (1 change)

* Model was added

**BotVersionIntent** (1 change)

* Model was added

**Config** (1 change)

* Model was added

**DefaultIntentProperties** (1 change)

* Model was added

**DefaultKnowledgeProperties** (1 change)

* Model was added

**DefaultPrompts** (1 change)

* Model was added

**DefaultSlotProperties** (1 change)

* Model was added

**IntentPrompts** (1 change)

* Model was added

**IntentSlot** (1 change)

* Model was added

**KnowledgePrompts** (1 change)

* Model was added

**SlotPrompts** (1 change)

* Model was added

**SlotType** (1 change)

* Model was added

**BotVersionUpdate** (1 change)

* Model was added

**BotVersionListing** (1 change)

* Model was added

**BotVersionReduced** (1 change)

* Model was added

**DialogEngineIntegrationBot** (1 change)

* Model was added

**DialogEngineIntegrationBotListing** (1 change)

* Model was added

**GroupImage** (1 change)

* Model was added

**GroupImageSize** (1 change)

* Model was added

**GroupImageListing** (1 change)

* Model was added

**GroupUpdate** (1 change)

* Optional property chat was added

**GroupCreate** (1 change)

* Optional property chat was added

**OrganizationCreate** (1 change)

* Model was added

**GetBotExecutionDataJobResult** (1 change)

* Model was added

**BotsQueryCriteriaResponse** (1 change)

* Model was added

**BotExecutionDataQueryResult** (1 change)

* Model was added

**BotResultEntityListing** (1 change)

* Model was added

**FaxConfig** (1 change)

* Model was added

**InsightsRankings** (1 change)

* Model was added

**GDPRRequest** (1 change)

* Optional property relatedRequests was added

**QueryPostResponse** (1 change)

* Model was added

**FieldFilter** (1 change)

* Model was added

**QueryInput** (1 change)

* Model was added

**QueryStatusResponse** (1 change)

* Model was added

**AggregateExecutionCountResponse** (1 change)

* Model was added

**ExecutionCountResponse** (1 change)

* Model was added

**AggregateResponseCodeResponse** (1 change)

* Model was added

**ResponseCodeResponse** (1 change)

* Model was added

**AggregateDurationResponse** (1 change)

* Model was added

**DurationResponse** (1 change)

* Model was added

**LoginRequest** (1 change)

* Model was added

**VoiceCallRecordAsyncJob** (1 change)

* Model was added

**UpdateVoiceCallRecordRequest** (1 change)

* Model was added

**CreateVoiceCallRecordRequest** (1 change)

* Model was added

**DialogflowCXAgent** (1 change)

* Model was added

**DialogflowCXEnvironment** (1 change)

* Model was added

**DialogflowCXProject** (1 change)

* Model was added

**DialogflowCXAgentSummary** (1 change)

* Model was added

**DialogflowCXAgentSummaryEntityListing** (1 change)

* Model was added

**LexV2Bot** (1 change)

* Model was added

**LexV2BotAlias** (1 change)

* Model was added

**LexV2Intent** (1 change)

* Model was added

**LexV2Slot** (1 change)

* Model was added

**LexV2BotAliasEntityListing** (1 change)

* Model was added

**LexV2BotEntityListing** (1 change)

* Model was added

**SttEngineEntity** (1 change)

* Model was added

**SttEngineEntityListing** (1 change)

* Model was added

**Webhook** (1 change)

* Model was added

**CreateWebhookRequest** (1 change)

* Model was added

**WebhookEntityListing** (1 change)

* Model was added

**AddressableEntity** (1 change)

* Model was added

**BulkResultEnrichedBulkActionTarget** (1 change)

* Model was added

**BulkResultError** (1 change)

* Model was added

**BulkResultErrorInformation** (1 change)

* Model was added

**EnrichedActionTargetBulkResult** (1 change)

* Model was added

**EnrichedBulkActionTarget** (1 change)

* Model was added

**RawStatistics** (1 change)

* Model was added

**BulkActionTarget** (1 change)

* Model was added

**EntityListingBulkActionTarget** (1 change)

* Model was added

**ActionTemplate** (1 change)

* Optional property integrationActionFields was added

**PatchActionTemplate** (1 change)

* Optional property integrationActionFields was added

**JourneyEventType** (1 change)

* Model was added

**JourneyEventTypeAttribute** (1 change)

* Model was added

**JourneyEventTypeDisplayOptions** (1 change)

* Model was added

**JourneyEventTypeSessionType** (1 change)

* Model was added

**PatchJourneyEventType** (1 change)

* Model was added

**JourneyEventTypeListing** (1 change)

* Model was added

**ActionMapIcon** (1 change)

* Model was added

**ActionMapIconConfig** (1 change)

* Model was added

**OpenAction** (1 change)

* Model was added

**OpenActionDocumentation** (1 change)

* Model was added

**OpenActionIcons** (1 change)

* Model was added

**OpenActionSchema** (1 change)

* Model was added

**PatchOpenAction** (1 change)

* Model was added

**OpenActionListing** (1 change)

* Model was added

**ClickstreamSettings** (1 change)

* Model was added

**IpAddressFilter** (1 change)

* Model was added

**FrequencyCapBehaviour** (1 change)

* Model was added

**WebActionSettings** (1 change)

* Model was added

**PatchWebActionSettings** (1 change)

* Model was added

**Duration** (1 change)

* Model was added

**IsoChronology** (1 change)

* Model was added

**JourneyView** (1 change)

* Model was added

**JourneyViewElement** (1 change)

* Model was added

**JourneyViewElementAttributes** (1 change)

* Model was added

**JourneyViewElementFilter** (1 change)

* Model was added

**JourneyViewElementFilterPredicate** (1 change)

* Model was added

**JourneyViewLink** (1 change)

* Model was added

**TemporalUnit** (1 change)

* Model was added

**AddressableEntityListing** (1 change)

* Model was added

**JourneyEventDefinition** (1 change)

* Model was added

**JourneyEventDefinitionListing** (1 change)

* Model was added

**JourneyViewJob** (1 change)

* Model was added

**JourneyViewResult** (1 change)

* Model was added

**JourneyViewResultElement** (1 change)

* Model was added

**JourneyViewResultLink** (1 change)

* Model was added

**JourneyViewResultMetrics** (1 change)

* Model was added

**KnowledgeFeedbackApproval** (1 change)

* Model was added

**KnowledgeFeedbackResponse** (1 change)

* Model was added

**KnowledgeFeedbackResponseListing** (1 change)

* Model was added

**KnowledgeSearchFeedbackResponse** (1 change)

* Model was added

**KnowledgeFeedbackApprovalRequest** (1 change)

* Model was added

**KnowledgeSearchFeedback** (1 change)

* Model was added

**KnowledgeSearchFeedbackApprovalsRequest** (1 change)

* Model was added

**KnowledgeFeedbackRequest** (1 change)

* Model was added

**KnowledgeSearchFeedbackDocuments** (1 change)

* Model was added

**KnowledgeFeedbackPatchRequest** (1 change)

* Model was added

**KnowledgeTrainingRequest** (1 change)

* Model was added

**GetUploadSourceUrlJobStatusResponse** (1 change)

* Model was added

**CreateUploadSourceUrlJobResponse** (1 change)

* Model was added

**CreateUploadSourceUrlJobRequest** (1 change)

* Model was added

**KnowledgeContextResponse** (1 change)

* Model was added

**KnowledgeContextValueResponse** (1 change)

* Model was added

**KnowledgeContextRequest** (1 change)

* Model was added

**KnowledgeContextResponseListing** (1 change)

* Model was added

**KnowledgeContextValueRequest** (1 change)

* Model was added

**KnowledgeContextValueResponseListing** (1 change)

* Model was added

**DocumentBodyImageProperties** (2 changes)

* Optional property width was added
* Optional property widthUnit was added

**DocumentBodyTableCellBlockProperties** (1 change)

* Optional property widthUnit was added

**DocumentBodyTableProperties** (1 change)

* Optional property widthUnit was added

**DocumentVariation** (2 changes)

* Optional property priority was added
* Optional property name was added

**KnowledgeDocumentVersionVariation** (2 changes)

* Optional property priority was added
* Optional property name was added

**KnowledgeDocumentCopy** (1 change)

* Model was added

**KnowledgeDocumentPresentation** (1 change)

* Model was added

**KnowledgeDocumentVersionVariationReference** (1 change)

* Model was added

**KnowledgeDocumentFeedbackUpdateRequest** (1 change)

* Model was added

**KnowledgeDocumentQueryResponse** (1 change)

* Model was added

**KnowledgeDocumentQuery** (1 change)

* Model was added

**OperationListing** (1 change)

* Model was added

**OperationResponse** (1 change)

* Model was added

**OperationCreatorUserResponse** (1 change)

* Model was added

**KnowledgeParseJobRequestImport** (1 change)

* Model was added

**KnowledgeParseRecord** (1 change)

* Model was added

**KnowledgeParseImportResult** (1 change)

* Model was added

**KnowledgeParseJobResponse** (1 change)

* Model was added

**KnowledgeParseJobRequestPatch** (1 change)

* Model was added

**KnowledgeParseJobRequest** (1 change)

* Model was added

**KnowledgeDocumentSearchRequest** (1 change)

* Optional property includeVariations was added

**DraftListing** (1 change)

* Optional property cursors was added

**MinedIntentsListing** (1 change)

* Optional property cursors was added

**MinerListing** (1 change)

* Optional property cursors was added

**LimitChangeRequestUpdate** (1 change)

* Model was added

**LimitChangeRequest** (1 change)

* Model was added

**LogCaptureDownloadExecutionResponse** (1 change)

* Model was added

**LogCaptureQueryRequest** (1 change)

* Model was added

**LogCaptureFileResponse** (1 change)

* Model was added

**LogEntry** (1 change)

* Model was added

**LogCaptureQueryResponse** (1 change)

* Model was added

**PagelessEntityListing** (1 change)

* Model was added

**MarketplaceAd** (1 change)

* Model was added

**MarketplaceAdInput** (1 change)

* Model was added

**ApiInstructionResponseMapping** (1 change)

* Model was added

**HardwareInfo** (1 change)

* Model was added

**InstallationInstructions** (1 change)

* Model was added

**InstructionApiData** (1 change)

* Model was added

**InstructionPrerequisite** (1 change)

* Model was added

**InstructionRequirement** (1 change)

* Model was added

**LicensingInfo** (1 change)

* Model was added

**MarketingInfo** (1 change)

* Model was added

**MarketplaceListing** (1 change)

* Model was added

**MarketplaceListingCategoryPriority** (1 change)

* Model was added

**MarketplaceListingMetadata** (1 change)

* Model was added

**MarketplaceListingRegistryInfo** (1 change)

* Model was added

**MarketplacePlatform** (1 change)

* Model was added

**PricingOption** (1 change)

* Model was added

**ProductPermissionCombination** (1 change)

* Model was added

**SmartCase** (1 change)

* Model was added

**MarketplacePostListingInput** (1 change)

* Model was added

**MarketplaceListingMetadataInput** (1 change)

* Model was added

**ReorderListingMediaInput** (1 change)

* Model was added

**UpdateMarketplaceListingInput** (1 change)

* Model was added

**MarketplaceCategoryInput** (1 change)

* Model was added

**MarketplaceListingAdminMetadataInput** (1 change)

* Model was added

**DocumentNavigation** (1 change)

* Model was added

**Restrictions** (1 change)

* Model was added

**DocumentNavigationRequest** (1 change)

* Model was added

**Component** (1 change)

* Model was added

**DocumentSection** (1 change)

* Model was added

**MarketplaceDocument** (1 change)

* Model was added

**MarketplaceDocumentRequest** (1 change)

* Model was added

**EnterpriseAgreement** (1 change)

* Model was added

**EnterpriseAgreementPart** (1 change)

* Model was added

**EnterpriseAgreementCreateRequest** (1 change)

* Model was added

**EnterpriseAgreementUpdateRequest** (1 change)

* Model was added

**EnterpriseAgreementList** (1 change)

* Model was added

**EnterpriseAgreementSearchFilter** (1 change)

* Model was added

**Partner** (1 change)

* Model was added

**PartnerOffice** (1 change)

* Model was added

**PartnerOfficeHour** (1 change)

* Model was added

**PartnerOfficePhoneNumber** (1 change)

* Model was added

**PartnerWebsite** (1 change)

* Model was added

**PartnerRequest** (1 change)

* Model was added

**Reseller** (1 change)

* Model was added

**ResellerListing** (1 change)

* Model was added

**ResellerCreateRequest** (1 change)

* Model was added

**ResellerUpdateRequest** (1 change)

* Model was added

**ResellerListingSupportRequest** (1 change)

* Model was added

**Meeting** (1 change)

* Model was added

**MeetingOccurrence** (1 change)

* Model was added

**UserKey** (1 change)

* Model was added

**MeetingOccurrenceEntityListing** (1 change)

* Model was added

**PublicMessageActionRequest** (1 change)

* Model was added

**MessagingTask** (1 change)

* Model was added

**PagedEntityListing** (1 change)

* Model was added

**ChannelMetadata** (1 change)

* Model was added

**MessageMetadata** (1 change)

* Model was added

**MessageMetadataContent** (1 change)

* Model was added

**MessageMetadataEvent** (1 change)

* Model was added

**MessagingChannel** (1 change)

* Model was added

**NormalizedMessage** (1 change)

* Model was added

**PublicMetadata** (1 change)

* Model was added

**Reason** (1 change)

* Model was added

**MessageResponse** (1 change)

* Model was added

**MessagingPlatformIntegration** (1 change)

* Model was added

**MessagingPlatformIntegrationEntityListing** (1 change)

* Model was added

**SendMessageResponse** (1 change)

* Model was added

**AggregationEmailAddress** (1 change)

* Model was added

**EmailMessageRequest** (1 change)

* Model was added

**SendMessagesResponse** (1 change)

* Model was added

**PlatformFacebookAppCredentials** (1 change)

* Model was added

**PlatformFacebookIntegration** (1 change)

* Model was added

**PlatformFacebookIntegrationPatchRequest** (1 change)

* Model was added

**PlatformFacebookIntegrationRequest** (1 change)

* Model was added

**PlatformLineIntegration** (1 change)

* Model was added

**PlatformLineIntegrationPatchRequest** (1 change)

* Model was added

**PlatformLineIntegrationRequest** (1 change)

* Model was added

**PlatformOpenIntegration** (1 change)

* Model was added

**PlatformOpenIntegrationPatchRequest** (1 change)

* Model was added

**PlatformOpenIntegrationRequest** (1 change)

* Model was added

**SmsMessageRequest** (1 change)

* Model was added

**LongcodeSearchResult** (1 change)

* Model was added

**Longcode** (1 change)

* Model was added

**LongcodeListResult** (1 change)

* Model was added

**LongcodeOrder** (1 change)

* Model was added

**LongcodeRequest** (1 change)

* Model was added

**LongcodePortInRequest** (1 change)

* Model was added

**SenderPatchRequest** (1 change)

* Model was added

**ProvisioningOrder** (1 change)

* Model was added

**SimulatedSender** (1 change)

* Model was added

**AutoResponders** (1 change)

* Model was added

**SimulatedSenderRequest** (1 change)

* Model was added

**SimulatedSenderListResult** (1 change)

* Model was added

**SenderOrder** (1 change)

* Model was added

**TollfreeNumber** (1 change)

* Model was added

**TollfreeNumberListResult** (1 change)

* Model was added

**TollfreeNumberOrder** (1 change)

* Model was added

**TollfreeNumberRequest** (1 change)

* Model was added

**TollfreeNumberPortInRequest** (1 change)

* Model was added

**TollfreeNumberSearchResult** (1 change)

* Model was added

**PlatformTwitterIntegration** (1 change)

* Model was added

**PlatformTwitterIntegrationPatchRequest** (1 change)

* Model was added

**PlatformTwitterIntegrationRequest** (1 change)

* Model was added

**PlatformWhatsAppIntegration** (1 change)

* Model was added

**PlatformWhatsAppIntegrationPatchRequest** (1 change)

* Model was added

**PlatformWhatsAppIntegrationRequest** (1 change)

* Model was added

**Verifier** (1 change)

* Model was added

**UpdateVerifierRequest** (1 change)

* Model was added

**VerifierEntityListing** (1 change)

* Model was added

**Migration** (1 change)

* Model was added

**MigrationState** (1 change)

* Model was added

**MigrationUpdate** (1 change)

* Model was added

**MigrationListing** (1 change)

* Model was added

**NewRelicAction** (1 change)

* Model was added

**NewRelicActionList** (1 change)

* Model was added

**HealthCheckInfo** (1 change)

* Model was added

**WebhookInvocationResponse** (1 change)

* Model was added

**WebhookSchema** (1 change)

* Model was added

**ActionEventRequest** (1 change)

* Model was added

**BaseAppEventRequest** (1 change)

* Model was added

**BulkAppEventResponse** (1 change)

* Model was added

**UnprocessedAppEvent** (1 change)

* Model was added

**BulkAppEventRequest** (1 change)

* Model was added

**DeploymentPing** (1 change)

* Model was added

**DeploymentWebAction** (1 change)

* Model was added

**OpenActionProperties** (1 change)

* Model was added

**WebMessagingOfferProperties** (1 change)

* Model was added

**WebActionProperties** (1 change)

* Model was added

**WebsitePing** (1 change)

* Model was added

**WebsiteWebAction** (1 change)

* Model was added

**KnowledgeGuestDocumentView** (1 change)

* Model was added

**KnowledgeGuestDocumentPresentation** (1 change)

* Model was added

**KnowledgeGuestDocumentCopy** (1 change)

* Model was added

**PagedAdEntity** (1 change)

* Model was added

**MarketplaceListingCategory** (1 change)

* Model was added

**DocumentNavigationList** (1 change)

* Model was added

**PagedListingEntity** (1 change)

* Model was added

**MarketplaceFacet** (1 change)

* Model was added

**MarketplaceFacetValue** (1 change)

* Model was added

**PagedMarketplaceListings** (1 change)

* Model was added

**MarketplaceListingSearchInput** (1 change)

* Model was added

**DocumentList** (1 change)

* Model was added

**DocumentSearchInput** (1 change)

* Model was added

**MarketplaceReview** (1 change)

* Model was added

**MarketplaceReviewAnswer** (1 change)

* Model was added

**MarketplaceReviewAnswers** (1 change)

* Model was added

**MarketplaceReviewUser** (1 change)

* Model was added

**MarketplaceReviews** (1 change)

* Model was added

**PartnerList** (1 change)

* Model was added

**Captcha** (1 change)

* Model was added

**CreateFreeTrialStaging** (1 change)

* Model was added

**FreeTrialOtp** (1 change)

* Model was added

**LocationValidation** (1 change)

* Model was added

**Terms** (1 change)

* Model was added

**FreeTrialStaging** (1 change)

* Model was added

**Utm** (1 change)

* Model was added

**CreateFreeTrialOtp** (1 change)

* Model was added

**Invite** (1 change)

* Model was added

**JoinCode** (1 change)

* Model was added

**OrgBillingActivation** (1 change)

* Model was added

**ApplyOrgBillingActivationResponse** (1 change)

* Model was added

**ApplyOrgBillingActivationRequest** (1 change)

* Model was added

**OrgProvisioning** (1 change)

* Model was added

**CompleteOrgProvisioningResponse** (1 change)

* Model was added

**CompleteOrgProvisioningRequest** (1 change)

* Model was added

**OrgProvisioningUser** (1 change)

* Model was added

**StageOrgProvisioningResponse** (1 change)

* Model was added

**StageOrgProvisioningRequest** (1 change)

* Model was added

**Provisioning** (1 change)

* Model was added

**ProvisioningJobOtp** (1 change)

* Model was added

**CreateProvisioning** (1 change)

* Model was added

**CreateProvisioningOtp** (1 change)

* Model was added

**CreateUserResponse** (1 change)

* Model was added

**CreateUserRequest** (1 change)

* Model was added

**StageUserRequest** (1 change)

* Model was added

**JoinExistingOrgsResponse** (1 change)

* Model was added

**JoinExistingOrgsRequest** (1 change)

* Model was added

**DocumentationSearchRequest** (2 changes)

* Optional property returnFields was added
* Optional property expand was added

**DocumentationV2SearchRequest** (1 change)

* Optional property returnFields was added

**GKNDocumentationSearchRequest** (2 changes)

* Optional property returnFields was added
* Optional property expand was added

**NotificationSettings** (1 change)

* Model was added

**ApiUsageClientDataTransferExecutionResult** (1 change)

* Model was added

**ApiUsageDataTransferQuery** (1 change)

* Model was added

**InviteListing** (1 change)

* Model was added

**JoinCodeRequest** (1 change)

* Model was added

**JoinCodeListing** (1 change)

* Model was added

**EventDefinition** (1 change)

* Model was added

**EventDefinitionListing** (1 change)

* Model was added

**EnforceScopesSetting** (1 change)

* Model was added

**TrustGroup** (1 change)

* Optional property chat was added

**PhoneAddressData** (1 change)

* Model was added

**RegistrationConfiguration** (1 change)

* Model was added

**Registration** (1 change)

* Model was added

**BatchDownloadJobSubmission** (1 change)

* Optional property restoreArchivedRecordings was added

**EvaluationFormResponse** (2 changes)

* Optional property weightMode was added
* Optional property evaluationSettings was added

**EvaluationResponse** (7 changes)

* Optional property agentTeam was added
* Optional property disputeCount was added
* Optional property version was added
* Optional property versionHistory was added
* Optional property declinedReview was added
* Optional property evaluationContextId was added
* Optional property retractedEvaluation was added

**Survey** (1 change)

* Optional property agentTeam was added

**Annotation** (2 changes)

* Optional property queue was added
* Optional property flow was added

**MediaResult** (5 changes)

* Optional property screenId was added
* Optional property originX was added
* Optional property originY was added
* Optional property resolutionX was added
* Optional property resolutionY was added

**Recording** (1 change)

* Optional property externalContacts was added

**RecordingMessagingMessage** (2 changes)

* Optional property genericTemplates was added
* Optional property events was added

**RecordingMetadata** (1 change)

* Optional property region was added

**CommonAllAlertUpdateRequest** (1 change)

* Model was added

**ResponseText** (1 change)

* Optional property type was added

**QueueRequest** (1 change)

* Optional property predictiveRouting was added

**UserQueue** (1 change)

* Optional property predictiveRouting was added

**CreateQueueRequest** (1 change)

* Optional property predictiveRouting was added

**TranscriptionSettings** (2 changes)

* Optional property pciDssRedactionEnabled was added
* Optional property piiRedactionEnabled was added

**RoutingSettings** (1 change)

* Optional property allowCrossDivisionQueueMembers was added

**UtilizationLabelRequest** (1 change)

* Model was added

**UtilizationLabelEntityListing** (1 change)

* Model was added

**MediaUtilization** (1 change)

* Optional property utilizationTags was added

**Utilization** (1 change)

* Optional property labelUtilizations was added

**RoutingConversationAttributesResponse** (1 change)

* Optional property label was added

**RoutingConversationAttributesRequest** (1 change)

* Optional property labelId was added

**InteractionScore** (1 change)

* Model was added

**InteractionScoresResult** (1 change)

* Model was added

**InteractionScoresRequest** (1 change)

* Model was added

**InteractionToScore** (1 change)

* Model was added

**UserScore** (1 change)

* Model was added

**UserScoresResult** (1 change)

* Model was added

**UserScoresRequest** (1 change)

* Model was added

**UserToScore** (1 change)

* Model was added

**UpdateKpiRequest** (1 change)

* Model was added

**KeyPerformanceIndicatorType** (1 change)

* Model was added

**CreateKpiRequest** (1 change)

* Model was added

**ComparisonReportSummary** (1 change)

* Model was added

**MediaTypeComparisonSummaryItem** (1 change)

* Model was added

**RoutingComparisonItem** (1 change)

* Model was added

**ComparisonReportSummaryRequest** (1 change)

* Model was added

**ComparisonReportDetail** (1 change)

* Model was added

**InteractionTimedOutComparisonItem** (1 change)

* Model was added

**ComparisonReportDetailRequest** (1 change)

* Model was added

**AgentDirectRoutingBackupSettings** (1 change)

* Model was added

**AgentMaxUtilization** (1 change)

* Optional property labelUtilizations was added

**WrapupCodeRequest** (1 change)

* Optional property division was added

**UpdatedSettingsResponse** (1 change)

* Model was added

**AdvancedMicSettings** (1 change)

* Model was added

**DeviceProfile** (1 change)

* Model was added

**DeviceVolumeSettings** (1 change)

* Model was added

**MediaHelperSettings** (1 change)

* Model was added

**VoltSettings** (1 change)

* Model was added

**WebrtcDevice** (1 change)

* Model was added

**WebrtcDirectorySettings** (1 change)

* Model was added

**WebrtcGeneralSettings** (1 change)

* Model was added

**WebrtcUserSettings** (1 change)

* Model was added

**InfixOperator** (1 change)

* Model was added

**Operand** (1 change)

* Model was added

**OperandPosition** (1 change)

* Model was added

**OperatorPosition** (1 change)

* Model was added

**StaCategory** (1 change)

* Model was added

**Term** (1 change)

* Model was added

**CategoryRequest** (1 change)

* Model was added

**CategoriesEntityListing** (1 change)

* Model was added

**ConversationMetrics** (1 change)

* Optional property empathyScores was added

**SpeechTextAnalyticsSettingsResponse** (1 change)

* Optional property agentEmpathyEnabled was added

**SpeechTextAnalyticsSettingsRequest** (1 change)

* Optional property agentEmpathyEnabled was added

**Callheader** (1 change)

* Model was added

**Callmessage** (1 change)

* Model was added

**EdgeOfflineConfigurationResponse** (1 change)

* Model was added

**EdgeOfflineConfiguration** (1 change)

* Model was added

**EdgeOfflineConfigurationInterface** (1 change)

* Model was added

**EdgeOfflineConfigurationNetwork** (1 change)

* Model was added

**Edge** (3 changes)

* Optional property healthStatus was added
* Optional property dnsServers was added
* Optional property pin was added

**Site** (1 change)

* Optional property edgeGroup was added

**TrunkBase** (3 changes)

* Optional property mediaRegions was added
* Optional property site was added
* Optional property inboundSite was added

**DomainLogicalInterface** (1 change)

* Optional property networkCaptureEndDate was added

**DialTargetResponse** (1 change)

* Model was added

**DialTargetRequest** (1 change)

* Model was added

**EdgeTrunkBase** (4 changes)

* Optional property managed was added
* Optional property mediaRegions was added
* Optional property site was added
* Optional property inboundSite was added

**VolumeTask** (1 change)

* Model was added

**CreateVolumePayload** (1 change)

* Model was added

**FileConfiguration** (1 change)

* Model was added

**TestVolumeFileConfigurationResponse** (1 change)

* Model was added

**VolumeRecoveryEntity** (1 change)

* Model was added

**SerializableVolume** (1 change)

* Model was added

**FileRecoveryVolume** (1 change)

* Model was added

**FileStatus** (1 change)

* Model was added

**S3VerificationResponse** (1 change)

* Model was added

**RecoveredVolumePayload** (1 change)

* Model was added

**EntityListingAddressableEntityRef** (1 change)

* Model was added

**HybridCompatibilityResponse** (1 change)

* Model was added

**MediaStatisticsTrunkInfo** (1 change)

* Model was added

**AsgInfoResponse** (1 change)

* Model was added

**InstanceInfo** (1 change)

* Model was added

**AsgInfoListing** (1 change)

* Model was added

**UpgradeAsgResponse** (1 change)

* Model was added

**AsgUpgradeRequest** (1 change)

* Model was added

**AwsConfigRequest** (1 change)

* Model was added

**CreateAsgRequest** (1 change)

* Model was added

**CurrentAsgImage** (1 change)

* Model was added

**DecommissionedEdgeEntityListing** (1 change)

* Model was added

**ScaleASGResponse** (1 change)

* Model was added

**AsgScaleRequest** (1 change)

* Model was added

**UpgradeRule** (1 change)

* Model was added

**SiteConnections** (1 change)

* Model was added

**DisableSiteConnectionsRequest** (1 change)

* Model was added

**SitesSearchResponse** (1 change)

* Model was added

**SiteSearchCriteria** (1 change)

* Model was added

**SiteSearchRequest** (1 change)

* Model was added

**EdgeTier** (1 change)

* Model was added

**TrunkBasesSearchResponse** (1 change)

* Model was added

**TelephonySearchCriteria** (1 change)

* Model was added

**TelephonySearchRequest** (1 change)

* Model was added

**TrunkInstanceSearchResponse** (1 change)

* Model was added

**CheckinUsers** (1 change)

* Model was added

**TimUser** (1 change)

* Model was added

**CheckoutUser** (1 change)

* Model was added

**QueryInfo** (1 change)

* Model was added

**StaticEnvironment** (1 change)

* Model was added

**TestAutomationUsers** (1 change)

* Model was added

**TimUserCreate** (1 change)

* Model was added

**StaticEnvironments** (1 change)

* Model was added

**StaticOauthClient** (1 change)

* Model was added

**StaticOauthClients** (1 change)

* Model was added

**IntegrationApp** (1 change)

* Model was added

**StaticOrg** (1 change)

* Model was added

**StaticOrgs** (1 change)

* Model was added

**EmailResponse** (1 change)

* Model was added

**Body** (1 change)

* Model was added

**Content** (1 change)

* Model was added

**EmailContent** (1 change)

* Model was added

**EmailDestination** (1 change)

* Model was added

**EmailRequest** (1 change)

* Model was added

**EmailTemplate** (1 change)

* Model was added

**MessageTag** (1 change)

* Model was added

**RawMessage** (1 change)

* Model was added

**S3Object** (1 change)

* Model was added

**SimpleMessage** (1 change)

* Model was added

**IntegrationAuthResponse** (1 change)

* Model was added

**IntegrationAuthRequest** (1 change)

* Model was added

**UnifiedCommunicationsIntegration** (1 change)

* Model was added

**UnifiedCommunicationsIntegrationListing** (1 change)

* Model was added

**ListMeetingsResponsePageResult** (1 change)

* Model was added

**MeetingResponse** (1 change)

* Model was added

**MeetingsRequest** (1 change)

* Model was added

**ZoomDetailedGlobalDialInNumber** (1 change)

* Model was added

**ZoomDetailedMeeting** (1 change)

* Model was added

**ZoomDetailedMeetingOccurrence** (1 change)

* Model was added

**ZoomDetailedMeetingRecurrence** (1 change)

* Model was added

**ZoomDetailedMeetingSettings** (1 change)

* Model was added

**ZoomDetailedMeetingTrackingField** (1 change)

* Model was added

**ZoomSignatureResponse** (1 change)

* Model was added

**ZoomUserResponse** (1 change)

* Model was added

**ZoomEmailNotificationSetting** (1 change)

* Model was added

**ZoomFeatureSetting** (1 change)

* Model was added

**ZoomInMeetingSetting** (1 change)

* Model was added

**ZoomMeetingPasswordRequirementSetting** (1 change)

* Model was added

**ZoomRecordingPasswordRequirementSetting** (1 change)

* Model was added

**ZoomRecordingSetting** (1 change)

* Model was added

**ZoomScheduleMeetingSetting** (1 change)

* Model was added

**ZoomTelephonySetting** (1 change)

* Model was added

**ZoomTspSetting** (1 change)

* Model was added

**ZoomUserSettingsResponse** (1 change)

* Model was added

**ZoomMeetingEntityListing** (1 change)

* Model was added

**ZoomMeetingEntityResponse** (1 change)

* Model was added

**ZoomNewMeetingRequest** (1 change)

* Model was added

**ApiUsageOrganizationDataTransferExecutionResult** (1 change)

* Model was added

**ApiUsageDataTransferQueryResult** (1 change)

* Model was added

**ApiUsageDataTransferRow** (1 change)

* Model was added

**UserMe** (1 change)

* Optional property logCapture was added

**VoicebotConnectionResponse** (1 change)

* Model was added

**WebsocketConnectionParameters** (1 change)

* Model was added

**VoicebotConnectionRequest** (1 change)

* Model was added

**CreateVoicemailMessage** (1 change)

* Model was added

**ArchitectAuditMessage** (1 change)

* Model was added

**ArchitectAuditMessageListing** (1 change)

* Model was added

**CapabilitiesNluSettings** (1 change)

* Model was added

**CapabilitiesNluSupport** (1 change)

* Model was added

**CapabilitiesNluSupportedLanguage** (1 change)

* Model was added

**CategoryInfo** (1 change)

* Model was added

**Configuration** (1 change)

* Model was added

**ConfigurationCondition** (1 change)

* Model was added

**ConfigurationLanguage** (1 change)

* Model was added

**ConfigurationOverloads** (1 change)

* Model was added

**ConfigurationSubConditions** (1 change)

* Model was added

**FeatureSubConditions** (1 change)

* Model was added

**FeatureSupportConfiguration** (1 change)

* Model was added

**TTSConfiguration** (1 change)

* Model was added

**TTSEngine** (1 change)

* Model was added

**TTSEngineRef** (1 change)

* Model was added

**TTSVoice** (1 change)

* Model was added

**TTSVoiceRef** (1 change)

* Model was added

**Capabilities** (1 change)

* Model was added

**CapabilitiesAction** (1 change)

* Model was added

**CapabilitiesAvailability** (1 change)

* Model was added

**CapabilitiesCategoryInfo** (1 change)

* Model was added

**CapabilitiesDataType** (1 change)

* Model was added

**CapabilitiesDataTypeCharacteristicModel** (1 change)

* Model was added

**CapabilitiesDataTypeCharacteristicsModel** (1 change)

* Model was added

**CapabilitiesDataTypeDirectionByObject** (1 change)

* Model was added

**CapabilitiesDataTypeFacetsLimit** (1 change)

* Model was added

**CapabilitiesDataTypeFacetsModel** (1 change)

* Model was added

**CapabilitiesDataTypeInputOutputInfo** (1 change)

* Model was added

**CapabilitiesDataTypeProperty** (1 change)

* Model was added

**CapabilitiesDependencyType** (1 change)

* Model was added

**CapabilitiesFeatureSupport** (1 change)

* Model was added

**CapabilitiesFlowComponent** (1 change)

* Model was added

**CapabilitiesFlowType** (1 change)

* Model was added

**CapabilitiesFlowTypeLanguageSupport** (1 change)

* Model was added

**CapabilitiesFlowTypesAvailability** (1 change)

* Model was added

**CapabilitiesFuncOpOverloadIdModel** (1 change)

* Model was added

**CapabilitiesFunction** (1 change)

* Model was added

**CapabilitiesKnowledgeBase** (1 change)

* Model was added

**CapabilitiesLanguage** (1 change)

* Model was added

**CapabilitiesLanguageContextsModel** (1 change)

* Model was added

**CapabilitiesLanguageFeatures** (1 change)

* Model was added

**CapabilitiesLanguageTTS** (1 change)

* Model was added

**CapabilitiesLanguageTTSEngine** (1 change)

* Model was added

**CapabilitiesLanguageTTSEngineVoice** (1 change)

* Model was added

**CapabilitiesOrganization** (1 change)

* Model was added

**CapabilitiesTTSConfiguration** (1 change)

* Model was added

**CapabilitiesTTSEngine** (1 change)

* Model was added

**CapabilitiesTTSVoice** (1 change)

* Model was added

**CapabilitiesUnavailableReason** (1 change)

* Model was added

**ActionValidationObject** (1 change)

* Model was added

**BotConnectorValidationObject** (1 change)

* Model was added

**ComposerScriptValidationObject** (1 change)

* Model was added

**ContactListValidationObject** (1 change)

* Model was added

**DialogEngineBotValidationObject** (1 change)

* Model was added

**DialogEngineBotVersionValidationObject** (1 change)

* Model was added

**DialogEngineIntegrationIntent** (1 change)

* Model was added

**DialogEngineIntegrationSlot** (1 change)

* Model was added

**DialogflowAgentValidationObject** (1 change)

* Model was added

**DialogflowCxAgentValidationObject** (1 change)

* Model was added

**FlowManifest** (1 change)

* Model was added

**FlowValidationObject** (1 change)

* Model was added

**GrammarLanguageValidationObject** (1 change)

* Model was added

**GrammarValidationObject** (1 change)

* Model was added

**GroupAddress** (1 change)

* Model was added

**GroupValidationObject** (1 change)

* Model was added

**ImageValidationObject** (1 change)

* Model was added

**IntegrationValidationObject** (1 change)

* Model was added

**KnowledgeBaseDocumentValidationObject** (1 change)

* Model was added

**KnowledgeBaseValidationObject** (1 change)

* Model was added

**LanguageConfiguration** (1 change)

* Model was added

**LexBotAliasValidationObject** (1 change)

* Model was added

**LexV2BotAliasValidationObject** (1 change)

* Model was added

**NluDomainValidationObject** (1 change)

* Model was added

**NuanceMixBotValidationObject** (1 change)

* Model was added

**PromptResourceValidationObject** (1 change)

* Model was added

**PromptValidationObject** (1 change)

* Model was added

**Property** (1 change)

* Model was added

**ResponseLibrary** (1 change)

* Model was added

**ResponseValidationObject** (1 change)

* Model was added

**STTEngineValidationObject** (1 change)

* Model was added

**ScheduleGroupValidationObject** (1 change)

* Model was added

**ScheduleRef** (1 change)

* Model was added

**SchemaValidationObject** (1 change)

* Model was added

**StateValidationObject** (1 change)

* Model was added

**TTSEngineValidationObject** (1 change)

* Model was added

**TTSVoiceValidationObject** (1 change)

* Model was added

**UserValidationObject** (1 change)

* Model was added

**ValidationObject** (1 change)

* Model was added

**VariableSchema** (1 change)

* Model was added

**FlowValidationResults** (1 change)

* Model was added

**AssessmentForm** (1 change)

* Optional property weightMode was added

**LearningAssignment** (5 changes)

* Optional property assessmentProgress was added
* Optional property progress was added
* Optional property steps was added
* Optional property nextStep was added
* Optional property lengthInMinutes was added

**LearningModule** (4 changes)

* Optional property excludedFromCatalog was added
* Optional property enforceContentOrder was added
* Optional property reviewAssessmentResults was added
* Optional property lengthInMinutes was added

**ReviewAssessmentResults** (2 changes)

* Optional property byAssignees was added
* Optional property byViewers was added

**LearningAssignmentCreate** (1 change)

* Optional property lengthInMinutes was added

**DisallowedEntity** (1 change)

* Model was added

**LearningModuleRequest** (5 changes)

* Optional property lengthInMinutes was added
* Optional property excludedFromCatalog was added
* Optional property externalId was added
* Optional property enforceContentOrder was added
* Optional property reviewAssessmentResults was added

**LearningModuleArchiveResponse** (1 change)

* Model was added

**LearningModuleArchiveRequest** (1 change)

* Model was added

**AssignedLearningModule** (4 changes)

* Optional property excludedFromCatalog was added
* Optional property enforceContentOrder was added
* Optional property reviewAssessmentResults was added
* Optional property lengthInMinutes was added

**LearningAssignmentExternalUpdate** (1 change)

* Model was added

**LearningScormResponse** (1 change)

* Model was added

**LearningScormUploadResponse** (1 change)

* Model was added

**LearningScormUploadRequest** (1 change)

* Model was added

**BusinessUnitActivityCodeListing** (1 change)

* Optional property downloadUrl was added

**ListWrapper** (1 change)

* Model was added

**BuForecastModificationResponse** (2 changes)

* Optional property secondaryValues was added
* Optional property secondaryGranularity was added

**CreateBuForecastRequest** (1 change)

* Model was added

**GenerateBuForecastRequest** (1 change)

* Optional property forecastingMethod was added

**ComputeRawBuForecastResponse** (1 change)

* Model was added

**ComputeRawBuForecastResult** (1 change)

* Model was added

**ForecastPlanningGroupIntervalValues** (1 change)

* Model was added

**ComputeRawBuForecastRequest** (1 change)

* Model was added

**BuForecastStaffingRequirementsResult** (1 change)

* Model was added

**BuForecastStaffingRequirementsResultResponse** (1 change)

* Model was added

**StaffingRequirementsPlanningGroupData** (1 change)

* Model was added

**ForecastSourceDataActuals** (1 change)

* Model was added

**GetSourceDataRequest** (1 change)

* Model was added

**BuForecastModificationRequest** (1 change)

* Model was added

**ListWrapperBuForecastModificationRequest** (1 change)

* Model was added

**ListWrapperForecastSourceDayPointer** (1 change)

* Model was added

**UpdateBuForecastRequest** (1 change)

* Model was added

**SetWrapper** (1 change)

* Model was added

**DecisionsDownloadMetadata** (1 change)

* Model was added

**DecisionsFileMetadataEntityListing** (1 change)

* Model was added

**ForecastSearchCriteria** (1 change)

* Model was added

**ForecastSearchRequest** (1 change)

* Model was added

**DecisionsDownloadLink** (1 change)

* Model was added

**ValueWrapper** (1 change)

* Model was added

**AgentListResponse** (1 change)

* Model was added

**UpdateMuAgentRequest** (1 change)

* Model was added

**UpdateMuAgentsRequest** (1 change)

* Model was added

**UpdateAgentDetailsResponse** (1 change)

* Model was added

**AgentListWrapperRequest** (1 change)

* Model was added

**PlanningGroupHistoryEntity** (1 change)

* Model was added

**PlanningGroupHistoryQueryByVersionResponse** (1 change)

* Model was added

**PlanningGroupHistoryQueryByVersionResult** (1 change)

* Model was added

**PlanningGroupHistoryRoutePath** (1 change)

* Model was added

**PlanningGroupHistoryQueryByVersionRequest** (1 change)

* Model was added

**PlanningGroupList** (1 change)

* Optional property metadata was added

**ServiceGoalTemplateList** (1 change)

* Optional property metadata was added

**StaffingGroupListing** (1 change)

* Model was added

**StaffingGroupResponse** (1 change)

* Model was added

**CreateStaffingGroupRequest** (1 change)

* Model was added

**UpdateStaffingGroupRequest** (1 change)

* Model was added

**TimeOffPlan** (1 change)

* Optional property hrisTimeOffType was added

**AdminTimeOffRequestPatch** (1 change)

* Optional property paid was added

**TimeOffRequestListing** (1 change)

* Optional property downloadUrl was added

**StaffingGroupReference** (1 change)

* Model was added

**UserStaffingGroupListing** (1 change)

* Model was added

**UserStaffingGroupResponse** (1 change)

* Model was added

**QueryUserStaffingGroupListRequest** (1 change)

* Model was added

**WeekShiftTradeListResponse** (1 change)

* Optional property downloadUrl was added

**SearchShiftTradesResponse** (1 change)

* Optional property downloadUrl was added

**AgentManagementUnitListResponse** (1 change)

* Model was added

**WorkPlanListItemResponse** (1 change)

* Optional property startDayOfWeekend was added

**WorkPlan** (1 change)

* Optional property startDayOfWeekend was added

**CreateWorkPlan** (1 change)

* Optional property startDayOfWeekend was added

**WorkPlanValidationRequest** (1 change)

* Optional property startDayOfWeekend was added

**AlternativeShiftBuSettingsResponse** (1 change)

* Model was added

**ListWrapperAlternativeShiftBuSettingsActivityCategory** (1 change)

* Model was added

**ListWrapperAlternativeShiftBuSettingsGranularity** (1 change)

* Model was added

**UpdateAlternativeShiftBuSettingsRequest** (1 change)

* Model was added

**UpdateAgentRequest** (1 change)

* Model was added

**ForecastCreationResponse** (1 change)

* Model was added

**ForecastProcessingError** (1 change)

* Model was added

**ForecastCreationRequest** (1 change)

* Model was added

**HistoricalDataSet** (1 change)

* Model was added

**OperatingDayOfWeekTimePair** (1 change)

* Model was added

**OperatingPeriod** (1 change)

* Model was added

**TimeSeriesDataPoint** (1 change)

* Model was added

**AvailablePeriod** (1 change)

* Model was added

**HistoricalOverlayDataAvailability** (1 change)

* Model was added

**HistoricalOverlayDataQueryResponse** (1 change)

* Model was added

**PlanningGroupHistory** (1 change)

* Model was added

**HistoricalOverlayDataQueryRequest** (1 change)

* Model was added

**PerformancePredictionOutputs** (1 change)

* Model was added

**PerformancePredictionResponse** (1 change)

* Model was added

**PlanningGroupOutputs** (1 change)

* Model was added

**AgentQueueTimeRequest** (1 change)

* Model was added

**MuAgentQueueTimeRequest** (1 change)

* Model was added

**PerformancePredictionRecalculationUploadResponse** (1 change)

* Model was added

**PerformancePredictionUploadSchema** (1 change)

* Model was added

**PerformancePredictionRecalculationResponse** (1 change)

* Model was added

**BuRescheduleRequest** (1 change)

* Optional property testingOptions was added

**BuGenerateScheduleRequest** (1 change)

* Optional property testingOptions was added

**BuTimeOffLimitListing** (1 change)

* Model was added

**BuTimeOffLimitResponse** (1 change)

* Model was added

**BuSetTimeOffLimitValuesRequest** (1 change)

* Model was added

**BuTimeOffLimitRange** (1 change)

* Model was added

**BuTimeOffLimitReference** (1 change)

* Model was added

**BuTimeOffLimitValueRange** (1 change)

* Model was added

**BuTimeOffLimitValuesResponse** (1 change)

* Model was added

**BuCreateTimeOffLimitRequest** (1 change)

* Model was added

**BuTimeOffPlanResponse** (1 change)

* Model was added

**TimeOffPlanBusinessUnitAssociation** (1 change)

* Model was added

**TimeOffPlanManagementUnitAssociation** (1 change)

* Model was added

**BuUpdateTimeOffPlanRequest** (1 change)

* Model was added

**UpdateTimeOffPlanBusinessUnitAssociation** (1 change)

* Model was added

**UpdateTimeOffPlanManagementUnitAssociation** (1 change)

* Model was added

**BuCreateTimeOffPlanRequest** (1 change)

* Model was added

**CreateTimeOffPlanBusinessUnitAssociation** (1 change)

* Model was added

**CreateTimeOffPlanManagementUnitAssociation** (1 change)

* Model was added

**BuTimeOffPlanListing** (1 change)

* Model was added

**WorkitemsAttributeChange** (1 change)

* Model was added

**WorkitemsChange** (1 change)

* Model was added


# Point Changes (0 changes)
