Platform API version: 6160


# Major Changes (8 changes)

**PUT /api/v2/conversations/{conversationId}/recordings/{recordingId}** (1 change)

* Parameter clearExport was added

**GET /api/v2/webdeployments/deployments** (1 change)

* Parameter expand was added

**WebDeploymentConfigurationVersionEntityRef** (1 change)

* Model WebDeploymentConfigurationVersionEntityRef was removed

**EvaluationAggregationQuery** (1 change)

* Enum value conversationStart was removed from property groupBy

**SurveyAggregationQuery** (1 change)

* Enum value surveyCreatedDate was removed from property groupBy

**IntegrationConfiguration** (1 change)

* Property credentials was changed from Map<object, CredentialInfo> to Map<object, IntegrationConfigurationCredential>

**EvaluationAggregationQueryMe** (1 change)

* Enum value conversationStart was removed from property groupBy

**WebDeployment** (1 change)

* Property configuration was changed from WebDeploymentConfigurationVersionEntityRef to WebDeploymentConfigurationVersion


# Minor Changes (29 changes)

**/api/v2/routing/predictors/{predictorId}/models/{modelId}/features** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/predictors/{predictorId}/models** (2 changes)

* Path was added
* Operation GET was added

**Queue** (1 change)

* Optional property vipRouting was added

**VipBackup** (1 change)

* Model was added

**VipCallMediaSettings** (1 change)

* Model was added

**VipMediaSettings** (1 change)

* Model was added

**VipRouting** (1 change)

* Model was added

**OpenMessageEvent** (1 change)

* Model was added

**OpenNormalizedMessage** (2 changes)

* Enum value Event was added to property type
* Optional property events was added

**ResponseSet** (1 change)

* Optional property amdSpeechDistinguishEnabled was added

**MessagingCampaign** (1 change)

* Optional property emailConfig was added

**IntegrationConfigurationCredential** (1 change)

* Model was added

**Library** (1 change)

* Enum value Footer was added to property responseType

**FooterTemplate** (1 change)

* Model was added

**Response** (2 changes)

* Enum value Footer was added to property responseType
* Optional property footer was added

**QueueRequest** (1 change)

* Optional property vipRouting was added

**UserQueue** (1 change)

* Optional property vipRouting was added

**CreateQueueRequest** (1 change)

* Optional property vipRouting was added

**PredictorModelFeature** (1 change)

* Model was added

**PredictorModelFeatureListing** (1 change)

* Model was added

**PredictorModel** (1 change)

* Model was added

**PredictorModels** (1 change)

* Model was added

**BotMessengerProfile** (1 change)

* Model was added

**ConversationAppSettings** (1 change)

* Optional property humanize was added

**Humanize** (1 change)

* Model was added


# Point Changes (0 changes)
