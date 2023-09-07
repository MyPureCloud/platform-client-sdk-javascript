---
title: RoutingApi
---
# platformClient.RoutingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteRoutingAssessment**](RoutingApi.html#deleteRoutingAssessment) | **DELETE** /api/v2/routing/assessments/{assessmentId} | Delete single benefit assessment.
[**deleteRoutingEmailDomain**](RoutingApi.html#deleteRoutingEmailDomain) | **DELETE** /api/v2/routing/email/domains/{domainId} | Delete a domain
[**deleteRoutingEmailDomainRoute**](RoutingApi.html#deleteRoutingEmailDomainRoute) | **DELETE** /api/v2/routing/email/domains/{domainName}/routes/{routeId} | Delete a route
[**deleteRoutingEmailOutboundDomain**](RoutingApi.html#deleteRoutingEmailOutboundDomain) | **DELETE** /api/v2/routing/email/outbound/domains/{domainId} | Delete an outbound domain
[**deleteRoutingLanguage**](RoutingApi.html#deleteRoutingLanguage) | **DELETE** /api/v2/routing/languages/{languageId} | Delete a routing language
[**deleteRoutingPredictor**](RoutingApi.html#deleteRoutingPredictor) | **DELETE** /api/v2/routing/predictors/{predictorId} | Delete single predictor.
[**deleteRoutingQueue**](RoutingApi.html#deleteRoutingQueue) | **DELETE** /api/v2/routing/queues/{queueId} | Delete a queue
[**deleteRoutingQueueMember**](RoutingApi.html#deleteRoutingQueueMember) | **DELETE** /api/v2/routing/queues/{queueId}/members/{memberId} | Delete a queue member.
[**deleteRoutingQueueUser**](RoutingApi.html#deleteRoutingQueueUser) | **DELETE** /api/v2/routing/queues/{queueId}/users/{memberId} | DEPRECATED: use DELETE /routing/queues/{queueId}/members/{memberId}.  Delete queue member.
[**deleteRoutingQueueWrapupcode**](RoutingApi.html#deleteRoutingQueueWrapupcode) | **DELETE** /api/v2/routing/queues/{queueId}/wrapupcodes/{codeId} | Delete a wrap-up code from a queue
[**deleteRoutingSettings**](RoutingApi.html#deleteRoutingSettings) | **DELETE** /api/v2/routing/settings | Delete an organization's routing settings
[**deleteRoutingSkill**](RoutingApi.html#deleteRoutingSkill) | **DELETE** /api/v2/routing/skills/{skillId} | Delete Routing Skill
[**deleteRoutingSkillgroup**](RoutingApi.html#deleteRoutingSkillgroup) | **DELETE** /api/v2/routing/skillgroups/{skillGroupId} | Remove skill group definition
[**deleteRoutingSmsAddress**](RoutingApi.html#deleteRoutingSmsAddress) | **DELETE** /api/v2/routing/sms/addresses/{addressId} | Delete an Address by Id for SMS
[**deleteRoutingSmsPhonenumber**](RoutingApi.html#deleteRoutingSmsPhonenumber) | **DELETE** /api/v2/routing/sms/phonenumbers/{addressId} | Delete a phone number provisioned for SMS.
[**deleteRoutingUserUtilization**](RoutingApi.html#deleteRoutingUserUtilization) | **DELETE** /api/v2/routing/users/{userId}/utilization | Delete the user's max utilization settings and revert to the organization-wide default.
[**deleteRoutingUtilization**](RoutingApi.html#deleteRoutingUtilization) | **DELETE** /api/v2/routing/utilization | Delete the organization-wide max utilization settings and revert to the system default.
[**deleteRoutingUtilizationTag**](RoutingApi.html#deleteRoutingUtilizationTag) | **DELETE** /api/v2/routing/utilization/tags/{tagId} | Delete an utilization tag
[**deleteRoutingWrapupcode**](RoutingApi.html#deleteRoutingWrapupcode) | **DELETE** /api/v2/routing/wrapupcodes/{codeId} | Delete wrap-up code
[**deleteUserRoutinglanguage**](RoutingApi.html#deleteUserRoutinglanguage) | **DELETE** /api/v2/users/{userId}/routinglanguages/{languageId} | Remove routing language from user
[**deleteUserRoutingskill**](RoutingApi.html#deleteUserRoutingskill) | **DELETE** /api/v2/users/{userId}/routingskills/{skillId} | Remove routing skill from user
[**getRoutingAssessment**](RoutingApi.html#getRoutingAssessment) | **GET** /api/v2/routing/assessments/{assessmentId} | Retrieve a single benefit assessment.
[**getRoutingAssessments**](RoutingApi.html#getRoutingAssessments) | **GET** /api/v2/routing/assessments | Retrieve all benefit assessments.
[**getRoutingAssessmentsJob**](RoutingApi.html#getRoutingAssessmentsJob) | **GET** /api/v2/routing/assessments/jobs/{jobId} | Retrieve a single benefit assessments job.
[**getRoutingAssessmentsJobs**](RoutingApi.html#getRoutingAssessmentsJobs) | **GET** /api/v2/routing/assessments/jobs | Retrieve all benefit assessment jobs.
[**getRoutingAvailablemediatypes**](RoutingApi.html#getRoutingAvailablemediatypes) | **GET** /api/v2/routing/availablemediatypes | Get available media types
[**getRoutingEmailDomain**](RoutingApi.html#getRoutingEmailDomain) | **GET** /api/v2/routing/email/domains/{domainId} | Get domain
[**getRoutingEmailDomainRoute**](RoutingApi.html#getRoutingEmailDomainRoute) | **GET** /api/v2/routing/email/domains/{domainName}/routes/{routeId} | Get a route
[**getRoutingEmailDomainRoutes**](RoutingApi.html#getRoutingEmailDomainRoutes) | **GET** /api/v2/routing/email/domains/{domainName}/routes | Get routes
[**getRoutingEmailDomains**](RoutingApi.html#getRoutingEmailDomains) | **GET** /api/v2/routing/email/domains | Get domains
[**getRoutingEmailOutboundDomain**](RoutingApi.html#getRoutingEmailOutboundDomain) | **GET** /api/v2/routing/email/outbound/domains/{domainId} | Get domain
[**getRoutingEmailOutboundDomainActivation**](RoutingApi.html#getRoutingEmailOutboundDomainActivation) | **GET** /api/v2/routing/email/outbound/domains/{domainId}/activation | Get activation status (cname + dkim) of an outbound domain
[**getRoutingEmailOutboundDomainSearch**](RoutingApi.html#getRoutingEmailOutboundDomainSearch) | **GET** /api/v2/routing/email/outbound/domains/{domainId}/search | Search a domain across organizations
[**getRoutingEmailOutboundDomains**](RoutingApi.html#getRoutingEmailOutboundDomains) | **GET** /api/v2/routing/email/outbound/domains | Get outbound domains
[**getRoutingEmailSetup**](RoutingApi.html#getRoutingEmailSetup) | **GET** /api/v2/routing/email/setup | Get email setup
[**getRoutingLanguage**](RoutingApi.html#getRoutingLanguage) | **GET** /api/v2/routing/languages/{languageId} | Get a routing language
[**getRoutingLanguages**](RoutingApi.html#getRoutingLanguages) | **GET** /api/v2/routing/languages | Get the list of supported languages.
[**getRoutingMessageRecipient**](RoutingApi.html#getRoutingMessageRecipient) | **GET** /api/v2/routing/message/recipients/{recipientId} | Get a recipient
[**getRoutingMessageRecipients**](RoutingApi.html#getRoutingMessageRecipients) | **GET** /api/v2/routing/message/recipients | Get recipients
[**getRoutingPredictor**](RoutingApi.html#getRoutingPredictor) | **GET** /api/v2/routing/predictors/{predictorId} | Retrieve a single predictor.
[**getRoutingPredictorModelFeatures**](RoutingApi.html#getRoutingPredictorModelFeatures) | **GET** /api/v2/routing/predictors/{predictorId}/models/{modelId}/features | Retrieve Predictor Model Features.
[**getRoutingPredictorModels**](RoutingApi.html#getRoutingPredictorModels) | **GET** /api/v2/routing/predictors/{predictorId}/models | Retrieve Predictor Models and Top Features.
[**getRoutingPredictors**](RoutingApi.html#getRoutingPredictors) | **GET** /api/v2/routing/predictors | Retrieve all predictors.
[**getRoutingPredictorsKeyperformanceindicators**](RoutingApi.html#getRoutingPredictorsKeyperformanceindicators) | **GET** /api/v2/routing/predictors/keyperformanceindicators | Get a list of Key Performance Indicators
[**getRoutingQueue**](RoutingApi.html#getRoutingQueue) | **GET** /api/v2/routing/queues/{queueId} | Get details about this queue.
[**getRoutingQueueComparisonperiod**](RoutingApi.html#getRoutingQueueComparisonperiod) | **GET** /api/v2/routing/queues/{queueId}/comparisonperiods/{comparisonPeriodId} | Get a Comparison Period.
[**getRoutingQueueComparisonperiods**](RoutingApi.html#getRoutingQueueComparisonperiods) | **GET** /api/v2/routing/queues/{queueId}/comparisonperiods | Get list of comparison periods
[**getRoutingQueueEstimatedwaittime**](RoutingApi.html#getRoutingQueueEstimatedwaittime) | **GET** /api/v2/routing/queues/{queueId}/estimatedwaittime | Get Estimated Wait Time
[**getRoutingQueueMediatypeEstimatedwaittime**](RoutingApi.html#getRoutingQueueMediatypeEstimatedwaittime) | **GET** /api/v2/routing/queues/{queueId}/mediatypes/{mediaType}/estimatedwaittime | Get Estimated Wait Time
[**getRoutingQueueMembers**](RoutingApi.html#getRoutingQueueMembers) | **GET** /api/v2/routing/queues/{queueId}/members | Get the members of this queue.
[**getRoutingQueueUsers**](RoutingApi.html#getRoutingQueueUsers) | **GET** /api/v2/routing/queues/{queueId}/users | DEPRECATED: use GET /routing/queues/{queueId}/members.  Get the members of this queue.
[**getRoutingQueueWrapupcodes**](RoutingApi.html#getRoutingQueueWrapupcodes) | **GET** /api/v2/routing/queues/{queueId}/wrapupcodes | Get the wrap-up codes for a queue
[**getRoutingQueues**](RoutingApi.html#getRoutingQueues) | **GET** /api/v2/routing/queues | Get list of queues.
[**getRoutingQueuesDivisionviews**](RoutingApi.html#getRoutingQueuesDivisionviews) | **GET** /api/v2/routing/queues/divisionviews | Get a paged listing of simplified queue objects, filterable by name, queue ID(s), or division ID(s).
[**getRoutingQueuesDivisionviewsAll**](RoutingApi.html#getRoutingQueuesDivisionviewsAll) | **GET** /api/v2/routing/queues/divisionviews/all | Get a paged listing of simplified queue objects, sorted by name.  Can be used to get a digest of all queues in an organization.
[**getRoutingQueuesMe**](RoutingApi.html#getRoutingQueuesMe) | **GET** /api/v2/routing/queues/me | Get a paged listing of queues the user is a member of.
[**getRoutingSettings**](RoutingApi.html#getRoutingSettings) | **GET** /api/v2/routing/settings | Get an organization's routing settings
[**getRoutingSettingsContactcenter**](RoutingApi.html#getRoutingSettingsContactcenter) | **GET** /api/v2/routing/settings/contactcenter | Get Contact Center Settings
[**getRoutingSettingsTranscription**](RoutingApi.html#getRoutingSettingsTranscription) | **GET** /api/v2/routing/settings/transcription | Get Transcription Settings
[**getRoutingSkill**](RoutingApi.html#getRoutingSkill) | **GET** /api/v2/routing/skills/{skillId} | Get Routing Skill
[**getRoutingSkillgroup**](RoutingApi.html#getRoutingSkillgroup) | **GET** /api/v2/routing/skillgroups/{skillGroupId} | Get skill group
[**getRoutingSkillgroupMembers**](RoutingApi.html#getRoutingSkillgroupMembers) | **GET** /api/v2/routing/skillgroups/{skillGroupId}/members | Get skill group members
[**getRoutingSkillgroupMembersDivisions**](RoutingApi.html#getRoutingSkillgroupMembersDivisions) | **GET** /api/v2/routing/skillgroups/{skillGroupId}/members/divisions | Get list of member divisions for this skill group.
[**getRoutingSkillgroups**](RoutingApi.html#getRoutingSkillgroups) | **GET** /api/v2/routing/skillgroups | Get skill group listing
[**getRoutingSkills**](RoutingApi.html#getRoutingSkills) | **GET** /api/v2/routing/skills | Get the list of routing skills.
[**getRoutingSmsAddress**](RoutingApi.html#getRoutingSmsAddress) | **GET** /api/v2/routing/sms/addresses/{addressId} | Get an Address by Id for SMS
[**getRoutingSmsAddresses**](RoutingApi.html#getRoutingSmsAddresses) | **GET** /api/v2/routing/sms/addresses | Get a list of Addresses for SMS
[**getRoutingSmsAvailablephonenumbers**](RoutingApi.html#getRoutingSmsAvailablephonenumbers) | **GET** /api/v2/routing/sms/availablephonenumbers | Get a list of available phone numbers for SMS provisioning.
[**getRoutingSmsPhonenumber**](RoutingApi.html#getRoutingSmsPhonenumber) | **GET** /api/v2/routing/sms/phonenumbers/{addressId} | Get a phone number provisioned for SMS.
[**getRoutingSmsPhonenumbers**](RoutingApi.html#getRoutingSmsPhonenumbers) | **GET** /api/v2/routing/sms/phonenumbers | Get a list of provisioned phone numbers.
[**getRoutingUserUtilization**](RoutingApi.html#getRoutingUserUtilization) | **GET** /api/v2/routing/users/{userId}/utilization | Get the user's max utilization settings.  If not configured, the organization-wide default is returned.
[**getRoutingUtilization**](RoutingApi.html#getRoutingUtilization) | **GET** /api/v2/routing/utilization | Get the organization-wide max utilization settings.
[**getRoutingUtilizationTag**](RoutingApi.html#getRoutingUtilizationTag) | **GET** /api/v2/routing/utilization/tags/{tagId} | Get details about this utilization tag
[**getRoutingUtilizationTagAgents**](RoutingApi.html#getRoutingUtilizationTagAgents) | **GET** /api/v2/routing/utilization/tags/{tagId}/agents | Get list of agent ids associated with a utilization tag
[**getRoutingUtilizationTags**](RoutingApi.html#getRoutingUtilizationTags) | **GET** /api/v2/routing/utilization/tags | Get list of utilization tags
[**getRoutingWrapupcode**](RoutingApi.html#getRoutingWrapupcode) | **GET** /api/v2/routing/wrapupcodes/{codeId} | Get details about this wrap-up code.
[**getRoutingWrapupcodes**](RoutingApi.html#getRoutingWrapupcodes) | **GET** /api/v2/routing/wrapupcodes | Get list of wrapup codes.
[**getUserQueues**](RoutingApi.html#getUserQueues) | **GET** /api/v2/users/{userId}/queues | Get queues for user
[**getUserRoutinglanguages**](RoutingApi.html#getUserRoutinglanguages) | **GET** /api/v2/users/{userId}/routinglanguages | List routing language for user
[**getUserRoutingskills**](RoutingApi.html#getUserRoutingskills) | **GET** /api/v2/users/{userId}/routingskills | List routing skills for user
[**getUserSkillgroups**](RoutingApi.html#getUserSkillgroups) | **GET** /api/v2/users/{userId}/skillgroups | Get skill groups for a user
[**patchRoutingConversation**](RoutingApi.html#patchRoutingConversation) | **PATCH** /api/v2/routing/conversations/{conversationId} | Update attributes of an in-queue conversation
[**patchRoutingEmailDomain**](RoutingApi.html#patchRoutingEmailDomain) | **PATCH** /api/v2/routing/email/domains/{domainId} | Update domain settings
[**patchRoutingEmailDomainValidate**](RoutingApi.html#patchRoutingEmailDomainValidate) | **PATCH** /api/v2/routing/email/domains/{domainId}/validate | Validate domain settings
[**patchRoutingPredictor**](RoutingApi.html#patchRoutingPredictor) | **PATCH** /api/v2/routing/predictors/{predictorId} | Update single predictor.
[**patchRoutingQueueMember**](RoutingApi.html#patchRoutingQueueMember) | **PATCH** /api/v2/routing/queues/{queueId}/members/{memberId} | Update the ring number OR joined status for a queue member.
[**patchRoutingQueueMembers**](RoutingApi.html#patchRoutingQueueMembers) | **PATCH** /api/v2/routing/queues/{queueId}/members | Join or unjoin a set of users for a queue
[**patchRoutingQueueUser**](RoutingApi.html#patchRoutingQueueUser) | **PATCH** /api/v2/routing/queues/{queueId}/users/{memberId} | DEPRECATED: use PATCH /routing/queues/{queueId}/members/{memberId}.  Update the ring number OR joined status for a User in a Queue.
[**patchRoutingQueueUsers**](RoutingApi.html#patchRoutingQueueUsers) | **PATCH** /api/v2/routing/queues/{queueId}/users | DEPRECATED: use PATCH /routing/queues/{queueId}/members.  Join or unjoin a set of users for a queue.
[**patchRoutingSettingsContactcenter**](RoutingApi.html#patchRoutingSettingsContactcenter) | **PATCH** /api/v2/routing/settings/contactcenter | Update Contact Center Settings
[**patchRoutingSkillgroup**](RoutingApi.html#patchRoutingSkillgroup) | **PATCH** /api/v2/routing/skillgroups/{skillGroupId} | Update skill group definition
[**patchUserQueue**](RoutingApi.html#patchUserQueue) | **PATCH** /api/v2/users/{userId}/queues/{queueId} | Join or unjoin a queue for a user
[**patchUserQueues**](RoutingApi.html#patchUserQueues) | **PATCH** /api/v2/users/{userId}/queues | Join or unjoin a set of queues for a user
[**patchUserRoutinglanguage**](RoutingApi.html#patchUserRoutinglanguage) | **PATCH** /api/v2/users/{userId}/routinglanguages/{languageId} | Update routing language proficiency or state.
[**patchUserRoutinglanguagesBulk**](RoutingApi.html#patchUserRoutinglanguagesBulk) | **PATCH** /api/v2/users/{userId}/routinglanguages/bulk | Add bulk routing language to user. Max limit 50 languages
[**patchUserRoutingskillsBulk**](RoutingApi.html#patchUserRoutingskillsBulk) | **PATCH** /api/v2/users/{userId}/routingskills/bulk | Bulk add routing skills to user
[**postAnalyticsQueuesObservationsQuery**](RoutingApi.html#postAnalyticsQueuesObservationsQuery) | **POST** /api/v2/analytics/queues/observations/query | Query for queue observations
[**postAnalyticsRoutingActivityQuery**](RoutingApi.html#postAnalyticsRoutingActivityQuery) | **POST** /api/v2/analytics/routing/activity/query | Query for user activity observations
[**postRoutingAssessments**](RoutingApi.html#postRoutingAssessments) | **POST** /api/v2/routing/assessments | Create a benefit assessment.
[**postRoutingAssessmentsJobs**](RoutingApi.html#postRoutingAssessmentsJobs) | **POST** /api/v2/routing/assessments/jobs | Create a benefit assessment job.
[**postRoutingEmailDomainRoutes**](RoutingApi.html#postRoutingEmailDomainRoutes) | **POST** /api/v2/routing/email/domains/{domainName}/routes | Create a route
[**postRoutingEmailDomainTestconnection**](RoutingApi.html#postRoutingEmailDomainTestconnection) | **POST** /api/v2/routing/email/domains/{domainId}/testconnection | Tests the custom SMTP server integration connection set on this domain
[**postRoutingEmailDomains**](RoutingApi.html#postRoutingEmailDomains) | **POST** /api/v2/routing/email/domains | Create a domain
[**postRoutingEmailOutboundDomains**](RoutingApi.html#postRoutingEmailOutboundDomains) | **POST** /api/v2/routing/email/outbound/domains | Create a domain
[**postRoutingEmailOutboundDomainsSimulated**](RoutingApi.html#postRoutingEmailOutboundDomainsSimulated) | **POST** /api/v2/routing/email/outbound/domains/simulated | Create a simulated domain
[**postRoutingLanguages**](RoutingApi.html#postRoutingLanguages) | **POST** /api/v2/routing/languages | Create Language
[**postRoutingPredictors**](RoutingApi.html#postRoutingPredictors) | **POST** /api/v2/routing/predictors | Create a predictor.
[**postRoutingQueueMembers**](RoutingApi.html#postRoutingQueueMembers) | **POST** /api/v2/routing/queues/{queueId}/members | Bulk add or delete up to 100 queue members
[**postRoutingQueueUsers**](RoutingApi.html#postRoutingQueueUsers) | **POST** /api/v2/routing/queues/{queueId}/users | DEPRECATED: use POST /routing/queues/{queueId}/members.  Bulk add or delete up to 100 queue members.
[**postRoutingQueueWrapupcodes**](RoutingApi.html#postRoutingQueueWrapupcodes) | **POST** /api/v2/routing/queues/{queueId}/wrapupcodes | Add up to 100 wrap-up codes to a queue
[**postRoutingQueues**](RoutingApi.html#postRoutingQueues) | **POST** /api/v2/routing/queues | Create a queue
[**postRoutingSkillgroupMembersDivisions**](RoutingApi.html#postRoutingSkillgroupMembersDivisions) | **POST** /api/v2/routing/skillgroups/{skillGroupId}/members/divisions | Add or remove member divisions for this skill group.
[**postRoutingSkillgroups**](RoutingApi.html#postRoutingSkillgroups) | **POST** /api/v2/routing/skillgroups | Create a skill group
[**postRoutingSkills**](RoutingApi.html#postRoutingSkills) | **POST** /api/v2/routing/skills | Create Skill
[**postRoutingSmsAddresses**](RoutingApi.html#postRoutingSmsAddresses) | **POST** /api/v2/routing/sms/addresses | Provision an Address for SMS
[**postRoutingSmsPhonenumbers**](RoutingApi.html#postRoutingSmsPhonenumbers) | **POST** /api/v2/routing/sms/phonenumbers | Provision a phone number for SMS
[**postRoutingSmsPhonenumbersImport**](RoutingApi.html#postRoutingSmsPhonenumbersImport) | **POST** /api/v2/routing/sms/phonenumbers/import | Imports a phone number for SMS
[**postRoutingUtilizationTags**](RoutingApi.html#postRoutingUtilizationTags) | **POST** /api/v2/routing/utilization/tags | Create an utilization tag
[**postRoutingWrapupcodes**](RoutingApi.html#postRoutingWrapupcodes) | **POST** /api/v2/routing/wrapupcodes | Create a wrap-up code
[**postUserRoutinglanguages**](RoutingApi.html#postUserRoutinglanguages) | **POST** /api/v2/users/{userId}/routinglanguages | Add routing language to user
[**postUserRoutingskills**](RoutingApi.html#postUserRoutingskills) | **POST** /api/v2/users/{userId}/routingskills | Add routing skill to user
[**putRoutingEmailDomainRoute**](RoutingApi.html#putRoutingEmailDomainRoute) | **PUT** /api/v2/routing/email/domains/{domainName}/routes/{routeId} | Update a route
[**putRoutingEmailOutboundDomainActivation**](RoutingApi.html#putRoutingEmailOutboundDomainActivation) | **PUT** /api/v2/routing/email/outbound/domains/{domainId}/activation | Request an activation status (cname + dkim) update of an outbound domain
[**putRoutingMessageRecipient**](RoutingApi.html#putRoutingMessageRecipient) | **PUT** /api/v2/routing/message/recipients/{recipientId} | Update a recipient
[**putRoutingQueue**](RoutingApi.html#putRoutingQueue) | **PUT** /api/v2/routing/queues/{queueId} | Update a queue
[**putRoutingSettings**](RoutingApi.html#putRoutingSettings) | **PUT** /api/v2/routing/settings | Update an organization's routing settings
[**putRoutingSettingsTranscription**](RoutingApi.html#putRoutingSettingsTranscription) | **PUT** /api/v2/routing/settings/transcription | Update Transcription Settings
[**putRoutingSmsPhonenumber**](RoutingApi.html#putRoutingSmsPhonenumber) | **PUT** /api/v2/routing/sms/phonenumbers/{addressId} | Update a phone number provisioned for SMS.
[**putRoutingUserUtilization**](RoutingApi.html#putRoutingUserUtilization) | **PUT** /api/v2/routing/users/{userId}/utilization | Update the user's max utilization settings.  Include only those media types requiring custom configuration.
[**putRoutingUtilization**](RoutingApi.html#putRoutingUtilization) | **PUT** /api/v2/routing/utilization | Update the organization-wide max utilization settings.  Include only those media types requiring custom configuration.
[**putRoutingWrapupcode**](RoutingApi.html#putRoutingWrapupcode) | **PUT** /api/v2/routing/wrapupcodes/{codeId} | Update wrap-up code
[**putUserRoutingskill**](RoutingApi.html#putUserRoutingskill) | **PUT** /api/v2/users/{userId}/routingskills/{skillId} | Update routing skill proficiency or state.
[**putUserRoutingskillsBulk**](RoutingApi.html#putUserRoutingskillsBulk) | **PUT** /api/v2/users/{userId}/routingskills/bulk | Replace all routing skills assigned to a user
{: class="table table-striped"}

<a name="deleteRoutingAssessment"></a>

# void deleteRoutingAssessment(assessmentId)


DELETE /api/v2/routing/assessments/{assessmentId}

Delete single benefit assessment.

Requires ANY permissions:

* routing:assessment:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let assessmentId = "assessmentId_example"; // String | Benefit Assessment ID

apiInstance.deleteRoutingAssessment(assessmentId)
  .then(() => {
    console.log('deleteRoutingAssessment returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingAssessment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assessmentId** | **String** | Benefit Assessment ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingEmailDomain"></a>

# void deleteRoutingEmailDomain(domainId)


DELETE /api/v2/routing/email/domains/{domainId}

Delete a domain

Requires ALL permissions:

* routing:email:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainId = "domainId_example"; // String | domain ID

apiInstance.deleteRoutingEmailDomain(domainId)
  .then(() => {
    console.log('deleteRoutingEmailDomain returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingEmailDomain');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | domain ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingEmailDomainRoute"></a>

# void deleteRoutingEmailDomainRoute(domainName, routeId)


DELETE /api/v2/routing/email/domains/{domainName}/routes/{routeId}

Delete a route

Requires ALL permissions:

* routing:email:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainName = "domainName_example"; // String | email domain
let routeId = "routeId_example"; // String | route ID

apiInstance.deleteRoutingEmailDomainRoute(domainName, routeId)
  .then(() => {
    console.log('deleteRoutingEmailDomainRoute returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingEmailDomainRoute');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainName** | **String** | email domain |  |
 **routeId** | **String** | route ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingEmailOutboundDomain"></a>

# void deleteRoutingEmailOutboundDomain(domainId)


DELETE /api/v2/routing/email/outbound/domains/{domainId}

Delete an outbound domain

Requires ALL permissions:

* routing:email:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainId = "domainId_example"; // String | domain ID

apiInstance.deleteRoutingEmailOutboundDomain(domainId)
  .then(() => {
    console.log('deleteRoutingEmailOutboundDomain returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingEmailOutboundDomain');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | domain ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingLanguage"></a>

# void deleteRoutingLanguage(languageId)


DELETE /api/v2/routing/languages/{languageId}

Delete a routing language

Requires ANY permissions:

* routing:skill:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let languageId = "languageId_example"; // String | Language ID

apiInstance.deleteRoutingLanguage(languageId)
  .then(() => {
    console.log('deleteRoutingLanguage returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingLanguage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **languageId** | **String** | Language ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingPredictor"></a>

# void deleteRoutingPredictor(predictorId)


DELETE /api/v2/routing/predictors/{predictorId}

Delete single predictor.

Requires ALL permissions:

* routing:predictor:delete
* routing:queue:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let predictorId = "predictorId_example"; // String | Predictor ID

apiInstance.deleteRoutingPredictor(predictorId)
  .then(() => {
    console.log('deleteRoutingPredictor returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingPredictor');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **predictorId** | **String** | Predictor ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingQueue"></a>

# void deleteRoutingQueue(queueId, opts)


DELETE /api/v2/routing/queues/{queueId}

Delete a queue

Requires ALL permissions:

* routing:queue:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let opts = { 
  'forceDelete': true // Boolean | forceDelete
};

apiInstance.deleteRoutingQueue(queueId, opts)
  .then(() => {
    console.log('deleteRoutingQueue returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingQueue');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **forceDelete** | **Boolean** | forceDelete | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingQueueMember"></a>

# void deleteRoutingQueueMember(queueId, memberId)


DELETE /api/v2/routing/queues/{queueId}/members/{memberId}

Delete a queue member.

Requires ANY permissions:

* routing:queue:edit
* routing:queueMember:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let memberId = "memberId_example"; // String | Member ID

apiInstance.deleteRoutingQueueMember(queueId, memberId)
  .then(() => {
    console.log('deleteRoutingQueueMember returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingQueueMember');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **memberId** | **String** | Member ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingQueueUser"></a>

# void deleteRoutingQueueUser(queueId, memberId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

DELETE /api/v2/routing/queues/{queueId}/users/{memberId}

DEPRECATED: use DELETE /routing/queues/{queueId}/members/{memberId}.  Delete queue member.

Requires ANY permissions:

* routing:queue:edit
* routing:queueMember:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let memberId = "memberId_example"; // String | Member ID

apiInstance.deleteRoutingQueueUser(queueId, memberId)
  .then(() => {
    console.log('deleteRoutingQueueUser returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingQueueUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **memberId** | **String** | Member ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingQueueWrapupcode"></a>

# void deleteRoutingQueueWrapupcode(queueId, codeId)


DELETE /api/v2/routing/queues/{queueId}/wrapupcodes/{codeId}

Delete a wrap-up code from a queue

Requires ALL permissions:

* routing:queue:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let codeId = "codeId_example"; // String | Code ID

apiInstance.deleteRoutingQueueWrapupcode(queueId, codeId)
  .then(() => {
    console.log('deleteRoutingQueueWrapupcode returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingQueueWrapupcode');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **codeId** | **String** | Code ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingSettings"></a>

# void deleteRoutingSettings()


DELETE /api/v2/routing/settings

Delete an organization's routing settings

Requires ANY permissions:

* routing:settings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

apiInstance.deleteRoutingSettings()
  .then(() => {
    console.log('deleteRoutingSettings returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

void (no response body)

<a name="deleteRoutingSkill"></a>

# void deleteRoutingSkill(skillId)


DELETE /api/v2/routing/skills/{skillId}

Delete Routing Skill

Requires ALL permissions:

* routing:skill:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let skillId = "skillId_example"; // String | Skill ID

apiInstance.deleteRoutingSkill(skillId)
  .then(() => {
    console.log('deleteRoutingSkill returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingSkill');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **skillId** | **String** | Skill ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingSkillgroup"></a>

# void deleteRoutingSkillgroup(skillGroupId)


DELETE /api/v2/routing/skillgroups/{skillGroupId}

Remove skill group definition

Requires ANY permissions:

* routing:skillGroup:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let skillGroupId = "skillGroupId_example"; // String | Skill Group ID

apiInstance.deleteRoutingSkillgroup(skillGroupId)
  .then(() => {
    console.log('deleteRoutingSkillgroup returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingSkillgroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **skillGroupId** | **String** | Skill Group ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingSmsAddress"></a>

# void deleteRoutingSmsAddress(addressId)


DELETE /api/v2/routing/sms/addresses/{addressId}

Delete an Address by Id for SMS

Requires ALL permissions:

* sms:phoneNumber:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let addressId = "addressId_example"; // String | Address ID

apiInstance.deleteRoutingSmsAddress(addressId)
  .then(() => {
    console.log('deleteRoutingSmsAddress returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingSmsAddress');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **addressId** | **String** | Address ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingSmsPhonenumber"></a>

# void deleteRoutingSmsPhonenumber(addressId)


DELETE /api/v2/routing/sms/phonenumbers/{addressId}

Delete a phone number provisioned for SMS.

Requires ALL permissions:

* sms:phoneNumber:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let addressId = "addressId_example"; // String | Address ID

apiInstance.deleteRoutingSmsPhonenumber(addressId)
  .then(() => {
    console.log('deleteRoutingSmsPhonenumber returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingSmsPhonenumber');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **addressId** | **String** | Address ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingUserUtilization"></a>

# void deleteRoutingUserUtilization(userId)


DELETE /api/v2/routing/users/{userId}/utilization

Delete the user's max utilization settings and revert to the organization-wide default.

Requires ANY permissions:

* routing:utilization:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID

apiInstance.deleteRoutingUserUtilization(userId)
  .then(() => {
    console.log('deleteRoutingUserUtilization returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingUserUtilization');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingUtilization"></a>

# void deleteRoutingUtilization()


DELETE /api/v2/routing/utilization

Delete the organization-wide max utilization settings and revert to the system default.

Requires ALL permissions:

* routing:utilization:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

apiInstance.deleteRoutingUtilization()
  .then(() => {
    console.log('deleteRoutingUtilization returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingUtilization');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

void (no response body)

<a name="deleteRoutingUtilizationTag"></a>

# void deleteRoutingUtilizationTag(tagId, opts)


DELETE /api/v2/routing/utilization/tags/{tagId}

Delete an utilization tag

deleteRoutingUtilizationTag is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* routing:utilization:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let tagId = "tagId_example"; // String | Utilization Tag ID
let opts = { 
  'forceDelete': false // Boolean | Remove all tag usages (if found) without warning
};

apiInstance.deleteRoutingUtilizationTag(tagId, opts)
  .then(() => {
    console.log('deleteRoutingUtilizationTag returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingUtilizationTag');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tagId** | **String** | Utilization Tag ID |  |
 **forceDelete** | **Boolean** | Remove all tag usages (if found) without warning | [optional] [default to false] |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingWrapupcode"></a>

# void deleteRoutingWrapupcode(codeId)


DELETE /api/v2/routing/wrapupcodes/{codeId}

Delete wrap-up code

Requires ALL permissions:

* routing:wrapupCode:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let codeId = "codeId_example"; // String | Wrapup Code ID

apiInstance.deleteRoutingWrapupcode(codeId)
  .then(() => {
    console.log('deleteRoutingWrapupcode returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingWrapupcode');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **codeId** | **String** | Wrapup Code ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteUserRoutinglanguage"></a>

# void deleteUserRoutinglanguage(userId, languageId)


DELETE /api/v2/users/{userId}/routinglanguages/{languageId}

Remove routing language from user

Requires ANY permissions:

* routing:skill:assign
* routing:language:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let languageId = "languageId_example"; // String | languageId

apiInstance.deleteUserRoutinglanguage(userId, languageId)
  .then(() => {
    console.log('deleteUserRoutinglanguage returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteUserRoutinglanguage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **languageId** | **String** | languageId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteUserRoutingskill"></a>

# void deleteUserRoutingskill(userId, skillId)


DELETE /api/v2/users/{userId}/routingskills/{skillId}

Remove routing skill from user

Requires ALL permissions:

* routing:skill:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let skillId = "skillId_example"; // String | skillId

apiInstance.deleteUserRoutingskill(userId, skillId)
  .then(() => {
    console.log('deleteUserRoutingskill returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteUserRoutingskill');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **skillId** | **String** | skillId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getRoutingAssessment"></a>

# BenefitAssessment getRoutingAssessment(assessmentId)


GET /api/v2/routing/assessments/{assessmentId}

Retrieve a single benefit assessment.

Requires ANY permissions:

* routing:assessment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let assessmentId = "assessmentId_example"; // String | Benefit Assessment ID

apiInstance.getRoutingAssessment(assessmentId)
  .then((data) => {
    console.log(`getRoutingAssessment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingAssessment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assessmentId** | **String** | Benefit Assessment ID |  |
{: class="table table-striped"}

### Return type

**BenefitAssessment**

<a name="getRoutingAssessments"></a>

# AssessmentListing getRoutingAssessments(opts)


GET /api/v2/routing/assessments

Retrieve all benefit assessments.

Requires ANY permissions:

* routing:queue:view
* routing:assessment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'limit': "limit_example", // String | Number of entities to return. Maximum of 200. Deprecated in favour of pageSize
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'queueId': ["queueId_example"] // [String] | Queue ID(s) to filter assessments by.
};

apiInstance.getRoutingAssessments(opts)
  .then((data) => {
    console.log(`getRoutingAssessments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingAssessments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **limit** | **String** | Number of entities to return. Maximum of 200. Deprecated in favour of pageSize | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **queueId** | **[String]** | Queue ID(s) to filter assessments by. | [optional]  |
{: class="table table-striped"}

### Return type

**AssessmentListing**

<a name="getRoutingAssessmentsJob"></a>

# BenefitAssessmentJob getRoutingAssessmentsJob(jobId)


GET /api/v2/routing/assessments/jobs/{jobId}

Retrieve a single benefit assessments job.

Requires ANY permissions:

* routing:assessment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let jobId = "jobId_example"; // String | Benefit Assessment Job ID

apiInstance.getRoutingAssessmentsJob(jobId)
  .then((data) => {
    console.log(`getRoutingAssessmentsJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingAssessmentsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | Benefit Assessment Job ID |  |
{: class="table table-striped"}

### Return type

**BenefitAssessmentJob**

<a name="getRoutingAssessmentsJobs"></a>

# AssessmentJobListing getRoutingAssessmentsJobs(opts)


GET /api/v2/routing/assessments/jobs

Retrieve all benefit assessment jobs.

Requires ANY permissions:

* routing:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'divisionId': ["divisionId_example"] // [String] | Division ID(s) to filter assessment jobs by.
};

apiInstance.getRoutingAssessmentsJobs(opts)
  .then((data) => {
    console.log(`getRoutingAssessmentsJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingAssessmentsJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **divisionId** | **[String]** | Division ID(s) to filter assessment jobs by. | [optional]  |
{: class="table table-striped"}

### Return type

**AssessmentJobListing**

<a name="getRoutingAvailablemediatypes"></a>

# AvailableMediaTypeEntityListing getRoutingAvailablemediatypes()


GET /api/v2/routing/availablemediatypes

Get available media types

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

apiInstance.getRoutingAvailablemediatypes()
  .then((data) => {
    console.log(`getRoutingAvailablemediatypes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingAvailablemediatypes');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**AvailableMediaTypeEntityListing**

<a name="getRoutingEmailDomain"></a>

# InboundDomain getRoutingEmailDomain(domainId)


GET /api/v2/routing/email/domains/{domainId}

Get domain

Requires ALL permissions:

* routing:email:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainId = "domainId_example"; // String | domain ID

apiInstance.getRoutingEmailDomain(domainId)
  .then((data) => {
    console.log(`getRoutingEmailDomain success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingEmailDomain');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | domain ID |  |
{: class="table table-striped"}

### Return type

**InboundDomain**

<a name="getRoutingEmailDomainRoute"></a>

# InboundRoute getRoutingEmailDomainRoute(domainName, routeId)


GET /api/v2/routing/email/domains/{domainName}/routes/{routeId}

Get a route

Requires ALL permissions:

* routing:email:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainName = "domainName_example"; // String | email domain
let routeId = "routeId_example"; // String | route ID

apiInstance.getRoutingEmailDomainRoute(domainName, routeId)
  .then((data) => {
    console.log(`getRoutingEmailDomainRoute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingEmailDomainRoute');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainName** | **String** | email domain |  |
 **routeId** | **String** | route ID |  |
{: class="table table-striped"}

### Return type

**InboundRoute**

<a name="getRoutingEmailDomainRoutes"></a>

# InboundRouteEntityListing getRoutingEmailDomainRoutes(domainName, opts)


GET /api/v2/routing/email/domains/{domainName}/routes

Get routes

Requires ALL permissions:

* routing:email:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainName = "domainName_example"; // String | email domain
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'pattern': "pattern_example" // String | Filter routes by the route's pattern property
};

apiInstance.getRoutingEmailDomainRoutes(domainName, opts)
  .then((data) => {
    console.log(`getRoutingEmailDomainRoutes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingEmailDomainRoutes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainName** | **String** | email domain |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pattern** | **String** | Filter routes by the route's pattern property | [optional]  |
{: class="table table-striped"}

### Return type

**InboundRouteEntityListing**

<a name="getRoutingEmailDomains"></a>

# InboundDomainEntityListing getRoutingEmailDomains(opts)


GET /api/v2/routing/email/domains

Get domains

Requires ALL permissions:

* routing:email:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'excludeStatus': false, // Boolean | Exclude MX record data
  'filter': "filter_example" // String | Optional search filter
};

apiInstance.getRoutingEmailDomains(opts)
  .then((data) => {
    console.log(`getRoutingEmailDomains success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingEmailDomains');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **excludeStatus** | **Boolean** | Exclude MX record data | [optional] [default to false] |
 **filter** | **String** | Optional search filter | [optional]  |
{: class="table table-striped"}

### Return type

**InboundDomainEntityListing**

<a name="getRoutingEmailOutboundDomain"></a>

# OutboundDomain getRoutingEmailOutboundDomain(domainId)


GET /api/v2/routing/email/outbound/domains/{domainId}

Get domain

Requires ALL permissions:

* routing:email:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainId = "domainId_example"; // String | domain ID

apiInstance.getRoutingEmailOutboundDomain(domainId)
  .then((data) => {
    console.log(`getRoutingEmailOutboundDomain success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingEmailOutboundDomain');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | domain ID |  |
{: class="table table-striped"}

### Return type

**OutboundDomain**

<a name="getRoutingEmailOutboundDomainActivation"></a>

# EmailOutboundDomainResult getRoutingEmailOutboundDomainActivation(domainId)


GET /api/v2/routing/email/outbound/domains/{domainId}/activation

Get activation status (cname + dkim) of an outbound domain

Requires ALL permissions:

* routing:email:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainId = "domainId_example"; // String | domain ID

apiInstance.getRoutingEmailOutboundDomainActivation(domainId)
  .then((data) => {
    console.log(`getRoutingEmailOutboundDomainActivation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingEmailOutboundDomainActivation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | domain ID |  |
{: class="table table-striped"}

### Return type

**EmailOutboundDomainResult**

<a name="getRoutingEmailOutboundDomainSearch"></a>

# OutboundDomain getRoutingEmailOutboundDomainSearch(domainId)


GET /api/v2/routing/email/outbound/domains/{domainId}/search

Search a domain across organizations

Requires ALL permissions:

* routing:email:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainId = "domainId_example"; // String | domain ID

apiInstance.getRoutingEmailOutboundDomainSearch(domainId)
  .then((data) => {
    console.log(`getRoutingEmailOutboundDomainSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingEmailOutboundDomainSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | domain ID |  |
{: class="table table-striped"}

### Return type

**OutboundDomain**

<a name="getRoutingEmailOutboundDomains"></a>

# OutboundDomainEntityListing getRoutingEmailOutboundDomains(opts)


GET /api/v2/routing/email/outbound/domains

Get outbound domains

Requires ALL permissions:

* routing:email:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'filter': "filter_example" // String | Optional search filter
};

apiInstance.getRoutingEmailOutboundDomains(opts)
  .then((data) => {
    console.log(`getRoutingEmailOutboundDomains success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingEmailOutboundDomains');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **filter** | **String** | Optional search filter | [optional]  |
{: class="table table-striped"}

### Return type

**OutboundDomainEntityListing**

<a name="getRoutingEmailSetup"></a>

# EmailSetup getRoutingEmailSetup()


GET /api/v2/routing/email/setup

Get email setup

Requires ALL permissions:

* routing:email:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

apiInstance.getRoutingEmailSetup()
  .then((data) => {
    console.log(`getRoutingEmailSetup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingEmailSetup');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**EmailSetup**

<a name="getRoutingLanguage"></a>

# Language getRoutingLanguage(languageId)


GET /api/v2/routing/languages/{languageId}

Get a routing language

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let languageId = "languageId_example"; // String | Language ID

apiInstance.getRoutingLanguage(languageId)
  .then((data) => {
    console.log(`getRoutingLanguage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingLanguage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **languageId** | **String** | Language ID |  |
{: class="table table-striped"}

### Return type

**Language**

<a name="getRoutingLanguages"></a>

# LanguageEntityListing getRoutingLanguages(opts)


GET /api/v2/routing/languages

Get the list of supported languages.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ASC", // String | Ascending or descending sort order
  'name': "name_example", // String | Name
  'id': ["id_example"] // [String] | id
};

apiInstance.getRoutingLanguages(opts)
  .then((data) => {
    console.log(`getRoutingLanguages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingLanguages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to ASC]<br />**Values**: ascending, descending |
 **name** | **String** | Name | [optional]  |
 **id** | **[String]** | id | [optional]  |
{: class="table table-striped"}

### Return type

**LanguageEntityListing**

<a name="getRoutingMessageRecipient"></a>

# Recipient getRoutingMessageRecipient(recipientId)


GET /api/v2/routing/message/recipients/{recipientId}

Get a recipient

Requires ALL permissions:

* routing:message:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let recipientId = "recipientId_example"; // String | Recipient ID

apiInstance.getRoutingMessageRecipient(recipientId)
  .then((data) => {
    console.log(`getRoutingMessageRecipient success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingMessageRecipient');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **recipientId** | **String** | Recipient ID |  |
{: class="table table-striped"}

### Return type

**Recipient**

<a name="getRoutingMessageRecipients"></a>

# RecipientListing getRoutingMessageRecipients(opts)


GET /api/v2/routing/message/recipients

Get recipients

Requires ALL permissions:

* routing:message:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'messengerType': "messengerType_example", // String | Messenger Type
  'name': "name_example", // String | Recipient Name
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getRoutingMessageRecipients(opts)
  .then((data) => {
    console.log(`getRoutingMessageRecipients success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingMessageRecipients');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messengerType** | **String** | Messenger Type | [optional] <br />**Values**: sms, facebook, twitter, line, whatsapp, open, instagram |
 **name** | **String** | Recipient Name | [optional]  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**RecipientListing**

<a name="getRoutingPredictor"></a>

# Predictor getRoutingPredictor(predictorId)


GET /api/v2/routing/predictors/{predictorId}

Retrieve a single predictor.

Requires ANY permissions:

* routing:predictor:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let predictorId = "predictorId_example"; // String | Predictor ID

apiInstance.getRoutingPredictor(predictorId)
  .then((data) => {
    console.log(`getRoutingPredictor success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingPredictor');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **predictorId** | **String** | Predictor ID |  |
{: class="table table-striped"}

### Return type

**Predictor**

<a name="getRoutingPredictorModelFeatures"></a>

# PredictorModelFeatureListing getRoutingPredictorModelFeatures(predictorId, modelId)


GET /api/v2/routing/predictors/{predictorId}/models/{modelId}/features

Retrieve Predictor Model Features.

Requires ALL permissions:

* routing:predictorModelFeature:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let predictorId = "predictorId_example"; // String | Predictor ID
let modelId = "modelId_example"; // String | Model ID

apiInstance.getRoutingPredictorModelFeatures(predictorId, modelId)
  .then((data) => {
    console.log(`getRoutingPredictorModelFeatures success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingPredictorModelFeatures');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **predictorId** | **String** | Predictor ID |  |
 **modelId** | **String** | Model ID |  |
{: class="table table-striped"}

### Return type

**PredictorModelFeatureListing**

<a name="getRoutingPredictorModels"></a>

# PredictorModels getRoutingPredictorModels(predictorId)


GET /api/v2/routing/predictors/{predictorId}/models

Retrieve Predictor Models and Top Features.

Requires ALL permissions:

* routing:predictorModel:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let predictorId = "predictorId_example"; // String | Predictor ID

apiInstance.getRoutingPredictorModels(predictorId)
  .then((data) => {
    console.log(`getRoutingPredictorModels success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingPredictorModels');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **predictorId** | **String** | Predictor ID |  |
{: class="table table-striped"}

### Return type

**PredictorModels**

<a name="getRoutingPredictors"></a>

# PredictorListing getRoutingPredictors(opts)


GET /api/v2/routing/predictors

Retrieve all predictors.

Requires ANY permissions:

* routing:predictor:view
* routing:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'limit': "limit_example", // String | Number of entities to return. Maximum of 200. Deprecated in favour of pageSize
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'queueId': ["queueId_example"] // [String] | Comma-separated list of queue Ids to filter by.
};

apiInstance.getRoutingPredictors(opts)
  .then((data) => {
    console.log(`getRoutingPredictors success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingPredictors');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **limit** | **String** | Number of entities to return. Maximum of 200. Deprecated in favour of pageSize | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **queueId** | **[String]** | Comma-separated list of queue Ids to filter by. | [optional]  |
{: class="table table-striped"}

### Return type

**PredictorListing**

<a name="getRoutingPredictorsKeyperformanceindicators"></a>

# [KeyPerformanceIndicator] getRoutingPredictorsKeyperformanceindicators(opts)


GET /api/v2/routing/predictors/keyperformanceindicators

Get a list of Key Performance Indicators

Requires ANY permissions:

* routing:keyPerformanceIndicator:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'kpiGroup': "kpiGroup_example", // String | The Group of Key Performance Indicators to return
  'expand': ["expand_example"] // [String] | Parameter to request additional data to return in KPI payload
};

apiInstance.getRoutingPredictorsKeyperformanceindicators(opts)
  .then((data) => {
    console.log(`getRoutingPredictorsKeyperformanceindicators success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingPredictorsKeyperformanceindicators');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **kpiGroup** | **String** | The Group of Key Performance Indicators to return | [optional] <br />**Values**: Standard, Custom |
 **expand** | **[String]** | Parameter to request additional data to return in KPI payload | [optional] <br />**Values**: queues |
{: class="table table-striped"}

### Return type

**[KeyPerformanceIndicator]**

<a name="getRoutingQueue"></a>

# Queue getRoutingQueue(queueId)


GET /api/v2/routing/queues/{queueId}

Get details about this queue.

Requires ALL permissions:

* routing:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID

apiInstance.getRoutingQueue(queueId)
  .then((data) => {
    console.log(`getRoutingQueue success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueue');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
{: class="table table-striped"}

### Return type

**Queue**

<a name="getRoutingQueueComparisonperiod"></a>

# ComparisonPeriod getRoutingQueueComparisonperiod(queueId, comparisonPeriodId)


GET /api/v2/routing/queues/{queueId}/comparisonperiods/{comparisonPeriodId}

Get a Comparison Period.

Requires ALL permissions:

* routing:comparisonPeriod:view
* routing:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue id
let comparisonPeriodId = "comparisonPeriodId_example"; // String | ComparisonPeriod id

apiInstance.getRoutingQueueComparisonperiod(queueId, comparisonPeriodId)
  .then((data) => {
    console.log(`getRoutingQueueComparisonperiod success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueueComparisonperiod');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue id |  |
 **comparisonPeriodId** | **String** | ComparisonPeriod id |  |
{: class="table table-striped"}

### Return type

**ComparisonPeriod**

<a name="getRoutingQueueComparisonperiods"></a>

# ComparisonPeriodListing getRoutingQueueComparisonperiods(queueId)


GET /api/v2/routing/queues/{queueId}/comparisonperiods

Get list of comparison periods

Requires ALL permissions:

* routing:comparisonPeriod:view
* routing:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue id

apiInstance.getRoutingQueueComparisonperiods(queueId)
  .then((data) => {
    console.log(`getRoutingQueueComparisonperiods success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueueComparisonperiods');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue id |  |
{: class="table table-striped"}

### Return type

**ComparisonPeriodListing**

<a name="getRoutingQueueEstimatedwaittime"></a>

# EstimatedWaitTimePredictions getRoutingQueueEstimatedwaittime(queueId, opts)


GET /api/v2/routing/queues/{queueId}/estimatedwaittime

Get Estimated Wait Time

Requires ALL permissions:

* routing:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | queueId
let opts = { 
  'conversationId': "conversationId_example" // String | conversationId
};

apiInstance.getRoutingQueueEstimatedwaittime(queueId, opts)
  .then((data) => {
    console.log(`getRoutingQueueEstimatedwaittime success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueueEstimatedwaittime');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | queueId |  |
 **conversationId** | **String** | conversationId | [optional]  |
{: class="table table-striped"}

### Return type

**EstimatedWaitTimePredictions**

<a name="getRoutingQueueMediatypeEstimatedwaittime"></a>

# EstimatedWaitTimePredictions getRoutingQueueMediatypeEstimatedwaittime(queueId, mediaType)


GET /api/v2/routing/queues/{queueId}/mediatypes/{mediaType}/estimatedwaittime

Get Estimated Wait Time

Requires ALL permissions:

* routing:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | queueId
let mediaType = "mediaType_example"; // String | mediaType

apiInstance.getRoutingQueueMediatypeEstimatedwaittime(queueId, mediaType)
  .then((data) => {
    console.log(`getRoutingQueueMediatypeEstimatedwaittime success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueueMediatypeEstimatedwaittime');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | queueId |  |
 **mediaType** | **String** | mediaType |  |
{: class="table table-striped"}

### Return type

**EstimatedWaitTimePredictions**

<a name="getRoutingQueueMembers"></a>

# QueueMemberEntityListing getRoutingQueueMembers(queueId, opts)


GET /api/v2/routing/queues/{queueId}/members

Get the members of this queue.

Requires ANY permissions:

* routing:queue:view
* routing:queue:edit
* routing:queue:readonly
* routing:queueMember:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let opts = { 
  'pageNumber': 1, // Number | 
  'pageSize': 25, // Number | Max value is 100
  'sortOrder': "asc", // String | Note: results are sorted by name.
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand.
  'name': "name_example", // String | Filter by queue member name (contains-style search)
  'profileSkills': ["profileSkills_example"], // [String] | Filter by profile skill (contains-style search)
  'skills': ["skills_example"], // [String] | Filter by skill (contains-style search)
  'languages': ["languages_example"], // [String] | Filter by language (contains-style search)
  'routingStatus': ["routingStatus_example"], // [String] | Filter by routing status
  'presence': ["presence_example"], // [String] | Filter by presence
  'memberBy': "memberBy_example", // String | Filter by member type
  'joined': true // Boolean | Filter by joined status
};

apiInstance.getRoutingQueueMembers(queueId, opts)
  .then((data) => {
    console.log(`getRoutingQueueMembers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueueMembers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **pageNumber** | **Number** |  | [optional] [default to 1] |
 **pageSize** | **Number** | Max value is 100 | [optional] [default to 25] |
 **sortOrder** | **String** | Note: results are sorted by name. | [optional] [default to asc]<br />**Values**: asc, desc |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, dateLastLogin, authorization.unusedRoles, team, profileSkills, certifications, locations, groups, skills, languages, languagePreference, employerInfo, biography |
 **name** | **String** | Filter by queue member name (contains-style search) | [optional]  |
 **profileSkills** | **[String]** | Filter by profile skill (contains-style search) | [optional]  |
 **skills** | **[String]** | Filter by skill (contains-style search) | [optional]  |
 **languages** | **[String]** | Filter by language (contains-style search) | [optional]  |
 **routingStatus** | **[String]** | Filter by routing status | [optional]  |
 **presence** | **[String]** | Filter by presence | [optional]  |
 **memberBy** | **String** | Filter by member type | [optional] <br />**Values**: user, group |
 **joined** | **Boolean** | Filter by joined status | [optional] <br />**Values**: true, false |
{: class="table table-striped"}

### Return type

**QueueMemberEntityListing**

<a name="getRoutingQueueUsers"></a>

# QueueMemberEntityListingV1 getRoutingQueueUsers(queueId, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/routing/queues/{queueId}/users

DEPRECATED: use GET /routing/queues/{queueId}/members.  Get the members of this queue.

Requires ANY permissions:

* routing:queue:view
* routing:queueMember:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let opts = { 
  'pageNumber': 1, // Number | 
  'pageSize': 25, // Number | Max value is 100
  'sortOrder': "asc", // String | Note: results are sorted by name.
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand.
  'joined': true, // Boolean | Filter by joined status
  'name': "name_example", // String | Filter by queue member name
  'profileSkills': ["profileSkills_example"], // [String] | Filter by profile skill
  'skills': ["skills_example"], // [String] | Filter by skill
  'languages': ["languages_example"], // [String] | Filter by language
  'routingStatus': ["routingStatus_example"], // [String] | Filter by routing status
  'presence': ["presence_example"] // [String] | Filter by presence
};

apiInstance.getRoutingQueueUsers(queueId, opts)
  .then((data) => {
    console.log(`getRoutingQueueUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueueUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **pageNumber** | **Number** |  | [optional] [default to 1] |
 **pageSize** | **Number** | Max value is 100 | [optional] [default to 25] |
 **sortOrder** | **String** | Note: results are sorted by name. | [optional] [default to asc]<br />**Values**: asc, desc |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, dateLastLogin, authorization.unusedRoles, team, profileSkills, certifications, locations, groups, skills, languages, languagePreference, employerInfo, biography |
 **joined** | **Boolean** | Filter by joined status | [optional]  |
 **name** | **String** | Filter by queue member name | [optional]  |
 **profileSkills** | **[String]** | Filter by profile skill | [optional]  |
 **skills** | **[String]** | Filter by skill | [optional]  |
 **languages** | **[String]** | Filter by language | [optional]  |
 **routingStatus** | **[String]** | Filter by routing status | [optional]  |
 **presence** | **[String]** | Filter by presence | [optional]  |
{: class="table table-striped"}

### Return type

**QueueMemberEntityListingV1**

<a name="getRoutingQueueWrapupcodes"></a>

# WrapupCodeEntityListing getRoutingQueueWrapupcodes(queueId, opts)


GET /api/v2/routing/queues/{queueId}/wrapupcodes

Get the wrap-up codes for a queue

Requires ALL permissions:

* routing:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getRoutingQueueWrapupcodes(queueId, opts)
  .then((data) => {
    console.log(`getRoutingQueueWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueueWrapupcodes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**WrapupCodeEntityListing**

<a name="getRoutingQueues"></a>

# QueueEntityListing getRoutingQueues(opts)


GET /api/v2/routing/queues

Get list of queues.

Requires ANY permissions:

* routing:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortOrder': "asc", // String | Note: results are sorted by name.
  'name': "name_example", // String | Filter by queue name
  'id': ["id_example"], // [String] | Filter by queue ID(s)
  'divisionId': ["divisionId_example"], // [String] | Filter by queue division ID(s)
  'peerId': ["peerId_example"], // [String] | Filter by queue peer ID(s)
  'hasPeer': true // Boolean | Filter by queues associated with peer
};

apiInstance.getRoutingQueues(opts)
  .then((data) => {
    console.log(`getRoutingQueues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueues');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortOrder** | **String** | Note: results are sorted by name. | [optional] [default to asc]<br />**Values**: asc, desc |
 **name** | **String** | Filter by queue name | [optional]  |
 **id** | **[String]** | Filter by queue ID(s) | [optional]  |
 **divisionId** | **[String]** | Filter by queue division ID(s) | [optional]  |
 **peerId** | **[String]** | Filter by queue peer ID(s) | [optional]  |
 **hasPeer** | **Boolean** | Filter by queues associated with peer | [optional]  |
{: class="table table-striped"}

### Return type

**QueueEntityListing**

<a name="getRoutingQueuesDivisionviews"></a>

# QueueEntityListing getRoutingQueuesDivisionviews(opts)


GET /api/v2/routing/queues/divisionviews

Get a paged listing of simplified queue objects, filterable by name, queue ID(s), or division ID(s).

Requires ALL permissions:

* routing:queue:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageSize': 25, // Number | Page size [max value is 100]
  'pageNumber': 1, // Number | Page number [max value is 5]
  'sortBy': "name", // String | Sort by
  'sortOrder': "asc", // String | Sort order
  'name': "name_example", // String | Name
  'id': ["id_example"], // [String] | Queue ID(s)
  'divisionId': ["divisionId_example"] // [String] | Division ID(s)
};

apiInstance.getRoutingQueuesDivisionviews(opts)
  .then((data) => {
    console.log(`getRoutingQueuesDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueuesDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size [max value is 100] | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number [max value is 5] | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to name]<br />**Values**: name, id, divisionId |
 **sortOrder** | **String** | Sort order | [optional] [default to asc]<br />**Values**: asc, desc |
 **name** | **String** | Name | [optional]  |
 **id** | **[String]** | Queue ID(s) | [optional]  |
 **divisionId** | **[String]** | Division ID(s) | [optional]  |
{: class="table table-striped"}

### Return type

**QueueEntityListing**

<a name="getRoutingQueuesDivisionviewsAll"></a>

# QueueEntityListing getRoutingQueuesDivisionviewsAll(opts)


GET /api/v2/routing/queues/divisionviews/all

Get a paged listing of simplified queue objects, sorted by name.  Can be used to get a digest of all queues in an organization.

Requires ALL permissions:

* routing:queue:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageSize': 25, // Number | Page size [max value is 500]
  'pageNumber': 1, // Number | Page number
  'sortOrder': "asc" // String | Sort order
};

apiInstance.getRoutingQueuesDivisionviewsAll(opts)
  .then((data) => {
    console.log(`getRoutingQueuesDivisionviewsAll success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueuesDivisionviewsAll');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size [max value is 500] | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Sort order | [optional] [default to asc]<br />**Values**: asc, desc |
{: class="table table-striped"}

### Return type

**QueueEntityListing**

<a name="getRoutingQueuesMe"></a>

# UserQueueEntityListing getRoutingQueuesMe(opts)


GET /api/v2/routing/queues/me

Get a paged listing of queues the user is a member of.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'joined': true, // Boolean | Filter by joined status.
  'sortOrder': "asc" // String | Note: results are sorted by name.
};

apiInstance.getRoutingQueuesMe(opts)
  .then((data) => {
    console.log(`getRoutingQueuesMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueuesMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **joined** | **Boolean** | Filter by joined status. | [optional] <br />**Values**: true, false |
 **sortOrder** | **String** | Note: results are sorted by name. | [optional] [default to asc]<br />**Values**: asc, desc |
{: class="table table-striped"}

### Return type

**UserQueueEntityListing**

<a name="getRoutingSettings"></a>

# RoutingSettings getRoutingSettings()


GET /api/v2/routing/settings

Get an organization's routing settings

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

apiInstance.getRoutingSettings()
  .then((data) => {
    console.log(`getRoutingSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**RoutingSettings**

<a name="getRoutingSettingsContactcenter"></a>

# ContactCenterSettings getRoutingSettingsContactcenter()


GET /api/v2/routing/settings/contactcenter

Get Contact Center Settings

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

apiInstance.getRoutingSettingsContactcenter()
  .then((data) => {
    console.log(`getRoutingSettingsContactcenter success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSettingsContactcenter');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**ContactCenterSettings**

<a name="getRoutingSettingsTranscription"></a>

# TranscriptionSettings getRoutingSettingsTranscription()


GET /api/v2/routing/settings/transcription

Get Transcription Settings

Requires ANY permissions:

* routing:transcriptionSettings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

apiInstance.getRoutingSettingsTranscription()
  .then((data) => {
    console.log(`getRoutingSettingsTranscription success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSettingsTranscription');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**TranscriptionSettings**

<a name="getRoutingSkill"></a>

# RoutingSkill getRoutingSkill(skillId)


GET /api/v2/routing/skills/{skillId}

Get Routing Skill

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let skillId = "skillId_example"; // String | Skill ID

apiInstance.getRoutingSkill(skillId)
  .then((data) => {
    console.log(`getRoutingSkill success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSkill');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **skillId** | **String** | Skill ID |  |
{: class="table table-striped"}

### Return type

**RoutingSkill**

<a name="getRoutingSkillgroup"></a>

# SkillGroup getRoutingSkillgroup(skillGroupId)


GET /api/v2/routing/skillgroups/{skillGroupId}

Get skill group

Requires ANY permissions:

* routing:skillGroup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let skillGroupId = "skillGroupId_example"; // String | Skill Group ID

apiInstance.getRoutingSkillgroup(skillGroupId)
  .then((data) => {
    console.log(`getRoutingSkillgroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSkillgroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **skillGroupId** | **String** | Skill Group ID |  |
{: class="table table-striped"}

### Return type

**SkillGroup**

<a name="getRoutingSkillgroupMembers"></a>

# SkillGroupMemberEntityListing getRoutingSkillgroupMembers(skillGroupId, opts)


GET /api/v2/routing/skillgroups/{skillGroupId}/members

Get skill group members

Requires ANY permissions:

* routing:skillGroup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let skillGroupId = "skillGroupId_example"; // String | Skill Group ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'after': "after_example", // String | The cursor that points to the next item
  'before': "before_example", // String | The cursor that points to the previous item
  'expand': "expand_example" // String | Expand the name on each user
};

apiInstance.getRoutingSkillgroupMembers(skillGroupId, opts)
  .then((data) => {
    console.log(`getRoutingSkillgroupMembers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSkillgroupMembers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **skillGroupId** | **String** | Skill Group ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **after** | **String** | The cursor that points to the next item | [optional]  |
 **before** | **String** | The cursor that points to the previous item | [optional]  |
 **expand** | **String** | Expand the name on each user | [optional] <br />**Values**: entities |
{: class="table table-striped"}

### Return type

**SkillGroupMemberEntityListing**

<a name="getRoutingSkillgroupMembersDivisions"></a>

# SkillGroupMemberDivisionList getRoutingSkillgroupMembersDivisions(skillGroupId, opts)


GET /api/v2/routing/skillgroups/{skillGroupId}/members/divisions

Get list of member divisions for this skill group.

Requires ANY permissions:

* routing:skillGroup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let skillGroupId = "skillGroupId_example"; // String | Skill Group ID
let opts = { 
  'expand': "expand_example" // String | Expand the name on each user
};

apiInstance.getRoutingSkillgroupMembersDivisions(skillGroupId, opts)
  .then((data) => {
    console.log(`getRoutingSkillgroupMembersDivisions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSkillgroupMembersDivisions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **skillGroupId** | **String** | Skill Group ID |  |
 **expand** | **String** | Expand the name on each user | [optional] <br />**Values**: entities |
{: class="table table-striped"}

### Return type

**SkillGroupMemberDivisionList**

<a name="getRoutingSkillgroups"></a>

# SkillGroupEntityListing getRoutingSkillgroups(opts)


GET /api/v2/routing/skillgroups

Get skill group listing

Requires ANY permissions:

* routing:skillGroup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'name': "name_example", // String | Return only skill group names whose names start with this value (case-insensitive matching)
  'after': "after_example", // String | The cursor that points to the next item
  'before': "before_example" // String | The cursor that points to the previous item
};

apiInstance.getRoutingSkillgroups(opts)
  .then((data) => {
    console.log(`getRoutingSkillgroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSkillgroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **name** | **String** | Return only skill group names whose names start with this value (case-insensitive matching) | [optional]  |
 **after** | **String** | The cursor that points to the next item | [optional]  |
 **before** | **String** | The cursor that points to the previous item | [optional]  |
{: class="table table-striped"}

### Return type

**SkillGroupEntityListing**

<a name="getRoutingSkills"></a>

# SkillEntityListing getRoutingSkills(opts)


GET /api/v2/routing/skills

Get the list of routing skills.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'name': "name_example", // String | Filter for results that start with this value
  'id': ["id_example"] // [String] | id
};

apiInstance.getRoutingSkills(opts)
  .then((data) => {
    console.log(`getRoutingSkills success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSkills');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **name** | **String** | Filter for results that start with this value | [optional]  |
 **id** | **[String]** | id | [optional]  |
{: class="table table-striped"}

### Return type

**SkillEntityListing**

<a name="getRoutingSmsAddress"></a>

# SmsAddress getRoutingSmsAddress(addressId)


GET /api/v2/routing/sms/addresses/{addressId}

Get an Address by Id for SMS

Requires ALL permissions:

* sms:phoneNumber:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let addressId = "addressId_example"; // String | Address ID

apiInstance.getRoutingSmsAddress(addressId)
  .then((data) => {
    console.log(`getRoutingSmsAddress success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSmsAddress');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **addressId** | **String** | Address ID |  |
{: class="table table-striped"}

### Return type

**SmsAddress**

<a name="getRoutingSmsAddresses"></a>

# SmsAddressEntityListing getRoutingSmsAddresses(opts)


GET /api/v2/routing/sms/addresses

Get a list of Addresses for SMS

Requires ALL permissions:

* sms:phoneNumber:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getRoutingSmsAddresses(opts)
  .then((data) => {
    console.log(`getRoutingSmsAddresses success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSmsAddresses');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**SmsAddressEntityListing**

<a name="getRoutingSmsAvailablephonenumbers"></a>

# SMSAvailablePhoneNumberEntityListing getRoutingSmsAvailablephonenumbers(countryCode, phoneNumberType, opts)


GET /api/v2/routing/sms/availablephonenumbers

Get a list of available phone numbers for SMS provisioning.

This request will return up to 30 random phone numbers matching the criteria specified.  To get additional phone numbers repeat the request.

Requires ALL permissions:

* sms:phoneNumber:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let countryCode = "countryCode_example"; // String | The ISO 3166-1 alpha-2 country code of the county for which available phone numbers should be returned
let phoneNumberType = "phoneNumberType_example"; // String | Type of available phone numbers searched
let opts = { 
  'region': "region_example", // String | Region/province/state that can be used to restrict the numbers returned
  'city': "city_example", // String | City that can be used to restrict the numbers returned
  'areaCode': "areaCode_example", // String | Area code that can be used to restrict the numbers returned
  'pattern': "pattern_example", // String | A pattern to match phone numbers. Valid characters are '*' and [0-9a-zA-Z]. The '*' character will match any single digit.
  'addressRequirement': "addressRequirement_example" // String | This indicates whether the phone number requires to have an Address registered.
};

apiInstance.getRoutingSmsAvailablephonenumbers(countryCode, phoneNumberType, opts)
  .then((data) => {
    console.log(`getRoutingSmsAvailablephonenumbers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSmsAvailablephonenumbers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **countryCode** | **String** | The ISO 3166-1 alpha-2 country code of the county for which available phone numbers should be returned |  |
 **phoneNumberType** | **String** | Type of available phone numbers searched | <br />**Values**: local, mobile, tollfree |
 **region** | **String** | Region/province/state that can be used to restrict the numbers returned | [optional]  |
 **city** | **String** | City that can be used to restrict the numbers returned | [optional]  |
 **areaCode** | **String** | Area code that can be used to restrict the numbers returned | [optional]  |
 **pattern** | **String** | A pattern to match phone numbers. Valid characters are '*' and [0-9a-zA-Z]. The '*' character will match any single digit. | [optional]  |
 **addressRequirement** | **String** | This indicates whether the phone number requires to have an Address registered. | [optional] <br />**Values**: none, any, local, foreign |
{: class="table table-striped"}

### Return type

**SMSAvailablePhoneNumberEntityListing**

<a name="getRoutingSmsPhonenumber"></a>

# SmsPhoneNumber getRoutingSmsPhonenumber(addressId, opts)


GET /api/v2/routing/sms/phonenumbers/{addressId}

Get a phone number provisioned for SMS.

Requires ALL permissions:

* sms:phoneNumber:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let addressId = "addressId_example"; // String | Address ID
let opts = { 
  'expand': "expand_example" // String | Expand response with additional information
};

apiInstance.getRoutingSmsPhonenumber(addressId, opts)
  .then((data) => {
    console.log(`getRoutingSmsPhonenumber success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSmsPhonenumber');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **addressId** | **String** | Address ID |  |
 **expand** | **String** | Expand response with additional information | [optional] <br />**Values**: compliance |
{: class="table table-striped"}

### Return type

**SmsPhoneNumber**

<a name="getRoutingSmsPhonenumbers"></a>

# SmsPhoneNumberEntityListing getRoutingSmsPhonenumbers(opts)


GET /api/v2/routing/sms/phonenumbers

Get a list of provisioned phone numbers.

Requires ALL permissions:

* sms:phoneNumber:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'phoneNumber': "phoneNumber_example", // String | Filter on phone number address. Allowable characters are the digits '0-9' and the wild card character '\\*'. If just digits are present, a contains search is done on the address pattern. For example, '317' could be matched anywhere in the address. An '\\*' will match multiple digits. For example, to match a specific area code within the US a pattern like '1317*' could be used.
  'phoneNumberType': ["phoneNumberType_example"], // [String] | Filter on phone number type
  'phoneNumberStatus': ["phoneNumberStatus_example"], // [String] | Filter on phone number status
  'countryCode': ["countryCode_example"], // [String] | Filter on country code
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "sortBy_example", // String | Optional field to sort results
  'sortOrder': "sortOrder_example", // String | Sort order
  'language': en-US, // String | A language tag (which is sometimes referred to as a locale identifier) to use to localize country field and sort operations
  'integrationId': "integrationId_example" // String | Filter on the Genesys Cloud integration id to which the phone number belongs to
};

apiInstance.getRoutingSmsPhonenumbers(opts)
  .then((data) => {
    console.log(`getRoutingSmsPhonenumbers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSmsPhonenumbers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneNumber** | **String** | Filter on phone number address. Allowable characters are the digits '0-9' and the wild card character '\\*'. If just digits are present, a contains search is done on the address pattern. For example, '317' could be matched anywhere in the address. An '\\*' will match multiple digits. For example, to match a specific area code within the US a pattern like '1317*' could be used. | [optional]  |
 **phoneNumberType** | **[String]** | Filter on phone number type | [optional] <br />**Values**: local, mobile, tollfree, shortcode |
 **phoneNumberStatus** | **[String]** | Filter on phone number status | [optional] <br />**Values**: active, invalid, initiated, porting, pending, pending-cancellation |
 **countryCode** | **[String]** | Filter on country code | [optional]  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Optional field to sort results | [optional] <br />**Values**: phoneNumber, countryCode, country, dateCreated, dateModified, phoneNumberStatus, phoneNumberType, purchaseDate, supportsMms, supportsSms, supportsVoice |
 **sortOrder** | **String** | Sort order | [optional] <br />**Values**: ascending, descending |
 **language** | **String** | A language tag (which is sometimes referred to as a locale identifier) to use to localize country field and sort operations | [optional] [default to en-US] |
 **integrationId** | **String** | Filter on the Genesys Cloud integration id to which the phone number belongs to | [optional]  |
{: class="table table-striped"}

### Return type

**SmsPhoneNumberEntityListing**

<a name="getRoutingUserUtilization"></a>

# AgentMaxUtilization getRoutingUserUtilization(userId)


GET /api/v2/routing/users/{userId}/utilization

Get the user's max utilization settings.  If not configured, the organization-wide default is returned.

Requires ANY permissions:

* routing:utilization:manage
* routing:utilization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID

apiInstance.getRoutingUserUtilization(userId)
  .then((data) => {
    console.log(`getRoutingUserUtilization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingUserUtilization');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

**AgentMaxUtilization**

<a name="getRoutingUtilization"></a>

# Utilization getRoutingUtilization()


GET /api/v2/routing/utilization

Get the organization-wide max utilization settings.

Requires ANY permissions:

* routing:utilization:manage
* routing:utilization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

apiInstance.getRoutingUtilization()
  .then((data) => {
    console.log(`getRoutingUtilization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingUtilization');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**Utilization**

<a name="getRoutingUtilizationTag"></a>

# UtilizationTag getRoutingUtilizationTag(tagId)


GET /api/v2/routing/utilization/tags/{tagId}

Get details about this utilization tag

getRoutingUtilizationTag is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* routing:utilization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let tagId = "tagId_example"; // String | Utilization Tag ID

apiInstance.getRoutingUtilizationTag(tagId)
  .then((data) => {
    console.log(`getRoutingUtilizationTag success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingUtilizationTag');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tagId** | **String** | Utilization Tag ID |  |
{: class="table table-striped"}

### Return type

**UtilizationTag**

<a name="getRoutingUtilizationTagAgents"></a>

# **[Object]** getRoutingUtilizationTagAgents(tagId)


GET /api/v2/routing/utilization/tags/{tagId}/agents

Get list of agent ids associated with a utilization tag

getRoutingUtilizationTagAgents is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* routing:utilization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let tagId = "tagId_example"; // String | Utilization Tag ID

apiInstance.getRoutingUtilizationTagAgents(tagId)
  .then((data) => {
    console.log(`getRoutingUtilizationTagAgents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingUtilizationTagAgents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tagId** | **String** | Utilization Tag ID |  |
{: class="table table-striped"}

### Return type

**[Object]**

<a name="getRoutingUtilizationTags"></a>

# UtilizationTagEntityListing getRoutingUtilizationTags(opts)


GET /api/v2/routing/utilization/tags

Get list of utilization tags

getRoutingUtilizationTags is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* routing:utilization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ascending", // String | Sort order by name
  'name': "name_example" // String | Utilization tag's name (Wildcard is supported, e.g., 'tag1*')
};

apiInstance.getRoutingUtilizationTags(opts)
  .then((data) => {
    console.log(`getRoutingUtilizationTags success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingUtilizationTags');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Sort order by name | [optional] [default to ascending]<br />**Values**: ascending, descending |
 **name** | **String** | Utilization tag's name (Wildcard is supported, e.g., 'tag1*') | [optional]  |
{: class="table table-striped"}

### Return type

**UtilizationTagEntityListing**

<a name="getRoutingWrapupcode"></a>

# WrapupCode getRoutingWrapupcode(codeId)


GET /api/v2/routing/wrapupcodes/{codeId}

Get details about this wrap-up code.

Requires ALL permissions:

* routing:wrapupCode:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let codeId = "codeId_example"; // String | Wrapup Code ID

apiInstance.getRoutingWrapupcode(codeId)
  .then((data) => {
    console.log(`getRoutingWrapupcode success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingWrapupcode');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **codeId** | **String** | Wrapup Code ID |  |
{: class="table table-striped"}

### Return type

**WrapupCode**

<a name="getRoutingWrapupcodes"></a>

# WrapupCodeEntityListing getRoutingWrapupcodes(opts)


GET /api/v2/routing/wrapupcodes

Get list of wrapup codes.

Requires ALL permissions:

* routing:wrapupCode:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "name", // String | Sort by
  'sortOrder': "ascending", // String | Sort order
  'id': ["id_example"], // [String] | Filter by wrapup code ID(s)
  'name': "name_example", // String | Wrapup code's name ('Sort by' param is ignored unless this field is provided)
  'divisionId': ["divisionId_example"] // [String] | Filter by division ID(s)
};

apiInstance.getRoutingWrapupcodes(opts)
  .then((data) => {
    console.log(`getRoutingWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingWrapupcodes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to name]<br />**Values**: name, id |
 **sortOrder** | **String** | Sort order | [optional] [default to ascending]<br />**Values**: ascending, descending |
 **id** | **[String]** | Filter by wrapup code ID(s) | [optional]  |
 **name** | **String** | Wrapup code's name ('Sort by' param is ignored unless this field is provided) | [optional]  |
 **divisionId** | **[String]** | Filter by division ID(s) | [optional]  |
{: class="table table-striped"}

### Return type

**WrapupCodeEntityListing**

<a name="getUserQueues"></a>

# UserQueueEntityListing getUserQueues(userId, opts)


GET /api/v2/users/{userId}/queues

Get queues for user

Requires ANY permissions:

* routing:queue:view
* routing:queue:join
* routing:queueMember:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'joined': true, // Boolean | Is joined to the queue
  'divisionId': ["divisionId_example"] // [String] | Division ID(s)
};

apiInstance.getUserQueues(userId, opts)
  .then((data) => {
    console.log(`getUserQueues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserQueues');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **joined** | **Boolean** | Is joined to the queue | [optional] [default to true] |
 **divisionId** | **[String]** | Division ID(s) | [optional]  |
{: class="table table-striped"}

### Return type

**UserQueueEntityListing**

<a name="getUserRoutinglanguages"></a>

# UserLanguageEntityListing getUserRoutinglanguages(userId, opts)


GET /api/v2/users/{userId}/routinglanguages

List routing language for user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ASC" // String | Ascending or descending sort order
};

apiInstance.getUserRoutinglanguages(userId, opts)
  .then((data) => {
    console.log(`getUserRoutinglanguages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserRoutinglanguages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to ASC]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**UserLanguageEntityListing**

<a name="getUserRoutingskills"></a>

# UserSkillEntityListing getUserRoutingskills(userId, opts)


GET /api/v2/users/{userId}/routingskills

List routing skills for user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ASC" // String | Ascending or descending sort order
};

apiInstance.getUserRoutingskills(userId, opts)
  .then((data) => {
    console.log(`getUserRoutingskills success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserRoutingskills');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to ASC]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**UserSkillEntityListing**

<a name="getUserSkillgroups"></a>

# UserSkillGroupEntityListing getUserSkillgroups(userId, opts)


GET /api/v2/users/{userId}/skillgroups

Get skill groups for a user

Requires ANY permissions:

* routing:skillGroup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'after': "after_example", // String | The cursor that points to the next page
  'before': "before_example" // String | The cursor that points to the previous page
};

apiInstance.getUserSkillgroups(userId, opts)
  .then((data) => {
    console.log(`getUserSkillgroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserSkillgroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **after** | **String** | The cursor that points to the next page | [optional]  |
 **before** | **String** | The cursor that points to the previous page | [optional]  |
{: class="table table-striped"}

### Return type

**UserSkillGroupEntityListing**

<a name="patchRoutingConversation"></a>

# RoutingConversationAttributesResponse patchRoutingConversation(conversationId, body)


PATCH /api/v2/routing/conversations/{conversationId}

Update attributes of an in-queue conversation

Returns an object indicating the updated values of all settable attributes. Supported attributes: skillIds, languageId, and priority.

Requires ANY permissions:

* routing:conversation:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let body = {}; // Object | Conversation Attributes

apiInstance.patchRoutingConversation(conversationId, body)
  .then((data) => {
    console.log(`patchRoutingConversation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchRoutingConversation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **body** | **Object** | Conversation Attributes |  |
{: class="table table-striped"}

### Return type

**RoutingConversationAttributesResponse**

<a name="patchRoutingEmailDomain"></a>

# InboundDomain patchRoutingEmailDomain(domainId, body)


PATCH /api/v2/routing/email/domains/{domainId}

Update domain settings

Requires ALL permissions:

* routing:email:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainId = "domainId_example"; // String | domain ID
let body = {}; // Object | Domain settings

apiInstance.patchRoutingEmailDomain(domainId, body)
  .then((data) => {
    console.log(`patchRoutingEmailDomain success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchRoutingEmailDomain');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | domain ID |  |
 **body** | **Object** | Domain settings |  |
{: class="table table-striped"}

### Return type

**InboundDomain**

<a name="patchRoutingEmailDomainValidate"></a>

# InboundDomain patchRoutingEmailDomainValidate(domainId, body)


PATCH /api/v2/routing/email/domains/{domainId}/validate

Validate domain settings

Requires ALL permissions:

* routing:email:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainId = "domainId_example"; // String | domain ID
let body = {}; // Object | Domain settings

apiInstance.patchRoutingEmailDomainValidate(domainId, body)
  .then((data) => {
    console.log(`patchRoutingEmailDomainValidate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchRoutingEmailDomainValidate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | domain ID |  |
 **body** | **Object** | Domain settings |  |
{: class="table table-striped"}

### Return type

**InboundDomain**

<a name="patchRoutingPredictor"></a>

# Predictor patchRoutingPredictor(predictorId, opts)


PATCH /api/v2/routing/predictors/{predictorId}

Update single predictor.

Requires ALL permissions:

* routing:predictor:edit
* routing:queue:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let predictorId = "predictorId_example"; // String | Predictor ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchRoutingPredictor(predictorId, opts)
  .then((data) => {
    console.log(`patchRoutingPredictor success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchRoutingPredictor');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **predictorId** | **String** | Predictor ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Predictor**

<a name="patchRoutingQueueMember"></a>

# void patchRoutingQueueMember(queueId, memberId, body)


PATCH /api/v2/routing/queues/{queueId}/members/{memberId}

Update the ring number OR joined status for a queue member.

Requires ANY permissions:

* routing:queue:edit
* routing:queueMember:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let memberId = "memberId_example"; // String | Member ID
let body = {}; // Object | Queue Member

apiInstance.patchRoutingQueueMember(queueId, memberId, body)
  .then(() => {
    console.log('patchRoutingQueueMember returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchRoutingQueueMember');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **memberId** | **String** | Member ID |  |
 **body** | **Object** | Queue Member |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchRoutingQueueMembers"></a>

# QueueMemberEntityListing patchRoutingQueueMembers(queueId, body)


PATCH /api/v2/routing/queues/{queueId}/members

Join or unjoin a set of users for a queue

Requires ANY permissions:

* routing:queue:edit
* routing:queueMember:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let body = [{}]; // Object | Queue Members

apiInstance.patchRoutingQueueMembers(queueId, body)
  .then((data) => {
    console.log(`patchRoutingQueueMembers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchRoutingQueueMembers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **body** | **Object** | Queue Members |  |
{: class="table table-striped"}

### Return type

**QueueMemberEntityListing**

<a name="patchRoutingQueueUser"></a>

# void patchRoutingQueueUser(queueId, memberId, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

PATCH /api/v2/routing/queues/{queueId}/users/{memberId}

DEPRECATED: use PATCH /routing/queues/{queueId}/members/{memberId}.  Update the ring number OR joined status for a User in a Queue.

Requires ANY permissions:

* routing:queue:edit
* routing:queueMember:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let memberId = "memberId_example"; // String | Member ID
let body = {}; // Object | Queue Member

apiInstance.patchRoutingQueueUser(queueId, memberId, body)
  .then(() => {
    console.log('patchRoutingQueueUser returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchRoutingQueueUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **memberId** | **String** | Member ID |  |
 **body** | **Object** | Queue Member |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchRoutingQueueUsers"></a>

# QueueMemberEntityListingV1 patchRoutingQueueUsers(queueId, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

PATCH /api/v2/routing/queues/{queueId}/users

DEPRECATED: use PATCH /routing/queues/{queueId}/members.  Join or unjoin a set of users for a queue.

Requires ANY permissions:

* routing:queue:edit
* routing:queueMember:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let body = [{}]; // Object | Queue Members

apiInstance.patchRoutingQueueUsers(queueId, body)
  .then((data) => {
    console.log(`patchRoutingQueueUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchRoutingQueueUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **body** | **Object** | Queue Members |  |
{: class="table table-striped"}

### Return type

**QueueMemberEntityListingV1**

<a name="patchRoutingSettingsContactcenter"></a>

# void patchRoutingSettingsContactcenter(body)


PATCH /api/v2/routing/settings/contactcenter

Update Contact Center Settings

Requires ANY permissions:

* routing:settings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | Contact Center Settings

apiInstance.patchRoutingSettingsContactcenter(body)
  .then(() => {
    console.log('patchRoutingSettingsContactcenter returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchRoutingSettingsContactcenter');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Contact Center Settings |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchRoutingSkillgroup"></a>

# SkillGroup patchRoutingSkillgroup(skillGroupId, body)


PATCH /api/v2/routing/skillgroups/{skillGroupId}

Update skill group definition

Requires ANY permissions:

* routing:skillGroup:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let skillGroupId = "skillGroupId_example"; // String | Skill Group ID
let body = {}; // Object | Update skill groups

apiInstance.patchRoutingSkillgroup(skillGroupId, body)
  .then((data) => {
    console.log(`patchRoutingSkillgroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchRoutingSkillgroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **skillGroupId** | **String** | Skill Group ID |  |
 **body** | **Object** | Update skill groups |  |
{: class="table table-striped"}

### Return type

**SkillGroup**

<a name="patchUserQueue"></a>

# UserQueue patchUserQueue(queueId, userId, body)


PATCH /api/v2/users/{userId}/queues/{queueId}

Join or unjoin a queue for a user

Requires ANY permissions:

* routing:queue:join
* routing:queueMember:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let userId = "userId_example"; // String | User ID
let body = {}; // Object | Queue Member

apiInstance.patchUserQueue(queueId, userId, body)
  .then((data) => {
    console.log(`patchUserQueue success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchUserQueue');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **userId** | **String** | User ID |  |
 **body** | **Object** | Queue Member |  |
{: class="table table-striped"}

### Return type

**UserQueue**

<a name="patchUserQueues"></a>

# UserQueueEntityListing patchUserQueues(userId, body, opts)


PATCH /api/v2/users/{userId}/queues

Join or unjoin a set of queues for a user

Requires ANY permissions:

* routing:queue:join
* routing:queueMember:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let body = [{}]; // Object | User Queues
let opts = { 
  'divisionId': ["divisionId_example"] // [String] | Division ID(s)
};

apiInstance.patchUserQueues(userId, body, opts)
  .then((data) => {
    console.log(`patchUserQueues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchUserQueues');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | User Queues |  |
 **divisionId** | **[String]** | Division ID(s) | [optional]  |
{: class="table table-striped"}

### Return type

**UserQueueEntityListing**

<a name="patchUserRoutinglanguage"></a>

# UserRoutingLanguage patchUserRoutinglanguage(userId, languageId, body)


PATCH /api/v2/users/{userId}/routinglanguages/{languageId}

Update routing language proficiency or state.

Requires ANY permissions:

* routing:skill:assign
* routing:language:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let languageId = "languageId_example"; // String | languageId
let body = {}; // Object | Language

apiInstance.patchUserRoutinglanguage(userId, languageId, body)
  .then((data) => {
    console.log(`patchUserRoutinglanguage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchUserRoutinglanguage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **languageId** | **String** | languageId |  |
 **body** | **Object** | Language |  |
{: class="table table-striped"}

### Return type

**UserRoutingLanguage**

<a name="patchUserRoutinglanguagesBulk"></a>

# UserLanguageEntityListing patchUserRoutinglanguagesBulk(userId, body)


PATCH /api/v2/users/{userId}/routinglanguages/bulk

Add bulk routing language to user. Max limit 50 languages

Requires ANY permissions:

* routing:skill:assign
* routing:language:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let body = [{}]; // Object | Language

apiInstance.patchUserRoutinglanguagesBulk(userId, body)
  .then((data) => {
    console.log(`patchUserRoutinglanguagesBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchUserRoutinglanguagesBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | Language |  |
{: class="table table-striped"}

### Return type

**UserLanguageEntityListing**

<a name="patchUserRoutingskillsBulk"></a>

# UserSkillEntityListing patchUserRoutingskillsBulk(userId, body)


PATCH /api/v2/users/{userId}/routingskills/bulk

Bulk add routing skills to user

Requires ANY permissions:

* routing:skill:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let body = [{}]; // Object | Skill

apiInstance.patchUserRoutingskillsBulk(userId, body)
  .then((data) => {
    console.log(`patchUserRoutingskillsBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchUserRoutingskillsBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | Skill |  |
{: class="table table-striped"}

### Return type

**UserSkillEntityListing**

<a name="postAnalyticsQueuesObservationsQuery"></a>

# QueueObservationQueryResponse postAnalyticsQueuesObservationsQuery(body)


POST /api/v2/analytics/queues/observations/query

Query for queue observations

Requires ANY permissions:

* analytics:queueObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | query

apiInstance.postAnalyticsQueuesObservationsQuery(body)
  .then((data) => {
    console.log(`postAnalyticsQueuesObservationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsQueuesObservationsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**QueueObservationQueryResponse**

<a name="postAnalyticsRoutingActivityQuery"></a>

# RoutingActivityResponse postAnalyticsRoutingActivityQuery(body, opts)


POST /api/v2/analytics/routing/activity/query

Query for user activity observations

postAnalyticsRoutingActivityQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:queueObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | query
let opts = { 
  'pageSize': 3.4, // Number | The desired page size
  'pageNumber': 3.4 // Number | The desired page number
};

apiInstance.postAnalyticsRoutingActivityQuery(body, opts)
  .then((data) => {
    console.log(`postAnalyticsRoutingActivityQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsRoutingActivityQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
 **pageSize** | **Number** | The desired page size | [optional]  |
 **pageNumber** | **Number** | The desired page number | [optional]  |
{: class="table table-striped"}

### Return type

**RoutingActivityResponse**

<a name="postRoutingAssessments"></a>

# BenefitAssessment postRoutingAssessments(opts)


POST /api/v2/routing/assessments

Create a benefit assessment.

Requires ALL permissions:

* routing:assessment:add
* routing:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postRoutingAssessments(opts)
  .then((data) => {
    console.log(`postRoutingAssessments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingAssessments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**BenefitAssessment**

<a name="postRoutingAssessmentsJobs"></a>

# BenefitAssessmentJob postRoutingAssessmentsJobs(opts)


POST /api/v2/routing/assessments/jobs

Create a benefit assessment job.

Requires ANY permissions:

* routing:assessment:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postRoutingAssessmentsJobs(opts)
  .then((data) => {
    console.log(`postRoutingAssessmentsJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingAssessmentsJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**BenefitAssessmentJob**

<a name="postRoutingEmailDomainRoutes"></a>

# InboundRoute postRoutingEmailDomainRoutes(domainName, body)


POST /api/v2/routing/email/domains/{domainName}/routes

Create a route

Requires ALL permissions:

* routing:email:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainName = "domainName_example"; // String | email domain
let body = {}; // Object | Route

apiInstance.postRoutingEmailDomainRoutes(domainName, body)
  .then((data) => {
    console.log(`postRoutingEmailDomainRoutes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingEmailDomainRoutes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainName** | **String** | email domain |  |
 **body** | **Object** | Route |  |
{: class="table table-striped"}

### Return type

**InboundRoute**

<a name="postRoutingEmailDomainTestconnection"></a>

# TestMessage postRoutingEmailDomainTestconnection(domainId, opts)


POST /api/v2/routing/email/domains/{domainId}/testconnection

Tests the custom SMTP server integration connection set on this domain

The request body is optional. If omitted, this endpoint will just test the connection of the Custom SMTP Server. If the body is specified, there will be an attempt to send an email message to the server.

Requires ALL permissions:

* routing:email:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainId = "domainId_example"; // String | domain ID
let opts = { 
  'body': {} // Object | TestMessage
};

apiInstance.postRoutingEmailDomainTestconnection(domainId, opts)
  .then((data) => {
    console.log(`postRoutingEmailDomainTestconnection success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingEmailDomainTestconnection');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | domain ID |  |
 **body** | **Object** | TestMessage | [optional]  |
{: class="table table-striped"}

### Return type

**TestMessage**

<a name="postRoutingEmailDomains"></a>

# InboundDomain postRoutingEmailDomains(body)


POST /api/v2/routing/email/domains

Create a domain

Requires ALL permissions:

* routing:email:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | Domain

apiInstance.postRoutingEmailDomains(body)
  .then((data) => {
    console.log(`postRoutingEmailDomains success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingEmailDomains');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Domain |  |
{: class="table table-striped"}

### Return type

**InboundDomain**

<a name="postRoutingEmailOutboundDomains"></a>

# EmailOutboundDomainResult postRoutingEmailOutboundDomains(body)


POST /api/v2/routing/email/outbound/domains

Create a domain

Requires ALL permissions:

* routing:email:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | Domain

apiInstance.postRoutingEmailOutboundDomains(body)
  .then((data) => {
    console.log(`postRoutingEmailOutboundDomains success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingEmailOutboundDomains');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Domain |  |
{: class="table table-striped"}

### Return type

**EmailOutboundDomainResult**

<a name="postRoutingEmailOutboundDomainsSimulated"></a>

# EmailOutboundDomainResult postRoutingEmailOutboundDomainsSimulated(body)


POST /api/v2/routing/email/outbound/domains/simulated

Create a simulated domain

Requires ALL permissions:

* routing:email:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | Domain

apiInstance.postRoutingEmailOutboundDomainsSimulated(body)
  .then((data) => {
    console.log(`postRoutingEmailOutboundDomainsSimulated success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingEmailOutboundDomainsSimulated');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Domain |  |
{: class="table table-striped"}

### Return type

**EmailOutboundDomainResult**

<a name="postRoutingLanguages"></a>

# Language postRoutingLanguages(body)


POST /api/v2/routing/languages

Create Language

Requires ANY permissions:

* routing:skill:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | Language

apiInstance.postRoutingLanguages(body)
  .then((data) => {
    console.log(`postRoutingLanguages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingLanguages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Language |  |
{: class="table table-striped"}

### Return type

**Language**

<a name="postRoutingPredictors"></a>

# Predictor postRoutingPredictors(opts)


POST /api/v2/routing/predictors

Create a predictor.

Requires ALL permissions:

* routing:predictor:add
* routing:queue:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postRoutingPredictors(opts)
  .then((data) => {
    console.log(`postRoutingPredictors success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingPredictors');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Predictor**

<a name="postRoutingQueueMembers"></a>

# void postRoutingQueueMembers(queueId, body, opts)


POST /api/v2/routing/queues/{queueId}/members

Bulk add or delete up to 100 queue members

Requires ANY permissions:

* routing:queue:edit
* routing:queueMember:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let body = [{}]; // Object | Queue Members
let opts = { 
  '_delete': false // Boolean | True to delete queue members
};

apiInstance.postRoutingQueueMembers(queueId, body, opts)
  .then(() => {
    console.log('postRoutingQueueMembers returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingQueueMembers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **body** | **Object** | Queue Members |  |
 **_delete** | **Boolean** | True to delete queue members | [optional] [default to false] |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postRoutingQueueUsers"></a>

# void postRoutingQueueUsers(queueId, body, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/routing/queues/{queueId}/users

DEPRECATED: use POST /routing/queues/{queueId}/members.  Bulk add or delete up to 100 queue members.

Requires ANY permissions:

* routing:queue:edit
* routing:queueMember:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let body = [{}]; // Object | Queue Members
let opts = { 
  '_delete': false // Boolean | True to delete queue members
};

apiInstance.postRoutingQueueUsers(queueId, body, opts)
  .then(() => {
    console.log('postRoutingQueueUsers returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingQueueUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **body** | **Object** | Queue Members |  |
 **_delete** | **Boolean** | True to delete queue members | [optional] [default to false] |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postRoutingQueueWrapupcodes"></a>

# [WrapupCode] postRoutingQueueWrapupcodes(queueId, body)


POST /api/v2/routing/queues/{queueId}/wrapupcodes

Add up to 100 wrap-up codes to a queue

Requires ALL permissions:

* routing:queue:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let body = [{}]; // Object | List of wrapup codes

apiInstance.postRoutingQueueWrapupcodes(queueId, body)
  .then((data) => {
    console.log(`postRoutingQueueWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingQueueWrapupcodes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **body** | **Object** | List of wrapup codes |  |
{: class="table table-striped"}

### Return type

**[WrapupCode]**

<a name="postRoutingQueues"></a>

# Queue postRoutingQueues(body)


POST /api/v2/routing/queues

Create a queue

Requires ANY permissions:

* routing:queue:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | Queue

apiInstance.postRoutingQueues(body)
  .then((data) => {
    console.log(`postRoutingQueues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingQueues');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Queue |  |
{: class="table table-striped"}

### Return type

**Queue**

<a name="postRoutingSkillgroupMembersDivisions"></a>

# void postRoutingSkillgroupMembersDivisions(skillGroupId, opts)


POST /api/v2/routing/skillgroups/{skillGroupId}/members/divisions

Add or remove member divisions for this skill group.

Requires ALL permissions:

* routing:skillGroup:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let skillGroupId = "skillGroupId_example"; // String | Skill Group ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.postRoutingSkillgroupMembersDivisions(skillGroupId, opts)
  .then(() => {
    console.log('postRoutingSkillgroupMembersDivisions returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingSkillgroupMembersDivisions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **skillGroupId** | **String** | Skill Group ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postRoutingSkillgroups"></a>

# SkillGroupWithMemberDivisions postRoutingSkillgroups(body)


POST /api/v2/routing/skillgroups

Create a skill group

Requires ALL permissions:

* routing:skillGroup:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | Create skill group

apiInstance.postRoutingSkillgroups(body)
  .then((data) => {
    console.log(`postRoutingSkillgroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingSkillgroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Create skill group |  |
{: class="table table-striped"}

### Return type

**SkillGroupWithMemberDivisions**

<a name="postRoutingSkills"></a>

# RoutingSkill postRoutingSkills(body)


POST /api/v2/routing/skills

Create Skill

Requires ANY permissions:

* routing:skill:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | Skill

apiInstance.postRoutingSkills(body)
  .then((data) => {
    console.log(`postRoutingSkills success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingSkills');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Skill |  |
{: class="table table-striped"}

### Return type

**RoutingSkill**

<a name="postRoutingSmsAddresses"></a>

# SmsAddress postRoutingSmsAddresses(body)


POST /api/v2/routing/sms/addresses

Provision an Address for SMS

Requires ALL permissions:

* sms:phoneNumber:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | SmsAddress

apiInstance.postRoutingSmsAddresses(body)
  .then((data) => {
    console.log(`postRoutingSmsAddresses success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingSmsAddresses');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | SmsAddress |  |
{: class="table table-striped"}

### Return type

**SmsAddress**

<a name="postRoutingSmsPhonenumbers"></a>

# SmsPhoneNumber postRoutingSmsPhonenumbers(body)


POST /api/v2/routing/sms/phonenumbers

Provision a phone number for SMS

Requires ALL permissions:

* sms:phoneNumber:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | SmsPhoneNumber

apiInstance.postRoutingSmsPhonenumbers(body)
  .then((data) => {
    console.log(`postRoutingSmsPhonenumbers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingSmsPhonenumbers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | SmsPhoneNumber |  |
{: class="table table-striped"}

### Return type

**SmsPhoneNumber**

<a name="postRoutingSmsPhonenumbersImport"></a>

# SmsPhoneNumber postRoutingSmsPhonenumbersImport(body)


POST /api/v2/routing/sms/phonenumbers/import

Imports a phone number for SMS

postRoutingSmsPhonenumbersImport is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* sms:phoneNumber:byoImport

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | SmsPhoneNumber

apiInstance.postRoutingSmsPhonenumbersImport(body)
  .then((data) => {
    console.log(`postRoutingSmsPhonenumbersImport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingSmsPhonenumbersImport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | SmsPhoneNumber |  |
{: class="table table-striped"}

### Return type

**SmsPhoneNumber**

<a name="postRoutingUtilizationTags"></a>

# UtilizationTag postRoutingUtilizationTags(body)


POST /api/v2/routing/utilization/tags

Create an utilization tag

postRoutingUtilizationTags is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* routing:utilization:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | UtilizationTag

apiInstance.postRoutingUtilizationTags(body)
  .then((data) => {
    console.log(`postRoutingUtilizationTags success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingUtilizationTags');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | UtilizationTag |  |
{: class="table table-striped"}

### Return type

**UtilizationTag**

<a name="postRoutingWrapupcodes"></a>

# WrapupCode postRoutingWrapupcodes(body)


POST /api/v2/routing/wrapupcodes

Create a wrap-up code

Requires ALL permissions:

* routing:wrapupCode:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | WrapupCode

apiInstance.postRoutingWrapupcodes(body)
  .then((data) => {
    console.log(`postRoutingWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingWrapupcodes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | WrapupCode |  |
{: class="table table-striped"}

### Return type

**WrapupCode**

<a name="postUserRoutinglanguages"></a>

# UserRoutingLanguage postUserRoutinglanguages(userId, body)


POST /api/v2/users/{userId}/routinglanguages

Add routing language to user

Requires ANY permissions:

* routing:skill:assign
* routing:language:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | Language

apiInstance.postUserRoutinglanguages(userId, body)
  .then((data) => {
    console.log(`postUserRoutinglanguages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUserRoutinglanguages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | Language |  |
{: class="table table-striped"}

### Return type

**UserRoutingLanguage**

<a name="postUserRoutingskills"></a>

# UserRoutingSkill postUserRoutingskills(userId, body)


POST /api/v2/users/{userId}/routingskills

Add routing skill to user

Requires ALL permissions:

* routing:skill:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | Skill

apiInstance.postUserRoutingskills(userId, body)
  .then((data) => {
    console.log(`postUserRoutingskills success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUserRoutingskills');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | Skill |  |
{: class="table table-striped"}

### Return type

**UserRoutingSkill**

<a name="putRoutingEmailDomainRoute"></a>

# InboundRoute putRoutingEmailDomainRoute(domainName, routeId, body)


PUT /api/v2/routing/email/domains/{domainName}/routes/{routeId}

Update a route

Requires ALL permissions:

* routing:email:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainName = "domainName_example"; // String | email domain
let routeId = "routeId_example"; // String | route ID
let body = {}; // Object | Route

apiInstance.putRoutingEmailDomainRoute(domainName, routeId, body)
  .then((data) => {
    console.log(`putRoutingEmailDomainRoute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingEmailDomainRoute');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainName** | **String** | email domain |  |
 **routeId** | **String** | route ID |  |
 **body** | **Object** | Route |  |
{: class="table table-striped"}

### Return type

**InboundRoute**

<a name="putRoutingEmailOutboundDomainActivation"></a>

# EmailOutboundDomainResult putRoutingEmailOutboundDomainActivation(domainId)


PUT /api/v2/routing/email/outbound/domains/{domainId}/activation

Request an activation status (cname + dkim) update of an outbound domain

Requires ALL permissions:

* routing:email:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainId = "domainId_example"; // String | domain ID

apiInstance.putRoutingEmailOutboundDomainActivation(domainId)
  .then((data) => {
    console.log(`putRoutingEmailOutboundDomainActivation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingEmailOutboundDomainActivation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | domain ID |  |
{: class="table table-striped"}

### Return type

**EmailOutboundDomainResult**

<a name="putRoutingMessageRecipient"></a>

# Recipient putRoutingMessageRecipient(recipientId, body)


PUT /api/v2/routing/message/recipients/{recipientId}

Update a recipient

Requires ALL permissions:

* routing:message:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let recipientId = "recipientId_example"; // String | Recipient ID
let body = {}; // Object | Recipient

apiInstance.putRoutingMessageRecipient(recipientId, body)
  .then((data) => {
    console.log(`putRoutingMessageRecipient success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingMessageRecipient');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **recipientId** | **String** | Recipient ID |  |
 **body** | **Object** | Recipient |  |
{: class="table table-striped"}

### Return type

**Recipient**

<a name="putRoutingQueue"></a>

# Queue putRoutingQueue(queueId, body)


PUT /api/v2/routing/queues/{queueId}

Update a queue

Requires ANY permissions:

* routing:queue:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let body = {}; // Object | Queue

apiInstance.putRoutingQueue(queueId, body)
  .then((data) => {
    console.log(`putRoutingQueue success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingQueue');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **body** | **Object** | Queue |  |
{: class="table table-striped"}

### Return type

**Queue**

<a name="putRoutingSettings"></a>

# RoutingSettings putRoutingSettings(body)


PUT /api/v2/routing/settings

Update an organization's routing settings

Requires ANY permissions:

* routing:settings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | Organization Settings

apiInstance.putRoutingSettings(body)
  .then((data) => {
    console.log(`putRoutingSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Organization Settings |  |
{: class="table table-striped"}

### Return type

**RoutingSettings**

<a name="putRoutingSettingsTranscription"></a>

# TranscriptionSettings putRoutingSettingsTranscription(body)


PUT /api/v2/routing/settings/transcription

Update Transcription Settings

Requires ANY permissions:

* routing:transcriptionSettings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | Organization Settings

apiInstance.putRoutingSettingsTranscription(body)
  .then((data) => {
    console.log(`putRoutingSettingsTranscription success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingSettingsTranscription');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Organization Settings |  |
{: class="table table-striped"}

### Return type

**TranscriptionSettings**

<a name="putRoutingSmsPhonenumber"></a>

# SmsPhoneNumber putRoutingSmsPhonenumber(addressId, body)


PUT /api/v2/routing/sms/phonenumbers/{addressId}

Update a phone number provisioned for SMS.

Requires ALL permissions:

* sms:phoneNumber:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let addressId = "addressId_example"; // String | Address ID
let body = {}; // Object | SmsPhoneNumber

apiInstance.putRoutingSmsPhonenumber(addressId, body)
  .then((data) => {
    console.log(`putRoutingSmsPhonenumber success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingSmsPhonenumber');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **addressId** | **String** | Address ID |  |
 **body** | **Object** | SmsPhoneNumber |  |
{: class="table table-striped"}

### Return type

**SmsPhoneNumber**

<a name="putRoutingUserUtilization"></a>

# AgentMaxUtilization putRoutingUserUtilization(userId, body)


PUT /api/v2/routing/users/{userId}/utilization

Update the user's max utilization settings.  Include only those media types requiring custom configuration.

Requires ANY permissions:

* routing:utilization:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | utilization

apiInstance.putRoutingUserUtilization(userId, body)
  .then((data) => {
    console.log(`putRoutingUserUtilization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingUserUtilization');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | utilization |  |
{: class="table table-striped"}

### Return type

**AgentMaxUtilization**

<a name="putRoutingUtilization"></a>

# Utilization putRoutingUtilization(body)


PUT /api/v2/routing/utilization

Update the organization-wide max utilization settings.  Include only those media types requiring custom configuration.

Requires ALL permissions:

* routing:utilization:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | utilization

apiInstance.putRoutingUtilization(body)
  .then((data) => {
    console.log(`putRoutingUtilization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingUtilization');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | utilization |  |
{: class="table table-striped"}

### Return type

**Utilization**

<a name="putRoutingWrapupcode"></a>

# WrapupCode putRoutingWrapupcode(codeId, body)


PUT /api/v2/routing/wrapupcodes/{codeId}

Update wrap-up code

Requires ALL permissions:

* routing:wrapupCode:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let codeId = "codeId_example"; // String | Wrapup Code ID
let body = {}; // Object | WrapupCode

apiInstance.putRoutingWrapupcode(codeId, body)
  .then((data) => {
    console.log(`putRoutingWrapupcode success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingWrapupcode');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **codeId** | **String** | Wrapup Code ID |  |
 **body** | **Object** | WrapupCode |  |
{: class="table table-striped"}

### Return type

**WrapupCode**

<a name="putUserRoutingskill"></a>

# UserRoutingSkill putUserRoutingskill(userId, skillId, body)


PUT /api/v2/users/{userId}/routingskills/{skillId}

Update routing skill proficiency or state.

Requires ALL permissions:

* routing:skill:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let skillId = "skillId_example"; // String | skillId
let body = {}; // Object | Skill

apiInstance.putUserRoutingskill(userId, skillId, body)
  .then((data) => {
    console.log(`putUserRoutingskill success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putUserRoutingskill');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **skillId** | **String** | skillId |  |
 **body** | **Object** | Skill |  |
{: class="table table-striped"}

### Return type

**UserRoutingSkill**

<a name="putUserRoutingskillsBulk"></a>

# UserSkillEntityListing putUserRoutingskillsBulk(userId, body)


PUT /api/v2/users/{userId}/routingskills/bulk

Replace all routing skills assigned to a user

Requires ANY permissions:

* routing:skill:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let body = [{}]; // Object | Skill

apiInstance.putUserRoutingskillsBulk(userId, body)
  .then((data) => {
    console.log(`putUserRoutingskillsBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putUserRoutingskillsBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | Skill |  |
{: class="table table-striped"}

### Return type

**UserSkillEntityListing**

