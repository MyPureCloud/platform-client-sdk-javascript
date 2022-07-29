Platform API version: 5941


# Major Changes (3 changes)

**KnowledgeImport** (1 change)

* Enum value Json was removed from property fileType

**UCIntegration** (2 changes)

* Required property polledPresence was added
* Required property userPermissions was added


# Minor Changes (18 changes)

**/api/v2/uploads/learning/coverart** (2 changes)

* Path was added
* Operation POST was added

**GET /api/v2/gamification/scorecards/profiles/{profileId}/metrics/{metricId}/users/values/trends** (1 change)

* Parameter filterId was made optional

**/api/v2/learning/modules/coverart/{coverArtId}** (2 changes)

* Path was added
* Operation GET was added

**ReportingTurnAction** (2 changes)

* Enum value FindSystemPromptAction was added to property actionType
* Enum value FindUserPromptAction was added to property actionType

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value Marketplace was added to property serviceName

**AuditQueryRequest** (1 change)

* Enum value Marketplace was added to property serviceName

**AuditLogMessage** (2 changes)

* Enum value Marketplace was added to property serviceName
* Enum value EnterpriseAgreement was added to property entityType

**AuditRealtimeQueryRequest** (1 change)

* Enum value Marketplace was added to property serviceName

**AuditQueryEntity** (1 change)

* Enum value EnterpriseAgreement was added to property name

**AuditQueryService** (1 change)

* Enum value Marketplace was added to property name

**ConversationMessageMetadataEvent** (1 change)

* Enum value Disconnect was added to property subType

**ConversationEventPresence** (1 change)

* Enum value Disconnect was added to property type

**LearningCoverArtUploadUrlRequest** (1 change)

* Model was added

**WebMessagingEventPresence** (1 change)

* Enum value Disconnect was added to property type


# Point Changes (1 change)

**GET /api/v2/gamification/scorecards/profiles/{profileId}/metrics/{metricId}/users/values/trends** (1 change)

* Description was changed for parameter filterId
