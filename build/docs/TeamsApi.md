---
title: TeamsApi
---
# platformClient.TeamsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteTeam**](TeamsApi.html#deleteTeam) | **DELETE** /api/v2/teams/{teamId} | Delete team
[**getTeam**](TeamsApi.html#getTeam) | **GET** /api/v2/teams/{teamId} | Get team
[**getTeams**](TeamsApi.html#getTeams) | **GET** /api/v2/teams | Get Team listing
[**patchTeam**](TeamsApi.html#patchTeam) | **PATCH** /api/v2/teams/{teamId} | Update team
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

