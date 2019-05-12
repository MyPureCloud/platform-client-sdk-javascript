Platform API version: 3196


# Major Changes (19 changes)

**GET /api/v2/telephony/providers/edges/dids** (2 changes)

* Parameter owner.id was added
* Parameter didPool.id was added

**GET /api/v2/identityproviders/pureengage** (1 change)

* Response 200 type was changed from PureEnage to PureEngage

**PureEnage** (1 change)

* Model PureEnage was removed

**Message** (2 changes)

* Enum value telegram was removed from property type
* Enum value kakao was removed from property type

**SmsPhoneNumber** (3 changes)

* Enum value invalid was removed from property phoneNumberStatus
* Enum value active was removed from property phoneNumberStatus
* Enum value porting was removed from property phoneNumberStatus

**Recipient** (2 changes)

* Enum value telegram was removed from property messengerType
* Enum value kakao was removed from property messengerType

**MessagingSticker** (2 changes)

* Enum value telegram was removed from property messengerType
* Enum value kakao was removed from property messengerType

**MessageData** (2 changes)

* Enum value telegram was removed from property messengerType
* Enum value kakao was removed from property messengerType

**MessageMediaParticipant** (2 changes)

* Enum value telegram was removed from property type
* Enum value kakao was removed from property type

**CreateOutboundMessagingConversationRequest** (2 changes)

* Enum value telegram was removed from property toAddressMessengerType
* Enum value kakao was removed from property toAddressMessengerType


# Minor Changes (24 changes)

**/api/v2/users/{userId}/routingskills/bulk** (1 change)

* Operation put was added. Summary: Replace all routing skills assigned to a user

**Email** (1 change)

* Optional property spam was added

**RoutingRule** (1 change)

* Model was added

**EmailMediaParticipant** (1 change)

* Optional property spam was added

**SmsPhoneNumber** (9 changes)

* Enum value INVALID was added to property phoneNumberStatus
* Enum value ACTIVE was added to property phoneNumberStatus
* Enum value PORTING was added to property phoneNumberStatus
* Enum value PENDING was added to property phoneNumberStatus
* Enum value PENDING_CANCELLATION was added to property phoneNumberStatus
* Optional property purchaseDate was added
* Optional property cancellationDate was added
* Optional property renewalDate was added
* Optional property autoRenewable was added

**Dependency** (1 change)

* Enum value DIALOGFLOWAGENT was added to property type

**DependencyObject** (1 change)

* Enum value DIALOGFLOWAGENT was added to property type

**HistoryEntry** (3 changes)

* Enum value TRANSCODE was added to property action
* Enum value UPDATE was added to property action
* Enum value UPLOAD was added to property action

**AtzmTimeSlot** (1 change)

* Model was added

**AtzmTimeSlotWithTimeZone** (1 change)

* Model was added

**AutomaticTimeZoneMappingSettings** (1 change)

* Model was added

**CallableWindow** (1 change)

* Model was added

**IntegrationExport** (1 change)

* Model was added

**PureEngage** (1 change)

* Model was added


# Point Changes (1 change)

**PATCH /api/v2/users/{userId}/routingskills/bulk** (1 change)

* Summary was changed
