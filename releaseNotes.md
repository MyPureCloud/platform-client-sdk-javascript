Platform API version: 5516


# Major Changes (8 changes)

**POST /api/v2/gamification/profiles** (1 change)

* Response 200 was removed

**ContactColumnToDataActionFieldMapping** (2 changes)

* Required property contactColumnName was added
* Required property dataActionField was added

**DataActionConditionPredicate** (5 changes)

* Required property outputField was added
* Required property outputOperator was added
* Required property comparisonValue was added
* Required property inverted was added
* Required property outputFieldMissingResolution was added


# Minor Changes (82 changes)

**/api/v2/conversations/emails/{conversationId}/settings** (2 changes)

* Path was added
* Operation GET was added

**POST /api/v2/telephony/providers/edges/extensionpools** (1 change)

* Response 409 was added

**Condition** (7 changes)

* Optional property dataAction was added
* Optional property dataNotFoundResolution was added
* Optional property contactIdField was added
* Optional property callAnalysisResultField was added
* Optional property agentWrapupField was added
* Optional property contactColumnToDataActionFieldMappings was added
* Optional property predicates was added

**AnalyticsFlow** (1 change)

* Enum value DIGITALBOT was added to property flowType

**AnalyticsSession** (2 changes)

* Enum value Conditional was added to property requestedRoutings
* Enum value Conditional was added to property usedRouting

**ObservationValue** (2 changes)

* Enum value Conditional was added to property requestedRoutings
* Enum value Conditional was added to property usedRouting

**ViewFilter** (5 changes)

* Enum value Conditional was added to property usedRoutingTypes
* Enum value Conditional was added to property requestedRoutingTypes
* Optional property conversationInitiator was added
* Optional property hasCustomerParticipated was added
* Optional property isAcdInteraction was added

**AuditLogMessage** (2 changes)

* Enum value Action was added to property entityType
* Enum value ActionDraft was added to property entityType

**AuditQueryEntity** (2 changes)

* Enum value Action was added to property name
* Enum value ActionDraft was added to property name

**EncryptionKey** (1 change)

* Optional property keyConfigurationType was added

**ContactAddressableEntityRef** (1 change)

* Model was added

**Participant** (1 change)

* Optional property bargedParticipantId was added

**CallMediaParticipant** (2 changes)

* Optional property bargedParticipantId was added
* Optional property bargedTime was added

**EmailsSettings** (1 change)

* Model was added

**ResponseSet** (1 change)

* Optional property beepDetectionEnabled was added

**ParticipantBasic** (1 change)

* Optional property bargedParticipantId was added

**DncListDivisionView** (1 change)

* Optional property contactMethod was added

**DncList** (1 change)

* Optional property contactMethod was added

**DncListCreate** (1 change)

* Optional property contactMethod was added

**DialerAction** (5 changes)

* Optional property dataAction was added
* Optional property contactColumnToDataActionFieldMappings was added
* Optional property contactIdField was added
* Optional property callAnalysisResultField was added
* Optional property agentWrapupField was added

**KnowledgeBase** (6 changes)

* Enum value es-US was added to property coreLanguage
* Enum value es-ES was added to property coreLanguage
* Enum value fr-FR was added to property coreLanguage
* Enum value pt-BR was added to property coreLanguage
* Enum value nl-NL was added to property coreLanguage
* Enum value it-IT was added to property coreLanguage

**KnowledgeCategory** (6 changes)

* Enum value es-US was added to property languageCode
* Enum value es-ES was added to property languageCode
* Enum value fr-FR was added to property languageCode
* Enum value pt-BR was added to property languageCode
* Enum value nl-NL was added to property languageCode
* Enum value it-IT was added to property languageCode

**KnowledgeSearchDocument** (6 changes)

* Enum value es-US was added to property languageCode
* Enum value es-ES was added to property languageCode
* Enum value fr-FR was added to property languageCode
* Enum value pt-BR was added to property languageCode
* Enum value nl-NL was added to property languageCode
* Enum value it-IT was added to property languageCode

**KnowledgeExtendedCategory** (6 changes)

* Enum value es-US was added to property languageCode
* Enum value es-ES was added to property languageCode
* Enum value fr-FR was added to property languageCode
* Enum value pt-BR was added to property languageCode
* Enum value nl-NL was added to property languageCode
* Enum value it-IT was added to property languageCode

**KnowledgeImport** (6 changes)

* Enum value es-US was added to property languageCode
* Enum value es-ES was added to property languageCode
* Enum value fr-FR was added to property languageCode
* Enum value pt-BR was added to property languageCode
* Enum value nl-NL was added to property languageCode
* Enum value it-IT was added to property languageCode

**KnowledgeDocument** (6 changes)

* Enum value es-US was added to property languageCode
* Enum value es-ES was added to property languageCode
* Enum value fr-FR was added to property languageCode
* Enum value pt-BR was added to property languageCode
* Enum value nl-NL was added to property languageCode
* Enum value it-IT was added to property languageCode

**Flow** (2 changes)

* Enum value DIGITALBOT was added to property type
* Enum value DIGITALBOT was added to property compatibleFlowTypes

**FlowVersion** (1 change)

* Enum value DIGITALBOT was added to property compatibleFlowTypes

**Dependency** (1 change)

* Enum value DIGITALBOTFLOW was added to property type

**DependencyObject** (1 change)

* Enum value DIGITALBOTFLOW was added to property type

**FlowDivisionView** (1 change)

* Enum value DIGITALBOT was added to property type


# Point Changes (3 changes)

**PUT /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}** (1 change)

* Description was changed for parameter expand

**DELETE /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}** (1 change)

* Description was changed for parameter expand

**GET /api/v2/workforcemanagement/notifications** (1 change)

* Description was changed
