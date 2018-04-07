Platform API version: 2072


# Major Changes (5 changes)

**DELETE /api/v2/flows/datatables/{datatableId}** (1 change)

* Parameter force was added

**TimeZone** (4 changes)

* Property displayName was removed
* Property dstsavings was removed
* Property rawOffset was removed
* id has been made readonly


# Minor Changes (25 changes)

**/api/v2/groups/{groupId}/individuals** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/{userId}/trustors** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/architect/emergencygroups** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/profiles/groups** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/architect/emergencygroups/{emergencyGroupId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**DELETE /api/v2/flows/datatables/{datatableId}** (1 change)

* Response 409 was added

**Video** (1 change)

* Optional property msids was added

**AnalyticsSession** (1 change)

* Values are no longer constrained by enum members

**IVR** (1 change)

* Optional property holidayHoursFlow was added

**TimeZone** (3 changes)

* Optional property name was added
* Optional property offset was added
* Optional property selfUri was added

**ScheduleGroup** (1 change)

* Optional property holidaySchedules was added

**EmergencyCallFlow** (1 change)

* Model was added

**EmergencyGroup** (1 change)

* Model was added

**EmergencyGroupListing** (1 change)

* Model was added

**GroupProfileEntityListing** (1 change)

* Model was added


# Point Changes (13 changes)

**GET /api/v2/groups/{groupId}/members** (1 change)

* Summary was changed

**GET /api/v2/externalcontacts/organizations** (2 changes)

* Description was changed for parameter pageSize
* Description was changed for parameter pageNumber

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/relationships** (2 changes)

* Description was changed for parameter pageSize
* Description was changed for parameter pageNumber

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes** (2 changes)

* Description was changed for parameter pageSize
* Description was changed for parameter pageNumber

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/contacts** (2 changes)

* Description was changed for parameter pageSize
* Description was changed for parameter pageNumber

**GET /api/v2/externalcontacts/contacts** (2 changes)

* Description was changed for parameter pageSize
* Description was changed for parameter pageNumber

**GET /api/v2/externalcontacts/contacts/{contactId}/notes** (2 changes)

* Description was changed for parameter pageSize
* Description was changed for parameter pageNumber
