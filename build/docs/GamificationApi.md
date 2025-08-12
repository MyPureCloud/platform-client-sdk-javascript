# GamificationApi

# platformClient.GamificationApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteEmployeeperformanceExternalmetricsDefinition**](GamificationApi#deleteEmployeeperformanceExternalmetricsDefinition) | **DELETE** /api/v2/employeeperformance/externalmetrics/definitions/{metricId} | Delete an External Metric Definition
[**deleteGamificationContest**](GamificationApi#deleteGamificationContest) | **DELETE** /api/v2/gamification/contests/{contestId} | Delete a Contest by Id
[**getEmployeeperformanceExternalmetricsDefinition**](GamificationApi#getEmployeeperformanceExternalmetricsDefinition) | **GET** /api/v2/employeeperformance/externalmetrics/definitions/{metricId} | Get an External Metric Definition
[**getEmployeeperformanceExternalmetricsDefinitions**](GamificationApi#getEmployeeperformanceExternalmetricsDefinitions) | **GET** /api/v2/employeeperformance/externalmetrics/definitions | Get a list of External Metric Definitions of an organization, sorted by name in ascending order
[**getGamificationContest**](GamificationApi#getGamificationContest) | **GET** /api/v2/gamification/contests/{contestId} | Get a Contest by Id
[**getGamificationContestAgentsScores**](GamificationApi#getGamificationContestAgentsScores) | **GET** /api/v2/gamification/contests/{contestId}/agents/scores | Get Contest Scores (Admin)
[**getGamificationContestAgentsScoresMe**](GamificationApi#getGamificationContestAgentsScoresMe) | **GET** /api/v2/gamification/contests/{contestId}/agents/scores/me | Get Contest Scores for the requesting Agent/Supervisor
[**getGamificationContestAgentsScoresTrends**](GamificationApi#getGamificationContestAgentsScoresTrends) | **GET** /api/v2/gamification/contests/{contestId}/agents/scores/trends | Get a Contest Score Trend (Average Trend)
[**getGamificationContestAgentsScoresTrendsMe**](GamificationApi#getGamificationContestAgentsScoresTrendsMe) | **GET** /api/v2/gamification/contests/{contestId}/agents/scores/trends/me | Get a Contest Score Trend for the requesting Agent
[**getGamificationContestPrizeimage**](GamificationApi#getGamificationContestPrizeimage) | **GET** /api/v2/gamification/contests/{contestId}/prizeimages/{prizeImageId} | Get a Contest Prize Image by Id
[**getGamificationContests**](GamificationApi#getGamificationContests) | **GET** /api/v2/gamification/contests | Get a List of Contests (Admin)
[**getGamificationContestsMe**](GamificationApi#getGamificationContestsMe) | **GET** /api/v2/gamification/contests/me | Get a List of Contests (Agent/Supervisor)
[**getGamificationInsights**](GamificationApi#getGamificationInsights) | **GET** /api/v2/gamification/insights | Get insights summary
[**getGamificationInsightsDetails**](GamificationApi#getGamificationInsightsDetails) | **GET** /api/v2/gamification/insights/details | Get insights details for the current user
[**getGamificationInsightsGroupsTrends**](GamificationApi#getGamificationInsightsGroupsTrends) | **GET** /api/v2/gamification/insights/groups/trends | Get insights overall trend for the current user
[**getGamificationInsightsGroupsTrendsAll**](GamificationApi#getGamificationInsightsGroupsTrendsAll) | **GET** /api/v2/gamification/insights/groups/trends/all | Get insights overall trend
[**getGamificationInsightsMembers**](GamificationApi#getGamificationInsightsMembers) | **GET** /api/v2/gamification/insights/members | Query users in a profile during a period of time
[**getGamificationInsightsRankings**](GamificationApi#getGamificationInsightsRankings) | **GET** /api/v2/gamification/insights/rankings | Get insights rankings
[**getGamificationInsightsTrends**](GamificationApi#getGamificationInsightsTrends) | **GET** /api/v2/gamification/insights/trends | Get insights user trend for the current user
[**getGamificationInsightsUserDetails**](GamificationApi#getGamificationInsightsUserDetails) | **GET** /api/v2/gamification/insights/users/{userId}/details | Get insights details for the user
[**getGamificationInsightsUserTrends**](GamificationApi#getGamificationInsightsUserTrends) | **GET** /api/v2/gamification/insights/users/{userId}/trends | Get insights user trend for the user
[**getGamificationLeaderboard**](GamificationApi#getGamificationLeaderboard) | **GET** /api/v2/gamification/leaderboard | Leaderboard of the requesting user's division or performance profile
[**getGamificationLeaderboardAll**](GamificationApi#getGamificationLeaderboardAll) | **GET** /api/v2/gamification/leaderboard/all | Leaderboard by filter type
[**getGamificationLeaderboardAllBestpoints**](GamificationApi#getGamificationLeaderboardAllBestpoints) | **GET** /api/v2/gamification/leaderboard/all/bestpoints | Best Points by division or performance profile
[**getGamificationLeaderboardBestpoints**](GamificationApi#getGamificationLeaderboardBestpoints) | **GET** /api/v2/gamification/leaderboard/bestpoints | Best Points of the requesting user's current performance profile or division
[**getGamificationMetricdefinition**](GamificationApi#getGamificationMetricdefinition) | **GET** /api/v2/gamification/metricdefinitions/{metricDefinitionId} | Metric definition by id
[**getGamificationMetricdefinitions**](GamificationApi#getGamificationMetricdefinitions) | **GET** /api/v2/gamification/metricdefinitions | All metric definitions
[**getGamificationProfile**](GamificationApi#getGamificationProfile) | **GET** /api/v2/gamification/profiles/{profileId} | Performance profile by id
[**getGamificationProfileMembers**](GamificationApi#getGamificationProfileMembers) | **GET** /api/v2/gamification/profiles/{profileId}/members | Members of a given performance profile
[**getGamificationProfileMetric**](GamificationApi#getGamificationProfileMetric) | **GET** /api/v2/gamification/profiles/{profileId}/metrics/{metricId} | Performance profile gamified metric by id
[**getGamificationProfileMetrics**](GamificationApi#getGamificationProfileMetrics) | **GET** /api/v2/gamification/profiles/{profileId}/metrics | All gamified metrics for a given performance profile
[**getGamificationProfileMetricsObjectivedetails**](GamificationApi#getGamificationProfileMetricsObjectivedetails) | **GET** /api/v2/gamification/profiles/{profileId}/metrics/objectivedetails | All metrics for a given performance profile with objective details such as order and maxPoints
[**getGamificationProfiles**](GamificationApi#getGamificationProfiles) | **GET** /api/v2/gamification/profiles | All performance profiles
[**getGamificationProfilesUser**](GamificationApi#getGamificationProfilesUser) | **GET** /api/v2/gamification/profiles/users/{userId} | Performance profile of a user
[**getGamificationProfilesUsersMe**](GamificationApi#getGamificationProfilesUsersMe) | **GET** /api/v2/gamification/profiles/users/me | Performance profile of the requesting user
[**getGamificationScorecards**](GamificationApi#getGamificationScorecards) | **GET** /api/v2/gamification/scorecards | Workday performance metrics of the requesting user
[**getGamificationScorecardsAttendance**](GamificationApi#getGamificationScorecardsAttendance) | **GET** /api/v2/gamification/scorecards/attendance | Attendance status metrics of the requesting user
[**getGamificationScorecardsBestpoints**](GamificationApi#getGamificationScorecardsBestpoints) | **GET** /api/v2/gamification/scorecards/bestpoints | Best points of the requesting user
[**getGamificationScorecardsPointsAlltime**](GamificationApi#getGamificationScorecardsPointsAlltime) | **GET** /api/v2/gamification/scorecards/points/alltime | All-time points of the requesting user
[**getGamificationScorecardsPointsAverage**](GamificationApi#getGamificationScorecardsPointsAverage) | **GET** /api/v2/gamification/scorecards/points/average | Average points of the requesting user's division or performance profile
[**getGamificationScorecardsPointsTrends**](GamificationApi#getGamificationScorecardsPointsTrends) | **GET** /api/v2/gamification/scorecards/points/trends | Points trends of the requesting user
[**getGamificationScorecardsProfileMetricUserValuesTrends**](GamificationApi#getGamificationScorecardsProfileMetricUserValuesTrends) | **GET** /api/v2/gamification/scorecards/profiles/{profileId}/metrics/{metricId}/users/{userId}/values/trends | Average performance values trends by metric of a user
[**getGamificationScorecardsProfileMetricUsersValuesTrends**](GamificationApi#getGamificationScorecardsProfileMetricUsersValuesTrends) | **GET** /api/v2/gamification/scorecards/profiles/{profileId}/metrics/{metricId}/users/values/trends | Average performance values trends by metric of a division or a performance profile
[**getGamificationScorecardsProfileMetricValuesTrends**](GamificationApi#getGamificationScorecardsProfileMetricValuesTrends) | **GET** /api/v2/gamification/scorecards/profiles/{profileId}/metrics/{metricId}/values/trends | Average performance values trends by metric of the requesting user
[**getGamificationScorecardsUser**](GamificationApi#getGamificationScorecardsUser) | **GET** /api/v2/gamification/scorecards/users/{userId} | Workday performance metrics for a user
[**getGamificationScorecardsUserAttendance**](GamificationApi#getGamificationScorecardsUserAttendance) | **GET** /api/v2/gamification/scorecards/users/{userId}/attendance | Attendance status metrics for a user
[**getGamificationScorecardsUserBestpoints**](GamificationApi#getGamificationScorecardsUserBestpoints) | **GET** /api/v2/gamification/scorecards/users/{userId}/bestpoints | Best points of a user
[**getGamificationScorecardsUserPointsAlltime**](GamificationApi#getGamificationScorecardsUserPointsAlltime) | **GET** /api/v2/gamification/scorecards/users/{userId}/points/alltime | All-time points for a user
[**getGamificationScorecardsUserPointsTrends**](GamificationApi#getGamificationScorecardsUserPointsTrends) | **GET** /api/v2/gamification/scorecards/users/{userId}/points/trends | Points trend for a user
[**getGamificationScorecardsUserValuesTrends**](GamificationApi#getGamificationScorecardsUserValuesTrends) | **GET** /api/v2/gamification/scorecards/users/{userId}/values/trends | Values trends of a user
[**getGamificationScorecardsUsersPointsAverage**](GamificationApi#getGamificationScorecardsUsersPointsAverage) | **GET** /api/v2/gamification/scorecards/users/points/average | Workday average points by target group
[**getGamificationScorecardsUsersValuesAverage**](GamificationApi#getGamificationScorecardsUsersValuesAverage) | **GET** /api/v2/gamification/scorecards/users/values/average | Workday average values by target group
[**getGamificationScorecardsUsersValuesTrends**](GamificationApi#getGamificationScorecardsUsersValuesTrends) | **GET** /api/v2/gamification/scorecards/users/values/trends | Values trend by target group
[**getGamificationScorecardsValuesAverage**](GamificationApi#getGamificationScorecardsValuesAverage) | **GET** /api/v2/gamification/scorecards/values/average | Average values of the requesting user's division or performance profile
[**getGamificationScorecardsValuesTrends**](GamificationApi#getGamificationScorecardsValuesTrends) | **GET** /api/v2/gamification/scorecards/values/trends | Values trends of the requesting user or group
[**getGamificationStatus**](GamificationApi#getGamificationStatus) | **GET** /api/v2/gamification/status | Gamification activation status
[**getGamificationTemplate**](GamificationApi#getGamificationTemplate) | **GET** /api/v2/gamification/templates/{templateId} | Objective template by id
[**getGamificationTemplates**](GamificationApi#getGamificationTemplates) | **GET** /api/v2/gamification/templates | All objective templates
[**patchEmployeeperformanceExternalmetricsDefinition**](GamificationApi#patchEmployeeperformanceExternalmetricsDefinition) | **PATCH** /api/v2/employeeperformance/externalmetrics/definitions/{metricId} | Update External Metric Definition
[**patchGamificationContest**](GamificationApi#patchGamificationContest) | **PATCH** /api/v2/gamification/contests/{contestId} | Finalize a Contest by Id
[**postEmployeeperformanceExternalmetricsData**](GamificationApi#postEmployeeperformanceExternalmetricsData) | **POST** /api/v2/employeeperformance/externalmetrics/data | Write External Metric Data
[**postEmployeeperformanceExternalmetricsDefinitions**](GamificationApi#postEmployeeperformanceExternalmetricsDefinitions) | **POST** /api/v2/employeeperformance/externalmetrics/definitions | Create External Metric Definition
[**postGamificationContests**](GamificationApi#postGamificationContests) | **POST** /api/v2/gamification/contests | Creates a Contest
[**postGamificationContestsUploadsPrizeimages**](GamificationApi#postGamificationContestsUploadsPrizeimages) | **POST** /api/v2/gamification/contests/uploads/prizeimages | Generates pre-signed URL to upload a prize image for gamification contests
[**postGamificationProfileActivate**](GamificationApi#postGamificationProfileActivate) | **POST** /api/v2/gamification/profiles/{profileId}/activate | Activate a performance profile
[**postGamificationProfileDeactivate**](GamificationApi#postGamificationProfileDeactivate) | **POST** /api/v2/gamification/profiles/{profileId}/deactivate | Deactivate a performance profile
[**postGamificationProfileMembers**](GamificationApi#postGamificationProfileMembers) | **POST** /api/v2/gamification/profiles/{profileId}/members | Assign members to a given performance profile
[**postGamificationProfileMembersValidate**](GamificationApi#postGamificationProfileMembersValidate) | **POST** /api/v2/gamification/profiles/{profileId}/members/validate | Validate member assignment
[**postGamificationProfileMetricLink**](GamificationApi#postGamificationProfileMetricLink) | **POST** /api/v2/gamification/profiles/{sourceProfileId}/metrics/{sourceMetricId}/link | Creates a linked metric
[**postGamificationProfileMetrics**](GamificationApi#postGamificationProfileMetrics) | **POST** /api/v2/gamification/profiles/{profileId}/metrics | Creates a gamified metric with a given metric definition and metric objective under in a performance profile
[**postGamificationProfiles**](GamificationApi#postGamificationProfiles) | **POST** /api/v2/gamification/profiles | Create a new custom performance profile
[**postGamificationProfilesUserQuery**](GamificationApi#postGamificationProfilesUserQuery) | **POST** /api/v2/gamification/profiles/users/{userId}/query | Query performance profiles in date range for a user
[**postGamificationProfilesUsersMeQuery**](GamificationApi#postGamificationProfilesUsersMeQuery) | **POST** /api/v2/gamification/profiles/users/me/query | Query performance profiles in date range for the current user
[**putGamificationContest**](GamificationApi#putGamificationContest) | **PUT** /api/v2/gamification/contests/{contestId} | Update a Contest by Id
[**putGamificationProfile**](GamificationApi#putGamificationProfile) | **PUT** /api/v2/gamification/profiles/{profileId} | Updates a performance profile
[**putGamificationProfileMetric**](GamificationApi#putGamificationProfileMetric) | **PUT** /api/v2/gamification/profiles/{profileId}/metrics/{metricId} | Updates a metric in performance profile
[**putGamificationStatus**](GamificationApi#putGamificationStatus) | **PUT** /api/v2/gamification/status | Update gamification activation status



## deleteEmployeeperformanceExternalmetricsDefinition

> void deleteEmployeeperformanceExternalmetricsDefinition(metricId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteGamificationContest

> void deleteGamificationContest(contestId)


DELETE /api/v2/gamification/contests/{contestId}

Delete a Contest by Id

Requires ANY permissions:

* gamification:contest:delete
* gamification:contest:deleteAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let contestId = "contestId_example"; // String | The ID of the contest

apiInstance.deleteGamificationContest(contestId)
  .then(() => {
    console.log('deleteGamificationContest returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteGamificationContest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contestId** | **String** | The ID of the contest |  |

### Return type

void (no response body)


## getEmployeeperformanceExternalmetricsDefinition

> ExternalMetricDefinition getEmployeeperformanceExternalmetricsDefinition(metricId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ExternalMetricDefinition**


## getEmployeeperformanceExternalmetricsDefinitions

> ExternalMetricDefinitionListing getEmployeeperformanceExternalmetricsDefinitions(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ExternalMetricDefinitionListing**


## getGamificationContest

> ContestsResponse getGamificationContest(contestId)


GET /api/v2/gamification/contests/{contestId}

Get a Contest by Id

Requires ANY permissions:

* gamification:contest:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let contestId = "contestId_example"; // String | The ID of the contest

apiInstance.getGamificationContest(contestId)
  .then((data) => {
    console.log(`getGamificationContest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationContest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contestId** | **String** | The ID of the contest |  |

### Return type

**ContestsResponse**


## getGamificationContestAgentsScores

> ContestScoresAgentsPagedList getGamificationContestAgentsScores(contestId, opts)


GET /api/v2/gamification/contests/{contestId}/agents/scores

Get Contest Scores (Admin)

Requires ANY permissions:

* gamification:contest:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let contestId = "contestId_example"; // String | The ID of the contest
let opts = { 
  'pageNumber': 1, // Number | 
  'pageSize': 25, // Number | 
  'workday': "workday_example", // String | Target querying workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'returnsView': "All" // String | Desired response results
};

apiInstance.getGamificationContestAgentsScores(contestId, opts)
  .then((data) => {
    console.log(`getGamificationContestAgentsScores success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationContestAgentsScores');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contestId** | **String** | The ID of the contest |  |
 **pageNumber** | **Number** |  | [optional] [default to 1] |
 **pageSize** | **Number** |  | [optional] [default to 25] |
 **workday** | **String** | Target querying workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
 **returnsView** | **String** | Desired response results | [optional] [default to All]<br />**Values**: All, TopAndBottom |

### Return type

**ContestScoresAgentsPagedList**


## getGamificationContestAgentsScoresMe

> ContestScoresAgentsPagedList getGamificationContestAgentsScoresMe(contestId, opts)


GET /api/v2/gamification/contests/{contestId}/agents/scores/me

Get Contest Scores for the requesting Agent/Supervisor

Requires ALL permissions:

* gamification:contest:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let contestId = "contestId_example"; // String | The ID of the contest
let opts = { 
  'pageNumber': 1, // Number | 
  'pageSize': 25, // Number | 
  'workday': "workday_example", // String | Target querying workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'returnsView': "All" // String | Desired response results (Supervisor Only)
};

apiInstance.getGamificationContestAgentsScoresMe(contestId, opts)
  .then((data) => {
    console.log(`getGamificationContestAgentsScoresMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationContestAgentsScoresMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contestId** | **String** | The ID of the contest |  |
 **pageNumber** | **Number** |  | [optional] [default to 1] |
 **pageSize** | **Number** |  | [optional] [default to 25] |
 **workday** | **String** | Target querying workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
 **returnsView** | **String** | Desired response results (Supervisor Only) | [optional] [default to All]<br />**Values**: All, TopAndBottom |

### Return type

**ContestScoresAgentsPagedList**


## getGamificationContestAgentsScoresTrends

> ContestScoresGroupTrendList getGamificationContestAgentsScoresTrends(contestId)


GET /api/v2/gamification/contests/{contestId}/agents/scores/trends

Get a Contest Score Trend (Average Trend)

Requires ANY permissions:

* gamification:contest:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let contestId = "contestId_example"; // String | The ID of the contest

apiInstance.getGamificationContestAgentsScoresTrends(contestId)
  .then((data) => {
    console.log(`getGamificationContestAgentsScoresTrends success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationContestAgentsScoresTrends');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contestId** | **String** | The ID of the contest |  |

### Return type

**ContestScoresGroupTrendList**


## getGamificationContestAgentsScoresTrendsMe

> ContestScoresAgentTrendList getGamificationContestAgentsScoresTrendsMe(contestId)


GET /api/v2/gamification/contests/{contestId}/agents/scores/trends/me

Get a Contest Score Trend for the requesting Agent

Requires ANY permissions:

* gamification:contest:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let contestId = "contestId_example"; // String | The ID of the contest

apiInstance.getGamificationContestAgentsScoresTrendsMe(contestId)
  .then((data) => {
    console.log(`getGamificationContestAgentsScoresTrendsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationContestAgentsScoresTrendsMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contestId** | **String** | The ID of the contest |  |

### Return type

**ContestScoresAgentTrendList**


## getGamificationContestPrizeimage

> PrizeImages getGamificationContestPrizeimage(contestId, prizeImageId)


GET /api/v2/gamification/contests/{contestId}/prizeimages/{prizeImageId}

Get a Contest Prize Image by Id

Requires ANY permissions:

* gamification:contest:view
* gamification:contest:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let contestId = "contestId_example"; // String | The ID of the contest
let prizeImageId = "prizeImageId_example"; // String | The ID of the prize image

apiInstance.getGamificationContestPrizeimage(contestId, prizeImageId)
  .then((data) => {
    console.log(`getGamificationContestPrizeimage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationContestPrizeimage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contestId** | **String** | The ID of the contest |  |
 **prizeImageId** | **String** | The ID of the prize image |  |

### Return type

**PrizeImages**


## getGamificationContests

> GetContestsEssentialsListing getGamificationContests(opts)


GET /api/v2/gamification/contests

Get a List of Contests (Admin)

Requires ANY permissions:

* gamification:contest:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let opts = { 
  'pageNumber': 1, // Number | 
  'pageSize': 25, // Number | 
  'dateStart': "dateStart_example", // String | Start date for the query. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'dateEnd': "dateEnd_example", // String | End date for the query. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'status': ["status_example"], // [String] | 
  'sortBy': "dateStart", // String | 
  'sortOrder': "desc" // String | 
};

apiInstance.getGamificationContests(opts)
  .then((data) => {
    console.log(`getGamificationContests success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationContests');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** |  | [optional] [default to 1] |
 **pageSize** | **Number** |  | [optional] [default to 25] |
 **dateStart** | **String** | Start date for the query. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
 **dateEnd** | **String** | End date for the query. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
 **status** | **[String]** |  | [optional] <br />**Values**: Upcoming, Ongoing, Pending, RecentlyCompleted, Completed, Cancelled |
 **sortBy** | **String** |  | [optional] [default to dateStart]<br />**Values**: title, dateStart, dateEnd, dateFinalized, status, profile, participantCount |
 **sortOrder** | **String** |  | [optional] [default to desc]<br />**Values**: asc, desc |

### Return type

**GetContestsEssentialsListing**


## getGamificationContestsMe

> GetContestsEssentialsListing getGamificationContestsMe(opts)


GET /api/v2/gamification/contests/me

Get a List of Contests (Agent/Supervisor)

Requires ALL permissions:

* gamification:contest:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let opts = { 
  'pageNumber': 1, // Number | 
  'pageSize': 25, // Number | 
  'dateStart': "dateStart_example", // String | Start date for the query. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'dateEnd': "dateEnd_example", // String | End date for the query. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'status': ["status_example"], // [String] | 
  'sortBy': "dateStart", // String | 
  'sortOrder': "desc", // String | 
  'view': "participant" // String | 
};

apiInstance.getGamificationContestsMe(opts)
  .then((data) => {
    console.log(`getGamificationContestsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationContestsMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** |  | [optional] [default to 1] |
 **pageSize** | **Number** |  | [optional] [default to 25] |
 **dateStart** | **String** | Start date for the query. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
 **dateEnd** | **String** | End date for the query. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
 **status** | **[String]** |  | [optional] <br />**Values**: Upcoming, Ongoing, Pending, RecentlyCompleted, Completed, Cancelled |
 **sortBy** | **String** |  | [optional] [default to dateStart]<br />**Values**: title, dateStart, dateEnd, dateFinalized, status, profile, participantCount |
 **sortOrder** | **String** |  | [optional] [default to desc]<br />**Values**: asc, desc |
 **view** | **String** |  | [optional] [default to participant]<br />**Values**: participant, creator |

### Return type

**GetContestsEssentialsListing**


## getGamificationInsights

> InsightsSummary getGamificationInsights(filterType, filterId, granularity, comparativePeriodStartWorkday, primaryPeriodStartWorkday, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**InsightsSummary**


## getGamificationInsightsDetails

> InsightsDetails getGamificationInsightsDetails(filterType, filterId, granularity, comparativePeriodStartWorkday, primaryPeriodStartWorkday)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**InsightsDetails**


## getGamificationInsightsGroupsTrends

> InsightsTrend getGamificationInsightsGroupsTrends(filterType, filterId, granularity, comparativePeriodStartWorkday, comparativePeriodEndWorkday, primaryPeriodStartWorkday, primaryPeriodEndWorkday)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**InsightsTrend**


## getGamificationInsightsGroupsTrendsAll

> InsightsTrend getGamificationInsightsGroupsTrendsAll(filterType, filterId, granularity, comparativePeriodStartWorkday, comparativePeriodEndWorkday, primaryPeriodStartWorkday, primaryPeriodEndWorkday)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**InsightsTrend**


## getGamificationInsightsMembers

> InsightsAgents getGamificationInsightsMembers(filterType, filterId, granularity, startWorkday)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**InsightsAgents**


## getGamificationInsightsRankings

> InsightsRankings getGamificationInsightsRankings(filterType, filterId, granularity, comparativePeriodStartWorkday, primaryPeriodStartWorkday, sortKey, opts)


GET /api/v2/gamification/insights/rankings

Get insights rankings

Requires ANY permissions:

* gamification:insights:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let filterType = "filterType_example"; // String | Filter type for the query request.
let filterId = "filterId_example"; // String | ID for the filter type.
let granularity = "granularity_example"; // String | Granularity
let comparativePeriodStartWorkday = "comparativePeriodStartWorkday_example"; // String | The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let primaryPeriodStartWorkday = "primaryPeriodStartWorkday_example"; // String | The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let sortKey = "sortKey_example"; // String | Sort key
let opts = { 
  'sortMetricId': "sortMetricId_example", // String | Sort Metric Id
  'sectionSize': 3.4, // Number | The number of top and bottom users to return before ties
  'userIds': "userIds_example" // String | A list of up to 100 comma-separated user Ids
};

apiInstance.getGamificationInsightsRankings(filterType, filterId, granularity, comparativePeriodStartWorkday, primaryPeriodStartWorkday, sortKey, opts)
  .then((data) => {
    console.log(`getGamificationInsightsRankings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGamificationInsightsRankings');
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
 **sortKey** | **String** | Sort key | <br />**Values**: percentOfGoal, percentOfGoalChange, overallPercentOfGoal, overallPercentOfGoalChange, value, valueChange |
 **sortMetricId** | **String** | Sort Metric Id | [optional]  |
 **sectionSize** | **Number** | The number of top and bottom users to return before ties | [optional]  |
 **userIds** | **String** | A list of up to 100 comma-separated user Ids | [optional]  |

### Return type

**InsightsRankings**


## getGamificationInsightsTrends

> UserInsightsTrend getGamificationInsightsTrends(filterType, filterId, granularity, comparativePeriodStartWorkday, comparativePeriodEndWorkday, primaryPeriodStartWorkday, primaryPeriodEndWorkday)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserInsightsTrend**


## getGamificationInsightsUserDetails

> InsightsDetails getGamificationInsightsUserDetails(userId, filterType, filterId, granularity, comparativePeriodStartWorkday, primaryPeriodStartWorkday)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**InsightsDetails**


## getGamificationInsightsUserTrends

> UserInsightsTrend getGamificationInsightsUserTrends(userId, filterType, filterId, granularity, comparativePeriodStartWorkday, comparativePeriodEndWorkday, primaryPeriodStartWorkday, primaryPeriodEndWorkday)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserInsightsTrend**


## getGamificationLeaderboard

> Leaderboard getGamificationLeaderboard(startWorkday, endWorkday, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Leaderboard**


## getGamificationLeaderboardAll

> Leaderboard getGamificationLeaderboardAll(filterType, filterId, startWorkday, endWorkday, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Leaderboard**


## getGamificationLeaderboardAllBestpoints

> OverallBestPoints getGamificationLeaderboardAllBestpoints(filterType, filterId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**OverallBestPoints**


## getGamificationLeaderboardBestpoints

> OverallBestPoints getGamificationLeaderboardBestpoints()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getGamificationMetricdefinition

> MetricDefinition getGamificationMetricdefinition(metricDefinitionId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**MetricDefinition**


## getGamificationMetricdefinitions

> GetMetricDefinitionsResponse getGamificationMetricdefinitions()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getGamificationProfile

> PerformanceProfile getGamificationProfile(profileId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**PerformanceProfile**


## getGamificationProfileMembers

> MemberListing getGamificationProfileMembers(profileId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**MemberListing**


## getGamificationProfileMetric

> Metric getGamificationProfileMetric(profileId, metricId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Metric**


## getGamificationProfileMetrics

> GetMetricResponse getGamificationProfileMetrics(profileId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**GetMetricResponse**


## getGamificationProfileMetricsObjectivedetails

> GetMetricsResponse getGamificationProfileMetricsObjectivedetails(profileId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**GetMetricsResponse**


## getGamificationProfiles

> GetProfilesResponse getGamificationProfiles()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getGamificationProfilesUser

> PerformanceProfile getGamificationProfilesUser(userId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**PerformanceProfile**


## getGamificationProfilesUsersMe

> PerformanceProfile getGamificationProfilesUsersMe(opts)


GET /api/v2/gamification/profiles/users/me

Performance profile of the requesting user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**PerformanceProfile**


## getGamificationScorecards

> WorkdayMetricListing getGamificationScorecards(workday, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkdayMetricListing**


## getGamificationScorecardsAttendance

> AttendanceStatusListing getGamificationScorecardsAttendance(startWorkday, endWorkday)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AttendanceStatusListing**


## getGamificationScorecardsBestpoints

> UserBestPoints getGamificationScorecardsBestpoints()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getGamificationScorecardsPointsAlltime

> AllTimePoints getGamificationScorecardsPointsAlltime(endWorkday)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AllTimePoints**


## getGamificationScorecardsPointsAverage

> SingleWorkdayAveragePoints getGamificationScorecardsPointsAverage(workday)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SingleWorkdayAveragePoints**


## getGamificationScorecardsPointsTrends

> WorkdayPointsTrend getGamificationScorecardsPointsTrends(startWorkday, endWorkday, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkdayPointsTrend**


## getGamificationScorecardsProfileMetricUserValuesTrends

> MetricValueTrendAverage getGamificationScorecardsProfileMetricUserValuesTrends(profileId, metricId, userId, startWorkday, endWorkday, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**MetricValueTrendAverage**


## getGamificationScorecardsProfileMetricUsersValuesTrends

> MetricValueTrendAverage getGamificationScorecardsProfileMetricUsersValuesTrends(profileId, metricId, filterType, startWorkday, endWorkday, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**MetricValueTrendAverage**


## getGamificationScorecardsProfileMetricValuesTrends

> MetricValueTrendAverage getGamificationScorecardsProfileMetricValuesTrends(profileId, metricId, startWorkday, endWorkday, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**MetricValueTrendAverage**


## getGamificationScorecardsUser

> WorkdayMetricListing getGamificationScorecardsUser(userId, workday, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkdayMetricListing**


## getGamificationScorecardsUserAttendance

> AttendanceStatusListing getGamificationScorecardsUserAttendance(userId, startWorkday, endWorkday)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AttendanceStatusListing**


## getGamificationScorecardsUserBestpoints

> UserBestPoints getGamificationScorecardsUserBestpoints(userId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserBestPoints**


## getGamificationScorecardsUserPointsAlltime

> AllTimePoints getGamificationScorecardsUserPointsAlltime(userId, endWorkday)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AllTimePoints**


## getGamificationScorecardsUserPointsTrends

> WorkdayPointsTrend getGamificationScorecardsUserPointsTrends(userId, startWorkday, endWorkday, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkdayPointsTrend**


## getGamificationScorecardsUserValuesTrends

> WorkdayValuesTrend getGamificationScorecardsUserValuesTrends(userId, startWorkday, endWorkday, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkdayValuesTrend**


## getGamificationScorecardsUsersPointsAverage

> SingleWorkdayAveragePoints getGamificationScorecardsUsersPointsAverage(filterType, filterId, workday)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SingleWorkdayAveragePoints**


## getGamificationScorecardsUsersValuesAverage

> SingleWorkdayAverageValues getGamificationScorecardsUsersValuesAverage(filterType, filterId, workday, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SingleWorkdayAverageValues**


## getGamificationScorecardsUsersValuesTrends

> WorkdayValuesTrend getGamificationScorecardsUsersValuesTrends(filterType, filterId, startWorkday, endWorkday, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkdayValuesTrend**


## getGamificationScorecardsValuesAverage

> SingleWorkdayAverageValues getGamificationScorecardsValuesAverage(workday, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SingleWorkdayAverageValues**


## getGamificationScorecardsValuesTrends

> WorkdayValuesTrend getGamificationScorecardsValuesTrends(startWorkday, endWorkday, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkdayValuesTrend**


## getGamificationStatus

> GamificationStatus getGamificationStatus()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getGamificationTemplate

> ObjectiveTemplate getGamificationTemplate(templateId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ObjectiveTemplate**


## getGamificationTemplates

> GetTemplatesResponse getGamificationTemplates()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## patchEmployeeperformanceExternalmetricsDefinition

> ExternalMetricDefinition patchEmployeeperformanceExternalmetricsDefinition(metricId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ExternalMetricDefinition**


## patchGamificationContest

> ContestsResponse patchGamificationContest(contestId, body)


PATCH /api/v2/gamification/contests/{contestId}

Finalize a Contest by Id

Requires ANY permissions:

* gamification:contestStatus:edit
* gamification:contestStatus:editAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let contestId = "contestId_example"; // String | The ID of the contest
let body = {}; // Object | Finalize Contest

apiInstance.patchGamificationContest(contestId, body)
  .then((data) => {
    console.log(`patchGamificationContest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchGamificationContest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contestId** | **String** | The ID of the contest |  |
 **body** | **Object** | Finalize Contest |  |

### Return type

**ContestsResponse**


## postEmployeeperformanceExternalmetricsData

> ExternalMetricDataWriteResponse postEmployeeperformanceExternalmetricsData(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ExternalMetricDataWriteResponse**


## postEmployeeperformanceExternalmetricsDefinitions

> ExternalMetricDefinition postEmployeeperformanceExternalmetricsDefinitions(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ExternalMetricDefinition**


## postGamificationContests

> ContestsResponse postGamificationContests(body)


POST /api/v2/gamification/contests

Creates a Contest

Requires ANY permissions:

* gamification:contest:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let body = {}; // Object | Create Contest

apiInstance.postGamificationContests(body)
  .then((data) => {
    console.log(`postGamificationContests success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGamificationContests');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Create Contest |  |

### Return type

**ContestsResponse**


## postGamificationContestsUploadsPrizeimages

> UploadUrlResponse postGamificationContestsUploadsPrizeimages(body)


POST /api/v2/gamification/contests/uploads/prizeimages

Generates pre-signed URL to upload a prize image for gamification contests

Requires ALL permissions:

* gamification:contestPrizeImage:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let body = {}; // Object | query

apiInstance.postGamificationContestsUploadsPrizeimages(body)
  .then((data) => {
    console.log(`postGamificationContestsUploadsPrizeimages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGamificationContestsUploadsPrizeimages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**UploadUrlResponse**


## postGamificationProfileActivate

> PerformanceProfile postGamificationProfileActivate(profileId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**PerformanceProfile**


## postGamificationProfileDeactivate

> PerformanceProfile postGamificationProfileDeactivate(profileId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**PerformanceProfile**


## postGamificationProfileMembers

> Assignment postGamificationProfileMembers(profileId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Assignment**


## postGamificationProfileMembersValidate

> AssignmentValidation postGamificationProfileMembersValidate(profileId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AssignmentValidation**


## postGamificationProfileMetricLink

> Metric postGamificationProfileMetricLink(sourceProfileId, sourceMetricId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Metric**


## postGamificationProfileMetrics

> Metric postGamificationProfileMetrics(profileId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Metric**


## postGamificationProfiles

> PerformanceProfile postGamificationProfiles(body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**PerformanceProfile**


## postGamificationProfilesUserQuery

> UserProfilesInDateRange postGamificationProfilesUserQuery(userId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserProfilesInDateRange**


## postGamificationProfilesUsersMeQuery

> UserProfilesInDateRange postGamificationProfilesUsersMeQuery(body)


POST /api/v2/gamification/profiles/users/me/query

Query performance profiles in date range for the current user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserProfilesInDateRange**


## putGamificationContest

> ContestsResponse putGamificationContest(contestId, body)


PUT /api/v2/gamification/contests/{contestId}

Update a Contest by Id

Requires ANY permissions:

* gamification:contest:edit
* gamification:contest:editAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GamificationApi();

let contestId = "contestId_example"; // String | The ID of the contest
let body = {}; // Object | Contest

apiInstance.putGamificationContest(contestId, body)
  .then((data) => {
    console.log(`putGamificationContest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putGamificationContest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contestId** | **String** | The ID of the contest |  |
 **body** | **Object** | Contest |  |

### Return type

**ContestsResponse**


## putGamificationProfile

> PerformanceProfile putGamificationProfile(profileId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**PerformanceProfile**


## putGamificationProfileMetric

> Metric putGamificationProfileMetric(profileId, metricId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Metric**


## putGamificationStatus

> GamificationStatus putGamificationStatus(status)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**GamificationStatus**


_purecloud-platform-client-v2@229.1.0_
