---
title: LanguagesApi
---
# platformClient.LanguagesApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteLanguage**](LanguagesApi.html#deleteLanguage) | **DELETE** /api/v2/languages/{languageId} | Delete Language (Deprecated)
[**deleteRoutingLanguage**](LanguagesApi.html#deleteRoutingLanguage) | **DELETE** /api/v2/routing/languages/{languageId} | Delete Language
[**getLanguage**](LanguagesApi.html#getLanguage) | **GET** /api/v2/languages/{languageId} | Get language (Deprecated)
[**getLanguages**](LanguagesApi.html#getLanguages) | **GET** /api/v2/languages | Get the list of supported languages. (Deprecated)
[**getLanguagesTranslations**](LanguagesApi.html#getLanguagesTranslations) | **GET** /api/v2/languages/translations | Get all available languages for translation
[**getLanguagesTranslationsBuiltin**](LanguagesApi.html#getLanguagesTranslationsBuiltin) | **GET** /api/v2/languages/translations/builtin | Get the builtin translation for a language
[**getLanguagesTranslationsOrganization**](LanguagesApi.html#getLanguagesTranslationsOrganization) | **GET** /api/v2/languages/translations/organization | Get effective translation for an organization by language
[**getLanguagesTranslationsUser**](LanguagesApi.html#getLanguagesTranslationsUser) | **GET** /api/v2/languages/translations/users/{userId} | Get effective language translation for a user
[**getRoutingLanguage**](LanguagesApi.html#getRoutingLanguage) | **GET** /api/v2/routing/languages/{languageId} | Get language
[**postLanguages**](LanguagesApi.html#postLanguages) | **POST** /api/v2/languages | Create Language (Deprecated)
{: class="table table-striped"}

<a name="deleteLanguage"></a>

# void deleteLanguage(languageId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

DELETE /api/v2/languages/{languageId}

Delete Language (Deprecated)

This endpoint is deprecated. It has been moved to /routing/languages/{languageId}

Requires ANY permissions: 

* routing:skill:manage



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguagesApi();

let languageId = "languageId_example"; // String | Language ID

apiInstance.deleteLanguage(languageId)
  .then(() => {
    console.log('deleteLanguage returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteLanguage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **languageId** | **String** | Language ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingLanguage"></a>

# void deleteRoutingLanguage(languageId)



DELETE /api/v2/routing/languages/{languageId}

Delete Language



Requires ANY permissions: 

* routing:skill:manage



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguagesApi();

let languageId = "languageId_example"; // String | Language ID

apiInstance.deleteRoutingLanguage(languageId)
  .then(() => {
    console.log('deleteRoutingLanguage returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingLanguage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **languageId** | **String** | Language ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getLanguage"></a>

# Language getLanguage(languageId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/languages/{languageId}

Get language (Deprecated)

This endpoint is deprecated. It has been moved to /routing/languages/{languageId}

Requires ANY permissions: 

* routing:skill:manage



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguagesApi();

let languageId = "languageId_example"; // String | Language ID

apiInstance.getLanguage(languageId)
  .then((data) => {
    console.log(`getLanguage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **languageId** | **String** | Language ID |  |
{: class="table table-striped"}

### Return type

**Language**

<a name="getLanguages"></a>

# LanguageEntityListing getLanguages(opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/languages

Get the list of supported languages. (Deprecated)

This endpoint is deprecated. It has been moved to /routing/languages

Requires ANY permissions: 

* routing:skill:manage



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguagesApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ASC", // String | Ascending or descending sort order
  'name': "name_example" // String | Name
};

apiInstance.getLanguages(opts)
  .then((data) => {
    console.log(`getLanguages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to ASC]<br />**Values**: ascending, descending |
 **name** | **String** | Name | [optional]  |
{: class="table table-striped"}

### Return type

**LanguageEntityListing**

<a name="getLanguagesTranslations"></a>

# AvailableTranslations getLanguagesTranslations()



GET /api/v2/languages/translations

Get all available languages for translation



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguagesApi();

apiInstance.getLanguagesTranslations()
  .then((data) => {
    console.log(`getLanguagesTranslations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguagesTranslations');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**AvailableTranslations**

<a name="getLanguagesTranslationsBuiltin"></a>

# **{&#39;String&#39;: Object}** getLanguagesTranslationsBuiltin(language)



GET /api/v2/languages/translations/builtin

Get the builtin translation for a language



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguagesApi();

let language = "language_example"; // String | The language of the builtin translation to retrieve

apiInstance.getLanguagesTranslationsBuiltin(language)
  .then((data) => {
    console.log(`getLanguagesTranslationsBuiltin success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguagesTranslationsBuiltin');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **language** | **String** | The language of the builtin translation to retrieve |  |
{: class="table table-striped"}

### Return type

**{&#39;String&#39;: Object}**

<a name="getLanguagesTranslationsOrganization"></a>

# **{&#39;String&#39;: Object}** getLanguagesTranslationsOrganization(language)



GET /api/v2/languages/translations/organization

Get effective translation for an organization by language



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguagesApi();

let language = "language_example"; // String | The language of the translation to retrieve for the organization

apiInstance.getLanguagesTranslationsOrganization(language)
  .then((data) => {
    console.log(`getLanguagesTranslationsOrganization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguagesTranslationsOrganization');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **language** | **String** | The language of the translation to retrieve for the organization |  |
{: class="table table-striped"}

### Return type

**{&#39;String&#39;: Object}**

<a name="getLanguagesTranslationsUser"></a>

# **{&#39;String&#39;: Object}** getLanguagesTranslationsUser(userId)



GET /api/v2/languages/translations/users/{userId}

Get effective language translation for a user



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguagesApi();

let userId = "userId_example"; // String | The user id

apiInstance.getLanguagesTranslationsUser(userId)
  .then((data) => {
    console.log(`getLanguagesTranslationsUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguagesTranslationsUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | The user id |  |
{: class="table table-striped"}

### Return type

**{&#39;String&#39;: Object}**

<a name="getRoutingLanguage"></a>

# Language getRoutingLanguage(languageId)



GET /api/v2/routing/languages/{languageId}

Get language



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguagesApi();

let languageId = "languageId_example"; // String | Language ID

apiInstance.getRoutingLanguage(languageId)
  .then((data) => {
    console.log(`getRoutingLanguage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingLanguage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **languageId** | **String** | Language ID |  |
{: class="table table-striped"}

### Return type

**Language**

<a name="postLanguages"></a>

# Language postLanguages(body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/languages

Create Language (Deprecated)

This endpoint is deprecated. It has been moved to /routing/languages

Requires ANY permissions: 

* routing:skill:manage


### Request Body Schema

<script type="text/javascript">
	function copyLanguageExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#LanguageExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

Language <a href="#" onclick="return copyLanguageExample()">Copy</a>

<div id="LanguageExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "dateModified": Date, 
  "state": String, 
  "version": String, 
  "selfUri": String, 
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

let apiInstance = new platformClient.LanguagesApi();

let body = {}; // Object | Language

apiInstance.postLanguages(body)
  .then((data) => {
    console.log(`postLanguages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLanguages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Language |  |
{: class="table table-striped"}

### Return type

**Language**

