---
title: CoachingApi
---
# platformClient.CoachingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteCoachingAppointment**](CoachingApi.html#deleteCoachingAppointment) | **DELETE** /api/v2/coaching/appointments/{appointmentId} | Delete an existing appointment
[**deleteCoachingAppointmentAnnotation**](CoachingApi.html#deleteCoachingAppointmentAnnotation) | **DELETE** /api/v2/coaching/appointments/{appointmentId}/annotations/{annotationId} | Delete an existing annotation
[**getCoachingAppointment**](CoachingApi.html#getCoachingAppointment) | **GET** /api/v2/coaching/appointments/{appointmentId} | Retrieve an appointment
[**getCoachingAppointmentAnnotation**](CoachingApi.html#getCoachingAppointmentAnnotation) | **GET** /api/v2/coaching/appointments/{appointmentId}/annotations/{annotationId} | Retrieve an annotation.
[**getCoachingAppointmentAnnotations**](CoachingApi.html#getCoachingAppointmentAnnotations) | **GET** /api/v2/coaching/appointments/{appointmentId}/annotations | Get a list of annotations.
[**getCoachingAppointmentStatuses**](CoachingApi.html#getCoachingAppointmentStatuses) | **GET** /api/v2/coaching/appointments/{appointmentId}/statuses | Get the list of status changes for a coaching appointment.
[**getCoachingAppointments**](CoachingApi.html#getCoachingAppointments) | **GET** /api/v2/coaching/appointments | Get appointments for users and optional date range
[**getCoachingAppointmentsMe**](CoachingApi.html#getCoachingAppointmentsMe) | **GET** /api/v2/coaching/appointments/me | Get my appointments for a given date range
[**getCoachingNotification**](CoachingApi.html#getCoachingNotification) | **GET** /api/v2/coaching/notifications/{notificationId} | Get an existing notification
[**getCoachingNotifications**](CoachingApi.html#getCoachingNotifications) | **GET** /api/v2/coaching/notifications | Retrieve the list of your notifications.
[**patchCoachingAppointment**](CoachingApi.html#patchCoachingAppointment) | **PATCH** /api/v2/coaching/appointments/{appointmentId} | Update an existing appointment
[**patchCoachingAppointmentAnnotation**](CoachingApi.html#patchCoachingAppointmentAnnotation) | **PATCH** /api/v2/coaching/appointments/{appointmentId}/annotations/{annotationId} | Update an existing annotation.
[**patchCoachingAppointmentStatus**](CoachingApi.html#patchCoachingAppointmentStatus) | **PATCH** /api/v2/coaching/appointments/{appointmentId}/status | Update the status of a coaching appointment
[**patchCoachingNotification**](CoachingApi.html#patchCoachingNotification) | **PATCH** /api/v2/coaching/notifications/{notificationId} | Update an existing notification.
[**postCoachingAppointmentAnnotations**](CoachingApi.html#postCoachingAppointmentAnnotations) | **POST** /api/v2/coaching/appointments/{appointmentId}/annotations | Create a new annotation.
[**postCoachingAppointmentConversations**](CoachingApi.html#postCoachingAppointmentConversations) | **POST** /api/v2/coaching/appointments/{appointmentId}/conversations | Add a conversation to an appointment
[**postCoachingAppointments**](CoachingApi.html#postCoachingAppointments) | **POST** /api/v2/coaching/appointments | Create a new appointment
[**postCoachingAppointmentsAggregatesQuery**](CoachingApi.html#postCoachingAppointmentsAggregatesQuery) | **POST** /api/v2/coaching/appointments/aggregates/query | Retrieve aggregated appointment data
{: class="table table-striped"}

<a name="deleteCoachingAppointment"></a>

# CoachingAppointmentReference deleteCoachingAppointment(appointmentId)



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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.

apiInstance.deleteCoachingAppointment(appointmentId)
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
{: class="table table-striped"}

### Return type

**CoachingAppointmentReference**

<a name="deleteCoachingAppointmentAnnotation"></a>

# void deleteCoachingAppointmentAnnotation(appointmentId, annotationId)



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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.
let annotationId = "annotationId_example"; // String | The ID of the annotation.

apiInstance.deleteCoachingAppointmentAnnotation(appointmentId, annotationId)
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
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getCoachingAppointment"></a>

# CoachingAppointmentResponse getCoachingAppointment(appointmentId)



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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.

apiInstance.getCoachingAppointment(appointmentId)
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
{: class="table table-striped"}

### Return type

**CoachingAppointmentResponse**

<a name="getCoachingAppointmentAnnotation"></a>

# CoachingAnnotation getCoachingAppointmentAnnotation(appointmentId, annotationId)



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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.
let annotationId = "annotationId_example"; // String | The ID of the annotation.

apiInstance.getCoachingAppointmentAnnotation(appointmentId, annotationId)
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
{: class="table table-striped"}

### Return type

**CoachingAnnotation**

<a name="getCoachingAppointmentAnnotations"></a>

# CoachingAnnotationList getCoachingAppointmentAnnotations(appointmentId, opts)



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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
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
{: class="table table-striped"}

### Return type

**CoachingAnnotationList**

<a name="getCoachingAppointmentStatuses"></a>

# CoachingAppointmentStatusResponseList getCoachingAppointmentStatuses(appointmentId, opts)



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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
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
{: class="table table-striped"}

### Return type

**CoachingAppointmentStatusResponseList**

<a name="getCoachingAppointments"></a>

# CoachingAppointmentResponseList getCoachingAppointments(userIds, opts)



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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
  'overdue': "overdue_example" // String | Overdue status to filter by
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
{: class="table table-striped"}

### Return type

**CoachingAppointmentResponseList**

<a name="getCoachingAppointmentsMe"></a>

# CoachingAppointmentResponseList getCoachingAppointmentsMe(opts)



GET /api/v2/coaching/appointments/me

Get my appointments for a given date range



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
  'overdue': "overdue_example" // String | Overdue status to filter by
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
 **statuses** | **[String]** | Appointment Statuses to filter by | [optional] <br />**Values**: Scheduled, InProgress, Completed |
 **facilitatorIds** | **[String]** | The facilitator IDs for which to retrieve appointments | [optional]  |
 **sortOrder** | **String** | Sort (by due date) either Asc or Desc | [optional] <br />**Values**: Desc, Asc |
 **relationships** | **[String]** | Relationships to filter by | [optional] <br />**Values**: Creator, Facilitator, Attendee |
 **completionInterval** | **String** | Appointment completion start and end to filter by. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **overdue** | **String** | Overdue status to filter by | [optional] <br />**Values**: True, False, Any |
{: class="table table-striped"}

### Return type

**CoachingAppointmentResponseList**

<a name="getCoachingNotification"></a>

# CoachingNotification getCoachingNotification(notificationId, opts)



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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let notificationId = "notificationId_example"; // String | The ID of the notification.
let opts = { 
  'expand': ["expand_example"] // [String] | Indicates a field in the response which should be expanded.
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
{: class="table table-striped"}

### Return type

**CoachingNotification**

<a name="getCoachingNotifications"></a>

# CoachingNotificationList getCoachingNotifications(opts)



GET /api/v2/coaching/notifications

Retrieve the list of your notifications.



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'expand': ["expand_example"] // [String] | Indicates a field in the response which should be expanded.
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
{: class="table table-striped"}

### Return type

**CoachingNotificationList**

<a name="patchCoachingAppointment"></a>

# CoachingAppointmentResponse patchCoachingAppointment(appointmentId, body)



PATCH /api/v2/coaching/appointments/{appointmentId}

Update an existing appointment

Permission not required if you are the creator or facilitator of the appointment

Requires ANY permissions: 

* coaching:appointment:edit


### Request Body Schema

<script type="text/javascript">
	function copyUpdateCoachingAppointmentRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#UpdateCoachingAppointmentRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

UpdateCoachingAppointmentRequest <a href="#" onclick="return copyUpdateCoachingAppointmentRequestExample()">Copy</a>

<div id="UpdateCoachingAppointmentRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "name": String, 
  "description": String, 
  "dateStart": Date, 
  "lengthInMinutes": Number, 
  "conversationIds": [String], 
  "documentIds": [String], 
  "status": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.
let body = {}; // Object | The new version of the appointment

apiInstance.patchCoachingAppointment(appointmentId, body)
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
{: class="table table-striped"}

### Return type

**CoachingAppointmentResponse**

<a name="patchCoachingAppointmentAnnotation"></a>

# CoachingAnnotation patchCoachingAppointmentAnnotation(appointmentId, annotationId, body)



PATCH /api/v2/coaching/appointments/{appointmentId}/annotations/{annotationId}

Update an existing annotation.

You must have the appropriate permission for the type of annotation you are updating. Permission not required if you are the creator or facilitator of the appointment

Requires ANY permissions: 

* coaching:annotation:edit
* coaching:privateAnnotation:edit


### Request Body Schema

<script type="text/javascript">
	function copyCoachingAnnotationExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#CoachingAnnotationExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

CoachingAnnotation <a href="#" onclick="return copyCoachingAnnotationExample()">Copy</a>

<div id="CoachingAnnotationExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "createdBy": { 
    "id": String, 
    "selfUri": String, 
  },  
  "dateCreated": Date, 
  "modifiedBy": { 
    "id": String, 
    "selfUri": String, 
  },  
  "dateModified": Date, 
  "text": String, 
  "isDeleted": Boolean, 
  "accessType": String, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.
let annotationId = "annotationId_example"; // String | The ID of the annotation.
let body = {}; // Object | The new version of the annotation

apiInstance.patchCoachingAppointmentAnnotation(appointmentId, annotationId, body)
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
{: class="table table-striped"}

### Return type

**CoachingAnnotation**

<a name="patchCoachingAppointmentStatus"></a>

# CoachingAppointmentStatusResponse patchCoachingAppointmentStatus(appointmentId, body)



PATCH /api/v2/coaching/appointments/{appointmentId}/status

Update the status of a coaching appointment

Permission not required if you are an attendee, creator or facilitator of the appointment

Requires ANY permissions: 

* coaching:appointmentStatus:edit


### Request Body Schema

<script type="text/javascript">
	function copyCoachingAppointmentStatusRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#CoachingAppointmentStatusRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

CoachingAppointmentStatusRequest <a href="#" onclick="return copyCoachingAppointmentStatusRequestExample()">Copy</a>

<div id="CoachingAppointmentStatusRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "status": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.
let body = {}; // Object | Updated status of the coaching appointment

apiInstance.patchCoachingAppointmentStatus(appointmentId, body)
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
{: class="table table-striped"}

### Return type

**CoachingAppointmentStatusResponse**

<a name="patchCoachingNotification"></a>

# CoachingNotification patchCoachingNotification(notificationId, body)



PATCH /api/v2/coaching/notifications/{notificationId}

Update an existing notification.

Can only update your own notifications.

Requires NO permissions: 



### Request Body Schema

<script type="text/javascript">
	function copyCoachingNotificationExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#CoachingNotificationExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

CoachingNotification <a href="#" onclick="return copyCoachingNotificationExample()">Copy</a>

<div id="CoachingNotificationExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "markedAsRead": Boolean, 
  "actionType": String, 
  "relationship": String, 
  "dateStart": Date, 
  "lengthInMinutes": Number, 
  "status": String, 
  "user": { 
    "id": String, 
    "selfUri": String, 
  },  
  "appointment": { 
    "id": String, 
    "name": String, 
    "description": String, 
    "dateStart": Date, 
    "lengthInMinutes": Number, 
    "status": String, 
    "facilitator": { 
      "id": String, 
      "selfUri": String, 
    },  
    "attendees": { 
      "id": String, 
      "selfUri": String, 
    },  
    "createdBy": { 
      "id": String, 
      "selfUri": String, 
    },  
    "dateCreated": Date, 
    "modifiedBy": { 
      "id": String, 
      "selfUri": String, 
    },  
    "dateModified": Date, 
    "conversations": { 
      "id": String, 
      "selfUri": String, 
    },  
    "documents": { 
      "id": String, 
      "selfUri": String, 
    },  
    "isOverdue": Boolean, 
    "selfUri": String, 
  },  
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let notificationId = "notificationId_example"; // String | The ID of the notification.
let body = {}; // Object | Change the read state of a notification

apiInstance.patchCoachingNotification(notificationId, body)
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
{: class="table table-striped"}

### Return type

**CoachingNotification**

<a name="postCoachingAppointmentAnnotations"></a>

# CoachingAnnotation postCoachingAppointmentAnnotations(appointmentId, body)



POST /api/v2/coaching/appointments/{appointmentId}/annotations

Create a new annotation.

You must have the appropriate permission for the type of annotation you are creating. Permission not required if you are related to the appointment (only the creator or facilitator can create private annotations).

Requires ANY permissions: 

* coaching:annotation:add
* coaching:privateAnnotation:add


### Request Body Schema

<script type="text/javascript">
	function copyCoachingAnnotationCreateRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#CoachingAnnotationCreateRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

CoachingAnnotationCreateRequest <a href="#" onclick="return copyCoachingAnnotationCreateRequestExample()">Copy</a>

<div id="CoachingAnnotationCreateRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "text": String, 
  "accessType": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.
let body = {}; // Object | The annotation to add

apiInstance.postCoachingAppointmentAnnotations(appointmentId, body)
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
{: class="table table-striped"}

### Return type

**CoachingAnnotation**

<a name="postCoachingAppointmentConversations"></a>

# AddConversationResponse postCoachingAppointmentConversations(appointmentId, body)



POST /api/v2/coaching/appointments/{appointmentId}/conversations

Add a conversation to an appointment

Permission not required if you are the creator or facilitator of the appointment

Requires ANY permissions: 

* coaching:appointment:edit
* coaching:appointmentConversation:add


### Request Body Schema

<script type="text/javascript">
	function copyAddConversationRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#AddConversationRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

AddConversationRequest <a href="#" onclick="return copyAddConversationRequestExample()">Copy</a>

<div id="AddConversationRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "conversationId": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let appointmentId = "appointmentId_example"; // String | The ID of the coaching appointment.
let body = {}; // Object | body

apiInstance.postCoachingAppointmentConversations(appointmentId, body)
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
{: class="table table-striped"}

### Return type

**AddConversationResponse**

<a name="postCoachingAppointments"></a>

# CoachingAppointmentResponse postCoachingAppointments(body)



POST /api/v2/coaching/appointments

Create a new appointment



Requires ANY permissions: 

* coaching:appointment:add


### Request Body Schema

<script type="text/javascript">
	function copyCreateCoachingAppointmentRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#CreateCoachingAppointmentRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

CreateCoachingAppointmentRequest <a href="#" onclick="return copyCreateCoachingAppointmentRequestExample()">Copy</a>

<div id="CreateCoachingAppointmentRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "name": String, 
  "description": String, 
  "dateStart": Date, 
  "lengthInMinutes": Number, 
  "facilitatorId": String, 
  "attendeeIds": [String], 
  "conversationIds": [String], 
  "documentIds": [String], 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let body = {}; // Object | The appointment to add

apiInstance.postCoachingAppointments(body)
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
{: class="table table-striped"}

### Return type

**CoachingAppointmentResponse**

<a name="postCoachingAppointmentsAggregatesQuery"></a>

# CoachingAppointmentAggregateResponse postCoachingAppointmentsAggregatesQuery(body)



POST /api/v2/coaching/appointments/aggregates/query

Retrieve aggregated appointment data



Requires ANY permissions: 

* coaching:appointment:view


### Request Body Schema

<script type="text/javascript">
	function copyCoachingAppointmentAggregateRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#CoachingAppointmentAggregateRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

CoachingAppointmentAggregateRequest <a href="#" onclick="return copyCoachingAppointmentAggregateRequestExample()">Copy</a>

<div id="CoachingAppointmentAggregateRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "interval": String, 
  "metrics": [String], 
  "groupBy": [String], 
  "filter": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "dimension": String, 
        "value": String, 
      },  
    },  
  },  
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CoachingApi();

let body = {}; // Object | Aggregate Request

apiInstance.postCoachingAppointmentsAggregatesQuery(body)
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
{: class="table table-striped"}

### Return type

**CoachingAppointmentAggregateResponse**

