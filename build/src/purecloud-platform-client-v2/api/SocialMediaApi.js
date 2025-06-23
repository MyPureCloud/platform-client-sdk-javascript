import ApiClient from '../ApiClient.js';


class SocialMediaApi {
	/**
	 * SocialMedia service.
	 * @module purecloud-platform-client-v2/api/SocialMediaApi
	 * @version 225.0.0
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
	 * Delete an escalation rule.
	 * 
	 * @param {String} escalationRuleId escalationRuleId
	 */
	deleteSocialmediaEscalationrule(escalationRuleId) { 
		// verify the required parameter 'escalationRuleId' is set
		if (escalationRuleId === undefined || escalationRuleId === null || escalationRuleId === '') {
			throw 'Missing the required parameter "escalationRuleId" when calling deleteSocialmediaEscalationrule';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/escalationrules/{escalationRuleId}', 
			'DELETE', 
			{ 'escalationRuleId': escalationRuleId },
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
	 * Delete a social media message.
	 * 
	 * @param {String} messageId messageId
	 * deleteSocialmediaMessage is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteSocialmediaMessage(messageId) { 
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null || messageId === '') {
			throw 'Missing the required parameter "messageId" when calling deleteSocialmediaMessage';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/messages/{messageId}', 
			'DELETE', 
			{ 'messageId': messageId },
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
	 * Delete a social topic.
	 * 
	 * @param {String} topicId topicId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.hardDelete Determines whether a Social topic should be soft-deleted or hard-deleted (permanently removed). Set to false (soft-delete) by default.
	 */
	deleteSocialmediaTopic(topicId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
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
	 */
	deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId(topicId, facebookIngestionRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId';
		}
		// verify the required parameter 'facebookIngestionRuleId' is set
		if (facebookIngestionRuleId === undefined || facebookIngestionRuleId === null || facebookIngestionRuleId === '') {
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
	 */
	deleteSocialmediaTopicDataingestionrulesOpenOpenId(topicId, openId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling deleteSocialmediaTopicDataingestionrulesOpenOpenId';
		}
		// verify the required parameter 'openId' is set
		if (openId === undefined || openId === null || openId === '') {
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
	 */
	deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId(topicId, twitterIngestionRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId';
		}
		// verify the required parameter 'twitterIngestionRuleId' is set
		if (twitterIngestionRuleId === undefined || twitterIngestionRuleId === null || twitterIngestionRuleId === '') {
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
	 * Get status for async query for social media aggregates
	 * 
	 * @param {String} jobId jobId
	 */
	getSocialmediaAnalyticsAggregatesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getSocialmediaAnalyticsAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/analytics/aggregates/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Fetch a page of results for an async social media query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 */
	getSocialmediaAnalyticsAggregatesJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getSocialmediaAnalyticsAggregatesJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/analytics/aggregates/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId },
			{ 'cursor': opts['cursor'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get status for async query for social media messages job
	 * 
	 * @param {String} jobId jobId
	 */
	getSocialmediaAnalyticsMessagesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getSocialmediaAnalyticsMessagesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/analytics/messages/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Fetch a page of results for an async social media messages query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 */
	getSocialmediaAnalyticsMessagesJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getSocialmediaAnalyticsMessagesJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/analytics/messages/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId },
			{ 'cursor': opts['cursor'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a single escalation rule.
	 * 
	 * @param {String} escalationRuleId escalationRuleId
	 */
	getSocialmediaEscalationrule(escalationRuleId) { 
		// verify the required parameter 'escalationRuleId' is set
		if (escalationRuleId === undefined || escalationRuleId === null || escalationRuleId === '') {
			throw 'Missing the required parameter "escalationRuleId" when calling getSocialmediaEscalationrule';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/escalationrules/{escalationRuleId}', 
			'GET', 
			{ 'escalationRuleId': escalationRuleId },
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
	 * Retrieve all escalation rules for a division.
	 * 
	 * @param {String} divisionId One division ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getSocialmediaEscalationrules(divisionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'divisionId' is set
		if (divisionId === undefined || divisionId === null) {
			throw 'Missing the required parameter "divisionId" when calling getSocialmediaEscalationrules';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/escalationrules', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'divisionId': divisionId },
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
	 */
	getSocialmediaTopic(topicId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
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
	 * Retrieve all social topic data ingestion rules with pagination.
	 * 
	 * @param {String} topicId topicId
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Boolean} opts.includeDeleted Determines whether to include soft-deleted items in the result.
	 */
	getSocialmediaTopicDataingestionrules(topicId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling getSocialmediaTopicDataingestionrules';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules', 
			'GET', 
			{ 'topicId': topicId },
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
	 * Get a single Facebook data ingestion rule.
	 * 
	 * @param {String} topicId topicId
	 * @param {String} facebookIngestionRuleId facebookIngestionRuleId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeDeleted Determines whether to include soft-deleted items in the result.
	 */
	getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId(topicId, facebookIngestionRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId';
		}
		// verify the required parameter 'facebookIngestionRuleId' is set
		if (facebookIngestionRuleId === undefined || facebookIngestionRuleId === null || facebookIngestionRuleId === '') {
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
	 */
	getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion(topicId, facebookIngestionRuleId, dataIngestionRuleVersion, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion';
		}
		// verify the required parameter 'facebookIngestionRuleId' is set
		if (facebookIngestionRuleId === undefined || facebookIngestionRuleId === null || facebookIngestionRuleId === '') {
			throw 'Missing the required parameter "facebookIngestionRuleId" when calling getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion';
		}
		// verify the required parameter 'dataIngestionRuleVersion' is set
		if (dataIngestionRuleVersion === undefined || dataIngestionRuleVersion === null || dataIngestionRuleVersion === '') {
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
	 */
	getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions(topicId, facebookIngestionRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions';
		}
		// verify the required parameter 'facebookIngestionRuleId' is set
		if (facebookIngestionRuleId === undefined || facebookIngestionRuleId === null || facebookIngestionRuleId === '') {
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
	 */
	getSocialmediaTopicDataingestionrulesOpenOpenId(topicId, openId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling getSocialmediaTopicDataingestionrulesOpenOpenId';
		}
		// verify the required parameter 'openId' is set
		if (openId === undefined || openId === null || openId === '') {
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
	 */
	getSocialmediaTopicDataingestionrulesOpenOpenIdVersion(topicId, openId, dataIngestionRuleVersion, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling getSocialmediaTopicDataingestionrulesOpenOpenIdVersion';
		}
		// verify the required parameter 'openId' is set
		if (openId === undefined || openId === null || openId === '') {
			throw 'Missing the required parameter "openId" when calling getSocialmediaTopicDataingestionrulesOpenOpenIdVersion';
		}
		// verify the required parameter 'dataIngestionRuleVersion' is set
		if (dataIngestionRuleVersion === undefined || dataIngestionRuleVersion === null || dataIngestionRuleVersion === '') {
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
	 */
	getSocialmediaTopicDataingestionrulesOpenOpenIdVersions(topicId, openId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling getSocialmediaTopicDataingestionrulesOpenOpenIdVersions';
		}
		// verify the required parameter 'openId' is set
		if (openId === undefined || openId === null || openId === '') {
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
	 */
	getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId(topicId, twitterIngestionRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId';
		}
		// verify the required parameter 'twitterIngestionRuleId' is set
		if (twitterIngestionRuleId === undefined || twitterIngestionRuleId === null || twitterIngestionRuleId === '') {
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
	 */
	getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion(topicId, twitterIngestionRuleId, dataIngestionRuleVersion, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion';
		}
		// verify the required parameter 'twitterIngestionRuleId' is set
		if (twitterIngestionRuleId === undefined || twitterIngestionRuleId === null || twitterIngestionRuleId === '') {
			throw 'Missing the required parameter "twitterIngestionRuleId" when calling getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion';
		}
		// verify the required parameter 'dataIngestionRuleVersion' is set
		if (dataIngestionRuleVersion === undefined || dataIngestionRuleVersion === null || dataIngestionRuleVersion === '') {
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
	 */
	getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions(topicId, twitterIngestionRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions';
		}
		// verify the required parameter 'twitterIngestionRuleId' is set
		if (twitterIngestionRuleId === undefined || twitterIngestionRuleId === null || twitterIngestionRuleId === '') {
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
	 */
	patchSocialmediaTopic(topicId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
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
	 */
	patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId(topicId, facebookIngestionRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId';
		}
		// verify the required parameter 'facebookIngestionRuleId' is set
		if (facebookIngestionRuleId === undefined || facebookIngestionRuleId === null || facebookIngestionRuleId === '') {
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
	 */
	patchSocialmediaTopicDataingestionrulesOpenOpenId(topicId, openId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling patchSocialmediaTopicDataingestionrulesOpenOpenId';
		}
		// verify the required parameter 'openId' is set
		if (openId === undefined || openId === null || openId === '') {
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
	 */
	patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId(topicId, twitterIngestionRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId';
		}
		// verify the required parameter 'twitterIngestionRuleId' is set
		if (twitterIngestionRuleId === undefined || twitterIngestionRuleId === null || twitterIngestionRuleId === '') {
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
	 * Query for social media aggregates asynchronously
	 * 
	 * @param {Object} body query
	 */
	postSocialmediaAnalyticsAggregatesJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSocialmediaAnalyticsAggregatesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/analytics/aggregates/jobs', 
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
	 * Query for social media messages asynchronously
	 * 
	 * @param {Object} body query
	 */
	postSocialmediaAnalyticsMessagesJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSocialmediaAnalyticsMessagesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/analytics/messages/jobs', 
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
	 * Create an escalation rule.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postSocialmediaEscalationrules(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/socialmedia/escalationrules', 
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
	 * Escalate message to a conversation manually
	 * 
	 * @param {String} divisionId One division ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postSocialmediaEscalationsMessages(divisionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'divisionId' is set
		if (divisionId === undefined || divisionId === null) {
			throw 'Missing the required parameter "divisionId" when calling postSocialmediaEscalationsMessages';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/escalations/messages', 
			'POST', 
			{  },
			{ 'divisionId': divisionId },
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
	 */
	postSocialmediaTopicDataingestionrulesFacebook(topicId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
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
	 */
	postSocialmediaTopicDataingestionrulesOpen(topicId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
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
	 * Ingest a list of Open Social Messages
	 * Ingest a list of open social messages to an ingestion rule on a topic. This endpoint will ingest and enrich these messages.  In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least social scope.
	 * @param {String} topicId Topic ID
	 * @param {String} ruleId Data Ingestion Rule ID
	 * @param {Array.<Object>} body NormalizedMessage
	 */
	postSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk(topicId, ruleId, body) { 
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling postSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk';
		}
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling postSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{ruleId}/messages/bulk', 
			'POST', 
			{ 'topicId': topicId,'ruleId': ruleId },
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
	 * Ingest a list of Open Social Reactions
	 * Ingest a list of open social reactions to an ingestion rule on a topic. This endpoint will ingest these reactions.  In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least social scope.
	 * @param {String} topicId Topic ID
	 * @param {String} ruleId Data Ingestion Rule ID
	 * @param {Object} body NormalizedEvent
	 */
	postSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk(topicId, ruleId, body) { 
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling postSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk';
		}
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling postSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{ruleId}/reactions/bulk', 
			'POST', 
			{ 'topicId': topicId,'ruleId': ruleId },
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
	 * Create an twitter data ingestion rule.
	 * 
	 * @param {String} topicId topicId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postSocialmediaTopicDataingestionrulesTwitter(topicId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
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
	 * Retrieves historical tweet count for search terms, optional countries list and the current limit and usage for the organization.
	 * 
	 * @param {Object} body TwitterDataHistoricalTweetRequest
	 */
	postSocialmediaTwitterHistoricalTweets(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSocialmediaTwitterHistoricalTweets';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/twitter/historical/tweets', 
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
	 * Update the escalation rule.
	 * 
	 * @param {String} escalationRuleId escalationRuleId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	putSocialmediaEscalationrule(escalationRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'escalationRuleId' is set
		if (escalationRuleId === undefined || escalationRuleId === null || escalationRuleId === '') {
			throw 'Missing the required parameter "escalationRuleId" when calling putSocialmediaEscalationrule';
		}

		return this.apiClient.callApi(
			'/api/v2/socialmedia/escalationrules/{escalationRuleId}', 
			'PUT', 
			{ 'escalationRuleId': escalationRuleId },
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
	 */
	putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId(topicId, facebookIngestionRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId';
		}
		// verify the required parameter 'facebookIngestionRuleId' is set
		if (facebookIngestionRuleId === undefined || facebookIngestionRuleId === null || facebookIngestionRuleId === '') {
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
	 */
	putSocialmediaTopicDataingestionrulesOpenOpenId(topicId, openId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling putSocialmediaTopicDataingestionrulesOpenOpenId';
		}
		// verify the required parameter 'openId' is set
		if (openId === undefined || openId === null || openId === '') {
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
	 */
	putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId(topicId, twitterIngestionRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId';
		}
		// verify the required parameter 'twitterIngestionRuleId' is set
		if (twitterIngestionRuleId === undefined || twitterIngestionRuleId === null || twitterIngestionRuleId === '') {
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
