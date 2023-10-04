---
title: MarketplaceApi
---
# platformClient.MarketplaceApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteMarketplaceAdAdType**](MarketplaceApi.html#deleteMarketplaceAdAdType) | **DELETE** /api/v2/marketplace/ads/{platformName}/{adType} | Delete ad with specified platform and ad type
[**deleteMarketplaceDocument**](MarketplaceApi.html#deleteMarketplaceDocument) | **DELETE** /api/v2/marketplace/documents/{documentId} | Delete document with specified ID
[**deleteMarketplaceDocumentsNavigation**](MarketplaceApi.html#deleteMarketplaceDocumentsNavigation) | **DELETE** /api/v2/marketplace/documents/navigations/{navigationId} | Delete document navigation with specified ID
[**deleteMarketplaceEnterpriseagreement**](MarketplaceApi.html#deleteMarketplaceEnterpriseagreement) | **DELETE** /api/v2/marketplace/enterpriseagreements/{enterpriseAgreementId} | Delete an existing enterprise agreement
[**deleteMarketplaceListing**](MarketplaceApi.html#deleteMarketplaceListing) | **DELETE** /api/v2/marketplace/listings/{listingId} | Delete listing with specified ID
[**deleteMarketplaceListingMedia**](MarketplaceApi.html#deleteMarketplaceListingMedia) | **DELETE** /api/v2/marketplace/listings/{listingId}/media | Delete all media files and update listing
[**deleteMarketplaceListingMediaFileName**](MarketplaceApi.html#deleteMarketplaceListingMediaFileName) | **DELETE** /api/v2/marketplace/listings/{listingId}/media/{fileName} | Delete media file and update listing.
[**deleteMarketplacePartner**](MarketplaceApi.html#deleteMarketplacePartner) | **DELETE** /api/v2/marketplace/partners/{partnerId} | Delete existing partner
[**deleteMarketplaceResellersPartner**](MarketplaceApi.html#deleteMarketplaceResellersPartner) | **DELETE** /api/v2/marketplace/resellers/partners/{partnerId} | Delete existing reseller by partnerId
[**getMarketplaceAd**](MarketplaceApi.html#getMarketplaceAd) | **GET** /api/v2/marketplace/ads/{platformName} | Return ads for a specific platform
[**getMarketplaceAds**](MarketplaceApi.html#getMarketplaceAds) | **GET** /api/v2/marketplace/ads | Retrieves all ads
[**getMarketplaceCategories**](MarketplaceApi.html#getMarketplaceCategories) | **GET** /api/v2/marketplace/categories | Return a structured hierarchy of available listing categories
[**getMarketplaceDocument**](MarketplaceApi.html#getMarketplaceDocument) | **GET** /api/v2/marketplace/documents/{documentId} | Retrieves a document by Id
[**getMarketplaceDocuments**](MarketplaceApi.html#getMarketplaceDocuments) | **GET** /api/v2/marketplace/documents | Retrieves all documents 
[**getMarketplaceDocumentsNavigation**](MarketplaceApi.html#getMarketplaceDocumentsNavigation) | **GET** /api/v2/marketplace/documents/navigations/{navigationId} | Retrieves a document navigation by Id
[**getMarketplaceDocumentsNavigations**](MarketplaceApi.html#getMarketplaceDocumentsNavigations) | **GET** /api/v2/marketplace/documents/navigations | Retrieves all document navigations
[**getMarketplaceEnterpriseagreement**](MarketplaceApi.html#getMarketplaceEnterpriseagreement) | **GET** /api/v2/marketplace/enterpriseagreements/{enterpriseAgreementId} | Retrieve an enterprise agreement by Id
[**getMarketplaceListing**](MarketplaceApi.html#getMarketplaceListing) | **GET** /api/v2/marketplace/listings/{listingId} | Return listing with specified ID
[**getMarketplaceListings**](MarketplaceApi.html#getMarketplaceListings) | **GET** /api/v2/marketplace/listings | Retrieves all listings associated with filters passed in via query param.
[**getMarketplaceListingsVendor**](MarketplaceApi.html#getMarketplaceListingsVendor) | **GET** /api/v2/marketplace/listings/vendors/{vendorId} | Return listings with specified Vendor ID
[**getMarketplacePartner**](MarketplaceApi.html#getMarketplacePartner) | **GET** /api/v2/marketplace/partners/{partnerId} | Retrieves a partner by id
[**getMarketplacePartnerOrganization**](MarketplaceApi.html#getMarketplacePartnerOrganization) | **GET** /api/v2/marketplace/partners/{partnerType}/organizations/{organizationId} | Retrieves a partner by org id and partner type
[**getMarketplacePartners**](MarketplaceApi.html#getMarketplacePartners) | **GET** /api/v2/marketplace/partners | Retrieves all partners
[**getMarketplacePartnersSearch**](MarketplaceApi.html#getMarketplacePartnersSearch) | **GET** /api/v2/marketplace/partners/search | Retrieves partners by a search term
[**getMarketplaceReseller**](MarketplaceApi.html#getMarketplaceReseller) | **GET** /api/v2/marketplace/resellers/{resellerId} | Retrieves a reseller by Id
[**getMarketplaceResellers**](MarketplaceApi.html#getMarketplaceResellers) | **GET** /api/v2/marketplace/resellers | Retrieves all resellers across all organizations.
[**getMarketplaceResellersOrganization**](MarketplaceApi.html#getMarketplaceResellersOrganization) | **GET** /api/v2/marketplace/resellers/organizations/{organizationId} | Retrieves all resellers for the specified organization.
[**getMarketplaceReview**](MarketplaceApi.html#getMarketplaceReview) | **GET** /api/v2/marketplace/reviews/{reviewId} | Retrieves a review by Id
[**patchMarketplaceAdAdTypeTargeturl**](MarketplaceApi.html#patchMarketplaceAdAdTypeTargeturl) | **PATCH** /api/v2/marketplace/ads/{platformName}/{adType}/targeturl | Update the target url for an ad
[**patchMarketplaceListing**](MarketplaceApi.html#patchMarketplaceListing) | **PATCH** /api/v2/marketplace/listings/{listingId} | Update listing with specified ID
[**postMarketplaceAdAdType**](MarketplaceApi.html#postMarketplaceAdAdType) | **POST** /api/v2/marketplace/ads/{platformName}/{adType} | Create an ad
[**postMarketplaceDocuments**](MarketplaceApi.html#postMarketplaceDocuments) | **POST** /api/v2/marketplace/documents | Create a document
[**postMarketplaceDocumentsImage**](MarketplaceApi.html#postMarketplaceDocumentsImage) | **POST** /api/v2/marketplace/documents/images/{documentId} | Creates a presigned url for uploading images for documents
[**postMarketplaceDocumentsNavigations**](MarketplaceApi.html#postMarketplaceDocumentsNavigations) | **POST** /api/v2/marketplace/documents/navigations | Create a documentation navigation
[**postMarketplaceDocumentsSearch**](MarketplaceApi.html#postMarketplaceDocumentsSearch) | **POST** /api/v2/marketplace/documents/search | Retrieves document by a search term
[**postMarketplaceEnterpriseagreements**](MarketplaceApi.html#postMarketplaceEnterpriseagreements) | **POST** /api/v2/marketplace/enterpriseagreements | Create an enterprise agreement
[**postMarketplaceEnterpriseagreementsSearch**](MarketplaceApi.html#postMarketplaceEnterpriseagreementsSearch) | **POST** /api/v2/marketplace/enterpriseagreements/search | Search for an enterprise agreement by a search term
[**postMarketplaceListings**](MarketplaceApi.html#postMarketplaceListings) | **POST** /api/v2/marketplace/listings | Create a listing
[**postMarketplaceListingsSearch**](MarketplaceApi.html#postMarketplaceListingsSearch) | **POST** /api/v2/marketplace/listings/search | Search for listing matching specified filters and terms
[**postMarketplacePartners**](MarketplaceApi.html#postMarketplacePartners) | **POST** /api/v2/marketplace/partners | Creates a partner
[**postMarketplaceResellersListings**](MarketplaceApi.html#postMarketplaceResellersListings) | **POST** /api/v2/marketplace/resellers/listings | Returns the listing type for the specified partner and listing id.
[**postMarketplaceResellersOrganization**](MarketplaceApi.html#postMarketplaceResellersOrganization) | **POST** /api/v2/marketplace/resellers/organizations/{organizationId} | Creates resellers for an organization
[**putMarketplaceDocument**](MarketplaceApi.html#putMarketplaceDocument) | **PUT** /api/v2/marketplace/documents/{documentId} | Update a document with specified ID
[**putMarketplaceDocumentsNavigation**](MarketplaceApi.html#putMarketplaceDocumentsNavigation) | **PUT** /api/v2/marketplace/documents/navigations/{navigationId} | Update document navigation with specified ID
[**putMarketplaceEnterpriseagreement**](MarketplaceApi.html#putMarketplaceEnterpriseagreement) | **PUT** /api/v2/marketplace/enterpriseagreements/{enterpriseAgreementId} | Update an existing enterprise agreement
[**putMarketplaceListingCategories**](MarketplaceApi.html#putMarketplaceListingCategories) | **PUT** /api/v2/marketplace/listings/{listingId}/categories | Set categories on listing
[**putMarketplaceListingMediaOrder**](MarketplaceApi.html#putMarketplaceListingMediaOrder) | **PUT** /api/v2/marketplace/listings/{listingId}/media/order | Set the order of media on the listing
[**putMarketplaceListingMetadata**](MarketplaceApi.html#putMarketplaceListingMetadata) | **PUT** /api/v2/marketplace/listings/{listingId}/metadata | Set metadata on listing
[**putMarketplacePartner**](MarketplaceApi.html#putMarketplacePartner) | **PUT** /api/v2/marketplace/partners/{partnerId} | Update a partner
[**putMarketplaceResellersOrganization**](MarketplaceApi.html#putMarketplaceResellersOrganization) | **PUT** /api/v2/marketplace/resellers/organizations/{organizationId} | Update all existing resellers for an organization
{: class="table table-striped"}

<a name="deleteMarketplaceAdAdType"></a>

# void deleteMarketplaceAdAdType(platformName, adType)


DELETE /api/v2/marketplace/ads/{platformName}/{adType}

Delete ad with specified platform and ad type

Requires ANY permissions:

* appFoundry:listing:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let platformName = "platformName_example"; // String | 
let adType = "adType_example"; // String | 

apiInstance.deleteMarketplaceAdAdType(platformName, adType)
  .then(() => {
    console.log('deleteMarketplaceAdAdType returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMarketplaceAdAdType');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **platformName** | **String** |  |  |
 **adType** | **String** |  | <br />**Values**: featured, sidebar |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteMarketplaceDocument"></a>

# void deleteMarketplaceDocument(documentId)


DELETE /api/v2/marketplace/documents/{documentId}

Delete document with specified ID

Requires ANY permissions:

* appFoundry:document:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let documentId = "documentId_example"; // String | 

apiInstance.deleteMarketplaceDocument(documentId)
  .then(() => {
    console.log('deleteMarketplaceDocument returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMarketplaceDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** |  |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteMarketplaceDocumentsNavigation"></a>

# void deleteMarketplaceDocumentsNavigation(navigationId)


DELETE /api/v2/marketplace/documents/navigations/{navigationId}

Delete document navigation with specified ID

Requires ANY permissions:

* appFoundry:document:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let navigationId = "navigationId_example"; // String | 

apiInstance.deleteMarketplaceDocumentsNavigation(navigationId)
  .then(() => {
    console.log('deleteMarketplaceDocumentsNavigation returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMarketplaceDocumentsNavigation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **navigationId** | **String** |  |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteMarketplaceEnterpriseagreement"></a>

# EnterpriseAgreement deleteMarketplaceEnterpriseagreement(enterpriseAgreementId)


DELETE /api/v2/marketplace/enterpriseagreements/{enterpriseAgreementId}

Delete an existing enterprise agreement

Requires ANY permissions:

* billing:enterpriseAgreement:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let enterpriseAgreementId = "enterpriseAgreementId_example"; // String | The unique identifier for an enterprise agreement

apiInstance.deleteMarketplaceEnterpriseagreement(enterpriseAgreementId)
  .then((data) => {
    console.log(`deleteMarketplaceEnterpriseagreement success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMarketplaceEnterpriseagreement');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **enterpriseAgreementId** | **String** | The unique identifier for an enterprise agreement |  |
{: class="table table-striped"}

### Return type

**EnterpriseAgreement**

<a name="deleteMarketplaceListing"></a>

# void deleteMarketplaceListing(listingId)


DELETE /api/v2/marketplace/listings/{listingId}

Delete listing with specified ID

Requires ANY permissions:

* appFoundry:listing:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let listingId = "listingId_example"; // String | The unique identifier for a listing

apiInstance.deleteMarketplaceListing(listingId)
  .then(() => {
    console.log('deleteMarketplaceListing returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMarketplaceListing');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **listingId** | **String** | The unique identifier for a listing |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteMarketplaceListingMedia"></a>

# MarketplaceListing deleteMarketplaceListingMedia(listingId)


DELETE /api/v2/marketplace/listings/{listingId}/media

Delete all media files and update listing

Requires ANY permissions:

* appFoundry:listing:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let listingId = "listingId_example"; // String | 

apiInstance.deleteMarketplaceListingMedia(listingId)
  .then((data) => {
    console.log(`deleteMarketplaceListingMedia success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMarketplaceListingMedia');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **listingId** | **String** |  |  |
{: class="table table-striped"}

### Return type

**MarketplaceListing**

<a name="deleteMarketplaceListingMediaFileName"></a>

# MarketplaceListing deleteMarketplaceListingMediaFileName(listingId, fileName)


DELETE /api/v2/marketplace/listings/{listingId}/media/{fileName}

Delete media file and update listing.

Requires ANY permissions:

* appFoundry:listing:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let listingId = "listingId_example"; // String | 
let fileName = "fileName_example"; // String | 

apiInstance.deleteMarketplaceListingMediaFileName(listingId, fileName)
  .then((data) => {
    console.log(`deleteMarketplaceListingMediaFileName success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMarketplaceListingMediaFileName');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **listingId** | **String** |  |  |
 **fileName** | **String** |  |  |
{: class="table table-striped"}

### Return type

**MarketplaceListing**

<a name="deleteMarketplacePartner"></a>

# void deleteMarketplacePartner(partnerId)


DELETE /api/v2/marketplace/partners/{partnerId}

Delete existing partner

Requires ANY permissions:

* appFoundry:listing:manage
* appFoundry:vendor:delete
* appFoundry:reseller:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let partnerId = "partnerId_example"; // String | 

apiInstance.deleteMarketplacePartner(partnerId)
  .then(() => {
    console.log('deleteMarketplacePartner returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMarketplacePartner');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **partnerId** | **String** |  |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteMarketplaceResellersPartner"></a>

# void deleteMarketplaceResellersPartner(partnerId)


DELETE /api/v2/marketplace/resellers/partners/{partnerId}

Delete existing reseller by partnerId

Requires ANY permissions:

* appFoundry:resellerAssociations:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let partnerId = "partnerId_example"; // String | 

apiInstance.deleteMarketplaceResellersPartner(partnerId)
  .then(() => {
    console.log('deleteMarketplaceResellersPartner returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMarketplaceResellersPartner');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **partnerId** | **String** |  |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getMarketplaceAd"></a>

# PagedAdEntity getMarketplaceAd(platformName)


GET /api/v2/marketplace/ads/{platformName}

Return ads for a specific platform

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.MarketplaceApi();

let platformName = "platformName_example"; // String | 

apiInstance.getMarketplaceAd(platformName)
  .then((data) => {
    console.log(`getMarketplaceAd success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMarketplaceAd');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **platformName** | **String** |  |  |
{: class="table table-striped"}

### Return type

**PagedAdEntity**

<a name="getMarketplaceAds"></a>

# PagedAdEntity getMarketplaceAds()


GET /api/v2/marketplace/ads

Retrieves all ads

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.MarketplaceApi();

apiInstance.getMarketplaceAds()
  .then((data) => {
    console.log(`getMarketplaceAds success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMarketplaceAds');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**PagedAdEntity**

<a name="getMarketplaceCategories"></a>

# [MarketplaceListingCategory] getMarketplaceCategories()


GET /api/v2/marketplace/categories

Return a structured hierarchy of available listing categories

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.MarketplaceApi();

apiInstance.getMarketplaceCategories()
  .then((data) => {
    console.log(`getMarketplaceCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMarketplaceCategories');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**[MarketplaceListingCategory]**

<a name="getMarketplaceDocument"></a>

# MarketplaceDocument getMarketplaceDocument(documentId)


GET /api/v2/marketplace/documents/{documentId}

Retrieves a document by Id

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.MarketplaceApi();

let documentId = "documentId_example"; // String | 

apiInstance.getMarketplaceDocument(documentId)
  .then((data) => {
    console.log(`getMarketplaceDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMarketplaceDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** |  |  |
{: class="table table-striped"}

### Return type

**MarketplaceDocument**

<a name="getMarketplaceDocuments"></a>

# DocumentList getMarketplaceDocuments(opts)


GET /api/v2/marketplace/documents

Retrieves all documents 

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.MarketplaceApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getMarketplaceDocuments(opts)
  .then((data) => {
    console.log(`getMarketplaceDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMarketplaceDocuments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**DocumentList**

<a name="getMarketplaceDocumentsNavigation"></a>

# DocumentNavigation getMarketplaceDocumentsNavigation(navigationId)


GET /api/v2/marketplace/documents/navigations/{navigationId}

Retrieves a document navigation by Id

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.MarketplaceApi();

let navigationId = "navigationId_example"; // String | 

apiInstance.getMarketplaceDocumentsNavigation(navigationId)
  .then((data) => {
    console.log(`getMarketplaceDocumentsNavigation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMarketplaceDocumentsNavigation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **navigationId** | **String** |  |  |
{: class="table table-striped"}

### Return type

**DocumentNavigation**

<a name="getMarketplaceDocumentsNavigations"></a>

# DocumentNavigationList getMarketplaceDocumentsNavigations(opts)


GET /api/v2/marketplace/documents/navigations

Retrieves all document navigations

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.MarketplaceApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getMarketplaceDocumentsNavigations(opts)
  .then((data) => {
    console.log(`getMarketplaceDocumentsNavigations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMarketplaceDocumentsNavigations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**DocumentNavigationList**

<a name="getMarketplaceEnterpriseagreement"></a>

# EnterpriseAgreement getMarketplaceEnterpriseagreement(enterpriseAgreementId)


GET /api/v2/marketplace/enterpriseagreements/{enterpriseAgreementId}

Retrieve an enterprise agreement by Id

Requires ANY permissions:

* billing:enterpriseAgreement:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let enterpriseAgreementId = "enterpriseAgreementId_example"; // String | The unique identifier for an enterprise agreement

apiInstance.getMarketplaceEnterpriseagreement(enterpriseAgreementId)
  .then((data) => {
    console.log(`getMarketplaceEnterpriseagreement success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMarketplaceEnterpriseagreement');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **enterpriseAgreementId** | **String** | The unique identifier for an enterprise agreement |  |
{: class="table table-striped"}

### Return type

**EnterpriseAgreement**

<a name="getMarketplaceListing"></a>

# MarketplaceListing getMarketplaceListing(listingId)


GET /api/v2/marketplace/listings/{listingId}

Return listing with specified ID

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.MarketplaceApi();

let listingId = "listingId_example"; // String | The unique identifier for a listing

apiInstance.getMarketplaceListing(listingId)
  .then((data) => {
    console.log(`getMarketplaceListing success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMarketplaceListing');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **listingId** | **String** | The unique identifier for a listing |  |
{: class="table table-striped"}

### Return type

**MarketplaceListing**

<a name="getMarketplaceListings"></a>

# PagedListingEntity getMarketplaceListings(opts)


GET /api/v2/marketplace/listings

Retrieves all listings associated with filters passed in via query param.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.MarketplaceApi();

let opts = { 
  'category': "category_example", // String | 
  'subcategory': "subcategory_example", // String | 
  'platform': "platform_example", // String | 
  'brief': "brief_example", // String | Brief listing type
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example" // String | Previous page token
};

apiInstance.getMarketplaceListings(opts)
  .then((data) => {
    console.log(`getMarketplaceListings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMarketplaceListings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **category** | **String** |  | [optional]  |
 **subcategory** | **String** |  | [optional]  |
 **platform** | **String** |  | [optional]  |
 **brief** | **String** | Brief listing type | [optional] <br />**Values**: Overview, FedRamp |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
{: class="table table-striped"}

### Return type

**PagedListingEntity**

<a name="getMarketplaceListingsVendor"></a>

# PagedListingEntity getMarketplaceListingsVendor(vendorId)


GET /api/v2/marketplace/listings/vendors/{vendorId}

Return listings with specified Vendor ID

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.MarketplaceApi();

let vendorId = "vendorId_example"; // String | The unique identifier for the vendor associated with the listing

apiInstance.getMarketplaceListingsVendor(vendorId)
  .then((data) => {
    console.log(`getMarketplaceListingsVendor success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMarketplaceListingsVendor');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **vendorId** | **String** | The unique identifier for the vendor associated with the listing |  |
{: class="table table-striped"}

### Return type

**PagedListingEntity**

<a name="getMarketplacePartner"></a>

# Partner getMarketplacePartner(partnerId)


GET /api/v2/marketplace/partners/{partnerId}

Retrieves a partner by id

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.MarketplaceApi();

let partnerId = "partnerId_example"; // String | 

apiInstance.getMarketplacePartner(partnerId)
  .then((data) => {
    console.log(`getMarketplacePartner success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMarketplacePartner');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **partnerId** | **String** |  |  |
{: class="table table-striped"}

### Return type

**Partner**

<a name="getMarketplacePartnerOrganization"></a>

# Partner getMarketplacePartnerOrganization(partnerType, organizationId)


GET /api/v2/marketplace/partners/{partnerType}/organizations/{organizationId}

Retrieves a partner by org id and partner type

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.MarketplaceApi();

let partnerType = "partnerType_example"; // String | 
let organizationId = "organizationId_example"; // String | 

apiInstance.getMarketplacePartnerOrganization(partnerType, organizationId)
  .then((data) => {
    console.log(`getMarketplacePartnerOrganization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMarketplacePartnerOrganization');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **partnerType** | **String** |  | <br />**Values**: Reseller, Vendor |
 **organizationId** | **String** |  |  |
{: class="table table-striped"}

### Return type

**Partner**

<a name="getMarketplacePartners"></a>

# PartnerList getMarketplacePartners(opts)


GET /api/v2/marketplace/partners

Retrieves all partners

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.MarketplaceApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getMarketplacePartners(opts)
  .then((data) => {
    console.log(`getMarketplacePartners success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMarketplacePartners');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**PartnerList**

<a name="getMarketplacePartnersSearch"></a>

# PartnerList getMarketplacePartnersSearch(q)


GET /api/v2/marketplace/partners/search

Retrieves partners by a search term

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.MarketplaceApi();

let q = "q_example"; // String | Search query

apiInstance.getMarketplacePartnersSearch(q)
  .then((data) => {
    console.log(`getMarketplacePartnersSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMarketplacePartnersSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q** | **String** | Search query |  |
{: class="table table-striped"}

### Return type

**PartnerList**

<a name="getMarketplaceReseller"></a>

# Reseller getMarketplaceReseller(resellerId)


GET /api/v2/marketplace/resellers/{resellerId}

Retrieves a reseller by Id

Requires ANY permissions:

* appFoundry:resellerAssociations:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let resellerId = "resellerId_example"; // String | 

apiInstance.getMarketplaceReseller(resellerId)
  .then((data) => {
    console.log(`getMarketplaceReseller success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMarketplaceReseller');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **resellerId** | **String** |  |  |
{: class="table table-striped"}

### Return type

**Reseller**

<a name="getMarketplaceResellers"></a>

# **{&#39;String&#39;: [Reseller]}** getMarketplaceResellers()


GET /api/v2/marketplace/resellers

Retrieves all resellers across all organizations.

Requires ANY permissions:

* appFoundry:resellerAssociations:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

apiInstance.getMarketplaceResellers()
  .then((data) => {
    console.log(`getMarketplaceResellers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMarketplaceResellers');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**{&#39;String&#39;: [Reseller]}**

<a name="getMarketplaceResellersOrganization"></a>

# [Reseller] getMarketplaceResellersOrganization(organizationId)


GET /api/v2/marketplace/resellers/organizations/{organizationId}

Retrieves all resellers for the specified organization.

Requires ANY permissions:

* appFoundry:resellerAssociations:view
* appFoundry:reseller:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let organizationId = "organizationId_example"; // String | 

apiInstance.getMarketplaceResellersOrganization(organizationId)
  .then((data) => {
    console.log(`getMarketplaceResellersOrganization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMarketplaceResellersOrganization');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **organizationId** | **String** |  |  |
{: class="table table-striped"}

### Return type

**[Reseller]**

<a name="getMarketplaceReview"></a>

# MarketplaceReviews getMarketplaceReview(reviewId)


GET /api/v2/marketplace/reviews/{reviewId}

Retrieves a review by Id

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.MarketplaceApi();

let reviewId = "reviewId_example"; // String | 

apiInstance.getMarketplaceReview(reviewId)
  .then((data) => {
    console.log(`getMarketplaceReview success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMarketplaceReview');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **reviewId** | **String** |  |  |
{: class="table table-striped"}

### Return type

**MarketplaceReviews**

<a name="patchMarketplaceAdAdTypeTargeturl"></a>

# MarketplaceAd patchMarketplaceAdAdTypeTargeturl(platformName, adType, body)


PATCH /api/v2/marketplace/ads/{platformName}/{adType}/targeturl

Update the target url for an ad

Requires ANY permissions:

* appFoundry:listing:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let platformName = "platformName_example"; // String | 
let adType = "adType_example"; // String | 
let body = {}; // Object | 

apiInstance.patchMarketplaceAdAdTypeTargeturl(platformName, adType, body)
  .then((data) => {
    console.log(`patchMarketplaceAdAdTypeTargeturl success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchMarketplaceAdAdTypeTargeturl');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **platformName** | **String** |  |  |
 **adType** | **String** |  | <br />**Values**: featured, sidebar |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**MarketplaceAd**

<a name="patchMarketplaceListing"></a>

# MarketplaceListing patchMarketplaceListing(listingId, body)


PATCH /api/v2/marketplace/listings/{listingId}

Update listing with specified ID

Requires ANY permissions:

* appFoundry:listing:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let listingId = "listingId_example"; // String | The unique identifier for a listing
let body = {}; // Object | 

apiInstance.patchMarketplaceListing(listingId, body)
  .then((data) => {
    console.log(`patchMarketplaceListing success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchMarketplaceListing');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **listingId** | **String** | The unique identifier for a listing |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**MarketplaceListing**

<a name="postMarketplaceAdAdType"></a>

# MarketplaceAd postMarketplaceAdAdType(platformName, adType, body)


POST /api/v2/marketplace/ads/{platformName}/{adType}

Create an ad

Requires ANY permissions:

* appFoundry:listing:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let platformName = "platformName_example"; // String | 
let adType = "adType_example"; // String | 
let body = {}; // Object | 

apiInstance.postMarketplaceAdAdType(platformName, adType, body)
  .then((data) => {
    console.log(`postMarketplaceAdAdType success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMarketplaceAdAdType');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **platformName** | **String** |  |  |
 **adType** | **String** |  | <br />**Values**: featured, sidebar |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**MarketplaceAd**

<a name="postMarketplaceDocuments"></a>

# MarketplaceDocument postMarketplaceDocuments(body)


POST /api/v2/marketplace/documents

Create a document

Requires ANY permissions:

* appFoundry:document:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let body = {}; // Object | 

apiInstance.postMarketplaceDocuments(body)
  .then((data) => {
    console.log(`postMarketplaceDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMarketplaceDocuments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**MarketplaceDocument**

<a name="postMarketplaceDocumentsImage"></a>

# UploadUrlResponse postMarketplaceDocumentsImage(documentId, body)


POST /api/v2/marketplace/documents/images/{documentId}

Creates a presigned url for uploading images for documents

Requires ANY permissions:

* appFoundry:document:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let documentId = "documentId_example"; // String | 
let body = {}; // Object | query

apiInstance.postMarketplaceDocumentsImage(documentId, body)
  .then((data) => {
    console.log(`postMarketplaceDocumentsImage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMarketplaceDocumentsImage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** |  |  |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**UploadUrlResponse**

<a name="postMarketplaceDocumentsNavigations"></a>

# DocumentNavigation postMarketplaceDocumentsNavigations(body)


POST /api/v2/marketplace/documents/navigations

Create a documentation navigation

Requires ANY permissions:

* appFoundry:document:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let body = {}; // Object | 

apiInstance.postMarketplaceDocumentsNavigations(body)
  .then((data) => {
    console.log(`postMarketplaceDocumentsNavigations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMarketplaceDocumentsNavigations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**DocumentNavigation**

<a name="postMarketplaceDocumentsSearch"></a>

# DocumentList postMarketplaceDocumentsSearch(body, opts)


POST /api/v2/marketplace/documents/search

Retrieves document by a search term

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.MarketplaceApi();

let body = {}; // Object | 
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 20 // Number | Page size
};

apiInstance.postMarketplaceDocumentsSearch(body, opts)
  .then((data) => {
    console.log(`postMarketplaceDocumentsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMarketplaceDocumentsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 20] |
{: class="table table-striped"}

### Return type

**DocumentList**

<a name="postMarketplaceEnterpriseagreements"></a>

# EnterpriseAgreement postMarketplaceEnterpriseagreements(body)


POST /api/v2/marketplace/enterpriseagreements

Create an enterprise agreement

Requires ANY permissions:

* billing:enterpriseAgreement:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let body = {}; // Object | 

apiInstance.postMarketplaceEnterpriseagreements(body)
  .then((data) => {
    console.log(`postMarketplaceEnterpriseagreements success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMarketplaceEnterpriseagreements');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**EnterpriseAgreement**

<a name="postMarketplaceEnterpriseagreementsSearch"></a>

# EnterpriseAgreementList postMarketplaceEnterpriseagreementsSearch(body)


POST /api/v2/marketplace/enterpriseagreements/search

Search for an enterprise agreement by a search term

Requires ANY permissions:

* billing:enterpriseAgreement:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let body = [{}]; // Object | 

apiInstance.postMarketplaceEnterpriseagreementsSearch(body)
  .then((data) => {
    console.log(`postMarketplaceEnterpriseagreementsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMarketplaceEnterpriseagreementsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**EnterpriseAgreementList**

<a name="postMarketplaceListings"></a>

# MarketplaceListing postMarketplaceListings(body)


POST /api/v2/marketplace/listings

Create a listing

Requires ANY permissions:

* appFoundry:listing:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let body = {}; // Object | 

apiInstance.postMarketplaceListings(body)
  .then((data) => {
    console.log(`postMarketplaceListings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMarketplaceListings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**MarketplaceListing**

<a name="postMarketplaceListingsSearch"></a>

# PagedMarketplaceListings postMarketplaceListingsSearch(body)


POST /api/v2/marketplace/listings/search

Search for listing matching specified filters and terms

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.MarketplaceApi();

let body = {}; // Object | 

apiInstance.postMarketplaceListingsSearch(body)
  .then((data) => {
    console.log(`postMarketplaceListingsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMarketplaceListingsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**PagedMarketplaceListings**

<a name="postMarketplacePartners"></a>

# Partner postMarketplacePartners(body)


POST /api/v2/marketplace/partners

Creates a partner

Requires ANY permissions:

* appFoundry:vendor:add
* appFoundry:reseller:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let body = {}; // Object | 

apiInstance.postMarketplacePartners(body)
  .then((data) => {
    console.log(`postMarketplacePartners success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMarketplacePartners');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**Partner**

<a name="postMarketplaceResellersListings"></a>

# **&#39;String&#39;** postMarketplaceResellersListings(body)


POST /api/v2/marketplace/resellers/listings

Returns the listing type for the specified partner and listing id.

Requires ANY permissions:

* appFoundry:resellerAssociations:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let body = {}; // Object | 

apiInstance.postMarketplaceResellersListings(body)
  .then((data) => {
    console.log(`postMarketplaceResellersListings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMarketplaceResellersListings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**&#39;String&#39;**

<a name="postMarketplaceResellersOrganization"></a>

# [Reseller] postMarketplaceResellersOrganization(organizationId, body)


POST /api/v2/marketplace/resellers/organizations/{organizationId}

Creates resellers for an organization

Requires ANY permissions:

* appFoundry:resellerAssociations:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let organizationId = "organizationId_example"; // String | 
let body = {}; // Object | 

apiInstance.postMarketplaceResellersOrganization(organizationId, body)
  .then((data) => {
    console.log(`postMarketplaceResellersOrganization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMarketplaceResellersOrganization');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **organizationId** | **String** |  |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**[Reseller]**

<a name="putMarketplaceDocument"></a>

# MarketplaceDocument putMarketplaceDocument(documentId, body)


PUT /api/v2/marketplace/documents/{documentId}

Update a document with specified ID

Requires ANY permissions:

* appFoundry:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let documentId = "documentId_example"; // String | 
let body = {}; // Object | 

apiInstance.putMarketplaceDocument(documentId, body)
  .then((data) => {
    console.log(`putMarketplaceDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putMarketplaceDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** |  |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**MarketplaceDocument**

<a name="putMarketplaceDocumentsNavigation"></a>

# DocumentNavigation putMarketplaceDocumentsNavigation(navigationId, body)


PUT /api/v2/marketplace/documents/navigations/{navigationId}

Update document navigation with specified ID

Requires ANY permissions:

* appFoundry:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let navigationId = "navigationId_example"; // String | 
let body = {}; // Object | 

apiInstance.putMarketplaceDocumentsNavigation(navigationId, body)
  .then((data) => {
    console.log(`putMarketplaceDocumentsNavigation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putMarketplaceDocumentsNavigation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **navigationId** | **String** |  |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**DocumentNavigation**

<a name="putMarketplaceEnterpriseagreement"></a>

# EnterpriseAgreement putMarketplaceEnterpriseagreement(enterpriseAgreementId, body)


PUT /api/v2/marketplace/enterpriseagreements/{enterpriseAgreementId}

Update an existing enterprise agreement

Requires ANY permissions:

* billing:enterpriseAgreement:resellerAccept
* billing:enterpriseAgreement:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let enterpriseAgreementId = "enterpriseAgreementId_example"; // String | The unique identifier for an enterprise agreement
let body = {}; // Object | 

apiInstance.putMarketplaceEnterpriseagreement(enterpriseAgreementId, body)
  .then((data) => {
    console.log(`putMarketplaceEnterpriseagreement success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putMarketplaceEnterpriseagreement');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **enterpriseAgreementId** | **String** | The unique identifier for an enterprise agreement |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**EnterpriseAgreement**

<a name="putMarketplaceListingCategories"></a>

# MarketplaceListing putMarketplaceListingCategories(listingId, body)


PUT /api/v2/marketplace/listings/{listingId}/categories

Set categories on listing

Requires ANY permissions:

* appFoundry:listing:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let listingId = "listingId_example"; // String | The unique identifier for a listing
let body = {}; // Object | 

apiInstance.putMarketplaceListingCategories(listingId, body)
  .then((data) => {
    console.log(`putMarketplaceListingCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putMarketplaceListingCategories');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **listingId** | **String** | The unique identifier for a listing |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**MarketplaceListing**

<a name="putMarketplaceListingMediaOrder"></a>

# MarketplaceListing putMarketplaceListingMediaOrder(listingId, body)


PUT /api/v2/marketplace/listings/{listingId}/media/order

Set the order of media on the listing

Requires ANY permissions:

* appFoundry:listing:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let listingId = "listingId_example"; // String | 
let body = {}; // Object | 

apiInstance.putMarketplaceListingMediaOrder(listingId, body)
  .then((data) => {
    console.log(`putMarketplaceListingMediaOrder success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putMarketplaceListingMediaOrder');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **listingId** | **String** |  |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**MarketplaceListing**

<a name="putMarketplaceListingMetadata"></a>

# MarketplaceListing putMarketplaceListingMetadata(listingId, body)


PUT /api/v2/marketplace/listings/{listingId}/metadata

Set metadata on listing

Requires ANY permissions:

* appFoundry:listing:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let listingId = "listingId_example"; // String | The unique identifier for a listing
let body = {}; // Object | 

apiInstance.putMarketplaceListingMetadata(listingId, body)
  .then((data) => {
    console.log(`putMarketplaceListingMetadata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putMarketplaceListingMetadata');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **listingId** | **String** | The unique identifier for a listing |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**MarketplaceListing**

<a name="putMarketplacePartner"></a>

# Partner putMarketplacePartner(partnerId, body)


PUT /api/v2/marketplace/partners/{partnerId}

Update a partner

Requires ANY permissions:

* appFoundry:listing:manage
* appFoundry:vendor:edit
* appFoundry:reseller:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let partnerId = "partnerId_example"; // String | 
let body = {}; // Object | 

apiInstance.putMarketplacePartner(partnerId, body)
  .then((data) => {
    console.log(`putMarketplacePartner success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putMarketplacePartner');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **partnerId** | **String** |  |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**Partner**

<a name="putMarketplaceResellersOrganization"></a>

# [Reseller] putMarketplaceResellersOrganization(organizationId, body)


PUT /api/v2/marketplace/resellers/organizations/{organizationId}

Update all existing resellers for an organization

Requires ANY permissions:

* appFoundry:resellerAssociations:edit
* appFoundry:reseller:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MarketplaceApi();

let organizationId = "organizationId_example"; // String | 
let body = {}; // Object | 

apiInstance.putMarketplaceResellersOrganization(organizationId, body)
  .then((data) => {
    console.log(`putMarketplaceResellersOrganization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putMarketplaceResellersOrganization');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **organizationId** | **String** |  |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**[Reseller]**

