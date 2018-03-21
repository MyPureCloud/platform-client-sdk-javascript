Platform API version: 2032


# Major Changes (6 changes)

**GET /api/v2/outbound/campaigns** (1 change)

* Parameter id was added

**GET /api/v2/outbound/contactlists** (1 change)

* Parameter id was added

**TimeZone** (3 changes)

* Property name was removed
* Property offset was removed
* Property selfUri was removed

**GroupUpdate** (1 change)

* Enum value owners was removed from property visibility


# Minor Changes (28 changes)

**/api/v2/authorization/divisions/{divisionId}/objects/{objectType}** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/stations/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**POST /api/v2/flows/datatables/{datatableId}/rows** (1 change)

* Response 409 was added

**POST /api/v2/flows/datatables** (1 change)

* Response 409 was added

**PUT /api/v2/flows/datatables/{datatableId}/rows/{rowId}** (1 change)

* Response 409 was added

**/api/v2/analytics/reporting/exports** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**Group** (1 change)

* Optional property owners was added

**AuthzTypedObject** (1 change)

* Model was added

**TrustGroup** (1 change)

* Optional property owners was added

**TimeZone** (4 changes)

* Optional property displayName was added
* id is no longer readonly
* Optional property dstsavings was added
* Optional property rawOffset was added

**GroupUpdate** (2 changes)

* Enum value ownerIds was added to property visibility
* Optional property ownerIds was added

**FreeSeatingConfiguration** (1 change)

* Model was added

**StationSettings** (1 change)

* Model was added

**GroupCreate** (1 change)

* Model was added

**DataColumn** (1 change)

* Model was added

**ReportingExportJobResponse** (1 change)

* Model was added

**ViewFilter** (1 change)

* Model was added

**ReportingExportJobListing** (1 change)

* Model was added

**ReportingExportJobRequest** (1 change)

* Model was added


# Point Changes (1 change)

**POST /api/v2/notifications/channels** (1 change)

* Description was changed
