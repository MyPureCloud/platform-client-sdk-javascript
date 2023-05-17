import ApiClient from '../ApiClient.js';


class OutboundApi {
	/**
	 * Outbound service.
	 * @module purecloud-platform-client-v2/api/OutboundApi
	 * @version 168.2.0
	 */

	/**
	 * Constructs a new OutboundApi. 
	 * @alias module:purecloud-platform-client-v2/api/OutboundApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete attempt limits
	 * 
	 * @param {String} attemptLimitsId Attempt limits ID
	 */
	deleteOutboundAttemptlimit(attemptLimitsId) { 
		// verify the required parameter 'attemptLimitsId' is set
		if (attemptLimitsId === undefined || attemptLimitsId === null) {
			throw 'Missing the required parameter "attemptLimitsId" when calling deleteOutboundAttemptlimit';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/attemptlimits/{attemptLimitsId}', 
			'DELETE', 
			{ 'attemptLimitsId': attemptLimitsId },
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
	 * Delete callable time set
	 * 
	 * @param {String} callableTimeSetId Callable Time Set ID
	 */
	deleteOutboundCallabletimeset(callableTimeSetId) { 
		// verify the required parameter 'callableTimeSetId' is set
		if (callableTimeSetId === undefined || callableTimeSetId === null) {
			throw 'Missing the required parameter "callableTimeSetId" when calling deleteOutboundCallabletimeset';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/callabletimesets/{callableTimeSetId}', 
			'DELETE', 
			{ 'callableTimeSetId': callableTimeSetId },
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
	 * Delete a dialer call analysis response set.
	 * 
	 * @param {String} callAnalysisSetId Call Analysis Response Set ID
	 */
	deleteOutboundCallanalysisresponseset(callAnalysisSetId) { 
		// verify the required parameter 'callAnalysisSetId' is set
		if (callAnalysisSetId === undefined || callAnalysisSetId === null) {
			throw 'Missing the required parameter "callAnalysisSetId" when calling deleteOutboundCallanalysisresponseset';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}', 
			'DELETE', 
			{ 'callAnalysisSetId': callAnalysisSetId },
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
	 * Delete a campaign.
	 * 
	 * @param {String} campaignId Campaign ID
	 */
	deleteOutboundCampaign(campaignId) { 
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null) {
			throw 'Missing the required parameter "campaignId" when calling deleteOutboundCampaign';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/{campaignId}', 
			'DELETE', 
			{ 'campaignId': campaignId },
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
	 * Reset campaign progress and recycle the campaign
	 * 
	 * @param {String} campaignId Campaign ID
	 */
	deleteOutboundCampaignProgress(campaignId) { 
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null) {
			throw 'Missing the required parameter "campaignId" when calling deleteOutboundCampaignProgress';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/{campaignId}/progress', 
			'DELETE', 
			{ 'campaignId': campaignId },
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
	 * Delete Campaign Rule
	 * 
	 * @param {String} campaignRuleId Campaign Rule ID
	 */
	deleteOutboundCampaignrule(campaignRuleId) { 
		// verify the required parameter 'campaignRuleId' is set
		if (campaignRuleId === undefined || campaignRuleId === null) {
			throw 'Missing the required parameter "campaignRuleId" when calling deleteOutboundCampaignrule';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaignrules/{campaignRuleId}', 
			'DELETE', 
			{ 'campaignRuleId': campaignRuleId },
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
	 * Delete a contact list.
	 * 
	 * @param {String} contactListId ContactList ID
	 */
	deleteOutboundContactlist(contactListId) { 
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null) {
			throw 'Missing the required parameter "contactListId" when calling deleteOutboundContactlist';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/{contactListId}', 
			'DELETE', 
			{ 'contactListId': contactListId },
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
	 * Delete a contact.
	 * 
	 * @param {String} contactListId Contact List ID
	 * @param {String} contactId Contact ID
	 */
	deleteOutboundContactlistContact(contactListId, contactId) { 
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null) {
			throw 'Missing the required parameter "contactListId" when calling deleteOutboundContactlistContact';
		}
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null) {
			throw 'Missing the required parameter "contactId" when calling deleteOutboundContactlistContact';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}', 
			'DELETE', 
			{ 'contactListId': contactListId,'contactId': contactId },
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
	 * Delete contacts from a contact list.
	 * 
	 * @param {String} contactListId Contact List ID
	 * @param {Array.<String>} contactIds ContactIds to delete.
	 */
	deleteOutboundContactlistContacts(contactListId, contactIds) { 
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null) {
			throw 'Missing the required parameter "contactListId" when calling deleteOutboundContactlistContacts';
		}
		// verify the required parameter 'contactIds' is set
		if (contactIds === undefined || contactIds === null) {
			throw 'Missing the required parameter "contactIds" when calling deleteOutboundContactlistContacts';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/{contactListId}/contacts', 
			'DELETE', 
			{ 'contactListId': contactListId },
			{ 'contactIds': this.apiClient.buildCollectionParam(contactIds, 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete Contact List Filter
	 * 
	 * @param {String} contactListFilterId Contact List Filter ID
	 */
	deleteOutboundContactlistfilter(contactListFilterId) { 
		// verify the required parameter 'contactListFilterId' is set
		if (contactListFilterId === undefined || contactListFilterId === null) {
			throw 'Missing the required parameter "contactListFilterId" when calling deleteOutboundContactlistfilter';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlistfilters/{contactListFilterId}', 
			'DELETE', 
			{ 'contactListFilterId': contactListFilterId },
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
	 * Delete multiple contact lists.
	 * 
	 * @param {Array.<String>} id contact list id(s) to delete
	 */
	deleteOutboundContactlists(id) { 
		// verify the required parameter 'id' is set
		if (id === undefined || id === null) {
			throw 'Missing the required parameter "id" when calling deleteOutboundContactlists';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists', 
			'DELETE', 
			{  },
			{ 'id': this.apiClient.buildCollectionParam(id, 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete an Outbound Digital Rule Set
	 * 
	 * @param {String} digitalRuleSetId The Digital Rule Set ID
	 */
	deleteOutboundDigitalruleset(digitalRuleSetId) { 
		// verify the required parameter 'digitalRuleSetId' is set
		if (digitalRuleSetId === undefined || digitalRuleSetId === null) {
			throw 'Missing the required parameter "digitalRuleSetId" when calling deleteOutboundDigitalruleset';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/digitalrulesets/{digitalRuleSetId}', 
			'DELETE', 
			{ 'digitalRuleSetId': digitalRuleSetId },
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
	 * Delete dialer DNC list
	 * 
	 * @param {String} dncListId DncList ID
	 */
	deleteOutboundDnclist(dncListId) { 
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null) {
			throw 'Missing the required parameter "dncListId" when calling deleteOutboundDnclist';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/dnclists/{dncListId}', 
			'DELETE', 
			{ 'dncListId': dncListId },
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
	 * Deletes all or expired custom exclusion column entries from a DNC list.
	 * This operation is only for Internal DNC lists of custom exclusion column entries
	 * @param {String} dncListId DncList ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.expiredOnly Set to true to only remove DNC entries that are expired (default to false)
	 */
	deleteOutboundDnclistCustomexclusioncolumns(dncListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null) {
			throw 'Missing the required parameter "dncListId" when calling deleteOutboundDnclistCustomexclusioncolumns';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/dnclists/{dncListId}/customexclusioncolumns', 
			'DELETE', 
			{ 'dncListId': dncListId },
			{ 'expiredOnly': opts['expiredOnly'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Deletes all or expired email addresses from a DNC list.
	 * This operation is Only for Internal DNC lists of email addresses
	 * @param {String} dncListId DncList ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.expiredOnly Set to true to only remove DNC entries that are expired (default to false)
	 */
	deleteOutboundDnclistEmailaddresses(dncListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null) {
			throw 'Missing the required parameter "dncListId" when calling deleteOutboundDnclistEmailaddresses';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/dnclists/{dncListId}/emailaddresses', 
			'DELETE', 
			{ 'dncListId': dncListId },
			{ 'expiredOnly': opts['expiredOnly'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Deletes all or expired phone numbers from a DNC list.
	 * This operation is Only for Internal DNC lists of phone numbers
	 * @param {String} dncListId DncList ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.expiredOnly Set to true to only remove DNC entries that are expired (default to false)
	 */
	deleteOutboundDnclistPhonenumbers(dncListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null) {
			throw 'Missing the required parameter "dncListId" when calling deleteOutboundDnclistPhonenumbers';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/dnclists/{dncListId}/phonenumbers', 
			'DELETE', 
			{ 'dncListId': dncListId },
			{ 'expiredOnly': opts['expiredOnly'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete an Outbound Messaging Campaign
	 * 
	 * @param {String} messagingCampaignId The Messaging Campaign ID
	 */
	deleteOutboundMessagingcampaign(messagingCampaignId) { 
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null) {
			throw 'Missing the required parameter "messagingCampaignId" when calling deleteOutboundMessagingcampaign';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/messagingcampaigns/{messagingCampaignId}', 
			'DELETE', 
			{ 'messagingCampaignId': messagingCampaignId },
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
	 * Reset messaging campaign progress and recycle the messaging campaign
	 * 
	 * @param {String} messagingCampaignId The Messaging Campaign ID
	 */
	deleteOutboundMessagingcampaignProgress(messagingCampaignId) { 
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null) {
			throw 'Missing the required parameter "messagingCampaignId" when calling deleteOutboundMessagingcampaignProgress';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/messagingcampaigns/{messagingCampaignId}/progress', 
			'DELETE', 
			{ 'messagingCampaignId': messagingCampaignId },
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
	 * Delete a Rule Set.
	 * 
	 * @param {String} ruleSetId Rule Set ID
	 */
	deleteOutboundRuleset(ruleSetId) { 
		// verify the required parameter 'ruleSetId' is set
		if (ruleSetId === undefined || ruleSetId === null) {
			throw 'Missing the required parameter "ruleSetId" when calling deleteOutboundRuleset';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/rulesets/{ruleSetId}', 
			'DELETE', 
			{ 'ruleSetId': ruleSetId },
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
	 * Delete a dialer campaign schedule.
	 * 
	 * @param {String} campaignId Campaign ID
	 */
	deleteOutboundSchedulesCampaign(campaignId) { 
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null) {
			throw 'Missing the required parameter "campaignId" when calling deleteOutboundSchedulesCampaign';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/schedules/campaigns/{campaignId}', 
			'DELETE', 
			{ 'campaignId': campaignId },
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
	 * Delete an email campaign schedule.
	 * 
	 * @param {String} emailCampaignId Email Campaign ID
	 */
	deleteOutboundSchedulesEmailcampaign(emailCampaignId) { 
		// verify the required parameter 'emailCampaignId' is set
		if (emailCampaignId === undefined || emailCampaignId === null) {
			throw 'Missing the required parameter "emailCampaignId" when calling deleteOutboundSchedulesEmailcampaign';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/schedules/emailcampaigns/{emailCampaignId}', 
			'DELETE', 
			{ 'emailCampaignId': emailCampaignId },
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
	 * Delete a messaging campaign schedule.
	 * 
	 * @param {String} messagingCampaignId Messaging Campaign ID
	 */
	deleteOutboundSchedulesMessagingcampaign(messagingCampaignId) { 
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null) {
			throw 'Missing the required parameter "messagingCampaignId" when calling deleteOutboundSchedulesMessagingcampaign';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/schedules/messagingcampaigns/{messagingCampaignId}', 
			'DELETE', 
			{ 'messagingCampaignId': messagingCampaignId },
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
	 * Delete a dialer sequence schedule.
	 * 
	 * @param {String} sequenceId Sequence ID
	 */
	deleteOutboundSchedulesSequence(sequenceId) { 
		// verify the required parameter 'sequenceId' is set
		if (sequenceId === undefined || sequenceId === null) {
			throw 'Missing the required parameter "sequenceId" when calling deleteOutboundSchedulesSequence';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/schedules/sequences/{sequenceId}', 
			'DELETE', 
			{ 'sequenceId': sequenceId },
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
	 * Delete a dialer campaign sequence.
	 * 
	 * @param {String} sequenceId Campaign Sequence ID
	 */
	deleteOutboundSequence(sequenceId) { 
		// verify the required parameter 'sequenceId' is set
		if (sequenceId === undefined || sequenceId === null) {
			throw 'Missing the required parameter "sequenceId" when calling deleteOutboundSequence';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/sequences/{sequenceId}', 
			'DELETE', 
			{ 'sequenceId': sequenceId },
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
	 * Get attempt limits
	 * 
	 * @param {String} attemptLimitsId Attempt limits ID
	 */
	getOutboundAttemptlimit(attemptLimitsId) { 
		// verify the required parameter 'attemptLimitsId' is set
		if (attemptLimitsId === undefined || attemptLimitsId === null) {
			throw 'Missing the required parameter "attemptLimitsId" when calling getOutboundAttemptlimit';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/attemptlimits/{attemptLimitsId}', 
			'GET', 
			{ 'attemptLimitsId': attemptLimitsId },
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
	 * Query attempt limits list
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size. The max that will be returned is 100. (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Boolean} opts.allowEmptyResult Whether to return an empty page when there are no results for that page (default to false)
	 * @param {Object} opts.filterType Filter type (default to Prefix)
	 * @param {String} opts.name Name
	 * @param {String} opts.sortBy Sort by
	 * @param {Object} opts.sortOrder Sort order (default to a)
	 */
	getOutboundAttemptlimits(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/attemptlimits', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'allowEmptyResult': opts['allowEmptyResult'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get callable time set
	 * 
	 * @param {String} callableTimeSetId Callable Time Set ID
	 */
	getOutboundCallabletimeset(callableTimeSetId) { 
		// verify the required parameter 'callableTimeSetId' is set
		if (callableTimeSetId === undefined || callableTimeSetId === null) {
			throw 'Missing the required parameter "callableTimeSetId" when calling getOutboundCallabletimeset';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/callabletimesets/{callableTimeSetId}', 
			'GET', 
			{ 'callableTimeSetId': callableTimeSetId },
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
	 * Query callable time set list
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size. The max that will be returned is 100. (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Boolean} opts.allowEmptyResult Whether to return an empty page when there are no results for that page (default to false)
	 * @param {Object} opts.filterType Filter type (default to Prefix)
	 * @param {String} opts.name Name
	 * @param {String} opts.sortBy Sort by
	 * @param {Object} opts.sortOrder Sort order (default to a)
	 */
	getOutboundCallabletimesets(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/callabletimesets', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'allowEmptyResult': opts['allowEmptyResult'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a dialer call analysis response set.
	 * 
	 * @param {String} callAnalysisSetId Call Analysis Response Set ID
	 */
	getOutboundCallanalysisresponseset(callAnalysisSetId) { 
		// verify the required parameter 'callAnalysisSetId' is set
		if (callAnalysisSetId === undefined || callAnalysisSetId === null) {
			throw 'Missing the required parameter "callAnalysisSetId" when calling getOutboundCallanalysisresponseset';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}', 
			'GET', 
			{ 'callAnalysisSetId': callAnalysisSetId },
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
	 * Query a list of dialer call analysis response sets.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size. The max that will be returned is 100. (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Boolean} opts.allowEmptyResult Whether to return an empty page when there are no results for that page (default to false)
	 * @param {Object} opts.filterType Filter type (default to Prefix)
	 * @param {String} opts.name Name
	 * @param {String} opts.sortBy Sort by
	 * @param {Object} opts.sortOrder Sort order (default to a)
	 */
	getOutboundCallanalysisresponsesets(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/callanalysisresponsesets', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'allowEmptyResult': opts['allowEmptyResult'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get dialer campaign.
	 * 
	 * @param {String} campaignId Campaign ID
	 */
	getOutboundCampaign(campaignId) { 
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null) {
			throw 'Missing the required parameter "campaignId" when calling getOutboundCampaign';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/{campaignId}', 
			'GET', 
			{ 'campaignId': campaignId },
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
	 * Get a preview of how agents will be mapped to this campaign's contact list.
	 * 
	 * @param {String} campaignId Campaign ID
	 */
	getOutboundCampaignAgentownedmappingpreviewResults(campaignId) { 
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null) {
			throw 'Missing the required parameter "campaignId" when calling getOutboundCampaignAgentownedmappingpreviewResults';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/{campaignId}/agentownedmappingpreview/results', 
			'GET', 
			{ 'campaignId': campaignId },
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
	 * Get campaign diagnostics
	 * 
	 * @param {String} campaignId Campaign ID
	 */
	getOutboundCampaignDiagnostics(campaignId) { 
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null) {
			throw 'Missing the required parameter "campaignId" when calling getOutboundCampaignDiagnostics';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/{campaignId}/diagnostics', 
			'GET', 
			{ 'campaignId': campaignId },
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
	 * Get dialer campaign interactions.
	 * 
	 * @param {String} campaignId Campaign ID
	 */
	getOutboundCampaignInteractions(campaignId) { 
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null) {
			throw 'Missing the required parameter "campaignId" when calling getOutboundCampaignInteractions';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/{campaignId}/interactions', 
			'GET', 
			{ 'campaignId': campaignId },
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
	 * Get campaign progress
	 * 
	 * @param {String} campaignId Campaign ID
	 */
	getOutboundCampaignProgress(campaignId) { 
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null) {
			throw 'Missing the required parameter "campaignId" when calling getOutboundCampaignProgress';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/{campaignId}/progress', 
			'GET', 
			{ 'campaignId': campaignId },
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
	 * Get statistics about a Dialer Campaign
	 * 
	 * @param {String} campaignId Campaign ID
	 */
	getOutboundCampaignStats(campaignId) { 
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null) {
			throw 'Missing the required parameter "campaignId" when calling getOutboundCampaignStats';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/{campaignId}/stats', 
			'GET', 
			{ 'campaignId': campaignId },
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
	 * Get Campaign Rule
	 * 
	 * @param {String} campaignRuleId Campaign Rule ID
	 */
	getOutboundCampaignrule(campaignRuleId) { 
		// verify the required parameter 'campaignRuleId' is set
		if (campaignRuleId === undefined || campaignRuleId === null) {
			throw 'Missing the required parameter "campaignRuleId" when calling getOutboundCampaignrule';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaignrules/{campaignRuleId}', 
			'GET', 
			{ 'campaignRuleId': campaignRuleId },
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
	 * Query Campaign Rule list
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size. The max that will be returned is 100. (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Boolean} opts.allowEmptyResult Whether to return an empty page when there are no results for that page (default to false)
	 * @param {Object} opts.filterType Filter type (default to Prefix)
	 * @param {String} opts.name Name
	 * @param {String} opts.sortBy Sort by
	 * @param {Object} opts.sortOrder Sort order (default to a)
	 */
	getOutboundCampaignrules(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/campaignrules', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'allowEmptyResult': opts['allowEmptyResult'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Query a list of dialer campaigns.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size. The max that will be returned is 100. (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.filterType Filter type (default to Prefix)
	 * @param {String} opts.name Name
	 * @param {Array.<String>} opts.id id
	 * @param {String} opts.contactListId Contact List ID
	 * @param {String} opts.dncListIds DNC list ID
	 * @param {String} opts.distributionQueueId Distribution queue ID
	 * @param {String} opts.edgeGroupId Edge group ID
	 * @param {String} opts.callAnalysisResponseSetId Call analysis response set ID
	 * @param {Array.<String>} opts.divisionId Division ID(s)
	 * @param {String} opts.sortBy Sort by
	 * @param {Object} opts.sortOrder Sort order (default to a)
	 */
	getOutboundCampaigns(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'contactListId': opts['contactListId'],'dncListIds': opts['dncListIds'],'distributionQueueId': opts['distributionQueueId'],'edgeGroupId': opts['edgeGroupId'],'callAnalysisResponseSetId': opts['callAnalysisResponseSetId'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi'),'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Query across all types of campaigns by division
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Array.<String>} opts.id Campaign ID(s)
	 * @param {String} opts.name Campaign name(s)
	 * @param {Array.<String>} opts.divisionId Division ID(s)
	 * @param {Array.<String>} opts.mediaType Media type(s)
	 * @param {Object} opts.sortOrder Sort order (default to a)
	 */
	getOutboundCampaignsAll(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/all', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'name': opts['name'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi'),'mediaType': this.apiClient.buildCollectionParam(opts['mediaType'], 'multi'),'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Query across all types of campaigns
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Array.<String>} opts.id Campaign ID(s)
	 * @param {String} opts.name Campaign name(s)
	 * @param {Array.<String>} opts.divisionId Division ID(s)
	 * @param {Array.<String>} opts.mediaType Media type(s)
	 * @param {Object} opts.sortOrder Sort order (default to a)
	 */
	getOutboundCampaignsAllDivisionviews(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/all/divisionviews', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'name': opts['name'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi'),'mediaType': this.apiClient.buildCollectionParam(opts['mediaType'], 'multi'),'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a basic Campaign information object
	 * This returns a simplified version of a Campaign, consisting of name and division.
	 * @param {String} campaignId Campaign ID
	 */
	getOutboundCampaignsDivisionview(campaignId) { 
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null) {
			throw 'Missing the required parameter "campaignId" when calling getOutboundCampaignsDivisionview';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/divisionviews/{campaignId}', 
			'GET', 
			{ 'campaignId': campaignId },
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
	 * Query a list of basic Campaign information objects
	 * This returns a simplified version of a Campaign, consisting of name and division.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size. The max that will be returned is 100. (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.filterType Filter type (default to Prefix)
	 * @param {String} opts.name Name
	 * @param {Array.<String>} opts.id id
	 * @param {String} opts.sortBy Sort by
	 * @param {Object} opts.sortOrder Sort order (default to a)
	 */
	getOutboundCampaignsDivisionviews(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/divisionviews', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a dialer contact list.
	 * 
	 * @param {String} contactListId ContactList ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeImportStatus Import status (default to false)
	 * @param {Boolean} opts.includeSize Include size (default to false)
	 */
	getOutboundContactlist(contactListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null) {
			throw 'Missing the required parameter "contactListId" when calling getOutboundContactlist';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/{contactListId}', 
			'GET', 
			{ 'contactListId': contactListId },
			{ 'includeImportStatus': opts['includeImportStatus'],'includeSize': opts['includeSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a contact.
	 * 
	 * @param {String} contactListId Contact List ID
	 * @param {String} contactId Contact ID
	 */
	getOutboundContactlistContact(contactListId, contactId) { 
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null) {
			throw 'Missing the required parameter "contactListId" when calling getOutboundContactlistContact';
		}
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null) {
			throw 'Missing the required parameter "contactId" when calling getOutboundContactlistContact';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}', 
			'GET', 
			{ 'contactListId': contactListId,'contactId': contactId },
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
	 * Get the URI of a contact list export.
	 * 
	 * @param {String} contactListId ContactList ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.download Redirect to download uri (default to false)
	 */
	getOutboundContactlistExport(contactListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null) {
			throw 'Missing the required parameter "contactListId" when calling getOutboundContactlistExport';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/{contactListId}/export', 
			'GET', 
			{ 'contactListId': contactListId },
			{ 'download': opts['download'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get dialer contactList import status.
	 * 
	 * @param {String} contactListId ContactList ID
	 */
	getOutboundContactlistImportstatus(contactListId) { 
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null) {
			throw 'Missing the required parameter "contactListId" when calling getOutboundContactlistImportstatus';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/{contactListId}/importstatus', 
			'GET', 
			{ 'contactListId': contactListId },
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
	 * Preview the result of applying Automatic Time Zone Mapping to a contact list
	 * 
	 * @param {String} contactListId ContactList ID
	 */
	getOutboundContactlistTimezonemappingpreview(contactListId) { 
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null) {
			throw 'Missing the required parameter "contactListId" when calling getOutboundContactlistTimezonemappingpreview';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/{contactListId}/timezonemappingpreview', 
			'GET', 
			{ 'contactListId': contactListId },
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
	 * Get Contact list filter
	 * 
	 * @param {String} contactListFilterId Contact List Filter ID
	 */
	getOutboundContactlistfilter(contactListFilterId) { 
		// verify the required parameter 'contactListFilterId' is set
		if (contactListFilterId === undefined || contactListFilterId === null) {
			throw 'Missing the required parameter "contactListFilterId" when calling getOutboundContactlistfilter';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlistfilters/{contactListFilterId}', 
			'GET', 
			{ 'contactListFilterId': contactListFilterId },
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
	 * Query Contact list filters
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size. The max that will be returned is 100. (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Boolean} opts.allowEmptyResult Whether to return an empty page when there are no results for that page (default to false)
	 * @param {Object} opts.filterType Filter type (default to Prefix)
	 * @param {String} opts.name Name
	 * @param {String} opts.sortBy Sort by
	 * @param {Object} opts.sortOrder Sort order (default to a)
	 * @param {String} opts.contactListId Contact List ID
	 */
	getOutboundContactlistfilters(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlistfilters', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'allowEmptyResult': opts['allowEmptyResult'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'contactListId': opts['contactListId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Query a list of contact lists.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeImportStatus Include import status (default to false)
	 * @param {Boolean} opts.includeSize Include size (default to false)
	 * @param {Number} opts.pageSize Page size. The max that will be returned is 100. (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Boolean} opts.allowEmptyResult Whether to return an empty page when there are no results for that page (default to false)
	 * @param {Object} opts.filterType Filter type (default to Prefix)
	 * @param {String} opts.name Name
	 * @param {Array.<String>} opts.id id
	 * @param {Array.<String>} opts.divisionId Division ID(s)
	 * @param {String} opts.sortBy Sort by
	 * @param {Object} opts.sortOrder Sort order (default to a)
	 */
	getOutboundContactlists(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists', 
			'GET', 
			{  },
			{ 'includeImportStatus': opts['includeImportStatus'],'includeSize': opts['includeSize'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'allowEmptyResult': opts['allowEmptyResult'],'filterType': opts['filterType'],'name': opts['name'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi'),'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a basic ContactList information object
	 * This returns a simplified version of a ContactList, consisting of the name, division, column names, phone columns, import status, and size.
	 * @param {String} contactListId Contactlist ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeImportStatus Include import status (default to false)
	 * @param {Boolean} opts.includeSize Include size (default to false)
	 */
	getOutboundContactlistsDivisionview(contactListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null) {
			throw 'Missing the required parameter "contactListId" when calling getOutboundContactlistsDivisionview';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/divisionviews/{contactListId}', 
			'GET', 
			{ 'contactListId': contactListId },
			{ 'includeImportStatus': opts['includeImportStatus'],'includeSize': opts['includeSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Query a list of simplified contact list objects.
	 * This return a simplified version of contact lists, consisting of the name, division, column names, phone columns, import status, and size.
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeImportStatus Include import status (default to false)
	 * @param {Boolean} opts.includeSize Include size (default to false)
	 * @param {Number} opts.pageSize Page size. The max that will be returned is 100. (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.filterType Filter type (default to Prefix)
	 * @param {String} opts.name Name
	 * @param {Array.<String>} opts.id id
	 * @param {String} opts.sortBy Sort by
	 * @param {Object} opts.sortOrder Sort order (default to a)
	 */
	getOutboundContactlistsDivisionviews(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/divisionviews', 
			'GET', 
			{  },
			{ 'includeImportStatus': opts['includeImportStatus'],'includeSize': opts['includeSize'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get an Outbound Digital Rule Set
	 * 
	 * @param {String} digitalRuleSetId The Digital Rule Set ID
	 */
	getOutboundDigitalruleset(digitalRuleSetId) { 
		// verify the required parameter 'digitalRuleSetId' is set
		if (digitalRuleSetId === undefined || digitalRuleSetId === null) {
			throw 'Missing the required parameter "digitalRuleSetId" when calling getOutboundDigitalruleset';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/digitalrulesets/{digitalRuleSetId}', 
			'GET', 
			{ 'digitalRuleSetId': digitalRuleSetId },
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
	 * Query a list of Outbound Digital Rule Sets
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size. The max that will be returned is 100. (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortBy The field to sort by (default to name)
	 * @param {Object} opts.sortOrder The direction to sort (default to ascending)
	 * @param {String} opts.name Name
	 * @param {Array.<String>} opts.id A list of digital rule set ids to bulk fetch
	 */
	getOutboundDigitalrulesets(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/digitalrulesets', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get dialer DNC list
	 * 
	 * @param {String} dncListId DncList ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeImportStatus Import status (default to false)
	 * @param {Boolean} opts.includeSize Include size (default to false)
	 */
	getOutboundDnclist(dncListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null) {
			throw 'Missing the required parameter "dncListId" when calling getOutboundDnclist';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/dnclists/{dncListId}', 
			'GET', 
			{ 'dncListId': dncListId },
			{ 'includeImportStatus': opts['includeImportStatus'],'includeSize': opts['includeSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the URI of a DNC list export.
	 * 
	 * @param {String} dncListId DncList ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.download Redirect to download uri (default to false)
	 */
	getOutboundDnclistExport(dncListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null) {
			throw 'Missing the required parameter "dncListId" when calling getOutboundDnclistExport';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/dnclists/{dncListId}/export', 
			'GET', 
			{ 'dncListId': dncListId },
			{ 'download': opts['download'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get dialer dncList import status.
	 * 
	 * @param {String} dncListId DncList ID
	 */
	getOutboundDnclistImportstatus(dncListId) { 
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null) {
			throw 'Missing the required parameter "dncListId" when calling getOutboundDnclistImportstatus';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/dnclists/{dncListId}/importstatus', 
			'GET', 
			{ 'dncListId': dncListId },
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
	 * Query dialer DNC lists
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeImportStatus Import status (default to false)
	 * @param {Boolean} opts.includeSize Include size (default to false)
	 * @param {Number} opts.pageSize Page size. The max that will be returned is 100. (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Boolean} opts.allowEmptyResult Whether to return an empty page when there are no results for that page (default to false)
	 * @param {Object} opts.filterType Filter type (default to Prefix)
	 * @param {String} opts.name Name
	 * @param {Object} opts.dncSourceType DncSourceType
	 * @param {Array.<String>} opts.divisionId Division ID(s)
	 * @param {String} opts.sortBy Sort by
	 * @param {Object} opts.sortOrder Sort order
	 */
	getOutboundDnclists(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/dnclists', 
			'GET', 
			{  },
			{ 'includeImportStatus': opts['includeImportStatus'],'includeSize': opts['includeSize'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'allowEmptyResult': opts['allowEmptyResult'],'filterType': opts['filterType'],'name': opts['name'],'dncSourceType': opts['dncSourceType'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi'),'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a basic DncList information object
	 * This returns a simplified version of a DncList, consisting of the name, division, import status, and size.
	 * @param {String} dncListId Dnclist ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeImportStatus Include import status (default to false)
	 * @param {Boolean} opts.includeSize Include size (default to false)
	 */
	getOutboundDnclistsDivisionview(dncListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null) {
			throw 'Missing the required parameter "dncListId" when calling getOutboundDnclistsDivisionview';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/dnclists/divisionviews/{dncListId}', 
			'GET', 
			{ 'dncListId': dncListId },
			{ 'includeImportStatus': opts['includeImportStatus'],'includeSize': opts['includeSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Query a list of simplified dnc list objects.
	 * This return a simplified version of dnc lists, consisting of the name, division, import status, and size.
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeImportStatus Include import status (default to false)
	 * @param {Boolean} opts.includeSize Include size (default to false)
	 * @param {Number} opts.pageSize Page size. The max that will be returned is 100. (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.filterType Filter type (default to Prefix)
	 * @param {String} opts.name Name
	 * @param {Object} opts.dncSourceType DncSourceType
	 * @param {Array.<String>} opts.id id
	 * @param {String} opts.sortBy Sort by
	 * @param {Object} opts.sortOrder Sort order (default to a)
	 */
	getOutboundDnclistsDivisionviews(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/dnclists/divisionviews', 
			'GET', 
			{  },
			{ 'includeImportStatus': opts['includeImportStatus'],'includeSize': opts['includeSize'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'dncSourceType': opts['dncSourceType'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get Dialer Event
	 * 
	 * @param {String} eventId Event Log ID
	 */
	getOutboundEvent(eventId) { 
		// verify the required parameter 'eventId' is set
		if (eventId === undefined || eventId === null) {
			throw 'Missing the required parameter "eventId" when calling getOutboundEvent';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/events/{eventId}', 
			'GET', 
			{ 'eventId': eventId },
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
	 * Query Event Logs
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.filterType Filter type (default to Prefix)
	 * @param {String} opts.category Category
	 * @param {String} opts.level Level
	 * @param {String} opts.sortBy Sort by
	 * @param {Object} opts.sortOrder Sort order (default to a)
	 */
	getOutboundEvents(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/events', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'category': opts['category'],'level': opts['level'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get an Outbound Messaging Campaign
	 * 
	 * @param {String} messagingCampaignId The Messaging Campaign ID
	 */
	getOutboundMessagingcampaign(messagingCampaignId) { 
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null) {
			throw 'Missing the required parameter "messagingCampaignId" when calling getOutboundMessagingcampaign';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/messagingcampaigns/{messagingCampaignId}', 
			'GET', 
			{ 'messagingCampaignId': messagingCampaignId },
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
	 * Get messaging campaign diagnostics
	 * 
	 * @param {String} messagingCampaignId The Messaging Campaign ID
	 */
	getOutboundMessagingcampaignDiagnostics(messagingCampaignId) { 
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null) {
			throw 'Missing the required parameter "messagingCampaignId" when calling getOutboundMessagingcampaignDiagnostics';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/messagingcampaigns/{messagingCampaignId}/diagnostics', 
			'GET', 
			{ 'messagingCampaignId': messagingCampaignId },
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
	 * Get messaging campaign's progress
	 * 
	 * @param {String} messagingCampaignId The Messaging Campaign ID
	 */
	getOutboundMessagingcampaignProgress(messagingCampaignId) { 
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null) {
			throw 'Missing the required parameter "messagingCampaignId" when calling getOutboundMessagingcampaignProgress';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/messagingcampaigns/{messagingCampaignId}/progress', 
			'GET', 
			{ 'messagingCampaignId': messagingCampaignId },
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
	 * Query a list of Messaging Campaigns
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size. The max that will be returned is 100. (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortBy The field to sort by (default to name)
	 * @param {Object} opts.sortOrder The direction to sort (default to ascending)
	 * @param {String} opts.name Name
	 * @param {String} opts.contactListId Contact List ID
	 * @param {Array.<String>} opts.divisionId Division ID(s)
	 * @param {Object} opts.type Campaign Type
	 * @param {String} opts.senderSmsPhoneNumber Sender SMS Phone Number
	 * @param {Array.<String>} opts.id A list of messaging campaign ids to bulk fetch
	 */
	getOutboundMessagingcampaigns(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/messagingcampaigns', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'],'contactListId': opts['contactListId'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi'),'type': opts['type'],'senderSmsPhoneNumber': opts['senderSmsPhoneNumber'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a basic Messaging Campaign information object
	 * This returns a simplified version of a Messaging Campaign, consisting of id, name, and division.
	 * @param {String} messagingCampaignId The Messaging Campaign ID
	 */
	getOutboundMessagingcampaignsDivisionview(messagingCampaignId) { 
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null) {
			throw 'Missing the required parameter "messagingCampaignId" when calling getOutboundMessagingcampaignsDivisionview';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/messagingcampaigns/divisionviews/{messagingCampaignId}', 
			'GET', 
			{ 'messagingCampaignId': messagingCampaignId },
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
	 * Query a list of basic Messaging Campaign information objects
	 * This returns a listing of simplified Messaging Campaigns, each consisting of id, name, and division.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size. The max that will be returned is 100. (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder The direction to sort (default to a)
	 * @param {String} opts.name Name
	 * @param {Object} opts.type Campaign Type
	 * @param {Array.<String>} opts.id id
	 * @param {String} opts.senderSmsPhoneNumber Sender SMS Phone Number
	 */
	getOutboundMessagingcampaignsDivisionviews(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/messagingcampaigns/divisionviews', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'name': opts['name'],'type': opts['type'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'senderSmsPhoneNumber': opts['senderSmsPhoneNumber'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a Rule Set by ID.
	 * 
	 * @param {String} ruleSetId Rule Set ID
	 */
	getOutboundRuleset(ruleSetId) { 
		// verify the required parameter 'ruleSetId' is set
		if (ruleSetId === undefined || ruleSetId === null) {
			throw 'Missing the required parameter "ruleSetId" when calling getOutboundRuleset';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/rulesets/{ruleSetId}', 
			'GET', 
			{ 'ruleSetId': ruleSetId },
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
	 * Query a list of Rule Sets.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size. The max that will be returned is 100. (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Boolean} opts.allowEmptyResult Whether to return an empty page when there are no results for that page (default to false)
	 * @param {Object} opts.filterType Filter type (default to Prefix)
	 * @param {String} opts.name Name
	 * @param {String} opts.sortBy Sort by
	 * @param {Object} opts.sortOrder Sort order (default to a)
	 */
	getOutboundRulesets(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/rulesets', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'allowEmptyResult': opts['allowEmptyResult'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a dialer campaign schedule.
	 * 
	 * @param {String} campaignId Campaign ID
	 */
	getOutboundSchedulesCampaign(campaignId) { 
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null) {
			throw 'Missing the required parameter "campaignId" when calling getOutboundSchedulesCampaign';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/schedules/campaigns/{campaignId}', 
			'GET', 
			{ 'campaignId': campaignId },
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
	 * Query for a list of dialer campaign schedules.
	 * 
	 */
	getOutboundSchedulesCampaigns() { 

		return this.apiClient.callApi(
			'/api/v2/outbound/schedules/campaigns', 
			'GET', 
			{  },
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
	 * Get an email campaign schedule.
	 * 
	 * @param {String} emailCampaignId Email Campaign ID
	 */
	getOutboundSchedulesEmailcampaign(emailCampaignId) { 
		// verify the required parameter 'emailCampaignId' is set
		if (emailCampaignId === undefined || emailCampaignId === null) {
			throw 'Missing the required parameter "emailCampaignId" when calling getOutboundSchedulesEmailcampaign';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/schedules/emailcampaigns/{emailCampaignId}', 
			'GET', 
			{ 'emailCampaignId': emailCampaignId },
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
	 * Query for a list of email campaign schedules.
	 * 
	 */
	getOutboundSchedulesEmailcampaigns() { 

		return this.apiClient.callApi(
			'/api/v2/outbound/schedules/emailcampaigns', 
			'GET', 
			{  },
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
	 * Get a messaging campaign schedule.
	 * 
	 * @param {String} messagingCampaignId Messaging Campaign ID
	 */
	getOutboundSchedulesMessagingcampaign(messagingCampaignId) { 
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null) {
			throw 'Missing the required parameter "messagingCampaignId" when calling getOutboundSchedulesMessagingcampaign';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/schedules/messagingcampaigns/{messagingCampaignId}', 
			'GET', 
			{ 'messagingCampaignId': messagingCampaignId },
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
	 * Query for a list of messaging campaign schedules.
	 * 
	 */
	getOutboundSchedulesMessagingcampaigns() { 

		return this.apiClient.callApi(
			'/api/v2/outbound/schedules/messagingcampaigns', 
			'GET', 
			{  },
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
	 * Get a dialer sequence schedule.
	 * 
	 * @param {String} sequenceId Sequence ID
	 */
	getOutboundSchedulesSequence(sequenceId) { 
		// verify the required parameter 'sequenceId' is set
		if (sequenceId === undefined || sequenceId === null) {
			throw 'Missing the required parameter "sequenceId" when calling getOutboundSchedulesSequence';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/schedules/sequences/{sequenceId}', 
			'GET', 
			{ 'sequenceId': sequenceId },
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
	 * Query for a list of dialer sequence schedules.
	 * 
	 */
	getOutboundSchedulesSequences() { 

		return this.apiClient.callApi(
			'/api/v2/outbound/schedules/sequences', 
			'GET', 
			{  },
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
	 * Get a dialer campaign sequence.
	 * 
	 * @param {String} sequenceId Campaign Sequence ID
	 */
	getOutboundSequence(sequenceId) { 
		// verify the required parameter 'sequenceId' is set
		if (sequenceId === undefined || sequenceId === null) {
			throw 'Missing the required parameter "sequenceId" when calling getOutboundSequence';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/sequences/{sequenceId}', 
			'GET', 
			{ 'sequenceId': sequenceId },
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
	 * Query a list of dialer campaign sequences.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size. The max that will be returned is 100. (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Boolean} opts.allowEmptyResult Whether to return an empty page when there are no results for that page (default to false)
	 * @param {Object} opts.filterType Filter type (default to Prefix)
	 * @param {String} opts.name Name
	 * @param {String} opts.sortBy Sort by
	 * @param {Object} opts.sortOrder Sort order (default to a)
	 */
	getOutboundSequences(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/sequences', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'allowEmptyResult': opts['allowEmptyResult'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the outbound settings for this organization
	 * 
	 */
	getOutboundSettings() { 

		return this.apiClient.callApi(
			'/api/v2/outbound/settings', 
			'GET', 
			{  },
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
	 * Get the Dialer wrap up code mapping.
	 * 
	 */
	getOutboundWrapupcodemappings() { 

		return this.apiClient.callApi(
			'/api/v2/outbound/wrapupcodemappings', 
			'GET', 
			{  },
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
	 * Add entries to or delete entries from a DNC list.
	 * Only Internal DNC lists may be deleted from
	 * @param {String} dncListId DncList ID
	 * @param {Object} body DNC Custom exclusion column entries
	 */
	patchOutboundDnclistCustomexclusioncolumns(dncListId, body) { 
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null) {
			throw 'Missing the required parameter "dncListId" when calling patchOutboundDnclistCustomexclusioncolumns';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchOutboundDnclistCustomexclusioncolumns';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/dnclists/{dncListId}/customexclusioncolumns', 
			'PATCH', 
			{ 'dncListId': dncListId },
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
	 * Add emails to or Delete emails from a DNC list.
	 * Only Internal DNC lists may be added to or deleted from
	 * @param {String} dncListId DncList ID
	 * @param {Object} body DNC Emails
	 */
	patchOutboundDnclistEmailaddresses(dncListId, body) { 
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null) {
			throw 'Missing the required parameter "dncListId" when calling patchOutboundDnclistEmailaddresses';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchOutboundDnclistEmailaddresses';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/dnclists/{dncListId}/emailaddresses', 
			'PATCH', 
			{ 'dncListId': dncListId },
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
	 * Add numbers to or delete numbers from a DNC list.
	 * Only Internal DNC lists may be added to deleted from
	 * @param {String} dncListId DncList ID
	 * @param {Object} body DNC Phone Numbers
	 */
	patchOutboundDnclistPhonenumbers(dncListId, body) { 
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null) {
			throw 'Missing the required parameter "dncListId" when calling patchOutboundDnclistPhonenumbers';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchOutboundDnclistPhonenumbers';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/dnclists/{dncListId}/phonenumbers', 
			'PATCH', 
			{ 'dncListId': dncListId },
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
	 * Update the outbound settings for this organization
	 * 
	 * @param {Object} body outboundSettings
	 */
	patchOutboundSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchOutboundSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/settings', 
			'PATCH', 
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
	 * Create attempt limits
	 * 
	 * @param {Object} body AttemptLimits
	 */
	postOutboundAttemptlimits(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundAttemptlimits';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/attemptlimits', 
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
	 * Retrieves audits for dialer.
	 * 
	 * @param {Object} body AuditSearch
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.sortBy Sort by (default to entity.name)
	 * @param {String} opts.sortOrder Sort order (default to ascending)
	 * @param {Boolean} opts.facetsOnly Facets only (default to false)
	 */
	postOutboundAudits(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundAudits';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/audits', 
			'POST', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'facetsOnly': opts['facetsOnly'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create callable time set
	 * 
	 * @param {Object} body DialerCallableTimeSet
	 */
	postOutboundCallabletimesets(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundCallabletimesets';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/callabletimesets', 
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
	 * Create a dialer call analysis response set.
	 * 
	 * @param {Object} body ResponseSet
	 */
	postOutboundCallanalysisresponsesets(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundCallanalysisresponsesets';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/callanalysisresponsesets', 
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
	 * Initiate request for a preview of how agents will be mapped to this campaign's contact list.
	 * 
	 * @param {String} campaignId Campaign ID
	 */
	postOutboundCampaignAgentownedmappingpreview(campaignId) { 
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null) {
			throw 'Missing the required parameter "campaignId" when calling postOutboundCampaignAgentownedmappingpreview';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/{campaignId}/agentownedmappingpreview', 
			'POST', 
			{ 'campaignId': campaignId },
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
	 * Schedule a Callback for a Dialer Campaign (Deprecated)
	 * This endpoint is deprecated and may have unexpected results. Please use "/conversations/{conversationId}/participants/{participantId}/callbacks instead."
	 * @param {String} campaignId Campaign ID
	 * @param {Object} body ContactCallbackRequest
     	 * @deprecated
	 */
	postOutboundCampaignCallbackSchedule(campaignId, body) { 
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null) {
			throw 'Missing the required parameter "campaignId" when calling postOutboundCampaignCallbackSchedule';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundCampaignCallbackSchedule';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/{campaignId}/callback/schedule', 
			'POST', 
			{ 'campaignId': campaignId },
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
	 * Create Campaign Rule
	 * 
	 * @param {Object} body CampaignRule
	 */
	postOutboundCampaignrules(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundCampaignrules';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaignrules', 
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
	 * Create a campaign.
	 * 
	 * @param {Object} body Campaign
	 */
	postOutboundCampaigns(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundCampaigns';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns', 
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
	 * Get progress for a list of campaigns
	 * 
	 * @param {Array.<String>} body Campaign IDs
	 */
	postOutboundCampaignsProgress(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundCampaignsProgress';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/progress', 
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
	 * Deletes all contacts out of a list. All outstanding recalls or rule-scheduled callbacks for non-preview campaigns configured with the contactlist will be cancelled.
	 * 
	 * @param {String} contactListId Contact List ID
	 */
	postOutboundContactlistClear(contactListId) { 
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null) {
			throw 'Missing the required parameter "contactListId" when calling postOutboundContactlistClear';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/{contactListId}/clear', 
			'POST', 
			{ 'contactListId': contactListId },
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
	 * Add contacts to a contact list.
	 * 
	 * @param {String} contactListId Contact List ID
	 * @param {Array.<Object>} body Contact
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.priority Contact priority. True means the contact(s) will be dialed next; false means the contact will go to the end of the contact queue.
	 * @param {Boolean} opts.clearSystemData Clear system data. True means the system columns (attempts, callable status, etc) stored on the contact will be cleared if the contact already exists; false means they won't.
	 * @param {Boolean} opts.doNotQueue Do not queue. True means that updated contacts will not have their positions in the queue altered, so contacts that have already been dialed will not be redialed. For new contacts, this parameter has no effect; False means that updated contacts will be re-queued, according to the 'priority' parameter.
	 */
	postOutboundContactlistContacts(contactListId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null) {
			throw 'Missing the required parameter "contactListId" when calling postOutboundContactlistContacts';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundContactlistContacts';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/{contactListId}/contacts', 
			'POST', 
			{ 'contactListId': contactListId },
			{ 'priority': opts['priority'],'clearSystemData': opts['clearSystemData'],'doNotQueue': opts['doNotQueue'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get contacts from a contact list.
	 * 
	 * @param {String} contactListId Contact List ID
	 * @param {Array.<String>} body ContactIds to get.
	 */
	postOutboundContactlistContactsBulk(contactListId, body) { 
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null) {
			throw 'Missing the required parameter "contactListId" when calling postOutboundContactlistContactsBulk';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundContactlistContactsBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/{contactListId}/contacts/bulk', 
			'POST', 
			{ 'contactListId': contactListId },
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
	 * Initiate the export of a contact list.
	 * Returns 200 if received OK.
	 * @param {String} contactListId ContactList ID
	 */
	postOutboundContactlistExport(contactListId) { 
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null) {
			throw 'Missing the required parameter "contactListId" when calling postOutboundContactlistExport';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/{contactListId}/export', 
			'POST', 
			{ 'contactListId': contactListId },
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
	 * Create Contact List Filter
	 * 
	 * @param {Object} body ContactListFilter
	 */
	postOutboundContactlistfilters(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundContactlistfilters';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlistfilters', 
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
	 * Get a preview of the output of a contact list filter
	 * 
	 * @param {Object} body ContactListFilter
	 */
	postOutboundContactlistfiltersPreview(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundContactlistfiltersPreview';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlistfilters/preview', 
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
	 * Create a contact List.
	 * 
	 * @param {Object} body ContactList
	 */
	postOutboundContactlists(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundContactlists';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists', 
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
	 * Add phone numbers to a Dialer DNC list.
	 * 
	 * @param {String} conversationId Conversation ID
	 */
	postOutboundConversationDnc(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling postOutboundConversationDnc';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/conversations/{conversationId}/dnc', 
			'POST', 
			{ 'conversationId': conversationId },
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
	 * Create an Outbound Digital Rule Set
	 * 
	 * @param {Object} body Digital Rule Set
	 */
	postOutboundDigitalrulesets(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundDigitalrulesets';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/digitalrulesets', 
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
	 * Add email addresses to a DNC list.
	 * Only Internal DNC lists may be appended to
	 * @param {String} dncListId DncList ID
	 * @param {Array.<String>} body DNC email addresses
	 */
	postOutboundDnclistEmailaddresses(dncListId, body) { 
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null) {
			throw 'Missing the required parameter "dncListId" when calling postOutboundDnclistEmailaddresses';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundDnclistEmailaddresses';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/dnclists/{dncListId}/emailaddresses', 
			'POST', 
			{ 'dncListId': dncListId },
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
	 * Initiate the export of a dnc list.
	 * Returns 200 if received OK.
	 * @param {String} dncListId DncList ID
	 */
	postOutboundDnclistExport(dncListId) { 
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null) {
			throw 'Missing the required parameter "dncListId" when calling postOutboundDnclistExport';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/dnclists/{dncListId}/export', 
			'POST', 
			{ 'dncListId': dncListId },
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
	 * Add phone numbers to a DNC list.
	 * Only Internal DNC lists may be appended to
	 * @param {String} dncListId DncList ID
	 * @param {Array.<String>} body DNC Phone Numbers
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.expirationDateTime Expiration date for DNC phone numbers in yyyy-MM-ddTHH:mmZ format
	 */
	postOutboundDnclistPhonenumbers(dncListId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null) {
			throw 'Missing the required parameter "dncListId" when calling postOutboundDnclistPhonenumbers';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundDnclistPhonenumbers';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/dnclists/{dncListId}/phonenumbers', 
			'POST', 
			{ 'dncListId': dncListId },
			{ 'expirationDateTime': opts['expirationDateTime'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create dialer DNC list
	 * 
	 * @param {Object} body DncList
	 */
	postOutboundDnclists(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundDnclists';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/dnclists', 
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
	 * Create a Messaging Campaign
	 * 
	 * @param {Object} body Messaging Campaign
	 */
	postOutboundMessagingcampaigns(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundMessagingcampaigns';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/messagingcampaigns', 
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
	 * Get progress for a list of messaging campaigns
	 * 
	 * @param {Array.<String>} body Messaging Campaign IDs
	 */
	postOutboundMessagingcampaignsProgress(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundMessagingcampaignsProgress';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/messagingcampaigns/progress', 
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
	 * Create a Rule Set.
	 * 
	 * @param {Object} body RuleSet
	 */
	postOutboundRulesets(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundRulesets';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/rulesets', 
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
	 * Create a new campaign sequence.
	 * 
	 * @param {Object} body Organization
	 */
	postOutboundSequences(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundSequences';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/sequences', 
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
	 * Update attempt limits
	 * 
	 * @param {String} attemptLimitsId Attempt limits ID
	 * @param {Object} body AttemptLimits
	 */
	putOutboundAttemptlimit(attemptLimitsId, body) { 
		// verify the required parameter 'attemptLimitsId' is set
		if (attemptLimitsId === undefined || attemptLimitsId === null) {
			throw 'Missing the required parameter "attemptLimitsId" when calling putOutboundAttemptlimit';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundAttemptlimit';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/attemptlimits/{attemptLimitsId}', 
			'PUT', 
			{ 'attemptLimitsId': attemptLimitsId },
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
	 * Update callable time set
	 * 
	 * @param {String} callableTimeSetId Callable Time Set ID
	 * @param {Object} body DialerCallableTimeSet
	 */
	putOutboundCallabletimeset(callableTimeSetId, body) { 
		// verify the required parameter 'callableTimeSetId' is set
		if (callableTimeSetId === undefined || callableTimeSetId === null) {
			throw 'Missing the required parameter "callableTimeSetId" when calling putOutboundCallabletimeset';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundCallabletimeset';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/callabletimesets/{callableTimeSetId}', 
			'PUT', 
			{ 'callableTimeSetId': callableTimeSetId },
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
	 * Update a dialer call analysis response set.
	 * 
	 * @param {String} callAnalysisSetId Call Analysis Response Set ID
	 * @param {Object} body ResponseSet
	 */
	putOutboundCallanalysisresponseset(callAnalysisSetId, body) { 
		// verify the required parameter 'callAnalysisSetId' is set
		if (callAnalysisSetId === undefined || callAnalysisSetId === null) {
			throw 'Missing the required parameter "callAnalysisSetId" when calling putOutboundCallanalysisresponseset';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundCallanalysisresponseset';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}', 
			'PUT', 
			{ 'callAnalysisSetId': callAnalysisSetId },
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
	 * Update a campaign.
	 * 
	 * @param {String} campaignId Campaign ID
	 * @param {Object} body Campaign
	 */
	putOutboundCampaign(campaignId, body) { 
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null) {
			throw 'Missing the required parameter "campaignId" when calling putOutboundCampaign';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundCampaign';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/{campaignId}', 
			'PUT', 
			{ 'campaignId': campaignId },
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
	 * Send notification that an agent's state changed 
	 * New agent state.
	 * @param {String} campaignId Campaign ID
	 * @param {String} userId Agent's user ID
	 * @param {Object} body agent
	 */
	putOutboundCampaignAgent(campaignId, userId, body) { 
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null) {
			throw 'Missing the required parameter "campaignId" when calling putOutboundCampaignAgent';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling putOutboundCampaignAgent';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundCampaignAgent';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/{campaignId}/agents/{userId}', 
			'PUT', 
			{ 'campaignId': campaignId,'userId': userId },
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
	 * Update Campaign Rule
	 * 
	 * @param {String} campaignRuleId Campaign Rule ID
	 * @param {Object} body CampaignRule
	 */
	putOutboundCampaignrule(campaignRuleId, body) { 
		// verify the required parameter 'campaignRuleId' is set
		if (campaignRuleId === undefined || campaignRuleId === null) {
			throw 'Missing the required parameter "campaignRuleId" when calling putOutboundCampaignrule';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundCampaignrule';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaignrules/{campaignRuleId}', 
			'PUT', 
			{ 'campaignRuleId': campaignRuleId },
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
	 * Update a contact list.
	 * 
	 * @param {String} contactListId ContactList ID
	 * @param {Object} body ContactList
	 */
	putOutboundContactlist(contactListId, body) { 
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null) {
			throw 'Missing the required parameter "contactListId" when calling putOutboundContactlist';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundContactlist';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/{contactListId}', 
			'PUT', 
			{ 'contactListId': contactListId },
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
	 * Update a contact.
	 * 
	 * @param {String} contactListId Contact List ID
	 * @param {String} contactId Contact ID
	 * @param {Object} body Contact
	 */
	putOutboundContactlistContact(contactListId, contactId, body) { 
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null) {
			throw 'Missing the required parameter "contactListId" when calling putOutboundContactlistContact';
		}
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null) {
			throw 'Missing the required parameter "contactId" when calling putOutboundContactlistContact';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundContactlistContact';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}', 
			'PUT', 
			{ 'contactListId': contactListId,'contactId': contactId },
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
	 * Update Contact List Filter
	 * 
	 * @param {String} contactListFilterId Contact List Filter ID
	 * @param {Object} body ContactListFilter
	 */
	putOutboundContactlistfilter(contactListFilterId, body) { 
		// verify the required parameter 'contactListFilterId' is set
		if (contactListFilterId === undefined || contactListFilterId === null) {
			throw 'Missing the required parameter "contactListFilterId" when calling putOutboundContactlistfilter';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundContactlistfilter';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlistfilters/{contactListFilterId}', 
			'PUT', 
			{ 'contactListFilterId': contactListFilterId },
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
	 * Update an Outbound Digital Rule Set
	 * 
	 * @param {String} digitalRuleSetId The Digital Rule Set ID
	 * @param {Object} body Digital Rule Set
	 */
	putOutboundDigitalruleset(digitalRuleSetId, body) { 
		// verify the required parameter 'digitalRuleSetId' is set
		if (digitalRuleSetId === undefined || digitalRuleSetId === null) {
			throw 'Missing the required parameter "digitalRuleSetId" when calling putOutboundDigitalruleset';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundDigitalruleset';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/digitalrulesets/{digitalRuleSetId}', 
			'PUT', 
			{ 'digitalRuleSetId': digitalRuleSetId },
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
	 * Update dialer DNC list
	 * 
	 * @param {String} dncListId DncList ID
	 * @param {Object} body DncList
	 */
	putOutboundDnclist(dncListId, body) { 
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null) {
			throw 'Missing the required parameter "dncListId" when calling putOutboundDnclist';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundDnclist';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/dnclists/{dncListId}', 
			'PUT', 
			{ 'dncListId': dncListId },
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
	 * Update an Outbound Messaging Campaign
	 * 
	 * @param {String} messagingCampaignId The Messaging Campaign ID
	 * @param {Object} body MessagingCampaign
	 */
	putOutboundMessagingcampaign(messagingCampaignId, body) { 
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null) {
			throw 'Missing the required parameter "messagingCampaignId" when calling putOutboundMessagingcampaign';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundMessagingcampaign';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/messagingcampaigns/{messagingCampaignId}', 
			'PUT', 
			{ 'messagingCampaignId': messagingCampaignId },
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
	 * Update a Rule Set.
	 * 
	 * @param {String} ruleSetId Rule Set ID
	 * @param {Object} body RuleSet
	 */
	putOutboundRuleset(ruleSetId, body) { 
		// verify the required parameter 'ruleSetId' is set
		if (ruleSetId === undefined || ruleSetId === null) {
			throw 'Missing the required parameter "ruleSetId" when calling putOutboundRuleset';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundRuleset';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/rulesets/{ruleSetId}', 
			'PUT', 
			{ 'ruleSetId': ruleSetId },
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
	 * Update a new campaign schedule.
	 * 
	 * @param {String} campaignId Campaign ID
	 * @param {Object} body CampaignSchedule
	 */
	putOutboundSchedulesCampaign(campaignId, body) { 
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null) {
			throw 'Missing the required parameter "campaignId" when calling putOutboundSchedulesCampaign';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundSchedulesCampaign';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/schedules/campaigns/{campaignId}', 
			'PUT', 
			{ 'campaignId': campaignId },
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
	 * Update an email campaign schedule.
	 * 
	 * @param {String} emailCampaignId Email Campaign ID
	 * @param {Object} body EmailCampaignSchedule
	 */
	putOutboundSchedulesEmailcampaign(emailCampaignId, body) { 
		// verify the required parameter 'emailCampaignId' is set
		if (emailCampaignId === undefined || emailCampaignId === null) {
			throw 'Missing the required parameter "emailCampaignId" when calling putOutboundSchedulesEmailcampaign';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundSchedulesEmailcampaign';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/schedules/emailcampaigns/{emailCampaignId}', 
			'PUT', 
			{ 'emailCampaignId': emailCampaignId },
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
	 * Update a new messaging campaign schedule.
	 * 
	 * @param {String} messagingCampaignId Messaging Campaign ID
	 * @param {Object} body MessagingCampaignSchedule
	 */
	putOutboundSchedulesMessagingcampaign(messagingCampaignId, body) { 
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null) {
			throw 'Missing the required parameter "messagingCampaignId" when calling putOutboundSchedulesMessagingcampaign';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundSchedulesMessagingcampaign';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/schedules/messagingcampaigns/{messagingCampaignId}', 
			'PUT', 
			{ 'messagingCampaignId': messagingCampaignId },
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
	 * Update a new sequence schedule.
	 * 
	 * @param {String} sequenceId Sequence ID
	 * @param {Object} body SequenceSchedule
	 */
	putOutboundSchedulesSequence(sequenceId, body) { 
		// verify the required parameter 'sequenceId' is set
		if (sequenceId === undefined || sequenceId === null) {
			throw 'Missing the required parameter "sequenceId" when calling putOutboundSchedulesSequence';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundSchedulesSequence';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/schedules/sequences/{sequenceId}', 
			'PUT', 
			{ 'sequenceId': sequenceId },
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
	 * Update a new campaign sequence.
	 * 
	 * @param {String} sequenceId Campaign Sequence ID
	 * @param {Object} body Organization
	 */
	putOutboundSequence(sequenceId, body) { 
		// verify the required parameter 'sequenceId' is set
		if (sequenceId === undefined || sequenceId === null) {
			throw 'Missing the required parameter "sequenceId" when calling putOutboundSequence';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundSequence';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/sequences/{sequenceId}', 
			'PUT', 
			{ 'sequenceId': sequenceId },
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
	 * Update the Dialer wrap up code mapping.
	 * 
	 * @param {Object} body wrapUpCodeMapping
	 */
	putOutboundWrapupcodemappings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundWrapupcodemappings';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/wrapupcodemappings', 
			'PUT', 
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


export default OutboundApi;
