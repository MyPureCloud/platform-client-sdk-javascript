---
title: AppFoundryApi
---
# platformClient.AppFoundryApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getAppfoundryPlatformNameCategories**](AppFoundryApi.html#getAppfoundryPlatformNameCategories) | **GET** /api/v2/appfoundry/{platformName}/categories | Return a structured hierarchy of available listing categories
[**getAppfoundryPlatformNameCategory**](AppFoundryApi.html#getAppfoundryPlatformNameCategory) | **GET** /api/v2/appfoundry/{platformName}/categories/{categoryName} | Get listings that are part of the specified root category or a contained subcategory
[**getAppfoundryPlatformNameCategorySubCategoryName**](AppFoundryApi.html#getAppfoundryPlatformNameCategorySubCategoryName) | **GET** /api/v2/appfoundry/{platformName}/categories/{categoryName}/{subCategoryName} | Get listings that are part of the specified subcategory
{: class="table table-striped"}

<a name="getAppfoundryPlatformNameCategories"></a>

# [AppFoundryListingCategory] getAppfoundryPlatformNameCategories(platformName)

GET /api/v2/appfoundry/{platformName}/categories

Return a structured hierarchy of available listing categories



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AppFoundryApi();

var platformName = "platformName_example"; // String | 

apiInstance.getAppfoundryPlatformNameCategories(platformName)
  .then(function(data) {
    console.log(`getAppfoundryPlatformNameCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAppfoundryPlatformNameCategories');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **platformName** | **String** |  |  |
{: class="table table-striped"}

### Return type

**[AppFoundryListingCategory]**

<a name="getAppfoundryPlatformNameCategory"></a>

# PagedListingEntity getAppfoundryPlatformNameCategory(platformName, categoryName, opts)

GET /api/v2/appfoundry/{platformName}/categories/{categoryName}

Get listings that are part of the specified root category or a contained subcategory



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AppFoundryApi();

var platformName = "platformName_example"; // String | 

var categoryName = "categoryName_example"; // String | Name of category to request listings from

var opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': null, // [Object] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example" // String | Previous page token
};
apiInstance.getAppfoundryPlatformNameCategory(platformName, categoryName, opts)
  .then(function(data) {
    console.log(`getAppfoundryPlatformNameCategory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAppfoundryPlatformNameCategory');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **platformName** | **String** |  |  |
 **categoryName** | **String** | Name of category to request listings from |  |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[Object]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
{: class="table table-striped"}

### Return type

**PagedListingEntity**

<a name="getAppfoundryPlatformNameCategorySubCategoryName"></a>

# PagedListingEntity getAppfoundryPlatformNameCategorySubCategoryName(platformName, categoryName, subCategoryName, opts)

GET /api/v2/appfoundry/{platformName}/categories/{categoryName}/{subCategoryName}

Get listings that are part of the specified subcategory



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AppFoundryApi();

var platformName = "platformName_example"; // String | 

var categoryName = "categoryName_example"; // String | Name of category to request listings from

var subCategoryName = "subCategoryName_example"; // String | Name of subcategory to request listings from

var opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': null, // [Object] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example" // String | Previous page token
};
apiInstance.getAppfoundryPlatformNameCategorySubCategoryName(platformName, categoryName, subCategoryName, opts)
  .then(function(data) {
    console.log(`getAppfoundryPlatformNameCategorySubCategoryName success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAppfoundryPlatformNameCategorySubCategoryName');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **platformName** | **String** |  |  |
 **categoryName** | **String** | Name of category to request listings from |  |
 **subCategoryName** | **String** | Name of subcategory to request listings from |  |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[Object]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
{: class="table table-striped"}

### Return type

**PagedListingEntity**

