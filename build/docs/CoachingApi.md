# CoachingApi

# platformClient.CoachingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteCoachingAppointment**](CoachingApi#deleteCoachingAppointment) | **DELETE** /api/v2/coaching/appointments/{appointmentId} | Delete an existing appointment
[**deleteCoachingAppointmentAnnotation**](CoachingApi#deleteCoachingAppointmentAnnotation) | **DELETE** /api/v2/coaching/appointments/{appointmentId}/annotations/{annotationId} | Delete an existing annotation
[**getCoachingAppointment**](CoachingApi#getCoachingAppointment) | **GET** /api/v2/coaching/appointments/{appointmentId} | Retrieve an appointment
[**getCoachingAppointmentAnnotation**](CoachingApi#getCoachingAppointmentAnnotation) | **GET** /api/v2/coaching/appointments/{appointmentId}/annotations/{annotationId} | Retrieve an annotation.
[**getCoachingAppointmentAnnotations**](CoachingApi#getCoachingAppointmentAnnotations) | **GET** /api/v2/coaching/appointments/{appointmentId}/annotations | Get a list of annotations.
[**getCoachingAppointmentStatuses**](CoachingApi#getCoachingAppointmentStatuses) | **GET** /api/v2/coaching/appointments/{appointmentId}/statuses | Get the list of status changes for a coaching appointment.
[**getCoachingAppointments**](CoachingApi#getCoachingAppointments) | **GET** /api/v2/coaching/appointments | Get appointments for users and optional date range
[**getCoachingAppointmentsMe**](CoachingApi#getCoachingAppointmentsMe) | **GET** /api/v2/coaching/appointments/me | Get my appointments for a given date range
[**getCoachingNotification**](CoachingApi#getCoachingNotification) | **GET** /api/v2/coaching/notifications/{notificationId} | Get an existing notification
[**getCoachingNotifications**](CoachingApi#getCoachingNotifications) | **GET** /api/v2/coaching/notifications | Retrieve the list of your notifications.
[**getCoachingScheduleslotsJob**](CoachingApi#getCoachingScheduleslotsJob) | **GET** /api/v2/coaching/scheduleslots/jobs/{jobId} | Retrieve the status of the job for the slots where a coaching appointment can be scheduled.
[**patchCoachingAppointment**](CoachingApi#patchCoachingAppointment) | **PATCH** /api/v2/coaching/appointments/{appointmentId} | Update an existing appointment
[**patchCoachingAppointmentAnnotation**](CoachingApi#patchCoachingAppointmentAnnotation) | **PATCH** /api/v2/coaching/appointments/{appointmentId}/annotations/{annotationId} | Update an existing annotation.
[**patchCoachingAppointmentStatus**](CoachingApi#patchCoachingAppointmentStatus) | **PATCH** /api/v2/coaching/appointments/{appointmentId}/status | Update the status of a coaching appointment
[**patchCoachingNotification**](CoachingApi#patchCoachingNotification) | **PATCH** /api/v2/coaching/notifications/{notificationId} | Update an existing notification.
[**postCoachingAppointmentAnnotations**](CoachingApi#postCoachingAppointmentAnnotations) | **POST** /api/v2/coaching/appointments/{appointmentId}/annotations | Create a new annotation.
[**postCoachingAppointmentConversations**](CoachingApi#postCoachingAppointmentConversations) | **POST** /api/v2/coaching/appointments/{appointmentId}/conversations | Add a conversation to an appointment
[**postCoachingAppointments**](CoachingApi#postCoachingAppointments) | **POST** /api/v2/coaching/appointments | Create a new appointment
[**postCoachingAppointmentsAggregatesQuery**](CoachingApi#postCoachingAppointmentsAggregatesQuery) | **POST** /api/v2/coaching/appointments/aggregates/query | Retrieve aggregated appointment data
[**postCoachingScheduleslotsJobs**](CoachingApi#postCoachingScheduleslotsJobs) | **POST** /api/v2/coaching/scheduleslots/jobs | Start job to retrieve the slots where a coaching appointment can be scheduled.
[**postCoachingScheduleslotsQuery**](CoachingApi#postCoachingScheduleslotsQuery) | **POST** /api/v2/coaching/scheduleslots/query | Get list of possible slots where a coaching appointment can be scheduled.



## deleteCoachingAppointment

> CoachingAppointmentReference deleteCoachingAppointment(appointmentId, opts)


DELETE /api/v2/coaching/appointments/{appointmentId}

Delete an existing appointment

Permission not required if you are the creator of the appointment

Requires ANY permissions:

* coaching:appointment:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteCoachingAppointment(appointmentId, opts)
  .then((data) => {
    console.log(`deleteCoachingAppointment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteCoachingAppointment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **appointmentId** | **String** | The ID of the coaching appointment. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CoachingAppointmentReference**


## deleteCoachingAppointmentAnnotation

> void deleteCoachingAppointmentAnnotation(appointmentId, annotationId, opts)


DELETE /api/v2/coaching/appointments/{appointmentId}/annotations/{annotationId}

Delete an existing annotation

You must have the appropriate permission for the type of annotation you are updating. Permission not required if you are the creator or facilitator of the appointment

Requires ANY permissions:

* coaching:annotation:delete
* coaching:privateAnnotation:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.
let annotationId = "annotationId_example"; // String | The ID of the annotation.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteCoachingAppointmentAnnotation(appointmentId, annotationId, opts)
  .then(() => {
    console.log('deleteCoachingAppointmentAnnotation returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteCoachingAppointmentAnnotation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **appointmentId** | **String** | The ID of the coaching appointment. |  |
 **annotationId** | **String** | The ID of the annotation. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getCoachingAppointment

> CoachingAppointmentResponse getCoachingAppointment(appointmentId, opts)


GET /api/v2/coaching/appointments/{appointmentId}

Retrieve an appointment

Permission not required if you are the attendee, creator or facilitator of the appointment

Requires ANY permissions:

* coaching:appointment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCoachingAppointment(appointmentId, opts)
  .then((data) => {
    console.log(`getCoachingAppointment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCoachingAppointment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **appointmentId** | **String** | The ID of the coaching appointment. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CoachingAppointmentResponse**


## getCoachingAppointmentAnnotation

> CoachingAnnotation getCoachingAppointmentAnnotation(appointmentId, annotationId, opts)


GET /api/v2/coaching/appointments/{appointmentId}/annotations/{annotationId}

Retrieve an annotation.

You must have the appropriate permission for the type of annotation you are creating. Permission not required if you are related to the appointment (only the creator or facilitator can view private annotations).

Requires ANY permissions:

* coaching:annotation:view
* coaching:privateAnnotation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.
let annotationId = "annotationId_example"; // String | The ID of the annotation.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCoachingAppointmentAnnotation(appointmentId, annotationId, opts)
  .then((data) => {
    console.log(`getCoachingAppointmentAnnotation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCoachingAppointmentAnnotation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **appointmentId** | **String** | The ID of the coaching appointment. |  |
 **annotationId** | **String** | The ID of the annotation. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CoachingAnnotation**


## getCoachingAppointmentAnnotations

> CoachingAnnotationList getCoachingAppointmentAnnotations(appointmentId, opts)


GET /api/v2/coaching/appointments/{appointmentId}/annotations

Get a list of annotations.

You must have the appropriate permission for the type of annotation you are creating. Permission not required if you are related to the appointment (only the creator or facilitator can view private annotations).

Requires ANY permissions:

* coaching:annotation:view
* coaching:privateAnnotation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCoachingAppointmentAnnotations(appointmentId, opts)
  .then((data) => {
    console.log(`getCoachingAppointmentAnnotations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCoachingAppointmentAnnotations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **appointmentId** | **String** | The ID of the coaching appointment. |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CoachingAnnotationList**


## getCoachingAppointmentStatuses

> CoachingAppointmentStatusResponseList getCoachingAppointmentStatuses(appointmentId, opts)


GET /api/v2/coaching/appointments/{appointmentId}/statuses

Get the list of status changes for a coaching appointment.

Permission not required if you are an attendee, creator or facilitator of the appointment

Requires ANY permissions:

* coaching:appointmentStatus:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCoachingAppointmentStatuses(appointmentId, opts)
  .then((data) => {
    console.log(`getCoachingAppointmentStatuses success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCoachingAppointmentStatuses');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **appointmentId** | **String** | The ID of the coaching appointment. |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CoachingAppointmentStatusResponseList**


## getCoachingAppointments

> CoachingAppointmentResponseList getCoachingAppointments(userIds, opts)


GET /api/v2/coaching/appointments

Get appointments for users and optional date range

Requires ANY permissions:

* coaching:appointment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let userIds = ["userIds_example"]; // [String] | The user IDs for which to retrieve appointments
let opts = { 
  'interval': "interval_example", // String | Interval to filter data by. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'statuses': ["statuses_example"], // [String] | Appointment Statuses to filter by
  'facilitatorIds': ["facilitatorIds_example"], // [String] | The facilitator IDs for which to retrieve appointments
  'sortOrder': "sortOrder_example", // String | Sort (by due date) either Asc or Desc
  'relationships': ["relationships_example"], // [String] | Relationships to filter by
  'completionInterval': "completionInterval_example", // String | Appointment completion start and end to filter by. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'overdue': "overdue_example", // String | Overdue status to filter by
  'intervalCondition': "intervalCondition_example", // String | Filter condition for interval
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCoachingAppointments(userIds, opts)
  .then((data) => {
    console.log(`getCoachingAppointments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCoachingAppointments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userIds** | **[String]** | The user IDs for which to retrieve appointments |  |
 **interval** | **String** | Interval to filter data by. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **statuses** | **[String]** | Appointment Statuses to filter by | [optional] <br />**Values**: Scheduled, InProgress, Completed, InvalidSchedule |
 **facilitatorIds** | **[String]** | The facilitator IDs for which to retrieve appointments | [optional]  |
 **sortOrder** | **String** | Sort (by due date) either Asc or Desc | [optional] <br />**Values**: Desc, Asc |
 **relationships** | **[String]** | Relationships to filter by | [optional] <br />**Values**: Creator, Facilitator, Attendee |
 **completionInterval** | **String** | Appointment completion start and end to filter by. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **overdue** | **String** | Overdue status to filter by | [optional] <br />**Values**: True, False, Any |
 **intervalCondition** | **String** | Filter condition for interval | [optional] <br />**Values**: StartsIn, Overlaps |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CoachingAppointmentResponseList**


## getCoachingAppointmentsMe

> CoachingAppointmentResponseList getCoachingAppointmentsMe(opts)


GET /api/v2/coaching/appointments/me

Get my appointments for a given date range

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let opts = { 
  'interval': "interval_example", // String | Interval to filter data by. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'statuses': ["statuses_example"], // [String] | Appointment Statuses to filter by
  'facilitatorIds': ["facilitatorIds_example"], // [String] | The facilitator IDs for which to retrieve appointments
  'sortOrder': "sortOrder_example", // String | Sort (by due date) either Asc or Desc
  'relationships': ["relationships_example"], // [String] | Relationships to filter by
  'completionInterval': "completionInterval_example", // String | Appointment completion start and end to filter by. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'overdue': "overdue_example", // String | Overdue status to filter by
  'intervalCondition': "intervalCondition_example", // String | Filter condition for interval
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCoachingAppointmentsMe(opts)
  .then((data) => {
    console.log(`getCoachingAppointmentsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCoachingAppointmentsMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **interval** | **String** | Interval to filter data by. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **statuses** | **[String]** | Appointment Statuses to filter by | [optional] <br />**Values**: Scheduled, InProgress, Completed, InvalidSchedule |
 **facilitatorIds** | **[String]** | The facilitator IDs for which to retrieve appointments | [optional]  |
 **sortOrder** | **String** | Sort (by due date) either Asc or Desc | [optional] <br />**Values**: Desc, Asc |
 **relationships** | **[String]** | Relationships to filter by | [optional] <br />**Values**: Creator, Facilitator, Attendee |
 **completionInterval** | **String** | Appointment completion start and end to filter by. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **overdue** | **String** | Overdue status to filter by | [optional] <br />**Values**: True, False, Any |
 **intervalCondition** | **String** | Filter condition for interval | [optional] <br />**Values**: StartsIn, Overlaps |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CoachingAppointmentResponseList**


## getCoachingNotification

> CoachingNotification getCoachingNotification(notificationId, opts)


GET /api/v2/coaching/notifications/{notificationId}

Get an existing notification

Permission not required if you are the owner of the notification.

Requires ANY permissions:

* coaching:notification:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let notificationId = "notificationId_example"; // String | The ID of the notification.
let opts = { 
  'expand': ["expand_example"], // [String] | Indicates a field in the response which should be expanded.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCoachingNotification(notificationId, opts)
  .then((data) => {
    console.log(`getCoachingNotification success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCoachingNotification');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **notificationId** | **String** | The ID of the notification. |  |
 **expand** | **[String]** | Indicates a field in the response which should be expanded. | [optional] <br />**Values**: appointment |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CoachingNotification**


## getCoachingNotifications

> CoachingNotificationList getCoachingNotifications(opts)


GET /api/v2/coaching/notifications

Retrieve the list of your notifications.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'expand': ["expand_example"], // [String] | Indicates a field in the response which should be expanded.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCoachingNotifications(opts)
  .then((data) => {
    console.log(`getCoachingNotifications success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCoachingNotifications');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **expand** | **[String]** | Indicates a field in the response which should be expanded. | [optional] <br />**Values**: appointment |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CoachingNotificationList**


## getCoachingScheduleslotsJob

> CoachingScheduleSlotsJobResponse getCoachingScheduleslotsJob(jobId, opts)


GET /api/v2/coaching/scheduleslots/jobs/{jobId}

Retrieve the status of the job for the slots where a coaching appointment can be scheduled.

Requires ANY permissions:

* coaching:scheduleSlotJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let jobId = "jobId_example"; // String | The ID of job
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCoachingScheduleslotsJob(jobId, opts)
  .then((data) => {
    console.log(`getCoachingScheduleslotsJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCoachingScheduleslotsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The ID of job |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CoachingScheduleSlotsJobResponse**


## patchCoachingAppointment

> CoachingAppointmentResponse patchCoachingAppointment(appointmentId, body, opts)


PATCH /api/v2/coaching/appointments/{appointmentId}

Update an existing appointment

Permission not required if you are the creator or facilitator of the appointment

Requires ANY permissions:

* coaching:appointment:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.
let body = {}; // Object | The new version of the appointment
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchCoachingAppointment(appointmentId, body, opts)
  .then((data) => {
    console.log(`patchCoachingAppointment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchCoachingAppointment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **appointmentId** | **String** | The ID of the coaching appointment. |  |
 **body** | **Object** | The new version of the appointment |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CoachingAppointmentResponse**


## patchCoachingAppointmentAnnotation

> CoachingAnnotation patchCoachingAppointmentAnnotation(appointmentId, annotationId, body, opts)


PATCH /api/v2/coaching/appointments/{appointmentId}/annotations/{annotationId}

Update an existing annotation.

You must have the appropriate permission for the type of annotation you are updating. Permission not required if you are the creator or facilitator of the appointment

Requires ANY permissions:

* coaching:annotation:edit
* coaching:privateAnnotation:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.
let annotationId = "annotationId_example"; // String | The ID of the annotation.
let body = {}; // Object | The new version of the annotation
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchCoachingAppointmentAnnotation(appointmentId, annotationId, body, opts)
  .then((data) => {
    console.log(`patchCoachingAppointmentAnnotation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchCoachingAppointmentAnnotation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **appointmentId** | **String** | The ID of the coaching appointment. |  |
 **annotationId** | **String** | The ID of the annotation. |  |
 **body** | **Object** | The new version of the annotation |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CoachingAnnotation**


## patchCoachingAppointmentStatus

> CoachingAppointmentStatusResponse patchCoachingAppointmentStatus(appointmentId, body, opts)


PATCH /api/v2/coaching/appointments/{appointmentId}/status

Update the status of a coaching appointment

Permission not required if you are an attendee, creator or facilitator of the appointment

Requires ANY permissions:

* coaching:appointmentStatus:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.
let body = {}; // Object | Updated status of the coaching appointment
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchCoachingAppointmentStatus(appointmentId, body, opts)
  .then((data) => {
    console.log(`patchCoachingAppointmentStatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchCoachingAppointmentStatus');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **appointmentId** | **String** | The ID of the coaching appointment. |  |
 **body** | **Object** | Updated status of the coaching appointment |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CoachingAppointmentStatusResponse**


## patchCoachingNotification

> CoachingNotification patchCoachingNotification(notificationId, body, opts)


PATCH /api/v2/coaching/notifications/{notificationId}

Update an existing notification.

Can only update your own notifications.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let notificationId = "notificationId_example"; // String | The ID of the notification.
let body = {}; // Object | Change the read state of a notification
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchCoachingNotification(notificationId, body, opts)
  .then((data) => {
    console.log(`patchCoachingNotification success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchCoachingNotification');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **notificationId** | **String** | The ID of the notification. |  |
 **body** | **Object** | Change the read state of a notification |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CoachingNotification**


## postCoachingAppointmentAnnotations

> CoachingAnnotation postCoachingAppointmentAnnotations(appointmentId, body, opts)


POST /api/v2/coaching/appointments/{appointmentId}/annotations

Create a new annotation.

You must have the appropriate permission for the type of annotation you are creating. Permission not required if you are related to the appointment (only the creator or facilitator can create private annotations).

Requires ANY permissions:

* coaching:annotation:add
* coaching:privateAnnotation:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.
let body = {}; // Object | The annotation to add
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postCoachingAppointmentAnnotations(appointmentId, body, opts)
  .then((data) => {
    console.log(`postCoachingAppointmentAnnotations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCoachingAppointmentAnnotations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **appointmentId** | **String** | The ID of the coaching appointment. |  |
 **body** | **Object** | The annotation to add |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CoachingAnnotation**


## postCoachingAppointmentConversations

> AddConversationResponse postCoachingAppointmentConversations(appointmentId, body, opts)


POST /api/v2/coaching/appointments/{appointmentId}/conversations

Add a conversation to an appointment

Permission not required if you are the creator or facilitator of the appointment

Requires ANY permissions:

* coaching:appointment:edit
* coaching:appointmentConversation:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.
let body = {}; // Object | body
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postCoachingAppointmentConversations(appointmentId, body, opts)
  .then((data) => {
    console.log(`postCoachingAppointmentConversations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCoachingAppointmentConversations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **appointmentId** | **String** | The ID of the coaching appointment. |  |
 **body** | **Object** | body |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AddConversationResponse**


## postCoachingAppointments

> CoachingAppointmentResponse postCoachingAppointments(body, opts)


POST /api/v2/coaching/appointments

Create a new appointment

Requires ANY permissions:

* coaching:appointment:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let body = {}; // Object | The appointment to add
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postCoachingAppointments(body, opts)
  .then((data) => {
    console.log(`postCoachingAppointments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCoachingAppointments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The appointment to add |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CoachingAppointmentResponse**


## postCoachingAppointmentsAggregatesQuery

> CoachingAppointmentAggregateResponse postCoachingAppointmentsAggregatesQuery(body, opts)


POST /api/v2/coaching/appointments/aggregates/query

Retrieve aggregated appointment data

Requires ANY permissions:

* coaching:appointment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let body = {}; // Object | Aggregate Request
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postCoachingAppointmentsAggregatesQuery(body, opts)
  .then((data) => {
    console.log(`postCoachingAppointmentsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCoachingAppointmentsAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Aggregate Request |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CoachingAppointmentAggregateResponse**


## postCoachingScheduleslotsJobs

> CoachingScheduleSlotsJobResponse postCoachingScheduleslotsJobs(body, opts)


POST /api/v2/coaching/scheduleslots/jobs

Start job to retrieve the slots where a coaching appointment can be scheduled.

Requires ANY permissions:

* coaching:scheduleSlotJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let body = {}; // Object | The slots search request
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postCoachingScheduleslotsJobs(body, opts)
  .then((data) => {
    console.log(`postCoachingScheduleslotsJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCoachingScheduleslotsJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The slots search request |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CoachingScheduleSlotsJobResponse**


## postCoachingScheduleslotsQuery

> CoachingSlotsResponse postCoachingScheduleslotsQuery(body, opts)


POST /api/v2/coaching/scheduleslots/query

Get list of possible slots where a coaching appointment can be scheduled.

Requires ANY permissions:

* coaching:scheduleSlot:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let body = {}; // Object | The slot search request
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postCoachingScheduleslotsQuery(body, opts)
  .then((data) => {
    console.log(`postCoachingScheduleslotsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCoachingScheduleslotsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The slot search request |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CoachingSlotsResponse**


_purecloud-platform-client-v2@252.0.0_
