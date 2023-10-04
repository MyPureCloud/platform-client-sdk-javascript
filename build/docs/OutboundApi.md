---
title: OutboundApi
---
# platformClient.OutboundApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteOutboundAttemptlimit**](OutboundApi.html#deleteOutboundAttemptlimit) | **DELETE** /api/v2/outbound/attemptlimits/{attemptLimitsId} | Delete attempt limits
[**deleteOutboundCallabletimeset**](OutboundApi.html#deleteOutboundCallabletimeset) | **DELETE** /api/v2/outbound/callabletimesets/{callableTimeSetId} | Delete callable time set
[**deleteOutboundCallanalysisresponseset**](OutboundApi.html#deleteOutboundCallanalysisresponseset) | **DELETE** /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId} | Delete a dialer call analysis response set.
[**deleteOutboundCampaign**](OutboundApi.html#deleteOutboundCampaign) | **DELETE** /api/v2/outbound/campaigns/{campaignId} | Delete a campaign.
[**deleteOutboundCampaignProgress**](OutboundApi.html#deleteOutboundCampaignProgress) | **DELETE** /api/v2/outbound/campaigns/{campaignId}/progress | Reset campaign progress and recycle the campaign
[**deleteOutboundCampaignrule**](OutboundApi.html#deleteOutboundCampaignrule) | **DELETE** /api/v2/outbound/campaignrules/{campaignRuleId} | Delete Campaign Rule
[**deleteOutboundContactlist**](OutboundApi.html#deleteOutboundContactlist) | **DELETE** /api/v2/outbound/contactlists/{contactListId} | Delete a contact list.
[**deleteOutboundContactlistContact**](OutboundApi.html#deleteOutboundContactlistContact) | **DELETE** /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId} | Delete a contact.
[**deleteOutboundContactlistContacts**](OutboundApi.html#deleteOutboundContactlistContacts) | **DELETE** /api/v2/outbound/contactlists/{contactListId}/contacts | Delete contacts from a contact list.
[**deleteOutboundContactlistfilter**](OutboundApi.html#deleteOutboundContactlistfilter) | **DELETE** /api/v2/outbound/contactlistfilters/{contactListFilterId} | Delete Contact List Filter
[**deleteOutboundContactlists**](OutboundApi.html#deleteOutboundContactlists) | **DELETE** /api/v2/outbound/contactlists | Delete multiple contact lists.
[**deleteOutboundDigitalruleset**](OutboundApi.html#deleteOutboundDigitalruleset) | **DELETE** /api/v2/outbound/digitalrulesets/{digitalRuleSetId} | Delete an Outbound Digital Rule Set
[**deleteOutboundDnclist**](OutboundApi.html#deleteOutboundDnclist) | **DELETE** /api/v2/outbound/dnclists/{dncListId} | Delete dialer DNC list
[**deleteOutboundDnclistCustomexclusioncolumns**](OutboundApi.html#deleteOutboundDnclistCustomexclusioncolumns) | **DELETE** /api/v2/outbound/dnclists/{dncListId}/customexclusioncolumns | Deletes all or expired custom exclusion column entries from a DNC list.
[**deleteOutboundDnclistEmailaddresses**](OutboundApi.html#deleteOutboundDnclistEmailaddresses) | **DELETE** /api/v2/outbound/dnclists/{dncListId}/emailaddresses | Deletes all or expired email addresses from a DNC list.
[**deleteOutboundDnclistPhonenumbers**](OutboundApi.html#deleteOutboundDnclistPhonenumbers) | **DELETE** /api/v2/outbound/dnclists/{dncListId}/phonenumbers | Deletes all or expired phone numbers from a DNC list.
[**deleteOutboundMessagingcampaign**](OutboundApi.html#deleteOutboundMessagingcampaign) | **DELETE** /api/v2/outbound/messagingcampaigns/{messagingCampaignId} | Delete an Outbound Messaging Campaign
[**deleteOutboundMessagingcampaignProgress**](OutboundApi.html#deleteOutboundMessagingcampaignProgress) | **DELETE** /api/v2/outbound/messagingcampaigns/{messagingCampaignId}/progress | Reset messaging campaign progress and recycle the messaging campaign
[**deleteOutboundRuleset**](OutboundApi.html#deleteOutboundRuleset) | **DELETE** /api/v2/outbound/rulesets/{ruleSetId} | Delete a Rule Set.
[**deleteOutboundSchedulesCampaign**](OutboundApi.html#deleteOutboundSchedulesCampaign) | **DELETE** /api/v2/outbound/schedules/campaigns/{campaignId} | Delete a dialer campaign schedule.
[**deleteOutboundSchedulesEmailcampaign**](OutboundApi.html#deleteOutboundSchedulesEmailcampaign) | **DELETE** /api/v2/outbound/schedules/emailcampaigns/{emailCampaignId} | Delete an email campaign schedule.
[**deleteOutboundSchedulesMessagingcampaign**](OutboundApi.html#deleteOutboundSchedulesMessagingcampaign) | **DELETE** /api/v2/outbound/schedules/messagingcampaigns/{messagingCampaignId} | Delete a messaging campaign schedule.
[**deleteOutboundSchedulesSequence**](OutboundApi.html#deleteOutboundSchedulesSequence) | **DELETE** /api/v2/outbound/schedules/sequences/{sequenceId} | Delete a dialer sequence schedule.
[**deleteOutboundSequence**](OutboundApi.html#deleteOutboundSequence) | **DELETE** /api/v2/outbound/sequences/{sequenceId} | Delete a dialer campaign sequence.
[**getOutboundAttemptlimit**](OutboundApi.html#getOutboundAttemptlimit) | **GET** /api/v2/outbound/attemptlimits/{attemptLimitsId} | Get attempt limits
[**getOutboundAttemptlimits**](OutboundApi.html#getOutboundAttemptlimits) | **GET** /api/v2/outbound/attemptlimits | Query attempt limits list
[**getOutboundCallabletimeset**](OutboundApi.html#getOutboundCallabletimeset) | **GET** /api/v2/outbound/callabletimesets/{callableTimeSetId} | Get callable time set
[**getOutboundCallabletimesets**](OutboundApi.html#getOutboundCallabletimesets) | **GET** /api/v2/outbound/callabletimesets | Query callable time set list
[**getOutboundCallanalysisresponseset**](OutboundApi.html#getOutboundCallanalysisresponseset) | **GET** /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId} | Get a dialer call analysis response set.
[**getOutboundCallanalysisresponsesets**](OutboundApi.html#getOutboundCallanalysisresponsesets) | **GET** /api/v2/outbound/callanalysisresponsesets | Query a list of dialer call analysis response sets.
[**getOutboundCampaign**](OutboundApi.html#getOutboundCampaign) | **GET** /api/v2/outbound/campaigns/{campaignId} | Get dialer campaign.
[**getOutboundCampaignAgentownedmappingpreviewResults**](OutboundApi.html#getOutboundCampaignAgentownedmappingpreviewResults) | **GET** /api/v2/outbound/campaigns/{campaignId}/agentownedmappingpreview/results | Get a preview of how agents will be mapped to this campaign's contact list.
[**getOutboundCampaignDiagnostics**](OutboundApi.html#getOutboundCampaignDiagnostics) | **GET** /api/v2/outbound/campaigns/{campaignId}/diagnostics | Get campaign diagnostics
[**getOutboundCampaignInteractions**](OutboundApi.html#getOutboundCampaignInteractions) | **GET** /api/v2/outbound/campaigns/{campaignId}/interactions | Get dialer campaign interactions.
[**getOutboundCampaignProgress**](OutboundApi.html#getOutboundCampaignProgress) | **GET** /api/v2/outbound/campaigns/{campaignId}/progress | Get campaign progress
[**getOutboundCampaignStats**](OutboundApi.html#getOutboundCampaignStats) | **GET** /api/v2/outbound/campaigns/{campaignId}/stats | Get statistics about a Dialer Campaign
[**getOutboundCampaignrule**](OutboundApi.html#getOutboundCampaignrule) | **GET** /api/v2/outbound/campaignrules/{campaignRuleId} | Get Campaign Rule
[**getOutboundCampaignrules**](OutboundApi.html#getOutboundCampaignrules) | **GET** /api/v2/outbound/campaignrules | Query Campaign Rule list
[**getOutboundCampaigns**](OutboundApi.html#getOutboundCampaigns) | **GET** /api/v2/outbound/campaigns | Query a list of dialer campaigns.
[**getOutboundCampaignsAll**](OutboundApi.html#getOutboundCampaignsAll) | **GET** /api/v2/outbound/campaigns/all | Query across all types of campaigns by division
[**getOutboundCampaignsAllDivisionviews**](OutboundApi.html#getOutboundCampaignsAllDivisionviews) | **GET** /api/v2/outbound/campaigns/all/divisionviews | Query across all types of campaigns
[**getOutboundCampaignsDivisionview**](OutboundApi.html#getOutboundCampaignsDivisionview) | **GET** /api/v2/outbound/campaigns/divisionviews/{campaignId} | Get a basic Campaign information object
[**getOutboundCampaignsDivisionviews**](OutboundApi.html#getOutboundCampaignsDivisionviews) | **GET** /api/v2/outbound/campaigns/divisionviews | Query a list of basic Campaign information objects
[**getOutboundContactlist**](OutboundApi.html#getOutboundContactlist) | **GET** /api/v2/outbound/contactlists/{contactListId} | Get a dialer contact list.
[**getOutboundContactlistContact**](OutboundApi.html#getOutboundContactlistContact) | **GET** /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId} | Get a contact.
[**getOutboundContactlistExport**](OutboundApi.html#getOutboundContactlistExport) | **GET** /api/v2/outbound/contactlists/{contactListId}/export | Get the URI of a contact list export.
[**getOutboundContactlistImportstatus**](OutboundApi.html#getOutboundContactlistImportstatus) | **GET** /api/v2/outbound/contactlists/{contactListId}/importstatus | Get dialer contactList import status.
[**getOutboundContactlistTimezonemappingpreview**](OutboundApi.html#getOutboundContactlistTimezonemappingpreview) | **GET** /api/v2/outbound/contactlists/{contactListId}/timezonemappingpreview | Preview the result of applying Automatic Time Zone Mapping to a contact list
[**getOutboundContactlistfilter**](OutboundApi.html#getOutboundContactlistfilter) | **GET** /api/v2/outbound/contactlistfilters/{contactListFilterId} | Get Contact list filter
[**getOutboundContactlistfilters**](OutboundApi.html#getOutboundContactlistfilters) | **GET** /api/v2/outbound/contactlistfilters | Query Contact list filters
[**getOutboundContactlists**](OutboundApi.html#getOutboundContactlists) | **GET** /api/v2/outbound/contactlists | Query a list of contact lists.
[**getOutboundContactlistsDivisionview**](OutboundApi.html#getOutboundContactlistsDivisionview) | **GET** /api/v2/outbound/contactlists/divisionviews/{contactListId} | Get a basic ContactList information object
[**getOutboundContactlistsDivisionviews**](OutboundApi.html#getOutboundContactlistsDivisionviews) | **GET** /api/v2/outbound/contactlists/divisionviews | Query a list of simplified contact list objects.
[**getOutboundDigitalruleset**](OutboundApi.html#getOutboundDigitalruleset) | **GET** /api/v2/outbound/digitalrulesets/{digitalRuleSetId} | Get an Outbound Digital Rule Set
[**getOutboundDigitalrulesets**](OutboundApi.html#getOutboundDigitalrulesets) | **GET** /api/v2/outbound/digitalrulesets | Query a list of Outbound Digital Rule Sets
[**getOutboundDnclist**](OutboundApi.html#getOutboundDnclist) | **GET** /api/v2/outbound/dnclists/{dncListId} | Get dialer DNC list
[**getOutboundDnclistExport**](OutboundApi.html#getOutboundDnclistExport) | **GET** /api/v2/outbound/dnclists/{dncListId}/export | Get the URI of a DNC list export.
[**getOutboundDnclistImportstatus**](OutboundApi.html#getOutboundDnclistImportstatus) | **GET** /api/v2/outbound/dnclists/{dncListId}/importstatus | Get dialer dncList import status.
[**getOutboundDnclists**](OutboundApi.html#getOutboundDnclists) | **GET** /api/v2/outbound/dnclists | Query dialer DNC lists
[**getOutboundDnclistsDivisionview**](OutboundApi.html#getOutboundDnclistsDivisionview) | **GET** /api/v2/outbound/dnclists/divisionviews/{dncListId} | Get a basic DncList information object
[**getOutboundDnclistsDivisionviews**](OutboundApi.html#getOutboundDnclistsDivisionviews) | **GET** /api/v2/outbound/dnclists/divisionviews | Query a list of simplified dnc list objects.
[**getOutboundEvent**](OutboundApi.html#getOutboundEvent) | **GET** /api/v2/outbound/events/{eventId} | Get Dialer Event
[**getOutboundEvents**](OutboundApi.html#getOutboundEvents) | **GET** /api/v2/outbound/events | Query Event Logs
[**getOutboundMessagingcampaign**](OutboundApi.html#getOutboundMessagingcampaign) | **GET** /api/v2/outbound/messagingcampaigns/{messagingCampaignId} | Get an Outbound Messaging Campaign
[**getOutboundMessagingcampaignDiagnostics**](OutboundApi.html#getOutboundMessagingcampaignDiagnostics) | **GET** /api/v2/outbound/messagingcampaigns/{messagingCampaignId}/diagnostics | Get messaging campaign diagnostics
[**getOutboundMessagingcampaignProgress**](OutboundApi.html#getOutboundMessagingcampaignProgress) | **GET** /api/v2/outbound/messagingcampaigns/{messagingCampaignId}/progress | Get messaging campaign's progress
[**getOutboundMessagingcampaigns**](OutboundApi.html#getOutboundMessagingcampaigns) | **GET** /api/v2/outbound/messagingcampaigns | Query a list of Messaging Campaigns
[**getOutboundMessagingcampaignsDivisionview**](OutboundApi.html#getOutboundMessagingcampaignsDivisionview) | **GET** /api/v2/outbound/messagingcampaigns/divisionviews/{messagingCampaignId} | Get a basic Messaging Campaign information object
[**getOutboundMessagingcampaignsDivisionviews**](OutboundApi.html#getOutboundMessagingcampaignsDivisionviews) | **GET** /api/v2/outbound/messagingcampaigns/divisionviews | Query a list of basic Messaging Campaign information objects
[**getOutboundRuleset**](OutboundApi.html#getOutboundRuleset) | **GET** /api/v2/outbound/rulesets/{ruleSetId} | Get a Rule Set by ID.
[**getOutboundRulesets**](OutboundApi.html#getOutboundRulesets) | **GET** /api/v2/outbound/rulesets | Query a list of Rule Sets.
[**getOutboundSchedulesCampaign**](OutboundApi.html#getOutboundSchedulesCampaign) | **GET** /api/v2/outbound/schedules/campaigns/{campaignId} | Get a dialer campaign schedule.
[**getOutboundSchedulesCampaigns**](OutboundApi.html#getOutboundSchedulesCampaigns) | **GET** /api/v2/outbound/schedules/campaigns | Query for a list of dialer campaign schedules.
[**getOutboundSchedulesEmailcampaign**](OutboundApi.html#getOutboundSchedulesEmailcampaign) | **GET** /api/v2/outbound/schedules/emailcampaigns/{emailCampaignId} | Get an email campaign schedule.
[**getOutboundSchedulesEmailcampaigns**](OutboundApi.html#getOutboundSchedulesEmailcampaigns) | **GET** /api/v2/outbound/schedules/emailcampaigns | Query for a list of email campaign schedules.
[**getOutboundSchedulesMessagingcampaign**](OutboundApi.html#getOutboundSchedulesMessagingcampaign) | **GET** /api/v2/outbound/schedules/messagingcampaigns/{messagingCampaignId} | Get a messaging campaign schedule.
[**getOutboundSchedulesMessagingcampaigns**](OutboundApi.html#getOutboundSchedulesMessagingcampaigns) | **GET** /api/v2/outbound/schedules/messagingcampaigns | Query for a list of messaging campaign schedules.
[**getOutboundSchedulesSequence**](OutboundApi.html#getOutboundSchedulesSequence) | **GET** /api/v2/outbound/schedules/sequences/{sequenceId} | Get a dialer sequence schedule.
[**getOutboundSchedulesSequences**](OutboundApi.html#getOutboundSchedulesSequences) | **GET** /api/v2/outbound/schedules/sequences | Query for a list of dialer sequence schedules.
[**getOutboundSequence**](OutboundApi.html#getOutboundSequence) | **GET** /api/v2/outbound/sequences/{sequenceId} | Get a dialer campaign sequence.
[**getOutboundSequences**](OutboundApi.html#getOutboundSequences) | **GET** /api/v2/outbound/sequences | Query a list of dialer campaign sequences.
[**getOutboundSettings**](OutboundApi.html#getOutboundSettings) | **GET** /api/v2/outbound/settings | Get the outbound settings for this organization
[**getOutboundWrapupcodemappings**](OutboundApi.html#getOutboundWrapupcodemappings) | **GET** /api/v2/outbound/wrapupcodemappings | Get the Dialer wrap up code mapping.
[**patchOutboundDnclistCustomexclusioncolumns**](OutboundApi.html#patchOutboundDnclistCustomexclusioncolumns) | **PATCH** /api/v2/outbound/dnclists/{dncListId}/customexclusioncolumns | Add entries to or delete entries from a DNC list.
[**patchOutboundDnclistEmailaddresses**](OutboundApi.html#patchOutboundDnclistEmailaddresses) | **PATCH** /api/v2/outbound/dnclists/{dncListId}/emailaddresses | Add emails to or Delete emails from a DNC list.
[**patchOutboundDnclistPhonenumbers**](OutboundApi.html#patchOutboundDnclistPhonenumbers) | **PATCH** /api/v2/outbound/dnclists/{dncListId}/phonenumbers | Add numbers to or delete numbers from a DNC list.
[**patchOutboundSettings**](OutboundApi.html#patchOutboundSettings) | **PATCH** /api/v2/outbound/settings | Update the outbound settings for this organization
[**postOutboundAttemptlimits**](OutboundApi.html#postOutboundAttemptlimits) | **POST** /api/v2/outbound/attemptlimits | Create attempt limits
[**postOutboundAudits**](OutboundApi.html#postOutboundAudits) | **POST** /api/v2/outbound/audits | Retrieves audits for dialer.
[**postOutboundCallabletimesets**](OutboundApi.html#postOutboundCallabletimesets) | **POST** /api/v2/outbound/callabletimesets | Create callable time set
[**postOutboundCallanalysisresponsesets**](OutboundApi.html#postOutboundCallanalysisresponsesets) | **POST** /api/v2/outbound/callanalysisresponsesets | Create a dialer call analysis response set.
[**postOutboundCampaignAgentownedmappingpreview**](OutboundApi.html#postOutboundCampaignAgentownedmappingpreview) | **POST** /api/v2/outbound/campaigns/{campaignId}/agentownedmappingpreview | Initiate request for a preview of how agents will be mapped to this campaign's contact list.
[**postOutboundCampaignCallbackSchedule**](OutboundApi.html#postOutboundCampaignCallbackSchedule) | **POST** /api/v2/outbound/campaigns/{campaignId}/callback/schedule | Schedule a Callback for a Dialer Campaign (Deprecated)
[**postOutboundCampaignrules**](OutboundApi.html#postOutboundCampaignrules) | **POST** /api/v2/outbound/campaignrules | Create Campaign Rule
[**postOutboundCampaigns**](OutboundApi.html#postOutboundCampaigns) | **POST** /api/v2/outbound/campaigns | Create a campaign.
[**postOutboundCampaignsProgress**](OutboundApi.html#postOutboundCampaignsProgress) | **POST** /api/v2/outbound/campaigns/progress | Get progress for a list of campaigns
[**postOutboundContactlistClear**](OutboundApi.html#postOutboundContactlistClear) | **POST** /api/v2/outbound/contactlists/{contactListId}/clear | Deletes all contacts out of a list. All outstanding recalls or rule-scheduled callbacks for non-preview campaigns configured with the contactlist will be cancelled.
[**postOutboundContactlistContacts**](OutboundApi.html#postOutboundContactlistContacts) | **POST** /api/v2/outbound/contactlists/{contactListId}/contacts | Add contacts to a contact list.
[**postOutboundContactlistContactsBulk**](OutboundApi.html#postOutboundContactlistContactsBulk) | **POST** /api/v2/outbound/contactlists/{contactListId}/contacts/bulk | Get contacts from a contact list.
[**postOutboundContactlistExport**](OutboundApi.html#postOutboundContactlistExport) | **POST** /api/v2/outbound/contactlists/{contactListId}/export | Initiate the export of a contact list.
[**postOutboundContactlistfilters**](OutboundApi.html#postOutboundContactlistfilters) | **POST** /api/v2/outbound/contactlistfilters | Create Contact List Filter
[**postOutboundContactlistfiltersPreview**](OutboundApi.html#postOutboundContactlistfiltersPreview) | **POST** /api/v2/outbound/contactlistfilters/preview | Get a preview of the output of a contact list filter
[**postOutboundContactlists**](OutboundApi.html#postOutboundContactlists) | **POST** /api/v2/outbound/contactlists | Create a contact List.
[**postOutboundConversationDnc**](OutboundApi.html#postOutboundConversationDnc) | **POST** /api/v2/outbound/conversations/{conversationId}/dnc | Add phone numbers to a Dialer DNC list.
[**postOutboundDigitalrulesets**](OutboundApi.html#postOutboundDigitalrulesets) | **POST** /api/v2/outbound/digitalrulesets | Create an Outbound Digital Rule Set
[**postOutboundDnclistEmailaddresses**](OutboundApi.html#postOutboundDnclistEmailaddresses) | **POST** /api/v2/outbound/dnclists/{dncListId}/emailaddresses | Add email addresses to a DNC list.
[**postOutboundDnclistExport**](OutboundApi.html#postOutboundDnclistExport) | **POST** /api/v2/outbound/dnclists/{dncListId}/export | Initiate the export of a dnc list.
[**postOutboundDnclistPhonenumbers**](OutboundApi.html#postOutboundDnclistPhonenumbers) | **POST** /api/v2/outbound/dnclists/{dncListId}/phonenumbers | Add phone numbers to a DNC list.
[**postOutboundDnclists**](OutboundApi.html#postOutboundDnclists) | **POST** /api/v2/outbound/dnclists | Create dialer DNC list
[**postOutboundMessagingcampaigns**](OutboundApi.html#postOutboundMessagingcampaigns) | **POST** /api/v2/outbound/messagingcampaigns | Create a Messaging Campaign
[**postOutboundMessagingcampaignsProgress**](OutboundApi.html#postOutboundMessagingcampaignsProgress) | **POST** /api/v2/outbound/messagingcampaigns/progress | Get progress for a list of messaging campaigns
[**postOutboundRulesets**](OutboundApi.html#postOutboundRulesets) | **POST** /api/v2/outbound/rulesets | Create a Rule Set.
[**postOutboundSequences**](OutboundApi.html#postOutboundSequences) | **POST** /api/v2/outbound/sequences | Create a new campaign sequence.
[**putOutboundAttemptlimit**](OutboundApi.html#putOutboundAttemptlimit) | **PUT** /api/v2/outbound/attemptlimits/{attemptLimitsId} | Update attempt limits
[**putOutboundCallabletimeset**](OutboundApi.html#putOutboundCallabletimeset) | **PUT** /api/v2/outbound/callabletimesets/{callableTimeSetId} | Update callable time set
[**putOutboundCallanalysisresponseset**](OutboundApi.html#putOutboundCallanalysisresponseset) | **PUT** /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId} | Update a dialer call analysis response set.
[**putOutboundCampaign**](OutboundApi.html#putOutboundCampaign) | **PUT** /api/v2/outbound/campaigns/{campaignId} | Update a campaign.
[**putOutboundCampaignAgent**](OutboundApi.html#putOutboundCampaignAgent) | **PUT** /api/v2/outbound/campaigns/{campaignId}/agents/{userId} | Send notification that an agent's state changed 
[**putOutboundCampaignrule**](OutboundApi.html#putOutboundCampaignrule) | **PUT** /api/v2/outbound/campaignrules/{campaignRuleId} | Update Campaign Rule
[**putOutboundContactlist**](OutboundApi.html#putOutboundContactlist) | **PUT** /api/v2/outbound/contactlists/{contactListId} | Update a contact list.
[**putOutboundContactlistContact**](OutboundApi.html#putOutboundContactlistContact) | **PUT** /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId} | Update a contact.
[**putOutboundContactlistfilter**](OutboundApi.html#putOutboundContactlistfilter) | **PUT** /api/v2/outbound/contactlistfilters/{contactListFilterId} | Update Contact List Filter
[**putOutboundDigitalruleset**](OutboundApi.html#putOutboundDigitalruleset) | **PUT** /api/v2/outbound/digitalrulesets/{digitalRuleSetId} | Update an Outbound Digital Rule Set
[**putOutboundDnclist**](OutboundApi.html#putOutboundDnclist) | **PUT** /api/v2/outbound/dnclists/{dncListId} | Update dialer DNC list
[**putOutboundMessagingcampaign**](OutboundApi.html#putOutboundMessagingcampaign) | **PUT** /api/v2/outbound/messagingcampaigns/{messagingCampaignId} | Update an Outbound Messaging Campaign
[**putOutboundRuleset**](OutboundApi.html#putOutboundRuleset) | **PUT** /api/v2/outbound/rulesets/{ruleSetId} | Update a Rule Set.
[**putOutboundSchedulesCampaign**](OutboundApi.html#putOutboundSchedulesCampaign) | **PUT** /api/v2/outbound/schedules/campaigns/{campaignId} | Update a new campaign schedule.
[**putOutboundSchedulesEmailcampaign**](OutboundApi.html#putOutboundSchedulesEmailcampaign) | **PUT** /api/v2/outbound/schedules/emailcampaigns/{emailCampaignId} | Update an email campaign schedule.
[**putOutboundSchedulesMessagingcampaign**](OutboundApi.html#putOutboundSchedulesMessagingcampaign) | **PUT** /api/v2/outbound/schedules/messagingcampaigns/{messagingCampaignId} | Update a new messaging campaign schedule.
[**putOutboundSchedulesSequence**](OutboundApi.html#putOutboundSchedulesSequence) | **PUT** /api/v2/outbound/schedules/sequences/{sequenceId} | Update a new sequence schedule.
[**putOutboundSequence**](OutboundApi.html#putOutboundSequence) | **PUT** /api/v2/outbound/sequences/{sequenceId} | Update a new campaign sequence.
[**putOutboundWrapupcodemappings**](OutboundApi.html#putOutboundWrapupcodemappings) | **PUT** /api/v2/outbound/wrapupcodemappings | Update the Dialer wrap up code mapping.
{: class="table table-striped"}

<a name="deleteOutboundAttemptlimit"></a>

# void deleteOutboundAttemptlimit(attemptLimitsId)


DELETE /api/v2/outbound/attemptlimits/{attemptLimitsId}

Delete attempt limits

Requires ANY permissions:

* outbound:attemptLimits:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let attemptLimitsId = "attemptLimitsId_example"; // String | Attempt limits ID

apiInstance.deleteOutboundAttemptlimit(attemptLimitsId)
  .then(() => {
    console.log('deleteOutboundAttemptlimit returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundAttemptlimit');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **attemptLimitsId** | **String** | Attempt limits ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOutboundCallabletimeset"></a>

# void deleteOutboundCallabletimeset(callableTimeSetId)


DELETE /api/v2/outbound/callabletimesets/{callableTimeSetId}

Delete callable time set

Requires ANY permissions:

* outbound:callableTimeSet:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let callableTimeSetId = "callableTimeSetId_example"; // String | Callable Time Set ID

apiInstance.deleteOutboundCallabletimeset(callableTimeSetId)
  .then(() => {
    console.log('deleteOutboundCallabletimeset returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundCallabletimeset');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **callableTimeSetId** | **String** | Callable Time Set ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOutboundCallanalysisresponseset"></a>

# void deleteOutboundCallanalysisresponseset(callAnalysisSetId)


DELETE /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}

Delete a dialer call analysis response set.

Requires ANY permissions:

* outbound:responseSet:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let callAnalysisSetId = "callAnalysisSetId_example"; // String | Call Analysis Response Set ID

apiInstance.deleteOutboundCallanalysisresponseset(callAnalysisSetId)
  .then(() => {
    console.log('deleteOutboundCallanalysisresponseset returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundCallanalysisresponseset');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **callAnalysisSetId** | **String** | Call Analysis Response Set ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOutboundCampaign"></a>

# Campaign deleteOutboundCampaign(campaignId)


DELETE /api/v2/outbound/campaigns/{campaignId}

Delete a campaign.

Requires ANY permissions:

* outbound:campaign:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.deleteOutboundCampaign(campaignId)
  .then((data) => {
    console.log(`deleteOutboundCampaign success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundCampaign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String** | Campaign ID |  |
{: class="table table-striped"}

### Return type

**Campaign**

<a name="deleteOutboundCampaignProgress"></a>

# void deleteOutboundCampaignProgress(campaignId)


DELETE /api/v2/outbound/campaigns/{campaignId}/progress

Reset campaign progress and recycle the campaign

Requires ANY permissions:

* outbound:campaign:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.deleteOutboundCampaignProgress(campaignId)
  .then(() => {
    console.log('deleteOutboundCampaignProgress returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundCampaignProgress');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String** | Campaign ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOutboundCampaignrule"></a>

# void deleteOutboundCampaignrule(campaignRuleId)


DELETE /api/v2/outbound/campaignrules/{campaignRuleId}

Delete Campaign Rule

Requires ANY permissions:

* outbound:campaignRule:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignRuleId = "campaignRuleId_example"; // String | Campaign Rule ID

apiInstance.deleteOutboundCampaignrule(campaignRuleId)
  .then(() => {
    console.log('deleteOutboundCampaignrule returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundCampaignrule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignRuleId** | **String** | Campaign Rule ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOutboundContactlist"></a>

# void deleteOutboundContactlist(contactListId)


DELETE /api/v2/outbound/contactlists/{contactListId}

Delete a contact list.

Requires ANY permissions:

* outbound:contactList:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListId = "contactListId_example"; // String | ContactList ID

apiInstance.deleteOutboundContactlist(contactListId)
  .then(() => {
    console.log('deleteOutboundContactlist returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundContactlist');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String** | ContactList ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOutboundContactlistContact"></a>

# void deleteOutboundContactlistContact(contactListId, contactId)


DELETE /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}

Delete a contact.

Requires ANY permissions:

* outbound:contact:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListId = "contactListId_example"; // String | Contact List ID
let contactId = "contactId_example"; // String | Contact ID

apiInstance.deleteOutboundContactlistContact(contactListId, contactId)
  .then(() => {
    console.log('deleteOutboundContactlistContact returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundContactlistContact');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String** | Contact List ID |  |
 **contactId** | **String** | Contact ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOutboundContactlistContacts"></a>

# void deleteOutboundContactlistContacts(contactListId, contactIds)


DELETE /api/v2/outbound/contactlists/{contactListId}/contacts

Delete contacts from a contact list.

Requires ANY permissions:

* outbound:contact:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListId = "contactListId_example"; // String | Contact List ID
let contactIds = ["contactIds_example"]; // [String] | ContactIds to delete.

apiInstance.deleteOutboundContactlistContacts(contactListId, contactIds)
  .then(() => {
    console.log('deleteOutboundContactlistContacts returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundContactlistContacts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String** | Contact List ID |  |
 **contactIds** | **[String]** | ContactIds to delete. |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOutboundContactlistfilter"></a>

# void deleteOutboundContactlistfilter(contactListFilterId)


DELETE /api/v2/outbound/contactlistfilters/{contactListFilterId}

Delete Contact List Filter

Requires ANY permissions:

* outbound:contactListFilter:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListFilterId = "contactListFilterId_example"; // String | Contact List Filter ID

apiInstance.deleteOutboundContactlistfilter(contactListFilterId)
  .then(() => {
    console.log('deleteOutboundContactlistfilter returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundContactlistfilter');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListFilterId** | **String** | Contact List Filter ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOutboundContactlists"></a>

# void deleteOutboundContactlists(id)


DELETE /api/v2/outbound/contactlists

Delete multiple contact lists.

Requires ANY permissions:

* outbound:contactList:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let id = ["id_example"]; // [String] | contact list id(s) to delete

apiInstance.deleteOutboundContactlists(id)
  .then(() => {
    console.log('deleteOutboundContactlists returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundContactlists');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **[String]** | contact list id(s) to delete |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOutboundDigitalruleset"></a>

# void deleteOutboundDigitalruleset(digitalRuleSetId)


DELETE /api/v2/outbound/digitalrulesets/{digitalRuleSetId}

Delete an Outbound Digital Rule Set

Requires ANY permissions:

* outbound:digitalRuleSet:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let digitalRuleSetId = "digitalRuleSetId_example"; // String | The Digital Rule Set ID

apiInstance.deleteOutboundDigitalruleset(digitalRuleSetId)
  .then(() => {
    console.log('deleteOutboundDigitalruleset returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundDigitalruleset');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **digitalRuleSetId** | **String** | The Digital Rule Set ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOutboundDnclist"></a>

# void deleteOutboundDnclist(dncListId)


DELETE /api/v2/outbound/dnclists/{dncListId}

Delete dialer DNC list

Requires ANY permissions:

* outbound:dncList:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let dncListId = "dncListId_example"; // String | DncList ID

apiInstance.deleteOutboundDnclist(dncListId)
  .then(() => {
    console.log('deleteOutboundDnclist returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundDnclist');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String** | DncList ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOutboundDnclistCustomexclusioncolumns"></a>

# void deleteOutboundDnclistCustomexclusioncolumns(dncListId, opts)


DELETE /api/v2/outbound/dnclists/{dncListId}/customexclusioncolumns

Deletes all or expired custom exclusion column entries from a DNC list.

This operation is only for Internal DNC lists of custom exclusion column entries

Requires ANY permissions:

* outbound:dnc:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let dncListId = "dncListId_example"; // String | DncList ID
let opts = { 
  'expiredOnly': false // Boolean | Set to true to only remove DNC entries that are expired
};

apiInstance.deleteOutboundDnclistCustomexclusioncolumns(dncListId, opts)
  .then(() => {
    console.log('deleteOutboundDnclistCustomexclusioncolumns returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundDnclistCustomexclusioncolumns');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String** | DncList ID |  |
 **expiredOnly** | **Boolean** | Set to true to only remove DNC entries that are expired | [optional] [default to false] |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOutboundDnclistEmailaddresses"></a>

# void deleteOutboundDnclistEmailaddresses(dncListId, opts)


DELETE /api/v2/outbound/dnclists/{dncListId}/emailaddresses

Deletes all or expired email addresses from a DNC list.

This operation is Only for Internal DNC lists of email addresses

Requires ANY permissions:

* outbound:dnc:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let dncListId = "dncListId_example"; // String | DncList ID
let opts = { 
  'expiredOnly': false // Boolean | Set to true to only remove DNC entries that are expired
};

apiInstance.deleteOutboundDnclistEmailaddresses(dncListId, opts)
  .then(() => {
    console.log('deleteOutboundDnclistEmailaddresses returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundDnclistEmailaddresses');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String** | DncList ID |  |
 **expiredOnly** | **Boolean** | Set to true to only remove DNC entries that are expired | [optional] [default to false] |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOutboundDnclistPhonenumbers"></a>

# void deleteOutboundDnclistPhonenumbers(dncListId, opts)


DELETE /api/v2/outbound/dnclists/{dncListId}/phonenumbers

Deletes all or expired phone numbers from a DNC list.

This operation is Only for Internal DNC lists of phone numbers

Requires ANY permissions:

* outbound:dnc:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let dncListId = "dncListId_example"; // String | DncList ID
let opts = { 
  'expiredOnly': false // Boolean | Set to true to only remove DNC entries that are expired
};

apiInstance.deleteOutboundDnclistPhonenumbers(dncListId, opts)
  .then(() => {
    console.log('deleteOutboundDnclistPhonenumbers returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundDnclistPhonenumbers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String** | DncList ID |  |
 **expiredOnly** | **Boolean** | Set to true to only remove DNC entries that are expired | [optional] [default to false] |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOutboundMessagingcampaign"></a>

# MessagingCampaign deleteOutboundMessagingcampaign(messagingCampaignId)


DELETE /api/v2/outbound/messagingcampaigns/{messagingCampaignId}

Delete an Outbound Messaging Campaign

Requires ANY permissions:

* outbound:messagingCampaign:delete
* outbound:emailCampaign:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let messagingCampaignId = "messagingCampaignId_example"; // String | The Messaging Campaign ID

apiInstance.deleteOutboundMessagingcampaign(messagingCampaignId)
  .then((data) => {
    console.log(`deleteOutboundMessagingcampaign success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundMessagingcampaign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messagingCampaignId** | **String** | The Messaging Campaign ID |  |
{: class="table table-striped"}

### Return type

**MessagingCampaign**

<a name="deleteOutboundMessagingcampaignProgress"></a>

# void deleteOutboundMessagingcampaignProgress(messagingCampaignId)


DELETE /api/v2/outbound/messagingcampaigns/{messagingCampaignId}/progress

Reset messaging campaign progress and recycle the messaging campaign

Requires ANY permissions:

* outbound:messagingCampaign:edit
* outbound:emailCampaign:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let messagingCampaignId = "messagingCampaignId_example"; // String | The Messaging Campaign ID

apiInstance.deleteOutboundMessagingcampaignProgress(messagingCampaignId)
  .then(() => {
    console.log('deleteOutboundMessagingcampaignProgress returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundMessagingcampaignProgress');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messagingCampaignId** | **String** | The Messaging Campaign ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOutboundRuleset"></a>

# void deleteOutboundRuleset(ruleSetId)


DELETE /api/v2/outbound/rulesets/{ruleSetId}

Delete a Rule Set.

Requires ANY permissions:

* outbound:ruleSet:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let ruleSetId = "ruleSetId_example"; // String | Rule Set ID

apiInstance.deleteOutboundRuleset(ruleSetId)
  .then(() => {
    console.log('deleteOutboundRuleset returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundRuleset');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleSetId** | **String** | Rule Set ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOutboundSchedulesCampaign"></a>

# void deleteOutboundSchedulesCampaign(campaignId)


DELETE /api/v2/outbound/schedules/campaigns/{campaignId}

Delete a dialer campaign schedule.

Requires ANY permissions:

* outbound:schedule:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.deleteOutboundSchedulesCampaign(campaignId)
  .then(() => {
    console.log('deleteOutboundSchedulesCampaign returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundSchedulesCampaign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String** | Campaign ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOutboundSchedulesEmailcampaign"></a>

# void deleteOutboundSchedulesEmailcampaign(emailCampaignId)


DELETE /api/v2/outbound/schedules/emailcampaigns/{emailCampaignId}

Delete an email campaign schedule.

Requires ANY permissions:

* outbound:emailCampaignSchedule:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let emailCampaignId = "emailCampaignId_example"; // String | Email Campaign ID

apiInstance.deleteOutboundSchedulesEmailcampaign(emailCampaignId)
  .then(() => {
    console.log('deleteOutboundSchedulesEmailcampaign returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundSchedulesEmailcampaign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **emailCampaignId** | **String** | Email Campaign ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOutboundSchedulesMessagingcampaign"></a>

# void deleteOutboundSchedulesMessagingcampaign(messagingCampaignId)


DELETE /api/v2/outbound/schedules/messagingcampaigns/{messagingCampaignId}

Delete a messaging campaign schedule.

Requires ANY permissions:

* outbound:messagingCampaignSchedule:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let messagingCampaignId = "messagingCampaignId_example"; // String | Messaging Campaign ID

apiInstance.deleteOutboundSchedulesMessagingcampaign(messagingCampaignId)
  .then(() => {
    console.log('deleteOutboundSchedulesMessagingcampaign returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundSchedulesMessagingcampaign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messagingCampaignId** | **String** | Messaging Campaign ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOutboundSchedulesSequence"></a>

# void deleteOutboundSchedulesSequence(sequenceId)


DELETE /api/v2/outbound/schedules/sequences/{sequenceId}

Delete a dialer sequence schedule.

Requires ANY permissions:

* outbound:schedule:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let sequenceId = "sequenceId_example"; // String | Sequence ID

apiInstance.deleteOutboundSchedulesSequence(sequenceId)
  .then(() => {
    console.log('deleteOutboundSchedulesSequence returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundSchedulesSequence');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sequenceId** | **String** | Sequence ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOutboundSequence"></a>

# void deleteOutboundSequence(sequenceId)


DELETE /api/v2/outbound/sequences/{sequenceId}

Delete a dialer campaign sequence.

Requires ANY permissions:

* outbound:campaignSequence:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let sequenceId = "sequenceId_example"; // String | Campaign Sequence ID

apiInstance.deleteOutboundSequence(sequenceId)
  .then(() => {
    console.log('deleteOutboundSequence returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundSequence');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sequenceId** | **String** | Campaign Sequence ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getOutboundAttemptlimit"></a>

# AttemptLimits getOutboundAttemptlimit(attemptLimitsId)


GET /api/v2/outbound/attemptlimits/{attemptLimitsId}

Get attempt limits

Requires ANY permissions:

* outbound:attemptLimits:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let attemptLimitsId = "attemptLimitsId_example"; // String | Attempt limits ID

apiInstance.getOutboundAttemptlimit(attemptLimitsId)
  .then((data) => {
    console.log(`getOutboundAttemptlimit success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundAttemptlimit');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **attemptLimitsId** | **String** | Attempt limits ID |  |
{: class="table table-striped"}

### Return type

**AttemptLimits**

<a name="getOutboundAttemptlimits"></a>

# AttemptLimitsEntityListing getOutboundAttemptlimits(opts)


GET /api/v2/outbound/attemptlimits

Query attempt limits list

Requires ANY permissions:

* outbound:attemptLimits:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let opts = { 
  'pageSize': 25, // Number | Page size. The max that will be returned is 100.
  'pageNumber': 1, // Number | Page number
  'allowEmptyResult': false, // Boolean | Whether to return an empty page when there are no results for that page
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a" // String | Sort order
};

apiInstance.getOutboundAttemptlimits(opts)
  .then((data) => {
    console.log(`getOutboundAttemptlimits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundAttemptlimits');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size. The max that will be returned is 100. | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **allowEmptyResult** | **Boolean** | Whether to return an empty page when there are no results for that page | [optional] [default to false] |
 **filterType** | **String** | Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String** | Name | [optional]  |
 **sortBy** | **String** | Sort by | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**AttemptLimitsEntityListing**

<a name="getOutboundCallabletimeset"></a>

# CallableTimeSet getOutboundCallabletimeset(callableTimeSetId)


GET /api/v2/outbound/callabletimesets/{callableTimeSetId}

Get callable time set

Requires ANY permissions:

* outbound:callableTimeSet:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let callableTimeSetId = "callableTimeSetId_example"; // String | Callable Time Set ID

apiInstance.getOutboundCallabletimeset(callableTimeSetId)
  .then((data) => {
    console.log(`getOutboundCallabletimeset success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundCallabletimeset');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **callableTimeSetId** | **String** | Callable Time Set ID |  |
{: class="table table-striped"}

### Return type

**CallableTimeSet**

<a name="getOutboundCallabletimesets"></a>

# CallableTimeSetEntityListing getOutboundCallabletimesets(opts)


GET /api/v2/outbound/callabletimesets

Query callable time set list

Requires ANY permissions:

* outbound:callableTimeSet:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let opts = { 
  'pageSize': 25, // Number | Page size. The max that will be returned is 100.
  'pageNumber': 1, // Number | Page number
  'allowEmptyResult': false, // Boolean | Whether to return an empty page when there are no results for that page
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a" // String | Sort order
};

apiInstance.getOutboundCallabletimesets(opts)
  .then((data) => {
    console.log(`getOutboundCallabletimesets success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundCallabletimesets');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size. The max that will be returned is 100. | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **allowEmptyResult** | **Boolean** | Whether to return an empty page when there are no results for that page | [optional] [default to false] |
 **filterType** | **String** | Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String** | Name | [optional]  |
 **sortBy** | **String** | Sort by | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**CallableTimeSetEntityListing**

<a name="getOutboundCallanalysisresponseset"></a>

# ResponseSet getOutboundCallanalysisresponseset(callAnalysisSetId)


GET /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}

Get a dialer call analysis response set.

Requires ANY permissions:

* outbound:responseSet:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let callAnalysisSetId = "callAnalysisSetId_example"; // String | Call Analysis Response Set ID

apiInstance.getOutboundCallanalysisresponseset(callAnalysisSetId)
  .then((data) => {
    console.log(`getOutboundCallanalysisresponseset success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundCallanalysisresponseset');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **callAnalysisSetId** | **String** | Call Analysis Response Set ID |  |
{: class="table table-striped"}

### Return type

**ResponseSet**

<a name="getOutboundCallanalysisresponsesets"></a>

# ResponseSetEntityListing getOutboundCallanalysisresponsesets(opts)


GET /api/v2/outbound/callanalysisresponsesets

Query a list of dialer call analysis response sets.

Requires ANY permissions:

* outbound:responseSet:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let opts = { 
  'pageSize': 25, // Number | Page size. The max that will be returned is 100.
  'pageNumber': 1, // Number | Page number
  'allowEmptyResult': false, // Boolean | Whether to return an empty page when there are no results for that page
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a" // String | Sort order
};

apiInstance.getOutboundCallanalysisresponsesets(opts)
  .then((data) => {
    console.log(`getOutboundCallanalysisresponsesets success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundCallanalysisresponsesets');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size. The max that will be returned is 100. | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **allowEmptyResult** | **Boolean** | Whether to return an empty page when there are no results for that page | [optional] [default to false] |
 **filterType** | **String** | Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String** | Name | [optional]  |
 **sortBy** | **String** | Sort by | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**ResponseSetEntityListing**

<a name="getOutboundCampaign"></a>

# Campaign getOutboundCampaign(campaignId)


GET /api/v2/outbound/campaigns/{campaignId}

Get dialer campaign.

Requires ANY permissions:

* outbound:campaign:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.getOutboundCampaign(campaignId)
  .then((data) => {
    console.log(`getOutboundCampaign success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundCampaign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String** | Campaign ID |  |
{: class="table table-striped"}

### Return type

**Campaign**

<a name="getOutboundCampaignAgentownedmappingpreviewResults"></a>

# AgentOwnedMappingPreviewListing getOutboundCampaignAgentownedmappingpreviewResults(campaignId)


GET /api/v2/outbound/campaigns/{campaignId}/agentownedmappingpreview/results

Get a preview of how agents will be mapped to this campaign's contact list.

Requires ALL permissions:

* outbound:campaign:view
* outbound:contact:view
* routing:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.getOutboundCampaignAgentownedmappingpreviewResults(campaignId)
  .then((data) => {
    console.log(`getOutboundCampaignAgentownedmappingpreviewResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundCampaignAgentownedmappingpreviewResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String** | Campaign ID |  |
{: class="table table-striped"}

### Return type

**AgentOwnedMappingPreviewListing**

<a name="getOutboundCampaignDiagnostics"></a>

# CampaignDiagnostics getOutboundCampaignDiagnostics(campaignId)


GET /api/v2/outbound/campaigns/{campaignId}/diagnostics

Get campaign diagnostics

Requires ANY permissions:

* outbound:campaign:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.getOutboundCampaignDiagnostics(campaignId)
  .then((data) => {
    console.log(`getOutboundCampaignDiagnostics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundCampaignDiagnostics');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String** | Campaign ID |  |
{: class="table table-striped"}

### Return type

**CampaignDiagnostics**

<a name="getOutboundCampaignInteractions"></a>

# CampaignInteractions getOutboundCampaignInteractions(campaignId)


GET /api/v2/outbound/campaigns/{campaignId}/interactions

Get dialer campaign interactions.

Requires ANY permissions:

* outbound:campaign:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.getOutboundCampaignInteractions(campaignId)
  .then((data) => {
    console.log(`getOutboundCampaignInteractions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundCampaignInteractions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String** | Campaign ID |  |
{: class="table table-striped"}

### Return type

**CampaignInteractions**

<a name="getOutboundCampaignProgress"></a>

# CampaignProgress getOutboundCampaignProgress(campaignId)


GET /api/v2/outbound/campaigns/{campaignId}/progress

Get campaign progress

Requires ANY permissions:

* outbound:campaign:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.getOutboundCampaignProgress(campaignId)
  .then((data) => {
    console.log(`getOutboundCampaignProgress success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundCampaignProgress');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String** | Campaign ID |  |
{: class="table table-striped"}

### Return type

**CampaignProgress**

<a name="getOutboundCampaignStats"></a>

# CampaignStats getOutboundCampaignStats(campaignId)


GET /api/v2/outbound/campaigns/{campaignId}/stats

Get statistics about a Dialer Campaign

Requires ANY permissions:

* outbound:campaign:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.getOutboundCampaignStats(campaignId)
  .then((data) => {
    console.log(`getOutboundCampaignStats success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundCampaignStats');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String** | Campaign ID |  |
{: class="table table-striped"}

### Return type

**CampaignStats**

<a name="getOutboundCampaignrule"></a>

# CampaignRule getOutboundCampaignrule(campaignRuleId)


GET /api/v2/outbound/campaignrules/{campaignRuleId}

Get Campaign Rule

Requires ANY permissions:

* outbound:campaignRule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignRuleId = "campaignRuleId_example"; // String | Campaign Rule ID

apiInstance.getOutboundCampaignrule(campaignRuleId)
  .then((data) => {
    console.log(`getOutboundCampaignrule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundCampaignrule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignRuleId** | **String** | Campaign Rule ID |  |
{: class="table table-striped"}

### Return type

**CampaignRule**

<a name="getOutboundCampaignrules"></a>

# CampaignRuleEntityListing getOutboundCampaignrules(opts)


GET /api/v2/outbound/campaignrules

Query Campaign Rule list

Requires ANY permissions:

* outbound:campaignRule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let opts = { 
  'pageSize': 25, // Number | Page size. The max that will be returned is 100.
  'pageNumber': 1, // Number | Page number
  'allowEmptyResult': false, // Boolean | Whether to return an empty page when there are no results for that page
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a" // String | Sort order
};

apiInstance.getOutboundCampaignrules(opts)
  .then((data) => {
    console.log(`getOutboundCampaignrules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundCampaignrules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size. The max that will be returned is 100. | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **allowEmptyResult** | **Boolean** | Whether to return an empty page when there are no results for that page | [optional] [default to false] |
 **filterType** | **String** | Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String** | Name | [optional]  |
 **sortBy** | **String** | Sort by | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**CampaignRuleEntityListing**

<a name="getOutboundCampaigns"></a>

# CampaignEntityListing getOutboundCampaigns(opts)


GET /api/v2/outbound/campaigns

Query a list of dialer campaigns.

Requires ANY permissions:

* outbound:campaign:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let opts = { 
  'pageSize': 25, // Number | Page size. The max that will be returned is 100.
  'pageNumber': 1, // Number | Page number
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'id': ["id_example"], // [String] | id
  'contactListId': "contactListId_example", // String | Contact List ID
  'dncListIds': "dncListIds_example", // String | DNC list ID
  'distributionQueueId': "distributionQueueId_example", // String | Distribution queue ID
  'edgeGroupId': "edgeGroupId_example", // String | Edge group ID
  'callAnalysisResponseSetId': "callAnalysisResponseSetId_example", // String | Call analysis response set ID
  'divisionId': ["divisionId_example"], // [String] | Division ID(s)
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a" // String | Sort order
};

apiInstance.getOutboundCampaigns(opts)
  .then((data) => {
    console.log(`getOutboundCampaigns success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundCampaigns');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size. The max that will be returned is 100. | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **filterType** | **String** | Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String** | Name | [optional]  |
 **id** | **[String]** | id | [optional]  |
 **contactListId** | **String** | Contact List ID | [optional]  |
 **dncListIds** | **String** | DNC list ID | [optional]  |
 **distributionQueueId** | **String** | Distribution queue ID | [optional]  |
 **edgeGroupId** | **String** | Edge group ID | [optional]  |
 **callAnalysisResponseSetId** | **String** | Call analysis response set ID | [optional]  |
 **divisionId** | **[String]** | Division ID(s) | [optional]  |
 **sortBy** | **String** | Sort by | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**CampaignEntityListing**

<a name="getOutboundCampaignsAll"></a>

# CommonCampaignEntityListing getOutboundCampaignsAll(opts)


GET /api/v2/outbound/campaigns/all

Query across all types of campaigns by division

Requires ANY permissions:

* outbound:campaign:view
* outbound:messagingCampaign:view
* outbound:emailCampaign:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'id': ["id_example"], // [String] | Campaign ID(s)
  'name': "name_example", // String | Campaign name(s)
  'divisionId': ["divisionId_example"], // [String] | Division ID(s)
  'mediaType': ["mediaType_example"], // [String] | Media type(s)
  'sortOrder': "a" // String | Sort order
};

apiInstance.getOutboundCampaignsAll(opts)
  .then((data) => {
    console.log(`getOutboundCampaignsAll success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundCampaignsAll');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **id** | **[String]** | Campaign ID(s) | [optional]  |
 **name** | **String** | Campaign name(s) | [optional]  |
 **divisionId** | **[String]** | Division ID(s) | [optional]  |
 **mediaType** | **[String]** | Media type(s) | [optional] <br />**Values**: email, sms, voice |
 **sortOrder** | **String** | Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**CommonCampaignEntityListing**

<a name="getOutboundCampaignsAllDivisionviews"></a>

# CommonCampaignDivisionViewEntityListing getOutboundCampaignsAllDivisionviews(opts)


GET /api/v2/outbound/campaigns/all/divisionviews

Query across all types of campaigns

Requires ANY permissions:

* outbound:campaign:search
* outbound:messagingCampaign:search
* outbound:emailCampaign:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'id': ["id_example"], // [String] | Campaign ID(s)
  'name': "name_example", // String | Campaign name(s)
  'divisionId': ["divisionId_example"], // [String] | Division ID(s)
  'mediaType': ["mediaType_example"], // [String] | Media type(s)
  'sortOrder': "a" // String | Sort order
};

apiInstance.getOutboundCampaignsAllDivisionviews(opts)
  .then((data) => {
    console.log(`getOutboundCampaignsAllDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundCampaignsAllDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **id** | **[String]** | Campaign ID(s) | [optional]  |
 **name** | **String** | Campaign name(s) | [optional]  |
 **divisionId** | **[String]** | Division ID(s) | [optional]  |
 **mediaType** | **[String]** | Media type(s) | [optional] <br />**Values**: email, sms, voice |
 **sortOrder** | **String** | Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**CommonCampaignDivisionViewEntityListing**

<a name="getOutboundCampaignsDivisionview"></a>

# CampaignDivisionView getOutboundCampaignsDivisionview(campaignId)


GET /api/v2/outbound/campaigns/divisionviews/{campaignId}

Get a basic Campaign information object

This returns a simplified version of a Campaign, consisting of name and division.

Requires ALL permissions:

* outbound:campaign:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.getOutboundCampaignsDivisionview(campaignId)
  .then((data) => {
    console.log(`getOutboundCampaignsDivisionview success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundCampaignsDivisionview');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String** | Campaign ID |  |
{: class="table table-striped"}

### Return type

**CampaignDivisionView**

<a name="getOutboundCampaignsDivisionviews"></a>

# CampaignDivisionViewListing getOutboundCampaignsDivisionviews(opts)


GET /api/v2/outbound/campaigns/divisionviews

Query a list of basic Campaign information objects

This returns a simplified version of a Campaign, consisting of name and division.

Requires ALL permissions:

* outbound:campaign:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let opts = { 
  'pageSize': 25, // Number | Page size. The max that will be returned is 100.
  'pageNumber': 1, // Number | Page number
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'id': ["id_example"], // [String] | id
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a" // String | Sort order
};

apiInstance.getOutboundCampaignsDivisionviews(opts)
  .then((data) => {
    console.log(`getOutboundCampaignsDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundCampaignsDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size. The max that will be returned is 100. | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **filterType** | **String** | Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String** | Name | [optional]  |
 **id** | **[String]** | id | [optional]  |
 **sortBy** | **String** | Sort by | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**CampaignDivisionViewListing**

<a name="getOutboundContactlist"></a>

# ContactList getOutboundContactlist(contactListId, opts)


GET /api/v2/outbound/contactlists/{contactListId}

Get a dialer contact list.

Requires ANY permissions:

* outbound:contactList:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListId = "contactListId_example"; // String | ContactList ID
let opts = { 
  'includeImportStatus': false, // Boolean | Import status
  'includeSize': false // Boolean | Include size
};

apiInstance.getOutboundContactlist(contactListId, opts)
  .then((data) => {
    console.log(`getOutboundContactlist success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundContactlist');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String** | ContactList ID |  |
 **includeImportStatus** | **Boolean** | Import status | [optional] [default to false] |
 **includeSize** | **Boolean** | Include size | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**ContactList**

<a name="getOutboundContactlistContact"></a>

# DialerContact getOutboundContactlistContact(contactListId, contactId)


GET /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}

Get a contact.

Requires ANY permissions:

* outbound:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListId = "contactListId_example"; // String | Contact List ID
let contactId = "contactId_example"; // String | Contact ID

apiInstance.getOutboundContactlistContact(contactListId, contactId)
  .then((data) => {
    console.log(`getOutboundContactlistContact success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundContactlistContact');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String** | Contact List ID |  |
 **contactId** | **String** | Contact ID |  |
{: class="table table-striped"}

### Return type

**DialerContact**

<a name="getOutboundContactlistExport"></a>

# ExportUri getOutboundContactlistExport(contactListId, opts)


GET /api/v2/outbound/contactlists/{contactListId}/export

Get the URI of a contact list export.

Requires ALL permissions:

* outbound:contact:view
* outbound:contactList:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListId = "contactListId_example"; // String | ContactList ID
let opts = { 
  'download': "false" // String | Redirect to download uri
};

apiInstance.getOutboundContactlistExport(contactListId, opts)
  .then((data) => {
    console.log(`getOutboundContactlistExport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundContactlistExport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String** | ContactList ID |  |
 **download** | **String** | Redirect to download uri | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**ExportUri**

<a name="getOutboundContactlistImportstatus"></a>

# ImportStatus getOutboundContactlistImportstatus(contactListId)


GET /api/v2/outbound/contactlists/{contactListId}/importstatus

Get dialer contactList import status.

Requires ANY permissions:

* outbound:contactList:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListId = "contactListId_example"; // String | ContactList ID

apiInstance.getOutboundContactlistImportstatus(contactListId)
  .then((data) => {
    console.log(`getOutboundContactlistImportstatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundContactlistImportstatus');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String** | ContactList ID |  |
{: class="table table-striped"}

### Return type

**ImportStatus**

<a name="getOutboundContactlistTimezonemappingpreview"></a>

# TimeZoneMappingPreview getOutboundContactlistTimezonemappingpreview(contactListId)


GET /api/v2/outbound/contactlists/{contactListId}/timezonemappingpreview

Preview the result of applying Automatic Time Zone Mapping to a contact list

Requires ANY permissions:

* outbound:contactList:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListId = "contactListId_example"; // String | ContactList ID

apiInstance.getOutboundContactlistTimezonemappingpreview(contactListId)
  .then((data) => {
    console.log(`getOutboundContactlistTimezonemappingpreview success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundContactlistTimezonemappingpreview');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String** | ContactList ID |  |
{: class="table table-striped"}

### Return type

**TimeZoneMappingPreview**

<a name="getOutboundContactlistfilter"></a>

# ContactListFilter getOutboundContactlistfilter(contactListFilterId)


GET /api/v2/outbound/contactlistfilters/{contactListFilterId}

Get Contact list filter

Requires ANY permissions:

* outbound:contactListFilter:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListFilterId = "contactListFilterId_example"; // String | Contact List Filter ID

apiInstance.getOutboundContactlistfilter(contactListFilterId)
  .then((data) => {
    console.log(`getOutboundContactlistfilter success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundContactlistfilter');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListFilterId** | **String** | Contact List Filter ID |  |
{: class="table table-striped"}

### Return type

**ContactListFilter**

<a name="getOutboundContactlistfilters"></a>

# ContactListFilterEntityListing getOutboundContactlistfilters(opts)


GET /api/v2/outbound/contactlistfilters

Query Contact list filters

Requires ANY permissions:

* outbound:contactListFilter:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let opts = { 
  'pageSize': 25, // Number | Page size. The max that will be returned is 100.
  'pageNumber': 1, // Number | Page number
  'allowEmptyResult': false, // Boolean | Whether to return an empty page when there are no results for that page
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a", // String | Sort order
  'contactListId': "contactListId_example" // String | Contact List ID
};

apiInstance.getOutboundContactlistfilters(opts)
  .then((data) => {
    console.log(`getOutboundContactlistfilters success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundContactlistfilters');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size. The max that will be returned is 100. | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **allowEmptyResult** | **Boolean** | Whether to return an empty page when there are no results for that page | [optional] [default to false] |
 **filterType** | **String** | Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String** | Name | [optional]  |
 **sortBy** | **String** | Sort by | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
 **contactListId** | **String** | Contact List ID | [optional]  |
{: class="table table-striped"}

### Return type

**ContactListFilterEntityListing**

<a name="getOutboundContactlists"></a>

# ContactListEntityListing getOutboundContactlists(opts)


GET /api/v2/outbound/contactlists

Query a list of contact lists.

Requires ANY permissions:

* outbound:contactList:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let opts = { 
  'includeImportStatus': false, // Boolean | Include import status
  'includeSize': false, // Boolean | Include size
  'pageSize': 25, // Number | Page size. The max that will be returned is 100.
  'pageNumber': 1, // Number | Page number
  'allowEmptyResult': false, // Boolean | Whether to return an empty page when there are no results for that page
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'id': ["id_example"], // [String] | id
  'divisionId': ["divisionId_example"], // [String] | Division ID(s)
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a" // String | Sort order
};

apiInstance.getOutboundContactlists(opts)
  .then((data) => {
    console.log(`getOutboundContactlists success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundContactlists');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **includeImportStatus** | **Boolean** | Include import status | [optional] [default to false] |
 **includeSize** | **Boolean** | Include size | [optional] [default to false] |
 **pageSize** | **Number** | Page size. The max that will be returned is 100. | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **allowEmptyResult** | **Boolean** | Whether to return an empty page when there are no results for that page | [optional] [default to false] |
 **filterType** | **String** | Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String** | Name | [optional]  |
 **id** | **[String]** | id | [optional]  |
 **divisionId** | **[String]** | Division ID(s) | [optional]  |
 **sortBy** | **String** | Sort by | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**ContactListEntityListing**

<a name="getOutboundContactlistsDivisionview"></a>

# ContactListDivisionView getOutboundContactlistsDivisionview(contactListId, opts)


GET /api/v2/outbound/contactlists/divisionviews/{contactListId}

Get a basic ContactList information object

This returns a simplified version of a ContactList, consisting of the name, division, column names, phone columns, import status, and size.

Requires ALL permissions:

* outbound:contactList:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListId = "contactListId_example"; // String | Contactlist ID
let opts = { 
  'includeImportStatus': false, // Boolean | Include import status
  'includeSize': false // Boolean | Include size
};

apiInstance.getOutboundContactlistsDivisionview(contactListId, opts)
  .then((data) => {
    console.log(`getOutboundContactlistsDivisionview success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundContactlistsDivisionview');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String** | Contactlist ID |  |
 **includeImportStatus** | **Boolean** | Include import status | [optional] [default to false] |
 **includeSize** | **Boolean** | Include size | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**ContactListDivisionView**

<a name="getOutboundContactlistsDivisionviews"></a>

# ContactListDivisionViewListing getOutboundContactlistsDivisionviews(opts)


GET /api/v2/outbound/contactlists/divisionviews

Query a list of simplified contact list objects.

This return a simplified version of contact lists, consisting of the name, division, column names, phone columns, import status, and size.

Requires ALL permissions:

* outbound:contactList:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let opts = { 
  'includeImportStatus': false, // Boolean | Include import status
  'includeSize': false, // Boolean | Include size
  'pageSize': 25, // Number | Page size. The max that will be returned is 100.
  'pageNumber': 1, // Number | Page number
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'id': ["id_example"], // [String] | id
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a" // String | Sort order
};

apiInstance.getOutboundContactlistsDivisionviews(opts)
  .then((data) => {
    console.log(`getOutboundContactlistsDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundContactlistsDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **includeImportStatus** | **Boolean** | Include import status | [optional] [default to false] |
 **includeSize** | **Boolean** | Include size | [optional] [default to false] |
 **pageSize** | **Number** | Page size. The max that will be returned is 100. | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **filterType** | **String** | Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String** | Name | [optional]  |
 **id** | **[String]** | id | [optional]  |
 **sortBy** | **String** | Sort by | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**ContactListDivisionViewListing**

<a name="getOutboundDigitalruleset"></a>

# DigitalRuleSet getOutboundDigitalruleset(digitalRuleSetId)


GET /api/v2/outbound/digitalrulesets/{digitalRuleSetId}

Get an Outbound Digital Rule Set

Requires ANY permissions:

* outbound:digitalRuleSet:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let digitalRuleSetId = "digitalRuleSetId_example"; // String | The Digital Rule Set ID

apiInstance.getOutboundDigitalruleset(digitalRuleSetId)
  .then((data) => {
    console.log(`getOutboundDigitalruleset success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundDigitalruleset');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **digitalRuleSetId** | **String** | The Digital Rule Set ID |  |
{: class="table table-striped"}

### Return type

**DigitalRuleSet**

<a name="getOutboundDigitalrulesets"></a>

# DigitalRuleSetEntityListing getOutboundDigitalrulesets(opts)


GET /api/v2/outbound/digitalrulesets

Query a list of Outbound Digital Rule Sets

Requires ANY permissions:

* outbound:digitalRuleSet:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let opts = { 
  'pageSize': 25, // Number | Page size. The max that will be returned is 100.
  'pageNumber': 1, // Number | Page number
  'sortBy': "name", // String | The field to sort by
  'sortOrder': "ascending", // String | The direction to sort
  'name': "name_example", // String | Name
  'id': ["id_example"] // [String] | A list of digital rule set ids to bulk fetch
};

apiInstance.getOutboundDigitalrulesets(opts)
  .then((data) => {
    console.log(`getOutboundDigitalrulesets success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundDigitalrulesets');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size. The max that will be returned is 100. | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | The field to sort by | [optional] [default to name]<br />**Values**: name |
 **sortOrder** | **String** | The direction to sort | [optional] [default to ascending]<br />**Values**: ascending, descending |
 **name** | **String** | Name | [optional]  |
 **id** | **[String]** | A list of digital rule set ids to bulk fetch | [optional]  |
{: class="table table-striped"}

### Return type

**DigitalRuleSetEntityListing**

<a name="getOutboundDnclist"></a>

# DncList getOutboundDnclist(dncListId, opts)


GET /api/v2/outbound/dnclists/{dncListId}

Get dialer DNC list

Requires ANY permissions:

* outbound:dncList:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let dncListId = "dncListId_example"; // String | DncList ID
let opts = { 
  'includeImportStatus': false, // Boolean | Import status
  'includeSize': false // Boolean | Include size
};

apiInstance.getOutboundDnclist(dncListId, opts)
  .then((data) => {
    console.log(`getOutboundDnclist success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundDnclist');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String** | DncList ID |  |
 **includeImportStatus** | **Boolean** | Import status | [optional] [default to false] |
 **includeSize** | **Boolean** | Include size | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**DncList**

<a name="getOutboundDnclistExport"></a>

# ExportUri getOutboundDnclistExport(dncListId, opts)


GET /api/v2/outbound/dnclists/{dncListId}/export

Get the URI of a DNC list export.

Requires ALL permissions:

* outbound:dnc:view
* outbound:dncList:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let dncListId = "dncListId_example"; // String | DncList ID
let opts = { 
  'download': "false" // String | Redirect to download uri
};

apiInstance.getOutboundDnclistExport(dncListId, opts)
  .then((data) => {
    console.log(`getOutboundDnclistExport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundDnclistExport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String** | DncList ID |  |
 **download** | **String** | Redirect to download uri | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**ExportUri**

<a name="getOutboundDnclistImportstatus"></a>

# ImportStatus getOutboundDnclistImportstatus(dncListId)


GET /api/v2/outbound/dnclists/{dncListId}/importstatus

Get dialer dncList import status.

Requires ANY permissions:

* outbound:dncList:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let dncListId = "dncListId_example"; // String | DncList ID

apiInstance.getOutboundDnclistImportstatus(dncListId)
  .then((data) => {
    console.log(`getOutboundDnclistImportstatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundDnclistImportstatus');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String** | DncList ID |  |
{: class="table table-striped"}

### Return type

**ImportStatus**

<a name="getOutboundDnclists"></a>

# DncListEntityListing getOutboundDnclists(opts)


GET /api/v2/outbound/dnclists

Query dialer DNC lists

Requires ANY permissions:

* outbound:dncList:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let opts = { 
  'includeImportStatus': false, // Boolean | Import status
  'includeSize': false, // Boolean | Include size
  'pageSize': 25, // Number | Page size. The max that will be returned is 100.
  'pageNumber': 1, // Number | Page number
  'allowEmptyResult': false, // Boolean | Whether to return an empty page when there are no results for that page
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'dncSourceType': "dncSourceType_example", // String | DncSourceType
  'divisionId': ["divisionId_example"], // [String] | Division ID(s)
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "sortOrder_example" // String | Sort order
};

apiInstance.getOutboundDnclists(opts)
  .then((data) => {
    console.log(`getOutboundDnclists success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundDnclists');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **includeImportStatus** | **Boolean** | Import status | [optional] [default to false] |
 **includeSize** | **Boolean** | Include size | [optional] [default to false] |
 **pageSize** | **Number** | Page size. The max that will be returned is 100. | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **allowEmptyResult** | **Boolean** | Whether to return an empty page when there are no results for that page | [optional] [default to false] |
 **filterType** | **String** | Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String** | Name | [optional]  |
 **dncSourceType** | **String** | DncSourceType | [optional] <br />**Values**: rds, rds_custom, dnc.com, gryphon |
 **divisionId** | **[String]** | Division ID(s) | [optional]  |
 **sortBy** | **String** | Sort by | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] <br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**DncListEntityListing**

<a name="getOutboundDnclistsDivisionview"></a>

# DncListDivisionView getOutboundDnclistsDivisionview(dncListId, opts)


GET /api/v2/outbound/dnclists/divisionviews/{dncListId}

Get a basic DncList information object

This returns a simplified version of a DncList, consisting of the name, division, import status, and size.

Requires ALL permissions:

* outbound:dncList:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let dncListId = "dncListId_example"; // String | Dnclist ID
let opts = { 
  'includeImportStatus': false, // Boolean | Include import status
  'includeSize': false // Boolean | Include size
};

apiInstance.getOutboundDnclistsDivisionview(dncListId, opts)
  .then((data) => {
    console.log(`getOutboundDnclistsDivisionview success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundDnclistsDivisionview');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String** | Dnclist ID |  |
 **includeImportStatus** | **Boolean** | Include import status | [optional] [default to false] |
 **includeSize** | **Boolean** | Include size | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**DncListDivisionView**

<a name="getOutboundDnclistsDivisionviews"></a>

# DncListDivisionViewListing getOutboundDnclistsDivisionviews(opts)


GET /api/v2/outbound/dnclists/divisionviews

Query a list of simplified dnc list objects.

This return a simplified version of dnc lists, consisting of the name, division, import status, and size.

Requires ALL permissions:

* outbound:dncList:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let opts = { 
  'includeImportStatus': false, // Boolean | Include import status
  'includeSize': false, // Boolean | Include size
  'pageSize': 25, // Number | Page size. The max that will be returned is 100.
  'pageNumber': 1, // Number | Page number
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'dncSourceType': "dncSourceType_example", // String | DncSourceType
  'id': ["id_example"], // [String] | id
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a" // String | Sort order
};

apiInstance.getOutboundDnclistsDivisionviews(opts)
  .then((data) => {
    console.log(`getOutboundDnclistsDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundDnclistsDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **includeImportStatus** | **Boolean** | Include import status | [optional] [default to false] |
 **includeSize** | **Boolean** | Include size | [optional] [default to false] |
 **pageSize** | **Number** | Page size. The max that will be returned is 100. | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **filterType** | **String** | Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String** | Name | [optional]  |
 **dncSourceType** | **String** | DncSourceType | [optional] <br />**Values**: rds, rds_custom, dnc.com, gryphon |
 **id** | **[String]** | id | [optional]  |
 **sortBy** | **String** | Sort by | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**DncListDivisionViewListing**

<a name="getOutboundEvent"></a>

# EventLog getOutboundEvent(eventId)


GET /api/v2/outbound/events/{eventId}

Get Dialer Event

Requires ANY permissions:

* outbound:eventLog:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let eventId = "eventId_example"; // String | Event Log ID

apiInstance.getOutboundEvent(eventId)
  .then((data) => {
    console.log(`getOutboundEvent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundEvent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **eventId** | **String** | Event Log ID |  |
{: class="table table-striped"}

### Return type

**EventLog**

<a name="getOutboundEvents"></a>

# DialerEventEntityListing getOutboundEvents(opts)


GET /api/v2/outbound/events

Query Event Logs

Requires ANY permissions:

* outbound:eventLog:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'filterType': "Prefix", // String | Filter type
  'category': "category_example", // String | Category
  'level': "level_example", // String | Level
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a" // String | Sort order
};

apiInstance.getOutboundEvents(opts)
  .then((data) => {
    console.log(`getOutboundEvents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundEvents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **filterType** | **String** | Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **category** | **String** | Category | [optional]  |
 **level** | **String** | Level | [optional]  |
 **sortBy** | **String** | Sort by | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**DialerEventEntityListing**

<a name="getOutboundMessagingcampaign"></a>

# MessagingCampaign getOutboundMessagingcampaign(messagingCampaignId)


GET /api/v2/outbound/messagingcampaigns/{messagingCampaignId}

Get an Outbound Messaging Campaign

Requires ANY permissions:

* outbound:messagingCampaign:view
* outbound:emailCampaign:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let messagingCampaignId = "messagingCampaignId_example"; // String | The Messaging Campaign ID

apiInstance.getOutboundMessagingcampaign(messagingCampaignId)
  .then((data) => {
    console.log(`getOutboundMessagingcampaign success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundMessagingcampaign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messagingCampaignId** | **String** | The Messaging Campaign ID |  |
{: class="table table-striped"}

### Return type

**MessagingCampaign**

<a name="getOutboundMessagingcampaignDiagnostics"></a>

# MessagingCampaignDiagnostics getOutboundMessagingcampaignDiagnostics(messagingCampaignId)


GET /api/v2/outbound/messagingcampaigns/{messagingCampaignId}/diagnostics

Get messaging campaign diagnostics

Requires ANY permissions:

* outbound:messagingCampaign:view
* outbound:emailCampaign:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let messagingCampaignId = "messagingCampaignId_example"; // String | The Messaging Campaign ID

apiInstance.getOutboundMessagingcampaignDiagnostics(messagingCampaignId)
  .then((data) => {
    console.log(`getOutboundMessagingcampaignDiagnostics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundMessagingcampaignDiagnostics');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messagingCampaignId** | **String** | The Messaging Campaign ID |  |
{: class="table table-striped"}

### Return type

**MessagingCampaignDiagnostics**

<a name="getOutboundMessagingcampaignProgress"></a>

# CampaignProgress getOutboundMessagingcampaignProgress(messagingCampaignId)


GET /api/v2/outbound/messagingcampaigns/{messagingCampaignId}/progress

Get messaging campaign's progress

Requires ANY permissions:

* outbound:messagingCampaign:view
* outbound:emailCampaign:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let messagingCampaignId = "messagingCampaignId_example"; // String | The Messaging Campaign ID

apiInstance.getOutboundMessagingcampaignProgress(messagingCampaignId)
  .then((data) => {
    console.log(`getOutboundMessagingcampaignProgress success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundMessagingcampaignProgress');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messagingCampaignId** | **String** | The Messaging Campaign ID |  |
{: class="table table-striped"}

### Return type

**CampaignProgress**

<a name="getOutboundMessagingcampaigns"></a>

# MessagingCampaignEntityListing getOutboundMessagingcampaigns(opts)


GET /api/v2/outbound/messagingcampaigns

Query a list of Messaging Campaigns

Requires ANY permissions:

* outbound:messagingCampaign:view
* outbound:emailCampaign:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let opts = { 
  'pageSize': 25, // Number | Page size. The max that will be returned is 100.
  'pageNumber': 1, // Number | Page number
  'sortBy': "name", // String | The field to sort by
  'sortOrder': "ascending", // String | The direction to sort
  'name': "name_example", // String | Name
  'contactListId': "contactListId_example", // String | Contact List ID
  'divisionId': ["divisionId_example"], // [String] | Division ID(s)
  'type': "type_example", // String | Campaign Type
  'senderSmsPhoneNumber': "senderSmsPhoneNumber_example", // String | Sender SMS Phone Number
  'id': ["id_example"] // [String] | A list of messaging campaign ids to bulk fetch
};

apiInstance.getOutboundMessagingcampaigns(opts)
  .then((data) => {
    console.log(`getOutboundMessagingcampaigns success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundMessagingcampaigns');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size. The max that will be returned is 100. | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | The field to sort by | [optional] [default to name]<br />**Values**: campaignStatus, name, type |
 **sortOrder** | **String** | The direction to sort | [optional] [default to ascending]<br />**Values**: ascending, descending |
 **name** | **String** | Name | [optional]  |
 **contactListId** | **String** | Contact List ID | [optional]  |
 **divisionId** | **[String]** | Division ID(s) | [optional]  |
 **type** | **String** | Campaign Type | [optional] <br />**Values**: EMAIL, SMS |
 **senderSmsPhoneNumber** | **String** | Sender SMS Phone Number | [optional]  |
 **id** | **[String]** | A list of messaging campaign ids to bulk fetch | [optional]  |
{: class="table table-striped"}

### Return type

**MessagingCampaignEntityListing**

<a name="getOutboundMessagingcampaignsDivisionview"></a>

# MessagingCampaignDivisionView getOutboundMessagingcampaignsDivisionview(messagingCampaignId)


GET /api/v2/outbound/messagingcampaigns/divisionviews/{messagingCampaignId}

Get a basic Messaging Campaign information object

This returns a simplified version of a Messaging Campaign, consisting of id, name, and division.

Requires ANY permissions:

* outbound:messagingCampaign:search
* outbound:emailCampaign:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let messagingCampaignId = "messagingCampaignId_example"; // String | The Messaging Campaign ID

apiInstance.getOutboundMessagingcampaignsDivisionview(messagingCampaignId)
  .then((data) => {
    console.log(`getOutboundMessagingcampaignsDivisionview success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundMessagingcampaignsDivisionview');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messagingCampaignId** | **String** | The Messaging Campaign ID |  |
{: class="table table-striped"}

### Return type

**MessagingCampaignDivisionView**

<a name="getOutboundMessagingcampaignsDivisionviews"></a>

# MessagingCampaignDivisionViewEntityListing getOutboundMessagingcampaignsDivisionviews(opts)


GET /api/v2/outbound/messagingcampaigns/divisionviews

Query a list of basic Messaging Campaign information objects

This returns a listing of simplified Messaging Campaigns, each consisting of id, name, and division.

Requires ANY permissions:

* outbound:messagingCampaign:search
* outbound:emailCampaign:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let opts = { 
  'pageSize': 25, // Number | Page size. The max that will be returned is 100.
  'pageNumber': 1, // Number | Page number
  'sortOrder': "a", // String | The direction to sort
  'name': "name_example", // String | Name
  'type': "type_example", // String | Campaign Type
  'id': ["id_example"], // [String] | id
  'senderSmsPhoneNumber': "senderSmsPhoneNumber_example" // String | Sender SMS Phone Number
};

apiInstance.getOutboundMessagingcampaignsDivisionviews(opts)
  .then((data) => {
    console.log(`getOutboundMessagingcampaignsDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundMessagingcampaignsDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size. The max that will be returned is 100. | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | The direction to sort | [optional] [default to a]<br />**Values**: ascending, descending |
 **name** | **String** | Name | [optional]  |
 **type** | **String** | Campaign Type | [optional] <br />**Values**: EMAIL, SMS |
 **id** | **[String]** | id | [optional]  |
 **senderSmsPhoneNumber** | **String** | Sender SMS Phone Number | [optional]  |
{: class="table table-striped"}

### Return type

**MessagingCampaignDivisionViewEntityListing**

<a name="getOutboundRuleset"></a>

# RuleSet getOutboundRuleset(ruleSetId)


GET /api/v2/outbound/rulesets/{ruleSetId}

Get a Rule Set by ID.

Requires ANY permissions:

* outbound:ruleSet:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let ruleSetId = "ruleSetId_example"; // String | Rule Set ID

apiInstance.getOutboundRuleset(ruleSetId)
  .then((data) => {
    console.log(`getOutboundRuleset success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundRuleset');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleSetId** | **String** | Rule Set ID |  |
{: class="table table-striped"}

### Return type

**RuleSet**

<a name="getOutboundRulesets"></a>

# RuleSetEntityListing getOutboundRulesets(opts)


GET /api/v2/outbound/rulesets

Query a list of Rule Sets.

Requires ANY permissions:

* outbound:ruleSet:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let opts = { 
  'pageSize': 25, // Number | Page size. The max that will be returned is 100.
  'pageNumber': 1, // Number | Page number
  'allowEmptyResult': false, // Boolean | Whether to return an empty page when there are no results for that page
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a" // String | Sort order
};

apiInstance.getOutboundRulesets(opts)
  .then((data) => {
    console.log(`getOutboundRulesets success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundRulesets');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size. The max that will be returned is 100. | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **allowEmptyResult** | **Boolean** | Whether to return an empty page when there are no results for that page | [optional] [default to false] |
 **filterType** | **String** | Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String** | Name | [optional]  |
 **sortBy** | **String** | Sort by | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**RuleSetEntityListing**

<a name="getOutboundSchedulesCampaign"></a>

# CampaignSchedule getOutboundSchedulesCampaign(campaignId)


GET /api/v2/outbound/schedules/campaigns/{campaignId}

Get a dialer campaign schedule.

Requires ANY permissions:

* outbound:schedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.getOutboundSchedulesCampaign(campaignId)
  .then((data) => {
    console.log(`getOutboundSchedulesCampaign success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundSchedulesCampaign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String** | Campaign ID |  |
{: class="table table-striped"}

### Return type

**CampaignSchedule**

<a name="getOutboundSchedulesCampaigns"></a>

# [CampaignSchedule] getOutboundSchedulesCampaigns()


GET /api/v2/outbound/schedules/campaigns

Query for a list of dialer campaign schedules.

Requires ANY permissions:

* outbound:schedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

apiInstance.getOutboundSchedulesCampaigns()
  .then((data) => {
    console.log(`getOutboundSchedulesCampaigns success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundSchedulesCampaigns');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**[CampaignSchedule]**

<a name="getOutboundSchedulesEmailcampaign"></a>

# EmailCampaignSchedule getOutboundSchedulesEmailcampaign(emailCampaignId)


GET /api/v2/outbound/schedules/emailcampaigns/{emailCampaignId}

Get an email campaign schedule.

Requires ANY permissions:

* outbound:emailCampaignSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let emailCampaignId = "emailCampaignId_example"; // String | Email Campaign ID

apiInstance.getOutboundSchedulesEmailcampaign(emailCampaignId)
  .then((data) => {
    console.log(`getOutboundSchedulesEmailcampaign success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundSchedulesEmailcampaign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **emailCampaignId** | **String** | Email Campaign ID |  |
{: class="table table-striped"}

### Return type

**EmailCampaignSchedule**

<a name="getOutboundSchedulesEmailcampaigns"></a>

# MessagingCampaignScheduleEntityListing getOutboundSchedulesEmailcampaigns()


GET /api/v2/outbound/schedules/emailcampaigns

Query for a list of email campaign schedules.

Requires ANY permissions:

* outbound:emailCampaignSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

apiInstance.getOutboundSchedulesEmailcampaigns()
  .then((data) => {
    console.log(`getOutboundSchedulesEmailcampaigns success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundSchedulesEmailcampaigns');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**MessagingCampaignScheduleEntityListing**

<a name="getOutboundSchedulesMessagingcampaign"></a>

# MessagingCampaignSchedule getOutboundSchedulesMessagingcampaign(messagingCampaignId)


GET /api/v2/outbound/schedules/messagingcampaigns/{messagingCampaignId}

Get a messaging campaign schedule.

Requires ANY permissions:

* outbound:messagingCampaignSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let messagingCampaignId = "messagingCampaignId_example"; // String | Messaging Campaign ID

apiInstance.getOutboundSchedulesMessagingcampaign(messagingCampaignId)
  .then((data) => {
    console.log(`getOutboundSchedulesMessagingcampaign success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundSchedulesMessagingcampaign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messagingCampaignId** | **String** | Messaging Campaign ID |  |
{: class="table table-striped"}

### Return type

**MessagingCampaignSchedule**

<a name="getOutboundSchedulesMessagingcampaigns"></a>

# MessagingCampaignScheduleEntityListing getOutboundSchedulesMessagingcampaigns()


GET /api/v2/outbound/schedules/messagingcampaigns

Query for a list of messaging campaign schedules.

Requires ANY permissions:

* outbound:messagingCampaignSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

apiInstance.getOutboundSchedulesMessagingcampaigns()
  .then((data) => {
    console.log(`getOutboundSchedulesMessagingcampaigns success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundSchedulesMessagingcampaigns');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**MessagingCampaignScheduleEntityListing**

<a name="getOutboundSchedulesSequence"></a>

# SequenceSchedule getOutboundSchedulesSequence(sequenceId)


GET /api/v2/outbound/schedules/sequences/{sequenceId}

Get a dialer sequence schedule.

Requires ANY permissions:

* outbound:schedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let sequenceId = "sequenceId_example"; // String | Sequence ID

apiInstance.getOutboundSchedulesSequence(sequenceId)
  .then((data) => {
    console.log(`getOutboundSchedulesSequence success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundSchedulesSequence');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sequenceId** | **String** | Sequence ID |  |
{: class="table table-striped"}

### Return type

**SequenceSchedule**

<a name="getOutboundSchedulesSequences"></a>

# [SequenceSchedule] getOutboundSchedulesSequences()


GET /api/v2/outbound/schedules/sequences

Query for a list of dialer sequence schedules.

Requires ANY permissions:

* outbound:schedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

apiInstance.getOutboundSchedulesSequences()
  .then((data) => {
    console.log(`getOutboundSchedulesSequences success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundSchedulesSequences');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**[SequenceSchedule]**

<a name="getOutboundSequence"></a>

# CampaignSequence getOutboundSequence(sequenceId)


GET /api/v2/outbound/sequences/{sequenceId}

Get a dialer campaign sequence.

Requires ANY permissions:

* outbound:campaignSequence:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let sequenceId = "sequenceId_example"; // String | Campaign Sequence ID

apiInstance.getOutboundSequence(sequenceId)
  .then((data) => {
    console.log(`getOutboundSequence success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundSequence');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sequenceId** | **String** | Campaign Sequence ID |  |
{: class="table table-striped"}

### Return type

**CampaignSequence**

<a name="getOutboundSequences"></a>

# CampaignSequenceEntityListing getOutboundSequences(opts)


GET /api/v2/outbound/sequences

Query a list of dialer campaign sequences.

Requires ANY permissions:

* outbound:campaignSequence:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let opts = { 
  'pageSize': 25, // Number | Page size. The max that will be returned is 100.
  'pageNumber': 1, // Number | Page number
  'allowEmptyResult': false, // Boolean | Whether to return an empty page when there are no results for that page
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a" // String | Sort order
};

apiInstance.getOutboundSequences(opts)
  .then((data) => {
    console.log(`getOutboundSequences success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundSequences');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size. The max that will be returned is 100. | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **allowEmptyResult** | **Boolean** | Whether to return an empty page when there are no results for that page | [optional] [default to false] |
 **filterType** | **String** | Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String** | Name | [optional]  |
 **sortBy** | **String** | Sort by | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**CampaignSequenceEntityListing**

<a name="getOutboundSettings"></a>

# OutboundSettings getOutboundSettings()


GET /api/v2/outbound/settings

Get the outbound settings for this organization

Requires ANY permissions:

* outbound:settings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

apiInstance.getOutboundSettings()
  .then((data) => {
    console.log(`getOutboundSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**OutboundSettings**

<a name="getOutboundWrapupcodemappings"></a>

# WrapUpCodeMapping getOutboundWrapupcodemappings()


GET /api/v2/outbound/wrapupcodemappings

Get the Dialer wrap up code mapping.

Requires ANY permissions:

* outbound:wrapUpCodeMapping:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

apiInstance.getOutboundWrapupcodemappings()
  .then((data) => {
    console.log(`getOutboundWrapupcodemappings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundWrapupcodemappings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**WrapUpCodeMapping**

<a name="patchOutboundDnclistCustomexclusioncolumns"></a>

# void patchOutboundDnclistCustomexclusioncolumns(dncListId, body)


PATCH /api/v2/outbound/dnclists/{dncListId}/customexclusioncolumns

Add entries to or delete entries from a DNC list.

Only Internal DNC lists may be deleted from

Requires ANY permissions:

* outbound:dnc:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let dncListId = "dncListId_example"; // String | DncList ID
let body = {}; // Object | DNC Custom exclusion column entries

apiInstance.patchOutboundDnclistCustomexclusioncolumns(dncListId, body)
  .then(() => {
    console.log('patchOutboundDnclistCustomexclusioncolumns returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchOutboundDnclistCustomexclusioncolumns');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String** | DncList ID |  |
 **body** | **Object** | DNC Custom exclusion column entries |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchOutboundDnclistEmailaddresses"></a>

# void patchOutboundDnclistEmailaddresses(dncListId, body)


PATCH /api/v2/outbound/dnclists/{dncListId}/emailaddresses

Add emails to or Delete emails from a DNC list.

Only Internal DNC lists may be added to or deleted from

Requires ANY permissions:

* outbound:dnc:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let dncListId = "dncListId_example"; // String | DncList ID
let body = {}; // Object | DNC Emails

apiInstance.patchOutboundDnclistEmailaddresses(dncListId, body)
  .then(() => {
    console.log('patchOutboundDnclistEmailaddresses returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchOutboundDnclistEmailaddresses');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String** | DncList ID |  |
 **body** | **Object** | DNC Emails |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchOutboundDnclistPhonenumbers"></a>

# void patchOutboundDnclistPhonenumbers(dncListId, body)


PATCH /api/v2/outbound/dnclists/{dncListId}/phonenumbers

Add numbers to or delete numbers from a DNC list.

Only Internal DNC lists may be added to deleted from

Requires ANY permissions:

* outbound:dnc:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let dncListId = "dncListId_example"; // String | DncList ID
let body = {}; // Object | DNC Phone Numbers

apiInstance.patchOutboundDnclistPhonenumbers(dncListId, body)
  .then(() => {
    console.log('patchOutboundDnclistPhonenumbers returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchOutboundDnclistPhonenumbers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String** | DncList ID |  |
 **body** | **Object** | DNC Phone Numbers |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchOutboundSettings"></a>

# void patchOutboundSettings(body)


PATCH /api/v2/outbound/settings

Update the outbound settings for this organization

Requires ANY permissions:

* outbound:settings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | outboundSettings

apiInstance.patchOutboundSettings(body)
  .then(() => {
    console.log('patchOutboundSettings returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchOutboundSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | outboundSettings |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postOutboundAttemptlimits"></a>

# AttemptLimits postOutboundAttemptlimits(body)


POST /api/v2/outbound/attemptlimits

Create attempt limits

Requires ANY permissions:

* outbound:attemptLimits:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | AttemptLimits

apiInstance.postOutboundAttemptlimits(body)
  .then((data) => {
    console.log(`postOutboundAttemptlimits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundAttemptlimits');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | AttemptLimits |  |
{: class="table table-striped"}

### Return type

**AttemptLimits**

<a name="postOutboundAudits"></a>

# AuditSearchResult postOutboundAudits(body, opts)


POST /api/v2/outbound/audits

Retrieves audits for dialer.

Requires ANY permissions:

* outbound:audit:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | AuditSearch
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "entity.name", // String | Sort by
  'sortOrder': "ascending", // String | Sort order
  'facetsOnly': false // Boolean | Facets only
};

apiInstance.postOutboundAudits(body, opts)
  .then((data) => {
    console.log(`postOutboundAudits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundAudits');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | AuditSearch |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to entity.name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ascending] |
 **facetsOnly** | **Boolean** | Facets only | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**AuditSearchResult**

<a name="postOutboundCallabletimesets"></a>

# CallableTimeSet postOutboundCallabletimesets(body)


POST /api/v2/outbound/callabletimesets

Create callable time set

Requires ANY permissions:

* outbound:callableTimeSet:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | DialerCallableTimeSet

apiInstance.postOutboundCallabletimesets(body)
  .then((data) => {
    console.log(`postOutboundCallabletimesets success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundCallabletimesets');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | DialerCallableTimeSet |  |
{: class="table table-striped"}

### Return type

**CallableTimeSet**

<a name="postOutboundCallanalysisresponsesets"></a>

# ResponseSet postOutboundCallanalysisresponsesets(body)


POST /api/v2/outbound/callanalysisresponsesets

Create a dialer call analysis response set.

Requires ANY permissions:

* outbound:responseSet:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | ResponseSet

apiInstance.postOutboundCallanalysisresponsesets(body)
  .then((data) => {
    console.log(`postOutboundCallanalysisresponsesets success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundCallanalysisresponsesets');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ResponseSet |  |
{: class="table table-striped"}

### Return type

**ResponseSet**

<a name="postOutboundCampaignAgentownedmappingpreview"></a>

# **Object** postOutboundCampaignAgentownedmappingpreview(campaignId)


POST /api/v2/outbound/campaigns/{campaignId}/agentownedmappingpreview

Initiate request for a preview of how agents will be mapped to this campaign's contact list.

Requires ALL permissions:

* outbound:campaign:view
* outbound:contact:view
* directory:user:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.postOutboundCampaignAgentownedmappingpreview(campaignId)
  .then((data) => {
    console.log(`postOutboundCampaignAgentownedmappingpreview success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundCampaignAgentownedmappingpreview');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String** | Campaign ID |  |
{: class="table table-striped"}

### Return type

**Object**

<a name="postOutboundCampaignCallbackSchedule"></a>

# ContactCallbackRequest postOutboundCampaignCallbackSchedule(campaignId, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/outbound/campaigns/{campaignId}/callback/schedule

Schedule a Callback for a Dialer Campaign (Deprecated)

This endpoint is deprecated and may have unexpected results. Please use "/conversations/{conversationId}/participants/{participantId}/callbacks instead."

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID
let body = {}; // Object | ContactCallbackRequest

apiInstance.postOutboundCampaignCallbackSchedule(campaignId, body)
  .then((data) => {
    console.log(`postOutboundCampaignCallbackSchedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundCampaignCallbackSchedule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String** | Campaign ID |  |
 **body** | **Object** | ContactCallbackRequest |  |
{: class="table table-striped"}

### Return type

**ContactCallbackRequest**

<a name="postOutboundCampaignrules"></a>

# CampaignRule postOutboundCampaignrules(body)


POST /api/v2/outbound/campaignrules

Create Campaign Rule

Requires ANY permissions:

* outbound:campaignRule:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | CampaignRule

apiInstance.postOutboundCampaignrules(body)
  .then((data) => {
    console.log(`postOutboundCampaignrules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundCampaignrules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | CampaignRule |  |
{: class="table table-striped"}

### Return type

**CampaignRule**

<a name="postOutboundCampaigns"></a>

# Campaign postOutboundCampaigns(body)


POST /api/v2/outbound/campaigns

Create a campaign.

Requires ANY permissions:

* outbound:campaign:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | Campaign

apiInstance.postOutboundCampaigns(body)
  .then((data) => {
    console.log(`postOutboundCampaigns success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundCampaigns');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Campaign |  |
{: class="table table-striped"}

### Return type

**Campaign**

<a name="postOutboundCampaignsProgress"></a>

# [CampaignProgress] postOutboundCampaignsProgress(body)


POST /api/v2/outbound/campaigns/progress

Get progress for a list of campaigns

Requires ANY permissions:

* outbound:campaign:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = ["body_example"]; // [String] | Campaign IDs

apiInstance.postOutboundCampaignsProgress(body)
  .then((data) => {
    console.log(`postOutboundCampaignsProgress success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundCampaignsProgress');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **[String]** | Campaign IDs |  |
{: class="table table-striped"}

### Return type

**[CampaignProgress]**

<a name="postOutboundContactlistClear"></a>

# void postOutboundContactlistClear(contactListId)


POST /api/v2/outbound/contactlists/{contactListId}/clear

Deletes all contacts out of a list. All outstanding recalls or rule-scheduled callbacks for non-preview campaigns configured with the contactlist will be cancelled.

Requires ANY permissions:

* outbound:contact:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListId = "contactListId_example"; // String | Contact List ID

apiInstance.postOutboundContactlistClear(contactListId)
  .then(() => {
    console.log('postOutboundContactlistClear returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundContactlistClear');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String** | Contact List ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postOutboundContactlistContacts"></a>

# [DialerContact] postOutboundContactlistContacts(contactListId, body, opts)


POST /api/v2/outbound/contactlists/{contactListId}/contacts

Add contacts to a contact list.

Requires ANY permissions:

* outbound:contact:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListId = "contactListId_example"; // String | Contact List ID
let body = [{}]; // Object | Contact
let opts = { 
  'priority': true, // Boolean | Contact priority. True means the contact(s) will be dialed next; false means the contact will go to the end of the contact queue.
  'clearSystemData': true, // Boolean | Clear system data. True means the system columns (attempts, callable status, etc) stored on the contact will be cleared if the contact already exists; false means they won't.
  'doNotQueue': true // Boolean | Do not queue. True means that updated contacts will not have their positions in the queue altered, so contacts that have already been dialed will not be redialed. For new contacts, this parameter has no effect; False means that updated contacts will be re-queued, according to the 'priority' parameter.
};

apiInstance.postOutboundContactlistContacts(contactListId, body, opts)
  .then((data) => {
    console.log(`postOutboundContactlistContacts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundContactlistContacts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String** | Contact List ID |  |
 **body** | **Object** | Contact |  |
 **priority** | **Boolean** | Contact priority. True means the contact(s) will be dialed next; false means the contact will go to the end of the contact queue. | [optional]  |
 **clearSystemData** | **Boolean** | Clear system data. True means the system columns (attempts, callable status, etc) stored on the contact will be cleared if the contact already exists; false means they won't. | [optional]  |
 **doNotQueue** | **Boolean** | Do not queue. True means that updated contacts will not have their positions in the queue altered, so contacts that have already been dialed will not be redialed. For new contacts, this parameter has no effect; False means that updated contacts will be re-queued, according to the 'priority' parameter. | [optional]  |
{: class="table table-striped"}

### Return type

**[DialerContact]**

<a name="postOutboundContactlistContactsBulk"></a>

# [DialerContact] postOutboundContactlistContactsBulk(contactListId, body)


POST /api/v2/outbound/contactlists/{contactListId}/contacts/bulk

Get contacts from a contact list.

Requires ANY permissions:

* outbound:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListId = "contactListId_example"; // String | Contact List ID
let body = ["body_example"]; // [String] | ContactIds to get.

apiInstance.postOutboundContactlistContactsBulk(contactListId, body)
  .then((data) => {
    console.log(`postOutboundContactlistContactsBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundContactlistContactsBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String** | Contact List ID |  |
 **body** | **[String]** | ContactIds to get. |  |
{: class="table table-striped"}

### Return type

**[DialerContact]**

<a name="postOutboundContactlistExport"></a>

# DomainEntityRef postOutboundContactlistExport(contactListId)


POST /api/v2/outbound/contactlists/{contactListId}/export

Initiate the export of a contact list.

Returns 200 if received OK.

Requires ALL permissions:

* outbound:contact:view
* outbound:contactList:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListId = "contactListId_example"; // String | ContactList ID

apiInstance.postOutboundContactlistExport(contactListId)
  .then((data) => {
    console.log(`postOutboundContactlistExport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundContactlistExport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String** | ContactList ID |  |
{: class="table table-striped"}

### Return type

**DomainEntityRef**

<a name="postOutboundContactlistfilters"></a>

# ContactListFilter postOutboundContactlistfilters(body)


POST /api/v2/outbound/contactlistfilters

Create Contact List Filter

Requires ANY permissions:

* outbound:contactListFilter:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | ContactListFilter

apiInstance.postOutboundContactlistfilters(body)
  .then((data) => {
    console.log(`postOutboundContactlistfilters success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundContactlistfilters');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ContactListFilter |  |
{: class="table table-striped"}

### Return type

**ContactListFilter**

<a name="postOutboundContactlistfiltersPreview"></a>

# FilterPreviewResponse postOutboundContactlistfiltersPreview(body)


POST /api/v2/outbound/contactlistfilters/preview

Get a preview of the output of a contact list filter

Requires ANY permissions:

* outbound:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | ContactListFilter

apiInstance.postOutboundContactlistfiltersPreview(body)
  .then((data) => {
    console.log(`postOutboundContactlistfiltersPreview success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundContactlistfiltersPreview');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ContactListFilter |  |
{: class="table table-striped"}

### Return type

**FilterPreviewResponse**

<a name="postOutboundContactlists"></a>

# ContactList postOutboundContactlists(body)


POST /api/v2/outbound/contactlists

Create a contact List.

Requires ANY permissions:

* outbound:contactList:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | ContactList

apiInstance.postOutboundContactlists(body)
  .then((data) => {
    console.log(`postOutboundContactlists success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundContactlists');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ContactList |  |
{: class="table table-striped"}

### Return type

**ContactList**

<a name="postOutboundConversationDnc"></a>

# void postOutboundConversationDnc(conversationId)


POST /api/v2/outbound/conversations/{conversationId}/dnc

Add phone numbers to a Dialer DNC list.

Requires ANY permissions:

* outbound:dnc:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let conversationId = "conversationId_example"; // String | Conversation ID

apiInstance.postOutboundConversationDnc(conversationId)
  .then(() => {
    console.log('postOutboundConversationDnc returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundConversationDnc');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postOutboundDigitalrulesets"></a>

# DigitalRuleSet postOutboundDigitalrulesets(body)


POST /api/v2/outbound/digitalrulesets

Create an Outbound Digital Rule Set

Requires ANY permissions:

* outbound:digitalRuleSet:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | Digital Rule Set

apiInstance.postOutboundDigitalrulesets(body)
  .then((data) => {
    console.log(`postOutboundDigitalrulesets success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundDigitalrulesets');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Digital Rule Set |  |
{: class="table table-striped"}

### Return type

**DigitalRuleSet**

<a name="postOutboundDnclistEmailaddresses"></a>

# void postOutboundDnclistEmailaddresses(dncListId, body)


POST /api/v2/outbound/dnclists/{dncListId}/emailaddresses

Add email addresses to a DNC list.

Only Internal DNC lists may be appended to

Requires ANY permissions:

* outbound:dnc:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let dncListId = "dncListId_example"; // String | DncList ID
let body = ["body_example"]; // [String] | DNC email addresses

apiInstance.postOutboundDnclistEmailaddresses(dncListId, body)
  .then(() => {
    console.log('postOutboundDnclistEmailaddresses returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundDnclistEmailaddresses');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String** | DncList ID |  |
 **body** | **[String]** | DNC email addresses |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postOutboundDnclistExport"></a>

# DomainEntityRef postOutboundDnclistExport(dncListId)


POST /api/v2/outbound/dnclists/{dncListId}/export

Initiate the export of a dnc list.

Returns 200 if received OK.

Requires ALL permissions:

* outbound:dnc:view
* outbound:dncList:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let dncListId = "dncListId_example"; // String | DncList ID

apiInstance.postOutboundDnclistExport(dncListId)
  .then((data) => {
    console.log(`postOutboundDnclistExport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundDnclistExport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String** | DncList ID |  |
{: class="table table-striped"}

### Return type

**DomainEntityRef**

<a name="postOutboundDnclistPhonenumbers"></a>

# void postOutboundDnclistPhonenumbers(dncListId, body, opts)


POST /api/v2/outbound/dnclists/{dncListId}/phonenumbers

Add phone numbers to a DNC list.

Only Internal DNC lists may be appended to

Requires ANY permissions:

* outbound:dnc:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let dncListId = "dncListId_example"; // String | DncList ID
let body = ["body_example"]; // [String] | DNC Phone Numbers
let opts = { 
  'expirationDateTime': "expirationDateTime_example" // String | Expiration date for DNC phone numbers in yyyy-MM-ddTHH:mmZ format
};

apiInstance.postOutboundDnclistPhonenumbers(dncListId, body, opts)
  .then(() => {
    console.log('postOutboundDnclistPhonenumbers returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundDnclistPhonenumbers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String** | DncList ID |  |
 **body** | **[String]** | DNC Phone Numbers |  |
 **expirationDateTime** | **String** | Expiration date for DNC phone numbers in yyyy-MM-ddTHH:mmZ format | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postOutboundDnclists"></a>

# DncList postOutboundDnclists(body)


POST /api/v2/outbound/dnclists

Create dialer DNC list

Requires ANY permissions:

* outbound:dncList:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | DncList

apiInstance.postOutboundDnclists(body)
  .then((data) => {
    console.log(`postOutboundDnclists success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundDnclists');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | DncList |  |
{: class="table table-striped"}

### Return type

**DncList**

<a name="postOutboundMessagingcampaigns"></a>

# MessagingCampaign postOutboundMessagingcampaigns(body)


POST /api/v2/outbound/messagingcampaigns

Create a Messaging Campaign

Requires ANY permissions:

* outbound:messagingCampaign:add
* outbound:emailCampaign:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | Messaging Campaign

apiInstance.postOutboundMessagingcampaigns(body)
  .then((data) => {
    console.log(`postOutboundMessagingcampaigns success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundMessagingcampaigns');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Messaging Campaign |  |
{: class="table table-striped"}

### Return type

**MessagingCampaign**

<a name="postOutboundMessagingcampaignsProgress"></a>

# [CampaignProgress] postOutboundMessagingcampaignsProgress(body)


POST /api/v2/outbound/messagingcampaigns/progress

Get progress for a list of messaging campaigns

Requires ANY permissions:

* outbound:messagingCampaign:view
* outbound:emailCampaign:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = ["body_example"]; // [String] | Messaging Campaign IDs

apiInstance.postOutboundMessagingcampaignsProgress(body)
  .then((data) => {
    console.log(`postOutboundMessagingcampaignsProgress success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundMessagingcampaignsProgress');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **[String]** | Messaging Campaign IDs |  |
{: class="table table-striped"}

### Return type

**[CampaignProgress]**

<a name="postOutboundRulesets"></a>

# RuleSet postOutboundRulesets(body)


POST /api/v2/outbound/rulesets

Create a Rule Set.

Requires ANY permissions:

* outbound:ruleSet:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | RuleSet

apiInstance.postOutboundRulesets(body)
  .then((data) => {
    console.log(`postOutboundRulesets success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundRulesets');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | RuleSet |  |
{: class="table table-striped"}

### Return type

**RuleSet**

<a name="postOutboundSequences"></a>

# CampaignSequence postOutboundSequences(body)


POST /api/v2/outbound/sequences

Create a new campaign sequence.

Requires ANY permissions:

* outbound:campaignSequence:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | Organization

apiInstance.postOutboundSequences(body)
  .then((data) => {
    console.log(`postOutboundSequences success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundSequences');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Organization |  |
{: class="table table-striped"}

### Return type

**CampaignSequence**

<a name="putOutboundAttemptlimit"></a>

# AttemptLimits putOutboundAttemptlimit(attemptLimitsId, body)


PUT /api/v2/outbound/attemptlimits/{attemptLimitsId}

Update attempt limits

Requires ANY permissions:

* outbound:attemptLimits:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let attemptLimitsId = "attemptLimitsId_example"; // String | Attempt limits ID
let body = {}; // Object | AttemptLimits

apiInstance.putOutboundAttemptlimit(attemptLimitsId, body)
  .then((data) => {
    console.log(`putOutboundAttemptlimit success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundAttemptlimit');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **attemptLimitsId** | **String** | Attempt limits ID |  |
 **body** | **Object** | AttemptLimits |  |
{: class="table table-striped"}

### Return type

**AttemptLimits**

<a name="putOutboundCallabletimeset"></a>

# CallableTimeSet putOutboundCallabletimeset(callableTimeSetId, body)


PUT /api/v2/outbound/callabletimesets/{callableTimeSetId}

Update callable time set

Requires ANY permissions:

* outbound:callableTimeSet:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let callableTimeSetId = "callableTimeSetId_example"; // String | Callable Time Set ID
let body = {}; // Object | DialerCallableTimeSet

apiInstance.putOutboundCallabletimeset(callableTimeSetId, body)
  .then((data) => {
    console.log(`putOutboundCallabletimeset success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundCallabletimeset');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **callableTimeSetId** | **String** | Callable Time Set ID |  |
 **body** | **Object** | DialerCallableTimeSet |  |
{: class="table table-striped"}

### Return type

**CallableTimeSet**

<a name="putOutboundCallanalysisresponseset"></a>

# ResponseSet putOutboundCallanalysisresponseset(callAnalysisSetId, body)


PUT /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}

Update a dialer call analysis response set.

Requires ANY permissions:

* outbound:responseSet:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let callAnalysisSetId = "callAnalysisSetId_example"; // String | Call Analysis Response Set ID
let body = {}; // Object | ResponseSet

apiInstance.putOutboundCallanalysisresponseset(callAnalysisSetId, body)
  .then((data) => {
    console.log(`putOutboundCallanalysisresponseset success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundCallanalysisresponseset');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **callAnalysisSetId** | **String** | Call Analysis Response Set ID |  |
 **body** | **Object** | ResponseSet |  |
{: class="table table-striped"}

### Return type

**ResponseSet**

<a name="putOutboundCampaign"></a>

# Campaign putOutboundCampaign(campaignId, body)


PUT /api/v2/outbound/campaigns/{campaignId}

Update a campaign.

Requires ALL permissions:

* outbound:campaign:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID
let body = {}; // Object | Campaign

apiInstance.putOutboundCampaign(campaignId, body)
  .then((data) => {
    console.log(`putOutboundCampaign success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundCampaign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String** | Campaign ID |  |
 **body** | **Object** | Campaign |  |
{: class="table table-striped"}

### Return type

**Campaign**

<a name="putOutboundCampaignAgent"></a>

# **&#39;String&#39;** putOutboundCampaignAgent(campaignId, userId, body)


PUT /api/v2/outbound/campaigns/{campaignId}/agents/{userId}

Send notification that an agent's state changed 

New agent state.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID
let userId = "userId_example"; // String | Agent's user ID
let body = {}; // Object | agent

apiInstance.putOutboundCampaignAgent(campaignId, userId, body)
  .then((data) => {
    console.log(`putOutboundCampaignAgent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundCampaignAgent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String** | Campaign ID |  |
 **userId** | **String** | Agent's user ID |  |
 **body** | **Object** | agent |  |
{: class="table table-striped"}

### Return type

**&#39;String&#39;**

<a name="putOutboundCampaignrule"></a>

# CampaignRule putOutboundCampaignrule(campaignRuleId, body)


PUT /api/v2/outbound/campaignrules/{campaignRuleId}

Update Campaign Rule

Requires ANY permissions:

* outbound:campaignRule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignRuleId = "campaignRuleId_example"; // String | Campaign Rule ID
let body = {}; // Object | CampaignRule

apiInstance.putOutboundCampaignrule(campaignRuleId, body)
  .then((data) => {
    console.log(`putOutboundCampaignrule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundCampaignrule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignRuleId** | **String** | Campaign Rule ID |  |
 **body** | **Object** | CampaignRule |  |
{: class="table table-striped"}

### Return type

**CampaignRule**

<a name="putOutboundContactlist"></a>

# ContactList putOutboundContactlist(contactListId, body)


PUT /api/v2/outbound/contactlists/{contactListId}

Update a contact list.

Requires ANY permissions:

* outbound:contactList:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListId = "contactListId_example"; // String | ContactList ID
let body = {}; // Object | ContactList

apiInstance.putOutboundContactlist(contactListId, body)
  .then((data) => {
    console.log(`putOutboundContactlist success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundContactlist');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String** | ContactList ID |  |
 **body** | **Object** | ContactList |  |
{: class="table table-striped"}

### Return type

**ContactList**

<a name="putOutboundContactlistContact"></a>

# DialerContact putOutboundContactlistContact(contactListId, contactId, body)


PUT /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}

Update a contact.

Requires ANY permissions:

* outbound:contact:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListId = "contactListId_example"; // String | Contact List ID
let contactId = "contactId_example"; // String | Contact ID
let body = {}; // Object | Contact

apiInstance.putOutboundContactlistContact(contactListId, contactId, body)
  .then((data) => {
    console.log(`putOutboundContactlistContact success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundContactlistContact');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String** | Contact List ID |  |
 **contactId** | **String** | Contact ID |  |
 **body** | **Object** | Contact |  |
{: class="table table-striped"}

### Return type

**DialerContact**

<a name="putOutboundContactlistfilter"></a>

# ContactListFilter putOutboundContactlistfilter(contactListFilterId, body)


PUT /api/v2/outbound/contactlistfilters/{contactListFilterId}

Update Contact List Filter

Requires ANY permissions:

* outbound:contactListFilter:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListFilterId = "contactListFilterId_example"; // String | Contact List Filter ID
let body = {}; // Object | ContactListFilter

apiInstance.putOutboundContactlistfilter(contactListFilterId, body)
  .then((data) => {
    console.log(`putOutboundContactlistfilter success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundContactlistfilter');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListFilterId** | **String** | Contact List Filter ID |  |
 **body** | **Object** | ContactListFilter |  |
{: class="table table-striped"}

### Return type

**ContactListFilter**

<a name="putOutboundDigitalruleset"></a>

# DigitalRuleSet putOutboundDigitalruleset(digitalRuleSetId, body)


PUT /api/v2/outbound/digitalrulesets/{digitalRuleSetId}

Update an Outbound Digital Rule Set

Requires ANY permissions:

* outbound:digitalRuleSet:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let digitalRuleSetId = "digitalRuleSetId_example"; // String | The Digital Rule Set ID
let body = {}; // Object | Digital Rule Set

apiInstance.putOutboundDigitalruleset(digitalRuleSetId, body)
  .then((data) => {
    console.log(`putOutboundDigitalruleset success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundDigitalruleset');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **digitalRuleSetId** | **String** | The Digital Rule Set ID |  |
 **body** | **Object** | Digital Rule Set |  |
{: class="table table-striped"}

### Return type

**DigitalRuleSet**

<a name="putOutboundDnclist"></a>

# DncList putOutboundDnclist(dncListId, body)


PUT /api/v2/outbound/dnclists/{dncListId}

Update dialer DNC list

Requires ANY permissions:

* outbound:dncList:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let dncListId = "dncListId_example"; // String | DncList ID
let body = {}; // Object | DncList

apiInstance.putOutboundDnclist(dncListId, body)
  .then((data) => {
    console.log(`putOutboundDnclist success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundDnclist');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String** | DncList ID |  |
 **body** | **Object** | DncList |  |
{: class="table table-striped"}

### Return type

**DncList**

<a name="putOutboundMessagingcampaign"></a>

# MessagingCampaign putOutboundMessagingcampaign(messagingCampaignId, body)


PUT /api/v2/outbound/messagingcampaigns/{messagingCampaignId}

Update an Outbound Messaging Campaign

Requires ANY permissions:

* outbound:messagingCampaign:edit
* outbound:emailCampaign:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let messagingCampaignId = "messagingCampaignId_example"; // String | The Messaging Campaign ID
let body = {}; // Object | MessagingCampaign

apiInstance.putOutboundMessagingcampaign(messagingCampaignId, body)
  .then((data) => {
    console.log(`putOutboundMessagingcampaign success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundMessagingcampaign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messagingCampaignId** | **String** | The Messaging Campaign ID |  |
 **body** | **Object** | MessagingCampaign |  |
{: class="table table-striped"}

### Return type

**MessagingCampaign**

<a name="putOutboundRuleset"></a>

# RuleSet putOutboundRuleset(ruleSetId, body)


PUT /api/v2/outbound/rulesets/{ruleSetId}

Update a Rule Set.

Requires ANY permissions:

* outbound:ruleSet:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let ruleSetId = "ruleSetId_example"; // String | Rule Set ID
let body = {}; // Object | RuleSet

apiInstance.putOutboundRuleset(ruleSetId, body)
  .then((data) => {
    console.log(`putOutboundRuleset success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundRuleset');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleSetId** | **String** | Rule Set ID |  |
 **body** | **Object** | RuleSet |  |
{: class="table table-striped"}

### Return type

**RuleSet**

<a name="putOutboundSchedulesCampaign"></a>

# CampaignSchedule putOutboundSchedulesCampaign(campaignId, body)


PUT /api/v2/outbound/schedules/campaigns/{campaignId}

Update a new campaign schedule.

Requires ANY permissions:

* outbound:schedule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID
let body = {}; // Object | CampaignSchedule

apiInstance.putOutboundSchedulesCampaign(campaignId, body)
  .then((data) => {
    console.log(`putOutboundSchedulesCampaign success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundSchedulesCampaign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String** | Campaign ID |  |
 **body** | **Object** | CampaignSchedule |  |
{: class="table table-striped"}

### Return type

**CampaignSchedule**

<a name="putOutboundSchedulesEmailcampaign"></a>

# EmailCampaignSchedule putOutboundSchedulesEmailcampaign(emailCampaignId, body)


PUT /api/v2/outbound/schedules/emailcampaigns/{emailCampaignId}

Update an email campaign schedule.

Requires ANY permissions:

* outbound:emailCampaignSchedule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let emailCampaignId = "emailCampaignId_example"; // String | Email Campaign ID
let body = {}; // Object | EmailCampaignSchedule

apiInstance.putOutboundSchedulesEmailcampaign(emailCampaignId, body)
  .then((data) => {
    console.log(`putOutboundSchedulesEmailcampaign success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundSchedulesEmailcampaign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **emailCampaignId** | **String** | Email Campaign ID |  |
 **body** | **Object** | EmailCampaignSchedule |  |
{: class="table table-striped"}

### Return type

**EmailCampaignSchedule**

<a name="putOutboundSchedulesMessagingcampaign"></a>

# MessagingCampaignSchedule putOutboundSchedulesMessagingcampaign(messagingCampaignId, body)


PUT /api/v2/outbound/schedules/messagingcampaigns/{messagingCampaignId}

Update a new messaging campaign schedule.

Requires ANY permissions:

* outbound:messagingCampaignSchedule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let messagingCampaignId = "messagingCampaignId_example"; // String | Messaging Campaign ID
let body = {}; // Object | MessagingCampaignSchedule

apiInstance.putOutboundSchedulesMessagingcampaign(messagingCampaignId, body)
  .then((data) => {
    console.log(`putOutboundSchedulesMessagingcampaign success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundSchedulesMessagingcampaign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messagingCampaignId** | **String** | Messaging Campaign ID |  |
 **body** | **Object** | MessagingCampaignSchedule |  |
{: class="table table-striped"}

### Return type

**MessagingCampaignSchedule**

<a name="putOutboundSchedulesSequence"></a>

# SequenceSchedule putOutboundSchedulesSequence(sequenceId, body)


PUT /api/v2/outbound/schedules/sequences/{sequenceId}

Update a new sequence schedule.

Requires ANY permissions:

* outbound:schedule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let sequenceId = "sequenceId_example"; // String | Sequence ID
let body = {}; // Object | SequenceSchedule

apiInstance.putOutboundSchedulesSequence(sequenceId, body)
  .then((data) => {
    console.log(`putOutboundSchedulesSequence success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundSchedulesSequence');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sequenceId** | **String** | Sequence ID |  |
 **body** | **Object** | SequenceSchedule |  |
{: class="table table-striped"}

### Return type

**SequenceSchedule**

<a name="putOutboundSequence"></a>

# CampaignSequence putOutboundSequence(sequenceId, body)


PUT /api/v2/outbound/sequences/{sequenceId}

Update a new campaign sequence.

Requires ANY permissions:

* outbound:campaignSequence:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let sequenceId = "sequenceId_example"; // String | Campaign Sequence ID
let body = {}; // Object | Organization

apiInstance.putOutboundSequence(sequenceId, body)
  .then((data) => {
    console.log(`putOutboundSequence success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundSequence');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sequenceId** | **String** | Campaign Sequence ID |  |
 **body** | **Object** | Organization |  |
{: class="table table-striped"}

### Return type

**CampaignSequence**

<a name="putOutboundWrapupcodemappings"></a>

# WrapUpCodeMapping putOutboundWrapupcodemappings(body)


PUT /api/v2/outbound/wrapupcodemappings

Update the Dialer wrap up code mapping.

Requires ANY permissions:

* outbound:wrapUpCodeMapping:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | wrapUpCodeMapping

apiInstance.putOutboundWrapupcodemappings(body)
  .then((data) => {
    console.log(`putOutboundWrapupcodemappings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundWrapupcodemappings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | wrapUpCodeMapping |  |
{: class="table table-striped"}

### Return type

**WrapUpCodeMapping**

