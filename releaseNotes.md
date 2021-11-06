Platform API version: 5152


# Major Changes (4 changes)

**PUT /api/v2/routing/sms/phonenumbers/{addressId}** (1 change)

* Parameter async was added

**DELETE /api/v2/routing/sms/phonenumbers/{addressId}** (2 changes)

* Parameter async was added
* Response 200 was removed

**POST /api/v2/routing/sms/phonenumbers** (1 change)

* Parameter async was added


# Minor Changes (43 changes)

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/contexts/{contextId}** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/contexts/{contextId}/values/{contextValueId}** (2 changes)

* Path was added
* Operation PATCH was added

**PUT /api/v2/routing/sms/phonenumbers/{addressId}** (3 changes)

* Response 202 was added
* Response 409 was added
* Response 501 was added

**DELETE /api/v2/routing/sms/phonenumbers/{addressId}** (3 changes)

* Response 202 was added
* Response 409 was added
* Response 501 was added

**POST /api/v2/routing/sms/phonenumbers** (3 changes)

* Response 202 was added
* Response 409 was added
* Response 501 was added

**/api/v2/speechandtextanalytics/sentimentfeedback/{sentimentFeedbackId}** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/speechandtextanalytics/sentimentfeedback** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation DELETE was added

**User** (1 change)

* Optional property dateLastLogin was added

**ViewFilter** (1 change)

* Optional property flowMilestoneIds was added

**ReportingExportJobResponse** (1 change)

* Enum value AGENT_INTERACTIONS_ME_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (1 change)

* Enum value AGENT_INTERACTIONS_ME_VIEW was added to property viewType

**ReportingExportJobRequest** (1 change)

* Enum value AGENT_INTERACTIONS_ME_VIEW was added to property viewType

**OrgUser** (1 change)

* Optional property dateLastLogin was added

**ConversationContentStory** (1 change)

* Model was added

**ConversationEventCoBrowse** (1 change)

* Model was added

**ConversationMessageContent** (2 changes)

* Enum value Story was added to property contentType
* Optional property story was added

**ConversationMessageEvent** (1 change)

* Model was added

**ConversationNormalizedMessage** (2 changes)

* Enum value Event was added to property type
* Optional property events was added

**KnowledgeContextResponse** (1 change)

* Model was added

**KnowledgeContextValueResponse** (1 change)

* Model was added

**KnowledgeContextRequest** (1 change)

* Model was added

**KnowledgeContextValueRequest** (1 change)

* Model was added

**TrustUser** (1 change)

* Optional property dateLastLogin was added

**SmsPhoneNumber** (2 changes)

* Enum value INITIATED was added to property phoneNumberStatus
* Optional property provisioningStatus was added

**SmsProvisioningStatus** (1 change)

* Model was added

**SentimentFeedback** (1 change)

* Model was added

**SentimentFeedbackEntityListing** (1 change)

* Model was added

**UserMe** (1 change)

* Optional property dateLastLogin was added


# Point Changes (0 changes)
