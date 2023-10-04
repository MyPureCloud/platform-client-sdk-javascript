---
title: MeetingApi
---
# platformClient.MeetingApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteMeeting**](MeetingApi.html#deleteMeeting) | **DELETE** /api/v2/meetings/{meetingId} | Delete a Meeting
[**deleteMeetingOccurrence**](MeetingApi.html#deleteMeetingOccurrence) | **DELETE** /api/v2/meetings/{meetingId}/occurrences/{occurrenceId} | Delete a Meeting Occurrence
[**getMeeting**](MeetingApi.html#getMeeting) | **GET** /api/v2/meetings/{meetingId} | Get a Meeting based on ID
[**getMeetingOccurrence**](MeetingApi.html#getMeetingOccurrence) | **GET** /api/v2/meetings/{meetingId}/occurrences/{occurrenceId} | Get a Meeting Occurrence based on Occurrence ID
[**getUserMeetings**](MeetingApi.html#getUserMeetings) | **GET** /api/v2/users/{userId}/meetings | Get all user's meetings
[**postMeetings**](MeetingApi.html#postMeetings) | **POST** /api/v2/meetings | Create a Meeting
[**putMeeting**](MeetingApi.html#putMeeting) | **PUT** /api/v2/meetings/{meetingId} | Update a Meeting
[**putMeetingOccurrence**](MeetingApi.html#putMeetingOccurrence) | **PUT** /api/v2/meetings/{meetingId}/occurrences/{occurrenceId} | Update a Meeting Occurrence
{: class="table table-striped"}

<a name="deleteMeeting"></a>

# void deleteMeeting(meetingId)


DELETE /api/v2/meetings/{meetingId}

Delete a Meeting

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MeetingApi();

let meetingId = "meetingId_example"; // String | Meeting ID

apiInstance.deleteMeeting(meetingId)
  .then(() => {
    console.log('deleteMeeting returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMeeting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **meetingId** | **String** | Meeting ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteMeetingOccurrence"></a>

# void deleteMeetingOccurrence(meetingId, occurrenceId, opts)


DELETE /api/v2/meetings/{meetingId}/occurrences/{occurrenceId}

Delete a Meeting Occurrence

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MeetingApi();

let meetingId = "meetingId_example"; // String | Meeting ID
let occurrenceId = "occurrenceId_example"; // String | Meeting Occurrence ID
let opts = { 
  'series': false // Boolean | Set this to true to delete entire series
};

apiInstance.deleteMeetingOccurrence(meetingId, occurrenceId, opts)
  .then(() => {
    console.log('deleteMeetingOccurrence returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMeetingOccurrence');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **meetingId** | **String** | Meeting ID |  |
 **occurrenceId** | **String** | Meeting Occurrence ID |  |
 **series** | **Boolean** | Set this to true to delete entire series | [optional] [default to false] |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getMeeting"></a>

# Meeting getMeeting(meetingId)


GET /api/v2/meetings/{meetingId}

Get a Meeting based on ID

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MeetingApi();

let meetingId = "meetingId_example"; // String | Meeting ID

apiInstance.getMeeting(meetingId)
  .then((data) => {
    console.log(`getMeeting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMeeting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **meetingId** | **String** | Meeting ID |  |
{: class="table table-striped"}

### Return type

**Meeting**

<a name="getMeetingOccurrence"></a>

# MeetingOccurrence getMeetingOccurrence(meetingId, occurrenceId)


GET /api/v2/meetings/{meetingId}/occurrences/{occurrenceId}

Get a Meeting Occurrence based on Occurrence ID

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MeetingApi();

let meetingId = "meetingId_example"; // String | Meeting ID
let occurrenceId = "occurrenceId_example"; // String | Meeting Occurrence ID

apiInstance.getMeetingOccurrence(meetingId, occurrenceId)
  .then((data) => {
    console.log(`getMeetingOccurrence success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMeetingOccurrence');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **meetingId** | **String** | Meeting ID |  |
 **occurrenceId** | **String** | Meeting Occurrence ID |  |
{: class="table table-striped"}

### Return type

**MeetingOccurrence**

<a name="getUserMeetings"></a>

# MeetingOccurrenceEntityListing getUserMeetings(userId, startDate, endDate)


GET /api/v2/users/{userId}/meetings

Get all user's meetings

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MeetingApi();

let userId = "userId_example"; // String | User ID
let startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | Meeting's start date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
let endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | Meeting's end date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z

apiInstance.getUserMeetings(userId, startDate, endDate)
  .then((data) => {
    console.log(`getUserMeetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserMeetings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **startDate** | **Date** | Meeting's start date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |  |
 **endDate** | **Date** | Meeting's end date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |  |
{: class="table table-striped"}

### Return type

**MeetingOccurrenceEntityListing**

<a name="postMeetings"></a>

# Meeting postMeetings(body)


POST /api/v2/meetings

Create a Meeting

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MeetingApi();

let body = {}; // Object | Meeting to create

apiInstance.postMeetings(body)
  .then((data) => {
    console.log(`postMeetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMeetings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Meeting to create |  |
{: class="table table-striped"}

### Return type

**Meeting**

<a name="putMeeting"></a>

# Meeting putMeeting(meetingId, body)


PUT /api/v2/meetings/{meetingId}

Update a Meeting

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MeetingApi();

let meetingId = "meetingId_example"; // String | Meeting ID
let body = {}; // Object | Meeting to update

apiInstance.putMeeting(meetingId, body)
  .then((data) => {
    console.log(`putMeeting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putMeeting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **meetingId** | **String** | Meeting ID |  |
 **body** | **Object** | Meeting to update |  |
{: class="table table-striped"}

### Return type

**Meeting**

<a name="putMeetingOccurrence"></a>

# MeetingOccurrence putMeetingOccurrence(meetingId, occurrenceId, body, opts)


PUT /api/v2/meetings/{meetingId}/occurrences/{occurrenceId}

Update a Meeting Occurrence

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MeetingApi();

let meetingId = "meetingId_example"; // String | Meeting ID
let occurrenceId = "occurrenceId_example"; // String | Meeting Occurrence ID
let body = {}; // Object | Meeting Occurrence to update
let opts = { 
  'series': false // Boolean | Set this to true to apply updates to the entire series
};

apiInstance.putMeetingOccurrence(meetingId, occurrenceId, body, opts)
  .then((data) => {
    console.log(`putMeetingOccurrence success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putMeetingOccurrence');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **meetingId** | **String** | Meeting ID |  |
 **occurrenceId** | **String** | Meeting Occurrence ID |  |
 **body** | **Object** | Meeting Occurrence to update |  |
 **series** | **Boolean** | Set this to true to apply updates to the entire series | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**MeetingOccurrence**

