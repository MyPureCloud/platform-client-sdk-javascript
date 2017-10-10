Platform API version: 1587


# Major Changes (9 changes)

**GET /api/v2/conversations/calls/history** (1 change)

* Parameter expand was added

**GET /api/v2/flows** (2 changes)

* Parameter publishedAfter was added
* Parameter publishedBefore was added

**GET /api/v2/quality/calibrations/{calibrationId}** (1 change)

* Parameter conversationId was added

**CallHistoryParticipant** (5 changes)

* Property user was changed from UriReference to User
* Property queue was changed from UriReference to Queue
* Property group was changed from UriReference to Group
* Property externalContact was changed from UriReference to ExternalContact
* Property externalOrganization was changed from UriReference to ExternalOrganization


# Minor Changes (32 changes)

**/api/v2/telephony/providers/edges/sites/{siteId}/autoscalinggroups** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/telephony/providers/edges/metrics** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/providers/edges/trunks/{trunkId}/metrics** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/providers/edges/trunks/metrics** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/providers/edges/{edgeId}/metrics** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/{conversationId}/participants/{participantId}/digits** (2 changes)

* Path was added
* Operation POST was added

**GET /api/v2/quality/calibrations/{calibrationId}** (1 change)

* Parameter calibratorId was made optional

**CreateAsgRequest** (1 change)

* Model was added

**EdgeMetrics** (1 change)

* Model was added

**EdgeMetricsDisk** (1 change)

* Model was added

**EdgeMetricsMemory** (1 change)

* Model was added

**EdgeMetricsNetwork** (1 change)

* Model was added

**EdgeMetricsProcessor** (1 change)

* Model was added

**EdgeMetricsSubsystem** (1 change)

* Model was added

**Annotation** (4 changes)

* Optional property absoluteLocation was added
* Optional property absoluteDurationMs was added
* Optional property recordingLocation was added
* Optional property recordingDurationMs was added

**AsgInfoResponse** (1 change)

* Model was added

**InstanceInfo** (1 change)

* Model was added

**TrunkMetrics** (1 change)

* Model was added

**TrunkMetricsCalls** (1 change)

* Model was added

**TrunkMetricsQoS** (1 change)

* Model was added

**Campaign** (1 change)

* Optional property alwaysRunning was added

**Digits** (1 change)

* Model was added


# Point Changes (2 changes)

**GET /api/v2/conversations/calls/history** (1 change)

* Description was changed for parameter pageSize

**GET /api/v2/quality/calibrations/{calibrationId}** (1 change)

* Summary was changed
