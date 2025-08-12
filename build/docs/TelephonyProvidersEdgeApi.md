# TelephonyProvidersEdgeApi

# platformClient.TelephonyProvidersEdgeApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteTelephonyProvidersEdge**](TelephonyProvidersEdgeApi#deleteTelephonyProvidersEdge) | **DELETE** /api/v2/telephony/providers/edges/{edgeId} | Delete a edge.
[**deleteTelephonyProvidersEdgeLogicalinterface**](TelephonyProvidersEdgeApi#deleteTelephonyProvidersEdgeLogicalinterface) | **DELETE** /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId} | Delete an edge logical interface
[**deleteTelephonyProvidersEdgeSoftwareupdate**](TelephonyProvidersEdgeApi#deleteTelephonyProvidersEdgeSoftwareupdate) | **DELETE** /api/v2/telephony/providers/edges/{edgeId}/softwareupdate | Cancels any in-progress update for this edge.
[**deleteTelephonyProvidersEdgesAlertablepresences**](TelephonyProvidersEdgeApi#deleteTelephonyProvidersEdgesAlertablepresences) | **DELETE** /api/v2/telephony/providers/edges/alertablepresences | Deletes alertable presences overrides.
[**deleteTelephonyProvidersEdgesCertificateauthority**](TelephonyProvidersEdgeApi#deleteTelephonyProvidersEdgesCertificateauthority) | **DELETE** /api/v2/telephony/providers/edges/certificateauthorities/{certificateId} | Delete a certificate authority.
[**deleteTelephonyProvidersEdgesDidpool**](TelephonyProvidersEdgeApi#deleteTelephonyProvidersEdgesDidpool) | **DELETE** /api/v2/telephony/providers/edges/didpools/{didPoolId} | Delete a DID Pool by ID.
[**deleteTelephonyProvidersEdgesEdgegroup**](TelephonyProvidersEdgeApi#deleteTelephonyProvidersEdgesEdgegroup) | **DELETE** /api/v2/telephony/providers/edges/edgegroups/{edgeGroupId} | Delete an edge group.
[**deleteTelephonyProvidersEdgesExtensionpool**](TelephonyProvidersEdgeApi#deleteTelephonyProvidersEdgesExtensionpool) | **DELETE** /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId} | Delete an extension pool by ID
[**deleteTelephonyProvidersEdgesPhone**](TelephonyProvidersEdgeApi#deleteTelephonyProvidersEdgesPhone) | **DELETE** /api/v2/telephony/providers/edges/phones/{phoneId} | Delete a Phone by ID
[**deleteTelephonyProvidersEdgesPhonebasesetting**](TelephonyProvidersEdgeApi#deleteTelephonyProvidersEdgesPhonebasesetting) | **DELETE** /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId} | Delete a Phone Base Settings by ID
[**deleteTelephonyProvidersEdgesSite**](TelephonyProvidersEdgeApi#deleteTelephonyProvidersEdgesSite) | **DELETE** /api/v2/telephony/providers/edges/sites/{siteId} | Delete a Site by ID
[**deleteTelephonyProvidersEdgesSiteOutboundroute**](TelephonyProvidersEdgeApi#deleteTelephonyProvidersEdgesSiteOutboundroute) | **DELETE** /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId} | Delete Outbound Route
[**deleteTelephonyProvidersEdgesTrunkbasesetting**](TelephonyProvidersEdgeApi#deleteTelephonyProvidersEdgesTrunkbasesetting) | **DELETE** /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId} | Delete a Trunk Base Settings object by ID
[**getTelephonyProvidersEdge**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdge) | **GET** /api/v2/telephony/providers/edges/{edgeId} | Get edge.
[**getTelephonyProvidersEdgeDiagnosticNslookup**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgeDiagnosticNslookup) | **GET** /api/v2/telephony/providers/edges/{edgeId}/diagnostic/nslookup | Get networking-related information from an Edge for a target IP or host.
[**getTelephonyProvidersEdgeDiagnosticPing**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgeDiagnosticPing) | **GET** /api/v2/telephony/providers/edges/{edgeId}/diagnostic/ping | Get networking-related information from an Edge for a target IP or host.
[**getTelephonyProvidersEdgeDiagnosticRoute**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgeDiagnosticRoute) | **GET** /api/v2/telephony/providers/edges/{edgeId}/diagnostic/route | Get networking-related information from an Edge for a target IP or host.
[**getTelephonyProvidersEdgeDiagnosticTracepath**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgeDiagnosticTracepath) | **GET** /api/v2/telephony/providers/edges/{edgeId}/diagnostic/tracepath | Get networking-related information from an Edge for a target IP or host.
[**getTelephonyProvidersEdgeLogicalinterface**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgeLogicalinterface) | **GET** /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId} | Get an edge logical interface
[**getTelephonyProvidersEdgeLogicalinterfaces**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgeLogicalinterfaces) | **GET** /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces | Get edge logical interfaces.
[**getTelephonyProvidersEdgeLogsJob**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgeLogsJob) | **GET** /api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId} | Get an Edge logs job.
[**getTelephonyProvidersEdgeMetrics**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgeMetrics) | **GET** /api/v2/telephony/providers/edges/{edgeId}/metrics | Get the edge metrics.
[**getTelephonyProvidersEdgePhysicalinterface**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgePhysicalinterface) | **GET** /api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces/{interfaceId} | Get edge physical interface.
[**getTelephonyProvidersEdgePhysicalinterfaces**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgePhysicalinterfaces) | **GET** /api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces | Retrieve a list of all configured physical interfaces from a specific edge.
[**getTelephonyProvidersEdgeSetuppackage**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgeSetuppackage) | **GET** /api/v2/telephony/providers/edges/{edgeId}/setuppackage | Get the setup package for a locally deployed edge device. This is needed to complete the setup process for the virtual edge.
[**getTelephonyProvidersEdgeSoftwareupdate**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgeSoftwareupdate) | **GET** /api/v2/telephony/providers/edges/{edgeId}/softwareupdate | Gets software update status information about any edge.
[**getTelephonyProvidersEdgeSoftwareversions**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgeSoftwareversions) | **GET** /api/v2/telephony/providers/edges/{edgeId}/softwareversions | Gets all the available software versions for this edge.
[**getTelephonyProvidersEdgeTrunks**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgeTrunks) | **GET** /api/v2/telephony/providers/edges/{edgeId}/trunks | Get the list of available trunks for the given Edge.
[**getTelephonyProvidersEdges**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdges) | **GET** /api/v2/telephony/providers/edges | Get the list of edges.
[**getTelephonyProvidersEdgesAlertablepresences**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesAlertablepresences) | **GET** /api/v2/telephony/providers/edges/alertablepresences | Get the list alertable presences. The 'type' query parameter can be used to If there are any overrides, this is the list of overrides; if there are no overrides, it is the default list.
[**getTelephonyProvidersEdgesCertificateauthorities**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesCertificateauthorities) | **GET** /api/v2/telephony/providers/edges/certificateauthorities | Get the list of certificate authorities.
[**getTelephonyProvidersEdgesCertificateauthority**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesCertificateauthority) | **GET** /api/v2/telephony/providers/edges/certificateauthorities/{certificateId} | Get a certificate authority.
[**getTelephonyProvidersEdgesDid**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesDid) | **GET** /api/v2/telephony/providers/edges/dids/{didId} | Get a DID by ID.
[**getTelephonyProvidersEdgesDidpool**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesDidpool) | **GET** /api/v2/telephony/providers/edges/didpools/{didPoolId} | Get a DID Pool by ID.
[**getTelephonyProvidersEdgesDidpools**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesDidpools) | **GET** /api/v2/telephony/providers/edges/didpools | Get a listing of DID Pools
[**getTelephonyProvidersEdgesDidpoolsDids**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesDidpoolsDids) | **GET** /api/v2/telephony/providers/edges/didpools/dids | Get a listing of unassigned and/or assigned numbers in a set of DID Pools.
[**getTelephonyProvidersEdgesDids**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesDids) | **GET** /api/v2/telephony/providers/edges/dids | Get a listing of DIDs
[**getTelephonyProvidersEdgesEdgegroup**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesEdgegroup) | **GET** /api/v2/telephony/providers/edges/edgegroups/{edgeGroupId} | Get edge group.
[**getTelephonyProvidersEdgesEdgegroupEdgetrunkbase**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesEdgegroupEdgetrunkbase) | **GET** /api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId} | Gets the edge trunk base associated with the edge group
[**getTelephonyProvidersEdgesEdgegroups**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesEdgegroups) | **GET** /api/v2/telephony/providers/edges/edgegroups | Get the list of edge groups.
[**getTelephonyProvidersEdgesEdgeversionreport**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesEdgeversionreport) | **GET** /api/v2/telephony/providers/edges/edgeversionreport | Get the edge version report.
[**getTelephonyProvidersEdgesExpired**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesExpired) | **GET** /api/v2/telephony/providers/edges/expired | List of edges more than 4 edge versions behind the latest software.
[**getTelephonyProvidersEdgesExtension**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesExtension) | **GET** /api/v2/telephony/providers/edges/extensions/{extensionId} | Get an extension by ID.
[**getTelephonyProvidersEdgesExtensionpool**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesExtensionpool) | **GET** /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId} | Get an extension pool by ID
[**getTelephonyProvidersEdgesExtensionpools**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesExtensionpools) | **GET** /api/v2/telephony/providers/edges/extensionpools | Get a listing of extension pools
[**getTelephonyProvidersEdgesExtensionpoolsDivisionviews**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesExtensionpoolsDivisionviews) | **GET** /api/v2/telephony/providers/edges/extensionpools/divisionviews | Get a pageable list of basic extension pool objects filterable by query parameters.
[**getTelephonyProvidersEdgesExtensions**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesExtensions) | **GET** /api/v2/telephony/providers/edges/extensions | Get a listing of extensions
[**getTelephonyProvidersEdgesLine**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesLine) | **GET** /api/v2/telephony/providers/edges/lines/{lineId} | Get a Line by ID
[**getTelephonyProvidersEdgesLinebasesetting**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesLinebasesetting) | **GET** /api/v2/telephony/providers/edges/linebasesettings/{lineBaseId} | Get a line base settings object by ID
[**getTelephonyProvidersEdgesLinebasesettings**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesLinebasesettings) | **GET** /api/v2/telephony/providers/edges/linebasesettings | Get a listing of line base settings objects
[**getTelephonyProvidersEdgesLines**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesLines) | **GET** /api/v2/telephony/providers/edges/lines | Get a list of Lines
[**getTelephonyProvidersEdgesLinesTemplate**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesLinesTemplate) | **GET** /api/v2/telephony/providers/edges/lines/template | Get a Line instance template based on a Line Base Settings object. This object can then be modified and saved as a new Line instance
[**getTelephonyProvidersEdgesLogicalinterfaces**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesLogicalinterfaces) | **GET** /api/v2/telephony/providers/edges/logicalinterfaces | Get edge logical interfaces.
[**getTelephonyProvidersEdgesMediastatisticsConversation**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesMediastatisticsConversation) | **GET** /api/v2/telephony/providers/edges/mediastatistics/conversations/{conversationId} | Get media endpoint statistics events.
[**getTelephonyProvidersEdgesMediastatisticsConversationCommunication**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesMediastatisticsConversationCommunication) | **GET** /api/v2/telephony/providers/edges/mediastatistics/conversations/{conversationId}/communications/{communicationId} | Get media endpoint statistics event.
[**getTelephonyProvidersEdgesMetrics**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesMetrics) | **GET** /api/v2/telephony/providers/edges/metrics | Get the metrics for a list of edges.
[**getTelephonyProvidersEdgesOutboundroutes**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesOutboundroutes) | **GET** /api/v2/telephony/providers/edges/outboundroutes | Get outbound routes
[**getTelephonyProvidersEdgesPhone**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesPhone) | **GET** /api/v2/telephony/providers/edges/phones/{phoneId} | Get a Phone by ID
[**getTelephonyProvidersEdgesPhonebasesetting**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesPhonebasesetting) | **GET** /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId} | Get a Phone Base Settings object by ID
[**getTelephonyProvidersEdgesPhonebasesettings**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesPhonebasesettings) | **GET** /api/v2/telephony/providers/edges/phonebasesettings | Get a list of Phone Base Settings objects
[**getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases) | **GET** /api/v2/telephony/providers/edges/phonebasesettings/availablemetabases | Get a list of available makes and models to create a new Phone Base Settings
[**getTelephonyProvidersEdgesPhonebasesettingsTemplate**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesPhonebasesettingsTemplate) | **GET** /api/v2/telephony/providers/edges/phonebasesettings/template | Get a Phone Base Settings instance template from a given make and model. This object can then be modified and saved as a new Phone Base Settings instance
[**getTelephonyProvidersEdgesPhones**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesPhones) | **GET** /api/v2/telephony/providers/edges/phones | Get a list of Phone Instances. A maximum of 10,000 results is returned when filtering the results or sorting by a field other than the ID. Sorting by only the ID has no result limit. Each filter supports a wildcard, *, as a value to search for partial values.
[**getTelephonyProvidersEdgesPhonesTemplate**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesPhonesTemplate) | **GET** /api/v2/telephony/providers/edges/phones/template | Get a Phone instance template based on a Phone Base Settings object. This object can then be modified and saved as a new Phone instance
[**getTelephonyProvidersEdgesPhysicalinterfaces**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesPhysicalinterfaces) | **GET** /api/v2/telephony/providers/edges/physicalinterfaces | Get physical interfaces for edges.
[**getTelephonyProvidersEdgesSite**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesSite) | **GET** /api/v2/telephony/providers/edges/sites/{siteId} | Get a Site by ID.
[**getTelephonyProvidersEdgesSiteNumberplan**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesSiteNumberplan) | **GET** /api/v2/telephony/providers/edges/sites/{siteId}/numberplans/{numberPlanId} | Get a Number Plan by ID.
[**getTelephonyProvidersEdgesSiteNumberplans**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesSiteNumberplans) | **GET** /api/v2/telephony/providers/edges/sites/{siteId}/numberplans | Get the list of Number Plans for this Site. Only fetches the first 200 records.
[**getTelephonyProvidersEdgesSiteNumberplansClassifications**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesSiteNumberplansClassifications) | **GET** /api/v2/telephony/providers/edges/sites/{siteId}/numberplans/classifications | Get a list of Classifications for this Site
[**getTelephonyProvidersEdgesSiteOutboundroute**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesSiteOutboundroute) | **GET** /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId} | Get an outbound route
[**getTelephonyProvidersEdgesSiteOutboundroutes**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesSiteOutboundroutes) | **GET** /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes | Get outbound routes
[**getTelephonyProvidersEdgesSiteSiteconnections**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesSiteSiteconnections) | **GET** /api/v2/telephony/providers/edges/sites/{siteId}/siteconnections | Get site connections for a site.
[**getTelephonyProvidersEdgesSites**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesSites) | **GET** /api/v2/telephony/providers/edges/sites | Get the list of Sites.
[**getTelephonyProvidersEdgesSitesSearch**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesSitesSearch) | **GET** /api/v2/telephony/providers/edges/sites/search | Search sites using the q64 value returned from a previous search
[**getTelephonyProvidersEdgesTimezones**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesTimezones) | **GET** /api/v2/telephony/providers/edges/timezones | Get a list of Edge-compatible time zones
[**getTelephonyProvidersEdgesTrunk**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesTrunk) | **GET** /api/v2/telephony/providers/edges/trunks/{trunkId} | Get a Trunk by ID
[**getTelephonyProvidersEdgesTrunkMetrics**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesTrunkMetrics) | **GET** /api/v2/telephony/providers/edges/trunks/{trunkId}/metrics | Get the trunk metrics.
[**getTelephonyProvidersEdgesTrunkbasesetting**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesTrunkbasesetting) | **GET** /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId} | Get a Trunk Base Settings object by ID
[**getTelephonyProvidersEdgesTrunkbasesettings**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesTrunkbasesettings) | **GET** /api/v2/telephony/providers/edges/trunkbasesettings | Get Trunk Base Settings listing
[**getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases) | **GET** /api/v2/telephony/providers/edges/trunkbasesettings/availablemetabases | Get a list of available makes and models to create a new Trunk Base Settings
[**getTelephonyProvidersEdgesTrunkbasesettingsTemplate**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesTrunkbasesettingsTemplate) | **GET** /api/v2/telephony/providers/edges/trunkbasesettings/template | Get a Trunk Base Settings instance template from a given make and model. This object can then be modified and saved as a new Trunk Base Settings instance
[**getTelephonyProvidersEdgesTrunks**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesTrunks) | **GET** /api/v2/telephony/providers/edges/trunks | Get the list of available trunks.
[**getTelephonyProvidersEdgesTrunksMetrics**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesTrunksMetrics) | **GET** /api/v2/telephony/providers/edges/trunks/metrics | Get the metrics for a list of trunks.
[**getTelephonyProvidersEdgesTrunkswithrecording**](TelephonyProvidersEdgeApi#getTelephonyProvidersEdgesTrunkswithrecording) | **GET** /api/v2/telephony/providers/edges/trunkswithrecording | Get Counts of trunks that have recording disabled or enabled
[**patchTelephonyProvidersEdgesSiteSiteconnections**](TelephonyProvidersEdgeApi#patchTelephonyProvidersEdgesSiteSiteconnections) | **PATCH** /api/v2/telephony/providers/edges/sites/{siteId}/siteconnections | Disable site connections for a site.
[**postTelephonyProvidersEdgeDiagnosticNslookup**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgeDiagnosticNslookup) | **POST** /api/v2/telephony/providers/edges/{edgeId}/diagnostic/nslookup | Nslookup request command to collect networking-related information from an Edge for a target IP or host.
[**postTelephonyProvidersEdgeDiagnosticPing**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgeDiagnosticPing) | **POST** /api/v2/telephony/providers/edges/{edgeId}/diagnostic/ping | Ping Request command to collect networking-related information from an Edge for a target IP or host.
[**postTelephonyProvidersEdgeDiagnosticRoute**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgeDiagnosticRoute) | **POST** /api/v2/telephony/providers/edges/{edgeId}/diagnostic/route | Route request command to collect networking-related information from an Edge for a target IP or host.
[**postTelephonyProvidersEdgeDiagnosticTracepath**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgeDiagnosticTracepath) | **POST** /api/v2/telephony/providers/edges/{edgeId}/diagnostic/tracepath | Tracepath request command to collect networking-related information from an Edge for a target IP or host.
[**postTelephonyProvidersEdgeLogicalinterfaces**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgeLogicalinterfaces) | **POST** /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces | Create an edge logical interface.
[**postTelephonyProvidersEdgeLogsJobUpload**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgeLogsJobUpload) | **POST** /api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}/upload | Request that the specified fileIds be uploaded from the Edge.
[**postTelephonyProvidersEdgeLogsJobs**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgeLogsJobs) | **POST** /api/v2/telephony/providers/edges/{edgeId}/logs/jobs | Create a job to upload a list of Edge logs.
[**postTelephonyProvidersEdgeReboot**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgeReboot) | **POST** /api/v2/telephony/providers/edges/{edgeId}/reboot | Reboot an Edge
[**postTelephonyProvidersEdgeSoftwareupdate**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgeSoftwareupdate) | **POST** /api/v2/telephony/providers/edges/{edgeId}/softwareupdate | Starts a software update for this edge.
[**postTelephonyProvidersEdgeStatuscode**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgeStatuscode) | **POST** /api/v2/telephony/providers/edges/{edgeId}/statuscode | Take an Edge in or out of service
[**postTelephonyProvidersEdgeUnpair**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgeUnpair) | **POST** /api/v2/telephony/providers/edges/{edgeId}/unpair | Unpair an Edge
[**postTelephonyProvidersEdges**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdges) | **POST** /api/v2/telephony/providers/edges | Create an edge.
[**postTelephonyProvidersEdgesAddressvalidation**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgesAddressvalidation) | **POST** /api/v2/telephony/providers/edges/addressvalidation | Validates a street address
[**postTelephonyProvidersEdgesCertificateauthorities**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgesCertificateauthorities) | **POST** /api/v2/telephony/providers/edges/certificateauthorities | Create a certificate authority.
[**postTelephonyProvidersEdgesDidpools**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgesDidpools) | **POST** /api/v2/telephony/providers/edges/didpools | Create a new DID pool
[**postTelephonyProvidersEdgesEdgegroups**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgesEdgegroups) | **POST** /api/v2/telephony/providers/edges/edgegroups | Create an edge group.
[**postTelephonyProvidersEdgesExtensionpools**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgesExtensionpools) | **POST** /api/v2/telephony/providers/edges/extensionpools | Create a new extension pool
[**postTelephonyProvidersEdgesMediastatisticsConversationCommunicationMediaresource**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgesMediastatisticsConversationCommunicationMediaresource) | **POST** /api/v2/telephony/providers/edges/mediastatistics/conversations/{conversationId}/communications/{communicationId}/mediaresources/{mediaResourceId} | Post media endpoint statistics event.
[**postTelephonyProvidersEdgesPhoneReboot**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgesPhoneReboot) | **POST** /api/v2/telephony/providers/edges/phones/{phoneId}/reboot | Reboot a Phone
[**postTelephonyProvidersEdgesPhonebasesettings**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgesPhonebasesettings) | **POST** /api/v2/telephony/providers/edges/phonebasesettings | Create a new Phone Base Settings object
[**postTelephonyProvidersEdgesPhones**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgesPhones) | **POST** /api/v2/telephony/providers/edges/phones | Create a new Phone
[**postTelephonyProvidersEdgesPhonesReboot**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgesPhonesReboot) | **POST** /api/v2/telephony/providers/edges/phones/reboot | Reboot Multiple Phones
[**postTelephonyProvidersEdgesSiteOutboundroutes**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgesSiteOutboundroutes) | **POST** /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes | Create outbound route
[**postTelephonyProvidersEdgesSites**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgesSites) | **POST** /api/v2/telephony/providers/edges/sites | Create a Site.
[**postTelephonyProvidersEdgesSitesSearch**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgesSitesSearch) | **POST** /api/v2/telephony/providers/edges/sites/search | Search sites
[**postTelephonyProvidersEdgesTrunkbasesettings**](TelephonyProvidersEdgeApi#postTelephonyProvidersEdgesTrunkbasesettings) | **POST** /api/v2/telephony/providers/edges/trunkbasesettings | Create a Trunk Base Settings object
[**putTelephonyProvidersEdge**](TelephonyProvidersEdgeApi#putTelephonyProvidersEdge) | **PUT** /api/v2/telephony/providers/edges/{edgeId} | Update a edge.
[**putTelephonyProvidersEdgeLogicalinterface**](TelephonyProvidersEdgeApi#putTelephonyProvidersEdgeLogicalinterface) | **PUT** /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId} | Update an edge logical interface.
[**putTelephonyProvidersEdgesAlertablepresences**](TelephonyProvidersEdgeApi#putTelephonyProvidersEdgesAlertablepresences) | **PUT** /api/v2/telephony/providers/edges/alertablepresences | Creates or updates alertable presences overrides.
[**putTelephonyProvidersEdgesCertificateauthority**](TelephonyProvidersEdgeApi#putTelephonyProvidersEdgesCertificateauthority) | **PUT** /api/v2/telephony/providers/edges/certificateauthorities/{certificateId} | Update a certificate authority.
[**putTelephonyProvidersEdgesDidpool**](TelephonyProvidersEdgeApi#putTelephonyProvidersEdgesDidpool) | **PUT** /api/v2/telephony/providers/edges/didpools/{didPoolId} | Update a DID Pool by ID.
[**putTelephonyProvidersEdgesEdgegroup**](TelephonyProvidersEdgeApi#putTelephonyProvidersEdgesEdgegroup) | **PUT** /api/v2/telephony/providers/edges/edgegroups/{edgeGroupId} | Update an edge group.
[**putTelephonyProvidersEdgesEdgegroupEdgetrunkbase**](TelephonyProvidersEdgeApi#putTelephonyProvidersEdgesEdgegroupEdgetrunkbase) | **PUT** /api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId} | Update the edge trunk base associated with the edge group
[**putTelephonyProvidersEdgesExtensionpool**](TelephonyProvidersEdgeApi#putTelephonyProvidersEdgesExtensionpool) | **PUT** /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId} | Update an extension pool by ID
[**putTelephonyProvidersEdgesPhone**](TelephonyProvidersEdgeApi#putTelephonyProvidersEdgesPhone) | **PUT** /api/v2/telephony/providers/edges/phones/{phoneId} | Update a Phone by ID
[**putTelephonyProvidersEdgesPhonebasesetting**](TelephonyProvidersEdgeApi#putTelephonyProvidersEdgesPhonebasesetting) | **PUT** /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId} | Update a Phone Base Settings by ID
[**putTelephonyProvidersEdgesSite**](TelephonyProvidersEdgeApi#putTelephonyProvidersEdgesSite) | **PUT** /api/v2/telephony/providers/edges/sites/{siteId} | Update a Site by ID.
[**putTelephonyProvidersEdgesSiteNumberplans**](TelephonyProvidersEdgeApi#putTelephonyProvidersEdgesSiteNumberplans) | **PUT** /api/v2/telephony/providers/edges/sites/{siteId}/numberplans | Update the list of Number Plans. A user can update maximum 200 number plans at a time.
[**putTelephonyProvidersEdgesSiteOutboundroute**](TelephonyProvidersEdgeApi#putTelephonyProvidersEdgesSiteOutboundroute) | **PUT** /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId} | Update outbound route
[**putTelephonyProvidersEdgesSiteSiteconnections**](TelephonyProvidersEdgeApi#putTelephonyProvidersEdgesSiteSiteconnections) | **PUT** /api/v2/telephony/providers/edges/sites/{siteId}/siteconnections | Update site connections for a site.
[**putTelephonyProvidersEdgesTrunkbasesetting**](TelephonyProvidersEdgeApi#putTelephonyProvidersEdgesTrunkbasesetting) | **PUT** /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId} | Update a Trunk Base Settings object by ID



## deleteTelephonyProvidersEdge

> void deleteTelephonyProvidersEdge(edgeId)


DELETE /api/v2/telephony/providers/edges/{edgeId}

Delete a edge.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge ID

apiInstance.deleteTelephonyProvidersEdge(edgeId)
  .then(() => {
    console.log('deleteTelephonyProvidersEdge returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTelephonyProvidersEdge');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |

### Return type

void (no response body)


## deleteTelephonyProvidersEdgeLogicalinterface

> void deleteTelephonyProvidersEdgeLogicalinterface(edgeId, interfaceId)


DELETE /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}

Delete an edge logical interface

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge ID
let interfaceId = "interfaceId_example"; // String | Interface ID

apiInstance.deleteTelephonyProvidersEdgeLogicalinterface(edgeId, interfaceId)
  .then(() => {
    console.log('deleteTelephonyProvidersEdgeLogicalinterface returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTelephonyProvidersEdgeLogicalinterface');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **interfaceId** | **String** | Interface ID |  |

### Return type

void (no response body)


## deleteTelephonyProvidersEdgeSoftwareupdate

> void deleteTelephonyProvidersEdgeSoftwareupdate(edgeId)


DELETE /api/v2/telephony/providers/edges/{edgeId}/softwareupdate

Cancels any in-progress update for this edge.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge ID

apiInstance.deleteTelephonyProvidersEdgeSoftwareupdate(edgeId)
  .then(() => {
    console.log('deleteTelephonyProvidersEdgeSoftwareupdate returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTelephonyProvidersEdgeSoftwareupdate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |

### Return type

void (no response body)


## deleteTelephonyProvidersEdgesAlertablepresences

> void deleteTelephonyProvidersEdgesAlertablepresences()


DELETE /api/v2/telephony/providers/edges/alertablepresences

Deletes alertable presences overrides.

Requires ANY permissions:

* telephony:alertablePresences:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

apiInstance.deleteTelephonyProvidersEdgesAlertablepresences()
  .then(() => {
    console.log('deleteTelephonyProvidersEdgesAlertablepresences returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTelephonyProvidersEdgesAlertablepresences');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

void (no response body)


## deleteTelephonyProvidersEdgesCertificateauthority

> void deleteTelephonyProvidersEdgesCertificateauthority(certificateId)


DELETE /api/v2/telephony/providers/edges/certificateauthorities/{certificateId}

Delete a certificate authority.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let certificateId = "certificateId_example"; // String | Certificate ID

apiInstance.deleteTelephonyProvidersEdgesCertificateauthority(certificateId)
  .then(() => {
    console.log('deleteTelephonyProvidersEdgesCertificateauthority returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTelephonyProvidersEdgesCertificateauthority');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **certificateId** | **String** | Certificate ID |  |

### Return type

void (no response body)


## deleteTelephonyProvidersEdgesDidpool

> void deleteTelephonyProvidersEdgesDidpool(didPoolId)


DELETE /api/v2/telephony/providers/edges/didpools/{didPoolId}

Delete a DID Pool by ID.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let didPoolId = "didPoolId_example"; // String | DID pool ID

apiInstance.deleteTelephonyProvidersEdgesDidpool(didPoolId)
  .then(() => {
    console.log('deleteTelephonyProvidersEdgesDidpool returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTelephonyProvidersEdgesDidpool');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **didPoolId** | **String** | DID pool ID |  |

### Return type

void (no response body)


## deleteTelephonyProvidersEdgesEdgegroup

> void deleteTelephonyProvidersEdgesEdgegroup(edgeGroupId)


DELETE /api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}

Delete an edge group.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeGroupId = "edgeGroupId_example"; // String | Edge group ID

apiInstance.deleteTelephonyProvidersEdgesEdgegroup(edgeGroupId)
  .then(() => {
    console.log('deleteTelephonyProvidersEdgesEdgegroup returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTelephonyProvidersEdgesEdgegroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeGroupId** | **String** | Edge group ID |  |

### Return type

void (no response body)


## deleteTelephonyProvidersEdgesExtensionpool

> void deleteTelephonyProvidersEdgesExtensionpool(extensionPoolId)


DELETE /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}

Delete an extension pool by ID

Requires ALL permissions:

* telephony:extensionPool:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let extensionPoolId = "extensionPoolId_example"; // String | Extension pool ID

apiInstance.deleteTelephonyProvidersEdgesExtensionpool(extensionPoolId)
  .then(() => {
    console.log('deleteTelephonyProvidersEdgesExtensionpool returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTelephonyProvidersEdgesExtensionpool');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **extensionPoolId** | **String** | Extension pool ID |  |

### Return type

void (no response body)


## deleteTelephonyProvidersEdgesPhone

> void deleteTelephonyProvidersEdgesPhone(phoneId)


DELETE /api/v2/telephony/providers/edges/phones/{phoneId}

Delete a Phone by ID

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let phoneId = "phoneId_example"; // String | Phone ID

apiInstance.deleteTelephonyProvidersEdgesPhone(phoneId)
  .then(() => {
    console.log('deleteTelephonyProvidersEdgesPhone returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTelephonyProvidersEdgesPhone');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneId** | **String** | Phone ID |  |

### Return type

void (no response body)


## deleteTelephonyProvidersEdgesPhonebasesetting

> void deleteTelephonyProvidersEdgesPhonebasesetting(phoneBaseId)


DELETE /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}

Delete a Phone Base Settings by ID

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let phoneBaseId = "phoneBaseId_example"; // String | Phone base ID

apiInstance.deleteTelephonyProvidersEdgesPhonebasesetting(phoneBaseId)
  .then(() => {
    console.log('deleteTelephonyProvidersEdgesPhonebasesetting returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTelephonyProvidersEdgesPhonebasesetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneBaseId** | **String** | Phone base ID |  |

### Return type

void (no response body)


## deleteTelephonyProvidersEdgesSite

> void deleteTelephonyProvidersEdgesSite(siteId)


DELETE /api/v2/telephony/providers/edges/sites/{siteId}

Delete a Site by ID

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let siteId = "siteId_example"; // String | Site ID

apiInstance.deleteTelephonyProvidersEdgesSite(siteId)
  .then(() => {
    console.log('deleteTelephonyProvidersEdgesSite returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTelephonyProvidersEdgesSite');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |

### Return type

void (no response body)


## deleteTelephonyProvidersEdgesSiteOutboundroute

> void deleteTelephonyProvidersEdgesSiteOutboundroute(siteId, outboundRouteId)


DELETE /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}

Delete Outbound Route

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let siteId = "siteId_example"; // String | Site ID
let outboundRouteId = "outboundRouteId_example"; // String | Outbound route ID

apiInstance.deleteTelephonyProvidersEdgesSiteOutboundroute(siteId, outboundRouteId)
  .then(() => {
    console.log('deleteTelephonyProvidersEdgesSiteOutboundroute returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTelephonyProvidersEdgesSiteOutboundroute');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
 **outboundRouteId** | **String** | Outbound route ID |  |

### Return type

void (no response body)


## deleteTelephonyProvidersEdgesTrunkbasesetting

> void deleteTelephonyProvidersEdgesTrunkbasesetting(trunkBaseSettingsId)


DELETE /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}

Delete a Trunk Base Settings object by ID

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let trunkBaseSettingsId = "trunkBaseSettingsId_example"; // String | Trunk Base ID

apiInstance.deleteTelephonyProvidersEdgesTrunkbasesetting(trunkBaseSettingsId)
  .then(() => {
    console.log('deleteTelephonyProvidersEdgesTrunkbasesetting returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTelephonyProvidersEdgesTrunkbasesetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trunkBaseSettingsId** | **String** | Trunk Base ID |  |

### Return type

void (no response body)


## getTelephonyProvidersEdge

> Edge getTelephonyProvidersEdge(edgeId, opts)


GET /api/v2/telephony/providers/edges/{edgeId}

Get edge.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge ID
let opts = { 
  'expand': ["expand_example"] // [String] | Fields to expand in the response, comma-separated
};

apiInstance.getTelephonyProvidersEdge(edgeId, opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdge success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdge');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **expand** | **[String]** | Fields to expand in the response, comma-separated | [optional] <br />**Values**: site |

### Return type

**Edge**


## getTelephonyProvidersEdgeDiagnosticNslookup

> EdgeNetworkDiagnosticResponse getTelephonyProvidersEdgeDiagnosticNslookup(edgeId)


GET /api/v2/telephony/providers/edges/{edgeId}/diagnostic/nslookup

Get networking-related information from an Edge for a target IP or host.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge Id

apiInstance.getTelephonyProvidersEdgeDiagnosticNslookup(edgeId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgeDiagnosticNslookup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgeDiagnosticNslookup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge Id |  |

### Return type

**EdgeNetworkDiagnosticResponse**


## getTelephonyProvidersEdgeDiagnosticPing

> EdgeNetworkDiagnosticResponse getTelephonyProvidersEdgeDiagnosticPing(edgeId)


GET /api/v2/telephony/providers/edges/{edgeId}/diagnostic/ping

Get networking-related information from an Edge for a target IP or host.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge Id

apiInstance.getTelephonyProvidersEdgeDiagnosticPing(edgeId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgeDiagnosticPing success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgeDiagnosticPing');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge Id |  |

### Return type

**EdgeNetworkDiagnosticResponse**


## getTelephonyProvidersEdgeDiagnosticRoute

> EdgeNetworkDiagnosticResponse getTelephonyProvidersEdgeDiagnosticRoute(edgeId)


GET /api/v2/telephony/providers/edges/{edgeId}/diagnostic/route

Get networking-related information from an Edge for a target IP or host.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge Id

apiInstance.getTelephonyProvidersEdgeDiagnosticRoute(edgeId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgeDiagnosticRoute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgeDiagnosticRoute');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge Id |  |

### Return type

**EdgeNetworkDiagnosticResponse**


## getTelephonyProvidersEdgeDiagnosticTracepath

> EdgeNetworkDiagnosticResponse getTelephonyProvidersEdgeDiagnosticTracepath(edgeId)


GET /api/v2/telephony/providers/edges/{edgeId}/diagnostic/tracepath

Get networking-related information from an Edge for a target IP or host.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge Id

apiInstance.getTelephonyProvidersEdgeDiagnosticTracepath(edgeId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgeDiagnosticTracepath success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgeDiagnosticTracepath');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge Id |  |

### Return type

**EdgeNetworkDiagnosticResponse**


## getTelephonyProvidersEdgeLogicalinterface

> DomainLogicalInterface getTelephonyProvidersEdgeLogicalinterface(edgeId, interfaceId, opts)


GET /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}

Get an edge logical interface

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge ID
let interfaceId = "interfaceId_example"; // String | Interface ID
let opts = { 
  'expand': ["expand_example"] // [String] | Field to expand in the response
};

apiInstance.getTelephonyProvidersEdgeLogicalinterface(edgeId, interfaceId, opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgeLogicalinterface success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgeLogicalinterface');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **interfaceId** | **String** | Interface ID |  |
 **expand** | **[String]** | Field to expand in the response | [optional] <br />**Values**: externalTrunkBaseAssignments, phoneTrunkBaseAssignments |

### Return type

**DomainLogicalInterface**


## getTelephonyProvidersEdgeLogicalinterfaces

> LogicalInterfaceEntityListing getTelephonyProvidersEdgeLogicalinterfaces(edgeId, opts)


GET /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces

Get edge logical interfaces.

Retrieve a list of all configured logical interfaces from a specific edge.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge ID
let opts = { 
  'expand': ["expand_example"] // [String] | Field to expand in the response
};

apiInstance.getTelephonyProvidersEdgeLogicalinterfaces(edgeId, opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgeLogicalinterfaces success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgeLogicalinterfaces');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **expand** | **[String]** | Field to expand in the response | [optional] <br />**Values**: externalTrunkBaseAssignments, phoneTrunkBaseAssignments |

### Return type

**LogicalInterfaceEntityListing**


## getTelephonyProvidersEdgeLogsJob

> EdgeLogsJob getTelephonyProvidersEdgeLogsJob(edgeId, jobId)


GET /api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}

Get an Edge logs job.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge ID
let jobId = "jobId_example"; // String | Job ID

apiInstance.getTelephonyProvidersEdgeLogsJob(edgeId, jobId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgeLogsJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgeLogsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **jobId** | **String** | Job ID |  |

### Return type

**EdgeLogsJob**


## getTelephonyProvidersEdgeMetrics

> EdgeMetrics getTelephonyProvidersEdgeMetrics(edgeId)


GET /api/v2/telephony/providers/edges/{edgeId}/metrics

Get the edge metrics.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge Id

apiInstance.getTelephonyProvidersEdgeMetrics(edgeId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgeMetrics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgeMetrics');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge Id |  |

### Return type

**EdgeMetrics**


## getTelephonyProvidersEdgePhysicalinterface

> DomainPhysicalInterface getTelephonyProvidersEdgePhysicalinterface(edgeId, interfaceId)


GET /api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces/{interfaceId}

Get edge physical interface.

Retrieve a physical interface from a specific edge.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge ID
let interfaceId = "interfaceId_example"; // String | Interface ID

apiInstance.getTelephonyProvidersEdgePhysicalinterface(edgeId, interfaceId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgePhysicalinterface success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgePhysicalinterface');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **interfaceId** | **String** | Interface ID |  |

### Return type

**DomainPhysicalInterface**


## getTelephonyProvidersEdgePhysicalinterfaces

> PhysicalInterfaceEntityListing getTelephonyProvidersEdgePhysicalinterfaces(edgeId)


GET /api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces

Retrieve a list of all configured physical interfaces from a specific edge.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge ID

apiInstance.getTelephonyProvidersEdgePhysicalinterfaces(edgeId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgePhysicalinterfaces success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgePhysicalinterfaces');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |

### Return type

**PhysicalInterfaceEntityListing**


## getTelephonyProvidersEdgeSetuppackage

> VmPairingInfo getTelephonyProvidersEdgeSetuppackage(edgeId)


GET /api/v2/telephony/providers/edges/{edgeId}/setuppackage

Get the setup package for a locally deployed edge device. This is needed to complete the setup process for the virtual edge.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge ID

apiInstance.getTelephonyProvidersEdgeSetuppackage(edgeId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgeSetuppackage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgeSetuppackage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |

### Return type

**VmPairingInfo**


## getTelephonyProvidersEdgeSoftwareupdate

> DomainEdgeSoftwareUpdateDto getTelephonyProvidersEdgeSoftwareupdate(edgeId)


GET /api/v2/telephony/providers/edges/{edgeId}/softwareupdate

Gets software update status information about any edge.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge ID

apiInstance.getTelephonyProvidersEdgeSoftwareupdate(edgeId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgeSoftwareupdate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgeSoftwareupdate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |

### Return type

**DomainEdgeSoftwareUpdateDto**


## getTelephonyProvidersEdgeSoftwareversions

> DomainEdgeSoftwareVersionDtoEntityListing getTelephonyProvidersEdgeSoftwareversions(edgeId)


GET /api/v2/telephony/providers/edges/{edgeId}/softwareversions

Gets all the available software versions for this edge.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge ID

apiInstance.getTelephonyProvidersEdgeSoftwareversions(edgeId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgeSoftwareversions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgeSoftwareversions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |

### Return type

**DomainEdgeSoftwareVersionDtoEntityListing**


## getTelephonyProvidersEdgeTrunks

> TrunkEntityListing getTelephonyProvidersEdgeTrunks(edgeId, opts)


GET /api/v2/telephony/providers/edges/{edgeId}/trunks

Get the list of available trunks for the given Edge.

Trunks are created by assigning trunk base settings to an Edge or Edge Group.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge ID
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Value by which to sort
  'sortOrder': "ASC", // String | Sort order
  'trunkBaseId': "trunkBaseId_example", // String | Filter by Trunk Base Ids
  'trunkType': "trunkType_example" // String | Filter by a Trunk type
};

apiInstance.getTelephonyProvidersEdgeTrunks(edgeId, opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgeTrunks success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgeTrunks');
    console.error(err);
  });
```

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

### Return type

**TrunkEntityListing**


## getTelephonyProvidersEdges

> EdgeEntityListing getTelephonyProvidersEdges(opts)


GET /api/v2/telephony/providers/edges

Get the list of edges.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'name': "name_example", // String | Name
  'siteId': "siteId_example", // String | Filter by site.id
  'edgeGroupId': "edgeGroupId_example", // String | Filter by edgeGroup.id
  'sortBy': "name", // String | Sort by
  'managed': true, // Boolean | Filter by managed
  'showCloudMedia': true // Boolean | True to show the cloud media devices in the result.
};

apiInstance.getTelephonyProvidersEdges(opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdges success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdges');
    console.error(err);
  });
```

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
 **showCloudMedia** | **Boolean** | True to show the cloud media devices in the result. | [optional] [default to true] |

### Return type

**EdgeEntityListing**


## getTelephonyProvidersEdgesAlertablepresences

> AlertablePresences getTelephonyProvidersEdgesAlertablepresences(opts)


GET /api/v2/telephony/providers/edges/alertablepresences

Get the list alertable presences. The 'type' query parameter can be used to If there are any overrides, this is the list of overrides; if there are no overrides, it is the default list.

Requires ANY permissions:

* telephony:alertablePresences:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let opts = { 
  'type': "type_example" // String | 
};

apiInstance.getTelephonyProvidersEdgesAlertablepresences(opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesAlertablepresences success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesAlertablepresences');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **type** | **String** |  | [optional] <br />**Values**: defaults, overrides |

### Return type

**AlertablePresences**


## getTelephonyProvidersEdgesCertificateauthorities

> CertificateAuthorityEntityListing getTelephonyProvidersEdgesCertificateauthorities()


GET /api/v2/telephony/providers/edges/certificateauthorities

Get the list of certificate authorities.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

apiInstance.getTelephonyProvidersEdgesCertificateauthorities()
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesCertificateauthorities success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesCertificateauthorities');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**CertificateAuthorityEntityListing**


## getTelephonyProvidersEdgesCertificateauthority

> DomainCertificateAuthority getTelephonyProvidersEdgesCertificateauthority(certificateId)


GET /api/v2/telephony/providers/edges/certificateauthorities/{certificateId}

Get a certificate authority.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let certificateId = "certificateId_example"; // String | Certificate ID

apiInstance.getTelephonyProvidersEdgesCertificateauthority(certificateId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesCertificateauthority success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesCertificateauthority');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **certificateId** | **String** | Certificate ID |  |

### Return type

**DomainCertificateAuthority**


## getTelephonyProvidersEdgesDid

> DID getTelephonyProvidersEdgesDid(didId)


GET /api/v2/telephony/providers/edges/dids/{didId}

Get a DID by ID.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let didId = "didId_example"; // String | DID ID

apiInstance.getTelephonyProvidersEdgesDid(didId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesDid success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesDid');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **didId** | **String** | DID ID |  |

### Return type

**DID**


## getTelephonyProvidersEdgesDidpool

> DIDPool getTelephonyProvidersEdgesDidpool(didPoolId)


GET /api/v2/telephony/providers/edges/didpools/{didPoolId}

Get a DID Pool by ID.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let didPoolId = "didPoolId_example"; // String | DID pool ID

apiInstance.getTelephonyProvidersEdgesDidpool(didPoolId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesDidpool success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesDidpool');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **didPoolId** | **String** | DID pool ID |  |

### Return type

**DIDPool**


## getTelephonyProvidersEdgesDidpools

> DIDPoolEntityListing getTelephonyProvidersEdgesDidpools(opts)


GET /api/v2/telephony/providers/edges/didpools

Get a listing of DID Pools

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "number", // String | Sort by
  'id': ["id_example"] // [String] | Filter by a specific list of ID's
};

apiInstance.getTelephonyProvidersEdgesDidpools(opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesDidpools success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesDidpools');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to number] |
 **id** | **[String]** | Filter by a specific list of ID's | [optional]  |

### Return type

**DIDPoolEntityListing**


## getTelephonyProvidersEdgesDidpoolsDids

> DIDNumberEntityListing getTelephonyProvidersEdgesDidpoolsDids(type, opts)


GET /api/v2/telephony/providers/edges/didpools/dids

Get a listing of unassigned and/or assigned numbers in a set of DID Pools.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let type = "type_example"; // String | The type of numbers to return.
let opts = { 
  'id': ["id_example"], // [String] | Filter by a specific list of DID Pools.  If this is not provided, numbers from all DID Pools will be returned.
  'numberMatch': "numberMatch_example", // String | A number to filter the results by.
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ascending" // String | Sort order
};

apiInstance.getTelephonyProvidersEdgesDidpoolsDids(type, opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesDidpoolsDids success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesDidpoolsDids');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **type** | **String** | The type of numbers to return. | <br />**Values**: ASSIGNED_AND_UNASSIGNED, UNASSIGNED |
 **id** | **[String]** | Filter by a specific list of DID Pools.  If this is not provided, numbers from all DID Pools will be returned. | [optional]  |
 **numberMatch** | **String** | A number to filter the results by. | [optional]  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Sort order | [optional] [default to ascending] |

### Return type

**DIDNumberEntityListing**


## getTelephonyProvidersEdgesDids

> DIDEntityListing getTelephonyProvidersEdgesDids(opts)


GET /api/v2/telephony/providers/edges/dids

Get a listing of DIDs

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "number", // String | Sort by
  'sortOrder': "ASC", // String | Sort order
  'phoneNumber': "phoneNumber_example", // String | Filter by phoneNumber
  'ownerId': "ownerId_example", // String | Filter by the owner of a phone number
  'didPoolId': "didPoolId_example", // String | Filter by the DID Pool assignment
  'id': ["id_example"] // [String] | Filter by a specific list of ID's
};

apiInstance.getTelephonyProvidersEdgesDids(opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesDids success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesDids');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to number] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **phoneNumber** | **String** | Filter by phoneNumber | [optional]  |
 **ownerId** | **String** | Filter by the owner of a phone number | [optional]  |
 **didPoolId** | **String** | Filter by the DID Pool assignment | [optional]  |
 **id** | **[String]** | Filter by a specific list of ID's | [optional]  |

### Return type

**DIDEntityListing**


## getTelephonyProvidersEdgesEdgegroup

> EdgeGroup getTelephonyProvidersEdgesEdgegroup(edgeGroupId, opts)


GET /api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}

Get edge group.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeGroupId = "edgeGroupId_example"; // String | Edge group ID
let opts = { 
  'expand': ["expand_example"] // [String] | Fields to expand in the response
};

apiInstance.getTelephonyProvidersEdgesEdgegroup(edgeGroupId, opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesEdgegroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesEdgegroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeGroupId** | **String** | Edge group ID |  |
 **expand** | **[String]** | Fields to expand in the response | [optional] <br />**Values**: phoneTrunkBases, edgeTrunkBaseAssignment |

### Return type

**EdgeGroup**


## getTelephonyProvidersEdgesEdgegroupEdgetrunkbase

> EdgeTrunkBase getTelephonyProvidersEdgesEdgegroupEdgetrunkbase(edgegroupId, edgetrunkbaseId)


GET /api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId}

Gets the edge trunk base associated with the edge group

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgegroupId = "edgegroupId_example"; // String | Edge Group ID
let edgetrunkbaseId = "edgetrunkbaseId_example"; // String | Edge Trunk Base ID

apiInstance.getTelephonyProvidersEdgesEdgegroupEdgetrunkbase(edgegroupId, edgetrunkbaseId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesEdgegroupEdgetrunkbase success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesEdgegroupEdgetrunkbase');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgegroupId** | **String** | Edge Group ID |  |
 **edgetrunkbaseId** | **String** | Edge Trunk Base ID |  |

### Return type

**EdgeTrunkBase**


## getTelephonyProvidersEdgesEdgegroups

> EdgeGroupEntityListing getTelephonyProvidersEdgesEdgegroups(opts)


GET /api/v2/telephony/providers/edges/edgegroups

Get the list of edge groups.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'name': "name_example", // String | Name
  'sortBy': "name", // String | Sort by
  'managed': true // Boolean | Filter by managed
};

apiInstance.getTelephonyProvidersEdgesEdgegroups(opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesEdgegroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesEdgegroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **name** | **String** | Name | [optional]  |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **managed** | **Boolean** | Filter by managed | [optional]  |

### Return type

**EdgeGroupEntityListing**


## getTelephonyProvidersEdgesEdgeversionreport

> EdgeVersionReport getTelephonyProvidersEdgesEdgeversionreport()


GET /api/v2/telephony/providers/edges/edgeversionreport

Get the edge version report.

The report will not have consistent data about the edge version(s) until all edges have been reset.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

apiInstance.getTelephonyProvidersEdgesEdgeversionreport()
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesEdgeversionreport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesEdgeversionreport');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**EdgeVersionReport**


## getTelephonyProvidersEdgesExpired

> ExpiredEdgeListing getTelephonyProvidersEdgesExpired()


GET /api/v2/telephony/providers/edges/expired

List of edges more than 4 edge versions behind the latest software.

Requires ANY permissions:

* telephony:plugin:all
* internal:edge:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

apiInstance.getTelephonyProvidersEdgesExpired()
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesExpired success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesExpired');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**ExpiredEdgeListing**


## getTelephonyProvidersEdgesExtension

> Extension getTelephonyProvidersEdgesExtension(extensionId)


GET /api/v2/telephony/providers/edges/extensions/{extensionId}

Get an extension by ID.

Requires ANY permissions:

* telephony:extensionPool:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let extensionId = "extensionId_example"; // String | Extension ID

apiInstance.getTelephonyProvidersEdgesExtension(extensionId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesExtension success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesExtension');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **extensionId** | **String** | Extension ID |  |

### Return type

**Extension**


## getTelephonyProvidersEdgesExtensionpool

> ExtensionPool getTelephonyProvidersEdgesExtensionpool(extensionPoolId)


GET /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}

Get an extension pool by ID

Requires ALL permissions:

* telephony:extensionPool:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let extensionPoolId = "extensionPoolId_example"; // String | Extension pool ID

apiInstance.getTelephonyProvidersEdgesExtensionpool(extensionPoolId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesExtensionpool success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesExtensionpool');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **extensionPoolId** | **String** | Extension pool ID |  |

### Return type

**ExtensionPool**


## getTelephonyProvidersEdgesExtensionpools

> ExtensionPoolEntityListing getTelephonyProvidersEdgesExtensionpools(opts)


GET /api/v2/telephony/providers/edges/extensionpools

Get a listing of extension pools

Requires ALL permissions:

* telephony:extensionPool:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "sortBy_example", // String | Sort by
  '_number': "_number_example", // String | Deprecated, filtering by number not supported
  'divisionId': ["divisionId_example"] // [String] | List of divisionIds on which to filter.
};

apiInstance.getTelephonyProvidersEdgesExtensionpools(opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesExtensionpools success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesExtensionpools');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional]  |
 **_number** | **String** | Deprecated, filtering by number not supported | [optional]  |
 **divisionId** | **[String]** | List of divisionIds on which to filter. | [optional]  |

### Return type

**ExtensionPoolEntityListing**


## getTelephonyProvidersEdgesExtensionpoolsDivisionviews

> ExtensionPoolDivisionViewEntityListing getTelephonyProvidersEdgesExtensionpoolsDivisionviews(opts)


GET /api/v2/telephony/providers/edges/extensionpools/divisionviews

Get a pageable list of basic extension pool objects filterable by query parameters.

This returns extension pools consisting of name and division. If one or more IDs are specified, the search will fetch extension pools that match the given ID(s) and not use any additional supplied query parameters in the search.

Requires ALL permissions:

* telephony:extensionPool:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Sort by
  'sortOrder': "ASC", // String | Sort order
  'id': ["id_example"], // [String] | ID of the Extension Pools to filter by.
  'name': "name_example", // String | Name of the Extension Pools to filter by.
  'divisionId': ["divisionId_example"] // [String] | List of divisionIds on which to filter.
};

apiInstance.getTelephonyProvidersEdgesExtensionpoolsDivisionviews(opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesExtensionpoolsDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesExtensionpoolsDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **id** | **[String]** | ID of the Extension Pools to filter by. | [optional]  |
 **name** | **String** | Name of the Extension Pools to filter by. | [optional]  |
 **divisionId** | **[String]** | List of divisionIds on which to filter. | [optional]  |

### Return type

**ExtensionPoolDivisionViewEntityListing**


## getTelephonyProvidersEdgesExtensions

> ExtensionEntityListing getTelephonyProvidersEdgesExtensions(opts)


GET /api/v2/telephony/providers/edges/extensions

Get a listing of extensions

Requires ANY permissions:

* telephony:extensionPool:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "number", // String | Sort by
  'sortOrder': "ASC", // String | Sort order
  '_number': "_number_example" // String | Filter by number
};

apiInstance.getTelephonyProvidersEdgesExtensions(opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesExtensions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesExtensions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to number] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **_number** | **String** | Filter by number | [optional]  |

### Return type

**ExtensionEntityListing**


## getTelephonyProvidersEdgesLine

> Line getTelephonyProvidersEdgesLine(lineId)


GET /api/v2/telephony/providers/edges/lines/{lineId}

Get a Line by ID

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let lineId = "lineId_example"; // String | Line ID

apiInstance.getTelephonyProvidersEdgesLine(lineId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesLine success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesLine');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **lineId** | **String** | Line ID |  |

### Return type

**Line**


## getTelephonyProvidersEdgesLinebasesetting

> LineBase getTelephonyProvidersEdgesLinebasesetting(lineBaseId)


GET /api/v2/telephony/providers/edges/linebasesettings/{lineBaseId}

Get a line base settings object by ID

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let lineBaseId = "lineBaseId_example"; // String | Line base ID

apiInstance.getTelephonyProvidersEdgesLinebasesetting(lineBaseId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesLinebasesetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesLinebasesetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **lineBaseId** | **String** | Line base ID |  |

### Return type

**LineBase**


## getTelephonyProvidersEdgesLinebasesettings

> LineBaseEntityListing getTelephonyProvidersEdgesLinebasesettings(opts)


GET /api/v2/telephony/providers/edges/linebasesettings

Get a listing of line base settings objects

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Value by which to sort
  'sortOrder': "ASC", // String | Sort order
  'expand': ["expand_example"] // [String] | Fields to expand in the response, comma-separated
};

apiInstance.getTelephonyProvidersEdgesLinebasesettings(opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesLinebasesettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesLinebasesettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Value by which to sort | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **expand** | **[String]** | Fields to expand in the response, comma-separated | [optional] <br />**Values**: properties |

### Return type

**LineBaseEntityListing**


## getTelephonyProvidersEdgesLines

> LineEntityListing getTelephonyProvidersEdgesLines(opts)


GET /api/v2/telephony/providers/edges/lines

Get a list of Lines

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'name': "name_example", // String | Name
  'sortBy': "name", // String | Value by which to sort
  'expand': ["expand_example"] // [String] | Fields to expand in the response, comma-separated. The edgeGroup value is deprecated.
};

apiInstance.getTelephonyProvidersEdgesLines(opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesLines success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesLines');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **name** | **String** | Name | [optional]  |
 **sortBy** | **String** | Value by which to sort | [optional] [default to name] |
 **expand** | **[String]** | Fields to expand in the response, comma-separated. The edgeGroup value is deprecated. | [optional] <br />**Values**: properties, site, edgeGroup, primaryEdge, secondaryEdge, edges, assignedUser |

### Return type

**LineEntityListing**


## getTelephonyProvidersEdgesLinesTemplate

> Line getTelephonyProvidersEdgesLinesTemplate(lineBaseSettingsId)


GET /api/v2/telephony/providers/edges/lines/template

Get a Line instance template based on a Line Base Settings object. This object can then be modified and saved as a new Line instance

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let lineBaseSettingsId = "lineBaseSettingsId_example"; // String | The id of a Line Base Settings object upon which to base this Line

apiInstance.getTelephonyProvidersEdgesLinesTemplate(lineBaseSettingsId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesLinesTemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesLinesTemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **lineBaseSettingsId** | **String** | The id of a Line Base Settings object upon which to base this Line |  |

### Return type

**Line**


## getTelephonyProvidersEdgesLogicalinterfaces

> LogicalInterfaceEntityListing getTelephonyProvidersEdgesLogicalinterfaces(edgeIds, opts)


GET /api/v2/telephony/providers/edges/logicalinterfaces

Get edge logical interfaces.

Retrieve the configured logical interfaces for a list edges. Only 100 edges can be requested at a time.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeIds = "edgeIds_example"; // String | Comma separated list of Edge Id's
let opts = { 
  'expand': ["expand_example"] // [String] | Field to expand in the response
};

apiInstance.getTelephonyProvidersEdgesLogicalinterfaces(edgeIds, opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesLogicalinterfaces success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesLogicalinterfaces');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeIds** | **String** | Comma separated list of Edge Id's |  |
 **expand** | **[String]** | Field to expand in the response | [optional] <br />**Values**: externalTrunkBaseAssignments, phoneTrunkBaseAssignments |

### Return type

**LogicalInterfaceEntityListing**


## getTelephonyProvidersEdgesMediastatisticsConversation

> MediaStatisticsListing getTelephonyProvidersEdgesMediastatisticsConversation(conversationId)


GET /api/v2/telephony/providers/edges/mediastatistics/conversations/{conversationId}

Get media endpoint statistics events.

getTelephonyProvidersEdgesMediastatisticsConversation is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:conversationDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let conversationId = "conversationId_example"; // String | Identifier of the conversation

apiInstance.getTelephonyProvidersEdgesMediastatisticsConversation(conversationId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesMediastatisticsConversation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesMediastatisticsConversation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Identifier of the conversation |  |

### Return type

**MediaStatisticsListing**


## getTelephonyProvidersEdgesMediastatisticsConversationCommunication

> MediaStatistics getTelephonyProvidersEdgesMediastatisticsConversationCommunication(conversationId, communicationId)


GET /api/v2/telephony/providers/edges/mediastatistics/conversations/{conversationId}/communications/{communicationId}

Get media endpoint statistics event.

getTelephonyProvidersEdgesMediastatisticsConversationCommunication is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:conversationDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let conversationId = "conversationId_example"; // String | Identifier of the conversation
let communicationId = "communicationId_example"; // String | Identifier of the media session

apiInstance.getTelephonyProvidersEdgesMediastatisticsConversationCommunication(conversationId, communicationId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesMediastatisticsConversationCommunication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesMediastatisticsConversationCommunication');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Identifier of the conversation |  |
 **communicationId** | **String** | Identifier of the media session |  |

### Return type

**MediaStatistics**


## getTelephonyProvidersEdgesMetrics

> [EdgeMetrics] getTelephonyProvidersEdgesMetrics(edgeIds)


GET /api/v2/telephony/providers/edges/metrics

Get the metrics for a list of edges.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeIds = "edgeIds_example"; // String | Comma separated list of Edge Id's. Maximum of 100 edge ids allowed.

apiInstance.getTelephonyProvidersEdgesMetrics(edgeIds)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesMetrics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesMetrics');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeIds** | **String** | Comma separated list of Edge Id's. Maximum of 100 edge ids allowed. |  |

### Return type

**[EdgeMetrics]**


## getTelephonyProvidersEdgesOutboundroutes

> OutboundRouteEntityListing getTelephonyProvidersEdgesOutboundroutes(opts)


GET /api/v2/telephony/providers/edges/outboundroutes

Get outbound routes

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'name': "name_example", // String | Name
  'siteId': "siteId_example", // String | Filter by site.id
  'externalTrunkBasesIds': "externalTrunkBasesIds_example", // String | Filter by externalTrunkBases.ids
  'sortBy': "name" // String | Sort by
};

apiInstance.getTelephonyProvidersEdgesOutboundroutes(opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesOutboundroutes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesOutboundroutes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **name** | **String** | Name | [optional]  |
 **siteId** | **String** | Filter by site.id | [optional]  |
 **externalTrunkBasesIds** | **String** | Filter by externalTrunkBases.ids | [optional]  |
 **sortBy** | **String** | Sort by | [optional] [default to name] |

### Return type

**OutboundRouteEntityListing**


## getTelephonyProvidersEdgesPhone

> Phone getTelephonyProvidersEdgesPhone(phoneId)


GET /api/v2/telephony/providers/edges/phones/{phoneId}

Get a Phone by ID

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let phoneId = "phoneId_example"; // String | Phone ID

apiInstance.getTelephonyProvidersEdgesPhone(phoneId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesPhone success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesPhone');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneId** | **String** | Phone ID |  |

### Return type

**Phone**


## getTelephonyProvidersEdgesPhonebasesetting

> PhoneBase getTelephonyProvidersEdgesPhonebasesetting(phoneBaseId)


GET /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}

Get a Phone Base Settings object by ID

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let phoneBaseId = "phoneBaseId_example"; // String | Phone base ID

apiInstance.getTelephonyProvidersEdgesPhonebasesetting(phoneBaseId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesPhonebasesetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesPhonebasesetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneBaseId** | **String** | Phone base ID |  |

### Return type

**PhoneBase**


## getTelephonyProvidersEdgesPhonebasesettings

> PhoneBaseEntityListing getTelephonyProvidersEdgesPhonebasesettings(opts)


GET /api/v2/telephony/providers/edges/phonebasesettings

Get a list of Phone Base Settings objects

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "name", // String | Value by which to sort
  'sortOrder': "ASC", // String | Sort order
  'expand': ["expand_example"], // [String] | Fields to expand in the response, comma-separated
  'name': "name_example" // String | Name
};

apiInstance.getTelephonyProvidersEdgesPhonebasesettings(opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesPhonebasesettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesPhonebasesettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Value by which to sort | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **expand** | **[String]** | Fields to expand in the response, comma-separated | [optional] <br />**Values**: properties, lines |
 **name** | **String** | Name | [optional]  |

### Return type

**PhoneBaseEntityListing**


## getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases

> PhoneMetaBaseEntityListing getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases(opts)


GET /api/v2/telephony/providers/edges/phonebasesettings/availablemetabases

Get a list of available makes and models to create a new Phone Base Settings

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases(opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |

### Return type

**PhoneMetaBaseEntityListing**


## getTelephonyProvidersEdgesPhonebasesettingsTemplate

> PhoneBase getTelephonyProvidersEdgesPhonebasesettingsTemplate(phoneMetabaseId)


GET /api/v2/telephony/providers/edges/phonebasesettings/template

Get a Phone Base Settings instance template from a given make and model. This object can then be modified and saved as a new Phone Base Settings instance

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let phoneMetabaseId = "phoneMetabaseId_example"; // String | The id of a metabase object upon which to base this Phone Base Settings

apiInstance.getTelephonyProvidersEdgesPhonebasesettingsTemplate(phoneMetabaseId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesPhonebasesettingsTemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesPhonebasesettingsTemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneMetabaseId** | **String** | The id of a metabase object upon which to base this Phone Base Settings |  |

### Return type

**PhoneBase**


## getTelephonyProvidersEdgesPhones

> PhoneEntityListing getTelephonyProvidersEdgesPhones(opts)


GET /api/v2/telephony/providers/edges/phones

Get a list of Phone Instances. A maximum of 10,000 results is returned when filtering the results or sorting by a field other than the ID. Sorting by only the ID has no result limit. Each filter supports a wildcard, *, as a value to search for partial values.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | The field to sort by
  'sortOrder': "ASC", // String | Sort order
  'siteId': "siteId_example", // String | Filter by site.id
  'webRtcUserId': "webRtcUserId_example", // String | Filter by webRtcUser.id
  'phoneBaseSettingsId': "phoneBaseSettingsId_example", // String | Filter by phoneBaseSettings.id
  'linesLoggedInUserId': "linesLoggedInUserId_example", // String | Filter by lines.loggedInUser.id
  'linesDefaultForUserId': "linesDefaultForUserId_example", // String | Filter by lines.defaultForUser.id
  'phoneHardwareId': "phoneHardwareId_example", // String | Filter by phone_hardwareId
  'linesId': "linesId_example", // String | Filter by lines.id
  'linesName': "linesName_example", // String | Filter by lines.name
  'name': "name_example", // String | Name of the Phone to filter by, comma-separated
  'statusOperationalStatus': "statusOperationalStatus_example", // String | The primary status to filter by
  'secondaryStatusOperationalStatus': "secondaryStatusOperationalStatus_example", // String | The secondary status to filter by
  'expand': ["expand_example"], // [String] | Fields to expand in the response, comma-separated
  'fields': ["fields_example"] // [String] | Fields and properties to get, comma-separated
};

apiInstance.getTelephonyProvidersEdgesPhones(opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesPhones success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesPhones');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | The field to sort by | [optional] [default to name]<br />**Values**: id, name, status.operationalStatus, secondaryStatus.operationalStatus |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **siteId** | **String** | Filter by site.id | [optional]  |
 **webRtcUserId** | **String** | Filter by webRtcUser.id | [optional]  |
 **phoneBaseSettingsId** | **String** | Filter by phoneBaseSettings.id | [optional]  |
 **linesLoggedInUserId** | **String** | Filter by lines.loggedInUser.id | [optional]  |
 **linesDefaultForUserId** | **String** | Filter by lines.defaultForUser.id | [optional]  |
 **phoneHardwareId** | **String** | Filter by phone_hardwareId | [optional]  |
 **linesId** | **String** | Filter by lines.id | [optional]  |
 **linesName** | **String** | Filter by lines.name | [optional]  |
 **name** | **String** | Name of the Phone to filter by, comma-separated | [optional]  |
 **statusOperationalStatus** | **String** | The primary status to filter by | [optional]  |
 **secondaryStatusOperationalStatus** | **String** | The secondary status to filter by | [optional]  |
 **expand** | **[String]** | Fields to expand in the response, comma-separated | [optional] <br />**Values**: properties, site, status, status.primaryEdgesStatus, status.secondaryEdgesStatus, phoneBaseSettings, lines |
 **fields** | **[String]** | Fields and properties to get, comma-separated | [optional] <br />**Values**: webRtcUser, properties.*, lines.loggedInUser, lines.defaultForUser |

### Return type

**PhoneEntityListing**


## getTelephonyProvidersEdgesPhonesTemplate

> Phone getTelephonyProvidersEdgesPhonesTemplate(phoneBaseSettingsId)


GET /api/v2/telephony/providers/edges/phones/template

Get a Phone instance template based on a Phone Base Settings object. This object can then be modified and saved as a new Phone instance

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let phoneBaseSettingsId = "phoneBaseSettingsId_example"; // String | The id of a Phone Base Settings object upon which to base this Phone

apiInstance.getTelephonyProvidersEdgesPhonesTemplate(phoneBaseSettingsId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesPhonesTemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesPhonesTemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneBaseSettingsId** | **String** | The id of a Phone Base Settings object upon which to base this Phone |  |

### Return type

**Phone**


## getTelephonyProvidersEdgesPhysicalinterfaces

> PhysicalInterfaceEntityListing getTelephonyProvidersEdgesPhysicalinterfaces(edgeIds)


GET /api/v2/telephony/providers/edges/physicalinterfaces

Get physical interfaces for edges.

Retrieves a list of all configured physical interfaces for a list of edges. Only 100 edges can be requested at a time.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeIds = "edgeIds_example"; // String | Comma separated list of Edge Id's

apiInstance.getTelephonyProvidersEdgesPhysicalinterfaces(edgeIds)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesPhysicalinterfaces success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesPhysicalinterfaces');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeIds** | **String** | Comma separated list of Edge Id's |  |

### Return type

**PhysicalInterfaceEntityListing**


## getTelephonyProvidersEdgesSite

> Site getTelephonyProvidersEdgesSite(siteId)


GET /api/v2/telephony/providers/edges/sites/{siteId}

Get a Site by ID.

Requires ANY permissions:

* telephony:plugin:all
* telephony:sites:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let siteId = "siteId_example"; // String | Site ID

apiInstance.getTelephonyProvidersEdgesSite(siteId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesSite success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesSite');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |

### Return type

**Site**


## getTelephonyProvidersEdgesSiteNumberplan

> NumberPlan getTelephonyProvidersEdgesSiteNumberplan(siteId, numberPlanId)


GET /api/v2/telephony/providers/edges/sites/{siteId}/numberplans/{numberPlanId}

Get a Number Plan by ID.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let siteId = "siteId_example"; // String | Site ID
let numberPlanId = "numberPlanId_example"; // String | Number Plan ID

apiInstance.getTelephonyProvidersEdgesSiteNumberplan(siteId, numberPlanId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesSiteNumberplan success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesSiteNumberplan');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
 **numberPlanId** | **String** | Number Plan ID |  |

### Return type

**NumberPlan**


## getTelephonyProvidersEdgesSiteNumberplans

> [NumberPlan] getTelephonyProvidersEdgesSiteNumberplans(siteId)


GET /api/v2/telephony/providers/edges/sites/{siteId}/numberplans

Get the list of Number Plans for this Site. Only fetches the first 200 records.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let siteId = "siteId_example"; // String | Site ID

apiInstance.getTelephonyProvidersEdgesSiteNumberplans(siteId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesSiteNumberplans success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesSiteNumberplans');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |

### Return type

**[NumberPlan]**


## getTelephonyProvidersEdgesSiteNumberplansClassifications

> **[&#39;String&#39;]** getTelephonyProvidersEdgesSiteNumberplansClassifications(siteId, opts)


GET /api/v2/telephony/providers/edges/sites/{siteId}/numberplans/classifications

Get a list of Classifications for this Site

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let siteId = "siteId_example"; // String | Site ID
let opts = { 
  'classification': "classification_example" // String | Classification
};

apiInstance.getTelephonyProvidersEdgesSiteNumberplansClassifications(siteId, opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesSiteNumberplansClassifications success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesSiteNumberplansClassifications');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
 **classification** | **String** | Classification | [optional]  |

### Return type

**[&#39;String&#39;]**


## getTelephonyProvidersEdgesSiteOutboundroute

> OutboundRouteBase getTelephonyProvidersEdgesSiteOutboundroute(siteId, outboundRouteId)


GET /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}

Get an outbound route

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let siteId = "siteId_example"; // String | Site ID
let outboundRouteId = "outboundRouteId_example"; // String | Outbound route ID

apiInstance.getTelephonyProvidersEdgesSiteOutboundroute(siteId, outboundRouteId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesSiteOutboundroute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesSiteOutboundroute');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
 **outboundRouteId** | **String** | Outbound route ID |  |

### Return type

**OutboundRouteBase**


## getTelephonyProvidersEdgesSiteOutboundroutes

> OutboundRouteBaseEntityListing getTelephonyProvidersEdgesSiteOutboundroutes(siteId, opts)


GET /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes

Get outbound routes

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let siteId = "siteId_example"; // String | Site ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'name': "name_example", // String | Name
  'externalTrunkBasesIds': "externalTrunkBasesIds_example", // String | externalTrunkBases.ids
  'sortBy': "name" // String | Sort by
};

apiInstance.getTelephonyProvidersEdgesSiteOutboundroutes(siteId, opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesSiteOutboundroutes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesSiteOutboundroutes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **name** | **String** | Name | [optional]  |
 **externalTrunkBasesIds** | **String** | externalTrunkBases.ids | [optional]  |
 **sortBy** | **String** | Sort by | [optional] [default to name] |

### Return type

**OutboundRouteBaseEntityListing**


## getTelephonyProvidersEdgesSiteSiteconnections

> SiteConnections getTelephonyProvidersEdgesSiteSiteconnections(siteId)


GET /api/v2/telephony/providers/edges/sites/{siteId}/siteconnections

Get site connections for a site.

Requires ANY permissions:

* telephony:plugin:all
* telephony:sites:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let siteId = "siteId_example"; // String | Site ID

apiInstance.getTelephonyProvidersEdgesSiteSiteconnections(siteId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesSiteSiteconnections success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesSiteSiteconnections');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |

### Return type

**SiteConnections**


## getTelephonyProvidersEdgesSites

> SiteEntityListing getTelephonyProvidersEdgesSites(opts)


GET /api/v2/telephony/providers/edges/sites

Get the list of Sites.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "name", // String | Sort by
  'sortOrder': "ASC", // String | Sort order
  'name': "name_example", // String | Name
  'locationId': "locationId_example", // String | Location Id
  'managed': true, // Boolean | Filter by managed
  'expand': ["expand_example"] // [String] | Fields to expand in the response, comma-separated
};

apiInstance.getTelephonyProvidersEdgesSites(opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesSites success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesSites');
    console.error(err);
  });
```

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
 **expand** | **[String]** | Fields to expand in the response, comma-separated | [optional] <br />**Values**: edges, location, primarySites, secondarySites |

### Return type

**SiteEntityListing**


## getTelephonyProvidersEdgesSitesSearch

> SitesSearchResponse getTelephonyProvidersEdgesSitesSearch(q64, opts)


GET /api/v2/telephony/providers/edges/sites/search

Search sites using the q64 value returned from a previous search

Requires ANY permissions:

* telephony:plugin:all
* telephony:sites:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"] // [String] | expand
};

apiInstance.getTelephonyProvidersEdgesSitesSearch(q64, opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesSitesSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesSitesSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | expand | [optional]  |

### Return type

**SitesSearchResponse**


## getTelephonyProvidersEdgesTimezones

> TimeZoneEntityListing getTelephonyProvidersEdgesTimezones(opts)


GET /api/v2/telephony/providers/edges/timezones

Get a list of Edge-compatible time zones

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let opts = { 
  'pageSize': 1000, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getTelephonyProvidersEdgesTimezones(opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesTimezones success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesTimezones');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 1000] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |

### Return type

**TimeZoneEntityListing**


## getTelephonyProvidersEdgesTrunk

> Trunk getTelephonyProvidersEdgesTrunk(trunkId)


GET /api/v2/telephony/providers/edges/trunks/{trunkId}

Get a Trunk by ID

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let trunkId = "trunkId_example"; // String | Trunk ID

apiInstance.getTelephonyProvidersEdgesTrunk(trunkId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesTrunk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesTrunk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trunkId** | **String** | Trunk ID |  |

### Return type

**Trunk**


## getTelephonyProvidersEdgesTrunkMetrics

> TrunkMetrics getTelephonyProvidersEdgesTrunkMetrics(trunkId)


GET /api/v2/telephony/providers/edges/trunks/{trunkId}/metrics

Get the trunk metrics.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let trunkId = "trunkId_example"; // String | Trunk Id

apiInstance.getTelephonyProvidersEdgesTrunkMetrics(trunkId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesTrunkMetrics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesTrunkMetrics');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trunkId** | **String** | Trunk Id |  |

### Return type

**TrunkMetrics**


## getTelephonyProvidersEdgesTrunkbasesetting

> TrunkBase getTelephonyProvidersEdgesTrunkbasesetting(trunkBaseSettingsId, opts)


GET /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}

Get a Trunk Base Settings object by ID

Managed properties will not be returned unless the user is assigned the internal:trunk:edit permission.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let trunkBaseSettingsId = "trunkBaseSettingsId_example"; // String | Trunk Base ID
let opts = { 
  'ignoreHidden': true // Boolean | Set this to true to not receive trunk properties that are meant to be hidden or for internal system usage only.
};

apiInstance.getTelephonyProvidersEdgesTrunkbasesetting(trunkBaseSettingsId, opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesTrunkbasesetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesTrunkbasesetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trunkBaseSettingsId** | **String** | Trunk Base ID |  |
 **ignoreHidden** | **Boolean** | Set this to true to not receive trunk properties that are meant to be hidden or for internal system usage only. | [optional]  |

### Return type

**TrunkBase**


## getTelephonyProvidersEdgesTrunkbasesettings

> TrunkBaseEntityListing getTelephonyProvidersEdgesTrunkbasesettings(opts)


GET /api/v2/telephony/providers/edges/trunkbasesettings

Get Trunk Base Settings listing

Managed properties will not be returned unless the user is assigned the internal:trunk:edit permission.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let opts = { 
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
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesTrunkbasesettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesTrunkbasesettings');
    console.error(err);
  });
```

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

### Return type

**TrunkBaseEntityListing**


## getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases

> TrunkMetabaseEntityListing getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases(opts)


GET /api/v2/telephony/providers/edges/trunkbasesettings/availablemetabases

Get a list of available makes and models to create a new Trunk Base Settings

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let opts = { 
  'type': "type_example", // String | 
  'pageSize': 25, // Number | 
  'pageNumber': 1 // Number | 
};

apiInstance.getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases(opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **type** | **String** |  | [optional] <br />**Values**: EXTERNAL, PHONE, EDGE |
 **pageSize** | **Number** |  | [optional] [default to 25] |
 **pageNumber** | **Number** |  | [optional] [default to 1] |

### Return type

**TrunkMetabaseEntityListing**


## getTelephonyProvidersEdgesTrunkbasesettingsTemplate

> TrunkBase getTelephonyProvidersEdgesTrunkbasesettingsTemplate(trunkMetabaseId)


GET /api/v2/telephony/providers/edges/trunkbasesettings/template

Get a Trunk Base Settings instance template from a given make and model. This object can then be modified and saved as a new Trunk Base Settings instance

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let trunkMetabaseId = "trunkMetabaseId_example"; // String | The id of a metabase object upon which to base this Trunk Base Settings

apiInstance.getTelephonyProvidersEdgesTrunkbasesettingsTemplate(trunkMetabaseId)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesTrunkbasesettingsTemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesTrunkbasesettingsTemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trunkMetabaseId** | **String** | The id of a metabase object upon which to base this Trunk Base Settings |  |

### Return type

**TrunkBase**


## getTelephonyProvidersEdgesTrunks

> TrunkEntityListing getTelephonyProvidersEdgesTrunks(opts)


GET /api/v2/telephony/providers/edges/trunks

Get the list of available trunks.

Trunks are created by assigning trunk base settings to an Edge or Edge Group.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Value by which to sort
  'sortOrder': "ASC", // String | Sort order
  'edgeId': "edgeId_example", // String | Filter by Edge Ids
  'trunkBaseId': "trunkBaseId_example", // String | Filter by Trunk Base Ids
  'trunkType': "trunkType_example" // String | Filter by a Trunk type
};

apiInstance.getTelephonyProvidersEdgesTrunks(opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesTrunks success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesTrunks');
    console.error(err);
  });
```

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

### Return type

**TrunkEntityListing**


## getTelephonyProvidersEdgesTrunksMetrics

> [TrunkMetrics] getTelephonyProvidersEdgesTrunksMetrics(trunkIds)


GET /api/v2/telephony/providers/edges/trunks/metrics

Get the metrics for a list of trunks.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let trunkIds = "trunkIds_example"; // String | Comma separated list of Trunk Id's

apiInstance.getTelephonyProvidersEdgesTrunksMetrics(trunkIds)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesTrunksMetrics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesTrunksMetrics');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trunkIds** | **String** | Comma separated list of Trunk Id's |  |

### Return type

**[TrunkMetrics]**


## getTelephonyProvidersEdgesTrunkswithrecording

> TrunkRecordingEnabledCount getTelephonyProvidersEdgesTrunkswithrecording(opts)


GET /api/v2/telephony/providers/edges/trunkswithrecording

Get Counts of trunks that have recording disabled or enabled

Requires ANY permissions:

* recording:retentionPolicy:view
* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let opts = { 
  'trunkType': "trunkType_example" // String | The type of this trunk base.
};

apiInstance.getTelephonyProvidersEdgesTrunkswithrecording(opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesTrunkswithrecording success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesTrunkswithrecording');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trunkType** | **String** | The type of this trunk base. | [optional] <br />**Values**: EXTERNAL, PHONE, EDGE |

### Return type

**TrunkRecordingEnabledCount**


## patchTelephonyProvidersEdgesSiteSiteconnections

> SiteConnections patchTelephonyProvidersEdgesSiteSiteconnections(siteId, body)


PATCH /api/v2/telephony/providers/edges/sites/{siteId}/siteconnections

Disable site connections for a site.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let siteId = "siteId_example"; // String | Site ID
let body = {}; // Object | Site

apiInstance.patchTelephonyProvidersEdgesSiteSiteconnections(siteId, body)
  .then((data) => {
    console.log(`patchTelephonyProvidersEdgesSiteSiteconnections success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchTelephonyProvidersEdgesSiteSiteconnections');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
 **body** | **Object** | Site |  |

### Return type

**SiteConnections**


## postTelephonyProvidersEdgeDiagnosticNslookup

> EdgeNetworkDiagnostic postTelephonyProvidersEdgeDiagnosticNslookup(edgeId, body)


POST /api/v2/telephony/providers/edges/{edgeId}/diagnostic/nslookup

Nslookup request command to collect networking-related information from an Edge for a target IP or host.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge Id
let body = {}; // Object | request payload to get network diagnostic

apiInstance.postTelephonyProvidersEdgeDiagnosticNslookup(edgeId, body)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgeDiagnosticNslookup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgeDiagnosticNslookup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge Id |  |
 **body** | **Object** | request payload to get network diagnostic |  |

### Return type

**EdgeNetworkDiagnostic**


## postTelephonyProvidersEdgeDiagnosticPing

> EdgeNetworkDiagnostic postTelephonyProvidersEdgeDiagnosticPing(edgeId, body)


POST /api/v2/telephony/providers/edges/{edgeId}/diagnostic/ping

Ping Request command to collect networking-related information from an Edge for a target IP or host.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge Id
let body = {}; // Object | request payload to get network diagnostic

apiInstance.postTelephonyProvidersEdgeDiagnosticPing(edgeId, body)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgeDiagnosticPing success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgeDiagnosticPing');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge Id |  |
 **body** | **Object** | request payload to get network diagnostic |  |

### Return type

**EdgeNetworkDiagnostic**


## postTelephonyProvidersEdgeDiagnosticRoute

> EdgeNetworkDiagnostic postTelephonyProvidersEdgeDiagnosticRoute(edgeId, body)


POST /api/v2/telephony/providers/edges/{edgeId}/diagnostic/route

Route request command to collect networking-related information from an Edge for a target IP or host.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge Id
let body = {}; // Object | request payload to get network diagnostic

apiInstance.postTelephonyProvidersEdgeDiagnosticRoute(edgeId, body)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgeDiagnosticRoute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgeDiagnosticRoute');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge Id |  |
 **body** | **Object** | request payload to get network diagnostic |  |

### Return type

**EdgeNetworkDiagnostic**


## postTelephonyProvidersEdgeDiagnosticTracepath

> EdgeNetworkDiagnostic postTelephonyProvidersEdgeDiagnosticTracepath(edgeId, body)


POST /api/v2/telephony/providers/edges/{edgeId}/diagnostic/tracepath

Tracepath request command to collect networking-related information from an Edge for a target IP or host.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge Id
let body = {}; // Object | request payload to get network diagnostic

apiInstance.postTelephonyProvidersEdgeDiagnosticTracepath(edgeId, body)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgeDiagnosticTracepath success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgeDiagnosticTracepath');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge Id |  |
 **body** | **Object** | request payload to get network diagnostic |  |

### Return type

**EdgeNetworkDiagnostic**


## postTelephonyProvidersEdgeLogicalinterfaces

> DomainLogicalInterface postTelephonyProvidersEdgeLogicalinterfaces(edgeId, body)


POST /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces

Create an edge logical interface.

Create

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge ID
let body = {}; // Object | Logical interface

apiInstance.postTelephonyProvidersEdgeLogicalinterfaces(edgeId, body)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgeLogicalinterfaces success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgeLogicalinterfaces');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **body** | **Object** | Logical interface |  |

### Return type

**DomainLogicalInterface**


## postTelephonyProvidersEdgeLogsJobUpload

> void postTelephonyProvidersEdgeLogsJobUpload(edgeId, jobId, body)


POST /api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}/upload

Request that the specified fileIds be uploaded from the Edge.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge ID
let jobId = "jobId_example"; // String | Job ID
let body = {}; // Object | Log upload request

apiInstance.postTelephonyProvidersEdgeLogsJobUpload(edgeId, jobId, body)
  .then(() => {
    console.log('postTelephonyProvidersEdgeLogsJobUpload returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgeLogsJobUpload');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **jobId** | **String** | Job ID |  |
 **body** | **Object** | Log upload request |  |

### Return type

void (no response body)


## postTelephonyProvidersEdgeLogsJobs

> EdgeLogsJobResponse postTelephonyProvidersEdgeLogsJobs(edgeId, body)


POST /api/v2/telephony/providers/edges/{edgeId}/logs/jobs

Create a job to upload a list of Edge logs.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge ID
let body = {}; // Object | EdgeLogsJobRequest

apiInstance.postTelephonyProvidersEdgeLogsJobs(edgeId, body)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgeLogsJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgeLogsJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **body** | **Object** | EdgeLogsJobRequest |  |

### Return type

**EdgeLogsJobResponse**


## postTelephonyProvidersEdgeReboot

> **&#39;String&#39;** postTelephonyProvidersEdgeReboot(edgeId, opts)


POST /api/v2/telephony/providers/edges/{edgeId}/reboot

Reboot an Edge

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge ID
let opts = { 
  'body': {} // Object | Parameters for the edge reboot
};

apiInstance.postTelephonyProvidersEdgeReboot(edgeId, opts)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgeReboot success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgeReboot');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **body** | **Object** | Parameters for the edge reboot | [optional]  |

### Return type

**&#39;String&#39;**


## postTelephonyProvidersEdgeSoftwareupdate

> DomainEdgeSoftwareUpdateDto postTelephonyProvidersEdgeSoftwareupdate(edgeId, body)


POST /api/v2/telephony/providers/edges/{edgeId}/softwareupdate

Starts a software update for this edge.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge ID
let body = {}; // Object | Software update request

apiInstance.postTelephonyProvidersEdgeSoftwareupdate(edgeId, body)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgeSoftwareupdate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgeSoftwareupdate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **body** | **Object** | Software update request |  |

### Return type

**DomainEdgeSoftwareUpdateDto**


## postTelephonyProvidersEdgeStatuscode

> **&#39;String&#39;** postTelephonyProvidersEdgeStatuscode(edgeId, opts)


POST /api/v2/telephony/providers/edges/{edgeId}/statuscode

Take an Edge in or out of service

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge ID
let opts = { 
  'body': {} // Object | Edge Service State
};

apiInstance.postTelephonyProvidersEdgeStatuscode(edgeId, opts)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgeStatuscode success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgeStatuscode');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **body** | **Object** | Edge Service State | [optional]  |

### Return type

**&#39;String&#39;**


## postTelephonyProvidersEdgeUnpair

> **&#39;String&#39;** postTelephonyProvidersEdgeUnpair(edgeId)


POST /api/v2/telephony/providers/edges/{edgeId}/unpair

Unpair an Edge

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge Id

apiInstance.postTelephonyProvidersEdgeUnpair(edgeId)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgeUnpair success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgeUnpair');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge Id |  |

### Return type

**&#39;String&#39;**


## postTelephonyProvidersEdges

> Edge postTelephonyProvidersEdges(body)


POST /api/v2/telephony/providers/edges

Create an edge.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let body = {}; // Object | Edge

apiInstance.postTelephonyProvidersEdges(body)
  .then((data) => {
    console.log(`postTelephonyProvidersEdges success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdges');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Edge |  |

### Return type

**Edge**


## postTelephonyProvidersEdgesAddressvalidation

> ValidateAddressResponse postTelephonyProvidersEdgesAddressvalidation(body)


POST /api/v2/telephony/providers/edges/addressvalidation

Validates a street address

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let body = {}; // Object | Address

apiInstance.postTelephonyProvidersEdgesAddressvalidation(body)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgesAddressvalidation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgesAddressvalidation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Address |  |

### Return type

**ValidateAddressResponse**


## postTelephonyProvidersEdgesCertificateauthorities

> DomainCertificateAuthority postTelephonyProvidersEdgesCertificateauthorities(body)


POST /api/v2/telephony/providers/edges/certificateauthorities

Create a certificate authority.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let body = {}; // Object | CertificateAuthority

apiInstance.postTelephonyProvidersEdgesCertificateauthorities(body)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgesCertificateauthorities success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgesCertificateauthorities');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | CertificateAuthority |  |

### Return type

**DomainCertificateAuthority**


## postTelephonyProvidersEdgesDidpools

> DIDPool postTelephonyProvidersEdgesDidpools(body)


POST /api/v2/telephony/providers/edges/didpools

Create a new DID pool

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let body = {}; // Object | DID pool

apiInstance.postTelephonyProvidersEdgesDidpools(body)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgesDidpools success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgesDidpools');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | DID pool |  |

### Return type

**DIDPool**


## postTelephonyProvidersEdgesEdgegroups

> EdgeGroup postTelephonyProvidersEdgesEdgegroups(body)


POST /api/v2/telephony/providers/edges/edgegroups

Create an edge group.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let body = {}; // Object | EdgeGroup

apiInstance.postTelephonyProvidersEdgesEdgegroups(body)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgesEdgegroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgesEdgegroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | EdgeGroup |  |

### Return type

**EdgeGroup**


## postTelephonyProvidersEdgesExtensionpools

> ExtensionPool postTelephonyProvidersEdgesExtensionpools(body)


POST /api/v2/telephony/providers/edges/extensionpools

Create a new extension pool

Requires ALL permissions:

* telephony:extensionPool:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let body = {}; // Object | ExtensionPool

apiInstance.postTelephonyProvidersEdgesExtensionpools(body)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgesExtensionpools success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgesExtensionpools');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ExtensionPool |  |

### Return type

**ExtensionPool**


## postTelephonyProvidersEdgesMediastatisticsConversationCommunicationMediaresource

> MediaStatistics postTelephonyProvidersEdgesMediastatisticsConversationCommunicationMediaresource(conversationId, communicationId, mediaResourceId, body)


POST /api/v2/telephony/providers/edges/mediastatistics/conversations/{conversationId}/communications/{communicationId}/mediaresources/{mediaResourceId}

Post media endpoint statistics event.

postTelephonyProvidersEdgesMediastatisticsConversationCommunicationMediaresource is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* telephony:mediaStatistics:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let conversationId = "conversationId_example"; // String | Identifier of the conversation
let communicationId = "communicationId_example"; // String | Identifier of the media session
let mediaResourceId = "mediaResourceId_example"; // String | Identifier of the media resource of the endpoint
let body = {}; // Object | MediaStatisticsPostRequest

apiInstance.postTelephonyProvidersEdgesMediastatisticsConversationCommunicationMediaresource(conversationId, communicationId, mediaResourceId, body)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgesMediastatisticsConversationCommunicationMediaresource success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgesMediastatisticsConversationCommunicationMediaresource');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Identifier of the conversation |  |
 **communicationId** | **String** | Identifier of the media session |  |
 **mediaResourceId** | **String** | Identifier of the media resource of the endpoint |  |
 **body** | **Object** | MediaStatisticsPostRequest |  |

### Return type

**MediaStatistics**


## postTelephonyProvidersEdgesPhoneReboot

> void postTelephonyProvidersEdgesPhoneReboot(phoneId)


POST /api/v2/telephony/providers/edges/phones/{phoneId}/reboot

Reboot a Phone

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let phoneId = "phoneId_example"; // String | Phone Id

apiInstance.postTelephonyProvidersEdgesPhoneReboot(phoneId)
  .then(() => {
    console.log('postTelephonyProvidersEdgesPhoneReboot returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgesPhoneReboot');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneId** | **String** | Phone Id |  |

### Return type

void (no response body)


## postTelephonyProvidersEdgesPhonebasesettings

> PhoneBase postTelephonyProvidersEdgesPhonebasesettings(body)


POST /api/v2/telephony/providers/edges/phonebasesettings

Create a new Phone Base Settings object

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let body = {}; // Object | Phone base settings

apiInstance.postTelephonyProvidersEdgesPhonebasesettings(body)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgesPhonebasesettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgesPhonebasesettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Phone base settings |  |

### Return type

**PhoneBase**


## postTelephonyProvidersEdgesPhones

> Phone postTelephonyProvidersEdgesPhones(body)


POST /api/v2/telephony/providers/edges/phones

Create a new Phone

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let body = {}; // Object | Phone

apiInstance.postTelephonyProvidersEdgesPhones(body)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgesPhones success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgesPhones');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Phone |  |

### Return type

**Phone**


## postTelephonyProvidersEdgesPhonesReboot

> void postTelephonyProvidersEdgesPhonesReboot(body)


POST /api/v2/telephony/providers/edges/phones/reboot

Reboot Multiple Phones

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let body = {}; // Object | Phones

apiInstance.postTelephonyProvidersEdgesPhonesReboot(body)
  .then(() => {
    console.log('postTelephonyProvidersEdgesPhonesReboot returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgesPhonesReboot');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Phones |  |

### Return type

void (no response body)


## postTelephonyProvidersEdgesSiteOutboundroutes

> OutboundRouteBase postTelephonyProvidersEdgesSiteOutboundroutes(siteId, body)


POST /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes

Create outbound route

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let siteId = "siteId_example"; // String | Site ID
let body = {}; // Object | OutboundRoute

apiInstance.postTelephonyProvidersEdgesSiteOutboundroutes(siteId, body)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgesSiteOutboundroutes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgesSiteOutboundroutes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
 **body** | **Object** | OutboundRoute |  |

### Return type

**OutboundRouteBase**


## postTelephonyProvidersEdgesSites

> Site postTelephonyProvidersEdgesSites(body)


POST /api/v2/telephony/providers/edges/sites

Create a Site.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let body = {}; // Object | Site

apiInstance.postTelephonyProvidersEdgesSites(body)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgesSites success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgesSites');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Site |  |

### Return type

**Site**


## postTelephonyProvidersEdgesSitesSearch

> SitesSearchResponse postTelephonyProvidersEdgesSitesSearch(body)


POST /api/v2/telephony/providers/edges/sites/search

Search sites

Requires ANY permissions:

* telephony:plugin:all
* telephony:sites:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let body = {}; // Object | Search request options

apiInstance.postTelephonyProvidersEdgesSitesSearch(body)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgesSitesSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgesSitesSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |

### Return type

**SitesSearchResponse**


## postTelephonyProvidersEdgesTrunkbasesettings

> TrunkBase postTelephonyProvidersEdgesTrunkbasesettings(body)


POST /api/v2/telephony/providers/edges/trunkbasesettings

Create a Trunk Base Settings object

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let body = {}; // Object | Trunk base settings

apiInstance.postTelephonyProvidersEdgesTrunkbasesettings(body)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgesTrunkbasesettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgesTrunkbasesettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Trunk base settings |  |

### Return type

**TrunkBase**


## putTelephonyProvidersEdge

> Edge putTelephonyProvidersEdge(edgeId, body)


PUT /api/v2/telephony/providers/edges/{edgeId}

Update a edge.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge ID
let body = {}; // Object | Edge

apiInstance.putTelephonyProvidersEdge(edgeId, body)
  .then((data) => {
    console.log(`putTelephonyProvidersEdge success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putTelephonyProvidersEdge');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **body** | **Object** | Edge |  |

### Return type

**Edge**


## putTelephonyProvidersEdgeLogicalinterface

> DomainLogicalInterface putTelephonyProvidersEdgeLogicalinterface(edgeId, interfaceId, body)


PUT /api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}

Update an edge logical interface.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeId = "edgeId_example"; // String | Edge ID
let interfaceId = "interfaceId_example"; // String | Interface ID
let body = {}; // Object | Logical interface

apiInstance.putTelephonyProvidersEdgeLogicalinterface(edgeId, interfaceId, body)
  .then((data) => {
    console.log(`putTelephonyProvidersEdgeLogicalinterface success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putTelephonyProvidersEdgeLogicalinterface');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeId** | **String** | Edge ID |  |
 **interfaceId** | **String** | Interface ID |  |
 **body** | **Object** | Logical interface |  |

### Return type

**DomainLogicalInterface**


## putTelephonyProvidersEdgesAlertablepresences

> void putTelephonyProvidersEdgesAlertablepresences(body)


PUT /api/v2/telephony/providers/edges/alertablepresences

Creates or updates alertable presences overrides.

Requires ANY permissions:

* telephony:alertablePresences:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let body = {}; // Object | Alertable Presences Overrides

apiInstance.putTelephonyProvidersEdgesAlertablepresences(body)
  .then(() => {
    console.log('putTelephonyProvidersEdgesAlertablepresences returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling putTelephonyProvidersEdgesAlertablepresences');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Alertable Presences Overrides |  |

### Return type

void (no response body)


## putTelephonyProvidersEdgesCertificateauthority

> DomainCertificateAuthority putTelephonyProvidersEdgesCertificateauthority(certificateId, body)


PUT /api/v2/telephony/providers/edges/certificateauthorities/{certificateId}

Update a certificate authority.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let certificateId = "certificateId_example"; // String | Certificate ID
let body = {}; // Object | Certificate authority

apiInstance.putTelephonyProvidersEdgesCertificateauthority(certificateId, body)
  .then((data) => {
    console.log(`putTelephonyProvidersEdgesCertificateauthority success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putTelephonyProvidersEdgesCertificateauthority');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **certificateId** | **String** | Certificate ID |  |
 **body** | **Object** | Certificate authority |  |

### Return type

**DomainCertificateAuthority**


## putTelephonyProvidersEdgesDidpool

> DIDPool putTelephonyProvidersEdgesDidpool(didPoolId, body)


PUT /api/v2/telephony/providers/edges/didpools/{didPoolId}

Update a DID Pool by ID.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let didPoolId = "didPoolId_example"; // String | DID pool ID
let body = {}; // Object | DID pool

apiInstance.putTelephonyProvidersEdgesDidpool(didPoolId, body)
  .then((data) => {
    console.log(`putTelephonyProvidersEdgesDidpool success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putTelephonyProvidersEdgesDidpool');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **didPoolId** | **String** | DID pool ID |  |
 **body** | **Object** | DID pool |  |

### Return type

**DIDPool**


## putTelephonyProvidersEdgesEdgegroup

> EdgeGroup putTelephonyProvidersEdgesEdgegroup(edgeGroupId, body)


PUT /api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}

Update an edge group.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgeGroupId = "edgeGroupId_example"; // String | Edge group ID
let body = {}; // Object | EdgeGroup

apiInstance.putTelephonyProvidersEdgesEdgegroup(edgeGroupId, body)
  .then((data) => {
    console.log(`putTelephonyProvidersEdgesEdgegroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putTelephonyProvidersEdgesEdgegroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgeGroupId** | **String** | Edge group ID |  |
 **body** | **Object** | EdgeGroup |  |

### Return type

**EdgeGroup**


## putTelephonyProvidersEdgesEdgegroupEdgetrunkbase

> EdgeTrunkBase putTelephonyProvidersEdgesEdgegroupEdgetrunkbase(edgegroupId, edgetrunkbaseId, body)


PUT /api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId}

Update the edge trunk base associated with the edge group

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let edgegroupId = "edgegroupId_example"; // String | Edge Group ID
let edgetrunkbaseId = "edgetrunkbaseId_example"; // String | Edge Trunk Base ID
let body = {}; // Object | EdgeTrunkBase

apiInstance.putTelephonyProvidersEdgesEdgegroupEdgetrunkbase(edgegroupId, edgetrunkbaseId, body)
  .then((data) => {
    console.log(`putTelephonyProvidersEdgesEdgegroupEdgetrunkbase success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putTelephonyProvidersEdgesEdgegroupEdgetrunkbase');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **edgegroupId** | **String** | Edge Group ID |  |
 **edgetrunkbaseId** | **String** | Edge Trunk Base ID |  |
 **body** | **Object** | EdgeTrunkBase |  |

### Return type

**EdgeTrunkBase**


## putTelephonyProvidersEdgesExtensionpool

> ExtensionPool putTelephonyProvidersEdgesExtensionpool(extensionPoolId, body)


PUT /api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}

Update an extension pool by ID

Requires ALL permissions:

* telephony:extensionPool:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let extensionPoolId = "extensionPoolId_example"; // String | Extension pool ID
let body = {}; // Object | ExtensionPool

apiInstance.putTelephonyProvidersEdgesExtensionpool(extensionPoolId, body)
  .then((data) => {
    console.log(`putTelephonyProvidersEdgesExtensionpool success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putTelephonyProvidersEdgesExtensionpool');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **extensionPoolId** | **String** | Extension pool ID |  |
 **body** | **Object** | ExtensionPool |  |

### Return type

**ExtensionPool**


## putTelephonyProvidersEdgesPhone

> Phone putTelephonyProvidersEdgesPhone(phoneId, body)


PUT /api/v2/telephony/providers/edges/phones/{phoneId}

Update a Phone by ID

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let phoneId = "phoneId_example"; // String | Phone ID
let body = {}; // Object | Phone

apiInstance.putTelephonyProvidersEdgesPhone(phoneId, body)
  .then((data) => {
    console.log(`putTelephonyProvidersEdgesPhone success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putTelephonyProvidersEdgesPhone');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneId** | **String** | Phone ID |  |
 **body** | **Object** | Phone |  |

### Return type

**Phone**


## putTelephonyProvidersEdgesPhonebasesetting

> PhoneBase putTelephonyProvidersEdgesPhonebasesetting(phoneBaseId, body)


PUT /api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}

Update a Phone Base Settings by ID

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let phoneBaseId = "phoneBaseId_example"; // String | Phone base ID
let body = {}; // Object | Phone base settings

apiInstance.putTelephonyProvidersEdgesPhonebasesetting(phoneBaseId, body)
  .then((data) => {
    console.log(`putTelephonyProvidersEdgesPhonebasesetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putTelephonyProvidersEdgesPhonebasesetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneBaseId** | **String** | Phone base ID |  |
 **body** | **Object** | Phone base settings |  |

### Return type

**PhoneBase**


## putTelephonyProvidersEdgesSite

> Site putTelephonyProvidersEdgesSite(siteId, body)


PUT /api/v2/telephony/providers/edges/sites/{siteId}

Update a Site by ID.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let siteId = "siteId_example"; // String | Site ID
let body = {}; // Object | Site

apiInstance.putTelephonyProvidersEdgesSite(siteId, body)
  .then((data) => {
    console.log(`putTelephonyProvidersEdgesSite success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putTelephonyProvidersEdgesSite');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
 **body** | **Object** | Site |  |

### Return type

**Site**


## putTelephonyProvidersEdgesSiteNumberplans

> [NumberPlan] putTelephonyProvidersEdgesSiteNumberplans(siteId, body)


PUT /api/v2/telephony/providers/edges/sites/{siteId}/numberplans

Update the list of Number Plans. A user can update maximum 200 number plans at a time.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let siteId = "siteId_example"; // String | Site ID
let body = [{}]; // Object | List of number plans

apiInstance.putTelephonyProvidersEdgesSiteNumberplans(siteId, body)
  .then((data) => {
    console.log(`putTelephonyProvidersEdgesSiteNumberplans success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putTelephonyProvidersEdgesSiteNumberplans');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
 **body** | **Object** | List of number plans |  |

### Return type

**[NumberPlan]**


## putTelephonyProvidersEdgesSiteOutboundroute

> OutboundRouteBase putTelephonyProvidersEdgesSiteOutboundroute(siteId, outboundRouteId, body)


PUT /api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}

Update outbound route

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let siteId = "siteId_example"; // String | Site ID
let outboundRouteId = "outboundRouteId_example"; // String | Outbound route ID
let body = {}; // Object | OutboundRoute

apiInstance.putTelephonyProvidersEdgesSiteOutboundroute(siteId, outboundRouteId, body)
  .then((data) => {
    console.log(`putTelephonyProvidersEdgesSiteOutboundroute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putTelephonyProvidersEdgesSiteOutboundroute');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
 **outboundRouteId** | **String** | Outbound route ID |  |
 **body** | **Object** | OutboundRoute |  |

### Return type

**OutboundRouteBase**


## putTelephonyProvidersEdgesSiteSiteconnections

> SiteConnections putTelephonyProvidersEdgesSiteSiteconnections(siteId, body)


PUT /api/v2/telephony/providers/edges/sites/{siteId}/siteconnections

Update site connections for a site.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let siteId = "siteId_example"; // String | Site ID
let body = {}; // Object | Site

apiInstance.putTelephonyProvidersEdgesSiteSiteconnections(siteId, body)
  .then((data) => {
    console.log(`putTelephonyProvidersEdgesSiteSiteconnections success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putTelephonyProvidersEdgesSiteSiteconnections');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **siteId** | **String** | Site ID |  |
 **body** | **Object** | Site |  |

### Return type

**SiteConnections**


## putTelephonyProvidersEdgesTrunkbasesetting

> TrunkBase putTelephonyProvidersEdgesTrunkbasesetting(trunkBaseSettingsId, body)


PUT /api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}

Update a Trunk Base Settings object by ID

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyProvidersEdgeApi();

let trunkBaseSettingsId = "trunkBaseSettingsId_example"; // String | Trunk Base ID
let body = {}; // Object | Trunk base settings

apiInstance.putTelephonyProvidersEdgesTrunkbasesetting(trunkBaseSettingsId, body)
  .then((data) => {
    console.log(`putTelephonyProvidersEdgesTrunkbasesetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putTelephonyProvidersEdgesTrunkbasesetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trunkBaseSettingsId** | **String** | Trunk Base ID |  |
 **body** | **Object** | Trunk base settings |  |

### Return type

**TrunkBase**


_purecloud-platform-client-v2@229.1.0_
