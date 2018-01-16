Platform API version: 1826


# Major Changes (19 changes)

**/api/v2/signeddata** (1 change)

* Path /api/v2/signeddata was removed

**GET /api/v2/authorization/roles** (1 change)

* Parameter id was added

**TrustUserCreate** (1 change)

* Model TrustUserCreate was removed

**Entity** (1 change)

* Model Entity was removed

**SignedData** (1 change)

* Model SignedData was removed

**ActivityCode** (2 changes)

* Property isAgentTimeOffSelectable was removed
* Required property metadata was added

**ActivityCodeContainer** (1 change)

* Required property metadata was added

**AdherenceSettings** (1 change)

* Property ignoredActivityCategories was changed from string[] to IgnoredActivityCategories

**ManagementUnit** (4 changes)

* dateModified has been made readonly
* Property modifiedBy was changed from User to UserReference
* modifiedBy has been made readonly
* Required property metadata was added

**ManagementUnitSettings** (4 changes)

* Property version was removed
* Property dateModified was removed
* Property modifiedBy was removed
* Required property metadata was added

**TrustCreate** (1 change)

* Property users was changed from TrustUserCreate[] to TrustMemberCreate[]

**CallRoute** (1 change)

* Property timeoutMilliseconds was removed


# Minor Changes (53 changes)

**/api/v2/recording/batchrequests/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/recording/batchrequests** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/outbound/contactlists/{contactListId}/contacts/bulk** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{muId}/activitycodes** (1 change)

* Operation post was added. Summary: Create a new activity code

**/api/v2/workforcemanagement/agents** (2 changes)

* Path was added
* Operation POST was added

**Call** (2 changes)

* Optional property self was added
* Optional property other was added

**MessageDetails** (1 change)

* Optional property media was added

**MessageMedia** (1 change)

* Model was added

**Queue** (1 change)

* Optional property division was added

**TrustGroup** (1 change)

* Model was added

**TrustRequest** (1 change)

* Optional property groups was added

**BatchDownloadJobResult** (1 change)

* Model was added

**BatchDownloadJobStatusResult** (1 change)

* Model was added

**BatchDownloadJobSubmissionResult** (1 change)

* Model was added

**BatchDownloadJobSubmission** (1 change)

* Model was added

**BatchDownloadRequest** (1 change)

* Model was added

**ContactColumnTimeZone** (1 change)

* Model was added

**Dependency** (1 change)

* Enum value EMERGENCYGROUP was added to property type

**DependencyObject** (1 change)

* Enum value EMERGENCYGROUP was added to property type

**ExternalContact** (1 change)

* Optional property externalSystemUrl was added

**NTPSettings** (1 change)

* Model was added

**Site** (1 change)

* Optional property ntpSettings was added

**Recording** (1 change)

* Optional property messagingTranscript was added

**RecordingMessagingMessage** (1 change)

* Model was added

**ActivityCode** (3 changes)

* Optional property id was added
* Optional property agentTimeOffSelectable was added
* Optional property selfUri was added

**WfmVersionedEntityMetadata** (1 change)

* Model was added

**CreateActivityCodeRequest** (1 change)

* Model was added

**PredictionResults** (1 change)

* Enum value MESSAGE was added to property intent

**WrapUpCodeReference** (1 change)

* Model was added

**EventMessage** (2 changes)

* Enum value CONTACT_ZIP_CODE_COLUMN_VALUE_INVALID was added to property code
* Enum value IMPORT_FAILED_CONTACT_ZIP_CODE_COLUMN_VALUE_INVALID was added to property code

**AdherenceSettings** (1 change)

* Values are no longer constrained by enum members

**IgnoredActivityCategories** (1 change)

* Model was added

**SchedulingSettings** (1 change)

* Optional property shrinkageOverrides was added

**ShrinkageOverride** (1 change)

* Model was added

**ShrinkageOverrides** (1 change)

* Model was added

**UserQueue** (1 change)

* Optional property division was added

**TrustMemberCreate** (1 change)

* Model was added

**TrustRequestCreate** (1 change)

* Optional property groupIds was added

**CreateQueueRequest** (1 change)

* Optional property division was added

**TrustCreate** (1 change)

* Optional property groups was added

**MoveAgentResponse** (1 change)

* Model was added

**MoveAgentsResponse** (1 change)

* Model was added

**MoveAgentsRequest** (1 change)

* Model was added

**CallBasic** (2 changes)

* Optional property self was added
* Optional property other was added


# Point Changes (1 change)

**GET /api/v2/workforcemanagement/managementunits/{muId}/activitycodes** (1 change)

* Summary was changed
