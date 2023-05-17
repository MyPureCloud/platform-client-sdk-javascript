import ApiClient from '../ApiClient.js';


class SCIMApi {
	/**
	 * SCIM service.
	 * @module purecloud-platform-client-v2/api/SCIMApi
	 * @version 168.2.0
	 */

	/**
	 * Constructs a new SCIMApi. 
	 * @alias module:purecloud-platform-client-v2/api/SCIMApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a user
	 * 
	 * @param {String} userId The ID of a user. Returned with GET /api/v2/scim/users.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers.
	 */
	deleteScimUser(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling deleteScimUser';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/users/{userId}', 
			'DELETE', 
			{ 'userId': userId },
			{  },
			{ 'If-Match': opts['ifMatch'] },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Delete a user
	 * 
	 * @param {String} userId The ID of a user. Returned with GET /api/v2/scim/v2/users.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers.
	 */
	deleteScimV2User(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling deleteScimV2User';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/v2/users/{userId}', 
			'DELETE', 
			{ 'userId': userId },
			{  },
			{ 'If-Match': opts['ifMatch'] },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Get a group
	 * 
	 * @param {String} groupId The ID of a group. Returned with GET /api/v2/scim/groups.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.attributes Indicates which attributes to include. Returns these attributes and the id, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes.
	 * @param {Array.<String>} opts.excludedAttributes Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns id, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes.
	 * @param {String} opts.ifNoneMatch The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/groups/{groupId}. Example: 42. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified.
	 */
	getScimGroup(groupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling getScimGroup';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/groups/{groupId}', 
			'GET', 
			{ 'groupId': groupId },
			{ 'attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'multi'),'excludedAttributes': this.apiClient.buildCollectionParam(opts['excludedAttributes'], 'multi') },
			{ 'If-None-Match': opts['ifNoneMatch'] },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Get a list of groups
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.startIndex The 1-based index of the first query result. (default to 1)
	 * @param {Number} opts.count The requested number of items per page. A value of 0 returns totalResults. A page size over 25 may exceed internal resource limits and return a 429 error. For a page size over 25, use the excludedAttributes or attributes query parameters to exclude or only include secondary lookup values such as externalId,  roles, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages, or urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills. (default to 25)
	 * @param {Array.<String>} opts.attributes Indicates which attributes to include. Returns these attributes and the id, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes.
	 * @param {Array.<String>} opts.excludedAttributes Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns id, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes.
	 * @param {String} opts.filter Filters results. If nothing is specified, returns all groups. Examples of valid values: id eq 5f4bc742-a019-4e38-8e2a-d39d5bc0b0f3, displayname eq Sales.
	 */
	getScimGroups(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/scim/groups', 
			'GET', 
			{  },
			{ 'startIndex': opts['startIndex'],'count': opts['count'],'attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'multi'),'excludedAttributes': this.apiClient.buildCollectionParam(opts['excludedAttributes'], 'multi'),'filter': opts['filter'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Get a resource type
	 * 
	 * @param {Object} resourceType The type of resource. Returned with GET /api/v2/scim/resourcetypes.
	 */
	getScimResourcetype(resourceType) { 
		// verify the required parameter 'resourceType' is set
		if (resourceType === undefined || resourceType === null) {
			throw 'Missing the required parameter "resourceType" when calling getScimResourcetype';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/resourcetypes/{resourceType}', 
			'GET', 
			{ 'resourceType': resourceType },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Get a list of resource types
	 * 
	 */
	getScimResourcetypes() { 

		return this.apiClient.callApi(
			'/api/v2/scim/resourcetypes', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Get a SCIM schema
	 * 
	 * @param {Object} schemaId The ID of a schema. Returned with GET /api/v2/scim/schemas.
	 */
	getScimSchema(schemaId) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null) {
			throw 'Missing the required parameter "schemaId" when calling getScimSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/schemas/{schemaId}', 
			'GET', 
			{ 'schemaId': schemaId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Get a list of SCIM schemas
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.filter Filtered results are invalid and return 403 Unauthorized.
	 */
	getScimSchemas(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/scim/schemas', 
			'GET', 
			{  },
			{ 'filter': opts['filter'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Get a service provider's configuration
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifNoneMatch The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/serviceproviderconfig. Example: 42. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified. 
	 */
	getScimServiceproviderconfig(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/scim/serviceproviderconfig', 
			'GET', 
			{  },
			{  },
			{ 'If-None-Match': opts['ifNoneMatch'] },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Get a user
	 * 
	 * @param {String} userId The ID of a user. Returned with GET /api/v2/scim/users.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.attributes Indicates which attributes to include. Returns these attributes and the id, userName, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes.
	 * @param {Array.<String>} opts.excludedAttributes Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns the id, userName, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes.
	 * @param {String} opts.ifNoneMatch The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified.
	 */
	getScimUser(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getScimUser';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/users/{userId}', 
			'GET', 
			{ 'userId': userId },
			{ 'attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'multi'),'excludedAttributes': this.apiClient.buildCollectionParam(opts['excludedAttributes'], 'multi') },
			{ 'If-None-Match': opts['ifNoneMatch'] },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Get a list of users
	 * To return all active users, do not use the filter parameter. To return inactive users, set the filter parameter to "active eq false". By default, returns SCIM attributes "externalId", "enterprise-user:manager", and "roles". To exclude these attributes, set the attributes parameter to "id,active" or the excludeAttributes parameter to "externalId,roles,urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division".
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.startIndex The 1-based index of the first query result. (default to 1)
	 * @param {Number} opts.count The requested number of items per page. A value of 0 returns totalResults. A page size over 25 may exceed internal resource limits and return a 429 error. For a page size over 25, use the excludedAttributes or attributes query parameters to exclude or only include secondary lookup values such as externalId,  roles, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages, or urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills. (default to 25)
	 * @param {Array.<String>} opts.attributes Indicates which attributes to include. Returns these attributes and the id, userName, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes.
	 * @param {Array.<String>} opts.excludedAttributes Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns the id, userName, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes.
	 * @param {String} opts.filter Filters results. If nothing is specified, returns all active users. Examples of valid values: id eq 857449b0-d9e7-4cd0-acbf-a6adfb9ef1e9, userName eq search@sample.org, manager eq 16e10e2f-1136-43fe-bb84-eac073168a49, email eq search@sample.org, division eq divisionName, externalId eq 167844, active eq false, employeeNumber eq 9876543210.
	 */
	getScimUsers(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/scim/users', 
			'GET', 
			{  },
			{ 'startIndex': opts['startIndex'],'count': opts['count'],'attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'multi'),'excludedAttributes': this.apiClient.buildCollectionParam(opts['excludedAttributes'], 'multi'),'filter': opts['filter'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Get a group
	 * 
	 * @param {String} groupId The ID of a group. Returned with GET /api/v2/scim/v2/groups.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.attributes Indicates which attributes to include. Returns these attributes and the id, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes.
	 * @param {Array.<String>} opts.excludedAttributes Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns id, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes.
	 * @param {String} opts.ifNoneMatch The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: 42. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified.
	 */
	getScimV2Group(groupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling getScimV2Group';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/v2/groups/{groupId}', 
			'GET', 
			{ 'groupId': groupId },
			{ 'attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'multi'),'excludedAttributes': this.apiClient.buildCollectionParam(opts['excludedAttributes'], 'multi') },
			{ 'If-None-Match': opts['ifNoneMatch'] },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Get a list of groups
	 * 
	 * @param {String} filter Filters results. If nothing is specified, returns all groups. Examples of valid values: id eq 5f4bc742-a019-4e38-8e2a-d39d5bc0b0f3, displayname eq Sales.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.startIndex The 1-based index of the first query result. (default to 1)
	 * @param {Number} opts.count The requested number of items per page. A value of 0 returns totalResults. A page size over 25 may exceed internal resource limits and return a 429 error. For a page size over 25, use the excludedAttributes or attributes query parameters to exclude or only include secondary lookup values such as externalId,  roles, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages, or urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills. (default to 25)
	 * @param {Array.<String>} opts.attributes Indicates which attributes to include. Returns these attributes and the id, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes.
	 * @param {Array.<String>} opts.excludedAttributes Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns id, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes.
	 */
	getScimV2Groups(filter, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'filter' is set
		if (filter === undefined || filter === null) {
			throw 'Missing the required parameter "filter" when calling getScimV2Groups';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/v2/groups', 
			'GET', 
			{  },
			{ 'startIndex': opts['startIndex'],'count': opts['count'],'attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'multi'),'excludedAttributes': this.apiClient.buildCollectionParam(opts['excludedAttributes'], 'multi'),'filter': filter },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Get a resource type
	 * 
	 * @param {Object} resourceType The type of resource. Returned with GET /api/v2/scim/v2/resourcetypes.
	 */
	getScimV2Resourcetype(resourceType) { 
		// verify the required parameter 'resourceType' is set
		if (resourceType === undefined || resourceType === null) {
			throw 'Missing the required parameter "resourceType" when calling getScimV2Resourcetype';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/v2/resourcetypes/{resourceType}', 
			'GET', 
			{ 'resourceType': resourceType },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Get a list of resource types
	 * 
	 */
	getScimV2Resourcetypes() { 

		return this.apiClient.callApi(
			'/api/v2/scim/v2/resourcetypes', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Get a SCIM schema
	 * 
	 * @param {Object} schemaId The ID of a schema. Returned with GET /api/v2/scim/v2/schemas.
	 */
	getScimV2Schema(schemaId) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null) {
			throw 'Missing the required parameter "schemaId" when calling getScimV2Schema';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/v2/schemas/{schemaId}', 
			'GET', 
			{ 'schemaId': schemaId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Get a list of SCIM schemas
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.filter Filtered results are invalid and return 403 Unauthorized.
	 */
	getScimV2Schemas(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/scim/v2/schemas', 
			'GET', 
			{  },
			{ 'filter': opts['filter'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Get a service provider's configuration
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifNoneMatch The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/serviceproviderconfig. Example: 42. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified. 
	 */
	getScimV2Serviceproviderconfig(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/scim/v2/serviceproviderconfig', 
			'GET', 
			{  },
			{  },
			{ 'If-None-Match': opts['ifNoneMatch'] },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Get a user
	 * 
	 * @param {String} userId The ID of a user. Returned with GET /api/v2/scim/v2/users.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.attributes Indicates which attributes to include. Returns these attributes and the id, userName, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes.
	 * @param {Array.<String>} opts.excludedAttributes Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns the id, userName, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes.
	 * @param {String} opts.ifNoneMatch The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified.
	 */
	getScimV2User(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getScimV2User';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/v2/users/{userId}', 
			'GET', 
			{ 'userId': userId },
			{ 'attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'multi'),'excludedAttributes': this.apiClient.buildCollectionParam(opts['excludedAttributes'], 'multi') },
			{ 'If-None-Match': opts['ifNoneMatch'] },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Get a list of users
	 * To return all active users, do not use the filter parameter. To return inactive users, set the filter parameter to "active eq false". By default, returns SCIM attributes "externalId", "enterprise-user:manager", and "roles". To exclude these attributes, set the attributes parameter to "id,active" or the excludeAttributes parameter to "externalId,roles,urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division".
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.startIndex The 1-based index of the first query result. (default to 1)
	 * @param {Number} opts.count The requested number of items per page. A value of 0 returns totalResults. A page size over 25 may exceed internal resource limits and return a 429 error. For a page size over 25, use the excludedAttributes or attributes query parameters to exclude or only include secondary lookup values such as externalId,  roles, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages, or urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills. (default to 25)
	 * @param {Array.<String>} opts.attributes Indicates which attributes to include. Returns these attributes and the id, userName, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes.
	 * @param {Array.<String>} opts.excludedAttributes Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns the id, userName, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes.
	 * @param {String} opts.filter Filters results. If nothing is specified, returns all active users. Examples of valid values: id eq 857449b0-d9e7-4cd0-acbf-a6adfb9ef1e9, userName eq search@sample.org, manager eq 16e10e2f-1136-43fe-bb84-eac073168a49, email eq search@sample.org, division eq divisionName, externalId eq 167844, active eq false, employeeNumber eq 9876543210.
	 */
	getScimV2Users(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/scim/v2/users', 
			'GET', 
			{  },
			{ 'startIndex': opts['startIndex'],'count': opts['count'],'attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'multi'),'excludedAttributes': this.apiClient.buildCollectionParam(opts['excludedAttributes'], 'multi'),'filter': opts['filter'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Modify a group
	 * 
	 * @param {String} groupId The ID of a group. Returned with GET /api/v2/scim/groups.
	 * @param {Object} body The information used to modify a group.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/groups/{groupId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers.
	 */
	patchScimGroup(groupId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling patchScimGroup';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchScimGroup';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/groups/{groupId}', 
			'PATCH', 
			{ 'groupId': groupId },
			{  },
			{ 'If-Match': opts['ifMatch'] },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/scim+json', 'application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Modify a user
	 * 
	 * @param {String} userId The ID of a user. Returned with GET /api/v2/scim/users.
	 * @param {Object} body The information used to modify a user.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers.
	 */
	patchScimUser(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling patchScimUser';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchScimUser';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/users/{userId}', 
			'PATCH', 
			{ 'userId': userId },
			{  },
			{ 'If-Match': opts['ifMatch'] },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/scim+json', 'application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Modify a group
	 * 
	 * @param {String} groupId The ID of a group. Returned with GET /api/v2/scim/v2/groups.
	 * @param {Object} body The information used to modify a group.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers.
	 */
	patchScimV2Group(groupId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling patchScimV2Group';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchScimV2Group';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/v2/groups/{groupId}', 
			'PATCH', 
			{ 'groupId': groupId },
			{  },
			{ 'If-Match': opts['ifMatch'] },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/scim+json', 'application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Modify a user
	 * 
	 * @param {String} userId The ID of a user. Returned with GET /api/v2/scim/v2/users.
	 * @param {Object} body The information used to modify a user.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers.
	 */
	patchScimV2User(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling patchScimV2User';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchScimV2User';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/v2/users/{userId}', 
			'PATCH', 
			{ 'userId': userId },
			{  },
			{ 'If-Match': opts['ifMatch'] },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/scim+json', 'application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Create a user
	 * 
	 * @param {Object} body The information used to create a user.
	 */
	postScimUsers(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postScimUsers';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/users', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/scim+json', 'application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Create a user
	 * 
	 * @param {Object} body The information used to create a user.
	 */
	postScimV2Users(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postScimV2Users';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/v2/users', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/scim+json', 'application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Replace a group
	 * 
	 * @param {String} groupId The ID of a group. Returned with GET /api/v2/scim/groups.
	 * @param {Object} body The information used to replace a group.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/groups/{groupId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers.
	 */
	putScimGroup(groupId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling putScimGroup';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putScimGroup';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/groups/{groupId}', 
			'PUT', 
			{ 'groupId': groupId },
			{  },
			{ 'If-Match': opts['ifMatch'] },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/scim+json', 'application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Replace a user
	 * 
	 * @param {String} userId The ID of a user. Returned with GET /api/v2/scim/users.
	 * @param {Object} body The information used to replace a user.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers.
	 */
	putScimUser(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling putScimUser';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putScimUser';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/users/{userId}', 
			'PUT', 
			{ 'userId': userId },
			{  },
			{ 'If-Match': opts['ifMatch'] },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/scim+json', 'application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Replace a group
	 * 
	 * @param {String} groupId The ID of a group. Returned with GET /api/v2/scim/v2/groups.
	 * @param {Object} body The information used to replace a group.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers.
	 */
	putScimV2Group(groupId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling putScimV2Group';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putScimV2Group';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/v2/groups/{groupId}', 
			'PUT', 
			{ 'groupId': groupId },
			{  },
			{ 'If-Match': opts['ifMatch'] },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/scim+json', 'application/json'],
			['application/scim+json', 'application/json']
		);
	}

	/**
	 * Replace a user
	 * 
	 * @param {String} userId The ID of a user. Returned with GET /api/v2/scim/v2/users.
	 * @param {Object} body The information used to replace a user.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers.
	 */
	putScimV2User(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling putScimV2User';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putScimV2User';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/v2/users/{userId}', 
			'PUT', 
			{ 'userId': userId },
			{  },
			{ 'If-Match': opts['ifMatch'] },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/scim+json', 'application/json'],
			['application/scim+json', 'application/json']
		);
	}

}


export default SCIMApi;
