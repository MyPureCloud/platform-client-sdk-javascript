Platform API version: 9648




# Major Changes (12 changes)

**GET /api/v2/gamification/insights/members** (1 change)

* Parameter reportsTo was added

**GET /api/v2/gamification/insights** (1 change)

* Parameter reportsTo was added

**GET /api/v2/gamification/insights/rankings** (1 change)

* Parameter reportsTo was added

**GET /api/v2/speechandtextanalytics/topics** (1 change)

* Parameter pageNumber was added

**GET /api/v2/taskmanagement/workitems/{workitemId}** (1 change)

* Parameter expands was changed from string to array

**GET /api/v2/businessrules/schemas/{schemaId}** (1 change)

* Response 200 type was changed from DataSchema to BusinessRulesDataSchema

**PUT /api/v2/businessrules/schemas/{schemaId}** (1 change)

* Response 200 type was changed from DataSchema to BusinessRulesDataSchema

**GET /api/v2/businessrules/schemas** (1 change)

* Response 200 type was changed from DataSchemaListing to BusinessRulesDataSchemaListing

**POST /api/v2/businessrules/schemas** (1 change)

* Response 200 type was changed from DataSchema to BusinessRulesDataSchema

**DecisionTableContract** (3 changes)

* Property rowAuthoringSchema was changed from JsonSchemaWithDefinitions to ContractJsonSchema
* Property executionInputSchema was changed from JsonSchemaWithDefinitions to ContractJsonSchema
* Property executionOutputSchema was changed from JsonSchemaWithDefinitions to ContractJsonSchema


# Minor Changes (12 changes)

**RecordingMessagingMessage** (4 changes)

* Optional property buttonResponses was added
* Optional property listPicker was added
* Optional property paymentRequest was added
* Optional property paymentResponse was added

**ContractDefinition** (1 change)

* Model was added

**ContractItems** (1 change)

* Model was added

**ContractJsonSchema** (1 change)

* Model was added

**ContractPropertyDefinition** (1 change)

* Model was added

**BusinessRulesDataSchema** (1 change)

* Model was added

**BusinessRulesSchemaUpdateRequest** (1 change)

* Model was added

**BusinessRulesSchemaCreateRequest** (1 change)

* Model was added

**BusinessRulesDataSchemaListing** (1 change)

* Model was added


# Point Changes (2 changes)

**PUT /api/v2/businessrules/schemas/{schemaId}** (1 change)

* Description was changed for parameter body

**POST /api/v2/businessrules/schemas** (1 change)

* Description was changed for parameter body
