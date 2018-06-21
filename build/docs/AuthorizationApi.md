---
title: AuthorizationApi
---
# platformClient.AuthorizationApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAuthorizationRole**](AuthorizationApi.html#deleteAuthorizationRole) | **DELETE** /api/v2/authorization/roles/{roleId} | Delete an organization role.
[**deleteUserRoles**](AuthorizationApi.html#deleteUserRoles) | **DELETE** /api/v2/users/{userId}/roles | Removes all the roles from the user.
[**getAuthorizationPermissions**](AuthorizationApi.html#getAuthorizationPermissions) | **GET** /api/v2/authorization/permissions | Get all permissions.
[**getAuthorizationProducts**](AuthorizationApi.html#getAuthorizationProducts) | **GET** /api/v2/authorization/products | Get the list of enabled products
[**getAuthorizationRole**](AuthorizationApi.html#getAuthorizationRole) | **GET** /api/v2/authorization/roles/{roleId} | Get a single organization role.
[**getAuthorizationRoleComparedefaultRightRoleId**](AuthorizationApi.html#getAuthorizationRoleComparedefaultRightRoleId) | **GET** /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId} | Get an org role to default role comparison comparison
[**getAuthorizationRoles**](AuthorizationApi.html#getAuthorizationRoles) | **GET** /api/v2/authorization/roles | Retrieve a list of all roles defined for the organization
[**getUserRoles**](AuthorizationApi.html#getUserRoles) | **GET** /api/v2/users/{userId}/roles | Returns a listing of roles and permissions for a user.
[**patchAuthorizationRole**](AuthorizationApi.html#patchAuthorizationRole) | **PATCH** /api/v2/authorization/roles/{roleId} | Patch Organization Role for needsUpdate Field
[**postAuthorizationRoleComparedefaultRightRoleId**](AuthorizationApi.html#postAuthorizationRoleComparedefaultRightRoleId) | **POST** /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId} | Get an unsaved org role to default role comparison
[**postAuthorizationRoles**](AuthorizationApi.html#postAuthorizationRoles) | **POST** /api/v2/authorization/roles | Create an organization role.
[**postAuthorizationRolesDefault**](AuthorizationApi.html#postAuthorizationRolesDefault) | **POST** /api/v2/authorization/roles/default | Restores all default roles
[**putAuthorizationRole**](AuthorizationApi.html#putAuthorizationRole) | **PUT** /api/v2/authorization/roles/{roleId} | Update an organization role.
[**putAuthorizationRoleUsersAdd**](AuthorizationApi.html#putAuthorizationRoleUsersAdd) | **PUT** /api/v2/authorization/roles/{roleId}/users/add | Sets the users for the role
[**putAuthorizationRoleUsersRemove**](AuthorizationApi.html#putAuthorizationRoleUsersRemove) | **PUT** /api/v2/authorization/roles/{roleId}/users/remove | Removes the users from the role
[**putAuthorizationRolesDefault**](AuthorizationApi.html#putAuthorizationRolesDefault) | **PUT** /api/v2/authorization/roles/default | Restore specified default roles
[**putUserRoles**](AuthorizationApi.html#putUserRoles) | **PUT** /api/v2/users/{userId}/roles | Sets the user&#39;s roles
{: class="table table-striped"}

<a name="deleteAuthorizationRole"></a>

# void deleteAuthorizationRole(roleId)



DELETE /api/v2/authorization/roles/{roleId}

Delete an organization role.



Requires ANY permissions: 

* admin
* role_manager
* authorization:role:delete



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var roleId = "roleId_example"; // String | Role ID

apiInstance.deleteAuthorizationRole(roleId)
  .then(function() {
    console.log('deleteAuthorizationRole returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteAuthorizationRole');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roleId** | **String** | Role ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteUserRoles"></a>

# void deleteUserRoles(userId)



DELETE /api/v2/users/{userId}/roles

Removes all the roles from the user.



Requires ANY permissions: 

* admin
* role_manager
* authorization:grant:delete



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var userId = "userId_example"; // String | User ID

apiInstance.deleteUserRoles(userId)
  .then(function() {
    console.log('deleteUserRoles returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteUserRoles');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getAuthorizationPermissions"></a>

# PermissionCollectionEntityListing getAuthorizationPermissions(opts)



GET /api/v2/authorization/permissions

Get all permissions.

Retrieve a list of all permission defined in the system.

Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getAuthorizationPermissions(opts)
  .then(function(data) {
    console.log(`getAuthorizationPermissions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAuthorizationPermissions');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**PermissionCollectionEntityListing**

<a name="getAuthorizationProducts"></a>

# OrganizationProductEntityListing getAuthorizationProducts()



GET /api/v2/authorization/products

Get the list of enabled products

Gets the list of enabled products. Some example product names are: collaborateFree, collaboratePro, communicate, and engage.

Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();
apiInstance.getAuthorizationProducts()
  .then(function(data) {
    console.log(`getAuthorizationProducts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAuthorizationProducts');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**OrganizationProductEntityListing**

<a name="getAuthorizationRole"></a>

# DomainOrganizationRole getAuthorizationRole(roleId)



GET /api/v2/authorization/roles/{roleId}

Get a single organization role.

Get the organization role specified by its ID.

Requires ANY permissions: 

* authorization:role:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var roleId = "roleId_example"; // String | Role ID

apiInstance.getAuthorizationRole(roleId)
  .then(function(data) {
    console.log(`getAuthorizationRole success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAuthorizationRole');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roleId** | **String** | Role ID |  |
{: class="table table-striped"}

### Return type

**DomainOrganizationRole**

<a name="getAuthorizationRoleComparedefaultRightRoleId"></a>

# DomainOrgRoleDifference getAuthorizationRoleComparedefaultRightRoleId(leftRoleId, rightRoleId)



GET /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}

Get an org role to default role comparison comparison

Compares any organization role to a default role id and show differences

Requires ANY permissions: 

* authorization:role:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var leftRoleId = "leftRoleId_example"; // String | Left Role ID

var rightRoleId = "rightRoleId_example"; // String | Right Role id

apiInstance.getAuthorizationRoleComparedefaultRightRoleId(leftRoleId, rightRoleId)
  .then(function(data) {
    console.log(`getAuthorizationRoleComparedefaultRightRoleId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAuthorizationRoleComparedefaultRightRoleId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **leftRoleId** | **String** | Left Role ID |  |
 **rightRoleId** | **String** | Right Role id |  |
{: class="table table-striped"}

### Return type

**DomainOrgRoleDifference**

<a name="getAuthorizationRoles"></a>

# OrganizationRoleEntityListing getAuthorizationRoles(opts)



GET /api/v2/authorization/roles

Retrieve a list of all roles defined for the organization



Requires ANY permissions: 

* authorization:role:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'name': "name_example", // String | 
  'permission': ["permission_example"], // [String] | 
  'defaultRoleId': ["defaultRoleId_example"], // [String] | 
  'userCount': true, // Boolean | 
  'id': ["id_example"] // [String] | id
};
apiInstance.getAuthorizationRoles(opts)
  .then(function(data) {
    console.log(`getAuthorizationRoles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAuthorizationRoles');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **name** | **String** |  | [optional]  |
 **permission** | **[String]** |  | [optional]  |
 **defaultRoleId** | **[String]** |  | [optional]  |
 **userCount** | **Boolean** |  | [optional] [default to true] |
 **id** | **[String]** | id | [optional]  |
{: class="table table-striped"}

### Return type

**OrganizationRoleEntityListing**

<a name="getUserRoles"></a>

# UserAuthorization getUserRoles(userId)



GET /api/v2/users/{userId}/roles

Returns a listing of roles and permissions for a user.



Requires ANY permissions: 

* authorization:grant:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var userId = "userId_example"; // String | User ID

apiInstance.getUserRoles(userId)
  .then(function(data) {
    console.log(`getUserRoles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUserRoles');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

**UserAuthorization**

<a name="patchAuthorizationRole"></a>

# DomainOrganizationRole patchAuthorizationRole(roleId, body)



PATCH /api/v2/authorization/roles/{roleId}

Patch Organization Role for needsUpdate Field

Patch Organization Role for needsUpdate Field

Requires ANY permissions: 

* admin
* role_manager
* authorization:role:edit


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyDomainOrganizationRoleExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#DomainOrganizationRoleExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

DomainOrganizationRole <a style="cursor: pointer" onclick="copyDomainOrganizationRoleExample()">Copy</a>

<div id="DomainOrganizationRoleExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "description": String, 
  "defaultRoleId": String, 
  "permissions": [String], 
  "permissionPolicies": { 
    "domain": String, 
    "entityName": String, 
    "policyName": String, 
    "policyDescription": String, 
    "actionSet": [String], 
    "namedResources": [String], 
    "allowConditions": Boolean, 
    "resourceConditionNode": { 
      "variableName": String, 
      "operator": String, 
      "operands": { 
        "user": { 
          "id": String, 
          "name": String, 
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "selfUri": String, 
        },  
        "queue": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "version": Number, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "state": String, 
          "modifiedByApp": String, 
          "createdByApp": String, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "value": String, 
        "type": String, 
      },  
      "conjunction": String, 
      "terms": { 
        "variableName": String, 
        "operator": String, 
        "operands": { 
          "user": { 
            "id": String, 
            "name": String, 
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "queue": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "description": String, 
            "version": Number, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "modifiedBy": String, 
            "createdBy": String, 
            "state": String, 
            "modifiedByApp": String, 
            "createdByApp": String, 
            "mediaSettings": { 
              "alertingTimeoutSeconds": Number, 
              "serviceLevel": { 
                "percentage": Number, 
                "durationMs": Number, 
              },  
            },  
            "bullseye": { 
              "rings": { 
                "expansionCriteria": [ExpansionCriterium], 
                "actions": Actions, 
              },  
            },  
            "acwSettings": { 
              "wrapupPrompt": String, 
              "timeoutMs": Number, 
            },  
            "skillEvaluationMethod": String, 
            "queueFlow": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "whisperPrompt": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "autoAnswerOnly": Boolean, 
            "callingPartyName": String, 
            "callingPartyNumber": String, 
            "defaultScripts": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "publishedDate": Date, 
              "versionDate": Date, 
              "startPageId": String, 
              "startPageName": String, 
              "features": Object, 
              "variables": Object, 
              "customActions": Object, 
              "pages": { 
                "id": String, 
                "name": String, 
                "versionId": String, 
                "createdDate": Date, 
                "modifiedDate": Date, 
                "rootContainer": {String: Object}, 
                "properties": {String: Object}, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "outboundEmailAddress": { 
              "domain": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "route": { 
                "id": String, 
                "name": String, 
                "pattern": String, 
                "queue": UriReference, 
                "priority": Number, 
                "skills": [UriReference], 
                "language": UriReference, 
                "fromName": String, 
                "fromEmail": String, 
                "flow": UriReference, 
                "replyEmailAddress": QueueEmailAddress, 
                "selfUri": String, 
              },  
            },  
            "memberCount": Number, 
            "selfUri": String, 
          },  
          "value": String, 
          "type": String, 
        },  
        "conjunction": String, 
        "terms": { 
          "variableName": String, 
          "operator": String, 
          "operands": { 
            "user": { 
              "id": String, 
              "name": String, 
              "chat": { 
                "jabberId": String, 
              },  
              "department": String, 
              "email": String, 
              "primaryContactInfo": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "state": String, 
              "title": String, 
              "username": String, 
              "manager": User, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "version": Number, 
              "routingStatus": { 
                "userId": String, 
                "status": String, 
                "startTime": Date, 
              },  
              "presence": { 
                "id": String, 
                "name": String, 
                "source": String, 
                "primary": Boolean, 
                "presenceDefinition": PresenceDefinition, 
                "message": String, 
                "modifiedDate": Date, 
                "selfUri": String, 
              },  
              "conversationSummary": { 
                "userId": String, 
                "call": MediaSummary, 
                "callback": MediaSummary, 
                "email": MediaSummary, 
                "message": MediaSummary, 
                "chat": MediaSummary, 
                "socialExpression": MediaSummary, 
                "video": MediaSummary, 
              },  
              "outOfOffice": { 
                "id": String, 
                "name": String, 
                "user": User, 
                "startDate": Date, 
                "endDate": Date, 
                "active": Boolean, 
                "indefinite": Boolean, 
                "selfUri": String, 
              },  
              "geolocation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "primary": Boolean, 
                "latitude": Number, 
                "longitude": Number, 
                "country": String, 
                "region": String, 
                "city": String, 
                "locations": [LocationDefinition], 
                "selfUri": String, 
              },  
              "station": { 
                "associatedStation": UserStation, 
                "effectiveStation": UserStation, 
                "defaultStation": UserStation, 
                "lastAssociatedStation": UserStation, 
              },  
              "authorization": { 
                "roles": [DomainRole], 
                "permissions": [String], 
                "permissionPolicies": [ResourcePermissionPolicy], 
              },  
              "profileSkills": [String], 
              "locations": { 
                "id": String, 
                "floorplanId": String, 
                "coordinates": {String: Number}, 
                "notes": String, 
                "locationDefinition": LocationDefinition, 
              },  
              "groups": { 
                "id": String, 
                "name": String, 
                "description": String, 
                "dateModified": Date, 
                "memberCount": Number, 
                "state": String, 
                "version": Number, 
                "type": String, 
                "images": [UserImage], 
                "addresses": [GroupContact], 
                "rulesVisible": Boolean, 
                "visibility": String, 
                "owners": [User], 
                "selfUri": String, 
              },  
              "acdAutoAnswer": Boolean, 
              "selfUri": String, 
            },  
            "queue": { 
              "id": String, 
              "name": String, 
              "division": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "description": String, 
              "version": Number, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "modifiedBy": String, 
              "createdBy": String, 
              "state": String, 
              "modifiedByApp": String, 
              "createdByApp": String, 
              "mediaSettings": { 
                "alertingTimeoutSeconds": Number, 
                "serviceLevel": ServiceLevel, 
              },  
              "bullseye": { 
                "rings": [Ring], 
              },  
              "acwSettings": { 
                "wrapupPrompt": String, 
                "timeoutMs": Number, 
              },  
              "skillEvaluationMethod": String, 
              "queueFlow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "whisperPrompt": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "autoAnswerOnly": Boolean, 
              "callingPartyName": String, 
              "callingPartyNumber": String, 
              "defaultScripts": { 
                "id": String, 
                "name": String, 
                "versionId": String, 
                "createdDate": Date, 
                "modifiedDate": Date, 
                "publishedDate": Date, 
                "versionDate": Date, 
                "startPageId": String, 
                "startPageName": String, 
                "features": Object, 
                "variables": Object, 
                "customActions": Object, 
                "pages": [Page], 
                "selfUri": String, 
              },  
              "outboundEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "memberCount": Number, 
              "selfUri": String, 
            },  
            "value": String, 
            "type": String, 
          },  
          "conjunction": String, 
          "terms": { 
            "variableName": String, 
            "operator": String, 
            "operands": { 
              "user": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
              "queue": { 
                "id": String, 
                "name": String, 
                "division": Division, 
                "description": String, 
                "version": Number, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "modifiedBy": String, 
                "createdBy": String, 
                "state": String, 
                "modifiedByApp": String, 
                "createdByApp": String, 
                "mediaSettings": {String: MediaSetting}, 
                "bullseye": Bullseye, 
                "acwSettings": AcwSettings, 
                "skillEvaluationMethod": String, 
                "queueFlow": UriReference, 
                "whisperPrompt": UriReference, 
                "autoAnswerOnly": Boolean, 
                "callingPartyName": String, 
                "callingPartyNumber": String, 
                "defaultScripts": {String: Script}, 
                "outboundEmailAddress": QueueEmailAddress, 
                "memberCount": Number, 
                "selfUri": String, 
              },  
              "value": String, 
              "type": String, 
            },  
            "conjunction": String, 
            "terms": { 
              "variableName": String, 
              "operator": String, 
              "operands": { 
                "user": User, 
                "queue": Queue, 
                "value": String, 
                "type": String, 
              },  
              "conjunction": String, 
              "terms": { 
                "variableName": String, 
                "operator": String, 
                "operands": [DomainResourceConditionValue], 
                "conjunction": String, 
                "terms": [DomainResourceConditionNode], 
              },  
            },  
          },  
        },  
      },  
    },  
  },  
  "userCount": Number, 
  "roleNeedsUpdate": Boolean, 
  "default": Boolean, 
  "base": Boolean, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var roleId = "roleId_example"; // String | Role ID

var body = {}; // Object | Organization role

apiInstance.patchAuthorizationRole(roleId, body)
  .then(function(data) {
    console.log(`patchAuthorizationRole success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchAuthorizationRole');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roleId** | **String** | Role ID |  |
 **body** | **Object** | Organization role |  |
{: class="table table-striped"}

### Return type

**DomainOrganizationRole**

<a name="postAuthorizationRoleComparedefaultRightRoleId"></a>

# DomainOrgRoleDifference postAuthorizationRoleComparedefaultRightRoleId(leftRoleId, rightRoleId, body)



POST /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}

Get an unsaved org role to default role comparison

Allows users to compare their existing roles in an unsaved state to its default role

Requires ANY permissions: 

* authorization:role:view


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyDomainOrganizationRoleExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#DomainOrganizationRoleExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

DomainOrganizationRole <a style="cursor: pointer" onclick="copyDomainOrganizationRoleExample()">Copy</a>

<div id="DomainOrganizationRoleExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "description": String, 
  "defaultRoleId": String, 
  "permissions": [String], 
  "permissionPolicies": { 
    "domain": String, 
    "entityName": String, 
    "policyName": String, 
    "policyDescription": String, 
    "actionSet": [String], 
    "namedResources": [String], 
    "allowConditions": Boolean, 
    "resourceConditionNode": { 
      "variableName": String, 
      "operator": String, 
      "operands": { 
        "user": { 
          "id": String, 
          "name": String, 
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "selfUri": String, 
        },  
        "queue": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "version": Number, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "state": String, 
          "modifiedByApp": String, 
          "createdByApp": String, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "value": String, 
        "type": String, 
      },  
      "conjunction": String, 
      "terms": { 
        "variableName": String, 
        "operator": String, 
        "operands": { 
          "user": { 
            "id": String, 
            "name": String, 
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "queue": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "description": String, 
            "version": Number, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "modifiedBy": String, 
            "createdBy": String, 
            "state": String, 
            "modifiedByApp": String, 
            "createdByApp": String, 
            "mediaSettings": { 
              "alertingTimeoutSeconds": Number, 
              "serviceLevel": { 
                "percentage": Number, 
                "durationMs": Number, 
              },  
            },  
            "bullseye": { 
              "rings": { 
                "expansionCriteria": [ExpansionCriterium], 
                "actions": Actions, 
              },  
            },  
            "acwSettings": { 
              "wrapupPrompt": String, 
              "timeoutMs": Number, 
            },  
            "skillEvaluationMethod": String, 
            "queueFlow": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "whisperPrompt": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "autoAnswerOnly": Boolean, 
            "callingPartyName": String, 
            "callingPartyNumber": String, 
            "defaultScripts": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "publishedDate": Date, 
              "versionDate": Date, 
              "startPageId": String, 
              "startPageName": String, 
              "features": Object, 
              "variables": Object, 
              "customActions": Object, 
              "pages": { 
                "id": String, 
                "name": String, 
                "versionId": String, 
                "createdDate": Date, 
                "modifiedDate": Date, 
                "rootContainer": {String: Object}, 
                "properties": {String: Object}, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "outboundEmailAddress": { 
              "domain": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "route": { 
                "id": String, 
                "name": String, 
                "pattern": String, 
                "queue": UriReference, 
                "priority": Number, 
                "skills": [UriReference], 
                "language": UriReference, 
                "fromName": String, 
                "fromEmail": String, 
                "flow": UriReference, 
                "replyEmailAddress": QueueEmailAddress, 
                "selfUri": String, 
              },  
            },  
            "memberCount": Number, 
            "selfUri": String, 
          },  
          "value": String, 
          "type": String, 
        },  
        "conjunction": String, 
        "terms": { 
          "variableName": String, 
          "operator": String, 
          "operands": { 
            "user": { 
              "id": String, 
              "name": String, 
              "chat": { 
                "jabberId": String, 
              },  
              "department": String, 
              "email": String, 
              "primaryContactInfo": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "state": String, 
              "title": String, 
              "username": String, 
              "manager": User, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "version": Number, 
              "routingStatus": { 
                "userId": String, 
                "status": String, 
                "startTime": Date, 
              },  
              "presence": { 
                "id": String, 
                "name": String, 
                "source": String, 
                "primary": Boolean, 
                "presenceDefinition": PresenceDefinition, 
                "message": String, 
                "modifiedDate": Date, 
                "selfUri": String, 
              },  
              "conversationSummary": { 
                "userId": String, 
                "call": MediaSummary, 
                "callback": MediaSummary, 
                "email": MediaSummary, 
                "message": MediaSummary, 
                "chat": MediaSummary, 
                "socialExpression": MediaSummary, 
                "video": MediaSummary, 
              },  
              "outOfOffice": { 
                "id": String, 
                "name": String, 
                "user": User, 
                "startDate": Date, 
                "endDate": Date, 
                "active": Boolean, 
                "indefinite": Boolean, 
                "selfUri": String, 
              },  
              "geolocation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "primary": Boolean, 
                "latitude": Number, 
                "longitude": Number, 
                "country": String, 
                "region": String, 
                "city": String, 
                "locations": [LocationDefinition], 
                "selfUri": String, 
              },  
              "station": { 
                "associatedStation": UserStation, 
                "effectiveStation": UserStation, 
                "defaultStation": UserStation, 
                "lastAssociatedStation": UserStation, 
              },  
              "authorization": { 
                "roles": [DomainRole], 
                "permissions": [String], 
                "permissionPolicies": [ResourcePermissionPolicy], 
              },  
              "profileSkills": [String], 
              "locations": { 
                "id": String, 
                "floorplanId": String, 
                "coordinates": {String: Number}, 
                "notes": String, 
                "locationDefinition": LocationDefinition, 
              },  
              "groups": { 
                "id": String, 
                "name": String, 
                "description": String, 
                "dateModified": Date, 
                "memberCount": Number, 
                "state": String, 
                "version": Number, 
                "type": String, 
                "images": [UserImage], 
                "addresses": [GroupContact], 
                "rulesVisible": Boolean, 
                "visibility": String, 
                "owners": [User], 
                "selfUri": String, 
              },  
              "acdAutoAnswer": Boolean, 
              "selfUri": String, 
            },  
            "queue": { 
              "id": String, 
              "name": String, 
              "division": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "description": String, 
              "version": Number, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "modifiedBy": String, 
              "createdBy": String, 
              "state": String, 
              "modifiedByApp": String, 
              "createdByApp": String, 
              "mediaSettings": { 
                "alertingTimeoutSeconds": Number, 
                "serviceLevel": ServiceLevel, 
              },  
              "bullseye": { 
                "rings": [Ring], 
              },  
              "acwSettings": { 
                "wrapupPrompt": String, 
                "timeoutMs": Number, 
              },  
              "skillEvaluationMethod": String, 
              "queueFlow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "whisperPrompt": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "autoAnswerOnly": Boolean, 
              "callingPartyName": String, 
              "callingPartyNumber": String, 
              "defaultScripts": { 
                "id": String, 
                "name": String, 
                "versionId": String, 
                "createdDate": Date, 
                "modifiedDate": Date, 
                "publishedDate": Date, 
                "versionDate": Date, 
                "startPageId": String, 
                "startPageName": String, 
                "features": Object, 
                "variables": Object, 
                "customActions": Object, 
                "pages": [Page], 
                "selfUri": String, 
              },  
              "outboundEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "memberCount": Number, 
              "selfUri": String, 
            },  
            "value": String, 
            "type": String, 
          },  
          "conjunction": String, 
          "terms": { 
            "variableName": String, 
            "operator": String, 
            "operands": { 
              "user": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
              "queue": { 
                "id": String, 
                "name": String, 
                "division": Division, 
                "description": String, 
                "version": Number, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "modifiedBy": String, 
                "createdBy": String, 
                "state": String, 
                "modifiedByApp": String, 
                "createdByApp": String, 
                "mediaSettings": {String: MediaSetting}, 
                "bullseye": Bullseye, 
                "acwSettings": AcwSettings, 
                "skillEvaluationMethod": String, 
                "queueFlow": UriReference, 
                "whisperPrompt": UriReference, 
                "autoAnswerOnly": Boolean, 
                "callingPartyName": String, 
                "callingPartyNumber": String, 
                "defaultScripts": {String: Script}, 
                "outboundEmailAddress": QueueEmailAddress, 
                "memberCount": Number, 
                "selfUri": String, 
              },  
              "value": String, 
              "type": String, 
            },  
            "conjunction": String, 
            "terms": { 
              "variableName": String, 
              "operator": String, 
              "operands": { 
                "user": User, 
                "queue": Queue, 
                "value": String, 
                "type": String, 
              },  
              "conjunction": String, 
              "terms": { 
                "variableName": String, 
                "operator": String, 
                "operands": [DomainResourceConditionValue], 
                "conjunction": String, 
                "terms": [DomainResourceConditionNode], 
              },  
            },  
          },  
        },  
      },  
    },  
  },  
  "userCount": Number, 
  "roleNeedsUpdate": Boolean, 
  "default": Boolean, 
  "base": Boolean, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var leftRoleId = "leftRoleId_example"; // String | Left Role ID

var rightRoleId = "rightRoleId_example"; // String | Right Role id

var body = {}; // Object | Organization role

apiInstance.postAuthorizationRoleComparedefaultRightRoleId(leftRoleId, rightRoleId, body)
  .then(function(data) {
    console.log(`postAuthorizationRoleComparedefaultRightRoleId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAuthorizationRoleComparedefaultRightRoleId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **leftRoleId** | **String** | Left Role ID |  |
 **rightRoleId** | **String** | Right Role id |  |
 **body** | **Object** | Organization role |  |
{: class="table table-striped"}

### Return type

**DomainOrgRoleDifference**

<a name="postAuthorizationRoles"></a>

# DomainOrganizationRole postAuthorizationRoles(body)



POST /api/v2/authorization/roles

Create an organization role.



Requires ANY permissions: 

* authorization:role:add


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyDomainOrganizationRoleCreateExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#DomainOrganizationRoleCreateExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

DomainOrganizationRoleCreate <a style="cursor: pointer" onclick="copyDomainOrganizationRoleCreateExample()">Copy</a>

<div id="DomainOrganizationRoleCreateExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "description": String, 
  "defaultRoleId": String, 
  "permissions": [String], 
  "permissionPolicies": { 
    "domain": String, 
    "entityName": String, 
    "policyName": String, 
    "policyDescription": String, 
    "actionSet": [String], 
    "namedResources": [String], 
    "allowConditions": Boolean, 
    "resourceConditionNode": { 
      "variableName": String, 
      "operator": String, 
      "operands": { 
        "user": { 
          "id": String, 
          "name": String, 
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "selfUri": String, 
        },  
        "queue": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "version": Number, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "state": String, 
          "modifiedByApp": String, 
          "createdByApp": String, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "value": String, 
        "type": String, 
      },  
      "conjunction": String, 
      "terms": { 
        "variableName": String, 
        "operator": String, 
        "operands": { 
          "user": { 
            "id": String, 
            "name": String, 
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "queue": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "description": String, 
            "version": Number, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "modifiedBy": String, 
            "createdBy": String, 
            "state": String, 
            "modifiedByApp": String, 
            "createdByApp": String, 
            "mediaSettings": { 
              "alertingTimeoutSeconds": Number, 
              "serviceLevel": { 
                "percentage": Number, 
                "durationMs": Number, 
              },  
            },  
            "bullseye": { 
              "rings": { 
                "expansionCriteria": [ExpansionCriterium], 
                "actions": Actions, 
              },  
            },  
            "acwSettings": { 
              "wrapupPrompt": String, 
              "timeoutMs": Number, 
            },  
            "skillEvaluationMethod": String, 
            "queueFlow": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "whisperPrompt": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "autoAnswerOnly": Boolean, 
            "callingPartyName": String, 
            "callingPartyNumber": String, 
            "defaultScripts": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "publishedDate": Date, 
              "versionDate": Date, 
              "startPageId": String, 
              "startPageName": String, 
              "features": Object, 
              "variables": Object, 
              "customActions": Object, 
              "pages": { 
                "id": String, 
                "name": String, 
                "versionId": String, 
                "createdDate": Date, 
                "modifiedDate": Date, 
                "rootContainer": {String: Object}, 
                "properties": {String: Object}, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "outboundEmailAddress": { 
              "domain": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "route": { 
                "id": String, 
                "name": String, 
                "pattern": String, 
                "queue": UriReference, 
                "priority": Number, 
                "skills": [UriReference], 
                "language": UriReference, 
                "fromName": String, 
                "fromEmail": String, 
                "flow": UriReference, 
                "replyEmailAddress": QueueEmailAddress, 
                "selfUri": String, 
              },  
            },  
            "memberCount": Number, 
            "selfUri": String, 
          },  
          "value": String, 
          "type": String, 
        },  
        "conjunction": String, 
        "terms": { 
          "variableName": String, 
          "operator": String, 
          "operands": { 
            "user": { 
              "id": String, 
              "name": String, 
              "chat": { 
                "jabberId": String, 
              },  
              "department": String, 
              "email": String, 
              "primaryContactInfo": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "state": String, 
              "title": String, 
              "username": String, 
              "manager": User, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "version": Number, 
              "routingStatus": { 
                "userId": String, 
                "status": String, 
                "startTime": Date, 
              },  
              "presence": { 
                "id": String, 
                "name": String, 
                "source": String, 
                "primary": Boolean, 
                "presenceDefinition": PresenceDefinition, 
                "message": String, 
                "modifiedDate": Date, 
                "selfUri": String, 
              },  
              "conversationSummary": { 
                "userId": String, 
                "call": MediaSummary, 
                "callback": MediaSummary, 
                "email": MediaSummary, 
                "message": MediaSummary, 
                "chat": MediaSummary, 
                "socialExpression": MediaSummary, 
                "video": MediaSummary, 
              },  
              "outOfOffice": { 
                "id": String, 
                "name": String, 
                "user": User, 
                "startDate": Date, 
                "endDate": Date, 
                "active": Boolean, 
                "indefinite": Boolean, 
                "selfUri": String, 
              },  
              "geolocation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "primary": Boolean, 
                "latitude": Number, 
                "longitude": Number, 
                "country": String, 
                "region": String, 
                "city": String, 
                "locations": [LocationDefinition], 
                "selfUri": String, 
              },  
              "station": { 
                "associatedStation": UserStation, 
                "effectiveStation": UserStation, 
                "defaultStation": UserStation, 
                "lastAssociatedStation": UserStation, 
              },  
              "authorization": { 
                "roles": [DomainRole], 
                "permissions": [String], 
                "permissionPolicies": [ResourcePermissionPolicy], 
              },  
              "profileSkills": [String], 
              "locations": { 
                "id": String, 
                "floorplanId": String, 
                "coordinates": {String: Number}, 
                "notes": String, 
                "locationDefinition": LocationDefinition, 
              },  
              "groups": { 
                "id": String, 
                "name": String, 
                "description": String, 
                "dateModified": Date, 
                "memberCount": Number, 
                "state": String, 
                "version": Number, 
                "type": String, 
                "images": [UserImage], 
                "addresses": [GroupContact], 
                "rulesVisible": Boolean, 
                "visibility": String, 
                "owners": [User], 
                "selfUri": String, 
              },  
              "acdAutoAnswer": Boolean, 
              "selfUri": String, 
            },  
            "queue": { 
              "id": String, 
              "name": String, 
              "division": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "description": String, 
              "version": Number, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "modifiedBy": String, 
              "createdBy": String, 
              "state": String, 
              "modifiedByApp": String, 
              "createdByApp": String, 
              "mediaSettings": { 
                "alertingTimeoutSeconds": Number, 
                "serviceLevel": ServiceLevel, 
              },  
              "bullseye": { 
                "rings": [Ring], 
              },  
              "acwSettings": { 
                "wrapupPrompt": String, 
                "timeoutMs": Number, 
              },  
              "skillEvaluationMethod": String, 
              "queueFlow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "whisperPrompt": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "autoAnswerOnly": Boolean, 
              "callingPartyName": String, 
              "callingPartyNumber": String, 
              "defaultScripts": { 
                "id": String, 
                "name": String, 
                "versionId": String, 
                "createdDate": Date, 
                "modifiedDate": Date, 
                "publishedDate": Date, 
                "versionDate": Date, 
                "startPageId": String, 
                "startPageName": String, 
                "features": Object, 
                "variables": Object, 
                "customActions": Object, 
                "pages": [Page], 
                "selfUri": String, 
              },  
              "outboundEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "memberCount": Number, 
              "selfUri": String, 
            },  
            "value": String, 
            "type": String, 
          },  
          "conjunction": String, 
          "terms": { 
            "variableName": String, 
            "operator": String, 
            "operands": { 
              "user": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
              "queue": { 
                "id": String, 
                "name": String, 
                "division": Division, 
                "description": String, 
                "version": Number, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "modifiedBy": String, 
                "createdBy": String, 
                "state": String, 
                "modifiedByApp": String, 
                "createdByApp": String, 
                "mediaSettings": {String: MediaSetting}, 
                "bullseye": Bullseye, 
                "acwSettings": AcwSettings, 
                "skillEvaluationMethod": String, 
                "queueFlow": UriReference, 
                "whisperPrompt": UriReference, 
                "autoAnswerOnly": Boolean, 
                "callingPartyName": String, 
                "callingPartyNumber": String, 
                "defaultScripts": {String: Script}, 
                "outboundEmailAddress": QueueEmailAddress, 
                "memberCount": Number, 
                "selfUri": String, 
              },  
              "value": String, 
              "type": String, 
            },  
            "conjunction": String, 
            "terms": { 
              "variableName": String, 
              "operator": String, 
              "operands": { 
                "user": User, 
                "queue": Queue, 
                "value": String, 
                "type": String, 
              },  
              "conjunction": String, 
              "terms": { 
                "variableName": String, 
                "operator": String, 
                "operands": [DomainResourceConditionValue], 
                "conjunction": String, 
                "terms": [DomainResourceConditionNode], 
              },  
            },  
          },  
        },  
      },  
    },  
  },  
  "userCount": Number, 
  "roleNeedsUpdate": Boolean, 
  "default": Boolean, 
  "base": Boolean, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var body = {}; // Object | Organization role

apiInstance.postAuthorizationRoles(body)
  .then(function(data) {
    console.log(`postAuthorizationRoles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAuthorizationRoles');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Organization role |  |
{: class="table table-striped"}

### Return type

**DomainOrganizationRole**

<a name="postAuthorizationRolesDefault"></a>

# OrganizationRoleEntityListing postAuthorizationRolesDefault(opts)



POST /api/v2/authorization/roles/default

Restores all default roles

This endpoint serves several purposes. 1. It provides the org with default roles. This is important for default roles that will be added after go-live (they can retroactively add the new default-role). Note: When not using a query param of force=true, it only adds the default roles not configured for the org; it does not overwrite roles. 2. Using the query param force=true, you can restore all default roles. Note: This does not have an effect on custom roles.

Requires ANY permissions: 

* authorization:role:edit



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var opts = { 
  'force': false // Boolean | Restore default roles
};
apiInstance.postAuthorizationRolesDefault(opts)
  .then(function(data) {
    console.log(`postAuthorizationRolesDefault success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAuthorizationRolesDefault');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **force** | **Boolean** | Restore default roles | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**OrganizationRoleEntityListing**

<a name="putAuthorizationRole"></a>

# DomainOrganizationRole putAuthorizationRole(roleId, body)



PUT /api/v2/authorization/roles/{roleId}

Update an organization role.

Update

Requires ANY permissions: 

* admin
* role_manager
* authorization:role:edit


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyDomainOrganizationRoleUpdateExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#DomainOrganizationRoleUpdateExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

DomainOrganizationRoleUpdate <a style="cursor: pointer" onclick="copyDomainOrganizationRoleUpdateExample()">Copy</a>

<div id="DomainOrganizationRoleUpdateExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "description": String, 
  "defaultRoleId": String, 
  "permissions": [String], 
  "permissionPolicies": { 
    "domain": String, 
    "entityName": String, 
    "policyName": String, 
    "policyDescription": String, 
    "actionSet": [String], 
    "namedResources": [String], 
    "allowConditions": Boolean, 
    "resourceConditionNode": { 
      "variableName": String, 
      "operator": String, 
      "operands": { 
        "user": { 
          "id": String, 
          "name": String, 
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "selfUri": String, 
        },  
        "queue": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "version": Number, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "state": String, 
          "modifiedByApp": String, 
          "createdByApp": String, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "value": String, 
        "type": String, 
      },  
      "conjunction": String, 
      "terms": { 
        "variableName": String, 
        "operator": String, 
        "operands": { 
          "user": { 
            "id": String, 
            "name": String, 
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "queue": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "description": String, 
            "version": Number, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "modifiedBy": String, 
            "createdBy": String, 
            "state": String, 
            "modifiedByApp": String, 
            "createdByApp": String, 
            "mediaSettings": { 
              "alertingTimeoutSeconds": Number, 
              "serviceLevel": { 
                "percentage": Number, 
                "durationMs": Number, 
              },  
            },  
            "bullseye": { 
              "rings": { 
                "expansionCriteria": [ExpansionCriterium], 
                "actions": Actions, 
              },  
            },  
            "acwSettings": { 
              "wrapupPrompt": String, 
              "timeoutMs": Number, 
            },  
            "skillEvaluationMethod": String, 
            "queueFlow": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "whisperPrompt": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "autoAnswerOnly": Boolean, 
            "callingPartyName": String, 
            "callingPartyNumber": String, 
            "defaultScripts": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "publishedDate": Date, 
              "versionDate": Date, 
              "startPageId": String, 
              "startPageName": String, 
              "features": Object, 
              "variables": Object, 
              "customActions": Object, 
              "pages": { 
                "id": String, 
                "name": String, 
                "versionId": String, 
                "createdDate": Date, 
                "modifiedDate": Date, 
                "rootContainer": {String: Object}, 
                "properties": {String: Object}, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "outboundEmailAddress": { 
              "domain": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "route": { 
                "id": String, 
                "name": String, 
                "pattern": String, 
                "queue": UriReference, 
                "priority": Number, 
                "skills": [UriReference], 
                "language": UriReference, 
                "fromName": String, 
                "fromEmail": String, 
                "flow": UriReference, 
                "replyEmailAddress": QueueEmailAddress, 
                "selfUri": String, 
              },  
            },  
            "memberCount": Number, 
            "selfUri": String, 
          },  
          "value": String, 
          "type": String, 
        },  
        "conjunction": String, 
        "terms": { 
          "variableName": String, 
          "operator": String, 
          "operands": { 
            "user": { 
              "id": String, 
              "name": String, 
              "chat": { 
                "jabberId": String, 
              },  
              "department": String, 
              "email": String, 
              "primaryContactInfo": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "state": String, 
              "title": String, 
              "username": String, 
              "manager": User, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "version": Number, 
              "routingStatus": { 
                "userId": String, 
                "status": String, 
                "startTime": Date, 
              },  
              "presence": { 
                "id": String, 
                "name": String, 
                "source": String, 
                "primary": Boolean, 
                "presenceDefinition": PresenceDefinition, 
                "message": String, 
                "modifiedDate": Date, 
                "selfUri": String, 
              },  
              "conversationSummary": { 
                "userId": String, 
                "call": MediaSummary, 
                "callback": MediaSummary, 
                "email": MediaSummary, 
                "message": MediaSummary, 
                "chat": MediaSummary, 
                "socialExpression": MediaSummary, 
                "video": MediaSummary, 
              },  
              "outOfOffice": { 
                "id": String, 
                "name": String, 
                "user": User, 
                "startDate": Date, 
                "endDate": Date, 
                "active": Boolean, 
                "indefinite": Boolean, 
                "selfUri": String, 
              },  
              "geolocation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "primary": Boolean, 
                "latitude": Number, 
                "longitude": Number, 
                "country": String, 
                "region": String, 
                "city": String, 
                "locations": [LocationDefinition], 
                "selfUri": String, 
              },  
              "station": { 
                "associatedStation": UserStation, 
                "effectiveStation": UserStation, 
                "defaultStation": UserStation, 
                "lastAssociatedStation": UserStation, 
              },  
              "authorization": { 
                "roles": [DomainRole], 
                "permissions": [String], 
                "permissionPolicies": [ResourcePermissionPolicy], 
              },  
              "profileSkills": [String], 
              "locations": { 
                "id": String, 
                "floorplanId": String, 
                "coordinates": {String: Number}, 
                "notes": String, 
                "locationDefinition": LocationDefinition, 
              },  
              "groups": { 
                "id": String, 
                "name": String, 
                "description": String, 
                "dateModified": Date, 
                "memberCount": Number, 
                "state": String, 
                "version": Number, 
                "type": String, 
                "images": [UserImage], 
                "addresses": [GroupContact], 
                "rulesVisible": Boolean, 
                "visibility": String, 
                "owners": [User], 
                "selfUri": String, 
              },  
              "acdAutoAnswer": Boolean, 
              "selfUri": String, 
            },  
            "queue": { 
              "id": String, 
              "name": String, 
              "division": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "description": String, 
              "version": Number, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "modifiedBy": String, 
              "createdBy": String, 
              "state": String, 
              "modifiedByApp": String, 
              "createdByApp": String, 
              "mediaSettings": { 
                "alertingTimeoutSeconds": Number, 
                "serviceLevel": ServiceLevel, 
              },  
              "bullseye": { 
                "rings": [Ring], 
              },  
              "acwSettings": { 
                "wrapupPrompt": String, 
                "timeoutMs": Number, 
              },  
              "skillEvaluationMethod": String, 
              "queueFlow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "whisperPrompt": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "autoAnswerOnly": Boolean, 
              "callingPartyName": String, 
              "callingPartyNumber": String, 
              "defaultScripts": { 
                "id": String, 
                "name": String, 
                "versionId": String, 
                "createdDate": Date, 
                "modifiedDate": Date, 
                "publishedDate": Date, 
                "versionDate": Date, 
                "startPageId": String, 
                "startPageName": String, 
                "features": Object, 
                "variables": Object, 
                "customActions": Object, 
                "pages": [Page], 
                "selfUri": String, 
              },  
              "outboundEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "memberCount": Number, 
              "selfUri": String, 
            },  
            "value": String, 
            "type": String, 
          },  
          "conjunction": String, 
          "terms": { 
            "variableName": String, 
            "operator": String, 
            "operands": { 
              "user": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
              "queue": { 
                "id": String, 
                "name": String, 
                "division": Division, 
                "description": String, 
                "version": Number, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "modifiedBy": String, 
                "createdBy": String, 
                "state": String, 
                "modifiedByApp": String, 
                "createdByApp": String, 
                "mediaSettings": {String: MediaSetting}, 
                "bullseye": Bullseye, 
                "acwSettings": AcwSettings, 
                "skillEvaluationMethod": String, 
                "queueFlow": UriReference, 
                "whisperPrompt": UriReference, 
                "autoAnswerOnly": Boolean, 
                "callingPartyName": String, 
                "callingPartyNumber": String, 
                "defaultScripts": {String: Script}, 
                "outboundEmailAddress": QueueEmailAddress, 
                "memberCount": Number, 
                "selfUri": String, 
              },  
              "value": String, 
              "type": String, 
            },  
            "conjunction": String, 
            "terms": { 
              "variableName": String, 
              "operator": String, 
              "operands": { 
                "user": User, 
                "queue": Queue, 
                "value": String, 
                "type": String, 
              },  
              "conjunction": String, 
              "terms": { 
                "variableName": String, 
                "operator": String, 
                "operands": [DomainResourceConditionValue], 
                "conjunction": String, 
                "terms": [DomainResourceConditionNode], 
              },  
            },  
          },  
        },  
      },  
    },  
  },  
  "userCount": Number, 
  "roleNeedsUpdate": Boolean, 
  "default": Boolean, 
  "base": Boolean, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var roleId = "roleId_example"; // String | Role ID

var body = {}; // Object | Organization role

apiInstance.putAuthorizationRole(roleId, body)
  .then(function(data) {
    console.log(`putAuthorizationRole success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putAuthorizationRole');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roleId** | **String** | Role ID |  |
 **body** | **Object** | Organization role |  |
{: class="table table-striped"}

### Return type

**DomainOrganizationRole**

<a name="putAuthorizationRoleUsersAdd"></a>

# **[&#39;String&#39;]** putAuthorizationRoleUsersAdd(roleId, body)



PUT /api/v2/authorization/roles/{roleId}/users/add

Sets the users for the role



Requires ANY permissions: 

* authorization:grant:add



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var roleId = "roleId_example"; // String | Role ID

var body = [{}]; // Object | List of user IDs

apiInstance.putAuthorizationRoleUsersAdd(roleId, body)
  .then(function(data) {
    console.log(`putAuthorizationRoleUsersAdd success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putAuthorizationRoleUsersAdd');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roleId** | **String** | Role ID |  |
 **body** | **Object** | List of user IDs |  |
{: class="table table-striped"}

### Return type

**[&#39;String&#39;]**

<a name="putAuthorizationRoleUsersRemove"></a>

# **[&#39;String&#39;]** putAuthorizationRoleUsersRemove(roleId, body)



PUT /api/v2/authorization/roles/{roleId}/users/remove

Removes the users from the role



Requires ANY permissions: 

* authorization:grant:delete



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var roleId = "roleId_example"; // String | Role ID

var body = [{}]; // Object | List of user IDs

apiInstance.putAuthorizationRoleUsersRemove(roleId, body)
  .then(function(data) {
    console.log(`putAuthorizationRoleUsersRemove success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putAuthorizationRoleUsersRemove');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roleId** | **String** | Role ID |  |
 **body** | **Object** | List of user IDs |  |
{: class="table table-striped"}

### Return type

**[&#39;String&#39;]**

<a name="putAuthorizationRolesDefault"></a>

# OrganizationRoleEntityListing putAuthorizationRolesDefault(body)



PUT /api/v2/authorization/roles/default

Restore specified default roles



Requires ANY permissions: 

* authorization:role:edit


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyDomainOrganizationRoleExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#DomainOrganizationRoleExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

DomainOrganizationRole <a style="cursor: pointer" onclick="copyDomainOrganizationRoleExample()">Copy</a>

<div id="DomainOrganizationRoleExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "description": String, 
  "defaultRoleId": String, 
  "permissions": [String], 
  "permissionPolicies": { 
    "domain": String, 
    "entityName": String, 
    "policyName": String, 
    "policyDescription": String, 
    "actionSet": [String], 
    "namedResources": [String], 
    "allowConditions": Boolean, 
    "resourceConditionNode": { 
      "variableName": String, 
      "operator": String, 
      "operands": { 
        "user": { 
          "id": String, 
          "name": String, 
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "selfUri": String, 
        },  
        "queue": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "version": Number, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "state": String, 
          "modifiedByApp": String, 
          "createdByApp": String, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "value": String, 
        "type": String, 
      },  
      "conjunction": String, 
      "terms": { 
        "variableName": String, 
        "operator": String, 
        "operands": { 
          "user": { 
            "id": String, 
            "name": String, 
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "queue": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "description": String, 
            "version": Number, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "modifiedBy": String, 
            "createdBy": String, 
            "state": String, 
            "modifiedByApp": String, 
            "createdByApp": String, 
            "mediaSettings": { 
              "alertingTimeoutSeconds": Number, 
              "serviceLevel": { 
                "percentage": Number, 
                "durationMs": Number, 
              },  
            },  
            "bullseye": { 
              "rings": { 
                "expansionCriteria": [ExpansionCriterium], 
                "actions": Actions, 
              },  
            },  
            "acwSettings": { 
              "wrapupPrompt": String, 
              "timeoutMs": Number, 
            },  
            "skillEvaluationMethod": String, 
            "queueFlow": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "whisperPrompt": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "autoAnswerOnly": Boolean, 
            "callingPartyName": String, 
            "callingPartyNumber": String, 
            "defaultScripts": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "publishedDate": Date, 
              "versionDate": Date, 
              "startPageId": String, 
              "startPageName": String, 
              "features": Object, 
              "variables": Object, 
              "customActions": Object, 
              "pages": { 
                "id": String, 
                "name": String, 
                "versionId": String, 
                "createdDate": Date, 
                "modifiedDate": Date, 
                "rootContainer": {String: Object}, 
                "properties": {String: Object}, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "outboundEmailAddress": { 
              "domain": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "route": { 
                "id": String, 
                "name": String, 
                "pattern": String, 
                "queue": UriReference, 
                "priority": Number, 
                "skills": [UriReference], 
                "language": UriReference, 
                "fromName": String, 
                "fromEmail": String, 
                "flow": UriReference, 
                "replyEmailAddress": QueueEmailAddress, 
                "selfUri": String, 
              },  
            },  
            "memberCount": Number, 
            "selfUri": String, 
          },  
          "value": String, 
          "type": String, 
        },  
        "conjunction": String, 
        "terms": { 
          "variableName": String, 
          "operator": String, 
          "operands": { 
            "user": { 
              "id": String, 
              "name": String, 
              "chat": { 
                "jabberId": String, 
              },  
              "department": String, 
              "email": String, 
              "primaryContactInfo": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "state": String, 
              "title": String, 
              "username": String, 
              "manager": User, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "version": Number, 
              "routingStatus": { 
                "userId": String, 
                "status": String, 
                "startTime": Date, 
              },  
              "presence": { 
                "id": String, 
                "name": String, 
                "source": String, 
                "primary": Boolean, 
                "presenceDefinition": PresenceDefinition, 
                "message": String, 
                "modifiedDate": Date, 
                "selfUri": String, 
              },  
              "conversationSummary": { 
                "userId": String, 
                "call": MediaSummary, 
                "callback": MediaSummary, 
                "email": MediaSummary, 
                "message": MediaSummary, 
                "chat": MediaSummary, 
                "socialExpression": MediaSummary, 
                "video": MediaSummary, 
              },  
              "outOfOffice": { 
                "id": String, 
                "name": String, 
                "user": User, 
                "startDate": Date, 
                "endDate": Date, 
                "active": Boolean, 
                "indefinite": Boolean, 
                "selfUri": String, 
              },  
              "geolocation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "primary": Boolean, 
                "latitude": Number, 
                "longitude": Number, 
                "country": String, 
                "region": String, 
                "city": String, 
                "locations": [LocationDefinition], 
                "selfUri": String, 
              },  
              "station": { 
                "associatedStation": UserStation, 
                "effectiveStation": UserStation, 
                "defaultStation": UserStation, 
                "lastAssociatedStation": UserStation, 
              },  
              "authorization": { 
                "roles": [DomainRole], 
                "permissions": [String], 
                "permissionPolicies": [ResourcePermissionPolicy], 
              },  
              "profileSkills": [String], 
              "locations": { 
                "id": String, 
                "floorplanId": String, 
                "coordinates": {String: Number}, 
                "notes": String, 
                "locationDefinition": LocationDefinition, 
              },  
              "groups": { 
                "id": String, 
                "name": String, 
                "description": String, 
                "dateModified": Date, 
                "memberCount": Number, 
                "state": String, 
                "version": Number, 
                "type": String, 
                "images": [UserImage], 
                "addresses": [GroupContact], 
                "rulesVisible": Boolean, 
                "visibility": String, 
                "owners": [User], 
                "selfUri": String, 
              },  
              "acdAutoAnswer": Boolean, 
              "selfUri": String, 
            },  
            "queue": { 
              "id": String, 
              "name": String, 
              "division": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "description": String, 
              "version": Number, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "modifiedBy": String, 
              "createdBy": String, 
              "state": String, 
              "modifiedByApp": String, 
              "createdByApp": String, 
              "mediaSettings": { 
                "alertingTimeoutSeconds": Number, 
                "serviceLevel": ServiceLevel, 
              },  
              "bullseye": { 
                "rings": [Ring], 
              },  
              "acwSettings": { 
                "wrapupPrompt": String, 
                "timeoutMs": Number, 
              },  
              "skillEvaluationMethod": String, 
              "queueFlow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "whisperPrompt": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "autoAnswerOnly": Boolean, 
              "callingPartyName": String, 
              "callingPartyNumber": String, 
              "defaultScripts": { 
                "id": String, 
                "name": String, 
                "versionId": String, 
                "createdDate": Date, 
                "modifiedDate": Date, 
                "publishedDate": Date, 
                "versionDate": Date, 
                "startPageId": String, 
                "startPageName": String, 
                "features": Object, 
                "variables": Object, 
                "customActions": Object, 
                "pages": [Page], 
                "selfUri": String, 
              },  
              "outboundEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "memberCount": Number, 
              "selfUri": String, 
            },  
            "value": String, 
            "type": String, 
          },  
          "conjunction": String, 
          "terms": { 
            "variableName": String, 
            "operator": String, 
            "operands": { 
              "user": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
              "queue": { 
                "id": String, 
                "name": String, 
                "division": Division, 
                "description": String, 
                "version": Number, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "modifiedBy": String, 
                "createdBy": String, 
                "state": String, 
                "modifiedByApp": String, 
                "createdByApp": String, 
                "mediaSettings": {String: MediaSetting}, 
                "bullseye": Bullseye, 
                "acwSettings": AcwSettings, 
                "skillEvaluationMethod": String, 
                "queueFlow": UriReference, 
                "whisperPrompt": UriReference, 
                "autoAnswerOnly": Boolean, 
                "callingPartyName": String, 
                "callingPartyNumber": String, 
                "defaultScripts": {String: Script}, 
                "outboundEmailAddress": QueueEmailAddress, 
                "memberCount": Number, 
                "selfUri": String, 
              },  
              "value": String, 
              "type": String, 
            },  
            "conjunction": String, 
            "terms": { 
              "variableName": String, 
              "operator": String, 
              "operands": { 
                "user": User, 
                "queue": Queue, 
                "value": String, 
                "type": String, 
              },  
              "conjunction": String, 
              "terms": { 
                "variableName": String, 
                "operator": String, 
                "operands": [DomainResourceConditionValue], 
                "conjunction": String, 
                "terms": [DomainResourceConditionNode], 
              },  
            },  
          },  
        },  
      },  
    },  
  },  
  "userCount": Number, 
  "roleNeedsUpdate": Boolean, 
  "default": Boolean, 
  "base": Boolean, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var body = [{}]; // Object | Organization roles list

apiInstance.putAuthorizationRolesDefault(body)
  .then(function(data) {
    console.log(`putAuthorizationRolesDefault success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putAuthorizationRolesDefault');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Organization roles list |  |
{: class="table table-striped"}

### Return type

**OrganizationRoleEntityListing**

<a name="putUserRoles"></a>

# UserAuthorization putUserRoles(userId, body)



PUT /api/v2/users/{userId}/roles

Sets the user&#39;s roles



Requires ANY permissions: 

* admin
* role_manager
* authorization:grant:add



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var userId = "userId_example"; // String | User ID

var body = [{}]; // Object | List of roles

apiInstance.putUserRoles(userId, body)
  .then(function(data) {
    console.log(`putUserRoles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putUserRoles');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | List of roles |  |
{: class="table table-striped"}

### Return type

**UserAuthorization**

