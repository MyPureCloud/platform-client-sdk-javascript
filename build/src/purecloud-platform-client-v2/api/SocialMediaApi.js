import ApiClient from '../ApiClient.js';


class SocialMediaApi {
	/**
	 * SocialMedia service.
	 * @module purecloud-platform-client-v2/api/SocialMediaApi
	 * @version 215.0.0
	 */

	/**
	 * Constructs a new SocialMediaApi. 
	 * @alias module:purecloud-platform-client-v2/api/SocialMediaApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a social topic.
	 * 
	 * @param {String} topicId topicId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.hardDelete Determines whether a Social topic should be soft-deleted or hard-deleted (permanently removed). Set to false (soft-delete) by default.
	 * deleteSocialmediaTopic is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteSocialmediaTopic(topicId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling deleteSocialmediaTopic';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}', 
			'DELETE', 
			{ 'topicId': topicId },
			{ 'hardDelete': opts['hardDelete'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete a Facebook data ingestion rule.
	 * 
	 * @param {String} topicId topicId
	 * @param {String} facebookIngestionRuleId facebookIngestionRuleId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.hardDelete Determines whether a Facebook data ingestion rule should be soft-deleted (have it's state set to deleted) or hard-deleted (permanently removed). Set to false (soft-delete) by default. (default to false)
	 * deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId(topicId, facebookIngestionRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId';
		}
		// verify the required parameter 'facebookIngestionRuleId' is set
		if (facebookIngestionRuleId === undefined || facebookIngestionRuleId === null) {
			throw 'Missing the required parameter "facebookIngestionRuleId" when calling deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}', 
			'DELETE', 
			{ 'topicId': topicId,'facebookIngestionRuleId': facebookIngestionRuleId },
			{ 'hardDelete': opts['hardDelete'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete a open data ingestion rule.
	 * 
	 * @param {String} topicId topicId
	 * @param {String} openId openId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.hardDelete Determines whether a open data ingestion rule should be soft-deleted (have it's state set to deleted) or hard-deleted (permanently removed). Set to false (soft-delete) by default. (default to false)
	 * deleteSocialmediaTopicDataingestionrulesOpenOpenId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteSocialmediaTopicDataingestionrulesOpenOpenId(topicId, openId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling deleteSocialmediaTopicDataingestionrulesOpenOpenId';
		}
		// verify the required parameter 'openId' is set
		if (openId === undefined || openId === null) {
			throw 'Missing the required parameter "openId" when calling deleteSocialmediaTopicDataingestionrulesOpenOpenId';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}', 
			'DELETE', 
			{ 'topicId': topicId,'openId': openId },
			{ 'hardDelete': opts['hardDelete'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete a X (formally Twitter) data ingestion rule.
	 * 
	 * @param {String} topicId topicId
	 * @param {String} twitterIngestionRuleId twitterIngestionRuleId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.hardDelete Determines whether a X (formally Twitter) data ingestion rule should be soft-deleted (have it's state set to deleted) or hard-deleted (permanently removed). Set to false (soft-delete) by default. (default to false)
	 * deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId(topicId, twitterIngestionRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId';
		}
		// verify the required parameter 'twitterIngestionRuleId' is set
		if (twitterIngestionRuleId === undefined || twitterIngestionRuleId === null) {
			throw 'Missing the required parameter "twitterIngestionRuleId" when calling deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}', 
			'DELETE', 
			{ 'topicId': topicId,'twitterIngestionRuleId': twitterIngestionRuleId },
			{ 'hardDelete': opts['hardDelete'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a single social topic.
	 * 
	 * @param {String} topicId topicId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeDeleted Determines whether to include soft-deleted items in the result.
	 * getSocialmediaTopic is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getSocialmediaTopic(topicId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling getSocialmediaTopic';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}', 
			'GET', 
			{ 'topicId': topicId },
			{ 'includeDeleted': opts['includeDeleted'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a single Facebook data ingestion rule.
	 * 
	 * @param {String} topicId topicId
	 * @param {String} facebookIngestionRuleId facebookIngestionRuleId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeDeleted Determines whether to include soft-deleted items in the result.
	 * getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId(topicId, facebookIngestionRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId';
		}
		// verify the required parameter 'facebookIngestionRuleId' is set
		if (facebookIngestionRuleId === undefined || facebookIngestionRuleId === null) {
			throw 'Missing the required parameter "facebookIngestionRuleId" when calling getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}', 
			'GET', 
			{ 'topicId': topicId,'facebookIngestionRuleId': facebookIngestionRuleId },
			{ 'includeDeleted': opts['includeDeleted'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a single Facebook data ingestion rule version.
	 * 
	 * @param {String} topicId topicId
	 * @param {String} facebookIngestionRuleId facebookIngestionRuleId
	 * @param {String} dataIngestionRuleVersion version
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeDeleted Determines whether to include soft-deleted item in the result.
	 * getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion(topicId, facebookIngestionRuleId, dataIngestionRuleVersion, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion';
		}
		// verify the required parameter 'facebookIngestionRuleId' is set
		if (facebookIngestionRuleId === undefined || facebookIngestionRuleId === null) {
			throw 'Missing the required parameter "facebookIngestionRuleId" when calling getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion';
		}
		// verify the required parameter 'dataIngestionRuleVersion' is set
		if (dataIngestionRuleVersion === undefined || dataIngestionRuleVersion === null) {
			throw 'Missing the required parameter "dataIngestionRuleVersion" when calling getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}/versions/{dataIngestionRuleVersion}', 
			'GET', 
			{ 'topicId': topicId,'facebookIngestionRuleId': facebookIngestionRuleId,'dataIngestionRuleVersion': dataIngestionRuleVersion },
			{ 'includeDeleted': opts['includeDeleted'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the Facebook data ingestion rule versions.
	 * 
	 * @param {String} topicId topicId
	 * @param {String} facebookIngestionRuleId facebookIngestionRuleId
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Boolean} opts.includeDeleted Determines whether to include soft-deleted items in the result.
	 * getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions(topicId, facebookIngestionRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions';
		}
		// verify the required parameter 'facebookIngestionRuleId' is set
		if (facebookIngestionRuleId === undefined || facebookIngestionRuleId === null) {
			throw 'Missing the required parameter "facebookIngestionRuleId" when calling getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}/versions', 
			'GET', 
			{ 'topicId': topicId,'facebookIngestionRuleId': facebookIngestionRuleId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'includeDeleted': opts['includeDeleted'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a single open data ingestion rule.
	 * 
	 * @param {String} topicId topicId
	 * @param {String} openId openId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeDeleted Determines whether to include soft-deleted items in the result.
	 * getSocialmediaTopicDataingestionrulesOpenOpenId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getSocialmediaTopicDataingestionrulesOpenOpenId(topicId, openId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling getSocialmediaTopicDataingestionrulesOpenOpenId';
		}
		// verify the required parameter 'openId' is set
		if (openId === undefined || openId === null) {
			throw 'Missing the required parameter "openId" when calling getSocialmediaTopicDataingestionrulesOpenOpenId';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}', 
			'GET', 
			{ 'topicId': topicId,'openId': openId },
			{ 'includeDeleted': opts['includeDeleted'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a single Open data ingestion rule version.
	 * 
	 * @param {String} topicId topicId
	 * @param {String} openId openId
	 * @param {String} dataIngestionRuleVersion version
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeDeleted Determines whether to include soft-deleted item in the result.
	 * getSocialmediaTopicDataingestionrulesOpenOpenIdVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getSocialmediaTopicDataingestionrulesOpenOpenIdVersion(topicId, openId, dataIngestionRuleVersion, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling getSocialmediaTopicDataingestionrulesOpenOpenIdVersion';
		}
		// verify the required parameter 'openId' is set
		if (openId === undefined || openId === null) {
			throw 'Missing the required parameter "openId" when calling getSocialmediaTopicDataingestionrulesOpenOpenIdVersion';
		}
		// verify the required parameter 'dataIngestionRuleVersion' is set
		if (dataIngestionRuleVersion === undefined || dataIngestionRuleVersion === null) {
			throw 'Missing the required parameter "dataIngestionRuleVersion" when calling getSocialmediaTopicDataingestionrulesOpenOpenIdVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}/versions/{dataIngestionRuleVersion}', 
			'GET', 
			{ 'topicId': topicId,'openId': openId,'dataIngestionRuleVersion': dataIngestionRuleVersion },
			{ 'includeDeleted': opts['includeDeleted'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the Open data ingestion rule versions.
	 * 
	 * @param {String} topicId topicId
	 * @param {String} openId openId
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Boolean} opts.includeDeleted Determines whether to include soft-deleted items in the result.
	 * getSocialmediaTopicDataingestionrulesOpenOpenIdVersions is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getSocialmediaTopicDataingestionrulesOpenOpenIdVersions(topicId, openId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling getSocialmediaTopicDataingestionrulesOpenOpenIdVersions';
		}
		// verify the required parameter 'openId' is set
		if (openId === undefined || openId === null) {
			throw 'Missing the required parameter "openId" when calling getSocialmediaTopicDataingestionrulesOpenOpenIdVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}/versions', 
			'GET', 
			{ 'topicId': topicId,'openId': openId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'includeDeleted': opts['includeDeleted'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a single X (formally Twitter) data ingestion rule.
	 * 
	 * @param {String} topicId topicId
	 * @param {String} twitterIngestionRuleId twitterIngestionRuleId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeDeleted Determines whether to include soft-deleted items in the result.
	 * getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId(topicId, twitterIngestionRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId';
		}
		// verify the required parameter 'twitterIngestionRuleId' is set
		if (twitterIngestionRuleId === undefined || twitterIngestionRuleId === null) {
			throw 'Missing the required parameter "twitterIngestionRuleId" when calling getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}', 
			'GET', 
			{ 'topicId': topicId,'twitterIngestionRuleId': twitterIngestionRuleId },
			{ 'includeDeleted': opts['includeDeleted'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a single X (formally Twitter) data ingestion rule version.
	 * 
	 * @param {String} topicId topicId
	 * @param {String} twitterIngestionRuleId twitterIngestionRuleId
	 * @param {String} dataIngestionRuleVersion version
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeDeleted Determines whether to include soft-deleted item in the result.
	 * getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion(topicId, twitterIngestionRuleId, dataIngestionRuleVersion, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion';
		}
		// verify the required parameter 'twitterIngestionRuleId' is set
		if (twitterIngestionRuleId === undefined || twitterIngestionRuleId === null) {
			throw 'Missing the required parameter "twitterIngestionRuleId" when calling getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion';
		}
		// verify the required parameter 'dataIngestionRuleVersion' is set
		if (dataIngestionRuleVersion === undefined || dataIngestionRuleVersion === null) {
			throw 'Missing the required parameter "dataIngestionRuleVersion" when calling getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}/versions/{dataIngestionRuleVersion}', 
			'GET', 
			{ 'topicId': topicId,'twitterIngestionRuleId': twitterIngestionRuleId,'dataIngestionRuleVersion': dataIngestionRuleVersion },
			{ 'includeDeleted': opts['includeDeleted'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the Open data ingestion rule versions.
	 * 
	 * @param {String} topicId topicId
	 * @param {String} twitterIngestionRuleId twitterIngestionRuleId
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Boolean} opts.includeDeleted Determines whether to include soft-deleted items in the result.
	 * getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions(topicId, twitterIngestionRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions';
		}
		// verify the required parameter 'twitterIngestionRuleId' is set
		if (twitterIngestionRuleId === undefined || twitterIngestionRuleId === null) {
			throw 'Missing the required parameter "twitterIngestionRuleId" when calling getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}/versions', 
			'GET', 
			{ 'topicId': topicId,'twitterIngestionRuleId': twitterIngestionRuleId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'includeDeleted': opts['includeDeleted'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieve all social topics.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Array.<String>} opts.divisionIds One or more division IDs. If nothing is provided, the social topics associated withthe list of divisions that the user has access to will be returned.
	 * @param {Boolean} opts.includeDeleted Determines whether to include soft-deleted items in the result.
	 * getSocialmediaTopics is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getSocialmediaTopics(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'divisionIds': this.apiClient.buildCollectionParam(opts['divisionIds'], 'multi'),'includeDeleted': opts['includeDeleted'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a social topic.
	 * 
	 * @param {String} topicId topicId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * patchSocialmediaTopic is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchSocialmediaTopic(topicId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling patchSocialmediaTopic';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}', 
			'PATCH', 
			{ 'topicId': topicId },
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
	 * Update the status of a Facebook data ingestion rule.
	 * 
	 * @param {String} topicId topicId
	 * @param {String} facebookIngestionRuleId facebookIngestionRuleId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId(topicId, facebookIngestionRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId';
		}
		// verify the required parameter 'facebookIngestionRuleId' is set
		if (facebookIngestionRuleId === undefined || facebookIngestionRuleId === null) {
			throw 'Missing the required parameter "facebookIngestionRuleId" when calling patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}', 
			'PATCH', 
			{ 'topicId': topicId,'facebookIngestionRuleId': facebookIngestionRuleId },
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
	 * Update the status of a open data ingestion rule.
	 * 
	 * @param {String} topicId topicId
	 * @param {String} openId openId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * patchSocialmediaTopicDataingestionrulesOpenOpenId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchSocialmediaTopicDataingestionrulesOpenOpenId(topicId, openId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling patchSocialmediaTopicDataingestionrulesOpenOpenId';
		}
		// verify the required parameter 'openId' is set
		if (openId === undefined || openId === null) {
			throw 'Missing the required parameter "openId" when calling patchSocialmediaTopicDataingestionrulesOpenOpenId';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}', 
			'PATCH', 
			{ 'topicId': topicId,'openId': openId },
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
	 * Update the status of a X (formally Twitter) data ingestion rule.
	 * 
	 * @param {String} topicId topicId
	 * @param {String} twitterIngestionRuleId twitterIngestionRuleId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId(topicId, twitterIngestionRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId';
		}
		// verify the required parameter 'twitterIngestionRuleId' is set
		if (twitterIngestionRuleId === undefined || twitterIngestionRuleId === null) {
			throw 'Missing the required parameter "twitterIngestionRuleId" when calling patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}', 
			'PATCH', 
			{ 'topicId': topicId,'twitterIngestionRuleId': twitterIngestionRuleId },
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
	 * Create an Facebook data ingestion rule.
	 * 
	 * @param {String} topicId topicId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * postSocialmediaTopicDataingestionrulesFacebook is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postSocialmediaTopicDataingestionrulesFacebook(topicId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling postSocialmediaTopicDataingestionrulesFacebook';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook', 
			'POST', 
			{ 'topicId': topicId },
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
	 * Create an open data ingestion rule.
	 * 
	 * @param {String} topicId topicId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * postSocialmediaTopicDataingestionrulesOpen is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postSocialmediaTopicDataingestionrulesOpen(topicId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling postSocialmediaTopicDataingestionrulesOpen';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/open', 
			'POST', 
			{ 'topicId': topicId },
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
	 * Create an twitter data ingestion rule.
	 * 
	 * @param {String} topicId topicId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * postSocialmediaTopicDataingestionrulesTwitter is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postSocialmediaTopicDataingestionrulesTwitter(topicId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling postSocialmediaTopicDataingestionrulesTwitter';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter', 
			'POST', 
			{ 'topicId': topicId },
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
	 * Create a social topic.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * postSocialmediaTopics is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postSocialmediaTopics(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics', 
			'POST', 
			{  },
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
	 * Update the Facebook data ingestion rule.
	 * 
	 * @param {String} topicId topicId
	 * @param {String} facebookIngestionRuleId facebookIngestionRuleId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId(topicId, facebookIngestionRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId';
		}
		// verify the required parameter 'facebookIngestionRuleId' is set
		if (facebookIngestionRuleId === undefined || facebookIngestionRuleId === null) {
			throw 'Missing the required parameter "facebookIngestionRuleId" when calling putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}', 
			'PUT', 
			{ 'topicId': topicId,'facebookIngestionRuleId': facebookIngestionRuleId },
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
	 * Update the open data ingestion rule.
	 * 
	 * @param {String} topicId topicId
	 * @param {String} openId openId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * putSocialmediaTopicDataingestionrulesOpenOpenId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	putSocialmediaTopicDataingestionrulesOpenOpenId(topicId, openId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling putSocialmediaTopicDataingestionrulesOpenOpenId';
		}
		// verify the required parameter 'openId' is set
		if (openId === undefined || openId === null) {
			throw 'Missing the required parameter "openId" when calling putSocialmediaTopicDataingestionrulesOpenOpenId';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}', 
			'PUT', 
			{ 'topicId': topicId,'openId': openId },
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
	 * Update the X (formally Twitter) data ingestion rule.
	 * 
	 * @param {String} topicId topicId
	 * @param {String} twitterIngestionRuleId twitterIngestionRuleId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId(topicId, twitterIngestionRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId';
		}
		// verify the required parameter 'twitterIngestionRuleId' is set
		if (twitterIngestionRuleId === undefined || twitterIngestionRuleId === null) {
			throw 'Missing the required parameter "twitterIngestionRuleId" when calling putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}', 
			'PUT', 
			{ 'topicId': topicId,'twitterIngestionRuleId': twitterIngestionRuleId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default SocialMediaApi;
