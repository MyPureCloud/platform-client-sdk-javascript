---
title: SuggestApi
---
# platformClient.SuggestApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getSearch**](SuggestApi.html#getSearch) | **GET** /api/v2/search | Search using the q64 value returned from a previous search.
[**getSearchSuggest**](SuggestApi.html#getSearchSuggest) | **GET** /api/v2/search/suggest | Suggest resources using the q64 value returned from a previous suggest query.
[**postSearch**](SuggestApi.html#postSearch) | **POST** /api/v2/search | Search resources.
[**postSearchSuggest**](SuggestApi.html#postSearchSuggest) | **POST** /api/v2/search/suggest | Suggest resources.
{: class="table table-striped"}

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

let apiInstance = new platformClient.SuggestApi();

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
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, authorization.unusedRoles, team, profileSkills, certifications, locations, groups, skills, languages, languagePreference, employerInfo, biography, callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation, images, addressVerificationDetails |
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

let apiInstance = new platformClient.SuggestApi();

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
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, authorization.unusedRoles, team, profileSkills, certifications, locations, groups, skills, languages, languagePreference, employerInfo, biography, callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation, images, addressVerificationDetails |
 **profile** | **Boolean** | profile | [optional] [default to true] |
{: class="table table-striped"}

### Return type

**JsonNodeSearchResponse**

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
                "dateFormat": String, 
                "type": String, 
              },  
              "dateFormat": String, 
              "type": String, 
            },  
            "dateFormat": String, 
            "type": String, 
          },  
          "dateFormat": String, 
          "type": String, 
        },  
        "dateFormat": String, 
        "type": String, 
      },  
      "dateFormat": String, 
      "type": String, 
    },  
    "dateFormat": String, 
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

let apiInstance = new platformClient.SuggestApi();

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
                "dateFormat": String, 
              },  
              "dateFormat": String, 
            },  
            "dateFormat": String, 
          },  
          "dateFormat": String, 
        },  
        "dateFormat": String, 
      },  
      "dateFormat": String, 
    },  
    "dateFormat": String, 
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

let apiInstance = new platformClient.SuggestApi();

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

