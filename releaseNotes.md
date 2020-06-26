Platform API version: 4032


# Major Changes (11 changes)

**GET /api/v2/groups/{groupId}/profile** (1 change)

* Has been deprecated

**GET /api/v2/profiles/users** (1 change)

* Has been deprecated

**GET /api/v2/profiles/groups** (1 change)

* Has been deprecated

**GET /api/v2/users/{userId}/profile** (1 change)

* Has been deprecated

**PromptAsset** (1 change)

* Values are now constrained by enum members

**EntityListing** (5 changes)

* Property pageSize was removed
* Property pageNumber was removed
* Property total was removed
* Property pageCount was removed
* Property entities was changed from DataTableImportJob[] to object[]

**PromptAssetCreate** (1 change)

* Values are now constrained by enum members


# Minor Changes (3 changes)

**CoachingAppointmentResponse** (1 change)

* Enum value InvalidSchedule was added to property status

**CoachingNotification** (1 change)

* Enum value InvalidSchedule was added to property status

**EventMessage** (1 change)

* Enum value CAMPAIGN_QUEUE_MEMBERS_LIMIT_EXCEEDED was added to property code


# Point Changes (8 changes)

**GET /api/v2/scim/v2/users** (1 change)

* Description was changed for parameter count

**GET /api/v2/scim/groups** (1 change)

* Description was changed for parameter count

**GET /api/v2/groups/{groupId}/profile** (1 change)

* Description was changed

**GET /api/v2/scim/users** (1 change)

* Description was changed for parameter count

**GET /api/v2/profiles/users** (1 change)

* Description was changed

**GET /api/v2/profiles/groups** (1 change)

* Description was changed

**GET /api/v2/users/{userId}/profile** (1 change)

* Description was changed

**GET /api/v2/scim/v2/groups** (1 change)

* Description was changed for parameter count
