Platform API version: 4073


# Major Changes (12 changes)

**POST /api/v2/languageunderstanding/domains** (1 change)

* Parameter body was made required

**PATCH /api/v2/languageunderstanding/domains/{domainId}** (1 change)

* Parameter body was made required

**POST /api/v2/languageunderstanding/domains/{domainId}/feedback** (1 change)

* Parameter body was made required

**POST /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/detect** (1 change)

* Parameter body was made required

**PUT /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}** (1 change)

* Parameter body was made required

**EntityListing** (5 changes)

* Property pageSize was removed
* Property pageNumber was removed
* Property total was removed
* Property pageCount was removed
* Property entities was changed from DataTableImportJob[] to object[]

**SurveyForm** (2 changes)

* Property headerImageId was removed
* Property headerImageUrl was removed


# Minor Changes (29 changes)

**/api/v2/audits/query/realtime** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/textbots/bots/execute** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}** (1 change)

* Operation delete was added. Summary: Delete an NLU Domain Version

**/api/v2/languageunderstanding/domains/{domainId}/versions** (1 change)

* Operation post was added. Summary: Create an NLU Domain Version.

**EdgeGroup** (1 change)

* Optional property hybrid was added

**NluDomainVersion** (1 change)

* Optional property published was added

**AuditRealtimeQueryResultsResponse** (1 change)

* Model was added

**AuditRealtimeQueryRequest** (1 change)

* Model was added

**ButtonComponent** (1 change)

* Model was added

**ContentActions** (1 change)

* Model was added

**ContentAttachment** (1 change)

* Model was added

**ContentGeneric** (1 change)

* Model was added

**ContentList** (1 change)

* Model was added

**ContentLocation** (1 change)

* Model was added

**ContentNotificationTemplate** (1 change)

* Model was added

**ContentQuickReply** (1 change)

* Model was added

**ListItemComponent** (1 change)

* Model was added

**MessageContent** (1 change)

* Model was added

**NotificationTemplateBody** (1 change)

* Model was added

**NotificationTemplateFooter** (1 change)

* Model was added

**NotificationTemplateHeader** (1 change)

* Model was added

**NotificationTemplateParameter** (1 change)

* Model was added

**PostTextMessage** (1 change)

* Model was added

**PostTextResponse** (1 change)

* Model was added

**AmazonLexRequest** (1 change)

* Model was added

**GoogleDialogflowCustomSettings** (1 change)

* Model was added

**PostTextRequest** (1 change)

* Model was added


# Point Changes (5 changes)

**POST /api/v2/languageunderstanding/domains** (1 change)

* Description was changed for parameter body

**PATCH /api/v2/languageunderstanding/domains/{domainId}** (1 change)

* Description was changed for parameter body

**POST /api/v2/languageunderstanding/domains/{domainId}/feedback** (1 change)

* Description was changed for parameter body

**POST /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/detect** (1 change)

* Description was changed for parameter body

**PUT /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}** (1 change)

* Description was changed for parameter body
