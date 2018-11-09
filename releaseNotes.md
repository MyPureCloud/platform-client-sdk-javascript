Platform API version: 2789


# Major Changes (10 changes)

**/api/v2/outbound/contactlists/{contactListId}/clear** (1 change)

* Path /api/v2/outbound/contactlists/{contactListId}/clear was removed

**GET /api/v2/quality/forms/surveys** (1 change)

* Parameter sortOrder was added

**GET /api/v2/flows** (1 change)

* Parameter type was changed from string to array

**GET /api/v2/quality/forms/surveys/bulk** (2 changes)

* Parameter ids was removed
* Parameter id was added

**GET /api/v2/routing/skills** (1 change)

* Parameter id was added

**GET /api/v2/flows/divisionviews** (1 change)

* Parameter type was changed from string to array

**GET /api/v2/quality/forms/evaluations** (1 change)

* Parameter sortOrder was added

**GET /api/v2/quality/forms** (1 change)

* Parameter sortOrder was added

**GET /api/v2/routing/languages** (1 change)

* Parameter id was added


# Minor Changes (31 changes)

**/api/v2/analytics/conversations/details** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/outbound/contactlists/divisionviews/{contactListId}** (2 changes)

* Path was added
* Operation GET was added

**GET /api/v2/flows** (1 change)

* Parameter type was made optional

**/api/v2/quality/forms/surveys/bulk/contexts** (2 changes)

* Path was added
* Operation GET was added

**GET /api/v2/flows/divisionviews** (1 change)

* Parameter type was made optional

**/api/v2/outbound/dnclists/divisionviews/{dncListId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/outbound/dnclists/divisionviews** (2 changes)

* Path was added
* Operation GET was added

**AnalyticsSession** (1 change)

* Optional property recording was added

**MessageMediaAttachment** (1 change)

* Model was added

**MessageStickerAttachment** (1 change)

* Model was added

**RecordingMessagingMessage** (2 changes)

* Optional property messageMediaAttachments was added
* Optional property messageStickerAttachments was added

**AsyncWeekScheduleResponse** (1 change)

* Enum value Canceled was added to property status

**GenerateWeekScheduleResponse** (1 change)

* Enum value Canceled was added to property status

**ViewFilter** (7 changes)

* Optional property showSecondaryStatus was added
* Optional property agentDurationSortOrder was added
* Optional property waitingDurationSortOrder was added
* Optional property interactingDurationSortOrder was added
* Optional property agentName was added
* Optional property skillsList was added
* Optional property languageList was added

**ShortTermForecastResponse** (1 change)

* Enum value Canceled was added to property status

**GenerateShortTermForecastResponse** (1 change)

* Enum value Canceled was added to property status

**CreateCallRequest** (1 change)

* Optional property uuiData was added

**DncListDivisionView** (1 change)

* Model was added

**DncListDivisionViewListing** (1 change)

* Model was added


# Point Changes (1 change)

**GET /api/v2/outbound/contactlists/divisionviews** (1 change)

* Description was changed
