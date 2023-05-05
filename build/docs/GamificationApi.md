---
title: GamificationApi
---
# platformClient.GamificationApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteEmployeeperformanceExternalmetricsDefinition**](GamificationApi.html#deleteEmployeeperformanceExternalmetricsDefinition) | **DELETE** /api/v2/employeeperformance/externalmetrics/definitions/{metricId} | Delete an External Metric Definition
[**getEmployeeperformanceExternalmetricsDefinition**](GamificationApi.html#getEmployeeperformanceExternalmetricsDefinition) | **GET** /api/v2/employeeperformance/externalmetrics/definitions/{metricId} | Get an External Metric Definition
[**getEmployeeperformanceExternalmetricsDefinitions**](GamificationApi.html#getEmployeeperformanceExternalmetricsDefinitions) | **GET** /api/v2/employeeperformance/externalmetrics/definitions | Get a list of External Metric Definitions of an organization, sorted by name in ascending order
[**getGamificationInsights**](GamificationApi.html#getGamificationInsights) | **GET** /api/v2/gamification/insights | Get insights summary
[**getGamificationInsightsDetails**](GamificationApi.html#getGamificationInsightsDetails) | **GET** /api/v2/gamification/insights/details | Get insights details for the current user
[**getGamificationInsightsGroupsTrends**](GamificationApi.html#getGamificationInsightsGroupsTrends) | **GET** /api/v2/gamification/insights/groups/trends | Get insights overall trend for the current user
[**getGamificationInsightsGroupsTrendsAll**](GamificationApi.html#getGamificationInsightsGroupsTrendsAll) | **GET** /api/v2/gamification/insights/groups/trends/all | Get insights overall trend
[**getGamificationInsightsMembers**](GamificationApi.html#getGamificationInsightsMembers) | **GET** /api/v2/gamification/insights/members | Query users in a profile during a period of time
[**getGamificationInsightsTrends**](GamificationApi.html#getGamificationInsightsTrends) | **GET** /api/v2/gamification/insights/trends | Get insights user trend for the current user
[**getGamificationInsightsUserDetails**](GamificationApi.html#getGamificationInsightsUserDetails) | **GET** /api/v2/gamification/insights/users/{userId}/details | Get insights details for the user
[**getGamificationInsightsUserTrends**](GamificationApi.html#getGamificationInsightsUserTrends) | **GET** /api/v2/gamification/insights/users/{userId}/trends | Get insights user trend for the user
[**getGamificationLeaderboard**](GamificationApi.html#getGamificationLeaderboard) | **GET** /api/v2/gamification/leaderboard | Leaderboard of the requesting user's division or performance profile
[**getGamificationLeaderboardAll**](GamificationApi.html#getGamificationLeaderboardAll) | **GET** /api/v2/gamification/leaderboard/all | Leaderboard by filter type
[**getGamificationLeaderboardAllBestpoints**](GamificationApi.html#getGamificationLeaderboardAllBestpoints) | **GET** /api/v2/gamification/leaderboard/all/bestpoints | Best Points by division or performance profile
[**getGamificationLeaderboardBestpoints**](GamificationApi.html#getGamificationLeaderboardBestpoints) | **GET** /api/v2/gamification/leaderboard/bestpoints | Best Points of the requesting user's current performance profile or division
[**getGamificationMetricdefinition**](GamificationApi.html#getGamificationMetricdefinition) | **GET** /api/v2/gamification/metricdefinitions/{metricDefinitionId} | Metric definition by id
[**getGamificationMetricdefinitions**](GamificationApi.html#getGamificationMetricdefinitions) | **GET** /api/v2/gamification/metricdefinitions | All metric definitions
[**getGamificationProfile**](GamificationApi.html#getGamificationProfile) | **GET** /api/v2/gamification/profiles/{profileId} | Performance profile by id
[**getGamificationProfileMembers**](GamificationApi.html#getGamificationProfileMembers) | **GET** /api/v2/gamification/profiles/{profileId}/members | Members of a given performance profile
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
[**getGamificationScorecardsPointsAverage**](GamificationApi.html#getGamificationScorecardsPointsAverage) | **GET** /api/v2/gamification/scorecards/points/average | Average points of the requesting user's division or performance profile
[**getGamificationScorecardsPointsTrends**](GamificationApi.html#getGamificationScorecardsPointsTrends) | **GET** /api/v2/gamification/scorecards/points/trends | Points trends of the requesting user
[**getGamificationScorecardsProfileMetricUserValuesTrends**](GamificationApi.html#getGamificationScorecardsProfileMetricUserValuesTrends) | **GET** /api/v2/gamification/scorecards/profiles/{profileId}/metrics/{metricId}/users/{userId}/values/trends | Average performance values trends by metric of a user
[**getGamificationScorecardsProfileMetricUsersValuesTrends**](GamificationApi.html#getGamificationScorecardsProfileMetricUsersValuesTrends) | **GET** /api/v2/gamification/scorecards/profiles/{profileId}/metrics/{metricId}/users/values/trends | Average performance values trends by metric of a division or a performance profile
[**getGamificationScorecardsProfileMetricValuesTrends**](GamificationApi.html#getGamificationScorecardsProfileMetricValuesTrends) | **GET** /api/v2/gamification/scorecards/profiles/{profileId}/metrics/{metricId}/values/trends | Average performance values trends by metric of the requesting user
[**getGamificationScorecardsUser**](GamificationApi.html#getGamificationScorecardsUser) | **GET** /api/v2/gamification/scorecards/users/{userId} | Workday performance metrics for a user
[**getGamificationScorecardsUserAttendance**](GamificationApi.html#getGamificationScorecardsUserAttendance) | **GET** /api/v2/gamification/scorecards/users/{userId}/attendance | Attendance status metrics for a user
[**getGamificationScorecardsUserBestpoints**](GamificationApi.html#getGamificationScorecardsUserBestpoints) | **GET** /api/v2/gamification/scorecards/users/{userId}/bestpoints | Best points of a user
[**getGamificationScorecardsUserPointsAlltime**](GamificationApi.html#getGamificationScorecardsUserPointsAlltime) | **GET** /api/v2/gamification/scorecards/users/{userId}/points/alltime | All-time points for a user
[**getGamificationScorecardsUserPointsTrends**](GamificationApi.html#getGamificationScorecardsUserPointsTrends) | **GET** /api/v2/gamification/scorecards/users/{userId}/points/trends | Points trend for a user
[**getGamificationScorecardsUserValuesTrends**](GamificationApi.html#getGamificationScorecardsUserValuesTrends) | **GET** /api/v2/gamification/scorecards/users/{userId}/values/trends | Values trends of a user
[**getGamificationScorecardsUsersPointsAverage**](GamificationApi.html#getGamificationScorecardsUsersPointsAverage) | **GET** /api/v2/gamification/scorecards/users/points/average | Workday average points by target group
[**getGamificationScorecardsUsersValuesAverage**](GamificationApi.html#getGamificationScorecardsUsersValuesAverage) | **GET** /api/v2/gamification/scorecards/users/values/average | Workday average values by target group
[**getGamificationScorecardsUsersValuesTrends**](GamificationApi.html#getGamificationScorecardsUsersValuesTrends) | **GET** /api/v2/gamification/scorecards/users/values/trends | Values trend by target group
[**getGamificationScorecardsValuesAverage**](GamificationApi.html#getGamificationScorecardsValuesAverage) | **GET** /api/v2/gamification/scorecards/values/average | Average values of the requesting user's division or performance profile
[**getGamificationScorecardsValuesTrends**](GamificationApi.html#getGamificationScorecardsValuesTrends) | **GET** /api/v2/gamification/scorecards/values/trends | Values trends of the requesting user or group
[**getGamificationStatus**](GamificationApi.html#getGamificationStatus) | **GET** /api/v2/gamification/status | Gamification activation status
[**getGamificationTemplate**](GamificationApi.html#getGamificationTemplate) | **GET** /api/v2/gamification/templates/{templateId} | Objective template by id
[**getGamificationTemplates**](GamificationApi.html#getGamificationTemplates) | **GET** /api/v2/gamification/templates | All objective templates
[**patchEmployeeperformanceExternalmetricsDefinition**](GamificationApi.html#patchEmployeeperformanceExternalmetricsDefinition) | **PATCH** /api/v2/employeeperformance/externalmetrics/definitions/{metricId} | Update External Metric Definition
[**postEmployeeperformanceExternalmetricsData**](GamificationApi.html#postEmployeeperformanceExternalmetricsData) | **POST** /api/v2/employeeperformance/externalmetrics/data | Write External Metric Data
[**postEmployeeperformanceExternalmetricsDefinitions**](GamificationApi.html#postEmployeeperformanceExternalmetricsDefinitions) | **POST** /api/v2/employeeperformance/externalmetrics/definitions | Create External Metric Definition
[**postGamificationProfileActivate**](GamificationApi.html#postGamificationProfileActivate) | **POST** /api/v2/gamification/profiles/{profileId}/activate | Activate a performance profile
[**postGamificationProfileDeactivate**](GamificationApi.html#postGamificationProfileDeactivate) | **POST** /api/v2/gamification/profiles/{profileId}/deactivate | Deactivate a performance profile
[**postGamificationProfileMembers**](GamificationApi.html#postGamificationProfileMembers) | **POST** /api/v2/gamification/profiles/{profileId}/members | Assign members to a given performance profile
[**postGamificationProfileMembersValidate**](GamificationApi.html#postGamificationProfileMembersValidate) | **POST** /api/v2/gamification/profiles/{profileId}/members/validate | Validate member assignment
[**postGamificationProfileMetricLink**](GamificationApi.html#postGamificationProfileMetricLink) | **POST** /api/v2/gamification/profiles/{sourceProfileId}/metrics/{sourceMetricId}/link | Creates a linked metric
[**postGamificationProfileMetrics**](GamificationApi.html#postGamificationProfileMetrics) | **POST** /api/v2/gamification/profiles/{profileId}/metrics | Creates a gamified metric with a given metric definition and metric objective under in a performance profile
[**postGamificationProfiles**](GamificationApi.html#postGamificationProfiles) | **POST** /api/v2/gamification/profiles | Create a new custom performance profile
[**postGamificationProfilesUserQuery**](GamificationApi.html#postGamificationProfilesUserQuery) | **POST** /api/v2/gamification/profiles/users/{userId}/query | Query performance profiles in date range for a user
[**postGamificationProfilesUsersMeQuery**](GamificationApi.html#postGamificationProfilesUsersMeQuery) | **POST** /api/v2/gamification/profiles/users/me/query | Query performance profiles in date range for the current user
[**putGamificationProfile**](GamificationApi.html#putGamificationProfile) | **PUT** /api/v2/gamification/profiles/{profileId} | Updates a performance profile
[**putGamificationProfileMetric**](GamificationApi.html#putGamificationProfileMetric) | **PUT** /api/v2/gamification/profiles/{profileId}/metrics/{metricId} | Updates a metric in performance profile
[**putGamificationStatus**](GamificationApi.html#putGamificationStatus) | **PUT** /api/v2/gamification/status | Update gamification activation status
{: class="table table-striped"}

<a name="deleteEmployeeperformanceExternalmetricsDefinition"></a>

# void deleteEmployeeperformanceExternalmetricsDefinition(metricId)


DELETE /api/v2/employeeperformance/externalmetrics/definitions/{metricId}

Delete an External Metric Definition

Requires ANY permissions:

* employeePerformance:externalMetricDefinition:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let metricId = "metricId_example"; // String | Specifies the External Metric Definition ID

apiInstance.deleteEmployeeperformanceExternalmetricsDefinition(metricId)
  .then(() => {
    console.log('deleteEmployeeperformanceExternalmetricsDefinition returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteEmployeeperformanceExternalmetricsDefinition');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **metricId** | **String** | Specifies the External Metric Definition ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getEmployeeperformanceExternalmetricsDefinition"></a>

# ExternalMetricDefinition getEmployeeperformanceExternalmetricsDefinition(metricId)


GET /api/v2/employeeperformance/externalmetrics/definitions/{metricId}

Get an External Metric Definition

Requires ANY permissions:

* employeePerformance:externalMetricDefinition:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let metricId = "metricId_example"; // String | Specifies the External Metric Definition ID

apiInstance.getEmployeeperformanceExternalmetricsDefinition(metricId)
  .then((data) => {
    console.log(`getEmployeeperformanceExternalmetricsDefinition success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getEmployeeperformanceExternalmetricsDefinition');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **metricId** | **String** | Specifies the External Metric Definition ID |  |
{: class="table table-striped"}

### Return type

**ExternalMetricDefinition**

<a name="getEmployeeperformanceExternalmetricsDefinitions"></a>

# ExternalMetricDefinitionListing getEmployeeperformanceExternalmetricsDefinitions(opts)


GET /api/v2/employeeperformance/externalmetrics/definitions

Get a list of External Metric Definitions of an organization, sorted by name in ascending order

Requires ANY permissions:

* employeePerformance:externalMetricDefinition:view

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
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getEmployeeperformanceExternalmetricsDefinitions(opts)
  .then((data) => {
    console.log(`getEmployeeperformanceExternalmetricsDefinitions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getEmployeeperformanceExternalmetricsDefinitions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**ExternalMetricDefinitionListing**

<a name="getGamificationInsights"></a>

# InsightsSummary getGamificationInsights(filterType, filterId, granularity, comparativePeriodStartWorkday, primaryPeriodStartWorkday, opts)


GET /api/v2/gamification/insights

Get insights summary

Requires ANY permissions:

* gamification:insights:viewAll

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
let granularity = "granularity_example"; // String | Granularity
let comparativePeriodStartWorkday = "comparativePeriodStartWorkday_example"; // String | The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let primaryPeriodStartWorkday = "primaryPeriodStartWorkday_example"; // String | The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortKey': "sortKey_example", // String | Sort key
  'sortMetricId': "sortMetricId_example", // String | Sort Metric Id
  'sortOrder': "asc", // String | Sort order
  'userIds': "userIds_example" // String | A list of up to 100 comma-separated user Ids
};

apiInstance.getGamificationInsights(filterType, filterId, granularity, comparativePeriodStartWorkday, primaryPeriodStartWorkday, opts)
  .then((data) => {
    console.log(`getGamificationInsights success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationInsights');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **filterType** | **String** | Filter type for the query request. | <br />**Values**: PerformanceProfile, Division |
 **filterId** | **String** | ID for the filter type. |  |
 **granularity** | **String** | Granularity | <br />**Values**: Weekly, Monthly |
 **comparativePeriodStartWorkday** | **String** | The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **primaryPeriodStartWorkday** | **String** | The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortKey** | **String** | Sort key | [optional] <br />**Values**: percentOfGoal, percentOfGoalChange, overallPercentOfGoal, overallPercentOfGoalChange, value, valueChange |
 **sortMetricId** | **String** | Sort Metric Id | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] [default to asc]<br />**Values**: asc, desc |
 **userIds** | **String** | A list of up to 100 comma-separated user Ids | [optional]  |
{: class="table table-striped"}

### Return type

**InsightsSummary**

<a name="getGamificationInsightsDetails"></a>

# InsightsDetails getGamificationInsightsDetails(filterType, filterId, granularity, comparativePeriodStartWorkday, primaryPeriodStartWorkday)


GET /api/v2/gamification/insights/details

Get insights details for the current user

Requires ANY permissions:

* gamification:insights:view

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
let granularity = "granularity_example"; // String | Granularity
let comparativePeriodStartWorkday = "comparativePeriodStartWorkday_example"; // String | The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let primaryPeriodStartWorkday = "primaryPeriodStartWorkday_example"; // String | The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd

apiInstance.getGamificationInsightsDetails(filterType, filterId, granularity, comparativePeriodStartWorkday, primaryPeriodStartWorkday)
  .then((data) => {
    console.log(`getGamificationInsightsDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationInsightsDetails');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **filterType** | **String** | Filter type for the query request. | <br />**Values**: PerformanceProfile, Division |
 **filterId** | **String** | ID for the filter type. |  |
 **granularity** | **String** | Granularity | <br />**Values**: Weekly, Monthly |
 **comparativePeriodStartWorkday** | **String** | The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **primaryPeriodStartWorkday** | **String** | The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
{: class="table table-striped"}

### Return type

**InsightsDetails**

<a name="getGamificationInsightsGroupsTrends"></a>

# InsightsTrend getGamificationInsightsGroupsTrends(filterType, filterId, granularity, comparativePeriodStartWorkday, comparativePeriodEndWorkday, primaryPeriodStartWorkday, primaryPeriodEndWorkday)


GET /api/v2/gamification/insights/groups/trends

Get insights overall trend for the current user

Requires ANY permissions:

* gamification:insights:view

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
let granularity = "granularity_example"; // String | Granularity
let comparativePeriodStartWorkday = "comparativePeriodStartWorkday_example"; // String | The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let comparativePeriodEndWorkday = "comparativePeriodEndWorkday_example"; // String | The end work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let primaryPeriodStartWorkday = "primaryPeriodStartWorkday_example"; // String | The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let primaryPeriodEndWorkday = "primaryPeriodEndWorkday_example"; // String | The end work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd

apiInstance.getGamificationInsightsGroupsTrends(filterType, filterId, granularity, comparativePeriodStartWorkday, comparativePeriodEndWorkday, primaryPeriodStartWorkday, primaryPeriodEndWorkday)
  .then((data) => {
    console.log(`getGamificationInsightsGroupsTrends success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationInsightsGroupsTrends');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **filterType** | **String** | Filter type for the query request. | <br />**Values**: PerformanceProfile, Division |
 **filterId** | **String** | ID for the filter type. |  |
 **granularity** | **String** | Granularity | <br />**Values**: Daily, Weekly, Monthly |
 **comparativePeriodStartWorkday** | **String** | The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **comparativePeriodEndWorkday** | **String** | The end work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **primaryPeriodStartWorkday** | **String** | The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **primaryPeriodEndWorkday** | **String** | The end work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
{: class="table table-striped"}

### Return type

**InsightsTrend**

<a name="getGamificationInsightsGroupsTrendsAll"></a>

# InsightsTrend getGamificationInsightsGroupsTrendsAll(filterType, filterId, granularity, comparativePeriodStartWorkday, comparativePeriodEndWorkday, primaryPeriodStartWorkday, primaryPeriodEndWorkday)


GET /api/v2/gamification/insights/groups/trends/all

Get insights overall trend

Requires ANY permissions:

* gamification:insights:viewAll

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
let granularity = "granularity_example"; // String | Granularity
let comparativePeriodStartWorkday = "comparativePeriodStartWorkday_example"; // String | The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let comparativePeriodEndWorkday = "comparativePeriodEndWorkday_example"; // String | The end work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let primaryPeriodStartWorkday = "primaryPeriodStartWorkday_example"; // String | The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let primaryPeriodEndWorkday = "primaryPeriodEndWorkday_example"; // String | The end work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd

apiInstance.getGamificationInsightsGroupsTrendsAll(filterType, filterId, granularity, comparativePeriodStartWorkday, comparativePeriodEndWorkday, primaryPeriodStartWorkday, primaryPeriodEndWorkday)
  .then((data) => {
    console.log(`getGamificationInsightsGroupsTrendsAll success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationInsightsGroupsTrendsAll');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **filterType** | **String** | Filter type for the query request. | <br />**Values**: PerformanceProfile, Division |
 **filterId** | **String** | ID for the filter type. |  |
 **granularity** | **String** | Granularity | <br />**Values**: Daily, Weekly, Monthly |
 **comparativePeriodStartWorkday** | **String** | The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **comparativePeriodEndWorkday** | **String** | The end work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **primaryPeriodStartWorkday** | **String** | The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **primaryPeriodEndWorkday** | **String** | The end work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
{: class="table table-striped"}

### Return type

**InsightsTrend**

<a name="getGamificationInsightsMembers"></a>

# InsightsAgents getGamificationInsightsMembers(filterType, filterId, granularity, startWorkday)


GET /api/v2/gamification/insights/members

Query users in a profile during a period of time

Requires ANY permissions:

* gamification:insights:viewAll

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
let granularity = "granularity_example"; // String | Granularity
let startWorkday = "startWorkday_example"; // String | The start work day. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd

apiInstance.getGamificationInsightsMembers(filterType, filterId, granularity, startWorkday)
  .then((data) => {
    console.log(`getGamificationInsightsMembers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationInsightsMembers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **filterType** | **String** | Filter type for the query request. | <br />**Values**: PerformanceProfile, Division |
 **filterId** | **String** | ID for the filter type. |  |
 **granularity** | **String** | Granularity | <br />**Values**: Weekly, Monthly |
 **startWorkday** | **String** | The start work day. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
{: class="table table-striped"}

### Return type

**InsightsAgents**

<a name="getGamificationInsightsTrends"></a>

# UserInsightsTrend getGamificationInsightsTrends(filterType, filterId, granularity, comparativePeriodStartWorkday, comparativePeriodEndWorkday, primaryPeriodStartWorkday, primaryPeriodEndWorkday)


GET /api/v2/gamification/insights/trends

Get insights user trend for the current user

Requires ANY permissions:

* gamification:insights:view

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
let granularity = "granularity_example"; // String | Granularity
let comparativePeriodStartWorkday = "comparativePeriodStartWorkday_example"; // String | The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let comparativePeriodEndWorkday = "comparativePeriodEndWorkday_example"; // String | The end work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let primaryPeriodStartWorkday = "primaryPeriodStartWorkday_example"; // String | The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let primaryPeriodEndWorkday = "primaryPeriodEndWorkday_example"; // String | The end work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd

apiInstance.getGamificationInsightsTrends(filterType, filterId, granularity, comparativePeriodStartWorkday, comparativePeriodEndWorkday, primaryPeriodStartWorkday, primaryPeriodEndWorkday)
  .then((data) => {
    console.log(`getGamificationInsightsTrends success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationInsightsTrends');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **filterType** | **String** | Filter type for the query request. | <br />**Values**: PerformanceProfile, Division |
 **filterId** | **String** | ID for the filter type. |  |
 **granularity** | **String** | Granularity | <br />**Values**: Daily, Weekly |
 **comparativePeriodStartWorkday** | **String** | The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **comparativePeriodEndWorkday** | **String** | The end work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **primaryPeriodStartWorkday** | **String** | The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **primaryPeriodEndWorkday** | **String** | The end work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
{: class="table table-striped"}

### Return type

**UserInsightsTrend**

<a name="getGamificationInsightsUserDetails"></a>

# InsightsDetails getGamificationInsightsUserDetails(userId, filterType, filterId, granularity, comparativePeriodStartWorkday, primaryPeriodStartWorkday)


GET /api/v2/gamification/insights/users/{userId}/details

Get insights details for the user

Requires ANY permissions:

* gamification:insights:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let userId = "userId_example"; // String | The ID of a user.
let filterType = "filterType_example"; // String | Filter type for the query request.
let filterId = "filterId_example"; // String | ID for the filter type.
let granularity = "granularity_example"; // String | Granularity
let comparativePeriodStartWorkday = "comparativePeriodStartWorkday_example"; // String | The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let primaryPeriodStartWorkday = "primaryPeriodStartWorkday_example"; // String | The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd

apiInstance.getGamificationInsightsUserDetails(userId, filterType, filterId, granularity, comparativePeriodStartWorkday, primaryPeriodStartWorkday)
  .then((data) => {
    console.log(`getGamificationInsightsUserDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationInsightsUserDetails');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | The ID of a user. |  |
 **filterType** | **String** | Filter type for the query request. | <br />**Values**: PerformanceProfile, Division |
 **filterId** | **String** | ID for the filter type. |  |
 **granularity** | **String** | Granularity | <br />**Values**: Weekly, Monthly |
 **comparativePeriodStartWorkday** | **String** | The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **primaryPeriodStartWorkday** | **String** | The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
{: class="table table-striped"}

### Return type

**InsightsDetails**

<a name="getGamificationInsightsUserTrends"></a>

# UserInsightsTrend getGamificationInsightsUserTrends(userId, filterType, filterId, granularity, comparativePeriodStartWorkday, comparativePeriodEndWorkday, primaryPeriodStartWorkday, primaryPeriodEndWorkday)


GET /api/v2/gamification/insights/users/{userId}/trends

Get insights user trend for the user

Requires ANY permissions:

* gamification:insights:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let userId = "userId_example"; // String | The ID of a user.
let filterType = "filterType_example"; // String | Filter type for the query request.
let filterId = "filterId_example"; // String | ID for the filter type.
let granularity = "granularity_example"; // String | Granularity
let comparativePeriodStartWorkday = "comparativePeriodStartWorkday_example"; // String | The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let comparativePeriodEndWorkday = "comparativePeriodEndWorkday_example"; // String | The end work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let primaryPeriodStartWorkday = "primaryPeriodStartWorkday_example"; // String | The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let primaryPeriodEndWorkday = "primaryPeriodEndWorkday_example"; // String | The end work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd

apiInstance.getGamificationInsightsUserTrends(userId, filterType, filterId, granularity, comparativePeriodStartWorkday, comparativePeriodEndWorkday, primaryPeriodStartWorkday, primaryPeriodEndWorkday)
  .then((data) => {
    console.log(`getGamificationInsightsUserTrends success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationInsightsUserTrends');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | The ID of a user. |  |
 **filterType** | **String** | Filter type for the query request. | <br />**Values**: PerformanceProfile, Division |
 **filterId** | **String** | ID for the filter type. |  |
 **granularity** | **String** | Granularity | <br />**Values**: Daily, Weekly |
 **comparativePeriodStartWorkday** | **String** | The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **comparativePeriodEndWorkday** | **String** | The end work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **primaryPeriodStartWorkday** | **String** | The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **primaryPeriodEndWorkday** | **String** | The end work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
{: class="table table-striped"}

### Return type

**UserInsightsTrend**

<a name="getGamificationLeaderboard"></a>

# Leaderboard getGamificationLeaderboard(startWorkday, endWorkday, opts)


GET /api/v2/gamification/leaderboard

Leaderboard of the requesting user's division or performance profile

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

let startWorkday = "startWorkday_example"; // String | Start workday to retrieve for the leaderboard. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let endWorkday = "endWorkday_example"; // String | End workday to retrieve for the leaderboard. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
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
let startWorkday = "startWorkday_example"; // String | Start workday to retrieve for the leaderboard. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let endWorkday = "endWorkday_example"; // String | End workday to retrieve for the leaderboard. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
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

Best Points of the requesting user's current performance profile or division

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

<a name="getGamificationProfile"></a>

# PerformanceProfile getGamificationProfile(profileId)


GET /api/v2/gamification/profiles/{profileId}

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

let profileId = "profileId_example"; // String | performanceProfileId

apiInstance.getGamificationProfile(profileId)
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
 **profileId** | **String** | performanceProfileId |  |
{: class="table table-striped"}

### Return type

**PerformanceProfile**

<a name="getGamificationProfileMembers"></a>

# MemberListing getGamificationProfileMembers(profileId)


GET /api/v2/gamification/profiles/{profileId}/members

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

let profileId = "profileId_example"; // String | Profile Id

apiInstance.getGamificationProfileMembers(profileId)
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
 **profileId** | **String** | Profile Id |  |
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
  'workday': "workday_example" // String | The objective query workday. If not specified, then it retrieves the current objective. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
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
  'workday': "workday_example", // String | The objective query workday. If not specified, then it retrieves the current objective. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'metricIds': "metricIds_example" // String | List of metric ids to filter the response (Optional, comma-separated).
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
 **metricIds** | **String** | List of metric ids to filter the response (Optional, comma-separated). | [optional]  |
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
  'workday': "workday_example" // String | The objective query workday. If not specified, then it retrieves the current objective. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
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
  'workday': "workday_example" // String | Target querying workday. If not provided, then queries the current performance profile. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
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
  'workday': "workday_example" // String | Target querying workday. If not provided, then queries the current performance profile. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
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

let workday = "workday_example"; // String | Target querying workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
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

let startWorkday = "startWorkday_example"; // String | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let endWorkday = "endWorkday_example"; // String | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd

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

let endWorkday = "endWorkday_example"; // String | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd

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

Average points of the requesting user's division or performance profile

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

let workday = "workday_example"; // String | The target workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd

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

let startWorkday = "startWorkday_example"; // String | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let endWorkday = "endWorkday_example"; // String | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
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

<a name="getGamificationScorecardsProfileMetricUserValuesTrends"></a>

# MetricValueTrendAverage getGamificationScorecardsProfileMetricUserValuesTrends(profileId, metricId, userId, startWorkday, endWorkday, opts)


GET /api/v2/gamification/scorecards/profiles/{profileId}/metrics/{metricId}/users/{userId}/values/trends

Average performance values trends by metric of a user

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

let profileId = "profileId_example"; // String | performanceProfileId
let metricId = "metricId_example"; // String | metricId
let userId = "userId_example"; // String | 
let startWorkday = "startWorkday_example"; // String | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let endWorkday = "endWorkday_example"; // String | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let opts = { 
  'referenceWorkday': "referenceWorkday_example", // String | Reference workday for the trend. Used to determine the associated metric definition. If not set, then the value of endWorkday is used. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'timeZone': "UTC" // String | Timezone for the workday. Defaults to UTC
};

apiInstance.getGamificationScorecardsProfileMetricUserValuesTrends(profileId, metricId, userId, startWorkday, endWorkday, opts)
  .then((data) => {
    console.log(`getGamificationScorecardsProfileMetricUserValuesTrends success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationScorecardsProfileMetricUserValuesTrends');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **profileId** | **String** | performanceProfileId |  |
 **metricId** | **String** | metricId |  |
 **userId** | **String** |  |  |
 **startWorkday** | **String** | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **endWorkday** | **String** | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **referenceWorkday** | **String** | Reference workday for the trend. Used to determine the associated metric definition. If not set, then the value of endWorkday is used. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
 **timeZone** | **String** | Timezone for the workday. Defaults to UTC | [optional] [default to UTC] |
{: class="table table-striped"}

### Return type

**MetricValueTrendAverage**

<a name="getGamificationScorecardsProfileMetricUsersValuesTrends"></a>

# MetricValueTrendAverage getGamificationScorecardsProfileMetricUsersValuesTrends(profileId, metricId, filterType, startWorkday, endWorkday, opts)


GET /api/v2/gamification/scorecards/profiles/{profileId}/metrics/{metricId}/users/values/trends

Average performance values trends by metric of a division or a performance profile

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

let profileId = "profileId_example"; // String | performanceProfileId
let metricId = "metricId_example"; // String | metricId
let filterType = "filterType_example"; // String | Filter type for the query request.
let startWorkday = "startWorkday_example"; // String | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let endWorkday = "endWorkday_example"; // String | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let opts = { 
  'filterId': "filterId_example", // String | ID for the filter type. Only required when filterType is Division.
  'referenceWorkday': "referenceWorkday_example", // String | Reference workday for the trend. Used to determine the associated metric definition. If not set, then the value of endWorkday is used. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'timeZone': "UTC" // String | Timezone for the workday. Defaults to UTC
};

apiInstance.getGamificationScorecardsProfileMetricUsersValuesTrends(profileId, metricId, filterType, startWorkday, endWorkday, opts)
  .then((data) => {
    console.log(`getGamificationScorecardsProfileMetricUsersValuesTrends success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationScorecardsProfileMetricUsersValuesTrends');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **profileId** | **String** | performanceProfileId |  |
 **metricId** | **String** | metricId |  |
 **filterType** | **String** | Filter type for the query request. | <br />**Values**: PerformanceProfile, Division |
 **startWorkday** | **String** | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **endWorkday** | **String** | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **filterId** | **String** | ID for the filter type. Only required when filterType is Division. | [optional]  |
 **referenceWorkday** | **String** | Reference workday for the trend. Used to determine the associated metric definition. If not set, then the value of endWorkday is used. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
 **timeZone** | **String** | Timezone for the workday. Defaults to UTC | [optional] [default to UTC] |
{: class="table table-striped"}

### Return type

**MetricValueTrendAverage**

<a name="getGamificationScorecardsProfileMetricValuesTrends"></a>

# MetricValueTrendAverage getGamificationScorecardsProfileMetricValuesTrends(profileId, metricId, startWorkday, endWorkday, opts)


GET /api/v2/gamification/scorecards/profiles/{profileId}/metrics/{metricId}/values/trends

Average performance values trends by metric of the requesting user

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

let profileId = "profileId_example"; // String | performanceProfileId
let metricId = "metricId_example"; // String | metricId
let startWorkday = "startWorkday_example"; // String | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let endWorkday = "endWorkday_example"; // String | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let opts = { 
  'filterType': "filterType_example", // String | Filter type for the query request. If not set, returns the values trends of the requesting user
  'referenceWorkday': "referenceWorkday_example", // String | Reference workday for the trend. Used to determine the associated metric definition. If not set, then the value of endWorkday is used. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'timeZone': "UTC" // String | Timezone for the workday. Defaults to UTC
};

apiInstance.getGamificationScorecardsProfileMetricValuesTrends(profileId, metricId, startWorkday, endWorkday, opts)
  .then((data) => {
    console.log(`getGamificationScorecardsProfileMetricValuesTrends success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationScorecardsProfileMetricValuesTrends');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **profileId** | **String** | performanceProfileId |  |
 **metricId** | **String** | metricId |  |
 **startWorkday** | **String** | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **endWorkday** | **String** | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **filterType** | **String** | Filter type for the query request. If not set, returns the values trends of the requesting user | [optional] <br />**Values**: PerformanceProfile, Division |
 **referenceWorkday** | **String** | Reference workday for the trend. Used to determine the associated metric definition. If not set, then the value of endWorkday is used. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
 **timeZone** | **String** | Timezone for the workday. Defaults to UTC | [optional] [default to UTC] |
{: class="table table-striped"}

### Return type

**MetricValueTrendAverage**

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
let workday = "workday_example"; // String | Target querying workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
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
let startWorkday = "startWorkday_example"; // String | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let endWorkday = "endWorkday_example"; // String | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd

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
let endWorkday = "endWorkday_example"; // String | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd

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
let startWorkday = "startWorkday_example"; // String | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let endWorkday = "endWorkday_example"; // String | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
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
let startWorkday = "startWorkday_example"; // String | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let endWorkday = "endWorkday_example"; // String | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
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
let workday = "workday_example"; // String | The target workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd

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
let workday = "workday_example"; // String | The target workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
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
let startWorkday = "startWorkday_example"; // String | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let endWorkday = "endWorkday_example"; // String | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
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

Average values of the requesting user's division or performance profile

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

let workday = "workday_example"; // String | The target workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
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

let startWorkday = "startWorkday_example"; // String | Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let endWorkday = "endWorkday_example"; // String | End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let opts = { 
  'filterType': "filterType_example", // String | Filter type for the query request. If not set, then the request is for the requesting user.
  'referenceWorkday': "referenceWorkday_example", // String | Reference workday for the trend. Used to determine the profile of the user as of this date. If not set, then the user's current profile will be used. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
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
 **referenceWorkday** | **String** | Reference workday for the trend. Used to determine the profile of the user as of this date. If not set, then the user's current profile will be used. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
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

<a name="patchEmployeeperformanceExternalmetricsDefinition"></a>

# ExternalMetricDefinition patchEmployeeperformanceExternalmetricsDefinition(metricId, body)


PATCH /api/v2/employeeperformance/externalmetrics/definitions/{metricId}

Update External Metric Definition

Requires ANY permissions:

* employeePerformance:externalMetricDefinition:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let metricId = "metricId_example"; // String | Specifies the metric definition ID
let body = {}; // Object | The External Metric Definition parameters to be updated

apiInstance.patchEmployeeperformanceExternalmetricsDefinition(metricId, body)
  .then((data) => {
    console.log(`patchEmployeeperformanceExternalmetricsDefinition success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchEmployeeperformanceExternalmetricsDefinition');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **metricId** | **String** | Specifies the metric definition ID |  |
 **body** | **Object** | The External Metric Definition parameters to be updated |  |
{: class="table table-striped"}

### Return type

**ExternalMetricDefinition**

<a name="postEmployeeperformanceExternalmetricsData"></a>

# ExternalMetricDataWriteResponse postEmployeeperformanceExternalmetricsData(opts)


POST /api/v2/employeeperformance/externalmetrics/data

Write External Metric Data

Requires ANY permissions:

* employeePerformance:externalMetricData:add

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
  'body': {} // Object | The External Metric Data to be added
};

apiInstance.postEmployeeperformanceExternalmetricsData(opts)
  .then((data) => {
    console.log(`postEmployeeperformanceExternalmetricsData success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postEmployeeperformanceExternalmetricsData');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The External Metric Data to be added | [optional]  |
{: class="table table-striped"}

### Return type

**ExternalMetricDataWriteResponse**

<a name="postEmployeeperformanceExternalmetricsDefinitions"></a>

# ExternalMetricDefinition postEmployeeperformanceExternalmetricsDefinitions(opts)


POST /api/v2/employeeperformance/externalmetrics/definitions

Create External Metric Definition

Requires ANY permissions:

* employeePerformance:externalMetricDefinition:add

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
  'body': {} // Object | The External Metric Definition to be created
};

apiInstance.postEmployeeperformanceExternalmetricsDefinitions(opts)
  .then((data) => {
    console.log(`postEmployeeperformanceExternalmetricsDefinitions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postEmployeeperformanceExternalmetricsDefinitions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The External Metric Definition to be created | [optional]  |
{: class="table table-striped"}

### Return type

**ExternalMetricDefinition**

<a name="postGamificationProfileActivate"></a>

# PerformanceProfile postGamificationProfileActivate(profileId)


POST /api/v2/gamification/profiles/{profileId}/activate

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

let profileId = "profileId_example"; // String | performanceProfileId

apiInstance.postGamificationProfileActivate(profileId)
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
 **profileId** | **String** | performanceProfileId |  |
{: class="table table-striped"}

### Return type

**PerformanceProfile**

<a name="postGamificationProfileDeactivate"></a>

# PerformanceProfile postGamificationProfileDeactivate(profileId)


POST /api/v2/gamification/profiles/{profileId}/deactivate

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

let profileId = "profileId_example"; // String | performanceProfileId

apiInstance.postGamificationProfileDeactivate(profileId)
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
 **profileId** | **String** | performanceProfileId |  |
{: class="table table-striped"}

### Return type

**PerformanceProfile**

<a name="postGamificationProfileMembers"></a>

# Assignment postGamificationProfileMembers(profileId, body)


POST /api/v2/gamification/profiles/{profileId}/members

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

let profileId = "profileId_example"; // String | Profile Id
let body = {}; // Object | assignUsers

apiInstance.postGamificationProfileMembers(profileId, body)
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
 **profileId** | **String** | Profile Id |  |
 **body** | **Object** | assignUsers |  |
{: class="table table-striped"}

### Return type

**Assignment**

<a name="postGamificationProfileMembersValidate"></a>

# AssignmentValidation postGamificationProfileMembersValidate(profileId, body)


POST /api/v2/gamification/profiles/{profileId}/members/validate

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

let profileId = "profileId_example"; // String | Profile Id
let body = {}; // Object | memberAssignments

apiInstance.postGamificationProfileMembersValidate(profileId, body)
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
 **profileId** | **String** | Profile Id |  |
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

# PerformanceProfile postGamificationProfiles(body, opts)


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
let opts = { 
  'copyMetrics': true // Boolean | Flag to copy metrics. If set to false, there will be no metrics associated with the new profile. If set to true or is absent (the default behavior), all metrics from the default profile will be copied over into the new profile.
};

apiInstance.postGamificationProfiles(body, opts)
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
 **copyMetrics** | **Boolean** | Flag to copy metrics. If set to false, there will be no metrics associated with the new profile. If set to true or is absent (the default behavior), all metrics from the default profile will be copied over into the new profile. | [optional] [default to true] |
{: class="table table-striped"}

### Return type

**PerformanceProfile**

<a name="postGamificationProfilesUserQuery"></a>

# UserProfilesInDateRange postGamificationProfilesUserQuery(userId, body)


POST /api/v2/gamification/profiles/users/{userId}/query

Query performance profiles in date range for a user

Requires ANY permissions:

* gamification:agentProfileMembership:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let userId = "userId_example"; // String | The ID of a user.
let body = {}; // Object | The date range of work day.

apiInstance.postGamificationProfilesUserQuery(userId, body)
  .then((data) => {
    console.log(`postGamificationProfilesUserQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGamificationProfilesUserQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | The ID of a user. |  |
 **body** | **Object** | The date range of work day. |  |
{: class="table table-striped"}

### Return type

**UserProfilesInDateRange**

<a name="postGamificationProfilesUsersMeQuery"></a>

# UserProfilesInDateRange postGamificationProfilesUsersMeQuery(body)


POST /api/v2/gamification/profiles/users/me/query

Query performance profiles in date range for the current user

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

let body = {}; // Object | The date range of work day.

apiInstance.postGamificationProfilesUsersMeQuery(body)
  .then((data) => {
    console.log(`postGamificationProfilesUsersMeQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGamificationProfilesUsersMeQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The date range of work day. |  |
{: class="table table-striped"}

### Return type

**UserProfilesInDateRange**

<a name="putGamificationProfile"></a>

# PerformanceProfile putGamificationProfile(profileId, opts)


PUT /api/v2/gamification/profiles/{profileId}

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

let profileId = "profileId_example"; // String | performanceProfileId
let opts = { 
  'body': {} // Object | performanceProfile
};

apiInstance.putGamificationProfile(profileId, opts)
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
 **profileId** | **String** | performanceProfileId |  |
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

