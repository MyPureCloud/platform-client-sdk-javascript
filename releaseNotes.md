Platform API version: 3102


# Major Changes (6 changes)

**/api/v2/telephony/providers/edges/endpoints** (1 change)

* Path /api/v2/telephony/providers/edges/endpoints was removed

**/api/v2/telephony/providers/edges/endpoints/{endpointId}** (1 change)

* Path /api/v2/telephony/providers/edges/endpoints/{endpointId} was removed

**GET /api/v2/groups** (1 change)

* Parameter jabberId was added

**EndpointEntityListing** (1 change)

* Model EndpointEntityListing was removed

**JourneyCustomer** (2 changes)

* Property type was removed
* Required property idType was added


# Minor Changes (12 changes)

**POST /api/v2/authorization/divisions** (1 change)

* Response 409 was added

**/api/v2/outbound/campaigns/divisionviews/{campaignId}** (2 changes)

* Path was added
* Operation GET was added

**DncList** (1 change)

* Optional property division was added

**DncListCreate** (1 change)

* Optional property division was added

**ContactList** (1 change)

* Optional property division was added

**AggregateMetricData** (1 change)

* Enum value oFlow was added to property metric

**AggregationQuery** (1 change)

* Enum value oFlow was added to property metrics

**AnalyticsQueryPredicate** (1 change)

* Enum value oFlow was added to property metric

**ObservationMetricData** (1 change)

* Enum value oFlow was added to property metric

**ObservationQuery** (1 change)

* Enum value oFlow was added to property metrics

**Campaign** (1 change)

* Optional property division was added


# Point Changes (2 changes)

**GET /api/v2/flows** (1 change)

* Description was changed

**GET /api/v2/flows/divisionviews** (1 change)

* Description was changed
