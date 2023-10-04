import ApiClient from '../ApiClient.js';


class DownloadsApi {
	/**
	 * Downloads service.
	 * @module purecloud-platform-client-v2/api/DownloadsApi
	 * @version 178.2.0
	 */

	/**
	 * Constructs a new DownloadsApi. 
	 * @alias module:purecloud-platform-client-v2/api/DownloadsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Issues a redirect to a signed secure download URL for specified download
	 * this method will issue a redirect to the url to the content
	 * @param {String} downloadId Download ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.contentDisposition 
	 * @param {Boolean} opts.issueRedirect  (default to true)
	 * @param {Boolean} opts.redirectToAuth  (default to true)
	 */
	getDownload(downloadId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'downloadId' is set
		if (downloadId === undefined || downloadId === null) {
			throw 'Missing the required parameter "downloadId" when calling getDownload';
		}

		return this.apiClient.callApi(
			'/api/v2/downloads/{downloadId}', 
			'GET', 
			{ 'downloadId': downloadId },
			{ 'contentDisposition': opts['contentDisposition'],'issueRedirect': opts['issueRedirect'],'redirectToAuth': opts['redirectToAuth'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * OAuth Callback used during code authorization grant flow.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.code code
	 * @param {String} opts.state state
	 * @param {String} opts.error error
	 */
	getDownloadsCallback(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/downloads/callback', 
			'GET', 
			{  },
			{ 'code': opts['code'],'state': opts['state'],'error': opts['error'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default DownloadsApi;
