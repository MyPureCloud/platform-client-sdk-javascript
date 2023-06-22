---
title: TeamsApi
---
# platformClient.TeamsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteTeam**](TeamsApi.html#deleteTeam) | **DELETE** /api/v2/teams/{teamId} | Delete team
[**deleteTeamMembers**](TeamsApi.html#deleteTeamMembers) | **DELETE** /api/v2/teams/{teamId}/members | Delete team members
[**getTeam**](TeamsApi.html#getTeam) | **GET** /api/v2/teams/{teamId} | Get team
[**getTeamMembers**](TeamsApi.html#getTeamMembers) | **GET** /api/v2/teams/{teamId}/members | Get team membership
[**getTeams**](TeamsApi.html#getTeams) | **GET** /api/v2/teams | Get Team listing
[**patchTeam**](TeamsApi.html#patchTeam) | **PATCH** /api/v2/teams/{teamId} | Update team
[**postAnalyticsTeamsActivityQuery**](TeamsApi.html#postAnalyticsTeamsActivityQuery) | **POST** /api/v2/analytics/teams/activity/query | Query for team activity observations
[**postTeamMembers**](TeamsApi.html#postTeamMembers) | **POST** /api/v2/teams/{teamId}/members | Add team members
[**postTeams**](TeamsApi.html#postTeams) | **POST** /api/v2/teams | Create a team
[**postTeamsSearch**](TeamsApi.html#postTeamsSearch) | **POST** /api/v2/teams/search | Search resources.
{: class="table table-striped"}

<a name="deleteTeam"></a>

# void deleteTeam(teamId)


DELETE /api/v2/teams/{teamId}

Delete team

Requires ANY permissions:

* groups:team:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TeamsApi();

let teamId = "teamId_example"; // String | Team ID

apiInstance.deleteTeam(teamId)
  .then(() => {
    console.log('deleteTeam returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTeam');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **teamId** | **String** | Team ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteTeamMembers"></a>

# void deleteTeamMembers(teamId, id)


DELETE /api/v2/teams/{teamId}/members

Delete team members

Requires ANY permissions:

* groups:team:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TeamsApi();

let teamId = "teamId_example"; // String | Team ID
let id = "id_example"; // String | Comma separated list of member ids to remove

apiInstance.deleteTeamMembers(teamId, id)
  .then(() => {
    console.log('deleteTeamMembers returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTeamMembers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **teamId** | **String** | Team ID |  |
 **id** | **String** | Comma separated list of member ids to remove |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getTeam"></a>

# Team getTeam(teamId)


GET /api/v2/teams/{teamId}

Get team

Requires ANY permissions:

* groups:team:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TeamsApi();

let teamId = "teamId_example"; // String | Team ID

apiInstance.getTeam(teamId)
  .then((data) => {
    console.log(`getTeam success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTeam');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **teamId** | **String** | Team ID |  |
{: class="table table-striped"}

### Return type

**Team**

<a name="getTeamMembers"></a>

# TeamMemberEntityListing getTeamMembers(teamId, opts)


GET /api/v2/teams/{teamId}/members

Get team membership

Requires ANY permissions:

* groups:team:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TeamsApi();

let teamId = "teamId_example"; // String | Team ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'before': "before_example", // String | The cursor that points to the previous item in the complete list of teams
  'after': "after_example", // String | The cursor that points to the next item in the complete list of teams
  'expand': "expand_example" // String | Expand the name on each user
};

apiInstance.getTeamMembers(teamId, opts)
  .then((data) => {
    console.log(`getTeamMembers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTeamMembers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **teamId** | **String** | Team ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **before** | **String** | The cursor that points to the previous item in the complete list of teams | [optional]  |
 **after** | **String** | The cursor that points to the next item in the complete list of teams | [optional]  |
 **expand** | **String** | Expand the name on each user | [optional] <br />**Values**: entities |
{: class="table table-striped"}

### Return type

**TeamMemberEntityListing**

<a name="getTeams"></a>

# TeamEntityListing getTeams(opts)


GET /api/v2/teams

Get Team listing

Requires ANY permissions:

* groups:team:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TeamsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'name': "name_example", // String | Return only teams whose names start with this value (case-insensitive matching)
  'after': "after_example", // String | The cursor that points to the next item in the complete list of teams
  'before': "before_example", // String | The cursor that points to the previous item in the complete list of teams
  'expand': "expand_example" // String | Expand the name on each user
};

apiInstance.getTeams(opts)
  .then((data) => {
    console.log(`getTeams success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTeams');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **name** | **String** | Return only teams whose names start with this value (case-insensitive matching) | [optional]  |
 **after** | **String** | The cursor that points to the next item in the complete list of teams | [optional]  |
 **before** | **String** | The cursor that points to the previous item in the complete list of teams | [optional]  |
 **expand** | **String** | Expand the name on each user | [optional] <br />**Values**: entities.division |
{: class="table table-striped"}

### Return type

**TeamEntityListing**

<a name="patchTeam"></a>

# Team patchTeam(teamId, body)


PATCH /api/v2/teams/{teamId}

Update team

Requires ANY permissions:

* groups:team:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TeamsApi();

let teamId = "teamId_example"; // String | Team ID
let body = {}; // Object | Team

apiInstance.patchTeam(teamId, body)
  .then((data) => {
    console.log(`patchTeam success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchTeam');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **teamId** | **String** | Team ID |  |
 **body** | **Object** | Team |  |
{: class="table table-striped"}

### Return type

**Team**

<a name="postAnalyticsTeamsActivityQuery"></a>

# TeamActivityResponse postAnalyticsTeamsActivityQuery(body, opts)


POST /api/v2/analytics/teams/activity/query

Query for team activity observations

postAnalyticsTeamsActivityQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:teamObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TeamsApi();

let body = {}; // Object | query
let opts = { 
  'pageSize': 3.4, // Number | The desired page size
  'pageNumber': 3.4 // Number | The desired page number
};

apiInstance.postAnalyticsTeamsActivityQuery(body, opts)
  .then((data) => {
    console.log(`postAnalyticsTeamsActivityQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsTeamsActivityQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
 **pageSize** | **Number** | The desired page size | [optional]  |
 **pageNumber** | **Number** | The desired page number | [optional]  |
{: class="table table-striped"}

### Return type

**TeamActivityResponse**

<a name="postTeamMembers"></a>

# TeamMemberAddListingResponse postTeamMembers(teamId, body)


POST /api/v2/teams/{teamId}/members

Add team members

Requires ANY permissions:

* groups:team:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TeamsApi();

let teamId = "teamId_example"; // String | Team ID
let body = {}; // Object | TeamMembers

apiInstance.postTeamMembers(teamId, body)
  .then((data) => {
    console.log(`postTeamMembers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTeamMembers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **teamId** | **String** | Team ID |  |
 **body** | **Object** | TeamMembers |  |
{: class="table table-striped"}

### Return type

**TeamMemberAddListingResponse**

<a name="postTeams"></a>

# Team postTeams(body)


POST /api/v2/teams

Create a team

Requires ANY permissions:

* groups:team:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TeamsApi();

let body = {}; // Object | Team

apiInstance.postTeams(body)
  .then((data) => {
    console.log(`postTeams success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTeams');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Team |  |
{: class="table table-striped"}

### Return type

**Team**

<a name="postTeamsSearch"></a>

# TeamsSearchResponse postTeamsSearch(body)


POST /api/v2/teams/search

Search resources.

Requires ANY permissions:

* groups:team:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TeamsApi();

let body = {}; // Object | Search request options

apiInstance.postTeamsSearch(body)
  .then((data) => {
    console.log(`postTeamsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTeamsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
{: class="table table-striped"}

### Return type

**TeamsSearchResponse**

