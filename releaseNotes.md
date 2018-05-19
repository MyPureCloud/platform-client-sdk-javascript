Platform API version: 2252


# Major Changes (20 changes)

**/api/v2/appfoundry/{platformName}/categories/{categoryName}** (1 change)

* Path /api/v2/appfoundry/{platformName}/categories/{categoryName} was removed

**/api/v2/appfoundry/{platformName}/categories/{categoryName}/{subCategoryName}** (1 change)

* Path /api/v2/appfoundry/{platformName}/categories/{categoryName}/{subCategoryName} was removed

**/api/v2/appfoundry/{platformName}/categories** (1 change)

* Path /api/v2/appfoundry/{platformName}/categories was removed

**GET /api/v2/groups/{groupId}/individuals** (1 change)

* Response 200 type was changed from UserEntityListing[] to UserEntityListing

**GET /api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests/{timeOffRequestId}** (1 change)

* Response 200 type was changed from TimeOffRequest to TimeOffRequestResponse

**Entity** (1 change)

* Model Entity was removed

**AppFoundryListing** (1 change)

* Model AppFoundryListing was removed

**AppFoundryListingRegistryInfo** (1 change)

* Model AppFoundryListingRegistryInfo was removed

**LocalizedField** (1 change)

* Model LocalizedField was removed

**MarketingInfo** (1 change)

* Model MarketingInfo was removed

**Platform** (1 change)

* Model Platform was removed

**PricingOption** (1 change)

* Model PricingOption was removed

**SmartCase** (1 change)

* Model SmartCase was removed

**PagedListingEntity** (1 change)

* Model PagedListingEntity was removed

**TimeOffRequest** (1 change)

* Model TimeOffRequest was removed

**AppFoundryListingCategory** (1 change)

* Model AppFoundryListingCategory was removed

**TimeOffRequestList** (1 change)

* Property timeOffRequests was changed from TimeOffRequest[] to TimeOffRequestResponse[]

**UserSchedule** (1 change)

* Required property metadata was added

**UserScheduleShift** (2 changes)

* startDate has been made readonly
* lengthInMinutes has been made readonly


# Minor Changes (36 changes)

**/api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests/{timeOffRequestId}** (1 change)

* Operation patch was added. Summary: Update a time off request

**ContactList** (2 changes)

* Optional property automaticTimeZoneMapping was added
* Optional property zipCodeColumnName was added

**MessageData** (3 changes)

* Enum value whatsapp was added to property messengerType
* Enum value telegram was added to property messengerType
* Enum value kakao was added to property messengerType

**MessageMediaParticipant** (3 changes)

* Enum value whatsapp was added to property type
* Enum value telegram was added to property type
* Enum value kakao was added to property type

**Message** (3 changes)

* Enum value whatsapp was added to property type
* Enum value telegram was added to property type
* Enum value kakao was added to property type

**AuthzDivision** (1 change)

* Model was added

**Campaign** (1 change)

* Optional property site was added

**TimeOffRequestResponse** (1 change)

* Model was added

**AdminTimeOffRequestPatch** (1 change)

* Model was added

**ViewFilter** (1 change)

* Optional property messageTypes was added

**Flow** (1 change)

* Optional property division was added

**ContactColumnTimeZone** (2 changes)

* Optional property timeZone was added
* Optional property columnType was added

**DialerContact** (1 change)

* Optional property contactColumnTimeZones was added

**Channel** (1 change)

* id is no longer readonly

**CampaignDiagnostics** (1 change)

* Optional property scheduledInteractionsCount was added

**DomainPermission** (1 change)

* Optional property divisionAware was added

**UserSchedule** (2 changes)

* Optional property delete was added
* Optional property workPlanId was added

**UserScheduleActivity** (1 change)

* Optional property timeOffRequestId was added

**UserScheduleFullDayTimeOffMarker** (1 change)

* Optional property delete was added

**UserScheduleShift** (3 changes)

* Optional property id was added
* Optional property delete was added
* Optional property manuallyEdited was added

**CallHistoryParticipant** (1 change)

* Optional property flaggedReason was added

**WritableEntity** (1 change)

* Model was added

**AvailableTopic** (1 change)

* id is no longer readonly

**OutboundSettings** (2 changes)

* Optional property abandonSeconds was added
* Optional property complianceAbandonRateDenominator was added


# Point Changes (7 changes)

**GET /api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests** (2 changes)

* Summary was changed
* Description was changed for parameter muId

**GET /api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests/{timeOffRequestId}** (2 changes)

* Summary was changed
* Description was changed for parameter muId

**GET /api/v2/workforcemanagement/managementunits/{muId}/activitycodes** (1 change)

* Description was changed for parameter muId

**POST /api/v2/workforcemanagement/managementunits/{muId}/activitycodes** (1 change)

* Description was changed for parameter muId

**POST /api/v2/workforcemanagement/managementunits/{muId}/schedules/search** (1 change)

* Summary was changed
