import ApiClient from '../ApiClient.js';


class AnomalyDetectionApi {
	/**
	 * AnomalyDetection service.
	 * @module purecloud-platform-client-v2/api/AnomalyDetectionApi
	 * @version 267.0.0
	 */

	/**
	 * Constructs a new AnomalyDetectionApi. 
	 * @alias module:purecloud-platform-client-v2/api/AnomalyDetectionApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get forecasted bounds and analysis for the specified queue
	 * 
	 * @param {String} queueId The ID of the queue for which to retrieve anomaly analysis
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.metrics The metrics by which to filter the analysis. When not specified, returns all metrics
	 * @param {Array.<String>} opts.mediaTypes The media types by which to filter the analysis. When not specified, returns analysis for Email, Message, and Voice
	 * @param {String} opts.startTime The start of the time range for the analysis, in ISO-8601 format. If not specified, defaults to 48 hours before the most recent UTC midnight
	 * @param {String} opts.endTime The end of the time range for the analysis, in ISO-8601 format. If not specified, defaults to 48 hours after the most recent UTC midnight
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSignalsAnomalydetectionQueueAnalysis(queueId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling getSignalsAnomalydetectionQueueAnalysis';
		}

		return this.apiClient.callApi(
			'/api/v2/signals/anomalydetection/queues/{queueId}/analysis', 
			'GET', 
			{ 'queueId': queueId },
			{ 'metrics': this.apiClient.buildCollectionParam(opts['metrics'], 'multi'),'mediaTypes': this.apiClient.buildCollectionParam(opts['mediaTypes'], 'multi'),'startTime': opts['startTime'],'endTime': opts['endTime'] },
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
	 * Get status of the queue anomaly export job
	 * 
	 * @param {String} jobId The ID of the anomaly export job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSignalsAnomalydetectionQueueAnomaliesExportsJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getSignalsAnomalydetectionQueueAnomaliesExportsJob';
		}

		return this.apiClient.callApi(
			'/api/v2/signals/anomalydetection/queue/anomalies/exports/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Get a queue anomaly by ID
	 * 
	 * @param {String} anomalyId The ID of the queue anomaly
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSignalsAnomalydetectionQueueAnomaly(anomalyId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'anomalyId' is set
		if (anomalyId === undefined || anomalyId === null || anomalyId === '') {
			throw 'Missing the required parameter "anomalyId" when calling getSignalsAnomalydetectionQueueAnomaly';
		}

		return this.apiClient.callApi(
			'/api/v2/signals/anomalydetection/queue/anomalies/{anomalyId}', 
			'GET', 
			{ 'anomalyId': anomalyId },
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
	 * Get queues available for anomaly detection monitoring
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size. Max is 1000. (default to 50)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSignalsAnomalydetectionQueuesAvailable(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/signals/anomalydetection/queues/available', 
			'GET', 
			{  },
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
	 * Get the list of queues currently enabled for anomaly detection monitoring
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSignalsAnomalydetectionQueuesMonitored(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/signals/anomalydetection/queues/monitored', 
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
	 * Get organization specific anomaly settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSignalsAnomalydetectionSettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/signals/anomalydetection/settings', 
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
	 * Update a queue anomaly by ID
	 * 
	 * @param {String} anomalyId The ID of the queue anomaly
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchSignalsAnomalydetectionQueueAnomaly(anomalyId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'anomalyId' is set
		if (anomalyId === undefined || anomalyId === null || anomalyId === '') {
			throw 'Missing the required parameter "anomalyId" when calling patchSignalsAnomalydetectionQueueAnomaly';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchSignalsAnomalydetectionQueueAnomaly';
		}

		return this.apiClient.callApi(
			'/api/v2/signals/anomalydetection/queue/anomalies/{anomalyId}', 
			'PATCH', 
			{ 'anomalyId': anomalyId },
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
	 * Add or remove queues from anomaly detection monitoring
	 * 
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchSignalsAnomalydetectionQueuesMonitored(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchSignalsAnomalydetectionQueuesMonitored';
		}

		return this.apiClient.callApi(
			'/api/v2/signals/anomalydetection/queues/monitored', 
			'PATCH', 
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
	 * Create a queue anomaly export job
	 * 
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postSignalsAnomalydetectionQueueAnomaliesExportsJobs(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSignalsAnomalydetectionQueueAnomaliesExportsJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/signals/anomalydetection/queue/anomalies/exports/jobs', 
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
	 * Query for queue anomalies
	 * 
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postSignalsAnomalydetectionQueueAnomaliesQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSignalsAnomalydetectionQueueAnomaliesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/signals/anomalydetection/queue/anomalies/query', 
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
	 * Get summary of queue anomalies
	 * 
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postSignalsAnomalydetectionQueueAnomaliesSummary(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSignalsAnomalydetectionQueueAnomaliesSummary';
		}

		return this.apiClient.callApi(
			'/api/v2/signals/anomalydetection/queue/anomalies/summary', 
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
	 * Update organization specific anomaly settings
	 * 
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putSignalsAnomalydetectionSettings(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putSignalsAnomalydetectionSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/signals/anomalydetection/settings', 
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


export default AnomalyDetectionApi;
