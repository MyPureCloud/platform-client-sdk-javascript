Platform API version: 2150


# Major Changes (12 changes)

**/api/v2/authorization/divisions/{divisionId}/objects/{objectType}** (1 change)

* Path /api/v2/authorization/divisions/{divisionId}/objects/{objectType} was removed

**/api/v2/authorization/divisions/limit** (1 change)

* Path /api/v2/authorization/divisions/limit was removed

**DataColumn** (1 change)

* Model DataColumn was removed

**AuthzTypedObject** (1 change)

* Model AuthzTypedObject was removed

**ReportingExportJobResponse** (2 changes)

* Property dataColumns was removed
* Required property locale was added

**TimeZone** (3 changes)

* Property name was removed
* Property offset was removed
* Property selfUri was removed

**ReportingExportJobRequest** (2 changes)

* Property dataColumns was removed
* Required property locale was added

**TimeZoneEntityListing** (1 change)

* Property entities was changed from TimeZone[] to RegionTimeZone[]


# Minor Changes (101 changes)

**/api/v2/integrations/types/{typeId}/configschemas/{configType}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/types** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/appfoundry/{platformName}/categories/{categoryName}/{subCategoryName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/appfoundry/{platformName}/categories/{categoryName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/appfoundry/{platformName}/categories** (2 changes)

* Path was added
* Operation GET was added

**PUT /api/v2/flows/datatables/{datatableId}** (1 change)

* Response 409 was added

**/api/v2/integrations** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/integrations/clientapps** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/workforcemanagement/vendorconnection** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/integrations/eventlog/{eventId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/credentials** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/integrations/{integrationId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/integrations/eventlog** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/credentials/{credentialId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/integrations/types/{typeId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/credentials/types** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/{integrationId}/config/current** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**EventMessage** (3 changes)

* Enum value IMPORT_COLUMN_EXCEEDS_LENGTH_LIMIT was added to property code
* Enum value IMPORT_DATUM_EXCEEDS_LENGTH_LIMIT was added to property code
* Enum value IMPORT_TOO_MANY_COLUMNS was added to property code

**Message** (3 changes)

* Enum value twitter was added to property type
* Enum value facebook was added to property type
* Enum value line was added to property type

**Participant** (1 change)

* Optional property flaggedReason was added

**ParticipantBasic** (1 change)

* Optional property flaggedReason was added

**EmailMediaParticipant** (1 change)

* Optional property flaggedReason was added

**MessageMediaParticipant** (4 changes)

* Optional property flaggedReason was added
* Enum value twitter was added to property type
* Enum value facebook was added to property type
* Enum value line was added to property type

**CredentialSpecification** (1 change)

* Model was added

**IntegrationType** (1 change)

* Model was added

**IntegrationTypeEntityListing** (1 change)

* Model was added

**AppFoundryListing** (1 change)

* Model was added

**AppFoundryListingRegistryInfo** (1 change)

* Model was added

**LocalizedField** (1 change)

* Model was added

**MarketingInfo** (1 change)

* Model was added

**PagedListingEntity** (1 change)

* Model was added

**Platform** (1 change)

* Model was added

**PricingOption** (1 change)

* Model was added

**SmartCase** (1 change)

* Model was added

**AppFoundryListingCategory** (1 change)

* Model was added

**CobrowseMediaParticipant** (1 change)

* Optional property flaggedReason was added

**CredentialInfo** (1 change)

* Model was added

**CredentialType** (1 change)

* Model was added

**Integration** (1 change)

* Model was added

**IntegrationConfiguration** (1 change)

* Model was added

**IntegrationConfigurationInfo** (1 change)

* Model was added

**IntegrationEntityListing** (1 change)

* Model was added

**IntegrationStatusInfo** (1 change)

* Model was added

**MessageInfo** (1 change)

* Model was added

**CreateIntegrationRequest** (1 change)

* Model was added

**Dependency** (1 change)

* Enum value RECORDINGPOLICY was added to property type

**ChatMediaParticipant** (1 change)

* Optional property flaggedReason was added

**ClientApp** (1 change)

* Model was added

**ClientAppConfigurationInfo** (1 change)

* Model was added

**ClientAppEntityListing** (1 change)

* Model was added

**EffectiveConfiguration** (1 change)

* Model was added

**DependencyObject** (1 change)

* Enum value RECORDINGPOLICY was added to property type

**UserScheduleAdherence** (1 change)

* Optional property presenceUpdateTime was added

**UserActionCategory** (1 change)

* Model was added

**UserActionCategoryEntityListing** (1 change)

* Model was added

**VendorConnectionRequest** (1 change)

* Model was added

**CallbackMediaParticipant** (1 change)

* Optional property flaggedReason was added

**EventEntity** (1 change)

* Model was added

**IntegrationEvent** (1 change)

* Model was added

**TimeZone** (4 changes)

* Optional property displayName was added
* id is no longer readonly
* Optional property dstsavings was added
* Optional property rawOffset was added

**Credential** (1 change)

* Model was added

**CredentialInfoListing** (1 change)

* Model was added

**RegionTimeZone** (1 change)

* Model was added

**IntegrationEventEntityListing** (1 change)

* Model was added

**CredentialTypeListing** (1 change)

* Model was added

**CallMediaParticipant** (1 change)

* Optional property flaggedReason was added

**CreateCallRequest** (2 changes)

* Optional property callerId was added
* Optional property callerIdName was added


# Point Changes (0 changes)
