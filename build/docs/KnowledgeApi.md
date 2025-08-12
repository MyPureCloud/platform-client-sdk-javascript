# KnowledgeApi

# platformClient.KnowledgeApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteKnowledgeKnowledgebase**](KnowledgeApi#deleteKnowledgeKnowledgebase) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId} | Delete knowledge base
[**deleteKnowledgeKnowledgebaseCategory**](KnowledgeApi#deleteKnowledgeKnowledgebaseCategory) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories/{categoryId} | Delete category
[**deleteKnowledgeKnowledgebaseDocument**](KnowledgeApi#deleteKnowledgeKnowledgebaseDocument) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId} | Delete document.
[**deleteKnowledgeKnowledgebaseDocumentVariation**](KnowledgeApi#deleteKnowledgeKnowledgebaseDocumentVariation) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations/{documentVariationId} | Delete a variation for a document.
[**deleteKnowledgeKnowledgebaseExportJob**](KnowledgeApi#deleteKnowledgeKnowledgebaseExportJob) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/export/jobs/{exportJobId} | Delete export job
[**deleteKnowledgeKnowledgebaseImportJob**](KnowledgeApi#deleteKnowledgeKnowledgebaseImportJob) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs/{importJobId} | Delete import job
[**deleteKnowledgeKnowledgebaseLabel**](KnowledgeApi#deleteKnowledgeKnowledgebaseLabel) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels/{labelId} | Delete label
[**deleteKnowledgeKnowledgebaseLanguageCategory**](KnowledgeApi#deleteKnowledgeKnowledgebaseLanguageCategory) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId} | Delete category
[**deleteKnowledgeKnowledgebaseLanguageDocument**](KnowledgeApi#deleteKnowledgeKnowledgebaseLanguageDocument) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId} | Delete document
[**deleteKnowledgeKnowledgebaseLanguageDocumentsImport**](KnowledgeApi#deleteKnowledgeKnowledgebaseLanguageDocumentsImport) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports/{importId} | Delete import operation
[**deleteKnowledgeKnowledgebaseSourcesSalesforceSourceId**](KnowledgeApi#deleteKnowledgeKnowledgebaseSourcesSalesforceSourceId) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/salesforce/{sourceId} | Delete Salesforce Knowledge integration source
[**deleteKnowledgeKnowledgebaseSourcesServicenowSourceId**](KnowledgeApi#deleteKnowledgeKnowledgebaseSourcesServicenowSourceId) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/servicenow/{sourceId} | Delete ServiceNow Knowledge integration source
[**deleteKnowledgeKnowledgebaseSynchronizeJob**](KnowledgeApi#deleteKnowledgeKnowledgebaseSynchronizeJob) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/synchronize/jobs/{syncJobId} | Delete synchronization job
[**getKnowledgeGuestSessionCategories**](KnowledgeApi#getKnowledgeGuestSessionCategories) | **GET** /api/v2/knowledge/guest/sessions/{sessionId}/categories | Get categories
[**getKnowledgeGuestSessionDocument**](KnowledgeApi#getKnowledgeGuestSessionDocument) | **GET** /api/v2/knowledge/guest/sessions/{sessionId}/documents/{documentId} | Get a knowledge document by ID.
[**getKnowledgeGuestSessionDocuments**](KnowledgeApi#getKnowledgeGuestSessionDocuments) | **GET** /api/v2/knowledge/guest/sessions/{sessionId}/documents | Get documents.
[**getKnowledgeIntegrationOptions**](KnowledgeApi#getKnowledgeIntegrationOptions) | **GET** /api/v2/knowledge/integrations/{integrationId}/options | Get sync options available for a knowledge-connect integration
[**getKnowledgeKnowledgebase**](KnowledgeApi#getKnowledgeKnowledgebase) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId} | Get knowledge base
[**getKnowledgeKnowledgebaseCategories**](KnowledgeApi#getKnowledgeKnowledgebaseCategories) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories | Get categories
[**getKnowledgeKnowledgebaseCategory**](KnowledgeApi#getKnowledgeKnowledgebaseCategory) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories/{categoryId} | Get category
[**getKnowledgeKnowledgebaseDocument**](KnowledgeApi#getKnowledgeKnowledgebaseDocument) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId} | Get document.
[**getKnowledgeKnowledgebaseDocumentFeedback**](KnowledgeApi#getKnowledgeKnowledgebaseDocumentFeedback) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/feedback | Get a list of feedback records given on a document
[**getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId**](KnowledgeApi#getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/feedback/{feedbackId} | Get a single feedback record given on a document
[**getKnowledgeKnowledgebaseDocumentVariation**](KnowledgeApi#getKnowledgeKnowledgebaseDocumentVariation) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations/{documentVariationId} | Get a variation for a document.
[**getKnowledgeKnowledgebaseDocumentVariations**](KnowledgeApi#getKnowledgeKnowledgebaseDocumentVariations) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations | Get variations for a document.
[**getKnowledgeKnowledgebaseDocumentVersion**](KnowledgeApi#getKnowledgeKnowledgebaseDocumentVersion) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions/{versionId} | Get document version.
[**getKnowledgeKnowledgebaseDocumentVersionVariation**](KnowledgeApi#getKnowledgeKnowledgebaseDocumentVersionVariation) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions/{versionId}/variations/{variationId} | Get variation for the given document version.
[**getKnowledgeKnowledgebaseDocumentVersionVariations**](KnowledgeApi#getKnowledgeKnowledgebaseDocumentVersionVariations) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions/{versionId}/variations | Get variations for the given document version.
[**getKnowledgeKnowledgebaseDocumentVersions**](KnowledgeApi#getKnowledgeKnowledgebaseDocumentVersions) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions | Get document versions.
[**getKnowledgeKnowledgebaseDocuments**](KnowledgeApi#getKnowledgeKnowledgebaseDocuments) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents | Get documents.
[**getKnowledgeKnowledgebaseExportJob**](KnowledgeApi#getKnowledgeKnowledgebaseExportJob) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/export/jobs/{exportJobId} | Get export job report
[**getKnowledgeKnowledgebaseImportJob**](KnowledgeApi#getKnowledgeKnowledgebaseImportJob) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs/{importJobId} | Get import job report
[**getKnowledgeKnowledgebaseLabel**](KnowledgeApi#getKnowledgeKnowledgebaseLabel) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels/{labelId} | Get label
[**getKnowledgeKnowledgebaseLabels**](KnowledgeApi#getKnowledgeKnowledgebaseLabels) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels | Get labels
[**getKnowledgeKnowledgebaseLanguageCategories**](KnowledgeApi#getKnowledgeKnowledgebaseLanguageCategories) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories | Get categories
[**getKnowledgeKnowledgebaseLanguageCategory**](KnowledgeApi#getKnowledgeKnowledgebaseLanguageCategory) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId} | Get category
[**getKnowledgeKnowledgebaseLanguageDocument**](KnowledgeApi#getKnowledgeKnowledgebaseLanguageDocument) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId} | Get document
[**getKnowledgeKnowledgebaseLanguageDocumentUpload**](KnowledgeApi#getKnowledgeKnowledgebaseLanguageDocumentUpload) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}/uploads/{uploadId} | Get document content upload status
[**getKnowledgeKnowledgebaseLanguageDocuments**](KnowledgeApi#getKnowledgeKnowledgebaseLanguageDocuments) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents | Get documents
[**getKnowledgeKnowledgebaseLanguageDocumentsImport**](KnowledgeApi#getKnowledgeKnowledgebaseLanguageDocumentsImport) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports/{importId} | Get import operation report
[**getKnowledgeKnowledgebaseLanguageTraining**](KnowledgeApi#getKnowledgeKnowledgebaseLanguageTraining) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings/{trainingId} | Get training detail
[**getKnowledgeKnowledgebaseLanguageTrainings**](KnowledgeApi#getKnowledgeKnowledgebaseLanguageTrainings) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings | Get all trainings information for a knowledgebase
[**getKnowledgeKnowledgebaseOperations**](KnowledgeApi#getKnowledgeKnowledgebaseOperations) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/operations | Get operations
[**getKnowledgeKnowledgebaseOperationsUsersQuery**](KnowledgeApi#getKnowledgeKnowledgebaseOperationsUsersQuery) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/operations/users/query | Get ids of operation creator users and oauth clients
[**getKnowledgeKnowledgebaseParseJob**](KnowledgeApi#getKnowledgeKnowledgebaseParseJob) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/parse/jobs/{parseJobId} | Get parse job report
[**getKnowledgeKnowledgebaseSources**](KnowledgeApi#getKnowledgeKnowledgebaseSources) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources | Get Knowledge integration sources
[**getKnowledgeKnowledgebaseSourcesSalesforceSourceId**](KnowledgeApi#getKnowledgeKnowledgebaseSourcesSalesforceSourceId) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/salesforce/{sourceId} | Get Salesforce Knowledge integration source
[**getKnowledgeKnowledgebaseSourcesServicenowSourceId**](KnowledgeApi#getKnowledgeKnowledgebaseSourcesServicenowSourceId) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/servicenow/{sourceId} | Get ServiceNow Knowledge integration source
[**getKnowledgeKnowledgebaseSynchronizeJob**](KnowledgeApi#getKnowledgeKnowledgebaseSynchronizeJob) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/synchronize/jobs/{syncJobId} | Get synchronization job report
[**getKnowledgeKnowledgebaseUnansweredGroup**](KnowledgeApi#getKnowledgeKnowledgebaseUnansweredGroup) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups/{groupId} | Get knowledge base unanswered group for a particular groupId
[**getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup**](KnowledgeApi#getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups/{groupId}/phrasegroups/{phraseGroupId} | Get knowledge base unanswered phrase group for a particular phraseGroupId
[**getKnowledgeKnowledgebaseUnansweredGroups**](KnowledgeApi#getKnowledgeKnowledgebaseUnansweredGroups) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups | Get knowledge base unanswered groups
[**getKnowledgeKnowledgebaseUploadsUrlsJob**](KnowledgeApi#getKnowledgeKnowledgebaseUploadsUrlsJob) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/uploads/urls/jobs/{jobId} | Get content upload from URL job status
[**getKnowledgeKnowledgebases**](KnowledgeApi#getKnowledgeKnowledgebases) | **GET** /api/v2/knowledge/knowledgebases | Get knowledge bases
[**patchKnowledgeGuestSessionDocumentsSearchSearchId**](KnowledgeApi#patchKnowledgeGuestSessionDocumentsSearchSearchId) | **PATCH** /api/v2/knowledge/guest/sessions/{sessionId}/documents/search/{searchId} | Update search result.
[**patchKnowledgeKnowledgebase**](KnowledgeApi#patchKnowledgeKnowledgebase) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId} | Update knowledge base
[**patchKnowledgeKnowledgebaseCategory**](KnowledgeApi#patchKnowledgeKnowledgebaseCategory) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories/{categoryId} | Update category
[**patchKnowledgeKnowledgebaseDocument**](KnowledgeApi#patchKnowledgeKnowledgebaseDocument) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId} | Update document.
[**patchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId**](KnowledgeApi#patchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/feedback/{feedbackId} | Update feedback on a document
[**patchKnowledgeKnowledgebaseDocumentVariation**](KnowledgeApi#patchKnowledgeKnowledgebaseDocumentVariation) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations/{documentVariationId} | Update a variation for a document.
[**patchKnowledgeKnowledgebaseDocumentsSearchSearchId**](KnowledgeApi#patchKnowledgeKnowledgebaseDocumentsSearchSearchId) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/search/{searchId} | Update search result.
[**patchKnowledgeKnowledgebaseImportJob**](KnowledgeApi#patchKnowledgeKnowledgebaseImportJob) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs/{importJobId} | Start import job
[**patchKnowledgeKnowledgebaseLabel**](KnowledgeApi#patchKnowledgeKnowledgebaseLabel) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels/{labelId} | Update label
[**patchKnowledgeKnowledgebaseLanguageCategory**](KnowledgeApi#patchKnowledgeKnowledgebaseLanguageCategory) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId} | Update category
[**patchKnowledgeKnowledgebaseLanguageDocument**](KnowledgeApi#patchKnowledgeKnowledgebaseLanguageDocument) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId} | Update document
[**patchKnowledgeKnowledgebaseLanguageDocuments**](KnowledgeApi#patchKnowledgeKnowledgebaseLanguageDocuments) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents | Update documents collection
[**patchKnowledgeKnowledgebaseLanguageDocumentsImport**](KnowledgeApi#patchKnowledgeKnowledgebaseLanguageDocumentsImport) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports/{importId} | Start import operation
[**patchKnowledgeKnowledgebaseParseJob**](KnowledgeApi#patchKnowledgeKnowledgebaseParseJob) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/parse/jobs/{parseJobId} | Send update to the parse operation
[**patchKnowledgeKnowledgebaseSynchronizeJob**](KnowledgeApi#patchKnowledgeKnowledgebaseSynchronizeJob) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/synchronize/jobs/{syncJobId} | Update synchronization job
[**patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup**](KnowledgeApi#patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups/{groupId}/phrasegroups/{phraseGroupId} | Update a Knowledge base unanswered phrase group
[**postKnowledgeDocumentuploads**](KnowledgeApi#postKnowledgeDocumentuploads) | **POST** /api/v2/knowledge/documentuploads | Creates a presigned URL for uploading a knowledge import file with a set of documents
[**postKnowledgeGuestSessionDocumentCopies**](KnowledgeApi#postKnowledgeGuestSessionDocumentCopies) | **POST** /api/v2/knowledge/guest/sessions/{sessionId}/documents/{documentId}/copies | Indicate that the document was copied by the user.
[**postKnowledgeGuestSessionDocumentFeedback**](KnowledgeApi#postKnowledgeGuestSessionDocumentFeedback) | **POST** /api/v2/knowledge/guest/sessions/{sessionId}/documents/{documentId}/feedback | Give feedback on a document
[**postKnowledgeGuestSessionDocumentViews**](KnowledgeApi#postKnowledgeGuestSessionDocumentViews) | **POST** /api/v2/knowledge/guest/sessions/{sessionId}/documents/{documentId}/views | Create view event for a document.
[**postKnowledgeGuestSessionDocumentsAnswers**](KnowledgeApi#postKnowledgeGuestSessionDocumentsAnswers) | **POST** /api/v2/knowledge/guest/sessions/{sessionId}/documents/answers | Answer documents.
[**postKnowledgeGuestSessionDocumentsPresentations**](KnowledgeApi#postKnowledgeGuestSessionDocumentsPresentations) | **POST** /api/v2/knowledge/guest/sessions/{sessionId}/documents/presentations | Indicate that documents were presented to the user.
[**postKnowledgeGuestSessionDocumentsSearch**](KnowledgeApi#postKnowledgeGuestSessionDocumentsSearch) | **POST** /api/v2/knowledge/guest/sessions/{sessionId}/documents/search | Search the documents in a guest session.
[**postKnowledgeGuestSessionDocumentsSearchSuggestions**](KnowledgeApi#postKnowledgeGuestSessionDocumentsSearchSuggestions) | **POST** /api/v2/knowledge/guest/sessions/{sessionId}/documents/search/suggestions | Query the knowledge documents to provide suggestions for auto completion.
[**postKnowledgeGuestSessions**](KnowledgeApi#postKnowledgeGuestSessions) | **POST** /api/v2/knowledge/guest/sessions | Create guest session
[**postKnowledgeKnowledgebaseCategories**](KnowledgeApi#postKnowledgeKnowledgebaseCategories) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories | Create new category
[**postKnowledgeKnowledgebaseChunksSearch**](KnowledgeApi#postKnowledgeKnowledgebaseChunksSearch) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/chunks/search | Search for chunks in a knowledge base
[**postKnowledgeKnowledgebaseDocumentCopies**](KnowledgeApi#postKnowledgeKnowledgebaseDocumentCopies) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/copies | Indicate that the document was copied by the user.
[**postKnowledgeKnowledgebaseDocumentFeedback**](KnowledgeApi#postKnowledgeKnowledgebaseDocumentFeedback) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/feedback | Give feedback on a document
[**postKnowledgeKnowledgebaseDocumentVariations**](KnowledgeApi#postKnowledgeKnowledgebaseDocumentVariations) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations | Create a variation for a document.
[**postKnowledgeKnowledgebaseDocumentVersions**](KnowledgeApi#postKnowledgeKnowledgebaseDocumentVersions) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions | Creates or restores a document version.
[**postKnowledgeKnowledgebaseDocumentViews**](KnowledgeApi#postKnowledgeKnowledgebaseDocumentViews) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/views | Create view for a document.
[**postKnowledgeKnowledgebaseDocuments**](KnowledgeApi#postKnowledgeKnowledgebaseDocuments) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents | Create document.
[**postKnowledgeKnowledgebaseDocumentsAnswers**](KnowledgeApi#postKnowledgeKnowledgebaseDocumentsAnswers) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/answers | Answer documents.
[**postKnowledgeKnowledgebaseDocumentsBulkRemove**](KnowledgeApi#postKnowledgeKnowledgebaseDocumentsBulkRemove) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/bulk/remove | Bulk remove documents.
[**postKnowledgeKnowledgebaseDocumentsBulkUpdate**](KnowledgeApi#postKnowledgeKnowledgebaseDocumentsBulkUpdate) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/bulk/update | Bulk update documents.
[**postKnowledgeKnowledgebaseDocumentsPresentations**](KnowledgeApi#postKnowledgeKnowledgebaseDocumentsPresentations) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/presentations | Indicate that documents were presented to the user.
[**postKnowledgeKnowledgebaseDocumentsQuery**](KnowledgeApi#postKnowledgeKnowledgebaseDocumentsQuery) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/query | Query for knowledge documents.
[**postKnowledgeKnowledgebaseDocumentsSearch**](KnowledgeApi#postKnowledgeKnowledgebaseDocumentsSearch) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/search | Search the documents in a knowledge base.
[**postKnowledgeKnowledgebaseDocumentsSearchSuggestions**](KnowledgeApi#postKnowledgeKnowledgebaseDocumentsSearchSuggestions) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/search/suggestions | Query the knowledge documents to provide suggestions for auto completion.
[**postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd**](KnowledgeApi#postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/versions/bulk/add | Bulk add document versions.
[**postKnowledgeKnowledgebaseExportJobs**](KnowledgeApi#postKnowledgeKnowledgebaseExportJobs) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/export/jobs | Create export job
[**postKnowledgeKnowledgebaseImportJobs**](KnowledgeApi#postKnowledgeKnowledgebaseImportJobs) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs | Create import job
[**postKnowledgeKnowledgebaseLabels**](KnowledgeApi#postKnowledgeKnowledgebaseLabels) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels | Create new label
[**postKnowledgeKnowledgebaseLanguageCategories**](KnowledgeApi#postKnowledgeKnowledgebaseLanguageCategories) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories | Create new category
[**postKnowledgeKnowledgebaseLanguageDocumentUploads**](KnowledgeApi#postKnowledgeKnowledgebaseLanguageDocumentUploads) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}/uploads | Upload Article Content
[**postKnowledgeKnowledgebaseLanguageDocuments**](KnowledgeApi#postKnowledgeKnowledgebaseLanguageDocuments) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents | Create document
[**postKnowledgeKnowledgebaseLanguageDocumentsImports**](KnowledgeApi#postKnowledgeKnowledgebaseLanguageDocumentsImports) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports | Create import operation
[**postKnowledgeKnowledgebaseLanguageTrainingPromote**](KnowledgeApi#postKnowledgeKnowledgebaseLanguageTrainingPromote) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings/{trainingId}/promote | Promote trained documents from draft state to active.
[**postKnowledgeKnowledgebaseLanguageTrainings**](KnowledgeApi#postKnowledgeKnowledgebaseLanguageTrainings) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings | Trigger training
[**postKnowledgeKnowledgebaseParseJobImport**](KnowledgeApi#postKnowledgeKnowledgebaseParseJobImport) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/parse/jobs/{parseJobId}/import | Import the parsed articles
[**postKnowledgeKnowledgebaseParseJobs**](KnowledgeApi#postKnowledgeKnowledgebaseParseJobs) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/parse/jobs | Create parse job
[**postKnowledgeKnowledgebaseSearch**](KnowledgeApi#postKnowledgeKnowledgebaseSearch) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/search | Search Documents
[**postKnowledgeKnowledgebaseSourcesSalesforce**](KnowledgeApi#postKnowledgeKnowledgebaseSourcesSalesforce) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/salesforce | Create Salesforce Knowledge integration source
[**postKnowledgeKnowledgebaseSourcesSalesforceSourceIdSync**](KnowledgeApi#postKnowledgeKnowledgebaseSourcesSalesforceSourceIdSync) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/salesforce/{sourceId}/sync | Start sync on Salesforce Knowledge integration source
[**postKnowledgeKnowledgebaseSourcesServicenow**](KnowledgeApi#postKnowledgeKnowledgebaseSourcesServicenow) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/servicenow | Create ServiceNow Knowledge integration source
[**postKnowledgeKnowledgebaseSourcesServicenowSourceIdSync**](KnowledgeApi#postKnowledgeKnowledgebaseSourcesServicenowSourceIdSync) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/servicenow/{sourceId}/sync | Start synchronization on ServiceNow Knowledge integration source
[**postKnowledgeKnowledgebaseSynchronizeJobs**](KnowledgeApi#postKnowledgeKnowledgebaseSynchronizeJobs) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/synchronize/jobs | Create synchronization job
[**postKnowledgeKnowledgebaseUploadsUrlsJobs**](KnowledgeApi#postKnowledgeKnowledgebaseUploadsUrlsJobs) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/uploads/urls/jobs | Create content upload from URL job
[**postKnowledgeKnowledgebases**](KnowledgeApi#postKnowledgeKnowledgebases) | **POST** /api/v2/knowledge/knowledgebases | Create new knowledge base
[**putKnowledgeKnowledgebaseSourcesSalesforceSourceId**](KnowledgeApi#putKnowledgeKnowledgebaseSourcesSalesforceSourceId) | **PUT** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/salesforce/{sourceId} | Update Salesforce Knowledge integration source
[**putKnowledgeKnowledgebaseSourcesServicenowSourceId**](KnowledgeApi#putKnowledgeKnowledgebaseSourcesServicenowSourceId) | **PUT** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/servicenow/{sourceId} | Update ServiceNow Knowledge integration source



## deleteKnowledgeKnowledgebase

> KnowledgeBase deleteKnowledgeKnowledgebase(knowledgeBaseId)


DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}

Delete knowledge base

Requires ALL permissions:

* knowledge:knowledgebase:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID

apiInstance.deleteKnowledgeKnowledgebase(knowledgeBaseId)
  .then((data) => {
    console.log(`deleteKnowledgeKnowledgebase success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebase');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |

### Return type

**KnowledgeBase**


## deleteKnowledgeKnowledgebaseCategory

> CategoryResponse deleteKnowledgeKnowledgebaseCategory(knowledgeBaseId, categoryId)


DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories/{categoryId}

Delete category

Requires ALL permissions:

* knowledge:category:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let categoryId = "categoryId_example"; // String | Category ID

apiInstance.deleteKnowledgeKnowledgebaseCategory(knowledgeBaseId, categoryId)
  .then((data) => {
    console.log(`deleteKnowledgeKnowledgebaseCategory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebaseCategory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **categoryId** | **String** | Category ID |  |

### Return type

**CategoryResponse**


## deleteKnowledgeKnowledgebaseDocument

> void deleteKnowledgeKnowledgebaseDocument(knowledgeBaseId, documentId)


DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}

Delete document.

Requires ALL permissions:

* knowledge:document:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID.
let documentId = "documentId_example"; // String | Document ID.

apiInstance.deleteKnowledgeKnowledgebaseDocument(knowledgeBaseId, documentId)
  .then(() => {
    console.log('deleteKnowledgeKnowledgebaseDocument returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebaseDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID. |  |
 **documentId** | **String** | Document ID. |  |

### Return type

void (no response body)


## deleteKnowledgeKnowledgebaseDocumentVariation

> void deleteKnowledgeKnowledgebaseDocumentVariation(documentVariationId, documentId, knowledgeBaseId)


DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations/{documentVariationId}

Delete a variation for a document.

Requires ANY permissions:

* knowledge:document:delete
* knowledge:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let documentVariationId = "documentVariationId_example"; // String | Globally unique identifier for a document variation.
let documentId = "documentId_example"; // String | Globally unique identifier for a document.
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Globally unique identifier for a knowledge base.

apiInstance.deleteKnowledgeKnowledgebaseDocumentVariation(documentVariationId, documentId, knowledgeBaseId)
  .then(() => {
    console.log('deleteKnowledgeKnowledgebaseDocumentVariation returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebaseDocumentVariation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentVariationId** | **String** | Globally unique identifier for a document variation. |  |
 **documentId** | **String** | Globally unique identifier for a document. |  |
 **knowledgeBaseId** | **String** | Globally unique identifier for a knowledge base. |  |

### Return type

void (no response body)


## deleteKnowledgeKnowledgebaseExportJob

> void deleteKnowledgeKnowledgebaseExportJob(knowledgeBaseId, exportJobId)


DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/export/jobs/{exportJobId}

Delete export job

Requires ALL permissions:

* knowledge:exportJob:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let exportJobId = "exportJobId_example"; // String | Export job ID

apiInstance.deleteKnowledgeKnowledgebaseExportJob(knowledgeBaseId, exportJobId)
  .then(() => {
    console.log('deleteKnowledgeKnowledgebaseExportJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebaseExportJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **exportJobId** | **String** | Export job ID |  |

### Return type

void (no response body)


## deleteKnowledgeKnowledgebaseImportJob

> void deleteKnowledgeKnowledgebaseImportJob(knowledgeBaseId, importJobId)


DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs/{importJobId}

Delete import job

Requires ALL permissions:

* knowledge:importJob:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let importJobId = "importJobId_example"; // String | Import job ID

apiInstance.deleteKnowledgeKnowledgebaseImportJob(knowledgeBaseId, importJobId)
  .then(() => {
    console.log('deleteKnowledgeKnowledgebaseImportJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebaseImportJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **importJobId** | **String** | Import job ID |  |

### Return type

void (no response body)


## deleteKnowledgeKnowledgebaseLabel

> LabelResponse deleteKnowledgeKnowledgebaseLabel(knowledgeBaseId, labelId)


DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels/{labelId}

Delete label

Requires ALL permissions:

* knowledge:label:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let labelId = "labelId_example"; // String | Label ID

apiInstance.deleteKnowledgeKnowledgebaseLabel(knowledgeBaseId, labelId)
  .then((data) => {
    console.log(`deleteKnowledgeKnowledgebaseLabel success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebaseLabel');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **labelId** | **String** | Label ID |  |

### Return type

**LabelResponse**


## deleteKnowledgeKnowledgebaseLanguageCategory

> KnowledgeCategory deleteKnowledgeKnowledgebaseLanguageCategory(categoryId, knowledgeBaseId, languageCode)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId}

Delete category

Requires ALL permissions:

* knowledge:category:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let categoryId = "categoryId_example"; // String | Category ID
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE

apiInstance.deleteKnowledgeKnowledgebaseLanguageCategory(categoryId, knowledgeBaseId, languageCode)
  .then((data) => {
    console.log(`deleteKnowledgeKnowledgebaseLanguageCategory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebaseLanguageCategory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **categoryId** | **String** | Category ID |  |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |

### Return type

**KnowledgeCategory**


## deleteKnowledgeKnowledgebaseLanguageDocument

> KnowledgeDocument deleteKnowledgeKnowledgebaseLanguageDocument(documentId, knowledgeBaseId, languageCode)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}

Delete document

Requires ALL permissions:

* knowledge:document:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let documentId = "documentId_example"; // String | Document ID
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE

apiInstance.deleteKnowledgeKnowledgebaseLanguageDocument(documentId, knowledgeBaseId, languageCode)
  .then((data) => {
    console.log(`deleteKnowledgeKnowledgebaseLanguageDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebaseLanguageDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |

### Return type

**KnowledgeDocument**


## deleteKnowledgeKnowledgebaseLanguageDocumentsImport

> void deleteKnowledgeKnowledgebaseLanguageDocumentsImport(knowledgeBaseId, languageCode, importId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports/{importId}

Delete import operation

Requires ALL permissions:

* knowledge:document:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let importId = "importId_example"; // String | Import ID

apiInstance.deleteKnowledgeKnowledgebaseLanguageDocumentsImport(knowledgeBaseId, languageCode, importId)
  .then(() => {
    console.log('deleteKnowledgeKnowledgebaseLanguageDocumentsImport returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebaseLanguageDocumentsImport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |
 **importId** | **String** | Import ID |  |

### Return type

void (no response body)


## deleteKnowledgeKnowledgebaseSourcesSalesforceSourceId

> void deleteKnowledgeKnowledgebaseSourcesSalesforceSourceId(knowledgeBaseId, sourceId)


DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/salesforce/{sourceId}

Delete Salesforce Knowledge integration source

Requires ALL permissions:

* knowledge:integrationSource:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let sourceId = "sourceId_example"; // String | Source ID

apiInstance.deleteKnowledgeKnowledgebaseSourcesSalesforceSourceId(knowledgeBaseId, sourceId)
  .then(() => {
    console.log('deleteKnowledgeKnowledgebaseSourcesSalesforceSourceId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebaseSourcesSalesforceSourceId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **sourceId** | **String** | Source ID |  |

### Return type

void (no response body)


## deleteKnowledgeKnowledgebaseSourcesServicenowSourceId

> void deleteKnowledgeKnowledgebaseSourcesServicenowSourceId(knowledgeBaseId, sourceId)


DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/servicenow/{sourceId}

Delete ServiceNow Knowledge integration source

Requires ALL permissions:

* knowledge:integrationSource:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let sourceId = "sourceId_example"; // String | Source ID

apiInstance.deleteKnowledgeKnowledgebaseSourcesServicenowSourceId(knowledgeBaseId, sourceId)
  .then(() => {
    console.log('deleteKnowledgeKnowledgebaseSourcesServicenowSourceId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebaseSourcesServicenowSourceId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **sourceId** | **String** | Source ID |  |

### Return type

void (no response body)


## deleteKnowledgeKnowledgebaseSynchronizeJob

> void deleteKnowledgeKnowledgebaseSynchronizeJob(knowledgeBaseId, syncJobId)


DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/synchronize/jobs/{syncJobId}

Delete synchronization job

Requires ALL permissions:

* knowledge:syncJob:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let syncJobId = "syncJobId_example"; // String | Synchronization job ID

apiInstance.deleteKnowledgeKnowledgebaseSynchronizeJob(knowledgeBaseId, syncJobId)
  .then(() => {
    console.log('deleteKnowledgeKnowledgebaseSynchronizeJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebaseSynchronizeJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **syncJobId** | **String** | Synchronization job ID |  |

### Return type

void (no response body)


## getKnowledgeGuestSessionCategories

> GuestCategoryResponseListing getKnowledgeGuestSessionCategories(sessionId, opts)


GET /api/v2/knowledge/guest/sessions/{sessionId}/categories

Get categories

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.KnowledgeApi();

let sessionId = "sessionId_example"; // String | Knowledge guest session ID.
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'parentId': "parentId_example", // String | If specified, retrieves the children categories by parent category ID.
  'isRoot': true, // Boolean | If specified, retrieves only the root categories.
  'name': "name_example", // String | Filter to return the categories that starts with the given category name.
  'sortBy': "Name", // String | Name: sort by category names alphabetically; Hierarchy: sort by the full path of hierarchical category names alphabetically
  'expand': "expand_example", // String | The specified entity attribute will be filled. Supported value:Ancestors: every ancestors will be filled via the parent attribute recursively,but only the id, name, parentId will be present for the ancestors.
  'includeDocumentCount': true // Boolean | If specified, retrieves the number of documents related to category.
};

apiInstance.getKnowledgeGuestSessionCategories(sessionId, opts)
  .then((data) => {
    console.log(`getKnowledgeGuestSessionCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeGuestSessionCategories');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | Knowledge guest session ID. |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **parentId** | **String** | If specified, retrieves the children categories by parent category ID. | [optional]  |
 **isRoot** | **Boolean** | If specified, retrieves only the root categories. | [optional]  |
 **name** | **String** | Filter to return the categories that starts with the given category name. | [optional]  |
 **sortBy** | **String** | Name: sort by category names alphabetically; Hierarchy: sort by the full path of hierarchical category names alphabetically | [optional] [default to Name]<br />**Values**: Name, Hierarchy |
 **expand** | **String** | The specified entity attribute will be filled. Supported value:Ancestors: every ancestors will be filled via the parent attribute recursively,but only the id, name, parentId will be present for the ancestors. | [optional]  |
 **includeDocumentCount** | **Boolean** | If specified, retrieves the number of documents related to category. | [optional]  |

### Return type

**GuestCategoryResponseListing**


## getKnowledgeGuestSessionDocument

> KnowledgeGuestDocumentResponse getKnowledgeGuestSessionDocument(sessionId, documentId)


GET /api/v2/knowledge/guest/sessions/{sessionId}/documents/{documentId}

Get a knowledge document by ID.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.KnowledgeApi();

let sessionId = "sessionId_example"; // String | Knowledge guest session ID.
let documentId = "documentId_example"; // String | Document ID

apiInstance.getKnowledgeGuestSessionDocument(sessionId, documentId)
  .then((data) => {
    console.log(`getKnowledgeGuestSessionDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeGuestSessionDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | Knowledge guest session ID. |  |
 **documentId** | **String** | Document ID |  |

### Return type

**KnowledgeGuestDocumentResponse**


## getKnowledgeGuestSessionDocuments

> KnowledgeGuestDocumentResponseListing getKnowledgeGuestSessionDocuments(sessionId, opts)


GET /api/v2/knowledge/guest/sessions/{sessionId}/documents

Get documents.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.KnowledgeApi();

let sessionId = "sessionId_example"; // String | Knowledge guest session ID.
let opts = { 
  'categoryId': ["categoryId_example"], // [String] | If specified, retrieves documents associated with category ids, comma separated values expected.
  'pageSize': 3.4 // Number | Number of entities to return. Maximum of 200.
};

apiInstance.getKnowledgeGuestSessionDocuments(sessionId, opts)
  .then((data) => {
    console.log(`getKnowledgeGuestSessionDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeGuestSessionDocuments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | Knowledge guest session ID. |  |
 **categoryId** | **[String]** | If specified, retrieves documents associated with category ids, comma separated values expected. | [optional]  |
 **pageSize** | **Number** | Number of entities to return. Maximum of 200. | [optional]  |

### Return type

**KnowledgeGuestDocumentResponseListing**


## getKnowledgeIntegrationOptions

> KnowledgeIntegrationOptionsResponse getKnowledgeIntegrationOptions(integrationId, opts)


GET /api/v2/knowledge/integrations/{integrationId}/options

Get sync options available for a knowledge-connect integration

Requires ALL permissions:

* knowledge:integrationOptions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let integrationId = "integrationId_example"; // String | Integration ID
let opts = { 
  'knowledgeBaseIds': ["knowledgeBaseIds_example"] // [String] | Narrowing down filtering option results by knowledge base.
};

apiInstance.getKnowledgeIntegrationOptions(integrationId, opts)
  .then((data) => {
    console.log(`getKnowledgeIntegrationOptions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeIntegrationOptions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **knowledgeBaseIds** | **[String]** | Narrowing down filtering option results by knowledge base. | [optional]  |

### Return type

**KnowledgeIntegrationOptionsResponse**


## getKnowledgeKnowledgebase

> KnowledgeBase getKnowledgeKnowledgebase(knowledgeBaseId)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}

Get knowledge base

Requires ALL permissions:

* knowledge:knowledgebase:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID

apiInstance.getKnowledgeKnowledgebase(knowledgeBaseId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebase success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebase');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |

### Return type

**KnowledgeBase**


## getKnowledgeKnowledgebaseCategories

> CategoryResponseListing getKnowledgeKnowledgebaseCategories(knowledgeBaseId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories

Get categories

Requires ALL permissions:

* knowledge:category:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'parentId': "parentId_example", // String | If specified, retrieves the children categories by parent category ID.
  'isRoot': true, // Boolean | If specified, retrieves only the root categories.
  'name': "name_example", // String | Filter to return the categories that starts with the given category name.
  'sortBy': "Name", // String | Name: sort by category names alphabetically; Hierarchy: sort by the full path of hierarchical category names alphabetically
  'expand': "expand_example", // String | The specified entity attribute will be filled. Supported value:Ancestors: every ancestors will be filled via the parent attribute recursively,but only the id, name, parentId will be present for the ancestors.
  'includeDocumentCount': true // Boolean | If specified, retrieves the number of documents related to category.
};

apiInstance.getKnowledgeKnowledgebaseCategories(knowledgeBaseId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseCategories');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **parentId** | **String** | If specified, retrieves the children categories by parent category ID. | [optional]  |
 **isRoot** | **Boolean** | If specified, retrieves only the root categories. | [optional]  |
 **name** | **String** | Filter to return the categories that starts with the given category name. | [optional]  |
 **sortBy** | **String** | Name: sort by category names alphabetically; Hierarchy: sort by the full path of hierarchical category names alphabetically | [optional] [default to Name]<br />**Values**: Name, Hierarchy |
 **expand** | **String** | The specified entity attribute will be filled. Supported value:Ancestors: every ancestors will be filled via the parent attribute recursively,but only the id, name, parentId will be present for the ancestors. | [optional]  |
 **includeDocumentCount** | **Boolean** | If specified, retrieves the number of documents related to category. | [optional]  |

### Return type

**CategoryResponseListing**


## getKnowledgeKnowledgebaseCategory

> CategoryResponse getKnowledgeKnowledgebaseCategory(knowledgeBaseId, categoryId)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories/{categoryId}

Get category

Requires ALL permissions:

* knowledge:category:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let categoryId = "categoryId_example"; // String | Category ID

apiInstance.getKnowledgeKnowledgebaseCategory(knowledgeBaseId, categoryId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseCategory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseCategory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **categoryId** | **String** | Category ID |  |

### Return type

**CategoryResponse**


## getKnowledgeKnowledgebaseDocument

> KnowledgeDocumentResponse getKnowledgeKnowledgebaseDocument(knowledgeBaseId, documentId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}

Get document.

Requires ALL permissions:

* knowledge:document:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID.
let documentId = "documentId_example"; // String | Document ID.
let opts = { 
  'expand': ["expand_example"], // [String] | The specified entity attributes will be filled. Comma separated values expected. Max No. of variations that can be returned on expand is 20.
  'state': "state_example" // String | when state is Draft, draft version of the document is returned,otherwise by default published version is returned in the response.
};

apiInstance.getKnowledgeKnowledgebaseDocument(knowledgeBaseId, documentId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID. |  |
 **documentId** | **String** | Document ID. |  |
 **expand** | **[String]** | The specified entity attributes will be filled. Comma separated values expected. Max No. of variations that can be returned on expand is 20. | [optional] <br />**Values**: category, labels, variations |
 **state** | **String** | when state is Draft, draft version of the document is returned,otherwise by default published version is returned in the response. | [optional] <br />**Values**: Draft, Published |

### Return type

**KnowledgeDocumentResponse**


## getKnowledgeKnowledgebaseDocumentFeedback

> KnowledgeDocumentFeedbackResponseListing getKnowledgeKnowledgebaseDocumentFeedback(knowledgeBaseId, documentId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/feedback

Get a list of feedback records given on a document

Requires ANY permissions:

* knowledge:feedback:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID.
let documentId = "documentId_example"; // String | Document ID.
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'onlyCommented': true, // Boolean | If true, only feedback records that have comment are returned. If false, feedback records with and without comment are returned. Default: false.
  'documentVersionId': "documentVersionId_example", // String | Document version ID to filter by. Supported only if onlyCommented=true is set.
  'documentVariationId': "documentVariationId_example", // String | Document variation ID to filter by. Supported only if onlyCommented=true is set.
  'appType': "appType_example", // String | Application type to filter by. Supported only if onlyCommented=true is set.
  'queryType': "queryType_example", // String | Query type to filter by. Supported only if onlyCommented=true is set.
  'userId': "userId_example", // String | The ID of the user, who created the feedback, to filter by. Supported only if onlyCommented=true is set.
  'queueId': "queueId_example", // String | Queue ID to filter by. Supported only if onlyCommented=true is set.
  'state': "state_example" // String | State to filter by. Supported only if onlyCommented=true is set. Default: Final
};

apiInstance.getKnowledgeKnowledgebaseDocumentFeedback(knowledgeBaseId, documentId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseDocumentFeedback success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseDocumentFeedback');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID. |  |
 **documentId** | **String** | Document ID. |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **onlyCommented** | **Boolean** | If true, only feedback records that have comment are returned. If false, feedback records with and without comment are returned. Default: false. | [optional]  |
 **documentVersionId** | **String** | Document version ID to filter by. Supported only if onlyCommented=true is set. | [optional]  |
 **documentVariationId** | **String** | Document variation ID to filter by. Supported only if onlyCommented=true is set. | [optional]  |
 **appType** | **String** | Application type to filter by. Supported only if onlyCommented=true is set. | [optional] <br />**Values**: Assistant, BotFlow, MessengerKnowledgeApp, SmartAdvisor, SupportCenter |
 **queryType** | **String** | Query type to filter by. Supported only if onlyCommented=true is set. | [optional] <br />**Values**: Unknown, Article, AutoSearch, Category, ManualSearch, Recommendation, Suggestion, ExpandedArticle |
 **userId** | **String** | The ID of the user, who created the feedback, to filter by. Supported only if onlyCommented=true is set. | [optional]  |
 **queueId** | **String** | Queue ID to filter by. Supported only if onlyCommented=true is set. | [optional]  |
 **state** | **String** | State to filter by. Supported only if onlyCommented=true is set. Default: Final | [optional] <br />**Values**: All, Draft, Final |

### Return type

**KnowledgeDocumentFeedbackResponseListing**


## getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId

> KnowledgeDocumentFeedbackResponse getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId(knowledgeBaseId, documentId, feedbackId)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/feedback/{feedbackId}

Get a single feedback record given on a document

Requires ANY permissions:

* knowledge:feedback:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID.
let documentId = "documentId_example"; // String | Document ID.
let feedbackId = "feedbackId_example"; // String | Feedback ID.

apiInstance.getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId(knowledgeBaseId, documentId, feedbackId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID. |  |
 **documentId** | **String** | Document ID. |  |
 **feedbackId** | **String** | Feedback ID. |  |

### Return type

**KnowledgeDocumentFeedbackResponse**


## getKnowledgeKnowledgebaseDocumentVariation

> DocumentVariationResponse getKnowledgeKnowledgebaseDocumentVariation(documentVariationId, documentId, knowledgeBaseId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations/{documentVariationId}

Get a variation for a document.

Requires ALL permissions:

* knowledge:document:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let documentVariationId = "documentVariationId_example"; // String | Globally unique identifier for a document variation.
let documentId = "documentId_example"; // String | Globally unique identifier for a document.
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Globally unique identifier for a knowledge base.
let opts = { 
  'documentState': "documentState_example", // String | The state of the document.
  'expand': ["expand_example"] // [String] | The specified entity attributes will be filled. Comma separated values expected.
};

apiInstance.getKnowledgeKnowledgebaseDocumentVariation(documentVariationId, documentId, knowledgeBaseId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseDocumentVariation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseDocumentVariation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentVariationId** | **String** | Globally unique identifier for a document variation. |  |
 **documentId** | **String** | Globally unique identifier for a document. |  |
 **knowledgeBaseId** | **String** | Globally unique identifier for a knowledge base. |  |
 **documentState** | **String** | The state of the document. | [optional] <br />**Values**: Draft, Published |
 **expand** | **[String]** | The specified entity attributes will be filled. Comma separated values expected. | [optional] <br />**Values**: contentUrl |

### Return type

**DocumentVariationResponse**


## getKnowledgeKnowledgebaseDocumentVariations

> DocumentVariationResponseListing getKnowledgeKnowledgebaseDocumentVariations(knowledgeBaseId, documentId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations

Get variations for a document.

Requires ALL permissions:

* knowledge:document:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Globally unique identifier for the knowledge base.
let documentId = "documentId_example"; // String | Globally unique identifier for the document.
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'documentState': "documentState_example", // String | The state of the document.
  'expand': ["expand_example"] // [String] | The specified entity attributes will be filled. Comma separated values expected.
};

apiInstance.getKnowledgeKnowledgebaseDocumentVariations(knowledgeBaseId, documentId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseDocumentVariations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseDocumentVariations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Globally unique identifier for the knowledge base. |  |
 **documentId** | **String** | Globally unique identifier for the document. |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **documentState** | **String** | The state of the document. | [optional] <br />**Values**: Draft, Published |
 **expand** | **[String]** | The specified entity attributes will be filled. Comma separated values expected. | [optional] <br />**Values**: contentUrl |

### Return type

**DocumentVariationResponseListing**


## getKnowledgeKnowledgebaseDocumentVersion

> KnowledgeDocumentVersion getKnowledgeKnowledgebaseDocumentVersion(knowledgeBaseId, documentId, versionId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions/{versionId}

Get document version.

Requires ALL permissions:

* knowledge:documentVersion:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Globally unique identifier for the knowledge base.
let documentId = "documentId_example"; // String | Globally unique identifier for the document.
let versionId = "versionId_example"; // String | Globally unique identifier for the document version.
let opts = { 
  'expand': ["expand_example"] // [String] | The specified entity attributes will be filled. Comma separated values expected.
};

apiInstance.getKnowledgeKnowledgebaseDocumentVersion(knowledgeBaseId, documentId, versionId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseDocumentVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseDocumentVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Globally unique identifier for the knowledge base. |  |
 **documentId** | **String** | Globally unique identifier for the document. |  |
 **versionId** | **String** | Globally unique identifier for the document version. |  |
 **expand** | **[String]** | The specified entity attributes will be filled. Comma separated values expected. | [optional] <br />**Values**: category, labels |

### Return type

**KnowledgeDocumentVersion**


## getKnowledgeKnowledgebaseDocumentVersionVariation

> KnowledgeDocumentVersionVariation getKnowledgeKnowledgebaseDocumentVersionVariation(knowledgeBaseId, documentId, versionId, variationId)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions/{versionId}/variations/{variationId}

Get variation for the given document version.

Requires ALL permissions:

* knowledge:documentVersion:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Globally unique identifier for the knowledge base.
let documentId = "documentId_example"; // String | Globally unique identifier for the document.
let versionId = "versionId_example"; // String | Globally unique identifier for the document version.
let variationId = "variationId_example"; // String | Globally unique identifier for the document version variation.

apiInstance.getKnowledgeKnowledgebaseDocumentVersionVariation(knowledgeBaseId, documentId, versionId, variationId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseDocumentVersionVariation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseDocumentVersionVariation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Globally unique identifier for the knowledge base. |  |
 **documentId** | **String** | Globally unique identifier for the document. |  |
 **versionId** | **String** | Globally unique identifier for the document version. |  |
 **variationId** | **String** | Globally unique identifier for the document version variation. |  |

### Return type

**KnowledgeDocumentVersionVariation**


## getKnowledgeKnowledgebaseDocumentVersionVariations

> KnowledgeDocumentVersionVariationListing getKnowledgeKnowledgebaseDocumentVersionVariations(knowledgeBaseId, documentId, versionId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions/{versionId}/variations

Get variations for the given document version.

Requires ALL permissions:

* knowledge:documentVersion:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Globally unique identifier for the knowledge base.
let documentId = "documentId_example"; // String | Globally unique identifier for the document.
let versionId = "versionId_example"; // String | Globally unique identifier for the document version.
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example" // String | Number of entities to return. Maximum of 200.
};

apiInstance.getKnowledgeKnowledgebaseDocumentVersionVariations(knowledgeBaseId, documentId, versionId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseDocumentVersionVariations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseDocumentVersionVariations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Globally unique identifier for the knowledge base. |  |
 **documentId** | **String** | Globally unique identifier for the document. |  |
 **versionId** | **String** | Globally unique identifier for the document version. |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |

### Return type

**KnowledgeDocumentVersionVariationListing**


## getKnowledgeKnowledgebaseDocumentVersions

> KnowledgeDocumentVersionListing getKnowledgeKnowledgebaseDocumentVersions(knowledgeBaseId, documentId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions

Get document versions.

Requires ALL permissions:

* knowledge:documentVersion:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Globally unique identifier for the knowledge base.
let documentId = "documentId_example"; // String | Globally unique identifier for the document.
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'expand': ["expand_example"] // [String] | The specified entity attributes will be filled. Comma separated values expected.
};

apiInstance.getKnowledgeKnowledgebaseDocumentVersions(knowledgeBaseId, documentId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseDocumentVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseDocumentVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Globally unique identifier for the knowledge base. |  |
 **documentId** | **String** | Globally unique identifier for the document. |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **expand** | **[String]** | The specified entity attributes will be filled. Comma separated values expected. | [optional] <br />**Values**: category, labels |

### Return type

**KnowledgeDocumentVersionListing**


## getKnowledgeKnowledgebaseDocuments

> KnowledgeDocumentResponseListing getKnowledgeKnowledgebaseDocuments(knowledgeBaseId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents

Get documents.

Requires ALL permissions:

* knowledge:document:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'interval': "interval_example", // String | Retrieves the documents modified in specified date and time range. If the after and before cursor parameters are within this interval, it would return valid data, otherwise it throws an error.The dates in the interval are represented in ISO-8601 format: YYYY-MM-DDThh:mm:ssZ/YYYY-MM-DDThh:mm:ssZ
  'documentId': ["documentId_example"], // [String] | Retrieves the specified documents, comma separated values expected.
  'categoryId': ["categoryId_example"], // [String] | If specified, retrieves documents associated with category ids, comma separated values expected.
  'includeSubcategories': true, // Boolean | Works along with 'categoryId' query parameter. If specified, retrieves documents associated with category ids and its children categories.
  'includeDrafts': true, // Boolean | If includeDrafts is true, Documents in the draft state are also returned in the response.
  'labelIds': ["labelIds_example"], // [String] | If specified, retrieves documents associated with label ids, comma separated values expected.
  'expand': ["expand_example"], // [String] | The specified entity attributes will be filled. Comma separated values expected.
  'externalIds': ["externalIds_example"] // [String] | If specified, retrieves documents associated with external ids, comma separated values expected.
};

apiInstance.getKnowledgeKnowledgebaseDocuments(knowledgeBaseId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseDocuments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **interval** | **String** | Retrieves the documents modified in specified date and time range. If the after and before cursor parameters are within this interval, it would return valid data, otherwise it throws an error.The dates in the interval are represented in ISO-8601 format: YYYY-MM-DDThh:mm:ssZ/YYYY-MM-DDThh:mm:ssZ | [optional]  |
 **documentId** | **[String]** | Retrieves the specified documents, comma separated values expected. | [optional]  |
 **categoryId** | **[String]** | If specified, retrieves documents associated with category ids, comma separated values expected. | [optional]  |
 **includeSubcategories** | **Boolean** | Works along with 'categoryId' query parameter. If specified, retrieves documents associated with category ids and its children categories. | [optional]  |
 **includeDrafts** | **Boolean** | If includeDrafts is true, Documents in the draft state are also returned in the response. | [optional]  |
 **labelIds** | **[String]** | If specified, retrieves documents associated with label ids, comma separated values expected. | [optional]  |
 **expand** | **[String]** | The specified entity attributes will be filled. Comma separated values expected. | [optional] <br />**Values**: category, labels |
 **externalIds** | **[String]** | If specified, retrieves documents associated with external ids, comma separated values expected. | [optional]  |

### Return type

**KnowledgeDocumentResponseListing**


## getKnowledgeKnowledgebaseExportJob

> KnowledgeExportJobResponse getKnowledgeKnowledgebaseExportJob(knowledgeBaseId, exportJobId)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/export/jobs/{exportJobId}

Get export job report

Requires ALL permissions:

* knowledge:exportJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let exportJobId = "exportJobId_example"; // String | Export job ID

apiInstance.getKnowledgeKnowledgebaseExportJob(knowledgeBaseId, exportJobId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseExportJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseExportJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **exportJobId** | **String** | Export job ID |  |

### Return type

**KnowledgeExportJobResponse**


## getKnowledgeKnowledgebaseImportJob

> KnowledgeImportJobResponse getKnowledgeKnowledgebaseImportJob(knowledgeBaseId, importJobId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs/{importJobId}

Get import job report

Requires ALL permissions:

* knowledge:importJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let importJobId = "importJobId_example"; // String | Import job ID
let opts = { 
  'expand': ["expand_example"] // [String] | If expand contains 'urls' downloadURL and failedEntitiesURL will be filled.
};

apiInstance.getKnowledgeKnowledgebaseImportJob(knowledgeBaseId, importJobId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseImportJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseImportJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **importJobId** | **String** | Import job ID |  |
 **expand** | **[String]** | If expand contains 'urls' downloadURL and failedEntitiesURL will be filled. | [optional] <br />**Values**: urls |

### Return type

**KnowledgeImportJobResponse**


## getKnowledgeKnowledgebaseLabel

> LabelResponse getKnowledgeKnowledgebaseLabel(knowledgeBaseId, labelId)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels/{labelId}

Get label

Requires ALL permissions:

* knowledge:label:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let labelId = "labelId_example"; // String | Label ID

apiInstance.getKnowledgeKnowledgebaseLabel(knowledgeBaseId, labelId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseLabel success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseLabel');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **labelId** | **String** | Label ID |  |

### Return type

**LabelResponse**


## getKnowledgeKnowledgebaseLabels

> LabelListing getKnowledgeKnowledgebaseLabels(knowledgeBaseId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels

Get labels

Requires ALL permissions:

* knowledge:label:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'name': "name_example", // String | Filter to return the labels that contains the given phrase in the name.
  'includeDocumentCount': true // Boolean | If specified, retrieves the number of documents related to label.
};

apiInstance.getKnowledgeKnowledgebaseLabels(knowledgeBaseId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseLabels success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseLabels');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **name** | **String** | Filter to return the labels that contains the given phrase in the name. | [optional]  |
 **includeDocumentCount** | **Boolean** | If specified, retrieves the number of documents related to label. | [optional]  |

### Return type

**LabelListing**


## getKnowledgeKnowledgebaseLanguageCategories

> CategoryListing getKnowledgeKnowledgebaseLanguageCategories(knowledgeBaseId, languageCode, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories

Get categories

Requires ALL permissions:

* knowledge:category:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'limit': "limit_example", // String | Number of entities to return. Maximum of 200. Deprecated in favour of pageSize
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'name': "name_example" // String | Filter to return the categories that starts with the given category name.
};

apiInstance.getKnowledgeKnowledgebaseLanguageCategories(knowledgeBaseId, languageCode, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseLanguageCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseLanguageCategories');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **limit** | **String** | Number of entities to return. Maximum of 200. Deprecated in favour of pageSize | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **name** | **String** | Filter to return the categories that starts with the given category name. | [optional]  |

### Return type

**CategoryListing**


## getKnowledgeKnowledgebaseLanguageCategory

> KnowledgeExtendedCategory getKnowledgeKnowledgebaseLanguageCategory(categoryId, knowledgeBaseId, languageCode)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId}

Get category

Requires ALL permissions:

* knowledge:category:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let categoryId = "categoryId_example"; // String | Category ID
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE

apiInstance.getKnowledgeKnowledgebaseLanguageCategory(categoryId, knowledgeBaseId, languageCode)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseLanguageCategory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseLanguageCategory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **categoryId** | **String** | Category ID |  |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |

### Return type

**KnowledgeExtendedCategory**


## getKnowledgeKnowledgebaseLanguageDocument

> KnowledgeDocument getKnowledgeKnowledgebaseLanguageDocument(documentId, knowledgeBaseId, languageCode)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}

Get document

Requires ALL permissions:

* knowledge:document:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let documentId = "documentId_example"; // String | Document ID
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE

apiInstance.getKnowledgeKnowledgebaseLanguageDocument(documentId, knowledgeBaseId, languageCode)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseLanguageDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseLanguageDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |

### Return type

**KnowledgeDocument**


## getKnowledgeKnowledgebaseLanguageDocumentUpload

> KnowledgeDocumentContentUpload getKnowledgeKnowledgebaseLanguageDocumentUpload(documentId, knowledgeBaseId, languageCode, uploadId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}/uploads/{uploadId}

Get document content upload status

Requires ALL permissions:

* knowledge:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let documentId = "documentId_example"; // String | Document ID
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let uploadId = "uploadId_example"; // String | UploadId

apiInstance.getKnowledgeKnowledgebaseLanguageDocumentUpload(documentId, knowledgeBaseId, languageCode, uploadId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseLanguageDocumentUpload success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseLanguageDocumentUpload');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |
 **uploadId** | **String** | UploadId |  |

### Return type

**KnowledgeDocumentContentUpload**


## getKnowledgeKnowledgebaseLanguageDocuments

> DocumentListing getKnowledgeKnowledgebaseLanguageDocuments(knowledgeBaseId, languageCode, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents

Get documents

Requires ALL permissions:

* knowledge:document:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'limit': "limit_example", // String | Number of entities to return. Maximum of 200. Deprecated in favour of pageSize
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'categories': "categories_example", // String | Filter by categories ids, comma separated values expected.
  'title': "title_example", // String | Filter by document title.
  'sortBy': "sortBy_example", // String | Sort by.
  'sortOrder': "sortOrder_example", // String | Sort Order.
  'documentIds': ["documentIds_example"] // [String] | Comma-separated list of document identifiers to fetch by.
};

apiInstance.getKnowledgeKnowledgebaseLanguageDocuments(knowledgeBaseId, languageCode, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseLanguageDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseLanguageDocuments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **limit** | **String** | Number of entities to return. Maximum of 200. Deprecated in favour of pageSize | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **categories** | **String** | Filter by categories ids, comma separated values expected. | [optional]  |
 **title** | **String** | Filter by document title. | [optional]  |
 **sortBy** | **String** | Sort by. | [optional] <br />**Values**: Title, Date |
 **sortOrder** | **String** | Sort Order. | [optional] <br />**Values**: ASC, ascending, DESC, descending |
 **documentIds** | **[String]** | Comma-separated list of document identifiers to fetch by. | [optional]  |

### Return type

**DocumentListing**


## getKnowledgeKnowledgebaseLanguageDocumentsImport

> KnowledgeImport getKnowledgeKnowledgebaseLanguageDocumentsImport(knowledgeBaseId, languageCode, importId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports/{importId}

Get import operation report

Requires ALL permissions:

* knowledge:document:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let importId = "importId_example"; // String | Import ID

apiInstance.getKnowledgeKnowledgebaseLanguageDocumentsImport(knowledgeBaseId, languageCode, importId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseLanguageDocumentsImport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseLanguageDocumentsImport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |
 **importId** | **String** | Import ID |  |

### Return type

**KnowledgeImport**


## getKnowledgeKnowledgebaseLanguageTraining

> KnowledgeTraining getKnowledgeKnowledgebaseLanguageTraining(knowledgeBaseId, languageCode, trainingId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings/{trainingId}

Get training detail

Requires ALL permissions:

* knowledge:training:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let trainingId = "trainingId_example"; // String | Training ID

apiInstance.getKnowledgeKnowledgebaseLanguageTraining(knowledgeBaseId, languageCode, trainingId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseLanguageTraining success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseLanguageTraining');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |
 **trainingId** | **String** | Training ID |  |

### Return type

**KnowledgeTraining**


## getKnowledgeKnowledgebaseLanguageTrainings

> TrainingListing getKnowledgeKnowledgebaseLanguageTrainings(knowledgeBaseId, languageCode, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings

Get all trainings information for a knowledgebase

Requires ALL permissions:

* knowledge:training:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'limit': "limit_example", // String | Number of entities to return. Maximum of 200. Deprecated in favour of pageSize
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'knowledgeDocumentsState': "knowledgeDocumentsState_example" // String | Return the training with the specified state of the trained documents.
};

apiInstance.getKnowledgeKnowledgebaseLanguageTrainings(knowledgeBaseId, languageCode, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseLanguageTrainings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseLanguageTrainings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **limit** | **String** | Number of entities to return. Maximum of 200. Deprecated in favour of pageSize | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **knowledgeDocumentsState** | **String** | Return the training with the specified state of the trained documents. | [optional] <br />**Values**: Draft, Active, Discarded, Archived |

### Return type

**TrainingListing**


## getKnowledgeKnowledgebaseOperations

> OperationListing getKnowledgeKnowledgebaseOperations(knowledgeBaseId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/operations

Get operations

Requires ALL permissions:

* knowledge:importExportOperationsList:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'userId': ["userId_example"], // [String] | If specified, retrieves operations associated with user ids, comma separated values expected.
  'type': ["type_example"], // [String] | If specified, retrieves operations with specified operation type, comma separated values expected.
  'status': ["status_example"], // [String] | If specified, retrieves operations with specified operation status, comma separated values expected.
  'interval': "interval_example", // String | Retrieves the operations modified in specified date and time range. If the after and before cursor parameters are within this interval, it would return valid data, otherwise it throws an error.The dates in the interval are represented in ISO-8601 format: YYYY-MM-DDThh:mm:ssZ/YYYY-MM-DDThh:mm:ssZ
  'sourceId': ["sourceId_example"] // [String] | If specified, retrieves operations associated with source ids, comma separated values expected.
};

apiInstance.getKnowledgeKnowledgebaseOperations(knowledgeBaseId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseOperations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseOperations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **userId** | **[String]** | If specified, retrieves operations associated with user ids, comma separated values expected. | [optional]  |
 **type** | **[String]** | If specified, retrieves operations with specified operation type, comma separated values expected. | [optional] <br />**Values**: Export, Import, Parse, Sync |
 **status** | **[String]** | If specified, retrieves operations with specified operation status, comma separated values expected. | [optional]  |
 **interval** | **String** | Retrieves the operations modified in specified date and time range. If the after and before cursor parameters are within this interval, it would return valid data, otherwise it throws an error.The dates in the interval are represented in ISO-8601 format: YYYY-MM-DDThh:mm:ssZ/YYYY-MM-DDThh:mm:ssZ | [optional]  |
 **sourceId** | **[String]** | If specified, retrieves operations associated with source ids, comma separated values expected. | [optional]  |

### Return type

**OperationListing**


## getKnowledgeKnowledgebaseOperationsUsersQuery

> OperationCreatorUserResponse getKnowledgeKnowledgebaseOperationsUsersQuery(knowledgeBaseId)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/operations/users/query

Get ids of operation creator users and oauth clients

Requires ALL permissions:

* knowledge:importExportOperationsList:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID

apiInstance.getKnowledgeKnowledgebaseOperationsUsersQuery(knowledgeBaseId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseOperationsUsersQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseOperationsUsersQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |

### Return type

**OperationCreatorUserResponse**


## getKnowledgeKnowledgebaseParseJob

> KnowledgeParseJobResponse getKnowledgeKnowledgebaseParseJob(knowledgeBaseId, parseJobId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/parse/jobs/{parseJobId}

Get parse job report

Requires ALL permissions:

* knowledge:importJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let parseJobId = "parseJobId_example"; // String | Parse job ID
let opts = { 
  'expand': ["expand_example"] // [String] | If expand contains 'urls' downloadURL and failedEntitiesURL will be filled.
};

apiInstance.getKnowledgeKnowledgebaseParseJob(knowledgeBaseId, parseJobId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseParseJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseParseJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **parseJobId** | **String** | Parse job ID |  |
 **expand** | **[String]** | If expand contains 'urls' downloadURL and failedEntitiesURL will be filled. | [optional] <br />**Values**: urls |

### Return type

**KnowledgeParseJobResponse**


## getKnowledgeKnowledgebaseSources

> [SourceBaseResponse] getKnowledgeKnowledgebaseSources(knowledgeBaseId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources

Get Knowledge integration sources

Requires ALL permissions:

* knowledge:integrationSource:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let opts = { 
  'type': "type_example", // String | If specified, retrieves integration sources with specified integration type.
  'expand': ["expand_example"], // [String] | The specified entity attributes will be filled. Comma separated values expected.
  'ids': ["ids_example"] // [String] | If specified, retrieves integration sources with specified IDs.
};

apiInstance.getKnowledgeKnowledgebaseSources(knowledgeBaseId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseSources success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseSources');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **type** | **String** | If specified, retrieves integration sources with specified integration type. | [optional] <br />**Values**: Salesforce, ServiceNow |
 **expand** | **[String]** | The specified entity attributes will be filled. Comma separated values expected. | [optional] <br />**Values**: lastsync |
 **ids** | **[String]** | If specified, retrieves integration sources with specified IDs. | [optional]  |

### Return type

**[SourceBaseResponse]**


## getKnowledgeKnowledgebaseSourcesSalesforceSourceId

> SalesforceSourceResponse getKnowledgeKnowledgebaseSourcesSalesforceSourceId(knowledgeBaseId, sourceId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/salesforce/{sourceId}

Get Salesforce Knowledge integration source

Requires ALL permissions:

* knowledge:integrationSource:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let sourceId = "sourceId_example"; // String | Source ID
let opts = { 
  'expand': ["expand_example"] // [String] | The specified entity attributes will be filled. Comma separated values expected.
};

apiInstance.getKnowledgeKnowledgebaseSourcesSalesforceSourceId(knowledgeBaseId, sourceId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseSourcesSalesforceSourceId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseSourcesSalesforceSourceId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **sourceId** | **String** | Source ID |  |
 **expand** | **[String]** | The specified entity attributes will be filled. Comma separated values expected. | [optional] <br />**Values**: lastsync |

### Return type

**SalesforceSourceResponse**


## getKnowledgeKnowledgebaseSourcesServicenowSourceId

> ServiceNowSourceResponse getKnowledgeKnowledgebaseSourcesServicenowSourceId(knowledgeBaseId, sourceId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/servicenow/{sourceId}

Get ServiceNow Knowledge integration source

Requires ALL permissions:

* knowledge:integrationSource:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let sourceId = "sourceId_example"; // String | Source ID
let opts = { 
  'expand': ["expand_example"] // [String] | The specified entity attributes will be filled. Comma separated values expected.
};

apiInstance.getKnowledgeKnowledgebaseSourcesServicenowSourceId(knowledgeBaseId, sourceId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseSourcesServicenowSourceId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseSourcesServicenowSourceId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **sourceId** | **String** | Source ID |  |
 **expand** | **[String]** | The specified entity attributes will be filled. Comma separated values expected. | [optional] <br />**Values**: lastsync |

### Return type

**ServiceNowSourceResponse**


## getKnowledgeKnowledgebaseSynchronizeJob

> KnowledgeSyncJobResponse getKnowledgeKnowledgebaseSynchronizeJob(knowledgeBaseId, syncJobId)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/synchronize/jobs/{syncJobId}

Get synchronization job report

Requires ALL permissions:

* knowledge:syncJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let syncJobId = "syncJobId_example"; // String | Synchronization job ID

apiInstance.getKnowledgeKnowledgebaseSynchronizeJob(knowledgeBaseId, syncJobId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseSynchronizeJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseSynchronizeJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **syncJobId** | **String** | Synchronization job ID |  |

### Return type

**KnowledgeSyncJobResponse**


## getKnowledgeKnowledgebaseUnansweredGroup

> UnansweredGroup getKnowledgeKnowledgebaseUnansweredGroup(knowledgeBaseId, groupId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups/{groupId}

Get knowledge base unanswered group for a particular groupId

Requires ALL permissions:

* knowledge:groups:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let groupId = "groupId_example"; // String | The ID of the group to be retrieved.
let opts = { 
  'app': "app_example", // String | The app value to be used for filtering phrases.
  'dateStart': "dateStart_example", // String | The start date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'dateEnd': "dateEnd_example" // String | The end date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
};

apiInstance.getKnowledgeKnowledgebaseUnansweredGroup(knowledgeBaseId, groupId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseUnansweredGroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseUnansweredGroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **groupId** | **String** | The ID of the group to be retrieved. |  |
 **app** | **String** | The app value to be used for filtering phrases. | [optional] <br />**Values**: SupportCenter, MessengerKnowledgeApp, BotFlow, Assistant, SmartAdvisor |
 **dateStart** | **String** | The start date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
 **dateEnd** | **String** | The end date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |

### Return type

**UnansweredGroup**


## getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup

> UnansweredPhraseGroup getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup(knowledgeBaseId, groupId, phraseGroupId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups/{groupId}/phrasegroups/{phraseGroupId}

Get knowledge base unanswered phrase group for a particular phraseGroupId

Requires ALL permissions:

* knowledge:groups:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let groupId = "groupId_example"; // String | The ID of the group to be retrieved.
let phraseGroupId = "phraseGroupId_example"; // String | The ID of the phraseGroup to be retrieved.
let opts = { 
  'app': "app_example", // String | The app value to be used for filtering phrases.
  'dateStart': "dateStart_example", // String | The start date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'dateEnd': "dateEnd_example" // String | The end date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
};

apiInstance.getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup(knowledgeBaseId, groupId, phraseGroupId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **groupId** | **String** | The ID of the group to be retrieved. |  |
 **phraseGroupId** | **String** | The ID of the phraseGroup to be retrieved. |  |
 **app** | **String** | The app value to be used for filtering phrases. | [optional] <br />**Values**: SupportCenter, MessengerKnowledgeApp, BotFlow, Assistant, SmartAdvisor |
 **dateStart** | **String** | The start date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
 **dateEnd** | **String** | The end date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |

### Return type

**UnansweredPhraseGroup**


## getKnowledgeKnowledgebaseUnansweredGroups

> UnansweredGroups getKnowledgeKnowledgebaseUnansweredGroups(knowledgeBaseId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups

Get knowledge base unanswered groups

Requires ALL permissions:

* knowledge:groups:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let opts = { 
  'app': "app_example", // String | The app value to be used for filtering phrases.
  'dateStart': "dateStart_example", // String | The start date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'dateEnd': "dateEnd_example" // String | The end date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
};

apiInstance.getKnowledgeKnowledgebaseUnansweredGroups(knowledgeBaseId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseUnansweredGroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseUnansweredGroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **app** | **String** | The app value to be used for filtering phrases. | [optional] <br />**Values**: SupportCenter, MessengerKnowledgeApp, BotFlow, Assistant, SmartAdvisor |
 **dateStart** | **String** | The start date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
 **dateEnd** | **String** | The end date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |

### Return type

**UnansweredGroups**


## getKnowledgeKnowledgebaseUploadsUrlsJob

> GetUploadSourceUrlJobStatusResponse getKnowledgeKnowledgebaseUploadsUrlsJob(knowledgeBaseId, jobId)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/uploads/urls/jobs/{jobId}

Get content upload from URL job status

Requires ALL permissions:

* knowledge:uploadSourceUrlJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let jobId = "jobId_example"; // String | Upload job ID

apiInstance.getKnowledgeKnowledgebaseUploadsUrlsJob(knowledgeBaseId, jobId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseUploadsUrlsJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseUploadsUrlsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **jobId** | **String** | Upload job ID |  |

### Return type

**GetUploadSourceUrlJobStatusResponse**


## getKnowledgeKnowledgebases

> KnowledgeBaseListing getKnowledgeKnowledgebases(opts)


GET /api/v2/knowledge/knowledgebases

Get knowledge bases

Requires ALL permissions:

* knowledge:knowledgebase:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'limit': "limit_example", // String | Number of entities to return. Maximum of 100. Deprecated in favour of pageSize
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 100.
  'name': "name_example", // String | Filter by Name.
  'coreLanguage': "coreLanguage_example", // String | Filter by core language.
  'published': true, // Boolean | Filter by published status.
  'sortBy': "sortBy_example", // String | Sort by.
  'sortOrder': "sortOrder_example" // String | Sort Order.
};

apiInstance.getKnowledgeKnowledgebases(opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebases success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebases');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **limit** | **String** | Number of entities to return. Maximum of 100. Deprecated in favour of pageSize | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 100. | [optional]  |
 **name** | **String** | Filter by Name. | [optional]  |
 **coreLanguage** | **String** | Filter by core language. | [optional] <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |
 **published** | **Boolean** | Filter by published status. | [optional]  |
 **sortBy** | **String** | Sort by. | [optional] <br />**Values**: Name, Date |
 **sortOrder** | **String** | Sort Order. | [optional] <br />**Values**: ASC, ascending, DESC, descending |

### Return type

**KnowledgeBaseListing**


## patchKnowledgeGuestSessionDocumentsSearchSearchId

> void patchKnowledgeGuestSessionDocumentsSearchSearchId(sessionId, searchId, body)


PATCH /api/v2/knowledge/guest/sessions/{sessionId}/documents/search/{searchId}

Update search result.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.KnowledgeApi();

let sessionId = "sessionId_example"; // String | Knowledge guest session ID.
let searchId = "searchId_example"; // String | Search Result ID
let body = {}; // Object | 

apiInstance.patchKnowledgeGuestSessionDocumentsSearchSearchId(sessionId, searchId, body)
  .then(() => {
    console.log('patchKnowledgeGuestSessionDocumentsSearchSearchId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeGuestSessionDocumentsSearchSearchId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | Knowledge guest session ID. |  |
 **searchId** | **String** | Search Result ID |  |
 **body** | **Object** |  |  |

### Return type

void (no response body)


## patchKnowledgeKnowledgebase

> KnowledgeBase patchKnowledgeKnowledgebase(knowledgeBaseId, body)


PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}

Update knowledge base

Requires ALL permissions:

* knowledge:knowledgebase:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.patchKnowledgeKnowledgebase(knowledgeBaseId, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebase success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebase');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |

### Return type

**KnowledgeBase**


## patchKnowledgeKnowledgebaseCategory

> CategoryResponse patchKnowledgeKnowledgebaseCategory(knowledgeBaseId, categoryId, body)


PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories/{categoryId}

Update category

Requires ALL permissions:

* knowledge:category:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let categoryId = "categoryId_example"; // String | Category ID
let body = {}; // Object | 

apiInstance.patchKnowledgeKnowledgebaseCategory(knowledgeBaseId, categoryId, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseCategory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseCategory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **categoryId** | **String** | Category ID |  |
 **body** | **Object** |  |  |

### Return type

**CategoryResponse**


## patchKnowledgeKnowledgebaseDocument

> KnowledgeDocumentResponse patchKnowledgeKnowledgebaseDocument(knowledgeBaseId, documentId, body)


PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}

Update document.

Requires ALL permissions:

* knowledge:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID.
let documentId = "documentId_example"; // String | Document ID.
let body = {}; // Object | 

apiInstance.patchKnowledgeKnowledgebaseDocument(knowledgeBaseId, documentId, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID. |  |
 **documentId** | **String** | Document ID. |  |
 **body** | **Object** |  |  |

### Return type

**KnowledgeDocumentResponse**


## patchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId

> KnowledgeDocumentFeedbackResponse patchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId(knowledgeBaseId, documentId, feedbackId, opts)


PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/feedback/{feedbackId}

Update feedback on a document

Requires ANY permissions:

* knowledge:feedback:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID.
let documentId = "documentId_example"; // String | Document ID.
let feedbackId = "feedbackId_example"; // String | Feedback ID.
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId(knowledgeBaseId, documentId, feedbackId, opts)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID. |  |
 **documentId** | **String** | Document ID. |  |
 **feedbackId** | **String** | Feedback ID. |  |
 **body** | **Object** |  | [optional]  |

### Return type

**KnowledgeDocumentFeedbackResponse**


## patchKnowledgeKnowledgebaseDocumentVariation

> DocumentVariationResponse patchKnowledgeKnowledgebaseDocumentVariation(documentVariationId, documentId, knowledgeBaseId, body)


PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations/{documentVariationId}

Update a variation for a document.

Requires ALL permissions:

* knowledge:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let documentVariationId = "documentVariationId_example"; // String | Globally unique identifier for a document variation.
let documentId = "documentId_example"; // String | Globally unique identifier for a document.
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Globally unique identifier for a knowledge base.
let body = {}; // Object | 

apiInstance.patchKnowledgeKnowledgebaseDocumentVariation(documentVariationId, documentId, knowledgeBaseId, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseDocumentVariation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseDocumentVariation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentVariationId** | **String** | Globally unique identifier for a document variation. |  |
 **documentId** | **String** | Globally unique identifier for a document. |  |
 **knowledgeBaseId** | **String** | Globally unique identifier for a knowledge base. |  |
 **body** | **Object** |  |  |

### Return type

**DocumentVariationResponse**


## patchKnowledgeKnowledgebaseDocumentsSearchSearchId

> void patchKnowledgeKnowledgebaseDocumentsSearchSearchId(knowledgeBaseId, searchId, opts)


PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/search/{searchId}

Update search result.

Requires ALL permissions:

* knowledge:search:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | The ID of knowledge base containing the documents to query.
let searchId = "searchId_example"; // String | Search Result ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchKnowledgeKnowledgebaseDocumentsSearchSearchId(knowledgeBaseId, searchId, opts)
  .then(() => {
    console.log('patchKnowledgeKnowledgebaseDocumentsSearchSearchId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseDocumentsSearchSearchId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | The ID of knowledge base containing the documents to query. |  |
 **searchId** | **String** | Search Result ID |  |
 **body** | **Object** |  | [optional]  |

### Return type

void (no response body)


## patchKnowledgeKnowledgebaseImportJob

> KnowledgeImportJobResponse patchKnowledgeKnowledgebaseImportJob(knowledgeBaseId, importJobId, body)


PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs/{importJobId}

Start import job

Requires ALL permissions:

* knowledge:importJob:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let importJobId = "importJobId_example"; // String | Import job ID
let body = {}; // Object | 

apiInstance.patchKnowledgeKnowledgebaseImportJob(knowledgeBaseId, importJobId, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseImportJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseImportJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **importJobId** | **String** | Import job ID |  |
 **body** | **Object** |  |  |

### Return type

**KnowledgeImportJobResponse**


## patchKnowledgeKnowledgebaseLabel

> LabelResponse patchKnowledgeKnowledgebaseLabel(knowledgeBaseId, labelId, body)


PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels/{labelId}

Update label

Requires ALL permissions:

* knowledge:label:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let labelId = "labelId_example"; // String | Label ID
let body = {}; // Object | 

apiInstance.patchKnowledgeKnowledgebaseLabel(knowledgeBaseId, labelId, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseLabel success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseLabel');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **labelId** | **String** | Label ID |  |
 **body** | **Object** |  |  |

### Return type

**LabelResponse**


## patchKnowledgeKnowledgebaseLanguageCategory

> KnowledgeExtendedCategory patchKnowledgeKnowledgebaseLanguageCategory(categoryId, knowledgeBaseId, languageCode, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId}

Update category

Requires ALL permissions:

* knowledge:category:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let categoryId = "categoryId_example"; // String | Category ID
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let body = {}; // Object | 

apiInstance.patchKnowledgeKnowledgebaseLanguageCategory(categoryId, knowledgeBaseId, languageCode, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseLanguageCategory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseLanguageCategory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **categoryId** | **String** | Category ID |  |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |
 **body** | **Object** |  |  |

### Return type

**KnowledgeExtendedCategory**


## patchKnowledgeKnowledgebaseLanguageDocument

> KnowledgeDocument patchKnowledgeKnowledgebaseLanguageDocument(documentId, knowledgeBaseId, languageCode, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}

Update document

Requires ALL permissions:

* knowledge:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let documentId = "documentId_example"; // String | Document ID
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let body = {}; // Object | 

apiInstance.patchKnowledgeKnowledgebaseLanguageDocument(documentId, knowledgeBaseId, languageCode, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseLanguageDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseLanguageDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |
 **body** | **Object** |  |  |

### Return type

**KnowledgeDocument**


## patchKnowledgeKnowledgebaseLanguageDocuments

> DocumentListing patchKnowledgeKnowledgebaseLanguageDocuments(knowledgeBaseId, languageCode, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents

Update documents collection

Requires ALL permissions:

* knowledge:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let body = [{}]; // Object | 

apiInstance.patchKnowledgeKnowledgebaseLanguageDocuments(knowledgeBaseId, languageCode, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseLanguageDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseLanguageDocuments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |
 **body** | **Object** |  |  |

### Return type

**DocumentListing**


## patchKnowledgeKnowledgebaseLanguageDocumentsImport

> KnowledgeImport patchKnowledgeKnowledgebaseLanguageDocumentsImport(knowledgeBaseId, languageCode, importId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports/{importId}

Start import operation

Requires ALL permissions:

* knowledge:document:edit
* knowledge:document:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let importId = "importId_example"; // String | Import ID
let body = {}; // Object | 

apiInstance.patchKnowledgeKnowledgebaseLanguageDocumentsImport(knowledgeBaseId, languageCode, importId, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseLanguageDocumentsImport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseLanguageDocumentsImport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |
 **importId** | **String** | Import ID |  |
 **body** | **Object** |  |  |

### Return type

**KnowledgeImport**


## patchKnowledgeKnowledgebaseParseJob

> void patchKnowledgeKnowledgebaseParseJob(knowledgeBaseId, parseJobId, body)


PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/parse/jobs/{parseJobId}

Send update to the parse operation

Requires ALL permissions:

* knowledge:importJob:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let parseJobId = "parseJobId_example"; // String | Parse job ID
let body = {}; // Object | 

apiInstance.patchKnowledgeKnowledgebaseParseJob(knowledgeBaseId, parseJobId, body)
  .then(() => {
    console.log('patchKnowledgeKnowledgebaseParseJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseParseJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **parseJobId** | **String** | Parse job ID |  |
 **body** | **Object** |  |  |

### Return type

void (no response body)


## patchKnowledgeKnowledgebaseSynchronizeJob

> KnowledgeSyncJobResponse patchKnowledgeKnowledgebaseSynchronizeJob(knowledgeBaseId, syncJobId, body)


PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/synchronize/jobs/{syncJobId}

Update synchronization job

Requires ALL permissions:

* knowledge:syncJob:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let syncJobId = "syncJobId_example"; // String | Synchronization job ID
let body = {}; // Object | 

apiInstance.patchKnowledgeKnowledgebaseSynchronizeJob(knowledgeBaseId, syncJobId, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseSynchronizeJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseSynchronizeJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **syncJobId** | **String** | Synchronization job ID |  |
 **body** | **Object** |  |  |

### Return type

**KnowledgeSyncJobResponse**


## patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup

> UnansweredPhraseGroupUpdateResponse patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup(knowledgeBaseId, groupId, phraseGroupId, body)


PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups/{groupId}/phrasegroups/{phraseGroupId}

Update a Knowledge base unanswered phrase group

Requires ALL permissions:

* knowledge:groups:edit
* knowledge:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let groupId = "groupId_example"; // String | The ID of the group to be updated.
let phraseGroupId = "phraseGroupId_example"; // String | The ID of the phraseGroup to be updated.
let body = {}; // Object | Request body of the update unanswered group endpoint.

apiInstance.patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup(knowledgeBaseId, groupId, phraseGroupId, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **groupId** | **String** | The ID of the group to be updated. |  |
 **phraseGroupId** | **String** | The ID of the phraseGroup to be updated. |  |
 **body** | **Object** | Request body of the update unanswered group endpoint. |  |

### Return type

**UnansweredPhraseGroupUpdateResponse**


## postKnowledgeDocumentuploads

> UploadUrlResponse postKnowledgeDocumentuploads(body)


POST /api/v2/knowledge/documentuploads

Creates a presigned URL for uploading a knowledge import file with a set of documents

Requires ALL permissions:

* knowledge:document:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let body = {}; // Object | query

apiInstance.postKnowledgeDocumentuploads(body)
  .then((data) => {
    console.log(`postKnowledgeDocumentuploads success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeDocumentuploads');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**UploadUrlResponse**


## postKnowledgeGuestSessionDocumentCopies

> void postKnowledgeGuestSessionDocumentCopies(sessionId, documentId, opts)


POST /api/v2/knowledge/guest/sessions/{sessionId}/documents/{documentId}/copies

Indicate that the document was copied by the user.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.KnowledgeApi();

let sessionId = "sessionId_example"; // String | Knowledge guest session ID.
let documentId = "documentId_example"; // String | Document ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.postKnowledgeGuestSessionDocumentCopies(sessionId, documentId, opts)
  .then(() => {
    console.log('postKnowledgeGuestSessionDocumentCopies returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeGuestSessionDocumentCopies');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | Knowledge guest session ID. |  |
 **documentId** | **String** | Document ID |  |
 **body** | **Object** |  | [optional]  |

### Return type

void (no response body)


## postKnowledgeGuestSessionDocumentFeedback

> KnowledgeGuestDocumentFeedback postKnowledgeGuestSessionDocumentFeedback(sessionId, documentId, opts)


POST /api/v2/knowledge/guest/sessions/{sessionId}/documents/{documentId}/feedback

Give feedback on a document

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.KnowledgeApi();

let sessionId = "sessionId_example"; // String | Knowledge guest session ID.
let documentId = "documentId_example"; // String | Document ID.
let opts = { 
  'body': {} // Object | 
};

apiInstance.postKnowledgeGuestSessionDocumentFeedback(sessionId, documentId, opts)
  .then((data) => {
    console.log(`postKnowledgeGuestSessionDocumentFeedback success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeGuestSessionDocumentFeedback');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | Knowledge guest session ID. |  |
 **documentId** | **String** | Document ID. |  |
 **body** | **Object** |  | [optional]  |

### Return type

**KnowledgeGuestDocumentFeedback**


## postKnowledgeGuestSessionDocumentViews

> void postKnowledgeGuestSessionDocumentViews(sessionId, documentId, opts)


POST /api/v2/knowledge/guest/sessions/{sessionId}/documents/{documentId}/views

Create view event for a document.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.KnowledgeApi();

let sessionId = "sessionId_example"; // String | Knowledge guest session ID.
let documentId = "documentId_example"; // String | Document ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.postKnowledgeGuestSessionDocumentViews(sessionId, documentId, opts)
  .then(() => {
    console.log('postKnowledgeGuestSessionDocumentViews returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeGuestSessionDocumentViews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | Knowledge guest session ID. |  |
 **documentId** | **String** | Document ID |  |
 **body** | **Object** |  | [optional]  |

### Return type

void (no response body)


## postKnowledgeGuestSessionDocumentsAnswers

> KnowledgeGuestAnswerDocumentsResponse postKnowledgeGuestSessionDocumentsAnswers(sessionId, body)


POST /api/v2/knowledge/guest/sessions/{sessionId}/documents/answers

Answer documents.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.KnowledgeApi();

let sessionId = "sessionId_example"; // String | Knowledge guest session ID.
let body = {}; // Object | 

apiInstance.postKnowledgeGuestSessionDocumentsAnswers(sessionId, body)
  .then((data) => {
    console.log(`postKnowledgeGuestSessionDocumentsAnswers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeGuestSessionDocumentsAnswers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | Knowledge guest session ID. |  |
 **body** | **Object** |  |  |

### Return type

**KnowledgeGuestAnswerDocumentsResponse**


## postKnowledgeGuestSessionDocumentsPresentations

> void postKnowledgeGuestSessionDocumentsPresentations(sessionId, opts)


POST /api/v2/knowledge/guest/sessions/{sessionId}/documents/presentations

Indicate that documents were presented to the user.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.KnowledgeApi();

let sessionId = "sessionId_example"; // String | Knowledge guest session ID.
let opts = { 
  'body': {} // Object | 
};

apiInstance.postKnowledgeGuestSessionDocumentsPresentations(sessionId, opts)
  .then(() => {
    console.log('postKnowledgeGuestSessionDocumentsPresentations returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeGuestSessionDocumentsPresentations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | Knowledge guest session ID. |  |
 **body** | **Object** |  | [optional]  |

### Return type

void (no response body)


## postKnowledgeGuestSessionDocumentsSearch

> KnowledgeDocumentGuestSearch postKnowledgeGuestSessionDocumentsSearch(sessionId, opts)


POST /api/v2/knowledge/guest/sessions/{sessionId}/documents/search

Search the documents in a guest session.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.KnowledgeApi();

let sessionId = "sessionId_example"; // String | Knowledge guest session ID.
let opts = { 
  'expand': ["expand_example"], // [String] | Fields, if any, to expand for each document in the search result matching the query.
  'body': {} // Object | 
};

apiInstance.postKnowledgeGuestSessionDocumentsSearch(sessionId, opts)
  .then((data) => {
    console.log(`postKnowledgeGuestSessionDocumentsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeGuestSessionDocumentsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | Knowledge guest session ID. |  |
 **expand** | **[String]** | Fields, if any, to expand for each document in the search result matching the query. | [optional] <br />**Values**: documentVariations, documentAlternatives, knowledgeBaseLanguageCode |
 **body** | **Object** |  | [optional]  |

### Return type

**KnowledgeDocumentGuestSearch**


## postKnowledgeGuestSessionDocumentsSearchSuggestions

> KnowledgeGuestDocumentSuggestion postKnowledgeGuestSessionDocumentsSearchSuggestions(sessionId, opts)


POST /api/v2/knowledge/guest/sessions/{sessionId}/documents/search/suggestions

Query the knowledge documents to provide suggestions for auto completion.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.KnowledgeApi();

let sessionId = "sessionId_example"; // String | Knowledge guest session ID.
let opts = { 
  'body': {} // Object | 
};

apiInstance.postKnowledgeGuestSessionDocumentsSearchSuggestions(sessionId, opts)
  .then((data) => {
    console.log(`postKnowledgeGuestSessionDocumentsSearchSuggestions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeGuestSessionDocumentsSearchSuggestions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | Knowledge guest session ID. |  |
 **body** | **Object** |  | [optional]  |

### Return type

**KnowledgeGuestDocumentSuggestion**


## postKnowledgeGuestSessions

> KnowledgeGuestSession postKnowledgeGuestSessions(body)


POST /api/v2/knowledge/guest/sessions

Create guest session

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.KnowledgeApi();

let body = {}; // Object | 

apiInstance.postKnowledgeGuestSessions(body)
  .then((data) => {
    console.log(`postKnowledgeGuestSessions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeGuestSessions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |

### Return type

**KnowledgeGuestSession**


## postKnowledgeKnowledgebaseCategories

> CategoryResponse postKnowledgeKnowledgebaseCategories(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories

Create new category

Requires ALL permissions:

* knowledge:category:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseCategories(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseCategories');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |

### Return type

**CategoryResponse**


## postKnowledgeKnowledgebaseChunksSearch

> KnowledgeDocumentChunkResponse postKnowledgeKnowledgebaseChunksSearch(knowledgeBaseId, opts)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/chunks/search

Search for chunks in a knowledge base

Requires ALL permissions:

* knowledge:knowledgebase:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge Base ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.postKnowledgeKnowledgebaseChunksSearch(knowledgeBaseId, opts)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseChunksSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseChunksSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge Base ID |  |
 **body** | **Object** |  | [optional]  |

### Return type

**KnowledgeDocumentChunkResponse**


## postKnowledgeKnowledgebaseDocumentCopies

> void postKnowledgeKnowledgebaseDocumentCopies(knowledgeBaseId, documentId, opts)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/copies

Indicate that the document was copied by the user.

Requires ALL permissions:

* knowledge:documentCopy:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID.
let documentId = "documentId_example"; // String | Document ID.
let opts = { 
  'body': {} // Object | 
};

apiInstance.postKnowledgeKnowledgebaseDocumentCopies(knowledgeBaseId, documentId, opts)
  .then(() => {
    console.log('postKnowledgeKnowledgebaseDocumentCopies returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentCopies');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID. |  |
 **documentId** | **String** | Document ID. |  |
 **body** | **Object** |  | [optional]  |

### Return type

void (no response body)


## postKnowledgeKnowledgebaseDocumentFeedback

> KnowledgeDocumentFeedbackResponse postKnowledgeKnowledgebaseDocumentFeedback(knowledgeBaseId, documentId, opts)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/feedback

Give feedback on a document

Requires ANY permissions:

* knowledge:feedback:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID.
let documentId = "documentId_example"; // String | Document ID.
let opts = { 
  'body': {} // Object | 
};

apiInstance.postKnowledgeKnowledgebaseDocumentFeedback(knowledgeBaseId, documentId, opts)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseDocumentFeedback success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentFeedback');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID. |  |
 **documentId** | **String** | Document ID. |  |
 **body** | **Object** |  | [optional]  |

### Return type

**KnowledgeDocumentFeedbackResponse**


## postKnowledgeKnowledgebaseDocumentVariations

> DocumentVariationResponse postKnowledgeKnowledgebaseDocumentVariations(knowledgeBaseId, documentId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations

Create a variation for a document.

Requires ANY permissions:

* knowledge:document:add
* knowledge:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Globally unique identifier for the knowledge base.
let documentId = "documentId_example"; // String | Globally unique identifier for the document.
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseDocumentVariations(knowledgeBaseId, documentId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseDocumentVariations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentVariations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Globally unique identifier for the knowledge base. |  |
 **documentId** | **String** | Globally unique identifier for the document. |  |
 **body** | **Object** |  |  |

### Return type

**DocumentVariationResponse**


## postKnowledgeKnowledgebaseDocumentVersions

> KnowledgeDocumentVersion postKnowledgeKnowledgebaseDocumentVersions(knowledgeBaseId, documentId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions

Creates or restores a document version.

Requires ALL permissions:

* knowledge:documentVersion:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Globally unique identifier for the knowledge base.
let documentId = "documentId_example"; // String | Globally unique identifier for the document.
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseDocumentVersions(knowledgeBaseId, documentId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseDocumentVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Globally unique identifier for the knowledge base. |  |
 **documentId** | **String** | Globally unique identifier for the document. |  |
 **body** | **Object** |  |  |

### Return type

**KnowledgeDocumentVersion**


## postKnowledgeKnowledgebaseDocumentViews

> void postKnowledgeKnowledgebaseDocumentViews(knowledgeBaseId, documentId, opts)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/views

Create view for a document.

Requires ALL permissions:

* knowledge:documentView:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID.
let documentId = "documentId_example"; // String | Document ID.
let opts = { 
  'body': {} // Object | 
};

apiInstance.postKnowledgeKnowledgebaseDocumentViews(knowledgeBaseId, documentId, opts)
  .then(() => {
    console.log('postKnowledgeKnowledgebaseDocumentViews returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentViews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID. |  |
 **documentId** | **String** | Document ID. |  |
 **body** | **Object** |  | [optional]  |

### Return type

void (no response body)


## postKnowledgeKnowledgebaseDocuments

> KnowledgeDocumentResponse postKnowledgeKnowledgebaseDocuments(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents

Create document.

Requires ALL permissions:

* knowledge:document:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseDocuments(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocuments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |

### Return type

**KnowledgeDocumentResponse**


## postKnowledgeKnowledgebaseDocumentsAnswers

> KnowledgeAnswerDocumentsResponse postKnowledgeKnowledgebaseDocumentsAnswers(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/answers

Answer documents.

Requires ALL permissions:

* knowledge:document:view
* knowledge:documentAnswer:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseDocumentsAnswers(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseDocumentsAnswers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentsAnswers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |

### Return type

**KnowledgeAnswerDocumentsResponse**


## postKnowledgeKnowledgebaseDocumentsBulkRemove

> BulkResponse postKnowledgeKnowledgebaseDocumentsBulkRemove(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/bulk/remove

Bulk remove documents.

Requires ALL permissions:

* knowledge:document:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseDocumentsBulkRemove(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseDocumentsBulkRemove success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentsBulkRemove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |

### Return type

**BulkResponse**


## postKnowledgeKnowledgebaseDocumentsBulkUpdate

> BulkResponse postKnowledgeKnowledgebaseDocumentsBulkUpdate(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/bulk/update

Bulk update documents.

Requires ALL permissions:

* knowledge:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseDocumentsBulkUpdate(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseDocumentsBulkUpdate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentsBulkUpdate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |

### Return type

**BulkResponse**


## postKnowledgeKnowledgebaseDocumentsPresentations

> void postKnowledgeKnowledgebaseDocumentsPresentations(knowledgeBaseId, opts)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/presentations

Indicate that documents were presented to the user.

Requires ALL permissions:

* knowledge:documentPresentation:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID.
let opts = { 
  'body': {} // Object | 
};

apiInstance.postKnowledgeKnowledgebaseDocumentsPresentations(knowledgeBaseId, opts)
  .then(() => {
    console.log('postKnowledgeKnowledgebaseDocumentsPresentations returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentsPresentations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID. |  |
 **body** | **Object** |  | [optional]  |

### Return type

void (no response body)


## postKnowledgeKnowledgebaseDocumentsQuery

> KnowledgeDocumentQueryResponse postKnowledgeKnowledgebaseDocumentsQuery(knowledgeBaseId, opts)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/query

Query for knowledge documents.

Requires ALL permissions:

* knowledge:document:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge Base ID
let opts = { 
  'expand': ["expand_example"], // [String] | Fields, if any, to expand for each document in the search result matching the query.
  'body': {} // Object | 
};

apiInstance.postKnowledgeKnowledgebaseDocumentsQuery(knowledgeBaseId, opts)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseDocumentsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge Base ID |  |
 **expand** | **[String]** | Fields, if any, to expand for each document in the search result matching the query. | [optional] <br />**Values**: documentVariations, documentAlternatives, knowledgeBaseLanguageCode, variationChunks |
 **body** | **Object** |  | [optional]  |

### Return type

**KnowledgeDocumentQueryResponse**


## postKnowledgeKnowledgebaseDocumentsSearch

> KnowledgeDocumentSearch postKnowledgeKnowledgebaseDocumentsSearch(knowledgeBaseId, opts)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/search

Search the documents in a knowledge base.

Requires ALL permissions:

* knowledge:knowledgebase:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | The ID of knowledge base containing the documents to query.
let opts = { 
  'expand': ["expand_example"], // [String] | Fields, if any, to expand for each document in the search result matching the query.
  'body': {} // Object | 
};

apiInstance.postKnowledgeKnowledgebaseDocumentsSearch(knowledgeBaseId, opts)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseDocumentsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | The ID of knowledge base containing the documents to query. |  |
 **expand** | **[String]** | Fields, if any, to expand for each document in the search result matching the query. | [optional] <br />**Values**: documentVariations, documentAlternatives, knowledgeBaseLanguageCode, variationChunks |
 **body** | **Object** |  | [optional]  |

### Return type

**KnowledgeDocumentSearch**


## postKnowledgeKnowledgebaseDocumentsSearchSuggestions

> KnowledgeDocumentSuggestion postKnowledgeKnowledgebaseDocumentsSearchSuggestions(knowledgeBaseId, opts)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/search/suggestions

Query the knowledge documents to provide suggestions for auto completion.

Requires ALL permissions:

* knowledge:knowledgebase:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | The ID of knowledge base containing the documents to query.
let opts = { 
  'body': {} // Object | 
};

apiInstance.postKnowledgeKnowledgebaseDocumentsSearchSuggestions(knowledgeBaseId, opts)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseDocumentsSearchSuggestions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentsSearchSuggestions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | The ID of knowledge base containing the documents to query. |  |
 **body** | **Object** |  | [optional]  |

### Return type

**KnowledgeDocumentSuggestion**


## postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd

> BulkResponse postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/versions/bulk/add

Bulk add document versions.

Requires ALL permissions:

* knowledge:documentVersion:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |

### Return type

**BulkResponse**


## postKnowledgeKnowledgebaseExportJobs

> KnowledgeExportJobResponse postKnowledgeKnowledgebaseExportJobs(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/export/jobs

Create export job

Requires ALL permissions:

* knowledge:exportJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseExportJobs(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseExportJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseExportJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |

### Return type

**KnowledgeExportJobResponse**


## postKnowledgeKnowledgebaseImportJobs

> KnowledgeImportJobResponse postKnowledgeKnowledgebaseImportJobs(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs

Create import job

Requires ALL permissions:

* knowledge:importJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseImportJobs(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseImportJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseImportJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |

### Return type

**KnowledgeImportJobResponse**


## postKnowledgeKnowledgebaseLabels

> LabelResponse postKnowledgeKnowledgebaseLabels(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels

Create new label

Requires ALL permissions:

* knowledge:label:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseLabels(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseLabels success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseLabels');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |

### Return type

**LabelResponse**


## postKnowledgeKnowledgebaseLanguageCategories

> KnowledgeExtendedCategory postKnowledgeKnowledgebaseLanguageCategories(knowledgeBaseId, languageCode, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories

Create new category

Requires ALL permissions:

* knowledge:category:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseLanguageCategories(knowledgeBaseId, languageCode, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseLanguageCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseLanguageCategories');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |
 **body** | **Object** |  |  |

### Return type

**KnowledgeExtendedCategory**


## postKnowledgeKnowledgebaseLanguageDocumentUploads

> KnowledgeDocumentContentUpload postKnowledgeKnowledgebaseLanguageDocumentUploads(documentId, knowledgeBaseId, languageCode, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}/uploads

Upload Article Content

Requires ALL permissions:

* knowledge:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let documentId = "documentId_example"; // String | Document ID
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseLanguageDocumentUploads(documentId, knowledgeBaseId, languageCode, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseLanguageDocumentUploads success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseLanguageDocumentUploads');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |
 **body** | **Object** |  |  |

### Return type

**KnowledgeDocumentContentUpload**


## postKnowledgeKnowledgebaseLanguageDocuments

> KnowledgeDocument postKnowledgeKnowledgebaseLanguageDocuments(knowledgeBaseId, languageCode, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents

Create document

Requires ALL permissions:

* knowledge:document:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseLanguageDocuments(knowledgeBaseId, languageCode, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseLanguageDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseLanguageDocuments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |
 **body** | **Object** |  |  |

### Return type

**KnowledgeDocument**


## postKnowledgeKnowledgebaseLanguageDocumentsImports

> KnowledgeImport postKnowledgeKnowledgebaseLanguageDocumentsImports(knowledgeBaseId, languageCode, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports

Create import operation

Requires ALL permissions:

* knowledge:document:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseLanguageDocumentsImports(knowledgeBaseId, languageCode, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseLanguageDocumentsImports success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseLanguageDocumentsImports');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |
 **body** | **Object** |  |  |

### Return type

**KnowledgeImport**


## postKnowledgeKnowledgebaseLanguageTrainingPromote

> KnowledgeTraining postKnowledgeKnowledgebaseLanguageTrainingPromote(knowledgeBaseId, languageCode, trainingId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings/{trainingId}/promote

Promote trained documents from draft state to active.

Requires ALL permissions:

* knowledge:training:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let trainingId = "trainingId_example"; // String | Training ID

apiInstance.postKnowledgeKnowledgebaseLanguageTrainingPromote(knowledgeBaseId, languageCode, trainingId)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseLanguageTrainingPromote success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseLanguageTrainingPromote');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |
 **trainingId** | **String** | Training ID |  |

### Return type

**KnowledgeTraining**


## postKnowledgeKnowledgebaseLanguageTrainings

> KnowledgeTraining postKnowledgeKnowledgebaseLanguageTrainings(knowledgeBaseId, languageCode)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings

Trigger training

Requires ALL permissions:

* knowledge:training:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE

apiInstance.postKnowledgeKnowledgebaseLanguageTrainings(knowledgeBaseId, languageCode)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseLanguageTrainings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseLanguageTrainings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT, ca-ES, tr-TR, sv-SE, fi-FI, nb-NO, da-DK, ja-JP, ar-AE, zh-CN, zh-TW, zh-HK, ko-KR, pl-PL, hi-IN, th-TH, hu-HU, vi-VN, uk-UA, cs-CZ |

### Return type

**KnowledgeTraining**


## postKnowledgeKnowledgebaseParseJobImport

> void postKnowledgeKnowledgebaseParseJobImport(knowledgeBaseId, parseJobId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/parse/jobs/{parseJobId}/import

Import the parsed articles

Requires ALL permissions:

* knowledge:importJob:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let parseJobId = "parseJobId_example"; // String | Parse job ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseParseJobImport(knowledgeBaseId, parseJobId, body)
  .then(() => {
    console.log('postKnowledgeKnowledgebaseParseJobImport returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseParseJobImport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **parseJobId** | **String** | Parse job ID |  |
 **body** | **Object** |  |  |

### Return type

void (no response body)


## postKnowledgeKnowledgebaseParseJobs

> KnowledgeParseJobResponse postKnowledgeKnowledgebaseParseJobs(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/parse/jobs

Create parse job

Requires ALL permissions:

* knowledge:importJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseParseJobs(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseParseJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseParseJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |

### Return type

**KnowledgeParseJobResponse**


## postKnowledgeKnowledgebaseSearch

> KnowledgeSearchResponse postKnowledgeKnowledgebaseSearch(knowledgeBaseId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/search

Search Documents

Requires ALL permissions:

* knowledge:knowledgebase:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.postKnowledgeKnowledgebaseSearch(knowledgeBaseId, opts)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  | [optional]  |

### Return type

**KnowledgeSearchResponse**


## postKnowledgeKnowledgebaseSourcesSalesforce

> KnowledgeSyncJobResponse postKnowledgeKnowledgebaseSourcesSalesforce(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/salesforce

Create Salesforce Knowledge integration source

Requires ALL permissions:

* knowledge:integrationSource:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseSourcesSalesforce(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseSourcesSalesforce success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseSourcesSalesforce');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |

### Return type

**KnowledgeSyncJobResponse**


## postKnowledgeKnowledgebaseSourcesSalesforceSourceIdSync

> SourceSyncResponse postKnowledgeKnowledgebaseSourcesSalesforceSourceIdSync(knowledgeBaseId, sourceId, opts)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/salesforce/{sourceId}/sync

Start sync on Salesforce Knowledge integration source

Requires ALL permissions:

* knowledge:integrationSource:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let sourceId = "sourceId_example"; // String | Source ID
let opts = { 
  'body': null // Object | 
};

apiInstance.postKnowledgeKnowledgebaseSourcesSalesforceSourceIdSync(knowledgeBaseId, sourceId, opts)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseSourcesSalesforceSourceIdSync success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseSourcesSalesforceSourceIdSync');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **sourceId** | **String** | Source ID |  |
 **body** | **Object** |  | [optional]  |

### Return type

**SourceSyncResponse**


## postKnowledgeKnowledgebaseSourcesServicenow

> KnowledgeSyncJobResponse postKnowledgeKnowledgebaseSourcesServicenow(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/servicenow

Create ServiceNow Knowledge integration source

Requires ALL permissions:

* knowledge:integrationSource:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseSourcesServicenow(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseSourcesServicenow success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseSourcesServicenow');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |

### Return type

**KnowledgeSyncJobResponse**


## postKnowledgeKnowledgebaseSourcesServicenowSourceIdSync

> SourceSyncResponse postKnowledgeKnowledgebaseSourcesServicenowSourceIdSync(knowledgeBaseId, sourceId, opts)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/servicenow/{sourceId}/sync

Start synchronization on ServiceNow Knowledge integration source

Requires ALL permissions:

* knowledge:integrationSource:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let sourceId = "sourceId_example"; // String | Source ID
let opts = { 
  'body': null // Object | 
};

apiInstance.postKnowledgeKnowledgebaseSourcesServicenowSourceIdSync(knowledgeBaseId, sourceId, opts)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseSourcesServicenowSourceIdSync success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseSourcesServicenowSourceIdSync');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **sourceId** | **String** | Source ID |  |
 **body** | **Object** |  | [optional]  |

### Return type

**SourceSyncResponse**


## postKnowledgeKnowledgebaseSynchronizeJobs

> KnowledgeSyncJobResponse postKnowledgeKnowledgebaseSynchronizeJobs(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/synchronize/jobs

Create synchronization job

Requires ALL permissions:

* knowledge:syncJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseSynchronizeJobs(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseSynchronizeJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseSynchronizeJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |

### Return type

**KnowledgeSyncJobResponse**


## postKnowledgeKnowledgebaseUploadsUrlsJobs

> CreateUploadSourceUrlJobResponse postKnowledgeKnowledgebaseUploadsUrlsJobs(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/uploads/urls/jobs

Create content upload from URL job

Requires ALL permissions:

* knowledge:uploadSourceUrlJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | uploadRequest

apiInstance.postKnowledgeKnowledgebaseUploadsUrlsJobs(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseUploadsUrlsJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseUploadsUrlsJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** | uploadRequest |  |

### Return type

**CreateUploadSourceUrlJobResponse**


## postKnowledgeKnowledgebases

> KnowledgeBase postKnowledgeKnowledgebases(body)


POST /api/v2/knowledge/knowledgebases

Create new knowledge base

Requires ALL permissions:

* knowledge:knowledgebase:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebases(body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebases success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebases');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |

### Return type

**KnowledgeBase**


## putKnowledgeKnowledgebaseSourcesSalesforceSourceId

> SalesforceSourceResponse putKnowledgeKnowledgebaseSourcesSalesforceSourceId(knowledgeBaseId, sourceId, body)


PUT /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/salesforce/{sourceId}

Update Salesforce Knowledge integration source

Requires ALL permissions:

* knowledge:integrationSource:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let sourceId = "sourceId_example"; // String | Source ID
let body = {}; // Object | 

apiInstance.putKnowledgeKnowledgebaseSourcesSalesforceSourceId(knowledgeBaseId, sourceId, body)
  .then((data) => {
    console.log(`putKnowledgeKnowledgebaseSourcesSalesforceSourceId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putKnowledgeKnowledgebaseSourcesSalesforceSourceId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **sourceId** | **String** | Source ID |  |
 **body** | **Object** |  |  |

### Return type

**SalesforceSourceResponse**


## putKnowledgeKnowledgebaseSourcesServicenowSourceId

> ServiceNowSourceResponse putKnowledgeKnowledgebaseSourcesServicenowSourceId(knowledgeBaseId, sourceId, body)


PUT /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/servicenow/{sourceId}

Update ServiceNow Knowledge integration source

Requires ALL permissions:

* knowledge:integrationSource:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let sourceId = "sourceId_example"; // String | Source ID
let body = {}; // Object | 

apiInstance.putKnowledgeKnowledgebaseSourcesServicenowSourceId(knowledgeBaseId, sourceId, body)
  .then((data) => {
    console.log(`putKnowledgeKnowledgebaseSourcesServicenowSourceId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putKnowledgeKnowledgebaseSourcesServicenowSourceId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **sourceId** | **String** | Source ID |  |
 **body** | **Object** |  |  |

### Return type

**ServiceNowSourceResponse**


_purecloud-platform-client-v2@229.1.0_
