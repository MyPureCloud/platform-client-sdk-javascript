import ApiClient from '../ApiClient.js';


class OutboundApi {
	/**
	 * Outbound service.
	 * @module purecloud-platform-client-v2/api/OutboundApi
	 * @version 255.0.0
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
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundAttemptlimit(attemptLimitsId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'attemptLimitsId' is set
		if (attemptLimitsId === undefined || attemptLimitsId === null || attemptLimitsId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete callable time set
	 * 
	 * @param {String} callableTimeSetId Callable Time Set ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundCallabletimeset(callableTimeSetId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'callableTimeSetId' is set
		if (callableTimeSetId === undefined || callableTimeSetId === null || callableTimeSetId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a dialer call analysis response set.
	 * 
	 * @param {String} callAnalysisSetId Call Analysis Response Set ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundCallanalysisresponseset(callAnalysisSetId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'callAnalysisSetId' is set
		if (callAnalysisSetId === undefined || callAnalysisSetId === null || callAnalysisSetId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a campaign.
	 * 
	 * @param {String} campaignId Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundCampaign(campaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Reset campaign progress and recycle the campaign
	 * 
	 * @param {String} campaignId Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundCampaignProgress(campaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete Campaign Rule
	 * 
	 * @param {String} campaignRuleId Campaign Rule ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundCampaignrule(campaignRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignRuleId' is set
		if (campaignRuleId === undefined || campaignRuleId === null || campaignRuleId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a contact list.
	 * 
	 * @param {String} contactListId ContactList ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundContactlist(contactListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null || contactListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a contact.
	 * 
	 * @param {String} contactListId Contact List ID
	 * @param {String} contactId Contact ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundContactlistContact(contactListId, contactId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null || contactListId === '') {
			throw 'Missing the required parameter "contactListId" when calling deleteOutboundContactlistContact';
		}
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete contacts from a contact list. Only contacts that are not in use by any campaign will be deleted
	 * 
	 * @param {String} contactListId Contact List ID
	 * @param {Array.<String>} contactIds ContactIds to delete.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundContactlistContacts(contactListId, contactIds, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null || contactListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete Contact List Filter
	 * 
	 * @param {String} contactListFilterId Contact List Filter ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundContactlistfilter(contactListFilterId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListFilterId' is set
		if (contactListFilterId === undefined || contactListFilterId === null || contactListFilterId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete multiple contact lists.
	 * 
	 * @param {Array.<String>} id contact list id(s) to delete
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundContactlists(id, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete Contact List Template
	 * 
	 * @param {String} contactListTemplateId ContactListTemplate ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundContactlisttemplate(contactListTemplateId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListTemplateId' is set
		if (contactListTemplateId === undefined || contactListTemplateId === null || contactListTemplateId === '') {
			throw 'Missing the required parameter "contactListTemplateId" when calling deleteOutboundContactlisttemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlisttemplates/{contactListTemplateId}', 
			'DELETE', 
			{ 'contactListTemplateId': contactListTemplateId },
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
	 * Delete multiple contact list templates.
	 * 
	 * @param {Array.<String>} id contact list template id(s) to delete
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundContactlisttemplates(id, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'id' is set
		if (id === undefined || id === null) {
			throw 'Missing the required parameter "id" when calling deleteOutboundContactlisttemplates';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlisttemplates', 
			'DELETE', 
			{  },
			{ 'id': this.apiClient.buildCollectionParam(id, 'multi') },
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
	 * Delete an Outbound Digital Rule Set
	 * 
	 * @param {String} digitalRuleSetId The Digital Rule Set ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundDigitalruleset(digitalRuleSetId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'digitalRuleSetId' is set
		if (digitalRuleSetId === undefined || digitalRuleSetId === null || digitalRuleSetId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete dialer DNC list
	 * 
	 * @param {String} dncListId DncList ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundDnclist(dncListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null || dncListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deletes all or expired custom exclusion column entries from a DNC list.
	 * This operation is only for Internal DNC lists of custom exclusion column entries
	 * @param {String} dncListId DncList ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.expiredOnly Set to true to only remove DNC entries that are expired (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundDnclistCustomexclusioncolumns(dncListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null || dncListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deletes all or expired email addresses from a DNC list.
	 * This operation is Only for Internal DNC lists of email addresses
	 * @param {String} dncListId DncList ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.expiredOnly Set to true to only remove DNC entries that are expired (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundDnclistEmailaddresses(dncListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null || dncListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deletes all or expired phone numbers from a DNC list.
	 * This operation is Only for Internal DNC lists of phone numbers
	 * @param {String} dncListId DncList ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.expiredOnly Set to true to only remove DNC entries that are expired (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundDnclistPhonenumbers(dncListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null || dncListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deletes all or expired whatsApp numbers from a DNC list.
	 * This operation is only for Internal DNC lists of whatsApp numbers
	 * @param {String} dncListId DncList ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.expiredOnly Set to true to only remove DNC whatsApp numbers that are expired (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundDnclistWhatsappnumbers(dncListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null || dncListId === '') {
			throw 'Missing the required parameter "dncListId" when calling deleteOutboundDnclistWhatsappnumbers';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/dnclists/{dncListId}/whatsappnumbers', 
			'DELETE', 
			{ 'dncListId': dncListId },
			{ 'expiredOnly': opts['expiredOnly'] },
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
	 * Delete File Specification Template
	 * 
	 * @param {String} fileSpecificationTemplateId File Specification Template ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundFilespecificationtemplate(fileSpecificationTemplateId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'fileSpecificationTemplateId' is set
		if (fileSpecificationTemplateId === undefined || fileSpecificationTemplateId === null || fileSpecificationTemplateId === '') {
			throw 'Missing the required parameter "fileSpecificationTemplateId" when calling deleteOutboundFilespecificationtemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/filespecificationtemplates/{fileSpecificationTemplateId}', 
			'DELETE', 
			{ 'fileSpecificationTemplateId': fileSpecificationTemplateId },
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
	 * Delete multiple file specification templates.
	 * 
	 * @param {Array.<String>} id File Specification template id(s) to delete
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundFilespecificationtemplatesBulk(id, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'id' is set
		if (id === undefined || id === null) {
			throw 'Missing the required parameter "id" when calling deleteOutboundFilespecificationtemplatesBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/filespecificationtemplates/bulk', 
			'DELETE', 
			{  },
			{ 'id': this.apiClient.buildCollectionParam(id, 'multi') },
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
	 * Delete Import Template
	 * 
	 * @param {String} importTemplateId Import Template ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundImporttemplate(importTemplateId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'importTemplateId' is set
		if (importTemplateId === undefined || importTemplateId === null || importTemplateId === '') {
			throw 'Missing the required parameter "importTemplateId" when calling deleteOutboundImporttemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/importtemplates/{importTemplateId}', 
			'DELETE', 
			{ 'importTemplateId': importTemplateId },
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
	 * Delete multiple import templates.
	 * 
	 * @param {Array.<String>} id import template id(s) to delete
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundImporttemplates(id, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'id' is set
		if (id === undefined || id === null) {
			throw 'Missing the required parameter "id" when calling deleteOutboundImporttemplates';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/importtemplates', 
			'DELETE', 
			{  },
			{ 'id': this.apiClient.buildCollectionParam(id, 'multi') },
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
	 * Delete an Outbound Messaging Campaign
	 * 
	 * @param {String} messagingCampaignId The Messaging Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundMessagingcampaign(messagingCampaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null || messagingCampaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Reset messaging campaign progress and recycle the messaging campaign
	 * Documented permissions are applicable based on campaign type.
	 * @param {String} messagingCampaignId The Messaging Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundMessagingcampaignProgress(messagingCampaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null || messagingCampaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a Rule Set.
	 * 
	 * @param {String} ruleSetId Rule Set ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundRuleset(ruleSetId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'ruleSetId' is set
		if (ruleSetId === undefined || ruleSetId === null || ruleSetId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a dialer campaign schedule.
	 * 
	 * @param {String} campaignId Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundSchedulesCampaign(campaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete an email campaign schedule.
	 * 
	 * @param {String} emailCampaignId Email Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundSchedulesEmailcampaign(emailCampaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'emailCampaignId' is set
		if (emailCampaignId === undefined || emailCampaignId === null || emailCampaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a messaging campaign schedule.
	 * 
	 * @param {String} messagingCampaignId Messaging Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundSchedulesMessagingcampaign(messagingCampaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null || messagingCampaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a dialer sequence schedule.
	 * 
	 * @param {String} sequenceId Sequence ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundSchedulesSequence(sequenceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sequenceId' is set
		if (sequenceId === undefined || sequenceId === null || sequenceId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a WhatsApp campaign schedule.
	 * 
	 * @param {String} whatsAppCampaignId WhatsApp Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundSchedulesWhatsappcampaign(whatsAppCampaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'whatsAppCampaignId' is set
		if (whatsAppCampaignId === undefined || whatsAppCampaignId === null || whatsAppCampaignId === '') {
			throw 'Missing the required parameter "whatsAppCampaignId" when calling deleteOutboundSchedulesWhatsappcampaign';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/schedules/whatsappcampaigns/{whatsAppCampaignId}', 
			'DELETE', 
			{ 'whatsAppCampaignId': whatsAppCampaignId },
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
	 * Delete a dialer campaign sequence.
	 * 
	 * @param {String} sequenceId Campaign Sequence ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOutboundSequence(sequenceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sequenceId' is set
		if (sequenceId === undefined || sequenceId === null || sequenceId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get attempt limits
	 * 
	 * @param {String} attemptLimitsId Attempt limits ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundAttemptlimit(attemptLimitsId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'attemptLimitsId' is set
		if (attemptLimitsId === undefined || attemptLimitsId === null || attemptLimitsId === '') {
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get callable time set
	 * 
	 * @param {String} callableTimeSetId Callable Time Set ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundCallabletimeset(callableTimeSetId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'callableTimeSetId' is set
		if (callableTimeSetId === undefined || callableTimeSetId === null || callableTimeSetId === '') {
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a dialer call analysis response set.
	 * 
	 * @param {String} callAnalysisSetId Call Analysis Response Set ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundCallanalysisresponseset(callAnalysisSetId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'callAnalysisSetId' is set
		if (callAnalysisSetId === undefined || callAnalysisSetId === null || callAnalysisSetId === '') {
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get dialer campaign.
	 * 
	 * @param {String} campaignId Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundCampaign(campaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a preview of how agents will be mapped to this campaign's contact list.
	 * 
	 * @param {String} campaignId Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundCampaignAgentownedmappingpreviewResults(campaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get campaign diagnostics
	 * 
	 * @param {String} campaignId Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundCampaignDiagnostics(campaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get dialer campaign interactions.
	 * 
	 * @param {String} campaignId Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundCampaignInteractions(campaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get line distribution information for campaigns using same Edge Group or Site as given campaign
	 * 
	 * @param {String} campaignId Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeOnlyActiveCampaigns If true will return only active Campaigns (default to true)
	 * @param {String} opts.edgeGroupId Edge group to be used in line distribution calculations instead of current Campaign's Edge Group. Campaign's Site and Edge Group are mutually exclusive.
	 * @param {String} opts.siteId Site to be used in line distribution calculations instead of current Campaign's Site.  Campaign's Site and Edge Group are mutually exclusive.
	 * @param {Boolean} opts.useWeight Enable usage of weight, this value overrides current Campaign's setting in line distribution calculations
	 * @param {Number} opts.relativeWeight Relative weight to be used in line distribution calculations instead of current Campaign's relative weight
	 * @param {Number} opts.outboundLineCount The number of outbound lines to be used in line distribution calculations, instead of current Campaign's Outbound Lines Count
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundCampaignLinedistribution(campaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
			throw 'Missing the required parameter "campaignId" when calling getOutboundCampaignLinedistribution';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/{campaignId}/linedistribution', 
			'GET', 
			{ 'campaignId': campaignId },
			{ 'includeOnlyActiveCampaigns': opts['includeOnlyActiveCampaigns'],'edgeGroupId': opts['edgeGroupId'],'siteId': opts['siteId'],'useWeight': opts['useWeight'],'relativeWeight': opts['relativeWeight'],'outboundLineCount': opts['outboundLineCount'] },
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
	 * Get campaign progress
	 * 
	 * @param {String} campaignId Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundCampaignProgress(campaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the remaining and total contact count for each skill combination in a skills campaign
	 * 
	 * @param {String} campaignId Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundCampaignSkillcombinations(campaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
			throw 'Missing the required parameter "campaignId" when calling getOutboundCampaignSkillcombinations';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/{campaignId}/skillcombinations', 
			'GET', 
			{ 'campaignId': campaignId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
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
	 * Get statistics about a Dialer Campaign
	 * 
	 * @param {String} campaignId Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundCampaignStats(campaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Campaign Rule
	 * 
	 * @param {String} campaignRuleId Campaign Rule ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundCampaignrule(campaignRuleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignRuleId' is set
		if (campaignRuleId === undefined || campaignRuleId === null || campaignRuleId === '') {
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a basic Campaign information object
	 * This returns a simplified version of a Campaign, consisting of name and division.
	 * @param {String} campaignId Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundCampaignsDivisionview(campaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a dialer contact list.
	 * 
	 * @param {String} contactListId ContactList ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeImportStatus Import status (default to false)
	 * @param {Boolean} opts.includeSize Include size (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundContactlist(contactListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null || contactListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a contact.
	 * 
	 * @param {String} contactListId Contact List ID
	 * @param {String} contactId Contact ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundContactlistContact(contactListId, contactId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null || contactListId === '') {
			throw 'Missing the required parameter "contactListId" when calling getOutboundContactlistContact';
		}
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get bulk operation job.
	 * 
	 * @param {String} contactListId Contact List ID
	 * @param {String} jobId Job ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundContactlistContactsBulkJob(contactListId, jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null || contactListId === '') {
			throw 'Missing the required parameter "contactListId" when calling getOutboundContactlistContactsBulkJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getOutboundContactlistContactsBulkJob';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/{contactListId}/contacts/bulk/jobs/{jobId}', 
			'GET', 
			{ 'contactListId': contactListId,'jobId': jobId },
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
	 * Get 10 most recent bulk operation jobs associated with contact list.
	 * 
	 * @param {String} contactListId Contact List ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundContactlistContactsBulkJobs(contactListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null || contactListId === '') {
			throw 'Missing the required parameter "contactListId" when calling getOutboundContactlistContactsBulkJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/{contactListId}/contacts/bulk/jobs', 
			'GET', 
			{ 'contactListId': contactListId },
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
	 * Get the URI of a contact list export.
	 * 
	 * @param {String} contactListId ContactList ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.download Redirect to download uri (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundContactlistExport(contactListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null || contactListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get dialer contactList import status.
	 * 
	 * @param {String} contactListId ContactList ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundContactlistImportstatus(contactListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null || contactListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Preview the result of applying Automatic Time Zone Mapping to a contact list
	 * 
	 * @param {String} contactListId ContactList ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundContactlistTimezonemappingpreview(contactListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null || contactListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Contact list filter
	 * 
	 * @param {String} contactListFilterId Contact List Filter ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundContactlistfilter(contactListFilterId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListFilterId' is set
		if (contactListFilterId === undefined || contactListFilterId === null || contactListFilterId === '') {
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a basic ContactList information object
	 * This returns a simplified version of a ContactList, consisting of the name, division, column names, phone columns, import status, and size.
	 * @param {String} contactListId Contactlist ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeImportStatus Include import status (default to false)
	 * @param {Boolean} opts.includeSize Include size (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundContactlistsDivisionview(contactListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null || contactListId === '') {
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Contact List Template
	 * 
	 * @param {String} contactListTemplateId ContactListTemplate ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundContactlisttemplate(contactListTemplateId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListTemplateId' is set
		if (contactListTemplateId === undefined || contactListTemplateId === null || contactListTemplateId === '') {
			throw 'Missing the required parameter "contactListTemplateId" when calling getOutboundContactlisttemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlisttemplates/{contactListTemplateId}', 
			'GET', 
			{ 'contactListTemplateId': contactListTemplateId },
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
	 * Query a list of contact list templates
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size. The max that will be returned is 100. (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Boolean} opts.allowEmptyResult Whether to return an empty page when there are no results for that page (default to false)
	 * @param {Object} opts.filterType Filter type (default to Prefix)
	 * @param {String} opts.name Name
	 * @param {String} opts.sortBy Sort by
	 * @param {Object} opts.sortOrder Sort order (default to a)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundContactlisttemplates(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlisttemplates', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'allowEmptyResult': opts['allowEmptyResult'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
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
	 * Get diagnostic summary for a single campaign
	 * 
	 * @param {String} campaignId Campaign ID
	 * @param {String} start Start datetime (ISO 8601 or Unix epoch)
	 * @param {String} end End datetime (ISO 8601 or Unix epoch)
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundDiagnosticsCampaignSummary(campaignId, start, end, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
			throw 'Missing the required parameter "campaignId" when calling getOutboundDiagnosticsCampaignSummary';
		}
		// verify the required parameter 'start' is set
		if (start === undefined || start === null) {
			throw 'Missing the required parameter "start" when calling getOutboundDiagnosticsCampaignSummary';
		}
		// verify the required parameter 'end' is set
		if (end === undefined || end === null) {
			throw 'Missing the required parameter "end" when calling getOutboundDiagnosticsCampaignSummary';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/diagnostics/campaigns/{campaignId}/summary', 
			'GET', 
			{ 'campaignId': campaignId },
			{ 'start': start,'end': end },
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
	 * Get an Outbound Digital Rule Set
	 * 
	 * @param {String} digitalRuleSetId The Digital Rule Set ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundDigitalruleset(digitalRuleSetId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'digitalRuleSetId' is set
		if (digitalRuleSetId === undefined || digitalRuleSetId === null || digitalRuleSetId === '') {
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get dialer DNC list
	 * 
	 * @param {String} dncListId DncList ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeImportStatus Import status (default to false)
	 * @param {Boolean} opts.includeSize Include size (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundDnclist(dncListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null || dncListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the URI of a DNC list export.
	 * 
	 * @param {String} dncListId DncList ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.download Redirect to download uri (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundDnclistExport(dncListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null || dncListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get dialer dncList import status.
	 * 
	 * @param {String} dncListId DncList ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundDnclistImportstatus(dncListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null || dncListId === '') {
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a basic DncList information object
	 * This returns a simplified version of a DncList, consisting of the name, division, import status, and size.
	 * @param {String} dncListId Dnclist ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeImportStatus Include import status (default to false)
	 * @param {Boolean} opts.includeSize Include size (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundDnclistsDivisionview(dncListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null || dncListId === '') {
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Dialer Event
	 * 
	 * @param {String} eventId Event Log ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundEvent(eventId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'eventId' is set
		if (eventId === undefined || eventId === null || eventId === '') {
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get File Specification Template
	 * 
	 * @param {String} fileSpecificationTemplateId File Specification Template ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundFilespecificationtemplate(fileSpecificationTemplateId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'fileSpecificationTemplateId' is set
		if (fileSpecificationTemplateId === undefined || fileSpecificationTemplateId === null || fileSpecificationTemplateId === '') {
			throw 'Missing the required parameter "fileSpecificationTemplateId" when calling getOutboundFilespecificationtemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/filespecificationtemplates/{fileSpecificationTemplateId}', 
			'GET', 
			{ 'fileSpecificationTemplateId': fileSpecificationTemplateId },
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
	 * Query File Specification Templates
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size. The max that will be returned is 100. (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Boolean} opts.allowEmptyResult Whether to return an empty page when there are no results for that page (default to false)
	 * @param {Object} opts.filterType Filter type (default to Prefix)
	 * @param {String} opts.name Name
	 * @param {String} opts.sortBy Sort by
	 * @param {Object} opts.sortOrder Sort order (default to a)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundFilespecificationtemplates(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/filespecificationtemplates', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'allowEmptyResult': opts['allowEmptyResult'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
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
	 * Get Import Template
	 * 
	 * @param {String} importTemplateId Import Template ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeImportStatus Import status (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundImporttemplate(importTemplateId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'importTemplateId' is set
		if (importTemplateId === undefined || importTemplateId === null || importTemplateId === '') {
			throw 'Missing the required parameter "importTemplateId" when calling getOutboundImporttemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/importtemplates/{importTemplateId}', 
			'GET', 
			{ 'importTemplateId': importTemplateId },
			{ 'includeImportStatus': opts['includeImportStatus'] },
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
	 * Get the import status for an import template.
	 * 
	 * @param {String} importTemplateId importTemplateId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.listNamePrefix listNamePrefix
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundImporttemplateImportstatus(importTemplateId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'importTemplateId' is set
		if (importTemplateId === undefined || importTemplateId === null || importTemplateId === '') {
			throw 'Missing the required parameter "importTemplateId" when calling getOutboundImporttemplateImportstatus';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/importtemplates/{importTemplateId}/importstatus', 
			'GET', 
			{ 'importTemplateId': importTemplateId },
			{ 'listNamePrefix': opts['listNamePrefix'] },
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
	 * Query Import Templates
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeImportStatus Import status (default to false)
	 * @param {Number} opts.pageSize Page size. The max that will be returned is 100. (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Boolean} opts.allowEmptyResult Whether to return an empty page when there are no results for that page (default to false)
	 * @param {Object} opts.filterType Filter type (default to Prefix)
	 * @param {String} opts.name Name
	 * @param {String} opts.sortBy Sort by
	 * @param {Object} opts.sortOrder Sort order (default to a)
	 * @param {String} opts.contactListTemplateId Contact List Template ID
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundImporttemplates(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/importtemplates', 
			'GET', 
			{  },
			{ 'includeImportStatus': opts['includeImportStatus'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'allowEmptyResult': opts['allowEmptyResult'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'contactListTemplateId': opts['contactListTemplateId'] },
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
	 * Get an Outbound Messaging Campaign
	 * 
	 * @param {String} messagingCampaignId The Messaging Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundMessagingcampaign(messagingCampaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null || messagingCampaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get messaging campaign diagnostics
	 * 
	 * @param {String} messagingCampaignId The Messaging Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundMessagingcampaignDiagnostics(messagingCampaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null || messagingCampaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get messaging campaign's progress
	 * 
	 * @param {String} messagingCampaignId The Messaging Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundMessagingcampaignProgress(messagingCampaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null || messagingCampaignId === '') {
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {String} opts.contentTemplateId Content template ID
	 * @param {Object} opts.campaignStatus Campaign Status
	 * @param {Array.<String>} opts.ruleSetIds Ruleset ID(s)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundMessagingcampaigns(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/messagingcampaigns', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'],'contactListId': opts['contactListId'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi'),'type': opts['type'],'senderSmsPhoneNumber': opts['senderSmsPhoneNumber'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'contentTemplateId': opts['contentTemplateId'],'campaignStatus': opts['campaignStatus'],'ruleSetIds': this.apiClient.buildCollectionParam(opts['ruleSetIds'], 'multi') },
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
	 * Get a basic Messaging Campaign information object
	 * This returns a simplified version of a Messaging Campaign, consisting of id, name, and division.
	 * @param {String} messagingCampaignId The Messaging Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundMessagingcampaignsDivisionview(messagingCampaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null || messagingCampaignId === '') {
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {String} opts.contentTemplateId Content template ID
	 * @param {Object} opts.campaignStatus Campaign Status
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundMessagingcampaignsDivisionviews(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/messagingcampaigns/divisionviews', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'name': opts['name'],'type': opts['type'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'senderSmsPhoneNumber': opts['senderSmsPhoneNumber'],'contentTemplateId': opts['contentTemplateId'],'campaignStatus': opts['campaignStatus'] },
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
	 * Get a Rule Set by ID.
	 * 
	 * @param {String} ruleSetId Rule Set ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundRuleset(ruleSetId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'ruleSetId' is set
		if (ruleSetId === undefined || ruleSetId === null || ruleSetId === '') {
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a dialer campaign schedule.
	 * 
	 * @param {String} campaignId Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundSchedulesCampaign(campaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query for a list of dialer campaign schedules.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundSchedulesCampaigns(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get an email campaign schedule.
	 * 
	 * @param {String} emailCampaignId Email Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundSchedulesEmailcampaign(emailCampaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'emailCampaignId' is set
		if (emailCampaignId === undefined || emailCampaignId === null || emailCampaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query for a list of email campaign schedules.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundSchedulesEmailcampaigns(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a messaging campaign schedule.
	 * 
	 * @param {String} messagingCampaignId Messaging Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundSchedulesMessagingcampaign(messagingCampaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null || messagingCampaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query for a list of messaging campaign schedules.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundSchedulesMessagingcampaigns(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a dialer sequence schedule.
	 * 
	 * @param {String} sequenceId Sequence ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundSchedulesSequence(sequenceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sequenceId' is set
		if (sequenceId === undefined || sequenceId === null || sequenceId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query for a list of dialer sequence schedules.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundSchedulesSequences(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a WhatsApp campaign schedule.
	 * 
	 * @param {String} whatsAppCampaignId WhatsApp Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundSchedulesWhatsappcampaign(whatsAppCampaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'whatsAppCampaignId' is set
		if (whatsAppCampaignId === undefined || whatsAppCampaignId === null || whatsAppCampaignId === '') {
			throw 'Missing the required parameter "whatsAppCampaignId" when calling getOutboundSchedulesWhatsappcampaign';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/schedules/whatsappcampaigns/{whatsAppCampaignId}', 
			'GET', 
			{ 'whatsAppCampaignId': whatsAppCampaignId },
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
	 * Query for a list of WhatsApp campaign schedules.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundSchedulesWhatsappcampaigns(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/outbound/schedules/whatsappcampaigns', 
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
	 * Get a dialer campaign sequence.
	 * 
	 * @param {String} sequenceId Campaign Sequence ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundSequence(sequenceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sequenceId' is set
		if (sequenceId === undefined || sequenceId === null || sequenceId === '') {
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the outbound settings for this organization
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundSettings(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the Dialer wrap up code mapping.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOutboundWrapupcodemappings(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a campaign.
	 * 
	 * @param {String} campaignId Campaign ID
	 * @param {Object} body CampaignPatchRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchOutboundCampaign(campaignId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
			throw 'Missing the required parameter "campaignId" when calling patchOutboundCampaign';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchOutboundCampaign';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/{campaignId}', 
			'PATCH', 
			{ 'campaignId': campaignId },
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

	/**
	 * Add entries to or delete entries from a DNC list.
	 * Only Internal DNC lists may be deleted from
	 * @param {String} dncListId DncList ID
	 * @param {Object} body DNC Custom exclusion column entries
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchOutboundDnclistCustomexclusioncolumns(dncListId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null || dncListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Add emails to or Delete emails from a DNC list.
	 * Only Internal DNC lists may be added to or deleted from
	 * @param {String} dncListId DncList ID
	 * @param {Object} body DNC Emails
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchOutboundDnclistEmailaddresses(dncListId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null || dncListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Add numbers to or delete numbers from a DNC list.
	 * Only Internal DNC lists may be added to deleted from
	 * @param {String} dncListId DncList ID
	 * @param {Object} body DNC Phone Numbers
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchOutboundDnclistPhonenumbers(dncListId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null || dncListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Add entries to or delete entries from a DNC list.
	 * Only Internal DNC lists may be deleted from
	 * @param {String} dncListId DncList ID
	 * @param {Object} body DNC whatsApp numbers
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchOutboundDnclistWhatsappnumbers(dncListId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null || dncListId === '') {
			throw 'Missing the required parameter "dncListId" when calling patchOutboundDnclistWhatsappnumbers';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchOutboundDnclistWhatsappnumbers';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/dnclists/{dncListId}/whatsappnumbers', 
			'PATCH', 
			{ 'dncListId': dncListId },
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

	/**
	 * Update the outbound settings for this organization
	 * 
	 * @param {Object} body outboundSettings
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.useMaxCallsPerAgentDecimal Use maxCallsPerAgent with decimal precision
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchOutboundSettings(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchOutboundSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/settings', 
			'PATCH', 
			{  },
			{ 'useMaxCallsPerAgentDecimal': opts['useMaxCallsPerAgentDecimal'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create attempt limits
	 * 
	 * @param {Object} body AttemptLimits
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundAttemptlimits(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create callable time set
	 * 
	 * @param {Object} body DialerCallableTimeSet
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundCallabletimesets(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a dialer call analysis response set.
	 * 
	 * @param {Object} body ResponseSet
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundCallanalysisresponsesets(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Initiate request for a preview of how agents will be mapped to this campaign's contact list.
	 * 
	 * @param {String} campaignId Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundCampaignAgentownedmappingpreview(campaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Schedule a Callback for a Dialer Campaign (Deprecated)
	 * This endpoint is deprecated and may have unexpected results. Please use "/conversations/{conversationId}/participants/{participantId}/callbacks instead."
	 * @param {String} campaignId Campaign ID
	 * @param {Object} body ContactCallbackRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postOutboundCampaignCallbackSchedule(campaignId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Start the campaign
	 * 
	 * @param {String} campaignId Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundCampaignStart(campaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
			throw 'Missing the required parameter "campaignId" when calling postOutboundCampaignStart';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/{campaignId}/start', 
			'POST', 
			{ 'campaignId': campaignId },
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
	 * Stop the campaign
	 * 
	 * @param {String} campaignId Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundCampaignStop(campaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
			throw 'Missing the required parameter "campaignId" when calling postOutboundCampaignStop';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/{campaignId}/stop', 
			'POST', 
			{ 'campaignId': campaignId },
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
	 * Create Campaign Rule
	 * 
	 * @param {Object} body CampaignRule
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundCampaignrules(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a campaign.
	 * 
	 * @param {Object} body Campaign
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.useMaxCallsPerAgentDecimal Use maxCallsPerAgent with decimal precision
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundCampaigns(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundCampaigns';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns', 
			'POST', 
			{  },
			{ 'useMaxCallsPerAgentDecimal': opts['useMaxCallsPerAgentDecimal'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get performance data for a list of campaigns
	 * 
	 * @param {Array.<String>} body Campaign IDs. Maximum of 50 IDs allowed.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundCampaignsPerformanceQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundCampaignsPerformanceQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/campaigns/performance/query', 
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

	/**
	 * Get progress for a list of campaigns
	 * 
	 * @param {Array.<String>} body Campaign IDs
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundCampaignsProgress(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deletes all contacts out of a list. All outstanding recalls or rule-scheduled callbacks for non-preview campaigns configured with the contactlist will be cancelled.
	 * 
	 * @param {String} contactListId Contact List ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundContactlistClear(contactListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null || contactListId === '') {
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundContactlistContacts(contactListId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null || contactListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get contacts from a contact list.
	 * 
	 * @param {String} contactListId Contact List ID
	 * @param {Array.<String>} body ContactIds to get.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundContactlistContactsBulk(contactListId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null || contactListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Start an async job to delete contacts using a filter.
	 * 
	 * @param {String} contactListId Contact List ID
	 * @param {Object} body Contact filter information.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundContactlistContactsBulkRemove(contactListId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null || contactListId === '') {
			throw 'Missing the required parameter "contactListId" when calling postOutboundContactlistContactsBulkRemove';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundContactlistContactsBulkRemove';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/{contactListId}/contacts/bulk/remove', 
			'POST', 
			{ 'contactListId': contactListId },
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

	/**
	 * Start an async job to bulk edit contacts.
	 * 
	 * @param {String} contactListId Contact List ID
	 * @param {Object} body Contact bulk edit request information.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundContactlistContactsBulkUpdate(contactListId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null || contactListId === '') {
			throw 'Missing the required parameter "contactListId" when calling postOutboundContactlistContactsBulkUpdate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundContactlistContactsBulkUpdate';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/{contactListId}/contacts/bulk/update', 
			'POST', 
			{ 'contactListId': contactListId },
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

	/**
	 * Query contacts from a contact list.
	 * 
	 * @param {String} contactListId Contact List ID
	 * @param {Object} body Contact search parameters.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundContactlistContactsSearch(contactListId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null || contactListId === '') {
			throw 'Missing the required parameter "contactListId" when calling postOutboundContactlistContactsSearch';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundContactlistContactsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/{contactListId}/contacts/search', 
			'POST', 
			{ 'contactListId': contactListId },
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

	/**
	 * Initiate the export of a contact list.
	 * Returns 200 if received OK.
	 * @param {String} contactListId ContactList ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Export information to get
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundContactlistExport(contactListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null || contactListId === '') {
			throw 'Missing the required parameter "contactListId" when calling postOutboundContactlistExport';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/{contactListId}/export', 
			'POST', 
			{ 'contactListId': contactListId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create Contact List Filter
	 * 
	 * @param {Object} body ContactListFilter
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundContactlistfilters(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieve multiple contact list filters
	 * 
	 * @param {Object} body The contact list filters to retrieve
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundContactlistfiltersBulkRetrieve(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundContactlistfiltersBulkRetrieve';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlistfilters/bulk/retrieve', 
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

	/**
	 * Get a preview of the output of a contact list filter
	 * 
	 * @param {Object} body ContactListFilter
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundContactlistfiltersPreview(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a contact List.
	 * 
	 * @param {Object} body ContactList
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundContactlists(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Generate presigned upload URL for contact list.
	 * 
	 * @param {Object} body contactListUploadUrlRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundContactlistsUploads(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundContactlistsUploads';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlists/uploads', 
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

	/**
	 * Create Contact List Template
	 * 
	 * @param {Object} body ContactListTemplate
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundContactlisttemplates(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundContactlisttemplates';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlisttemplates', 
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

	/**
	 * Add multiple contact list templates
	 * 
	 * @param {Array.<Object>} body contact list template(s) to add
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundContactlisttemplatesBulkAdd(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundContactlisttemplatesBulkAdd';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlisttemplates/bulk/add', 
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

	/**
	 * Get multiple contact list templates
	 * 
	 * @param {Object} body contact list templates to get
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundContactlisttemplatesBulkRetrieve(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundContactlisttemplatesBulkRetrieve';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlisttemplates/bulk/retrieve', 
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

	/**
	 * Add phone numbers to a Dialer DNC list.
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundConversationDnc(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create an Outbound Digital Rule Set
	 * 
	 * @param {Object} body Digital Rule Set
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundDigitalrulesets(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Add email addresses to a DNC list.
	 * Only Internal DNC lists may be appended to
	 * @param {String} dncListId DncList ID
	 * @param {Array.<String>} body DNC email addresses
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundDnclistEmailaddresses(dncListId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null || dncListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Initiate the export of a dnc list.
	 * Returns 200 if received OK.
	 * @param {String} dncListId DncList ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundDnclistExport(dncListId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null || dncListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Add phone numbers to a DNC list.
	 * Only Internal DNC lists may be appended to
	 * @param {String} dncListId DncList ID
	 * @param {Array.<String>} body DNC Phone Numbers
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.expirationDateTime Expiration date for DNC phone numbers in yyyy-MM-ddTHH:mmZ format
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundDnclistPhonenumbers(dncListId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null || dncListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create dialer DNC list
	 * 
	 * @param {Object} body DncList
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundDnclists(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Generate presigned upload URL for dnc list.
	 * 
	 * @param {Object} body dncListUploadUrlRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundDnclistsUploads(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundDnclistsUploads';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/dnclists/uploads', 
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

	/**
	 * Create File Specification Template
	 * 
	 * @param {Object} body FileSpecificationTemplate
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundFilespecificationtemplates(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundFilespecificationtemplates';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/filespecificationtemplates', 
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

	/**
	 * Create Import Template
	 * 
	 * @param {Object} body ImportTemplate
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundImporttemplates(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundImporttemplates';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/importtemplates', 
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

	/**
	 * Add multiple import templates
	 * 
	 * @param {Array.<Object>} body import template(s) to add
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundImporttemplatesBulkAdd(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOutboundImporttemplatesBulkAdd';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/importtemplates/bulk/add', 
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

	/**
	 * Start the campaign
	 * Documented permissions are applicable based on campaign type.
	 * @param {String} messagingCampaignId The Messaging Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundMessagingcampaignStart(messagingCampaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null || messagingCampaignId === '') {
			throw 'Missing the required parameter "messagingCampaignId" when calling postOutboundMessagingcampaignStart';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/messagingcampaigns/{messagingCampaignId}/start', 
			'POST', 
			{ 'messagingCampaignId': messagingCampaignId },
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
	 * Stop the campaign
	 * Documented permissions are applicable based on campaign type.
	 * @param {String} messagingCampaignId The Messaging Campaign ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundMessagingcampaignStop(messagingCampaignId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null || messagingCampaignId === '') {
			throw 'Missing the required parameter "messagingCampaignId" when calling postOutboundMessagingcampaignStop';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/messagingcampaigns/{messagingCampaignId}/stop', 
			'POST', 
			{ 'messagingCampaignId': messagingCampaignId },
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
	 * Create a Messaging Campaign
	 * 
	 * @param {Object} body Messaging Campaign
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundMessagingcampaigns(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get progress for a list of messaging campaigns
	 * 
	 * @param {Array.<String>} body Messaging Campaign IDs
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundMessagingcampaignsProgress(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a Rule Set.
	 * 
	 * @param {Object} body RuleSet
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundRulesets(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a new campaign sequence.
	 * 
	 * @param {Object} body Organization
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOutboundSequences(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update attempt limits
	 * 
	 * @param {String} attemptLimitsId Attempt limits ID
	 * @param {Object} body AttemptLimits
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundAttemptlimit(attemptLimitsId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'attemptLimitsId' is set
		if (attemptLimitsId === undefined || attemptLimitsId === null || attemptLimitsId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update callable time set
	 * 
	 * @param {String} callableTimeSetId Callable Time Set ID
	 * @param {Object} body DialerCallableTimeSet
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundCallabletimeset(callableTimeSetId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'callableTimeSetId' is set
		if (callableTimeSetId === undefined || callableTimeSetId === null || callableTimeSetId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a dialer call analysis response set.
	 * 
	 * @param {String} callAnalysisSetId Call Analysis Response Set ID
	 * @param {Object} body ResponseSet
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundCallanalysisresponseset(callAnalysisSetId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'callAnalysisSetId' is set
		if (callAnalysisSetId === undefined || callAnalysisSetId === null || callAnalysisSetId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a campaign.
	 * 
	 * @param {String} campaignId Campaign ID
	 * @param {Object} body Campaign
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.useMaxCallsPerAgentDecimal Use maxCallsPerAgent with decimal precision
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundCampaign(campaignId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
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
			{ 'useMaxCallsPerAgentDecimal': opts['useMaxCallsPerAgentDecimal'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Send notification that an agent's state changed 
	 * New agent state.
	 * @param {String} campaignId Campaign ID
	 * @param {String} userId Agent's user ID
	 * @param {Object} body agent
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundCampaignAgent(campaignId, userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
			throw 'Missing the required parameter "campaignId" when calling putOutboundCampaignAgent';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update Campaign Rule
	 * 
	 * @param {String} campaignRuleId Campaign Rule ID
	 * @param {Object} body CampaignRule
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundCampaignrule(campaignRuleId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignRuleId' is set
		if (campaignRuleId === undefined || campaignRuleId === null || campaignRuleId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a contact list.
	 * 
	 * @param {String} contactListId ContactList ID
	 * @param {Object} body ContactList
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundContactlist(contactListId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null || contactListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a contact.
	 * 
	 * @param {String} contactListId Contact List ID
	 * @param {String} contactId Contact ID
	 * @param {Object} body Contact
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundContactlistContact(contactListId, contactId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListId' is set
		if (contactListId === undefined || contactListId === null || contactListId === '') {
			throw 'Missing the required parameter "contactListId" when calling putOutboundContactlistContact';
		}
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update Contact List Filter
	 * 
	 * @param {String} contactListFilterId Contact List Filter ID
	 * @param {Object} body ContactListFilter
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundContactlistfilter(contactListFilterId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListFilterId' is set
		if (contactListFilterId === undefined || contactListFilterId === null || contactListFilterId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a contact list template.
	 * 
	 * @param {String} contactListTemplateId ContactListTemplate ID
	 * @param {Object} body ContactListTemplate
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundContactlisttemplate(contactListTemplateId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactListTemplateId' is set
		if (contactListTemplateId === undefined || contactListTemplateId === null || contactListTemplateId === '') {
			throw 'Missing the required parameter "contactListTemplateId" when calling putOutboundContactlisttemplate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundContactlisttemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/contactlisttemplates/{contactListTemplateId}', 
			'PUT', 
			{ 'contactListTemplateId': contactListTemplateId },
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

	/**
	 * Update an Outbound Digital Rule Set
	 * 
	 * @param {String} digitalRuleSetId The Digital Rule Set ID
	 * @param {Object} body Digital Rule Set
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundDigitalruleset(digitalRuleSetId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'digitalRuleSetId' is set
		if (digitalRuleSetId === undefined || digitalRuleSetId === null || digitalRuleSetId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update dialer DNC list
	 * 
	 * @param {String} dncListId DncList ID
	 * @param {Object} body DncList
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundDnclist(dncListId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dncListId' is set
		if (dncListId === undefined || dncListId === null || dncListId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update File Specification Template
	 * 
	 * @param {String} fileSpecificationTemplateId File Specification Template ID
	 * @param {Object} body fileSpecificationTemplate
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundFilespecificationtemplate(fileSpecificationTemplateId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'fileSpecificationTemplateId' is set
		if (fileSpecificationTemplateId === undefined || fileSpecificationTemplateId === null || fileSpecificationTemplateId === '') {
			throw 'Missing the required parameter "fileSpecificationTemplateId" when calling putOutboundFilespecificationtemplate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundFilespecificationtemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/filespecificationtemplates/{fileSpecificationTemplateId}', 
			'PUT', 
			{ 'fileSpecificationTemplateId': fileSpecificationTemplateId },
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

	/**
	 * Update Import Template
	 * 
	 * @param {String} importTemplateId Import Template ID
	 * @param {Object} body importTemplate
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundImporttemplate(importTemplateId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'importTemplateId' is set
		if (importTemplateId === undefined || importTemplateId === null || importTemplateId === '') {
			throw 'Missing the required parameter "importTemplateId" when calling putOutboundImporttemplate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundImporttemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/importtemplates/{importTemplateId}', 
			'PUT', 
			{ 'importTemplateId': importTemplateId },
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

	/**
	 * Update an Outbound Messaging Campaign
	 * 
	 * @param {String} messagingCampaignId The Messaging Campaign ID
	 * @param {Object} body MessagingCampaign
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundMessagingcampaign(messagingCampaignId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null || messagingCampaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a Rule Set.
	 * 
	 * @param {String} ruleSetId Rule Set ID
	 * @param {Object} body RuleSet
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundRuleset(ruleSetId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'ruleSetId' is set
		if (ruleSetId === undefined || ruleSetId === null || ruleSetId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a new campaign schedule.
	 * 
	 * @param {String} campaignId Campaign ID
	 * @param {Object} body CampaignSchedule
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundSchedulesCampaign(campaignId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'campaignId' is set
		if (campaignId === undefined || campaignId === null || campaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update an email campaign schedule.
	 * 
	 * @param {String} emailCampaignId Email Campaign ID
	 * @param {Object} body EmailCampaignSchedule
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundSchedulesEmailcampaign(emailCampaignId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'emailCampaignId' is set
		if (emailCampaignId === undefined || emailCampaignId === null || emailCampaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a new messaging campaign schedule.
	 * 
	 * @param {String} messagingCampaignId Messaging Campaign ID
	 * @param {Object} body MessagingCampaignSchedule
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundSchedulesMessagingcampaign(messagingCampaignId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'messagingCampaignId' is set
		if (messagingCampaignId === undefined || messagingCampaignId === null || messagingCampaignId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a new sequence schedule.
	 * 
	 * @param {String} sequenceId Sequence ID
	 * @param {Object} body SequenceSchedule
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundSchedulesSequence(sequenceId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sequenceId' is set
		if (sequenceId === undefined || sequenceId === null || sequenceId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a WhatsApp campaign schedule.
	 * 
	 * @param {String} whatsAppCampaignId WhatsApp Campaign ID
	 * @param {Object} body WhatsAppCampaignSchedule
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundSchedulesWhatsappcampaign(whatsAppCampaignId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'whatsAppCampaignId' is set
		if (whatsAppCampaignId === undefined || whatsAppCampaignId === null || whatsAppCampaignId === '') {
			throw 'Missing the required parameter "whatsAppCampaignId" when calling putOutboundSchedulesWhatsappcampaign';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOutboundSchedulesWhatsappcampaign';
		}

		return this.apiClient.callApi(
			'/api/v2/outbound/schedules/whatsappcampaigns/{whatsAppCampaignId}', 
			'PUT', 
			{ 'whatsAppCampaignId': whatsAppCampaignId },
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

	/**
	 * Update a new campaign sequence.
	 * 
	 * @param {String} sequenceId Campaign Sequence ID
	 * @param {Object} body Organization
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundSequence(sequenceId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sequenceId' is set
		if (sequenceId === undefined || sequenceId === null || sequenceId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update the Dialer wrap up code mapping.
	 * 
	 * @param {Object} body wrapUpCodeMapping
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOutboundWrapupcodemappings(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

}


export default OutboundApi;
