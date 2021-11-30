import ApiClient from '../ApiClient.js';


class KnowledgeApi {
	/**
	 * Knowledge service.
	 * @module purecloud-platform-client-v2/api/KnowledgeApi
	 * @version 126.1.0
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
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
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
	 * @param {String} categoryId Category ID
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 */
	deleteKnowledgeKnowledgebaseLanguageCategory(categoryId, knowledgeBaseId, languageCode) { 
		// verify the required parameter 'categoryId' is set
		if (categoryId === undefined || categoryId === null) {
			throw 'Missing the required parameter "categoryId" when calling deleteKnowledgeKnowledgebaseLanguageCategory';
		}
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
			throw 'Missing the required parameter "knowledgeBaseId" when calling deleteKnowledgeKnowledgebaseLanguageCategory';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
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
	 */
	deleteKnowledgeKnowledgebaseLanguageDocument(documentId, knowledgeBaseId, languageCode) { 
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null) {
			throw 'Missing the required parameter "documentId" when calling deleteKnowledgeKnowledgebaseLanguageDocument';
		}
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
			throw 'Missing the required parameter "knowledgeBaseId" when calling deleteKnowledgeKnowledgebaseLanguageDocument';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
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
	 */
	deleteKnowledgeKnowledgebaseLanguageDocumentsImport(knowledgeBaseId, languageCode, importId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
			throw 'Missing the required parameter "knowledgeBaseId" when calling deleteKnowledgeKnowledgebaseLanguageDocumentsImport';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
			throw 'Missing the required parameter "languageCode" when calling deleteKnowledgeKnowledgebaseLanguageDocumentsImport';
		}
		// verify the required parameter 'importId' is set
		if (importId === undefined || importId === null) {
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
	 * Get knowledge base
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 */
	getKnowledgeKnowledgebase(knowledgeBaseId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
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
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.limit Number of entities to return. Maximum of 200. Deprecated in favour of pageSize, use CursorQueryParameters instead.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.name Filter to return the categories that starts with the given category name.
	 */
	getKnowledgeKnowledgebaseLanguageCategories(knowledgeBaseId, languageCode, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseLanguageCategories';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
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
	 */
	getKnowledgeKnowledgebaseLanguageCategory(categoryId, knowledgeBaseId, languageCode) { 
		// verify the required parameter 'categoryId' is set
		if (categoryId === undefined || categoryId === null) {
			throw 'Missing the required parameter "categoryId" when calling getKnowledgeKnowledgebaseLanguageCategory';
		}
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseLanguageCategory';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
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
	 */
	getKnowledgeKnowledgebaseLanguageDocument(documentId, knowledgeBaseId, languageCode) { 
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null) {
			throw 'Missing the required parameter "documentId" when calling getKnowledgeKnowledgebaseLanguageDocument';
		}
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseLanguageDocument';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
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
	 * Get documents
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.limit Number of entities to return. Maximum of 200. Deprecated in favour of pageSize, use CursorQueryParameters instead.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.categories Filter by categories ids, comma separated values expected.
	 * @param {String} opts.title Filter by document title.
	 * @param {Object} opts.sortBy Sort by.
	 * @param {Object} opts.sortOrder Sort Order.
	 * @param {Array.<String>} opts.documentIds Comma-separated list of document identifiers to fetch by.
	 */
	getKnowledgeKnowledgebaseLanguageDocuments(knowledgeBaseId, languageCode, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseLanguageDocuments';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
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
	 */
	getKnowledgeKnowledgebaseLanguageDocumentsImport(knowledgeBaseId, languageCode, importId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseLanguageDocumentsImport';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
			throw 'Missing the required parameter "languageCode" when calling getKnowledgeKnowledgebaseLanguageDocumentsImport';
		}
		// verify the required parameter 'importId' is set
		if (importId === undefined || importId === null) {
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
	 */
	getKnowledgeKnowledgebaseLanguageTraining(knowledgeBaseId, languageCode, trainingId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseLanguageTraining';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
			throw 'Missing the required parameter "languageCode" when calling getKnowledgeKnowledgebaseLanguageTraining';
		}
		// verify the required parameter 'trainingId' is set
		if (trainingId === undefined || trainingId === null) {
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
	 * @param {String} opts.limit Number of entities to return. Maximum of 200. Deprecated in favour of pageSize, use CursorQueryParameters instead.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Object} opts.knowledgeDocumentsState Return the training with the specified state of the trained documents.
	 */
	getKnowledgeKnowledgebaseLanguageTrainings(knowledgeBaseId, languageCode, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseLanguageTrainings';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
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
	 * Get knowledge bases
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.limit Number of entities to return. Maximum of 200. Deprecated in favour of pageSize, use CursorQueryParameters instead.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
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
	 * Update knowledge base
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} body 
	 */
	patchKnowledgeKnowledgebase(knowledgeBaseId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
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
	 * @param {String} categoryId Category ID
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @param {Object} body 
	 */
	patchKnowledgeKnowledgebaseLanguageCategory(categoryId, knowledgeBaseId, languageCode, body) { 
		// verify the required parameter 'categoryId' is set
		if (categoryId === undefined || categoryId === null) {
			throw 'Missing the required parameter "categoryId" when calling patchKnowledgeKnowledgebaseLanguageCategory';
		}
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
			throw 'Missing the required parameter "knowledgeBaseId" when calling patchKnowledgeKnowledgebaseLanguageCategory';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
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
	 */
	patchKnowledgeKnowledgebaseLanguageDocument(documentId, knowledgeBaseId, languageCode, body) { 
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null) {
			throw 'Missing the required parameter "documentId" when calling patchKnowledgeKnowledgebaseLanguageDocument';
		}
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
			throw 'Missing the required parameter "knowledgeBaseId" when calling patchKnowledgeKnowledgebaseLanguageDocument';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
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
	 */
	patchKnowledgeKnowledgebaseLanguageDocuments(knowledgeBaseId, languageCode, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
			throw 'Missing the required parameter "knowledgeBaseId" when calling patchKnowledgeKnowledgebaseLanguageDocuments';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
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
	 */
	patchKnowledgeKnowledgebaseLanguageDocumentsImport(knowledgeBaseId, languageCode, importId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
			throw 'Missing the required parameter "knowledgeBaseId" when calling patchKnowledgeKnowledgebaseLanguageDocumentsImport';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
			throw 'Missing the required parameter "languageCode" when calling patchKnowledgeKnowledgebaseLanguageDocumentsImport';
		}
		// verify the required parameter 'importId' is set
		if (importId === undefined || importId === null) {
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
	 * Create new category
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @param {Object} body 
	 */
	postKnowledgeKnowledgebaseLanguageCategories(knowledgeBaseId, languageCode, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseLanguageCategories';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
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
	 * Create document
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} languageCode Language code, format: iso2-LOCALE
	 * @param {Object} body 
	 */
	postKnowledgeKnowledgebaseLanguageDocuments(knowledgeBaseId, languageCode, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseLanguageDocuments';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
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
	 */
	postKnowledgeKnowledgebaseLanguageDocumentsImports(knowledgeBaseId, languageCode, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseLanguageDocumentsImports';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
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
	 */
	postKnowledgeKnowledgebaseLanguageTrainingPromote(knowledgeBaseId, languageCode, trainingId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseLanguageTrainingPromote';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
			throw 'Missing the required parameter "languageCode" when calling postKnowledgeKnowledgebaseLanguageTrainingPromote';
		}
		// verify the required parameter 'trainingId' is set
		if (trainingId === undefined || trainingId === null) {
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
	 */
	postKnowledgeKnowledgebaseLanguageTrainings(knowledgeBaseId, languageCode) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseLanguageTrainings';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
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
	 * Search Documents
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postKnowledgeKnowledgebaseSearch(knowledgeBaseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null) {
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

}


export default KnowledgeApi;