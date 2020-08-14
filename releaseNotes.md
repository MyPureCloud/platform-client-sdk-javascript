Platform API version: 4142


# Major Changes (17 changes)

**PUT /api/v2/externalcontacts/conversations/{conversationId}** (1 change)

* Response 422 was removed

**GET /api/v2/users/{userId}/profile** (1 change)

* Parameter integrationPresenceSource was added

**GET /api/v2/profiles/users** (1 change)

* Parameter integrationPresenceSource was added

**GET /api/v2/scim/schemas** (1 change)

* Response 200 type was changed from ScimConfigResourceTypesListResponse to ScimV2SchemaListResponse

**GET /api/v2/scim/schemas/{schemaId}** (1 change)

* Response 200 type was changed from ScimConfigResourceType to ScimV2SchemaDefinition

**GET /api/v2/telephony/providers/edges/didpools** (1 change)

* Parameter id was added

**GET /api/v2/telephony/providers/edges/dids** (1 change)

* Parameter id was added

**GET /api/v2/users/me** (1 change)

* Parameter integrationPresenceSource was added

**GET /api/v2/users/{userId}** (1 change)

* Parameter integrationPresenceSource was added

**GET /api/v2/users** (1 change)

* Parameter integrationPresenceSource was added

**GET /api/v2/users/search** (1 change)

* Parameter integrationPresenceSource was added

**ScimMetadata** (1 change)

* Model ScimMetadata was removed

**ScimConfigResourceType** (1 change)

* Property meta was removed

**ScimV2SchemaDefinition** (1 change)

* Property meta was removed

**ScimV2Group** (1 change)

* Property meta was removed

**ScimServiceProviderConfig** (1 change)

* Property meta was removed

**ScimV2User** (1 change)

* Property meta was removed


# Minor Changes (65 changes)

**/api/v2/analytics/journeys/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/scan/contacts** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/scan/organizations** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/scan/notes** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/scan/relationships** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messaging/integrations/facebook/{integrationId}** (1 change)

* Operation patch was added. Summary: Update Facebook messaging integration

**/api/v2/users/{userId}/presences/purecloud** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/users/{userId}/presences/microsoftteams** (2 changes)

* Path was added
* Operation GET was added

**Biography** (1 change)

* Optional property education was added

**Contact** (1 change)

* Optional property countryCode was added

**Education** (1 change)

* Model was added

**AnalyticsParticipantWithoutAttributes** (1 change)

* Optional property agentAssistantIds was added

**SegmentDetailQueryPredicate** (2 changes)

* Enum value agentAssistantId was added to property dimension
* Enum value journeySegmentScope was added to property dimension

**ConversationAggregateQueryPredicate** (1 change)

* Enum value agentAssistantId was added to property dimension

**ConversationAggregationQuery** (1 change)

* Enum value agentAssistantId was added to property groupBy

**AnalyticsParticipant** (1 change)

* Optional property agentAssistantIds was added

**FlowAggregateQueryPredicate** (1 change)

* Enum value agentAssistantId was added to property dimension

**FlowAggregationQuery** (1 change)

* Enum value agentAssistantId was added to property groupBy

**JourneyAggregateDataContainer** (1 change)

* Model was added

**JourneyAggregateQueryResponse** (1 change)

* Model was added

**JourneyAggregateQueryClause** (1 change)

* Model was added

**JourneyAggregateQueryFilter** (1 change)

* Model was added

**JourneyAggregateQueryPredicate** (1 change)

* Model was added

**JourneyAggregationQuery** (1 change)

* Model was added

**JourneyAggregationView** (1 change)

* Model was added

**CursorContactListing** (1 change)

* Model was added

**CursorOrganizationListing** (1 change)

* Model was added

**CursorNoteListing** (1 change)

* Model was added

**CursorRelationshipListing** (1 change)

* Model was added

**AfterCallWork** (1 change)

* Model was added

**Call** (1 change)

* Optional property afterCallWork was added

**Callback** (1 change)

* Optional property afterCallWork was added

**Cobrowsesession** (1 change)

* Optional property afterCallWork was added

**ConversationChat** (1 change)

* Optional property afterCallWork was added

**Email** (1 change)

* Optional property afterCallWork was added

**Message** (1 change)

* Optional property afterCallWork was added

**Screenshare** (1 change)

* Optional property afterCallWork was added

**SocialExpression** (1 change)

* Optional property afterCallWork was added

**Video** (1 change)

* Optional property afterCallWork was added

**FacebookIntegrationUpdateRequest** (1 change)

* Model was added

**CallBasic** (1 change)

* Optional property afterCallWork was added

**CallbackBasic** (1 change)

* Optional property afterCallWork was added

**OAuthClient** (1 change)

* Optional property state was added

**OAuthClientRequest** (1 change)

* Optional property state was added

**OAuthClientListing** (1 change)

* Optional property state was added

**PresenceExpand** (1 change)

* Model was added

**Library** (1 change)

* Enum value CampaignSmsTemplate was added to property responseType

**Response** (1 change)

* Enum value CampaignSmsTemplate was added to property responseType

**ScimGenesysUserExternalId** (1 change)

* Model was added

**ScimPhoneNumber** (2 changes)

* Enum value microsoftteams was added to property type
* Enum value zoomphone was added to property type

**ScimUserExtensions** (1 change)

* Optional property externalIds was added

**PhoneCapabilities** (1 change)

* Optional property cdm was added

**OrgOAuthClient** (1 change)

* Optional property state was added

**UserSearchRequest** (1 change)

* Optional property integrationPresenceSource was added

**UpdateCoachingAppointmentRequest** (1 change)

* Optional property status was added


# Point Changes (24 changes)

**POST /api/v2/analytics/reporting/exports** (1 change)

* Description was changed

**GET /api/v2/integrations/actions/categories** (1 change)

* Description was changed for parameter sortBy

**GET /api/v2/users/{userId}/presences/{sourceId}** (2 changes)

* Description was changed
* Description was changed for parameter sourceId

**PATCH /api/v2/users/{userId}/presences/{sourceId}** (2 changes)

* Description was changed
* Description was changed for parameter sourceId

**GET /api/v2/scim/groups/{groupId}** (2 changes)

* Description was changed for parameter attributes
* Description was changed for parameter excludedAttributes

**GET /api/v2/scim/groups** (2 changes)

* Description was changed for parameter attributes
* Description was changed for parameter excludedAttributes

**GET /api/v2/scim/users** (3 changes)

* Description was changed for parameter attributes
* Description was changed for parameter excludedAttributes
* Description was changed for parameter filter

**GET /api/v2/scim/users/{userId}** (2 changes)

* Description was changed for parameter attributes
* Description was changed for parameter excludedAttributes

**GET /api/v2/scim/v2/groups/{groupId}** (2 changes)

* Description was changed for parameter attributes
* Description was changed for parameter excludedAttributes

**GET /api/v2/scim/v2/groups** (2 changes)

* Description was changed for parameter attributes
* Description was changed for parameter excludedAttributes

**GET /api/v2/scim/v2/users** (3 changes)

* Description was changed for parameter attributes
* Description was changed for parameter excludedAttributes
* Description was changed for parameter filter

**GET /api/v2/scim/v2/users/{userId}** (2 changes)

* Description was changed for parameter attributes
* Description was changed for parameter excludedAttributes
