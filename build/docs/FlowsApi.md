---
title: FlowsApi
---
# platformClient.FlowsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**postAnalyticsFlowsAggregatesQuery**](FlowsApi.html#postAnalyticsFlowsAggregatesQuery) | **POST** /api/v2/analytics/flows/aggregates/query | Query for flow aggregates
{: class="table table-striped"}

<a name="postAnalyticsFlowsAggregatesQuery"></a>

# AggregateQueryResponse postAnalyticsFlowsAggregatesQuery(body)



POST /api/v2/analytics/flows/aggregates/query

Query for flow aggregates



Requires ANY permissions: 

* analytics:flowAggregate:view


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyAggregationQueryExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#AggregationQueryExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

AggregationQuery <a style="cursor: pointer" onclick="copyAggregationQueryExample()">Copy</a>

<div id="AggregationQueryExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "interval": String, 
  "granularity": String, 
  "timeZone": String, 
  "groupBy": [String], 
  "filter": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "propertyType": String, 
        "property": String, 
        "metric": String, 
        "operator": String, 
        "value": String, 
        "range": { 
          "gt": Number, 
          "gte": Number, 
          "lt": Number, 
          "lte": Number, 
        },  
      },  
    },  
    "predicates": { 
      "type": String, 
      "dimension": String, 
      "propertyType": String, 
      "property": String, 
      "metric": String, 
      "operator": String, 
      "value": String, 
      "range": { 
        "gt": Number, 
        "gte": Number, 
        "lt": Number, 
        "lte": Number, 
      },  
    },  
  },  
  "metrics": [String], 
  "flattenMultivaluedDimensions": Boolean, 
  "views": { 
    "target": String, 
    "name": String, 
    "function": String, 
    "range": { 
      "gte": Number, 
      "lt": Number, 
    },  
  },  
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

var apiInstance = new platformClient.FlowsApi();

var body = {}; // Object | query

apiInstance.postAnalyticsFlowsAggregatesQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsFlowsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAnalyticsFlowsAggregatesQuery');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**AggregateQueryResponse**

