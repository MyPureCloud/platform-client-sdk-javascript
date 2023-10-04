---
title: CarrierServicesApi
---
# platformClient.CarrierServicesApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteCarrierservicesBillingNumberrates**](CarrierServicesApi.html#deleteCarrierservicesBillingNumberrates) | **DELETE** /api/v2/carrierservices/billing/numberrates | Delete effective number rates
[**deleteCarrierservicesBillingUsagerateregions**](CarrierServicesApi.html#deleteCarrierservicesBillingUsagerateregions) | **DELETE** /api/v2/carrierservices/billing/usagerateregions | Update effective usageRateRegions
[**deleteCarrierservicesCarrierService**](CarrierServicesApi.html#deleteCarrierservicesCarrierService) | **DELETE** /api/v2/carrierservices/carriers/{carrierId}/services/{serviceId} | Deletes a specific service for a given carrier (i.e. OUTBOUND, INBOUND...)
[**deleteCarrierservicesCsvschemaNameSchemaName**](CarrierServicesApi.html#deleteCarrierservicesCsvschemaNameSchemaName) | **DELETE** /api/v2/carrierservices/csvschemas/{carrierId}/name/{schemaName} | Deletes a CSV schema for a carrier.
[**deleteCarrierservicesIntegrationsEmergencylocationsMe**](CarrierServicesApi.html#deleteCarrierservicesIntegrationsEmergencylocationsMe) | **DELETE** /api/v2/carrierservices/integrations/emergencylocations/me | Clear current emergency location for the logged in user
[**deleteCarrierservicesNumberpurchaseOrder**](CarrierServicesApi.html#deleteCarrierservicesNumberpurchaseOrder) | **DELETE** /api/v2/carrierservices/numberpurchase/orders/{orderId} | Disconnect the number purchased in a particular order.  The order record remains (in the deleted state) for record keeping.
[**deleteCarrierservicesNumberpurchaseReservedReservationId**](CarrierServicesApi.html#deleteCarrierservicesNumberpurchaseReservedReservationId) | **DELETE** /api/v2/carrierservices/numberpurchase/reserved/{reservationId} | Cancel a specific reservation, making the number available for other users, again.
[**deleteCarrierservicesTemplate**](CarrierServicesApi.html#deleteCarrierservicesTemplate) | **DELETE** /api/v2/carrierservices/templates/{templateId} | Delete template by id
[**deleteCarrierservicesTransformendpoint**](CarrierServicesApi.html#deleteCarrierservicesTransformendpoint) | **DELETE** /api/v2/carrierservices/transformendpoints/{endpointId} | Delete an existing Endpoint plan for uploaded Transforms
[**deleteCarrierservicesUploadtransformSpreadsheet**](CarrierServicesApi.html#deleteCarrierservicesUploadtransformSpreadsheet) | **DELETE** /api/v2/carrierservices/uploadtransform/spreadsheets/{transformId} | Delete an existing transform plan for uploaded spreadsheets
[**deleteCarrierservicesUploadtransformTexttable**](CarrierServicesApi.html#deleteCarrierservicesUploadtransformTexttable) | **DELETE** /api/v2/carrierservices/uploadtransform/texttables/{transformId} | Delete an existing transform plan for uploaded delimited text tables
[**deleteCarrierservicesXlsxschemaNameSchemaName**](CarrierServicesApi.html#deleteCarrierservicesXlsxschemaNameSchemaName) | **DELETE** /api/v2/carrierservices/xlsxschemas/{carrierId}/name/{schemaName} | Deletes a XLSX schema for a carrier.
[**getCarrierservicesBillingBandwidthcurrencypricingCurrencyName**](CarrierServicesApi.html#getCarrierservicesBillingBandwidthcurrencypricingCurrencyName) | **GET** /api/v2/carrierservices/billing/bandwidthcurrencypricing/{currencyName} | Gets the bandwidth currency pricing for the given currency
[**getCarrierservicesBillingBandwidthpricingCustomerId**](CarrierServicesApi.html#getCarrierservicesBillingBandwidthpricingCustomerId) | **GET** /api/v2/carrierservices/billing/bandwidthpricing/{customerId} | Gets the bandwidth pricing for the given customerId
[**getCarrierservicesBillingBill**](CarrierServicesApi.html#getCarrierservicesBillingBill) | **GET** /api/v2/carrierservices/billing/bills/{billId} | Get updated task status for the bill generation
[**getCarrierservicesBillingMonthlyrecurringcostMrcId**](CarrierServicesApi.html#getCarrierservicesBillingMonthlyrecurringcostMrcId) | **GET** /api/v2/carrierservices/billing/monthlyrecurringcost/{mrcId} | Get updated task status for monthly recurring cost (MRC) line items
[**getCarrierservicesBillingNonrecurringcostNrcId**](CarrierServicesApi.html#getCarrierservicesBillingNonrecurringcostNrcId) | **GET** /api/v2/carrierservices/billing/nonrecurringcost/{nrcId} | Get updated task status for non-recurring cost (NRC) line items
[**getCarrierservicesBillingNumberrates**](CarrierServicesApi.html#getCarrierservicesBillingNumberrates) | **GET** /api/v2/carrierservices/billing/numberrates | View effective number rates.
[**getCarrierservicesBillingUsagerateregions**](CarrierServicesApi.html#getCarrierservicesBillingUsagerateregions) | **GET** /api/v2/carrierservices/billing/usagerateregions | View effective usageRateRegions.
[**getCarrierservicesCarrier**](CarrierServicesApi.html#getCarrierservicesCarrier) | **GET** /api/v2/carrierservices/carriers/{carrierId} | Get specified carrier by its carrier id
[**getCarrierservicesCarrierService**](CarrierServicesApi.html#getCarrierservicesCarrierService) | **GET** /api/v2/carrierservices/carriers/{carrierId}/services/{serviceId} | Retrieves a specific service for a given carrier (i.e. OUTBOUND, INBOUND...)
[**getCarrierservicesCarrierServices**](CarrierServicesApi.html#getCarrierservicesCarrierServices) | **GET** /api/v2/carrierservices/carriers/{carrierId}/services | Retrieves all services for a given carrier (i.e. OUTBOUND, INBOUND...)
[**getCarrierservicesCarriers**](CarrierServicesApi.html#getCarrierservicesCarriers) | **GET** /api/v2/carrierservices/carriers | Get the list of carriers, optionally filtered by inventory status
[**getCarrierservicesCdrsBackupResultId**](CarrierServicesApi.html#getCarrierservicesCdrsBackupResultId) | **GET** /api/v2/carrierservices/cdrs/backup/{resultId} | Gets a the result from manually backing up CDRs.
[**getCarrierservicesCdrsBackupsListResultId**](CarrierServicesApi.html#getCarrierservicesCdrsBackupsListResultId) | **GET** /api/v2/carrierservices/cdrs/backups/list/{resultId} | Gets a the result from listing backed up CDRs.
[**getCarrierservicesCsvschema**](CarrierServicesApi.html#getCarrierservicesCsvschema) | **GET** /api/v2/carrierservices/csvschemas/{carrierId} | Get all CSV schemas for a given carrier.
[**getCarrierservicesCsvschemaNameSchemaName**](CarrierServicesApi.html#getCarrierservicesCsvschemaNameSchemaName) | **GET** /api/v2/carrierservices/csvschemas/{carrierId}/name/{schemaName} | Get all CSV schemas for a given carrier and name.
[**getCarrierservicesCsvschemas**](CarrierServicesApi.html#getCarrierservicesCsvschemas) | **GET** /api/v2/carrierservices/csvschemas | Get all CSV schemas available.
[**getCarrierservicesIntegrationsEmergencylocationsMe**](CarrierServicesApi.html#getCarrierservicesIntegrationsEmergencylocationsMe) | **GET** /api/v2/carrierservices/integrations/emergencylocations/me | Get location for the logged in user
[**getCarrierservicesNumberinventoryInventorynumber**](CarrierServicesApi.html#getCarrierservicesNumberinventoryInventorynumber) | **GET** /api/v2/carrierservices/numberinventory/inventorynumbers/{phoneNumberId} | Get an InventoryNumber
[**getCarrierservicesNumberinventoryInventorynumbers**](CarrierServicesApi.html#getCarrierservicesNumberinventoryInventorynumbers) | **GET** /api/v2/carrierservices/numberinventory/inventorynumbers | Get all InventoryNumbers. Filtering is supported.
[**getCarrierservicesNumberinventoryInventorynumbersAvailable**](CarrierServicesApi.html#getCarrierservicesNumberinventoryInventorynumbersAvailable) | **GET** /api/v2/carrierservices/numberinventory/inventorynumbers/available | Get available InventoryNumbers.
[**getCarrierservicesNumberinventoryServicecapabilities**](CarrierServicesApi.html#getCarrierservicesNumberinventoryServicecapabilities) | **GET** /api/v2/carrierservices/numberinventory/servicecapabilities | Get all available service capabilities
[**getCarrierservicesNumberinventoryServicecapabilitiesDescriptions**](CarrierServicesApi.html#getCarrierservicesNumberinventoryServicecapabilitiesDescriptions) | **GET** /api/v2/carrierservices/numberinventory/servicecapabilities/descriptions | Get all available service capabilities and descriptions
[**getCarrierservicesNumbermanagementPortrequestTaskResults**](CarrierServicesApi.html#getCarrierservicesNumbermanagementPortrequestTaskResults) | **GET** /api/v2/carrierservices/numbermanagement/portrequest/tasks/{taskId}/results | Retrieve results from async port requests update task.
[**getCarrierservicesNumbermanagementPortrequestTaskStatus**](CarrierServicesApi.html#getCarrierservicesNumbermanagementPortrequestTaskStatus) | **GET** /api/v2/carrierservices/numbermanagement/portrequest/tasks/{taskId}/status | Retrieve a port request update task to check its state
[**getCarrierservicesNumbermanagementPortrequestsDisconnectTask**](CarrierServicesApi.html#getCarrierservicesNumbermanagementPortrequestsDisconnectTask) | **GET** /api/v2/carrierservices/numbermanagement/portrequests/disconnect/tasks/{taskId} | Retrieve a port request delete task to check its state
[**getCarrierservicesNumbermanagementPortrequestsDisconnectTaskResults**](CarrierServicesApi.html#getCarrierservicesNumbermanagementPortrequestsDisconnectTaskResults) | **GET** /api/v2/carrierservices/numbermanagement/portrequests/disconnect/tasks/{taskId}/results | Retrieve results from async port requests delete task.
[**getCarrierservicesNumbermanagementPortrequestsTask**](CarrierServicesApi.html#getCarrierservicesNumbermanagementPortrequestsTask) | **GET** /api/v2/carrierservices/numbermanagement/portrequests/tasks/{taskId} | Retrieve a port request task to check its state
[**getCarrierservicesNumbermanagementPortrequestsTaskResults**](CarrierServicesApi.html#getCarrierservicesNumbermanagementPortrequestsTaskResults) | **GET** /api/v2/carrierservices/numbermanagement/portrequests/tasks/{taskId}/results | Retrieve a list of number orders for a port request by their completed taskId
[**getCarrierservicesNumberpurchase20160715AvailableTaskId**](CarrierServicesApi.html#getCarrierservicesNumberpurchase20160715AvailableTaskId) | **GET** /api/v2/carrierservices/numberpurchase/20160715/available/{taskId} | Retrieve search result status for previous search.
[**getCarrierservicesNumberpurchase20180810AvailableTaskId**](CarrierServicesApi.html#getCarrierservicesNumberpurchase20180810AvailableTaskId) | **GET** /api/v2/carrierservices/numberpurchase/20180810/available/{taskId} | Retrieve search result status for previous search.
[**getCarrierservicesNumberpurchase20190107DisconnectTask**](CarrierServicesApi.html#getCarrierservicesNumberpurchase20190107DisconnectTask) | **GET** /api/v2/carrierservices/numberpurchase/20190107/disconnect/tasks/{taskId} | Retrieve a number orders task to check its state
[**getCarrierservicesNumberpurchase20190107DisconnectTaskResults**](CarrierServicesApi.html#getCarrierservicesNumberpurchase20190107DisconnectTaskResults) | **GET** /api/v2/carrierservices/numberpurchase/20190107/disconnect/tasks/{taskId}/results | Retrieve the results task of a number orders tasks by its completed taskId
[**getCarrierservicesNumberpurchase20190107ExportTask**](CarrierServicesApi.html#getCarrierservicesNumberpurchase20190107ExportTask) | **GET** /api/v2/carrierservices/numberpurchase/20190107/export/tasks/{taskId} | Retrieve a number order export task to check its state
[**getCarrierservicesNumberpurchase20190107ExportTaskResult**](CarrierServicesApi.html#getCarrierservicesNumberpurchase20190107ExportTaskResult) | **GET** /api/v2/carrierservices/numberpurchase/20190107/export/tasks/{taskId}/result | Retrieve the results task of a number order export tasks by its completed taskId
[**getCarrierservicesNumberpurchase20200902ReservationsTask**](CarrierServicesApi.html#getCarrierservicesNumberpurchase20200902ReservationsTask) | **GET** /api/v2/carrierservices/numberpurchase/20200902/reservations/tasks/{taskId} | Retrieve a reservation task to check its state
[**getCarrierservicesNumberpurchase20200902ReservationsTaskResults**](CarrierServicesApi.html#getCarrierservicesNumberpurchase20200902ReservationsTaskResults) | **GET** /api/v2/carrierservices/numberpurchase/20200902/reservations/tasks/{taskId}/results | Retrieve a list of reservations by their completed taskId
[**getCarrierservicesNumberpurchase20210520Orders**](CarrierServicesApi.html#getCarrierservicesNumberpurchase20210520Orders) | **GET** /api/v2/carrierservices/numberpurchase/20210520/orders | View all number orders for the organization of a listing of phone number types or a status, or a combination thereof.
[**getCarrierservicesNumberpurchaseOrder**](CarrierServicesApi.html#getCarrierservicesNumberpurchaseOrder) | **GET** /api/v2/carrierservices/numberpurchase/orders/{orderId} | View all a number order record.  Some vendor apis have side effects when viewing records with pending operations.  This method also manages the side effects and updates ININ-side data stores to reflect any changes.
[**getCarrierservicesNumberpurchaseOrders**](CarrierServicesApi.html#getCarrierservicesNumberpurchaseOrders) | **GET** /api/v2/carrierservices/numberpurchase/orders | View all number orders for the organization of a phone number type or a status, or a combination thereof.
[**getCarrierservicesNumberpurchaseOrdersDidDid**](CarrierServicesApi.html#getCarrierservicesNumberpurchaseOrdersDidDid) | **GET** /api/v2/carrierservices/numberpurchase/orders/did/{did} | Check if a number is PCV number. This would return 200 if there is an order with this number, and the status is COMPLETE. Otherwise a 404 is returned.
[**getCarrierservicesNumberpurchasePortrequest**](CarrierServicesApi.html#getCarrierservicesNumberpurchasePortrequest) | **GET** /api/v2/carrierservices/numberpurchase/portrequests/{portRequestId} | Get details of a specific port request.
[**getCarrierservicesNumberpurchasePortrequestOrders**](CarrierServicesApi.html#getCarrierservicesNumberpurchasePortrequestOrders) | **GET** /api/v2/carrierservices/numberpurchase/portrequests/{portRequestId}/orders | View all number orders for a given port request in an organization.
[**getCarrierservicesNumberpurchasePortrequests**](CarrierServicesApi.html#getCarrierservicesNumberpurchasePortrequests) | **GET** /api/v2/carrierservices/numberpurchase/portrequests | View all port requests for an organization.
[**getCarrierservicesNumberpurchasePortrequestsTransitive**](CarrierServicesApi.html#getCarrierservicesNumberpurchasePortrequestsTransitive) | **GET** /api/v2/carrierservices/numberpurchase/portrequests/transitive | All port requests with the transitive property added.
[**getCarrierservicesNumberpurchaseReservedReservationId**](CarrierServicesApi.html#getCarrierservicesNumberpurchaseReservedReservationId) | **GET** /api/v2/carrierservices/numberpurchase/reserved/{reservationId} | View a specific reservation.
[**getCarrierservicesNumberpurchaseSupportedcountries**](CarrierServicesApi.html#getCarrierservicesNumberpurchaseSupportedcountries) | **GET** /api/v2/carrierservices/numberpurchase/supportedcountries | Find supported countries based on country (US, CA, PR, etc.) and if the number is Tollfree or DID
[**getCarrierservicesPricingNumberrate**](CarrierServicesApi.html#getCarrierservicesPricingNumberrate) | **GET** /api/v2/carrierservices/pricing/numberrate | Get effective number rate.
[**getCarrierservicesProgress**](CarrierServicesApi.html#getCarrierservicesProgress) | **GET** /api/v2/carrierservices/progress | Get ratesheet upload progress for a user.
[**getCarrierservicesReportLineitemsFee**](CarrierServicesApi.html#getCarrierservicesReportLineitemsFee) | **GET** /api/v2/carrierservices/report/lineitems/fees/{feesId} | Get updated task status for fee line items
[**getCarrierservicesReportLineitemsUsageUsageId**](CarrierServicesApi.html#getCarrierservicesReportLineitemsUsageUsageId) | **GET** /api/v2/carrierservices/report/lineitems/usage/{usageId} | Get updated task status for usage line items
[**getCarrierservicesReportUsageCallsCsv**](CarrierServicesApi.html#getCarrierservicesReportUsageCallsCsv) | **GET** /api/v2/carrierservices/report/usage/calls/csv | Get all task statuses
[**getCarrierservicesReportUsageCallsCsvCsvId**](CarrierServicesApi.html#getCarrierservicesReportUsageCallsCsvCsvId) | **GET** /api/v2/carrierservices/report/usage/calls/csv/{csvId} | Get updated task status
[**getCarrierservicesSignaturesTask**](CarrierServicesApi.html#getCarrierservicesSignaturesTask) | **GET** /api/v2/carrierservices/signatures/tasks/{taskId} | Retrieve a signature task to check its state
[**getCarrierservicesSignaturesTaskResults**](CarrierServicesApi.html#getCarrierservicesSignaturesTaskResults) | **GET** /api/v2/carrierservices/signatures/tasks/{taskId}/results | Retrieve signature task by their completed taskId
[**getCarrierservicesSipdnsdetails**](CarrierServicesApi.html#getCarrierservicesSipdnsdetails) | **GET** /api/v2/carrierservices/sipdnsdetails | Get all SIP Dns data for the current region.
[**getCarrierservicesSortweightsInfo**](CarrierServicesApi.html#getCarrierservicesSortweightsInfo) | **GET** /api/v2/carrierservices/sortweights/info | Get service type sort weight limits and defaults.
[**getCarrierservicesSupportedcountries**](CarrierServicesApi.html#getCarrierservicesSupportedcountries) | **GET** /api/v2/carrierservices/supportedcountries | Get all supported countries for PureCloud Voice.  These are returned in their ISO 3166-1 form.
[**getCarrierservicesSupportedcountry**](CarrierServicesApi.html#getCarrierservicesSupportedcountry) | **GET** /api/v2/carrierservices/supportedcountries/{countryCode} | Check if country is supported for PureCloud Voice.
[**getCarrierservicesTemplate**](CarrierServicesApi.html#getCarrierservicesTemplate) | **GET** /api/v2/carrierservices/templates/{templateId} | Get template by id
[**getCarrierservicesTemplates**](CarrierServicesApi.html#getCarrierservicesTemplates) | **GET** /api/v2/carrierservices/templates | Get all templates
[**getCarrierservicesTransformendpoint**](CarrierServicesApi.html#getCarrierservicesTransformendpoint) | **GET** /api/v2/carrierservices/transformendpoints/{endpointId} | Get a stored Endpoint plan for uploaded Transforms
[**getCarrierservicesTransformendpoints**](CarrierServicesApi.html#getCarrierservicesTransformendpoints) | **GET** /api/v2/carrierservices/transformendpoints | Get a stored transform plan for uploaded spreadsheets
[**getCarrierservicesTransformprogres**](CarrierServicesApi.html#getCarrierservicesTransformprogres) | **GET** /api/v2/carrierservices/transformprogress/{progressId} | The progress report for an upload
[**getCarrierservicesTransformprogressSearchServiceName**](CarrierServicesApi.html#getCarrierservicesTransformprogressSearchServiceName) | **GET** /api/v2/carrierservices/transformprogress/search/{serviceName} | Get The progress report for transforming uploaded documents
[**getCarrierservicesTransformprogressSearchServiceNameModelType**](CarrierServicesApi.html#getCarrierservicesTransformprogressSearchServiceNameModelType) | **GET** /api/v2/carrierservices/transformprogress/search/{serviceName}/{modelType} | Get The progress report for transforming uploaded documents
[**getCarrierservicesTransformprogressSearchServiceNameModelTypeModelId**](CarrierServicesApi.html#getCarrierservicesTransformprogressSearchServiceNameModelTypeModelId) | **GET** /api/v2/carrierservices/transformprogress/search/{serviceName}/{modelType}/{modelId} | Get The progress report for transforming uploaded documents
[**getCarrierservicesUploadtransformSpreadsheet**](CarrierServicesApi.html#getCarrierservicesUploadtransformSpreadsheet) | **GET** /api/v2/carrierservices/uploadtransform/spreadsheets/{transformId} | Get a stored transform plan for uploaded spreadsheets
[**getCarrierservicesUploadtransformSpreadsheets**](CarrierServicesApi.html#getCarrierservicesUploadtransformSpreadsheets) | **GET** /api/v2/carrierservices/uploadtransform/spreadsheets | Get a stored transform plan for uploaded spreadsheets
[**getCarrierservicesUploadtransformTexttable**](CarrierServicesApi.html#getCarrierservicesUploadtransformTexttable) | **GET** /api/v2/carrierservices/uploadtransform/texttables/{transformId} | Get a stored transform plan for uploaded delimited text tables
[**getCarrierservicesUploadtransformTexttables**](CarrierServicesApi.html#getCarrierservicesUploadtransformTexttables) | **GET** /api/v2/carrierservices/uploadtransform/texttables | Get a stored transform plan for uploaded delimited text tables
[**getCarrierservicesXlsxschema**](CarrierServicesApi.html#getCarrierservicesXlsxschema) | **GET** /api/v2/carrierservices/xlsxschemas/{carrierId} | Get all XLSX schemas for a given carrier.
[**getCarrierservicesXlsxschemaNameSchemaName**](CarrierServicesApi.html#getCarrierservicesXlsxschemaNameSchemaName) | **GET** /api/v2/carrierservices/xlsxschemas/{carrierId}/name/{schemaName} | Get all XLSX schemas for a given carrier and name.
[**getCarrierservicesXlsxschemas**](CarrierServicesApi.html#getCarrierservicesXlsxschemas) | **GET** /api/v2/carrierservices/xlsxschemas | Get all available XLSX schemas.
[**patchCarrierservicesNumberinventoryInventorynumber**](CarrierServicesApi.html#patchCarrierservicesNumberinventoryInventorynumber) | **PATCH** /api/v2/carrierservices/numberinventory/inventorynumbers/{phoneNumberId} | Partial update or patch of an InventoryNumber.
[**patchCarrierservicesNumberinventoryInventorynumbersBulk**](CarrierServicesApi.html#patchCarrierservicesNumberinventoryInventorynumbersBulk) | **PATCH** /api/v2/carrierservices/numberinventory/inventorynumbers/bulk | Partial update or patch of many InventoryNumbers.
[**patchCarrierservicesNumberpurchaseOrder**](CarrierServicesApi.html#patchCarrierservicesNumberpurchaseOrder) | **PATCH** /api/v2/carrierservices/numberpurchase/orders/{orderId} | Patches individual properties of a number order record.  Not all fields will be allowed to be modified.  Only defaultLocationId and phoneNumberType are currently allowed to be modified .
[**postCarrierservicesBillingBandwidthcurrencypricing**](CarrierServicesApi.html#postCarrierservicesBillingBandwidthcurrencypricing) | **POST** /api/v2/carrierservices/billing/bandwidthcurrencypricing | Creates bandwidth currency pricing
[**postCarrierservicesBillingBandwidthpricing**](CarrierServicesApi.html#postCarrierservicesBillingBandwidthpricing) | **POST** /api/v2/carrierservices/billing/bandwidthpricing | Creates bandwidth pricing
[**postCarrierservicesBillingBills**](CarrierServicesApi.html#postCarrierservicesBillingBills) | **POST** /api/v2/carrierservices/billing/bills | Initiate bill generation
[**postCarrierservicesBillingMonthlyrecurringcost**](CarrierServicesApi.html#postCarrierservicesBillingMonthlyrecurringcost) | **POST** /api/v2/carrierservices/billing/monthlyrecurringcost | Initiate monthly recurring cost (MRC) line items report generation
[**postCarrierservicesBillingNonrecurringcost**](CarrierServicesApi.html#postCarrierservicesBillingNonrecurringcost) | **POST** /api/v2/carrierservices/billing/nonrecurringcost | Initiate non-recurring cost (NRC) line items report generation
[**postCarrierservicesBillingNumberrates**](CarrierServicesApi.html#postCarrierservicesBillingNumberrates) | **POST** /api/v2/carrierservices/billing/numberrates | Create effective number rates
[**postCarrierservicesBillingUsagepricingQuery**](CarrierServicesApi.html#postCarrierservicesBillingUsagepricingQuery) | **POST** /api/v2/carrierservices/billing/usagepricing/query | Queries a single usage pricing
[**postCarrierservicesBillingUsagerateregions**](CarrierServicesApi.html#postCarrierservicesBillingUsagerateregions) | **POST** /api/v2/carrierservices/billing/usagerateregions | Create effective usageRateRegions
[**postCarrierservicesCarrierServices**](CarrierServicesApi.html#postCarrierservicesCarrierServices) | **POST** /api/v2/carrierservices/carriers/{carrierId}/services | Creates a carrier service of a specified type (i.e. OUTBOUND, INBOUND...)
[**postCarrierservicesCarriers**](CarrierServicesApi.html#postCarrierservicesCarriers) | **POST** /api/v2/carrierservices/carriers | Create a carrier
[**postCarrierservicesCdrsBackup**](CarrierServicesApi.html#postCarrierservicesCdrsBackup) | **POST** /api/v2/carrierservices/cdrs/backup | Manually backs up CDRs with a given prefix, and within a given time frame.
[**postCarrierservicesCdrsBackupsList**](CarrierServicesApi.html#postCarrierservicesCdrsBackupsList) | **POST** /api/v2/carrierservices/cdrs/backups/list | Initiates asynchronously getting a list of backed up CDRs. The response contains a resultId for obtaining the result.
[**postCarrierservicesCdrsGenerateFiles**](CarrierServicesApi.html#postCarrierservicesCdrsGenerateFiles) | **POST** /api/v2/carrierservices/cdrs/generate/files | Triggers a job that generates mock CDR data and stores it in the appropriate S3 bucket.
[**postCarrierservicesCdrsRestore**](CarrierServicesApi.html#postCarrierservicesCdrsRestore) | **POST** /api/v2/carrierservices/cdrs/restore | Restores a backed up CDR.
[**postCarrierservicesIntegrationsEmergencylocationsMe**](CarrierServicesApi.html#postCarrierservicesIntegrationsEmergencylocationsMe) | **POST** /api/v2/carrierservices/integrations/emergencylocations/me | Set current location for the logged in user
[**postCarrierservicesIntegrationsEmergencylocationsVerifyphonenumber**](CarrierServicesApi.html#postCarrierservicesIntegrationsEmergencylocationsVerifyphonenumber) | **POST** /api/v2/carrierservices/integrations/emergencylocations/verifyphonenumber | Verify that phone number supports user location .
[**postCarrierservicesNumberinventoryInventorynumbers**](CarrierServicesApi.html#postCarrierservicesNumberinventoryInventorynumbers) | **POST** /api/v2/carrierservices/numberinventory/inventorynumbers | Create InventoryNumber
[**postCarrierservicesNumberinventoryInventorynumbersBulk**](CarrierServicesApi.html#postCarrierservicesNumberinventoryInventorynumbersBulk) | **POST** /api/v2/carrierservices/numberinventory/inventorynumbers/bulk | Create many InventoryNumbers
[**postCarrierservicesNumbermanagementPortrequestTaskEffectivedate**](CarrierServicesApi.html#postCarrierservicesNumbermanagementPortrequestTaskEffectivedate) | **POST** /api/v2/carrierservices/numbermanagement/portrequest/tasks/{portRequestId}/effectivedate | Starts a task that updates the effective start date of the associated pending number orders of the port request
[**postCarrierservicesNumbermanagementPortrequestsDisconnectTasks**](CarrierServicesApi.html#postCarrierservicesNumbermanagementPortrequestsDisconnectTasks) | **POST** /api/v2/carrierservices/numbermanagement/portrequests/disconnect/tasks | Start a task that deletes all given port requests and associated number orders
[**postCarrierservicesNumbermanagementPortrequestsTasks**](CarrierServicesApi.html#postCarrierservicesNumbermanagementPortrequestsTasks) | **POST** /api/v2/carrierservices/numbermanagement/portrequests/tasks | Start a task to port numbers
[**postCarrierservicesNumberpurchase20160715Available**](CarrierServicesApi.html#postCarrierservicesNumberpurchase20160715Available) | **POST** /api/v2/carrierservices/numberpurchase/20160715/available | Search for available numbers.
[**postCarrierservicesNumberpurchase20160715Orders**](CarrierServicesApi.html#postCarrierservicesNumberpurchase20160715Orders) | **POST** /api/v2/carrierservices/numberpurchase/20160715/orders | Purchase numbers.
[**postCarrierservicesNumberpurchase20190107DisconnectTasks**](CarrierServicesApi.html#postCarrierservicesNumberpurchase20190107DisconnectTasks) | **POST** /api/v2/carrierservices/numberpurchase/20190107/disconnect/tasks | Start a task to disconnect the numbers purchased in the given orders.  The orders record remain in the deleted state for record keeping.
[**postCarrierservicesNumberpurchase20190107ExportTasks**](CarrierServicesApi.html#postCarrierservicesNumberpurchase20190107ExportTasks) | **POST** /api/v2/carrierservices/numberpurchase/20190107/export/tasks | Exports number orders for the organization of one or more statuses, a phone number range, or a combination thereof, in CSV format.
[**postCarrierservicesNumberpurchase20200902ReservationsTasks**](CarrierServicesApi.html#postCarrierservicesNumberpurchase20200902ReservationsTasks) | **POST** /api/v2/carrierservices/numberpurchase/20200902/reservations/tasks | Start a task to reserve available numbers, making them ready for purchase and preventing other users from accessing them.
[**postCarrierservicesNumberpurchaseOrders**](CarrierServicesApi.html#postCarrierservicesNumberpurchaseOrders) | **POST** /api/v2/carrierservices/numberpurchase/orders | Purchase numbers.
[**postCarrierservicesReportLineitemsFees**](CarrierServicesApi.html#postCarrierservicesReportLineitemsFees) | **POST** /api/v2/carrierservices/report/lineitems/fees | Initiate fee line items report generation
[**postCarrierservicesReportLineitemsUsage**](CarrierServicesApi.html#postCarrierservicesReportLineitemsUsage) | **POST** /api/v2/carrierservices/report/lineitems/usage | Initiate usage line items report generation
[**postCarrierservicesReportUsageCallsCsv**](CarrierServicesApi.html#postCarrierservicesReportUsageCallsCsv) | **POST** /api/v2/carrierservices/report/usage/calls/csv | Get carrier services usage data CSV.
[**postCarrierservicesSignature**](CarrierServicesApi.html#postCarrierservicesSignature) | **POST** /api/v2/carrierservices/signature | Get View Url
[**postCarrierservicesSignaturesTasks**](CarrierServicesApi.html#postCarrierservicesSignaturesTasks) | **POST** /api/v2/carrierservices/signatures/tasks | Start task to get url of a hosted DocuSign view/document, allowing user to sign document electronically
[**postCarrierservicesTemplates**](CarrierServicesApi.html#postCarrierservicesTemplates) | **POST** /api/v2/carrierservices/templates | Create template
[**postCarrierservicesTransformendpoints**](CarrierServicesApi.html#postCarrierservicesTransformendpoints) | **POST** /api/v2/carrierservices/transformendpoints | Add a new transform plan for uploaded spreadsheets
[**postCarrierservicesUploadtransformSpreadsheets**](CarrierServicesApi.html#postCarrierservicesUploadtransformSpreadsheets) | **POST** /api/v2/carrierservices/uploadtransform/spreadsheets | Add a new transform plan for uploaded spreadsheets
[**postCarrierservicesUploadtransformTexttables**](CarrierServicesApi.html#postCarrierservicesUploadtransformTexttables) | **POST** /api/v2/carrierservices/uploadtransform/texttables | Add a new transform plan for uploaded delimited text tables
[**putCarrierservicesBillingBandwidthcurrencypricing**](CarrierServicesApi.html#putCarrierservicesBillingBandwidthcurrencypricing) | **PUT** /api/v2/carrierservices/billing/bandwidthcurrencypricing | Updates bandwidth currency pricing
[**putCarrierservicesBillingBandwidthpricing**](CarrierServicesApi.html#putCarrierservicesBillingBandwidthpricing) | **PUT** /api/v2/carrierservices/billing/bandwidthpricing | Updates bandwidth pricing
[**putCarrierservicesBillingNumberrates**](CarrierServicesApi.html#putCarrierservicesBillingNumberrates) | **PUT** /api/v2/carrierservices/billing/numberrates | Update effective number rates
[**putCarrierservicesBillingUsagerateregions**](CarrierServicesApi.html#putCarrierservicesBillingUsagerateregions) | **PUT** /api/v2/carrierservices/billing/usagerateregions | Update effective usageRateRegions
[**putCarrierservicesCarrier**](CarrierServicesApi.html#putCarrierservicesCarrier) | **PUT** /api/v2/carrierservices/carriers/{carrierId} | Update a carrier.
[**putCarrierservicesCarrierService**](CarrierServicesApi.html#putCarrierservicesCarrierService) | **PUT** /api/v2/carrierservices/carriers/{carrierId}/services/{serviceId} | Updates a specific service for a given carrier (i.e. OUTBOUND, INBOUND...)
[**putCarrierservicesCarriers20190123Carrier**](CarrierServicesApi.html#putCarrierservicesCarriers20190123Carrier) | **PUT** /api/v2/carrierservices/carriers/20190123/carriers/{carrierId} | [20190123] Update a carrier
[**putCarrierservicesCarriers20190123CarrierService**](CarrierServicesApi.html#putCarrierservicesCarriers20190123CarrierService) | **PUT** /api/v2/carrierservices/carriers/20190123/carriers/{carrierId}/services/{serviceId} | [20190123] Update a service for a carrier
[**putCarrierservicesCsvschema**](CarrierServicesApi.html#putCarrierservicesCsvschema) | **PUT** /api/v2/carrierservices/csvschemas/{carrierId} | Updates or creates a CSV schema for a carrier.
[**putCarrierservicesNumberinventoryInventorynumber**](CarrierServicesApi.html#putCarrierservicesNumberinventoryInventorynumber) | **PUT** /api/v2/carrierservices/numberinventory/inventorynumbers/{phoneNumberId} | Update an InventoryNumber
[**putCarrierservicesNumberinventoryInventorynumbersBulk**](CarrierServicesApi.html#putCarrierservicesNumberinventoryInventorynumbersBulk) | **PUT** /api/v2/carrierservices/numberinventory/inventorynumbers/bulk | Update many InventoryNumbers
[**putCarrierservicesNumberpurchaseOrder**](CarrierServicesApi.html#putCarrierservicesNumberpurchaseOrder) | **PUT** /api/v2/carrierservices/numberpurchase/orders/{orderId} | Updates a number order record.  Not all fields will be allowed to be modified.  Only effectiveStartDate currently is allowed to be modified at the moment.
[**putCarrierservicesNumberpurchasePortrequest**](CarrierServicesApi.html#putCarrierservicesNumberpurchasePortrequest) | **PUT** /api/v2/carrierservices/numberpurchase/portrequests/{portRequestId} | Edit details of a specific port request.  You may only edit the company name, billing address, and contact info for the port request.  Editing is also only allowed before 30 minutes of activating time.
[**putCarrierservicesTemplate**](CarrierServicesApi.html#putCarrierservicesTemplate) | **PUT** /api/v2/carrierservices/templates/{templateId} | Update template
[**putCarrierservicesTransformendpoint**](CarrierServicesApi.html#putCarrierservicesTransformendpoint) | **PUT** /api/v2/carrierservices/transformendpoints/{endpointId} | Update an existing Endpoint plan for uploaded Transforms
[**putCarrierservicesUploadtransformSpreadsheet**](CarrierServicesApi.html#putCarrierservicesUploadtransformSpreadsheet) | **PUT** /api/v2/carrierservices/uploadtransform/spreadsheets/{transformId} | Update an existing transform plan for uploaded spreadsheets
[**putCarrierservicesUploadtransformTexttable**](CarrierServicesApi.html#putCarrierservicesUploadtransformTexttable) | **PUT** /api/v2/carrierservices/uploadtransform/texttables/{transformId} | Update an existing transform plan for uploaded delimited text tables
[**putCarrierservicesXlsxschema**](CarrierServicesApi.html#putCarrierservicesXlsxschema) | **PUT** /api/v2/carrierservices/xlsxschemas/{carrierId} | Updates or creates a XLSX schema for a carrier.
{: class="table table-striped"}

<a name="deleteCarrierservicesBillingNumberrates"></a>

# void deleteCarrierservicesBillingNumberrates(opts)


DELETE /api/v2/carrierservices/billing/numberrates

Delete effective number rates

Requires ALL permissions:

* purecloudvoiceinternal:price:add
* purecloudvoiceinternal:price:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': [{}] // Object | 
};

apiInstance.deleteCarrierservicesBillingNumberrates(opts)
  .then(() => {
    console.log('deleteCarrierservicesBillingNumberrates returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteCarrierservicesBillingNumberrates');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteCarrierservicesBillingUsagerateregions"></a>

# void deleteCarrierservicesBillingUsagerateregions(opts)


DELETE /api/v2/carrierservices/billing/usagerateregions

Update effective usageRateRegions

Requires ALL permissions:

* purecloudvoiceinternal:price:add
* purecloudvoiceinternal:price:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': [{}] // Object | 
};

apiInstance.deleteCarrierservicesBillingUsagerateregions(opts)
  .then(() => {
    console.log('deleteCarrierservicesBillingUsagerateregions returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteCarrierservicesBillingUsagerateregions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteCarrierservicesCarrierService"></a>

# Service deleteCarrierservicesCarrierService(carrierId, serviceId)


DELETE /api/v2/carrierservices/carriers/{carrierId}/services/{serviceId}

Deletes a specific service for a given carrier (i.e. OUTBOUND, INBOUND...)

Requires ALL permissions:

* purecloudvoiceinternal:service:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let carrierId = "carrierId_example"; // String | Carrier ID
let serviceId = "serviceId_example"; // String | Service ID

apiInstance.deleteCarrierservicesCarrierService(carrierId, serviceId)
  .then((data) => {
    console.log(`deleteCarrierservicesCarrierService success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteCarrierservicesCarrierService');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **carrierId** | **String** | Carrier ID |  |
 **serviceId** | **String** | Service ID |  |
{: class="table table-striped"}

### Return type

**Service**

<a name="deleteCarrierservicesCsvschemaNameSchemaName"></a>

# CsvSchema deleteCarrierservicesCsvschemaNameSchemaName(carrierId, schemaName)


DELETE /api/v2/carrierservices/csvschemas/{carrierId}/name/{schemaName}

Deletes a CSV schema for a carrier.

Requires ALL permissions:

* purecloudvoiceinternal:schema:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let carrierId = "carrierId_example"; // String | Carrier ID
let schemaName = "schemaName_example"; // String | Schema name

apiInstance.deleteCarrierservicesCsvschemaNameSchemaName(carrierId, schemaName)
  .then((data) => {
    console.log(`deleteCarrierservicesCsvschemaNameSchemaName success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteCarrierservicesCsvschemaNameSchemaName');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **carrierId** | **String** | Carrier ID |  |
 **schemaName** | **String** | Schema name |  |
{: class="table table-striped"}

### Return type

**CsvSchema**

<a name="deleteCarrierservicesIntegrationsEmergencylocationsMe"></a>

# void deleteCarrierservicesIntegrationsEmergencylocationsMe()


DELETE /api/v2/carrierservices/integrations/emergencylocations/me

Clear current emergency location for the logged in user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

apiInstance.deleteCarrierservicesIntegrationsEmergencylocationsMe()
  .then(() => {
    console.log('deleteCarrierservicesIntegrationsEmergencylocationsMe returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteCarrierservicesIntegrationsEmergencylocationsMe');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

void (no response body)

<a name="deleteCarrierservicesNumberpurchaseOrder"></a>

# NumberOrder deleteCarrierservicesNumberpurchaseOrder(orderId)


DELETE /api/v2/carrierservices/numberpurchase/orders/{orderId}

Disconnect the number purchased in a particular order.  The order record remains (in the deleted state) for record keeping.

Requires ALL permissions:

* purecloudvoice:number:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let orderId = "orderId_example"; // String | Phone Number Order ID

apiInstance.deleteCarrierservicesNumberpurchaseOrder(orderId)
  .then((data) => {
    console.log(`deleteCarrierservicesNumberpurchaseOrder success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteCarrierservicesNumberpurchaseOrder');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **orderId** | **String** | Phone Number Order ID |  |
{: class="table table-striped"}

### Return type

**NumberOrder**

<a name="deleteCarrierservicesNumberpurchaseReservedReservationId"></a>

# Reservation deleteCarrierservicesNumberpurchaseReservedReservationId(reservationId, opts)


DELETE /api/v2/carrierservices/numberpurchase/reserved/{reservationId}

Cancel a specific reservation, making the number available for other users, again.

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let reservationId = "reservationId_example"; // String | Phone Number Reservation ID
let opts = { 
  'phoneNumberType': "phoneNumberType_example" // String | Phone Number Type
};

apiInstance.deleteCarrierservicesNumberpurchaseReservedReservationId(reservationId, opts)
  .then((data) => {
    console.log(`deleteCarrierservicesNumberpurchaseReservedReservationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteCarrierservicesNumberpurchaseReservedReservationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **reservationId** | **String** | Phone Number Reservation ID |  |
 **phoneNumberType** | **String** | Phone Number Type | [optional] <br />**Values**: TOLL_FREE, CN_DOMESTIC, US_DOMESTIC, AD_DID, AE_DID, AF_DID, AG_DID, AI_DID, AL_DID, AM_DID, AM_TOLLFREE, AO_DID, AQ_DID, AR_DID, AR_TOLLFREE, AT_DID, AT_TOLLFREE, AU_DID, AU_TOLLFREE, AW_DID, AZ_DID, BA_DID, BB_DID, BD_DID, BE_DID, BE_TOLLFREE, BF_DID, BG_DID, BG_TOLLFREE, BH_DID, BI_DID, BJ_DID, BL_DID, BM_DID, BN_DID, BO_DID, BQ_DID, BR_DID, BR_TOLLFREE, BS_DID, BT_DID, BW_DID, BY_DID, BZ_DID, CA_DID, CD_DID, CF_DID, CG_DID, CH_DID, CH_TOLLFREE, CI_DID, CK_DID, CL_DID, CL_TOLLFREE, CM_DID, CN_DID, CN_TOLLFREE, CO_DID, CO_TOLLFREE, CR_DID, CU_DID, CV_DID, CY_DID, CY_TOLLFREE, CZ_DID, CZ_TOLLFREE, DE_DID, DE_TOLLFREE, DJ_DID, DK_DID, DK_TOLLFREE, DM_DID, DO_DID, DZ_DID, EC_DID, EC_TOLLFREE, EE_DID, EG_DID, EG_TOLLFREE, EH_DID, ER_DID, ES_DID, ES_TOLLFREE, ET_DID, FI_DID, FI_TOLLFREE, FJ_DID, FK_DID, FM_DID, FO_DID, FR_DID, FR_TOLLFREE, GA_DID, GB_DID, GB_TOLLFREE, GD_DID, GE_DID, GF_DID, GH_DID, GI_DID, GL_DID, GM_DID, GN_DID, GP_DID, GQ_DID, GR_DID, GR_TOLLFREE, GT_DID, GW_DID, GY_DID, HK_DID, HK_TOLLFREE, HN_DID, HR_DID, HR_TOLLFREE, HT_DID, HU_DID, HU_TOLLFREE, ID_DID, ID_TOLLFREE, IE_DID, IE_TOLLFREE, IL_DID, IL_TOLLFREE, IN_DID, IN_TOLLFREE, IO_DID, IQ_DID, IR_DID, IS_DID, IS_TOLLFREE, IT_DID, IT_TOLLFREE, JM_DID, JO_DID, JP_DID, JP_TOLLFREE, KE_DID, KG_DID, KH_DID, KI_DID, KM_DID, KN_DID, KP_DID, KR_DID, KR_TOLLFREE, KW_DID, KY_DID, KZ_DID, LA_DID, LB_DID, LC_DID, LI_DID, LK_DID, LR_DID, LS_DID, LT_DID, LU_DID, LV_DID, LV_TOLLFREE, LY_DID, MA_DID, MC_DID, MD_DID, ME_DID, MF_DID, MG_DID, MH_DID, MK_DID, ML_DID, MM_DID, MN_DID, MO_DID, MQ_DID, MR_DID, MS_DID, MT_DID, MU_DID, MV_DID, MW_DID, MX_DID, MX_TOLLFREE, MY_DID, MY_TOLLFREE, MZ_DID, NA_DID, NC_DID, NE_DID, NF_DID, NG_DID, NI_DID, NL_DID, NL_TOLLFREE, NO_DID, NO_TOLLFREE, NP_DID, NP_TOLLFREE, NR_DID, NU_DID, NZ_DID, NZ_TOLLFREE, OM_DID, PA_DID, PE_DID, PE_TOLLFREE, PF_DID, PG_DID, PH_DID, PH_TOLLFREE, PK_DID, PK_TOLLFREE, PL_DID, PL_TOLLFREE, PM_DID, PS_DID, PT_DID, PT_TOLLFREE, PW_DID, PY_DID, PY_TOLLFREE, QA_DID, QA_TOLLFREE, RE_DID, RO_DID, RO_TOLLFREE, RS_DID, RS_TOLLFREE, RU_DID, RU_TOLLFREE, RW_DID, SA_DID, SB_DID, SC_DID, SD_DID, SE_DID, SE_TOLLFREE, SG_DID, SG_TOLLFREE, SHA_DID, SH_DID, SI_DID, SI_TOLLFREE, SK_DID, SK_TOLLFREE, SL_DID, SM_DID, SN_DID, SO_DID, SR_DID, SS_DID, ST_DID, SV_DID, SX_DID, SY_DID, SZ_DID, TC_DID, TD_DID, TG_DID, TH_DID, TH_TOLLFREE, TJ_DID, TK_DID, TL_DID, TM_DID, TN_DID, TO_DID, TR_DID, TR_TOLLFREE, TT_DID, TV_DID, TW_DID, TW_TOLLFREE, TZ_DID, UA_DID, UA_TOLLFREE, UG_DID, US_DID, US_TOLLFREE, UY_DID, UZ_DID, VC_DID, VE_DID, VG_DID, VN_DID, VN_TOLLFREE, VU_DID, WF_DID, WS_DID, XA_TOLLFREE, XB_TOLLFREE, XC_TOLLFREE, XG_DID, XN_DID, XU_TOLLFREE, XV2_DID, XV3_DID, YE_DID, YT_DID, ZA_DID, ZA_TOLLFREE, ZM_DID, ZW_DID, ZZ_DID |
{: class="table table-striped"}

### Return type

**Reservation**

<a name="deleteCarrierservicesTemplate"></a>

# void deleteCarrierservicesTemplate(templateId)


DELETE /api/v2/carrierservices/templates/{templateId}

Delete template by id

Requires ALL permissions:

* purecloudvoiceinternal:contractmapping:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let templateId = "templateId_example"; // String | Template ID

apiInstance.deleteCarrierservicesTemplate(templateId)
  .then(() => {
    console.log('deleteCarrierservicesTemplate returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteCarrierservicesTemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **templateId** | **String** | Template ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteCarrierservicesTransformendpoint"></a>

# void deleteCarrierservicesTransformendpoint(endpointId)


DELETE /api/v2/carrierservices/transformendpoints/{endpointId}

Delete an existing Endpoint plan for uploaded Transforms

Requires ALL permissions:

* purecloudvoiceinternal:schema:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let endpointId = "endpointId_example"; // String | Endpoint ID

apiInstance.deleteCarrierservicesTransformendpoint(endpointId)
  .then(() => {
    console.log('deleteCarrierservicesTransformendpoint returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteCarrierservicesTransformendpoint');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **endpointId** | **String** | Endpoint ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteCarrierservicesUploadtransformSpreadsheet"></a>

# void deleteCarrierservicesUploadtransformSpreadsheet(transformId)


DELETE /api/v2/carrierservices/uploadtransform/spreadsheets/{transformId}

Delete an existing transform plan for uploaded spreadsheets

Requires ALL permissions:

* purecloudvoiceinternal:schema:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let transformId = "transformId_example"; // String | Transform ID

apiInstance.deleteCarrierservicesUploadtransformSpreadsheet(transformId)
  .then(() => {
    console.log('deleteCarrierservicesUploadtransformSpreadsheet returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteCarrierservicesUploadtransformSpreadsheet');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **transformId** | **String** | Transform ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteCarrierservicesUploadtransformTexttable"></a>

# void deleteCarrierservicesUploadtransformTexttable(transformId)


DELETE /api/v2/carrierservices/uploadtransform/texttables/{transformId}

Delete an existing transform plan for uploaded delimited text tables

Requires ALL permissions:

* purecloudvoiceinternal:schema:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let transformId = "transformId_example"; // String | Transform ID

apiInstance.deleteCarrierservicesUploadtransformTexttable(transformId)
  .then(() => {
    console.log('deleteCarrierservicesUploadtransformTexttable returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteCarrierservicesUploadtransformTexttable');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **transformId** | **String** | Transform ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteCarrierservicesXlsxschemaNameSchemaName"></a>

# XlsxSchema deleteCarrierservicesXlsxschemaNameSchemaName(carrierId, schemaName)


DELETE /api/v2/carrierservices/xlsxschemas/{carrierId}/name/{schemaName}

Deletes a XLSX schema for a carrier.

Requires ALL permissions:

* purecloudvoiceinternal:schema:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let carrierId = "carrierId_example"; // String | Carrier ID
let schemaName = "schemaName_example"; // String | Schema name

apiInstance.deleteCarrierservicesXlsxschemaNameSchemaName(carrierId, schemaName)
  .then((data) => {
    console.log(`deleteCarrierservicesXlsxschemaNameSchemaName success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteCarrierservicesXlsxschemaNameSchemaName');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **carrierId** | **String** | Carrier ID |  |
 **schemaName** | **String** | Schema name |  |
{: class="table table-striped"}

### Return type

**XlsxSchema**

<a name="getCarrierservicesBillingBandwidthcurrencypricingCurrencyName"></a>

# BandwidthCurrencyPricing getCarrierservicesBillingBandwidthcurrencypricingCurrencyName(currencyName, opts)


GET /api/v2/carrierservices/billing/bandwidthcurrencypricing/{currencyName}

Gets the bandwidth currency pricing for the given currency

Requires ALL permissions:

* purecloudvoiceinternal:price:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let currencyName = "currencyName_example"; // String | currency
let opts = { 
  'effectiveDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Effective date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'bandwidthPricingType': "bandwidthPricingType_example" // String | Bandwidth pricing type.
};

apiInstance.getCarrierservicesBillingBandwidthcurrencypricingCurrencyName(currencyName, opts)
  .then((data) => {
    console.log(`getCarrierservicesBillingBandwidthcurrencypricingCurrencyName success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesBillingBandwidthcurrencypricingCurrencyName');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **currencyName** | **String** | currency | <br />**Values**: USD, CAD, AUD, GBP, EUR, NZD, BRL, JPY, ZAR |
 **effectiveDate** | **Date** | Effective date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **bandwidthPricingType** | **String** | Bandwidth pricing type. | [optional] <br />**Values**: BYOC, RESELLER |
{: class="table table-striped"}

### Return type

**BandwidthCurrencyPricing**

<a name="getCarrierservicesBillingBandwidthpricingCustomerId"></a>

# BandwidthPricing getCarrierservicesBillingBandwidthpricingCustomerId(customerId, opts)


GET /api/v2/carrierservices/billing/bandwidthpricing/{customerId}

Gets the bandwidth pricing for the given customerId

Requires ALL permissions:

* purecloudvoiceinternal:price:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let customerId = "customerId_example"; // String | customer ID
let opts = { 
  'effectiveDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Effective date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'bandwidthPricingType': "bandwidthPricingType_example" // String | Bandwidth pricing type.
};

apiInstance.getCarrierservicesBillingBandwidthpricingCustomerId(customerId, opts)
  .then((data) => {
    console.log(`getCarrierservicesBillingBandwidthpricingCustomerId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesBillingBandwidthpricingCustomerId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customerId** | **String** | customer ID |  |
 **effectiveDate** | **Date** | Effective date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **bandwidthPricingType** | **String** | Bandwidth pricing type. | [optional] <br />**Values**: BYOC, RESELLER |
{: class="table table-striped"}

### Return type

**BandwidthPricing**

<a name="getCarrierservicesBillingBill"></a>

# PCVBillAsynchronousTask getCarrierservicesBillingBill(billId)


GET /api/v2/carrierservices/billing/bills/{billId}

Get updated task status for the bill generation

Responds with the generation status for the bill with the given ID. When the status is completed, the bill is part of the response.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let billId = "billId_example"; // String | monthly non-recurring cost query ID

apiInstance.getCarrierservicesBillingBill(billId)
  .then((data) => {
    console.log(`getCarrierservicesBillingBill success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesBillingBill');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **billId** | **String** | monthly non-recurring cost query ID |  |
{: class="table table-striped"}

### Return type

**PCVBillAsynchronousTask**

<a name="getCarrierservicesBillingMonthlyrecurringcostMrcId"></a>

# BillingLineItemAsynchronousTask getCarrierservicesBillingMonthlyrecurringcostMrcId(mrcId)


GET /api/v2/carrierservices/billing/monthlyrecurringcost/{mrcId}

Get updated task status for monthly recurring cost (MRC) line items

Responds with the generation status of the report with the given ID. When the status is completed, the report is part of the response.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let mrcId = "mrcId_example"; // String | monthly recurring cost query ID

apiInstance.getCarrierservicesBillingMonthlyrecurringcostMrcId(mrcId)
  .then((data) => {
    console.log(`getCarrierservicesBillingMonthlyrecurringcostMrcId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesBillingMonthlyrecurringcostMrcId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **mrcId** | **String** | monthly recurring cost query ID |  |
{: class="table table-striped"}

### Return type

**BillingLineItemAsynchronousTask**

<a name="getCarrierservicesBillingNonrecurringcostNrcId"></a>

# BillingLineItemAsynchronousTask getCarrierservicesBillingNonrecurringcostNrcId(nrcId)


GET /api/v2/carrierservices/billing/nonrecurringcost/{nrcId}

Get updated task status for non-recurring cost (NRC) line items

Responds with the generation status of the report with the given ID. When the status is completed, the report is part of the response.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let nrcId = "nrcId_example"; // String | monthly non-recurring cost query ID

apiInstance.getCarrierservicesBillingNonrecurringcostNrcId(nrcId)
  .then((data) => {
    console.log(`getCarrierservicesBillingNonrecurringcostNrcId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesBillingNonrecurringcostNrcId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **nrcId** | **String** | monthly non-recurring cost query ID |  |
{: class="table table-striped"}

### Return type

**BillingLineItemAsynchronousTask**

<a name="getCarrierservicesBillingNumberrates"></a>

# NumberRateEntityListing getCarrierservicesBillingNumberrates(porting, opts)


GET /api/v2/carrierservices/billing/numberrates

View effective number rates.

Requires ALL permissions:

* purecloudvoiceinternal:price:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let porting = true; // Boolean | Indicates if this number was ported, or purchased through the portal.
let opts = { 
  'purchaseGroup': "purchaseGroup_example", // String | Prefix or geographical grouping of numbers for pricing purposes
  'domain': "domain_example", // String | Country where org has assigned number
  'effectiveDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Effective Date for prices. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'orgId': "orgId_example" // String | Organization ID, only used for searching org-specific rates. Leave empty otherwise
};

apiInstance.getCarrierservicesBillingNumberrates(porting, opts)
  .then((data) => {
    console.log(`getCarrierservicesBillingNumberrates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesBillingNumberrates');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **porting** | **Boolean** | Indicates if this number was ported, or purchased through the portal. |  |
 **purchaseGroup** | **String** | Prefix or geographical grouping of numbers for pricing purposes | [optional]  |
 **domain** | **String** | Country where org has assigned number | [optional] <br />**Values**: AU, CA, FR, GB, IE, US, NL, BE, FI, SE, DE, ES, CH, AT, DK, NO, PT, PL, ZZ |
 **effectiveDate** | **Date** | Effective Date for prices. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **orgId** | **String** | Organization ID, only used for searching org-specific rates. Leave empty otherwise | [optional]  |
{: class="table table-striped"}

### Return type

**NumberRateEntityListing**

<a name="getCarrierservicesBillingUsagerateregions"></a>

# UsageRateRegionEntityListing getCarrierservicesBillingUsagerateregions(pcvZone, opts)


GET /api/v2/carrierservices/billing/usagerateregions

View effective usageRateRegions.

Requires ALL permissions:

* purecloudvoiceinternal:price:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let pcvZone = "pcvZone_example"; // String | Country of recipient's end of the call
let opts = { 
  'effectiveDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Effective Date for prices. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'usageCountry': "usageCountry_example", // String | Country of other end of the call (not client's end)
  'domain': "domain_example", // String | Country of client's end of the call
  'dialerType': "dialerType_example" // String | Dialer campaign type
};

apiInstance.getCarrierservicesBillingUsagerateregions(pcvZone, opts)
  .then((data) => {
    console.log(`getCarrierservicesBillingUsagerateregions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesBillingUsagerateregions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pcvZone** | **String** | Country of recipient's end of the call |  |
 **effectiveDate** | **Date** | Effective Date for prices. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **usageCountry** | **String** | Country of other end of the call (not client's end) | [optional] <br />**Values**: AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AT, AU, AW, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BM, BN, BO, BR, BS, BT, BW, BY, BZ, CA, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GH, GI, GL, GM, GN, GP, GQ, GR, GT, GW, GY, HK, HN, HR, HT, HU, ID, IE, IL, IN, IO, IQ, IR, IS, IT, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MG, MH, MK, ML, MM, MN, MO, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NANP, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TC, TD, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, US, UY, UZ, VA, VC, VE, VG, VN, VU, WF, WS, XD, XG, XI, XK, XN, XV, YE, ZA, ZM, ZW, ZZ |
 **domain** | **String** | Country of client's end of the call | [optional] <br />**Values**: AU, CA, FR, GB, IE, US, NL, BE, FI, SE, DE, ES, CH, AT, DK, NO, PT, PL, ZZ |
 **dialerType** | **String** | Dialer campaign type | [optional] <br />**Values**: NO_DIALER, BULK |
{: class="table table-striped"}

### Return type

**UsageRateRegionEntityListing**

<a name="getCarrierservicesCarrier"></a>

# Carrier getCarrierservicesCarrier(carrierId)


GET /api/v2/carrierservices/carriers/{carrierId}

Get specified carrier by its carrier id

Requires ALL permissions:

* purecloudvoiceinternal:service-provider:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let carrierId = "carrierId_example"; // String | Carrier ID

apiInstance.getCarrierservicesCarrier(carrierId)
  .then((data) => {
    console.log(`getCarrierservicesCarrier success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesCarrier');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **carrierId** | **String** | Carrier ID |  |
{: class="table table-striped"}

### Return type

**Carrier**

<a name="getCarrierservicesCarrierService"></a>

# Service getCarrierservicesCarrierService(carrierId, serviceId)


GET /api/v2/carrierservices/carriers/{carrierId}/services/{serviceId}

Retrieves a specific service for a given carrier (i.e. OUTBOUND, INBOUND...)

Requires ALL permissions:

* purecloudvoiceinternal:service:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let carrierId = "carrierId_example"; // String | Carrier ID
let serviceId = "serviceId_example"; // String | Service ID

apiInstance.getCarrierservicesCarrierService(carrierId, serviceId)
  .then((data) => {
    console.log(`getCarrierservicesCarrierService success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesCarrierService');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **carrierId** | **String** | Carrier ID |  |
 **serviceId** | **String** | Service ID |  |
{: class="table table-striped"}

### Return type

**Service**

<a name="getCarrierservicesCarrierServices"></a>

# ServiceEntityListing getCarrierservicesCarrierServices(carrierId, opts)


GET /api/v2/carrierservices/carriers/{carrierId}/services

Retrieves all services for a given carrier (i.e. OUTBOUND, INBOUND...)

Requires ALL permissions:

* purecloudvoiceinternal:service:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let carrierId = "carrierId_example"; // String | Carrier ID
let opts = { 
  'filter': "filter_example" // String | Filter
};

apiInstance.getCarrierservicesCarrierServices(carrierId, opts)
  .then((data) => {
    console.log(`getCarrierservicesCarrierServices success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesCarrierServices');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **carrierId** | **String** | Carrier ID |  |
 **filter** | **String** | Filter | [optional]  |
{: class="table table-striped"}

### Return type

**ServiceEntityListing**

<a name="getCarrierservicesCarriers"></a>

# CarrierEntityListing getCarrierservicesCarriers(opts)


GET /api/v2/carrierservices/carriers

Get the list of carriers, optionally filtered by inventory status

Requires ALL permissions:

* purecloudvoiceinternal:service-provider:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'inventory': true // Boolean | Inventory
};

apiInstance.getCarrierservicesCarriers(opts)
  .then((data) => {
    console.log(`getCarrierservicesCarriers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesCarriers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **inventory** | **Boolean** | Inventory | [optional]  |
{: class="table table-striped"}

### Return type

**CarrierEntityListing**

<a name="getCarrierservicesCdrsBackupResultId"></a>

# ManualBackupCDRsAsyncResponse getCarrierservicesCdrsBackupResultId(resultId)


GET /api/v2/carrierservices/cdrs/backup/{resultId}

Gets a the result from manually backing up CDRs.

Requires ANY permissions:

* purecloudvoiceinternal:cdrBackups:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let resultId = "resultId_example"; // String | The result ID

apiInstance.getCarrierservicesCdrsBackupResultId(resultId)
  .then((data) => {
    console.log(`getCarrierservicesCdrsBackupResultId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesCdrsBackupResultId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **resultId** | **String** | The result ID |  |
{: class="table table-striped"}

### Return type

**ManualBackupCDRsAsyncResponse**

<a name="getCarrierservicesCdrsBackupsListResultId"></a>

# ListCDRsAsyncResponse getCarrierservicesCdrsBackupsListResultId(resultId)


GET /api/v2/carrierservices/cdrs/backups/list/{resultId}

Gets a the result from listing backed up CDRs.

Requires ANY permissions:

* purecloudvoiceinternal:cdrBackups:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let resultId = "resultId_example"; // String | The result ID

apiInstance.getCarrierservicesCdrsBackupsListResultId(resultId)
  .then((data) => {
    console.log(`getCarrierservicesCdrsBackupsListResultId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesCdrsBackupsListResultId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **resultId** | **String** | The result ID |  |
{: class="table table-striped"}

### Return type

**ListCDRsAsyncResponse**

<a name="getCarrierservicesCsvschema"></a>

# [CsvSchema] getCarrierservicesCsvschema(carrierId)


GET /api/v2/carrierservices/csvschemas/{carrierId}

Get all CSV schemas for a given carrier.

Requires ALL permissions:

* purecloudvoiceinternal:schema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let carrierId = "carrierId_example"; // String | Carrier ID

apiInstance.getCarrierservicesCsvschema(carrierId)
  .then((data) => {
    console.log(`getCarrierservicesCsvschema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesCsvschema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **carrierId** | **String** | Carrier ID |  |
{: class="table table-striped"}

### Return type

**[CsvSchema]**

<a name="getCarrierservicesCsvschemaNameSchemaName"></a>

# CsvSchema getCarrierservicesCsvschemaNameSchemaName(carrierId, schemaName)


GET /api/v2/carrierservices/csvschemas/{carrierId}/name/{schemaName}

Get all CSV schemas for a given carrier and name.

Requires ALL permissions:

* purecloudvoiceinternal:schema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let carrierId = "carrierId_example"; // String | Carrier ID
let schemaName = "schemaName_example"; // String | Schema name

apiInstance.getCarrierservicesCsvschemaNameSchemaName(carrierId, schemaName)
  .then((data) => {
    console.log(`getCarrierservicesCsvschemaNameSchemaName success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesCsvschemaNameSchemaName');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **carrierId** | **String** | Carrier ID |  |
 **schemaName** | **String** | Schema name |  |
{: class="table table-striped"}

### Return type

**CsvSchema**

<a name="getCarrierservicesCsvschemas"></a>

# [CsvSchema] getCarrierservicesCsvschemas()


GET /api/v2/carrierservices/csvschemas

Get all CSV schemas available.

Requires ALL permissions:

* purecloudvoiceinternal:schema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

apiInstance.getCarrierservicesCsvschemas()
  .then((data) => {
    console.log(`getCarrierservicesCsvschemas success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesCsvschemas');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**[CsvSchema]**

<a name="getCarrierservicesIntegrationsEmergencylocationsMe"></a>

# EmergencyLocation getCarrierservicesIntegrationsEmergencylocationsMe(phoneNumber)


GET /api/v2/carrierservices/integrations/emergencylocations/me

Get location for the logged in user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let phoneNumber = "phoneNumber_example"; // String | Phone number in E164 format

apiInstance.getCarrierservicesIntegrationsEmergencylocationsMe(phoneNumber)
  .then((data) => {
    console.log(`getCarrierservicesIntegrationsEmergencylocationsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesIntegrationsEmergencylocationsMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneNumber** | **String** | Phone number in E164 format |  |
{: class="table table-striped"}

### Return type

**EmergencyLocation**

<a name="getCarrierservicesNumberinventoryInventorynumber"></a>

# DetailedInventoryNumber getCarrierservicesNumberinventoryInventorynumber(phoneNumberId)


GET /api/v2/carrierservices/numberinventory/inventorynumbers/{phoneNumberId}

Get an InventoryNumber

Requires ALL permissions:

* purecloudvoiceinternal:inventory:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let phoneNumberId = "phoneNumberId_example"; // String | Phone Number

apiInstance.getCarrierservicesNumberinventoryInventorynumber(phoneNumberId)
  .then((data) => {
    console.log(`getCarrierservicesNumberinventoryInventorynumber success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberinventoryInventorynumber');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneNumberId** | **String** | Phone Number |  |
{: class="table table-striped"}

### Return type

**DetailedInventoryNumber**

<a name="getCarrierservicesNumberinventoryInventorynumbers"></a>

# InventoryNumbersEntityListing getCarrierservicesNumberinventoryInventorynumbers(opts)


GET /api/v2/carrierservices/numberinventory/inventorynumbers

Get all InventoryNumbers. Filtering is supported.

Requires ALL permissions:

* purecloudvoiceinternal:inventory:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "phoneNumber", // String | Sort By Field
  'sortOrder': "ascending", // String | Sort Order
  'phoneNumber': "phoneNumber_example", // String | Phone number filter
  'city': "city_example", // String | City filter
  'numberType': "numberType_example", // String | Number type filter
  'status': "status_example", // String | Status filter
  'addressStatus': "addressStatus_example", // String | Address status filter
  'carrierReservationExpiryStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Carrier reservation expiry range filter start. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'carrierReservationExpiryStop': new Date("2013-10-20T19:20:30+01:00"), // Date | Carrier reservation expiry range filter stop. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'customerReservationExpiryStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Customer reservation expiry range filter start. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'customerReservationExpiryStop': new Date("2013-10-20T19:20:30+01:00") // Date | Customer reservation expiry range filter stop. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
};

apiInstance.getCarrierservicesNumberinventoryInventorynumbers(opts)
  .then((data) => {
    console.log(`getCarrierservicesNumberinventoryInventorynumbers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberinventoryInventorynumbers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort By Field | [optional] [default to phoneNumber] |
 **sortOrder** | **String** | Sort Order | [optional] [default to ascending]<br />**Values**: ascending, descending |
 **phoneNumber** | **String** | Phone number filter | [optional]  |
 **city** | **String** | City filter | [optional]  |
 **numberType** | **String** | Number type filter | [optional] <br />**Values**: DID, TOLLFREE |
 **status** | **String** | Status filter | [optional] <br />**Values**: UNDEFINED, AVAILABLE, PENDING, ACTIVE, DELETED, FAILED, AGING, AGING_COMPLETE, BLOCKED |
 **addressStatus** | **String** | Address status filter | [optional] <br />**Values**: INITIAL, PENDING, COMPLETE, FAILED |
 **carrierReservationExpiryStart** | **Date** | Carrier reservation expiry range filter start. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **carrierReservationExpiryStop** | **Date** | Carrier reservation expiry range filter stop. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **customerReservationExpiryStart** | **Date** | Customer reservation expiry range filter start. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **customerReservationExpiryStop** | **Date** | Customer reservation expiry range filter stop. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
{: class="table table-striped"}

### Return type

**InventoryNumbersEntityListing**

<a name="getCarrierservicesNumberinventoryInventorynumbersAvailable"></a>

# InventoryNumbersEntityListing getCarrierservicesNumberinventoryInventorynumbersAvailable(prefix, opts)


GET /api/v2/carrierservices/numberinventory/inventorynumbers/available

Get available InventoryNumbers.

Requires ALL permissions:

* purecloudvoiceinternal:inventory:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let prefix = "prefix_example"; // String | Filter prefix
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "phoneNumber", // String | Sort By Field
  'sortOrder': "asc", // String | Sort Order
  'excludeCarrierExpired': false, // Boolean | Exclude Carrier Expired
  'numberType': "DID" // String | Number Type
};

apiInstance.getCarrierservicesNumberinventoryInventorynumbersAvailable(prefix, opts)
  .then((data) => {
    console.log(`getCarrierservicesNumberinventoryInventorynumbersAvailable success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberinventoryInventorynumbersAvailable');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **prefix** | **String** | Filter prefix |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort By Field | [optional] [default to phoneNumber] |
 **sortOrder** | **String** | Sort Order | [optional] [default to asc] |
 **excludeCarrierExpired** | **Boolean** | Exclude Carrier Expired | [optional] [default to false] |
 **numberType** | **String** | Number Type | [optional] [default to DID] |
{: class="table table-striped"}

### Return type

**InventoryNumbersEntityListing**

<a name="getCarrierservicesNumberinventoryServicecapabilities"></a>

# ServiceCapabilitiesListing getCarrierservicesNumberinventoryServicecapabilities()


GET /api/v2/carrierservices/numberinventory/servicecapabilities

Get all available service capabilities

Requires ALL permissions:

* purecloudvoiceinternal:inventory:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

apiInstance.getCarrierservicesNumberinventoryServicecapabilities()
  .then((data) => {
    console.log(`getCarrierservicesNumberinventoryServicecapabilities success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberinventoryServicecapabilities');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**ServiceCapabilitiesListing**

<a name="getCarrierservicesNumberinventoryServicecapabilitiesDescriptions"></a>

# ServiceCapabilitiesDescriptionMapping getCarrierservicesNumberinventoryServicecapabilitiesDescriptions()


GET /api/v2/carrierservices/numberinventory/servicecapabilities/descriptions

Get all available service capabilities and descriptions

Requires ALL permissions:

* purecloudvoiceinternal:inventory:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

apiInstance.getCarrierservicesNumberinventoryServicecapabilitiesDescriptions()
  .then((data) => {
    console.log(`getCarrierservicesNumberinventoryServicecapabilitiesDescriptions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberinventoryServicecapabilitiesDescriptions');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**ServiceCapabilitiesDescriptionMapping**

<a name="getCarrierservicesNumbermanagementPortrequestTaskResults"></a>

# **[&#39;String&#39;]** getCarrierservicesNumbermanagementPortrequestTaskResults(taskId)


GET /api/v2/carrierservices/numbermanagement/portrequest/tasks/{taskId}/results

Retrieve results from async port requests update task.

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let taskId = "taskId_example"; // String | Task id

apiInstance.getCarrierservicesNumbermanagementPortrequestTaskResults(taskId)
  .then((data) => {
    console.log(`getCarrierservicesNumbermanagementPortrequestTaskResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumbermanagementPortrequestTaskResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **taskId** | **String** | Task id |  |
{: class="table table-striped"}

### Return type

**[&#39;String&#39;]**

<a name="getCarrierservicesNumbermanagementPortrequestTaskStatus"></a>

# PortUpdateTask getCarrierservicesNumbermanagementPortrequestTaskStatus(taskId)


GET /api/v2/carrierservices/numbermanagement/portrequest/tasks/{taskId}/status

Retrieve a port request update task to check its state

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let taskId = "taskId_example"; // String | Task id

apiInstance.getCarrierservicesNumbermanagementPortrequestTaskStatus(taskId)
  .then((data) => {
    console.log(`getCarrierservicesNumbermanagementPortrequestTaskStatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumbermanagementPortrequestTaskStatus');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **taskId** | **String** | Task id |  |
{: class="table table-striped"}

### Return type

**PortUpdateTask**

<a name="getCarrierservicesNumbermanagementPortrequestsDisconnectTask"></a>

# PortRequestTask getCarrierservicesNumbermanagementPortrequestsDisconnectTask(taskId)


GET /api/v2/carrierservices/numbermanagement/portrequests/disconnect/tasks/{taskId}

Retrieve a port request delete task to check its state

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let taskId = "taskId_example"; // String | Task id

apiInstance.getCarrierservicesNumbermanagementPortrequestsDisconnectTask(taskId)
  .then((data) => {
    console.log(`getCarrierservicesNumbermanagementPortrequestsDisconnectTask success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumbermanagementPortrequestsDisconnectTask');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **taskId** | **String** | Task id |  |
{: class="table table-striped"}

### Return type

**PortRequestTask**

<a name="getCarrierservicesNumbermanagementPortrequestsDisconnectTaskResults"></a>

# **[&#39;String&#39;]** getCarrierservicesNumbermanagementPortrequestsDisconnectTaskResults(taskId)


GET /api/v2/carrierservices/numbermanagement/portrequests/disconnect/tasks/{taskId}/results

Retrieve results from async port requests delete task.

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let taskId = "taskId_example"; // String | Task id

apiInstance.getCarrierservicesNumbermanagementPortrequestsDisconnectTaskResults(taskId)
  .then((data) => {
    console.log(`getCarrierservicesNumbermanagementPortrequestsDisconnectTaskResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumbermanagementPortrequestsDisconnectTaskResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **taskId** | **String** | Task id |  |
{: class="table table-striped"}

### Return type

**[&#39;String&#39;]**

<a name="getCarrierservicesNumbermanagementPortrequestsTask"></a>

# PortTask getCarrierservicesNumbermanagementPortrequestsTask(taskId)


GET /api/v2/carrierservices/numbermanagement/portrequests/tasks/{taskId}

Retrieve a port request task to check its state

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let taskId = "taskId_example"; // String | Task id

apiInstance.getCarrierservicesNumbermanagementPortrequestsTask(taskId)
  .then((data) => {
    console.log(`getCarrierservicesNumbermanagementPortrequestsTask success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumbermanagementPortrequestsTask');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **taskId** | **String** | Task id |  |
{: class="table table-striped"}

### Return type

**PortTask**

<a name="getCarrierservicesNumbermanagementPortrequestsTaskResults"></a>

# [NumberOrder] getCarrierservicesNumbermanagementPortrequestsTaskResults(taskId)


GET /api/v2/carrierservices/numbermanagement/portrequests/tasks/{taskId}/results

Retrieve a list of number orders for a port request by their completed taskId

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let taskId = "taskId_example"; // String | Task id

apiInstance.getCarrierservicesNumbermanagementPortrequestsTaskResults(taskId)
  .then((data) => {
    console.log(`getCarrierservicesNumbermanagementPortrequestsTaskResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumbermanagementPortrequestsTaskResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **taskId** | **String** | Task id |  |
{: class="table table-striped"}

### Return type

**[NumberOrder]**

<a name="getCarrierservicesNumberpurchase20160715AvailableTaskId"></a>

# SearchResultTask getCarrierservicesNumberpurchase20160715AvailableTaskId(taskId)


GET /api/v2/carrierservices/numberpurchase/20160715/available/{taskId}

Retrieve search result status for previous search.

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let taskId = "taskId_example"; // String | Search result task id

apiInstance.getCarrierservicesNumberpurchase20160715AvailableTaskId(taskId)
  .then((data) => {
    console.log(`getCarrierservicesNumberpurchase20160715AvailableTaskId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberpurchase20160715AvailableTaskId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **taskId** | **String** | Search result task id |  |
{: class="table table-striped"}

### Return type

**SearchResultTask**

<a name="getCarrierservicesNumberpurchase20180810AvailableTaskId"></a>

# SearchResultTaskV2 getCarrierservicesNumberpurchase20180810AvailableTaskId(taskId)


GET /api/v2/carrierservices/numberpurchase/20180810/available/{taskId}

Retrieve search result status for previous search.

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let taskId = "taskId_example"; // String | Search result task id

apiInstance.getCarrierservicesNumberpurchase20180810AvailableTaskId(taskId)
  .then((data) => {
    console.log(`getCarrierservicesNumberpurchase20180810AvailableTaskId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberpurchase20180810AvailableTaskId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **taskId** | **String** | Search result task id |  |
{: class="table table-striped"}

### Return type

**SearchResultTaskV2**

<a name="getCarrierservicesNumberpurchase20190107DisconnectTask"></a>

# OrderTask getCarrierservicesNumberpurchase20190107DisconnectTask(taskId)


GET /api/v2/carrierservices/numberpurchase/20190107/disconnect/tasks/{taskId}

Retrieve a number orders task to check its state

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let taskId = "taskId_example"; // String | Task id

apiInstance.getCarrierservicesNumberpurchase20190107DisconnectTask(taskId)
  .then((data) => {
    console.log(`getCarrierservicesNumberpurchase20190107DisconnectTask success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberpurchase20190107DisconnectTask');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **taskId** | **String** | Task id |  |
{: class="table table-striped"}

### Return type

**OrderTask**

<a name="getCarrierservicesNumberpurchase20190107DisconnectTaskResults"></a>

# **[&#39;String&#39;]** getCarrierservicesNumberpurchase20190107DisconnectTaskResults(taskId)


GET /api/v2/carrierservices/numberpurchase/20190107/disconnect/tasks/{taskId}/results

Retrieve the results task of a number orders tasks by its completed taskId

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let taskId = "taskId_example"; // String | Task id

apiInstance.getCarrierservicesNumberpurchase20190107DisconnectTaskResults(taskId)
  .then((data) => {
    console.log(`getCarrierservicesNumberpurchase20190107DisconnectTaskResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberpurchase20190107DisconnectTaskResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **taskId** | **String** | Task id |  |
{: class="table table-striped"}

### Return type

**[&#39;String&#39;]**

<a name="getCarrierservicesNumberpurchase20190107ExportTask"></a>

# ExportTask getCarrierservicesNumberpurchase20190107ExportTask(taskId)


GET /api/v2/carrierservices/numberpurchase/20190107/export/tasks/{taskId}

Retrieve a number order export task to check its state

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let taskId = "taskId_example"; // String | Task id

apiInstance.getCarrierservicesNumberpurchase20190107ExportTask(taskId)
  .then((data) => {
    console.log(`getCarrierservicesNumberpurchase20190107ExportTask success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberpurchase20190107ExportTask');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **taskId** | **String** | Task id |  |
{: class="table table-striped"}

### Return type

**ExportTask**

<a name="getCarrierservicesNumberpurchase20190107ExportTaskResult"></a>

# **&#39;String&#39;** getCarrierservicesNumberpurchase20190107ExportTaskResult(taskId)


GET /api/v2/carrierservices/numberpurchase/20190107/export/tasks/{taskId}/result

Retrieve the results task of a number order export tasks by its completed taskId

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let taskId = "taskId_example"; // String | Task id

apiInstance.getCarrierservicesNumberpurchase20190107ExportTaskResult(taskId)
  .then((data) => {
    console.log(`getCarrierservicesNumberpurchase20190107ExportTaskResult success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberpurchase20190107ExportTaskResult');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **taskId** | **String** | Task id |  |
{: class="table table-striped"}

### Return type

**&#39;String&#39;**

<a name="getCarrierservicesNumberpurchase20200902ReservationsTask"></a>

# PurchasingTask getCarrierservicesNumberpurchase20200902ReservationsTask(taskId)


GET /api/v2/carrierservices/numberpurchase/20200902/reservations/tasks/{taskId}

Retrieve a reservation task to check its state

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let taskId = "taskId_example"; // String | Task id

apiInstance.getCarrierservicesNumberpurchase20200902ReservationsTask(taskId)
  .then((data) => {
    console.log(`getCarrierservicesNumberpurchase20200902ReservationsTask success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberpurchase20200902ReservationsTask');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **taskId** | **String** | Task id |  |
{: class="table table-striped"}

### Return type

**PurchasingTask**

<a name="getCarrierservicesNumberpurchase20200902ReservationsTaskResults"></a>

# [Reservation] getCarrierservicesNumberpurchase20200902ReservationsTaskResults(taskId)


GET /api/v2/carrierservices/numberpurchase/20200902/reservations/tasks/{taskId}/results

Retrieve a list of reservations by their completed taskId

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let taskId = "taskId_example"; // String | Task id

apiInstance.getCarrierservicesNumberpurchase20200902ReservationsTaskResults(taskId)
  .then((data) => {
    console.log(`getCarrierservicesNumberpurchase20200902ReservationsTaskResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberpurchase20200902ReservationsTaskResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **taskId** | **String** | Task id |  |
{: class="table table-striped"}

### Return type

**[Reservation]**

<a name="getCarrierservicesNumberpurchase20210520Orders"></a>

# NumberOrderLinkedPagedEntityListing getCarrierservicesNumberpurchase20210520Orders(opts)


GET /api/v2/carrierservices/numberpurchase/20210520/orders

View all number orders for the organization of a listing of phone number types or a status, or a combination thereof.

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'phoneNumberType': "phoneNumberType_example", // String | Comma separated list of Phone Number Types to be queried on
  'status': "status_example", // String | Status or the number order. Cannot be used in combination with 'excludedStatuses'
  'excludedStatuses': "excludedStatuses_example", // String | Comma separated list of order statuses to be excluded. This parameter cannot be used together with 'status'
  'startE164': "startE164_example", // String | e164 formatted lower bound phone number of a range query (inclusive)
  'endE164': "endE164_example", // String | e164 formatted upper bound phone number of a range query (exclusive)
  'locationId': "locationId_example", // String | Optional location ID to filter by.
  'emergencyCapable': true, // Boolean | Optional emergency capable filter. If set to true, only number orders that have emergency capabilities are returned
  'lastId': "lastId_example", // String | Index for paged queries. To get the next page, this has to be the ID of the last number order, and the direction has to be NEXT. To get the previous page, this has to be the ID of the first item, and the direction has to be PREVIOUS
  'direction': "NEXT", // String | The direction indicates if the NEXT or PREVIOUS page should be returned
  'pageSize': 25 // Number | Page size
};

apiInstance.getCarrierservicesNumberpurchase20210520Orders(opts)
  .then((data) => {
    console.log(`getCarrierservicesNumberpurchase20210520Orders success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberpurchase20210520Orders');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneNumberType** | **String** | Comma separated list of Phone Number Types to be queried on | [optional]  |
 **status** | **String** | Status or the number order. Cannot be used in combination with 'excludedStatuses' | [optional] <br />**Values**: COMPLETE, CONNECTING, FAILED, BACKORDERED, PENDING, ACTIVATING, ACTIVATION_ERROR, ERROR, DISCONNECTED, DISCONNECT_PENDING, DEACTIVATING, DEACTIVATION_ERROR, DISCONNECT_FAILED, SUBMITTED, REJECTED, PORT_PENDING, CANCELLED, FOC |
 **excludedStatuses** | **String** | Comma separated list of order statuses to be excluded. This parameter cannot be used together with 'status' | [optional]  |
 **startE164** | **String** | e164 formatted lower bound phone number of a range query (inclusive) | [optional]  |
 **endE164** | **String** | e164 formatted upper bound phone number of a range query (exclusive) | [optional]  |
 **locationId** | **String** | Optional location ID to filter by. | [optional]  |
 **emergencyCapable** | **Boolean** | Optional emergency capable filter. If set to true, only number orders that have emergency capabilities are returned | [optional]  |
 **lastId** | **String** | Index for paged queries. To get the next page, this has to be the ID of the last number order, and the direction has to be NEXT. To get the previous page, this has to be the ID of the first item, and the direction has to be PREVIOUS | [optional]  |
 **direction** | **String** | The direction indicates if the NEXT or PREVIOUS page should be returned | [optional] [default to NEXT]<br />**Values**: PREVIOUS, NEXT |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**NumberOrderLinkedPagedEntityListing**

<a name="getCarrierservicesNumberpurchaseOrder"></a>

# NumberOrder getCarrierservicesNumberpurchaseOrder(orderId)


GET /api/v2/carrierservices/numberpurchase/orders/{orderId}

View all a number order record.  Some vendor apis have side effects when viewing records with pending operations.  This method also manages the side effects and updates ININ-side data stores to reflect any changes.

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let orderId = "orderId_example"; // String | Phone Number Order ID

apiInstance.getCarrierservicesNumberpurchaseOrder(orderId)
  .then((data) => {
    console.log(`getCarrierservicesNumberpurchaseOrder success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberpurchaseOrder');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **orderId** | **String** | Phone Number Order ID |  |
{: class="table table-striped"}

### Return type

**NumberOrder**

<a name="getCarrierservicesNumberpurchaseOrders"></a>

# NumberOrderEntityListing getCarrierservicesNumberpurchaseOrders(opts)


GET /api/v2/carrierservices/numberpurchase/orders

View all number orders for the organization of a phone number type or a status, or a combination thereof.

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'phoneNumberType': "phoneNumberType_example", // String | Phone Number Type
  'status': "status_example", // String | Status or the number order. Cannot be used in combination with 'excludeDisconnected'
  'excludeDisconnected': true, // Boolean | Exclude disconnected numbers. Cannot be used in combination with 'status'
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "sortOrder_example" // String | Sort order
};

apiInstance.getCarrierservicesNumberpurchaseOrders(opts)
  .then((data) => {
    console.log(`getCarrierservicesNumberpurchaseOrders success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberpurchaseOrders');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneNumberType** | **String** | Phone Number Type | [optional] <br />**Values**: TOLL_FREE, CN_DOMESTIC, US_DOMESTIC, AD_DID, AE_DID, AF_DID, AG_DID, AI_DID, AL_DID, AM_DID, AM_TOLLFREE, AO_DID, AQ_DID, AR_DID, AR_TOLLFREE, AT_DID, AT_TOLLFREE, AU_DID, AU_TOLLFREE, AW_DID, AZ_DID, BA_DID, BB_DID, BD_DID, BE_DID, BE_TOLLFREE, BF_DID, BG_DID, BG_TOLLFREE, BH_DID, BI_DID, BJ_DID, BL_DID, BM_DID, BN_DID, BO_DID, BQ_DID, BR_DID, BR_TOLLFREE, BS_DID, BT_DID, BW_DID, BY_DID, BZ_DID, CA_DID, CD_DID, CF_DID, CG_DID, CH_DID, CH_TOLLFREE, CI_DID, CK_DID, CL_DID, CL_TOLLFREE, CM_DID, CN_DID, CN_TOLLFREE, CO_DID, CO_TOLLFREE, CR_DID, CU_DID, CV_DID, CY_DID, CY_TOLLFREE, CZ_DID, CZ_TOLLFREE, DE_DID, DE_TOLLFREE, DJ_DID, DK_DID, DK_TOLLFREE, DM_DID, DO_DID, DZ_DID, EC_DID, EC_TOLLFREE, EE_DID, EG_DID, EG_TOLLFREE, EH_DID, ER_DID, ES_DID, ES_TOLLFREE, ET_DID, FI_DID, FI_TOLLFREE, FJ_DID, FK_DID, FM_DID, FO_DID, FR_DID, FR_TOLLFREE, GA_DID, GB_DID, GB_TOLLFREE, GD_DID, GE_DID, GF_DID, GH_DID, GI_DID, GL_DID, GM_DID, GN_DID, GP_DID, GQ_DID, GR_DID, GR_TOLLFREE, GT_DID, GW_DID, GY_DID, HK_DID, HK_TOLLFREE, HN_DID, HR_DID, HR_TOLLFREE, HT_DID, HU_DID, HU_TOLLFREE, ID_DID, ID_TOLLFREE, IE_DID, IE_TOLLFREE, IL_DID, IL_TOLLFREE, IN_DID, IN_TOLLFREE, IO_DID, IQ_DID, IR_DID, IS_DID, IS_TOLLFREE, IT_DID, IT_TOLLFREE, JM_DID, JO_DID, JP_DID, JP_TOLLFREE, KE_DID, KG_DID, KH_DID, KI_DID, KM_DID, KN_DID, KP_DID, KR_DID, KR_TOLLFREE, KW_DID, KY_DID, KZ_DID, LA_DID, LB_DID, LC_DID, LI_DID, LK_DID, LR_DID, LS_DID, LT_DID, LU_DID, LV_DID, LV_TOLLFREE, LY_DID, MA_DID, MC_DID, MD_DID, ME_DID, MF_DID, MG_DID, MH_DID, MK_DID, ML_DID, MM_DID, MN_DID, MO_DID, MQ_DID, MR_DID, MS_DID, MT_DID, MU_DID, MV_DID, MW_DID, MX_DID, MX_TOLLFREE, MY_DID, MY_TOLLFREE, MZ_DID, NA_DID, NC_DID, NE_DID, NF_DID, NG_DID, NI_DID, NL_DID, NL_TOLLFREE, NO_DID, NO_TOLLFREE, NP_DID, NP_TOLLFREE, NR_DID, NU_DID, NZ_DID, NZ_TOLLFREE, OM_DID, PA_DID, PE_DID, PE_TOLLFREE, PF_DID, PG_DID, PH_DID, PH_TOLLFREE, PK_DID, PK_TOLLFREE, PL_DID, PL_TOLLFREE, PM_DID, PS_DID, PT_DID, PT_TOLLFREE, PW_DID, PY_DID, PY_TOLLFREE, QA_DID, QA_TOLLFREE, RE_DID, RO_DID, RO_TOLLFREE, RS_DID, RS_TOLLFREE, RU_DID, RU_TOLLFREE, RW_DID, SA_DID, SB_DID, SC_DID, SD_DID, SE_DID, SE_TOLLFREE, SG_DID, SG_TOLLFREE, SHA_DID, SH_DID, SI_DID, SI_TOLLFREE, SK_DID, SK_TOLLFREE, SL_DID, SM_DID, SN_DID, SO_DID, SR_DID, SS_DID, ST_DID, SV_DID, SX_DID, SY_DID, SZ_DID, TC_DID, TD_DID, TG_DID, TH_DID, TH_TOLLFREE, TJ_DID, TK_DID, TL_DID, TM_DID, TN_DID, TO_DID, TR_DID, TR_TOLLFREE, TT_DID, TV_DID, TW_DID, TW_TOLLFREE, TZ_DID, UA_DID, UA_TOLLFREE, UG_DID, US_DID, US_TOLLFREE, UY_DID, UZ_DID, VC_DID, VE_DID, VG_DID, VN_DID, VN_TOLLFREE, VU_DID, WF_DID, WS_DID, XA_TOLLFREE, XB_TOLLFREE, XC_TOLLFREE, XG_DID, XN_DID, XU_TOLLFREE, XV2_DID, XV3_DID, YE_DID, YT_DID, ZA_DID, ZA_TOLLFREE, ZM_DID, ZW_DID, ZZ_DID |
 **status** | **String** | Status or the number order. Cannot be used in combination with 'excludeDisconnected' | [optional] <br />**Values**: COMPLETE, CONNECTING, FAILED, BACKORDERED, PENDING, ACTIVATING, ACTIVATION_ERROR, ERROR, DISCONNECTED, DISCONNECT_PENDING, DEACTIVATING, DEACTIVATION_ERROR, DISCONNECT_FAILED, SUBMITTED, REJECTED, PORT_PENDING, CANCELLED, FOC |
 **excludeDisconnected** | **Boolean** | Exclude disconnected numbers. Cannot be used in combination with 'status' | [optional]  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] <br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**NumberOrderEntityListing**

<a name="getCarrierservicesNumberpurchaseOrdersDidDid"></a>

# [NumberOrder] getCarrierservicesNumberpurchaseOrdersDidDid(did, opts)


GET /api/v2/carrierservices/numberpurchase/orders/did/{did}

Check if a number is PCV number. This would return 200 if there is an order with this number, and the status is COMPLETE. Otherwise a 404 is returned.

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let did = "did_example"; // String | The DID
let opts = { 
  'findActive': false // Boolean | Find active orders only
};

apiInstance.getCarrierservicesNumberpurchaseOrdersDidDid(did, opts)
  .then((data) => {
    console.log(`getCarrierservicesNumberpurchaseOrdersDidDid success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberpurchaseOrdersDidDid');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **did** | **String** | The DID |  |
 **findActive** | **Boolean** | Find active orders only | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**[NumberOrder]**

<a name="getCarrierservicesNumberpurchasePortrequest"></a>

# NumberPortRequest getCarrierservicesNumberpurchasePortrequest(portRequestId)


GET /api/v2/carrierservices/numberpurchase/portrequests/{portRequestId}

Get details of a specific port request.

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let portRequestId = "portRequestId_example"; // String | Port request id

apiInstance.getCarrierservicesNumberpurchasePortrequest(portRequestId)
  .then((data) => {
    console.log(`getCarrierservicesNumberpurchasePortrequest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberpurchasePortrequest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **portRequestId** | **String** | Port request id |  |
{: class="table table-striped"}

### Return type

**NumberPortRequest**

<a name="getCarrierservicesNumberpurchasePortrequestOrders"></a>

# DomainEntityListing getCarrierservicesNumberpurchasePortrequestOrders(portRequestId, opts)


GET /api/v2/carrierservices/numberpurchase/portrequests/{portRequestId}/orders

View all number orders for a given port request in an organization.

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let portRequestId = "portRequestId_example"; // String | Port Request to retrieve number orders from
let opts = { 
  'pageNumber': 1, // Number | Page Number
  'pageSize': 25 // Number | Page Size
};

apiInstance.getCarrierservicesNumberpurchasePortrequestOrders(portRequestId, opts)
  .then((data) => {
    console.log(`getCarrierservicesNumberpurchasePortrequestOrders success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberpurchasePortrequestOrders');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **portRequestId** | **String** | Port Request to retrieve number orders from |  |
 **pageNumber** | **Number** | Page Number | [optional] [default to 1] |
 **pageSize** | **Number** | Page Size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**DomainEntityListing**

<a name="getCarrierservicesNumberpurchasePortrequests"></a>

# NumberPortRequestListing getCarrierservicesNumberpurchasePortrequests()


GET /api/v2/carrierservices/numberpurchase/portrequests

View all port requests for an organization.

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

apiInstance.getCarrierservicesNumberpurchasePortrequests()
  .then((data) => {
    console.log(`getCarrierservicesNumberpurchasePortrequests success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberpurchasePortrequests');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**NumberPortRequestListing**

<a name="getCarrierservicesNumberpurchasePortrequestsTransitive"></a>

# NumberPortRequestListing getCarrierservicesNumberpurchasePortrequestsTransitive(opts)


GET /api/v2/carrierservices/numberpurchase/portrequests/transitive

All port requests with the transitive property added.

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'pageNumber': 1, // Number | Page Number
  'pageSize': 25 // Number | Page Size
};

apiInstance.getCarrierservicesNumberpurchasePortrequestsTransitive(opts)
  .then((data) => {
    console.log(`getCarrierservicesNumberpurchasePortrequestsTransitive success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberpurchasePortrequestsTransitive');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page Number | [optional] [default to 1] |
 **pageSize** | **Number** | Page Size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**NumberPortRequestListing**

<a name="getCarrierservicesNumberpurchaseReservedReservationId"></a>

# Reservation getCarrierservicesNumberpurchaseReservedReservationId(reservationId, opts)


GET /api/v2/carrierservices/numberpurchase/reserved/{reservationId}

View a specific reservation.

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let reservationId = "reservationId_example"; // String | Phone Number Reservation ID
let opts = { 
  'phoneNumberType': "phoneNumberType_example" // String | Phone Number Type
};

apiInstance.getCarrierservicesNumberpurchaseReservedReservationId(reservationId, opts)
  .then((data) => {
    console.log(`getCarrierservicesNumberpurchaseReservedReservationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberpurchaseReservedReservationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **reservationId** | **String** | Phone Number Reservation ID |  |
 **phoneNumberType** | **String** | Phone Number Type | [optional] <br />**Values**: TOLL_FREE, CN_DOMESTIC, US_DOMESTIC, AD_DID, AE_DID, AF_DID, AG_DID, AI_DID, AL_DID, AM_DID, AM_TOLLFREE, AO_DID, AQ_DID, AR_DID, AR_TOLLFREE, AT_DID, AT_TOLLFREE, AU_DID, AU_TOLLFREE, AW_DID, AZ_DID, BA_DID, BB_DID, BD_DID, BE_DID, BE_TOLLFREE, BF_DID, BG_DID, BG_TOLLFREE, BH_DID, BI_DID, BJ_DID, BL_DID, BM_DID, BN_DID, BO_DID, BQ_DID, BR_DID, BR_TOLLFREE, BS_DID, BT_DID, BW_DID, BY_DID, BZ_DID, CA_DID, CD_DID, CF_DID, CG_DID, CH_DID, CH_TOLLFREE, CI_DID, CK_DID, CL_DID, CL_TOLLFREE, CM_DID, CN_DID, CN_TOLLFREE, CO_DID, CO_TOLLFREE, CR_DID, CU_DID, CV_DID, CY_DID, CY_TOLLFREE, CZ_DID, CZ_TOLLFREE, DE_DID, DE_TOLLFREE, DJ_DID, DK_DID, DK_TOLLFREE, DM_DID, DO_DID, DZ_DID, EC_DID, EC_TOLLFREE, EE_DID, EG_DID, EG_TOLLFREE, EH_DID, ER_DID, ES_DID, ES_TOLLFREE, ET_DID, FI_DID, FI_TOLLFREE, FJ_DID, FK_DID, FM_DID, FO_DID, FR_DID, FR_TOLLFREE, GA_DID, GB_DID, GB_TOLLFREE, GD_DID, GE_DID, GF_DID, GH_DID, GI_DID, GL_DID, GM_DID, GN_DID, GP_DID, GQ_DID, GR_DID, GR_TOLLFREE, GT_DID, GW_DID, GY_DID, HK_DID, HK_TOLLFREE, HN_DID, HR_DID, HR_TOLLFREE, HT_DID, HU_DID, HU_TOLLFREE, ID_DID, ID_TOLLFREE, IE_DID, IE_TOLLFREE, IL_DID, IL_TOLLFREE, IN_DID, IN_TOLLFREE, IO_DID, IQ_DID, IR_DID, IS_DID, IS_TOLLFREE, IT_DID, IT_TOLLFREE, JM_DID, JO_DID, JP_DID, JP_TOLLFREE, KE_DID, KG_DID, KH_DID, KI_DID, KM_DID, KN_DID, KP_DID, KR_DID, KR_TOLLFREE, KW_DID, KY_DID, KZ_DID, LA_DID, LB_DID, LC_DID, LI_DID, LK_DID, LR_DID, LS_DID, LT_DID, LU_DID, LV_DID, LV_TOLLFREE, LY_DID, MA_DID, MC_DID, MD_DID, ME_DID, MF_DID, MG_DID, MH_DID, MK_DID, ML_DID, MM_DID, MN_DID, MO_DID, MQ_DID, MR_DID, MS_DID, MT_DID, MU_DID, MV_DID, MW_DID, MX_DID, MX_TOLLFREE, MY_DID, MY_TOLLFREE, MZ_DID, NA_DID, NC_DID, NE_DID, NF_DID, NG_DID, NI_DID, NL_DID, NL_TOLLFREE, NO_DID, NO_TOLLFREE, NP_DID, NP_TOLLFREE, NR_DID, NU_DID, NZ_DID, NZ_TOLLFREE, OM_DID, PA_DID, PE_DID, PE_TOLLFREE, PF_DID, PG_DID, PH_DID, PH_TOLLFREE, PK_DID, PK_TOLLFREE, PL_DID, PL_TOLLFREE, PM_DID, PS_DID, PT_DID, PT_TOLLFREE, PW_DID, PY_DID, PY_TOLLFREE, QA_DID, QA_TOLLFREE, RE_DID, RO_DID, RO_TOLLFREE, RS_DID, RS_TOLLFREE, RU_DID, RU_TOLLFREE, RW_DID, SA_DID, SB_DID, SC_DID, SD_DID, SE_DID, SE_TOLLFREE, SG_DID, SG_TOLLFREE, SHA_DID, SH_DID, SI_DID, SI_TOLLFREE, SK_DID, SK_TOLLFREE, SL_DID, SM_DID, SN_DID, SO_DID, SR_DID, SS_DID, ST_DID, SV_DID, SX_DID, SY_DID, SZ_DID, TC_DID, TD_DID, TG_DID, TH_DID, TH_TOLLFREE, TJ_DID, TK_DID, TL_DID, TM_DID, TN_DID, TO_DID, TR_DID, TR_TOLLFREE, TT_DID, TV_DID, TW_DID, TW_TOLLFREE, TZ_DID, UA_DID, UA_TOLLFREE, UG_DID, US_DID, US_TOLLFREE, UY_DID, UZ_DID, VC_DID, VE_DID, VG_DID, VN_DID, VN_TOLLFREE, VU_DID, WF_DID, WS_DID, XA_TOLLFREE, XB_TOLLFREE, XC_TOLLFREE, XG_DID, XN_DID, XU_TOLLFREE, XV2_DID, XV3_DID, YE_DID, YT_DID, ZA_DID, ZA_TOLLFREE, ZM_DID, ZW_DID, ZZ_DID |
{: class="table table-striped"}

### Return type

**Reservation**

<a name="getCarrierservicesNumberpurchaseSupportedcountries"></a>

# EntityListing getCarrierservicesNumberpurchaseSupportedcountries(country, tollfree)


GET /api/v2/carrierservices/numberpurchase/supportedcountries

Find supported countries based on country (US, CA, PR, etc.) and if the number is Tollfree or DID

Requires ALL permissions:

* purecloudvoice:number:add
* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let country = "country_example"; // String | country
let tollfree = true; // Boolean | Is numbertype tollfree

apiInstance.getCarrierservicesNumberpurchaseSupportedcountries(country, tollfree)
  .then((data) => {
    console.log(`getCarrierservicesNumberpurchaseSupportedcountries success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesNumberpurchaseSupportedcountries');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **country** | **String** | country |  |
 **tollfree** | **Boolean** | Is numbertype tollfree |  |
{: class="table table-striped"}

### Return type

**EntityListing**

<a name="getCarrierservicesPricingNumberrate"></a>

# NumberRate getCarrierservicesPricingNumberrate(purchaseGroup, currency, opts)


GET /api/v2/carrierservices/pricing/numberrate

Get effective number rate.

Requires ALL permissions:

* purecloudvoiceinternal:price:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let purchaseGroup = "purchaseGroup_example"; // String | Prefix or geographical grouping of numbers for pricing purposes
let currency = "currency_example"; // String | Currency of the rate.
let opts = { 
  'effectiveDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Effective Date for prices. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'orgId': "orgId_example" // String | Organization ID.
};

apiInstance.getCarrierservicesPricingNumberrate(purchaseGroup, currency, opts)
  .then((data) => {
    console.log(`getCarrierservicesPricingNumberrate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesPricingNumberrate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **purchaseGroup** | **String** | Prefix or geographical grouping of numbers for pricing purposes |  |
 **currency** | **String** | Currency of the rate. | <br />**Values**: USD, CAD, AUD, GBP, EUR, NZD, BRL, JPY, ZAR |
 **effectiveDate** | **Date** | Effective Date for prices. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **orgId** | **String** | Organization ID. | [optional]  |
{: class="table table-striped"}

### Return type

**NumberRate**

<a name="getCarrierservicesProgress"></a>

# [UploadProgress] getCarrierservicesProgress()


GET /api/v2/carrierservices/progress

Get ratesheet upload progress for a user.

Requires ALL permissions:

* purecloudvoiceinternal:ratesheet:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

apiInstance.getCarrierservicesProgress()
  .then((data) => {
    console.log(`getCarrierservicesProgress success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesProgress');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**[UploadProgress]**

<a name="getCarrierservicesReportLineitemsFee"></a>

# LineItemAsynchronousTask getCarrierservicesReportLineitemsFee(feesId)


GET /api/v2/carrierservices/report/lineitems/fees/{feesId}

Get updated task status for fee line items

Responds with the generation status of the report with the given ID. When the status is completed, the report is part of the response.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let feesId = "feesId_example"; // String | Fees report ID

apiInstance.getCarrierservicesReportLineitemsFee(feesId)
  .then((data) => {
    console.log(`getCarrierservicesReportLineitemsFee success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesReportLineitemsFee');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **feesId** | **String** | Fees report ID |  |
{: class="table table-striped"}

### Return type

**LineItemAsynchronousTask**

<a name="getCarrierservicesReportLineitemsUsageUsageId"></a>

# LineItemAsynchronousTask getCarrierservicesReportLineitemsUsageUsageId(usageId)


GET /api/v2/carrierservices/report/lineitems/usage/{usageId}

Get updated task status for usage line items

Responds with the generation status of the report with the given ID. When the status is completed, the report is part of the response.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let usageId = "usageId_example"; // String | Usage report ID

apiInstance.getCarrierservicesReportLineitemsUsageUsageId(usageId)
  .then((data) => {
    console.log(`getCarrierservicesReportLineitemsUsageUsageId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesReportLineitemsUsageUsageId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **usageId** | **String** | Usage report ID |  |
{: class="table table-striped"}

### Return type

**LineItemAsynchronousTask**

<a name="getCarrierservicesReportUsageCallsCsv"></a>

# UrlResponseAsynchronousTaskEntityListing getCarrierservicesReportUsageCallsCsv()


GET /api/v2/carrierservices/report/usage/calls/csv

Get all task statuses

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view
* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

apiInstance.getCarrierservicesReportUsageCallsCsv()
  .then((data) => {
    console.log(`getCarrierservicesReportUsageCallsCsv success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesReportUsageCallsCsv');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**UrlResponseAsynchronousTaskEntityListing**

<a name="getCarrierservicesReportUsageCallsCsvCsvId"></a>

# UrlResponseAsynchronousTask getCarrierservicesReportUsageCallsCsvCsvId(csvId)


GET /api/v2/carrierservices/report/usage/calls/csv/{csvId}

Get updated task status

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view
* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let csvId = "csvId_example"; // String | CSV ID

apiInstance.getCarrierservicesReportUsageCallsCsvCsvId(csvId)
  .then((data) => {
    console.log(`getCarrierservicesReportUsageCallsCsvCsvId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesReportUsageCallsCsvCsvId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **csvId** | **String** | CSV ID |  |
{: class="table table-striped"}

### Return type

**UrlResponseAsynchronousTask**

<a name="getCarrierservicesSignaturesTask"></a>

# SignatureTask getCarrierservicesSignaturesTask(taskId)


GET /api/v2/carrierservices/signatures/tasks/{taskId}

Retrieve a signature task to check its state

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let taskId = "taskId_example"; // String | Task id

apiInstance.getCarrierservicesSignaturesTask(taskId)
  .then((data) => {
    console.log(`getCarrierservicesSignaturesTask success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesSignaturesTask');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **taskId** | **String** | Task id |  |
{: class="table table-striped"}

### Return type

**SignatureTask**

<a name="getCarrierservicesSignaturesTaskResults"></a>

# EmbeddedSignatureView getCarrierservicesSignaturesTaskResults(taskId)


GET /api/v2/carrierservices/signatures/tasks/{taskId}/results

Retrieve signature task by their completed taskId

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let taskId = "taskId_example"; // String | Task id

apiInstance.getCarrierservicesSignaturesTaskResults(taskId)
  .then((data) => {
    console.log(`getCarrierservicesSignaturesTaskResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesSignaturesTaskResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **taskId** | **String** | Task id |  |
{: class="table table-striped"}

### Return type

**EmbeddedSignatureView**

<a name="getCarrierservicesSipdnsdetails"></a>

# SipDnsResolver getCarrierservicesSipdnsdetails()


GET /api/v2/carrierservices/sipdnsdetails

Get all SIP Dns data for the current region.

Requires ALL permissions:

* purecloudvoiceinternal:service-provider:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

apiInstance.getCarrierservicesSipdnsdetails()
  .then((data) => {
    console.log(`getCarrierservicesSipdnsdetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesSipdnsdetails');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**SipDnsResolver**

<a name="getCarrierservicesSortweightsInfo"></a>

# SortWeightInfo getCarrierservicesSortweightsInfo()


GET /api/v2/carrierservices/sortweights/info

Get service type sort weight limits and defaults.

Requires ALL permissions:

* purecloudvoiceinternal:service-provider:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

apiInstance.getCarrierservicesSortweightsInfo()
  .then((data) => {
    console.log(`getCarrierservicesSortweightsInfo success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesSortweightsInfo');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**SortWeightInfo**

<a name="getCarrierservicesSupportedcountries"></a>

# **[&#39;String&#39;]** getCarrierservicesSupportedcountries()


GET /api/v2/carrierservices/supportedcountries

Get all supported countries for PureCloud Voice.  These are returned in their ISO 3166-1 form.

Requires ANY permissions:


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

apiInstance.getCarrierservicesSupportedcountries()
  .then((data) => {
    console.log(`getCarrierservicesSupportedcountries success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesSupportedcountries');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**[&#39;String&#39;]**

<a name="getCarrierservicesSupportedcountry"></a>

# void getCarrierservicesSupportedcountry(countryCode)


GET /api/v2/carrierservices/supportedcountries/{countryCode}

Check if country is supported for PureCloud Voice.

Requires ANY permissions:


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let countryCode = "countryCode_example"; // String | ISO 3166-1 country code for the supported countries

apiInstance.getCarrierservicesSupportedcountry(countryCode)
  .then(() => {
    console.log('getCarrierservicesSupportedcountry returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesSupportedcountry');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **countryCode** | **String** | ISO 3166-1 country code for the supported countries |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getCarrierservicesTemplate"></a>

# DocusignTemplateMapping getCarrierservicesTemplate(templateId)


GET /api/v2/carrierservices/templates/{templateId}

Get template by id

Requires ALL permissions:

* purecloudvoiceinternal:contractmapping:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let templateId = "templateId_example"; // String | Template ID

apiInstance.getCarrierservicesTemplate(templateId)
  .then((data) => {
    console.log(`getCarrierservicesTemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesTemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **templateId** | **String** | Template ID |  |
{: class="table table-striped"}

### Return type

**DocusignTemplateMapping**

<a name="getCarrierservicesTemplates"></a>

# [DocusignTemplateMapping] getCarrierservicesTemplates()


GET /api/v2/carrierservices/templates

Get all templates

Requires ALL permissions:

* purecloudvoiceinternal:contractmapping:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

apiInstance.getCarrierservicesTemplates()
  .then((data) => {
    console.log(`getCarrierservicesTemplates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesTemplates');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**[DocusignTemplateMapping]**

<a name="getCarrierservicesTransformendpoint"></a>

# TransformEndpoint getCarrierservicesTransformendpoint(endpointId)


GET /api/v2/carrierservices/transformendpoints/{endpointId}

Get a stored Endpoint plan for uploaded Transforms

Requires ALL permissions:

* purecloudvoiceinternal:schema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let endpointId = "endpointId_example"; // String | Endpoint ID

apiInstance.getCarrierservicesTransformendpoint(endpointId)
  .then((data) => {
    console.log(`getCarrierservicesTransformendpoint success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesTransformendpoint');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **endpointId** | **String** | Endpoint ID |  |
{: class="table table-striped"}

### Return type

**TransformEndpoint**

<a name="getCarrierservicesTransformendpoints"></a>

# [TransformEndpoint] getCarrierservicesTransformendpoints(opts)


GET /api/v2/carrierservices/transformendpoints

Get a stored transform plan for uploaded spreadsheets

Requires ALL permissions:

* purecloudvoiceinternal:schema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'filter': "filter_example", // String | Filter
  'pageSize': "pageSize_example", // String | Page size
  'lastEntry': "lastEntry_example" // String | Last entry
};

apiInstance.getCarrierservicesTransformendpoints(opts)
  .then((data) => {
    console.log(`getCarrierservicesTransformendpoints success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesTransformendpoints');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **filter** | **String** | Filter | [optional]  |
 **pageSize** | **String** | Page size | [optional]  |
 **lastEntry** | **String** | Last entry | [optional]  |
{: class="table table-striped"}

### Return type

**[TransformEndpoint]**

<a name="getCarrierservicesTransformprogres"></a>

# TransformProgress getCarrierservicesTransformprogres(progressId)


GET /api/v2/carrierservices/transformprogress/{progressId}

The progress report for an upload

Requires ALL permissions:

* purecloudvoiceinternal:schema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let progressId = "progressId_example"; // String | Upload Progress ID

apiInstance.getCarrierservicesTransformprogres(progressId)
  .then((data) => {
    console.log(`getCarrierservicesTransformprogres success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesTransformprogres');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **progressId** | **String** | Upload Progress ID |  |
{: class="table table-striped"}

### Return type

**TransformProgress**

<a name="getCarrierservicesTransformprogressSearchServiceName"></a>

# [TransformProgress] getCarrierservicesTransformprogressSearchServiceName(serviceName)


GET /api/v2/carrierservices/transformprogress/search/{serviceName}

Get The progress report for transforming uploaded documents

Requires ALL permissions:

* purecloudvoiceinternal:schema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let serviceName = "serviceName_example"; // String | Service Name

apiInstance.getCarrierservicesTransformprogressSearchServiceName(serviceName)
  .then((data) => {
    console.log(`getCarrierservicesTransformprogressSearchServiceName success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesTransformprogressSearchServiceName');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **serviceName** | **String** | Service Name |  |
{: class="table table-striped"}

### Return type

**[TransformProgress]**

<a name="getCarrierservicesTransformprogressSearchServiceNameModelType"></a>

# [TransformProgress] getCarrierservicesTransformprogressSearchServiceNameModelType(serviceName, modelType)


GET /api/v2/carrierservices/transformprogress/search/{serviceName}/{modelType}

Get The progress report for transforming uploaded documents

Requires ALL permissions:

* purecloudvoiceinternal:schema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let serviceName = "serviceName_example"; // String | Service Name
let modelType = "modelType_example"; // String | Model Type

apiInstance.getCarrierservicesTransformprogressSearchServiceNameModelType(serviceName, modelType)
  .then((data) => {
    console.log(`getCarrierservicesTransformprogressSearchServiceNameModelType success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesTransformprogressSearchServiceNameModelType');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **serviceName** | **String** | Service Name |  |
 **modelType** | **String** | Model Type |  |
{: class="table table-striped"}

### Return type

**[TransformProgress]**

<a name="getCarrierservicesTransformprogressSearchServiceNameModelTypeModelId"></a>

# [TransformProgress] getCarrierservicesTransformprogressSearchServiceNameModelTypeModelId(serviceName, modelType, modelId)


GET /api/v2/carrierservices/transformprogress/search/{serviceName}/{modelType}/{modelId}

Get The progress report for transforming uploaded documents

Requires ALL permissions:

* purecloudvoiceinternal:schema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let serviceName = "serviceName_example"; // String | Service Name
let modelType = "modelType_example"; // String | Model Type
let modelId = "modelId_example"; // String | Model ID

apiInstance.getCarrierservicesTransformprogressSearchServiceNameModelTypeModelId(serviceName, modelType, modelId)
  .then((data) => {
    console.log(`getCarrierservicesTransformprogressSearchServiceNameModelTypeModelId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesTransformprogressSearchServiceNameModelTypeModelId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **serviceName** | **String** | Service Name |  |
 **modelType** | **String** | Model Type |  |
 **modelId** | **String** | Model ID |  |
{: class="table table-striped"}

### Return type

**[TransformProgress]**

<a name="getCarrierservicesUploadtransformSpreadsheet"></a>

# SpreadsheetTransform getCarrierservicesUploadtransformSpreadsheet(transformId)


GET /api/v2/carrierservices/uploadtransform/spreadsheets/{transformId}

Get a stored transform plan for uploaded spreadsheets

Requires ALL permissions:

* purecloudvoiceinternal:schema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let transformId = "transformId_example"; // String | Transform ID

apiInstance.getCarrierservicesUploadtransformSpreadsheet(transformId)
  .then((data) => {
    console.log(`getCarrierservicesUploadtransformSpreadsheet success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesUploadtransformSpreadsheet');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **transformId** | **String** | Transform ID |  |
{: class="table table-striped"}

### Return type

**SpreadsheetTransform**

<a name="getCarrierservicesUploadtransformSpreadsheets"></a>

# SpreadsheetTransformEntityListing getCarrierservicesUploadtransformSpreadsheets(opts)


GET /api/v2/carrierservices/uploadtransform/spreadsheets

Get a stored transform plan for uploaded spreadsheets

Requires ALL permissions:

* purecloudvoiceinternal:schema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'filter': "filter_example", // String | Filter
  'pageSize': "pageSize_example", // String | Page size
  'lastEntry': "lastEntry_example" // String | Last entry
};

apiInstance.getCarrierservicesUploadtransformSpreadsheets(opts)
  .then((data) => {
    console.log(`getCarrierservicesUploadtransformSpreadsheets success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesUploadtransformSpreadsheets');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **filter** | **String** | Filter | [optional]  |
 **pageSize** | **String** | Page size | [optional]  |
 **lastEntry** | **String** | Last entry | [optional]  |
{: class="table table-striped"}

### Return type

**SpreadsheetTransformEntityListing**

<a name="getCarrierservicesUploadtransformTexttable"></a>

# TextTableTransform getCarrierservicesUploadtransformTexttable(transformId)


GET /api/v2/carrierservices/uploadtransform/texttables/{transformId}

Get a stored transform plan for uploaded delimited text tables

Requires ALL permissions:

* purecloudvoiceinternal:schema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let transformId = "transformId_example"; // String | Transform ID

apiInstance.getCarrierservicesUploadtransformTexttable(transformId)
  .then((data) => {
    console.log(`getCarrierservicesUploadtransformTexttable success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesUploadtransformTexttable');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **transformId** | **String** | Transform ID |  |
{: class="table table-striped"}

### Return type

**TextTableTransform**

<a name="getCarrierservicesUploadtransformTexttables"></a>

# TextTableTransformEntityListing getCarrierservicesUploadtransformTexttables(opts)


GET /api/v2/carrierservices/uploadtransform/texttables

Get a stored transform plan for uploaded delimited text tables

Requires ALL permissions:

* purecloudvoiceinternal:schema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'filter': "filter_example" // String | Filter
};

apiInstance.getCarrierservicesUploadtransformTexttables(opts)
  .then((data) => {
    console.log(`getCarrierservicesUploadtransformTexttables success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesUploadtransformTexttables');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **filter** | **String** | Filter | [optional]  |
{: class="table table-striped"}

### Return type

**TextTableTransformEntityListing**

<a name="getCarrierservicesXlsxschema"></a>

# [XlsxSchema] getCarrierservicesXlsxschema(carrierId)


GET /api/v2/carrierservices/xlsxschemas/{carrierId}

Get all XLSX schemas for a given carrier.

Requires ALL permissions:

* purecloudvoiceinternal:schema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let carrierId = "carrierId_example"; // String | Carrier ID

apiInstance.getCarrierservicesXlsxschema(carrierId)
  .then((data) => {
    console.log(`getCarrierservicesXlsxschema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesXlsxschema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **carrierId** | **String** | Carrier ID |  |
{: class="table table-striped"}

### Return type

**[XlsxSchema]**

<a name="getCarrierservicesXlsxschemaNameSchemaName"></a>

# XlsxSchema getCarrierservicesXlsxschemaNameSchemaName(carrierId, schemaName)


GET /api/v2/carrierservices/xlsxschemas/{carrierId}/name/{schemaName}

Get all XLSX schemas for a given carrier and name.

Requires ALL permissions:

* purecloudvoiceinternal:schema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let carrierId = "carrierId_example"; // String | Carrier ID
let schemaName = "schemaName_example"; // String | Schema name

apiInstance.getCarrierservicesXlsxschemaNameSchemaName(carrierId, schemaName)
  .then((data) => {
    console.log(`getCarrierservicesXlsxschemaNameSchemaName success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesXlsxschemaNameSchemaName');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **carrierId** | **String** | Carrier ID |  |
 **schemaName** | **String** | Schema name |  |
{: class="table table-striped"}

### Return type

**XlsxSchema**

<a name="getCarrierservicesXlsxschemas"></a>

# [XlsxSchema] getCarrierservicesXlsxschemas()


GET /api/v2/carrierservices/xlsxschemas

Get all available XLSX schemas.

Requires ALL permissions:

* purecloudvoiceinternal:schema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

apiInstance.getCarrierservicesXlsxschemas()
  .then((data) => {
    console.log(`getCarrierservicesXlsxschemas success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesXlsxschemas');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**[XlsxSchema]**

<a name="patchCarrierservicesNumberinventoryInventorynumber"></a>

# void patchCarrierservicesNumberinventoryInventorynumber(phoneNumberId, opts)


PATCH /api/v2/carrierservices/numberinventory/inventorynumbers/{phoneNumberId}

Partial update or patch of an InventoryNumber.

Requires ALL permissions:

* purecloudvoiceinternal:inventory:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let phoneNumberId = "phoneNumberId_example"; // String | Phone Number
let opts = { 
  'body': {} // Object | InventoryNumber
};

apiInstance.patchCarrierservicesNumberinventoryInventorynumber(phoneNumberId, opts)
  .then(() => {
    console.log('patchCarrierservicesNumberinventoryInventorynumber returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchCarrierservicesNumberinventoryInventorynumber');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneNumberId** | **String** | Phone Number |  |
 **body** | **Object** | InventoryNumber | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchCarrierservicesNumberinventoryInventorynumbersBulk"></a>

# [InventoryNumberResponse] patchCarrierservicesNumberinventoryInventorynumbersBulk(opts)


PATCH /api/v2/carrierservices/numberinventory/inventorynumbers/bulk

Partial update or patch of many InventoryNumbers.

Requires ALL permissions:

* purecloudvoiceinternal:inventory:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': {key: {}} // Object | InventoryNumbers Patch Map
};

apiInstance.patchCarrierservicesNumberinventoryInventorynumbersBulk(opts)
  .then((data) => {
    console.log(`patchCarrierservicesNumberinventoryInventorynumbersBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchCarrierservicesNumberinventoryInventorynumbersBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | InventoryNumbers Patch Map | [optional]  |
{: class="table table-striped"}

### Return type

**[InventoryNumberResponse]**

<a name="patchCarrierservicesNumberpurchaseOrder"></a>

# NumberOrder patchCarrierservicesNumberpurchaseOrder(orderId, opts)


PATCH /api/v2/carrierservices/numberpurchase/orders/{orderId}

Patches individual properties of a number order record.  Not all fields will be allowed to be modified.  Only defaultLocationId and phoneNumberType are currently allowed to be modified .

Requires ALL permissions:

* purecloudvoice:number:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let orderId = "orderId_example"; // String | Phone Number Order ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchCarrierservicesNumberpurchaseOrder(orderId, opts)
  .then((data) => {
    console.log(`patchCarrierservicesNumberpurchaseOrder success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchCarrierservicesNumberpurchaseOrder');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **orderId** | **String** | Phone Number Order ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**NumberOrder**

<a name="postCarrierservicesBillingBandwidthcurrencypricing"></a>

# BandwidthCurrencyPricing postCarrierservicesBillingBandwidthcurrencypricing(opts)


POST /api/v2/carrierservices/billing/bandwidthcurrencypricing

Creates bandwidth currency pricing

Requires ALL permissions:

* purecloudvoiceinternal:price:add
* purecloudvoiceinternal:price:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': [{}] // Object | 
};

apiInstance.postCarrierservicesBillingBandwidthcurrencypricing(opts)
  .then((data) => {
    console.log(`postCarrierservicesBillingBandwidthcurrencypricing success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesBillingBandwidthcurrencypricing');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**BandwidthCurrencyPricing**

<a name="postCarrierservicesBillingBandwidthpricing"></a>

# BandwidthListPricing postCarrierservicesBillingBandwidthpricing(opts)


POST /api/v2/carrierservices/billing/bandwidthpricing

Creates bandwidth pricing

Requires ALL permissions:

* purecloudvoiceinternal:price:add
* purecloudvoiceinternal:price:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postCarrierservicesBillingBandwidthpricing(opts)
  .then((data) => {
    console.log(`postCarrierservicesBillingBandwidthpricing success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesBillingBandwidthpricing');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**BandwidthListPricing**

<a name="postCarrierservicesBillingBills"></a>

# PCVBillAsynchronousTask postCarrierservicesBillingBills(opts)


POST /api/v2/carrierservices/billing/bills

Initiate bill generation

Initiates the generation of a bill. A report ID is returned, it can be used to query the status of the creation, which also returns the bill in the end.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | End date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'breakout': true, // Boolean | Breakout.
  'shortDurationMinCalls': 3.4 // Number | Short duration min. calls.
};

apiInstance.postCarrierservicesBillingBills(opts)
  .then((data) => {
    console.log(`postCarrierservicesBillingBills success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesBillingBills');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **from** | **Date** | Start date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **to** | **Date** | End date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **breakout** | **Boolean** | Breakout. | [optional]  |
 **shortDurationMinCalls** | **Number** | Short duration min. calls. | [optional]  |
{: class="table table-striped"}

### Return type

**PCVBillAsynchronousTask**

<a name="postCarrierservicesBillingMonthlyrecurringcost"></a>

# BillingLineItemAsynchronousTask postCarrierservicesBillingMonthlyrecurringcost(opts)


POST /api/v2/carrierservices/billing/monthlyrecurringcost

Initiate monthly recurring cost (MRC) line items report generation

Initiates the generation of the monthly recurring cost (MRC) report. A report ID is returned, it can be used to query the status of the creation, which also returns the report in the end.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | End date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'breakout': true // Boolean | Breakout.
};

apiInstance.postCarrierservicesBillingMonthlyrecurringcost(opts)
  .then((data) => {
    console.log(`postCarrierservicesBillingMonthlyrecurringcost success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesBillingMonthlyrecurringcost');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **from** | **Date** | Start date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **to** | **Date** | End date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **breakout** | **Boolean** | Breakout. | [optional]  |
{: class="table table-striped"}

### Return type

**BillingLineItemAsynchronousTask**

<a name="postCarrierservicesBillingNonrecurringcost"></a>

# BillingLineItemAsynchronousTask postCarrierservicesBillingNonrecurringcost(opts)


POST /api/v2/carrierservices/billing/nonrecurringcost

Initiate non-recurring cost (NRC) line items report generation

Initiates the generation of the non-recurring cost (NRC) report. A report ID is returned, it can be used to query the status of the creation, which also returns the report in the end.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | End date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'breakout': true // Boolean | Breakout.
};

apiInstance.postCarrierservicesBillingNonrecurringcost(opts)
  .then((data) => {
    console.log(`postCarrierservicesBillingNonrecurringcost success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesBillingNonrecurringcost');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **from** | **Date** | Start date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **to** | **Date** | End date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **breakout** | **Boolean** | Breakout. | [optional]  |
{: class="table table-striped"}

### Return type

**BillingLineItemAsynchronousTask**

<a name="postCarrierservicesBillingNumberrates"></a>

# [ListedNumberRate] postCarrierservicesBillingNumberrates(opts)


POST /api/v2/carrierservices/billing/numberrates

Create effective number rates

Requires ALL permissions:

* purecloudvoiceinternal:price:add
* purecloudvoiceinternal:price:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': [{}] // Object | 
};

apiInstance.postCarrierservicesBillingNumberrates(opts)
  .then((data) => {
    console.log(`postCarrierservicesBillingNumberrates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesBillingNumberrates');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**[ListedNumberRate]**

<a name="postCarrierservicesBillingUsagepricingQuery"></a>

# UsagePricing postCarrierservicesBillingUsagepricingQuery(opts)


POST /api/v2/carrierservices/billing/usagepricing/query

Queries a single usage pricing

Requires ALL permissions:

* purecloudvoiceinternal:price:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postCarrierservicesBillingUsagepricingQuery(opts)
  .then((data) => {
    console.log(`postCarrierservicesBillingUsagepricingQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesBillingUsagepricingQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**UsagePricing**

<a name="postCarrierservicesBillingUsagerateregions"></a>

# [UsageRateRegion] postCarrierservicesBillingUsagerateregions(opts)


POST /api/v2/carrierservices/billing/usagerateregions

Create effective usageRateRegions

Requires ALL permissions:

* purecloudvoiceinternal:price:add
* purecloudvoiceinternal:price:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': [{}] // Object | 
};

apiInstance.postCarrierservicesBillingUsagerateregions(opts)
  .then((data) => {
    console.log(`postCarrierservicesBillingUsagerateregions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesBillingUsagerateregions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**[UsageRateRegion]**

<a name="postCarrierservicesCarrierServices"></a>

# Service postCarrierservicesCarrierServices(carrierId, opts)


POST /api/v2/carrierservices/carriers/{carrierId}/services

Creates a carrier service of a specified type (i.e. OUTBOUND, INBOUND...)

Requires ALL permissions:

* purecloudvoiceinternal:service:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let carrierId = "carrierId_example"; // String | Carrier ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.postCarrierservicesCarrierServices(carrierId, opts)
  .then((data) => {
    console.log(`postCarrierservicesCarrierServices success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesCarrierServices');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **carrierId** | **String** | Carrier ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Service**

<a name="postCarrierservicesCarriers"></a>

# [Carrier] postCarrierservicesCarriers(opts)


POST /api/v2/carrierservices/carriers

Create a carrier

Requires ALL permissions:

* purecloudvoiceinternal:service-provider:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': [{}] // Object | Carrier data
};

apiInstance.postCarrierservicesCarriers(opts)
  .then((data) => {
    console.log(`postCarrierservicesCarriers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesCarriers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Carrier data | [optional]  |
{: class="table table-striped"}

### Return type

**[Carrier]**

<a name="postCarrierservicesCdrsBackup"></a>

# ManualBackupCDRsAsyncResponse postCarrierservicesCdrsBackup(prefix, startDate, endDate)


POST /api/v2/carrierservices/cdrs/backup

Manually backs up CDRs with a given prefix, and within a given time frame.

Requires ANY permissions:

* purecloudvoiceinternal:cdrBackups:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let prefix = "prefix_example"; // String | Prefix
let startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | Date range start. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
let endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | Date range end. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z

apiInstance.postCarrierservicesCdrsBackup(prefix, startDate, endDate)
  .then((data) => {
    console.log(`postCarrierservicesCdrsBackup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesCdrsBackup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **prefix** | **String** | Prefix |  |
 **startDate** | **Date** | Date range start. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |  |
 **endDate** | **Date** | Date range end. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |  |
{: class="table table-striped"}

### Return type

**ManualBackupCDRsAsyncResponse**

<a name="postCarrierservicesCdrsBackupsList"></a>

# ListCDRsAsyncResponse postCarrierservicesCdrsBackupsList(prefix, startDate, endDate, opts)


POST /api/v2/carrierservices/cdrs/backups/list

Initiates asynchronously getting a list of backed up CDRs. The response contains a resultId for obtaining the result.

Requires ANY permissions:

* purecloudvoiceinternal:cdrBackups:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let prefix = "prefix_example"; // String | prefix
let startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | Date range start. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
let endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | Date range end. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
let opts = { 
  'showVersions': true // Boolean | Show versions
};

apiInstance.postCarrierservicesCdrsBackupsList(prefix, startDate, endDate, opts)
  .then((data) => {
    console.log(`postCarrierservicesCdrsBackupsList success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesCdrsBackupsList');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **prefix** | **String** | prefix |  |
 **startDate** | **Date** | Date range start. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |  |
 **endDate** | **Date** | Date range end. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |  |
 **showVersions** | **Boolean** | Show versions | [optional]  |
{: class="table table-striped"}

### Return type

**ListCDRsAsyncResponse**

<a name="postCarrierservicesCdrsGenerateFiles"></a>

# CDRsLambdaResponse postCarrierservicesCdrsGenerateFiles()


POST /api/v2/carrierservices/cdrs/generate/files

Triggers a job that generates mock CDR data and stores it in the appropriate S3 bucket.

Requires ANY permissions:

* purecloudvoiceinternal:report:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

apiInstance.postCarrierservicesCdrsGenerateFiles()
  .then((data) => {
    console.log(`postCarrierservicesCdrsGenerateFiles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesCdrsGenerateFiles');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**CDRsLambdaResponse**

<a name="postCarrierservicesCdrsRestore"></a>

# RestoreCDRAsyncResponse postCarrierservicesCdrsRestore(sourcePrefix, key, opts)


POST /api/v2/carrierservices/cdrs/restore

Restores a backed up CDR.

Requires ANY permissions:

* purecloudvoiceinternal:cdrBackups:restore

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let sourcePrefix = "sourcePrefix_example"; // String | Source prefix
let key = "key_example"; // String | Key of CDR
let opts = { 
  'targetBucket': "targetBucket_example", // String | Target S3 bucket, if different from original bucket
  'targetPrefix': "targetPrefix_example", // String | Target prefix, if different from original prefix
  'versionId': "versionId_example" // String | Version ID
};

apiInstance.postCarrierservicesCdrsRestore(sourcePrefix, key, opts)
  .then((data) => {
    console.log(`postCarrierservicesCdrsRestore success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesCdrsRestore');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sourcePrefix** | **String** | Source prefix |  |
 **key** | **String** | Key of CDR |  |
 **targetBucket** | **String** | Target S3 bucket, if different from original bucket | [optional]  |
 **targetPrefix** | **String** | Target prefix, if different from original prefix | [optional]  |
 **versionId** | **String** | Version ID | [optional]  |
{: class="table table-striped"}

### Return type

**RestoreCDRAsyncResponse**

<a name="postCarrierservicesIntegrationsEmergencylocationsMe"></a>

# EmergencyLocation postCarrierservicesIntegrationsEmergencylocationsMe(opts)


POST /api/v2/carrierservices/integrations/emergencylocations/me

Set current location for the logged in user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postCarrierservicesIntegrationsEmergencylocationsMe(opts)
  .then((data) => {
    console.log(`postCarrierservicesIntegrationsEmergencylocationsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesIntegrationsEmergencylocationsMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**EmergencyLocation**

<a name="postCarrierservicesIntegrationsEmergencylocationsVerifyphonenumber"></a>

# EnhancedEmergencyServices postCarrierservicesIntegrationsEmergencylocationsVerifyphonenumber(opts)


POST /api/v2/carrierservices/integrations/emergencylocations/verifyphonenumber

Verify that phone number supports user location .

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': {} // Object | Number to validate 
};

apiInstance.postCarrierservicesIntegrationsEmergencylocationsVerifyphonenumber(opts)
  .then((data) => {
    console.log(`postCarrierservicesIntegrationsEmergencylocationsVerifyphonenumber success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesIntegrationsEmergencylocationsVerifyphonenumber');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Number to validate  | [optional]  |
{: class="table table-striped"}

### Return type

**EnhancedEmergencyServices**

<a name="postCarrierservicesNumberinventoryInventorynumbers"></a>

# InventoryNumber postCarrierservicesNumberinventoryInventorynumbers(body)


POST /api/v2/carrierservices/numberinventory/inventorynumbers

Create InventoryNumber

Requires ALL permissions:

* purecloudvoiceinternal:inventory:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let body = {}; // Object | InventoryNumber

apiInstance.postCarrierservicesNumberinventoryInventorynumbers(body)
  .then((data) => {
    console.log(`postCarrierservicesNumberinventoryInventorynumbers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesNumberinventoryInventorynumbers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | InventoryNumber |  |
{: class="table table-striped"}

### Return type

**InventoryNumber**

<a name="postCarrierservicesNumberinventoryInventorynumbersBulk"></a>

# [InventoryNumberResponse] postCarrierservicesNumberinventoryInventorynumbersBulk(body)


POST /api/v2/carrierservices/numberinventory/inventorynumbers/bulk

Create many InventoryNumbers

Requires ALL permissions:

* purecloudvoiceinternal:inventory:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let body = [{}]; // Object | InventoryNumbers

apiInstance.postCarrierservicesNumberinventoryInventorynumbersBulk(body)
  .then((data) => {
    console.log(`postCarrierservicesNumberinventoryInventorynumbersBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesNumberinventoryInventorynumbersBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | InventoryNumbers |  |
{: class="table table-striped"}

### Return type

**[InventoryNumberResponse]**

<a name="postCarrierservicesNumbermanagementPortrequestTaskEffectivedate"></a>

# PortUpdateTask postCarrierservicesNumbermanagementPortrequestTaskEffectivedate(portRequestId, opts)


POST /api/v2/carrierservices/numbermanagement/portrequest/tasks/{portRequestId}/effectivedate

Starts a task that updates the effective start date of the associated pending number orders of the port request

Requires ALL permissions:

* purecloudvoice:number:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let portRequestId = "portRequestId_example"; // String | Port Request id
let opts = { 
  'body': new Date("2013-10-20T19:20:30+01:00") // Date | Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
};

apiInstance.postCarrierservicesNumbermanagementPortrequestTaskEffectivedate(portRequestId, opts)
  .then((data) => {
    console.log(`postCarrierservicesNumbermanagementPortrequestTaskEffectivedate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesNumbermanagementPortrequestTaskEffectivedate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **portRequestId** | **String** | Port Request id |  |
 **body** | **Date** | Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
{: class="table table-striped"}

### Return type

**PortUpdateTask**

<a name="postCarrierservicesNumbermanagementPortrequestsDisconnectTasks"></a>

# PortRequestTask postCarrierservicesNumbermanagementPortrequestsDisconnectTasks(opts)


POST /api/v2/carrierservices/numbermanagement/portrequests/disconnect/tasks

Start a task that deletes all given port requests and associated number orders

Requires ALL permissions:

* purecloudvoice:number:view
* purecloudvoice:number:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': ["body_example"] // [String] | 
};

apiInstance.postCarrierservicesNumbermanagementPortrequestsDisconnectTasks(opts)
  .then((data) => {
    console.log(`postCarrierservicesNumbermanagementPortrequestsDisconnectTasks success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesNumbermanagementPortrequestsDisconnectTasks');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **[String]** |  | [optional]  |
{: class="table table-striped"}

### Return type

**PortRequestTask**

<a name="postCarrierservicesNumbermanagementPortrequestsTasks"></a>

# PortTask postCarrierservicesNumbermanagementPortrequestsTasks(opts)


POST /api/v2/carrierservices/numbermanagement/portrequests/tasks

Start a task to port numbers

Requires ALL permissions:

* purecloudvoice:number:view
* purecloudvoice:number:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': [{}] // Object | 
};

apiInstance.postCarrierservicesNumbermanagementPortrequestsTasks(opts)
  .then((data) => {
    console.log(`postCarrierservicesNumbermanagementPortrequestsTasks success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesNumbermanagementPortrequestsTasks');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**PortTask**

<a name="postCarrierservicesNumberpurchase20160715Available"></a>

# SearchResultTask postCarrierservicesNumberpurchase20160715Available(body)


POST /api/v2/carrierservices/numberpurchase/20160715/available

Search for available numbers.

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let body = {}; // Object | Search result parameters

apiInstance.postCarrierservicesNumberpurchase20160715Available(body)
  .then((data) => {
    console.log(`postCarrierservicesNumberpurchase20160715Available success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesNumberpurchase20160715Available');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search result parameters |  |
{: class="table table-striped"}

### Return type

**SearchResultTask**

<a name="postCarrierservicesNumberpurchase20160715Orders"></a>

# [NumberOrder] postCarrierservicesNumberpurchase20160715Orders(opts)


POST /api/v2/carrierservices/numberpurchase/20160715/orders

Purchase numbers.

Requires ALL permissions:

* purecloudvoice:number:add
* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': [{}] // Object | 
};

apiInstance.postCarrierservicesNumberpurchase20160715Orders(opts)
  .then((data) => {
    console.log(`postCarrierservicesNumberpurchase20160715Orders success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesNumberpurchase20160715Orders');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**[NumberOrder]**

<a name="postCarrierservicesNumberpurchase20190107DisconnectTasks"></a>

# OrderTask postCarrierservicesNumberpurchase20190107DisconnectTasks(opts)


POST /api/v2/carrierservices/numberpurchase/20190107/disconnect/tasks

Start a task to disconnect the numbers purchased in the given orders.  The orders record remain in the deleted state for record keeping.

Requires ALL permissions:

* purecloudvoice:number:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': ["body_example"] // [String] | 
};

apiInstance.postCarrierservicesNumberpurchase20190107DisconnectTasks(opts)
  .then((data) => {
    console.log(`postCarrierservicesNumberpurchase20190107DisconnectTasks success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesNumberpurchase20190107DisconnectTasks');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **[String]** |  | [optional]  |
{: class="table table-striped"}

### Return type

**OrderTask**

<a name="postCarrierservicesNumberpurchase20190107ExportTasks"></a>

# ExportTask postCarrierservicesNumberpurchase20190107ExportTasks(opts)


POST /api/v2/carrierservices/numberpurchase/20190107/export/tasks

Exports number orders for the organization of one or more statuses, a phone number range, or a combination thereof, in CSV format.

Requires ALL permissions:

* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postCarrierservicesNumberpurchase20190107ExportTasks(opts)
  .then((data) => {
    console.log(`postCarrierservicesNumberpurchase20190107ExportTasks success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesNumberpurchase20190107ExportTasks');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**ExportTask**

<a name="postCarrierservicesNumberpurchase20200902ReservationsTasks"></a>

# PurchasingTask postCarrierservicesNumberpurchase20200902ReservationsTasks(opts)


POST /api/v2/carrierservices/numberpurchase/20200902/reservations/tasks

Start a task to reserve available numbers, making them ready for purchase and preventing other users from accessing them.

Requires ALL permissions:

* purecloudvoice:number:view
* purecloudvoice:number:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': [{}] // Object | 
};

apiInstance.postCarrierservicesNumberpurchase20200902ReservationsTasks(opts)
  .then((data) => {
    console.log(`postCarrierservicesNumberpurchase20200902ReservationsTasks success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesNumberpurchase20200902ReservationsTasks');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**PurchasingTask**

<a name="postCarrierservicesNumberpurchaseOrders"></a>

# [NumberOrder] postCarrierservicesNumberpurchaseOrders(opts)


POST /api/v2/carrierservices/numberpurchase/orders

Purchase numbers.

Requires ALL permissions:

* purecloudvoice:number:add
* purecloudvoice:number:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postCarrierservicesNumberpurchaseOrders(opts)
  .then((data) => {
    console.log(`postCarrierservicesNumberpurchaseOrders success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesNumberpurchaseOrders');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**[NumberOrder]**

<a name="postCarrierservicesReportLineitemsFees"></a>

# LineItemAsynchronousTask postCarrierservicesReportLineitemsFees(opts)


POST /api/v2/carrierservices/report/lineitems/fees

Initiate fee line items report generation

Initiates the generation of the fee line items report. A report ID is returned, it can be used to query the status of the creation, which also returns the report in the end.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | End date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'shortDurationMinCalls': 3.4 // Number | Short duration min. calls.
};

apiInstance.postCarrierservicesReportLineitemsFees(opts)
  .then((data) => {
    console.log(`postCarrierservicesReportLineitemsFees success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesReportLineitemsFees');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **from** | **Date** | Start date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **to** | **Date** | End date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **shortDurationMinCalls** | **Number** | Short duration min. calls. | [optional]  |
{: class="table table-striped"}

### Return type

**LineItemAsynchronousTask**

<a name="postCarrierservicesReportLineitemsUsage"></a>

# LineItemAsynchronousTask postCarrierservicesReportLineitemsUsage(opts)


POST /api/v2/carrierservices/report/lineitems/usage

Initiate usage line items report generation

Initiates the generation of the usage line items report. A report ID is returned, it can be used to query the status of the creation, which also returns the report in the end.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | End date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'shortDurationMinCalls': 3.4 // Number | Short duration min. calls.
};

apiInstance.postCarrierservicesReportLineitemsUsage(opts)
  .then((data) => {
    console.log(`postCarrierservicesReportLineitemsUsage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesReportLineitemsUsage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **from** | **Date** | Start date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **to** | **Date** | End date bound for starting time for calls. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **shortDurationMinCalls** | **Number** | Short duration min. calls. | [optional]  |
{: class="table table-striped"}

### Return type

**LineItemAsynchronousTask**

<a name="postCarrierservicesReportUsageCallsCsv"></a>

# UrlResponseAsynchronousTask postCarrierservicesReportUsageCallsCsv(opts)


POST /api/v2/carrierservices/report/usage/calls/csv

Get carrier services usage data CSV.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view
* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | startDateTime. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'to': new Date("2013-10-20T19:20:30+01:00") // Date | endDateTime. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
};

apiInstance.postCarrierservicesReportUsageCallsCsv(opts)
  .then((data) => {
    console.log(`postCarrierservicesReportUsageCallsCsv success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesReportUsageCallsCsv');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **from** | **Date** | startDateTime. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **to** | **Date** | endDateTime. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
{: class="table table-striped"}

### Return type

**UrlResponseAsynchronousTask**

<a name="postCarrierservicesSignature"></a>

# EmbeddedSignatureView postCarrierservicesSignature(opts)


POST /api/v2/carrierservices/signature

Get View Url

Provides url of a hosted DocuSign view/document, allowing user to sign document electronically

Requires ALL permissions:

* purecloudvoice:number:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postCarrierservicesSignature(opts)
  .then((data) => {
    console.log(`postCarrierservicesSignature success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesSignature');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**EmbeddedSignatureView**

<a name="postCarrierservicesSignaturesTasks"></a>

# SignatureTask postCarrierservicesSignaturesTasks(opts)


POST /api/v2/carrierservices/signatures/tasks

Start task to get url of a hosted DocuSign view/document, allowing user to sign document electronically

Requires ALL permissions:

* purecloudvoice:number:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postCarrierservicesSignaturesTasks(opts)
  .then((data) => {
    console.log(`postCarrierservicesSignaturesTasks success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesSignaturesTasks');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**SignatureTask**

<a name="postCarrierservicesTemplates"></a>

# DocusignTemplateMapping postCarrierservicesTemplates(opts)


POST /api/v2/carrierservices/templates

Create template

Requires ALL permissions:

* purecloudvoiceinternal:contractmapping:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': {} // Object | Template data
};

apiInstance.postCarrierservicesTemplates(opts)
  .then((data) => {
    console.log(`postCarrierservicesTemplates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesTemplates');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Template data | [optional]  |
{: class="table table-striped"}

### Return type

**DocusignTemplateMapping**

<a name="postCarrierservicesTransformendpoints"></a>

# TransformEndpoint postCarrierservicesTransformendpoints(opts)


POST /api/v2/carrierservices/transformendpoints

Add a new transform plan for uploaded spreadsheets

Requires ALL permissions:

* purecloudvoiceinternal:schema:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postCarrierservicesTransformendpoints(opts)
  .then((data) => {
    console.log(`postCarrierservicesTransformendpoints success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesTransformendpoints');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**TransformEndpoint**

<a name="postCarrierservicesUploadtransformSpreadsheets"></a>

# SpreadsheetTransform postCarrierservicesUploadtransformSpreadsheets(opts)


POST /api/v2/carrierservices/uploadtransform/spreadsheets

Add a new transform plan for uploaded spreadsheets

Requires ALL permissions:

* purecloudvoiceinternal:schema:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postCarrierservicesUploadtransformSpreadsheets(opts)
  .then((data) => {
    console.log(`postCarrierservicesUploadtransformSpreadsheets success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesUploadtransformSpreadsheets');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**SpreadsheetTransform**

<a name="postCarrierservicesUploadtransformTexttables"></a>

# TextTableTransform postCarrierservicesUploadtransformTexttables(opts)


POST /api/v2/carrierservices/uploadtransform/texttables

Add a new transform plan for uploaded delimited text tables

Requires ALL permissions:

* purecloudvoiceinternal:schema:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postCarrierservicesUploadtransformTexttables(opts)
  .then((data) => {
    console.log(`postCarrierservicesUploadtransformTexttables success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesUploadtransformTexttables');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**TextTableTransform**

<a name="putCarrierservicesBillingBandwidthcurrencypricing"></a>

# BandwidthCurrencyPricing putCarrierservicesBillingBandwidthcurrencypricing(opts)


PUT /api/v2/carrierservices/billing/bandwidthcurrencypricing

Updates bandwidth currency pricing

Requires ALL permissions:

* purecloudvoiceinternal:price:edit
* purecloudvoiceinternal:price:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': [{}] // Object | 
};

apiInstance.putCarrierservicesBillingBandwidthcurrencypricing(opts)
  .then((data) => {
    console.log(`putCarrierservicesBillingBandwidthcurrencypricing success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putCarrierservicesBillingBandwidthcurrencypricing');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**BandwidthCurrencyPricing**

<a name="putCarrierservicesBillingBandwidthpricing"></a>

# BandwidthListPricing putCarrierservicesBillingBandwidthpricing(opts)


PUT /api/v2/carrierservices/billing/bandwidthpricing

Updates bandwidth pricing

Requires ALL permissions:

* purecloudvoiceinternal:price:edit
* purecloudvoiceinternal:price:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.putCarrierservicesBillingBandwidthpricing(opts)
  .then((data) => {
    console.log(`putCarrierservicesBillingBandwidthpricing success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putCarrierservicesBillingBandwidthpricing');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**BandwidthListPricing**

<a name="putCarrierservicesBillingNumberrates"></a>

# [ListedNumberRate] putCarrierservicesBillingNumberrates(opts)


PUT /api/v2/carrierservices/billing/numberrates

Update effective number rates

Requires ALL permissions:

* purecloudvoiceinternal:price:add
* purecloudvoiceinternal:price:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': [{}] // Object | 
};

apiInstance.putCarrierservicesBillingNumberrates(opts)
  .then((data) => {
    console.log(`putCarrierservicesBillingNumberrates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putCarrierservicesBillingNumberrates');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**[ListedNumberRate]**

<a name="putCarrierservicesBillingUsagerateregions"></a>

# [UsageRateRegion] putCarrierservicesBillingUsagerateregions(opts)


PUT /api/v2/carrierservices/billing/usagerateregions

Update effective usageRateRegions

Requires ALL permissions:

* purecloudvoiceinternal:price:add
* purecloudvoiceinternal:price:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': [{}] // Object | 
};

apiInstance.putCarrierservicesBillingUsagerateregions(opts)
  .then((data) => {
    console.log(`putCarrierservicesBillingUsagerateregions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putCarrierservicesBillingUsagerateregions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**[UsageRateRegion]**

<a name="putCarrierservicesCarrier"></a>

# Carrier putCarrierservicesCarrier(carrierId, opts)


PUT /api/v2/carrierservices/carriers/{carrierId}

Update a carrier.

Requires ALL permissions:

* purecloudvoiceinternal:service-provider:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let carrierId = "carrierId_example"; // String | Carrier ID
let opts = { 
  'body': {} // Object | Carrier data
};

apiInstance.putCarrierservicesCarrier(carrierId, opts)
  .then((data) => {
    console.log(`putCarrierservicesCarrier success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putCarrierservicesCarrier');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **carrierId** | **String** | Carrier ID |  |
 **body** | **Object** | Carrier data | [optional]  |
{: class="table table-striped"}

### Return type

**Carrier**

<a name="putCarrierservicesCarrierService"></a>

# Service putCarrierservicesCarrierService(carrierId, serviceId, opts)


PUT /api/v2/carrierservices/carriers/{carrierId}/services/{serviceId}

Updates a specific service for a given carrier (i.e. OUTBOUND, INBOUND...)

Requires ALL permissions:

* purecloudvoiceinternal:service:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let carrierId = "carrierId_example"; // String | Carrier ID
let serviceId = "serviceId_example"; // String | Service ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.putCarrierservicesCarrierService(carrierId, serviceId, opts)
  .then((data) => {
    console.log(`putCarrierservicesCarrierService success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putCarrierservicesCarrierService');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **carrierId** | **String** | Carrier ID |  |
 **serviceId** | **String** | Service ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Service**

<a name="putCarrierservicesCarriers20190123Carrier"></a>

# Carrier putCarrierservicesCarriers20190123Carrier(carrierId, opts)


PUT /api/v2/carrierservices/carriers/20190123/carriers/{carrierId}

[20190123] Update a carrier

Requires ALL permissions:

* purecloudvoiceinternal:service-provider:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let carrierId = "carrierId_example"; // String | Carrier ID
let opts = { 
  'body': {} // Object | Carrier data
};

apiInstance.putCarrierservicesCarriers20190123Carrier(carrierId, opts)
  .then((data) => {
    console.log(`putCarrierservicesCarriers20190123Carrier success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putCarrierservicesCarriers20190123Carrier');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **carrierId** | **String** | Carrier ID |  |
 **body** | **Object** | Carrier data | [optional]  |
{: class="table table-striped"}

### Return type

**Carrier**

<a name="putCarrierservicesCarriers20190123CarrierService"></a>

# Service putCarrierservicesCarriers20190123CarrierService(carrierId, serviceId, opts)


PUT /api/v2/carrierservices/carriers/20190123/carriers/{carrierId}/services/{serviceId}

[20190123] Update a service for a carrier

Requires ALL permissions:

* purecloudvoiceinternal:service:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let carrierId = "carrierId_example"; // String | Carrier ID
let serviceId = "serviceId_example"; // String | Service ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.putCarrierservicesCarriers20190123CarrierService(carrierId, serviceId, opts)
  .then((data) => {
    console.log(`putCarrierservicesCarriers20190123CarrierService success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putCarrierservicesCarriers20190123CarrierService');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **carrierId** | **String** | Carrier ID |  |
 **serviceId** | **String** | Service ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Service**

<a name="putCarrierservicesCsvschema"></a>

# CsvSchema putCarrierservicesCsvschema(carrierId, opts)


PUT /api/v2/carrierservices/csvschemas/{carrierId}

Updates or creates a CSV schema for a carrier.

Requires ALL permissions:

* purecloudvoiceinternal:schema:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let carrierId = "carrierId_example"; // String | Carrier ID
let opts = { 
  'body': {} // Object | Schema data
};

apiInstance.putCarrierservicesCsvschema(carrierId, opts)
  .then((data) => {
    console.log(`putCarrierservicesCsvschema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putCarrierservicesCsvschema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **carrierId** | **String** | Carrier ID |  |
 **body** | **Object** | Schema data | [optional]  |
{: class="table table-striped"}

### Return type

**CsvSchema**

<a name="putCarrierservicesNumberinventoryInventorynumber"></a>

# InventoryNumber putCarrierservicesNumberinventoryInventorynumber(phoneNumberId, opts)


PUT /api/v2/carrierservices/numberinventory/inventorynumbers/{phoneNumberId}

Update an InventoryNumber

Requires ALL permissions:

* purecloudvoiceinternal:inventory:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let phoneNumberId = "phoneNumberId_example"; // String | Phone Number
let opts = { 
  'body': {} // Object | InventoryNumber
};

apiInstance.putCarrierservicesNumberinventoryInventorynumber(phoneNumberId, opts)
  .then((data) => {
    console.log(`putCarrierservicesNumberinventoryInventorynumber success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putCarrierservicesNumberinventoryInventorynumber');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneNumberId** | **String** | Phone Number |  |
 **body** | **Object** | InventoryNumber | [optional]  |
{: class="table table-striped"}

### Return type

**InventoryNumber**

<a name="putCarrierservicesNumberinventoryInventorynumbersBulk"></a>

# [InventoryNumberResponse] putCarrierservicesNumberinventoryInventorynumbersBulk(body)


PUT /api/v2/carrierservices/numberinventory/inventorynumbers/bulk

Update many InventoryNumbers

Requires ALL permissions:

* purecloudvoiceinternal:inventory:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let body = [{}]; // Object | InventoryNumbers

apiInstance.putCarrierservicesNumberinventoryInventorynumbersBulk(body)
  .then((data) => {
    console.log(`putCarrierservicesNumberinventoryInventorynumbersBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putCarrierservicesNumberinventoryInventorynumbersBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | InventoryNumbers |  |
{: class="table table-striped"}

### Return type

**[InventoryNumberResponse]**

<a name="putCarrierservicesNumberpurchaseOrder"></a>

# NumberOrder putCarrierservicesNumberpurchaseOrder(orderId, opts)


PUT /api/v2/carrierservices/numberpurchase/orders/{orderId}

Updates a number order record.  Not all fields will be allowed to be modified.  Only effectiveStartDate currently is allowed to be modified at the moment.

Requires ALL permissions:

* purecloudvoice:number:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let orderId = "orderId_example"; // String | Phone Number Order ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.putCarrierservicesNumberpurchaseOrder(orderId, opts)
  .then((data) => {
    console.log(`putCarrierservicesNumberpurchaseOrder success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putCarrierservicesNumberpurchaseOrder');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **orderId** | **String** | Phone Number Order ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**NumberOrder**

<a name="putCarrierservicesNumberpurchasePortrequest"></a>

# NumberPortRequest putCarrierservicesNumberpurchasePortrequest(portRequestId, opts)


PUT /api/v2/carrierservices/numberpurchase/portrequests/{portRequestId}

Edit details of a specific port request.  You may only edit the company name, billing address, and contact info for the port request.  Editing is also only allowed before 30 minutes of activating time.

Requires ALL permissions:

* purecloudvoice:number:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let portRequestId = "portRequestId_example"; // String | Port request id
let opts = { 
  'body': {} // Object | 
};

apiInstance.putCarrierservicesNumberpurchasePortrequest(portRequestId, opts)
  .then((data) => {
    console.log(`putCarrierservicesNumberpurchasePortrequest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putCarrierservicesNumberpurchasePortrequest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **portRequestId** | **String** | Port request id |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**NumberPortRequest**

<a name="putCarrierservicesTemplate"></a>

# DocusignTemplateMapping putCarrierservicesTemplate(templateId, opts)


PUT /api/v2/carrierservices/templates/{templateId}

Update template

Requires ALL permissions:

* purecloudvoiceinternal:contractmapping:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let templateId = "templateId_example"; // String | Template ID
let opts = { 
  'body': {} // Object | Template data
};

apiInstance.putCarrierservicesTemplate(templateId, opts)
  .then((data) => {
    console.log(`putCarrierservicesTemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putCarrierservicesTemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **templateId** | **String** | Template ID |  |
 **body** | **Object** | Template data | [optional]  |
{: class="table table-striped"}

### Return type

**DocusignTemplateMapping**

<a name="putCarrierservicesTransformendpoint"></a>

# TransformEndpoint putCarrierservicesTransformendpoint(endpointId, opts)


PUT /api/v2/carrierservices/transformendpoints/{endpointId}

Update an existing Endpoint plan for uploaded Transforms

Requires ALL permissions:

* purecloudvoiceinternal:schema:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let endpointId = "endpointId_example"; // String | Endpoint ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.putCarrierservicesTransformendpoint(endpointId, opts)
  .then((data) => {
    console.log(`putCarrierservicesTransformendpoint success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putCarrierservicesTransformendpoint');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **endpointId** | **String** | Endpoint ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**TransformEndpoint**

<a name="putCarrierservicesUploadtransformSpreadsheet"></a>

# SpreadsheetTransform putCarrierservicesUploadtransformSpreadsheet(transformId, opts)


PUT /api/v2/carrierservices/uploadtransform/spreadsheets/{transformId}

Update an existing transform plan for uploaded spreadsheets

Requires ALL permissions:

* purecloudvoiceinternal:schema:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let transformId = "transformId_example"; // String | Transform ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.putCarrierservicesUploadtransformSpreadsheet(transformId, opts)
  .then((data) => {
    console.log(`putCarrierservicesUploadtransformSpreadsheet success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putCarrierservicesUploadtransformSpreadsheet');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **transformId** | **String** | Transform ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**SpreadsheetTransform**

<a name="putCarrierservicesUploadtransformTexttable"></a>

# TextTableTransform putCarrierservicesUploadtransformTexttable(transformId, opts)


PUT /api/v2/carrierservices/uploadtransform/texttables/{transformId}

Update an existing transform plan for uploaded delimited text tables

Requires ALL permissions:

* purecloudvoiceinternal:schema:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let transformId = "transformId_example"; // String | Transform ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.putCarrierservicesUploadtransformTexttable(transformId, opts)
  .then((data) => {
    console.log(`putCarrierservicesUploadtransformTexttable success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putCarrierservicesUploadtransformTexttable');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **transformId** | **String** | Transform ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**TextTableTransform**

<a name="putCarrierservicesXlsxschema"></a>

# XlsxSchema putCarrierservicesXlsxschema(carrierId, opts)


PUT /api/v2/carrierservices/xlsxschemas/{carrierId}

Updates or creates a XLSX schema for a carrier.

Requires ALL permissions:

* purecloudvoiceinternal:schema:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let carrierId = "carrierId_example"; // String | Carrier ID
let opts = { 
  'body': {} // Object | Schema data
};

apiInstance.putCarrierservicesXlsxschema(carrierId, opts)
  .then((data) => {
    console.log(`putCarrierservicesXlsxschema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putCarrierservicesXlsxschema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **carrierId** | **String** | Carrier ID |  |
 **body** | **Object** | Schema data | [optional]  |
{: class="table table-striped"}

### Return type

**XlsxSchema**

