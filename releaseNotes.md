Platform API version: 1704


# SDK Changes

* API-2820 - Adding support for using `superagent-proxy` with the node.js SDK
* API-2820 - `superagent` dependency version updated from 1.7.1 to 3.8.1

# Major Changes (4 changes)

**GET /api/v2/quality/evaluations/query** (1 change)

* Parameter sortOrder was added

**UserQueue** (1 change)

* Property whisperAudio was removed

**Queue** (1 change)

* Property whisperAudio was removed

**CreateQueueRequest** (1 change)

* Property whisperAudio was removed


# Minor Changes (46 changes)

**/api/v2/workforcemanagement/agents/managementunits** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/signeddata** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/scripts/uploads/{uploadId}/status** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions/{secureSessionId}** (2 changes)

* Path was added
* Operation GET was added

**InboundRoute** (1 change)

* Optional property replyRoute was added

**UserQueue** (1 change)

* Optional property whisper was added

**Message** (3 changes)

* Optional property type was added
* Optional property recipientCountry was added
* Optional property recipientType was added

**MessageDetails** (2 changes)

* Optional property messageStatus was added
* Optional property messageSegmentCount was added

**Queue** (1 change)

* Optional property whisper was added

**CreateEmailRequest** (2 changes)

* Optional property htmlBody was added
* Optional property textBody was added

**Dependency** (2 changes)

* Enum value LEXBOT was added to property type
* Enum value LEXBOTALIAS was added to property type

**DependencyObject** (2 changes)

* Enum value LEXBOT was added to property type
* Enum value LEXBOTALIAS was added to property type

**AgentManagementUnitReference** (1 change)

* Model was added

**ManagementUnitReference** (1 change)

* Model was added

**UserReference** (1 change)

* Model was added

**SecureSession** (1 change)

* Model was added

**SecureSessionEntityListing** (1 change)

* Model was added

**CreateSecureSession** (1 change)

* Model was added

**SignedData** (1 change)

* Model was added

**EventMessage** (2 changes)

* Enum value APPROACHING_CONTACT_LIMIT was added to property code
* Enum value EXCEEDED_CONTACT_LIMIT was added to property code

**AggregationQuery** (1 change)

* Enum value messageType was added to property groupBy

**AnalyticsQueryPredicate** (1 change)

* Enum value messageType was added to property dimension

**AnalyticsConversationSegment** (5 changes)

* Enum value contacting was added to property segmentType
* Enum value transmitting was added to property segmentType
* Enum value converting was added to property segmentType
* Enum value uploading was added to property segmentType
* Enum value sharing was added to property segmentType

**AnalyticsSession** (1 change)

* Optional property messageType was added

**InteractionStatsAlert** (1 change)

* Enum value message was added to property mediaType

**CreateQueueRequest** (1 change)

* Optional property whisper was added

**InteractionStatsRule** (1 change)

* Enum value message was added to property mediaType

**ImportScriptStatusResponse** (1 change)

* Model was added


# Point Changes (0 changes)
