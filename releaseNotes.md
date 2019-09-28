Platform API version: 3496


# Major Changes (3 changes)

**GET /api/v2/conversations/{conversationId}/recordingmetadata/{recordingId}** (1 change)

* Response 200 type was changed from Recording to RecordingMetadata

**LocationUpdateDefinition** (1 change)

* Model LocationUpdateDefinition was removed

**Location** (1 change)

* floorplanId has been made readonly


# Minor Changes (13 changes)

**LocationDefinition** (1 change)

* Optional property contactUser was added

**Operation** (1 change)

* Optional property client was added

**DependencyStatus** (1 change)

* Optional property client was added

**Flow** (1 change)

* Optional property lockedClient was added

**FlowVersion** (1 change)

* Optional property createdByClient was added

**HistoryEntry** (1 change)

* Optional property client was added

**HistoryListing** (1 change)

* Optional property client was added

**LocationCreateUpdateDefinition** (1 change)

* Model was added

**ReportingExportJobResponse** (1 change)

* Optional property hasFormatDurations was added

**ReportingExportJobRequest** (1 change)

* Optional property hasFormatDurations was added

**SubjectDivisionGrants** (2 changes)

* Enum value PC_TRUSTEE_USER was added to property type
* Enum value PC_TRUSTEE_GROUP was added to property type

**RecordingMetadata** (1 change)

* Model was added


# Point Changes (4 changes)

**GET /api/v2/conversations/chats/{conversationId}/messages/{messageId}** (1 change)

* Description was changed

**GET /api/v2/conversations/chats/{conversationId}/messages** (1 change)

* Description was changed

**GET /api/v2/telephony/providers/edges/sites/{siteId}/numberplans** (1 change)

* Summary was changed

**PUT /api/v2/telephony/providers/edges/sites/{siteId}/numberplans** (1 change)

* Summary was changed
