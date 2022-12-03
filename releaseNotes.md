Platform API version: 6403


# Major Changes (11 changes)

**GET /api/v2/analytics/botflows/{botFlowId}/reportingturns** (1 change)

* Parameter askActionResults was added

**GET /api/v2/recording/localkeys/settings/{settingsId}** (1 change)

* Has been deprecated

**PUT /api/v2/recording/localkeys/settings/{settingsId}** (1 change)

* Has been deprecated

**GET /api/v2/recording/localkeys/settings** (1 change)

* Has been deprecated

**POST /api/v2/recording/localkeys/settings** (1 change)

* Has been deprecated

**GET /api/v2/architect/ivrs** (1 change)

* Parameter scheduleGroup was added

**GET /api/v2/learning/modules** (1 change)

* Parameter statuses was added

**OpenMessageEvent** (1 change)

* Model OpenMessageEvent was removed

**OpenNormalizedMessage** (2 changes)

* Property events was removed
* Enum value Event was removed from property type

**DigitalDataActionConditionPredicate** (1 change)

* Property valueType was removed


# Minor Changes (46 changes)

**/api/v2/outbound/dnclists/{dncListId}/emailaddresses** (2 changes)

* Path was added
* Operation POST was added

**CommunicationEndedEvent** (2 changes)

* Enum value TransferACD was added to property disconnectType
* Enum value TransferUser was added to property disconnectType

**IvrEstablishedEvent** (2 changes)

* Optional property ani was added
* Optional property dnis was added

**PhoneEstablishedEvent** (2 changes)

* Optional property ani was added
* Optional property dnis was added

**RoutingEstablishedEvent** (2 changes)

* Optional property ani was added
* Optional property dnis was added

**UserEstablishedEvent** (2 changes)

* Optional property ani was added
* Optional property dnis was added

**BotAggregateQueryPredicate** (2 changes)

* Enum value askActionId was added to property dimension
* Enum value askActionResult was added to property dimension

**BotAggregationQuery** (3 changes)

* Enum value askActionId was added to property groupBy
* Enum value askActionResult was added to property groupBy
* Enum value nBotSessionTurns was added to property metrics

**BotAggregationView** (1 change)

* Enum value nBotSessionTurns was added to property target

**ViewFilter** (1 change)

* Enum value GoogleSttBotFlow was added to property botProductList

**AuditLogMessage** (1 change)

* Enum value Organization was added to property entityType

**EntityChange** (1 change)

* Enum value Organization was added to property entityType

**AuditQueryEntity** (1 change)

* Enum value Organization was added to property name

**ContactListDivisionView** (1 change)

* Optional property emailColumns was added

**DialerContact** (1 change)

* Optional property latestEmailEvaluations was added

**ContactList** (1 change)

* Optional property emailColumns was added

**WritableDialerContact** (1 change)

* Optional property latestEmailEvaluations was added

**DncListDivisionView** (2 changes)

* Enum value rds_custom was added to property dncSourceType
* Enum value Any was added to property contactMethod

**DncList** (2 changes)

* Enum value rds_custom was added to property dncSourceType
* Enum value Any was added to property contactMethod

**DncListCreate** (2 changes)

* Enum value rds_custom was added to property dncSourceType
* Enum value Any was added to property contactMethod

**OutcomeEventScore** (2 changes)

* Optional property percentile was added
* Optional property sessionMaxPercentile was added

**DocumentBodyImage** (1 change)

* Optional property hyperlink was added

**ApprovalNamespace** (1 change)

* Model was added

**LimitChangeRequestDetails** (1 change)

* Optional property approvalNamespaces was added

**Operation** (3 changes)

* Enum value CHECKOUT was added to property actionName
* Enum value REVERT was added to property actionName
* Enum value SAVE was added to property actionName

**PredictorModelBrief** (1 change)

* Optional property state was added

**HistoryListing** (3 changes)

* Enum value CHECKOUT was added to property actionName
* Enum value REVERT was added to property actionName
* Enum value SAVE was added to property actionName

**DevelopmentActivity** (1 change)

* Optional property isLatest was added

**TimeOffBalanceResponse** (1 change)

* Optional property hrisTimeOffTypeSecondaryId was added


# Point Changes (5 changes)

**POST /api/v2/recording/localkeys** (1 change)

* Summary was changed

**GET /api/v2/recording/localkeys/settings/{settingsId}** (1 change)

* Summary was changed

**PUT /api/v2/recording/localkeys/settings/{settingsId}** (1 change)

* Summary was changed

**GET /api/v2/recording/localkeys/settings** (1 change)

* Summary was changed

**POST /api/v2/recording/localkeys/settings** (1 change)

* Summary was changed
