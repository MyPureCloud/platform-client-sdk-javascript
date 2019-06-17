Platform API version: 3238


# Major Changes (2 changes)

**GET /api/v2/telephony/providers/edges/phones** (1 change)

* Parameter name was added

**SmsPhoneNumber** (1 change)

* phoneNumberType has been made readonly


# Minor Changes (123 changes)

**POST /api/v2/externalcontacts/organizations** (1 change)

* Response 422 was added

**/api/v2/conversations/{conversationId}/participants/{participantId}/flaggedreason** (3 changes)

* Path was added
* Operation PUT was added
* Operation DELETE was added

**PUT /api/v2/externalcontacts/relationships/{relationshipId}** (1 change)

* Response 422 was added

**PUT /api/v2/externalcontacts/contacts/{contactId}** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/relationships** (1 change)

* Response 422 was added

**/api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}/messages** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}/typing** (2 changes)

* Path was added
* Operation POST was added

**PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}** (1 change)

* Response 422 was added

**/api/v2/scim/users** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/scim/users/{userId}** (5 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/scim/v2/serviceproviderconfig** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/webchat/guest/conversations/{conversationId}/messages** (2 changes)

* Path was added
* Operation GET was added

**POST /api/v2/externalcontacts/contacts/{contactId}/notes** (1 change)

* Response 422 was added

**/api/v2/webchat/guest/conversations/{conversationId}/messages/{messageId}** (2 changes)

* Path was added
* Operation GET was added

**PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}** (1 change)

* Response 422 was added

**/api/v2/scim/v2/groups/{groupId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation PATCH was added

**/api/v2/scim/v2/groups** (2 changes)

* Path was added
* Operation GET was added

**POST /api/v2/externalcontacts/contacts** (1 change)

* Response 422 was added

**PUT /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}** (1 change)

* Response 422 was added

**/api/v2/scim/groups/{groupId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation PATCH was added

**/api/v2/scim/groups** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/webchat/guest/conversations/{conversationId}/members** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/webchat/guest/conversations/{conversationId}/mediarequests** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/webchat/guest/conversations** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/webchat/guest/conversations/{conversationId}/mediarequests/{mediaRequestId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/scim/v2/users** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/scim/v2/users/{userId}** (5 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/analytics/flows/observations/query** (2 changes)

* Path was added
* Operation POST was added

**ConversationChat** (1 change)

* Optional property avatarImageUrl was added

**Evaluation** (3 changes)

* Optional property mediaType was added
* Optional property rescore was added
* Optional property conversationDate was added

**Message** (2 changes)

* Enum value telegram was added to property type
* Enum value kakao was added to property type

**MeteredAssignmentByAgent** (1 change)

* Model was added

**PolicyActions** (1 change)

* Optional property assignMeteredAssignmentByAgent was added

**TimeInterval** (2 changes)

* Optional property months was added
* Optional property weeks was added

**GDPRJourneyCustomer** (1 change)

* Model was added

**GDPRSubject** (2 changes)

* Optional property journeyCustomer was added
* Optional property socialHandle was added

**ReplacementTerm** (1 change)

* Enum value TWITTER was added to property type

**SocialHandle** (1 change)

* Model was added

**WebChatMemberInfo** (1 change)

* Model was added

**WebChatConversation** (1 change)

* Model was added

**WebChatMessage** (1 change)

* Model was added

**CreateWebChatMessageRequest** (1 change)

* Model was added

**WebChatTyping** (1 change)

* Model was added

**ChatMediaParticipant** (1 change)

* Optional property avatarImageUrl was added

**ScimListResponse** (1 change)

* Model was added

**ScimMetadata** (1 change)

* Model was added

**ScimResource** (1 change)

* Model was added

**Manager** (1 change)

* Model was added

**Photo** (1 change)

* Model was added

**ScimEmail** (1 change)

* Model was added

**ScimPhoneNumber** (1 change)

* Model was added

**ScimV2EnterpriseUser** (1 change)

* Model was added

**ScimV2GroupReference** (1 change)

* Model was added

**ScimV2User** (1 change)

* Model was added

**ScimV2CreateUser** (1 change)

* Model was added

**JsonNode** (1 change)

* Model was added

**ScimV2PatchOperation** (1 change)

* Model was added

**ScimV2PatchRequest** (1 change)

* Model was added

**WidgetClientConfig** (1 change)

* Optional property v1-http was added

**WidgetClientConfigV1Http** (1 change)

* Model was added

**WidgetDeployment** (1 change)

* Enum value v1-http was added to property clientType

**ObservationValue** (1 change)

* Optional property routingPriority was added

**AnalyticsQueryPredicate** (1 change)

* Enum value routingPriority was added to property dimension

**ScimServiceProviderConfig** (1 change)

* Model was added

**MessageMediaParticipant** (2 changes)

* Enum value telegram was added to property type
* Enum value kakao was added to property type

**WebChatMessageEntityList** (1 change)

* Model was added

**ScimV2Group** (1 change)

* Model was added

**ScimV2MemberReference** (1 change)

* Model was added

**Meta** (1 change)

* Model was added

**PatchOperation** (1 change)

* Model was added

**PatchRequest** (1 change)

* Model was added

**Path** (1 change)

* Model was added

**AggregationQuery** (1 change)

* Enum value routingPriority was added to property groupBy

**WebChatMemberInfoEntityList** (1 change)

* Model was added

**WebChatGuestMediaRequest** (1 change)

* Model was added

**WebChatGuestMediaRequestEntityList** (1 change)

* Model was added

**CreateWebChatConversationResponse** (1 change)

* Model was added

**CreateWebChatConversationRequest** (1 change)

* Model was added

**GuestMemberInfo** (1 change)

* Model was added

**WebChatRoutingTarget** (1 change)

* Model was added


# Point Changes (0 changes)
