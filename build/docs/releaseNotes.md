Platform API version: 4364


# Major Changes (8 changes)

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories** (1 change)

* Parameter name was added

**GET /api/v2/routing/wrapupcodes** (1 change)

* Parameter sortOrder was added

**GET /api/v2/coaching/appointments/{appointmentId}/statuses** (1 change)

* Response 200 type was changed from CoachingAppointmentStatusDtoList to CoachingAppointmentStatusResponseList

**PATCH /api/v2/coaching/appointments/{appointmentId}/status** (1 change)

* Response 200 type was changed from CoachingAppointmentStatusDto to CoachingAppointmentStatusResponse

**CoachingAppointmentStatusDto** (1 change)

* Model CoachingAppointmentStatusDto was removed

**CoachingAppointmentStatusDtoList** (1 change)

* Model CoachingAppointmentStatusDtoList was removed

**UpdateCoachingAppointmentRequest** (1 change)

* Enum value InvalidSchedule was removed from property status

**EntityListing** (1 change)

* Property entities was changed from object[] to DataTableImportJob[]


# Minor Changes (13 changes)

**EntityListing** (4 changes)

* Optional property pageSize was added
* Optional property pageNumber was added
* Optional property total was added
* Optional property pageCount was added

**UploadUrlResponse** (1 change)

* Optional property uploadKey was added

**ActionTarget** (1 change)

* Optional property shortAbandonThreshold was added

**OAuthScopeListing** (1 change)

* Optional property total was added

**PatchActionTarget** (1 change)

* Optional property shortAbandonThreshold was added

**OAuthAuthorizationListing** (1 change)

* Optional property total was added

**UserSearchRequest** (1 change)

* Enum value RingCentral was added to property integrationPresenceSource

**CoachingAppointmentStatusResponse** (1 change)

* Model was added

**CoachingAppointmentStatusResponseList** (1 change)

* Model was added

**CoachingAppointmentStatusRequest** (1 change)

* Model was added


# Point Changes (1 change)

**GET /api/v2/users/development/activities/{activityId}** (1 change)

* Description was changed
