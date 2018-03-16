Platform API version: 2013


Republished

# Major Changes (17 changes)

**GET /api/v2/flows/datatables/{datatableId}** (3 changes)

* Parameter showbrief was removed
* Parameter expand was added
* Response 200 type was changed from JsonSchemaDocument to DataTable

**PUT /api/v2/flows/datatables/{datatableId}** (3 changes)

* Parameter showbrief was removed
* Parameter expand was added
* Response 200 type was changed from JsonSchemaDocument to DataTable

**GET /api/v2/flows/datatables/{datatableId}/rows** (3 changes)

* Parameter pageSize was added
* Parameter pageNumber was added
* Response 200 type was changed from object[] to DataTableRowEntityListing

**GET /api/v2/flows/datatables** (7 changes)

* Parameter showbrief was removed
* Parameter expand was added
* Parameter pageSize was added
* Parameter pageNumber was added
* Parameter sortBy was added
* Parameter sortOrder was added
* Response 200 type was changed from JsonSchemaDocument[] to DataTablesDomainEntityListing

**POST /api/v2/flows/datatables** (1 change)

* Response 200 type was changed from JsonSchemaDocument to DataTable


# Minor Changes (65 changes)

**/api/v2/conversations/messages/{conversationId}/participants/{participantId}/communications/{communicationId}** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/conversations/messages/{conversationId}/participants/{participantId}** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/conversations/messages/{conversationId}/participants/{participantId}/replace** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/messages/{conversationId}/messages/{messageId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messages** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messages/{conversationId}/participants/{participantId}/wrapupcodes** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/messages/{conversationId}/messages/bulk** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/messages/{conversationId}/participants/{participantId}/attributes** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/conversations/messages/{conversationId}/participants/{participantId}/wrapup** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messages/{conversationId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/routing/sms/addresses** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/routing/sms/phonenumbers** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/routing/message/recipients** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/sms/phonenumbers/{addressId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/routing/sms/availablephonenumbers** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/message/recipients/{recipientId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**EmailMediaParticipant** (1 change)

* Optional property draftAttachments was added

**Email** (1 change)

* Optional property draftAttachments was added

**DataTable** (1 change)

* Model was added

**AggregateMetricData** (1 change)

* Enum value tAlert was added to property metric

**AggregationQuery** (2 changes)

* Enum value flaggedReason was added to property groupBy
* Enum value tAlert was added to property metrics

**AnalyticsQueryPredicate** (2 changes)

* Enum value flaggedReason was added to property dimension
* Enum value tAlert was added to property metric

**AnalyticsParticipant** (1 change)

* Optional property flaggedReason was added

**DataTableRowEntityListing** (1 change)

* Model was added

**ObservationQuery** (1 change)

* Enum value tAlert was added to property metrics

**MessageData** (1 change)

* Model was added

**MessageConversationEntityListing** (1 change)

* Model was added

**AdditionalMessage** (1 change)

* Model was added

**TextMessageListing** (1 change)

* Model was added

**MessageConversation** (1 change)

* Model was added

**MessageMediaParticipant** (1 change)

* Model was added

**SmsPhoneNumber** (1 change)

* Model was added

**SmsAddressProvision** (1 change)

* Model was added

**DataTablesDomainEntityListing** (1 change)

* Model was added

**SmsPhoneNumberEntityListing** (1 change)

* Model was added

**SmsPhoneNumberProvision** (1 change)

* Model was added

**Recipient** (1 change)

* Model was added

**RecipientListing** (1 change)

* Model was added

**SMSAvailablePhoneNumberEntityListing** (1 change)

* Model was added

**SmsAvailablePhoneNumber** (1 change)

* Model was added


# Point Changes (10 changes)

**GET /api/v2/conversations/emails** (1 change)

* Summary was changed

**GET /api/v2/flows/datatables/{datatableId}** (1 change)

* Summary was changed

**PUT /api/v2/flows/datatables/{datatableId}** (2 changes)

* Description was changed
* Summary was changed

**DELETE /api/v2/flows/datatables/{datatableId}** (1 change)

* Description was changed

**GET /api/v2/conversations/callbacks** (1 change)

* Summary was changed

**GET /api/v2/conversations/calls** (1 change)

* Summary was changed

**GET /api/v2/conversations/chats** (1 change)

* Summary was changed

**GET /api/v2/conversations/cobrowsesessions** (1 change)

* Summary was changed

**GET /api/v2/conversations** (1 change)

* Summary was changed
