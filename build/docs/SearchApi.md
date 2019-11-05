---
title: SearchApi
---
# platformClient.SearchApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getDocumentationGknSearch**](SearchApi.html#getDocumentationGknSearch) | **GET** /api/v2/documentation/gkn/search | Search gkn documentation using the q64 value returned from a previous search
[**getDocumentationSearch**](SearchApi.html#getDocumentationSearch) | **GET** /api/v2/documentation/search | Search documentation using the q64 value returned from a previous search
[**getGroupsSearch**](SearchApi.html#getGroupsSearch) | **GET** /api/v2/groups/search | Search groups using the q64 value returned from a previous search
[**getLocationsSearch**](SearchApi.html#getLocationsSearch) | **GET** /api/v2/locations/search | Search locations using the q64 value returned from a previous search
[**getSearch**](SearchApi.html#getSearch) | **GET** /api/v2/search | Search using the q64 value returned from a previous search.
[**getSearchSuggest**](SearchApi.html#getSearchSuggest) | **GET** /api/v2/search/suggest | Suggest resources using the q64 value returned from a previous suggest query.
[**getUsersSearch**](SearchApi.html#getUsersSearch) | **GET** /api/v2/users/search | Search users using the q64 value returned from a previous search
[**getVoicemailSearch**](SearchApi.html#getVoicemailSearch) | **GET** /api/v2/voicemail/search | Search voicemails using the q64 value returned from a previous search
[**postDocumentationGknSearch**](SearchApi.html#postDocumentationGknSearch) | **POST** /api/v2/documentation/gkn/search | Search gkn documentation
[**postDocumentationSearch**](SearchApi.html#postDocumentationSearch) | **POST** /api/v2/documentation/search | Search documentation
[**postGroupsSearch**](SearchApi.html#postGroupsSearch) | **POST** /api/v2/groups/search | Search groups
[**postLocationsSearch**](SearchApi.html#postLocationsSearch) | **POST** /api/v2/locations/search | Search locations
[**postSearch**](SearchApi.html#postSearch) | **POST** /api/v2/search | Search resources.
[**postSearchSuggest**](SearchApi.html#postSearchSuggest) | **POST** /api/v2/search/suggest | Suggest resources.
[**postUsersSearch**](SearchApi.html#postUsersSearch) | **POST** /api/v2/users/search | Search users
[**postVoicemailSearch**](SearchApi.html#postVoicemailSearch) | **POST** /api/v2/voicemail/search | Search voicemails
{: class="table table-striped"}

<a name="getDocumentationGknSearch"></a>

# GKNDocumentationSearchResponse getDocumentationGknSearch(q64)



GET /api/v2/documentation/gkn/search

Search gkn documentation using the q64 value returned from a previous search



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64

apiInstance.getDocumentationGknSearch(q64)
  .then((data) => {
    console.log(`getDocumentationGknSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDocumentationGknSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
{: class="table table-striped"}

### Return type

**GKNDocumentationSearchResponse**

<a name="getDocumentationSearch"></a>

# DocumentationSearchResponse getDocumentationSearch(q64)



GET /api/v2/documentation/search

Search documentation using the q64 value returned from a previous search



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64

apiInstance.getDocumentationSearch(q64)
  .then((data) => {
    console.log(`getDocumentationSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDocumentationSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
{: class="table table-striped"}

### Return type

**DocumentationSearchResponse**

<a name="getGroupsSearch"></a>

# GroupsSearchResponse getGroupsSearch(q64, opts)



GET /api/v2/groups/search

Search groups using the q64 value returned from a previous search



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"] // [String] | expand
};

apiInstance.getGroupsSearch(q64, opts)
  .then((data) => {
    console.log(`getGroupsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGroupsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | expand | [optional]  |
{: class="table table-striped"}

### Return type

**GroupsSearchResponse**

<a name="getLocationsSearch"></a>

# LocationsSearchResponse getLocationsSearch(q64, opts)



GET /api/v2/locations/search

Search locations using the q64 value returned from a previous search



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"] // [String] | Provides more details about a specified resource
};

apiInstance.getLocationsSearch(q64, opts)
  .then((data) => {
    console.log(`getLocationsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLocationsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | Provides more details about a specified resource | [optional] <br />**Values**: images, addressVerificationDetails |
{: class="table table-striped"}

### Return type

**LocationsSearchResponse**

<a name="getSearch"></a>

# JsonNodeSearchResponse getSearch(q64, opts)



GET /api/v2/search

Search using the q64 value returned from a previous search.



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand
  'profile': true // Boolean | profile
};

apiInstance.getSearch(q64, opts)
  .then((data) => {
    console.log(`getSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, authorization.unusedRoles, profileSkills, certifications, locations, groups, skills, languages, languagePreference, employerInfo, biography, callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation, images, addressVerificationDetails |
 **profile** | **Boolean** | profile | [optional] [default to true] |
{: class="table table-striped"}

### Return type

**JsonNodeSearchResponse**

<a name="getSearchSuggest"></a>

# JsonNodeSearchResponse getSearchSuggest(q64, opts)



GET /api/v2/search/suggest

Suggest resources using the q64 value returned from a previous suggest query.



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand
  'profile': true // Boolean | profile
};

apiInstance.getSearchSuggest(q64, opts)
  .then((data) => {
    console.log(`getSearchSuggest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSearchSuggest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, authorization.unusedRoles, profileSkills, certifications, locations, groups, skills, languages, languagePreference, employerInfo, biography, callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation, images, addressVerificationDetails |
 **profile** | **Boolean** | profile | [optional] [default to true] |
{: class="table table-striped"}

### Return type

**JsonNodeSearchResponse**

<a name="getUsersSearch"></a>

# UsersSearchResponse getUsersSearch(q64, opts)



GET /api/v2/users/search

Search users using the q64 value returned from a previous search



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"] // [String] | expand
};

apiInstance.getUsersSearch(q64, opts)
  .then((data) => {
    console.log(`getUsersSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsersSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | expand | [optional]  |
{: class="table table-striped"}

### Return type

**UsersSearchResponse**

<a name="getVoicemailSearch"></a>

# VoicemailsSearchResponse getVoicemailSearch(q64, opts)



GET /api/v2/voicemail/search

Search voicemails using the q64 value returned from a previous search



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"] // [String] | expand
};

apiInstance.getVoicemailSearch(q64, opts)
  .then((data) => {
    console.log(`getVoicemailSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getVoicemailSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | expand | [optional]  |
{: class="table table-striped"}

### Return type

**VoicemailsSearchResponse**

<a name="postDocumentationGknSearch"></a>

# GKNDocumentationSearchResponse postDocumentationGknSearch(body)



POST /api/v2/documentation/gkn/search

Search gkn documentation



Requires NO permissions: 



### Request Body Schema

<script type="text/javascript">
	function copyGKNDocumentationSearchRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#GKNDocumentationSearchRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

GKNDocumentationSearchRequest <a href="#" onclick="return copyGKNDocumentationSearchRequestExample()">Copy</a>

<div id="GKNDocumentationSearchRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "sortOrder": String, 
  "sortBy": String, 
  "pageSize": Number, 
  "pageNumber": Number, 
  "sort": { 
    "sortOrder": String, 
    "sortBy": String, 
  },  
  "query": { 
    "endValue": String, 
    "values": [String], 
    "startValue": String, 
    "fields": [String], 
    "value": String, 
    "operator": String, 
    "group": { 
      "endValue": String, 
      "values": [String], 
      "startValue": String, 
      "fields": [String], 
      "value": String, 
      "operator": String, 
      "group": { 
        "endValue": String, 
        "values": [String], 
        "startValue": String, 
        "fields": [String], 
        "value": String, 
        "operator": String, 
        "group": { 
          "endValue": String, 
          "values": [String], 
          "startValue": String, 
          "fields": [String], 
          "value": String, 
          "operator": String, 
          "group": { 
            "endValue": String, 
            "values": [String], 
            "startValue": String, 
            "fields": [String], 
            "value": String, 
            "operator": String, 
            "group": { 
              "endValue": String, 
              "values": [String], 
              "startValue": String, 
              "fields": [String], 
              "value": String, 
              "operator": String, 
              "group": { 
                "endValue": String, 
                "values": [String], 
                "startValue": String, 
                "fields": [String], 
                "value": String, 
                "operator": String, 
                "group": [GKNDocumentationSearchCriteria], 
                "type": String, 
              },  
              "type": String, 
            },  
            "type": String, 
          },  
          "type": String, 
        },  
        "type": String, 
      },  
      "type": String, 
    },  
    "type": String, 
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

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options

apiInstance.postDocumentationGknSearch(body)
  .then((data) => {
    console.log(`postDocumentationGknSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postDocumentationGknSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
{: class="table table-striped"}

### Return type

**GKNDocumentationSearchResponse**

<a name="postDocumentationSearch"></a>

# DocumentationSearchResponse postDocumentationSearch(body)



POST /api/v2/documentation/search

Search documentation



Requires NO permissions: 



### Request Body Schema

<script type="text/javascript">
	function copyDocumentationSearchRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#DocumentationSearchRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

DocumentationSearchRequest <a href="#" onclick="return copyDocumentationSearchRequestExample()">Copy</a>

<div id="DocumentationSearchRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "sortOrder": String, 
  "sortBy": String, 
  "pageSize": Number, 
  "pageNumber": Number, 
  "sort": { 
    "sortOrder": String, 
    "sortBy": String, 
  },  
  "query": { 
    "endValue": String, 
    "values": [String], 
    "startValue": String, 
    "fields": [String], 
    "value": String, 
    "operator": String, 
    "group": { 
      "endValue": String, 
      "values": [String], 
      "startValue": String, 
      "fields": [String], 
      "value": String, 
      "operator": String, 
      "group": { 
        "endValue": String, 
        "values": [String], 
        "startValue": String, 
        "fields": [String], 
        "value": String, 
        "operator": String, 
        "group": { 
          "endValue": String, 
          "values": [String], 
          "startValue": String, 
          "fields": [String], 
          "value": String, 
          "operator": String, 
          "group": { 
            "endValue": String, 
            "values": [String], 
            "startValue": String, 
            "fields": [String], 
            "value": String, 
            "operator": String, 
            "group": { 
              "endValue": String, 
              "values": [String], 
              "startValue": String, 
              "fields": [String], 
              "value": String, 
              "operator": String, 
              "group": { 
                "endValue": String, 
                "values": [String], 
                "startValue": String, 
                "fields": [String], 
                "value": String, 
                "operator": String, 
                "group": [DocumentationSearchCriteria], 
                "type": String, 
              },  
              "type": String, 
            },  
            "type": String, 
          },  
          "type": String, 
        },  
        "type": String, 
      },  
      "type": String, 
    },  
    "type": String, 
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

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options

apiInstance.postDocumentationSearch(body)
  .then((data) => {
    console.log(`postDocumentationSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postDocumentationSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
{: class="table table-striped"}

### Return type

**DocumentationSearchResponse**

<a name="postGroupsSearch"></a>

# GroupsSearchResponse postGroupsSearch(body)



POST /api/v2/groups/search

Search groups



Requires NO permissions: 



### Request Body Schema

<script type="text/javascript">
	function copyGroupSearchRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#GroupSearchRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

GroupSearchRequest <a href="#" onclick="return copyGroupSearchRequestExample()">Copy</a>

<div id="GroupSearchRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "sortOrder": String, 
  "sortBy": String, 
  "pageSize": Number, 
  "pageNumber": Number, 
  "sort": { 
    "sortOrder": String, 
    "sortBy": String, 
  },  
  "query": { 
    "endValue": String, 
    "values": [String], 
    "startValue": String, 
    "fields": [String], 
    "value": String, 
    "operator": String, 
    "group": { 
      "endValue": String, 
      "values": [String], 
      "startValue": String, 
      "fields": [String], 
      "value": String, 
      "operator": String, 
      "group": { 
        "endValue": String, 
        "values": [String], 
        "startValue": String, 
        "fields": [String], 
        "value": String, 
        "operator": String, 
        "group": { 
          "endValue": String, 
          "values": [String], 
          "startValue": String, 
          "fields": [String], 
          "value": String, 
          "operator": String, 
          "group": { 
            "endValue": String, 
            "values": [String], 
            "startValue": String, 
            "fields": [String], 
            "value": String, 
            "operator": String, 
            "group": { 
              "endValue": String, 
              "values": [String], 
              "startValue": String, 
              "fields": [String], 
              "value": String, 
              "operator": String, 
              "group": { 
                "endValue": String, 
                "values": [String], 
                "startValue": String, 
                "fields": [String], 
                "value": String, 
                "operator": String, 
                "group": [GroupSearchCriteria], 
                "type": String, 
              },  
              "type": String, 
            },  
            "type": String, 
          },  
          "type": String, 
        },  
        "type": String, 
      },  
      "type": String, 
    },  
    "type": String, 
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

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options

apiInstance.postGroupsSearch(body)
  .then((data) => {
    console.log(`postGroupsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGroupsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
{: class="table table-striped"}

### Return type

**GroupsSearchResponse**

<a name="postLocationsSearch"></a>

# LocationsSearchResponse postLocationsSearch(body)



POST /api/v2/locations/search

Search locations



Requires NO permissions: 



### Request Body Schema

<script type="text/javascript">
	function copyLocationSearchRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#LocationSearchRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

LocationSearchRequest <a href="#" onclick="return copyLocationSearchRequestExample()">Copy</a>

<div id="LocationSearchRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "sortOrder": String, 
  "sortBy": String, 
  "pageSize": Number, 
  "pageNumber": Number, 
  "sort": { 
    "sortOrder": String, 
    "sortBy": String, 
  },  
  "expand": [String], 
  "query": { 
    "endValue": String, 
    "values": [String], 
    "startValue": String, 
    "fields": [String], 
    "value": String, 
    "operator": String, 
    "group": { 
      "endValue": String, 
      "values": [String], 
      "startValue": String, 
      "fields": [String], 
      "value": String, 
      "operator": String, 
      "group": { 
        "endValue": String, 
        "values": [String], 
        "startValue": String, 
        "fields": [String], 
        "value": String, 
        "operator": String, 
        "group": { 
          "endValue": String, 
          "values": [String], 
          "startValue": String, 
          "fields": [String], 
          "value": String, 
          "operator": String, 
          "group": { 
            "endValue": String, 
            "values": [String], 
            "startValue": String, 
            "fields": [String], 
            "value": String, 
            "operator": String, 
            "group": { 
              "endValue": String, 
              "values": [String], 
              "startValue": String, 
              "fields": [String], 
              "value": String, 
              "operator": String, 
              "group": { 
                "endValue": String, 
                "values": [String], 
                "startValue": String, 
                "fields": [String], 
                "value": String, 
                "operator": String, 
                "group": [LocationSearchCriteria], 
                "type": String, 
              },  
              "type": String, 
            },  
            "type": String, 
          },  
          "type": String, 
        },  
        "type": String, 
      },  
      "type": String, 
    },  
    "type": String, 
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

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options

apiInstance.postLocationsSearch(body)
  .then((data) => {
    console.log(`postLocationsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLocationsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
{: class="table table-striped"}

### Return type

**LocationsSearchResponse**

<a name="postSearch"></a>

# JsonNodeSearchResponse postSearch(body, opts)



POST /api/v2/search

Search resources.



Requires NO permissions: 



### Request Body Schema

<script type="text/javascript">
	function copySearchRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#SearchRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

SearchRequest <a href="#" onclick="return copySearchRequestExample()">Copy</a>

<div id="SearchRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "sortOrder": String, 
  "sortBy": String, 
  "pageSize": Number, 
  "pageNumber": Number, 
  "sort": { 
    "sortOrder": String, 
    "sortBy": String, 
  },  
  "returnFields": [String], 
  "expand": [String], 
  "types": [String], 
  "query": { 
    "endValue": String, 
    "values": [String], 
    "startValue": String, 
    "fields": [String], 
    "value": String, 
    "operator": String, 
    "group": { 
      "endValue": String, 
      "values": [String], 
      "startValue": String, 
      "fields": [String], 
      "value": String, 
      "operator": String, 
      "group": { 
        "endValue": String, 
        "values": [String], 
        "startValue": String, 
        "fields": [String], 
        "value": String, 
        "operator": String, 
        "group": { 
          "endValue": String, 
          "values": [String], 
          "startValue": String, 
          "fields": [String], 
          "value": String, 
          "operator": String, 
          "group": { 
            "endValue": String, 
            "values": [String], 
            "startValue": String, 
            "fields": [String], 
            "value": String, 
            "operator": String, 
            "group": { 
              "endValue": String, 
              "values": [String], 
              "startValue": String, 
              "fields": [String], 
              "value": String, 
              "operator": String, 
              "group": { 
                "endValue": String, 
                "values": [String], 
                "startValue": String, 
                "fields": [String], 
                "value": String, 
                "operator": String, 
                "group": [SearchCriteria], 
                "type": String, 
              },  
              "type": String, 
            },  
            "type": String, 
          },  
          "type": String, 
        },  
        "type": String, 
      },  
      "type": String, 
    },  
    "type": String, 
  },  
  "aggregations": { 
    "field": String, 
    "name": String, 
    "type": String, 
    "value": String, 
    "size": Number, 
    "order": [String], 
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

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options
let opts = { 
  'profile': true // Boolean | profile
};

apiInstance.postSearch(body, opts)
  .then((data) => {
    console.log(`postSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
 **profile** | **Boolean** | profile | [optional] [default to true] |
{: class="table table-striped"}

### Return type

**JsonNodeSearchResponse**

<a name="postSearchSuggest"></a>

# JsonNodeSearchResponse postSearchSuggest(body, opts)



POST /api/v2/search/suggest

Suggest resources.



Requires NO permissions: 



### Request Body Schema

<script type="text/javascript">
	function copySuggestSearchRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#SuggestSearchRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

SuggestSearchRequest <a href="#" onclick="return copySuggestSearchRequestExample()">Copy</a>

<div id="SuggestSearchRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "expand": [String], 
  "types": [String], 
  "query": { 
    "endValue": String, 
    "values": [String], 
    "startValue": String, 
    "fields": [String], 
    "value": String, 
    "operator": String, 
    "group": { 
      "endValue": String, 
      "values": [String], 
      "startValue": String, 
      "fields": [String], 
      "value": String, 
      "operator": String, 
      "group": { 
        "endValue": String, 
        "values": [String], 
        "startValue": String, 
        "fields": [String], 
        "value": String, 
        "operator": String, 
        "group": { 
          "endValue": String, 
          "values": [String], 
          "startValue": String, 
          "fields": [String], 
          "value": String, 
          "operator": String, 
          "group": { 
            "endValue": String, 
            "values": [String], 
            "startValue": String, 
            "fields": [String], 
            "value": String, 
            "operator": String, 
            "group": { 
              "endValue": String, 
              "values": [String], 
              "startValue": String, 
              "fields": [String], 
              "value": String, 
              "operator": String, 
              "group": { 
                "endValue": String, 
                "values": [String], 
                "startValue": String, 
                "fields": [String], 
                "value": String, 
                "operator": String, 
                "group": [SuggestSearchCriteria], 
              },  
            },  
          },  
        },  
      },  
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

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options
let opts = { 
  'profile': true // Boolean | profile
};

apiInstance.postSearchSuggest(body, opts)
  .then((data) => {
    console.log(`postSearchSuggest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSearchSuggest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
 **profile** | **Boolean** | profile | [optional] [default to true] |
{: class="table table-striped"}

### Return type

**JsonNodeSearchResponse**

<a name="postUsersSearch"></a>

# UsersSearchResponse postUsersSearch(body)



POST /api/v2/users/search

Search users



Requires NO permissions: 



### Request Body Schema

<script type="text/javascript">
	function copyUserSearchRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#UserSearchRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

UserSearchRequest <a href="#" onclick="return copyUserSearchRequestExample()">Copy</a>

<div id="UserSearchRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "sortOrder": String, 
  "sortBy": String, 
  "pageSize": Number, 
  "pageNumber": Number, 
  "sort": { 
    "sortOrder": String, 
    "sortBy": String, 
  },  
  "expand": [String], 
  "query": { 
    "endValue": String, 
    "values": [String], 
    "startValue": String, 
    "fields": [String], 
    "value": String, 
    "operator": String, 
    "group": { 
      "endValue": String, 
      "values": [String], 
      "startValue": String, 
      "fields": [String], 
      "value": String, 
      "operator": String, 
      "group": { 
        "endValue": String, 
        "values": [String], 
        "startValue": String, 
        "fields": [String], 
        "value": String, 
        "operator": String, 
        "group": { 
          "endValue": String, 
          "values": [String], 
          "startValue": String, 
          "fields": [String], 
          "value": String, 
          "operator": String, 
          "group": { 
            "endValue": String, 
            "values": [String], 
            "startValue": String, 
            "fields": [String], 
            "value": String, 
            "operator": String, 
            "group": { 
              "endValue": String, 
              "values": [String], 
              "startValue": String, 
              "fields": [String], 
              "value": String, 
              "operator": String, 
              "group": { 
                "endValue": String, 
                "values": [String], 
                "startValue": String, 
                "fields": [String], 
                "value": String, 
                "operator": String, 
                "group": [UserSearchCriteria], 
                "type": String, 
              },  
              "type": String, 
            },  
            "type": String, 
          },  
          "type": String, 
        },  
        "type": String, 
      },  
      "type": String, 
    },  
    "type": String, 
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

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options

apiInstance.postUsersSearch(body)
  .then((data) => {
    console.log(`postUsersSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUsersSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
{: class="table table-striped"}

### Return type

**UsersSearchResponse**

<a name="postVoicemailSearch"></a>

# VoicemailsSearchResponse postVoicemailSearch(body)



POST /api/v2/voicemail/search

Search voicemails



Requires NO permissions: 



### Request Body Schema

<script type="text/javascript">
	function copyVoicemailSearchRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#VoicemailSearchRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

VoicemailSearchRequest <a href="#" onclick="return copyVoicemailSearchRequestExample()">Copy</a>

<div id="VoicemailSearchRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "sortOrder": String, 
  "sortBy": String, 
  "pageSize": Number, 
  "pageNumber": Number, 
  "sort": { 
    "sortOrder": String, 
    "sortBy": String, 
  },  
  "expand": [String], 
  "query": { 
    "endValue": String, 
    "values": [String], 
    "startValue": String, 
    "fields": [String], 
    "value": String, 
    "operator": String, 
    "group": { 
      "endValue": String, 
      "values": [String], 
      "startValue": String, 
      "fields": [String], 
      "value": String, 
      "operator": String, 
      "group": { 
        "endValue": String, 
        "values": [String], 
        "startValue": String, 
        "fields": [String], 
        "value": String, 
        "operator": String, 
        "group": { 
          "endValue": String, 
          "values": [String], 
          "startValue": String, 
          "fields": [String], 
          "value": String, 
          "operator": String, 
          "group": { 
            "endValue": String, 
            "values": [String], 
            "startValue": String, 
            "fields": [String], 
            "value": String, 
            "operator": String, 
            "group": { 
              "endValue": String, 
              "values": [String], 
              "startValue": String, 
              "fields": [String], 
              "value": String, 
              "operator": String, 
              "group": { 
                "endValue": String, 
                "values": [String], 
                "startValue": String, 
                "fields": [String], 
                "value": String, 
                "operator": String, 
                "group": [VoicemailSearchCriteria], 
                "type": String, 
              },  
              "type": String, 
            },  
            "type": String, 
          },  
          "type": String, 
        },  
        "type": String, 
      },  
      "type": String, 
    },  
    "type": String, 
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

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options

apiInstance.postVoicemailSearch(body)
  .then((data) => {
    console.log(`postVoicemailSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postVoicemailSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
{: class="table table-striped"}

### Return type

**VoicemailsSearchResponse**

