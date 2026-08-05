import ApiClient from '../ApiClient.js';


class LanguagesApi {
	/**
	 * Languages service.
	 * @module purecloud-platform-client-v2/api/LanguagesApi
	 * @version 258.1.0
	 */

	/**
	 * Constructs a new LanguagesApi. 
	 * @alias module:purecloud-platform-client-v2/api/LanguagesApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete Language (Deprecated)
	 * This endpoint is deprecated. Please see the Routing API (DELETE /api/v2/routing/languages/{languageId})
	 * @param {String} languageId Language ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	deleteLanguage(languageId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'languageId' is set
		if (languageId === undefined || languageId === null || languageId === '') {
			throw 'Missing the required parameter "languageId" when calling deleteLanguage';
		}

		return this.apiClient.callApi(
			'/api/v2/languages/{languageId}', 
			'DELETE', 
			{ 'languageId': languageId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Language (Deprecated)
	 * This endpoint is deprecated. Please see the Routing API (GET /api/v2/routing/languages/{languageId})
	 * @param {String} languageId Language ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getLanguage(languageId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'languageId' is set
		if (languageId === undefined || languageId === null || languageId === '') {
			throw 'Missing the required parameter "languageId" when calling getLanguage';
		}

		return this.apiClient.callApi(
			'/api/v2/languages/{languageId}', 
			'GET', 
			{ 'languageId': languageId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the list of supported languages. (Deprecated)
	 * This endpoint is deprecated. Please see the Routing API (GET /api/v2/routing/languages)
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
	 * @param {String} opts.name Name
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getLanguages(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/languages', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'name': opts['name'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get all available languages for translation
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguagesTranslations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/languages/translations', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the builtin translation for a language
	 * 
	 * @param {String} language The language of the builtin translation to retrieve
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguagesTranslationsBuiltin(language, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'language' is set
		if (language === undefined || language === null) {
			throw 'Missing the required parameter "language" when calling getLanguagesTranslationsBuiltin';
		}

		return this.apiClient.callApi(
			'/api/v2/languages/translations/builtin', 
			'GET', 
			{  },
			{ 'language': language },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get effective translation for an organization by language
	 * 
	 * @param {String} language The language of the translation to retrieve for the organization
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguagesTranslationsOrganization(language, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'language' is set
		if (language === undefined || language === null) {
			throw 'Missing the required parameter "language" when calling getLanguagesTranslationsOrganization';
		}

		return this.apiClient.callApi(
			'/api/v2/languages/translations/organization', 
			'GET', 
			{  },
			{ 'language': language },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get effective language translation for a user
	 * 
	 * @param {String} userId The user id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguagesTranslationsUser(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getLanguagesTranslationsUser';
		}

		return this.apiClient.callApi(
			'/api/v2/languages/translations/users/{userId}', 
			'GET', 
			{ 'userId': userId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create Language (Deprecated)
	 * This endpoint is deprecated. Please see the Routing API. (POST /api/v2/routing/languages
	 * @param {Object} body Language
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postLanguages(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postLanguages';
		}

		return this.apiClient.callApi(
			'/api/v2/languages', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

}


export default LanguagesApi;
