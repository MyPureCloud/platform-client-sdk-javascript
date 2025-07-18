import ApiClient from '../ApiClient.js';


class KnowledgeApi {
	/**
	 * Knowledge service.
	 * @module purecloud-platform-client-v2/api/KnowledgeApi
	 * @version 227.0.0
	 */

	/**
	 * Constructs a new KnowledgeApi. 
	 * @alias module:purecloud-platform-client-v2/api/KnowledgeApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete knowledge base
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 */
	deleteKnowledgeKnowledgebase(knowledgeBaseId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling deleteKnowledgeKnowledgebase';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}', 
			'DELETE', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete category
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} categoryId Category ID
	 */
	deleteKnowledgeKnowledgebaseCategory(knowledgeBaseId, categoryId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling deleteKnowledgeKnowledgebaseCategory';
		}
		// verify the required parameter 'categoryId' is set
		if (categoryId === undefined || categoryId === null || categoryId === '') {
			throw 'Missing the required parameter "categoryId" when calling deleteKnowledgeKnowledgebaseCategory';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories/{categoryId}', 
			'DELETE', 
			{ 'knowledgeBaseId': knowledgeBaseId,'categoryId': categoryId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete document.
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID.
	 * @param {String} documentId Document ID.
	 */
	deleteKnowledgeKnowledgebaseDocument(knowledgeBaseId, documentId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling deleteKnowledgeKnowledgebaseDocument';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling deleteKnowledgeKnowledgebaseDocument';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}', 
			'DELETE', 
			{ 'knowledgeBaseId': knowledgeBaseId,'documentId': documentId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete a variation for a document.
	 * 
	 * @param {String} documentVariationId Globally unique identifier for a document variation.
	 * @param {String} documentId Globally unique identifier for a document.
	 * @param {String} knowledgeBaseId Globally unique identifier for a knowledge base.
	 */
	deleteKnowledgeKnowledgebaseDocumentVariation(documentVariationId, documentId, knowledgeBaseId) { 
		// verify the required parameter 'documentVariationId' is set
		if (documentVariationId === undefined || documentVariationId === null || documentVariationId === '') {
			throw 'Missing the required parameter "documentVariationId" when calling deleteKnowledgeKnowledgebaseDocumentVariation';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling deleteKnowledgeKnowledgebaseDocumentVariation';
		}
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling deleteKnowledgeKnowledgebaseDocumentVariation';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations/{documentVariationId}', 
			'DELETE', 
			{ 'documentVariationId': documentVariationId,'documentId': documentId,'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete export job
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} exportJobId Export job ID
	 */
	deleteKnowledgeKnowledgebaseExportJob(knowledgeBaseId, exportJobId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling deleteKnowledgeKnowledgebaseExportJob';
		}
		// verify the required parameter 'exportJobId' is set
		if (exportJobId === undefined || exportJobId === null || exportJobId === '') {
			throw 'Missing the required parameter "exportJobId" when calling deleteKnowledgeKnowledgebaseExportJob';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/export/jobs/{exportJobId}', 
			'DELETE', 
			{ 'knowledgeBaseId': knowledgeBaseId,'exportJobId': exportJobId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete import job
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} importJobId Import job ID
	 */
	deleteKnowledgeKnowledgebaseImportJob(knowledgeBaseId, importJobId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling deleteKnowledgeKnowledgebaseImportJob';
		}
		// verify the required parameter 'importJobId' is set
		if (importJobId === undefined || importJobId === null || importJobId === '') {
			throw 'Missing the required parameter "importJobId" when calling deleteKnowledgeKnowledgebaseImportJob';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs/{importJobId}', 
			'DELETE', 
			{ 'knowledgeBaseId': knowledgeBaseId,'importJobId': importJobId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete label
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} labelId Label ID
	 */
	deleteKnowledgeKnowledgebaseLabel(knowledgeBaseId, labelId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling deleteKnowledgeKnowledgebaseLabel';
		}
		// verify the required parameter 'labelId' is set
		if (labelId === undefined || labelId === null || labelId === '') {
			throw 'Missing the required parameter "labelId" when calling deleteKnowledgeKnowledgebaseLabel';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels/{labelId}', 
			'DELETE', 
			{ 'knowledgeBaseId': knowledgeBaseId,'labelId': labelId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete category
	 * 
	 * @param {String} categoryId Category ID
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @deprecated
	 */
	deleteKnowledgeKnowledgebaseLanguageCategory(categoryId, knowledgeBaseId, languageCode) { 
		// verify the required parameter 'categoryId' is set
		if (categoryId === undefined || categoryId === null || categoryId === '') {
			throw 'Missing the required parameter "categoryId" when calling deleteKnowledgeKnowledgebaseLanguageCategory';
		}
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling deleteKnowledgeKnowledgebaseLanguageCategory';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling deleteKnowledgeKnowledgebaseLanguageCategory';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId}', 
			'DELETE', 
			{ 'categoryId': categoryId,'knowledgeBaseId': knowledgeBaseId,'languageCode': languageCode },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete document
	 * 
	 * @param {String} documentId Document ID
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @deprecated
	 */
	deleteKnowledgeKnowledgebaseLanguageDocument(documentId, knowledgeBaseId, languageCode) { 
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling deleteKnowledgeKnowledgebaseLanguageDocument';
		}
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling deleteKnowledgeKnowledgebaseLanguageDocument';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling deleteKnowledgeKnowledgebaseLanguageDocument';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}', 
			'DELETE', 
			{ 'documentId': documentId,'knowledgeBaseId': knowledgeBaseId,'languageCode': languageCode },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete import operation
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @param {String} importId Import ID
	 * @deprecated
	 */
	deleteKnowledgeKnowledgebaseLanguageDocumentsImport(knowledgeBaseId, languageCode, importId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling deleteKnowledgeKnowledgebaseLanguageDocumentsImport';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling deleteKnowledgeKnowledgebaseLanguageDocumentsImport';
		}
		// verify the required parameter 'importId' is set
		if (importId === undefined || importId === null || importId === '') {
			throw 'Missing the required parameter "importId" when calling deleteKnowledgeKnowledgebaseLanguageDocumentsImport';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports/{importId}', 
			'DELETE', 
			{ 'knowledgeBaseId': knowledgeBaseId,'languageCode': languageCode,'importId': importId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete Salesforce Knowledge integration source
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} sourceId Source ID
	 */
	deleteKnowledgeKnowledgebaseSourcesSalesforceSourceId(knowledgeBaseId, sourceId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling deleteKnowledgeKnowledgebaseSourcesSalesforceSourceId';
		}
		// verify the required parameter 'sourceId' is set
		if (sourceId === undefined || sourceId === null || sourceId === '') {
			throw 'Missing the required parameter "sourceId" when calling deleteKnowledgeKnowledgebaseSourcesSalesforceSourceId';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/salesforce/{sourceId}', 
			'DELETE', 
			{ 'knowledgeBaseId': knowledgeBaseId,'sourceId': sourceId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete ServiceNow Knowledge integration source
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} sourceId Source ID
	 */
	deleteKnowledgeKnowledgebaseSourcesServicenowSourceId(knowledgeBaseId, sourceId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling deleteKnowledgeKnowledgebaseSourcesServicenowSourceId';
		}
		// verify the required parameter 'sourceId' is set
		if (sourceId === undefined || sourceId === null || sourceId === '') {
			throw 'Missing the required parameter "sourceId" when calling deleteKnowledgeKnowledgebaseSourcesServicenowSourceId';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/servicenow/{sourceId}', 
			'DELETE', 
			{ 'knowledgeBaseId': knowledgeBaseId,'sourceId': sourceId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete synchronization job
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} syncJobId Synchronization job ID
	 */
	deleteKnowledgeKnowledgebaseSynchronizeJob(knowledgeBaseId, syncJobId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling deleteKnowledgeKnowledgebaseSynchronizeJob';
		}
		// verify the required parameter 'syncJobId' is set
		if (syncJobId === undefined || syncJobId === null || syncJobId === '') {
			throw 'Missing the required parameter "syncJobId" when calling deleteKnowledgeKnowledgebaseSynchronizeJob';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/synchronize/jobs/{syncJobId}', 
			'DELETE', 
			{ 'knowledgeBaseId': knowledgeBaseId,'syncJobId': syncJobId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get categories
	 * 
	 * @param {String} sessionId Knowledge guest session ID.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.parentId If specified, retrieves the children categories by parent category ID.
	 * @param {Boolean} opts.isRoot If specified, retrieves only the root categories.
	 * @param {String} opts.name Filter to return the categories that starts with the given category name.
	 * @param {Object} opts.sortBy Name: sort by category names alphabetically; Hierarchy: sort by the full path of hierarchical category names alphabetically (default to Name)
	 * @param {String} opts.expand The specified entity attribute will be filled. Supported value:Ancestors: every ancestors will be filled via the parent attribute recursively,but only the id, name, parentId will be present for the ancestors.
	 * @param {Boolean} opts.includeDocumentCount If specified, retrieves the number of documents related to category.
	 */
	getKnowledgeGuestSessionCategories(sessionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null || sessionId === '') {
			throw 'Missing the required parameter "sessionId" when calling getKnowledgeGuestSessionCategories';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/guest/sessions/{sessionId}/categories', 
			'GET', 
			{ 'sessionId': sessionId },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'],'parentId': opts['parentId'],'isRoot': opts['isRoot'],'name': opts['name'],'sortBy': opts['sortBy'],'expand': opts['expand'],'includeDocumentCount': opts['includeDocumentCount'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a knowledge document by ID.
	 * 
	 * @param {String} sessionId Knowledge guest session ID.
	 * @param {String} documentId Document ID
	 */
	getKnowledgeGuestSessionDocument(sessionId, documentId) { 
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null || sessionId === '') {
			throw 'Missing the required parameter "sessionId" when calling getKnowledgeGuestSessionDocument';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling getKnowledgeGuestSessionDocument';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/guest/sessions/{sessionId}/documents/{documentId}', 
			'GET', 
			{ 'sessionId': sessionId,'documentId': documentId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get documents.
	 * 
	 * @param {String} sessionId Knowledge guest session ID.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.categoryId If specified, retrieves documents associated with category ids, comma separated values expected.
	 * @param {Number} opts.pageSize Number of entities to return. Maximum of 200.
	 */
	getKnowledgeGuestSessionDocuments(sessionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null || sessionId === '') {
			throw 'Missing the required parameter "sessionId" when calling getKnowledgeGuestSessionDocuments';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/guest/sessions/{sessionId}/documents', 
			'GET', 
			{ 'sessionId': sessionId },
			{ 'categoryId': this.apiClient.buildCollectionParam(opts['categoryId'], 'multi'),'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get sync options available for a knowledge-connect integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.knowledgeBaseIds Narrowing down filtering option results by knowledge base.
	 */
	getKnowledgeIntegrationOptions(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling getKnowledgeIntegrationOptions';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/integrations/{integrationId}/options', 
			'GET', 
			{ 'integrationId': integrationId },
			{ 'knowledgeBaseIds': this.apiClient.buildCollectionParam(opts['knowledgeBaseIds'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get knowledge base
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 */
	getKnowledgeKnowledgebase(knowledgeBaseId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebase';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get categories
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.parentId If specified, retrieves the children categories by parent category ID.
	 * @param {Boolean} opts.isRoot If specified, retrieves only the root categories.
	 * @param {String} opts.name Filter to return the categories that starts with the given category name.
	 * @param {Object} opts.sortBy Name: sort by category names alphabetically; Hierarchy: sort by the full path of hierarchical category names alphabetically (default to Name)
	 * @param {String} opts.expand The specified entity attribute will be filled. Supported value:Ancestors: every ancestors will be filled via the parent attribute recursively,but only the id, name, parentId will be present for the ancestors.
	 * @param {Boolean} opts.includeDocumentCount If specified, retrieves the number of documents related to category.
	 */
	getKnowledgeKnowledgebaseCategories(knowledgeBaseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseCategories';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'],'parentId': opts['parentId'],'isRoot': opts['isRoot'],'name': opts['name'],'sortBy': opts['sortBy'],'expand': opts['expand'],'includeDocumentCount': opts['includeDocumentCount'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get category
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} categoryId Category ID
	 */
	getKnowledgeKnowledgebaseCategory(knowledgeBaseId, categoryId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseCategory';
		}
		// verify the required parameter 'categoryId' is set
		if (categoryId === undefined || categoryId === null || categoryId === '') {
			throw 'Missing the required parameter "categoryId" when calling getKnowledgeKnowledgebaseCategory';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories/{categoryId}', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'categoryId': categoryId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get document.
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID.
	 * @param {String} documentId Document ID.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand The specified entity attributes will be filled. Comma separated values expected. Max No. of variations that can be returned on expand is 20.
	 * @param {Object} opts.state when state is Draft, draft version of the document is returned,otherwise by default published version is returned in the response.
	 */
	getKnowledgeKnowledgebaseDocument(knowledgeBaseId, documentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseDocument';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling getKnowledgeKnowledgebaseDocument';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'documentId': documentId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'state': opts['state'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a list of feedback records given on a document
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID.
	 * @param {String} documentId Document ID.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Boolean} opts.onlyCommented If true, only feedback records that have comment are returned. If false, feedback records with and without comment are returned. Default: false.
	 * @param {String} opts.documentVersionId Document version ID to filter by. Supported only if onlyCommented=true is set.
	 * @param {String} opts.documentVariationId Document variation ID to filter by. Supported only if onlyCommented=true is set.
	 * @param {Object} opts.appType Application type to filter by. Supported only if onlyCommented=true is set.
	 * @param {Object} opts.queryType Query type to filter by. Supported only if onlyCommented=true is set.
	 * @param {String} opts.userId The ID of the user, who created the feedback, to filter by. Supported only if onlyCommented=true is set.
	 * @param {String} opts.queueId Queue ID to filter by. Supported only if onlyCommented=true is set.
	 * @param {Object} opts.state State to filter by. Supported only if onlyCommented=true is set. Default: Final
	 */
	getKnowledgeKnowledgebaseDocumentFeedback(knowledgeBaseId, documentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseDocumentFeedback';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling getKnowledgeKnowledgebaseDocumentFeedback';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/feedback', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'documentId': documentId },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'],'onlyCommented': opts['onlyCommented'],'documentVersionId': opts['documentVersionId'],'documentVariationId': opts['documentVariationId'],'appType': opts['appType'],'queryType': opts['queryType'],'userId': opts['userId'],'queueId': opts['queueId'],'state': opts['state'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a single feedback record given on a document
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID.
	 * @param {String} documentId Document ID.
	 * @param {String} feedbackId Feedback ID.
	 */
	getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId(knowledgeBaseId, documentId, feedbackId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId';
		}
		// verify the required parameter 'feedbackId' is set
		if (feedbackId === undefined || feedbackId === null || feedbackId === '') {
			throw 'Missing the required parameter "feedbackId" when calling getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/feedback/{feedbackId}', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'documentId': documentId,'feedbackId': feedbackId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a variation for a document.
	 * 
	 * @param {String} documentVariationId Globally unique identifier for a document variation.
	 * @param {String} documentId Globally unique identifier for a document.
	 * @param {String} knowledgeBaseId Globally unique identifier for a knowledge base.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.documentState The state of the document.
	 * @param {Array.<String>} opts.expand The specified entity attributes will be filled. Comma separated values expected.
	 */
	getKnowledgeKnowledgebaseDocumentVariation(documentVariationId, documentId, knowledgeBaseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'documentVariationId' is set
		if (documentVariationId === undefined || documentVariationId === null || documentVariationId === '') {
			throw 'Missing the required parameter "documentVariationId" when calling getKnowledgeKnowledgebaseDocumentVariation';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling getKnowledgeKnowledgebaseDocumentVariation';
		}
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseDocumentVariation';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations/{documentVariationId}', 
			'GET', 
			{ 'documentVariationId': documentVariationId,'documentId': documentId,'knowledgeBaseId': knowledgeBaseId },
			{ 'documentState': opts['documentState'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get variations for a document.
	 * 
	 * @param {String} knowledgeBaseId Globally unique identifier for the knowledge base.
	 * @param {String} documentId Globally unique identifier for the document.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Object} opts.documentState The state of the document.
	 * @param {Array.<String>} opts.expand The specified entity attributes will be filled. Comma separated values expected.
	 */
	getKnowledgeKnowledgebaseDocumentVariations(knowledgeBaseId, documentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseDocumentVariations';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling getKnowledgeKnowledgebaseDocumentVariations';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'documentId': documentId },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'],'documentState': opts['documentState'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get document version.
	 * 
	 * @param {String} knowledgeBaseId Globally unique identifier for the knowledge base.
	 * @param {String} documentId Globally unique identifier for the document.
	 * @param {String} versionId Globally unique identifier for the document version.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand The specified entity attributes will be filled. Comma separated values expected.
	 */
	getKnowledgeKnowledgebaseDocumentVersion(knowledgeBaseId, documentId, versionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseDocumentVersion';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling getKnowledgeKnowledgebaseDocumentVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getKnowledgeKnowledgebaseDocumentVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions/{versionId}', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'documentId': documentId,'versionId': versionId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get variation for the given document version.
	 * 
	 * @param {String} knowledgeBaseId Globally unique identifier for the knowledge base.
	 * @param {String} documentId Globally unique identifier for the document.
	 * @param {String} versionId Globally unique identifier for the document version.
	 * @param {String} variationId Globally unique identifier for the document version variation.
	 */
	getKnowledgeKnowledgebaseDocumentVersionVariation(knowledgeBaseId, documentId, versionId, variationId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseDocumentVersionVariation';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling getKnowledgeKnowledgebaseDocumentVersionVariation';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getKnowledgeKnowledgebaseDocumentVersionVariation';
		}
		// verify the required parameter 'variationId' is set
		if (variationId === undefined || variationId === null || variationId === '') {
			throw 'Missing the required parameter "variationId" when calling getKnowledgeKnowledgebaseDocumentVersionVariation';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions/{versionId}/variations/{variationId}', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'documentId': documentId,'versionId': versionId,'variationId': variationId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get variations for the given document version.
	 * 
	 * @param {String} knowledgeBaseId Globally unique identifier for the knowledge base.
	 * @param {String} documentId Globally unique identifier for the document.
	 * @param {String} versionId Globally unique identifier for the document version.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 */
	getKnowledgeKnowledgebaseDocumentVersionVariations(knowledgeBaseId, documentId, versionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseDocumentVersionVariations';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling getKnowledgeKnowledgebaseDocumentVersionVariations';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getKnowledgeKnowledgebaseDocumentVersionVariations';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions/{versionId}/variations', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'documentId': documentId,'versionId': versionId },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get document versions.
	 * 
	 * @param {String} knowledgeBaseId Globally unique identifier for the knowledge base.
	 * @param {String} documentId Globally unique identifier for the document.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Array.<String>} opts.expand The specified entity attributes will be filled. Comma separated values expected.
	 */
	getKnowledgeKnowledgebaseDocumentVersions(knowledgeBaseId, documentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseDocumentVersions';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling getKnowledgeKnowledgebaseDocumentVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'documentId': documentId },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get documents.
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.interval Retrieves the documents modified in specified date and time range. If the after and before cursor parameters are within this interval, it would return valid data, otherwise it throws an error.The dates in the interval are represented in ISO-8601 format: YYYY-MM-DDThh:mm:ssZ/YYYY-MM-DDThh:mm:ssZ
	 * @param {Array.<String>} opts.documentId Retrieves the specified documents, comma separated values expected.
	 * @param {Array.<String>} opts.categoryId If specified, retrieves documents associated with category ids, comma separated values expected.
	 * @param {Boolean} opts.includeSubcategories Works along with 'categoryId' query parameter. If specified, retrieves documents associated with category ids and its children categories.
	 * @param {Boolean} opts.includeDrafts If includeDrafts is true, Documents in the draft state are also returned in the response.
	 * @param {Array.<String>} opts.labelIds If specified, retrieves documents associated with label ids, comma separated values expected.
	 * @param {Array.<String>} opts.expand The specified entity attributes will be filled. Comma separated values expected.
	 * @param {Array.<String>} opts.externalIds If specified, retrieves documents associated with external ids, comma separated values expected.
	 */
	getKnowledgeKnowledgebaseDocuments(knowledgeBaseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseDocuments';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'],'interval': opts['interval'],'documentId': this.apiClient.buildCollectionParam(opts['documentId'], 'multi'),'categoryId': this.apiClient.buildCollectionParam(opts['categoryId'], 'multi'),'includeSubcategories': opts['includeSubcategories'],'includeDrafts': opts['includeDrafts'],'labelIds': this.apiClient.buildCollectionParam(opts['labelIds'], 'multi'),'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'externalIds': this.apiClient.buildCollectionParam(opts['externalIds'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get export job report
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} exportJobId Export job ID
	 */
	getKnowledgeKnowledgebaseExportJob(knowledgeBaseId, exportJobId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseExportJob';
		}
		// verify the required parameter 'exportJobId' is set
		if (exportJobId === undefined || exportJobId === null || exportJobId === '') {
			throw 'Missing the required parameter "exportJobId" when calling getKnowledgeKnowledgebaseExportJob';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/export/jobs/{exportJobId}', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'exportJobId': exportJobId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get import job report
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} importJobId Import job ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand If expand contains 'urls' downloadURL and failedEntitiesURL will be filled.
	 */
	getKnowledgeKnowledgebaseImportJob(knowledgeBaseId, importJobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseImportJob';
		}
		// verify the required parameter 'importJobId' is set
		if (importJobId === undefined || importJobId === null || importJobId === '') {
			throw 'Missing the required parameter "importJobId" when calling getKnowledgeKnowledgebaseImportJob';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs/{importJobId}', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'importJobId': importJobId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get label
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} labelId Label ID
	 */
	getKnowledgeKnowledgebaseLabel(knowledgeBaseId, labelId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseLabel';
		}
		// verify the required parameter 'labelId' is set
		if (labelId === undefined || labelId === null || labelId === '') {
			throw 'Missing the required parameter "labelId" when calling getKnowledgeKnowledgebaseLabel';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels/{labelId}', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'labelId': labelId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get labels
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.name Filter to return the labels that contains the given phrase in the name.
	 * @param {Boolean} opts.includeDocumentCount If specified, retrieves the number of documents related to label.
	 */
	getKnowledgeKnowledgebaseLabels(knowledgeBaseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseLabels';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'],'name': opts['name'],'includeDocumentCount': opts['includeDocumentCount'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get categories
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.limit Number of entities to return. Maximum of 200. Deprecated in favour of pageSize
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.name Filter to return the categories that starts with the given category name.
	 * @deprecated
	 */
	getKnowledgeKnowledgebaseLanguageCategories(knowledgeBaseId, languageCode, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseLanguageCategories';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling getKnowledgeKnowledgebaseLanguageCategories';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'languageCode': languageCode },
			{ 'before': opts['before'],'after': opts['after'],'limit': opts['limit'],'pageSize': opts['pageSize'],'name': opts['name'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get category
	 * 
	 * @param {String} categoryId Category ID
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @deprecated
	 */
	getKnowledgeKnowledgebaseLanguageCategory(categoryId, knowledgeBaseId, languageCode) { 
		// verify the required parameter 'categoryId' is set
		if (categoryId === undefined || categoryId === null || categoryId === '') {
			throw 'Missing the required parameter "categoryId" when calling getKnowledgeKnowledgebaseLanguageCategory';
		}
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseLanguageCategory';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling getKnowledgeKnowledgebaseLanguageCategory';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId}', 
			'GET', 
			{ 'categoryId': categoryId,'knowledgeBaseId': knowledgeBaseId,'languageCode': languageCode },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get document
	 * 
	 * @param {String} documentId Document ID
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @deprecated
	 */
	getKnowledgeKnowledgebaseLanguageDocument(documentId, knowledgeBaseId, languageCode) { 
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling getKnowledgeKnowledgebaseLanguageDocument';
		}
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseLanguageDocument';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling getKnowledgeKnowledgebaseLanguageDocument';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}', 
			'GET', 
			{ 'documentId': documentId,'knowledgeBaseId': knowledgeBaseId,'languageCode': languageCode },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get document content upload status
	 * 
	 * @param {String} documentId Document ID
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @param {String} uploadId UploadId
	 * @deprecated
	 */
	getKnowledgeKnowledgebaseLanguageDocumentUpload(documentId, knowledgeBaseId, languageCode, uploadId) { 
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling getKnowledgeKnowledgebaseLanguageDocumentUpload';
		}
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseLanguageDocumentUpload';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling getKnowledgeKnowledgebaseLanguageDocumentUpload';
		}
		// verify the required parameter 'uploadId' is set
		if (uploadId === undefined || uploadId === null || uploadId === '') {
			throw 'Missing the required parameter "uploadId" when calling getKnowledgeKnowledgebaseLanguageDocumentUpload';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}/uploads/{uploadId}', 
			'GET', 
			{ 'documentId': documentId,'knowledgeBaseId': knowledgeBaseId,'languageCode': languageCode,'uploadId': uploadId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get documents
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.limit Number of entities to return. Maximum of 200. Deprecated in favour of pageSize
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.categories Filter by categories ids, comma separated values expected.
	 * @param {String} opts.title Filter by document title.
	 * @param {Object} opts.sortBy Sort by.
	 * @param {Object} opts.sortOrder Sort Order.
	 * @param {Array.<String>} opts.documentIds Comma-separated list of document identifiers to fetch by.
	 * @deprecated
	 */
	getKnowledgeKnowledgebaseLanguageDocuments(knowledgeBaseId, languageCode, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseLanguageDocuments';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling getKnowledgeKnowledgebaseLanguageDocuments';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'languageCode': languageCode },
			{ 'before': opts['before'],'after': opts['after'],'limit': opts['limit'],'pageSize': opts['pageSize'],'categories': opts['categories'],'title': opts['title'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'documentIds': this.apiClient.buildCollectionParam(opts['documentIds'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get import operation report
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @param {String} importId Import ID
	 * @deprecated
	 */
	getKnowledgeKnowledgebaseLanguageDocumentsImport(knowledgeBaseId, languageCode, importId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseLanguageDocumentsImport';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling getKnowledgeKnowledgebaseLanguageDocumentsImport';
		}
		// verify the required parameter 'importId' is set
		if (importId === undefined || importId === null || importId === '') {
			throw 'Missing the required parameter "importId" when calling getKnowledgeKnowledgebaseLanguageDocumentsImport';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports/{importId}', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'languageCode': languageCode,'importId': importId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get training detail
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @param {String} trainingId Training ID
	 * @deprecated
	 */
	getKnowledgeKnowledgebaseLanguageTraining(knowledgeBaseId, languageCode, trainingId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseLanguageTraining';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling getKnowledgeKnowledgebaseLanguageTraining';
		}
		// verify the required parameter 'trainingId' is set
		if (trainingId === undefined || trainingId === null || trainingId === '') {
			throw 'Missing the required parameter "trainingId" when calling getKnowledgeKnowledgebaseLanguageTraining';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings/{trainingId}', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'languageCode': languageCode,'trainingId': trainingId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get all trainings information for a knowledgebase
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.limit Number of entities to return. Maximum of 200. Deprecated in favour of pageSize
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Object} opts.knowledgeDocumentsState Return the training with the specified state of the trained documents.
	 * @deprecated
	 */
	getKnowledgeKnowledgebaseLanguageTrainings(knowledgeBaseId, languageCode, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseLanguageTrainings';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling getKnowledgeKnowledgebaseLanguageTrainings';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'languageCode': languageCode },
			{ 'before': opts['before'],'after': opts['after'],'limit': opts['limit'],'pageSize': opts['pageSize'],'knowledgeDocumentsState': opts['knowledgeDocumentsState'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get operations
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Array.<String>} opts.userId If specified, retrieves operations associated with user ids, comma separated values expected.
	 * @param {Array.<String>} opts.type If specified, retrieves operations with specified operation type, comma separated values expected.
	 * @param {Array.<String>} opts.status If specified, retrieves operations with specified operation status, comma separated values expected.
	 * @param {String} opts.interval Retrieves the operations modified in specified date and time range. If the after and before cursor parameters are within this interval, it would return valid data, otherwise it throws an error.The dates in the interval are represented in ISO-8601 format: YYYY-MM-DDThh:mm:ssZ/YYYY-MM-DDThh:mm:ssZ
	 * @param {Array.<String>} opts.sourceId If specified, retrieves operations associated with source ids, comma separated values expected.
	 */
	getKnowledgeKnowledgebaseOperations(knowledgeBaseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseOperations';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/operations', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'],'userId': this.apiClient.buildCollectionParam(opts['userId'], 'multi'),'type': this.apiClient.buildCollectionParam(opts['type'], 'multi'),'status': this.apiClient.buildCollectionParam(opts['status'], 'multi'),'interval': opts['interval'],'sourceId': this.apiClient.buildCollectionParam(opts['sourceId'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get ids of operation creator users and oauth clients
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 */
	getKnowledgeKnowledgebaseOperationsUsersQuery(knowledgeBaseId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseOperationsUsersQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/operations/users/query', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get parse job report
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} parseJobId Parse job ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand If expand contains 'urls' downloadURL and failedEntitiesURL will be filled.
	 */
	getKnowledgeKnowledgebaseParseJob(knowledgeBaseId, parseJobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseParseJob';
		}
		// verify the required parameter 'parseJobId' is set
		if (parseJobId === undefined || parseJobId === null || parseJobId === '') {
			throw 'Missing the required parameter "parseJobId" when calling getKnowledgeKnowledgebaseParseJob';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/parse/jobs/{parseJobId}', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'parseJobId': parseJobId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get Knowledge integration sources
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.type If specified, retrieves integration sources with specified integration type.
	 * @param {Array.<String>} opts.expand The specified entity attributes will be filled. Comma separated values expected.
	 * @param {Array.<String>} opts.ids If specified, retrieves integration sources with specified IDs.
	 */
	getKnowledgeKnowledgebaseSources(knowledgeBaseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseSources';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{ 'type': opts['type'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'ids': this.apiClient.buildCollectionParam(opts['ids'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get Salesforce Knowledge integration source
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} sourceId Source ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand The specified entity attributes will be filled. Comma separated values expected.
	 */
	getKnowledgeKnowledgebaseSourcesSalesforceSourceId(knowledgeBaseId, sourceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseSourcesSalesforceSourceId';
		}
		// verify the required parameter 'sourceId' is set
		if (sourceId === undefined || sourceId === null || sourceId === '') {
			throw 'Missing the required parameter "sourceId" when calling getKnowledgeKnowledgebaseSourcesSalesforceSourceId';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/salesforce/{sourceId}', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'sourceId': sourceId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get ServiceNow Knowledge integration source
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} sourceId Source ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand The specified entity attributes will be filled. Comma separated values expected.
	 */
	getKnowledgeKnowledgebaseSourcesServicenowSourceId(knowledgeBaseId, sourceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseSourcesServicenowSourceId';
		}
		// verify the required parameter 'sourceId' is set
		if (sourceId === undefined || sourceId === null || sourceId === '') {
			throw 'Missing the required parameter "sourceId" when calling getKnowledgeKnowledgebaseSourcesServicenowSourceId';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/servicenow/{sourceId}', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'sourceId': sourceId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get synchronization job report
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} syncJobId Synchronization job ID
	 */
	getKnowledgeKnowledgebaseSynchronizeJob(knowledgeBaseId, syncJobId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseSynchronizeJob';
		}
		// verify the required parameter 'syncJobId' is set
		if (syncJobId === undefined || syncJobId === null || syncJobId === '') {
			throw 'Missing the required parameter "syncJobId" when calling getKnowledgeKnowledgebaseSynchronizeJob';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/synchronize/jobs/{syncJobId}', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'syncJobId': syncJobId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get knowledge base unanswered group for a particular groupId
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} groupId The ID of the group to be retrieved.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.app The app value to be used for filtering phrases.
	 * @param {String} opts.dateStart The start date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} opts.dateEnd The end date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getKnowledgeKnowledgebaseUnansweredGroup(knowledgeBaseId, groupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseUnansweredGroup';
		}
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null || groupId === '') {
			throw 'Missing the required parameter "groupId" when calling getKnowledgeKnowledgebaseUnansweredGroup';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups/{groupId}', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'groupId': groupId },
			{ 'app': opts['app'],'dateStart': opts['dateStart'],'dateEnd': opts['dateEnd'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get knowledge base unanswered phrase group for a particular phraseGroupId
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} groupId The ID of the group to be retrieved.
	 * @param {String} phraseGroupId The ID of the phraseGroup to be retrieved.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.app The app value to be used for filtering phrases.
	 * @param {String} opts.dateStart The start date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} opts.dateEnd The end date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup(knowledgeBaseId, groupId, phraseGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup';
		}
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null || groupId === '') {
			throw 'Missing the required parameter "groupId" when calling getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup';
		}
		// verify the required parameter 'phraseGroupId' is set
		if (phraseGroupId === undefined || phraseGroupId === null || phraseGroupId === '') {
			throw 'Missing the required parameter "phraseGroupId" when calling getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups/{groupId}/phrasegroups/{phraseGroupId}', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'groupId': groupId,'phraseGroupId': phraseGroupId },
			{ 'app': opts['app'],'dateStart': opts['dateStart'],'dateEnd': opts['dateEnd'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get knowledge base unanswered groups
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.app The app value to be used for filtering phrases.
	 * @param {String} opts.dateStart The start date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} opts.dateEnd The end date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getKnowledgeKnowledgebaseUnansweredGroups(knowledgeBaseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseUnansweredGroups';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{ 'app': opts['app'],'dateStart': opts['dateStart'],'dateEnd': opts['dateEnd'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get content upload from URL job status
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} jobId Upload job ID
	 */
	getKnowledgeKnowledgebaseUploadsUrlsJob(knowledgeBaseId, jobId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseUploadsUrlsJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getKnowledgeKnowledgebaseUploadsUrlsJob';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/uploads/urls/jobs/{jobId}', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'jobId': jobId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get knowledge bases
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.limit Number of entities to return. Maximum of 100. Deprecated in favour of pageSize
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 100.
	 * @param {String} opts.name Filter by Name.
	 * @param {Object} opts.coreLanguage Filter by core language.
	 * @param {Boolean} opts.published Filter by published status.
	 * @param {Object} opts.sortBy Sort by.
	 * @param {Object} opts.sortOrder Sort Order.
	 */
	getKnowledgeKnowledgebases(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases', 
			'GET', 
			{  },
			{ 'before': opts['before'],'after': opts['after'],'limit': opts['limit'],'pageSize': opts['pageSize'],'name': opts['name'],'coreLanguage': opts['coreLanguage'],'published': opts['published'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update search result.
	 * 
	 * @param {String} sessionId Knowledge guest session ID.
	 * @param {String} searchId Search Result ID
	 * @param {Object} body 
	 */
	patchKnowledgeGuestSessionDocumentsSearchSearchId(sessionId, searchId, body) { 
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null || sessionId === '') {
			throw 'Missing the required parameter "sessionId" when calling patchKnowledgeGuestSessionDocumentsSearchSearchId';
		}
		// verify the required parameter 'searchId' is set
		if (searchId === undefined || searchId === null || searchId === '') {
			throw 'Missing the required parameter "searchId" when calling patchKnowledgeGuestSessionDocumentsSearchSearchId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchKnowledgeGuestSessionDocumentsSearchSearchId';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/guest/sessions/{sessionId}/documents/search/{searchId}', 
			'PATCH', 
			{ 'sessionId': sessionId,'searchId': searchId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update knowledge base
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} body 
	 */
	patchKnowledgeKnowledgebase(knowledgeBaseId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling patchKnowledgeKnowledgebase';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchKnowledgeKnowledgebase';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}', 
			'PATCH', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update category
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} categoryId Category ID
	 * @param {Object} body 
	 */
	patchKnowledgeKnowledgebaseCategory(knowledgeBaseId, categoryId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling patchKnowledgeKnowledgebaseCategory';
		}
		// verify the required parameter 'categoryId' is set
		if (categoryId === undefined || categoryId === null || categoryId === '') {
			throw 'Missing the required parameter "categoryId" when calling patchKnowledgeKnowledgebaseCategory';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchKnowledgeKnowledgebaseCategory';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories/{categoryId}', 
			'PATCH', 
			{ 'knowledgeBaseId': knowledgeBaseId,'categoryId': categoryId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update document.
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID.
	 * @param {String} documentId Document ID.
	 * @param {Object} body 
	 */
	patchKnowledgeKnowledgebaseDocument(knowledgeBaseId, documentId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling patchKnowledgeKnowledgebaseDocument';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling patchKnowledgeKnowledgebaseDocument';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchKnowledgeKnowledgebaseDocument';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}', 
			'PATCH', 
			{ 'knowledgeBaseId': knowledgeBaseId,'documentId': documentId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update feedback on a document
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID.
	 * @param {String} documentId Document ID.
	 * @param {String} feedbackId Feedback ID.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId(knowledgeBaseId, documentId, feedbackId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling patchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling patchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId';
		}
		// verify the required parameter 'feedbackId' is set
		if (feedbackId === undefined || feedbackId === null || feedbackId === '') {
			throw 'Missing the required parameter "feedbackId" when calling patchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/feedback/{feedbackId}', 
			'PATCH', 
			{ 'knowledgeBaseId': knowledgeBaseId,'documentId': documentId,'feedbackId': feedbackId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a variation for a document.
	 * 
	 * @param {String} documentVariationId Globally unique identifier for a document variation.
	 * @param {String} documentId Globally unique identifier for a document.
	 * @param {String} knowledgeBaseId Globally unique identifier for a knowledge base.
	 * @param {Object} body 
	 */
	patchKnowledgeKnowledgebaseDocumentVariation(documentVariationId, documentId, knowledgeBaseId, body) { 
		// verify the required parameter 'documentVariationId' is set
		if (documentVariationId === undefined || documentVariationId === null || documentVariationId === '') {
			throw 'Missing the required parameter "documentVariationId" when calling patchKnowledgeKnowledgebaseDocumentVariation';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling patchKnowledgeKnowledgebaseDocumentVariation';
		}
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling patchKnowledgeKnowledgebaseDocumentVariation';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchKnowledgeKnowledgebaseDocumentVariation';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations/{documentVariationId}', 
			'PATCH', 
			{ 'documentVariationId': documentVariationId,'documentId': documentId,'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update search result.
	 * 
	 * @param {String} knowledgeBaseId The ID of knowledge base containing the documents to query.
	 * @param {String} searchId Search Result ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchKnowledgeKnowledgebaseDocumentsSearchSearchId(knowledgeBaseId, searchId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling patchKnowledgeKnowledgebaseDocumentsSearchSearchId';
		}
		// verify the required parameter 'searchId' is set
		if (searchId === undefined || searchId === null || searchId === '') {
			throw 'Missing the required parameter "searchId" when calling patchKnowledgeKnowledgebaseDocumentsSearchSearchId';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/search/{searchId}', 
			'PATCH', 
			{ 'knowledgeBaseId': knowledgeBaseId,'searchId': searchId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Start import job
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} importJobId Import job ID
	 * @param {Object} body 
	 */
	patchKnowledgeKnowledgebaseImportJob(knowledgeBaseId, importJobId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling patchKnowledgeKnowledgebaseImportJob';
		}
		// verify the required parameter 'importJobId' is set
		if (importJobId === undefined || importJobId === null || importJobId === '') {
			throw 'Missing the required parameter "importJobId" when calling patchKnowledgeKnowledgebaseImportJob';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchKnowledgeKnowledgebaseImportJob';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs/{importJobId}', 
			'PATCH', 
			{ 'knowledgeBaseId': knowledgeBaseId,'importJobId': importJobId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update label
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} labelId Label ID
	 * @param {Object} body 
	 */
	patchKnowledgeKnowledgebaseLabel(knowledgeBaseId, labelId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling patchKnowledgeKnowledgebaseLabel';
		}
		// verify the required parameter 'labelId' is set
		if (labelId === undefined || labelId === null || labelId === '') {
			throw 'Missing the required parameter "labelId" when calling patchKnowledgeKnowledgebaseLabel';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchKnowledgeKnowledgebaseLabel';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels/{labelId}', 
			'PATCH', 
			{ 'knowledgeBaseId': knowledgeBaseId,'labelId': labelId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update category
	 * 
	 * @param {String} categoryId Category ID
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @param {Object} body 
	 * @deprecated
	 */
	patchKnowledgeKnowledgebaseLanguageCategory(categoryId, knowledgeBaseId, languageCode, body) { 
		// verify the required parameter 'categoryId' is set
		if (categoryId === undefined || categoryId === null || categoryId === '') {
			throw 'Missing the required parameter "categoryId" when calling patchKnowledgeKnowledgebaseLanguageCategory';
		}
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling patchKnowledgeKnowledgebaseLanguageCategory';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling patchKnowledgeKnowledgebaseLanguageCategory';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchKnowledgeKnowledgebaseLanguageCategory';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId}', 
			'PATCH', 
			{ 'categoryId': categoryId,'knowledgeBaseId': knowledgeBaseId,'languageCode': languageCode },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update document
	 * 
	 * @param {String} documentId Document ID
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @param {Object} body 
	 * @deprecated
	 */
	patchKnowledgeKnowledgebaseLanguageDocument(documentId, knowledgeBaseId, languageCode, body) { 
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling patchKnowledgeKnowledgebaseLanguageDocument';
		}
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling patchKnowledgeKnowledgebaseLanguageDocument';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling patchKnowledgeKnowledgebaseLanguageDocument';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchKnowledgeKnowledgebaseLanguageDocument';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}', 
			'PATCH', 
			{ 'documentId': documentId,'knowledgeBaseId': knowledgeBaseId,'languageCode': languageCode },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update documents collection
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @param {Array.<Object>} body 
	 * @deprecated
	 */
	patchKnowledgeKnowledgebaseLanguageDocuments(knowledgeBaseId, languageCode, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling patchKnowledgeKnowledgebaseLanguageDocuments';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling patchKnowledgeKnowledgebaseLanguageDocuments';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchKnowledgeKnowledgebaseLanguageDocuments';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents', 
			'PATCH', 
			{ 'knowledgeBaseId': knowledgeBaseId,'languageCode': languageCode },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Start import operation
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @param {String} importId Import ID
	 * @param {Object} body 
	 * @deprecated
	 */
	patchKnowledgeKnowledgebaseLanguageDocumentsImport(knowledgeBaseId, languageCode, importId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling patchKnowledgeKnowledgebaseLanguageDocumentsImport';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling patchKnowledgeKnowledgebaseLanguageDocumentsImport';
		}
		// verify the required parameter 'importId' is set
		if (importId === undefined || importId === null || importId === '') {
			throw 'Missing the required parameter "importId" when calling patchKnowledgeKnowledgebaseLanguageDocumentsImport';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchKnowledgeKnowledgebaseLanguageDocumentsImport';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports/{importId}', 
			'PATCH', 
			{ 'knowledgeBaseId': knowledgeBaseId,'languageCode': languageCode,'importId': importId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Send update to the parse operation
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} parseJobId Parse job ID
	 * @param {Object} body 
	 */
	patchKnowledgeKnowledgebaseParseJob(knowledgeBaseId, parseJobId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling patchKnowledgeKnowledgebaseParseJob';
		}
		// verify the required parameter 'parseJobId' is set
		if (parseJobId === undefined || parseJobId === null || parseJobId === '') {
			throw 'Missing the required parameter "parseJobId" when calling patchKnowledgeKnowledgebaseParseJob';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchKnowledgeKnowledgebaseParseJob';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/parse/jobs/{parseJobId}', 
			'PATCH', 
			{ 'knowledgeBaseId': knowledgeBaseId,'parseJobId': parseJobId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update synchronization job
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} syncJobId Synchronization job ID
	 * @param {Object} body 
	 */
	patchKnowledgeKnowledgebaseSynchronizeJob(knowledgeBaseId, syncJobId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling patchKnowledgeKnowledgebaseSynchronizeJob';
		}
		// verify the required parameter 'syncJobId' is set
		if (syncJobId === undefined || syncJobId === null || syncJobId === '') {
			throw 'Missing the required parameter "syncJobId" when calling patchKnowledgeKnowledgebaseSynchronizeJob';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchKnowledgeKnowledgebaseSynchronizeJob';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/synchronize/jobs/{syncJobId}', 
			'PATCH', 
			{ 'knowledgeBaseId': knowledgeBaseId,'syncJobId': syncJobId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a Knowledge base unanswered phrase group
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} groupId The ID of the group to be updated.
	 * @param {String} phraseGroupId The ID of the phraseGroup to be updated.
	 * @param {Object} body Request body of the update unanswered group endpoint.
	 */
	patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup(knowledgeBaseId, groupId, phraseGroupId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup';
		}
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null || groupId === '') {
			throw 'Missing the required parameter "groupId" when calling patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup';
		}
		// verify the required parameter 'phraseGroupId' is set
		if (phraseGroupId === undefined || phraseGroupId === null || phraseGroupId === '') {
			throw 'Missing the required parameter "phraseGroupId" when calling patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups/{groupId}/phrasegroups/{phraseGroupId}', 
			'PATCH', 
			{ 'knowledgeBaseId': knowledgeBaseId,'groupId': groupId,'phraseGroupId': phraseGroupId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Creates a presigned URL for uploading a knowledge import file with a set of documents
	 * 
	 * @param {Object} body query
	 */
	postKnowledgeDocumentuploads(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeDocumentuploads';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/documentuploads', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Indicate that the document was copied by the user.
	 * 
	 * @param {String} sessionId Knowledge guest session ID.
	 * @param {String} documentId Document ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postKnowledgeGuestSessionDocumentCopies(sessionId, documentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null || sessionId === '') {
			throw 'Missing the required parameter "sessionId" when calling postKnowledgeGuestSessionDocumentCopies';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling postKnowledgeGuestSessionDocumentCopies';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/guest/sessions/{sessionId}/documents/{documentId}/copies', 
			'POST', 
			{ 'sessionId': sessionId,'documentId': documentId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Give feedback on a document
	 * 
	 * @param {String} sessionId Knowledge guest session ID.
	 * @param {String} documentId Document ID.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postKnowledgeGuestSessionDocumentFeedback(sessionId, documentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null || sessionId === '') {
			throw 'Missing the required parameter "sessionId" when calling postKnowledgeGuestSessionDocumentFeedback';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling postKnowledgeGuestSessionDocumentFeedback';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/guest/sessions/{sessionId}/documents/{documentId}/feedback', 
			'POST', 
			{ 'sessionId': sessionId,'documentId': documentId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create view event for a document.
	 * 
	 * @param {String} sessionId Knowledge guest session ID.
	 * @param {String} documentId Document ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postKnowledgeGuestSessionDocumentViews(sessionId, documentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null || sessionId === '') {
			throw 'Missing the required parameter "sessionId" when calling postKnowledgeGuestSessionDocumentViews';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling postKnowledgeGuestSessionDocumentViews';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/guest/sessions/{sessionId}/documents/{documentId}/views', 
			'POST', 
			{ 'sessionId': sessionId,'documentId': documentId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Answer documents.
	 * 
	 * @param {String} sessionId Knowledge guest session ID.
	 * @param {Object} body 
	 */
	postKnowledgeGuestSessionDocumentsAnswers(sessionId, body) { 
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null || sessionId === '') {
			throw 'Missing the required parameter "sessionId" when calling postKnowledgeGuestSessionDocumentsAnswers';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeGuestSessionDocumentsAnswers';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/guest/sessions/{sessionId}/documents/answers', 
			'POST', 
			{ 'sessionId': sessionId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Indicate that documents were presented to the user.
	 * 
	 * @param {String} sessionId Knowledge guest session ID.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postKnowledgeGuestSessionDocumentsPresentations(sessionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null || sessionId === '') {
			throw 'Missing the required parameter "sessionId" when calling postKnowledgeGuestSessionDocumentsPresentations';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/guest/sessions/{sessionId}/documents/presentations', 
			'POST', 
			{ 'sessionId': sessionId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Search the documents in a guest session.
	 * 
	 * @param {String} sessionId Knowledge guest session ID.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Fields, if any, to expand for each document in the search result matching the query.
	 * @param {Object} opts.body 
	 */
	postKnowledgeGuestSessionDocumentsSearch(sessionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null || sessionId === '') {
			throw 'Missing the required parameter "sessionId" when calling postKnowledgeGuestSessionDocumentsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/guest/sessions/{sessionId}/documents/search', 
			'POST', 
			{ 'sessionId': sessionId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Query the knowledge documents to provide suggestions for auto completion.
	 * 
	 * @param {String} sessionId Knowledge guest session ID.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postKnowledgeGuestSessionDocumentsSearchSuggestions(sessionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null || sessionId === '') {
			throw 'Missing the required parameter "sessionId" when calling postKnowledgeGuestSessionDocumentsSearchSuggestions';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/guest/sessions/{sessionId}/documents/search/suggestions', 
			'POST', 
			{ 'sessionId': sessionId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create guest session
	 * 
	 * @param {Object} body 
	 */
	postKnowledgeGuestSessions(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeGuestSessions';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/guest/sessions', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create new category
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} body 
	 */
	postKnowledgeKnowledgebaseCategories(knowledgeBaseId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseCategories';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseCategories';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Indicate that the document was copied by the user.
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID.
	 * @param {String} documentId Document ID.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postKnowledgeKnowledgebaseDocumentCopies(knowledgeBaseId, documentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseDocumentCopies';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling postKnowledgeKnowledgebaseDocumentCopies';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/copies', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId,'documentId': documentId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Give feedback on a document
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID.
	 * @param {String} documentId Document ID.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postKnowledgeKnowledgebaseDocumentFeedback(knowledgeBaseId, documentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseDocumentFeedback';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling postKnowledgeKnowledgebaseDocumentFeedback';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/feedback', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId,'documentId': documentId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a variation for a document.
	 * 
	 * @param {String} knowledgeBaseId Globally unique identifier for the knowledge base.
	 * @param {String} documentId Globally unique identifier for the document.
	 * @param {Object} body 
	 */
	postKnowledgeKnowledgebaseDocumentVariations(knowledgeBaseId, documentId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseDocumentVariations';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling postKnowledgeKnowledgebaseDocumentVariations';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseDocumentVariations';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId,'documentId': documentId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Creates or restores a document version.
	 * 
	 * @param {String} knowledgeBaseId Globally unique identifier for the knowledge base.
	 * @param {String} documentId Globally unique identifier for the document.
	 * @param {Object} body 
	 */
	postKnowledgeKnowledgebaseDocumentVersions(knowledgeBaseId, documentId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseDocumentVersions';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling postKnowledgeKnowledgebaseDocumentVersions';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseDocumentVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId,'documentId': documentId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create view for a document.
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID.
	 * @param {String} documentId Document ID.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postKnowledgeKnowledgebaseDocumentViews(knowledgeBaseId, documentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseDocumentViews';
		}
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling postKnowledgeKnowledgebaseDocumentViews';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/views', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId,'documentId': documentId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create document.
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} body 
	 */
	postKnowledgeKnowledgebaseDocuments(knowledgeBaseId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseDocuments';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseDocuments';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Answer documents.
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} body 
	 */
	postKnowledgeKnowledgebaseDocumentsAnswers(knowledgeBaseId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseDocumentsAnswers';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseDocumentsAnswers';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/answers', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk remove documents.
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} body 
	 */
	postKnowledgeKnowledgebaseDocumentsBulkRemove(knowledgeBaseId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseDocumentsBulkRemove';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseDocumentsBulkRemove';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/bulk/remove', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk update documents.
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} body 
	 */
	postKnowledgeKnowledgebaseDocumentsBulkUpdate(knowledgeBaseId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseDocumentsBulkUpdate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseDocumentsBulkUpdate';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/bulk/update', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Indicate that documents were presented to the user.
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postKnowledgeKnowledgebaseDocumentsPresentations(knowledgeBaseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseDocumentsPresentations';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/presentations', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Query for knowledge documents.
	 * 
	 * @param {String} knowledgeBaseId Knowledge Base ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Fields, if any, to expand for each document in the search result matching the query.
	 * @param {Object} opts.body 
	 */
	postKnowledgeKnowledgebaseDocumentsQuery(knowledgeBaseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseDocumentsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/query', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Search the documents in a knowledge base.
	 * 
	 * @param {String} knowledgeBaseId The ID of knowledge base containing the documents to query.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Fields, if any, to expand for each document in the search result matching the query.
	 * @param {Object} opts.body 
	 */
	postKnowledgeKnowledgebaseDocumentsSearch(knowledgeBaseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseDocumentsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/search', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Query the knowledge documents to provide suggestions for auto completion.
	 * 
	 * @param {String} knowledgeBaseId The ID of knowledge base containing the documents to query.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postKnowledgeKnowledgebaseDocumentsSearchSuggestions(knowledgeBaseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseDocumentsSearchSuggestions';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/search/suggestions', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk add document versions.
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} body 
	 */
	postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd(knowledgeBaseId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/versions/bulk/add', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create export job
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} body 
	 */
	postKnowledgeKnowledgebaseExportJobs(knowledgeBaseId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseExportJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseExportJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/export/jobs', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create import job
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} body 
	 */
	postKnowledgeKnowledgebaseImportJobs(knowledgeBaseId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseImportJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseImportJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create new label
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} body 
	 */
	postKnowledgeKnowledgebaseLabels(knowledgeBaseId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseLabels';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseLabels';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create new category
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @param {Object} body 
	 * @deprecated
	 */
	postKnowledgeKnowledgebaseLanguageCategories(knowledgeBaseId, languageCode, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseLanguageCategories';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling postKnowledgeKnowledgebaseLanguageCategories';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseLanguageCategories';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId,'languageCode': languageCode },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Upload Article Content
	 * 
	 * @param {String} documentId Document ID
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @param {Object} body 
	 * @deprecated
	 */
	postKnowledgeKnowledgebaseLanguageDocumentUploads(documentId, knowledgeBaseId, languageCode, body) { 
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling postKnowledgeKnowledgebaseLanguageDocumentUploads';
		}
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseLanguageDocumentUploads';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling postKnowledgeKnowledgebaseLanguageDocumentUploads';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseLanguageDocumentUploads';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}/uploads', 
			'POST', 
			{ 'documentId': documentId,'knowledgeBaseId': knowledgeBaseId,'languageCode': languageCode },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create document
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @param {Object} body 
	 * @deprecated
	 */
	postKnowledgeKnowledgebaseLanguageDocuments(knowledgeBaseId, languageCode, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseLanguageDocuments';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling postKnowledgeKnowledgebaseLanguageDocuments';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseLanguageDocuments';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId,'languageCode': languageCode },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create import operation
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @param {Object} body 
	 * @deprecated
	 */
	postKnowledgeKnowledgebaseLanguageDocumentsImports(knowledgeBaseId, languageCode, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseLanguageDocumentsImports';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling postKnowledgeKnowledgebaseLanguageDocumentsImports';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseLanguageDocumentsImports';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId,'languageCode': languageCode },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Promote trained documents from draft state to active.
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @param {String} trainingId Training ID
	 * @deprecated
	 */
	postKnowledgeKnowledgebaseLanguageTrainingPromote(knowledgeBaseId, languageCode, trainingId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseLanguageTrainingPromote';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling postKnowledgeKnowledgebaseLanguageTrainingPromote';
		}
		// verify the required parameter 'trainingId' is set
		if (trainingId === undefined || trainingId === null || trainingId === '') {
			throw 'Missing the required parameter "trainingId" when calling postKnowledgeKnowledgebaseLanguageTrainingPromote';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings/{trainingId}/promote', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId,'languageCode': languageCode,'trainingId': trainingId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Trigger training
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @deprecated
	 */
	postKnowledgeKnowledgebaseLanguageTrainings(knowledgeBaseId, languageCode) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseLanguageTrainings';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling postKnowledgeKnowledgebaseLanguageTrainings';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId,'languageCode': languageCode },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Import the parsed articles
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} parseJobId Parse job ID
	 * @param {Object} body 
	 */
	postKnowledgeKnowledgebaseParseJobImport(knowledgeBaseId, parseJobId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseParseJobImport';
		}
		// verify the required parameter 'parseJobId' is set
		if (parseJobId === undefined || parseJobId === null || parseJobId === '') {
			throw 'Missing the required parameter "parseJobId" when calling postKnowledgeKnowledgebaseParseJobImport';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseParseJobImport';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/parse/jobs/{parseJobId}/import', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId,'parseJobId': parseJobId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create parse job
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} body 
	 */
	postKnowledgeKnowledgebaseParseJobs(knowledgeBaseId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseParseJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseParseJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/parse/jobs', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Search Documents
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @deprecated
	 */
	postKnowledgeKnowledgebaseSearch(knowledgeBaseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/search', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create Salesforce Knowledge integration source
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} body 
	 */
	postKnowledgeKnowledgebaseSourcesSalesforce(knowledgeBaseId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseSourcesSalesforce';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseSourcesSalesforce';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/salesforce', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Start sync on Salesforce Knowledge integration source
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} sourceId Source ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postKnowledgeKnowledgebaseSourcesSalesforceSourceIdSync(knowledgeBaseId, sourceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseSourcesSalesforceSourceIdSync';
		}
		// verify the required parameter 'sourceId' is set
		if (sourceId === undefined || sourceId === null || sourceId === '') {
			throw 'Missing the required parameter "sourceId" when calling postKnowledgeKnowledgebaseSourcesSalesforceSourceIdSync';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/salesforce/{sourceId}/sync', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId,'sourceId': sourceId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create ServiceNow Knowledge integration source
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} body 
	 */
	postKnowledgeKnowledgebaseSourcesServicenow(knowledgeBaseId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseSourcesServicenow';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseSourcesServicenow';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/servicenow', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Start synchronization on ServiceNow Knowledge integration source
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} sourceId Source ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postKnowledgeKnowledgebaseSourcesServicenowSourceIdSync(knowledgeBaseId, sourceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseSourcesServicenowSourceIdSync';
		}
		// verify the required parameter 'sourceId' is set
		if (sourceId === undefined || sourceId === null || sourceId === '') {
			throw 'Missing the required parameter "sourceId" when calling postKnowledgeKnowledgebaseSourcesServicenowSourceIdSync';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/servicenow/{sourceId}/sync', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId,'sourceId': sourceId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create synchronization job
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} body 
	 */
	postKnowledgeKnowledgebaseSynchronizeJobs(knowledgeBaseId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseSynchronizeJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseSynchronizeJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/synchronize/jobs', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create content upload from URL job
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} body uploadRequest
	 */
	postKnowledgeKnowledgebaseUploadsUrlsJobs(knowledgeBaseId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseUploadsUrlsJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseUploadsUrlsJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/uploads/urls/jobs', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create new knowledge base
	 * 
	 * @param {Object} body 
	 */
	postKnowledgeKnowledgebases(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebases';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update Salesforce Knowledge integration source
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} sourceId Source ID
	 * @param {Object} body 
	 */
	putKnowledgeKnowledgebaseSourcesSalesforceSourceId(knowledgeBaseId, sourceId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling putKnowledgeKnowledgebaseSourcesSalesforceSourceId';
		}
		// verify the required parameter 'sourceId' is set
		if (sourceId === undefined || sourceId === null || sourceId === '') {
			throw 'Missing the required parameter "sourceId" when calling putKnowledgeKnowledgebaseSourcesSalesforceSourceId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putKnowledgeKnowledgebaseSourcesSalesforceSourceId';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/salesforce/{sourceId}', 
			'PUT', 
			{ 'knowledgeBaseId': knowledgeBaseId,'sourceId': sourceId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update ServiceNow Knowledge integration source
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} sourceId Source ID
	 * @param {Object} body 
	 */
	putKnowledgeKnowledgebaseSourcesServicenowSourceId(knowledgeBaseId, sourceId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling putKnowledgeKnowledgebaseSourcesServicenowSourceId';
		}
		// verify the required parameter 'sourceId' is set
		if (sourceId === undefined || sourceId === null || sourceId === '') {
			throw 'Missing the required parameter "sourceId" when calling putKnowledgeKnowledgebaseSourcesServicenowSourceId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putKnowledgeKnowledgebaseSourcesServicenowSourceId';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/servicenow/{sourceId}', 
			'PUT', 
			{ 'knowledgeBaseId': knowledgeBaseId,'sourceId': sourceId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default KnowledgeApi;
