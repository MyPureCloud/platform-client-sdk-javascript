Platform API version: 1892


# Major Changes (15 changes)

**GET /api/v2/quality/forms/{formId}** (1 change)

* Has been deprecated

**PUT /api/v2/quality/forms/{formId}** (1 change)

* Has been deprecated

**DELETE /api/v2/quality/forms/{formId}** (1 change)

* Has been deprecated

**GET /api/v2/quality/publishedforms** (1 change)

* Has been deprecated

**POST /api/v2/quality/publishedforms** (1 change)

* Has been deprecated

**POST /api/v2/outbound/contactlists/{contactListId}/contacts** (1 change)

* Parameter doNotQueue was added

**GET /api/v2/quality/forms** (1 change)

* Has been deprecated

**POST /api/v2/quality/forms** (1 change)

* Has been deprecated

**GET /api/v2/quality/publishedforms/{formId}** (1 change)

* Has been deprecated

**GET /api/v2/quality/forms/{formId}/versions** (1 change)

* Has been deprecated

**CreateActivityCodeRequest** (1 change)

* Values are now constrained by enum members

**EvaluationForm** (1 change)

* Property type was removed

**Question** (3 changes)

* Property weight was removed
* Property naRequired was removed
* Values are now constrained by enum members


# Minor Changes (60 changes)

**/api/v2/quality/publishedforms/evaluations** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/quality/forms/surveys/{formId}** (5 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/webchat/settings** (5 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/quality/publishedforms/surveys** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/webchat/deployments/{deploymentId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/quality/forms/evaluations/{formId}/versions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/quality/publishedforms/surveys/{formId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/quality/forms/evaluations** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/quality/forms/surveys/{formId}/versions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/webchat/deployments** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/quality/publishedforms/evaluations/{formId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/quality/forms/surveys** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/quality/forms/evaluations/{formId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**Email** (1 change)

* Enum value transmitting was added to property state

**Question** (2 changes)

* Optional property maxResponseCharacters was added
* Optional property explanationPrompt was added

**PublishForm** (1 change)

* Model was added

**DomainEntityListingSurveyForm** (1 change)

* Model was added

**SurveyForm** (1 change)

* Model was added

**AnalyticsSession** (1 change)

* Optional property metrics was added

**AnalyticsSessionMetric** (1 change)

* Model was added

**WebChatSettings** (1 change)

* Model was added

**SurveyFormEntityListing** (1 change)

* Model was added

**UserScheduleAdherence** (1 change)

* Enum value Ignored was added to property adherenceState

**WebChatDeployment** (1 change)

* Model was added

**WebChatDeploymentEntityListing** (1 change)

* Model was added

**AgentActivity** (6 changes)

* Optional property numCriticalEvaluations was added
* Optional property averageCriticalScore was added
* Optional property highestEvaluationScore was added
* Optional property lowestEvaluationScore was added
* Optional property highestCriticalScore was added
* Optional property lowestCriticalScore was added


# Point Changes (4 changes)

**POST /api/v2/outbound/contactlists/{contactListId}/contacts** (2 changes)

* Description was changed for parameter priority
* Description was changed for parameter clearSystemData

**POST /api/v2/conversations/emails** (1 change)

* Description was changed

**POST /api/v2/conversations/emails/{conversationId}/inboundmessages** (1 change)

* Summary was changed
