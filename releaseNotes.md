Platform API version: 3472


# Major Changes (37 changes)

**POST /api/v2/analytics/evaluations/aggregates/query** (1 change)

* Response 200 type was changed from AggregateQueryResponse to EvaluationAggregateQueryResponse

**POST /api/v2/analytics/users/observations/query** (1 change)

* Response 200 type was changed from ObservationQueryResponse to UserObservationQueryResponse

**POST /api/v2/analytics/users/aggregates/query** (1 change)

* Response 200 type was changed from PresenceQueryResponse to UserAggregateQueryResponse

**POST /api/v2/analytics/surveys/aggregates/query** (1 change)

* Response 200 type was changed from AggregateQueryResponse to SurveyAggregateQueryResponse

**POST /api/v2/analytics/flows/aggregates/query** (1 change)

* Response 200 type was changed from AggregateQueryResponse to FlowAggregateQueryResponse

**POST /api/v2/analytics/flows/observations/query** (1 change)

* Response 200 type was changed from QualifierMappingObservationQueryResponse to FlowObservationQueryResponse

**POST /api/v2/analytics/conversations/aggregates/query** (1 change)

* Response 200 type was changed from AggregateQueryResponse to ConversationAggregateQueryResponse

**POST /api/v2/analytics/queues/observations/query** (1 change)

* Response 200 type was changed from QualifierMappingObservationQueryResponse to QueueObservationQueryResponse

**AggregateDataContainer** (1 change)

* Model AggregateDataContainer was removed

**AggregateQueryResponse** (1 change)

* Model AggregateQueryResponse was removed

**AggregationQuery** (1 change)

* Model AggregationQuery was removed

**AnalyticsQueryClause** (1 change)

* Model AnalyticsQueryClause was removed

**AnalyticsQueryFilter** (1 change)

* Model AnalyticsQueryFilter was removed

**AnalyticsQueryPredicate** (1 change)

* Model AnalyticsQueryPredicate was removed

**AnalyticsView** (1 change)

* Model AnalyticsView was removed

**ObservationDataContainer** (1 change)

* Model ObservationDataContainer was removed

**QualifierMappingObservationQueryResponse** (1 change)

* Model QualifierMappingObservationQueryResponse was removed

**ObservationQuery** (1 change)

* Model ObservationQuery was removed

**PresenceQueryResponse** (1 change)

* Model PresenceQueryResponse was removed

**ObservationQueryResponse** (1 change)

* Model ObservationQueryResponse was removed

**UserAuthorization** (1 change)

* unusedRoles has been made readonly

**DomainOrganizationRole** (1 change)

* unusedPermissions has been made readonly

**DomainOrganizationRoleCreate** (1 change)

* unusedPermissions has been made readonly

**UserDetailsQuery** (3 changes)

* Property presenceFilters was removed
* Property userFilters was changed from AnalyticsQueryFilter[] to UserDetailQueryFilter[]
* Property routingStatusFilters was changed from AnalyticsQueryFilter[] to RoutingStatusDetailQueryFilter[]

**DomainOrganizationRoleUpdate** (1 change)

* unusedPermissions has been made readonly

**AsyncConversationQuery** (5 changes)

* Property conversationFilters was changed from AnalyticsQueryFilter[] to ConversationDetailQueryFilter[]
* Property segmentFilters was changed from AnalyticsQueryFilter[] to SegmentDetailQueryFilter[]
* Property evaluationFilters was changed from AnalyticsQueryFilter[] to EvaluationDetailQueryFilter[]
* Property mediaEndpointStatFilters was changed from AnalyticsQueryFilter[] to MediaEndpointStatDetailQueryFilter[]
* Property surveyFilters was changed from AnalyticsQueryFilter[] to SurveyDetailQueryFilter[]

**ConversationQuery** (5 changes)

* Property conversationFilters was changed from AnalyticsQueryFilter[] to ConversationDetailQueryFilter[]
* Property segmentFilters was changed from AnalyticsQueryFilter[] to SegmentDetailQueryFilter[]
* Property evaluationFilters was changed from AnalyticsQueryFilter[] to EvaluationDetailQueryFilter[]
* Property mediaEndpointStatFilters was changed from AnalyticsQueryFilter[] to MediaEndpointStatDetailQueryFilter[]
* Property surveyFilters was changed from AnalyticsQueryFilter[] to SurveyDetailQueryFilter[]


# Minor Changes (144 changes)

**GET /api/v2/scim/groups/{groupId}** (1 change)

* Response 304 was added

**PUT /api/v2/scim/groups/{groupId}** (1 change)

* Response 409 was added

**PATCH /api/v2/scim/groups/{groupId}** (1 change)

* Response 409 was added

**POST /api/v2/scim/users** (2 changes)

* Response 201 was added
* Response 409 was added

**GET /api/v2/scim/users/{userId}** (1 change)

* Response 304 was added

**PUT /api/v2/scim/users/{userId}** (1 change)

* Response 409 was added

**DELETE /api/v2/scim/users/{userId}** (1 change)

* Response 409 was added

**PATCH /api/v2/scim/users/{userId}** (1 change)

* Response 409 was added

**GET /api/v2/scim/v2/groups/{groupId}** (1 change)

* Response 304 was added

**PUT /api/v2/scim/v2/groups/{groupId}** (1 change)

* Response 409 was added

**PATCH /api/v2/scim/v2/groups/{groupId}** (1 change)

* Response 409 was added

**/api/v2/flows/datatables/{datatableId}/import/jobs/{importJobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/scim/v2/resourcetypes/{resourceType}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/scim/v2/resourcetypes** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/chats/{conversationId}/messages** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/scim/serviceproviderconfig** (2 changes)

* Path was added
* Operation GET was added

**POST /api/v2/scim/v2/users** (2 changes)

* Response 201 was added
* Response 409 was added

**GET /api/v2/scim/v2/users/{userId}** (1 change)

* Response 304 was added

**PUT /api/v2/scim/v2/users/{userId}** (1 change)

* Response 409 was added

**DELETE /api/v2/scim/v2/users/{userId}** (1 change)

* Response 409 was added

**PATCH /api/v2/scim/v2/users/{userId}** (1 change)

* Response 409 was added

**/api/v2/conversations/chats/{conversationId}/communications/{communicationId}/typing** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/chats/{conversationId}/communications/{communicationId}/messages** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/chats/{conversationId}/messages/{messageId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/scim/resourcetypes/{resourceType}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/scim/resourcetypes** (2 changes)

* Path was added
* Operation GET was added

**AggregateMetricData** (1 change)

* Values are no longer constrained by enum members

**EvaluationAggregateDataContainer** (1 change)

* Model was added

**EvaluationAggregateQueryResponse** (1 change)

* Model was added

**EvaluationAggregateQueryClause** (1 change)

* Model was added

**EvaluationAggregateQueryFilter** (1 change)

* Model was added

**EvaluationAggregateQueryPredicate** (1 change)

* Model was added

**EvaluationAggregationQuery** (1 change)

* Model was added

**EvaluationAggregationView** (1 change)

* Model was added

**SmsPhoneNumber** (1 change)

* Optional property shortCodeBillingType was added

**ScimMetadata** (1 change)

* Enum value ResourceType was added to property resourceType

**ScimV2MemberReference** (1 change)

* Enum value ResourceType was added to property type

**ScimError** (1 change)

* Model was added

**ScimV2GroupReference** (1 change)

* Enum value ResourceType was added to property type

**ScimServiceProviderConfig** (8 changes)

* Optional property schemas was added
* Optional property patch was added
* Optional property filter was added
* Optional property etag was added
* Optional property sort was added
* Optional property bulk was added
* Optional property changePassword was added
* Optional property authenticationSchemes was added

**ScimServiceProviderConfigAuthenticationScheme** (1 change)

* Model was added

**ScimServiceProviderConfigBulkFeature** (1 change)

* Model was added

**ScimServiceProviderConfigFilterFeature** (1 change)

* Model was added

**ScimServiceProviderConfigSimpleFeature** (1 change)

* Model was added

**DataTableImportJob** (1 change)

* Model was added

**ScimConfigResourceType** (1 change)

* Model was added

**ScimConfigResourceTypeSchemaExtension** (1 change)

* Model was added

**ScimConfigResourceTypesListResponse** (1 change)

* Model was added

**LocationSearchRequest** (1 change)

* Optional property expand was added

**PresenceDetailQueryClause** (1 change)

* Model was added

**PresenceDetailQueryFilter** (1 change)

* Model was added

**PresenceDetailQueryPredicate** (1 change)

* Model was added

**RoutingStatusDetailQueryClause** (1 change)

* Model was added

**RoutingStatusDetailQueryFilter** (1 change)

* Model was added

**RoutingStatusDetailQueryPredicate** (1 change)

* Model was added

**UserDetailQueryClause** (1 change)

* Model was added

**UserDetailQueryFilter** (1 change)

* Model was added

**UserDetailQueryPredicate** (1 change)

* Model was added

**UserDetailsQuery** (1 change)

* Optional property presenceDetailFilters was added

**ObservationMetricData** (1 change)

* Values are no longer constrained by enum members

**UserObservationDataContainer** (1 change)

* Model was added

**UserObservationQueryResponse** (1 change)

* Model was added

**UserObservationQuery** (1 change)

* Model was added

**UserObservationQueryClause** (1 change)

* Model was added

**UserObservationQueryFilter** (1 change)

* Model was added

**UserObservationQueryPredicate** (1 change)

* Model was added

**UserAggregateDataContainer** (1 change)

* Model was added

**UserAggregateQueryResponse** (1 change)

* Model was added

**UserAggregateQueryClause** (1 change)

* Model was added

**UserAggregateQueryFilter** (1 change)

* Model was added

**UserAggregateQueryPredicate** (1 change)

* Model was added

**UserAggregationQuery** (1 change)

* Model was added

**UserAggregationView** (1 change)

* Model was added

**SurveyAggregateDataContainer** (1 change)

* Model was added

**SurveyAggregateQueryResponse** (1 change)

* Model was added

**SurveyAggregateQueryClause** (1 change)

* Model was added

**SurveyAggregateQueryFilter** (1 change)

* Model was added

**SurveyAggregateQueryPredicate** (1 change)

* Model was added

**SurveyAggregationQuery** (1 change)

* Model was added

**SurveyAggregationView** (1 change)

* Model was added

**FlowAggregateDataContainer** (1 change)

* Model was added

**FlowAggregateQueryResponse** (1 change)

* Model was added

**FlowAggregateQueryClause** (1 change)

* Model was added

**FlowAggregateQueryFilter** (1 change)

* Model was added

**FlowAggregateQueryPredicate** (1 change)

* Model was added

**FlowAggregationQuery** (1 change)

* Model was added

**FlowAggregationView** (1 change)

* Model was added

**FlowObservationDataContainer** (1 change)

* Model was added

**FlowObservationQueryResponse** (1 change)

* Model was added

**FlowObservationQuery** (1 change)

* Model was added

**FlowObservationQueryClause** (1 change)

* Model was added

**FlowObservationQueryFilter** (1 change)

* Model was added

**FlowObservationQueryPredicate** (1 change)

* Model was added

**ConversationDetailQueryClause** (1 change)

* Model was added

**ConversationDetailQueryFilter** (1 change)

* Model was added

**ConversationDetailQueryPredicate** (1 change)

* Model was added

**EvaluationDetailQueryClause** (1 change)

* Model was added

**EvaluationDetailQueryFilter** (1 change)

* Model was added

**EvaluationDetailQueryPredicate** (1 change)

* Model was added

**MediaEndpointStatDetailQueryClause** (1 change)

* Model was added

**MediaEndpointStatDetailQueryFilter** (1 change)

* Model was added

**MediaEndpointStatDetailQueryPredicate** (1 change)

* Model was added

**RecordingJob** (1 change)

* Optional property user was added

**SegmentDetailQueryClause** (1 change)

* Model was added

**SegmentDetailQueryFilter** (1 change)

* Model was added

**SegmentDetailQueryPredicate** (1 change)

* Model was added

**SurveyDetailQueryClause** (1 change)

* Model was added

**SurveyDetailQueryFilter** (1 change)

* Model was added

**SurveyDetailQueryPredicate** (1 change)

* Model was added

**AnalyticsParticipant** (2 changes)

* Optional property attributes was added
* Enum value api was added to property purpose

**ConversationAggregateDataContainer** (1 change)

* Model was added

**ConversationAggregateQueryResponse** (1 change)

* Model was added

**ConversationAggregateQueryClause** (1 change)

* Model was added

**ConversationAggregateQueryFilter** (1 change)

* Model was added

**ConversationAggregateQueryPredicate** (1 change)

* Model was added

**ConversationAggregationQuery** (1 change)

* Model was added

**ConversationAggregationView** (1 change)

* Model was added

**CreateQueueMediaAssociationRequest** (1 change)

* Optional property id was added

**QueueObservationDataContainer** (1 change)

* Model was added

**QueueObservationQueryResponse** (1 change)

* Model was added

**QueueObservationQuery** (1 change)

* Model was added

**QueueObservationQueryClause** (1 change)

* Model was added

**QueueObservationQueryFilter** (1 change)

* Model was added

**QueueObservationQueryPredicate** (1 change)

* Model was added


# Point Changes (6 changes)

**POST /api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId}** (1 change)

* Description was changed for parameter subjectType

**DELETE /api/v2/scim/users/{userId}** (1 change)

* Response 204 was changed from User Deleted to User Deleted with no content returned.

**GET /api/v2/locations/search** (1 change)

* Description was changed for parameter expand

**DELETE /api/v2/scim/v2/users/{userId}** (1 change)

* Response 204 was changed from User Deleted to User Deleted with no content returned.

**GET /api/v2/authorization/roles/{roleId}** (1 change)

* Description was changed for parameter expand

**POST /api/v2/authorization/roles/{roleId}** (1 change)

* Description was changed for parameter subjectType
