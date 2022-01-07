---
title: GamificationApi
---
# platformClient.GamificationApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getGamificationLeaderboard**](GamificationApi.html#getGamificationLeaderboard) | **GET** /api/v2/gamification/leaderboard | Leaderboard of the requesting user&#39;s division or performance profile
[**getGamificationLeaderboardAll**](GamificationApi.html#getGamificationLeaderboardAll) | **GET** /api/v2/gamification/leaderboard/all | Leaderboard by filter type
[**getGamificationLeaderboardAllBestpoints**](GamificationApi.html#getGamificationLeaderboardAllBestpoints) | **GET** /api/v2/gamification/leaderboard/all/bestpoints | Best Points by division or performance profile
[**getGamificationLeaderboardBestpoints**](GamificationApi.html#getGamificationLeaderboardBestpoints) | **GET** /api/v2/gamification/leaderboard/bestpoints | Best Points of the requesting user&#39;s current performance profile or division
[**getGamificationMetric**](GamificationApi.html#getGamificationMetric) | **GET** /api/v2/gamification/metrics/{metricId} | Gamified metric by id
[**getGamificationMetricdefinition**](GamificationApi.html#getGamificationMetricdefinition) | **GET** /api/v2/gamification/metricdefinitions/{metricDefinitionId} | Metric definition by id
[**getGamificationMetricdefinitions**](GamificationApi.html#getGamificationMetricdefinitions) | **GET** /api/v2/gamification/metricdefinitions | All metric definitions
[**getGamificationMetrics**](GamificationApi.html#getGamificationMetrics) | **GET** /api/v2/gamification/metrics | All gamified metrics for a given profile
[**getGamificationProfile**](GamificationApi.html#getGamificationProfile) | **GET** /api/v2/gamification/profiles/{performanceProfileId} | Performance profile by id
[**getGamificationProfileMembers**](GamificationApi.html#getGamificationProfileMembers) | **GET** /api/v2/gamification/profiles/{performanceProfileId}/members | Members of a given performance profile
[**getGamificationProfileMetric**](GamificationApi.html#getGamificationProfileMetric) | **GET** /api/v2/gamification/profiles/{profileId}/metrics/{metricId} | Performance profile gamified metric by id
[**getGamificationProfileMetrics**](GamificationApi.html#getGamificationProfileMetrics) | **GET** /api/v2/gamification/profiles/{profileId}/metrics | All gamified metrics for a given performance profile
[**getGamificationProfileMetricsObjectivedetails**](GamificationApi.html#getGamificationProfileMetricsObjectivedetails) | **GET** /api/v2/gamification/profiles/{profileId}/metrics/objectivedetails | All metrics for a given performance profile with objective details such as order and maxPoints
[**getGamificationProfiles**](GamificationApi.html#getGamificationProfiles) | **GET** /api/v2/gamification/profiles | All performance profiles
[**getGamificationProfilesUser**](GamificationApi.html#getGamificationProfilesUser) | **GET** /api/v2/gamification/profiles/users/{userId} | Performance profile of a user
[**getGamificationProfilesUsersMe**](GamificationApi.html#getGamificationProfilesUsersMe) | **GET** /api/v2/gamification/profiles/users/me | Performance profile of the requesting user
[**getGamificationScorecards**](GamificationApi.html#getGamificationScorecards) | **GET** /api/v2/gamification/scorecards | Workday performance metrics of the requesting user
[**getGamificationScorecardsAttendance**](GamificationApi.html#getGamificationScorecardsAttendance) | **GET** /api/v2/gamification/scorecards/attendance | Attendance status metrics of the requesting user
[**getGamificationScorecardsBestpoints**](GamificationApi.html#getGamificationScorecardsBestpoints) | **GET** /api/v2/gamification/scorecards/bestpoints | Best points of the requesting user
[**getGamificationScorecardsPointsAlltime**](GamificationApi.html#getGamificationScorecardsPointsAlltime) | **GET** /api/v2/gamification/scorecards/points/alltime | All-time points of the requesting user
[**getGamificationScorecardsPointsAverage**](GamificationApi.html#getGamificationScorecardsPointsAverage) | **GET** /api/v2/gamification/scorecards/points/average | Average points of the requesting user&#39;s division or performance profile
[**getGamificationScorecardsPointsTrends**](GamificationApi.html#getGamificationScorecardsPointsTrends) | **GET** /api/v2/gamification/scorecards/points/trends | Points trends of the requesting user
[**getGamificationScorecardsUser**](GamificationApi.html#getGamificationScorecardsUser) | **GET** /api/v2/gamification/scorecards/users/{userId} | Workday performance metrics for a user
[**getGamificationScorecardsUserAttendance**](GamificationApi.html#getGamificationScorecardsUserAttendance) | **GET** /api/v2/gamification/scorecards/users/{userId}/attendance | Attendance status metrics for a user
[**getGamificationScorecardsUserBestpoints**](GamificationApi.html#getGamificationScorecardsUserBestpoints) | **GET** /api/v2/gamification/scorecards/users/{userId}/bestpoints | Best points of a user
[**getGamificationScorecardsUserPointsAlltime**](GamificationApi.html#getGamificationScorecardsUserPointsAlltime) | **GET** /api/v2/gamification/scorecards/users/{userId}/points/alltime | All-time points for a user
[**getGamificationScorecardsUserPointsTrends**](GamificationApi.html#getGamificationScorecardsUserPointsTrends) | **GET** /api/v2/gamification/scorecards/users/{userId}/points/trends | Points trend for a user
[**getGamificationScorecardsUserValuesTrends**](GamificationApi.html#getGamificationScorecardsUserValuesTrends) | **GET** /api/v2/gamification/scorecards/users/{userId}/values/trends | Values trends of a user
[**getGamificationScorecardsUsersPointsAverage**](GamificationApi.html#getGamificationScorecardsUsersPointsAverage) | **GET** /api/v2/gamification/scorecards/users/points/average | Workday average points by target group
[**getGamificationScorecardsUsersValuesAverage**](GamificationApi.html#getGamificationScorecardsUsersValuesAverage) | **GET** /api/v2/gamification/scorecards/users/values/average | Workday average values by target group
[**getGamificationScorecardsUsersValuesTrends**](GamificationApi.html#getGamificationScorecardsUsersValuesTrends) | **GET** /api/v2/gamification/scorecards/users/values/trends | Values trend by target group
[**getGamificationScorecardsValuesAverage**](GamificationApi.html#getGamificationScorecardsValuesAverage) | **GET** /api/v2/gamification/scorecards/values/average | Average values of the requesting user&#39;s division or performance profile
[**getGamificationScorecardsValuesTrends**](GamificationApi.html#getGamificationScorecardsValuesTrends) | **GET** /api/v2/gamification/scorecards/values/trends | Values trends of the requesting user or group
[**getGamificationStatus**](GamificationApi.html#getGamificationStatus) | **GET** /api/v2/gamification/status | Gamification activation status
[**getGamificationTemplate**](GamificationApi.html#getGamificationTemplate) | **GET** /api/v2/gamification/templates/{templateId} | Objective template by id
[**getGamificationTemplates**](GamificationApi.html#getGamificationTemplates) | **GET** /api/v2/gamification/templates | All objective templates
[**postGamificationMetrics**](GamificationApi.html#postGamificationMetrics) | **POST** /api/v2/gamification/metrics | Creates a gamified metric with a given metric definition and metric objective
[**postGamificationProfileActivate**](GamificationApi.html#postGamificationProfileActivate) | **POST** /api/v2/gamification/profiles/{performanceProfileId}/activate | Activate a performance profile
[**postGamificationProfileDeactivate**](GamificationApi.html#postGamificationProfileDeactivate) | **POST** /api/v2/gamification/profiles/{performanceProfileId}/deactivate | Deactivate a performance profile
[**postGamificationProfileMembers**](GamificationApi.html#postGamificationProfileMembers) | **POST** /api/v2/gamification/profiles/{performanceProfileId}/members | Assign members to a given performance profile
[**postGamificationProfileMembersValidate**](GamificationApi.html#postGamificationProfileMembersValidate) | **POST** /api/v2/gamification/profiles/{performanceProfileId}/members/validate | Validate member assignment
[**postGamificationProfileMetricLink**](GamificationApi.html#postGamificationProfileMetricLink) | **POST** /api/v2/gamification/profiles/{sourceProfileId}/metrics/{sourceMetricId}/link | Creates a linked metric
[**postGamificationProfileMetrics**](GamificationApi.html#postGamificationProfileMetrics) | **POST** /api/v2/gamification/profiles/{profileId}/metrics | Creates a gamified metric with a given metric definition and metric objective under in a performance profile
[**postGamificationProfiles**](GamificationApi.html#postGamificationProfiles) | **POST** /api/v2/gamification/profiles | Create a new custom performance profile
[**putGamificationMetric**](GamificationApi.html#putGamificationMetric) | **PUT** /api/v2/gamification/metrics/{metricId} | Updates a metric
[**putGamificationProfile**](GamificationApi.html#putGamificationProfile) | **PUT** /api/v2/gamification/profiles/{performanceProfileId} | Updates a performance profile
[**putGamificationProfileMetric**](GamificationApi.html#putGamificationProfileMetric) | **PUT** /api/v2/gamification/profiles/{profileId}/metrics/{metricId} | Updates a metric in performance profile
[**putGamificationStatus**](GamificationApi.html#putGamificationStatus) | **PUT** /api/v2/gamification/status | Update gamification activation status
{: class="table table-striped"}

<a name="getGamificationLeaderboard"></a>

# Leaderboard getGamificationLeaderboard(startWorkday, endWorkday, opts)



GET /api/v2/gamification/leaderboard

Leaderboard of the requesting user&#39;s division or performance profile



Requires ANY permissions: 

* gamification:leaderboard:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let startWorkday = "2013-10-20"; // String | Start workday to retrieve for the leaderboard. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let endWorkday = "2013-10-20"; // String | End workday to retrieve for the leaderboard. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let opts = { 
  'metricId': "metricId_example" // String | Metric Id for which the leaderboard is to be generated. The total points is used if nothing is given.
};

apiInstance.getGamificationLeaderboard(startWorkday, endWorkday, opts)
  .then((data) => {
    console.log(`getGamificationLeaderboard success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationLeaderboard');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **startWorkday** | **String** | Start workday to retrieve for the leaderboard. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **endWorkday** | **String** | End workday to retrieve for the leaderboard. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **metricId** | **String** | Metric Id for which the leaderboard is to be generated. The total points is used if nothing is given. | [optional]  |
{: class="table table-striped"}

### Return type

**Leaderboard**

<a name="getGamificationLeaderboardAll"></a>

# Leaderboard getGamificationLeaderboardAll(filterType, filterId, startWorkday, endWorkday, opts)



GET /api/v2/gamification/leaderboard/all

Leaderboard by filter type



Requires ANY permissions: 

* gamification:leaderboard:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let filterType = "filterType_example"; // String | Filter type for the query request.
let filterId = "filterId_example"; // String | ID for the filter type. For example, division or performance profile Id
let startWorkday = "2013-10-20"; // String | Start workday to retrieve for the leaderboard. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let endWorkday = "2013-10-20"; // String | End workday to retrieve for the leaderboard. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let opts = { 
  'metricId': "metricId_example" // String | Metric Id for which the leaderboard is to be generated. The total points is used if nothing is given.
};

apiInstance.getGamificationLeaderboardAll(filterType, filterId, startWorkday, endWorkday, opts)
  .then((data) => {
    console.log(`getGamificationLeaderboardAll success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationLeaderboardAll');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **filterType** | **String** | Filter type for the query request. | <br />**Values**: PerformanceProfile, Division |
 **filterId** | **String** | ID for the filter type. For example, division or performance profile Id |  |
 **startWorkday** | **String** | Start workday to retrieve for the leaderboard. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **endWorkday** | **String** | End workday to retrieve for the leaderboard. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **metricId** | **String** | Metric Id for which the leaderboard is to be generated. The total points is used if nothing is given. | [optional]  |
{: class="table table-striped"}

### Return type

**Leaderboard**

<a name="getGamificationLeaderboardAllBestpoints"></a>

# OverallBestPoints getGamificationLeaderboardAllBestpoints(filterType, filterId)



GET /api/v2/gamification/leaderboard/all/bestpoints

Best Points by division or performance profile



Requires ANY permissions: 

* gamification:leaderboard:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let filterType = "filterType_example"; // String | Filter type for the query request.
let filterId = "filterId_example"; // String | ID for the filter type. For example, division or performance profile Id

apiInstance.getGamificationLeaderboardAllBestpoints(filterType, filterId)
  .then((data) => {
    console.log(`getGamificationLeaderboardAllBestpoints success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationLeaderboardAllBestpoints');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **filterType** | **String** | Filter type for the query request. | <br />**Values**: PerformanceProfile, Division |
 **filterId** | **String** | ID for the filter type. For example, division or performance profile Id |  |
{: class="table table-striped"}

### Return type

**OverallBestPoints**

<a name="getGamificationLeaderboardBestpoints"></a>

# OverallBestPoints getGamificationLeaderboardBestpoints()



GET /api/v2/gamification/leaderboard/bestpoints

Best Points of the requesting user&#39;s current performance profile or division



Requires ANY permissions: 

* gamification:leaderboard:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

apiInstance.getGamificationLeaderboardBestpoints()
  .then((data) => {
    console.log(`getGamificationLeaderboardBestpoints success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationLeaderboardBestpoints');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**OverallBestPoints**

<a name="getGamificationMetric"></a>

# Metric getGamificationMetric(metricId, opts)



GET /api/v2/gamification/metrics/{metricId}

Gamified metric by id



Requires ANY permissions: 

* gamification:profile:view
* gamification:leaderboard:view
* gamification:scorecard:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let metricId = "metricId_example"; // String | metric Id
let opts = { 
  'workday': "2013-10-20", // String | The objective query workday. If not specified, then it retrieves the current objective. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'performanceProfileId': "performanceProfileId_example" // String | The profile id of the metrics you are trying to retrieve. The DEFAULT profile is used if nothing is given.
};

apiInstance.getGamificationMetric(metricId, opts)
  .then((data) => {
    console.log(`getGamificationMetric success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationMetric');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **metricId** | **String** | metric Id |  |
 **workday** | **String** | The objective query workday. If not specified, then it retrieves the current objective. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
 **performanceProfileId** | **String** | The profile id of the metrics you are trying to retrieve. The DEFAULT profile is used if nothing is given. | [optional]  |
{: class="table table-striped"}

### Return type

**Metric**

<a name="getGamificationMetricdefinition"></a>

# MetricDefinition getGamificationMetricdefinition(metricDefinitionId)



GET /api/v2/gamification/metricdefinitions/{metricDefinitionId}

Metric definition by id



Requires ANY permissions: 

* gamification:profile:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let metricDefinitionId = "metricDefinitionId_example"; // String | metric definition id

apiInstance.getGamificationMetricdefinition(metricDefinitionId)
  .then((data) => {
    console.log(`getGamificationMetricdefinition success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationMetricdefinition');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **metricDefinitionId** | **String** | metric definition id |  |
{: class="table table-striped"}

### Return type

**MetricDefinition**

<a name="getGamificationMetricdefinitions"></a>

# GetMetricDefinitionsResponse getGamificationMetricdefinitions()



GET /api/v2/gamification/metricdefinitions

All metric definitions

Retrieves the metric definitions and their corresponding default objectives used to create a gamified metric

Requires ANY permissions: 

* gamification:profile:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

apiInstance.getGamificationMetricdefinitions()
  .then((data) => {
    console.log(`getGamificationMetricdefinitions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationMetricdefinitions');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**GetMetricDefinitionsResponse**

<a name="getGamificationMetrics"></a>

# GetMetricsResponse getGamificationMetrics(opts)



GET /api/v2/gamification/metrics

All gamified metrics for a given profile



Requires ANY permissions: 

* gamification:profile:view
* gamification:leaderboard:view
* gamification:scorecard:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let opts = { 
  'performanceProfileId': "performanceProfileId_example", // String | The profile id of the metrics you are trying to retrieve. The DEFAULT profile is used if nothing is given.
  'workday': "2013-10-20" // String | The objective query workday. If not specified, then it retrieves the current objective. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
};

apiInstance.getGamificationMetrics(opts)
  .then((data) => {
    console.log(`getGamificationMetrics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationMetrics');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **performanceProfileId** | **String** | The profile id of the metrics you are trying to retrieve. The DEFAULT profile is used if nothing is given. | [optional]  |
 **workday** | **String** | The objective query workday. If not specified, then it retrieves the current objective. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
{: class="table table-striped"}

### Return type

**GetMetricsResponse**

<a name="getGamificationProfile"></a>

# PerformanceProfile getGamificationProfile(performanceProfileId)



GET /api/v2/gamification/profiles/{performanceProfileId}

Performance profile by id



Requires ANY permissions: 

* gamification:profile:view
* gamification:leaderboard:viewAll
* gamification:scorecard:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let performanceProfileId = "performanceProfileId_example"; // String | Performance Profile Id

apiInstance.getGamificationProfile(performanceProfileId)
  .then((data) => {
    console.log(`getGamificationProfile success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationProfile');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **performanceProfileId** | **String** | Performance Profile Id |  |
{: class="table table-striped"}

### Return type

**PerformanceProfile**

<a name="getGamificationProfileMembers"></a>

# MemberListing getGamificationProfileMembers(performanceProfileId)



GET /api/v2/gamification/profiles/{performanceProfileId}/members

Members of a given performance profile



Requires ANY permissions: 

* gamification:profile:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let performanceProfileId = "performanceProfileId_example"; // String | Performance Profile Id

apiInstance.getGamificationProfileMembers(performanceProfileId)
  .then((data) => {
    console.log(`getGamificationProfileMembers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationProfileMembers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **performanceProfileId** | **String** | Performance Profile Id |  |
{: class="table table-striped"}

### Return type

**MemberListing**

<a name="getGamificationProfileMetric"></a>

# Metric getGamificationProfileMetric(profileId, metricId, opts)



GET /api/v2/gamification/profiles/{profileId}/metrics/{metricId}

Performance profile gamified metric by id



Requires ANY permissions: 

* gamification:profile:view
* gamification:leaderboard:view
* gamification:scorecard:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let profileId = "profileId_example"; // String | Performance Profile Id
let metricId = "metricId_example"; // String | Metric Id
let opts = { 
  'workday': "2013-10-20" // String | The objective query workday. If not specified, then it retrieves the current objective. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
};

apiInstance.getGamificationProfileMetric(profileId, metricId, opts)
  .then((data) => {
    console.log(`getGamificationProfileMetric success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationProfileMetric');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **profileId** | **String** | Performance Profile Id |  |
 **metricId** | **String** | Metric Id |  |
 **workday** | **String** | The objective query workday. If not specified, then it retrieves the current objective. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
{: class="table table-striped"}

### Return type

**Metric**

<a name="getGamificationProfileMetrics"></a>

# GetMetricResponse getGamificationProfileMetrics(profileId, opts)



GET /api/v2/gamification/profiles/{profileId}/metrics

All gamified metrics for a given performance profile



Requires ANY permissions: 

* gamification:profile:view
* gamification:leaderboard:view
* gamification:scorecard:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let profileId = "profileId_example"; // String | Performance Profile Id
let opts = { 
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand.
  'workday': "2013-10-20" // String | The objective query workday. If not specified, then it retrieves the current objective. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
};

apiInstance.getGamificationProfileMetrics(profileId, opts)
  .then((data) => {
    console.log(`getGamificationProfileMetrics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationProfileMetrics');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **profileId** | **String** | Performance Profile Id |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: objective |
 **workday** | **String** | The objective query workday. If not specified, then it retrieves the current objective. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
{: class="table table-striped"}

### Return type

**GetMetricResponse**

<a name="getGamificationProfileMetricsObjectivedetails"></a>

# GetMetricsResponse getGamificationProfileMetricsObjectivedetails(profileId, opts)



GET /api/v2/gamification/profiles/{profileId}/metrics/objectivedetails

All metrics for a given performance profile with objective details such as order and maxPoints



Requires ANY permissions: 

* gamification:profile:view
* gamification:leaderboard:view
* gamification:scorecard:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let profileId = "profileId_example"; // String | Performance Profile Id
let opts = { 
  'workday': "2013-10-20" // String | The objective query workday. If not specified, then it retrieves the current objective. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
};

apiInstance.getGamificationProfileMetricsObjectivedetails(profileId, opts)
  .then((data) => {
    console.log(`getGamificationProfileMetricsObjectivedetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationProfileMetricsObjectivedetails');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **profileId** | **String** | Performance Profile Id |  |
 **workday** | **String** | The objective query workday. If not specified, then it retrieves the current objective. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
{: class="table table-striped"}

### Return type

**GetMetricsResponse**

<a name="getGamificationProfiles"></a>

# GetProfilesResponse getGamificationProfiles()



GET /api/v2/gamification/profiles

All performance profiles



Requires ANY permissions: 

* gamification:profile:view
* gamification:leaderboard:viewAll
* gamification:scorecard:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

apiInstance.getGamificationProfiles()
  .then((data) => {
    console.log(`getGamificationProfiles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationProfiles');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**GetProfilesResponse**

<a name="getGamificationProfilesUser"></a>

# PerformanceProfile getGamificationProfilesUser(userId, opts)



GET /api/v2/gamification/profiles/users/{userId}

Performance profile of a user



Requires ANY permissions: 

* gamification:profile:view
* gamification:scorecard:viewAll
* gamification:leaderboard:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let userId = "userId_example"; // String | 
let opts = { 
  'workday': "2013-10-20" // String | Target querying workday. If not provided, then queries the current performance profile. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
};

apiInstance.getGamificationProfilesUser(userId, opts)
  .then((data) => {
    console.log(`getGamificationProfilesUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationProfilesUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** |  |  |
 **workday** | **String** | Target querying workday. If not provided, then queries the current performance profile. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
{: class="table table-striped"}

### Return type

**PerformanceProfile**

<a name="getGamificationProfilesUsersMe"></a>

# PerformanceProfile getGamificationProfilesUsersMe(opts)



GET /api/v2/gamification/profiles/users/me

Performance profile of the requesting user



Requires NO permissions: 


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let opts = { 
  'workday': "2013-10-20" // String | Target querying workday. If not provided, then queries the current performance profile. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
};

apiInstance.getGamificationProfilesUsersMe(opts)
  .then((data) => {
    console.log(`getGamificationProfilesUsersMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationProfilesUsersMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workday** | **String** | Target querying workday. If not provided, then queries the current performance profile. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
{: class="table table-striped"}

### Return type

**PerformanceProfile**

<a name="getGamificationScorecards"></a>

# WorkdayMetricListing getGamificationScorecards(workday, opts)



GET /api/v2/gamification/scorecards

Workday performance metrics of the requesting user



Requires ANY permissions: 

* gamification:scorecard:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let workday = "2013-10-20"; // String | Target querying workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};

apiInstance.getGamificationScorecards(workday, opts)
  .then((data) => {
    console.log(`getGamificationScorecards success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationScorecards');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workday** | **String** | Target querying workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: objective |
{: class="table table-striped"}

### Return type

**WorkdayMetricListing**

<a name="getGamificationScorecardsAttendance"></a>

# AttendanceStatusListing getGamificationScorecardsAttendance(startWorkday, endWorkday)



GET /api/v2/gamification/scorecards/attendance

Attendance status metrics of the requesting user



Requires ANY permissions: 

* gamification:scorecard:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let startWorkday = "2013-10-20"; // String | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let endWorkday = "2013-10-20"; // String | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd

apiInstance.getGamificationScorecardsAttendance(startWorkday, endWorkday)
  .then((data) => {
    console.log(`getGamificationScorecardsAttendance success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationScorecardsAttendance');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **startWorkday** | **String** | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **endWorkday** | **String** | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
{: class="table table-striped"}

### Return type

**AttendanceStatusListing**

<a name="getGamificationScorecardsBestpoints"></a>

# UserBestPoints getGamificationScorecardsBestpoints()



GET /api/v2/gamification/scorecards/bestpoints

Best points of the requesting user



Requires ANY permissions: 

* gamification:scorecard:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

apiInstance.getGamificationScorecardsBestpoints()
  .then((data) => {
    console.log(`getGamificationScorecardsBestpoints success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationScorecardsBestpoints');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**UserBestPoints**

<a name="getGamificationScorecardsPointsAlltime"></a>

# AllTimePoints getGamificationScorecardsPointsAlltime(endWorkday)



GET /api/v2/gamification/scorecards/points/alltime

All-time points of the requesting user



Requires ANY permissions: 

* gamification:scorecard:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let endWorkday = "2013-10-20"; // String | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd

apiInstance.getGamificationScorecardsPointsAlltime(endWorkday)
  .then((data) => {
    console.log(`getGamificationScorecardsPointsAlltime success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationScorecardsPointsAlltime');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **endWorkday** | **String** | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
{: class="table table-striped"}

### Return type

**AllTimePoints**

<a name="getGamificationScorecardsPointsAverage"></a>

# SingleWorkdayAveragePoints getGamificationScorecardsPointsAverage(workday)



GET /api/v2/gamification/scorecards/points/average

Average points of the requesting user&#39;s division or performance profile



Requires ANY permissions: 

* gamification:scorecard:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let workday = "2013-10-20"; // String | The target workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd

apiInstance.getGamificationScorecardsPointsAverage(workday)
  .then((data) => {
    console.log(`getGamificationScorecardsPointsAverage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationScorecardsPointsAverage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workday** | **String** | The target workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
{: class="table table-striped"}

### Return type

**SingleWorkdayAveragePoints**

<a name="getGamificationScorecardsPointsTrends"></a>

# WorkdayPointsTrend getGamificationScorecardsPointsTrends(startWorkday, endWorkday, opts)



GET /api/v2/gamification/scorecards/points/trends

Points trends of the requesting user



Requires ANY permissions: 

* gamification:scorecard:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let startWorkday = "2013-10-20"; // String | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let endWorkday = "2013-10-20"; // String | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let opts = { 
  'dayOfWeek': "dayOfWeek_example" // String | Optional filter to specify which day of weeks to be included in the response
};

apiInstance.getGamificationScorecardsPointsTrends(startWorkday, endWorkday, opts)
  .then((data) => {
    console.log(`getGamificationScorecardsPointsTrends success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationScorecardsPointsTrends');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **startWorkday** | **String** | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **endWorkday** | **String** | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **dayOfWeek** | **String** | Optional filter to specify which day of weeks to be included in the response | [optional] <br />**Values**: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday |
{: class="table table-striped"}

### Return type

**WorkdayPointsTrend**

<a name="getGamificationScorecardsUser"></a>

# WorkdayMetricListing getGamificationScorecardsUser(userId, workday, opts)



GET /api/v2/gamification/scorecards/users/{userId}

Workday performance metrics for a user



Requires ANY permissions: 

* gamification:scorecard:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let userId = "userId_example"; // String | 
let workday = "2013-10-20"; // String | Target querying workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};

apiInstance.getGamificationScorecardsUser(userId, workday, opts)
  .then((data) => {
    console.log(`getGamificationScorecardsUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationScorecardsUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** |  |  |
 **workday** | **String** | Target querying workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: objective |
{: class="table table-striped"}

### Return type

**WorkdayMetricListing**

<a name="getGamificationScorecardsUserAttendance"></a>

# AttendanceStatusListing getGamificationScorecardsUserAttendance(userId, startWorkday, endWorkday)



GET /api/v2/gamification/scorecards/users/{userId}/attendance

Attendance status metrics for a user



Requires ANY permissions: 

* gamification:scorecard:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let userId = "userId_example"; // String | 
let startWorkday = "2013-10-20"; // String | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let endWorkday = "2013-10-20"; // String | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd

apiInstance.getGamificationScorecardsUserAttendance(userId, startWorkday, endWorkday)
  .then((data) => {
    console.log(`getGamificationScorecardsUserAttendance success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationScorecardsUserAttendance');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** |  |  |
 **startWorkday** | **String** | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **endWorkday** | **String** | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
{: class="table table-striped"}

### Return type

**AttendanceStatusListing**

<a name="getGamificationScorecardsUserBestpoints"></a>

# UserBestPoints getGamificationScorecardsUserBestpoints(userId)



GET /api/v2/gamification/scorecards/users/{userId}/bestpoints

Best points of a user



Requires ANY permissions: 

* gamification:scorecard:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let userId = "userId_example"; // String | 

apiInstance.getGamificationScorecardsUserBestpoints(userId)
  .then((data) => {
    console.log(`getGamificationScorecardsUserBestpoints success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationScorecardsUserBestpoints');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** |  |  |
{: class="table table-striped"}

### Return type

**UserBestPoints**

<a name="getGamificationScorecardsUserPointsAlltime"></a>

# AllTimePoints getGamificationScorecardsUserPointsAlltime(userId, endWorkday)



GET /api/v2/gamification/scorecards/users/{userId}/points/alltime

All-time points for a user



Requires ANY permissions: 

* gamification:scorecard:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let userId = "userId_example"; // String | 
let endWorkday = "2013-10-20"; // String | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd

apiInstance.getGamificationScorecardsUserPointsAlltime(userId, endWorkday)
  .then((data) => {
    console.log(`getGamificationScorecardsUserPointsAlltime success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationScorecardsUserPointsAlltime');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** |  |  |
 **endWorkday** | **String** | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
{: class="table table-striped"}

### Return type

**AllTimePoints**

<a name="getGamificationScorecardsUserPointsTrends"></a>

# WorkdayPointsTrend getGamificationScorecardsUserPointsTrends(userId, startWorkday, endWorkday, opts)



GET /api/v2/gamification/scorecards/users/{userId}/points/trends

Points trend for a user



Requires ANY permissions: 

* gamification:scorecard:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let userId = "userId_example"; // String | 
let startWorkday = "2013-10-20"; // String | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let endWorkday = "2013-10-20"; // String | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let opts = { 
  'dayOfWeek': "dayOfWeek_example" // String | Optional filter to specify which day of weeks to be included in the response
};

apiInstance.getGamificationScorecardsUserPointsTrends(userId, startWorkday, endWorkday, opts)
  .then((data) => {
    console.log(`getGamificationScorecardsUserPointsTrends success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationScorecardsUserPointsTrends');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** |  |  |
 **startWorkday** | **String** | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **endWorkday** | **String** | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **dayOfWeek** | **String** | Optional filter to specify which day of weeks to be included in the response | [optional] <br />**Values**: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday |
{: class="table table-striped"}

### Return type

**WorkdayPointsTrend**

<a name="getGamificationScorecardsUserValuesTrends"></a>

# WorkdayValuesTrend getGamificationScorecardsUserValuesTrends(userId, startWorkday, endWorkday, opts)



GET /api/v2/gamification/scorecards/users/{userId}/values/trends

Values trends of a user



Requires ANY permissions: 

* gamification:scorecard:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let userId = "userId_example"; // String | 
let startWorkday = "2013-10-20"; // String | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let endWorkday = "2013-10-20"; // String | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let opts = { 
  'timeZone': "UTC" // String | Timezone for the workday. Defaults to UTC
};

apiInstance.getGamificationScorecardsUserValuesTrends(userId, startWorkday, endWorkday, opts)
  .then((data) => {
    console.log(`getGamificationScorecardsUserValuesTrends success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationScorecardsUserValuesTrends');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** |  |  |
 **startWorkday** | **String** | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **endWorkday** | **String** | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **timeZone** | **String** | Timezone for the workday. Defaults to UTC | [optional] [default to UTC] |
{: class="table table-striped"}

### Return type

**WorkdayValuesTrend**

<a name="getGamificationScorecardsUsersPointsAverage"></a>

# SingleWorkdayAveragePoints getGamificationScorecardsUsersPointsAverage(filterType, filterId, workday)



GET /api/v2/gamification/scorecards/users/points/average

Workday average points by target group



Requires ANY permissions: 

* gamification:scorecard:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let filterType = "filterType_example"; // String | Filter type for the query request.
let filterId = "filterId_example"; // String | ID for the filter type.
let workday = "2013-10-20"; // String | The target workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd

apiInstance.getGamificationScorecardsUsersPointsAverage(filterType, filterId, workday)
  .then((data) => {
    console.log(`getGamificationScorecardsUsersPointsAverage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationScorecardsUsersPointsAverage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **filterType** | **String** | Filter type for the query request. | <br />**Values**: PerformanceProfile, Division |
 **filterId** | **String** | ID for the filter type. |  |
 **workday** | **String** | The target workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
{: class="table table-striped"}

### Return type

**SingleWorkdayAveragePoints**

<a name="getGamificationScorecardsUsersValuesAverage"></a>

# SingleWorkdayAverageValues getGamificationScorecardsUsersValuesAverage(filterType, filterId, workday, opts)



GET /api/v2/gamification/scorecards/users/values/average

Workday average values by target group



Requires ANY permissions: 

* gamification:scorecard:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let filterType = "filterType_example"; // String | Filter type for the query request.
let filterId = "filterId_example"; // String | ID for the filter type. For example, division Id
let workday = "2013-10-20"; // String | The target workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let opts = { 
  'timeZone': "UTC" // String | Timezone for the workday. Defaults to UTC
};

apiInstance.getGamificationScorecardsUsersValuesAverage(filterType, filterId, workday, opts)
  .then((data) => {
    console.log(`getGamificationScorecardsUsersValuesAverage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationScorecardsUsersValuesAverage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **filterType** | **String** | Filter type for the query request. | <br />**Values**: PerformanceProfile, Division |
 **filterId** | **String** | ID for the filter type. For example, division Id |  |
 **workday** | **String** | The target workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **timeZone** | **String** | Timezone for the workday. Defaults to UTC | [optional] [default to UTC] |
{: class="table table-striped"}

### Return type

**SingleWorkdayAverageValues**

<a name="getGamificationScorecardsUsersValuesTrends"></a>

# WorkdayValuesTrend getGamificationScorecardsUsersValuesTrends(filterType, filterId, startWorkday, endWorkday, opts)



GET /api/v2/gamification/scorecards/users/values/trends

Values trend by target group



Requires ANY permissions: 

* gamification:scorecard:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let filterType = "filterType_example"; // String | Filter type for the query request.
let filterId = "filterId_example"; // String | ID for the filter type.
let startWorkday = "2013-10-20"; // String | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let endWorkday = "2013-10-20"; // String | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let opts = { 
  'timeZone': "UTC" // String | Timezone for the workday. Defaults to UTC
};

apiInstance.getGamificationScorecardsUsersValuesTrends(filterType, filterId, startWorkday, endWorkday, opts)
  .then((data) => {
    console.log(`getGamificationScorecardsUsersValuesTrends success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationScorecardsUsersValuesTrends');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **filterType** | **String** | Filter type for the query request. | <br />**Values**: PerformanceProfile, Division |
 **filterId** | **String** | ID for the filter type. |  |
 **startWorkday** | **String** | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **endWorkday** | **String** | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **timeZone** | **String** | Timezone for the workday. Defaults to UTC | [optional] [default to UTC] |
{: class="table table-striped"}

### Return type

**WorkdayValuesTrend**

<a name="getGamificationScorecardsValuesAverage"></a>

# SingleWorkdayAverageValues getGamificationScorecardsValuesAverage(workday, opts)



GET /api/v2/gamification/scorecards/values/average

Average values of the requesting user&#39;s division or performance profile



Requires ANY permissions: 

* gamification:scorecard:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let workday = "2013-10-20"; // String | The target workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let opts = { 
  'timeZone': "UTC" // String | Timezone for the workday. Defaults to UTC
};

apiInstance.getGamificationScorecardsValuesAverage(workday, opts)
  .then((data) => {
    console.log(`getGamificationScorecardsValuesAverage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationScorecardsValuesAverage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workday** | **String** | The target workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **timeZone** | **String** | Timezone for the workday. Defaults to UTC | [optional] [default to UTC] |
{: class="table table-striped"}

### Return type

**SingleWorkdayAverageValues**

<a name="getGamificationScorecardsValuesTrends"></a>

# WorkdayValuesTrend getGamificationScorecardsValuesTrends(startWorkday, endWorkday, opts)



GET /api/v2/gamification/scorecards/values/trends

Values trends of the requesting user or group



Requires ANY permissions: 

* gamification:scorecard:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let startWorkday = "2013-10-20"; // String | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let endWorkday = "2013-10-20"; // String | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let opts = { 
  'filterType': "filterType_example", // String | Filter type for the query request. If not set, then the request is for the requesting user.
  'referenceWorkday': "2013-10-20", // String | Reference workday for the trend. Used to determine the profile of the user as of this date. If not set, then the user's current profile will be used. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'timeZone': "UTC" // String | Timezone for the workday. Defaults to UTC
};

apiInstance.getGamificationScorecardsValuesTrends(startWorkday, endWorkday, opts)
  .then((data) => {
    console.log(`getGamificationScorecardsValuesTrends success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationScorecardsValuesTrends');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **startWorkday** | **String** | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **endWorkday** | **String** | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **filterType** | **String** | Filter type for the query request. If not set, then the request is for the requesting user. | [optional] <br />**Values**: PerformanceProfile, Division |
 **referenceWorkday** | **String** | Reference workday for the trend. Used to determine the profile of the user as of this date. If not set, then the user&#39;s current profile will be used. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
 **timeZone** | **String** | Timezone for the workday. Defaults to UTC | [optional] [default to UTC] |
{: class="table table-striped"}

### Return type

**WorkdayValuesTrend**

<a name="getGamificationStatus"></a>

# GamificationStatus getGamificationStatus()



GET /api/v2/gamification/status

Gamification activation status



Requires ANY permissions: 

* gamification:profile:view
* gamification:profile:update
* gamification:scorecard:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

apiInstance.getGamificationStatus()
  .then((data) => {
    console.log(`getGamificationStatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationStatus');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**GamificationStatus**

<a name="getGamificationTemplate"></a>

# ObjectiveTemplate getGamificationTemplate(templateId)



GET /api/v2/gamification/templates/{templateId}

Objective template by id



Requires ANY permissions: 

* gamification:profile:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let templateId = "templateId_example"; // String | template id

apiInstance.getGamificationTemplate(templateId)
  .then((data) => {
    console.log(`getGamificationTemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationTemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **templateId** | **String** | template id |  |
{: class="table table-striped"}

### Return type

**ObjectiveTemplate**

<a name="getGamificationTemplates"></a>

# GetTemplatesResponse getGamificationTemplates()



GET /api/v2/gamification/templates

All objective templates



Requires ANY permissions: 

* gamification:profile:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

apiInstance.getGamificationTemplates()
  .then((data) => {
    console.log(`getGamificationTemplates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationTemplates');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**GetTemplatesResponse**

<a name="postGamificationMetrics"></a>

# Metric postGamificationMetrics(body)



POST /api/v2/gamification/metrics

Creates a gamified metric with a given metric definition and metric objective



Requires ALL permissions: 

* gamification:profile:update

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let body = {}; // Object | Metric

apiInstance.postGamificationMetrics(body)
  .then((data) => {
    console.log(`postGamificationMetrics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGamificationMetrics');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Metric |  |
{: class="table table-striped"}

### Return type

**Metric**

<a name="postGamificationProfileActivate"></a>

# PerformanceProfile postGamificationProfileActivate(performanceProfileId)



POST /api/v2/gamification/profiles/{performanceProfileId}/activate

Activate a performance profile



Requires ANY permissions: 

* gamification:profile:update

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let performanceProfileId = "performanceProfileId_example"; // String | Performance Profile Id

apiInstance.postGamificationProfileActivate(performanceProfileId)
  .then((data) => {
    console.log(`postGamificationProfileActivate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGamificationProfileActivate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **performanceProfileId** | **String** | Performance Profile Id |  |
{: class="table table-striped"}

### Return type

**PerformanceProfile**

<a name="postGamificationProfileDeactivate"></a>

# PerformanceProfile postGamificationProfileDeactivate(performanceProfileId)



POST /api/v2/gamification/profiles/{performanceProfileId}/deactivate

Deactivate a performance profile



Requires ANY permissions: 

* gamification:profile:update

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let performanceProfileId = "performanceProfileId_example"; // String | Performance Profile Id

apiInstance.postGamificationProfileDeactivate(performanceProfileId)
  .then((data) => {
    console.log(`postGamificationProfileDeactivate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGamificationProfileDeactivate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **performanceProfileId** | **String** | Performance Profile Id |  |
{: class="table table-striped"}

### Return type

**PerformanceProfile**

<a name="postGamificationProfileMembers"></a>

# Assignment postGamificationProfileMembers(performanceProfileId, body)



POST /api/v2/gamification/profiles/{performanceProfileId}/members

Assign members to a given performance profile



Requires ANY permissions: 

* gamification:profile:update

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let performanceProfileId = "performanceProfileId_example"; // String | Performance Profile Id
let body = {}; // Object | assignUsers

apiInstance.postGamificationProfileMembers(performanceProfileId, body)
  .then((data) => {
    console.log(`postGamificationProfileMembers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGamificationProfileMembers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **performanceProfileId** | **String** | Performance Profile Id |  |
 **body** | **Object** | assignUsers |  |
{: class="table table-striped"}

### Return type

**Assignment**

<a name="postGamificationProfileMembersValidate"></a>

# AssignmentValidation postGamificationProfileMembersValidate(performanceProfileId, body)



POST /api/v2/gamification/profiles/{performanceProfileId}/members/validate

Validate member assignment



Requires ANY permissions: 

* gamification:profile:update

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let performanceProfileId = "performanceProfileId_example"; // String | Performance Profile Id
let body = {}; // Object | memberAssignments

apiInstance.postGamificationProfileMembersValidate(performanceProfileId, body)
  .then((data) => {
    console.log(`postGamificationProfileMembersValidate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGamificationProfileMembersValidate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **performanceProfileId** | **String** | Performance Profile Id |  |
 **body** | **Object** | memberAssignments |  |
{: class="table table-striped"}

### Return type

**AssignmentValidation**

<a name="postGamificationProfileMetricLink"></a>

# Metric postGamificationProfileMetricLink(sourceProfileId, sourceMetricId, body)



POST /api/v2/gamification/profiles/{sourceProfileId}/metrics/{sourceMetricId}/link

Creates a linked metric



Requires ANY permissions: 

* gamification:profile:update

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let sourceProfileId = "sourceProfileId_example"; // String | Source Performance Profile Id
let sourceMetricId = "sourceMetricId_example"; // String | Source Metric Id
let body = {}; // Object | linkedMetric

apiInstance.postGamificationProfileMetricLink(sourceProfileId, sourceMetricId, body)
  .then((data) => {
    console.log(`postGamificationProfileMetricLink success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGamificationProfileMetricLink');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sourceProfileId** | **String** | Source Performance Profile Id |  |
 **sourceMetricId** | **String** | Source Metric Id |  |
 **body** | **Object** | linkedMetric |  |
{: class="table table-striped"}

### Return type

**Metric**

<a name="postGamificationProfileMetrics"></a>

# Metric postGamificationProfileMetrics(profileId, body)



POST /api/v2/gamification/profiles/{profileId}/metrics

Creates a gamified metric with a given metric definition and metric objective under in a performance profile



Requires ALL permissions: 

* gamification:profile:update

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let profileId = "profileId_example"; // String | Performance Profile Id
let body = {}; // Object | Metric

apiInstance.postGamificationProfileMetrics(profileId, body)
  .then((data) => {
    console.log(`postGamificationProfileMetrics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGamificationProfileMetrics');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **profileId** | **String** | Performance Profile Id |  |
 **body** | **Object** | Metric |  |
{: class="table table-striped"}

### Return type

**Metric**

<a name="postGamificationProfiles"></a>

# GetProfilesResponse postGamificationProfiles(body)



POST /api/v2/gamification/profiles

Create a new custom performance profile



Requires ANY permissions: 

* gamification:profile:update

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let body = {}; // Object | performanceProfile

apiInstance.postGamificationProfiles(body)
  .then((data) => {
    console.log(`postGamificationProfiles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGamificationProfiles');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | performanceProfile |  |
{: class="table table-striped"}

### Return type

**GetProfilesResponse**

<a name="putGamificationMetric"></a>

# Metric putGamificationMetric(metricId, body, opts)



PUT /api/v2/gamification/metrics/{metricId}

Updates a metric



Requires ALL permissions: 

* gamification:profile:update

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let metricId = "metricId_example"; // String | metric Id
let body = {}; // Object | Metric
let opts = { 
  'performanceProfileId': "performanceProfileId_example" // String | The profile id of the metrics you are trying to retrieve. The DEFAULT profile is used if nothing is given.
};

apiInstance.putGamificationMetric(metricId, body, opts)
  .then((data) => {
    console.log(`putGamificationMetric success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putGamificationMetric');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **metricId** | **String** | metric Id |  |
 **body** | **Object** | Metric |  |
 **performanceProfileId** | **String** | The profile id of the metrics you are trying to retrieve. The DEFAULT profile is used if nothing is given. | [optional]  |
{: class="table table-striped"}

### Return type

**Metric**

<a name="putGamificationProfile"></a>

# PerformanceProfile putGamificationProfile(performanceProfileId, opts)



PUT /api/v2/gamification/profiles/{performanceProfileId}

Updates a performance profile



Requires ANY permissions: 

* gamification:profile:update

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let performanceProfileId = "performanceProfileId_example"; // String | Performance Profile Id
let opts = { 
  'body': {} // Object | performanceProfile
};

apiInstance.putGamificationProfile(performanceProfileId, opts)
  .then((data) => {
    console.log(`putGamificationProfile success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putGamificationProfile');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **performanceProfileId** | **String** | Performance Profile Id |  |
 **body** | **Object** | performanceProfile | [optional]  |
{: class="table table-striped"}

### Return type

**PerformanceProfile**

<a name="putGamificationProfileMetric"></a>

# Metric putGamificationProfileMetric(profileId, metricId, body)



PUT /api/v2/gamification/profiles/{profileId}/metrics/{metricId}

Updates a metric in performance profile



Requires ALL permissions: 

* gamification:profile:update

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let profileId = "profileId_example"; // String | Performance Profile Id
let metricId = "metricId_example"; // String | Metric Id
let body = {}; // Object | Metric

apiInstance.putGamificationProfileMetric(profileId, metricId, body)
  .then((data) => {
    console.log(`putGamificationProfileMetric success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putGamificationProfileMetric');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **profileId** | **String** | Performance Profile Id |  |
 **metricId** | **String** | Metric Id |  |
 **body** | **Object** | Metric |  |
{: class="table table-striped"}

### Return type

**Metric**

<a name="putGamificationStatus"></a>

# GamificationStatus putGamificationStatus(status)



PUT /api/v2/gamification/status

Update gamification activation status



Requires ANY permissions: 

* gamification:profile:update

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let status = {}; // Object | Gamification status

apiInstance.putGamificationStatus(status)
  .then((data) => {
    console.log(`putGamificationStatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putGamificationStatus');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **status** | **Object** | Gamification status |  |
{: class="table table-striped"}

### Return type

**GamificationStatus**

