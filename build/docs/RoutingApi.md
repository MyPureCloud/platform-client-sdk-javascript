# RoutingApi

# platformClient.RoutingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteRoutingAssessment**](RoutingApi#deleteRoutingAssessment) | **DELETE** /api/v2/routing/assessments/{assessmentId} | Delete single benefit assessment.
[**deleteRoutingDirectroutingbackupSettingsMe**](RoutingApi#deleteRoutingDirectroutingbackupSettingsMe) | **DELETE** /api/v2/routing/directroutingbackup/settings/me | Delete the user's Direct Routing Backup settings and revert to the Direct Routing Queue default.
[**deleteRoutingEmailDomain**](RoutingApi#deleteRoutingEmailDomain) | **DELETE** /api/v2/routing/email/domains/{domainId} | Delete a domain
[**deleteRoutingEmailDomainRoute**](RoutingApi#deleteRoutingEmailDomainRoute) | **DELETE** /api/v2/routing/email/domains/{domainName}/routes/{routeId} | Delete a route
[**deleteRoutingEmailOutboundDomain**](RoutingApi#deleteRoutingEmailOutboundDomain) | **DELETE** /api/v2/routing/email/outbound/domains/{domainId} | Delete an outbound domain
[**deleteRoutingLanguage**](RoutingApi#deleteRoutingLanguage) | **DELETE** /api/v2/routing/languages/{languageId} | Delete a routing language
[**deleteRoutingPredictor**](RoutingApi#deleteRoutingPredictor) | **DELETE** /api/v2/routing/predictors/{predictorId} | Delete single predictor.
[**deleteRoutingQueue**](RoutingApi#deleteRoutingQueue) | **DELETE** /api/v2/routing/queues/{queueId} | Delete a queue
[**deleteRoutingQueueMember**](RoutingApi#deleteRoutingQueueMember) | **DELETE** /api/v2/routing/queues/{queueId}/members/{memberId} | Delete a queue member.
[**deleteRoutingQueueUser**](RoutingApi#deleteRoutingQueueUser) | **DELETE** /api/v2/routing/queues/{queueId}/users/{memberId} | DEPRECATED: use DELETE /routing/queues/{queueId}/members/{memberId}.  Delete queue member.
[**deleteRoutingQueueWrapupcode**](RoutingApi#deleteRoutingQueueWrapupcode) | **DELETE** /api/v2/routing/queues/{queueId}/wrapupcodes/{codeId} | Delete a wrap-up code from a queue
[**deleteRoutingSettings**](RoutingApi#deleteRoutingSettings) | **DELETE** /api/v2/routing/settings | Delete an organization's routing settings
[**deleteRoutingSkill**](RoutingApi#deleteRoutingSkill) | **DELETE** /api/v2/routing/skills/{skillId} | Delete Routing Skill
[**deleteRoutingSkillgroup**](RoutingApi#deleteRoutingSkillgroup) | **DELETE** /api/v2/routing/skillgroups/{skillGroupId} | Remove skill group definition
[**deleteRoutingSmsAddress**](RoutingApi#deleteRoutingSmsAddress) | **DELETE** /api/v2/routing/sms/addresses/{addressId} | Delete an Address by Id for SMS
[**deleteRoutingSmsPhonenumber**](RoutingApi#deleteRoutingSmsPhonenumber) | **DELETE** /api/v2/routing/sms/phonenumbers/{phoneNumberId} | Delete a phone number provisioned for SMS.
[**deleteRoutingUserDirectroutingbackupSettings**](RoutingApi#deleteRoutingUserDirectroutingbackupSettings) | **DELETE** /api/v2/routing/users/{userId}/directroutingbackup/settings | Delete the user's Direct Routing Backup settings and revert to the Direct Routing Queue default.
[**deleteRoutingUserUtilization**](RoutingApi#deleteRoutingUserUtilization) | **DELETE** /api/v2/routing/users/{userId}/utilization | Delete the user's max utilization settings and revert to the organization-wide default.
[**deleteRoutingUtilization**](RoutingApi#deleteRoutingUtilization) | **DELETE** /api/v2/routing/utilization | Delete the organization-wide max utilization settings and revert to the system default.
[**deleteRoutingUtilizationLabel**](RoutingApi#deleteRoutingUtilizationLabel) | **DELETE** /api/v2/routing/utilization/labels/{labelId} | Delete a utilization label
[**deleteRoutingUtilizationTag**](RoutingApi#deleteRoutingUtilizationTag) | **DELETE** /api/v2/routing/utilization/tags/{tagId} | Delete an utilization tag
[**deleteRoutingWrapupcode**](RoutingApi#deleteRoutingWrapupcode) | **DELETE** /api/v2/routing/wrapupcodes/{codeId} | Delete wrap-up code
[**deleteUserRoutinglanguage**](RoutingApi#deleteUserRoutinglanguage) | **DELETE** /api/v2/users/{userId}/routinglanguages/{languageId} | Remove a routing language from a user
[**deleteUserRoutingskill**](RoutingApi#deleteUserRoutingskill) | **DELETE** /api/v2/users/{userId}/routingskills/{skillId} | Remove a routing skill from a user
[**getRoutingAssessment**](RoutingApi#getRoutingAssessment) | **GET** /api/v2/routing/assessments/{assessmentId} | Retrieve a single benefit assessment.
[**getRoutingAssessments**](RoutingApi#getRoutingAssessments) | **GET** /api/v2/routing/assessments | Retrieve all benefit assessments.
[**getRoutingAssessmentsJob**](RoutingApi#getRoutingAssessmentsJob) | **GET** /api/v2/routing/assessments/jobs/{jobId} | Retrieve a single benefit assessments job.
[**getRoutingAssessmentsJobs**](RoutingApi#getRoutingAssessmentsJobs) | **GET** /api/v2/routing/assessments/jobs | Retrieve all benefit assessment jobs.
[**getRoutingAvailablemediatypes**](RoutingApi#getRoutingAvailablemediatypes) | **GET** /api/v2/routing/availablemediatypes | Get available media types
[**getRoutingDirectroutingbackupSettingsMe**](RoutingApi#getRoutingDirectroutingbackupSettingsMe) | **GET** /api/v2/routing/directroutingbackup/settings/me | Get the user's Direct Routing Backup settings.
[**getRoutingEmailDomain**](RoutingApi#getRoutingEmailDomain) | **GET** /api/v2/routing/email/domains/{domainId} | Get domain
[**getRoutingEmailDomainRoute**](RoutingApi#getRoutingEmailDomainRoute) | **GET** /api/v2/routing/email/domains/{domainName}/routes/{routeId} | Get a route
[**getRoutingEmailDomainRouteIdentityresolution**](RoutingApi#getRoutingEmailDomainRouteIdentityresolution) | **GET** /api/v2/routing/email/domains/{domainName}/routes/{routeId}/identityresolution | Get a route identity resolution setting.
[**getRoutingEmailDomainRoutes**](RoutingApi#getRoutingEmailDomainRoutes) | **GET** /api/v2/routing/email/domains/{domainName}/routes | Get routes
[**getRoutingEmailDomains**](RoutingApi#getRoutingEmailDomains) | **GET** /api/v2/routing/email/domains | Get domains
[**getRoutingEmailOutboundDomain**](RoutingApi#getRoutingEmailOutboundDomain) | **GET** /api/v2/routing/email/outbound/domains/{domainId} | Get domain
[**getRoutingEmailOutboundDomainActivation**](RoutingApi#getRoutingEmailOutboundDomainActivation) | **GET** /api/v2/routing/email/outbound/domains/{domainId}/activation | Get activation status (cname + dkim) of an outbound domain
[**getRoutingEmailOutboundDomainSearch**](RoutingApi#getRoutingEmailOutboundDomainSearch) | **GET** /api/v2/routing/email/outbound/domains/{domainId}/search | Search a domain across organizations
[**getRoutingEmailOutboundDomains**](RoutingApi#getRoutingEmailOutboundDomains) | **GET** /api/v2/routing/email/outbound/domains | Get outbound domains
[**getRoutingEmailSetup**](RoutingApi#getRoutingEmailSetup) | **GET** /api/v2/routing/email/setup | Get email setup
[**getRoutingLanguage**](RoutingApi#getRoutingLanguage) | **GET** /api/v2/routing/languages/{languageId} | Get a routing language
[**getRoutingLanguages**](RoutingApi#getRoutingLanguages) | **GET** /api/v2/routing/languages | Get the list of supported languages.
[**getRoutingMessageRecipient**](RoutingApi#getRoutingMessageRecipient) | **GET** /api/v2/routing/message/recipients/{recipientId} | Get a recipient
[**getRoutingMessageRecipients**](RoutingApi#getRoutingMessageRecipients) | **GET** /api/v2/routing/message/recipients | Get recipients
[**getRoutingPredictor**](RoutingApi#getRoutingPredictor) | **GET** /api/v2/routing/predictors/{predictorId} | Retrieve a single predictor.
[**getRoutingPredictorModelFeatures**](RoutingApi#getRoutingPredictorModelFeatures) | **GET** /api/v2/routing/predictors/{predictorId}/models/{modelId}/features | Retrieve Predictor Model Features.
[**getRoutingPredictorModels**](RoutingApi#getRoutingPredictorModels) | **GET** /api/v2/routing/predictors/{predictorId}/models | Retrieve Predictor Models and Top Features.
[**getRoutingPredictors**](RoutingApi#getRoutingPredictors) | **GET** /api/v2/routing/predictors | Retrieve all predictors.
[**getRoutingPredictorsKeyperformanceindicators**](RoutingApi#getRoutingPredictorsKeyperformanceindicators) | **GET** /api/v2/routing/predictors/keyperformanceindicators | Get a list of Key Performance Indicators
[**getRoutingQueue**](RoutingApi#getRoutingQueue) | **GET** /api/v2/routing/queues/{queueId} | Get details about this queue.
[**getRoutingQueueAssistant**](RoutingApi#getRoutingQueueAssistant) | **GET** /api/v2/routing/queues/{queueId}/assistant | Get an assistant associated with a queue.
[**getRoutingQueueComparisonperiod**](RoutingApi#getRoutingQueueComparisonperiod) | **GET** /api/v2/routing/queues/{queueId}/comparisonperiods/{comparisonPeriodId} | Get a Comparison Period.
[**getRoutingQueueComparisonperiods**](RoutingApi#getRoutingQueueComparisonperiods) | **GET** /api/v2/routing/queues/{queueId}/comparisonperiods | Get list of comparison periods
[**getRoutingQueueEstimatedwaittime**](RoutingApi#getRoutingQueueEstimatedwaittime) | **GET** /api/v2/routing/queues/{queueId}/estimatedwaittime | Get Estimated Wait Time
[**getRoutingQueueIdentityresolution**](RoutingApi#getRoutingQueueIdentityresolution) | **GET** /api/v2/routing/queues/{queueId}/identityresolution | Get Queue IdentityResolution Settings.
[**getRoutingQueueMediatypeEstimatedwaittime**](RoutingApi#getRoutingQueueMediatypeEstimatedwaittime) | **GET** /api/v2/routing/queues/{queueId}/mediatypes/{mediaType}/estimatedwaittime | Get Estimated Wait Time
[**getRoutingQueueMembers**](RoutingApi#getRoutingQueueMembers) | **GET** /api/v2/routing/queues/{queueId}/members | Get the members of this queue.
[**getRoutingQueueUsers**](RoutingApi#getRoutingQueueUsers) | **GET** /api/v2/routing/queues/{queueId}/users | DEPRECATED: use GET /routing/queues/{queueId}/members.  Get the members of this queue.
[**getRoutingQueueWrapupcodes**](RoutingApi#getRoutingQueueWrapupcodes) | **GET** /api/v2/routing/queues/{queueId}/wrapupcodes | Get the wrap-up codes for a queue
[**getRoutingQueues**](RoutingApi#getRoutingQueues) | **GET** /api/v2/routing/queues | Get list of queues.
[**getRoutingQueuesDivisionviews**](RoutingApi#getRoutingQueuesDivisionviews) | **GET** /api/v2/routing/queues/divisionviews | Get a paged listing of simplified queue objects, filterable by name, queue ID(s), or division ID(s).
[**getRoutingQueuesDivisionviewsAll**](RoutingApi#getRoutingQueuesDivisionviewsAll) | **GET** /api/v2/routing/queues/divisionviews/all | Get a paged listing of simplified queue objects, sorted by name.  Can be used to get a digest of all queues in an organization.
[**getRoutingQueuesMe**](RoutingApi#getRoutingQueuesMe) | **GET** /api/v2/routing/queues/me | Get a paged listing of queues the user is a member of.
[**getRoutingSettings**](RoutingApi#getRoutingSettings) | **GET** /api/v2/routing/settings | Get an organization's routing settings
[**getRoutingSettingsContactcenter**](RoutingApi#getRoutingSettingsContactcenter) | **GET** /api/v2/routing/settings/contactcenter | Get Contact Center Settings
[**getRoutingSettingsTranscription**](RoutingApi#getRoutingSettingsTranscription) | **GET** /api/v2/routing/settings/transcription | Get Transcription Settings
[**getRoutingSkill**](RoutingApi#getRoutingSkill) | **GET** /api/v2/routing/skills/{skillId} | Get Routing Skill
[**getRoutingSkillgroup**](RoutingApi#getRoutingSkillgroup) | **GET** /api/v2/routing/skillgroups/{skillGroupId} | Get skill group
[**getRoutingSkillgroupMembers**](RoutingApi#getRoutingSkillgroupMembers) | **GET** /api/v2/routing/skillgroups/{skillGroupId}/members | Get skill group members
[**getRoutingSkillgroupMembersDivisions**](RoutingApi#getRoutingSkillgroupMembersDivisions) | **GET** /api/v2/routing/skillgroups/{skillGroupId}/members/divisions | Get list of member divisions for this skill group.
[**getRoutingSkillgroups**](RoutingApi#getRoutingSkillgroups) | **GET** /api/v2/routing/skillgroups | Get skill group listing
[**getRoutingSkills**](RoutingApi#getRoutingSkills) | **GET** /api/v2/routing/skills | Get the list of routing skills.
[**getRoutingSmsAddress**](RoutingApi#getRoutingSmsAddress) | **GET** /api/v2/routing/sms/addresses/{addressId} | Get an Address by Id for SMS
[**getRoutingSmsAddresses**](RoutingApi#getRoutingSmsAddresses) | **GET** /api/v2/routing/sms/addresses | Get a list of Addresses for SMS
[**getRoutingSmsAvailablephonenumbers**](RoutingApi#getRoutingSmsAvailablephonenumbers) | **GET** /api/v2/routing/sms/availablephonenumbers | Get a list of available phone numbers for SMS provisioning.
[**getRoutingSmsIdentityresolutionPhonenumber**](RoutingApi#getRoutingSmsIdentityresolutionPhonenumber) | **GET** /api/v2/routing/sms/identityresolution/phonenumbers/{addressId} | Get a SMS identity resolution settings.
[**getRoutingSmsPhonenumber**](RoutingApi#getRoutingSmsPhonenumber) | **GET** /api/v2/routing/sms/phonenumbers/{phoneNumberId} | Get a phone number provisioned for SMS.
[**getRoutingSmsPhonenumbers**](RoutingApi#getRoutingSmsPhonenumbers) | **GET** /api/v2/routing/sms/phonenumbers | Get a list of provisioned phone numbers.
[**getRoutingUserDirectroutingbackupSettings**](RoutingApi#getRoutingUserDirectroutingbackupSettings) | **GET** /api/v2/routing/users/{userId}/directroutingbackup/settings | Get the user's Direct Routing Backup settings.
[**getRoutingUserUtilization**](RoutingApi#getRoutingUserUtilization) | **GET** /api/v2/routing/users/{userId}/utilization | Get the user's max utilization settings.  If not configured, the organization-wide default is returned.
[**getRoutingUtilization**](RoutingApi#getRoutingUtilization) | **GET** /api/v2/routing/utilization | Get the organization-wide max utilization settings.
[**getRoutingUtilizationLabel**](RoutingApi#getRoutingUtilizationLabel) | **GET** /api/v2/routing/utilization/labels/{labelId} | Get details about this utilization label
[**getRoutingUtilizationLabelAgents**](RoutingApi#getRoutingUtilizationLabelAgents) | **GET** /api/v2/routing/utilization/labels/{labelId}/agents | Get list of agent ids associated with a utilization label
[**getRoutingUtilizationLabels**](RoutingApi#getRoutingUtilizationLabels) | **GET** /api/v2/routing/utilization/labels | Get list of utilization labels
[**getRoutingUtilizationTag**](RoutingApi#getRoutingUtilizationTag) | **GET** /api/v2/routing/utilization/tags/{tagId} | Get details about this utilization tag
[**getRoutingUtilizationTagAgents**](RoutingApi#getRoutingUtilizationTagAgents) | **GET** /api/v2/routing/utilization/tags/{tagId}/agents | Get list of agent ids associated with a utilization tag
[**getRoutingUtilizationTags**](RoutingApi#getRoutingUtilizationTags) | **GET** /api/v2/routing/utilization/tags | Get list of utilization tags
[**getRoutingWrapupcode**](RoutingApi#getRoutingWrapupcode) | **GET** /api/v2/routing/wrapupcodes/{codeId} | Get details about this wrap-up code.
[**getRoutingWrapupcodes**](RoutingApi#getRoutingWrapupcodes) | **GET** /api/v2/routing/wrapupcodes | Get list of wrapup codes.
[**getRoutingWrapupcodesDivisionview**](RoutingApi#getRoutingWrapupcodesDivisionview) | **GET** /api/v2/routing/wrapupcodes/divisionviews/{codeId} | Get a simplified wrap-up code.
[**getRoutingWrapupcodesDivisionviews**](RoutingApi#getRoutingWrapupcodesDivisionviews) | **GET** /api/v2/routing/wrapupcodes/divisionviews | Get a paged listing of simplified wrapup code objects, filterable by name, wrapup code ID(s), or division ID(s).
[**getUserQueues**](RoutingApi#getUserQueues) | **GET** /api/v2/users/{userId}/queues | Get queues for user
[**getUserRoutinglanguages**](RoutingApi#getUserRoutinglanguages) | **GET** /api/v2/users/{userId}/routinglanguages | List routing languages assigned to a user
[**getUserRoutingskills**](RoutingApi#getUserRoutingskills) | **GET** /api/v2/users/{userId}/routingskills | List routing skills assigned to a user
[**getUserSkillgroups**](RoutingApi#getUserSkillgroups) | **GET** /api/v2/users/{userId}/skillgroups | Get skill groups for a user
[**patchRoutingConversation**](RoutingApi#patchRoutingConversation) | **PATCH** /api/v2/routing/conversations/{conversationId} | Update attributes of an in-queue conversation
[**patchRoutingEmailDomain**](RoutingApi#patchRoutingEmailDomain) | **PATCH** /api/v2/routing/email/domains/{domainId} | Update domain settings
[**patchRoutingEmailDomainValidate**](RoutingApi#patchRoutingEmailDomainValidate) | **PATCH** /api/v2/routing/email/domains/{domainId}/validate | Validate domain settings
[**patchRoutingPredictor**](RoutingApi#patchRoutingPredictor) | **PATCH** /api/v2/routing/predictors/{predictorId} | Update single predictor.
[**patchRoutingQueueMember**](RoutingApi#patchRoutingQueueMember) | **PATCH** /api/v2/routing/queues/{queueId}/members/{memberId} | Update the ring number OR joined status for a queue member.
[**patchRoutingQueueMembers**](RoutingApi#patchRoutingQueueMembers) | **PATCH** /api/v2/routing/queues/{queueId}/members | Join or unjoin a set of up to 100 users for a queue
[**patchRoutingQueueUser**](RoutingApi#patchRoutingQueueUser) | **PATCH** /api/v2/routing/queues/{queueId}/users/{memberId} | DEPRECATED: use PATCH /routing/queues/{queueId}/members/{memberId}.  Update the ring number OR joined status for a User in a Queue.
[**patchRoutingQueueUsers**](RoutingApi#patchRoutingQueueUsers) | **PATCH** /api/v2/routing/queues/{queueId}/users | DEPRECATED: use PATCH /routing/queues/{queueId}/members.  Join or unjoin a set of users for a queue.
[**patchRoutingSettingsContactcenter**](RoutingApi#patchRoutingSettingsContactcenter) | **PATCH** /api/v2/routing/settings/contactcenter | Update Contact Center Settings
[**patchRoutingSettingsTranscription**](RoutingApi#patchRoutingSettingsTranscription) | **PATCH** /api/v2/routing/settings/transcription | Patch Transcription Settings
[**patchRoutingSkillgroup**](RoutingApi#patchRoutingSkillgroup) | **PATCH** /api/v2/routing/skillgroups/{skillGroupId} | Update skill group definition
[**patchRoutingSmsPhonenumber**](RoutingApi#patchRoutingSmsPhonenumber) | **PATCH** /api/v2/routing/sms/phonenumbers/{phoneNumberId} | Update a phone number provisioned for SMS.
[**patchUserQueue**](RoutingApi#patchUserQueue) | **PATCH** /api/v2/users/{userId}/queues/{queueId} | Join or unjoin a queue for a user
[**patchUserQueues**](RoutingApi#patchUserQueues) | **PATCH** /api/v2/users/{userId}/queues | Join or unjoin a set of queues for a user
[**patchUserRoutinglanguage**](RoutingApi#patchUserRoutinglanguage) | **PATCH** /api/v2/users/{userId}/routinglanguages/{languageId} | Update an assigned routing language's proficiency
[**patchUserRoutinglanguagesBulk**](RoutingApi#patchUserRoutinglanguagesBulk) | **PATCH** /api/v2/users/{userId}/routinglanguages/bulk | Assign multiple routing languages to a user. Max 50 routing languages in request body
[**patchUserRoutingskillsBulk**](RoutingApi#patchUserRoutingskillsBulk) | **PATCH** /api/v2/users/{userId}/routingskills/bulk | Assign multiple routing skills to a user
[**postAnalyticsQueuesObservationsQuery**](RoutingApi#postAnalyticsQueuesObservationsQuery) | **POST** /api/v2/analytics/queues/observations/query | Query for queue observations
[**postAnalyticsRoutingActivityQuery**](RoutingApi#postAnalyticsRoutingActivityQuery) | **POST** /api/v2/analytics/routing/activity/query | Query for user activity observations
[**postRoutingAssessments**](RoutingApi#postRoutingAssessments) | **POST** /api/v2/routing/assessments | Create a benefit assessment.
[**postRoutingAssessmentsJobs**](RoutingApi#postRoutingAssessmentsJobs) | **POST** /api/v2/routing/assessments/jobs | Create a benefit assessment job.
[**postRoutingEmailDomainRoutes**](RoutingApi#postRoutingEmailDomainRoutes) | **POST** /api/v2/routing/email/domains/{domainName}/routes | Create a route
[**postRoutingEmailDomainTestconnection**](RoutingApi#postRoutingEmailDomainTestconnection) | **POST** /api/v2/routing/email/domains/{domainId}/testconnection | Tests the custom SMTP server integration connection set on this domain
[**postRoutingEmailDomains**](RoutingApi#postRoutingEmailDomains) | **POST** /api/v2/routing/email/domains | Create a domain
[**postRoutingEmailOutboundDomains**](RoutingApi#postRoutingEmailOutboundDomains) | **POST** /api/v2/routing/email/outbound/domains | Create a domain
[**postRoutingEmailOutboundDomainsSimulated**](RoutingApi#postRoutingEmailOutboundDomainsSimulated) | **POST** /api/v2/routing/email/outbound/domains/simulated | Create a simulated domain
[**postRoutingLanguages**](RoutingApi#postRoutingLanguages) | **POST** /api/v2/routing/languages | Create Language
[**postRoutingPredictors**](RoutingApi#postRoutingPredictors) | **POST** /api/v2/routing/predictors | Create a predictor.
[**postRoutingQueueMembers**](RoutingApi#postRoutingQueueMembers) | **POST** /api/v2/routing/queues/{queueId}/members | Bulk add or delete up to 100 queue members
[**postRoutingQueueUsers**](RoutingApi#postRoutingQueueUsers) | **POST** /api/v2/routing/queues/{queueId}/users | DEPRECATED: use POST /routing/queues/{queueId}/members.  Bulk add or delete up to 100 queue members.
[**postRoutingQueueWrapupcodes**](RoutingApi#postRoutingQueueWrapupcodes) | **POST** /api/v2/routing/queues/{queueId}/wrapupcodes | Add up to 100 wrap-up codes to a queue
[**postRoutingQueues**](RoutingApi#postRoutingQueues) | **POST** /api/v2/routing/queues | Create a queue
[**postRoutingSkillgroupMembersDivisions**](RoutingApi#postRoutingSkillgroupMembersDivisions) | **POST** /api/v2/routing/skillgroups/{skillGroupId}/members/divisions | Add or remove member divisions for this skill group.
[**postRoutingSkillgroups**](RoutingApi#postRoutingSkillgroups) | **POST** /api/v2/routing/skillgroups | Create a skill group
[**postRoutingSkills**](RoutingApi#postRoutingSkills) | **POST** /api/v2/routing/skills | Create Skill
[**postRoutingSmsAddresses**](RoutingApi#postRoutingSmsAddresses) | **POST** /api/v2/routing/sms/addresses | Provision an Address for SMS
[**postRoutingSmsPhonenumbers**](RoutingApi#postRoutingSmsPhonenumbers) | **POST** /api/v2/routing/sms/phonenumbers | Provision a phone number for SMS
[**postRoutingSmsPhonenumbersAlphanumeric**](RoutingApi#postRoutingSmsPhonenumbersAlphanumeric) | **POST** /api/v2/routing/sms/phonenumbers/alphanumeric | Provision an alphanumeric number for SMS
[**postRoutingSmsPhonenumbersImport**](RoutingApi#postRoutingSmsPhonenumbersImport) | **POST** /api/v2/routing/sms/phonenumbers/import | Imports a phone number for SMS
[**postRoutingUtilizationLabels**](RoutingApi#postRoutingUtilizationLabels) | **POST** /api/v2/routing/utilization/labels | Create a utilization label
[**postRoutingUtilizationTags**](RoutingApi#postRoutingUtilizationTags) | **POST** /api/v2/routing/utilization/tags | Create an utilization tag
[**postRoutingWrapupcodes**](RoutingApi#postRoutingWrapupcodes) | **POST** /api/v2/routing/wrapupcodes | Create a wrap-up code
[**postUserRoutinglanguages**](RoutingApi#postUserRoutinglanguages) | **POST** /api/v2/users/{userId}/routinglanguages | Assign a routing language to a user
[**postUserRoutingskills**](RoutingApi#postUserRoutingskills) | **POST** /api/v2/users/{userId}/routingskills | Assign a routing skill to a user
[**putRoutingDirectroutingbackupSettingsMe**](RoutingApi#putRoutingDirectroutingbackupSettingsMe) | **PUT** /api/v2/routing/directroutingbackup/settings/me | Update the user's Direct Routing Backup settings.
[**putRoutingEmailDomainRoute**](RoutingApi#putRoutingEmailDomainRoute) | **PUT** /api/v2/routing/email/domains/{domainName}/routes/{routeId} | Update a route
[**putRoutingEmailDomainRouteIdentityresolution**](RoutingApi#putRoutingEmailDomainRouteIdentityresolution) | **PUT** /api/v2/routing/email/domains/{domainName}/routes/{routeId}/identityresolution | Update identity resolution settings for a route.
[**putRoutingEmailOutboundDomainActivation**](RoutingApi#putRoutingEmailOutboundDomainActivation) | **PUT** /api/v2/routing/email/outbound/domains/{domainId}/activation | Request an activation status (cname + dkim) update of an outbound domain
[**putRoutingMessageRecipient**](RoutingApi#putRoutingMessageRecipient) | **PUT** /api/v2/routing/message/recipients/{recipientId} | Update a recipient
[**putRoutingQueue**](RoutingApi#putRoutingQueue) | **PUT** /api/v2/routing/queues/{queueId} | Update a queue
[**putRoutingQueueIdentityresolution**](RoutingApi#putRoutingQueueIdentityresolution) | **PUT** /api/v2/routing/queues/{queueId}/identityresolution | Update Queue IdentityResolution Settings.
[**putRoutingSettings**](RoutingApi#putRoutingSettings) | **PUT** /api/v2/routing/settings | Update an organization's routing settings
[**putRoutingSettingsTranscription**](RoutingApi#putRoutingSettingsTranscription) | **PUT** /api/v2/routing/settings/transcription | Update Transcription Settings
[**putRoutingSmsIdentityresolutionPhonenumber**](RoutingApi#putRoutingSmsIdentityresolutionPhonenumber) | **PUT** /api/v2/routing/sms/identityresolution/phonenumbers/{addressId} | Update an SMS identity resolution settings.
[**putRoutingUserDirectroutingbackupSettings**](RoutingApi#putRoutingUserDirectroutingbackupSettings) | **PUT** /api/v2/routing/users/{userId}/directroutingbackup/settings | Update the user's Direct Routing Backup settings.
[**putRoutingUserUtilization**](RoutingApi#putRoutingUserUtilization) | **PUT** /api/v2/routing/users/{userId}/utilization | Update the user's max utilization settings.  Include only those media types requiring custom configuration.
[**putRoutingUtilization**](RoutingApi#putRoutingUtilization) | **PUT** /api/v2/routing/utilization | Update the organization-wide max utilization settings.  Include only those media types requiring custom configuration.
[**putRoutingUtilizationLabel**](RoutingApi#putRoutingUtilizationLabel) | **PUT** /api/v2/routing/utilization/labels/{labelId} | Update a utilization label
[**putRoutingWrapupcode**](RoutingApi#putRoutingWrapupcode) | **PUT** /api/v2/routing/wrapupcodes/{codeId} | Update wrap-up code
[**putUserRoutingskill**](RoutingApi#putUserRoutingskill) | **PUT** /api/v2/users/{userId}/routingskills/{skillId} | Update an assigned routing skill's proficiency
[**putUserRoutingskillsBulk**](RoutingApi#putUserRoutingskillsBulk) | **PUT** /api/v2/users/{userId}/routingskills/bulk | Assign multiple routing skills to a user, replacing any current assignments



## deleteRoutingAssessment

> void deleteRoutingAssessment(assessmentId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteRoutingDirectroutingbackupSettingsMe

> void deleteRoutingDirectroutingbackupSettingsMe()


DELETE /api/v2/routing/directroutingbackup/settings/me

Delete the user's Direct Routing Backup settings and revert to the Direct Routing Queue default.

Requires ANY permissions:

* routing:directRoutingBackup:selfDelete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

apiInstance.deleteRoutingDirectroutingbackupSettingsMe()
  .then(() => {
    console.log('deleteRoutingDirectroutingbackupSettingsMe returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingDirectroutingbackupSettingsMe');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

void (no response body)


## deleteRoutingEmailDomain

> void deleteRoutingEmailDomain(domainId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteRoutingEmailDomainRoute

> void deleteRoutingEmailDomainRoute(domainName, routeId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteRoutingEmailOutboundDomain

> void deleteRoutingEmailOutboundDomain(domainId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteRoutingLanguage

> void deleteRoutingLanguage(languageId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteRoutingPredictor

> void deleteRoutingPredictor(predictorId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteRoutingQueue

> void deleteRoutingQueue(queueId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteRoutingQueueMember

> void deleteRoutingQueueMember(queueId, memberId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteRoutingQueueUser

> void deleteRoutingQueueUser(queueId, memberId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteRoutingQueueWrapupcode

> void deleteRoutingQueueWrapupcode(queueId, codeId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteRoutingSettings

> void deleteRoutingSettings()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## deleteRoutingSkill

> void deleteRoutingSkill(skillId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteRoutingSkillgroup

> void deleteRoutingSkillgroup(skillGroupId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteRoutingSmsAddress

> void deleteRoutingSmsAddress(addressId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteRoutingSmsPhonenumber

> void deleteRoutingSmsPhonenumber(phoneNumberId)


DELETE /api/v2/routing/sms/phonenumbers/{phoneNumberId}

Delete a phone number provisioned for SMS.

Requires ALL permissions:

* sms:phoneNumber:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let phoneNumberId = "phoneNumberId_example"; // String | phone number

apiInstance.deleteRoutingSmsPhonenumber(phoneNumberId)
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
 **phoneNumberId** | **String** | phone number |  |

### Return type

void (no response body)


## deleteRoutingUserDirectroutingbackupSettings

> void deleteRoutingUserDirectroutingbackupSettings(userId)


DELETE /api/v2/routing/users/{userId}/directroutingbackup/settings

Delete the user's Direct Routing Backup settings and revert to the Direct Routing Queue default.

Requires ANY permissions:

* routing:directRoutingBackup:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID

apiInstance.deleteRoutingUserDirectroutingbackupSettings(userId)
  .then(() => {
    console.log('deleteRoutingUserDirectroutingbackupSettings returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingUserDirectroutingbackupSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |

### Return type

void (no response body)


## deleteRoutingUserUtilization

> void deleteRoutingUserUtilization(userId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteRoutingUtilization

> void deleteRoutingUtilization()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## deleteRoutingUtilizationLabel

> void deleteRoutingUtilizationLabel(labelId, opts)


DELETE /api/v2/routing/utilization/labels/{labelId}

Delete a utilization label

Requires ALL permissions:

* routing:utilization:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let labelId = "labelId_example"; // String | Utilization Label ID
let opts = { 
  'forceDelete': false // Boolean | Remove all label usages (if found) without warning
};

apiInstance.deleteRoutingUtilizationLabel(labelId, opts)
  .then(() => {
    console.log('deleteRoutingUtilizationLabel returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingUtilizationLabel');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **labelId** | **String** | Utilization Label ID |  |
 **forceDelete** | **Boolean** | Remove all label usages (if found) without warning | [optional] [default to false] |

### Return type

void (no response body)


## deleteRoutingUtilizationTag

> void deleteRoutingUtilizationTag(tagId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteRoutingWrapupcode

> void deleteRoutingWrapupcode(codeId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteUserRoutinglanguage

> void deleteUserRoutinglanguage(userId, languageId)


DELETE /api/v2/users/{userId}/routinglanguages/{languageId}

Remove a routing language from a user

Requires ANY permissions:

* routing:skill:assign
* routing:language:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteUserRoutingskill

> void deleteUserRoutingskill(userId, skillId)


DELETE /api/v2/users/{userId}/routingskills/{skillId}

Remove a routing skill from a user

Requires ALL permissions:

* routing:skill:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## getRoutingAssessment

> BenefitAssessment getRoutingAssessment(assessmentId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BenefitAssessment**


## getRoutingAssessments

> AssessmentListing getRoutingAssessments(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AssessmentListing**


## getRoutingAssessmentsJob

> BenefitAssessmentJob getRoutingAssessmentsJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BenefitAssessmentJob**


## getRoutingAssessmentsJobs

> AssessmentJobListing getRoutingAssessmentsJobs(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AssessmentJobListing**


## getRoutingAvailablemediatypes

> AvailableMediaTypeEntityListing getRoutingAvailablemediatypes()


GET /api/v2/routing/availablemediatypes

Get available media types

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getRoutingDirectroutingbackupSettingsMe

> AgentDirectRoutingBackupSettings getRoutingDirectroutingbackupSettingsMe()


GET /api/v2/routing/directroutingbackup/settings/me

Get the user's Direct Routing Backup settings.

Requires ANY permissions:

* routing:directRoutingBackup:selfView

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

apiInstance.getRoutingDirectroutingbackupSettingsMe()
  .then((data) => {
    console.log(`getRoutingDirectroutingbackupSettingsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingDirectroutingbackupSettingsMe');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**AgentDirectRoutingBackupSettings**


## getRoutingEmailDomain

> InboundDomain getRoutingEmailDomain(domainId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**InboundDomain**


## getRoutingEmailDomainRoute

> InboundRoute getRoutingEmailDomainRoute(domainName, routeId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainName = "domainName_example"; // String | email domain
let routeId = "routeId_example"; // String | route ID
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};

apiInstance.getRoutingEmailDomainRoute(domainName, routeId, opts)
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
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: identityresolution |

### Return type

**InboundRoute**


## getRoutingEmailDomainRouteIdentityresolution

> IdentityResolutionConfig getRoutingEmailDomainRouteIdentityresolution(domainName, routeId)


GET /api/v2/routing/email/domains/{domainName}/routes/{routeId}/identityresolution

Get a route identity resolution setting.

Requires ALL permissions:

* routing:email:manage
* routing:identityResolution:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainName = "domainName_example"; // String | email domain
let routeId = "routeId_example"; // String | route ID

apiInstance.getRoutingEmailDomainRouteIdentityresolution(domainName, routeId)
  .then((data) => {
    console.log(`getRoutingEmailDomainRouteIdentityresolution success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingEmailDomainRouteIdentityresolution');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainName** | **String** | email domain |  |
 **routeId** | **String** | route ID |  |

### Return type

**IdentityResolutionConfig**


## getRoutingEmailDomainRoutes

> InboundRouteEntityListing getRoutingEmailDomainRoutes(domainName, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainName = "domainName_example"; // String | email domain
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'pattern': "pattern_example", // String | Filter routes by the route's pattern property
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
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
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: identityresolution |

### Return type

**InboundRouteEntityListing**


## getRoutingEmailDomains

> InboundDomainEntityListing getRoutingEmailDomains(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'excludeStatus': false, // Boolean | Exclude MX record data
  'filter': "filter_example" // String | Optional search filter that, if defined, use the **filter** syntax, eg: **mySearchedPattern**. Note that **** is considered no filter.
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
 **filter** | **String** | Optional search filter that, if defined, use the **filter** syntax, eg: **mySearchedPattern**. Note that **** is considered no filter. | [optional]  |

### Return type

**InboundDomainEntityListing**


## getRoutingEmailOutboundDomain

> OutboundDomain getRoutingEmailOutboundDomain(domainId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**OutboundDomain**


## getRoutingEmailOutboundDomainActivation

> EmailOutboundDomainResult getRoutingEmailOutboundDomainActivation(domainId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**EmailOutboundDomainResult**


## getRoutingEmailOutboundDomainSearch

> OutboundDomain getRoutingEmailOutboundDomainSearch(domainId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**OutboundDomain**


## getRoutingEmailOutboundDomains

> OutboundDomainEntityListing getRoutingEmailOutboundDomains(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'filter': "filter_example" // String | Optional search filter that, if defined, use the **filter** syntax, eg: **mySearchedPattern**. Note that **** is considered no filter.
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
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **filter** | **String** | Optional search filter that, if defined, use the **filter** syntax, eg: **mySearchedPattern**. Note that **** is considered no filter. | [optional]  |

### Return type

**OutboundDomainEntityListing**


## getRoutingEmailSetup

> EmailSetup getRoutingEmailSetup()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getRoutingLanguage

> Language getRoutingLanguage(languageId)


GET /api/v2/routing/languages/{languageId}

Get a routing language

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Language**


## getRoutingLanguages

> LanguageEntityListing getRoutingLanguages(opts)


GET /api/v2/routing/languages

Get the list of supported languages.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**LanguageEntityListing**


## getRoutingMessageRecipient

> Recipient getRoutingMessageRecipient(recipientId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Recipient**


## getRoutingMessageRecipients

> RecipientListing getRoutingMessageRecipients(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **messengerType** | **String** | Messenger Type | [optional] <br />**Values**: sms, facebook, twitter, whatsapp, open, instagram, apple |
 **name** | **String** | Recipient Name | [optional]  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |

### Return type

**RecipientListing**


## getRoutingPredictor

> Predictor getRoutingPredictor(predictorId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Predictor**


## getRoutingPredictorModelFeatures

> PredictorModelFeatureListing getRoutingPredictorModelFeatures(predictorId, modelId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**PredictorModelFeatureListing**


## getRoutingPredictorModels

> PredictorModels getRoutingPredictorModels(predictorId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**PredictorModels**


## getRoutingPredictors

> PredictorListing getRoutingPredictors(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**PredictorListing**


## getRoutingPredictorsKeyperformanceindicators

> [KeyPerformanceIndicator] getRoutingPredictorsKeyperformanceindicators(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**[KeyPerformanceIndicator]**


## getRoutingQueue

> Queue getRoutingQueue(queueId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};

apiInstance.getRoutingQueue(queueId, opts)
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
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: identityresolution |

### Return type

**Queue**


## getRoutingQueueAssistant

> AssistantQueue getRoutingQueueAssistant(queueId, opts)


GET /api/v2/routing/queues/{queueId}/assistant

Get an assistant associated with a queue.

Requires ALL permissions:

* assistants:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let opts = { 
  'expand': "expand_example" // String | Which fields, if any, to expand.
};

apiInstance.getRoutingQueueAssistant(queueId, opts)
  .then((data) => {
    console.log(`getRoutingQueueAssistant success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueueAssistant');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **expand** | **String** | Which fields, if any, to expand. | [optional] <br />**Values**: assistant |

### Return type

**AssistantQueue**


## getRoutingQueueComparisonperiod

> ComparisonPeriod getRoutingQueueComparisonperiod(queueId, comparisonPeriodId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ComparisonPeriod**


## getRoutingQueueComparisonperiods

> ComparisonPeriodListing getRoutingQueueComparisonperiods(queueId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ComparisonPeriodListing**


## getRoutingQueueEstimatedwaittime

> EstimatedWaitTimePredictions getRoutingQueueEstimatedwaittime(queueId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**EstimatedWaitTimePredictions**


## getRoutingQueueIdentityresolution

> IdentityResolutionQueueConfig getRoutingQueueIdentityresolution(queueId)


GET /api/v2/routing/queues/{queueId}/identityresolution

Get Queue IdentityResolution Settings.

Requires ALL permissions:

* routing:queue:view
* routing:identityResolution:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID

apiInstance.getRoutingQueueIdentityresolution(queueId)
  .then((data) => {
    console.log(`getRoutingQueueIdentityresolution success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueueIdentityresolution');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |

### Return type

**IdentityResolutionQueueConfig**


## getRoutingQueueMediatypeEstimatedwaittime

> EstimatedWaitTimePredictions getRoutingQueueMediatypeEstimatedwaittime(queueId, mediaType, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | queueId
let mediaType = "mediaType_example"; // String | mediaType
let opts = { 
  'labelId': "labelId_example" // String | Unique id that represents the interaction label used with media type for EWT calculation
};

apiInstance.getRoutingQueueMediatypeEstimatedwaittime(queueId, mediaType, opts)
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
 **mediaType** | **String** | mediaType | <br />**Values**: all, call, chat, callback, email, videoComm, message |
 **labelId** | **String** | Unique id that represents the interaction label used with media type for EWT calculation | [optional]  |

### Return type

**EstimatedWaitTimePredictions**


## getRoutingQueueMembers

> QueueMemberEntityListing getRoutingQueueMembers(queueId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, authorization.unusedRoles, team, workPlanBidRanks, externalContactsSettings, groups, profileSkills, certifications, locations, skills, languages, languagePreference, employerInfo, biography, dateLastLogin, dateWelcomeSent |
 **name** | **String** | Filter by queue member name (contains-style search) | [optional]  |
 **profileSkills** | **[String]** | Filter by profile skill (contains-style search) | [optional]  |
 **skills** | **[String]** | Filter by skill (contains-style search) | [optional]  |
 **languages** | **[String]** | Filter by language (contains-style search) | [optional]  |
 **routingStatus** | **[String]** | Filter by routing status | [optional]  |
 **presence** | **[String]** | Filter by presence | [optional]  |
 **memberBy** | **String** | Filter by member type | [optional] <br />**Values**: user, group |
 **joined** | **Boolean** | Filter by joined status | [optional] <br />**Values**: true, false |

### Return type

**QueueMemberEntityListing**


## getRoutingQueueUsers

> QueueMemberEntityListingV1 getRoutingQueueUsers(queueId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, authorization.unusedRoles, team, workPlanBidRanks, externalContactsSettings, groups, profileSkills, certifications, locations, skills, languages, languagePreference, employerInfo, biography, dateLastLogin, dateWelcomeSent |
 **joined** | **Boolean** | Filter by joined status | [optional]  |
 **name** | **String** | Filter by queue member name | [optional]  |
 **profileSkills** | **[String]** | Filter by profile skill | [optional]  |
 **skills** | **[String]** | Filter by skill | [optional]  |
 **languages** | **[String]** | Filter by language | [optional]  |
 **routingStatus** | **[String]** | Filter by routing status | [optional]  |
 **presence** | **[String]** | Filter by presence | [optional]  |

### Return type

**QueueMemberEntityListingV1**


## getRoutingQueueWrapupcodes

> WrapupCodeEntityListing getRoutingQueueWrapupcodes(queueId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'name': "name_example" // String | Wrapup code's name (trailing asterisks allowed)
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
 **name** | **String** | Wrapup code's name (trailing asterisks allowed) | [optional]  |

### Return type

**WrapupCodeEntityListing**


## getRoutingQueues

> QueueEntityListing getRoutingQueues(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortOrder': "asc", // String | Note: results are sorted by name.
  'name': "name_example", // String | Include only queues with the given name (leading and trailing asterisks allowed)
  'id': ["id_example"], // [String] | Include only queues with the specified ID(s)
  'divisionId': ["divisionId_example"], // [String] | Include only queues in the specified division ID(s)
  'peerId': ["peerId_example"], // [String] | Include only queues with the specified peer ID(s)
  'cannedResponseLibraryId': "cannedResponseLibraryId_example", // String | Include only queues explicitly associated with the specified canned response library ID
  'hasPeer': true, // Boolean | Include only queues with a peer ID
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
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
 **name** | **String** | Include only queues with the given name (leading and trailing asterisks allowed) | [optional]  |
 **id** | **[String]** | Include only queues with the specified ID(s) | [optional]  |
 **divisionId** | **[String]** | Include only queues in the specified division ID(s) | [optional]  |
 **peerId** | **[String]** | Include only queues with the specified peer ID(s) | [optional]  |
 **cannedResponseLibraryId** | **String** | Include only queues explicitly associated with the specified canned response library ID | [optional]  |
 **hasPeer** | **Boolean** | Include only queues with a peer ID | [optional]  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: identityresolution |

### Return type

**QueueEntityListing**


## getRoutingQueuesDivisionviews

> QueueEntityListing getRoutingQueuesDivisionviews(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**QueueEntityListing**


## getRoutingQueuesDivisionviewsAll

> QueueEntityListing getRoutingQueuesDivisionviewsAll(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**QueueEntityListing**


## getRoutingQueuesMe

> UserQueueEntityListing getRoutingQueuesMe(opts)


GET /api/v2/routing/queues/me

Get a paged listing of queues the user is a member of.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserQueueEntityListing**


## getRoutingSettings

> RoutingSettings getRoutingSettings()


GET /api/v2/routing/settings

Get an organization's routing settings

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getRoutingSettingsContactcenter

> ContactCenterSettings getRoutingSettingsContactcenter()


GET /api/v2/routing/settings/contactcenter

Get Contact Center Settings

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getRoutingSettingsTranscription

> TranscriptionSettings getRoutingSettingsTranscription()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getRoutingSkill

> RoutingSkill getRoutingSkill(skillId)


GET /api/v2/routing/skills/{skillId}

Get Routing Skill

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**RoutingSkill**


## getRoutingSkillgroup

> SkillGroup getRoutingSkillgroup(skillGroupId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SkillGroup**


## getRoutingSkillgroupMembers

> SkillGroupMemberEntityListing getRoutingSkillgroupMembers(skillGroupId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SkillGroupMemberEntityListing**


## getRoutingSkillgroupMembersDivisions

> SkillGroupMemberDivisionList getRoutingSkillgroupMembersDivisions(skillGroupId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SkillGroupMemberDivisionList**


## getRoutingSkillgroups

> SkillGroupEntityListing getRoutingSkillgroups(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SkillGroupEntityListing**


## getRoutingSkills

> SkillEntityListing getRoutingSkills(opts)


GET /api/v2/routing/skills

Get the list of routing skills.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SkillEntityListing**


## getRoutingSmsAddress

> SmsAddress getRoutingSmsAddress(addressId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SmsAddress**


## getRoutingSmsAddresses

> SmsAddressEntityListing getRoutingSmsAddresses(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SmsAddressEntityListing**


## getRoutingSmsAvailablephonenumbers

> SMSAvailablePhoneNumberEntityListing getRoutingSmsAvailablephonenumbers(countryCode, phoneNumberType, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SMSAvailablePhoneNumberEntityListing**


## getRoutingSmsIdentityresolutionPhonenumber

> IdentityResolutionConfig getRoutingSmsIdentityresolutionPhonenumber(addressId)


GET /api/v2/routing/sms/identityresolution/phonenumbers/{addressId}

Get a SMS identity resolution settings.

Requires ALL permissions:

* sms:phoneNumber:view
* routing:identityResolution:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let addressId = "addressId_example"; // String | Address ID

apiInstance.getRoutingSmsIdentityresolutionPhonenumber(addressId)
  .then((data) => {
    console.log(`getRoutingSmsIdentityresolutionPhonenumber success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSmsIdentityresolutionPhonenumber');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **addressId** | **String** | Address ID |  |

### Return type

**IdentityResolutionConfig**


## getRoutingSmsPhonenumber

> SmsPhoneNumber getRoutingSmsPhonenumber(phoneNumberId, opts)


GET /api/v2/routing/sms/phonenumbers/{phoneNumberId}

Get a phone number provisioned for SMS.

Requires ALL permissions:

* sms:phoneNumber:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let phoneNumberId = "phoneNumberId_example"; // String | phone number
let opts = { 
  'expand': "expand_example" // String | Expand response with additional information
};

apiInstance.getRoutingSmsPhonenumber(phoneNumberId, opts)
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
 **phoneNumberId** | **String** | phone number |  |
 **expand** | **String** | Expand response with additional information | [optional] <br />**Values**: compliance, supportedContent |

### Return type

**SmsPhoneNumber**


## getRoutingSmsPhonenumbers

> SmsPhoneNumberEntityListing getRoutingSmsPhonenumbers(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
  'integrationId': "integrationId_example", // String | Filter on the Genesys Cloud integration id to which the phone number belongs to
  'supportedContentId': "supportedContentId_example", // String | Filter based on the supported content ID
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
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
 **phoneNumberType** | **[String]** | Filter on phone number type | [optional] <br />**Values**: local, mobile, tollfree, shortcode, alphanumeric |
 **phoneNumberStatus** | **[String]** | Filter on phone number status | [optional] <br />**Values**: active, invalid, initiated, porting, pending, pending-cancellation |
 **countryCode** | **[String]** | Filter on country code | [optional]  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Optional field to sort results | [optional] <br />**Values**: phoneNumber, countryCode, country, dateCreated, dateModified, phoneNumberStatus, phoneNumberType, purchaseDate, supportsMms, supportsSms, supportsVoice |
 **sortOrder** | **String** | Sort order | [optional] <br />**Values**: ascending, descending |
 **language** | **String** | A language tag (which is sometimes referred to as a locale identifier) to use to localize country field and sort operations | [optional] [default to en-US] |
 **integrationId** | **String** | Filter on the Genesys Cloud integration id to which the phone number belongs to | [optional]  |
 **supportedContentId** | **String** | Filter based on the supported content ID | [optional]  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: identityresolution, supportedContent |

### Return type

**SmsPhoneNumberEntityListing**


## getRoutingUserDirectroutingbackupSettings

> AgentDirectRoutingBackupSettings getRoutingUserDirectroutingbackupSettings(userId)


GET /api/v2/routing/users/{userId}/directroutingbackup/settings

Get the user's Direct Routing Backup settings.

Requires ANY permissions:

* routing:directRoutingBackup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID

apiInstance.getRoutingUserDirectroutingbackupSettings(userId)
  .then((data) => {
    console.log(`getRoutingUserDirectroutingbackupSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingUserDirectroutingbackupSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |

### Return type

**AgentDirectRoutingBackupSettings**


## getRoutingUserUtilization

> AgentMaxUtilizationResponse getRoutingUserUtilization(userId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AgentMaxUtilizationResponse**


## getRoutingUtilization

> UtilizationResponse getRoutingUtilization()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

**UtilizationResponse**


## getRoutingUtilizationLabel

> UtilizationLabel getRoutingUtilizationLabel(labelId)


GET /api/v2/routing/utilization/labels/{labelId}

Get details about this utilization label

Requires ALL permissions:

* routing:utilization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let labelId = "labelId_example"; // String | Utilization Label ID

apiInstance.getRoutingUtilizationLabel(labelId)
  .then((data) => {
    console.log(`getRoutingUtilizationLabel success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingUtilizationLabel');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **labelId** | **String** | Utilization Label ID |  |

### Return type

**UtilizationLabel**


## getRoutingUtilizationLabelAgents

> **[Object]** getRoutingUtilizationLabelAgents(labelId)


GET /api/v2/routing/utilization/labels/{labelId}/agents

Get list of agent ids associated with a utilization label

Requires ALL permissions:

* routing:utilization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let labelId = "labelId_example"; // String | Utilization Label ID

apiInstance.getRoutingUtilizationLabelAgents(labelId)
  .then((data) => {
    console.log(`getRoutingUtilizationLabelAgents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingUtilizationLabelAgents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **labelId** | **String** | Utilization Label ID |  |

### Return type

**[Object]**


## getRoutingUtilizationLabels

> UtilizationLabelEntityListing getRoutingUtilizationLabels(opts)


GET /api/v2/routing/utilization/labels

Get list of utilization labels

Requires ALL permissions:

* routing:utilization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ascending", // String | Sort order by name
  'name': "name_example" // String | Utilization label's name (Wildcard is supported, e.g., 'label1*', '*label*'
};

apiInstance.getRoutingUtilizationLabels(opts)
  .then((data) => {
    console.log(`getRoutingUtilizationLabels success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingUtilizationLabels');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Sort order by name | [optional] [default to ascending]<br />**Values**: ascending, descending |
 **name** | **String** | Utilization label's name (Wildcard is supported, e.g., 'label1*', '*label*' | [optional]  |

### Return type

**UtilizationLabelEntityListing**


## getRoutingUtilizationTag

> UtilizationTag getRoutingUtilizationTag(tagId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UtilizationTag**


## getRoutingUtilizationTagAgents

> **[Object]** getRoutingUtilizationTagAgents(tagId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**[Object]**


## getRoutingUtilizationTags

> UtilizationTagEntityListing getRoutingUtilizationTags(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UtilizationTagEntityListing**


## getRoutingWrapupcode

> WrapupCode getRoutingWrapupcode(codeId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WrapupCode**


## getRoutingWrapupcodes

> WrapupCodeEntityListing getRoutingWrapupcodes(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "name", // String | Sort by
  'sortOrder': "ascending", // String | Sort order
  'name': "name_example", // String | Wrapup code's name ('Sort by' param is ignored unless this field is provided)
  'id': ["id_example"], // [String] | Filter by wrapup code ID(s)
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
 **name** | **String** | Wrapup code's name ('Sort by' param is ignored unless this field is provided) | [optional]  |
 **id** | **[String]** | Filter by wrapup code ID(s) | [optional]  |
 **divisionId** | **[String]** | Filter by division ID(s) | [optional]  |

### Return type

**WrapupCodeEntityListing**


## getRoutingWrapupcodesDivisionview

> WrapupCode getRoutingWrapupcodesDivisionview(codeId)


GET /api/v2/routing/wrapupcodes/divisionviews/{codeId}

Get a simplified wrap-up code.

Requires ALL permissions:

* routing:wrapupCode:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let codeId = "codeId_example"; // String | Wrapup Code ID

apiInstance.getRoutingWrapupcodesDivisionview(codeId)
  .then((data) => {
    console.log(`getRoutingWrapupcodesDivisionview success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingWrapupcodesDivisionview');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **codeId** | **String** | Wrapup Code ID |  |

### Return type

**WrapupCode**


## getRoutingWrapupcodesDivisionviews

> WrapupCodeEntityListing getRoutingWrapupcodesDivisionviews(opts)


GET /api/v2/routing/wrapupcodes/divisionviews

Get a paged listing of simplified wrapup code objects, filterable by name, wrapup code ID(s), or division ID(s).

Specifying both name and ID parameters is not supported.

Requires ALL permissions:

* routing:wrapupCode:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'name': "name_example", // String | Name (trailing asterisks allowed)
  'id': ["id_example"], // [String] | Wrapup code ID(s)
  'divisionId': ["divisionId_example"], // [String] | Division ID(s)
  'includeState': "includeState_example" // String | Wrapup code state(s) to include
};

apiInstance.getRoutingWrapupcodesDivisionviews(opts)
  .then((data) => {
    console.log(`getRoutingWrapupcodesDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingWrapupcodesDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **name** | **String** | Name (trailing asterisks allowed) | [optional]  |
 **id** | **[String]** | Wrapup code ID(s) | [optional]  |
 **divisionId** | **[String]** | Division ID(s) | [optional]  |
 **includeState** | **String** | Wrapup code state(s) to include | [optional] <br />**Values**: Active, Deleted, ActiveAndDeleted |

### Return type

**WrapupCodeEntityListing**


## getUserQueues

> UserQueueEntityListing getUserQueues(userId, opts)


GET /api/v2/users/{userId}/queues

Get queues for user

Requires ANY permissions:

* routing:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserQueueEntityListing**


## getUserRoutinglanguages

> UserLanguageEntityListing getUserRoutinglanguages(userId, opts)


GET /api/v2/users/{userId}/routinglanguages

List routing languages assigned to a user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserLanguageEntityListing**


## getUserRoutingskills

> UserSkillEntityListing getUserRoutingskills(userId, opts)


GET /api/v2/users/{userId}/routingskills

List routing skills assigned to a user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserSkillEntityListing**


## getUserSkillgroups

> UserSkillGroupEntityListing getUserSkillgroups(userId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserSkillGroupEntityListing**


## patchRoutingConversation

> RoutingConversationAttributesResponse patchRoutingConversation(conversationId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**RoutingConversationAttributesResponse**


## patchRoutingEmailDomain

> InboundDomain patchRoutingEmailDomain(domainId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**InboundDomain**


## patchRoutingEmailDomainValidate

> InboundDomain patchRoutingEmailDomainValidate(domainId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**InboundDomain**


## patchRoutingPredictor

> Predictor patchRoutingPredictor(predictorId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Predictor**


## patchRoutingQueueMember

> void patchRoutingQueueMember(queueId, memberId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## patchRoutingQueueMembers

> QueueMemberEntityListing patchRoutingQueueMembers(queueId, body)


PATCH /api/v2/routing/queues/{queueId}/members

Join or unjoin a set of up to 100 users for a queue

Requires ANY permissions:

* routing:queue:edit
* routing:queueMember:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**QueueMemberEntityListing**


## patchRoutingQueueUser

> void patchRoutingQueueUser(queueId, memberId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## patchRoutingQueueUsers

> QueueMemberEntityListingV1 patchRoutingQueueUsers(queueId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**QueueMemberEntityListingV1**


## patchRoutingSettingsContactcenter

> void patchRoutingSettingsContactcenter(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## patchRoutingSettingsTranscription

> TranscriptionSettings patchRoutingSettingsTranscription(body)


PATCH /api/v2/routing/settings/transcription

Patch Transcription Settings

Requires ANY permissions:

* routing:transcriptionSettings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | Organization Settings

apiInstance.patchRoutingSettingsTranscription(body)
  .then((data) => {
    console.log(`patchRoutingSettingsTranscription success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchRoutingSettingsTranscription');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Organization Settings |  |

### Return type

**TranscriptionSettings**


## patchRoutingSkillgroup

> SkillGroup patchRoutingSkillgroup(skillGroupId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SkillGroup**


## patchRoutingSmsPhonenumber

> SmsPhoneNumber patchRoutingSmsPhonenumber(phoneNumberId, body)


PATCH /api/v2/routing/sms/phonenumbers/{phoneNumberId}

Update a phone number provisioned for SMS.

Requires ALL permissions:

* sms:phoneNumber:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let phoneNumberId = "phoneNumberId_example"; // String | phone number
let body = {}; // Object | SmsPhoneNumberPatchRequest

apiInstance.patchRoutingSmsPhonenumber(phoneNumberId, body)
  .then((data) => {
    console.log(`patchRoutingSmsPhonenumber success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchRoutingSmsPhonenumber');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneNumberId** | **String** | phone number |  |
 **body** | **Object** | SmsPhoneNumberPatchRequest |  |

### Return type

**SmsPhoneNumber**


## patchUserQueue

> UserQueue patchUserQueue(queueId, userId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserQueue**


## patchUserQueues

> UserQueueEntityListing patchUserQueues(userId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserQueueEntityListing**


## patchUserRoutinglanguage

> UserRoutingLanguage patchUserRoutinglanguage(userId, languageId, body)


PATCH /api/v2/users/{userId}/routinglanguages/{languageId}

Update an assigned routing language's proficiency

Requires ANY permissions:

* routing:skill:assign
* routing:language:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserRoutingLanguage**


## patchUserRoutinglanguagesBulk

> UserLanguageEntityListing patchUserRoutinglanguagesBulk(userId, body)


PATCH /api/v2/users/{userId}/routinglanguages/bulk

Assign multiple routing languages to a user. Max 50 routing languages in request body

Requires ANY permissions:

* routing:skill:assign
* routing:language:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserLanguageEntityListing**


## patchUserRoutingskillsBulk

> UserSkillEntityListing patchUserRoutingskillsBulk(userId, body)


PATCH /api/v2/users/{userId}/routingskills/bulk

Assign multiple routing skills to a user

Requires ANY permissions:

* routing:skill:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserSkillEntityListing**


## postAnalyticsQueuesObservationsQuery

> QueueObservationQueryResponse postAnalyticsQueuesObservationsQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**QueueObservationQueryResponse**


## postAnalyticsRoutingActivityQuery

> RoutingActivityResponse postAnalyticsRoutingActivityQuery(body, opts)


POST /api/v2/analytics/routing/activity/query

Query for user activity observations

Requires ANY permissions:

* analytics:queueObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**RoutingActivityResponse**


## postRoutingAssessments

> BenefitAssessment postRoutingAssessments(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BenefitAssessment**


## postRoutingAssessmentsJobs

> BenefitAssessmentJob postRoutingAssessmentsJobs(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BenefitAssessmentJob**


## postRoutingEmailDomainRoutes

> InboundRoute postRoutingEmailDomainRoutes(domainName, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**InboundRoute**


## postRoutingEmailDomainTestconnection

> TestMessage postRoutingEmailDomainTestconnection(domainId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TestMessage**


## postRoutingEmailDomains

> InboundDomain postRoutingEmailDomains(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**InboundDomain**


## postRoutingEmailOutboundDomains

> EmailOutboundDomainResult postRoutingEmailOutboundDomains(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**EmailOutboundDomainResult**


## postRoutingEmailOutboundDomainsSimulated

> EmailOutboundDomainResult postRoutingEmailOutboundDomainsSimulated(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**EmailOutboundDomainResult**


## postRoutingLanguages

> Language postRoutingLanguages(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Language**


## postRoutingPredictors

> Predictor postRoutingPredictors(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Predictor**


## postRoutingQueueMembers

> void postRoutingQueueMembers(queueId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## postRoutingQueueUsers

> void postRoutingQueueUsers(queueId, body, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## postRoutingQueueWrapupcodes

> [WrapupCode] postRoutingQueueWrapupcodes(queueId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**[WrapupCode]**


## postRoutingQueues

> Queue postRoutingQueues(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Queue**


## postRoutingSkillgroupMembersDivisions

> void postRoutingSkillgroupMembersDivisions(skillGroupId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## postRoutingSkillgroups

> SkillGroupWithMemberDivisions postRoutingSkillgroups(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SkillGroupWithMemberDivisions**


## postRoutingSkills

> RoutingSkill postRoutingSkills(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**RoutingSkill**


## postRoutingSmsAddresses

> SmsAddress postRoutingSmsAddresses(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SmsAddress**


## postRoutingSmsPhonenumbers

> SmsPhoneNumber postRoutingSmsPhonenumbers(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SmsPhoneNumber**


## postRoutingSmsPhonenumbersAlphanumeric

> SmsPhoneNumber postRoutingSmsPhonenumbersAlphanumeric(body)


POST /api/v2/routing/sms/phonenumbers/alphanumeric

Provision an alphanumeric number for SMS

postRoutingSmsPhonenumbersAlphanumeric is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* sms:phoneNumber:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | SmsPhoneNumber

apiInstance.postRoutingSmsPhonenumbersAlphanumeric(body)
  .then((data) => {
    console.log(`postRoutingSmsPhonenumbersAlphanumeric success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingSmsPhonenumbersAlphanumeric');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | SmsPhoneNumber |  |

### Return type

**SmsPhoneNumber**


## postRoutingSmsPhonenumbersImport

> SmsPhoneNumber postRoutingSmsPhonenumbersImport(body)


POST /api/v2/routing/sms/phonenumbers/import

Imports a phone number for SMS

Requires ALL permissions:

* sms:phoneNumber:byoImport

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SmsPhoneNumber**


## postRoutingUtilizationLabels

> UtilizationLabel postRoutingUtilizationLabels(body)


POST /api/v2/routing/utilization/labels

Create a utilization label

Requires ALL permissions:

* routing:utilization:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | UtilizationLabel

apiInstance.postRoutingUtilizationLabels(body)
  .then((data) => {
    console.log(`postRoutingUtilizationLabels success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingUtilizationLabels');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | UtilizationLabel |  |

### Return type

**UtilizationLabel**


## postRoutingUtilizationTags

> UtilizationTag postRoutingUtilizationTags(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UtilizationTag**


## postRoutingWrapupcodes

> WrapupCode postRoutingWrapupcodes(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WrapupCode**


## postUserRoutinglanguages

> UserRoutingLanguage postUserRoutinglanguages(userId, body)


POST /api/v2/users/{userId}/routinglanguages

Assign a routing language to a user

Requires ANY permissions:

* routing:skill:assign
* routing:language:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserRoutingLanguage**


## postUserRoutingskills

> UserRoutingSkill postUserRoutingskills(userId, body)


POST /api/v2/users/{userId}/routingskills

Assign a routing skill to a user

Requires ALL permissions:

* routing:skill:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserRoutingSkill**


## putRoutingDirectroutingbackupSettingsMe

> AgentDirectRoutingBackupSettings putRoutingDirectroutingbackupSettingsMe(body)


PUT /api/v2/routing/directroutingbackup/settings/me

Update the user's Direct Routing Backup settings.

Requires ANY permissions:

* routing:directRoutingBackup:selfEdit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | directRoutingBackup

apiInstance.putRoutingDirectroutingbackupSettingsMe(body)
  .then((data) => {
    console.log(`putRoutingDirectroutingbackupSettingsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingDirectroutingbackupSettingsMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | directRoutingBackup |  |

### Return type

**AgentDirectRoutingBackupSettings**


## putRoutingEmailDomainRoute

> InboundRoute putRoutingEmailDomainRoute(domainName, routeId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**InboundRoute**


## putRoutingEmailDomainRouteIdentityresolution

> IdentityResolutionConfig putRoutingEmailDomainRouteIdentityresolution(domainName, routeId, body)


PUT /api/v2/routing/email/domains/{domainName}/routes/{routeId}/identityresolution

Update identity resolution settings for a route.

Requires ALL permissions:

* routing:email:manage
* routing:identityResolution:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainName = "domainName_example"; // String | email domain
let routeId = "routeId_example"; // String | route ID
let body = {}; // Object | 

apiInstance.putRoutingEmailDomainRouteIdentityresolution(domainName, routeId, body)
  .then((data) => {
    console.log(`putRoutingEmailDomainRouteIdentityresolution success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingEmailDomainRouteIdentityresolution');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainName** | **String** | email domain |  |
 **routeId** | **String** | route ID |  |
 **body** | **Object** |  |  |

### Return type

**IdentityResolutionConfig**


## putRoutingEmailOutboundDomainActivation

> EmailOutboundDomainResult putRoutingEmailOutboundDomainActivation(domainId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**EmailOutboundDomainResult**


## putRoutingMessageRecipient

> Recipient putRoutingMessageRecipient(recipientId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Recipient**


## putRoutingQueue

> Queue putRoutingQueue(queueId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Queue**


## putRoutingQueueIdentityresolution

> IdentityResolutionQueueConfig putRoutingQueueIdentityresolution(queueId, body)


PUT /api/v2/routing/queues/{queueId}/identityresolution

Update Queue IdentityResolution Settings.

Requires ALL permissions:

* routing:queue:edit
* routing:identityResolution:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let body = {}; // Object | 

apiInstance.putRoutingQueueIdentityresolution(queueId, body)
  .then((data) => {
    console.log(`putRoutingQueueIdentityresolution success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingQueueIdentityresolution');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **body** | **Object** |  |  |

### Return type

**IdentityResolutionQueueConfig**


## putRoutingSettings

> RoutingSettings putRoutingSettings(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**RoutingSettings**


## putRoutingSettingsTranscription

> TranscriptionSettings putRoutingSettingsTranscription(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TranscriptionSettings**


## putRoutingSmsIdentityresolutionPhonenumber

> IdentityResolutionConfig putRoutingSmsIdentityresolutionPhonenumber(addressId, body)


PUT /api/v2/routing/sms/identityresolution/phonenumbers/{addressId}

Update an SMS identity resolution settings.

Requires ALL permissions:

* sms:phoneNumber:edit
* routing:identityResolution:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let addressId = "addressId_example"; // String | Address ID
let body = {}; // Object | 

apiInstance.putRoutingSmsIdentityresolutionPhonenumber(addressId, body)
  .then((data) => {
    console.log(`putRoutingSmsIdentityresolutionPhonenumber success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingSmsIdentityresolutionPhonenumber');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **addressId** | **String** | Address ID |  |
 **body** | **Object** |  |  |

### Return type

**IdentityResolutionConfig**


## putRoutingUserDirectroutingbackupSettings

> AgentDirectRoutingBackupSettings putRoutingUserDirectroutingbackupSettings(userId, body)


PUT /api/v2/routing/users/{userId}/directroutingbackup/settings

Update the user's Direct Routing Backup settings.

Requires ANY permissions:

* routing:directRoutingBackup:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | directRoutingBackup

apiInstance.putRoutingUserDirectroutingbackupSettings(userId, body)
  .then((data) => {
    console.log(`putRoutingUserDirectroutingbackupSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingUserDirectroutingbackupSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | directRoutingBackup |  |

### Return type

**AgentDirectRoutingBackupSettings**


## putRoutingUserUtilization

> AgentMaxUtilizationResponse putRoutingUserUtilization(userId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AgentMaxUtilizationResponse**


## putRoutingUtilization

> UtilizationResponse putRoutingUtilization(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UtilizationResponse**


## putRoutingUtilizationLabel

> UtilizationLabel putRoutingUtilizationLabel(labelId, body)


PUT /api/v2/routing/utilization/labels/{labelId}

Update a utilization label

Requires ALL permissions:

* routing:utilization:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let labelId = "labelId_example"; // String | Utilization Label ID
let body = {}; // Object | UtilizationLabel

apiInstance.putRoutingUtilizationLabel(labelId, body)
  .then((data) => {
    console.log(`putRoutingUtilizationLabel success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingUtilizationLabel');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **labelId** | **String** | Utilization Label ID |  |
 **body** | **Object** | UtilizationLabel |  |

### Return type

**UtilizationLabel**


## putRoutingWrapupcode

> WrapupCode putRoutingWrapupcode(codeId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WrapupCode**


## putUserRoutingskill

> UserRoutingSkill putUserRoutingskill(userId, skillId, body)


PUT /api/v2/users/{userId}/routingskills/{skillId}

Update an assigned routing skill's proficiency

Requires ALL permissions:

* routing:skill:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserRoutingSkill**


## putUserRoutingskillsBulk

> UserSkillEntityListing putUserRoutingskillsBulk(userId, body)


PUT /api/v2/users/{userId}/routingskills/bulk

Assign multiple routing skills to a user, replacing any current assignments

Requires ANY permissions:

* routing:skill:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserSkillEntityListing**


_purecloud-platform-client-v2@229.1.0_
