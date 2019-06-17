---
title: SCIMApi
---
# platformClient.SCIMApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteScimUser**](SCIMApi.html#deleteScimUser) | **DELETE** /api/v2/scim/users/{userId} | Soft delete user with specified ID
[**deleteScimV2User**](SCIMApi.html#deleteScimV2User) | **DELETE** /api/v2/scim/v2/users/{userId} | Soft delete user with specified ID
[**getScimGroup**](SCIMApi.html#getScimGroup) | **GET** /api/v2/scim/groups/{groupId} | Return Group with specified ID
[**getScimGroups**](SCIMApi.html#getScimGroups) | **GET** /api/v2/scim/groups | Query Groups
[**getScimUser**](SCIMApi.html#getScimUser) | **GET** /api/v2/scim/users/{userId} | Return user with specified ID (default version)
[**getScimUsers**](SCIMApi.html#getScimUsers) | **GET** /api/v2/scim/users | Query Users
[**getScimV2Group**](SCIMApi.html#getScimV2Group) | **GET** /api/v2/scim/v2/groups/{groupId} | Return Group with specified ID
[**getScimV2Groups**](SCIMApi.html#getScimV2Groups) | **GET** /api/v2/scim/v2/groups | Query Groups
[**getScimV2Serviceproviderconfig**](SCIMApi.html#getScimV2Serviceproviderconfig) | **GET** /api/v2/scim/v2/serviceproviderconfig | Get SCIM Configuration
[**getScimV2User**](SCIMApi.html#getScimV2User) | **GET** /api/v2/scim/v2/users/{userId} | Return User with specified ID
[**getScimV2Users**](SCIMApi.html#getScimV2Users) | **GET** /api/v2/scim/v2/users | Query Users
[**patchScimGroup**](SCIMApi.html#patchScimGroup) | **PATCH** /api/v2/scim/groups/{groupId} | Update Group with specified ID
[**patchScimUser**](SCIMApi.html#patchScimUser) | **PATCH** /api/v2/scim/users/{userId} | Patch user with specified ID
[**patchScimV2Group**](SCIMApi.html#patchScimV2Group) | **PATCH** /api/v2/scim/v2/groups/{groupId} | Update Group with specified ID
[**patchScimV2User**](SCIMApi.html#patchScimV2User) | **PATCH** /api/v2/scim/v2/users/{userId} | Update user with specified ID
[**postScimUsers**](SCIMApi.html#postScimUsers) | **POST** /api/v2/scim/users | Create user
[**postScimV2Users**](SCIMApi.html#postScimV2Users) | **POST** /api/v2/scim/v2/users | Create user
[**putScimGroup**](SCIMApi.html#putScimGroup) | **PUT** /api/v2/scim/groups/{groupId} | Update Group with specified ID
[**putScimUser**](SCIMApi.html#putScimUser) | **PUT** /api/v2/scim/users/{userId} | Update user with specified ID
[**putScimV2Group**](SCIMApi.html#putScimV2Group) | **PUT** /api/v2/scim/v2/groups/{groupId} | Update Group with specified ID
[**putScimV2User**](SCIMApi.html#putScimV2User) | **PUT** /api/v2/scim/v2/users/{userId} | Update user with specified ID
{: class="table table-striped"}

<a name="deleteScimUser"></a>

# Empty deleteScimUser(userId, opts)



DELETE /api/v2/scim/users/{userId}

Soft delete user with specified ID



Requires ANY permissions: 

* directory:user:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | 
let opts = { 
  'ifMatch': "ifMatch_example" // String | If-Match for ETag version checking
};

apiInstance.deleteScimUser(userId, opts)
  .then((data) => {
    console.log(`deleteScimUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteScimUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** |  |  |
 **ifMatch** | **String** | If-Match for ETag version checking | [optional]  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteScimV2User"></a>

# Empty deleteScimV2User(userId, opts)



DELETE /api/v2/scim/v2/users/{userId}

Soft delete user with specified ID



Requires ANY permissions: 

* directory:user:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | 
let opts = { 
  'ifMatch': "ifMatch_example" // String | If-Match for ETag version checking
};

apiInstance.deleteScimV2User(userId, opts)
  .then((data) => {
    console.log(`deleteScimV2User success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteScimV2User');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** |  |  |
 **ifMatch** | **String** | If-Match for ETag version checking | [optional]  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="getScimGroup"></a>

# ScimV2Group getScimGroup(groupId, opts)



GET /api/v2/scim/groups/{groupId}

Return Group with specified ID



Requires ANY permissions: 

* directory:group:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let groupId = "groupId_example"; // String | 
let opts = { 
  'ifNoneMatch': "ifNoneMatch_example" // String | If-None-Match for ETag version checking
};

apiInstance.getScimGroup(groupId, opts)
  .then((data) => {
    console.log(`getScimGroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimGroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** |  |  |
 **ifNoneMatch** | **String** | If-None-Match for ETag version checking | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2Group**

<a name="getScimGroups"></a>

# ScimListResponse getScimGroups(opts)



GET /api/v2/scim/groups

Query Groups



Requires ANY permissions: 

* directory:group:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let opts = { 
  'startIndex': 1, // Number | Starting item of request. 1-based
  'count': 25, // Number | The requested number of items per page. A value of 0 will return no results other than the totalResults count.
  'filter': "displayName eq groupName" // String | filter parameter e.g. displayName eq groupName
};

apiInstance.getScimGroups(opts)
  .then((data) => {
    console.log(`getScimGroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimGroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **startIndex** | **Number** | Starting item of request. 1-based | [optional] [default to 1] |
 **count** | **Number** | The requested number of items per page. A value of 0 will return no results other than the totalResults count. | [optional] [default to 25] |
 **filter** | **String** | filter parameter e.g. displayName eq groupName | [optional]  |
{: class="table table-striped"}

### Return type

**ScimListResponse**

<a name="getScimUser"></a>

# ScimV2User getScimUser(userId, opts)



GET /api/v2/scim/users/{userId}

Return user with specified ID (default version)



Requires ANY permissions: 

* directory:user:view
* directory:user:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | 
let opts = { 
  'ifNoneMatch': "ifNoneMatch_example" // String | If-None-Match for ETag version checking
};

apiInstance.getScimUser(userId, opts)
  .then((data) => {
    console.log(`getScimUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** |  |  |
 **ifNoneMatch** | **String** | If-None-Match for ETag version checking | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2User**

<a name="getScimUsers"></a>

# ScimListResponse getScimUsers(filter, opts)



GET /api/v2/scim/users

Query Users



Requires ANY permissions: 

* directory:user:view
* directory:user:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let filter = "filter_example"; // String | filter parameter e.g. userName eq search@sample.org
let opts = { 
  'startIndex': 1, // Number | Starting item of request. 1-based
  'count': 25 // Number | The requested number of items per page. A value of 0 will return no results other than the totalResults count.
};

apiInstance.getScimUsers(filter, opts)
  .then((data) => {
    console.log(`getScimUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **filter** | **String** | filter parameter e.g. userName eq search@sample.org |  |
 **startIndex** | **Number** | Starting item of request. 1-based | [optional] [default to 1] |
 **count** | **Number** | The requested number of items per page. A value of 0 will return no results other than the totalResults count. | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**ScimListResponse**

<a name="getScimV2Group"></a>

# ScimV2Group getScimV2Group(groupId, opts)



GET /api/v2/scim/v2/groups/{groupId}

Return Group with specified ID



Requires ANY permissions: 

* directory:group:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let groupId = "groupId_example"; // String | 
let opts = { 
  'ifNoneMatch': "ifNoneMatch_example" // String | If-None-Match for ETag version checking
};

apiInstance.getScimV2Group(groupId, opts)
  .then((data) => {
    console.log(`getScimV2Group success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimV2Group');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** |  |  |
 **ifNoneMatch** | **String** | If-None-Match for ETag version checking | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2Group**

<a name="getScimV2Groups"></a>

# ScimListResponse getScimV2Groups(filter, opts)



GET /api/v2/scim/v2/groups

Query Groups



Requires ANY permissions: 

* directory:group:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let filter = "displayName eq groupName"; // String | filter parameter e.g. displayName eq groupName
let opts = { 
  'startIndex': 1, // Number | Starting item of request. 1-based
  'count': 25 // Number | The requested number of items per page. A value of 0 will return no results other than the totalResults count.
};

apiInstance.getScimV2Groups(filter, opts)
  .then((data) => {
    console.log(`getScimV2Groups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimV2Groups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **filter** | **String** | filter parameter e.g. displayName eq groupName |  |
 **startIndex** | **Number** | Starting item of request. 1-based | [optional] [default to 1] |
 **count** | **Number** | The requested number of items per page. A value of 0 will return no results other than the totalResults count. | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**ScimListResponse**

<a name="getScimV2Serviceproviderconfig"></a>

# ScimServiceProviderConfig getScimV2Serviceproviderconfig(opts)



GET /api/v2/scim/v2/serviceproviderconfig

Get SCIM Configuration



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.SCIMApi();

let opts = { 
  'ifNoneMatch': "ifNoneMatch_example" // String | If-None-Match for ETag version checking
};

apiInstance.getScimV2Serviceproviderconfig(opts)
  .then((data) => {
    console.log(`getScimV2Serviceproviderconfig success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimV2Serviceproviderconfig');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ifNoneMatch** | **String** | If-None-Match for ETag version checking | [optional]  |
{: class="table table-striped"}

### Return type

**ScimServiceProviderConfig**

<a name="getScimV2User"></a>

# ScimV2User getScimV2User(userId, opts)



GET /api/v2/scim/v2/users/{userId}

Return User with specified ID



Requires ANY permissions: 

* directory:user:view
* directory:user:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | 
let opts = { 
  'ifNoneMatch': "ifNoneMatch_example" // String | If-None-Match for ETag version checking
};

apiInstance.getScimV2User(userId, opts)
  .then((data) => {
    console.log(`getScimV2User success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimV2User');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** |  |  |
 **ifNoneMatch** | **String** | If-None-Match for ETag version checking | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2User**

<a name="getScimV2Users"></a>

# ScimListResponse getScimV2Users(filter, opts)



GET /api/v2/scim/v2/users

Query Users



Requires ANY permissions: 

* directory:user:view
* directory:user:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let filter = "filter_example"; // String | filter parameter e.g. userName eq search@sample.org
let opts = { 
  'startIndex': 1, // Number | Starting item of request. 1-based
  'count': 25 // Number | The requested number of items per page. A value of 0 will return no results other than the totalResults count.
};

apiInstance.getScimV2Users(filter, opts)
  .then((data) => {
    console.log(`getScimV2Users success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimV2Users');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **filter** | **String** | filter parameter e.g. userName eq search@sample.org |  |
 **startIndex** | **Number** | Starting item of request. 1-based | [optional] [default to 1] |
 **count** | **Number** | The requested number of items per page. A value of 0 will return no results other than the totalResults count. | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**ScimListResponse**

<a name="patchScimGroup"></a>

# ScimV2Group patchScimGroup(groupId, body, opts)



PATCH /api/v2/scim/groups/{groupId}

Update Group with specified ID



Requires ANY permissions: 

* directory:group:edit


### Request Body Schema

<script type="text/javascript">
	function copyPatchRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#PatchRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

PatchRequest <a href="#" onclick="return copyPatchRequestExample()">Copy</a>

<div id="PatchRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "schemas": [String], 
  "id": String, 
  "externalId": String, 
  "Operations": { 
    "path": { 
      "schemaUrn": String, 
      "root": Boolean, 
    },  
  },  
  "meta": { 
    "resourceType": String, 
    "created": Date, 
    "lastModified": Date, 
    "location": String, 
    "version": String, 
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

let apiInstance = new platformClient.SCIMApi();

let groupId = "groupId_example"; // String | 
let body = {}; // Object | Group
let opts = { 
  'ifMatch': "ifMatch_example" // String | If-Match for ETag version checking
};

apiInstance.patchScimGroup(groupId, body, opts)
  .then((data) => {
    console.log(`patchScimGroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchScimGroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** |  |  |
 **body** | **Object** | Group |  |
 **ifMatch** | **String** | If-Match for ETag version checking | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2Group**

<a name="patchScimUser"></a>

# ScimV2User patchScimUser(userId, body, opts)



PATCH /api/v2/scim/users/{userId}

Patch user with specified ID



Requires ANY permissions: 

* directory:user:edit
* directory:user:setPassword


### Request Body Schema

<script type="text/javascript">
	function copyScimV2PatchRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ScimV2PatchRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ScimV2PatchRequest <a href="#" onclick="return copyScimV2PatchRequestExample()">Copy</a>

<div id="ScimV2PatchRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "schemas": [String], 
  "Operations": { 
    "op": String, 
    "path": String, 
    "value": { 
      "nodeType": String, 
      "float": Boolean, 
      "number": Boolean, 
      "object": Boolean, 
      "boolean": Boolean, 
      "valueNode": Boolean, 
      "binary": Boolean, 
      "pojo": Boolean, 
      "containerNode": Boolean, 
      "missingNode": Boolean, 
      "floatingPointNumber": Boolean, 
      "double": Boolean, 
      "bigDecimal": Boolean, 
      "bigInteger": Boolean, 
      "textual": Boolean, 
      "int": Boolean, 
      "integralNumber": Boolean, 
      "short": Boolean, 
      "long": Boolean, 
      "array": Boolean, 
      "null": Boolean, 
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

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | 
let body = {}; // Object | SCIM Patch Request
let opts = { 
  'ifMatch': "ifMatch_example" // String | If-Match for ETag version checking
};

apiInstance.patchScimUser(userId, body, opts)
  .then((data) => {
    console.log(`patchScimUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchScimUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** |  |  |
 **body** | **Object** | SCIM Patch Request |  |
 **ifMatch** | **String** | If-Match for ETag version checking | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2User**

<a name="patchScimV2Group"></a>

# ScimV2Group patchScimV2Group(groupId, body, opts)



PATCH /api/v2/scim/v2/groups/{groupId}

Update Group with specified ID



Requires ANY permissions: 

* directory:group:edit


### Request Body Schema

<script type="text/javascript">
	function copyPatchRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#PatchRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

PatchRequest <a href="#" onclick="return copyPatchRequestExample()">Copy</a>

<div id="PatchRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "schemas": [String], 
  "id": String, 
  "externalId": String, 
  "Operations": { 
    "path": { 
      "schemaUrn": String, 
      "root": Boolean, 
    },  
  },  
  "meta": { 
    "resourceType": String, 
    "created": Date, 
    "lastModified": Date, 
    "location": String, 
    "version": String, 
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

let apiInstance = new platformClient.SCIMApi();

let groupId = "groupId_example"; // String | 
let body = {}; // Object | Group
let opts = { 
  'ifMatch': "ifMatch_example" // String | If-Match for ETag version checking
};

apiInstance.patchScimV2Group(groupId, body, opts)
  .then((data) => {
    console.log(`patchScimV2Group success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchScimV2Group');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** |  |  |
 **body** | **Object** | Group |  |
 **ifMatch** | **String** | If-Match for ETag version checking | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2Group**

<a name="patchScimV2User"></a>

# ScimV2User patchScimV2User(userId, body, opts)



PATCH /api/v2/scim/v2/users/{userId}

Update user with specified ID



Requires ANY permissions: 

* directory:user:edit
* directory:user:setPassword


### Request Body Schema

<script type="text/javascript">
	function copyScimV2PatchRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ScimV2PatchRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ScimV2PatchRequest <a href="#" onclick="return copyScimV2PatchRequestExample()">Copy</a>

<div id="ScimV2PatchRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "schemas": [String], 
  "Operations": { 
    "op": String, 
    "path": String, 
    "value": { 
      "nodeType": String, 
      "float": Boolean, 
      "number": Boolean, 
      "object": Boolean, 
      "boolean": Boolean, 
      "valueNode": Boolean, 
      "binary": Boolean, 
      "pojo": Boolean, 
      "containerNode": Boolean, 
      "missingNode": Boolean, 
      "floatingPointNumber": Boolean, 
      "double": Boolean, 
      "bigDecimal": Boolean, 
      "bigInteger": Boolean, 
      "textual": Boolean, 
      "int": Boolean, 
      "integralNumber": Boolean, 
      "short": Boolean, 
      "long": Boolean, 
      "array": Boolean, 
      "null": Boolean, 
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

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | User Id
let body = {}; // Object | SCIM Patch Request
let opts = { 
  'ifMatch': "ifMatch_example" // String | If-Match for ETag version checking
};

apiInstance.patchScimV2User(userId, body, opts)
  .then((data) => {
    console.log(`patchScimV2User success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchScimV2User');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User Id |  |
 **body** | **Object** | SCIM Patch Request |  |
 **ifMatch** | **String** | If-Match for ETag version checking | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2User**

<a name="postScimUsers"></a>

# ScimV2User postScimUsers(body)



POST /api/v2/scim/users

Create user



Requires ANY permissions: 

* directory:user:add


### Request Body Schema

<script type="text/javascript">
	function copyScimV2CreateUserExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ScimV2CreateUserExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ScimV2CreateUser <a href="#" onclick="return copyScimV2CreateUserExample()">Copy</a>

<div id="ScimV2CreateUserExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "displayName": String, 
  "schemas": [String], 
  "active": Boolean, 
  "userName": String, 
  "password": String, 
  "title": String, 
  "phoneNumbers": { 
    "value": String, 
    "type": String, 
    "primary": Boolean, 
  },  
  "emails": { 
    "value": String, 
    "type": String, 
    "primary": Boolean, 
  },  
  "photos": { 
    "value": String, 
    "type": String, 
  },  
  "groups": { 
    "displayName": String, 
    "meta": { 
      "resourceType": String, 
      "lastModified": Date, 
      "location": String, 
      "version": String, 
    },  
    "type": String, 
    "value": String, 
    "$ref": String, 
  },  
  "meta": { 
    "resourceType": String, 
    "lastModified": Date, 
    "location": String, 
    "version": String, 
  },  
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": { 
    "division": String, 
    "department": String, 
    "manager": { 
      "displayName": String, 
      "active": Boolean, 
      "userName": String, 
      "password": String, 
      "title": String, 
      "phoneNumbers": { 
        "value": String, 
        "type": String, 
        "primary": Boolean, 
      },  
      "emails": { 
        "value": String, 
        "type": String, 
        "primary": Boolean, 
      },  
      "photos": { 
        "value": String, 
        "type": String, 
      },  
      "groups": { 
        "displayName": String, 
        "meta": { 
          "resourceType": String, 
          "lastModified": Date, 
          "location": String, 
          "version": String, 
        },  
        "type": String, 
        "value": String, 
        "$ref": String, 
      },  
      "meta": { 
        "resourceType": String, 
        "lastModified": Date, 
        "location": String, 
        "version": String, 
      },  
      "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": { 
        "division": String, 
        "department": String, 
        "manager": { 
          "displayName": String, 
          "active": Boolean, 
          "userName": String, 
          "password": String, 
          "title": String, 
          "phoneNumbers": { 
            "value": String, 
            "type": String, 
            "primary": Boolean, 
          },  
          "emails": { 
            "value": String, 
            "type": String, 
            "primary": Boolean, 
          },  
          "photos": { 
            "value": String, 
            "type": String, 
          },  
          "groups": { 
            "displayName": String, 
            "meta": { 
              "resourceType": String, 
              "lastModified": Date, 
              "location": String, 
              "version": String, 
            },  
            "type": String, 
            "value": String, 
            "$ref": String, 
          },  
          "meta": { 
            "resourceType": String, 
            "lastModified": Date, 
            "location": String, 
            "version": String, 
          },  
          "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": { 
            "division": String, 
            "department": String, 
            "manager": { 
              "displayName": String, 
              "active": Boolean, 
              "userName": String, 
              "password": String, 
              "title": String, 
              "phoneNumbers": { 
                "value": String, 
                "type": String, 
                "primary": Boolean, 
              },  
              "emails": { 
                "value": String, 
                "type": String, 
                "primary": Boolean, 
              },  
              "photos": { 
                "value": String, 
                "type": String, 
              },  
              "groups": { 
                "displayName": String, 
                "meta": ScimMetadata, 
                "type": String, 
                "value": String, 
                "$ref": String, 
              },  
              "meta": { 
                "resourceType": String, 
                "lastModified": Date, 
                "location": String, 
                "version": String, 
              },  
              "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": { 
                "division": String, 
                "department": String, 
                "manager": Manager, 
              },  
              "value": String, 
              "$ref": String, 
            },  
          },  
          "value": String, 
          "$ref": String, 
        },  
      },  
      "value": String, 
      "$ref": String, 
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

let apiInstance = new platformClient.SCIMApi();

let body = {}; // Object | SCIM Create User

apiInstance.postScimUsers(body)
  .then((data) => {
    console.log(`postScimUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postScimUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | SCIM Create User |  |
{: class="table table-striped"}

### Return type

**ScimV2User**

<a name="postScimV2Users"></a>

# ScimV2User postScimV2Users(body)



POST /api/v2/scim/v2/users

Create user



Requires ANY permissions: 

* directory:user:add


### Request Body Schema

<script type="text/javascript">
	function copyScimV2CreateUserExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ScimV2CreateUserExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ScimV2CreateUser <a href="#" onclick="return copyScimV2CreateUserExample()">Copy</a>

<div id="ScimV2CreateUserExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "displayName": String, 
  "schemas": [String], 
  "active": Boolean, 
  "userName": String, 
  "password": String, 
  "title": String, 
  "phoneNumbers": { 
    "value": String, 
    "type": String, 
    "primary": Boolean, 
  },  
  "emails": { 
    "value": String, 
    "type": String, 
    "primary": Boolean, 
  },  
  "photos": { 
    "value": String, 
    "type": String, 
  },  
  "groups": { 
    "displayName": String, 
    "meta": { 
      "resourceType": String, 
      "lastModified": Date, 
      "location": String, 
      "version": String, 
    },  
    "type": String, 
    "value": String, 
    "$ref": String, 
  },  
  "meta": { 
    "resourceType": String, 
    "lastModified": Date, 
    "location": String, 
    "version": String, 
  },  
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": { 
    "division": String, 
    "department": String, 
    "manager": { 
      "displayName": String, 
      "active": Boolean, 
      "userName": String, 
      "password": String, 
      "title": String, 
      "phoneNumbers": { 
        "value": String, 
        "type": String, 
        "primary": Boolean, 
      },  
      "emails": { 
        "value": String, 
        "type": String, 
        "primary": Boolean, 
      },  
      "photos": { 
        "value": String, 
        "type": String, 
      },  
      "groups": { 
        "displayName": String, 
        "meta": { 
          "resourceType": String, 
          "lastModified": Date, 
          "location": String, 
          "version": String, 
        },  
        "type": String, 
        "value": String, 
        "$ref": String, 
      },  
      "meta": { 
        "resourceType": String, 
        "lastModified": Date, 
        "location": String, 
        "version": String, 
      },  
      "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": { 
        "division": String, 
        "department": String, 
        "manager": { 
          "displayName": String, 
          "active": Boolean, 
          "userName": String, 
          "password": String, 
          "title": String, 
          "phoneNumbers": { 
            "value": String, 
            "type": String, 
            "primary": Boolean, 
          },  
          "emails": { 
            "value": String, 
            "type": String, 
            "primary": Boolean, 
          },  
          "photos": { 
            "value": String, 
            "type": String, 
          },  
          "groups": { 
            "displayName": String, 
            "meta": { 
              "resourceType": String, 
              "lastModified": Date, 
              "location": String, 
              "version": String, 
            },  
            "type": String, 
            "value": String, 
            "$ref": String, 
          },  
          "meta": { 
            "resourceType": String, 
            "lastModified": Date, 
            "location": String, 
            "version": String, 
          },  
          "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": { 
            "division": String, 
            "department": String, 
            "manager": { 
              "displayName": String, 
              "active": Boolean, 
              "userName": String, 
              "password": String, 
              "title": String, 
              "phoneNumbers": { 
                "value": String, 
                "type": String, 
                "primary": Boolean, 
              },  
              "emails": { 
                "value": String, 
                "type": String, 
                "primary": Boolean, 
              },  
              "photos": { 
                "value": String, 
                "type": String, 
              },  
              "groups": { 
                "displayName": String, 
                "meta": ScimMetadata, 
                "type": String, 
                "value": String, 
                "$ref": String, 
              },  
              "meta": { 
                "resourceType": String, 
                "lastModified": Date, 
                "location": String, 
                "version": String, 
              },  
              "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": { 
                "division": String, 
                "department": String, 
                "manager": Manager, 
              },  
              "value": String, 
              "$ref": String, 
            },  
          },  
          "value": String, 
          "$ref": String, 
        },  
      },  
      "value": String, 
      "$ref": String, 
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

let apiInstance = new platformClient.SCIMApi();

let body = {}; // Object | SCIM Create User

apiInstance.postScimV2Users(body)
  .then((data) => {
    console.log(`postScimV2Users success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postScimV2Users');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | SCIM Create User |  |
{: class="table table-striped"}

### Return type

**ScimV2User**

<a name="putScimGroup"></a>

# ScimV2Group putScimGroup(groupId, body, opts)



PUT /api/v2/scim/groups/{groupId}

Update Group with specified ID



Requires ANY permissions: 

* directory:group:edit


### Request Body Schema

<script type="text/javascript">
	function copyScimV2GroupExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ScimV2GroupExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ScimV2Group <a href="#" onclick="return copyScimV2GroupExample()">Copy</a>

<div id="ScimV2GroupExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "displayName": String, 
  "schemas": [String], 
  "members": { 
    "type": String, 
    "displayName": String, 
    "meta": { 
      "resourceType": String, 
      "lastModified": Date, 
      "location": String, 
      "version": String, 
    },  
    "value": String, 
    "$ref": String, 
  },  
  "meta": { 
    "resourceType": String, 
    "lastModified": Date, 
    "location": String, 
    "version": String, 
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

let apiInstance = new platformClient.SCIMApi();

let groupId = "groupId_example"; // String | 
let body = {}; // Object | Group
let opts = { 
  'ifMatch': "ifMatch_example" // String | If-Match for ETag version checking
};

apiInstance.putScimGroup(groupId, body, opts)
  .then((data) => {
    console.log(`putScimGroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putScimGroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** |  |  |
 **body** | **Object** | Group |  |
 **ifMatch** | **String** | If-Match for ETag version checking | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2Group**

<a name="putScimUser"></a>

# ScimV2User putScimUser(userId, body, opts)



PUT /api/v2/scim/users/{userId}

Update user with specified ID



Requires ANY permissions: 

* directory:user:edit
* directory:user:setPassword


### Request Body Schema

<script type="text/javascript">
	function copyScimV2UserExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ScimV2UserExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ScimV2User <a href="#" onclick="return copyScimV2UserExample()">Copy</a>

<div id="ScimV2UserExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "displayName": String, 
  "schemas": [String], 
  "active": Boolean, 
  "userName": String, 
  "password": String, 
  "title": String, 
  "phoneNumbers": { 
    "value": String, 
    "type": String, 
    "primary": Boolean, 
  },  
  "emails": { 
    "value": String, 
    "type": String, 
    "primary": Boolean, 
  },  
  "photos": { 
    "value": String, 
    "type": String, 
  },  
  "groups": { 
    "displayName": String, 
    "meta": { 
      "resourceType": String, 
      "lastModified": Date, 
      "location": String, 
      "version": String, 
    },  
    "type": String, 
    "value": String, 
    "$ref": String, 
  },  
  "meta": { 
    "resourceType": String, 
    "lastModified": Date, 
    "location": String, 
    "version": String, 
  },  
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": { 
    "division": String, 
    "department": String, 
    "manager": { 
      "displayName": String, 
      "active": Boolean, 
      "userName": String, 
      "password": String, 
      "title": String, 
      "phoneNumbers": { 
        "value": String, 
        "type": String, 
        "primary": Boolean, 
      },  
      "emails": { 
        "value": String, 
        "type": String, 
        "primary": Boolean, 
      },  
      "photos": { 
        "value": String, 
        "type": String, 
      },  
      "groups": { 
        "displayName": String, 
        "meta": { 
          "resourceType": String, 
          "lastModified": Date, 
          "location": String, 
          "version": String, 
        },  
        "type": String, 
        "value": String, 
        "$ref": String, 
      },  
      "meta": { 
        "resourceType": String, 
        "lastModified": Date, 
        "location": String, 
        "version": String, 
      },  
      "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": { 
        "division": String, 
        "department": String, 
        "manager": { 
          "displayName": String, 
          "active": Boolean, 
          "userName": String, 
          "password": String, 
          "title": String, 
          "phoneNumbers": { 
            "value": String, 
            "type": String, 
            "primary": Boolean, 
          },  
          "emails": { 
            "value": String, 
            "type": String, 
            "primary": Boolean, 
          },  
          "photos": { 
            "value": String, 
            "type": String, 
          },  
          "groups": { 
            "displayName": String, 
            "meta": { 
              "resourceType": String, 
              "lastModified": Date, 
              "location": String, 
              "version": String, 
            },  
            "type": String, 
            "value": String, 
            "$ref": String, 
          },  
          "meta": { 
            "resourceType": String, 
            "lastModified": Date, 
            "location": String, 
            "version": String, 
          },  
          "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": { 
            "division": String, 
            "department": String, 
            "manager": { 
              "displayName": String, 
              "active": Boolean, 
              "userName": String, 
              "password": String, 
              "title": String, 
              "phoneNumbers": { 
                "value": String, 
                "type": String, 
                "primary": Boolean, 
              },  
              "emails": { 
                "value": String, 
                "type": String, 
                "primary": Boolean, 
              },  
              "photos": { 
                "value": String, 
                "type": String, 
              },  
              "groups": { 
                "displayName": String, 
                "meta": ScimMetadata, 
                "type": String, 
                "value": String, 
                "$ref": String, 
              },  
              "meta": { 
                "resourceType": String, 
                "lastModified": Date, 
                "location": String, 
                "version": String, 
              },  
              "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": { 
                "division": String, 
                "department": String, 
                "manager": Manager, 
              },  
              "value": String, 
              "$ref": String, 
            },  
          },  
          "value": String, 
          "$ref": String, 
        },  
      },  
      "value": String, 
      "$ref": String, 
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

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | 
let body = {}; // Object | User
let opts = { 
  'ifMatch': "ifMatch_example" // String | If-Match for ETag version checking
};

apiInstance.putScimUser(userId, body, opts)
  .then((data) => {
    console.log(`putScimUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putScimUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** |  |  |
 **body** | **Object** | User |  |
 **ifMatch** | **String** | If-Match for ETag version checking | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2User**

<a name="putScimV2Group"></a>

# ScimV2Group putScimV2Group(groupId, body, opts)



PUT /api/v2/scim/v2/groups/{groupId}

Update Group with specified ID



Requires ANY permissions: 

* directory:group:edit


### Request Body Schema

<script type="text/javascript">
	function copyScimV2GroupExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ScimV2GroupExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ScimV2Group <a href="#" onclick="return copyScimV2GroupExample()">Copy</a>

<div id="ScimV2GroupExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "displayName": String, 
  "schemas": [String], 
  "members": { 
    "type": String, 
    "displayName": String, 
    "meta": { 
      "resourceType": String, 
      "lastModified": Date, 
      "location": String, 
      "version": String, 
    },  
    "value": String, 
    "$ref": String, 
  },  
  "meta": { 
    "resourceType": String, 
    "lastModified": Date, 
    "location": String, 
    "version": String, 
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

let apiInstance = new platformClient.SCIMApi();

let groupId = "groupId_example"; // String | 
let body = {}; // Object | Group
let opts = { 
  'ifMatch': "ifMatch_example" // String | If-Match for ETag version checking
};

apiInstance.putScimV2Group(groupId, body, opts)
  .then((data) => {
    console.log(`putScimV2Group success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putScimV2Group');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** |  |  |
 **body** | **Object** | Group |  |
 **ifMatch** | **String** | If-Match for ETag version checking | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2Group**

<a name="putScimV2User"></a>

# ScimV2User putScimV2User(userId, body, opts)



PUT /api/v2/scim/v2/users/{userId}

Update user with specified ID



Requires ANY permissions: 

* directory:user:edit
* directory:user:setPassword


### Request Body Schema

<script type="text/javascript">
	function copyScimV2UserExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ScimV2UserExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ScimV2User <a href="#" onclick="return copyScimV2UserExample()">Copy</a>

<div id="ScimV2UserExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "displayName": String, 
  "schemas": [String], 
  "active": Boolean, 
  "userName": String, 
  "password": String, 
  "title": String, 
  "phoneNumbers": { 
    "value": String, 
    "type": String, 
    "primary": Boolean, 
  },  
  "emails": { 
    "value": String, 
    "type": String, 
    "primary": Boolean, 
  },  
  "photos": { 
    "value": String, 
    "type": String, 
  },  
  "groups": { 
    "displayName": String, 
    "meta": { 
      "resourceType": String, 
      "lastModified": Date, 
      "location": String, 
      "version": String, 
    },  
    "type": String, 
    "value": String, 
    "$ref": String, 
  },  
  "meta": { 
    "resourceType": String, 
    "lastModified": Date, 
    "location": String, 
    "version": String, 
  },  
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": { 
    "division": String, 
    "department": String, 
    "manager": { 
      "displayName": String, 
      "active": Boolean, 
      "userName": String, 
      "password": String, 
      "title": String, 
      "phoneNumbers": { 
        "value": String, 
        "type": String, 
        "primary": Boolean, 
      },  
      "emails": { 
        "value": String, 
        "type": String, 
        "primary": Boolean, 
      },  
      "photos": { 
        "value": String, 
        "type": String, 
      },  
      "groups": { 
        "displayName": String, 
        "meta": { 
          "resourceType": String, 
          "lastModified": Date, 
          "location": String, 
          "version": String, 
        },  
        "type": String, 
        "value": String, 
        "$ref": String, 
      },  
      "meta": { 
        "resourceType": String, 
        "lastModified": Date, 
        "location": String, 
        "version": String, 
      },  
      "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": { 
        "division": String, 
        "department": String, 
        "manager": { 
          "displayName": String, 
          "active": Boolean, 
          "userName": String, 
          "password": String, 
          "title": String, 
          "phoneNumbers": { 
            "value": String, 
            "type": String, 
            "primary": Boolean, 
          },  
          "emails": { 
            "value": String, 
            "type": String, 
            "primary": Boolean, 
          },  
          "photos": { 
            "value": String, 
            "type": String, 
          },  
          "groups": { 
            "displayName": String, 
            "meta": { 
              "resourceType": String, 
              "lastModified": Date, 
              "location": String, 
              "version": String, 
            },  
            "type": String, 
            "value": String, 
            "$ref": String, 
          },  
          "meta": { 
            "resourceType": String, 
            "lastModified": Date, 
            "location": String, 
            "version": String, 
          },  
          "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": { 
            "division": String, 
            "department": String, 
            "manager": { 
              "displayName": String, 
              "active": Boolean, 
              "userName": String, 
              "password": String, 
              "title": String, 
              "phoneNumbers": { 
                "value": String, 
                "type": String, 
                "primary": Boolean, 
              },  
              "emails": { 
                "value": String, 
                "type": String, 
                "primary": Boolean, 
              },  
              "photos": { 
                "value": String, 
                "type": String, 
              },  
              "groups": { 
                "displayName": String, 
                "meta": ScimMetadata, 
                "type": String, 
                "value": String, 
                "$ref": String, 
              },  
              "meta": { 
                "resourceType": String, 
                "lastModified": Date, 
                "location": String, 
                "version": String, 
              },  
              "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": { 
                "division": String, 
                "department": String, 
                "manager": Manager, 
              },  
              "value": String, 
              "$ref": String, 
            },  
          },  
          "value": String, 
          "$ref": String, 
        },  
      },  
      "value": String, 
      "$ref": String, 
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

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | User Id
let body = {}; // Object | User
let opts = { 
  'ifMatch': "ifMatch_example" // String | If-Match for ETag version checking
};

apiInstance.putScimV2User(userId, body, opts)
  .then((data) => {
    console.log(`putScimV2User success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putScimV2User');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User Id |  |
 **body** | **Object** | User |  |
 **ifMatch** | **String** | If-Match for ETag version checking | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2User**

