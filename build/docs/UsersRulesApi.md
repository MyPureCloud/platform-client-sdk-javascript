# UsersRulesApi

# platformClient.UsersRulesApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteUsersRule**](UsersRulesApi#deleteUsersRule) | **DELETE** /api/v2/users/rules/{ruleId} | Delete an existing users rule
[**getUsersRule**](UsersRulesApi#getUsersRule) | **GET** /api/v2/users/rules/{ruleId} | Get a users rule
[**getUsersRuleDependentTypeId**](UsersRulesApi#getUsersRuleDependentTypeId) | **GET** /api/v2/users/rules/{ruleId}/dependents/{ruleType}/{typeId} | Get dependent of a users rule
[**getUsersRuleDependents**](UsersRulesApi#getUsersRuleDependents) | **GET** /api/v2/users/rules/{ruleId}/dependents | Get dependents for a users rule
[**getUsersRules**](UsersRulesApi#getUsersRules) | **GET** /api/v2/users/rules | Get the list of users rules
[**getUsersRulesSetting**](UsersRulesApi#getUsersRulesSetting) | **GET** /api/v2/users/rules/settings/{ruleType} | Get the settings for a specific users rule type
[**patchUsersRule**](UsersRulesApi#patchUsersRule) | **PATCH** /api/v2/users/rules/{ruleId} | Update an existing users rule
[**postUsersRules**](UsersRulesApi#postUsersRules) | **POST** /api/v2/users/rules | Create a new rule
[**postUsersRulesQuery**](UsersRulesApi#postUsersRulesQuery) | **POST** /api/v2/users/rules/query | Query the result of a users rule



## deleteUsersRule

> void deleteUsersRule(ruleId)


DELETE /api/v2/users/rules/{ruleId}

Delete an existing users rule

deleteUsersRule is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* users:rules:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersRulesApi();

let ruleId = "ruleId_example"; // String | The id of the rule

apiInstance.deleteUsersRule(ruleId)
  .then(() => {
    console.log('deleteUsersRule returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteUsersRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleId** | **String** | The id of the rule |  |

### Return type

void (no response body)


## getUsersRule

> UsersRulesRule getUsersRule(ruleId)


GET /api/v2/users/rules/{ruleId}

Get a users rule

getUsersRule is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* users:rules:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersRulesApi();

let ruleId = "ruleId_example"; // String | The ID of the rule to retrieve

apiInstance.getUsersRule(ruleId)
  .then((data) => {
    console.log(`getUsersRule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsersRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleId** | **String** | The ID of the rule to retrieve |  |

### Return type

**UsersRulesRule**


## getUsersRuleDependentTypeId

> UsersRulesDependent getUsersRuleDependentTypeId(ruleId, ruleType, typeId)


GET /api/v2/users/rules/{ruleId}/dependents/{ruleType}/{typeId}

Get dependent of a users rule

getUsersRuleDependentTypeId is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* users:ruleDependents:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersRulesApi();

let ruleId = "ruleId_example"; // String | The ID of the rule for which to retrieve dependents
let ruleType = "ruleType_example"; // String | The type of the dependent
let typeId = "typeId_example"; // String | The type ID of the dependent

apiInstance.getUsersRuleDependentTypeId(ruleId, ruleType, typeId)
  .then((data) => {
    console.log(`getUsersRuleDependentTypeId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsersRuleDependentTypeId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleId** | **String** | The ID of the rule for which to retrieve dependents |  |
 **ruleType** | **String** | The type of the dependent | <br />**Values**: learning |
 **typeId** | **String** | The type ID of the dependent |  |

### Return type

**UsersRulesDependent**


## getUsersRuleDependents

> UsersRulesDependentList getUsersRuleDependents(ruleId, opts)


GET /api/v2/users/rules/{ruleId}/dependents

Get dependents for a users rule

getUsersRuleDependents is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* users:ruleDependents:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersRulesApi();

let ruleId = "ruleId_example"; // String | The ID of the rule for which to retrieve dependents
let opts = { 
  'pageSize': 25, // Number | Number of results per page
  'pageNumber': 1, // Number | Page number
  'sortOrder': "descending" // String | Sort order for dependents (by last run date, then created date)
};

apiInstance.getUsersRuleDependents(ruleId, opts)
  .then((data) => {
    console.log(`getUsersRuleDependents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsersRuleDependents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleId** | **String** | The ID of the rule for which to retrieve dependents |  |
 **pageSize** | **Number** | Number of results per page | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Sort order for dependents (by last run date, then created date) | [optional] [default to descending]<br />**Values**: ascending, descending |

### Return type

**UsersRulesDependentList**


## getUsersRules

> UsersRulesRuleList getUsersRules(types, opts)


GET /api/v2/users/rules

Get the list of users rules

getUsersRules is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* users:rules:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersRulesApi();

let types = ["types_example"]; // [String] | The types of the rule
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Number of results per page
  'expand': ["expand_example"], // [String] | Fields to expand in response
  'searchTerm': "searchTerm_example", // String | a search term for finding a rule by name
  'sortOrder': "ascending" // String | sort rules by name, ascending, descending
};

apiInstance.getUsersRules(types, opts)
  .then((data) => {
    console.log(`getUsersRules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsersRules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **types** | **[String]** | The types of the rule | <br />**Values**: Learning |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Number of results per page | [optional] [default to 25] |
 **expand** | **[String]** | Fields to expand in response | [optional] <br />**Values**: criteria |
 **searchTerm** | **String** | a search term for finding a rule by name | [optional]  |
 **sortOrder** | **String** | sort rules by name, ascending, descending | [optional] [default to ascending]<br />**Values**: ascending, descending |

### Return type

**UsersRulesRuleList**


## getUsersRulesSetting

> UsersRulesRuleSettings getUsersRulesSetting(ruleType)


GET /api/v2/users/rules/settings/{ruleType}

Get the settings for a specific users rule type

getUsersRulesSetting is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* users:rules:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersRulesApi();

let ruleType = "ruleType_example"; // String | The type of the rule

apiInstance.getUsersRulesSetting(ruleType)
  .then((data) => {
    console.log(`getUsersRulesSetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsersRulesSetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleType** | **String** | The type of the rule | <br />**Values**: Learning |

### Return type

**UsersRulesRuleSettings**


## patchUsersRule

> UsersRulesRule patchUsersRule(ruleId, body)


PATCH /api/v2/users/rules/{ruleId}

Update an existing users rule

This will update an existing users rule with the specified fields.

patchUsersRule is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* users:rules:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersRulesApi();

let ruleId = "ruleId_example"; // String | The ID of the rule to update
let body = {}; // Object | updateRuleRequest

apiInstance.patchUsersRule(ruleId, body)
  .then((data) => {
    console.log(`patchUsersRule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchUsersRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleId** | **String** | The ID of the rule to update |  |
 **body** | **Object** | updateRuleRequest |  |

### Return type

**UsersRulesRule**


## postUsersRules

> UsersRulesRule postUsersRules(body)


POST /api/v2/users/rules

Create a new rule

This will create a new rule with the specified fields.

postUsersRules is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* users:rules:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersRulesApi();

let body = {}; // Object | usersRulesCreateRuleRequest

apiInstance.postUsersRules(body)
  .then((data) => {
    console.log(`postUsersRules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUsersRules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | usersRulesCreateRuleRequest |  |

### Return type

**UsersRulesRule**


## postUsersRulesQuery

> UsersRulesQueryResponse postUsersRulesQuery(body, opts)


POST /api/v2/users/rules/query

Query the result of a users rule

This will query the result of a rule.

postUsersRulesQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* users:ruleUsers:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersRulesApi();

let body = {}; // Object | usersRulesQueryRuleRequest
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Number of results per page
};

apiInstance.postUsersRulesQuery(body, opts)
  .then((data) => {
    console.log(`postUsersRulesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUsersRulesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | usersRulesQueryRuleRequest |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Number of results per page | [optional] [default to 25] |

### Return type

**UsersRulesQueryResponse**


_purecloud-platform-client-v2@237.0.0_
