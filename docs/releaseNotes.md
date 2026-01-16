Platform API version: 9928




# Major Changes (8 changes)

**GET /api/v2/socialmedia/topics** (1 change)

* Response 200 type was changed from SocialTopicResponseEntityListing to SocialTopicWithDataIngestionRuleMetadataResponseEntityListing

**GET /api/v2/speechandtextanalytics/programs/{programId}/mappings** (1 change)

* Response 200 type was changed from ProgramMappings to TopicsDefinitionsProgramMappings

**PUT /api/v2/speechandtextanalytics/programs/{programId}/mappings** (1 change)

* Response 200 type was changed from ProgramMappings to TopicsDefinitionsProgramMappings

**GET /api/v2/speechandtextanalytics/programs/mappings** (1 change)

* Response 200 type was changed from ProgramsMappingsEntityListing to TopicsDefinitionsProgramsMappingsEntityListing

**SocialTopicResponseEntityListing** (1 change)

* Model SocialTopicResponseEntityListing was removed

**ProgramMappings** (1 change)

* Model ProgramMappings was removed

**ProgramsMappingsEntityListing** (1 change)

* Model ProgramsMappingsEntityListing was removed

**YearMonth** (1 change)

* Model YearMonth was removed


# Minor Changes (28 changes)

**/api/v2/guides/uploads** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/chunks/search/{searchId}** (2 changes)

* Path was added
* Operation PATCH was added

**Assistant** (1 change)

* Optional property variationParent was added

**GuideSessionTurnRequest** (1 change)

* Optional property knowledgeSettings was added

**KnowledgeSettings** (1 change)

* Model was added

**AuthoringKnowledgeSettings** (1 change)

* Model was added

**GuideVersion** (1 change)

* Optional property knowledgeSettings was added

**UpdateGuideVersion** (1 change)

* Optional property knowledgeSettings was added

**CreateGuideVersion** (1 change)

* Optional property knowledgeSettings was added

**ChunkSearchRegisterRequest** (1 change)

* Model was added

**QualityAuditLogMessage** (1 change)

* Enum value ScreenMonitoring was added to property entityType

**RecordingEmailMessage** (1 change)

* Optional property replyTo was added

**CardBodyText** (1 change)

* Model was added

**Carousel** (1 change)

* Model was added

**CarouselCard** (1 change)

* Model was added

**StatusInfo** (1 change)

* Model was added

**SocialTopicWithDataIngestionRuleMetadataResponseEntityListing** (1 change)

* Model was added

**TopicsDefinitionsProgramMappings** (1 change)

* Model was added

**TopicsDefinitionsProgramsMappingsEntityListing** (1 change)

* Model was added

**VoicemailGroupPolicy** (1 change)

* Optional property includeGroupNumberInUserCallerIdLists was added

**WorkPlanActivity** (1 change)

* Optional property maximumLengthFromShiftEndMinutes was added

**WorkPlanValidationRequest** (1 change)

* Optional property shiftStartVariancePeriod was added

**WorkPlan** (1 change)

* Optional property shiftStartVariancePeriod was added

**CreateWorkPlan** (1 change)

* Optional property shiftStartVariancePeriod was added

**CreateWorkPlanActivity** (1 change)

* Optional property maximumLengthFromShiftEndMinutes was added

**WorkPlanListItemResponse** (1 change)

* Optional property shiftStartVariancePeriod was added


# Point Changes (1 change)

**GET /api/v2/externalcontacts/contacts/{contactId}/notes** (1 change)

* Description was changed for parameter pageSize
