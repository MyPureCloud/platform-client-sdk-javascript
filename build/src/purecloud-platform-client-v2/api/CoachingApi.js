import ApiClient from '../ApiClient.js';


class CoachingApi {
	/**
	 * Coaching service.
	 * @module purecloud-platform-client-v2/api/CoachingApi
	 * @version 126.1.0
	 */

	/**
	 * Constructs a new CoachingApi. 
	 * @alias module:purecloud-platform-client-v2/api/CoachingApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete an existing appointment
	 * Permission not required if you are the creator of the appointment
	 * @param {String} appointmentId The ID of the coaching appointment.
	 */
	deleteCoachingAppointment(appointmentId) { 
		// verify the required parameter 'appointmentId' is set
		if (appointmentId === undefined || appointmentId === null) {
			throw 'Missing the required parameter "appointmentId" when calling deleteCoachingAppointment';
		}

		return this.apiClient.callApi(
			'/api/v2/coaching/appointments/{appointmentId}', 
			'DELETE', 
			{ 'appointmentId': appointmentId }, 
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
	 * Delete an existing annotation
	 * You must have the appropriate permission for the type of annotation you are updating. Permission not required if you are the creator or facilitator of the appointment
	 * @param {String} appointmentId The ID of the coaching appointment.
	 * @param {String} annotationId The ID of the annotation.
	 */
	deleteCoachingAppointmentAnnotation(appointmentId, annotationId) { 
		// verify the required parameter 'appointmentId' is set
		if (appointmentId === undefined || appointmentId === null) {
			throw 'Missing the required parameter "appointmentId" when calling deleteCoachingAppointmentAnnotation';
		}
		// verify the required parameter 'annotationId' is set
		if (annotationId === undefined || annotationId === null) {
			throw 'Missing the required parameter "annotationId" when calling deleteCoachingAppointmentAnnotation';
		}

		return this.apiClient.callApi(
			'/api/v2/coaching/appointments/{appointmentId}/annotations/{annotationId}', 
			'DELETE', 
			{ 'appointmentId': appointmentId,'annotationId': annotationId }, 
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
	 * Retrieve an appointment
	 * Permission not required if you are the attendee, creator or facilitator of the appointment
	 * @param {String} appointmentId The ID of the coaching appointment.
	 */
	getCoachingAppointment(appointmentId) { 
		// verify the required parameter 'appointmentId' is set
		if (appointmentId === undefined || appointmentId === null) {
			throw 'Missing the required parameter "appointmentId" when calling getCoachingAppointment';
		}

		return this.apiClient.callApi(
			'/api/v2/coaching/appointments/{appointmentId}', 
			'GET', 
			{ 'appointmentId': appointmentId }, 
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
	 * Retrieve an annotation.
	 * You must have the appropriate permission for the type of annotation you are creating. Permission not required if you are related to the appointment (only the creator or facilitator can view private annotations).
	 * @param {String} appointmentId The ID of the coaching appointment.
	 * @param {String} annotationId The ID of the annotation.
	 */
	getCoachingAppointmentAnnotation(appointmentId, annotationId) { 
		// verify the required parameter 'appointmentId' is set
		if (appointmentId === undefined || appointmentId === null) {
			throw 'Missing the required parameter "appointmentId" when calling getCoachingAppointmentAnnotation';
		}
		// verify the required parameter 'annotationId' is set
		if (annotationId === undefined || annotationId === null) {
			throw 'Missing the required parameter "annotationId" when calling getCoachingAppointmentAnnotation';
		}

		return this.apiClient.callApi(
			'/api/v2/coaching/appointments/{appointmentId}/annotations/{annotationId}', 
			'GET', 
			{ 'appointmentId': appointmentId,'annotationId': annotationId }, 
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
	 * Get a list of annotations.
	 * You must have the appropriate permission for the type of annotation you are creating. Permission not required if you are related to the appointment (only the creator or facilitator can view private annotations).
	 * @param {String} appointmentId The ID of the coaching appointment.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getCoachingAppointmentAnnotations(appointmentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'appointmentId' is set
		if (appointmentId === undefined || appointmentId === null) {
			throw 'Missing the required parameter "appointmentId" when calling getCoachingAppointmentAnnotations';
		}

		return this.apiClient.callApi(
			'/api/v2/coaching/appointments/{appointmentId}/annotations', 
			'GET', 
			{ 'appointmentId': appointmentId }, 
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the list of status changes for a coaching appointment.
	 * Permission not required if you are an attendee, creator or facilitator of the appointment
	 * @param {String} appointmentId The ID of the coaching appointment.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getCoachingAppointmentStatuses(appointmentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'appointmentId' is set
		if (appointmentId === undefined || appointmentId === null) {
			throw 'Missing the required parameter "appointmentId" when calling getCoachingAppointmentStatuses';
		}

		return this.apiClient.callApi(
			'/api/v2/coaching/appointments/{appointmentId}/statuses', 
			'GET', 
			{ 'appointmentId': appointmentId }, 
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get appointments for users and optional date range
	 * 
	 * @param {Array.<String>} userIds The user IDs for which to retrieve appointments
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.interval Interval to filter data by. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Array.<String>} opts.statuses Appointment Statuses to filter by
	 * @param {Array.<String>} opts.facilitatorIds The facilitator IDs for which to retrieve appointments
	 * @param {Object} opts.sortOrder Sort (by due date) either Asc or Desc
	 * @param {Array.<String>} opts.relationships Relationships to filter by
	 * @param {String} opts.completionInterval Appointment completion start and end to filter by. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {Object} opts.overdue Overdue status to filter by
	 */
	getCoachingAppointments(userIds, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userIds' is set
		if (userIds === undefined || userIds === null) {
			throw 'Missing the required parameter "userIds" when calling getCoachingAppointments';
		}

		return this.apiClient.callApi(
			'/api/v2/coaching/appointments', 
			'GET', 
			{  }, 
			{ 'userIds': this.apiClient.buildCollectionParam(userIds, 'multi'),'interval': opts['interval'],'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'statuses': this.apiClient.buildCollectionParam(opts['statuses'], 'multi'),'facilitatorIds': this.apiClient.buildCollectionParam(opts['facilitatorIds'], 'multi'),'sortOrder': opts['sortOrder'],'relationships': this.apiClient.buildCollectionParam(opts['relationships'], 'multi'),'completionInterval': opts['completionInterval'],'overdue': opts['overdue'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get my appointments for a given date range
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.interval Interval to filter data by. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Array.<String>} opts.statuses Appointment Statuses to filter by
	 * @param {Array.<String>} opts.facilitatorIds The facilitator IDs for which to retrieve appointments
	 * @param {Object} opts.sortOrder Sort (by due date) either Asc or Desc
	 * @param {Array.<String>} opts.relationships Relationships to filter by
	 * @param {String} opts.completionInterval Appointment completion start and end to filter by. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {Object} opts.overdue Overdue status to filter by
	 */
	getCoachingAppointmentsMe(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/coaching/appointments/me', 
			'GET', 
			{  }, 
			{ 'interval': opts['interval'],'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'statuses': this.apiClient.buildCollectionParam(opts['statuses'], 'multi'),'facilitatorIds': this.apiClient.buildCollectionParam(opts['facilitatorIds'], 'multi'),'sortOrder': opts['sortOrder'],'relationships': this.apiClient.buildCollectionParam(opts['relationships'], 'multi'),'completionInterval': opts['completionInterval'],'overdue': opts['overdue'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get an existing notification
	 * Permission not required if you are the owner of the notification.
	 * @param {String} notificationId The ID of the notification.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Indicates a field in the response which should be expanded.
	 */
	getCoachingNotification(notificationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'notificationId' is set
		if (notificationId === undefined || notificationId === null) {
			throw 'Missing the required parameter "notificationId" when calling getCoachingNotification';
		}

		return this.apiClient.callApi(
			'/api/v2/coaching/notifications/{notificationId}', 
			'GET', 
			{ 'notificationId': notificationId }, 
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Retrieve the list of your notifications.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Array.<String>} opts.expand Indicates a field in the response which should be expanded.
	 */
	getCoachingNotifications(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/coaching/notifications', 
			'GET', 
			{  }, 
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Update an existing appointment
	 * Permission not required if you are the creator or facilitator of the appointment
	 * @param {String} appointmentId The ID of the coaching appointment.
	 * @param {Object} body The new version of the appointment
	 */
	patchCoachingAppointment(appointmentId, body) { 
		// verify the required parameter 'appointmentId' is set
		if (appointmentId === undefined || appointmentId === null) {
			throw 'Missing the required parameter "appointmentId" when calling patchCoachingAppointment';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchCoachingAppointment';
		}

		return this.apiClient.callApi(
			'/api/v2/coaching/appointments/{appointmentId}', 
			'PATCH', 
			{ 'appointmentId': appointmentId }, 
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
	 * Update an existing annotation.
	 * You must have the appropriate permission for the type of annotation you are updating. Permission not required if you are the creator or facilitator of the appointment
	 * @param {String} appointmentId The ID of the coaching appointment.
	 * @param {String} annotationId The ID of the annotation.
	 * @param {Object} body The new version of the annotation
	 */
	patchCoachingAppointmentAnnotation(appointmentId, annotationId, body) { 
		// verify the required parameter 'appointmentId' is set
		if (appointmentId === undefined || appointmentId === null) {
			throw 'Missing the required parameter "appointmentId" when calling patchCoachingAppointmentAnnotation';
		}
		// verify the required parameter 'annotationId' is set
		if (annotationId === undefined || annotationId === null) {
			throw 'Missing the required parameter "annotationId" when calling patchCoachingAppointmentAnnotation';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchCoachingAppointmentAnnotation';
		}

		return this.apiClient.callApi(
			'/api/v2/coaching/appointments/{appointmentId}/annotations/{annotationId}', 
			'PATCH', 
			{ 'appointmentId': appointmentId,'annotationId': annotationId }, 
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
	 * Update the status of a coaching appointment
	 * Permission not required if you are an attendee, creator or facilitator of the appointment
	 * @param {String} appointmentId The ID of the coaching appointment.
	 * @param {Object} body Updated status of the coaching appointment
	 */
	patchCoachingAppointmentStatus(appointmentId, body) { 
		// verify the required parameter 'appointmentId' is set
		if (appointmentId === undefined || appointmentId === null) {
			throw 'Missing the required parameter "appointmentId" when calling patchCoachingAppointmentStatus';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchCoachingAppointmentStatus';
		}

		return this.apiClient.callApi(
			'/api/v2/coaching/appointments/{appointmentId}/status', 
			'PATCH', 
			{ 'appointmentId': appointmentId }, 
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
	 * Update an existing notification.
	 * Can only update your own notifications.
	 * @param {String} notificationId The ID of the notification.
	 * @param {Object} body Change the read state of a notification
	 */
	patchCoachingNotification(notificationId, body) { 
		// verify the required parameter 'notificationId' is set
		if (notificationId === undefined || notificationId === null) {
			throw 'Missing the required parameter "notificationId" when calling patchCoachingNotification';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchCoachingNotification';
		}

		return this.apiClient.callApi(
			'/api/v2/coaching/notifications/{notificationId}', 
			'PATCH', 
			{ 'notificationId': notificationId }, 
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
	 * Create a new annotation.
	 * You must have the appropriate permission for the type of annotation you are creating. Permission not required if you are related to the appointment (only the creator or facilitator can create private annotations).
	 * @param {String} appointmentId The ID of the coaching appointment.
	 * @param {Object} body The annotation to add
	 */
	postCoachingAppointmentAnnotations(appointmentId, body) { 
		// verify the required parameter 'appointmentId' is set
		if (appointmentId === undefined || appointmentId === null) {
			throw 'Missing the required parameter "appointmentId" when calling postCoachingAppointmentAnnotations';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postCoachingAppointmentAnnotations';
		}

		return this.apiClient.callApi(
			'/api/v2/coaching/appointments/{appointmentId}/annotations', 
			'POST', 
			{ 'appointmentId': appointmentId }, 
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
	 * Add a conversation to an appointment
	 * Permission not required if you are the creator or facilitator of the appointment
	 * @param {String} appointmentId The ID of the coaching appointment.
	 * @param {Object} body body
	 */
	postCoachingAppointmentConversations(appointmentId, body) { 
		// verify the required parameter 'appointmentId' is set
		if (appointmentId === undefined || appointmentId === null) {
			throw 'Missing the required parameter "appointmentId" when calling postCoachingAppointmentConversations';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postCoachingAppointmentConversations';
		}

		return this.apiClient.callApi(
			'/api/v2/coaching/appointments/{appointmentId}/conversations', 
			'POST', 
			{ 'appointmentId': appointmentId }, 
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
	 * Create a new appointment
	 * 
	 * @param {Object} body The appointment to add
	 */
	postCoachingAppointments(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postCoachingAppointments';
		}

		return this.apiClient.callApi(
			'/api/v2/coaching/appointments', 
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
	 * Retrieve aggregated appointment data
	 * 
	 * @param {Object} body Aggregate Request
	 */
	postCoachingAppointmentsAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postCoachingAppointmentsAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/coaching/appointments/aggregates/query', 
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
	 * Get list of possible slots where a coaching appointment can be scheduled.
	 * 
	 * @param {Object} body The slot search request
	 */
	postCoachingScheduleslotsQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postCoachingScheduleslotsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/coaching/scheduleslots/query', 
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

}


export default CoachingApi;