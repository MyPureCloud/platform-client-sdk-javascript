# OutboundApi

# platformClient.OutboundApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteOutboundAttemptlimit**](OutboundApi#deleteOutboundAttemptlimit) | **DELETE** /api/v2/outbound/attemptlimits/{attemptLimitsId} | Delete attempt limits
[**deleteOutboundCallabletimeset**](OutboundApi#deleteOutboundCallabletimeset) | **DELETE** /api/v2/outbound/callabletimesets/{callableTimeSetId} | Delete callable time set
[**deleteOutboundCallanalysisresponseset**](OutboundApi#deleteOutboundCallanalysisresponseset) | **DELETE** /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId} | Delete a dialer call analysis response set.
[**deleteOutboundCampaign**](OutboundApi#deleteOutboundCampaign) | **DELETE** /api/v2/outbound/campaigns/{campaignId} | Delete a campaign.
[**deleteOutboundCampaignProgress**](OutboundApi#deleteOutboundCampaignProgress) | **DELETE** /api/v2/outbound/campaigns/{campaignId}/progress | Reset campaign progress and recycle the campaign
[**deleteOutboundCampaignrule**](OutboundApi#deleteOutboundCampaignrule) | **DELETE** /api/v2/outbound/campaignrules/{campaignRuleId} | Delete Campaign Rule
[**deleteOutboundContactlist**](OutboundApi#deleteOutboundContactlist) | **DELETE** /api/v2/outbound/contactlists/{contactListId} | Delete a contact list.
[**deleteOutboundContactlistContact**](OutboundApi#deleteOutboundContactlistContact) | **DELETE** /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId} | Delete a contact.
[**deleteOutboundContactlistContacts**](OutboundApi#deleteOutboundContactlistContacts) | **DELETE** /api/v2/outbound/contactlists/{contactListId}/contacts | Delete contacts from a contact list.
[**deleteOutboundContactlistfilter**](OutboundApi#deleteOutboundContactlistfilter) | **DELETE** /api/v2/outbound/contactlistfilters/{contactListFilterId} | Delete Contact List Filter
[**deleteOutboundContactlists**](OutboundApi#deleteOutboundContactlists) | **DELETE** /api/v2/outbound/contactlists | Delete multiple contact lists.
[**deleteOutboundContactlisttemplate**](OutboundApi#deleteOutboundContactlisttemplate) | **DELETE** /api/v2/outbound/contactlisttemplates/{contactListTemplateId} | Delete Contact List Template
[**deleteOutboundContactlisttemplates**](OutboundApi#deleteOutboundContactlisttemplates) | **DELETE** /api/v2/outbound/contactlisttemplates | Delete multiple contact list templates.
[**deleteOutboundDigitalruleset**](OutboundApi#deleteOutboundDigitalruleset) | **DELETE** /api/v2/outbound/digitalrulesets/{digitalRuleSetId} | Delete an Outbound Digital Rule Set
[**deleteOutboundDnclist**](OutboundApi#deleteOutboundDnclist) | **DELETE** /api/v2/outbound/dnclists/{dncListId} | Delete dialer DNC list
[**deleteOutboundDnclistCustomexclusioncolumns**](OutboundApi#deleteOutboundDnclistCustomexclusioncolumns) | **DELETE** /api/v2/outbound/dnclists/{dncListId}/customexclusioncolumns | Deletes all or expired custom exclusion column entries from a DNC list.
[**deleteOutboundDnclistEmailaddresses**](OutboundApi#deleteOutboundDnclistEmailaddresses) | **DELETE** /api/v2/outbound/dnclists/{dncListId}/emailaddresses | Deletes all or expired email addresses from a DNC list.
[**deleteOutboundDnclistPhonenumbers**](OutboundApi#deleteOutboundDnclistPhonenumbers) | **DELETE** /api/v2/outbound/dnclists/{dncListId}/phonenumbers | Deletes all or expired phone numbers from a DNC list.
[**deleteOutboundDnclistWhatsappnumbers**](OutboundApi#deleteOutboundDnclistWhatsappnumbers) | **DELETE** /api/v2/outbound/dnclists/{dncListId}/whatsappnumbers | Deletes all or expired whatsApp numbers from a DNC list.
[**deleteOutboundFilespecificationtemplate**](OutboundApi#deleteOutboundFilespecificationtemplate) | **DELETE** /api/v2/outbound/filespecificationtemplates/{fileSpecificationTemplateId} | Delete File Specification Template
[**deleteOutboundFilespecificationtemplatesBulk**](OutboundApi#deleteOutboundFilespecificationtemplatesBulk) | **DELETE** /api/v2/outbound/filespecificationtemplates/bulk | Delete multiple file specification templates.
[**deleteOutboundImporttemplate**](OutboundApi#deleteOutboundImporttemplate) | **DELETE** /api/v2/outbound/importtemplates/{importTemplateId} | Delete Import Template
[**deleteOutboundImporttemplates**](OutboundApi#deleteOutboundImporttemplates) | **DELETE** /api/v2/outbound/importtemplates | Delete multiple import templates.
[**deleteOutboundMessagingcampaign**](OutboundApi#deleteOutboundMessagingcampaign) | **DELETE** /api/v2/outbound/messagingcampaigns/{messagingCampaignId} | Delete an Outbound Messaging Campaign
[**deleteOutboundMessagingcampaignProgress**](OutboundApi#deleteOutboundMessagingcampaignProgress) | **DELETE** /api/v2/outbound/messagingcampaigns/{messagingCampaignId}/progress | Reset messaging campaign progress and recycle the messaging campaign
[**deleteOutboundRuleset**](OutboundApi#deleteOutboundRuleset) | **DELETE** /api/v2/outbound/rulesets/{ruleSetId} | Delete a Rule Set.
[**deleteOutboundSchedulesCampaign**](OutboundApi#deleteOutboundSchedulesCampaign) | **DELETE** /api/v2/outbound/schedules/campaigns/{campaignId} | Delete a dialer campaign schedule.
[**deleteOutboundSchedulesEmailcampaign**](OutboundApi#deleteOutboundSchedulesEmailcampaign) | **DELETE** /api/v2/outbound/schedules/emailcampaigns/{emailCampaignId} | Delete an email campaign schedule.
[**deleteOutboundSchedulesMessagingcampaign**](OutboundApi#deleteOutboundSchedulesMessagingcampaign) | **DELETE** /api/v2/outbound/schedules/messagingcampaigns/{messagingCampaignId} | Delete a messaging campaign schedule.
[**deleteOutboundSchedulesSequence**](OutboundApi#deleteOutboundSchedulesSequence) | **DELETE** /api/v2/outbound/schedules/sequences/{sequenceId} | Delete a dialer sequence schedule.
[**deleteOutboundSchedulesWhatsappcampaign**](OutboundApi#deleteOutboundSchedulesWhatsappcampaign) | **DELETE** /api/v2/outbound/schedules/whatsappcampaigns/{whatsAppCampaignId} | Delete a WhatsApp campaign schedule.
[**deleteOutboundSequence**](OutboundApi#deleteOutboundSequence) | **DELETE** /api/v2/outbound/sequences/{sequenceId} | Delete a dialer campaign sequence.
[**getOutboundAttemptlimit**](OutboundApi#getOutboundAttemptlimit) | **GET** /api/v2/outbound/attemptlimits/{attemptLimitsId} | Get attempt limits
[**getOutboundAttemptlimits**](OutboundApi#getOutboundAttemptlimits) | **GET** /api/v2/outbound/attemptlimits | Query attempt limits list
[**getOutboundCallabletimeset**](OutboundApi#getOutboundCallabletimeset) | **GET** /api/v2/outbound/callabletimesets/{callableTimeSetId} | Get callable time set
[**getOutboundCallabletimesets**](OutboundApi#getOutboundCallabletimesets) | **GET** /api/v2/outbound/callabletimesets | Query callable time set list
[**getOutboundCallanalysisresponseset**](OutboundApi#getOutboundCallanalysisresponseset) | **GET** /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId} | Get a dialer call analysis response set.
[**getOutboundCallanalysisresponsesets**](OutboundApi#getOutboundCallanalysisresponsesets) | **GET** /api/v2/outbound/callanalysisresponsesets | Query a list of dialer call analysis response sets.
[**getOutboundCampaign**](OutboundApi#getOutboundCampaign) | **GET** /api/v2/outbound/campaigns/{campaignId} | Get dialer campaign.
[**getOutboundCampaignAgentownedmappingpreviewResults**](OutboundApi#getOutboundCampaignAgentownedmappingpreviewResults) | **GET** /api/v2/outbound/campaigns/{campaignId}/agentownedmappingpreview/results | Get a preview of how agents will be mapped to this campaign's contact list.
[**getOutboundCampaignDiagnostics**](OutboundApi#getOutboundCampaignDiagnostics) | **GET** /api/v2/outbound/campaigns/{campaignId}/diagnostics | Get campaign diagnostics
[**getOutboundCampaignInteractions**](OutboundApi#getOutboundCampaignInteractions) | **GET** /api/v2/outbound/campaigns/{campaignId}/interactions | Get dialer campaign interactions.
[**getOutboundCampaignLinedistribution**](OutboundApi#getOutboundCampaignLinedistribution) | **GET** /api/v2/outbound/campaigns/{campaignId}/linedistribution | Get line distribution information for campaigns using same Edge Group or Site as given campaign
[**getOutboundCampaignProgress**](OutboundApi#getOutboundCampaignProgress) | **GET** /api/v2/outbound/campaigns/{campaignId}/progress | Get campaign progress
[**getOutboundCampaignSkillcombinations**](OutboundApi#getOutboundCampaignSkillcombinations) | **GET** /api/v2/outbound/campaigns/{campaignId}/skillcombinations | Get the remaining and total contact count for each skill combination in a skills campaign
[**getOutboundCampaignStats**](OutboundApi#getOutboundCampaignStats) | **GET** /api/v2/outbound/campaigns/{campaignId}/stats | Get statistics about a Dialer Campaign
[**getOutboundCampaignrule**](OutboundApi#getOutboundCampaignrule) | **GET** /api/v2/outbound/campaignrules/{campaignRuleId} | Get Campaign Rule
[**getOutboundCampaignrules**](OutboundApi#getOutboundCampaignrules) | **GET** /api/v2/outbound/campaignrules | Query Campaign Rule list
[**getOutboundCampaigns**](OutboundApi#getOutboundCampaigns) | **GET** /api/v2/outbound/campaigns | Query a list of dialer campaigns.
[**getOutboundCampaignsAll**](OutboundApi#getOutboundCampaignsAll) | **GET** /api/v2/outbound/campaigns/all | Query across all types of campaigns by division
[**getOutboundCampaignsAllDivisionviews**](OutboundApi#getOutboundCampaignsAllDivisionviews) | **GET** /api/v2/outbound/campaigns/all/divisionviews | Query across all types of campaigns
[**getOutboundCampaignsDivisionview**](OutboundApi#getOutboundCampaignsDivisionview) | **GET** /api/v2/outbound/campaigns/divisionviews/{campaignId} | Get a basic Campaign information object
[**getOutboundCampaignsDivisionviews**](OutboundApi#getOutboundCampaignsDivisionviews) | **GET** /api/v2/outbound/campaigns/divisionviews | Query a list of basic Campaign information objects
[**getOutboundContactlist**](OutboundApi#getOutboundContactlist) | **GET** /api/v2/outbound/contactlists/{contactListId} | Get a dialer contact list.
[**getOutboundContactlistContact**](OutboundApi#getOutboundContactlistContact) | **GET** /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId} | Get a contact.
[**getOutboundContactlistContactsBulkJob**](OutboundApi#getOutboundContactlistContactsBulkJob) | **GET** /api/v2/outbound/contactlists/{contactListId}/contacts/bulk/jobs/{jobId} | Get bulk operation job.
[**getOutboundContactlistContactsBulkJobs**](OutboundApi#getOutboundContactlistContactsBulkJobs) | **GET** /api/v2/outbound/contactlists/{contactListId}/contacts/bulk/jobs | Get 10 most recent bulk operation jobs associated with contact list.
[**getOutboundContactlistExport**](OutboundApi#getOutboundContactlistExport) | **GET** /api/v2/outbound/contactlists/{contactListId}/export | Get the URI of a contact list export.
[**getOutboundContactlistImportstatus**](OutboundApi#getOutboundContactlistImportstatus) | **GET** /api/v2/outbound/contactlists/{contactListId}/importstatus | Get dialer contactList import status.
[**getOutboundContactlistTimezonemappingpreview**](OutboundApi#getOutboundContactlistTimezonemappingpreview) | **GET** /api/v2/outbound/contactlists/{contactListId}/timezonemappingpreview | Preview the result of applying Automatic Time Zone Mapping to a contact list
[**getOutboundContactlistfilter**](OutboundApi#getOutboundContactlistfilter) | **GET** /api/v2/outbound/contactlistfilters/{contactListFilterId} | Get Contact list filter
[**getOutboundContactlistfilters**](OutboundApi#getOutboundContactlistfilters) | **GET** /api/v2/outbound/contactlistfilters | Query Contact list filters
[**getOutboundContactlists**](OutboundApi#getOutboundContactlists) | **GET** /api/v2/outbound/contactlists | Query a list of contact lists.
[**getOutboundContactlistsDivisionview**](OutboundApi#getOutboundContactlistsDivisionview) | **GET** /api/v2/outbound/contactlists/divisionviews/{contactListId} | Get a basic ContactList information object
[**getOutboundContactlistsDivisionviews**](OutboundApi#getOutboundContactlistsDivisionviews) | **GET** /api/v2/outbound/contactlists/divisionviews | Query a list of simplified contact list objects.
[**getOutboundContactlisttemplate**](OutboundApi#getOutboundContactlisttemplate) | **GET** /api/v2/outbound/contactlisttemplates/{contactListTemplateId} | Get Contact List Template
[**getOutboundContactlisttemplates**](OutboundApi#getOutboundContactlisttemplates) | **GET** /api/v2/outbound/contactlisttemplates | Query a list of contact list templates
[**getOutboundDigitalruleset**](OutboundApi#getOutboundDigitalruleset) | **GET** /api/v2/outbound/digitalrulesets/{digitalRuleSetId} | Get an Outbound Digital Rule Set
[**getOutboundDigitalrulesets**](OutboundApi#getOutboundDigitalrulesets) | **GET** /api/v2/outbound/digitalrulesets | Query a list of Outbound Digital Rule Sets
[**getOutboundDnclist**](OutboundApi#getOutboundDnclist) | **GET** /api/v2/outbound/dnclists/{dncListId} | Get dialer DNC list
[**getOutboundDnclistExport**](OutboundApi#getOutboundDnclistExport) | **GET** /api/v2/outbound/dnclists/{dncListId}/export | Get the URI of a DNC list export.
[**getOutboundDnclistImportstatus**](OutboundApi#getOutboundDnclistImportstatus) | **GET** /api/v2/outbound/dnclists/{dncListId}/importstatus | Get dialer dncList import status.
[**getOutboundDnclists**](OutboundApi#getOutboundDnclists) | **GET** /api/v2/outbound/dnclists | Query dialer DNC lists
[**getOutboundDnclistsDivisionview**](OutboundApi#getOutboundDnclistsDivisionview) | **GET** /api/v2/outbound/dnclists/divisionviews/{dncListId} | Get a basic DncList information object
[**getOutboundDnclistsDivisionviews**](OutboundApi#getOutboundDnclistsDivisionviews) | **GET** /api/v2/outbound/dnclists/divisionviews | Query a list of simplified dnc list objects.
[**getOutboundEvent**](OutboundApi#getOutboundEvent) | **GET** /api/v2/outbound/events/{eventId} | Get Dialer Event
[**getOutboundEvents**](OutboundApi#getOutboundEvents) | **GET** /api/v2/outbound/events | Query Event Logs
[**getOutboundFilespecificationtemplate**](OutboundApi#getOutboundFilespecificationtemplate) | **GET** /api/v2/outbound/filespecificationtemplates/{fileSpecificationTemplateId} | Get File Specification Template
[**getOutboundFilespecificationtemplates**](OutboundApi#getOutboundFilespecificationtemplates) | **GET** /api/v2/outbound/filespecificationtemplates | Query File Specification Templates
[**getOutboundImporttemplate**](OutboundApi#getOutboundImporttemplate) | **GET** /api/v2/outbound/importtemplates/{importTemplateId} | Get Import Template
[**getOutboundImporttemplateImportstatus**](OutboundApi#getOutboundImporttemplateImportstatus) | **GET** /api/v2/outbound/importtemplates/{importTemplateId}/importstatus | Get the import status for an import template.
[**getOutboundImporttemplates**](OutboundApi#getOutboundImporttemplates) | **GET** /api/v2/outbound/importtemplates | Query Import Templates
[**getOutboundMessagingcampaign**](OutboundApi#getOutboundMessagingcampaign) | **GET** /api/v2/outbound/messagingcampaigns/{messagingCampaignId} | Get an Outbound Messaging Campaign
[**getOutboundMessagingcampaignDiagnostics**](OutboundApi#getOutboundMessagingcampaignDiagnostics) | **GET** /api/v2/outbound/messagingcampaigns/{messagingCampaignId}/diagnostics | Get messaging campaign diagnostics
[**getOutboundMessagingcampaignProgress**](OutboundApi#getOutboundMessagingcampaignProgress) | **GET** /api/v2/outbound/messagingcampaigns/{messagingCampaignId}/progress | Get messaging campaign's progress
[**getOutboundMessagingcampaigns**](OutboundApi#getOutboundMessagingcampaigns) | **GET** /api/v2/outbound/messagingcampaigns | Query a list of Messaging Campaigns
[**getOutboundMessagingcampaignsDivisionview**](OutboundApi#getOutboundMessagingcampaignsDivisionview) | **GET** /api/v2/outbound/messagingcampaigns/divisionviews/{messagingCampaignId} | Get a basic Messaging Campaign information object
[**getOutboundMessagingcampaignsDivisionviews**](OutboundApi#getOutboundMessagingcampaignsDivisionviews) | **GET** /api/v2/outbound/messagingcampaigns/divisionviews | Query a list of basic Messaging Campaign information objects
[**getOutboundRuleset**](OutboundApi#getOutboundRuleset) | **GET** /api/v2/outbound/rulesets/{ruleSetId} | Get a Rule Set by ID.
[**getOutboundRulesets**](OutboundApi#getOutboundRulesets) | **GET** /api/v2/outbound/rulesets | Query a list of Rule Sets.
[**getOutboundSchedulesCampaign**](OutboundApi#getOutboundSchedulesCampaign) | **GET** /api/v2/outbound/schedules/campaigns/{campaignId} | Get a dialer campaign schedule.
[**getOutboundSchedulesCampaigns**](OutboundApi#getOutboundSchedulesCampaigns) | **GET** /api/v2/outbound/schedules/campaigns | Query for a list of dialer campaign schedules.
[**getOutboundSchedulesEmailcampaign**](OutboundApi#getOutboundSchedulesEmailcampaign) | **GET** /api/v2/outbound/schedules/emailcampaigns/{emailCampaignId} | Get an email campaign schedule.
[**getOutboundSchedulesEmailcampaigns**](OutboundApi#getOutboundSchedulesEmailcampaigns) | **GET** /api/v2/outbound/schedules/emailcampaigns | Query for a list of email campaign schedules.
[**getOutboundSchedulesMessagingcampaign**](OutboundApi#getOutboundSchedulesMessagingcampaign) | **GET** /api/v2/outbound/schedules/messagingcampaigns/{messagingCampaignId} | Get a messaging campaign schedule.
[**getOutboundSchedulesMessagingcampaigns**](OutboundApi#getOutboundSchedulesMessagingcampaigns) | **GET** /api/v2/outbound/schedules/messagingcampaigns | Query for a list of messaging campaign schedules.
[**getOutboundSchedulesSequence**](OutboundApi#getOutboundSchedulesSequence) | **GET** /api/v2/outbound/schedules/sequences/{sequenceId} | Get a dialer sequence schedule.
[**getOutboundSchedulesSequences**](OutboundApi#getOutboundSchedulesSequences) | **GET** /api/v2/outbound/schedules/sequences | Query for a list of dialer sequence schedules.
[**getOutboundSchedulesWhatsappcampaign**](OutboundApi#getOutboundSchedulesWhatsappcampaign) | **GET** /api/v2/outbound/schedules/whatsappcampaigns/{whatsAppCampaignId} | Get a WhatsApp campaign schedule.
[**getOutboundSchedulesWhatsappcampaigns**](OutboundApi#getOutboundSchedulesWhatsappcampaigns) | **GET** /api/v2/outbound/schedules/whatsappcampaigns | Query for a list of WhatsApp campaign schedules.
[**getOutboundSequence**](OutboundApi#getOutboundSequence) | **GET** /api/v2/outbound/sequences/{sequenceId} | Get a dialer campaign sequence.
[**getOutboundSequences**](OutboundApi#getOutboundSequences) | **GET** /api/v2/outbound/sequences | Query a list of dialer campaign sequences.
[**getOutboundSettings**](OutboundApi#getOutboundSettings) | **GET** /api/v2/outbound/settings | Get the outbound settings for this organization
[**getOutboundWrapupcodemappings**](OutboundApi#getOutboundWrapupcodemappings) | **GET** /api/v2/outbound/wrapupcodemappings | Get the Dialer wrap up code mapping.
[**patchOutboundCampaign**](OutboundApi#patchOutboundCampaign) | **PATCH** /api/v2/outbound/campaigns/{campaignId} | Update a campaign.
[**patchOutboundDnclistCustomexclusioncolumns**](OutboundApi#patchOutboundDnclistCustomexclusioncolumns) | **PATCH** /api/v2/outbound/dnclists/{dncListId}/customexclusioncolumns | Add entries to or delete entries from a DNC list.
[**patchOutboundDnclistEmailaddresses**](OutboundApi#patchOutboundDnclistEmailaddresses) | **PATCH** /api/v2/outbound/dnclists/{dncListId}/emailaddresses | Add emails to or Delete emails from a DNC list.
[**patchOutboundDnclistPhonenumbers**](OutboundApi#patchOutboundDnclistPhonenumbers) | **PATCH** /api/v2/outbound/dnclists/{dncListId}/phonenumbers | Add numbers to or delete numbers from a DNC list.
[**patchOutboundDnclistWhatsappnumbers**](OutboundApi#patchOutboundDnclistWhatsappnumbers) | **PATCH** /api/v2/outbound/dnclists/{dncListId}/whatsappnumbers | Add entries to or delete entries from a DNC list.
[**patchOutboundSettings**](OutboundApi#patchOutboundSettings) | **PATCH** /api/v2/outbound/settings | Update the outbound settings for this organization
[**postOutboundAttemptlimits**](OutboundApi#postOutboundAttemptlimits) | **POST** /api/v2/outbound/attemptlimits | Create attempt limits
[**postOutboundCallabletimesets**](OutboundApi#postOutboundCallabletimesets) | **POST** /api/v2/outbound/callabletimesets | Create callable time set
[**postOutboundCallanalysisresponsesets**](OutboundApi#postOutboundCallanalysisresponsesets) | **POST** /api/v2/outbound/callanalysisresponsesets | Create a dialer call analysis response set.
[**postOutboundCampaignAgentownedmappingpreview**](OutboundApi#postOutboundCampaignAgentownedmappingpreview) | **POST** /api/v2/outbound/campaigns/{campaignId}/agentownedmappingpreview | Initiate request for a preview of how agents will be mapped to this campaign's contact list.
[**postOutboundCampaignCallbackSchedule**](OutboundApi#postOutboundCampaignCallbackSchedule) | **POST** /api/v2/outbound/campaigns/{campaignId}/callback/schedule | Schedule a Callback for a Dialer Campaign (Deprecated)
[**postOutboundCampaignStart**](OutboundApi#postOutboundCampaignStart) | **POST** /api/v2/outbound/campaigns/{campaignId}/start | Start the campaign
[**postOutboundCampaignStop**](OutboundApi#postOutboundCampaignStop) | **POST** /api/v2/outbound/campaigns/{campaignId}/stop | Stop the campaign
[**postOutboundCampaignrules**](OutboundApi#postOutboundCampaignrules) | **POST** /api/v2/outbound/campaignrules | Create Campaign Rule
[**postOutboundCampaigns**](OutboundApi#postOutboundCampaigns) | **POST** /api/v2/outbound/campaigns | Create a campaign.
[**postOutboundCampaignsProgress**](OutboundApi#postOutboundCampaignsProgress) | **POST** /api/v2/outbound/campaigns/progress | Get progress for a list of campaigns
[**postOutboundContactlistClear**](OutboundApi#postOutboundContactlistClear) | **POST** /api/v2/outbound/contactlists/{contactListId}/clear | Deletes all contacts out of a list. All outstanding recalls or rule-scheduled callbacks for non-preview campaigns configured with the contactlist will be cancelled.
[**postOutboundContactlistContacts**](OutboundApi#postOutboundContactlistContacts) | **POST** /api/v2/outbound/contactlists/{contactListId}/contacts | Add contacts to a contact list.
[**postOutboundContactlistContactsBulk**](OutboundApi#postOutboundContactlistContactsBulk) | **POST** /api/v2/outbound/contactlists/{contactListId}/contacts/bulk | Get contacts from a contact list.
[**postOutboundContactlistContactsBulkRemove**](OutboundApi#postOutboundContactlistContactsBulkRemove) | **POST** /api/v2/outbound/contactlists/{contactListId}/contacts/bulk/remove | Start an async job to delete contacts using a filter.
[**postOutboundContactlistContactsBulkUpdate**](OutboundApi#postOutboundContactlistContactsBulkUpdate) | **POST** /api/v2/outbound/contactlists/{contactListId}/contacts/bulk/update | Start an async job to bulk edit contacts.
[**postOutboundContactlistContactsSearch**](OutboundApi#postOutboundContactlistContactsSearch) | **POST** /api/v2/outbound/contactlists/{contactListId}/contacts/search | Query contacts from a contact list.
[**postOutboundContactlistExport**](OutboundApi#postOutboundContactlistExport) | **POST** /api/v2/outbound/contactlists/{contactListId}/export | Initiate the export of a contact list.
[**postOutboundContactlistfilters**](OutboundApi#postOutboundContactlistfilters) | **POST** /api/v2/outbound/contactlistfilters | Create Contact List Filter
[**postOutboundContactlistfiltersBulkRetrieve**](OutboundApi#postOutboundContactlistfiltersBulkRetrieve) | **POST** /api/v2/outbound/contactlistfilters/bulk/retrieve | Retrieve multiple contact list filters
[**postOutboundContactlistfiltersPreview**](OutboundApi#postOutboundContactlistfiltersPreview) | **POST** /api/v2/outbound/contactlistfilters/preview | Get a preview of the output of a contact list filter
[**postOutboundContactlists**](OutboundApi#postOutboundContactlists) | **POST** /api/v2/outbound/contactlists | Create a contact List.
[**postOutboundContactlisttemplates**](OutboundApi#postOutboundContactlisttemplates) | **POST** /api/v2/outbound/contactlisttemplates | Create Contact List Template
[**postOutboundContactlisttemplatesBulkAdd**](OutboundApi#postOutboundContactlisttemplatesBulkAdd) | **POST** /api/v2/outbound/contactlisttemplates/bulk/add | Add multiple contact list templates
[**postOutboundContactlisttemplatesBulkRetrieve**](OutboundApi#postOutboundContactlisttemplatesBulkRetrieve) | **POST** /api/v2/outbound/contactlisttemplates/bulk/retrieve | Get multiple contact list templates
[**postOutboundConversationDnc**](OutboundApi#postOutboundConversationDnc) | **POST** /api/v2/outbound/conversations/{conversationId}/dnc | Add phone numbers to a Dialer DNC list.
[**postOutboundDigitalrulesets**](OutboundApi#postOutboundDigitalrulesets) | **POST** /api/v2/outbound/digitalrulesets | Create an Outbound Digital Rule Set
[**postOutboundDnclistEmailaddresses**](OutboundApi#postOutboundDnclistEmailaddresses) | **POST** /api/v2/outbound/dnclists/{dncListId}/emailaddresses | Add email addresses to a DNC list.
[**postOutboundDnclistExport**](OutboundApi#postOutboundDnclistExport) | **POST** /api/v2/outbound/dnclists/{dncListId}/export | Initiate the export of a dnc list.
[**postOutboundDnclistPhonenumbers**](OutboundApi#postOutboundDnclistPhonenumbers) | **POST** /api/v2/outbound/dnclists/{dncListId}/phonenumbers | Add phone numbers to a DNC list.
[**postOutboundDnclists**](OutboundApi#postOutboundDnclists) | **POST** /api/v2/outbound/dnclists | Create dialer DNC list
[**postOutboundFilespecificationtemplates**](OutboundApi#postOutboundFilespecificationtemplates) | **POST** /api/v2/outbound/filespecificationtemplates | Create File Specification Template
[**postOutboundImporttemplates**](OutboundApi#postOutboundImporttemplates) | **POST** /api/v2/outbound/importtemplates | Create Import Template
[**postOutboundImporttemplatesBulkAdd**](OutboundApi#postOutboundImporttemplatesBulkAdd) | **POST** /api/v2/outbound/importtemplates/bulk/add | Add multiple import templates
[**postOutboundMessagingcampaignStart**](OutboundApi#postOutboundMessagingcampaignStart) | **POST** /api/v2/outbound/messagingcampaigns/{messagingCampaignId}/start | Start the campaign
[**postOutboundMessagingcampaignStop**](OutboundApi#postOutboundMessagingcampaignStop) | **POST** /api/v2/outbound/messagingcampaigns/{messagingCampaignId}/stop | Stop the campaign
[**postOutboundMessagingcampaigns**](OutboundApi#postOutboundMessagingcampaigns) | **POST** /api/v2/outbound/messagingcampaigns | Create a Messaging Campaign
[**postOutboundMessagingcampaignsProgress**](OutboundApi#postOutboundMessagingcampaignsProgress) | **POST** /api/v2/outbound/messagingcampaigns/progress | Get progress for a list of messaging campaigns
[**postOutboundRulesets**](OutboundApi#postOutboundRulesets) | **POST** /api/v2/outbound/rulesets | Create a Rule Set.
[**postOutboundSequences**](OutboundApi#postOutboundSequences) | **POST** /api/v2/outbound/sequences | Create a new campaign sequence.
[**putOutboundAttemptlimit**](OutboundApi#putOutboundAttemptlimit) | **PUT** /api/v2/outbound/attemptlimits/{attemptLimitsId} | Update attempt limits
[**putOutboundCallabletimeset**](OutboundApi#putOutboundCallabletimeset) | **PUT** /api/v2/outbound/callabletimesets/{callableTimeSetId} | Update callable time set
[**putOutboundCallanalysisresponseset**](OutboundApi#putOutboundCallanalysisresponseset) | **PUT** /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId} | Update a dialer call analysis response set.
[**putOutboundCampaign**](OutboundApi#putOutboundCampaign) | **PUT** /api/v2/outbound/campaigns/{campaignId} | Update a campaign.
[**putOutboundCampaignAgent**](OutboundApi#putOutboundCampaignAgent) | **PUT** /api/v2/outbound/campaigns/{campaignId}/agents/{userId} | Send notification that an agent's state changed 
[**putOutboundCampaignrule**](OutboundApi#putOutboundCampaignrule) | **PUT** /api/v2/outbound/campaignrules/{campaignRuleId} | Update Campaign Rule
[**putOutboundContactlist**](OutboundApi#putOutboundContactlist) | **PUT** /api/v2/outbound/contactlists/{contactListId} | Update a contact list.
[**putOutboundContactlistContact**](OutboundApi#putOutboundContactlistContact) | **PUT** /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId} | Update a contact.
[**putOutboundContactlistfilter**](OutboundApi#putOutboundContactlistfilter) | **PUT** /api/v2/outbound/contactlistfilters/{contactListFilterId} | Update Contact List Filter
[**putOutboundContactlisttemplate**](OutboundApi#putOutboundContactlisttemplate) | **PUT** /api/v2/outbound/contactlisttemplates/{contactListTemplateId} | Update a contact list template.
[**putOutboundDigitalruleset**](OutboundApi#putOutboundDigitalruleset) | **PUT** /api/v2/outbound/digitalrulesets/{digitalRuleSetId} | Update an Outbound Digital Rule Set
[**putOutboundDnclist**](OutboundApi#putOutboundDnclist) | **PUT** /api/v2/outbound/dnclists/{dncListId} | Update dialer DNC list
[**putOutboundFilespecificationtemplate**](OutboundApi#putOutboundFilespecificationtemplate) | **PUT** /api/v2/outbound/filespecificationtemplates/{fileSpecificationTemplateId} | Update File Specification Template
[**putOutboundImporttemplate**](OutboundApi#putOutboundImporttemplate) | **PUT** /api/v2/outbound/importtemplates/{importTemplateId} | Update Import Template
[**putOutboundMessagingcampaign**](OutboundApi#putOutboundMessagingcampaign) | **PUT** /api/v2/outbound/messagingcampaigns/{messagingCampaignId} | Update an Outbound Messaging Campaign
[**putOutboundRuleset**](OutboundApi#putOutboundRuleset) | **PUT** /api/v2/outbound/rulesets/{ruleSetId} | Update a Rule Set.
[**putOutboundSchedulesCampaign**](OutboundApi#putOutboundSchedulesCampaign) | **PUT** /api/v2/outbound/schedules/campaigns/{campaignId} | Update a new campaign schedule.
[**putOutboundSchedulesEmailcampaign**](OutboundApi#putOutboundSchedulesEmailcampaign) | **PUT** /api/v2/outbound/schedules/emailcampaigns/{emailCampaignId} | Update an email campaign schedule.
[**putOutboundSchedulesMessagingcampaign**](OutboundApi#putOutboundSchedulesMessagingcampaign) | **PUT** /api/v2/outbound/schedules/messagingcampaigns/{messagingCampaignId} | Update a new messaging campaign schedule.
[**putOutboundSchedulesSequence**](OutboundApi#putOutboundSchedulesSequence) | **PUT** /api/v2/outbound/schedules/sequences/{sequenceId} | Update a new sequence schedule.
[**putOutboundSchedulesWhatsappcampaign**](OutboundApi#putOutboundSchedulesWhatsappcampaign) | **PUT** /api/v2/outbound/schedules/whatsappcampaigns/{whatsAppCampaignId} | Update a WhatsApp campaign schedule.
[**putOutboundSequence**](OutboundApi#putOutboundSequence) | **PUT** /api/v2/outbound/sequences/{sequenceId} | Update a new campaign sequence.
[**putOutboundWrapupcodemappings**](OutboundApi#putOutboundWrapupcodemappings) | **PUT** /api/v2/outbound/wrapupcodemappings | Update the Dialer wrap up code mapping.



## deleteOutboundAttemptlimit

> void deleteOutboundAttemptlimit(attemptLimitsId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteOutboundCallabletimeset

> void deleteOutboundCallabletimeset(callableTimeSetId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteOutboundCallanalysisresponseset

> void deleteOutboundCallanalysisresponseset(callAnalysisSetId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteOutboundCampaign

> Campaign deleteOutboundCampaign(campaignId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Campaign**


## deleteOutboundCampaignProgress

> void deleteOutboundCampaignProgress(campaignId)


DELETE /api/v2/outbound/campaigns/{campaignId}/progress

Reset campaign progress and recycle the campaign

Requires ANY permissions:

* outbound:campaign:edit
* outbound:campaign:recycle

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteOutboundCampaignrule

> void deleteOutboundCampaignrule(campaignRuleId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteOutboundContactlist

> void deleteOutboundContactlist(contactListId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteOutboundContactlistContact

> void deleteOutboundContactlistContact(contactListId, contactId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteOutboundContactlistContacts

> void deleteOutboundContactlistContacts(contactListId, contactIds)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteOutboundContactlistfilter

> void deleteOutboundContactlistfilter(contactListFilterId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteOutboundContactlists

> void deleteOutboundContactlists(id)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteOutboundContactlisttemplate

> void deleteOutboundContactlisttemplate(contactListTemplateId)


DELETE /api/v2/outbound/contactlisttemplates/{contactListTemplateId}

Delete Contact List Template

Requires ANY permissions:

* outbound:contactListTemplate:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListTemplateId = "contactListTemplateId_example"; // String | ContactListTemplate ID

apiInstance.deleteOutboundContactlisttemplate(contactListTemplateId)
  .then(() => {
    console.log('deleteOutboundContactlisttemplate returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundContactlisttemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListTemplateId** | **String** | ContactListTemplate ID |  |

### Return type

void (no response body)


## deleteOutboundContactlisttemplates

> void deleteOutboundContactlisttemplates(id)


DELETE /api/v2/outbound/contactlisttemplates

Delete multiple contact list templates.

Requires ANY permissions:

* outbound:contactListTemplate:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let id = ["id_example"]; // [String] | contact list template id(s) to delete

apiInstance.deleteOutboundContactlisttemplates(id)
  .then(() => {
    console.log('deleteOutboundContactlisttemplates returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundContactlisttemplates');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **[String]** | contact list template id(s) to delete |  |

### Return type

void (no response body)


## deleteOutboundDigitalruleset

> void deleteOutboundDigitalruleset(digitalRuleSetId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteOutboundDnclist

> void deleteOutboundDnclist(dncListId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteOutboundDnclistCustomexclusioncolumns

> void deleteOutboundDnclistCustomexclusioncolumns(dncListId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteOutboundDnclistEmailaddresses

> void deleteOutboundDnclistEmailaddresses(dncListId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteOutboundDnclistPhonenumbers

> void deleteOutboundDnclistPhonenumbers(dncListId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteOutboundDnclistWhatsappnumbers

> void deleteOutboundDnclistWhatsappnumbers(dncListId, opts)


DELETE /api/v2/outbound/dnclists/{dncListId}/whatsappnumbers

Deletes all or expired whatsApp numbers from a DNC list.

This operation is only for Internal DNC lists of whatsApp numbers

Requires ANY permissions:

* outbound:dnc:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let dncListId = "dncListId_example"; // String | DncList ID
let opts = { 
  'expiredOnly': false // Boolean | Set to true to only remove DNC whatsApp numbers that are expired
};

apiInstance.deleteOutboundDnclistWhatsappnumbers(dncListId, opts)
  .then(() => {
    console.log('deleteOutboundDnclistWhatsappnumbers returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundDnclistWhatsappnumbers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String** | DncList ID |  |
 **expiredOnly** | **Boolean** | Set to true to only remove DNC whatsApp numbers that are expired | [optional] [default to false] |

### Return type

void (no response body)


## deleteOutboundFilespecificationtemplate

> void deleteOutboundFilespecificationtemplate(fileSpecificationTemplateId)


DELETE /api/v2/outbound/filespecificationtemplates/{fileSpecificationTemplateId}

Delete File Specification Template

Requires ANY permissions:

* outbound:fileSpecificationTemplate:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let fileSpecificationTemplateId = "fileSpecificationTemplateId_example"; // String | File Specification Template ID

apiInstance.deleteOutboundFilespecificationtemplate(fileSpecificationTemplateId)
  .then(() => {
    console.log('deleteOutboundFilespecificationtemplate returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundFilespecificationtemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **fileSpecificationTemplateId** | **String** | File Specification Template ID |  |

### Return type

void (no response body)


## deleteOutboundFilespecificationtemplatesBulk

> void deleteOutboundFilespecificationtemplatesBulk(id)


DELETE /api/v2/outbound/filespecificationtemplates/bulk

Delete multiple file specification templates.

Requires ANY permissions:

* outbound:fileSpecificationTemplate:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let id = ["id_example"]; // [String] | File Specification template id(s) to delete

apiInstance.deleteOutboundFilespecificationtemplatesBulk(id)
  .then(() => {
    console.log('deleteOutboundFilespecificationtemplatesBulk returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundFilespecificationtemplatesBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **[String]** | File Specification template id(s) to delete |  |

### Return type

void (no response body)


## deleteOutboundImporttemplate

> void deleteOutboundImporttemplate(importTemplateId)


DELETE /api/v2/outbound/importtemplates/{importTemplateId}

Delete Import Template

Requires ANY permissions:

* outbound:importTemplate:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let importTemplateId = "importTemplateId_example"; // String | Import Template ID

apiInstance.deleteOutboundImporttemplate(importTemplateId)
  .then(() => {
    console.log('deleteOutboundImporttemplate returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundImporttemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **importTemplateId** | **String** | Import Template ID |  |

### Return type

void (no response body)


## deleteOutboundImporttemplates

> void deleteOutboundImporttemplates(id)


DELETE /api/v2/outbound/importtemplates

Delete multiple import templates.

Requires ANY permissions:

* outbound:importTemplate:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let id = ["id_example"]; // [String] | import template id(s) to delete

apiInstance.deleteOutboundImporttemplates(id)
  .then(() => {
    console.log('deleteOutboundImporttemplates returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundImporttemplates');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **[String]** | import template id(s) to delete |  |

### Return type

void (no response body)


## deleteOutboundMessagingcampaign

> MessagingCampaign deleteOutboundMessagingcampaign(messagingCampaignId)


DELETE /api/v2/outbound/messagingcampaigns/{messagingCampaignId}

Delete an Outbound Messaging Campaign

Requires ANY permissions:

* outbound:messagingCampaign:delete
* outbound:emailCampaign:delete
* outbound:whatsAppCampaign:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**MessagingCampaign**


## deleteOutboundMessagingcampaignProgress

> void deleteOutboundMessagingcampaignProgress(messagingCampaignId)


DELETE /api/v2/outbound/messagingcampaigns/{messagingCampaignId}/progress

Reset messaging campaign progress and recycle the messaging campaign

Documented permissions are applicable based on campaign type.

Requires ANY permissions:

* outbound:messagingCampaign:edit
* outbound:messagingCampaign:recycle
* outbound:emailCampaign:edit
* outbound:emailCampaign:recycle
* outbound:whatsAppCampaign:edit
* outbound:whatsAppCampaign:recycle

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteOutboundRuleset

> void deleteOutboundRuleset(ruleSetId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteOutboundSchedulesCampaign

> void deleteOutboundSchedulesCampaign(campaignId)


DELETE /api/v2/outbound/schedules/campaigns/{campaignId}

Delete a dialer campaign schedule.

Requires ANY permissions:

* outbound:schedule:delete
* outbound:campaign:deleteSchedule

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteOutboundSchedulesEmailcampaign

> void deleteOutboundSchedulesEmailcampaign(emailCampaignId)


DELETE /api/v2/outbound/schedules/emailcampaigns/{emailCampaignId}

Delete an email campaign schedule.

Requires ANY permissions:

* outbound:emailCampaignSchedule:delete
* outbound:emailCampaign:deleteSchedule

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteOutboundSchedulesMessagingcampaign

> void deleteOutboundSchedulesMessagingcampaign(messagingCampaignId)


DELETE /api/v2/outbound/schedules/messagingcampaigns/{messagingCampaignId}

Delete a messaging campaign schedule.

Requires ANY permissions:

* outbound:messagingCampaignSchedule:delete
* outbound:messagingCampaign:deleteSchedule

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteOutboundSchedulesSequence

> void deleteOutboundSchedulesSequence(sequenceId)


DELETE /api/v2/outbound/schedules/sequences/{sequenceId}

Delete a dialer sequence schedule.

Requires ANY permissions:

* outbound:schedule:delete
* outbound:campaignSequenceSchedule:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteOutboundSchedulesWhatsappcampaign

> void deleteOutboundSchedulesWhatsappcampaign(whatsAppCampaignId)


DELETE /api/v2/outbound/schedules/whatsappcampaigns/{whatsAppCampaignId}

Delete a WhatsApp campaign schedule.

Requires ANY permissions:

* outbound:whatsAppCampaignSchedule:delete
* outbound:whatsAppCampaign:deleteSchedule

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let whatsAppCampaignId = "whatsAppCampaignId_example"; // String | WhatsApp Campaign ID

apiInstance.deleteOutboundSchedulesWhatsappcampaign(whatsAppCampaignId)
  .then(() => {
    console.log('deleteOutboundSchedulesWhatsappcampaign returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOutboundSchedulesWhatsappcampaign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **whatsAppCampaignId** | **String** | WhatsApp Campaign ID |  |

### Return type

void (no response body)


## deleteOutboundSequence

> void deleteOutboundSequence(sequenceId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## getOutboundAttemptlimit

> AttemptLimits getOutboundAttemptlimit(attemptLimitsId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AttemptLimits**


## getOutboundAttemptlimits

> AttemptLimitsEntityListing getOutboundAttemptlimits(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AttemptLimitsEntityListing**


## getOutboundCallabletimeset

> CallableTimeSet getOutboundCallabletimeset(callableTimeSetId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CallableTimeSet**


## getOutboundCallabletimesets

> CallableTimeSetEntityListing getOutboundCallabletimesets(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CallableTimeSetEntityListing**


## getOutboundCallanalysisresponseset

> ResponseSet getOutboundCallanalysisresponseset(callAnalysisSetId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ResponseSet**


## getOutboundCallanalysisresponsesets

> ResponseSetEntityListing getOutboundCallanalysisresponsesets(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ResponseSetEntityListing**


## getOutboundCampaign

> Campaign getOutboundCampaign(campaignId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Campaign**


## getOutboundCampaignAgentownedmappingpreviewResults

> AgentOwnedMappingPreviewListing getOutboundCampaignAgentownedmappingpreviewResults(campaignId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AgentOwnedMappingPreviewListing**


## getOutboundCampaignDiagnostics

> CampaignDiagnostics getOutboundCampaignDiagnostics(campaignId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CampaignDiagnostics**


## getOutboundCampaignInteractions

> CampaignInteractions getOutboundCampaignInteractions(campaignId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CampaignInteractions**


## getOutboundCampaignLinedistribution

> CampaignOutboundLinesDistribution getOutboundCampaignLinedistribution(campaignId, opts)


GET /api/v2/outbound/campaigns/{campaignId}/linedistribution

Get line distribution information for campaigns using same Edge Group or Site as given campaign

Requires ANY permissions:

* outbound:lineDistribution:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID
let opts = { 
  'includeOnlyActiveCampaigns': true, // Boolean | If true will return only active Campaigns
  'edgeGroupId': "edgeGroupId_example", // String | Edge group to be used in line distribution calculations instead of current Campaign's Edge Group. Campaign's Site and Edge Group are mutually exclusive.
  'siteId': "siteId_example", // String | Site to be used in line distribution calculations instead of current Campaign's Site.  Campaign's Site and Edge Group are mutually exclusive.
  'useWeight': true, // Boolean | Enable usage of weight, this value overrides current Campaign's setting in line distribution calculations
  'relativeWeight': 3.4, // Number | Relative weight to be used in line distribution calculations instead of current Campaign's relative weight
  'outboundLineCount': 3.4 // Number | The number of outbound lines to be used in line distribution calculations, instead of current Campaign's Outbound Lines Count
};

apiInstance.getOutboundCampaignLinedistribution(campaignId, opts)
  .then((data) => {
    console.log(`getOutboundCampaignLinedistribution success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundCampaignLinedistribution');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String** | Campaign ID |  |
 **includeOnlyActiveCampaigns** | **Boolean** | If true will return only active Campaigns | [optional] [default to true] |
 **edgeGroupId** | **String** | Edge group to be used in line distribution calculations instead of current Campaign's Edge Group. Campaign's Site and Edge Group are mutually exclusive. | [optional]  |
 **siteId** | **String** | Site to be used in line distribution calculations instead of current Campaign's Site.  Campaign's Site and Edge Group are mutually exclusive. | [optional]  |
 **useWeight** | **Boolean** | Enable usage of weight, this value overrides current Campaign's setting in line distribution calculations | [optional]  |
 **relativeWeight** | **Number** | Relative weight to be used in line distribution calculations instead of current Campaign's relative weight | [optional]  |
 **outboundLineCount** | **Number** | The number of outbound lines to be used in line distribution calculations, instead of current Campaign's Outbound Lines Count | [optional]  |

### Return type

**CampaignOutboundLinesDistribution**


## getOutboundCampaignProgress

> CampaignProgress getOutboundCampaignProgress(campaignId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CampaignProgress**


## getOutboundCampaignSkillcombinations

> PagedSkillCombinationListing getOutboundCampaignSkillcombinations(campaignId, opts)


GET /api/v2/outbound/campaigns/{campaignId}/skillcombinations

Get the remaining and total contact count for each skill combination in a skills campaign

Requires ANY permissions:

* outbound:campaign:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getOutboundCampaignSkillcombinations(campaignId, opts)
  .then((data) => {
    console.log(`getOutboundCampaignSkillcombinations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundCampaignSkillcombinations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String** | Campaign ID |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |

### Return type

**PagedSkillCombinationListing**


## getOutboundCampaignStats

> CampaignStats getOutboundCampaignStats(campaignId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CampaignStats**


## getOutboundCampaignrule

> CampaignRule getOutboundCampaignrule(campaignRuleId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CampaignRule**


## getOutboundCampaignrules

> CampaignRuleEntityListing getOutboundCampaignrules(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CampaignRuleEntityListing**


## getOutboundCampaigns

> CampaignEntityListing getOutboundCampaigns(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CampaignEntityListing**


## getOutboundCampaignsAll

> CommonCampaignEntityListing getOutboundCampaignsAll(opts)


GET /api/v2/outbound/campaigns/all

Query across all types of campaigns by division

Requires ANY permissions:

* outbound:campaign:view
* outbound:messagingCampaign:view
* outbound:emailCampaign:view
* outbound:whatsAppCampaign:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **mediaType** | **[String]** | Media type(s) | [optional] <br />**Values**: email, sms, voice, whatsapp |
 **sortOrder** | **String** | Sort order | [optional] [default to a]<br />**Values**: ascending, descending |

### Return type

**CommonCampaignEntityListing**


## getOutboundCampaignsAllDivisionviews

> CommonCampaignDivisionViewEntityListing getOutboundCampaignsAllDivisionviews(opts)


GET /api/v2/outbound/campaigns/all/divisionviews

Query across all types of campaigns

Requires ANY permissions:

* outbound:campaign:search
* outbound:messagingCampaign:search
* outbound:emailCampaign:search
* outbound:whatsAppCampaign:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **mediaType** | **[String]** | Media type(s) | [optional] <br />**Values**: email, sms, voice, whatsapp |
 **sortOrder** | **String** | Sort order | [optional] [default to a]<br />**Values**: ascending, descending |

### Return type

**CommonCampaignDivisionViewEntityListing**


## getOutboundCampaignsDivisionview

> CampaignDivisionView getOutboundCampaignsDivisionview(campaignId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CampaignDivisionView**


## getOutboundCampaignsDivisionviews

> CampaignDivisionViewListing getOutboundCampaignsDivisionviews(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CampaignDivisionViewListing**


## getOutboundContactlist

> ContactList getOutboundContactlist(contactListId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ContactList**


## getOutboundContactlistContact

> DialerContact getOutboundContactlistContact(contactListId, contactId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DialerContact**


## getOutboundContactlistContactsBulkJob

> ContactsBulkOperationJob getOutboundContactlistContactsBulkJob(contactListId, jobId)


GET /api/v2/outbound/contactlists/{contactListId}/contacts/bulk/jobs/{jobId}

Get bulk operation job.

Requires ANY permissions:

* outbound:contactList:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListId = "contactListId_example"; // String | Contact List ID
let jobId = "jobId_example"; // String | Job ID

apiInstance.getOutboundContactlistContactsBulkJob(contactListId, jobId)
  .then((data) => {
    console.log(`getOutboundContactlistContactsBulkJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundContactlistContactsBulkJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String** | Contact List ID |  |
 **jobId** | **String** | Job ID |  |

### Return type

**ContactsBulkOperationJob**


## getOutboundContactlistContactsBulkJobs

> ContactsBulkOperationJobListing getOutboundContactlistContactsBulkJobs(contactListId)


GET /api/v2/outbound/contactlists/{contactListId}/contacts/bulk/jobs

Get 10 most recent bulk operation jobs associated with contact list.

Requires ANY permissions:

* outbound:contactList:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListId = "contactListId_example"; // String | Contact List ID

apiInstance.getOutboundContactlistContactsBulkJobs(contactListId)
  .then((data) => {
    console.log(`getOutboundContactlistContactsBulkJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundContactlistContactsBulkJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String** | Contact List ID |  |

### Return type

**ContactsBulkOperationJobListing**


## getOutboundContactlistExport

> ExportUri getOutboundContactlistExport(contactListId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ExportUri**


## getOutboundContactlistImportstatus

> ImportStatus getOutboundContactlistImportstatus(contactListId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ImportStatus**


## getOutboundContactlistTimezonemappingpreview

> TimeZoneMappingPreview getOutboundContactlistTimezonemappingpreview(contactListId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TimeZoneMappingPreview**


## getOutboundContactlistfilter

> ContactListFilter getOutboundContactlistfilter(contactListFilterId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ContactListFilter**


## getOutboundContactlistfilters

> ContactListFilterEntityListing getOutboundContactlistfilters(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ContactListFilterEntityListing**


## getOutboundContactlists

> ContactListEntityListing getOutboundContactlists(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ContactListEntityListing**


## getOutboundContactlistsDivisionview

> ContactListDivisionView getOutboundContactlistsDivisionview(contactListId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ContactListDivisionView**


## getOutboundContactlistsDivisionviews

> ContactListDivisionViewListing getOutboundContactlistsDivisionviews(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ContactListDivisionViewListing**


## getOutboundContactlisttemplate

> ContactListTemplate getOutboundContactlisttemplate(contactListTemplateId)


GET /api/v2/outbound/contactlisttemplates/{contactListTemplateId}

Get Contact List Template

Requires ANY permissions:

* outbound:contactListTemplate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListTemplateId = "contactListTemplateId_example"; // String | ContactListTemplate ID

apiInstance.getOutboundContactlisttemplate(contactListTemplateId)
  .then((data) => {
    console.log(`getOutboundContactlisttemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundContactlisttemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListTemplateId** | **String** | ContactListTemplate ID |  |

### Return type

**ContactListTemplate**


## getOutboundContactlisttemplates

> ContactListTemplateEntityListing getOutboundContactlisttemplates(opts)


GET /api/v2/outbound/contactlisttemplates

Query a list of contact list templates

Requires ANY permissions:

* outbound:contactListTemplate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

apiInstance.getOutboundContactlisttemplates(opts)
  .then((data) => {
    console.log(`getOutboundContactlisttemplates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundContactlisttemplates');
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

### Return type

**ContactListTemplateEntityListing**


## getOutboundDigitalruleset

> DigitalRuleSet getOutboundDigitalruleset(digitalRuleSetId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DigitalRuleSet**


## getOutboundDigitalrulesets

> DigitalRuleSetEntityListing getOutboundDigitalrulesets(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DigitalRuleSetEntityListing**


## getOutboundDnclist

> DncList getOutboundDnclist(dncListId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DncList**


## getOutboundDnclistExport

> ExportUri getOutboundDnclistExport(dncListId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ExportUri**


## getOutboundDnclistImportstatus

> ImportStatus getOutboundDnclistImportstatus(dncListId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ImportStatus**


## getOutboundDnclists

> DncListEntityListing getOutboundDnclists(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DncListEntityListing**


## getOutboundDnclistsDivisionview

> DncListDivisionView getOutboundDnclistsDivisionview(dncListId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DncListDivisionView**


## getOutboundDnclistsDivisionviews

> DncListDivisionViewListing getOutboundDnclistsDivisionviews(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DncListDivisionViewListing**


## getOutboundEvent

> EventLog getOutboundEvent(eventId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**EventLog**


## getOutboundEvents

> DialerEventEntityListing getOutboundEvents(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DialerEventEntityListing**


## getOutboundFilespecificationtemplate

> FileSpecificationTemplate getOutboundFilespecificationtemplate(fileSpecificationTemplateId)


GET /api/v2/outbound/filespecificationtemplates/{fileSpecificationTemplateId}

Get File Specification Template

Requires ANY permissions:

* outbound:fileSpecificationTemplate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let fileSpecificationTemplateId = "fileSpecificationTemplateId_example"; // String | File Specification Template ID

apiInstance.getOutboundFilespecificationtemplate(fileSpecificationTemplateId)
  .then((data) => {
    console.log(`getOutboundFilespecificationtemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundFilespecificationtemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **fileSpecificationTemplateId** | **String** | File Specification Template ID |  |

### Return type

**FileSpecificationTemplate**


## getOutboundFilespecificationtemplates

> FileSpecificationTemplateEntityListing getOutboundFilespecificationtemplates(opts)


GET /api/v2/outbound/filespecificationtemplates

Query File Specification Templates

Requires ANY permissions:

* outbound:fileSpecificationTemplate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

apiInstance.getOutboundFilespecificationtemplates(opts)
  .then((data) => {
    console.log(`getOutboundFilespecificationtemplates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundFilespecificationtemplates');
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

### Return type

**FileSpecificationTemplateEntityListing**


## getOutboundImporttemplate

> ImportTemplate getOutboundImporttemplate(importTemplateId, opts)


GET /api/v2/outbound/importtemplates/{importTemplateId}

Get Import Template

Requires ANY permissions:

* outbound:importTemplate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let importTemplateId = "importTemplateId_example"; // String | Import Template ID
let opts = { 
  'includeImportStatus': false // Boolean | Import status
};

apiInstance.getOutboundImporttemplate(importTemplateId, opts)
  .then((data) => {
    console.log(`getOutboundImporttemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundImporttemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **importTemplateId** | **String** | Import Template ID |  |
 **includeImportStatus** | **Boolean** | Import status | [optional] [default to false] |

### Return type

**ImportTemplate**


## getOutboundImporttemplateImportstatus

> ImportStatus getOutboundImporttemplateImportstatus(importTemplateId, opts)


GET /api/v2/outbound/importtemplates/{importTemplateId}/importstatus

Get the import status for an import template.

Requires ANY permissions:

* outbound:importTemplate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let importTemplateId = "importTemplateId_example"; // String | importTemplateId
let opts = { 
  'listNamePrefix': "listNamePrefix_example" // String | listNamePrefix
};

apiInstance.getOutboundImporttemplateImportstatus(importTemplateId, opts)
  .then((data) => {
    console.log(`getOutboundImporttemplateImportstatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundImporttemplateImportstatus');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **importTemplateId** | **String** | importTemplateId |  |
 **listNamePrefix** | **String** | listNamePrefix | [optional]  |

### Return type

**ImportStatus**


## getOutboundImporttemplates

> ImportTemplateEntityListing getOutboundImporttemplates(opts)


GET /api/v2/outbound/importtemplates

Query Import Templates

Requires ANY permissions:

* outbound:importTemplate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let opts = { 
  'includeImportStatus': false, // Boolean | Import status
  'pageSize': 25, // Number | Page size. The max that will be returned is 100.
  'pageNumber': 1, // Number | Page number
  'allowEmptyResult': false, // Boolean | Whether to return an empty page when there are no results for that page
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a", // String | Sort order
  'contactListTemplateId': "contactListTemplateId_example" // String | Contact List Template ID
};

apiInstance.getOutboundImporttemplates(opts)
  .then((data) => {
    console.log(`getOutboundImporttemplates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundImporttemplates');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **includeImportStatus** | **Boolean** | Import status | [optional] [default to false] |
 **pageSize** | **Number** | Page size. The max that will be returned is 100. | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **allowEmptyResult** | **Boolean** | Whether to return an empty page when there are no results for that page | [optional] [default to false] |
 **filterType** | **String** | Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String** | Name | [optional]  |
 **sortBy** | **String** | Sort by | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
 **contactListTemplateId** | **String** | Contact List Template ID | [optional]  |

### Return type

**ImportTemplateEntityListing**


## getOutboundMessagingcampaign

> MessagingCampaign getOutboundMessagingcampaign(messagingCampaignId)


GET /api/v2/outbound/messagingcampaigns/{messagingCampaignId}

Get an Outbound Messaging Campaign

Requires ANY permissions:

* outbound:messagingCampaign:view
* outbound:emailCampaign:view
* outbound:whatsAppCampaign:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**MessagingCampaign**


## getOutboundMessagingcampaignDiagnostics

> MessagingCampaignDiagnostics getOutboundMessagingcampaignDiagnostics(messagingCampaignId)


GET /api/v2/outbound/messagingcampaigns/{messagingCampaignId}/diagnostics

Get messaging campaign diagnostics

Requires ANY permissions:

* outbound:messagingCampaign:view
* outbound:emailCampaign:view
* outbound:whatsAppCampaign:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**MessagingCampaignDiagnostics**


## getOutboundMessagingcampaignProgress

> CampaignProgress getOutboundMessagingcampaignProgress(messagingCampaignId)


GET /api/v2/outbound/messagingcampaigns/{messagingCampaignId}/progress

Get messaging campaign's progress

Requires ANY permissions:

* outbound:messagingCampaign:view
* outbound:emailCampaign:view
* outbound:whatsAppCampaign:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CampaignProgress**


## getOutboundMessagingcampaigns

> MessagingCampaignEntityListing getOutboundMessagingcampaigns(opts)


GET /api/v2/outbound/messagingcampaigns

Query a list of Messaging Campaigns

Requires ANY permissions:

* outbound:messagingCampaign:view
* outbound:emailCampaign:view
* outbound:whatsAppCampaign:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
  'id': ["id_example"], // [String] | A list of messaging campaign ids to bulk fetch
  'contentTemplateId': "contentTemplateId_example", // String | Content template ID
  'campaignStatus': "campaignStatus_example" // String | Campaign Status
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
 **type** | **String** | Campaign Type | [optional] <br />**Values**: EMAIL, SMS, WHATSAPP |
 **senderSmsPhoneNumber** | **String** | Sender SMS Phone Number | [optional]  |
 **id** | **[String]** | A list of messaging campaign ids to bulk fetch | [optional]  |
 **contentTemplateId** | **String** | Content template ID | [optional]  |
 **campaignStatus** | **String** | Campaign Status | [optional] <br />**Values**: on, stopping, off, complete, invalid, forced_off, forced_stopping |

### Return type

**MessagingCampaignEntityListing**


## getOutboundMessagingcampaignsDivisionview

> MessagingCampaignDivisionView getOutboundMessagingcampaignsDivisionview(messagingCampaignId)


GET /api/v2/outbound/messagingcampaigns/divisionviews/{messagingCampaignId}

Get a basic Messaging Campaign information object

This returns a simplified version of a Messaging Campaign, consisting of id, name, and division.

Requires ANY permissions:

* outbound:messagingCampaign:search
* outbound:emailCampaign:search
* outbound:whatsAppCampaign:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**MessagingCampaignDivisionView**


## getOutboundMessagingcampaignsDivisionviews

> MessagingCampaignDivisionViewEntityListing getOutboundMessagingcampaignsDivisionviews(opts)


GET /api/v2/outbound/messagingcampaigns/divisionviews

Query a list of basic Messaging Campaign information objects

This returns a listing of simplified Messaging Campaigns, each consisting of id, name, and division.

Requires ANY permissions:

* outbound:messagingCampaign:search
* outbound:emailCampaign:search
* outbound:whatsAppCampaign:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let opts = { 
  'pageSize': 25, // Number | Page size. The max that will be returned is 100.
  'pageNumber': 1, // Number | Page number
  'sortOrder': "a", // String | The direction to sort
  'name': "name_example", // String | Name
  'type': "type_example", // String | Campaign Type
  'id': ["id_example"], // [String] | id
  'senderSmsPhoneNumber': "senderSmsPhoneNumber_example", // String | Sender SMS Phone Number
  'contentTemplateId': "contentTemplateId_example", // String | Content template ID
  'campaignStatus': "campaignStatus_example" // String | Campaign Status
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
 **type** | **String** | Campaign Type | [optional] <br />**Values**: EMAIL, SMS, WHATSAPP |
 **id** | **[String]** | id | [optional]  |
 **senderSmsPhoneNumber** | **String** | Sender SMS Phone Number | [optional]  |
 **contentTemplateId** | **String** | Content template ID | [optional]  |
 **campaignStatus** | **String** | Campaign Status | [optional] <br />**Values**: on, stopping, off, complete, invalid, forced_off, forced_stopping |

### Return type

**MessagingCampaignDivisionViewEntityListing**


## getOutboundRuleset

> RuleSet getOutboundRuleset(ruleSetId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**RuleSet**


## getOutboundRulesets

> RuleSetEntityListing getOutboundRulesets(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**RuleSetEntityListing**


## getOutboundSchedulesCampaign

> CampaignSchedule getOutboundSchedulesCampaign(campaignId)


GET /api/v2/outbound/schedules/campaigns/{campaignId}

Get a dialer campaign schedule.

Requires ANY permissions:

* outbound:schedule:view
* outbound:campaign:viewSchedule

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CampaignSchedule**


## getOutboundSchedulesCampaigns

> [CampaignSchedule] getOutboundSchedulesCampaigns()


GET /api/v2/outbound/schedules/campaigns

Query for a list of dialer campaign schedules.

Requires ANY permissions:

* outbound:schedule:view
* outbound:campaign:viewSchedule

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getOutboundSchedulesEmailcampaign

> EmailCampaignSchedule getOutboundSchedulesEmailcampaign(emailCampaignId)


GET /api/v2/outbound/schedules/emailcampaigns/{emailCampaignId}

Get an email campaign schedule.

Requires ANY permissions:

* outbound:emailCampaignSchedule:view
* outbound:emailCampaign:viewSchedule

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**EmailCampaignSchedule**


## getOutboundSchedulesEmailcampaigns

> EmailCampaignScheduleEntityListing getOutboundSchedulesEmailcampaigns()


GET /api/v2/outbound/schedules/emailcampaigns

Query for a list of email campaign schedules.

Requires ANY permissions:

* outbound:emailCampaignSchedule:view
* outbound:emailCampaign:viewSchedule

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

**EmailCampaignScheduleEntityListing**


## getOutboundSchedulesMessagingcampaign

> MessagingCampaignSchedule getOutboundSchedulesMessagingcampaign(messagingCampaignId)


GET /api/v2/outbound/schedules/messagingcampaigns/{messagingCampaignId}

Get a messaging campaign schedule.

Requires ANY permissions:

* outbound:messagingCampaignSchedule:view
* outbound:messagingCampaign:viewSchedule

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**MessagingCampaignSchedule**


## getOutboundSchedulesMessagingcampaigns

> MessagingCampaignScheduleEntityListing getOutboundSchedulesMessagingcampaigns()


GET /api/v2/outbound/schedules/messagingcampaigns

Query for a list of messaging campaign schedules.

Requires ANY permissions:

* outbound:messagingCampaignSchedule:view
* outbound:messagingCampaign:viewSchedule

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getOutboundSchedulesSequence

> SequenceSchedule getOutboundSchedulesSequence(sequenceId)


GET /api/v2/outbound/schedules/sequences/{sequenceId}

Get a dialer sequence schedule.

Requires ANY permissions:

* outbound:schedule:view
* outbound:campaignSequenceSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SequenceSchedule**


## getOutboundSchedulesSequences

> [SequenceSchedule] getOutboundSchedulesSequences()


GET /api/v2/outbound/schedules/sequences

Query for a list of dialer sequence schedules.

Requires ANY permissions:

* outbound:schedule:view
* outbound:campaignSequenceSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getOutboundSchedulesWhatsappcampaign

> WhatsAppCampaignSchedule getOutboundSchedulesWhatsappcampaign(whatsAppCampaignId)


GET /api/v2/outbound/schedules/whatsappcampaigns/{whatsAppCampaignId}

Get a WhatsApp campaign schedule.

Requires ANY permissions:

* outbound:whatsAppCampaignSchedule:view
* outbound:whatsAppCampaign:viewSchedule

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let whatsAppCampaignId = "whatsAppCampaignId_example"; // String | WhatsApp Campaign ID

apiInstance.getOutboundSchedulesWhatsappcampaign(whatsAppCampaignId)
  .then((data) => {
    console.log(`getOutboundSchedulesWhatsappcampaign success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundSchedulesWhatsappcampaign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **whatsAppCampaignId** | **String** | WhatsApp Campaign ID |  |

### Return type

**WhatsAppCampaignSchedule**


## getOutboundSchedulesWhatsappcampaigns

> WhatsAppCampaignScheduleEntityListing getOutboundSchedulesWhatsappcampaigns()


GET /api/v2/outbound/schedules/whatsappcampaigns

Query for a list of WhatsApp campaign schedules.

Requires ANY permissions:

* outbound:whatsAppCampaignSchedule:view
* outbound:whatsAppCampaign:viewSchedule

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

apiInstance.getOutboundSchedulesWhatsappcampaigns()
  .then((data) => {
    console.log(`getOutboundSchedulesWhatsappcampaigns success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOutboundSchedulesWhatsappcampaigns');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**WhatsAppCampaignScheduleEntityListing**


## getOutboundSequence

> CampaignSequence getOutboundSequence(sequenceId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CampaignSequence**


## getOutboundSequences

> CampaignSequenceEntityListing getOutboundSequences(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CampaignSequenceEntityListing**


## getOutboundSettings

> OutboundSettings getOutboundSettings()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getOutboundWrapupcodemappings

> WrapUpCodeMapping getOutboundWrapupcodemappings()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## patchOutboundCampaign

> void patchOutboundCampaign(campaignId, body)


PATCH /api/v2/outbound/campaigns/{campaignId}

Update a campaign.

Requires ALL permissions:

* outbound:campaign:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID
let body = {}; // Object | CampaignPatchRequest

apiInstance.patchOutboundCampaign(campaignId, body)
  .then(() => {
    console.log('patchOutboundCampaign returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchOutboundCampaign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String** | Campaign ID |  |
 **body** | **Object** | CampaignPatchRequest |  |

### Return type

void (no response body)


## patchOutboundDnclistCustomexclusioncolumns

> void patchOutboundDnclistCustomexclusioncolumns(dncListId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## patchOutboundDnclistEmailaddresses

> void patchOutboundDnclistEmailaddresses(dncListId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## patchOutboundDnclistPhonenumbers

> void patchOutboundDnclistPhonenumbers(dncListId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## patchOutboundDnclistWhatsappnumbers

> void patchOutboundDnclistWhatsappnumbers(dncListId, body)


PATCH /api/v2/outbound/dnclists/{dncListId}/whatsappnumbers

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let dncListId = "dncListId_example"; // String | DncList ID
let body = {}; // Object | DNC whatsApp numbers

apiInstance.patchOutboundDnclistWhatsappnumbers(dncListId, body)
  .then(() => {
    console.log('patchOutboundDnclistWhatsappnumbers returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchOutboundDnclistWhatsappnumbers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String** | DncList ID |  |
 **body** | **Object** | DNC whatsApp numbers |  |

### Return type

void (no response body)


## patchOutboundSettings

> void patchOutboundSettings(body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | outboundSettings
let opts = { 
  'useMaxCallsPerAgentDecimal': true // Boolean | Use maxCallsPerAgent with decimal precision
};

apiInstance.patchOutboundSettings(body, opts)
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
 **useMaxCallsPerAgentDecimal** | **Boolean** | Use maxCallsPerAgent with decimal precision | [optional] <br />**Values**: true, false |

### Return type

void (no response body)


## postOutboundAttemptlimits

> AttemptLimits postOutboundAttemptlimits(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AttemptLimits**


## postOutboundCallabletimesets

> CallableTimeSet postOutboundCallabletimesets(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CallableTimeSet**


## postOutboundCallanalysisresponsesets

> ResponseSet postOutboundCallanalysisresponsesets(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ResponseSet**


## postOutboundCampaignAgentownedmappingpreview

> **Object** postOutboundCampaignAgentownedmappingpreview(campaignId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Object**


## postOutboundCampaignCallbackSchedule

> ContactCallbackRequest postOutboundCampaignCallbackSchedule(campaignId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ContactCallbackRequest**


## postOutboundCampaignStart

> void postOutboundCampaignStart(campaignId)


POST /api/v2/outbound/campaigns/{campaignId}/start

Start the campaign

Requires ANY permissions:

* outbound:campaign:start

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.postOutboundCampaignStart(campaignId)
  .then(() => {
    console.log('postOutboundCampaignStart returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundCampaignStart');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String** | Campaign ID |  |

### Return type

void (no response body)


## postOutboundCampaignStop

> void postOutboundCampaignStop(campaignId)


POST /api/v2/outbound/campaigns/{campaignId}/stop

Stop the campaign

Requires ANY permissions:

* outbound:campaign:stop

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.postOutboundCampaignStop(campaignId)
  .then(() => {
    console.log('postOutboundCampaignStop returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundCampaignStop');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String** | Campaign ID |  |

### Return type

void (no response body)


## postOutboundCampaignrules

> CampaignRule postOutboundCampaignrules(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CampaignRule**


## postOutboundCampaigns

> Campaign postOutboundCampaigns(body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | Campaign
let opts = { 
  'useMaxCallsPerAgentDecimal': true // Boolean | Use maxCallsPerAgent with decimal precision
};

apiInstance.postOutboundCampaigns(body, opts)
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
 **useMaxCallsPerAgentDecimal** | **Boolean** | Use maxCallsPerAgent with decimal precision | [optional] <br />**Values**: true, false |

### Return type

**Campaign**


## postOutboundCampaignsProgress

> [CampaignProgress] postOutboundCampaignsProgress(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**[CampaignProgress]**


## postOutboundContactlistClear

> void postOutboundContactlistClear(contactListId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## postOutboundContactlistContacts

> [DialerContact] postOutboundContactlistContacts(contactListId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**[DialerContact]**


## postOutboundContactlistContactsBulk

> [DialerContact] postOutboundContactlistContactsBulk(contactListId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**[DialerContact]**


## postOutboundContactlistContactsBulkRemove

> ContactsBulkOperationJob postOutboundContactlistContactsBulkRemove(contactListId, body)


POST /api/v2/outbound/contactlists/{contactListId}/contacts/bulk/remove

Start an async job to delete contacts using a filter.

Requires ANY permissions:

* outbound:contact:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListId = "contactListId_example"; // String | Contact List ID
let body = {}; // Object | Contact filter information.

apiInstance.postOutboundContactlistContactsBulkRemove(contactListId, body)
  .then((data) => {
    console.log(`postOutboundContactlistContactsBulkRemove success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundContactlistContactsBulkRemove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String** | Contact List ID |  |
 **body** | **Object** | Contact filter information. |  |

### Return type

**ContactsBulkOperationJob**


## postOutboundContactlistContactsBulkUpdate

> ContactsBulkOperationJob postOutboundContactlistContactsBulkUpdate(contactListId, body)


POST /api/v2/outbound/contactlists/{contactListId}/contacts/bulk/update

Start an async job to bulk edit contacts.

Requires ANY permissions:

* outbound:contact:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListId = "contactListId_example"; // String | Contact List ID
let body = {}; // Object | Contact bulk edit request information.

apiInstance.postOutboundContactlistContactsBulkUpdate(contactListId, body)
  .then((data) => {
    console.log(`postOutboundContactlistContactsBulkUpdate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundContactlistContactsBulkUpdate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String** | Contact List ID |  |
 **body** | **Object** | Contact bulk edit request information. |  |

### Return type

**ContactsBulkOperationJob**


## postOutboundContactlistContactsSearch

> ContactListingResponse postOutboundContactlistContactsSearch(contactListId, body)


POST /api/v2/outbound/contactlists/{contactListId}/contacts/search

Query contacts from a contact list.

Requires ANY permissions:

* outbound:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListId = "contactListId_example"; // String | Contact List ID
let body = {}; // Object | Contact search parameters.

apiInstance.postOutboundContactlistContactsSearch(contactListId, body)
  .then((data) => {
    console.log(`postOutboundContactlistContactsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundContactlistContactsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String** | Contact List ID |  |
 **body** | **Object** | Contact search parameters. |  |

### Return type

**ContactListingResponse**


## postOutboundContactlistExport

> DomainEntityRef postOutboundContactlistExport(contactListId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListId = "contactListId_example"; // String | ContactList ID
let opts = { 
  'body': {} // Object | Export information to get
};

apiInstance.postOutboundContactlistExport(contactListId, opts)
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
 **body** | **Object** | Export information to get | [optional]  |

### Return type

**DomainEntityRef**


## postOutboundContactlistfilters

> ContactListFilter postOutboundContactlistfilters(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ContactListFilter**


## postOutboundContactlistfiltersBulkRetrieve

> ContactListFilterEntityListing postOutboundContactlistfiltersBulkRetrieve(body)


POST /api/v2/outbound/contactlistfilters/bulk/retrieve

Retrieve multiple contact list filters

Requires ANY permissions:

* outbound:contactListFilter:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | The contact list filters to retrieve

apiInstance.postOutboundContactlistfiltersBulkRetrieve(body)
  .then((data) => {
    console.log(`postOutboundContactlistfiltersBulkRetrieve success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundContactlistfiltersBulkRetrieve');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The contact list filters to retrieve |  |

### Return type

**ContactListFilterEntityListing**


## postOutboundContactlistfiltersPreview

> FilterPreviewResponse postOutboundContactlistfiltersPreview(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**FilterPreviewResponse**


## postOutboundContactlists

> ContactList postOutboundContactlists(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ContactList**


## postOutboundContactlisttemplates

> ContactListTemplate postOutboundContactlisttemplates(body)


POST /api/v2/outbound/contactlisttemplates

Create Contact List Template

Requires ANY permissions:

* outbound:contactListTemplate:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | ContactListTemplate

apiInstance.postOutboundContactlisttemplates(body)
  .then((data) => {
    console.log(`postOutboundContactlisttemplates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundContactlisttemplates');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ContactListTemplate |  |

### Return type

**ContactListTemplate**


## postOutboundContactlisttemplatesBulkAdd

> ContactListTemplateEntityListing postOutboundContactlisttemplatesBulkAdd(body)


POST /api/v2/outbound/contactlisttemplates/bulk/add

Add multiple contact list templates

Requires ANY permissions:

* outbound:contactListTemplate:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = [{}]; // Object | contact list template(s) to add

apiInstance.postOutboundContactlisttemplatesBulkAdd(body)
  .then((data) => {
    console.log(`postOutboundContactlisttemplatesBulkAdd success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundContactlisttemplatesBulkAdd');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | contact list template(s) to add |  |

### Return type

**ContactListTemplateEntityListing**


## postOutboundContactlisttemplatesBulkRetrieve

> ContactListTemplateEntityListing postOutboundContactlisttemplatesBulkRetrieve(body)


POST /api/v2/outbound/contactlisttemplates/bulk/retrieve

Get multiple contact list templates

Requires ANY permissions:

* outbound:contactListTemplate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | contact list templates to get

apiInstance.postOutboundContactlisttemplatesBulkRetrieve(body)
  .then((data) => {
    console.log(`postOutboundContactlisttemplatesBulkRetrieve success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundContactlisttemplatesBulkRetrieve');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | contact list templates to get |  |

### Return type

**ContactListTemplateEntityListing**


## postOutboundConversationDnc

> void postOutboundConversationDnc(conversationId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## postOutboundDigitalrulesets

> DigitalRuleSet postOutboundDigitalrulesets(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DigitalRuleSet**


## postOutboundDnclistEmailaddresses

> void postOutboundDnclistEmailaddresses(dncListId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## postOutboundDnclistExport

> DomainEntityRef postOutboundDnclistExport(dncListId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DomainEntityRef**


## postOutboundDnclistPhonenumbers

> void postOutboundDnclistPhonenumbers(dncListId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## postOutboundDnclists

> DncList postOutboundDnclists(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DncList**


## postOutboundFilespecificationtemplates

> FileSpecificationTemplate postOutboundFilespecificationtemplates(body)


POST /api/v2/outbound/filespecificationtemplates

Create File Specification Template

Requires ANY permissions:

* outbound:fileSpecificationTemplate:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | FileSpecificationTemplate

apiInstance.postOutboundFilespecificationtemplates(body)
  .then((data) => {
    console.log(`postOutboundFilespecificationtemplates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundFilespecificationtemplates');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | FileSpecificationTemplate |  |

### Return type

**FileSpecificationTemplate**


## postOutboundImporttemplates

> ImportTemplate postOutboundImporttemplates(body)


POST /api/v2/outbound/importtemplates

Create Import Template

Requires ANY permissions:

* outbound:importTemplate:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = {}; // Object | ImportTemplate

apiInstance.postOutboundImporttemplates(body)
  .then((data) => {
    console.log(`postOutboundImporttemplates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundImporttemplates');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ImportTemplate |  |

### Return type

**ImportTemplate**


## postOutboundImporttemplatesBulkAdd

> ImportTemplateEntityListing postOutboundImporttemplatesBulkAdd(body)


POST /api/v2/outbound/importtemplates/bulk/add

Add multiple import templates

Requires ANY permissions:

* outbound:importTemplate:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let body = [{}]; // Object | import template(s) to add

apiInstance.postOutboundImporttemplatesBulkAdd(body)
  .then((data) => {
    console.log(`postOutboundImporttemplatesBulkAdd success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundImporttemplatesBulkAdd');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | import template(s) to add |  |

### Return type

**ImportTemplateEntityListing**


## postOutboundMessagingcampaignStart

> void postOutboundMessagingcampaignStart(messagingCampaignId)


POST /api/v2/outbound/messagingcampaigns/{messagingCampaignId}/start

Start the campaign

Documented permissions are applicable based on campaign type.

Requires ANY permissions:

* outbound:messagingCampaign:start
* outbound:emailCampaign:start
* outbound:whatsAppCampaign:start

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let messagingCampaignId = "messagingCampaignId_example"; // String | The Messaging Campaign ID

apiInstance.postOutboundMessagingcampaignStart(messagingCampaignId)
  .then(() => {
    console.log('postOutboundMessagingcampaignStart returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundMessagingcampaignStart');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messagingCampaignId** | **String** | The Messaging Campaign ID |  |

### Return type

void (no response body)


## postOutboundMessagingcampaignStop

> void postOutboundMessagingcampaignStop(messagingCampaignId)


POST /api/v2/outbound/messagingcampaigns/{messagingCampaignId}/stop

Stop the campaign

Documented permissions are applicable based on campaign type.

Requires ANY permissions:

* outbound:messagingCampaign:stop
* outbound:emailCampaign:stop
* outbound:whatsAppCampaign:stop

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let messagingCampaignId = "messagingCampaignId_example"; // String | The Messaging Campaign ID

apiInstance.postOutboundMessagingcampaignStop(messagingCampaignId)
  .then(() => {
    console.log('postOutboundMessagingcampaignStop returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postOutboundMessagingcampaignStop');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messagingCampaignId** | **String** | The Messaging Campaign ID |  |

### Return type

void (no response body)


## postOutboundMessagingcampaigns

> MessagingCampaign postOutboundMessagingcampaigns(body)


POST /api/v2/outbound/messagingcampaigns

Create a Messaging Campaign

Requires ANY permissions:

* outbound:messagingCampaign:add
* outbound:emailCampaign:add
* outbound:whatsAppCampaign:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**MessagingCampaign**


## postOutboundMessagingcampaignsProgress

> [CampaignProgress] postOutboundMessagingcampaignsProgress(body)


POST /api/v2/outbound/messagingcampaigns/progress

Get progress for a list of messaging campaigns

Requires ANY permissions:

* outbound:messagingCampaign:view
* outbound:emailCampaign:view
* outbound:whatsAppCampaign:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**[CampaignProgress]**


## postOutboundRulesets

> RuleSet postOutboundRulesets(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**RuleSet**


## postOutboundSequences

> CampaignSequence postOutboundSequences(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CampaignSequence**


## putOutboundAttemptlimit

> AttemptLimits putOutboundAttemptlimit(attemptLimitsId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AttemptLimits**


## putOutboundCallabletimeset

> CallableTimeSet putOutboundCallabletimeset(callableTimeSetId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CallableTimeSet**


## putOutboundCallanalysisresponseset

> ResponseSet putOutboundCallanalysisresponseset(callAnalysisSetId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ResponseSet**


## putOutboundCampaign

> Campaign putOutboundCampaign(campaignId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let campaignId = "campaignId_example"; // String | Campaign ID
let body = {}; // Object | Campaign
let opts = { 
  'useMaxCallsPerAgentDecimal': true // Boolean | Use maxCallsPerAgent with decimal precision
};

apiInstance.putOutboundCampaign(campaignId, body, opts)
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
 **useMaxCallsPerAgentDecimal** | **Boolean** | Use maxCallsPerAgent with decimal precision | [optional] <br />**Values**: true, false |

### Return type

**Campaign**


## putOutboundCampaignAgent

> **&#39;String&#39;** putOutboundCampaignAgent(campaignId, userId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**&#39;String&#39;**


## putOutboundCampaignrule

> CampaignRule putOutboundCampaignrule(campaignRuleId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CampaignRule**


## putOutboundContactlist

> ContactList putOutboundContactlist(contactListId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ContactList**


## putOutboundContactlistContact

> DialerContact putOutboundContactlistContact(contactListId, contactId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DialerContact**


## putOutboundContactlistfilter

> ContactListFilter putOutboundContactlistfilter(contactListFilterId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ContactListFilter**


## putOutboundContactlisttemplate

> ContactListTemplate putOutboundContactlisttemplate(contactListTemplateId, body)


PUT /api/v2/outbound/contactlisttemplates/{contactListTemplateId}

Update a contact list template.

Requires ANY permissions:

* outbound:contactListTemplate:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let contactListTemplateId = "contactListTemplateId_example"; // String | ContactListTemplate ID
let body = {}; // Object | ContactListTemplate

apiInstance.putOutboundContactlisttemplate(contactListTemplateId, body)
  .then((data) => {
    console.log(`putOutboundContactlisttemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundContactlisttemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListTemplateId** | **String** | ContactListTemplate ID |  |
 **body** | **Object** | ContactListTemplate |  |

### Return type

**ContactListTemplate**


## putOutboundDigitalruleset

> DigitalRuleSet putOutboundDigitalruleset(digitalRuleSetId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DigitalRuleSet**


## putOutboundDnclist

> DncList putOutboundDnclist(dncListId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DncList**


## putOutboundFilespecificationtemplate

> FileSpecificationTemplate putOutboundFilespecificationtemplate(fileSpecificationTemplateId, body)


PUT /api/v2/outbound/filespecificationtemplates/{fileSpecificationTemplateId}

Update File Specification Template

Requires ANY permissions:

* outbound:fileSpecificationTemplate:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let fileSpecificationTemplateId = "fileSpecificationTemplateId_example"; // String | File Specification Template ID
let body = {}; // Object | fileSpecificationTemplate

apiInstance.putOutboundFilespecificationtemplate(fileSpecificationTemplateId, body)
  .then((data) => {
    console.log(`putOutboundFilespecificationtemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundFilespecificationtemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **fileSpecificationTemplateId** | **String** | File Specification Template ID |  |
 **body** | **Object** | fileSpecificationTemplate |  |

### Return type

**FileSpecificationTemplate**


## putOutboundImporttemplate

> ImportTemplate putOutboundImporttemplate(importTemplateId, body)


PUT /api/v2/outbound/importtemplates/{importTemplateId}

Update Import Template

Requires ANY permissions:

* outbound:importTemplate:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let importTemplateId = "importTemplateId_example"; // String | Import Template ID
let body = {}; // Object | importTemplate

apiInstance.putOutboundImporttemplate(importTemplateId, body)
  .then((data) => {
    console.log(`putOutboundImporttemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundImporttemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **importTemplateId** | **String** | Import Template ID |  |
 **body** | **Object** | importTemplate |  |

### Return type

**ImportTemplate**


## putOutboundMessagingcampaign

> MessagingCampaign putOutboundMessagingcampaign(messagingCampaignId, body)


PUT /api/v2/outbound/messagingcampaigns/{messagingCampaignId}

Update an Outbound Messaging Campaign

Requires ANY permissions:

* outbound:messagingCampaign:edit
* outbound:emailCampaign:edit
* outbound:whatsAppCampaign:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**MessagingCampaign**


## putOutboundRuleset

> RuleSet putOutboundRuleset(ruleSetId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**RuleSet**


## putOutboundSchedulesCampaign

> CampaignSchedule putOutboundSchedulesCampaign(campaignId, body)


PUT /api/v2/outbound/schedules/campaigns/{campaignId}

Update a new campaign schedule.

Requires ANY permissions:

* outbound:schedule:edit
* outbound:campaign:editSchedule

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CampaignSchedule**


## putOutboundSchedulesEmailcampaign

> EmailCampaignSchedule putOutboundSchedulesEmailcampaign(emailCampaignId, body)


PUT /api/v2/outbound/schedules/emailcampaigns/{emailCampaignId}

Update an email campaign schedule.

Requires ANY permissions:

* outbound:emailCampaignSchedule:edit
* outbound:emailCampaign:editSchedule

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**EmailCampaignSchedule**


## putOutboundSchedulesMessagingcampaign

> MessagingCampaignSchedule putOutboundSchedulesMessagingcampaign(messagingCampaignId, body)


PUT /api/v2/outbound/schedules/messagingcampaigns/{messagingCampaignId}

Update a new messaging campaign schedule.

Requires ANY permissions:

* outbound:messagingCampaignSchedule:edit
* outbound:messagingCampaign:editSchedule

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**MessagingCampaignSchedule**


## putOutboundSchedulesSequence

> SequenceSchedule putOutboundSchedulesSequence(sequenceId, body)


PUT /api/v2/outbound/schedules/sequences/{sequenceId}

Update a new sequence schedule.

Requires ANY permissions:

* outbound:schedule:edit
* outbound:campaignSequenceSchedule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SequenceSchedule**


## putOutboundSchedulesWhatsappcampaign

> WhatsAppCampaignSchedule putOutboundSchedulesWhatsappcampaign(whatsAppCampaignId, body)


PUT /api/v2/outbound/schedules/whatsappcampaigns/{whatsAppCampaignId}

Update a WhatsApp campaign schedule.

Requires ANY permissions:

* outbound:whatsAppCampaignSchedule:edit
* outbound:whatsAppCampaign:editSchedule

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OutboundApi();

let whatsAppCampaignId = "whatsAppCampaignId_example"; // String | WhatsApp Campaign ID
let body = {}; // Object | WhatsAppCampaignSchedule

apiInstance.putOutboundSchedulesWhatsappcampaign(whatsAppCampaignId, body)
  .then((data) => {
    console.log(`putOutboundSchedulesWhatsappcampaign success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOutboundSchedulesWhatsappcampaign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **whatsAppCampaignId** | **String** | WhatsApp Campaign ID |  |
 **body** | **Object** | WhatsAppCampaignSchedule |  |

### Return type

**WhatsAppCampaignSchedule**


## putOutboundSequence

> CampaignSequence putOutboundSequence(sequenceId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CampaignSequence**


## putOutboundWrapupcodemappings

> WrapUpCodeMapping putOutboundWrapupcodemappings(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WrapUpCodeMapping**


_purecloud-platform-client-v2@229.1.0_
