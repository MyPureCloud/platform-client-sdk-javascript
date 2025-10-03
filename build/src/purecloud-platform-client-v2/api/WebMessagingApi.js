import ApiClient from '../ApiClient.js';


class WebMessagingApi {
	/**
	 * WebMessaging service.
	 * @module purecloud-platform-client-v2/api/WebMessagingApi
	 * @version 233.0.0
	 */

	/**
	 * Constructs a new WebMessagingApi. 
	 * @alias module:purecloud-platform-client-v2/api/WebMessagingApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete device information
	 * 
	 * @param {String} deploymentId WebMessaging deployment id
	 * @param {String} tokenId Device token id or cookie id
	 */
	deleteWebmessagingDeploymentPushdevice(deploymentId, tokenId) { 
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null || deploymentId === '') {
			throw 'Missing the required parameter "deploymentId" when calling deleteWebmessagingDeploymentPushdevice';
		}
		// verify the required parameter 'tokenId' is set
		if (tokenId === undefined || tokenId === null || tokenId === '') {
			throw 'Missing the required parameter "tokenId" when calling deleteWebmessagingDeploymentPushdevice';
		}

		return this.apiClient.callApi(
			'/api/v2/webmessaging/deployments/{deploymentId}/pushdevices/{tokenId}', 
			'DELETE', 
			{ 'deploymentId': deploymentId,'tokenId': tokenId },
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
	 * Get the messages for a web messaging session.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getWebmessagingMessages(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/webmessaging/messages', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Edit device information
	 * 
	 * @param {String} deploymentId WebMessaging deployment id
	 * @param {String} tokenId Device token id or cookie id
	 * @param {Object} body Request body
	 */
	patchWebmessagingDeploymentPushdevice(deploymentId, tokenId, body) { 
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null || deploymentId === '') {
			throw 'Missing the required parameter "deploymentId" when calling patchWebmessagingDeploymentPushdevice';
		}
		// verify the required parameter 'tokenId' is set
		if (tokenId === undefined || tokenId === null || tokenId === '') {
			throw 'Missing the required parameter "tokenId" when calling patchWebmessagingDeploymentPushdevice';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWebmessagingDeploymentPushdevice';
		}

		return this.apiClient.callApi(
			'/api/v2/webmessaging/deployments/{deploymentId}/pushdevices/{tokenId}', 
			'PATCH', 
			{ 'deploymentId': deploymentId,'tokenId': tokenId },
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
	 * Add a new device information
	 * 
	 * @param {String} deploymentId WebMessaging deployment id
	 * @param {String} tokenId Device token id or cookie id
	 * @param {Object} body Request body
	 */
	postWebmessagingDeploymentPushdevice(deploymentId, tokenId, body) { 
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null || deploymentId === '') {
			throw 'Missing the required parameter "deploymentId" when calling postWebmessagingDeploymentPushdevice';
		}
		// verify the required parameter 'tokenId' is set
		if (tokenId === undefined || tokenId === null || tokenId === '') {
			throw 'Missing the required parameter "tokenId" when calling postWebmessagingDeploymentPushdevice';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWebmessagingDeploymentPushdevice';
		}

		return this.apiClient.callApi(
			'/api/v2/webmessaging/deployments/{deploymentId}/pushdevices/{tokenId}', 
			'POST', 
			{ 'deploymentId': deploymentId,'tokenId': tokenId },
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


export default WebMessagingApi;
