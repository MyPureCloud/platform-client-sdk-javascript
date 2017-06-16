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
[**deleteOutboundDnclist**](OutboundApi.html#deleteOutboundDnclist) | **DELETE** /api/v2/outbound/dnclists/{dncListId} | Delete dialer DNC list
[**deleteOutboundRuleset**](OutboundApi.html#deleteOutboundRuleset) | **DELETE** /api/v2/outbound/rulesets/{ruleSetId} | Delete a Rule set.
[**deleteOutboundSchedulesCampaign**](OutboundApi.html#deleteOutboundSchedulesCampaign) | **DELETE** /api/v2/outbound/schedules/campaigns/{campaignId} | Delete a dialer campaign schedule.
[**deleteOutboundSchedulesSequence**](OutboundApi.html#deleteOutboundSchedulesSequence) | **DELETE** /api/v2/outbound/schedules/sequences/{sequenceId} | Delete a dialer sequence schedule.
[**deleteOutboundSequence**](OutboundApi.html#deleteOutboundSequence) | **DELETE** /api/v2/outbound/sequences/{sequenceId} | Delete a dialer campaign sequence.
[**getOutboundAttemptlimit**](OutboundApi.html#getOutboundAttemptlimit) | **GET** /api/v2/outbound/attemptlimits/{attemptLimitsId} | Get attempt limits
[**getOutboundAttemptlimits**](OutboundApi.html#getOutboundAttemptlimits) | **GET** /api/v2/outbound/attemptlimits | Query attempt limits list
[**getOutboundCallabletimeset**](OutboundApi.html#getOutboundCallabletimeset) | **GET** /api/v2/outbound/callabletimesets/{callableTimeSetId} | Get callable time set
[**getOutboundCallabletimesets**](OutboundApi.html#getOutboundCallabletimesets) | **GET** /api/v2/outbound/callabletimesets | Query callable time set list
[**getOutboundCallanalysisresponseset**](OutboundApi.html#getOutboundCallanalysisresponseset) | **GET** /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId} | Get a dialer call analysis response set.
[**getOutboundCallanalysisresponsesets**](OutboundApi.html#getOutboundCallanalysisresponsesets) | **GET** /api/v2/outbound/callanalysisresponsesets | Query a list of dialer call analysis response sets.
[**getOutboundCampaign**](OutboundApi.html#getOutboundCampaign) | **GET** /api/v2/outbound/campaigns/{campaignId} | Get dialer campaign.
[**getOutboundCampaignDiagnostics**](OutboundApi.html#getOutboundCampaignDiagnostics) | **GET** /api/v2/outbound/campaigns/{campaignId}/diagnostics | Get campaign diagnostics
[**getOutboundCampaignInteractions**](OutboundApi.html#getOutboundCampaignInteractions) | **GET** /api/v2/outbound/campaigns/{campaignId}/interactions | Get dialer campaign interactions.
[**getOutboundCampaignProgress**](OutboundApi.html#getOutboundCampaignProgress) | **GET** /api/v2/outbound/campaigns/{campaignId}/progress | Get campaign progress
[**getOutboundCampaignStats**](OutboundApi.html#getOutboundCampaignStats) | **GET** /api/v2/outbound/campaigns/{campaignId}/stats | Get statistics about a Dialer Campaign
[**getOutboundCampaignrule**](OutboundApi.html#getOutboundCampaignrule) | **GET** /api/v2/outbound/campaignrules/{campaignRuleId} | Get Campaign Rule
[**getOutboundCampaignrules**](OutboundApi.html#getOutboundCampaignrules) | **GET** /api/v2/outbound/campaignrules | Query Campaign Rule list
[**getOutboundCampaigns**](OutboundApi.html#getOutboundCampaigns) | **GET** /api/v2/outbound/campaigns | Query a list of dialer campaigns.
[**getOutboundContactlist**](OutboundApi.html#getOutboundContactlist) | **GET** /api/v2/outbound/contactlists/{contactListId} | Get a dialer contact list.
[**getOutboundContactlistContact**](OutboundApi.html#getOutboundContactlistContact) | **GET** /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId} | Get a contact.
[**getOutboundContactlistExport**](OutboundApi.html#getOutboundContactlistExport) | **GET** /api/v2/outbound/contactlists/{contactListId}/export | Get the URI of a contact list export.
[**getOutboundContactlistImportstatus**](OutboundApi.html#getOutboundContactlistImportstatus) | **GET** /api/v2/outbound/contactlists/{contactListId}/importstatus | Get dialer contactList import status.
[**getOutboundContactlistfilter**](OutboundApi.html#getOutboundContactlistfilter) | **GET** /api/v2/outbound/contactlistfilters/{contactListFilterId} | Get Contact list filter
[**getOutboundContactlistfilters**](OutboundApi.html#getOutboundContactlistfilters) | **GET** /api/v2/outbound/contactlistfilters | Query Contact list filters
[**getOutboundContactlists**](OutboundApi.html#getOutboundContactlists) | **GET** /api/v2/outbound/contactlists | Query a list of contact lists.
[**getOutboundDnclist**](OutboundApi.html#getOutboundDnclist) | **GET** /api/v2/outbound/dnclists/{dncListId} | Get dialer DNC list
[**getOutboundDnclistExport**](OutboundApi.html#getOutboundDnclistExport) | **GET** /api/v2/outbound/dnclists/{dncListId}/export | Get the URI of a DNC list export.
[**getOutboundDnclistImportstatus**](OutboundApi.html#getOutboundDnclistImportstatus) | **GET** /api/v2/outbound/dnclists/{dncListId}/importstatus | Get dialer dncList import status.
[**getOutboundDnclists**](OutboundApi.html#getOutboundDnclists) | **GET** /api/v2/outbound/dnclists | Query dialer DNC lists
[**getOutboundEvent**](OutboundApi.html#getOutboundEvent) | **GET** /api/v2/outbound/events/{eventId} | Get Dialer Event
[**getOutboundEvents**](OutboundApi.html#getOutboundEvents) | **GET** /api/v2/outbound/events | Query Event Logs
[**getOutboundRuleset**](OutboundApi.html#getOutboundRuleset) | **GET** /api/v2/outbound/rulesets/{ruleSetId} | Get a Rule Set by ID.
[**getOutboundRulesets**](OutboundApi.html#getOutboundRulesets) | **GET** /api/v2/outbound/rulesets | Query a list of Rule Sets.
[**getOutboundSchedulesCampaign**](OutboundApi.html#getOutboundSchedulesCampaign) | **GET** /api/v2/outbound/schedules/campaigns/{campaignId} | Get a dialer campaign schedule.
[**getOutboundSchedulesCampaigns**](OutboundApi.html#getOutboundSchedulesCampaigns) | **GET** /api/v2/outbound/schedules/campaigns | Query for a list of dialer campaign schedules.
[**getOutboundSchedulesSequence**](OutboundApi.html#getOutboundSchedulesSequence) | **GET** /api/v2/outbound/schedules/sequences/{sequenceId} | Get a dialer sequence schedule.
[**getOutboundSchedulesSequences**](OutboundApi.html#getOutboundSchedulesSequences) | **GET** /api/v2/outbound/schedules/sequences | Query for a list of dialer sequence schedules.
[**getOutboundSequence**](OutboundApi.html#getOutboundSequence) | **GET** /api/v2/outbound/sequences/{sequenceId} | Get a dialer campaign sequence.
[**getOutboundSequences**](OutboundApi.html#getOutboundSequences) | **GET** /api/v2/outbound/sequences | Query a list of dialer campaign sequences.
[**getOutboundWrapupcodemappings**](OutboundApi.html#getOutboundWrapupcodemappings) | **GET** /api/v2/outbound/wrapupcodemappings | Get the Dialer wrap up code mapping.
[**postOutboundAttemptlimits**](OutboundApi.html#postOutboundAttemptlimits) | **POST** /api/v2/outbound/attemptlimits | Create attempt limits
[**postOutboundAudits**](OutboundApi.html#postOutboundAudits) | **POST** /api/v2/outbound/audits | Retrieves audits for dialer.
[**postOutboundCallabletimesets**](OutboundApi.html#postOutboundCallabletimesets) | **POST** /api/v2/outbound/callabletimesets | Create callable time set
[**postOutboundCallanalysisresponsesets**](OutboundApi.html#postOutboundCallanalysisresponsesets) | **POST** /api/v2/outbound/callanalysisresponsesets | Create a dialer call analysis response set.
[**postOutboundCampaignCallbackSchedule**](OutboundApi.html#postOutboundCampaignCallbackSchedule) | **POST** /api/v2/outbound/campaigns/{campaignId}/callback/schedule | Schedule a Callback for a Dialer Campaign (Deprecated)
[**postOutboundCampaignrules**](OutboundApi.html#postOutboundCampaignrules) | **POST** /api/v2/outbound/campaignrules | Create Campaign Rule
[**postOutboundCampaigns**](OutboundApi.html#postOutboundCampaigns) | **POST** /api/v2/outbound/campaigns | Create a campaign.
[**postOutboundCampaignsProgress**](OutboundApi.html#postOutboundCampaignsProgress) | **POST** /api/v2/outbound/campaigns/progress | Get progress for a list of campaigns
[**postOutboundContactlistContacts**](OutboundApi.html#postOutboundContactlistContacts) | **POST** /api/v2/outbound/contactlists/{contactListId}/contacts | Add contacts to a contact list.
[**postOutboundContactlistExport**](OutboundApi.html#postOutboundContactlistExport) | **POST** /api/v2/outbound/contactlists/{contactListId}/export | Initiate the export of a contact list.
[**postOutboundContactlistfilters**](OutboundApi.html#postOutboundContactlistfilters) | **POST** /api/v2/outbound/contactlistfilters | Create Contact List Filter
[**postOutboundContactlistfiltersPreview**](OutboundApi.html#postOutboundContactlistfiltersPreview) | **POST** /api/v2/outbound/contactlistfilters/preview | Get a preview of the output of a contact list filter
[**postOutboundContactlists**](OutboundApi.html#postOutboundContactlists) | **POST** /api/v2/outbound/contactlists | Create a contact List.
[**postOutboundConversationDnc**](OutboundApi.html#postOutboundConversationDnc) | **POST** /api/v2/outbound/conversations/{conversationId}/dnc | Add phone numbers to a Dialer DNC list.
[**postOutboundDnclistExport**](OutboundApi.html#postOutboundDnclistExport) | **POST** /api/v2/outbound/dnclists/{dncListId}/export | Initiate the export of a dnc list.
[**postOutboundDnclistPhonenumbers**](OutboundApi.html#postOutboundDnclistPhonenumbers) | **POST** /api/v2/outbound/dnclists/{dncListId}/phonenumbers | Add phone numbers to a Dialer DNC list.
[**postOutboundDnclists**](OutboundApi.html#postOutboundDnclists) | **POST** /api/v2/outbound/dnclists | Create dialer DNC list
[**postOutboundRulesets**](OutboundApi.html#postOutboundRulesets) | **POST** /api/v2/outbound/rulesets | Create a Dialer Call Analysis Response Set.
[**postOutboundSequences**](OutboundApi.html#postOutboundSequences) | **POST** /api/v2/outbound/sequences | Create a new campaign sequence.
[**putOutboundAttemptlimit**](OutboundApi.html#putOutboundAttemptlimit) | **PUT** /api/v2/outbound/attemptlimits/{attemptLimitsId} | Update attempt limits
[**putOutboundCallabletimeset**](OutboundApi.html#putOutboundCallabletimeset) | **PUT** /api/v2/outbound/callabletimesets/{callableTimeSetId} | Update callable time set
[**putOutboundCallanalysisresponseset**](OutboundApi.html#putOutboundCallanalysisresponseset) | **PUT** /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId} | Update a dialer call analysis response set.
[**putOutboundCampaign**](OutboundApi.html#putOutboundCampaign) | **PUT** /api/v2/outbound/campaigns/{campaignId} | Update a campaign.
[**putOutboundCampaignAgent**](OutboundApi.html#putOutboundCampaignAgent) | **PUT** /api/v2/outbound/campaigns/{campaignId}/agents/{userId} | Send notification that an agent&#39;s state changed 
[**putOutboundCampaignrule**](OutboundApi.html#putOutboundCampaignrule) | **PUT** /api/v2/outbound/campaignrules/{campaignRuleId} | Update Campaign Rule
[**putOutboundContactlist**](OutboundApi.html#putOutboundContactlist) | **PUT** /api/v2/outbound/contactlists/{contactListId} | Update a contact list.
[**putOutboundContactlistContact**](OutboundApi.html#putOutboundContactlistContact) | **PUT** /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId} | Update a contact.
[**putOutboundContactlistfilter**](OutboundApi.html#putOutboundContactlistfilter) | **PUT** /api/v2/outbound/contactlistfilters/{contactListFilterId} | Update Contact List Filter
[**putOutboundDnclist**](OutboundApi.html#putOutboundDnclist) | **PUT** /api/v2/outbound/dnclists/{dncListId} | Update dialer DNC list
[**putOutboundRuleset**](OutboundApi.html#putOutboundRuleset) | **PUT** /api/v2/outbound/rulesets/{ruleSetId} | Update a RuleSet.
[**putOutboundSchedulesCampaign**](OutboundApi.html#putOutboundSchedulesCampaign) | **PUT** /api/v2/outbound/schedules/campaigns/{campaignId} | Update a new campaign schedule.
[**putOutboundSchedulesSequence**](OutboundApi.html#putOutboundSchedulesSequence) | **PUT** /api/v2/outbound/schedules/sequences/{sequenceId} | Update a new sequence schedule.
[**putOutboundSequence**](OutboundApi.html#putOutboundSequence) | **PUT** /api/v2/outbound/sequences/{sequenceId} | Update a new campaign sequence.
[**putOutboundWrapupcodemappings**](OutboundApi.html#putOutboundWrapupcodemappings) | **PUT** /api/v2/outbound/wrapupcodemappings | Update the Dialer wrap up code mapping.
{: class="table table-striped"}

<a name="deleteOutboundAttemptlimit"></a>

# null deleteOutboundAttemptlimit(attemptLimitsId)

DELETE /api/v2/outbound/attemptlimits/{attemptLimitsId}

Delete attempt limits



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var attemptLimitsId = "attemptLimitsId_example"; // String | Attempt limits ID

apiInstance.deleteOutboundAttemptlimit(attemptLimitsId)
  .then(function() {
    console.log('deleteOutboundAttemptlimit returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteOutboundAttemptlimit');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **attemptLimitsId** | **String**| Attempt limits ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteOutboundCallabletimeset"></a>

# null deleteOutboundCallabletimeset(callableTimeSetId)

DELETE /api/v2/outbound/callabletimesets/{callableTimeSetId}

Delete callable time set



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var callableTimeSetId = "callableTimeSetId_example"; // String | Callable Time Set ID

apiInstance.deleteOutboundCallabletimeset(callableTimeSetId)
  .then(function() {
    console.log('deleteOutboundCallabletimeset returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteOutboundCallabletimeset');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **callableTimeSetId** | **String**| Callable Time Set ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteOutboundCallanalysisresponseset"></a>

# null deleteOutboundCallanalysisresponseset(callAnalysisSetId)

DELETE /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}

Delete a dialer call analysis response set.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var callAnalysisSetId = "callAnalysisSetId_example"; // String | Call Analysis Response Set ID

apiInstance.deleteOutboundCallanalysisresponseset(callAnalysisSetId)
  .then(function() {
    console.log('deleteOutboundCallanalysisresponseset returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteOutboundCallanalysisresponseset');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **callAnalysisSetId** | **String**| Call Analysis Response Set ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteOutboundCampaign"></a>

# [**Campaign**](Campaign.html) deleteOutboundCampaign(campaignId)

DELETE /api/v2/outbound/campaigns/{campaignId}

Delete a campaign.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.deleteOutboundCampaign(campaignId)
  .then(function(data) {
    console.log(`deleteOutboundCampaign success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteOutboundCampaign');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String**| Campaign ID |  |
{: class="table table-striped"}

### Return type

[**Campaign**](Campaign.html)

<a name="deleteOutboundCampaignProgress"></a>

# null deleteOutboundCampaignProgress(campaignId)

DELETE /api/v2/outbound/campaigns/{campaignId}/progress

Reset campaign progress and recycle the campaign



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.deleteOutboundCampaignProgress(campaignId)
  .then(function() {
    console.log('deleteOutboundCampaignProgress returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteOutboundCampaignProgress');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String**| Campaign ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteOutboundCampaignrule"></a>

# null deleteOutboundCampaignrule(campaignRuleId)

DELETE /api/v2/outbound/campaignrules/{campaignRuleId}

Delete Campaign Rule



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var campaignRuleId = "campaignRuleId_example"; // String | Campaign Rule ID

apiInstance.deleteOutboundCampaignrule(campaignRuleId)
  .then(function() {
    console.log('deleteOutboundCampaignrule returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteOutboundCampaignrule');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignRuleId** | **String**| Campaign Rule ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteOutboundContactlist"></a>

# null deleteOutboundContactlist(contactListId)

DELETE /api/v2/outbound/contactlists/{contactListId}

Delete a contact list.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var contactListId = "contactListId_example"; // String | ContactList ID

apiInstance.deleteOutboundContactlist(contactListId)
  .then(function() {
    console.log('deleteOutboundContactlist returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteOutboundContactlist');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String**| ContactList ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteOutboundContactlistContact"></a>

# null deleteOutboundContactlistContact(contactListId, contactId)

DELETE /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}

Delete a contact.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var contactListId = "contactListId_example"; // String | Contact List ID

var contactId = "contactId_example"; // String | Contact ID

apiInstance.deleteOutboundContactlistContact(contactListId, contactId)
  .then(function() {
    console.log('deleteOutboundContactlistContact returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteOutboundContactlistContact');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String**| Contact List ID |  |
 **contactId** | **String**| Contact ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteOutboundContactlistContacts"></a>

# null deleteOutboundContactlistContacts(contactListId, contactIds)

DELETE /api/v2/outbound/contactlists/{contactListId}/contacts

Delete contacts from a contact list.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var contactListId = "contactListId_example"; // String | Contact List ID

var contactIds = ["contactIds_example"]; // [String] | ContactIds to delete.

apiInstance.deleteOutboundContactlistContacts(contactListId, contactIds)
  .then(function() {
    console.log('deleteOutboundContactlistContacts returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteOutboundContactlistContacts');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String**| Contact List ID |  |
 **contactIds** | [**[String]**](String.html)| ContactIds to delete. |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteOutboundContactlistfilter"></a>

# null deleteOutboundContactlistfilter(contactListFilterId)

DELETE /api/v2/outbound/contactlistfilters/{contactListFilterId}

Delete Contact List Filter



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var contactListFilterId = "contactListFilterId_example"; // String | Contact List Filter ID

apiInstance.deleteOutboundContactlistfilter(contactListFilterId)
  .then(function() {
    console.log('deleteOutboundContactlistfilter returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteOutboundContactlistfilter');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListFilterId** | **String**| Contact List Filter ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteOutboundDnclist"></a>

# null deleteOutboundDnclist(dncListId)

DELETE /api/v2/outbound/dnclists/{dncListId}

Delete dialer DNC list



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var dncListId = "dncListId_example"; // String | DncList ID

apiInstance.deleteOutboundDnclist(dncListId)
  .then(function() {
    console.log('deleteOutboundDnclist returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteOutboundDnclist');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String**| DncList ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteOutboundRuleset"></a>

# null deleteOutboundRuleset(ruleSetId)

DELETE /api/v2/outbound/rulesets/{ruleSetId}

Delete a Rule set.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var ruleSetId = "ruleSetId_example"; // String | Rule Set ID

apiInstance.deleteOutboundRuleset(ruleSetId)
  .then(function() {
    console.log('deleteOutboundRuleset returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteOutboundRuleset');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleSetId** | **String**| Rule Set ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteOutboundSchedulesCampaign"></a>

# null deleteOutboundSchedulesCampaign(campaignId)

DELETE /api/v2/outbound/schedules/campaigns/{campaignId}

Delete a dialer campaign schedule.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.deleteOutboundSchedulesCampaign(campaignId)
  .then(function() {
    console.log('deleteOutboundSchedulesCampaign returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteOutboundSchedulesCampaign');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String**| Campaign ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteOutboundSchedulesSequence"></a>

# null deleteOutboundSchedulesSequence(sequenceId)

DELETE /api/v2/outbound/schedules/sequences/{sequenceId}

Delete a dialer sequence schedule.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var sequenceId = "sequenceId_example"; // String | Sequence ID

apiInstance.deleteOutboundSchedulesSequence(sequenceId)
  .then(function() {
    console.log('deleteOutboundSchedulesSequence returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteOutboundSchedulesSequence');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sequenceId** | **String**| Sequence ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteOutboundSequence"></a>

# null deleteOutboundSequence(sequenceId)

DELETE /api/v2/outbound/sequences/{sequenceId}

Delete a dialer campaign sequence.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var sequenceId = "sequenceId_example"; // String | Campaign Sequence ID

apiInstance.deleteOutboundSequence(sequenceId)
  .then(function() {
    console.log('deleteOutboundSequence returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteOutboundSequence');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sequenceId** | **String**| Campaign Sequence ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="getOutboundAttemptlimit"></a>

# [**AttemptLimits**](AttemptLimits.html) getOutboundAttemptlimit(attemptLimitsId)

GET /api/v2/outbound/attemptlimits/{attemptLimitsId}

Get attempt limits



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var attemptLimitsId = "attemptLimitsId_example"; // String | Attempt limits ID

apiInstance.getOutboundAttemptlimit(attemptLimitsId)
  .then(function(data) {
    console.log(`getOutboundAttemptlimit success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundAttemptlimit');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **attemptLimitsId** | **String**| Attempt limits ID |  |
{: class="table table-striped"}

### Return type

[**AttemptLimits**](AttemptLimits.html)

<a name="getOutboundAttemptlimits"></a>

# [**AttemptLimitsEntityListing**](AttemptLimitsEntityListing.html) getOutboundAttemptlimits(opts)

GET /api/v2/outbound/attemptlimits

Query attempt limits list



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a" // String | Sort order
};
apiInstance.getOutboundAttemptlimits(opts)
  .then(function(data) {
    console.log(`getOutboundAttemptlimits success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundAttemptlimits');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **filterType** | **String**| Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String**| Name | [optional]  |
 **sortBy** | **String**| Sort by | [optional]  |
 **sortOrder** | **String**| Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

[**AttemptLimitsEntityListing**](AttemptLimitsEntityListing.html)

<a name="getOutboundCallabletimeset"></a>

# [**CallableTimeSet**](CallableTimeSet.html) getOutboundCallabletimeset(callableTimeSetId)

GET /api/v2/outbound/callabletimesets/{callableTimeSetId}

Get callable time set



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var callableTimeSetId = "callableTimeSetId_example"; // String | Callable Time Set ID

apiInstance.getOutboundCallabletimeset(callableTimeSetId)
  .then(function(data) {
    console.log(`getOutboundCallabletimeset success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundCallabletimeset');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **callableTimeSetId** | **String**| Callable Time Set ID |  |
{: class="table table-striped"}

### Return type

[**CallableTimeSet**](CallableTimeSet.html)

<a name="getOutboundCallabletimesets"></a>

# [**CallableTimeSetEntityListing**](CallableTimeSetEntityListing.html) getOutboundCallabletimesets(opts)

GET /api/v2/outbound/callabletimesets

Query callable time set list



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a" // String | Sort order
};
apiInstance.getOutboundCallabletimesets(opts)
  .then(function(data) {
    console.log(`getOutboundCallabletimesets success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundCallabletimesets');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **filterType** | **String**| Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String**| Name | [optional]  |
 **sortBy** | **String**| Sort by | [optional]  |
 **sortOrder** | **String**| Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

[**CallableTimeSetEntityListing**](CallableTimeSetEntityListing.html)

<a name="getOutboundCallanalysisresponseset"></a>

# [**ResponseSet**](ResponseSet.html) getOutboundCallanalysisresponseset(callAnalysisSetId)

GET /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}

Get a dialer call analysis response set.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var callAnalysisSetId = "callAnalysisSetId_example"; // String | Call Analysis Response Set ID

apiInstance.getOutboundCallanalysisresponseset(callAnalysisSetId)
  .then(function(data) {
    console.log(`getOutboundCallanalysisresponseset success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundCallanalysisresponseset');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **callAnalysisSetId** | **String**| Call Analysis Response Set ID |  |
{: class="table table-striped"}

### Return type

[**ResponseSet**](ResponseSet.html)

<a name="getOutboundCallanalysisresponsesets"></a>

# [**ResponseSetEntityListing**](ResponseSetEntityListing.html) getOutboundCallanalysisresponsesets(opts)

GET /api/v2/outbound/callanalysisresponsesets

Query a list of dialer call analysis response sets.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a" // String | Sort order
};
apiInstance.getOutboundCallanalysisresponsesets(opts)
  .then(function(data) {
    console.log(`getOutboundCallanalysisresponsesets success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundCallanalysisresponsesets');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **filterType** | **String**| Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String**| Name | [optional]  |
 **sortBy** | **String**| Sort by | [optional]  |
 **sortOrder** | **String**| Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

[**ResponseSetEntityListing**](ResponseSetEntityListing.html)

<a name="getOutboundCampaign"></a>

# [**Campaign**](Campaign.html) getOutboundCampaign(campaignId)

GET /api/v2/outbound/campaigns/{campaignId}

Get dialer campaign.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.getOutboundCampaign(campaignId)
  .then(function(data) {
    console.log(`getOutboundCampaign success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundCampaign');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String**| Campaign ID |  |
{: class="table table-striped"}

### Return type

[**Campaign**](Campaign.html)

<a name="getOutboundCampaignDiagnostics"></a>

# [**CampaignDiagnostics**](CampaignDiagnostics.html) getOutboundCampaignDiagnostics(campaignId)

GET /api/v2/outbound/campaigns/{campaignId}/diagnostics

Get campaign diagnostics



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.getOutboundCampaignDiagnostics(campaignId)
  .then(function(data) {
    console.log(`getOutboundCampaignDiagnostics success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundCampaignDiagnostics');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String**| Campaign ID |  |
{: class="table table-striped"}

### Return type

[**CampaignDiagnostics**](CampaignDiagnostics.html)

<a name="getOutboundCampaignInteractions"></a>

# [**CampaignInteractions**](CampaignInteractions.html) getOutboundCampaignInteractions(campaignId)

GET /api/v2/outbound/campaigns/{campaignId}/interactions

Get dialer campaign interactions.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.getOutboundCampaignInteractions(campaignId)
  .then(function(data) {
    console.log(`getOutboundCampaignInteractions success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundCampaignInteractions');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String**| Campaign ID |  |
{: class="table table-striped"}

### Return type

[**CampaignInteractions**](CampaignInteractions.html)

<a name="getOutboundCampaignProgress"></a>

# [**CampaignProgress**](CampaignProgress.html) getOutboundCampaignProgress(campaignId)

GET /api/v2/outbound/campaigns/{campaignId}/progress

Get campaign progress



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.getOutboundCampaignProgress(campaignId)
  .then(function(data) {
    console.log(`getOutboundCampaignProgress success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundCampaignProgress');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String**| Campaign ID |  |
{: class="table table-striped"}

### Return type

[**CampaignProgress**](CampaignProgress.html)

<a name="getOutboundCampaignStats"></a>

# [**CampaignStats**](CampaignStats.html) getOutboundCampaignStats(campaignId)

GET /api/v2/outbound/campaigns/{campaignId}/stats

Get statistics about a Dialer Campaign



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.getOutboundCampaignStats(campaignId)
  .then(function(data) {
    console.log(`getOutboundCampaignStats success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundCampaignStats');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String**| Campaign ID |  |
{: class="table table-striped"}

### Return type

[**CampaignStats**](CampaignStats.html)

<a name="getOutboundCampaignrule"></a>

# [**CampaignRule**](CampaignRule.html) getOutboundCampaignrule(campaignRuleId)

GET /api/v2/outbound/campaignrules/{campaignRuleId}

Get Campaign Rule



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var campaignRuleId = "campaignRuleId_example"; // String | Campaign Rule ID

apiInstance.getOutboundCampaignrule(campaignRuleId)
  .then(function(data) {
    console.log(`getOutboundCampaignrule success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundCampaignrule');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignRuleId** | **String**| Campaign Rule ID |  |
{: class="table table-striped"}

### Return type

[**CampaignRule**](CampaignRule.html)

<a name="getOutboundCampaignrules"></a>

# [**CampaignRuleEntityListing**](CampaignRuleEntityListing.html) getOutboundCampaignrules(opts)

GET /api/v2/outbound/campaignrules

Query Campaign Rule list



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a" // String | Sort order
};
apiInstance.getOutboundCampaignrules(opts)
  .then(function(data) {
    console.log(`getOutboundCampaignrules success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundCampaignrules');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **filterType** | **String**| Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String**| Name | [optional]  |
 **sortBy** | **String**| Sort by | [optional]  |
 **sortOrder** | **String**| Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

[**CampaignRuleEntityListing**](CampaignRuleEntityListing.html)

<a name="getOutboundCampaigns"></a>

# [**CampaignEntityListing**](CampaignEntityListing.html) getOutboundCampaigns(opts)

GET /api/v2/outbound/campaigns

Query a list of dialer campaigns.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'contactListId': "contactListId_example", // String | Contact List ID
  'dncListId': "dncListId_example", // String | DNC list ID
  'distributionQueueId': "distributionQueueId_example", // String | Distribution queue ID
  'edgeGroupId': "edgeGroupId_example", // String | Edge group ID
  'callAnalysisResponseSetId': "callAnalysisResponseSetId_example", // String | Call analysis response set ID
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a" // String | Sort order
};
apiInstance.getOutboundCampaigns(opts)
  .then(function(data) {
    console.log(`getOutboundCampaigns success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundCampaigns');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **filterType** | **String**| Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String**| Name | [optional]  |
 **contactListId** | **String**| Contact List ID | [optional]  |
 **dncListId** | **String**| DNC list ID | [optional]  |
 **distributionQueueId** | **String**| Distribution queue ID | [optional]  |
 **edgeGroupId** | **String**| Edge group ID | [optional]  |
 **callAnalysisResponseSetId** | **String**| Call analysis response set ID | [optional]  |
 **sortBy** | **String**| Sort by | [optional]  |
 **sortOrder** | **String**| Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

[**CampaignEntityListing**](CampaignEntityListing.html)

<a name="getOutboundContactlist"></a>

# [**ContactList**](ContactList.html) getOutboundContactlist(contactListId, opts)

GET /api/v2/outbound/contactlists/{contactListId}

Get a dialer contact list.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var contactListId = "contactListId_example"; // String | ContactList ID

var opts = { 
  'includeImportStatus': false, // Boolean | Import status
  'includeSize': false // Boolean | Include size
};
apiInstance.getOutboundContactlist(contactListId, opts)
  .then(function(data) {
    console.log(`getOutboundContactlist success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundContactlist');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String**| ContactList ID |  |
 **includeImportStatus** | **Boolean**| Import status | [optional] [default to false] |
 **includeSize** | **Boolean**| Include size | [optional] [default to false] |
{: class="table table-striped"}

### Return type

[**ContactList**](ContactList.html)

<a name="getOutboundContactlistContact"></a>

# [**DialerContact**](DialerContact.html) getOutboundContactlistContact(contactListId, contactId)

GET /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}

Get a contact.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var contactListId = "contactListId_example"; // String | Contact List ID

var contactId = "contactId_example"; // String | Contact ID

apiInstance.getOutboundContactlistContact(contactListId, contactId)
  .then(function(data) {
    console.log(`getOutboundContactlistContact success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundContactlistContact');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String**| Contact List ID |  |
 **contactId** | **String**| Contact ID |  |
{: class="table table-striped"}

### Return type

[**DialerContact**](DialerContact.html)

<a name="getOutboundContactlistExport"></a>

# [**ExportUri**](ExportUri.html) getOutboundContactlistExport(contactListId, opts)

GET /api/v2/outbound/contactlists/{contactListId}/export

Get the URI of a contact list export.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var contactListId = "contactListId_example"; // String | ContactList ID

var opts = { 
  'download': "false" // String | Redirect to download uri
};
apiInstance.getOutboundContactlistExport(contactListId, opts)
  .then(function(data) {
    console.log(`getOutboundContactlistExport success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundContactlistExport');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String**| ContactList ID |  |
 **download** | **String**| Redirect to download uri | [optional] [default to false] |
{: class="table table-striped"}

### Return type

[**ExportUri**](ExportUri.html)

<a name="getOutboundContactlistImportstatus"></a>

# [**ImportStatus**](ImportStatus.html) getOutboundContactlistImportstatus(contactListId)

GET /api/v2/outbound/contactlists/{contactListId}/importstatus

Get dialer contactList import status.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var contactListId = "contactListId_example"; // String | ContactList ID

apiInstance.getOutboundContactlistImportstatus(contactListId)
  .then(function(data) {
    console.log(`getOutboundContactlistImportstatus success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundContactlistImportstatus');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String**| ContactList ID |  |
{: class="table table-striped"}

### Return type

[**ImportStatus**](ImportStatus.html)

<a name="getOutboundContactlistfilter"></a>

# [**ContactListFilter**](ContactListFilter.html) getOutboundContactlistfilter(contactListFilterId)

GET /api/v2/outbound/contactlistfilters/{contactListFilterId}

Get Contact list filter



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var contactListFilterId = "contactListFilterId_example"; // String | Contact List Filter ID

apiInstance.getOutboundContactlistfilter(contactListFilterId)
  .then(function(data) {
    console.log(`getOutboundContactlistfilter success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundContactlistfilter');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListFilterId** | **String**| Contact List Filter ID |  |
{: class="table table-striped"}

### Return type

[**ContactListFilter**](ContactListFilter.html)

<a name="getOutboundContactlistfilters"></a>

# [**ContactListFilterEntityListing**](ContactListFilterEntityListing.html) getOutboundContactlistfilters(opts)

GET /api/v2/outbound/contactlistfilters

Query Contact list filters



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a", // String | Sort order
  'contactListId': "contactListId_example" // String | Contact List ID
};
apiInstance.getOutboundContactlistfilters(opts)
  .then(function(data) {
    console.log(`getOutboundContactlistfilters success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundContactlistfilters');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **filterType** | **String**| Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String**| Name | [optional]  |
 **sortBy** | **String**| Sort by | [optional]  |
 **sortOrder** | **String**| Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
 **contactListId** | **String**| Contact List ID | [optional]  |
{: class="table table-striped"}

### Return type

[**ContactListFilterEntityListing**](ContactListFilterEntityListing.html)

<a name="getOutboundContactlists"></a>

# [**ContactListEntityListing**](ContactListEntityListing.html) getOutboundContactlists(opts)

GET /api/v2/outbound/contactlists

Query a list of contact lists.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var opts = { 
  'includeImportStatus': false, // Boolean | Include import status
  'includeSize': false, // Boolean | Include size
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a" // String | Sort order
};
apiInstance.getOutboundContactlists(opts)
  .then(function(data) {
    console.log(`getOutboundContactlists success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundContactlists');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **includeImportStatus** | **Boolean**| Include import status | [optional] [default to false] |
 **includeSize** | **Boolean**| Include size | [optional] [default to false] |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **filterType** | **String**| Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String**| Name | [optional]  |
 **sortBy** | **String**| Sort by | [optional]  |
 **sortOrder** | **String**| Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

[**ContactListEntityListing**](ContactListEntityListing.html)

<a name="getOutboundDnclist"></a>

# [**DncList**](DncList.html) getOutboundDnclist(dncListId, opts)

GET /api/v2/outbound/dnclists/{dncListId}

Get dialer DNC list



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var dncListId = "dncListId_example"; // String | DncList ID

var opts = { 
  'includeImportStatus': false, // Boolean | Import status
  'includeSize': false // Boolean | Include size
};
apiInstance.getOutboundDnclist(dncListId, opts)
  .then(function(data) {
    console.log(`getOutboundDnclist success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundDnclist');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String**| DncList ID |  |
 **includeImportStatus** | **Boolean**| Import status | [optional] [default to false] |
 **includeSize** | **Boolean**| Include size | [optional] [default to false] |
{: class="table table-striped"}

### Return type

[**DncList**](DncList.html)

<a name="getOutboundDnclistExport"></a>

# [**ExportUri**](ExportUri.html) getOutboundDnclistExport(dncListId, opts)

GET /api/v2/outbound/dnclists/{dncListId}/export

Get the URI of a DNC list export.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var dncListId = "dncListId_example"; // String | DncList ID

var opts = { 
  'download': "false" // String | Redirect to download uri
};
apiInstance.getOutboundDnclistExport(dncListId, opts)
  .then(function(data) {
    console.log(`getOutboundDnclistExport success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundDnclistExport');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String**| DncList ID |  |
 **download** | **String**| Redirect to download uri | [optional] [default to false] |
{: class="table table-striped"}

### Return type

[**ExportUri**](ExportUri.html)

<a name="getOutboundDnclistImportstatus"></a>

# [**ImportStatus**](ImportStatus.html) getOutboundDnclistImportstatus(dncListId)

GET /api/v2/outbound/dnclists/{dncListId}/importstatus

Get dialer dncList import status.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var dncListId = "dncListId_example"; // String | DncList ID

apiInstance.getOutboundDnclistImportstatus(dncListId)
  .then(function(data) {
    console.log(`getOutboundDnclistImportstatus success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundDnclistImportstatus');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String**| DncList ID |  |
{: class="table table-striped"}

### Return type

[**ImportStatus**](ImportStatus.html)

<a name="getOutboundDnclists"></a>

# [**DncListEntityListing**](DncListEntityListing.html) getOutboundDnclists(opts)

GET /api/v2/outbound/dnclists

Query dialer DNC lists



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var opts = { 
  'includeImportStatus': false, // Boolean | Import status
  'includeSize': false, // Boolean | Include size
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "sortOrder_example" // String | Sort order
};
apiInstance.getOutboundDnclists(opts)
  .then(function(data) {
    console.log(`getOutboundDnclists success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundDnclists');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **includeImportStatus** | **Boolean**| Import status | [optional] [default to false] |
 **includeSize** | **Boolean**| Include size | [optional] [default to false] |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **filterType** | **String**| Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String**| Name | [optional]  |
 **sortBy** | **String**| Sort by | [optional]  |
 **sortOrder** | **String**| Sort order | [optional] <br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

[**DncListEntityListing**](DncListEntityListing.html)

<a name="getOutboundEvent"></a>

# [**EventLog**](EventLog.html) getOutboundEvent(eventId)

GET /api/v2/outbound/events/{eventId}

Get Dialer Event



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var eventId = "eventId_example"; // String | Event Log ID

apiInstance.getOutboundEvent(eventId)
  .then(function(data) {
    console.log(`getOutboundEvent success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundEvent');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **eventId** | **String**| Event Log ID |  |
{: class="table table-striped"}

### Return type

[**EventLog**](EventLog.html)

<a name="getOutboundEvents"></a>

# [**DialerEventEntityListing**](DialerEventEntityListing.html) getOutboundEvents(opts)

GET /api/v2/outbound/events

Query Event Logs



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'filterType': "Prefix", // String | Filter type
  'category': "category_example", // String | Category
  'level': "level_example", // String | Level
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a" // String | Sort order
};
apiInstance.getOutboundEvents(opts)
  .then(function(data) {
    console.log(`getOutboundEvents success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundEvents');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **filterType** | **String**| Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **category** | **String**| Category | [optional]  |
 **level** | **String**| Level | [optional]  |
 **sortBy** | **String**| Sort by | [optional]  |
 **sortOrder** | **String**| Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

[**DialerEventEntityListing**](DialerEventEntityListing.html)

<a name="getOutboundRuleset"></a>

# [**RuleSet**](RuleSet.html) getOutboundRuleset(ruleSetId)

GET /api/v2/outbound/rulesets/{ruleSetId}

Get a Rule Set by ID.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var ruleSetId = "ruleSetId_example"; // String | Rule Set ID

apiInstance.getOutboundRuleset(ruleSetId)
  .then(function(data) {
    console.log(`getOutboundRuleset success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundRuleset');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleSetId** | **String**| Rule Set ID |  |
{: class="table table-striped"}

### Return type

[**RuleSet**](RuleSet.html)

<a name="getOutboundRulesets"></a>

# [**RuleSetEntityListing**](RuleSetEntityListing.html) getOutboundRulesets(opts)

GET /api/v2/outbound/rulesets

Query a list of Rule Sets.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a" // String | Sort order
};
apiInstance.getOutboundRulesets(opts)
  .then(function(data) {
    console.log(`getOutboundRulesets success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundRulesets');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **filterType** | **String**| Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String**| Name | [optional]  |
 **sortBy** | **String**| Sort by | [optional]  |
 **sortOrder** | **String**| Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

[**RuleSetEntityListing**](RuleSetEntityListing.html)

<a name="getOutboundSchedulesCampaign"></a>

# [**CampaignSchedule**](CampaignSchedule.html) getOutboundSchedulesCampaign(campaignId)

GET /api/v2/outbound/schedules/campaigns/{campaignId}

Get a dialer campaign schedule.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var campaignId = "campaignId_example"; // String | Campaign ID

apiInstance.getOutboundSchedulesCampaign(campaignId)
  .then(function(data) {
    console.log(`getOutboundSchedulesCampaign success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundSchedulesCampaign');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String**| Campaign ID |  |
{: class="table table-striped"}

### Return type

[**CampaignSchedule**](CampaignSchedule.html)

<a name="getOutboundSchedulesCampaigns"></a>

# [**[CampaignSchedule]**](CampaignSchedule.html) getOutboundSchedulesCampaigns()

GET /api/v2/outbound/schedules/campaigns

Query for a list of dialer campaign schedules.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();
apiInstance.getOutboundSchedulesCampaigns()
  .then(function(data) {
    console.log(`getOutboundSchedulesCampaigns success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundSchedulesCampaigns');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**[CampaignSchedule]**](CampaignSchedule.html)

<a name="getOutboundSchedulesSequence"></a>

# [**SequenceSchedule**](SequenceSchedule.html) getOutboundSchedulesSequence(sequenceId)

GET /api/v2/outbound/schedules/sequences/{sequenceId}

Get a dialer sequence schedule.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var sequenceId = "sequenceId_example"; // String | Sequence ID

apiInstance.getOutboundSchedulesSequence(sequenceId)
  .then(function(data) {
    console.log(`getOutboundSchedulesSequence success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundSchedulesSequence');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sequenceId** | **String**| Sequence ID |  |
{: class="table table-striped"}

### Return type

[**SequenceSchedule**](SequenceSchedule.html)

<a name="getOutboundSchedulesSequences"></a>

# [**[SequenceSchedule]**](SequenceSchedule.html) getOutboundSchedulesSequences()

GET /api/v2/outbound/schedules/sequences

Query for a list of dialer sequence schedules.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();
apiInstance.getOutboundSchedulesSequences()
  .then(function(data) {
    console.log(`getOutboundSchedulesSequences success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundSchedulesSequences');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**[SequenceSchedule]**](SequenceSchedule.html)

<a name="getOutboundSequence"></a>

# [**CampaignSequence**](CampaignSequence.html) getOutboundSequence(sequenceId)

GET /api/v2/outbound/sequences/{sequenceId}

Get a dialer campaign sequence.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var sequenceId = "sequenceId_example"; // String | Campaign Sequence ID

apiInstance.getOutboundSequence(sequenceId)
  .then(function(data) {
    console.log(`getOutboundSequence success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundSequence');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sequenceId** | **String**| Campaign Sequence ID |  |
{: class="table table-striped"}

### Return type

[**CampaignSequence**](CampaignSequence.html)

<a name="getOutboundSequences"></a>

# [**CampaignSequenceEntityListing**](CampaignSequenceEntityListing.html) getOutboundSequences(opts)

GET /api/v2/outbound/sequences

Query a list of dialer campaign sequences.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'filterType': "Prefix", // String | Filter type
  'name': "name_example", // String | Name
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "a" // String | Sort order
};
apiInstance.getOutboundSequences(opts)
  .then(function(data) {
    console.log(`getOutboundSequences success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundSequences');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **filterType** | **String**| Filter type | [optional] [default to Prefix]<br />**Values**: Equals, RegEx, Contains, Prefix, LessThan, LessThanEqualTo, GreaterThan, GreaterThanEqualTo, BeginsWith, EndsWith |
 **name** | **String**| Name | [optional]  |
 **sortBy** | **String**| Sort by | [optional]  |
 **sortOrder** | **String**| Sort order | [optional] [default to a]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

[**CampaignSequenceEntityListing**](CampaignSequenceEntityListing.html)

<a name="getOutboundWrapupcodemappings"></a>

# [**WrapUpCodeMapping**](WrapUpCodeMapping.html) getOutboundWrapupcodemappings()

GET /api/v2/outbound/wrapupcodemappings

Get the Dialer wrap up code mapping.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();
apiInstance.getOutboundWrapupcodemappings()
  .then(function(data) {
    console.log(`getOutboundWrapupcodemappings success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOutboundWrapupcodemappings');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**WrapUpCodeMapping**](WrapUpCodeMapping.html)

<a name="postOutboundAttemptlimits"></a>

# [**AttemptLimits**](AttemptLimits.html) postOutboundAttemptlimits(body)

POST /api/v2/outbound/attemptlimits

Create attempt limits



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var body = new platformClient.AttemptLimits(); // AttemptLimits | AttemptLimits

apiInstance.postOutboundAttemptlimits(body)
  .then(function(data) {
    console.log(`postOutboundAttemptlimits success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postOutboundAttemptlimits');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**AttemptLimits**](AttemptLimits.html)| AttemptLimits |  |
{: class="table table-striped"}

### Return type

[**AttemptLimits**](AttemptLimits.html)

<a name="postOutboundAudits"></a>

# [**AuditSearchResult**](AuditSearchResult.html) postOutboundAudits(body, opts)

POST /api/v2/outbound/audits

Retrieves audits for dialer.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var body = new platformClient.DialerAuditRequest(); // DialerAuditRequest | AuditSearch

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "entity.name", // String | Sort by
  'sortOrder': "ascending", // String | Sort order
  'facetsOnly': false // Boolean | Facets only
};
apiInstance.postOutboundAudits(body, opts)
  .then(function(data) {
    console.log(`postOutboundAudits success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postOutboundAudits');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**DialerAuditRequest**](DialerAuditRequest.html)| AuditSearch |  |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **sortBy** | **String**| Sort by | [optional] [default to entity.name] |
 **sortOrder** | **String**| Sort order | [optional] [default to ascending] |
 **facetsOnly** | **Boolean**| Facets only | [optional] [default to false] |
{: class="table table-striped"}

### Return type

[**AuditSearchResult**](AuditSearchResult.html)

<a name="postOutboundCallabletimesets"></a>

# [**CallableTimeSet**](CallableTimeSet.html) postOutboundCallabletimesets(body)

POST /api/v2/outbound/callabletimesets

Create callable time set



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var body = new platformClient.CallableTimeSet(); // CallableTimeSet | DialerCallableTimeSet

apiInstance.postOutboundCallabletimesets(body)
  .then(function(data) {
    console.log(`postOutboundCallabletimesets success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postOutboundCallabletimesets');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**CallableTimeSet**](CallableTimeSet.html)| DialerCallableTimeSet |  |
{: class="table table-striped"}

### Return type

[**CallableTimeSet**](CallableTimeSet.html)

<a name="postOutboundCallanalysisresponsesets"></a>

# [**ResponseSet**](ResponseSet.html) postOutboundCallanalysisresponsesets(body)

POST /api/v2/outbound/callanalysisresponsesets

Create a dialer call analysis response set.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var body = new platformClient.ResponseSet(); // ResponseSet | ResponseSet

apiInstance.postOutboundCallanalysisresponsesets(body)
  .then(function(data) {
    console.log(`postOutboundCallanalysisresponsesets success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postOutboundCallanalysisresponsesets');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**ResponseSet**](ResponseSet.html)| ResponseSet |  |
{: class="table table-striped"}

### Return type

[**ResponseSet**](ResponseSet.html)

<a name="postOutboundCampaignCallbackSchedule"></a>

# [**ContactCallbackRequest**](ContactCallbackRequest.html) postOutboundCampaignCallbackSchedule(campaignId, body)

POST /api/v2/outbound/campaigns/{campaignId}/callback/schedule

Schedule a Callback for a Dialer Campaign (Deprecated)

This endpoint is deprecated and may have unexpected results. Please use \&quot;/conversations/{conversationId}/participants/{participantId}/callbacks instead.\&quot;

### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var campaignId = "campaignId_example"; // String | Campaign ID

var body = new platformClient.ContactCallbackRequest(); // ContactCallbackRequest | ContactCallbackRequest

apiInstance.postOutboundCampaignCallbackSchedule(campaignId, body)
  .then(function(data) {
    console.log(`postOutboundCampaignCallbackSchedule success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postOutboundCampaignCallbackSchedule');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String**| Campaign ID |  |
 **body** | [**ContactCallbackRequest**](ContactCallbackRequest.html)| ContactCallbackRequest |  |
{: class="table table-striped"}

### Return type

[**ContactCallbackRequest**](ContactCallbackRequest.html)

<a name="postOutboundCampaignrules"></a>

# [**CampaignRule**](CampaignRule.html) postOutboundCampaignrules(body)

POST /api/v2/outbound/campaignrules

Create Campaign Rule



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var body = new platformClient.CampaignRule(); // CampaignRule | CampaignRule

apiInstance.postOutboundCampaignrules(body)
  .then(function(data) {
    console.log(`postOutboundCampaignrules success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postOutboundCampaignrules');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**CampaignRule**](CampaignRule.html)| CampaignRule |  |
{: class="table table-striped"}

### Return type

[**CampaignRule**](CampaignRule.html)

<a name="postOutboundCampaigns"></a>

# [**Campaign**](Campaign.html) postOutboundCampaigns(body)

POST /api/v2/outbound/campaigns

Create a campaign.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var body = new platformClient.Campaign(); // Campaign | Campaign

apiInstance.postOutboundCampaigns(body)
  .then(function(data) {
    console.log(`postOutboundCampaigns success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postOutboundCampaigns');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**Campaign**](Campaign.html)| Campaign |  |
{: class="table table-striped"}

### Return type

[**Campaign**](Campaign.html)

<a name="postOutboundCampaignsProgress"></a>

# [**[CampaignProgress]**](CampaignProgress.html) postOutboundCampaignsProgress(body)

POST /api/v2/outbound/campaigns/progress

Get progress for a list of campaigns



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var body = [new platformClient.[String]()]; // [String] | Campaign IDs

apiInstance.postOutboundCampaignsProgress(body)
  .then(function(data) {
    console.log(`postOutboundCampaignsProgress success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postOutboundCampaignsProgress');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **[String]**| Campaign IDs |  |
{: class="table table-striped"}

### Return type

[**[CampaignProgress]**](CampaignProgress.html)

<a name="postOutboundContactlistContacts"></a>

# [**[DialerContact]**](DialerContact.html) postOutboundContactlistContacts(contactListId, body, opts)

POST /api/v2/outbound/contactlists/{contactListId}/contacts

Add contacts to a contact list.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var contactListId = "contactListId_example"; // String | Contact List ID

var body = [new platformClient.DialerContact()]; // [DialerContact] | Contact

var opts = { 
  'priority': true, // Boolean | Contact priority.  True means the contact(s) will go to the beginning of the list, false means at the end.
  'clearSystemData': true // Boolean | Clear system data.  True means the system data stored on the contact will be cleared if the contact already exists (attempts, callable status, etc), false means it won't.
};
apiInstance.postOutboundContactlistContacts(contactListId, body, opts)
  .then(function(data) {
    console.log(`postOutboundContactlistContacts success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postOutboundContactlistContacts');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String**| Contact List ID |  |
 **body** | [**[DialerContact]**](DialerContact.html)| Contact |  |
 **priority** | **Boolean**| Contact priority.  True means the contact(s) will go to the beginning of the list, false means at the end. | [optional]  |
 **clearSystemData** | **Boolean**| Clear system data.  True means the system data stored on the contact will be cleared if the contact already exists (attempts, callable status, etc), false means it won&#39;t. | [optional]  |
{: class="table table-striped"}

### Return type

[**[DialerContact]**](DialerContact.html)

<a name="postOutboundContactlistExport"></a>

# [**UriReference**](UriReference.html) postOutboundContactlistExport(contactListId)

POST /api/v2/outbound/contactlists/{contactListId}/export

Initiate the export of a contact list.

Returns 200 if received OK.

### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var contactListId = "contactListId_example"; // String | ContactList ID

apiInstance.postOutboundContactlistExport(contactListId)
  .then(function(data) {
    console.log(`postOutboundContactlistExport success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postOutboundContactlistExport');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String**| ContactList ID |  |
{: class="table table-striped"}

### Return type

[**UriReference**](UriReference.html)

<a name="postOutboundContactlistfilters"></a>

# [**ContactListFilter**](ContactListFilter.html) postOutboundContactlistfilters(body)

POST /api/v2/outbound/contactlistfilters

Create Contact List Filter



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var body = new platformClient.ContactListFilter(); // ContactListFilter | ContactListFilter

apiInstance.postOutboundContactlistfilters(body)
  .then(function(data) {
    console.log(`postOutboundContactlistfilters success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postOutboundContactlistfilters');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**ContactListFilter**](ContactListFilter.html)| ContactListFilter |  |
{: class="table table-striped"}

### Return type

[**ContactListFilter**](ContactListFilter.html)

<a name="postOutboundContactlistfiltersPreview"></a>

# [**FilterPreviewResponse**](FilterPreviewResponse.html) postOutboundContactlistfiltersPreview(body)

POST /api/v2/outbound/contactlistfilters/preview

Get a preview of the output of a contact list filter



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var body = new platformClient.ContactListFilter(); // ContactListFilter | ContactListFilter

apiInstance.postOutboundContactlistfiltersPreview(body)
  .then(function(data) {
    console.log(`postOutboundContactlistfiltersPreview success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postOutboundContactlistfiltersPreview');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**ContactListFilter**](ContactListFilter.html)| ContactListFilter |  |
{: class="table table-striped"}

### Return type

[**FilterPreviewResponse**](FilterPreviewResponse.html)

<a name="postOutboundContactlists"></a>

# [**ContactList**](ContactList.html) postOutboundContactlists(body)

POST /api/v2/outbound/contactlists

Create a contact List.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var body = new platformClient.ContactList(); // ContactList | ContactList

apiInstance.postOutboundContactlists(body)
  .then(function(data) {
    console.log(`postOutboundContactlists success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postOutboundContactlists');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**ContactList**](ContactList.html)| ContactList |  |
{: class="table table-striped"}

### Return type

[**ContactList**](ContactList.html)

<a name="postOutboundConversationDnc"></a>

# null postOutboundConversationDnc(conversationId)

POST /api/v2/outbound/conversations/{conversationId}/dnc

Add phone numbers to a Dialer DNC list.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var conversationId = "conversationId_example"; // String | Conversation ID

apiInstance.postOutboundConversationDnc(conversationId)
  .then(function() {
    console.log('postOutboundConversationDnc returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling postOutboundConversationDnc');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String**| Conversation ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="postOutboundDnclistExport"></a>

# [**UriReference**](UriReference.html) postOutboundDnclistExport(dncListId)

POST /api/v2/outbound/dnclists/{dncListId}/export

Initiate the export of a dnc list.

Returns 200 if received OK.

### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var dncListId = "dncListId_example"; // String | DncList ID

apiInstance.postOutboundDnclistExport(dncListId)
  .then(function(data) {
    console.log(`postOutboundDnclistExport success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postOutboundDnclistExport');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String**| DncList ID |  |
{: class="table table-striped"}

### Return type

[**UriReference**](UriReference.html)

<a name="postOutboundDnclistPhonenumbers"></a>

# null postOutboundDnclistPhonenumbers(dncListId, body)

POST /api/v2/outbound/dnclists/{dncListId}/phonenumbers

Add phone numbers to a Dialer DNC list.

Only Internal DNC lists may be appended to

### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var dncListId = "dncListId_example"; // String | DncList ID

var body = [new platformClient.[String]()]; // [String] | DNC Phone Numbers

apiInstance.postOutboundDnclistPhonenumbers(dncListId, body)
  .then(function() {
    console.log('postOutboundDnclistPhonenumbers returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling postOutboundDnclistPhonenumbers');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String**| DncList ID |  |
 **body** | **[String]**| DNC Phone Numbers |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="postOutboundDnclists"></a>

# [**DncList**](DncList.html) postOutboundDnclists(body)

POST /api/v2/outbound/dnclists

Create dialer DNC list



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var body = new platformClient.DncListCreate(); // DncListCreate | DncList

apiInstance.postOutboundDnclists(body)
  .then(function(data) {
    console.log(`postOutboundDnclists success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postOutboundDnclists');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**DncListCreate**](DncListCreate.html)| DncList |  |
{: class="table table-striped"}

### Return type

[**DncList**](DncList.html)

<a name="postOutboundRulesets"></a>

# [**RuleSet**](RuleSet.html) postOutboundRulesets(body)

POST /api/v2/outbound/rulesets

Create a Dialer Call Analysis Response Set.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var body = new platformClient.RuleSet(); // RuleSet | RuleSet

apiInstance.postOutboundRulesets(body)
  .then(function(data) {
    console.log(`postOutboundRulesets success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postOutboundRulesets');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**RuleSet**](RuleSet.html)| RuleSet |  |
{: class="table table-striped"}

### Return type

[**RuleSet**](RuleSet.html)

<a name="postOutboundSequences"></a>

# [**CampaignSequence**](CampaignSequence.html) postOutboundSequences(body)

POST /api/v2/outbound/sequences

Create a new campaign sequence.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var body = new platformClient.CampaignSequence(); // CampaignSequence | Organization

apiInstance.postOutboundSequences(body)
  .then(function(data) {
    console.log(`postOutboundSequences success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postOutboundSequences');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**CampaignSequence**](CampaignSequence.html)| Organization |  |
{: class="table table-striped"}

### Return type

[**CampaignSequence**](CampaignSequence.html)

<a name="putOutboundAttemptlimit"></a>

# [**AttemptLimits**](AttemptLimits.html) putOutboundAttemptlimit(attemptLimitsId, body)

PUT /api/v2/outbound/attemptlimits/{attemptLimitsId}

Update attempt limits



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var attemptLimitsId = "attemptLimitsId_example"; // String | Attempt limits ID

var body = new platformClient.AttemptLimits(); // AttemptLimits | AttemptLimits

apiInstance.putOutboundAttemptlimit(attemptLimitsId, body)
  .then(function(data) {
    console.log(`putOutboundAttemptlimit success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putOutboundAttemptlimit');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **attemptLimitsId** | **String**| Attempt limits ID |  |
 **body** | [**AttemptLimits**](AttemptLimits.html)| AttemptLimits |  |
{: class="table table-striped"}

### Return type

[**AttemptLimits**](AttemptLimits.html)

<a name="putOutboundCallabletimeset"></a>

# [**CallableTimeSet**](CallableTimeSet.html) putOutboundCallabletimeset(callableTimeSetId, body)

PUT /api/v2/outbound/callabletimesets/{callableTimeSetId}

Update callable time set



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var callableTimeSetId = "callableTimeSetId_example"; // String | Callable Time Set ID

var body = new platformClient.CallableTimeSet(); // CallableTimeSet | DialerCallableTimeSet

apiInstance.putOutboundCallabletimeset(callableTimeSetId, body)
  .then(function(data) {
    console.log(`putOutboundCallabletimeset success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putOutboundCallabletimeset');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **callableTimeSetId** | **String**| Callable Time Set ID |  |
 **body** | [**CallableTimeSet**](CallableTimeSet.html)| DialerCallableTimeSet |  |
{: class="table table-striped"}

### Return type

[**CallableTimeSet**](CallableTimeSet.html)

<a name="putOutboundCallanalysisresponseset"></a>

# [**ResponseSet**](ResponseSet.html) putOutboundCallanalysisresponseset(callAnalysisSetId, body)

PUT /api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}

Update a dialer call analysis response set.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var callAnalysisSetId = "callAnalysisSetId_example"; // String | Call Analysis Response Set ID

var body = new platformClient.ResponseSet(); // ResponseSet | ResponseSet

apiInstance.putOutboundCallanalysisresponseset(callAnalysisSetId, body)
  .then(function(data) {
    console.log(`putOutboundCallanalysisresponseset success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putOutboundCallanalysisresponseset');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **callAnalysisSetId** | **String**| Call Analysis Response Set ID |  |
 **body** | [**ResponseSet**](ResponseSet.html)| ResponseSet |  |
{: class="table table-striped"}

### Return type

[**ResponseSet**](ResponseSet.html)

<a name="putOutboundCampaign"></a>

# [**Campaign**](Campaign.html) putOutboundCampaign(campaignId, body)

PUT /api/v2/outbound/campaigns/{campaignId}

Update a campaign.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var campaignId = "campaignId_example"; // String | Campaign ID

var body = new platformClient.Campaign(); // Campaign | Campaign

apiInstance.putOutboundCampaign(campaignId, body)
  .then(function(data) {
    console.log(`putOutboundCampaign success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putOutboundCampaign');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String**| Campaign ID |  |
 **body** | [**Campaign**](Campaign.html)| Campaign |  |
{: class="table table-striped"}

### Return type

[**Campaign**](Campaign.html)

<a name="putOutboundCampaignAgent"></a>

# **&#39;String&#39;** putOutboundCampaignAgent(campaignId, userId, body)

PUT /api/v2/outbound/campaigns/{campaignId}/agents/{userId}

Send notification that an agent&#39;s state changed 

New agent state.

### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var campaignId = "campaignId_example"; // String | Campaign ID

var userId = "userId_example"; // String | Agent's user ID

var body = new platformClient.Agent(); // Agent | agent

apiInstance.putOutboundCampaignAgent(campaignId, userId, body)
  .then(function(data) {
    console.log(`putOutboundCampaignAgent success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putOutboundCampaignAgent');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String**| Campaign ID |  |
 **userId** | **String**| Agent&#39;s user ID |  |
 **body** | [**Agent**](Agent.html)| agent |  |
{: class="table table-striped"}

### Return type

**&#39;String&#39;**

<a name="putOutboundCampaignrule"></a>

# [**CampaignRule**](CampaignRule.html) putOutboundCampaignrule(campaignRuleId, body)

PUT /api/v2/outbound/campaignrules/{campaignRuleId}

Update Campaign Rule



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var campaignRuleId = "campaignRuleId_example"; // String | Campaign Rule ID

var body = new platformClient.CampaignRule(); // CampaignRule | CampaignRule

apiInstance.putOutboundCampaignrule(campaignRuleId, body)
  .then(function(data) {
    console.log(`putOutboundCampaignrule success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putOutboundCampaignrule');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignRuleId** | **String**| Campaign Rule ID |  |
 **body** | [**CampaignRule**](CampaignRule.html)| CampaignRule |  |
{: class="table table-striped"}

### Return type

[**CampaignRule**](CampaignRule.html)

<a name="putOutboundContactlist"></a>

# [**ContactList**](ContactList.html) putOutboundContactlist(contactListId, body)

PUT /api/v2/outbound/contactlists/{contactListId}

Update a contact list.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var contactListId = "contactListId_example"; // String | ContactList ID

var body = new platformClient.ContactList(); // ContactList | ContactList

apiInstance.putOutboundContactlist(contactListId, body)
  .then(function(data) {
    console.log(`putOutboundContactlist success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putOutboundContactlist');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String**| ContactList ID |  |
 **body** | [**ContactList**](ContactList.html)| ContactList |  |
{: class="table table-striped"}

### Return type

[**ContactList**](ContactList.html)

<a name="putOutboundContactlistContact"></a>

# [**DialerContact**](DialerContact.html) putOutboundContactlistContact(contactListId, contactId, body)

PUT /api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}

Update a contact.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var contactListId = "contactListId_example"; // String | Contact List ID

var contactId = "contactId_example"; // String | Contact ID

var body = new platformClient.DialerContact(); // DialerContact | Contact

apiInstance.putOutboundContactlistContact(contactListId, contactId, body)
  .then(function(data) {
    console.log(`putOutboundContactlistContact success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putOutboundContactlistContact');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListId** | **String**| Contact List ID |  |
 **contactId** | **String**| Contact ID |  |
 **body** | [**DialerContact**](DialerContact.html)| Contact |  |
{: class="table table-striped"}

### Return type

[**DialerContact**](DialerContact.html)

<a name="putOutboundContactlistfilter"></a>

# [**ContactListFilter**](ContactListFilter.html) putOutboundContactlistfilter(contactListFilterId, body)

PUT /api/v2/outbound/contactlistfilters/{contactListFilterId}

Update Contact List Filter



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var contactListFilterId = "contactListFilterId_example"; // String | Contact List Filter ID

var body = new platformClient.ContactListFilter(); // ContactListFilter | ContactListFilter

apiInstance.putOutboundContactlistfilter(contactListFilterId, body)
  .then(function(data) {
    console.log(`putOutboundContactlistfilter success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putOutboundContactlistfilter');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactListFilterId** | **String**| Contact List Filter ID |  |
 **body** | [**ContactListFilter**](ContactListFilter.html)| ContactListFilter |  |
{: class="table table-striped"}

### Return type

[**ContactListFilter**](ContactListFilter.html)

<a name="putOutboundDnclist"></a>

# [**DncList**](DncList.html) putOutboundDnclist(dncListId, body)

PUT /api/v2/outbound/dnclists/{dncListId}

Update dialer DNC list



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var dncListId = "dncListId_example"; // String | DncList ID

var body = new platformClient.DncList(); // DncList | DncList

apiInstance.putOutboundDnclist(dncListId, body)
  .then(function(data) {
    console.log(`putOutboundDnclist success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putOutboundDnclist');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dncListId** | **String**| DncList ID |  |
 **body** | [**DncList**](DncList.html)| DncList |  |
{: class="table table-striped"}

### Return type

[**DncList**](DncList.html)

<a name="putOutboundRuleset"></a>

# [**RuleSet**](RuleSet.html) putOutboundRuleset(ruleSetId, body)

PUT /api/v2/outbound/rulesets/{ruleSetId}

Update a RuleSet.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var ruleSetId = "ruleSetId_example"; // String | Rule Set ID

var body = new platformClient.RuleSet(); // RuleSet | RuleSet

apiInstance.putOutboundRuleset(ruleSetId, body)
  .then(function(data) {
    console.log(`putOutboundRuleset success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putOutboundRuleset');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleSetId** | **String**| Rule Set ID |  |
 **body** | [**RuleSet**](RuleSet.html)| RuleSet |  |
{: class="table table-striped"}

### Return type

[**RuleSet**](RuleSet.html)

<a name="putOutboundSchedulesCampaign"></a>

# [**CampaignSchedule**](CampaignSchedule.html) putOutboundSchedulesCampaign(campaignId, body)

PUT /api/v2/outbound/schedules/campaigns/{campaignId}

Update a new campaign schedule.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var campaignId = "campaignId_example"; // String | Campaign ID

var body = new platformClient.CampaignSchedule(); // CampaignSchedule | CampaignSchedule

apiInstance.putOutboundSchedulesCampaign(campaignId, body)
  .then(function(data) {
    console.log(`putOutboundSchedulesCampaign success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putOutboundSchedulesCampaign');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **campaignId** | **String**| Campaign ID |  |
 **body** | [**CampaignSchedule**](CampaignSchedule.html)| CampaignSchedule |  |
{: class="table table-striped"}

### Return type

[**CampaignSchedule**](CampaignSchedule.html)

<a name="putOutboundSchedulesSequence"></a>

# [**SequenceSchedule**](SequenceSchedule.html) putOutboundSchedulesSequence(sequenceId, body)

PUT /api/v2/outbound/schedules/sequences/{sequenceId}

Update a new sequence schedule.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var sequenceId = "sequenceId_example"; // String | Sequence ID

var body = new platformClient.SequenceSchedule(); // SequenceSchedule | SequenceSchedule

apiInstance.putOutboundSchedulesSequence(sequenceId, body)
  .then(function(data) {
    console.log(`putOutboundSchedulesSequence success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putOutboundSchedulesSequence');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sequenceId** | **String**| Sequence ID |  |
 **body** | [**SequenceSchedule**](SequenceSchedule.html)| SequenceSchedule |  |
{: class="table table-striped"}

### Return type

[**SequenceSchedule**](SequenceSchedule.html)

<a name="putOutboundSequence"></a>

# [**CampaignSequence**](CampaignSequence.html) putOutboundSequence(sequenceId, body)

PUT /api/v2/outbound/sequences/{sequenceId}

Update a new campaign sequence.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var sequenceId = "sequenceId_example"; // String | Campaign Sequence ID

var body = new platformClient.CampaignSequence(); // CampaignSequence | Organization

apiInstance.putOutboundSequence(sequenceId, body)
  .then(function(data) {
    console.log(`putOutboundSequence success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putOutboundSequence');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sequenceId** | **String**| Campaign Sequence ID |  |
 **body** | [**CampaignSequence**](CampaignSequence.html)| Organization |  |
{: class="table table-striped"}

### Return type

[**CampaignSequence**](CampaignSequence.html)

<a name="putOutboundWrapupcodemappings"></a>

# [**WrapUpCodeMapping**](WrapUpCodeMapping.html) putOutboundWrapupcodemappings(body)

PUT /api/v2/outbound/wrapupcodemappings

Update the Dialer wrap up code mapping.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OutboundApi();

var body = new platformClient.WrapUpCodeMapping(); // WrapUpCodeMapping | wrapUpCodeMapping

apiInstance.putOutboundWrapupcodemappings(body)
  .then(function(data) {
    console.log(`putOutboundWrapupcodemappings success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putOutboundWrapupcodemappings');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**WrapUpCodeMapping**](WrapUpCodeMapping.html)| wrapUpCodeMapping |  |
{: class="table table-striped"}

### Return type

[**WrapUpCodeMapping**](WrapUpCodeMapping.html)

