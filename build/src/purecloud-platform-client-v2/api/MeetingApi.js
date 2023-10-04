import ApiClient from '../ApiClient.js';


class MeetingApi {
	/**
	 * Meeting service.
	 * @module purecloud-platform-client-v2/api/MeetingApi
	 * @version 178.2.0
	 */

	/**
	 * Constructs a new MeetingApi. 
	 * @alias module:purecloud-platform-client-v2/api/MeetingApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a Meeting
	 * 
	 * @param {String} meetingId Meeting ID
	 */
	deleteMeeting(meetingId) { 
		// verify the required parameter 'meetingId' is set
		if (meetingId === undefined || meetingId === null) {
			throw 'Missing the required parameter "meetingId" when calling deleteMeeting';
		}

		return this.apiClient.callApi(
			'/api/v2/meetings/{meetingId}', 
			'DELETE', 
			{ 'meetingId': meetingId },
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
	 * Delete a Meeting Occurrence
	 * 
	 * @param {String} meetingId Meeting ID
	 * @param {String} occurrenceId Meeting Occurrence ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.series Set this to true to delete entire series (default to false)
	 */
	deleteMeetingOccurrence(meetingId, occurrenceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'meetingId' is set
		if (meetingId === undefined || meetingId === null) {
			throw 'Missing the required parameter "meetingId" when calling deleteMeetingOccurrence';
		}
		// verify the required parameter 'occurrenceId' is set
		if (occurrenceId === undefined || occurrenceId === null) {
			throw 'Missing the required parameter "occurrenceId" when calling deleteMeetingOccurrence';
		}

		return this.apiClient.callApi(
			'/api/v2/meetings/{meetingId}/occurrences/{occurrenceId}', 
			'DELETE', 
			{ 'meetingId': meetingId,'occurrenceId': occurrenceId },
			{ 'series': opts['series'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a Meeting based on ID
	 * 
	 * @param {String} meetingId Meeting ID
	 */
	getMeeting(meetingId) { 
		// verify the required parameter 'meetingId' is set
		if (meetingId === undefined || meetingId === null) {
			throw 'Missing the required parameter "meetingId" when calling getMeeting';
		}

		return this.apiClient.callApi(
			'/api/v2/meetings/{meetingId}', 
			'GET', 
			{ 'meetingId': meetingId },
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
	 * Get a Meeting Occurrence based on Occurrence ID
	 * 
	 * @param {String} meetingId Meeting ID
	 * @param {String} occurrenceId Meeting Occurrence ID
	 */
	getMeetingOccurrence(meetingId, occurrenceId) { 
		// verify the required parameter 'meetingId' is set
		if (meetingId === undefined || meetingId === null) {
			throw 'Missing the required parameter "meetingId" when calling getMeetingOccurrence';
		}
		// verify the required parameter 'occurrenceId' is set
		if (occurrenceId === undefined || occurrenceId === null) {
			throw 'Missing the required parameter "occurrenceId" when calling getMeetingOccurrence';
		}

		return this.apiClient.callApi(
			'/api/v2/meetings/{meetingId}/occurrences/{occurrenceId}', 
			'GET', 
			{ 'meetingId': meetingId,'occurrenceId': occurrenceId },
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
	 * Get all user's meetings
	 * 
	 * @param {String} userId User ID
	 * @param {Date} startDate Meeting's start date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Date} endDate Meeting's end date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 */
	getUserMeetings(userId, startDate, endDate) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserMeetings';
		}
		// verify the required parameter 'startDate' is set
		if (startDate === undefined || startDate === null) {
			throw 'Missing the required parameter "startDate" when calling getUserMeetings';
		}
		// verify the required parameter 'endDate' is set
		if (endDate === undefined || endDate === null) {
			throw 'Missing the required parameter "endDate" when calling getUserMeetings';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/meetings', 
			'GET', 
			{ 'userId': userId },
			{ 'startDate': startDate,'endDate': endDate },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a Meeting
	 * 
	 * @param {Object} body Meeting to create
	 */
	postMeetings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMeetings';
		}

		return this.apiClient.callApi(
			'/api/v2/meetings', 
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
	 * Update a Meeting
	 * 
	 * @param {String} meetingId Meeting ID
	 * @param {Object} body Meeting to update
	 */
	putMeeting(meetingId, body) { 
		// verify the required parameter 'meetingId' is set
		if (meetingId === undefined || meetingId === null) {
			throw 'Missing the required parameter "meetingId" when calling putMeeting';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putMeeting';
		}

		return this.apiClient.callApi(
			'/api/v2/meetings/{meetingId}', 
			'PUT', 
			{ 'meetingId': meetingId },
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
	 * Update a Meeting Occurrence
	 * 
	 * @param {String} meetingId Meeting ID
	 * @param {String} occurrenceId Meeting Occurrence ID
	 * @param {Object} body Meeting Occurrence to update
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.series Set this to true to apply updates to the entire series (default to false)
	 */
	putMeetingOccurrence(meetingId, occurrenceId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'meetingId' is set
		if (meetingId === undefined || meetingId === null) {
			throw 'Missing the required parameter "meetingId" when calling putMeetingOccurrence';
		}
		// verify the required parameter 'occurrenceId' is set
		if (occurrenceId === undefined || occurrenceId === null) {
			throw 'Missing the required parameter "occurrenceId" when calling putMeetingOccurrence';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putMeetingOccurrence';
		}

		return this.apiClient.callApi(
			'/api/v2/meetings/{meetingId}/occurrences/{occurrenceId}', 
			'PUT', 
			{ 'meetingId': meetingId,'occurrenceId': occurrenceId },
			{ 'series': opts['series'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default MeetingApi;
