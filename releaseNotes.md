Platform API version: 3021


# Major Changes (11 changes)

**GET /api/v2/users** (1 change)

* Parameter jabberId was added

**GET /api/v2/integrations/actions/categories** (2 changes)

* Parameter expand was removed
* Parameter sortOrder was added

**GET /api/v2/integrations/actions/drafts** (3 changes)

* Parameter expand was removed
* Parameter sortOrder was added
* Parameter name was added

**GET /api/v2/routing/queues/{queueId}/wrapupcodes** (2 changes)

* Parameter pageSize was added
* Parameter pageNumber was added

**GET /api/v2/integrations/actions** (3 changes)

* Parameter expand was removed
* Parameter sortOrder was added
* Parameter name was added


# Minor Changes (19 changes)

**/api/v2/authorization/subjects/rolecounts** (2 changes)

* Path was added
* Operation GET was added

**ViewFilter** (8 changes)

* Optional property originatingDirections was added
* Optional property sessionDnisList was added
* Enum value whatsapp was added to property messageTypes
* Enum value inboundchat was added to property flowTypes
* Optional property flowVersions was added
* Optional property hasJourneyCustomerId was added
* Optional property hasJourneyActionMapId was added
* Optional property hasJourneyVisitId was added

**Voicemail** (1 change)

* Enum value none was added to property uploadStatus

**Dependency** (1 change)

* Enum value INBOUNDCHATFLOW was added to property type

**DependencyObject** (1 change)

* Enum value INBOUNDCHATFLOW was added to property type

**AggregationQuery** (1 change)

* Enum value calibrationId was added to property groupBy

**AnalyticsQueryPredicate** (1 change)

* Enum value calibrationId was added to property dimension

**AnalyticsEvaluation** (1 change)

* Optional property calibrationId was added

**AnalyticsFlow** (1 change)

* Enum value INBOUNDCHAT was added to property flowType

**Flow** (1 change)

* Enum value INBOUNDCHAT was added to property type

**FlowDivisionView** (1 change)

* Enum value INBOUNDCHAT was added to property type


# Point Changes (9 changes)

**GET /api/v2/users** (1 change)

* Description was changed for parameter id

**GET /api/v2/integrations/actions/{actionId}** (2 changes)

* Description was changed for parameter expand
* Description was changed for parameter includeConfig

**GET /api/v2/integrations/actions/categories** (2 changes)

* Description was changed for parameter sortBy
* Description was changed for parameter secure

**GET /api/v2/integrations/actions/drafts** (1 change)

* Description was changed for parameter sortBy

**GET /api/v2/integrations/actions/{actionId}/draft** (2 changes)

* Description was changed for parameter expand
* Description was changed for parameter includeConfig

**GET /api/v2/integrations/actions** (1 change)

* Description was changed for parameter sortBy
