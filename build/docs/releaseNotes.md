Platform API version: 7120


# Major Changes (9 changes)

**GET /api/v2/conversations/emails/{conversationId}/messages** (1 change)

* Response 200 type was changed from EmailMessageListing to EmailMessagePreviewListing

**EmailMessageListing** (1 change)

* Model EmailMessageListing was removed

**EventCoBrowse** (1 change)

* Model EventCoBrowse was removed

**EventPresence** (1 change)

* Model EventPresence was removed

**EventTyping** (1 change)

* Model EventTyping was removed

**MessageEvent** (1 change)

* Model MessageEvent was removed

**ScimV2User** (1 change)

* groups has been made readonly

**ScimV2CreateUser** (1 change)

* groups has been made readonly

**SupportCenterSettings** (1 change)

* Property enabledCategories was changed from AddressableEntityRef[] to SupportCenterCategory[]


# Minor Changes (44 changes)

**/api/v2/scripts/published** (1 change)

* Operation post was added. Summary: Publish a script.

**/api/v2/telephony/providers/edges/mediastatistics/conversations/{conversationId}/communications/{communicationId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/providers/edges/mediastatistics/conversations/{conversationId}** (2 changes)

* Path was added
* Operation GET was added

**POST /api/v2/taskmanagement/workitems/{workitemId}/disconnect** (1 change)

* Response 409 was added

**POST /api/v2/taskmanagement/workitems/{workitemId}/acd/cancel** (1 change)

* Response 409 was added

**BotAggregateQueryPredicate** (1 change)

* Enum value askActionType was added to property dimension

**BotAggregationQuery** (1 change)

* Enum value askActionType was added to property groupBy

**ViewFilter** (1 change)

* Enum value External was added to property developmentTypeList

**ReportingExportJobResponse** (4 changes)

* Enum value STATIC_LINK_EXPORT_FAILED was added to property exportErrorMessagesType
* Enum value TOO_MANY_SEARCH_CRITERIA was added to property exportErrorMessagesType
* Enum value SEARCH_CRITERIA_VALUES_EXCEED_LIMIT was added to property exportErrorMessagesType
* Optional property exportAllowedToRerun was added

**PublishScriptRequestData** (1 change)

* Model was added

**EmailMessagePreview** (1 change)

* Model was added

**EmailMessagePreviewListing** (1 change)

* Model was added

**CreateOutboundMessagingConversationRequest** (1 change)

* Enum value whatsapp was added to property toAddressMessengerType

**DocumentBodyBlock** (2 changes)

* Enum value Table was added to property type
* Optional property table was added

**DocumentBodyTable** (1 change)

* Model was added

**DocumentBodyTableCaptionBlock** (1 change)

* Model was added

**DocumentBodyTableCaptionItem** (1 change)

* Model was added

**DocumentBodyTableCellBlock** (1 change)

* Model was added

**DocumentBodyTableCellBlockProperties** (1 change)

* Model was added

**DocumentBodyTableProperties** (1 change)

* Model was added

**DocumentBodyTableRowBlock** (1 change)

* Model was added

**DocumentBodyTableRowBlockProperties** (1 change)

* Model was added

**DocumentTableContentBlock** (1 change)

* Model was added

**Annotation** (3 changes)

* Optional property reason was added
* Optional property annotations was added
* Optional property realtimeLocation was added

**SupportCenterCategory** (1 change)

* Model was added

**SupportCenterHeroStyle** (1 change)

* Optional property image was added

**SupportCenterImage** (1 change)

* Model was added

**SupportCenterImageSource** (1 change)

* Model was added

**BotAsyncAggregationQuery** (1 change)

* Enum value askActionType was added to property groupBy

**MediaEndpointStatistics** (1 change)

* Model was added

**MediaIceSelectedCandidate** (1 change)

* Model was added

**MediaIceSelectedPair** (1 change)

* Model was added

**MediaIceStatistics** (1 change)

* Model was added

**MediaRtpStatistics** (1 change)

* Model was added

**MediaStatistics** (1 change)

* Model was added

**MediaStatisticsListing** (1 change)

* Model was added


# Point Changes (0 changes)
