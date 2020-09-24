---
title: UserDevelopmentApi
---
# platformClient.UserDevelopmentApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getUsersDevelopmentActivities**](UserDevelopmentApi.html#getUsersDevelopmentActivities) | **GET** /api/v2/users/development/activities | Get list of Development Activities
[**getUsersDevelopmentActivitiesMe**](UserDevelopmentApi.html#getUsersDevelopmentActivitiesMe) | **GET** /api/v2/users/development/activities/me | Get list of Development Activities for current user
[**getUsersDevelopmentActivity**](UserDevelopmentApi.html#getUsersDevelopmentActivity) | **GET** /api/v2/users/development/activities/{activityId} | Get a Development Activity
[**postUsersDevelopmentActivitiesAggregatesQuery**](UserDevelopmentApi.html#postUsersDevelopmentActivitiesAggregatesQuery) | **POST** /api/v2/users/development/activities/aggregates/query | Retrieve aggregated development activity data
{: class="table table-striped"}

<a name="getUsersDevelopmentActivities"></a>

# DevelopmentActivityListing getUsersDevelopmentActivities(opts)



GET /api/v2/users/development/activities

Get list of Development Activities

Either moduleId or userId is required. Results are filtered based on the applicable permissions.

Requires ANY permissions: 

* learning:assignment:view
* coaching:appointment:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UserDevelopmentApi();

let opts = { 
  'userId': ["userId_example"], // [String] | Specifies the list of user IDs to be queried, up to 100 user IDs. It searches for any relationship for the userId.
  'moduleId': "moduleId_example", // String | Specifies the ID of the learning module.
  'interval': "interval_example", // String | Specifies the dateDue range to be queried. Milliseconds will be truncated. A maximum of 365 days can be specified in the range. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'completionInterval': "completionInterval_example", // String | Specifies the range of completion dates to be used for filtering. A maximum of 365 days can be specified in the range. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'overdue': "Any", // String | Specifies if non-overdue, overdue, or all activities are returned. If not specified, all activities are returned
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "Desc", // String | Specifies result set sort order sorted by the date due; if not specified, default sort order is descending (Desc)
  'types': ["types_example"], // [String] | Specifies the activity types.
  'statuses': ["statuses_example"], // [String] | Specifies the activity statuses to filter by
  'relationship': ["relationship_example"] // [String] | Specifies how the current user relation should be interpreted, and filters the activities returned to only those that have the specified relationship. If not specified, all relationships are returned.
};

apiInstance.getUsersDevelopmentActivities(opts)
  .then((data) => {
    console.log(`getUsersDevelopmentActivities success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsersDevelopmentActivities');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **[String]** | Specifies the list of user IDs to be queried, up to 100 user IDs. It searches for any relationship for the userId. | [optional]  |
 **moduleId** | **String** | Specifies the ID of the learning module. | [optional]  |
 **interval** | **String** | Specifies the dateDue range to be queried. Milliseconds will be truncated. A maximum of 365 days can be specified in the range. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **completionInterval** | **String** | Specifies the range of completion dates to be used for filtering. A maximum of 365 days can be specified in the range. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **overdue** | **String** | Specifies if non-overdue, overdue, or all activities are returned. If not specified, all activities are returned | [optional] [default to Any]<br />**Values**: True, False, Any |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Specifies result set sort order sorted by the date due; if not specified, default sort order is descending (Desc) | [optional] [default to Desc]<br />**Values**: Asc, Desc |
 **types** | **[String]** | Specifies the activity types. | [optional] <br />**Values**: Informational, Coaching |
 **statuses** | **[String]** | Specifies the activity statuses to filter by | [optional] <br />**Values**: Planned, InProgress, Completed, InvalidSchedule |
 **relationship** | **[String]** | Specifies how the current user relation should be interpreted, and filters the activities returned to only those that have the specified relationship. If not specified, all relationships are returned. | [optional] <br />**Values**: Creator, Facilitator, Attendee |
{: class="table table-striped"}

### Return type

**DevelopmentActivityListing**

<a name="getUsersDevelopmentActivitiesMe"></a>

# DevelopmentActivityListing getUsersDevelopmentActivitiesMe(opts)



GET /api/v2/users/development/activities/me

Get list of Development Activities for current user

Results are filtered based on the applicable permissions.

Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UserDevelopmentApi();

let opts = { 
  'moduleId': "moduleId_example", // String | Specifies the ID of the learning module.
  'interval': "interval_example", // String | Specifies the dateDue range to be queried. Milliseconds will be truncated. A maximum of 365 days can be specified in the range. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'completionInterval': "completionInterval_example", // String | Specifies the range of completion dates to be used for filtering. A maximum of 365 days can be specified in the range. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'overdue': "Any", // String | Specifies if non-overdue, overdue, or all activities are returned. If not specified, all activities are returned
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "Desc", // String | Specifies result set sort order sorted by the date due; if not specified, default sort order is descending (Desc)
  'types': ["types_example"], // [String] | Specifies the activity types.
  'statuses': ["statuses_example"], // [String] | Specifies the activity statuses to filter by
  'relationship': ["relationship_example"] // [String] | Specifies how the current user relation should be interpreted, and filters the activities returned to only those that have the specified relationship. If not specified, all relationships are returned.
};

apiInstance.getUsersDevelopmentActivitiesMe(opts)
  .then((data) => {
    console.log(`getUsersDevelopmentActivitiesMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsersDevelopmentActivitiesMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | Specifies the ID of the learning module. | [optional]  |
 **interval** | **String** | Specifies the dateDue range to be queried. Milliseconds will be truncated. A maximum of 365 days can be specified in the range. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **completionInterval** | **String** | Specifies the range of completion dates to be used for filtering. A maximum of 365 days can be specified in the range. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **overdue** | **String** | Specifies if non-overdue, overdue, or all activities are returned. If not specified, all activities are returned | [optional] [default to Any]<br />**Values**: True, False, Any |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Specifies result set sort order sorted by the date due; if not specified, default sort order is descending (Desc) | [optional] [default to Desc]<br />**Values**: Asc, Desc |
 **types** | **[String]** | Specifies the activity types. | [optional] <br />**Values**: Informational, Coaching |
 **statuses** | **[String]** | Specifies the activity statuses to filter by | [optional] <br />**Values**: Planned, InProgress, Completed, InvalidSchedule |
 **relationship** | **[String]** | Specifies how the current user relation should be interpreted, and filters the activities returned to only those that have the specified relationship. If not specified, all relationships are returned. | [optional] <br />**Values**: Creator, Facilitator, Attendee |
{: class="table table-striped"}

### Return type

**DevelopmentActivityListing**

<a name="getUsersDevelopmentActivity"></a>

# DevelopmentActivity getUsersDevelopmentActivity(activityId, type)



GET /api/v2/users/development/activities/{activityId}

Get a Development Activity



Requires ANY permissions: 

* learning:assignment:view
* coaching:appointment:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UserDevelopmentApi();

let activityId = "activityId_example"; // String | Specifies the activity ID, maps to either assignment or appointment ID
let type = "type_example"; // String | Specifies the activity type.

apiInstance.getUsersDevelopmentActivity(activityId, type)
  .then((data) => {
    console.log(`getUsersDevelopmentActivity success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsersDevelopmentActivity');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **activityId** | **String** | Specifies the activity ID, maps to either assignment or appointment ID |  |
 **type** | **String** | Specifies the activity type. | <br />**Values**: Informational, AssessedContent, Questionnaire, Coaching |
{: class="table table-striped"}

### Return type

**DevelopmentActivity**

<a name="postUsersDevelopmentActivitiesAggregatesQuery"></a>

# DevelopmentActivityAggregateResponse postUsersDevelopmentActivitiesAggregatesQuery(body)



POST /api/v2/users/development/activities/aggregates/query

Retrieve aggregated development activity data

Results are filtered based on the applicable permissions.

Requires ANY permissions: 

* learning:assignment:view
* coaching:appointment:view


### Request Body Schema

<script type="text/javascript">
	function copyDevelopmentActivityAggregateParamExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#DevelopmentActivityAggregateParamExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

DevelopmentActivityAggregateParam <a href="#" onclick="return copyDevelopmentActivityAggregateParamExample()">Copy</a>

<div id="DevelopmentActivityAggregateParamExample">

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

let apiInstance = new platformClient.UserDevelopmentApi();

let body = {}; // Object | Aggregate Request

apiInstance.postUsersDevelopmentActivitiesAggregatesQuery(body)
  .then((data) => {
    console.log(`postUsersDevelopmentActivitiesAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUsersDevelopmentActivitiesAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Aggregate Request |  |
{: class="table table-striped"}

### Return type

**DevelopmentActivityAggregateResponse**

