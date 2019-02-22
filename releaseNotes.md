Platform API version: 3060


# Major Changes (22 changes)

**Queue** (5 changes)

* Property version was removed
* Property state was removed
* Property modifiedByApp was removed
* Property createdByApp was removed
* memberCount has been made readonly

**Dependency** (1 change)

* Enum value VOICEXML was removed from property type

**DependencyObject** (1 change)

* Enum value VOICEXML was removed from property type

**QueueRequest** (5 changes)

* Property version was removed
* Property state was removed
* Property modifiedByApp was removed
* Property createdByApp was removed
* memberCount has been made readonly

**UserQueue** (5 changes)

* Property version was removed
* Property state was removed
* Property modifiedByApp was removed
* Property createdByApp was removed
* memberCount has been made readonly

**CreateQueueRequest** (5 changes)

* Property version was removed
* Property state was removed
* Property modifiedByApp was removed
* Property createdByApp was removed
* memberCount has been made readonly


# Minor Changes (45 changes)

**/api/v2/tokens/{userId}** (2 changes)

* Path was added
* Operation DELETE was added

**Biography** (1 change)

* Model was added

**EmployerInfo** (1 change)

* Model was added

**User** (3 changes)

* Optional property certifications was added
* Optional property biography was added
* Optional property employerInfo was added

**JourneyAction** (1 change)

* Model was added

**JourneyActionMap** (1 change)

* Model was added

**JourneyContext** (1 change)

* Model was added

**JourneyCustomer** (1 change)

* Model was added

**JourneyCustomerSession** (1 change)

* Model was added

**ConversationChat** (1 change)

* Optional property journeyContext was added

**EmailMediaParticipant** (1 change)

* Optional property journeyContext was added

**MessageMediaParticipant** (1 change)

* Optional property journeyContext was added

**OrgUser** (3 changes)

* Optional property certifications was added
* Optional property biography was added
* Optional property employerInfo was added

**AggregateMetricData** (1 change)

* Enum value nConnected was added to property metric

**AggregationQuery** (1 change)

* Enum value nConnected was added to property metrics

**AnalyticsQueryPredicate** (1 change)

* Enum value nConnected was added to property metric

**EventMessage** (4 changes)

* Enum value CALL_RULE_MISSING_DATA_ACTION_INPUT was added to property code
* Enum value DATA_ACTION_EXECUTION_FAILED was added to property code
* Enum value DATA_ACTION_AUTHENTICATION_FAILURE was added to property code
* Enum value DATA_ACTION_NOT_FOUND was added to property code

**PatchUser** (3 changes)

* Optional property certifications was added
* Optional property biography was added
* Optional property employerInfo was added

**CobrowseMediaParticipant** (1 change)

* Optional property journeyContext was added

**TrustUser** (3 changes)

* Optional property certifications was added
* Optional property biography was added
* Optional property employerInfo was added

**ObservationMetricData** (1 change)

* Enum value nConnected was added to property metric

**ObservationQuery** (1 change)

* Enum value nConnected was added to property metrics

**UpdateUser** (3 changes)

* Optional property certifications was added
* Optional property biography was added
* Optional property employerInfo was added

**ChatMediaParticipant** (1 change)

* Optional property journeyContext was added

**CallMediaParticipant** (1 change)

* Optional property journeyContext was added

**WebChatDeployment** (1 change)

* Optional property flow was added

**UserSearchCriteria** (1 change)

* Enum value QUERY_STRING was added to property type

**CallbackMediaParticipant** (1 change)

* Optional property journeyContext was added

**UserMe** (3 changes)

* Optional property certifications was added
* Optional property biography was added
* Optional property employerInfo was added


# Point Changes (2 changes)

**PATCH /api/v2/routing/queues/{queueId}/users/{memberId}** (1 change)

* Summary was changed

**GET /api/v2/billing/trusteebillingoverview/{trustorOrgId}** (1 change)

* Description was changed for parameter billingPeriodIndex
