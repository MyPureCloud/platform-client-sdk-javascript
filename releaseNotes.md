Platform API version: 3526


# Major Changes (2 changes)

**/api/v2/flows/datatables/{datatableId}/import/jobs/{importJobId}** (1 change)

* Path /api/v2/flows/datatables/{datatableId}/import/jobs/{importJobId} was removed

**DataTableImportJob** (1 change)

* Model DataTableImportJob was removed


# Minor Changes (34 changes)

**GET /api/v2/analytics/conversations/details/jobs/{jobId}** (1 change)

* Response 202 was added

**/api/v2/ipranges** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/siptraces** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/siptraces/download** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/telephony/siptraces/download/{downloadId}** (2 changes)

* Path was added
* Operation GET was added

**Site** (1 change)

* Optional property mediaRegionsUseLatencyBased was added

**EventMessage** (1 change)

* Enum value CONTACT_LIST_FILTER_INTERNAL_ERROR was added to property code

**EvaluationDetailQueryPredicate** (2 changes)

* Enum value deleted was added to property dimension
* Enum value rescored was added to property dimension

**AsyncConversationQuery** (1 change)

* Optional property startOfDayIntervalMatching was added

**IpAddressRange** (1 change)

* Model was added

**IpAddressRangeListing** (1 change)

* Model was added

**EvaluationAggregateQueryPredicate** (2 changes)

* Enum value evaluationCreatedDate was added to property dimension
* Enum value rescored was added to property dimension

**EvaluationAggregationQuery** (4 changes)

* Enum value evaluationCreatedDate was added to property groupBy
* Enum value rescored was added to property groupBy
* Enum value nEvaluationsDeleted was added to property metrics
* Enum value nEvaluationsRescored was added to property metrics

**EvaluationAggregationView** (2 changes)

* Enum value nEvaluationsDeleted was added to property target
* Enum value nEvaluationsRescored was added to property target

**TrusteeBillingOverview** (1 change)

* Optional property minimumMonthlyAmount was added

**ReportingExportJobResponse** (1 change)

* Enum value PDF was added to property exportFormat

**ReportingExportJobRequest** (1 change)

* Enum value PDF was added to property exportFormat

**FlowAggregateQueryPredicate** (1 change)

* Enum value flowOutType was added to property dimension

**FlowAggregationQuery** (1 change)

* Enum value flowOutType was added to property groupBy

**HomerRecord** (1 change)

* Model was added

**SipSearchResult** (1 change)

* Model was added

**SipDownloadResponse** (1 change)

* Model was added

**SIPSearchPublicRequest** (1 change)

* Model was added

**SignedUrlResponse** (1 change)

* Model was added


# Point Changes (0 changes)
