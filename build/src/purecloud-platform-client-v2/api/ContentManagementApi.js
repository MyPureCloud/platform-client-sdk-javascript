import ApiClient from '../ApiClient.js';


class ContentManagementApi {
	/**
	 * ContentManagement service.
	 * @module purecloud-platform-client-v2/api/ContentManagementApi
	 * @version 261.0.0
	 */

	/**
	 * Constructs a new ContentManagementApi. 
	 * @alias module:purecloud-platform-client-v2/api/ContentManagementApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a document.
	 * 
	 * @param {String} documentId Document ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.override Override any lock on the document
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteContentmanagementDocument(documentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling deleteContentmanagementDocument';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/documents/{documentId}', 
			'DELETE', 
			{ 'documentId': documentId },
			{ 'override': opts['override'] },
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
	 * Deletes an existing share.
	 * This revokes sharing rights specified in the share record
	 * @param {String} shareId Share ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteContentmanagementShare(shareId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'shareId' is set
		if (shareId === undefined || shareId === null || shareId === '') {
			throw 'Missing the required parameter "shareId" when calling deleteContentmanagementShare';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/shares/{shareId}', 
			'DELETE', 
			{ 'shareId': shareId },
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
	 * Cancel the command for this status
	 * 
	 * @param {String} statusId Status ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteContentmanagementStatusStatusId(statusId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'statusId' is set
		if (statusId === undefined || statusId === null || statusId === '') {
			throw 'Missing the required parameter "statusId" when calling deleteContentmanagementStatusStatusId';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/status/{statusId}', 
			'DELETE', 
			{ 'statusId': statusId },
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
	 * Delete a workspace
	 * 
	 * @param {String} workspaceId Workspace ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.moveChildrenToWorkspaceId New location for objects in deleted workspace.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteContentmanagementWorkspace(workspaceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workspaceId' is set
		if (workspaceId === undefined || workspaceId === null || workspaceId === '') {
			throw 'Missing the required parameter "workspaceId" when calling deleteContentmanagementWorkspace';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/workspaces/{workspaceId}', 
			'DELETE', 
			{ 'workspaceId': workspaceId },
			{ 'moveChildrenToWorkspaceId': opts['moveChildrenToWorkspaceId'] },
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
	 * Delete a member from a workspace
	 * 
	 * @param {String} workspaceId Workspace ID
	 * @param {String} memberId Member ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteContentmanagementWorkspaceMember(workspaceId, memberId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workspaceId' is set
		if (workspaceId === undefined || workspaceId === null || workspaceId === '') {
			throw 'Missing the required parameter "workspaceId" when calling deleteContentmanagementWorkspaceMember';
		}
		// verify the required parameter 'memberId' is set
		if (memberId === undefined || memberId === null || memberId === '') {
			throw 'Missing the required parameter "memberId" when calling deleteContentmanagementWorkspaceMember';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}', 
			'DELETE', 
			{ 'workspaceId': workspaceId,'memberId': memberId },
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
	 * Delete workspace tag
	 * Delete a tag from a workspace. Will remove this tag from all documents.
	 * @param {String} workspaceId Workspace ID
	 * @param {String} tagId Tag ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteContentmanagementWorkspaceTagvalue(workspaceId, tagId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workspaceId' is set
		if (workspaceId === undefined || workspaceId === null || workspaceId === '') {
			throw 'Missing the required parameter "workspaceId" when calling deleteContentmanagementWorkspaceTagvalue';
		}
		// verify the required parameter 'tagId' is set
		if (tagId === undefined || tagId === null || tagId === '') {
			throw 'Missing the required parameter "tagId" when calling deleteContentmanagementWorkspaceTagvalue';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}', 
			'DELETE', 
			{ 'workspaceId': workspaceId,'tagId': tagId },
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
	 * Get a document.
	 * 
	 * @param {String} documentId Document ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getContentmanagementDocument(documentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling getContentmanagementDocument';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/documents/{documentId}', 
			'GET', 
			{ 'documentId': documentId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Download a document.
	 * 
	 * @param {String} documentId Document ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.disposition Request how the content will be downloaded: a file attachment or inline. Default is attachment.
	 * @param {String} opts.contentType The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getContentmanagementDocumentContent(documentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling getContentmanagementDocumentContent';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/documents/{documentId}/content', 
			'GET', 
			{ 'documentId': documentId },
			{ 'disposition': opts['disposition'],'contentType': opts['contentType'] },
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
	 * Get a list of documents.
	 * 
	 * @param {String} workspaceId Workspace ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.name Name
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.sortBy name or dateCreated
	 * @param {String} opts.sortOrder ascending or descending (default to ascending)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getContentmanagementDocuments(workspaceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workspaceId' is set
		if (workspaceId === undefined || workspaceId === null) {
			throw 'Missing the required parameter "workspaceId" when calling getContentmanagementDocuments';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/documents', 
			'GET', 
			{  },
			{ 'workspaceId': workspaceId,'name': opts['name'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
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
	 * Query content
	 * 
	 * @param {String} queryPhrase Phrase tokens are ANDed together over all searchable fields
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.sortBy name or dateCreated (default to name)
	 * @param {String} opts.sortOrder ascending or descending (default to ascending)
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getContentmanagementQuery(queryPhrase, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queryPhrase' is set
		if (queryPhrase === undefined || queryPhrase === null) {
			throw 'Missing the required parameter "queryPhrase" when calling getContentmanagementQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/query', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'queryPhrase': queryPhrase,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Get a Security Profile
	 * 
	 * @param {String} securityProfileId Security Profile Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getContentmanagementSecurityprofile(securityProfileId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'securityProfileId' is set
		if (securityProfileId === undefined || securityProfileId === null || securityProfileId === '') {
			throw 'Missing the required parameter "securityProfileId" when calling getContentmanagementSecurityprofile';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/securityprofiles/{securityProfileId}', 
			'GET', 
			{ 'securityProfileId': securityProfileId },
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
	 * Get a List of Security Profiles
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getContentmanagementSecurityprofiles(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/securityprofiles', 
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
	 * Retrieve details about an existing share.
	 * 
	 * @param {String} shareId Share ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getContentmanagementShare(shareId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'shareId' is set
		if (shareId === undefined || shareId === null || shareId === '') {
			throw 'Missing the required parameter "shareId" when calling getContentmanagementShare';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/shares/{shareId}', 
			'GET', 
			{ 'shareId': shareId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Get shared documents. Securely download a shared document.
	 * This method requires the download sharing URI obtained in the get document response (downloadSharingUri). Documents may be shared between users in the same workspace. Documents may also be shared between any user by creating a content management share.
	 * @param {String} sharedId Shared ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.disposition Request how the share content will be downloaded: attached as a file or inline. Default is attachment. (default to attachment)
	 * @param {String} opts.contentType The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav
	 * @param {Object} opts.expand Expand some document fields
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getContentmanagementSharedSharedId(sharedId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sharedId' is set
		if (sharedId === undefined || sharedId === null || sharedId === '') {
			throw 'Missing the required parameter "sharedId" when calling getContentmanagementSharedSharedId';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/shared/{sharedId}', 
			'GET', 
			{ 'sharedId': sharedId },
			{ 'disposition': opts['disposition'],'contentType': opts['contentType'],'expand': opts['expand'] },
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
	 * Gets a list of shares.  You must specify at least one filter (e.g. entityId).
	 * Failing to specify a filter will return 400.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.entityId Filters the shares returned to only the entity specified by the value of this parameter.
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getContentmanagementShares(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/shares', 
			'GET', 
			{  },
			{ 'entityId': opts['entityId'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
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
	 * Get a list of statuses for pending operations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getContentmanagementStatus(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/status', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
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
	 * Get a status.
	 * 
	 * @param {String} statusId Status ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getContentmanagementStatusStatusId(statusId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'statusId' is set
		if (statusId === undefined || statusId === null || statusId === '') {
			throw 'Missing the required parameter "statusId" when calling getContentmanagementStatusStatusId';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/status/{statusId}', 
			'GET', 
			{ 'statusId': statusId },
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
	 * Get usage details.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getContentmanagementUsage(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/usage', 
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
	 * Get a workspace.
	 * 
	 * @param {String} workspaceId Workspace ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getContentmanagementWorkspace(workspaceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workspaceId' is set
		if (workspaceId === undefined || workspaceId === null || workspaceId === '') {
			throw 'Missing the required parameter "workspaceId" when calling getContentmanagementWorkspace';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/workspaces/{workspaceId}', 
			'GET', 
			{ 'workspaceId': workspaceId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Get a list of documents.
	 * 
	 * @param {String} workspaceId Workspace ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.sortBy name or dateCreated
	 * @param {String} opts.sortOrder ascending or descending (default to ascending)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getContentmanagementWorkspaceDocuments(workspaceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workspaceId' is set
		if (workspaceId === undefined || workspaceId === null || workspaceId === '') {
			throw 'Missing the required parameter "workspaceId" when calling getContentmanagementWorkspaceDocuments';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/workspaces/{workspaceId}/documents', 
			'GET', 
			{ 'workspaceId': workspaceId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
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
	 * Get a workspace member
	 * 
	 * @param {String} workspaceId Workspace ID
	 * @param {String} memberId Member ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getContentmanagementWorkspaceMember(workspaceId, memberId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workspaceId' is set
		if (workspaceId === undefined || workspaceId === null || workspaceId === '') {
			throw 'Missing the required parameter "workspaceId" when calling getContentmanagementWorkspaceMember';
		}
		// verify the required parameter 'memberId' is set
		if (memberId === undefined || memberId === null || memberId === '') {
			throw 'Missing the required parameter "memberId" when calling getContentmanagementWorkspaceMember';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}', 
			'GET', 
			{ 'workspaceId': workspaceId,'memberId': memberId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Get a list workspace members
	 * 
	 * @param {String} workspaceId Workspace ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getContentmanagementWorkspaceMembers(workspaceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workspaceId' is set
		if (workspaceId === undefined || workspaceId === null || workspaceId === '') {
			throw 'Missing the required parameter "workspaceId" when calling getContentmanagementWorkspaceMembers';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/workspaces/{workspaceId}/members', 
			'GET', 
			{ 'workspaceId': workspaceId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Get a workspace tag
	 * 
	 * @param {String} workspaceId Workspace ID
	 * @param {String} tagId Tag ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getContentmanagementWorkspaceTagvalue(workspaceId, tagId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workspaceId' is set
		if (workspaceId === undefined || workspaceId === null || workspaceId === '') {
			throw 'Missing the required parameter "workspaceId" when calling getContentmanagementWorkspaceTagvalue';
		}
		// verify the required parameter 'tagId' is set
		if (tagId === undefined || tagId === null || tagId === '') {
			throw 'Missing the required parameter "tagId" when calling getContentmanagementWorkspaceTagvalue';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}', 
			'GET', 
			{ 'workspaceId': workspaceId,'tagId': tagId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Get a list of workspace tags
	 * 
	 * @param {String} workspaceId Workspace ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.value filter the list of tags returned
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getContentmanagementWorkspaceTagvalues(workspaceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workspaceId' is set
		if (workspaceId === undefined || workspaceId === null || workspaceId === '') {
			throw 'Missing the required parameter "workspaceId" when calling getContentmanagementWorkspaceTagvalues';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues', 
			'GET', 
			{ 'workspaceId': workspaceId },
			{ 'value': opts['value'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Get a list of workspaces.
	 * Specifying content access will return all workspaces the user has document access to, while admin access will return all group workspaces the user has administrative rights to.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Array.<String>} opts.access Requested access level.
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getContentmanagementWorkspaces(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/workspaces', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'access': this.apiClient.buildCollectionParam(opts['access'], 'multi'),'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Update a document.
	 * 
	 * @param {String} documentId Document ID
	 * @param {Object} body Document
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand some document fields
	 * @param {Boolean} opts.override Override any lock on the document
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postContentmanagementDocument(documentId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling postContentmanagementDocument';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postContentmanagementDocument';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/documents/{documentId}', 
			'POST', 
			{ 'documentId': documentId },
			{ 'expand': opts['expand'],'override': opts['override'] },
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
	 * Replace the contents of a document.
	 * 
	 * @param {String} documentId Document ID
	 * @param {Object} body Replace Request
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.override Override any lock on the document
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postContentmanagementDocumentContent(documentId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
			throw 'Missing the required parameter "documentId" when calling postContentmanagementDocumentContent';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postContentmanagementDocumentContent';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/documents/{documentId}/content', 
			'POST', 
			{ 'documentId': documentId },
			{ 'override': opts['override'] },
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
	 * Add a document.
	 * 
	 * @param {Object} body Document
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.copySource Copy a document within a workspace or to a new workspace. Provide a document ID as the copy source.
	 * @param {String} opts.moveSource Move a document to a new workspace. Provide a document ID as the move source.
	 * @param {Boolean} opts.override Override any lock on the source document
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postContentmanagementDocuments(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postContentmanagementDocuments';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/documents', 
			'POST', 
			{  },
			{ 'copySource': opts['copySource'],'moveSource': opts['moveSource'],'override': opts['override'] },
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
	 * Query content
	 * 
	 * @param {Object} body Allows for a filtered query returning facet information
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand some document fields
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postContentmanagementQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postContentmanagementQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/query', 
			'POST', 
			{  },
			{ 'expand': opts['expand'] },
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
	 * Creates a new share or updates an existing share if the entity has already been shared
	 * 
	 * @param {Object} body CreateShareRequest - entity id and type and a single member or list of members are required
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postContentmanagementShares(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postContentmanagementShares';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/shares', 
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
	 * Create a workspace tag
	 * 
	 * @param {String} workspaceId Workspace ID
	 * @param {Object} body tag
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postContentmanagementWorkspaceTagvalues(workspaceId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workspaceId' is set
		if (workspaceId === undefined || workspaceId === null || workspaceId === '') {
			throw 'Missing the required parameter "workspaceId" when calling postContentmanagementWorkspaceTagvalues';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postContentmanagementWorkspaceTagvalues';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues', 
			'POST', 
			{ 'workspaceId': workspaceId },
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
	 * Perform a prefix query on tags in the workspace
	 * 
	 * @param {String} workspaceId Workspace ID
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postContentmanagementWorkspaceTagvaluesQuery(workspaceId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workspaceId' is set
		if (workspaceId === undefined || workspaceId === null || workspaceId === '') {
			throw 'Missing the required parameter "workspaceId" when calling postContentmanagementWorkspaceTagvaluesQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postContentmanagementWorkspaceTagvaluesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/query', 
			'POST', 
			{ 'workspaceId': workspaceId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Create a group workspace
	 * 
	 * @param {Object} body Workspace
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postContentmanagementWorkspaces(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postContentmanagementWorkspaces';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/workspaces', 
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
	 * Update a workspace
	 * 
	 * @param {String} workspaceId Workspace ID
	 * @param {Object} body Workspace
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putContentmanagementWorkspace(workspaceId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workspaceId' is set
		if (workspaceId === undefined || workspaceId === null || workspaceId === '') {
			throw 'Missing the required parameter "workspaceId" when calling putContentmanagementWorkspace';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putContentmanagementWorkspace';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/workspaces/{workspaceId}', 
			'PUT', 
			{ 'workspaceId': workspaceId },
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
	 * Add a member to a workspace
	 * 
	 * @param {String} workspaceId Workspace ID
	 * @param {String} memberId Member ID
	 * @param {Object} body Workspace Member
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putContentmanagementWorkspaceMember(workspaceId, memberId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workspaceId' is set
		if (workspaceId === undefined || workspaceId === null || workspaceId === '') {
			throw 'Missing the required parameter "workspaceId" when calling putContentmanagementWorkspaceMember';
		}
		// verify the required parameter 'memberId' is set
		if (memberId === undefined || memberId === null || memberId === '') {
			throw 'Missing the required parameter "memberId" when calling putContentmanagementWorkspaceMember';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putContentmanagementWorkspaceMember';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}', 
			'PUT', 
			{ 'workspaceId': workspaceId,'memberId': memberId },
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
	 * Update a workspace tag. Will update all documents with the new tag value.
	 * 
	 * @param {String} workspaceId Workspace ID
	 * @param {String} tagId Tag ID
	 * @param {Object} body Workspace
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putContentmanagementWorkspaceTagvalue(workspaceId, tagId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workspaceId' is set
		if (workspaceId === undefined || workspaceId === null || workspaceId === '') {
			throw 'Missing the required parameter "workspaceId" when calling putContentmanagementWorkspaceTagvalue';
		}
		// verify the required parameter 'tagId' is set
		if (tagId === undefined || tagId === null || tagId === '') {
			throw 'Missing the required parameter "tagId" when calling putContentmanagementWorkspaceTagvalue';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putContentmanagementWorkspaceTagvalue';
		}

		return this.apiClient.callApi(
			'/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}', 
			'PUT', 
			{ 'workspaceId': workspaceId,'tagId': tagId },
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


export default ContentManagementApi;
