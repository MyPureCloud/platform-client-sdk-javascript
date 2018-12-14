---
title: ObjectsApi
---
# platformClient.ObjectsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAuthorizationDivision**](ObjectsApi.html#deleteAuthorizationDivision) | **DELETE** /api/v2/authorization/divisions/{divisionId} | Delete a division.
[**getAuthorizationDivision**](ObjectsApi.html#getAuthorizationDivision) | **GET** /api/v2/authorization/divisions/{divisionId} | Returns an authorization division.
[**getAuthorizationDivisions**](ObjectsApi.html#getAuthorizationDivisions) | **GET** /api/v2/authorization/divisions | Retrieve a list of all divisions defined for the organization
[**getAuthorizationDivisionsHome**](ObjectsApi.html#getAuthorizationDivisionsHome) | **GET** /api/v2/authorization/divisions/home | Retrieve the home division for the organization.
[**getAuthorizationDivisionsLimit**](ObjectsApi.html#getAuthorizationDivisionsLimit) | **GET** /api/v2/authorization/divisions/limit | Returns the maximum allowed number of divisions.
[**postAuthorizationDivisionObject**](ObjectsApi.html#postAuthorizationDivisionObject) | **POST** /api/v2/authorization/divisions/{divisionId}/objects/{objectType} | Assign a list of objects to a division
[**postAuthorizationDivisions**](ObjectsApi.html#postAuthorizationDivisions) | **POST** /api/v2/authorization/divisions | Create a division.
[**putAuthorizationDivision**](ObjectsApi.html#putAuthorizationDivision) | **PUT** /api/v2/authorization/divisions/{divisionId} | Update a division.
{: class="table table-striped"}

<a name="deleteAuthorizationDivision"></a>

# void deleteAuthorizationDivision(divisionId)



DELETE /api/v2/authorization/divisions/{divisionId}

Delete a division.



Requires ANY permissions: 

* authorization:division:delete



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ObjectsApi();

var divisionId = "divisionId_example"; // String | Division ID

apiInstance.deleteAuthorizationDivision(divisionId)
  .then(function() {
    console.log('deleteAuthorizationDivision returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteAuthorizationDivision');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **divisionId** | **String** | Division ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getAuthorizationDivision"></a>

# AuthzDivision getAuthorizationDivision(divisionId, opts)



GET /api/v2/authorization/divisions/{divisionId}

Returns an authorization division.



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ObjectsApi();

var divisionId = "divisionId_example"; // String | Division ID

var opts = { 
  'objectCount': false // Boolean | Get count of objects in this division, grouped by type
};
apiInstance.getAuthorizationDivision(divisionId, opts)
  .then(function(data) {
    console.log(`getAuthorizationDivision success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAuthorizationDivision');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **divisionId** | **String** | Division ID |  |
 **objectCount** | **Boolean** | Get count of objects in this division, grouped by type | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**AuthzDivision**

<a name="getAuthorizationDivisions"></a>

# AuthzDivisionEntityListing getAuthorizationDivisions(opts)



GET /api/v2/authorization/divisions

Retrieve a list of all divisions defined for the organization

Request specific divisions by id using a query param \&quot;id\&quot;, e.g.  ?id=5f777167-63be-4c24-ad41-374155d9e28b&amp;id=72e9fb25-c484-488d-9312-7acba82435b3

Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ObjectsApi();

var opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'objectCount': false, // Boolean | Include the count of objects contained in the division
  'id': ["id_example"], // [String] | Optionally request specific divisions by their IDs
  'name': "name_example" // String | Search term to filter by division name
};
apiInstance.getAuthorizationDivisions(opts)
  .then(function(data) {
    console.log(`getAuthorizationDivisions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAuthorizationDivisions');
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
 **objectCount** | **Boolean** | Include the count of objects contained in the division | [optional] [default to false] |
 **id** | **[String]** | Optionally request specific divisions by their IDs | [optional]  |
 **name** | **String** | Search term to filter by division name | [optional]  |
{: class="table table-striped"}

### Return type

**AuthzDivisionEntityListing**

<a name="getAuthorizationDivisionsHome"></a>

# AuthzDivision getAuthorizationDivisionsHome()



GET /api/v2/authorization/divisions/home

Retrieve the home division for the organization.

Will not include object counts.

Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ObjectsApi();
apiInstance.getAuthorizationDivisionsHome()
  .then(function(data) {
    console.log(`getAuthorizationDivisionsHome success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAuthorizationDivisionsHome');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**AuthzDivision**

<a name="getAuthorizationDivisionsLimit"></a>

# **&#39;Number&#39;** getAuthorizationDivisionsLimit()



GET /api/v2/authorization/divisions/limit

Returns the maximum allowed number of divisions.



Requires ANY permissions: 

* authorization:division:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ObjectsApi();
apiInstance.getAuthorizationDivisionsLimit()
  .then(function(data) {
    console.log(`getAuthorizationDivisionsLimit success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAuthorizationDivisionsLimit');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**&#39;Number&#39;**

<a name="postAuthorizationDivisionObject"></a>

# void postAuthorizationDivisionObject(divisionId, objectType, body)



POST /api/v2/authorization/divisions/{divisionId}/objects/{objectType}

Assign a list of objects to a division

Set the division of a specified list of objects. The objects must all be of the same type, one of:  CAMPAIGN, MANAGEMENTUNIT, FLOW, QUEUE, or USER.  The body of the request is a list of object IDs, which are expected to be  GUIDs, e.g. [\&quot;206ce31f-61ec-40ed-a8b1-be6f06303998\&quot;,\&quot;250a754e-f5e4-4f51-800f-a92f09d3bf8c\&quot;]

Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ObjectsApi();

var divisionId = "divisionId_example"; // String | Division ID

var objectType = "objectType_example"; // String | The type of the objects. Must be one of the valid object types

var body = [{}]; // Object | Object Id List

apiInstance.postAuthorizationDivisionObject(divisionId, objectType, body)
  .then(function() {
    console.log('postAuthorizationDivisionObject returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAuthorizationDivisionObject');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **divisionId** | **String** | Division ID |  |
 **objectType** | **String** | The type of the objects. Must be one of the valid object types | <br />**Values**: QUEUE, CAMPAIGN, CONTACTLIST, DNCLIST, MANAGEMENTUNIT, FLOW, USER |
 **body** | **Object** | Object Id List |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postAuthorizationDivisions"></a>

# AuthzDivision postAuthorizationDivisions(body)



POST /api/v2/authorization/divisions

Create a division.



Requires ALL permissions: 

* authorization:division:add
* authorization:grant:add


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyAuthzDivisionExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#AuthzDivisionExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

AuthzDivision <a style="cursor: pointer" onclick="copyAuthzDivisionExample()">Copy</a>

<div id="AuthzDivisionExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "description": String, 
  "homeDivision": Boolean, 
  "objectCounts": {String: Number}, 
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

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ObjectsApi();

var body = {}; // Object | Division

apiInstance.postAuthorizationDivisions(body)
  .then(function(data) {
    console.log(`postAuthorizationDivisions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAuthorizationDivisions');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Division |  |
{: class="table table-striped"}

### Return type

**AuthzDivision**

<a name="putAuthorizationDivision"></a>

# AuthzDivision putAuthorizationDivision(divisionId, body)



PUT /api/v2/authorization/divisions/{divisionId}

Update a division.



Requires ANY permissions: 

* authorization:division:edit


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyAuthzDivisionExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#AuthzDivisionExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

AuthzDivision <a style="cursor: pointer" onclick="copyAuthzDivisionExample()">Copy</a>

<div id="AuthzDivisionExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "description": String, 
  "homeDivision": Boolean, 
  "objectCounts": {String: Number}, 
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

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ObjectsApi();

var divisionId = "divisionId_example"; // String | Division ID

var body = {}; // Object | Updated division data

apiInstance.putAuthorizationDivision(divisionId, body)
  .then(function(data) {
    console.log(`putAuthorizationDivision success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putAuthorizationDivision');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **divisionId** | **String** | Division ID |  |
 **body** | **Object** | Updated division data |  |
{: class="table table-striped"}

### Return type

**AuthzDivision**

