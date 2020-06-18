Platform API version: 4006


# Major Changes (9 changes)

**GET /api/v2/orphanrecordings/{orphanId}/media** (3 changes)

* Parameter emailFormatId was added
* Parameter chatFormatId was added
* Parameter messageFormatId was added

**GET /api/v2/conversations/{conversationId}/recordings/{recordingId}** (3 changes)

* Parameter emailFormatId was added
* Parameter chatFormatId was added
* Parameter messageFormatId was added

**Prompt** (2 changes)

* resources has been made readonly
* currentOperation has been made readonly

**EntityListing** (1 change)

* Property entities was changed from object[] to DataTableImportJob[]


# Minor Changes (70 changes)

**POST /api/v2/quality/publishedforms** (1 change)

* Response 409 was added

**GET /api/v2/telephony/providers/edges** (1 change)

* Response 408 was added

**/api/v2/usage/query/{executionId}/results** (2 changes)

* Path was added
* Operation GET was added

**POST /api/v2/telephony/providers/edges/phones** (1 change)

* Response 408 was added

**/api/v2/identityproviders/generic** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/organizations/ipaddressauthentication** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**GET /api/v2/users/{userId}/callforwarding** (1 change)

* Response 424 was added

**GET /api/v2/telephony/providers/edges/dids** (1 change)

* Response 408 was added

**/api/v2/flows/executions/{flowExecutionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/flows/executions** (2 changes)

* Path was added
* Operation POST was added

**GET /api/v2/telephony/providers/edges/phonebasesettings** (1 change)

* Response 408 was added

**POST /api/v2/responsemanagement/responses** (1 change)

* Response 412 was added

**PUT /api/v2/quality/forms/{formId}** (1 change)

* Response 409 was added

**DELETE /api/v2/coaching/appointments/{appointmentId}** (1 change)

* Response 409 was added

**PUT /api/v2/externalcontacts/conversations/{conversationId}** (1 change)

* Response 422 was added

**/api/v2/audits/query/servicemapping** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/oauth/clients/{clientId}/usage/summary** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/oauth/clients/{clientId}/usage/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/usage/query** (2 changes)

* Path was added
* Operation POST was added

**PATCH /api/v2/users/{userId}/geolocations/{clientId}** (1 change)

* Response 405 was added

**GET /api/v2/stations** (1 change)

* Response 408 was added

**GET /api/v2/telephony/providers/edges/phones/{phoneId}** (1 change)

* Response 408 was added

**PUT /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}** (1 change)

* Response 409 was added

**/api/v2/oauth/clients/{clientId}/usage/query/results/{executionId}** (2 changes)

* Path was added
* Operation GET was added

**Queue** (1 change)

* Optional property routingRules was added

**ExternalContact** (2 changes)

* Optional property schema was added
* Optional property customFields was added

**ExternalOrganization** (2 changes)

* Optional property schema was added
* Optional property customFields was added

**UploadUrlRequest** (1 change)

* Optional property serverSideEncryption was added

**NluDomainVersion** (1 change)

* Optional property evaluationStatus was added

**UserQueue** (1 change)

* Optional property routingRules was added

**CreateQueueRequest** (1 change)

* Optional property routingRules was added

**ApiUsageQueryResult** (1 change)

* Model was added

**ApiUsageRow** (1 change)

* Model was added

**FlowAggregateQueryPredicate** (1 change)

* Enum value externalContactId was added to property dimension

**FlowAggregationQuery** (1 change)

* Enum value externalContactId was added to property groupBy

**GenericSAML** (1 change)

* Model was added

**IpAddressAuthentication** (1 change)

* Model was added

**FlowRuntimeExecution** (1 change)

* Model was added

**FlowExecutionLaunchResponse** (1 change)

* Model was added

**FlowExecutionLaunchRequest** (1 change)

* Model was added

**EntityListing** (4 changes)

* Optional property pageSize was added
* Optional property pageNumber was added
* Optional property total was added
* Optional property pageCount was added

**AuditQueryExecutionStatusResponse** (1 change)

* Optional property sort was added

**AuditQuerySort** (1 change)

* Model was added

**AuditQueryRequest** (1 change)

* Optional property sort was added

**AuditQueryEntity** (1 change)

* Model was added

**AuditQueryService** (1 change)

* Model was added

**AuditQueryServiceMapping** (1 change)

* Model was added

**UsageExecutionResult** (1 change)

* Model was added

**ApiUsageQuery** (1 change)

* Model was added

**ConversationAggregateQueryPredicate** (1 change)

* Enum value externalContactId was added to property dimension

**ConversationAggregationQuery** (1 change)

* Enum value externalContactId was added to property groupBy

**QueueRequest** (1 change)

* Optional property routingRules was added


# Point Changes (4 changes)

**GET /api/v2/scim/v2/groups** (1 change)

* Description was changed for parameter count

**GET /api/v2/scim/users** (1 change)

* Description was changed for parameter count

**GET /api/v2/scim/groups** (1 change)

* Description was changed for parameter count

**GET /api/v2/scim/v2/users** (1 change)

* Description was changed for parameter count
