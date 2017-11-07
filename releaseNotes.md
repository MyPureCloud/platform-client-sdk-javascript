Platform API version: 1643


# Major Changes (14 changes)

**GET /api/v2/scripts/published/{scriptId}/pages/{pageId}** (1 change)

* Parameter scriptDataVersion was added

**GET /api/v2/scripts/published** (2 changes)

* Parameter scriptId was added
* Parameter scriptDataVersion was added

**GET /api/v2/scripts** (1 change)

* Parameter scriptDataVersion was added

**GET /api/v2/scripts/published/{scriptId}/pages** (2 changes)

* Parameter foo was added
* Parameter scriptDataVersion was added

**GET /api/v2/integrations/actions** (1 change)

* Parameter includeAuthActions was added

**GET /api/v2/integrations/actions/drafts** (1 change)

* Parameter includeAuthActions was added

**GET /api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId}** (1 change)

* Operation x-purecloud-method-name was changed from getTelephonyProvidersEdgesEdgegroupEdgetrunkbasis to getTelephonyProvidersEdgesEdgegroupEdgetrunkbase

**PUT /api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId}** (1 change)

* Operation x-purecloud-method-name was changed from putTelephonyProvidersEdgesEdgegroupEdgetrunkbasis to putTelephonyProvidersEdgesEdgegroupEdgetrunkbase

**GET /api/v2/scripts/{scriptId}/pages/{pageId}** (1 change)

* Parameter scriptDataVersion was added

**GET /api/v2/scripts/{scriptId}/pages** (1 change)

* Parameter scriptDataVersion was added

**GET /api/v2/scripts/published/{scriptId}** (1 change)

* Parameter scriptDataVersion was added

**GET /api/v2/scripts/published/{scriptId}/variables** (1 change)

* Parameter scriptDataVersion was added


# Minor Changes (40 changes)

**/api/v2/architect/systemprompts/{promptId}/history** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/architect/systemprompts/{promptId}/history/{historyId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/architect/prompts/{promptId}/history** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/architect/prompts/{promptId}/history/{historyId}** (2 changes)

* Path was added
* Operation GET was added

**Message** (1 change)

* Model was added

**MessageDetails** (1 change)

* Model was added

**Participant** (1 change)

* Optional property messages was added

**AggregateMetricData** (2 changes)

* Enum value tVoicemail was added to property metric
* Enum value nStateTransitionError was added to property metric

**AggregationQuery** (7 changes)

* Enum value requestedRoutingUserIds was added to property groupBy
* Enum value convertedFrom was added to property groupBy
* Enum value convertedTo was added to property groupBy
* Enum value addressSelf was added to property groupBy
* Enum value addressOther was added to property groupBy
* Enum value tVoicemail was added to property metrics
* Enum value nStateTransitionError was added to property metrics

**AnalyticsQueryPredicate** (7 changes)

* Enum value requestedRoutingUserIds was added to property dimension
* Enum value convertedFrom was added to property dimension
* Enum value convertedTo was added to property dimension
* Enum value addressSelf was added to property dimension
* Enum value addressOther was added to property dimension
* Enum value tVoicemail was added to property metric
* Enum value nStateTransitionError was added to property metric

**AnalyticsConversationSegment** (1 change)

* Enum value uncallable was added to property disconnectType

**AnalyticsParticipant** (2 changes)

* Enum value fax was added to property purpose
* Enum value workflow was added to property purpose

**AnalyticsSession** (4 changes)

* Enum value message was added to property mediaType
* Optional property addressFrom was added
* Optional property addressTo was added
* Optional property peerId was added

**CallHistoryParticipant** (2 changes)

* Optional property didInteract was added
* Optional property sipResponseCodes was added

**ConversationAssociation** (1 change)

* Enum value MESSAGE was added to property mediaType

**ObservationQuery** (2 changes)

* Enum value tVoicemail was added to property metrics
* Enum value nStateTransitionError was added to property metrics

**ParticipantBasic** (1 change)

* Optional property messages was added


# Point Changes (2 changes)

**GET /api/v2/flows/{flowId}/history/{historyId}** (1 change)

* Description was changed for parameter historyId

**GET /api/v2/quality/evaluations/query** (1 change)

* Description was changed for parameter evaluationState
