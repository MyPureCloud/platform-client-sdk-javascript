# TeamsApi

# platformClient.TeamsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteTeam**](TeamsApi#deleteTeam) | **DELETE** /api/v2/teams/{teamId} | Delete team
[**deleteTeamMembers**](TeamsApi#deleteTeamMembers) | **DELETE** /api/v2/teams/{teamId}/members | Delete team members
[**getTeam**](TeamsApi#getTeam) | **GET** /api/v2/teams/{teamId} | Get team
[**getTeamMembers**](TeamsApi#getTeamMembers) | **GET** /api/v2/teams/{teamId}/members | Get team membership
[**getTeams**](TeamsApi#getTeams) | **GET** /api/v2/teams | Get Team listing
[**patchTeam**](TeamsApi#patchTeam) | **PATCH** /api/v2/teams/{teamId} | Update team
[**postAnalyticsTeamsActivityQuery**](TeamsApi#postAnalyticsTeamsActivityQuery) | **POST** /api/v2/analytics/teams/activity/query | Query for team activity observations
[**postTeamMembers**](TeamsApi#postTeamMembers) | **POST** /api/v2/teams/{teamId}/members | Add team members
[**postTeams**](TeamsApi#postTeams) | **POST** /api/v2/teams | Create a team
[**postTeamsSearch**](TeamsApi#postTeamsSearch) | **POST** /api/v2/teams/search | Search resources.



## deleteTeam

> void deleteTeam(teamId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TeamsApi();

let teamId = "teamId_example"; // String | Team ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteTeam(teamId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteTeamMembers

> void deleteTeamMembers(teamId, id, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TeamsApi();

let teamId = "teamId_example"; // String | Team ID
let id = "id_example"; // String | Comma separated list of member ids to remove
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteTeamMembers(teamId, id, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getTeam

> Team getTeam(teamId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TeamsApi();

let teamId = "teamId_example"; // String | Team ID
let opts = { 
  'expand': "expand_example", // String | Expand the division name
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getTeam(teamId, opts)
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
 **expand** | **String** | Expand the division name | [optional] <br />**Values**: entities.division |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Team**


## getTeamMembers

> TeamMemberEntityListing getTeamMembers(teamId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TeamsApi();

let teamId = "teamId_example"; // String | Team ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'before': "before_example", // String | The cursor that points to the previous item in the complete list of teams
  'after': "after_example", // String | The cursor that points to the next item in the complete list of teams
  'expand': "expand_example", // String | Expand the name on each user
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TeamMemberEntityListing**


## getTeams

> TeamEntityListing getTeams(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TeamsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'name': "name_example", // String | Return only teams whose names start with this value (case-insensitive matching)
  'after': "after_example", // String | The cursor that points to the next item in the complete list of teams
  'before': "before_example", // String | The cursor that points to the previous item in the complete list of teams
  'expand': "expand_example", // String | Expand the division on each team
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **expand** | **String** | Expand the division on each team | [optional] <br />**Values**: entities.division |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TeamEntityListing**


## patchTeam

> Team patchTeam(teamId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TeamsApi();

let teamId = "teamId_example"; // String | Team ID
let body = {}; // Object | Team
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchTeam(teamId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Team**


## postAnalyticsTeamsActivityQuery

> TeamActivityResponse postAnalyticsTeamsActivityQuery(body, opts)


POST /api/v2/analytics/teams/activity/query

Query for team activity observations

Requires ANY permissions:

* analytics:teamObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TeamsApi();

let body = {}; // Object | query
let opts = { 
  'pageSize': 3.4, // Number | The desired page size
  'pageNumber': 3.4, // Number | The desired page number
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TeamActivityResponse**


## postTeamMembers

> TeamMemberAddListingResponse postTeamMembers(teamId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TeamsApi();

let teamId = "teamId_example"; // String | Team ID
let body = {}; // Object | TeamMembers
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postTeamMembers(teamId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TeamMemberAddListingResponse**


## postTeams

> Team postTeams(body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TeamsApi();

let body = {}; // Object | Team
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postTeams(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Team**


## postTeamsSearch

> TeamsSearchResponse postTeamsSearch(body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TeamsApi();

let body = {}; // Object | Search request options
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postTeamsSearch(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TeamsSearchResponse**


_purecloud-platform-client-v2@260.0.0_
