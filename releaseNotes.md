Platform API version: 6778


# Major Changes (11 changes)

**GET /api/v2/authorization/roles/{roleId}** (1 change)

* Parameter userCount was added

**GET /api/v2/chat/settings** (1 change)

* Has been deprecated

**PUT /api/v2/chat/settings** (1 change)

* Has been deprecated

**PATCH /api/v2/chat/settings** (1 change)

* Has been deprecated

**GET /api/v2/routing/email/domains** (1 change)

* Parameter filter was added

**GET /api/v2/routing/email/outbound/domains** (1 change)

* Parameter filter was added

**MediaSetting** (1 change)

* Model MediaSetting was removed

**Queue** (1 change)

* Property mediaSettings was changed from Map<object, MediaSetting> to QueueMediaSettings

**QueueRequest** (1 change)

* Property mediaSettings was changed from Map<object, MediaSetting> to QueueMediaSettings

**UserQueue** (1 change)

* Property mediaSettings was changed from Map<object, MediaSetting> to QueueMediaSettings

**CreateQueueRequest** (1 change)

* Property mediaSettings was changed from Map<object, MediaSetting> to QueueMediaSettings


# Minor Changes (28 changes)

**/api/v2/chats/settings** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation PATCH was added

**ReportingExportJobResponse** (3 changes)

* Enum value CAMPAIGN_INTERACTION_DETAIL_VIEW was added to property viewType
* Enum value CAMPAIGN_ATTEMPT_DETAIL_VIEW was added to property viewType
* Enum value WORKITEM_PERFORMANCE_SUMMARY_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (3 changes)

* Enum value CAMPAIGN_INTERACTION_DETAIL_VIEW was added to property viewType
* Enum value CAMPAIGN_ATTEMPT_DETAIL_VIEW was added to property viewType
* Enum value WORKITEM_PERFORMANCE_SUMMARY_VIEW was added to property viewType

**ReportingExportJobRequest** (3 changes)

* Enum value CAMPAIGN_INTERACTION_DETAIL_VIEW was added to property viewType
* Enum value CAMPAIGN_ATTEMPT_DETAIL_VIEW was added to property viewType
* Enum value WORKITEM_PERFORMANCE_SUMMARY_VIEW was added to property viewType

**AuditLogMessage** (1 change)

* Enum value ExternalContacts was added to property serviceName

**AuditRealtimeQueryRequest** (1 change)

* Enum value ExternalContacts was added to property serviceName

**AuditQueryService** (1 change)

* Enum value ExternalContacts was added to property name

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value ExternalContacts was added to property serviceName

**AuditQueryRequest** (1 change)

* Enum value ExternalContacts was added to property serviceName

**CallbackMediaSettings** (1 change)

* Model was added

**MediaSettings** (1 change)

* Model was added

**QueueMediaSettings** (1 change)

* Model was added

**FaxSendResponse** (1 change)

* Optional property headers was added

**EventMessage** (5 changes)

* Enum value ACTIVE_CAMPAIGNS_LIMIT_EXCEEDED was added to property code
* Enum value ALL_CAMPAIGNS_BLACKLISTED was added to property code
* Enum value CAMPAIGN_BLACKLISTED was added to property code
* Enum value SCHEDULED_CAMPAIGN_INVALID was added to property code
* Enum value SCHEDULE_UNKNOWN_ERROR was added to property code

**ServiceGoalTemplateImpactOverride** (1 change)

* Model was added


# Point Changes (4 changes)

**GET /api/v2/analytics/botflows/{botFlowId}/reportingturns** (1 change)

* Description was changed

**GET /api/v2/chat/settings** (1 change)

* Description was changed

**PUT /api/v2/chat/settings** (1 change)

* Description was changed

**PATCH /api/v2/chat/settings** (1 change)

* Description was changed
