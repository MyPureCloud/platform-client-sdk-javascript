---
title: TelephonyProvidersEdgeApi
---
# platformClient.TelephonyProvidersEdgeApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteTelephonyProvidersEdge**](TelephonyProvidersEdgeApi.html#deleteTelephonyProvidersEdge) | **DELETE** /api/v2/telephony/providers/edges/{edgeId} | Delete a edge.
[**deleteTelephonyProvidersEdgeLogicalinterface**](TelephonyProvidersEdgeApi.html#deleteTelephonyProvidersEdgeLogicalinterface) | **DELETE** /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId} | Delete an edge logical interface
[**deleteTelephonyProvidersEdgeSoftwareupdate**](TelephonyProvidersEdgeApi.html#deleteTelephonyProvidersEdgeSoftwareupdate) | **DELETE** /api/v2/telephony/providers/edges/{edgeId}/softwareupdate | Cancels any in-progress update for this edge.
[**deleteTelephonyProvidersEdgesCertificateauthority**](TelephonyProvidersEdgeApi.html#deleteTelephonyProvidersEdgesCertificateauthority) | **DELETE** /api/v2/telephony/providers/edges/certificateauthorities/{certificateId} | Delete a certificate authority.
[**deleteTelephonyProvidersEdgesDidpool**](TelephonyProvidersEdgeApi.html#deleteTelephonyProvidersEdgesDidpool) | **DELETE** /api/v2/telephony/providers/edges/didpools/{didPoolId} | Delete a DID Pool by ID.
[**deleteTelephonyProvidersEdgesEdgegroup**](TelephonyProvidersEdgeApi.html#deleteTelephonyProvidersEdgesEdgegroup) | **DELETE** /api/v2/telephony/providers/edges/edgegroups/{edgeGroupId} | Delete an edge group.
[**deleteTelephonyProvidersEdgesEndpoint**](TelephonyProvidersEdgeApi.html#deleteTelephonyProvidersEdgesEndpoint) | **DELETE** /api/v2/telephony/providers/edges/endpoints/{endpointId} | Delete endpoint
[**deleteTelephonyProvidersEdgesExtensionpool**](TelephonyProvidersEdgeApi.html#deleteTelephonyProvidersEdgesExtensionpool) | **DELETE** /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId} | Delete an extension pool by ID
[**deleteTelephonyProvidersEdgesOutboundroute**](TelephonyProvidersEdgeApi.html#deleteTelephonyProvidersEdgesOutboundroute) | **DELETE** /api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId} | Delete Outbound Route
[**deleteTelephonyProvidersEdgesPhone**](TelephonyProvidersEdgeApi.html#deleteTelephonyProvidersEdgesPhone) | **DELETE** /api/v2/telephony/providers/edges/phones/{phoneId} | Delete a Phone by ID
[**deleteTelephonyProvidersEdgesPhonebasesetting**](TelephonyProvidersEdgeApi.html#deleteTelephonyProvidersEdgesPhonebasesetting) | **DELETE** /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId} | Delete a Phone Base Settings by ID
[**deleteTelephonyProvidersEdgesSite**](TelephonyProvidersEdgeApi.html#deleteTelephonyProvidersEdgesSite) | **DELETE** /api/v2/telephony/providers/edges/sites/{siteId} | Delete a Site by ID
[**deleteTelephonyProvidersEdgesSiteOutboundroute**](TelephonyProvidersEdgeApi.html#deleteTelephonyProvidersEdgesSiteOutboundroute) | **DELETE** /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId} | Delete Outbound Route
[**deleteTelephonyProvidersEdgesTrunkbasesetting**](TelephonyProvidersEdgeApi.html#deleteTelephonyProvidersEdgesTrunkbasesetting) | **DELETE** /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId} | Delete a Trunk Base Settings object by ID
[**getConfigurationSchemasEdgesVnext**](TelephonyProvidersEdgeApi.html#getConfigurationSchemasEdgesVnext) | **GET** /api/v2/configuration/schemas/edges/vnext | Lists available schema categories (Deprecated)
[**getConfigurationSchemasEdgesVnextSchemaCategory**](TelephonyProvidersEdgeApi.html#getConfigurationSchemasEdgesVnextSchemaCategory) | **GET** /api/v2/configuration/schemas/edges/vnext/{schemaCategory} | List schemas of a specific category (Deprecated)
[**getConfigurationSchemasEdgesVnextSchemaCategorySchemaType**](TelephonyProvidersEdgeApi.html#getConfigurationSchemasEdgesVnextSchemaCategorySchemaType) | **GET** /api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType} | List schemas of a specific category (Deprecated)
[**getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaId**](TelephonyProvidersEdgeApi.html#getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaId) | **GET** /api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId} | Get a json schema (Deprecated)
[**getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId**](TelephonyProvidersEdgeApi.html#getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId) | **GET** /api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}/{extensionType}/{metadataId} | Get metadata for a schema (Deprecated)
[**getTelephonyProvidersEdge**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdge) | **GET** /api/v2/telephony/providers/edges/{edgeId} | Get edge.
[**getTelephonyProvidersEdgeLine**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgeLine) | **GET** /api/v2/telephony/providers/edges/{edgeId}/lines/{lineId} | Get line
[**getTelephonyProvidersEdgeLines**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgeLines) | **GET** /api/v2/telephony/providers/edges/{edgeId}/lines | Get the list of lines.
[**getTelephonyProvidersEdgeLogicalinterface**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgeLogicalinterface) | **GET** /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId} | Get an edge logical interface
[**getTelephonyProvidersEdgeLogicalinterfaces**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgeLogicalinterfaces) | **GET** /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces | Get edge logical interfaces.
[**getTelephonyProvidersEdgeLogsJob**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgeLogsJob) | **GET** /api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId} | Get an Edge logs job.
[**getTelephonyProvidersEdgeMetrics**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgeMetrics) | **GET** /api/v2/telephony/providers/edges/{edgeId}/metrics | Get the edge metrics.
[**getTelephonyProvidersEdgePhysicalinterface**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgePhysicalinterface) | **GET** /api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces/{interfaceId} | Get edge physical interface.
[**getTelephonyProvidersEdgePhysicalinterfaces**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgePhysicalinterfaces) | **GET** /api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces | Retrieve a list of all configured physical interfaces from a specific edge.
[**getTelephonyProvidersEdgeSetuppackage**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgeSetuppackage) | **GET** /api/v2/telephony/providers/edges/{edgeId}/setuppackage | Get the setup package for a locally deployed edge device. This is needed to complete the setup process for the virtual edge.
[**getTelephonyProvidersEdgeSoftwareupdate**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgeSoftwareupdate) | **GET** /api/v2/telephony/providers/edges/{edgeId}/softwareupdate | Gets software update status information about any edge.
[**getTelephonyProvidersEdgeSoftwareversions**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgeSoftwareversions) | **GET** /api/v2/telephony/providers/edges/{edgeId}/softwareversions | Gets all the available software versions for this edge.
[**getTelephonyProvidersEdgeTrunks**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgeTrunks) | **GET** /api/v2/telephony/providers/edges/{edgeId}/trunks | Get the list of available trunks for the given Edge.
[**getTelephonyProvidersEdges**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdges) | **GET** /api/v2/telephony/providers/edges | Get the list of edges.
[**getTelephonyProvidersEdgesAvailablelanguages**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesAvailablelanguages) | **GET** /api/v2/telephony/providers/edges/availablelanguages | Get the list of available languages.
[**getTelephonyProvidersEdgesCertificateauthorities**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesCertificateauthorities) | **GET** /api/v2/telephony/providers/edges/certificateauthorities | Get the list of certificate authorities.
[**getTelephonyProvidersEdgesCertificateauthority**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesCertificateauthority) | **GET** /api/v2/telephony/providers/edges/certificateauthorities/{certificateId} | Get a certificate authority.
[**getTelephonyProvidersEdgesDid**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesDid) | **GET** /api/v2/telephony/providers/edges/dids/{didId} | Get a DID by ID.
[**getTelephonyProvidersEdgesDidpool**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesDidpool) | **GET** /api/v2/telephony/providers/edges/didpools/{didPoolId} | Get a DID Pool by ID.
[**getTelephonyProvidersEdgesDidpools**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesDidpools) | **GET** /api/v2/telephony/providers/edges/didpools | Get a listing of DID Pools
[**getTelephonyProvidersEdgesDids**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesDids) | **GET** /api/v2/telephony/providers/edges/dids | Get a listing of DIDs
[**getTelephonyProvidersEdgesEdgegroup**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesEdgegroup) | **GET** /api/v2/telephony/providers/edges/edgegroups/{edgeGroupId} | Get edge group.
[**getTelephonyProvidersEdgesEdgegroupEdgetrunkbase**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesEdgegroupEdgetrunkbase) | **GET** /api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId} | Gets the edge trunk base associated with the edge group
[**getTelephonyProvidersEdgesEdgegroups**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesEdgegroups) | **GET** /api/v2/telephony/providers/edges/edgegroups | Get the list of edge groups.
[**getTelephonyProvidersEdgesEdgeversionreport**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesEdgeversionreport) | **GET** /api/v2/telephony/providers/edges/edgeversionreport | Get the edge version report.
[**getTelephonyProvidersEdgesEndpoint**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesEndpoint) | **GET** /api/v2/telephony/providers/edges/endpoints/{endpointId} | Get endpoint
[**getTelephonyProvidersEdgesEndpoints**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesEndpoints) | **GET** /api/v2/telephony/providers/edges/endpoints | Get endpoints
[**getTelephonyProvidersEdgesExtension**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesExtension) | **GET** /api/v2/telephony/providers/edges/extensions/{extensionId} | Get an extension by ID.
[**getTelephonyProvidersEdgesExtensionpool**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesExtensionpool) | **GET** /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId} | Get an extension pool by ID
[**getTelephonyProvidersEdgesExtensionpools**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesExtensionpools) | **GET** /api/v2/telephony/providers/edges/extensionpools | Get a listing of extension pools
[**getTelephonyProvidersEdgesExtensions**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesExtensions) | **GET** /api/v2/telephony/providers/edges/extensions | Get a listing of extensions
[**getTelephonyProvidersEdgesLine**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesLine) | **GET** /api/v2/telephony/providers/edges/lines/{lineId} | Get a Line by ID
[**getTelephonyProvidersEdgesLinebasesetting**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesLinebasesetting) | **GET** /api/v2/telephony/providers/edges/linebasesettings/{lineBaseId} | Get a line base settings object by ID
[**getTelephonyProvidersEdgesLinebasesettings**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesLinebasesettings) | **GET** /api/v2/telephony/providers/edges/linebasesettings | Get a listing of line base settings objects
[**getTelephonyProvidersEdgesLines**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesLines) | **GET** /api/v2/telephony/providers/edges/lines | Get a list of Lines
[**getTelephonyProvidersEdgesLinesTemplate**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesLinesTemplate) | **GET** /api/v2/telephony/providers/edges/lines/template | Get a Line instance template based on a Line Base Settings object. This object can then be modified and saved as a new Line instance
[**getTelephonyProvidersEdgesLogicalinterfaces**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesLogicalinterfaces) | **GET** /api/v2/telephony/providers/edges/logicalinterfaces | Get edge logical interfaces.
[**getTelephonyProvidersEdgesMetrics**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesMetrics) | **GET** /api/v2/telephony/providers/edges/metrics | Get the metrics for a list of edges.
[**getTelephonyProvidersEdgesOutboundroute**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesOutboundroute) | **GET** /api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId} | Get outbound route
[**getTelephonyProvidersEdgesOutboundroutes**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesOutboundroutes) | **GET** /api/v2/telephony/providers/edges/outboundroutes | Get outbound routes
[**getTelephonyProvidersEdgesPhone**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesPhone) | **GET** /api/v2/telephony/providers/edges/phones/{phoneId} | Get a Phone by ID
[**getTelephonyProvidersEdgesPhonebasesetting**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesPhonebasesetting) | **GET** /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId} | Get a Phone Base Settings object by ID
[**getTelephonyProvidersEdgesPhonebasesettings**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesPhonebasesettings) | **GET** /api/v2/telephony/providers/edges/phonebasesettings | Get a list of Phone Base Settings objects
[**getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases) | **GET** /api/v2/telephony/providers/edges/phonebasesettings/availablemetabases | Get a list of available makes and models to create a new Phone Base Settings
[**getTelephonyProvidersEdgesPhonebasesettingsTemplate**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesPhonebasesettingsTemplate) | **GET** /api/v2/telephony/providers/edges/phonebasesettings/template | Get a Phone Base Settings instance template from a given make and model. This object can then be modified and saved as a new Phone Base Settings instance
[**getTelephonyProvidersEdgesPhones**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesPhones) | **GET** /api/v2/telephony/providers/edges/phones | Get a list of Phone Instances
[**getTelephonyProvidersEdgesPhonesTemplate**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesPhonesTemplate) | **GET** /api/v2/telephony/providers/edges/phones/template | Get a Phone instance template based on a Phone Base Settings object. This object can then be modified and saved as a new Phone instance
[**getTelephonyProvidersEdgesPhysicalinterfaces**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesPhysicalinterfaces) | **GET** /api/v2/telephony/providers/edges/physicalinterfaces | Get physical interfaces for edges.
[**getTelephonyProvidersEdgesSite**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesSite) | **GET** /api/v2/telephony/providers/edges/sites/{siteId} | Get a Site by ID.
[**getTelephonyProvidersEdgesSiteAutoscalinggroups**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesSiteAutoscalinggroups) | **GET** /api/v2/telephony/providers/edges/sites/{siteId}/autoscalinggroups | Gets the basic information about an asg in a specified site
[**getTelephonyProvidersEdgesSiteNumberplan**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesSiteNumberplan) | **GET** /api/v2/telephony/providers/edges/sites/{siteId}/numberplans/{numberPlanId} | Get a Number Plan by ID.
[**getTelephonyProvidersEdgesSiteNumberplans**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesSiteNumberplans) | **GET** /api/v2/telephony/providers/edges/sites/{siteId}/numberplans | Get the list of Number Plans for this Site.
[**getTelephonyProvidersEdgesSiteNumberplansClassifications**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesSiteNumberplansClassifications) | **GET** /api/v2/telephony/providers/edges/sites/{siteId}/numberplans/classifications | Get a list of Classifications for this Site
[**getTelephonyProvidersEdgesSiteOutboundroute**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesSiteOutboundroute) | **GET** /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId} | Get an outbound route
[**getTelephonyProvidersEdgesSiteOutboundroutes**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesSiteOutboundroutes) | **GET** /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes | Get outbound routes
[**getTelephonyProvidersEdgesSites**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesSites) | **GET** /api/v2/telephony/providers/edges/sites | Get the list of Sites.
[**getTelephonyProvidersEdgesTimezones**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesTimezones) | **GET** /api/v2/telephony/providers/edges/timezones | Get a list of Edge-compatible time zones
[**getTelephonyProvidersEdgesTrunk**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesTrunk) | **GET** /api/v2/telephony/providers/edges/trunks/{trunkId} | Get a Trunk by ID
[**getTelephonyProvidersEdgesTrunkMetrics**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesTrunkMetrics) | **GET** /api/v2/telephony/providers/edges/trunks/{trunkId}/metrics | Get the trunk metrics.
[**getTelephonyProvidersEdgesTrunkbasesetting**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesTrunkbasesetting) | **GET** /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId} | Get a Trunk Base Settings object by ID
[**getTelephonyProvidersEdgesTrunkbasesettings**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesTrunkbasesettings) | **GET** /api/v2/telephony/providers/edges/trunkbasesettings | Get Trunk Base Settings listing
[**getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases) | **GET** /api/v2/telephony/providers/edges/trunkbasesettings/availablemetabases | Get a list of available makes and models to create a new Trunk Base Settings
[**getTelephonyProvidersEdgesTrunkbasesettingsTemplate**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesTrunkbasesettingsTemplate) | **GET** /api/v2/telephony/providers/edges/trunkbasesettings/template | Get a Trunk Base Settings instance template from a given make and model. This object can then be modified and saved as a new Trunk Base Settings instance
[**getTelephonyProvidersEdgesTrunks**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesTrunks) | **GET** /api/v2/telephony/providers/edges/trunks | Get the list of available trunks.
[**getTelephonyProvidersEdgesTrunksMetrics**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesTrunksMetrics) | **GET** /api/v2/telephony/providers/edges/trunks/metrics | Get the metrics for a list of trunks.
[**getTelephonyProvidersEdgesTrunkswithrecording**](TelephonyProvidersEdgeApi.html#getTelephonyProvidersEdgesTrunkswithrecording) | **GET** /api/v2/telephony/providers/edges/trunkswithrecording | Get Counts of trunks that have recording disabled or enabled
[**postTelephonyProvidersEdgeLogicalinterfaces**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgeLogicalinterfaces) | **POST** /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces | Create an edge logical interface.
[**postTelephonyProvidersEdgeLogsJobUpload**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgeLogsJobUpload) | **POST** /api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}/upload | Request that the specified fileIds be uploaded from the Edge.
[**postTelephonyProvidersEdgeLogsJobs**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgeLogsJobs) | **POST** /api/v2/telephony/providers/edges/{edgeId}/logs/jobs | Create a job to upload a list of Edge logs.
[**postTelephonyProvidersEdgeReboot**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgeReboot) | **POST** /api/v2/telephony/providers/edges/{edgeId}/reboot | Reboot an Edge
[**postTelephonyProvidersEdgeSoftwareupdate**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgeSoftwareupdate) | **POST** /api/v2/telephony/providers/edges/{edgeId}/softwareupdate | Starts a software update for this edge.
[**postTelephonyProvidersEdgeStatuscode**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgeStatuscode) | **POST** /api/v2/telephony/providers/edges/{edgeId}/statuscode | Take an Edge in or out of service
[**postTelephonyProvidersEdgeUnpair**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgeUnpair) | **POST** /api/v2/telephony/providers/edges/{edgeId}/unpair | Unpair an Edge
[**postTelephonyProvidersEdges**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdges) | **POST** /api/v2/telephony/providers/edges | Create an edge.
[**postTelephonyProvidersEdgesAddressvalidation**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgesAddressvalidation) | **POST** /api/v2/telephony/providers/edges/addressvalidation | Validates a street address
[**postTelephonyProvidersEdgesCertificateauthorities**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgesCertificateauthorities) | **POST** /api/v2/telephony/providers/edges/certificateauthorities | Create a certificate authority.
[**postTelephonyProvidersEdgesDidpools**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgesDidpools) | **POST** /api/v2/telephony/providers/edges/didpools | Create a new DID pool
[**postTelephonyProvidersEdgesEdgegroups**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgesEdgegroups) | **POST** /api/v2/telephony/providers/edges/edgegroups | Create an edge group.
[**postTelephonyProvidersEdgesEndpoints**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgesEndpoints) | **POST** /api/v2/telephony/providers/edges/endpoints | Create endpoint
[**postTelephonyProvidersEdgesExtensionpools**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgesExtensionpools) | **POST** /api/v2/telephony/providers/edges/extensionpools | Create a new extension pool
[**postTelephonyProvidersEdgesOutboundroutes**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgesOutboundroutes) | **POST** /api/v2/telephony/providers/edges/outboundroutes | Create outbound rule
[**postTelephonyProvidersEdgesPhoneReboot**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgesPhoneReboot) | **POST** /api/v2/telephony/providers/edges/phones/{phoneId}/reboot | Reboot a Phone
[**postTelephonyProvidersEdgesPhonebasesettings**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgesPhonebasesettings) | **POST** /api/v2/telephony/providers/edges/phonebasesettings | Create a new Phone Base Settings object
[**postTelephonyProvidersEdgesPhones**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgesPhones) | **POST** /api/v2/telephony/providers/edges/phones | Create a new Phone
[**postTelephonyProvidersEdgesPhonesReboot**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgesPhonesReboot) | **POST** /api/v2/telephony/providers/edges/phones/reboot | Reboot Multiple Phones
[**postTelephonyProvidersEdgesSiteAutoscalinggroups**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgesSiteAutoscalinggroups) | **POST** /api/v2/telephony/providers/edges/sites/{siteId}/autoscalinggroups | Creates an ASG for the specified site
[**postTelephonyProvidersEdgesSiteOutboundroutes**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgesSiteOutboundroutes) | **POST** /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes | Create outbound route
[**postTelephonyProvidersEdgesSiteRebalance**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgesSiteRebalance) | **POST** /api/v2/telephony/providers/edges/sites/{siteId}/rebalance | Triggers the rebalance operation.
[**postTelephonyProvidersEdgesSites**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgesSites) | **POST** /api/v2/telephony/providers/edges/sites | Create a Site.
[**postTelephonyProvidersEdgesTrunkbasesettings**](TelephonyProvidersEdgeApi.html#postTelephonyProvidersEdgesTrunkbasesettings) | **POST** /api/v2/telephony/providers/edges/trunkbasesettings | Create a Trunk Base Settings object
[**putTelephonyProvidersEdge**](TelephonyProvidersEdgeApi.html#putTelephonyProvidersEdge) | **PUT** /api/v2/telephony/providers/edges/{edgeId} | Update a edge.
[**putTelephonyProvidersEdgeLine**](TelephonyProvidersEdgeApi.html#putTelephonyProvidersEdgeLine) | **PUT** /api/v2/telephony/providers/edges/{edgeId}/lines/{lineId} | Update a line.
[**putTelephonyProvidersEdgeLogicalinterface**](TelephonyProvidersEdgeApi.html#putTelephonyProvidersEdgeLogicalinterface) | **PUT** /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId} | Update an edge logical interface.
[**putTelephonyProvidersEdgesCertificateauthority**](TelephonyProvidersEdgeApi.html#putTelephonyProvidersEdgesCertificateauthority) | **PUT** /api/v2/telephony/providers/edges/certificateauthorities/{certificateId} | Update a certificate authority.
[**putTelephonyProvidersEdgesDid**](TelephonyProvidersEdgeApi.html#putTelephonyProvidersEdgesDid) | **PUT** /api/v2/telephony/providers/edges/dids/{didId} | Update a DID by ID.
[**putTelephonyProvidersEdgesDidpool**](TelephonyProvidersEdgeApi.html#putTelephonyProvidersEdgesDidpool) | **PUT** /api/v2/telephony/providers/edges/didpools/{didPoolId} | Update a DID Pool by ID.
[**putTelephonyProvidersEdgesEdgegroup**](TelephonyProvidersEdgeApi.html#putTelephonyProvidersEdgesEdgegroup) | **PUT** /api/v2/telephony/providers/edges/edgegroups/{edgeGroupId} | Update an edge group.
[**putTelephonyProvidersEdgesEdgegroupEdgetrunkbase**](TelephonyProvidersEdgeApi.html#putTelephonyProvidersEdgesEdgegroupEdgetrunkbase) | **PUT** /api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId} | Update the edge trunk base associated with the edge group
[**putTelephonyProvidersEdgesEndpoint**](TelephonyProvidersEdgeApi.html#putTelephonyProvidersEdgesEndpoint) | **PUT** /api/v2/telephony/providers/edges/endpoints/{endpointId} | Update endpoint
[**putTelephonyProvidersEdgesExtension**](TelephonyProvidersEdgeApi.html#putTelephonyProvidersEdgesExtension) | **PUT** /api/v2/telephony/providers/edges/extensions/{extensionId} | Update an extension by ID.
[**putTelephonyProvidersEdgesExtensionpool**](TelephonyProvidersEdgeApi.html#putTelephonyProvidersEdgesExtensionpool) | **PUT** /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId} | Update an extension pool by ID
[**putTelephonyProvidersEdgesOutboundroute**](TelephonyProvidersEdgeApi.html#putTelephonyProvidersEdgesOutboundroute) | **PUT** /api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId} | Update outbound route
[**putTelephonyProvidersEdgesPhone**](TelephonyProvidersEdgeApi.html#putTelephonyProvidersEdgesPhone) | **PUT** /api/v2/telephony/providers/edges/phones/{phoneId} | Update a Phone by ID
[**putTelephonyProvidersEdgesPhonebasesetting**](TelephonyProvidersEdgeApi.html#putTelephonyProvidersEdgesPhonebasesetting) | **PUT** /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId} | Update a Phone Base Settings by ID
[**putTelephonyProvidersEdgesSite**](TelephonyProvidersEdgeApi.html#putTelephonyProvidersEdgesSite) | **PUT** /api/v2/telephony/providers/edges/sites/{siteId} | Update a Site by ID.
[**putTelephonyProvidersEdgesSiteNumberplans**](TelephonyProvidersEdgeApi.html#putTelephonyProvidersEdgesSiteNumberplans) | **PUT** /api/v2/telephony/providers/edges/sites/{siteId}/numberplans | Update the list of Number Plans.
[**putTelephonyProvidersEdgesSiteOutboundroute**](TelephonyProvidersEdgeApi.html#putTelephonyProvidersEdgesSiteOutboundroute) | **PUT** /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId} | Update outbound route
[**putTelephonyProvidersEdgesTrunkbasesetting**](TelephonyProvidersEdgeApi.html#putTelephonyProvidersEdgesTrunkbasesetting) | **PUT** /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId} | Update a Trunk Base Settings object by ID
{: class="table table-striped"}

<a name="deleteTelephonyProvidersEdge"></a>

# void deleteTelephonyProvidersEdge(edgeId)

DELETE /api/v2/telephony/providers/edges/{edgeId}

Delete a edge.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

apiInstance.deleteTelephonyProvidersEdge(edgeId)
  .then(function() {
    console.log('deleteTelephonyProvidersEdge returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteTelephonyProvidersEdge');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteTelephonyProvidersEdgeLogicalinterface"></a>

# void deleteTelephonyProvidersEdgeLogicalinterface(edgeId, interfaceId)

DELETE /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}

Delete an edge logical interface



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

var interfaceId = "interfaceId_example"; // String | Interface ID

apiInstance.deleteTelephonyProvidersEdgeLogicalinterface(edgeId, interfaceId)
  .then(function() {
    console.log('deleteTelephonyProvidersEdgeLogicalinterface returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteTelephonyProvidersEdgeLogicalinterface');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **interfaceId** | **String** | Interface ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteTelephonyProvidersEdgeSoftwareupdate"></a>

# void deleteTelephonyProvidersEdgeSoftwareupdate(edgeId)

DELETE /api/v2/telephony/providers/edges/{edgeId}/softwareupdate

Cancels any in-progress update for this edge.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

apiInstance.deleteTelephonyProvidersEdgeSoftwareupdate(edgeId)
  .then(function() {
    console.log('deleteTelephonyProvidersEdgeSoftwareupdate returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteTelephonyProvidersEdgeSoftwareupdate');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteTelephonyProvidersEdgesCertificateauthority"></a>

# void deleteTelephonyProvidersEdgesCertificateauthority(certificateId)

DELETE /api/v2/telephony/providers/edges/certificateauthorities/{certificateId}

Delete a certificate authority.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var certificateId = "certificateId_example"; // String | Certificate ID

apiInstance.deleteTelephonyProvidersEdgesCertificateauthority(certificateId)
  .then(function() {
    console.log('deleteTelephonyProvidersEdgesCertificateauthority returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteTelephonyProvidersEdgesCertificateauthority');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **certificateId** | **String** | Certificate ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteTelephonyProvidersEdgesDidpool"></a>

# void deleteTelephonyProvidersEdgesDidpool(didPoolId)

DELETE /api/v2/telephony/providers/edges/didpools/{didPoolId}

Delete a DID Pool by ID.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var didPoolId = "didPoolId_example"; // String | DID pool ID

apiInstance.deleteTelephonyProvidersEdgesDidpool(didPoolId)
  .then(function() {
    console.log('deleteTelephonyProvidersEdgesDidpool returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteTelephonyProvidersEdgesDidpool');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **didPoolId** | **String** | DID pool ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteTelephonyProvidersEdgesEdgegroup"></a>

# void deleteTelephonyProvidersEdgesEdgegroup(edgeGroupId)

DELETE /api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}

Delete an edge group.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeGroupId = "edgeGroupId_example"; // String | Edge group ID

apiInstance.deleteTelephonyProvidersEdgesEdgegroup(edgeGroupId)
  .then(function() {
    console.log('deleteTelephonyProvidersEdgesEdgegroup returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteTelephonyProvidersEdgesEdgegroup');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeGroupId** | **String** | Edge group ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteTelephonyProvidersEdgesEndpoint"></a>

# void deleteTelephonyProvidersEdgesEndpoint(endpointId)

DELETE /api/v2/telephony/providers/edges/endpoints/{endpointId}

Delete endpoint



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var endpointId = "endpointId_example"; // String | Endpoint ID

apiInstance.deleteTelephonyProvidersEdgesEndpoint(endpointId)
  .then(function() {
    console.log('deleteTelephonyProvidersEdgesEndpoint returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteTelephonyProvidersEdgesEndpoint');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **endpointId** | **String** | Endpoint ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteTelephonyProvidersEdgesExtensionpool"></a>

# void deleteTelephonyProvidersEdgesExtensionpool(extensionPoolId)

DELETE /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}

Delete an extension pool by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var extensionPoolId = "extensionPoolId_example"; // String | Extension pool ID

apiInstance.deleteTelephonyProvidersEdgesExtensionpool(extensionPoolId)
  .then(function() {
    console.log('deleteTelephonyProvidersEdgesExtensionpool returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteTelephonyProvidersEdgesExtensionpool');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **extensionPoolId** | **String** | Extension pool ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteTelephonyProvidersEdgesOutboundroute"></a>

# void deleteTelephonyProvidersEdgesOutboundroute(outboundRouteId)

DELETE /api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}

Delete Outbound Route



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var outboundRouteId = "outboundRouteId_example"; // String | Outbound route ID

apiInstance.deleteTelephonyProvidersEdgesOutboundroute(outboundRouteId)
  .then(function() {
    console.log('deleteTelephonyProvidersEdgesOutboundroute returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteTelephonyProvidersEdgesOutboundroute');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **outboundRouteId** | **String** | Outbound route ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteTelephonyProvidersEdgesPhone"></a>

# void deleteTelephonyProvidersEdgesPhone(phoneId)

DELETE /api/v2/telephony/providers/edges/phones/{phoneId}

Delete a Phone by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var phoneId = "phoneId_example"; // String | Phone ID

apiInstance.deleteTelephonyProvidersEdgesPhone(phoneId)
  .then(function() {
    console.log('deleteTelephonyProvidersEdgesPhone returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteTelephonyProvidersEdgesPhone');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneId** | **String** | Phone ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteTelephonyProvidersEdgesPhonebasesetting"></a>

# void deleteTelephonyProvidersEdgesPhonebasesetting(phoneBaseId)

DELETE /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}

Delete a Phone Base Settings by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var phoneBaseId = "phoneBaseId_example"; // String | Phone base ID

apiInstance.deleteTelephonyProvidersEdgesPhonebasesetting(phoneBaseId)
  .then(function() {
    console.log('deleteTelephonyProvidersEdgesPhonebasesetting returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteTelephonyProvidersEdgesPhonebasesetting');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneBaseId** | **String** | Phone base ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteTelephonyProvidersEdgesSite"></a>

# void deleteTelephonyProvidersEdgesSite(siteId)

DELETE /api/v2/telephony/providers/edges/sites/{siteId}

Delete a Site by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var siteId = "siteId_example"; // String | Site ID

apiInstance.deleteTelephonyProvidersEdgesSite(siteId)
  .then(function() {
    console.log('deleteTelephonyProvidersEdgesSite returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteTelephonyProvidersEdgesSite');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteTelephonyProvidersEdgesSiteOutboundroute"></a>

# void deleteTelephonyProvidersEdgesSiteOutboundroute(siteId, outboundRouteId)

DELETE /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}

Delete Outbound Route



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var siteId = "siteId_example"; // String | Site ID

var outboundRouteId = "outboundRouteId_example"; // String | Outbound route ID

apiInstance.deleteTelephonyProvidersEdgesSiteOutboundroute(siteId, outboundRouteId)
  .then(function() {
    console.log('deleteTelephonyProvidersEdgesSiteOutboundroute returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteTelephonyProvidersEdgesSiteOutboundroute');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
 **outboundRouteId** | **String** | Outbound route ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteTelephonyProvidersEdgesTrunkbasesetting"></a>

# void deleteTelephonyProvidersEdgesTrunkbasesetting(trunkBaseSettingsId)

DELETE /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}

Delete a Trunk Base Settings object by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var trunkBaseSettingsId = "trunkBaseSettingsId_example"; // String | Trunk Base ID

apiInstance.deleteTelephonyProvidersEdgesTrunkbasesetting(trunkBaseSettingsId)
  .then(function() {
    console.log('deleteTelephonyProvidersEdgesTrunkbasesetting returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteTelephonyProvidersEdgesTrunkbasesetting');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trunkBaseSettingsId** | **String** | Trunk Base ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getConfigurationSchemasEdgesVnext"></a>

# SchemaCategoryEntityListing getConfigurationSchemasEdgesVnext(opts)

GET /api/v2/configuration/schemas/edges/vnext

Lists available schema categories (Deprecated)



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getConfigurationSchemasEdgesVnext(opts)
  .then(function(data) {
    console.log(`getConfigurationSchemasEdgesVnext success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getConfigurationSchemasEdgesVnext');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**SchemaCategoryEntityListing**

<a name="getConfigurationSchemasEdgesVnextSchemaCategory"></a>

# SchemaReferenceEntityListing getConfigurationSchemasEdgesVnextSchemaCategory(schemaCategory, opts)

GET /api/v2/configuration/schemas/edges/vnext/{schemaCategory}

List schemas of a specific category (Deprecated)



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var schemaCategory = "schemaCategory_example"; // String | Schema category

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getConfigurationSchemasEdgesVnextSchemaCategory(schemaCategory, opts)
  .then(function(data) {
    console.log(`getConfigurationSchemasEdgesVnextSchemaCategory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getConfigurationSchemasEdgesVnextSchemaCategory');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaCategory** | **String** | Schema category |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**SchemaReferenceEntityListing**

<a name="getConfigurationSchemasEdgesVnextSchemaCategorySchemaType"></a>

# SchemaReferenceEntityListing getConfigurationSchemasEdgesVnextSchemaCategorySchemaType(schemaCategory, schemaType, opts)

GET /api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}

List schemas of a specific category (Deprecated)



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var schemaCategory = "schemaCategory_example"; // String | Schema category

var schemaType = "schemaType_example"; // String | Schema type

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getConfigurationSchemasEdgesVnextSchemaCategorySchemaType(schemaCategory, schemaType, opts)
  .then(function(data) {
    console.log(`getConfigurationSchemasEdgesVnextSchemaCategorySchemaType success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaType');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaCategory** | **String** | Schema category |  |
 **schemaType** | **String** | Schema type |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**SchemaReferenceEntityListing**

<a name="getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaId"></a>

# Organization getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaId(schemaCategory, schemaType, schemaId)

GET /api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}

Get a json schema (Deprecated)



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var schemaCategory = "schemaCategory_example"; // String | Schema category

var schemaType = "schemaType_example"; // String | Schema type

var schemaId = "schemaId_example"; // String | Schema ID

apiInstance.getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaId(schemaCategory, schemaType, schemaId)
  .then(function(data) {
    console.log(`getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaCategory** | **String** | Schema category |  |
 **schemaType** | **String** | Schema type |  |
 **schemaId** | **String** | Schema ID |  |
{: class="table table-striped"}

### Return type

**Organization**

<a name="getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId"></a>

# Organization getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId(schemaCategory, schemaType, schemaId, extensionType, metadataId, opts)

GET /api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}/{extensionType}/{metadataId}

Get metadata for a schema (Deprecated)



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var schemaCategory = "schemaCategory_example"; // String | Schema category

var schemaType = "schemaType_example"; // String | Schema type

var schemaId = "schemaId_example"; // String | Schema ID

var extensionType = "extensionType_example"; // String | extension

var metadataId = "metadataId_example"; // String | Metadata ID

var opts = { 
  'type': "type_example" // String | Type
};
apiInstance.getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId(schemaCategory, schemaType, schemaId, extensionType, metadataId, opts)
  .then(function(data) {
    console.log(`getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaCategory** | **String** | Schema category |  |
 **schemaType** | **String** | Schema type |  |
 **schemaId** | **String** | Schema ID |  |
 **extensionType** | **String** | extension |  |
 **metadataId** | **String** | Metadata ID |  |
 **type** | **String** | Type | [optional]  |
{: class="table table-striped"}

### Return type

**Organization**

<a name="getTelephonyProvidersEdge"></a>

# Edge getTelephonyProvidersEdge(edgeId, opts)

GET /api/v2/telephony/providers/edges/{edgeId}

Get edge.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

var opts = { 
  'expand': ["expand_example"] // [String] | Fields to expand in the response, comma-separated
};
apiInstance.getTelephonyProvidersEdge(edgeId, opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdge success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdge');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **expand** | **[String]** | Fields to expand in the response, comma-separated | [optional] <br />**Values**: site |
{: class="table table-striped"}

### Return type

**Edge**

<a name="getTelephonyProvidersEdgeLine"></a>

# EdgeLine getTelephonyProvidersEdgeLine(edgeId, lineId)

GET /api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}

Get line



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

var lineId = "lineId_example"; // String | Line ID

apiInstance.getTelephonyProvidersEdgeLine(edgeId, lineId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgeLine success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgeLine');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **lineId** | **String** | Line ID |  |
{: class="table table-striped"}

### Return type

**EdgeLine**

<a name="getTelephonyProvidersEdgeLines"></a>

# EdgeLineEntityListing getTelephonyProvidersEdgeLines(edgeId, opts)

GET /api/v2/telephony/providers/edges/{edgeId}/lines

Get the list of lines.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getTelephonyProvidersEdgeLines(edgeId, opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgeLines success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgeLines');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**EdgeLineEntityListing**

<a name="getTelephonyProvidersEdgeLogicalinterface"></a>

# DomainLogicalInterface getTelephonyProvidersEdgeLogicalinterface(edgeId, interfaceId, opts)

GET /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}

Get an edge logical interface



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

var interfaceId = "interfaceId_example"; // String | Interface ID

var opts = { 
  'expand': ["expand_example"] // [String] | Field to expand in the response
};
apiInstance.getTelephonyProvidersEdgeLogicalinterface(edgeId, interfaceId, opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgeLogicalinterface success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgeLogicalinterface');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **interfaceId** | **String** | Interface ID |  |
 **expand** | **[String]** | Field to expand in the response | [optional] <br />**Values**: externalTrunkBaseAssignments, phoneTrunkBaseAssignments |
{: class="table table-striped"}

### Return type

**DomainLogicalInterface**

<a name="getTelephonyProvidersEdgeLogicalinterfaces"></a>

# LogicalInterfaceEntityListing getTelephonyProvidersEdgeLogicalinterfaces(edgeId, opts)

GET /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces

Get edge logical interfaces.

Retrieve a list of all configured logical interfaces from a specific edge.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

var opts = { 
  'expand': ["expand_example"] // [String] | Field to expand in the response
};
apiInstance.getTelephonyProvidersEdgeLogicalinterfaces(edgeId, opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgeLogicalinterfaces success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgeLogicalinterfaces');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **expand** | **[String]** | Field to expand in the response | [optional] <br />**Values**: externalTrunkBaseAssignments, phoneTrunkBaseAssignments |
{: class="table table-striped"}

### Return type

**LogicalInterfaceEntityListing**

<a name="getTelephonyProvidersEdgeLogsJob"></a>

# EdgeLogsJob getTelephonyProvidersEdgeLogsJob(edgeId, jobId)

GET /api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}

Get an Edge logs job.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

var jobId = "jobId_example"; // String | Job ID

apiInstance.getTelephonyProvidersEdgeLogsJob(edgeId, jobId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgeLogsJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgeLogsJob');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **jobId** | **String** | Job ID |  |
{: class="table table-striped"}

### Return type

**EdgeLogsJob**

<a name="getTelephonyProvidersEdgeMetrics"></a>

# EdgeMetrics getTelephonyProvidersEdgeMetrics(edgeId)

GET /api/v2/telephony/providers/edges/{edgeId}/metrics

Get the edge metrics.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge Id

apiInstance.getTelephonyProvidersEdgeMetrics(edgeId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgeMetrics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgeMetrics');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge Id |  |
{: class="table table-striped"}

### Return type

**EdgeMetrics**

<a name="getTelephonyProvidersEdgePhysicalinterface"></a>

# DomainPhysicalInterface getTelephonyProvidersEdgePhysicalinterface(edgeId, interfaceId)

GET /api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces/{interfaceId}

Get edge physical interface.

Retrieve a physical interface from a specific edge.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

var interfaceId = "interfaceId_example"; // String | Interface ID

apiInstance.getTelephonyProvidersEdgePhysicalinterface(edgeId, interfaceId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgePhysicalinterface success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgePhysicalinterface');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **interfaceId** | **String** | Interface ID |  |
{: class="table table-striped"}

### Return type

**DomainPhysicalInterface**

<a name="getTelephonyProvidersEdgePhysicalinterfaces"></a>

# PhysicalInterfaceEntityListing getTelephonyProvidersEdgePhysicalinterfaces(edgeId)

GET /api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces

Retrieve a list of all configured physical interfaces from a specific edge.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

apiInstance.getTelephonyProvidersEdgePhysicalinterfaces(edgeId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgePhysicalinterfaces success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgePhysicalinterfaces');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
{: class="table table-striped"}

### Return type

**PhysicalInterfaceEntityListing**

<a name="getTelephonyProvidersEdgeSetuppackage"></a>

# VmPairingInfo getTelephonyProvidersEdgeSetuppackage(edgeId)

GET /api/v2/telephony/providers/edges/{edgeId}/setuppackage

Get the setup package for a locally deployed edge device. This is needed to complete the setup process for the virtual edge.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

apiInstance.getTelephonyProvidersEdgeSetuppackage(edgeId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgeSetuppackage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgeSetuppackage');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
{: class="table table-striped"}

### Return type

**VmPairingInfo**

<a name="getTelephonyProvidersEdgeSoftwareupdate"></a>

# DomainEdgeSoftwareUpdateDto getTelephonyProvidersEdgeSoftwareupdate(edgeId)

GET /api/v2/telephony/providers/edges/{edgeId}/softwareupdate

Gets software update status information about any edge.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

apiInstance.getTelephonyProvidersEdgeSoftwareupdate(edgeId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgeSoftwareupdate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgeSoftwareupdate');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
{: class="table table-striped"}

### Return type

**DomainEdgeSoftwareUpdateDto**

<a name="getTelephonyProvidersEdgeSoftwareversions"></a>

# DomainEdgeSoftwareVersionDtoEntityListing getTelephonyProvidersEdgeSoftwareversions(edgeId)

GET /api/v2/telephony/providers/edges/{edgeId}/softwareversions

Gets all the available software versions for this edge.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

apiInstance.getTelephonyProvidersEdgeSoftwareversions(edgeId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgeSoftwareversions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgeSoftwareversions');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
{: class="table table-striped"}

### Return type

**DomainEdgeSoftwareVersionDtoEntityListing**

<a name="getTelephonyProvidersEdgeTrunks"></a>

# TrunkEntityListing getTelephonyProvidersEdgeTrunks(edgeId, opts)

GET /api/v2/telephony/providers/edges/{edgeId}/trunks

Get the list of available trunks for the given Edge.

Trunks are created by assigning trunk base settings to an Edge or Edge Group.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Value by which to sort
  'sortOrder': "ASC", // String | Sort order
  'trunkBaseId': "trunkBaseId_example", // String | Filter by Trunk Base Ids
  'trunkType': "trunkType_example" // String | Filter by a Trunk type
};
apiInstance.getTelephonyProvidersEdgeTrunks(edgeId, opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgeTrunks success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgeTrunks');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Value by which to sort | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **trunkBaseId** | **String** | Filter by Trunk Base Ids | [optional]  |
 **trunkType** | **String** | Filter by a Trunk type | [optional] <br />**Values**: EXTERNAL, PHONE, EDGE |
{: class="table table-striped"}

### Return type

**TrunkEntityListing**

<a name="getTelephonyProvidersEdges"></a>

# EdgeEntityListing getTelephonyProvidersEdges(opts)

GET /api/v2/telephony/providers/edges

Get the list of edges.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'name': "name_example", // String | Name
  'siteId': "siteId_example", // String | Filter by site.id
  'edgeGroupId': "edgeGroupId_example", // String | Filter by edgeGroup.id
  'sortBy': "name", // String | Sort by
  'managed': true // Boolean | Filter by managed
};
apiInstance.getTelephonyProvidersEdges(opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdges success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdges');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **name** | **String** | Name | [optional]  |
 **siteId** | **String** | Filter by site.id | [optional]  |
 **edgeGroupId** | **String** | Filter by edgeGroup.id | [optional]  |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **managed** | **Boolean** | Filter by managed | [optional]  |
{: class="table table-striped"}

### Return type

**EdgeEntityListing**

<a name="getTelephonyProvidersEdgesAvailablelanguages"></a>

# AvailableLanguageList getTelephonyProvidersEdgesAvailablelanguages()

GET /api/v2/telephony/providers/edges/availablelanguages

Get the list of available languages.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();
apiInstance.getTelephonyProvidersEdgesAvailablelanguages()
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesAvailablelanguages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesAvailablelanguages');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**AvailableLanguageList**

<a name="getTelephonyProvidersEdgesCertificateauthorities"></a>

# CertificateAuthorityEntityListing getTelephonyProvidersEdgesCertificateauthorities()

GET /api/v2/telephony/providers/edges/certificateauthorities

Get the list of certificate authorities.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();
apiInstance.getTelephonyProvidersEdgesCertificateauthorities()
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesCertificateauthorities success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesCertificateauthorities');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**CertificateAuthorityEntityListing**

<a name="getTelephonyProvidersEdgesCertificateauthority"></a>

# DomainCertificateAuthority getTelephonyProvidersEdgesCertificateauthority(certificateId)

GET /api/v2/telephony/providers/edges/certificateauthorities/{certificateId}

Get a certificate authority.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var certificateId = "certificateId_example"; // String | Certificate ID

apiInstance.getTelephonyProvidersEdgesCertificateauthority(certificateId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesCertificateauthority success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesCertificateauthority');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **certificateId** | **String** | Certificate ID |  |
{: class="table table-striped"}

### Return type

**DomainCertificateAuthority**

<a name="getTelephonyProvidersEdgesDid"></a>

# DID getTelephonyProvidersEdgesDid(didId)

GET /api/v2/telephony/providers/edges/dids/{didId}

Get a DID by ID.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var didId = "didId_example"; // String | DID ID

apiInstance.getTelephonyProvidersEdgesDid(didId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesDid success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesDid');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **didId** | **String** | DID ID |  |
{: class="table table-striped"}

### Return type

**DID**

<a name="getTelephonyProvidersEdgesDidpool"></a>

# DIDPool getTelephonyProvidersEdgesDidpool(didPoolId)

GET /api/v2/telephony/providers/edges/didpools/{didPoolId}

Get a DID Pool by ID.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var didPoolId = "didPoolId_example"; // String | DID pool ID

apiInstance.getTelephonyProvidersEdgesDidpool(didPoolId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesDidpool success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesDidpool');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **didPoolId** | **String** | DID pool ID |  |
{: class="table table-striped"}

### Return type

**DIDPool**

<a name="getTelephonyProvidersEdgesDidpools"></a>

# DIDPoolEntityListing getTelephonyProvidersEdgesDidpools(opts)

GET /api/v2/telephony/providers/edges/didpools

Get a listing of DID Pools



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "number" // String | Sort by
};
apiInstance.getTelephonyProvidersEdgesDidpools(opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesDidpools success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesDidpools');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to number] |
{: class="table table-striped"}

### Return type

**DIDPoolEntityListing**

<a name="getTelephonyProvidersEdgesDids"></a>

# DIDEntityListing getTelephonyProvidersEdgesDids(opts)

GET /api/v2/telephony/providers/edges/dids

Get a listing of DIDs



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "number", // String | Sort by
  'sortOrder': "ASC", // String | Sort order
  'phoneNumber': "phoneNumber_example" // String | Filter by phoneNumber
};
apiInstance.getTelephonyProvidersEdgesDids(opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesDids success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesDids');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to number] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **phoneNumber** | **String** | Filter by phoneNumber | [optional]  |
{: class="table table-striped"}

### Return type

**DIDEntityListing**

<a name="getTelephonyProvidersEdgesEdgegroup"></a>

# EdgeGroup getTelephonyProvidersEdgesEdgegroup(edgeGroupId, opts)

GET /api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}

Get edge group.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeGroupId = "edgeGroupId_example"; // String | Edge group ID

var opts = { 
  'expand': ["expand_example"] // [String] | Fields to expand in the response
};
apiInstance.getTelephonyProvidersEdgesEdgegroup(edgeGroupId, opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesEdgegroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesEdgegroup');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeGroupId** | **String** | Edge group ID |  |
 **expand** | **[String]** | Fields to expand in the response | [optional] <br />**Values**: phoneTrunkBases, edgeTrunkBaseAssignment |
{: class="table table-striped"}

### Return type

**EdgeGroup**

<a name="getTelephonyProvidersEdgesEdgegroupEdgetrunkbase"></a>

# EdgeTrunkBase getTelephonyProvidersEdgesEdgegroupEdgetrunkbase(edgegroupId, edgetrunkbaseId)

GET /api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId}

Gets the edge trunk base associated with the edge group



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgegroupId = "edgegroupId_example"; // String | Edge Group ID

var edgetrunkbaseId = "edgetrunkbaseId_example"; // String | Edge Trunk Base ID

apiInstance.getTelephonyProvidersEdgesEdgegroupEdgetrunkbase(edgegroupId, edgetrunkbaseId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesEdgegroupEdgetrunkbase success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesEdgegroupEdgetrunkbase');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgegroupId** | **String** | Edge Group ID |  |
 **edgetrunkbaseId** | **String** | Edge Trunk Base ID |  |
{: class="table table-striped"}

### Return type

**EdgeTrunkBase**

<a name="getTelephonyProvidersEdgesEdgegroups"></a>

# EdgeGroupEntityListing getTelephonyProvidersEdgesEdgegroups(opts)

GET /api/v2/telephony/providers/edges/edgegroups

Get the list of edge groups.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'name': "name_example", // String | Name
  'sortBy': "name", // String | Sort by
  'managed': true // Boolean | Filter by managed
};
apiInstance.getTelephonyProvidersEdgesEdgegroups(opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesEdgegroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesEdgegroups');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **name** | **String** | Name | [optional]  |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **managed** | **Boolean** | Filter by managed | [optional]  |
{: class="table table-striped"}

### Return type

**EdgeGroupEntityListing**

<a name="getTelephonyProvidersEdgesEdgeversionreport"></a>

# EdgeVersionReport getTelephonyProvidersEdgesEdgeversionreport()

GET /api/v2/telephony/providers/edges/edgeversionreport

Get the edge version report.

The report will not have consistent data about the edge version(s) until all edges have been reset.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();
apiInstance.getTelephonyProvidersEdgesEdgeversionreport()
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesEdgeversionreport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesEdgeversionreport');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**EdgeVersionReport**

<a name="getTelephonyProvidersEdgesEndpoint"></a>

# Endpoint getTelephonyProvidersEdgesEndpoint(endpointId)

GET /api/v2/telephony/providers/edges/endpoints/{endpointId}

Get endpoint



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var endpointId = "endpointId_example"; // String | Endpoint ID

apiInstance.getTelephonyProvidersEdgesEndpoint(endpointId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesEndpoint success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesEndpoint');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **endpointId** | **String** | Endpoint ID |  |
{: class="table table-striped"}

### Return type

**Endpoint**

<a name="getTelephonyProvidersEdgesEndpoints"></a>

# EndpointEntityListing getTelephonyProvidersEdgesEndpoints(opts)

GET /api/v2/telephony/providers/edges/endpoints

Get endpoints



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'name': "name_example", // String | Name
  'sortBy': "name" // String | Sort by
};
apiInstance.getTelephonyProvidersEdgesEndpoints(opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesEndpoints success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesEndpoints');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **name** | **String** | Name | [optional]  |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
{: class="table table-striped"}

### Return type

**EndpointEntityListing**

<a name="getTelephonyProvidersEdgesExtension"></a>

# Extension getTelephonyProvidersEdgesExtension(extensionId)

GET /api/v2/telephony/providers/edges/extensions/{extensionId}

Get an extension by ID.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var extensionId = "extensionId_example"; // String | Extension ID

apiInstance.getTelephonyProvidersEdgesExtension(extensionId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesExtension success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesExtension');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **extensionId** | **String** | Extension ID |  |
{: class="table table-striped"}

### Return type

**Extension**

<a name="getTelephonyProvidersEdgesExtensionpool"></a>

# ExtensionPool getTelephonyProvidersEdgesExtensionpool(extensionPoolId)

GET /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}

Get an extension pool by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var extensionPoolId = "extensionPoolId_example"; // String | Extension pool ID

apiInstance.getTelephonyProvidersEdgesExtensionpool(extensionPoolId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesExtensionpool success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesExtensionpool');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **extensionPoolId** | **String** | Extension pool ID |  |
{: class="table table-striped"}

### Return type

**ExtensionPool**

<a name="getTelephonyProvidersEdgesExtensionpools"></a>

# ExtensionPoolEntityListing getTelephonyProvidersEdgesExtensionpools(opts)

GET /api/v2/telephony/providers/edges/extensionpools

Get a listing of extension pools



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "startNumber", // String | Sort by
  '_number': "_number_example" // String | Number
};
apiInstance.getTelephonyProvidersEdgesExtensionpools(opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesExtensionpools success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesExtensionpools');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to startNumber] |
 **_number** | **String** | Number | [optional]  |
{: class="table table-striped"}

### Return type

**ExtensionPoolEntityListing**

<a name="getTelephonyProvidersEdgesExtensions"></a>

# ExtensionEntityListing getTelephonyProvidersEdgesExtensions(opts)

GET /api/v2/telephony/providers/edges/extensions

Get a listing of extensions



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "number", // String | Sort by
  'sortOrder': "ASC", // String | Sort order
  '_number': "_number_example" // String | Filter by number
};
apiInstance.getTelephonyProvidersEdgesExtensions(opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesExtensions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesExtensions');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to number] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **_number** | **String** | Filter by number | [optional]  |
{: class="table table-striped"}

### Return type

**ExtensionEntityListing**

<a name="getTelephonyProvidersEdgesLine"></a>

# Line getTelephonyProvidersEdgesLine(lineId)

GET /api/v2/telephony/providers/edges/lines/{lineId}

Get a Line by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var lineId = "lineId_example"; // String | Line ID

apiInstance.getTelephonyProvidersEdgesLine(lineId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesLine success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesLine');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **lineId** | **String** | Line ID |  |
{: class="table table-striped"}

### Return type

**Line**

<a name="getTelephonyProvidersEdgesLinebasesetting"></a>

# LineBase getTelephonyProvidersEdgesLinebasesetting(lineBaseId)

GET /api/v2/telephony/providers/edges/linebasesettings/{lineBaseId}

Get a line base settings object by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var lineBaseId = "lineBaseId_example"; // String | Line base ID

apiInstance.getTelephonyProvidersEdgesLinebasesetting(lineBaseId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesLinebasesetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesLinebasesetting');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **lineBaseId** | **String** | Line base ID |  |
{: class="table table-striped"}

### Return type

**LineBase**

<a name="getTelephonyProvidersEdgesLinebasesettings"></a>

# LineBaseEntityListing getTelephonyProvidersEdgesLinebasesettings(opts)

GET /api/v2/telephony/providers/edges/linebasesettings

Get a listing of line base settings objects



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Value by which to sort
  'sortOrder': "ASC" // String | Sort order
};
apiInstance.getTelephonyProvidersEdgesLinebasesettings(opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesLinebasesettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesLinebasesettings');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Value by which to sort | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
{: class="table table-striped"}

### Return type

**LineBaseEntityListing**

<a name="getTelephonyProvidersEdgesLines"></a>

# LineEntityListing getTelephonyProvidersEdgesLines(opts)

GET /api/v2/telephony/providers/edges/lines

Get a list of Lines



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'name': "name_example", // String | Name
  'sortBy': "name", // String | Value by which to sort
  'expand': ["expand_example"] // [String] | Fields to expand in the response, comma-separated
};
apiInstance.getTelephonyProvidersEdgesLines(opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesLines success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesLines');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **name** | **String** | Name | [optional]  |
 **sortBy** | **String** | Value by which to sort | [optional] [default to name] |
 **expand** | **[String]** | Fields to expand in the response, comma-separated | [optional] <br />**Values**: properties, site, edgeGroup, primaryEdge, secondaryEdge, edges, assignedUser |
{: class="table table-striped"}

### Return type

**LineEntityListing**

<a name="getTelephonyProvidersEdgesLinesTemplate"></a>

# Line getTelephonyProvidersEdgesLinesTemplate(lineBaseSettingsId)

GET /api/v2/telephony/providers/edges/lines/template

Get a Line instance template based on a Line Base Settings object. This object can then be modified and saved as a new Line instance



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var lineBaseSettingsId = "lineBaseSettingsId_example"; // String | The id of a Line Base Settings object upon which to base this Line

apiInstance.getTelephonyProvidersEdgesLinesTemplate(lineBaseSettingsId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesLinesTemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesLinesTemplate');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **lineBaseSettingsId** | **String** | The id of a Line Base Settings object upon which to base this Line |  |
{: class="table table-striped"}

### Return type

**Line**

<a name="getTelephonyProvidersEdgesLogicalinterfaces"></a>

# LogicalInterfaceEntityListing getTelephonyProvidersEdgesLogicalinterfaces(edgeIds, opts)

GET /api/v2/telephony/providers/edges/logicalinterfaces

Get edge logical interfaces.

Retrieve the configured logical interfaces for a list edges. Only 100 edges can be requested at a time.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeIds = "edgeIds_example"; // String | Comma separated list of Edge Id's

var opts = { 
  'expand': ["expand_example"] // [String] | Field to expand in the response
};
apiInstance.getTelephonyProvidersEdgesLogicalinterfaces(edgeIds, opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesLogicalinterfaces success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesLogicalinterfaces');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeIds** | **String** | Comma separated list of Edge Id&#39;s |  |
 **expand** | **[String]** | Field to expand in the response | [optional] <br />**Values**: externalTrunkBaseAssignments, phoneTrunkBaseAssignments |
{: class="table table-striped"}

### Return type

**LogicalInterfaceEntityListing**

<a name="getTelephonyProvidersEdgesMetrics"></a>

# [EdgeMetrics] getTelephonyProvidersEdgesMetrics(edgeIds)

GET /api/v2/telephony/providers/edges/metrics

Get the metrics for a list of edges.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeIds = "edgeIds_example"; // String | Comma separated list of Edge Id's

apiInstance.getTelephonyProvidersEdgesMetrics(edgeIds)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesMetrics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesMetrics');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeIds** | **String** | Comma separated list of Edge Id&#39;s |  |
{: class="table table-striped"}

### Return type

**[EdgeMetrics]**

<a name="getTelephonyProvidersEdgesOutboundroute"></a>

# OutboundRoute getTelephonyProvidersEdgesOutboundroute(outboundRouteId)

GET /api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}

Get outbound route



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var outboundRouteId = "outboundRouteId_example"; // String | Outbound route ID

apiInstance.getTelephonyProvidersEdgesOutboundroute(outboundRouteId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesOutboundroute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesOutboundroute');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **outboundRouteId** | **String** | Outbound route ID |  |
{: class="table table-striped"}

### Return type

**OutboundRoute**

<a name="getTelephonyProvidersEdgesOutboundroutes"></a>

# OutboundRouteEntityListing getTelephonyProvidersEdgesOutboundroutes(opts)

GET /api/v2/telephony/providers/edges/outboundroutes

Get outbound routes



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'name': "name_example", // String | Name
  'siteId': "siteId_example", // String | Filter by site.id
  'sortBy': "name" // String | Sort by
};
apiInstance.getTelephonyProvidersEdgesOutboundroutes(opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesOutboundroutes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesOutboundroutes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **name** | **String** | Name | [optional]  |
 **siteId** | **String** | Filter by site.id | [optional]  |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
{: class="table table-striped"}

### Return type

**OutboundRouteEntityListing**

<a name="getTelephonyProvidersEdgesPhone"></a>

# Phone getTelephonyProvidersEdgesPhone(phoneId)

GET /api/v2/telephony/providers/edges/phones/{phoneId}

Get a Phone by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var phoneId = "phoneId_example"; // String | Phone ID

apiInstance.getTelephonyProvidersEdgesPhone(phoneId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesPhone success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesPhone');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneId** | **String** | Phone ID |  |
{: class="table table-striped"}

### Return type

**Phone**

<a name="getTelephonyProvidersEdgesPhonebasesetting"></a>

# PhoneBase getTelephonyProvidersEdgesPhonebasesetting(phoneBaseId)

GET /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}

Get a Phone Base Settings object by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var phoneBaseId = "phoneBaseId_example"; // String | Phone base ID

apiInstance.getTelephonyProvidersEdgesPhonebasesetting(phoneBaseId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesPhonebasesetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesPhonebasesetting');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneBaseId** | **String** | Phone base ID |  |
{: class="table table-striped"}

### Return type

**PhoneBase**

<a name="getTelephonyProvidersEdgesPhonebasesettings"></a>

# PhoneBaseEntityListing getTelephonyProvidersEdgesPhonebasesettings(opts)

GET /api/v2/telephony/providers/edges/phonebasesettings

Get a list of Phone Base Settings objects



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "name", // String | Value by which to sort
  'sortOrder': "ASC", // String | Sort order
  'expand': ["expand_example"], // [String] | Fields to expand in the response, comma-separated
  'name': "name_example" // String | Name
};
apiInstance.getTelephonyProvidersEdgesPhonebasesettings(opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesPhonebasesettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesPhonebasesettings');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Value by which to sort | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **expand** | **[String]** | Fields to expand in the response, comma-separated | [optional] <br />**Values**: properties, lines |
 **name** | **String** | Name | [optional]  |
{: class="table table-striped"}

### Return type

**PhoneBaseEntityListing**

<a name="getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases"></a>

# PhoneMetaBaseEntityListing getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases(opts)

GET /api/v2/telephony/providers/edges/phonebasesettings/availablemetabases

Get a list of available makes and models to create a new Phone Base Settings



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases(opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**PhoneMetaBaseEntityListing**

<a name="getTelephonyProvidersEdgesPhonebasesettingsTemplate"></a>

# PhoneBase getTelephonyProvidersEdgesPhonebasesettingsTemplate(phoneMetabaseId)

GET /api/v2/telephony/providers/edges/phonebasesettings/template

Get a Phone Base Settings instance template from a given make and model. This object can then be modified and saved as a new Phone Base Settings instance



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var phoneMetabaseId = "phoneMetabaseId_example"; // String | The id of a metabase object upon which to base this Phone Base Settings

apiInstance.getTelephonyProvidersEdgesPhonebasesettingsTemplate(phoneMetabaseId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesPhonebasesettingsTemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesPhonebasesettingsTemplate');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneMetabaseId** | **String** | The id of a metabase object upon which to base this Phone Base Settings |  |
{: class="table table-striped"}

### Return type

**PhoneBase**

<a name="getTelephonyProvidersEdgesPhones"></a>

# PhoneEntityListing getTelephonyProvidersEdgesPhones(opts)

GET /api/v2/telephony/providers/edges/phones

Get a list of Phone Instances



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Value by which to sort
  'sortOrder': "ASC", // String | Sort order
  'siteId': "siteId_example", // String | Filter by site.id
  'webRtcUserId': "webRtcUserId_example", // String | Filter by webRtcUser.id
  'phoneBaseSettingsId': "phoneBaseSettingsId_example", // String | Filter by phoneBaseSettings.id
  'linesLoggedInUserId': "linesLoggedInUserId_example", // String | Filter by lines.loggedInUser.id
  'linesDefaultForUserId': "linesDefaultForUserId_example", // String | Filter by lines.defaultForUser.id
  'phoneHardwareId': "phoneHardwareId_example", // String | Filter by phone_hardwareId
  'linesId': "linesId_example", // String | Filter by lines.id
  'linesName': "linesName_example", // String | Filter by lines.name
  'expand': ["expand_example"], // [String] | Fields to expand in the response, comma-separated
  'fields': ["fields_example"] // [String] | Fields and properties to get, comma-separated
};
apiInstance.getTelephonyProvidersEdgesPhones(opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesPhones success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesPhones');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Value by which to sort | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **siteId** | **String** | Filter by site.id | [optional]  |
 **webRtcUserId** | **String** | Filter by webRtcUser.id | [optional]  |
 **phoneBaseSettingsId** | **String** | Filter by phoneBaseSettings.id | [optional]  |
 **linesLoggedInUserId** | **String** | Filter by lines.loggedInUser.id | [optional]  |
 **linesDefaultForUserId** | **String** | Filter by lines.defaultForUser.id | [optional]  |
 **phoneHardwareId** | **String** | Filter by phone_hardwareId | [optional]  |
 **linesId** | **String** | Filter by lines.id | [optional]  |
 **linesName** | **String** | Filter by lines.name | [optional]  |
 **expand** | **[String]** | Fields to expand in the response, comma-separated | [optional] <br />**Values**: properties, site, status, status.primaryEdgesStatus, status.secondaryEdgesStatus, phoneBaseSettings, lines |
 **fields** | **[String]** | Fields and properties to get, comma-separated | [optional] <br />**Values**: webRtcUser, properties.*, lines.loggedInUser, lines.defaultForUser |
{: class="table table-striped"}

### Return type

**PhoneEntityListing**

<a name="getTelephonyProvidersEdgesPhonesTemplate"></a>

# Phone getTelephonyProvidersEdgesPhonesTemplate(phoneBaseSettingsId)

GET /api/v2/telephony/providers/edges/phones/template

Get a Phone instance template based on a Phone Base Settings object. This object can then be modified and saved as a new Phone instance



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var phoneBaseSettingsId = "phoneBaseSettingsId_example"; // String | The id of a Phone Base Settings object upon which to base this Phone

apiInstance.getTelephonyProvidersEdgesPhonesTemplate(phoneBaseSettingsId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesPhonesTemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesPhonesTemplate');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneBaseSettingsId** | **String** | The id of a Phone Base Settings object upon which to base this Phone |  |
{: class="table table-striped"}

### Return type

**Phone**

<a name="getTelephonyProvidersEdgesPhysicalinterfaces"></a>

# PhysicalInterfaceEntityListing getTelephonyProvidersEdgesPhysicalinterfaces(edgeIds)

GET /api/v2/telephony/providers/edges/physicalinterfaces

Get physical interfaces for edges.

Retrieves a list of all configured physical interfaces for a list of edges. Only 100 edges can be requested at a time.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeIds = "edgeIds_example"; // String | Comma separated list of Edge Id's

apiInstance.getTelephonyProvidersEdgesPhysicalinterfaces(edgeIds)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesPhysicalinterfaces success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesPhysicalinterfaces');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeIds** | **String** | Comma separated list of Edge Id&#39;s |  |
{: class="table table-striped"}

### Return type

**PhysicalInterfaceEntityListing**

<a name="getTelephonyProvidersEdgesSite"></a>

# Site getTelephonyProvidersEdgesSite(siteId)

GET /api/v2/telephony/providers/edges/sites/{siteId}

Get a Site by ID.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var siteId = "siteId_example"; // String | Site ID

apiInstance.getTelephonyProvidersEdgesSite(siteId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesSite success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesSite');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
{: class="table table-striped"}

### Return type

**Site**

<a name="getTelephonyProvidersEdgesSiteAutoscalinggroups"></a>

# AsgInfoResponse getTelephonyProvidersEdgesSiteAutoscalinggroups(siteId)

GET /api/v2/telephony/providers/edges/sites/{siteId}/autoscalinggroups

Gets the basic information about an asg in a specified site



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var siteId = "siteId_example"; // String | Site id associated with the asg

apiInstance.getTelephonyProvidersEdgesSiteAutoscalinggroups(siteId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesSiteAutoscalinggroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesSiteAutoscalinggroups');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site id associated with the asg |  |
{: class="table table-striped"}

### Return type

**AsgInfoResponse**

<a name="getTelephonyProvidersEdgesSiteNumberplan"></a>

# NumberPlan getTelephonyProvidersEdgesSiteNumberplan(siteId, numberPlanId)

GET /api/v2/telephony/providers/edges/sites/{siteId}/numberplans/{numberPlanId}

Get a Number Plan by ID.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var siteId = "siteId_example"; // String | Site ID

var numberPlanId = "numberPlanId_example"; // String | Number Plan ID

apiInstance.getTelephonyProvidersEdgesSiteNumberplan(siteId, numberPlanId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesSiteNumberplan success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesSiteNumberplan');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
 **numberPlanId** | **String** | Number Plan ID |  |
{: class="table table-striped"}

### Return type

**NumberPlan**

<a name="getTelephonyProvidersEdgesSiteNumberplans"></a>

# [NumberPlan] getTelephonyProvidersEdgesSiteNumberplans(siteId)

GET /api/v2/telephony/providers/edges/sites/{siteId}/numberplans

Get the list of Number Plans for this Site.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var siteId = "siteId_example"; // String | Site ID

apiInstance.getTelephonyProvidersEdgesSiteNumberplans(siteId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesSiteNumberplans success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesSiteNumberplans');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
{: class="table table-striped"}

### Return type

**[NumberPlan]**

<a name="getTelephonyProvidersEdgesSiteNumberplansClassifications"></a>

# **[&#39;String&#39;]** getTelephonyProvidersEdgesSiteNumberplansClassifications(siteId, opts)

GET /api/v2/telephony/providers/edges/sites/{siteId}/numberplans/classifications

Get a list of Classifications for this Site



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var siteId = "siteId_example"; // String | Site ID

var opts = { 
  'classification': "classification_example" // String | Classification
};
apiInstance.getTelephonyProvidersEdgesSiteNumberplansClassifications(siteId, opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesSiteNumberplansClassifications success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesSiteNumberplansClassifications');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
 **classification** | **String** | Classification | [optional]  |
{: class="table table-striped"}

### Return type

**[&#39;String&#39;]**

<a name="getTelephonyProvidersEdgesSiteOutboundroute"></a>

# OutboundRouteBase getTelephonyProvidersEdgesSiteOutboundroute(siteId, outboundRouteId)

GET /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}

Get an outbound route



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var siteId = "siteId_example"; // String | Site ID

var outboundRouteId = "outboundRouteId_example"; // String | Outbound route ID

apiInstance.getTelephonyProvidersEdgesSiteOutboundroute(siteId, outboundRouteId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesSiteOutboundroute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesSiteOutboundroute');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
 **outboundRouteId** | **String** | Outbound route ID |  |
{: class="table table-striped"}

### Return type

**OutboundRouteBase**

<a name="getTelephonyProvidersEdgesSiteOutboundroutes"></a>

# OutboundRouteBaseEntityListing getTelephonyProvidersEdgesSiteOutboundroutes(siteId, opts)

GET /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes

Get outbound routes



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var siteId = "siteId_example"; // String | Site ID

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'name': "name_example", // String | Name
  'sortBy': "name" // String | Sort by
};
apiInstance.getTelephonyProvidersEdgesSiteOutboundroutes(siteId, opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesSiteOutboundroutes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesSiteOutboundroutes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **name** | **String** | Name | [optional]  |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
{: class="table table-striped"}

### Return type

**OutboundRouteBaseEntityListing**

<a name="getTelephonyProvidersEdgesSites"></a>

# SiteEntityListing getTelephonyProvidersEdgesSites(opts)

GET /api/v2/telephony/providers/edges/sites

Get the list of Sites.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "name", // String | Sort by
  'sortOrder': "ASC", // String | Sort order
  'name': "name_example", // String | Name
  'locationId': "locationId_example", // String | Location Id
  'managed': true // Boolean | Filter by managed
};
apiInstance.getTelephonyProvidersEdgesSites(opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesSites success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesSites');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **name** | **String** | Name | [optional]  |
 **locationId** | **String** | Location Id | [optional]  |
 **managed** | **Boolean** | Filter by managed | [optional]  |
{: class="table table-striped"}

### Return type

**SiteEntityListing**

<a name="getTelephonyProvidersEdgesTimezones"></a>

# TimeZoneEntityListing getTelephonyProvidersEdgesTimezones(opts)

GET /api/v2/telephony/providers/edges/timezones

Get a list of Edge-compatible time zones



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var opts = { 
  'pageSize': 1000, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getTelephonyProvidersEdgesTimezones(opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesTimezones success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesTimezones');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 1000] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**TimeZoneEntityListing**

<a name="getTelephonyProvidersEdgesTrunk"></a>

# Trunk getTelephonyProvidersEdgesTrunk(trunkId)

GET /api/v2/telephony/providers/edges/trunks/{trunkId}

Get a Trunk by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var trunkId = "trunkId_example"; // String | Trunk ID

apiInstance.getTelephonyProvidersEdgesTrunk(trunkId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesTrunk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesTrunk');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trunkId** | **String** | Trunk ID |  |
{: class="table table-striped"}

### Return type

**Trunk**

<a name="getTelephonyProvidersEdgesTrunkMetrics"></a>

# TrunkMetrics getTelephonyProvidersEdgesTrunkMetrics(trunkId)

GET /api/v2/telephony/providers/edges/trunks/{trunkId}/metrics

Get the trunk metrics.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var trunkId = "trunkId_example"; // String | Trunk Id

apiInstance.getTelephonyProvidersEdgesTrunkMetrics(trunkId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesTrunkMetrics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesTrunkMetrics');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trunkId** | **String** | Trunk Id |  |
{: class="table table-striped"}

### Return type

**TrunkMetrics**

<a name="getTelephonyProvidersEdgesTrunkbasesetting"></a>

# TrunkBase getTelephonyProvidersEdgesTrunkbasesetting(trunkBaseSettingsId, opts)

GET /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}

Get a Trunk Base Settings object by ID

Managed properties will not be returned unless the user is assigned the managed:all:all permission.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var trunkBaseSettingsId = "trunkBaseSettingsId_example"; // String | Trunk Base ID

var opts = { 
  'ignoreHidden': true // Boolean | Set this to true to not receive trunk properties that are meant to be hidden or for internal system usage only.
};
apiInstance.getTelephonyProvidersEdgesTrunkbasesetting(trunkBaseSettingsId, opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesTrunkbasesetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesTrunkbasesetting');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trunkBaseSettingsId** | **String** | Trunk Base ID |  |
 **ignoreHidden** | **Boolean** | Set this to true to not receive trunk properties that are meant to be hidden or for internal system usage only. | [optional]  |
{: class="table table-striped"}

### Return type

**TrunkBase**

<a name="getTelephonyProvidersEdgesTrunkbasesettings"></a>

# TrunkBaseEntityListing getTelephonyProvidersEdgesTrunkbasesettings(opts)

GET /api/v2/telephony/providers/edges/trunkbasesettings

Get Trunk Base Settings listing

Managed properties will not be returned unless the user is assigned the managed:all:all permission.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Value by which to sort
  'sortOrder': "ASC", // String | Sort order
  'recordingEnabled': true, // Boolean | Filter trunks by recording enabled
  'ignoreHidden': true, // Boolean | Set this to true to not receive trunk properties that are meant to be hidden or for internal system usage only.
  'managed': true, // Boolean | Filter by managed
  'expand': ["expand_example"], // [String] | Fields to expand in the response, comma-separated
  'name': "name_example" // String | Name of the TrunkBase to filter by
};
apiInstance.getTelephonyProvidersEdgesTrunkbasesettings(opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesTrunkbasesettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesTrunkbasesettings');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Value by which to sort | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **recordingEnabled** | **Boolean** | Filter trunks by recording enabled | [optional]  |
 **ignoreHidden** | **Boolean** | Set this to true to not receive trunk properties that are meant to be hidden or for internal system usage only. | [optional]  |
 **managed** | **Boolean** | Filter by managed | [optional]  |
 **expand** | **[String]** | Fields to expand in the response, comma-separated | [optional] <br />**Values**: properties |
 **name** | **String** | Name of the TrunkBase to filter by | [optional]  |
{: class="table table-striped"}

### Return type

**TrunkBaseEntityListing**

<a name="getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases"></a>

# TrunkMetabaseEntityListing getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases(opts)

GET /api/v2/telephony/providers/edges/trunkbasesettings/availablemetabases

Get a list of available makes and models to create a new Trunk Base Settings



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var opts = { 
  'type': "type_example", // String | 
  'pageSize': 25, // Number | 
  'pageNumber': 1 // Number | 
};
apiInstance.getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases(opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **type** | **String** |  | [optional] <br />**Values**: EXTERNAL, PHONE, EDGE |
 **pageSize** | **Number** |  | [optional] [default to 25] |
 **pageNumber** | **Number** |  | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**TrunkMetabaseEntityListing**

<a name="getTelephonyProvidersEdgesTrunkbasesettingsTemplate"></a>

# TrunkBase getTelephonyProvidersEdgesTrunkbasesettingsTemplate(trunkMetabaseId)

GET /api/v2/telephony/providers/edges/trunkbasesettings/template

Get a Trunk Base Settings instance template from a given make and model. This object can then be modified and saved as a new Trunk Base Settings instance



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var trunkMetabaseId = "trunkMetabaseId_example"; // String | The id of a metabase object upon which to base this Trunk Base Settings

apiInstance.getTelephonyProvidersEdgesTrunkbasesettingsTemplate(trunkMetabaseId)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesTrunkbasesettingsTemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesTrunkbasesettingsTemplate');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trunkMetabaseId** | **String** | The id of a metabase object upon which to base this Trunk Base Settings |  |
{: class="table table-striped"}

### Return type

**TrunkBase**

<a name="getTelephonyProvidersEdgesTrunks"></a>

# TrunkEntityListing getTelephonyProvidersEdgesTrunks(opts)

GET /api/v2/telephony/providers/edges/trunks

Get the list of available trunks.

Trunks are created by assigning trunk base settings to an Edge or Edge Group.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Value by which to sort
  'sortOrder': "ASC", // String | Sort order
  'edgeId': "edgeId_example", // String | Filter by Edge Ids
  'trunkBaseId': "trunkBaseId_example", // String | Filter by Trunk Base Ids
  'trunkType': "trunkType_example" // String | Filter by a Trunk type
};
apiInstance.getTelephonyProvidersEdgesTrunks(opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesTrunks success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesTrunks');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Value by which to sort | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **edgeId** | **String** | Filter by Edge Ids | [optional]  |
 **trunkBaseId** | **String** | Filter by Trunk Base Ids | [optional]  |
 **trunkType** | **String** | Filter by a Trunk type | [optional] <br />**Values**: EXTERNAL, PHONE, EDGE |
{: class="table table-striped"}

### Return type

**TrunkEntityListing**

<a name="getTelephonyProvidersEdgesTrunksMetrics"></a>

# [TrunkMetrics] getTelephonyProvidersEdgesTrunksMetrics(trunkIds)

GET /api/v2/telephony/providers/edges/trunks/metrics

Get the metrics for a list of trunks.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var trunkIds = "trunkIds_example"; // String | Comma separated list of Trunk Id's

apiInstance.getTelephonyProvidersEdgesTrunksMetrics(trunkIds)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesTrunksMetrics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesTrunksMetrics');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trunkIds** | **String** | Comma separated list of Trunk Id&#39;s |  |
{: class="table table-striped"}

### Return type

**[TrunkMetrics]**

<a name="getTelephonyProvidersEdgesTrunkswithrecording"></a>

# TrunkRecordingEnabledCount getTelephonyProvidersEdgesTrunkswithrecording(opts)

GET /api/v2/telephony/providers/edges/trunkswithrecording

Get Counts of trunks that have recording disabled or enabled



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var opts = { 
  'trunkType': "trunkType_example" // String | The type of this trunk base.
};
apiInstance.getTelephonyProvidersEdgesTrunkswithrecording(opts)
  .then(function(data) {
    console.log(`getTelephonyProvidersEdgesTrunkswithrecording success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTelephonyProvidersEdgesTrunkswithrecording');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trunkType** | **String** | The type of this trunk base. | [optional] <br />**Values**: EXTERNAL, PHONE, EDGE |
{: class="table table-striped"}

### Return type

**TrunkRecordingEnabledCount**

<a name="postTelephonyProvidersEdgeLogicalinterfaces"></a>

# DomainLogicalInterface postTelephonyProvidersEdgeLogicalinterfaces(edgeId, body)

POST /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces

Create an edge logical interface.

Create

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

var body = {}; // Object | Logical interface

apiInstance.postTelephonyProvidersEdgeLogicalinterfaces(edgeId, body)
  .then(function(data) {
    console.log(`postTelephonyProvidersEdgeLogicalinterfaces success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgeLogicalinterfaces');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **body** | **Object** | Logical interface |  |
{: class="table table-striped"}

### Return type

**DomainLogicalInterface**

<a name="postTelephonyProvidersEdgeLogsJobUpload"></a>

# void postTelephonyProvidersEdgeLogsJobUpload(edgeId, jobId, body)

POST /api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}/upload

Request that the specified fileIds be uploaded from the Edge.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

var jobId = "jobId_example"; // String | Job ID

var body = {}; // Object | Log upload request

apiInstance.postTelephonyProvidersEdgeLogsJobUpload(edgeId, jobId, body)
  .then(function() {
    console.log('postTelephonyProvidersEdgeLogsJobUpload returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgeLogsJobUpload');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **jobId** | **String** | Job ID |  |
 **body** | **Object** | Log upload request |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postTelephonyProvidersEdgeLogsJobs"></a>

# EdgeLogsJobResponse postTelephonyProvidersEdgeLogsJobs(edgeId, body)

POST /api/v2/telephony/providers/edges/{edgeId}/logs/jobs

Create a job to upload a list of Edge logs.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

var body = {}; // Object | EdgeLogsJobRequest

apiInstance.postTelephonyProvidersEdgeLogsJobs(edgeId, body)
  .then(function(data) {
    console.log(`postTelephonyProvidersEdgeLogsJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgeLogsJobs');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **body** | **Object** | EdgeLogsJobRequest |  |
{: class="table table-striped"}

### Return type

**EdgeLogsJobResponse**

<a name="postTelephonyProvidersEdgeReboot"></a>

# **&#39;String&#39;** postTelephonyProvidersEdgeReboot(edgeId, opts)

POST /api/v2/telephony/providers/edges/{edgeId}/reboot

Reboot an Edge



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

var opts = { 
  'body': {} // Object | Parameters for the edge reboot
};
apiInstance.postTelephonyProvidersEdgeReboot(edgeId, opts)
  .then(function(data) {
    console.log(`postTelephonyProvidersEdgeReboot success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgeReboot');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **body** | **Object** | Parameters for the edge reboot | [optional]  |
{: class="table table-striped"}

### Return type

**&#39;String&#39;**

<a name="postTelephonyProvidersEdgeSoftwareupdate"></a>

# DomainEdgeSoftwareUpdateDto postTelephonyProvidersEdgeSoftwareupdate(edgeId, body)

POST /api/v2/telephony/providers/edges/{edgeId}/softwareupdate

Starts a software update for this edge.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

var body = {}; // Object | Software update request

apiInstance.postTelephonyProvidersEdgeSoftwareupdate(edgeId, body)
  .then(function(data) {
    console.log(`postTelephonyProvidersEdgeSoftwareupdate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgeSoftwareupdate');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **body** | **Object** | Software update request |  |
{: class="table table-striped"}

### Return type

**DomainEdgeSoftwareUpdateDto**

<a name="postTelephonyProvidersEdgeStatuscode"></a>

# **&#39;String&#39;** postTelephonyProvidersEdgeStatuscode(edgeId, opts)

POST /api/v2/telephony/providers/edges/{edgeId}/statuscode

Take an Edge in or out of service



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

var opts = { 
  'body': {} // Object | Edge Service State
};
apiInstance.postTelephonyProvidersEdgeStatuscode(edgeId, opts)
  .then(function(data) {
    console.log(`postTelephonyProvidersEdgeStatuscode success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgeStatuscode');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **body** | **Object** | Edge Service State | [optional]  |
{: class="table table-striped"}

### Return type

**&#39;String&#39;**

<a name="postTelephonyProvidersEdgeUnpair"></a>

# **&#39;String&#39;** postTelephonyProvidersEdgeUnpair(edgeId)

POST /api/v2/telephony/providers/edges/{edgeId}/unpair

Unpair an Edge



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge Id

apiInstance.postTelephonyProvidersEdgeUnpair(edgeId)
  .then(function(data) {
    console.log(`postTelephonyProvidersEdgeUnpair success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgeUnpair');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge Id |  |
{: class="table table-striped"}

### Return type

**&#39;String&#39;**

<a name="postTelephonyProvidersEdges"></a>

# Edge postTelephonyProvidersEdges(body)

POST /api/v2/telephony/providers/edges

Create an edge.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var body = {}; // Object | Edge

apiInstance.postTelephonyProvidersEdges(body)
  .then(function(data) {
    console.log(`postTelephonyProvidersEdges success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdges');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Edge |  |
{: class="table table-striped"}

### Return type

**Edge**

<a name="postTelephonyProvidersEdgesAddressvalidation"></a>

# ValidateAddressResponse postTelephonyProvidersEdgesAddressvalidation(body)

POST /api/v2/telephony/providers/edges/addressvalidation

Validates a street address



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var body = {}; // Object | Address

apiInstance.postTelephonyProvidersEdgesAddressvalidation(body)
  .then(function(data) {
    console.log(`postTelephonyProvidersEdgesAddressvalidation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgesAddressvalidation');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Address |  |
{: class="table table-striped"}

### Return type

**ValidateAddressResponse**

<a name="postTelephonyProvidersEdgesCertificateauthorities"></a>

# DomainCertificateAuthority postTelephonyProvidersEdgesCertificateauthorities(body)

POST /api/v2/telephony/providers/edges/certificateauthorities

Create a certificate authority.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var body = {}; // Object | CertificateAuthority

apiInstance.postTelephonyProvidersEdgesCertificateauthorities(body)
  .then(function(data) {
    console.log(`postTelephonyProvidersEdgesCertificateauthorities success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgesCertificateauthorities');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | CertificateAuthority |  |
{: class="table table-striped"}

### Return type

**DomainCertificateAuthority**

<a name="postTelephonyProvidersEdgesDidpools"></a>

# DIDPool postTelephonyProvidersEdgesDidpools(body)

POST /api/v2/telephony/providers/edges/didpools

Create a new DID pool



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var body = {}; // Object | DID pool

apiInstance.postTelephonyProvidersEdgesDidpools(body)
  .then(function(data) {
    console.log(`postTelephonyProvidersEdgesDidpools success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgesDidpools');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | DID pool |  |
{: class="table table-striped"}

### Return type

**DIDPool**

<a name="postTelephonyProvidersEdgesEdgegroups"></a>

# EdgeGroup postTelephonyProvidersEdgesEdgegroups(body)

POST /api/v2/telephony/providers/edges/edgegroups

Create an edge group.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var body = {}; // Object | EdgeGroup

apiInstance.postTelephonyProvidersEdgesEdgegroups(body)
  .then(function(data) {
    console.log(`postTelephonyProvidersEdgesEdgegroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgesEdgegroups');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | EdgeGroup |  |
{: class="table table-striped"}

### Return type

**EdgeGroup**

<a name="postTelephonyProvidersEdgesEndpoints"></a>

# Endpoint postTelephonyProvidersEdgesEndpoints(body)

POST /api/v2/telephony/providers/edges/endpoints

Create endpoint



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var body = {}; // Object | EndpointTemplate

apiInstance.postTelephonyProvidersEdgesEndpoints(body)
  .then(function(data) {
    console.log(`postTelephonyProvidersEdgesEndpoints success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgesEndpoints');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | EndpointTemplate |  |
{: class="table table-striped"}

### Return type

**Endpoint**

<a name="postTelephonyProvidersEdgesExtensionpools"></a>

# ExtensionPool postTelephonyProvidersEdgesExtensionpools(body)

POST /api/v2/telephony/providers/edges/extensionpools

Create a new extension pool



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var body = {}; // Object | ExtensionPool

apiInstance.postTelephonyProvidersEdgesExtensionpools(body)
  .then(function(data) {
    console.log(`postTelephonyProvidersEdgesExtensionpools success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgesExtensionpools');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ExtensionPool |  |
{: class="table table-striped"}

### Return type

**ExtensionPool**

<a name="postTelephonyProvidersEdgesOutboundroutes"></a>

# OutboundRoute postTelephonyProvidersEdgesOutboundroutes(body)

POST /api/v2/telephony/providers/edges/outboundroutes

Create outbound rule



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var body = {}; // Object | OutboundRoute

apiInstance.postTelephonyProvidersEdgesOutboundroutes(body)
  .then(function(data) {
    console.log(`postTelephonyProvidersEdgesOutboundroutes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgesOutboundroutes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | OutboundRoute |  |
{: class="table table-striped"}

### Return type

**OutboundRoute**

<a name="postTelephonyProvidersEdgesPhoneReboot"></a>

# void postTelephonyProvidersEdgesPhoneReboot(phoneId)

POST /api/v2/telephony/providers/edges/phones/{phoneId}/reboot

Reboot a Phone



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var phoneId = "phoneId_example"; // String | Phone Id

apiInstance.postTelephonyProvidersEdgesPhoneReboot(phoneId)
  .then(function() {
    console.log('postTelephonyProvidersEdgesPhoneReboot returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgesPhoneReboot');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneId** | **String** | Phone Id |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postTelephonyProvidersEdgesPhonebasesettings"></a>

# PhoneBase postTelephonyProvidersEdgesPhonebasesettings(body)

POST /api/v2/telephony/providers/edges/phonebasesettings

Create a new Phone Base Settings object



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var body = {}; // Object | Phone base settings

apiInstance.postTelephonyProvidersEdgesPhonebasesettings(body)
  .then(function(data) {
    console.log(`postTelephonyProvidersEdgesPhonebasesettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgesPhonebasesettings');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Phone base settings |  |
{: class="table table-striped"}

### Return type

**PhoneBase**

<a name="postTelephonyProvidersEdgesPhones"></a>

# Phone postTelephonyProvidersEdgesPhones(body)

POST /api/v2/telephony/providers/edges/phones

Create a new Phone



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var body = {}; // Object | Phone

apiInstance.postTelephonyProvidersEdgesPhones(body)
  .then(function(data) {
    console.log(`postTelephonyProvidersEdgesPhones success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgesPhones');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Phone |  |
{: class="table table-striped"}

### Return type

**Phone**

<a name="postTelephonyProvidersEdgesPhonesReboot"></a>

# void postTelephonyProvidersEdgesPhonesReboot(body)

POST /api/v2/telephony/providers/edges/phones/reboot

Reboot Multiple Phones



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var body = {}; // Object | Phones

apiInstance.postTelephonyProvidersEdgesPhonesReboot(body)
  .then(function() {
    console.log('postTelephonyProvidersEdgesPhonesReboot returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgesPhonesReboot');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Phones |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postTelephonyProvidersEdgesSiteAutoscalinggroups"></a>

# **&#39;String&#39;** postTelephonyProvidersEdgesSiteAutoscalinggroups(siteId, body)

POST /api/v2/telephony/providers/edges/sites/{siteId}/autoscalinggroups

Creates an ASG for the specified site



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var siteId = "siteId_example"; // String | Site that will be associated with the asg

var body = {}; // Object | CreateAsgRequest

apiInstance.postTelephonyProvidersEdgesSiteAutoscalinggroups(siteId, body)
  .then(function(data) {
    console.log(`postTelephonyProvidersEdgesSiteAutoscalinggroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgesSiteAutoscalinggroups');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site that will be associated with the asg |  |
 **body** | **Object** | CreateAsgRequest |  |
{: class="table table-striped"}

### Return type

**&#39;String&#39;**

<a name="postTelephonyProvidersEdgesSiteOutboundroutes"></a>

# OutboundRouteBase postTelephonyProvidersEdgesSiteOutboundroutes(siteId, body)

POST /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes

Create outbound route



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var siteId = "siteId_example"; // String | Site ID

var body = {}; // Object | OutboundRoute

apiInstance.postTelephonyProvidersEdgesSiteOutboundroutes(siteId, body)
  .then(function(data) {
    console.log(`postTelephonyProvidersEdgesSiteOutboundroutes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgesSiteOutboundroutes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
 **body** | **Object** | OutboundRoute |  |
{: class="table table-striped"}

### Return type

**OutboundRouteBase**

<a name="postTelephonyProvidersEdgesSiteRebalance"></a>

# void postTelephonyProvidersEdgesSiteRebalance(siteId)

POST /api/v2/telephony/providers/edges/sites/{siteId}/rebalance

Triggers the rebalance operation.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var siteId = "siteId_example"; // String | Site ID

apiInstance.postTelephonyProvidersEdgesSiteRebalance(siteId)
  .then(function() {
    console.log('postTelephonyProvidersEdgesSiteRebalance returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgesSiteRebalance');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postTelephonyProvidersEdgesSites"></a>

# Site postTelephonyProvidersEdgesSites(body)

POST /api/v2/telephony/providers/edges/sites

Create a Site.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var body = {}; // Object | Site

apiInstance.postTelephonyProvidersEdgesSites(body)
  .then(function(data) {
    console.log(`postTelephonyProvidersEdgesSites success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgesSites');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Site |  |
{: class="table table-striped"}

### Return type

**Site**

<a name="postTelephonyProvidersEdgesTrunkbasesettings"></a>

# TrunkBase postTelephonyProvidersEdgesTrunkbasesettings(body)

POST /api/v2/telephony/providers/edges/trunkbasesettings

Create a Trunk Base Settings object



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var body = {}; // Object | Trunk base settings

apiInstance.postTelephonyProvidersEdgesTrunkbasesettings(body)
  .then(function(data) {
    console.log(`postTelephonyProvidersEdgesTrunkbasesettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postTelephonyProvidersEdgesTrunkbasesettings');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Trunk base settings |  |
{: class="table table-striped"}

### Return type

**TrunkBase**

<a name="putTelephonyProvidersEdge"></a>

# Edge putTelephonyProvidersEdge(edgeId, body)

PUT /api/v2/telephony/providers/edges/{edgeId}

Update a edge.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

var body = {}; // Object | Edge

apiInstance.putTelephonyProvidersEdge(edgeId, body)
  .then(function(data) {
    console.log(`putTelephonyProvidersEdge success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putTelephonyProvidersEdge');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **body** | **Object** | Edge |  |
{: class="table table-striped"}

### Return type

**Edge**

<a name="putTelephonyProvidersEdgeLine"></a>

# EdgeLine putTelephonyProvidersEdgeLine(edgeId, lineId, body)

PUT /api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}

Update a line.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

var lineId = "lineId_example"; // String | Line ID

var body = {}; // Object | Line

apiInstance.putTelephonyProvidersEdgeLine(edgeId, lineId, body)
  .then(function(data) {
    console.log(`putTelephonyProvidersEdgeLine success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putTelephonyProvidersEdgeLine');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **lineId** | **String** | Line ID |  |
 **body** | **Object** | Line |  |
{: class="table table-striped"}

### Return type

**EdgeLine**

<a name="putTelephonyProvidersEdgeLogicalinterface"></a>

# DomainLogicalInterface putTelephonyProvidersEdgeLogicalinterface(edgeId, interfaceId, body)

PUT /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}

Update an edge logical interface.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeId = "edgeId_example"; // String | Edge ID

var interfaceId = "interfaceId_example"; // String | Interface ID

var body = {}; // Object | Logical interface

apiInstance.putTelephonyProvidersEdgeLogicalinterface(edgeId, interfaceId, body)
  .then(function(data) {
    console.log(`putTelephonyProvidersEdgeLogicalinterface success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putTelephonyProvidersEdgeLogicalinterface');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **interfaceId** | **String** | Interface ID |  |
 **body** | **Object** | Logical interface |  |
{: class="table table-striped"}

### Return type

**DomainLogicalInterface**

<a name="putTelephonyProvidersEdgesCertificateauthority"></a>

# DomainCertificateAuthority putTelephonyProvidersEdgesCertificateauthority(certificateId, body)

PUT /api/v2/telephony/providers/edges/certificateauthorities/{certificateId}

Update a certificate authority.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var certificateId = "certificateId_example"; // String | Certificate ID

var body = {}; // Object | Certificate authority

apiInstance.putTelephonyProvidersEdgesCertificateauthority(certificateId, body)
  .then(function(data) {
    console.log(`putTelephonyProvidersEdgesCertificateauthority success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putTelephonyProvidersEdgesCertificateauthority');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **certificateId** | **String** | Certificate ID |  |
 **body** | **Object** | Certificate authority |  |
{: class="table table-striped"}

### Return type

**DomainCertificateAuthority**

<a name="putTelephonyProvidersEdgesDid"></a>

# DID putTelephonyProvidersEdgesDid(didId, body)

PUT /api/v2/telephony/providers/edges/dids/{didId}

Update a DID by ID.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var didId = "didId_example"; // String | DID ID

var body = {}; // Object | DID

apiInstance.putTelephonyProvidersEdgesDid(didId, body)
  .then(function(data) {
    console.log(`putTelephonyProvidersEdgesDid success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putTelephonyProvidersEdgesDid');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **didId** | **String** | DID ID |  |
 **body** | **Object** | DID |  |
{: class="table table-striped"}

### Return type

**DID**

<a name="putTelephonyProvidersEdgesDidpool"></a>

# DIDPool putTelephonyProvidersEdgesDidpool(didPoolId, body)

PUT /api/v2/telephony/providers/edges/didpools/{didPoolId}

Update a DID Pool by ID.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var didPoolId = "didPoolId_example"; // String | DID pool ID

var body = {}; // Object | DID pool

apiInstance.putTelephonyProvidersEdgesDidpool(didPoolId, body)
  .then(function(data) {
    console.log(`putTelephonyProvidersEdgesDidpool success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putTelephonyProvidersEdgesDidpool');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **didPoolId** | **String** | DID pool ID |  |
 **body** | **Object** | DID pool |  |
{: class="table table-striped"}

### Return type

**DIDPool**

<a name="putTelephonyProvidersEdgesEdgegroup"></a>

# EdgeGroup putTelephonyProvidersEdgesEdgegroup(edgeGroupId, body)

PUT /api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}

Update an edge group.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgeGroupId = "edgeGroupId_example"; // String | Edge group ID

var body = {}; // Object | EdgeGroup

apiInstance.putTelephonyProvidersEdgesEdgegroup(edgeGroupId, body)
  .then(function(data) {
    console.log(`putTelephonyProvidersEdgesEdgegroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putTelephonyProvidersEdgesEdgegroup');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeGroupId** | **String** | Edge group ID |  |
 **body** | **Object** | EdgeGroup |  |
{: class="table table-striped"}

### Return type

**EdgeGroup**

<a name="putTelephonyProvidersEdgesEdgegroupEdgetrunkbase"></a>

# EdgeTrunkBase putTelephonyProvidersEdgesEdgegroupEdgetrunkbase(edgegroupId, edgetrunkbaseId, body)

PUT /api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId}

Update the edge trunk base associated with the edge group



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var edgegroupId = "edgegroupId_example"; // String | Edge Group ID

var edgetrunkbaseId = "edgetrunkbaseId_example"; // String | Edge Trunk Base ID

var body = {}; // Object | EdgeTrunkBase

apiInstance.putTelephonyProvidersEdgesEdgegroupEdgetrunkbase(edgegroupId, edgetrunkbaseId, body)
  .then(function(data) {
    console.log(`putTelephonyProvidersEdgesEdgegroupEdgetrunkbase success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putTelephonyProvidersEdgesEdgegroupEdgetrunkbase');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgegroupId** | **String** | Edge Group ID |  |
 **edgetrunkbaseId** | **String** | Edge Trunk Base ID |  |
 **body** | **Object** | EdgeTrunkBase |  |
{: class="table table-striped"}

### Return type

**EdgeTrunkBase**

<a name="putTelephonyProvidersEdgesEndpoint"></a>

# Endpoint putTelephonyProvidersEdgesEndpoint(endpointId, body)

PUT /api/v2/telephony/providers/edges/endpoints/{endpointId}

Update endpoint



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var endpointId = "endpointId_example"; // String | Endpoint ID

var body = {}; // Object | EndpointTemplate

apiInstance.putTelephonyProvidersEdgesEndpoint(endpointId, body)
  .then(function(data) {
    console.log(`putTelephonyProvidersEdgesEndpoint success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putTelephonyProvidersEdgesEndpoint');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **endpointId** | **String** | Endpoint ID |  |
 **body** | **Object** | EndpointTemplate |  |
{: class="table table-striped"}

### Return type

**Endpoint**

<a name="putTelephonyProvidersEdgesExtension"></a>

# Extension putTelephonyProvidersEdgesExtension(extensionId, body)

PUT /api/v2/telephony/providers/edges/extensions/{extensionId}

Update an extension by ID.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var extensionId = "extensionId_example"; // String | Extension ID

var body = {}; // Object | Extension

apiInstance.putTelephonyProvidersEdgesExtension(extensionId, body)
  .then(function(data) {
    console.log(`putTelephonyProvidersEdgesExtension success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putTelephonyProvidersEdgesExtension');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **extensionId** | **String** | Extension ID |  |
 **body** | **Object** | Extension |  |
{: class="table table-striped"}

### Return type

**Extension**

<a name="putTelephonyProvidersEdgesExtensionpool"></a>

# ExtensionPool putTelephonyProvidersEdgesExtensionpool(extensionPoolId, body)

PUT /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}

Update an extension pool by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var extensionPoolId = "extensionPoolId_example"; // String | Extension pool ID

var body = {}; // Object | ExtensionPool

apiInstance.putTelephonyProvidersEdgesExtensionpool(extensionPoolId, body)
  .then(function(data) {
    console.log(`putTelephonyProvidersEdgesExtensionpool success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putTelephonyProvidersEdgesExtensionpool');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **extensionPoolId** | **String** | Extension pool ID |  |
 **body** | **Object** | ExtensionPool |  |
{: class="table table-striped"}

### Return type

**ExtensionPool**

<a name="putTelephonyProvidersEdgesOutboundroute"></a>

# OutboundRoute putTelephonyProvidersEdgesOutboundroute(outboundRouteId, body)

PUT /api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}

Update outbound route



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var outboundRouteId = "outboundRouteId_example"; // String | Outbound route ID

var body = {}; // Object | OutboundRoute

apiInstance.putTelephonyProvidersEdgesOutboundroute(outboundRouteId, body)
  .then(function(data) {
    console.log(`putTelephonyProvidersEdgesOutboundroute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putTelephonyProvidersEdgesOutboundroute');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **outboundRouteId** | **String** | Outbound route ID |  |
 **body** | **Object** | OutboundRoute |  |
{: class="table table-striped"}

### Return type

**OutboundRoute**

<a name="putTelephonyProvidersEdgesPhone"></a>

# Phone putTelephonyProvidersEdgesPhone(phoneId, body)

PUT /api/v2/telephony/providers/edges/phones/{phoneId}

Update a Phone by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var phoneId = "phoneId_example"; // String | Phone ID

var body = {}; // Object | Phone

apiInstance.putTelephonyProvidersEdgesPhone(phoneId, body)
  .then(function(data) {
    console.log(`putTelephonyProvidersEdgesPhone success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putTelephonyProvidersEdgesPhone');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneId** | **String** | Phone ID |  |
 **body** | **Object** | Phone |  |
{: class="table table-striped"}

### Return type

**Phone**

<a name="putTelephonyProvidersEdgesPhonebasesetting"></a>

# PhoneBase putTelephonyProvidersEdgesPhonebasesetting(phoneBaseId, body)

PUT /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}

Update a Phone Base Settings by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var phoneBaseId = "phoneBaseId_example"; // String | Phone base ID

var body = {}; // Object | Phone base settings

apiInstance.putTelephonyProvidersEdgesPhonebasesetting(phoneBaseId, body)
  .then(function(data) {
    console.log(`putTelephonyProvidersEdgesPhonebasesetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putTelephonyProvidersEdgesPhonebasesetting');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneBaseId** | **String** | Phone base ID |  |
 **body** | **Object** | Phone base settings |  |
{: class="table table-striped"}

### Return type

**PhoneBase**

<a name="putTelephonyProvidersEdgesSite"></a>

# Site putTelephonyProvidersEdgesSite(siteId, body)

PUT /api/v2/telephony/providers/edges/sites/{siteId}

Update a Site by ID.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var siteId = "siteId_example"; // String | Site ID

var body = {}; // Object | Site

apiInstance.putTelephonyProvidersEdgesSite(siteId, body)
  .then(function(data) {
    console.log(`putTelephonyProvidersEdgesSite success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putTelephonyProvidersEdgesSite');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
 **body** | **Object** | Site |  |
{: class="table table-striped"}

### Return type

**Site**

<a name="putTelephonyProvidersEdgesSiteNumberplans"></a>

# [NumberPlan] putTelephonyProvidersEdgesSiteNumberplans(siteId, body)

PUT /api/v2/telephony/providers/edges/sites/{siteId}/numberplans

Update the list of Number Plans.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var siteId = "siteId_example"; // String | Site ID

var body = [{}]; // Object | List of number plans

apiInstance.putTelephonyProvidersEdgesSiteNumberplans(siteId, body)
  .then(function(data) {
    console.log(`putTelephonyProvidersEdgesSiteNumberplans success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putTelephonyProvidersEdgesSiteNumberplans');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
 **body** | **Object** | List of number plans |  |
{: class="table table-striped"}

### Return type

**[NumberPlan]**

<a name="putTelephonyProvidersEdgesSiteOutboundroute"></a>

# OutboundRouteBase putTelephonyProvidersEdgesSiteOutboundroute(siteId, outboundRouteId, body)

PUT /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}

Update outbound route



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var siteId = "siteId_example"; // String | Site ID

var outboundRouteId = "outboundRouteId_example"; // String | Outbound route ID

var body = {}; // Object | OutboundRoute

apiInstance.putTelephonyProvidersEdgesSiteOutboundroute(siteId, outboundRouteId, body)
  .then(function(data) {
    console.log(`putTelephonyProvidersEdgesSiteOutboundroute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putTelephonyProvidersEdgesSiteOutboundroute');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
 **outboundRouteId** | **String** | Outbound route ID |  |
 **body** | **Object** | OutboundRoute |  |
{: class="table table-striped"}

### Return type

**OutboundRouteBase**

<a name="putTelephonyProvidersEdgesTrunkbasesetting"></a>

# TrunkBase putTelephonyProvidersEdgesTrunkbasesetting(trunkBaseSettingsId, body)

PUT /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}

Update a Trunk Base Settings object by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TelephonyProvidersEdgeApi();

var trunkBaseSettingsId = "trunkBaseSettingsId_example"; // String | Trunk Base ID

var body = {}; // Object | Trunk base settings

apiInstance.putTelephonyProvidersEdgesTrunkbasesetting(trunkBaseSettingsId, body)
  .then(function(data) {
    console.log(`putTelephonyProvidersEdgesTrunkbasesetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putTelephonyProvidersEdgesTrunkbasesetting');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trunkBaseSettingsId** | **String** | Trunk Base ID |  |
 **body** | **Object** | Trunk base settings |  |
{: class="table table-striped"}

### Return type

**TrunkBase**

